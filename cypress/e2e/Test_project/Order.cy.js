
describe("Testing the shopping cart", () => {

    it("Button test", () => {
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain", "index");
        cy.xpath("//*[@class='product_img_link']").first().click();
        cy.xpath("//*[@class='icon-plus']").click().click();
        cy.xpath("//*[@class='icon-minus']").click();
        cy.xpath("//*[@id='group_1']").select(2);
        cy.xpath("//*[@id='color_13']").click();
        cy.xpath("//*[@id='add_to_cart']").click();
        cy.wait(3000);
        cy.xpath("//*[@class='clearfix']").should('be.visible');
        cy.wait(3000);
        cy.xpath("//*[@class='continue btn btn-default button exclusive-medium']").click();
        cy.wait(3000);
        cy.xpath("//*[@id='add_to_cart']").click();
        cy.xpath("//*[@class='clearfix']").should('be.visible');
        cy.wait(100);
        cy.xpath("//*[@class='btn btn-default button button-medium']").click({ force: true });

    })
})
