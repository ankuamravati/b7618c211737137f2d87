import { BASE_URL, API_KEY } from "../utils/constants";

export const GET_ASTEROID_DETAILS = `${BASE_URL}/{{ASTERIOD_ID}}?api_key=${API_KEY}`;
export const GET_RANDOM_ASTEROID_IDS = `${BASE_URL}/browse?api_key=${API_KEY}`;
