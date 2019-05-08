import {Component, OnInit} from '@angular/core';
import {JsonplaceholderService} from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ServicesRouts';

// this JsonplaceholderService is a class in jsonplaceholder.service

  constructor(private jsonPlaceholderService: JsonplaceholderService) {
  }

  ngOnInit(): void {
    this.jsonPlaceholderService.getTodos().subscribe((res) => {
      // it sends an array of 200 elements todo to the console
      console.log(res);
      // res[0].id;
    });
  }

}
