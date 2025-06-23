import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bucketItem } from '../shared/models/bucketItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
   imports: [CommonModule, FormsModule],
  styleUrl: './app.css',
})
export class App {
  protected title = 'roundabout';
  // This is the list of bucket items
  bucketItems: bucketItem[] = [];
  // This is the new item input field
  newBucketItem: string = '';
  // This is the method to add a new item to the bucket list
  addNewItem() {
    if (this.newBucketItem.trim()) {
      this.bucketItems.push(new bucketItem(this.newBucketItem, false));
      this.newBucketItem = '';
    }
  }
  // This is the method for toggling the completion status of an item
  toggleItemCompletion(item: bucketItem) {
    item.isCompleted = !item.isCompleted;
    console.log(`${item.bucketText} ${item.isCompleted ? 'is now completed' : 'has not been completed'}`);
  }
}
