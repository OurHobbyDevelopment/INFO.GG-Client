import axios from "axios";

export const getAimPoint = (aimPoint: string) => {
  return axios
    .get("http://localhost:4000/aimpoint", {
      params: {
        code: aimPoint,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const seeAimPoint = async () => {
  const res = await axios.get("http://localhost:4000/seeAimpoint");
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
