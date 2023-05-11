import "./payment.css";
import React from "react";
import { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
function Payments() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [recipient, setRecipient] = useState("");

  async function createNewFlow(recipient, flowRate) {
    const provider =
      window.ethereum != null
        ? new ethers.providers.Web3Provider(window.ethereum)
        : ethers.providers.getDefaultProvider();
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const superSigner = sf.createSigner({ signer: signer });

    console.log(signer);
    console.log(await superSigner.getAddress());
    const daix = await sf.loadSuperToken("fDAIx");

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
      console.log(result);

      console.log(
        `Congrats - you've just created a money stream!
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }
  async function ConnectWallet() {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);

      setCurrentAccount(accounts[0]);
      // account = currentAccount;
      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      // setupEventListener()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="box">
      <div className="login-box">
        <form>
          <div className="user-box">
            <input
              type="text"
              onChange={(e) => {
                setRecipient(e.target.value);
              }}
              name
              required
            />
            <label>Reciver</label>
          </div>
          {/* <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div> */}
          <center>
            <a
              onClick={() => {
                ConnectWallet();
                createNewFlow(recipient, 100);
              }}
            >
              SEND
              <span />
            </a>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Payments;
