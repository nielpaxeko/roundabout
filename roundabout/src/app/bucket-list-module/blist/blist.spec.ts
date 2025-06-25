import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BList } from './blist';

describe('BList', () => {
  let component: BList;
  let fixture: ComponentFixture<BList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
