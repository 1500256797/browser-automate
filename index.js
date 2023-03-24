import dappeteer from '@chainsafe/dappeteer';

async function main() {
  const { metaMask, browser } = await dappeteer.bootstrap();

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