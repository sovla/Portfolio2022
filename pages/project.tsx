import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import LeftArrow, { RightArrow } from "../src/components/layout/Arrow";
import Menu from "../src/components/layout/Menu";

const Main = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 20%;
    min-height: 100vh;
`;

const Box = styled.div`
    & > h1 {
        color: #cacaca;
        font-size: 30px;
        margin-bottom: 30px;
    }
`;

const TagItem = styled.div<{ isSelect: boolean }>`
    user-select: none;
    position: relative;
    border: 1px solid #222;
    background-color: #313131;
    border-width: 1px 1px 2px 1px;
    box-shadow: 1px 1px 0 rgb(0 0 0 / 25%);
    padding: 5px 7px;
    margin-right: 5px;
    border-radius: 3px;
    margin-top: 5px;
    & > p {
        color: #999;
        font-family: MontSerrat, Tahoma, Arial, sans-serif;
    }
    &::before {
        content: "";
        top: 0;
        left: 0;
        height: 50%;
        display: block;
        position: absolute;
        z-index: 1;
        border-radius: 3px 3px 0px 0px;
        width: 100%;
        ${(p) =>
            !p.isSelect &&
            css`
                transform: scale(0);
            `}
        background-color: ${(p) => (p.isSelect ? "#9997" : "#0000")};
        transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.1, 1);
    }
    &::after {
        content: "";
        border-radius: 0px 0px 3px 3px;
        bottom: 0;
        left: 0;
        display: block;
        height: 50%;
        position: absolute;
        width: 100%;
        ${(p) =>
            !p.isSelect &&
            css`
                transform: scale(0);
            `}
        background-color: ${(p) => (p.isSelect ? "#9995" : "#0000")};
        transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.1, 1);
    }

    &:hover {
        cursor: pointer;
        &::before {
            content: " ";

            z-index: 1;
            background-color: #9997;
            transform: scale(1);
        }
        &::after {
            content: " ";
            background-color: #9995;
            transform: scale(1);
        }
    }
`;

const Tag = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProjectDiv = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    padding-top: 50px;

    & > .projectItem {
        position: relative;
        width: 47.5%;
        border: 1px solid white;
        margin-top: 60px;
        box-shadow: 8px 8px 0 rgb(0 0 0 / 15%);
        min-height: 400px;
        @media (max-width: 1200px) {
            width: 100%;
        }
        @media (max-width: 425px) {
            min-height: 200px;
        }

        & :hover {
            cursor: pointer;
        }
        .projectText {
            display: flex;
            flex-direction: row;
            background-color: #ddd;
            justify-content: center;
            height: 30px;
            & > h1 {
                content: attr(data-text);
                text-align: center;
                font-size: 14px;
                text-transform: uppercase;
                font-family: MontSerrat, Tahoma, Arial, sans-serif;
                font-weight: 700;
                line-height: 26px;
                letter-spacing: -0.5px;
                color: #8a8a8a;
            }
        }
        .projectImg {
            width: 100%;
            height: calc(100% - 30px);
            position: relative;

            & * {
                object-fit: cover;
            }
        }
        .projectDim {
            width: 100%;
            height: 0px;
            position: absolute;
            left: 0;
            top: 30px;
            background-color: #0006;
            transition: height 0.3s;
            opacity: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            & > p {
                opacity: 0;
                user-select: none;
                position: relative;
                border: 1px solid #222;
                background-color: #313131;
                border-width: 1px 1px 2px 1px;
                box-shadow: 1px 1px 0 rgb(0 0 0 / 25%);
                padding: 5px 7px;
                margin-right: 5px;
                border-radius: 3px;
                width: fit-content;
                color: #999;
                font-family: MontSerrat, Tahoma, Arial, sans-serif;
                transition: 1s ease-in-out;
            }
        }
        .service {
            position: absolute;
            right: 0;
            top: 0;
            width: 150px;
            height: 150px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            & > div {
                transform: rotate(45deg) translate3d(0px, -40px, 0);
                min-width: 200px;
                height: 60px;
                background-color: #030303;
                display: flex;
                align-items: center;
                justify-content: center;
                & > p {
                    font-size: 28px;
                    color: white;
                }
            }
        }
    }
    & > .projectItem:hover .projectDim {
        height: calc(100% - 30px);
        opacity: 1;
        & > p {
            opacity: 1;
        }
    }
    & > .projectItem:nth-child(2n) {
        margin-left: 5%;
        @media (max-width: 1200px) {
            margin-left: 0px;
        }
    }
`;

