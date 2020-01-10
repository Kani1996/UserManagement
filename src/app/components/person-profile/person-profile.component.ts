import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.scss']
})
export class PersonProfileComponent implements OnInit {
  public createPersonForm
  constructor(private contactService : ContactService,private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.createPersonForm.controls[controlName].hasError(errorName);
  }
  public createForm() {
    this.createPersonForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]+$")]),
      lastName: new FormControl('', [ Validators.pattern("^[a-zA-Z0-9 ]+$")]),
      mobileNumber: new FormControl('', [Validators.minLength(10), Validators.pattern("[0-9]+")]),
      emailId: new FormControl('', [Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"), Validators.maxLength(255)])
    })
  }
  public savePerson(PersonForm : any){
     console.log("savePerson:::",this.createPersonForm.value);
     this.contactService.addContacts(this.createPersonForm.value).subscribe((data: any) => {
      try {
        if (data != undefined) {
          this.router.navigate(['/home']);
        }
      }catch(ex){
         console.log(ex);
      }
    });
  }
}
