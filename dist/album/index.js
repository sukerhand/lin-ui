import validator from"../behaviors/validator";Component({externalClasses:["l-class","l-single-image-class","l-multi-image-class"],behaviors:[validator],properties:{urls:{type:Array},preview:{type:Boolean,value:!0},gapRow:{type:Number,value:10},gapColumn:{type:Number,value:10},singleSize:{type:Number,value:360},multipleSize:{type:Number,value:158},singleMode:{type:String,value:"aspectFit",options:["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","top left","top right","bottom left","bottom right"]},multipleMode:{type:String,value:"aspectFill",options:["scaleToFill","aspectFit","aspectFill","widthFix","heightFix","top","bottom","center","left","right","top left","top right","bottom left","bottom right"]},key:{type:String,value:"url"}},data:{newType:!0,shortSideValue:0,row:0,colum:0},lifetimes:{attached(){if(this.data.urls.length>9){const t=this.data.urls.slice(0,9);this.setData({urls:t}),console.warn("超过9张图片！")}this.preview()}},methods:{judgeType(){const t=this.data.urls;return 0==t.length||"object"==typeof t[0]},horizontalOrVertical:function(t){wx.getImageInfo({src:t,success:t=>{const e=t.width>=t.height?t.width:t.height,i=t.width>=t.height?t.height:t.width;this.setData({horizontalScreen:t.width>=t.height,shortSideValue:i*this.data.singleSize/e})}})},preview:function(){const t=this.judgeType();this.setData({newType:t});const e=this.data.urls,i=this.data.key;1==e.length&&this.horizontalOrVertical(t?e[0][i]:e[0])},onPreviewTap(t){const e=t.currentTarget.id,i=this.data.urls;let a="",l=[];const s=this.data.newType,o=this.data.key;if(s){a=i[e][o];for(let t=0;t<i.length;t++)l.push(i[t][o])}else a=i[e],l=i;let r={index:e,current:i[e],all:i};!0===this.data.preview&&wx.previewImage({current:a,urls:l}),this.triggerEvent("lintap",r,{})}}});