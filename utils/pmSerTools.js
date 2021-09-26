//有时上面会自动出现一些导入语句，原因未知，造成编译不通过。
//所有需要和云函数进行交互的操作写在这里
const pmJSTools = require("./pmJSTools.js");
var app = getApp();
const targetServerEnv = 'tcb-ecxw1hs9f19080-6d00j26b1957e'; //云环境ID
//测试环境
//const targetServerEnv = 'zctmes2021-test-9gyl6ila6a31bc71'
//正式环境 ==>
//const targetServerEnv = 'zctmes2021-4gbkpkah6976a0e1'
//声明曝露函数给require方

module.exports = {
  getCollectionsFromDB: getCollectionsFromDB,
  getResFromReturn: getResFromReturn,
  addOrUpdateToServer: addOrUpdateToServer,
  exeAccounts: exeAccounts,
  exePMCOI: exePMCOI,
  UploadFile: UploadFile,
  ExeMessage: ExeMessage,
  exePayment: exePayment,
  getPhoneNumber: getPhoneNumber,
  getAccount: getAccount
}; //调用结果处理函数
//1, 对云函数返回的结果进行检查和统计格式确认，并将结果整合好给前端，简化前端代码处理的工作量
//2，errMsg 成功消息，result只保留OK的数值。
//3，让调用者获得如下结构： {errMsg,result}
//4，函数名是： get Result From Reurn data 的简称

function getResFromReturn(SerRes) {
  var errMsg = ""; // 用于返回

  var result = []; // 用于返回

  if (pmJSTools.IsNullOrEmpty(SerRes)) {
    //SerRes为空
    errMsg = "返回数据为空。";
    return {
      errMsg,
      data
    };
  } else {
    if (pmJSTools.GetErrMsgValue(SerRes.errMsg) == "OK") {
      //调用正常的情况下
      if (pmJSTools.GetErrMsgValue(pmJSTools.GetSubObj([SerRes, "result", "errMsg"])) == "OK") {
        errMsg = "OK"; //简化，也是为了过滤前面的调用对象说明，减少误会
      } else {
        if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "errMsg"]))) {
          //分别处理：SerRes.result.errMsg 为空的情况
          //情况1： 程序员重复调用（已经脱壳了）
          //情况2： 如开发说明中的：2.4.9.1   result:   {Data[]}
          //情况3： 如开发说明中的：2.4.9.2 result: {[errMsg，Data[]],...}
          //防错代码
          if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "result"]))) {
            errMsg = "制程代码规范要求： result和errMsg同时出现，现在有result，没有errMsg说明代码有错误。常见错误是errMsg拼写问题。";
          } else {
            errMsg = "OK"; //SerRes.result.errMsg 为空，可能是程序员重复调用 ，为了防止程序员重复调用
          }
        } else {
          errMsg = SerRes.result.errMsg; //errMsg不为OK,一直上传到最上调用层
        }
      }

      if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([SerRes, "result", "errMsg"]))) //不能直接用IsNullOrEmpty,undefined 表示不存在，为空还是存在的情况下
        {
          if (SerRes.result === undefined || SerRes.result == null) {
            errMsg = "代码： 返回结果是OK,但是result 是undefined 或 null,说明调用有问题。"; //因为errMsg 是OK，和它对应的result 不可以是 undefined ，或 null,否则证明有潜在错误。这是个防错设计
          } else {
            result = pmJSTools.GetSubObj([SerRes, "result"]);
          } //一般情况下，只要执行result = SerRes.result.result就可以，考虑到，程序员可能会搞不清楚是否要用getResFromReturn
          //为了防错，自动执行result = SerRes.result，防止过度调用造成错误。

        } else {
        result = pmJSTools.GetSubObj([SerRes, "result", "result"]); //忽略掉一层result,否则结构复杂
      }

      return {
        errMsg,
        result
      };
    } else {
      //如果返回的结果不为OK,页必须返回错误结果，并且自动屏蔽获取的值。制程规定每一层函数必须为OK,下一层才能是OK,并且错误必须逐层传递到底层。
      errMsg = SerRes.errMsg; //一旦由错误，值不会传给调用者

      return {
        errMsg,
        result
      };
    }
  }
} //函数对象号： 2， 获取多个集合的函数，中转到云函数，为未来切换数据库的可能做好准备。 getCollectionsFromServer
//DBConditions结构举例


