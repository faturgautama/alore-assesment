import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Segment } from 'src/app/models/segment.model';
import { Table } from 'src/app/models/table.model';
import { AddSegmentDialogComponent } from './add-segment-dialog/add-segment-dialog.component';

@Component({
    selector: 'app-segment-list',
    templateUrl: './segment-list.component.html',
    styleUrls: ['./segment-list.component.css']
})
export class SegmentListComponent implements OnInit {

    @Input('SegmentDatasource') SegmentDatasource: Segment[]

    constructor(
        public dialog: MatDialog
    ) {
        this.SegmentDatasource = [];
    }

    ngOnInit(): void {
    }

    handleAddTable(item: Segment): void {
        this.handleOpenDialog(item);
    }

    handleOpenDialog(data: Segment): void {
        const dialogRef = this.dialog.open(AddSegmentDialogComponent, {
            width: '35rem',
            data: data
        });
    }
}
