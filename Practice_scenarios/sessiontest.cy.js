import Home from "../../PageObjects/Home_page";
describe('Validate different tests in Orange HRM ', function () {
    beforeEach(function () {
        cy.session("Login session", () => {
            cy.visit("/web/index.php/auth/login")
            cy.get('input[name="username"]').type("Admin")
            cy.get('input[name="password"]').type("admin123")
            cy.get('button[type="submit"]').click()
        })
    })
    it('Validate timesheet page ', function () {
        cy.visit("/web/index.php/time/viewEmployeeTimesheet")
        homepage.click_on_time()
        homepage.verify_time_title()
    })
    it('Validate Myinfo page ', function () {
        cy.visit("/web/index.php/pim/viewMyDetails")
        homepage.click_on_myinfo_and_Verify_Title()
    })
    it('Validate Employee report ', function () {
        cy.visit("/web/index.php/time/displayEmployeeReportCriteria")
        //continue writing your script here
    })
    it.only('Attendance Total Summary Report', function () {
        cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")
        //continue writing your script here
    })
    it('Add vacancy', function () {
        cy.visit("web/index.php/recruitment/addJobVacancy")
        //continue writing your script here
    })
    it('Add Job title ', function () {
        cy.visit("/web/index.php/admin/saveJobTitle")
        //continue writing your script here
    })

    const homepage=new Home()
   
   

    
})