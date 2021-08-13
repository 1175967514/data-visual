<template>
  <div class="xisha_2">
    <div class="content_title">
      <span class="content_text">细纱</span>
      <img
          class="content_img"
          src="../assets/img/resource/icon/xisha.png"
          alt=""
          srcset=""
      />
    </div>
    <div class="xisha_body">
      <div class="xisha_row2">
        <div
            v-for="(item, index) in xishaData.xishaRow2Data"
            :key="index"
            @click="clickHandle(item)"
        >
          <xisha :data="item"></xisha>
        </div>
      </div>
      <div class="xisha_row3">
        <div
            v-for="(item, index) in xishaData.xishaRow3Data"
            :key="index"
            @click="clickHandle(item)"
        >
          <xisha :data="item"></xisha>
        </div>
      </div>
      <div class="xisha_row4">
        <div
            v-for="(item, index) in xishaData.xishaRow4Data"
            :key="index"
            @click="clickHandle(item)"
        >
          <xisha :data="item"></xisha>
        </div>
      </div>
    </div>
    <xishaDialog ref="xishaDialog2"/>
  </div>
</template>

<script>
import xisha from "../views/qcs/components/xisha";
import xishaDialog from "../views/qcs/components/dialog/dialog_xisha/index";

export default {
  name: 'XiSha',
  props: {
    msg: String
  },
  data() {
    return {
      loading: true,
      xishaData: {
        // 1-49
        xishaRow2Data: [],
        // 50-98
        xishaRow3Data: [],
        // 99-147
        xishaRow4Data: [],
      },
      xishaDialog: false,
    };
  },
  components: {
    xisha,
    xishaDialog
  },
  computed: {
    xiShaGroupState() {
      return this.$store.state.xiShaGroupState;
    }
  },
  watch: {
    xiShaGroupState: {
      immediate: true,
      handler(val) {
        this.xishaData.xishaRow2Data = val.data.slice(0, 49);
        this.xishaData.xishaRow3Data = val.data.slice(49, 98);
        this.xishaData.xishaRow4Data = val.data.slice(98, 147);
      }
    }
  },
  methods: {
    closeHandle(){
      this.$parent.closeParentHandle();
    },
    clickHandle(item) {
      this.$parent.getInfoByDevSn("XISHA",item.devSn);
      this.$refs.xishaDialog2.showDialog(item);
    },
  }
}
</script>

<style scoped>

</style>
