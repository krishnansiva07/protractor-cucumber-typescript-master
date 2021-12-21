"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const searchPage_1 = require("../pages/searchPage");
const { Given } = require("cucumber");
const { When } = require("cucumber");
const { Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new searchPage_1.SearchPageObject();


When('I type user name {string} and password {string} and click on signin button', function (string, string2) {
    // Write code here that turns the phrase above into concrete actions
                      element(by.id('email')).sendKeys(string);
                      element(by.id('password')).sendKeys(string2);
                      protractor_1.browser.sleep(3000);
                      element(by.css('div#app div:nth-child(7) > button[type="button"] > span')).click();

                    console.log("I am in login page")
                    protractor_1.browser.sleep(3000);
                   // console.log(browser.getCurrentUrl());
  });

  Then('I am navigated to the User home page', function () {
    // Write code here that turns the phrase above into concrete actions
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.urlContains('https://creadoor.co.uk/search'), 5000);
  });

  

 

   