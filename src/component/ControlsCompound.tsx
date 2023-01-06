import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Paper, Typography } from '@material-ui/core'
import { ContextData } from '../context/ContextData'
import CheckBox from './Controls/CheckBox'
import SearchField from './Controls/SearchField'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      minHeight: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonSpace: {
    marginLeft: '10%'
  },
  wrapperpaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "50rem",

  }
}));


export default function ControlsCompound() {
  const {
    searchTerm,
    setSearchTerm,
    setCheckBoxFilterTerm,
    sortTerm,
    setSortTerm
  } = useContext(ContextData)
  const classes = useStyles();
  const [isNameCheckBoxChecked, setIsNameCheckBoxChecked] = useState(true)
  const [isCapitalCheckBoxChecked, setIsCapitalCheckBoxChecked] =
    useState(false)

  const doNameCheckBoxActions = () => {
    setIsNameCheckBoxChecked(true)
    setIsCapitalCheckBoxChecked(false)
    setCheckBoxFilterTerm!('name')
  }

  const doCapitalCheckBoxActions = () => {
    setIsNameCheckBoxChecked(false)
    setIsCapitalCheckBoxChecked(true)
    setCheckBoxFilterTerm!('capital')
  }


  const doClearButtonActions = () => {
    setSearchTerm!('')
    setIsNameCheckBoxChecked(true)
    setCheckBoxFilterTerm!('name')
    setIsCapitalCheckBoxChecked(false)
    setSortTerm!('desc')

  }
  const doSearchFieldActions = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm!(event.target.value)
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortTerm!(event.target.value)
  }
  return (
    <>
      <Typography variant='h3' align='center'>
        {'Countries Dashboard'}
      </Typography>
      <Paper elevation={1} className={classes.wrapperpaper}>
        <Grid container className={classes.root}>
          <Paper elevation={1} className={classes.paper}>
            <Grid container>
              <Grid item>
                <Typography variant='h5' align='center'>
                  {'Search Filter'}
                </Typography>
              </Grid>
              <Grid item spacing={2}>
                <SearchField
                  value={searchTerm!}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    doSearchFieldActions(event)
                  }
                />
                <CheckBox
                  id='name'
                  label='Name'
                  checked={isNameCheckBoxChecked}
                  onClick={doNameCheckBoxActions}
                />
                <CheckBox
                  id='capital'
                  label='Capital'
                  checked={isCapitalCheckBoxChecked}
                  onClick={doCapitalCheckBoxActions}
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={2} className={classes.paper}>
            <Grid container>
              <Grid item>
                <Typography variant='h5' align='center'>
                  {'Population Filter'}
                </Typography>

              </Grid>
              <Grid item>
                <FormControl component="fieldset">
                  <RadioGroup row aria-label="position" name="position" value={sortTerm} defaultValue={sortTerm} onChange={handleRadioChange}>
                    <FormControlLabel value="desc" control={<Radio color="primary" />} label="Decending" />
                    <FormControlLabel value="asc" control={<Radio color="primary" />} label="Ascending" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
          <Grid item className={classes.buttonSpace}>
            <Button
              variant='contained'
              color='primary'
              onClick={doClearButtonActions}
              size='medium'
            >
              Clear All Filters
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}
