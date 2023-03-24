//使用puppeteer打开百度首页 并截图
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');
    await page.screenshot({path: 'example.png'});
    await browser.close();
}
)();