async function getCollectionsFromDB(DBConditions) {
  try {
    var serRes = await uniCloud.callFunction //await调用远程云函数
    ({
      config: {
        env: targetServerEnv
      },
      name: 'getCollectionsFromServer',
      data: {
        DBConditions
      }
    });
    return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
  } catch (e) {
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。
  }
}

async function addOrUpdateToServer(DBConditionsAndDataForExe) {
  try {
    var serRes = await wx.cloud.callFunction //await调用远程云函数
    ({
      config: {
        env: targetServerEnv
      },
      name: 'addOrUpdateToServer',
      data: {
        DBConditionsAndDataForExe
      }
    });
    return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
  } catch (e) {
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。
  }
} //函数对象号： 4, 账号类操作对象/exeAccounts
//funcType: 具体业务类型，dataList 参数清单


async function exeAccounts(funcName, funcPra) {
  //功能分类区域
  ///////////////////////////////////////////////////////////////////////////////
  //功能： 关于exeAccounts的前端调用功能接口                                     //
  //功能1: 绑定手机号，姓名                                                     //
  //参数1： funcName= bindAccount，funcPra.PMUserID，funcPra.PMUserName不能为空 //
  //返回： funcName= bindAccount，funcPra.PMUserID，funcPra.PMUserName不能为空  //
  //////////////////////////////////////////////////////////////////////////////
  //功能2: 获取账号信息                                                        //
  //参数2： funcName= bindAccount，funcPra 忽略                                //
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //功能3: 获取短信验证码                                                       //
  //参数3： funcName= getSMSCode                                               //
  //funcPra.WXLastSMSPhone                                                    //
  //funcPra.WXLastSMSName                                                     //
  //////////////////////////////////////////////////////////////////////////////
  try {
    var serRes = await uniCloud.callFunction //await调用远程云函数
    ({
      config: {
        env: targetServerEnv
      },
      name: 'exeAccounts',
      data: {
        funcName,
        funcPra
      }
    });
    console.log("云exeAccounts调用结果");
    console.log(serRes);
    return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
  } catch (e) {
    console.log("有错误");
    console.log(e);
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。
  }
} //函数对象号： 5，交付订单类操作exePMCOI
//功能分类区域
///////////////////////////////////////////////////////////////////////////////
//功能1： 获取PMCOI数据                                                        //
//参数1： funcName= getPMCOI                                                 //
//返回：  funcName= PMCOI                                                    //
//////////////////////////////////////////////////////////////////////////////
//功能2: 创建PO                                                             //
//参数2： funcName= createPO，funcPra.PMCOIID不能为空，  funcPra.PMPO 不能为空//
/////////////////////////////////////////////////////////////////////////////
//功能3： 获取我发布的 PMCOIList                                             //
//参数： funcName= getPMCOIList                                            //
//返回：  funcName= funcPra.PMUser不能为空                                  //
//////////////////////////////////////////////////////////////////////////////
//功能4： 创建PMCOI                                                         //
//参数： funcName= createOnePMCOI                                            //
//返回：  funcName= funcPra.PMCOI不能为空                                  //
//////////////////////////////////////////////////////////////////////////////


async function exePMCOI(funcName, funcPra) {
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
 console.log("需执行的方法名为："+funcName);
  var serRes = {
    errMsg: "",
    result: []
  };

  try {
	var serRes = await uniCloud.callFunction//await调用远程云函数
    ({
      config: {
        env: targetServerEnv
      },
      name: 'exePMCOI',
      data: {
        funcName,
        funcPra
      }
    })
    console.log("云exePMCOI调用结果");
    console.log(serRes);
   // return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
   return serRes;
  } catch (e) {
    console.log("有错误");
    console.log(e);
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。
  }
} 

