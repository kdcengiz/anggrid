import { Component, OnInit } from '@angular/core';
import { DtoUser } from 'src/dto/dtoUser';
import { UserService } from 'src/services/User.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {


  rw = new DtoUser();

  constructor(_userService: UserService) {
    this.userList = _userService.getAllUser();
  }

  userList: DtoUser[];
  ngOnInit() {
  }

  rowGet(val) {
    this.rw = val;
  }


}
