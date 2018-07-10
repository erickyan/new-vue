import axios from 'axios'

const BASE_URL = 'https://te.checkpoint.com/tecloud/api/v1/file/quota'

export {getQuota}

function getQuota () {
  const url = `${BASE_URL}`
  return axios.get(url).then(response => response.data)
}
