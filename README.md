# OrangeHRM Login Functionality Validation using Cypress

This project validates the login functionality of the OrangeHRM webpage using Cypress. It tests various scenarios with multiple data combinations, including valid, invalid, numeric, and blank inputs. The project also includes test cases for successful login and logout functionality.

## Project Goal

The main objectives of this project are:

1. **Validate Login Scenarios**: Test the login functionality with multiple data combinations to ensure robustness.
2. **Successful Workflow Testing**: Verify a complete login and logout cycle.
3. **Automated Test Execution**: Leverage Cypress for efficient and reliable test automation.

## Features

- Tests login functionality with the following data combinations:
  - **Valid credentials**: Ensures successful login.
  - **Invalid credentials**: Validates error messages.
  - **Numeric credentials**: Tests input validation.
  - **Blank fields**: Checks for mandatory field validation.
- Includes test cases for:
  - Successful login.
  - Logout functionality.
- Uses Cypress for writing and executing test cases efficiently.

## Topics Covered / Lessons Learned

1. **Cypress Basics**: Writing and running tests with Cypress.
2. **Data-Driven Testing**: Using multiple input combinations for comprehensive validation.
3. **Error Validation**: Testing error handling for invalid inputs.
4. **Workflow Automation**: Automating login and logout workflows.
5. **Test Case Design**: Writing clear and reusable test cases.

## Prerequisites

Before running this project, ensure you have:

- **Node.js**: Installed on your system (v12 or higher).
- **Cypress**: Installed via npm (included in the project setup).
- A code editor (e.g., VS Code) to view and modify test scripts.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/omkar-git-hub-repository/Cypress_Project_OrangeHRM_Login.git

 ## How to Run the Project
2. Open the terminal and navigate to the project directory.

Run Cypress:

<b> 'npx cypress open' </b> <br>
This command will open the Cypress Test Runner.

In the Cypress Test Runner:

Select the browser of your choice.
Click on the test file to run the test.
Watch the test execution in the browser and view the results in the Cypress Test Runner interface.