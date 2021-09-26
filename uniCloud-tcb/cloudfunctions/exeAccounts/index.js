// 云函数入口文件
const cloud = require('wx-server-sdk')


//测试环境
cloud.init({env: 'zctmes2021-test-9gyl6ila6a31bc71'})

//正式环境 不要轻易改这里
//cloud.init({env: 'zctmes2021-4gbkpkah6976a0e1'})

///////////////////////////////////////////////////////////////////////////////
//这个函数用于把账号相关的操作集合在一起，以减少云函数数量，同时可以保证功能集中管理//
//////////////////////////////////////////////////////////////////////////////
var pmJSTools = require('./pmCloudjsTool').default //引入工具
const pmObjList = require('./pmObjList').default

exports.main = async (event, context) => {

  let funcName = event.funcName //功能名
  let funcPra = event.funcPra //功能参数

  var errMsg = ""; // 用于返回
  var result = []; // 用于返回

  const wxContext = cloud.getWXContext()
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  var TempReS = ""



  switch (funcName) {
    ////////////////////////////////////////////////////////
    //功能1： 用于注册和绑定账户///
    ////////////////////////////////////////////////////////
    case "bindAccount": //绑定账号,信息绑定页面
      TempReS = await bindAccount2(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;
      ////////////////////////////////////////////////////////
      //功能2： 获取账户信息///
      ////////////////////////////////////////////////////////
    case "getAccount": //获取自己账户信息
      if (pmJSTools.IsNullOrEmpty(funcPra)) {
        errMsg = "bindAccount:绑定或注册时发现输入参数为空。"
        result = []
        return {
          errMsg,
          result
        }
      }
      if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
        errMsg = "bindAccount:OPENID为空，无法查询"
        result = []
        return {
          errMsg,
          result
        }
      }
      var DBConditions = //*查询多个集合的表达方法
        [{
          collectionsName: "PMUser", //*目标集合名数组
          whereConditions: {
            WXOpenID: _.eq(wxContext.OPENID),
          }
          //*skipAndLimit: [0, 10]//从第几个查询起,最多查询多少.第一个是skip值，第二个时limit, limit 是0，系统自动限制为20
          //*0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
          //不需要隐藏
          //orderByConditions: [
          //["PMUserID", "desc"]
          //] //*字段名和排列顺序， 多个先后排列
        }]
      try {
        var serRes = await cloud.callFunction //await调用远程云函数
        ({
          name: 'getCollectionsFromServer',
          data: {
            DBConditions
          },
        })
        var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
        errMsg = TempData.errMsg
        result = TempData.result


        //return {
        //  errMsg,
        //  result
       // }

         // GM: 2021-05-07 发现使用之前的方法，前端没有收到值，现在做了修改。

        return TempData


      } catch (e) {
        errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
        result = []
        return {
          errMsg,
          result
        }
      }
      break;
      ////////////////////////////////////////////////////////
      //功能3： 注销账户///
      ////////////////////////////////////////////////////////
    case "cancelAccount": //取消账户
      break;
      ////////////////////////////////////////////////////////
      //功能4： 获取短信验证码///
      ////////////////////////////////////////////////////////
    case "getSMSCode": // 获取短信验证码并存入数据库
      TempReS = await getSMSCode(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;
      ////////////////////////////////////////////////////////
      //功能5： 用于注册和绑定劳务///
      ////////////////////////////////////////////////////////
    case "registLabor": //绑定账号，工友登记绑定
      TempReS = await registLabor2(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;
      ////////////////////////////////////////////////////////
      //功能6： 查询工友清单///
    case "getLaborList":
      TempReS = await getLaborList(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;
      ////////////////////////////////////////////////////////

      ////////////////////////////////////////////////////////
      //功能7： 查询和我关联的工友清单///

    case "getMyRelatedLaborList":
      TempReS = await getMyRelatedLaborList(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;

      ////////////////////////////////////////////////////////
      //功能7： 根据ID值获取一个用户全部信息///
    case "getOneUserInfoByID":
      errMsg = "当前获取功能需进行系统授权，才可操作！"
      result = []
      return {
        errMsg,
        result
      }

      TempReS = await getOneUserInfoByID(funcName, funcPra, wxContext)
      console.log(TempReS)
      return TempReS
      break;
      ///////////////////////////////////
      //功能8：获取个人账户信息
      ////////////////////////////////////
      case "getMyAccountInfo":{
        if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
          errMsg = "getMyAccountInfo:OPENID为空，无法查询"
          result = []
          return {
            errMsg,
            result
          }
        }
        var DBConditions = //*查询多个集合的表达方法
          [{
            collectionsName: "PMUser", //*目标集合名数组
            getFields: { }, //获取集合中字段名，按顺序对应, ""表示获取全部
            whereConditions: {
              WXOpenID: _.eq(wxContext.OPENID),
            }
          }]
        try {
          var serRes = await cloud.callFunction //await调用远程云函数
          ({
            name: 'getCollectionsFromServer',
            data: {
              DBConditions
            },
          })
          var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
          errMsg = TempData.errMsg
          result = TempData.result
          return {
            errMsg,
            result
          }
        } catch (e) {
          errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
          result = []
          return {
            errMsg,
            result
          }
        }
        break;
      }
      break;
       ///////////////////////////////////  
      //功能9：获取微信手机号  
      ////////////////////////////////////  
      case "getPhoneNumber":  
        {  
          let weRunData = event.weRunData //功能名  
          let obj = event.obj //功能参数  
          if(pmJSTools.IsNullOrEmpty(weRunData.errMsg))//成功获取到手机号  
          {  
            var ResData =  
            {  
              errMsg: "OK",  
              result: weRunData.data  
            }   
          return ResData  
          }  
          else  
          {  
            var ResData =  
                    {  
                      errMsg: "获取手机号失败！"+weRunData.errMsg+weRunData.errCode,  
                      result: []  
                    }   
            return ResData  
          }  
          break;  
        }  
          
      ///////////////////////////////////  
      //功能10：更新数据库中的当期最新位置  
      ////////////////////////////////////  
      case "SeNewLongitude":  
      { 
       TempReS = await SeNewLongitude(funcName, funcPra, wxContext)
        console.log(TempReS)
        return TempReS
      }
      ///////////////////////////////////  
      //功能11：获取数据库所有的人员信息  
      ////////////////////////////////////  
      case "getUserIDLaborList":  
      { 
       TempReS = await getUserIDLaborList()
        console.log(TempReS)
        return TempReS
      }

  }

////////////////////////////////////////////////////////
//子函数： 获取短信验证码///
////////////////////////////////////////////////////////
async function getSMSCode(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    ResData.errMsg = "getSMSCode:获取短信验证码时OPENID为空，无法获取"
    ResData.result = []
    return ResData

  }
  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "getSMSCode:获取短信验证码时时发现输入参数为空。"
    ResData.result = []
    return ResData
  }

  if (pmJSTools.IsNullOrEmpty(funcPra.WXLastSMSPhone)) //最后验证码用手机号
  {
    ResData.errMsg = "getSMSCode:获取短信验证码时手机号为空，无法获取。"
    ResData.result = []
    return ResData
  }

  if (pmJSTools.IsNullOrEmpty(funcPra.WXLastSMSName)) //最后验证码用姓名
  {
    ResData.errMsg = "getSMSCode:获取短信验证码用户名空，无法获取。"
    ResData.result = []
    return ResData
  }



  //////////////////////////////////////////////////////
  //PMUser中，OPENID是否存在UPDATE，不存在ADD       //
  //ADD时，   PMUserID =     funcPra.WXLastSMSPhone    //
  //Update时，PMUserID 不变                            //
  ///////////////////////////////////////////////////////

  /////////////////////////////
  // 查询///////////////////
  /////////////////////////////
  var TempID = "" //查到id赋值，
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  var DBConditions = //*查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //*目标集合名数组
      getFields: { //*可以不存在
        _id: true,
        PMIsValid: true
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
      whereConditions: {
        WXOpenID: _.eq(wxContext.OPENID),
      }
    }]
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'getCollectionsFromServer',
      data: {
        DBConditions
      },
    })
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result
    if (errMsg == "OK") {
      TempID = pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "_id"])
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "PMIsValid"]) == "No") {
        var TempResData = {
          errMsg: "当前账户已失效，请查证。",
          result: []
        }
        return TempResData
      }

    } else {
      return TempData
    }

  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }

  //////////////////////////
  //4.1 获取SMSCODE//
  //////////////////////////

  //准备一个生成短信验证码函数
  len = 6
  len = len || 32
  var $chars = '1234567891234567891233456781' /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length
  var pmVerifyCode = ''
  for (i = 0; i < len; i++) {
    pmVerifyCode += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  //发送信验证码函数
  var TempRess = await cloud.callFunction({
    name: 'getSmsVerifyCode',
    data: {
      mobile: funcPra.WXLastSMSPhone,
      pmVerifyCode: pmVerifyCode
    }
  })
  console.log("exeAccounts云调用getSmsVerifyCode结束，结果如下：")
  console.log(TempRess)
  //var TempRes = pmJSTools.getResFromReturn(TempRess)
  //if (TempRes.errMsg == "OK") {
  //} else {
  //pmVerifyCode = ""
  //ResData.errMsg = TempRes.errMsg
  //ResData.result = TempRess
  //return ResData
  //}
  //2020年11月03日 以上注释掉的代码，是因为调试过程中发现
  //getSmsVerifyCode云函数中使用了request,在调用还没结束时就返回了。
  //造成result为underfined。 这样的情形造成报错，而短信可以成功。
  //实际调试中还发现，模拟器可以正常发收短信。而上了真机后短信无法收到。
  //通过重建云函数，逐步安装npm 和 crypto-js居然解决了。原因未知。
  //也许未来还会碰到这个问题，建议更换不同的，直接声明支持云函数的短信接口。
  //避免调试浪费时间和不稳定性。

  ////////////////////////////////////////////
  //4.3 根据查询的结果进行set（增加或修改）//////
  ////////////////////////////////////////////
  var DBExeData
  if (!pmJSTools.IsNullOrEmpty(TempID)) //查到记录的情形
  {
    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " != 'No'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "update",
          collectionName: "PMUser",
          dataList: [{
            _id: TempID, //一定要有_id用来定位
            WXLastSMSPhoneNW: funcPra.WXLastSMSPhone,
            WXLastSMSCode: pmVerifyCode,
            WXLastSMSUserName: funcPra.WXLastSMSName,
            WXLastSMSTime: new Date(),

          }]
        }, ]
    }
  } else //没查到记录的情形
  {
    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          WXOpenID: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: true, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            //add 不需要条件
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "add",
          collectionName: "PMUser",
          dataList: [{
            PMUserID: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMPhoneNB: funcPra.PMUserID,
            PMIsValid: "Yes",

            WXLastSMSPhoneNW: funcPra.WXLastSMSPhone,
            WXLastSMSCode: pmVerifyCode,
            WXLastSMSUserName: funcPra.WXLastSMSName,
            WXLastSMSTime: new Date(),
          }]
        }, ]
    }
  }


  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'setCollectionsToServer',
      data: DBExeData,
      CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
    })
    console.log(serRes)
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result
    return {
      errMsg,
      result
    }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }

}

