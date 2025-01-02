import LoginPage from './LoginOrangeHRM_PageObjects';

describe('Login Functionality Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        // Load the fixture data
        cy.fixture("LoginData").as('loginData');
        // Visit the login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with your app's URL
    });

    it('TC_001_Validate Login with Invalid UserName and Password', function () {
        // Use valid credentials from the fixture
        const { username } = this.loginData.invalidUser;
        const { password } = this.loginData.invalidUser;

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.errorMessage().should('contain', 'Invalid credentials');
        // Add assertion to check successful login
        // Replace with your success validation
    });

    it('TC_002_Validate Login with valid UserName and Invalid Password', function () {
        //uses valid username and invalid password
        const { username } = this.loginData.validUser;
        const { password } = this.loginData.invalidUser;

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.errorMessage().should('contain', 'Invalid credentials');

    })

    it('TC_003_Validate Login with Invalid UserName and valid Password', function () {
        const { username } = this.loginData.invalidUser;
        const { password } = this.loginData.validUser;

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.errorMessage().should('contain', 'Invalid credentials');
    })

    it('TC_004_Validate Login with Blank UserName and valid Password', function () {

        const { password } = this.loginData.validUser;

        loginPage.getUsernameInput().clear();
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.usernameRequired().should('exist');
        loginPage.passwordRequired().should('exist');
        loginPage.errorMessage().should('exist');    


    });

    it("TC_005_Validate Login with valid UserName and blank Password", function() {
        const {username} = this.loginData.validUser;

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().clear();
        loginPage.getSubmitButton().click();
        
        loginPage.passwordRequired().should('exist');
        loginPage.errorMessage().should('exist');
    })

    it('TC_006_Validate Login with blank UserName and blank Password', function() {
        loginPage.getUsernameInput().clear();
        loginPage.getPasswordInput().clear();
        loginPage.getSubmitButton().click();
       
        loginPage.usernameRequired().should('exist');
        loginPage.passwordRequired().should('exist');
    })

    it('TC_007_validate login using special characters data', function() {

        const {username, password} = this.loginData.specialCharData;

        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.errorMessage().should('contain', 'Invalid credentials');
    })

    it('TC_008_Validate login functinality using numeric data', function() {
        const {username, password} = this.loginData.numberData;
        
        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();
        loginPage.errorMessage().should('contain', 'Invalid credentials');
    })

    it('TC_009_Validate login with valid username and password', function() {
        const {username, password} = this.loginData.validUser;

        loginPage.login(username, password);
        
        loginPage.getDashboardTitle().should('exist');
    })

    it('TC_10_Validate Logut after successful login', function() {
        const {username, password} = this.loginData.validUser;
        
        loginPage.getUsernameInput().type(username);
        loginPage.getPasswordInput().type(password);
        loginPage.getSubmitButton().click();


        cy.wait(5000);
        loginPage.profilebtn().click();
        loginPage.logoutBtn().click();
    })





})
