import validator from '../behaviors/validator';

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['l-class', 'l-img-class', 'l-title-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  bahaviors: [validator],
  properties: {
    image: String,
    title: String,
    describe: String,
    plaintext: Boolean,
    full: Boolean,
    position: {
      type: String,
      value: 'left',
      options: ['left', 'right']
    },
    type: {
      type: String,
      value: 'primary',
      options: ['primary', 'avatar']
    },
    imageMode: {
      type: String,
      value: 'scaleToFill'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
});