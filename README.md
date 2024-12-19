# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Online Library System.....

This project is an **Online Library System** built using **React.js** and **Redux** for state management. It allows users to browse books by category, view book details, and add new books to the library.


## Features
- **Home Page**: Displays a list of book categories and popular books.
- **Browse Books**: Allows users to filter books by category and view details.
- **Add Book**: A form to add new books to the library.
- **Book Details**: Displays detailed information about a selected book.
- **404 Page**: A page for undefined routes.


## **Tech Stack**
- **Frontend**: React
- **Backend (API)**: `json-server` (for the dummy API)
- **Styling**: CSS
- **State Management**: Redux


## Project Setup and Running Instructions

### 1. Clone the Repository 

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/online-library-system.git



2. Install Dependencies

cd online-library-system
npm install



3. Run the Application

npm start


/src
  /components       # React components
    Navbar.jsx      # Navigation bar
    Home.jsx        # Home page
    BrowseBooks.jsx # Browse books page
    AddBook.jsx     # Add book form
  /styles           # CSS styles
  App.js            # Main application file
  index.js          # Entry point
db.json             # Dummy API data



