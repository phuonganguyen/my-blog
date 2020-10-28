import { FunctionComponent } from "react";
import styled from "styled-components";

import Post from "../models/Post";

const Wrapper = styled.div`
    border: 1px solid ${({ theme }) => theme.borderColor};
    -webkit-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
    box-shadow: -2px 7px 21px -9px rgba(0, 0, 0, 0.75);
`;
const Thumbnail = styled.img`
    display: block;
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

const PostInfo = styled.div`
    background-color: #fff;
    padding: 15px;
`;

const Title = styled.h6`
    color: black;
    margin: 0;
`;

const Intro = styled.p`
    color: #4b5156;
    font-size: 14px;
`;

const PostPreview: FunctionComponent<{ data: Post }> = ({ data }) => {
    const thumbnailUrl = `/images/${data.thumbnail}`;
    return (
        <Wrapper>
            <Thumbnail src={thumbnailUrl} />
            <PostInfo>
                <Title>{data.title}</Title>
                <Intro>{data.intro}</Intro>
                <a href="#">Read More</a>
            </PostInfo>
        </Wrapper>
    );
};

export default PostPreview;
