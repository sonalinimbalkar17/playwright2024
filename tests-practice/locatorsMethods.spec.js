// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

const{test,expect}=require('@playwright/test')

test('Get element by getByAltText in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele=await page.getByAltText('letcode')
    await expect(ele).toBeVisible()
})

test('Get element by getByLabel in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele=await page.getByLabel('main navigation')
    await expect(ele).toBeVisible()
})

test('Get element by getByPlaceholder in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.getByPlaceholder('First Name').fill('sonali')
})

test.only('Get element by getByRole in playwright',async({page})=>{
    await page.goto('https://letcode.in/radio')
    await page.getByRole('checkbox',{name:' I agree to the '}).check()
})