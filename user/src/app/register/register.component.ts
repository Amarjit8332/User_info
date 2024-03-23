import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
ngOnInit(): void {
 
}
constructor(private service:RegisterService){}
user:User=new User();

message: any;
public registerNow(){
  let response=this.service.doregistration(this.user);
  //this line is used to assign the response
  response.subscribe((data:any)=>this.message=data);
}
register(): void {
  this.service.doregistration(this.user).subscribe(
    (data) => {
      console.log('Success:', data);
      // Show success message, navigate, or any other action after successful registration
    },
    (error) => {
      console.error('Error:', error);
      // Handle error, display error message, prevent further actions, etc.
    }
  );
}

}
