//홈화면 기능 구현
//데이터베이스에 데이터 삽입 구현
//views폴더의 insert.hbs파일과 연동. 
//Form 구현
//form에서 데이터를 넘길때 받는파일이 insert.hbs이다.

//express 사용하므로 모듈을 가져옴
import express from "express";
//insertSql모듈을 가져옴. {}은 보통 사용자가 만든 모듈을 가져올 때 사용 
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/airplane', async (req, res) => {
    const airplane = await selectSql.getairplane();

    res.render('insertairplane', {  //insertairplane.hbs
        title: "비행기추가",
        airplane
    })
});

//웹에서 데이터를 입력하고 삽입 버튼을 눌렀을때 처리를 router.post에서 처리함.
router.post('/', (req, res) => {  //값들이 req에 전달되고, 
    const vars = req.body;  // 여기에 데이터가 저장됨 
    //넘어오는 데이터의 갯수로 테이블 구별
    const var_lenth = Object.keys(req.body).length;  

    //이게 만족한다면 airplane라는 뜻
    if (var_lenth > 2) {
        const data = {  //데이터라는 객체 만듬
            airplane_id: vars.airplane_id,
            total_number_of_seats: vars.total_number_of_seats,
            airplane_type: vars.airplane_type
            
        };

        //inserSql모듈에서 setairplane()라는 함수를 만들어 data객체를 인자로 줌
        insertSql.setairplane(data);

       
    } 
    
    //입력하고 나서 어떻게 할 것인가? "/"을 인자로 주었으므로 홈 화면으로... 
    //즉, 새로고침한다는뜻(똑같은 화면으로 redirect했으므로)
    res.redirect('/insert');
})


router.get('/airport', async (req, res) => {
    const airport = await selectSql.getairport();

    res.render('insertairport', {  //insertairport.hbs
        title: "공항추가",
        airport
    })
});

//웹에서 데이터를 입력하고 삽입 버튼을 눌렀을때 처리를 router.post에서 처리함.
router.post('/', (req, res) => {  //값들이 req에 전달되고, 
    const vars = req.body;  // 여기에 데이터가 저장됨 
    //넘어오는 데이터의 갯수로 테이블 구별
    const var_lenth = Object.keys(req.body).length;  

    //이게 만족한다면 airport라는 뜻
    if (var_lenth > 3) {
        const data = {  //데이터라는 객체 만듬
            airport_code: vars.airport_code,
            name: vars.name,
            city: vars.city,
            state: vars.state

            
        };

        //inserSql모듈에서 setairport()라는 함수를 만들어 data객체를 인자로 줌
        insertSql.setairport(data);

       
    } 
    
    //입력하고 나서 어떻게 할 것인가? "/"을 인자로 주었으므로 홈 화면으로... 
    //즉, 새로고침한다는뜻(똑같은 화면으로 redirect했으므로)
    res.redirect('/insert');
})

router.get('/flight', async (req, res) => {
    const flight = await selectSql.getflight();

    res.render('insertflight', {  //insertflight.hbs
        title: "비행추가",
        flight
    })
});

//웹에서 데이터를 입력하고 삽입 버튼을 눌렀을때 처리를 router.post에서 처리함.
router.post('/', (req, res) => {  //값들이 req에 전달되고, 
    const vars = req.body;  // 여기에 데이터가 저장됨 
    //넘어오는 데이터의 갯수로 테이블 구별
    const var_lenth = Object.keys(req.body).length;  

    //이게 만족한다면 airplane라는 뜻
    if (var_lenth > 2) {
        const data = {  //데이터라는 객체 만듬
            flight_number: vars.flight_number,
            airline: vars.airline,
            weekdays: vars.weekdays
            
        };

        //inserSql모듈에서 setflight()라는 함수를 만들어 data객체를 인자로 줌
        insertSql.setflight(data);

       
    } 
    
    //입력하고 나서 어떻게 할 것인가? "/"을 인자로 주었으므로 홈 화면으로... 
    //즉, 새로고침한다는뜻(똑같은 화면으로 redirect했으므로)
    res.redirect('/insert');
})

module.exports = router;