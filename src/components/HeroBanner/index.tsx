import Container from 'components/UI/Container'
import { graphql, useStaticQuery } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

import * as Styled from './styles'

const HeroBanner: React.FC = () => {
  const { placeholderImage } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "splash.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const logoImage: FluidObject = placeholderImage.childImageSharp.fluid

  return (
    <Container section>
      <Styled.Hero>
        <Styled.HeroSection>
          <Styled.WowText>Empower Education</Styled.WowText>
          <Styled.WowSubText>
            Learning Environments with Open Source Software
          </Styled.WowSubText>
        </Styled.HeroSection>
        <Styled.HeroSection>
          <Styled.WowImg>
            <Img fluid={logoImage} />
          </Styled.WowImg>
        </Styled.HeroSection>
      </Styled.Hero>
    </Container>
  )
}

export default HeroBanner
