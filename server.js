const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "http://http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "UPDATE", "OPTIONS"]
}));