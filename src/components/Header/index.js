import React from "react";
import { Box, Grid, Typography,Button } from "@material-ui/core";


export default (props) => (
 <Box py={10} bgcolor="#D0D0D0" >
    <Grid container justifyContent="center" > 
        <Grid item xs={10}>
            <Box display="flex" justifyContent="space-between">
              <Typography variant ="h4" color="primary"> Open Job Listing </Typography>
              <Button onClick={props.openNewJobModal} variant ="contained" color="primary" disableElevation>
                  Post a job
               
                </Button>
           </Box>
        </Grid>
    </Grid>
</Box>
);