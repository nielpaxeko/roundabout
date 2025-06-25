import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../shared/services/EventService';
import { bucketItem } from '../../../shared/models/bucketItem';

@Component({
  selector: 'app-bucket-list-item',
  imports: [CommonModule],
  templateUrl: './bucket-list-item.html',
  styleUrl: './bucket-list-item.css',
  standalone: true,
})
export class BucketListItem {
  @Input() bucketItem!: bucketItem;


  get cssClasses() {
    return {'strikeout text-muted': this.bucketItem.isCompleted};
  }

  
  // Toggle completion status of an item
  toggleItem() {
    this.bucketItem.isCompleted = !this.bucketItem.isCompleted;
    console.log(`${this.bucketItem.bucketText} ${this.bucketItem.isCompleted ? 'is now completed' : 'has not been completed'}`);
  }
  // Emit an event to remove the item from the list
  constructor(private events: EventService) {
    
  }
  removeItem() {
    this.events.emit('removeItem', this.bucketItem);
  }
}
