// eslint-disable-next-line
<!--{{this.$store.state}}}-->
<template>
  <div class="index">
    <button @click="clickButton2()">关闭轮询</button>
    <div class="header">
      <h1>工业互联网纺织大数据管理中心</h1>
    </div>
    <div class="content" :style="contentStyle">
      <div class="row1Style">
        <div class="row">
          <div class="box">
            <div class="boxItem"></div>
            <div class="content_body">
              <div class="luotong">
                <div class="content_title">
                  <span class="content_text">络筒</span>
                  <img
                      class="content_img"
                      src="../../assets/img/resource/icon/luotong.png"
                      alt=""
                      srcset=""
                  />
                </div>
                <div class="luotong_body">
                  <div class="luotong_row2"></div>
                  <div class="luotong_row1">
                    <div
                        v-for="(item, index) in luotongData.luotongRow1Data"
                        :key="index"
                    >
                      <div
                          v-if="item.position == 'l'"
                          @click="clickHandle('luotong', item)"
                      >
                        <luotong_l :data="item"></luotong_l>
                      </div>
                      <div
                          v-if="item.position == 'r'"
                          @click="clickHandle('luotong', item)"
                      >
                        <luotong_r :data="item"></luotong_r>
                      </div>
                    </div>
                  </div>
                  <div class="luotong_row2">
                    <div
                        v-for="(item, index) in luotongData.luotongRow2Data"
                        :key="index"
                    >
                      <div
                          v-if="item.position == 'l'"
                          @click="clickHandle('luotong', item)"
                      >
                        <luotong_l :data="item"></luotong_l>
                      </div>
                      <div
                          v-if="item.position == 'r'"
                          @click="clickHandle('luotong', item)"
                      >
                        <luotong_r :data="item"></luotong_r>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 细纱1 -->
              <XiSha1/>
              <!-- 细纱2 -->
              <XiSha2/>
              <!-- 粗纱2 -->
              <CuSha/>
              <!-- 井条 -->
              <JingTiao/>
              <!-- 梳棉 -->
              <ShuMian/>

              <div class="qinghua">
                <div class="content_title">
                  <span class="content_text">清花</span>
                  <img
                      class="content_img"
                      src="../../assets/img/resource/icon/qinghua.png"
                      alt=""
                      srcset=""
                  />
                </div>

                <div class="qinghua_body">
                  <div class="qinghuaCol1">
                    <div
                        v-for="(item, index) in qinghuaData.qinghuaCol1Data"
                        :key="index"
                        class="qinghua_item"
                    >
                      <qinghua :data="item"></qinghua>
                    </div>
                  </div>
                  <div class="qinghuaCol2">
                    <div
                        @click="
                        clickHandle(
                          'zhuamian',
                          qinghuaData.qinghuaCol2Data.zhuamianData[0]
                        )
                      "
                    >
                      <zhuamian
                          :data="qinghuaData.qinghuaCol2Data.zhuamianData[0]"
                      ></zhuamian>
                    </div>
                    <div
                        v-for="(item, index) in qinghuaData.qinghuaCol2Data
                        .duocangData1"
                        :key="index"
                    >
                      <div class="item">
                        <div class="item1" @click="clickHandle('duocang', item)">
                          <duocang :data="item"></duocang>
                        </div>
                        <div class="item2" @click="clickHandle('kaimian', item)">
                          <jingkaimian
                              :data="
                              qinghuaData.qinghuaCol2Data.jinkaimainData1[index]
                            "
                          ></jingkaimian>
                        </div>
                      </div>
                    </div>

                    <div
                        @click="
                        clickHandle(
                          'zhuamian',
                          qinghuaData.qinghuaCol2Data.zhuamianData[1]
                        )
                      "
                    >
                      <zhuamian
                          :data="qinghuaData.qinghuaCol2Data.zhuamianData[1]"
                      ></zhuamian>
                    </div>
                    <div
                        v-for="(item, index) in qinghuaData.qinghuaCol2Data
                        .duocangData2"
                        :key="index"
                    >
                      <div class="item">
                        <div class="item1" @click="clickHandle('duocang', item)">
                          <duocang :data="item"></duocang>
                        </div>
                        <div class="item2" @click="clickHandle('kaimian', item)">
                          <jingkaimian
                              :data="
                              qinghuaData.qinghuaCol2Data.jinkaimainData2[index]
                            "
                          ></jingkaimian>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rowStyle">
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>
              <div class="box_header">
                <span class="box_header_text">当班各工序产量</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <echarts1></echarts1>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>

              <div class="box_header">
                <span class="box_header_text">细纱各品种产量</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <echarts2></echarts2>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>

              <div class="box_header">
                <span class="box_header_text">自络各品种产量</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <echarts3></echarts3>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>

              <div class="box_header">
                <span class="box_header_text">车间开台比例</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <div class="echarts_group">
                <div class="echarts4">
                  <echarts4></echarts4>
                </div>
                <div class="echarts5">
                  <echarts5></echarts5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rowStyle">
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>
              <div class="box_header">
                <span class="box_header_text">车间用工</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <echarts6></echarts6>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>
              <div class="box_header">
                <span class="box_header_text">温湿度</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <div class="echarts_group_1">
                <div class="echarts_left">
                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="pro" label=""></el-table-column>
                    <el-table-column prop="wen" label="温度" width="40">
                    </el-table-column>
                    <el-table-column prop="shi" label="湿度" width="40">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="echarts_right">
                  <div class="echarts7">
                    <echarts7></echarts7>
                  </div>
                  <div class="echarts8">
                    <echarts8></echarts8>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>
              <div class="box_header">
                <span class="box_header_text">情流当前电耗</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <div class="echarts_group_2">
                <div class="echarts_top">
                  <echarts9></echarts9>
                </div>

                <div class="echarts_bottom">
                  <div class="echarts_bottom_left">
                    <echarts10></echarts10>
                  </div>
                  <div class="echarts_bottom_right">
                    <echarts11></echarts11>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rowStyle_6">
          <div class="row">
            <div class="box">
              <div class="boxItem"></div>
              <div class="box_header">
                <span class="box_header_text">品种开台比例</span>
                <img
                    class="box_header_img"
                    src="../../assets/img/ksh33.png"
                    alt=""
                />
              </div>
              <div class="echarts_group_2">
                <div class="echarts_div">
                  <div class="echarts_item">
                    <echarts12></echarts12>
                  </div>
                  <div class="echarts_item">
                    <echarts13></echarts13>
                  </div>
                </div>
                <div class="echarts_div">
                  <div class="echarts_item">
                    <echarts14></echarts14>
                  </div>
                  <div class="echarts_item">
                    <echarts15></echarts15>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 络筒弹窗控件 -->
    <luoTongDialog ref="luoTongDialog"></luoTongDialog>
    <!-- 细纱弹窗控件 -->
    <xishaDialog ref="xishaDialog"></xishaDialog>

    <!-- 粗纱弹窗控件 -->
    <cushaDialog ref="cushaDialog"></cushaDialog>
    <!-- 井条弹窗控件 -->
    <jingtiaoDialog ref="jingtiaoDialog"></jingtiaoDialog>
    <!-- 流棉弹窗控件 -->
    <liumianDialog ref="liumianDialog"></liumianDialog>
    <!-- 抓棉弹窗控件 -->
    <zhuamianDialog ref="zhuamianDialog"></zhuamianDialog>
    <!-- 多仓弹窗控件 -->
    <duocangDialog ref="duocangDialog"></duocangDialog>
    <!-- 多仓弹窗控件 -->
    <kaimianDialog ref="kaimianDialog"></kaimianDialog>
  </div>