//函数对象号：6， 文件上传 这个函数统一管理上传文件，即使未来更换文件服务器也可以通过函数路由实现。
//根据fileType，代码确认远程文件夹
//localFilePath 本地路径
async function UploadFile(fileType, localFilePath, remotefileName) {
  var ResData = {
    errMsg: "等待执行",
    result: []
  }; //这样做的目的，就是为了防止程序员随意上传文件，搞乱服务器文件地址
 console.log("图片存放的位置为1"+ServerFilePath);
  var ServerFilePath = "";

  switch (fileType) {
    //任务产品图片文件夹
    case "PMCOIProductPic":
      {
        ServerFilePath = "PMCOIProductPic";
        break;
      }
    //指令单产品图片文件夹

    case "PMPIProductPic":
      {
        ServerFilePath = "PMPIProductPic";
        break;
      }
    //生产原料产品图片文件夹

    case "ZCTRAWProPic":
      {
        ServerFilePath = "ZCTRAWProPic";
        break;
      }
    //采购原料产品图片文件夹

    case "ZCTRAWPurPic":
      {
        ServerFilePath = "ZCTRAWPurPic";
        break;
      }
    //用户头像

    case "userphoto":
      {
        ServerFilePath = "userphoto";
        break;
      }
    //聊天发送的图片

    case "ZCTChatImages":
      {
        ServerFilePath = "ZCTChatImages";
        break;
      }

    default:
      {
        ResData.errMsg = "编程错误： 文件类型需要检查。";
        return ResData;
        break;
      }
  }
    console.log("图片存放的位置为2"+ServerFilePath);
  if (!pmJSTools.IsNullOrEmpty("ServerFilePath")) {
  // uni.uniCloud({
  //     resourceEnv: targetServerEnv
  //   });
  //   await WXC.init();
    var TempRes = await uniCloud.uploadFile({
      cloudPath: ServerFilePath + "/" + remotefileName,
      filePath: localFilePath //本地文件文件路径
    });
	
    ResData.errMsg = "OK";
    ResData.result = TempRes.fileID;
    return ResData;
  } else {
    ResData.errMsg = "编程问题：文件类型参数错误。清单pmSerTools.UploadFile中添加。";
    return ResData;
  }
} //函数对象号： 7, 订阅消息类操作对象/exeMessage 
//funcName: 具体业务类型，funcPra: 参数清单 


async function ExeMessage(funcName, funcPra) {
  //功能分类区域 
  /////////////////////////////////////////////////////////////////////////////// 
  //功能： 关于ExeMessage的前端调用功能接口                                      //                                                 // 
  //参数1： funcName= GetTemplate_id，funcPra.functionName不能为空              // 
  //返回：                                                                     // 
  ////////////////////////////////////////////////////////////////////////////// 
  wx.showLoading({
    title: '数据交互中...'
  });

  try {
    var serRes = await uniCloud.callFunction //await调用远程云函数 
    ({
      config: {
        env: targetServerEnv
      },
      name: 'ExeMessage',
      data: {
        funcName,
        funcPra
      }
    }); //wx.hideLoading() //这种写法真机环境下会出错 

    wx.hideLoading({
      fail: res => {}
    });
    return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。 
  } catch (e) {
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。 
  }
} //函数对象号： 8, 支付类操作对象/exePayment 
//funcName: 支付业务类型，funcPra: 参数清单 


async function exePayment(funcName, funcPra) {
  try {
    var serRes = await uniCloud.callFunction //await调用远程云函数
    ({
      config: {
        env: targetServerEnv
      },
      name: 'exePayment',
      data: {
        funcName,
        funcPra
      }
    });
    console.log("云exeAccounts调用结果");
    console.log(serRes);
    return getResFromReturn(serRes); //getResFromReturn整合和简化sertRes供前端使用。
  } catch (e) {
    console.log("有错误");
    console.log(e);
    return getResFromReturn(e); //getResFromReturn整合和简化sertRes供前端使用。
  }
} //函数对象号： 9, 获取登录微信手机号 
//cloudID: 用来向云函数换取手机号 


async function getPhoneNumber(cloudID) {
  try {
    var serRes = await wx.cloud.callFunction({
      config: {
        env: targetServerEnv
      },
      name: 'exeAccounts',
      data: {
        weRunData: wx.cloud.CloudID(cloudID),
        // 这个 CloudID 值到云函数端会被替换 
        obj: {
          shareInfo: wx.cloud.CloudID(cloudID) // 非顶层字段的 CloudID 不会被替换，会原样字符串展示 

        },
        funcName: "getPhoneNumber"
      }
    });
    console.log("云exeAccounts--getPhoneNumber调用结果");
    console.log(serRes);
    return serRes;
  } catch (e) {
    console.log("有错误");
    console.log(e);
    return e;
  }
} //函数对象号： 10, 获取人员信息


