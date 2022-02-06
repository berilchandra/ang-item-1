import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusernaemComponent } from './fusernaem.component';

describe('FusernaemComponent', () => {
  let component: FusernaemComponent;
  let fixture: ComponentFixture<FusernaemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusernaemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusernaemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
