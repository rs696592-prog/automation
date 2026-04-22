import {expect,test} from '@playwright/test'

test('Login',{tag:['@PlaywrightWithJenkins']},async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator("//a[text()='Log in']").click();
    await page.locator("#Email").fill("sample100@test.com")
    await page.locator("#Password").fill("M12345")
    await page.locator("//input[@value='Log in']").click()



})