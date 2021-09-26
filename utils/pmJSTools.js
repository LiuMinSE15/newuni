//通用的，不和云函数直接交互的js工具 V2020 08 27
const app = getApp(); //声明曝露函数给require方

module.exports = {
  GetSeqID: GetSeqID,
  IsNullOrEmpty: IsNullOrEmpty,
  GetErrMsgValue: GetErrMsgValue,
  GetStr: GetStr,
  GetSubObj: GetSubObj,
  GetSubObjStr: GetSubObjStr,
  lightOneControlFromList: lightOneControlFromList,
  lightOneControlFromList2: lightOneControlFromList2,
  getOneControlFromList: getOneControlFromList,
  getSqIDFromList: getSqIDFromList,
  getPropertiesFromVariant: getPropertiesFromVariant,
  getGeneralUnitList: getGeneralUnitList,
  getFileSuffix: getFileSuffix,
  replaceOneControlFromList: replaceOneControlFromList,
  getSeqIDfromArr: getSeqIDfromArr,
  getTimeShortStrFromTime: getTimeShortStrFromTime,
  calPMCOI: calPMCOI,
  DeleteFromList: DeleteFromList,
  dateAddDays,
  inputvalidation: inputvalidation,
  getValueSqInList: getValueSqInList,
  getStrLeft: getStrLeft,
  getStrRight: getStrRight,
  lightOneControl: lightOneControl,
  unLightOneControl: unLightOneControl,
  calMyPMCOI: calMyPMCOI,
  getOneControlFromListByMy: getOneControlFromListByMy,
  calPMUser: calPMUser,
  getDistance: getDistance,
  UpdateProductStorge: UpdateProductStorge,
  getPMJobType: getPMJobType,
  GetNum: GetNum,
  GetStateStr: GetStateStr,
  getStrsubstring: getStrsubstring,
  DateChange: DateChange,
  stringToDate: stringToDate,
  getStrLeftFromFront: getStrLeftFromFront,
  getStrRightFromFront: getStrRightFromFront
}; //函数对象号： 1， 获取动态ID号函数

function GetSeqID(typeStr, intCount) {
  const now = new Date();
  let year = now.getFullYear();
  year = year - 2000;
  if (year >= 26 && year <= 31) year = String.fromCharCode(year + 23);else year = String.fromCharCode(year + 65);
  let month = now.getMonth() + 1;
  if (month >= 26 && month <= 31) month = String.fromCharCode(month + 23);else month = String.fromCharCode(month + 65);
  let day = now.getDate();
  if (day >= 26 && day <= 31) day = String.fromCharCode(day + 23);else day = String.fromCharCode(day + 65);
  let hour = now.getHours();
  if (hour >= 26 && hour <= 31) hour = String.fromCharCode(hour + 23);else hour = String.fromCharCode(hour + 65);
  let minutes = now.getMinutes();
  if (minutes >= 26 && minutes <= 31) minutes = String.fromCharCode(minutes + 23);else {
    if (minutes == 58 || minutes == 59) minutes = String.fromCharCode(minutes - 3);else minutes = String.fromCharCode(minutes + 65);
  }
  let seconds = now.getSeconds();
  if (seconds >= 26 && seconds <= 31) seconds = String.fromCharCode(seconds + 23);else {
    if (seconds == 58 || seconds == 59) minutes = String.fromCharCode(seconds - 3);else seconds = String.fromCharCode(seconds + 65);
  }
  var ResStrList = [];

  for (var j = 0; j < intCount; j++) {
    //准备随机数
    var len = 6;
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/

    var maxPos = $chars.length;
    var pwd = '';

    for (var i = 0; i < len; i++) {
      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }

    var ResStr = typeStr + year + month + day + hour + minutes + seconds + pwd;
    ResStrList.push(ResStr);
  }

  return ResStrList;
} //函数对象号： 2， 对象转换


function GetStr(ObjVale) {
  if (IsNullOrEmpty(ObjVale)) {
    return "";
  } else {
    return ObjVale.toString();
  }
} //函数对象号： 3， 过滤objVal为空的各种情形，减少判空复杂度


function IsNullOrEmpty(objVal) {
  //  过滤 ""; " "; null;undefined;  [];{};vNaN;
  if (objVal === undefined) {
    // 只能用 === 运算来测试某个值是否是未定义的
    return true;
  }

  if (objVal == null) {
    // 等同于 a === undefined || a === null
    return true;
  }

  if (objVal == "TypeError") {
    // 
    return true;
  } // 属于数字不应该是空，特别是0， 如果不加这一句，在下一句会被认为是空值。


  if (typeof objVal === 'number') {
    return false;
  }

  if (objVal == "" || objVal == null || objVal == undefined) {
    // "",null,undefined
    return true;
  }

  if (!objVal) {
    // "",null,undefined,NaN
    return true;
  } // Array


  if (objVal.length == 0) {
    // "",[]
    return true;
  }

  return false;
} //函数对象号： 4， 对ErrMsgStr进行整理，减少前端判断复杂度


