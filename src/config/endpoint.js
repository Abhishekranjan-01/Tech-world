import { constants } from "../constants/constants";

export const endpoint = {
  rootUrl: constants.url.projectUrl,
  USER: {
    auth: constants.url.projectUrl,
    login: "api/v1/users/login",
    signupUser: "api/v1/users/signup/",
    logout: "api/v1/users/logout",
  },
};
