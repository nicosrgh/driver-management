import React from 'react'

import Action from './Action'
import Container from './Container'

function Component(props) {
  return (
    <>
      <Action {...props} />
      <Container {...props} />
    </>
  )
}

export const List = Component

export default List
