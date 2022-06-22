import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Segment } from 'src/app/models/segment.model';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
    selector: 'app-add-segment-dialog',
    templateUrl: './add-segment-dialog.component.html',
    styleUrls: ['./add-segment-dialog.component.css']
})
export class AddSegmentDialogComponent implements OnInit {

    FormAddTable: FormGroup;

    ShowEmojiPicker: boolean = false;
    SelectedEmoji: any;

    ColorDatasource: any[] = [
        'rgba(207, 223, 255, 1)', 'rgba(156, 199, 255, 1)', 'rgba(45, 127, 249, 1)', 'rgba(0, 103, 255, 1)', 'rgba(0, 84, 209, 1)',

        'rgba(208, 240, 253, 1)', 'rgba(119, 209, 243, 1)', 'rgba(24, 191, 255, 1)', 'rgba(64, 131, 172, 1)', 'rgba(11, 118, 183, 1)',

        'rgba(194, 245, 233, 1)', 'rgba(114, 221, 195, 1)', 'rgba(32, 217, 210, 1)', 'rgba(123, 200, 195, 1)', 'rgba(6, 160, 155, 1)',

        'rgba(255, 179, 200, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 140, 173, 1)', 'rgba(255, 0, 73, 1)', 'rgba(218, 2, 64, 1)',

        'rgba(255, 227, 175, 1)', 'rgba(255, 214, 140, 1)', 'rgba(255, 197, 92, 1)', 'rgba(253, 178, 43, 1)', 'rgba(232, 149, 0, 1)',

        'rgba(255, 159, 242, 1)', 'rgba(254, 103, 233, 1)', 'rgba(246, 56, 220, 1)', 'rgba(255, 0, 220, 1)', 'rgba(214, 0, 184, 1)',

        'rgba(255, 181, 152, 1)', 'rgba(255, 158, 121, 1)', 'rgba(255, 120, 68, 1)', 'rgba(255, 71, 0, 1)', 'rgba(197, 55, 0, 1)',

        'rgba(175, 181, 255, 1)', 'rgba(142, 150, 255, 1)', 'rgba(107, 118, 255, 1)', 'rgba(49, 64, 255, 1)', 'rgba(0, 19, 255, 1)',

        'rgba(131, 204, 139, 1)', 'rgba(97, 199, 108, 1)', 'rgba(32, 201, 51, 1)', 'rgba(0, 181, 20, 1)', 'rgba(51, 138, 23, 1)',

        'rgba(238, 238, 238, 1)', 'rgba(204, 204, 204, 1)', 'rgba(172, 172, 172, 1)', 'rgba(102, 102, 102, 1)', 'rgba(68, 68, 68, 1)'
    ];

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<AddSegmentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Segment,
    ) {
        this.FormAddTable = this.formBuilder.group({
            id: [0, []],
            title: ['', [Validators.required]],
            icon: ['', [Validators.required]],
            color: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        let segmentTableLength = this.data.table.length;
        let lastTable = this.data.table[segmentTableLength - 1];
        this.id.setValue(lastTable.id + 1);
    }

    handleClickIcon(state: boolean): void {
        this.ShowEmojiPicker = !state;
    }

    handleEmojiSelect(args: any): void {
        this.icon.setValue(args.emoji.native);
        this.SelectedEmoji = args.emoji.colons;
        this.ShowEmojiPicker = false;
    }

    addTable(formAddTable: any): void {
        formAddTable.icon = this.SelectedEmoji;
        this.data.table.push(formAddTable);
        this.closeDialog();
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    get id(): AbstractControl { return this.FormAddTable.get('id') as AbstractControl };
    get title(): AbstractControl { return this.FormAddTable.get('title') as AbstractControl };
    get icon(): AbstractControl { return this.FormAddTable.get('icon') as AbstractControl };
    get color(): AbstractControl { return this.FormAddTable.get('color') as AbstractControl };
}
