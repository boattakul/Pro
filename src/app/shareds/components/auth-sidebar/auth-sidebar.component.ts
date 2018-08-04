import { Component, OnInit } from '@angular/core';
import { AppURL } from '../../../app.url';
import { AuthURL } from '../../../authentication/authentication.url';

@Component({
    selector: 'app-auth-sidebar',
    templateUrl: './auth-sidebar.component.html',
    styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    AppURL = AppURL;
    AuthURL = AuthURL;
}
