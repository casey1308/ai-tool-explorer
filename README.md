# 🚀 AI Tool Explorer

**AI Tool Explorer** is a full-stack web application that allows users to discover, favorite, and explore trending AI tools. Built with modern web technologies, it features a clean UI, theme customization, and responsive design.

![AI Tool Explorer Screenshot](https://via.placeholder.com/800x500?text=AI+Tool+Explorer+Screenshot)

## 🌟 Features

- **Browse AI Tools**: Discover tools in a responsive grid layout
- **Favorites System**: Save and manage your preferred tools
- **Theme Toggle**: Switch between light and dark modes
- **Modern UI**: Built with styled-components for sleek design
- **Interactive Elements**: Toast notifications and smooth animations

## 🛠 Tech Stack

### Frontend
- React.js
- Styled-components
- Axios (HTTP client)
- React Router (Navigation)

### Backend
- Node.js
- Express.js
- RESTful API architecture

### Data
- JSON-based storage (with potential for database integration)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**
   git clone https://github.com/casey1308/ai-tool-explorer.git
   cd ai-tool-explorer
2. **Setup the backend and frontend**
backend:
    cd server
    npm install
    node index.js
3. JSON File:
[
  {
    "id": 1,
    "name": "ChatGPT",
    "category": "Chatbot",
    "description": "Conversational AI developed by OpenAI.",
    "url": "https://chat.openai.com/"
  },
  {
    "id": 2,
    "name": "Midjourney",
    "category": "Image Generation",
    "description": "AI art generator using text prompts.",
    "url": "https://www.midjourney.com/"
  }
]

4. Set-up the frontend:
cd ../client
npm install
npm start
Client will be served at: http://localhost:3000

✨ Features
🔍 Browse AI tools in a responsive grid layout
⭐ Favorite/unfavorite tools with persistent backend sync
🌗 Toggle between Light and Dark themes
💅 Styled-components for sleek design
⚡ Smooth UX with toast alerts and clean animations

File structure: ai-tool-explorer/
├── client/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ToolCard.js
│   │   ├── pages/
│   │   │   ├── AllTools.js
│   │   │   └── FavoriteTools.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── themes.js
│   └── package.json
│
├── server/               # Express backend
│   ├── routes/
│   │   ├── tools.js
│   │   └── favorites.js
│   ├── tools.json        # Tool data file
│   ├── index.js          # Server entry point
│   └── package.json


🚧 **Roadmap**
✅ Build clean frontend & backend setup
⏳ Add confetti animation on favoriting
⏳ Add category-wise bar chart
⏳ Add real-time search or filter
⏳ Optional: move to file or DB-based persistence

🛡 **License**
This project is licensed under the MIT License.

👨‍💻 **Author**
Developed with ❤️ by @casey1308







