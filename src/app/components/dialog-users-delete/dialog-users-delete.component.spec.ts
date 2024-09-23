import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUsersDeleteComponent } from './dialog-users-delete.component';

describe('DialogUsersDeleteComponent', () => {
  let component: DialogUsersDeleteComponent;
  let fixture: ComponentFixture<DialogUsersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUsersDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUsersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
