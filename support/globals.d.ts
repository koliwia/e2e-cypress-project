
declare namespace Cypress {
    interface Chainable<Subject> {
        getElement(attribute: string, attribute: string): Cypress.Chainable<Subject>;
        getElementByName(value: string): Cypress.Chainable<Subject>;
        getElementByType(value: string): Cypress.Chainable<Subject>;
        getButtonByType(value: string): Cypress.Chainable<Subject>;
        GenerateUsername(value: string): Cypress.Chainable<Subject>;
        GenerateEmail(value: string): Cypress.Chainable<Subject>;
        GenerateFalseUsername(value: string): Cypress.Chainable<Subject>;
        GenerateFalseEmail(value: string): Cypress.Chainable<Subject>;
        GenerateFalsePassword(value: string): Cypress.Chainable<Subject>;
        SubmitButton(value: string): Cypress.Chainable<Subject>;
    }
}
