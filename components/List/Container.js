import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  ContainerItem,
  Empty,
} from 'components'

import Content from './Content'
import More from './More'

function Component(props) {
  const { data, name } = props
  return (
    <ContainerItem xs={12} sm={10} md={10}>
      <Container style={{ padding: 0 }}>
        {data.paging.count > 0
          ? data.items.map((item, index) => (
            <Content item={item} key={index.toString()} {...props} />
          ))
          : (<Empty title={`No ${name} found`} />)}
        <More {...props} />
      </Container>
    </ContainerItem>
  )
}

Component.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({}).isRequired,
    ).isRequired,
    paging: PropTypes.shape({
      count: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
}

export const ListContainer = Component

export default ListContainer
