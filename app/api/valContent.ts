import axios from "axios";

export const ValContent = async (
  name: string,
  tag: string,
  update: boolean
) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?force=${update}`
  );
  return res;
};

export const SeeAgent = async (region: string, name: string, tag: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/mmr/${region}/${name}/${tag}`
  );
  return res;
};
