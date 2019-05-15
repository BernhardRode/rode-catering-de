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
import Imprint from './Imprint'

import kiosk from '../images/kiosk.png'
import Contact from './Contact'
import Catering from './Catering'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="kiosk"
          className={`${this.props.article === 'kiosk' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Freibad Kiosk</h2>
          <p>
            Ob Pommes und Eis für die Kinder oder Hamburger und Getränke für die
            Alten. Wir freuen uns, Sie im Mineralfreibad Oberes Bottwartal mit
            allem was das Herz begehrt verpflegen zu können.
          </p>
          <img
            src={kiosk}
            width="100%"
            alt="Freibad Kiosk - Mineralfreibad Oberes Bottwartal"
          />
          <p>
            Weitere Informationen zum Mineralfreibad Oberes Bottwartal finden
            Sie auf der Homepage unter{' '}
            <a
              href="https://www.freibad-oberes-bottwartal.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              freibad-oberes-bottwartal.com
            </a>
          </p>
          {close}
        </article>

        <article
          id="catering"
          className={`${this.props.article === 'catering' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Catering</h2>
          <Catering />
          <p />
          {close}
        </article>

        <article
          id="adresse"
          className={`${this.props.article === 'adresse' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rode Catering</h2>
          <Contact />
          {close}
        </article>

        <article
          id="imprint"
          className={`${this.props.article === 'imprint' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Impressum und Datenschutz</h2>
          <Imprint />
          <p />
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
