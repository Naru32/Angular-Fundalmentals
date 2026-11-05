import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineObservable } from './combine-observable';

describe('CombineObservable', () => {
  let component: CombineObservable;
  let fixture: ComponentFixture<CombineObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(CombineObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
