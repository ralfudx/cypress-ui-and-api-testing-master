import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../page_objects/home.page-object";
import { ComponentsPage } from "../page_objects/components.page-object";

const homePage = new HomePage();
const componentsPage = new ComponentsPage();

Given(/^user is on the homepage$/, () => {
    cy.visit("");
});

And(/^user navigates to "(.+)"$/, (cardName: string) => {
    homePage.clickHomePageCard(cardName);
});

And(/^taps on Web Tables from the side menu$/, () => {
    componentsPage.clickWebTablesMenu();
});

And(/^taps on Broken Links-Images from the side menu$/, () => {
    componentsPage.clickBrokenLinksMenu();
});

And(/^taps on Practice Form from the side menu$/, () => {
    componentsPage.clickPracticeFormMenu();
});

And(/^taps on Progress Bar from the side menu$/, () => {
    componentsPage.clickProgressBarMenu();
});

And(/^taps on Tool Tips from the side menu$/, () => {
    componentsPage.clickToolTipsMenu();
});

And(/^taps on Droppable from the side menu$/, () => {
    componentsPage.clickDroppableMenu();
});

And(/^user taps on Add button$/, () => {
    componentsPage.clickAddButton();
});

When(/^user enters registration data into the input field$/, () => {
    componentsPage.enterRegistrationData(); 
});

And(/^user taps on Submit button$/, () => {
    componentsPage.clickSubmitButton();
});

And(/^a new row should be created in the table with all the provided data$/, () => {
    componentsPage.verifyNewRowDetails();
});

And(/^user taps on the edit icon in the second row of the table$/, () => {
    componentsPage.clickSecondEditIcon();
});

When(/^user edits the field (.+) to (.+)$/, (firstName: string, text: string) => {
    componentsPage.modifyUserDetails(firstName, text);
});

And(/^user edits the field (.+) to (.+)$/, (lastName: string, text: string) => {
    componentsPage.modifyUserDetails(lastName, text);
});

Then(/^the edited (.+) and (.+) should be displayed on the second row$/, (firstName: string, lastName: string) => {
    componentsPage.verifyUserDetails(firstName, lastName);
});

Then(/^user should verify that the first image is broken$/, () => {
    componentsPage.verifyBrokenImage();
});

When(/^user taps on Start button$/, () => {
    componentsPage.clickStartButton();
});

Then(/^user should verify that the progress bar is 100 percent$/, () => {
    componentsPage.verifyProgressBarPercentage();
});

And(/^user should verify that the progress bar is Green$/, () => {
    componentsPage.verifyProgressBarColor();
});

When(/^user hovers over the 'Hover me to see' button$/, () => {
    componentsPage.hoverOverButton();
});

Then(/^user should verify that 'You hovered over the Button' text is displayed$/, () => {
    componentsPage.verifyToolTipTextIsDisplayed();
});

When(/^user drags the 'Drag me' box to the 'Drop Here' area$/, () => {
    componentsPage.dragBoxAndDrop();
});

Then(/^user should verify that the 'Drag me' box is successfully dropped in the 'Drop Here' area$/, () => {
    componentsPage.verifyBoxIsDropped();
});

When(/^user enters all details into the input fields$/, () => {
    componentsPage.enterFormDetails();
});

Then(/^user should verify that the form is submitted successfully with the provided data$/, () => {
    componentsPage.verifyFormDetails();
});

And(/^user closes the window$/, () => {
    componentsPage.clickCloseButton();
});