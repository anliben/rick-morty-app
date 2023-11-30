import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpListComponent } from './ep-list.component';

describe('EpListComponent', () => {
  let component: EpListComponent;
  let fixture: ComponentFixture<EpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpListComponent]
    });
    fixture = TestBed.createComponent(EpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
