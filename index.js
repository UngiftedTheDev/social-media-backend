import express from "express"
import { prisma } from "./src/config/database"
require("dotenv").config();
const {PORT} = require("./src/config/env")

const app = express();
app.use(express.json());

const express = require("express");






app.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  finally{
    process.on("SIGINT", async () => {
        console.log("Shutting down");
        await prisma.$disconnect();
        process.exit(0);
      });
  }
});



app.listen(PORT, () => console.log("Server running on http://localhost:3000"));
