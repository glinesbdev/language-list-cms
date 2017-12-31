import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { UserService } from 'app/user/user.service';
import { IUser } from 'app/user/user';
import { UserModel } from './user.model';
import { StorageManagerService } from '../shared/storage.manager';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService, private storageManager: StorageManagerService) { }

  model: UserModel;
  dataLoaded: boolean = false;

  ngOnInit() {
    if (!this.storageManager.getLogin()) {
      this.router.navigate(['/login']);
    } else {
      let userId: number = this.route.snapshot.params['id'];
      this.userService.getUser(userId).subscribe(
        user => {
          let data = user.user;
          this.model = new UserModel(data.id, data.email, data.uid, data.url, data.admin, data.username);
          this.dataLoaded = true;
        },
        error => console.error(error)
      );
    }
  }

}
