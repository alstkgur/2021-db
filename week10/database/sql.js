//데이터 베이스 접속 및 delete, select 기능 구현

import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: '3510als11!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

//async / await 사용
const promisePool = pool.promise();

//select query
//외부에서 함수를 불러와서 쓰려면 export를 붙여야한다.
export const selectSql = {
    getusers : async () => {

        //여기서 쿼리문은 user테이블이며 sql문을 작성한것
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from user`);  
        
        return rows
    },
    getStudent : async () => {

        //여기서 쿼리문은 student테이블이며 sql문을 작성하는것
        //쿼리 실행
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from Student`);

        return rows
    },
}

//delete query
export const deleteSql = {
  
    //여기선 async가 변수로 data 사용
    deleteStudent : async (data) => {
        console.log('deleteSql.deleteStudent:', data.Name);  //data에 Name입력

        //쿼리문작성. 조건은 내 마음대로   where의 조건으로 Name
        const sql = `delete from Student where Name="${data.Name}"`;
        await promisePool.query(sql);

    },
}
