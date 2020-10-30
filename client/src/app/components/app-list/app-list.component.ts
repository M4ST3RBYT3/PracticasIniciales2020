import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/models/App';

import { AppsService } from '../../services/apps.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  publicaciones: any = [];

  constructor(private appsService: AppsService) { }

  ngOnInit() {
    this.appsService.getPublicaciones().subscribe(
      res => {
        this.publicaciones = res;
      },
      err => console.error(err)
    );
  }

}
