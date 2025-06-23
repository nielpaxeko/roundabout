import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListFilter } from './bucket-list-filter';

describe('BucketListFilter', () => {
  let component: BucketListFilter;
  let fixture: ComponentFixture<BucketListFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucketListFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
