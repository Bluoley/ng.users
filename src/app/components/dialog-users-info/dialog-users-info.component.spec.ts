import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersInfoComponent } from './dialog-users-info.component';

describe('DialogUsersInfoComponent', () => {
  let component: DialogUsersInfoComponent;
  let fixture: ComponentFixture<DialogUsersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUsersInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUsersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
