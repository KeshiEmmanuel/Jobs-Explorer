import axios from "axios";

export const getAllGitUsers = async () => {
  const response = await axios
    .get
    /* "https://jsonplaceholder.typicode.com/users" */
    ();
  const data = response.data;
  return data;
};