////////////////////////////////////////////////////////
//子函数： 绑定手机号，用户名///
async function bindAccount(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }

  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "bindAccount:绑定或注册时发现输入参数为空。"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserID)) {
    ResData.errMsg = "bindAccount:用户账户为空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserName)) {
    ResData.errMsg = "bindAccount:用户名空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    ResData.errMsg = "bindAccount:OPENID为空，无法绑定"
    ResData.result = []
    return ResData
  }

  if (pmJSTools.IsNullOrEmpty(funcPra.WXSMSCode)) {
    ResData.errMsg = "短信验证码为空，无法绑定"
    ResData.result = []
    return ResData
  }

  /////////////////////////////
  //3.1 先依据_id查到Doc查询///////////////////
  /////////////////////////////
  var TempID = "" //查到id赋值，
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  var DBConditions = //*查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //*目标集合名数组
      getFields: { //*可以不存在
        _id: true,
        PMIsValid: true,
        WXLastSMSPhoneNW: true,
        WXLastSMSCode: true,
        WXLastSMSUserName: true,
        WXLastSMSTime: true,
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
      whereConditions: {
        WXOpenID: _.eq(wxContext.OPENID),
      }
    }]
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'getCollectionsFromServer',
      data: {
        DBConditions
      },
    })
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result
    if (errMsg == "OK") {
      TempID = pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "_id"])
      //条件判断
      //账户失效
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "PMIsValid"]) == "No") {
        var TempResData = {
          errMsg: "当前账户已失效，请查证。",
          result: []
        }
        return TempResData
      }

      //PMUserID 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSPhoneNW"]) != funcPra.PMUserID) {
        var TempResData = {
          errMsg: "与短信验证时手机号不一致。无法绑定。",
          result: []
        }
        return TempResData
      }

      //PMUserName 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSUserName"]) != funcPra.PMUserName) {
        var TempResData = {
          errMsg: "与短信验证时姓名不一致。无法绑定。",
          result: []
        }
        return TempResData
      }

      //funcPra.WXSMSCode 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSCode"]) != funcPra.WXSMSCode) {
        var TempResData = {
          errMsg: "短信验证不一致。无法绑定。",
          result: []
        }
        return TempResData
      }
    } else {
      return {
        errMsg,
        result
      }
    }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }
  ////////////////////////////////////////////
  //4.3 根据查询的结果进行set（增加或修改）//////
  ////////////////////////////////////////////
  var DBExeData
  if (!pmJSTools.IsNullOrEmpty(TempID)) //查到记录的情形
  {

    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "update",
          collectionName: "PMUser",
          dataList: [{
            _id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMPhoneNB: funcPra.PMUserID,
            WXSMSCode: funcPra.WXSMSCode,
            ZCTReleaseNum:0,
            ZCTReleaseAcceNum:0,
            ZCTReceiveOrderNum:0,  
            ZCTDeliveryAcceNum:0,

          }]
        }, ]
    }
  } else //没查到记录的情形 和短信验证不一样，绑定之前应该已经存在
  {
    var TempResData = {
      errMsg: "没有查询到登录微信信息。",
      result: []
    }
    return TempResData
  }
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'setCollectionsToServer',
      data: DBExeData,
      CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
    })
    console.log(serRes)
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result
    return {
      errMsg,
      result
    }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }
}
////////////////////////////////////////////////////////
//子函数： 账号绑定
async function bindAccount2(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }

  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "bindAccount:绑定或注册时发现输入参数为空。"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserID)) {
    ResData.errMsg = "bindAccount:用户账户为空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserName)) {
    ResData.errMsg = "bindAccount:用户名空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    ResData.errMsg = "bindAccount:OPENID为空，无法绑定"
    ResData.result = []
    return ResData
  }
  /////////////////////////////
  //3.1 先依据_id查到Doc查询///////////////////
  /////////////////////////////
  var TempID = "" //查到id赋值，
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  const CloudDB = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //定义数据库变量 
  var DBConditions = //*查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //*目标集合名数组
      getFields: { //*可以不存在
        _id: true,
        PMIsValid: true,
        ZCTUserSex: true,
        ZCTUserPhoto: true,
        ZCTBirthYear: true,
        ZCTJobType: true,
        ZCTSelCommend: true,
        //WXOpenID: true,
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
    }]

    try {
      let tempRes = await CloudDB.collection(DBConditions[0].collectionsName) //获取集合名
      .where(
        _.or([
          {
            WXOpenID: _.eq(wxContext.OPENID)
          },
          {
            PMUserID: _.eq(funcPra.PMUserID)
          }
        ])
      )
      .field(DBConditions[0].getFields) //允许显示的列 
      .get()
      errMsg = tempRes.errMsg
      result=tempRes.data
      if (errMsg == "collection.get:ok") {
        TempID = pmJSTools.GetSubObjStr([result,  0, "_id"])
        TempPMIsValid = pmJSTools.GetSubObjStr([result,  0, "PMIsValid"])
        //条件判断 账户失效
        if (!pmJSTools.IsNullOrEmpty(TempID)) {
          if (TempPMIsValid == "No" || pmJSTools.IsNullOrEmpty(TempPMIsValid)) {
            var TempResData = {
              errMsg: "当前账户已失效，请查证。",
              result: []
            }
            return TempResData
          }
        }
      } else {
        return {
          errMsg,
          result
        }
      }
    } catch (e) {
      errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
      result = []
      return {
        errMsg,
        result
      }
    }
  // var DBConditions = //*查询多个集合的表达方法
  //   [{
  //     collectionsName: "PMUser", //*目标集合名数组
  //     getFields: { //*可以不存在
  //       _id: true,
  //       PMIsValid: true,
  //       // WXLastSMSPhoneNW: true,
  //       // WXLastSMSCode: true,
  //       // WXLastSMSUserName: true,
  //       // WXLastSMSTime: true,
  //       ZCTUserSex: true,
  //       PMUserID: true,
  //       PMUserName: true,
  //       ZCTUserPhoto: true,
  //       ZCTBirthYear: true,

  //     }, //获取集合中字段名，按顺序对应, ""表示获取全部
  //     whereConditions: {
  //       WXOpenID: _.eq(wxContext.OPENID),
  //     }
  //   }]
  // try {
  //   var serRes = await cloud.callFunction //await调用远程云函数
  //   ({
  //     name: 'getCollectionsFromServer',
  //     data: {
  //       DBConditions
  //     },
  //   })
  //   var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
  //   errMsg = TempData.errMsg
  //   result = TempData.result
  //   if (errMsg == "OK") {
  //     TempID = pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "_id"])
  //     //条件判断
  //     //账户失效
  //     if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "PMIsValid"]) == "No") {
  //       var TempResData = {
  //         errMsg: "当前账户已失效，请查证。",
  //         result: []
  //       }
  //       return TempResData
  //     }
  //   } else {
  //     return {
  //       errMsg,
  //       result
  //     }
  //   }
  // } catch (e) {
  //   errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
  //   result = []
  //   return {
  //     errMsg,
  //     result
  //   }
  // }
  ////////////////////////////////////////////
  //4.3 根据查询的结果进行set（增加或修改）//////
  ////////////////////////////////////////////
  var DBExeData
  if (!pmJSTools.IsNullOrEmpty(TempID)) //查到记录的情形
  {

    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "update",
          collectionName: "PMUser",
          dataList: [{
            _id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMPhoneNB: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            //WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            // ZCTReleaseNum:0,
            // ZCTReleaseAcceNum:0,
            // ZCTReceiveOrderNum:0,  
            // ZCTDeliveryAcceNum:0,
            ZCTUserSex: funcPra.ZCTUserSex,
            ZCTUserPhoto: funcPra.ZCTUserPhoto,
            ZCTBirthYear: funcPra.ZCTBirthYear,
            ZCTNewlatitude:funcPra.ZCTNewlatitude, //最新纬度
            ZCTNewlongitude:funcPra.ZCTNewlongitude,//最新经度
            ZCTNewLocation: {
             type: 'Point',
             coordinates: [funcPra.ZCTNewlongitude,funcPra.ZCTNewlatitude]
             }

          }]
        }, ],
      CloudOpenID: wxContext.OPENID
    }
  } 
  else //没查到记录的情形（新增）
  {
    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "add",
          collectionName: "PMUser",
          dataList: [{
            //_id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMPhoneNB: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMIsValid: "Yes",
            //WXSMSCode: funcPra.WXSMSCode,
            ZCTReleaseNum:0,
            ZCTReleaseAcceNum:0,
            ZCTReceiveOrderNum:0,  
            ZCTDeliveryAcceNum:0,
            ZCTRecommendNum: 0, //推荐数
            ZCTGetNum: 0, //已获取数
            ZCTResidueNum: 300, //可获取数
            ZCTUserSex: funcPra.ZCTUserSex,
            ZCTUserPhoto: funcPra.ZCTUserPhoto,
            ZCTBirthYear: funcPra.ZCTBirthYear,
            ZCTlatitude:funcPra.ZCTlatitude,//纬度
            ZCTlongitude:funcPra.ZCTlongitude,//经度
            ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
            },
            ZCTNewlatitude:funcPra.ZCTNewlatitude, //最新纬度
            ZCTNewlongitude:funcPra.ZCTNewlongitude,//最新经度
            ZCTNewLocation: {
             type: 'Point',
             coordinates: [funcPra.ZCTNewlongitude,funcPra.ZCTNewlatitude]
             }
          }]
        }, ],
      CloudOpenID: wxContext.OPENID
  }
  }
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'setCollectionsToServer',
      data: DBExeData,
      CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
    })
    console.log(serRes)
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result

      if (pmJSTools.IsNullOrEmpty(TempID)) 
      {
        result=[{_id:TempData.result[0].dataList[0]._id}]
        //TempID=TempData.result[0].dataList[0]._id
      }
      else
      {
        result=[{_id:TempID}]
      }

    return {
      errMsg,
      result
    }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }
}




