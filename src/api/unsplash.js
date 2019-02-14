import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 511c78cc23bb0fc3dd16845221116a04c6f4aedbbfbb323eb0900d994380522e"
  }
});
