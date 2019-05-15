/*
              _                       _             _       
             | |                     | |           (_)      
__      _____| |____      _____  _ __| | _____ _ __ _  ___  
\ \ /\ / / _ \ '_ \ \ /\ / / _ \| '__| |/ / _ \ '__| |/ _ \ 
 \ V  V /  __/ |_) \ V  V / (_) | |  |   <  __/ |_ | | (_) |
  \_/\_/ \___|_.__/ \_/\_/ \___/|_|  |_|\_\___|_(_)|_|\___/ 
*/
import React from 'react'

class Kiosk extends React.Component {
  render() {
    return (
      <div>
        <p>
          Pommes und Eis für die Kinder oder Hamburger und Getränke für die
          Alten. Wir freuen uns, Sie im Mineralfreibad Oberes Bottwartal mit
          allem was das Herz begehrt verpflegen zu können.
        </p>
        <img
          src={kiosk}
          width="100%"
          alt="Freibad Kiosk - Mineralfreibad Oberes Bottwartal"
        />
        <p>
          Weitere Informationen zum Mineralfreibad Oberes Bottwartal finden Sie
          auf der Homepage unter{' '}
          <a
            href="https://www.freibad-oberes-bottwartal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            freibad-oberes-bottwartal.com
          </a>
        </p>
      </div>
    )
  }
}

export default Kiosk
