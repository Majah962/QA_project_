
describe("Testing registration", () => {

    it("Registration test", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        cy.get("a[title='Log in to your customer account']").first().click();
        cy.get("#email_create").type('ivan3862@gmail.com');
        cy.get("#SubmitCreate").click();

        cy.wait(3000);
        //cy.get("#id_gender1").click();  id_gender1--> musko, id_gender2-->zensko
        cy.get("#customer_firstname").type('ivan');
        cy.get("#customer_lastname").type('Ivić');
        cy.get("#passwd").type('12345');
        cy.get("#days").select(12);
        cy.get("#months").select(6);
        cy.get("#years").select("2009");
        cy.get("#company").type('xxx');
        cy.get("#address1").type('Adresa11');
        cy.get("#city").type('Zagreb');
        cy.get("#id_state").select(2);
        cy.get("#postcode").type('00000');
        cy.get("#phone_mobile").type('0987896784');
        cy.get("#submitAccount").click();
        //SUCCESSFUL REGISTRATION
    })
})

