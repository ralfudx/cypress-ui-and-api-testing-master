
export class ComponentsPage {

    getRegData(): string[] {
        return ["Alden", "Cantrell", "test@test.com", "30", "12345", "QA"];
    }

    getFormData(): string[] {
        return ["Gerimedica", "BV", "test@test.com", "0123456789", "Cypress Assignment", "Netherlands", "NCR", "Delhi"];
    }

    getWebTablesMenu(): string {
        return ".element-group:nth-child(1)>div>ul>li:nth-child(4)";
    }

    getBrokenLinksMenu(): string {
        return ".element-group:nth-child(1)>div>ul>li:nth-child(7)";
    }

    getPracticeFormMenu(): string {
        return ".element-group:nth-child(2)>div>ul>li";
    }

    getProgressBarMenu(): string {
        return ".element-group:nth-child(4)>div>ul>li:nth-child(5)";
    }

    getToolTipsMenu(): string {
        return ".element-group:nth-child(4)>div>ul>li:nth-child(7)";
    }

    getDroppableMenu(): string {
        return ".element-group:nth-child(5)>div>ul>li:nth-child(4)";
    }

    getAddButton(): string {
        return "#addNewRecordButton";
    }

    getSubmitButton(): string {
        return "#submit";
    }

    getCloseButton(): string {
        return "#closeLargeModal";
    }

    getFirstNameInputField(): string {
        return "#firstName";
    }

    getLastNameInputField(): string {
        return "#lastName";
    }

    getEmailInputField(): string {
        return "#userEmail";
    }

    getAgeInputField(): string {
        return "#age";
    }

    getSalaryInputField(): string {
        return "#salary";
    }

    getDepartmentInputField(): string {
        return "#department";
    }

    getMaleGenderRadioButton(): string {
        return "#gender-radio-1";
    }

    getMobileInputField(): string {
        return "#userNumber";
    }

    getDateOfBirthInputField(): string {
        return "#dateOfBirthInput";
    }

    getSubjectsInputField(): string {
        return ".subjects-auto-complete__value-container";
    }

    getReadingHobbiesCheckbox(): string {
        return "#hobbies-checkbox-2";
    }

    getPictureFileUpload(): string {
        return "#uploadPicture";
    }

    getCurrentAdrressTextArea(): string {
        return "#currentAddress";
    }

    getStateDropdown(): string {
        return "#react-select-3-input";
    }

    getCityDropdown(): string {
        return "#react-select-4-input";
    }

    getSecondEditIcon(): string {
        return "#edit-record-2";
    }

    getSecondRowFirstName(): string {
        return ".rt-tbody>div:nth-child(2)>div>div:nth-child(1)";
    }

    getSecondRowLastName(): string {
        return ".rt-tbody>div:nth-child(2)>div>div:nth-child(2)";
    }

    getUsersSecondRow(): string {
        return ".rt-tr-group:nth-child(2)"
    }

    getUsersFourthRow(): string {
        return ".rt-tr-group:nth-child(4)"
    }

    getBrokenImage(): string {
        return "img[src='/images/Toolsqa_1.jpg']";
    }

    getStartButton(): string {
        return "#startStopButton";
    }

    getProgressBar(): string {
        return ".progress-bar";
    }

    getToolTipButton(): string {
        return "#toolTipButton";
    }

    getDraggableBox(): string {
        return "#draggable";
    }

    getDroppableBox(): string {
        return "#droppable";
    }

    getDaysPicker(): string {
        return ".react-datepicker__month";
    }

    getMonthSelectPicker(): string {
        return ".react-datepicker__month-select";
    }

    getYearSelectPicker(): string {
        return ".react-datepicker__year-select";
    }

    getFormModal(): string {
        return ".modal-body";
    }

    clickWebTablesMenu() {
        cy.get(this.getWebTablesMenu())
        .should("be.visible")
        .click();
    }

    clickBrokenLinksMenu () {
        cy.get(this.getBrokenLinksMenu())
        .should("be.visible")
        .click();
    }

    clickPracticeFormMenu () {
        cy.get(this.getPracticeFormMenu())
        .should("be.visible")
        .click();
    }

    clickProgressBarMenu () {
        cy.get(this.getProgressBarMenu())
        .should("be.visible")
        .click();
    }

    clickToolTipsMenu () {
        cy.get(this.getToolTipsMenu())
        .should("be.visible")
        .click();
    }

    clickDroppableMenu () {
        cy.get(this.getDroppableMenu())
        .should("be.visible")
        .click();
    }

    clickAddButton () {
        cy.get(this.getAddButton())
        .should("be.visible")
        .click();
    }

    clickSubmitButton () {
        cy.get(this.getSubmitButton())
        .should("be.visible")
        .click({force: true});
    }

    clickStartButton () {
        cy.get(this.getStartButton())
        .should("be.visible")
        .click();
    }

    hoverOverButton () {
        cy.get(this.getToolTipButton())
        .should("be.visible")
        .realHover({pointer: "mouse"});
    }

    dragBoxAndDrop () {
        cy.get(this.getDraggableBox()).then(($box) => {
            cy.wrap($box.position().top).as("boxTopPosition");
            cy.wrap($box.position().left).as("boxLeftPosition");
        });
        cy.get(this.getDraggableBox()).drag(this.getDroppableBox(), {force: true});
    }

