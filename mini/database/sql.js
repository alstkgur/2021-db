//데이터 베이스 접속 및 delete, select 기능 구현

import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'mini',
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
    getairport : async () => {

        //여기서 쿼리문은 airport테이블이며 sql문을 작성하는것
        //쿼리 실행
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from airport`);

        return rows
    },

    getairplane : async () => {

        //여기서 쿼리문은 airplane테이블이며 sql문을 작성하는것
        //쿼리 실행
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from airplane`);

        return rows
    },

    getflight : async () => {

        //여기서 쿼리문은 flight테이블이며 sql문을 작성하는것
        //쿼리 실행
        //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
        //데이터베이스에 접근하여 쿼리문 실행하게되는 것
        const [rows] = await promisePool.query(`select * from flight`);

        return rows
    },
}

//delete query
export const deleteSql = {
  
    //여기선 async가 변수로 data 사용
    deleteairport : async (data) => {
        console.log('deleteSql.deleteairport:', data.airport_code);  //data에 airport_code입력

        //쿼리문작성. 조건은 내 마음대로   where의 조건으로 Name
        const sql = `delete from airport where name="${data.name}"`;
        await promisePool.query(sql);

    },

    deleteairplane : async (data) => {
        console.log('deleteSql.deleteairplane:', data.airplane_id);  //data에 airplane_id입력

        //쿼리문작성. 조건은 내 마음대로   where의 조건으로 airplane_id
        const sql = `delete from airplane where airplane_id="${data.airplane_id}"`;
        await promisePool.query(sql);

    },

    deleteflight : async (data) => {
        console.log('deleteSql.deleteflight:', data.flight_number);  //data에 flight_number입력

        //쿼리문작성. 조건은 내 마음대로   where의 조건으로 flight_number
        const sql = `delete from flight where flight_number="${data.flight_number}"`;
        await promisePool.query(sql);

    },

}

export const updateSql = {
    //여기선 async가 변수 사용 x
    updateairport : async (data) => {
        // where 조건을 만족하는 행에 대해서 airport_code 수정
        const sql = `update airport set airport_code = "${data.airport_code}"`;
        await promisePool.query(sql);

    },

    updateairplane : async (data) => {
        // where 조건을 만족하는 행에 대해서 airplane_id 수정
        const sql = `update airport set airplane_id = "${data.airplane_id}"`;
        await promisePool.query(sql);

    },

    updateflight : async (data) => {
        // where 조건을 만족하는 행에 대해서 flight_number 수정
        const sql = `update flight set flight_number = "${data.flight_number}"`;
        await promisePool.query(sql);

    },

}


//insert query
export const insertSql = {
    //data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
    //insert.js에서 데이터만든걸 넘겨받음
    setairplane : async (data) => {
        //``을 사용한것과 ""을 사용한것의 차이는 $을 추가할수 있는지 없는지 여부임
        //쿼리문을 sql에 저장하며 $들의 데이터를 airplane테이블에 넣겠다 라는 의미임.
        const sql = `insert into airplane values (
            "${data.airplane_id}", "${data.total_number_of_seats}","${data.airplane_type}")`;
            
            //쿼리 실행
            //promisePool함수를 실행해서 쿼리함수 호출해서 쿼리를 넘겨주면 
            //데이터베이스에 접근하여 쿼리문 실행하게되는 것
            await promisePool.query(sql);


    },

    setairport : async (data) => {
        
        const sql = `insert into airport values (
            "${data.airport_code}", "${data.name}","${data.city}", "${data.state}")`;
            
            await promisePool.query(sql);


    },

    setflight : async (data) => {
        
        const sql = `insert into flight values (
            "${data.flight_number}", "${data.airline}","${data.weekdays}")`;
            
            await promisePool.query(sql);


    },
}


