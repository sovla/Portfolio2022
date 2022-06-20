import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import Menu from "../src/components/layout/Menu";

const boxFade = keyframes`
    0%{
        opacity:0.2 ;
    }
    100%{
        opacity:1 ;
    }
`;

const Container = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 15%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    justify-content: space-between;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
    h1,
    h2,
    h3,
    p {
        animation: ${boxFade} 2s;
    }
    h1,
    h2 {
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 15px;
    }
    .career {
        flex: 0.27;
        & > h1 {
            margin-top: 30px;
        }
        .face {
            width: 100px;
            height: 100px;
            border-radius: 100px;
        }
    }
    .project {
        flex: 0.3;
        & > h2:last-child {
            margin-top: 20px;
        }
    }
    .mind {
        flex: 0.33;
        h3 {
            margin-top: 30px;
            margin-bottom: 5px;
            font-weight: 600;
        }
        p {
            line-height: 2;
        }
    }
`;

const AboutMe = () => {
    return (
        <Container>
            <Menu />
            <div className="career">
                <Image
                    alt="faceImage"
                    className="face"
                    src={require("../src/assets/image/Face.png")}
                    layout="fixed"
                    width={220}
                    height={250}
                />
                <h1>KIM JUNHAN</h1>
                <p>프론트엔드 개발자 김준한 입니다.</p>

                <h2>PROFILE</h2>
                <p>1996. 07. 20</p>
                <p>+82 010 9968 3484</p>
                <p>jg348434@gmail.com</p>
            </div>
            <div className="project">
                <h2>EDUCATION</h2>
                <p>2015. 03. 진주 기계공업고등학교 졸업</p>
                <p>2019. 08. IT-WILL 부산센터 교육(자바 웹과정 6개월)</p>
                <p>2021. 09. 코딩코리아 입사</p>
                <h2>PROJECT</h2>
                <p>2019. 07. WILLPASS 팀 프로젝트 진행</p>
                <p>2021. 09. 다이닝코드 팀 프로젝트 진행</p>
                <p>2021. 10. 3sixTeen 팀 사이드 프로젝트 진행</p>
                <p>2021. 10. 애가인 프로젝트 진행</p>
                <p>2021. 11. 마인 팀 프로젝트 진행</p>
                <p>2021. 12. 페달체크 팀 프로젝트 진행</p>
                <p>2022. 04. 브라질 로컬 앱 프로젝트 진행</p>
            </div>
            <div className="mind">
                <h2>MIND</h2>
                <h3>저는 호기심이 많은 프론트엔드 개발자입니다.</h3>
                <p>
                    여러 프로젝트를 둘러보며 이건 어떻게 구현 되어있을까? 어떤
                    원리로 만든걸까? 의문을 가지고 접근하여 깊게 이해하려고
                    노력합니다.
                    <br />
                </p>
                <h3>저는 배우는것에 두려움이 없습니다.</h3>
                <p>
                    무언갈 배울때 항상 첫 걸음은 공식문서를 보고 배우며, 더 깊이
                    배우고 싶을땐 다른 사람의 소스 또는 강의를 통해 노하우를
                    찾을려고 노력합니다.
                    <br />
                </p>
                <h3>저는 UI/UX에 대해 고민하는 개발자입니다.</h3>
                <p>
                    디자인 혹은 동작하는 프론트단을 보며 이건 불편하지 않을까?
                    대부분의 사람이 사용 할때 어떤 느낌일까? 버튼을 버튼으로
                    인식 할까? 이런 의문을 가지고 고민하는 개발자입니다.
                </p>
            </div>
            <div className=""></div>
        </Container>
    );
};

export default AboutMe;
