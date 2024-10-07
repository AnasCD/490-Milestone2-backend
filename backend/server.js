/*Sets up express server, defines middleware, and connects routes
*/ 


import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import landingPageRoutes from "./routes/landingPage.js";
import filmsRoutes from "./routes/films.js";
import actorsRoutes from "./routes/actors.js";
import customersRoutes from "./routes/customers.js";
import connectMySql from './db/connectMySql.js';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/*
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
*/
app.use(cors());
app.use("/api", landingPageRoutes);  // Landing page
app.use("/api/films", filmsRoutes);   // Film details
app.use("/api/actors", actorsRoutes); // Actor details
app.use("/api/customers", customersRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
/*
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
*/
