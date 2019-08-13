import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Report from './Report'
import './css/Form.css'

const api_key= '5c06b924a0b02671fcf1bd6cfa3cb1b1'

class Form extends Component {
   constructor(){
     super()
     this.state = {
       city : '',
       country : '',
       latitude : '',
       longitude : '',
       temper : '',
       humidity : '',
       pressure : '',
       appearance : ''
     }
     this.inpuref = React.createRef()
   }

city = event => {
  this.setState({
    city : event.target.value
  })
}

country = event => {
  this.setState({
    country : event.target.value
  })
}

componentDidMount(){
  this.inpuref.current.focus()
}

submit = event => {
  if(this.state.city && this.state.country){
      event.preventDefault()
    		axios
    			.get('http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+','+this.state.country+'&appid='+api_key+'&units=metric')
          .then(response=>{
            var metrices = response.data
          this.setState({
              longitude : metrices.coord.lon,
              latitude : metrices.coord.lat,
              temper : metrices.main.temp,
              humidity : metrices.main.humidity,
              pressure : metrices.main.pressure,
              appearance : metrices.weather[0].main
          })
           })
    			.catch(error => {
    				alert('Invalid Inputs')
            this.setState({
              city : '',
              country : '',
              latitude : '',
              longitude : '',
              temper : '',
              humidity : '',
              pressure : '',
              appearance : ''
            })
    			})
              }
  else
     return alert('Please fill City and Country correctly')
  }


  render () {
       const {city, country, latitude, longitude, temper, humidity, pressure, appearance} = this.state
    return(

      <div className="container shift">
       <div className="row">
          <div className="col-md-6">
            <div className="container dark">
              <div className="container align">
               <div className="row bottom">
                <input type='text' name='city' className="input" placeholder="City" value={city} onChange={this.city} autocomplete="off" ref={this.inpuref}/>
               </div>
               <div className="row bottom">
                 <input type='text' name='country' className="input" placeholder="Country" value={country} onChange={this.country} autocomplete="off"/>
                </div>
                <div className="row bottom">
                 <button type='button' className="btn btn-dark" id="btn" onClick={this.submit}>Get Weather</button>
                </div>
                 </div>
            </div>
          </div>

          <div className="col-md-6">
            <Report city={city} country={country} latitude={latitude} longitude={longitude} temper={temper} humidity={humidity} pressure={pressure} appearance={appearance}/>
          </div>

       </div>
      </div>



  )}
}

export default Form;
