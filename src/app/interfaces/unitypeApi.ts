import { Unittype } from "./unittype";

export interface ApiResponse {
    payload: {
      UnitTypes: Unittype[];
    };
    error_code: number;
  }