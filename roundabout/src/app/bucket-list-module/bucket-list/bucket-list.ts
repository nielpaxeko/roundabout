import { Component, Input } from '@angular/core';
import { bucketItem } from '../../../shared/models/bucketItem';
import { CommonModule } from '@angular/common';
import { BucketListItem } from '../bucket-list-item/bucket-list-item';

@Component({
  selector: 'app-bucket-list',
  imports: [CommonModule, BucketListItem],
  templateUrl: './bucket-list.html',
  styleUrl: './bucket-list.css',
  standalone: true,
})
export class BucketList  {
  @Input() bucketItems: bucketItem[] = []; // List of bucket items passed from parent
}
