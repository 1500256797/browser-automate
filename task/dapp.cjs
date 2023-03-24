const dappeteer = require('@chainsafe/dappeteer');
const puppeteer = require('puppeteer');
async function main() {
    // launch a browser and a MetaMask plugin
    const browser= await dappeteer.launch(puppeteer, {metaMaskVersion: 'latest', headless: false});
    const metaMask = await dappeteer.setupMetaMask(browser)
    // create a new page and visit your dapp
    const dappPage = await browser.newPage();
    await dappPage.goto('http://my-dapp.com');

    // you can change the network if you want
    await metaMask.switchNetwork('goerli');

    // do something in your dapp that prompts MetaMask to add a Token
    const addTokenButton = await dappPage.$('#add-token');
    await addTokenButton.click();
    // instruct MetaMask to accept this request
    await metaMask.acceptAddToken();

    // do something that prompts MetaMask to confirm a transaction
    const payButton = await dappPage.$('#pay-with-eth');
    await payButton.click();

    // 🏌
    await metaMask.confirmTransaction();
}

main();