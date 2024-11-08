import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import db from "./src/db/mongo.js";

dotenv.config();

// Initialize DB
db();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN.split(","),
  methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
  credentials: true,
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use("/public", express.static("public"));

// Route imports
import userRoutes from "./src/routes/User.route.js";
import contactRoutes from "./src/routes/Contact.route.js";
import artistRelo from "./src/routes/ArtistRelo.route.js";
import newArtist from "./src/routes/NewArtist.route.js";


// Routes
app.get("/", (req,res)=>{
  res.send("app is runnning!!!");
})
app.use("/api/contact", contactRoutes);
app.use("/api/newArtist", newArtist);
app.use("/api/artistRelocation", artistRelo);
app.use("/api/user", userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
