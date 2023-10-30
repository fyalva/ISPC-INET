import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userLoginOn: boolean = false;
  userData?: User;
  private destroy$ = new Subject<void>();

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.currentUserLoginOn
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (userLoginOn) => {
          this.userLoginOn = userLoginOn;
          console.log('User login status:', userLoginOn);
        }
      });
  
    this.loginService.currentUserData
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (userData) => {
          this.userData = userData;
          console.log('User data:', userData);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}



