//데이터 베이스 접속 및 insert, update, select 기능 구현

import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: '3510als11!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

//async / await 사용
const promisePool = pool.promise();

//selec query
//외부에서 함수를 불러와서 쓰려면 export를 붙여야한다.
export const selectSql = {
    getEmployee : async () => {

        //여기서 쿼리문은 employee테이블이며 sql문을 작성한것
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from employee`);  
        console.log(rows)
        return rows
    },
    getDepartment : async () => {

        //여기서 쿼리문은 department테이블이며 sql문을 작성하는것
        //쿼리 실행
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from department`);
        console.log(rows)
        return rows
    },
}

//insert query
export const insertSql = {
    //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    //home.js에서 데이터만든걸 넘겨받음
    setEmployee : async (data) => {
        //``을 사용한것과 ""을 사용한것의 차이는 $을 추가할수 있는지 없는지 여부임
        //쿼리문을 sql에 저장하며 $들의 데이터를 employee테이블에 넣겠다 라는 의미임.
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
            
            //쿼리 실행
            //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
            //데이터베이스에 접근하여 쿼리문 실행하게되는 것
            await promisePool.query(sql);


    },
    //department도 employee와 동일한 동작을 함
    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;

            await promisePool.query(sql);
    },
}

//update query
export const updateSql = {
    //여기선 async가 변수 사용 x
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Address = "대만" `;
        await promisePool.query(sql);

    },
    //여기선 async가 변수로 data 사용
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Mgr_ssn = 11111111`;
        await promisePool.query(sql);

    },
}
