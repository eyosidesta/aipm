import axios from "axios";

export const getUniversityStudentsMovements = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getUniversityStudentsMovement = async (id) => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/photos${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
