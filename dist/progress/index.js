import{px2rpx}from"../utils/util.js";import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-text-class","l-active-class","l-background-class"],behaviors:[validator],properties:{percent:{type:Number,value:0},strokeWidth:{type:Number,value:12},borderRadius:{type:Number,value:0},activeColor:{type:String},backgroundColor:{type:String,value:"#EBEBEB"},showInfo:{type:Boolean,value:!1},textPosition:{type:String,value:"right",options:["left","right"]},textColor:{type:String},interval:{type:Number,value:20}},options:{multipleSlots:!0,pureDataPattern:/^_/},data:{_slotWidth:0,_slotHeight:0,_progressWidth:0,_progressHeight:0,_marginBottom:0,_marginLeft:0,_marginTop:0},observers:{"_slotWidth, _slotHeight, _progressWidth, _progressHeight, percent":function(t,e,r,i,o){const s=-(e-i)/2,a=(r-t)*o/100;this.setData({_marginTop:s,_marginLeft:a})}},lifetimes:{attached(){const t=this;wx.createSelectorQuery().in(this).select(".slot").boundingClientRect((function(e){t.setData({_slotWidth:px2rpx(e.width),_slotHeight:px2rpx(e.height)})})).exec(),wx.createSelectorQuery().in(this).select(".progress").boundingClientRect((function(e){t.setData({_progressHeight:px2rpx(e.height),_progressWidth:px2rpx(e.width)})})).exec()}},methods:{}});