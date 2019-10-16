import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {UserDetailComponent} from "../../../user/user-detail/user-detail.component";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../user/user.service";
import {User} from "../../../user/user";

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './admin-user-details.component.html',
  styleUrls: ['./admin-user-details.component.scss']
})
export class AdminUserDetailsComponent implements OnInit  {
  protected user: User;
  protected id: number;

  constructor(protected activatedRouter: ActivatedRoute,
              protected userService: UserService) {
    this.getUser();
  }

  protected getUser() {
    this.id = +this.activatedRouter.snapshot.paramMap.get('id');
    this.userService.getUserForAdmin(Number(this.id)).subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {

  }



}