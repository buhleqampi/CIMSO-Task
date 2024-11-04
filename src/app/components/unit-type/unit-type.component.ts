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

  constructor(private unitTypeService: UnitTypeService) {}

  ngOnInit(): void {
    this.unitTypeService.getUnitTypes().subscribe({
      next: (data) => {
        if (data.error_code === 0) {
          this.unitTypes = data.payload.UnitTypes;
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    });
  }
}
