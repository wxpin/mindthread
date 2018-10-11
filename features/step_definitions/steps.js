/*
  @Author : Naveen Alok
  Basic example for mindthread  
*/

var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {

    Given(/^I open url "([^"]*)"$/, function (url,next) {
        this.driver.get(url);
        next();
    });

/*
    Handles textfield
*/
    When(/^I should input "([^"]*)" into "([^"]*)" textfield$/, function (strValue,strTxtName,next) {
        this.driver.findElements(By.xpath("//*[not(contains(@style,'display:none'))]")).then(function(elems){   //Get all visible elements in the webpage
            var findInput=false;
            
            elems.forEach(function (elem) {
                elem.getText().then(function(textValue){
                    if (textValue.toUpperCase() == strTxtName.toUpperCase()){     //Compare DOM value with expected field                   
                        findInput=true;     //Set flag true if mach is found
                    }           
                });
                elem.getTagName().then(function(max){  // Loop through all the elements                
                if(findInput==true ){   
                    if(max=='input' || max=='textarea' ){   //Check if expected element is found                                                     
                        elem.sendKeys(strValue).then(function(){  //Perform operation
                            findInput=false;
                            next();                            
                        });
                    
                    
                        
                    }                    
                }                
                });                                   
            });
        });
    });


    /*
        Handles radio with trailing label
    */

    Then(/^I choose radio following name "([^"]*)"$/, function (radioName, next) {
        this.driver.findElements(By.xpath("//*[not(contains(@style,'display:none'))]")).then(function(elems){   //Get all visible elements in the webpage
            var findInput=false;
            var findTag=false;            
            var radioObject  = undefined;
            elems.forEach(function (elem) {                              
                elem.getText().then(function(textValue){                                   
                    if (textValue.toUpperCase() == radioName.toUpperCase()){       //Compare DOM value with expected field  
                        findTag=true;                                              //Set flag true if mach is found  
                    }           
                });              
            elem.getAttribute("type").then(function(objectType){             // Loop through all the elements          
                    if(objectType=='radio'){                               //Check if expected element is found       
                        if(findTag==true)
                            findInput=true                        
                        radioObject = elem;      
                    }
                    if(findTag==true && findInput==true){               
                        radioObject.click().then(function(max){         //Perform operation
                            next();                            
                        });        
                    }                    
                });
            });
        });
    });

    Then(/^I choose checkbox following name "([^"]*)"$/, function (checkboxName, next) {
        this.driver.findElements(By.xpath("//*[not(contains(@style,'display:none'))]")).then(function(elems){
            var findInput=false;
            var findTag=false;
            var tempInputSet=-1;
            var checkboxObject  = undefined;
            elems.forEach(function (elem) {                              
                elem.getText().then(function(textValue){     ;                              
                    if (textValue.toUpperCase() == checkboxName.toUpperCase()){       
                        findTag=true;                                                
                    }           
                });              
            elem.getAttribute("type").then(function(objectType){                
                    if(objectType=='checkbox'){                              
                        if(findTag==true)
                            findInput=true                        
                        checkboxObject = elem;      
                    }
                    if(findTag==true && findInput==true){
                        checkboxObject.click().then(function(max){
                            next();                            
                        });        
                    }                    
                });
            });
        });
    });

    Then(/^I choose "([^"]*)" from "([^"]*)" dropdown$/, function (optionText,selectName, next) {
        this.driver.findElements(By.xpath("//*[not(contains(@style,'display:none'))]")).then(function(elems){
            var findInput=false;
            elems.forEach(function (elem) {
                elem.getText().then(function(textValue){                    
                    if (textValue.toUpperCase() == selectName.toUpperCase()){                        
                        console.log(textValue);
                        findInput=true;
                    }           
                });
                elem.getTagName().then(function(max){
                var operationComplete = false;    
                if(findInput==true ){
                    if(max=='select'){
                        elem.sendKeys(optionText).then(function(){
                            next();                            
                        });
                    }                    
                }                
                });                                   
            });
        });
    });


    Then(/^I click on "([^"]*)" button$/, function (text, next) {
        this.driver.findElements(By.xpath("//input[not(contains(@style,'display:none'))]")).then(function(elems){
            var findInput=false;
            
            elems.forEach(function (elem) {
                var webEle = elem;
                elem.getAttribute("value").then(function(textValue){
                    if (textValue.toUpperCase() == text.toUpperCase()){                        
                        findInput=true;
                        elem.click().then(function(){
                            operationComplete = true;
                            findInput=false;
                            next();                            
                        });
                    }           
                });                               
            });
        });
    });
});