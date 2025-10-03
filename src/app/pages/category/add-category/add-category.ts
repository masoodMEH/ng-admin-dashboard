import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { AddCategoryRequest } from '../../../models/add-category-request.model';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, Card, ButtonModule, FormsModule, InputTextModule, FloatLabel],
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
