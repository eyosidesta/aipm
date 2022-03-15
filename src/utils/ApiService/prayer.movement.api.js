import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const getPrayerMovements = async () => {
  return await axios
    .get(`${baseUrl}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getPrayerMovement = async (id) => {
  return await axios
    .get(`${baseUrl/id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
