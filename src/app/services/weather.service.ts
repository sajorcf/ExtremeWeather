import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:Http){
    console.log('ready');
  }

  showLoader(){
    document.querySelector('.loader').className = 'loader active';
  }

  hideLoader(){
    document.querySelector('.loader').className = 'loader';
  }

  getWeatherByCity(city){
    return this.http.get(environment.url+city+',co&units=metric&appid='+environment.apiKey).pipe(map(res => res.json()));
  }
}
