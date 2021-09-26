//通用的，云函数中Node.js工具 V20200827  [临时用日期做版本号，未来云端需要统一，暂时每个云函数分开使用]
//声明曝露函数给require方
module.exports = {
  GetSeqID:GetSeqID,
  IsNullOrEmpty:IsNullOrEmpty,
  GetErrMsgValue:GetErrMsgValue,
  GetStr:GetStr,
  getResFromReturn:getResFromReturn,
  IsNotExist:IsNotExist,
  GetLength:GetLength,
  GetSubObj:GetSubObj,
  GetSubObjStr:GetSubObjStr,
  GetNowDate:GetNowDate, 
  GetNowTime:GetNowTime 
}

//函数对象号： 1， 获取动态ID号函数
function GetSeqID (typeStr, intCount) { 

  const now = new Date()
  let year = now.getFullYear()
  year   = year-2000

  if(year >=26 && year <=31)
  year = String.fromCharCode(year + 23)
  else
  year = String.fromCharCode(year + 65)

  let month = (now.getMonth() +1)
  if( month>=26 &&  month<=31)
  month = String.fromCharCode(month + 23)
  else
  month = String.fromCharCode(month + 65)


  let day = now.getDate()
  if( day>=26 &&  day<=31)
  day = String.fromCharCode(day + 23)
  else
  day = String.fromCharCode(day + 65)

  let hour = now.getHours()
  if( hour>=26 &&  hour<=31)
  hour = String.fromCharCode(hour + 23)
  else
  hour = String.fromCharCode(hour + 65)

  
  let minutes = now.getMinutes()
  if( minutes>=26 &&  minutes<=31)
  minutes = String.fromCharCode(minutes + 23)
  else
  {
  if(minutes == 58 || minutes== 59)
  minutes = String.fromCharCode(minutes - 3)
  else
  minutes = String.fromCharCode(minutes + 65)
  }

  let seconds = now.getSeconds()
  if( seconds>=26 &&  seconds<=31)
  seconds = String.fromCharCode(seconds + 23)
  else
  {
    if(seconds == 58 || seconds== 59)
    minutes = String.fromCharCode(seconds - 3)
    else
  seconds = String.fromCharCode(seconds + 65)
  }
  var ResStrList = []
  for(j=0; j < intCount; j++)
  {
  //准备随机数
    len = 6
    len = len || 32
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZ2345678'    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length
　　var pwd = ''
　　for (i = 0; i < len; i++)
     {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
    ResStr =  typeStr + year + month + day + hour + minutes + seconds + pwd
    ResStrList.push(ResStr)
  }
  return ResStrList

}

//函数对象号： 2， 对象转换
function GetStr(ObjVale)
{
    if(IsNullOrEmpty(ObjVale))
    {
      return ""
    }
    else
    {
      return ObjVale.toString()
    }
}

//函数对象号： 3， 过滤objVal为空的各种情形，减少判空复杂度
function IsNullOrEmpty(objVal)
{
  //  过滤 ""; " "; null;undefined;  [];{};vNaN;
  if(objVal === undefined) { // 只能用 === 运算来测试某个值是否是未定义的
    return true;
    }
    if(objVal == null) { // 等同于 a === undefined || a === null
      return true;
    }
    if(objVal == "TypeError") { // 
      return true;
    }

    // 属于数字不应该是空，特别是0， 如果不加这一句，在下一句会被认为是空值。
    if(typeof objVal === 'number') 
    {
      return false
    } 

    // String    
    if(objVal == "" || objVal == null || objVal == undefined){ // "",null,undefined
    return true;
    }
    if(!objVal){ // "",null,undefined,NaN
    return true;
    }
    
   // Array
    if(objVal.length == 0){ // "",[]
    return true;
    }
    return false
}

//函数对象号： 4， 对ErrMsgStr进行整理，减少前端判断复杂度
function GetErrMsgValue(ErrMsgStr)
{
     if(IsNullOrEmpty(ErrMsgStr))
     {
       return ""
     }
     else
     {

       var TempS
       try {
        TempS = ErrMsgStr.substring(ErrMsgStr.indexOf(":") + 1,ErrMsgStr.length)
       } catch (error) {//说明:TempS格式不符合至少有字符":ok"
        return TempS 
       }
       if(IsNullOrEmpty(TempS))
      {
        return  ""
      }
      else
      {
        var lastStr = TempS.toUpperCase()
        if (lastStr == "OK")
        {
          return  lastStr
        }
        else
        {
          return  TempS
        }
      }      
     }
}
//调用结果处理函数
//1, 对云函数返回的结果进行检查和统计格式确认，并将结果整合好给前端，简化前端代码处理的工作量
//2，errMsg 成功消息，result只保留OK的数值。
//3，让调用者获得如下结构： {errMsg,result[{errMsg,data[]},,,,]}
//4，函数名是： get Result From Reurn data 的简称
function getResFromReturn(SerRes) {
  var errMsg =  ""; // 用于返回
  var result = [];// 用于返回
if (IsNullOrEmpty(SerRes)) {//SerRes为空
  errMsg = "返回数据为空。"
  return {errMsg,data}
} else {
  if (GetErrMsgValue(SerRes.errMsg) == "OK") {//调用正常的情况下
    if(GetErrMsgValue(GetSubObj([SerRes,"result","errMsg"])) == "OK")
    {
      errMsg = "OK"//简化，也是为了过滤前面的调用对象说明，减少误会
     


    }
    else
    {
      if(IsNullOrEmpty(GetSubObj([SerRes,"result","errMsg"])))
      {
        
         //分别处理：SerRes.result.errMsg 为空的情况
        //情况1： 程序员重复调用（已经脱壳了）
        //情况2： 如开发说明中的：2.4.9.1   result:   {Data[]}
        //情况3： 如开发说明中的：2.4.9.2 result: {[errMsg，Data[]],...}
        //防错代码
        if(!IsNullOrEmpty(GetSubObj([SerRes,"result","result"])))
        {
          errMsg = "制程代码规范要求： result和errMsg同时出现，现在有result，没有errMsg说明代码有错误。常见错误是errMsg拼写问题。"
        }
        else
        {
          errMsg = "OK" //SerRes.result.errMsg 为空，可能是程序员重复调用 ，为了防止程序员重复调用
        }
      }
      else
      {
        errMsg = SerRes.result.errMsg //errMsg不为OK,一直上传到最上调用层
      }
    }
    if(IsNullOrEmpty(GetSubObj([SerRes,"result","errMsg"]))) //不能直接用IsNullOrEmpty,undefined 表示不存在，为空还是存在的情况下
    {

      if(SerRes.result === undefined || SerRes.result == null)
      {
        errMsg = "代码： 返回结果是OK,但是result 是undefined 或 null,说明调用有问题。"
         //因为errMsg 是OK，和它对应的result 不可以是 undefined ，或 null,否则证明有潜在错误。这是个防错设计
      }
      else
      {
         result = GetSubObj([SerRes,"result"])
      }
      //一般情况下，只要执行result = SerRes.result.result就可以，考虑到，程序员可能会搞不清楚是否要用getResFromReturn
      //为了防错，自动执行result = SerRes.result，防止过度调用造成错误。
      //防错代码


    }
    else
    {
      result = (GetSubObj([SerRes,"result","result"]))//忽略掉一层result,否则结构复杂
    }
    return {errMsg,result}
  } else {//如果返回的结果不为OK,页必须返回错误结果，并且自动屏蔽获取的值。制程规定每一层函数必须为OK,下一层才能是OK,并且错误必须逐层传递到底层。
    errMsg = SerRes.errMsg //一旦由错误，值不会传给调用者
    return {errMsg,result}
  }
}
}

//函数对象号： 6，检查对象是否存在 //和IsNullOrEmpty有很大同
function IsNotExist(objVal)
{

  if(objVal === undefined)
   { // 只能用 === 运算来测试某个值是否是未定义的
    return true
    }
    else
    {
      return false
    }
  
  }

//函数对象号： 7，获取对象数组的长度  String 返回的是字符长度，不支持length的变量返回的是0
function GetLength(objVal)
{
    if(IsNullOrEmpty(objVal))
    {
      return 0
    }

    var TempI = 0
    try
    {
    TempI = objVal.length
    return TempI 
    }
    catch(error)
    {
      return TempI
    }
    
}


//函数对象号： 6，探取子对象是否存在，如果存在则返回子对象，如不存在则返回“”，如存直接返回子变
// AA.BB.CC : 当BB为空空值程序直接报错被catch,这样逻辑性就复杂了。需要一个函数来自动处理。
// 这个函数要处理两种情况
//情况 1： AA.BB.CC : 当BB为空空值程序直接报错，容易产生错误。需要智能处理
//情况 2：AA[0][0].BB :但AA[0]为空，或AA[0][0]为空的智能处理
//TempList 应该是个数组： [rootObj,"子元素名"，“子元素名”，...]
//子元素名 为数值是就是类似：rootObj[0]含义
function GetSubObj(TempList)
{
   if(IsNullOrEmpty(TempList))//TempList不存在，直接返回一个空值回去。
   {
     return "";
   }
   try
   {
    if(IsNullOrEmpty(TempList[0]))//根元素不存在直接返回
    {
      return "";
    }
    var TempObj = TempList[0];
    for (var i = 1; i < TempList.length; i++) {
      if(!IsNullOrEmpty(TempList[i]))
      {
            if(!IsNullOrEmpty(TempObj[TempList[i]])) //不管是数组还是字符都一样
            {
              TempObj = TempObj[TempList[i]] //指向下一层变量
            }
            else
            {
              return "";//说明为空值，直接返回“”
            }
       
      }
      else
      {
        return "";//表达不正确放回空
      }
     } 
   }
   catch(e) //任何错误直接返回空
   {
     return ""
   }
   return TempObj


  }

  //函数对象号： 7 参考 GetSubObj 和 GetStr
function GetSubObjStr(TempList)
{
   return GetStr(GetSubObj(TempList))
}

/** 
 * 函数对象号： 8 
 * Creator:SE24，Date:2021-2-7 12:14:25 
 * 获取当前年-月-日，格式：2021-01-01 
 */ 
function GetNowDate() { 
  var TempNowTime = new Date(); 
  var TempYear = TempNowTime.getFullYear(); 
  var TempMonth = TempNowTime.getMonth() + 1 < 10 ? "0" + (TempNowTime.getMonth() + 1) : TempNowTime.getMonth() + 1; 
  var TempDate = TempNowTime.getDate() < 10 ? "0" + TempNowTime.getDate() : TempNowTime.getDate(); 
  return TempYear + "-" + TempMonth + "-" + TempDate; 
} 
 
/** 
 * 函数对象号： 9 
 * Creator:SE24,Date:2021-2-7 12:20:38 
 * 获取当前时：分：秒，格式：10:00:00 
 */ 
function GetNowTime() { 
  var TempNowTime = new Date(); 
  var TempHours = TempNowTime.getHours() < 10 ? "0" + TempNowTime.getHours() : TempNowTime.getHours(); 
    var TempMinutes = TempNowTime.getMinutes() < 10 ? "0" + TempNowTime.getMinutes() : TempNowTime.getMinutes(); 
    var TempSeconds = TempNowTime.getSeconds() < 10 ? "0" + TempNowTime.getSeconds() : TempNowTime.getSeconds(); 
  return TempHours + ":" + TempMinutes + ":" + TempSeconds; 
} 