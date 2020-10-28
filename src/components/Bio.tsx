import { FunctionComponent } from "react";
import styled from "styled-components";

const PreviewShadow = styled.div`
    background-color: ${({ theme }) => theme.previewShadow};
    max-width: 300px;
    height: 180px;
    padding-left: 30px;
    padding-top: 30px;

    @media screen and (max-width: 400px) {
        max-width: 280px;
        height: 180px;
        padding-left: 10px;
        padding-top: 10px;
    }
`;

const Preview = styled.div`
    width: 300px;
    border: 1.5px solid #17a2b8;
    background-color: ${({ theme }) => theme.previewBg};
    padding: 15px;
    position: relative;

    @media screen and (max-width: 400px) {
        width: 280px;
    }
`;

const Conner = styled.div`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1.5px solid #17a2b8;
    background-color: #fff;
    position: absolute;

    &.tl {
        top: -5px;
        left: -5px;
    }

    &.tr {
        top: -5px;
        right: -5px;
    }

    &.br {
        bottom: -5px;
        right: -5px;
    }

    &.bl {
        bottom: -5px;
        left: -5px;
    }
`;

const Bio: FunctionComponent = () => {
    return (
        <PreviewShadow>
            <Preview>
                <Conner className="tl"></Conner>
                <Conner className="tr"></Conner>
                <h3>What I Do</h3>
                <p>I was a lead developer in a past life, now I enjoy teaching courses.</p>
                <Conner className="br"></Conner>
                <Conner className="bl"></Conner>
            </Preview>
        </PreviewShadow>
    );
};

export default Bio;
