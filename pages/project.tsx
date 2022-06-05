import Image from "next/image";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";

const Main = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 20%;
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
`;

const ProjectDiv = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    padding-top: 50px;

    & > .projectItem {
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
    }
    & > .projectItem:nth-child(2n) {
        margin-left: 5%;
    }
`;

const project = () => {
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
                    {ProjectDummy.map((v) => {
                        if (
                            !selectTagList.find((findValue) =>
                                v.tag.includes(findValue)
                            ) &&
                            !selectTagList.includes("SHOW ALL")
                        ) {
                            return null;
                        }
                        return (
                            <div key={v.name} className="projectItem">
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
                            </div>
                        );
                    })}
                </ProjectDiv>
            </Box>
        </Main>
    );
};

export default project;

const ProjectDummy = [
    {
        tag: ["국비지원", "JSP", "TEAM-PROJECT", "MYSQL", "JAVA", "MVC2"],
        name: "WILL-PASS",
        date: "2020-06 ~ 2020-08",
        img: [],
        git: "",
        thumbnail: require("../src/assets/image/willpass/슬라이드1.png"),
        content: "항공 예매 서비스를 구현했습니다.",
        worker: "",
        type: "team",
        skill: "",
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
    },
];
