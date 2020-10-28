import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
`;

const Toggle = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.gradient};
    width: 4rem;
    height: 2.5rem;
    margin-right: 0;
    margin-left: auto;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    font-size: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    img {
        max-width: 1.5rem;
        height: auto;
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
        }

        &:nth-child(2) {
            transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
        }
    }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';

    return (
        <Wrapper>
            <Toggle lightTheme={isLight} onClick={toggleTheme}>
                <img
                    src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
                    width="224"
                    height="224"
                    alt="Sun free icon"
                    title="Sun free icon"
                />
                <img
                    src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
                    width="224"
                    height="224"
                    alt="Moon free icon"
                    title="Moon free icon"
                />
            </Toggle>
        </Wrapper>
    );
};

export default ThemeToggle;
