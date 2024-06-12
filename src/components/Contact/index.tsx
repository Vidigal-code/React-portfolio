import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import Snackbar from '@mui/material/Snackbar';
import { useLanguage } from "../../utils/Language.tsx";
import { Bio } from "../../data/Info.tsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 300;
  color: ${({ theme }) => theme.sub_text + 95};
  max-width: 900px;
  line-height: 30px;

  @media (max-width: 960px) {
    text-align: center;
    width: 85%;
  }

  @media (max-width: 640px) {
    font-size: 15px;
    width: 85%;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out !important;
  background: hsla(148, 100%, 50%, 0.84);
  background: linear-gradient(
    225deg,
    hsl(153, 100%, 50%) 0%,
    hsl(98, 100%, 50%) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsl(155, 100%, 50%) 0%,
    hsl(146, 100%, 50%) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsl(87, 100%, 50%) 0%,
    hsl(116, 100%, 50%) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: black;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: #1f2634 20px 20px 60px 0px;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { selectedLanguage } = useLanguage();
  const selectedBio = Bio[selectedLanguage as keyof typeof Bio];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(true); 
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>{selectedBio?.contact.title}</Title>
        <Desc>{selectedBio?.contact.desc}</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>{selectedBio?.contact.emailtile}</ContactTitle>
          <ContactInput
            placeholder={selectedBio?.contact.emailyourtile}
            name="from_email"
          />
          <ContactInput
            placeholder={selectedBio?.contact.emailyourname}
            name="from_name"
          />
          <ContactInput
            placeholder={selectedBio?.contact.subject}
            name="subject"
          />
          <ContactInputMessage
            placeholder={selectedBio?.contact.message}
            rows={4}
            name="message"
          />
          <ContactButton
            type="submit"
            value={selectedBio?.contact.submit}
          />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message={selectedBio?.contact.submitsuccess}
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
