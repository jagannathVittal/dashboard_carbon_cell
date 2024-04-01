import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';

const ConnectWallet = () => {
    const handleConnectWallet = async () => {
        if (window && window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);
                console.log(web3, 'web3')
                toast.success('Wallet connected successfully!');
            } catch (error) {
                toast.error('Error connecting to wallet');
            }
        } else {
            toast.error('Please install MetaMask to connect your wallet.');
        }
    };
    return (
        <>
            {/* eslint-disable-next-line  */}
            <a className="btn carbon_light_green lift" onClick={handleConnectWallet}>
                Connect Wallet
            </a>
            <ToastContainer />
        </>
    )
}

export default ConnectWallet