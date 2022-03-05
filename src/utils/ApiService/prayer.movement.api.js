import axios from "axios";

export const getPrayerMovements = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getPrayerMovement = async (id) => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/photo${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
