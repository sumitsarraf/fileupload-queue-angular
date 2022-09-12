import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader.component';
import { FileUploaderService } from './file-uploader.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, AngularMaterialModule],
  declarations: [AppComponent, FileUploaderComponent],
  providers: [FileUploaderService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
