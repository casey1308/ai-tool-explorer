const express = require('express');
const cors = require('cors');
const toolsRoutes = require('./routes/tools');

const app = express();
const PORT = process.env.PORT || 5000; // Allows changing port dynamically

app.use(cors());
app.use(express.json());

// ✅ Base route
app.get('/', (req, res) => {
  res.send('✅ API is running. Visit /api/tools');
});

// ✅ Main API route
app.use('/api', toolsRoutes);

// ✅ Start server with error handling
app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
