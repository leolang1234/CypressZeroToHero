/// <reference types="cypress"/>

describe('Test with backend', () => {

    beforeEach('login to the app', () => {
        cy.intercept('GET','https://api.realworld.io/api/tags',{fixture: 'tags.json'})
        cy.loginToTheApplication()
    })

    it('verify correct request and response', () => {

        cy.intercept('POST','https://api.realworld.io/api/articles').as('postArticles')
        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is the title 123')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a body of the article')
        cy.contains('Publish Article').click()

        cy.wait('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.article.body).to.equal('This is a body of the article')
            expect(xhr.response.body.article.description).to.equal('This is a description')
        })
    })

    it.only('verify popular tags are displied', () => {
        cy.log('we logged in')
        cy.get('.tag-list')
        .should('contain','cypress')
        .should('contain','automation')
        .should('contain','testing')
    })


})