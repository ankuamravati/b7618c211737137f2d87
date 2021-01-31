import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchRandomAsteroids } from "../../services/asteroidService";
import { Button, Box } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    "& > *": {
      marginBottom: "1rem",
    },
  },
}));

const RandomAsteroids = () => {
  const classes = useStyles();
  const [isFetching, setIsfetching] = useState(false);
  const [randomAsteroids, setRandomAsteroids] = React.useState();
  const history = useHistory();
  React.useEffect(() => {
    async function fetch() {
      setIsfetching(true);
      const { data, error } = await fetchRandomAsteroids();
      setIsfetching(false);

      if (error) {
        return;
      }
      setRandomAsteroids(data);
    }
    fetch();
  }, []);
  return (
    <>
      <h2>Asteroids</h2>
      {isFetching ? (
        <>
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>
        </>
      ) : (
        randomAsteroids?.near_earth_objects.map((asteroid) => {
          return (
            <Box className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push(`/asteroid/${asteroid.id}`)}
              >
                {asteroid.name_limited}
              </Button>
            </Box>
          );
        })
      )}
    </>
  );
};

export default RandomAsteroids;
