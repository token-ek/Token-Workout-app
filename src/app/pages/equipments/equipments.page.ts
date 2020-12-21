import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { EquipmentsObject } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
})
export class EquipmentsPage implements OnInit {

  public strings = strings;
  equipments: EquipmentsObject[] = [];
  isLoading = false;

  constructor(
    private DataService: DataService
    ) { }

  ngOnInit() {

    this.isLoading = true;

    this.DataService.getDataEquipments()
    .subscribe( resp => {
      this.equipments = resp;
      this.isLoading = false;

  } );

  }

}
