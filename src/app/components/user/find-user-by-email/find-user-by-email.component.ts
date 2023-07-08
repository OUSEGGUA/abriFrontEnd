import { Component } from '@angular/core';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-find-user-by-email',
  templateUrl: './find-user-by-email.component.html',
  styleUrls: ['./find-user-by-email.component.css']
})
export class FindUserByEmailComponent {
  user: User = {
    firstName: '',
    lastName: '',
    cin: '',
    email:''

  };
  email : string = "fadili@fadili.com";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.retrieveUser();
  }
  retrieveUser() {
    this.userService.getByEmail(this.email)
    .subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  
}
