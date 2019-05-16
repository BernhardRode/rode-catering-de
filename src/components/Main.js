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
