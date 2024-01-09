import environment from "./BaseEnvironment";

/*
 * environments for development
 * You shouldn't have override anything.
 */

const baseUrl = "http://localhost:4200";      // URL to run the application (HOST & PORT)
const baseApi = "http://54.202.218.249:9501/api"; // URL of development server

const env = environment(baseApi);

const DevelopmentEnvironment = {
  ...env,
  baseUrl: baseUrl,
};

export default DevelopmentEnvironment;
