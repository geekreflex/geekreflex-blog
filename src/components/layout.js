import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import ToggleTheme from "./toggle"

import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

const Layout = ({ location, title, children }) => {
  const [theme, setTheme] = React.useState(null)

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

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

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <ToggleTheme
          icons={{
            checked: (
              <img
                src={moon}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: "none" }}
              />
            ),
            unchecked: (
              <img
                src={sun}
                width="16"
                height="16"
                role="presentation"
                style={{ pointerEvents: "none" }}
              />
            ),
          }}
          checked={theme === "dark"}
          onChange={e =>
            window.__setPreferredTheme(e.target.checked ? "dark" : "light")
          }
        />
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},{` `}
        {author?.name}
      </footer>
    </div>
  )
}

export default Layout
