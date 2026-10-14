import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Meddle } from './meddle';

describe('Meddle', () => {
  let component: Meddle;
  let fixture: ComponentFixture<Meddle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meddle],
    }).compileComponents();

    fixture = TestBed.createComponent(Meddle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
