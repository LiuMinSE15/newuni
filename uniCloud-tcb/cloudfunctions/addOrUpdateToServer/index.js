 /*方法说明
       *@CreatorAndTime 赵永 2020-08-24
       *@method 方法名： AndOrUpdateToServer
       *@for 所属类名/或模块名: 云函数 数据访问层
       *@function 功能说明 一次完成 依据记录是否存在，进行新增或修改
       *@mark 使用函数时的注意实现
       *@param{参数类型}参数名 参数说明
    ///////////////////////调用实例供参考 
    const db = wx.cloud.database() //*客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
    const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
    var DBConditionsAndDataForExe = //*查询目标集合，查不到就add,查到一个就update
      [{
        collectionsName: "PMGroupList", //*目标集合名数组
        getFields: { //*可以不存在
          PMGroupID: true,
          PMGroupName: true
        }, //获取集合中字段名，按顺序对应, ""表示获取全部
        whereConditions: {
          PMGrade: _.eq("TEST"),
          PMGroupID: "PM00900"
        },

        //*skipAndLimit: [0, 10]//从第几个查询起,最多查询多少.第一个是skip值，第二个时limit, limit 是0，系统自动限制为20
        //*0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
        orderByConditions: [
          ["PMGroupID", "desc"],
          ["PMGroupName", "desc"]
        ], //字段名和排列顺序， 多个先后排列
        DataForExe: {
          PMGrade: "TEST",
          PMGroupID: "PM00900",
          PMGroupJoinTime: new Date(),
          PMGroupName: "上海制程信息技术有限公司(XXX123)",
          PMIsDeleted: "Yes"
        }
      }]
    var resData = await pmSerTools.addOrUpdateToServer(DBConditionsAndDataForExe)
    this.setData({
      msgAddOrUpdate: "执行结果:" + resData.errMsg + "，执行数据： " + JSON.stringify(resData.result)
    })
    //////////////////////////////////////////////////

       *@return 制程定义云函数的返回格式：{errMsg,result[]}
      */
 const pmJSTools = require('./pmCloudjsTools').default
 const cloud = require('./node_modules/wx-server-sdk').default
//cloud.init()

//测试环境
cloud.init({env: 'zctmes2021-test-9gyl6ila6a31bc71'})

