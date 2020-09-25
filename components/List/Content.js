import React from 'react'
import PropTypes from 'prop-types'

import {
  ContainerItem,
  Card,
} from 'components'

function Component({
  item,
  header,
  itemContent,
  itemFooterAction,
  itemMediaSrc,
  itemOnClick,
  view,
}) {
  const {
    action,
    avatar,
    title,
    subheader,
    ...restHeader
  } = header

  return (
    <ContainerItem
      xs={12}
      sm={view.grid ? 6 : 12}
      md={view.grid ? 4 : 12}
      lg={view.grid ? 4 : 12}
    >
      <Card
        item={item}
        header={{
          action,
          avatar,
          title,
          subheader,
          ...restHeader,
        }}
        itemOnClick={itemOnClick}
        itemMediaSrc={itemMediaSrc}
        itemContent={itemContent}
        itemFooterAction={itemFooterAction}
      />
    </ContainerItem>
  )
}

Component.defaultProps = {
  header: {
    action: null,
    avatar: null,
    subheader: null,
    title: null,
  },
  itemContent: null,
  itemFooterAction: null,
  itemMediaSrc: null,
  itemOnClick: null,
}

Component.propTypes = {
  item: PropTypes.shape({}).isRequired,
  header: PropTypes.shape({
    action: PropTypes.func,
    avatar: PropTypes.func,
    subheader: PropTypes.func,
    title: PropTypes.func,
  }),
  itemContent: PropTypes.func,
  itemMediaSrc: PropTypes.func,
  itemOnClick: PropTypes.func,
  itemFooterAction: PropTypes.func,
  toggle: PropTypes.shape({}).isRequired,
  view: PropTypes.shape({
    grid: PropTypes.bool.isRequired,
  }).isRequired,
}

export const ListContent = Component

export default ListContent
