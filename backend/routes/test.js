import express from 'express';
const router = express.Router();

// Service
import {testService} from '../services/test/testService.js'

router.use((req, res, next) => {
  console.log('test middleware for posts!');
  next();
});

router.get('/dd', async (req, res) => {
  try{
    console.log("###### start test/dd ######")
    let result = await testService.getTestList();
    res.json({result})
  } catch (e) {
    console.log(e)
    console.error(e)
    res.json({status:500, message:'fail'})
  }
});

router.get('/uuid', async (req, res) => {
  try{
    console.log("###### start test/uuid ######")
    let result = await testService.getId();
    res.json({result})
  } catch (e) {
    console.log(e)
    console.error(e)
    res.json({status:500, message:'fail'})
  }
});

export default router;