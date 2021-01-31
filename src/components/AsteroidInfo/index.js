import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const AsteroidInfo = ({ asteroidInfo, isFetching }) => {
  const classes = useStyles();
  return (
    <>
      {isFetching ? (
        <>
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
        <>
          {asteroidInfo ? (
            <>
              <h1>Asteroid Details:</h1>
              <h2>Name: {asteroidInfo?.name}</h2>
              <h3>NASA jpl url : {asteroidInfo?.nasa_jpl_url}</h3>
              <h4>
                Is Hazardous: {asteroidInfo?.is_potentially_hazardous_asteroid}
              </h4>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default AsteroidInfo;
