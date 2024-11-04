export interface Unittype {

    UnitTypeID: number;
    UnitTypeCode: string;
    UnitTypeDescription: string;
    UnitTypeCategory: string;
    MaximumOccupants: number;
    MaximumAdults: number;
    MaximumChildren: number;
    LocationID: number;
    UnitTypeRole: string;
    UnitCount: number;
    RecordMarkedDeleted: boolean;
    UnitTypeImageUIDs: string[];
  }
  
  export interface ApiResponse {
    payload: {
      UnitTypes: Unittype[];
    };
    error_code: number;
  }