async function getAccount() {
  //对是否需要向服务器获取系统登录账号，姓名进行处理
  try {
    var fancname = "getAccount";
    var funcPra = {}; //获取时不需要赋值参数

    var resData = await this.exeAccounts(fancname, funcPra);
    var TempRes = this.getResFromReturn(resData); //脱壳

    var myDate = new Date();
    var myDateYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)

    var TempPMUserAge = parseFloat(myDateYear - pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"])));
    var TemData = {
      _id: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "_id"])),
      PMUserID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserID"])),
      PMUserName: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserName"])),
      WXOpenID: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "WXOpenID"])),
      ZCTJobType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobType"])),
      ZCTJobPayType: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobPayType"])),
      ZCTUserSex: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserSex"])),
      PMPhoneNB: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMPhoneNB"])),
      ZCTBirthYear: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"])),
      ZCTReleaseNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseNum"])),
      ZCTReleaseAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseAcceNum"])),
      ZCTReceiveOrderNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReceiveOrderNum"])),
      ZCTDeliveryAcceNum: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTDeliveryAcceNum"])),
      PMUserAge: TempPMUserAge,
      ZCTUserPhoto: pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserPhoto"]))
    };
    app.globalData.PMUserID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserID"]));
    app.globalData.PMUserName = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMUserName"]));
    app.globalData.ZCTBirthYear = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTBirthYear"]));
    app.globalData.WXOpenID = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "WXOpenID"]));
    app.globalData.ZCTJobType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobType"]));
    app.globalData.ZCTJobPayType = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTJobPayType"]));
    app.globalData.ZCTUserSex = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserSex"]));
    app.globalData.PMPhoneNB = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "PMPhoneNB"]));
    app.globalData.ZCTReleaseNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseNum"]));
    app.globalData.ZCTReleaseAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReleaseAcceNum"]));
    app.globalData.ZCTReceiveOrderNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTReceiveOrderNum"]));
    app.globalData.ZCTDeliveryAcceNum = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTDeliveryAcceNum"]));
    app.globalData.PMUserAge = TempPMUserAge;
    app.globalData._id = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "_id"]));
    app.globalData.ZCTUserPhoto = pmJSTools.GetStr(pmJSTools.GetSubObj([TempRes, "result", 0, 0, "ZCTUserPhoto"]));

    if (TempRes.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempRes.result)) {
      //如果登录成功先把获取的值保存下来
      wx.setStorage({
        key: 'PMUserInfo',
        data: TemData
      });
      return "OK";
    } else {
      //如果登录不成功先把获取的值置空
      wx.setStorage({
        key: 'PMUserInfo',
        data: {
          PMUserID: "",
          PMUserName: "",
          WXOpenID: "",
          ZCTJobType: "",
          ZCTJobPayType: "",
          ZCTUserSex: "",
          PMPhoneNB: "",
          ZCTBirthYear: "",
          ZCTReleaseNum: "",
          ZCTReleaseAcceNum: "",
          ZCTReceiveOrderNum: "",
          ZCTDeliveryAcceNum: "",
          PMUserAge: "",
          _id: ""
        }
      });
      app.globalData.PMUserID = "";
      app.globalData.PMUserName = "";
      app.globalData.WXOpenID = "";
      app.globalData.ZCTJobType = "";
      app.globalData.ZCTJobPayType = "";
      app.globalData.ZCTUserSex = "";
      app.globalData.PMPhoneNB = "";
      app.globalData.ZCTBirthYear = "";
      app.globalData.ZCTReleaseNum = "";
      app.globalData.ZCTReleaseAcceNum = "";
      app.globalData.ZCTReceiveOrderNum = "";
      app.globalData.ZCTDeliveryAcceNum = "";
      app.globalData.PMUserAge = "";
      app.globalData._id = "";
    }

    return "NOK";
  } catch (e) {
    return e;
  }
}