import Head from "next/head";
import React from "react";

import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Intro from "../components/Intro";
import PostPreview from "../components/PostPreview";
import styles from "../styles/Home.module.scss";

export default function Home({ posts }) {
    return (
        <>
            <Head>
                <title>Phuong Nguyen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className={styles.dark}>
                <div className="main-container">
                    <div className={styles.greeting}>
                        <h1>Hi, I'm Phuong Nguyen</h1>
                    </div>
                    <Intro />
                </div>
            </section>
            <section className={styles.light}>
                <div className="main-container">
                    <About />
                </div>
            </section>
            <section className={styles.dark}>
                <div className="main-container">
                    <h3>Some of my past projects</h3>
                    <div className={styles['post-wrapper']}>
                        {posts.map((post, index) => (
                            <PostPreview key={index} data={post} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="contact" className={styles.light}>
                <div className="main-container">
                    <ContactForm />
                </div>
            </section>
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
