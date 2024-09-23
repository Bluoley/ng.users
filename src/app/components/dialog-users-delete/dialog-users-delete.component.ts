import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-dialog-users-delete',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './dialog-users-delete.component.html',
  styleUrl: './dialog-users-delete.component.css',
})
export class DialogUsersDeleteComponent {
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<DialogUsersDeleteComponent>);

  constructor(private userService: UsersService) {
    console.log(this.data);
  }

  deleteUser() {
    this.userService.deleteUser(this.data.user.idUser).subscribe({
      next: (data) => {
        this.dialogRef.close(true);
      },
    });
  }
}
