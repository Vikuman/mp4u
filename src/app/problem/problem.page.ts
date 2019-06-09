import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-problem',
  templateUrl: './problem.page.html',
  styleUrls: ['./problem.page.scss'],
})




export class ProblemPage implements OnInit {

  lat : number;
  long : number;


  constructor(public alertController: AlertController,public toastController: ToastController,private geolocation: Geolocation,private route: ActivatedRoute,public router: Router) {}


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Submit',
      message: 'Have You Checked All The Details ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
            this.presentToast();

          }
        }
      ]
    });

    await alert.present();
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Problem Has Been Reported',
      duration: 2500
    });
    toast.present();
    this.router.navigate(['tabs/home']);


  }

  async getgeolocation(){


  this.geolocation.getCurrentPosition().then((resp) => {
 this.lat = resp.coords.latitude
 this.long = resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
});

}


// async impick(){
//
// //   options = {
// //     // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
// //     // selection of a single image, the plugin will return it.
// //     maximumImagesCount: int,
// //
// //     // max width and height to allow the images to be.  Will keep aspect
// //     // ratio no matter what.  So if both are 800, the returned image
// //     // will be at most 800 pixels wide and 800 pixels tall.  If the width is
// //     // 800 and height 0 the image will be 800 pixels wide if the source
// //     // is at least that wide.
// //     width: int,
// //     height: int,
// //
// //     // quality of resized image, defaults to 100
// //     quality: int (0-100),
// //
// //     // output type, defaults to FILE_URIs.
// //     // available options are
// //     // window.imagePicker.OutputType.FILE_URI (0) or
// //     // window.imagePicker.OutputType.BASE64_STRING (1)
// //     outputType: int
// // };
//
//   this.imagePicker.getPictures(options).then((results) => {
//   for (var i = 0; i < results.length; i++) {
//       console.log('Image URI: ' + results[i]);
//   }
// }, (err) => { });
//
// }




ngOnInit() {

}

}
