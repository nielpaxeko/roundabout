import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListItem } from './bucket-list-item';

describe('BucketListItem', () => {
  let component: BucketListItem;
  let fixture: ComponentFixture<BucketListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