function GetErrMsgValue(ErrMsgStr) {
  if (IsNullOrEmpty(ErrMsgStr)) {
    return "";
  } else {
    var TempS;

    try {
      TempS = ErrMsgStr.substring(ErrMsgStr.indexOf(":") + 1, ErrMsgStr.length);
    } catch (error) {
      //说明:TempS格式不符合至少有字符":ok"
      return TempS;
    }

    if (IsNullOrEmpty(TempS)) {
      return "";
    } else {
      var lastStr = TempS.toUpperCase();

      if (lastStr == "OK") {
        return lastStr;
      } else {
        return TempS;
      }
    }
  }
} //函数对象号： 5，检查对象是否存在 //和IsNullOrEmpty有很大同


function IsNotExist(objVal) {
  if (objVal === undefined) {
    // 只能用 === 运算来测试某个值是否是未定义的
    return true;
  } else {
    return false;
  }
} //函数对象号： 7，获取对象数组的长度  String 返回的是字符长度，不支持length的变量返回的是0


function GetLength(objVal) {
  if (IsNullOrEmpty(objVal)) {
    return 0;
  }

  var TempI = 0;

  try {
    TempI = objVal.length;
    return TempI;
  } catch (error) {
    return TempI;
  }
} //函数对象号： 8，探取子对象是否存在，如果存在则返回子对象，如不存在则返回“”，如存直接返回子变
// AA.BB.CC : 当BB为空空值程序直接报错被catch,这样逻辑性就复杂了。需要一个函数来自动处理。
// 这个函数要处理两种情况
//情况 1： AA.BB.CC : 当BB为空空值程序直接报错，容易产生错误。需要智能处理
//情况 2：AA[0][0].BB :但AA[0]为空，或AA[0][0]为空的智能处理
//TempList 应该是个数组： [rootObj,"子元素名"，“子元素名”，...]
//子元素名 为数值是就是类似：rootObj[0]含义


function GetSubObj(TempList) {
  if (IsNullOrEmpty(TempList)) //TempList不存在，直接返回一个空值回去。
    {
      return "";
    }

  try {
    if (IsNullOrEmpty(TempList[0])) //根元素不存在直接返回
      {
        return "";
      }

    var TempObj = TempList[0];

    for (var i = 1; i < TempList.length; i++) {
      if (!IsNullOrEmpty(TempList[i])) {
        if (!IsNullOrEmpty(TempObj[TempList[i]])) //不管是数组还是字符都一样
          {
            TempObj = TempObj[TempList[i]]; //指向下一层变量
          } else {
          return ""; //说明为空值，直接返回""
        }
      } else {
        return ""; //表达不正确放回空
      }
    }
  } catch (e) //任何错误直接返回空
  {
    return "";
  }

  return TempObj;
} //函数对象号： 9 参考 GetSubObj 和 GetStr


function GetSubObjStr(TempList) {
  return GetStr(GetSubObj(TempList));
} //函数对象号： 10 通过对象id值，实现从控件容器中高亮一个控件 (

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 11 28
       *@method 方法名 lightOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  用于高亮tap事件后的控件，同时消退其他控件的高亮状态
       *@mark 使用函数时的注意实现  这个只是界面，后端逻辑要特殊考虑，比如服务器端获得了数据，才可以点亮等
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
       isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反
*/


function lightOneControlFromList(selectedID, TempList) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) {
          TempList[i].selectedStyle = btnSelectedStyle;
        } else {
          TempList[i].selectedStyle = btnUnSelectedStyle;
        }
      }
    } else {
      if (TempList._id == selectedID) {
        TempList.selectedStyle = btnSelectedStyle;
      } else {
        TempList.selectedStyle = btnUnSelectedStyle;
      }
    }
  }
} //函数10的变体函数
//isConverse 当提供这个参数，并且这个参数为true是，表示，直接置反


