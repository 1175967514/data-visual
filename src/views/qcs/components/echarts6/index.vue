<template>
  <div class="echart" >
    <div class="echarts6_title">
      <i class="text">总用功</i> <span class="echarts6_title_text">162</span> <span class="text">万锭用工</span>
        <span class="echarts6_title_text">2552</span>
    </div>
    <div ref="echarts6" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts3",
  data() {
    return {
     
    };
  },
  

  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  
  },
  methods: {
  
    init() {
      var echarts6 = this.$echarts.init(this.$refs.echarts6);

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
          data: ["实际用工", "万锭用工"],
          itemWidth: 8,
          right: 2,
          itemHeight: 8,
          itemGap: 8,
          textStyle: {
            fontSize: 10,
            color: "#316B84",
          },
        },
        color: ["#298FFC", "#5AFFC6"],
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
            name: "实际用工",
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
            name: "万锭用工",
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

      echarts6.setOption(option);
      window.addEventListener("resize", function () {
        echarts6.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>