////////////////////////////////////////////////////////
//子函数： registLabor，用户名///
async function registLabor(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }

  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "bindAccount:绑定或注册时发现输入参数为空。"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserID)) {
    ResData.errMsg = "bindAccount:用户账户为空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserName)) {
    ResData.errMsg = "bindAccount:用户名空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    ResData.errMsg = "bindAccount:OPENID为空，无法绑定"
    ResData.result = []
    return ResData
  }

  if (pmJSTools.IsNullOrEmpty(funcPra.WXSMSCode)) {
    ResData.errMsg = "短信验证码为空，无法绑定"
    ResData.result = []
    return ResData
  }

  /////////////////////////////
  //3.1 先依据_id查到Doc查询///////////////////
  /////////////////////////////
  var TempID = "" //查到id赋值，
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  var DBConditions = //*查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //*目标集合名数组
      getFields: { //*可以不存在
        _id: true,
        PMIsValid: true,
        WXLastSMSPhoneNW: true,
        WXLastSMSCode: true,
        WXLastSMSUserName: true,
        WXLastSMSTime: true,

        ZCTUserSex: true,
        ZCTUserPhoto: true,
        ZCTBirthYear: true,
        ZCTJobType: true,
        ZCTSelCommend: true,
        WXOpenID: true,
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
      whereConditions: {
        WXOpenID: _.eq(wxContext.OPENID),
      }
    }]
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'getCollectionsFromServer',
      data: {
        DBConditions
      },
    })
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
    errMsg = TempData.errMsg
    result = TempData.result
    if (errMsg == "OK") {
      TempID = pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "_id"])
      //条件判断
      //账户失效
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "PMIsValid"]) == "No") {
        var TempResData = {
          errMsg: "当前账户已失效，请查证。",
          result: []
        }
        return TempResData
      }

      //PMUserID 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSPhoneNW"]) != funcPra.PMUserID) {
        var TempResData = {
          errMsg: "与短信验证时手机号不一致。无法绑定。",
          result: []
        }
        return TempResData
      }

      //PMUserName 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSUserName"]) != funcPra.PMUserName) {
        var TempResData = {
          errMsg: "与短信验证时姓名不一致。无法绑定。",
          result: []
        }
        return TempResData
      }

      //funcPra.WXSMSCode 和 最近一次绑定的值必须相等
      if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "WXLastSMSCode"]) != funcPra.WXSMSCode) {
        var TempResData = {
          errMsg: "短信验证不一致。无法绑定。",
          result: []
        }
        return TempResData
      }
    } else {
      return {
        errMsg,
        result
      }
    }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }
  ////////////////////////////////////////////
  //4.3 根据查询的结果进行set（增加或修改）//////
  ////////////////////////////////////////////
  var DBExeData
  if (!pmJSTools.IsNullOrEmpty(TempID)) //查到记录的情形
  {

    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "update",
          collectionName: "PMUser",
          dataList: [{
            _id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMPhoneNB: funcPra.PMUserID,
            WXSMSCode: funcPra.WXSMSCode,


            ZCTUserSex: funcPra.ZCTUserSex,
            ZCTUserPhoto: funcPra.ZCTUserPhoto,
            ZCTBirthYear: funcPra.ZCTBirthYear,
            ZCTJobType: funcPra.ZCTJobType,
            ZCTRecommenedBy: funcPra.ZCTRecommenedBy, //推荐人
            ZCTIsLaborRegisted: "Yes", //是否是通过工友注册登记的
            ZCTSelCommend: funcPra.ZCTSelCommend, //自荐文字
            ZCTJobPayType: funcPra.ZCTJobPayType, //薪结方式期望
            ZCTlatitude: funcPra.ZCTlatitude, //纬度
            ZCTlongitude: funcPra.ZCTlongitude, //经度
            ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
            },

            ZCTlatitude: funcPra.ZCTlatitude, //纬度
            ZCTlongitude: funcPra.ZCTlongitude, //经度
            ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
            },

            ZCTNewlatitude:ZCTNewlatitude,
            ZCTNewlongitude:ZCTNewlongitude,
            ZCTNewLocation: {
             type: 'Point',
             coordinates: [ZCTNewlatitude,ZCTNewlongitude]
             },
             ZCTReleaseNum:0,
             ZCTReleaseAcceNum:0,
             ZCTReceiveOrderNum:0,  
             ZCTDeliveryAcceNum:0,
             ZCTRecommendNum: 0, //推荐数
             ZCTGetNum: 0, //已获取数

            
          }]
        }, ]
    }
  } else //没查到记录的情形 和短信验证不一样，绑定之前应该已经存在
  {
    var TempResData = {
      errMsg: "没有查询到登录微信信息。",
      result: []
    }
    return TempResData
  }
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'setCollectionsToServer',
      data: DBExeData,
      CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
    })
    console.log(serRes)
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
   // errMsg = TempData.errMsg
    //result = TempData.result
    // return {
    //   errMsg,
    //   result
    // }
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }

  //推荐人不等于空，向关联表增加数据
  if(!pmJSTools.IsNullOrEmpty(funcPra.ZCTRecommenedBy))
  {
    try
    {
      funcPra._id= result[0][0]._id
      var tempfuncName = "realteLaborToMyList"
      var tempfuncPra = {
        PMUser: funcPra,
        laborid: result[0][0]._id,
        myid: funcPra.ZCTRecommenedBy,
        relatedType: "RECOMMEND",
        relatedTime: new Date(),
      }
  
      var TempRes1 = await realteLaborToMyList(tempfuncName, tempfuncPra, wxContext)
      var TempData1 = pmJSTools.getResFromReturn(TempRes1)
  
      if (TempRes1.errMsg == "OK") {//写入成功
        
      } else {//写入失败
        var errMsg = TempData1.errMsg
        var result = []
        return {
          errMsg,
          result
        }
      }
      
    }catch (e) {
      errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
      result = []
      return {
        errMsg,
        result
      }
    }
   
  }
  return {
    errMsg,
    result
  }

}

