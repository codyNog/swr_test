/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './v1/contents'
import { Methods as Methods1 } from './v1/contents/_contentId@string'
import { Methods as Methods2 } from './v1/messages'
import { Methods as Methods3 } from './v1/users'
import { Methods as Methods4 } from './v1/users/_userId@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/contents'
  const PATH1 = '/v1/messages'
  const PATH2 = '/v1/users'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    v1: {
      contents: {
        _contentId: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods1['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody']>(prefix, prefix2, PUT, option).json(),
            $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
              fetch<Methods1['put']['resBody']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      messages: {
        get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      users: {
        _userId: (val2: string) => {
          const prefix2 = `${PATH2}/${val2}`

          return {
            get: (option?: { config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T }) =>
              fetch<Methods4['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
              fetch<Methods4['put']['resBody']>(prefix, prefix2, PUT, option).json(),
            $put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
              fetch<Methods4['put']['resBody']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          }
        },
        get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
        $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
          fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
