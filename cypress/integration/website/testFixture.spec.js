/// <reference types="Cypress" />

describe('Search posts', () => {
  beforeEach(() => {
    cy.fixture("/data_search").as("search");
  })
  it('should access page', () => {
    cy.visit('/')

    cy.get('h1.header.author-header')
    .contains('Adelino P Mazuti')
  })
    //need to be function for to works with fixture
  it('should do search using the first data of fixture', function() {
    cy
      .get('.menu-button').click()
      .get('i.fa.fa-search').click()
      cy.contains('Search')

    cy
      .get('input[id="search-input"]')
      .type(this.search.value1)
      cy.contains('Tests Cypress').click()
      cy.contains('Testes com cypress')
  })

  it('should do search using the second data of fixture', function() {
    cy
      .get('.menu-button').click()
      .get('i.fa.fa-search').click()
      cy.contains('Search')

    cy
      .get('input[id="search-input"]')
      .type(this.search.value2)
      cy.contains('My webpage').click()
      cy.contains('Bem vindo(a) a minha webpage!')
  })
})
