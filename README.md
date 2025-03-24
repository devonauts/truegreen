# TruGreen Inspired Website

## Project Overview

This project is a recreation of the TruGreen website using HTML, CSS (with Bootstrap), and JavaScript. The site is fully responsive and includes multiple pages such as the Home Page, Contact Page, Sign-Up Page, and See Pricing Page. The project helps practice Bootstrap layout and components, as well as JavaScript functions that simulate interactive features for future development.

## Project Structure

- **index.html** – The homepage that includes:
  - A responsive navigation bar (with a top announcement bar, middle navigation row, main navbar with dropdowns, and offcanvas hamburger for mobile).
  - A hero section with a full-screen background image.
  - Several sections including services, testimonials (with a carousel), and a service prices table.
  - A detailed footer with multiple link columns and disclaimers.
  
- **contact.html** – A contact form page with multiple input types (text, email, date, and textarea).

- **signup.html** – A sign-up form page collecting user information (name, email, password, confirm password, phone, and a Terms & Conditions checkbox).

- **pricing.html** – A dedicated page that displays a table of service prices along with a navigation bar and footer.

- **styles.css** – Contains custom CSS to enhance and override Bootstrap styles for the site’s branding and layout.

- **script.js** – Contains JavaScript functions that simulate interactive features. Examples include:
  - **validateEmail(email):** Validates that an email address is in the proper format.
  - **getRandomProject():** Picks and returns a random project from an array of project names.
  - **getTotalPrice():** Calculates and returns the total price from an array of service prices.
  - **addFeedback(message):** Stores user feedback in an array and returns the updated array.

## Bootstrap and JavaScript Integration

- **Bootstrap Components:**  
  - Navigation Bar (including dropdowns and offcanvas for mobile)  
  - Hero Section with background image and overlay  
  - Cards, Carousel, Tabs, and Table  
  - Input groups for forms

- **JavaScript Functions:**  
  All JavaScript functions are defined in `script.js` with comments explaining each function’s purpose and potential use cases.

## How to Use

1. **Clone the Repository:**  
   `git clone <repository-url>`

2. **Open the Project:**  
   Open the project folder in VS Code or your preferred code editor.

3. **Run the Project:**  
   Open `index.html` in your browser to view the homepage.  
   Navigate to `contact.html`, `signup.html`, and `pricing.html` using the navbar links.

4. **Test Responsiveness:**  
   Resize your browser or use device emulation in your browser’s developer tools to ensure the site looks good on both mobile and desktop devices.

5. **Review JavaScript Functions:**  
   Check `script.js` in your browser’s console to see output from the functions or to test their behavior.

## README Summary

- **Description:** A responsive website inspired by TruGreen, built with Bootstrap and enhanced with JavaScript functions.
- **Bootstrap Usage:** Navbar, hero section, cards, carousel, tabs, table, and offcanvas components.
- **JavaScript Functions:** Simple functions for form validation, random project selection, price calculation, and feedback storage.
- **Repository Organization:** All HTML, CSS, and JavaScript files are organized in the repository. A detailed README.md is provided.
  
---