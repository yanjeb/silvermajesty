import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistryDetail } from './ministry-detail';

describe('MinistryDetail', () => {
  let component: MinistryDetail;
  let fixture: ComponentFixture<MinistryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinistryDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MinistryDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
