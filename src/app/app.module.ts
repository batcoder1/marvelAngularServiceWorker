import { ComicService } from './services/comic.service';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule,
  MdToolbarModule, MdListItem, MdIconModule, MdMenuModule, MdTabsModule, MdDialogContainer, MdSelectModule,
  MdProgressSpinnerModule, MdSliderModule, MdRadioModule, MdDatepickerModule, MdNativeDateModule, DateAdapter,
  MD_DATE_FORMATS, MdProgressBarModule, MdSidenavModule, MdExpansionModule, MdSlideToggleModule, MdTooltipModule,
  MdDialogModule, MdDialogRef, MdSidenav, MdInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule, MdSliderModule,
    MdToolbarModule, MdIconModule, MdMenuModule, MdTabsModule, MdRadioModule,
    MdSelectModule, MdDialogModule, MdProgressSpinnerModule, MdDatepickerModule, MdInputModule,
    ReactiveFormsModule, FormsModule, MdNativeDateModule, MdProgressBarModule,
    MdSidenavModule, MdExpansionModule, MdSlideToggleModule, MdTooltipModule

  ],
  exports: [
    FormsModule,
    MdButtonModule, MdCheckboxModule, MdListModule, MdCardModule, MdMenuModule, MdSliderModule,
    MdToolbarModule, MdIconModule, MdTabsModule, MdDialogModule, MdSelectModule, MdRadioModule,
    MdProgressSpinnerModule, MdDatepickerModule, MdNativeDateModule,
    MdInputModule, MdProgressBarModule, MdSidenavModule, MdExpansionModule, MdSlideToggleModule, MdTooltipModule
  ],
  providers: [ComicService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
