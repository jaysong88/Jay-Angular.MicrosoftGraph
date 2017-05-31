import { Component } from '@angular/core';
import { Message, MailFolder } from './interfaces/mail.interface';
import { MSALService } from './services/msal.service';
import { MailService } from './services/mail.service';

@Component({
  selector: 'my-mail',
  providers : [MSALService, MailService],
  template: `
    <h1>Mail Information</h1>
    <div>
        <button (click)="login()">Login</button>
        <button (click)="getMails()">Get Mails</button>
        <button (click)="createMessage()">Create Message</button>
        <button (click)="getAllMailFolders()">Get All Mail Folders</button>
        <button (click)="createMailFolder()">Create Mail Folder</button>
    </div>
    <div *ngIf="anyMail">
        <div>
            <h3>All Mails</h3>
            <ul *ngFor="let mail of mails">
                <li>subject: {{ mail.subject }} </li>
                <li>Body: {{ mail.body.content }} </li>
                <li>SentDateTime: {{ mail.sentDateTime }} </li>
            </ul>
        </div>
    </div>
    <div *ngIf="anyMailFolder">
        <div>
            <h3>All Mail Folder</h3>
            <ul *ngFor="let folder of mailFolders">
                <li>Name: {{ folder.displayName }} </li>
                <li>id: {{ folder.id }} </li>
            </ul>
        </div>
    </div>
  `,
  styleUrls: [ './styles/main.css' ]
})
export class MailComponent  {
    anyMail: boolean = false;
    anyMailFolder: boolean = false;
    mails: Message[];
    mailFolders: MailFolder[];

    constructor ( private _msalService: MSALService, private _mailService: MailService) {
    }

    login () {
        this._msalService.login();
    }

    getMails() {
        this._mailService.getAllMessages(localStorage.getItem('accessToken')).forEach( res => {
            this.anyMail = true;
            console.log(res.json());
            this.mails = res.json().value;
        });
    }

    createMessage() {
        let message: Message = {} as Message;
        message.body = {} as any;
        message.sentDateTime = new Date().toJSON();
        message.receivedDateTime = new Date().toJSON();
        message.hasAttachments = false;
        message.subject = 'testing message';
        message.body.content = 'this is a testing message';
        message.body.contentType = 'html';
        this._mailService.createMessage(localStorage.getItem('accessToken'), JSON.stringify(message)).subscribe( res => {
            console.log('Message is created successfully');
        });
    }

    getAllMailFolders() {
        this._mailService.getAllMailFolders(localStorage.getItem('accessToken')).forEach( res => {
            this.anyMailFolder = true;
            console.log(res.json());
            this.mailFolders = res.json().value;
        });
    }

    createMailFolder() {
        let mailFolder: MailFolder = {} as MailFolder;
        mailFolder.displayName = 'Test Folder 1';
        this._mailService.createMailFolder(localStorage.getItem('accessToken'), JSON.stringify(mailFolder)).subscribe( res => {
            console.log('Mail folder is created successfully');
        }, (error: any) => {
                console.log(error._body);
            });
    }


}


