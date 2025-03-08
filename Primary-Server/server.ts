import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

const swaggerDocument = YAML.load(path.join(__dirname, "/docs/swagger.yaml"));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
    <html>
    <head>
        <title>Oracis AI | Primary Server</title>
        <meta charset="utf-8">
    </head>
    <body style="font-family: Arial, sans-serif;">
        <h1>Oracis AI - Primary Server</h1>
        <p>Version: 1.0.0 (Beta Testing)</p>
        <a href="/api/docs/">View API Documentation</a>
    </body>
    </html>`);
});

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
