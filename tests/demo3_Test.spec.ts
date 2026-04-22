import {expect,test} from '@playwright/test'

test('Pet store',{tag:['@PlaywrightWithJenkins']},async({page})=>{
    await page.goto("https://petstore.octoperf.com/")
    await page.locator("//a[text()='Enter the Store']").click()


})