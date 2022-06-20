import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
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

    useEffect(() => {
        if (selectTagList.length === 0) {
            setSelectTagList(["SHOW ALL"]);
        }
    }, [selectTagList]);
    const reverseProjectDummy = [...ProjectDummy].reverse();

    return (
        <Main>
            <Menu />
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
                            </div>
                        );
                    })}
                </ProjectDiv>
            </Box>
        </Main>
    );
};

export default project;

export const ProjectDummy = [
    {
        tag: ["국비지원", "JSP", "TEAM-PROJECT", "MYSQL", "JAVA", "MVC2"],
        name: "WILL-PASS",
        date: "2020-06 ~ 2020-08",
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
                <p>
                    5명의 팀원과 같이 협업을 하며 팀 프로젝트를 진행하는 부분에
                    대해 많이 배울 수 있엇습니다. 프로젝트 진행 방식에 대해 많은
                    것을 배웠고,어려운 부분이 있으면 소통을 하며 학습할 수
                    있엇습니다.
                </p>
                <br />
                <p>
                    프론트엔드 빠른 개발을 위해 부트스트랩 프레임 워크를
                    이용하였으며, 에어 부산의 디자인을 벤치마킹하여 깔끔한
                    디자인으로 작업하였습니다.
                </p>
                <br />
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
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 익숙하지 않아 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
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
        img: [],
        git: "",
        thumbnail: require("../src/assets/image/diningcode/thumbnail.png"),
        content:
            "실제 서비스 중인 다이닝코드 리뉴얼 프로젝트에 참여했습니다. 제가 맡은 부분은 회원가입,로그인,피드 페이지 였습니다. 반응형 웹페이지 퍼블을 맡았으며 API 작업전 UI 부분 작업을 진행 하였습니다.",
        worker: "",
        type: "team",
        skill: [],
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
                <h2>Next.js</h2>
                <p>
                    검색엔진 최적화(SEO)를 위해 적용된 기술입니다. 다이닝코드는
                    맛집 웹 사이트로써 다른 사이트보다 SEO에 중요도를 높게
                    봐야했습니다. 기존 React의 경우 SPA로써 SEO 가 어려웠던 반면
                    Next의 경우 Head 컴포넌트를 따로 지원해줘 각 페이지마다 SEO
                    적용이 쉬웠습니다.
                </p>
                <br />
                <h2>협업, 스토리북</h2>
                <p>
                    협업을 하면서 어려웠던 점이 여러가지 있엇습니다.
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
            "NEXT-JS",
            "TYPESCRIPT",
            "RECOIL",
            "Styled-Components",
            "Node.js",
            "Koa",
            "TEAM-PROJECT",
        ],
        name: "3SixTeen Copy",
        date: "2021-10 ~ 2021-11",
        img: [],
        git: "",
        thumbnail: require("../src/assets/image/3sixteen/thumbnail.png"),
        content:
            "업무 시간외에 프론트 공부를 위해 참여한 프로젝트 입니다. 3SixTeen 홈페이지를 벤치마킹 하여 해당 사이트를 구현하였으며 Node.js 를 이용해 백엔드를 구현 해보았습니다.",
        worker: "",
        type: "team",
        skill: [],
        depscription: () => (
            <>
                <h2>사이드 프로젝트</h2>
                <p>Next.js,TypeScript 공부 및 협업시</p>
                <br />

                <br />
            </>
        ),
    },
    {
        tag: ["REACT-JS", "RECOIL", "REACT-NATIVE", "FCM", "Dynamic-Link"],
        name: "AEGAIN-A플래너",
        date: "2021-10 ~ 2021-11",
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
        skill: [],
        depscription: () => (
            <>
                <p></p>
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
                <h2>협업</h2>
                <p>
                    백엔드와 첫 협업을 한 프로젝트입니다. 소통을 하면서
                    커뮤니케이션 능력이 얼마나 중요한지 깨닳게 되는 프로젝트
                    였습니다. Git, PostMan을 통해 소스 관리 및 API 관리를
                    하였습니다.
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
        date: "2021-11 ~ 2020-04",
        img: [],
        git: "",
        thumbnail: require("../src/assets/image/pedalcheck/splash.png"),
        content:
            "자전거 정비 및 정비샵 업데이트가 가능한 앱입니다.프론트 엔드 2, 백엔드 1명으로 팀 프로젝트를 진행하였습니다. 프론트에서 전체적인 틀 작업은 제가 진행하였고 팀원과 분업하여 프로젝트 진행을 이끌었습니다.",
        worker: "",
        type: "team",
        skill: [],
        depscription: () => (
            <>
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
                </p>
                <br />
                <h2>FCM , Google 앱스토어 기능 </h2>
                <p>
                    알람 메시지,데이터 메시지, 다이나믹 링크, 알림톡 기능을
                    사용하였습니다.
                    <br />
                    1. 알림톡의 경우 하단에 버튼을 통해 앱에 접근이
                    가능하였는데, 해당 버튼을 클릭시 다이나믹 링크를 통해 앱에
                    접근 가능하도록 하였습니다.
                    <br />
                    2. 데이터 메시지의 경우 페달체크 관리자가 정비소 관리자 권한
                    허용 박탈을 할 경우 전송하여 앱이 켜져있더라도 바로 적용
                    되도록 하였습니다.
                    <br />
                    3. 구글 비정상 종료 및 로그 기능을 활용해 앱 사용자가 잘못된
                    접근 경로 혹은 앱의 비정상 종료에 대한 로그를 확인하여 해당
                    이슈를 제거하였습니다.
                </p>
                <br />
                <h2>Redux-Toolkit</h2>
                <p>
                    기존 Redux의 경우 작은 기능을 추가하더라도 많은 코드량을
                    작성하는 문제점이 있엇습니다. 해당 문제를 해결하기 위해 나온
                    Redux-Toolkit을 사용하였습니다.
                </p>
                <br />
                <h2>협업</h2>
                <p>Git, PostMan을 통해 소스 관리 및 API 관리를 하였습니다.</p>
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
        img: [],
        git: "",
        thumbnail: require("../src/assets/image/localapp/splash.png"),
        content: "브라질 현지 중고 거래 서비스 앱을 만들었습니다. ",
        worker: "",
        type: "team",
        skill: [],
        depscription: () => (
            <>
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
                    SendBird 라이브러리를 이용해 채팅을 구현했으며 사진공유,
                    위치공유, 검색어 찾기 기능을 넣어 카카오톡과 유사하도록
                    구현했습니다.
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
            </>
        ),
    },
];
