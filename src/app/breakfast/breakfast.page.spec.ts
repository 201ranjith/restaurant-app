import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreakfastPage } from './breakfast.page';

describe('BreakfastPage', () => {
  let component: BreakfastPage;
  let fixture: ComponentFixture<BreakfastPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BreakfastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
