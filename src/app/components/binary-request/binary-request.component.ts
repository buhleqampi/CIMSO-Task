import { Component, OnInit} from '@angular/core';
import { BinaryRequestService } from '../../services/binary-request.service';

@Component({
  selector: 'app-binary-request',
  templateUrl: './binary-request.component.html',
  styleUrl: './binary-request.component.css'
})
export class BinaryRequestComponent implements OnInit {

  binaryRequest:any;

  BinaryRequest:any;

  constructor(private binaryRequestServ: BinaryRequestService) {}

  ngOnInit(): void {
      this.getbinaryRequests()
  }


  getbinaryRequests(){

    this.binaryRequestServ.getBinaryRequest().subscribe({
    next:(res_data) => {
      console.log("Binary request retrieved!!!" , res_data)
      this.BinaryRequest = res_data.error_code
    },
    error: (err) => {
      console.error('Error fetching binary request:', err);
    }
    })
  }

}
