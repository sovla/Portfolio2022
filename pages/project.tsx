import React, { useMemo } from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #414242;
  padding: 100px 400px;
`;

const Box = styled.div`
  & > h1 {
    color: #cacaca;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const TagItem = styled.div`
  border: 1px solid #222;
  background-color: #313131;
  border-width: 1px 1px 2px 1px;
  box-shadow: 1px 1px 0 rgb(0 0 0 / 25%);
  padding: 5px 7px;
  margin-right: 5px;
  & > p {
    color: #999;
    font-family: MontSerrat, Tahoma, Arial, sans-serif;
  }
`;

const Tag = styled.div`
  display: flex;
  flex-direction: row;
`;

const project = () => {
  const tagList = useMemo(() => {
    let result: string[] = [];
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

  return (
    <Main>
      <Box>
        <h1>Web App FrontEnd Developer Portfolio</h1>

        <Tag>
          {tagList.map((v) => (
            <TagItem className="tagItem">
              <p>{v}</p>
            </TagItem>
          ))}
        </Tag>
        <div className="project">
          {ProjectDummy.map((v) => (
            <div className="projectItem">
              <img src={v.thumbnail} alt="projectThumbnail" />
              <h1>{v.name}</h1>
            </div>
          ))}
        </div>
      </Box>
    </Main>
  );
};

export default project;

const ProjectDummy = [
  {
    tag: ["국비지원", "JSP", "TEAMPROJECT", "MYSQL"],
    name: "WILL-PASS",
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
    tag: ["국비지원", "JSP", "TeamProject", "mySQL"],
    name: "WILL-PASS",
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
    tag: ["국비지원", "JSP", "TeamProject", "mySQL"],
    name: "WILL-PASS",
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
    tag: ["국비지원", "JSP", "TeamProject", "mySQL"],
    name: "WILL-PASS",
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
