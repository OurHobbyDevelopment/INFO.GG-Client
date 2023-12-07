import axios from "axios";

export const getAimPoint = (
  aimPoint: string,
  title: string /**img: string*/
) => {
  return axios
    .get("http://localhost:4000/aimpoint", {
      params: {
        code: aimPoint,
        title: title,
        // img: img,
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

export const showAimPointImg = async (code: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/crosshair/generate?id=${code}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
