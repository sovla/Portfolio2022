import Head from "next/head";
import React from "react";
import styled from "styled-components";
import LeftArrow from "../src/components/layout/Arrow";
import Menu from "../src/components/layout/Menu";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #414242;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .header {
        margin-bottom: 50px;
        h1 {
            font-size: 36px;
        }
    }
`;

const BoxDiv = styled.div`
    display: flex;
    border-radius: 6px;
    border: 2px solid white;
    padding: 25px;

    & > form {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        & > input,
        & > textarea {
            padding: 10px 3px;
            background-color: #414242;
            margin-bottom: 40px;
            border: none;
            border-bottom: 2px solid #999;
            color: #fff;
            font-size: 20px;
            &::placeholder {
                color: #999;
            }
        }
        & > textarea {
            width: 400px;
            height: 200px;
        }
        & > button {
            border-radius: 16px;
            background-color: #000;
            padding: 10px;
            color: #fff;
        }
    }
    & > div {
        width: 400px;
        h3 {
            font-size: 28px;
        }
        p {
            margin-bottom: 30px;
            font-size: 16px;
        }
    }
`;
const contact = () => {
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
            <Menu />
            <div className="header">
                <h1>Contact ME</h1>
            </div>
            <BoxDiv>
                <form>
                    <input placeholder="성함"></input>
                    <input placeholder="연락처/이메일"></input>
                    <textarea placeholder="내용"></textarea>
                    <button type="submit">SEND</button>
                </form>
                <div>
                    <h3>Contact</h3>
                    <p>jg348434@gmail.com</p>
                    <h3>Address</h3>
                    <p>부산 광역시 부산진구 양정</p>
                </div>
            </BoxDiv>
            <LeftArrow menu="project" />
        </Container>
    );
};

export default contact;