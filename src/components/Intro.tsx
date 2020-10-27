import Link from "next/link";
import { FunctionComponent } from "react";

import Bio from "./Bio";
import Navigation from "./Navigation";
import ProfilePicture from "./ProfilePicture";

const Intro: FunctionComponent = () => {
    return (
        <>
            <div className="intro-wrapper">
                <div className="nav-wrapper">
                    <Navigation>
                        <Link href="/#contact">
                            <a>Contact</a>
                        </Link>
                    </Navigation>
                </div>

                <div className="left-column">
                    <ProfilePicture />
                </div>

                <div className="right-column">
                    <Bio />
                </div>
            </div>

            <style jsx>
                {`
                    .intro-wrapper {
                        background-color: #fff;
                        border: 1px solid #c1c1c1;
                        border-radius: 5px 5px 0 0;

                        -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
                        -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
                        box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);

                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-areas:
                            "nav-wrapper nav-wrapper"
                            "left-column right-column";
                    }

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
                        .intro-wrapper {
                            grid-template-columns: 1fr;
                            grid-template-areas:
                                "nav-wrapper"
                                "left-column"
                                "right-column";
                        }

                        .right-column {
                            justify-content: center;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Intro;
