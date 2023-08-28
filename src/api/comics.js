import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "c56bbbd638eaae9f55dcf654a07307e3";
const PRIVATE_KEY = "4a130fa5ea2c82ab32cf0e647cf2701e64e61579";
const TIMESTAMP = Date.now().toString();
const HASH = md5(`${TIMESTAMP}${PRIVATE_KEY}${PUBLIC_KEY}`);

const URL = `
  https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateDescriptor=thisWeek&limit=50&apikey=${PUBLIC_KEY}&ts=${TIMESTAMP}&hash=${HASH}`;

export const getAllComicList = async () => {
  const response = await axios.get(URL);
  return response.data;
};
