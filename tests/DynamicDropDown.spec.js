const { test, expect } = require('@playwright/test')

test('verify the dynamic drop down -from', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Pune', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')//wait by 1 character any options
    let optionsCount = await page.locator('.placeHolderMainText').count()
    console.log(optionsCount)//20

    for (let i = 0; i < optionsCount; i++) {
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)
        if (resultText == "Nigdi") {
            await page.locator('.placeHolderMainText').nth(i).click()
            break;
        }
    }
    await page.waitForTimeout(3000)
})

test.only('verify the dynamic drop down -to ', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#dest').fill('Mumbai', { delay: 1000 })
    await page.waitForSelector('.placeHolderMainText')
    let optionsCount2 = await page.locator('.placeHolderMainText').count()
    console.log(optionsCount2)//20

    for (let i = 0; i < optionsCount2; i++) {
        let resultText2 = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText2)
        if(resultText2=="Mumbai Darshan"){
            await page.locator('.placeHolderMainText').nth(i).click()
            break;
        }
    }

    await page.waitForTimeout(3000)

})


