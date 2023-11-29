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

export const ValScore = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${affinity.kr}/${puuid}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};

export const SeeRank = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/${affinity.kr}/${puuid}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
export const ValRanking = async (affinity: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/leaderboard/${affinity}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};

export const WeaponSkin = async () => {
  const res = await axios.get(
    "https://api.henrikdev.xyz/valorant/v2/store-offers"
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
