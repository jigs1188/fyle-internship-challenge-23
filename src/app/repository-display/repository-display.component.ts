// repository-display.component.ts
import { Component, Input } from '@angular/core';
import { Repository } from './repository.model';

@Component({
  selector: 'app-repository-display',
  templateUrl: './repository-display.component.html',
  styleUrls: ['./repository-display.component.css']
})
export class RepositoryDisplayComponent {
  @Input() repositories: Repository[] = [];
}
