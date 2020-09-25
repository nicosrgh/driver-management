import React from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'

import {
  CircularProgress,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Paper,
  InputAdornment,
  makeStyles,
} from '@material-ui/core'

import { Magnify, Pound } from 'mdi-material-ui'

function renderInputComponent(inputProps) {
  const {
    classes, isloading, inputRef = () => {}, ref, ...other
  } = inputProps
  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: isloading === 'true'
          ? <CircularProgress />
          : <InputAdornment position="end"><Magnify style={{ color: 'rgba(0, 0, 0, 0.54)' }} /></InputAdornment>,
        inputRef: (node) => {
          ref(node)
          inputRef(node)
        },
        classes: {
          input: classes.input,
        },
      }}

      variant="outlined"
      style={{ marginTop: '16px', marginBottom: 0 }}
      InputLabelProps={{ shrink: true }}

      {...other}
    />
  )
}

function getSuggestionValue(suggestion) {
  return suggestion.name
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    flexGrow: 1,
  },
  container: {
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing(2),
  },
}))

function Component({
  isloading,
  keyword,
  suggestions,
  handler,
}) {
  const classes = useStyles()
  const renderSuggestion = (suggestion, { isHighlighted }) => (
    <MenuItem selected={isHighlighted} component="div" onClick={handler.suggestionClick(suggestion)}>
      <ListItemIcon style={{ minWidth: '32px' }}><Pound /></ListItemIcon>
      <ListItemText inset primary={suggestion.name} style={{ paddingLeft: 0 }} />
    </MenuItem>
  )

  const autosuggestProps = {
    renderInputComponent,
    suggestions,
    onSuggestionsFetchRequested: handler.suggestion,
    onSuggestionsClearRequested: handler.suggestionClean,
    getSuggestionValue,
    renderSuggestion,
  }

  return (
    <div className={classes.root}>
      <Autosuggest
        {...autosuggestProps}
        inputProps={{
          classes,
          id: 'react-autosuggest-simple',
          label: 'Driver',
          placeholder: 'Start typing driver keyword',
          value: keyword,
          onChange: handler.keyword,
          isloading: isloading.toString(),
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={(options) => (
          <Paper {...options.containerProps} square style={{ marginTop: 0 }}>
            {options.children}
          </Paper>
        )}
      />
    </div>
  )
}

Component.defaultProps = {
  keyword: '',
}

Component.propTypes = {
  keyword: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handler: PropTypes.shape({}).isRequired,
}

export const Search = Component

export default Search
