# Kfz-Steuer Calculator

## Overview

The Kfz-Steuer Calculator is a React application designed to calculate the German vehicle tax (Kraftfahrzeugsteuer) for both new and old vehicles based on various parameters such as engine size, CO2 emissions, fuel type, and the year of first registration. The application provides an intuitive interface for users to input relevant data and receive an accurate tax calculation.

## Features

- **Two Calculation Modes**: Separate calculation logic for vehicles registered before and after November 4, 2008.
- **Dynamic CO2 Emission Calculation**: Adjusts CO2 tax rates based on the year of vehicle registration, with specific rules for vehicles registered from 2021 onwards.
- **User-Friendly Interface**: Clear and straightforward UI for entering vehicle details and viewing the tax calculation.
- **Responsive Design**: Compatible with various screen sizes and devices.

## Installation

To get started with the Kfz-Steuer Calculator, follow these steps:

1. Clone the repository:
git clone https://github.com/your-repository/kfz-steuer-calculator.git

2. Navigate to the project directory:
cd kfz-steuer-calculator

3. Install dependencies:
npm install

4. Run the application:
npm start

The application will be available at `http://localhost:3000` in your web browser.

## Usage

To use the Kfz-Steuer Calculator:

1. **Enter Vehicle Details**:
- Select the registration date of the vehicle.
- Depending on the registration date, the appropriate calculation form (new or old) will be displayed.
- Fill in the required fields: engine size, fuel type, CO2 emissions (for new vehicles), etc.

2. **Calculate Tax**:
- Click on the 'Berechnen' button to calculate the tax.
- The tax amount will be displayed along with an option to perform another calculation.

## Contributing

Contributions to the Kfz-Steuer Calculator are welcome. Please feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to all contributors and users of this application. Your feedback and contributions have been invaluable.