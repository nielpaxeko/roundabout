import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bucketItem } from '../shared/models/bucketItem';
import { FormsModule } from '@angular/forms';
import { BucketList } from './bucket-list/bucket-list';
import { AddItemForm } from './add-item-form/add-item-form';
import { BucketListFilter } from './bucket-list-filter/bucket-list-filter';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BucketList,
    AddItemForm,
    BucketListFilter
  ],
  styleUrl: './app.css',
})
export class App {
  protected title = 'roundabout';
  // This is the list of bucket items
  bucketItems: bucketItem[] = [
    new bucketItem('Visit the 7 wonders of the world', false),
    new bucketItem('Sandboard in Peru', false),
    new bucketItem('Go skydiving', false),
    new bucketItem('Learn French', true),
  ];

  filter: any;
}
