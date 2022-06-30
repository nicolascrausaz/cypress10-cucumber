// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I test a custom command",() =>{
    cy.clickOnTeamMemberLink('Team Member Name');
})

When("I visit duckduckgo.com", () => {
    cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
    cy.get("input").should(
        "have.attr",
        "placeholder",
        "Search the web without being tracked"
    );
});

