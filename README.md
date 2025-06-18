🚀 **AI Tool Explorer**

AI Tool Explorer is a full-stack web application that lets users discover, favorite, and explore trending AI tools. It features a clean, responsive UI with theme customization and smooth animations.

🌟 **Features**

Browse AI Tools: Discover tools displayed in a responsive grid layout
Favorites System: Save and manage your preferred tools with backend sync
Theme Toggle: Switch seamlessly between light and dark modes
Modern UI: Built using styled-components for a sleek design
Interactive Elements: Confetti animations and smooth transitions

🛠 **Tech Stack**

Frontend
React.js
Styled-components
Axios (HTTP client)
React Router (Navigation)

Backend

Node.js
Express.js
RESTful API architecture

Data

JSON-based storage (can be upgraded to database later)


🚀 **Getting Started**

Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)


**Installation**

Clone the repository:
git clone https://github.com/casey1308/ai-tool-explorer.git
cd ai-tool-explorer

**Setup the backend:**

cd server
npm install
node index.js

**Prepare JSON data**

Create a file tools.json inside the server folder with the following content:
[
  {
    "id": 1,
    "name": "ChatGPT",
    "category": "Writing",
    "url": "https://chat.openai.com",
    "excerpt": "Advanced conversational AI for content creation, research, and brainstorming.",
    "tags": ["AI Assistant", "Chatbot", "Content Generation"],
    "pricing": "Freemium"
  },
  
  {
    "id": 2,
    "name": "Midjourney",
    "category": "Image Generation",
    "url": "https://www.midjourney.com",
    "excerpt": "Generate high-quality images from text prompts.",
    "tags": ["Art", "Image", "AI"],
    "pricing": "Paid"
  },
  
  {
    "id": 3,
    "name": "Notion AI",
    "category": "Productivity",
    "url": "https://www.notion.so/product/ai",
    "excerpt": "Your second brain for writing, brainstorming, and editing inside Notion.",
    "tags": ["Writing", "Notes", "Workspace"],
    "pricing": "Freemium"
  },
  
  {
    "id": 4,
    "name": "Runway ML",
    "category": "Video",
    "url": "https://runwayml.com",
    "excerpt": "Creative AI tools for video editing and content generation.",
    "tags": ["Video Editing", "ML", "Creative Tools"],
    "pricing": "Freemium"
  },
  
  {
    "id": 5,
    "name": "Copy.ai",
    "category": "Marketing",
    "url": "https://www.copy.ai",
    "excerpt": "AI writing assistant for marketing copy, emails, and ads.",
    "tags": ["Marketing", "Copywriting", "Content"],
    "pricing": "Freemium"
  }
]



**Setup the frontend**

Open a new terminal and run:
cd ../client
npm install
npm start
The frontend will be available at: http://localhost:3000

🗂 **File Structure**

ai-tool-explorer/
├── client/       # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ToolCard.js
│   │   │   ├── CategoryChart.js
│   │   │   └── confetti.js
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


🛣 **Roadmap**

✅ Build clean frontend & backend setup
⏳ Add confetti animation on favoriting
⏳ Add category-wise bar chart visualization
⏳ Add real-time search and filtering
⏳ Optional: Move to file or database-based persistence

🛡 **License**

This project is licensed under the MIT License.

👨‍💻 **Author**

Developed with ❤️ by @casey1308