    clickCloseButton () {
        cy.get(this.getCloseButton())
        .scrollIntoView()
        .click({force: true});
    }

    enterRegistrationData () {
        this.enterBasicDetails(this.getRegData()[0], this.getRegData()[1], this.getRegData()[2]);
      
        cy.get(this.getAgeInputField())
        .should("be.visible")
        .type(this.getRegData()[3])
        .get(this.getSalaryInputField())
        .should("be.visible")
        .type(this.getRegData()[4])
        .get(this.getDepartmentInputField())
        .should("be.visible")
        .type(this.getRegData()[5]);
    }

    enterFormDetails () {
        this.enterBasicDetails(this.getFormData()[0], this.getFormData()[1], this.getFormData()[2]);

        cy.get(this.getMaleGenderRadioButton())
        .click({force: true})
        .get(this.getMobileInputField())
        .should("be.visible")
        .type(this.getFormData()[3]);

        this.selectDate('15', "January", "1990");

        cy.get(this.getSubjectsInputField())
        .should("be.visible")
        .find('input')
        .type(this.getFormData()[4], {force: true})

        .get(this.getReadingHobbiesCheckbox())
        .click({force: true})
        .get(this.getPictureFileUpload())
        .attachFile('passport_photo.jpeg')
        .get(this.getCurrentAdrressTextArea())
        .should("be.visible")
        .type(this.getFormData()[5]);

        this.enterTextIntoField(this.getStateDropdown(), this.getFormData()[6]);
        this.enterTextIntoField(this.getCityDropdown(), this.getFormData()[7]);
    }

    enterBasicDetails (firstName: string, lastName: string, email: string) {
        cy.get(this.getFirstNameInputField())
        .should("be.visible")
        .type(firstName)
        .get(this.getLastNameInputField())
        .should("be.visible")
        .type(lastName)
        .get(this.getEmailInputField())
        .should("be.visible")
        .type(email);
    }

    selectDate (day: string, month: string, year: string) {
        cy.get(this.getDateOfBirthInputField())
        .should("be.visible")
        .click()
        .get(this.getMonthSelectPicker())
        .should("be.visible")
        .select(month)
        .get(this.getYearSelectPicker())
        .should("be.visible")
        .select(year)
        cy.get(this.getDaysPicker())
        .contains(day)
        .click();
    }

    enterTextIntoField (element: string, text: string) {
        cy.get(element)
        .should("be.visible")
        .type(text, {force: true})
        .type("{enter}");
    }


    clickSecondEditIcon () {
        cy.get(this.getSecondEditIcon())
        .should("be.visible")
        .click();
    }

    modifyUserDetails (fieldName: string, text: string) {
        if (fieldName.toLowerCase().includes("first")) {
            cy.get(this.getFirstNameInputField())
            .should("be.visible")
            .clear()
            .type(text);
        }else if (fieldName.toLowerCase().includes("last")) {
            cy.get(this.getLastNameInputField())
            .should("be.visible")
            .clear()
            .type(text);
        }else {
            cy.log(
                "Implementation to be added when needed"
              );
        }
    }

    verifyNewRowDetails () {
        cy.get(this.getUsersFourthRow())
        .should("be.visible")
        .should(($text) => {
            this.getRegData().forEach(regData => {
                expect($text).to.contain(regData);
            });
        });
    }

    verifyUserDetails (firstName: string, lastName: string) {
        cy.get(this.getSecondRowFirstName())
        .should("be.visible")
        .invoke("text").then(actualFirstNameText => {
        expect(actualFirstNameText).to.eql(firstName);
        });
        cy.get(this.getSecondRowLastName())
        .should("be.visible")
        .invoke("text").then(actualLastNameText => {
            expect(actualLastNameText).to.eql(lastName);
        });
    }

    verifyBrokenImage () {
        cy.get(this.getBrokenImage())
        .should("be.visible")
        .and($img => expect($img[0].clientWidth).to.be.lt(20))
    }

    verifyProgressBarPercentage () {
        cy.waitUntil(() => cy.get(this.getProgressBar())
        .invoke("attr", "aria-valuenow").then(progressBarValue => progressBarValue === "100"), {
            errorMsg: "Unable to wait for progress bar to get to 100%",
            timeout: 20000,
            interval: 1000
        });
        cy.get(this.getProgressBar())
        .invoke("text").then(progressBarValueText => {
            expect(progressBarValueText).to.equal("100%");
        });
    }

    verifyProgressBarColor () {
        cy.get(this.getProgressBar())
        .should("be.visible")
        .invoke("css", "background-color").then(progressBarColor => {
            expect(progressBarColor).to.eq("rgb(40, 167, 69)");
        });
    }

    verifyToolTipTextIsDisplayed () {
        cy.get(this.getToolTipButton())
        .should("be.visible")
    }

    verifyBoxIsDropped () {
        cy.get("@boxTopPosition").then($top => {
            cy.get("@boxLeftPosition").then($left => {
                cy.get(this.getDraggableBox()).then(($box) => {
                    expect($box.position().top).to.be.not.eq($top);
                    expect($box.position().left).to.be.not.eq($left);
                });
            });
        });
    }

    verifyFormDetails () {
        cy.get(this.getFormModal())
        .should("be.visible")
        .should(($text) => {
            this.getFormData().forEach(formData => {
                if (formData != this.getFormData()[4])
                expect($text).to.contain(formData);
            });
        });
    }

}
