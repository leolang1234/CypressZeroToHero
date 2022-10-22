
 function selectDayFromCurrent(day){
    let date = new Date()
    date.setDate(date.getDate() + day)
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('default', {month: 'short'})
    let dataAssert = futureMonth+' '+futureDay+', '+date.getFullYear()

    cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then( dateAttribute => {
        if(!dateAttribute.includes(futureMonth)){
            cy.get('[data-name="chevron-right"]').click()
            selectDayFromCurrent(day)
        }else{
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    return dataAssert
}


export class DatepickerPage{

    selectCommonDatepickerDateFromToday(dayFromToday){
        cy.contains('nb-card','Common Datepicker').find('input').then( input =>{
            cy.wrap(input).click()
            let dataAssert = selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop','value').should('contain',dataAssert)
            cy.wrap(input).should('have.value',dataAssert)

        })
    }

    selectDatepickerRangeFromToday(firstDay, secondDay){
        cy.contains('nb-card','Datepicker With Range').find('input').then( input =>{
            cy.wrap(input).click()
            let dataAssertFirst = selectDayFromCurrent(firstDay)
            let dataAssertSecond = selectDayFromCurrent(secondDay)
            const finalDate = dataAssertFirst + ' - ' + dataAssertSecond 
            cy.wrap(input).invoke('prop','value').should('contain',finalDate)
            cy.wrap(input).should('have.value',finalDate)

        })
    }


}

export const onDatePickerPage = new DatepickerPage()