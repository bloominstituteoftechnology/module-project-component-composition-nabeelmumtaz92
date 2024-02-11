import React from 'react'
import styled from 'styled-components'


const StyledFigure = styled.figue `
  max-width: 60%
  figcaption {
    fonst-style:italic
  }
`

export default function Figure ({imageURL, caption}) {
    return (
      <figure>
      <img src= {imageURL} />
      <figcaption>Awesome pic taken on {caption} </figcaption>
    </figure>
    )
  }