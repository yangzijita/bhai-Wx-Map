//logs.js
const util = require('../../utils/util.js')
var click = true
Page({
  data: {
    //初始化为学院坐标  地图标记
    latitude: 39.262737,
    longitude: 117.362605,
    hospital: true,
    scale: 16,
  },
/****************************************校 门***************************************** */
  hx_door: function () {
   
    var maps = [39.263045, 117.362487]
    this.setData({
      hx_door:true,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: maps[0], //经度
      longitude: maps[1], //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: maps[0],
        longitude:maps[1],
        width: 20,
        height: 20
      }]
    })
  },
 /****************************************餐饮***************************************** */
  hx_canteen: function () {
    this.setData({
      hx_door: false,
      hx_canteen: true,
      hx_supermarket: false,
      hx_teach: false, 
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 39.264538,  /**大食堂 */
      longitude: 117.364093, 
      scale: 19,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 39.264538,  /**大食堂 */
        longitude: 117.364093, 
        width: 20,
        height: 20
      }/*, {
        iconPath: '../images/hxLocation.png',
          latitude: 38.332880,
          longitude: 114.773140,
        width: 20,
        height: 20
      }*/

      ]
    })
  },
 /****************************************超市***************************************** */
  hx_supermarket: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: true,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 39.264484, //经度
      longitude: 117.364544, //纬度
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',   //大超市
        latitude: 39.264484, //经度
        longitude: 117.364544, //纬度
        width: 20,
        height: 20
      }
      //, {
      //   iconPath: '../images/hxLocation.png',   //进门超市
      //     latitude: 38.330990, 
      //     longitude: 114.772740,
      //   width: 20,
      //   height: 20
      // }

      ]
    })
  },
  /****************************************教学楼***************************************** */
  hx_teach: function () {
    this.setData({
      hx_door: false, 
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: true,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: 39.263810, 
      longitude: 117.360840, 
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',   //教学楼1
        latitude: 39.263810,
        longitude: 117.360840,
        width: 20,
        height: 20
      }, {
        iconPath: '../images/hxLocation.png',   //教学楼2
          latitude: 39.262945,
          longitude: 117.359691,
        width: 20,
        height: 20
      }/*,{
          iconPath: '../images/hxLocation.png',   //实验楼1
          latitude: 38.330038,
          longitude: 114.770839,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',   //实验楼2
          latitude: 38.330607, 
          longitude: 114.769734,
          width: 20,        117.359845,
          height: 20
        }*/, {
          iconPath: '../images/hxLocation.png',   //办公楼    
          latitude: 39.262864,
          longitude: 117.359845,
          width: 20,
          height: 20
        }

      ]
    })
  },

  /****************************************医 务 室***************************************** ,*/
  hx_hospital: function () {
    var maps = [39.263209,117.363852]
    this.setData({    
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: true,
      hx_playground: false,
      hx_library: false,
      hx_dorm: false,
      latitude: maps[0], //经度
      longitude: maps[1], //纬度
      scale: 20,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: maps[0],
        longitude: maps[1],
        width: 20,
        height: 20
      }]
    })
  },
  /****************************************体 育 场***************************************** */
  hx_playground: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: true,
      hx_library: false,
      hx_dorm: false,
      latitude: 39.262698,
      longitude: 117.364753,
      scale: 18, 
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 39.262698,
        longitude: 117.364753,
        width: 20,
        height: 20       
      },
        {
          iconPath: '../images/hxLocation.png',
          latitude: 39.26259,
          longitude: 117.363595,   /**篮球场 */
          width: 20,
          height: 20
        }]
    })
  },
  /****************************************图 书 馆***************************************** */
  hx_library: function () {
    this.setData({
      hx_door: false, 
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: true,
      hx_dorm: false,
      latitude: 39.26347,  /**图书馆 */
      longitude: 117.360403,
      scale: 20,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 39.26347,  /**图书馆 */
        longitude: 117.360403,
        width: 20,
        height: 20
      }]
    })
  },

  /**************************************** 宿 舍***************************************** */
  hx_dorm: function () {
    this.setData({
      hx_door: false,
      hx_canteen: false,
      hx_supermarket: false,
      hx_teach: false,
      hx_hospital: false,
      hx_playground: false,
      hx_library: false, 
      hx_dorm: true,
      latitude: 39.264351,  /**活动中心宿舍楼*/
      longitude: 117.362999, 
      scale: 18,
      markers: [{
        iconPath: '../images/hxLocation.png',
        latitude: 39.264351,  /**学生公寓1 */
        longitude: 117.362999, 
        width: 20,
        height: 20
      }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263931,   /**学生公寓2 */
          longitude: 117.362774, 
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.26369,   /**学生公寓3 */
          longitude: 117.362929,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263499,   /**学生公寓4 */
          longitude: 117.363117,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263964,   /**学生公寓5 */
          longitude: 117.362093,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263649,   /**学生公寓6 */
          longitude: 117.362318,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263449,   /**学生公寓4 */
          longitude: 117.362511,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263229,   /**学生公寓4 */
          longitude: 117.36257,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263441,   /**学生公寓4 */
          longitude: 117.361846,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263047,   /**学生公寓4 */
          longitude: 117.362114,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.262436,   /**学生公寓4 */
          longitude: 117.362076,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.263765,   /**学生公寓4 */
          longitude: 117.360371,
          width: 20,
          height: 20
        }, {
          iconPath: '../images/hxLocation.png',
          latitude: 39.264077,   /**学生公寓4 */
          longitude: 117.361063,
          width: 20,
          height: 20
        },{
          iconPath: '../images/hxLocation.png',
          latitude: 39.263142,  /**活动中心宿舍楼*/
          longitude: 117.363423, 
          width: 20,
          height: 20
        },{
          iconPath: '../images/hxLocation.png',
          latitude: 39.264488,  /**学生公寓洗浴中心 */
          longitude: 117.364946,
          width: 20,
          height: 20
        }
      
      
      ]
    })
  },
  onShow: function () {
    this.setData({
      mapheight: 650  //设置地图高度
    })
    this.setData({
      icon: "∨",
      bootom: 0
    })
    
  },
  onShareAppMessage: function () {
    /**用户点击分享 */
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  /**go go go*/
  go: function (e) {
    var id = e.currentTarget.id; //获取id
    switch (id) {
      /*大门*/
      case "door1": 
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.263045,
          longitude: 117.362487,
          scale: 25
        })
        break; 
      /*华信餐饮*/
      case "canteen1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.264538,  /**大食堂 */
          longitude: 117.364093,    
          scale: 25
        })
        break;
      // case "canteen2":
      //   wx.openLocation({ /*使用微信内置地图查看位置*/
      //     latitude: 38.3341671,/**小食堂*/
      //     longitude: 114.770241,
      //     scale: 25
      //   })
      //   break;
        /*华信超市*/
      case "supermarket1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.264484, //经度
          longitude: 117.364544, //纬度
          scale: 25
        })
        break;
      // case "supermarket2":
      //   wx.openLocation({ /*使用微信内置地图查看位置*/
      //     latitude: 38.330990, /**进门超市*/
      //     longitude: 114.772740, 
      //     scale: 25
      //   })
      //   break;
     
     
     
     
      /**华信教学楼 */
      case "teach1":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.263810,    
          longitude: 117.360840,
          scale: 25
        })
        break;
      case "teach2":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.262949,
          longitude: 117.360039,
          scale: 25
        })
        break;
      case "teach3":
        wx.openLocation({ /*使用微信内置地图查看位置*/
          latitude: 39.262864,
          longitude: 117.359845,
          scale: 25
        })
        break;
      // case "teach4":
      //   wx.openLocation({ /*使用微信内置地图查看位置*/
      //     latitude: 38.330607,
      //     longitude: 114.769734,
      //     scale: 25
      //   })
      //   break;
      // case "teach5":
      //   wx.openLocation({ /*使用微信内置地图查看位置*/
      //     latitude: 38.330308,
      //     longitude: 114.772829,
      //     scale: 25
      //   })
      //   break; ,
      /**华信医务室 */
      case "hospital1":
        wx.openLocation({
          latitude: 39.263209,
          longitude: 117.363852,
          scale: 25
        })
        break;
      /**华信体育场 */
      case "playground1":
        wx.openLocation({
          latitude: 39.262698,
          longitude: 117.364753,
          scale: 25
        })        
        break;
      case "playground2":
        wx.openLocation({
          latitude: 39.262598, 
          longitude: 117.363616,
          scale: 25
        })
        break;
     /**华信图书馆*/
      case "library1": 
        wx.openLocation({
          latitude: 39.26347,  /**图书馆 */
          longitude: 117.360403,
          scale: 25
        })
        break;
      /**宿舍楼*/
      case "dorm1":
        wx.openLocation({
          latitude: 39.264351,  /**学生公寓1 */
          longitude: 117.362999,  
          scale: 25
        })
        break; 
      case "dorm2":
        wx.openLocation({
          latitude: 39.263931,   /**学生公寓2 */
          longitude: 117.362774, 
          scale: 25
        })
        break;
      case "dorm3":
        wx.openLocation({
          latitude: 39.26369,   /**学生公寓3 */
          longitude: 117.362929,

          scale: 25
        })
        break;  
      case "dorm4":
        wx.openLocation({
          latitude: 39.263499,   /**学生公寓4 */
          longitude: 117.363117,
          scale: 25
        })
        break;
      case "dorm5":
        wx.openLocation({ 
          latitude: 39.263964,   /**学生公寓5 */
          longitude: 117.362093,
          scale: 25
        })
        break;
      case "dorm6":
        wx.openLocation({
          latitude: 39.263649,   /**学生公寓6 */
          longitude: 117.362318,
          scale: 25
        })
        break;
      case "dorm7":
        wx.openLocation({
          latitude: 39.263449,   /**学生公寓4 */
          longitude: 117.362511,
          scale: 25
        })
        break;
      case "dorm8":
        wx.openLocation({
          latitude: 39.263229,   /**学生公寓4 */
          longitude: 117.36257,
          scale: 25
        })
        break;
      case "dorm9":
        wx.openLocation({
          latitude: 39.263441,   /**学生公寓4 */
          longitude: 117.361846,
          scale: 25
        })
        break;
      case "dorm10":
        wx.openLocation({
          latitude: 39.263047,   /**学生公寓4 */
          longitude: 117.362114,
          scale: 25
        })
        break;
      case "dorm11":
        wx.openLocation({
          latitude: 39.262436,   /**学生公寓4 */
          longitude: 117.362076,
          scale: 25
        })
        break;
      case "dorm12":
        wx.openLocation({
          latitude: 39.263765,   /**学生公寓4 */
          longitude: 117.360371,
          scale: 25
        })
        break;
      case "dorm13":
        wx.openLocation({
          latitude: 39.264077,   /**学生公寓4 */
          longitude: 117.361063,
          scale: 25
        })
        break;
      
      case "dorm14":
        wx.openLocation({
          latitude: 39.263142,  /**活动中心宿舍楼*/
          longitude: 117.363423, 
          scale: 25
        })
        break;
      case "dorm15":
        wx.openLocation({
          latitude: 39.264488,  /**学生公寓洗浴中心 */
          longitude: 117.364946, 
          scale: 25
        })
        break;

    }
  }
})


