//node_modules에서 모듈을 불러옴
import express from "express";
import logger from "morgan";
import path from "path";  //경로설정

//사용자가 만든 모듈을 불러옴. 경로지정
import loginRouter from "../routes/login";  //로그인 화면에 관한 주소처리. login.js 참조
import deleteRouter from "../routes/delete";  //삭제. delete.js참조
import selectRouter from "../routes/select";  //조회. select.js참조

const PORT = 3000;  //다른 포트 사용해도 됨

const app = express();  //http를 잘 몰라도 알아서 사용할 수 있도록 하는것.
                        // app이라는 객체이름으로 만들어 express 사용

                        //데이터 다루기 편하게
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//어떤 형식의 파일을 내화면에 출력할 것인가? hbs 사용
app.set('views', path.join(__dirname, '../views'));  
app.set('view engine', 'hbs')

app.use(logger("dev"));  //로그를 자세히 보기위해 사용하는것

app.use('/', loginRouter);  //  "/"은 홈 화면을 의미.  함수로 넘겨줌
app.use('/delete', deleteRouter);  //주소에서 삭제 부분으로 감.  함수로 넘겨줌
app.use('/select', selectRouter);  //주소에서 셀렉트 부분으로 감.  함수로 넘겨줌

//lisen해서 서버를 띄어줌. powershell터미널 선택후 npm run start를 해주면 실행가능
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    });