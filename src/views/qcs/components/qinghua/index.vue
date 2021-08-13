<template>
  <div class="qinghua">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备编号：</span>{{ id }}<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.status) }}<br />
        <span class="content_title">设备效率：</span>{{ data.bodyVal }}%
      </div>
      <svg
        id="滤尘"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25"
        height="20"
        viewBox="0 0 115 80"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="1007"
            y1="448"
            x2="1007"
            y2="384"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <rect
                  :style="bodyStyle"
          id="矩形_5_拷贝"
          data-name="矩形 5 拷贝"
          class="cls-1"
          x="54"
          y="1"
          width="22"
          height="12"
        />
        <path
          :style="bodyStyle"
          id="矩形_1_拷贝_2"
          data-name="矩形 1 拷贝 2"
          class="cls-2"
          d="M971,384h76v64H971a4,4,0,0,1-4-4V388A4,4,0,0,1,971,384Zm79.08,64h-38.16"
          transform="translate(-964 -371)"
        />
        <text id="_11" data-name="11" class="cls-3" x="20.066" y="60.88">
          {{id}}
        </text>
        <path
           :style="headStyle"
          id="矩形_2_拷贝"
          data-name="矩形 2 拷贝"
          class="cls-4"
          d="M85,13h23a4,4,0,0,1,4,4V73a4,4,0,0,1-4,4H85a0,0,0,0,1,0,0V13A0,0,0,0,1,85,13Z"
        />
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "qinghua",
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
  fill: #3e8dcf;
}

.cls-1,
.cls-2,
.cls-4 {
  stroke: #82c4fa;
  stroke-width: 2px;
}

.cls-2,
.cls-4 {
  stroke-linejoin: round;
}

.cls-2 {
  fill-rule: evenodd;
  fill: url(#linear-gradient);
}

.cls-3 {
  font-size: 40px;
  fill: #fff;
  font-family: "Microsoft YaHei";
  font-weight: 700;
}

.cls-4 {
  fill: #519aff;
}
</style>