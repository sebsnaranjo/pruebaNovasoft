import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AccountsData } from 'src/app/interfaces/accounts.interface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listAccounts: AccountsData[] = [];

  displayedColumns: string[] = ['codCli', 'tipIde', 'nitCli','digVer', 'nomCli', 'ap1Cli','nom1Cli', 'eMail', 'tipPer','codCiu', 'codDep', 'codPai','di1Cli', 'te1Cli', 'tipCli','fecIng', 'codCliExtr'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private router: Router, private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    } else {
      console.error('Paginator is still not defined after view init');
    }
  }

  getAccounts(){
    this.tasksService.getAccounts().subscribe( data => {
      console.log(data);
      this.listAccounts = data;
      this.dataSource = new MatTableDataSource(this.listAccounts)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
