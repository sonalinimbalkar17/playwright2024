const { test, expect } = require('@playwright/test')

test('verify locator methods assertion in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //find single element
    let firstN = await page.$('input[name="first_name"]')
    await expect(firstN).not.toBeNull()
    //await expect(firstN).toBeVisible()

    let firstN2 = await page.locator('input[name="first_name"]')
    await expect(firstN2).toBeVisible()
    await expect(firstN2).toHaveCount(1)

    //find multiple element
    let mulEl = await page.$$('input[type="text"]')
    await expect(mulEl.length).toBe(3)

    let mulEl1 = await page.locator('input[type="text"]').count()
    await expect(mulEl1).toBe(3)
    await expect(mulEl1).toEqual(3)

    let mulEl2 = await page.locator('input[type="text"]')
    await expect(mulEl2).toHaveCount(3)

    //find element by class name
    let elByClass = await page.$$('.feedback-input')
    await expect(elByClass.length).toBe(4)

    let elByClass1 = await page.locator('.feedback-input').count()
    await expect(elByClass1).toBe(4)
    await expect(elByClass1).toEqual(4)

    //Find element by id 
    let elByid = await page.$('#contact_me')
    await expect(elByid).not.toBeNull()

    let elByid1 = await page.locator('#contact_me')
    await expect(elByid1).toBeVisible()
    await expect(elByid1).toHaveCount(1)

    //find element by CSS selector
    let elBySelector = await page.$('input[name="first_name"]')
    await expect(elBySelector).not.toBeNull()

    let elBySelector1 = await page.locator('input[name="first_name"]')
    await expect(elBySelector1).toBeVisible()

    //find element by tag name
    let elByTagN = await page.$('h2')
    await expect(elByTagN).not.toBeNull()

    let elByTagN1 = await page.locator('h2')
    await expect(elByTagN1).toBeVisible()










})