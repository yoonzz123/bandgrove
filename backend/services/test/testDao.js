import {pg} from '../../utils/db/pg.js'

const findTestListAll = async() => {

  let query = `
    SELECT 
      * 
    FROM 
      test_table
    WHERE 
      id in (:id)
      and name = :name
  `
  
  let param = {
    id : ['3','1'],
    name : 'test1'
  }
  
  return await pg.select(query, param)
}

const updateTestByName = async (_param, poolClient) => {
  let query = `
    UPDATE 
      test_table
    SET 
      name = :name
    WHERE 
      id = :id
  `

  let param = {
    id : _param.id,
    name : _param.name
  }

  await pg.query(query, param, poolClient)
}

export const testDao = {
  findTestListAll,
  updateTestByName
};

