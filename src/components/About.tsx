import { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    padding-bottom: 50px;
    padding-top: 50px;
    gap: 100px;
`;

const Skills = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.previewShadow};
`;

const Socials = styled.div`
    display: grid;
    align-content: center;
    text-align: center;

    img {
        width: 100%;
    }
`;

const About: FunctionComponent = () => {
    return (
        <Wrapper>
            <div>
                <h4>More about me</h4>
                <p>I build new projects just to tickle my brain and love teaching others how they're made.</p>
                <p>While I keep busy teaching courses, I still take interviews in search of a great team & projects that interest me.</p>
                <hr />
                <h4>TOP EXPERTISE</h4>
                <p>
                    Fullstack developer with primary focus on Django + React:{' '}
                    <a target="_blank" href="resume.pdf">
                        Download Resume
                    </a>
                </p>
                <Skills>
                    <ul>
                        <li>Python</li>
                        <li>Django</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Postgres</li>
                    </ul>

                    <ul>
                        <li>Google Maps API</li>
                        <li>JS Charts</li>
                        <li>AWS (RDS/S3)</li>
                        <li>Heroku</li>
                        <li>HTML/CSS</li>
                    </ul>
                </Skills>
            </div>

            <Socials>
                <img src="/images/follow.jpg" />
                <h3>Find me on Twitter & Youtube</h3>

                <a target="_blank" href="https://www.youtube.com/c/dennisivy">
                    YouTube: @DennisIvy
                </a>
                <br />
                <a target="_blank" href="https://twitter.com/dennisivy11">
                    Twitter: @DennisIvy11
                </a>
            </Socials>
        </Wrapper>
    );
};

export default About;
