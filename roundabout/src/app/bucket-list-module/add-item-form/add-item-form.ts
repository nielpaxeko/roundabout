import { Component, Output, EventEmitter } from '@angular/core';
import { bucketItem } from '../../../shared/models/bucketItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  imports: [FormsModule],
  templateUrl: './add-item-form.html',
  styleUrl: './add-item-form.css',
})
export class AddItemForm {
  @Output() addItem = new EventEmitter<bucketItem>();

  // This is the new item input field
  newBucketItem: string = '';
  addNewItem() {
    // This is the method to add a new item to the bucket list
    if (this.newBucketItem) {
      this.newBucketItem = this.newBucketItem.trim();
      this.addItem.emit(new bucketItem(this.newBucketItem, false));
      this.newBucketItem = '';
    }
  }
}
