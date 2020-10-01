import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvalidsComponent } from './loginvalids.component';

describe('LoginvalidsComponent', () => {
  let component: LoginvalidsComponent;
  let fixture: ComponentFixture<LoginvalidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginvalidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginvalidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
