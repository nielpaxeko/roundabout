import { Component } from '@angular/core';
import { bucketItem } from '../../../shared/models/bucketItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BucketList } from '../.././bucket-list-module/bucket-list/bucket-list';
import { AddItemForm } from '../.././bucket-list-module/add-item-form/add-item-form';
import { BucketListFilter } from '../.././bucket-list-module/bucket-list-filter/bucket-list-filter';
import { EventService } from '../../../shared/services/EventService';
import { BucketService } from '../.././bucket-list-module/bucket-service';

@Component({
  selector: 'app-blist',
  imports: [CommonModule, FormsModule, BucketList, AddItemForm, BucketListFilter],
  templateUrl: './blist.html',
  styleUrl: './blist.css'
})
export class BList {
   protected title = 'roundabout';
  // This is the list of bucket items
  bucketItems: bucketItem[] = [];
  // Initializing the bucket items
  ngOnInit(): void {
    this.bucketService.getBucketItems().subscribe(
      (data: any) => {
        this.bucketItems = data;
      },
      (error: any) => {
        alert('Error fetching bucket items: ' + error.message);
      }
    );
  }

  // This is the event listener for removing items from the bucket
  constructor(
    private events: EventService,
    private bucketService: BucketService
  ) {
    events.listen('removeItem', (bucketItem: any) => {
      console.log(`Removed item: ${bucketItem.bucketText}`);
      let index = this.bucketItems.indexOf(bucketItem);
      this.bucketItems.splice(index, 1);
    });
  }

  // This is the filter for the bucket list
  filter: any;

}
