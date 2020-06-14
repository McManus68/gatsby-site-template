import { Param } from '../types/types'

export function reduceParams(params: Param[]) {
  return params.reduce((obj, current) => {
    obj[current.name] = current.value
    return obj
  }, {})
}
