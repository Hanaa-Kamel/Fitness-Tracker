import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  maxDate = new Date();
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18 ) ;

  }

  onSubmit(form :NgForm)
  {
    // console.log(form);
    this.authService.registerUser({
      email : form.value.email,
      password : form.value.password
    })
  }

}