////////////////////////////////////////////////////////
//子函数： registLabor2，用户名///绑定数据，直接进行添加数据 没有验证码，手机号直接获取微信的 Date:20210318
async function registLabor2(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }

  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "bindAccount:绑定或注册时发现输入参数为空。"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserID)) {
    ResData.errMsg = "bindAccount:用户账户为空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUserName)) {
    ResData.errMsg = "bindAccount:用户名空，无法绑定"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    ResData.errMsg = "bindAccount:OPENID为空，无法绑定"
    ResData.result = []
    return ResData
  }

  /////////////////////////////
  //3.1 先依据_id查到Doc查询///////////////////
  /////////////////////////////
  var TempID = "" //查到id赋值，
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
  const CloudDB = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //定义数据库变量 
  var DBConditions = //*查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //*目标集合名数组
      getFields: { //*可以不存在
        _id: true,
        PMIsValid: true,
        WXLastSMSPhoneNW: true,
        WXLastSMSCode: true,
        WXLastSMSUserName: true,
        WXLastSMSTime: true,

        ZCTUserSex: true,
        ZCTUserPhoto: true,
        ZCTBirthYear: true,
        ZCTJobType: true,
        ZCTSelCommend: true,
        //WXOpenID: true,
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
      // whereConditions: 
      // {
      //   // WXOpenID: _.eq(wxContext.OPENID),
      //   PMUserID: _.eq(funcPra.PMUserID),
      // }

    }]

    try {
      let tempRes = await CloudDB.collection(DBConditions[0].collectionsName) //获取集合名
      .where(
        _.or([
          {
            WXOpenID: _.eq(wxContext.OPENID)
          },
          {
            PMUserID: _.eq(funcPra.PMUserID)
          }
        ])
      )
      .field(DBConditions[0].getFields) //允许显示的列 
      .get()
      errMsg = tempRes.errMsg
      result=tempRes.data
      if (errMsg == "collection.get:ok") {
        TempID = pmJSTools.GetSubObjStr([result,  0, "_id"])
        TempPMIsValid = pmJSTools.GetSubObjStr([result,  0, "PMIsValid"])
        //条件判断 账户失效
        if (!pmJSTools.IsNullOrEmpty(TempID)) {
          if (TempPMIsValid == "No" || pmJSTools.IsNullOrEmpty(TempPMIsValid)) {
            var TempResData = {
              errMsg: "当前账户已失效，请查证。",
              result: []
            }
            return TempResData
          }
        }
      } else {
        return {
          errMsg,
          result
        }
      }
    } catch (e) {
      errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
      result = []
      return {
        errMsg,
        result
      }
    }

  // try {
  //   var serRes = await cloud.callFunction //await调用远程云函数
  //   ({
  //     name: 'getCollectionsFromServer',
  //     data: {
  //       DBConditions
  //     },
  //   })
  //   var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
  //   errMsg = TempData.errMsg
  //   result = TempData.result
  //   if (errMsg == "OK") {
  //     TempID = pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "_id"])
  //     //条件判断
  //     //账户失效
  //     if (pmJSTools.GetSubObjStr([TempData, "result", 0, 0, "PMIsValid"]) == "No") {
  //       var TempResData = {
  //         errMsg: "当前账户已失效，请查证。",
  //         result: []
  //       }
  //       return TempResData
  //     }
  //   } else {
  //     return {
  //       errMsg,
  //       result
  //     }
  //   }
  // } catch (e) {
  //   errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
  //   result = []
  //   return {
  //     errMsg,
  //     result
  //   }
  // }

  ////////////////////////////////////////////
  //4.3 根据查询的结果进行set（增加或修改）
  //如果是第一次进行工友登记，则进行新增；如果数据库中已存在记录，则进行更新//////
  ////////////////////////////////////////////
  var DBExeData
  if (!pmJSTools.IsNullOrEmpty(TempID)) //查到记录的情形，修改user表数据
  {

    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "update",
          collectionName: "PMUser",
          dataList: [{
            _id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            //WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMPhoneNB: funcPra.PMUserID,
            //WXSMSCode: funcPra.WXSMSCode,


            ZCTUserSex: funcPra.ZCTUserSex,
            ZCTUserPhoto: funcPra.ZCTUserPhoto,
            ZCTBirthYear: funcPra.ZCTBirthYear,
            ZCTJobType: funcPra.ZCTJobType,
            //ZCTSelCommend: funcPra.ZCTSelCommend, //自荐文字
            ZCTJobPayType: funcPra.ZCTJobPayType, //薪结方式期望
            //ZCTRecommenedBy: funcPra.ZCTRecommenedBy, //推荐人
            //ZCTIsLaborRegisted: "Yes", //是否是通过工友注册登记的
            ZCTlatitude: funcPra.ZCTlatitude, //纬度
            ZCTlongitude: funcPra.ZCTlongitude, //经度
            ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
            },

            ZCTNewlatitude:funcPra.ZCTlongitude,
            ZCTNewlongitude:funcPra.ZCTlatitude,
            ZCTNewLocation: {
             type: 'Point',
             coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
             },
            //  ZCTReleaseNum:0,
            //  ZCTReleaseAcceNum:0,
            //  ZCTReceiveOrderNum:0,  
            //  ZCTDeliveryAcceNum:0,
            
            // ZCTRecommendNum: 0, //推荐数
            // ZCTGetNum: 0, //已获取数
            // ZCTResidueNum: 10, //可获取数

          }]
        }, ],
      CloudOpenID: wxContext.OPENID
    }
  } 
  else //没查到记录的情形,新增user表数据
  {
    DBExeData = {
      DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
        [{
          logicType: "", //datalist元素之间的逻辑关系（&&  ||），第一个数值必为空，有也会被忽略
          collectionName: "PMUser", //目标集合名
          _id: TempID, //填写目标记录的_id值，用于事务条件定位
          IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
          conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
          {
            WXOpenID: " == '" + wxContext.OPENID + "'", //判断条件 OPENID要正确,注意要加上单引号  '" + wxContext.OPENID + "'"
            PMIsValid: " == 'Yes'", //判断条件： PMIsValid
          }
        }],
      DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
        [{
          exeType: "add",
          collectionName: "PMUser",
          dataList: [{
           // _id: TempID, //一定要有_id用来定位
            PMUserID: funcPra.PMUserID,
            PMUserName: funcPra.PMUserName,
            WXOpenID: wxContext.OPENID,
            WXLastBindTime: new Date(),
            PMPhoneNB: funcPra.PMUserID,
            WXSMSCode: funcPra.WXSMSCode,
            PMIsValid: "Yes",

            ZCTUserSex: funcPra.ZCTUserSex,
            ZCTUserPhoto: funcPra.ZCTUserPhoto,
            ZCTBirthYear: funcPra.ZCTBirthYear,
            ZCTJobType: funcPra.ZCTJobType,
            ZCTRecommenedBy: funcPra.ZCTRecommenedBy, //推荐人
            ZCTIsLaborRegisted: "Yes", //是否是通过工友注册登记的
            ZCTSelCommend: funcPra.ZCTSelCommend, //自荐文字
            ZCTJobPayType: funcPra.ZCTJobPayType, //薪结方式期望
            ZCTlatitude: funcPra.ZCTlatitude, //纬度
            ZCTlongitude: funcPra.ZCTlongitude, //经度
            ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
            },
            ZCTRecommendNum: 0, //推荐数
            ZCTGetNum: 0, //已获取数
            ZCTResidueNum: 300, //可获取数
            ZCTNewlatitude:funcPra.ZCTlongitude,
            ZCTNewlongitude:funcPra.ZCTlatitude,
            ZCTNewLocation: {
             type: 'Point',
             coordinates: [funcPra.ZCTlongitude,funcPra.ZCTlatitude]
             },
             ZCTReleaseNum:0,
             ZCTReleaseAcceNum:0,
             ZCTReceiveOrderNum:0,  
             ZCTDeliveryAcceNum:0,
          }]
        }, ],
      CloudOpenID: wxContext.OPENID
    }
  }
  try {
    var serRes = await cloud.callFunction //await调用远程云函数
    ({
      name: 'setCollectionsToServer',
      data: DBExeData,
      CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
    })
    console.log(serRes)
    var TempData = pmJSTools.getResFromReturn(serRes) //getResFromReturn整合和简化sertRes供前端使用。
   
    
    if(TempData.errMsg!="OK")
    {
      errMsg = TempData.errMsg
      result = TempData.result
      return {
        errMsg,
        result
      }
    }
    else
    {
      if (pmJSTools.IsNullOrEmpty(TempID)) 
      {
        result=[{_id:TempData.result[0].dataList[0]._id}]
        TempID=TempData.result[0].dataList[0]._id
      }
      else
      {
        result=[{_id:result[0]._id}]
      }
     // TempID=TempData.result[0].dataList[0]._id
    }
    //把openid放到result中
    //result = [{OPENID:wxContext.OPENID}]//后面考虑推荐工友不用openID传递是  这句代码需要去掉
    
  } catch (e) {
    errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
    result = []
    return {
      errMsg,
      result
    }
  }

  //推荐人不等于空，向关联表增加数据
  if(!pmJSTools.IsNullOrEmpty(funcPra.ZCTRecommenedBy))
  {
    try
    {
      funcPra._id= TempID
      var tempfuncName = "realteLaborToMyList"
      var tempfuncPra = {
        PMUser: funcPra,
        laborid: TempID,
        _id: TempID,
        //myid: funcPra.ZCTRecommenedBy,
        relatedType: "RECOMMEND",
        relatedTime: new Date(),
      }
  
      var TempRes1 = await realteLaborToMyList(tempfuncName, tempfuncPra, wxContext)
      var TempData1 = pmJSTools.getResFromReturn(TempRes1)
  
      if (TempRes1.errMsg == "OK") {//写入成功
        
      } else {//写入失败
        var errMsg = TempData1.errMsg
        var result = []
        return {
          errMsg,
          result
        }
      }
      
    }catch (e) {
      errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
      result = []
      return {
        errMsg,
        result
      }
    }
   
  }
  return {
    errMsg,
    result
  }

}

