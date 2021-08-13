<template>
  <div class="echart">
    <div ref="echarts8" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts3",
  props: ["rowHeight"],
  data() {
    return {
      style: {
        height: 0,
      },
    };
  },
  created() {
    this.changeHeight();
  },

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
    window.addEventListener("resize", this.changeHeight);
  },
  methods: {
    changeHeight() {
      this.style.height = this.rowHeight - 180 + "px";
    },
    init() {
      var echarts8 = this.$echarts.init(this.$refs.echarts8);

      var option = {
        tooltip: {
          trigger: "axis",
          padding: 10,
            backgroundColor: "rgba(50,50,50,0.7)",
          borderColor: "#333",
          textStyle: {
            fontSize: 12,
            color: "#fff",
            lineHeight: 25,
          },
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            let str = "<span>" + params[0].axisValueLabel + "</span></br>";
            params.forEach((item) => {
              str +=
                '<span style="display:inline-block;margin-right:5px;width:10px;height:10px;left:5px;background-color:' +
                item.color +
                '"></span>' +
                item.seriesName +
                " : <span class='number'>" +
                item.value +
                "</span></br>";
            });

            return str;
          },
        },
        legend: {
          data: ["温度", "湿度"],
          itemWidth: 8,
          right: "center",
          itemHeight: 8,
          itemGap: 8,
          textStyle: {
            fontSize: 8,
            color: "#316B84",
          },
        },
        color: ["#F9565D", "#56ABFA"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "13%",
          top: "18%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["清花", "梳棉", "井条", "粗纱", "细纱", "自络"],

          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10,
              color: "#316B84",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 10,
              color: "#316B84",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#316B84",
              type: "dashed",
              width: 1,
            },
          },
        },
        series: [
          {
            name: "温度",
            type: "bar",
            barWidth: 8, //柱图宽度
            data: [12, 34, 20, 14, 15, 30],
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 10,
                color: "#fff",
                fontFamily: "electronicFont",
              },
            },
          },
          {
            name: "湿度",
            type: "bar",
            barWidth: 8, //柱图宽度
            label: {
              textStyle: {
                fontSize: 10,
                color: "#fff",
                fontFamily: "electronicFont",
              },
              show: true,
              position: "top",
            },
            data: [13, 24, 30, 11, 105, 30],
          },
        ],
      };

      echarts8.setOption(option);
      window.addEventListener("resize", function () {
        echarts8.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>