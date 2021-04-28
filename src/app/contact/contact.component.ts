import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  constructor(private http: HttpClient, public dialog: MatDialog) { }

sendMessageGroup = new FormGroup({
  emailName: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.email]),
  emailTitle: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(5)]),
  textareaName: new FormControl(null, [Validators.required, Validators.maxLength(80), Validators.minLength(5)])
});

httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Access-Control-Allow-Origin': '*', })
};


showDialog({message}): void{
  alert(message);
}



  sendMessage(): void{
    if (this.sendMessageGroup.valid) {
      console.log(this.sendMessageGroup.value);
      this.http.post('https://cvmail.ct8.pl/message', this.sendMessageGroup.value, this.httpOptions)
      .subscribe(this.showDialog);
    }

  }

  ngOnInit(): void {
  }

}
