import React from "react"
import { graphql } from "gatsby"
import { remarkForm } from 'gatsby-tinacms-remark'

function BlogPostTemplate(props) {
  return (
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <h4>{props.data.markdownRemark.frontmatter.description}</h4>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.rawMarkdownBody }}
      />
    </div>
  )
}

const BlogPostForm = {
  label: 'Blog Post',
  fields: [
    {
      label: 'Title',
      name: 'frontmatter.title',
      description: 'Enter the title of the post here',
      component: 'text',
      // If there's no value, return empty string
      parse(value) {
        return value || ""
      },
    },
    {
      label: 'Description',
      name: 'frontmatter.description',
      description: 'Enter the post description',
      component: 'textarea',
      // If there's no value, return empty string
      parse(value) {
        return value || ""
      },
    },
    {
      label: 'slug',
      name: 'frontmatter.slug',
      description: 'Enter the post slug',
      component: 'text',
      // If there's no value, return empty string
      parse(value) {
        return value || ""
      },
    },
    {
      name: 'rawMarkdownBody',
      component: 'markdown',
      label: 'Post Body',
      description: 'Edit the body of the post here',
    }
  ],
}

export const pageQuery = graphql`
query BlogPostBySlug($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    id
    rawMarkdownBody
    frontmatter {
      title
      date
      description
      slug
    }
    ...TinaRemark
  }
}
`
export default remarkForm(BlogPostTemplate, BlogPostForm)
