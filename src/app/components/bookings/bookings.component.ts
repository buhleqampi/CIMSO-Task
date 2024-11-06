import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { Bookings } from '../../interfaces/bookings';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
  })
export class BookingsComponent {
  allBookings: Bookings[] = [];
  filteredBookings: Bookings[] =  []
  unitTypeId!:number

  constructor(private bookingService: BookingsService ,  private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getBookingData()
    this.getId()

  }


  getId(){
      this.unitTypeId = Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.unitTypeId);
     
  }

 


  getBookingData(){

        this.bookingService.getAllBookings().subscribe({
        next: (res_data)=>{
          console.log("Bookings Data Retrieved!! ",res_data.payload["Booking Units"])

          this.allBookings = res_data.payload["Booking Units"]
          this.filterBookings(this.unitTypeId)

          // this.bookings = res_data.slice(0, 4).map((booking: any) => ({

          },
        error: (err)=>{
        console.error("Could get bookings!", err)
        }
      }) 
    }

    filterBookings(id: number){
      this.filteredBookings =  this.allBookings.filter((booking: Bookings)=>{
        const results = booking['Unit Type ID'] === id;
        console.log(booking['Unit Type ID'])
        return results;
      })
      console.log("ererer",this.filteredBookings)

    }
  }

