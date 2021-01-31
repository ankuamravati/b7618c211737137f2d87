import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { searchAsteroid } from "../../services/asteroidService";
import AsteroidInfo from "../AsteroidInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
}));
const AsteroidForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [id, setId] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [asteroidInfo, setAsteroidData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    const { data, error } = await searchAsteroid(id);
    setIsFetching(false);
    if (error) {
      return;
    }
    setAsteroidData(data);
  };
  return (
    <>
      <Box m="auto" width="40%">
        <h2>Search Asteroid</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter Asteroid ID"
              label="Asteroid Id"
              variant="outlined"
              onChange={({ target: { value } }) => setId(value)}
            />
          </div>
          <Box mt="1rem" className={classes.root}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!Boolean(id.length)}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => history.push("/random-asteroids")}
            >
              Random Asteroid
            </Button>
          </Box>
        </form>
      </Box>
      <Box>
        <AsteroidInfo asteroidInfo={asteroidInfo} isFetching={isFetching} />
       
      </Box>
    </>
  );
};

export default AsteroidForm;