function lightOneControlFromList2(selectedID, TempList, isConverse) {
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  if (isConverse != true) {
    lightOneControlFromList(selectedID, TempList);
  } else {
    var tempPI = getOneControlFromList(selectedID, TempList);

    if (tempPI.selectedStyle == btnSelectedStyle) {
      tempPI.selectedStyle = btnUnSelectedStyle;
    } else {
      lightOneControlFromList(selectedID, TempList);
    }
  }
} //函数对象号： 11 根据id值，从控件ataList中获取一个控件

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 11 29
       *@method 方法名 getOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getOneControlFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            return TempList[i];
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          return TempList;
        }
    }
  }

  return ""; //没有找到返回一个安全的空值
} //函数对象号： 12 根据_id值，从控件ataList中获取一个控件在数据对象中的顺序值

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 03
       *@method 方法名 getSqIDFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getSqIDFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            return i;
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          return -1; //不是数组，不应该用来选择
        }
    }
  }

  return -1; //没有找到返回一个安全的值
} //函数对象号： 13 变量转变为属性清单


function getPropertiesFromVariant(tempVariant) {
  if (IsNullOrEmpty(tempVariant)) {
    return null;
  }

  var fillBlock = {};
  fillBlock.fillRemind = "";
  fillBlock.fillItemList = [];

  for (var Key in tempVariant) {
    var fillItem = {};
    fillItem.fillTitle = Key, fillItem.fillTitleRight = "默认后缀", fillItem.fillChartURL = "", //可为空
    fillItem.fillTip = "填写提示", fillItem.fillType = "TXT", //填写类型: TXT NUM LIST DATETIME
    fillItem.filleValue = JSON.stringify(tempVariant[Key]), fillItem.fillHelpList = [], //备选项
    fillItem.fillID = "", //填写项字段名，不在前端显示
    fillBlock.fillItemList.push(fillItem);
  }

  return fillBlock;
} //函数对象号： 14 获取最常见单位名称清单


function getGeneralUnitList() {
  var TempList = ["件", "个", "套", "箱", "袋", "克", "千克", "吨", "米", "千米", "毫升", "升", "立方米"];
  return TempList;
} //函数对象号： 15 获取文件名的后缀。很多时候需要截取后缀用于改名。 比如 XXXX.png ==> .png


function getFileSuffix(fileStr) {
  if (!IsNullOrEmpty(fileStr)) {
    var TempFileSuffix = fileStr.substring(fileStr.lastIndexOf("."));

    if (!IsNullOrEmpty(TempFileSuffix)) {
      return TempFileSuffix;
    }
  }

  return "";
} //函数对象号： 15 根据id值，从控件dataList中获取一个变量，并替换为一个新变量

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 25
       *@method 方法名 replaceOneControlFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据id值，从控件dataList中获取一个变量，并替换为一个新变量
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       newVariant,新变量
       TempList   所在数据对象清单
*/


