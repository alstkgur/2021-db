# 11주차 과제

<br><br>

## 3주차 과제설명
<br><br>

1. 테이블 작성

### STUDENT 테이블 코드
<pre>
<code>
CREATE TABLE STUDENT(StudentNumber INTEGER NOT NULL,
Name VARCJAR(30) NOT NULL,
Grade INTEGER NOT NULL,
Major CHAR(3) NOT NULL,
AdmissionDate CHAR(11),
Email VARCHAR(60),
PRIMARY KEY (StudentNumber));
</code>
</pre>


- 테이블 생성

- 필드와 자료형, NULL유무 기입
<<<<<<< HEAD
-  PRIMARY KEY로 StudentNumber설정
=======
-  PRIMARY KEY로 StudentNumber설정.
>>>>>>> 7356c3f9455a6c793e0937ff869c5769449006ea

<br><br>

2. 테이블 구조 확인.

## <span style="color:blue"> desc STUDENT</span>
Field|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
StudentNumber|int|NO|PRI|NULL|
Name|varchar(30)|NO|    |NULL|
Grade|int|NO|   |NULL|
Major|char(20)|YES|   |NULL|
AdmissionDate|varchar(100)|YES|   |NULL|
Email|varchar(60)|YES|   |NULL|

- 테이블 구조 확인을 위해 desc STUDENT명령어 입력.


- 필드별로 타입과 NULL유무, PK,FK확인 DEFAULT 설정확인가능


<br><br>

3. INSERT INTO 를 이용한 데이터 삽입
- insert into STUDENT values (12162117, '민사혁', '정보통신공학과', 'Fri Mar 02 2016 CMT: 09:00 {대한민국 표준시}', 'alstkgur@naver.com');

- insert into STUDENT values ('김디비', 4, '정보통신공학과', 'Fri Mar 05, 2017 CMT:09:00 {대한민국 표준시}', 'dbddbdb@naver.com');

   - 자료형, 길이에 맞는 데이터 삽입

   - int형일때에는 ''안붙여도 된다



<br><br>

4. SELECT * FROM STUDENT

## <span style="color:red"> STUDENT테이블</span>

StudentNumber|Name|Grade|Major|AdmissionDate|Email
---|---|---|---|---|---|
12162117|민사혁|4|정보통신공학과|Fri Mar 02 2016 CMT: 09:00 (대한민국 표준시)|alstkgur@naver.com|
12171234|김디비|4|정보통신공학과|Fri Mar 05 2017 CMT:09:00 (대한민국 표준시)|dbddbdb@naver.com|

- insert into를 이용하여 STUDENT테이블에 데이터 삽입
- 지정된 자료형과 데이터의 길이를 위반하면 오류발생하므로 주의!

<br><br>


## 8주차 과제설명
<br><br>

1. 테이블 작성

### EMPLOYEE 테이블 코드
<pre>
<code>
create table employee
(Fname varchar(10) not null,
Minit char,
Lname, varchar(20) not null.
Ssn char(9) not null,
Bdate date,
Address varchar(30),
Sex char(1),
Salary decimal(5),
Super_ssn char(9),
Dno int not null),
primary key(Ssn));
</code>
</pre>

   - 참조로 pk를 Ssn으로 설정하였다.

<br><br>
### DEPARTMENT 테이블 코드
<pre>
<code>
create table department
(Dname varchar(15) not null,
Dnumber int not null,
Mgr_ssn char(9) not null,
Mgr_start_date date,
primary key(Dnumber),
unique (Dname),
foreign key(Mgr_ssn) references employee(Ssn));
</code>
</pre>
   
   - 참조로 pk를 Dnumber로 설정하였다.
   - unique로 Dname을 설정하였다.
   - 외래키로 Mgr_ssn을 설정하였ㄴ느데 이것은 employee테이블의 Ssn을 가리키고 있다.


<br><br>

2. 테이블 구조 확인

