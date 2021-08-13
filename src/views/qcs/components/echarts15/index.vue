<template>
  <div class="echart">
    <div ref="echarts15" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts14",
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
      var echarts15 = this.$echarts.init(this.$refs.echarts15);

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

        color: [
          "#0F38C3",
          "#8EDAF2",
          "#43CCFA",
          "#14ABEC",
          "#1C8CB3",
          "#1562C4",
          "#1138C3",
        ],

        series: [
          {
            name: "",
            type: "pie",
            center: ["50%", "55%"],
            radius: ["60%", "65%"],
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
              length: 8,
              length2: 10,
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
            center: ["50%", "55%"],
            radius: ["35%", "50%"],
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

      echarts15.setOption(option);
      window.addEventListener("resize", function () {
        echarts15.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>