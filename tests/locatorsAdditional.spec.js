const { test, expect } = require('@playwright/test')

test('verify additional locators', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    //single element by $----promises
    let el = await page.$('h1')
    console.log(await el.innerText())

    //single element by locator---methods
    let el2 = await page.locator('h1').innerText()
    console.log(el2)

    //fill operation
    await page.locator('input[name= "firstname"]').fill("sonali")
    //or
    //await page.fill('input[name= "firstname"]','sonali')

    // multiple elements with $$
    let buttons = await page.$$('button')
    for (let button of buttons) {
        let text = await button.textContent()
        console.log(text)
    }

    // multiple elements with locator

    let buttonB = await page.locator('button')
    for (let i = 0; i < buttonB.length; i++) {
        console.log(buttonB.nth(i).innerText())
    }
})