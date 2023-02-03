import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDePagComponent } from './pie-de-pag.component';

describe('PieDePagComponent', () => {
  let component: PieDePagComponent;
  let fixture: ComponentFixture<PieDePagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieDePagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieDePagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
