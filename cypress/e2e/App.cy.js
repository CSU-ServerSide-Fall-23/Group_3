
describe('Navigation Bar', () => {
  beforeEach(() => {
    cy.visit('https://wondrous-crepe-3dfb3a.netlify.app/')
  })

  it('should navigate to Natural Disaster Tracker', () => {
    cy.get('.nav-link[href="https://wondrous-crepe-3dfb3a.netlify.app/"]').click()
  })

  it('should navigate to TrackMe', () => {
    cy.get('.nav-link[href="https://github.com/CSU-ServerSide-Fall-23/Group_3"]').click()
  })

  it('should navigate to NASA APIs', () => {
    cy.get('.nav-link[href="https://api.nasa.gov/"]').click()
  })

  it('should navigate to EONET API', () => {
    cy.get('.nav-link[href="https://eonet.gsfc.nasa.gov/docs/v3"]').click()
  })
})

describe('Loader Component', () => {
  beforeEach(() => {
    cy.visit('https://wondrous-crepe-3dfb3a.netlify.app/') 
  })

  it('should render the loader component', () => {
    cy.get('.loader').should('exist')
    cy.get('.loader h1').should('contain', 'Loading...')
  })

  it('should display the loading icon', () => {
    cy.get('.loader img').should('exist')
    cy.get('.loader img').should('have.attr', 'alt', 'Loading icon')
  })
})

describe('Map Components', () => {
  beforeEach(() => {
    cy.visit('https://wondrous-crepe-3dfb3a.netlify.app/') 
  })
  it('should interact with MapButtons', () => {
    cy.get('.map-buttons').should('exist')
    cy.get('.toggle-volcano-markers').click()
    cy.get('.toggle-storm-markers').click()
    cy.get('.toggle-wildfire-markers').click()
  })

})
