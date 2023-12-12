import axios from "axios";

const getApiData = async (url: string) => {
  const res = await axios.get(url);
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};

export const ValContent = (name: string, tag: string, update: boolean) => {
  const url = `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?force=false`;
  return getApiData(url);
};

export const SeeAgent = (region: string, name: string, tag: string) => {
  const url = `https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${name}/${tag}`;
  return getApiData(url);
};
