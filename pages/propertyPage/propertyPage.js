
	const {
		IsNullOrEmpty,
		DateChange,
		GetNum
	} = require("../../utils/pmJSTools.js");
	// const pmJSTools = require("../../utils/pmJSTools.js").default;
	// const pmSerTools = require("../../utils/pmSerTools.js").default;
	// const util = require("../../utils/util.js").default;
	import pmSerTools from '../../utils/pmSerTools.js';
	import pmJSTools from '../../utils/pmJSTools.js';
		import util from '../../utils/util.js';
	const app = getApp();
	var wayIndex = -1;
	var school_area = '';
	var grade = ''; 
	var arrayHeight = 0; // miniprogram/pages/propertyPage/propertyPage.js
	
	export default {
		data() {
			return {
				LastDateTime: Date.now(),
				dataType: "",
	
				mainTitle: "",
				subTips: "",
				hiddenName: false,
				
				btnCommandName: "确认",
				btnCommandName_id: "",
				
				upBtnTips: "",
				downBtnTips: "",
				ZCTProductURL: null,
				PicselectedStyle: " box-shadow: 2px 2px 5px #000;",
			
				PicPath: "",
				pmDialog: false,
				dialogMainTitle: "",
				dialogMainContent: "",
				dialogSubOperation: "",
			
				dialogMainOperation: "",
			
				IsFillHelp: false,
		
				IsFillHelpSwitch: true,
			
				IsFillHelpSwitchByPO: true,
				//默认按单数
				IsFillHelpSwitchByNum: false,
				//默认每单产量
				IsLastPIFillHelpSwitch: true,
				//是否使用标准工序创建
				IsPIlength: false,
				//是否有标准工序
				pmShowBtn: false,
				//提示消息弹框是否显示两个按钮。false：左边按钮隐藏；true:两个按钮都显示
				//编辑按钮的属性
				isConfButtonDisabled: true,
				//true 禁用按钮；false 启用按钮
				loadingMark: "",
				//按钮内是否有加载中的样式//loadingMark: "weui-loading",
				confirmBtnClass: 'weui-btn weui-btn_primary weui-btn_disabled',
				topTips: false,
				//顶部异常提醒
				topTipsStr: "",
				//顶部异常提醒
				fillBlock: {
					fillRemind: "填写提醒",
					autoFiller: "POAutoCreate",
					fillItemList: [{
						fillTitle: "填写内容",
						fillTitleRight: "默认后缀",
						fillChartURL: "",
						//可为空
						fillTip: "填写提示",
						fillType: "TXT",
						//填写类型: TXT NUM LIST DATETIME
						filleValue: "内容",
						fillHelpList: [],
						//备选项
						editable: true,
						fillID: "" //填写项字段名，不在前端显示
	
					}]
				},
				PMCOIDataEdit: {},
				//存放用来编辑的本条COI数据 
				inputValue: '',
				//【联想效果】点击联想结果项之后替换到文本框的值
				bindSource: [],
				//【联想效果】绑定到联想下拉框的数据，根据用户输入动态变化
				hideScroll: true,
				//【联想效果】是否隐藏联想下拉框
				PO: {},
				tempPOID: "",
				TempSourceTaskID: "",
				//分发来源COI任务ID
				TempSourceType: "",
				//分发来源类型
				TempSourcePositionID: "",
				//分发来源位置任务ID
				TempSourceCOIData: {},
				//分发来源COI数据
				TempTaskNum: 0,
				//分发来源任务数量
				TempPlanDeliDateShort: "",
				//分发来源计划交付时间
				TempSourceTaskStructure: {},
				//来源任务结构
				PMPIList: [],
				arrayHeight: 0,
				j: 0,
				M: 0,
				scrollTop: "",
				toView: "",
				autoFiller: false,
				theme: "",
				hide: false,
				PMCOI: "",
				PMInnerCustomerOrderItemID: "",
				PMCOIList: ""
			};
		},
	
		components: {},
		props: {},
	
		
		onLoad: function(options) {
			var that = this;
			this.dataType = options.dataType;
			// this.setData({
			// 	dataType: this.dataType
			// });
			that.datatype = this.dataType;
			switch (this.dataType) {
				case "PMPOEdit":
				case "POAddNew": {
					var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; 
	
					var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; 
					that.PicselectedStyle = btnUnSelectedStyle; 
					if (this.dataType == "PMPOEdit") {
						// this.setData({
						// 	IsFillHelp: false,
						// 	
						// 	IsFillHelpSwitch: false
						// });
						that.IsFillHelp = false;
						that.IsFillHelpSwitch = false;
					} else {
						// this.setData({
						// 	IsFillHelp: true,
						// 	
						// 	IsFillHelpSwitch: true 
	
						// });
						that.IsFillHelp = true;
						that.IsFillHelpSwitch = true;
					} 
	
	
					var PMCOI = {};
					let eventChannel = this.getOpenerEventChannel();
					eventChannel.on('PO', res => {
						this.PO = res;
					});
					eventChannel.on('tempPOID', res => {
						this.tempPOID = res;
					});
					eventChannel.on('PMCOI', PMCOI => {
						console.log(PMCOI);
						this.mainTitle = PMCOI.PMInnerProductID + " " + PMCOI.PMInnerProductName;
						// this.setData({
						// 	mainTitle: this.mainTitle
						// });
						that.mainTitle = this.mainTitle;
						var TempOrderNum = 0;
	
						if (pmJSTools.IsNullOrEmpty(PMCOI.PMPOList)) {
							TempOrderNum = 0;
						} else {
							PMCOI.PMPOList.forEach(TempPO => {
								TempOrderNum = parseFloat(pmJSTools.GetNum(TempOrderNum) + pmJSTools
									.GetNum(TempPO.PMOrderNum));
							});
						}
	
						PMCOI.ZCTPlanNeedNum = parseFloat((pmJSTools.GetNum(PMCOI.PMOrderNum) - pmJSTools
							.GetNum(TempOrderNum)).toFixed(2));
	
						if (PMCOI.ZCTPlanNeedNum < 0) {
							PMCOI.ZCTPlanNeedNum = 0;
						}
	
						this.subTips = "待计划:" + PMCOI.ZCTPlanNeedNum + "/总计划:" + PMCOI.PMOrderNum + "/完工:" +
							PMCOI.ZCTFinishedNum + "(" + PMCOI.PMOrderUnit + ")";
						// this.setData({
						// 	subTips: this.subTips
						// });
						that.subTips = this.subTips;
						this.PMCOI = PMCOI;
	
						if (this.dataType == "POAddNew") {
							this.GetLastALLPIData();
						}
	
						// this.setData({
						// 	ZCTProductURL: PMCOI.ZCTProductURL,
						// 	PMCOI: this.PMCOI
						// });
						that.ZCTProductURL = PMCOI.ZCTProductURL;
						that.PMCOI = this.PMCOI;
						var fillBlock = {};
						fillBlock.fillRemind = "按照提示填写，生成新的生产计划";
						fillBlock.fillItemList = []; 
	
						var fillItem1 = {};
						fillItem1.fillTitle = "计划单数(个)", fillItem1.fillChartURL = "", 
							fillItem1.fillTip = "填写一次生成的订单数", fillItem1.fillType =
							"number", //填写类型: idcard,digit,number
							fillItem1.maxlength = "50", //
							// fillItem1.filleValue = null//
							fillItem1.fillHelpList = null, //
							fillItem1.fillHelpIndex = 0, //
							fillItem1.editable = true, fillItem1._id = "POAddPOs", 
							fillBlock.fillItemList.push(fillItem1);
						var fillItem2 = {};
						fillItem2.fillTitle = "每单数量(" + PMCOI.PMOrderUnit + ")", fillItem2.fillChartURL =
							"", //可为空
							fillItem2.fillTip = "填写每个生产订单的数量", fillItem2.fillType =
							"digit", //填写类型: idcard,digit,number,DATETIME
							fillItem2.maxlength = "50", //
							// fillItem2.filleValue = null,
							fillItem2.fillHelpList = null, 
							//fillItem2.fillHelpIndex = 0,
							fillItem2.editable = true, fillItem2._id = "POAddPONum",
							fillBlock.fillItemList.push(fillItem2);
						var fillItem3 = {};
						fillItem3.fillTitle = "首单计划完工日期", fillItem3.fillChartURL = "", 
							fillItem3.fillTip = "请填写首单完工日期", fillItem3.fillType =
							"DATE", //填写类型: idcard,digit,number,DATETIME
							fillItem3.maxlength = "20", //
							fillItem3.fillHelpList = null,
							//fillItem3.fillHelpIndex = 0,
							fillItem3.startDate = new Date();
						fillItem3.endDate = new Date() + 5 * 365;
						fillItem3.editable = true, fillItem3._id = "POAddFirstDate", 
							fillBlock.fillItemList.push(fillItem3);
	
						if (this.dataType == 'POAddNew') {
							var fillItem4 = {};
							fillItem4.fillTitle = "相隔天数", fillItem4.fillChartURL = "",
								fillItem4.fillTip = "0表示当天", fillItem4.fillTip = "请选择计划完工时间策略", fillItem4
								.fillType = "number", 
								fillItem4.maxlength = "50", //
								fillItem4.fillValue = null, 
								fillItem4.fillHelpList = null, 
								fillItem4.fillHelpIndex = 0, 
								fillItem4.editable = true, fillItem4._id = "POAddDays",
								fillBlock.fillItemList.push(fillItem4);
						}
	
						if (this.dataType == "PMPOEdit") {
							if (this.PO != null) {
								fillItem1.fillValue = "1";
								fillItem1.filldisabled = true, fillItem2.fillValue = this.PO.PMOrderNum,
									fillItem3.fillValue = this.PO.ZCTlanStockInTimeShort;
							}
						}
	
						this.fillBlock = fillBlock;
						that.fillBlock = this.fillBlock;
						that.autoFiller = "PMPOEdit";
					});
					break;
				}
	
				case "PMCOIAddNew": {
					var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; 
	
					var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; 
	
					// this.setData({
					// 	PicselectedStyle: btnSelectedStyle //COI可修改浮起
	
					// });
					that.PicselectedStyle = btnSelectedStyle;
					let eventChannel = this.getOpenerEventChannel();
					var that = this;
					eventChannel.on('PMCOIList', PMCOIList => {
						that.PMCOIList = PMCOIList; 
	
						console.log(PMCOIList);
						this.mainTitle = "交付任务";
						// this.setData({
						// 	mainTitle: this.mainTitle
						// });
						that.mainTitle = this.mainTitle;
						this.subTips = "交付任务数据创建";
						// this.setData({
						// 	subTips: this.subTips
						// }); //交付任务创建，给个默认显示的图片
						that.subTips = this.subTips;
						// this.setData({
						// 	ZCTProductURL: "http://zctmes2021-test-9gyl6ila6a31bc71.7a63-zctmes2021-test-9gyl6ila6a31bc71-1304681996/PMCOIProductPic/zanwutupian2.png"
						// });
						that.ZCTProductURL =
							"https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg";
						var PMCOIData = [];
						this.LoadPMCOIData(PMCOIData, "PMCOIAddNew");
					});
					break;
				}
	
				case "PMCOIEdit":
				//修改COI
				{
					var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
	
					var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
	
					// this.setData({
					// 	PicselectedStyle: btnSelectedStyle //COI可修改浮起
	
					// });
					that.PicselectedStyle = btnSelectedStyle;
					let eventChannel = this.getOpenerEventChannel();
					var that = this;
					eventChannel.on('PMCOIList', PMCOIList => {
						that.PMCOIList = PMCOIList; //从调用方接下 that.data.PMCOIList， 准备返回使用。
	
						console.log(PMCOIList);
						this.mainTitle = "交付任务";
						// this.setData({
						// 	mainTitle: this.mainTitle
						// });
						that.mainTitle = this.mainTitle;
						this.subTips = "交付任务数据编辑";
						// this.setData({
						// 	subTips: this.subTips
						// });
						that.subTips = this.subTips;
						var PMCOIData = pmJSTools.getOneControlFromList(options.PMCOI_id, this.PMCOIList);
						this.LoadPMCOIData(PMCOIData, "PMCOIEdit");
						this.PMCOIDataEdit = PMCOIData; //将本条待编辑的COI,放到PMCOIDataEdit里面暂存
					});
					break;
				}
	
				case "PMCOIOpen": {
					var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
	
					var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
	
					// this.setData({
					// 	PicselectedStyle: btnSelectedStyle //COI可修改浮起
	
					// });
					that.PicselectedStyle = btnSelectedStyle;
					this.mainTitle = "交付任务";
					// this.setData({
					// 	mainTitle: this.mainTitle
					// });
					that.mainTitle = this.mainTitle;
					this.subTips = "交付任务数据编辑";
					// this.setData({
					// 	subTips: this.subTips
					// });
					that.subTips = this.subTips
					var PMCOIData = pmJSTools.getOneControlFromList(options.PMCOI_id, this.PMCOIList);
					this.LoadPMCOIData(PMCOIData, "PMCOIOpen");
				}
				//查看COI
	
				case "PMCOIShow": {
					var btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
	
					var btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
	
					// this.setData({
					// 	PicselectedStyle: btnSelectedStyle //COI可修改浮起
	
					// });
					that.PicselectedStyle = btnSelectedStyle //COI可修改浮起
					let eventChannel = this.getOpenerEventChannel();
					var that = this;
					eventChannel.on('PMCOIList', PMCOIList => {
						that.PMCOIList = PMCOIList; //从调用方接下 that.data.PMCOIList， 准备返回使用。
	
						console.log(PMCOIList);
						this.mainTitle = "交付任务";
						// this.setData({
						// 	mainTitle: this.mainTitle
						// });
						that.mainTitle = this.mainTitle;
						this.subTips = "查看交付任务";
						// this.setData({
						// 	subTips: this.subTips
						// });
						that.subTips = this.subTips;
						var PMCOIData = pmJSTools.getOneControlFromList(options.PMCOI_id, this.PMCOIList);
						this.LoadPMCOIData(PMCOIData,
							"PMCOIShow"); // this.data.PMCOIDataEdit=PMCOIData //将本条待编辑的COI,放到PMCOIDataEdit里面暂存
					});
					break;
				}
	
				case "PMCOIDistribute": {
					//通过移交分发创建COI
					this.TempSourceTaskID = options.TaskID;
					this.TempSourceType = options.SourceType;
					this.TempSourcePositionID = options.PositionID;
					this.TempTaskNum = options.TaskNum;
					this.TempPlanDeliDateShort = options.PlanDeliDateShort;
					var TempJsonSourceTaskStructure = options.JsonSourceStructure;
					this.TempSourceTaskStructure = JSON.parse(TempJsonSourceTaskStructure);
					let eventChannel = this.getOpenerEventChannel();
					eventChannel.on('PMCOI', res => {
						this.TempSourceCOIData = res;
	
						if (pmJSTools.IsNullOrEmpty(this.TempSourceCOIData)) {
							var that = this;
							// that.setData({
							// 	topTips: true,
							// 	topTipsStr: "未获取到来源交付任务信息"
							// });
							that.topTips = true;
							that.topTipsStr = "未获取到来源交付任务信息";
							setTimeout(function() {
								//时间限制
								// that.setData({
								// 	topTips: false,
								// 	topTipsStr: ""
								// });
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000);
							return;
						}
	
						;
						this.LoadPMCOIData(this.TempSourceCOIData, "PMCOIDistribute");
					});
					this.mainTitle = "交付任务";
					// this.setData({
					// 	mainTitle: this.mainTitle
					// });
					that.mainTitle = this.mainTitle;
					this.subTips = "交付任务数据创建";
					// this.setData({
					// 	subTips: this.subTips
					// }); //绑定失败，可以重复绑定
					that.subTips = this.subTips;
					// this.setData({
					// 	loadingMark: "",
					// 	isConfButtonDisabled: false,
					// 	//启用按钮
					// 	confirmBtnClass: "weui-btn weui-btn_primary"
					// });
					that.loadingMark = "";
					that.isConfButtonDisabled = false;
					that.confirmBtnClass = "weui-btn weui-btn_primary";
					break;
				}
	
				default: {
					break;
				}
			}
		},
	
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},
	
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {},
	
		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide: function() {},
	
		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload: function() {},
	
		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh: function() {},
	
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom: function() {},
	
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage: function(event) {
			// 来自页面内转发按钮
			console.log(event.target);
			return {
				title: '制程通 制造管理',
				path: this.route + '?dataType=PMCOIEdit&PMCOI_id=' + event.currentTarget.id,
				imageUrl: this.ZCTProductURL
			};
		},
		methods: {
			//选择生产环境及任务相关图片，最多6张需做限制
			chooseImage: function(e) {
				var that = this;
				var count = 6;
				var tempfillItem = pmJSTools.getOneControlFromList("ZCTTaskPictureLst", this.fillBlock.fillItemList);
	
				if (!pmJSTools.IsNullOrEmpty(tempfillItem.fillImgLst)) {
					count = count - tempfillItem.fillImgLst.length;
				}
	
				wx.chooseImage({
					count: count,
					sizeType: ['original', 'compressed'],
					// 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					// 可以指定来源是相册还是相机，默认二者都有
					success: res => {
						console.log(e);
	
						if (!pmJSTools.IsNullOrEmpty(tempfillItem.fillImgLst) && tempfillItem.fillImgLst
							.length + res.tempFilePaths.length > 6) {
	
							// that.setData({
							// 	topTips: true,
							// 	topTipsStr: "最多只能上传6张图片！"
							// });
							that.topTips = true;
							that.topTipsStr = "最多只能上传6张图片！";
	
							setTimeout(function() {
								//时间限制
								// that.setData({
								// 	topTips: false,
								// 	topTipsStr: ""
								// });
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000);
							return;
						} //判断当前图片是否大于6张，如果大于6张，则隐藏增加按钮
	
	
						if (tempfillItem.fillImgLst.length + res.tempFilePaths.length == 6) {
							tempfillItem.AddPic = false;
						} else {
							tempfillItem.AddPic = true;
						}
	
						tempfillItem.fillImgLst = tempfillItem.fillImgLst.concat(res.tempFilePaths);
						// this.setData({
						// 	fillBlock: this.fillBlock
						// }); //因为改变了值，设置按钮可以执行
						that.fillBlock = this.fillBlock; //因为改变了值，设置按钮可以执行
						// this.setData({
						// 	isConfButtonDisabled: false,
						// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
						that.isConfButtonDisabled = false;
						that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
						// });
					}
				});
			},
			//查看生产环境及任务相关图片
			previewImage: function(e) {
				var tempfillItem = pmJSTools.getOneControlFromList("ZCTTaskPictureLst", this.fillBlock.fillItemList);
				wx.previewImage({
					current: e.currentTarget.id,
					// 当前显示图片的http链接
					urls: tempfillItem.fillImgLst // 需要预览的图片http链接列表
	
				});
			},
			//长按删除图片
			deleteImage: function(e) {
				var that = this;
				var tempfillItem = pmJSTools.getOneControlFromList("ZCTTaskPictureLst", that.fillBlock
					.fillItemList); //var images = that.data.images;
	
				var index = tempfillItem.fillImgLst.indexOf(e.currentTarget
					.id); //e.currentTarget.dataset.index;//获取当前长按图片下标
				// tempfillItem.fillindex=index
				// that.setData({
				//   fillBlock: that.data.fillBlock
				// })
				that.fillBlock = that.data.fillBlock;
				wx.showModal({
					title: '提示',
					content: '确定要删除此图片吗？',
					success: function(res) {
						if (res.confirm) {
							if (index != -1) {
								tempfillItem.fillImgLst.splice(index, 1);
							}
						} else if (res.cancel) {
							// tempfillItem.fillindex=-1
							// that.setData({
							//   fillBlock: that.data.fillBlock
							// })
							that.fillBlock = this.data.fillBlock;
							return false;
						} //  //将长按的图片背景色恢复
						// tempfillItem.fillindex=-1
						//判断当前新增图片按钮是否隐藏，如果隐藏了，修改为不隐藏（因为已经做了删除操作）
	
	
						if (tempfillItem.AddPic == false) {
							tempfillItem.AddPic = true;
						}
	
						// that.setData({
						// 	fillBlock: that.fillBlock
						// }); //因为改变了值，设置按钮可以执行
						that.fillBlock = that.fillBlock;
						// that.setData({
						// 	isConfButtonDisabled: false,
						// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
	
						// });
						that.isConfButtonDisabled = false;
						that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
					}
				});
			},
			//选择产品图片
			onGetPic: function(event) {
				// if (this.data.dataType == "POAddNew") {
				//   //PO的图片和PMCOI应该是一致的，所以不能改
				//   return;
				// }
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success:function(res){
						that.ZCTProductURL = res.tempFilePaths;
						that.isConfButtonDisabled = false;
						that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
						
						uniCloud.uploadFile({
						filePath: tempFilePaths,
						cloudPath: "PMCOIProductPic/",
						success(res) {
						that.ZCTProductURL = res.tempFilePaths;
						that.isConfButtonDisabled = false;
						that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
						},
						fail(res) {},
						complete() {}
						});
					}
				});
			},
			// onGetPic: function(event) {
			// 	var that = this;
			// 	// uni.chooseImage({
			// 	// 	sizeType: ['original', 'compressed'],
			// 	// 	sourceType: ['album', 'camera'],
			// 	// 	success: (res) => {
			// 	// 		//let tempFilePaths = "PMCOIProductPic/"+ res.tempFilePaths[0];
			// 	// 		let tempFilePaths = res.tempFilePaths[0];
			// 	// 		let str = res.tempFilePaths[0].substr(res.tempFilePaths[0].lastIndexOf('.'));
	
			// 	// 		//tempFilePaths.forEach((item) => {
			// 	// 		 uniCloud.uploadFile({
			// 	// 				filePath: tempFilePaths,
			// 	// 				cloudPath: "PMCOIProductPic/",
			// 	// 				success(res) {
			// 	// 					that.ZCTProductURL = res.tempFilePaths;
			// 	// 					that.isConfButtonDisabled = false;
			// 	// 					that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
			// 	// 				},
			// 	// 				fail(res) {},
			// 	// 				complete() {}
			// 	// 			});
			// 	// 		//})
			// 	// 	}
			// 	// })
	
	
			// 	uni.chooseImage({
			// 		count: 1, //默认9
			// 		sizeType: ['original', 'compressed'],
			// 		sourceType: ['album', 'camera'],
			// 		success: (res) => {
			// 			let tiemr = new Date();
			// 			let address = tiemr.getFullYear() + '' + (tiemr.getMonth() + 1) + '' + tiemr
			// 				.getDate();
			// 			address = 'PMCOIProductPic/' + address + '/';
			// 			var imageSrc = res.tempFilePaths[0];
			// 			let str = res.tempFilePaths[0].substr(res.tempFilePaths[0].lastIndexOf('.'));
			// 			let nameStr = address + tiemr.getTime() + str;
			// 			let ossUrl = 'tcb-ecxw1hs9f19080-6d00j26b1957e';
			// 			uni.uploadFile({
			// 				url: ossUrl, //输入你的bucketname.endpoint
			// 				filePath: imageSrc,
			// 				fileType: 'image',
			// 				name: 'file',
			// 				success: (res) => {
			// 					if (res.statusCode == '200') {
			// 						consonle.log(ossUrl + nameStr);
			// 					} else {
			// 						consonle.log(res);
			// 					}
			// 				}
			// 			});
			// 		}
			// 	});
			// 	// 	//前端代码
			// 	// 	uni.chooseImage({
			// 	// 		count: 1,
			// 	// 		success(res) {
			// 	// 			console.log(res);
			// 	// 			if (res.tempFilePaths.length > 0) {
			// 	// 				let filePath = res.tempFilePaths[0]
			// 	// 				//进行上传操作
	
			// 	// 				// promise方式
			// 	// 				const result = uniCloud.uploadFile({
			// 	// 					filePath: filePath,
			// 	// 					cloudPath: 'a.jpg',
			// 	// 					onUploadProgress: function(progressEvent) {
			// 	// 						console.log(progressEvent);
			// 	// 						var percentCompleted = Math.round(
			// 	// 							(progressEvent.loaded * 100) / progressEvent.total
			// 	// 						);
			// 	// 					}
			// 	// 				});
	
			// 	// 				// callback方式，与promise方式二选一即可
			// 	// 				// uniCloud.uploadFile({
			// 	// 				// 	filePath: filePath,
			// 	// 				// 	cloudPath: 'a.jpg',
			// 	// 				// 	onUploadProgress: function(progressEvent) {
			// 	// 				// 		console.log(progressEvent);
			// 	// 				// 		var percentCompleted = Math.round(
			// 	// 				// 			(progressEvent.loaded * 100) / progressEvent.total
			// 	// 				// 		);
			// 	// 				// 	},
			// 	// 				// 	success() {},
			// 	// 				// 	fail() {},
			// 	// 				// 	complete() {}
			// 	// 				// });
	
			// 	// 			}
			// 	// 		}
			// 	// 	});
			// },
	
			//点选输入值入口
			bindListChange: function(event) //一个函数实现动态点选功能共用
			{
				var that = this;
				console.log(event);
				var tempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock
					.fillItemList); //为创建交付任务时，修改任务类型时才会去改变数据、重新加载表单。编辑和查看修改交付任务不做任何操作
	
				if (this.subTips == "交付任务数据创建" && tempfillItem.fillTitle == "任务类型") {
					tempfillItem.fillHelpIndex = event.detail.value;
					tempfillItem.fillValue = tempfillItem.fillHelpList[tempfillItem.fillHelpIndex];
					// this.setData({
					// 	fillBlock: this.fillBlock
					// });
					that.fillBlock = this.fillBlock;
					var PMCOIData = [];
	
					if (tempfillItem.fillValue == "劳务") {
						this.LoadPMCOIDataLabor(PMCOIData, "PMCOIAddNew");
					} else {
						this.LoadPMCOIDataOrdedrProduction(PMCOIData, "PMCOIAddNew");
					}
				} else {
					tempfillItem.fillHelpIndex = event.detail.value;
					tempfillItem.fillValue = tempfillItem.fillHelpList[tempfillItem.fillHelpIndex];
					// this.setData({
					// 	fillBlock: this.fillBlock
					// });
					that.fillBlock = this.fillBlock;
					this.onAutoHelpFill(event); //因为改变了值，设置按钮可以执行
	
					// this.setData({
					// 	isConfButtonDisabled: false,
					// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
	
					// });
					that.isConfButtonDisabled = false;
					that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
				}
			},
			//日期输入值函数入口
			bindDateChange: function(event) //一个函数实现动态点选功能共用
			{
				var that = this;
				console.log(event);
				var tempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
				tempfillItem.fillValue = event.detail.value.replace(/-/g,
					"/"); //pciker选的日期格式是 year-month-day 和常见的year/month/day 不同，有点烦人，所以作此修改
	
				// this.setData({
				// 	fillBlock: this.fillBlock
				// }); //因为改变了值，设置按钮可以执行
				that.fillBlock = this.fillBlock;
				// this.setData({
				// 	isConfButtonDisabled: false,
				// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
				// });
				that.isConfButtonDisabled = false;
				that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
	
			},
			//时间输入值函数入口
			bindTimeChange: function(event) //一个函数实现动态点选功能共用
			{
				var that = this;
				console.log(event);
				var tempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
				tempfillItem.fillValue = event.detail.value;
				// this.setData({
				// 	fillBlock: this.fillBlock
				// }); //因为改变了值，设置按钮可以执行
				that.fillBlock = this.fillBlock;
				// this.setData({
				// 	isConfButtonDisabled: false,
				// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
	
				// });
				that.isConfButtonDisabled = false;
				that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
			},
			//文本输入值函数入口
			bindTxtChange: function(event) //一个函数实现动态点选功能共用
			{
				var that = this;
				console.log(event);
				var tempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock.fillItemList);
				var nickNameOld = event.detail.value;
				tempfillItem.fillValue = nickNameOld.replace(/\s+/g, '');
				// this.setData({
				// 	fillBlock: this.fillBlock
				// });
				that.fillBlock = this.fillBlock;
				this.onAutoHelpFill(event); //因为改变了值，设置按钮可以执行
	
				// this.setData({
				// 	isConfButtonDisabled: false,
				// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
	
				// });
				that.isConfButtonDisabled = false;
				that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
				if (event.currentTarget.id == "PMInnerProductID") {
					//当前输入的为产品号，进行联想
					var TempInputProductID = event.detail.value; //匹配的结果
	
					var newSource = [];
	
					if (TempInputProductID != "") {
						//获取缓存中产品信息
						var TempStorageProductArr = new Array();
						var TempProductStr = wx.getStorageSync('ProductList'); //存在本地缓存时进行联想
	
						if (!pmJSTools.IsNullOrEmpty(TempProductStr)) {
							TempStorageProductArr = JSON.parse(TempProductStr); // 对于数组array进行遍历，功能函数中的参数 `e`就是遍历时的数组元素值。
	
							TempStorageProductArr.forEach(function(e) {
								// 用户输入的字符串如果在数组中某个元素中出现，将该元素存到newSource中
								if (e.ProductID.indexOf(TempInputProductID) != -1) {
									newSource.push(e.ProductID + ":" + e.ProductName);
								}
							}); // 如果匹配结果存在，那么将其返回，相反则返回空数组
	
							if (newSource.length != 0) {
								// this.setData({
								// 	// 匹配结果存在，显示自动联想词下拉列表
								// 	hideScroll: false,
								// 	bindSource: newSource,
								// 	arrayHeight: newSource.length * 71
								// });
								that.hideScroll = false;
								that.bindSource = newSource;
								that.arrayHeight = newSource.length * 71;
							} else {
								// this.setData({
								// 	// 匹配无结果，不现实下拉列表
								// 	hideScroll: true,
								// 	bindSource: []
								// });
								that.hideScroll = true;
								that.bindSource = [];
							}
						}
					} else {
						// this.setData({
						// 	// 匹配无结果，不现实下拉列表
						// 	hideScroll: true,
						// 	bindSource: []
						// });
						that.hideScroll = true;
						that.bindSource = [];
					}
				}
	
				if (event.currentTarget.id == "ZCTFeesInstructions") //如果是“填写费用及相关说明”，修改对应已输入的字数inputNumWords
				{
					var tempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock
						.fillItemList);
					var nickNameOld = event.detail.value;
					nickNameOld = nickNameOld.replace(/\s+/g, '');
					tempfillItem.inputNumWords = nickNameOld.length; //修改费用及相关说明已输入的字数
	
					// this.setData({
					// 	fillBlock: this.fillBlock
					// });
					that.fillBlock = this.fillBlock;
				}
			},
			// 用户点击选择某个联想字符串时，获取该联想词，并清空提醒联想词数组
			itemtap: function(e) {
				var that = this;
				var TempSelectValue = e.target.id; //选择项的值
	
				var TempSelectProductId = ""; //选择项的产品号
	
				var TempSelectProductName = ""; //选择项的产品名称
	
				var TempAIndex = TempSelectValue.indexOf(':');
	
				if (TempAIndex == -1) {
					//联想结果中没有分号
					TempSelectProductId = TempSelectValue;
				} else {
					TempSelectProductId = TempSelectValue.substring(0, TempAIndex);
					TempSelectProductName = TempSelectValue.substring(TempAIndex + 1, TempSelectValue.length);
				}
	
				var TempProductIdIndex = 0; //产品号在fillBlock.fillItemList中的下标
	
				var TempProductNameIndex = 0; //产品名称在fillBlock.fillItemList中的下标
	
				var TempIsFindId = false; //是否找到产品号输入框
	
				var TempIsFindName = false; //是否找到产品名称输入框
	
				for (var i = 0; i < this.fillBlock.fillItemList.length; i++) {
					if (this.fillBlock.fillItemList[i]._id == "PMInnerProductID") //遍历找到产品名称输入框的下标
					{
						TempProductIdIndex = i;
						TempIsFindId = true;
					}
	
					if (this.fillBlock.fillItemList[i]._id == "PMInnerProductName") {
						TempProductNameIndex = i;
						TempIsFindName = true;
					}
				}
	
				if (TempIsFindId) {
					//找到了产品号输入框，进行赋值
					let TempPMInnerProductIdObj = 'fillBlock.fillItemList[' + TempProductIdIndex +
						'].fillValue'; //给产品名赋值
	
					// this.setData({ //[TempPMInnerProductIdObj]: TempSelectProductId
					// });
					//try fix
					[TempPMInnerProductIdObj] = TempSelectProductId;
				}
	
				if (TempIsFindName) {
					//找到了产品名称输入框，进行赋值
					let TempPMInnerProductNameObj = 'fillBlock.fillItemList[' + TempProductNameIndex +
						'].fillValue'; //给产品名赋值
	
					// this.setData({ //[TempPMInnerProductNameObj]: TempSelectProductName
					// });
					//try fix
					[TempPMInnerProductNameObj] = TempSelectProductName;
				}
	
				// this.setData({
				// 	// 当用户选择某个联想词，隐藏下拉列表
				// 	hideScroll: true,
				// 	bindSource: []
				// });
				that.hideScroll = true;
				that.bindSource = [];
			},
			//命令按钮函数入口(新增或编辑的实现)
			bindButtonTap: async function(event) {
				// getApp().preventActive(async () => {
				//app.preventActive(async () => {
				//////////////////
				//PMCOI新增或编辑//
				/////////////////
				if (this.dataType == "PMCOIAddNew" || this.dataType == "PMCOIEdit") {
					if (this.isConfButtonDisabled == true) {
						return;
					} //设置按钮为运行中状态
	
					var that = this;
					that.loadingMark = "weui-loading";
					that.isConfButtonDisabled = true; //禁用按钮
					var funcPra = {};
					funcPra.PMCOI = this.PMCOIDataEdit;
					wx.setStorage({
						key: 'PMCOI',
						data: funcPra.PMCOI
					});
					var TempUnit = ""; //单位
	
					for (var tempItem in this.fillBlock.fillItemList) {
						var unittitle = this.fillBlock.fillItemList[tempItem].fillTitle;
	
						if (unittitle == "单位") {
							TempUnit = this.fillBlock.fillItemList[tempItem].fillValue;
						}
					} //funcPra.PMCOI = {} //准备一个空的PMCOI
					//通过控件获取的值自动进行输入值格式和正确性验证
	
	
					for (var tempItem in this.fillBlock.fillItemList) {
						if (!this.fillBlock.fillItemList[tempItem].fillValue && this.fillBlock
							.fillItemList[tempItem].fillTitle != "费用及相关说明" && this.fillBlock
							.fillItemList[tempItem].fillTitle != "生产环境及任务相关图片") {
							var that = this;
							that.topTips = true;
							that.topTipsStr = "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle;
							setTimeout(function() {
								//时间限制
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000); //设置按钮为启用状态
							that.loadingMark = "";
							that.isConfButtonDisabled = false; //启用按钮
							that.confirmBtnClass = "weui-btn weui-btn_primary";
							return;
						}
						//交付时间不能小于当前时间
						if (this.fillBlock.fillItemList[tempItem].fillTitle == "交付时间") {
							var DS = new Date(this.fillBlock.fillItemList[tempItem].fillValue);
							var TempDN = new Date();
							var TempDateSelect = DS.getFullYear() + "/" + (DS.getMonth() + 1) + "/" +
								DS.getDate();
							var TempDateNow = TempDN.getFullYear() + "/" + (TempDN.getMonth() + 1) +
								"/" + TempDN.getDate();
							var TempDateSelect2 = Date.parse(TempDateSelect);
							var TempDateNow2 = Date.parse(TempDateNow);
	
							if (TempDateNow2 > TempDateSelect2) {
								var that = this;
	
								that.topTips = true;
								that.topTipsStr = "交付时间需要大于当前时间！";
								setTimeout(function() {
	
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								that.loadingMark = "";
								that.isConfButtonDisabled = false;
								that.confirmBtnClass = "weui-btn weui-btn_primary";
								return;
							}
						}
	
						if (this.fillBlock.fillItemList[tempItem].fillTitle == "需求数量" || this.fillBlock
							.fillItemList[tempItem].fillTitle == "数量") {
							if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[tempItem]
									.fillValue, "正浮点数")) {
								var that = this;
	
								that.topTips = true;
								that.topTipsStr = this.fillBlock.fillItemList[tempItem].fillTitle +
									"：请输入数字！";
								setTimeout(function() {
									//时间限制
	
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								that.loadingMark = "";
								that.isConfButtonDisabled = false; //启用按钮
								that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
								return;
							} else {
								console.log(TempUnit);
	
								if (TempUnit == "件" || TempUnit == "个" || TempUnit == "套" ||
									TempUnit == "箱" || TempUnit == "袋") {
									if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[
											tempItem].fillValue, "验证非零的正整数")) {
										var that = this;
	
										that.topTips = true;
										that.topTipsStr = this.fillBlock.fillItemList[tempItem]
											.fillTitle + "：请输入大于0的整数";
										setTimeout(function() {
	
											that.topTips = false;
											that.topTipsStr = "";
										}, 3000); //设置按钮为启用状态
	
										that.loadingMark = "";
										that.isConfButtonDisabled = false; //启用按钮
										that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
										return;
									}
								}
	
								funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = parseFloat(
									pmJSTools.GetNum(this.fillBlock.fillItemList[tempItem]
										.fillValue)); //准备发往云端的值
	
								continue;
							}
						}
	
						funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = this.fillBlock
							.fillItemList[tempItem].fillValue; //准备发往云端的值
					} //提前再客户端获取一个动态ID值。
	
	
					if (this.dataType == "PMCOIAddNew") //新增COI时才需要赋值PMInnerCustomerOrderItemID
					{
						funcPra.PMCOI.PMInnerCustomerOrderItemID = pmJSTools.GetSubObj([pmJSTools
							.GetSeqID("COI", 1), 0
						]);
						funcPra.PMCOI.PMCreater = app.globalData.PMUserID;
						funcPra.PMCOI.PMUserID = app.globalData._id;
						funcPra.PMCOI.ZCTCreaterName = app.globalData.PMUserName;
					}
	
					//上传产品图片
					//在执行数据上传前，先上传图片
					//上传不成功不影响后续执行，可以后面再加图片。
					if (!pmJSTools.IsNullOrEmpty(this.ZCTProductURL)) {
						//注意： 如何是点选的图片会放在this.data.ZCTProductURL[0]里
						var tempFileSuffix;
						var tempFileSuffix = pmJSTools.getFileSuffix(this.ZCTProductURL[0]);
	
						if (tempFileSuffix != "" && tempFileSuffix.length !=
							1) //防止是图片没有改变的情形，图片没有改变不需要上传
						{
							var remotefileName = pmJSTools.GetSeqID("", 1) + "-" + funcPra.PMCOI
								.PMInnerCustomerOrderItemID +
								tempFileSuffix; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
	
							var tempUploadRes = await pmSerTools.UploadFile("PMCOIProductPic", this
								.ZCTProductURL[0], remotefileName);
	
							if (tempUploadRes.errMsg == "OK") {
								funcPra.PMCOI.ZCTProductURL = tempUploadRes
									.result; //图片上传成功后，把云图片地址赋值给变量
							} else {
								var that = this;
	
								that.topTips = true;
								that.topTipsStr = "上传图片失败" + tempUploadRes.errMsg;
								setTimeout(function() {
									//时间限制
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								that.loadingMark = "";
								that.isConfButtonDisabled = false; //启用按钮
								that.confirmBtnClass = "weui-btn weui-btn_primary";
								return;
							}
						} else {
							if (tempFileSuffix.length ==
								1) //标识图片没有改变，这一段代码有点奇怪。原因在于图片组件的地址是个数组。而我们需要的是个地址字符串.
							//，通过调试代码看选择图片，和步选择图片是ZCTProductURL的区别可以知道为什么.
							{
								//如果是订单生产类型，此时图片是“暂无图片”，则不允许通过。
								if (funcPra.PMCOI.PMOrderProType == "订单生产" && this.ZCTProductURL ==
									"https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg"
								) {
									var that = this;
									that.topTips = true;
									that.topTipsStr = "请选择产品图片！";
									setTimeout(function() {
										//时间限制
										// that.setData({
										// 	topTips: false,
										// 	topTipsStr: ""
										// });
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000); //设置按钮为启用状态
	
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary";
									return;
								} else {
									funcPra.PMCOI.ZCTProductURL = this.ZCTProductURL;
								}
							}
						}
					} else {
						var that = this;
						that.topTips = true;
						that.topTipsStr = "上传图片失败,请选择产品图片!";
						setTimeout(function() {
							//时间限制
							that.topTips = false;
							that.topTipsStr = "";
						}, 3000); //设置按钮为启用状态
						that.loadingMark = "";
						that.isConfButtonDisabled = false; //启用按钮
						that.confirmBtnClass = "weui-btn weui-btn_primary";
						return;
					}
					//上传【生产环境及任务相关图片】
					funcPra.PMCOI.ZCTTaskPictureLst = [];
					var tempfillItem = pmJSTools.getOneControlFromList("ZCTTaskPictureLst", this
						.fillBlock.fillItemList);
	
					if (!pmJSTools.IsNullOrEmpty(tempfillItem.fillImgLst)) {
						if (tempfillItem.fillImgLst.length > 6) {
							var that = this;
	
							that.topTips = true;
							that.topTipsStr = "最多只能上传6张图片！";
							setTimeout(function() {
								//时间限制
	
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000); //设置按钮为启用状态
	
							that.loadingMark = "";
							that.isConfButtonDisabled = false; //启用按钮
							that.confirmBtnClass = "weui-btn weui-btn_primary";
							return;
						}
	
						for (var TempI = 0; TempI < tempfillItem.fillImgLst.length; TempI++) {
							var tempFileSuffixTaskP;
							var tempFileSuffixTaskP = pmJSTools.getStrsubstring(tempfillItem
								.fillImgLst[TempI], 0, 1);
	
							if (tempFileSuffixTaskP != "" && tempFileSuffixTaskP !=
								"c") //防止是图片没有改变的情形，图片没有改变不需要上传
							{
								var remotefileName = pmJSTools.GetSeqID("", 1) + "-" + funcPra.PMCOI
									.PMInnerCustomerOrderItemID +
									tempFileSuffixTaskP; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
	
								var tempUploadRes = await pmSerTools.UploadFile("PMCOIProductPic",
									tempfillItem.fillImgLst[TempI], remotefileName);
	
								if (tempUploadRes.errMsg == "OK") {
									//图片上传成功后，把云图片地址赋值给变量
									var upoderesult = tempUploadRes.result;
									funcPra.PMCOI.ZCTTaskPictureLst.push(upoderesult);
								}
							} else {
								if (tempFileSuffixTaskP == "c") {
									funcPra.PMCOI.ZCTTaskPictureLst.push(tempfillItem.fillImgLst[
										TempI]);
								}
							}
						}
					}
	
					if (funcPra.PMCOI.PMOrderProType == "劳务") {
						funcPra.PMCOI.PMInnerProductID = funcPra.PMCOI
							.PMInnerCustomerOrderItemID; //如果是劳务类型的，则任务号即为COI号
					} //计划交付时间格式处理
	
	
					var TempPlanDate = new Array();
					TempPlanDate = funcPra.PMCOI.ZCTPlanDeliDateShort.split(
						"/"
					);
					var TempPlanDateMonth = TempPlanDate[1].length > 1 ? TempPlanDate[1] : "0" +
						TempPlanDate[1];
					var TempPlanDateDay = TempPlanDate[2].length > 1 ? TempPlanDate[2] : "0" +
						TempPlanDate[2];
					funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDate[0] + "/" + TempPlanDateMonth +
						"/" + TempPlanDateDay;
					console.log(funcPra);
	
					//COIAddNew 或者 PMCOIEdit
					var tempRes = await pmSerTools.exePMCOI(this.dataType, funcPra);
					console.log("从云函数返回的至为：" + tempRes.result.errMsg);
					if (tempRes.result.errMsg == "OK") {
						pmJSTools.UpdateProductStorge(funcPra.PMCOI.PMInnerProductID, funcPra.PMCOI
							.PMInnerProductName);
	
						for (var tempItem in this.fillBlock.fillItemList) {
							//条件判别  idcard,digit,number,DATETIME
							this.fillBlock.fillItemList[tempItem].fillValue = funcPra.PMCOI[this
								.fillBlock.fillItemList[tempItem]._id]; //从云端获得的值赋值
						}
	
						var temp_id = "";
	
						if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([tempRes.result.errMsg,
								0
							]))) //数据结果放在了result第一个数据列中,所以需要脱壳 
						{
							var tempLst = tempRes.result.result[0];
	
							if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([tempLst.dataList,
									0
								]))) //数据结果放在了result第一个数据列中,所以需要脱壳 
							{
								temp_id = tempLst.dataList[0]._id;
							}
						} //远程已经创建成功了，这时候需要修改本地界面为修改状态，防止重复提交。
	
	
						this.PMInnerCustomerOrderItemID = funcPra.PMCOI
							.PMInnerCustomerOrderItemID; //创建一个交付订单号，用来修改定位
						//  this.data.btnCommandName = "更新"
						// // this.setData({
						// //   btnCommandName: this.data.btnCommandName
						// // })
						// var that = this;
						// that.btnCommandName = this.data.btnCommandName;
	
						// that.PMInnerCustomerOrderItemID = this.PMInnerCustomerOrderItemID;
						// this.fillBlock.fillRemind = "按照提示填写，修改交付任务：" + this.PMInnerCustomerOrderItemID;
						// // this.setData({
						// // 	fillBlock: this.fillBlock
						// // });
						// that.fillBlock = this.fillBlock;
						// console.log(event);
						let tempPage = getCurrentPages(); // 当前页变量
	
						let prevPage = tempPage[tempPage.length - 2]; // 上一页变量
	
						if (this.dataType == "PMCOIAddNew") {
							// 这里给要打开的页面传递数据.
							funcPra.PMCOI.PMChangeTime = new Date(); //实际上这个时间是云函数决定的，这里只做临时展示用
	
							funcPra.PMCOI._id = temp_id; //将云函数返回的_id存到PMCOI中，用于返回上一个页面（交付任务清单页）
	
							funcPra.PMCOI.PMOrderState =
								"NORELEASE"; //新增交付任务数据状态为编辑中，与云函数保持一致。//	订单状态	NORELEASE:编辑中，PARTRELEASE:部分下达,ALLRELEASE:全部下达，INTERIOR:出货中，FINISH:完结,INTERIOR:转内部订单
	
							funcPra.PMCOI.ZCTFinishedNum = "0"; //完成数 
	
							funcPra.PMCOI.ZCTFinishedRate = "0"; //完成率 
	
							funcPra.PMCOI.PMCreater = app.globalData.PMUserID; //执行动态变量计算函数
	
							pmJSTools.calPMCOI(funcPra.PMCOI);
							//this.PMCOIList.unshift(funcPra.PMCOI); //新生成的数据，加到数据头 传给前一页
	
							// prevPage.setData({
							// 	PMCOIList: this.PMCOIList //对前一页数据渲染
							// });
							prevPage.PMCOIList = this.PMCOIList; //对前一页数据渲染
							uni.navigateBack({
								//返回前一页
								delta: 1,
							});
						} else {
							//使用工具函数更新一个元素
							//calChangeTimeStr是计算值填写在此
							funcPra.PMCOI.PMChangeTime = new Date(); //实际上这个时间是云函数决定的，这里只做临时展示用
							//执行动态变量计算函数
	
							pmJSTools.calPMCOI(funcPra.PMCOI);
							pmJSTools.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, this
								.PMCOIList); //执行计算驱动函数（有些变量是计算获得的）
	
							// prevPage.setData({
							// 	PMCOIList: this.PMCOIList //对前一页数据渲染
							// });
							prevPage.PMCOIList = this.PMCOIList; //对前一页数据渲染
							uni.navigateBack({
								//返回前一页
								delta: 1
							});
						} //执行完后，设置为不可编辑
	
						var that = this;
	
						that.loadingMark = "";
						that.isConfButtonDisabled = true;
						that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
					} else {
						var that = this;
						that.topTips = true;
						that.topTipsStr = "创建交付任务错误:" + tempRes.errMsg;
						setTimeout(function() {
							that.topTips = false;
							that.topTipsStr = "";
						}, 3000); //绑定失败，可以重复绑定
						that.loadingMark = "";
						that.isConfButtonDisabled = false; //启用按钮
						that.confirmBtnClass = "weui-btn weui-btn_primary";
					}
	
					return;
				} //////////////////
	
	
				//POAddNew PO 的增加//
				/////////////////
				if (this.dataType == "POAddNew" || this.dataType == "PMPOEdit") {
					if (this.isConfButtonDisabled == true) {
						return;
					} //设置按钮为运行中状态
	
	
					// this.setData({
					// 	loadingMark: "weui-loading",
					// 	isConfButtonDisabled: true,//禁用按钮
					// 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
					// });
					that.loadingMark = "weui-loading";
					that.isConfButtonDisabled = true; //禁用按钮
					that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
					var tempPMPOList = []; //准备一个空POList
	
					var tempPlannedNum = 0;
	
					for (let TempItem = 0; TempItem < this.fillBlock.fillItemList.length; TempItem++) {
						if (this.fillBlock.fillItemList[TempItem].fillTitle == "计划单数(个)" || this
							.fillBlock.fillItemList[TempItem].fillTitle.includes("每单数量")) {
							var TempUnit = this.PMCOI.PMOrderUnit;
	
							if (TempUnit == "件" || TempUnit == "个" || TempUnit == "套" || TempUnit ==
								"箱" || TempUnit == "袋") {
								if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[TempItem]
										.fillValue, "验证非零的正整数")) {
									var that = this;
									// that.setData({
									// 	topTips: true,
									// 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "：请输入大于0的整数"
									// });
									that.topTips = true;
									that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
										"：请输入大于0的整数";
									setTimeout(function() {
										//时间限制
										// that.setData({
										// 	topTips: false,
										// 	topTipsStr: ""
										// });
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000); //设置按钮为启用状态
	
									// this.setData({
									// 	loadingMark: "",
									// 	isConfButtonDisabled: false,//启用按钮
									// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
	
									// });
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
									return;
								}
							} else {
								if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[TempItem]
										.fillValue, "正浮点数")) {
									var that = this;
									// that.setData({
									// 	topTips: true,
									// 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "请输入大于0的数字"
									// });
									that.topTips = true;
									that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
										"请输入大于0的数字";
									setTimeout(function() {
										//时间限制
										// that.setData({
										// 	topTips: false,
										// 	topTipsStr: ""
										// });
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000); //设置按钮为启用状态
	
									// this.setData({
									// 	loadingMark: "",
									// 	isConfButtonDisabled: false,//启用按钮
									// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
	
									// });
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
	
									return;
								}
							}
						}
	
						if (this.fillBlock.fillItemList[TempItem].fillTitle == "首单计划完工日期") {
							if (this.fillBlock.fillItemList[TempItem].fillTitle.includes("日期")) {
								if (pmJSTools.IsNullOrEmpty(this.fillBlock.fillItemList[TempItem]
										.fillValue)) {
									var that = this;
									// that.setData({
									// 	topTips: true,
									// 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "未输入，无法保存"
									// });
									that.topTips = true;
									that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
										"未输入，无法保存";
									setTimeout(function() {
										//时间限制
										// that.setData({
										// 	topTips: false,
										// 	topTipsStr: ""
										// });
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000);
									// this.setData({
									// 	loadingMark: "",
									// 	isConfButtonDisabled: false,//启用按钮
									// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
	
									// });
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
									return;
								}
	
								var TempDate = util.formatTime(new Date());
								var TempDateTime = new Date(Date.parse(this.fillBlock.fillItemList[
									TempItem].fillValue.replace(/-/g, "/")));
								var TempFinDateTime = util.formatTime(TempDateTime);
	
								if (TempFinDateTime < TempDate) {
									var that = this;
									// that.setData({
									// 	topTips: true,
									// 	topTipsStr: this.fillBlock.fillItemList[TempItem].fillTitle + "不可小于当前日期！"
									// });
									that.topTips = true;
									that.topTipsStr = this.fillBlock.fillItemList[TempItem].fillTitle +
										"不可小于当前日期！";
									setTimeout(function() {
										//时间限制
										// that.setData({
										// 	topTips: false,
										// 	topTipsStr: ""
										// });
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000); //设置按钮为启用状态
	
									// this.setData({
									// 	loadingMark: "",
									// 	isConfButtonDisabled: false,//启用按钮
									// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
	
									// });
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
									return;
								}
							}
						}
	
						if (this.fillBlock.fillItemList[TempItem].fillTitle.includes("计划单数")) {}
					}
	
					var TempOrderSumNum = 0;
	
					for (var tempI = 0; tempI < this.fillBlock.fillItemList[0].fillValue; tempI++) {
						if (this.dataType == "PMPOEdit") {
							var PMPO = {
								_id: pmJSTools.GetSeqID("PO", 1)[0],
								PMProductionOrderID: pmJSTools.GetSeqID("PO", 6)[0],
								//	生产订单号
								PMInnerCustomerOrderItemID: this.PMCOI.PMInnerCustomerOrderItemID,
								PMOrderNum: this.fillBlock.fillItemList[1].fillValue,
								//	订单数量	
								PMUnit: this.PMCOI.PMOrderUnit,
								//	计量单位
								ZCTlanStockInTimeShort: this.fillBlock.fillItemList[2].fillValue,
								//	计划入库日期短表达
								PMProductID: this.PMCOI.PMInnerProductID,
								//	物料号
								PMMaterialName: this.PMCOI.PMInnerProductName,
								//	物料名称
								ZCTFinishedNum: 0,
								ZCTFinishedRate: 0,
								// 生产订单完成率
								ZCTProductURL: this.ZCTProductURL,
								//产品图片
								PMPIList: []
							};
							TempOrderSumNum = parseFloat(pmJSTools.GetNum(TempOrderSumNum)) +
								parseFloat(pmJSTools.GetNum(TempOrderNum));
							tempPlannedNum = tempPlannedNum + parseFloat(PMPO.PMOrderNum);
						} else {
							var TempOrderNum = this.fillBlock.fillItemList[1].fillValue;
	
							if (this.IsFillHelpSwitch) {
								if (tempI == parseFloat(pmJSTools.GetNum(this.fillBlock.fillItemList[0]
										.fillValue)) - 1) {
									TempOrderNum = parseFloat(parseFloat(pmJSTools.GetNum(this.PMCOI
										.ZCTPlanNeedNum) - pmJSTools.GetNum(
										TempOrderSumNum)).toFixed(2));
								}
							}
	
							var PMPO = {
								_id: pmJSTools.GetSeqID("PO", 1)[0],
								PMProductionOrderID: pmJSTools.GetSeqID("PO", 6)[0],
								//	生产订单号
								PMInnerCustomerOrderItemID: this.PMCOI.PMInnerCustomerOrderItemID,
								PMOrderNum: TempOrderNum,
								//	订单数量	
								PMUnit: this.PMCOI.PMOrderUnit,
								//	计量单位
								ZCTlanStockInTimeShort: pmJSTools.dateAddDays(this.fillBlock
									.fillItemList[2].fillValue, tempI * this.fillBlock
									.fillItemList[3].fillValue),
								//	计划入库日期短表达
								PMProductID: this.PMCOI.PMInnerProductID,
								//	物料号
								PMMaterialName: this.PMCOI.PMInnerProductName,
								//	物料名称
								ZCTFinishedNum: 0,
								ZCTFinishedRate: 0,
								// 生产订单完成率
								ZCTProductURL: this.ZCTProductURL,
								//产品图片，使用新增或编辑的图片
								PMPIList: []
							};
							TempOrderSumNum = parseFloat(pmJSTools.GetNum(TempOrderSumNum)) +
								parseFloat(pmJSTools.GetNum(TempOrderNum));
							tempPlannedNum = tempPlannedNum + parseFloat(PMPO.PMOrderNum);
						}
	
						if (this.dataType == "PMPOEdit") {
							PMPO._id = this.PO._id;
							PMPO.PMProductionOrderID = this.PO.PMProductionOrderID;
	
							if (!pmJSTools.IsNullOrEmpty(this.PO.PMPIList)) {
								this.PO.PMPIList.forEach(TempItem => {
									TempItem.PMOrderNum = PMPO.PMOrderNum;
								});
							}
	
							PMPO.PMPIList = this.PO.PMPIList;
	
							if (!pmJSTools.IsNullOrEmpty(this.PO.ZCTLastSPTList)) {
								this.PO.ZCTLastSPTList.forEach(TempItem => {
									TempItem.PMOrderNum = PMPO.PMOrderNum;
	
									if (!IsNullOrEmpty(TempItem.ZCTLastOPTList)) {
										TempItem.ZCTLastOPTList.forEach(TempOPT => {
											TempOPT.PMOrderNum = PMPO.PMOrderNum;
										});
									}
								});
							}
	
							PMPO.ZCTLastSPTList = this.PO.ZCTLastSPTList;
						}
	
						if (this.IsLastPIFillHelpSwitch) {
							this.PMPIList.forEach(TempItem => {
								var tempPI = {
									_id: pmJSTools.GetSeqID("PI", 1)[0],
									PMPRDInstructionID: pmJSTools.GetSeqID("PI", 6)[0],
									//	生产订单号
									ZCTPlanStockInTimeShort: TempItem
										.ZCTPlanStockInTimeShort,
									//	计划入库日期短表达
									PMMaterialName: this.PMCOI.PMInnerProductName,
									//	物料名称 只是为了显示
									ZCTProductURL: this.PMCOI.ZCTProductURL,
									//产品工序图片
									PMStanardProcessName: TempItem.PMStanardProcessName,
									PMProcessSeq: TempItem.PMProcessSeq,
									PMProductionOrderID: PMPO.PMProductionOrderID,
									PMOrderNum: PMPO.PMOrderNum,
									//	订单数量	
									PMUnit: PMPO.PMUnit,
									//	计量单位	
									PMPlanFromStock: "0",
									//	计划使用库存数	
									ZCTPlanStockInTimeShort: TempItem
										.ZCTPlanStockInTimeShort,
									//	计划入库时间	
									PMRemark: "",
									//	备注	
									PMState: "CREATE",
									//	状态		
									PMIsUrgent: "NO",
									//	是否紧急	是、否
									PMProductNum: 0,
									//	已完工数量	
									ZCTFinishedNum: 0,
									//已完成数量
									ZCTFinishedRate: 0,
									//完成率
									ZCTLastSPTList: []
								};
								var TempZCTRAWProList = [];
								var TempZCTRAWPurList = [];
								TempItem.ZCTRAWProList.forEach(TempRAWPRo => {
									var TempZCTRAWPro = {
										ZCTMaterialName: TempRAWPRo
											.ZCTMaterialName,
										PMNum: TempRAWPRo.PMNum,
										PMUnit: TempRAWPRo.PMUnit,
										ZCTMaterialFromType: TempRAWPRo
											.ZCTMaterialFromType,
										ZCTGetNum: 0,
										//已领用物料数量
										ZCTGetRate: 0,
										//领用率
										ZCTProductURL: TempRAWPRo.ZCTProductURL,
										//
										PMPRDInstructionID: tempPI
											.PMPRDInstructionID,
										_id: "PRO" + pmJSTools.GetSeqID("", 6)[0],
										ZCTPlanRAWTimeShort: tempPI
											.ZCTPlanStockInTimeShort
									};
									TempZCTRAWProList.push(TempZCTRAWPro);
								});
								TempItem.ZCTRAWPurList.forEach(TempRAWPur => {
									var TempZCTRAWPur = {
										ZCTMaterialName: TempRAWPur
											.ZCTMaterialName,
										PMNum: TempRAWPur.PMNum,
										PMUnit: TempRAWPur.PMUnit,
										ZCTMaterialFromType: TempRAWPur
											.ZCTMaterialFromType,
										ZCTGetNum: 0,
										//已领用物料数量
										ZCTGetRate: 0,
										//领用率
										ZCTProductURL: TempRAWPur.ZCTProductURL,
										//
										PMPRDInstructionID: tempPI
											.PMPRDInstructionID,
										_id: "RAW" + pmJSTools.GetSeqID("", 1)[0],
										ZCTPlanRAWTimeShort: tempPI
											.ZCTPlanStockInTimeShort
									};
									TempZCTRAWPurList.push(TempZCTRAWPur);
								});
								tempPI.ZCTRAWProList = TempZCTRAWProList;
								tempPI.ZCTRAWPurList = TempZCTRAWPurList;
								PMPO.PMPIList.push(tempPI);
							});
						}
	
						tempPMPOList.push(PMPO);
					} //
					//这里应该写PO批量提交代码
					//
	
	
					if (this.dataType == "PMPOEdit") {
						var TempIndex = this.PMCOI.PMPOList.findIndex(item => item._id === this.PO
							._id);
						this.PMCOI.PMPOList[TempIndex] = PMPO;
					} else {
						if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([this.PMCOI, "PMPOList"]))) {
							this.PMCOI.PMPOList = this.PMCOI.PMPOList.concat(tempPMPOList);
						} else {
							this.PMCOI.PMPOList = tempPMPOList;
						}
					}
	
					var TempPOProductNum = 0;
	
					if (!pmJSTools.IsNullOrEmpty(this.PMCOI.PMPOList)) {
						this.PMCOI.PMPOList.forEach(TempPO => {
							TempPOProductNum = parseFloat(pmJSTools.GetNum(TempPO.PMOrderNum) +
								pmJSTools.GetNum(TempPOProductNum));
						});
					}
	
					if (parseFloat(this.PMCOI.PMOrderNum - TempPOProductNum) > 0) {
						this.PMCOI.ZCTPlanNeedNum = parseFloat(pmJSTools.GetNum(this.PMCOI.PMOrderNum -
							TempPOProductNum).toFixed(2));
					} else {
						this.PMCOI.ZCTPlanNeedNum = 0;
					}
	
					let tempPage = getCurrentPages(); // 当前页变量
	
					let prevPage = tempPage[tempPage.length - 2]; // 上一页变量
	
					// prevPage.setData({
					// 	PMCOI: this.PMCOI //对前一页数据渲染
	
					// });
					prevPage.PMCOI = this.PMCOI; //对前一页数据渲染
					wx.navigateBack({
						//返回前一页
						delta: 1
					});
					return;
				} ///////////////////////
	
				//通过移交分发的创建COI//
				///////////////////////
				if (this.dataType == "PMCOIDistribute") {
					if (this.isConfButtonDisabled == true) {
						return;
					} //设置按钮为运行中状态
	
	
					// this.setData({
					// 	loadingMark: "weui-loading",
					// 	isConfButtonDisabled: true,//禁用按钮
					// 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
					// });
					var that = this;
					that.loadingMark = "weui-loading";
					that.isConfButtonDisabled = true; //禁用按钮
					that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
					var funcPra = {};
					funcPra.PMOptionType = "CreateCOI";
					funcPra.SourceTaskID = this.TempSourceTaskID, //分发来源COI任务ID
						funcPra.SourceType = this.TempSourceType, //分发来源类型
						funcPra.SourcePositionID = this.TempSourcePositionID, //分发来源位置任务ID
						funcPra.PMCOI = this.PMCOIDataEdit;
					wx.setStorage({
						key: 'PMCOI',
						data: funcPra.PMCOI
					});
					var TempUnit = ""; //单位
	
					for (var tempItem in this.fillBlock.fillItemList) {
						var TempUnitTitle = this.fillBlock.fillItemList[tempItem].fillTitle;
	
						if (TempUnitTitle == "单位") {
							TempUnit = this.fillBlock.fillItemList[tempItem].fillValue;
						}
					} //funcPra.PMCOI = {} //准备一个空的PMCOI
					//通过控件获取的值自动进行输入值格式和正确性验证
	
	
					for (var tempItem in this.fillBlock.fillItemList) {
						if (!this.fillBlock.fillItemList[tempItem].fillValue && this.fillBlock
							.fillItemList[tempItem].fillTitle != "费用及相关说明" && this.fillBlock
							.fillItemList[tempItem].fillTitle != "生产环境及任务相关图片") {
							var that = this;
							// that.setData({
							// 	topTips: true,
							// 	topTipsStr: "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle
							// });
							that.topTips = true;
							that.topTipsStr = "请输入" + this.fillBlock.fillItemList[tempItem].fillTitle;
							setTimeout(function() {
								//时间限制
								// that.setData({
								// 	topTips: false,
								// 	topTipsStr: ""
								// });
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000); //设置按钮为启用状态
	
							// this.setData({
							// 	loadingMark: "",
							// 	isConfButtonDisabled: false,//启用按钮
							// 	confirmBtnClass: "weui-btn weui-btn_primary"
							// });
							that.loadingMark = "";
							that.isConfButtonDisabled = false; //启用按钮
							that.confirmBtnClass = "weui-btn weui-btn_primary";
							return;
						}
	
						if (this.fillBlock.fillItemList[tempItem].fillTitle == "需求数量" || this.fillBlock
							.fillItemList[tempItem].fillTitle == "数量") {
							if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[tempItem]
									.fillValue, "正浮点数")) {
								var that = this;
								// that.setData({
								// 	topTips: true,
								// 	topTipsStr: this.fillBlock.fillItemList[tempItem].fillTitle + "：请输入数字！"
								// });
								that.topTips = true;
								that.topTipsStr = this.fillBlock.fillItemList[tempItem].fillTitle +
									"：请输入数字！";
								setTimeout(function() {
									//时间限制
									// that.setData({
									// 	topTips: false,
									// 	topTipsStr: ""
									// });
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								// this.setData({
								// 	loadingMark: "",
								// 	isConfButtonDisabled: false,//启用按钮
								// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
								// });
								that.loadingMark = "";
								that.isConfButtonDisabled = false; //启用按钮
								that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
								return;
							} else {
								console.log(TempUnit);
	
								if (TempUnit == "件" || TempUnit == "个" || TempUnit == "套" ||
									TempUnit == "箱" || TempUnit == "袋") {
									if (!pmJSTools.inputvalidation(this.fillBlock.fillItemList[
											tempItem].fillValue, "验证非零的正整数")) {
										var that = this;
										// that.setData({
										// 	topTips: true,
										// 	topTipsStr: this.fillBlock.fillItemList[tempItem].fillTitle + "：请输入大于0的整数"
										// });
										that.topTips = true;
										that.topTipsStr = this.fillBlock.fillItemList[tempItem]
											.fillTitle + "：请输入大于0的整数";
										setTimeout(function() {
											//时间限制
											// that.setData({
											// 	topTips: false,
											// 	topTipsStr: ""
											// });
											that.topTips = false;
											that.topTipsStr = "";
										}, 3000); //设置按钮为启用状态
	
										// this.setData({
										// 	loadingMark: "",
										// 	isConfButtonDisabled: false,//启用按钮
										// 	confirmBtnClass: "weui-btn weui-btn_primary" //按钮设置为可以编辑
	
										// });
										that.loadingMark = "";
										that.isConfButtonDisabled = false; //启用按钮
										that.confirmBtnClass = "weui-btn weui-btn_primary"; //按钮设置为可以编辑
										return;
									}
								}
	
								funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = parseFloat(
									pmJSTools.GetNum(this.fillBlock.fillItemList[tempItem]
										.fillValue)); //准备发往云端的值
	
								continue;
							}
						} //交付时间不能小于当前时间
	
	
						if (this.fillBlock.fillItemList[tempItem].fillTitle == "交付时间") {
							var DS = new Date(this.fillBlock.fillItemList[tempItem].fillValue);
							var TempDN = new Date();
							var TempDateSelect = DS.getFullYear() + "/" + (DS.getMonth() + 1) + "/" +
								DS.getDate();
							var TempDateNow = TempDN.getFullYear() + "/" + (TempDN.getMonth() + 1) +
								"/" + TempDN.getDate();
							var TempDateSelect2 = Date.parse(TempDateSelect);
							var TempDateNow2 = Date.parse(TempDateNow);
	
							if (TempDateNow2 > TempDateSelect2) {
								var that = this;
								// that.setData({
								// 	topTips: true,
								// 	topTipsStr: "交付时间需要大于当前时间！"
								// });
								that.topTips = true;
								that.topTipsStr = "交付时间需要大于当前时间！";
								setTimeout(function() {
									//时间限制
									// that.setData({
									// 	topTips: false,
									// 	topTipsStr: ""
									// });
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								// this.setData({
								// 	loadingMark: "",
								// 	isConfButtonDisabled: false,//启用按钮
								// 	confirmBtnClass: "weui-btn weui-btn_primary"
								// });
								that.loadingMark = "";
								that.isConfButtonDisabled = false; //启用按钮
								that.confirmBtnClass = "weui-btn weui-btn_primary";
								return;
							}
						}
	
						funcPra.PMCOI[this.fillBlock.fillItemList[tempItem]._id] = this.fillBlock
							.fillItemList[tempItem].fillValue; //准备发往云端的值
					}
	
					funcPra.PMCOI.PMInnerCustomerOrderItemID = pmJSTools.GetSubObj([pmJSTools.GetSeqID(
						"COI", 1), 0]);
					funcPra.PMCOI.PMCreater = app.globalData.PMUserID;
					funcPra.PMCOI.PMUserID = app.globalData._id;
					funcPra.PMCOI.ZCTCreaterName = app.globalData.PMUserName; //上传产品图片
					//在执行数据上传前，先上传图片
					//上传不成功不影响后续执行，可以后面再加图片。
	
					if (!pmJSTools.IsNullOrEmpty(this.ZCTProductURL)) {
						//注意： 如何是点选的图片会放在this.data.ZCTProductURL[0]里
						var tempFileSuffix;
						var tempFileSuffix = pmJSTools.getFileSuffix(this.ZCTProductURL[0]);
	
						if (tempFileSuffix != "" && tempFileSuffix.length !=
							1) //防止是图片没有改变的情形，图片没有改变不需要上传
						{
							var remotefileName = pmJSTools.GetSeqID("", 1) + "-" + funcPra.PMCOI
								.PMInnerCustomerOrderItemID +
								tempFileSuffix; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
	
							var tempUploadRes = await pmSerTools.UploadFile("PMCOIProductPic", this
								.ZCTProductURL[0], remotefileName);
	
							if (tempUploadRes.errMsg == "OK") {
								funcPra.PMCOI.ZCTProductURL = tempUploadRes
									.result; //图片上传成功后，把云图片地址赋值给变量
							} else {
								var that = this;
								// that.setData({
								// 	topTips: true,
								// 	topTipsStr: "上传图片失败" + tempUploadRes.errMsg
								// });
								that.topTips = true;
								that.topTipsStr = "上传图片失败" + tempUploadRes.errMsg;
								setTimeout(function() {
									//时间限制
									// that.setData({
									// 	topTips: false,
									// 	topTipsStr: ""
									// });
									that.topTips = false;
									that.topTipsStr = "";
								}, 3000); //设置按钮为启用状态
	
								// this.setData({
								// 	loadingMark: "",
								// 	isConfButtonDisabled: false,//启用按钮
								// 	confirmBtnClass: "weui-btn weui-btn_primary"
								// });
								that.loadingMark = "";
								that.isConfButtonDisabled = false; //启用按钮
								that.confirmBtnClass = "weui-btn weui-btn_primary";
								return;
							}
						} else {
							if (tempFileSuffix.length ==
								1) //标识图片没有改变，这一段代码有点奇怪。原因在于图片组件的地址是个数组。而我们需要的是个地址字符串.
							//，通过调试代码看选择图片，和步选择图片是ZCTProductURL的区别可以知道为什么.
							{
								//如果是订单生产类型，此时图片是“暂无图片”，则不允许通过。
								if (funcPra.PMCOI.PMOrderProType == "订单生产" && this.ZCTProductURL ==
									"https://7463-tcb-ecxw1hs9f19080-6d00j26b1957e-1307375483.tcb.qcloud.la/age.jpg"
								) {
									var that = this;
	
									that.topTips = true;
									that.topTipsStr = "请选择产品图片！";
									setTimeout(function() {
										//时间限制
	
										that.topTips = false;
										that.topTipsStr = "";
									}, 3000); //设置按钮为启用状态
	
	
									that.loadingMark = "";
									that.isConfButtonDisabled = false; //启用按钮
									that.confirmBtnClass = "weui-btn weui-btn_primary";
									return;
								} else {
									funcPra.PMCOI.ZCTProductURL = this.ZCTProductURL;
								}
							}
						}
					} else {
						var that = this;
						// that.setData({
						// 	topTips: true,
						// 	topTipsStr: "上传图片失败,请选择产品图片!"
						// });
						that.topTips = true;
						that.topTipsStr = "上传图片失败,请选择产品图片!";
						setTimeout(function() {
							//时间限制
							// that.setData({
							// 	topTips: false,
							// 	topTipsStr: ""
							// });
							that.topTips = false;
							that.topTipsStr = "";
						}, 3000); //设置按钮为启用状态
	
						// this.setData({
						// 	loadingMark: "",
						// 	isConfButtonDisabled: false,//启用按钮
						// 	confirmBtnClass: "weui-btn weui-btn_primary"
						// });
						that.loadingMark = "";
						that.isConfButtonDisabled = false; //启用按钮
						that.confirmBtnClass = "weui-btn weui-btn_primary";
						return;
					} //上传【生产环境及任务相关图片】
	
	
					funcPra.PMCOI.ZCTTaskPictureLst = [];
					var tempfillItem = pmJSTools.getOneControlFromList("ZCTTaskPictureLst", this
						.fillBlock.fillItemList);
	
					if (!pmJSTools.IsNullOrEmpty(tempfillItem.fillImgLst)) {
						if (tempfillItem.fillImgLst.length > 6) {
							var that = this;
							// that.setData({
							// 	topTips: true,
							// 	topTipsStr: "最多只能上传6张图片！"
							// });
							that.topTips = true;
							that.topTipsStr = "最多只能上传6张图片！";
							setTimeout(function() {
								//时间限制
								// that.setData({
								// 	topTips: false,
								// 	topTipsStr: ""
								// });
								that.topTips = false;
								that.topTipsStr = "";
							}, 3000); //设置按钮为启用状态
	
							// this.setData({
							// 	loadingMark: "",
							// 	isConfButtonDisabled: false,//启用按钮
							// 	confirmBtnClass: "weui-btn weui-btn_primary"
							// });
							that.loadingMark = "";
							that.isConfButtonDisabled = false; //启用按钮
							that.confirmBtnClass = "weui-btn weui-btn_primary";
							return;
						}
	
						for (var TempI = 0; TempI < tempfillItem.fillImgLst.length; TempI++) {
							var tempFileSuffixTaskP;
							var tempFileSuffixTaskP = pmJSTools.getStrsubstring(tempfillItem
								.fillImgLst[TempI], 0, 1);
	
							if (tempFileSuffixTaskP != "" && tempFileSuffixTaskP !=
								"c") //防止是图片没有改变的情形，图片没有改变不需要上传
							{
								var remotefileName = pmJSTools.GetSeqID("", 1) + "-" + funcPra.PMCOI
									.PMInnerCustomerOrderItemID +
									tempFileSuffixTaskP; //配置远程文件名，使用PMInnerCustomerOrderItemID防重
	
								var tempUploadRes = await pmSerTools.UploadFile("PMCOIProductPic",
									tempfillItem.fillImgLst[TempI], remotefileName);
	
								if (tempUploadRes.errMsg == "OK") {
									//图片上传成功后，把云图片地址赋值给变量
									var upoderesult = tempUploadRes.result;
									funcPra.PMCOI.ZCTTaskPictureLst.push(upoderesult);
								}
							} else {
								if (tempFileSuffixTaskP == "c") {
									funcPra.PMCOI.ZCTTaskPictureLst.push(tempfillItem.fillImgLst[
										TempI]);
								}
							}
						}
					} //计划交付时间格式处理
	
	
					var TempPlanDate = new Array();
	
					if (funcPra.PMCOI.ZCTPlanDeliDateShort.indexOf("-") != -1) {
						var TempPlanDeliDate = funcPra.PMCOI.ZCTPlanDeliDateShort.replace(/-/g, "/");
						funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDeliDate;
					}
	
					TempPlanDate = funcPra.PMCOI.ZCTPlanDeliDateShort.split("/");
					console.log(TempPlanDate[1]);
					console.log(TempPlanDate[1].length);
					console.log(TempPlanDate[1].length > 1 && TempPlanDate[1].substring(0, 1) == "0");
					console.log(TempPlanDate[1].substring(1, 1));
					console.log(TempPlanDate[1].charAt(TempPlanDate[1].length - 1));
					var TempPlanDateMonth = TempPlanDate[1].length > 1 && TempPlanDate[1].substring(0,
							1) == "0" ? TempPlanDate[1].charAt(TempPlanDate[1].length - 1) :
						TempPlanDate[1];
					var TempPlanDateDay = TempPlanDate[2].length > 1 && TempPlanDate[2].substring(0,
							1) == "0" ? TempPlanDate[2].charAt(TempPlanDate[2].length - 1) :
						TempPlanDate[
							2];
	
					if (pmJSTools.GetNum(TempPlanDateMonth) < 10) {
						TempPlanDateMonth = "0" + TempPlanDateMonth;
					}
	
					if (pmJSTools.GetNum(TempPlanDateDay) < 10) {
						TempPlanDateDay = "0" + TempPlanDateDay;
					}
	
					funcPra.PMCOI.ZCTPlanDeliDateShort = TempPlanDate[0] + "/" + TempPlanDateMonth +
						"/" + TempPlanDateDay;
					var tempRes = await pmSerTools.exePMCOI("OperatePMCOIDistribute", funcPra);
	
					if (tempRes.errMsg == "OK") {
						pmJSTools.UpdateProductStorge(funcPra.PMCOI.PMInnerProductID, funcPra.PMCOI
							.PMInnerProductName);
						this.fillBlock.fillRemind = "按照提示填写，修改交付任务：" + this
							.PMInnerCustomerOrderItemID; //执行完后，设置为不可编辑
						var that = this;
						// this.setData({
						// 	loadingMark: "",
						// 	isConfButtonDisabled: true,
						// 	confirmBtnClass: "weui-btn weui-btn_primary weui-btn_disabled"
						// });
						that.loadingMark = "";
						that.isConfButtonDisabled = true;
						that.confirmBtnClass = "weui-btn weui-btn_primary weui-btn_disabled";
						var TempUpdateCOI = this.TempSourceCOIData;
	
						switch (this.TempSourceType) {
							case "PO": {
								for (var TempPoIndex in TempUpdateCOI.PMPOList) {
									if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this
										.TempSourceTaskStructure.POID) {
										TempUpdateCOI.PMPOList[TempPoIndex].ZCTIsDistribute = "YES";
										TempUpdateCOI.PMPOList[TempPoIndex].IsDistributeStyle =
											"background-color:#ffff66";
									}
								}
	
								break;
							}
	
							case "PI": {
								for (var TempPoIndex in TempUpdateCOI.PMPOList) {
									if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this
										.TempSourceTaskStructure.POID) {
										for (var TempPIIndex in TempUpdateCOI.PMPOList[TempPoIndex]
												.PMPIList) {
											if (TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[
													TempPIIndex]._id == this.TempSourceTaskStructure
												.PIID) {
												TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[
													TempPIIndex].ZCTIsDistribute = "YES";
												TempUpdateCOI.PMPOList[TempPoIndex].PMPIList[
														TempPIIndex].IsDistributeStyle =
													"background-color:#ffff66";
											}
										}
									}
								}
	
								break;
							}
	
							case "SPT": {
								for (var TempPoIndex in TempUpdateCOI.PMPOList) {
									if (TempUpdateCOI.PMPOList[TempPoIndex]._id == this
										.TempSourceTaskStructure.POID) {
										for (var TempSPTIndex in TempUpdateCOI.PMPOList[TempPoIndex]
												.ZCTLastSPTList) {
											if (TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[
													TempSPTIndex]._id == this.TempSourceTaskStructure
												.SPTID) {
												TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[
													TempSPTIndex].ZCTIsDistribute = "YES";
												TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[
														TempSPTIndex].IsDistributeStyle =
													"background-color:#ffff66";
											}
										}
									}
								}
	
								break;
							}
	
							case "OPT": {
								var TempSPT = TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey]
									.ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey]
										.selectedSPTKey];
	
								for (let index = 0; index < TempSPT.ZCTLastOPTList.length; index++) {
									if (TempSPT.ZCTLastOPTList[index]._id == this
										.TempSourceTaskStructure.OPTID) {
										TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey]
											.ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI
												.selectedPOKey].selectedSPTKey].ZCTLastOPTList[index]
											.ZCTIsDistribute = "YES";
										TempUpdateCOI.PMPOList[TempUpdateCOI.selectedPOKey]
											.ZCTLastSPTList[TempUpdateCOI.PMPOList[TempUpdateCOI
												.selectedPOKey].selectedSPTKey].ZCTLastOPTList[index]
											.IsDistributeStyle = "background-color:#ffff66";
									}
								} // for(var TempPoIndex in TempUpdateCOI.PMPOList){
								//   if(TempUpdateCOI.PMPOList[TempPoIndex]._id ==this.data.TempSourceTaskStructure.POID){
								//     for(var TempSPTIndex in TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList){
								//       if(TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex]._id ==this.data.TempSourceTaskStructure.SPTID ){
								//         for(var TempOPTIndex in TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList){
								//           if(TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex]._id == this.data.TempSourceTaskStructure.OPTID){
								//             TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex].ZCTIsDistribute="YES";
								//             TempUpdateCOI.PMPOList[TempPoIndex].ZCTLastSPTList[TempSPTIndex].ZCTLastOPTList[TempOPTIndex].IsDistributeStyle="background-color:#ffff66";
								//           }
								//         }
								//       }
								//     }
								//   }
								// } 
	
	
								break;
							}
	
							default:
								break;
						}
	
						let tempPage = getCurrentPages(); // 当前页变量
	
						let prevPage = tempPage[tempPage.length - 2]; // 上一页变量
	
						TempUpdateCOI.PMOptionType = "PMCOIDistribute";
						// prevPage.setData({
						// 	PMCOI: TempUpdateCOI //对前一页数据渲染
						// });
						prevPage.PMCOI = TempUpdateCOI; //对前一页数据渲染
						wx.navigateBack({
							//返回前一页
							delta: 1
						});
					} else {
						var that = this;
						// that.setData({
						// 	topTips: true,
						// 	topTipsStr: "创建交付任务错误:" + tempRes.errMsg
						// });
						that.topTips = true;
						that.topTipsStr = "创建交付任务错误:" + tempRes.errMsg;
						setTimeout(function() {
							//时间限制
							// that.setData({
							// 	topTips: false,
							// 	topTipsStr: ""
							// });
							that.topTips = false;
							that.topTipsStr = "";
						}, 3000); //绑定失败，可以重复绑定
	
						// this.setData({
						// 	loadingMark: "",
						// 	isConfButtonDisabled: false,//启用按钮
						// 	confirmBtnClass: "weui-btn weui-btn_primary"
						// });
						that.loadingMark = "";
						that.isConfButtonDisabled = false; //启用按钮
						that.confirmBtnClass = "weui-btn weui-btn_primary";
					}
				}
				//});
			},
			//
			pmDialogClose: function(event) {
				var that = this;
				that.pmDialog = false;
				// this.setData({
				// 	pmDialog: false
				// });
			},
			//考虑到新增和编辑代码的复用性，新增一个函数用于PMCOI的新增和修改和查看
			//PMCOI的编辑功能
			//PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
			LoadPMCOIData: function(PMCOIData, PMCOIType) {
				switch (this.dataType) {
					case "PMCOIAddNew": {
						//1.如果是创建过来的，则默认显示任务类型为劳务；默认加载劳务类型的表单。
						// this.LoadPMCOIDataLabor(PMCOIData,PMCOIType)
						//默认加载任务类型是订单生产
						this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
						break;
					}
	
					case "PMCOIEdit":
					case "PMCOIShow": {
						//2.如果是编辑、查看过来的，则首先判断下PMCOIData数据里面的任务类型是什么。
						//  如果是劳务类型，则加载劳务任务类型表单；如果是订单生产类型，则加载订单生产任务类型表单
						if (PMCOIData.PMOrderProType == "劳务") {
							this.LoadPMCOIDataLabor(PMCOIData, PMCOIType);
						} else {
							this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
						}
	
						break;
					}
	
					case "PMCOIDistribute": {
						//通过移交分发过来
						this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
						break;
					}
	
					default: {
						//其他：则加载劳务类型的表单
						// this.LoadPMCOIDataLabor(PMCOIData,PMCOIType)
						//加载订单生产类型
						this.LoadPMCOIDataOrdedrProduction(PMCOIData, PMCOIType);
						break;
					}
				}
			},
			//加载劳务任务类型表单。任务类型为：劳务。创建、 修改、查看页面如何显示。
			//PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
			LoadPMCOIDataLabor: function(PMCOIData, PMCOIType) {
				var isAddnew = false;
	
				if (pmJSTools.IsNullOrEmpty(PMCOIData)) {
					isAddnew = true;
				} //以下为初始化界面语句
	
	
				var fillBlock = {}; // if (isAddnew) {
				//   fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
				// } else {
				//   fillBlock.fillRemind = "按照提示填写，编辑交付任务";
				// }
	
				switch (PMCOIType) {
					case "PMCOIAddNew": {
						fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
						break;
					}
	
					case "PMCOIEdit": {
						fillBlock.fillRemind = "按照提示填写，编辑交付任务";
						break;
					}
	
					case "PMCOIShow": {
						fillBlock.fillRemind = "查看交付任务";
						break;
					}
	
					default: {
						fillBlock.fillRemind = "按照提示填写，操作交付任务";
						break;
					}
				}
	
				fillBlock.fillItemList = []; //这里编程有点麻烦，需要一行一行编辑
				//经过仔细推敲暂时没有什么好的办法
				//任务类型
	
				var fillItem_1 = {};
				fillItem_1.fillTitle = "任务类型", fillItem_1.fillChartURL = "", //可为空
					fillItem_1.fillTip = "点选任务类型", fillItem_1.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem_1.maxlength = "10", //
					fillItem_1.fillHelpList = ['劳务', '订单生产']; //备选项
	
				if (isAddnew) {
					fillItem_1.fillValue = fillItem_1.fillHelpList[0]; //默认填写好第一个
	
					fillItem_1.fillHelpIndex = 0;
				} else {
					fillItem_1.fillValue = PMCOIData.PMOrderProType;
					fillItem_1.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMOrderProType, fillItem_1
						.fillHelpList);
				} //编辑和查看，下拉框都不允许操作。只有新增可以选择任务类型下拉框
	
	
				if (PMCOIType == "PMCOIAddNew") {
					fillItem_1.filldisabled = false;
				} else {
					fillItem_1.filldisabled = true;
				}
	
				fillItem_1.editable = true, fillItem_1._id = "PMOrderProType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem_1); //工种类型
	
				var fillItem0 = {};
				fillItem0.fillTitle = "工种类型", fillItem0.fillChartURL = "", //可为空
					fillItem0.fillTip = "点选工种", fillItem0.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem0.maxlength = "10", //
					fillItem0.fillHelpList = pmJSTools.getPMJobType(); //备选项
	
				if (isAddnew) {
					fillItem0.fillValue = fillItem0.fillHelpList[0]; //默认填写好第一个
	
					fillItem0.fillHelpIndex = 0;
				} else {
					fillItem0.fillValue = PMCOIData.PMJobType;
					fillItem0.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMJobType, fillItem0.fillHelpList);
				} //编辑和查看，下拉框都不允许操作。只有新增可以选择任务类型下拉框
	
	
				if (PMCOIType == "PMCOIShow") {
					fillItem0.filldisabled = true;
				} else {
					fillItem0.filldisabled = false;
				}
	
				fillItem0.editable = true, fillItem0._id = "PMJobType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem0); // //产品号
	
	
				var fillItem2 = {};
				fillItem2.fillTitle = "任务名";
				fillItem2.fillChartURL = ""; //可为空
	
				fillItem2.fillTip = "填写任务内容";
				fillItem2.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem2.maxlength = "50"; //
	
				if (isAddnew) {} else {
					fillItem2.fillValue = PMCOIData.PMInnerProductName;
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem2.filldisabled = true;
				} else {
					fillItem2.filldisabled = false;
				}
	
				fillItem2.fillHelpList = null, //备选项
					fillItem2.editable = true, fillItem2._id = "PMInnerProductName", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem2);
				var fillItem5 = {};
				fillItem5.fillTitle = "交付时间", fillItem5.fillChartURL = "", //可为空
					fillItem5.fillTip = "点选时间", fillItem5.fillType = "DATE", //填写类型: idcard,digit,number,DATETIME
					fillItem5.maxlength = "20"; //
	
				if (isAddnew) {
					var TempT = new Date();
					var lastDay = new Date(TempT.getFullYear(), TempT.getMonth() + 1, 0).getDate();
	
					if (TempT.getDate() + 1 > lastDay) {
						fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 2) + "/" + 1; //默认填写好一个日期
					} else {
						fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 1) + "/" + (TempT
							.getDate() + 1); //默认填写好一个日期
					}
	
					fillItem5.startDate = new Date();
					fillItem5.endDate = new Date() + 5 * 365;
				} else {
					var TempT = new Date();
					fillItem5.fillValue = PMCOIData.ZCTPlanDeliDateShort;
					fillItem5.startDate = new Date();
					fillItem5.endDate = new Date() + 5 * 365;
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem5.filldisabled = true;
				} else {
					fillItem5.filldisabled = false;
				}
	
				fillItem5.fillHelpList = null, //备选项
					fillItem5.editable = true, fillItem5._id = "ZCTPlanDeliDateShort", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem5);
				var fillItem3 = {};
				fillItem3.fillTitle = "数量";
				fillItem3.fillChartURL = ""; //可为空
	
				fillItem3.fillTip = "必填";
				fillItem3.fillType = "digit"; //填写类型: idcard,digit,number,DATETIME
	
				fillItem3.maxlength = "50"; //
				// fillItem3.filleValue = null//默认填写好一个
	
				if (isAddnew) {
					fillItem3.fillValue = "1";
				} else {
					fillItem3.fillValue = PMCOIData.PMOrderNum;
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem3.filldisabled = true;
				} else {
					fillItem3.filldisabled = false;
				}
	
				fillItem3.fillHelpList = null, //备选项
					fillItem3.editable = true, fillItem3._id = "PMOrderNum", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem3);
				var fillItem4 = {};
				fillItem4.fillTitle = "单位", fillItem4.fillChartURL = "", //可为空
					fillItem4.fillTip = "点选单位", fillItem4.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem4.maxlength = "10", //
					fillItem4.fillHelpList = ['天', '月']; //备选项
	
				if (isAddnew) {
					fillItem4.fillValue = fillItem4.fillHelpList[0]; //默认填写好第一个
	
					fillItem4.fillHelpIndex = 0;
				} else {
					fillItem4.fillValue = PMCOIData.PMOrderUnit;
					fillItem4.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMOrderUnit, fillItem4.fillHelpList);
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem4.filldisabled = true;
				} else {
					fillItem4.filldisabled = false;
				}
	
				fillItem4.editable = true, fillItem4._id = "PMOrderUnit", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem4); //结款方式
	
				var fillItem7 = {};
				fillItem7.fillTitle = "结款方式", fillItem7.fillChartURL = "", //可为空
					fillItem7.fillTip = "点选结款方式", fillItem7.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem7.maxlength = "10", //
					fillItem7.fillHelpList = ['日结', '长期']; //备选项
	
				if (isAddnew) {
					fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个
	
					fillItem7.fillHelpIndex = 0;
				} else {
					fillItem7.fillValue = PMCOIData.ZCTJobPayType;
					fillItem7.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.ZCTJobPayType, fillItem7
						.fillHelpList);
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem7.filldisabled = true;
				} else {
					fillItem7.filldisabled = false;
				}
	
				fillItem7.editable = true, fillItem7._id = "ZCTJobPayType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem7); //生产环境及任务图片
	
				var fillItem9 = {};
				fillItem9.fillTitle = "生产环境及任务相关图片"; //生产环境及任务相关图片
	
				fillItem9.fillChartURL = ""; //可为空
	
				fillItem9.fillTip = "生产环境及任务相关图片"; //生产环境及任务相关图片
	
				fillItem9.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem9.maxlength = "500"; //
	
				if (isAddnew || pmJSTools.IsNullOrEmpty(PMCOIData.ZCTTaskPictureLst)) {
					fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制
				} else {
					fillItem9.fillImgLst = PMCOIData.ZCTTaskPictureLst; //生产环境及任务相关图片组，最多6张，需做限制
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem9.filldisabled = true;
				} else {
					fillItem9.filldisabled = false;
				}
	
				fillItem9.fillHelpList = null, //备选项
					fillItem9.editable = true, fillItem9.AddPic = true, fillItem9._id =
					"ZCTTaskPictureLst", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem9); //费用及相关说明
	
				var fillItem8 = {};
				fillItem8.fillTitle = "费用及相关说明";
				fillItem8.fillChartURL = ""; //可为空
	
				fillItem8.fillTip = "填写费用及相关说明";
				fillItem8.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem8.maxlength = "500"; //
	
				if (isAddnew) {
					fillItem8.inputNumWords = "0"; //已输入字数
				} else {
					if (PMCOIType != "PMCOIDistribute") {
						if (pmJSTools.IsNullOrEmpty(PMCOIData.ZCTFeesInstructions)) {
							fillItem8.inputNumWords = 0; //已输入字数
	
							fillItem8.fillValue = "";
						} else {
							fillItem8.inputNumWords = PMCOIData.ZCTFeesInstructions.length; //已输入字数
	
							fillItem8.fillValue = PMCOIData.ZCTFeesInstructions;
						}
					} else {
						fillItem8.inputNumWords = "0"; //已输入字数
					}
				} // fillItem8.filleValue = null//默认填写好一个
	
	
				if (PMCOIType == "PMCOIShow") {
					fillItem8.filldisabled = true;
				} else {
					fillItem8.filldisabled = false;
				}
	
				fillItem8.fillHelpList = null, //备选项
					fillItem8.editable = true, fillItem8._id = "ZCTFeesInstructions", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem8);
				this.fillBlock = fillBlock; //非新增类型的，图片取COI里面的
	
				if (!isAddnew) {
					this.ZCTProductURL = PMCOIData.ZCTProductURL; //非新增的情况下，图片从COI中拿。
				}
	
				console.log(PMCOIType); //如果是查看过来的，操作按钮隐藏
	
				if (PMCOIType == "PMCOIShow") {
					this.hiddenName = true;
				} else {
					this.hiddenName = false;
				}
	
				if (isAddnew) {
					this.btnCommandName = "新增";
				} else {
					this.btnCommandName = "更新";
				}
				var that = this;
				this.upBtnTips = "", //  GM:暂时去掉 "历史产品号自动加载图片，不需要增加。" 字样 2021-05-06
					this.downBtnTips = "交付任务是协作的开始", //this.data.btnCommandName = "新增",
					// this.setData({
					// 	fillBlock: this.fillBlock,
					// 	upBtnTips: this.upBtnTips,
					// 	downBtnTips: this.downBtnTips,
					// 	btnCommandName: this.btnCommandName,
					// 	btnCommandName_id: PMCOIData._id,
					// 	ZCTProductURL: this.ZCTProductURL,
					// 	hiddenName: this.hiddenName
					// });
					that.fillBlock = this.fillBlock;
				that.upBtnTips = this.upBtnTips;
				that.downBtnTips = this.downBtnTips;
				that.btnCommandName = this.btnCommandName;
				that.btnCommandName_id = PMCOIData._id;
				that.ZCTProductURL = this.ZCTProductURL;
				that.hiddenName = this.hiddenName;
			},
			//加载订单生产任务类型表单。任务类型为：订单生产。创建、 修改、查看页面如何显示。
			//PMCOIData：用于编辑和查看的COI内容,  PMCOIType：属于查看COI，还是创建或者编辑或者分发。
			LoadPMCOIDataOrdedrProduction: function(PMCOIData, PMCOIType) {
				var isAddnew = false;
	
				if (pmJSTools.IsNullOrEmpty(PMCOIData)) {
					isAddnew = true;
				} //以下为初始化界面语句
	
	
				var fillBlock = {}; // if (isAddnew) {
				//   fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
				// } else {
				//   fillBlock.fillRemind = "按照提示填写，编辑交付任务";
				// }
	
				switch (PMCOIType) {
					case "PMCOIAddNew": {
						fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
						break;
					}
	
					case "PMCOIEdit": {
						fillBlock.fillRemind = "按照提示填写，编辑交付任务";
						break;
					}
	
					case "PMCOIShow": {
						fillBlock.fillRemind = "查看交付任务";
						break;
					}
	
					case "PMCOIDistribute": {
						// fillBlock.fillRemind = "按照提示填写，生成新的交付任务";
						fillBlock.fillRemind = "按照提示填写，进行移交分发：将过程任务创建为单独新的交付任务，发放给他人执行";
						break;
					}
	
					default: {
						fillBlock.fillRemind = "按照提示填写，操作交付任务";
						break;
					}
				}
	
				fillBlock.fillItemList = []; //这里编程有点麻烦，需要一行一行编辑
				//经过仔细推敲暂时没有什么好的办法
				//任务类型
	
				var fillItem_1 = {};
				fillItem_1.fillTitle = "任务类型", fillItem_1.fillChartURL = "", //可为空
					fillItem_1.fillTip = "点选任务类型", fillItem_1.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem_1.maxlength = "10", //
					fillItem_1.fillHelpList = ['劳务', '订单生产']; //备选项
	
				if (isAddnew) {
					fillItem_1.fillValue = fillItem_1.fillHelpList[1]; //默认填写好第一个
	
					fillItem_1.fillHelpIndex = 1;
				} else {
					fillItem_1.fillValue = PMCOIData.PMOrderProType;
					fillItem_1.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMOrderProType, fillItem_1
						.fillHelpList);
				}
	
				if (PMCOIType == "PMCOIAddNew") {
					fillItem_1.filldisabled = false;
				} else {
					fillItem_1.filldisabled = true;
				}
	
				fillItem_1.editable = true, fillItem_1._id = "PMOrderProType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem_1); //工种
	
				var fillItem0 = {};
				fillItem0.fillTitle = "工种类型", fillItem0.fillChartURL = "", //可为空
					fillItem0.fillTip = "点选工种", fillItem0.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem0.maxlength = "10", //
					fillItem0.fillHelpList = pmJSTools.getPMJobType(); //备选项
	
				if (isAddnew) {
					fillItem0.fillValue = fillItem0.fillHelpList[0]; //默认填写好第一个
	
					fillItem0.fillHelpIndex = 0;
				} else {
					fillItem0.fillValue = PMCOIData.PMJobType;
					fillItem0.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMJobType, fillItem0.fillHelpList);
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem0.filldisabled = true;
				} else {
					fillItem0.filldisabled = false;
				}
	
				fillItem0.editable = true, fillItem0._id = "PMJobType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem0); //产品号
	
				var fillItem1 = {};
				fillItem1.fillTitle = "产品号";
				fillItem1.fillChartURL = ""; //可为空
	
				fillItem1.fillTip = "必填";
				fillItem1.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem1.maxlength = "30"; //
	
				if (isAddnew) {} else {
					if (this.TempSourceType == "RAWPRO") {
						//fillItem1.fillValue =this.data.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName.split(':')[0];
						var TempProductID = "";
						var TempZCTMaterialName = this.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName;
	
						if (TempZCTMaterialName.indexOf(':') <= 0) {
							if (TempZCTMaterialName.indexOf('：') != -1) {
								TempProductID = pmJSTools.getStrLeftFromFront(TempZCTMaterialName, '：');
							}
						} else {
							if (TempZCTMaterialName.indexOf('：') != -1) {
								var TempChineseIndex = TempZCTMaterialName.indexOf('：');
								var TempEnglishIndex = TempZCTMaterialName.indexOf(':');
	
								if (TempChineseIndex < TempEnglishIndex) {
									TempProductID = pmJSTools.getStrLeftFromFront(TempZCTMaterialName, '：');
								} else {
									TempProductID = pmJSTools.getStrLeftFromFront(TempZCTMaterialName, ':');
								}
							} else {
								TempProductID = pmJSTools.getStrLeftFromFront(TempZCTMaterialName, ':');
							}
						}
	
						fillItem1.fillValue = TempProductID;
					} else {
						fillItem1.fillValue = PMCOIData.PMInnerProductID;
					}
				} // fillItem1.filleValue = null//默认填写好一个
	
	
				if (PMCOIType == "PMCOIShow") {
					fillItem1.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem1.filldisabled = true; //移交分发时，产品号不可编辑
				} else if (!pmJSTools.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
					fillItem1.filldisabled = true; //移交分发的COI任务，产品号不可编辑
				} else {
					fillItem1.filldisabled = false;
				}
	
				fillItem1.fillHelpList = null, //备选项
					fillItem1.editable = true, fillItem1._id = "PMInnerProductID"; //填写项字段名备用，不在前端显示 
	
				fillBlock.fillItemList.push(fillItem1); //产品名编辑
	
				var fillItem2 = {};
				fillItem2.fillTitle = "产品名";
				fillItem2.fillChartURL = ""; //可为空
	
				fillItem2.fillTip = "必填";
				fillItem2.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem2.maxlength = "50"; //
	
				if (isAddnew) {} else {
					if (this.TempSourceType == "RAWPRO") {
						//截取产品名
						//fillItem2.fillValue =this.data.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName.split(':')[1];
						var TempProductName = "";
						var TempZCTMaterialName = this.TempSourceTaskStructure.PlanDeliDateData.ZCTMaterialName;
	
						if (TempZCTMaterialName.indexOf(':') <= 0) {
							if (TempZCTMaterialName.indexOf('：') != -1) {
								TempProductName = pmJSTools.getStrRightFromFront(TempZCTMaterialName, '：');
							}
						} else {
							if (TempZCTMaterialName.indexOf('：') != -1) {
								var TempChineseIndex = TempZCTMaterialName.indexOf('：');
								var TempEnglishIndex = TempZCTMaterialName.indexOf(':');
	
								if (TempChineseIndex < TempEnglishIndex) {
									TempProductName = pmJSTools.getStrRightFromFront(TempZCTMaterialName, '：');
								} else {
									TempProductName = pmJSTools.getStrRightFromFront(TempZCTMaterialName, ':');
								}
							} else {
								TempProductName = pmJSTools.getStrRightFromFront(TempZCTMaterialName, ':');
							}
						}
	
						fillItem2.fillValue = TempProductName;
					} else {
						fillItem2.fillValue = PMCOIData.PMInnerProductName;
					}
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem2.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem2.filldisabled = true; //移交分发时，产品名不可编辑
				} else if (!pmJSTools.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
					fillItem2.filldisabled = true; //移交分发的COI任务，产品明不可编辑
				} else {
					fillItem2.filldisabled = false;
				}
	
				fillItem2.fillHelpList = null, //备选项
					fillItem2.editable = true, fillItem2._id = "PMInnerProductName"; //填写项字段名备用，不在前端显示 
	
				fillBlock.fillItemList.push(fillItem2);
				var fillItem3 = {};
				fillItem3.fillTitle = "需求数量";
				fillItem3.fillChartURL = ""; //可为空
	
				fillItem3.fillTip = "必填";
				fillItem3.fillType = "digit"; //填写类型: idcard,digit,number,DATETIME
	
				fillItem3.maxlength = "50"; //
				// fillItem3.filleValue = null//默认填写好一个
	
				if (isAddnew) {} else {
					fillItem3.fillValue = PMCOIData.PMOrderNum;
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem3.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem3.fillValue = parseFloat(pmJSTools.GetNum(this.TempTaskNum));
					fillItem3.filldisabled = true; //移交分发时，需求数量不可编辑
				} else if (!pmJSTools.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
					fillItem3.filldisabled = true; //移交分发的COI任务，需求数量不可编辑
				} else {
					fillItem3.filldisabled = false;
				}
	
				fillItem3.fillHelpList = null, //备选项
					fillItem3.editable = true, fillItem3._id = "PMOrderNum", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem3);
				var fillItem4 = {};
				fillItem4.fillTitle = "单位", fillItem4.fillChartURL = "", //可为空
					fillItem4.fillTip = "点选单位", fillItem4.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem4.maxlength = "10", //
					fillItem4.fillHelpList = pmJSTools.getGeneralUnitList(); //备选项
	
				if (isAddnew) {
					fillItem4.fillValue = fillItem4.fillHelpList[0]; //默认填写好第一个
	
					fillItem4.fillHelpIndex = 0;
				} else {
					if (this.TempSourceType == "RAWPRO") {
						fillItem4.fillValue = this.TempSourceTaskStructure.PlanDeliDateData.PMUnit;
						fillItem4.fillHelpIndex = pmJSTools.getSeqIDfromArr(this.TempSourceTaskStructure
							.PlanDeliDateData.PMUnit, fillItem4.fillHelpList);
					} else {
						fillItem4.fillValue = PMCOIData.PMOrderUnit;
						fillItem4.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.PMOrderUnit, fillItem4
							.fillHelpList);
					}
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem4.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem4.filldisabled = true; //移交分发时，单位不可编辑
				} else if (!pmJSTools.IsNullOrEmpty(PMCOIData.ZCTSourceType)) {
					fillItem4.filldisabled = true; //移交分发的COI任务，单位不可编辑
				} else {
					fillItem4.filldisabled = false;
				}
	
				fillItem4.editable = true, fillItem4._id = "PMOrderUnit", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem4);
				var fillItem5 = {};
				fillItem5.fillTitle = "交付时间", fillItem5.fillChartURL = "", //可为空
					fillItem5.fillTip = "点选时间", fillItem5.fillType = "DATE", //填写类型: idcard,digit,number,DATETIME
					fillItem5.maxlength = "20"; //
	
				if (isAddnew) {
					var TempT = new Date();
					var lastDay = new Date(TempT.getFullYear(), TempT.getMonth() + 1, 0).getDate();
	
					if (TempT.getDate() + 1 > lastDay) {
						fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 2) + "/" + 1; //默认填写好一个日期
					} else {
						fillItem5.fillValue = TempT.getFullYear() + "/" + (TempT.getMonth() + 1) + "/" + (TempT
							.getDate() + 1); //默认填写好一个日期
					}
	
					fillItem5.startDate = new Date();
					fillItem5.endDate = new Date() + 5 * 365;
				} else {
					var TempT = new Date();
					fillItem5.fillValue = PMCOIData.ZCTPlanDeliDateShort;
					fillItem5.startDate = new Date();
					fillItem5.endDate = new Date() + 5 * 365;
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem5.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem5.fillValue = this.TempPlanDeliDateShort;
				} else {
					fillItem5.filldisabled = false;
				}
	
				fillItem5.fillHelpList = null, //备选项
					fillItem5.editable = true, fillItem5._id = "ZCTPlanDeliDateShort", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem5); // var fillItem6 = {};
				// fillItem6.fillTitle = "是否紧急",
				//   fillItem6.fillChartURL = "", //可为空
				//   fillItem6.fillTip = "点选是否紧急",
				//   fillItem6.fillType = null, //填写类型: idcard,digit,number,DATETIME
				//   fillItem6.maxlength = "5" //
				// fillItem6.fillHelpList = ["NO", "YES"] //备选项
				// if (isAddnew) {
				//   fillItem6.fillValue = "NO" //默认填写好一个
				//   fillItem6.fillHelpIndex = 0
				// } else {
				//   if (pmJSTools.IsNullOrEmpty(PMCOIData.PMIsUrgent)) {
				//     fillItem6.fillValue = "NO"
				//     fillItem6.fillHelpIndex = 0
				//   } else {
				//     if (PMCOIData.PMIsUrgent == "NO") {
				//       fillItem6.fillValue = PMCOIData.PMIsUrgent
				//       fillItem6.fillHelpIndex = 0
				//     }
				//     if (PMCOIData.PMIsUrgent == "YES") {
				//       fillItem6.fillValue = PMCOIData.PMIsUrgent
				//       fillItem6.fillHelpIndex = 1
				//     }
				//   }
				// }
				// fillItem6.editable = true,
				//   fillItem6._id = "PMIsUrgent", //填写项字段名备用，不在前端显示 
				//   fillBlock.fillItemList.push(fillItem6)
				//结款方式
	
				var fillItem7 = {};
				fillItem7.fillTitle = "结款方式", fillItem7.fillChartURL = "", //可为空
					fillItem7.fillTip = "点选结款方式", fillItem7.fillType = null, //填写类型: idcard,digit,number,DATETIME
					fillItem7.maxlength = "10", //
					fillItem7.fillHelpList = ['日结', '长期']; //备选项
	
				if (isAddnew) {
					fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个
	
					fillItem7.fillHelpIndex = 0;
				} else {
					fillItem7.fillValue = PMCOIData.ZCTJobPayType;
					fillItem7.fillHelpIndex = pmJSTools.getSeqIDfromArr(PMCOIData.ZCTJobPayType, fillItem7
						.fillHelpList);
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem7.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem7.fillValue = fillItem7.fillHelpList[0]; //默认填写好第一个
				} else {
					fillItem7.filldisabled = false;
				}
	
				fillItem7.editable = true, fillItem7._id = "ZCTJobPayType", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem7); //生产环境及任务图片
	
				var fillItem9 = {};
				fillItem9.fillTitle = "生产环境及任务相关图片"; //生产环境及任务相关图片
	
				fillItem9.fillChartURL = ""; //可为空
	
				fillItem9.fillTip = "生产环境及任务相关图片"; //生产环境及任务相关图片
	
				fillItem9.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem9.maxlength = "500"; //
	
				if (isAddnew || pmJSTools.IsNullOrEmpty(PMCOIData.ZCTTaskPictureLst)) {
					fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制
				} else {
					fillItem9.fillImgLst = PMCOIData.ZCTTaskPictureLst; //生产环境及任务相关图片组，最多6张，需做限制
				}
	
				if (PMCOIType == "PMCOIShow") {
					fillItem9.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem9.fillImgLst = []; //生产环境及任务相关图片组，最多6张，需做限制; //默认填写好第一个
				} else {
					fillItem9.filldisabled = false;
				}
	
				fillItem9.fillHelpList = null, //备选项
					fillItem9.editable = true, fillItem9.AddPic = true, fillItem9._id =
					"ZCTTaskPictureLst", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem9); //费用及相关说明
	
				var fillItem8 = {};
				fillItem8.fillTitle = "费用及相关说明";
				fillItem8.fillChartURL = ""; //可为空
	
				fillItem8.fillTip = "填写费用及相关说明";
				fillItem8.fillType = null; //填写类型: idcard,digit,number,DATETIME
	
				fillItem8.maxlength = "500"; //
	
				if (isAddnew) {
					fillItem8.inputNumWords = "0"; //已输入字数
				} else {
					if (PMCOIType != "PMCOIDistribute") {
						if (pmJSTools.IsNullOrEmpty(PMCOIData.ZCTFeesInstructions)) {
							fillItem8.inputNumWords = 0; //已输入字数
	
							fillItem8.fillValue = "";
						} else {
							fillItem8.inputNumWords = PMCOIData.ZCTFeesInstructions.length; //已输入字数
	
							fillItem8.fillValue = PMCOIData.ZCTFeesInstructions;
						}
					} else {
						fillItem8.inputNumWords = "0"; //已输入字数
					}
				} // fillItem8.filleValue = null//默认填写好一个
	
	
				if (PMCOIType == "PMCOIShow") {
					fillItem8.filldisabled = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					fillItem8.fillValue = "";
				} else {
					fillItem8.filldisabled = false;
				}
	
				fillItem8.fillHelpList = null, //备选项
					fillItem8.editable = true, fillItem8._id = "ZCTFeesInstructions", //填写项字段名备用，不在前端显示 
					fillBlock.fillItemList.push(fillItem8);
				this.fillBlock = fillBlock; //非新增类型的，图片取COI里面的
	
				if (!isAddnew) {
					this.ZCTProductURL = PMCOIData.ZCTProductURL; //非新增的情况下，图片从COI中拿。
				}
	
				if (PMCOIType == "PMCOIDistribute") {
					var that = this;
					switch (this.TempSourceType) {
						case "PO": {
							var ThisPO = this.TempSourceCOIData.PMPOList.find(item => item._id === this
								.TempSourceTaskStructure.POID);
	
							if (!pmJSTools.IsNullOrEmpty(ThisPO)) {
								this.ZCTProductURL = ThisPO.ZCTProductURL;
							}
	
							break;
						}
	
						case "PI": {
							var ThisPO = this.TempSourceCOIData.PMPOList.find(item => item._id === this
								.TempSourceTaskStructure.POID);
	
							if (!pmJSTools.IsNullOrEmpty(ThisPO)) {
								var ThisPI = ThisPO.PMPIList.find(item => item._id === this.TempSourceTaskStructure
									.PIID);
	
								if (!pmJSTools.IsNullOrEmpty(ThisPI)) {
									this.ZCTProductURL = ThisPI.ZCTProductURL;
								}
							}
	
							break;
						}
	
						case "SPT": {
							var ThisPO = this.TempSourceCOIData.PMPOList.find(item => item._id === this
								.TempSourceTaskStructure.POID);
	
							if (!pmJSTools.IsNullOrEmpty(ThisPO)) {
								var ThisPI = ThisPO.PMPIList.find(item => item._id === this.TempSourceTaskStructure
									.PIID);
	
								if (!pmJSTools.IsNullOrEmpty(ThisPI)) {
									this.ZCTProductURL = ThisPI.ZCTProductURL;
								}
							}
	
							break;
						}
	
						case "OPT": {
							var ThisPO = this.TempSourceCOIData.PMPOList.find(item => item._id === this
								.TempSourceTaskStructure.POID);
	
							if (!pmJSTools.IsNullOrEmpty(ThisPO)) {
								var ThisPI = ThisPO.PMPIList.find(item => item._id === this.TempSourceTaskStructure
									.PIID);
	
								if (!pmJSTools.IsNullOrEmpty(ThisPI)) {
									this.ZCTProductURL = ThisPI.ZCTProductURL;
								}
							}
	
							break;
						}
	
						case "RAWPRO": {
							this.ZCTProductURL = this.TempSourceTaskStructure.PlanDeliDateData
								.ZCTProductURL; //生产物料移交分发时，设置按钮默认可以执行
	
							// this.setData({
							// 	isConfButtonDisabled: false,
							// 	confirmBtnClass: "weui-btn weui-btn_primary" //设置为可以编辑
	
							// });
							that.isConfButtonDisabled = false;
							that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
							break;
						}
	
						default:
							break;
					}
				}
	
				if (isAddnew) {
					this.btnCommandName = "新增";
					this.hiddenName = false;
				} else {
					this.btnCommandName = "更新";
					this.hiddenName = true;
				} // this.data.upBtnTips = "历史产品号自动加载图片，不需要增加。"
	
	
				this.upBtnTips = "";
				this.downBtnTips = "交付任务是协作的开始"; //如果是查看过来的，操作按钮隐藏
	
				if (PMCOIType == "PMCOIShow") {
					this.hiddenName = true;
				} else if (PMCOIType == "PMCOIDistribute") {
					this.btnCommandName = "新增";
					this.hiddenName = false;
				} else {
					this.hiddenName = false;
				} //this.data.btnCommandName = "新增",
				var that = this;
				that.fillBlock = this.fillBlock;
				that.upBtnTips = this.upBtnTips;
				that.downBtnTips = this.downBtnTips;
				that.btnCommandName = this.btnCommandName;
				that.btnCommandName_id = PMCOIData._id;
				that.ZCTProductURL = this.ZCTProductURL;
				that.hiddenName = this.hiddenName;
				// this.setData({
				// 	fillBlock: this.fillBlock,
				// 	upBtnTips: this.upBtnTips,
				// 	downBtnTips: this.downBtnTips,
				// 	btnCommandName: this.btnCommandName,
				// 	btnCommandName_id: PMCOIData._id,
				// 	ZCTProductURL: this.ZCTProductURL,
				// 	hiddenName: this.hiddenName
				// });
			},
			//快速填写
			onAutoFill: function(event) {
				switch (this.dataType) {
					case "POAddNew": {
						this.fillBlock.fillItemList[0].fillValue = 1; //计划单数
	
						this.fillBlock.fillItemList[1].fillValue = this.PMCOI.ZCTPlanNeedNum; //计划数量
	
						var TempT = new Date();
						this.fillBlock.fillItemList[2].fillValue = pmJSTools.dateAddDays(TempT, 1);
						this.fillBlock.fillItemList[3].fillValue = 1; //相隔数
						var that = this;
						// this.setData({
						// 	isConfButtonDisabled: false,
						// 	confirmBtnClass: "weui-btn weui-btn_primary",//设置为可以编辑
						// 	fillBlock: this.fillBlock,
						// 	IsFillHelpSwitch: false
						// });
						that.isConfButtonDisabled = false;
						that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
						that.fillBlock = this.fillBlock;
						that.IsFillHelpSwitch = false;
						break;
					}
	
					default: {
						break;
					}
				}
			},
			//智能辅助切换开关
			onAtuoSwitchChange: function(event) {
				var that = this;
				this.IsFillHelpSwitch = event.detail.value;
				// this.setData({
				// 	IsFillHelpSwitch: this.IsFillHelpSwitch
				// });
				that.IsFillHelpSwitch = this.IsFillHelpSwitch;
			},
			//智能辅助切换开关, 按单数计算
			onAtuoSwitchChangeByPO: function(event) {
				this.IsFillHelpSwitchByPO = event.detail.value;
	
				if (this.IsFillHelpSwitchByPO) {
					this.IsFillHelpSwitchByNum = false;
				} else {
					this.IsFillHelpSwitchByNum = true;
				}
				var that = this;
				// this.setData({
				// 	IsFillHelpSwitchByPO: this.IsFillHelpSwitchByPO,
				// 	IsFillHelpSwitchByNum: this.IsFillHelpSwitchByNum
				// });
				that.IsFillHelpSwitchByPO = this.IsFillHelpSwitchByPO;
				that.IsFillHelpSwitchByNum = this.IsFillHelpSwitchByNum;
			},
			//智能辅助切换开关，按每单数量计算
			onAtuoSwitchChangeByNum: function(event) {
				this.IsFillHelpSwitchByNum = event.detail.value;
	
				if (this.IsFillHelpSwitchByNum) {
					this.IsFillHelpSwitchByPO = false;
				} else {
					this.IsFillHelpSwitchByPO = true;
				}
				var that = this;
				// this.setData({
				// 	IsFillHelpSwitchByPO: this.IsFillHelpSwitchByPO,
				// 	IsFillHelpSwitchByNum: this.IsFillHelpSwitchByNum
				// });
				that.IsFillHelpSwitchByPO = this.IsFillHelpSwitchByPO;
				that.IsFillHelpSwitchByNum = this.IsFillHelpSwitchByNum;
			},
			//智能辅助切换开关
			onLastPIListSwitchChange: function(event) {
				var that = this;
				this.IsLastPIFillHelpSwitch = event.detail.value;
				// this.setData({
				// 	IsLastPIFillHelpSwitch: this.IsLastPIFillHelpSwitch
				// });
				that.IsLastPIFillHelpSwitch = this.IsLastPIFillHelpSwitch;
			},
			//智能辅助填写
			onAutoHelpFill: function(event) {
				var that = this;
				if (this.IsFillHelpSwitch == false) //不需要智能填写退出
				{
					return;
				}
	
				switch (this.dataType) {
					case "POAddNew": {
						if (event.currentTarget.id == "POAddPOs" || event.currentTarget.id == "POAddPONum") {
							if (this.IsFillHelpSwitchByPO) {
								if (this.fillBlock.fillItemList[0].fillValue > 31) //计划单数
								{
									this.fillBlock.fillItemList[0].fillValue = 31;
									// this.setData({
									// 	fillBlock: this.fillBlock
									// });
									that.fillBlock = this.fillBlock;
								}
	
								if (!pmJSTools.IsNullOrEmpty(this.fillBlock.fillItemList[0].fillValue) && this
									.fillBlock.fillItemList[0].fillValue > 0) //计划单数
								{
									var TempUnit = this.PMCOI.PMOrderUnit;
	
									if (TempUnit == "件" || TempUnit == "个" || TempUnit == "套" || TempUnit == "箱" ||
										TempUnit == "袋") {
										var tempNum = parseFloat(this.PMCOI.ZCTPlanNeedNum / this.fillBlock
											.fillItemList[0].fillValue);
										this.fillBlock.fillItemList[1].fillValue = parseFloat(tempNum.toFixed(0));
									} else {
										var tempNum = parseFloat(this.PMCOI.ZCTPlanNeedNum / this.fillBlock
											.fillItemList[0].fillValue);
										this.fillBlock.fillItemList[1].fillValue = parseFloat(tempNum.toFixed(2));
									}
								}
							} else {
								if (this.fillBlock.fillItemList[1].fillValue > 0) //单数
								{
									var tempPO = pmJSTools.GetNum(this.PMCOI.ZCTPlanNeedNum / this.fillBlock
										.fillItemList[1].fillValue);
									this.fillBlock.fillItemList[0].fillValue = parseFloat(tempPO.toFixed());
								}
							}
	
							var TempT = new Date();
							this.fillBlock.fillItemList[2].fillValue = pmJSTools.dateAddDays(TempT, 1);
							this.fillBlock.fillItemList[3].fillValue = 1; //间隔数
	
							// this.setData({
							// 	isConfButtonDisabled: false,
							// 	confirmBtnClass: "weui-btn weui-btn_primary",//设置为可以编辑
							// 	fillBlock: this.fillBlock
							// });
							that.isConfButtonDisabled = false;
							that.confirmBtnClass = "weui-btn weui-btn_primary"; //设置为可以编辑
							that.fillBlock = this.fillBlock;
						}
	
						break;
					}
	
					default: {
						break;
					}
				}
			},
			//产品号失去焦点事件
			bindProductName: function(event) {
				var that = this;
				if (event.currentTarget.id == "PMInnerProductID") {
					var that = this;
					setTimeout(function() {
						//产品号输入框失去焦点500毫秒后关闭联想下拉框（防止用户输入后不选择联想内容）
						// that.setData({
						// 	// 当用户选择某个联想词，隐藏下拉列表
						// 	hideScroll: true,
						// 	bindSource: []
						// });
						// 当用户选择某个联想词，隐藏下拉列表
						that.hideScroll = true;
						that.bindSource = [];
					}, 500);
				}
	
				return; //输入后自动带出产品名效果，已舍弃
	
				if (event.currentTarget.id == "PMInnerProductID") {
					//输入的为产品号
					var TempfillItem = pmJSTools.getOneControlFromList(event.currentTarget.id, this.fillBlock
						.fillItemList);
					var TempProductID = TempfillItem.fillValue; //输入的产品号
					//获取缓存中产品信息
	
					var TempStorageProductArr = new Array();
					var TempProductStr = wx.getStorageSync('ProductList');
	
					if (!pmJSTools.IsNullOrEmpty(TempProductStr)) {
						TempStorageProductArr = JSON.parse(TempProductStr);
					} //查找缓存是否存在此产品信息
	
	
					var TempThisProduct = TempStorageProductArr.find(function(e) {
						return e.ProductID == TempProductID;
					});
	
					if (!pmJSTools.IsNullOrEmpty(TempThisProduct)) {
						var that = this;
						//已存在此产品缓存信息
						let TempPMInnerProductNameObj = 'fillBlock.fillItemList[1].fillValue'; //给产品名赋值
	
						// this.setData({ //[TempPMInnerProductNameObj]: TempThisProduct.ProductName
						// });
						that[TempPMInnerProductNameObj] = TempThisProduct.ProductName;
						//try fix
						//this[TempPMInnerProductNameObj] = TempThisProduct.ProductName;
	
						if (!pmJSTools.IsNullOrEmpty(TempThisProduct)) {
							//已存在此产品缓存信息
							var TempProductNameIndex = 0;
							var TempIsFind = false;
	
							for (var i = 0; i < this.fillBlock.fillItemList.length; i++) {
								if (this.fillBlock.fillItemList[i]._id == "PMInnerProductName") //遍历找到产品名称输入框的下标
								{
									TempProductNameIndex = i;
									TempIsFind = true;
									break;
								}
							}
	
							if (TempIsFind) {
								//找到了产品名称输入框，进行赋值
								let TempPMInnerProductNameObj = 'fillBlock.fillItemList[' + TempProductNameIndex +
									'].fillValue'; //给产品名赋值
	
								// this.setData({ //[TempPMInnerProductNameObj]: TempThisProduct.ProductName
								// });
								var that = this;
								//try fix
								that[TempPMInnerProductNameObj] = TempThisProduct.ProductName;
							}
						}
					}
				}
			},
	
			/**
			 * Creator:SE7,Date:2021-5-31
			 * 获取默认工序
			 */
			async GetLastALLPIData() {
				var that = this;
				var funcName = "GetLastALLPIData";
				var funcPra = {};
				funcPra.PMInnerProductID = this.PMCOI.PMInnerProductID;
				var serRes = await pmSerTools.exePMCOI(funcName, funcPra);
	
				if (serRes.errMsg == "OK" && !pmJSTools.IsNullOrEmpty(serRes.result)) //数据结果放在了result第一个数据列中,所以需要脱壳
				{
					this.PMPIList = serRes.result[0];
					// this.setData({
					// 	PMPIList: this.PMPIList,
					// 	IsPIlength: true
					// });
					that.PMPIList = this.PMPIList;
					that.IsPIlength = true;
				} else if (serRes.errMsg != "OK" && serRes.errMsg != "NoData") {
					this.ShowErrorTips("获取默认工序失败");
				}
			},
	
			/**Creator:SE24,Date:2021-5-17 17:29:48
			 * 显示提示方法
			 */
			ShowErrorTips(TempErrorMsg) {
				var that = this; //setTimeout里会用到，
	
				that.topTipsStr = TempErrorMsg;
				// that.setData({
				// 	//MoveToUp触发
				// 	topTips: true,
				// 	topTipsStr: that.topTipsStr
				// });
				that.topTips = true;
				that.topTipsStr = that.topTipsStr;
				setTimeout(function() {
					//时间限制
					// that.setData({
					// 	topTips: false,
					// 	topTipsStr: ""
					// });
					that.topTips = false;
					that.topTipsStr = "";
				}, 2000);
			},
	
			scroll() {
				console.log("占位：函数 scroll 未声明");
			},
	
			onPMRAWProTap() {
				console.log("占位：函数 onPMRAWProTap 未声明");
			},
	
			onPMRAWProLongTap() {
				console.log("占位：函数 onPMRAWProLongTap 未声明");
			},
	
			upper() {
				console.log("占位：函数 upper 未声明");
			},
	
			lower() {
				console.log("占位：函数 lower 未声明");
			},
	
			onPMPIProTap() {
				console.log("占位：函数 onPMPIProTap 未声明");
			},
	
			onPMPIProLongTap() {
				console.log("占位：函数 onPMPIProLongTap 未声明");
			},
	
			onPMPIPurTap() {
				console.log("占位：函数 onPMPIPurTap 未声明");
			},
	
			onPMPIPurLongTap() {
				console.log("占位：函数 onPMPIPurLongTap 未声明");
			}
	
		}
	};
