import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matLockOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-home',
  imports: [NgIcon, CardModule, ButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  viewProviders: [provideIcons({ matLockOutline })],
})
export class Home {}
