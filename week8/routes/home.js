//홈화면 기능 구현
//데이터베이스에 데이터 삽입 구현
//views폴더의 home.hbs파일과 연동. 
//Form 구현
//form에서 데이터를 넘길때 받는파일이 home.hbs이다.

//express 사용하므로 모듈을 가져옴
import express from "express";
//insertSql모듈을 가져옴. {}은 보통 사용자가 만든 모듈을 가져올 때 사용 
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');  //home.hbs 파일을 찾아 렌더함(웹페이지에 뿌림)
});

//웹에서 데이터를 입력하고 삽입 버튼을 눌렀을때 처리를 router.post에서 처리함.
router.post('/', (req, res) => {  //값들이 req에 전달되고, 
    const vars = req.body;  // 여기에 데이터가 저장됨 
    //넘어오는 데이터의 갯수로 employee와 department 구별
    const var_lenth = Object.keys(req.body).length;  

    //이게 만족한다면 employee라는 뜻
    if (var_lenth > 4) {
        const data = {  //데이터라는 객체 만듬
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        //inserSql모듈에서 setEmployee()라는 함수를 만들어 data객체를 인자로 줌
        insertSql.setEmployee(data);

        //이건 department의 경우
    } else {
        const data = {  //여기도 데이터 객체 만듬. 지역이므로 data로 같게 만들 수 있음
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }
    
    //입력하고 나서 어떻게 할 것인가? "/"을 인자로 주었으므로 홈 화면으로... 
    //즉, 새로고침한다는뜻(똑같은 화면으로 redirect했으므로)
    res.redirect('/');
})

module.exports = router;