## <span style="color:blue"> desc EMPLOYEE</span>

   
   Field|Type|Null|Key|Default|Extra
   ---|---|---|---|---|---|
   Fname|varchar(10)|No|   |NULL|   |
   Minit|char(1)|YES|     |NULL|   |
   Lname|char(1)|YES|   |NULL|   |
   Ssn|char(9)|NO|PRI|NULL|   |
   Bdate|date|YES|   |   NULL|   |
   Address|varchar(30)|YES|   |NULL|   |
   Sex|char(1)|YES|   |NULL|   |
   Salary|decimal(5,0)|YES|   |NULL|   |
   Super_ssn|char(9)|YES|   |NULL|   |
   Dno|int|NO|   |NULL|   |

<br><br>
   
   ## <span style="color:blue"> desc department</span>

   Field|Type|Null|Key|Default|Extra
   ---|---|---|---|---|---|
   Dname|varchar(15)|NO|UNI|NULL|   |
   Dnumber|int|NO|PRI|NULL|   |
   Mgr_ssn|char(9)|NO|MUL|NULL|   |
   Mgr_start_date|date|YES|   |NULL|   |

   - employee, department 테이블을 작성하고, 구조를 확인해보았다.
   - 관계를 고려하여 생성한 것이다.


<br><br>

3. INSERT INTO 를 이용한 데이터 삽입

 ## <span style="color:green"> 직원 테이블</span>
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
---|---|---|---|---|---|---|---|---|---|
철수|F|박|12111111|Thu Sep 09 1999 00:00:00 GMT +0900 (대한민국 표준시)|인천|남|10|   |0|
호동|K|강|11111111|Thu Jan 01 1970 00:00:00 GMT+0900(대한민국 표준시)|서울|남|1000|   |1|
재석|Y|유|22222222|Fri Jan 01 1971 00:00:00 GMT +0900(대한민국 표준시)|부산|남|2000|   |2|
사나|M|미나토자키|33333333|Mon Jan 01 1996 00:00:00 GMT+0900(대한민국 표준시)|일본|여|3000|   |3|
쯔위|z|아몰라|55555555|Fri Jan 01 1999 00:00:00 GMT+0900(대한민국 표준시)|대만|여|1234|   |4|

<br><br>

## <span style="color:green"> 부서 테이블</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date
---|---|---|---|
정보통신공학과|0|12111111|Thu Oct 21 2021 00:00:00 GMT+0900(대한민국 표준시)|
sm 엔터|1|11111111|Fri Oct 22 2021 00:00:00 GMT+0900 (대한민국 표준시)|
jyp엔터|3|33333333|Wed Now 11 2020 00:00:00 GMT+0900 (대한민국 표준시)|

   - 3주차와는 다르게 http://localhost:3000에서 직접 데이터 삽입
   - http://localhost:3000/select에서 정확히 데이터가 삽입되었는지 확인 가능
   
   <br><br>


   4. 데이터 update
   - http://localhost:3000/update/employee의 주소로 가면 직원 데이터 수정 페이지로 가는 것이다. 


 ## <span style="color:green"> employee의 경우</span>     
   
   <pre>
   <code>
   const sql = `update employee set salary = "${data.Salary}" where Dno = 1`;
   </code>
   </pre>

   - 다음과 같이 제약조건을 주어서 salary를 변경할 수 있는 조건으로 Dno가 1인 경우로 제약을 걸었다. 
   - 실제로 해보면 Dno가 1인 곳만 값이 정상적으로 바뀌는 것을 볼 수 있다.
- updateEmployee.hbs에서 다음과 같이 input tag를 넣어서 입력 가능한 형태로 주어진 코드를 변경하였다.

   <br><br>

 ## <span style="color:green"> department의 경우</span>  
 <pre>
   <code>
   const sql = `update department set Dname = "${data.Dname}" where Mgr_ssn = 11111111`;
   </code>
   </pre>

   - department테이블에서는 where의 조건으로 Mgr_ssn이 11111111인 경우에만 Dname을 수정할 수 있도록 하였다.
   - updateDepartment.hbs에서도 input tag를 넣어서 입력 가능한 형태로 주어진 코드를 변경하였다.

<br><br>

   ## 10주차 과제설명

1. 테이블 작성

<br><br>

### USER 테이블 코드
<pre>
<code>

