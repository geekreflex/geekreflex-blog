import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <footer className="main-footer">
      <div className="footer-socials">
        © {new Date().getFullYear()},{` `}
        {author?.name}
        <a href={`https://github.com/${social?.twitter}`}>
          <IoLogoGithub />
        </a>
        <a href={`https://twitter.com/${social?.twitter}`}>
          <IoLogoTwitter />
        </a>
      </div>
      <a href="/rss.xml">rss</a>
    </footer>
  )
}
export default Footer
