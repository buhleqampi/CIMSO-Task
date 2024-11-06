## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/buhleqampi/CIMSO-Task.git
    cd CIMSO-Task
    ```

2. **Install Dependencies**:
    Make sure you have [Node.js](https://nodejs.org/) and [Angular CLI](https://angular.io/cli) installed. Then, run:
    ```bash
    npm install

3.**Run the Application**:
    Start the Angular development server:
    ```bash
    ng serve
    ```
    The application will be available at `http://localhost:4200`.

## Usage

1. **Unit Types List**:
   - On load, the application fetches and displays a list of unit types from the API.
   - Each unit type displays fields such as `Unit Type Description`, `Category`, `Maximum Occupants`, and more.

2. **Booking Units Display**:
   - When viewing a unit type, the application fetches and displays the associated booking units as nested items.

3. **Image Display (Optional)**:
   - The application can optionally fetch and display images for unit types by requesting the unique `Object Unique ID` for each unit type image.


# Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Error Handling

1. **API Response Errors**:
   - Any unsuccessful response from the API triggers a user-friendly error message.
   - Specific error codes (e.g., `-101` for unit type not found) are handled to provide more descriptive feedback.

2. **Network Issues**:
   - If the application encounters a network issue, it displays an error notification to the user and suggests retrying the request.

3. **Data Validation**:
   - The application validates incoming data to ensure that required fields are present before displaying them.


## Contact
For any questions or suggestions, feel free to reach out at [your-email@example.com](buhle3857@gmail.com).


Enjoy using this Application!
