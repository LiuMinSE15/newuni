<template>
	<view>
		<view class="page" :data-weui-theme="theme">
			<view class="weui-form" style="padding-top: 20px">
				<view class="weui-form__text-area">
					<h2 class="page__title">{{mainTitle}}</h2>
					<view class="weui-form__desc" style="margin-top: 5px;margin-bottom: 20px">{{subTips}}</view>
				</view>

				<view v-if="!ZCTProductURL" class="pm-TC-new" @tap="onGetPic">
					<view class="pm-TC-Txt">增加产品照片</view>
					<view class="pm-TC-Txt">已有产品默认加载</view>
					<!-- <image src></image> -->
				</view>

				<image v-if="ZCTProductURL" class="pm-product-image" :src="ZCTProductURL" mode="aspectFill"
					@tap="onGetPic" :style="PicselectedStyle"></image>
				<view class="weui-form__control-area" style="margin-top: 20px;margin-bottom: 20px">
					<block v-if="fillBlock">

						<view class="pm-cells__group pm-cells__group_form">

							<view class="pm-cells__title">{{fillBlock.fillRemind}}</view>

							<view class="pm-cells pm-cells_form">

								<block v-if="IsFillHelp">
									<view class="pm-cell">

										<label class="pm-inputlabel">辅助计算</label>
										<switch type="switch" :checked="IsFillHelpSwitch" @change="onAtuoSwitchChange">
										</switch>

										<label class="pm-inputlabel">按单数</label>
										<switch type="checkbox" :checked="IsFillHelpSwitchByPO"
											@change="onAtuoSwitchChangeByPO"></switch>
										<label class="pm-inputlabel">按数量</label>
										<switch type="checkbox" :checked="IsFillHelpSwitchByNum"
											@change="onAtuoSwitchChangeByNum"></switch>

									</view>
								</block>

								<block v-for="(fillItem, index) in fillBlock.fillItemList" :key="index"
									v-if="fillBlock.fillItemList" :id="fillItem.fillID">
									<view class="pm-cells pm-cell_active">
										<block
											v-if="!fillItem.fillHelpList && fillItem.fillType != 'DATE'  && fillItem.fillType != 'TIME'  && fillItem.fillTitle == '费用及相关说明' && fillItem.fillTitle !='生产环境及任务相关图片'">
											<view class="pm-cell">
												<!-- <view class="weui-cell__hd"><label class="weui-label" style="width:250rpx;text-align:right;margin-right:10px;">{{fillItem.fillTitle}}</label></view> -->
												<view class="weui-cell__bd">
													<textarea class="weui-textarea" :placeholder="fillItem.fillTip"
														:disabled="fillItem.filldisabled"
														placeholder-class="weui-input__placeholder"
														:type="fillItem.fillType" :maxlength="fillItem.maxlength"
														@input="bindTxtChange" :id="fillItem._id"
														:value="fillItem.fillValue" style="height: 3.3em"></textarea>
													<view class="weui-textarea-counter">{{fillItem.inputNumWords}}/500
													</view>
												</view>
											</view>
										</block>
										<block
											v-if="!fillItem.fillHelpList && fillItem.fillType != 'DATE'  && fillItem.fillType != 'TIME' && fillItem.fillTitle != '费用及相关说明' && fillItem.fillTitle !='生产环境及任务相关图片'">
											<view class="pm-cell">
												<!-- <view class="weui-cell weui-cell_active"> -->
												<!-- <label class="pm-inputlabel">{{fillItem.fillTitle}}</label> -->
												<view class="weui-cell__hd"><label class="weui-label"
														style="width:280rpx;text-align:right;margin-right:10px;">{{fillItem.fillTitle}}</label>
												</view>
												<view class="weui-cell__bd">
													<input class="weui-input" :placeholder="fillItem.fillTip"
														placeholder-class="weui-input__placeholder"
														:disabled="fillItem.filldisabled" :type="fillItem.fillType"
														:maxlength="fillItem.maxlength" @input="bindTxtChange"
														:id="fillItem._id" :value="fillItem.fillValue"
														@blur="bindProductName">
												</view>
											</view>
										</block>
										<scroll-view v-if="fillItem._id=='PMInnerProductID'" scroll-y="true"
											class="Association" :hidden="hideScroll"
											:style="arrayHeight>340?'height:340rpx':''">
											<view v-for="(item, index2) in bindSource" :key="index2">
												<view :id="item" @tap="itemtap">{{item}}</view>
											</view>
										</scroll-view>
										<block v-if="!fillItem.fillHelpList && fillItem.fillType=='DATE'">
											<view class="pm-cell">
												<!-- <view class="weui-cell weui-cell_active"> -->
												<!-- <label class="pm-inputlabel">{{fillItem.fillTitle}}</label> -->
												<view class="weui-cell__hd"><label class="weui-label"
														style="width:280rpx;text-align:right;margin-right:10rpx;">{{fillItem.fillTitle}}</label>
												</view>
												<view class="weui-cell__bd">
													<picker class="weui-input" mode="date" @change="bindDateChange"
														:disabled="fillItem.filldisabled" :id="fillItem._id"
														:value="fillItem.fillValue" :start="fillItem.startDate"
														:end="fillItem.endDate">
														<input style="margin-left:10rpx" class="weui-input" disabled
															:placeholder="fillItem.fillTip"
															placeholder-class="weui-input__placeholder"
															:maxlength="fillItem.maxlength" :value="fillItem.fillValue">

													</picker>
												</view>
											</view>
										</block>

										<block v-if="!fillItem.fillHelpList && fillItem.fillType=='TIME'">


											<view class="pm-cell">
												<!-- <view class="weui-cell weui-cell_active"> -->
												<!-- <label class="pm-inputlabel">{{fillItem.fillTitle}}</label> -->
												<view class="weui-cell__hd"><label class="weui-label"
														style="width:280rpx;text-align:right;margin-right:10rpx;">{{fillItem.fillTitle}}</label>
												</view>
												<view class="weui-cell__bd">
													<picker class="weui-input" mode="time" @change="bindTimeChange"
														:disabled="fillItem.filldisabled" :id="fillItem._id"
														:value="fillItem.fillValue" :start="fillItem.startTime"
														:end="fillItem.endTime">
														<input class="weui-input" disabled
															:placeholder="fillItem.fillTip"
															placeholder-class="weui-input__placeholder"
															:maxlength="fillItem.maxlength" :value="fillItem.fillValue">

													</picker>
												</view>
											</view>

										</block>

										<block v-if="fillItem.fillTitle =='生产环境及任务相关图片'">
											<view class="weui-uploader__hd">
												<view class="weui-uploader__overview">
													<view class="weui-uploader__title" style="margin:10px">
														{{fillItem.fillTitle}}
													</view>
												</view>
											</view>
											<view class="weui-cell__bd">
												<view class="weui-uploader__files" style="margin-left:10px"
													id="uploaderFiles">
													<block v-for="(fillItemimg, index2) in fillItem.fillImgLst"
														:key="index2">

														<view class="weui-uploader__file" @tap="previewImage"
															@longpress="deleteImage" :id="fillItemimg">
															<image class="weui-uploader__img" :src="fillItemimg"
																mode="aspectFill"></image>
														</view>
													</block>
												</view>
												<view class="weui-uploader__input-box" style="margin-left:10px"
													v-if="fillItem.AddPic">
													<view class="weui-uploader__input" @tap="chooseImage"></view>
												</view>

											</view>
										</block>


										<block v-if="fillItem.fillHelpList && fillItem.fillTitle !='生产环境及任务相关图片'">
											<view class="pm-cell">
												<!-- <view class="weui-cell weui-cell_active"> -->
												<!-- <label class="pm-inputlabel">{{fillItem.fillTitle}}</label> -->
												<view class="weui-cell__hd"><label class="weui-label"
														style="width:280rpx;text-align:right;margin-right:10rpx;">{{fillItem.fillTitle}}</label>
												</view>
												<view class="weui-cell__bd">
													<picker class="weui-input" @change="bindListChange"
														:id="fillItem._id" :disabled="fillItem.filldisabled"
														:value="fillItem.fillHelpIndex" :range="fillItem.fillHelpList">
														<input class="weui-input" disabled
															:placeholder="fillItem.fillTip"
															placeholder-class="weui-input__placeholder"
															:type="fillItem.fillType" :maxlength="fillItem.maxlength"
															:value="fillItem.fillHelpList[fillItem.fillHelpIndex]">

													</picker>
												</view>
											</view>
										</block>
									</view>
									<!-- </view> -->
								</block>
							</view>
						</view>

						<view v-if="IsPIlength" style="min-width:50px">
							<view v-if="dataType=='POAddNew'" style="min-width:50px">
								<scroll-view v-if="PMPIList" class="pm-LeftRight_Show" enable-flex="true"
									scroll-x="true" @scroll="scroll" style="height:350px; background-color: #F1F1F1;">
									<view id="animationPOChangeover"
										:style="'min-width: ' + calMWidth + 'px; width: ' + calMWidth + 'px;'">
										<view id="animationPIChangeover"
											:style="'min-width: ' + calMWidth + 'px;width: ' + calMWidth + 'px;'">
											<view class="pm-sectionDesc" style="padding:5px;">
												是否使用默认工艺路线 <switch type="switch" :checked="IsLastPIFillHelpSwitch"
													@change="onLastPIListSwitchChange"></switch>
											</view>
											<view class="weui-panel__bd">
												<view v-if="PMPIList" class="pm-viewfor-scroll-view_V">
													<scroll-view class="pm-scroll-view_V" enable-flex="true"
														scroll-y="true" style="mid-width:308px; height: 300px;"
														@scrolltoupper="upper" @scrolltolower="lower" @scroll="scroll"
														:scroll-into-view="toView" :scroll-top="scrollTop">

														<block v-for="(PMPI, i) in PMPIList" :key="i"
															class="pm-PMPIList">
															<view class="pm-TCGroup" :id="PMPI._id + '_TCGroup'">
																<view v-if="PMPI.ZCTRAWPurList" class="pm-TC"
																	:id="PMPI._id + '_RAWPur'"
																	:style="PMPI.selectedStyle" @tap="onPMPIPurTap"
																	@longpress="onPMPIPurLongTap">
																	<view class="pm-TC-Txt">
																		领料：{{PMPI.ZCTRAWPurList[0].ZCTMaterialName}}...
																	</view>
																	<view class="pm-TC-imagesBox">
																		<block
																			v-for="(PMRAWPur, j) in PMPI.ZCTRAWPurList"
																			:key="j">
																			<image v-if="j < 4" class="pm-TC-Subimage"
																				:src="PMRAWPur.ZCTProductURL"
																				mode="scaleToFill">
																			</image>
																		</block>
																	</view>
																</view>

																<image class="pm-TCGroup-Arrowimage"
																	src="/static/images/icon/right.png"
																	mode="aspectFit"></image>

																<view :id="PMPI._id" class="pm-TC"
																	:style="PMPI.selectedStyle">
																	<view class="pm-TC-Txt">
																		{{PMPI.PMStanardProcessName}}
																	</view>
																	<image class="pm-TC-image" :src="PMPI.ZCTProductURL"
																		mode="scaleToFill"></image>
																</view>
																<image class="pm-TCGroup-Arrowimage"
																	src="/static/images/icon/left.png" mode="aspectFit">
																</image>

																<view v-if="PMPI.ZCTRAWProList"
																	:id="PMPI._id + '_RAWPro'" class="pm-TC"
																	:style="PMPI.selectedStyle" @tap="onPMPIProTap"
																	@longpress="onPMPIProLongTap">
																	<view class="pm-TC-Txt">
																		生产：{{PMPI.ZCTRAWProList[0].ZCTMaterialName}}...
																	</view>
																	<view class="pm-TC-imagesBox">
																		<block
																			v-for="(PMRAWPro, M) in PMPI.ZCTRAWProList"
																			:key="M">
																			<image v-if="M < 4" class="pm-TC-Subimage"
																				:src="PMRAWPro.ZCTProductURL"
																				mode="scaleToFill">
																			</image>
																		</block>
																	</view>
																</view>
															</view>
															<view class="pm-TC-Arrowimage">
																<image class="pm-TC-Arrowimage"
																	src="/static/images/icon/down.png" mode="aspectFit">
																</image>
															</view>
														</block>
													</scroll-view>

													<block v-if="PMCOI.PMPOList[PMCOI.selectedPOKey].showRAWProList">
														<scroll-view class="pm-scroll-view_V" enable-flex="true"
															scroll-y="true"
															style="width:90px; max-width:90px; height:300px; background-color: white;">

															<block
																v-for="(RAWPro, index) in PMCOI.PMPOList[PMCOI.selectedPOKey].showRAWProList"
																:key="index">
																<view :id="RAWPro.PMPRDInstructionID + '_' + RAWPro._id"
																	class="pm-TC"
																	:style="'min-height:80px; ' + RAWPro.selectedStyle"
																	@tap="onPMRAWProTap" @longpress="onPMRAWProLongTap">
																	<view class="pm-TC-Txt">{{RAWPro.ZCTMaterialName}}
																	</view>

																	<view class="pm-TC-imagesBox">
																		<block v-for="(RAWPro, M) in PMPI.ZCTRAWProList"
																			:key="M">
																			<image v-if="M < 4" class="pm-TC-Subimage"
																				:src="RAWPro.ZCTProductURL"
																				mode="scaleToFill">
																			</image>
																		</block>
																	</view>
																</view>

															</block>
														</scroll-view>
													</block>

												</view>
											</view>
										</view>
									</view>



								</scroll-view>
							</view>
						</view>

						<view v-if="!IsPIlength&&dataType=='POAddNew'" class="pm-sectionDesc" style="padding:5px;">
							暂无默认工艺路线
						</view>

						<a v-if="autoFiller" class="weui-btn weui-btn_default" style="margin-top:10rpx;"
							@tap="onAutoFill">快速填写</a>

						<view style="margin-top:20rpx;">
							<button :class="confirmBtnClass" @tap="bindButtonTap" :hidden="hiddenName"
								:disabled="isConfButtonDisabled"><i :class="loadingMark"></i>{{btnCommandName}}</button>
						</view>

					</block>

				</view>


				<view class="weui-form__tips-area">
					<view class="weui-form__tips">
						{{upBtnTips}}
					</view>
				</view>


				<view class="weui-form__tips-area">
					<view class="weui-form__tips">
						{{downBtnTips}}
					</view>
				</view>

			</view>



		</view>


		<view v-if="topTips" :class="'weui-toptips weui-toptips_warn fadeIn ' + (hide ? 'fadeOut' : '')">{{topTipsStr}}
		</view>

		<view v-if="pmDialog">
			<view class="weui-mask"></view>
			<view class="weui-dialog">
				<view class="weui-dialog__hd"><strong class="weui-dialog__title">{{dialogMainTitle}}</strong></view>
				<view class="weui-dialog__bd">{{dialogMainContent}}</view>

				<view class="weui-dialog__ft">
					<a v-if="pmShowBtn" class="weui-dialog__btn weui-dialog__btn_default"
						@tap="pmDialogClose">{{dialogSubOperation}}</a>
					<a class="weui-dialog__btn weui-dialog__btn_primary" @tap="pmDialogClose"
						:id="btnCommandName_id">{{dialogMainOperation}}</a>
				</view>
			</view>
		</view>
	</view>
</template>

<script src="./propertyPage.js">
	
</script>
<style src="./propertyPage.css">

</style>
