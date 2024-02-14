import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryDisplayComponent } from './repository-display.component';

describe('RepositoryDisplayComponent', () => {
  let component: RepositoryDisplayComponent;
  let fixture: ComponentFixture<RepositoryDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryDisplayComponent]
    });
    fixture = TestBed.createComponent(RepositoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
