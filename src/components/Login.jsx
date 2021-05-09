import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  overflow: hidden;
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.6;
  }
`;
const CTA = styled.div`
  max-width: 700px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;
const CTALogoOne = styled.img``;
const SignUp = styled.a`
  cursor: pointer;
  background-color: #0403ee;
  width: 100%;
  padding: 18px 0;
  text-align: center;
  font-weight: bold;
  border-radius: 100px;
  font-size: 18px;
  transition: all 0.5s;
  letter-spacing: 1.4px;
  margin-top: 12px;
  margin-bottom: 10px;
  &:hover {
    background-color: #0063e5;
  }
`;
const Description = styled.div`
  margin-top: 10px;
  font-size: 11px;
  letter-spacing: 1.3px;
  line-height: 1.5;
  text-align: center;
`;
const CTALogoTwo = styled.img`
  margin-top: 20px;
  width: 90%;
`;
