import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 15%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
    justify-content: space-between;
    h1,
    h2 {
        margin-bottom: 20px;
    }

    p {
        margin-bottom: 15px;
    }
    .career {
        flex: 0.27;
    }
    .project {
        flex: 0.3;
    }
    .mind {
        flex: 0.33;
        p {
            line-height: 2;
        }
    }
`;

const AboutMe = () => {
    return (
        <Container>
            <div className="career">
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
            <div className="project">
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
                <p>
                    저는 호기심이 많은 프론트엔드 개발자입니다.
                    <br />
                    여러 프로젝트를 둘러보며 이건 어떻게 구현 되어있을까? 어떤
                    원리로 만든걸까? 의문을 가지고 접근하여 깊게 이해하려고
                    노력합니다.
                    <br />
                    <br />
                    저는 배우는것에 두려움이 없습니다.
                    <br />
                    무언갈 배울때 항상 첫 걸음은 공식문서를 보고 배우며, 더 깊이
                    배우고 싶을땐 다른 사람의 소스 또는 강의를 통해 노하우를
                    찾을려고 노력합니다.
                    <br />
                    <br />
                    저는 UI/UX에 대해 고민하는 개발자입니다.
                    <br />
                    디자인 혹은 동작하는 프론트단을 보며 이건 불편하지 않을까?
                    대부분의 사람이 사용 할때 어떤 느낌일까? 버튼을 버튼으로
                    인식 할까? 이런 의문을 가지고 고민하는 개발자입니다.
                </p>
            </div>
        </Container>
    );
};

export default AboutMe;
