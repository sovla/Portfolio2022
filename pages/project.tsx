import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

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
            z-index: 10;
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
                transition: 1.5s ease-in-out;
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
                setSelectTagList((prev) => prev.filter((v) => v !== value));
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

    useLayoutEffect(() => {
        if (selectTagList.length === 0) {
            setSelectTagList(["SHOW ALL"]);
        }
    }, [selectTagList]);

    return (
        <Main>
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
                    {ProjectDummy.map((v, i) => {
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
                                onClick={() => onClickProjectItem(i)}
                            >
                                <div className="projectText">
                                    <h1>{v.name}</h1>
                                </div>
                                <div className="projectImg">
                                    <Image
                                        src={
                                            v.thumbnail.length
                                                ? v.thumbnail
                                                : require("../src/assets/image/willpass/슬라이드1.png")
                                        }
                                        alt="projectThumbnail"
                                        layout="intrinsic"
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
        thumbnail: require("../src/assets/image/willpass/슬라이드1.png"),
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
                    유지보수 및 확장성에 용이하게 작업을 진행하였습니다.
                </p>
                <br />
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 미숙함이 있어 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
                </p>
            </>
        ),
    },
    {
        tag: ["REACT-JS", "NEXT-JS", "TYPESCRIPT", "REDUX", "TEAM-PROJECT"],
        name: "다이닝코드",
        date: "2020-06 ~ 2020-08",
        img: [],
        git: "",
        thumbnail: "",
        content: "항공 예매 서비스를 구현했습니다.",
        worker: "",
        type: "team",
        skill: "",
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
                    유지보수 및 확장성에 용이하게 작업을 진행하였습니다.
                </p>
                <br />
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 미숙함이 있어 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
                </p>
            </>
        ),
    },
    {
        tag: ["REACT-JS", "RECOIL", "REACT-NATIVE"],
        name: "AEGAIN",
        date: "2020-06 ~ 2020-08",
        img: [],
        git: "",
        thumbnail: "",
        content: "항공 예매 서비스를 구현했습니다.",
        worker: "",
        type: "team",
        skill: "",
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
                    Git사용에 미숙함이 있어 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
                </p>
            </>
        ),
    },
    {
        tag: ["REACT-JS", "REACT-NATIVE", "REDUX-TOOLKIT", "FCM"],
        name: "PEDALCHECK",
        date: "2020-06 ~ 2020-08",
        img: [],
        git: "",
        thumbnail: "",
        content: "항공 예매 서비스를 구현했습니다.",
        worker: "",
        type: "team",
        skill: "",
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
                    유지보수 및 확장성에 용이하게 작업을 진행하였습니다.
                </p>
                <br />
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 미숙함이 있어 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
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
        ],
        name: "BRAZIL LOCAL APP",
        date: "2020-06 ~ 2020-08",
        img: [],
        git: "",
        thumbnail: "",
        content: "항공 예매 서비스를 구현했습니다.",
        worker: "",
        type: "team",
        skill: "",
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
                    유지보수 및 확장성에 용이하게 작업을 진행하였습니다.
                </p>
                <br />
                <p>
                    소스 관리 부분에선 Git을 사용 하여 관리하였으며, 당시엔
                    Git사용에 미숙함이 있어 각자의 Branch에서 작업을
                    진행하였습니다. 작업 완료 후 Main Branch에는 제가 직접
                    병합하는 식으로 작업을 진행했습니다.
                </p>
            </>
        ),
    },
];
