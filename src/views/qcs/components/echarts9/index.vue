<template>
  <div class="echart" style="width: 100%; height: 100%">
    <div ref="echarts9" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts9",
  props: ["rowHeight"],
  data() {
    return {
      style: {
        height: 0,
      },
    };
  },
  created() {},

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      var echarts9 = this.$echarts.init(this.$refs.echarts9);

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
                "千瓦时</span></br>";
            });

            return str;
          },
        },

        color: ["#F04F36"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
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
            name: "电量消耗",
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
        ],
      };

      echarts9.setOption(option);
      window.addEventListener("resize", function () {
        echarts9.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>