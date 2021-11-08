//홈화면 기능 구현(로그인 화면 구현)
//데이터베이스에 데이터 삽입 구현
//views폴더의 login.hbs파일과 연동. 
//Form 구현
//form에서 데이터를 넘길때 받는파일이 login.hbs이다.

//express 사용하므로 모듈을 가져옴
import express from "express";
//selectSql모듈을 가져옴. {}은 보통 사용자가 만든 모듈을 가져올 때 사용 
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');  //login.hbs 파일을 찾아 렌더함(웹페이지에 뿌림)
});

//웹에서 데이터를 입력하고 삽입 버튼을 눌렀을때 처리를 router.post에서 처리함.
router.post('/', async (req, res) => {  //값들이 req에 전달되고, 
    const vars = req.body;  // 여기에 데이터가 저장됨 . 타입은 오브젝트 타입
    const users = await selectSql.getusers();  // 데이터베이스에서 유저정보 가져옴
    let whoAmI = ''  //값을 바꿀수 있을때 let 사용. admin인지 유저인지 구분을 위해 
                    //whoAmI변수만들고 빈스트림으로 둠
    let checkLogin = false;  //로그인 여부 확인. 처음에는 로그인 안했으므로 false

   // vars.id, vars.password;

   //for(let i = 0; i < users.length; i++) {
   //    if(vars.id === users[i].id && vars.password === users[i].password);
  // }


    //루프를 돌며 비교. for문대신 map사용. 콜백함수를 받고 기능을 수행.
  users.map((user)=> {
      if(vars.id === user.Id && vars.password === user.Password) {
          //로그인 했다면
          console.log('login success!');  //성공
          checkLogin = true;  //로그인 성공한거 확인
          if(vars.id === 'admin') {  //로그인한 사람이 관리자면
              whoAmI = 'admin';   //whoAmI를 admin으로
          }
          else {  //로그인한 사람이 유저이면
              whoAmI = 'user';  //whoAmI를 user로
          }
      }
  })

  //whoAmI 출력확인
    console.log('whoAmI:', whoAmI);

    //만약 admin이라면
    if(checkLogin && whoAmI === 'admin') {
        res.redirect('/delete');  //delete 페이지로
    }

    //유저라면
    else if(checkLogin && whoAmI === 'user') {
        res.redirect('/select');  //select 페이지로
    }
    //둘다 아니라면
    else {
        //실패메시지 출력. 팝업창 띄움.
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    }
})

module.exports = router;