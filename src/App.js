import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import LandRegistryABI from './contracts/LandRegistry.json';
import './styles/tailwind.css';  


function LandRegistryApp() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [surveyNumber, setSurveyNumber] = useState('');
  const [location, setLocation] = useState('');
  const [landDetails, setLandDetails] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);

          const networkId = await web3Instance.eth.net.getId();
          const deployedNetwork = LandRegistryABI.networks[networkId];
          const contractInstance = new web3Instance.eth.Contract(
            LandRegistryABI.abi,
            deployedNetwork && deployedNetwork.address
          );
          setContract(contractInstance);
        } catch (error) {
          console.error("Could not connect to wallet", error);
        }}};

    initWeb3();}, []);

  const registerLand = async () => {
    if (!contract) return;
    try {
      await contract.methods.registerLand(location, surveyNumber)
        .send({ from: account });
      alert('Land registered successfully!');
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  const fetchLandDetails = async () => {
    if (!contract) return;
    try {
      const details = await contract.methods.getLandDetails(surveyNumber).call();
      setLandDetails(details);
    } catch (error) {
      console.error("Fetching details failed", error);
    }
  };

  return (
  <div className="min-h-screen bg-gray-100 p-6">
   <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
    <h1 className="text-2xl font-bold mb-6">Land Registry dApp</h1>    
        {!walletConnected ? (
        <button 
        onClick={connectWallet} 
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Connect Wallet
      </button>
        ) : (
          <>
            <div className="mb-4">
            <input
                type="text"
                placeholder="Survey Number"
                value={surveyNumber}
                onChange={(e) => setSurveyNumber(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Land Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={registerLand}
                className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Register Land
              </button>
              <button 
                onClick={fetchLandDetails}
                className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Fetch Details
              </button>
            </div>
            {landDetails && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h2 className="font-bold">Land Details:</h2>
                <p>Owner: {landDetails.owner}</p>
                <p>Location: {landDetails.location}</p>
                <p>Survey Number: {landDetails.surveyNumber.toString()}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default LandRegistryApp;
