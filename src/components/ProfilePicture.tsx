import { FunctionComponent } from "react";
import styled from "styled-components";

const Image = styled.img`
    display: block;
    margin: 0 auto;

    height: 200px;
    width: 200px;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.borderColor};
`;

const ProfilePicture: FunctionComponent = () => {
    return <Image src="/images/Dennis.jpg" />;
};

export default ProfilePicture;
