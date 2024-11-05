import { Component, OnInit } from '@angular/core';
import { UnitTypeService } from '../../services/unit-type.service';
import { Unittype } from '../../interfaces/unittype';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.css']
})
export class UnitTypeComponent implements OnInit {
  // unitTypes: Unittype[] = [];
  // loading: boolean = true;
  // test: any
  unitTypes:any;

  unitTypeInfo: any;

  constructor(private unitTypeService: UnitTypeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUnitTypes()

  }

  getOne(){
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
  }

  getUnitTypes(){

  this.unitTypeService.getUnitTypeInfo().subscribe({
  next:(res_data) => {
  console.log("Unit Type Info Data Retrieved!!! ", res_data)
  this.unitTypeInfo = res_data.error_code
  },
  error: (err) => {
  console.error('Error fetching unit type info:', err);
  }

  })

  }
  }


