import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoffeePage } from './coffee.page';

describe('CoffeePage', () => {
  let component: CoffeePage;
  let fixture: ComponentFixture<CoffeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CoffeePage);
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

