import React from 'react'
import { connect } from "react-redux";
import { Container, Toolbar, Grid, Typography } from '@mui/material';
import { get } from "lodash";
import StoreFinderMap from './components/storefinder/StoreFinderMap';

const HomeDashboard = (props) => {
  const { sensorsDat, fulldata } = props;

  console.log(fulldata)
  if (fulldata === undefined) {
    return <>Loading</>
  }
  const {stores} = fulldata;

  return (
    <div style={{ backgroundColor: '', height: '100vh' }}>
      <Grid container style={{ height: '100vh', backgroundColor: '' }}>
        <div style={{  }}>
          <StoreFinderMap stores={stores}/>
        </div>
        {/* <Grid item xs={6} sx={{backgroundColor: 'red'}}>
        </Grid>
        <Grid item xs={6} sx={{backgroundColor: 'yellow'}}>
        </Grid> */}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    themeColors: state.theme,
    userData: state.firebase.profile,
    project: state.project,
    marketsData: state.firestore.data.Markets,
    fulldata: get(state.firebase.data, `data`),
  };
};


export default connect(mapStateToProps)(HomeDashboard);
