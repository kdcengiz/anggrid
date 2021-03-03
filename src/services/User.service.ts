import { Injectable } from '@angular/core';
import { DtoUser } from 'src/dto/dtoUser';

@Injectable()
export class UserService {
    userList: DtoUser[]=[];
    constructor() {
        let usr = new DtoUser();
        usr.id  = 1;
        usr.ad="Kadir";
        usr.soyad="cengiz";
        usr.email="kadir@cengiz";
        usr.kayitTarihi=new Date();
        usr.aktif=true;
        this.userList.push(usr);
        
        let usr2 = new DtoUser();
        usr2.id  = 2;
        usr2.ad="ferhat";
        usr2.soyad="cengiz";
        usr2.email="ferhat@cengiz";
        usr2.kayitTarihi=new Date();
        usr2.aktif=true;
        this.userList.push(usr2);

        let usr3 = new DtoUser();
        usr3.id  = 3;
        usr3.ad="asaf";
        usr3.soyad="cengiz";
        usr3.email="asaf@cengiz";
        usr3.kayitTarihi=new Date();
        usr3.aktif = false;
        this.userList.push(usr3);

     }

    addUser(val: DtoUser){
        this.userList.push(val);
    }

    getUser(val:number) : DtoUser {
        return this.userList.find(x=> x.id==val);
    }

    getAllUser():DtoUser[]{
        return this.userList;
    }

}
