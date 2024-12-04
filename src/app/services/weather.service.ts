import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = "c84f6d4323mshcd55a9e5b9ad853p1e3b00jsn6cf8964bc442";
  private apiUrl = "https://weather-api-by-any-city.p.rapidapi.com/weather";

  private http = inject(HttpClient);

  searchWeatherByCity(city: string): Observable<any> {

    const headers = new HttpHeaders()
      .set("X-RapidAPI-Key", this.apiKey)
      .set("X-RapidAPI-Host", "weather-api-by-any-city.p.rapidapi.com");

    const option = { headers };

    return this.http.get(`${this.apiUrl}/${city}`, option)
  }
}
