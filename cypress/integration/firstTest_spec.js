describe('Website teste',() => {
  describe('Title', () => {
    it('should assert that author is correct', () => {
      cy.visit('https://amazuti.github.io/')

      cy.get('h1.header.author-header')
      .contains('Adelino P Mazuti')
    })
  })
})
