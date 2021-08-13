<template>
  <div class="cusha">
    <div class="content_title">
      <span class="content_text">粗纱</span>
      <img
          class="content_img"
          src="../assets/img/resource/icon/cusha.png"
          alt=""
          srcset=""
      />
    </div>
    <div class="cusha_body">
      <div
          v-for="(item, index) in cushaData.cushaDataRow1Data"
          @click="clickHandle(item)"
          :key="index"
          class="cusha_item"
      >
        <cusha :data="item"></cusha>
      </div>
    </div>
    <!-- 粗纱弹窗控件 -->
    <cushaDialog ref="cushaDialog"></cushaDialog>
  </div>
</template>

<script>
import cushaDialog from "../views/qcs/components/dialog/dialog_cusha/index";
import cusha from "../views/qcs/components/cusha";
export default {
  name: 'XiSha',
  props: {
    msg: String
  },
  components: {
    cusha,
    cushaDialog
  },
  data() {
    return {
      cushaData: {
        // 1-14
        cushaDataRow1Data: [],
        // 15-16
        cushaDataRow2Data: [],
      },
    };
  },
  computed: {
    txcsomlGroupState() {
      return this.$store.state.txcsomlGroupState;
    }
  },
  watch: {
    txcsomlGroupState: {
      immediate: true,
      handler(val) {
        this.cushaData.cushaDataRow1Data = val.data.slice(0, 14);
      }
    }
  },
  methods: {
    closeHandle(){
      this.$parent.closeParentHandle();
    },
    clickHandle(item) {
      this.$parent.getInfoByDevSn("TXCSOML",item.devSn);
      this.$refs.cushaDialog.showDialog(item);
    },
  }
}
</script>

<style scoped>
</style>
