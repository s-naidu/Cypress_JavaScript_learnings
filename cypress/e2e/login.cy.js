import Login from "../../cypress/PageObjects/login_page";

describe('login', () => {

    // execution of specifications
    it('login_test_case', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // create the login class object and run tests via loading json data from json file
        cy.fixture('login').then((data) => {
            const login = new Login();
            login.set_user_name(data.user_name);
            login.set_password(data.password);
            login.click_login();
            login.verify_login();
        })

    })

})