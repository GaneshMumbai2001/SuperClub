import Web3 from "web3";
import abi from "./abi/reward.json";
const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js
const { ethereum } = isBrowser();
if (ethereum) {
  isBrowser().web3 = new Web3(ethereum);
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}


const address = "0xAe6BcC54A78f92E9d8798003338E0ea83A5F6d80"

export const distributeRewards = async ({ address,amounts }) => {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();
    const signer = provider.getSigner();
    const Role = new ethers.Contract(address, abi, signer);
    const tokenId = await Role.distributeRewards(address,amounts);
    console.log(tokenId);
    return tokenId;
  };
  
 export const claimRewards = async () => {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();
    const signer = provider.getSigner();
    const Role = new ethers.Contract(address, abi, signer);
    const tokenId = await Role.claimRewards();
    console.log(tokenId);
    return tokenId;
  };
  