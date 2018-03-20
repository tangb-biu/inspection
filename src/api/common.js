import axios from 'axios'

 /**
   * @desc 登录
   * @param {*} callback 
   */
let login = (config, fnSuccess, fnError) => { 
  axios.post('/inspect/login', config)
    .then(res => fnSuccess(res))
    .catch(error => fnError(error))
}

let getTargets = (config, fnSuccess, fnError) => {
  axios.get('/inspect/targets', config)
    .then(res => fnSuccess(res.data))
    .catch(error => fnError(error))
}

let saveTarget = (config, fnSuccess, fnError) => {
  axios.post('/inspect/target', config)
    .then(res => fnSuccess(res.data))
    .catch(error => fnError(error))
}

let updateTarget = (config, fnSuccess, fnError) => {
  axios.put('/inspect/target', config)
    .then(res => fnSuccess(res.data))
    .catch(error => fnError(error))
}

let deleteTarget = (config, fnSuccess, fnError) => {
  axios.delete('/inspect/target', config)
    .then(res => fnSuccess(res.data))
    .catch(error => fnError(error))
}

let getPerformanceParseList = (config, fnSuccess, fnError) => {
  axios.get('/inspect/performance/list', config)
    .then(res => fnSuccess(res.data))
    .catch(error => fnError(error))
}

export {
  login,
  getTargets,
  saveTarget,
  updateTarget,
  deleteTarget,
  getPerformanceParseList
}
