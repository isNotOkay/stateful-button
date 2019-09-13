import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

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
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email'];
  @ViewChild('search', {static: false}) searchFieldElementRef: ElementRef;
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  sortOrder = 'asc';
  sortBy = 'id';

  constructor(private httpClient: HttpClient) {
  }

  public searchx(): void {
    /*  this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);*/
    this.filter();
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/users', {observe: 'response'})
      .subscribe((res: HttpResponse<User[]>) => {
        this.users = res.body;
        this.filteredUsers = res.body;
      });
  }

  public filter() {
    this.filteredUsers = this.users.filter((user) => {
      return this.matchesSearchCriteria(user, this.searchFieldElementRef.nativeElement.value);
    });
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
    const usersSortedAscending = users.sort((firstUser, secondUser) => firstUser[this.sortBy] - secondUser[this.sortBy]);
    return order === 'asc' ? usersSortedAscending : usersSortedAscending.reverse();
  }
}
