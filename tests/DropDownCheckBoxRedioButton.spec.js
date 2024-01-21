const { test, expect } = require('@playwright/test')
const assert = require('assert');

test('drop down', async ({ page }) => {
    //arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //action
    await page.selectOption('#dropdowm-menu-1', 'Python')
    //assertion
    const actualValue = await page.$eval("#dropdowm-menu-1", (el) => el.value);
    assert.strictEqual(actualValue, "python")

    await page.selectOption('#dropdowm-menu-2', 'Maven')
    const actualValue2 = await page.$eval("#dropdowm-menu-2", (el) => el.value);
    assert.strictEqual(actualValue2, "maven")

    await page.selectOption("#dropdowm-menu-3", 'JavaScript')
    const actualValue3 = await page.$eval(" #dropdowm-menu-3", (el) => el.value);
    assert.strictEqual(actualValue3, "javascript")
})

test('check box', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    await page.check('input[value="option-2"]')
    const aa = await page.$eval('input[value="option-2"]', (el) => el.checked)
    assert.strictEqual(aa, true)

    await page.uncheck('input[value="option-3"]')
    const bb = await page.$eval('input[value="option-3"]', (el) => el.checked)
    assert.strictEqual(bb, false)
})

test('redio button', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    await page.check('input[value="purple"]')
    const cc = await page.$eval('input[value="purple"]', (el) => el.checked)
    assert.strictEqual(cc, true)

    await page.uncheck('input[value="yellow"]')
    const dd = await page.$eval('input[value="yellow"]', (el) => el.checked)
    assert.strictEqual(dd, false)


})
