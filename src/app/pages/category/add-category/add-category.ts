import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AddCategoryRequest } from '../../../models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, Card, ButtonModule, FormsModule, InputTextModule],
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
