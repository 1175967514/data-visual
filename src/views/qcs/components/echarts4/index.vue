<template>
  <div class="echart">
    <div ref="echarts4" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts3",
  data() {
    return {};
  },

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      var echarts4 = this.$echarts.init(this.$refs.echarts4);

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
          data: ["计划开台数", "实际运行车台", "车间总台数"],
          itemWidth: 6,
          left: 0,
          itemHeight: 6,
          itemGap: 8,
          textStyle: {
            fontSize: 8,
            color: "#316B84",
          },
        },
        color: ["#65FCFF", "#FFFD8A", "#156A8E"],
        grid: {
          left: "5%",
          right: "10%",
          bottom: "18%",
          top: "12%",
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
            name: "计划开台数",
            type: "bar",
            barWidth: 5, //柱图宽度
            data: [182, 234, 290, 104, 105, 300],
          },
          {
            name: "实际运行车台",
            type: "bar",
            barWidth: 5, //柱图宽度

            data: [193, 234, 310, 121, 105, 300],
          },
          {
            name: "车间总台数",
            type: "bar",
            barWidth: 5, //柱图宽度

            data: [193, 234, 131, 121, 105, 300],
          },
        ],
      };

      echarts4.setOption(option);
      window.addEventListener("resize", function () {
        echarts4.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>