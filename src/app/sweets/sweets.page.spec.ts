import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SweetsPage } from './sweets.page';

describe('SweetsPage', () => {
  let component: SweetsPage;
  let fixture: ComponentFixture<SweetsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SweetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
