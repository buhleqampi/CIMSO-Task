import { Component, OnInit, Input} from '@angular/core';
import { BinaryRequestService } from '../../services/binary-request.service';

@Component({
  selector: 'app-binary-request',
  templateUrl: './binary-request.component.html',
  styleUrl: './binary-request.component.css'
})
export class BinaryRequestComponent implements OnInit {

  @Input() objectId: string = '';
  imageDataUrl: string | null = null;

  binaryRequest:any;

  BinaryRequest:any;

  constructor(private binaryRequestServ: BinaryRequestService) {}

  ngOnInit(): void {
      this.getbinaryRequests()
  }


  getbinaryRequests(){

    if(this.objectId) {

      this.binaryRequestServ.getBinaryRequest(this.objectId).subscribe(
        (response) => {
          if (response && response.payload) {

            this.imageDataUrl = `data:image/jpeg;base64, ${response.payload}`;
          }
          },
          (error) => {
            console.error('Error fetching binary request:', error);
          }
        );
      }
    }
}
