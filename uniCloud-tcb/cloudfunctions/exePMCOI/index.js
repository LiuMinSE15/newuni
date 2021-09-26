// 云函数入口文件
const cloud = require('wx-server-sdk');
const {
	IsNullOrEmpty
} = require('./pmCloudjsTools');

const ZCTenv = 'tcb-ecxw1hs9f19080-6d00j26b1957e';
//测试环境
uniCloud.init({
	env: ZCTenv
})

//正式环境 不要轻易改这里
//cloud.init({env: 'zctmes2021-4gbkpkah6976a0e1'})

///////////////////////////////////////////////////////////////////////////////
//这个函数用于把相关的操作集合在一起，以减少云函数数量，同时可以保证功能集中管理//
//////////////////////////////////////////////////////////////////////////////
const pmJSTools = require('./pmCloudjsTools')
exports.main = async (event, context) => {

	var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;" //用于动态表达按钮选中的状态
	var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;" //用于动态表达按钮没有选中的状态

	let funcName = event.funcName //功能名
	let funcPra = event.funcPra //功能参数

	var errMsg = ""; // 用于返回
	var result = []; // 用于返回

	const wxContext = cloud.getWXContext()

	// const db = uniCloud.database(
	const db = uniCloud.database({
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	}) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
	const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command

	var serRes = {
		errMsg: "",
		result: []
	}

	switch (funcName) {

		////////////////////////////////////////////////////////
		//功能1： 创建PMCOI///
		////////////////////////////////////////////////////////
		case "PMCOIAddNew":
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIAddNew:创建任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI)) {
				errMsg = "PMCOIAddNew:创建任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			wxContext.OPENID = "oQ_yx4goEKsp3l7mX7jYfUUdazqo"; //测试临时使用
			// if (pmJSTools.IsNullOrEmpty(wxContext.OPENID) && pmJSTools.IsNullOrEmpty(funcPra.PMCOI.PMCreater)) 
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "bindAccount:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}

			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPCustomerOrderItem",

						dataList: [{
							PMInnerCustomerOrderItemID: funcPra.PMCOI
								.PMInnerCustomerOrderItemID, //	客户子订单ID	
							PMInnerCustomerOrderID: "1", //	客户订单页号	
							PMOutCustomerOrderID: "", //	外部客户单的编号	
							PMCustomerProductID: "", //	客户产品号	
							PMCustomerProductName: "", //	客户产品名 【选用】	
							PMCustomerProductDrawing: "", //	客户产品对应客户图号，在编辑订单时可为空	
							PMInnerProductID: funcPra.PMCOI.PMInnerProductID, //	内部零件号	
							PMBOMID: "", //	BOM版本号	
							PMInnerProductName: funcPra.PMCOI.PMInnerProductName, //	内部零件名	
							PMInnerProductSpec: "", //	内部零件规格	
							PMCustomerProductSpec: "", //	客户零件规格	
							PMOrderType: "CUSTOM", //	订单类型	CUSTOM/客户订单，INNER/内部订单，SAMPLE/样品订单
							PMOrderProType: funcPra.PMCOI.PMOrderProType, //	订单生产类型	劳务  订单生产
							PMOrderUnit: funcPra.PMCOI.PMOrderUnit, //	计量单位	
							PMOrderNum: funcPra.PMCOI.PMOrderNum, //	订单数量	
							PMTaxRate: 0, //	税率	
							PMUnitPriceNoTax: 0, //	不含税单价	
							PMUnitPriceWithTax: 0, //	含税单价	
							PMTotalPriceWithTax: 0, //	含税总价	
							PMCustomerDeliveryDate: funcPra.PMCOI
								.ZCTPlanDeliDateShort, //	需求交货日期	
							PMPlanDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期	
							PMRemark: "", //	备注	
							PMSellCheckState: "", //	销售审核状态	通过："YES"， 否则未通过
							PMSellChecker: "", //	销售审核人	
							PMSellCheckTime: new Date(), //	销售审核时间	
							PMTechCheckState: "", //	技术审核状态	通过："YES"， 否则未通过
							PMTechChecker: "", //	技术审核人	
							PMTechCheckTime: new Date(), //	技术审核时间	
							PMQualityCheckState: "", //	品质审核状态	通过："YES"， 否则未通过
							PMQualityChecker: "", //	品质审核人	
							PMQualityCheckTime: new Date(), //	品质审核时间	
							PMPlanCheckState: "", //	计划审核状态	通过："YES"， 否则未通过
							PMPlanChecker: "", //	计划审核人	
							PMPlanCheckTime: new Date(), //	计划审核时间	
							PMCreater: funcPra.PMCOI.PMCreater, //	创建人	
							PMCreateTime: new Date(), //	创建时间	
							PMChanger: "", //	修改人	
							PMChangeTime: new Date(), //	修改时间	
							PMIsUrgent: funcPra.PMCOI.PMIsUrgent, //	是否紧急	YES:紧急， 其他不紧急
							PMIsUrgentBy: "", //	由谁确认紧急	
							PMIsUrgentTime: new Date(), //	确认紧急的时间	
							PMOrderState: "NORELEASE", //	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单
							PMCustomerID: "", //	客户ID	
							PMChangeRecord: "", //	转内部订单记录	
							PMChangeRemark: "", //	转内部订单备注	
							PMOrderAttribute: "ORDINARY", //	订单特性	普通订单(ORDINARY)不需要评审,特殊订单（SPECIAL）需要评审
							ZCTPlanDeliDateShort: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期
							ZCTCreaterName: funcPra.PMCOI.ZCTCreaterName, //	创建名字,
							ZCTProductURL: funcPra.PMCOI.ZCTProductURL, //产品图片
							ZCTFinishedRate: 0, // 完成率
							ZCTFinishedNum: 0, //完成率       
							ZCTPlanNeedNum: funcPra.PMCOI.PMOrderNum, //还需计划数量（计算值）
							ZCTIsDeleted: "",
							ZCTApplicationCount: 0, //申请数
							PMJobType: funcPra.PMCOI.PMJobType, //工种类型
							ZCTJobPayType: funcPra.PMCOI.ZCTJobPayType, //结款方式
							ZCTFeesInstructions: pmJSTools.IsNullOrEmpty(funcPra.PMCOI
									.ZCTFeesInstructions) ? "" : funcPra.PMCOI
								.ZCTFeesInstructions, //费用及相关说明
							ZCTTaskPictureLst: funcPra.PMCOI.ZCTTaskPictureLst, //生产环境及任务相关图片 
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			try {
				console.log("取值正常，马上远程云函数");
				var serRes = await uniCloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,
				})
				console.log("连接setCollectionsToServer云函数是否正常" + serRes)

				if (serRes.errMsg == undefined) {
					serRes.errMsg = "OK";
				}
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


			//////////////////////////////////////////////////////// 
			//功能2： 抖音创建PMCOI（添加即发布）/// 
			//////////////////////////////////////////////////////// 
		case "PMCOIAddNewDY":

			return PMCOIAddNewDY(funcPra, _);
			//break; 

			////////////////////////////////////////////////////////
			//功能2： getOnePMCOIbyID///
			////////////////////////////////////////////////////////
		case "getOnePMCOIbyID":
			serRes.errMsg = "获取测试数据:OK"

			//PMCOI的原型供编程时参考
			var tempPMCOI = { //交付订单数据
				PMInnerCustomerOrderItemID: "COI2020112300001", //	客户子订单ID	
				PMInnerProductID: "TCSL001A", //	内部零件号
				PMInnerProductName: "陶瓷砂轮001A", //	内部零件名
				PMOrderNum: 200, //	订单数量	
				PMOrderUnit: "PCS", //	计量单位	
				ZCTPlanDeliDateShort: "2020/11/30", //	计划交货日期
				PMIsUrgent: "", //	是否紧急	YES:紧急， 其他不紧急
				ZCTCreaterName: "FCP2020", //	创建名字,
				ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/砂轮.png", //产品图片
				ZCTFinishedRate: 10, // 完成率
				ZCTFinishedNum: 20, //完成率       
				ZCTPlanNeedNum: 100, //还需计划数量（计算值）
				_id: "PMCOI001", //_id值（默认有）

				PMOPOList: [ //生产订单清单
					{
						PMProductionOrderID: "PI202011230001", //	生产订单号
						PMOrderNum: 50, //	订单数量	
						PMUnit: "PCS", //	计量单位
						ZCTlanStockInTimeShort: "11/30", //	计划入库日期短表达
						PMMaterialName: "陶瓷砂轮001A", //	物料名称
						ZCTFinishedNum: 50,
						ZCTFinishedRate: 100, // 生产订单完成率
						ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/砂轮.png", //产品图片
						_id: "PMObject001",

						PMPIList: [ //生产指令单清单
							{
								PMOrderNum: 10, //	订单数量	
								PMUnit: "kg", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/19", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 8, //已完成数量
								ZCTFinishedRate: 80, //完成率
								PMStanardProcessName: "计量混合", //	工序名
								PMPRDInstructionID: "", //	生产指令单号
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/计量混合.png", //工序图
								ZCTRAWPurList: [ //工序对应的领料清单
									{
										ZCTMaterialName: "混合液", //物料名
										PMNum: 1, //	需要数量	
										PMUnit: "L", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/混合液.png", //工序图
										ZCTGetNum: 0.3, //已领用物料数量
										ZCTGetRate: 30, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "磨粒", //物料名
										PMNum: 100, //	需要数量	
										PMUnit: "kg", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
										ZCTGetNum: 40, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "调整剂", //物料名
										PMNum: 200, //	需要数量	
										PMUnit: "ml", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/调整剂.png", //工序图
										ZCTGetNum: 80, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "混合液", //物料名
										PMNum: 1, //	需要数量	
										PMUnit: "L", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/混合液.png", //工序图
										ZCTGetNum: 0.3, //已领用物料数量
										ZCTGetRate: 30, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "磨粒", //物料名
										PMNum: 100, //	需要数量	
										PMUnit: "kg", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
										ZCTGetNum: 40, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "调整剂", //物料名
										PMNum: 200, //	需要数量	
										PMUnit: "ml", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/调整剂.png", //工序图
										ZCTGetNum: 80, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "混合液", //物料名
										PMNum: 1, //	需要数量	
										PMUnit: "L", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/混合液.png", //工序图
										ZCTGetNum: 0.3, //已领用物料数量
										ZCTGetRate: 30, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "磨粒", //物料名
										PMNum: 100, //	需要数量	
										PMUnit: "kg", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
										ZCTGetNum: 40, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "调整剂", //物料名
										PMNum: 200, //	需要数量	
										PMUnit: "ml", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/调整剂.png", //工序图
										ZCTGetNum: 80, //已领用物料数量
										ZCTGetRate: 40, //领用率
										ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
								],
								ZCTRAWPurListRate: 30, //仓库领料任务完成率
								ZCTRAWProList: [ //工序对应的生产驱动原料清单
									{
										ZCTMaterialName: "结合剂", //物料名
										PMNum: 1, //	需要数量	
										PMUnit: "L", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/结合剂.png", //工序图
										ZCTGetNum: 0.5, //已领用物料数量
										ZCTGetRate: 50, //领用率
										ZCTMaterialFromType: "OWNPRODUCT", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "", //
									},
									{
										ZCTMaterialName: "测试用沙", //物料名
										PMNum: 1, //	需要数量	
										PMUnit: "kg", //	单位	
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
										ZCTGetNum: 0.5, //已领用物料数量
										ZCTGetRate: 50, //领用率
										ZCTMaterialFromType: "OWNPRODUCT", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
										_id: "PUR001X" //
									}
								],
								ZCTRAWProListRate: 30, //生产驱动物料任务完成率
								_id: "PMPI001", //
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/20", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "冲压", //	工序名
								PMPRDInstructionID: "", //	生产指令单号
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/冲压.png", //工序图		
								_id: "PMPI002", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/22", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "干燥及现加工", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/干燥及现加工.png", //工序图
								_id: "PMPI003", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/22", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "窑烧", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/窑烧.png", //工序图
								_id: "PMPI003X", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/23", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "面加工", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/面加工.png", //工序图
								_id: "PMPI004", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "内孔加工", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/内孔加工.png", //工序图
								_id: "PMPI005", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "尺寸检查", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/尺寸检查.png", //工序图
								_id: "PMPI006", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "平衡测试", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/平衡测试.png", //工序图
								_id: "PMPI007", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "结合度测试", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/结合度测试.png", //工序图
								_id: "PMPI008", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "回转测试", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/回转测试.png", //工序图
								_id: "PMPI009", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "标注", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/标注.png", //工序图
								_id: "PMPI0010", //

								//以下不由云函数源驱动，由JS驱动
							},
							{
								PMOrderNum: 50, //	订单数量	
								PMUnit: "PCS", //	计量单位	
								PMPlanFromStock: "0", //	计划使用库存数	
								ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
								PMRemark: "", //	备注	
								PMState: "", //	状态		
								PMIsUrgent: "", //	是否紧急	是、否
								PMProductNum: 0, //	已完工数量	
								ZCTFinishedNum: 30, //已完成数量
								ZCTFinishedRate: 60, //完成率
								PMStanardProcessName: "包装", //	工序名
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/包装.png", //工序图
								_id: "PMPI011", //

								//以下不由云函数源驱动，由JS驱动
							}


						],
						ZCTLastSPTList: [ //顺序执行的最后一道工序的SPT任务
							{
								PMSerProcTaskID: "1", //	生产指令切分执行号	
								PMOrderNum: "25", //	订单数量	
								PMUnit: "PCS", //	计量单位	
								ZCTPlanStockInTimeShort: "11/29", //	计划入库时间	
								PMIsUrgent: "", //	是否紧急	是、否
								PMStartTime: "", //	实际开始时间	
								PMEndTime: "", //	实际结束时间	
								PMSPTState: "", //	状态	CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束
								ZCTFinishedNum: 25, //完成数
								ZCTFinishedRate: 100, //完成率
								_id: "SPT001",
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/包装.png", //工序图
								PMStanardProcessName: "包装", //	工序名


								ZCTLastOPTList: [ //最后一个SPT的工序任务清单
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 2, //	订单数量	
										PMUnit: "kg", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/19", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 2, //	已完工数量	
										ZCTFinishedNum: 2, //已完成数量
										ZCTFinishedRate: 100, //完成率
										PMStanardProcessName: "计量混合", //	工序名
										PMPRDInstructionID: "", //	生产指令单号
										PMOPTState: "CLOSE", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/计量混合.png", //工序图
										ZCTRAWPurList: [ //工序对应的仓库领料原料清单
											{
												ZCTMaterialName: "混合液", //物料名
												PMNum: 1, //	需要数量	
												PMUnit: "L", //	单位	
												ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/混合液.png", //工序图
												ZCTGetNum: 0.3, //已领用物料数量
												ZCTGetRate: 30, //领用率
												ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
												_id: "OPT001", //
											},
											{
												ZCTMaterialName: "磨粒", //物料名
												PMNum: 100, //	需要数量	
												PMUnit: "kg", //	单位	
												ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
												ZCTGetNum: 40, //已领用物料数量
												ZCTGetRate: 40, //领用率
												ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
												_id: "OPT002", //
											},
											{
												ZCTMaterialName: "调整剂", //物料名
												PMNum: 200, //	需要数量	
												PMUnit: "ml", //	单位	
												ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/调整剂.png", //工序图
												ZCTGetNum: 80, //已领用物料数量
												ZCTGetRate: 40, //领用率
												ZCTMaterialFromType: "PURCHASE", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
												_id: "OPT003", //
											}
										],
										ZCTRAWPurListRate: 30, //仓库领料任务完成率
										ZCTRAWProList: [ //工序对应的生产驱动原料清单
											{
												ZCTMaterialName: "结合剂", //物料名
												PMNum: 1, //	需要数量	
												PMUnit: "L", //	单位	
												ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/结合剂.png", //工序图
												ZCTGetNum: 0.5, //已领用物料数量
												ZCTGetRate: 50, //领用率
												ZCTMaterialFromType: "OWNPRODUCT", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
												_id: "PUR001" //
											},
											{
												ZCTMaterialName: "测试用沙", //物料名
												PMNum: 1, //	需要数量	
												PMUnit: "kg", //	单位	
												ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/磨粒.png", //工序图
												ZCTGetNum: 0.5, //已领用物料数量
												ZCTGetRate: 50, //领用率
												ZCTMaterialFromType: "OWNPRODUCT", //来源类型 产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购
												_id: "PUR001X" //
											}
										],
										ZCTRAWProListRate: 30, //生产驱动物料任务完成率
										_id: "PUR002", //

										//以下不由云函数源驱动，由JS驱动

									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/20", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 25, //已完成数量
										ZCTFinishedRate: 100, //完成率
										PMStanardProcessName: "冲压", //	工序名
										PMPRDInstructionID: "", //	生产指令单号
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/冲压.png", //工序图		
										PMOPTState: "CLOSE", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO001", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/22", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 25, //已完成数量
										ZCTFinishedRate: 100, //完成率
										PMStanardProcessName: "干燥及现加工", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/干燥及现加工.png", //工序图
										PMOPTState: "CLOSE", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO002", //

										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/22", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 25, //已完成数量
										ZCTFinishedRate: 100, //完成率
										PMStanardProcessName: "窑烧", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/窑烧.png", //工序图
										PMOPTState: "CLOSE", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO002X", //

										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/23", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 30, //已完成数量
										ZCTFinishedRate: 100, //完成率
										PMStanardProcessName: "面加工", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/面加工.png", //工序图
										PMOPTState: "CLOSE", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO003", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "内孔加工", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/内孔加工.png", //工序图
										PMOPTState: "ONRPODUCITON", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO004", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "尺寸检查", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/尺寸检查.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO005", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/25", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "平衡测试", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/平衡测试.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO006", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "结合度测试", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/结合度测试.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO007", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "回转测试", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/回转测试.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO008", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 25, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "标注", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/标注.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO009", //


										//以下不由云函数源驱动，由JS驱动
									},
									{
										PMOneProcessTaskID: "", //	工序任务号	
										PMOrderNum: 50, //	订单数量	
										PMUnit: "PCS", //	计量单位	
										PMPlanFromStock: "0", //	计划使用库存数	
										ZCTPlanStockInTimeShort: "11/26", //	计划入库时间	
										PMRemark: "", //	备注	
										PMState: "", //	状态		
										PMIsUrgent: "", //	是否紧急	是、否
										PMProductNum: 0, //	已完工数量	
										ZCTFinishedNum: 0, //已完成数量
										ZCTFinishedRate: 0, //完成率
										PMStanardProcessName: "包装", //	工序名
										PMPRDInstructionID: "", //	生产指令单号		
										ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/包装.png", //工序图
										PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
										_id: "PRO010", //


										//以下不由云函数源驱动，由JS驱动
									}

								],
								//以下不由云函数源驱动，由JS驱动
								selectedOPTKey: 0
							},
							{
								PMSerProcTaskID: "1", //	生产指令切分执行号	
								PMOrderNum: "25", //	订单数量	
								PMUnit: "PCS", //	计量单位	
								ZCTPlanStockInTimeShort: "11/30", //	计划入库时间	
								PMIsUrgent: "", //	是否紧急	是、否
								PMStartTime: "", //	实际开始时间	
								PMEndTime: "", //	实际结束时间	
								PMSPTState: "", //	状态	CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束
								ZCTFinishedNum: 0, //完成数
								ZCTFinishedRate: 0, //完成率
								_id: "SPT002",
								PMPRDInstructionID: "", //	生产指令单号		
								ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/包装.png", //工序图
								PMStanardProcessName: "包装", //	工序名

								//以下不由云函数源驱动，由JS驱动
							},
						],
						//以下不由云函数源驱动，由JS驱动
						selectedSPTKey: 0
					},
					{
						PMProductionOrderID: "PI202011230002", //	生产订单号
						PMOrderNum: 50, //	订单数量	
						PMUnit: "PCS", //	计量单位
						ZCTlanStockInTimeShort: "12/05", //	计划入库日期短表达
						PMMaterialName: "陶瓷砂轮001A", //	物料名称
						ZCTFinishedNum: 50,
						ZCTFinishedRate: 50, // 生产订单完成率
						ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/砂轮.png", //产品图片
						_id: "PMObject002",

						//以下不由云函数源驱动，由JS驱动
					},
					{
						PMProductionOrderID: "PI202011230003", //	生产订单号
						PMOrderNum: 50, //	订单数量	
						PMUnit: "PCS", //	计量单位
						ZCTlanStockInTimeShort: "12/10", //	计划入库日期短表达
						PMMaterialName: "陶瓷砂轮001A", //	物料名称
						ZCTFinishedNum: 50,
						ZCTFinishedRate: 30, // 生产订单完成率 
						ZCTProductURL: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/tempimage/砂轮.png", //产品图片
						_id: "PMObject003",
						//以下不由云函数源驱动，由JS驱动
					}
				],

				//以下不由云函数源驱动，由JS驱动
				selectedStyle: " box-shadow: 2px 2px 5px #000;",
				selectedPOKey: 0
			}



			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "getOnePMCOIForShare:获取任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOIID)) {
				errMsg = "getOnePMCOIForShare:获取任务PMCOIID时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "getOnePMCOIForShare:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}

			var tempSkipAndLimit = [0, 0]

			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPCustomerOrderItem", //目标集合名数组
					getFields: {

					}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						_id: _.eq(funcPra.PMCOIID),
						ZCTIsDeleted: _.neq("YES")
					}, //{PMUserID:_.eq("4T43T")},  //查询条件


					skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

					//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
					orderByConditions: [
						["_id", "desc"],
					] //字段名和排列顺序， 多个先后排列
				}]

			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,

				},
			})


			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			serRes.errMsg = TempData.errMsg
			serRes.result = TempData.result[0]

			return serRes





			break;

			////////////////////////////////////////////////////////
			//功能3： getPMCOIListbyPMUser///
			////////////////////////////////////////////////////////
		case "getPMCOIListbyPMUser":
			var tempSkipAndLimit = [0, 0]
			if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
			{
				tempSkipAndLimit = funcPra.skipAndLimit
			}
			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPCustomerOrderItem", //目标集合名数组
					getFields: {

					}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						_openid: _.eq(wxContext.OPENID),
						ZCTIsDeleted: _.neq("YES"),
						ZCTAddedTo: _.nin(["myTaskList",
							"Market"
						]) // "myTaslList":加到我的任务页，"Market":表示已发布到市场。
					}, //{PMUserID:_.eq("4T43T")},  //查询条件


					skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

					//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
					orderByConditions: [
						["PMChangeTime", "desc"],
					] //字段名和排列顺序， 多个先后排列
				}]

			if (!pmJSTools.IsNullOrEmpty(funcPra.SelectState)) {
				DBConditions = [{
					collectionsName: "PMPCustomerOrderItem",
					getFields: {},
					whereConditions: {
						_openid: _.eq(wxContext.OPENID),
						ZCTIsDeleted: _.neq("YES"),
						ZCTAddedTo: _.nin(["myTaskList", "Market"]),
						PMOrderState: _.in(funcPra.SelectState)
					},
					skipAndLimit: tempSkipAndLimit,
					orderByConditions: [
						["PMChangeTime", "desc"]
					]
				}]
			}

			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})

			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			serRes.errMsg = TempData.errMsg
			serRes.result = TempData.result

			return serRes

			break;
			////////////////////////////////////////////////////////
			//功能4： PMCOIEdit 编辑一个PMCOI///
			////////////////////////////////////////////////////////
		case "PMCOIEdit": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIEdit:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI)) {
				errMsg = "PMCOIEdit:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIEdit:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			var TempZCTPlanNeedNum = 0;
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPProductionOrder", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMInnerCustomerOrderItemID: _.eq(funcPra.PMCOI.PMInnerCustomerOrderItemID)
					} //字段名和排列顺序， 多个先后排列
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempPOList = [];
			if (TempData.result.length > 0) {
				var TempPOOrderNum = 0;
				TempPOList = TempData.result[0];

				for (let index = 0; index < TempPOList.length; index++) {

					TempPOOrderNum = TempPOOrderNum + parseFloat(TempPOList[index].PMOrderNum);
				}
				TempZCTPlanNeedNum = parseFloat(funcPra.PMCOI.PMOrderNum) - parseFloat(TempPOOrderNum);
			} else {
				TempZCTPlanNeedNum = parseFloat(funcPra.PMCOI.PMOrderNum);
			}
			if (parseFloat(TempZCTPlanNeedNum) < 0) {
				TempZCTPlanNeedNum = 0;
			}

			//准备条件新建

			var ExeData = {
				Conditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				Executions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "update",
						collectionName: "PMPCustomerOrderItem",

						dataList: [{
							PMInnerProductID: funcPra.PMCOI.PMInnerProductID, //	内部零件号	
							PMInnerProductName: funcPra.PMCOI.PMInnerProductName, //	内部零件名	
							PMOrderUnit: funcPra.PMCOI.PMOrderUnit, //	计量单位	
							PMOrderNum: funcPra.PMCOI.PMOrderNum, //	订单数量	
							PMPlanDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期	
							PMChangeTime: new Date(), //	修改时间	
							PMIsUrgent: funcPra.PMCOI.PMIsUrgent, //	是否紧急	YES:紧急， 其他不紧急
							ZCTPlanDeliDateShort: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期
							ZCTProductURL: funcPra.PMCOI.ZCTProductURL, //产品图片   
							PMJobType: funcPra.PMCOI.PMJobType, //工种类型
							ZCTJobPayType: funcPra.PMCOI.ZCTJobPayType, //结款方式
							ZCTPlanNeedNum: parseFloat(TempZCTPlanNeedNum),
							ZCTFeesInstructions: pmJSTools.IsNullOrEmpty(funcPra.PMCOI
									.ZCTFeesInstructions) ? "" : funcPra.PMCOI
								.ZCTFeesInstructions, //费用及相关说明
							PMOrderProType: funcPra.PMCOI.PMOrderProType, //	订单生产类型	劳务  订单生产
							ZCTTaskPictureLst: funcPra.PMCOI
								.ZCTTaskPictureLst, //    生产环境及任务相关图片 
							_id: funcPra.PMCOI._id
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: ExeData,

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

			break;
		}
		////////////////////////////////////////////////////////
		//功能4： PMCOIDelete 删除一个PMCOI///
		////////////////////////////////////////////////////////
		case "PMCOIDelete": {
			wxContext.OPENID = "oQ_yx4goEKsp3l7mX7jYfUUdazqo";
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIDelete:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			//准备条件新建

			var ExeData = {
				Conditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "update",
						collectionName: "PMPCustomerOrderItem",
						dataList: [{
							ZCTIsDeleted: "YES",
							_id: funcPra.PMCOI._id
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			const db = uniCloud.database({
				env: 'tcb-ecxw1hs9f19080-6d00j26b1957e',
			})
			if (!pmJSTools.IsNullOrEmpty(funcPra.PMCOI.ZCTSourcePositionID)) {
				console.log("是否有值："+funcPra.PMCOI.ZCTSourcePositionID);
				var TempResult = await db.runTransaction(async transaction => {
					
					var TempTableName = ""; //来源任务表名
					if (funcPra.PMCOI.ZCTSourceType == "PO") {
						TempTableName = "PMPProductionOrder";
					} else if (funcPra.PMCOI.ZCTSourceType == "PI") {
						TempTableName = "PMPPRDInstruction";
					} else if (funcPra.PMCOI.ZCTSourceType == "SPT") {
						TempTableName = "PMPSeriesProcessTask";
					} else if (funcPra.PMCOI.ZCTSourceType == "OPT") {
						TempTableName = "PMPOneProcessTask";
					} else if (funcPra.PMCOI.ZCTSourceType == "RAWPRO") {
						TempTableName = "ZCTRAWPro";
					} else {
						await transaction.rollback("未知的来源类型"); //回滚事务
						return;
					}
					//修改来源任务的状态为已分发
					var TempUpdateResult = await transaction.collection(TempTableName).doc(funcPra
						.PMCOI.ZCTSourcePositionID).update({
						data: {
							ZCTDistributeDate: "", //分发时间
							ZCTIsDistribute: "", //分发状态（YES:已分发，NO:未分发）
							ZCTDistributor: "", //分发人
						}
					})
					if (TempUpdateResult.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
				})

			}


			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,

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

			break;
		}
		////////////////////////////////////////////////////////
		//功能5： 通过一个ID值获得一个PMCOI用于分发共享///
		////////////////////////////////////////////////////////
		case "getOnePMCOIForShare": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "getOnePMCOIForShare:获取任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOIID)) {
				errMsg = "getOnePMCOIForShare:获取任务PMCOIID时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "getOnePMCOIForShare:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}

			var tempSkipAndLimit = [0, 0]

			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPCustomerOrderItem", //目标集合名数组
					getFields: {

					}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						_id: _.eq(funcPra.PMCOIID),
						ZCTIsDeleted: _.neq("YES")
					}, //{PMUserID:_.eq("4T43T")},  //查询条件


					skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

					//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
					orderByConditions: [
						["_id", "desc"],
					] //字段名和排列顺序， 多个先后排列
				}]

			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,

				},
			})

			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			serRes.errMsg = TempData.errMsg
			serRes.result = TempData.result

			return serRes

		}
		////////////////////////////////////////////////////////
		//功能6： getMyPMCOIListbyPMUser获取我的任务，///
		////////////////////////////////////////////////////////
		case "getMyPMCOIListbyPMUser":
			///////////////////////////
			//第一步获得ZCTMyPMCOI清单//
			///////////////////////////
			let TempUserRes;
			let TempOptionUserID = "";
			if (!pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				TempUserRes = await db.collection('PMUser').where({
					WXOpenID: _.eq(wxContext.OPENID)
				}).get();
			}
			if (TempUserRes.data.length == 0) {
				errMsg = "该账号户暂未进行工友登记，无法使用此功能，请在工友登记界面进行登记！"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (!pmJSTools.IsNullOrEmpty(TempUserRes.data[0]._id)) {
				TempOptionUserID = TempUserRes.data[0]._id;
			}

			var tempSkipAndLimit = [0, 0]
			if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
			{
				tempSkipAndLimit = funcPra.skipAndLimit
			}
			//从数据库获取交付任务清单
			var tempZCTMyPMCOIList = [];
			let TempMyCOIRes;
			if (!pmJSTools.IsNullOrEmpty(funcPra.SelectState)) {
				TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
							_openid: _.and(_.neq(""), _.eq(wxContext.OPENID)),
							ZCTIsDeleted: _.neq("YES"),
							ZCTTaskState: _.in(funcPra.SelectState)
						},
						{
							ZCTIsDeleted: _.neq("YES"),
							PMUserID: _.and(_.neq(""), _.eq(TempOptionUserID)),
							ZCTTaskState: _.in(funcPra.SelectState)
						}
					]))
					.skip(tempSkipAndLimit[0])
					.limit(tempSkipAndLimit[1])
					.orderBy('ZCTChangeTime', 'desc')
					.get();
			} else {
				TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
							_openid: _.and(_.neq(""), _.eq(wxContext.OPENID)),
							ZCTIsDeleted: _.neq("YES")
						},
						{
							ZCTIsDeleted: _.neq("YES"),
							PMUserID: _.and(_.neq(""), _.eq(TempOptionUserID))
						}
					]))
					.skip(tempSkipAndLimit[0])
					.limit(tempSkipAndLimit[1])
					.orderBy('ZCTPMCOIPlanDeliDate', 'asc')
					.get();
			}
			if (!pmJSTools.IsNullOrEmpty(TempMyCOIRes.data.length) && TempMyCOIRes.data.length > 0) {
				tempZCTMyPMCOIList = TempMyCOIRes.data;
			}

			//////////////////////////////////////////
			//第二步根据获得的ZCTMyPMCOI清单获得PMCOIList//
			///////////////////////////////////////////

			var tempConditionsList = []
			for (tempKey in tempZCTMyPMCOIList) {
				tempConditionsList.push(tempZCTMyPMCOIList[tempKey].ZCTPMCOI_id)
			}

			if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
			{

				//从数据库获取交付任务清单
				var DBConditions = //查询多个集合的表达方法
					[{
						collectionsName: "PMPCustomerOrderItem", //目标集合名数组
						getFields: {

						}, //获取集合中字段名，按顺序对应, ""表示获取全部
						whereConditions: {
							_id: _.in(tempConditionsList),
							//ZCTIsDeleted: _.neq("YES")
						}, //{PMUserID:_.eq("4T43T")},  //查询条件


						skipAndLimit: [0, 0], //从第几个查询起,最多查询多少.第一个是skip值，这个地方不用担心，应该数据会和myPMCOI一致

						//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
						orderByConditions: [
							["PMChangeTime", "desc"],
						] //字段名和排列顺序， 多个先后排列
					}]

				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,

					},
				})

				TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳

				/////////////////////////////////////////////////////
				//第三步根据获得的ZCTMyPMCOI清单，PMCOIList，进行拼装//
				////////////////////////////////////////////////////
				var tempPMCOIList = TempData.result[0]
				for (var tempKey in tempZCTMyPMCOIList) {
					tempZCTMyPMCOIList[tempKey].IsMyTask = "NO";
					for (var tempKey1 in tempPMCOIList) {
						if (tempPMCOIList[tempKey1]._id == tempZCTMyPMCOIList[tempKey].ZCTPMCOI_id) {
							tempZCTMyPMCOIList[tempKey].PMCOI = tempPMCOIList[tempKey1];
							if (tempPMCOIList[tempKey1]._openid == wxContext.OPENID) {
								tempZCTMyPMCOIList[tempKey].IsMyTask = "YES";
							}
						}
					}
				}

			}
			serRes.errMsg = TempMyCOIRes.errMsg
			serRes.result = tempZCTMyPMCOIList
			return serRes
			break;
			////////////////////////////////////////////////////////
			//功能7： AddOneMyPMCOIListbyPMUser获取我的任务，///
			////////////////////////////////////////////////////////
		case "AddOneMyPMCOIbyPMUser": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "AddOneMyPMCOIbyPMUser:创建任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.ZCTPMCOI_id)) {
				errMsg = "AddOneMyPMCOIbyPMUser:ZCTPMCOI_id"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "AddOneMyPMCOIbyPMUser:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			let TempResult;
			//开启事务
			try {
				TempResult = await db.runTransaction(async transaction => {
					//查询此COI记录
					const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').where({
						_id: _.eq(funcPra.ZCTPMCOI_id)
					}).get();
					if (!TempCOIRes.data) {
						await transaction.rollback("未找到此任务信息"); //回滚事务
						return;
					} else {
						if (TempCOIRes.data.length <= 0) {
							await transaction.rollback("未找到此任务信息"); //回滚事务
							return;
						}
					}
					var TempThisCOIData = TempCOIRes.data[0];
					// if(wxContext.OPENID == TempThisCOIData._openid){
					//   await transaction.rollback("无法添加自己创建的任务"); //回滚事务
					//   return;
					// }
					//查询当前操作人信息
					const TempUserRes = await transaction.collection('PMUser').where({
						WXOpenID: _.eq(wxContext.OPENID)
					}).get();
					if (!TempUserRes.data) {
						await transaction.rollback("未找到操作人信息"); //回滚事务
						return;
					} else {
						if (TempUserRes.data.length <= 0) {
							await transaction.rollback("未找到操作人信息"); //回滚事务
							return;
						}
					}
					var TempOptionUserData = TempUserRes.data[0];
					//查询是否已经添加到任务
					const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where(_.or(
						[{
								ZCTPMCOI_id: _.eq(TempThisCOIData._id),
								_openid: _.and(_.neq(""), _.eq(TempOptionUserData
									.WXOpenID)),
							},
							{
								ZCTPMCOI_id: _.eq(TempThisCOIData._id),
								PMUserID: _.and(_.neq(""), _.eq(TempOptionUserData._id))
							}
						])).get();
					if (!TempMyCOIRes.data) {
						await transaction.rollback("查找我的任务失败"); //回滚事务
						return;
					}
					if (TempMyCOIRes.data.length > 0) {
						await transaction.rollback("该任务已添加到我的任务"); //回滚事务
						return;
					}
					//判断申请添加到我的任务的操作人是否为任务发布人
					if (TempThisCOIData.PMCreater == TempOptionUserData.PMUserID) {
						//任务发布人进行添加到我的任务操作
						//添加申请记录
						var TempRecordDataList = {
							ZCTTaskID: funcPra.ZCTPMCOI_id,
							ZCTApplicationType: "Authorize",
							ZCTApplicationDate: new Date(),
							ZCTApplicationNum: 0,
							WXOpenID: wxContext.OPENID,
							ZCTHandleDate: new Date(),
							ZCTHandleResult: "OK",
							ZCTHandleDescribe: "",
						}
						const TempRecordAddURes = await transaction.collection(
							"ZCTApplicationRecord").add({
							data: TempRecordDataList
						})
						if (TempRecordAddURes.errMsg != "collection.add:ok") {
							await transaction.rollback("创建申请记录失败"); //回滚事务
							return;
						}
						//添加MyCOI
						var TempMyCOIDataList = {
							_openid: wxContext.OPENID,
							ZCTPMCOI_id: funcPra.ZCTPMCOI_id,
							ZCTTaskState: "ALLOWED",
							ZCTTaskHistory: [],
							ZCTCreateTime: new Date(),
							ZCTChangeTime: new Date(),
							ZCTPMCOIPlanDeliDate: TempThisCOIData.ZCTPlanDeliDateShort
						}
						const TempMyCOIURes = await transaction.collection("ZCTMyPMCOIList").add({
							data: TempMyCOIDataList
						})
						if (TempMyCOIURes.errMsg != "collection.add:ok") {
							await transaction.rollback("创建我的交付任务失败"); //回滚事务
							return;
						}
						//修改COI
						var TempUpdateCOIURes = await transaction.collection("PMPCustomerOrderItem")
							.doc(funcPra.ZCTPMCOI_id).update({
								data: {
									ZCTApplicationCount: _.inc(1),
									PMOrderState: "ALLOWED",
									ZCTAddedTo: "myTaskList" // "myTaskList":加到我的任务页，"Market":表示已发布到市场
								}
							})
						if (TempUpdateCOIURes.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
							return;
						}
					} else {
						//非任务发布人进行添加到我的任务操作，走关注
						//添加MyCOI
						var TempMyCOIWatchDataList = {
							_openid: wxContext.OPENID,
							ZCTPMCOI_id: funcPra.ZCTPMCOI_id,
							ZCTTaskState: "WATCH",
							ZCTTaskHistory: [],
							ZCTCreateTime: new Date(),
							ZCTChangeTime: new Date(),
							ZCTPMCOIPlanDeliDate: TempThisCOIData.ZCTPlanDeliDateShort
						}
						const TempMyCOIWatchRes = await transaction.collection("ZCTMyPMCOIList")
							.add({
								data: TempMyCOIWatchDataList
							})
						if (TempMyCOIWatchRes.errMsg != "collection.add:ok") {
							await transaction.rollback("创建我的交付任务失败"); //回滚事务
							return;
						}
					}


					return "OK"; //全部执行成功，返回OK
				})
			} catch (e) {
				errMsg = "加到我的任务失败:" + pmJSTools.GetStr(e);
				result = []
				return {
					errMsg,
					result
				}
			}
			if (TempResult == "OK") {
				errMsg = "OK";
				result = []
				return {
					errMsg,
					result
				}
			} else {
				errMsg = pmJSTools.GetStr(TempResult);;
				result = []
				return {
					errMsg,
					result
				}
			}

		}

		////////////////////////////////////////////////////////
		//功能8： 新增COI下的PO///
		////////////////////////////////////////////////////////
		case "AddCOIPO": {
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "addSonObject",
						collectionName: "PMPCustomerOrderItem",
						dataList: [{
							_id: funcPra.PMCOI._id,
							ZCTPOList: funcPra.PMCOI.ZCTPOList
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			console.log(DBExeData)
			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,
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

		case "GetCOIPO":
			var tempSkipAndLimit = [0, 0]
			if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
			{
				tempSkipAndLimit = funcPra.skipAndLimit
			}
			var TempSQL = ""; //  格式： 'ZCTPOList.PMProductionOrderID': '20210120006'
			//从数据库获取交付任务清单
			var DBConditions = funcPra.PMCOI.Contion //查询多个集合的表达方法
			[{
				collectionsName: "PMPCustomerOrderItem", //目标集合名数组
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
				whereConditions: {
					_openid: _.eq(wxContext.OPENID),
					TempSQL
				}, //{PMUserID:_.eq("4T43T")},  //查询条件


				skipAndLimit: tempSkipAndLimit, //从第几个查询起,最多查询多少.第一个是skip值，

				//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
				orderByConditions: [
					["PMChangeTime", "desc"],
				] //字段名和排列顺序， 多个先后排列
			}]

			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			serRes.errMsg = TempData.errMsg
			serRes.result = TempData.result
			return serRes
			break;

			////////////////////////////////////////////////////////
			//功能12： 新增COI下PO,PI,SPT,OPT///
			////////////////////////////////////////////////////////
		case "AddCOIALLData": {
			var TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData", funcPra
				.PMCOI);
			if (TempR != "OK") {
				return "获取COI客户订单数据为空，无法添加" + TempR;
			}

			TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData", funcPra.PMCOI
				.PMPOList);
			if (TempR != "OK") {
				return "获取PO生产计划数据为空，无法添加" + TempR;
			}
			//准备条件新建  
			var DBExeData = {
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "updateonObjectNoPeople",
						collectionName: "PMPCustomerOrderItem",
						dataList: [{
							_id: funcPra.PMCOI._id, //	客户子订单ID	
							ZCTFinishedNum: funcPra.PMCOI.ZCTFinishedNum,
							ZCTPlanNeedNum: funcPra.PMCOI.ZCTPlanNeedNum,
							ZCTFinishedRate: funcPra.PMCOI.ZCTFinishedRate,
							PMChangeTime: new Date()
						}]
					}]
			}
			var TempPODataList = [];
			var TempPIDataList = [];
			var TempSPTDataList = [];
			var TempOPTDataList = [];
			var TempRAWDataList = [];
			var TempZCTRAWProDataList = [];
			var TempSourceTasDBExecutions = [];
			if (!pmJSTools.IsNullOrEmpty(funcPra.PMCOI.ZCTSourcePositionID)) {
				var TempR = ZCTSourceTaskNum(funcPra.PMCOI.ZCTSourcePositionID, funcPra.PMCOI.ZCTFinishedNum,
					funcPra.PMCOI.ZCTSourceType, _, TempSourceTasDBExecutions, wxContext);
			}


			for (i = 0; i < funcPra.PMCOI.PMPOList.length; i++) {
				var TempPO = funcPra.PMCOI.PMPOList[i];
				TempPO.PMProductionOrderSeq = i;
				var TempPOData = GetPOData(TempPO);
				TempPODataList = TempPODataList.concat(TempPOData);
				TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData", TempPO
					.PMPIList);
				if (TempR == "OK") {
					for (TempPIIndex = 0; TempPIIndex < TempPO.PMPIList.length; TempPIIndex++) {
						var TempPIPRData = TempPO.PMPIList[TempPIIndex]
						var TempPIData = GetPMPIAddNew(TempPIPRData);
						TempPIDataList = TempPIDataList.concat(TempPIData);
						TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData",
							TempPIPRData.ZCTRAWPurList);
						if (TempR == "OK") {
							for (let indexRAW = 0; indexRAW < TempPIPRData.ZCTRAWPurList.length; indexRAW++) {
								var TempRAW = TempPIPRData.ZCTRAWPurList[indexRAW];
								var TempRAWData = GetPMRAWAddNewData(TempRAW);
								TempRAWDataList = TempRAWDataList.concat(TempRAWData);
							}
						}

						TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData",
							TempPIPRData.ZCTRAWProList);
						if (TempR == "OK") {
							for (let index = 0; index < TempPIPRData.ZCTRAWProList.length; index++) {
								var TempZCTRAWPro = TempPIPRData.ZCTRAWProList[index];
								var TempZCTRAWProData = GetPMPROAddNewData(TempZCTRAWPro);
								TempZCTRAWProDataList = TempZCTRAWProDataList.concat(TempZCTRAWProData);
							}
						}

					}
				}
				TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData", TempPO
					.ZCTLastSPTList);
				if (TempR == "OK") {
					for (TempI = 0; TempI < TempPO.ZCTLastSPTList.length; TempI++) {
						var TempSPT = TempPO.ZCTLastSPTList[TempI];
						TempSPT.PMSerProcTaskSeq = TempI;
						TempSPTData = GetPMSerAddNewData(TempSPT);
						TempSPTDataList = TempSPTDataList.concat(TempSPTData);

						TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "AddCOIALLData",
							TempSPT.ZCTLastOPTList);
						if (TempR == "OK") {
							for (let index = 0; index < TempSPT.ZCTLastOPTList.length; index++) {
								var TempOPT = TempSPT.ZCTLastOPTList[index];
								TempOPT.PMProcessPraSeqID = index;
								var TempOPTData = GetPMOPTAddNewData(TempOPT);
								TempOPTDataList = TempOPTDataList.concat(TempOPTData);
							}
						}
					}
				}
			}
			var TempPODBExecutions = [];
			var TempPIBExecutions = [];
			var TempSerDBExecutions = [];
			var TempOPTDBExecutions = [];

			var TempRAWPutDBExecutions = [];
			var TempRAWPRODBExecutions = [];

			var TempLastDBExecutions = [];

			TempPODataList.forEach(item => {
				TempPODBExecutions = TempPODBExecutions.concat(item.DBExecutions);
			});
			TempPIDataList.forEach(item => {
				TempPIBExecutions = TempPIBExecutions.concat(item.DBExecutions);
			});
			TempSPTDataList.forEach(item => {
				TempSerDBExecutions = TempSerDBExecutions.concat(item.DBExecutions);
			});
			TempOPTDataList.forEach(item => {
				TempOPTDBExecutions = TempOPTDBExecutions.concat(item.DBExecutions);
			});
			TempRAWDataList.forEach(item => {
				TempRAWPutDBExecutions = TempRAWPutDBExecutions.concat(item.DBExecutions);
			});
			TempZCTRAWProDataList.forEach(item => {
				TempRAWPRODBExecutions = TempRAWPRODBExecutions.concat(item.DBExecutions);
			});





			var DBExecutions = [];
			DBExecutions = DBExecutions.concat(TempPODBExecutions).concat(TempPIBExecutions).concat(
				TempSerDBExecutions).concat(TempOPTDBExecutions).concat(DBExeData.DBExecutions).concat(
				TempRAWPutDBExecutions).concat(TempRAWPRODBExecutions).concat(TempLastDBExecutions);
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: DBExecutions, //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;
		}

		////////////////////////////////////////////////////////
		//功能13： 查询COI下PO,PI,SPT,OPT///
		////////////////////////////////////////////////////////
		case "GetCOIALLData": {






			///////////////////////////
			//第一步获得COI清单//
			///////////////////////////
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPCustomerOrderItem", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						_id: _.eq(funcPra.PMCOIID)
					} //字段名和排列顺序， 多个先后排列
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempCOI;
			if (TempData.result.length > 0) {
				TempCOI = TempData.result[0][0];
			}
			let TempCurrentCOIUserRes = await db.collection('PMUser').where({
				PMUserID: _.eq(TempCOI.PMCreater)
			}).get();
			if (!TempCurrentCOIUserRes.data) {
				errMsg = "未找到此任务发布人信息";
				return {
					errMsg,
					result
				}
			} else {
				if (TempCurrentCOIUserRes.data.length <= 0) {
					errMsg = "未找到此任务发布人信息";
					return {
						errMsg,
						result
					}
				}
			}
			TempCOI.ZCTCreaterName = TempCurrentCOIUserRes.data[0].PMUserName;
			///////////////////////////
			//第二步获得PO清单//
			///////////////////////////
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPProductionOrder", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMInnerCustomerOrderItemID: _.eq(TempCOI.PMInnerCustomerOrderItemID),
						ZCTIsDeleted: _.neq("YES")
					},
					orderByConditions: [
						["PMProductionOrderSeq", "asc"]
					]
					//字段名和排列顺序， 多个先后排列
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},

			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempPOList = [];
			if (TempData.result.length > 0) {
				TempPOList = TempData.result[0];
			}


			//////////////////////////////////////////
			//第三步根据获得PO清单获得PI//
			///////////////////////////////////////////
			if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
				//拼装条件
				var tempConditionsList = []
				for (tempKey in TempPOList) {
					if (pmJSTools.IsNullOrEmpty(tempConditionsList)) {
						tempConditionsList.push(TempPOList[tempKey].PMProductionOrderID)
					} else {
						tempConditionsList.push(TempPOList[tempKey].PMProductionOrderID)
					}
				}
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "PMPPRDInstruction", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								PMProductionOrderID: _.in(tempConditionsList),
								ZCTIsDeleted: _.neq("YES")
							},
							orderByConditions: [
								["PMProcessSeq", "asc"],
							]
						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
			}

			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempPIList = [];
			if (TempData.result.length > 0) {
				TempPIList = TempData.result[0];
			}
			var TempSPTList = [];
			var TempRawputList = [];
			var TempRAWProList = [];
			var TempSPTData = "";
			//////////////////////////////////////////
			//第四步根据获得PI清单获得SPT//
			///////////////////////////////////////////
			if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
				//拼装条件
				var tempConditionsList = []
				for (tempKey in TempPIList) {
					if (pmJSTools.IsNullOrEmpty(tempConditionsList)) {
						tempConditionsList.push(TempPIList[tempKey].PMPRDInstructionID)
					} else {
						tempConditionsList.push(TempPIList[tempKey].PMPRDInstructionID)
					}
				}
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "PMPSeriesProcessTask", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								PMPRDInstructionID: _.in(tempConditionsList),
								ZCTIsDeleted: _.neq("YES")
							},
							orderByConditions: [
								["PMSerProcTaskSeq", "asc"],
							]
						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
				//SPT
				TempSPTData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
				if (TempSPTData.result.length > 0) {
					TempSPTList = TempSPTData.result[0];
				}


				//RAWput 
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "ZCTRAWPur", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								ZCTIsDeleted: _.neq("YES"),
								PMPRDInstructionID: _.in(tempConditionsList)
							},
						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
				TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
				if (TempData.result.length > 0) {
					TempRawputList = TempData.result[0];
				}
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "ZCTRAWPro", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								ZCTIsDeleted: _.neq("YES"),
								PMPRDInstructionID: _.in(tempConditionsList)
							},
						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
				TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳

				if (TempData.result.length > 0) {
					TempRAWProList = TempData.result[0];
				}


			}


			//////////////////////////////////////////
			//第五步根据获得SPT清单获得OPT//
			///////////////////////////////////////////
			if (TempSPTData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempSPTData.result)) {
				//拼装条件
				var tempConditionsList = []
				for (tempKey in TempSPTList) {
					if (pmJSTools.IsNullOrEmpty(tempConditionsList)) {
						tempConditionsList.push(TempSPTList[tempKey].PMSerProcTaskID)
					} else {
						tempConditionsList.push(TempSPTList[tempKey].PMSerProcTaskID)
					}
				}
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "PMPOneProcessTask", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								PMSerProcTaskID: _.in(tempConditionsList)
							},
							orderByConditions: [
								["PMProcessPraSeqID", "asc"],
							]

						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
			}
			TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempOntList = [];
			if (TempData.result.length > 0) {
				TempOntList = TempData.result[0];
			}
			var TempPMCOI = TempCOI;
			TempPMCOI.PMPOList = TempPOList;
			for (var tempKey in TempPMCOI.PMPOList) {
				TempPMCOI.PMPOList[tempKey].PMPIList = [];
				TempPMCOI.PMPOList[tempKey].ZCTLastSPTList = [];
				for (var tempKey1 in TempPIList) {
					if (TempPMCOI.PMPOList[tempKey].PMProductionOrderID == TempPIList[tempKey1]
						.PMProductionOrderID) {
						TempPMCOI.PMPOList[tempKey].PMPIList.push(TempPIList[tempKey1]);
					}
				}
				for (var tempKey2 in TempSPTList) {
					if (TempPMCOI.PMPOList[tempKey].PMProductionOrderID == TempSPTList[tempKey2]
						.PMProductionOrderID) {
						TempPMCOI.PMPOList[tempKey].ZCTLastSPTList.push(TempSPTList[tempKey2]);
					}

				}
				for (var tempKey3 in TempPMCOI.PMPOList[tempKey].ZCTLastSPTList) {
					TempPMCOI.PMPOList[tempKey].ZCTLastSPTList[tempKey3].ZCTLastOPTList = [];
					for (var tempKey4 in TempOntList) {
						if (TempPMCOI.PMPOList[tempKey].ZCTLastSPTList[tempKey3].PMSerProcTaskID == TempOntList[
								tempKey4].PMSerProcTaskID) {
							TempPMCOI.PMPOList[tempKey].ZCTLastSPTList[tempKey3].ZCTLastOPTList.push(
								TempOntList[tempKey4]);
						}
					}
				}



				for (var tempPIKey in TempPMCOI.PMPOList[tempKey].PMPIList) {
					TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].ZCTRAWProList = [];
					TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].ZCTRAWPurList = [];

					for (var tempKeyRawput in TempRawputList) {
						if (TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].PMPRDInstructionID ==
							TempRawputList[tempKeyRawput].PMPRDInstructionID) {
							TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].ZCTRAWPurList.push(TempRawputList[
								tempKeyRawput]);
						}
					}

					for (var tempKeyRAWPro in TempRAWProList) {
						if (TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].PMPRDInstructionID ==
							TempRAWProList[tempKeyRAWPro].PMPRDInstructionID) {
							TempPMCOI.PMPOList[tempKey].PMPIList[tempPIKey].ZCTRAWProList.push(TempRAWProList[
								tempKeyRAWPro]);
						}

					}


				}




			}



			serRes.errMsg = TempData.errMsg
			serRes.result.push(TempPMCOI)
			return serRes
			break;
		}

		////////////////////////////////////////////////////////
		//功能13：  最后该产品的标准工序
		////////////////////////////////////////////////////////
		case "GetLastALLPIData": {
			///////////////////////////
			//第一步获得PO清单//
			///////////////////////////
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPProductionOrder", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMProductID: _.eq(funcPra.PMInnerProductID),
						ZCTIsDeleted: _.neq("YES"),
						_openid: _.eq(wxContext.OPENID)
					},
					orderByConditions: [
						["PMProductionOrderSeq", "asc"]
					]
					//字段名和排列顺序， 多个先后排列
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},

			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempPOList = [];
			if (TempData.result.length > 0) {
				TempPOList = TempData.result[0];
			}


			//////////////////////////////////////////
			//第三步根据获得PO清单获得PI//
			///////////////////////////////////////////
			if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
				//拼装条件
				var tempConditionsList = []
				for (tempKey in TempPOList) {
					if (pmJSTools.IsNullOrEmpty(tempConditionsList)) {
						tempConditionsList.push(TempPOList[tempKey].PMProductionOrderID)
					} else {
						tempConditionsList.push(TempPOList[tempKey].PMProductionOrderID)
					}
				}
				if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
				{
					//从数据库获取交付任务清单
					var DBConditions = //查询多个集合的表达方法
						[{
							collectionsName: "PMPPRDInstruction", //目标集合名数组
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
							whereConditions: {
								PMProductionOrderID: _.in(tempConditionsList),
								ZCTIsDeleted: _.neq("YES")
							},
							orderByConditions: [
								["PMProcessSeq", "asc"],
							]
						}]
					var resData = await cloud.callFunction //await调用远程云函数
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
				}
			}
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempPIList = [];
			if (TempData.result.length > 0) {
				TempPIList = TempData.result[0];
			}
			var TempPIResList;
			for (let index = 0; index < TempPOList.length; index++) {
				TempPIResList = TempPIList.filter(TempN => TempN.PMProductionOrderID == TempPOList[index]
					.PMProductionOrderID)
				if (!pmJSTools.IsNullOrEmpty(TempPIResList)) {
					if (TempPIResList.length > 0) {
						break;
					}
				}
			}
			//拼装条件
			var tempConditionsList = [];
			var TempRawputList = [];
			var TempRAWProList = [];
			for (tempKey in TempPIResList) {
				if (pmJSTools.IsNullOrEmpty(tempConditionsList)) {
					tempConditionsList.push(TempPIResList[tempKey].PMPRDInstructionID)
				} else {
					tempConditionsList.push(TempPIResList[tempKey].PMPRDInstructionID)
				}
			}
			//RAWput 
			if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
			{
				//从数据库获取交付任务清单
				var DBConditions = //查询多个集合的表达方法
					[{
						collectionsName: "ZCTRAWPur", //目标集合名数组
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
						whereConditions: {
							PMPRDInstructionID: _.in(tempConditionsList)
						},
					}]
				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
			}
			TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			if (TempData.result.length > 0) {
				TempRawputList = TempData.result[0];
			}
			if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
			{
				//从数据库获取交付任务清单
				var DBConditions = //查询多个集合的表达方法
					[{
						collectionsName: "ZCTRAWPro", //目标集合名数组
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
						whereConditions: {
							PMPRDInstructionID: _.in(tempConditionsList)
						},
					}]
				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
			}
			TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳

			if (TempData.result.length > 0) {
				TempRAWProList = TempData.result[0];
			}





			for (var tempPIKey in TempPIResList) {
				TempPIResList[tempPIKey].ZCTRAWProList = [];
				TempPIResList[tempPIKey].ZCTRAWPurList = [];
				for (var tempKeyRawput in TempRawputList) {
					if (TempPIResList[tempPIKey].PMPRDInstructionID == TempRawputList[tempKeyRawput]
						.PMPRDInstructionID) {
						TempPIResList[tempPIKey].ZCTRAWPurList.push(TempRawputList[tempKeyRawput]);
					}
				}
				for (var tempKeyRAWPro in TempRAWProList) {
					if (TempPIResList[tempPIKey].PMPRDInstructionID == TempRAWProList[tempKeyRAWPro]
						.PMPRDInstructionID) {
						TempPIResList[tempPIKey].ZCTRAWProList.push(TempRAWProList[tempKeyRAWPro]);
					}

				}
			}


			serRes.errMsg = TempData.errMsg
			serRes.result.push(TempPIResList)
			return serRes
			break;
		}
		////////////////////////////////////////////////////////
		//功能13： 删除PI///
		////////////////////////////////////////////////////////
		case "DeletePI": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMPI)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIDelete:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			//准备条件新建

			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "update",
						collectionName: "PMPPRDInstruction",
						dataList: [{
							ZCTIsDeleted: "YES",
							_id: funcPra.PMPI._id
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,

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
		//功能14： ReleDelete/// 删除发布 
		////////////////////////////////////////////////////////
		case "DeleteObject": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIDelete:获取删除参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMReleaseObject)) {
				errMsg = "PMCOIDelete:获取删除对象参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIDelete:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			var DBExecutions = [];
			if (funcPra.PMReleaseObject.PMObjectType == "PO") {
				for (let index = 0; index < funcPra.PMReleaseObject.PMPIList.length; index++) {
					var TempPIDBExeData = GePItRemoveeData(funcPra.PMReleaseObject.PMPIList[index]);
					TempPIDBExeData.DBExecutions.forEach(Item => {
						DBExecutions = DBExecutions.concat(Item);
					});

				}
				for (let index = 0; index < funcPra.PMReleaseObject.ZCTLastSPTList.length; index++) {
					var TempSPT = funcPra.PMReleaseObject.ZCTLastSPTList[index];
					var TempPIDBExeData = GetSPTRemoveData(funcPra.PMReleaseObject.ZCTLastSPTList[index]);
					TempPIDBExeData.DBExecutions.forEach(Item => {
						DBExecutions = DBExecutions.concat(Item);
					});

					for (let TempSPTIndex = 0; TempSPTIndex < TempSPT.ZCTLastOPTList.length; TempSPTIndex++) {
						var TempOPTDBExeData = GetSPTRemoveData(TempSPT.ZCTLastOPTList[TempSPTIndex]);
						TempOPTDBExeData.DBExecutions.forEach(Item => {
							DBExecutions = DBExecutions.concat(Item);
						});
					}
				}
			}
			if (funcPra.PMReleaseObject.PMObjectType == "PI") {
				for (let index = 0; index < funcPra.PMReleaseObject.ZCTLastSPTList.length; index++) {
					var TempSPT = funcPra.PMReleaseObject.ZCTLastSPTList[index];
					var TempPIDBExeData = GetSPTRemoveData(funcPra.PMReleaseObject.ZCTLastSPTList[index]);
					TempPIDBExeData.DBExecutions.forEach(Item => {
						DBExecutions = DBExecutions.concat(Item);
					});
					for (let TempSPTIndex = 0; TempSPTIndex < TempSPT.ZCTLastOPTList.length; TempSPTIndex++) {
						var TempOPTDBExeData = GetSPTRemoveData(TempSPT.ZCTLastOPTList[TempSPTIndex]);
						TempOPTDBExeData.DBExecutions.forEach(Item => {
							DBExecutions = DBExecutions.concat(Item);
						});
					}
				}
			}
			if (funcPra.PMReleaseObject.PMObjectType == "SPT") {
				for (let index = 0; index < funcPra.PMReleaseObject.ZCTLastOPTList.length; index++) {
					var TempOPTDBExeData = GetSPTRemoveData(funcPra.PMReleaseObject.ZCTLastOPTList[index])
					TempOPTDBExeData.DBExecutions.forEach(Item => {
						DBExecutions = DBExecutions.concat(Item);
					});
				}
			}

			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: DBExecutions, //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);


		}


		////////////////////////////////////////////////////////
		//功能14： 删除PO///
		////////////////////////////////////////////////////////
		case "DeletePO": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMPI)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIDelete:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			//准备条件新建

			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "update",
						collectionName: "PMPProductionOrder",
						dataList: [{
							ZCTIsDeleted: "YES",
							_id: funcPra.PMPI._id
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,

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
		//功能15： 删除SPT///
		////////////////////////////////////////////////////////
		case "DeleteSPT": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMPI)) {
				errMsg = "PMCOIDelete:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIDelete:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			//准备条件新建

			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "update",
						collectionName: "PMPSeriesProcessTask",
						dataList: [{
							ZCTIsDeleted: "YES",
							_id: funcPra.PMPI._id
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			try {
				var serRes = await cloud.callFunction //await调用远程云函数
				({
					name: 'setCollectionsToServer',
					data: DBExeData,

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
		//功能10： 创建PO///
		////////////////////////////////////////////////////////
		case "PMObjectAddNew":
			var TempR = pmJSTools.checkFunctionCondi(funcPra, wxContext.OPENID, "PMObjectAddNew");
			if (TempR != "OK") {
				return TempR;
			}
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPProductionOrder",
						dataList: [{
							PMProductionOrderID: funcPra.PMObject._id, //	生产订单号	
							PMInnerCustomerOrderItemID: funcPra.PMObject
								.PMInnerCustomerOrderItemID, //	交付订单子订单号	
							PMProductID: funcPra.PMObject.PMProductID, //	内部产品号	
							PMMaterialID: funcPra.PMObject.PMMaterialID, //	物料编号	
							PMMaterialNumber: funcPra.PMObject.PMMaterialNumber, //	物料规格号	
							PMSpecification: funcPra.PMObject.PMSpecification, //	规格型号	
							PMMaterialName: funcPra.PMObject.PMMaterialName, //	物料名称	
							PMBOMID: funcPra.PMObject.PMBOMID, //	产品BOMID	
							PMOrderNum: funcPra.PMObject.PMOrderNum, //	订单数量	
							PMUnit: funcPra.PMObject.PMUnit, //	计量单位	
							PMPlanStockInTime: funcPra.PMObject.PMPlanStockInTime, //	计划入库日期	
							PMRemark: funcPra.PMObject.PMRemark, //	备注	
							PMState: funcPra.PMObject
								.PMState, //	状态	ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束
							PMCreateTime: new Date(), //	创建时间	
							PMCreater: funcPra.PMObject.PMCreater, //	创建人	
							PMChangeTime: new Date(), //	修改时间	
							PMChanger: funcPra.PMObject.PMChanger, //	修改人	
							PMIsUrgent: funcPra.PMObject.PMIsUrgent, //	是否紧急	YES:紧急， 其他不紧急
							PMIsUrgentBy: funcPra.PMObject.PMIsUrgentBy, //	由谁确认紧急	
							PMIsUrgentTime: new Date(), //	确认紧急的时间	
							PMOrderSourceType: "MES", //	订单来源类型	MES为本系统订单，Sync为同步对接订单
							PMObjectrderType: funcPra.PMObject
								.PMObjectrderType, //	订单类型	CUSTOMER:客户订单；INNER:内部订单；SAMPLE:样品订单
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;


			////////////////////////////////////////////////////////
			//功能11： 创建PI///
			////////////////////////////////////////////////////////
		case "PMPIAddNew":
			var TempR = pmJSTools.checkFunctionCondi(funcPra, wxContext.OPENID, "PMPIAddNew");
			if (TempR != "OK") {
				return TempR;
			}
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPPRDInstruction",
						dataList: [{
							PMPRDInstructionID: funcPra.PMObject.PMPRDInstructionID, //	生产指令单号	
							PMProductionOrderID: funcPra.PMObject.PMPRDInstructionID, //	生产订单号	
							PMPInnerProductID: funcPra.PMObject
								.PMPInnerProductID, //	交付订单子订单号（GM:应该是内部零件号）	
							PMVersionID: funcPra.PMObject.PMVersionID, //	产品BOM版本号	
							PMOrderNum: funcPra.PMObject.PMOrderNum, //	订单数量	
							PMUnit: funcPra.PMObject.PMUnit, //	计量单位	
							PMPlanFromStock: funcPra.PMObject.PMPlanFromStock, //	计划使用库存数	
							PMMaterialID: funcPra.PMObject.PMMaterialID, //	物料编号	
							PMMaterialName: funcPra.PMObject.PMMaterialName, //	物料名称	
							PMMaterialNumber: funcPra.PMObject.PMMaterialNumber, //	物料规格号	
							PMSpecification: funcPra.PMObject.PMSpecification, //	规格型号	
							PMPlanStockInTime: funcPra.PMObject.PMPlanStockInTime, //	计划入库时间	
							PMRemark: funcPra.PMObject.PMRemark, //	备注	
							PMOrderType: funcPra.PMObject.PMOrderType, //	订单类型	
							PMState: funcPra.PMObject.PMState, //	状态	
							PMLinesGroup: funcPra.PMObject.PMLinesGroup, //	生产线	
							PMShopCode: funcPra.PMObject.PMShopCode, //	车间号	
							PMIsUrgent: funcPra.PMObject.PMIsUrgent, //	是否紧急	是、否
							PMIsUrgentBy: funcPra.PMObject.PMIsUrgentBy, //	由谁确认紧急	
							PMIsUrgentTime: new Date(), //	确认紧急的时间	
							PMInstructionType: funcPra.PMObject
								.PMInstructionType, //	指令单类型	PRODUCTION:生产、委外:OUTSOURCING
							PMCreateTime: new Date(), //	创建时间	
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}

			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;
			////////////////////////////////////////////////////////
			//功能12： 创建SPT///
			////////////////////////////////////////////////////////
		case "PMSerAddNew":
			var TempR = pmJSTools.checkFunctionCondi(funcPra, wxContext.OPENID, "PMSerAddNew");
			if (TempR != "OK") {
				return TempR;
			}
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPSeriesProcessTask",
						dataList: [{
							PMSerProcTaskID: funcPra.PMObject.PMSerProcTaskID, //	生产指令切分执行号	
							PMPRDInstructionID: funcPra.PMObject.PMPRDInstructionID, //	生产指令单号	
							PMProductionOrderID: funcPra.PMObject.PMProductionOrderID, //	生产订单号	
							PMInnerCustomerOrderItemID: funcPra.PMObject
								.PMProductionOrderID, //	交付订单子订单号	
							PMPInnerProductID: funcPra.PMObject.PMPInnerProductID, //	内部产品号	
							PMVersionID: funcPra.PMObject.PMVersionID, //	产品BOMID	
							PMOrderNum: funcPra.PMObject.PMOrderNum, //	订单数量	
							PMUnit: funcPra.PMObject.PMUnit, //	计量单位	
							PMPlanStockInTime: funcPra.PMObject.PMPlanStockInTime, //	计划入库时间	
							PMRemark: funcPra.PMObject.PMRemark, //	备注	
							PMLinesGroup: funcPra.PMObject.PMLinesGroup, //	生产线	
							PMShopCode: funcPra.PMObject.PMShopCode, //	车间号	
							PMIsUrgent: funcPra.PMObject.PMIsUrgent, //	是否紧急	是、否
							PMIsUrgentBy: funcPra.PMObject.PMIsUrgentBy, //	由谁确认紧急	
							PMIsUrgentTime: new Date(), //	确认紧急的时间	
							PMSPTState: "CREATION", //	状态	CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束
							PMPlanStartTime: funcPra.PMObject.PMPlanStartTime, //	计划开始时间	
							PMPlanEndTime: new Date(), //	计划结束时间	
							PMStanardProcessName: funcPra.PMObject.PMStanardProcessName, //	工序名	
							PMCreateTime: new Date(), //	创建时间	
							PMSPTType: "PRODUCTION", //	SPT类型	OUTSOURE:委外类型、PRODUCTION:生产
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;
			////////////////////////////////////////////////////////
			//功能13： 创建OPT///
			////////////////////////////////////////////////////////
		case "PMOPTAddNew":
			var TempR = pmJSTools.checkFunctionCondi(funcPra, wxContext.OPENID, "PMOPTAddNew");
			if (TempR != "OK") {
				return TempR;
			}
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPOneProcessTask",
						dataList: [{
							PMOneProcessTaskID: funcPra.PMObject.PMOneProcessTaskID, //	工序任务号	
							PMOneProcessPraID: funcPra.PMObject.PMOneProcessPraID, //	工序定义ID	
							PMPRDInstructionID: funcPra.PMObject.PMPRDInstructionID, //	生产指令单号	
							PMSerProcTaskID: funcPra.PMObject.PMSerProcTaskID, //	生产指令切分执行号	
							PMOPTTaskVolum: funcPra.PMObject.PMOPTTaskVolum, // 任务数量
							PMProductNum: funcPra.PMObject.PMProductNum, // 生产数量
							PMWaitingProductionNum: funcPra.PMObject
								.PMWaitingProductionNum, // 待生产数量
							PMSumScrapNum: funcPra.PMObject.PMSumScrapNum, // 报废数量
							PMQuaNum: funcPra.PMObject.PMQuaNum, // 合格数量
							PMSumReworkNum: funcPra.PMObject.PMSumReworkNum, // 返工数量
							PMUnit: funcPra.PMObject.PMUnit, // 单位
							PMPlanStartTime: funcPra.PMObject.PMPlanStartTime, // 计划开始时间
							PMPlanEndTime: funcPra.PMObject.PMPlanEndTime, // 计划结束时间
							PMStartTime: funcPra.PMObject.PMStartTime, // 实际开始时间
							PMEndTime: funcPra.PMObject.PMEndTime, // 实际结束时间
							PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
							PMIsUrgent: funcPra.PMObject.PMIsUrgent, // 是否紧急 是、 否
							PMOperatorBy: funcPra.PMObject.PMOperatorBy, // 分配到人(操作工)
							PMStationID: funcPra.PMObject.PMStationID, // 分配到设备号
							PMOperatorTime: funcPra.PMObject.PMOperatorTime, // 分配时间
							PMQualityBy: funcPra.PMObject.PMQualityBy, // 质检人员
							PMQualityTime: funcPra.PMObject.PMQualityTime, // 质检时间
							PMCreater: funcPra.PMObject.PMCreater, // 创建人
							PMCreateTime: funcPra.PMObject.PMCreateTime, // 创建时间
							PMUpdatePerson: funcPra.PMObject.PMUpdatePerson, // 修改人
							PMUpdateTime: funcPra.PMObject.PMUpdateTime, // 修改时间
							PMApprovalResult: funcPra.PMObject
								.PMApprovalResult, // 审批结果 NO: 未审批,YES: 审批通过, NOK: 审批不通过
							PMOPTType: funcPra.PMObject
								.PMOPTType, // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
							PMProductionOrderID: funcPra.PMObject.PMProductionOrderID, // 生产订单号
							PMDistributionNum: funcPra.PMObject.PMDistributionNum, // 已分配数
							PMProductID: funcPra.PMObject.PMProductID, // 内部零件号
							PMVersionID: funcPra.PMObject.PMVersionID, // 版本号
							PMProcessPraSeqID: funcPra.PMObject
								.PMProcessPraSeqID, // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
							PMOPPID: funcPra.PMObject.PMOPPID, // 单个工序键值组合
							PMStanardProcessName: funcPra.PMObject
								.PMStanardProcessName, // 标准工序号
							PMStanardProcessType: "INNER", // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
							PMProcessName: funcPra.PMObject.PMProcessName, // 标准工序名
							PMIsYes: funcPra.PMObject.PMIsYes, // 是否启用 YES: 启动
							PMStanOPPrice: funcPra.PMObject
								.PMStanOPPrice, // 标准工价（ 元） 做单个零件的劳务费用
							PMPcsPerCycle: funcPra.PMObject.PMPcsPerCycle, // 模腔数， 默认为1
							PMStandardProcessTime: funcPra.PMObject
								.PMStandardProcessTime, // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
							PMStandardUPDOWNDuration: funcPra.PMObject
								.PMStandardUPDOWNDuration, // 标准上下料周期
							PMStandardProcessDuration: funcPra.PMObject
								.PMStandardProcessDuration, // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
							PMQualityProcessLink: funcPra.PMObject
								.PMQualityProcessLink, // 只有质检合格才能生产下一批或下一个工序的PMOPPID
							PMQualityFirstNeed: funcPra.PMObject
								.PMQualityFirstNeed, // 是否需要首检 YES: 需要
							PMRemark: funcPra.PMObject.PMRemark, // 工序提醒信息
							PMProgramingChangeover: funcPra.PMObject
								.PMProgramingChangeover, // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
							IsNewProgramingNeed: funcPra.PMObject
								.IsNewProgramingNeed, // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
							PMProgramingTime: funcPra.PMObject
								.PMProgramingTime, // 程序编辑时间预估【 选用】
							PMNetWieght: funcPra.PMObject.PMNetWieght, // 单件重量 公斤【 选用】
							PMTechReuirment: funcPra.PMObject.PMTechReuirment, // 技术要求
							PMDrawingPath: funcPra.PMObject.PMDrawingPath, // 图纸所在的路径
							PMWorkshop: funcPra.PMObject.PMWorkshop, // 所在车间
							PMCapacity: funcPra.PMObject.PMCapacity, // 产能
							PMLimitCapacity: funcPra.PMObject.PMLimitCapacity, // 极限产能
							PMProductName: funcPra.PMObject.PMProductName, // 产品名
							PMOperationName: funcPra.PMObject.PMOperationName, // 工序产品名
							PMCodeLength: funcPra.PMObject.PMCodeLength, // 产品码长度
							PMIsSeqNeed: funcPra.PMObject
								.PMIsSeqNeed, // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
							PMIsSameSubNeed: funcPra.PMObject
								.PMIsSameSubNeed, // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
							PMStrCodeNeed: funcPra.PMObject.PMStrCodeNeed, // 字符包含
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;

			////////////////////////////////////////////////////////
			//功能14： 创建OPTSub///
			////////////////////////////////////////////////////////
		case "PMOPTSubAddNew":
			var TempR = pmJSTools.checkFunctionCondi(funcPra, wxContext.OPENID, "PMOPTSubAddNew");
			if (TempR != "OK") {
				return TempR;
			}
			//准备条件新建
			var DBExeData = {
				DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
					[],
				DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
					[{
						exeType: "add",
						collectionName: "PMPOneProcessTaskSub",
						dataList: [{
							PMOneProcessTaskSubID: funcPra.PMObject._id, //生产工序执行ID 
							PMOneProcessTaskID: funcPra.PMObject.PMOneProcessTaskID, //	工序任务号	
							PMOneProcessPraID: funcPra.PMObject.PMOneProcessPraID, //	工序定义ID	
							PMPRDInstructionID: funcPra.PMObject.PMPRDInstructionID, //	生产指令单号	
							PMSerProcTaskID: funcPra.PMObject.PMSerProcTaskID, //	生产指令切分执行号	
							PMOPTTaskVolum: funcPra.PMObject.PMOPTTaskVolum, // 任务数量
							PMProductNum: funcPra.PMObject.PMProductNum, // 生产数量
							PMWaitingProductionNum: funcPra.PMObject
								.PMWaitingProductionNum, // 待生产数量
							PMSumScrapNum: funcPra.PMObject.PMSumScrapNum, // 报废数量
							PMQuaNum: funcPra.PMObject.PMQuaNum, // 合格数量
							PMSumReworkNum: funcPra.PMObject.PMSumReworkNum, // 返工数量
							PMUnit: funcPra.PMObject.PMUnit, // 单位
							PMPlanStartTime: funcPra.PMObject.PMPlanStartTime, // 计划开始时间
							PMPlanEndTime: funcPra.PMObject.PMPlanEndTime, // 计划结束时间
							PMStartTime: funcPra.PMObject.PMStartTime, // 实际开始时间
							PMEndTime: funcPra.PMObject.PMEndTime, // 实际结束时间
							PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
							PMIsUrgent: funcPra.PMObject.PMIsUrgent, // 是否紧急 是、 否
							PMOperatorBy: funcPra.PMObject.PMOperatorBy, // 分配到人(操作工)
							PMStationID: funcPra.PMObject.PMStationID, // 分配到设备号
							PMOperatorTime: funcPra.PMObject.PMOperatorTime, // 分配时间
							PMQualityBy: funcPra.PMObject.PMQualityBy, // 质检人员
							PMQualityTime: funcPra.PMObject.PMQualityTime, // 质检时间
							PMCreater: funcPra.PMObject.PMCreater, // 创建人
							PMCreateTime: funcPra.PMObject.PMCreateTime, // 创建时间
							PMUpdatePerson: funcPra.PMObject.PMUpdatePerson, // 修改人
							PMUpdateTime: funcPra.PMObject.PMUpdateTime, // 修改时间
							PMApprovalResult: funcPra.PMObject
								.PMApprovalResult, // 审批结果 NO: 未审批,YES: 审批通过, NOK: 审批不通过
							PMOPTType: funcPra.PMObject
								.PMOPTType, // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
							PMProductionOrderID: funcPra.PMObject.PMProductionOrderID, // 生产订单号
							PMDistributionNum: funcPra.PMObject.PMDistributionNum, // 已分配数
							PMProductID: funcPra.PMObject.PMProductID, // 内部零件号
							PMVersionID: funcPra.PMObject.PMVersionID, // 版本号
							PMProcessPraSeqID: funcPra.PMObject
								.PMProcessPraSeqID, // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
							PMOPPID: funcPra.PMObject.PMOPPID, // 单个工序键值组合
							PMStanardProcessName: funcPra.PMObject
								.PMStanardProcessName, // 标准工序号
							PMStanardProcessType: "INNER", // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
							PMProcessName: funcPra.PMObject.PMProcessName, // 标准工序名
							PMIsYes: funcPra.PMObject.PMIsYes, // 是否启用 YES: 启动
							PMStanOPPrice: funcPra.PMObject
								.PMStanOPPrice, // 标准工价（ 元） 做单个零件的劳务费用
							PMPcsPerCycle: funcPra.PMObject.PMPcsPerCycle, // 模腔数， 默认为1
							PMStandardProcessTime: funcPra.PMObject
								.PMStandardProcessTime, // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
							PMStandardUPDOWNDuration: funcPra.PMObject
								.PMStandardUPDOWNDuration, // 标准上下料周期
							PMStandardProcessDuration: funcPra.PMObject
								.PMStandardProcessDuration, // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
							PMQualityProcessLink: funcPra.PMObject
								.PMQualityProcessLink, // 只有质检合格才能生产下一批或下一个工序的PMOPPID
							PMQualityFirstNeed: funcPra.PMObject
								.PMQualityFirstNeed, // 是否需要首检 YES: 需要
							PMRemark: funcPra.PMObject.PMRemark, // 工序提醒信息
							PMProgramingChangeover: funcPra.PMObject
								.PMProgramingChangeover, // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
							IsNewProgramingNeed: funcPra.PMObject
								.IsNewProgramingNeed, // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
							PMProgramingTime: funcPra.PMObject
								.PMProgramingTime, // 程序编辑时间预估【 选用】
							PMNetWieght: funcPra.PMObject.PMNetWieght, // 单件重量 公斤【 选用】
							PMTechReuirment: funcPra.PMObject.PMTechReuirment, // 技术要求
							PMDrawingPath: funcPra.PMObject.PMDrawingPath, // 图纸所在的路径
							PMWorkshop: funcPra.PMObject.PMWorkshop, // 所在车间
							PMCapacity: funcPra.PMObject.PMCapacity, // 产能
							PMLimitCapacity: funcPra.PMObject.PMLimitCapacity, // 极限产能
							PMProductName: funcPra.PMObject.PMProductName, // 产品名
							PMOperationName: funcPra.PMObject.PMOperationName, // 工序产品名
							PMCodeLength: funcPra.PMObject.PMCodeLength, // 产品码长度
							PMIsSeqNeed: funcPra.PMObject
								.PMIsSeqNeed, // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
							PMIsSameSubNeed: funcPra.PMObject
								.PMIsSameSubNeed, // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
							PMStrCodeNeed: funcPra.PMObject.PMStrCodeNeed, // 字符包含
						}, ]
					}, ],
				CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
			}
			return pmJSTools.callFunctionRes(cloud, DBExeData);
			break;
			////////////////////////////////////////////////////////
			//功能：COI任务发布
			////////////////////////////////////////////////////////
		case "PMCOIPublish": {
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMCOIPublish:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI)) {
				errMsg = "PMCOIPublish:编辑任务PMCOI时，参数为空。"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMCOIPublish:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			/*if (pmJSTools.IsNullOrEmpty(ZCTNewlongitude)) {
			  errMsg = "SeNewLongitude:最新经度为空"
			  result = []
			  return {
			    errMsg,
			    result
			  }
			}
			if (pmJSTools.IsNullOrEmpty(ZCTNewlatitude)) {
			  errMsg = "SeNewLongitude:最新纬度为空"
			  result = []
			  return {
			    errMsg,
			    result
			  }
			}*/

			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMUser", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						WXOpenID: _.eq(wxContext.OPENID)
					} //字段名和排列顺序， 多个先后排列
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
			var TempData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempUser;
			if (TempData.result.length > 0) {
				TempUser = TempData.result[0][0];
			} else {
				errMsg = "PMCOIPublish:无法使用此功能，请在工友登记界面进行登记！"
				result = []
				return {
					errMsg,
					result
				}
			}
			let TempResult;
			//开启事务
			try {
				TempResult = await db.runTransaction(async transaction => {
					//修改人员表
					var TempUserResult = await transaction.collection("PMUser").doc(TempUser._id)
						.update({
							data: {
								ZCTReleaseNum: _.inc(1)
							}
						})
					if (TempUserResult.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
						return;
					}
					//修改交付任务表
					var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(
						funcPra.PMCOI._id).update({
						data: {
							ZCTCOILatit: funcPra.PMCOI.ZCTCOILatit,
							ZCTCOILongit: funcPra.PMCOI.ZCTCOILongit,
							ZCTAddress: funcPra.PMCOI.ZCTAddress,
							PMOrderState: "PUBLISH",
							ZCTPublishTime: new Date(),
							PMChangeTime: new Date(),
							ZCTLocation: {
								type: 'Point',
								coordinates: [funcPra.PMCOI.ZCTCOILongit, funcPra.PMCOI
									.ZCTCOILatit
								]
							}
						}
					})
					if (TempCOIResult.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
						return;
					}
					return "OK"; //全部执行成功，返回OK
				})
			} catch (e) {
				errMsg = "发布失败:" + pmJSTools.GetStr(e);
				result = []
				return {
					errMsg,
					result
				}
			}
			if (TempResult == "OK") {
				errMsg = "OK";
				result = []
				return {
					errMsg,
					result
				}
			} else {
				errMsg = pmJSTools.GetStr(TempResult);;
				result = []
				return {
					errMsg,
					result
				}
			}
			break;
		}
		////////////////////////////////////////////////////////
		//功能：任务市场页操作
		////////////////////////////////////////////////////////
		case "PMGetCOIByContion": {
			var TempUserInfo = false;
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID) && pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
				TempUserInfo = false;
				// errMsg = "PMGetCOIByContion:操作人信息为空，无法执行"
				// result = []
				// return {
				//   errMsg,
				//   result
				// }
			}
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMGetCOIByContion:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMOption)) {
				errMsg = "PMGetCOIByState:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}

			var OptionUserID = "";
			var WDOptionUserID = "";
			var WDOptionUserName = "";
			let TempUserRes;
			if (!pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				//微信小程序进入
				TempUserRes = await db.collection('PMUser').where({
					WXOpenID: _.eq(wxContext.OPENID)
				}).get();
			}
			if (!pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
				//抖音小程序进入
				TempUserRes = await db.collection('PMUser').where({
					PMPhoneNB: _.eq(funcPra.DouPhone)
				}).get();
			}

			if (TempUserRes.data.length == 0) {
				if (!pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
					TempUserInfo = false;
				}
				//抖音小程序根据手机号未找到账号信息走注册
				else {
					if (pmJSTools.IsNullOrEmpty(funcPra.LoginUserName)) {
						errMsg = "PMGetCOIByContion:操作人员信息为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					} else {
						const CloudDB = uniCloud.database({
							// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
							throwOnNotFound: false,
							env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
						})
						let TempResult;
						try {
							TempResult = await CloudDB.runTransaction(async transaction => {
								var dataList = {
									PMUserID: funcPra.DouPhone,
									PMUserName: funcPra.LoginUserName,
									PMPhoneNB: funcPra.DouPhone,
									PMIsValid: "Yes",
									ZCTLocation: {
										type: 'Point',
										coordinates: [funcPra.longitude, funcPra.latitude]
									},
									ZCTNewLocation: {
										type: 'Point',
										coordinates: [funcPra.longitude, funcPra.latitude]
									},
									ZCTNewlatitude: funcPra.latitude,
									ZCTNewlongitude: funcPra.longitude,
									ZCTlatitude: funcPra.latitude,
									ZCTlongitude: funcPra.longitude,
									ZCTReleaseNum: 0,
									ZCTReleaseAcceNum: 0,
									ZCTReceiveOrderNum: 0,
									ZCTDeliveryAcceNum: 0
								}
								const TempAddUserRes = await transaction.collection("PMUser").add({
									data: dataList
								})
								var TempAddUserId = "";
								if (TempAddUserRes.errMsg == "collection.add:ok") {
									TempAddUserId = TempAddUserRes._id;
								} else {
									await transaction.rollback("账号信息获取失败");
									return;
								}
								return {
									errMsg: "OK",
									result: TempAddUserId,
								};
							});
						} catch (e) {
							errMsg = "账号信息获取失败:" + pmJSTools.GetStr(e);
							result = []
							return {
								errMsg,
								result
							}
						}
						if (TempResult.errMsg == "OK") {
							TempUserInfo = true;
							OptionUserID = TempResult.result;
							WDOptionUserID = TempResult.result;
							WDOptionUserName = funcPra.LoginUserName;
							funcPra.DBlatitude = funcPra.latitude;
							funcPra.DBlongitude = funcPra.longitude;
							funcPra.TempCurrentUserID = funcPra.DouPhone;
						} else {
							errMsg = "账号信息获取失败";
							result = []
							return {
								errMsg,
								result
							}
						}
					}
				}
			}
			if (TempUserRes.data.length > 0) {
				TempUserInfo = true;
				if (!pmJSTools.IsNullOrEmpty(TempUserRes.data[0]._id)) {
					OptionUserID = TempUserRes.data[0]._id;
					WDOptionUserID = TempUserRes.data[0]._id;
				}
				if (!pmJSTools.IsNullOrEmpty(TempUserRes.data[0].WXOpenID)) {
					wxContext.OPENID = TempUserRes.data[0].WXOpenID;
					WDOptionUserID = TempUserRes.data[0]._id;
				}
				WDOptionUserName = TempUserRes.data[0].PMUserName;
				funcPra.DBlatitude = TempUserRes.data[0].ZCTNewlatitude;
				funcPra.DBlongitude = TempUserRes.data[0].ZCTNewlongitude;
				funcPra.TempCurrentUserID = TempUserRes.data[0].PMUserID;
			}


			var tempSkipAndLimit = [0, 20]
			if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) {
				tempSkipAndLimit = funcPra.skipAndLimit
			}

			var DBConditions;
			var DBExeData;
			switch (funcPra.PMOption) {
				//任务市场根据距离获取数据
				case "PMGetCOIByLocation": {
					if ((pmJSTools.IsNullOrEmpty(funcPra.latitude) && pmJSTools.IsNullOrEmpty(funcPra
							.longitude)) || (funcPra.latitude == 0 && funcPra.longitude == 0)) {
						if ((pmJSTools.IsNullOrEmpty(funcPra.DBlatitude) && pmJSTools.IsNullOrEmpty(funcPra
								.DBlongitude)) || (funcPra.DBlatitude == 0 && funcPra.DBlongitude == 0)) {
							errMsg = "请开启手机定位，并允许获取您的位置，便于给您推荐任务"
							result = []
							return {
								errMsg,
								result
							}
						}
					}
					// GM： 暂时去掉查询时对为注册工友的限制 2021-05-04
					// var OptionUserData = [];  // 
					//  let TempUserRes = await db.collection('PMUser').where({
					//        WXOpenID: _.eq(wxContext.OPENID)
					//  }).get()
					//   if (TempUserRes.data.length == 0) {
					//        errMsg = "coitaskmapGetData:先注册工友才可以通过地图查询。"
					//        return {
					//          errMsg,
					//          result: []
					//        }
					//    }         
					//     OptionUserData.push(TempUserRes.data);
					//判断用户工种是否为空
					// GM： 暂时去掉对为注册工友的限制 2021-05-04
					//   if(pmJSTools.IsNullOrEmpty(OptionUserData[0][0].ZCTJobType)){
					//        serRes.errMsg = "您当前未绑定工种，无法找到合适的任务";
					//        return serRes;
					//      }
					var TempDN = new Date();
					var TempNowMonth = (TempDN.getMonth() + 1) > 9 ? TempDN.getMonth() + 1 : "0" + (TempDN
						.getMonth() + 1);
					var TempNowDay = TempDN.getDate() > 9 ? TempDN.getDate() : "0" + TempDN.getDate();
					var TempDateMin = TempDN.getFullYear() + "/" + TempNowMonth + "/" + TempNowDay;
					var TempNextMonth;
					var TempNextYear = TempDN.getFullYear();
					if (TempDN.getMonth() + 1 == 12) {
						TempNextMonth = "01";
						TempNextYear = TempNextYear + 1;
					} else {
						TempNextMonth = (TempDN.getMonth() + 2) > 9 ? TempDN.getMonth() + 2 : "0" + (TempDN
							.getMonth() + 2);
					}
					var TempDateMax = TempNextYear + "/" + TempNextMonth + "/" + TempNowDay;

					var TempGetCOIByLocationRes = await uniCloud.database().collection("PMPCustomerOrderItem")
						.where({
							PMOrderState: _.in(['PUBLISH', 'WaitAuthorize']),
							ZCTIsDeleted: _.neq("YES"),
							// PMJobType: _.eq(OptionUserData[0][0].ZCTJobType),  //GM: 暂时去掉对工种的限制 2021-05-04
							ZCTPlanDeliDateShort: _.gte(TempDateMin).and(_.lte(TempDateMax)),
							ZCTLocation: _.geoNear({
								geometry: db.Geo.Point(funcPra.longitude, funcPra.latitude)
							})
						})
						.skip(tempSkipAndLimit[0])
						.limit(tempSkipAndLimit[1])
						.get()
					var TempCOIRes = {
						errMsg: TempGetCOIByLocationRes.errMsg,
						result: TempGetCOIByLocationRes.data
					}

					var TempData = pmJSTools.getResFromReturn(TempCOIRes) //getResFromReturn整合和简化sertRes供前端使用。
					serRes.errMsg = TempData.errMsg
					serRes.result = TempData.result

					var TempPMCOIList = TempData.result;
					var TempConditionsMyCOIList = [];
					var TempConditionsUserList = [];
					if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
						//拼装条件
						for (TempKey in TempPMCOIList) {
							TempConditionsMyCOIList.push(TempPMCOIList[TempKey]._id);
							TempConditionsUserList.push(TempPMCOIList[TempKey]._openid);
						}
					}
					//条件满足进行二次查询 
					if (!pmJSTools.IsNullOrEmpty(TempConditionsMyCOIList)) {
						let TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
								ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
								_openid: _.and(_.neq(""), _.eq(wxContext.OPENID)),
							},
							{
								ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
								PMUserID: _.and(_.neq(""), _.eq(OptionUserID))
							}
						])).get();
						var TempMyCOIDataList = [];
						if (!pmJSTools.IsNullOrEmpty(TempMyCOIRes.data.length) && TempMyCOIRes.data.length >
							0) {
							TempMyCOIDataList = TempMyCOIRes.data;
						}
						for (var TempKey in TempPMCOIList) {
							TempPMCOIList[TempKey].calMyState = "";
							if (!pmJSTools.IsNullOrEmpty(TempPMCOIList[TempKey]._openid)) {
								if (TempPMCOIList[TempKey]._openid == wxContext.OPENID) {
									TempPMCOIList[TempKey].calMyState = "APPLY";
									continue;
								}
							} else {
								if (!pmJSTools.IsNullOrEmpty(funcPra.TempCurrentUserID)) {
									if (TempPMCOIList[TempKey].PMCreater == funcPra.TempCurrentUserID) {
										TempPMCOIList[TempKey].calMyState = "APPLY";
										continue;
									}
								}
							}
							for (var TempKey1 in TempMyCOIDataList) {
								if (TempMyCOIDataList[TempKey1].ZCTPMCOI_id == TempPMCOIList[TempKey]._id) {
									if (TempMyCOIDataList[TempKey1].ZCTTaskState == "WATCH" ||
										TempMyCOIDataList[TempKey1].ZCTTaskState == "REFUSED") {
										TempPMCOIList[TempKey].calMyState = "WATCH";
									} else {
										TempPMCOIList[TempKey].calMyState = "APPLY";
									}
								}
							}
						}
					}
					if (!pmJSTools.IsNullOrEmpty(TempConditionsUserList)) //条件满足进行二次查询 是否申请,抖音中有申请，但在制程通中未注册
					{
						let TempUserPRes = await db.collection('PMUser').where({
							WXOpenID: _.in(TempConditionsUserList)
						}).get();
						var TempUserDataList = [];
						if (!pmJSTools.IsNullOrEmpty(TempUserPRes.data.length) && TempUserPRes.data.length >
							0) {
							TempUserDataList = TempUserPRes.data;
						}
						for (var TempKey in TempPMCOIList) {
							for (var TempKey1 in TempUserDataList) {
								if (TempUserDataList[TempKey1].WXOpenID == TempPMCOIList[TempKey]._openid &&
									TempUserDataList[TempKey1]._id == OptionUserID) {
									TempPMCOIList[TempKey].calMyState = "APPLY";
									continue;
								}
							}
						}
					}
					serRes.result = TempPMCOIList;
					return serRes;
				}
				break;
				//任务市场页申请
			case "PMCOIApply": {

				//   // GM： 增加申请任务时，必须是注册工友的限制 2021-05-06
				//   var OptionUserData = [];  // 
				//    let TempUserRes = await db.collection('PMUser').where({
				//          WXOpenID: _.eq(wxContext.OPENID)
				//    }).get()
				//    if (TempUserRes.data.length == 0) {
				//         errMsg = "请先进行工友登记才可申请任务。"
				//         return {
				//           errMsg,
				//           result: []
				//         }
				//    }         
				//    OptionUserData.push(TempUserRes.data);
				//   //判断用户工种是否为空
				// if(pmJSTools.IsNullOrEmpty(OptionUserData[0][0].ZCTJobType)){
				//     serRes.errMsg = "请先进行工友登记才可申请任务。";
				//     return serRes;
				//   }
				if (pmJSTools.IsNullOrEmpty(TempUserInfo) || TempUserInfo == false) {
					errMsg = "请先进行工友登记，再进行此操作"
					result = []
					return {
						errMsg,
						result
					}
				}
				if (pmJSTools.IsNullOrEmpty(funcPra._id)) {
					errMsg = "PMCOIApply:参数id为空，无法执行"
					result = []
					return {
						errMsg,
						result
					}
				}
				// DBConditions = [{
				//   collectionsName: "ZCTMyPMCOIList",
				//   getFields: {

				//   },
				//   whereConditions: {
				//     ZCTPMCOI_id: _.eq(funcPra._id),
				//     _openid: _.eq(wxContext.OPENID)
				//   },
				//   skipAndLimit: tempSkipAndLimit,
				//   orderByConditions: [
				//     ["_id", "desc"],
				//   ]
				// }]
			}
			break;
			//任务市场页关注
			case "PMCOIWatch": {
				if (pmJSTools.IsNullOrEmpty(TempUserInfo) || TempUserInfo == false) {
					errMsg = "请先进行工友登记，再进行此操作"
					result = []
					return {
						errMsg,
						result
					}
				}
				if (pmJSTools.IsNullOrEmpty(funcPra._id)) {
					errMsg = "PMCOIApply:参数id为空，无法执行"
					result = []
					return {
						errMsg,
						result
					}
				}
				// DBConditions = [{
				//   collectionsName: "ZCTMyPMCOIList",
				//   getFields: {

				//   },
				//   whereConditions: {
				//     ZCTPMCOI_id: _.eq(funcPra._id),
				//     _openid: _.eq(wxContext.OPENID)
				//   },
				//   skipAndLimit: tempSkipAndLimit,
				//   orderByConditions: [
				//     ["_id", "desc"],
				//   ]
				// }]
			}
			break;
			//我发布的任务页发布成功跳转显示数据及任务市场地图跳转页面
			case "coitaskmapGetData": {
				if (!pmJSTools.IsNullOrEmpty(funcPra.latitude) && !pmJSTools.IsNullOrEmpty(funcPra.longitude)) {
					DBConditions = [{
						collectionsName: "PMPCustomerOrderItem",
						getFields: {},
						whereConditions: {
							PMOrderState: _.in(['PUBLISH', 'WaitAuthorize']),
							ZCTCOILatit: _.eq(funcPra.latitude),
							ZCTCOILongit: _.eq(funcPra.longitude),
							ZCTIsDeleted: _.neq("YES")
						},
						skipAndLimit: tempSkipAndLimit,
						orderByConditions: [
							["_id", "desc"],
						]
					}]
					try {
						var resData = await cloud.callFunction //await调用远程云函数
						({
							name: 'getCollectionsFromServer',
							data: {
								DBConditions,
							},
						})

						var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。
						serRes.errMsg = TempData.errMsg
						serRes.result = TempData.result[0]

						var TempPMCOIList = serRes.result;
						var TempConditionsMyCOIList = [];
						var TempConditionsUserList = [];
						if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
							//拼装条件
							for (TempKey in TempPMCOIList) {
								TempConditionsMyCOIList.push(TempPMCOIList[TempKey]._id);
								TempConditionsUserList.push(TempPMCOIList[TempKey]._openid);
							}
						}
						if (!pmJSTools.IsNullOrEmpty(TempConditionsMyCOIList)) //条件满足进行二次查询 是否申请
						{
							let TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
									ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
									_openid: _.and(_.neq(""), _.eq(wxContext.OPENID))
								},
								{
									ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
									PMUserID: _.and(_.neq(""), _.eq(OptionUserID))
								}
							])).get();
							var TempMyCOIDataList = [];
							if (!pmJSTools.IsNullOrEmpty(TempMyCOIRes.data.length) && TempMyCOIRes.data.length >
								0) {
								TempMyCOIDataList = TempMyCOIRes.data;
							}
							for (var TempKey in TempPMCOIList) {
								TempPMCOIList[TempKey].calMyState = "";
								if (!pmJSTools.IsNullOrEmpty(TempPMCOIList[TempKey]._openid)) {
									if (TempPMCOIList[TempKey]._openid == wxContext.OPENID) {
										TempPMCOIList[TempKey].calMyState = "APPLY";
										continue;
									}
								} else {
									if (!pmJSTools.IsNullOrEmpty(funcPra.TempCurrentUserID)) {
										if (TempPMCOIList[TempKey].PMCreater == funcPra.TempCurrentUserID) {
											TempPMCOIList[TempKey].calMyState = "APPLY";
											continue;
										}
									}
								}
								for (var TempKey1 in TempMyCOIDataList) {
									if (TempMyCOIDataList[TempKey1].ZCTPMCOI_id == TempPMCOIList[TempKey]._id) {
										if (TempMyCOIDataList[TempKey1].ZCTTaskState == "WATCH" ||
											TempMyCOIDataList[TempKey1].ZCTTaskState == "REFUSED") {
											TempPMCOIList[TempKey].calMyState = "WATCH";
										} else {
											TempPMCOIList[TempKey].calMyState = "APPLY";
										}
									}
								}
							}
						}
						if (!pmJSTools.IsNullOrEmpty(TempConditionsUserList)) //条件满足进行二次查询 是否申请,抖音中有申请，但在制程通中未注册
						{
							let TempUserPRes = await db.collection('PMUser').where({
								WXOpenID: _.in(TempConditionsUserList)
							}).get();
							var TempUserDataList = [];
							if (!pmJSTools.IsNullOrEmpty(TempUserPRes.data.length) && TempUserPRes.data.length >
								0) {
								TempUserDataList = TempUserPRes.data;
							}
							for (var TempKey in TempPMCOIList) {
								for (var TempKey1 in TempUserDataList) {
									if (TempUserDataList[TempKey1].WXOpenID == TempPMCOIList[TempKey]._openid &&
										TempUserDataList[TempKey1]._id == OptionUserID) {
										TempPMCOIList[TempKey].calMyState = "APPLY";
										continue;
									}
								}
							}
						}
						serRes.result = TempPMCOIList;
						return serRes;
					} catch (e) {
						errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
						result = []
						return {
							errMsg,
							result
						}
					}
				} else {
					errMsg = "PMGetCOIByState:参数为空，无法执行"
					result = []
					return {
						errMsg,
						result
					}
				}
			}
			break;
			default: {
				var ResData = {
					errMsg: "PMOptionMyTaskByContion功能类型字段为空",
					result: []
				}
				return ResData;
			}
			break;
			}

			try {
				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})

				var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。
				serRes.errMsg = TempData.errMsg
				serRes.result = TempData.result[0]
				if (funcPra.PMOption != "PMCOIApply" && funcPra.PMOption != "PMCOIWatch") {
					return serRes
				} else {
					var SelectMyCOIData = [];
					let TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
							ZCTPMCOI_id: _.eq(funcPra._id),
							_openid: _.eq(wxContext.OPENID)
						},
						{
							ZCTPMCOI_id: _.eq(funcPra._id),
							PMUserID: _.eq(OptionUserID)
						}
					])).get();
					TemperrMsg = ""
					Tempresult = []
					var TempDBExeData = {};

					let TempCurrentCOIRes = await db.collection('PMPCustomerOrderItem').where({
						_id: _.eq(funcPra._id)
					}).get();
					if (!TempCurrentCOIRes.data) {
						errMsg = "未找到此任务信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempCurrentCOIRes.data.length <= 0) {
							errMsg = "未找到此任务信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempThisCOIData = TempCurrentCOIRes.data[0];
					//任务创建认人信息获取
					let TempCurrentCOIUserRes = await db.collection('PMUser').where(_.or([{
							_openid: _.eq(TempThisCOIData._openid)
						},
						{
							PMUserID: _.eq(TempThisCOIData.PMCreater)
						}
					])).get();
					if (!TempCurrentCOIUserRes.data) {
						errMsg = "未找到此任务发布人信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempCurrentCOIUserRes.data.length <= 0) {
							errMsg = "未找到此任务发布人信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempThisCOIUserData = TempCurrentCOIUserRes.data[0];
					//制程通信息获取
					let TempZCTUserRes = await db.collection('PMUser').where({
						PMUserID: _.eq("ZCTAssistant")
					}).get();
					if (!TempZCTUserRes.data) {
						errMsg = "未找到任务推送人信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempZCTUserRes.data.length <= 0) {
							errMsg = "未找到任务推送人信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempZCTUserData = TempZCTUserRes.data[0];
					//申请人不能为任务发布人限制
					if ((!pmJSTools.IsNullOrEmpty(funcPra.TempCurrentUserID) && TempThisCOIData.PMCreater ==
							funcPra.TempCurrentUserID) || (!pmJSTools.IsNullOrEmpty(wxContext.OPENID) &&
							TempThisCOIData._openid == wxContext.OPENID)) {
						errMsg = "不能对自己发布的任务进行申请操作";
						return {
							errMsg,
							result
						}
					}
					if (TempMyCOIRes.data.length == 0) {
						var TempZCTTaskState = funcPra.PMOption == "PMCOIApply" ? "APPLY" : "WATCH";
						if (funcPra.PMOption == "PMCOIApply") {

							//申请
							if (TempThisCOIData.PMOrderState != "PUBLISH" && TempThisCOIData.PMOrderState !=
								"WaitAuthorize") {
								errMsg = "交付任务当前不满足申请条件";
								return {
									errMsg,
									result
								}
							}

							let TempResult;
							//开启事务
							try {
								TempResult = await db.runTransaction(async transaction => {
									//添加申请记录
									var dataList = {};
									//抖音小程序添加
									if (!pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
										dataList = {
											ZCTTaskID: funcPra._id,
											ZCTApplicationType: "Authorize",
											ZCTApplicationDate: new Date(),
											ZCTApplicationNum: 0,
											WXOpenID: "",
											ZCTHandleDate: "",
											ZCTHandleResult: "",
											ZCTHandleDescribe: "",
											PMUserID: OptionUserID,
											PMCOIUserID: TempThisCOIData.PMCreater
										}
									} else {
										//微信小程序添加
										dataList = {
											ZCTTaskID: funcPra._id,
											ZCTApplicationType: "Authorize",
											ZCTApplicationDate: new Date(),
											ZCTApplicationNum: 0,
											WXOpenID: wxContext.OPENID,
											ZCTHandleDate: "",
											ZCTHandleResult: "",
											ZCTHandleDescribe: "",
											PMUserID: "",
											PMCOIUserID: TempThisCOIData.PMCreater
										}
									}
									const TempRecordAddRes = await transaction.collection(
										"ZCTApplicationRecord").add({
										data: dataList
									})
									var TempRecordID = "";
									if (TempRecordAddRes.errMsg == "collection.add:ok") {
										TempRecordID = TempRecordAddRes._id;
									} else {
										await transaction.rollback("创建申请记录失败"); //回滚事务
										return;
									}

									//添加到我的任务
									//抖音小程序添加
									var MyCOIDataList = {};
									if (!pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
										MyCOIDataList = {
											_openid: "",
											ZCTPMCOI_id: funcPra._id,
											ZCTTaskState: TempZCTTaskState,
											ZCTTaskHistory: [],
											ZCTCreateTime: new Date(),
											ZCTChangeTime: new Date(),
											PMUserID: OptionUserID,
											ZCTPMCOIPlanDeliDate: TempThisCOIData
												.ZCTPlanDeliDateShort
										}
									} else {
										//微信小程序添加
										MyCOIDataList = {
											_openid: wxContext.OPENID,
											ZCTPMCOI_id: funcPra._id,
											ZCTTaskState: TempZCTTaskState,
											ZCTTaskHistory: [],
											ZCTCreateTime: new Date(),
											ZCTChangeTime: new Date(),
											PMUserID: "",
											ZCTPMCOIPlanDeliDate: TempThisCOIData
												.ZCTPlanDeliDateShort
										}
									}
									const TempMyCOIAddRes = await transaction.collection(
										"ZCTMyPMCOIList").add({
										data: MyCOIDataList
									})
									if (TempMyCOIAddRes.errMsg != "collection.add:ok") {
										await transaction.rollback("创建我的交付任务失败"); //回滚事务
										return;
									}

									//修改COI状态及申请数
									var TempUpdateCOIRes = await transaction.collection(
										"PMPCustomerOrderItem").doc(funcPra._id).update({
										data: {
											ZCTApplicationCount: _.inc(1),
											PMOrderState: "WaitAuthorize",
											PMChangeTime: new Date()
										}
									})
									if (TempUpdateCOIRes.stats.updated <= 0) {
										await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
										return;
									}
									//申请消息产生
									var TempChatGroupId = "";
									const TempChatGroupResS = await transaction.collection(
										'ZCTChatGroup').where({
										ZCTCommunicatorsUserId: _.eq(TempZCTUserData._id),
										ZCTSponsorUserId: _.eq(TempThisCOIUserData._id)
									}).get();
									if (!TempChatGroupResS.data) {
										await transaction.rollback("消息处理获取聊天组失败");
										return;
									} else {
										if (TempChatGroupResS.data.length > 0) {
											TempChatGroupId = TempChatGroupResS.data[0]._id;
											var TempCGUpdateData = {
												ZCTtextContent: WDOptionUserName + "申请了" +
													TempThisCOIData.PMInnerProductName +
													"任务,请处理",
												ZCTNewestTime: new Date(),
												ZCTNewestTimeTS: Date.now()
											}
											if (TempChatGroupResS.data[0].ZCTSponsorState == "NO") {
												TempCGUpdateData.ZCTSponsorUnreadNum = _.inc(1);
											}

											var TempUpdateChatGroupRes = await transaction
												.collection("ZCTChatGroup").doc(TempChatGroupId)
												.update({
													data: TempCGUpdateData
												})
											if (TempUpdateChatGroupRes.stats.updated <= 0) {
												await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
												return;
											}
										} else {
											//创建聊天组
											var ChatGroupdataList = {
												ZCTCommunicatorsUserId: TempZCTUserData._id,
												ZCTSponsorUserId: TempThisCOIUserData._id,
												ZCTtextContent: WDOptionUserName + "申请了" +
													TempThisCOIData.PMInnerProductName +
													"任务,请处理",
												ZCTNewestTime: new Date(),
												ZCTNewestTimeTS: Date.now(),
												ZCTCommunicatorUnreadNum: 0,
												ZCTSponsorUnreadNum: 1,
												ZCTCommunicatorsState: "NO",
												ZCTSponsorState: "NO"
											}
											const TempAddChatGroupRes = await transaction
												.collection("ZCTChatGroup").add({
													data: ChatGroupdataList
												})
											if (TempAddChatGroupRes.errMsg == "collection.add:ok") {
												TempChatGroupId = TempAddChatGroupRes._id;
											} else {
												await transaction.rollback("消息处理创建聊天组失败");
												return;
											}
										}
									}
									//添加ZCTCommunicateRecord
									var TempCRdataList = {
										ZCTAvatar: TempZCTUserData.ZCTUserPhoto,
										ZCTGroupId: TempChatGroupId,
										ZCTMsgType: "notice",
										ZCTNickName: TempZCTUserData.PMUserName,
										ZCTUserid: TempZCTUserData._id,
										ZCTSendTime: new Date(),
										ZCTSendTimeTS: Date.now(),
										ZCTMESMsg: {
											ZCTMESTheme: "Approval",
											ZCTMESMSG: WDOptionUserName + "申请了" +
												TempThisCOIData.PMInnerProductName + "任务,请处理",
											ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage",
											ZCTMESTime: new Date(),
											ZCTMESState: "待处理",
											ZCTMESTaskID: TempRecordID,
											ZCTMESCreater: WDOptionUserID,
											ZCTJumpType: "ApplyRecord",
											ZCTJumpParameters: {
												dataType: "Authorize",
												ZCTTaskID: TempThisCOIData._id,
												ZCTUserID: TempThisCOIUserData._id,
												ZCTIsNewsJump: true,
												PMInnerProductName: TempThisCOIData
													.PMInnerProductName,
												PMOrderNum: TempThisCOIData.PMOrderNum,
												PMOrderUnit: TempThisCOIData.PMOrderUnit,
												ZCTCOICreator: TempThisCOIData.PMCreater
											}
										}
									}
									const TempAddCRRes = await transaction.collection(
										"ZCTCommunicateRecord").add({
										data: TempCRdataList
									})
									if (TempAddCRRes.errMsg != "collection.add:ok") {
										await transaction.rollback("消息处理创建消息失败");
										return;
									}
									return "OK"; //全部执行成功，返回OK
								})
							} catch (e) {
								errMsg = "申请失败:" + pmJSTools.GetStr(e);
								result = []
								return {
									errMsg,
									result
								}
							}
							if (TempResult == "OK") {
								errMsg = "OK";
								result = []
								return {
									errMsg,
									result
								}
							} else {
								errMsg = pmJSTools.GetStr(TempResult);;
								result = []
								return {
									errMsg,
									result
								}
							}

						} else {
							//任务关注操作情形（不需考虑抖音操作，无此操作）
							TempDBExeData = {
								DBConditions: [],
								DBExecutions: [{
									exeType: "add",
									collectionName: "ZCTMyPMCOIList",
									dataList: [{
										_openid: wxContext.OPENID,
										ZCTPMCOI_id: funcPra._id,
										ZCTTaskState: TempZCTTaskState,
										ZCTTaskHistory: [],
										ZCTCreateTime: new Date(),
										ZCTChangeTime: new Date(),
										ZCTPMCOIPlanDeliDate: TempThisCOIData
											.ZCTPlanDeliDateShort
									}, ]
								}],
								CloudOpenID: wxContext.OPENID
							}
						}


					} else {
						SelectMyCOIData.push(TempMyCOIRes.data);
						if (funcPra.PMOption == "PMCOIApply" && (SelectMyCOIData[0][0].ZCTTaskState !=
								"WATCH" && SelectMyCOIData[0][0].ZCTTaskState != "REFUSED")) {
							errMsg = "此任务已申请";
							return {
								errMsg,
								result
							}
						}
						if (funcPra.PMOption == "PMCOIWatch") {
							errMsg = "此任务已关注";
							return {
								errMsg,
								result
							}
						}
						if (funcPra.PMOption == "PMCOIApply" && (SelectMyCOIData[0][0].ZCTTaskState ==
								"WATCH" || SelectMyCOIData[0][0].ZCTTaskState == "REFUSED")) {
							//任务申请授权操作更新
							let TempUResult;
							//开启事务
							try {
								TempUResult = await db.runTransaction(async transaction => {
									//添加申请记录
									var dataList = {};
									//抖音小程序添加
									if (!pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
										dataList = {
											ZCTTaskID: funcPra._id,
											ZCTApplicationType: "Authorize",
											ZCTApplicationDate: new Date(),
											ZCTApplicationNum: 0,
											WXOpenID: "",
											ZCTHandleDate: "",
											ZCTHandleResult: "",
											ZCTHandleDescribe: "",
											PMUserID: OptionUserID,
											PMCOIUserID: TempThisCOIData.PMCreater
										}
									} else {
										//微信小程序添加
										dataList = {
											ZCTTaskID: funcPra._id,
											ZCTApplicationType: "Authorize",
											ZCTApplicationDate: new Date(),
											ZCTApplicationNum: 0,
											WXOpenID: wxContext.OPENID,
											ZCTHandleDate: "",
											ZCTHandleResult: "",
											ZCTHandleDescribe: "",
											PMUserID: "",
											PMCOIUserID: TempThisCOIData.PMCreater
										}
									}
									var TempRecordID = "";
									const TempRecordAddURes = await transaction.collection(
										"ZCTApplicationRecord").add({
										data: dataList
									})
									if (TempRecordAddURes.errMsg == "collection.add:ok") {
										TempRecordID = TempRecordAddURes._id;
									} else {
										await transaction.rollback("创建申请记录失败"); //回滚事务
										return;
									}
									//查询所申请的COI任务状态
									var TempUCOIState = "";
									const TempCOIResU = await transaction.collection(
										'PMPCustomerOrderItem').where({
										_id: _.eq(funcPra._id)
									}).get();
									if (!TempCOIResU.data) {
										await transaction.rollback("获取交付任务失败"); //回滚事务
										return;
									} else {
										if (TempCOIResU.data.length > 0) {
											TempUCOIState = TempCOIResU.data[0].PMOrderState;
										} else {
											await transaction.rollback("获取交付任务失败"); //回滚事务
											return;
										}
									}
									if (TempUCOIState != "PUBLISH" && TempUCOIState !=
										"WaitAuthorize") {
										await transaction.rollback("交付任务当前不满足申请条件"); //回滚事务
										return;
									}
									//修改我的任务状态
									const TempMyCOIURes = await transaction.collection(
											"ZCTMyPMCOIList").doc(SelectMyCOIData[0][0]._id)
										.update({
											data: {
												ZCTTaskState: "APPLY",
												ZCTChangeTime: new Date()
											}
										})
									if (TempMyCOIURes.stats.updated <= 0) {
										await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
										return;
									}
									//修改COI状态及申请数
									var TempUpdateCOIURes = await transaction.collection(
										"PMPCustomerOrderItem").doc(funcPra._id).update({
										data: {
											ZCTApplicationCount: _.inc(1),
											PMOrderState: "WaitAuthorize",
											PMChangeTime: new Date()
										}
									})
									if (TempUpdateCOIURes.stats.updated <= 0) {
										await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
										return;
									}
									//申请消息产生
									var TempChatGroupId = "";
									const TempChatGroupResS = await transaction.collection(
										'ZCTChatGroup').where({
										ZCTCommunicatorsUserId: _.eq(TempZCTUserData._id),
										ZCTSponsorUserId: _.eq(TempThisCOIUserData._id)
									}).get();
									if (!TempChatGroupResS.data) {
										await transaction.rollback("消息处理获取聊天组失败");
										return;
									} else {
										if (TempChatGroupResS.data.length > 0) {
											TempChatGroupId = TempChatGroupResS.data[0]._id;
											var TempCGUpdateData = {
												ZCTtextContent: WDOptionUserName + "申请了" +
													TempThisCOIData.PMInnerProductName +
													"任务,请处理",
												ZCTNewestTime: new Date(),
												ZCTNewestTimeTS: Date.now()
											}
											if (TempChatGroupResS.data[0].ZCTSponsorState == "NO") {
												TempCGUpdateData.ZCTSponsorUnreadNum = _.inc(1);
											}
											var TempUpdateChatGroupRes = await transaction
												.collection("ZCTChatGroup").doc(TempChatGroupId)
												.update({
													data: TempCGUpdateData
												})
											if (TempUpdateChatGroupRes.stats.updated <= 0) {
												await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
												return;
											}
										} else {
											//创建聊天组
											var ChatGroupdataList = {
												ZCTCommunicatorsUserId: TempZCTUserData._id,
												ZCTSponsorUserId: TempThisCOIUserData._id,
												ZCTtextContent: WDOptionUserName + "申请了" +
													TempThisCOIData.PMInnerProductName +
													"任务,请处理",
												ZCTNewestTime: new Date(),
												ZCTNewestTimeTS: Date.now(),
												ZCTCommunicatorUnreadNum: 0,
												ZCTSponsorUnreadNum: 1,
												ZCTCommunicatorsState: "NO",
												ZCTSponsorState: "NO"
											}
											const TempAddChatGroupRes = await transaction
												.collection("ZCTChatGroup").add({
													data: ChatGroupdataList
												})
											if (TempAddChatGroupRes.errMsg == "collection.add:ok") {
												TempChatGroupId = TempAddChatGroupRes._id;
											} else {
												await transaction.rollback("消息处理创建聊天组失败");
												return;
											}
										}
									}
									//添加ZCTCommunicateRecord
									var TempCRdataList = {
										ZCTAvatar: TempZCTUserData.ZCTUserPhoto,
										ZCTGroupId: TempChatGroupId,
										ZCTMsgType: "notice",
										ZCTNickName: TempZCTUserData.PMUserName,
										ZCTUserid: TempZCTUserData._id,
										ZCTSendTime: new Date(),
										ZCTSendTimeTS: Date.now(),
										ZCTMESMsg: {
											ZCTMESTheme: "Approval",
											ZCTMESMSG: WDOptionUserName + "申请了" +
												TempThisCOIData.PMInnerProductName + "任务,请处理",
											ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage",
											ZCTMESTime: new Date(),
											ZCTMESState: "待处理",
											ZCTMESTaskID: TempRecordID,
											ZCTMESCreater: WDOptionUserID,
											ZCTJumpType: "ApplyRecord",
											ZCTJumpParameters: {
												dataType: "Authorize",
												ZCTTaskID: TempThisCOIData._id,
												ZCTUserID: TempThisCOIUserData._id,
												ZCTIsNewsJump: true,
												PMInnerProductName: TempThisCOIData
													.PMInnerProductName,
												PMOrderNum: TempThisCOIData.PMOrderNum,
												PMOrderUnit: TempThisCOIData.PMOrderUnit,
												ZCTCOICreator: TempThisCOIData.PMCreater
											}
										}
									}
									const TempAddCRRes = await transaction.collection(
										"ZCTCommunicateRecord").add({
										data: TempCRdataList
									})
									if (TempAddCRRes.errMsg != "collection.add:ok") {
										await transaction.rollback("消息处理创建消息失败");
										return;
									}
									return "OK"; //全部执行成功，返回OK
								})
							} catch (e) {
								errMsg = "申请失败:" + pmJSTools.GetStr(e);
								result = []
								return {
									errMsg,
									result
								}
							}
							if (TempUResult == "OK") {
								errMsg = "OK";
								result = []
								return {
									errMsg,
									result
								}
							} else {
								errMsg = pmJSTools.GetStr(TempUResult);;
								result = []
								return {
									errMsg,
									result
								}
							}
						}
					}
					var serRes = await cloud.callFunction({
						name: 'setCollectionsToServer',
						data: TempDBExeData,
					})
					var TempData = pmJSTools.getResFromReturn(serRes)
					errMsg = TempData.errMsg
					result = TempData.result
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
			break;
		}
		////////////////////////////////////////////////////////
		//功能：我执行的任务页操作
		////////////////////////////////////////////////////////
		case "PMOptionMyTaskByContion": {
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				errMsg = "PMOptionMyTaskByContion:OPENID为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMOptionMyTaskByContion:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMOption)) {
				errMsg = "PMOptionMyTaskByContion:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			var DBExeData;
			switch (funcPra.PMOption) {
				//完工申请
				case "PMCOIDelivry": {
					if (pmJSTools.IsNullOrEmpty(funcPra._id)) {
						errMsg = "PMOptionMyTaskByContion:参数id为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					//完工申请的交付任务查询
					let TempCurrentCOIRes = await db.collection('PMPCustomerOrderItem').where({
						_id: _.eq(funcPra.COIid)
					}).get();
					if (!TempCurrentCOIRes.data) {
						errMsg = "未找到此任务信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempCurrentCOIRes.data.length <= 0) {
							errMsg = "未找到此任务信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempThisCOIData = TempCurrentCOIRes.data[0];
					//任务创建认人信息获取
					let TempCurrentCOIUserRes = await db.collection('PMUser').where(_.or([{
							_openid: _.eq(TempThisCOIData._openid)
						},
						{
							PMUserID: _.eq(TempThisCOIData.PMCreater)
						}
					])).get();
					if (!TempCurrentCOIUserRes.data) {
						errMsg = "未找到此任务发布人信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempCurrentCOIUserRes.data.length <= 0) {
							errMsg = "未找到此任务发布人信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempThisCOIUserData = TempCurrentCOIUserRes.data[0];
					//制程通信息获取
					let TempZCTUserRes = await db.collection('PMUser').where({
						PMUserID: _.eq("ZCTAssistant")
					}).get();
					if (!TempZCTUserRes.data) {
						errMsg = "未找到任务推送人信息";
						return {
							errMsg,
							result
						}
					} else {
						if (TempZCTUserRes.data.length <= 0) {
							errMsg = "未找到任务推送人信息";
							return {
								errMsg,
								result
							}
						}
					}
					var TempZCTUserData = TempZCTUserRes.data[0];
					//任务申请人信息获取
					let TempApplyUserRes = await db.collection('PMUser').where({
						_openid: _.eq(wxContext.OPENID)
					}).get();
					if (!TempApplyUserRes.data) {
						errMsg = "未找到您的信息，可进行工友登记后重试";
						return {
							errMsg,
							result
						}
					} else {
						if (TempApplyUserRes.data.length <= 0) {
							errMsg = "未找到您的信息，可进行工友登记后重试";
							return {
								errMsg,
								result
							}
						}
					}
					var TempApplyUserData = TempApplyUserRes.data[0];
					let TempUResult;
					//开启事务
					try {
						TempUResult = await db.runTransaction(async transaction => {
							//添加申请记录
							var dataList = {
								ZCTTaskID: funcPra.COIid,
								ZCTApplicationType: "Finished",
								ZCTApplicationDate: new Date(),
								ZCTApplicationNum: funcPra.COINum,
								WXOpenID: wxContext.OPENID,
								ZCTHandleDate: "",
								ZCTHandleResult: "",
								ZCTHandleDescribe: "",
							}
							var TempRecordID = "";
							const TempRecordAddRes = await transaction.collection(
								"ZCTApplicationRecord").add({
								data: dataList
							})
							if (TempRecordAddRes.errMsg == "collection.add:ok") {
								TempRecordID = TempRecordAddRes._id;
							} else {
								await transaction.rollback("创建完工申请记录失败"); //回滚事务
								return;
							}
							//修改我的任务状态
							const TempMyCOIURes = await transaction.collection("ZCTMyPMCOIList")
								.doc(funcPra._id).update({
									data: {
										ZCTTaskState: "DELIVRY",
										ZCTChangeTime: new Date()
									}
								})
							if (TempMyCOIURes.stats.updated <= 0) {
								await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
								return;
							}
							//修改COI状态
							var TempUpdateCOIURes = await transaction.collection(
								"PMPCustomerOrderItem").doc(funcPra.COIid).update({
								data: {
									PMOrderState: "UNACCEPTED",
									PMChangeTime: new Date()
								}
							})
							if (TempUpdateCOIURes.stats.updated <= 0) {
								await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
								return;
							}
							//申请消息产生
							var TempChatGroupId = "";
							const TempChatGroupResS = await transaction.collection('ZCTChatGroup')
								.where({
									ZCTCommunicatorsUserId: _.eq(TempZCTUserData._id),
									ZCTSponsorUserId: _.eq(TempThisCOIUserData._id)
								}).get();
							if (!TempChatGroupResS.data) {
								await transaction.rollback("消息处理获取聊天组失败");
								return;
							} else {
								if (TempChatGroupResS.data.length > 0) {
									TempChatGroupId = TempChatGroupResS.data[0]._id;
									var TempCGUpdateData = {
										ZCTtextContent: TempApplyUserData.PMUserName + "对" +
											TempThisCOIData.PMInnerProductName +
											"任务进行了完工申请,请处理",
										ZCTNewestTime: new Date(),
										ZCTNewestTimeTS: Date.now()
									}
									if (TempChatGroupResS.data[0].ZCTSponsorState == "NO") {
										TempCGUpdateData.ZCTSponsorUnreadNum = _.inc(1);
									}
									var TempUpdateChatGroupRes = await transaction.collection(
										"ZCTChatGroup").doc(TempChatGroupId).update({
										data: TempCGUpdateData
									})
									if (TempUpdateChatGroupRes.stats.updated <= 0) {
										await transaction.rollback("更新影响行为0，可能是权限原因造成的。");
										return;
									}
								} else {
									//创建聊天组
									var ChatGroupdataList = {
										ZCTCommunicatorsUserId: TempZCTUserData._id,
										ZCTSponsorUserId: TempThisCOIUserData._id,
										ZCTtextContent: TempApplyUserData.PMUserName + "对" +
											TempThisCOIData.PMInnerProductName +
											"任务进行了完工申请,请处理",
										ZCTNewestTime: new Date(),
										ZCTNewestTimeTS: Date.now(),
										ZCTCommunicatorUnreadNum: 0,
										ZCTSponsorUnreadNum: 1,
										ZCTCommunicatorsState: "NO",
										ZCTSponsorState: "NO"
									}
									const TempAddChatGroupRes = await transaction.collection(
										"ZCTChatGroup").add({
										data: ChatGroupdataList
									})
									if (TempAddChatGroupRes.errMsg == "collection.add:ok") {
										TempChatGroupId = TempAddChatGroupRes._id;
									} else {
										await transaction.rollback("消息处理创建聊天组失败");
										return;
									}
								}
							}
							//添加ZCTCommunicateRecord
							var TempCRdataList = {
								ZCTAvatar: TempZCTUserData.ZCTUserPhoto,
								ZCTGroupId: TempChatGroupId,
								ZCTMsgType: "notice",
								ZCTNickName: TempZCTUserData.PMUserName,
								ZCTUserid: TempZCTUserData._id,
								ZCTSendTime: new Date(),
								ZCTSendTimeTS: Date.now(),
								ZCTMESMsg: {
									ZCTMESTheme: "Approval",
									ZCTMESMSG: TempApplyUserData.PMUserName + "对" +
										TempThisCOIData.PMInnerProductName + "任务进行了完工申请,请处理",
									ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage",
									ZCTMESTime: new Date(),
									ZCTMESState: "待处理",
									ZCTMESTaskID: TempRecordID,
									ZCTMESCreater: TempApplyUserData._id,
									ZCTJumpType: "ApplyRecord",
									ZCTJumpParameters: {
										dataType: "Finished",
										ZCTTaskID: TempThisCOIData._id,
										ZCTUserID: TempThisCOIUserData._id,
										ZCTIsNewsJump: true,
										PMInnerProductName: TempThisCOIData.PMInnerProductName,
										PMOrderNum: TempThisCOIData.PMOrderNum,
										PMOrderUnit: TempThisCOIData.PMOrderUnit,
										ZCTCOICreator: TempThisCOIData.PMCreater
									}
								}
							}
							const TempAddCRRes = await transaction.collection(
								"ZCTCommunicateRecord").add({
								data: TempCRdataList
							})
							if (TempAddCRRes.errMsg != "collection.add:ok") {
								await transaction.rollback("消息处理创建消息失败");
								return;
							}

							return "OK"; //全部执行成功，返回OK
						})
					} catch (e) {
						errMsg = pmJSTools.GetStr(e);
						result = []
						return {
							errMsg,
							result
						}
					}
					if (TempUResult == "OK") {
						errMsg = "OK";
						result = []
						return {
							errMsg,
							result
						}
					} else {
						errMsg = pmJSTools.GetStr(TempUResult);;
						result = []
						return {
							errMsg,
							result
						}
					}
				}
				break;
			default: {
				var ResData = {
					errMsg: "PMOptionMyTaskByContion功能类型字段为空",
					result: []
				}
				return ResData;
			}
			break;
			}

		}
		////////////////////////////////////////////////////////
		//功能：申请记录页操作
		////////////////////////////////////////////////////////
		case "OperateApplicationRecordList": {
			switch (funcPra.PMOptionType) {
				case "DYSelectApplicationRecordList":
				case "DYApprovalApplicationRecord":
				case "DYRejectApplicationRecord":
					break;

				default:
					if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
						errMsg = "OperateApplicationRecordList:OPENID为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					if (pmJSTools.IsNullOrEmpty(funcPra)) {
						errMsg = "OperateApplicationRecordList:参数为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					if (pmJSTools.IsNullOrEmpty(funcPra.PMOptionType)) {
						errMsg = "OperateApplicationRecordList:参数为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					break;
			}
			var DBConditions;
			var DBExeData;
			switch (funcPra.PMOptionType) {
				case "SelectApplicationRecordList": { //查询申请记录    
					if (pmJSTools.IsNullOrEmpty(funcPra.ApplicationType)) {
						errMsg = "OperateApplicationRecordList:参数为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					if (pmJSTools.IsNullOrEmpty(funcPra.ZCTTaskID)) {
						errMsg = "OperateApplicationRecordList:参数为空，无法执行"
						result = []
						return {
							errMsg,
							result
						}
					}
					//判断操作人是任务发布人还是任务申请人
					var TempOptionUserType = "creator";
					var TempOptionUserData;
					if (!pmJSTools.IsNullOrEmpty(funcPra.ZCTIsNewsJump)) {
						if (funcPra.ZCTIsNewsJump == true && !pmJSTools.IsNullOrEmpty(funcPra.ZCTUserID)) {
							//完工申请的交付任务查询
							let TempCurrentCOIRes = await db.collection('PMPCustomerOrderItem').where({
								_id: _.eq(funcPra.ZCTTaskID)
							}).get();
							if (!TempCurrentCOIRes.data) {
								errMsg = "未找到相关任务信息";
								return {
									errMsg,
									result
								}
							} else {
								if (TempCurrentCOIRes.data.length <= 0) {
									errMsg = "未找到相关任务信息";
									return {
										errMsg,
										result
									}
								}
							}
							var TempThisCOIData = TempCurrentCOIRes.data[0];
							//操作人信息获取
							let TempOptionUserRes = await db.collection('PMUser').where({
								_id: _.eq(funcPra.ZCTUserID)
							}).get();


							if (!TempOptionUserRes.data) {
								errMsg = "未找到此任务发布人信息";
								return {
									errMsg,
									result
								}
							} else {
								if (TempOptionUserRes.data.length <= 0) {
									errMsg = "未找到此任务发布人信息";
									return {
										errMsg,
										result
									}
								}
							}
							TempOptionUserData = TempOptionUserRes.data[0];
							//判断是否是任务发布人
							if ((pmJSTools.IsNullOrEmpty(TempOptionUserData.WXOpenID) && TempOptionUserData
									._openid == TempThisCOIData._openid) || TempOptionUserData.PMUserID ==
								TempThisCOIData.PMCreater) {
								TempOptionUserType = "creator";
							} else {
								TempOptionUserType = "applicant";
							}
						}
					}

					var tempSkipAndLimit = [0, 20]
					if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) {
						tempSkipAndLimit = funcPra.skipAndLimit
					}
					if (tempSkipAndLimit[0] >= 0 && tempSkipAndLimit[1] <= 1000) {
						//查询授权申请记录
						if (funcPra.ApplicationType == "Authorize") {
							var DBConditions = [{
								collectionsName: "ZCTApplicationRecord",
								getFields: {},
								whereConditions: {
									ZCTTaskID: _.eq(funcPra.ZCTTaskID),
									ZCTApplicationType: _.eq(funcPra.ApplicationType),
								},
								skipAndLimit: tempSkipAndLimit,
								orderByConditions: [
									["ZCTApplicationDate", "desc"],
								]
							}]
							if (TempOptionUserType == "applicant") {
								DBConditions = [{
									collectionsName: "ZCTApplicationRecord",
									getFields: {},
									whereConditions: {
										ZCTTaskID: _.eq(funcPra.ZCTTaskID),
										ZCTApplicationType: _.eq(funcPra.ApplicationType),
										WXOpenID: _.eq(TempOptionUserData.WXOpenID).or(_.eq("")),
										PMUserID: _.eq(TempOptionUserData._id).or(_.eq(""))
									},
									skipAndLimit: tempSkipAndLimit,
									orderByConditions: [
										["ZCTApplicationDate", "desc"],
									]
								}]
							}
							try {
								var resData = await cloud.callFunction //await调用远程云函数
								({
									name: 'getCollectionsFromServer',
									data: {
										DBConditions,
									},
								})

								var TempData = pmJSTools.getResFromReturn(
									resData) //getResFromReturn整合和简化sertRes供前端使用。
								serRes.errMsg = TempData.errMsg
								serRes.result = TempData.result[0]

								var TempAuthorizeDataList = serRes.result;
								var TempConditionsUserIDList = [];
								var TempConditionsUserOPENIDList = [];

								if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
									//拼装条件
									for (TempKey in TempAuthorizeDataList) {
										if (!pmJSTools.IsNullOrEmpty(TempAuthorizeDataList[TempKey].WXOpenID)) {
											TempConditionsUserOPENIDList.push(TempAuthorizeDataList[TempKey]
												.WXOpenID);
										} else {
											TempConditionsUserIDList.push(TempAuthorizeDataList[TempKey]
												.PMUserID);
										}
									}
								}
								//判断条件是否满足。满足则进行二次查询（申请人信息）
								if (!pmJSTools.IsNullOrEmpty(TempConditionsUserIDList) || !pmJSTools
									.IsNullOrEmpty(TempConditionsUserOPENIDList)) {
									let TempUserRes = await db.collection('PMUser').where(_.or([{
											_id: _.in(TempConditionsUserIDList)
										},
										{
											WXOpenID: _.in(TempConditionsUserOPENIDList)
										}
									])).get();
									var TempUserDataList = [];
									if (!pmJSTools.IsNullOrEmpty(TempUserRes.data.length) && TempUserRes.data
										.length > 0) {
										TempUserDataList = TempUserRes.data;
									}
									for (var TempKey in TempAuthorizeDataList) {
										TempAuthorizeDataList[TempKey].UserList = [];
										//微信小程序申请
										if (!pmJSTools.IsNullOrEmpty(TempAuthorizeDataList[TempKey].WXOpenID)) {
											for (var TempKeyW in TempUserDataList) {
												if (TempUserDataList[TempKeyW].WXOpenID ==
													TempAuthorizeDataList[TempKey].WXOpenID) {
													TempAuthorizeDataList[TempKey].UserList.push(
														TempUserDataList[TempKeyW]);
												}
											}
										} else {
											//抖音申请
											for (var TempKeyD in TempUserDataList) {
												if (TempUserDataList[TempKeyD]._id == TempAuthorizeDataList[
														TempKey].PMUserID) {
													if (pmJSTools.IsNullOrEmpty(TempUserDataList[TempKeyD]
															.ZCTUserPhoto)) {
														TempUserDataList[TempKeyD].ZCTUserPhoto =
															"cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/images/PMUserDou.jpg";
													}
													TempAuthorizeDataList[TempKey].UserList.push(
														TempUserDataList[TempKeyD]);
												}
											}
										}
									}
								}
								serRes.result = TempAuthorizeDataList;
								return serRes;
							} catch (e) {
								errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
								result = []
								return {
									errMsg,
									result
								}
							}
						}
						//查询完工申请记录
						else {
							let tempRes;
							if (TempOptionUserType == "applicant") {
								tempRes = await db.collection("ZCTApplicationRecord").aggregate() //获取集合名
									.lookup({
										from: 'PMUser',
										localField: 'WXOpenID',
										foreignField: 'WXOpenID',
										as: 'UserList',
									})
									.match({ //查询条件
										ZCTTaskID: _.eq(funcPra.ZCTTaskID),
										ZCTApplicationType: _.eq(funcPra.ApplicationType), //申请类型
										WXOpenID: _.eq(TempOptionUserData.WXOpenID)
									})
									.skip(tempSkipAndLimit[0]) //从SKip查询起，用于分页
									.limit(tempSkipAndLimit[1]) //limit长度限制
									.end();
							} else {
								tempRes = await db.collection("ZCTApplicationRecord").aggregate() //获取集合名
									.lookup({
										from: 'PMUser',
										localField: 'WXOpenID',
										foreignField: 'WXOpenID',
										as: 'UserList',
									})
									.match({ //查询条件
										ZCTTaskID: _.eq(funcPra.ZCTTaskID),
										ZCTApplicationType: _.eq(funcPra.ApplicationType), //申请类型
										//ZCTHandleResult: _.eq(""),
									})
									.skip(tempSkipAndLimit[0]) //从SKip查询起，用于分页
									.limit(tempSkipAndLimit[1]) //limit长度限制
									//.orderBy("ZCTApplicationDate", "desc") //排序条件1    【无法使用】
									.end();
							}
							var TempApplicationRes = {
								errMsg: tempRes.errMsg,
								result: tempRes.list
							}
							var TempData = pmJSTools.getResFromReturn(
								TempApplicationRes) //getResFromReturn整合和简化sertRes供前端使用。
							serRes.errMsg = TempData.errMsg
							serRes.result = TempData.result
							return serRes;
						}
					} else {
						var TempData = pmJSTools.getResFromReturn(
							TempApplicationRes) //getResFromReturn整合和简化sertRes供前端使用。
						serRes.errMsg = "查询函数的起始或长度限制格式错误：起始于： " + tempSkipAndLimit[0] + ", 限制：" +
							tempSkipAndLimit[1]
						serRes.result = TempData.result
						return serRes;
					}
				}
				case "ApprovalApplicationRecord": { //批准申请记录
					funcPra.WxContext0PENID = wxContext.OPENID;
					return ApprovalApplicationRecord(funcPra, _);
				}
				case "RejectApplicationRecord": { //驳回申请记录
					funcPra.WxContext0PENID = wxContext.OPENID;
					return RejectApplicationRecord(funcPra, _);
				}
				case "DYRejectApplicationRecord": { //驳回申请记录
					funcPra.WxContext0PENID = funcPra.OptionWXOpenID;
					return DYRejectApplicationRecord(funcPra, _);
				}


				case "DYSelectApplicationRecordList": { //查询申请记录   
					var tempSkipAndLimit = [0, 20]
					if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) {
						tempSkipAndLimit = funcPra.skipAndLimit
					}
					var TempPMOptionUserID = funcPra.PMOptionUserID
					if (tempSkipAndLimit[0] >= 0 && tempSkipAndLimit[1] <= 1000) {
						var DBConditions = [{
							collectionsName: "ZCTApplicationRecord",
							getFields: {},
							whereConditions: {
								PMCOIUserID: _.eq(TempPMOptionUserID),
								ZCTHandleResult: _.eq("")
							},
							skipAndLimit: tempSkipAndLimit,
							orderByConditions: [
								["ZCTApplicationDate", "desc"],
							]
						}]
						try {
							var resData = await cloud.callFunction //await调用远程云函数
							({
								name: 'getCollectionsFromServer',
								data: {
									DBConditions,
								},
							})

							var TempData = pmJSTools.getResFromReturn(
								resData) //getResFromReturn整合和简化sertRes供前端使用。
							serRes.errMsg = TempData.errMsg
							serRes.result = TempData.result[0]
							var TempAuthorizeDataList = [];
							var TempConditionsUserIDList = [];
							var TempConditionsUserOPENIDList = [];
							var TempTaskList = [];
							if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
								//拼装条件
								TempAuthorizeDataList = serRes.result
								for (TempKey in TempAuthorizeDataList) {
									if (!pmJSTools.IsNullOrEmpty(TempAuthorizeDataList[TempKey].WXOpenID)) {
										TempConditionsUserOPENIDList.push(TempAuthorizeDataList[TempKey]
											.WXOpenID);
										TempTaskList.push(TempAuthorizeDataList[TempKey].ZCTTaskID);
									} else {
										TempConditionsUserIDList.push(TempAuthorizeDataList[TempKey].PMUserID);
										TempTaskList.push(TempAuthorizeDataList[TempKey].ZCTTaskID);
									}
								}

								//判断条件是否满足。满足则进行二次查询（申请人信息）
								if (!pmJSTools.IsNullOrEmpty(TempConditionsUserIDList) || !pmJSTools
									.IsNullOrEmpty(TempConditionsUserOPENIDList)) {
									let TempUserRes = await db.collection('PMUser').where(_.or([{
											_id: _.in(TempConditionsUserIDList)
										},
										{
											WXOpenID: _.in(TempConditionsUserOPENIDList)
										}
									])).get();
									var TempUserDataList = [];
									if (!pmJSTools.IsNullOrEmpty(TempUserRes.data.length) && TempUserRes.data
										.length > 0) {
										TempUserDataList = TempUserRes.data;
									}

									let TempTaskRes = await db.collection('PMPCustomerOrderItem').where({
										_id: _.in(TempTaskList)
									}).get();
									var TempDYCOITask = [];
									if (!pmJSTools.IsNullOrEmpty(TempTaskRes.data.length) && TempTaskRes.data
										.length > 0) {
										TempDYCOITask = TempTaskRes.data;
									}
									for (var TempKey in TempAuthorizeDataList) {
										TempAuthorizeDataList[TempKey].UserList = [];
										TempAuthorizeDataList[TempKey].ZCTTask = [];

										for (var TempTaskKey in TempDYCOITask) {
											if (TempDYCOITask[TempTaskKey]._id == TempAuthorizeDataList[TempKey]
												.ZCTTaskID) {
												TempAuthorizeDataList[TempKey].ZCTTask.push(TempDYCOITask[
													TempTaskKey]);
												break;
											}
										}

										//微信小程序申请
										if (!pmJSTools.IsNullOrEmpty(TempAuthorizeDataList[TempKey].WXOpenID)) {
											for (var TempKeyW in TempUserDataList) {
												if (TempUserDataList[TempKeyW].WXOpenID ==
													TempAuthorizeDataList[TempKey].WXOpenID) {
													TempAuthorizeDataList[TempKey].UserList.push(
														TempUserDataList[TempKeyW]);
												}
											}
										} else {
											//抖音申请
											for (var TempKeyD in TempUserDataList) {
												if (TempUserDataList[TempKeyD]._id == TempAuthorizeDataList[
														TempKey].PMUserID) {
													if (pmJSTools.IsNullOrEmpty(TempUserDataList[TempKeyD]
															.ZCTUserPhoto)) {
														TempUserDataList[TempKeyD].ZCTUserPhoto =
															"cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/images/PMUserDou.jpg";
													}
													TempAuthorizeDataList[TempKey].UserList.push(
														TempUserDataList[TempKeyD]);
												}
											}
										}

									}
								}

							}

							serRes.result = TempAuthorizeDataList;
							return serRes;
						} catch (e) {
							errMsg = pmJSTools.GetStr(e) //getResFromReturn整合和简化sertRes供前端使用。
							result = []
							return {
								errMsg,
								result
							}
						}

					} else {
						var TempData = pmJSTools.getResFromReturn(
							TempApplicationRes) //getResFromReturn整合和简化sertRes供前端使用。
						serRes.errMsg = "查询函数的起始或长度限制格式错误：起始于： " + tempSkipAndLimit[0] + ", 限制：" +
							tempSkipAndLimit[1]
						serRes.result = TempData.result
						return serRes;
					}
				}

				case "DYApprovalApplicationRecord": { //批准申请记录
					funcPra.WxContext0PENID = funcPra.OptionWXOpenID;
					return DYApprovalApplicationRecord(funcPra, _);
				}
				default:
					var ResData = {
						errMsg: "OperateApplicationRecordList操作类型字段为空",
						result: []
					}
					return ResData;
			}
		}






		////////////////////////////////////////////////////////
		//功能：任务海报页操作
		////////////////////////////////////////////////////////
		case "OperateByTaskSlider": {
			var TempUserInfo = false;
			if (pmJSTools.IsNullOrEmpty(funcPra)) {
				errMsg = "PMGetCOIByContion:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(funcPra.PMOption)) {
				errMsg = "PMGetCOIByState:参数为空，无法执行"
				result = []
				return {
					errMsg,
					result
				}
			}
			if (pmJSTools.IsNullOrEmpty(wxContext.OPENID) && pmJSTools.IsNullOrEmpty(funcPra.DouPhone)) {
				TempUserInfo = false;
				// errMsg = "PMGetCOIByContion:操作人员信息为空，无法执行"
				// result = []
				// return {
				//   errMsg,
				//   result
				// }
			}
			//查询UserID
			var OptionUserID = "";
			let TempUserRes;
			if (!pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
				//微信小程序进入
				TempUserRes = await db.collection('PMUser').where({
					WXOpenID: _.eq(wxContext.OPENID)
				}).get();
			} else {
				//抖音小程序进入
				TempUserRes = await db.collection('PMUser').where({
					PMPhoneNB: _.eq(funcPra.DouPhone)
				}).get();
			}
			if (TempUserRes.data.length == 0) {
				TempUserInfo = false;
				// if(!pmJSTools.IsNullOrEmpty(wxContext.OPENID)){
				//   errMsg = "PMGetCOIByContion:获取账户信息失败，无法执行"
				//   result = []
				//   return {
				//     errMsg,
				//     result
				//   }
				// }
				// //抖音小程序根据手机号未找到账号信息走注册
				// else{
				//   if (pmJSTools.IsNullOrEmpty(funcPra.LoginUserName)) {
				//     errMsg = "PMGetCOIByContion:操作人员信息为空，无法执行"
				//     result = []
				//     return {
				//       errMsg,
				//       result
				//     }
				//   }
				//   else{
				//     const CloudDB = uniCloud.database({
				//       // 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
				//       throwOnNotFound: false,
				//       env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
				//     })
				//     let TempResult;
				//     try {
				//       TempResult = await CloudDB.runTransaction(async transaction => {
				//         var dataList = {
				//           PMUserID: funcPra.DouPhone,
				//             PMUserName: funcPra.LoginUserName,
				//             PMPhoneNB: funcPra.DouPhone,
				//             PMIsValid: "Yes",
				//             ZCTLocation:{
				//               type: 'Point',
				//               coordinates: [funcPra.longitude, funcPra.latitude]
				//             },
				//             ZCTNewLocation: {
				//             type: 'Point',
				//             coordinates: [funcPra.longitude, funcPra.latitude]
				//            },
				//             ZCTNewlatitude: funcPra.latitude,
				//             ZCTNewlongitude: funcPra.longitude,
				//             ZCTlatitude: funcPra.latitude,
				//             ZCTlongitude: funcPra.longitude,
				//             ZCTReleaseNum:0,
				//             ZCTReleaseAcceNum:0,
				//             ZCTReceiveOrderNum:0,
				//             ZCTDeliveryAcceNum:0
				//         }
				//         const TempAddUserRes = await transaction.collection("PMUser").add({
				//           data: dataList
				//         })
				//         var TempAddUserId="";
				//         if (TempAddUserRes.errMsg == "collection.add:ok") {
				//           TempAddUserId = TempAddUserRes._id;
				//         } else {
				//           await transaction.rollback("账号信息获取失败");
				//           return;
				//         }
				//         return {
				//           errMsg: "OK",
				//           result: TempAddUserId,
				//         };
				//       });
				//     } catch (e) {
				//       errMsg ="账号信息获取失败:" + pmJSTools.GetStr(e);
				//       result = []
				//       return {
				//         errMsg,
				//         result
				//       }
				//     }
				//     if (TempResult.errMsg == "OK") {
				//       OptionUserID=TempResult.result;
				//       funcPra.DBlatitude=funcPra.latitude;
				//       funcPra.DBlongitude=funcPra.longitude;
				//       return FunOperateByTaskSlider(funcPra,_,wxContext.OPENID,OptionUserID,db);
				//     }
				//     else{
				//       errMsg ="账号信息获取失败";
				//       result = []
				//       return {
				//         errMsg,
				//         result
				//       }
				//     }
				//   }
				// }
				return FunOperateByTaskSlider(funcPra, _, wxContext.OPENID, OptionUserID, db);
			} else {
				TempUserInfo = true;
				if (!pmJSTools.IsNullOrEmpty(TempUserRes.data[0]._id)) {
					OptionUserID = TempUserRes.data[0]._id;
				}
				if (!pmJSTools.IsNullOrEmpty(TempUserRes.data[0].WXOpenID)) {
					wxContext.OPENID = TempUserRes.data[0].WXOpenID;
				}
				funcPra.DBlatitude = TempUserRes.data[0].ZCTNewlatitude;
				funcPra.DBlongitude = TempUserRes.data[0].ZCTNewlongitude;
				funcPra.TempCurrentUserID = TempUserRes.data[0].PMUserID;
				return FunOperateByTaskSlider(funcPra, _, wxContext.OPENID, OptionUserID, db);
			}
		}
		break;
		//////////////////////////////////////////////////////// 
		//功能：操作COI详情 
		//////////////////////////////////////////////////////// 
	case "OperatePMCOIDetails": {
		if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
			errMsg = "OperatePMCOIDetails:OPENID为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra)) {
			errMsg = "OperatePMCOIDetails:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra.PMOptionType)) {
			errMsg = "OperatePMCOIDetails:类型参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		switch (funcPra.PMOptionType) {
			case "GetPMCOIDetailsById": { //根据COIID获取COI详情信息 
				return GetPMCOIDetailsById(funcPra, _, wxContext.OPENID);
			}
		}
		break;
	}
	////////////////////////////////////////////////////////
	//功能：聊天室操作
	////////////////////////////////////////////////////////
	case "OperateCommunicate": {
		if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
			errMsg = "OperateCommunicate:OPENID为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra)) {
			errMsg = "OperateCommunicate:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra.PMOptionType)) {
			errMsg = "OperateCommunicate:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		switch (funcPra.PMOptionType) {
			case "GetGroupId": { //根据COIId获取聊天组Id
				return GetGroupId(funcPra, _, wxContext.OPENID);
			}
			case "GetGroupList": { //根据COIId获取聊天组Id
				return GetGroupList(funcPra, _, funcPra.ObjectOpenid);
			}
			case "SendMessage": { //发送消息
				return SendMessage(funcPra, _, wxContext.OPENID);
			}
			case "GetCommunicate": { //获取消息记录
				return GetCommunicate(funcPra, _, db);
			}
			case "GetGroupIdByUserID": { //根据对方Openid获取聊天组Id
				return GetGroupIdByUserID(funcPra, _, wxContext.OPENID);
			}
			case "LeavePage": { //离开页面时修改浏览状态
				return LeavePage(funcPra, _);
			}
			case "EnterPage": { //进入页面时修改浏览状态
				return EnterPage(funcPra, _);
			}
			case "DeleteGroup": { //删除聊天室及聊天内容
				return DeleteGroup(funcPra, _);
			}

		}
	}
	////////////////////////////////////////////////////////
	//功能：操作过程管控
	////////////////////////////////////////////////////////
	case "OperateProcessControl": {
		if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
			errMsg = "OperateProcessControl:OPENID为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra)) {
			errMsg = "OperateProcessControl:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra.PMOptionType)) {
			errMsg = "OperateProcessControl:操作参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		switch (funcPra.PMOptionType) {
			case "GetUserIdentity": { //根据COIId获取用户身份
				return GetUserIdentity(funcPra, _, wxContext.OPENID);
			}
			case "RAWPurCodeSubmit": { //领用物料条码提交
				return RAWPurCodeSubmit(funcPra, _, wxContext.OPENID);
			}
			case "GetRAWPurCodeList": { //获取领用物料条码记录
				return GetRAWPurCodeList(funcPra, _, wxContext.OPENID);
			}
			case "RemoveRAWPurCode": { //移除领用物料指定条码记录
				return RemoveRAWPurCode(funcPra, _, wxContext.OPENID);
			}
			case "DeleteRAWPur": { //删除领用物料
				return DeleteRAWPur(funcPra, _, wxContext.OPENID);
			}
			case "DeleteNoDistributeRAWPro": { //删除未分发的生产物料
				return DeleteNoDistributeRAWPro(funcPra, _, wxContext.OPENID);
			}
			case "RAWPurNumSubmit": { //领用物料数量提交
				return RAWPurNumSubmit(funcPra, _, wxContext.OPENID);
			}
			case "GetDistributeCOIID": { //获取任务移交分发出的COIID
				return GetDistributeCOIID(funcPra, _, wxContext.OPENID);
			}
		}
		break;
	}
	////////////////////////////////////////////////////////
	//功能：通过移交分发创建COI
	////////////////////////////////////////////////////////
	case "OperatePMCOIDistribute": {
		if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
			errMsg = "OperateProcessControl:OPENID为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra)) {
			errMsg = "OperateProcessControl:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra.PMOptionType)) {
			errMsg = "OperateProcessControl:操作参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		switch (funcPra.PMOptionType) {
			case "CreateCOI": { //移交分发创建COI
				return DistributeCreateCOI(funcPra, _, wxContext.OPENID);
			}
		}
		break;
	}

	////////////////////////////////////////////////////////
	//功能：删除生产物料
	////////////////////////////////////////////////////////
	case "DeleteRAWPRO": {
		if (pmJSTools.IsNullOrEmpty(wxContext.OPENID)) {
			errMsg = "DeleteRAWPRO:OPENID为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		if (pmJSTools.IsNullOrEmpty(funcPra)) {
			errMsg = "DeteleRAWPRO:参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		return DeleteRAWPRO(funcPra, _, wxContext.OPENID);
	}
	////////////////////////////////////////////////////////
	//功能：查询用户微信和抖音创建的任务
	////////////////////////////////////////////////////////
	case "getPMCOIListbyAllPMUser": {
		var tempSkipAndLimit = [0, 10]
		if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
		{
			tempSkipAndLimit = funcPra.skipAndLimit
		}
		//从数据库获取交付任务清单
		var TempCOIDataRes = await db.collection('PMPCustomerOrderItem')
			// .where(_.or([{
			// 		PMCreater: _.eq(funcPra.ZCTCreater),
			// 	}]).and([{
			// 		ZCTIsDeleted: _.neq("YES"),
			// 		ZCTAddedTo: _.nin(["myTaskList", "Market"]),
			// 		PMOrderState: _.in(funcPra.SelectState)
			// 	}])
			// )
			.skip(tempSkipAndLimit[0])
			.limit(tempSkipAndLimit[1])
			.orderBy("PMChangeTime", "desc")
			.get();
		// if (TempCOIDataRes.errMsg == undefined) {
		// 	TempCOIDataRes.errMsg = "OK";
		// }
		//return  TempCOIDataRes.errMsg; 
		// return {
		// 	msg: "OK",
		// 	data: TempCOIDataRes.data
		// }
		// var jsonData = JSON.stringify(TempCOIDataRes);// 转成JSON格式

		//console.log("aaaaaa值:"+jsonData+"bbbbbs");
		if (!pmJSTools.IsNullOrEmpty(funcPra.SelectState)) {
			var TempCOIDataRes = await db.collection('PMPCustomerOrderItem')
				.where({
					PMOrderState: _.in(funcPra.SelectState)
				})
				.skip(tempSkipAndLimit[0])
				.limit(tempSkipAndLimit[1])
				.orderBy("PMChangeTime", "desc")
				.get();
		}
		if (TempCOIDataRes.errMsg == undefined) {
			TempCOIDataRes.errMsg = "OK";
		}
		var TempCOIRes = {
			errMsg: TempCOIDataRes.errMsg,
			result: TempCOIDataRes.data
		};
		var TempData = pmJSTools.getResFromReturn(TempCOIRes) //getResFromReturn整合和简化sertRes供前端使用。

		console.log("返回值为：" + TempData);
		return TempData;
		// serRes.errMsg = TempCOIRes.errMsg;
		//    serRes.result.push(TempCOIRes.result);
		//    return serRes
	}
	default:
		var ResData = {
			errMsg: "",
			result: []
		}
		ResData.errMsg = "功能类型字段为空";
		ResData.result = []
		return ResData
		break;
	}
	return serRes
}

function GetPOData(TempData) {
	var TempexeType = "";
	if (!TempData._id.includes('PO')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "PMPProductionOrder",
				dataList: [{
					PMProductionOrderID: TempData.PMProductionOrderID, // 生产订单号 
					PMProductionOrderSeq: TempData.PMProductionOrderSeq,
					PMInnerCustomerOrderItemID: TempData.PMInnerCustomerOrderItemID, // 交付订单子订单号  
					PMProductID: TempData.PMProductID, // 内部产品号 
					PMMaterialID: TempData.PMMaterialID, // 物料编号  
					PMMaterialNumber: TempData.PMMaterialNumber, // 物料规格号 
					PMSpecification: TempData.PMSpecification, // 规格型号  
					PMMaterialName: TempData.PMMaterialName, //  物料名称  
					PMBOMID: TempData.PMBOMID, //  产品BOMID 
					PMOrderNum: TempData.PMOrderNum, //  订单数量  
					PMUnit: TempData.PMUnit, // 计量单位  
					PMPlanStockInTime: TempData.PMPlanStockInTime, //  计划入库日期  
					PMRemark: TempData.PMRemark, //  备注  
					PMState: TempData
						.PMState, //  状态  ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束
					ZCTlanStockInTimeShort: TempData.ZCTlanStockInTimeShort,
					ZCTFinishedNum: TempData.ZCTFinishedNum,
					ZCTFinishedRate: TempData.ZCTFinishedRate,
					ZCTProductURL: TempData.ZCTProductURL,
					PMCreateTime: new Date(), //  创建时间  
					PMCreater: TempData.PMCreater, // 创建人 
					PMChangeTime: new Date(), //  修改时间  
					PMChanger: TempData.PMChanger, // 修改人 
					PMIsUrgent: TempData.PMIsUrgent, // 是否紧急  YES:紧急， 其他不紧急
					PMIsUrgentBy: TempData.PMIsUrgentBy, // 由谁确认紧急  
					PMIsUrgentTime: new Date(), //  确认紧急的时间 
					PMOrderSourceType: "MES", //  订单来源类型  MES为本系统订单，Sync为同步对接订单
					PMObjectrderType: TempData
						.PMObjectrderType, // 订单类型  CUSTOMER:客户订单；INNER:内部订单；SAMPLE:样品订单
				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;
}

function GetPMPIAddNew(TempData) {
	var TempexeType = "";
	if (!TempData._id.includes('PI')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "PMPPRDInstruction",
				dataList: [{
					PMPRDInstructionID: TempData.PMPRDInstructionID, //  生产指令单号  
					PMProductionOrderID: TempData.PMProductionOrderID, // 生产订单号 
					PMPInnerProductID: TempData.PMPInnerProductID, // 交付订单子订单号（GM:应该是内部零件号） 
					ZCTPlanStockInTimeShort: TempData.ZCTPlanStockInTimeShort,
					ZCTProductURL: TempData.ZCTProductURL,
					PMStanardProcessName: TempData.PMStanardProcessName,
					PMOrderNum: TempData.PMOrderNum,
					PMProcessSeq: TempData.PMProcessSeq,
					PMPlanFromStock: TempData.PMPlanFromStock,
					PMProductNum: TempData.PMProductNum,
					ZCTFinishedNum: TempData.ZCTFinishedNum,
					ZCTFinishedRate: TempData.ZCTFinishedRate,
					PMVersionID: TempData.PMVersionID, //  产品BOM版本号  
					PMOrderNum: TempData.PMOrderNum, //  订单数量  
					PMUnit: TempData.PMUnit, //  计量单位  
					PMPlanFromStock: TempData.PMPlanFromStock, //  计划使用库存数 
					PMMaterialID: TempData.PMMaterialID, //  物料编号  
					PMMaterialName: TempData.PMMaterialName, //  物料名称  
					PMMaterialNumber: TempData.PMMaterialNumber, //  物料规格号 
					PMSpecification: TempData.PMSpecification, //  规格型号  
					PMPlanStockInTime: TempData.PMPlanStockInTime, //  计划入库时间  
					PMRemark: TempData.PMRemark, //  备注  
					PMOrderType: TempData.PMOrderType, //  订单类型  
					PMState: TempData.PMState, // 状态  
					PMLinesGroup: TempData.PMLinesGroup, //  生产线 
					PMShopCode: TempData.PMShopCode, //  车间号 
					PMIsUrgent: TempData.PMIsUrgent, //  是否紧急  是、否
					PMIsUrgentBy: TempData.PMIsUrgentBy, //  由谁确认紧急  
					PMIsUrgentTime: new Date(), // 确认紧急的时间 
					PMInstructionType: TempData
						.PMInstructionType, //  指令单类型 PRODUCTION:生产、委外:OUTSOURCING
					PMCreateTime: new Date(), // 创建时间  
					ZCTIsDeleted: "",
				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;

}

function GetPMSerAddNewData(TempData) {
	var TempexeType = "";
	if (!TempData._id.includes('SPT')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "PMPSeriesProcessTask",
				dataList: [{
					PMSerProcTaskID: TempData.PMSerProcTaskID, // 生产指令切分执行号 
					PMSerProcTaskSeq: TempData.PMSerProcTaskSeq,
					PMPRDInstructionID: TempData.PMPRDInstructionID, //  生产指令单号  
					PMProductionOrderID: TempData.PMProductionOrderID, // 生产订单号 
					PMInnerCustomerOrderItemID: TempData.PMProductionOrderID, //  交付订单子订单号  
					PMPInnerProductID: TempData.PMPInnerProductID, // 内部产品号 
					PMVersionID: TempData.PMVersionID, // 产品BOMID 
					PMOrderNum: TempData.PMOrderNum, //  订单数量  
					PMUnit: TempData.PMUnit, //  计量单位  
					PMPlanStockInTime: TempData.PMPlanStockInTime, // 计划入库时间  
					PMRemark: TempData.PMRemark, // 备注  
					PMLinesGroup: TempData.PMLinesGroup, //  生产线 
					PMShopCode: TempData.PMShopCode, //  车间号 
					PMIsUrgent: TempData.PMIsUrgent, // 是否紧急  是、否
					PMIsUrgentBy: TempData.PMIsUrgentBy, // 由谁确认紧急  
					PMIsUrgentTime: new Date(), //  确认紧急的时间 
					PMSPTState: TempData
						.PMSPTState, //  状态  CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束
					PMPlanStartTime: TempData.PMPlanStartTime, //  计划开始时间  
					PMPlanEndTime: new Date(), // 计划结束时间  
					PMStanardProcessName: TempData.PMStanardProcessName, // 工序名 
					PMCreateTime: new Date(), //  创建时间  
					PMSPTType: "PRODUCTION", // SPT类型 OUTSOURE:委外类型、PRODUCTION:生产
					ZCTPlanStockInTimeShort: TempData.ZCTPlanStockInTimeShort,
					PMStartTime: TempData.PMStartTime,
					PMEndTime: TempData.PMEndTime,
					ZCTFinishedNum: TempData.ZCTFinishedNum,
					ZCTFinishedRate: TempData.ZCTFinishedRate,
					ZCTProductURL: TempData.ZCTProductURL,
				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;

}


function GetPMOPTAddNewData(TempData) {
	var TempexeType = "";
	var TempexeType = "";
	if (!TempData._id.includes('OPT')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "PMPOneProcessTask",
				dataList: [{
					PMOneProcessTaskID: TempData.PMOneProcessTaskID, // 工序任务号 
					PMOneProcessPraID: TempData.PMOneProcessPraID, // 工序定义ID  
					PMPRDInstructionID: TempData.PMPRDInstructionID, // 生产指令单号  
					PMSerProcTaskID: TempData.PMSerProcTaskID, //  生产指令切分执行号 
					PMOPTTaskVolum: TempData.PMOPTTaskVolum, // 任务数量
					PMProductNum: TempData.PMProductNum, // 生产数量
					PMWaitingProductionNum: TempData.PMWaitingProductionNum, // 待生产数量
					PMSumScrapNum: TempData.PMSumScrapNum, // 报废数量
					PMQuaNum: TempData.PMQuaNum, // 合格数量
					PMSumReworkNum: TempData.PMSumReworkNum, // 返工数量
					PMUnit: TempData.PMUnit, // 单位
					PMPlanStartTime: TempData.PMPlanStartTime, // 计划开始时间
					PMPlanEndTime: TempData.PMPlanEndTime, // 计划结束时间
					PMStartTime: TempData.PMStartTime, // 实际开始时间
					PMEndTime: TempData.PMEndTime, // 实际结束时间
					PMOPTState: TempData
						.PMOPTState, // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
					PMIsUrgent: TempData.PMIsUrgent, // 是否紧急 是、 否
					PMOperatorBy: TempData.PMOperatorBy, // 分配到人(操作工)
					PMStationID: TempData.PMStationID, // 分配到设备号
					PMOperatorTime: TempData.PMOperatorTime, // 分配时间
					PMQualityBy: TempData.PMQualityBy, // 质检人员
					PMQualityTime: TempData.PMQualityTime, // 质检时间
					PMCreater: TempData.PMCreater, // 创建人
					PMCreateTime: TempData.PMCreateTime, // 创建时间
					PMUpdatePerson: TempData.PMUpdatePerson, // 修改人
					PMUpdateTime: TempData.PMUpdateTime, // 修改时间
					PMApprovalResult: TempData.PMApprovalResult, // 审批结果 NO: 未审批,YES: 审批通过, NOK: 审批不通过
					PMOPTType: TempData.PMOPTType, // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
					PMProductionOrderID: TempData.PMProductionOrderID, // 生产订单号
					PMDistributionNum: TempData.PMDistributionNum, // 已分配数
					PMProductID: TempData.PMProductID, // 内部零件号
					PMVersionID: TempData.PMVersionID, // 版本号
					PMProcessPraSeqID: TempData
						.PMProcessPraSeqID, // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
					PMOPPID: TempData.PMOPPID, // 单个工序键值组合
					PMStanardProcessName: TempData.PMStanardProcessName, // 标准工序号
					PMStanardProcessType: "INNER", // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
					PMProcessName: TempData.PMProcessName, // 标准工序名
					PMIsYes: TempData.PMIsYes, // 是否启用 YES: 启动
					PMStanOPPrice: TempData.PMStanOPPrice, // 标准工价（ 元） 做单个零件的劳务费用
					PMPcsPerCycle: TempData.PMPcsPerCycle, // 模腔数， 默认为1
					PMStandardProcessTime: TempData.PMStandardProcessTime, // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
					PMStandardUPDOWNDuration: TempData.PMStandardUPDOWNDuration, // 标准上下料周期
					PMStandardProcessDuration: TempData
						.PMStandardProcessDuration, // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
					PMQualityProcessLink: TempData.PMQualityProcessLink, // 只有质检合格才能生产下一批或下一个工序的PMOPPID
					PMQualityFirstNeed: TempData.PMQualityFirstNeed, // 是否需要首检 YES: 需要
					PMRemark: TempData.PMRemark, // 工序提醒信息
					PMProgramingChangeover: TempData
						.PMProgramingChangeover, // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
					IsNewProgramingNeed: TempData
						.IsNewProgramingNeed, // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
					PMProgramingTime: TempData.PMProgramingTime, // 程序编辑时间预估【 选用】
					PMNetWieght: TempData.PMNetWieght, // 单件重量 公斤【 选用】
					PMTechReuirment: TempData.PMTechReuirment, // 技术要求
					PMDrawingPath: TempData.PMDrawingPath, // 图纸所在的路径
					PMWorkshop: TempData.PMWorkshop, // 所在车间
					PMCapacity: TempData.PMCapacity, // 产能
					PMLimitCapacity: TempData.PMLimitCapacity, // 极限产能
					PMProductName: TempData.PMProductName, // 产品名
					PMOperationName: TempData.PMOperationName, // 工序产品名
					PMCodeLength: TempData.PMCodeLength, // 产品码长度
					PMIsSeqNeed: TempData.PMIsSeqNeed, // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
					PMIsSameSubNeed: TempData.PMIsSameSubNeed, // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
					PMStrCodeNeed: TempData.PMStrCodeNeed, // 字符包含
					PMOrderNum: TempData.PMOrderNum,
					PMPlanFromStock: TempData.PMPlanFromStock,
					ZCTPlanStockInTimeShort: TempData.ZCTPlanStockInTimeShort,
					ZCTFinishedNum: TempData.ZCTFinishedNum,
					ZCTFinishedRate: TempData.ZCTFinishedRate,
					ZCTProductURL: TempData.ZCTProductURL,
					ZCTRAWPurListRate: TempData.ZCTRAWPurListRate,
					ZCTRAWProListRate: TempData.ZCTRAWProListRate,

				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;
}


function GetPMRAWAddNewData(TempData) {
	var TempexeType = "";
	var TempexeType = "";
	if (!TempData._id.includes('RAW')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "ZCTRAWPur",
				dataList: [{
					ZCTMaterialName: TempData.ZCTMaterialName,
					PMNum: TempData.PMNum,
					PMUnit: TempData.PMUnit,
					ZCTMaterialFromType: TempData.ZCTMaterialFromType,
					ZCTGetNum: TempData.ZCTGetNum, //已领用物料数量
					ZCTGetRate: TempData.ZCTGetNum, //领用率
					ZCTProductURL: TempData.ZCTProductURL, //工序
					PMPRDInstructionID: TempData.PMPRDInstructionID,
					ZCTPlanRAWTimeShort: TempData.ZCTPlanRAWTimeShort,
					ZCTCodeNumIndex: TempData.ZCTCodeNumIndex
				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;
}

function GetPMPROAddNewData(TempData) {
	var TempexeType = "";
	var TempexeType = "";
	if (!TempData._id.includes('PRO')) {
		TempexeType = "updateonObject";
	} else {
		TempexeType = "add";
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: TempexeType,
				collectionName: "ZCTRAWPro",
				dataList: [{
					ZCTMaterialName: TempData.ZCTMaterialName,
					PMNum: TempData.PMNum,
					PMUnit: TempData.PMUnit,
					ZCTMaterialFromType: TempData.ZCTMaterialFromType,
					ZCTGetNum: TempData.ZCTGetNum, //已领用物料数量
					ZCTGetRate: TempData.ZCTGetNum, //领用率
					ZCTProductURL: TempData.ZCTProductURL, //工序
					PMPRDInstructionID: TempData.PMPRDInstructionID,
					ZCTPlanRAWTimeShort: TempData.ZCTPlanRAWTimeShort
				}, ]
			}, ]
	}
	if (TempexeType == "updateonObject") {
		DBExeData.DBExecutions[0].dataList[0]._id = TempData._id;
	}
	return DBExeData;
}


function GetPMOPTSubAddNewData(TempData) {
	var TempR = pmJSTools.checkFunctionCondiData(funcPra, wxContext.OPENID, "PMOPTSubAddNew", TempData);
	if (TempR != "OK") {
		return TempR;
	}
	//准备条件新建
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: "add",
				collectionName: "PMPOneProcessTaskSub",
				dataList: [{
					PMOneProcessTaskSubID: TempData._id, //生产工序执行ID 
					PMOneProcessTaskID: TempData.PMOneProcessTaskID, // 工序任务号 
					PMOneProcessPraID: TempData.PMOneProcessPraID, // 工序定义ID  
					PMPRDInstructionID: TempData.PMPRDInstructionID, // 生产指令单号  
					PMSerProcTaskID: TempData.PMSerProcTaskID, //  生产指令切分执行号 
					PMOPTTaskVolum: TempData.PMOPTTaskVolum, // 任务数量
					PMProductNum: TempData.PMProductNum, // 生产数量
					PMWaitingProductionNum: TempData.PMWaitingProductionNum, // 待生产数量
					PMSumScrapNum: TempData.PMSumScrapNum, // 报废数量
					PMQuaNum: TempData.PMQuaNum, // 合格数量
					PMSumReworkNum: TempData.PMSumReworkNum, // 返工数量
					PMUnit: TempData.PMUnit, // 单位
					PMPlanStartTime: TempData.PMPlanStartTime, // 计划开始时间
					PMPlanEndTime: TempData.PMPlanEndTime, // 计划结束时间
					PMStartTime: TempData.PMStartTime, // 实际开始时间
					PMEndTime: TempData.PMEndTime, // 实际结束时间
					PMOPTState: "CREATION", // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
					PMIsUrgent: TempData.PMIsUrgent, // 是否紧急 是、 否
					PMOperatorBy: TempData.PMOperatorBy, // 分配到人(操作工)
					PMStationID: TempData.PMStationID, // 分配到设备号
					PMOperatorTime: TempData.PMOperatorTime, // 分配时间
					PMQualityBy: TempData.PMQualityBy, // 质检人员
					PMQualityTime: TempData.PMQualityTime, // 质检时间
					PMCreater: TempData.PMCreater, // 创建人
					PMCreateTime: TempData.PMCreateTime, // 创建时间
					PMUpdatePerson: TempData.PMUpdatePerson, // 修改人
					PMUpdateTime: TempData.PMUpdateTime, // 修改时间
					PMApprovalResult: TempData.PMApprovalResult, // 审批结果 NO: 未审批,YES: 审批通过, NOK: 审批不通过
					PMOPTType: TempData.PMOPTType, // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
					PMProductionOrderID: TempData.PMProductionOrderID, // 生产订单号
					PMDistributionNum: TempData.PMDistributionNum, // 已分配数
					PMProductID: TempData.PMProductID, // 内部零件号
					PMVersionID: TempData.PMVersionID, // 版本号
					PMProcessPraSeqID: TempData
						.PMProcessPraSeqID, // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
					PMOPPID: TempData.PMOPPID, // 单个工序键值组合
					PMStanardProcessName: TempData.PMStanardProcessName, // 标准工序号
					PMStanardProcessType: "INNER", // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
					PMProcessName: TempData.PMProcessName, // 标准工序名
					PMIsYes: TempData.PMIsYes, // 是否启用 YES: 启动
					PMStanOPPrice: TempData.PMStanOPPrice, // 标准工价（ 元） 做单个零件的劳务费用
					PMPcsPerCycle: TempData.PMPcsPerCycle, // 模腔数， 默认为1
					PMStandardProcessTime: TempData.PMStandardProcessTime, // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
					PMStandardUPDOWNDuration: TempData.PMStandardUPDOWNDuration, // 标准上下料周期
					PMStandardProcessDuration: TempData
						.PMStandardProcessDuration, // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
					PMQualityProcessLink: TempData.PMQualityProcessLink, // 只有质检合格才能生产下一批或下一个工序的PMOPPID
					PMQualityFirstNeed: TempData.PMQualityFirstNeed, // 是否需要首检 YES: 需要
					PMRemark: TempData.PMRemark, // 工序提醒信息
					PMProgramingChangeover: TempData
						.PMProgramingChangeover, // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
					IsNewProgramingNeed: TempData
						.IsNewProgramingNeed, // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
					PMProgramingTime: TempData.PMProgramingTime, // 程序编辑时间预估【 选用】
					PMNetWieght: TempData.PMNetWieght, // 单件重量 公斤【 选用】
					PMTechReuirment: TempData.PMTechReuirment, // 技术要求
					PMDrawingPath: TempData.PMDrawingPath, // 图纸所在的路径
					PMWorkshop: TempData.PMWorkshop, // 所在车间
					PMCapacity: TempData.PMCapacity, // 产能
					PMLimitCapacity: TempData.PMLimitCapacity, // 极限产能
					PMProductName: TempData.PMProductName, // 产品名
					PMOperationName: TempData.PMOperationName, // 工序产品名
					PMCodeLength: TempData.PMCodeLength, // 产品码长度
					PMIsSeqNeed: TempData.PMIsSeqNeed, // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
					PMIsSameSubNeed: TempData.PMIsSameSubNeed, // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
					PMStrCodeNeed: TempData.PMStrCodeNeed, // 字符包含
				}, ]
			}, ],
		CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
	}
	return DBExeData;

}


/**
 * Creator:SE24,Date:2021-3-12 15:48:24
 * 执行功能：批准授权申请记录
 * @param {object} funcPra  功能参数
 * @param {object} _ db.command对象
 * @return 返回值说明：对象{errMsg,result}
 */
async function ApprovalApplicationRecord(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	var TempUserID = funcPra.PMUserID;
	//验证申请记录_Id
	if (pmJSTools.IsNullOrEmpty(funcPra.RecordId)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:RecordId参数为空"
		return TempResObject;
	}
	//申请记录类型
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTApplicationType)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:ZCTApplicationType参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({

		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})

	//验证申请人是否注册
	var TempApplyUser;
	if (pmJSTools.IsNullOrEmpty(funcPra.OptionPMUserID) && pmJSTools.IsNullOrEmpty(funcPra.OptionWXOpenID)) {
		TempResObject.errMsg = "申请人参数为空"
		return TempResObject;
	}
	let TempUserRes = await CloudDB.collection('PMUser').where(_.or([{
			WXOpenID: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
		},
		{
			_id: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
		}
	])).get();
	if (TempUserRes.data.length == 0) {
		TempResObject.errMsg = "当前任务申请人未进行工友登记，不可进行任务授权"
		return TempResObject;
	} else {
		TempApplyUser = TempUserRes.data[0];
	}

	var TempZCTUserName; //制程通助手的中文名字
	var TempZCT_id; //制程通助手的_id
	var TempZCTUserPhoto; //制程通助手的图片
	TempUserRes = await CloudDB.collection('PMUser')
		.where({
			PMUserID: _.eq("ZCTAssistant")
		}).get();

	if (TempUserRes.data.length > 0) {
		TempZCTUserName = TempUserRes.data[0].PMUserName
		TempZCT_id = TempUserRes.data[0]._id
		TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}

	var PMInnerProductName = "";
	var TempZCTTaskRes = await CloudDB.collection('PMPCustomerOrderItem')
		.where({
			_id: _.eq(funcPra.ZCTTaskID)
		}).get();

	if (TempZCTTaskRes.data.length > 0) {
		PMInnerProductName = TempZCTTaskRes.data[0].PMInnerProductName
	} else {
		TempResObject.errMsg = "未找到COI信息，请重试！"
		return TempResObject;
	}

	var TempPageType = ""
	var TempdataType = ""
	if (funcPra.PageType == "完工") {
		TempPageType = "完工申请的"
		TempdataType = "Finished"
	} else {
		TempPageType = "申请的"
		TempdataType = "Authorize"
	}


	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			const TempApplyRes = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.eq(funcPra.RecordId),
				ZCTHandleResult: _.eq("")
			}).get();
			if (!TempApplyRes.data) {
				await transaction.rollback("获取当前申请记录失败"); //回滚事务
				return;
			} else {
				if (TempApplyRes.data.length <= 0) {
					await transaction.rollback("当前记录已操作"); //回滚事务
					return;
				}
			}
			const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').doc(funcPra
				.ZCTTaskID).get();
			if (!TempCOIRes.data) {
				await transaction.rollback("获取当前任务信息失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("当前任务不存在"); //回滚事务
					return;
				}
			}
			var TempOptionCOI = TempCOIRes.data;
			//获取当前操作人（授权人）的信息 
			var TempPMUserAuto;
			if (pmJSTools.IsNullOrEmpty(funcPra.WxContext0PENID)) {
				TempResObject.errMsg = "ApprovalApplicationRecord:获取授权人信息失败"
				return TempResObject;
			}
			let TempUserAutoRes = await transaction.collection('PMUser').where({
				WXOpenID: _.eq(funcPra.WxContext0PENID)
			}).get();

			if (!TempUserAutoRes.data) {
				await transaction.rollback("获取授权人信息失败！请重试！"); //回滚事务
				return;
			} else {
				if (TempUserAutoRes.data.length <= 0) {
					await transaction.rollback("获取授权人信息失败！请重试！"); //回滚事务
					return;
				} else {
					TempPMUserAuto = TempUserAutoRes.data[0];
				}

			}
			if (funcPra.WxContext0PENID != TempOptionCOI._openid && TempPMUserAuto.PMUserID !=
				TempOptionCOI.PMCreater) {
				await transaction.rollback("非任务创建人，无此操作权限");
				return;
			}

			//查询MyCOI是否存在(根据COIId)
			// const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where({
			//   ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			// }).get();
			const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where(_.or([{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					_openid: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
				},
				{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					PMUserID: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
				}
			])).get();
			var TempMyCOIId = "";
			if (!TempMyCOIRes.data) {
				await transaction.rollback("获取对方的任务失败"); //回滚事务
				return;
			} else {
				if (TempMyCOIRes.data.length > 0) {
					TempMyCOIId = TempMyCOIRes.data[0]._id;
				} else {
					await transaction.rollback("对方还未将当前任务添加到自己的任务中"); //回滚事务
					return;
				}

			}
			//修改此申请记录审核结果
			var TempApplyResult = await transaction.collection("ZCTApplicationRecord").doc(funcPra
				.RecordId).update({
				data: {
					ZCTHandleDate: new Date(),
					ZCTHandleResult: "OK", //    处理结果（OK:同意，NOK:驳回）
				}
			})
			if (TempApplyResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//修改COI状态为授权
			var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
				.ZCTTaskID).update({
				data: {
					PMOrderState: funcPra.ZCTApplicationType == "Authorize" ? "ALLOWED" :
						"ACCEPT", //订单状态(ALLOWED:授权[授权申请],ACCEPT:验收[完工申请])
					ZCTApplicationCount: 0, //任务申请数改为0
					ZCTFinishedNum: funcPra.ZCTApplicationNum //完工申请数给到COI
				}
			})
			if (TempCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}


			//#region 【添加通知消息】发送给申请人已批准通知
			//新增制程通助手和批准申请人的聊天组、新增发送给批准申请人的批准通知记录
			//判断制程通助手和批准申请人是否有聊天组



			var TempChatGroupApplyID = "" //制程通助手和批准申请人的聊天组_id
			const TempChatGroupRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempApplyUser._id) //发起人（此时是批准申请人）
			}).get();
			if (!TempChatGroupRes.data) {
				await transaction.rollback("获取批准申请人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupRes.data.length > 0) {
					//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupApplyID = TempChatGroupRes.data[0]._id
					if (TempChatGroupRes.data[0].ZCTSponsorState == "NO") {
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempApplyUser._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "您" + TempPageType + PMInnerProductName +
							"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupApplyID = TempAddChatGroupRes._id //获取聊天组_id 
				}
			}
			//新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupApplyID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
						"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "批准", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
					ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord")
				.add({
					data: TempZCTCommunicateRecordList
				})
			if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和批准申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion


			//#region 【添加通知消息】发送给授权人已批准通知
			//新增制程通助手和授权人的聊天组、新增发送给授权人的批准通知记录


			var TempChatGroupAuthorizationID = "" //制程通助手和授权人的聊天组_id
			const TempChatGroupAuthRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempPMUserAuto._id) //发起人（此时是授权人）
			}).get();
			if (!TempChatGroupAuthRes.data) {
				await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupAuthRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupAuthorizationID = TempChatGroupAuthRes.data[0]._id
					if (TempChatGroupAuthRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupAuthRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					}

				} else {
					//制程通助手和授权人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempPMUserAuto._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
							PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupAuthRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和授权人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupAuthorizationID = TempAddChatGroupAuthRes._id //获取聊天组_id 
				}
			}

			//生成批准的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知授权人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: "制程通助手",
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "" + TempApplyUser.PMUserName + TempPageType + PMInnerProductName +
						"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "批准", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
					ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord 申请  / ExamineRecord 授权
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempPMUserAuto._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
				"ZCTCommunicateRecord").add({
				data: TempZCTCommunicateRecordList
			})
			if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}

			//#endregion





			//获取此任务其他申请记录为驳回
			const TempOtherApplyResult = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.neq(funcPra.RecordId),
				ZCTTaskID: _.eq(funcPra.ZCTTaskID),
				ZCTHandleResult: _.eq("")
			}).get();
			if (TempOtherApplyResult.data) {
				for (var i = 0; i < TempOtherApplyResult.data.length; i++) {

					//#region 【添加通知消息】发送给申请人自动驳回通知，发送给授权人自动驳回通知。

					if (pmJSTools.IsNullOrEmpty(TempOtherApplyResult.data[i].WXOpenID)) {
						await transaction.rollback("其他驳回申请没有申请人，请重试！"); //回滚事务
						return;
					}
					//验证驳回申请人是否注册
					var TempApplyRejectUser;
					let TempUserApplyRes = await transaction.collection('PMUser').where({
						WXOpenID: _.eq(TempOtherApplyResult.data[i].WXOpenID)
					}).get();

					if (!TempUserApplyRes.data) {
						await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
						return;
					} else {
						if (TempUserApplyRes.data.length <= 0) {
							await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
							return;
						} else {
							TempApplyRejectUser = TempUserApplyRes.data[0];
						}

					}


					//#region 1.判断制程通助手和驳回申请人是否有聊天组、新增发送给申请人的驳回通知记录
					var TempChatGroupApplyID2 = "" //制程通助手和批准申请人的聊天组_id
					const TempChatGroupRes2 = await transaction.collection('ZCTChatGroup').where({
						ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
						ZCTSponsorUserId: _.eq(TempApplyRejectUser._id) //发起人（此时是批准申请人）
					}).get();
					if (!TempChatGroupRes2.data) {
						await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
						return;
					} else {
						if (TempChatGroupRes2.data.length > 0) {
							//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
							TempChatGroupApplyID2 = TempChatGroupRes2.data[0]._id

							if (TempChatGroupRes2.data[0].ZCTSponsorState == "NO") {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupRes2.data[0]._id).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "您" + TempPageType +
												PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
											ZCTSponsorUnreadNum: TempChatGroupRes2.data[0]
												.ZCTSponsorUnreadNum + 1 //修改沟通人未读数

										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							} else {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupRes2.data[0]._id).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "您" + TempPageType +
												PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）

										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							}
						} else {
							//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
							var TempRecordChatGroupList = {
								ZCTCommunicatorsUserId: TempZCT_id,
								ZCTSponsorUserId: TempApplyRejectUser._id,
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
								ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
								ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
								ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
							}
							const TempAddChatGroupRes2 = await transaction.collection("ZCTChatGroup")
								.add({
									data: TempRecordChatGroupList
								})
							if (TempAddChatGroupRes2.errMsg != "collection.add:ok") {
								await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
								return;
							}
							TempChatGroupApplyID2 = TempAddChatGroupRes2._id //获取聊天组_id 
						}
					}
					//新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
					var TempZCTCommunicateRecordList = {
						ZCTGroupId: TempChatGroupApplyID2, //聊天组ID
						ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
						ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
						ZCTNickName: TempZCTUserName,
						ZCTMsgType: "notice", //notice:通知
						ZCTtextContent: "",
						ZCTSendTime: new Date(),
						ZCTSendTimeTS: Date.now(),
						ZCTMESMsg: {
							ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
							ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
								"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							ZCTMESTime: new Date(), //消息产生时间
							ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
							ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
							ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
							ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
							ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
							ZCTJumpParameters: { //跳转参数
								dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
								ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
								ZCTUserID: TempApplyRejectUser._id, //沟通人对象用户Id【授权/完工申请】
								ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
								PMInnerProductName: TempZCTTaskRes.data[0]
									.PMInnerProductName, //产品名【授权/完工申请】
								PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
								PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
								ZCTCOICreator: TempZCTTaskRes.data[0]
									.PMCreater, //COI创建人PMUserID【授权/完工申请】
							}
						}
					}
					const TempAddZCTCommunicateRecordRes = await transaction.collection(
						"ZCTCommunicateRecord").add({
						data: TempZCTCommunicateRecordList
					})
					if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和驳回申请人沟通记录失败"); //回滚事务
						return;
					}
					//#endregion


					//#region 2.新增发送给授权人的驳回通知记录
					const TempChatGroupRes3 = await transaction.collection('ZCTChatGroup').where({
						ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
						ZCTSponsorUserId: _.eq(TempPMUserAuto._id) //发起人
					}).get();
					if (!TempChatGroupRes3.data) {
						await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
						return;
					} else {
						if (TempChatGroupRes3.data.length > 0) {
							if (TempChatGroupRes3.data[0].ZCTSponsorState == "NO") {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupAuthorizationID).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "" + TempApplyRejectUser.PMUserName +
												TempPageType + PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
											ZCTSponsorUnreadNum: TempChatGroupRes3.data[0]
												.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							} else {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupAuthorizationID).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "" + TempApplyRejectUser.PMUserName +
												TempPageType + PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							}
						} else {}

					}



					var TempZCTCommunicateRecordList = {
						ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
						ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
						ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
						ZCTNickName: TempZCTUserName,
						ZCTMsgType: "notice", //notice:通知
						ZCTtextContent: "",
						ZCTSendTime: new Date(),
						ZCTSendTimeTS: Date.now(),
						ZCTMESMsg: {
							ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
							ZCTMESMSG: "" + TempApplyRejectUser.PMUserName + TempPageType +
								PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							ZCTMESTime: new Date(), //消息产生时间
							ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
							ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
							ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
							ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
							ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord  / ExamineRecord
							ZCTJumpParameters: { //跳转参数
								dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
								ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
								ZCTUserID: TempPMUserAuto._id, //沟通人对象用户Id【授权/完工申请】
								ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
								PMInnerProductName: TempZCTTaskRes.data[0]
									.PMInnerProductName, //产品名【授权/完工申请】
								PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
								PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
								ZCTCOICreator: TempZCTTaskRes.data[0]
									.PMCreater, //COI创建人PMUserID【授权/完工申请】
							}
						}
					}
					const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
						"ZCTCommunicateRecord").add({
						data: TempZCTCommunicateRecordList
					})
					if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
						return;
					}
					//#endregion

					//#endregion

					//#region  修改此任务其他申请记录为驳回
					var TempOtherApplyExeResult = await transaction.collection('ZCTApplicationRecord')
						.doc(TempOtherApplyResult.data[i]._id).update({
							data: {
								ZCTHandleDate: new Date(),
								ZCTHandleResult: "NOK", //    处理结果（OK:同意，NOK:驳回）
								ZCTHandleDescribe: "已选择其他人",
							}
						});
					if (TempOtherApplyExeResult.stats.updated <= 0) {
						await transaction.rollback("驳回其他申请时失败，可能是数据已变更造成的"); //回滚事务
						return;
					}
					//#endregion
				}
			}
			//修改MyCOI状态为ALLOWED:授权
			var TempMyCOIResult = await transaction.collection("ZCTMyPMCOIList").doc(TempMyCOIId)
				.update({
					data: {
						ZCTTaskState: funcPra.ZCTApplicationType == "Authorize" ? "ALLOWED" :
							"ACCEPT", //订单状态(ALLOWED:授权[授权申请],ACCEPT:验收[完工申请])
						ZCTChangeTime: new Date()
					}
				})
			if (TempMyCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//获取此任务其他MyCOI记录为驳回
			const TempOtherMyCOIResult = await transaction.collection('ZCTMyPMCOIList').where({
				_id: _.neq(TempMyCOIId),
				ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			}).get();
			if (TempOtherMyCOIResult.data) {
				var TempState = funcPra.ZCTApplicationType == "Authorize" ? "REFUSED" :
					"RETURN"; //REFUSED授权拒绝，RETURN交付退回
				for (var i = 0; i < TempOtherMyCOIResult.data.length; i++) {
					//修改此任务其他申请记录为驳回
					var TempOtherCOIExeResult = await transaction.collection('ZCTMyPMCOIList').doc(
						TempOtherMyCOIResult.data[i]._id).update({
						data: {
							ZCTTaskState: TempState,
							ZCTChangeTime: new Date()
						}
					});
					if (TempOtherCOIExeResult.stats.updated <= 0) {
						await transaction.rollback("驳回其他任务时失败，可能是数据已变更造成的"); //回滚事务
						return;
					}
				}
			}

			if (funcPra.ZCTApplicationType == "Authorize") {
				if (!pmJSTools.IsNullOrEmpty(TempOptionCOI._openid) && !pmJSTools.IsNullOrEmpty(
						TempApplyUser.WXOpenID) && TempOptionCOI._openid != TempApplyUser.WXOpenID) {
					//修改任务申请人的接单数
					var TempUserCOI = await transaction.collection("PMUser").doc(TempApplyUser._id)
						.update({
							data: {
								ZCTReceiveOrderNum: _.inc(1),
							}
						})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
				}

			} else {
				//修改申请人的交付验收数、发布人的发布验收数
				if (!pmJSTools.IsNullOrEmpty(TempOptionCOI._openid) && !pmJSTools.IsNullOrEmpty(
						TempApplyUser.WXOpenID) && TempOptionCOI._openid != TempApplyUser.WXOpenID) {
					var TempUserCOI = await transaction.collection("PMUser").doc(TempUserID).update({
						data: {
							ZCTReleaseAcceNum: _.inc(1)
						}
					})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
					var TempUserCOI = await transaction.collection("PMUser").doc(TempApplyUser._id)
						.update({
							data: {
								ZCTDeliveryAcceNum: _.inc(1)
							}
						})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
				}
			}

			//#region
			// //#region 发送给申请人自动驳回通知，发送给授权人自动驳回通知。
			//       //查询到该任务除本次批准记录和之前已驳回的记录，剩下的的申请记录
			//           const TempOtherApplyRes = await transaction.collection('ZCTApplicationRecord').where({
			//             _id: _.neq(funcPra.RecordId),
			//             ZCTTaskID: _.eq(funcPra.ZCTTaskID),
			//             ZCTHandleResult: _.eq("")
			//           }).get();
			//           if (TempOtherApplyRes.data) {
			//             for (var i = 0; i < TempOtherApplyRes.data.length; i++) {
			//             if (!TempChatGroupRes2.data) {
			//               await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
			//               return;
			//             }
			//             if (pmJSTools.IsNullOrEmpty(TempOtherApplyRes.data[i].WXOpenID)) {
			//               TempResObject.errMsg = "ApprovalApplicationRecord:驳回申请人为空"
			//               return TempResObject;
			//             }
			//             //验证驳回申请人是否注册
			//             var TempApplyRejectUser;
			//             let TempUserApplyRes = await transaction.collection('PMUser').where({
			//               WXOpenID: _.eq(TempOtherApplyRes.data[i].WXOpenID)
			//             }).get();

			//             if (!TempUserApplyRes.data) {
			//               await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
			//               return;
			//             }
			//             else
			//             {
			//               if(TempUserApplyRes.data.length<=0){ 
			//                 await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
			//                 return;
			//               }
			//               else{
			//                 TempApplyRejectUser=TempUserApplyRes.data[0];
			//               }

			//             }


			//               //#region 1.判断制程通助手和驳回申请人是否有聊天组、新增发送给申请人的驳回通知记录
			//               var TempChatGroupApplyID2=""//制程通助手和批准申请人的聊天组_id
			//               const TempChatGroupRes2 = await transaction.collection('ZCTChatGroup').where({
			//                 ZCTCommunicatorsUserId: _.eq(TempApplyRejectUser._id),  //沟通人（此时是批准申请人）
			//                 ZCTSponsorUserId: _.eq("ZCTAssistant")  //发起人（此时是制程通助手）
			//               }).get();
			//               if (!TempChatGroupRes2.data) {
			//                 await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
			//                 return;
			//               } else {
			//                 if (TempChatGroupRes2.data.length > 0) {
			//                    //制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
			//                    TempChatGroupApplyID2=TempChatGroupRes2.data[0]._id
			//                 }
			//                 else
			//                 {
			//                  //制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
			//                   var TempRecordChatGroupList = {
			//                     ZCTCommunicatorsUserId:TempApplyRejectUser._id,
			//                     ZCTSponsorUserId:"ZCTAssistant"
			//                   }
			//                   const TempAddChatGroupRes2 = await transaction.collection("ZCTChatGroup").add({
			//                     data: TempRecordChatGroupList
			//                   })
			//                   if (TempAddChatGroupRes2.errMsg != "collection.add:ok") {
			//                     await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
			//                     return;
			//                   }
			//                   TempChatGroupApplyID2=TempAddChatGroupRes2._id//获取聊天组_id 
			//                 }
			//               }
			//               //新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			//               var TempZCTCommunicateRecordList = {
			//                 ZCTGroupId: TempChatGroupApplyID2,//聊天组ID
			//                 ZCTAvatar: "",//头像(此时是制程通助手头像)
			//                 ZCTUserid: "ZCTAssistant",//openid（此时是制程通助手id）
			//                 ZCTNickName: "制程通助手",
			//                 ZCTMsgType: "notice",//notice:通知
			//                 ZCTtextContent: "",
			//                 ZCTSendTime: new Date(),
			//                 ZCTSendTimeTS: Date.now(),
			//                 ZCTMESMsg:{
			//                   ZCTMESTheme:"审核",//主题（现只有审核类消息通知（审核：Approval））
			//                   ZCTMESMSG:""+TempApplyRejectUser.PMUserName+"申请"+funcPra.ZCTTaskID+"任务，已审批",//内容（此为文本提示 为产生消息部分进行拼接写入）
			//                   ZCTMESTime:new Date(),//消息产生时间
			//                   ZCTMESURL:"",//链接界面名称（根据此字段，点击界面通知调转至不同界面）
			//                   ZCTMESState:"批准",//消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
			//                   ZCTMESTaskID:funcPra.ZCTTaskID,//消息关联任务编号（若主题为Approval，既为审核任务主键编号）
			//                   ZCTMESCreater:funcPra.WxContext0PENID,//新增消息人员电话编号
			//                 }
			//               }
			//               const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord").add({
			//                 data: TempZCTCommunicateRecordList
			//               })
			//               if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
			//                 await transaction.rollback("创建制程通助手和驳回申请人沟通记录失败"); //回滚事务
			//                 return;
			//               }
			//               //#endregion


			//               //#region 2.新增发送给授权人的驳回通知记录
			//               var TempZCTCommunicateRecordList = {
			//                 ZCTGroupId: TempChatGroupAuthorizationID,//聊天组ID
			//                 ZCTAvatar: "",//头像(此时是制程通助手头像)后续给一个固定头像
			//                 ZCTUserid: "ZCTAssistant",//openid（此时是制程通助手id）
			//                 ZCTNickName: "制程通助手",
			//                 ZCTMsgType: "notice",//notice:通知
			//                 ZCTtextContent: "",
			//                 ZCTSendTime: new Date(),
			//                 ZCTSendTimeTS: Date.now(),
			//                 ZCTMESMsg:{
			//                   ZCTMESTheme:"审核",//主题（现只有审核类消息通知（审核：Approval））
			//                   ZCTMESMSG:""+TempApplyRejectUser.PMUserName+"申请"+funcPra.ZCTTaskID+"任务，已审批",//内容（此为文本提示 为产生消息部分进行拼接写入）
			//                   ZCTMESTime:new Date(),//消息产生时间
			//                   ZCTMESURL:"../ApplicationRecordPage/ApplicationRecordPage",//链接界面名称（根据此字段，点击界面通知调转至不同界面）
			//                   ZCTMESState:"驳回",//消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
			//                   ZCTMESTaskID:funcPra.ZCTTaskID,//消息关联任务编号（若主题为Approval，既为审核任务主键编号）
			//                   ZCTMESCreater:funcPra.WxContext0PENID,//新增消息人员电话编号
			//                 }
			//               }
			//               const TempAddZCTCommunicateRecordAuthRes = await transaction.collection("ZCTCommunicateRecord").add({
			//                 data: TempZCTCommunicateRecordList
			//               })
			//               if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
			//                 await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
			//                 return;
			//               }
			//               //#endregion
			//             }
			//           }
			// //#endregion
			//#endregion

			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}


/**
 * Creator:SE24,Date:2021-3-12 15:48:24
 * 执行功能：批准授权申请记录
 * @param {object} funcPra  功能参数
 * @param {object} _ db.command对象
 * @return 返回值说明：对象{errMsg,result}
 */
async function DYApprovalApplicationRecord(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	var TempUserID = funcPra.PMUserID;
	//验证申请记录_Id
	if (pmJSTools.IsNullOrEmpty(funcPra.RecordId)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:RecordId参数为空"
		return TempResObject;
	}
	//申请记录类型
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTApplicationType)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:ZCTApplicationType参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({

		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})

	//验证申请人是否注册
	var TempApplyUser;
	if (pmJSTools.IsNullOrEmpty(funcPra.OptionPMUserID) && pmJSTools.IsNullOrEmpty(funcPra.OptionWXOpenID)) {
		TempResObject.errMsg = "申请人参数为空"
		return TempResObject;
	}
	let TempUserRes = await CloudDB.collection('PMUser').where(_.or([{
			WXOpenID: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
		},
		{
			_id: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
		}
	])).get();
	if (TempUserRes.data.length == 0) {
		TempResObject.errMsg = "当前任务申请人未进行工友登记，不可进行任务授权"
		return TempResObject;
	} else {
		TempApplyUser = TempUserRes.data[0];
	}

	var TempZCTUserName; //制程通助手的中文名字
	var TempZCT_id; //制程通助手的_id
	var TempZCTUserPhoto; //制程通助手的图片
	TempUserRes = await CloudDB.collection('PMUser')
		.where({
			PMUserID: _.eq("ZCTAssistant")
		}).get();

	if (TempUserRes.data.length > 0) {
		TempZCTUserName = TempUserRes.data[0].PMUserName
		TempZCT_id = TempUserRes.data[0]._id
		TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}

	var PMInnerProductName = "";
	var TempZCTTaskRes = await CloudDB.collection('PMPCustomerOrderItem')
		.where({
			_id: _.eq(funcPra.ZCTTaskID)
		}).get();

	if (TempZCTTaskRes.data.length > 0) {
		PMInnerProductName = TempZCTTaskRes.data[0].PMInnerProductName
	} else {
		TempResObject.errMsg = "未找到COI信息，请重试！"
		return TempResObject;
	}

	var TempPageType = ""
	var TempdataType = ""
	if (funcPra.PageType == "完工") {
		TempPageType = "完工申请的"
		TempdataType = "Finished"
	} else {
		TempPageType = "申请的"
		TempdataType = "Authorize"
	}


	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			const TempApplyRes = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.eq(funcPra.RecordId),
				ZCTHandleResult: _.eq("")
			}).get();
			if (!TempApplyRes.data) {
				await transaction.rollback("获取当前申请记录失败"); //回滚事务
				return;
			} else {
				if (TempApplyRes.data.length <= 0) {
					await transaction.rollback("当前记录已操作"); //回滚事务
					return;
				}
			}
			const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').doc(funcPra
				.ZCTTaskID).get();
			if (!TempCOIRes.data) {
				await transaction.rollback("获取当前任务信息失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("当前任务不存在"); //回滚事务
					return;
				}
			}
			var TempOptionCOI = TempCOIRes.data;
			// if(funcPra.WxContext0PENID!=TempOptionCOI._openid){
			//   await transaction.rollback("非任务创建人，无此操作权限"); 
			//   return;
			// }


			var TempOptionCOI = TempCOIRes.data;
			//获取操作人信息
			var TempPMUserAuto
			const TempPMUserRes = await transaction.collection('PMUser').where({
				WXOpenID: _.eq(funcPra.WxContext0PENID)
			}).get();
			if (!TempPMUserRes.data) {
				await transaction.rollback("获取当前操作人数据失败"); //回滚事务
				return;
			} else {
				if (TempPMUserRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempPMUserAuto = TempPMUserRes.data[0];
				} else {
					await transaction.rollback("获取当前操作人数据失败"); //回滚事务
					return;
				}
			}
			// if(funcPra.OptionWXOpenID!=TempOptionCOI._openid&&TempPMUserAuth.PMUserID!=TempOptionCOI.PMCreater){
			//   await transaction.rollback("非任务创建人，无此操作权限"); 
			//   return;
			// }

			//查询MyCOI是否存在(根据COIId)
			// const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where({
			//   ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			// }).get();
			const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where(_.or([{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					_openid: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
				},
				{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					PMUserID: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
				}
			])).get();
			var TempMyCOIId = "";
			if (!TempMyCOIRes.data) {
				await transaction.rollback("获取对方的任务失败"); //回滚事务
				return;
			} else {
				if (TempMyCOIRes.data.length > 0) {
					TempMyCOIId = TempMyCOIRes.data[0]._id;
				} else {
					await transaction.rollback("对方还未将当前任务添加到自己的任务中"); //回滚事务
					return;
				}

			}
			//修改此申请记录审核结果
			var TempApplyResult = await transaction.collection("ZCTApplicationRecord").doc(funcPra
				.RecordId).update({
				data: {
					ZCTHandleDate: new Date(),
					ZCTHandleResult: "OK", //    处理结果（OK:同意，NOK:驳回）
				}
			})
			if (TempApplyResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//修改COI状态为授权
			var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
				.ZCTTaskID).update({
				data: {
					PMOrderState: funcPra.ZCTApplicationType == "Authorize" ? "ALLOWED" :
						"ACCEPT", //订单状态(ALLOWED:授权[授权申请],ACCEPT:验收[完工申请])
					ZCTApplicationCount: 0, //任务申请数改为0
					ZCTFinishedNum: funcPra.ZCTApplicationNum //完工申请数给到COI
				}
			})
			if (TempCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}


			//#region 【添加通知消息】发送给申请人已批准通知
			//新增制程通助手和批准申请人的聊天组、新增发送给批准申请人的批准通知记录
			//判断制程通助手和批准申请人是否有聊天组



			//#region  【添加通知消息】生成驳回的通知消息--通知申请人
			//判断制程通助手和申请人之间有没有聊天组ZCTChatGroup


			var TempChatGroupApplyID = "" //制程通助手和批准申请人的聊天组_id
			const TempChatGroupRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempApplyUser._id) //发起人（此时是批准申请人）
			}).get();
			if (!TempChatGroupRes.data) {
				await transaction.rollback("获取批准申请人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupRes.data.length > 0) {
					//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupApplyID = TempChatGroupRes.data[0]._id
					if (TempChatGroupRes.data[0].ZCTSponsorState == "NO") {
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempApplyUser._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "您" + TempPageType + PMInnerProductName +
							"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupApplyID = TempAddChatGroupRes._id //获取聊天组_id 
				}
			}
			//新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupApplyID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
						"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "批准", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
					ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord")
				.add({
					data: TempZCTCommunicateRecordList
				})
			if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和批准申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion


			//#region 【添加通知消息】发送给授权人已批准通知
			//新增制程通助手和授权人的聊天组、新增发送给授权人的批准通知记录


			var TempChatGroupAuthorizationID = "" //制程通助手和授权人的聊天组_id
			const TempChatGroupAuthRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempPMUserAuto._id) //发起人（此时是授权人）
			}).get();
			if (!TempChatGroupAuthRes.data) {
				await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupAuthRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupAuthorizationID = TempChatGroupAuthRes.data[0]._id
					if (TempChatGroupAuthRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupAuthRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}
					}

				} else {
					//制程通助手和授权人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempPMUserAuto._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
							PMInnerProductName + "任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupAuthRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和授权人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupAuthorizationID = TempAddChatGroupAuthRes._id //获取聊天组_id 
				}
			}

			//生成批准的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知授权人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: "制程通助手",
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "" + TempApplyUser.PMUserName + TempPageType + PMInnerProductName +
						"任务，已批准", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "批准", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
					ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord 申请  / ExamineRecord 授权
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempPMUserAuto._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
				"ZCTCommunicateRecord").add({
				data: TempZCTCommunicateRecordList
			})
			if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}

			//#endregion





			//获取此任务其他申请记录为驳回
			const TempOtherApplyResult = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.neq(funcPra.RecordId),
				ZCTTaskID: _.eq(funcPra.ZCTTaskID),
				ZCTHandleResult: _.eq("")
			}).get();
			if (TempOtherApplyResult.data) {
				for (var i = 0; i < TempOtherApplyResult.data.length; i++) {

					//#region 【添加通知消息】发送给申请人自动驳回通知，发送给授权人自动驳回通知。

					if (pmJSTools.IsNullOrEmpty(TempOtherApplyResult.data[i].WXOpenID)) {
						await transaction.rollback("其他驳回申请没有申请人，请重试！"); //回滚事务
						return;
					}
					//验证驳回申请人是否注册
					var TempApplyRejectUser;
					let TempUserApplyRes = await transaction.collection('PMUser').where({
						WXOpenID: _.eq(TempOtherApplyResult.data[i].WXOpenID)
					}).get();

					if (!TempUserApplyRes.data) {
						await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
						return;
					} else {
						if (TempUserApplyRes.data.length <= 0) {
							await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
							return;
						} else {
							TempApplyRejectUser = TempUserApplyRes.data[0];
						}

					}


					//#region 1.判断制程通助手和驳回申请人是否有聊天组、新增发送给申请人的驳回通知记录
					var TempChatGroupApplyID2 = "" //制程通助手和批准申请人的聊天组_id
					const TempChatGroupRes2 = await transaction.collection('ZCTChatGroup').where({
						ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
						ZCTSponsorUserId: _.eq(TempApplyRejectUser._id) //发起人（此时是批准申请人）
					}).get();
					if (!TempChatGroupRes2.data) {
						await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
						return;
					} else {
						if (TempChatGroupRes2.data.length > 0) {
							//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
							TempChatGroupApplyID2 = TempChatGroupRes2.data[0]._id

							if (TempChatGroupRes2.data[0].ZCTSponsorState == "NO") {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupRes2.data[0]._id).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "您" + TempPageType +
												PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
											ZCTSponsorUnreadNum: TempChatGroupRes2.data[0]
												.ZCTSponsorUnreadNum + 1 //修改沟通人未读数

										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							} else {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupRes2.data[0]._id).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "您" + TempPageType +
												PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）

										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							}
						} else {
							//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
							var TempRecordChatGroupList = {
								ZCTCommunicatorsUserId: TempZCT_id,
								ZCTSponsorUserId: TempApplyRejectUser._id,
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
								ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
								ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
								ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
							}
							const TempAddChatGroupRes2 = await transaction.collection("ZCTChatGroup")
								.add({
									data: TempRecordChatGroupList
								})
							if (TempAddChatGroupRes2.errMsg != "collection.add:ok") {
								await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
								return;
							}
							TempChatGroupApplyID2 = TempAddChatGroupRes2._id //获取聊天组_id 
						}
					}
					//新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
					var TempZCTCommunicateRecordList = {
						ZCTGroupId: TempChatGroupApplyID2, //聊天组ID
						ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
						ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
						ZCTNickName: TempZCTUserName,
						ZCTMsgType: "notice", //notice:通知
						ZCTtextContent: "",
						ZCTSendTime: new Date(),
						ZCTSendTimeTS: Date.now(),
						ZCTMESMsg: {
							ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
							ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
								"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							ZCTMESTime: new Date(), //消息产生时间
							ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
							ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
							ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
							ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
							ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
							ZCTJumpParameters: { //跳转参数
								dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
								ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
								ZCTUserID: TempApplyRejectUser._id, //沟通人对象用户Id【授权/完工申请】
								ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
								PMInnerProductName: TempZCTTaskRes.data[0]
									.PMInnerProductName, //产品名【授权/完工申请】
								PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
								PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
								ZCTCOICreator: TempZCTTaskRes.data[0]
									.PMCreater, //COI创建人PMUserID【授权/完工申请】
							}
						}
					}
					const TempAddZCTCommunicateRecordRes = await transaction.collection(
						"ZCTCommunicateRecord").add({
						data: TempZCTCommunicateRecordList
					})
					if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和驳回申请人沟通记录失败"); //回滚事务
						return;
					}
					//#endregion


					//#region 2.新增发送给授权人的驳回通知记录
					const TempChatGroupRes3 = await transaction.collection('ZCTChatGroup').where({
						ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
						ZCTSponsorUserId: _.eq(TempPMUserAuto._id) //发起人
					}).get();
					if (!TempChatGroupRes3.data) {
						await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
						return;
					} else {
						if (TempChatGroupRes3.data.length > 0) {
							if (TempChatGroupRes3.data[0].ZCTSponsorState == "NO") {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupAuthorizationID).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "" + TempApplyRejectUser.PMUserName +
												TempPageType + PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
											ZCTSponsorUnreadNum: TempChatGroupRes3.data[0]
												.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							} else {
								//修改聊天组的时间和ZCTtextContent
								var TempUpdateCGResult = await transaction.collection("ZCTChatGroup")
									.doc(TempChatGroupAuthorizationID).update({
										data: {
											ZCTNewestTime: new Date(),
											ZCTNewestTimeTS: Date.now(),
											ZCTtextContent: "" + TempApplyRejectUser.PMUserName +
												TempPageType + PMInnerProductName +
												"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
										}
									})
								if (TempUpdateCGResult.stats.updated <= 0) {
									await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
									return;
								}
							}
						} else {}

					}



					var TempZCTCommunicateRecordList = {
						ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
						ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
						ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
						ZCTNickName: TempZCTUserName,
						ZCTMsgType: "notice", //notice:通知
						ZCTtextContent: "",
						ZCTSendTime: new Date(),
						ZCTSendTimeTS: Date.now(),
						ZCTMESMsg: {
							ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
							ZCTMESMSG: "" + TempApplyRejectUser.PMUserName + TempPageType +
								PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							ZCTMESTime: new Date(), //消息产生时间
							ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
							ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
							ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
							ZCTMESCreater: TempPMUserAuto._id, //新增消息人员电话编号
							ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord  / ExamineRecord
							ZCTJumpParameters: { //跳转参数
								dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
								ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
								ZCTUserID: TempPMUserAuto._id, //沟通人对象用户Id【授权/完工申请】
								ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
								PMInnerProductName: TempZCTTaskRes.data[0]
									.PMInnerProductName, //产品名【授权/完工申请】
								PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
								PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
								ZCTCOICreator: TempZCTTaskRes.data[0]
									.PMCreater, //COI创建人PMUserID【授权/完工申请】
							}
						}
					}
					const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
						"ZCTCommunicateRecord").add({
						data: TempZCTCommunicateRecordList
					})
					if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
						return;
					}
					//#endregion

					//#endregion

					//#region  修改此任务其他申请记录为驳回
					var TempOtherApplyExeResult = await transaction.collection('ZCTApplicationRecord')
						.doc(TempOtherApplyResult.data[i]._id).update({
							data: {
								ZCTHandleDate: new Date(),
								ZCTHandleResult: "NOK", //    处理结果（OK:同意，NOK:驳回）
								ZCTHandleDescribe: "已选择其他人",
							}
						});
					if (TempOtherApplyExeResult.stats.updated <= 0) {
						await transaction.rollback("驳回其他申请时失败，可能是数据已变更造成的"); //回滚事务
						return;
					}
					//#endregion
				}
			}
			//修改MyCOI状态为ALLOWED:授权
			var TempMyCOIResult = await transaction.collection("ZCTMyPMCOIList").doc(TempMyCOIId)
				.update({
					data: {
						ZCTTaskState: funcPra.ZCTApplicationType == "Authorize" ? "ALLOWED" :
							"ACCEPT", //订单状态(ALLOWED:授权[授权申请],ACCEPT:验收[完工申请])
						ZCTChangeTime: new Date()
					}
				})
			if (TempMyCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//获取此任务其他MyCOI记录为驳回
			const TempOtherMyCOIResult = await transaction.collection('ZCTMyPMCOIList').where({
				_id: _.neq(TempMyCOIId),
				ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			}).get();
			if (TempOtherMyCOIResult.data) {
				var TempState = funcPra.ZCTApplicationType == "Authorize" ? "REFUSED" :
					"RETURN"; //REFUSED授权拒绝，RETURN交付退回
				for (var i = 0; i < TempOtherMyCOIResult.data.length; i++) {
					//修改此任务其他申请记录为驳回
					var TempOtherCOIExeResult = await transaction.collection('ZCTMyPMCOIList').doc(
						TempOtherMyCOIResult.data[i]._id).update({
						data: {
							ZCTTaskState: TempState,
							ZCTChangeTime: new Date()
						}
					});
					if (TempOtherCOIExeResult.stats.updated <= 0) {
						await transaction.rollback("驳回其他任务时失败，可能是数据已变更造成的"); //回滚事务
						return;
					}
				}
			}

			if (funcPra.ZCTApplicationType == "Authorize") {
				if (!pmJSTools.IsNullOrEmpty(TempOptionCOI._openid) && !pmJSTools.IsNullOrEmpty(
						TempApplyUser.WXOpenID) && TempOptionCOI._openid != TempApplyUser.WXOpenID) {
					//修改任务申请人的接单数
					var TempUserCOI = await transaction.collection("PMUser").doc(TempApplyUser._id)
						.update({
							data: {
								ZCTReceiveOrderNum: _.inc(1),
							}
						})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
				}

			} else {
				//修改申请人的交付验收数、发布人的发布验收数
				if (!pmJSTools.IsNullOrEmpty(TempOptionCOI._openid) && !pmJSTools.IsNullOrEmpty(
						TempApplyUser.WXOpenID) && TempOptionCOI._openid != TempApplyUser.WXOpenID) {
					var TempUserCOI = await transaction.collection("PMUser").doc(TempUserID).update({
						data: {
							ZCTReleaseAcceNum: _.inc(1)
						}
					})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
					var TempUserCOI = await transaction.collection("PMUser").doc(TempApplyUser._id)
						.update({
							data: {
								ZCTDeliveryAcceNum: _.inc(1)
							}
						})
					if (TempUserCOI.stats.updated <= 0) {
						await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
						return;
					}
				}
			}

			//#region
			// //#region 发送给申请人自动驳回通知，发送给授权人自动驳回通知。
			//       //查询到该任务除本次批准记录和之前已驳回的记录，剩下的的申请记录
			//           const TempOtherApplyRes = await transaction.collection('ZCTApplicationRecord').where({
			//             _id: _.neq(funcPra.RecordId),
			//             ZCTTaskID: _.eq(funcPra.ZCTTaskID),
			//             ZCTHandleResult: _.eq("")
			//           }).get();
			//           if (TempOtherApplyRes.data) {
			//             for (var i = 0; i < TempOtherApplyRes.data.length; i++) {
			//             if (!TempChatGroupRes2.data) {
			//               await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
			//               return;
			//             }
			//             if (pmJSTools.IsNullOrEmpty(TempOtherApplyRes.data[i].WXOpenID)) {
			//               TempResObject.errMsg = "ApprovalApplicationRecord:驳回申请人为空"
			//               return TempResObject;
			//             }
			//             //验证驳回申请人是否注册
			//             var TempApplyRejectUser;
			//             let TempUserApplyRes = await transaction.collection('PMUser').where({
			//               WXOpenID: _.eq(TempOtherApplyRes.data[i].WXOpenID)
			//             }).get();

			//             if (!TempUserApplyRes.data) {
			//               await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
			//               return;
			//             }
			//             else
			//             {
			//               if(TempUserApplyRes.data.length<=0){ 
			//                 await transaction.rollback("没有找到驳回人信息！请重试！"); //回滚事务
			//                 return;
			//               }
			//               else{
			//                 TempApplyRejectUser=TempUserApplyRes.data[0];
			//               }

			//             }


			//               //#region 1.判断制程通助手和驳回申请人是否有聊天组、新增发送给申请人的驳回通知记录
			//               var TempChatGroupApplyID2=""//制程通助手和批准申请人的聊天组_id
			//               const TempChatGroupRes2 = await transaction.collection('ZCTChatGroup').where({
			//                 ZCTCommunicatorsUserId: _.eq(TempApplyRejectUser._id),  //沟通人（此时是批准申请人）
			//                 ZCTSponsorUserId: _.eq("ZCTAssistant")  //发起人（此时是制程通助手）
			//               }).get();
			//               if (!TempChatGroupRes2.data) {
			//                 await transaction.rollback("获取驳回申请人和制程通助手聊天组失败"); //回滚事务
			//                 return;
			//               } else {
			//                 if (TempChatGroupRes2.data.length > 0) {
			//                    //制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
			//                    TempChatGroupApplyID2=TempChatGroupRes2.data[0]._id
			//                 }
			//                 else
			//                 {
			//                  //制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
			//                   var TempRecordChatGroupList = {
			//                     ZCTCommunicatorsUserId:TempApplyRejectUser._id,
			//                     ZCTSponsorUserId:"ZCTAssistant"
			//                   }
			//                   const TempAddChatGroupRes2 = await transaction.collection("ZCTChatGroup").add({
			//                     data: TempRecordChatGroupList
			//                   })
			//                   if (TempAddChatGroupRes2.errMsg != "collection.add:ok") {
			//                     await transaction.rollback("创建制程通助手和批准申请人聊天组失败"); //回滚事务
			//                     return;
			//                   }
			//                   TempChatGroupApplyID2=TempAddChatGroupRes2._id//获取聊天组_id 
			//                 }
			//               }
			//               //新增批准申请人的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			//               var TempZCTCommunicateRecordList = {
			//                 ZCTGroupId: TempChatGroupApplyID2,//聊天组ID
			//                 ZCTAvatar: "",//头像(此时是制程通助手头像)
			//                 ZCTUserid: "ZCTAssistant",//openid（此时是制程通助手id）
			//                 ZCTNickName: "制程通助手",
			//                 ZCTMsgType: "notice",//notice:通知
			//                 ZCTtextContent: "",
			//                 ZCTSendTime: new Date(),
			//                 ZCTSendTimeTS: Date.now(),
			//                 ZCTMESMsg:{
			//                   ZCTMESTheme:"审核",//主题（现只有审核类消息通知（审核：Approval））
			//                   ZCTMESMSG:""+TempApplyRejectUser.PMUserName+"申请"+funcPra.ZCTTaskID+"任务，已审批",//内容（此为文本提示 为产生消息部分进行拼接写入）
			//                   ZCTMESTime:new Date(),//消息产生时间
			//                   ZCTMESURL:"",//链接界面名称（根据此字段，点击界面通知调转至不同界面）
			//                   ZCTMESState:"批准",//消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
			//                   ZCTMESTaskID:funcPra.ZCTTaskID,//消息关联任务编号（若主题为Approval，既为审核任务主键编号）
			//                   ZCTMESCreater:funcPra.WxContext0PENID,//新增消息人员电话编号
			//                 }
			//               }
			//               const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord").add({
			//                 data: TempZCTCommunicateRecordList
			//               })
			//               if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
			//                 await transaction.rollback("创建制程通助手和驳回申请人沟通记录失败"); //回滚事务
			//                 return;
			//               }
			//               //#endregion


			//               //#region 2.新增发送给授权人的驳回通知记录
			//               var TempZCTCommunicateRecordList = {
			//                 ZCTGroupId: TempChatGroupAuthorizationID,//聊天组ID
			//                 ZCTAvatar: "",//头像(此时是制程通助手头像)后续给一个固定头像
			//                 ZCTUserid: "ZCTAssistant",//openid（此时是制程通助手id）
			//                 ZCTNickName: "制程通助手",
			//                 ZCTMsgType: "notice",//notice:通知
			//                 ZCTtextContent: "",
			//                 ZCTSendTime: new Date(),
			//                 ZCTSendTimeTS: Date.now(),
			//                 ZCTMESMsg:{
			//                   ZCTMESTheme:"审核",//主题（现只有审核类消息通知（审核：Approval））
			//                   ZCTMESMSG:""+TempApplyRejectUser.PMUserName+"申请"+funcPra.ZCTTaskID+"任务，已审批",//内容（此为文本提示 为产生消息部分进行拼接写入）
			//                   ZCTMESTime:new Date(),//消息产生时间
			//                   ZCTMESURL:"../ApplicationRecordPage/ApplicationRecordPage",//链接界面名称（根据此字段，点击界面通知调转至不同界面）
			//                   ZCTMESState:"驳回",//消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
			//                   ZCTMESTaskID:funcPra.ZCTTaskID,//消息关联任务编号（若主题为Approval，既为审核任务主键编号）
			//                   ZCTMESCreater:funcPra.WxContext0PENID,//新增消息人员电话编号
			//                 }
			//               }
			//               const TempAddZCTCommunicateRecordAuthRes = await transaction.collection("ZCTCommunicateRecord").add({
			//                 data: TempZCTCommunicateRecordList
			//               })
			//               if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
			//                 await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
			//                 return;
			//               }
			//               //#endregion
			//             }
			//           }
			// //#endregion
			//#endregion

			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}







/**
 * Creator:SE24,Date:2021-3-13 14:03:14
 * 执行功能：驳回申请记录
 * @param {object} funcPra 
 * @param {object} _ 
 */
async function RejectApplicationRecord(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证申请记录_Id
	if (pmJSTools.IsNullOrEmpty(funcPra.RecordId)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:RecordId参数为空"
		return TempResObject;
	}
	//申请记录类型
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTApplicationType)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:ZCTApplicationType参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})

	//验证申请人是否注册
	var TempApplyUser;
	if (pmJSTools.IsNullOrEmpty(funcPra.OptionPMUserID) && pmJSTools.IsNullOrEmpty(funcPra.OptionWXOpenID)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:申请人参数为空"
		return TempResObject;
	}
	let TempUserRes = await CloudDB.collection('PMUser').where(_.or([{
			WXOpenID: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
		},
		{
			_id: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
		}
	])).get();
	if (TempUserRes.data.length == 0) {
		TempResObject.errMsg = "当前任务申请人未进行工友登记，不可进行任务授权"
		return TempResObject;
	} else {
		TempApplyUser = TempUserRes.data[0];
	}

	var TempZCTUserName; //制程通助手的中文名字
	var TempZCT_id; //制程通助手的_id
	var TempZCTUserPhoto; //制程通助手的图片
	TempUserRes = await CloudDB.collection('PMUser')
		.where({
			PMUserID: _.eq("ZCTAssistant")
		}).get();

	if (TempUserRes.data.length > 0) {
		TempZCTUserName = TempUserRes.data[0].PMUserName
		TempZCT_id = TempUserRes.data[0]._id
		TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}


	var PMInnerProductName = "";
	var TempZCTTaskRes = await CloudDB.collection('PMPCustomerOrderItem')
		.where({
			_id: _.eq(funcPra.ZCTTaskID)
		}).get();

	if (TempZCTTaskRes.data.length > 0) {
		PMInnerProductName = TempZCTTaskRes.data[0].PMInnerProductName
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}

	var TempPageType = ""
	var TempdataType = ""
	if (funcPra.PageType == "完工") {
		TempPageType = "完工申请的"
		TempdataType = "Finished"
	} else {
		TempPageType = "申请的"
		TempdataType = "Authorize"
	}

	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempApplyRes = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.eq(funcPra.RecordId),
				ZCTHandleResult: _.eq("")
			}).get();
			if (!TempApplyRes.data) {
				await transaction.rollback("获取当前申请记录失败"); //回滚事务
				return;
			} else {
				if (TempApplyRes.data.length <= 0) {
					await transaction.rollback("当前记录已操作"); //回滚事务
					return;
				}
			}
			//查询COI是否存在
			const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').doc(funcPra
				.ZCTTaskID).get();
			if (!TempCOIRes.data) {
				await transaction.rollback("获取当前任务信息失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("当前任务不存在"); //回滚事务
					return;
				}
			}
			var TempOptionCOI = TempCOIRes.data;
			//获取操作人信息
			var TempPMUserAuth
			const TempPMUserRes = await transaction.collection('PMUser').where({
				WXOpenID: _.eq(funcPra.WxContext0PENID)
			}).get();
			if (!TempPMUserRes.data) {
				await transaction.rollback("获取当前操作人数据失败"); //回滚事务
				return;
			} else {
				if (TempPMUserRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempPMUserAuth = TempPMUserRes.data[0];
				} else {
					await transaction.rollback("获取当前操作人数据失败"); //回滚事务
					return;
				}
			}
			if (funcPra.OptionWXOpenID != TempOptionCOI._openid && TempPMUserAuth.PMUserID !=
				TempOptionCOI.PMCreater) {
				await transaction.rollback("非任务创建人，无此操作权限");
				return;
			}

			//查询MyCOI是否存在(根据COIId)
			// const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where({
			//   ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			// }).get()
			const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where(_.or([{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					_openid: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
				},
				{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					PMUserID: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
				}
			])).get()
			var TempMyCOIId = "";
			if (!TempMyCOIRes.data) {
				await transaction.rollback("获取对方的任务失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("对方还未将当前任务添加到自己的任务中"); //回滚事务
					return;
				} else {
					TempMyCOIId = TempMyCOIRes.data[0]._id;
				}

			}
			//修改此申请记录审核结果
			var TempApplyResult = await transaction.collection("ZCTApplicationRecord").doc(funcPra
				.RecordId).update({
				data: {
					ZCTHandleDate: new Date(),
					ZCTHandleResult: "NOK", //    处理结果（OK:同意，NOK:驳回）
					ZCTHandleDescribe: funcPra.AcceptanceDescribe, //驳回描述
				}
			})
			if (TempApplyResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//修改COI状态为拒绝/退回授权
			if (funcPra.ZCTApplicationType == "Finished") {
				//完工申请时，驳回修改COI状态为ALLOWED授权
				var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
					.ZCTTaskID).update({
					data: {
						PMOrderState: "ALLOWED", //ALLOWED:退回授权[完工申请])
						ZCTApplicationCount: _.inc(-1), //任务申请数减1
					}
				})
				if (TempCOIResult.stats.updated <= 0) {
					await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
					return;
				}
			} else {
				//授权申请时，驳回扣减已申请数
				var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
					.ZCTTaskID).update({
					data: {
						ZCTApplicationCount: _.inc(-1), //任务申请数减1
					}
				})
				if (TempCOIResult.stats.updated <= 0) {
					await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
					return;
				}
			}
			//修改MyCOI状态为REFUSED/RETURN:拒绝/退回
			var TempMyCOIResult = await transaction.collection("ZCTMyPMCOIList").doc(TempMyCOIId)
				.update({
					data: {
						ZCTTaskState: funcPra.ZCTApplicationType == "Authorize" ? "REFUSED" :
							"RETURN", //订单状态(RETURN:退回[完工申请])
						ZCTChangeTime: new Date()
					}
				})
			if (TempMyCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}





			//#region  【添加通知消息】生成驳回的通知消息--通知申请人
			//判断制程通助手和申请人之间有没有聊天组ZCTChatGroup


			var TempChatGroupApplyID = "" //制程通助手和申请人的聊天组_id
			const TempChatGroupRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //发起人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempApplyUser._id) //沟通人（此时是申请人）
			}).get();
			if (!TempChatGroupRes.data) {
				await transaction.rollback("获取申请人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupRes.data.length > 0) {
					//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupApplyID = TempChatGroupRes.data[0]._id

					if (TempChatGroupRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempApplyUser._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "您" + TempPageType + PMInnerProductName +
							"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和申请人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupApplyID = TempAddChatGroupRes._id //获取聊天组_id 
				}
			}
			//生成驳回的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupApplyID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
						"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuth._id, //新增消息人员电话编号
					ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord")
				.add({
					data: TempZCTCommunicateRecordList
				})
			if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion


			//#region 【添加通知消息】生成驳回的通知消息--通知授权人

			//判断制程通助手和授权人之间有没有聊天组ZCTChatGroup
			var TempChatGroupAuthorizationID = "" //制程通助手和授权人的聊天组_id
			const TempChatGroupAuthRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempPMUserAuth._id) //发起人（此时是授权人）
			}).get();
			if (!TempChatGroupAuthRes.data) {
				await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupAuthRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupAuthorizationID = TempChatGroupAuthRes.data[0]._id
					if (TempChatGroupAuthRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupAuthRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和授权人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempPMUserAuth._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
							PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupAuthRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和授权人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupAuthorizationID = TempAddChatGroupAuthRes._id //获取聊天组_id 
				}
			}
			//生成驳回的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知授权人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "" + TempApplyUser.PMUserName + TempPageType + PMInnerProductName +
						"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuth._id, //新增消息人员电话编号
					ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
				"ZCTCommunicateRecord").add({
				data: TempZCTCommunicateRecordList
			})
			if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion

			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = "驳回失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}


async function DYRejectApplicationRecord(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证申请记录_Id
	if (pmJSTools.IsNullOrEmpty(funcPra.RecordId)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:RecordId参数为空"
		return TempResObject;
	}
	//申请记录类型
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTApplicationType)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:ZCTApplicationType参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})

	//验证申请人是否注册
	var TempApplyUser;
	if (pmJSTools.IsNullOrEmpty(funcPra.OptionPMUserID) && pmJSTools.IsNullOrEmpty(funcPra.OptionWXOpenID)) {
		TempResObject.errMsg = "ApprovalApplicationRecord:申请人参数为空"
		return TempResObject;
	}
	let TempUserRes = await CloudDB.collection('PMUser').where(_.or([{
			WXOpenID: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
		},
		{
			_id: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
		}
	])).get();
	if (TempUserRes.data.length == 0) {
		TempResObject.errMsg = "当前任务申请人未进行工友登记，不可进行任务授权"
		return TempResObject;
	} else {
		TempApplyUser = TempUserRes.data[0];
	}

	var TempZCTUserName; //制程通助手的中文名字
	var TempZCT_id; //制程通助手的_id
	var TempZCTUserPhoto; //制程通助手的图片
	TempUserRes = await CloudDB.collection('PMUser')
		.where({
			PMUserID: _.eq("ZCTAssistant")
		}).get();

	if (TempUserRes.data.length > 0) {
		TempZCTUserName = TempUserRes.data[0].PMUserName
		TempZCT_id = TempUserRes.data[0]._id
		TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}

	var TempZCTUserName; //制程通助手的中文名字
	var TempZCT_id; //制程通助手的_id
	var TempZCTUserPhoto; //制程通助手的图片
	TempUserRes = await CloudDB.collection('PMUser')
		.where({
			PMUserID: _.eq("ZCTAssistant")
		}).get();

	if (TempUserRes.data.length > 0) {
		TempZCTUserName = TempUserRes.data[0].PMUserName
		TempZCT_id = TempUserRes.data[0]._id
		TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}


	var PMInnerProductName = "";
	var TempZCTTaskRes = await CloudDB.collection('PMPCustomerOrderItem')
		.where({
			_id: _.eq(funcPra.ZCTTaskID)
		}).get();

	if (TempZCTTaskRes.data.length > 0) {
		PMInnerProductName = TempZCTTaskRes.data[0].PMInnerProductName
	} else {
		TempResObject.errMsg = "未找到制程通助手信息，请重试！"
		return TempResObject;
	}

	var TempPageType = ""
	var TempdataType = ""
	if (funcPra.PageType == "完工") {
		TempPageType = "完工申请的"
		TempdataType = "Finished"
	} else {
		TempPageType = "申请的"
		TempdataType = "Authorize"
	}

	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempApplyRes = await transaction.collection('ZCTApplicationRecord').where({
				_id: _.eq(funcPra.RecordId),
				ZCTHandleResult: _.eq("")
			}).get();
			if (!TempApplyRes.data) {
				await transaction.rollback("获取当前申请记录失败"); //回滚事务
				return;
			} else {
				if (TempApplyRes.data.length <= 0) {
					await transaction.rollback("当前记录已操作"); //回滚事务
					return;
				}
			}
			//查询COI是否存在
			const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').doc(funcPra
				.ZCTTaskID).get();
			if (!TempCOIRes.data) {
				await transaction.rollback("获取当前任务信息失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("当前任务不存在"); //回滚事务
					return;
				}
			}
			TempUserRes = await CloudDB.collection('PMUser')
				.where({
					PMUserID: _.eq(funcPra.OptionPMUserID)
				}).get();

			if (TempUserRes.data.length > 0) {
				TempZCTUserName = TempUserRes.data[0].PMUserName
				TempZCT_id = TempUserRes.data[0]._id
				TempZCTUserPhoto = TempUserRes.data[0].ZCTUserPhoto
			} else {
				TempResObject.errMsg = "未找到制程通助手信息，请重试！"
				return TempResObject;
			}

			// var TempOptionCOI=TempCOIRes.data;
			// if(funcPra.OptionWXOpenID!=TempOptionCOI._openid){
			//   await transaction.rollback("非任务创建人，无此操作权限"); 
			//   return;
			// }

			//查询MyCOI是否存在(根据COIId)
			// const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where({
			//   ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID)
			// }).get()
			const TempMyCOIRes = await transaction.collection('ZCTMyPMCOIList').where(_.or([{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					_openid: _.and(_.neq(""), _.eq(funcPra.OptionWXOpenID))
				},
				{
					ZCTPMCOI_id: _.eq(funcPra.ZCTTaskID),
					PMUserID: _.and(_.neq(""), _.eq(funcPra.OptionPMUserID))
				}
			])).get()
			var TempMyCOIId = "";
			if (!TempMyCOIRes.data) {
				await transaction.rollback("获取对方的任务失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("对方还未将当前任务添加到自己的任务中"); //回滚事务
					return;
				} else {
					TempMyCOIId = TempMyCOIRes.data[0]._id;
				}

			}
			//修改此申请记录审核结果
			var TempApplyResult = await transaction.collection("ZCTApplicationRecord").doc(funcPra
				.RecordId).update({
				data: {
					ZCTHandleDate: new Date(),
					ZCTHandleResult: "NOK", //    处理结果（OK:同意，NOK:驳回）
					ZCTHandleDescribe: funcPra.AcceptanceDescribe, //驳回描述
				}
			})
			if (TempApplyResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			//修改COI状态为拒绝/退回授权
			if (funcPra.ZCTApplicationType == "Finished") {
				//完工申请时，驳回修改COI状态为ALLOWED授权
				var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
					.ZCTTaskID).update({
					data: {
						PMOrderState: "ALLOWED", //ALLOWED:退回授权[完工申请])
						ZCTApplicationCount: _.inc(-1), //任务申请数减1
					}
				})
				if (TempCOIResult.stats.updated <= 0) {
					await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
					return;
				}
			} else {
				//授权申请时，驳回扣减已申请数
				var TempCOIResult = await transaction.collection("PMPCustomerOrderItem").doc(funcPra
					.ZCTTaskID).update({
					data: {
						ZCTApplicationCount: _.inc(-1), //任务申请数减1
					}
				})
				if (TempCOIResult.stats.updated <= 0) {
					await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
					return;
				}
			}
			//修改MyCOI状态为REFUSED/RETURN:拒绝/退回
			var TempMyCOIResult = await transaction.collection("ZCTMyPMCOIList").doc(TempMyCOIId)
				.update({
					data: {
						ZCTTaskState: funcPra.ZCTApplicationType == "Authorize" ? "REFUSED" :
							"RETURN", //订单状态(RETURN:退回[完工申请])
						ZCTChangeTime: new Date()
					}
				})
			if (TempMyCOIResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}





			//#region  【添加通知消息】生成驳回的通知消息--通知申请人
			//判断制程通助手和申请人之间有没有聊天组ZCTChatGroup
			var TempPMUserAuth
			const TempPMUserRes = await transaction.collection('PMUser').where({
				WXOpenID: _.eq(funcPra.OptionWXOpenID)
			}).get();
			if (!TempPMUserRes.data) {
				await transaction.rollback("获取当前操作人数据失败"); //回滚事务
				return;
			} else {
				if (TempPMUserRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempPMUserAuth = TempPMUserRes.data[0];
				} else {
					await transaction.rollback("获取当前操作人数据失败"); //回滚事务
					return;
				}
			}

			var TempChatGroupApplyID = "" //制程通助手和申请人的聊天组_id
			const TempChatGroupRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //发起人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempApplyUser._id) //沟通人（此时是申请人）
			}).get();
			if (!TempChatGroupRes.data) {
				await transaction.rollback("获取申请人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupRes.data.length > 0) {
					//制程通助手和申请人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupApplyID = TempChatGroupRes.data[0]._id

					if (TempChatGroupRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "您" + TempPageType + PMInnerProductName +
									"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和申请人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempApplyUser._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "您" + TempPageType + PMInnerProductName +
							"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和申请人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupApplyID = TempAddChatGroupRes._id //获取聊天组_id 
				}
			}
			//生成驳回的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知申请人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupApplyID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "您" + TempPageType + PMInnerProductName +
						"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuth._id, //新增消息人员电话编号
					ZCTJumpType: "ApplyRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordRes = await transaction.collection("ZCTCommunicateRecord")
				.add({
					data: TempZCTCommunicateRecordList
				})
			if (TempAddZCTCommunicateRecordRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion


			//#region 【添加通知消息】生成驳回的通知消息--通知授权人

			//判断制程通助手和授权人之间有没有聊天组ZCTChatGroup
			var TempChatGroupAuthorizationID = "" //制程通助手和授权人的聊天组_id
			const TempChatGroupAuthRes = await transaction.collection('ZCTChatGroup').where({
				ZCTCommunicatorsUserId: _.eq(TempZCT_id), //沟通人（此时是制程通助手）
				ZCTSponsorUserId: _.eq(TempPMUserAuth._id) //发起人（此时是授权人）
			}).get();
			if (!TempChatGroupAuthRes.data) {
				await transaction.rollback("获取授权人和制程通助手聊天组失败"); //回滚事务
				return;
			} else {
				if (TempChatGroupAuthRes.data.length > 0) {
					//制程通助手和授权人之间有聊天组ZCTChatGroup，获取聊天组_id
					TempChatGroupAuthorizationID = TempChatGroupAuthRes.data[0]._id
					if (TempChatGroupAuthRes.data[0].ZCTSponsorState == "NO") {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
								ZCTSponsorUnreadNum: TempChatGroupAuthRes.data[0]
									.ZCTSponsorUnreadNum + 1 //修改沟通人未读数
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					} else {
						//修改聊天组的时间和ZCTtextContent
						var TempUpdateCGResult = await transaction.collection("ZCTChatGroup").doc(
							TempChatGroupAuthRes.data[0]._id).update({
							data: {
								ZCTNewestTime: new Date(),
								ZCTNewestTimeTS: Date.now(),
								ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
									PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
							}
						})
						if (TempUpdateCGResult.stats.updated <= 0) {
							await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
							return;
						}

					}

				} else {
					//制程通助手和授权人之间没有有聊天组ZCTChatGroup，需要生成聊天组数据，并获取聊天组_id  
					var TempRecordChatGroupList = {
						ZCTCommunicatorsUserId: TempZCT_id,
						ZCTSponsorUserId: TempPMUserAuth._id,
						ZCTNewestTime: new Date(),
						ZCTNewestTimeTS: Date.now(),
						ZCTtextContent: "" + TempApplyUser.PMUserName + TempPageType +
							PMInnerProductName + "任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
						ZCTCommunicatorUnreadNum: 0, //发起人未读消息条数
						ZCTSponsorUnreadNum: 1, //沟通人未读消息条数
						ZCTCommunicatorsState: "NO", //发起人聊天页面浏览状态【YES】
						ZCTSponsorState: "NO", //沟通人聊天页面浏览状态【YES】
					}
					const TempAddChatGroupAuthRes = await transaction.collection("ZCTChatGroup").add({
						data: TempRecordChatGroupList
					})
					if (TempAddChatGroupAuthRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建制程通助手和授权人聊天组失败"); //回滚事务
						return;
					}
					TempChatGroupAuthorizationID = TempAddChatGroupAuthRes._id //获取聊天组_id 
				}
			}
			//生成驳回的通知消息(生成沟通记录数据---ZCTCommunicateRecord表数据)--通知授权人
			var TempZCTCommunicateRecordList = {
				ZCTGroupId: TempChatGroupAuthorizationID, //聊天组ID
				ZCTAvatar: TempZCTUserPhoto, //头像(此时是制程通助手头像)后续给一个固定头像
				ZCTUserid: TempZCT_id, //openid（此时是制程通助手id）
				ZCTNickName: TempZCTUserName,
				ZCTMsgType: "notice", //notice:通知
				ZCTtextContent: "",
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
				ZCTMESMsg: {
					ZCTMESTheme: "Approval", //主题（现只有审核类消息通知（审核：Approval））
					ZCTMESMSG: "" + TempApplyUser.PMUserName + TempPageType + PMInnerProductName +
						"任务，已驳回", //内容（此为文本提示 为产生消息部分进行拼接写入）
					ZCTMESTime: new Date(), //消息产生时间
					ZCTMESURL: "../ApplicationRecordPage/ApplicationRecordPage", //链接界面名称（根据此字段，点击界面通知调转至不同界面）
					ZCTMESState: "驳回", //消息通知状态（若主题为Approval，进行相关审核操作时。需回改此状态，即批准与驳回，默认状态为待处理）
					ZCTMESTaskID: funcPra.ZCTTaskID, //消息关联任务编号（若主题为Approval，既为审核任务主键编号）
					ZCTMESCreater: TempPMUserAuth._id, //新增消息人员电话编号
					ZCTJumpType: "ExamineRecord", //跳转类型ApplyRecord  / ExamineRecord
					ZCTJumpParameters: { //跳转参数
						dataType: TempdataType, //数据类型(Authorize:授权申请；Finished：完工申请)【授权/完工申请】
						ZCTTaskID: TempZCTTaskRes.data[0]._id, //COI的_id【授权/完工申请】
						ZCTUserID: TempApplyUser._id, //沟通人对象用户Id【授权/完工申请】
						ZCTIsNewsJump: true, //是否是消息跳转（true/flase）【授权/完工申请】
						PMInnerProductName: TempZCTTaskRes.data[0]
							.PMInnerProductName, //产品名【授权/完工申请】
						PMOrderNum: TempZCTTaskRes.data[0].PMOrderNum, //需求数量【授权/完工申请】
						PMOrderUnit: TempZCTTaskRes.data[0].PMOrderUnit, //单位【授权/完工申请】
						ZCTCOICreator: TempZCTTaskRes.data[0].PMCreater, //COI创建人PMUserID【授权/完工申请】
					}
				}
			}
			const TempAddZCTCommunicateRecordAuthRes = await transaction.collection(
				"ZCTCommunicateRecord").add({
				data: TempZCTCommunicateRecordList
			})
			if (TempAddZCTCommunicateRecordAuthRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建制程通助手和申请人沟通记录失败"); //回滚事务
				return;
			}
			//#endregion

			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = "驳回失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}


////////////////////////////////////////////////////////
//子函数： 更新最新的经纬度///
async function SeNewLongitude(ZCTNewlongitude, ZCTNewlatitude, TempUserID, TempType, wxContext) {
	const db = uniCloud.database({
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	}) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
	const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
	var ResData = {
		errMsg: "",
		result: []
	};

	if (pmJSTools.IsNullOrEmpty(ZCTNewlongitude)) {
		ResData.errMsg = "SeNewLongitude:最新经度为空"
		ResData.result = []
		return ResData
	}
	if (pmJSTools.IsNullOrEmpty(ZCTNewlatitude)) {
		ResData.errMsg = "SeNewLongitude:最新纬度为空"
		ResData.result = []
		return ResData
	}
	var TempdataList = []
	switch (TempType) {
		case "PMCOIAddNew":
			TempdataList = [{
				_id: TempUserID,
				ZCTNewlatitude: ZCTNewlatitude,
				ZCTNewlongitude: ZCTNewlongitude,
				ZCTNewLocation: {
					type: 'Point',
					coordinates: [ZCTNewlatitude, ZCTNewlongitude]
				},
			}]
			break;
		case "PMCOIPublish":

			const db = uniCloud.database({
				env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
			}) //*制程规定客户端并不允许直接使用数据库，但是一些属于command的指令如_.eq，没有command对象编译不通过
			const _ = db.command //*临时建一个command对象给_ 这样 _eq就可以传给云函数执行。定义_ 表示db.command
			try {
				const CloudDB = uniCloud.database({
					throwOnNotFound: false,
					env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
				})
				const TempResult = await CloudDB.runTransaction(async transaction => {
					var TempresultCOI = await transaction.collection("PMUser").doc(TempUserID).update({
						data: {
							ZCTReleaseNum: _.inc(1),
						}
					})
					if (TempresultCOI.stats.updated > 0) {} else {
						var ResData = {
							errMsg: "更新影响行为0，可能是权限原因造成的。",
							result: []
						}
						return ResData
					}
				})
			} catch (e) {
				var ResData = {
					errMsg: "PMCOIPublish:" + e,
					result: []
				}
				return ResData
			}
			var ResData = {
				errMsg: "OK",
				result: []
			}
			var TempSerResData = pmJSTools.getResFromReturn(ResData)
			return TempSerResData;



			break;
		default:
			break;
	}
	//准备条件新建  
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			[{
				exeType: "update",
				collectionName: "PMUser",
				dataList: TempdataList
			}],
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
			[],
		CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
	}
	return pmJSTools.callFunctionRes(cloud, DBExeData);


}

/**
 * Creator:SE24,Date:2021-4-1 16:51:57
 * 根据COIId获取COI详细信息
 * @param {Object} funcPra 参数对象
 * @param {Object} _ command对象
 * @param {Object} TempOperatorOPENID 操作者OpenId
 */
async function GetPMCOIDetailsById(funcPra, _, TempOperatorOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.PMCOIID)) {
		TempResObject.errMsg = "GetPMCOIDetailsById:PMCOIID参数为空"
		return TempResObject;
	}

	//从数据库获取交付任务清单
	var DBConditions = //查询多个集合的表达方法
		[{
			collectionsName: "PMPCustomerOrderItem", //目标集合名数组
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
			whereConditions: {
				_id: _.eq(funcPra.PMCOIID),
				ZCTIsDeleted: _.neq("YES")
			}, //{PMUserID:_.eq("4T43T")},  //查询条件
			skipAndLimit: [0, 1], //从第几个查询起,最多查询多少.第一个是skip值，
			//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
			orderByConditions: [
				["_id", "desc"],
			] //字段名和排列顺序， 多个先后排列
		}]
	var resData = await cloud.callFunction //await调用远程云函数
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},
	})
	var TempCOIData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	TempResObject.errMsg = TempCOIData.errMsg;
	if (TempCOIData.errMsg != "OK") { //查询出错
		TempResObject.errMsg = TempCOIData.errMsg;
		return TempResObject;
	} else if (pmJSTools.IsNullOrEmpty(TempCOIData.result)) { //查询到的数据为空
		TempResObject.errMsg = "NoData";
		TempResObject.result = [];
		return TempResObject;
	}
	//查询到的COI数据
	var TempPMCOI = TempCOIData.result[0][0];
	TempPMCOI.MyOpenid = TempOperatorOPENID; //保存当前查看人的Openid，用于比较跟当前任务的关系
	if (TempCOIData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempPMCOI.PMCreater)) { //COI创建人不为空
		//从数据库获取创建人信息
		DBConditions = //查询参数
			[{
				collectionsName: "PMUser", //目标集合名数组
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
				whereConditions: {
					PMUserID: _.eq(TempPMCOI.PMCreater)
				}, //查询条件
				skipAndLimit: [0, 1], //从第几个查询起,最多查询多少.第一个是skip值，
				//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
				orderByConditions: [
					["WXLastBindTime", "desc"],
				] //字段名和排列顺序， 多个先后排列
			}]
		var TempUserResData = await cloud.callFunction //await调用远程云函数
		({
			name: 'getCollectionsFromServer',
			data: {
				DBConditions,
			},
		})
		var TempUserData = pmJSTools.getResFromReturn(
			TempUserResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
		if (TempUserData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempUserData.result)) { //查到创建人数据
			if (!pmJSTools.IsNullOrEmpty(TempUserData.result[0])) { //查询成功且有数据
				TempPMCOI.CreatorId = TempUserData.result[0][0]._id; //创建人用户表_Id
				TempPMCOI.CreatorName = TempUserData.result[0][0].PMUserName; //创建人姓名
				TempPMCOI.CreatorSex = TempUserData.result[0][0].ZCTUserSex; //创建人性别
				TempPMCOI.CreatorJobType = TempUserData.result[0][0].ZCTJobType; //创建人工种
				TempPMCOI.CreatorPMPhoneNB = TempUserData.result[0][0].PMPhoneNB; //创建人电话
				TempPMCOI.CreatorPhoto = TempUserData.result[0][0].ZCTUserPhoto; //创建人头像
				TempPMCOI.CreatorReleaseNum = TempUserData.result[0][0].ZCTReleaseNum; //创建人发布次数
				TempPMCOI.CreatorInspectedNum = TempUserData.result[0][0].ZCTReleaseAcceNum; //创建人发布验收次数
				TempPMCOI.CreatorReceiveOrderNum = TempUserData.result[0][0].ZCTReceiveOrderNum; //创建人接单数
				TempPMCOI.CreatorDeliveryAcceNum = TempUserData.result[0][0].ZCTDeliveryAcceNum; //创建人交付验收数
				if (!pmJSTools.IsNullOrEmpty(TempUserData.result[0][0].ZCTBirthYear)) //出生年份不为空，计算年龄
				{
					var TempNowDate = new Date();
					var TempNowDateYear = TempNowDate.getUTCFullYear(); //获取年份         
					TempPMCOI.CreatorAge = pmJSTools.GetNum(TempNowDateYear) - pmJSTools.GetNum(TempUserData.result[
						0][0].ZCTBirthYear); //创建人年龄
				} else {
					TempPMCOI.CreatorAge = ""; //创建人年龄
				}
			} else { //查询成功无数据
				TempPMCOI.CreatorName = ""; //创建人姓名
				TempPMCOI.CreatorSex = ""; //创建人性别
				TempPMCOI.CreatorJobType = ""; //创建人工种
				TempPMCOI.CreatorPMPhoneNB = ""; //创建人电话
				TempPMCOI.CreatorPhoto = ""; //创建人头像
				TempPMCOI.CreatorReleaseNum = 0; //创建人发布次数
				TempPMCOI.CreatorInspectedNum = 0; //创建人验收次数
				TempPMCOI.CreatorReceiveOrderNum = 0; //创建人接单数
				TempPMCOI.CreatorDeliveryAcceNum = 0; //创建人交付验收数
				TempPMCOI.CreatorAge = ""; //创建人年龄
			}
		} else if (TempUserData.errMsg != "OK") { //查询失败
			TempPMCOI.CreatorName = "获取失败"; //创建人姓名
			TempPMCOI.CreatorSex = ""; //创建人性别
			TempPMCOI.CreatorJobType = ""; //创建人工种
			TempPMCOI.CreatorPMPhoneNB = ""; //创建人电话
			TempPMCOI.CreatorPhoto = ""; //创建人头像
			TempPMCOI.CreatorReleaseNum = 0; //创建人发布次数
			TempPMCOI.CreatorInspectedNum = 0; //创建人验收次数
			TempPMCOI.CreatorReceiveOrderNum = 0; //创建人接单数
			TempPMCOI.CreatorDeliveryAcceNum = 0; //创建人交付验收数
			TempPMCOI.CreatorAge = ""; //创建人年龄
		} else {
			TempPMCOI.CreatorName = ""; //创建人姓名
			TempPMCOI.CreatorSex = ""; //创建人性别
			TempPMCOI.CreatorJobType = ""; //创建人工种
			TempPMCOI.CreatorPMPhoneNB = ""; //创建人电话
			TempPMCOI.CreatorPhoto = ""; //创建人头像
			TempPMCOI.CreatorReleaseNum = 0; //创建人发布次数
			TempPMCOI.CreatorInspectedNum = 0; //创建人验收次数
			TempPMCOI.CreatorReceiveOrderNum = 0; //创建人接单数
			TempPMCOI.CreatorDeliveryAcceNum = 0; //创建人交付验收数
			TempPMCOI.CreatorAge = ""; //创建人年龄
		}
	}
	//查询MyCOI数据，获取MyCOIId
	DBConditions = //查询参数
		[{
			collectionsName: "ZCTMyPMCOIList", //目标集合名数组
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
			whereConditions: {
				ZCTPMCOI_id: _.eq(funcPra.PMCOIID),
				_openid: _.eq(TempOperatorOPENID),
			}, //查询条件
			skipAndLimit: [0, 20], //从第几个查询起,最多查询多少.第一个是skip值，
			//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
			orderByConditions: [
				["ZCTChangeTime", "desc"],
			] //字段名和排列顺序， 多个先后排列
		}];
	var TempMyCOIResData = await cloud.callFunction //await调用远程云函数
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},
	})
	var TempMyCOIData = pmJSTools.getResFromReturn(
		TempMyCOIResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	if (TempMyCOIData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempMyCOIData.result)) {
		if (!pmJSTools.IsNullOrEmpty(TempMyCOIData.result[0])) {
			TempPMCOI.MyCOIID = TempMyCOIData.result[0][0]._id; //授权申请记录     
		} else {
			TempPMCOI.MyCOIID = ""; //授权申请记录
		}
	} else { //查询到的数据为空,或查询失败
		TempPMCOI.MyCOIID = ""; //授权申请记录
	}
	//获取自己对此任务的授权申请记录
	DBConditions = //查询参数
		[{
			collectionsName: "ZCTApplicationRecord", //目标集合名数组
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
			whereConditions: {
				ZCTTaskID: _.eq(TempPMCOI._id),
			}, //查询条件
			skipAndLimit: [0, 20], //从第几个查询起,最多查询多少.第一个是skip值，
			//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
			orderByConditions: [
				["ZCTApplicationDate", "desc"],
			] //字段名和排列顺序， 多个先后排列
		}];
	var TempAuthorizeResData = await cloud.callFunction //await调用远程云函数
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},
	})
	var TempAuthorizeData = pmJSTools.getResFromReturn(
		TempAuthorizeResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	TempPMCOI.InvestorList = []; //已授权人集合
	TempPMCOI.FinishedList = []; //完工申请记录
	var TempInvestorIdArr = []; //授权人Openid集合
	var TempInvestorUserIdArr = []; //授权人Userid集合
	if (TempAuthorizeData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempAuthorizeData.result)) {
		if (!pmJSTools.IsNullOrEmpty(TempAuthorizeData.result[0])) {
			var TempAllApplicationRecord = TempAuthorizeData.result[0]; //此人的所有申请记录
			TempPMCOI.AuthorizeList = []; //授权申请记录
			for (var TempKey in TempAllApplicationRecord) {
				if (TempAllApplicationRecord[TempKey].ZCTApplicationType == "Authorize") {
					TempPMCOI.AuthorizeList.push(TempAllApplicationRecord[TempKey]);
				} else if (TempAllApplicationRecord[TempKey].ZCTApplicationType == "Finished") {
					TempPMCOI.FinishedList.push(TempAllApplicationRecord[TempKey]);
				}
			}
			//TempPMCOI.AuthorizeList = TempAuthorizeData.result[0]; //授权申请记录     
			for (var TempKey in TempPMCOI.AuthorizeList) {
				if (TempPMCOI.AuthorizeList[TempKey].ZCTHandleResult == "OK") {
					if (!pmJSTools.IsNullOrEmpty(TempPMCOI.AuthorizeList[TempKey].WXOpenID)) {
						TempInvestorIdArr.push(TempPMCOI.AuthorizeList[TempKey].WXOpenID); //将已授权人的Openid存入数组，用于一起查询
					}
					if (!pmJSTools.IsNullOrEmpty(TempPMCOI.AuthorizeList[TempKey].PMUserID)) {
						TempInvestorUserIdArr.push(TempPMCOI.AuthorizeList[TempKey]
							.PMUserID); //将已授权人的Userid存入数组，用于一起查询
					}
				}
			}
		} else {
			TempPMCOI.AuthorizeList = []; //授权申请记录
		}
	} else { //查询到的数据为空,或查询失败
		TempPMCOI.AuthorizeList = []; //授权申请记录
	}

	if (!pmJSTools.IsNullOrEmpty(TempInvestorIdArr)) { //已授权人不为空，查询已授权人用户信息
		//从数据库获取创建人信息
		DBConditions = //查询参数
			[{
				collectionsName: "PMUser", //目标集合名数组
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
				whereConditions: {
					WXOpenID: _.in(TempInvestorIdArr)
				}, //查询条件
				skipAndLimit: [0, 20], //从第几个查询起,最多查询多少.第一个是skip值，
				//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
				orderByConditions: [
					["WXLastBindTime", "desc"],
				] //字段名和排列顺序， 多个先后排列
			}]
		var TempInvestorUserResData = await cloud.callFunction //await调用远程云函数
		({
			name: 'getCollectionsFromServer',
			data: {
				DBConditions,
			},
		})
		var TempInvestorUserData = pmJSTools.getResFromReturn(
			TempInvestorUserResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
		if (TempInvestorUserData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempInvestorUserData.result)) {
			if (!pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0])) {
				for (var TempKey in TempInvestorUserData.result[0]) { //为空转换
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReleaseNum))
						TempInvestorUserData.result[0][TempKey].ZCTReleaseNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReleaseAcceNum))
						TempInvestorUserData.result[0][TempKey].ZCTReleaseAcceNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReceiveOrderNum))
						TempInvestorUserData.result[0][TempKey].ZCTReceiveOrderNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTDeliveryAcceNum))
						TempInvestorUserData.result[0][TempKey].ZCTDeliveryAcceNum = 0;
					if (!pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTBirthYear)) {
						var TempNowDate = new Date();
						var TempNowDateYear = TempNowDate.getUTCFullYear(); //获取年份         
						TempInvestorUserData.result[0][TempKey].InvestorAge = pmJSTools.GetNum(TempNowDateYear) -
							pmJSTools.GetNum(TempInvestorUserData.result[0][TempKey].ZCTBirthYear); //授权人年龄
					} else {
						TempInvestorUserData.result[0][TempKey].InvestorAge = "";
					}
				}
				TempPMCOI.InvestorList = TempInvestorUserData.result[0]; //保存已授权人用户信息清单
			}
		}
	}
	if (!pmJSTools.IsNullOrEmpty(TempInvestorUserIdArr)) { //已授权人不为空，查询已授权人用户信息
		//从数据库获取创建人信息
		DBConditions = //查询参数
			[{
				collectionsName: "PMUser", //目标集合名数组
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
				whereConditions: {
					_id: _.in(TempInvestorUserIdArr)
				}, //查询条件
				skipAndLimit: [0, 20], //从第几个查询起,最多查询多少.第一个是skip值，
				//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
				orderByConditions: [
					["WXLastBindTime", "desc"],
				] //字段名和排列顺序， 多个先后排列
			}]
		var TempInvestorUserResData = await cloud.callFunction //await调用远程云函数
		({
			name: 'getCollectionsFromServer',
			data: {
				DBConditions,
			},
		})
		var TempInvestorUserData = pmJSTools.getResFromReturn(
			TempInvestorUserResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
		if (TempInvestorUserData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempInvestorUserData.result)) {
			if (!pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0])) {
				for (var TempKey in TempInvestorUserData.result[0]) { //为空转换
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReleaseNum))
						TempInvestorUserData.result[0][TempKey].ZCTReleaseNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReleaseAcceNum))
						TempInvestorUserData.result[0][TempKey].ZCTReleaseAcceNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTReceiveOrderNum))
						TempInvestorUserData.result[0][TempKey].ZCTReceiveOrderNum = 0;
					if (pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTDeliveryAcceNum))
						TempInvestorUserData.result[0][TempKey].ZCTDeliveryAcceNum = 0;
					if (!pmJSTools.IsNullOrEmpty(TempInvestorUserData.result[0][TempKey].ZCTBirthYear)) {
						var TempNowDate = new Date();
						var TempNowDateYear = TempNowDate.getUTCFullYear(); //获取年份         
						TempInvestorUserData.result[0][TempKey].InvestorAge = pmJSTools.GetNum(TempNowDateYear) -
							pmJSTools.GetNum(TempInvestorUserData.result[0][TempKey].ZCTBirthYear); //授权人年龄
					} else {
						TempInvestorUserData.result[0][TempKey].InvestorAge = "";
					}
				}
				TempPMCOI.InvestorList = TempInvestorUserData.result[0]; //保存已授权人用户信息清单
			}
		}
	}

	//获取自己对此任务的完工申请记录
	// DBConditions = //查询参数
	//   [{
	//     collectionsName: "ZCTApplicationRecord", //目标集合名数组
	//     getFields: {
	//     }, //获取集合中字段名，按顺序对应, ""表示获取全部
	//     whereConditions: {
	//       ZCTTaskID:_.eq(TempPMCOI._id),
	//       ZCTApplicationType:_.eq("Finished"),
	//     },  //查询条件
	//     skipAndLimit: [0,20], //从第几个查询起,最多查询多少.第一个是skip值，
	//     //0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
	//     orderByConditions: [
	//       ["ZCTApplicationDate", "desc"],
	//     ] //字段名和排列顺序， 多个先后排列
	//   }];
	// var TempFinishedDBResData = await cloud.callFunction //await调用远程云函数
	// ({
	//   name: 'getCollectionsFromServer',
	//   data: {
	//     DBConditions,
	//   },
	// })
	// var TempFinishedData = pmJSTools.getResFromReturn(TempFinishedDBResData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	// if(TempFinishedData.errMsg =="OK"&&!pmJSTools.IsNullOrEmpty(TempFinishedData.result)){
	//   if(!pmJSTools.IsNullOrEmpty(TempFinishedData.result[0])){
	//     TempPMCOI.FinishedList = TempFinishedData.result[0]; //完工申请记录
	//   }else{
	//     TempPMCOI.FinishedList = []; //完工申请记录
	//   }  
	// }else {//查询到的数据为空,或查询失败
	//   TempPMCOI.FinishedList = []; //完工申请记录
	// }
	TempResObject.result = TempCOIData.result;
	return TempResObject;
}

/**
 * Creator:SE7,Date:2021-7-20 
 * 执行功能：获取聊天组列表
 * @param {object} funcPra 
 * @param {object} _ 
 * @param {object} TempThisOPENID 
 */
async function GetGroupId(funcPra, _, TempThisOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	TempResObject.result.MyOpenid = TempThisOPENID;
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTCOIID)) {
		TempResObject.errMsg = "GetGroupId:ZCTCOIID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempCOIopenid = "";
			//查询COI是否
			const TempCOIRes = await transaction.collection('PMPCustomerOrderItem').where({
				_id: _.eq(funcPra.ZCTCOIID)
			}).get();
			if (!TempCOIRes.data) {
				await transaction.rollback("获取当前任务记录失败"); //回滚事务
				return;
			} else {
				if (TempCOIRes.data.length <= 0) {
					await transaction.rollback("未找到当前任务发布人"); //回滚事务
					return;
				} else {
					TempCOIopenid = TempCOIRes.data[0]._openid;
				}
			}
			var TempGroupId = "";
			//查询是否已有聊天组
			const TempGroupRes = await transaction.collection('ZCTChatGroup').where({
				ZCTSponsorUserId: _.or(_.eq(funcPra.ZCTCOIID), _.eq(TempCOIopenid)),
				ZCTCommunicatorsUserId: _.or(_.eq(funcPra.ZCTCOIID), _.eq(TempCOIopenid)),
			}).get();
			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天记录失败"); //回滚事务
				return;
			} else {
				if (TempGroupRes.data.length <= 0) { //创建聊天组
					var dataList = {
						ZCTSponsorUserId: TempThisOPENID,
						ZCTCommunicatorsUserId: TempCOIopenid,
					}
					const TempAddGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: dataList
					})
					if (TempAddGroupRes.errMsg == "collection.add:ok") {
						TempGroupId = TempAddGroupRes._id;
					} else {
						await transaction.rollback("创建沟通失败"); //回滚事务
						return;
					}
				} else {
					TempGroupId = TempGroupRes.data[0]._id;
				}
			}
			return {
				errMsg: "OK",
				result: TempGroupId,
			};
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult.errMsg == "OK") {
		TempResObject.errMsg = "OK";
		TempResObject.result.push(TempResult.result);
	} else {
		TempResObject.errMsg = TempResult.errMsg;
	}
	return TempResObject;
}


/**
 * Creator:SE24,Date:2021-3-19 14:24:04
 * 执行功能：获取聊天组列表
 * @param {object} funcPra 
 * @param {object} _ 
 * @param {object} TempThisOPENID 
 */
async function GetGroupList(funcPra, _, TempThisOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	var tempSkipAndLimit = [0, 1000]
	if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
	{
		tempSkipAndLimit = funcPra.skipAndLimit
	}
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			const _ = CloudDB.command
			const TempGroupRes = await transaction.collection('ZCTChatGroup').where(_.or([
					({
						ZCTSponsorUserId: _.eq(TempThisOPENID)
					}),
					({
						ZCTCommunicatorsUserId: _.eq(TempThisOPENID)
					})
				]))
				.orderBy('ZCTNewestTimeTS', 'desc')
				.skip(tempSkipAndLimit[0])
				.limit(tempSkipAndLimit[1])
				.get()

			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天记录失败"); //回滚事务
				return;
			} else {
				var TempUserConditionsList = [];
				for (tempKey in TempGroupRes.data) {
					TempUserConditionsList.push(TempGroupRes.data[tempKey].ZCTSponsorUserId)
					TempUserConditionsList.push(TempGroupRes.data[tempKey].ZCTCommunicatorsUserId)
				}
				//查询人员信息
				const TempUser = await transaction.collection('PMUser').where({
					_id: _.in(TempUserConditionsList),
				}).get();
				if (TempUser.data.length > 0) { //查询聊天记录编号
					for (tempKey in TempGroupRes.data) {
						if (TempGroupRes.data[tempKey].ZCTSponsorUserId != TempThisOPENID) {
							TempGroupRes.data[tempKey].NewObject = pmJSTools.getOneControlFromList(
								TempGroupRes.data[tempKey].ZCTSponsorUserId, TempUser.data,
								"ZCTSponsorUserId")
							TempGroupRes.data[tempKey].UnreadNum = TempGroupRes.data[tempKey]
								.ZCTCommunicatorUnreadNum

						} else {
							TempGroupRes.data[tempKey].NewObject = pmJSTools.getOneControlFromList(
								TempGroupRes.data[tempKey].ZCTCommunicatorsUserId, TempUser.data,
								"ZCTCommunicatorsUserId");
							TempGroupRes.data[tempKey].UnreadNum = TempGroupRes.data[tempKey]
								.ZCTSponsorUnreadNum
						}
					}
				}
			}
			if (TempGroupRes.data.length > 0) {
				TempResObject.errMsg = "OK";
				TempResObject.result.push(TempGroupRes.data);
			} else {
				TempResObject.errMsg = TempGroupRes.errMsg;
			}
			return TempResObject;
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	return TempResObject;
}





/**
 * Creator:SE24,Date:2021-3-19 16:24:04
 * 执行功能：发送聊天消息
 * @param {object} funcPra 
 * @param {object} _ 
 * @param {object} TempThisOPENID 
 */
async function SendMessage(funcPra, _, TempThisOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证发送消息
	if (pmJSTools.IsNullOrEmpty(funcPra.Message)) {
		TempResObject.errMsg = "GetGroupId:Message参数为空"
		return TempResObject;
	}
	//验证聊天组Id
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGroupId)) {
		TempResObject.errMsg = "GetGroupId:ZCTGroupId参数为空"
		return TempResObject;
	}
	//验证发送人头像
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTAvatar)) {
		TempResObject.errMsg = "GetGroupId:ZCTAvatar参数为空"
		return TempResObject;
	}
	//验证发送人UserID
	if (pmJSTools.IsNullOrEmpty(funcPra.MyUserId)) {
		TempResObject.errMsg = "GetGroupId:MyUserID参数为空"
		return TempResObject;
	}
	//验证发送人姓名
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTNickName)) {
		TempResObject.errMsg = "GetGroupId:ZCTNickName参数为空"
		return TempResObject;
	}
	//验证消息类型
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTMsgType)) {
		TempResObject.errMsg = "GetGroupId:ZCTMsgType参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var dataList = {
				ZCTGroupId: funcPra.ZCTGroupId,
				ZCTAvatar: funcPra.ZCTAvatar,
				ZCTUserid: funcPra.MyUserId,
				ZCTNickName: funcPra.ZCTNickName,
				ZCTMsgType: funcPra.ZCTMsgType,
				ZCTtextContent: funcPra.Message,
				ZCTSendTime: new Date(),
				ZCTSendTimeTS: Date.now(),
			}
			const TempAddGroupRes = await transaction.collection("ZCTCommunicateRecord").add({
				data: dataList
			})
			if (TempAddGroupRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建沟通失败"); //回滚事务
				return;
			}
			//查询聊天组信息
			const TempGroupRes = await transaction.collection('ZCTChatGroup').where({
				_id: _.eq(funcPra.ZCTGroupId)
			}).get();
			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天对象信息失败"); //回滚事务
				return;
			} else {
				if (TempGroupRes.data.length <= 0) { //创建聊天组
					await transaction.rollback("未找到聊天对象信息"); //回滚事务
					return;
				} else {
					//更新聊天组信息
					var TempZCTtextContent = "";
					if (funcPra.ZCTMsgType == "image") {
						TempZCTtextContent = "[图片]";
					} else {
						TempZCTtextContent = funcPra.Message;
					}
					var TempUpDateData = {
						ZCTNewestTime: new Date(), //最后发送时间
						ZCTNewestTimeTS: Date.now(), //最后发送时间
						ZCTtextContent: TempZCTtextContent, //发送内容};
					}
					if (TempGroupRes.data[0].ZCTCommunicatorsUserId == funcPra.MyUserId) { //自己是发起人
						if (TempGroupRes.data[0].ZCTSponsorState == "NO") {
							TempUpDateData.ZCTSponsorUnreadNum = _.inc(1);
						}
					} else { //自己是沟通人
						if (TempGroupRes.data[0].ZCTCommunicatorsState == "NO") {
							TempUpDateData.ZCTCommunicatorUnreadNum = _.inc(1);
						}
					}
					var TempUpDateResult = await transaction.collection("ZCTChatGroup").doc(funcPra
						.ZCTGroupId).update({
						data: TempUpDateData
					})
					if (TempUpDateResult.stats.updated <= 0) {
						await transaction.rollback("修改最新聊天记录失败"); //回滚事务
						return;
					}
				}
			}
			return "OK";
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);;
	}
	return TempResObject;
}

/**
 * Creator:SE24,Date:2021-3-26 22:56:01
 * 获取聊天记录
 * @param {*} funcPra 
 * @param {*} _ 
 * @param {*} TempThisOPENID 
 */
async function GetCommunicate(funcPra, _, db) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGroupId)) {
		TempResObject.errMsg = "GetGroupId:ZCTGroupId参数为空"
		return TempResObject;
	}
	try {
		//查询聊天组信息
		const TempGroupRes = await db.collection('ZCTChatGroup').where({
			_id: _.eq(funcPra.ZCTGroupId)
		}).get();
		var TempUserIdList = [];
		if (!TempGroupRes.data) {
			TempResObject.errMsg = "获取聊天对象信息失败";
			return;
		} else {
			if (TempGroupRes.data.length <= 0) { //创建聊天组
				TempResObject.errMsg = "未找到聊天信息";
				return;
			} else {
				TempUserIdList.push(TempGroupRes.data[0].ZCTCommunicatorsUserId);
				TempUserIdList.push(TempGroupRes.data[0].ZCTSponsorUserId);
			}
		}
		if (TempUserIdList.length < 1) {
			TempResObject.errMsg = "未找到聊天用户信息";
			return;
		}
		//查询人员信息
		const TempUserRes = await db.collection('PMUser').where({
			_id: _.in(TempUserIdList),
		}).get();
		if (!TempUserRes.data) {
			TempResObject.errMsg = "获取用户信息失败";
			return;
		}

		const {
			data: initList
		} = await db.collection('ZCTCommunicateRecord').where({
			ZCTGroupId: _.eq(funcPra.ZCTGroupId)
		}).orderBy('ZCTSendTimeTS', 'desc').limit(20).get();
		if (initList.length > 0) {
			if (TempUserRes.data.length > 0) {
				for (var TempRIndex in initList) {
					for (var TempUIndex in TempUserRes.data) {
						if (initList[TempRIndex].ZCTUserid == TempUserRes.data[TempUIndex]._id) {
							initList[TempRIndex].ZCTAvatar = TempUserRes.data[TempUIndex]
								.ZCTUserPhoto; //聊天记录显示的用户头像更新为用户表当前的头像
							initList[TempRIndex].ZCTNickName = TempUserRes.data[TempUIndex]
								.PMUserName; //聊天记录显示的用户姓名更新为用户表当前的姓名
						}
					}
				}
			}
		}
		TempResObject.errMsg = "OK";
		TempResObject.result = initList;
		return TempResObject;
	} catch (e) {
		TempResObject.errMsg = "获取聊天记录失败：" + pmJSTools.GetStr(e);
		TempResObject.result = [];
		return TempResObject;
	}
}

/**
 * Creator:SE24,Date:2021-3-19 14:24:04
 * 执行功能：根据对方OpenId获取聊天组Id
 * @param {Object} funcPra 前端参数集
 * @param {Object} _ 
 * @param {String} TempMyOPENID 我的OpenId
 */
async function GetGroupIdByUserID(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ObjectUserId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:ObjectUserId参数为空"
		return TempResObject;
	}
	if (pmJSTools.IsNullOrEmpty(funcPra.MyUserId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:MyUserID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempResData = {
				GroupId: "",
				UserName: "",
				MyOpenid: ""
			};
			const TempUserRes = await transaction.collection('PMUser').where({
				_id: _.eq(funcPra.ObjectUserId)
			}).get();
			if (pmJSTools.IsNullOrEmpty(TempUserRes.data)) {
				await transaction.rollback("获取对方用户信息失败"); //回滚事务       
				return;
			} else {
				TempResData.UserName = TempUserRes.data[0].PMUserName;
				TempResData.PMUserID = TempUserRes.data[0].PMUserID;
			}
			//查询是否已有聊天组
			//相当于where (ZCTSponsorUserId=A and ZCTCommunicatorsUserId =B) or (ZCTSponsorUserId=B and ZCTCommunicatorsUserId =A)
			const TempGroupRes = await transaction.collection('ZCTChatGroup').where(_.or([{
					ZCTSponsorUserId: _.eq(funcPra.ObjectUserId),
					ZCTCommunicatorsUserId: _.eq(funcPra.MyUserId)
				},
				{
					ZCTSponsorUserId: _.eq(funcPra.MyUserId),
					ZCTCommunicatorsUserId: _.eq(funcPra.ObjectUserId)
				}
			])).get();

			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天记录失败"); //回滚事务
				return;
			} else {
				if (TempGroupRes.data.length <= 0) { //创建聊天组
					var dataList = {
						ZCTCommunicatorsUserId: funcPra.MyUserId,
						ZCTSponsorUserId: funcPra.ObjectUserId,
						ZCTtextContent: "",
						ZCTCommunicatorUnreadNum: 0,
						ZCTSponsorUnreadNum: 0,
						ZCTCommunicatorsState: "YES",
						ZCTSponsorState: "NO"
					}
					const TempAddGroupRes = await transaction.collection("ZCTChatGroup").add({
						data: dataList
					})
					if (TempAddGroupRes.errMsg == "collection.add:ok") {
						TempResData.GroupId = TempAddGroupRes._id;
					} else {
						await transaction.rollback("创建沟通失败"); //回滚事务
						return;
					}
				} else {
					TempResData.GroupId = TempGroupRes.data[0]._id;
					var TempUpdateData = {};
					if (TempGroupRes.data[0].ZCTCommunicatorsUserId == funcPra.MyUserId) {
						TempUpdateData = {
							ZCTCommunicatorUnreadNum: 0,
							ZCTCommunicatorsState: "YES",
						}
					} else {
						TempUpdateData = {
							ZCTSponsorUnreadNum: 0,
							ZCTSponsorState: "YES",
						}
					}
					var TempUpDateResult = await transaction.collection("ZCTChatGroup").doc(TempGroupRes
						.data[0]._id).update({
						data: TempUpdateData
					})
					if (TempUpDateResult.errMsg != "document.update:ok") {
						//console.log("修改状态失败");
					}
				}
			}
			return {
				errMsg: "OK",
				result: TempResData,
			};
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult.errMsg == "OK") {
		TempResObject.errMsg = "OK";
		TempResObject.result.push(TempResult.result);
	} else {
		TempResObject.errMsg = TempResult.errMsg;
	}
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-5-17 17:31:33
 * 根据COIId获取用户身份
 * @param {*} funcPra 
 * @param {*} _ 
 * @param {*} TempMyOPENID 
 */
async function GetUserIdentity(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.PMCOIID)) {
		TempResObject.errMsg = "GetUserIdentity:PMCOIID参数为空"
		return TempResObject;
	}
	//用户身份对象
	var TempUserIdentity = {
		UserOpenID: TempMyOPENID, //用户OpenID
		UserID: funcPra.MyUserId, //用户ID
		IsInvestor: "NO", //是否是授权人呢
		IsFinished: "NO", //是否已完工
	};
	//从数据库查找此人对此任务的申请记录
	var DBConditions = //查询多个集合的表达方法
		[{
			collectionsName: "ZCTApplicationRecord", //目标集合名数组
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
			whereConditions: {
				ZCTTaskID: _.eq(funcPra.PMCOIID),
				ZCTHandleResult: _.eq("OK")
			}, //查询条件
			skipAndLimit: [0, 1], //从第几个查询起,最多查询多少.第一个是skip值，
			//0表示从第一个开始，Limit的0 表示由系统决定。考虑到微信本身的限制建议limit不要超过20
			orderByConditions: [
				["_id", "desc"],
			] //字段名和排列顺序， 多个先后排列
		}]
	var resData = await cloud.callFunction //await调用远程云函数
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},
	})
	var TempApplyData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	if (TempApplyData.errMsg == "OK") {
		TempResObject.errMsg = TempApplyData.errMsg;
		if (!pmJSTools.IsNullOrEmpty(TempApplyData.result)) {
			//查找是否有我的授权通过记录
			var TempAuthorize = TempApplyData.result[0].find(function(e) {
				return e.ZCTApplicationType == "Authorize" && ((e.WXOpenID != "" && e.WXOpenID ==
					TempMyOPENID) || (e.PMUserID != "" && e.PMUserID == funcPra.MyUserId));
			});
			if (!pmJSTools.IsNullOrEmpty(TempAuthorize)) {
				TempUserIdentity.IsInvestor = "YES";
			}
			//查找是否有我的完工申请通过记录
			var TempFinished = TempApplyData.result[0].find(function(e) {
				return e.ZCTApplicationType == "Finished" && ((e.WXOpenID != "" && e.WXOpenID ==
					TempMyOPENID) || (e.PMUserID != "" && e.PMUserID == funcPra.MyUserId));
			});
			if (!pmJSTools.IsNullOrEmpty(TempFinished)) {
				TempUserIdentity.IsFinished = "YES";
			}
		}
	} else {
		TempResObject.errMsg = TempApplyData.errMsg
	}
	TempResObject.result = TempUserIdentity;
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-5-27 16:02:03
 * 分发创建COI
 */
async function DistributeCreateCOI(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//来源任务COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.SourceTaskID)) {
		TempResObject.errMsg = "DistributeCreateCOI:SourceTaskID参数为空"
		return TempResObject;
	}
	//来源任务类型
	if (pmJSTools.IsNullOrEmpty(funcPra.SourceType)) {
		TempResObject.errMsg = "DistributeCreateCOI:SourceType参数为空"
		return TempResObject;
	}
	//来源任务ID
	if (pmJSTools.IsNullOrEmpty(funcPra.SourcePositionID)) {
		TempResObject.errMsg = "DistributeCreateCOI:SourcePositionID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempTableName = ""; //来源任务表名
			if (funcPra.SourceType == "PO") {
				TempTableName = "PMPProductionOrder";
			} else if (funcPra.SourceType == "PI") {
				TempTableName = "PMPPRDInstruction";
			} else if (funcPra.SourceType == "SPT") {
				TempTableName = "PMPSeriesProcessTask";
			} else if (funcPra.SourceType == "OPT") {
				TempTableName = "PMPOneProcessTask";
			} else if (funcPra.SourceType == "RAWPRO") {
				TempTableName = "ZCTRAWPro";
			} else {
				await transaction.rollback("未知的来源类型"); //回滚事务
				return;
			}
			//查询MyCOI是否存在(根据COIId)
			const TempSourceRes = await transaction.collection(TempTableName).where({
				_id: _.eq(funcPra.SourcePositionID)
			}).get();
			if (!TempSourceRes.data) {
				await transaction.rollback("获取来源任务信息失败"); //回滚事务
				return;
			} else {
				if (TempSourceRes.data.length > 0) {
					if (TempSourceRes.data[0].ZCTIsDistribute == "YES") {
						await transaction.rollback("此来源任务已经移交分发，不可再次分发"); //回滚事务
						return;
					}
				} else {
					await transaction.rollback("未找到来源任务信息"); //回滚事务
					return;
				}

			}

			//创建COI
			var dataList = {
				PMInnerCustomerOrderItemID: funcPra.PMCOI.PMInnerCustomerOrderItemID, //	客户子订单ID	
				PMInnerCustomerOrderID: "1", //	客户订单页号	
				PMOutCustomerOrderID: "", //	外部客户单的编号	
				PMCustomerProductID: "", //	客户产品号	
				PMCustomerProductName: "", //	客户产品名 【选用】	
				PMCustomerProductDrawing: "", //	客户产品对应客户图号，在编辑订单时可为空	
				PMInnerProductID: funcPra.PMCOI.PMInnerProductID, //	内部零件号	
				PMBOMID: "", //	BOM版本号	
				PMInnerProductName: funcPra.PMCOI.PMInnerProductName, //	内部零件名	
				PMInnerProductSpec: "", //	内部零件规格	
				PMCustomerProductSpec: "", //	客户零件规格	
				PMOrderType: "CUSTOM", //	订单类型	CUSTOM/客户订单，INNER/内部订单，SAMPLE/样品订单
				PMOrderProType: funcPra.PMCOI.PMOrderProType, //	订单生产类型	劳务  订单生产
				PMOrderUnit: funcPra.PMCOI.PMOrderUnit, //	计量单位	
				PMOrderNum: funcPra.PMCOI.PMOrderNum, //	订单数量	
				PMTaxRate: 0, //	税率	
				PMUnitPriceNoTax: 0, //	不含税单价	
				PMUnitPriceWithTax: 0, //	含税单价	
				PMTotalPriceWithTax: 0, //	含税总价	
				PMCustomerDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	需求交货日期	
				PMPlanDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期	
				PMRemark: "", //	备注	
				PMSellCheckState: "", //	销售审核状态	通过："YES"， 否则未通过
				PMSellChecker: "", //	销售审核人	
				PMSellCheckTime: new Date(), //	销售审核时间	
				PMTechCheckState: "", //	技术审核状态	通过："YES"， 否则未通过
				PMTechChecker: "", //	技术审核人	
				PMTechCheckTime: new Date(), //	技术审核时间	
				PMQualityCheckState: "", //	品质审核状态	通过："YES"， 否则未通过
				PMQualityChecker: "", //	品质审核人	
				PMQualityCheckTime: new Date(), //	品质审核时间	
				PMPlanCheckState: "", //	计划审核状态	通过："YES"， 否则未通过
				PMPlanChecker: "", //	计划审核人	
				PMPlanCheckTime: new Date(), //	计划审核时间	
				PMCreater: funcPra.PMCOI.PMCreater, //	创建人	
				PMCreateTime: new Date(), //	创建时间	
				PMChanger: "", //	修改人	
				PMChangeTime: new Date(), //	修改时间	
				PMIsUrgent: funcPra.PMCOI.PMIsUrgent, //	是否紧急	YES:紧急， 其他不紧急
				PMIsUrgentBy: "", //	由谁确认紧急	
				PMIsUrgentTime: new Date(), //	确认紧急的时间	
				PMOrderState: "NORELEASE", //	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单
				PMCustomerID: "", //	客户ID	
				PMChangeRecord: "", //	转内部订单记录	
				PMChangeRemark: "", //	转内部订单备注	
				PMOrderAttribute: "ORDINARY", //	订单特性	普通订单(ORDINARY)不需要评审,特殊订单（SPECIAL）需要评审
				ZCTPlanDeliDateShort: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期
				ZCTCreaterName: funcPra.PMCOI.ZCTCreaterName, //	创建名字,
				ZCTProductURL: funcPra.PMCOI.ZCTProductURL, //产品图片
				ZCTFinishedRate: 0, // 完成率
				ZCTFinishedNum: 0, //完成率       
				ZCTPlanNeedNum: funcPra.PMCOI.PMOrderNum, //还需计划数量（计算值）
				ZCTIsDeleted: "",
				ZCTApplicationCount: 0, //申请数
				PMJobType: funcPra.PMCOI.PMJobType, //工种类型
				ZCTJobPayType: funcPra.PMCOI.ZCTJobPayType, //结款方式
				ZCTFeesInstructions: pmJSTools.IsNullOrEmpty(funcPra.PMCOI.ZCTFeesInstructions) ?
					"" : funcPra.PMCOI.ZCTFeesInstructions, //费用及相关说明
				ZCTTaskPictureLst: funcPra.PMCOI.ZCTTaskPictureLst, //生产环境及任务相关图片 ,
				ZCTSourceTaskID: funcPra.SourceTaskID,
				ZCTSourceType: funcPra.SourceType,
				ZCTSourcePositionID: funcPra.SourcePositionID,
				_openid: TempMyOPENID
			}
			const TempAddRes = await transaction.collection("PMPCustomerOrderItem").add({
				data: dataList
			})
			if (TempAddRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建交付任务失败"); //回滚事务
				return;
			}

			//修改来源任务的状态为已分发
			var TempUpdateResult = await transaction.collection(TempTableName).doc(funcPra
				.SourcePositionID).update({
				data: {
					ZCTDistributeDate: new Date(), //分发时间
					ZCTIsDistribute: "YES", //分发状态（YES:已分发，NO:未分发）
					ZCTDistributor: TempMyOPENID, //分发人
				}
			})
			if (TempUpdateResult.stats.updated <= 0) {
				await transaction.rollback("更新影响行为0，可能是权限原因造成的。"); //回滚事务
				return;
			}
			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = "添加失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}

/** 
 * Creator:SE7,Date:2021-05-28  
 * 执行功能：提交上一层的任务数量 
 * @param {Object} funcPra 前端参数集 
 * @param {Object} _  
 * @param {String} TempMyOPENID 我的OpenId 
 * @param {String} TempObjectId 对方OpenId 
 */
async function ZCTSourceTaskNum(SourcePositionID, TaskFinNum, ZCTSourceTaskType, _, TempSourceTasDBExecutions,
	wxContext) {
	if (pmJSTools.GetNum(TaskFinNum) > 0) {
		switch (ZCTSourceTaskType) {
			case "PO":
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPProductionOrder", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							_id: _.eq(SourcePositionID),
							ZCTIsDeleted: _.neq("YES"),

						},
						orderByConditions: [
							["PMProductionOrderSeq", "asc"]
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempPO;
				if (TempData.result.length > 0) {
					TempPO = TempData.result[0][0];
				}

				var TempPMSate = "";
				var TempZCTFinishedRate = 0;
				if (TempPO.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPO.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}
				var TempPODBExeData = GetPOUpdateData(TempPO._id, TaskFinNum, TempPMSate, TempZCTFinishedRate);
				TempSourceTasDBExecutions.push(TempPODBExeData.DBExecutions);
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPCustomerOrderItem", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMInnerCustomerOrderItemID: _.eq(TempPO.PMInnerCustomerOrderItemID)
						} //字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempCOI;
				if (TempData.result.length > 0) {
					TempCOI = TempData.result[0][0];
				}

				if (TempCOI.PMOrderNum >= TaskFinNum) {
					TempPMSate = TempCOI.PMOrderState
				} else {
					TempPMSate = TempCOI.PMOrderState
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempCOI.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				//准备条件修改 
				var TempCOIBExeData = GetCOIUpdateData(TempCOI._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
				TempSourceTasDBExecutions.push(TempCOIBExeData.DBExecutions);
				if (!pmJSTools.IsNullOrEmpty(TempCOI.ZCTSourcePositionID)) {
					ZCTSourceTaskNum(TempCOI.ZCTSourcePositionID, TaskFinNum, TempCOI.ZCTSourceType, _,
						TempSourceTasDBExecutions, wxContext);
				}
				break;
			case "PI":
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPPRDInstruction", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							_id: _.eq(SourcePositionID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMProcessSeq", "asc"],
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempPI;
				if (TempData.result.length > 0) {
					TempPI = TempData.result[0][0];
				}

				var TempPMSate = "";
				var TempZCTFinishedRate = 0;
				if (TempPI.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPI.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempPIDBExeData = GetPIUpdateData(TempPI._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
				TempSourceTasDBExecutions.push(TempPIDBExeData.DBExecutions);


				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPPRDInstruction", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMProductionOrderID: _.eq(TempPI.PMProductionOrderID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMProcessSeq", "asc"],
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempPIList;
				if (TempData.result.length > 0) {
					TempPIList = TempData.result[0];
				}
				if (TempPIList.length == TempPI.PMProductionOrderSeq) {
					var DBConditions = //查询多个集合的表达方法 
						[{
							collectionsName: "PMPProductionOrder", //目标集合名数组 
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
							whereConditions: {
								PMProductionOrderID: _.eq(TempPI.PMProductionOrderID),
								ZCTIsDeleted: _.neq("YES")
							},
							orderByConditions: [
								["PMProductionOrderSeq", "asc"]
							]
							//字段名和排列顺序， 多个先后排列 
						}]
					var resData = await cloud.callFunction //await调用远程云函数 
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
					var TempData = pmJSTools.getResFromReturn(
						resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
					var TempPO;

					if (TempData.result.length > 0) {
						TempPO = TempData.result[0][0];
					}
					if (TempPO.PMOrderNum >= TaskFinNum) {
						TempPMSate = "PRODUCTION"
					} else {
						TempPMSate = "CLOSE"
					}
					TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPO.PMOrderNum).toFixed(2)) * 100;
					if (TempZCTFinishedRate > 100) {
						TempZCTFinishedRate = 100;
					}

					var TempPODBExeData = GetCOIUpdateData(TempPO._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
					TempSourceTasDBExecutions.push(TempPODBExeData.DBExecutions);

					var DBConditions = //查询多个集合的表达方法 
						[{
							collectionsName: "PMPCustomerOrderItem", //目标集合名数组 
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
							whereConditions: {
								PMInnerCustomerOrderItemID: _.eq(TempPO.PMInnerCustomerOrderItemID)
							} //字段名和排列顺序， 多个先后排列 
						}]
					var resData = await cloud.callFunction //await调用远程云函数 
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
					var TempData = pmJSTools.getResFromReturn(
						resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
					var TempCOI;
					if (TempData.result.length > 0) {
						TempCOI = TempData.result[0][0];
					}
					if (TempCOI.PMOrderNum >= TaskFinNum) {
						TempPMSate = TempCOI.PMOrderState
					} else {
						TempPMSate = TempCOI.PMOrderState
					}
					TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempCOI.PMOrderNum).toFixed(2)) * 100;
					if (TempZCTFinishedRate > 100) {
						TempZCTFinishedRate = 100;
					}

					var TempCOIDBExeData = GetCOIUpdateData(TempCOI._id, TaskFinNum, TempZCTFinishedRate,
						TempPMSate);
					TempSourceTasDBExecutions.push(TempCOIDBExeData.DBExecutions);
					if (!pmJSTools.IsNullOrEmpty(TempCOI.ZCTSourcePositionID)) {

						ZCTSourceTaskNum(TempCOI.ZCTSourcePositionID, TaskFinNum, TempCOI.ZCTSourceType, _,
							TempSourceTasDBExecutions, wxContext);

					}

				}
				//准备条件新建 
				var TempPIDBExeData = GetPIUpdateData(SourcePositionID, TaskFinNum);
				TempSourceTasDBExecutions.push(TempPIDBExeData.DBExecutions);

				break;
			case "SPT":
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPSeriesProcessTask", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							_id: _.eq(SourcePositionID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMSerProcTaskSeq", "asc"],
						]
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempSPT;
				if (TempData.result.length > 0) {
					TempSPT = TempData.result[0][0];
				}
				var TempPMSate = "";
				var TempZCTFinishedRate = 0;
				if (TempSPT.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempSPT.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempSPTDBExeData = GetSPTUpdateData(TempSPT._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
				TempSourceTasDBExecutions.push(TempSPTDBExeData.DBExecutions);

				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPProductionOrder", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMProductionOrderID: _.eq(TempSPT.PMProductionOrderID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMProductionOrderSeq", "asc"]
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempPO;
				if (TempData.result.length > 0) {
					TempPO = TempData.result[0][0];
				}
				if (TempPO.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPO.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempPODBExeData = GetPOUpdateData(TempPO._id, TaskFinNum);
				TempSourceTasDBExecutions.push(TempPODBExeData.DBExecutions);
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPCustomerOrderItem", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMInnerCustomerOrderItemID: _.eq(TempPO.PMInnerCustomerOrderItemID)
						} //字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempCOI;
				if (TempData.result.length > 0) {
					TempCOI = TempData.result[0][0];
				}
				//准备条件新建 
				if (TempCOI.PMOrderNum >= TaskFinNum) {
					TempPMSate = TempCOI.PMOrderState
				} else {
					TempPMSate = TempCOI.PMOrderState
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempCOI.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempCOIBExeData = GetCOIUpdateData(TempCOI._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
				TempSourceTasDBExecutions.push(TempCOIBExeData.DBExecutions);
				if (!pmJSTools.IsNullOrEmpty(TempCOI.ZCTSourcePositionID)) {
					ZCTSourceTaskNum(TempCOI.ZCTSourcePositionID, TaskFinNum, TempCOI.ZCTSourceType, _,
						TempSourceTasDBExecutions, wxContext);
				}

				break;
			case "OPT":
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPOneProcessTask", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							_id: _.eq(SourcePositionID)
						},
						orderByConditions: [
							["PMProcessPraSeqID", "asc"],
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempOPT;
				if (TempData.result.length > 0) {
					TempOPT = TempData.result[0][0];
				}

				var TempPMSate = "";
				var TempZCTFinishedRate = 0;
				if (TempOPT.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempOPT.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}


				var TempOPTDBExeData = GetOPTUpdateData(SourcePositionID, TaskFinNum, TempZCTFinishedRate,
					TempPMSate);
				TempSourceTasDBExecutions.push(TempOPTDBExeData.DBExecutions);
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPSeriesProcessTask", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMSerProcTaskID: _.eq(TempOPT.PMSerProcTaskID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMSerProcTaskSeq", "asc"],
						]
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempSPT;
				if (TempData.result.length > 0) {
					TempSPT = TempData.result[0][0];
				}
				if (TempSPT.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempSPT.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempSPTDBExeData = GetSPTUpdateData(TempSPT._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
				TempSourceTasDBExecutions.push(TempSPTDBExeData.DBExecutions);

				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "PMPPRDInstruction", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							PMProductionOrderID: _.eq(TempSPT.PMProductionOrderID),
							ZCTIsDeleted: _.neq("YES")
						},
						orderByConditions: [
							["PMProcessSeq", "asc"],
						]
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempPIList;
				if (TempData.result.length > 0) {
					TempPIList = TempData.result[0];
				}
				var TempIndex = TempPIList.findIndex(item => item.PMStanardProcessName === TempOPT
					.PMStanardProcessName)
				var TempPI = TempPIList[TempIndex];
				if (TempPI.PMOrderNum >= TaskFinNum) {
					TempPMSate = "PRODUCTION"
				} else {
					TempPMSate = "CLOSE"
				}
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPI.PMOrderNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}

				var TempPIDBExeData = GetPIUpdateData(TempPI._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);

				TempSourceTasDBExecutions.push(TempPIDBExeData.DBExecutions);


				if (TempOPT.PMProcessPraSeqID == TempPIList.length - 1) {
					var TempSPTDBExeData = GetSPTUpdateData(SourcePositionID, TaskFinNum);
					TempSourceTasDBExecutions.push(TempSPTDBExeData.DBExecutions);
					var DBConditions = //查询多个集合的表达方法 
						[{
							collectionsName: "PMPProductionOrder", //目标集合名数组 
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
							whereConditions: {
								PMProductionOrderID: _.eq(TempSPT.PMProductionOrderID),
								ZCTIsDeleted: _.neq("YES")
							},
							orderByConditions: [
								["PMProductionOrderSeq", "asc"]
							]
							//字段名和排列顺序， 多个先后排列 
						}]
					var resData = await cloud.callFunction //await调用远程云函数 
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
					var TempData = pmJSTools.getResFromReturn(
						resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
					var TempPO;
					if (TempData.result.length > 0) {
						TempPO = TempData.result[0][0];
					}
					if (TempPO.PMOrderNum >= TaskFinNum) {
						TempPMSate = "PRODUCTION"
					} else {
						TempPMSate = "CLOSE"
					}
					TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempPO.PMOrderNum).toFixed(2)) * 100;
					if (TempZCTFinishedRate > 100) {
						TempZCTFinishedRate = 100;
					}


					var TempPODBExeData = GetPOUpdateData(TempPO._id, TaskFinNum, TempZCTFinishedRate, TempPMSate);
					TempSourceTasDBExecutions.push(TempPODBExeData.DBExecutions);


					var DBConditions = //查询多个集合的表达方法 
						[{
							collectionsName: "PMPCustomerOrderItem", //目标集合名数组 
							getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
							whereConditions: {
								PMInnerCustomerOrderItemID: _.eq(TempPO.PMInnerCustomerOrderItemID)
							} //字段名和排列顺序， 多个先后排列 
						}]
					var resData = await cloud.callFunction //await调用远程云函数 
					({
						name: 'getCollectionsFromServer',
						data: {
							DBConditions,
						},
					})
					var TempData = pmJSTools.getResFromReturn(
						resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
					var TempCOI;
					if (TempData.result.length > 0) {
						TempCOI = TempData.result[0][0];
					}
					if (TempCOI.PMOrderNum >= TaskFinNum) {
						TempPMSate = TempCOI.PMOrderState
					} else {
						TempPMSate = TempCOI.PMOrderState
					}
					TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempCOI.PMOrderNum).toFixed(2)) * 100;
					if (TempZCTFinishedRate > 100) {
						TempZCTFinishedRate = 100;
					}

					//准备条件修改 
					var TempCOIBExeData = GetCOIUpdateData(TempCOI._id, TaskFinNum, TempZCTFinishedRate,
						TempPMSate);
					TempSourceTasDBExecutions.push(TempCOIBExeData.DBExecutions);
					if (!pmJSTools.IsNullOrEmpty(TempCOI.ZCTSourcePositionID)) {
						ZCTSourceTaskNum(TempCOI.ZCTSourcePositionID, TaskFinNum, TempCOI.ZCTSourceType, _,
							TempSourceTasDBExecutions, wxContext);
					}
				}
				break;
			case "RAWPRO":
				var DBConditions = //查询多个集合的表达方法 
					[{
						collectionsName: "ZCTRAWPro", //目标集合名数组 
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
						whereConditions: {
							_id: _.eq(SourcePositionID),
							ZCTIsDeleted: _.neq("YES"),
						},
						//字段名和排列顺序， 多个先后排列 
					}]
				var resData = await cloud.callFunction //await调用远程云函数 
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
				var TempData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
				var TempRAW;
				if (TempData.result.length > 0) {
					TempRAW = TempData.result[0][0];
				}
				var TempZCTFinishedRate = 0;
				TempZCTFinishedRate = pmJSTools.GetNum((TaskFinNum / TempRAW.PMNum).toFixed(2)) * 100;
				if (TempZCTFinishedRate > 100) {
					TempZCTFinishedRate = 100;
				}
				var TempRAWPRODBExeData = GetRAWProUpdateData(TempRAW._id, TaskFinNum, TempZCTFinishedRate);
				TempSourceTasDBExecutions.push(TempRAWPRODBExeData.DBExecutions);
				break;
		}

		var TempLastDBExecutions = [];
		TempSourceTasDBExecutions.forEach(item => {
			TempLastDBExecutions = TempLastDBExecutions.concat(item);
		});
		var DBExecutions = [];
		DBExecutions = DBExecutions.concat(TempLastDBExecutions);

		var DBExeData = {
			DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
				[],
			DBExecutions: DBExecutions, //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
			CloudOpenID: wxContext.OPENID //需要传递OPENID给被调用云函数。
		}
		return pmJSTools.callFunctionRes(cloud, DBExeData);

	}
}

/**
 * Creator:SE7,Date:2021-6-23 
 * 删除生产物料
 */
async function DeleteRAWPRO(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra._id)) {
		TempResObject.errMsg = "DeleteRAWPRO：生产物料编号参数为空"
		return TempResObject;
	}

	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "ZCTRAWPro",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: funcPra._id
				}, ]
			}, ],
	}

	var DBConditions = //查询多个集合的表达方法 
		[{
			collectionsName: "PMPCustomerOrderItem", //目标集合名数组 
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
			whereConditions: {
				ZCTSourcePositionID: _.eq(funcPra._id)
			} //字段名和排列顺序， 多个先后排列 
		}]
	var resData = await cloud.callFunction //await调用远程云函数 
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},
	})
	var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
	var TempCOI;
	if (TempData.result.length > 0) {
		TempCOI = TempData.result[0][0];
	}


	if (!pmJSTools.IsNullOrEmpty(TempCOI)) {
		var DBConditions = //查询多个集合的表达方法 
			[{
				collectionsName: "ZCTApplicationRecord", //目标集合名数组 
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部 
				whereConditions: {
					ZCTTaskID: _.eq(TempCOI._id),
					ZCTHandleResult: _.neq("NOK"),
				} //字段名和排列顺序， 多个先后排列 
			}]
		var resData = await cloud.callFunction //await调用远程云函数 
		({
			name: 'getCollectionsFromServer',
			data: {
				DBConditions,
			},
		})
		var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳 
		var TempZCTApplicationRecord;
		if (TempData.result.length > 0) {
			errMsg = "此物料已分发给他人，需先在发布任务页删除，后再删除此物料"
			result = "NOK"
			return {
				errMsg,
				result
			}
		}
	}

	var TempCOIDBExeDataList = [];
	var TempPODBExeDataList = [];
	var TempPIDBExeDataList = [];
	var TempSPTDBExeDataList = [];
	var TempRAWPurDBExeDataList = [];
	var TempRawPRODBExeDataList = [];
	var TemOPTDBExeDataList = [];

	if (!pmJSTools.IsNullOrEmpty(TempCOI)) {
		TempCOIDBExeDataList.push(GetCOIRemoveeData(TempCOI))
	}

	///////////////////////////
	//第二步获得PO清单//
	///////////////////////////
	var DBConditions = //查询多个集合的表达方法
		[{
			collectionsName: "PMPProductionOrder", //目标集合名数组
			getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
			whereConditions: {
				PMInnerCustomerOrderItemID: _.eq(TempCOI.PMInnerCustomerOrderItemID),
				ZCTIsDeleted: _.neq("YES")
			},
			orderByConditions: [
				["PMProductionOrderSeq", "asc"]
			]
			//字段名和排列顺序， 多个先后排列
		}]
	var resData = await cloud.callFunction //await调用远程云函数
	({
		name: 'getCollectionsFromServer',
		data: {
			DBConditions,
		},

	})
	var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	var TempPOList = [];
	if (TempData.result.length > 0) {
		TempPOList = TempData.result[0];
	}

	//////////////////////////////////////////
	//第三步根据获得PO清单获得PI//
	///////////////////////////////////////////
	if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
		//拼装条件
		var tempConditionsList = []
		for (tempKey in TempPOList) {
			tempConditionsList.push(TempPOList[tempKey].PMProductionOrderID)
			TempPODBExeDataList.push(GetPORemoveeData(TempPOList[tempKey]));
		}
		if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
		{
			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPPRDInstruction", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMProductionOrderID: _.in(tempConditionsList),
						ZCTIsDeleted: _.neq("YES")
					},
					orderByConditions: [
						["PMProcessSeq", "asc"],
					]
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
		}
	}

	var TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	var TempPIList = [];
	if (TempData.result.length > 0) {
		TempPIList = TempData.result[0];
	}
	var TempSPTList = [];
	var TempRawputList = [];
	var TempRAWProList = [];
	var TempSPTData = "";
	//////////////////////////////////////////
	//第四步根据获得PI清单获得SPT//
	///////////////////////////////////////////
	if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
		//拼装条件
		var tempConditionsList = []
		for (tempKey in TempPIList) {
			tempConditionsList.push(TempPIList[tempKey].PMPRDInstructionID)
			TempPIDBExeDataList.push(GePItRemoveeData(TempPIList[tempKey]))
		}
		if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
		{
			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "PMPSeriesProcessTask", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMPRDInstructionID: _.in(tempConditionsList),
						ZCTIsDeleted: _.neq("YES")
					},
					orderByConditions: [
						["PMSerProcTaskSeq", "asc"],
					]
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
		}
		//SPT
		TempSPTData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
		if (TempSPTData.result.length > 0) {
			TempSPTList = TempSPTData.result[0];
		}
		if (TempSPTData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempSPTData.result)) {
			{
				TempSPTList.forEach(TempSPT => {
					TempSPTDBExeDataList.push(GetSPTRemoveData(TempSPT));
				});
			}
		}
	}


	//RAWput 
	if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
	{
		//从数据库获取交付任务清单
		var DBConditions = //查询多个集合的表达方法
			[{
				collectionsName: "ZCTRAWPur", //目标集合名数组
				getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
				whereConditions: {
					PMPRDInstructionID: _.in(tempConditionsList)
				},
			}]
		var resData = await cloud.callFunction //await调用远程云函数
		({
			name: 'getCollectionsFromServer',
			data: {
				DBConditions,
			},
		})
	}
	TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
	if (TempData.result.length > 0) {
		TempRawputList = TempData.result[0];
	}
	if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
		{
			TempRawputList.forEach(TempRAWPut => {
				TempRAWPurDBExeDataList.push(GetZCTRAWPurRemoveeData(TempRAWPut));
			});
		}


		if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
		{
			//从数据库获取交付任务清单
			var DBConditions = //查询多个集合的表达方法
				[{
					collectionsName: "ZCTRAWPro", //目标集合名数组
					getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
					whereConditions: {
						PMPRDInstructionID: _.in(tempConditionsList)
					},
				}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,
				},
			})
		}
		TempData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳

		if (TempData.result.length > 0) {
			TempRAWProList = TempData.result[0];
		}
		if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
			{
				TempRAWProList.forEach(TempRAWPro => {
					TempRawPRODBExeDataList.push(GetZCTRAWProRemoveeData(TempRAWPro));
				});
			}



		}
	}
	//////////////////////////////////////////
	//第五步根据获得SPT清单获得OPT//
	///////////////////////////////////////////

	if (!pmJSTools.IsNullOrEmpty(TempSPTData)) {
		if (TempSPTData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempSPTData.result)) {
			//拼装条件
			var tempConditionsList = []
			for (tempKey in TempSPTList) {
				tempConditionsList.push(TempSPTList[tempKey].PMSerProcTaskID)
			}
			if (!pmJSTools.IsNullOrEmpty(tempConditionsList)) //条件满足进行二次查询
			{
				//从数据库获取交付任务清单
				var DBConditions = //查询多个集合的表达方法
					[{
						collectionsName: "PMPOneProcessTask", //目标集合名数组
						getFields: {}, //获取集合中字段名，按顺序对应, ""表示获取全部
						whereConditions: {
							PMSerProcTaskID: _.in(tempConditionsList)
						},
						orderByConditions: [
							["PMProcessPraSeqID", "asc"],
						]
					}]
				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,
					},
				})
			}
			//SPT
			TempOPTData = pmJSTools.getResFromReturn(resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			if (TempOPTData.result.length > 0) {
				TempOPTList = TempOPTData.result[0];
			}
			if (TempOPTData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempOPTData.result)) {
				{
					TempOPTList.forEach(TempOPT => {
						TemOPTDBExeDataList.push(GetSPTRemoveData(TempOPT));
					});
				}
			}
		}
	}



	var TempCOIDBExecutions = [];
	var TempPODBExecutions = [];
	var TempPIDBExecutions = [];
	var TempRawPRODBExecutions = [];
	var TempRAWPurDBExecutions = [];
	var TempSPTBDBExecutions = [];
	var TemOPTDBExecutions = [];


	TempCOIDBExeDataList.forEach(item => {
		TempCOIDBExecutions = TempCOIDBExecutions.concat(item.DBExecutions);
	});
	TempPODBExeDataList.forEach(item => {
		TempPODBExecutions = TempPODBExecutions.concat(item.DBExecutions);
	});
	TempPIDBExeDataList.forEach(item => {
		TempPIDBExecutions = TempPIDBExecutions.concat(item.DBExecutions);
	});

	TempSPTDBExeDataList.forEach(item => {
		TempSPTBDBExecutions = TempSPTBDBExecutions.concat(item.DBExecutions);
	});
	TemOPTDBExeDataList.forEach(item => {
		TemOPTDBExecutions = TemOPTDBExecutions.concat(item.DBExecutions);
	});
	TempRawPRODBExeDataList.forEach(item => {
		TempRawPRODBExecutions = TempRawPRODBExecutions.concat(item.DBExecutions);
	});
	TempRAWPurDBExeDataList.forEach(item => {
		TempRAWPurDBExecutions = TempRAWPurDBExecutions.concat(item.DBExecutions);
	});

	var DBExecutions = [];
	DBExecutions = DBExecutions.concat(TempCOIDBExecutions).concat(TempPODBExeDataList).concat(TempPIDBExecutions)
		.concat(TempSPTDBExeDataList).concat(TemOPTDBExeDataList).concat(TempRawPRODBExeDataList).concat(
			TempRAWPurDBExeDataList).concat(DBExeData.DBExecutions);
	//准备条件新建
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行
			[],
		DBExecutions: DBExecutions, //数库库执行任务数组（为保证安全，每次执行通过事务来实现）
		CloudOpenID: TempMyOPENID //需要传递OPENID给被调用云函数。
	}
	return pmJSTools.callFunctionRes(cloud, DBExeData);
}



function GetPOUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate, PMState) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "PMPProductionOrder",
				dataList: [{
					PMState: PMState, //  状态  ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生 产中，ENDPRODUCTION:生产结束 
					ZCTFinishedNum: TaskFinNum,
					_id: SourcePositionID,
					ZCTFinishedRate: ZCTFinishedRate
				}, ]
			}, ]
	}
	return DBExeData;
}

function GetPIUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate, PMState) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "PMPPRDInstruction",
				dataList: [{
					_id: SourcePositionID,
					ZCTFinishedNum: TaskFinNum,
					PMState: PMState, // 状态 
					ZCTFinishedRate: ZCTFinishedRate
				}, ]
			}, ]
	}
	return DBExeData;
}

function GetSPTUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate, PMState) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "PMPSeriesProcessTask",
				dataList: [{
					_id: SourcePositionID,
					PMSPTState: PMState, //  状态  CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束 
					ZCTFinishedNum: TaskFinNum,
					ZCTFinishedRate: ZCTFinishedRate
				}, ]
			}, ]
	}
	return DBExeData;
}

function GetOPTUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate, PMState) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "PMPOneProcessTask",
				dataList: [{
					_id: SourcePositionID,
					PMOPTState: PMState, // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束 
					ZCTFinishedNum: TaskFinNum,
					ZCTFinishedRate: ZCTFinishedRate
				}, ]
			}, ]
	}
	return DBExeData;
}

function GetCOIUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate, PMState) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "PMPCustomerOrderItem",
				dataList: [{
					_id: SourcePositionID, //    客户子订单ID     
					ZCTFinishedNum: TaskFinNum,
					ZCTPlanNeedNum: TaskFinNum,
					ZCTFinishedRate: ZCTFinishedRate,
					PMOrderState: PMState
				}]
			}]
	}
	return DBExeData;
}


function GetRAWProUpdateData(SourcePositionID, TaskFinNum, ZCTFinishedRate) {
	//准备条件新建 
	var DBExeData = {
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "updateonObject",
				collectionName: "ZCTRAWPro",
				dataList: [{
					ZCTGetNum: TaskFinNum,
					_id: SourcePositionID,
					ZCTGetRate: ZCTFinishedRate
				}, ]
			}, ]
	}
	return DBExeData;
}


///获取删除COI的语句
function GetCOIRemoveeData(PMCOI) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "PMPCustomerOrderItem",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: PMCOI._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除PI的语句
function GePItRemoveeData(PI) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "PMPPRDInstruction",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: PI._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除SPT的语句
function GetSPTRemoveData(SPT) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "PMPSeriesProcessTask",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: SPT._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除OPT的语句
function GetOPTRemoveeData(OPT) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "PMPOneProcessTask",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: OPT._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除PO的语句
function GetPORemoveeData(PO) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "PMPProductionOrder",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: PO._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除领用物料的语句
function GetZCTRAWPurRemoveeData(ZCTRAWPur) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "ZCTRAWPur",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: ZCTRAWPur._id
				}, ]
			}, ],
	}
	return DBExeData;
}
///获取删除领用生产物料的语句
function GetZCTRAWProRemoveeData(ZCTRAWPro) {
	var DBExeData = {
		DBConditions: //整体执行的前提条件 数值清单 每个条件项对象，在数据库必须存在，否则返回不符合条件信息，并不会继续执行 
			[],
		DBExecutions: //数库库执行任务数组（为保证安全，每次执行通过事务来实现） 
			[{
				exeType: "update",
				collectionName: "ZCTRAWPro",
				dataList: [{
					ZCTIsDeleted: "YES",
					_id: ZCTRAWPro._id
				}, ]
			}, ],
	}
	return DBExeData;
}
/**
 * Creator:SE24,Date:2021-5-28 18:19:53
 * 领用物料条码提交
 */
async function RAWPurCodeSubmit(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.RAWPurCodeList)) {
		TempResObject.errMsg = "RAWPurCodeSubmit:RAWPurCodeList参数为空"
		return TempResObject;
	}
	var TempRAWPurArray = new Array();
	for (var TempItem in funcPra.RAWPurCodeList) {
		var TempThisRAWPur = TempRAWPurArray.find(function(e) {
			return e.ZCTRAWPurID == funcPra.RAWPurCodeList[TempItem].ZCTRAWPurID;
		});
		if (pmJSTools.IsNullOrEmpty(TempThisRAWPur)) {
			var TempRAWPur = {
				ZCTRAWPurID: funcPra.RAWPurCodeList[TempItem].ZCTRAWPurID,
				ZCTNum: funcPra.RAWPurCodeList[TempItem].ZCTPickingNum,
				ZCTPIId: funcPra.RAWPurCodeList[TempItem].ZCTPIId
			};
			if (pmJSTools.IsNullOrEmpty(funcPra.RAWPurCodeList[TempItem].ZCTRAWPurCodeID)) { //条码号为空
				TempRAWPur.ZCTEmptyCodeNum = funcPra.RAWPurCodeList[TempItem].ZCTPickingNum;
				TempRAWPur.ZCTScanDate = funcPra.RAWPurCodeList[TempItem].ZCTScanDate;
				TempRAWPur.ZCTIsDelete = funcPra.RAWPurCodeList[TempItem].ZCTIsDelete;
			}
			TempRAWPurArray.push(TempRAWPur);
		} else {
			TempThisRAWPur.ZCTNum = parseFloat((pmJSTools.GetNum(TempThisRAWPur.ZCTNum) + pmJSTools.GetNum(funcPra
				.RAWPurCodeList[TempItem].ZCTPickingNum)).toFixed(2));
			if (pmJSTools.IsNullOrEmpty(funcPra.RAWPurCodeList[TempItem].ZCTRAWPurCodeID)) { //条码号为空
				TempRAWPur.ZCTEmptyCodeNum = parseFloat((pmJSTools.GetNum(TempThisRAWPur.ZCTEmptyCodeNum) +
					pmJSTools.GetNum(funcPra.RAWPurCodeList[TempItem].ZCTPickingNum)).toFixed(2));
				TempRAWPur.ZCTScanDate = funcPra.RAWPurCodeList[TempItem].ZCTScanDate;
				TempRAWPur.ZCTIsDelete = funcPra.RAWPurCodeList[TempItem].ZCTIsDelete;
			}
		}
	}

	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询领用物料信息
			const TempRAWPurRes = await transaction.collection('ZCTRAWPur').where({
				PMPRDInstructionID: _.eq(funcPra.RAWPurCodeList[0].ZCTPIId)
			}).get();
			if (!TempRAWPurRes.data) {
				await transaction.rollback("未找到当前工序下领用物料信息"); //回滚事务
				return;
			} else {
				if (TempRAWPurRes.data.length <= 0) {
					await transaction.rollback("当前工序下无领用物料"); //回滚事务
					return;
				}
			}

			for (var TempIndex in TempRAWPurArray) {
				var TempThisRAWPur = TempRAWPurRes.data.find(function(e) {
					return e._id == TempRAWPurArray[TempIndex].ZCTRAWPurID;
				});
				if (pmJSTools.IsNullOrEmpty(TempThisRAWPur)) {
					await transaction.rollback("未找到相关领用物料信息"); //回滚事务
					return;
				}
				//本次提交的领料率
				var TempThisRate = parseFloat(((pmJSTools.GetNum(TempRAWPurArray[TempIndex].ZCTNum) /
					pmJSTools.GetNum(TempThisRAWPur.PMNum)) * 100).toFixed(2));
				//总领料率
				var TempZCTGetRate = parseFloat((pmJSTools.GetNum(TempThisRate) + pmJSTools.GetNum(
					TempThisRAWPur.ZCTGetRate)).toFixed(2));
				//总领料数
				var TempAllPMNum = parseFloat((pmJSTools.GetNum(TempThisRAWPur.ZCTGetNum) + pmJSTools
					.GetNum(TempRAWPurArray[TempIndex].ZCTNum)).toFixed(2));
				var TempUpDateResult = await transaction.collection("ZCTRAWPur").doc(TempRAWPurArray[
					TempIndex].ZCTRAWPurID).update({
					data: {
						ZCTGetNum: TempAllPMNum, //领料数
						ZCTGetRate: TempZCTGetRate, //领料率
						// ZCTGetNum:_.inc(pmJSTools.GetNum(TempRAWPurArray[TempIndex].ZCTNum)),    //领料数
						// ZCTGetRate:_.inc(pmJSTools.GetNum(TempThisRate)), //领料率
					}
				})
				if (TempUpDateResult.stats.updated <= 0) {
					await transaction.rollback("执行结果为空"); //回滚事务
					return;
				}
				//空条码提交处理
				if (!pmJSTools.IsNullOrEmpty(TempRAWPurArray[TempIndex].ZCTEmptyCodeNum)) {
					//查询申请记录是否存在以及审批
					const TempThisEmptyCodeRes = await transaction.collection('ZCTRAWPurCodeRecord')
						.where({
							ZCTRAWPurID: _.eq(TempRAWPurArray[TempIndex].ZCTRAWPurID),
							ZCTRAWPurCodeID: _.eq(""),
						}).get();
					if (TempThisEmptyCodeRes.data) {
						if (TempThisEmptyCodeRes.data.length <= 0) { //无空条码提交记录
							var EmptyCodeData = {
								ZCTRAWPurCodeID: "", //领用条码号
								ZCTPickingNum: pmJSTools.GetNum(TempRAWPurArray[TempIndex]
									.ZCTEmptyCodeNum), //领用数量
								ZCTRAWPurID: TempRAWPurArray[TempIndex].ZCTRAWPurID, //领用物料ID
								ZCTPIId: TempRAWPurArray[TempIndex].ZCTPIId, //PIID
								ZCTCodeScanner: TempMyOPENID, //扫码人Openid
								ZCTScanDate: TempRAWPurArray[TempIndex].ZCTScanDate, //扫码时间
								ZCTIsDelete: TempRAWPurArray[TempIndex].ZCTIsDelete, //是否删除
							};
							const TempAddRes = await transaction.collection("ZCTRAWPurCodeRecord").add({
								data: EmptyCodeData
							})
							if (TempAddRes.errMsg != "collection.add:ok") {
								await transaction.rollback("条码提交失败"); //回滚事务
								return;
							}
						} else { //有空条码提交记录，进行累加
							var TempCodeUpDateResult = await transaction.collection(
								"ZCTRAWPurCodeRecord").where({
								ZCTRAWPurID: _.eq(TempRAWPurArray[TempIndex].ZCTRAWPurID),
								ZCTRAWPurCodeID: _.eq(""),
							}).update({
								data: {
									ZCTPickingNum: _.inc(pmJSTools.GetNum(TempRAWPurArray[
										TempIndex].ZCTEmptyCodeNum)), //领料数
								}
							});
							if (TempCodeUpDateResult.stats.updated <= 0) {
								await transaction.rollback("领料数量提交失败"); //回滚事务
								return;
							}
						}
					}
				}
			}

			for (var i = 0; i < funcPra.RAWPurCodeList.length; i++) {
				if (!pmJSTools.IsNullOrEmpty(funcPra.RAWPurCodeList[i].ZCTRAWPurCodeID)) {
					var dataList = {
						ZCTRAWPurCodeID: funcPra.RAWPurCodeList[i].ZCTRAWPurCodeID, //领用条码号
						ZCTPickingNum: funcPra.RAWPurCodeList[i].ZCTPickingNum, //领用数量
						ZCTRAWPurID: funcPra.RAWPurCodeList[i].ZCTRAWPurID, //领用物料ID
						ZCTPIId: funcPra.RAWPurCodeList[i].ZCTPIId, //PIID
						ZCTCodeScanner: TempMyOPENID, //扫码人Openid
						ZCTScanDate: funcPra.RAWPurCodeList[i].ZCTScanDate, //扫码时间
						ZCTIsDelete: funcPra.RAWPurCodeList[i].ZCTIsDelete, //是否删除
					};
					//var dataList={};
					const TempAddRes = await transaction.collection("ZCTRAWPurCodeRecord").add({
						data: dataList
					})
					if (TempAddRes.errMsg != "collection.add:ok") {
						await transaction.rollback("条码提交失败"); //回滚事务
						return;
					}
				}
			}
			return "OK"; //全部执行成功，返回OK
		});
	} catch (e) {
		TempResObject.errMsg = "提交失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
/**
 * 获取领用物料扫码记录
 */
async function GetRAWPurCodeList(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料号
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTRAWPurID)) {
		TempResObject.errMsg = "RAWPurCodeSubmit:ZCTRAWPurID参数为空"
		return TempResObject;
	}
	var tempSkipAndLimit = [0, 0]
	if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) //通过参数funcPra.skipAndLimit携带分页参数
	{
		tempSkipAndLimit = funcPra.skipAndLimit
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempCodeRes = new Object;
			if (pmJSTools.IsNullOrEmpty(funcPra.ZCTCodeID)) {
				TempCodeRes = await transaction.collection('ZCTRAWPurCodeRecord').where({
						ZCTRAWPurID: _.eq(funcPra.ZCTRAWPurID)
					})
					.skip(tempSkipAndLimit[0])
					.limit(tempSkipAndLimit[1])
					.get();;
			} else {
				TempCodeRes = await transaction.collection('ZCTRAWPurCodeRecord').where({
					ZCTRAWPurID: _.eq(funcPra.ZCTRAWPurID),
					ZCTRAWPurCodeID: CloudDB.RegExp({
						regexp: funcPra.ZCTCodeID,
						options: 'i',
					}),
				}).get();
			}
			if (pmJSTools.IsNullOrEmpty(TempCodeRes.data)) {
				await transaction.rollback("OK"); //回滚事务
				return;
			} else {
				TempResObject.result = TempCodeRes.data;
			}
			return "OK";
		})
	} catch (e) {
		TempResObject.errMsg = "提交失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-6-7 10:44:42
 * 移除领用物料指定条码记录
 */
async function RemoveRAWPurCode(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证条码记录Id
	if (pmJSTools.IsNullOrEmpty(funcPra.RAWPurCodeId)) {
		TempResObject.errMsg = "RemoveRAWPurCode:RAWPurCodeId参数为空"
		return TempResObject;
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTRAWPurID)) {
		TempResObject.errMsg = "RemoveRAWPurCode:ZCTRAWPurID参数为空"
		return TempResObject;
	}
	//验证条码数量
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTPickingNum)) {
		TempResObject.errMsg = "RemoveRAWPurCode:ZCTPickingNum参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempRAWPurRes = await transaction.collection('ZCTRAWPur').where({
				_id: _.eq(funcPra.ZCTRAWPurID)
			}).get();
			if (!TempRAWPurRes.data) {
				await transaction.rollback("未找到此领用物料信息"); //回滚事务
				return;
			} else {
				if (TempRAWPurRes.data.length <= 0) {
					await transaction.rollback("未找到此领用物料信息"); //回滚事务
					return;
				}
			}
			var TempZCTGetNum = parseFloat((pmJSTools.GetNum(TempRAWPurRes.data[0].ZCTGetNum) - funcPra
				.ZCTPickingNum).toFixed(2));
			var TempZCTGetRate = parseFloat((pmJSTools.GetNum(TempZCTGetNum) / pmJSTools.GetNum(
				TempRAWPurRes.data[0].PMNum) * 100).toFixed(2));
			//修改领用物料的领料数和领料率
			var TempUpDateResult = await transaction.collection("ZCTRAWPur").doc(funcPra.ZCTRAWPurID)
				.update({
					data: {
						ZCTGetNum: TempZCTGetNum, //领料数
						ZCTGetRate: TempZCTGetRate, //领料率
						// ZCTGetNum: _.inc(-1),    //领料数-1
						// ZCTGetRate:_.inc(-TempZCTGetRate) , //领料率
					}
				})
			if (TempUpDateResult.stats.updated <= 0) {
				await transaction.rollback("修改领用物料对应数量失败"); //回滚事务
				return;
			}
			//删除扫码记录中此数据
			var TempDeleteRes = await transaction.collection('ZCTRAWPurCodeRecord').where({
				_id: funcPra.RAWPurCodeId
			}).remove();
			if (TempDeleteRes.stats.removed <= 0) {
				await transaction.rollback("移除条码记录失败"); //回滚事务
				return;
			}
		});
	} catch (e) {
		TempResObject.errMsg = "移除失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-6-22 17:06:11
 * 删除领用物料
 * @param {*} funcPra 
 * @param {*} _ 
 * @param {*} TempMyOPENID 
 */
async function DeleteRAWPur(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTRAWPurID)) {
		TempResObject.errMsg = "RemoveRAWPurCode:ZCTRAWPurID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempRAWPurRes = await transaction.collection('ZCTRAWPur').where({
				_id: _.eq(funcPra.ZCTRAWPurID)
			}).get();
			if (!TempRAWPurRes.data) {
				await transaction.rollback("未找到此领用物料信息"); //回滚事务
				return;
			} else {
				if (TempRAWPurRes.data.length <= 0) {
					await transaction.rollback("未找到此领用物料信息"); //回滚事务
					return;
				}
			}
			//删除此领用物料数据
			var TempDeleteRes = await transaction.collection('ZCTRAWPur').doc(funcPra.ZCTRAWPurID)
				.update({
					data: {
						ZCTIsDeleted: "YES", //是否删除
					}
				});
			if (TempDeleteRes.stats.updated <= 0) {
				await transaction.rollback("删除领用物料失败"); //回滚事务
				return;
			}
			//删除此领用物料的扫码记录
			var TempDeleteCodeRes = await transaction.collection('ZCTRAWPurCodeRecord').where({
				ZCTRAWPurID: funcPra.ZCTRAWPurID
			}).remove();
		});
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-6-23 11:52:56
 * 删除未分发的生产物料
 */
async function DeleteNoDistributeRAWPro(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTRAWProID)) {
		TempResObject.errMsg = "RemoveRAWPurCode:ZCTRAWProID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempRAWProRes = await transaction.collection('ZCTRAWPro').where({
				_id: _.eq(funcPra.ZCTRAWProID)
			}).get();
			if (!TempRAWProRes.data) {
				await transaction.rollback("未找到此生产物料信息"); //回滚事务
				return;
			} else {
				if (TempRAWProRes.data.length <= 0) {
					await transaction.rollback("未找到此生产物料信息"); //回滚事务
					return;
				}
				if (!pmJSTools.IsNullOrEmpty(TempRAWProRes.data[0].ZCTIsDistribute)) {
					if (TempRAWProRes.data[0].ZCTIsDistribute == "YES") {
						await transaction.rollback("此生产物料信息信息发生了变化，请刷新页面再尝试"); //回滚事务
						return;
					}
					if (TempRAWProRes.data[0].ZCTIsDeleted == "YES") {
						await transaction.rollback("当前物料已删除，请刷新页面"); //回滚事务
						return;
					}
				}
			}
			//删除此领用物料数据
			var TempDeleteRes = await transaction.collection('ZCTRAWPro').doc(funcPra.ZCTRAWProID)
				.update({
					data: {
						ZCTIsDeleted: "YES", //是否删除
					}
				});
			if (TempDeleteRes.stats.updated <= 0) {
				await transaction.rollback("未能成功执行"); //回滚事务
				return;
			}
		});
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
/**
 * Creator:SE24,Date:2021-6-24 14:01:40
 * 领用物料数量提交
 */
async function RAWPurNumSubmit(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTRAWPurID)) {
		TempResObject.errMsg = "RAWPurNumSubmit:ZCTRAWPurID参数为空"
		return TempResObject;
	}
	//验证提交数量
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGetNum)) {
		TempResObject.errMsg = "RAWPurNumSubmit:ZCTGetNum参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			//查询申请记录是否存在以及审批
			const TempRAWPurRes = await transaction.collection('ZCTRAWPur').where({
				_id: _.eq(funcPra.ZCTRAWPurID)
			}).get();
			if (!TempRAWPurRes.data) {
				await transaction.rollback("未找到当前工序下领用物料信息"); //回滚事务
				return;
			} else {
				if (TempRAWPurRes.data.length <= 0) {
					await transaction.rollback("当前工序下无领用物料"); //回滚事务
					return;
				}
				if (!pmJSTools.IsNullOrEmpty(TempRAWPurRes.data[0].ZCTIsDistribute)) {
					if (TempRAWPurRes.data[0].ZCTIsDeleted == "YES") {
						await transaction.rollback("当前领用物料已删除"); //回滚事务
						return;
					}
				}
			}
			var TempThisRAWPur = TempRAWPurRes.data[0];
			//加上本次的总领料数
			var TempAllGetPMNum = parseFloat((pmJSTools.GetNum(TempThisRAWPur.ZCTGetNum) + pmJSTools
				.GetNum(funcPra.ZCTGetNum)).toFixed(2));
			//加上本次的领料率
			var TempAllRate = parseFloat(((pmJSTools.GetNum(TempAllGetPMNum) / pmJSTools.GetNum(
				TempThisRAWPur.PMNum)) * 100).toFixed(2));
			var TempUpDateResult = await transaction.collection("ZCTRAWPur").doc(funcPra.ZCTRAWPurID)
				.update({
					data: {
						ZCTGetNum: TempAllGetPMNum, //领料数
						ZCTGetRate: TempAllRate, //领料率
					}
				})
			if (TempUpDateResult.stats.updated <= 0) {
				await transaction.rollback("执行结果为空"); //回滚事务
				return;
			}
			return "OK"; //全部执行成功，返回OK
		});
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}

/**
 * Creator:SE11,Date:2021-6-24
 * 任务海报页操作
 * @param {*} funcPra 
 * @param {*} _ 
 * @param {*} TempMyOPENID 
 */
async function FunOperateByTaskSlider(funcPra, _, TempMyOPENID, OptionUserID, db) {
	var errMsg = ""; // 用于返回
	var result = []; // 用于返回
	var serRes = {
		errMsg: "",
		result: []
	};

	var tempSkipAndLimit = [0, 20]
	if (!pmJSTools.IsNullOrEmpty(funcPra.skipAndLimit)) {
		tempSkipAndLimit = funcPra.skipAndLimit
	}

	var DBConditions;
	var DBExeData;
	switch (funcPra.PMOption) {
		//根据距离获取数据
		case "PMGetCOIByLocation": {
			if ((pmJSTools.IsNullOrEmpty(funcPra.latitude) && pmJSTools.IsNullOrEmpty(funcPra.longitude)) || (
					funcPra.latitude == 0 && funcPra.longitude == 0)) {
				if ((pmJSTools.IsNullOrEmpty(funcPra.DBlatitude) && pmJSTools.IsNullOrEmpty(funcPra.DBlongitude)) ||
					(funcPra.DBlatitude == 0 && funcPra.DBlongitude == 0)) {
					errMsg = "请开启手机定位，并允许获取您的位置，便于给您推荐任务"
					result = []
					return {
						errMsg,
						result
					}
				}
			}
			var TempDN = new Date();
			var TempNowMonth = (TempDN.getMonth() + 1) > 9 ? TempDN.getMonth() + 1 : "0" + (TempDN.getMonth() + 1);
			var TempNowDay = TempDN.getDate() > 9 ? TempDN.getDate() : "0" + TempDN.getDate();
			var TempDateMin = TempDN.getFullYear() + "/" + TempNowMonth + "/" + TempNowDay;
			var TempNextMonth;
			var TempNextYear = TempDN.getFullYear();
			if (TempDN.getMonth() + 1 == 12) {
				TempNextMonth = "01";
				TempNextYear = TempNextYear + 1;
			} else {
				TempNextMonth = (TempDN.getMonth() + 2) > 9 ? TempDN.getMonth() + 2 : "0" + (TempDN.getMonth() + 2);
			}
			var TempDateMax = TempNextYear + "/" + TempNextMonth + "/" + TempNowDay;

			var TempGetCOIByLocationRes = await uniCloud.database().collection("PMPCustomerOrderItem")
				.where({
					PMOrderState: _.in(['PUBLISH', 'WaitAuthorize']),
					ZCTIsDeleted: _.neq("YES"),
					ZCTPlanDeliDateShort: _.gte(TempDateMin).and(_.lte(TempDateMax)),
					ZCTLocation: _.geoNear({
						geometry: db.Geo.Point(funcPra.longitude, funcPra.latitude)
					})
				})
				.skip(tempSkipAndLimit[0])
				.limit(tempSkipAndLimit[1])
				.orderBy("ZCTPublishTime", "desc")
				.get()
			var TempCOIRes = {
				errMsg: TempGetCOIByLocationRes.errMsg,
				result: TempGetCOIByLocationRes.data
			}
			var TempData = pmJSTools.getResFromReturn(TempCOIRes) //getResFromReturn整合和简化sertRes供前端使用。
			serRes.errMsg = TempData.errMsg
			serRes.result = TempData.result
			var TempPMCOIList = TempData.result;
			var TempConditionsMyCOIList = [];
			var TempConditionsUserList = []
			var TempConditionsUserIDList = []
			if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
				//拼装条件
				for (TempKey in TempPMCOIList) {
					TempConditionsMyCOIList.push(TempPMCOIList[TempKey]._id);
					//TempConditionsUserList.push(TempPMCOIList[TempKey]._openid);
					TempConditionsUserIDList.push(TempPMCOIList[TempKey].PMCreater);
				}
			}
			if (!pmJSTools.IsNullOrEmpty(TempConditionsMyCOIList)) //条件满足进行二次查询 是否申请
			{
				var TempMyCOIDataList = [];
				let TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
						ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
						_openid: _.and(_.neq(""), _.eq(TempMyOPENID))
					},
					{
						ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
						PMUserID: _.and(_.neq(""), _.eq(OptionUserID))
					}
				])).get();
				if (!pmJSTools.IsNullOrEmpty(TempMyCOIRes.data.length) && TempMyCOIRes.data.length > 0) {
					TempMyCOIDataList = TempMyCOIRes.data;
				}
				for (var TempKey in TempPMCOIList) {
					TempPMCOIList[TempKey].calMyState = "";
					if (!pmJSTools.IsNullOrEmpty(TempPMCOIList[TempKey]._openid)) {
						if (TempPMCOIList[TempKey]._openid == TempMyOPENID) {
							TempPMCOIList[TempKey].calMyState = "APPLY";
							continue;
						}
					} else {
						if (!pmJSTools.IsNullOrEmpty(funcPra.TempCurrentUserID)) {
							if (TempPMCOIList[TempKey].PMCreater == funcPra.TempCurrentUserID) {
								TempPMCOIList[TempKey].calMyState = "APPLY";
								continue;
							}
						}
					}
					for (var TempKey1 in TempMyCOIDataList) {
						if (TempMyCOIDataList[TempKey1].ZCTPMCOI_id == TempPMCOIList[TempKey]._id) {
							if (TempMyCOIDataList[TempKey1].ZCTTaskState == "WATCH" || TempMyCOIDataList[TempKey1]
								.ZCTTaskState == "REFUSED") {
								TempPMCOIList[TempKey].calMyState = "WATCH";
							} else {
								TempPMCOIList[TempKey].calMyState = "APPLY";
							}
						}
					}
				}
			}
			//if (!pmJSTools.IsNullOrEmpty(TempConditionsUserList)) 
			if (!pmJSTools.IsNullOrEmpty(TempConditionsUserIDList)) //条件满足进行二次查询  发布人信息
			{
				var DBConditions = [{
					collectionsName: "PMUser",
					getFields: {

					},
					whereConditions: {
						//WXOpenID: _.in(TempConditionsUserList)
						PMUserID: _.in(TempConditionsUserIDList)
					},
					skipAndLimit: [0, 0],
					orderByConditions: [
						["WXLastBindTime", "desc"],
					]
				}]
				var resData = await cloud.callFunction //await调用远程云函数
				({
					name: 'getCollectionsFromServer',
					data: {
						DBConditions,

					},
				})
				var TempOtherData = pmJSTools.getResFromReturn(
					resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
				var TempUserDataList = TempOtherData.result[0];
				for (var TempKey in TempPMCOIList) {
					for (var TempKey1 in TempUserDataList) {
						//if (TempUserDataList[TempKey1].WXOpenID==TempPMCOIList[TempKey]._openid)
						if (TempUserDataList[TempKey1].PMUserID == TempPMCOIList[TempKey].PMCreater) {
							TempPMCOIList[TempKey].PMUser = TempUserDataList[TempKey1];
							if (!pmJSTools.IsNullOrEmpty(OptionUserID) && OptionUserID == TempUserDataList[TempKey1]
								._id) {
								TempPMCOIList[TempKey].calMyState = "APPLY";
							}
						}
					}
				}
			}
			serRes.result = TempPMCOIList;
			return serRes;
		}
		break;
		//根据任务COIID获取数据
	case "GetTaskSliderShareData": {
		if (pmJSTools.IsNullOrEmpty(funcPra.PMCOIId)) {
			errMsg = "GetTaskSliderShareData:位置参数为空，无法执行"
			result = []
			return {
				errMsg,
				result
			}
		}
		var TempGetCOIByLocationRes = await uniCloud.database({
				env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
			}).collection("PMPCustomerOrderItem")
			.where({
				_id: _.eq(funcPra.PMCOIId),
				ZCTIsDeleted: _.neq("YES")
			})
			.skip(tempSkipAndLimit[0])
			.limit(tempSkipAndLimit[1])
			.orderBy("ZCTPublishTime", "desc")
			.get()
		var TempCOIRes = {
			errMsg: TempGetCOIByLocationRes.errMsg,
			result: TempGetCOIByLocationRes.data
		}
		var TempData = pmJSTools.getResFromReturn(TempCOIRes) //getResFromReturn整合和简化sertRes供前端使用。
		serRes.errMsg = TempData.errMsg
		serRes.result = TempData.result
		var TempPMCOIList = TempData.result;
		var TempConditionsMyCOIList = [];
		var TempConditionsUserList = []
		var TempConditionsUserIDList = []
		if (TempData.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(TempData.result)) {
			if (TempPMCOIList[0].PMOrderState != "PUBLISH" && TempPMCOIList[0].PMOrderState != "WaitAuthorize") {
				TempPMCOIList[0].calMyState = "APPLY";
				for (TempKey in TempPMCOIList) {
					TempConditionsUserList.push(TempPMCOIList[TempKey]._openid);
				}
			} else {
				//拼装条件
				for (TempKey in TempPMCOIList) {
					TempConditionsMyCOIList.push(TempPMCOIList[TempKey]._id);
					//TempConditionsUserList.push(TempPMCOIList[TempKey]._openid);
					TempConditionsUserIDList.push(TempPMCOIList[TempKey].PMCreater);
				}
			}

		}
		if (!pmJSTools.IsNullOrEmpty(TempConditionsMyCOIList)) //条件满足进行二次查询 是否申请
		{
			var TempMyCOIDataList = [];
			let TempMyCOIRes = await db.collection('ZCTMyPMCOIList').where(_.or([{
					ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
					_openid: _.and(_.neq(""), _.eq(TempMyOPENID))
				},
				{
					ZCTPMCOI_id: _.in(TempConditionsMyCOIList),
					PMUserID: _.and(_.neq(""), _.eq(OptionUserID))
				}
			])).get();
			if (!pmJSTools.IsNullOrEmpty(TempMyCOIRes.data.length) && TempMyCOIRes.data.length > 0) {
				TempMyCOIDataList = TempMyCOIRes.data;
			}
			for (var TempKey in TempPMCOIList) {
				TempPMCOIList[TempKey].calMyState = "";
				if (TempPMCOIList[TempKey]._openid == TempMyOPENID) {
					TempPMCOIList[TempKey].calMyState = "APPLY";
					continue;
				}
				for (var TempKey1 in TempMyCOIDataList) {
					if (TempMyCOIDataList[TempKey1].ZCTPMCOI_id == TempPMCOIList[TempKey]._id) {
						if (TempMyCOIDataList[TempKey1].ZCTTaskState == "WATCH" || TempMyCOIDataList[TempKey1]
							.ZCTTaskState == "REFUSED") {
							TempPMCOIList[TempKey].calMyState = "WATCH";
						} else {
							TempPMCOIList[TempKey].calMyState = "APPLY";
						}
					}
				}
			}
		}
		if (!pmJSTools.IsNullOrEmpty(TempConditionsUserIDList)) //条件满足进行二次查询  发布人信息
		{
			var DBConditions = [{
				collectionsName: "PMUser",
				getFields: {

				},
				whereConditions: {
					//WXOpenID: _.in(TempConditionsUserList)
					PMUserID: _.in(TempConditionsUserIDList)
				},
				skipAndLimit: [0, 0],
				orderByConditions: [
					["WXLastBindTime", "desc"],
				]
			}]
			var resData = await cloud.callFunction //await调用远程云函数
			({
				name: 'getCollectionsFromServer',
				data: {
					DBConditions,

				},
			})
			var TempOtherData = pmJSTools.getResFromReturn(
				resData) //getResFromReturn整合和简化sertRes供前端使用。//从数据库的的值一定要先整合，脱壳
			var TempUserDataList = TempOtherData.result[0];
			for (var TempKey in TempPMCOIList) {
				for (var TempKey1 in TempUserDataList) {
					if (TempUserDataList[TempKey1].PMUserID == TempPMCOIList[TempKey].PMCreater) {
						TempPMCOIList[TempKey].PMUser = TempUserDataList[TempKey1];
						if (!pmJSTools.IsNullOrEmpty(OptionUserID) && OptionUserID == TempUserDataList[TempKey1]
							._id) {
							TempPMCOIList[TempKey].calMyState = "APPLY";
						}
					}
				}
			}
		}
		serRes.result = TempPMCOIList;
		return serRes;
	}
	break;
	default: {
		var ResData = {
			errMsg: "OperateByTaskSlider功能类型字段为空",
			result: []
		}
		return ResData;
	}
	}
}

async function GetDistributeCOIID(funcPra, _, TempMyOPENID) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证领用物料Id
	if (pmJSTools.IsNullOrEmpty(funcPra.PMTaskID)) {
		TempResObject.errMsg = "RAWPurNumSubmit:PMTaskID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})
	let TempResult;
	try {
		TempCOIRes = await CloudDB.collection('PMPCustomerOrderItem').where({
			ZCTSourcePositionID: _.eq(funcPra.PMTaskID),
			ZCTIsDeleted: _.neq("YES")
		}).get();
		if (!TempCOIRes.data) {
			TempResult = "未找到此任务分发的交付任务信息";
		} else {
			if (TempCOIRes.data.length <= 0) {
				TempResult = "未找到此任务分发的交付任务信息";
			} else {
				TempResult = "OK";
				TempResObject.errMsg = "OK";
				TempResObject.result = TempCOIRes.data[0]._id;
			}
		}
	} catch (e) {
		TempResObject.errMsg = pmJSTools.GetStr(e);
		return TempResObject;
	}
	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}

/**
 * Creator：SE24,Date:2021-7-26 09:27:36、
 * 离开聊天页面
 */
async function LeavePage(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGroupId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:ZCTGroupId参数为空"
		return TempResObject;
	}
	if (pmJSTools.IsNullOrEmpty(funcPra.MyUserId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:MyUserID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: ZCTenv
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {

			const TempUserRes = await transaction.collection('PMUser').where({
				_id: _.eq(funcPra.MyUserId)
			}).get();
			if (pmJSTools.IsNullOrEmpty(TempUserRes.data)) {
				await transaction.rollback("获取用户信息失败"); //回滚事务
				return;
			}
			//查询是否已有聊天组
			//相当于where (ZCTSponsorUserId=A and ZCTCommunicatorsUserId =B) or (ZCTSponsorUserId=B and ZCTCommunicatorsUserId =A)
			const TempGroupRes = await transaction.collection('ZCTChatGroup').doc(funcPra.ZCTGroupId)
				.get();
			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天组信息失败"); //回滚事务
				return;
			} else {
				//修改聊天组中自己的页面浏览状态
				var TempUpdateData = {};
				if (TempGroupRes.data.ZCTCommunicatorsUserId == funcPra.MyUserId) {
					TempUpdateData = {
						ZCTCommunicatorUnreadNum: 0,
						ZCTCommunicatorsState: "NO",
					}
				} else {
					TempUpdateData = {
						ZCTSponsorUnreadNum: 0,
						ZCTSponsorState: "NO",
					}
				}
				//修改聊天组中自己的状态
				var TempUpDateResult = await transaction.collection("ZCTChatGroup").doc(funcPra
					.ZCTGroupId).update({
					data: TempUpdateData
				})
				if (TempUpDateResult.errMsg != "document.update:ok") {
					//console.log("修改状态失败");
				}
			}
			return {
				errMsg: "OK",
				result: [],
			};
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	TempResObject.errMsg = TempResult.errMsg;
	return TempResObject;
}

/**
 * Creator:SE24,Date:2021-8-6 18:38:46
 * 进入页面修改状态
 */
async function EnterPage(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGroupId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:ZCTGroupId参数为空"
		return TempResObject;
	}
	if (pmJSTools.IsNullOrEmpty(funcPra.MyUserId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:MyUserID参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: ZCTenv
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {

			const TempUserRes = await transaction.collection('PMUser').where({
				_id: _.eq(funcPra.MyUserId)
			}).get();
			if (pmJSTools.IsNullOrEmpty(TempUserRes.data)) {
				await transaction.rollback("获取用户信息失败"); //回滚事务
				return;
			}
			//查询是否已有聊天组
			//相当于where (ZCTSponsorUserId=A and ZCTCommunicatorsUserId =B) or (ZCTSponsorUserId=B and ZCTCommunicatorsUserId =A)
			const TempGroupRes = await transaction.collection('ZCTChatGroup').doc(funcPra.ZCTGroupId)
				.get();
			if (!TempGroupRes.data) {
				await transaction.rollback("获取聊天组信息失败"); //回滚事务
				return;
			} else {
				//修改聊天组中自己的页面浏览状态
				var TempUpdateData = {};
				if (TempGroupRes.data.ZCTCommunicatorsUserId == funcPra.MyUserId) {
					TempUpdateData = {
						ZCTCommunicatorUnreadNum: 0,
						ZCTCommunicatorsState: "YES",
					}
				} else {
					TempUpdateData = {
						ZCTSponsorUnreadNum: 0,
						ZCTSponsorState: "YES",
					}
				}
				//修改聊天组中自己的状态
				var TempUpDateResult = await transaction.collection("ZCTChatGroup").doc(funcPra
					.ZCTGroupId).update({
					data: TempUpdateData
				})
				if (TempUpDateResult.errMsg != "document.update:ok") {
					//console.log("修改状态失败");
				}
			}
			return {
				errMsg: "OK",
				result: [],
			};
		});
	} catch (e) {
		TempResObject.errMsg = "获取聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	TempResObject.errMsg = TempResult.errMsg;
	return TempResObject;
}

async function DeleteGroup(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	//验证COIID
	if (pmJSTools.IsNullOrEmpty(funcPra.ZCTGroupId)) {
		TempResObject.errMsg = "GetGroupIdByOpenID:ZCTGroupId参数为空"
		return TempResObject;
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: ZCTenv
	})
	let TempResult;
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempUserRes = await transaction.collection('ZCTChatGroup').where({
				_id: _.eq(funcPra.ZCTGroupId)
			}).remove();

			TempUserRes = await transaction.collection('ZCTCommunicateRecord').where({
				ZCTGroupId: _.eq(funcPra.ZCTGroupId)
			}).remove();
			return {
				errMsg: "OK",
				result: [],
			};
		});
	} catch (e) {
		TempResObject.errMsg = "删除聊天信息失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}
	TempResObject.errMsg = TempResult.errMsg;
	return TempResObject;
}



/**
 * Creator:SE13,Date:2021-8-5 15:20:05
 * 执行功能：抖音小程序创建任务
 * @param {object} funcPra 
 * @param {object} _ 
 */
async function PMCOIAddNewDY(funcPra, _) {
	//返回消息
	var TempResObject = {
		errMsg: "",
		result: []
	}
	if (pmJSTools.IsNullOrEmpty(funcPra)) {
		errMsg = "PMCOIAddNewDY:创建任务PMCOI时，参数为空。"
		result = []
		return {
			errMsg,
			result
		}
	}
	if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI)) {
		errMsg = "PMCOIAddNewDY:创建任务PMCOI时，参数为空。"
		result = []
		return {
			errMsg,
			result
		}
	}

	if (pmJSTools.IsNullOrEmpty(funcPra.PMCOI.PMCreater)) {
		errMsg = "PMCOIAddNewDY:PMCreater为空，无法执行"
		result = []
		return {
			errMsg,
			result
		}
	}
	const CloudDB = uniCloud.database({
		// 该参数从 wx-server-sdk 1.7.0 开始支持，默认为 true，指定 false 后可使得 doc.get 在找不到记录时不抛出异常
		throwOnNotFound: false,
		env: 'tcb-ecxw1hs9f19080-6d00j26b1957e'
	})


	let TempResult;
	//开启事务
	try {
		TempResult = await CloudDB.runTransaction(async transaction => {
			var TempWXOPENID = "" //查到WXOPENID赋值，
			var TempPMUserName = "" //查到PMUserName赋值，
			var TempPMUserData = "" //获取PMUser表数据，

			//1.判断该人员是否有注册过信息，如果注册过信息需要获取openid等信息，如果没有注册过，需要自动注册个信息。
			const TempPMUserRes = await transaction.collection('PMUser').where({
				PMUserID: _.eq(funcPra.PMCOI.PMCreater)
			}).get();
			if (!TempPMUserRes.data) {
				await transaction.rollback("获取当前操作人数据失败，请重试！"); //回滚事务
				return;
			} else {
				if (TempPMUserRes.data.length <= 0) {
					//创建账户
					var TempRecordPMUserList = {
						PMIsValid: "Yes",
						PMPhoneNB: funcPra.PMCOI.PMCreater,
						PMUserName: funcPra.PMCOI.PMCreater,
						PMUserID: funcPra.PMCOI.PMCreater,
						WXLastBindTime: new Date(),
						ZCTReleaseNum: 1, //发布数为1,
						ZCTUserPhoto: "cloud://tcb-ecxw1hs9f19080-6d00j26b1957e.7a63-tcb-ecxw1hs9f19080-6d00j26b1957e-1304681996/PMCOIProductPic/zanwutupian2.png"
					}
					const TempAddPMUserRes = await transaction.collection("PMUser").add({
						data: TempRecordPMUserList
					})
					if (TempAddPMUserRes.errMsg != "collection.add:ok") {
						await transaction.rollback("创建操作人账户失败，请重试！"); //回滚事务
						return;
					}
					//TempChatGroupAuthorizationID=TempAddPMUserRes._id//获取聊天组_id 

				} else {
					//获取已注册账户信息
					TempPMUserData = TempPMUserRes.data[0]
					TempWXOPENID = pmJSTools.IsNullOrEmpty(TempPMUserData.WXOpenID) ? "" :
						TempPMUserData.WXOpenID
					TempPMUserName = pmJSTools.IsNullOrEmpty(TempPMUserData.PMUserName) ? "" :
						TempPMUserData.PMUserName
					Temp_id = pmJSTools.IsNullOrEmpty(TempPMUserData._id) ? "" : TempPMUserData._id
					if (TempPMUserData.PMIsValid == "No") {
						await transaction.rollback("当前账户已失效，请查证。"); //回滚事务
						return;
					}
					//wxContext.OPENID=TempWXOPENID
					funcPra.PMCOI.ZCTCreaterName = TempPMUserName

					//修改发布数
					var TempUserUpdateResult = await transaction.collection("PMUser").doc(Temp_id)
						.update({
							data: {
								ZCTReleaseNum: _.inc(1)
							}
						})
					if (TempUserUpdateResult.stats.updated <= 0) {
						await transaction.rollback("PMUser更新影响行为0，可能是权限原因造成的。");
						return;
					}
				}
			}

			//2.创建并发布任务
			var TempRecordCOIList = {
				PMInnerCustomerOrderItemID: funcPra.PMCOI.PMInnerCustomerOrderItemID, //	客户子订单ID	
				PMInnerCustomerOrderID: "1", //	客户订单页号	
				PMOutCustomerOrderID: "", //	外部客户单的编号	
				PMCustomerProductID: "", //	客户产品号	
				PMCustomerProductName: "", //	客户产品名 【选用】	
				PMCustomerProductDrawing: "", //	客户产品对应客户图号，在编辑订单时可为空	
				PMInnerProductID: funcPra.PMCOI.PMInnerProductID, //	内部零件号	
				PMBOMID: "", //	BOM版本号	
				PMInnerProductName: funcPra.PMCOI.PMInnerProductName, //	内部零件名	
				PMInnerProductSpec: "", //	内部零件规格	
				PMCustomerProductSpec: "", //	客户零件规格	
				PMOrderType: "CUSTOM", //	订单类型	CUSTOM/客户订单，INNER/内部订单，SAMPLE/样品订单
				PMOrderProType: funcPra.PMCOI.PMOrderProType, //	订单生产类型	劳务  订单生产
				PMOrderUnit: funcPra.PMCOI.PMOrderUnit, //	计量单位	
				PMOrderNum: funcPra.PMCOI.PMOrderNum, //	订单数量	
				PMTaxRate: 0, //	税率	
				PMUnitPriceNoTax: 0, //	不含税单价	
				PMUnitPriceWithTax: 0, //	含税单价	
				PMTotalPriceWithTax: 0, //	含税总价	
				PMCustomerDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	需求交货日期	
				PMPlanDeliveryDate: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期	
				PMRemark: "", //	备注	
				PMSellCheckState: "", //	销售审核状态	通过："YES"， 否则未通过
				PMSellChecker: "", //	销售审核人	
				PMSellCheckTime: new Date(), //	销售审核时间	
				PMTechCheckState: "", //	技术审核状态	通过："YES"， 否则未通过
				PMTechChecker: "", //	技术审核人	
				PMTechCheckTime: new Date(), //	技术审核时间	
				PMQualityCheckState: "", //	品质审核状态	通过："YES"， 否则未通过
				PMQualityChecker: "", //	品质审核人	
				PMQualityCheckTime: new Date(), //	品质审核时间	
				PMPlanCheckState: "", //	计划审核状态	通过："YES"， 否则未通过
				PMPlanChecker: "", //	计划审核人	
				PMPlanCheckTime: new Date(), //	计划审核时间	
				PMCreater: funcPra.PMCOI.PMCreater, //	创建人	
				PMCreateTime: new Date(), //	创建时间	
				PMChanger: "", //	修改人	
				PMChangeTime: new Date(), //	修改时间	
				PMIsUrgent: funcPra.PMCOI.PMIsUrgent, //	是否紧急	YES:紧急， 其他不紧急
				PMIsUrgentBy: "", //	由谁确认紧急	
				PMIsUrgentTime: new Date(), //	确认紧急的时间	
				//PMOrderState: "NORELEASE", //	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单
				PMOrderState: "PUBLISH",
				PMCustomerID: "", //	客户ID	
				PMChangeRecord: "", //	转内部订单记录	
				PMChangeRemark: "", //	转内部订单备注	
				PMOrderAttribute: "ORDINARY", //	订单特性	普通订单(ORDINARY)不需要评审,特殊订单（SPECIAL）需要评审
				ZCTPlanDeliDateShort: funcPra.PMCOI.ZCTPlanDeliDateShort, //	计划交货日期
				ZCTCreaterName: funcPra.PMCOI.ZCTCreaterName, //	创建名字,
				ZCTProductURL: funcPra.PMCOI.ZCTProductURL, //产品图片
				ZCTFinishedRate: 0, // 完成率
				ZCTFinishedNum: 0, //完成率       
				ZCTPlanNeedNum: funcPra.PMCOI.PMOrderNum, //还需计划数量（计算值）
				ZCTIsDeleted: "",
				ZCTApplicationCount: 0, //申请数
				PMJobType: funcPra.PMCOI.PMJobType, //工种类型
				ZCTJobPayType: funcPra.PMCOI.ZCTJobPayType, //结款方式
				ZCTFeesInstructions: pmJSTools.IsNullOrEmpty(funcPra.PMCOI.ZCTFeesInstructions) ?
					"" : funcPra.PMCOI.ZCTFeesInstructions, //费用及相关说明
				ZCTTaskPictureLst: funcPra.PMCOI.ZCTTaskPictureLst, //生产环境及任务相关图片 
				_openid: TempWXOPENID,
				ZCTCOILatit: funcPra.PMCOI.ZCTCOILatit,
				ZCTCOILongit: funcPra.PMCOI.ZCTCOILongit,
				ZCTAddress: funcPra.PMCOI.ZCTAddress,
				ZCTPublishTime: new Date(),
				ZCTLocation: {
					type: 'Point',
					coordinates: [funcPra.PMCOI.ZCTCOILongit, funcPra.PMCOI.ZCTCOILatit]
				}
			}
			const TempAddCOIRes = await transaction.collection("PMPCustomerOrderItem").add({
				data: TempRecordCOIList
			})
			if (TempAddCOIRes.errMsg != "collection.add:ok") {
				await transaction.rollback("创建操作人账户失败，请重试！"); //回滚事务
				return;
			}



			return "OK"; //全部执行成功，返回OK
		})
	} catch (e) {
		TempResObject.errMsg = "创建失败:" + pmJSTools.GetStr(e);
		return TempResObject;
	}

	if (TempResult == "OK") {
		TempResObject.errMsg = "OK";
	} else {
		TempResObject.errMsg = pmJSTools.GetStr(TempResult);
	}
	return TempResObject;
}
