import axios from "axios";

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
    `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/kr/${puuid}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
