import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SegmentListComponent } from './components/segment-list/segment-list.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { AddSegmentDialogComponent } from './components/segment-list/add-segment-dialog/add-segment-dialog.component';
import { AddSegmentComponent } from './components/add-segment/add-segment.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        SegmentListComponent,
        TableListComponent,
        AddSegmentDialogComponent,
        AddSegmentComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatSidenavModule,
        PickerModule,
        EmojiModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
