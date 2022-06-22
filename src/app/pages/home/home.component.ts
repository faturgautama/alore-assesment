import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/models/segment.model';
import { SegmentsService } from 'src/app/services/segments/segments.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    SegmentDatasource: Segment[];

    constructor(
        private segmentService: SegmentsService,
    ) {
        this.SegmentDatasource = this.segmentService.SegmentDatasource.getValue();

        console.log(this.SegmentDatasource);
    }

    ngOnInit(): void {
    }

    addEmoji(args: any): void {
        console.log(args);
    }
}   
