# Color Changer App

Welcome to the Color Changer App!   
This is a simple web application that allows users to change the background color of the webpage with a button click.   
The app is built using `Flask` for the backend and `Vanilla JS` for the frontend.

## Features

`Color Change Button`: Click the button to randomly change thebackground color and the text color.  
`Responsive Design`: The app is designed to work well on various screensizes.

## Files

```
public/
    index.html
    styles.css  
    app.js 
requirements.txt
server.py
README.md
``` 

## How It Works

### Frontend:      
- `index.html` includes a button that triggers the color change.  
- `styles.css` sets the initial styling for the webpage.  
- `app.js` contains the logic for generating random colors and applying them to the webpage.

### Backend:    
- `server.py` uses Flask to serve the static files from the public directory.     
- It handles requests to the root URL and any file-specific requests.

## Getting Started

To run the Color Changer App on your local machine, follow these steps:     

### 1. Clone the Repository 
If you haven't already, clone the repository to your local machine:     

```bash
git clone https://github.com/vickvey/color-changer-app.git  
cd color-changer
```

### 2. Set Up a Virtual Environment

Create and activate a virtual environment to manage dependencies:

```bash
python3 -m venv .venv # Or Create virtual environment using some other method
source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
```

### 3. Install Dependencies

Install the required Python packages using pip:

```bash
pip install -r requirements.txt
```

### 4. Run the Flask Server

Start the Flask development server:

```bash
python server.py
```

The application will be accessible at `http://localhost:3000/`.

### 5. Open the Web Application

Open your web browser and navigate to `http://localhost:3000/` to use the Color Changer App.

## Usage

Click the `Change Color` button to see the background and text color change to a new random color pair.

## Contributing

Feel free to contribute to the project by submitting pull requests or reporting issues.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

Flask: The micro web framework used for serving the static files.   
HTML/CSS/JavaScript: The technologies used for building the frontend.