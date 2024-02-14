// search-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  username: string = '';

  @Output() searchUser: EventEmitter<string> = new EventEmitter();

search(): void {
  if (this.username) {
    this.searchUser.emit(this.username);
  } else {
    console.error('Username is null or undefined');
  }
}
}
