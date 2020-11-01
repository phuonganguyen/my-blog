import { FunctionComponent } from "react";
import styled from "styled-components";

const Title = styled.h3`
    text-align: center;
`;

const Form = styled.form`
    display: block;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.borderColor};
    padding: 15px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.mainColor};
    margin-bottom: 50px;

    label {
        line-height: 2.7em;
    }
`;

const InputField = styled.input`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    font-size: 14px;
`;

const TextArea = styled.textarea`
    min-height: 100px;
    font-size: 14px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({ theme }) => theme.secondaryColor};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    font-size: 14px;
`;

const Button = styled.input`
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.buttonColor};
    border: none;
    cursor: pointer;
`;

const ContactForm: FunctionComponent = () => {
    return (
        <>
            <Title>Get In Touch</Title>
            <Form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                    <label>
                        Don’t fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>
                <label>Name</label>
                <InputField type="text" name="name" />

                <label>Subject</label>
                <InputField type="text" name="subject" />

                <label>Email</label>
                <InputField type="text" name="email" />

                <label>Message</label>
                <TextArea name="message"></TextArea>

                <div data-netlify-recaptcha="true"></div>

                <Button type="submit" value="Send" />
            </Form>
        </>
    );
};

export default ContactForm;