////////////////////////////////////////////////////////
//子函数： getLaborList，获取劳务清单,如果是我的关联人，直接查询出电话，否则显示PMUserID为空///
async function getLaborList(funcName, funcPra, wxContext) {
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    errMsg = "realteLaborToMyList:OPENID为空，无法执行"
    result = []
    return {
      errMsg,
      result
    }
  }

  var serRes = {
    errMsg: "",
    result: []
  }
  var tempSkipAndLimit = [0, 0]
  if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
  {
    tempSkipAndLimit = funcPra.skipAndLimit
  }
  //从数据库获取交付任务清单
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command

  var DBConditions = //查询多个集合的表达方法
    [{
      collectionsName: "PMUser", //目标集合名数组
      getFields: {
        PMUserID: true, //先拿到手机号码，如果ZCTMyRelatedLaborList没有则删空
        PMUserName: true,
        WXLastBindTime: true,
        PMIsValid: true,

        ZCTUserSex: true, //性别
        ZCTUserPhoto: true, //照片
        ZCTBirthYear: true, //出生年
        ZCTJobType: true, //工种
        ZCTLaborRegistPos: true, //注册时的地点
        ZCTRecommenedBy: true, //推荐人
        ZCTIsLaborRegisted: true, //是否是通过工友注册登记的
        ZCTSelCommend: "", //自荐文字
        _id: true,
        ZCTJobPayType: true,
        ZCTlatitude: true,
        ZCTlongitude: true,
        ZCTResidueNum: true
      }, //获取集合中字段名，按顺序对应, ""表示获取全部
      whereConditions: {
        PMIsValid: _.eq("Yes"),
        ZCTIsLaborRegisted: _.eq("Yes"),
        WXOpenID: _.neq(wxContext.OPENID),
        PMUserID: _.neq("ZCTAssistant"),
      }, //{PMUserID:_.eq("4T43T")},  //查询条件


      skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

      //0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
      orderByConditions: [
        ["WXLastBindTime", "desc"],
      ] //字段名和排列顺序， 多个先后排列
    }]

  var resData = await cloud.callFunction //await调用远程云函数
  ({
    name: 'getCollectionsFromServer',
    data: {
      DBConditions,

    },
  })

  var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳


  var OptionUserData = [];
  let TempUserRes = await db.collection('PMUser').where({
    WXOpenID: _.eq(wxContext.OPENID)
  }).get()
  if (TempUserRes.data.length == 0) {
    serRes.errMsg ="未获取到您的信息，无法执行"
    serRes.result =[]
    return serRes
  }
  OptionUserData.push(TempUserRes.data);

  //对获取的对象，进行我的关联人员 PMUserID解锁
  var tempRes1 = await db.collection('ZCTMyRelatedLaborList').where({
    //laborid: TempData.result[0][key]._id,
    myid: OptionUserData[0][0]._id
  }).get()
  for (var key in TempData.result[0]) {
    var TempAllow=true;
    for (var keyM=0;keyM<tempRes1.data.length;keyM++) {
      if(TempData.result[0][key]._id==tempRes1.data[keyM].laborid)
      {
        TempAllow=false;
      }
    }
    if (TempAllow==false) {
      //ZCTMyRelatedLaborList表中有这个账户，说明已经关联

    } else {
      //ZCTMyRelatedLaborList表中有这个账户，说明已经没有关联，则手机号删除。
      TempData.result[0][key].PMUserID = null
    }
  }

  serRes.errMsg = TempData.errMsg
  serRes.result = TempData.result
  return serRes


}

