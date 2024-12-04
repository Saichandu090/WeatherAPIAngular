import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {

  imagePath:string="https://imgs.search.brave.com/oVCEA3KBlWX8fqvZfWc_GhHcUYAHCcT4MnyypTgrJxw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MTk3OTQxL3Bob3Rv/L3NldmVyZS13ZWF0/aGVyLWFsZXJ0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz03/LU5iYjJlY3F6T29m/YkIyZzU1ZWRpYllC/NHJKTFo5RDV1Mk5L/Z0V6c0lzPQ";
  searchForm! : FormGroup;
  weather : any;

  private fb:FormBuilder=inject(FormBuilder);

  private service=inject(WeatherService);

  ngOnInit(){
   this.searchForm = this.fb.group({
     city: [null,Validators.required]
   })
  }

  searchWeather(){
   console.log(this.searchForm.value);
   this.service.searchWeatherByCity(this.searchForm.get(['city'])!.value).subscribe((resp) => {
     console.log(resp);
     this.weather = resp.location;
   })
  }
}
