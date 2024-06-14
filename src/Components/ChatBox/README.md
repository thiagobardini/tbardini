<p align="center">
<img src="https://www.tbardini.com/assets/TBardini-dot-dark-MIMyJ2zW.png" width="200" alt="Demo Report Logo">
</p>

---

# Chatbox Frontend

## Description

This project is the frontend for the Gemini AI Chatbot, designed to interact with the backend API server to provide specialized support for inquiries related to Thiago Bardini's professional career. The frontend is built using React and Material-UI for a responsive and user-friendly interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: React components for faster and easier web development.
- **Redux**: A predictable state container for JavaScript apps.
- **Lottie**: A library to render animations.
- **React Redux**: Official React bindings for Redux.
- **Fetch API**: For making HTTP requests to the backend API.

## Installation

### Prerequisites

- Node.js (version 18.x or higher)
- yarn

### Steps

1. Clone this repository:

    ```bash
    git clone git@github.com:thiagobardini/tbardini.git
    ```

2. Navigate to the project directory:

    ```bash
    cd tbardini
    ```

3. Install project dependencies:

    ```bash
    yarn install
    ```

4. Create a `.env` file in the project root with the following environment variables:

    ```plaintext
    VITE_API_URL="your-backend-api-url"
    ```

5. Start the development server:

    ```bash
    yarn start
    ```

The development server will run on `http://localhost:3000` by default.

## Project Structure

```plaintext
.
├── public/                    # Public assets
│   └── ...
├── src/                       # Source files
│   ├── Components/            # React components
│   │   ├── ChatBox/           # Chatbox component and related files
│   │   │   └── ChatBox.js     # Main Chatbox component
│   │   └── ...
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point for React
│   └── ...
├── .env                       # Environment variables configuration file
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
└── ...                        # Other project files
```
## Usage

To use the chatbot, simply click on the chatbot icon on the bottom right corner of the screen. Type your message and hit Enter or click the send button to interact with the AI.

## Links

- **Website**: [https://www.tbardini.com/](https://www.tbardini.com/)
- **Backend Configuration**: [Backend Configuration](https://github.com/thiagobardini/api-chat-server)

## Contribution

If you wish to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
