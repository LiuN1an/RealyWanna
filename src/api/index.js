import { request } from '../utils/request'
import { baseUrl } from '../utils/config'

export function search (data) {
  return request({
    url: baseUrl + 'search',
    method: 'GET',
    params: data
  })
}

export function hot (data) {
  return request({
    url: baseUrl + '',
    method: 'GET',
    params: data
  })
}
