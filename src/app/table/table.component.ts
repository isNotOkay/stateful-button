import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Sort} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';

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
  encapsulation: ViewEncapsulation.None,
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
  displayedColumns: string[] = ['select', 'id', 'firstname', 'lastname', 'email', 'actions'];
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

  selection = new SelectionModel<User>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.filteredUsers.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.filteredUsers.forEach(row => this.selection.select(row));
  }

  public clear() {
    this.searchFieldElementRef.nativeElement.value = '';
    this.selection.clear();
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
    this.selection.clear();
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
    this.selection.clear();
    this.filter();
  }

  expandRow(element: any) {
    console.log(element);
    this.expandedElement = this.expandedElement === element ? null : element;
  }
}
