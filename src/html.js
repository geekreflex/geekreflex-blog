import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                function setTheme(theme) {
                  window.__theme = theme;
                  console.log('Theme updated:', theme);
              
                  if (theme === 'dark') {
                    document.documentElement.className = 'dark';
                  } else {
                    document.documentElement.className = '';
                  }
                };
              
                window.__setPreferredTheme = function(theme) {
                  setTheme(theme);
                  try {
                    localStorage.setItem('preferred-theme', theme);
                  } catch (e) {}
                };
              
                try {
                  preferredTheme = localStorage.getItem('preferred-theme');
                } catch (e) {}
              
                let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
