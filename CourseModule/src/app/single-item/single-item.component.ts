import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleItemService } from './single-item.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  public itemId: any;
  public data: any;

  courseForm: FormGroup;

  constructor(private singleItemService: SingleItemService,
    private activeatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder) {
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

  getData(id: any) {
    this.singleItemService.getData(id).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }

  updateCourse() {
    this.singleItemService.patchData(this.itemId, this.data).subscribe(
      res => this.handleResponse(res),
      err => this.handleError(err),
    );
  }

  ngOnInit(): void {
    this.itemId = this.activeatedRouter.snapshot.paramMap.get("courseId");
    this.getData(this.itemId);
  }

  save() {
    // TODO: Use EventEmitter with form value
    console.warn(this.courseForm.value);
    console.log(this.courseForm.getRawValue())
    let formData = this.courseForm.value;
    this.updateCurrentData(formData);
    this.updateCourse();
  }
  updateCurrentData(formData) {
    this.data.name = formData.name;
    this.data.code = formData.code;
    this.data.blockEntry = formData.blockEntry;
    this.data.blockEntry.year = formData.blockEntry.year;
    this.data.blockEntry.month = formData.blockEntry.month;
    this.data.faculty = formData.faculty;
    this.data.capacity = formData.capacity;
    this.data.enrolled = formData.enrolled;
    this.data.description = formData.description;
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
