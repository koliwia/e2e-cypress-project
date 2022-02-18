import { randomString } from '../utils/randomString';

Cypress.Commands.add('getElement', (attribute, value) => cy.get(`[data-t-${attribute}="${value}"]`));
Cypress.Commands.add('getElementByName', (name) => cy.get(`input[name="${name}"]`));
Cypress.Commands.add('getElementByType', (type) => cy.get(`input[type="${type}"]`));
Cypress.Commands.add('getButtonByType', (type) => cy.get(`button[type="${type}"]`));
Cypress.Commands.add('GenerateUsername', () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    cy.getElementByName('given-name').click().type(randomString(10))
        .as('GenUsername')
        .invoke('val')
        .as('UsernameId')
        .get('@GenUsername');
});

Cypress.Commands.add('GenerateEmail', () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    cy.getElementByName('email').click().type(`${randomString(15)}@gmail.com`);
});

Cypress.Commands.add('GenerateFalseUsername', () => {
    cy.getElementByName('given-name').click().type(randomString(2));
});

Cypress.Commands.add('GenerateFalseEmail', () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    cy.getElementByName('email').click().type(`${randomString(4)}@.com`);
});

Cypress.Commands.add('GenerateFalsePassword', () => {
    cy.getElementByName('password').click().type(randomString(2));
});
