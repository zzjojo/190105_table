/*包含n个接口请求函数的模块
函数的返回值：promise对象
*/

export const reqRwbh = () =>ajax('/Jsrw')

//参数类型   query
export const reqHlkp = (Hlkp) =>ajax('/Jsrw${Hlkp}')


//参数类型   prama
export const reqMbxx = (Mbbh) =>ajax('/Jsrw',{Mbbh})



