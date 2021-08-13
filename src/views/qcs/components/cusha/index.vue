<template>
  <div class="cusha">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span>{{ id }}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.stateCode) }}<br />
        <span class="content_title">设备效率：</span>{{ data.xiaolv*100 }}%<br />
        <span class="content_title">更新时间：{{data.time}}</span>
      </div>
      <svg
        id="粗纱机"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="40"
        height="13"
        viewBox="0 0 215 66"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="120"
            y1="65"
            x2="120"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <path
          :style="bodyStyle"
          id="矩形_8"
          data-name="矩形 8"
          class="cls-1"
          d="M26,1H210a4,4,0,0,1,4,4V61a4,4,0,0,1-4,4H26a0,0,0,0,1,0,0V1A0,0,0,0,1,26,1Z"
        />
        <text id="_11" data-name="11" class="cls-2" x="96.991" y="48.709">
          {{ id }}
        </text>
        <path
          :style="headStyle"
          id="矩形_2_拷贝"
          data-name="矩形 2 拷贝"
          class="cls-3"
          d="M5,1H28a0,0,0,0,1,0,0V65a0,0,0,0,1,0,0H5a4,4,0,0,1-4-4V5A4,4,0,0,1,5,1Z"
        />
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "cusha",
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
.cls-3 {
  stroke: #82c4fa;
  stroke-width: 2px;
}

.cls-1 {
  fill: url(#linear-gradient);
}

.cls-2 {
  font-size: 40px;
  fill: #fff;
  font-family: "Microsoft YaHei";
  font-weight: 700;
}

.cls-3 {
  fill: #519aff;
}
</style>