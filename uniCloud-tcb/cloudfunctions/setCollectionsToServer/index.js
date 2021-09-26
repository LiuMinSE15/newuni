/*方法说明
       *@CreatorAndTime 赵永 2020年08月20日
       *@method setCollectionsToServer
       *@for 所属类名/或模块名: 云函数 数据访问层
       *@function 用于数据库增，改（删在制程标准中不允许，只能删除标识）
       *@mark 使用函数时的注意事项
       ==>几个注意事项：[PM.GM]
       1，需要为每个云函数安装wx-server-sdk依赖,在cmd中进入云函数所在的文件夹(可以直接在微信开发者工具中右键在终端打开),然后输入:npm install --save wx-server-sdk@latest
       2，函数名前加 async
       3，数据库查询语句前用await 
       4, 制程定义云函数的返回格式：ResDataList[ResData:{errMsg,data[]},,,,] errMsg格式："数据来源说明:ok"
       5, 该函数的理解关键点：
          5.1 该函数不是一个简单的函数，它应具有高可靠性和高可复用性。
          理解DBConditions.conditions的含义是关键：
          条件对象格式：  DBConditions.conditions
          DBConditions：对应不同的DOC,所以操作之前是可以检查不同对象的条件的。
          conditions：对应某一Doc下的字段是否满足条件。
          5.2 该函数执行的前提是已知条件对象Doc,的"_id"值。【原因事务里面不能使用where，不知道_id值无法定位】
              可以通过getCollectionsToServer来获取目标Doc的_id值。
         
       *@param {参数类型}参数名 参数说明
        data: {
        DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
          [{
              logicType: "", //datalist元素之间的逻辑关系（and  or ），第一个数值必为空，有也会被忽略
              collectionName: "XXX", //目标集合名
              _id: "XXXXX", //填写目标记录的_id值，用于事务条件定位
              IsNotExistAllowed: false, //IsNotExist：true 表示记录不存在时，就是符合执行条件 ，false 表示需要继续检查conditions
                                        //一般情况下这里都是false
              conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
              {
                XXX1 : "== 'PM004'",
              }
            },
            {
              logicType: " && ", //datalist元素之间的逻辑关系（and  or  ），第一个数值必为空，有也会被忽略
              collectionName: "PMGroupList", //目标集合名
              _id: "XXXX", //填写目标记录的_id值，用于事务条件定位
              conditions: //通过定位后，找到目标记录的_id,并对记录条件进行判定。以下的条件关系为 and,该条件在事务中执行。
              {
               YYY3: " == 'PM004'",
              }
            },
          ],
        DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
          [{
              exeType: "add",  //增加记录的案例
              collectionName: "XXXX",
              dataList: [{
                  ZZZ1: "TEST",
                },
                {
                  ZZZ3: "TEST",
                }
              ]
            },
            {
              exeType: "update",//修改记录的案例
              collectionName: "XXXXX",
              dataList: [{
                  _id: "XXXXX", //update一定要指定_id,因为需要使用事务，否则无法通过
                  JJJ1: "XXXX",
                },
                {
                  _id: "XXXX", //update一定要指定_id,因为需要使用事务，否则无法通过
                  KKK1: "XXXXXX",
                }
              ]
            },
          ]
        },
       *@return 制程定义云函数的返回格式：{errMsg,result[]}
*/

const cloud = require('wx-server-sdk')
const pmJSTools = require('./pmCloudjsTools').default
const pmObjList = require('./pmObjList').default

//测试环境
uniCloud.init({
	env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
})

//正式环境 不要轻易改这里
//cloud.init({env: 'zctmes2021-4gbkpkah6976a0e1'})

