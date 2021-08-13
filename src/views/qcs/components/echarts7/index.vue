<template>
  <div class="echart" >
    <div ref="echarts7" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts3",
  props: ['rowHeight'],
  data() {
    return {
     
    };
  },
  created() {
   
  },

  mounted() {
   
    this.$nextTick(() => {
      this.init();
    });
   
  },
  methods: {
   
    init() {
      var echarts7 = this.$echarts.init(this.$refs.echarts7);

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
          show:false
        },
        color: ["#F9565D", "#56ABFA"],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "12%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"],

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
            type: "line",
          
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
            type: "line",
          
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

      echarts7.setOption(option);
      window.addEventListener("resize", function () {
        echarts7.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>