</template>

<script>
import echarts1 from "./components/echarts1";
import echarts2 from "./components/echarts2";
import echarts3 from "./components/echarts3";
import echarts4 from "./components/echarts4";
import echarts5 from "./components/echarts5";
import echarts6 from "./components/echarts6";
import echarts7 from "./components/echarts7";
import echarts8 from "./components/echarts8";
import echarts9 from "./components/echarts9";
import echarts10 from "./components/echarts10";
import echarts11 from "./components/echarts11";
import echarts12 from "./components/echarts12";
import echarts13 from "./components/echarts13";
import echarts14 from "./components/echarts14";
import echarts15 from "./components/echarts15";
import luotong_l from "./components/luotong_l";
import luotong_r from "./components/luotong_r";
import xisha from "./components/xisha";
import cusha from "./components/cusha";
import jingtiao from "./components/jingtiao";
import liumian from "./components/liumian";
import qinghua from "./components/qinghua";
import zhuamian from "./components/zhuamian";
import duocang from "./components/duocang";
import jingkaimian from "./components/jingkaimian";
import luoTongDialog from "./components/dialog/dialog_luotong/index";
import xishaDialog from "./components/dialog/dialog_xisha/index";
import cushaDialog from "./components/dialog/dialog_cusha/index";
import jingtiaoDialog from "./components/dialog/dialog_jingtiao/index";
import liumianDialog from "./components/dialog/dialog_liumian/index";
import zhuamianDialog from "./components/dialog/dialog_zhuamian/index";
import duocangDialog from "./components/dialog/dialog_duocang/index";
import kaimianDialog from "./components/dialog/dialog_kaimian/index";
// ===========================
import XiSha1 from "../../components/XiSha1";
import XiSha2 from "../../components/XiSha2";
import CuSha from "../../components/CuSha";
import JingTiao from "../../components/JingTiao";
import ShuMian from "../../components/ShuMian";

