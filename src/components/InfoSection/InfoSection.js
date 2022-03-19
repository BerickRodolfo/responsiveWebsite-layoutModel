import React from 'react'
import { InfoSec, InfoRow, InfoColumn, TextWrapper } from './styles.js'
import { Container } from '../../globalStyles.js'

const InfoSection = ({lightBg}) => {
  return (
    <>
        <InfoSec lightBg={lightBg}>
            <Container>
              <InfoRow>
                <InfoColumn>
                  <TextWrapper>
                    Sasuke
                  </TextWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
        </InfoSec>

    </>
  )
}

export default InfoSection