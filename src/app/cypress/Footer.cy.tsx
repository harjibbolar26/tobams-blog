import React from 'react'
import Footer from '@/components/common/footer'

describe('Footer Component', () => {
  beforeEach(() => {
    cy.mount(<Footer />)
  })

  it('renders logo', () => {
    cy.get('img[alt="tobams_logo"]').should('be.visible')
  })

  it('displays social media icons', () => {
    cy.get('img[alt="linkedin_logo"]').should('be.visible')
  })

  it('renders footer sections', () => {
    cy.contains('What We Do').should('be.visible')
    cy.contains('Company').should('be.visible')
  })

  it('shows copyright text', () => {
    cy.contains(/Copyright © Tobams Group\. \d{4}\. All rights reserved\./).should('be.visible')
  })
})