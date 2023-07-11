const express = require('express');
const app = express();

// Server ayarları ve middleware'ler buraya eklenebilir

// API endpoint'lerini buraya ekle

const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} numaralı portta çalışıyor.`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/KUSYS-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const studentRoutes = require('./routes/students');
app.use('/api', studentRoutes);

const authMiddleware = require('./middlewares/authMiddleware');
app.use('/api', authMiddleware);
