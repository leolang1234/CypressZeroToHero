/// <reference types="cypress"/>


export class FromLayoutPage{
    submitInlineFormWithNameAndEmail(name,email){
        cy.contains('nb-card','Inline form').find('form').then( form =>{
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }

    submitBasicFormWithNameAndEmail(name,email){
        cy.contains('nb-card','Basic form').find('form').then( form =>{
            cy.wrap(form).find('[placeholder="Email"]').type(name)
            cy.wrap(form).find('[placeholder="Password"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').check({force: true})
            cy.wrap(form).submit()
        })
    }
    


}

export const onFormLayoutPage = new FromLayoutPage()