const project = () => {
    const router = useRouter();
    const [selectTagList, setSelectTagList] = useState<string[]>(["SHOW ALL"]);

    const tagList = useMemo(() => {
        let result: string[] = ["SHOW ALL"];
        ProjectDummy.forEach((v) =>
            v.tag.forEach((_forEachValue) => {
                if (result.includes(_forEachValue)) {
                    return;
                } else {
                    result.push(_forEachValue);
                }
            })
        );
        return result;
    }, []);

    const onClickTag = useCallback(
        (value: string) => {
            if (value === "SHOW ALL") {
                setSelectTagList(["SHOW ALL"]);
                return;
            }
            if (selectTagList.includes(value)) {
                setSelectTagList((prev) => {
                    const filter = prev.filter((v) => v !== value);
                    return filter.length === 0 ? ["SHOW ALL"] : filter;
                });
            } else {
                setSelectTagList((prev) => [
                    ...prev.filter((v) => v !== "SHOW ALL"),
                    value,
                ]);
            }
        },
        [selectTagList]
    );

    const onClickProjectItem = useCallback(
        (index: number) => {
            router.push(`projectDetail/${index}`);
        },
        [router]
    );

    const reverseProjectDummy = [...ProjectDummy].reverse();

    return (
        <Main>
            <Head>
                <title>Gavri-Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Box>
                <h1>Web App FrontEnd Developer Portfolio</h1>

                <Tag>
                    {tagList.map((v) => (
                        <TagItem
                            key={v}
                            onClick={() => onClickTag(v)}
                            isSelect={selectTagList.includes(v)}
                            className="tagItem"
                        >
                            <p>{v}</p>
                        </TagItem>
                    ))}
                </Tag>
                <ProjectDiv>
                    {reverseProjectDummy.map((v, i) => {
                        if (
                            !selectTagList.find((findValue) =>
                                v.tag.includes(findValue)
                            ) &&
                            !selectTagList.includes("SHOW ALL")
                        ) {
                            return null;
                        }
                        return (
                            <div
                                key={v.name}
                                className="projectItem"
                                onClick={() =>
                                    onClickProjectItem(
                                        reverseProjectDummy.length - 1 - i
                                    )
                                }
                            >
                                <div className="projectText">
                                    <h1>{v.name}</h1>
                                </div>
                                <div className="projectImg">
                                    <Image
                                        style={{
                                            maxHeight: "360px",
                                        }}
                                        objectFit="cover"
                                        src={v.thumbnail}
                                        alt="projectThumbnail"
                                        layout="fill"
                                    />
                                </div>
                                <div className="projectDim">
                                    {v.tag.map((_innerValue, _index) => (
                                        <p key={_index}>{_innerValue}</p>
                                    ))}
                                </div>
                                <div className="service">
                                    <div
                                        style={{
                                            backgroundColor: v.colorCode,
                                        }}
                                    >
                                        <p>{v.service}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </ProjectDiv>
            </Box>
            <LeftArrow menu="aboutme" />
            <RightArrow menu="contact" />
        </Main>
    );
};

export default project;

export const ProjectDummy = [
    {
        tag: ["국비지원", "JSP", "TEAM-PROJECT", "MYSQL", "JAVA", "MVC2"],
        name: "WILL-PASS",
        date: "2020-06 ~ 2020-08",
        service: "WEB",
        colorCode: "#64CDF5",
        img: [
            require("../src/assets/image/willpass/슬라이드1.png"),
            require("../src/assets/image/willpass/슬라이드2.png"),
            require("../src/assets/image/willpass/슬라이드3.png"),
            require("../src/assets/image/willpass/슬라이드4.png"),
            require("../src/assets/image/willpass/슬라이드5.png"),
            require("../src/assets/image/willpass/슬라이드6.png"),
            require("../src/assets/image/willpass/슬라이드7.png"),
            require("../src/assets/image/willpass/슬라이드8.png"),
            require("../src/assets/image/willpass/슬라이드9.png"),
            require("../src/assets/image/willpass/슬라이드10.png"),
            require("../src/assets/image/willpass/슬라이드11.png"),
            require("../src/assets/image/willpass/슬라이드12.png"),
            require("../src/assets/image/willpass/슬라이드13.png"),
            require("../src/assets/image/willpass/슬라이드14.png"),
            require("../src/assets/image/willpass/슬라이드15.png"),
            require("../src/assets/image/willpass/슬라이드16.png"),
            require("../src/assets/image/willpass/슬라이드17.png"),
            require("../src/assets/image/willpass/슬라이드18.png"),
            require("../src/assets/image/willpass/슬라이드19.png"),
            require("../src/assets/image/willpass/슬라이드20.png"),
            require("../src/assets/image/willpass/슬라이드21.png"),
            require("../src/assets/image/willpass/슬라이드22.png"),
            require("../src/assets/image/willpass/슬라이드23.png"),
            require("../src/assets/image/willpass/슬라이드24.png"),
            require("../src/assets/image/willpass/슬라이드25.png"),
            require("../src/assets/image/willpass/슬라이드26.png"),
            require("../src/assets/image/willpass/슬라이드27.png"),
            require("../src/assets/image/willpass/슬라이드28.png"),
            require("../src/assets/image/willpass/슬라이드29.png"),
            require("../src/assets/image/willpass/슬라이드30.png"),
            require("../src/assets/image/willpass/슬라이드31.png"),
            require("../src/assets/image/willpass/슬라이드32.png"),
            require("../src/assets/image/willpass/슬라이드33.png"),
            require("../src/assets/image/willpass/슬라이드34.png"),
            require("../src/assets/image/willpass/슬라이드35.png"),
            require("../src/assets/image/willpass/슬라이드36.png"),
            require("../src/assets/image/willpass/슬라이드37.png"),
            require("../src/assets/image/willpass/슬라이드38.png"),
            require("../src/assets/image/willpass/슬라이드39.png"),
            require("../src/assets/image/willpass/슬라이드40.png"),
            require("../src/assets/image/willpass/슬라이드41.png"),
            require("../src/assets/image/willpass/슬라이드42.png"),
            require("../src/assets/image/willpass/슬라이드43.png"),
            require("../src/assets/image/willpass/슬라이드44.png"),
            require("../src/assets/image/willpass/슬라이드45.png"),
            require("../src/assets/image/willpass/슬라이드46.png"),
            require("../src/assets/image/willpass/슬라이드47.png"),
            require("../src/assets/image/willpass/슬라이드48.png"),
            require("../src/assets/image/willpass/슬라이드49.png"),
            require("../src/assets/image/willpass/슬라이드50.png"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/willpass/WILLPASSThumbNail.png"),
        content:
            "WILL PASS는 실제 여행사 처럼 예매가 가능하도록 만든 가상의 웹사이트 입니다. MVC2 패턴을 적용하여 진행 하였으며, 주요 기능으론 회원 CRUD, 실제 항공편 기준 예매 서비스, 문의 게시판, 실시간 채팅 고객센터가 있습니다.",
        worker: "",
        type: "team",
        skill: [
            "JAVA",
            "JSP",
            "MVC2-PATTERN",
            "Javascript ES6",
            "CSS3 – CSS Modules",
            "HTML-5",
            "Jsoup",
            "Java Thread Pool",
            "Ajax",
            "Bootstrap",
        ],
        depscription: () => (
            <>
                <h2>주요 기능</h2>
                <p>
                    회원가입, 로그인, 항공기 예매 서비스, 메일링, 실시간 채팅
                    상담 서비스, 문의 게시판 기능이 존재합니다.
                    <br />
                    프론트 기술 - 부트스트랩4, JSP, HTML, CSS
                    <br />
                    백엔드 기술 - 자바 MVC2, MySQL, 공공 빅데이터 API, Jsoup,
                    JavaThreadPool, SMTP
                </p>
                <br />
                <h2>팀 프로젝트</h2>
                <p>
                    5명의 팀원과 같이 협업을 하며 팀 프로젝트를 진행하는 부분에
                    대해 많이 배울 수 있엇습니다. 프로젝트 진행 방식에 대해 많은
                    것을 배웠고,어려운 부분이 있으면 소통을 하며 학습할 수
                    있엇습니다.
                </p>
                <br />
                <h2>프론트엔드</h2>
                <p>
                    프론트엔드 빠른 개발을 위해 부트스트랩 프레임 워크를
                    이용하였으며, 에어 부산의 디자인을 벤치마킹하여 깔끔한
                    디자인으로 작업하였습니다.
                </p>
                <br />
                <h2>백엔드</h2>
                <p>
                    백엔드의 경우 MVC2 패턴을 사용하여 클라이언트의
                    요청,응답처리 및 비즈니스 로직 처리부분을 모듈화 하여
                    유지보수 및 확장성에 용이하게 작업을 진행하였습니다. 공공
                    빅데이터에서 국내 항공 정보 API를 이용해 실제 항공 정보를
                    기반으로 예매가 가능하도록 작업 하였습니다. 해당 API에서
                    국외데이터가 나오지 않아 항공정보포털시스템 사이트 크롤링을
                    통해 국외 정보도 지원 하였습니다.
                </p>
                <br />
                <h2>소스 관리 Git</h2>
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 익숙하지 않아 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
                </p>
                <br />
                <h2>프로젝트 진행중 생긴 문제</h2>
                <h3>Jsoup을 이용한 크롤링 시간 문제</h3>
                <p>
                    공공데이터 항공API를 이용해 실제 항공편을 검색해 사용하던 중
                    국제편을 지원하지않아 항공정보 포털에 실제 정보를 크롤링해
                    해당 정보를 받아왔습니다. 그런데 항공편이 늘어날 수 록 로딩
                    시간이 대략 10초 정도 걸리는 문제가 있엇습니다. 해당 문제를
                    해결하기 위해 ThreadPool을 이용한 비동기 처리 방식을
                    적용하였습니다. 로딩 시간은 대략 1초 이내로 줄인 경험이
                    있습니다.
                </p>
            </>
        ),
    },
    {
        tag: [
            "REACT-JS",
            "NEXT-JS",
            "TYPESCRIPT",
            "REDUX",
            "Styled-Components",
            "TEAM-PROJECT",
        ],
        name: "다이닝코드",
        date: "2021-09 ~ 2021-10",
        service: "WEB",
        colorCode: "#414242",
        img: [
            require("../src/assets/image/diningcode/1.png"),
            require("../src/assets/image/diningcode/2.png"),
            require("../src/assets/image/diningcode/3.png"),
            require("../src/assets/image/diningcode/4.png"),
            require("../src/assets/image/diningcode/5.png"),
            require("../src/assets/image/diningcode/6.png"),
            require("../src/assets/image/diningcode/7.png"),
            require("../src/assets/image/diningcode/8.png"),
            require("../src/assets/image/diningcode/9.png"),
            require("../src/assets/image/diningcode/10.png"),
            require("../src/assets/image/diningcode/11.png"),
            require("../src/assets/image/diningcode/12.png"),
            require("../src/assets/image/diningcode/13.png"),
            require("../src/assets/image/diningcode/14.png"),
            require("../src/assets/image/diningcode/15.png"),
            require("../src/assets/image/diningcode/16.png"),
            require("../src/assets/image/diningcode/17.png"),
            require("../src/assets/image/diningcode/18.png"),
            require("../src/assets/image/diningcode/19.png"),
            require("../src/assets/image/diningcode/20.png"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/diningcode/thumbnail.png"),
        content:
            "실제 서비스 중인 다이닝코드 리뉴얼 프로젝트에 참여한 경험이 있습니다. 저의 메인 작업은 회원가입, 로그인, 피드, 리뷰 페이지입니다. 반응형 웹페이지 퍼블을 맡았으며 API 작업전 UI 부분 작업을 진행 하였습니다.",
        worker: "프론트 엔드 3명 / 백엔드의 경우 클라이언트쪽에서 작업 완료",
        type: "team",
        skill: [
            "Next.js",
            "React",
            "StoryBook",
            "Es-Lint",
            "Git",
            "TypeScript",
            "Styled-Components",
        ],
        depscription: () => (
            <>
                <h2>입사후 첫 프로젝트</h2>
                <p>
                    Next.js TypeScript를 처음 접한 상태로 프로젝트에 임하게
                    되었습니다. 팀원들에게 폐를 끼치지 않기 위해 퇴근후,출근전
                    공부를 하며 저의 부족한점을 채웠습니다. 나중에는 Next에서
                    Modal을 공통적으로 만들고 제어하는 방법등 오히려 제가
                    팀원들에게 이런 방향으로 하는게 좋지 않을까요? 질문을 하는등
                    배울 점 있는 팀원이 되었습니다.
                </p>
                <br />
                <h2>Next.js , Lighthouse</h2>
                <p>
                    Next.js의 경우 검색엔진 최적화(SEO)를 위해 적용된
                    기술입니다. 다이닝코드는 맛집 웹 사이트로써 타 사이트보다
                    SEO에 중요도를 높게 봐야했습니다. 기존 React의 경우 SPA로써
                    SEO 가 어려웠던 반면 Next의 경우 Head 컴포넌트를 따로
                    지원해줘 각 페이지마다 SEO 적용이 쉬웠습니다.
                </p>
                <br />
                <p>
                    Lighthouse 툴을 이용해 SEO,접근성,성능 등 웹 최적화 과정을
                    진행하였고 처음엔 60점 밑으로 맴돌던 평균 점수를 90점 가량
                    높인 경험이 있습니다. SEO에 중점을 둬 작업을 진행 하였고
                    기존 실제 상용화된 서비스를 기준으로 접근성 또한 신경써서
                    작업을 진행하였습니다. 성능 또한 기존의 경우 이미지 의
                    크기를 신경쓰지 않고 작업해 1mb이상 나오는 부분을 해결하기
                    위해 네이버 사이트를 참고해 하나의 이미지를 받아와 부분 부분
                    잘라 사용하는 방식을 적용해 1mb 이상 나오던 용량을
                    700kb이하로 낮춘 경험이 있습니다.
                </p>
                <br />
                <h2>스토리북 도입 배경</h2>
                <p>
                    3명의 프론트엔드 개발자가 협업을 하면서 어려웠던 점이
                    여러가지 있었습니다.
                    <br />
                    1. 작업을 진행하면서 컴포넌트는 늘어나는데 자신이 만든
                    컴포넌트 외에는 알 수 있는 부분이 없었습니다.
                    <br />
                    2. UI 작업시 데스크탑 웹, 모바일 웹 두번 확인을 거쳐야 해서
                    테스팅 시간이 두배로 들어 생산성이 떨어졌습니다.
                    <br />
                    <p>
                        위 문제를 해결 하기 위해 프로젝트 진행중 부득이하게
                        컴포넌트 설계부터 다시하게 되었습니다. 스토리북을 통해
                        컴포넌트를 직관적으로 볼 수 있도록 하였으며, 스토리북을
                        효율적으로 사용하기 위해 컴포넌트 설계시 아토믹 컴포넌트
                        패턴 즉 작은 버튼부터 하나씩 조립하는 형태로 진행하여
                        코드 생산성을 높인 경험이 있습니다.
                    </p>
                </p>
                <br />
            </>
        ),
    },
    {
        tag: [
            "REACT-JS",
            "TYPESCRIPT",
            "RECOIL",
            "Styled-Components",
            "Node.js",
            "Koa",
            "TEAM-PROJECT",
        ],
        name: "3SixTeen Copy",
        service: "WEB",
        colorCode: "#C6AF96",
        date: "2021-10 ~ 2021-11",
        img: [
            require("../src/assets/image/3sixteen/thumbnail.png"),
            require("../src/assets/image/3sixteen/0.png"),
            require("../src/assets/image/3sixteen/1.png"),
            require("../src/assets/image/3sixteen/2.png"),
            require("../src/assets/image/3sixteen/3.png"),
            require("../src/assets/image/3sixteen/4.png"),
            require("../src/assets/image/3sixteen/5.png"),
            require("../src/assets/image/3sixteen/6.png"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/3sixteen/thumbnail.png"),
        content:
            "업무 시간외에 프론트 엔드 공부를 위해 참여한 프로젝트 입니다. 3SixTeen 홈페이지를 벤치마킹 하여 해당 사이트를 구현하였으며 Node.js 를 이용해 백엔드를 구현 해보았습니다.",
        worker: "",
        type: "team",
        skill: [
            "React",
            "Next.js",
            "TypeScript",
            "Koa",
            "Node.js",
            "Styled-Components",
            "Recoil",
        ],
        depscription: () => (
            <>
                <h2>주요기능</h2>
                <p>
                    로그인, 회원가입, 상품 구매, 장바구니, 가결제 시스템으로
                    구성되어있습니다.
                    <br /> 프론트 기술 - TypeScript, React
                    <br /> 백엔드 기술 - Node, Koa 프레임워크, MySQL
                </p>
                <h2>사이드 프로젝트</h2>
                <p>
                    회사 프로젝트를 진행함에 있어 React 숙련도를 빠르게 올릴
                    방법을 고민하다. 모 사이트에서 마음이 맞는 사람들과 사이드
                    프로젝트를 진행하게 되었습니다. 프로젝트를 진행하면서 React
                    그리고 관련 라이브러리의 사용방식을 익히게 되었고, 더 나아가
                    회사 프로젝트에도 새로 배운점을 적용하며 프로그래머로써
                    성장했습니다.
                </p>
                <br />
                <h2>소통 방식</h2>
                <p>
                    주 1회 프로젝트 진행 확인을 위해 Notion과 Slack을 이용해
                    회의록 작성 및 WBS 작성에 힘썻습니다. 모르는 내용의 경우
                    Slack을 통해 공유하였고 그 내용을 바탕으로 노션에 정리해 다
                    같이 공부하는 방식으로 진행했습니다.
                </p>

                <br />
            </>
        ),
    },
    {
        tag: ["REACT-JS", "RECOIL", "REACT-NATIVE", "FCM", "Dynamic-Link"],
        name: "AEGAIN-A플래너",
        date: "2021-10 ~ 2021-11",
        service: "Mobile",
        colorCode: "#0060ED",
        img: [
            require("../src/assets/image/aegain/complain.png"),
            require("../src/assets/image/aegain/complain_list.png"),
            require("../src/assets/image/aegain/home.jpg"),
            require("../src/assets/image/aegain/menu.png"),
            require("../src/assets/image/aegain/login.jpg"),
            require("../src/assets/image/aegain/reception.png"),
            require("../src/assets/image/aegain/reservation1.jpg"),
            require("../src/assets/image/aegain/reservation2.jpg"),
            require("../src/assets/image/aegain/reservation3.jpg"),
            require("../src/assets/image/aegain/reservation4.jpg"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/aegain/splash.png"),
        content:
            "아파트 사전 입주 어플로 입주 예약, 불만 사항 접수 기능이 존재하는 앱입니다. 프론트 엔드를 맡았고 React-Native를 사용하여 IOS,ANDROID 두 플랫폼을 지원했습니다. 파이어베이스 다이나믹 링크를 통해 앱이 켜지도록 설정하였고, 푸시 알람, 알림 톡을 통해 고객 편의,친화적인 앱을 만들었습니다.",
        worker: "",
        type: "team",
        skill: [
            "React-Native",
            "FCM",
            "카카오알림톡",
            "Dynamic-Links",
            "Recoil",
            "React-Native/AsyncStorage",
        ],
        depscription: () => (
            <>
                <h2>주요기능</h2>
                <p>
                    로그인, 사전 입주 예약, 이사 예약, 불만 사항 접수, 불만 사항
                    오프라인 저장, QR코드 다이나믹링크 기능으로
                    구성되어있습니다.
                    <br /> 프론트 기술 - React-Native, Recoil
                </p>
                <br />
                <h2>React-Native</h2>
                <p>
                    첫 React-Native 프로젝트여서 많은 시간을 공식문서와 구글링에
                    쏟아부었습니다. 반응형 웹처럼 여러 사이즈의 폰에 대응 하기
                    위해 responsePixel 함수를 만들어 각 기기에 맞게
                    대응하였습니다. 그외에도 공식문서를 보며 RN 공식 컴포넌트를
                    사용하여 IOS,ANDROID 두 플랫폼에 맞게 디자인 및 기능을
                    작성하였습니다.
                </p>
                <br />
                <h2>FCM</h2>
                <p>
                    1.FireBase Cloud Message를 통해 알림 메시지 및 데이터 메시지
                    기능을 추가하여 다양한 메시지 타겟팅 기능을 지원했습니다.
                    <br />
                    2.해당 앱의 경우 QR코드를 통해 접근하는 폐쇠적인
                    앱이였습니다. 이 기능을 지원하기 위해 FireBase DynamicLink
                    를 통해 앱에 접근할 수 있도록 하였으며, 링크의 파라미터를
                    이용해 각 아파트별로 접근 가능하도록 구현하였습니다.
                </p>
                <br />
                <h2>Recoil</h2>
                <p>
                    리코일을 이용해 전역상태관리를 해보았습니다. useState 처럼
                    간단히 이용 가능하다는 장점이 있지만, 별도의 Action 없이
                    변경이 가능하기에 어느 시점에서 사이드 이펙이 일어나는지
                    찾기가 어려웠습니다. Selector 를 이용해 전역 상태의 여러값을
                    가공해 사용이 가능해 기존 리덕스 소스에 비해 많이 부분에서
                    줄었습니다.
                </p>
            </>
        ),
    },
    {
        tag: [
            "REACT-JS",
            "REACT-NATIVE",
            "REDUX-TOOLKIT",
            "FCM",
            "Styled-Components",
        ],
        name: "PEDALCHECK",
        service: "Mobile",
        colorCode: "#00B7FD",
        date: "2021-11 ~ 2020-04",
        img: [
            require("../src/assets/image/pedalcheck/홈화면.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-회원가입.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-본인인증.jpg"),
            require("../src/assets/image/pedalcheck/정비소 메인.jpg"),
            require("../src/assets/image/pedalcheck/정비소 지역 찾기.jpg"),
            require("../src/assets/image/pedalcheck/정비소홈.jpg"),
            require("../src/assets/image/pedalcheck/정비소 상품.jpg"),
            require("../src/assets/image/pedalcheck/정비소 리뷰.jpg"),
            require("../src/assets/image/pedalcheck/내자전거.jpg"),
            require("../src/assets/image/pedalcheck/피드.jpg"),
            require("../src/assets/image/pedalcheck/더보기홈.jpg"),
            require("../src/assets/image/pedalcheck/더보기.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-정보기입.jpg"),
            require("../src/assets/image/pedalcheck/쿠폰관리-사용자.jpg"),
            require("../src/assets/image/pedalcheck/쿠폰사용관리.jpg"),
            require("../src/assets/image/pedalcheck/정비이력.jpg"),
            require("../src/assets/image/pedalcheck/정비상품관리.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-정비상품등록.png"),
            require("../src/assets/image/pedalcheck/쿠폰관리리스트.jpg"),
            require("../src/assets/image/pedalcheck/쿠폰관리.jpg"),
            require("../src/assets/image/pedalcheck/출고내역.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-고객.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-고객상세.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-예약관리.jpg"),
            require("../src/assets/image/pedalcheck/페달체크 예약관리.jpg"),
            require("../src/assets/image/pedalcheck/페달체크 예약관리 (2).jpg"),
            require("../src/assets/image/pedalcheck/페달체크 예약관리 (3).jpg"),
            require("../src/assets/image/pedalcheck/페달체크-쿠폰정비내역전체.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-예약시간관리.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-예약시간관리.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소관리.png"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-정비내역.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-리뷰.jpg"),
            require("../src/assets/image/pedalcheck/페달체크-정비소-1대1문의.jpg"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/pedalcheck/splash.png"),
        content:
            "자전거 정비 및 정비샵 업데이트가 가능한 앱입니다.프론트 엔드 2, 백엔드 1명으로 팀 프로젝트를 진행하였습니다. 프론트에서 전체적인 틀 작업은 제가 진행하였고 팀원과 분업하여 프로젝트 진행을 이끌었습니다.",
        worker: "",
        type: "team",
        skill: [
            "React-Native",
            "FCM",
            "카카오알림톡",
            "Dynamic-Links",
            "GoogleAppStore",
            "Redux-Toolkit",
            "본인인증 모듈",
            "SNS로그인-카카오,네이버,구글,IOS",
        ],
        depscription: () => (
            <>
                <h2>주요기능</h2>
                <p>
                    일반 사용자와 정비소 매장 관리자 두 그룹의 기능이 공동으로
                    존재합니다.
                    <br /> <b className="white">일반 사용자</b> -
                    회원가입(본인인증), 로그인(SNS로그인만 지원), 자전거 정비
                    예약, 쿠폰 예약, 리뷰 작성, 문의 작성, 피드, 내 자전거 추가,
                    정비이력, 쿠폰 사용 관리, 내 정보 관리, 알람 설정
                    <br />
                    <b className="white">매장 관리자</b> - 매장 관리, 정비 상품
                    관리, 고객 쿠폰 관리, 고객 관리, 출고 이력 관리, 정비소
                    예약시간 별도 설정, 예약 관리, 리뷰 관리, 1:1문의 관리, 알람
                    기능, 내 매장 정비이력 관리, 내 매장 통계, 정산 관리
                    <br /> <b className="white">프론트 기술</b> - React-Native,
                    Redux-Toolkit, FCM, Google-Maps
                </p>
                <br />
                <h2>React-Native</h2>
                <p>
                    React-Native 기능에 대해 심화적으로 들어간 프로젝트입니다.
                    앱의 기능이 사용자, 정비소 관리자 두 기능이 들어가 보통
                    앱보단 크기가 커졌습니다.
                    <br /> 그만큼 메모리 관리에 신경을 썻고 성능 개선을 위해
                    프로파일링 기능을 이용해 앱 렌더링이 느려지는 구간, 앱 로딩
                    속도 측정을 하였고, 자바스크립트 익명 함수의 경우 렌더링시
                    새로 업데이트가 되는 점을 확인하여 해당 부분을
                    useMemo,useCallBack 함수를 통해 메모이제이션을 통해 불필요한
                    속성 업데이트를 제거했습니다.
                    <br /> React-Native 성능 최적화 관련 글을 읽고 적용하여 눈에
                    보일정도로 최적화를 진행한 경험이 있습니다.
                </p>
                <br />
                <h2>FCM , Google 앱스토어 기능</h2>
                <p>
                    알람 메시지,데이터 메시지, 다이나믹 링크, 알림톡 기능을
                    사용하였습니다.
                    <br />
                    1. 알림톡의 경우 하단에 버튼을 통해 앱에 접근이
                    가능하였는데, 해당 버튼을 클릭시 다이나믹 링크를 통해 앱에
                    접근 가능하도록 하였으며, 로그인이 필요 한 기능에 접근 할
                    경우 자동 로그인을 거쳐 해당 프로세스로 이동 가능하게
                    작업했습니다.
                    <br />
                    2. 데이터 메시지의 경우 페달체크 관리자가 정비소 관리자 권한
                    허용 박탈을 할 경우 바로 로그아웃 처리 및 권한 제어가
                    가능하도록 작업했습니다.
                    <br />
                    3. 구글 비정상 종료 및 로그 기능을 활용해 앱 사용자가 잘못된
                    접근 경로 혹은 앱의 비정상 종료에 대한 로그를 확인하여 해당
                    이슈를 제거하였습니다.
                    <br /> 대표적으로 앱을 장시간 백그라운드 상태로 켜둔뒤 다시
                    접근할 경우 앱이 비정상 종료되는 현상이 있엇습니다. 해당
                    이슈에 대해 구글링을 해보았고 React-Native 공식 Git 이슈
                    사항에 해당 내용을 확인하여 고친 경험이 있습니다.
                </p>
                <br />
                <h2>Redux-Toolkit</h2>
                <p>
                    기존 Redux의 경우 작은 기능을 추가하더라도 많은 코드량을
                    작성하는 문제점이 있엇습니다. 해당 문제를 해결하기 위해 나온
                    Redux-Toolkit을 사용하였습니다. 공식 문서를 통해 공부를
                    하였고, 기존 Redux에 비해 짧은 소스량 및 간단한 설정으로
                    프론트를 같이 진행한 팀원 또한 금방 적응할 수 있엇습니다.
                </p>
                <br />
                <h2>Version 관리</h2>
                <p>
                    프로젝트가 상용화 되고 500~1000여명의 고객이 실사용
                    하였습니다. 운영중 IOS 관련 버그 및 클라이언트의 추가
                    기능으로 버전 관리를 진행 한적이 있습니다. 프로젝트 주 이용
                    고객이 중 장년층 이여서 앱 업데이트 진행이 어려움을
                    겪고있어, 서버에서 버전을 별도로 관리해 앱 사용자 최신화를
                    위해 힘쓴 경험이 있습니다.
                </p>
            </>
        ),
    },
    {
        tag: [
            "REACT-JS",
            "REACT-NATIVE",
            "TYPESCRIPT",
            "GOOGLE-MAPS-API",
            "REDUX-TOOLKIT",
            "FCM",
            "Send-Bird",
        ],
        name: "BRAZIL LOCAL APP",
        date: "2020-06 ~ 2020-08",
        service: "Mobile",
        colorCode: "#3D17F1",
        img: [
            require("../src/assets/image/localapp/0.jpg"),
            require("../src/assets/image/localapp/1.jpg"),
            require("../src/assets/image/localapp/2.jpg"),
            require("../src/assets/image/localapp/3.jpg"),
            require("../src/assets/image/localapp/4.jpg"),
            require("../src/assets/image/localapp/5.jpg"),
            require("../src/assets/image/localapp/6.jpg"),
            require("../src/assets/image/localapp/7.jpg"),
            require("../src/assets/image/localapp/8.jpg"),
            require("../src/assets/image/localapp/9.jpg"),
            require("../src/assets/image/localapp/10.jpg"),
            require("../src/assets/image/localapp/11.jpg"),
            require("../src/assets/image/localapp/12.jpg"),
            require("../src/assets/image/localapp/13.jpg"),
            require("../src/assets/image/localapp/14.jpg"),
            require("../src/assets/image/localapp/15.jpg"),
            require("../src/assets/image/localapp/16.jpg"),
            require("../src/assets/image/localapp/17.jpg"),
            require("../src/assets/image/localapp/19.jpg"),
            require("../src/assets/image/localapp/20.jpg"),
            require("../src/assets/image/localapp/21.jpg"),
            require("../src/assets/image/localapp/22.jpg"),
            require("../src/assets/image/localapp/23.jpg"),
            require("../src/assets/image/localapp/24.jpg"),
            require("../src/assets/image/localapp/25.jpg"),
            require("../src/assets/image/localapp/26.jpg"),
            require("../src/assets/image/localapp/27.jpg"),
            require("../src/assets/image/localapp/28.jpg"),
            require("../src/assets/image/localapp/29.jpg"),
            require("../src/assets/image/localapp/30.jpg"),
            require("../src/assets/image/localapp/31.jpg"),
            require("../src/assets/image/localapp/32.jpg"),
            require("../src/assets/image/localapp/33.jpg"),
            require("../src/assets/image/localapp/34.jpg"),
            require("../src/assets/image/localapp/35.jpg"),
            require("../src/assets/image/localapp/36.jpg"),
            require("../src/assets/image/localapp/37.jpg"),
            require("../src/assets/image/localapp/38.jpg"),
            require("../src/assets/image/localapp/39.jpg"),
            require("../src/assets/image/localapp/40.jpg"),
            require("../src/assets/image/localapp/41.jpg"),
            require("../src/assets/image/localapp/42.jpg"),
            require("../src/assets/image/localapp/43.jpg"),
            require("../src/assets/image/localapp/44.jpg"),
            require("../src/assets/image/localapp/45.jpg"),
            require("../src/assets/image/localapp/46.jpg"),
            require("../src/assets/image/localapp/47.jpg"),
            require("../src/assets/image/localapp/48.jpg"),
            require("../src/assets/image/localapp/49.jpg"),
            require("../src/assets/image/localapp/50.jpg"),
            require("../src/assets/image/localapp/51.jpg"),
            require("../src/assets/image/localapp/52.jpg"),
            require("../src/assets/image/localapp/53.jpg"),
            require("../src/assets/image/localapp/54.jpg"),
            require("../src/assets/image/localapp/55.jpg"),
        ],
        git: "",
        thumbnail: require("../src/assets/image/localapp/splash.png"),
        content:
            "브라질 현지 중고 거래 서비스 앱을 만들었습니다. i18n 라이브러리를 이용해 4개 국어를 지원하였습니다. 브라질 현지화를 위해 숫자 표기법, 지역 번호 표시방법, 지역 주소 표기 방식을 브라질 현지 방식으로 적용하였습니다. ",
        worker: "",
        type: "team",
        skill: [
            "React-Native",
            "FCM",
            "Google-Map-API",
            "SendBird",
            "TypeScript",
            "Redux-Toolkit",
            "i18n",
        ],
        depscription: () => (
            <>
                <h2>주요기능</h2>
                <p>
                    <b className="white">일반 사용자</b> - 회원가입(브라질
                    문자인증), 로그인, 물건 검색, 중고 물품 등록, 중고 물품
                    판매/구매, 채팅 기능, 비즈니스 회원 변경(전문 판매자), 배너
                    관리, 다국어 지원, 개별 알람 설정, 관심 키워드 알람기능,
                    판매상품 관리, 관심 카테고리 설정 기능
                    <br />
                    <b className="white">프론트 기술</b> - React-Native,
                    TypeScript, Redux-Toolkit, Google-Maps-Api, FCM
                    ,Send-Bird(채팅), i18n(다국어 지원)
                </p>
                <br />
                <h2>Google Maps API</h2>
                <p>
                    해당 API를 이용해 현재 위치 및 위치별 주소 나타내기, 위치
                    자동 검색 지원, 지도에서 위치 선택하기 기능을 구현했습니다.
                    구글 맵 개발자 공식 문서를 통해 필요한 API를 선택했으며,
                    디바운스를 통해 API를 호출 횟수를 줄여 사용자 경험을 상향
                    시켰습니다.
                </p>
                <br />
                <h2>채팅</h2>
                <p>
                    SendBird 라이브러리를 이용해 채팅을 구현했습니다. 부드러운
                    애니메이션 효과를 넣어 카카오톡과 유사하도록 구현 했으며,
                    사진 공유, 현재 위치 공유를 넣어 중고 거래시 필요한 정보를
                    주고 받을 수 있도록 했습니다.
                </p>
                <br />
                <h2>TypeScript , Custom Hook</h2>
                <p>
                    TypeScript를 통해 Screen 이동시 필수 파라미터 값을 지정 해둬
                    해당 페이지에 파라미터가 없을 경우 에러가 뜨도록
                    구현했습니다. 커스텀 훅을 통해 공통적인 기능을 작성 했으며
                    API 호출시 로딩 등 공통적인 상태를 관리하도록 하였으며,
                    타입스크립트를 통해 어떠한 데이터를 넣어줘야 하며 어떤
                    형태로 데이터가 리턴 되는지 타입을 지정했습니다.
                </p>
                <h2>다국어 지원, 폰트사이즈 지정, 알람 설정</h2>
                <p>
                    1. 4개 국어(한국,영어,브라질어(포르투갈어),스페인어)를
                    지원하기 위해 i18n 라이브러리를 이용했습니다. 모든 언어셋은
                    서버에 따로 저장 했으며, API를 통해 변경 가능하도록 변수화
                    하여 데이터를 받았습니다.
                </p>
                <p>
                    2. 모든 사용자의 폰트사이즈를 개별적으로 적용하기 위해 전역
                    상태를 사용해 공통적으로 폰트 사이즈를 변경 가능하게
                    했습니다.
                </p>
                <p>
                    3. FCM 셋팅을 통해 개별적으로 원하는 알람 소리를 설정
                    가능하게 하였고, 진동 여부도 별도로 설정 가능하게 했습니다.
                </p>
            </>
        ),
    },
];
