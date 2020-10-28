import Head from "next/head";
import React from "react";
import styled, { css } from "styled-components";

import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Intro from "../components/Intro";
import PostPreview from "../components/PostPreview";

const Section = styled.section`
    background-color: ${({ theme }) => theme.secondaryColor};
    ${(props) =>
        props.primary &&
        css`
            background-color: ${({ theme }) => theme.mainColor};
        `}
`;

const Greeting = styled.div`
    display: grid;
    text-align: center;
    align-content: center;
    min-height: 10em;
`;

const PostWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 320px);
    gap: 20px;
    justify-content: center;
    padding-bottom: 50px;
`;

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Phuong Nguyen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Section primary>
                <div className="main-container">
                    <Greeting>
                        <h1>Hi, I'm Phuong Nguyen</h1>
                    </Greeting>
                    <Intro />
                </div>
            </Section>

            <Section>
                <div className="main-container">
                    <About />
                </div>
            </Section>
            <Section primary>
                <div className="main-container">
                    <h3>Some of my past projects</h3>
                    <PostWrapper>
                        {posts.map((post, index) => (
                            <PostPreview key={index} data={post} />
                        ))}
                    </PostWrapper>
                </div>
            </Section>
            <Section id="contact">
                <div className="main-container">
                    <ContactForm />
                </div>
            </Section>
        </>
    );
}

export function getStaticProps() {
    const posts = [
        {
            thumbnail: 'dash.jpg',
            title: 'Laboratory Management System',
            intro: 'Designed built & maintained a the lab management system for FOI Laboratories',
        },
        {
            thumbnail: 'ecom.jpg',
            title: 'Online Store - CoursePost Title',
            intro: 'Online store with paypal payments integration and guest user shopping',
        },
        {
            thumbnail: 'membership site.jpg',
            title: 'Membership Website',
            intro: 'Modulized guide for online courses with step by  step instructions',
        },
    ];

    return {
        props: {
            posts,
        },
    };
}
