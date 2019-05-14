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
          id="oeffnungszeiten"
          className={`${
            this.props.article === 'oeffnungszeiten' ? 'active' : ''
          } ${this.props.articleTimeout ? 'timeout' : ''}`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Öffnungszeiten</h2>
          <p>
            <strong>Montag bis Freitag</strong>
            <br />
            von 07.00 - 19.00
            <br />
            <strong>Samstag</strong>
            <br />
            von 07.00 - 13.00 Uhr
            <br />
          </p>
          {close}
        </article>

        <article
          id="adresse"
          className={`${this.props.article === 'adresse' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Wo sie uns finden?</h2>
          <address>
            <strong>Rode Catering</strong>
            <br />
            Birigt & Ulrich Rode
            <br />
            Hauptstraße 44
            <br />
            71717 Beilstein
            <br />
            <abbr title="E-Mail">Telefon:</abbr>{' '}
            <a href="mailto:info@rode-catering.de">info@rode-catering.de</a>
            <br />
            <abbr title="Phone">Telefon:</abbr>{' '}
            <a href="tel:+4970623716">+49 (07062) 8866</a>
            <br />
            <abbr title="Fax">Fax:</abbr> +49 (07062) 930756
            <br />
            <br />
          </address>
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
