import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type Props = {
    children?: ReactNode;
};

const Wrapper = styled.div`
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.mainColor};
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.mainText};
    cursor: pointer;
`;

const Nav = styled.ul`
    margin: 0;
    padding: 10px;

    li {
        display: inline-block;
        margin-right: 5px;
        margin-left: 5px;
    }
`;

const DotsWrapper = styled.div`
    display: flex;
    padding: 10px;
`;

const BrowserDot = styled.div`
    background-color: black;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    margin: 5px;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

    &.dot-1 {
        background-color: #fc6058;
    }

    &.dot-2 {
        background-color: #fec02f;
    }

    &.dot-3 {
        background-color: #2aca3e;
    }
`;

const Navigation: FunctionComponent = ({ children }: Props) => {
    return (
        <Wrapper>
            <Link href="/">
                <a>
                    <DotsWrapper>
                        <BrowserDot className="dot-1"></BrowserDot>
                        <BrowserDot className="dot-2"></BrowserDot>
                        <BrowserDot className="dot-3"></BrowserDot>
                    </DotsWrapper>
                </a>
            </Link>

            <Nav>
                <li>{children}</li>
            </Nav>
        </Wrapper>
    );
};

export default Navigation;
