import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

export async function createNewFlow(recipient, flowRate, Coin) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider,
  });
  console.log(flowRate);

  const superSigner = sf.createSigner({ signer: signer });

  console.log(signer);
  console.log(await superSigner.getAddress());
  console.log(Coin);
  const daix = await sf.loadSuperToken(Coin);

  console.log(daix);

  try {
    const createFlowOperation = daix.createFlow({
      sender: await superSigner.getAddress(),
      receiver: recipient,
      flowRate: flowRate,
      // userData?: string
    });

    console.log(createFlowOperation);
    console.log("Creating your stream...");

    const result = await createFlowOperation.exec(superSigner);

    console.log(result.data);

    console.log(
      `Congrats - you've just created a money stream!
  `
    );
    return result;
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

export function getFlowRate(days, amount) {
  const value = (amount * 10 ** 18) / (days * 24 * 60 * 60);
  // return value;
  console.log(value);
  return Math.floor(value);
  // return parseInt(value);
}

export async function DeleteFlow(recipient, coin) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();

  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf = await Framework.create({
    chainId: Number(chainId),
    provider: provider,
  });

  const superSigner = sf.createSigner({ signer: signer });

  try {
    const deleteFlowOperation = sf.cfaV1.deleteFlow({
      sender: await signer.getAddress(),
      receiver: recipient,
      superToken: coin,
      // userData?: string
    });

    const result = await deleteFlowOperation.exec(signer);
    return;
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}
