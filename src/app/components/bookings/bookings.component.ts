import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
  })
export class BookingsComponent {
  bookings: any;

  constructor(private bookingService: BookingsService) {}

  ngOnInit(): void {
    this.getBookingData()
  }

  getBookingData(){

  this.bookingService.getAllBookings().subscribe({
  next: (res_data)=>{
   //localStorage.length
  console.log("Bookings Data Retrieved!! ",res_data)
  this.bookings = res_data.error_code
  },
  error: (err)=>{
  console.error("Could get bookings!", err)

  }

  }) 

  }
  }

