# ionic-linkedin
Ionic 3 linkedin login step by step integration


	
1.Create app on ionic framework dashboard - ionic.io
2.Create app on linkedin console
	a.Add required fields
	b.setting->redirect url =https://api.ionic.io/auth/integrations/linkedin
	c.set check for r_emailaddresses
	d.Goto mobile tab enter Package Name(FROM config.xml) and Hash key of machine 

3.create blank project
4.add cloud library command=> npm install @ionic/cloud-angular --save
5.link our project to ionic framework project => ionic link and select you project
6. add plugins
	1.cordova plugin add cordova-plugin-inappbrowser --save
	2.cordova plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID

7.Link Linkedin to ionic dashboard
	a.Goto your ionic project dashboard
	b.Settings
	c.User Auth
	d.Linkedin->SETUP
	e.enter Client Id and Client Secret of your linkedin app

8.app.module.ts
	add below code-

	a.import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

	b.const cloudSettings: CloudSettings = {
	  'core': {
	      'app_id': 'XXXXXX' //ionic app id
	  }
	}
	c.add code in imports array
	 CloudModule.forRoot(cloudSettings)




9.Home.html
	a.create button as follows in html file
	<button ion-button (click)="login()"> Login with linkedin</button>

10.home.ts
	a.import 
	-import { Auth, User } from '@ionic/cloud-angular';
	b.change your constructor
	 constructor(public navCtrl: NavController,public auth: Auth, public user: User) {}
	c.create function login

	login(){  	
  		this.auth.login('linkedin').then((success)=>{
  			alert('Logged In');
  		});
  	}

11.Run your project
	
Important Links
http://docs.ionic.io/services/auth/
https://apps.ionic.io/apps/
