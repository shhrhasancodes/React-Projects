import React, { Component } from 'react';
import { Card , CardContent , Typography , Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './cards.module.css';

function cards({data:{confirmed, deaths, recovered, lastUpdate}}) {

    if(!confirmed){
        return "Fetching data..."
    }

    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justifyContent = "center">
                <Grid xs = {10} sm = {3} md = {3} className={cx(styles.card , styles.infected)} item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end = {confirmed.value}
                                duration = {1.5}
                                seperator = ","
                            />    
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><i>No of active Covid-19 cases</i></Typography>
                    </CardContent>
                </Grid>
                <Grid xs = {10} sm = {3} md = {3} className={cx(styles.card , styles.recovered)} item component = {Card}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end = {recovered.value}
                            duration = {1.5}
                            seperator = ","
                        />    
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><i>No of recoveries of Covid-19 cases</i></Typography>
                        <br></br>
                        <Typography variant='body2'><i>*Api doesn't provide data for recoveries</i></Typography>
                    </CardContent>
                </Grid>
                <Grid xs = {10} sm = {3} md = {3} className={cx(styles.card , styles.deaths)} item component = {Card}>
                    <CardContent >
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp
                            start={0}
                            end = {deaths.value}
                            duration = {1.5}
                            seperator = ","
                        />    
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><i>No of deaths caused by Covid-19</i></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default cards;