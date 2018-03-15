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

export {
  login,
  getTargets
}
