import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import SearchPosts from "../components/SearchPosts"

export default function Blog(props) {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.posts.edges
  const localSearchBlog = data.localSearchBlog

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        location={location}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
