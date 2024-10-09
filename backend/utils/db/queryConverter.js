import {typeUtil} from '../common/typeUtil.js'

export const queryCvt = (sql, param) => {
  if(typeUtil.isNotObj(param)) return sql;
  console.log(param)
  
  for(let key in param){
    console.log(key)
    let value = param[key];
    
    if(typeUtil.isStr(value)) {
      sql = sql.replaceAll(':' + key, `'${value}'`)
    } else if(typeUtil.isNum(value)) {
      sql = sql.replaceAll(':' + key, `${value}`)
    } else if(typeUtil.isArr(value)) {
      
      let arrStr = value.filter(v => typeUtil.isStr(v) || typeUtil.isNum(v))
                    .map(v => typeUtil.isStr(v) ? `'${v}'` : v)
                    .toString()

      sql = sql.replaceAll(':' + key, `${arrStr}`)
    }
  }
  return sql
}
