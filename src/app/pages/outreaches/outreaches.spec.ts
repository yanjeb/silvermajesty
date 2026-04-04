import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outreaches } from './outreaches';

describe('Outreaches', () => {
  let component: Outreaches;
  let fixture: ComponentFixture<Outreaches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outreaches],
    }).compileComponents();

    fixture = TestBed.createComponent(Outreaches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
