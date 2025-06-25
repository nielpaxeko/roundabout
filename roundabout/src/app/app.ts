import { Component, OnInit } from '@angular/core';
import { BList } from './bucket-list-module/blist/blist';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [BList],
  styleUrl: './app.css',
})

export class App implements OnInit {
  constructor() {}
  ngOnInit(): void {
   
  }

}
