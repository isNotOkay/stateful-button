import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Sort} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface User {
  id: string;
  firstname: string;
  lastname: number;
  email: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class TableComponent implements OnInit {
  @ViewChild('search', {static: false}) searchFieldElementRef: ElementRef;
  private SERVER_USERS: User[];
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  expandedElement: User | null;
  filteredUsers: User[];
  loading: boolean;
  sortOrder = 'asc';
  sortBy = 'id';
  page: number;
  offset: number;
  limit = 10;
  total: number;

  constructor(private httpClient: HttpClient) {
  }

  public clear() {
    this.searchFieldElementRef.nativeElement.value = '';
    this.searchx();
  }

  public searchx(): void {
    console.log('=== searchx ===');
    this.page = 0;
    this.filter();
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/users', {observe: 'response'})
      .subscribe((res: HttpResponse<User[]>) => {
        this.SERVER_USERS = res.body;
        this.page = 0;
        this.filter();
      });
  }

  public filter() {
    this.filteredUsers = this.SERVER_USERS.filter((user) => {
      return this.matchesSearchCriteria(user, this.searchFieldElementRef.nativeElement.value);
    });
    this.total = this.filteredUsers.length;
    if (this.sortBy && this.sortOrder) {
      this.filteredUsers = this.sort(this.filteredUsers, this.sortOrder);
    }
    this.filteredUsers = this.filteredUsers.slice(this.page * this.limit, this.page * this.limit + this.limit);
  }

  private matchesSearchCriteria(user: User, searchString: string): boolean {
    const searchTerms = searchString.split(' ');
    return searchTerms.reduce(
      (booleanResult, searchTerm) =>
        booleanResult &&
        Boolean(Object.keys(user).find(key => user[key].toString().toLowerCase().includes(searchTerm.toLowerCase()))),
      true);
  }

  sort(users, order) {
    let usersSortedAscending;
    if (this.sortBy === 'id') {
      usersSortedAscending = users.sort((firstUser, secondUser) => firstUser[this.sortBy] - secondUser[this.sortBy]);
    } else {
      usersSortedAscending = users.sort((firstUser, secondUser) => firstUser[this.sortBy].localeCompare(secondUser[this.sortBy]));
    }
    return order === 'asc' ? usersSortedAscending : usersSortedAscending.reverse();
  }

  onPageChange($event) {
    this.page = $event.pageIndex;
    console.log(this.page);
    this.filter();
  }

  onSortChange(sort: Sort) {
    this.page = 0;
    this.sortBy = sort.active;
    this.sortOrder = sort.direction;
    if (!sort.direction) {
      this.sortBy = 'id';
      this.sortOrder = 'asc';
    }
    this.filter();
  }
}
