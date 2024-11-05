import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
  })
export class BookingsComponent {
  bookings: any[] = [];

  constructor(private bookingService: BookingsService) {}

  ngOnInit(): void {
    this.getBookingData()
  }

  getBookingData(){

  this.bookingService.getAllBookings().subscribe({
  next: (res_data)=>{
  console.log("Bookings Data Retrieved!! ",res_data.payload["Booking Units"])

  this.bookings = res_data.payload["Booking Units"]

  // this.bookings = res_data.slice(0, 4).map((booking: any) => ({

  //   id: booking["Booking Unit ID"],
  //   name: booking["Booking Unit Name"],
  //   number: booking["Booking Unit Number"]
  // }));
},
  error: (err)=>{
  console.error("Could get bookings!", err)

  }

  }) 

  }
  }

