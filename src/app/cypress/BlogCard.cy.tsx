import React from 'react'
import BlogCard from '@/components/common/blogCard'
import { IBlogPost } from '@/app/utils/types'

const mockBlog: IBlogPost = {
  id: 1,
  title: 'Test Blog Post',
  description: 'This is a test blog description',
  cover_image: '/hero.jpg',
  tags: 'Technology',
  slug: 'test-blog',
  created_at: '2023-01-01T00:00:00Z',
  reading_time_minutes: 5,
  tag_list: ['Technology']
}

describe('BlogCard Component', () => {
  beforeEach(() => {
    cy.mount(<BlogCard blog={mockBlog} />)
  })

  it('renders blog card with correct information', () => {
    cy.contains('Test Blog Post').should('be.visible')
    cy.contains('This is a test blog description').should('be.visible')
  })

  it('displays correct date and reading time', () => {
    cy.contains('01 Jan 2023').should('be.visible')
    cy.contains('5 mins read').should('be.visible')
  })
})