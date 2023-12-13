import axios from "axios";
import { affinity } from "../utils/url";

export const ValScore = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${affinity.kr}/${puuid}`
  );
  return res;
};

export const ValRanking = async (affinity: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/leaderboard/${affinity}`
  );
  return res;
};

export const SeeRank = async (puuid: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/mmr/${affinity.kr}/${puuid}`
  );
  return res;
};

export const WinnerRate = async (name: string, tag: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v2/mmr/kr/${name}/${tag}`
  );
  return res;
};
