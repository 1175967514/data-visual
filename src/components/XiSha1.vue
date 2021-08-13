<template>
  <div class="xisha_1">
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
      <div class="xisha_row1">
        <div
            v-for="(item, index) in xishaData.xishaRow1Data"
            :key="index"
            @click="clickHandle(item)"
        >
          <xisha :data="item"></xisha>
        </div>
      </div>
    </div>
    <xishaDialog ref="xishaDialog"/>
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
        // 148-176
        xishaRow1Data: [],
      },
      xishaDialog: false,
    };
  },
  components: {
    xisha,
    xishaDialog
  },
  created() {
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
        this.xishaData.xishaRow1Data = val.data.slice(147, -1);
      }
    }
  },
  methods: {
    closeHandle(){
      this.$parent.closeParentHandle();
    },
    clickHandle(item) {
      console.log("点击西撒")
      console.log(item)
      // this.$store.commit('optNewestDevSn', item)
      this.$parent.getInfoByDevSn("XISHA",item.devSn);
      this.$refs.xishaDialog.showDialog(item);
    },
  }
}
</script>

<style scoped>

</style>
