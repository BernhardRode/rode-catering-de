/*
              _                       _             _       
             | |                     | |           (_)      
__      _____| |____      _____  _ __| | _____ _ __ _  ___  
\ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__| |/ _ \ 
 \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |_ | | (_) |
  \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_(_)|_|\___/ 
*/
import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <address>
        Birigt &amp; Ulrich Rode
        <br />
        Hauptstraße 44
        <br />
        71717 Beilstein
        <br />
        <abbr title="Phone">Telefon:</abbr>{' '}
        <a href="tel:+4970628866">+49 (0)7062 8866</a>
        <br />
        <abbr title="Fax">Fax:</abbr> +49 (0)7062 930756
        <br />
        <abbr title="E-Mail">E-Mail:</abbr>{' '}
        <a href="mailto:info@rode-catering.de">info@rode-catering.de</a>
        <br />
      </address>
    )
  }
}

export default Contact
