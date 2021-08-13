<template>
  <div class="echart">
    <div ref="echarts10" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts10",
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
      var echarts10 = this.$echarts.init(this.$refs.echarts10);

      var option = {
        tooltip: {
          trigger: "item",
            backgroundColor: "rgba(50,50,50,0.7)",
          borderColor: "#333",
          textStyle: {
            fontSize: 10,
            color: "#fff",
          },
        },
        legend: {
          orient: "vertical",
          right: 0,
          bottom: 0,
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 4,
          textStyle: {
            fontSize: 6,
            color: "#316B84",
          },
        },
        color: [
          "#E7C4FF",
          "#C487F0",
          "#FD6B70",
          "#893A41",
          "#9F2A2F",
          "#AE0F1A",
          "#AE2B2F"
        ],

        series: [
          {
            name: "",
            type: "pie",
            center: ["40%", "55%"],
            radius: ["55%", "60%"],
            label: {
              fontSize: 8,
              color: "#316B84",
              formatter: "{per|{d}%}\n{b}",
              rich: {
                per: {
                  fontSize: 8,
                  fontFamily: "electronicFont",
                },
              },
            },

            labelLine: {
              show: true,
              length: 3,
              length2: 3,
            },
            emphasis: {
              label: {
                show: true,
              },
            },

            data: [
              { value: 1048, name: "R32A55-5" },
              { value: 735, name: "R40A55-5" },
              { value: 580, name: "R32SAA-5" },
              { value: 484, name: "R32A55-3" },
              { value: 300, name: "R32A55-2" },
              { value: 300, name: "R42A55-2" },
            ],
          },
          {
            name: "",
            type: "pie",
            center: ["40%", "55%"],
            radius: ["30%", "45%"],
            animation: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },

            data: [
              { value: 1048, name: "R32A55-5" },
              { value: 735, name: "R40A55-5" },
              { value: 580, name: "R32SAA-5" },
              { value: 484, name: "R32A55-3" },
              { value: 300, name: "R32A55-2" },
              { value: 300, name: "R42A55-2" },
            ],
          },
        ],
      };

      echarts10.setOption(option);
      window.addEventListener("resize", function () {
        echarts10.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>