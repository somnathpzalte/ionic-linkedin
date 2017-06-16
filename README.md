# Ionic 3 linkedin login step by step integration



	
1.Create app on ionic framework dashboard - ionic.io<br>
2.Create app on linkedin console<br>
	a.Add required fields<br>
	b.setting->redirect url =https://api.ionic.io/auth/integrations/linkedin<br>
	c.set check for r_emailaddresses<br>
	d.Goto mobile tab enter Package Name(FROM config.xml) and Hash key of machine <br>

3.create blank project<br>
4.add cloud library command=> <br>
  npm install @ionic/cloud-angular --save<br>
5.link our project to ionic framework project => ionic link and select you project<br>
6. add plugins<br>
	1.cordova plugin add cordova-plugin-inappbrowser --save<br>
	2.cordova plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID<br>

7.Link Linkedin to ionic dashboard<br>
	a.Goto your ionic project dashboard<br>
	b.Settings<br>
	c.User Auth<br>
	d.Linkedin->SETUP<br>
	e.enter Client Id and Client Secret of your linkedin app<br>

8.app.module.ts<br>
	add below code-<br>

	a.import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

	b.const cloudSettings: CloudSettings = {
	  'core': {
	      'app_id': 'XXXXXX' //ionic app id
	  }
	}
	c.add code in imports array<br>
	 CloudModule.forRoot(cloudSettings)




9.Home.html<br>
	a.create button as follows in html file<br>
	<button ion-button (click)="login()"> Login with linkedin</button><br>

10.home.ts<br>
	a.import <br>
	-import { Auth, User } from '@ionic/cloud-angular';<br>
	b.change your constructor<br>
	 constructor(public navCtrl: NavController,public auth: Auth, public user: User) {}<br>
	c.create function login<br>

	login(){  	
  		this.auth.login('linkedin').then((success)=>{
  			alert('Logged In');
  		});
  	}
<br>
11.Run your project<br>
	<br>
Important Links<br>
http://docs.ionic.io/services/auth/<br>
https://apps.ionic.io/apps/
