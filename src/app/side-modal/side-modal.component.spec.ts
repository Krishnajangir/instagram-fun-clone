import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideModalComponent } from './side-modal.component';

describe('SideModalComponent', () => {
  let component: SideModalComponent;
  let fixture: ComponentFixture<SideModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
