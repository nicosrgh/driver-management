import React from 'react'
import PropTypes from 'prop-types'

import {
  makeStyles,
} from '@material-ui/core'

import C from '@material-ui/core/Card'

import { Actions } from './Actions'
import { Content } from './Content'
import { Header } from './Header'
import { Media } from './Media'

const styles = makeStyles((theme) => ({
  card: {
    boxShadow: '0 2px 0 rgba(0,0,0,0.06)',
    borderRadius: '5px 5px 4px 4px',
  },
  actionArea: {
    textAlign: 'left',
  },
  avatar: {
    backgroundColor: theme.palette.primary,
  },
  action: {
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.default.dark,
  },
  footerAction: {
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.default.main,
  },
}))

function Component(props) {
  const classes = styles()
  const {
    item,
    itemOnClick,
    itemMediaSrc,
    itemContent,
    itemFooterAction,
    ...rest
  } = props

  const { header, ...card } = rest

  const {
    action,
    avatar,
    title,
    subheader,
    ...restHeader
  } = header

  return (
    <C
      className={classes.card}
      {...card}
    >
      <Header
        {...restHeader}
        action={action && action(item)}
        avatar={avatar && avatar(item)}
        title={title && title(item)}
        subheader={subheader && subheader(item)}
      />
      {itemMediaSrc && (
      <Media
        image={itemMediaSrc(item)}
      />
      )}
      {itemContent && (
      <Content>
        {itemContent(item)}
      </Content>
      )}
      {itemFooterAction && (
      <Actions disableSpacing classes={{ root: classes.footerAction }}>
        {itemFooterAction(item)}
      </Actions>
      )}
    </C>
  )
}

Component.defaultProps = {
  item: {},
  header: {},
  itemContent: null,
  itemFooterAction: null,
  itemMediaSrc: null,
  itemOnClick: null,
}

Component.propTypes = {
  item: PropTypes.shape({}),
  header: PropTypes.shape({}),
  itemContent: PropTypes.func,
  itemFooterAction: PropTypes.func,
  itemMediaSrc: PropTypes.func,
  itemOnClick: PropTypes.func,
}

export const Card = Component
export const CardActions = Actions
export const CardContent = Content
export const CardHeader = Header
export const CardMedia = Media

export default Card
