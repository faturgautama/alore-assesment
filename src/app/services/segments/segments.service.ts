import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Segment } from 'src/app/models/segment.model';

@Injectable({
    providedIn: 'root'
})
export class SegmentsService {

    SegmentDatasource = new BehaviorSubject<Segment[]>([
        {
            id: 1,
            title: 'Segment 1',
            icon: ':santa:',
            table: [
                {
                    id: 11,
                    title: 'Table 11',
                    color: '#dddddd',
                    icon: ':santa:'
                }
            ]
        }
    ]);

    constructor() {
    }

    addNewSegment(data: Segment): void {
        const current: Segment[] = this.SegmentDatasource.getValue();
        current.push(data);
        this.SegmentDatasource.next(current);
    }
}
