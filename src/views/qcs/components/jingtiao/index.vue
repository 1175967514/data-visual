<template>
  <div class="jingtiao">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备名称：</span> 头井条机{{ id }}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.stateCode) }}<br />
        <span class="content_title">设备效率：</span>{{ data.xiaolv*100 }}%<br />
        <span class="content_title">更新时间：{{data.time}}</span>
      </div>
      <svg
        id="并条机"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="53"
        height="15"
        viewBox="0 0 223 66"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="464.5"
            y1="462"
            x2="464.5"
            y2="398"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <path
          :style="bodyStyle"
          id="矩形_1_拷贝_2"
          data-name="矩形 1 拷贝 2"
          class="cls-1"
          d="M463,430c0,12.15,7.611,22,17,22v10H449V398h31v10C470.611,408,463,417.85,463,430Z"
          transform="translate(-431 -397)"
        />
        <rect
          :style="bodyStyle"
          id="矩形_5"
          data-name="矩形 5"
          class="cls-2"
          x="202"
          y="22"
          width="12"
          height="22"
        />
        <rect
          :style="bodyStyle"
          id="矩形_4"
          data-name="矩形 4"
          class="cls-3"
          x="32"
          y="29"
          width="190"
          height="8"
        />
        <text id="头并条机14" class="cls-4" x="57.343" y="22.47">
          头井条机{{id}}
        </text>
        <path
          :style="headStyle"
          id="矩形_2_拷贝"
          data-name="矩形 2 拷贝"
          class="cls-5"
          d="M5,1H19a0,0,0,0,1,0,0V65a0,0,0,0,1,0,0H5a4,4,0,0,1-4-4V5A4,4,0,0,1,5,1Z"
        />
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "jingtiao",
  props: ["data"],
  data() {
    return {
      headStyle: {
        fill: "",
      },
      bodyStyle: {
        fill: "",
      },
      id: "",
    };
  },

  mounted() {
    this.headStyle.fill = this.getHeadColor(this.data.stateCode);
    this.bodyStyle.fill = this.getBodyColor(this.data.xiaolv);
    this.id = this.data.devSn;
  },
  methods: {
    //尾灯表示车台状态（运行、停止、故障、满纱满桶、通讯失败)
    getHeadColor(status) {
      switch (parseInt(status)) {
        //运行
        case 1:
          return "#70B603";
        //停止
        case 2:
          return "#7F7F7F";
        //故障
        case 3:
          return "#6D000E";
        //满纱满桶
        case 4:
          return "#F9CA1E";
        //通讯失败
        case 5:
          return "#D9001B";
      }
    },
    //尾灯表示车台状态（运行、停止、故障、满纱满桶、通讯失败)
    getHeadName(status) {
      switch (parseInt(status)) {
        //运行
        case 1:
          return "运行";
        //停止
        case 2:
          return "停止";
        //故障
        case 3:
          return "故障";
        //满纱满桶
        case 4:
          return "满纱满桶";
        //通讯失败
        case 5:
          return "通讯失败";
      }
    },
    //车身颜色渐变表示车台当前效率范围
    getBodyColor(status1) {
      let status = status1*100
      if (status > 90) {
        return "#5599FE";
      } else if (90 >= status > 70) {
        return "#F9CA1E";
      } else if (70 >= status > 50) {
        return "#F56041";
      } else if (status <= 50) {
        return "#D9001B";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cls-1,
.cls-2,
.cls-3,
.cls-5 {
  stroke: #82c4fa;
  stroke-width: 2px;
}

.cls-1 {
  fill-rule: evenodd;
  fill: url(#linear-gradient);
}

.cls-2 {
  fill: none;
}

.cls-3 {
  fill: #276ca7;
}

.cls-4 {
  font-size: 26px;
  fill: #fff;
  font-family: "Microsoft YaHei";
  font-weight: 700;
}

.cls-5 {
  fill: #519aff;
}
</style>