import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const LeftArrowContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .arrow {
        width: 10vw;
        height: 10vh;
        cursor: pointer;
        & > em {
            display: block;
            position: absolute;
            height: 36px;
            width: 36px;
            top: calc(50% - 18.5px);
            left: calc(50% - 18px);
            transition: transform 0.2s ease-out 0.2s;
            &::before,
            &::after {
                content: " ";
                position: absolute;
                right: 0;
                height: 100%;
                width: 2px;
                background-color: #7a7a7a;
                transform-origin: 50% 100% 0;
                transition: transform 0.16s ease-out;
            }
            &::before {
                top: -50%;
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }
            &::after {
                top: -50%;
                transform: rotate(135deg);
            }
        }
        &:hover {
            & > em::before {
                transform: rotate(25deg);
            }
            & > em::after {
                transform: rotate(145deg);
            }
            span {
                opacity: 1;
                transform: translate3d(40px, -8px, 0);
            }
        }
        span {
            left: calc(50% + 5px);
            transform: translate3d(-30px, -8px, 0);
            display: inline-block;
            color: #8a8a8a;
            position: absolute;
            white-space: nowrap;
            top: calc(50% - 15.5px);
            text-transform: capitalize;
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            opacity: 0;
            font-size: 24px;
            line-height: 1.7em;
            transition: opacity 0.1s ease 0.125s,
                transform 0.3s cubic-bezier(0, 0, 0, 1) 0.125s;
        }
    }
`;

const RightArrowContainer = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .arrow {
        width: 10vw;
        height: 10vh;
        cursor: pointer;
        & > em {
            display: block;
            position: absolute;
            height: 36px;
            width: 36px;
            top: calc(50% - 18.5px);
            left: calc(50% - 18px);
            transition: transform 0.2s ease-out 0.2s;
            &::before,
            &::after {
                content: " ";
                position: absolute;
                right: 0;
                height: 100%;
                width: 2px;
                background-color: #7a7a7a;
                transform-origin: 50% 100% 0;
                transition: transform 0.16s ease-out;
            }
            &::before {
                top: -50%;
                transform: rotate(315deg);
            }
            &::after {
                top: -50%;
                transform: rotate(225deg);
            }
        }
        &:hover {
            & > em::before {
                transform: rotate(325deg);
            }
            & > em::after {
                transform: rotate(205deg);
            }
            span {
                opacity: 1;
                transform: translate3d(-10px, -8px, 0);
            }
        }
        span {
            right: calc(50% + 5px);
            transform: translate3d(0px, -8px, 0);
            display: inline-block;
            color: #8a8a8a;
            position: absolute;
            white-space: nowrap;
            top: calc(50% - 15.5px);
            height: 30px;
            line-height: 30px;
            padding: 0 10px;
            opacity: 0;
            text-transform: capitalize;
            font-size: 24px;
            line-height: 1.7em;
            transition: opacity 0.1s ease 0.125s,
                transform 0.3s cubic-bezier(0, 0, 0, 1) 0.125s;
        }
    }
`;
const LeftArrow = ({ menu }: { menu: string }) => {
    const router = useRouter();
    return (
        <LeftArrowContainer>
            <div className="arrow" onClick={() => router.push(`/${menu}`)}>
                <span>{menu}</span>
                <em></em>
            </div>
        </LeftArrowContainer>
    );
};

export const RightArrow = ({ menu }: { menu: string }) => {
    const router = useRouter();
    return (
        <RightArrowContainer>
            <div className="arrow" onClick={() => router.push(`/${menu}`)}>
                <span>{menu}</span>
                <em></em>
            </div>
        </RightArrowContainer>
    );
};

export default LeftArrow;
