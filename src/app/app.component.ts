import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cityName: string = 'cairo';
  weatherData?: weatherData;
  constructor(private weatherService: WeatherService) { }


  ngOnInit() {
    // this.weatherService.getWeather('landon').subscribe({
    //   next: (response => {
    //     this.weatherData = response;
    //     console.log(response);
    //   })
    // });
    this.getWeatherData(this.cityName);
  }


  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ' ';
  }


  private getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName).subscribe({
      next: (response => {
        this.weatherData = response;
        console.log(response);
      })
    });
  }

}
