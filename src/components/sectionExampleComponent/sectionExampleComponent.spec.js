import "./sectionExampleComponent.js";

describe('SectionComponent', ()=> {

    it('renders the component and sets the params', ()=>{

        const name = 'nameSection'
        const description = 'description'
     
        const section = document.createElement('section-example-component')
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        document.body.append(section)
        
        
       expect(section.querySelector('h2').textContent).toEqual('The hardcoded subtitle')
       expect(section.querySelector('h1').textContent).toEqual(name)
       expect(section.querySelector('p').textContent).toEqual(description)

    })
})