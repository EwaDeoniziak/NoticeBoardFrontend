import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/api-models';
import { isNgTemplate } from '@angular/compiler';
import { AppService } from 'src/app/services/app.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {
  constructor(private httpService: HttpService, private appService: AppService,
    private _snackbar: MatSnackBar) {
    this.httpService.getCategories().subscribe(res => {
      this.categories = res;
      // console.log(this.categories);
    });
  }

  imgUrl: any;
  imagePath: any;
  imgURL: any[] = [];

  @ViewChild('f', {static: true}) myNgForm;
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  files: File[] = [];

  //categories
  categories: Category[] = [];

  //spinners
  addSpinnerActive = false;

  toBigImgSizeAlert = '';

  // title: string;
  // description: string;
  // price: string;

  addNoticeForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.max(25)]),
    description: new FormControl('', [Validators.required, Validators.max(500)]),
    price: new FormControl(null, [Validators.required]),
    imgs: new FormControl([]),
    categories: new FormControl(null),
    location: new FormControl('', [Validators.required]),
    type: new FormControl(1),
  });

  message = 'Ok';
  action = '';

  addNewNotice(event) {
    if (this.addNoticeForm.valid) {
      this.addSpinnerActive = true;
      const formData = new FormData();
      const title = this.addNoticeForm.get('title').value;
      const description = this.addNoticeForm.get('description').value;
      const price = this.addNoticeForm.get('price').value;
      const imgs = this.addNoticeForm.get('imgs').value;
      const location = this.addNoticeForm.get('location').value;
      let type = this.addNoticeForm.get('type').value;
      type = parseInt(type, 10);
      const categories = this.addNoticeForm.get('categories').value;
      // console.log(type)
      if (imgs.length > 0) {
        imgs.forEach(element => {
          //console.log('tu ok')
          formData.append('imgs', element, element.name);
        });
      }
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('location', location);
      formData.append('type', type);
      formData.append('categories', categories._id);

      //new Response(formData).text().then(console.log)
      //console.log(this.addNoticeForm);
      //console.log(imgs);
      // console.log(formData);
      // console.log(categories);

      this.httpService.addNotice(formData).subscribe(res => {
        //console.log(res);
        this.message = 'Twoje ogłoszenie zostało dodane!';
        //this.addNoticeForm.reset();
        //this.openSnackBar();
      }, err => {
        this.message = 'Coś poszło nie tak';
        this.openSnackBar();
      }, () => {
        this.addSpinnerActive = false;
        this.openSnackBar();
        //this.addNoticeForm.reset();
        this.imgURL = [];
      });
      event.currentTarget.reset();
    }
  }

  async onFilesSelected(event) {
    const properSize = 4500000;
    const toBigPhotoId = [];
    //const properSizeFiles = event.target.files.filter(el => el.size < properSize);
    //console.log(event.target.files[0]);
    if (event.target.files.length + this.files.length < 7) {
      for (let index = 0; index < event.target.files.length; index++) {
        // console.log(event)
        this.files.push(event.target.files[index]);
        let count = this.files.length - 1;

        if(event.target.files[index].size > properSize){
          this.toBigImgSizeAlert = 'Uwaga! Zdjęcie ' + event.target.files[index].name + ' ma zbyt duży rozmiar :(';
          setTimeout(function() {
            this.toBigImgSizeAlert = '';
          }.bind(this), 10000);
          toBigPhotoId.push(count);
          //console.log(count);
        }

        try {
          const fileContents = await this.readFile(this.files[count]);
          // console.log(fileContents);
          this.imgURL.push(fileContents);
        } catch (e) {
          console.warn(e.message);
        }
      }
    }
    // console.log('Zdjęcia wyświetlane po kolei: ' + this.imgURL);
    // console.log(this.files);
    //console.log(toBigPhotoId);
    toBigPhotoId.forEach( el => {
      this.removePhoto(el);
    });
    toBigPhotoId.slice(0,toBigPhotoId.length);
    //console.log(toBigPhotoId)
    this.files = this.files.filter(el => el.size < properSize);
    //console.log(this.files);
    this.addNoticeForm.patchValue({ imgs: this.files });
    //console.log(this.addNoticeForm.get('imgs'));
  }


  readFile(event) {
    var reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(event);
    });
  }


  removePhoto(i: number) {
    this.addNoticeForm.get('imgs').value.splice(i, 1);
    //console.log(this.addNoticeForm.get('imgs'));
    this.imgURL.splice(i, 1);
  }


  //categories
  getCategoryRightName(category: Category): string {
    return this.appService.getCategoryRightName(category);
  }


  ngOnInit() {
  }
  openSnackBar() {
    this._snackbar.open(this.message, this.action, {
      duration: 5000,
    });
  }

}
