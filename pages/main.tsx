import { useRouter } from "next/router";
import React, { MouseEvent, useCallback, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const main = () => {
    const router = useRouter();

    const ref = useRef<React.MouseEvent<HTMLDivElement, MouseEvent> | null>(
        null
    );
    const moveAt = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event && ref.current) {
            ref.current.target.style.left = event.clientX + "px";
            ref.current.target.style.top = event.clientY + "px";
        }
    };
    const onClickMouse: React.MouseEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            ref.current = event;
            event.target.addEventListener("mousemove", moveAt);
            return null;
        },
        []
    );
    const onMouseUp = useCallback(() => {
        ref.current?.target.removeEventListener("mousemove", moveAt);
        ref.current = null;
    }, []);

    const onMouseEnter = () => {
        console.log(ref.current, "mouseEnter");
        if (ref.current) {
            console.log(ref.current.target.id);
            switch (ref.current.target.id) {
                case "project":
                    router.push("project");
                    break;
                case "aboutme":
                    router.push("aboutme");
                    break;
                case "contact":
                    router.push("contact");
                    break;
                case "intro":
                    router.push("./");
                    break;

                default:
                    router.push("main");
                    break;
            }
        }
    };
    return (
        <Container>
            <div
                className="project"
                onMouseDown={onClickMouse}
                onMouseUp={onMouseUp}
                id="project"
            >
                <p id="project">project</p>
            </div>
            <div
                id="aboutme"
                className="aboutme"
                onMouseDown={onClickMouse}
                onMouseUp={onMouseUp}
            >
                <p id="aboutme">aboutme</p>
            </div>
            <div
                className="contact"
                onMouseDown={onClickMouse}
                onMouseUp={onMouseUp}
            >
                <p>contact</p>
            </div>
            <div
                id="intro"
                className="intro"
                onMouseDown={onClickMouse}
                onMouseUp={onMouseUp}
            >
                <p id="intro">intro</p>
            </div>
            <div className="main_center" onMouseOver={onMouseEnter}></div>
        </Container>
    );
};

export default main;
const Container = styled.div`
    width: 100vw;
    background-color: #414242;
    padding: 100px 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    position: relative;

    .project,
    .aboutme,
    .contact,
    .intro {
        cursor: pointer;
        z-index: 1000;
    }
    .project {
        left: 25%;
        top: 50%;
    }
    .aboutme {
        left: 75%;
        top: 50%;
    }
    .contact {
        left: 50%;
        top: 85%;
    }
    .intro {
        left: 50%;
        top: 15%;
    }
    & > div {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        position: absolute;
        background-color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50%, -50%);
        & > p {
            color: #fff;
            user-select: none;
        }
    }
    .main_center {
        background-color: #fff;
        width: 250px;
        height: 250px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`;
