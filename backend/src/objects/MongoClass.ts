import { MongoClient } from "mongodb";
import { MONGO_URL, MONGO_DB_NAME } from "../constants/";

interface queryTypes {
    cName: string,
    qParams: Object
};

class MongoDB {
    public static get  driver() {
        const connectionStream = new MongoClient(MONGO_URL, {
            keepAlive: true,
            keepAliveInitialDelay: 300000,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            family: 4
        });
        //const connectionStream = new MongoClient(url, options);
        return new Promise<any>((resolve, reject) => {
            return connectionStream.connect((err, client) => {
                try {
                    if(err) {
                        console.log("something went wrong", err);
                    }
                    resolve(client);
                } catch (err) {
                    reject(err);
                }
            });
        })
    }
}

const MDBClass = ((Class) => {

    const driver = Class.driver;

    return new class MDBC extends Class {

        private static instance: MDBC;

        private contructor() {}

        public static getInstance(): MDBC {

            if (!MDBC.instance) {

                MDBC.instance = new MDBC();
            }

            return MDBC.instance;
        }

         async findQuery({ cName, qParams } : queryTypes) {
            try {
                const conx = await driver;
                let thisQuery = await conx.db(MONGO_DB_NAME)
                    .collection(cName)
                    .find(qParams).project().toArray();

                return thisQuery;
            } catch (e) {
                console.log(e);
            }
        }

         async insertQuery({ cName, qParams } : queryTypes) {
            try {
                const conx = await driver;
                let thisQuery = await conx.db(MONGO_DB_NAME)
                    .collection(cName)
                    .insert(qParams);
                return thisQuery;
            } catch (e) {
                console.log(e);
            }
        }
         async updateQuery({ cName, qParams } : queryTypes) {
            try {
                const conx = await driver;
                let thisQuery = await conx.db(MONGO_DB_NAME)
                    .collection(cName)
                    .update(qParams);

                return thisQuery;
            } catch (e) {
                console.log(e);
            }
        }
         async deleteQuery({ cName, qParams } : queryTypes) {
            try {
                const conx = await driver;
                let thisQuery = await conx.db(MONGO_DB_NAME)
                    .collection(cName)
                    .deletOne(qParams);

                return thisQuery;
            } catch (e) {
                console.log(e);
            }
        }
    }
})(MongoDB);

export const mongoInstance = MDBClass;

Object.freeze(mongoInstance);

