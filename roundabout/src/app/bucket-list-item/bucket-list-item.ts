import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket-list-item',
  imports: [CommonModule],
  templateUrl: './bucket-list-item.html',
  styleUrl: './bucket-list-item.css',
  standalone: true,
})
export class BucketListItem {
  @Input() bucketText!: string;
  @Input() isCompleted!: boolean;
  @Output() isCompletedChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {'strikeout text-muted': this.isCompleted};
  }

  // Toggle completion status of an item
  toggleItem() {
    this.isCompleted = !this.isCompleted;
    this.isCompletedChange.emit(this.isCompleted);
    console.log(`${this.bucketText} ${this.isCompleted ? 'is now completed' : 'has not been completed'}`);
  }


}
