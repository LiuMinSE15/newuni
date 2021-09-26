
	//var base64 = require("../images/base64");
	const app = getApp();
	const btnSelectedStyle = " box-shadow: 2px 2px 5px #000;"; //用于动态表达按钮选中的状态
	//用于动态表达按钮选中的状态
	const btnUnSelectedStyle = " box-shadow: 0px 0px 0px #000;"; //用于动态表达按钮没有选中的状态
	//用于动态表达按钮没有选中的状态
	// const pmJSTools = require("../../utils/pmJSTools.js").default;
	// const pmSerTools = require("../../utils/pmSerTools.js").default;
	import pmSerTools from '../../utils/pmSerTools.js';
	import pmJSTools from '../../utils/pmJSTools.js';
	const DataListSkip = 0; //页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
	//页起始点 （分页显示，第一页） 当系统下拉刷新时恢复到默认值
	const DataListLimit = 10; //页长 （一次从服务器获取数据项数） 当系统下拉刷新时恢复到默认值
	export default {
		data() {
			return {
				mainTitle: "我发布的任务",
				subTips: "显示及操作",
				topTips: false,
				topTipsStr: "",
				pmDialog: false,
				dialogMainTitle: "",
				dialogMainContent: "",
				dialogSubOperation: "",
				dialogMainOperation: "",
				dialogPMOrderProType: "",
				PMCOIList: [],
				//PMCOI清单
				PMCOIListSkip: 0,
				//页号 （分页显示，第一页） //下拉初始化， 上拉加页号
				PMCOIListLimit: DataListLimit,
				//页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变
				isMoveToDown: false,
				//是否上滑到底部，滑到底部进行加载更多
				isMoveToUp: false,
				//是否下滑到顶部，滑到顶部进行加载更新(默认是true)
				mHeight: 1000,
				//设置一个默认屏高参数
				showIOSDialog: {
					//PMCOI命令对话框
					isShowIOSDialog: false,
					_id: "" //对象主键

				},
				propertyDialog: {
					//属性框数据
					isPropertyDialogOpen: false,
					//是否打开半屏组件
					mainTitle: "主标题",
					//主标题
					subTitle: "子标题",
					//子标题
					mainTip: "主提示",
					//主提示
					subTip: "子提示",
					//子提示
					subOperation: "取消",
					//辅助操作按钮提示
					mainOperation: "确认",
					//主操作按钮提示
					_id: "",
					//对象主键
					ZCTProductURL: "",
					//主对象图片
					subInfoList: [{
						mainInfo: "",
						//属性类型
						subInfo: "",
						//属性描述
						//  ZCTProductURL: "" //产品图片

					}]
				},
				classView: "weui-actionsheet__cell",
				//长按交付任务弹出编辑、删除按钮默认可以操作；授权后灰色不可操作
				ClickItemData: {},
				//任务清单点击项的数据源。用于控制操作按钮的显示
				OptionSelectState: ['ALLOWED'],
				//默认查询执行中的任务
				OptionSelectStateName: "执行中",
				// topTips: false,
				// //顶部提示显示开关
				// topTipsStr: "",
				// //顶部提示内容
				ICOImage: {
					ICOImageEdit: "/static/images/icon/ico_Edit_C.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				},
				pmDialogShouQuan: false,
				COIAddState: true, //交付任务创建按钮操作状态,
				// ZCTProductURL: "",
				hide: false,
				theme: "",
				btnCommandName_id: ""
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: async function(options) {
			//用来给scrollview设置固定高度
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.mHeight = res.windowHeight
				}
			})

			//获取登录页面赋值的微信昵称、头像等信息 

			var WXLogoState = app.globalData.WXLogoState; //状态 

			var avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 

			var gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） 

			var nickName = app.globalData.nickName; //授权微信号昵称 
			//根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） 

			//   if (pmJSTools.IsNullOrEmpty(app.globalData._id)) {
			//     var serRes = await pmSerTools.getAccount();
			//     if (serRes != "OK") {
			//       //弹框出现
			//       // that.setData({
			//       //   pmDialogShouQuan: true
			//       // });
			// that.pmDialogShouQuan = true;
			//     }
			//   }

			if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([options, "dataType"]))) {
				//刷新加载
				await that.FunRefreshByOperationStatus(); //默认加载执行中状态
			} else {
				switch (options.dataType) {
					case "COIAddNewDone":
					//新增一个PMCOI的情形
					{
						var that = this;
						let eventChannel = this.getOpenerEventChannel();
						eventChannel.on('PMCOIList', PMCOIList => {
							// that.setData({
							//   PMCOIList: PMCOIList
							// });
							that.PMCOIList = PMCOIList;
						});
						break;
					}

					case "loadMyCOIList": {
						break;
					}

					case "loadMyCOIList": {
						break;
					}

					default: {
						break;
					}
				}
			} //

		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady: function() {},

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
			var that = this;
			// 来自页面内转发按钮
			console.log(event.target);
			return {
				title: '制程通分享链接',
				path: '/miniprogram/pages/taskList/taskList',
				imageUrl: that.ZCTProductURL
			};
		},

		onShow() {
			var that = this;
			// that.setData({
			//   COIAddState: true
			// });
			this.COIAddState = true;
			that.FunRefreshByOperationStatus();
		},

		methods: {
			OnPMCOIAddNewTap(event) //新增客户订单按钮
			{
				var that = this;

				if (that.COIAddState == false) {
					return;
				}

				// that.setData({
				//  COIAddState: false
				// }); //获取登录页面赋值的微信昵称、头像等信息 
				that.COIAddState = false;

				var WXLogoState = app.globalData.WXLogoState; //状态 

				var avatarUrl = app.globalData.avatarUrl; //授权微信号的头像 

				var gender = app.globalData.gender; //授权微信号性别（女：2； 男：1 ） 

				var nickName = app.globalData.nickName; //授权微信号昵称 
				//根据当前登陆状态判断是否还需要进行微信登陆（推荐工友和微信公众号注册时，需要进行微信登陆） 
				//  if(WXLogoState ==true ) 
				//  { 
				//    console.log("弹框不出现") 
				//    this.setData({ 
				//      pmDialogShouQuan: false, 
				//    }) 
				//  } 
				//  else 
				//  { 
				//    console.log("弹框出现") 
				//    this.setData({ 
				//      pmDialogShouQuan: true, 
				//    }) 
				//  } 
				/////////////////////////////////////////////////
				/////////////////////////////////////////////////
				/////////////////////////////////////////////////

				// if (pmJSTools.IsNullOrEmpty(app.globalData.PMUserID)) {
				// 	console.log("弹框出现");
				// 	// this.setData({
				// 	//   pmDialogShouQuan: true
				// 	// });
				// 	that.pmDialogShouQuan = true;
				// 	return;
				// }

				console.log(event);
				var that = this;
				var PMCOI = {};
				// uni.navigateTo({
				// url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',
				// 	success: res => {},
				// 	fail: () => {},
				// 	complete: () => {}
				// });
				wx.navigateTo({
					url: '../propertyPage/propertyPage?dataType=PMCOIAddNew',
					success: res => {
						// 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
						res.eventChannel.emit('PMCOIList', this
						.PMCOIList); //传递 this.data.PMCOIList过去式为了，添加成功后。
						//PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取

						that.FunRefreshByOperationStatus();
					}
				});
			},

			onPMCOITap(event) //PMCOI 按下
			{
				console.log(event);
				var PMCOI = {};
				var TempisOperation = true; //是否允许操作过程管控

				var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

				if (tempPMCOI.PMOrderState != "NORELEASE" && tempPMCOI.PMOrderState != "PUBLISH") {
					TempisOperation = false;
				} // wx.navigateTo({
				//   url: '../taskInterface/taskInterface?dataType=PMCOITap&isOperation='+TempisOperation+'&PMCOIID=' + event.currentTarget.id,
				// })
				//跳转到任务详情页 
				uni.navigateTo({
					url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
				// wx.navigateTo({
				//   url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id
				// });
			},

			onPMCOIImageTap(event) //PMCOI 图片按钮
			{
				var that = this;
				console.log(event);
				var TempData = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);

				if (pmJSTools.IsNullOrEmpty(TempData)) {
					return; //没有弹框数据，不予显示
				}

				this.propertyDialog.mainTitle = "计划交货日期：" + TempData.ZCTPlanDeliDateShort, //主提示
					this.propertyDialog.subTitle = TempData.PMInnerCustomerOrderItemID, //子标题
					this.propertyDialog.mainTip = TempData.PMInnerProductName + "  计划数量：" + TempData.PMOrderNum + TempData
					.PMOrderUnit, //主标题
					this.propertyDialog.subTip = "已完成：" + TempData.ZCTFinishedNum + TempData.PMOrderUnit + "  " + "完成率：" +
					TempData.ZCTFinishedRate + "%", //子提示
					this.propertyDialog.subInfoList = null;
				this.propertyDialog.subOperation = "取消", //辅助操作按钮提示
					this.propertyDialog.mainOperation = "修改", //主操作按钮提示
					this.propertyDialog.isPropertyDialogOpen = true;
				this.propertyDialog._id = TempData._id;

				if (TempData.PMOrderProType == "劳务") {
					this.propertyDialog.mainTip = TempData.PMInnerProductName + "  计划天数：" + TempData.PMOrderNum + TempData
						.PMOrderUnit; //主标题
				}

				// this.setData({
				//   propertyDialog: this.propertyDialog,
				//   ZCTProductURL: TempData.ZCTProductURL //设置主对象图片

				// });
				that.propertyDialog = this.propertyDialog;
				that.ZCTProductURL = TempData.ZCTProductURL;
			},

			propertyDialogClose() {
				this.propertyDialog.isPropertyDialogOpen = false;
				// this.setData({
				//   propertyDialog: this.propertyDialog
				// });
				that.propertyDialog = this.propertyDialog;
			},

			async bindLoadingMore() {
				console.log('滑到底了，开始加载更多');
				var that = this; //setTimeout里会用到，

				// that.setData({
				//   //MoveToDow触发
				//   isMoveToDown: true
				// });
				that.isMoveToDown = true;
				setTimeout(function() {
					//MoveToDow 时间限制
					// that.setData({
					//   isMoveToDown: false
					// });
					that.isMoveToDown = false;
				}, 3000);
				await this.getPMCOIListByUserMore();
			},

			async bindLoadingNew() {
				console.log('滑到顶了，开始加载更多');
				var that = this; //setTimeout里会用到，

				// that.setData({
				//   //MoveToUp触发
				//   isMoveToUp: true
				// });
				that.isMoveToUp = true;
				setTimeout(function() {
					//时间限制
					// that.setData({
					//   isMoveToUp: false
					// });
					that.isMoveToUp = false;
				}, 3000); //await this.getPMCOIListByUserNew()

				that.FunRefreshByOperationStatus();
			},

			//加载更多
			async getPMCOIListByUserMore() {
				var that = this;
				var funcName = "getPMCOIListbyAllPMUser";
				var funcPra = {};
				funcPra.PMUSer = {}; //从app中获得，暂时置空

				this.PMCOIListSkip = this.PMCOIListSkip + this.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
					// this.setData({
					//   PMCOIListSkip: this.PMCOIListSkip //页起始

					// });
					that.PMCOIListSkip = this.PMCOIListSkip;
				funcPra.skipAndLimit = [this.PMCOIListSkip, DataListLimit]; // 

				funcPra.SelectState = this.OptionSelectState;
				funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）

				var serRes = await pmSerTools.exePMCOI(funcName, funcPra);
				console.log(serRes);
				
				

				if (serRes.errMsg != "OK") {
					this.topTipsStr = serRes.errMsg;
					//var that = this; //setTimeout里会用到，
					//因为查询没有成功,增加的起始点要回退

					this.PMCOIListSkip = this.PMCOIListSkip - this.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
						// this.setData({
						//   PMCOIListSkip: this.PMCOIListSkip //页起始

						// });
						that.PMCOIListSkip = this.PMCOIListSkip;
					// that.setData({
					//   //MoveToUp触发
					//   topTips: true,
					//   topTipsStr: that.topTipsStr
					// });
					that.topTips = true;
					that.topTipsStr = that.topTipsStr;
					setTimeout(function() {
						//时间限制
						// that.setData({
						//   topTips: false,
						//   topTipsStr: ""
						// });
						that.topTips = false,
							that.topTipsStr = "";
					}, 3000);
				} 
				else 
				{
					if(serRes.result!=null)
					{
						if(serRes.result.length>0)
						{
							this.PMCOIList = this.PMCOIList.concat(serRes.result); //新查询到的直接加在后面
							//执行计算驱动函数（有些变量是计算获得的）
												
							this.calPMCOIList();
							// this.setData({
							//   PMCOIList: this.PMCOIList
							// });
							that.PMCOIList = this.PMCOIList;
						}
						else
						{
							//因为查询没有成功,增加的起始点要回退
							this.PMCOIListSkip = this.PMCOIListSkip - this.PMCOIListLimit, //页起始 （分页显示，第一页） //下拉初始化， 上拉加页号
								// this.setData({
								//   PMCOIListSkip: this.PMCOIListSkip //页起始
							
								// });
								that.PMCOIListSkip = this.PMCOIListSkip;
						}
						
					}
					
					
					//执行为OK,但结果为空的情形。
					if (pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳
					{
						
					}
				}
			},

			//刷新
			async getPMCOIListByUserNew() {
				var that = this;
				var funcName = "getPMCOIListbyAllPMUser";
				var funcPra = {};
				funcPra.PMUSer = {}; //从app中获得，暂时置空

				this.PMCOIListSkip = DataListSkip, //页号 （分页显示，第一页） //下拉初始化， 上拉加页号
					this.PMCOIListLimit = DataListLimit, //页长 （一次从服务器获取数据项数） //下拉初始化， 上拉加页长不变

					that.PMCOIListSkip = this.PMCOIListSkip,
					that.PMCOIListLimit = this.PMCOIListLimit;
				funcPra.skipAndLimit = [DataListSkip, DataListLimit]; //0，0 标识按系统默认 

				funcPra.SelectState = this.OptionSelectState;
				funcPra.ZCTCreater = app.globalData.PMUserID; //创建人（当前自己的UserID）

				var serRes = await pmSerTools.exePMCOI(funcName, funcPra);
			
                 console.log("前端界面获取的值为："+serRes)

                 if(serRes.result.errMsg!="OK")
				 {
					 this.topTipsStr = serRes.errMsg;
					 var that = this; //setTimeout里会用到，
					 that.topTips = true,
					 	that.topTipsStr = that.topTipsStr;
					 setTimeout(function() {
					 	that.topTips = false,
					 		that.topTipsStr = "";
					 }, 3000);
				 }
				 else
				 {
					 this.PMCOIList = serRes.result.result; //执行计算驱动函数（有些变量是计算获得的）
					 this.calPMCOIList();
					 that.pmcoilist = this.PMCOIList;
					 console.log(this.PMCOIList);
				 }

				// if (!pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) //数据结果放在了result第一个数据列中,所以需要脱壳
				// {
				// 	this.PMCOIList = serRes.result[0]; //执行计算驱动函数（有些变量是计算获得的）
				// 	this.calPMCOIList();
				// 	that.pmcoilist = this.PMCOIList;
			 //     	console.log(this.PMCOIList);
				// }

				// if (serRes.errMsg == "OK" && pmJSTools.IsNullOrEmpty(pmJSTools.GetSubObj([serRes.result, 0]))) {
				// 	that.PMCOIList = [];
				// }

				// if (serRes.errMsg != "OK") {
				// 	this.topTipsStr = serRes.errMsg;
				// 	var that = this; //setTimeout里会用到，
				// 	that.topTips = true,
				// 		that.topTipsStr = that.topTipsStr;
				// 	setTimeout(function() {
				// 		that.topTips = false,
				// 			that.topTipsStr = "";
				// 	}, 3000);
				// }
			},

			onPMCOIEdit(event) {
				//PMCOI编辑
				var that = this;
				var TempCOIData = that.PMCOIList.find(function(e) {
					return e._id == event.currentTarget.id;
				});

				if (!pmJSTools.IsNullOrEmpty(TempCOIData)) {
					if (TempCOIData.PMOrderState == "NORELEASE" || TempCOIData.PMOrderState == "PUBLISH") {
						wx.navigateTo({
							url: '../propertyPage/propertyPage?dataType=PMCOIEdit&PMCOI_id=' + event.currentTarget
								.id,
							success: res => {
								// 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
								res.eventChannel.emit('PMCOIList', that.PMCOIList); //that.OnEditSelect();
								//传递 this.data.PMCOIList过去式为了，添加成功后。
								//PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
							}
						});
						that.propertyDialog.isPropertyDialogOpen = false;
						// that.setData({
						//   propertyDialog: that.propertyDialog
						// });
						that.propertyDialog = that.propertyDialog;
					} else {
						that.ShowErrorTips("交付任务非编辑状态或发布状态，不能进行编辑操作！");
					}
				}
			},

			//PMCOI查看
			onPMCOISHOW(event) {
				var that = this;
				console.log(event); //跳转到任务属性页
				// wx.navigateTo({
				//   url: '../propertyPage/propertyPage?dataType=PMCOIShow&PMCOI_id='+ event.currentTarget.id,
				//   success: res => {
				//     // 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
				//     res.eventChannel.emit('PMCOIList', this.data.PMCOIList)
				//     //传递 this.data.PMCOIList过去式为了，添加成功后。
				//     //PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
				//   }
				// })
				//跳转到任务详情页 

				wx.navigateTo({
					url: '../taskDetail/taskDetail?dataType=PMCOITap&PMCOIID=' + event.currentTarget.id
				});
				this.propertyDialog.isPropertyDialogOpen = false;
				// this.setData({
				//   propertyDialog: this.propertyDialog
				// });
				that.propertyDialog = this.propertyDialog;
			},

			calPMCOIList() //有一些字段是通过遍历PMCOIList,计算获得的，通过此函数完成。
			{
				//calPMCOIList只是修改this.data，并没有执行setDate进行渲染
				for (var tempKey in this.PMCOIList) {
					//calChangeTimeStr用于现在在任务条上的时间简称，这是个计算值，所以需要临时计算获得
					pmJSTools.calPMCOI(this.PMCOIList[tempKey]);
				}
			},

			onPMCOICommandSelect(event) {
				var that = this;
				this.showIOSDialog._id = event.currentTarget.id;
				this.showIOSDialog;
				this.ClickItemData = this.PMCOIList.find(function(e) {
					return e._id == event.currentTarget.id;
				});
				this.showIOSDialog.isShowIOSDialog = true;
				// this.setData({
				//   showIOSDialog: this.showIOSDialog,
				//   ClickItemData: this.ClickItemData
				// });
				that.showIOSDialog = this.showIOSDialog;
				that.ClickItemData = this.ClickItemData;
				var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
				this.dialogPMOrderProType = tempPMCOI.PMOrderProType;

				if (tempPMCOI.PMOrderState != "NORELEASE" && tempPMCOI.PMOrderState != "PUBLISH") {
					// this.setData({
					//   classView: "weui-actionsheet__cellnone"
					// }); //已授权，不允许进行删除和编辑
					that.classView = "weui-actionsheet__cellnone";
				} else {
					// this.setData({
					//   classView: "weui-actionsheet__cell"
					// });
					this.classView = "weui-actionsheet__cell";
				}

				// this.setData({
				//   dialogPMOrderProType: this.dialogPMOrderProType
				// });
				that.dialogPMOrderProType = this.dialogPMOrderProType;
			},

			onPMCOICommandSelectClose() {
				this.showIOSDialog.isShowIOSDialog = false;
				// this.setData({
				//   showIOSDialog: this.showIOSDialog
				// });
				this.showIOSDialog = this.showIOSDialog;
			},

			sharePMCOI(event) {
				console.log(event);
				var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
				wx.navigateTo({
					url: '../sharePage/sharePage?dataType=PMCOIOpen&PMCOI_id=' + event.currentTarget.id,
					success: res => {
						// 这里给要打开的页面传递数据.  第一个参数:方法key, 第二个参数:需要传递的数据
						res.eventChannel.emit('PMCOI', tempPMCOI); //传递 this.data.PMCOIList过去式为了，添加成功后。
						//PMCOI直接添加到this.data.PMCOIList中，再返回当前界面，以减少一次数据读取
					}
				});
			},

			//删除交付任务（二次确认弹框）
			async deletePMCOI(event) {
				console.log(event);
				var funcPra = {};
				funcPra.PMCOI = {}; //准备一个空的PMCOI

				funcPra.PMCOI._id = event.currentTarget.id;
				var tempPMCOI = pmJSTools.getOneControlFromList(event.currentTarget.id, this.PMCOIList);
				funcPra.PMCOI = tempPMCOI;
				wx.showModal({
					title: '提示',
					content: '确认要删除吗?',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.deletePMCOIConfirm(funcPra);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			//确认进行二次删除交付任务
			async deletePMCOIConfirm(funcPra) {
				var that = this;
				var tempRes = await pmSerTools.exePMCOI("PMCOIDelete", funcPra);

				if (tempRes.errMsg == "OK") {
					//错误处理
					wx.showToast({
						title: '删除交付任务成功！',
						icon: 'none',
						duration: 2000
					}); //调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据

					var TempPMCOIList = pmJSTools.DeleteFromList(funcPra.PMCOI._id, this
					.PMCOIList); //执行计算驱动函数（有些变量是计算获得的）

					this.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值

					// this.setData({
					//   PMCOIList: TempPMCOIList
					// });
					that.PMCOIList = TempPMCOIList;
				} else {
					//错误处理
					that.ShowErrorTips('删除交付任务错误:' + tempRes.errMsg + '！');
				}
			},

			//
			pmDialogClose: function(event) {
				// this.setData({
				//   pmDialog: false
				// });
				this.pmDialog = false;
			},

			//加到我的任务
			async addPMCOI(event) {
				var that = this; //这里准备写一个标准的添加函数

				var funcPra = {};
				funcPra.ZCTPMCOI_id = event.currentTarget.id;
				var tempRes = await pmSerTools.exePMCOI("AddOneMyPMCOIbyPMUser", funcPra);

				if (tempRes.errMsg == "OK") {
					wx.showToast({
						title: '加到我的任务成功，请到我的任务中查看',
						icon: 'none',
						duration: 2000
					}); //加入到我的任务中后，需要将该数据从当前列表中移除 
					//调用通用方法----删除列表数据【数组】（this.data.PMCOIList）中_id值为“funcPra.PMCOI._id"的数据 

					var TempPMCOIList = pmJSTools.DeleteFromList(funcPra.ZCTPMCOI_id, this
					.PMCOIList); //执行计算驱动函数（有些变量是计算获得的） 

					this.calPMCOIList(); //将删除后的列表数组TempPMCOIList，重新赋值 

					// this.setData({
					//   PMCOIList: TempPMCOIList
					// });
					that.PMCOIList = TempPMCOIList;
				} else {
					//错误处理
					that.ShowErrorTips("创建交付任务错误:" + tempRes.errMsg);
				}
			},

			//发布
			async publishPMCOI(event) {
				console.log("发布事件监听", event);
				var that = this;
				var funcPra = {};
				funcPra.PMCOI = {};
				var PMCOIData = pmJSTools.getOneControlFromList(event.currentTarget.id, this
				.PMCOIList); //根据本条数据的_id，找到本条数据COI数据
				//判断当前日期是否超过超过计划交付日期，若超过则不允许发布，若已授权也不可发布

				var TempDN = new Date();
				var TempNowMonth = TempDN.getMonth() + 1 > 9 ? TempDN.getMonth() + 1 : "0" + (TempDN.getMonth() + 1);
				var TempNowDay = TempDN.getDate() > 9 ? TempDN.getDate() : "0" + TempDN.getDate();
				var TempSD = TempDN.getFullYear() + "/" + TempNowMonth + "/" + TempNowDay;

				if (TempSD > PMCOIData.ZCTPlanDeliDateShort || PMCOIData.PMOrderState != "NORELEASE" && PMCOIData
					.PMOrderState != "PUBLISH") {
					that.ShowErrorTips("任务发布失败:当前任务不支持发布，已超过计划交付日期或已进入授权执行状态！");
				} else {
					wx.showModal({
						title: '温馨提示',
						content: '制程微信小程序平台仅是提供给生产车间和工人使用的任务管理工具，并不用于招聘等行为。用户应对工友登记或账号绑定时所填写的资料的真实性、合法性、准确性和有效性承担责任。',
						confirmText: '发布',
						success: async function(res) {
							if (res.confirm) {
								funcPra.PMCOI = PMCOIData; //将本条数据COI信息，赋值到funPra中

								funcPra.PMCOI._id = event.currentTarget.id;
								that.FunChooseLocation(funcPra);
							} else if (res.cancel) {}
						}
					});
				}
			},

			//发布位置选择并更新
			async FunChooseLocation(funcPra) {
				var that = this;
				wx.getSetting({
					success(res) {
						//是否开启授权
						if (!res.authSetting['scope.userLocation']) {
							that.fetchAgainLocation(funcPra);
						} else {
							that.FunWXChooseLocation(funcPra);
						}
					}

				});
			},

			//引导重新获取授权
			fetchAgainLocation(funcPra) {
				let that = this;
				wx.getSetting({
					success: res => {
						var statu = res.authSetting;

						if (!statu['scope.userLocation']) {
							wx.showModal({
								title: '是否授权当前位置',
								content: '需要获取您的地理位置，请确认授权，否则发布功能将无法使用',
								success: tip => {
									if (tip.confirm) {
										wx.openSetting({
											success: data => {
												if (data.authSetting[
														"scope.userLocation"] ===
													true) {
													//授权成功
													that.FunWXChooseLocation(funcPra);
												} else {
													wx.showToast({
														title: '授权失败',
														icon: 'success',
														duration: 1000
													});
												}
											},
											fail: () => {},
											complete: () => {}
										});
									}
								}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},

			//选择位置 
			FunWXChooseLocation(funcPra) {
				var that = this;
				wx.chooseLocation({
					success: function(res) {
						console.log(res);

						if (pmJSTools.IsNullOrEmpty(res.address)) {
							wx.showModal({
								title: '提示',
								content: '任务发布失败:获取位置失败，是否重新发布？',
								showCancel: true,

								success(res) {
									if (res.confirm) {
										that.FunWXChooseLocation(funcPra);
									}
								}

							});
						} else {
							funcPra.PMCOI.ZCTCOILatit = res.latitude;
							funcPra.PMCOI.ZCTCOILongit = res.longitude;
							funcPra.PMCOI.ZCTAddress = res.address;
							funcPra.PMCOI.PMUSerID = app.globalData._id;
							funcPra.PMCOI.ZCTNewlatitude = res.latitude;
							funcPra.PMCOI.ZCTNewlongitude = res.longitude;
							app.globalData.CurrentLatitude = res.latitude;
							app.globalData.CurrentLongitude = res.longitude;
							that.FunPMCOIPublish(funcPra);
						}
					},
					fail: function(res) {
						if (res.errMsg == "chooseLocation:fail cancel") {
							that.ShowErrorTips("任务发布失败:您取消了获取位置的授权！");
						} else {
							that.ShowErrorTips("任务发布失败:获取位置失败！");
						}
					},
					//接口调用结束的回调函数（调用成功、失败都会执行）
					complete: function(res) {}
				});
			},

			//任务发布函数
			async FunPMCOIPublish(funcPra) {
				var that = this;
				var TempRes = await pmSerTools.exePMCOI("PMCOIPublish", funcPra);

				if (TempRes.errMsg == "OK") {
					//刷新状态为已发布
					funcPra.PMCOI.PMOrderState = "PUBLISH"; //执行动态变量计算函数

					pmJSTools.calPMCOI(funcPra.PMCOI); //执行计算驱动函数（有些变量是计算获得的）

					pmJSTools.replaceOneControlFromList(funcPra.PMCOI._id, funcPra.PMCOI, this.PMCOIList); //刷新页面显示

					// this.setData({
					//   PMCOIList: this.PMCOIList
					// });
					that.PMCOIList = this.PMCOIList;
					wx.navigateTo({
						url: '../taskMap/taskMap?dataType=PMCOIPublish&latitude=' + funcPra.PMCOI.ZCTCOILatit +
							'&longitude=' + funcPra.PMCOI.ZCTCOILongit + '',
						success: res => {
							that.FunRefreshByOperationStatus();
						}
					});
				} else {
					that.ShowErrorTips("交付任务发布错误:" + TempRes.errMsg);
				}
			},

		
			async onAuthorizeApply(event) {
				var that = this;
				var TempCOIData = that.PMCOIList.find(function(e) {
					return e._id == event.currentTarget.id;
				});
				wx.navigateTo({
					url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
						'&dataType=Authorize&OptionCOI=' + JSON.stringify(TempCOIData) + ''
				});
			},

			
			async onFinishedApply(event) {
				var that = this;
				var TempCOIData = that.PMCOIList.find(function(e) {
					return e._id == event.currentTarget.id;
				});
				wx.navigateTo({
					url: '../ApplicationRecordPage/ApplicationRecordPage?ZCTTaskID=' + event.currentTarget.id +
						'&dataType=Finished&OptionCOI=' + JSON.stringify(TempCOIData) + ''
				});
			},

		
			async OnEditSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit_C.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				};
				// that.setData({
				//   ICOImage: TempStateICO,
				//   PMCOIListSkip: 0,
				//   OptionSelectState: ['NORELEASE'],
				//   OptionSelectStateName: "编辑中"
				// });
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['NORELEASE'];
				that.OptionSelectStateName = "编辑中";
				that.getPMCOIListByUserNew();
			},

			
			async OnPublishSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH_C.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				};
				// that.setData({
				//   ICOImage: TempStateICO,
				//   PMCOIListSkip: 0,
				//   OptionSelectState: ['PUBLISH'],
				//   OptionSelectStateName: "发布"
				// });
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['PUBLISH'];
				that.OptionSelectStateName = "发布";
				that.getPMCOIListByUserNew();
			},

		
			async OnWaitAuthorizeSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize_C.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				};
				// that.setData({
				//   ICOImage: TempStateICO,
				//   PMCOIListSkip: 0,
				//   OptionSelectState: ['WaitAuthorize'],
				//   OptionSelectStateName: "待授权"
				// });
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['WaitAuthorize'];
				that.OptionSelectStateName = "待授权";
				that.getPMCOIListByUserNew();
			},

			async OnExecSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC_C.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				};
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['ALLOWED'];
				that.OptionSelectStateName = "执行中";
				that.getPMCOIListByUserNew();
			},

		
			async OnUnacceptedSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED_C.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT.png"
				};
				// that.setData({
				//   ICOImage: TempStateICO,
				//   PMCOIListSkip: 0,
				//   OptionSelectState: ['UNACCEPTED'],
				//   OptionSelectStateName: "待验收"
				// });
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['UNACCEPTED'];
				that.OptionSelectStateName = "待验收";
				that.getPMCOIListByUserNew();
			},

	
			async OnAcceptSelect() {
				var that = this;
				var TempStateICO = {
					ICOImageEdit: "/static/images/icon/ico_Edit.png",
					ICOImagePublish: "/static/images/icon/ico_PUBLISH.png",
					ICOImageWaitAuthorize: "/static/images/icon/ico_WaitAuthorize.png",
					ICOImageEXEC: "/static/images/icon/ico_EXEC.png",
					ICOImageUnaccepted: "/static/images/icon/ico_UNACCEPTED.png",
					ICOImageAccept: "/static/images/icon/ico_ACCEPT_C.png"
				};
				// that.setData({
				//   ICOImage: TempStateICO,
				//   PMCOIListSkip: 0,
				//   OptionSelectState: ['ACCEPT'],
				//   OptionSelectStateName: "已验收"
				// });
				that.ICOImage = TempStateICO;
				that.PMCOIListSkip = 0;
				that.OptionSelectState = ['ACCEPT'];
				that.OptionSelectStateName = "已验收";
				that.getPMCOIListByUserNew();
			},

			
			FunRefreshByOperationStatus() {
				var that = this;
				var TempOptionSelectState = that.OptionSelectStateName;

				switch (TempOptionSelectState) {
					case "编辑中":
						that.OnEditSelect();
						break;

					case "发布":
						that.OnPublishSelect();
						break;

					case "待授权":
						that.OnWaitAuthorizeSelect();
						break;

					case "执行中":
						that.OnExecSelect();
						break;

					case "待验收":
						that.OnUnacceptedSelect();
						break;

					case "已验收":
						that.OnAcceptSelect();
						break;

					default:
						that.OnExecSelect();
						break;
				}
			},

		
			ShowErrorTips(TempErrorMsg) {
				var that = this; //setTimeout里会用到，

				that.topTipsStr = TempErrorMsg;
				// that.setData({
				//   //MoveToUp触发
				//   topTips: true,
				//   topTipsStr: that.topTipsStr
				// });
				that.topTips = true;
				that.topTipsStr = that.topTipsStr;
				setTimeout(function() {
				
					// that.setData({
					//   topTips: false,
					//   topTipsStr: ""
					// });
					that.topTips = false;
					that.topTipsStr = "";
				}, 2000);
			},

		
			getUserProfile: async function(e) {
				wx.navigateTo({
					url: '../registPage/registPage',
					success: res => {
						// this.setData({
						//   pmDialogShouQuan: false
						// });
						that.pmDialogShouQuan = false;
					}
				});
			},
			
			getCancel: async function(e) {
				// this.setData({
				//   pmDialogShouQuan: false
				// });
				that.pmDialogShouQuan = false;
			}
		}
	};
