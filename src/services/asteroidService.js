import { GET_ASTEROID_DETAILS, GET_RANDOM_ASTEROID_IDS } from "./endpoint";
import { http } from "./httpService";

export const searchAsteroid = async (id) => {
  const url = GET_ASTEROID_DETAILS.replace("{{ASTERIOD_ID}}", id);
  return http
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { error: err.message };
    });
};

export const fetchRandomAsteroids = () => {
  return http
    .get(GET_RANDOM_ASTEROID_IDS)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { error: err.message };
    });
};
