import React, { Fragment } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

export default ({ exercises, category, onSelect }) =>

    <Grid container spacing={2}>

        <Grid item sm={6}>
            <Paper style={styles.Paper}>

                {exercises.map(([group, exercises]) =>

                    !category || category === group ?
                        <Fragment>

                            <Typography
                                variant="button"
                                display="block"
                                style={{ textTransform: 'capitalize' }}
                            >
                                {group}
                            </Typography>

                            <List component="ul">
                                {exercises.map(({ id, title }) =>
                                    <ListItem button>
                                        <ListItemText 
                                        primary={title} 
                                        onClick  {() => onSelect(id)}
                                        />
                                    </ListItem>
                                )}
                            </List>

                        </Fragment>
                        : null

                )}

            </Paper>
        </Grid>

        <Grid item sm={6}>
            <Paper style={styles.Paper}>
                <Typography
                    variant='h4'>
                    Welcome!
                </Typography>

                <Typography
                    variant="body1"
                    style={{ marginTop: 20 }}
                >
                    Please select an excercise from the list from the left.
                </Typography>
            </Paper>
        </Grid>

    </Grid>