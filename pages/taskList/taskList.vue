<template>
	<view>
		<view class="page" :data-weui-theme="theme">
			<!-- <scroll-view class="G_SC_V" style="'height:' + mHeight + 'px'" lower-threshold="100" refresher-threshold="50" refresher-enabled="true" :refresher-triggered="isMoveToUp" @refresherrefresh="bindLoadingNew" @scrolltolower="bindLoadingMore" enable-flex="true" scroll-y="true"> -->
			<Scroll-view class="G_SC_V" style="'height:' + mHeight + 'px'" enable-flex="true" scroll-y="true">
				<a class="weui-media-box weui-media-box_appmsg" style="height:100px;">
					<view class="page__hd">
						<view class="page__title" style="margin-left: -50rpx;">我发布的任务</view>
						<view class="page__desc" style="margin-left: -50rpx;">编辑、发布、分发</view>
					</view>
					<view class="pm-TC-new" id="AddNewPO" @tap="OnPMCOIAddNewTap" style="margin-left:30px;">
						<view class="pm-TC-Txt" style="margin-top: -100rpx;">创建新任务</view>
						<!--<image src></image>-->
						<view class="pm-TC-progress__bar">
							<view class="pm-TC-progress__inner-bar js_progress" style="width: 0%;"></view>
						</view>
					</view>
				</a>
				<view class="weui-panel weui-panel_access">
					<view class="weui-panel__hd">交付任务列表</view>
					<view class="weui-panel__hd stateselect_panel">
						<view class="stateselect_item" @tap="OnEditSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImageEdit"
									:src="ICOImage.ICOImageEdit"></image>
							</view>
							<view>编辑中</view>
						</view>
						<view class="stateselect_item" @tap="OnPublishSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImagePublish"
									:src="ICOImage.ICOImagePublish"></image>
							</view>
							<view>发布</view>
						</view>
						<view class="stateselect_item" @tap="OnWaitAuthorizeSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImageWaitAuthorize"
									:src="ICOImage.ICOImageWaitAuthorize"></image>
							</view>
							<view>待授权</view>
						</view>
						<view class="stateselect_item" @tap="OnExecSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImageEXEC"
									:src="ICOImage.ICOImageEXEC"></image>
							</view>
							<view>执行中</view>
						</view>
						<view class="stateselect_item" @tap="OnUnacceptedSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImageUnaccepted"
									:src="ICOImage.ICOImageUnaccepted"></image>
							</view>
							<view>待验收</view>
						</view>
						<view class="stateselect_item" @tap="OnAcceptSelect">
							<view>
								<image style="width:25px;height:25px;" v-if="ICOImage.ICOImageAccept"
									:src="ICOImage.ICOImageAccept"></image>
							</view>
							<view>已验收</view>
						</view>
					</view>
					<view class="weui-panel__bd">
					 <block v-for="(PMCOI, index) in PMCOIList" :key="index" v-if="PMCOIList">
					   <view class="ColumnBox">
					     <a class="weui-media-box weui-media-box_appmsg">
					       <view class="weui-media-box__hd" style="width:86px;height:70px;" :id="PMCOI._id" @tap="onPMCOICommandSelect" @longpress="onPMCOIImageTap">
					         <image class="weui-media-box__thumb" style="width:70px;height:70px;" :src="PMCOI.ZCTProductURL" alt mode="aspectFill"></image>
					       </view>
					       <view class="pm-task-box__bd" :id="PMCOI._id" @tap="onPMCOICommandSelect" @longpress="onPMCOITap" style="width:100%;">
					         <View class="taskdetail_title">
					           <view class="taskName">{{PMCOI.PMInnerProductName}}<a class="taskNum">{{PMCOI.PMOrderNum}}{{PMCOI.PMOrderUnit}}</a></view>
					         </View>
					         <view class="pm-taskdetail">
					           <view class="pm-taskdetail__desc">
					             已完工{{PMCOI.ZCTFinishedNum}}{{PMCOI.PMOrderUnit}},计划交付时间：{{PMCOI.ZCTPlanDeliDateShort}} </view>
					           <view class="pm-taskstate">
					             <view class="pm-taskstate-time">{{PMCOI.calChangeTimeStr}}</view>
					             <view class="pm-taskstate-state">{{PMCOI.calPMState}}</view>
					           </view>
					         </view>
					       </view>
					     </a>
					     <view class="task_progressGroup">
					       <block v-for="(PMCOIStates, index) in PMCOI.calTaskStates" :key="index" v-if="PMCOI.calTaskStates">
					         <view class="task_progress">
					           <view class="task_progressSubTxt">
					             {{PMCOIStates.calStageName}}
					           </view>
					           <view class="task_progressSub" :style="PMCOIStates.calStageStyle">
					           </view>
					         </view>
					       </block>
					     </view>
					 
					   </view>
					 
					 </block>
						<view style="height:20px"></view>
					</view>
				</view>
				<view v-if="isMoveToDown">
					<view class="weui-loading__wrp">
						<view class="loading wx_dot_loading"></view>
					</view>
				</view>
			</scroll-view>

			<view class="fadeIn" v-if="propertyDialog.isPropertyDialogOpen">
				<view class="weui-mask" @tap="propertyDialogClose"></view>
				<view class="weui-half-screen-dialog">

					<view class="weui-half-screen-dialog__hd">
						<view class="weui-half-screen-dialog__hd__side" @tap="propertyDialogClose">
							<a class="weui-icon-btn">返回<i class="weui-icon-back-arrow-thin"></i></a>
						</view>
						<view class="weui-half-screen-dialog__hd__main">
							<strong class="weui-half-screen-dialog__title">{{propertyDialog.mainTitle}}</strong>
							<view class="weui-half-screen-dialog__subtitle">{{propertyDialog.subTitle}}</view>
						</view>
						<view class="weui-half-screen-dialog__hd__side">
							<!-- <a class="weui-icon-btn">更多<i class="weui-icon-more"></i></a> -->
						</view>
					</view>
					<view class="weui-half-screen-dialog__bd" style="padding-bottom: 4px;">
						<view class="weui-half-screen-dialog__desc">
							{{propertyDialog.mainTip}}
						</view>

						<view class="pm-picBox">
							<image class="pm-product-image" style="width:270px;height:270px;margin:4px;"
								v-if="ZCTProductURL" :src="ZCTProductURL" mode="aspectFill"></image>
						</view>

						<view v-if="propertyDialog.subTip" class="pm-half-screen-dialog__tips" style="padding-top:0px">
							{{propertyDialog.subTip}}
						</view>

					</view>


					<scroll-view v-if="propertyDialog.subInfoList" class="pm-scroll-view_V" enable-flex="true"
						scroll-y="true" style="height: 300px;">

						<view class="page__bd" style="width:100%;">
							<view class="weui-cells" style="margin-top:2px;">
								<block v-for="(subInfo, k) in propertyDialog.subInfoList" :key="k">
									<view class="weui-cell weui-cell_active">
										<view class="weui-cell__hd" style="position: relative; margin-right: 10px;">
											<image v-if="subInfo.ZCTProductURL" :src="subInfo.ZCTProductURL"
												style="width:45px; height:45px; display:block;"></image>
										</view>
										<view class="weui-cell__bd">
											<view>{{subInfo.mainInfo}}</view>
											<view style="font-size: 13px; color: #888;">{{subInfo.subInfo}}</view>
										</view>
									</view>
								</block>
							</view>
						</view>


					</scroll-view>

					<view :class="pm-half-screen-dialog__ft">
						<button :class="propertyDialog.CancelBthClass"
							@tap="propertyDialogClose">{{propertyDialog.subOperation}}</button>
						<button :class="propertyDialog.EditBtnClass" @tap="onPMCOIEdit"
							:id="propertyDialog._id">{{propertyDialog.mainOperation}}</button>
					</view>
				</view>
			</view>

			<view style="margin-top:70rpx;" v-if="topTips" :class="'weui-toptips weui-toptips_warn fadeIn ' + (hide ? 'fadeOut' : '')">
				{{topTipsStr}}
			</view>

			<view v-if="showIOSDialog.isShowIOSDialog" class="fadeIn" :id="showIOSDialog._id"
				@tap="onPMCOICommandSelectClose">
				<view class="weui-mask"></view>
				<view class="weui-actionsheet weui-actionsheet_toggle">
					<view class="weui-actionsheet__title">
						<view class="weui-actionsheet__title-text">编辑 查看 分享 发布</view>
					</view>
					<view class="weui-actionsheet__menu">
						<view class="weui-actionsheet__cell" :id="showIOSDialog._id" @tap="onPMCOISHOW">任务详情</view>
						<view :class="classView" :id="showIOSDialog._id" @tap="onPMCOIEdit">编辑</view>
						<view :class="classView" :id="showIOSDialog._id" @tap="deletePMCOI">删除</view>
						<view :class="classView" :id="showIOSDialog._id" @tap="addPMCOI">加到我的任务</view>
						<view :class="weui-actionsheet__cell" :id="showIOSDialog._id" @tap="sharePMCOI">分发</view>
						<view :class="classView" :id="showIOSDialog._id" @tap="publishPMCOI">发布</view>
						<view v-if="ClickItemData.ZCTApplicationCount>0?true:false" class="weui-actionsheet__cell"
							:id="showIOSDialog._id" @tap="onAuthorizeApply">查看授权申请</view>
						<view v-if="ClickItemData.PMOrderState=='UNACCEPTED'?true:false" class="weui-actionsheet__cell"
							:id="showIOSDialog._id" @tap="onFinishedApply">查看完工申请</view>
					</view>
					<view class="weui-actionsheet__action">
						<view class="weui-actionsheet__cell">取消</view>
					</view>
				</view>
			</view>

		</view>

		<view v-if="pmDialog" >
			<view class="weui-mask"></view>
			<view class="weui-dialog">
				<view class="weui-dialog__hd"><strong class="weui-dialog__title">{{dialogMainTitle}}</strong></view>
				<view class="weui-dialog__bd">{{dialogMainContent}}</view>

				<view class="weui-dialog__ft">
					<a class="weui-dialog__btn weui-dialog__btn_default" @tap="pmDialogClose">{{dialogSubOperation}}</a>
					<a class="weui-dialog__btn weui-dialog__btn_primary" @tap="pmDialogClose"
						:id="btnCommandName_id">{{dialogMainOperation}}</a>

				</view>
			</view>
		</view>
		<!-- 顶部提示框 -->
		<view  style="margin-top:70rpx;" v-if="topTips" :class="'weui-toptips weui-toptips_warn fadeIn ' + (hide ? 'fadeOut' : '')">{{topTipsStr}}
		</view>

		<!-- 这部分用来授权登录， 主要是公众号等没有经过登录的情形 -->
		<view v-if="pmDialogShouQuan">
			<view class="weui-mask"></view>
			<view class="weui-dialog">
				<view class="weui-dialog__hd"><strong class="weui-dialog__title">提示</strong></view>
				<view class="weui-dialog__bd">该功能需要账号绑定才能操作，是否进入账号绑定？</view>
				<view class="weui-dialog__ft">
					<button class="weui-dialog__btn weui-dialog__btn_primary" lang="zh_CN" @tap="getCancel">
						<text>取消</text>
					</button>
					<button class="weui-dialog__btn weui-dialog__btn_primary" lang="zh_CN" @tap="getUserProfile">
						<text>绑定</text>
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script src="./taskList.js">
	
</script>
<style src="./taskList.css">
	
</style>
