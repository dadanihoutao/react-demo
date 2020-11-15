import axios from 'axios'
import {Component} from 'react'
import {CONFIG} from '../../config/env'
import qs from 'qs'
import Lockr from 'lockr'
import {Toast} from 'antd-mobile'

axios.defaults.timeout = 3000
axios.defaults.baseURL = CONFIG.baseURL

// 请求前拦截
axios.interceptors.request.use(config => {
  config.headers.authKey = Lockr.get('authKey')
  config.headers.sessionId = Lockr.get('sessionId')
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // 请求头参数处理
  config.data = qs.stringify(config.data)
  return config
}, err => {
  return Promise.reject(err)
})
// 请求返回拦截
axios.interceptors.response.use(res => {
  if (res.status && res.status === 200 && res.data.code !== 200) {
    if (res.data.code === 101) {
      // setToken('')
      Lockr.flush()
    } else if (res.data.msg && res.data.msg !== '') {
      Toast.info(res.data.msg, 2)
    } else if (res.data.code === 203) {
      return false
    } else {
      Toast.info('系统错误', 2)
    }
  }
  return res
}, err => {
  if (!err.response && err.message) {
    Toast.info('请求超时，请检查网络，刷新后重试', 2)
  } else {
    Toast.info('系统错误', 2)
  }
  return Promise.reject(err)
})


/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

export function get (url, params = {}) {
  params.t = new Date().getTime()
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装delete方法
 * @param url
 * @param params
 * @param confirm 是否有确认弹框
 * @returns {Promise}
 */

export function doDelete (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch(err => {
        reject(err)
      })
  })
}

Component.prototype.$axios = axios
Component.prototype.$get = get
Component.prototype.$post = post
Component.prototype.$delete = doDelete
Component.prototype.$patch = patch
Component.prototype.$put = put

export default axios
