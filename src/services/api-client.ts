import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bf3c54f9343f48c1b7fa929c424ffd62",
  },
});
