import { Component, OnInit } from '@angular/core';
import { UnitTypeService } from '../../services/unit-type.service';
import { Unittype } from '../../interfaces/unittype';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.css']
})
export class UnitTypeComponent implements OnInit {
  unitTypes: Unittype[] = [];
  loading: boolean = true;
  test: any

  unitTypeInfo: any;

  constructor(private unitTypeService: UnitTypeService) {}

  ngOnInit(): void {
    this.unitTypeService.getUnitTypeInfo().subscribe(
      data => {
        this.unitTypeInfo = data;
        console.log(data);
      },
      error => {
        console.error('Error fetching unit type info:', error);
      }
    );
  }


}
