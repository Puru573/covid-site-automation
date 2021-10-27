let minimist =require ("minimist");
let fs =require ("fs");
let puppeteer=require("puppeteer");


let args= minimist(process.argv);

// convert json to jso for modification 
let config1json=fs.readFileSync(args.config1,"utf-8");
let config1=JSON.parse(config1json);
console.log(config1);

//browser open krenge fll screen me 
async function run(){
    let browser = await puppeteer.launch({
        headless:false,
        args: ['--start-maximized'],
        defaultViewport:null,
        
    });
    let pages= await browser.pages(); //first tab pr jayenge
    let page=pages[0];//ye first page open krane me help krega
    await page.goto (args.url);
    await page.waitFor(3000);

    // await page.waitForSelector("a.yellowloginbtn.accessibility-plugin-ac");
    // await page.click("a.yellowloginbtn.accessibility-plugin-ac");

    // await page.waitForSelector("li[aria-label='Vaccination Services']");
    // await page.click("li[aria-label='Vaccination Services']");

    // await page.waitForSelector("a[title='Register Members']");
    // await page.click("a[title='Register Members']",{delay:200});
    //  await page.waitFor(5000);
    //  await page.waitForTimeout(10000);
    // await page.waitForNavigation()
    await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-6 input#mat-input-0");
    await page.click(".mat-form-field-infix.ng-tns-c85-6 input#mat-input-0",{delay:200});
    await page.click(".mat-form-field-infix.ng-tns-c85-6 input#mat-input-0",{delay:200});
    await page.type(".mat-form-field-infix.ng-tns-c85-6 input#mat-input-0",config1.mobile_number,{delay:200});

    
    await page.waitForSelector(".covid-button-desktop.ion-text-center");
    await page.click(".covid-button-desktop.ion-text-center");
    

    await page.waitFor(25000);
    await page.waitForSelector(".covid-button-desktop.ion-text-center");
    await page.click(".covid-button-desktop.ion-text-center");
    await page.waitFor(9000);

    await page.waitForSelector(".covid-button-desktop.book-btn.ng-star-inserted")
    await page.click(".covid-button-desktop.book-btn.ng-star-inserted");
    await page.waitFor(5000);
    //click on add member

    await page.waitForSelector(".mat-select-value.ng-tns-c123-9#mat-select-value-1");
    await page.click(".mat-select-value.ng-tns-c123-9#mat-select-value-1");
    //click on adhaar card iption select krega

    await page.waitForSelector(".mat-option-text");
    await page.click(".mat-option-text");

    await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-13");
    await page.click(".mat-form-field-infix.ng-tns-c85-13");
    await page.type(".mat-form-field-infix.ng-tns-c85-13", config1.Adhaar_number,{delay:300});

    await page.waitForSelector( ".mat-form-field-infix.ng-tns-c85-10");
    await page.click( ".mat-form-field-infix.ng-tns-c85-10");
    await page.type( ".mat-form-field-infix.ng-tns-c85-10", config1.Name,{delay:300});

    await page.waitForSelector( ".mat-radio-outer-circle");
    await page.click(".mat-radio-outer-circle");

    await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-11");
    await page.click(".mat-form-field-infix.ng-tns-c85-11");
    await page.type(".mat-form-field-infix.ng-tns-c85-11", config1.DOB,{delay:300});

    await page.waitForSelector( ".covid-button-desktop.ion-text-end.button-container");
    await page.click(".covid-button-desktop.ion-text-end.button-container");
    await page.waitFor(9000);

    await page.waitForSelector(".bordernone.ng-star-inserted");
    await page.click( ".bordernone.ng-star-inserted");

    await page.waitFor(3000);

    // await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-19");
    // await page.click(".mat-form-field-infix.ng-tns-c85-19");
    // await page.type(".mat-form-field-infix.ng-tns-c85-19", config1.pin,{delay:300});
    

    await page.waitForSelector(".status-switch.accessibility-plugin-ac");
    await page.click( ".status-switch.accessibility-plugin-ac");
    await page.waitFor(2000);
    

    
    await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-15");
    await page.click( ".mat-form-field-infix.ng-tns-c85-15");
    await page.waitFor(2000);
    
    await page.waitForSelector(".mat-option.mat-focus-indicator.ng-tns-c123-16.ng-star-inserted#mat-option-18");
    await page.click(".mat-option.mat-focus-indicator.ng-tns-c123-16.ng-star-inserted#mat-option-18");
    await page.waitFor(2000);
    

    
    await page.waitForSelector(".mat-form-field-infix.ng-tns-c85-17");
    await page.click(".mat-form-field-infix.ng-tns-c85-17");
    await page.waitFor(2000);

     
    await page.waitForSelector( "mat-option.mat-focus-indicator.accessibility-plugin-ac.ng-tns-c123-18.ng-star-inserted#mat-option-47");
    await page.click( "mat-option.mat-focus-indicator.accessibility-plugin-ac.ng-tns-c123-18.ng-star-inserted#mat-option-47");
    await page.waitFor(2000);

      
    await page.waitForSelector(".ion-text-start.col-space-mobile.md.hydrated");
    await page.click(".ion-text-start.col-space-mobile.md.hydrated");
    await page.waitFor(2000);


        
    await page.waitForSelector( "#c1.chk-btn");
    await page.click( "#c1.chk-btn");
    await page.waitFor(2000);

         
    await page.waitForSelector( "#c7.chk-btn");
    await page.click( "#c7.chk-btn");
    await page.waitFor(2000);

         
    await page.waitForSelector("#c3.chk-btn");
    await page.click("#c3.chk-btn");

    await page.waitFor(2000);

         
    await page.waitForSelector( "a[aria-label='48']");
    await page.click( "a[aria-label='48']");

    await page.waitFor(3000);

         
    await page.waitForSelector(".time-slot.accessibility-plugin-ac.ng-star-inserted.md.button.button-solid.ion-activatable.ion-focusable.hydrated") ;
    await page.click(".time-slot.accessibility-plugin-ac.ng-star-inserted.md.button.button-solid.ion-activatable.ion-focusable.hydrated");

    await page.waitFor(2000);

         
    await page.waitForSelector(".register-btn.vac-btn.new-app.confirm-btn.accessibility-plugin-ac.ng-star-inserted.md.button.button-solid.ion-activatable.ion-focusable.hydrated");
    await page.click(".register-btn.vac-btn.new-app.confirm-btn.accessibility-plugin-ac.ng-star-inserted.md.button.button-solid.ion-activatable.ion-focusable.hydrated" );

    
    await page.waitFor(8000);

         
    await page.waitForSelector( ".register-btn.vac-btn.close-btn.new-app.accessibility-plugin-ac.ng-star-inserted.ion-color.ion-color-primary.md.button.button-solid.ion-activatable.ion-focusable.hydrated");
    await page.click(".register-btn.vac-btn.close-btn.new-app.accessibility-plugin-ac.ng-star-inserted.ion-color.ion-color-primary.md.button.button-solid.ion-activatable.ion-focusable.hydrated" );




    

    

   
   
    
    
    
    
   
   
    
   
    
    
    
  


 


}
run();