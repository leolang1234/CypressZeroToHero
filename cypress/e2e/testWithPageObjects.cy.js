import { onDatePickerPage } from "../support/page_objects/datepickerPage"
import { onFormLayoutPage } from "../support/page_objects/formLayoutPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"


describe('Test with Page Objects', () =>{

    beforeEach('open application', () =>{
        cy.openHomePage()
    })

    it('verify navigation across pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datePickerPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
        navigateTo.toasterPage()
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendr', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutPage.submitInlineFormWithNameAndEmail('Artem','test@test.com')
        onFormLayoutPage.submitBasicFormWithNameAndEmail('Artem','test@test.com')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerRangeFromToday(7,14)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFisrtAndLastName('Artem','bonder')
        onSmartTablePage.updateAgeByFirtsName('Artem','25')
        onSmartTablePage.deleteRowByIndex(1)

    })
})