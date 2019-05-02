import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://amazuti.github.io/'

Given('I open my webpage', () => {
  cy.visit (url)
})

Then('I see {string} in the title', (title) => {
  cy.title().should('include', title)
})