////////////////////////////////////////////////////////
//子函数： 获取所有系统人员编号/
async function getUserIDLaborList() {
  //返回消息
  var TempResObject = {
    errMsg: "",
    result: []
  }
  const CloudDB = cloud.database({
    // 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
    throwOnNotFound: false,
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  })
  let TempResult;
  try {
    TempResult = await CloudDB.runTransaction(async transaction => {
     const TempUser = await transaction.collection('PMUser').get();
      if (TempUser.data.length>0) {
        TempResObject.errMsg = "OK";
        TempResObject.result.push(TempUser.data);
      } else {
        TempResObject.errMsg = TempUser.errMsg;
      }
      return TempResObject;
    });
  } catch (e) {
    TempResObject.errMsg = "获取人员信息失败:" + pmJSTools.GetStr(e);
    return TempResObject;
  }
  return TempResObject;



}


/////////////////////////////////////////////////////////////
//子函数： realteLaborToMyList，增加劳务信息到我的工友清单。////
////////////////////////////////////////////////////////////

async function realteLaborToMyList(funcName, funcPra, wxContext) {
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command


  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    errMsg = "realteLaborToMyList:创建任务ZCTMyRelatedLabor时，参数为空。"
    result = []
    return {
      errMsg,
      result
    }
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.PMUser)) {
    errMsg = "realteLaborToMyList:创建任务ZCTMyRelatedLabor时，funcPra.PMUser为空。"
    result = []
    return {
      errMsg,
      result
    }
  }

  if (pmJSTools.IsNullOrEmpty(funcPra.relatedType)) {
    errMsg = "realteLaborToMyList:创建任务ZCTMyRelatedLabor时，funcPra.relatedType为空。"
    result = []
    return {
      errMsg,
      result
    }
  }

  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    errMsg = "realteLaborToMyList:OPENID为空，无法执行"
    result = []
    return {
      errMsg,
      result
    }
  }
  var errMsg = ""; // 用于返回
  var resultLst = []; // 用于返回
  var OptionUserData=[]; 
  let TempUserRes=await db.collection('PMUser').where({
    WXOpenID: _.eq(wxContext.OPENID)
  }).get()
  OptionUserData.push(TempUserRes.data)
  try {
    const CloudDB = cloud.database({
      throwOnNotFound: false,
      env: 'zctmes2021-test-9gyl6ila6a31bc71'
    }) //定义数据库变量 
    const TempResult = await CloudDB.runTransaction(async transaction => {

      if(OptionUserData.length==0) {
        errMsg = "realteLaborToMyList:根据OPENID未找到相关信息，无法执行"
        return {
          errMsg,
          result:[]
        }
      }
      var tempmyid=funcPra.myid
      if(pmJSTools.IsNullOrEmpty(tempmyid))
      {
        tempmyid=OptionUserData[0][0]._id
      }
      var Temp_id="";
      var TempResult_id=[]
      var dataList={
        laborid: funcPra.PMUser._id, //被关联的labor _id
        // myid: wxContext.OPENID, //我的_id
        myid: tempmyid, //我的_id
        relatedType: funcPra.relatedType, //关联类型： RECOMMEND:推荐，TASK:任务关联，BUY:直接购买，CHANGE:交换获得，ALLOWED:系统特殊允许
        relatedTime: new Date(), //关联时间
        ZCTIsDeleted: "",
        PMUserName: funcPra.PMUser.PMUserName,
        PMUserID: funcPra.PMUser.PMUserID,
        WXLastBindTime: funcPra.PMUser.WXLastBindTime,
        ZCTUserSex: funcPra.PMUser.ZCTUserSex, //性别
        ZCTUserPhoto: funcPra.PMUser.ZCTUserPhoto, //照片
        ZCTBirthYear: funcPra.PMUser.ZCTBirthYear, //出生年
        ZCTJobType: funcPra.PMUser.ZCTJobType, //工种
        ZCTLaborRegistPos: funcPra.PMUser.ZCTLaborRegistPos, //注册时的地点
        ZCTRecommenedBy: funcPra.PMUser.ZCTRecommenedBy, //推荐人
        ZCTIsLaborRegisted: funcPra.PMUser.ZCTIsLaborRegisted, //是否是通过工友注册登记的
        ZCTJobPayType: funcPra.PMUser.ZCTJobPayType,
        ZCTlatitude: funcPra.PMUser.ZCTlatitude,
        ZCTlongitude: funcPra.PMUser.  ZCTlongitude,
      }
      await transaction.collection("ZCTMyRelatedLaborList").add({
        data: dataList
      }).then(res => {
        Temp_id=res._id;
      })
      TempResult_id.push({_id:Temp_id})
      resultLst.push({dataList:TempResult_id})
      var Tempresult = await transaction.collection("PMUser").doc(OptionUserData[0][0]._id).update({
        data: {
          ZCTGetNum:_.inc(1),
          ZCTResidueNum:_.inc(-1)
        }
      })
      if (Tempresult.stats.updated > 0) {
      } else {
        var ResData =
        {
          errMsg: "更新影响行为0，可能是权限原因造成的。",
          result: []
        } 
      return ResData
      }
      errMsg = "setCollectionsToServer:ok"

    })
  } catch (e) {
    var ResData =
    {
      errMsg: "realteLaborToMyList:" + e,
      result: []
    } 
    return ResData
  }
  var ResData =
    {
      errMsg: errMsg,
      result: resultLst
    } 
    var TempSerResData = pmJSTools.getResFromReturn(ResData) //getResFromReturn整合和简化sertRes供前端使用。
    return TempSerResData
}

