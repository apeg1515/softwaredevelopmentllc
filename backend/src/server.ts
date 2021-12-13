import * as http from "http";
import cors from "cors";
import { createHash, randomBytes } from "crypto";
import { v4 } from "uuid";
import express, { Express } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

export class Server
{
    private readonly __mainApp__ : Express;

    private __mainServer__! : http.Server;

    // private uniqueId : string = v4();
    private uniqueId : string =
        createHash('sha256')
        .update(v4())
        .update(randomBytes(256))
        .digest("hex");

    get app(): Express {
        return this.__mainApp__;
    }

    get server(): http.Server {
        return this.__mainServer__;
    }

    constructor() {
        this.__mainApp__ = express();
        this.__mainApp__.set("secretKey", process.env.SECRET || "cat");
        this.__mainApp__.set("port", process.env.PORT || 5406);
        this.configuredMiddleware();
    }

    public configuredMiddleware(): void | Promise<any | null> {
        this.__mainApp__.set("trust proxy", 1);
        this.__mainApp__.disable("x-powered-by");

        this.__mainApp__
        .use(cookieParser())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({
            extended: true
        }))
        .use(session({
            secret: this.__mainApp__.get("secretKey"),
            resave: false,
            saveUninitialized: true,
            genid: (req) => this.uniqueId,
            cookie: {
                secure: true
            },
        }))
        .use(cors({
            exposedHeaders: ["x-request-method", "x-csrf-method"],
            allowedHeaders: ["Content-Type", "Authorization", "Aceept"],
            methods: ["GET", "POST", "PUT", "DELETE"],
            credentials: true
        }));

    }

    public start(): void {
        this.configuredMiddleware();
        this.__mainServer__ = this.__mainApp__.listen(this.app.get("port"), () => {
            console.log(`application running on : ${this.app.get("port")}`);
        });
    }
}

export const server = new Server();
