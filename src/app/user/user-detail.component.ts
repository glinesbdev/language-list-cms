import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user/user.service';
import { IUser } from 'app/user/user';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';
import { StorageManagerService } from 'app/shared/storage.manager';
import { TranslationService } from 'app/translation/translation.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userSerivce: UserService, private translationService: TranslationService, private storageManager: StorageManagerService, private route: ActivatedRoute, private router: Router) { }

  model: IUser;
  userLoaded: boolean = false;
  languagesLoaded: boolean = false;
  languages: string[] = [];

  ngOnInit() {
    let userId: number = this.route.snapshot.params['id'];
    this.userSerivce.getUser(userId).subscribe(
      user => {
        this.model = user;
        this.userLoaded = true;
      },
      error => console.error(error)
    );

    this.translationService.getLanguages().subscribe(
      languages => {
        this.languages = languages;
        this.languagesLoaded = true;
      },
      error => console.error(error)
    );
  }

  logout(): void {
    this.storageManager.deleteLogin();
    this.router.navigate(['/login']);
  }

  onSubmit(event): void {
    event.preventDefault();
    this.userSerivce.updateUser(this.model).subscribe(
      user => this.router.navigate(['/user', this.model.id]),
      error => console.error(error)
    );
  }

}
