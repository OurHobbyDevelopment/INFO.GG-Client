import axios from "axios";

export const WeaponSkin = async () => {
  const res = await axios.get(
    "https://api.henrikdev.xyz/valorant/v2/store-offers"
  );
  return res;
};
