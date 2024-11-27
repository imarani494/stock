Overview
This is a React-based Stock Management Application that allows users to view stock prices in a clean, dark-themed interface. The app consists of two main components: a stock list and detailed stock information. It is fully responsive, ensuring compatibility with desktops, tablets, and mobile devices.

Features
Stock List:

Displays a list of stocks in a visually appealing card-based layout.
Includes stock details like name, price, and change percentage.
Provides a "View Details" button for each stock, linking to a detailed view.
Stock Detail:

Shows detailed information about a selected stock.
Includes a placeholder for price movement graphs.
Centrally aligned card layout for better focus on details.
Dark Mode Theme:

Provides a sleek, modern UI with high contrast for easy readability.
Responsive Design:

Optimized for all screen sizes, including desktops, tablets, and mobile phones.
Loading Indicator:

Displays a loading message when fetching stock data, enhancing user feedback.
Hover Effects:

Adds interactivity through animations like scaling and color changes.
Technologies Used
React: Front-end library for building the user interface.
React Router: For handling page navigation.
Redux: For state management (optional, depending on implementation).
CSS: For styling the components, including responsive design.
JavaScript (ES6): Core logic for rendering components.
File Structure
scss
Copy code




src/
│
├── components/
│   ├── StockList.js        // Component for displaying the list of stocks
│   ├── StockDetail.js      // Component for displaying detailed stock info
│
├── redux/
│   ├── actions.js          // Redux actions for managing state
│   ├── reducers.js         // Redux reducers for handling state changes
│   ├── store.js            // Redux store configuration
│
├── styles/
│   ├── stocklist.css       // Styles for StockList component
│   ├── stockdetail.css     // Styles for StockDetail component
│
├── App.js                  // Main application entry point
├── data/market.js          // Mock data for stock prices
├── index.js                // ReactDOM render and app mounting
│
└── README.md               // Project documentation (this file)



Usage
Viewing Stocks:

On the homepage, you'll see a list of stocks displayed as cards.
Click on the "View Details" button to navigate to a detailed stock view.
Stock Details:

View individual stock details, including a placeholder for graph data.
Responsive Design:

Resize the browser window or use a mobile device to experience the fully responsive interface.
