import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: Car[] = [];


  dataLoaded = false;


  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCar().subscribe(Response=>{
      this.cars = Response.data;
      this.dataLoaded = true;
    })
  }

}
