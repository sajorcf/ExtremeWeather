import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  weatherObj = {
    name: '',
    main: {
      temp: 0,
      min_temp: 0,
      max_temp: 0,
      pressure: 0,
      humidity: 0,
    },
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [
      { main: '', description: '', icon:'50n' }
    ]
  };

  currentCity = '';

  cityList = [
    {name:'Barranquilla'},
    {name:'Bogotá'},
    {name:'Medellín'},
    {name:'Bucaramanga'},
    {name:'Cartagena'},
    {name:'Santa Marta'},
    {name:'Valledupar'},
    {name:'Montería'},
    {name:'Riohacha'},
    {name:'San Andrés'}
  ];

  constructor(private weather:WeatherService){
    this.updateWeather(this.cityList[0].name);
  }

  ngOnInit() {
  }

  updateWeather(city){
    this.weather.showLoader();
    this.currentCity = city;
    this.weather.getWeatherByCity(city).subscribe(data=>{
      this.weatherObj = data;
    }, err=>{
      this.weather.hideLoader();
    }, ()=>{
      this.weather.hideLoader();
    });
  }

}