create table user
( Id varchar(20) not null,
Password varchar(2) not null,
Role varchar(5) not null,
primary key(id));

</code>
</pre>

- user 테이블은 로그인할때 필요한 테이블이다.
- pk로 id를 설정하였다.

<br><br>
### DEPARTMENT 테이블 코드

<pre>
<code>

create table department
( Dname varchar(15) not null,
Dnumber int not null,
Primary key(Dnumber),
unique (Dname));

</code>
</pre>

- department테이블은 이론강의에서 예시로 가져온것이다
- pk를 Dnumber로 설정하였다.
- unique로 Dname을 설정하였다.

<br><br>

2. INSERT INTO 를 이용한 데이터 삽입

<pre>
<code>

insert into user values ("admin", "admin1234", "admin");
insert into user values ("test", "test1234", "users");

</code>
</pre>

- user테이블에 위와 같은 데이터 삽입
- admin으로 로그인하면 관리자권한, test로 로그인하면 일반유저권한
- department테이블에 데이터 삽입


<br><br>

3. 만들어진 테이블

<br><br>

## <span style="color:green"> department테이블</span>  
Dname|Dnumber
---|---|
전기공학과|2|   
전자공학과|3|
정보통신공학과|0|
컴퓨터공학과|1|

<br><br>

   - admin으로 로그인시 관리자로 로그인되어 localhost"3000/delete페이지로 바로 리다이렉트 된다.
   - test로 로그인시 일반유저로 로그인되어 localhost"3000/select페이지로 바로 리다이렉트 된다. 
   - 삭제할때 같은행에 관해 Dnumber를 넘기는 것으로 where조건문을 만족하면 정상적으로 삭제가 되도록 하고, 그게 아니라면 작동을 하지 않는다.
   - 만약 삭제가 되었다면 select페이지에서도 보이지 않는다. 

   <br><br>


   4. 새로운 테이블 작성
<br><br>

      #### 새로운 테이블 생성
      

<pre>
<code>
create table STUDENT (
Name varchar(20) not null,
Student_Number int not null,
primary key (Student_Number),
unique(name),
class int not null,
Major varchar(20));
</code>
</pre>

- 임의의 테이블을 새로 만든것
- 과제2 강의노트에 적혀있는 테이블을 가져와 사용
- pk로 Student_Number를 설정
- unique로 name 설정


 <br><br>

## <span style="color:green"> STUDENT테이블 구조 확인 </span>  

Filed|Type|Null|Key|Default|Extra
---|---|---|---|---|---|
Name|varchar(20)|NO|UNI|NULL|   |
Student_number|int|NO|PRI|NULL|   |
Class|int|NO|   |NULL|   |
Major|varchar(20)|YES|   |NULL|   |

<br><br>

## <span style="color:green"> 데이터삽입 </span>  

<pre>
<code>
insert into student values ("Brown", 8, 2,"CS");
insert into student values ("Gauss", 9, 4, "MATH");
insert into student values ("JONES", 15, 4, "CS");
insert into student values ("Smith", 17, 1, "CS");
insert into student values ("Patel", 22, 4, "CS);
</code>
</pre>

- 5개의 테이터 삽입

<br><br>


## <span style="color:green">데이터 삽입된 테이블 확인 </span>  
Name|Student_Number|Class|Major
---|---|---|---|
Brown|8|2|CS|
Gauss|9|4|MATH|
JONES|15|$|CS|
Smith|17|1|CS|
Patel|22|4|CS|


<br><br>

## <span style="color:red">where 조건문 수정</span>  

<pre>
<code>
const sql = `delete from Student where Name="${data.Name}"`;
await promisePool.query(sql);
</code>
</pre>

- 쿼리문을 작성한 것인데 where의 조건으로 name을 주었다. 즉, name에 대해 같은행을 삭제하는 것으로 삭제버튼을 눌렀을때 Name조건에 부합하는 행만 삭제가 되도록 하는 것이다.
- 주의해야할점은 name컬럼은 varchar형이기 때문에 $부분을 " "로 묶어주어야 제대로 작동을 하게된다. 
- 실제로 삭제를 해보면 정상적으로 작동을 하는 것을 볼 수 있다.














   






















