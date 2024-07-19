# Gym Management System

## Overview

This project is a Gym Management System designed to help gym owners and members manage their gym activities and payments efficiently using a digital platform. The system stores payment receipts in a digital format and provides notifications to users.

## Technologies

- HTML
- CSS
- JavaScript
- Firebase

## Features

### Admin
- Login
- Add Member
- Update/Delete Members
- Create Bills
- Assign Fee Package
- Assign Notification for Monthly
- Report Export
- Supplement Store
- Diet Details

### Members
- Login
- View Bill Receipts
- View Bill Notification

### User
- Login
- View Details
- Search Records

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/GymManagementSystem.git
    ```
2. Navigate to the project directory:
    ```bash
    cd GymManagementSystem
    ```
3. Install Firebase CLI:
    ```bash
    npm install -g firebase-tools
    ```
4. Initialize Firebase in the project:
    ```bash
    firebase init
    ```
5. Deploy the project:
    ```bash
    firebase deploy
    ```

## Usage

1. Admin can log in to add, update, or delete members, create bills, and assign fee packages.
2. Members can log in to view their bill receipts and notifications.
3. Users can log in to view details and search records.

## Code Structure

- `index.html`: The main HTML file containing the structure of the login page.
- `css/styles.css`: The CSS file for styling the application.
- `js/app.js`: The JavaScript file for handling the logic and functionality of the application.
- `pages/admin.html`: The HTML file for the admin panel.
- `pages/member.html`: The HTML file for the member panel.
- `pages/user.html`: The HTML file for the user panel.
- `README.md`: This file explaining how to use the Gym Management System.

## Contribution

Contributions are welcome! Please fork the repository and submit a pull request.
