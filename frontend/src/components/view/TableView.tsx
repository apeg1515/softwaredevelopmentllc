import React, {useCallback, useEffect, useState} from 'react';
import { LOGIN_API, CARS_GET_API } from "../../utils/constants";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) => createStyles(({
    table: {
        minWidth: 650,
    }
})));

export default function() {
    const classes = useStyles();
    const [cars, setCars] = React.useState<any[]>([]);

    const getCars =  useCallback(async ()  => {
        try  {
            const token = JSON.parse(localStorage.getItem('authorized') || "");
            const { data } = await axios.get(CARS_GET_API, {
                headers: {
                    // "x-csrf-method": "VG9tIEJyYWR5IGlzIHRoZSBncmVhdGVzdCBvZiBhbGwgdGltZQ==",
                    "Authorization": token.orchisToken
                }
            });

            // console.log(data);

            setCars(data.payload)
        } catch(error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getCars();
    }, [ getCars ]);

    console.log(cars)
    return (
        <Container fixed maxWidth="lg">
            <Box display="flex" mt={6} justifyContent="center">
                <Box display="flex" justifyContent="center" width="100%">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Make</TableCell>
                                    <TableCell align="left">Model</TableCell>
                                    <TableCell align="left">Year</TableCell>
                                    <TableCell align="left">Color</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {cars? cars!.map((car) => (
                                <TableRow key={car._id}>
                                    <TableCell component="th" scope="row">{car.make}</TableCell>
                                    <TableCell component="th" scope="row">{car.model}</TableCell>
                                    <TableCell component="th" scope="row">{car.year}</TableCell>
                                    <TableCell component="th" scope="row">{car.color}</TableCell>
                                </TableRow>
                            )) : <div />}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    );
}
