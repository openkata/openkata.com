import { graphql, useStaticQuery } from 'gatsby'
import Img, { FixedObject } from 'gatsby-image'
import React from 'react'

import * as Styled from './styles'

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const logoTitle: string = site.siteMetadata.title
  const logoImage: FixedObject = placeholderImage.childImageSharp.fixed

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        <Img fixed={logoImage} alt={logoTitle} />
      </Styled.Image>
    </Styled.Logo>
  )
}

export default Logo
