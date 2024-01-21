const { test, expect } = require('@playwright/test')

test('verify locators methods assertions in playwright', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

    // find singal element with $
    let firstN = await page.$('input[name="first_name"]')
    await expect(firstN).not.toBeNull()

    //find singal element with locator
    let firstN1 = await page.locator('input[name="first_name"]')
    await expect(firstN1).toBeVisible()
    await expect(firstN1).toHaveCount(1)

    //find multiple elements with $$
    let multipleEl = await page.$$('input[type="text"]')
    await expect(multipleEl.length).toBe(3)

    //find multiple elements with locator
    let multipleEl1 = await page.locator('input[type="text"]').count()
    await expect(multipleEl1).toBe(3)
    await expect(multipleEl1).toEqual(3)

    let multipleEl2 = await page.locator('input[type="text"]')
    await expect(multipleEl2).toHaveCount(3)


    //find multiple elements by className(.)
    let classNameEl = await page.$$('.feedback-input')
    await expect(classNameEl.length).toBe(4)

    let classNameEl1 = await page.locator('.feedback-input')
    await expect(classNameEl1).toHaveCount(4)

    //find element by id(#)
    let byid = await page.$('#contact_form')
    await expect(byid).not.toBeNull()

    let byid1 = await page.locator('#contact_form')
    await expect(byid1).toBeVisible()
    await expect(byid1).toHaveCount(1)

    //find element by cssSelector (tagName[attribute = "value"])
    let bycssSelector = await page.$('input[name="first_name"]')
     await expect(bycssSelector).not.toBeNull()

     let bycssSelector1 = await page.locator('input[name="first_name"]')
     await expect(bycssSelector1).toBeVisible()


    //find element by tagName
    let byTagName = await page.locator('h2')
    await expect(byTagName).not.toBeNull()

    //find element by name
    let byname = await page.locator('first_name')
    await expect(byname).not.toBeNull()

})