import { getContract } from "thirdweb";
import { client } from "./thirdwebClient"; // we'll define this below

// Your deployed contract address
export const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";

export const contract = getContract({
  client,
  chain: "sepolia", // or "polygon", "base", etc
  address: CONTRACT_ADDRESS,
});
