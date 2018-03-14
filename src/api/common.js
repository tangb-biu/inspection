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

export {
  login
}
