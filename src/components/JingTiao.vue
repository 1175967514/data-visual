<template>
  <div class="jingtiao">
    <div class="content_title">
      <span class="content_text">井条</span>
      <img
          class="content_img"
          src="../assets/img/resource/icon/jingtiao.png"
          alt=""
          srcset=""
      />
    </div>
    <div class="jingtiao_body">
      <div class="jingtiaoCol">
        <div
            v-for="(item, index) in jingtiaoData.jingtiaoCol1Data"
            :key="index"
            class="jingtiao_item"
            @click="clickHandle('jingtiao', item)"
        >
          <jingtiao :data="item"></jingtiao>
        </div>

        <div
            v-for="(item, index) in cushaData.cushaDataRow2Data"
            :key="index"
            class="jingtiao_item"
            @click="clickHandle('cusha', item)"
        >
          <cusha :data="item"></cusha>
        </div>
      </div>
      <div class="jingtiaoCol">
        <div
            v-for="(item, index) in jingtiaoData.jingtiaoCol2Data"
            :key="index"
            class="jingtiao_item"
            @click="clickHandle('jingtiao', item)"
        >
          <jingtiao :data="item"></jingtiao>
        </div>
      </div>
    </div>
    <!-- 井条弹窗控件 -->
    <jingtiaoDialog ref="jingtiaoDialog"/>
    <!-- 粗纱弹窗控件 -->
    <cushaDialog ref="cushaDialog2"/>
  </div>
</template>

<script>
import jingtiaoDialog from "../views/qcs/components/dialog/dialog_jingtiao/index";
import cushaDialog from "../views/qcs/components/dialog/dialog_cusha/index";
import jingtiao from "../views/qcs/components/jingtiao";
import cusha from "../views/qcs/components/cusha";

export default {
  name: 'XiSha',
  props: {
    msg: String
  },
  components: {
    jingtiao,
    jingtiaoDialog,
    cushaDialog,
    cusha
  },
  data() {
    return {
      jingtiaoData: {
        // 1-12
        jingtiaoCol1Data: [],
        // 1-12
        jingtiaoCol2Data: [],
      },
      cushaData: {
        // 15-16
        cushaDataRow2Data: [],
      },
    };
  },
  methods: {
    closeHandle(){
      this.$parent.closeParentHandle();
    },
    clickHandle(flag, item) {
      switch (flag) {
        case "cusha":
          this.$parent.getInfoByDevSn("TXCSOML",item.devSn);
          this.$refs.cushaDialog2.showDialog(item);
          break;
        case "jingtiao":
          this.$parent.getInfoByDevSn("BINGTIAO",item.devSn);
          this.$refs.jingtiaoDialog.showDialog(item);
          break;
      }
    },
  },
  computed: {
    bingTiaoGroupState() {
      return this.$store.state.bingTiaoGroupState;
    },
    txcsomlGroupState() {
      return this.$store.state.txcsomlGroupState;
    }
  },
  watch: {
    bingTiaoGroupState: {
      immediate: true,
      handler(val) {
        this.jingtiaoData.jingtiaoCol1Data = val.data.slice(0, 12);
        this.jingtiaoData.jingtiaoCol2Data = val.data.slice(12, -1);
      }
    },
    txcsomlGroupState: {
      immediate: true,
      handler(val) {
        this.cushaData.cushaDataRow2Data = val.data.slice(14, 16);
      }
    }
  },
}
</script>

<style scoped>
</style>
