import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl = "https://open-weather13.p.rapidapi.com/city/city";
  XRapidAPIKeyName = "X-RapidAPI-Key";
  XRapidAPIKeyValue = "6557f439b7msh21c27624249301ep17d60ajsne31c1b47ae14";
  XRapidAPIHostName = "X-RapidAPI-Host";
  XRapidAPIHostValue = "open-weather13.p.rapidapi.com";
  constructor(private http : HttpClient) { }


  getWeather(cityName : string) : Observable<weatherData>{
    return this.http.get<weatherData>(this.baseUrl , {
      headers: new HttpHeaders().set(this.XRapidAPIKeyName , this.XRapidAPIKeyValue)
      .set(this.XRapidAPIHostName , this.XRapidAPIHostValue),
      params: new HttpParams().set('city' , cityName) 
    });
  }
}