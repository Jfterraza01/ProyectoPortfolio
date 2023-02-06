import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasSobreMiComponent } from './mas-sobre-mi.component';

describe('MasSobreMiComponent', () => {
  let component: MasSobreMiComponent;
  let fixture: ComponentFixture<MasSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
