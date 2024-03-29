import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,

    private authService:AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    // Required Fields
    if(!this.validateService.validateRegister(user)){
      // this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      console.log("pls fill all feilds")
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      // this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      console.log('pls enter valid email')
      return false;
    }

     // Register user
     this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        // this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
         console.log('register success')
        this.router.navigate(['/login']);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
       console.log('something went wrong')
        this.router.navigate(['/signup']);
      }
    });

    }
}
