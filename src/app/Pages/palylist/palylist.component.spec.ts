import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalylistComponent } from './palylist.component';

describe('PalylistComponent', () => {
  let component: PalylistComponent;
  let fixture: ComponentFixture<PalylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PalylistComponent]
    });
    fixture = TestBed.createComponent(PalylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
