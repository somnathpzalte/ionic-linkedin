import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	
  constructor(public navCtrl: NavController,public auth: Auth, public user: User) {

  }

  login(){  	
  		this.auth.login('linkedin').then((success)=>{
  			const full_name = this.user.social.linkedin.data.full_name;
        const profile_picture = this.user.social.linkedin.data.profile_picture;
        const uid = this.user.social.linkedin.uid;
        const linkedin_raw_data = this.user.social.linkedin.data.raw_data;
        alert("Hello "+full_name+" your id is:"+uid);
        
        alert(profile_picture);
        alert(linkedin_raw_data);
  		});
  }
  logout(){
    this.auth.logout();
  }
  

}
