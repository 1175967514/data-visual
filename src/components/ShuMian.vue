<template>
  <div class="liumian">
    <div class="content_title">
      <span class="content_text">梳棉</span>
      <img
          class="content_img"
          src="../assets/img/resource/icon/liumian.png"
          alt=""
          srcset=""
      />
    </div>
    <div class="liumian_body">
      <div class="liumianRol">
        <div
            v-for="(item, index) in liumianData.liumianRow1Data"
            :key="index"
            class="liumian_item"
            @click="clickHandle('liumian', item)"
        >
          <liumian :data="item"></liumian>
        </div>
      </div>
      <div class="liumianRol">
        <div
            v-for="(item, index) in liumianData.liumianRow2Data"
            :key="index"
            class="liumian_item"
            @click="clickHandle('liumian', item)"
        >
          <liumian :data="item"></liumian>
        </div>
      </div>
      <div class="liumianRol">
        <div
            v-for="(item, index) in liumianData.liumianRow3Data"
            :key="index"
            class="liumian_item"
            @click="clickHandle('liumian', item)"
        >
          <liumian :data="item"></liumian>
        </div>
      </div>
      <div class="liumianRol">
        <div
            v-for="(item, index) in liumianData.liumianRow4Data"
            :key="index"
            class="liumian_item"
            @click="clickHandle('liumian', item)"
        >
          <liumian :data="item"></liumian>
        </div>
      </div>
    </div>
    <!-- 流棉弹窗控件 -->
    <liumianDialog ref="liumianDialog"></liumianDialog>
  </div>
</template>

<script>
import liumianDialog from "../views/qcs/components/dialog/dialog_liumian/index";
import liumian from "../views/qcs/components/liumian";
export default {
  name: 'XiSha',
  props: {
    msg: String
  },
  components: {
    liumian,
    liumianDialog
  },
  data() {
    return {
      liumianData: {
        // 1-8
        liumianRow1Data: [],
        // 9-16
        liumianRow2Data: [],
        // 17-24
        liumianRow3Data: [],
        // 25-32
        liumianRow4Data: [],
      },
    };
  },
  methods: {
    closeHandle(){
      this.$parent.closeParentHandle();
    },
    clickHandle(flag, item) {
      this.$parent.getInfoByDevSn("SHUMIANJI",item.devSn);
      this.$refs.liumianDialog.showDialog(item);
    },
  },
  computed: {
    shuMianJiGroupState() {
      return this.$store.state.shuMianJiGroupState;
    }
  },
  watch: {
    shuMianJiGroupState: {
      immediate: true,
      handler(val) {
        this.liumianData.liumianRow1Data = val.data1.slice(0, 8);
        this.liumianData.liumianRow2Data = val.data1.slice(8, 16);
        this.liumianData.liumianRow3Data = val.data2.slice(16, 24);
        this.liumianData.liumianRow4Data = val.data2.slice(24, 32);
      }
    }
  },
}
</script>

<style scoped>
</style>
