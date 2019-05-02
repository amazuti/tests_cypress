/// <reference types="Cypress" />

describe('Website teste',() => {
  describe('Title', () => {
    it('should assert that author is correct', () => {
      cy.visit('/')

      cy.get('h1.header.author-header')
      .contains('Adelino P Mazuti')
    })
  })
  describe('Welcome Page', () => {
    it('should have click in a button menu', () => {
      cy.get('.menu-button').click()
    })
    it('should access page All Posts', () => {
      cy.get('i.fa.fa-archive').click()
    })
    it('should access post "My webpage"', () => {
      cy.contains('My webpage')
      .click ()
    })
    it('has title list post "Bem vindo(a) a minha webpage!"', () => {
      cy.contains('Bem vindo(a) a minha webpage!')
    })
  })
})
