<template>
  <div class="echart">
    <div ref="echarts13" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "echarts13",
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
      var echarts13 = this.$echarts.init(this.$refs.echarts13);

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
        color: ["#F7343D", "#C2003D"],

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
              { value: 1048, name: "RAA-S" },
              { value: 735, name: "R40A55-S" },
            
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
             
            ],
          },
        ],
      };

      echarts13.setOption(option);
      window.addEventListener("resize", function () {
        echarts13.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>