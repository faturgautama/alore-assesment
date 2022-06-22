import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSegmentDialogComponent } from './add-segment-dialog.component';

describe('AddSegmentDialogComponent', () => {
  let component: AddSegmentDialogComponent;
  let fixture: ComponentFixture<AddSegmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSegmentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSegmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
