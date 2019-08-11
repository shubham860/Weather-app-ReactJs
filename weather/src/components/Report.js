import React from 'react'
import PropTypes from 'prop-types'
import './css/Report.css'


class Report extends React.Component {
  render () {
         const {city, country, latitude, longitude, temper, humidity, pressure, appearance} = this.props
      return(

               <div class="grid-container">
                <div class="grid-item item1">
                   {
                     temper && <p class="temper">{temper}	&#8451;</p>
                   }
                </div>

                <div class="grid-item item2 grid-container2">
                  <div class="grid-item item2.1">
                    {
                      appearance && <p class="app">{appearance}</p>
                    }
                  </div>
                  <div class="grid-item grid-container2.2">
                    <div class="item2.2.1">
                      {
                        appearance &&  <p class="city">{city},{country}</p>
                      }
                    </div>
                  </div>
                </div>

                <div class="grid-item item3">
                  {
                    latitude && <p class="latitude">Latitude {latitude}</p>
                  }
                </div>
                <div class="grid-item item4">
                  {
                    longitude && <p class="latitude">Longitude {longitude}</p>
                  }
                </div>
                <div class="grid-item item5">
                  {
                    humidity && <p class="latitude">Humidity {humidity} %</p>
                  }
                </div>
                <div class="grid-item item6">
                  {
                    pressure && <p class="latitude">Pressure {pressure} atm</p>
                  }
                </div>
                </div>
      )
  }
}

export default Report;
