import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Segment } from 'src/app/models/segment.model';
import { SegmentsService } from 'src/app/services/segments/segments.service';

@Component({
    selector: 'app-add-segment',
    templateUrl: './add-segment.component.html',
    styleUrls: ['./add-segment.component.css']
})
export class AddSegmentComponent implements OnInit {

    FormAddSegment: FormGroup;

    ShowEmojiPicker: boolean = false;
    SelectedEmoji: any;

    constructor(
        private formBuilder: FormBuilder,
        private segmentsService: SegmentsService,
        public dialogRef: MatDialogRef<AddSegmentComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Segment[],
    ) {
        this.FormAddSegment = this.formBuilder.group({
            id: [0, []],
            title: ['', [Validators.required]],
            icon: ['', []],
            table: [[], []],
        });
    }

    ngOnInit(): void {
        let segmentLength = this.data.length;
        let lastSegment = this.data[segmentLength - 1];
        this.id.setValue(lastSegment.id + 1);
    }

    handleClickIcon(state: boolean): void {
        this.ShowEmojiPicker = !state;
    }

    handleEmojiSelect(args: any): void {
        this.icon.setValue(args.emoji.native);
        this.SelectedEmoji = args.emoji.colons;
        this.ShowEmojiPicker = false;
    }

    addTable(formAddSegment: any): void {
        formAddSegment.icon = this.SelectedEmoji;
        this.segmentsService.addNewSegment(formAddSegment);
        this.closeDialog();
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    get id(): AbstractControl { return this.FormAddSegment.get('id') as AbstractControl };
    get title(): AbstractControl { return this.FormAddSegment.get('title') as AbstractControl };
    get icon(): AbstractControl { return this.FormAddSegment.get('icon') as AbstractControl };
    get table(): AbstractControl { return this.FormAddSegment.get('table') as AbstractControl };
}
