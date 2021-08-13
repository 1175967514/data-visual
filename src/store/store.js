// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import MES from "../utils/mesUtils";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    newestDevSn:0, // 最新设备编号
    /**
     * 分组数据store
     */
    xiShaGroupState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    txcsomlGroupState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    shuMianJiGroupState: {
      code: 0,
      data1: [],
      data2: [],
      msg: "",
      status:""
    },
    bingTiaoGroupState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    /**
     * 实时数据store
     */
    bingTiaoNewestState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    // 梳棉机、梳棉机A共同处理
    shuMianJiNewestState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    txcsomlNewestState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
    xiShaNewestState: {
      code: 0,
      data: [],
      msg: "",
      status:""
    },
  },
  mutations: {
    /**
     * 最新设备编号
     * */
    optNewestDevSn:(state,params)=>{
      console.log("mutation设备编号")
      console.log(params)
      state.newestDevSn = params.devSn
    },
    /**
     * 分组数据
     */
    // 更新并条分组数据
    optBingTiaoGroup:(state, params)=> {
      const {bingTiaoGroupState} = state
      state.bingTiaoGroupState = {...bingTiaoGroupState,...params}
    },
    // 更新梳棉机分组数据
    optShuMianJiGroup:(state, params)=> {
      const {shuMianJiGroupState} = state
      state.shuMianJiGroupState = {...shuMianJiGroupState,...params}
    },
    // 更新太行细纱欧姆龙数据
    optTxcsomlGroup:(state, params)=> {
      const {txcsomlGroupState} = state
      state.txcsomlGroupState = {...txcsomlGroupState,...params}
    },
    // 获取细纱分组数据
    optXiShaGroup:(state, params)=> {
      const {xiShaGroupState} = state
      state.xiShaGroupState = {...xiShaGroupState,...params}
      state.xiShaGroupState.data.push(params.data)
    },
    /**
     * 实时数据
     */
    // 更新并条实时数据
    optBingTiaoNewest:(state, params)=> {
      console.log("并条")
      console.log(params)
      const {bingTiaoNewestState} = state
      state.bingTiaoNewestState = {...bingTiaoNewestState,...params}
    },
    // 更新梳棉机实时数据
    optShuMianJiNewest:(state, params)=> {
      console.log("梳棉机")
      console.log(params)
      const {shuMianJiNewestState} = state
      state.shuMianJiNewestState = {...shuMianJiNewestState,...params}
    },
    // 更新太行细纱欧姆龙实时数据
    optTxcsomlNewest:(state, params)=> {
      console.log("粗砂")
      console.log(params)
      const {txcsomlNewestState} = state
      state.txcsomlNewestState = {...txcsomlNewestState,...params}
    },
    // 更新细纱实时数据
    optXiShaNewest:(state, params)=> {
      console.log("细沙")
      console.log(params)
      const {xiShaNewestState} = state
      state.xiShaNewestState = {...xiShaNewestState,...params}
    },
  },
  getters: {},
  actions: {
    /**
     * 分组数据
     */
    // 获取并条分组数据
    actBingTiaoGroup: ({commit}, params) => {
      MES.queryGroupBingTiaoList().then(res => {
        // 请求成功更新数据
        commit('optBingTiaoGroup', res)
      })
    },
    // 获取梳棉机分组数据
    actShuMianJiGroup:({commit}, params) => {
      MES.queryGroupShuMianJiList().then(res => {
        commit('optShuMianJiGroup', res)
      })
    },
    // 获取太行粗纱欧姆龙分组数据
    actTxcsomlGroup:({commit}, params) => {
      MES.queryGroupTxcsomlList().then(res => {
        commit('optTxcsomlGroup', res)
      })
    },
    // 获取细纱分组数据
    actXiShaGroup:({commit}, params) => {
      MES.queryGroupXiShaList().then(res => {
        commit('optXiShaGroup', res)
      })
    },
    /**
     * 实时数据
     */
    // 获取并条实时数据
    actBingTiaoNewest: ({commit}, params) => {
      MES.queryNewestBingTiao(params).then(res => {
        // 请求成功更新数据
        commit('optBingTiaoNewest', res)
      })
    },
    // 获取梳棉机实时数据
    actShuMianJiNewest:({commit}, params) => {
      MES.queryNewestShuMianji(params).then(res => {
        commit('optShuMianJiNewest', res)
      })
    },
    // 获取梳棉机A实时数据
    actShuMianJiANewest:({commit}, params) => {
      MES.queryNewestShuMianjiA(params).then(res => {
        commit('optShuMianJiNewest', res)
      })
    },
    // 获取太行粗纱欧姆龙实时数据
    actTxcsomlNewest:({commit}, params) => {
      MES.queryNewestTxcsoml(params).then(res => {
        commit('optTxcsomlNewest', res)
      })
    },
    // 获取细纱实时数据
    actXiShaNewest:({commit}, params) => {
      MES.queryNewestXiShaMzl(params).then(res => {
        console.log("res")
        console.log(res)
        commit('optXiShaNewest', res)
      })
    },
  }
})

export default store;