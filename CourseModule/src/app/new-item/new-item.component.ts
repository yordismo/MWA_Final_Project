import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewItemService } from './new-item.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
  public data: any;

  courseForm: FormGroup;

  constructor(private newItemService: NewItemService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.courseForm = this.formBuilder.group({
      name: [''],
      code: [''],
      blockEntry: this.formBuilder.group({
        year: [''],
        month: ['']
      }),
      faculty: [''],
      capacity: [''],
      enrolled: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
  }

  save() {
    console.warn(this.courseForm.value);
    let formData = this.courseForm.value;
    console.log(formData);
    this.createNewData(formData);
    console.log(this.data);
    this.saveData();
    alert("Successfully created");
    this.router.navigateByUrl('/table-list');
  }
  saveData() {
    this.newItemService.saveData(this.data).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }
  createNewData(formData) {
    this.data = {
      name: formData.name,
      code: formData.code,
      blockEntry: {
        year: formData.blockEntry.year,
        month: formData.blockEntry.month
      },
      faculty: formData.faculty,
      capacity: formData.capacity,
      enrolled: formData.enrolled,
      description: formData.description,
    }
  }
  handleError(err: any) {
    console.log({ err });
  }
  handleResponse(res: any) {
    this.data = res;
    this.courseForm.patchValue(res);
    console.log(this.data);
  }
}