/////////////////////////////////////////////////////////////
//子函数： 加载和我关联工友，增加劳务信息到我的工友清单。////
////////////////////////////////////////////////////////////
async function getMyRelatedLaborList(funcName, funcPra, wxContext) {
  if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
    errMsg = "realteLaborToMyList:OPENID为空，无法执行"
    result = []
    return {
      errMsg,
      result
    }
  }


  var serRes = {
    errMsg: "",
    result: []
  }
  var tempSkipAndLimit = [0, 0]
  if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
  {
    tempSkipAndLimit = funcPra.skipAndLimit
  }
  //从数据库获取交付任务清单
  const db = cloud.database({
    env: 'zctmes2021-test-9gyl6ila6a31bc71'
  }) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过 
  const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command

  var errMsg = ""; // 用于返回
  var resultLst = []; // 用于返回
  var OptionUserData = [];
  let TempUserRes = await db.collection('PMUser').where({
    WXOpenID: _.eq(wxContext.OPENID)
  }).get()
  if (TempUserRes.data.length == 0) {
    //errMsg = "getMyRelatedLaborList:根据OPENID未找到相关信息，无法执行"
    errMsg = "未获取到您的信息，无法执行"
    return {
      errMsg,
      result: []
    }
  }
  OptionUserData.push(TempUserRes.data)


  let tempRes = await db.collection("ZCTMyRelatedLaborList").aggregate() //获取集合名
              .lookup({
                from: 'PMUser',
                localField: 'laborid',
                foreignField: '_id',
                as: 'UserList',
              })
              .match({ //查询条件
                myid: _.eq(OptionUserData[0][0]._id),
              })
              .skip(tempSkipAndLimit[0]) //从SKip查询起，用于分页
              .limit(tempSkipAndLimit[1]) //limit长度限制
              .end();
              console.log(tempRes)
            var TempApplicationRes = {
              errMsg: tempRes.errMsg,
              result: tempRes.list
            }
            var TempData = pmJSTools.getResFromReturn(TempApplicationRes) //getResFromReturn整合和简
            if(TempData.errMsg!="OK")
            {
              serRes.errMsg = TempData.errMsg
              serRes.result = []
              return serRes
            }
            if(pmJSTools.IsNullOrEmpty(TempData.result))
            {
              serRes.errMsg = TempData.errMsg
              serRes.result = []
              return serRes
            }
            var TempResultPush=[]
          for(var TempI=0;TempI<TempData.result.length;TempI++)
          {
            if(!pmJSTools.IsNullOrEmpty(TempData.result[TempI].UserList[0]))
            {
              TempResultPush.push(TempData.result[TempI].UserList[0])
            }
          }
            serRes.errMsg = TempData.errMsg
            serRes.result =[TempResultPush]
        return serRes

  // var DBConditions = //查询多个集合的表达方法
  //   [{
  //     collectionsName: "ZCTMyRelatedLaborList", //目标集合名数组
  //     getFields: {
  //       laborid: true, //先拿到手机号码，如果ZCTMyRelatedLaborList没有则删空
  //       PMUserID: true, //和laborid复用
  //       PMUserName: true,
  //       WXLastBindTime: true,
  //       PMIsValid: true,
  //       relatedTime:true,
  //       ZCTUserSex: true, //性别
  //       ZCTUserPhoto: true, //照片
  //       ZCTBirthYear: true, //出生年
  //       ZCTJobType: true, //工种
  //       ZCTLaborRegistPos: true, //注册时的地点
  //       ZCTRecommenedBy: true, //推荐人
  //       ZCTIsLaborRegisted: true, //是否是通过工友注册登记的
  //       ZCTSelCommend: "", //自荐文字
  //       _id: true,
  //       ZCTJobPayType: true,
  //       ZCTlatitude: true,
  //       ZCTlongitude: true
  //     }, //获取集合中字段名，按顺序对应, ""表示获取全部
  //     whereConditions: {

  //       myid: _.eq(OptionUserData[0][0]._id),
  //     }, //{PMUserID:_.eq("4T43T")},  //查询条件


  //     skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

  //     //0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
  //     orderByConditions: [
  //       ["relatedTime", "desc"],
  //     ] //字段名和排列顺序， 多个先后排列
  //   }]

  // var resData = await cloud.callFunction //await调用远程云函数
  // ({
  //   name: 'getCollectionsFromServer',
  //   data: {
  //     DBConditions,

  //   },
  // })

  // var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳

  // serRes.errMsg = TempData.errMsg
  // serRes.result = TempData.result
  // return serRes




}




