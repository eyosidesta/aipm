import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const getStaffMembers = async () => {
  return await axios
    .get(`${baseUrl}/photos`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getStaffMember = async (id) => {
  return await axios
    .get(`${baseUrl}/photos/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
