import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
     
    }), error =>{
      console.log(error);
    
    }    
    
  }

  logout(){
    this.accountService.logout();
   
  }


  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
 
  }

}
