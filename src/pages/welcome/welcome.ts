import { Component } from '@angular/core';
import { App, IonicPage, NavController, ToastController, LoadingController, ViewController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../providers";
import { UsersPage } from "../users-lists/users_lists";
import { HomePage } from "../home-page/home-page";
import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})

export class WelcomePage {

    form: FormGroup;
    isReadyToSave: boolean;
    falsemsg: string;

    // @ViewChild(Nav) nav: Nav;
    pages: any[] = [
        { title: 'Users Lists', component: 'UsersPage' }
    ];

    account: { email: string, password: string } = {
        email: '',
        password: ''
    };

    private signinErrorString: string;

    isLoggedIn() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();

        this.storage.get('token').then((value) => {
            this.user.checkAuthentication(value).then((resp) => {
                loading.dismiss();
                this.navCtrl.setRoot(UsersPage);
            }, (err) => {
                loading.dismiss();
            });
        });
    }

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController,
        public translateService: TranslateService,
        public loadingCtrl: LoadingController,
        public formBuilder: FormBuilder,
        public viewCtrl: ViewController,
        public app: App,
        public user: User,
        public storage: Storage
    ) {

        this.isLoggedIn();

        this.form = formBuilder.group({
            user_name: ['', Validators.required],
            user_pass: ['', Validators.required]
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

        this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
            this.signinErrorString = value;
        })

        this.falsemsg = "Welcome !";
    }

    signIn() {
        if (!this.form.valid) {
            let toast = this.toastCtrl.create({
                message: "Email and password both are required to Sign In.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        else {
            let loading = this.loadingCtrl.create({
                content: 'Signing in...'
            });
            loading.present();
            this.user.login(this.account).subscribe((resp) => {
                loading.dismiss();
                this.navCtrl.setRoot(HomePage);
            }, (err) => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: "Oops ! some issues has occured. Please try again later!",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    }

}
