import { Component, inject } from '@angular/core';
import { finalize } from "rxjs/operators";
import { FileUploadService } from '../file-upload.service';
import { FileUpload } from '../models/file-upload';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(private uploadService: FileUploadService) {

  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          (percentage: any) => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    }
  }

}
