import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { searchAsteroid } from "../../services/asteroidService";
import AsteroidInfo from "../AsteroidInfo";

const RandomAsteroidView = () => {
  const { id } = useParams();
  const [asteroidInfo, setAsteroidData] = React.useState();
  const [isFetching, setIsFetching] = useState(false);
  React.useEffect(() => {
    async function fetchDetails() {
      setIsFetching(true);
      const { data, error } = await searchAsteroid(id);
      setIsFetching(false);
      if (error) {
        return;
      }
      setAsteroidData(data);
    }
    if (id) {
      fetchDetails();
    }
  }, []);
  return (
    <>
      <AsteroidInfo asteroidInfo={asteroidInfo} isFetching={isFetching} />
    </>
  );
};
export default RandomAsteroidView;
