
	const util = require("./utils/util.js");
	const themeListeners = [];
	
	export default {
	  globalData: {
	    preventActive(fn) {
	      const self = this;
	
	      if (this.globalData.PageActive) {
	        this.globalData.PageActive = false;
	        if (fn) fn();
	        setTimeout(() => {
	          self.PageActive = true;
	        }, 1000); //设置该时间内重复触发只执行第一次，单位ms，按实际设置
	      } else {
	        console.log('重复点击或触发');
	      }
	    },
	
	    preventActive(fn) {
	      const self = this;
	
	      if (this.globalData.PageActive) {
	        this.globalData.PageActive = false;
	        if (fn) fn();
	        setTimeout(() => {
	          self.PageActive = true;
	        }, 1500); //设置该时间内重复触发只执行第一次，单位ms，按实际设置
	      } else {
	        console.log('重复点击或触发');
	      }
	    },
	
	    themeChanged(theme) {
	      this.globalData.theme = theme;
	      themeListeners.forEach(listener => {
	        listener(theme);
	      });
	    },
		
	
	    watchThemeChange(listener) {
	      if (themeListeners.indexOf(listener) < 0) {
	        themeListeners.push(listener);
	      }
	    },
	
	    unWatchThemeChange(listener) {
	      const index = themeListeners.indexOf(listener);
	
	      if (index > -1) {
	        themeListeners.splice(index, 1);
	      }
	    },
	
	    async initWatch() {
	      this.db = uniCloud.database({
	        env: this.globalData.ZCTEnvId //云环境ID 
	
	      });
	      var that = this;
	      this.try(() => {
	        this.db = wx.cloud.database({
	          env: this.globalData.ZCTEnvId //云环境ID 
	
	        });
	        const db = this.db;
	        const _ = db.command;
	        const watcher = db.collection('ZCTChatGroup').where(_.or([{
	          ZCTSponsorUserId: _.eq(this.globalData._id)
	        }, {
	          ZCTCommunicatorsUserId: _.eq(this.globalData._id)
	        }])).where({
	          ZCTNewestTimeTS: _.gt(this.globalData.ZCTNewestTimeTS)
	        }).orderBy('ZCTNewestTimeTS', 'desc').watch({
	          onChange: function (snapshot) {
	            if (snapshot.type === 'init') {
	              var TempWaitSumCoun = 0;
	
	              for (let index = 0; index < that.chats.length; index++) {
	                TempWaitSumCoun = TempWaitSumCoun + that.chats[index].UnreadNum;
	              }
	
	              that.WaitSumCoun = TempWaitSumCoun;
	            } else {
	              const chats = [...that.chats];
	              snapshot.docChanges.forEach(docChange => {
	                switch (docChange.dataType) {
	                  case 'update':
	                  case 'add':
	                    {
	                      docChange.doc.ZCTNewestTime = util.getTimeShortStrFromTime(util.formatDateTime(docChange.doc.ZCTNewestTime));
	
	                      if (docChange.doc.ZCTSponsorUserId != that._id) {
	                        docChange.doc.UnreadNum = docChange.doc.ZCTCommunicatorUnreadNum;
	                      } else {
	                        docChange.doc.UnreadNum = docChange.doc.ZCTSponsorUnreadNum;
	                      }
	
	                      const ind = chats.findIndex(chat => chat._id === docChange.doc._id);
	
	                      if (ind > -1) {
	                        chats.splice(ind, 1, docChange.doc);
	                      } else {
	                        chats.push(docChange.doc);
	                      }
	
	                      var TempWaitSumCoun = 0;
	
	                      for (let index = 0; index < chats.length; index++) {
	                        TempWaitSumCoun = TempWaitSumCoun + chats[index].UnreadNum;
	                      }
	
	                      that.WaitSumCoun = TempWaitSumCoun;
	                      that.chats = chats;
	
	                      if (that.chats.length > 0 && that.isShowTiTile == true) {
	                        that.isShowTiTile = false;
	                      }
	
	                      break;
	                    }
	
	                  case 'remove':
	                    {
	                      const ind = chats.findIndex(chat => chat._id === docChange.doc._id);
	
	                      if (ind > -1) {
	                        that.DeleteFromList(chats[ind]._id, chats);
	                        var TempWaitSumCoun = 0;
	
	                        if (chats.length > 0) {
	                          for (let index = 0; index < chats.length; index++) {
	                            TempWaitSumCoun = TempWaitSumCoun + chats[index].UnreadNum;
	                          }
	                        }
	
	                        if (chats.length == 0) {
	                          that.isShowTiTile = true;
	                        }
	
	                        that.WaitSumCoun = TempWaitSumCoun;
	                        that.chats = chats;
	                      }
	
	                      break;
	                    }
	                }
	              });
	            }
	          },
	          onError: function (err) {
	            console.error('the watch closed because of error', err);
	          }
	        });
	      }, '初始化监听失败');
	    },
	
	    async try(fn, title) {
	      try {
	        await fn();
	      } catch (e) {
	        console.log(e);
	      }
	    },
	
	    watchchats: function (method) {
	      //监听函数
	      var that = this;
	      var obj = this.globalData;
	      Object.defineProperty(obj, 'chats', {
	        configurable: true,
	        enumerable: true,
	        set: function (value) {
	          this._name = value;
	          method(value);
	        },
	        get: function () {
	          return this._name;
	        }
	      });
	    },
	
	    DeleteFromList(selectedID, TempList) {
	      if (TempList.length) {
	        for (var i = 0; i < TempList.length; i++) {
	          if (TempList[i]._id == selectedID) //遍历出来一个数据
	            {
	              TempList.splice(i, 1);
	              return TempList;
	            }
	        }
	      }
	
	      return TempList; //返回接收到的数组内容
	    }
	
	  },
	  onLaunch: function () {
	    //※切换云环境Id时只需切换这里，其他页面js引用globalData.ZCTEnvId
	    var TempEnvId = "tcb-ecxw1hs9f19080-6d00j26b1957e"; //测试云环境Id
	    //var TempEnvId ="zctmes2021-4gbkpkah6976a0e1";       //正式云环境Id
	
	    if (!wx.cloud) {
	      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
	    } else {
	      wx.cloud.init({
	        // env 参数说明：
	        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
	        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
	        //   如不填则使用默认环境（第一个创建的环境）
	        env: TempEnvId,
	        traceUser: true
	      });
	    }
	
	    this.globalData = {
	      PMUserID: "",
	      PMUserName: "",
	      WXLogoState: false,
	      //微信登录状态 true为已登录
	      CurrentLatitude: 0,
	      //当前位置纬度
	      CurrentLongitude: 0,
	      //当前位置经度 
	      PageActive: true,
	      oldTime: "",
	      ZCTEnvId: TempEnvId,
	      //当前使用的云环境ID
	      isShowTiTile: true,
	      chats: [],
	      ZCTNewestTimeTS: 0,
	      WaitSumCoun: 0,
	      DataList: [],
	      PMCOIListSkip: 0,
	      //消息界面通知分页 页
	      DataListLimit: 20 //消息界面通知 每页显示数量
	
	    };
	    var that = this;
	    wx.getLocation({
	      success: function (res) {
	        that.globalData.CurrentLatitude = res.latitude;
	        that.globalData.CurrentLongitude = res.longitude;
	      }
	    });
	  },
	  methods: {
		  
		  preventActive(fn) {
		    const self = this;
		    if (this.globalData.PageActive) {
		      this.globalData.PageActive = false;
		      if (fn) fn();
		      setTimeout(() => {
		        self.PageActive = true;
		      }, 1500); //设置该时间内重复触发只执行第一次，单位ms，按实际设置
		    } else {
		      console.log('重复点击或触发');
		    }
		  },
		  
	  }
	};
