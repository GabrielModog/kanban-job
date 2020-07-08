import axios from "axios";

export default axios.create({
  baseURL: "http://demo.simjob.com.br:5000/api",
});
