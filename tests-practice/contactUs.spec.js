const { test, expect } = require('@playwright/test')

test('verify contact-us funcationality', async ({ page }) => {
    //arrangement
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    await page.locator('input[name="first_name"]').fill('sonali')
    await page.locator('input[name="last_name"]').fill('nimbalkar')
    await page.locator('input[name="email"]').fill('sonali12@gmail.com')
    await page.locator('textarea[name="message"]').fill('Welcome javascript')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    // assertion
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')

})

test('verify contact-us funcationality with invalid email', async ({ page }) => {
    //arrangement
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    await page.locator('input[name="first_name"]').fill('sonali')
    await page.locator('input[name="last_name"]').fill('nimbalkar')
    await page.locator('input[name="email"]').fill('sonali12')
    await page.locator('textarea[name="message"]').fill('Welcome javascript')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
    //assertion
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toHaveText(' Error: Invalid email address')
})

test.only('verify reset contact-us funcationality ', async ({ page }) => {
    //arrangement
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //action
    await page.locator('input[name="first_name"]').fill('sonali')
    await page.locator('input[name="last_name"]').fill('nimbalkar')
    await page.locator('input[name="email"]').fill('sonali12@gmail.com')
    await page.locator('textarea[name="message"]').fill('Welcome javascript')
    await page.locator('input[type="reset"]').click()
    
    const firstNamefield=await page.locator('input[name="first_name"]').inputValue()
    console.log(firstNamefield)
    // assertion
    await expect(firstNamefield).toBe('')
    await expect(firstNamefield).toEqual('')
    
})