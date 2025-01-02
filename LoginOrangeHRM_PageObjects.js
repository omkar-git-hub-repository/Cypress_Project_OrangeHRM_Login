class LoginPage {
    // Locators for the elements
    getUsernameInput() {
        return cy.get("input[placeholder='Username']");
    }

    getPasswordInput() {
        return cy.get("input[placeholder='Password']");
    }

    getSubmitButton() {
        return cy.get("button[type='submit']");
    }

    errorMessage() {
        return cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text");
    }

    usernameRequired() {
        return cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]");
    }

    passwordRequired() {
        return cy.get(".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message")
    }

    //dashboard page 
    getDashboardTitle() {
        return cy.xpath("//h6[normalize-space()='Dashboard']");
    }

    profilebtn() {
        return cy.get(".oxd-userdropdown-tab");
    }

    logoutBtn() {
        return cy.xpath("//a[normalize-space()='Logout']");
    }

    // Method to perform login
    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getSubmitButton().click();
        this.errorMessage();

        // Error handling for required fields
        this.usernameRequired();
        this.getPasswordInput();

        //dashboard
        this.getDashboardTitle();
        this.profilebtn().click();
        this.logoutBtn().click();;
    }
}

export default LoginPage;
