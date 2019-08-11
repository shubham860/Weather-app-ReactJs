import React from 'react'
import PropTypes from 'prop-types'
import './css/Report.css'


class Report extends React.Component {
  render () {
         const {city, country, latitude, longitude, temper, humidity, pressure, appearance} = this.props
      return(

               <div class="grid-container">
                <div class="grid-item item1">1</div>
                <div class="grid-item item2 grid-container2">
                  <div class="grid-item item2.1">2.1</div>
                  <div class="grid-item item2.2 grid-container2.2">
                    <div class="grid-item item2.2.1">ONE</div>
                    <div class="grid-item item2.2.2">TWO</div>
                  </div>
                </div>
                <div class="grid-item item3">3</div>
                <div class="grid-item item4">4</div>
                <div class="grid-item item5">5</div>
                <div class="grid-item item6">6</div>
                </div>
      )
  }
}

export default Report;
