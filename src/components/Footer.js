/*
              _                       _             _
             | |                     | |           (_)
__      _____| |____      _____  _ __| | _____ _ __ _  ___
\ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__| |/ _ \
 \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |_ | | (_) |
  \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_(_)|_|\___/
*/
import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Rode Catering Beilstein - {new Date().getFullYear()}
      &nbsp;❤&nbsp;
      <a
        href="https://unsplash.com/@single_lens_reflex?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        target="_blank"
        rel="noopener noreferrer"
        title="Download free do whatever you want high-resolution photos from Dan Burton"
      >
        bild <span>Dan Burton</span>
      </a>
      &nbsp;|&nbsp;
      <span
        style={{ cursor: 'pointer' }}
        role="link"
        onClick={() => {
          props.onOpenArticle('imprint')
        }}
      >
        Impressum &amp; Datenschutz
      </span>
      <StaticQuery
        query={graphql`
          query SiteVersionQuery {
            site {
              siteMetadata {
                version
              }
            }
          }
        `}
        render={(data) => (
          <>&nbsp;|&nbsp; Version {data.site.siteMetadata.version}</>
        )}
      />
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
