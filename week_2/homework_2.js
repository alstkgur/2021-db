//게이지바 input 태그 객체를 가져온다
const progress = document.getElementById("js-range");
//게이지바에서 범위를 선택하면
//범위 선택에 대한 이벤트는 change이벤트 이다
//이벤트 리스터에는 이벤트 객체가 파라미터로 전달된다.
progress.addEventListener("change", (event) => {
const range = event.target.value;
//게이지의 최소 값이 5이므로 선택 범위가 5이하면
//랜덤함수로 1~5의 값 중 랜덤으로 출력하기 위해
//최소 범위를 0으로 설정.
const minRange = range <= 5 ? 0 : 5;
//컴퓨터가 선택한 숫자
//Math.random()은 0~1사이의 난수 생성하는데
//범위를 정하고 정수를 출력하기 위해 Math.random() * (range - minRange + 1) + minRange
//처럼 작성. 최대치가 max이고 최소가 min일때
//Math.random() * (max - min + 1) + min을 하면 min~max 사이의 정수가 나온다
//Math.floor()는 반올림, Math.random이 부동소수점을 출력하기 때문에 정수 출력을 위해 사용
const computer = Math.floor(
Math.random() * (range - minRange + 1) + minRange
);

//브라우저에서 선택한 최대 수를 보여주는 span 객체를 가져온다
const maxRange = document.getElementById("js-max-range");
//span안에 텍스트를 게이지바에서 선택한 최대 수로 설정
maxRange.innerText = range;
//유저가 숫자를 입력하는 input태그
const user = document.getElementById("js-input");
//Play! 버튼
const submit = document.getElementById("js-play");
//결과 출력을 보면 You lost!는 굵은 글씨이다.
//굵은 글씨를 사용하기 위해 strong 태그 생성.
//strong 태그는 span같은 태그이나 굵은 글씨를 사용한다
const winner = document.createElement("strong");

//사용자가 Play!버튼을 클릭하면
submit.addEventListener("click", () => {
//위에서 생성한 strong 태그에 결과를 할당한다
//user가 입력한 값인 user.value와 컴퓨터의 값이 같으면
//winner 태그에 You win!을 넣고, 아니면 You lost!를 넣는다
winner.innerText =
user.value === computer.toString() ? "You Wim!" : "You lost!";
//결과를 넣는 span 태그를 가져온다
const result = document.getElementById("js-result-output");
//내가 선택한 값과 컴퓨터가 선택한 값을 넣는다.
//여기서 끝에 엔터가 들어가 있는데 이렇게 해야 답지처럼 개행이 된다.
result.innerText = `You choose ${user.value}, the machine choose ${computer}.
`;
//id가 js-result-output인 span태그 맨 아래에 위에서 만든 strong 태그를 넣는다.
//<span id="js-result-output">
// You choose 1, the machine choose 3.
// <strong>You lost!</strong>
//</span>
//처럼 된다.
result.appendChild(winner);
});
});

//button tag에 type을 submit에서 button으로 바꾸었습니다
//type이 submit이면 버튼을 클릭했을때 페이지가 자동으로 새로고침 되서
//값이 다 날라가 버립니다
//이를 방지하기 위해 type을 button을 바꾸었습니다
