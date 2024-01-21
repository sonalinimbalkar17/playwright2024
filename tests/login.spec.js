const{test,expect}=require('@playwright/test')

test('Verify login function in valid criterias',async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("#user-name").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("#login-button").click()
})