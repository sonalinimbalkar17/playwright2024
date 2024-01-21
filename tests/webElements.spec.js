const{test,expect}=require('@playwright/test');
const { assert } = require('console');

test('click on the element',async({page})=>{

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name="first_name"]','sonali')
    await page.fill('[name="last_name"]','nimbalkar')
    await page.fill('[name="email"]','sonali@gmail.com')
    await page.fill('[name="message"]','i am learning js')
    await page.click('[type="submit"]')
    await page.waitForSelector('h1')

});

test('typing into the input element',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name="first_name"]','sonali')
    await page.fill('[name="last_name"]','nimbalkar')
    await page.fill('[name="email"]','sonali@gmail.com')
    await page.fill('[name="message"]','i am learning js')
   // await page.click('[type="submit"]')
    let aa= await page.$('[type = "submit"]')
    aa.click()
     await page.waitForSelector('h1')

});

test('clearing the input field',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"sonali");
    await page.click('[type="reset"]')
    let expectText = await page.$eval('[name= "first_name"]',x =>x.value)
    expect(expectText).toBe('')
})

test('getting the text value of element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const text=await page.$eval('h1',(el)=>el.textContent)
    assert.strictEqual(text,"Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)")

    
});
test('getting the attribute value', async ({ page }) => {

    //getAttribute('id')
    
})

