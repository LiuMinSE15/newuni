//声明曝露函数给require方
module.exports = {
  PMObjectList: PMObjectList
};

function PMObjectList(TempObjName) {
  //对象号1： PMUser, (用户对象)
  this.PMUser = {
    PMUserID: "",

    /**工号*/
    PMUserName: "",

    /**成员姓名*/
    PMMemberType: "",

    /**成员类型*/
    PMPassword: "",

    /**密码*/
    PMIDKey: "",

    /**卡号*/
    PMPhoneNB: "",
    //手机号码*/
    PMEmailAddress: "",
    //邮箱*/
    PMDepartment: "",
    //所属部门*/
    PMIsValid: "",
    //是否启用*/
    PMRoleID: "",
    //角色号*/
    WXLastBindTime: new Date(),
    //最后一次绑定帐号时间*/
    WXLastSMSCode: "",
    //最后一次验证码*/
    WXLastSMSPhoneNW: "",
    //最后一次验证手机号*/
    WXOpenID: "",
    //微信OPENID*/
    WXLastSMSUserName: "",
    //最后一次绑定用户名*/
    WXSMSCode: "",
    //验证码*/
    _id: "",
    //数据库流水号*/
    ZCTRecommendNum: 0,
    //推荐数
    ZCTGetNum: 0,
    //已获取数
    ZCTResidueNum: 0,
    //可获取次数
    ZCTJobPayType: "",
    //职位特性（长期/日结）
    ZCTlatitude: "",
    //经度
    ZCTlongitude: "",
    //纬度
    ZCTReleaseNum: 0,
    //发布数
    ZCTReleaseAcceNum: 0,
    //发布验收数
    ZCTReceiveOrderNum: 0,
    //接单数
    ZCTDeliveryAcceNum: 0,
    //交付验收数
    ZCTNewlongitude: "",
    //最新经度
    ZCTNewlatitude: "",
    //最新纬度
    ZCTNewLocation: "" //最新坐标

  }; //对象号2：PMPProduct,(产品)

  this.PMPProduct = {
    PMProductID: "",

    /*产品号*/
    PMMaterialsType: "",

    /*物品类型 FINISHED:成品，RAW:原料，PARTS:部件, ASSEMBLY:组件,AuxMaterials:辅料*/
    PMProductType: "",

    /*产品类型 OWNPRODUCT:自制件,OUTSOURCING:委外,:PURCHASE采购*/
    PMProductName: "",

    /*产品名*/
    PMGuarantee: 0,

    /*保质期*/
    PMGuaranteeType: "",

    /*保质期单位 DAY:天、WEEK:周、MONTH:月、YEAR:年*/
    PMUnit: "",

    /*单位ID*/
    PMProductWeight: "",

    /*产品单重*/
    PMSpecification: "",

    /*规格型号*/
    PMStockUpperNum: 0,

    /*库存上限*/
    PMStockLowerNum: 0,

    /*库存下限*/
    PMSupplierID: "",

    /*默认供应商ID*/
    PMRemark: "",

    /*描述*/
    PMDullPeriod: 0,

    /*工艺周期*/
    PMUnitPrice: 0,

    /*含税*/
    PMNUnitPrice: 0,

    /*不含税*/
    PMSeries: "",

    /*物品系列*/
    PMDullDeadline: 0,

    /*呆滞时间*/
    PMCreationTime: new Date(),

    /*创建时间*/
    PMFounder: "",
    //	创建人*/
    PMLastModifiedTime: new Date(),

    /*最后修改时间*/
    PMLastModifiedRener: "",

    /*最后修改人*/
    PMSpecialMaterial: "",

    /*是否为特殊物料*/
    PMPRoductImgURL: "",

    /*图片路径*/
    PMPRoductImgName: "",

    /*产品图片名称*/
    PMUnpackDueDays: "",

    /*开箱到期天数*/
    PMUnitName: "",

    /*计量单位名*/
    ERPdModifyDate: new Date(),

    /*ERP最后修改日期*/
    ERPdSDate: new Date(),

    /*ERP创建日期*/
    ERPSynchronousDate: new Date(),

    /*同步日期*/
    ERPIsSynchronous: ""
    /*是否为ERP同步 Y:同步  N:非同步*/

  }; //对象号3：PMPProcessTableStandard（部序）

  this.PMPProcessTableStandard = {
    PMProductID: "",
    //	内部零件号
    PMVersionID: "",
    //		产品版本号
    PMPTSID: "",
    //		部序表识别号
    PMPTSName: "",
    //		部序名
    PMVersionIDDesc: "",
    //		BOM版本说明 
    PMTechReuirment: "",
    //		技术要求
    PMDrawingPath: "",
    //		图纸所在的路径
    PMShopCode: "",
    //		车间号
    PMLineGroupCode: "",
    //		生产线号
    PMPTSState: "",
    //		BOM状态：  启用、停用
    PMIsDefault: "",
    //		是否为默认BOM YES：是
    PMCreationTime: new Date(),
    //		创建时间
    PMFounder: "",
    //		创建人:
    PMLastModifiedTime: new Date(),
    //		最后修改时间
    PMLastModifiedRener: "",
    //		最后修改人
    PMRemark: "",
    //		描述
    PMBomVersionState: "",
    //		BOM版本审核状态（通过后才能启用） AWAIT:待审核、YES:通过、NO:驳回
    PMShopZoneID: "",
    //		产线编号
    PMMinimumFlow: 0,
    //		最小流转量
    PMMinimumCycle: 0,
    //		最小流转周期 按分钟进行计算
    PMStandardPackNum: 0,
    //		标准包装数
    PMProductBindingBox: "" //		扫码包装绑定 YES:强绑定、NO:非强绑定

  }; //对象号4：PMPOneProcessPra（单个工序定义）

  this.PMPOneProcessPra = {
    PMProductID: "",
    //	内部零件号	
    PMVersionID: "",
    //	版本号	
    PMProcessPraSeqID: 0,
    //	在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)	
    PMOPPID: "",
    //	单个工序键值组合	
    PMStanardProcessName: "",
    //	标准工序号	
    PMStanardProcessType: "",
    //	工序类型	INNER：自制工序、OUTSOURCE：外协工序
    PMProcessName: "",
    //	标准工序名	
    PMIsYes: "",
    //	是否启用	YES:启动
    PMIsUniqueMarkNeed: "",
    //	是否需要标签 【选用】	
    PMMarkStra: "",
    //	打标计算策略【选用】	 MANUAL:手工、STANDARDATUO:自动
    PMUniqueMark: "",
    //	打标用唯一标识可以由工序参数定义，也可以由函数计算获得。 打标标识， 不同工序可以打不同的标。 比如： 下料后，热处理后打标的不同	
    PMStanOPPrice: 0,
    //	标准工价（元）做单个零件的劳务费用	
    PMPcsPerCycle: 1,
    //	模腔数， 默认为1	
    PMStandardProcessTime: 0,
    //	标准工艺周期（秒）.不考虑任何限制时的标准时长	
    PMStandardUPDOWNDuration: 0,
    //	标准上下料周期	
    PMStandardProcessDuration: 0,
    //	经验生产周期，在本工厂平均生产一个工序需要的平均时长	
    PMQualityProcessLink: "",
    //	只有质检合格才能生产下一批或下一个工序的PMOPPID	
    PMQualityFirstNeed: "",
    //	是否需要首检	YES:需要
    PMRemark: "",
    //	工序提醒信息	
    PMProgramingChangeover: "",
    //	标准程序切换（设备换型，系统配置时间）时间间隔（S） 【选用】	
    IsNewProgramingNeed: "",
    //	是否是新程序，需要程序编程，如需要，意味需要程序编程时间。具体时长由参数决定。【选用】	
    PMProgramingTime: 0,
    //	程序编辑时间预估 【选用】	
    PMNetWieght: 0,
    //	单件重量 公斤【选用】	
    PMTechReuirment: "",
    //	技术要求	
    PMDrawingPath: "",
    //	图纸所在的路径	
    PMWorkshop: "",
    //	所在车间	
    PMCapacity: "",
    //	产能	
    PMLimitCapacity: "",
    //	极限产能	
    PMProductName: "",
    //	产品名	
    PMOperationName: "",
    //	工序产品名	
    PMCodeLength: 0,
    //	产品码长度	
    PMIsSeqNeed: "",
    //	按序扫码	YES:按序扫码、NO:非按序扫码
    PMIsSameSubNeed: "",
    //	按批次扫码	YES:按批次扫码、NO:非按批次扫码
    PMStrCodeNeed: "" //	字符包含	

  }; //对象号5：【预留】 PMPCustomerOrder（客户订单类/交付订单页类）

  this.PMPCustomerOrder = {// ZTC 目前直设计到COI, 不设计CO，暂且保留函数号。
  }; //对象号6：PMPCustomerOrderItem（客户订单子定单类）

  this.PMPCustomerOrderItem = {
    PMInnerCustomerOrderItemID: "",
    //	客户子订单ID	
    PMInnerCustomerOrderID: "",
    //	客户订单页号	
    PMOutCustomerOrderID: "",
    //	外部客户单的编号	
    PMCustomerProductID: "",
    //	客户产品号	
    PMCustomerProductName: "",
    //	客户产品名 【选用】	
    PMCustomerProductDrawing: "",
    //	客户产品对应客户图号，在编辑订单时可为空	
    PMInnerProductID: "",
    //	内部零件号	
    PMBOMID: "",
    //	BOM版本号	
    PMInnerProductName: "",
    //	内部零件名	
    PMInnerProductSpec: "",
    //	内部零件规格	
    PMCustomerProductSpec: "",
    //	客户零件规格	
    PMOrderType: "",
    //	订单类型	CUSTOM/客户订单，INNER/内部订单，SAMPLE/样品订单
    PMOrderProType: "",
    //	订单生产类型	NORMAL:一般订单，URGENT:紧急订单
    PMOrderUnit: "",
    //	计量单位	
    PMOrderNum: 0,
    //	订单数量	
    PMTaxRate: 0,
    //	税率	
    PMUnitPriceNoTax: 0,
    //	不含税单价	
    PMUnitPriceWithTax: 0,
    //	含税单价	
    PMTotalPriceWithTax: 0,
    //	含税总价	
    PMCustomerDeliveryDate: new Date(),
    //	需求交货日期	
    PMPlanDeliveryDate: new Date(),
    //	计划交货日期	
    PMRemark: "",
    //	备注	
    PMSellCheckState: "",
    //	销售审核状态	通过："YES"， 否则未通过
    PMSellChecker: "",
    //	销售审核人	
    PMSellCheckTime: new Date(),
    //	销售审核时间	
    PMTechCheckState: "",
    //	技术审核状态	通过："YES"， 否则未通过
    PMTechChecker: "",
    //	技术审核人	
    PMTechCheckTime: new Date(),
    //	技术审核时间	
    PMQualityCheckState: "",
    //	品质审核状态	通过："YES"， 否则未通过
    PMQualityChecker: "",
    //	品质审核人	
    PMQualityCheckTime: new Date(),
    //	品质审核时间	
    PMPlanCheckState: "",
    //	计划审核状态	通过："YES"， 否则未通过
    PMPlanChecker: "",
    //	计划审核人	
    PMPlanCheckTime: new Date(),
    //	计划审核时间	
    PMCreater: "",
    //	创建人	
    PMCreateTime: new Date(),
    //	创建时间	
    PMChanger: "",
    //	修改人	
    PMChangeTime: new Date(),
    //	修改时间	
    PMIsUrgent: "",
    //	是否紧急	YES:紧急， 其他不紧急
    PMIsUrgentBy: "",
    //	由谁确认紧急	
    PMIsUrgentTime: new Date(),
    //	确认紧急的时间	
    PMOrderState: "",
    //	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单
    PMCustomerID: "",
    //	客户ID	
    PMChangeRecord: "",
    //	转内部订单记录	
    PMChangeRemark: "",
    //	转内部订单备注	
    PMOrderAttribute: "",
    //	订单特性	普通订单(ORDINARY)不需要评审,特殊订单（SPECIAL）需要评审
    //新增特性
    ZCTPlanDeliDateShort: "",
    //	计划交货日期
    ZCTCreaterName: "",
    //	创建名字,
    ZCTProductURL: "",
    //产品图片
    ZCTFinishedRate: 0,
    // 完成率
    ZCTFinishedNum: 0,
    //完成率       
    ZCTPlanNeedNum: 0,
    //还需计划数量（计算值）
    ZCTCOILatit: 0,
    //纬度
    ZCTCOILongit: 0,
    //经度
    ZCTAddress: "",
    //任务位置名称
    ZCTPublishTime: new Date(),
    //发布时间
    ZCTLocation: "" //任务位置

  }; //对象号7：PMPProductionOrder（生产订单）

  this.PMPProductionOrder = {
    _id: "",
    PMProductionOrderID: "",
    //	生产订单号	
    PMInnerCustomerOrderItemID: "",
    //	交付订单子订单号	
    PMProductID: "",
    //	内部产品号	
    PMMaterialID: "",
    //	物料编号	
    PMMaterialNumber: "",
    //	物料规格号	
    PMSpecification: "",
    //	规格型号	
    PMMaterialName: "",
    //	物料名称	
    PMBOMID: "",
    //	产品BOMID	
    PMOrderNum: 0,
    //	订单数量	
    PMUnit: "",
    //	计量单位	
    PMPlanStockInTime: new Date(),
    //	计划入库日期	
    PMRemark: "",
    //	备注	
    PMState: "",
    //	状态	ONCREATE:创建中，UNPACKING:已拆单, RELEASE:已下达，NORELEASE:未下达，PRODUCTION:生产中，ENDPRODUCTION:生产结束
    PMCreateTime: new Date(),
    //	创建时间	
    PMCreater: "",
    //	创建人	
    PMChangeTime: new Date(),
    //	修改时间	
    PMChanger: "",
    //	修改人	
    PMIsUrgent: "",
    //	是否紧急	YES:紧急， 其他不紧急
    PMIsUrgentBy: "",
    //	由谁确认紧急	
    PMIsUrgentTime: new Date(),
    //	确认紧急的时间	
    PMOrderSourceType: "",
    //	订单来源类型	MES为本系统订单，Sync为同步对接订单
    PMPOrderType: "",
    //	订单类型	CUSTOMER:客户订单；INNER:内部订单；SAMPLE:样品订单
    ErpMoId: "",
    //	ERP任务ID	
    ErpMoDId: "",
    //	ERP生产任务明细ID	
    ErpMoCode: "",
    //	ERP生产订单号	
    ErpOrderSeq: "",
    //	ERP生产订单行号	
    ErpSoCode: "",
    //	需求跟踪号	
    ErpSoSeq: "",
    //	需求跟踪行号	
    ErpStatus: "",
    //	ERP状态	
    ErpWhCode: "",
    //	入库仓库	
    ErpMdeptCode: "",
    //	生产部门	
    PMSynchronization: new Date(),
    //	同步时间，MES方用于做增量同步	
    PMManualCloseingPerson: "",
    //	手动关单人	
    PMManualCloseingTime: new Date() //	手动关单时间	

  }; //对象号8：PMPPRDInstruction（自制件生产指令单）

  this.PMPPRDInstruction = {
    _id: "",
    PMPRDInstructionID: "",
    //	生产指令单号	
    PMProductionOrderID: "",
    //	生产订单号	
    PMPInnerProductID: "",
    //	交付订单子订单号（GM:应该是内部零件号）	
    PMVersionID: "",
    //	产品BOM版本号	
    PMOrderNum: 0,
    //	订单数量	
    PMUnit: "",
    //	计量单位	
    PMPlanFromStock: "",
    //	计划使用库存数	
    PMMaterialID: "",
    //	物料编号	
    PMMaterialName: "",
    //	物料名称	
    PMMaterialNumber: "",
    //	物料规格号	
    PMSpecification: "",
    //	规格型号	
    PMPlanStockInTime: new Date(),
    //	计划入库时间	
    PMRemark: "",
    //	备注	
    PMOrderType: "",
    //	订单类型	
    PMState: "",
    //	状态	
    PMLinesGroup: "",
    //	生产线	
    PMShopCode: "",
    //	车间号	
    PMIsUrgent: "",
    //	是否紧急	是、否
    PMIsUrgentBy: "",
    //	由谁确认紧急	
    PMIsUrgentTime: new Date(),
    //	确认紧急的时间	
    PMProductNum: 0,
    //	已完工数量	
    PMInstructionType: "",
    //	指令单类型	PRODUCTION:生产、委外:OUTSOURCING
    PMHaveOrderNum: 0,
    //	已下单数量	
    PMStanardProcessName: "",
    //	工序名	
    PMCreateTime: new Date(),
    //	创建时间	
    PMManualCloseingPerson: "",
    //	手动关单人	
    PMManualCloseingTime: new Date(),
    //	手动关单时间	
    ZCTIsDeleted: ""
  }; //对象号：9 PMPOPPCrossProduct(工序对应的原料或产品)

  this.PMPOPPCrossProduct = {
    PMOPPID: "",
    //	单个工序键值组合	
    PMProductID: "",
    //	产品号	
    PMIsVersionNeed: "",
    //	是否指定产品版本号	YES/需要制定版本， 默认为空，不要指定版本
    PMVersionID: "",
    //	版本号	
    PMVersionIDDesc: "",
    //	版本说明【读取计算】	
    PMNum: 0,
    //	需要数量	
    PMUnit: "",
    //	单位	
    PMPreRate: 0,
    //	备料余量率	
    PMBOMID: "",
    //	当前工序的BOM版本号	
    PMObjectD: "",
    //	当前工序的物料编号	
    PMBasicDosage: 0,
    //	基本用量	
    PMBasicAmount: 0 //	基础数量	

  }; //对象号：10 PMPSeriesProcessTask (生产指令切分执行)

  this.PMPSeriesProcessTask = {
    _id: "",
    PMSerProcTaskID: "",
    //	生产指令切分执行号	
    PMPRDInstructionID: "",
    //	生产指令单号	
    PMProductionOrderID: "",
    //	生产订单号	
    PMInnerCustomerOrderItemID: "",
    //	交付订单子订单号	
    PMPInnerProductID: "",
    //	内部产品号	
    PMVersionID: "",
    //	产品BOMID	
    PMOrderNum: 0,
    //	订单数量	
    PMUnit: "",
    //	计量单位	
    PMPlanStockInTime: new Date(),
    //	计划入库时间	
    PMRemark: "",
    //	备注	
    PMLinesGroup: "",
    //	生产线	
    PMShopCode: "",
    //	车间号	
    PMIsUrgent: "",
    //	是否紧急	是、否
    PMIsUrgentBy: "",
    //	由谁确认紧急	
    PMIsUrgentTime: new Date(),
    //	确认紧急的时间	
    PMStartTime: new Date(),
    //	实际开始时间	
    PMEndTime: new Date(),
    //	实际结束时间	
    PMSPTState: "",
    //	状态	CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束
    PMPlanStartTime: new Date(),
    //	计划开始时间	
    PMPlanEndTime: new Date(),
    //	计划结束时间	
    PMStanardProcessName: "",
    //	工序名	
    PMCreateTime: new Date(),
    //	创建时间	
    PMSPTType: "" //	SPT类型	OUTSOURE:委外类型、PRODUCTION:生产

  }, //对象号：11 PMPOneProcessTask（工序任务）
  this.PMPOneProcessTask = {
    _id: "",
    PMOneProcessTaskID: "",
    //	工序任务号	
    PMOneProcessPraID: "",
    //	工序定义ID	
    PMPRDInstructionID: "",
    //	生产指令单号	
    PMSerProcTaskID: "",
    //	生产指令切分执行号	
    PMOPTTaskVolum: "",
    // 任务数量
    PMProductNum: "",
    // 生产数量
    PMWaitingProductionNum: "",
    // 待生产数量
    PMSumScrapNum: "",
    // 报废数量
    PMQuaNum: "",
    // 合格数量
    PMSumReworkNum: "",
    // 返工数量
    PMUnit: "",
    // 单位
    PMPlanStartTime: "",
    // 计划开始时间
    PMPlanEndTime: "",
    // 计划结束时间
    PMStartTime: "",
    // 实际开始时间
    PMEndTime: "",
    // 实际结束时间
    PMOPTState: "",
    // OPT状态 CREATION: 等待生产， ONRPODUCITON: 生产中， CLOSE: 生产结束
    PMIsUrgent: "",
    // 是否紧急 是、 否
    PMOperatorBy: "",
    // 分配到人(操作工)
    PMStationID: "",
    // 分配到设备号
    PMOperatorTime: "",
    // 分配时间
    PMQualityBy: "",
    // 质检人员
    PMQualityTime: "",
    // 质检时间
    PMCreater: "",
    // 创建人
    PMCreateTime: "",
    // 创建时间
    PMUpdatePerson: "",
    // 修改人
    PMUpdateTime: "",
    // 修改时间
    PMApprovalResult: "",
    // 审批结果 NO: 未审批,YES: 审批通过, NOK: 审批不通过
    PMOPTType: "",
    // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
    PMProductionOrderID: "",
    // 生产订单号
    PMDistributionNum: "",
    // 已分配数
    PMProductID: "",
    // 内部零件号
    PMVersionID: "",
    // 版本号
    PMProcessPraSeqID: "",
    // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
    PMOPPID: "",
    // 单个工序键值组合
    PMStanardProcessName: "",
    // 标准工序号
    PMStanardProcessType: "",
    // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
    PMProcessName: "",
    // 标准工序名
    PMIsYes: "",
    // 是否启用 YES: 启动
    PMIsUniqueMarkNeed: "",
    // 是否需要标签【 选用】
    PMMarkStra: "",
    // 打标计算策略【 选用】 MANUAL: 手工、 STANDARDATUO: 自动
    PMUniqueMark: "",
    // 打标用唯一标识可以由工序参数定义， 也可以由函数计算获得。 打标标识， 不同工序可以打不同的标。 比如： 下料后， 热处理后打标的不同
    PMStanOPPrice: "",
    // 标准工价（ 元） 做单个零件的劳务费用
    PMPcsPerCycle: "",
    // 模腔数， 默认为1
    PMStandardProcessTime: "",
    // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
    PMStandardUPDOWNDuration: "",
    // 标准上下料周期
    PMStandardProcessDuration: "",
    // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
    PMQualityProcessLink: "",
    // 只有质检合格才能生产下一批或下一个工序的PMOPPID
    PMQualityFirstNeed: "",
    // 是否需要首检 YES: 需要
    PMRemark: "",
    // 工序提醒信息
    PMProgramingChangeover: "",
    // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
    IsNewProgramingNeed: "",
    // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
    PMProgramingTime: "",
    // 程序编辑时间预估【 选用】
    PMNetWieght: "",
    // 单件重量 公斤【 选用】
    PMTechReuirment: "",
    // 技术要求
    PMDrawingPath: "",
    // 图纸所在的路径
    PMWorkshop: "",
    // 所在车间
    PMCapacity: "",
    // 产能
    PMLimitCapacity: "",
    // 极限产能
    PMProductName: "",
    // 产品名
    PMOperationName: "",
    // 工序产品名
    PMCodeLength: "",
    // 产品码长度
    PMIsSeqNeed: "",
    // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
    PMIsSameSubNeed: "",
    // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
    PMStrCodeNeed: "",
    // 字符包含
    _id: ""
  }; //对象号：11 PMPOneProcessTaskSub（工序任务执行）

  this.PMPOneProcessTaskSub = {
    _id: "",
    PMOneProcessTaskSubID: "",
    //生产工序执行ID 
    PMPRDInstructionID: "",
    // 生产指令单号
    PMProductionOrderID: "",
    // 生产订单号 
    PMProductNum: 0,
    //  生产数量 【依据OPTSub计算】
    PMWaitingProductionNum: 0,
    // 待生产数量 【计算】
    PMSumScrapNum: 0,
    // 报废数量 【依据OPTSub计算】
    PMSumReworkNum: 0,
    // 返工数量 【依据OPTSub计算】
    PMAlreadyProductionNum: 0,
    //  已完成数量 
    PMAlreadyMoveNum: 0,
    // 完工已移交数量 
    PMSubIDListFrom: "",
    // 来源SubID值 
    PMUnit: "",
    // 单位 【依据OPTSub计算】
    PMPlanStartTime: new Date(),
    // 计划开始时间
    PMPlanEndTime: new Date(),
    // 计划结束时间
    PMStartTime: new Date(),
    // 实际开始时间
    PMEndTime: new Date(),
    // 实际结束时间
    PMOPTState: "",
    // 生产状态：OPT状态： CREATION:等待生产，ONRPODUCITON:生产中，WAITQUA: 等待质检，CLOSE:生产结束，STOCKTO:送库，STOCKIN:入库。外协任务状态：待申请:NRORDER，已申请:RORDER
    PMIsUrgent: "",
    // 是否紧急: YES:紧急
    PMOperatorBy: "",
    // 分配到人(操作工)
    PMStationID: "",
    // 分配到设备号
    PMStationName: "",
    // 设备名 Creator：SE11 2018/09/20
    PMOperatorTime: new Date(),
    // 设备名 Creator：SE11 2018/09/20
    PMQualityBy: "",
    // 质检人员
    PMQualityTime: new Date(),
    // 质检时间
    PMCreater: "",
    // 创建人
    PMCreateTime: new Date(),
    // 创建时间
    PMUpdatePerson: "",
    // 修改人
    PMUpdateTime: new Date(),
    // 修改时间
    PMStartBy: "",
    // 由谁开始(对应PMStartTime)
    PMEndBy: "",
    // 由谁结束对应PMEndTime)
    PMUpdateBy: "",
    // 有谁更新
    PMTaskSubType: "",
    /// SUB任务类型：外协(委外):OUTSOURE,生产：PRODUCTION
    PMIsConfirm: "",
    // 是否确认 Create 2018/09/13 SE12
    PMConfirmOperator: "",
    // 确认人 Create 2018/09/13 SE12
    PMConfirmTime: new Date(),
    // 确认时间 Create 2018/09/13 SE12
    PMShiftStartTime: new Date(),
    PMShiftStartBy: "",
    // 开班人
    PMLoadTime: new Date(),
    // 装模时间
    PMUnloadTime: 0,
    // 卸模时间
    PMPlannedQua: 0,
    // 计划数量
    PMActualQua: 0,
    // 合格数量
    PMScrap: 0,
    // 报废数量,
    PMRework: 0,
    // 返工数量
    PMModifyer: "",
    // 修改人
    PMModifyTime: new Date(),
    PMUnknownStateNum: 0,
    // 未知状态数
    PMScrapWaitStockRecordNum: 0,
    // 报废待库存登记数
    PMUnknownWaitStockRecordNum: 0,
    // 未知状态待库存登记数
    PMAwaitDuration: 0,
    // 待机时长
    PMPeopleRemark: "",
    // 申请人备注 Create 2018/11/12 SE21
    PMWaitStockRecordNum: 0,
    // 待库存登记数
    PMManualCloseingPerson: "",
    // 手动关单人
    PMManualCloseingTime: new Date(),
    // Creator:SE24,Date:2020-12-1 15:37:17
    PMOneProcessTaskID: "",
    //	工序任务号	
    PMOneProcessPraID: "",
    //	工序定义ID	
    PMPRDInstructionID: "",
    //	生产指令单号	
    PMSerProcTaskID: "",
    //	生产指令切分执行号	
    PMOPTTaskVolum: "",
    // 任务数量
    PMProductNum: "",
    // 生产数量
    PMQuaNum: "",
    // 合格数量
    PMIsUrgent: "",
    // 是否紧急 是、 否
    PMOperatorBy: "",
    // 分配到人(操作工)
    PMStationID: "",
    // 分配到设备号
    PMOperatorTime: "",
    // 分配时间
    PMQualityBy: "",
    // 质检人员
    PMQualityTime: "",
    // 质检时间
    PMOPTType: "",
    // OPT类型 OUTSOURE： 委外指令单， 生产： PRODUCTION
    PMDistributionNum: "",
    // 已分配数
    PMProductID: "",
    // 内部零件号
    PMVersionID: "",
    // 版本号
    PMProcessPraSeqID: "",
    // 在该张工序表中的顺序号(如果已经执行了， 就不可以变， 否则， 可以改变)
    PMOPPID: "",
    // 单个工序键值组合
    PMStanardProcessName: "",
    // 标准工序号
    PMStanardProcessType: "",
    // 工序类型 INNER： 自制工序、 OUTSOURCE： 外协工序
    PMProcessName: "",
    // 标准工序名
    PMIsYes: "",
    // 是否启用 YES: 启动
    PMIsUniqueMarkNeed: "",
    // 是否需要标签【 选用】
    PMMarkStra: "",
    // 打标计算策略【 选用】 MANUAL: 手工、 STANDARDATUO: 自动
    PMUniqueMark: "",
    // 打标用唯一标识可以由工序参数定义， 也可以由函数计算获得。 打标标识， 不同工序可以打不同的标。 比如： 下料后， 热处理后打标的不同
    PMStanOPPrice: "",
    // 标准工价（ 元） 做单个零件的劳务费用
    PMPcsPerCycle: "",
    // 模腔数， 默认为1
    PMStandardProcessTime: "",
    // 标准工艺周期（ 秒）.不考虑任何限制时的标准时长
    PMStandardUPDOWNDuration: "",
    // 标准上下料周期
    PMStandardProcessDuration: "",
    // 经验生产周期， 在本工厂平均生产一个工序需要的平均时长
    PMQualityProcessLink: "",
    // 只有质检合格才能生产下一批或下一个工序的PMOPPID
    PMQualityFirstNeed: "",
    // 是否需要首检 YES: 需要
    PMRemark: "",
    // 工序提醒信息
    PMProgramingChangeover: "",
    // 标准程序切换（ 设备换型， 系统配置时间） 时间间隔（ S）【 选用】
    IsNewProgramingNeed: "",
    // 是否是新程序， 需要程序编程， 如需要， 意味需要程序编程时间。 具体时长由参数决定。【 选用】
    PMProgramingTime: "",
    // 程序编辑时间预估【 选用】
    PMNetWieght: "",
    // 单件重量 公斤【 选用】
    PMTechReuirment: "",
    // 技术要求
    PMDrawingPath: "",
    // 图纸所在的路径
    PMWorkshop: "",
    // 所在车间
    PMCapacity: "",
    // 产能
    PMLimitCapacity: "",
    // 极限产能
    PMProductName: "",
    // 产品名
    PMOperationName: "",
    // 工序产品名
    PMCodeLength: "",
    // 产品码长度
    PMIsSeqNeed: "",
    // 按序扫码 YES: 按序扫码、 NO: 非按序扫码
    PMIsSameSubNeed: "",
    // 按批次扫码 YES: 按批次扫码、 NO: 非按批次扫码
    PMStrCodeNeed: "",
    // 字符包含
    _id: ""
  };
  this.ZCTRAWPur = {
    ZCTMaterialName: "",
    PMNum: 0,
    PMUnit: "",
    ZCTMaterialFromType: "",
    ZCTGetNum: "",
    //已领用物料数量
    ZCTGetRate: 0,
    //领用率
    ZCTProductURL: "",
    //
    PMPRDInstructionID: ""
  };
  this.ZCTRAWPro = {
    ZCTMaterialName: "",
    PMNum: 0,
    PMUnit: "",
    ZCTMaterialFromType: "",
    ZCTGetNum: "",
    //已领用物料数量
    ZCTGetRate: 0,
    //领用率
    ZCTProductURL: "",
    //
    PMPRDInstructionID: ""
  }; //对象号： 12 PMPCustomerOrder (客户订单)

  this.PMPCustomerOrder = {
    PMInnerCustomerOrderID: "",
    //	内部客户订单号	
    PMCustomerID: "",
    //	客户ID	
    PMOrderType: "",
    //	订单类型	CUSTOM:客户订单，INNER:内部订单，SAMPLE:样品订单
    PMOrderDateTime: "",
    //	客户下单时间	
    PMOrderRequirement: "",
    //	客户订单整体要求简述	
    PMOrderRemark: "",
    //	客户订单整体备注	
    PMPayWay: "",
    //	收款方式	MONTH:月结、ONDELIVERY:到付、PRE:预付、Day30:30天、Day45:45天、Day60:60天、Day90:90天、C1313:C1313、次月15日结款:次月15日结款、当月结款:当月结款、货到收30天支票:货到收30天支票、货到收款:货到收款、货到月结60天:货到月结60天、货到转账:货到转账、快递代收:快递代收、每月25日付上月货款:每月25日付上月货款、收货后立即转账:收货后立即转账、收现金:收现金、先转账后收货:先转账后收货、Month30:月结30天、Month40:月结40天、转账:转账
    PMEditState: "",
    //	订单状态	EDIT:编辑中 、 RELEASE:已下达
    PMEditBy: "",
    //	被谁编辑	
    PMEditTime: "",
    //	编辑时间	
    PMPlanDeliveryTime: "",
    //	需求交货日期	
    PMSalesmanID: "",
    //	业务员	
    PMCustomerTel: "",
    //	客户电话	
    PMCustomerMobile: "",
    //	客户手机	
    PMCustomerFax: "",
    //	客户传真	
    PMCustomerContact: "",
    //	客户联系人	
    PMCustomerEmail: "",
    //	客户邮件地址	
    PMProductType: "",
    //	生产类型	URGENT/紧急订单，NORMAL/正常订单
    PMIsInvalid: "",
    //	订单是否无效	YES/无效（冻结），其他有效（非冻结）
    PMIsDelete: "",
    //	是否删除	YES/已删除 其他表示未删除
    PMDeleteBy: "",
    //	被谁删除	
    PMDeleteTime: "",
    //	删除时间	
    PMOrderSerialNumber: "",
    //	订单流水号	
    PMCreateDateTime: "",
    //	制单日期，订单创建日期	
    PMCustomerAddress: "",
    //	客户地址	
    PMmarketRatio: "",
    //	销售下达比例	类模型中未封装（不同步数据库的）
    PMTechnologyRatio: "",
    //	技术下达比例	类模型中未封装（不同步数据库的）
    PMQualityRatio: "",
    //	品质下达比例	类模型中未封装（不同步数据库的）
    PMPlanRatio: "",
    //	计划下达比例	类模型中未封装（不同步数据库的）
    PMSalesmanTel: "",
    //	业务员联系方式	
    PMOneProcessPraID: "",
    //		数据库里有该字段，类模型没有，且无注释
    PMInvalidBy: "",
    //	被谁冻结	
    PMInvalidTime: "",
    //	冻结时间	
    PMPCustomerOrder: "",
    //		数据库里有该字段，类模型没有，且无注释
    PMUserID: "" //		数据库里有该字段，类模型没有，且无注释

  }; //根据TempObjName输出对象

  if (this[TempObjName] === undefined) //如果对象名不存在 返回空，否则返回对象*/
    {
      return "";
    } else {
    return this[TempObjName];
  }
}