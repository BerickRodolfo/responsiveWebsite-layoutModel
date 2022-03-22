import React from 'react'
import { 
  InfoSec, 
  InfoRow, 
  InfoColumn, 
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './styles.js'

import { Container, Button } from '../../globalStyles.js'
import { Link } from 'react-router-dom'


const InfoSection = (
  {
    lightBg, 
    imgStart, 
    lightTopLine, 
    topLine, 
    lightText, 
    headLine,
    lightTextDesc,
    description,
    primary,
    buttonLabel,
    start,
    img,
    alt,
  }) => {
  return (
          <>
            <InfoSec lightBg={lightBg}>
                <Container>
                  <InfoRow imgStart = {imgStart}>
                    <InfoColumn>
                      <TextWrapper> 
                        <TopLine lighTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        <Link to ="/sign-up">
                          <Button big fontBig primary={primary}>
                            {buttonLabel}
                          </Button>
                        </Link>
                      </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                      <ImgWrapper start={start}>
                        <Img src={img} alt={alt} />
                      </ImgWrapper>
                    </InfoColumn>
                  </InfoRow>
                </Container>
            </InfoSec>
          </>
  )
}

export default InfoSection