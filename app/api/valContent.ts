import axios from "axios";
import { Locale } from "../utils/url";

export const ValContent = async (name: string, tag: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?force=true`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};

export const ValScore = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${Locale.kr}/${puuid}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
