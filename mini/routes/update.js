//데이터 수정 기능 구현
//데이터베이스의 데이터 수정 기능 구현
//views 폴더의 updateEmployee.hbs파일과 연동
//특정 필드의 데이터 수정 가능하도록
import express from "express";

//여기선 조회하는 모듈인 selectSql도 불러옴
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();



//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/update/airport
//get은 데이터를 받아서 단순히 보여주는것
router.get('/airport', async (req, res) => {
    // airt_res로 붙여도 아무 상관없음. home.js와 sleect.js에서도 갖은 맥락
    const airt_res = await selectSql.getairport(); //selectSql을 이용하여 airport테이블 만듬
    res.render('updateairport', {  //updateairport.hbs
        title: "airport 테이블 갱신",
        airt_res
    })
});


//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/airport', async (req, res) => {
    const vars = req.body;

    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log(vars.airport_code);

    const data = {
        airport_code: vars.airport_code
    }
    await updateSql.updateairport(data);

    res.redirect('/select');  //localhost:3000/select로...
});


//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/update/airplane
//get은 데이터를 받아서 단순히 보여주는것
router.get('/airplane', async (req, res) => {
    // aipt_res로 붙여도 아무 상관없음. home.js와 slect.js에서도 갖은 맥락
    const aipt_res = await selectSql.getairplane(); //selectSql을 이용하여 airplane테이블 만듬
    res.render('updateairplane', {  //updateairplane.hbs
        title: "airplane 테이블 갱신",
        aipt_res
    })
});


//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/airplane', async (req, res) => {
    const vars = req.body;

    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log(vars.airplane_id);

    const data = {
        airplane_id: vars.airplane_id
    }
    await updateSql.updateairplane(data);

    res.redirect('/select');  //localhost:3000/select로...
});


//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/update/flight
//get은 데이터를 받아서 단순히 보여주는것
router.get('/flight', async (req, res) => {
    // flyt_res로 붙여도 아무 상관없음. home.js와 slect.js에서도 갖은 맥락
    const flyt_res = await selectSql.getflight(); //selectSql을 이용하여 flight테이블 만듬
    res.render('updateflight', {  //updateflight.hbs
        title: "flight 테이블 갱신",
        flyt_res
    })
});


//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/flight', async (req, res) => {
    const vars = req.body;

    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log(vars.flight_number);

    const data = {
        flight_number: vars.flight_number
    }
    await updateSql.updateflight(data);

    res.redirect('/select');  //localhost:3000/select로...
});

module.exports = router;