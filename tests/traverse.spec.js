const { test, expect } = require('@playwright/test')
test('children elemnets', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let childrens = await page.$$('.traversal-buttons > *')
    expect(childrens.length).toBe(5)
})

test('first child', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let firstText = await page.locator('.traversal-drinks-list >li').first().innerText()
    expect(firstText).toBe('Coffee')

})

test('last child', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastText = await page.locator('.traversal-drinks-list >li').last().innerText()
    expect(lastText).toBe('Sugar')

})

test('nth:child', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let nthText = await page.locator('.traversal-drinks-list >li').nth(3).innerText()
    expect(nthText).toBe('Espresso')

})

//js using evaluate()

test('previous element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let teaEl = await page.$('#tea')
    let textFound = await teaEl.evaluate((el) => {
        let text = el.previousElementSibling.textContent
        return text
    });
    expect(textFound).toBe('Coffee')
})

test.only('next elemnet',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let teaEl=await page.$('#tea')
    let textFound=await teaEl.evaluate((el)=>{
        let text=el.nextElementSibling.textContent
        return text
    });
    expect(textFound).toBe('Milk')
})



