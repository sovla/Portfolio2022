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
            <Carousel autoPlay emulateTouch infiniteLoop>
                {project.img.map((v, i) => (
                    <div key={i}>
                        <Image src={v} alt="ProjectImage" />
                    </div>
                ))}
            </Carousel>
            <h2>프로젝트 내용</h2>
            {project.depscription()}
            <h2>Technologies</h2>
            <p>프로젝트를 진행하면서 참여한 코드 기술 및 기술</p>
            <ul>
                {project.skill.map((v, i) => (
                    <li key={i}>
                        <p>{v}</p>
                    </li>
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
`;
export default ProjectDetail;
