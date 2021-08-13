<template>
  <div class="jingkaimian">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span> id 组<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.status) }}<br />
        <span class="content_title">设备效率：</span>{{ data.bodyVal }}%
      </div>
      <svg
        id="精开棉"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="42"
        height="20"
        viewBox="0 0 212 94"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="91"
            y1="93"
            x2="91"
            y2="1"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.505" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <path
          :style="bodyStyle"
          id="圆角矩形_2"
          data-name="圆角矩形 2"
          class="cls-1"
          d="M5,1H181a0,0,0,0,1,0,0V93a0,0,0,0,1,0,0H5a4,4,0,0,1-4-4V5A4,4,0,0,1,5,1Z"
        />
        <path
          id="圆角矩形_2_拷贝"
           :style="headStyle"
          data-name="圆角矩形 2 拷贝"
          class="cls-2"
          d="M181,1h26a4,4,0,0,1,4,4V89a4,4,0,0,1-4,4H181a0,0,0,0,1,0,0V1A0,0,0,0,1,181,1Z"
        />
        <path
          id="形状_1"
          data-name="形状 1"
          class="cls-3"
          d="M1794,411h-26v-1h26v1Zm-42,16.707V428H1633V392h119v0.286l0.5-.29,15.49,9v18l-15.49,9Z"
          transform="translate(-1615 -363)"
        />
        <text
          id="_1"
          data-name="1"
          class="cls-4"
          transform="translate(75.93 68.324) scale(2.139)"
        >
          {{id}}
        </text>
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "jingkaimian",
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
.cls-1,
.cls-2,
.cls-3 {
  stroke: #82c4fa;
  stroke-width: 2px;
}

.cls-1 {
  fill: url(#linear-gradient);
}

.cls-2 {
  fill: #448841;
}

.cls-3 {
  fill: none;
  stroke-linejoin: round;
  fill-rule: evenodd;
}

.cls-4 {
  font-size: 28.172px;
  fill: #fff;
  font-family: "Microsoft YaHei";
  font-weight: 700;
}
</style>