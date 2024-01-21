const{test,expect}=require('@playwright/test')
//test case 1st
test('Verify contactus funcationality with valid data',async({page})=>{
//arrangement
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//action
    await page.locator('input[name="first_name"]').fill('Sonali')
    await page.locator('input[name="last_name"]').fill('Nimbalkar')
    await page.locator('input[name="email"]').fill('sonali17@gmail.com')
    await page.locator('textarea[name="message"]').fill('i am learn playwright')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)
//assertion
    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
})
//test case 2nd
test('Verify contactus functionality with invalid data',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Sonali')
    await page.locator('input[name="last_name"]').fill('Nimbalkar')
    await page.locator('input[name="email"]').fill('sonali17')
    await page.locator('textarea[name="message"]').fill('i am learn playwright')
    await page.locator('input[type="submit"]').click()
    await page.waitForTimeout(4000)

    await expect(page.locator('body')).toHaveText( 'Error: Invalid email address')
})

//test case 3rd
test.only('Verify reset button functionality',async([page])=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('input[name="first_name"]').fill('Sonali')
    await page.locator('input[name="last_name"]').fill('Nimbalkar')
    await page.locator('input[name="email"]').fill('sonali17')
    await page.locator('textarea[name="message"]').fill('i am learn playwright')
    await page.locator('input[type="reset"]').click()

    let firstName=await page.locator('input[name="first_name"]').inputValue()
    console.log(firstName)
    await expect(firstName).toBe('')
    await expect(firstName).toEqual('')

})