////////////////////////////////////////////////////////
//子函数： 更新最新的经纬度///
async function SeNewLongitude(funcName, funcPra, wxContext) {
  var ResData = {
    errMsg: "",
    result: []
  }
  if (pmJSTools.IsNullOrEmpty(funcPra)) {
    ResData.errMsg = "SeNewLongitude:绑定或注册时发现输入参数为空。"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.ZCTNewlongitude)) {
    ResData.errMsg = "SeNewLongitude:最新经度为空"
    ResData.result = []
    return ResData
  }
  if (pmJSTools.IsNullOrEmpty(funcPra.ZCTNewlatitude)) {
    ResData.errMsg = "SeNewLongitude:最新纬度为空"
    ResData.result = []
    return ResData
  }


       //准备条件新建  
       var DBExeData = {
        DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
       [{
           exeType: "update",
           collectionName: "PMUser",
           dataList: [{
            _id:funcPra._id, //
             ZCTNewlatitude:funcPra.ZCTNewlatitude,
             ZCTNewlongitude:funcPra.ZCTNewlongitude,
             ZCTLocation: {
              type: 'Point',
              coordinates: [funcPra.ZCTNewlatitude,funcPra.ZCTNewlongitude]
            },
           }]
         }
       ],
       DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
       [],
       CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
      }
      return pmJSTools.callFunctionRes(cloud,DBExeData);


  }
}
