// @flow
import * as React from 'react';
import Grid from "@mui/material";

export function ActiveUsers(props) {

    const activeUser=async()=>{
       let res=await fetch("/dashboard/activeuser",{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        let response=res.json();

    }
  return (
    <div>
       <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        {activeUser()}

        </Grid>
       </Grid>
    </div>
  );
};