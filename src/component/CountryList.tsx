import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography } from '@material-ui/core'
import GetData from '../data-fetch/GetData'
import { ContextData } from '../context/ContextData'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const _ = require("lodash");

interface ItemType {
  name: string,
  population: number,
  capital: string,
}
interface ColType {
  title: string,
  field: string,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      minHeight: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: '45%'
  },
  paperDetails: {
    padding: theme.spacing(2),
    width: '45%',
    height: 'max-content',
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

export default function CountryList() {
  const {
    searchTerm,
    checkBoxFilterTerm,
    sortTerm
  } = useContext(ContextData);
  const { data } = GetData();
  const classes = useStyles();
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCountryDetails, setCountryDetails] = useState<any>(null);


  useEffect(() => {
    setFilteredData(_.orderBy(data, ['population'], [sortTerm]))
    if (searchTerm !== '') {
      setCountryDetails(null)
      getFilteredData()
    }
  }, [data, searchTerm, sortTerm, checkBoxFilterTerm])

  const getFilteredData = () => {
    switch (checkBoxFilterTerm) {
      case 'name':
        const filteredWithName = data.filter((item: ItemType) =>
          item.name?.toLowerCase().includes(searchTerm!.toLowerCase())
        )
        setFilteredData(_.orderBy(filteredWithName, ['population'], [sortTerm]))
        break;
      case 'capital':
        const filteredWithCapital = data.filter((item: ItemType) =>
          item.capital?.toLowerCase().includes(searchTerm!.toLowerCase())
        )
        setFilteredData(_.orderBy(filteredWithCapital, ['population'], [sortTerm]))
        break;
      default:
        const filteredWithName1 = data.filter((item: ItemType) =>
          item.name?.toLowerCase().includes(searchTerm!.toLowerCase())
        )
        setFilteredData(_.orderBy(filteredWithName1, ['population'], [sortTerm]))
    }
  }

  const columns: ColType[] = [
    {
      title: 'Country Name',
      field: 'name',
    },
    {
      title: 'Capital',
      field: 'capital',
    },
    {
      title: 'Population',
      field: 'population',
    }
  ];

  return (
    <Grid container className={classes.root} spacing={0}>
      <Paper elevation={1} className={classes.paper}>
        <div className="App">
          {_.isEmpty(data) &&
            <span>Loading......</span>
          }
          {data && (<TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((col) => (
                    <TableCell>{col.title}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData && filteredData.map((row) => (
                  <TableRow key={row['name']}>
                    {columns.map((col) => (
                      <TableCell align="left"  style={{cursor: 'pointer' }} onClick={e => { setCountryDetails(row) }}>{row[col.field]}</TableCell>
                    ))}

                  </TableRow>
                ))}

              </TableBody>
            </Table>
          </TableContainer>)}

        </div>
      </Paper>
      <Paper elevation={2} className={classes.paperDetails}>
        <Grid item>
          {_.isEmpty(selectedCountryDetails) &&
            <Typography>Please select country to view the details......</Typography>
          }

        </Grid>
        <Grid item>
          {!_.isEmpty(selectedCountryDetails) &&
            (<><Typography>Capital : {selectedCountryDetails?.capital}</Typography>
              <Typography>Region : {selectedCountryDetails?.region}</Typography>
              <Typography>SubRegion : {selectedCountryDetails?.subregion}</Typography>
              <Typography>Population : {selectedCountryDetails?.population}</Typography></>
            )
          }
          {!_.isEmpty(selectedCountryDetails) && _.isArray(selectedCountryDetails?.currencies) &&
            (selectedCountryDetails?.currencies).map((currency: any, index: any) => (
              <Typography key={currency.name + index}>Currency : {currency.name}</Typography>
            ))}

        </Grid>
      </Paper>
    </Grid>
  );
}
