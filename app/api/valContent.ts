import axios from "axios";
import { affinity } from "../utils/url";

export const ValContent = async (name: string, tag: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?force=true`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};

export const SeeAgent = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${affinity.kr}/${puuid}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
