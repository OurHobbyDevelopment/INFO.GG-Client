import axios from "axios";

export const WeaponSkin = async () => {
  const res = await axios.get(
    "https://api.henrikdev.xyz/valorant/v2/store-offers"
  );
  if (res.status != 200) {
    console.log(`errno ${res.status}`);
  }
  return res;
};
