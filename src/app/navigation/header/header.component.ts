import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input()
  sidenavElement: MatSidenav;
  private isAuth = false;
  private isauthSubscription: Subscription;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.isauthSubscription = this._authService.authChange.subscribe(
      authstatus => this.isAuth = authstatus
    );
  }

  ngOnDestroy() {
    this.isauthSubscription.unsubscribe();
  }
}
