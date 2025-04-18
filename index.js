import express from "express"
import { Prisma } from "@prisma/client"
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

const express = require("express");
const { PrismaClient } = require("@prisma/client");
require("dotenv").config();

const PORT = process.env.PORT || 3000


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
