import axios from "axios";
import { Locale, Url } from "../utils/url";

export const ValContent = async (name: string, tag: string) => {
  const res = await axios.get(
    `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}?force=true`
    // `${Url.Korea}/val/content/v1/contents?locale=${Locale.ko_KR}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
