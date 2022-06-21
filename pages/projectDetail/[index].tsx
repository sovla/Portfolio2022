import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { ProjectDummy } from "../project";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Zoom from "react-medium-image-zoom";

const ProjectDetail = () => {
    const [selectItem, setSelectItem] = useState<number>(-1);
    const router = useRouter();
    const { index } = router.query;

    if (index == null) {
        return null;
    }

    const project = ProjectDummy[+index];

    const onClickItem = useCallback((index: number, item: React.ReactNode) => {
        setSelectItem(index);
    }, []);

    return (
        <Container>
            {selectItem > -1 && (
                <div className="modal">
                    <div>
                        <button type="button" onClick={() => setSelectItem(-1)}>
                            <Image
                                src={require("../../src/assets/image/close.png")}
                                alt="closeButton"
                            />
                        </button>
                        <Image
                            onClick={() => setSelectItem(-1)}
                            src={project.img[selectItem]}
                            alt="selectImage"
                            objectFit="contain"
                            layout="fill"
                        />
                    </div>
                </div>
            )}
            <h1>{project.name}</h1>
            <p>{project.content}</p>
            <Carousel
                className="carousel"
                onClickItem={onClickItem}
                autoPlay
                emulateTouch
                infiniteLoop
                stopOnHover
                swipeable
            >
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
    position: relative;
    .carousel {
        cursor: zoom-in;
    }
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
    .modal {
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        left: 0vw;
        top: 0vh;
        z-index: 100;
        padding: 5vh 10vw;
        background-color: #0005;
        display: flex;
        justify-content: center;
        align-items: center;
        button {
            width: 60px;
            height: 60px;
            position: fixed;
            right: 10vw;
            top: 5vh;
            z-index: 105;

            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            cursor: zoom-out;

            img {
                border-radius: 8px;
            }
        }
        img {
            cursor: zoom-out;
        }
        div {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }
`;
export default ProjectDetail;
