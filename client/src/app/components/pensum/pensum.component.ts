import { Component, OnInit } from '@angular/core';
import { AppsService} from '../../services/apps.service';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  listaPensum:any=[];

  constructor(private appsService: AppsService) { }

  ngOnInit(){
    this.appsService.cargarPensum().subscribe(
      res => {
        this.listaPensum=res;
      },
      err => console.log(err)
    );
  
  }

}