function replaceOneControlFromList(selectedID, newVariant, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            TempList[i] = newVariant;
          }
      }
    } else {
      if (TempList._id == selectedID) //只有一个数据时的数据
        {
          TempList[i] = newVariant;
        }
    }
  }
} //函数对象号： 16 根据内容值，从数组中返回值所在位置。 如果不存在返回0

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 26
       *@method 方法名 getSeqIDfromArr
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据内容值，从数组中返回值所在位置。 如果不存在返回0
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function getSeqIDfromArr(tempV, TempList) {
  if (IsNullOrEmpty(tempV)) {
    return 0;
  }

  if (IsNullOrEmpty(TempList)) {
    return 0;
  }

  for (var tempKey in TempList) {
    if (TempList[tempKey] == tempV) {
      return tempKey;
    }
  }

  return 0;
} //函数对象号： 17 返回时间值简短表达（今天以时间来表达，昨天及以前写为日期，不带年标识）

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 27
       *@method 方法名 getTimeShortStrFromTime
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  今天以时间来表达，昨天及以前写为日期，不带年标识
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function getTimeShortStrFromTime(tempTimeStr) //只接受Date Str对象
{
  if (IsNullOrEmpty(tempTimeStr)) {
    return "";
  }

  var tempnow = new Date();
  var tempTime = new Date(tempTimeStr);
  var tempnowDate = tempnow.getFullYear() + "/" + (tempnow.getMonth() + 1) + "/" + tempnow.getDate();
  var tempTimeDate = tempTime.getFullYear() + "/" + (tempTime.getMonth() + 1) + "/" + tempTime.getDate();
  var ResStr = "";

  if (tempnowDate == tempTimeDate) {
    ResStr = fillZero(tempTime.getHours()) + ":" + fillZero(tempTime.getMinutes());
  } else {
    ResStr = fillZero(tempTime.getMonth() + 1) + "/" + fillZero(tempTime.getDate() + "");
  }

  return ResStr;

  function fillZero(tempInt) //补全前导0
  {
    if (tempInt < 10) {
      return "0" + tempInt.toString();
    } else {
      return tempInt.toString();
    }
  }
} //函数对象号： 18 PMCOI计算变量实现函数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 12 28
       *@method 方法名 calPMCOI
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
{
  //PMState: "", //	状态	ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束
  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.PMChangeTime);
  PMCOI.calZPublishTimeShort = getTimeShortStrFromTime(PMCOI.ZCTPublishTime);

  switch (PMCOI.PMOrderState) {
    case "ONCREATE":
      {
        PMCOI.calPMState = "创建中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "NORELEASE":
      {
        // PMCOI.calPMState = "待发布"
        PMCOI.calPMState = "编辑中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "RELEASE":
      {
        PMCOI.calPMState = "已发布";
        break;
      }

    case "ACCEPTED":
      {
        PMCOI.calPMState = "已发布";
        break;
      }
    //20210225

    case "PUBLISH":
      {
        PMCOI.calPMState = "已发布";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "WaitAuthorize":
      {
        PMCOI.calPMState = "待授权";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "ALLOWED":
      {
        PMCOI.calPMState = "执行中";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "UNACCEPTED":
      {
        PMCOI.calPMState = "待验收";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgray; border-color: gray;"
        }];
        break;
      }

    case "ACCEPT":
      {
        PMCOI.calPMState = "验收";
        PMCOI.calTaskStates = [{
          calStageName: "任务发布",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "等待授权",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "过程执行",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "完工申请",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }, {
          calStageName: "完工验收",
          calStageStyle: "background-color:lightgreen; border-color: gray;"
        }];
        break;
      }

    case "PRODUCTION":
      {
        PMCOI.calPMState = "生产中";
        break;
      }

    case "ENDPRODUCTION":
      {
        PMCOI.calPMState = "生产结束";
        break;
      }

    case "UNPACKING":
      {
        //ZCT用不到
        PMCOI.calPMState = "已拆单";
        break;
      }

    default:
      {
        PMCOI.calPMState = "状态未知";
        break;
      }
  } //任务未发布时，ZCTCOILatit和ZCTCOILonggit为undefined


  if (IsNullOrEmpty(PMCOI.ZCTCOILatit) || IsNullOrEmpty(PMCOI.ZCTCOILongit)) {
    PMCOI.calTaskDistance = "KM"; //未发布时，距离为0
  } else {
    if (app.globalData.CurrentLatitude != 0 || app.globalData.CurrentLongitude != 0) {
      PMCOI.calTaskDistance = getDistance(app.globalData.CurrentLatitude, app.globalData.CurrentLongitude, PMCOI.ZCTCOILatit, PMCOI.ZCTCOILongit);
      PMCOI.calTaskDistance = Math.round(PMCOI.calTaskDistance);
      PMCOI.calTaskDistance = PMCOI.calTaskDistance > 100 ? ">100KM" : PMCOI.calTaskDistance + "KM";
    } else {
      PMCOI.calTaskDistance = "KM";
    }
  } //计算进度条

  /*PMCOI.calTaskStates = [
    {
      calStageName : "任务发布",
      calStageStyle : "background-color:lightgreen; border-color: gray;"
    },
    {
    calStageName : "等待授权",
    calStageStyle : "background-color:lightgreen; border-color: gray;",
    },
    {
    calStageName : "过程执行",
    calStageStyle : "background-color:lightgreen; border-color: gray;",
    },
    {
    calStageName : "完工申请",
    calStageStyle : "background-color:lightgray; border-color: gray;",
    },
    {
    calStageName : "完工验收",
    calStageStyle : "background-color:lightgray; border-color: gray;",
    }
    ]*/

} //函数对象号： 19 根据_id值，从数组TempList中删除一条_id字段为selectedID值的数据

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 01 20
       *@method 方法名 DeleteFromList 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,删除数组中的数据
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function DeleteFromList(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i]._id == selectedID) //遍历出来一个数据
          {
            TempList.splice(i, 1);
            return TempList;
          }
      }
    }
  }

  return TempList; //返回接收到的数组内容
} //函数对象号： 20 根据日期字符串 返回增加天数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 01 20
       *@method 方法名 dateAddDays 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据日期字符串 返回增加天数
       *@mark
       日期加天数的方法
       dataStr日期字符串
       dayCount 要增加的天数
       return 增加n天后的日期字符串
*/


