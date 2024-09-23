import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ELEMENT_DATA, User } from '../services/types/User';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogUsersInfoComponent } from '../components/dialog-users-info/dialog-users-info.component';
import { DialogUsersDeleteComponent } from '../components/dialog-users-delete/dialog-users-delete.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements AfterViewInit {
  readonly dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns = [
    'idUser',
    'nameUser',
    'firstLastNameUser',
    'secondLastNameUser',
    'addressUser',
    'phoneUser',
    'tools',
  ];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  dataLength = 0;

  constructor(private userService: UsersService) {}

  ngAfterViewInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log(
          '🚀 ~ UsersComponent ~ this.userService.getUsers ~ data:',
          data
        );
        this.dataSource.data = data;
      },
      complete: () => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  editOrAddUser(type: string, dataUser?: User | null) {
    const dialogRef = this.dialog.open(DialogUsersInfoComponent, {
      disableClose: true,
      data: {
        type,
        dataUser,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }

  openDeleteUser(user: User) {
    const dialogRef = this.dialog.open(DialogUsersDeleteComponent, {
      data: {
        user,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUsers();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.dataSource.filterPredicate = (data: User) => {
      return (
        data.nameUser.toLowerCase().includes(filterValue) ||
        data.firstLastNameUser.toLowerCase().includes(filterValue) ||
        data.secondLastNameUser.toLowerCase().includes(filterValue)
      );
    };
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
