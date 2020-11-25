import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RequestService} from "../../services/request-service/request.service";
import {CustomRequest} from "../../models/request/custom-request";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  successMessage = '';

  constructor(private formBuilder: FormBuilder,
              private reqService: RequestService) {
  }

  ngOnInit(): void {
    this.requestForm = this.formBuilder.group({
      firstName: new FormControl('',
        [Validators.required]),

      lastName: new FormControl('',
        [Validators.required]),

      email: new FormControl('',
        [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,6}$')]),

      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern('((\\+38)?\\(?\\d{3}\\)?[\\s\\.-]?(\\d{7}|\\d{3}[\\s\\.-]\\d{2}[\\s\\.-]\\d{2}|\\d{3}-\\d{4}))')]),

      text: new FormControl('', [Validators.required])
    });
  }

  get firstName(): any {
    return this.requestForm.get('firstName');
  }

  get lastName(): any {
    return this.requestForm.get('lastName');
  }

  get email(): any {
    return this.requestForm.get('email');
  }

  get phoneNumber(): any {
    return this.requestForm.get('phoneNumber');
  }

  get text(): any {
    return this.requestForm.get('text');
  }


  onSubmit(): void {
    console.log("IN SUBMIT");
    this.successMessage = '';
    let request: CustomRequest = new CustomRequest();
    request.first_name = this.firstName.value;
    request.last_name = this.lastName.value;
    request.email = this.email.value;
    request.phone_number = this.phoneNumber.value;
    request.text = this.text.value;

    this.reqService.creteRequest(request).subscribe(() => {
        this.successMessage = 'Request has been created!';
        this.requestForm.reset();
      }
    );

  }

}
