import { Component, OnInit } from '@angular/core';
import { UnitTypeService } from '../../services/unit-type.service';
import { Unittype } from '../../interfaces/unittype';
import { ActivatedRoute } from '@angular/router';
import { BinaryRequestService } from '../../services/binary-request.service';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.css']
})
export class UnitTypeComponent implements OnInit {

  unitTypes: Unittype[] = [];

  

  constructor(private unitTypeService: UnitTypeService,  private binaryRequestService: BinaryRequestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUnitTypes();
  }

  getOne() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  // getUnitTypes() {
  //   this.unitTypeService.getUnitTypeInfo().subscribe({
  //     next: (res_data) => {
  //       console.log("Unit Type Info Data Retrieved!!! ", res_data.payload["Unit Types"]);
  //       this.unitTypes = res_data.payload["Unit Types"]; 
  //     },
  //     error: (err) => {
  //       console.error('Error fetching unit type info:', err);
  //     }
  //   });
  // }
  getUnitTypes() {
    this.unitTypeService.getUnitTypeInfo().subscribe({
      next: (res_data) => {
        this.unitTypes = res_data.payload["Unit Types"];
        this.unitTypes.forEach((unitType) => {
          if (unitType['Unit Type Image UIDs'] && unitType['Unit Type Image UIDs'].length > 0) {
            this.fetchImagesForUnitType(unitType);
          }
        });
      },
      error: (err) => {
        console.error('Error fetching unit type info:', err);
      }
    });
  }

fetchImagesForUnitType(unitType: Unittype) {
  unitType.images = unitType.images || []; 
  unitType['Unit Type Image UIDs'].forEach((imageUID: string) => {
    this.binaryRequestService.getBinaryRequest(imageUID).subscribe({
      next: (response: any) => {
        const imageUrl = `data:image/jpeg;base64,${response}`;
        unitType.images!.push(imageUrl); 
      },
      error: (error) => {
        console.error('Error fetching binary request for UID:', imageUID, error);
      }
    });
  });
}

}