// 云函数入口函数
exports.main = async (event, context) => {
	//////////////////////////////////////////////////////////////////////////////
	//******************参数获得*************************************************//
	//////////////////////////////////////////////////////////////////////////////
	let DBConditions = event.DBConditions //从客户端获取的执行命令的前提条件
	//数值清单 每个条件项的对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
	let DBExecutions = event.DBExecutions //从客户端执行命令的清单
	let CloudOpenID = event.CloudOpenID //从另一个云函数数中调用时，OpenID在云函数中不存在。
	//因为数据库权限需要，这样update不会成功，通过自己写openid方法实现

	if (pmJSTools.IsNullOrEmpty(DBExecutions)) {
		var TempResData = {
			errMsg: "SetCollectionToServer: 代码问题： DBExecutions 为空。",
			result: []
		}
		return TempResData
	}

	if (pmJSTools.IsNotExist(DBConditions)) {
		var TempResData = {
			errMsg: "SetCollectionToServer: 代码问题： DBConditions  不存在。",
			result: []
		}
		return TempResData
	}



	var TempS = IsAllowedForDBOperation(DBExecutions)
	if (TempS.errMsg != "OK") {
		var TempResData = {
			errMsg: "SetCollectionToServer: 代码问题： " + TempS.errMsg,
			result: []
		}
		return TempResData
	}


	let {
		OPENID,
		APPID
	} = cloud.getWXContext() // 这里获取到的 openId 和 appId 是可信的 

	var errMsg = ""; // 用于返回
	var resultLst = []; // 用于返回
	// var ResData = {
	//   errMsg: "" ,
	//   result: []
	// }

	var TempStrFroConCheck = [] // 条件不通过是，返回的结果。判断语句供参考。
	const wxContext = cloud.getWXContext()

	try {
		// const.init();
		const CloudDB = uniCloud.database({
			// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
			throwOnNotFound: false,
			env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
		}) //定义数据库变量 
		const result = await CloudDB.runTransaction(async transaction => {
			var TempAllowedToExe = true //是否允许执行
			var TempStrForLogicCal = "" //逻辑判断字符串，每个根据条件结构拼装执行
			//////////////////////////////////////////////////////////////////////////////
			//在决定更新或修改记录之前，先做条件检查。                                      //
			//条件对象格式：  DBConditions.conditions                                    //
			//DBConditions：对应不同的DOC,所以操作之前是可以检查不同对象的条件的。           //
			//conditions：对应某一DOC下的字段是否满足条件。                                //
			//////////////////////////////////////////////////////////////////////////////
			for (var tempJ = 0; tempJ < DBConditions.length; tempJ++) //检查执行条件是否满足：注意事务中不支持WHERE
			{
				var TemplogicType = DBConditions[tempJ].logicType //用来接住条件执行的 类型， TempJ = 0 时被忽略。
				var IsNotExistAllowed = DBConditions[tempJ]
					.IsNotExistAllowed // IsNotExistAllowed = true 表示数据库不存在记录时，条件满足 
				var TempConD1

				if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBConditions[tempJ], "_id"]))) {
					//提供的目标_id为空 暂不操作
				} else {
					TempConD1 = await transaction.collection(DBConditions[tempJ].collectionName)
						.doc(DBConditions[tempJ]._id).get()
					//通过doc获取一个记录
				}
				var TempLogic = false //临时建一个逻辑判断，判断是否满足执行条
				if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([TempConD1, "data"]))) //查到有记录
				{
					if (
						IsNotExistAllowed) //IsNotExistAllowed = true,查不到符合条件，但现状查到了，说明有问题。不满足条件。无法执行。
					{
						TempLogic = false //不满足执行条件
					} else //IsNotExistAllowed为false,说明查到符合条件
					{ //虽然查到了，但还要继续检查，查到的字段是否满足条件
						var TempI = DBConditions[tempJ].conditions.length;
						for (var tempKey in DBConditions[tempJ].conditions) //遍历条件变量
						{
							//var tempKey = DBConditions[tempJ].conditions[tempC]
							//为了给条件判断足够的灵活性，使用eval进行解释执行
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([TempConD1, "data",
									tempKey
								]))) {
								TempLogic = false; //条件不满足
								TempStrFroConCheck.push(tempKey + "在集合中并不不存在");
							} else {
								var TempExeStr = "('" + pmJSTools.GetSubObjStr([TempConD1, "data",
									tempKey
								]) + "'  " + pmJSTools.GetSubObjStr([DBConditions, tempJ,
									"conditions", tempKey
								]) + ")"
								TempStrFroConCheck.push(TempExeStr);
								var TempL = eval(TempExeStr)
								if (TempL == true) //按条件比较  目前只支持相等
								{
									TempLogic = true //条件满足
								} else {
									TempLogic = false; //条件不满足
								}
							}
						}
					}
				} else { //没查到有记录
					if (IsNotExistAllowed) //IsNotExist值为true,说明查不到符合条件
					{
						TempLogic = true //满足执行条件
					} else //IsNotExistAllowed为false,说明查不到也不符合条件
					{
						TempLogic = false //不满足执行条件
					}
				}
				if (tempJ == 0) {
					TempStrForLogicCal = "true"
				} //第一个条件忽略logicType
				else {
					TempStrForLogicCal = TempStrForLogicCal + " " + TemplogicType + " " + TempLogic
				}
			}
			var TempLogicRes
			if (pmJSTools.IsNullOrEmpty(DBConditions)) {
				TempLogicRes = true //空条件直接通过
			} else {
				TempLogicRes = eval("(" + TempStrForLogicCal + ")")
			}

			if (TempLogicRes != true) {
				await transaction.rollback("条件不满足，事务已回退:" +
					TempStrFroConCheck) //事务回退, 表示查询条件不足，无法执行
				//这里如果写break会报错
				//一旦有失败，不再执行下一个任务，退出任务数组
				//注意await transaction.rollback()  会引起try catch, 这里必然会引起try catch。
			} else {
				for (i = 0; i < DBExecutions.length; i++) // 开始执行内容
				{
					var TempEXEType = DBExecutions[i].exeType //先读取要执行的类型
					console.log("数据量的值：" + DBExecutions[i])
					switch (TempEXEType) {
						case "add": //增加字段
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了add,但datalist为空";
							} else {
								var TempResult_id = [];
								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var Temp_id = "";
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									if (!pmJSTools.IsNullOrEmpty(
										OPENID)) //如果上下文中有OPNEID，那就直接用，说明时客户端直接调用的情形
									{
										DBExecutions[i].dataList[j]._openid = OPENID
									} else {
										if (!pmJSTools.IsNullOrEmpty(CloudOpenID)) {
											DBExecutions[i].dataList[j]._openid = CloudOpenID
										}
									}
									console.log("添往数据库的值为：" + collName + "数值为：")
									await transaction.collection(collName).add(
											tempData
										)
										.then(res => {
											console.log(res)
											Temp_id = res._id;
										})
									TempResult_id.push({
										_id: Temp_id,
										i: i,
										j: j
									})
								}
								resultLst.push({
									dataList: TempResult_id
								})
							}
							break;
						case "update": //修改
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了update,但datalist为空";
							} else {
								var tempID
								//datalist 的格式一定要正确。这部分不再过多防错，需要程序员调用的保证正确性

								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									var TempID = DBExecutions[i].dataList[j]._id


									if (!pmJSTools.IsNullOrEmpty(
										OPENID)) //如果上下文中有OPNEID，那就直接用，说明时客户端直接调用的情形
									{
										DBExecutions[i].dataList[j]._openid = OPENID
									} else {
										if (!pmJSTools.IsNullOrEmpty(CloudOpenID)) {
											DBExecutions[i].dataList[j]._openid = CloudOpenID
										}
									}

									if (!pmJSTools.IsNotExist(pmJSTools.GetSubObj([tempData,
											"_id"]))) {
										delete tempData._id
									} //__id不能用于更新，如果有，务必删除

									var Tempresult = await transaction.collection(collName).doc(
										TempID).update({
										data: tempData
										//data:{PMIsDeleted:"XXXXXSCSADVC",_openid:CloudOpenID}
									})
									if (Tempresult.stats.updated > 0) {

									} else {
										var ResData = {
											errMsg: "更新影响行为0，可能是权限原因造成的。",
											result: []
										}
										//ResData.errMsg="更新影响行为0，可能是权限原因造成的。"
										return ResData
									}
								}
							}
							break;
						case "addSonObject": //增加字段
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了add,但datalist为空";
							} else {
								var tempID
								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									var TempID = DBExecutions[i].dataList[j]._id
									if (!pmJSTools.IsNullOrEmpty(
										OPENID)) //如果上下文中有OPNEID，那就直接用，说明时客户端直接调用的情形
									{
										DBExecutions[i].dataList[j]._openid = OPENID
									} else {
										if (!pmJSTools.IsNullOrEmpty(CloudOpenID)) {
											DBExecutions[i].dataList[j]._openid = CloudOpenID
										}
									}

									const db = uniCloud.database({
										env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
									})
									const _ = db.command;
									var Tempresult = await transaction.collection(collectionName)
										.doc(TempID).update({
											data: {
												ZCTPOList: _.push({
													each: [DBExecutions[i].dataList[j]
														.ZCTPOList
													]
												})
											}
										})
									if (Tempresult.stats.updated > 0) {} else {
										errMsg = "更新影响行为0，可能是权限原因造成的。"
										var result = []
										return {
											errMsg,
											result
										}
									}
								}
							}
							break;
						case "removeObject": //增加字段
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了add,但datalist为空";
							} else {
								var tempID
								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									var TempID = DBExecutions[i].dataList[j]._id
									if (!pmJSTools.IsNullOrEmpty(
										OPENID)) //如果上下文中有OPNEID，那就直接用，说明时客户端直接调用的情形
									{
										DBExecutions[i].dataList[j]._openid = OPENID
									} else {
										if (!pmJSTools.IsNullOrEmpty(CloudOpenID)) {
											DBExecutions[i].dataList[j]._openid = CloudOpenID
										}
									}

									const db = uniCloud.database({
										env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
									})
									const _ = db.command;
									var Tempresult = await transaction.collection(collectionName)
										.doc(TempID).remove({})
									if (Tempresult.stats.updated > 0) {} else {
										errMsg = "更新影响行为0，可能是权限原因造成的。"
										var result = []
										return {
											errMsg,
											result
										}
									}
								}
							}
							break;



						case "updateonObject": //修改
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了update,但datalist为空";
							} else {
								var tempID
								//datalist 的格式一定要正确。这部分不再过多防错，需要程序员调用的保证正确性

								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									var TempID = DBExecutions[i].dataList[j]._id


									if (!pmJSTools.IsNullOrEmpty(
										OPENID)) //如果上下文中有OPNEID，那就直接用，说明时客户端直接调用的情形
									{
										DBExecutions[i].dataList[j]._openid = OPENID
									} else {
										if (!pmJSTools.IsNullOrEmpty(CloudOpenID)) {
											DBExecutions[i].dataList[j]._openid = CloudOpenID
										}
									}

									if (!pmJSTools.IsNotExist(pmJSTools.GetSubObj([tempData,
											"_id"]))) {
										delete tempData._id
									} //__id不能用于更新，如果有，务必删除

									var Tempresult = await transaction.collection(collName).doc(
										TempID).update({
										data: tempData
										//data:{PMIsDeleted:"XXXXXSCSADVC",_openid:CloudOpenID}
									})
									if (Tempresult.stats.updated > 0) {

									}
								}
							}
							break;
						case "updateonObjectNoPeople": //修改，但不修改数据表_id为当前操作人。
							if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions[i],
									"dataList"
								]))) {
								errMsg = "要求了update,但datalist为空";
							} else {
								var tempID
								//datalist 的格式一定要正确。这部分不再过多防错，需要程序员调用的保证正确性

								for (j = 0; j < DBExecutions[i].dataList.length; j++) {
									var collName = DBExecutions[i].collectionName
									var tempData = DBExecutions[i].dataList[j]
									var TempID = DBExecutions[i].dataList[j]._id

									if (!pmJSTools.IsNotExist(pmJSTools.GetSubObj([tempData,
											"_id"]))) {
										delete tempData._id
									} //__id不能用于更新，如果有，务必删除

									var Tempresult = await transaction.collection(collName).doc(
										TempID).update({
										data: tempData
										//data:{PMIsDeleted:"XXXXXSCSADVC",_openid:CloudOpenID}
									})
								}
							}
							break;
						default:
							var ResData = {
								errMsg: "setCollectionsToServer:操作类型不正确，TempEXEType 值为： " +
									TempEXEType, //制程函数标准，errMsg="动作名:ok" 时data有效。否则提示数据无效的原因。
								result: []
							}
							//ResData.errMsg="setCollectionsToServer:操作类型不正确，TempEXEType 值为： " + TempEXEType //制程函数标准，errMsg="动作名:ok" 时data有效。否则提示数据无效的原因。
							return ResData
					}
					errMsg =
						"setCollectionsToServer:ok" //制程函数标准，errMsg="动作名:ok" 时data有效。否则提示数据无效的原因。
					//ResData.errMsg="setCollectionsToServer:ok"
				}

			}
		})
	} catch (e) {
		console.log("写数据库时发生错误。")
		console.log(e)
		var ResData = {
			errMsg: "setCollectionsToServer:" + e, //制程函数标准，errMsg="动作名:ok" 时data有效。否则提示数据无效的原因。
			result: resultLst
		}
		//ResData.errMsg="setCollectionsToServer:" + e  //制程函数标准，errMsg="动作名:ok" 时data有效。否则提示数据无效的原因。
		return ResData
	}

	var ResData = {
		errMsg: errMsg,
		result: resultLst
	}
	return ResData
}
//对DBExecutions进行合理性验证，这个只要在调试阶段通过就没有问题
//因为NoSQL对字段结构要求很低，但是制程要求ZCT和PM通用，对于进数据库的格式有严格要求，因此有此函数
//好在ZCT修改数据的唯一入口在SetCollectionToServer,因此在这里做验证是最好的。
//原理： pmObjList.js 定义了需要强行规定的所有表的结构，如果DBExecutions中目标表名在pmObjList.js存在，
//就自动去检查DBExecutions对应的修改变量是否和pmObjList中一致，如果一致则可以修改。
//同时SetCollectionToServer中pmObjList.js的存在相当于给开发者提供了一份标准对象清单，大家各显神通合理使用
function IsAllowedForDBOperation(DBExecutions) {
	//ResData.errMsg = "OK"
	//return ResData
	//注意： 因为实际上该检查在测试阶段结束后，是并不需要的，只为了防止编程错误
	//为了减少内存开销可以，据此，经过重复测试，上线时 可以直接取消掉前面两句的//从而跳过检查。
	var ResData = {
		errMsg: "",
		result: []
	}
	if (pmJSTools.IsNullOrEmpty(DBExecutions) || pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions, 0]))) {
		ResData.errMsg = "IsAllowedForDBOperation:目标数据库执行数据为空"
		return ResData
	}
	for (var i = 0; i < DBExecutions.length; i++) // 开始执行内容
	{
		if (pmJSTools.IsNullOrEmpty(DBExecutions[i].collectionName)) {
			ResData.errMsg = "IsAllowedForDBOperation:目标表名为空，无法执行"
			return ResData
		}
		var collName = DBExecutions[i].collectionName //获得表名
		if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([DBExecutions, i, "dataList"])) || pmJSTools.IsNullOrEmpty(
				pmJSTools.GetSubObj([DBExecutions, i, "dataList", 0]))) {
			ResData.errMsg = "IsAllowedForDBOperation: " + collName + "表名下达dataList为空，无法执行"
			return ResData
		}

		var TempCheckStr = ""
		var TempPMObj = new pmObjList.PMObjectList(collName)
		var TempDataList = {};
		if (!pmJSTools.IsNullOrEmpty(TempPMObj)) { //标准对象里的表名存在才需要检查
			for (j = 0; j < DBExecutions[i].dataList.length; j++) {
				for (var TempKey in DBExecutions[i].dataList[j]) { //通过for in 访问属性清单
					if (!(TempKey in TempPMObj)) //不存在属性的检查方法
					{
						TempCheckStr = "要执行的对象表： " + collName + "中，字段名：" + TempKey + "在标准对象定义里不存在。/n" + TempCheckStr
						//这个属性在[TempPMObj.PMUser,collName]中也存在才可以执行。
					} else {
						if (TempKey == "PMChangeTime") {
							var TempFileValue = DBExecutions[i].dataList[j][TempKey];
							DBExecutions[i].dataList[j][TempKey] = GetDataList(TempFileValue, GetType(TempPMObj[
								TempKey]));
							console.log(TempDataList);
						}

					}
				}
			}
			if (TempCheckStr != "") {
				ResData.errMsg = "IsAllowedForDBOperation: " + TempCheckStr
				return ResData
			}
		}
	}
	//通过表示OK
	ResData.errMsg = "OK"
	return ResData

}
/// 获取字段类型  20210702  SE7
function GetType(obj) {

	let type = typeof obj;
	if (type != "object") {
		return type;
	}
	return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}

//因使用云函数使用的是JSON格式，会将数据类型全部转换为string 。需根据字段类型进行转换
// value 字段值   valueType 字段类型  20210702  SE7
function GetDataList(value, valueType) {
	switch (valueType) {
		case "Date":
			return new Date(value);
		case "String":
			return pmJSTools.GetStr(value);
		default:
			return value;
			break;
	}
}
