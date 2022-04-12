import { WatchDirectoryFlags } from 'typescript';
import fixture from '../fixtures/testdata.json';

describe('User login', () => {
    beforeEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        cy.viewport(1920, 1080);
    });

    it('should log in the user with an active account', () => {
        cy.visit('/')
            .getElement('nav', 'login')
            .click()
            .getElement('link', 'register')
            .click()
            .getElementByName('given-name')
            .click()
            .type('YournName')
            .getElementByName('email')
            .click()
            .type('youremail@gmail.com')
            .getElementByName('email')
            .click()
            .getElementByName('password')
            .type('YourPassword')
            .getElement('register', 'tos')
            .click()
            .getButtonByType('submit')
            .should('be.enabled')
            .click()
            .getElement('nav', 'login')
            .click()
            .getElementByName('email')
            .click()
            .type('youremail@gmail.com')
            .blur()
            .getElement('input-icon', 'success')
            .getElementByName('password')
            .type('YourPassword')
            .blur()
            .getElement('input-icon', 'success')
            .getButtonByType('submit')
            .click()
            .getElement('nav-item', 'profile')
            .click()
            .getElement('profile-box', 'displayname')
            .getElement('profile-box', 'email');
    });
    it('should log in the user through oauth', () => {
        cy.visit('/')
            .getElement('nav', 'login')
            .click()
            .get('button[data-t-oauth="google"]')
            .click()
            .get('button[data-t-oauth="fb"]')
            .click()
            .get('button[data-t-oauth="tg"]')
            .click()
            .get('[data-t-oauth="discord"]')
            .invoke('removeAttr', 'target')
            .click();
    });
    it('should reset user\'s password', () => {
        cy.visit('/')
            .getElement('nav', 'login')
            .click()
            .getElement('link', 'resetpwd')
            .click()
            .window()
            .contains('Resetowanie hasła')
            .getElementByName('email')
            .click()
            .type('youremail@gmail.com')
            .getButtonByType('submit')
            .click()
            .visit('http://mail.animu.local.me/#/')
            .window()
            .contains('Resetowanie hasła')
            .click()
            .get('iframe')
            .its('0.contentDocument.body')
            .should('contain', 'Możesz zmienić hasło klikając');
    });
    it('should not log in an inactive user', () => {
        cy.visit('/')
            .getElement('nav', 'login')
            .click()
            .getElementByName('email')
            .click()
            .type('wrongemail@gmail.com')
            .blur()
            .getElement('input-icon', 'error')
            .getElementByName('password')
            .type('WrongPassword')
            .blur()
            .getButtonByType('submit')
            .should('be.disabled');
    });
});
