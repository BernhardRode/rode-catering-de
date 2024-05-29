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
        Marcel Rode
        <br />
        Beilsteinerstrasse 100
        <br />
        71720 Oberstenfeld
        <br />
        <abbr title="Phone">Telefon:</abbr>{' '}
        <a href="tel:+4970629790450">+49 (0)7062 - 9790450</a>
        <br />
      </address>
    )
  }
}

export default Contact
