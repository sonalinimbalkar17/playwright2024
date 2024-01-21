const { test, expect } = require('@playwright/test')
const { subscribe } = require('diagnostics_channel')

test('click on the element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('sonali')
    await page.locator('input[name="last_name"]').fill('nimbalkar')
    await page.locator('input[name="email"]').fill('sonali12@gmail.com')
    await page.locator('textarea[name="message"]').fill('i am learning js')
    await page.locator('input[type="submit"]').click()

    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

test('type into input field', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('input[name="first_name"]', 'sonali')
    await page.fill('input[name="last_name"]', 'nimbalkar')
    await page.fill('input[name="email"]', 'sonal12i@gmail.com')
    await page.fill('textarea[name="message"]', 'learn javascript')
    let submitBtn = await page.locator('input[type="submit"]')
    submitBtn.click()
    //await page.waitForTimeout(4000)

    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})

test.only('clearing the input field', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('input[name="first_name"]', 'sonali')
    await page.fill('input[name="last_name"]', 'nimbalkar')
    await page.locator('input[type="reset"]').click()

    let firstNField = await page.$eval('input[name="first_name"]', x => x.value)
    expect(firstNField).toBe('')

    let lastNField=await page.locator('input[name="last_name"]').inputValue()
    expect(lastNField).toBe('')
    

})






