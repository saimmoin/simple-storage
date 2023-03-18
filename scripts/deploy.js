const hre = require('hardhat');

async function main() {
    const Storage = await hre.ethers.getContractFactory('Storage');
    const storage = await Storage.deploy();
    await storage.deployed();
    console.log("Contract Deployed To: ", storage.address)

    const transaction = await storage.setMessage('Hi, Buddies');
    await transaction.wait();

    const transaction1 = await storage.getMessage();
    console.log("Message: ", transaction1);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain();