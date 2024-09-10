class Login {

    // define the data variables for using outside the class
    user_name = "input[name='username']";
    password = "input[placeholder='Password']";
    login_button = "button[type='submit']";
    login_assertion_url = '/dashboard'; // verification that login successful

    /* define functions for setting the values  */
    set_user_name(user_name){
        cy.get(this.user_name).type(user_name);
    }
    set_password(password){
        cy.get(this.password).type(password);
    }
    click_login(){
        cy.get(this.login_button).click();
    }
    verify_login(){
        cy.url().should ('include', '/dashboard');
    }
    verify_login_from_fixctre(){
        cy.url().should ('include', '/dashboard');
    }

}
// export the class for access 
export default Login