import React from 'react'

import {
  makeStyles,
} from '@material-ui/core'

import {
  Container,
  ContainerItem,
} from 'components'

const styles = makeStyles(() => ({
  container: {
    width: '100%',
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
  button: { padding: '10px 12px', width: '20px', color: '#fff' },
  center: { textAlign: 'center' },
  copy: { padding: '0 0 10px', margin: 0 },
  item: { padding: 0 },
  link: {
    color: '#333',
    fontWeight: '600',
    margin: '0 10px',
    textTransform: 'uppercase',
    '@media screen and (max-width: 767px)': {
      display: 'block',
    },
  },
  static: { textAlign: 'center', padding: '10px 0' },
}))

function Component() {
  const classes = styles()
  return (
    <Container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <ContainerItem md={12} sm={12} xs={12} className={classes.item}>
        <div className={classes.center}>
          <p className={classes.copy}>
            &copy;
            {` ${new Date().getFullYear()} ${process.env.APP_COMPANY_NAME}`}
          </p>
        </div>
      </ContainerItem>
    </Container>
  )
}

export const Footer = Component

export default Footer
