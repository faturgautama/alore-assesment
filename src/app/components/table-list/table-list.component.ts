import { Component, Input, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    @Input('Table') TableDatasource: Table;

    constructor() {
        this.TableDatasource = {
            id: 1,
            title: 'Smile',
            color: '#ddssdd',
            icon: ':smiley:'
        }
    }

    ngOnInit(): void {
    }

}
