import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { bucketItem } from '../../shared/models/bucketItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: bucketItem) => item,
  (item: bucketItem) => !item.isCompleted,
  (item: bucketItem) => item.isCompleted,
];

@Component({
  selector: 'app-bucket-list-filter',
  imports: [FormsModule],
  templateUrl: './bucket-list-filter.html',
  styleUrl: './bucket-list-filter.css',
})
export class BucketListFilter implements OnInit {
  @Input() filter: any;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    // Initialize the filter to show all items by default
    this.updateFilter(0);
  }

  listFilter: any = '0';
  updateFilter(value: any) {
    // Emit the filter change event
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
