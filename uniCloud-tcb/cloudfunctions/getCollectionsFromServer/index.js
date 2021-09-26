/*方法说明
       *@CreatorAndTime 赵永 2021-01-29 (ZCTMES环境里做了修改)
       *@method 方法名： getCollectionsFromServer
       *@for 所属类名/或模块名: 云函数 数据访问层
       *@function   这个函数用来查询任意多个集合的数据
       *@mark 使用函数时的注意实现
      
       //几个注意事项：[PM.GM] 
       //1，需要为每个云函数安装wx-server-sdk依赖,在cmd中进入云函数所在的文件夹(可以直接在微信开发者工具中右键在终端打开),然后输入:npm install --save wx-server-sdk@latest 
       //2，函数名前加 async 
       //3，数据库查询语句前用await 
       //4, 制程定义云函数的返回格式：ResDataList[ResData{errMsg,data[]},,,,] errMsg格式："数据来源说明:ok"
       *@param{参数类型}参数名 参数说明
      const db = wx.cloud.database() //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
    const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
    var DBConditions = //*查询多个集合的表达方法
    [{
        collectionsName: "PMGroupList", //*目标集合名数组
        getFields: { //*可以不存在
          PMGroupID: true,
          PMGroupName: true
        }, //获取集合中字段名，按顺序对应, ""表示获取全部
        whereConditions: {
          PMGrade: _.eq("TEST"),
          PMGroupID: "PM009"
        }, 

        //*skipAndLimit: [0, 10]//从第几个查询起,最多查询多少.第一个是skip值，第二个时limit, limit 是0，系统自动限制为20
        //*0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
        orderByConditions: [
          ["PMGroupID", "desc"],
          ["PMGroupName", "desc"]
        ] //*字段名和排列顺序， 多个先后排列
      }
    ]
      */

     const cloud = require('./node_modules/wx-server-sdk').default
     var pmJSTools = require('./pmCloudjsTools').default
     //cloud.init()
    
 
//测试环境
cloud.init({env: 'zctmes2021-test-9gyl6ila6a31bc71'})

//正式环境 不要轻易改这里
//cloud.init({env: 'zctmes2021-4gbkpkah6976a0e1'})

     exports.main = async (event, context) => {
       let DBConditions = event.DBConditions //从客户端获取的变量
       let {
        ENV,
        OPENID,
        APPID
      } = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的 

       var errMsg = ""; // 用于返回
       var result = []; // 用于返回
       try {
         const CloudDB = cloud.database({
          env: 'zctmes2021-test-9gyl6ila6a31bc71'
         }) //定义数据库变量 
         const _ = CloudDB.command
    
         for (tempJ = 0; tempJ < pmJSTools.GetLength(DBConditions); tempJ++) {
           var TempArr = [] //用于存放排序条件【注意最多6个条件】，只要查询至少要有一个排序规则。
           TempL = pmJSTools.GetLength(DBConditions[tempJ].orderByConditions)
           for (i = 0; i < TempL || i < 6; i++) //不足6个条件，需要以最后一个为标准补齐。这样做是未来解决OrderBy的参数不是JSON变量。
           {
             if (i < TempL) {
               TempArr.push([DBConditions[tempJ].orderByConditions[i][0], DBConditions[tempJ].orderByConditions[i][1]]);
             } else {
               if (TempL > 0) {
                 TempArr.push([DBConditions[tempJ].orderByConditions[TempL - 1][0], DBConditions[tempJ].orderByConditions[TempL - 1][1]]); //以最后一个条件补齐
               } else {
                TempArr.push(["_id", "desc"]);//如果没有条件，用_id排序代替。 （从此可以看出，这个函数的灵活性还不够，对小程序数据库理解有限（2020/08/30），留待未来水平高的同事来一次性重构）
               }
             }
           }
           
          
          var TempSkipFrom //定义一个变量用于查询起始
          var TempLimit //定义一个变量用于查询长度
    
          if(pmJSTools.IsNotExist(DBConditions[tempJ].skipAndLimit))
           {
            TempSkipFrom = 0  //没有提供默认最多搜到20个
            TempLimit = 20
           }
           else
           {
            TempSkipFrom = Number(DBConditions[tempJ].skipAndLimit[0]) //转成数字
            TempLimit = Number(DBConditions[tempJ].skipAndLimit[1])//转成数字
           }     
          
          var TempGetFields;
          if(pmJSTools.IsNotExist(DBConditions[tempJ].getFields))
          {
            TempGetFields ={_id: true}//空值时用_id代替，_id肯定要返回的
          }
          else
          {
            TempGetFields = DBConditions[tempJ].getFields
          }
          if(TempSkipFrom >= 0 && TempLimit <=1000)//制程规定任何应用场景，一次查询不能超过1000条。
          {
            if(TempLimit == 0)
            {
              TempLimit = 20 //0 原始定义是按系统限制，这里直接限制为20
            }
            let tempRes = await CloudDB.collection(DBConditions[tempJ].collectionsName) //获取集合名
            .where(
              DBConditions[tempJ].whereConditions //查询条件
            )
            
            .skip(TempSkipFrom) //从SKip查询起，用于分页
            .limit(TempLimit) //limit长度限制
            .field(DBConditions[tempJ].getFields) //允许显示的列 
            .orderBy(TempArr[0][0], TempArr[0][1]) //排序条件1
            .orderBy(TempArr[1][0], TempArr[1][1]) //排序条件2
            .orderBy(TempArr[2][0], TempArr[2][1]) //排序条件3
            .orderBy(TempArr[3][0], TempArr[3][1]) //排序条件4
            .orderBy(TempArr[4][0], TempArr[4][1]) //排序条件5
            .orderBy(TempArr[5][0], TempArr[5][1]) //排序条件6
            .get()
            errMsg = tempRes.errMsg
          result.push(tempRes.data) //获取数据库操作返回数组,data转成result 
          }
          else
          {
            errMsg = "查询函数的起始或长度限制格式错误：起始于： " + TempSkipFrom + ", 限制：" + TempLimit
          }
          
         //注意： 直接使用：return tempRes 也是可以的，符合返回标准。（因为ResData 的格式和数据库查询返回格式是完全一样的）
         //注意： 函数本身在客户端的errMsg和这里数据返回errMdg时两个概念。这里表示数据质量是否合格。  
           
       }
       return {
         errMsg,
         result
       }
     }
     catch (e) {
      console.log(e) //防止e的结构不包含 name 和 message,通过平台看到错误便于调试
      errMsg = "执行函数查询函数时发生错误：Err.name: " + pmJSTools.GetStr(e.name) + ", Err.message: " + pmJSTools.GetStr(e.message)
       return {
         errMsg,
         result
       }
     }
     return {
       errMsg,
       result
     }
     }