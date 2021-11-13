//데이터 수정 기능 구현
//데이터베이스의 데이터 수정 기능 구현
//views 폴더의 updateEmployee.hbs파일과 연동
//특정 필드의 데이터 수정 가능하도록
import express from "express";

//여기선 조회하는 모듈인 selectSql도 불러옴
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/update/employee
router.get('/employee', async (req, res) => {

    //employee가 아닌 emp_res로 붙여도 아무 상관없음. home.js와 sleect.js에서도 갖은 맥락
    const emp_res = await selectSql.getEmployee();  //selectSql을 이용하여 직원테이블 만듬
    res.render('updateEmployee', {  //updateEmployee.hbs
        title: "직원 테이블 갱신",
        emp_res
    });
});

//기존의 입력 값 불러오기
//전체 주소는 localhost:3000/update/department
//get은 데이터를 받아서 단순히 보여주는것
router.get('/department', async (req, res) => {
    //department가 아닌 dept_res로 붙여도 아무 상관없음. home.js와 sleect.js에서도 갖은 맥락
    const dept_res = await selectSql.getDepartment(); //selectSql을 이용하여 부서테이블 만듬
    res.render('updateDepartment', {  //updateDepartment.hbs
        title: "부서 테이블 갱신",
        dept_res
    })
});

//수정 버튼을 눌렀을 경우  update query를 실행하며 조회 페이지로 이동
//post는 데이터를 받아서 기능수행(데이터 처리)
router.post('/employee',async (req, res) => {
    const vars = req.body;

    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log(vars.salary);

    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select');
});

//수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;

    //콘솔로그를 찍어 실제로 전달받은 값이 잘 나오는지 출력해봄
    console.log(vars.dname);

    const data = {
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select');  //localhost:3000/select로...
});

module.exports = router;