import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
padding:30px;
`
function Container(props) {
  return (
    <Wrapper style={props.style}>{props.children}</Wrapper>
  )
}

export default Container