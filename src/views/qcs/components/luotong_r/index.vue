<template>
  <div class="luotong_r">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span>{{ id }}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.status) }}<br />
        <span class="content_title">设备效率：</span>{{ data.bodyVal }}%
      </div>
      <svg
        id="细纱机_拷贝_2"
        data-name="细纱机 拷贝 2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="10"
        height="65"
        viewBox="0 0 79 586"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="236"
            y1="695.438"
            x2="313"
            y2="695.438"
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
          d="M236,463h64V927.875H236V463Zm64,53.875v-24.75M298,475h15v41H298V475Z"
          transform="translate(-235 -391)"
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
  name: "luotong_r",
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
    this.headStyle.fill = this.getHeadColor(this.data.status);
    this.bodyStyle.fill = this.getBodyColor(this.data.bodyVal);
    this.id = this.data.id;
  },
  methods: {
    //尾灯表示车台状态（运行、停止、故障、满纱满桶、通讯失败)
    getHeadColor(status) {
      switch (status) {
        //运行
        case 0:
          return "#70B603";
        //停止
        case 1:
          return "#7F7F7F";
        //故障
        case 2:
          return "#6D000E";
        //满纱满桶
        case 3:
          return "#F9CA1E";
        //通讯失败
        case 4:
          return "#D9001B";
      }
    },
    //尾灯表示车台状态（运行、停止、故障、满纱满桶、通讯失败)
    getHeadName(status) {
      switch (status) {
        //运行
        case 0:
          return "运行";
        //停止
        case 1:
          return "停止";
        //故障
        case 2:
          return "故障";
        //满纱满桶
        case 3:
          return "满纱满桶";
        //通讯失败
        case 4:
          return "通讯失败";
      }
    },
    //车身颜色渐变表示车台当前效率范围
    getBodyColor(status) {
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

.luotong_r {
  width: 10px;
}
</style>