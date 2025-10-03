import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { AddCategoryRequest } from '../../../models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  imports: [Card, ButtonModule, FormsModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.scss',
})
export class AddCategory {
  model: AddCategoryRequest;

  constructor() {
    this.model = {
      name: '',
      urlHandle: '',
    };
  }

  onFormSubmit() {
    console.log(this.model);
  }
}
