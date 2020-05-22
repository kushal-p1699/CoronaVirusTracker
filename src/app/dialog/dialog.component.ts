import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { CovidDetailsService } from 'src/services/covid-details.service';
// export interface DialogData {
//   selectedCountry : string; 
// }

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  public dialogForm: FormGroup;
  public submitted = false;
  public covid_data: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : string,
    private _covidDetailsService : CovidDetailsService

  ) { }

  onClickCancel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.dialogForm = this.formBuilder.group({
      countryName: [ '', Validators.required ],
    });

    this._covidDetailsService.getCovidDetails().subscribe((data: any) => {
      this.covid_data = data;
    });
  }

  getCountryName() {
    this.data = this.dialogForm.value;
    this.dialogRef.close(this.data);
    // console.log(this.selectedCountry);
  }


}