//正式环境 不要轻易改这里
//cloud.init({env: 'zctmes2021-4gbkpkah6976a0e1'})


 // 云函数入口函数
 exports.main = async (event, context) => {
  let {
    OPENID,
    APPID
  } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的 
   let DBConditionsAndDataForExe = event.DBConditionsAndDataForExe //从客户端获取的执行命令的前提条件
   //数值清单 每个条件项的对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
   //////////////////////////////////////////////////////////////////////////////
   //调用getCollectionsFromServer，通过参数DBConditions获取数据，看是否满足执行条件//
   //////////////////////////////////////////////////////////////////////////////
   var errMsg = ""; //返回用errMsg
   var result = []; //返回数组
   try {
     if (DBConditionsAndDataForExe.length > 1 || DBConditionsAndDataForExe.length <= 0) {
       errMsg = "这是代码编程问题：查询条件>1条或不存在， addOrUpdate是用于对一个collection的操作，请确认。"
       return {
         errMsg,
         result
       }
     }
     var  DBConditions = DBConditionsAndDataForExe
     var ResData = await cloud.callFunction({
       // 云函数名称
       name: 'getCollectionsFromServer', //先根据条件查询
       // 传给云函数的参数
       data: {
        DBConditions
       },
     })
     var TempData = pmJSTools.getResFromReturn(ResData) //通过标准函数整理结果返回
     if (pmJSTools.GetErrMsgValue(TempData.errMsg) == "OK") //正常完成了数据库的查询
     {
       errMsg = "OK" //正常完成了数据库的查询
       if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([TempData,"result",0])) || pmJSTools.GetLength(pmJSTools.GetSubObj([TempData,"result",0])) == 1) //没有搜索到任务可以执行新增
       {
         //errMsg = "正常查询结束,没有找到结果或者找到一个，可以执行新增和修改。"
         //新增函数

         var TempIDStr = ""
         if(pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([TempData,"result",0,0])))
         {
          TempIDStr = ""
         }
         else
         {
          TempIDStr = pmJSTools.GetStr((pmJSTools.GetSubObj([TempData,"result",0,0,"_id"])))
         }
         //////////////////////////////////////////////////////////////////////////////
         //根据数据库获得的结果来进行计算，来决定是新增还是修改。///////////////////////////
         //////////////////////////////////////////////////////////////////////////////
         var DBConditions //用于执行的条件 【注意这里的DBConditions用来计算条件】
         var DBExecutions //用于执行
         if (TempIDStr != "") {//找到id值
           DBConditions = //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
             [{
               logicType: "", //datalist元素之间的逻辑关系（and  or ），第一个数值必为空，有也会被忽略
               collectionName: DBConditionsAndDataForExe[0].collectionsName, //目标集合名
               _id: TempIDStr, //填写目标记录的_id值，用于事务条件定位
               IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
               conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
               {
                 _id : " == '" + TempIDStr + "'"
               }
             }]
             DBConditionsAndDataForExe[0].DataForExe._id = TempIDStr //直接给DataForExe添加或更新id值
             DBExecutions =  //进行Update操作
             [{
              exeType: "update",  //增加记录的案例
              collectionName:  DBConditionsAndDataForExe[0].collectionsName,
              dataList: [DBConditionsAndDataForExe[0].DataForExe
              ]
            }]
         } else {//没找到id值得情形
           DBConditions= //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
             [{
               logicType: "", //datalist元素之间的逻辑关系（and  or ），第一个数值必为空，有也会被忽略
               collectionName: DBConditionsAndDataForExe[0].collectionsName, //目标集合名
               _id: "", //填写目标记录的_id值，用于事务条件定位
               IsNotExistAllowed: true, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
             }]
             DBExecutions =  //进行add操作
             [{
              exeType: "add",  //增加记录的案例
              collectionName:  DBConditionsAndDataForExe[0].collectionsName,
              dataList: [DBConditionsAndDataForExe[0].DataForExe
              ]
         }]
        }
   //////////////////////////////////////////////////////////////////////////////
   //******************交由setCollectionsToServer来进行新增或修改****************//
   //////////////////////////////////////////////////////////////////////////////
        var CloudOpenID
        CloudOpenID = OPENID
         var ResData = await cloud.callFunction({
           // 云函数名称
           name: 'setCollectionsToServer',
           // 传给云函数的参数
           data: 
           {
            DBConditions,
            DBExecutions,
            CloudOpenID
           }
          })
         var TempData = pmJSTools.getResFromReturn(ResData) //通过标准函数整理结果返回
         errMsg = TempData.errMsg
         result = TempData.result
         return {
           errMsg,
           result
         }
       }
       if (pmJSTools.GetLength(pmJSTools.GetSubObj([TempData,"result",0])) > 1) {
         errMsg = "有符合条件不止一条Doc,不符合函数定义，只对一条记录更新的要求。";
         return {
           errMsg,
           result
         }
       }
       errMsg = "result格式不合规";
       result = TempData.result
       return {
         errMsg,
         result
       }
     } else {
       errMsg = TempData.errMsg
     }
   } catch (e) {
     console.log(e) //防止e的结构不包含 name 和 message,通过平台看到错误便于调试
     errMsg = "执行函数addOrUpate时发生错误：Err.name: " + pmJSTools.GetStr(e.name) + ", Err.message: " + pmJSTools.GetStr(e.message)
   }
   // 根据条件查询是否有符合条件的记录
   // 没查到记录进行新增
   // 查到记录进行修改     
   return {
     errMsg,
     result
   }
 }