const{test,expect}=require('@playwright/test')
const assert=require('assert')
const exp=require('constants')

test('verify the dropdown functionality',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.selectOption('#dropdowm-menu-1','SQL')
    const actualV=await page.$eval('#dropdowm-menu-1',(el)=>el.value)
    assert.strictEqual(actualV,'sql')

    await page.selectOption('#dropdowm-menu-3','JavaScript')
    const actualV1=await page.$eval('#dropdowm-menu-3',(el)=>el.value)
    assert.strictEqual(actualV1,'javascript')

    const textContent=await page.$eval('h1',(el)=>el.textContent)
    console.log(textContent)//Dropdown Menu(s), Checkboxe(s) & Radio Button(s)
    assert.strictEqual(textContent,'Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')

})

test('verify the checkbox functionality',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.check('input[value=option-2]')
    await page.uncheck('input[value=option-3]')

    const check1=await page.$eval('input[value=option-2]',(el)=>el.checked)
    assert.strictEqual(check1,true)

    const check2=await page.$eval('input[value=option-3]',el=>el.checked)
    assert.strictEqual(check2,false)

    expect(await page.locator('input[value=option-4]')).not.toBeChecked()
    await page.locator('input[value=option-4]').check()
    expect(await page.locator('input[value=option-4]')).toBeChecked()

})

test.only('verify radio button funcationality',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await page.check('input[value="yellow"]')

    const radioEl=await page.$eval('input[value="yellow"]',(el)=>el.checked)
    assert.strictEqual(radioEl,true)

    const radioEl1=await page.$eval('input[value="blue"]',(el)=>el.checked)
    assert.strictEqual(radioEl1,false)

    await expect(page.locator('input[value="blue"]')).not.toBeChecked()
    await page.locator('input[value="blue"]').check()
    expect(await page.locator('input[value="blue"]')).toBeChecked()

})