function dateAddDays(dataStr, dayCount) {
  var strdate = GetStr(dataStr); //日期字符串

  var isdate = new Date(strdate.replace(/-/g, "/")); //把日期字符串转换成日期格式

  isdate = new Date((isdate / 1000 + 86400 * dayCount) * 1000); //日期加1天

  var pdate = isdate.getFullYear() + "-" + (isdate.getMonth() + 1) + "-" + isdate.getDate(); //把日期格式转换成字符串

  return pdate;
} //函数对象号： 21 输入验证（可根据需要新增case增加）

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 02 2
       *@method 方法名 inputvalidation 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明   正则表达式验证输入值val是否为特定类型type
       *@mark
       输入验证 eg:inputvalidation("123.5","正浮点数")  返回结果为return true
       val 输入的值
       type 类型
       return true(验证通过)；false(验证失败)
*/


function inputvalidation(val, type) {
  switch (type) {
    case "正浮点数":
      //大于0的整数和小数
      {
        if (!/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(val)) {
          return false;
        }

        return true;
      }

    case "非负浮点数":
      //非负浮点数（正浮点数 + 0）
      {
        if (!/^\d+(\.\d+)?$/.test(val)) {
          return false;
        }

        return true;
      }

    case "整数":
      {
        if (!/^-?\d+$/.test(val)) {
          return false;
        }

        return true;
      }

    case "验证非零的正整数":
      //验证非零的正整数
      {
        if (!/^\+?[1-9][0-9]*$/.test(val)) {
          return false;
        }

        return true;
      }

    case "验证非负整数":
      //验证非负整数（正整数 + 0）
      {
        if (!/^\d+$/.test(val)) {
          return false;
        }

        return true;
      }

    case "身份证号":
      //验证身份证号（15位或18位数字）
      {
        if (!/^\d{15}|\d{}18$/.test(val)) {
          return false;
        }

        return true;
      }

    /*case "Email地址": //验证Email地址
    {
      if (!/^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)) {
        return false
      }
      return true
    }*/

    case "物料号名":
      //验证物料号码组合的合法性
      {
        if (IsNullOrEmpty(val)) {
          return "不能为空";
        }

        if (val.indexOf(":") < 0) {
          if (val.indexOf("：") < 0) {
            return "需要用:分隔物料号和物料名。";
          }
        }

        return "OK";
      }

    default:
      {
        return false;
      }
  }
} //函数对象号： 22 从属性页下拉框内容获得相同的值的顺序地址，用于切换赋值

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 12
       *@method 方法名 InputIntoList
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明   属性页下拉框，如果直接赋值不能直接显示。属性页下拉框通过数值地址来赋值的。
       *@mark
       inputValue: 输入值
       ValueList:  下拉清单对象
       return 返回数组地址值。 没有找到返回-1
*/


function getValueSqInList(inputValue, ValueList) {
  if (!IsNullOrEmpty(inputValue) && !IsNullOrEmpty(ValueList)) {
    if (ValueList.length) {
      for (var i = 0; i < ValueList.length; i++) {
        if (ValueList[i] == inputValue) //遍历出来一个数据
          {
            return i;
          }
      }
    } else {
      if (ValueList == inputValue) //只有一个数据时的数据
        {
          return -1; //不是数组，不应该用来选择
        }
    }
  }

  return -1; //没有找到返回一个安全的值
} //函数对象号： 23 根据标识字符，从字符串切出左边的一部分

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 17
       *@method 方法名 getStrLeft
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明    根据标识字符，从字符串切出左边的一部分 (注意从尾部向前搜索)
       *@mark
       tempStr:   长字符串
       tempMark:  标识字符串
       return:    字符串
*/


function getStrLeft(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substr(0, tempStr.lastIndexOf(tempMark));

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
} //函数对象号： 24 根据标识字符，从字符串切出右边的一部分

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2021 02 17
       *@method 方法名 getStrRight
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明    根据标识字符，从字符串切出左边的一部分  (注意从尾部向前搜索)
       *@mark
       tempStr:   长字符串
       tempMark:  标识字符串
       return:    字符串
*/


function getStrRight(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(tempStr.lastIndexOf(tempMark) + tempMark.length);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
} //函数对象号： 25 浮起一个控件

/*方法说明
 *@CreatorAndTime 创建人 GM 时间 2021 02 17
 *@method 方法名 lightOneControl
 *@for 所属类名/或模块名  pmJSTool
 *@function 功能说明    浮起一个控件
 *@mark
 */


function lightOneControl(tempControl) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  tempControl.selectedStyle = btnSelectedStyle;
} //函数对象号： 25 按下一个控件

