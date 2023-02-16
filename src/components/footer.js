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

  return (
    <footer className="main-footer">
      {/* © {new Date().getFullYear()},{` `}
      {author?.name} */}
      <div className="footer-socials">
        <a>
          <IoLogoGithub />
        </a>
        <a>
          <IoLogoTwitter />
        </a>
      </div>
      <a href="/rss.xml">rss</a>
    </footer>
  )
}
export default Footer
