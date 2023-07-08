import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user/user.module';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = {
    firstName: '',
    lastName: '',
    cin: ''

  };
  
  isOwner: boolean = false;

  submitted = false;

  constructor(private userService: UserService) { }

  saveUser(): void {
    this.userService.create(this.user, this.isOwner)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)

      });
    }


    
  newUser(): void {
    this.submitted = false;
    this.user = {
      firstName: '',
      lastName: '',
      cin: ''
    }
  }
    /*console.log('Your form data : ', myForm.value );
   /*this.announceService.createUser(this.announce)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
        
      })*/

}
