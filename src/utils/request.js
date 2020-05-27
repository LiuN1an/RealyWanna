import axios from 'axios'
import { baseUrl } from '../utils/confige'

const request = axios.create({
  baseUrl: baseUrl,
  withCredentials: false
})

request.interceptors.response.use(
  (res) => {
    if (res.code === 200) {
      return res
    }
  },
  (err) => {
    return err
  })
export {
  request
}
