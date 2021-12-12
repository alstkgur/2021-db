//데이터 삭제 기능 구현
//데이터베이스의 데이터 삭제 기능 구현
//views 폴더의 delete.hbs파일과 연동
//특정 필드의 데이터 삭제 가능하도록
import express from "express";

//여기선 조회하는 모듈인 selectSql도 불러옴
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();


//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/delete
//get은 데이터를 받아서 단순히 보여주는것
router.get('/airport', async (req, res) => {  //async와 await은 세트임. 같이 써야함
    //airport가 아닌 airt_res로 붙여도 아무 상관없음. login.js와 select.js에서도 같은 맥락
    const airport = await selectSql.getairport(); //selectSql을 이용하여 airport테이블 만듬
    res.render('deleteairport', {  //deleteairport.hbs
        title: "공항삭제",
        airport
    })
});


//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {


    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log('delete router:', req.body.delBtn);

    const data = {  //data에 Name값 저장
        Name: req.body.delBtn,
    };
    await deleteSql.deleteairport(data);  //이 함수에 data를 넘겨줌. sql.js에서 data받아 수행
    res.redirect('/delete');  //localhost:3000/delete로...
});


router.get('/airplane', async (req, res) => {  //async와 await은 세트임. 같이 써야함
    //airplane이 아닌 aipt_res로 붙여도 아무 상관없음. login.js와 select.js에서도 같은 맥락
    const airplane = await selectSql.getairplane(); //selectSql을 이용하여 airplane테이블 만듬
    res.render('deleteairplane', {  //deleteairplane.hbs
        title: "비행기삭제",
        airplane
    })
});


//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {


    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log('delete router:', req.body.delBtn);

    const data = {  //data에 Name값 저장
        Name: req.body.delBtn,
    };
    await deleteSql.deleteairplane(data);  //이 함수에 data를 넘겨줌. sql.js에서 data받아 수행
    res.redirect('/delete');  //localhost:3000/delete로...
});


router.get('/flight', async (req, res) => {  //async와 await은 세트임. 같이 써야함
    //flight가 아닌 flyt_res로 붙여도 아무 상관없음. login.js와 select.js에서도 같은 맥락
    const flight = await selectSql.getflight(); //selectSql을 이용하여 flight테이블 만듬
    res.render('deleteflight', {  //deleteflight.hbs
        title: "비행삭제",
        flight
    })
});


//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {


    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log('delete router:', req.body.delBtn);

    const data = {  //data에 Name값 저장
        Name: req.body.delBtn,
    };
    await deleteSql.deleteflight(data);  //이 함수에 data를 넘겨줌. sql.js에서 data받아 수행
    res.redirect('/delete');  //localhost:3000/delete로...
});


module.exports = router;