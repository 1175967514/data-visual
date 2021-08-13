<template>
  <div class="xisha" @click="xishaClickHandle">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span>{{ id }}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.stateCode) }}<br />
        <span class="content_title">设备效率：</span>{{ data.xiaolv*100 }}%}<br />
        <span class="content_title">更新时间：{{data.time}}</span>
      </div>
      <svg
        id="细纱机_拷贝"
        data-name="细纱机 拷贝"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="10"
        height="65"
        viewBox="0 0 66 586"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="88"
            y1="696.5"
            x2="152"
            y2="696.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="1"
            y1="560"
            x2="65"
            y2="560"
            xlink:href="#linear-gradient"
          />
        </defs>
        <path
          :style="headStyle"
          id="矩形_1"
          data-name="矩形 1"
          class="cls-1"
          d="M32,1h2A31,31,0,0,1,65,32V74a0,0,0,0,1,0,0H1a0,0,0,0,1,0,0V32A31,31,0,0,1,32,1Z"
        />
        <path
          :style="bodyStyle"
          id="矩形_1_拷贝_2"
          data-name="矩形 1 拷贝 2"
          class="cls-2"
          d="M88,464h64V929H88V464Zm64,53.875v-24.75"
          transform="translate(-87 -392)"
        />
        <text
          id="_1_1_拷贝"
          data-name="1 1 拷贝"
          class="cls-3"
          transform="translate(19.042 287.121) scale(5.24)"
        >
          {{ id.toString().substring(0, 1) }}
        </text>
        <text
          id="_1_1_拷贝"
          data-name="1 1 拷贝"
          class="cls-3"
          transform="translate(19.042 387.121) scale(5.24)"
        >
          {{ id.toString().substring(1, 2) }}
        </text>
        <text
          id="_1_1_拷贝"
          data-name="1 1 拷贝"
          class="cls-3"
          transform="translate(19.042 487.121) scale(5.24)"
        >
          {{ id.toString().substring(2, 3) }}
        </text>
        <path
          :style="bodyStyle"
          id="矩形_3"
          data-name="矩形 3"
          class="cls-4"
          d="M1,535H65a0,0,0,0,1,0,0v46a4,4,0,0,1-4,4H5a4,4,0,0,1-4-4V535A0,0,0,0,1,1,535Z"
        />
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "xisha",
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
    getHeadColor(stateCode) {
      switch (parseInt(stateCode)) {
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
    getHeadName(stateCode) {
      switch (parseInt(stateCode)) {
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
          return "通讯故障";
      }
    },
    //车身颜色渐变表示车台当前效率范围
    getBodyColor(stateCode1) {
      let stateCode = stateCode1*100
      if (stateCode > 90) {
        return "#5599FE";
      } else if (90 >= stateCode > 70) {
        return "#F9CA1E";
      } else if (70 >= stateCode > 50) {
        return "#F56041";
      } else if (stateCode <= 50) {
        return "#D9001B";
      }
    },
    //组件点击事件
     xishaClickHandle() {
      this.$emit("xishaClickHandle",this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.cls-1 {
  fill: #519aff;
}

.cls-1,
.cls-2,
.cls-4 {
  stroke: #82c4fa;
  stroke-width: 10px;
}

.cls-2 {
  fill-rule: evenodd;
  fill: url(#linear-gradient);
}

.cls-3 {
  fill: #fff;
  font-family: "Source Han Sans CN";
  font-weight: 700;
  word-break: break-all;
}

.cls-4 {
  fill: url(#linear-gradient-2);
}

.xisha {
  width: 10px;
}
</style>