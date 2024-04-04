import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { FileUploadService } from '../services/file-upload.service';
import { Router } from '@angular/router';
import { IFichier } from '../model/ifichier';
import { IClient } from '../model/iclient';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  file!: File;
  fileUris: Array<string> = [];
  clientList?: IClient [] | null;

  fileList?: IFichier [] | null;

  constructor(private fileUploadService: FileUploadService, private router: Router) { }

  trackId = (_index: number, item: IFichier): number => this.fileUploadService.getFichierIdentifier(item);

  ngOnInit(): void {
    this.getAllFile();
    this.getAllClient();
  }

  selectFile(event: any) {
    this.file = event.target.files.item(0);
  }

  uploadFile() {
    let fileName = this.file.name;
    this.fileUploadService.upload(fileName, this.file).subscribe({
      next: (data) => {
        this.reloadPage();
        alert("File Uploaded Successfully")
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

  getAllFile() {
    this.fileUploadService.fichierList().subscribe({
      next: (data) => {
        this.fileList = data.body;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  getAllClient() {
    this.fileUploadService.getAllClient().subscribe({
      next: (data) => {
        // this.fileDetails = data;
        // this.fileUris.push(this.fileDetails.fileUri);
        console.log('>>>>>>>>>>>>>>>>> ' + data.body);
        this.clientList = data.body;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  saveClient(fichier: IFichier): void {
    // console.log('>>>>>>>>>>> ' + fichier.);
    this.fileUploadService.extractStoreClient(fichier).subscribe({
      next: (data) => {
        // this.fileDetails = data;
        // this.fileUris.push(this.fileDetails.fileUri);
        this.clientList = data;
        alert("Successfully extract, reload !")
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