/*方法说明
 *@CreatorAndTime 创建人 GM 时间 2021 02 17
 *@method 方法名 unLightOneControl
 *@for 所属类名/或模块名  pmJSTool
 *@function 功能说明    浮起一个控件
 *@mark
 */


function unLightOneControl(tempControl) {
  //不返回只做正确的设置
  var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态

  var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态

  tempControl.selectedStyle = btnUnSelectedStyle;
} //函数对象号： 26 ZCTMyPMCOIList计算变量实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 03 01
       *@method 方法名 calMyPMCOI
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算ZCTMyPMCOIList的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calMyPMCOI(PMCOI) //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
{
  //calPMCOI(PMCOI)  //直接交给calPMCOI, 特殊的才需要这里编写
  //ZCTTaskState: "", //任务状态 TEMP:暂存 WATCH:关注, APPLY:申请, ALLOWED:授权, REFUSED: 拒绝，EXEC:执行, DELIVRY:交付, 验收：ACCEPT
  PMCOI.calChangeTimeStr = getTimeShortStrFromTime(PMCOI.ZCTChangeTime);

  switch (PMCOI.ZCTTaskState) {
    case "TEMP":
      {
        PMCOI.calPMState = "暂存";
        break;
      }

    case "WATCH":
      {
        PMCOI.calPMState = "关注";
        break;
      }

    case "APPLY":
      {
        PMCOI.calPMState = "申请";
        break;
      }

    case "ALLOWED":
      {
        PMCOI.calPMState = "执行中";
        break;
      }

    case "REFUSED":
      {
        PMCOI.calPMState = "拒绝";
        break;
      }

    case "EXEC":
      {
        PMCOI.calPMState = "执行";
        break;
      }

    case "DELIVRY":
      {
        PMCOI.calPMState = "交付";
        break;
      }

    case "RETURN":
      {
        PMCOI.calPMState = "交付退回";
        break;
      }

    case "ACCEPT":
      {
        PMCOI.calPMState = "验收";
        break;
      }

    default:
      {
        PMCOI.calPMState = "状态未知";
        break;
      }
  }

  if (!IsNullOrEmpty(PMCOI.PMCOI)) {
    calPMCOI(PMCOI.PMCOI);

    if (PMCOI.PMCOI.ZCTIsDeleted == "YES") {
      PMCOI.calPMState = "已撤销";
    }
  }
} //函数对象号： 27 根据id值，从控件myPMCOIList中获取一个控件

/*方法说明
       *@CreatorAndTime 创建人 SE13 时间 2021 03 01
       *@method 方法名 getOneControlFromListByMy 
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  通过id,获取控件数据，针对ZCTMyPMCOIList集合
       *@mark
       *@param{参数类型}参数名 参数说明
       selectedID 被选择对象的 _id值
       TempList   所在数据对象清单
*/


function getOneControlFromListByMy(selectedID, TempList) {
  if (!IsNullOrEmpty(selectedID) && !IsNullOrEmpty(TempList)) {
    if (TempList.length) {
      for (var i = 0; i < TempList.length; i++) {
        if (TempList[i].ZCTPMCOI_id == selectedID) //遍历出来一个数据
          {
            return TempList[i];
          }
      }
    } else {
      if (TempList.ZCTPMCOI_id == selectedID) //只有一个数据时的数据
        {
          return TempList;
        }
    }
  }

  return ""; //没有找到返回一个安全的空值
} //函数对象号： 28 PMUser计算前端可视变量的实现函数

/*方法说明
       *@CreatorAndTime 创建人 GM 时间 2020 2 28
       *@method 方法名 calPMUser
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算PMCOI的所有需要本地计算或转换的变量值
       *@mark
       *@param{参数类型}参数名 参数说明
       tempV 需要查询的变量值
       TempList   所在数据对象清单
*/


