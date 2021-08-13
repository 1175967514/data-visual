import request from "../api/request";
import {urlConfig} from "../api/urlConfig"
import axios from "axios";
const MES = {
  // 获取并条分组数据
  queryGroupBingTiaoList: (params) => {
    const url = urlConfig.queryGroupBingTiaoList;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 获取梳棉机分组数据
  queryGroupShuMianJiList: (params) => {
    const url = urlConfig.queryGroupShuMianJiList;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 获取太行粗纱欧姆龙分组数据
  queryGroupTxcsomlList: (params) => {
    const url = urlConfig.queryGroupTxcsomlList;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 获取细纱分组数据
  queryGroupXiShaList: (params) => {
    const url = urlConfig.queryGroupXiShaList;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  /**
   * 实时数据
   */
  // 并条实时数据查询接口
  queryNewestBingTiao: (params) => {
    const url = urlConfig.queryNewestBingTiao;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 梳棉机1207实时数据查询接口
  queryNewestShuMianji: (params) => {
    const url = urlConfig.queryNewestShuMianji;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 梳棉机2017A实时数据查询接口
  queryNewestShuMianjiA: (params) => {
    const url = urlConfig.queryNewestShuMianjiA;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 太行粗纱欧姆龙实时数据查询接口
  queryNewestTxcsoml: (params) => {
    const url = urlConfig.queryNewestTxcsoml;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },
  // 细纱马佐里实时数据查询接口
  queryNewestXiShaMzl: (params) => {
    const url = urlConfig.queryNewestXiShaMzl;
    return new Promise((resolve, reject) => {
      request.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err=>{
        reject(err)
      })
    });
  },

};
export default MES;
export {MES};