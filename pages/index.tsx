/* eslint-disable @next/next/no-css-tags */
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const boxSize = keyframes`
    0%{
        height:50vh ;
    }
    25%{
        height:25vh;
    }
    100%{
        height:0vh;
    }
`;
const boxFade = keyframes`
    0%{
        opacity:0.2 ;
        transform:translate3d(0,-50%,0) ;
    }
    25%{
        opacity:1 ;
        transform:translate3d(0,0%,0) ;
    }
    100%{
        opacity:0 ;
        transform:translate3d(0,-50%,0) ;
    }
`;
const boxShake = keyframes`
    0%{
        transform:rotate(15deg) ;
    }
    25%{
        transform:rotate(8deg) ;
    }
    100%{
        transform:rotate(0deg) ;
    }
`;

const Container = styled.div`
    .main {
        width: 100vw;
        height: 100vh;
        background-color: #414242;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        .top_black {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #000;
            width: 100%;
            height: 50vh;
            z-index: 100;
            animation: ${boxSize} 7s forwards;
        }
        .bottom_black {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #000;
            width: 100%;
            height: 50vh;
            z-index: 100;
            animation: ${boxSize} 7s forwards;
        }
        .main_text {
            animation: ${boxFade} 7s forwards;
            z-index: 10;
        }
        video {
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            object-fit: fill;
            animation: ${boxShake} 7s forwards;
        }
    }
`;

const Home: NextPage = () => {
    const router = useRouter();
    const ref = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        setTimeout(() => {
            router.push("/aboutme");
        }, 3000);
    }, []);
    return (
        <Container>
            <Head>
                <title>Gavri-Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="main">
                <div className="top_black"></div>
                <div className="main_text">
                    <h1>열정적인 개발자 김준한 입니다.</h1>
                </div>
                <div className="bottom_black"></div>
                <video autoPlay ref={ref} muted loop>
                    <source
                        src={
                            process.env.NODE_ENV === "production"
                                ? "https://sovla.github.io/portfolio2022/intro/intro.mp4"
                                : "https://sovla.github.io/portfolio2022/intro/intro.mp4"
                        }
                        type="video/mp4"
                    />
                </video>
            </div>
        </Container>
    );
};

export default Home;
