import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondComponent } from './second-component';
import { Students } from '../service/students';

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondComponent],
      providers:[
        // {
        //   provide:Students,
        //   useClass:MockStudents
        // }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
