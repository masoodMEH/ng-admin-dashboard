import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-add-category',
  imports: [RouterLink, Card, ButtonModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.scss',
})
export class AddCategory {}
