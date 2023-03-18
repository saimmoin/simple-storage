import './App.css';
import {ethers} from 'ethers'
import StorageArtifact from "./artifacts/contracts/Storage.sol/Storage.json"
const storageAddress = "0xBdfE8cdC26930D5b7E802B9Dc82A31b83D973f69"


function App() {

  async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'})
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  async function _initialContract(init) {
    const contract = new ethers.Contract(storageAddress, StorageArtifact.abi, init);
    return contract;
  }

  async function Message() {
    const contract = await _initialContract(signer);
    const message = await contract.getMessage();
    document.getElementById('display').value = message;
  }

  async function setMessage() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const inpMsg = document.getElementById('msg').value;
      const contract = await _initialContract(signer);
      const addMessage = await contract.setMessage(inpMsg)
      await addMessage.wait();
      Message();
      document.getElementById('msg').value = '';
    }
  }

  return (
    <div>
      Enter A Message: <input id='msg'/><br />
      Your Message: <input id='display'/><br />
      <button onClick={setMessage}>Set Message</button>
    </div>
  )

}

export default App;


