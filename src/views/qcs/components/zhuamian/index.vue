<template>
  <div class="zhuamian">
    <el-tooltip placement="top">
      <div slot="content">
        <span class="content_title">设备名称：</span> 抓棉机{{id}}组<br />
        <span class="content_title">设备状态：</span
        >{{ getHeadName(data.status) }}<br />
        <span class="content_title">设备效率：</span>{{ data.bodyVal }}%
      </div>
      <svg
        id="抓棉机"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="91"
        height="31"
        viewBox="0 0 281 92"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="159.5"
            y1="78"
            x2="159.5"
            y2="14"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#276ca7" />
            <stop offset="0.5" stop-color="#3f8fd2" />
            <stop offset="1" stop-color="#276ca7" />
          </linearGradient>
        </defs>
        <path
         :style="bodyStyle"
          id="矩形_9"
          data-name="矩形 9"
          class="cls-1"
          d="M58,14H257a4,4,0,0,1,4,4V74a4,4,0,0,1-4,4H58a0,0,0,0,1,0,0V14A0,0,0,0,1,58,14Z"
        />
        <path
          :style="headStyle"
          id="矩形_2_拷贝"
          data-name="矩形 2 拷贝"
          class="cls-2"
          d="M35,14H58a0,0,0,0,1,0,0V78a0,0,0,0,1,0,0H35a4,4,0,0,1-4-4V18A4,4,0,0,1,35,14Z"
        />
        <image
          id="圆角矩形_1_拷贝"
          data-name="圆角矩形 1 拷贝"
          width="281"
          height="92"
          xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAABcAgMAAAAnnCnvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEX///+Czv+Czv8AAACWbdApAAAAAnRSTlMAAHaTzTgAAAABYktHRAMRDEzyAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH5QgECA4eX9C9UgAAAF1JREFUWMPt1sENgDAMA8AwZDoPSzBCP0zJDtSPIs4DnJSP46rjDuSsnDN7OYPD4XA4HA7nf053xkmsuivozPW7BofD4bxxduvDVM/v9r84HA6Hw+FwvuMkll3MeQDRcDPi8Z+6kAAAAABJRU5ErkJggg=="
        />
        <text
          id="抓棉机1租"
          class="cls-3"
          transform="translate(78.168 57.911) scale(1.245)"
        >
          抓棉机{{id}}组
        </text>
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "zhuamian",
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
.cls-2 {
  stroke: #82c4fa;
  stroke-linejoin: round;
  stroke-width: 2px;
}

.cls-1 {
  fill: url(#linear-gradient);
}

.cls-2 {
  fill: #519aff;
}

.cls-3 {
  font-size: 28.172px;
  fill: #fff;
  font-family: "Microsoft YaHei";
  font-weight: 700;
}
</style>