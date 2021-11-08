const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("mail");
const userid = document.getElementById("userid");
const printForm = document.getElementById("user");
const display = document.getElementById("form-result");

const handlePrint = (e) => {
    e.preventDefault();

    const fn = firstName.value
    const ln = lastName.value
    const em = email.value
    const id = userid.value

    const diplaySpan = display.querySelector("span");

    //아래처럼 html을 작성해서 index.html의  <span></span>에 붙이겠다
    diplaySpan.innerHTML = `   
    First Name is: ${fn}<br>
    Last Name is: ${ln}<br>
    E-mail is: ${em}<br>
    ID is: ${id}`;
}; 

printForm.addEventListener("submit", handlePrint);  
// 이벤트를 알려주는 함수. 마우스 클릭이나, submit버튼작동 등등
//여기서는 submit버튼 눌렀을때 모든 이벤트들을 실행시키게 되는것