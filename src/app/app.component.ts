import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { AddSegmentComponent } from './components/add-segment/add-segment.component';
import { Segment } from './models/segment.model';
import { SegmentsService } from './services/segments/segments.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    SegmentDatasource: Segment[];

    @ViewChild('drawer') drawer?: MatDrawer;

    constructor(
        public dialog: MatDialog,
        private segmentService: SegmentsService,
    ) {
        this.drawer?.toggle();

        this.SegmentDatasource = this.segmentService.SegmentDatasource.getValue();
    }

    ngOnInit(): void {

    }

    handleOpenDialog(): void {
        const dialogRef = this.dialog.open(AddSegmentComponent, {
            width: '35rem',
            data: this.SegmentDatasource
        });
    }
}
