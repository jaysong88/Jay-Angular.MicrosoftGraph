import { Component } from '@angular/core';
import { User, UpdatedUserInformation } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { KurveService } from './services/kurve.service';
import { MSALService } from './services/msal.service';

@Component({
    selector : 'my-user',
    providers : [KurveService, UserService, MSALService],
    template : `
    <h1>{{ Name }}</h1>
    <button (click)="login()">Login</button>
    <button (click)="getAccessToken()">Get Token</button>
    <button (click)="toggleUser()">{{ anyUser ? 'Hide User Informaton' : 'Show User Information' }}</button>
    <div *ngIf="anyUser">
        <button (click)="getUserInformation()">Get User Information</button>
        <button (click)="getCurrentUserManager()">Get User Manager</button>
        <button (click)="getAllUsers()">Get All Users</button>
        <button (click)="createNewUser()">Create New User</button>
        <button (click)="deleteUser()">Delete User</button>
        <button (click)="updateUser()">Update User</button>
    </div>
    <div>
        Access Token: {{ accessToken }}
    </div>
    <div *ngIf="anyUser">
        <div>
            <h3>Current User</h3>
            <ul>
                <li>Display Name: {{ user.displayName}} </li>
                <li>GivenName: {{ user.givenName}} </li>
                <li>Surname: {{ user.surname}} </li>
                <li>User Principal Name: {{ user.userPrincipalName}} </li>
            </ul>
        </div>
        <div>
            <h3>Current User's Manager</h3>
            <ul>
                <li>Display Name: {{ manager.displayName}} </li>
                <li>GivenName: {{ manager.givenName}} </li>
                <li>Surname: {{ manager.surname}} </li>
                <li>manager Principal Name: {{ manager.userPrincipalName}} </li>
            </ul>
        </div>
        <div>
            <h3>ALL Users</h3>
            <ul *ngFor="let user of users">
                <li>Display Name: {{ user.displayName}} </li>
                <li>GivenName: {{ user.givenName}} </li>
                <li>Surname: {{ user.surname}} </li>
                <li>User Principal Name: {{ user.userPrincipalName}} </li>
            </ul>
        </div>
    </div>
    `,
    styleUrls: [ './styles/main.css' ]
})

export class UserComponent {
    anyUser: boolean = false;
    accessToken: string;
    currentUser: any;
    Name: string = 'User Information';
    users: User [];
    user: User = {displayName: '', givenName: '', surname: '', userPrincipalName: '', accountEnabled: true,
    passwordProfile: { password: 'Sz1988518' }, mailNickname: '' };
    manager: User = {displayName: '', givenName: '', surname: '', userPrincipalName: '', accountEnabled: true,
    passwordProfile: { password: 'Sz1988518' }, mailNickname: '' };

    constructor(private _kurveService: KurveService, private _userService: UserService, private _msalService: MSALService) {

    }

    login () {
        this._msalService.login();
    }

    getUserInformation() {
        this._userService.getCurrentUserInformaion(localStorage.getItem('accessToken')).subscribe(res => {
                    this.user = res.json();
                    console.log(res.json());
                });
    }

    getCurrentUserManager() {
        this._userService.getCurrentUserManager(localStorage.getItem('accessToken')).subscribe(res => {
                    this.manager = res.json();
                });
    }

    getAllUsers() {
        this._userService.getAllUsers(localStorage.getItem('accessToken')).forEach(res => {
            this.users = res.json().value;
        });
    }

    createNewUser() {
        let newUser: User = { displayName: 'Jay Song', givenName: 'Song', surname: 'Jay',
        userPrincipalName: 'jay.song@SPE178564.onmicrosoft.com', accountEnabled: true,
        passwordProfile: { password: 'Sz1988518' }, mailNickname: 'JaySong' };
        this._userService.createNewUser(localStorage.getItem('accessToken'), JSON.stringify(newUser)).subscribe(res => {
            if ( res.status == 201) {
                console.log('User is created successfully');
                console.log(res.json());
            }
        });
    }

    updateUser() {
        let updatedUser: UpdatedUserInformation = {city: 'Sydney', state: 'NSW', country: 'Australia', jobTitle: 'IT Developer'};
        this._userService.updateUser(localStorage.getItem('accessToken'), JSON.stringify(updatedUser)).subscribe(res => {
            if ( res.status == 204) {
                console.log('User is updated successfully');
            }
        });
    }

    deleteUser() {
        this._userService.deleteUser(localStorage.getItem('accessToken'), '52adb0c3-e65a-4dbe-a05f-87d12f044175').subscribe(res => {
            if ( res.status == 204) {
                console.log('User is deleted successfully');
            }
        });
    }

    getAccessToken() {
        this.accessToken = localStorage.getItem('accessToken');
        /*
        this._msalService.getToken().then((accessToken: any) => {
                this.accessToken = accessToken;
            });
            */
    }

    toggleUser() {
        if (this.anyUser) {
            this.anyUser = false;
        }else {
            this.anyUser = true;
        }
    }

}

