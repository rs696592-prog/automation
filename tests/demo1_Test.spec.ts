import {expect,test} from '@playwright/test'

test('OpenURL',{tag:['@PlaywrightWithJenkins']},async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")

})