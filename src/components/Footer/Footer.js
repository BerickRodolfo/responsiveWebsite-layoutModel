import React from 'react';
import { Button } from '../../globalStyles.js';
import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import 
    { 
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubtext,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitles,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    SocialIcons,
    WebsiteRights,
    SocialIconLink,
    } from './styles.js'


const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubHeading>
                Join our exclusive membership to receive the latest news and trends.
            </FooterSubHeading>
            <FooterSubtext>
                You can unsubscribe at any time.
            </FooterSubtext>
            <Form>
                <FormInput name="email" type="email" placeholder="Your E-mail" />
                <Button fontbig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinksTitles>About us</FooterLinksTitles>
                    <FooterLink to ='/sign-up'>How It Works</FooterLink>
                    <FooterLink to ='/'>TestMonials</FooterLink>
                    <FooterLink to ='/'>Carrers</FooterLink>
                    <FooterLink to ='/'>Investors</FooterLink>
                    <FooterLink to ='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinksTitles>Contact us</FooterLinksTitles>
                    <FooterLink to ='/sign-up'>How It Works</FooterLink>
                    <FooterLink to ='/'>TestMonials</FooterLink>
                    <FooterLink to ='/'>Carrers</FooterLink>
                    <FooterLink to ='/'>Investors</FooterLink>
                    <FooterLink to ='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinksItems>
                    <FooterLinksTitles>Videos</FooterLinksTitles>
                    <FooterLink to ='/sign-up'>How It Works</FooterLink>
                    <FooterLink to ='/'>TestMonials</FooterLink>
                    <FooterLink to ='/'>Carrers</FooterLink>
                    <FooterLink to ='/'>Investors</FooterLink>
                    <FooterLink to ='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
                <FooterLinksItems>
                    <FooterLinksTitles>Social Media</FooterLinksTitles>
                    <FooterLink to ='/sign-up'>How It Works</FooterLink>
                    <FooterLink to ='/'>TestMonials</FooterLink>
                    <FooterLink to ='/'>Carrers</FooterLink>
                    <FooterLink to ='/'>Investors</FooterLink>
                    <FooterLink to ='/'>Terms of Service</FooterLink>
                </FooterLinksItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <SocialIcon />
                    VEX
                </SocialLogo>
                <WebsiteRights>
                    VEX © 2022 
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer