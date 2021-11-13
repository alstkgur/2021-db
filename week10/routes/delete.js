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
router.get('/', async (req, res) => {  //async와 await은 세트임. 같이 써야함
    //student가 아닌 stdt_res로 붙여도 아무 상관없음. login.js와 select.js에서도 같은 맥락
    const student = await selectSql.getStudent(); //selectSql을 이용하여 학생테이블 만듬
    res.render('delete', {  //delete.hbs
        title: "삭제기능",
        student
    })
});


//삭제 버튼을 눌렀을 경우 delete query를 실행하며 조회 페이지로 이동
router.post('/', async (req, res) => {


    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log('delete router:', req.body.delBtn);

    const data = {  //data에 Name값 저장
        Name: req.body.delBtn,
    };
    await deleteSql.deleteStudent(data);  //이 함수에 data를 넘겨줌. sql.js에서 data받아 수행
    res.redirect('/delete');  //localhost:3000/delete로...
});

module.exports = router;