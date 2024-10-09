// Dao
import {testDao} from './testDao.js'

// utils
import {pg} from '../../utils/db/pg.js'
import {uuid} from '../../utils/common/uuidUtil.js'

/**
 * 단순 select는 트렌젝션 적용 X
 */
const getTestList = async () => {
  try{
    let testList = await testDao.findTestListAll()
    return testList;
  } catch(e){
    throw e;
  } 
}

/**
 * update, delete 등 트렌젝션 위해 아래와 같은 형식 유지
 */
const updateTest = async (id) => {
  let pool = await pg.connect();
  try{
    await testDao.updateTestByName({id:id}, pool);
    await pg.commit(pool);
    return testList;
  } catch(e){
    await pg.rollback(pool);
    throw e;
  } 
}

const getId = async () => {
  try {
    console.log(uuid.getId())
    return uuid.getId();
  } catch(e) {
    throw e
  }
}

export const testService = {
  getTestList,
  updateTest,
  getId
}