export default {
  data() {
    return {
      // 一级轮训定时器
      timer: '',
      // 二级轮询定时器
      secXiShaTimer: '',
      secTxcsomlTimer: '',
      secBingTiaoTimer: '',
      secShuMianJiTimer: '',
      secShuMianJiATimer: '',
      loading: true,
      luotongData: {
        luotongRow1Data: [
          {position: "l", id: 1, status: 0, bodyVal: 80},
          {position: "r", id: 2, status: 1, bodyVal: 10},
          {position: "l", id: 3, status: 2, bodyVal: 50},
          {position: "r", id: 4, status: 3, bodyVal: 70},
          {position: "l", id: 5, status: 4, bodyVal: 60},
          {position: "r", id: 6, status: 1, bodyVal: 80},
          {position: "l", id: 7, status: 3, bodyVal: 90},
          {position: "l", id: 8, status: 0, bodyVal: 80},
          {position: "r", id: 9, status: 0, bodyVal: 80},
          {position: "l", id: 10, status: 0, bodyVal: 50},
          {position: "l", id: 11, status: 3, bodyVal: 70},
          {position: "r", id: 12, status: 0, bodyVal: 85},
          {position: "l", id: 13, status: 4, bodyVal: 80},
          {position: "l", id: 14, status: 0, bodyVal: 80},
        ],
        luotongRow2Data: [
          {position: "l", id: 16, status: 0, bodyVal: 50},
          {position: "l", id: 17, status: 3, bodyVal: 70},
          {position: "r", id: 18, status: 0, bodyVal: 85},
          {position: "l", id: 19, status: 4, bodyVal: 80},
          {position: "l", id: 20, status: 0, bodyVal: 80},
          {position: "r", id: 21, status: 4, bodyVal: 80},
          {position: "r", id: 22, status: 0, bodyVal: 90},
          {position: "l", id: 23, status: 0, bodyVal: 80},
          {position: "l", id: 24, status: 1, bodyVal: 40},
          {position: "r", id: 25, status: 0, bodyVal: 60},
          {position: "l", id: 26, status: 2, bodyVal: 80},
        ],
      },
      xishaData: {
        xishaRow1Data: [
          {id: 148, status: 0, bodyVal: 80},
          {id: 149, status: 3, bodyVal: 10},
          {id: 150, status: 2, bodyVal: 50},
          {id: 151, status: 3, bodyVal: 70},
          {id: 152, status: 4, bodyVal: 40},
          {id: 153, status: 2, bodyVal: 80},
          {id: 154, status: 3, bodyVal: 60},
          {id: 155, status: 0, bodyVal: 90},
          {id: 156, status: 2, bodyVal: 50},
          {id: 157, status: 1, bodyVal: 50},
          {id: 158, status: 3, bodyVal: 70},
          {id: 159, status: 0, bodyVal: 85},
          {id: 160, status: 4, bodyVal: 80},
          {id: 161, status: 0, bodyVal: 80},
          {id: 162, status: 0, bodyVal: 80},
          {id: 163, status: 3, bodyVal: 10},
          {id: 164, status: 2, bodyVal: 50},
          {id: 165, status: 3, bodyVal: 70},
          {id: 166, status: 4, bodyVal: 40},
          {id: 167, status: 2, bodyVal: 80},
          {id: 168, status: 3, bodyVal: 60},
          {id: 169, status: 0, bodyVal: 90},
          {id: 170, status: 2, bodyVal: 50},
          {id: 171, status: 1, bodyVal: 50},
          {id: 172, status: 3, bodyVal: 70},
          {id: 173, status: 0, bodyVal: 85},
          {id: 174, status: 4, bodyVal: 80},
          {id: 175, status: 0, bodyVal: 80},
          {id: 176, status: 0, bodyVal: 80},
        ],
        xishaRow2Data: [
          {id: 1, status: 0, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 10},
          {id: 3, status: 2, bodyVal: 50},
          {id: 4, status: 3, bodyVal: 70},
          {id: 5, status: 4, bodyVal: 40},
          {id: 6, status: 2, bodyVal: 80},
          {id: 7, status: 3, bodyVal: 60},
          {id: 8, status: 0, bodyVal: 90},
          {id: 9, status: 2, bodyVal: 50},
          {id: 10, status: 1, bodyVal: 50},
          {id: 11, status: 3, bodyVal: 70},
          {id: 12, status: 0, bodyVal: 85},
          {id: 13, status: 4, bodyVal: 80},
          {id: 14, status: 0, bodyVal: 80},
          {id: 15, status: 0, bodyVal: 80},
          {id: 16, status: 3, bodyVal: 10},
          {id: 17, status: 2, bodyVal: 50},
          {id: 18, status: 3, bodyVal: 70},
          {id: 19, status: 4, bodyVal: 40},
          {id: 20, status: 2, bodyVal: 80},
          {id: 21, status: 3, bodyVal: 60},
          {id: 22, status: 0, bodyVal: 90},
          {id: 23, status: 2, bodyVal: 50},
          {id: 24, status: 1, bodyVal: 50},
          {id: 25, status: 3, bodyVal: 70},
          {id: 26, status: 0, bodyVal: 85},
          {id: 27, status: 4, bodyVal: 80},
          {id: 28, status: 0, bodyVal: 80},
          {id: 29, status: 0, bodyVal: 80},
          {id: 30, status: 2, bodyVal: 80},
          {id: 31, status: 3, bodyVal: 60},
          {id: 32, status: 0, bodyVal: 90},
          {id: 33, status: 2, bodyVal: 50},
          {id: 34, status: 1, bodyVal: 50},
          {id: 35, status: 3, bodyVal: 70},
          {id: 36, status: 0, bodyVal: 85},
          {id: 37, status: 4, bodyVal: 80},
          {id: 38, status: 0, bodyVal: 80},
          {id: 39, status: 0, bodyVal: 80},
          {id: 40, status: 2, bodyVal: 80},
          {id: 41, status: 3, bodyVal: 60},
          {id: 42, status: 0, bodyVal: 90},
          {id: 43, status: 2, bodyVal: 50},
          {id: 44, status: 1, bodyVal: 50},
          {id: 45, status: 3, bodyVal: 70},
          {id: 46, status: 0, bodyVal: 85},
          {id: 47, status: 4, bodyVal: 80},
          {id: 48, status: 0, bodyVal: 80},
          {id: 49, status: 0, bodyVal: 80},
        ],
        xishaRow3Data: [
          {id: 50, status: 1, bodyVal: 50},
          {id: 51, status: 3, bodyVal: 70},
          {id: 52, status: 0, bodyVal: 85},
          {id: 53, status: 4, bodyVal: 80},
          {id: 54, status: 0, bodyVal: 80},
          {id: 55, status: 0, bodyVal: 80},
          {id: 56, status: 3, bodyVal: 10},
          {id: 57, status: 2, bodyVal: 50},
          {id: 58, status: 3, bodyVal: 70},
          {id: 59, status: 4, bodyVal: 40},
          {id: 60, status: 2, bodyVal: 80},
          {id: 61, status: 3, bodyVal: 60},
          {id: 62, status: 0, bodyVal: 90},
          {id: 63, status: 2, bodyVal: 50},
          {id: 64, status: 1, bodyVal: 50},
          {id: 65, status: 3, bodyVal: 70},
          {id: 66, status: 0, bodyVal: 85},
          {id: 67, status: 4, bodyVal: 80},
          {id: 68, status: 0, bodyVal: 80},
          {id: 69, status: 0, bodyVal: 80},
          {id: 70, status: 2, bodyVal: 80},
          {id: 71, status: 3, bodyVal: 60},
          {id: 72, status: 0, bodyVal: 90},
          {id: 73, status: 2, bodyVal: 50},
          {id: 74, status: 1, bodyVal: 50},
          {id: 75, status: 3, bodyVal: 70},
          {id: 76, status: 0, bodyVal: 85},
          {id: 77, status: 4, bodyVal: 80},
          {id: 78, status: 0, bodyVal: 80},
          {id: 79, status: 0, bodyVal: 80},
          {id: 80, status: 2, bodyVal: 80},
          {id: 81, status: 3, bodyVal: 60},
          {id: 82, status: 0, bodyVal: 90},
          {id: 83, status: 2, bodyVal: 50},
          {id: 84, status: 1, bodyVal: 50},
          {id: 85, status: 3, bodyVal: 70},
          {id: 86, status: 0, bodyVal: 85},
          {id: 87, status: 4, bodyVal: 80},
          {id: 88, status: 0, bodyVal: 80},
          {id: 89, status: 0, bodyVal: 80},
          {id: 90, status: 2, bodyVal: 80},
          {id: 91, status: 3, bodyVal: 60},
          {id: 92, status: 0, bodyVal: 90},
          {id: 93, status: 2, bodyVal: 50},
          {id: 94, status: 1, bodyVal: 50},
          {id: 95, status: 3, bodyVal: 70},
          {id: 96, status: 0, bodyVal: 85},
          {id: 97, status: 4, bodyVal: 80},
          {id: 98, status: 0, bodyVal: 80},
        ],
        xishaRow4Data: [
          {id: 99, status: 1, bodyVal: 50},
          {id: 100, status: 3, bodyVal: 70},
          {id: 101, status: 0, bodyVal: 85},
          {id: 102, status: 4, bodyVal: 80},
          {id: 103, status: 0, bodyVal: 80},
          {id: 104, status: 0, bodyVal: 80},
          {id: 105, status: 3, bodyVal: 10},
          {id: 106, status: 2, bodyVal: 50},
          {id: 107, status: 3, bodyVal: 70},
          {id: 108, status: 4, bodyVal: 40},
          {id: 109, status: 2, bodyVal: 80},
          {id: 110, status: 3, bodyVal: 60},
          {id: 111, status: 0, bodyVal: 85},
          {id: 112, status: 4, bodyVal: 80},
          {id: 113, status: 0, bodyVal: 80},
          {id: 114, status: 0, bodyVal: 80},
          {id: 115, status: 3, bodyVal: 10},
          {id: 116, status: 2, bodyVal: 50},
          {id: 117, status: 3, bodyVal: 70},
          {id: 118, status: 4, bodyVal: 40},
          {id: 119, status: 2, bodyVal: 80},
          {id: 120, status: 3, bodyVal: 60},
          {id: 121, status: 0, bodyVal: 85},
          {id: 122, status: 4, bodyVal: 80},
          {id: 123, status: 0, bodyVal: 80},
          {id: 124, status: 0, bodyVal: 80},
          {id: 125, status: 3, bodyVal: 10},
          {id: 126, status: 2, bodyVal: 50},
          {id: 127, status: 3, bodyVal: 70},
          {id: 128, status: 4, bodyVal: 40},
          {id: 129, status: 2, bodyVal: 80},
          {id: 130, status: 3, bodyVal: 60},
          {id: 131, status: 0, bodyVal: 85},
          {id: 132, status: 4, bodyVal: 80},
          {id: 133, status: 0, bodyVal: 80},
          {id: 134, status: 0, bodyVal: 80},
          {id: 135, status: 3, bodyVal: 10},
          {id: 136, status: 2, bodyVal: 50},
          {id: 137, status: 3, bodyVal: 70},
          {id: 138, status: 4, bodyVal: 40},
          {id: 139, status: 2, bodyVal: 80},
          {id: 140, status: 3, bodyVal: 60},
          {id: 141, status: 0, bodyVal: 85},
          {id: 142, status: 4, bodyVal: 80},
          {id: 143, status: 0, bodyVal: 80},
          {id: 144, status: 0, bodyVal: 80},
          {id: 145, status: 3, bodyVal: 10},
          {id: 146, status: 2, bodyVal: 50},
          {id: 147, status: 3, bodyVal: 70},
        ],
      },
      cushaData: {
        cushaDataRow1Data: [
          {id: 1, status: 0, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 10},
          {id: 3, status: 2, bodyVal: 50},
          {id: 4, status: 3, bodyVal: 70},
          {id: 5, status: 4, bodyVal: 40},
          {id: 6, status: 2, bodyVal: 80},
          {id: 7, status: 3, bodyVal: 60},
          {id: 8, status: 0, bodyVal: 90},
          {id: 9, status: 2, bodyVal: 50},
          {id: 10, status: 1, bodyVal: 50},
          {id: 11, status: 3, bodyVal: 70},
          {id: 12, status: 0, bodyVal: 85},
          {id: 13, status: 4, bodyVal: 80},
          {id: 14, status: 0, bodyVal: 80},
        ],
        cushaDataRow2Data: [
          {id: 15, status: 4, bodyVal: 80},
          {id: 16, status: 0, bodyVal: 80},
        ],
      },
      jingtiaoData: {
        jingtiaoCol1Data: [
          {id: 1, status: 0, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 10},
          {id: 3, status: 2, bodyVal: 50},
          {id: 4, status: 3, bodyVal: 70},
          {id: 5, status: 4, bodyVal: 40},
          {id: 6, status: 2, bodyVal: 80},
          {id: 7, status: 3, bodyVal: 60},
          {id: 8, status: 0, bodyVal: 90},
          {id: 9, status: 2, bodyVal: 50},
          {id: 10, status: 1, bodyVal: 50},
          {id: 11, status: 3, bodyVal: 70},
          {id: 12, status: 0, bodyVal: 85},
        ],
        jingtiaoCol2Data: [
          {id: 1, status: 0, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 10},
          {id: 3, status: 2, bodyVal: 50},
          {id: 4, status: 3, bodyVal: 70},
          {id: 5, status: 4, bodyVal: 40},
          {id: 6, status: 2, bodyVal: 80},
          {id: 7, status: 3, bodyVal: 60},
          {id: 8, status: 0, bodyVal: 90},
          {id: 9, status: 2, bodyVal: 50},
          {id: 10, status: 1, bodyVal: 50},
          {id: 11, status: 3, bodyVal: 70},
          {id: 12, status: 0, bodyVal: 85},
        ],
      },
      liumianData: {
        liumianRow1Data: [
          {id: 8, status: 0, bodyVal: 80},
          {id: 7, status: 3, bodyVal: 10},
          {id: 6, status: 2, bodyVal: 50},
          {id: 5, status: 3, bodyVal: 70},
          {id: 4, status: 4, bodyVal: 40},
          {id: 3, status: 2, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 60},
          {id: 1, status: 0, bodyVal: 90},
        ],
        liumianRow2Data: [
          {id: 16, status: 2, bodyVal: 50},
          {id: 15, status: 3, bodyVal: 70},
          {id: 14, status: 4, bodyVal: 40},
          {id: 13, status: 2, bodyVal: 80},
          {id: 12, status: 3, bodyVal: 60},
          {id: 11, status: 0, bodyVal: 90},
          {id: 10, status: 0, bodyVal: 80},
          {id: 9, status: 3, bodyVal: 10},
        ],
        liumianRow3Data: [
          {id: 24, status: 4, bodyVal: 40},
          {id: 23, status: 2, bodyVal: 80},
          {id: 22, status: 3, bodyVal: 60},
          {id: 21, status: 0, bodyVal: 90},
          {id: 20, status: 0, bodyVal: 80},
          {id: 19, status: 3, bodyVal: 10},
          {id: 18, status: 2, bodyVal: 50},
          {id: 17, status: 3, bodyVal: 70},
        ],
        liumianRow4Data: [
          {id: 32, status: 3, bodyVal: 60},
          {id: 31, status: 0, bodyVal: 90},
          {id: 30, status: 0, bodyVal: 80},
          {id: 29, status: 3, bodyVal: 10},
          {id: 28, status: 2, bodyVal: 50},
          {id: 27, status: 3, bodyVal: 70},
          {id: 26, status: 4, bodyVal: 40},
          {id: 25, status: 2, bodyVal: 80},
        ],
      },
      qinghuaData: {
        qinghuaCol1Data: [
          {id: 1, status: 0, bodyVal: 80},
          {id: 2, status: 3, bodyVal: 10},
          {id: 3, status: 2, bodyVal: 50},
          {id: 4, status: 3, bodyVal: 70},
        ],
        qinghuaCol2Data: {
          zhuamianData: [
            {id: 1, status: 0, bodyVal: 80},
            {id: 2, status: 3, bodyVal: 10},
          ],
          duocangData1: [
            {id: 1, status: 0, bodyVal: 80},
            {id: 2, status: 0, bodyVal: 80},
          ],
          duocangData2: [
            {id: 1, status: 3, bodyVal: 10},
            {id: 2, status: 3, bodyVal: 10},
          ],
          jinkaimainData1: [
            {id: 1, status: 3, bodyVal: 10},
            {id: 2, status: 3, bodyVal: 10},
          ],
          jinkaimainData2: [
            {id: 1, status: 3, bodyVal: 10},
            {id: 2, status: 3, bodyVal: 10},
          ],
        },
      },
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      tableData: [
        {pro: "空调细纱", wen: 25, shi: "30"},
        {pro: "空调细纱", wen: 25, shi: "30"},
        {pro: "空调细纱", wen: 25, shi: "30"},
        {pro: "空调细纱", wen: 25, shi: "30"},
        {pro: "空调细纱", wen: 25, shi: "30"},
        {pro: "空调细纱", wen: 25, shi: "30"},
      ],
      luoTongDialog: false,
      xishaDialog: false,
      luoTongDialogData: "",
      contentStyle: {
        height: 0,
      },
    };
  },
  components: {
    // ===========================
    XiSha1,
    XiSha2,
    CuSha,
    JingTiao,
    ShuMian,
    // ==========================
    echarts1,
    echarts2,
    echarts3,
    echarts4,
    echarts5,
    echarts6,
    echarts7,
    echarts8,
    echarts9,
    echarts10,
    echarts11,
    echarts12,
    echarts13,
    echarts14,
    echarts15,
    luotong_l,
    luotong_r,
    xisha,
    cusha,
    jingtiao,
    liumian,
    qinghua,
    zhuamian,
    duocang,
    jingkaimian,
    luoTongDialog,
    xishaDialog,
    cushaDialog,
    jingtiaoDialog,
    liumianDialog,
    zhuamianDialog,
    duocangDialog,
    kaimianDialog
  },
  created() {
    /**
     * 获取分组数据
     * */
    this.clickButton();
    this.changeHeight();
  },
  mounted() {
    this.cancelLoading();
    //头部高度初始化
    window.addEventListener("resize", this.changeHeight);
  },
  methods: {
    /**
     * 关闭弹窗触发事件
     */
    closeParentHandle() {
      console.log("关闭弹窗触发事件")
      this.$message('关闭二级轮询');
      // 清除二级轮询
      clearInterval(this.secXiShaTimer)
      clearInterval(this.secTxcsomlTimer)
      clearInterval(this.secBingTiaoTimer)
      clearInterval(this.secShuMianJiTimer)
      clearInterval(this.secShuMianJiATimer)
      // 开启一级轮询
      this.clickButton();
    },
    /**
     * 获取实时数据
     * */
    getInfoByDevSn(type, devSn) {
      const time = 1000 * 5;
      // 先清除一级定时器
      this.$message('关闭一级轮询');
      clearInterval(this.timer)
      this.$notify({
        title: '成功',
        message: '开启二级轮询',
        type: 'success'
      });
      switch (type) {
        case "XISHA":
          // 获取细纱实时数据
          this.$store.dispatch('actXiShaNewest', {devSn})
          this.secXiShaTimer = setInterval(() => {
            this.$store.dispatch('actXiShaNewest', {devSn})
          }, time)
          break;
        case "BINGTIAO":
          // 获取并条实时数据
          this.$store.dispatch('actBingTiaoNewest', {devSn})
          this.secBingTiaoTimer = setInterval(() => {
            this.$store.dispatch('actBingTiaoNewest', {devSn})
          }, time)
          break;
        case "SHUMIANJI": // 梳棉机，梳棉机A都在这处理
          // 获取梳棉机实时数据
          if (devSn <= 16) {
            // 梳棉机
            this.$store.dispatch('actShuMianJiNewest', {devSn})
            this.secShuMianJiTimer = setInterval(() => {
              this.$store.dispatch('actShuMianJiNewest', {devSn})
            }, time)
          } else {
            // 梳棉机A
            this.$store.dispatch('actShuMianJiANewest', {devSn})
            this.secShuMianJiATimer = setInterval(() => {
              this.$store.dispatch('actShuMianJiANewest', {devSn})
            }, time)
          }
          break;
        case "TXCSOML":
          // 获取太行粗纱欧姆龙实时数据
          this.$store.dispatch('actTxcsomlNewest', {devSn})
          this.secTxcsomlTimer = setInterval(() => {
            this.$store.dispatch('actTxcsomlNewest', {devSn})
          }, time)
          break;
        default:
          break;
      }
    },
    clickButton() {
      this.$notify({
        title: '成功',
        message: '开启一级轮询',
        type: 'success'
      });
      // 初始化一级数据
      // 获取细纱分组数据
      this.$store.dispatch('actXiShaGroup')
      // 获取并条分组数据
      this.$store.dispatch('actBingTiaoGroup')
      // 获取梳棉机分组数据
      this.$store.dispatch('actShuMianJiGroup')
      // 获取太行粗纱欧姆龙分组数据
      this.$store.dispatch('actTxcsomlGroup')
      this.timer = setInterval(() => {
        // 获取细纱分组数据
        this.$store.dispatch('actXiShaGroup')
        // 获取并条分组数据
        this.$store.dispatch('actBingTiaoGroup')
        // 获取梳棉机分组数据
        this.$store.dispatch('actShuMianJiGroup')
        // 获取太行粗纱欧姆龙数据
        this.$store.dispatch('actTxcsomlGroup')
      }, 1000 * 10)
    },
    clickButton2() {
      this.$message('关闭一级轮询');
      clearInterval(this.timer)
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    //设置元素动态高度
    changeHeight() {
      this.contentStyle.height = window.innerHeight - 90 + "px";
    },
    clickHandle(flag, item) {
      if (flag == "luotong") {
        this.$refs.luoTongDialog.showDialog(item);
      } else if (flag == "xisha") {
        this.$refs.xishaDialog.showDialog(item);
      } else if (flag == "cusha") {
        this.$refs.cushaDialog.showDialog(item);
      } else if (flag == "jingtiao") {
        this.$refs.jingtiaoDialog.showDialog(item);
      } else if (flag == "liumian") {
        this.$refs.liumianDialog.showDialog(item);
      } else if (flag == "zhuamian") {
        this.$refs.zhuamianDialog.showDialog(item);
      } else if (flag == "duocang") {
        this.$refs.duocangDialog.showDialog(item);
      } else if (flag == "kaimian") {
        this.$refs.kaimianDialog.showDialog(item);
      }
    },
  },
};
</script>

<style lang="scss">
</style>