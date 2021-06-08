import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  EndDiv,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT US</Heading>
            <FooterLink href="#">How Airbnb works</FooterLink>
            <FooterLink href="#">Newsroom</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Airbnb Plus</FooterLink>
            <FooterLink href="#">Airbnb Luxe</FooterLink>
            <FooterLink href="#">HotelTonight</FooterLink>
            <FooterLink href="#">Airbnb for Work</FooterLink>
            <FooterLink href="#">Made possible by Hosts</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Founders' Letter</FooterLink>
          </Column>
          <Column>
            <Heading>COMMUNITY</Heading>
            <FooterLink href="#">Diversity & Belonging</FooterLink>
            <FooterLink href="#">Accessibility</FooterLink>
            <FooterLink href="#">Airbnb Associates</FooterLink>
            <FooterLink href="#">Frontline Stays</FooterLink>
            <FooterLink href="#">Guest Referrals</FooterLink>
            <FooterLink href="#">Airbnb.org</FooterLink>
          </Column>
          <Column>
            <Heading>HOST</Heading>
            <FooterLink href="#">Host your home</FooterLink>
            <FooterLink href="#">Host an Online Experience</FooterLink>
            <FooterLink href="#">Host an Experience</FooterLink>
            <FooterLink href="#">Responsible hosting</FooterLink>
            <FooterLink href="#">Resource Centre</FooterLink>
            <FooterLink href="#">Community Centre</FooterLink>
          </Column>
          <Column>
            <Heading>SUPPORT</Heading>
            <FooterLink href="#">Our COVID-19 Response</FooterLink>
            <FooterLink href="#">Help Center</FooterLink>
            <FooterLink href="#">Cancellation options</FooterLink>
            <FooterLink href="#">Neighbourhood Support</FooterLink>
            <FooterLink href="#">Trust & Safety</FooterLink>
          </Column>
        </Row>
        <hr style={{ width: "100%", margin: "auto", color: "gray" }} />

        <EndDiv>
          <p>© 2021 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
          <p>
            <p><LanguageIcon />English (IN) ₹ INR</p>
            <p>
              <FacebookIcon /> <TwitterIcon /> <InstagramIcon />
            </p>
          </p>
        </EndDiv>
      </Container>
    </Box>
  );
};
export { Footer };