function calPMUser(PMUser) //有一些字段是通过遍历PMUserList,计算获得的，通过此函数完成。
{
  PMUser.calBindTimeShortStr = getTimeShortStrFromTime(PMUser.WXLastBindTime);
  var TempMainInfoStr = PMUser.PMUserName;

  if (!IsNullOrEmpty(PMUser.ZCTUserSex)) {
    TempMainInfoStr = TempMainInfoStr + " / " + PMUser.ZCTUserSex;
  }

  if (!IsNullOrEmpty(PMUser.ZCTBirthYear)) {
    var TempNow = new Date();
    var nowYear = TempNow.getFullYear();
    var TempBirthYear = new Date(PMUser.ZCTBirthYear).getFullYear();
    PMUser.calAges = nowYear - TempBirthYear;
    TempMainInfoStr = TempMainInfoStr + " / " + PMUser.calAges + "岁";
  }

  PMUser.calMainInfo = TempMainInfoStr;

  if (IsNullOrEmpty(PMUser.PMUserID)) {
    PMUser.IsRelated = false;
    PMUser.PMUserID = "***********";
  } else {
    if (PMUser.PMUserID == "***********") {
      PMUser.IsRelated = false;
    } else {
      PMUser.IsRelated = true;
    }
  }

  if (!IsNullOrEmpty(PMUser.relatedTime)) {
    PMUser.relatedTimeShort = this.getTimeShortStrFromTime(PMUser.relatedTime);
  }
} //函数对象号： 29 计算两位置点间的距离（KM）的实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE11 时间 2021 3 10
       *@method 方法名 getDistance
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  计算两位置点间的距离（KM）
       *@mark
       *@param{参数类型}参数名 参数说明
       la1 纬度
       lo1 经度 
       la2 纬度
       lo2 经度
*/


function getDistance(la1, lo1, la2, lo2) {
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  s = s.toFixed(2);
  return s;
} //函数对象号： 30 更新缓存中产品数据的实现函数

/*方法说明
       *@CreatorAndTime 创建人 SE24 时间 2021-3-11 10:24:14
       *@method 方法名 UpdateProductStorge
       *@for 所属类名/或模块名  pmJSTool
       *@function 功能说明  根据提交的产品号和名称更新缓存中的数据
       *@mark
       *@param{参数类型}参数名 参数说明
       *@param {String} TempProductID   //产品号
       *@param {String} TempProductName //产品名
*/


function UpdateProductStorge(TempProductID, TempProductName) {
  try {
    if (!IsNullOrEmpty(TempProductID) && !IsNullOrEmpty(TempProductName)) {
      //获取Storage缓存中的产品数据
      var TempStorageProductArr = new Array();
      var TempProductStr = wx.getStorageSync('ProductList'); //不存在本地缓存时，转换为空的数组

      if (IsNullOrEmpty(TempProductStr)) {
        //缓存新的产品
        var TempNewProduct = new Object();
        TempNewProduct.ProductID = TempProductID;
        TempNewProduct.ProductName = TempProductName;
        TempNewProduct.Date = new Date();
        TempStorageProductArr.push(TempNewProduct);
        var TempNewProductArr = JSON.stringify(TempStorageProductArr);
        wx.setStorageSync('ProductList', TempNewProductArr);
      } else {
        TempStorageProductArr = JSON.parse(TempProductStr);
        var TempThisProduct = TempStorageProductArr.find(function (e) {
          return e.ProductID == TempProductID;
        });

        if (!IsNullOrEmpty(TempThisProduct)) {
          //已存在此产品缓存信息
          if (TempThisProduct.ProductName != TempProductName) {
            //本次添加或编辑的产品名不同，进行修改
            for (var i = 0; i < TempStorageProductArr.length; i++) {
              if (TempStorageProductArr[i].ProductID == TempProductID) //查找出对应产品数据
                {
                  TempStorageProductArr[i].ProductName = TempProductName;
                  TempStorageProductArr[i].Date = new Date();
                }
            }

            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          }
        } else {
          //获取当前已缓存长度
          var TempArrCount = TempStorageProductArr.length;

          if (TempArrCount >= 500) {
            //大于500时，移除最早的，保存新的。
            //按照时间进行排序
            TempStorageProductArr.sort(function (a, b) {
              return a.Date > b.Date;
            }); //移除排序后最早的产品信息

            TempStorageProductArr.splice(0, 1); //缓存新的产品

            var TempNewProduct = new Object();
            TempNewProduct.ProductID = TempProductID;
            TempNewProduct.ProductName = TempProductName;
            TempNewProduct.Date = new Date();
            TempStorageProductArr.push(TempNewProduct);
            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          } else {
            //缓存新的产品
            var TempNewProduct = new Object();
            TempNewProduct.ProductID = TempProductID;
            TempNewProduct.ProductName = TempProductName;
            TempNewProduct.Date = new Date();
            TempStorageProductArr.push(TempNewProduct);
            var TempNewProductArr = JSON.stringify(TempStorageProductArr);
            wx.setStorageSync('ProductList', TempNewProductArr);
          }
        }
      }
    }
  } catch (e) {
    console.log(GetStr(e));
  }
} //函数对象号： 31 获取最常见工种类型清单


