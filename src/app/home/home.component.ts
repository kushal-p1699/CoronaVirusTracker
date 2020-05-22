import { Component, OnInit } from '@angular/core';
import { CovidDetailsService } from 'src/services/covid-details.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  covid_data : any;
  selected_country : string = '';
  heading : string = "world wide";
  first = 0;
  date: any;
  month: any;
  year: any;

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(
    public dialog: MatDialog,
    private _covidDetailsService : CovidDetailsService) { }
  

  // current date

  current_date: Date = new Date();
  
  //return month name
  getMonth(x): any {
    return this.months[x];
  }
  
  // image slideshow function

  slideIndex = 1;
  

  plusSlides(n) {
   this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots =  document.getElementsByClassName("dot");

    if(n > slides.length) {this.slideIndex = 1}
    if(n < 1) {this.slideIndex = slides.length}

    for(i = 0; i < slides.length; i++ ){
      slides[i].setAttribute("style", "display: none;");
    }
    for(i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].setAttribute("style", "display: block;");
    dots[this.slideIndex - 1].className += " active";

  }
  
  
  
  
    // currency format function
  convertToINR(x) : any {
    return x.toLocaleString('INR');
  }


  // open dialog 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result)
      this.selected_country = result.countryName;
      // console.log(this.selected_country);
    });
  }
  ngOnInit() {

    this.date = this.current_date.getDate();
    this.month = this.current_date.getMonth();
    this.year = this.current_date.getFullYear();

    this.showSlides(this.slideIndex);

    this._covidDetailsService.getCovidDetails().subscribe((data : any) => {
      // console.log(data);
      // this.covid_data = data.data;
      this.covid_data = data;

    });

  }

}
