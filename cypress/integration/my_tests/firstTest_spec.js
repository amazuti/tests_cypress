describe('Website teste',() => {
  describe('Title', () => {
    it('should assert that author is correct', () => {
      cy.visit('https://amazuti.github.io/')

      cy.get('h1.header.author-header')
      .contains('Adelino P Mazuti')
    })
  })
  describe('Welcome Page', () => {
      it('should have click in a button menu', () => {
        cy.get('.menu-button').click()
      })
      it('should access page All Posts', () =>{
        cy.get('i.fa.fa-archive').click()
      })
      it('has title list post "Seja bem vindo ao meu webpage"', () => {
        cy.contains('Seja bem vindo')
      })
  })
})
