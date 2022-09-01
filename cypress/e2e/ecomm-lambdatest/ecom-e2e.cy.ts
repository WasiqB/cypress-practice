import { faker } from "@faker-js/faker";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  newsletter?: boolean;
};

context("Verify E-Commerce app user journey", () => {
  let user: User;
  before(() => {
    user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      telephone: faker.phone.number(),
      newsletter: false,
      password: faker.internet.password(),
    };
    cy.log(JSON.stringify(user));
  });
  it("Register User", () => {
    cy.visit("/");
    cy.get('a:contains("My account")').last().trigger("mouseover");
    cy.get('a:contains("Register")').click();

    cy.get("#input-firstname").type(user.firstName);
    cy.get("#input-lastname").type(user.lastName);
    cy.get("#input-email").type(user.email);
    cy.get("#input-telephone").type(user.telephone);
    cy.get("#input-password").type(user.password);
    cy.get("#input-confirm").type(user.password);
    cy.get(".float-right > .custom-control > .custom-control-label").click();
    cy.get('input[type="submit"]').click();

    cy.get(".page-title").should(
      "have.text",
      " Your Account Has Been Created!"
    );
  });
});
