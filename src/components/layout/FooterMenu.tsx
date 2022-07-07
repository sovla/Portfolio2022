import Image from "next/image";
import React from "react";
import styled from "styled-components";

const FooterMenuDiv = styled.div`
    position: fixed;
    left: 50%;
    bottom: 0px;
    a {
        width: 50px;
        height: 50px;
    }
    img:hover {
        opacity: 0.7;
        background-color: #fff;
    }
`;

const FooterMenu: React.FC = () => {
    return (
        <FooterMenuDiv>
            <a
                href="https://velog.io/@gavri"
                target={"_blank"}
                rel="noreferrer"
            >
                <Image
                    width={50}
                    height={50}
                    src={require("../../assets/image/velog.jpg")}
                    alt="velog"
                />
            </a>
            <a
                href="https://github.com/sovla"
                target={"_blank"}
                rel="noreferrer"
            >
                <Image
                    width={50}
                    height={50}
                    src={require("../../assets/image/github.png")}
                    alt="github"
                />
            </a>
        </FooterMenuDiv>
    );
};

export default FooterMenu;
