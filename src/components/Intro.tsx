import Link from "next/link";
import React from "react";
import styled from "styled-components";

import Bio from "./Bio";
import Navigation, { NavLink } from "./Navigation";
import ProfilePicture from "./ProfilePicture";

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.secondaryColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px 5px 0 0;

    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'nav-wrapper nav-wrapper'
        'left-column right-column';

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-areas:
            'nav-wrapper'
            'left-column'
            'right-column';
    }
`;

class Intro extends React.Component {
    render() {
        return (
            <>
                <Wrapper>
                    <div className="nav-wrapper">
                        <Navigation>
                            <Link href="/#contact">
                                <NavLink>Contact</NavLink>
                            </Link>
                        </Navigation>
                    </div>

                    <div className="left-column">
                        <ProfilePicture />
                    </div>

                    <div className="right-column">
                        <Bio />
                    </div>
                </Wrapper>

                <style jsx>
                    {`
                        .nav-wrapper {
                            grid-area: nav-wrapper;
                        }

                        .left-column {
                            grid-area: left-column;
                            padding-top: 50px;
                            padding-bottom: 50px;
                        }

                        .right-column {
                            grid-area: right-column;
                            display: grid;
                            align-content: center;

                            padding-top: 50px;
                            padding-bottom: 50px;
                        }

                        @media screen and (max-width: 800px) {
                            .right-column {
                                justify-content: center;
                            }
                        }
                    `}
                </style>
            </>
        );
    }
}

export default Intro;
