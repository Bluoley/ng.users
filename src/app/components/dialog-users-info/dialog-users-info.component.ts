import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NUMBER_ONLY, TEXT_NUMBER, TEXT_ONLY } from '../../../../utils/regexp';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dialog-users-info',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './dialog-users-info.component.html',
  styleUrl: './dialog-users-info.component.css',
})
export class DialogUsersInfoComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<DialogUsersInfoComponent>);
  data = inject(MAT_DIALOG_DATA);
  userForm = new FormGroup({
    nameUser: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_ONLY),
    ]),
    firstLastNameUser: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_ONLY),
    ]),
    secondLastNameUser: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_ONLY),
    ]),
    addressUser: new FormControl(null, [
      Validators.required,
      Validators.pattern(TEXT_NUMBER),
    ]),
    phoneUser: new FormControl(null, [
      Validators.required,
      Validators.pattern(NUMBER_ONLY),
    ]),
  });

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    if (this.data.type !== 'Add') {
      this.userForm.patchValue(this.data.dataUser);
    }
  }

  submit() {
    if (this.data.type === 'Add') {
      this.userService.createUser(this.userForm.value).subscribe({
        complete: () => {
          this.dialogRef.close(true);
        },
      });
    } else {
      this.userService
        .updateUser({
          idUser: this.data.dataUser.idUser,
          ...this.userForm.value,
        })
        .subscribe();
        this.dialogRef.close(true);
    }
  }

  closeDialog() {
    this.dialogRef.close(false);
  }
}
