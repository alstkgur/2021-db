//3주차 과제와 동일
//조회 화면 기능 구현
//데이터베이스의 데이터 조회 구현
//views 폴더의 select.hbs 파일과 연동
//테이블에 데이터 값 제시. 즉, 테이블형태로 만들었음

//router객체를 사용할 것이므로 express 모듈을 가져옴
import express from "express";

//selectSql모듈을 가져옴. {}은 보통 사용자가 만든 모듈을 가져올 때 사용 
import { selectSql } from "../database/sql";

const router = express.Router();

//여기서의 "/"는 홈을 뜻하는게 아닌 /select를 나타내는 것
router.get('/', async function(req, res) {

    //selectsql에서  getairport불러와서 각각 airport에 저장
    const airport = await selectSql.getairport();

    //selectsql에서  getairplane불러와서 각각 airplane에 저장
    const airplane = await selectSql.getairplane();

    //selectsql에서  getflight불러와서 각각 flight에 저장
    const flight = await selectSql.getflight();

    //웹에 뿌려주는건데 select는 렌더할때 select.hbs를 의미하므로 이것을 불러와서 아래것들을 넘겨줌
    res.render('select', {
        title: '공항리스트',
        airport
    });

    res.render('select', {
        title: '비행기리스트',
        airplane
    });

    res.render('select', {
        title: '비행리스트',
        flight
    });
});

module.exports = router;
