import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { ProjectDummy } from "../project";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectDetail = () => {
    const router = useRouter();
    const { index } = router.query;

    if (index == null) {
        return null;
    }

    const project = ProjectDummy[+index];

    return (
        <Container>
            <h1>{project.name}</h1>
            <p>{project.content}</p>
            <Carousel autoPlay emulateTouch infiniteLoop stopOnHover>
                {project.img.map((v, i) => (
                    <div className="renderItem" key={i}>
                        <Image
                            objectFit="contain"
                            src={v}
                            alt="ProjectImage"
                            layout="responsive"
                        />
                    </div>
                ))}
            </Carousel>
            <h1>프로젝트 내용</h1>
            {project.depscription()}
            <h1>Technologies</h1>
            <p>프로젝트 적용 기술</p>
            <ul>
                {project.skill.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 25%;
    min-height: 100vh;
    & .carousel.carousel-slider .control-arrow {
        width: 200px;
    }
    & > h1 {
        font-weight: bold;
        margin-bottom: 20px;
    }
    & > p {
        margin-bottom: 20px;
    }
    p,
    h2 {
        line-height: 1.7;
        word-break: keep-all;
    }
    .renderItem {
        width: "100%";
        max-height: 600px;
        position: "relative";
        & * {
            max-height: 600px;
        }
    }
    li {
        list-style: circle;
        color: #999;
        margin-left: 20px;
        line-height: 1.5;
    }
`;
export default ProjectDetail;
