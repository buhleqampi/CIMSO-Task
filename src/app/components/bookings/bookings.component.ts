import { Component } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { Bookings } from '../../interfaces/bookings';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  allBookings: Bookings[] = [];
  filteredBookings: Bookings[] = [];
  unitTypeId!: number;
  error_code!: number;
  errorMessage: string = '';

  constructor(
    private bookingService: BookingsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getBookingData();
  }

  getId() {
    this.unitTypeId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Unit Type ID:', this.unitTypeId);
  }

  getBookingData() {
    this.bookingService.getAllBookings().subscribe({
      next: (res_data) => {
        console.log(
          'Bookings Data Retrieved!!',
          res_data.payload['Booking Units']
        );

        this.error_code = res_data.error_code;
        if (this.error_code === 0) {
          this.allBookings = res_data.payload['Booking Units'];
          this.filterBookings(this.unitTypeId);
        } else {
          this.handleErrorCode(this.error_code);
        }
      },
      error: (err) => {
        console.error('Could not get bookings!', err);
        this.errorMessage =
          'An unexpected error occurred. Please try again later.';
      },
    });
  }

  filterBookings(id: number) {
    this.filteredBookings = this.allBookings.filter((booking: Bookings) => {
      const result = booking['Unit Type ID'] === id;
      console.log('Filtered Booking Unit Type ID:', booking['Unit Type ID']);
      return result;
    });
    console.log('Filtered Bookings:', this.filteredBookings);
  }

  handleErrorCode(code: number) {
    switch (code) {
      case -101:
        this.errorMessage = 'Failed to retrieve bookings: Unit type not found.';
        break;
      case -102:
        this.errorMessage =
          'Failed to retrieve bookings: Booking unit not found.';
        break;
      default:
        this.errorMessage = 'An unknown error occurred.';
        break;
    }
    console.log('Error Message:', this.errorMessage);
  }
}
