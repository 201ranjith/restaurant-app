import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinnerPage } from './dinner.page';

describe('DinnerPage', () => {
  let component: DinnerPage;
  let fixture: ComponentFixture<DinnerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
