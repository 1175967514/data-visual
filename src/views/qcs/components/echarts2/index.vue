<template>
  <div class="echart" >
    <div ref="echarts2" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts2",
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
      var echarts2 = this.$echarts.init(this.$refs.echarts2);
      var option = {
        tooltip: {
          trigger: "axis",
          padding: 10,
                backgroundColor:'rgba(50,50,50,0.7)',
          borderColor:'#333',
          textStyle: {
            fontSize: 12,
            color: "#fff",
            lineHeight: 25,
          },
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
           let str = '<span>'+params[0].axisValueLabel+'</span></br>';
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
            str =
              str +
              "<hr />" +
              "<span>班组:甲</span></br><span>开班时间：2021-07-20</span></br><span>交班时间：2021-07-20</span>";
            return str;
          },
        },
        legend: {
          data: ["当前实际产量", "当前理论产量", "整班理论产量"],
          right: 0,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 10,
          textStyle: {
            fontSize: 10,
            color: "#316B84",
          },
        },
        color: ["#9D458F", "#6EC3F1", "#FFF888"],
       grid: {
          left: "5%",
          right: "10%",
          bottom: "18%",
          top: "12%",
          containLabel: true,
        },
        xAxis: {
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
        yAxis: {
          type: "category",
          data: ["R325AA", "R405AA", "R505AA", "R70/T40SAA"],
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
        series: [
          {
            name: "当前实际产量",
            type: "bar",
            barWidth: 5, //柱图宽度
            data: [18, 23, 29, 10],
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 15, 15, 0],
              },
            },
          },
          {
            name: "当前理论产量",
            type: "bar",
            barWidth: 5, //柱图宽度
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 15, 15, 0],
              },
            },
            data: [19, 20, 30, 12],
          },
          {
            name: "整班理论产量",
            type: "bar",
            barWidth: 5, //柱图宽度
            itemStyle: {
              //柱形图圆角，鼠标移上去效果，如果只是一个数字则说明四个参数全部设置为那么多
              normal: {
                //柱形图圆角，初始化效果
                barBorderRadius: [0, 15, 15, 0],
              },
            },
            data: [19, 23, 15, 8],
          },
        ],
      };

      echarts2.setOption(option);
      window.addEventListener("resize", function () {
        echarts2.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>