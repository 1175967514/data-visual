<template>
  <div class="duocang">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span>  {{id}}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.status) }}<br />
        <span class="content_title">设备效率：</span>{{ data.bodyVal }}%
      </div>
      <svg
        id="多仓"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="16"
        height="20"
        viewBox="0 0 92 98"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="35"
            y1="95"
            x2="35"
            y2="3"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <rect
          id="圆角矩形_2"
           :style="bodyStyle"
          data-name="圆角矩形 2"
          class="cls-1"
          x="3"
          y="3"
          width="64"
          height="92"
          rx="4"
          ry="4"
        />
        <text id="_4" data-name="4" class="cls-2" x="22.448" y="64.693">


          {{id}}
        </text>
        <path
           :style="headStyle"
          id="矩形_6"
          data-name="矩形 6"
          class="cls-3"
          d="M1549,376l20,20v28l-20,20V376Z"
          transform="translate(-1480 -361)"
        />
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "duocang",
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
.cls-3 {
  stroke: #82c4fa;
  stroke-linejoin: round;
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
  fill-rule: evenodd;
}
</style>