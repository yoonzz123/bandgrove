import express from 'express';
const app = express();
const port = process.env.port || 3000;

import testRouter from './routes/test.js'
import loginRouter from './routes/login.js'

// env 설정
import dotenv from "dotenv";
dotenv.config();

/**
 * @COMMANT 전체 미들웨어로 트렌젝션 관리할지 여부 
 * 지금은 라우터단위에서 트렌젝션 관리 함
 */
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/test', testRouter)
app.use('/test', loginRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
