import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  background-color: #414242;
  padding: 100px 20%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  .section {
    width: 40%;
    height: calc(100vh - 200px);
  }
  .content {
    flex: 1;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <div>
        <h1>KIM JUNHAN</h1>
        <p>프론트엔드 개발자 김준한 입니다.</p>

        <h2>PROFILE</h2>
        <p>1996. 07. 20</p>
        <p>+82 010 9968 3484</p>
        <p>jg348434@gmail.com</p>

        <h2>EDUCATION</h2>
        <p>2015. 03. 진주 기계공업고등학교 졸업</p>
        <p>2019. 08. IT-WILL 부산센터 교육(자바 웹과정 6개월)</p>
        <p>2021. 09. 코딩코리아 재직</p>
      </div>
      <div>
        <h2>PROJECT</h2>
        <p>2019. 07. WILLPASS 팀 프로젝트 진행</p>
        <p>2021. 09. 다이닝코드 팀 프로젝트 진행</p>
        <p>2021. 10. 3sixTeen 팀 사이드 프로젝트 진행</p>
        <p>2021. 10. 애가인 프로젝트 진행</p>
        <p>2021. 11. 마인 팀 프로젝트 진행</p>
        <p>2021. 12. 페달체크 팀 프로젝트 진행</p>
        <p>2022. 04. 브라질 로컬 앱 프로젝트 진행</p>
      </div>
      <div>
        <h2>SKILLS</h2>
      </div>
    </Container>
  );
};

const SKILLS = {
  front: [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JQUERY",
    "BOOTSTRAP",
    "REACT",
    "REACT-NATIVE",
    "TYPESCRIPT",
  ],
  back: ["JAVA", "MYSQL", "SPRING"],
};

export default AboutMe;
