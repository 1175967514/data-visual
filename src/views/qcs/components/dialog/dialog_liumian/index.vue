<template>
  <div class="dialog">
    <!-- 络筒弹窗控件 -->
    <el-dialog :title="info.title" :visible.sync="Dialog" @close="this.closeDialog">
      <el-row>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <span class="title"> 当前状态：{{info.stateCode}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 车台号：{{info.devSn}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 品种/定量：</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 总产：{{info.zcd}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 产量：{{info.cl}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 当前产量：</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 棉箱喂棉速度：{{info.mxwmsd}}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 刺辊速度：{{info.cgzs}}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class="echarts">
                <div
                  ref="lulotongEcharts1"
                  style="width: 100%; height: 100%"
                ></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row>
            <el-col :span="24">
              <div class="echarts">
                <div
                  ref="lulotongEcharts2"
                  style="width: 100%; height: 100%"
                ></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-row>
            <el-col :span="24">
              <span class="title">标准压力设定：{{info.bzylsd}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 开松辊转速：{{info.ksgzs}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 盖板速度：{{info.gbsd}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 剩余时间：{{info.sysj}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 当前棉箱压力：{{info.dqmxyl}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 当前棉层变化：{{info.dqmcbh}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 锡林速度：{{info.xlsd}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 道夫速度：{{info.dfzs}}</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <span class="title"> 挡车工：</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>专件更换</span>
            </div>
            <el-table
              border
              :data="tableData"
              style="width: 100%"
              height="150"
              size="mini"
            >
              <el-table-column prop="code" label="专件编码" width="80">
              </el-table-column>
              <el-table-column prop="desc" label="专件描述" width="80">
              </el-table-column>
              <el-table-column prop="date" label="上车时间" width="150">
              </el-table-column>
              <el-table-column prop="num" label="数量" width="50">
              </el-table-column>
              <el-table-column prop="day" label="剩余天数" width="70">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>维护计划</span>
            </div>
            <el-table
              border
              :data="table1Data"
              style="width: 100%"
              height="150"
              size="mini"
            >
              <el-table-column prop="whlx" label="维护类型" width="100">
              </el-table-column>
              <el-table-column prop="dqjh" label="当前计划" width="100">
              </el-table-column>
              <el-table-column prop="sfwc" label="是否完成" width="80">
              </el-table-column>
              <el-table-column prop="xcjh" label="下次计划" width="100">
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {
      info:{},
      Dialog: false,
      title: "",
      data: "",
      tableData: [
        {
          code: "ZK101",
          desc: "抓棉",
          date: "2021-08-03 15:20:06",
          num: 100,
          day: 5,
        },
        {
          code: "ZK101",
          desc: "抓棉",
          date: "2021-08-03 15:20:06",
          num: 100,
          day: 5,
        },

        {
          code: "ZK101",
          desc: "抓棉",
          date: "2021-08-03 15:20:06",
          num: 100,
          day: 5,
        },

        {
          code: "ZK101",
          desc: "抓棉",
          date: "2021-08-03 15:20:06",
          num: 100,
          day: 5,
        },
      ],
      table1Data: [
        {
          whlx: "保养及维护",
          dqjh: "2021-07-31",
          sfwc: "否",
          xcjh: "2021-07-31",
        },
        {
          whlx: "保养及维护",
          dqjh: "2021-07-31",
          sfwc: "否",
          xcjh: "2021-07-31",
        },
        {
          whlx: "保养及维护",
          dqjh: "2021-07-31",
          sfwc: "否",
          xcjh: "2021-07-31",
        },
        {
          whlx: "保养及维护",
          dqjh: "2021-07-31",
          sfwc: "否",
          xcjh: "2021-07-31",
        },
        {
          whlx: "保养及维护",
          dqjh: "2021-07-31",
          sfwc: "否",
          xcjh: "2021-07-31",
        },
      ],
    };
  },

  mounted() {},
  computed: {
    shuMianJiNewestState() {
      return this.$store.state.shuMianJiNewestState;
    }
  },
  watch: {
    shuMianJiNewestState: {
      immediate: true,
      handler(val) {
        this.info = {...this.info,...val.data}
        this.info.title = val.data.devSn+ "号流棉机JWF1029 详情";
        this.info.stateCode = this.getHeadName(val.data.stateCode);
      }
    }
  },
  methods: {
    getHeadName(stateCode) {
      switch (parseInt(stateCode)) {
          //运行
        case 1:
          return "运行";
          //停止
        case 2:
          return "停止";
          //故障
        case 3:
          return "故障";
          //满纱满桶
        case 4:
          return "满纱满桶";
          //通讯失败
        case 5:
          return "通讯故障";
      }
    },
    closeDialog(){
      this.$parent.closeHandle();
    },
    showDialog(data) {
      this.data = data;
      this.title = data.id + "号流棉机JWF1029 详情";
      this.Dialog = true;
      this.$nextTick(() => {
        this.init1();
        this.init2();
      });
    },
    init1() {
      var lulotongEcharts1 = this.$echarts.init(this.$refs.lulotongEcharts1);
      var option = {
        series: [
          {
            type: "gauge",

            center: ["50%", "50%"],
            radius: "80%",
            min: 0,
            max: 200,

            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 15,
                color: [[1, "#1D3E52"]],
              },
            },

            progress: {
              roundCap: true,
              show: true,
              width: 18,
            },

            axisTick: {
              show: true,
            },
            splitLine: {
              show: false,
              length: 15,
            },

            axisLabel: {
              distance: 5,
              color: "#62C6F3",
              fontSize: 9,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 18,
              itemStyle: {
                color: "#FAC858",
              },
            },

            // detail: {
            //   width: 20,
            //   height: 14,
            //   fontSize: 14,
            //   color: "#fff",
            //   backgroundColor: "auto",
            //   borderRadius: 3,
            //   formatter: "{value}%",
            // },

            data: [
              {
                name: "出条速度",
                value: 70,

                title: {
                  fontSize: 12,
                  color: "#fff",
                  offsetCenter: ["-40%", "80%"],
                },
                detail: {
                 fontSize: 18,
                  offsetCenter: ["-40%", "115%"],
                  width: 60,
                  height: 14,
                  backgroundColor: "auto",
                  color: "rgb(241,241,64)",
                  formatter: "{value}r/min",
                },
              },
              {
                name: "剩余长度",
                value: 50,

                title: {
                  fontSize: 12,
                  color: "#fff",
                  offsetCenter: ["40%", "80%"],
                },
                 detail: {
                  fontSize: 18,
                  offsetCenter: ["40%", "115%"],
                  width: 40,
                  height: 14,
                  backgroundColor: "auto",
                  color: "rgb(241,241,64)",
                  fontFamily: "electronicFont",
                  formatter: "{value}m",
                },
              },
            ],
          },
        ],
      };

      lulotongEcharts1.setOption(option);
      window.addEventListener("resize", function () {
        lulotongEcharts1.resize();
      });
    },
    init2() {
      var lulotongEcharts2 = this.$echarts.init(this.$refs.lulotongEcharts2);
      var option = {
        series: [
          {
            type: "gauge",

            center: ["50%", "50%"],
            radius: "80%",
            min: 0,
            max: 100,
            itemStyle: {
              color: "rgb(128,246,217)",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2,
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 15,
                color: [[1, "#1D3E52"]],
              },
            },

            progress: {
              roundCap: true,
              show: true,
              width: 18,
            },

            axisTick: {
              show: true,
            },
            splitLine: {
              show: false,
              length: 15,
            },

            axisLabel: {
              distance: 5,
              color: "#62C6F3",
              fontSize: 9,
            },
            anchor: {
              show: false,
            },

            title: {
              offsetCenter: [0, "85%"],
              fontSize: 20,
              color: "#58D9F9",
            },
            detail: {
              valueAnimation: true,
              fontSize: 28,
              fontFamily: "electronicFont",
              offsetCenter: [0, "60%"],
              color: "rgb(241,241,64)",
              formatter: function (value) {
                return Math.round(value) + "%";
              },
            },

            data: [
              {
                name: "效率",
                value: 70,
              },
            ],
          },
        ],
      };

      lulotongEcharts2.setOption(option);
      window.addEventListener("resize", function () {
        lulotongEcharts2.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
}
.echarts {
  width: 100%;
  height: 250px;
}
.title {
  color: rgb(111, 155, 184);
}
</style>