function getPMJobType() {
  var JobTypeList = ['普工', '技工', '组装工', '包装工', '焊工', '电工', '机加工', '冲压工', '电镀工', '注塑工', '喷塑工', '水工', '木工', '漆工', '学徒工', '质检工', '生产管理', '劳务管理', '其他'];
  return JobTypeList;
} //函数对象号：32 字符串转为数字


function GetNum(TempNum) {
  if (isNaN(TempNum)) {
    return 0;
  } else {
    return parseFloat(TempNum);
  }
} //函数对象号：33 字符串转为数字


function GetStateStr(TempState) {
  switch (TempState) {
    case "CREATION":
      return "等待生产";

    case "ONRPODUCITON":
      return "生产中，";

    case "CLOSE":
      return "生产结束";

    default:
      break;
  }
} //函数对象号： 34 截取设定位数的字符串 

/*方法说明 
       *@CreatorAndTime 创建人 SE13 时间 2021 04 15 
       *@method 方法名 getStrsubstring 
       *@for 所属类名/或模块名  pmJSTool 
       *@function 功能说明    截取设定位数的字符串 
       *@mark 
       tempStr:   长字符串 
       First:  从第几位开始截取 
       lenth:  截取长度 
       return:    字符串 
*/


function getStrsubstring(tempStr, First, lenth) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(First, lenth);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}
/**
 * Creator:SE24,Date:2021-6-5 17:55:31
 * 将时间字符串转换成正常格式
 * @param {*} TempJsonDate 
 */


function DateChange(TempJsonDate) {
  if (IsNullOrEmpty(TempJsonDate) || TempJsonDate == "0001-01-01T00:00:00" || TempJsonDate == "0001-01-01T08:00:00") {
    return "";
  }

  if (TempJsonDate.length > 19) {
    var dateee = new Date(TempJsonDate).toJSON();
    var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
    date = date.replace(new RegExp(/-/gm), "/");
    return date;
  }

  var TempRegDate = RegExp(/Date/);

  if (!TempRegDate.test(TempJsonDate)) {
    TempJsonDate = TempJsonDate.replace(/T/, " ");
    TempJsonDate = TempJsonDate.replace(new RegExp(/-/gm), "/");
    return TempJsonDate;
  }

  if (TempJsonDate == "/Date(-62135596800000+0800)/") {
    return "";
  }

  var TempDate = new Date(parseInt(TempJsonDate.replace("/Date(", "").replace(")/", ""), 10));
  var TempMonth = TempDate.getMonth() + 1 < 10 ? "0" + (TempDate.getMonth() + 1) : TempDate.getMonth() + 1;
  var TempDay = TempDate.getDate() < 10 ? "0" + TempDate.getDate() : TempDate.getDate();
  var TempHours = TempDate.getHours() < 10 ? "0" + TempDate.getHours() : TempDate.getHours();
  var TempMinutes = TempDate.getMinutes() < 10 ? "0" + TempDate.getMinutes() : TempDate.getMinutes();
  var TempSeconds = TempDate.getSeconds() < 10 ? "0" + TempDate.getSeconds() : TempDate.getSeconds();
  return TempDate.getFullYear() + "/" + TempMonth + "/" + TempDay + " " + TempHours + ":" + TempMinutes + ":" + TempSeconds;
}
/**
 * Creator:SE7,Date:2021-6-30 17:55:31
 * 将字符串转换成日期格式
 * @param {*} TempJsonDate 
 */


function stringToDate(str) {
  var tempStrs = str.split(" ");
  var dateStrs = tempStrs[0].split("-");
  var year = parseInt(dateStrs[0], 10);
  var month = parseInt(dateStrs[1], 10);
  var day = parseInt(dateStrs[2], 10);
  var date = new Date(year, month, day, 0, 0, 0);
  return date;
}
/**
 * Creator:SE24,Date:2021-7-6 17:38:27
 *  根据标识字符，从字符串左边起第一个此字符开始，切出左边的一部分
 * @param {String} tempStr 
 * @param {String} tempMark 
 */


function getStrLeftFromFront(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substr(0, tempStr.indexOf(tempMark));

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}
/**
 * Creator:SE24,Date:2021-7-6 17:39:56
 *  根据标识字符，从字符串左边起第一个此字符开始，切出右边的一部分
 * @param {*} tempStr 
 * @param {*} tempMark 
 */


function getStrRightFromFront(tempStr, tempMark) {
  if (!IsNullOrEmpty(tempStr)) {
    var tempRes = tempStr.substring(tempStr.indexOf(tempMark) + tempMark.length);

    if (!IsNullOrEmpty(tempRes)) {
      return tempRes;
    } else {
      return tempStr;
    }
  }

  return "";
}