import { createCipheriv, createDecipheriv, randomBytes } from "crypto";
import { HEX, ALGO, RANDOM_BYTES_IV, RANDOM_BYTES_KEY } from "../constants";

interface IEncryptInterface {
    iv: string,
    encryptedData: string,
};

export const {
    encrypt,
    decrypt
} = (() => new class Encryption {
    static readonly key = randomBytes(RANDOM_BYTES_KEY);
    static readonly iv = randomBytes(RANDOM_BYTES_IV)

    async encrypt(text: string): Promise<IEncryptInterface | null> {
        try {
            let cipher = createCipheriv(
                ALGO, Buffer.from(
                    Encryption.key
                ),
                Encryption.iv
            );
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);

            return ({
                iv: Encryption.iv.toString(HEX),
                encryptedData: encrypted.toString(HEX)
            });

        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async decrypt({ iv , encryptedData }: IEncryptInterface): Promise<String | null>  {
        try {
            let _iv_ = Buffer.from(iv, HEX);
            let encryptedText = Buffer.from(encryptedData, 'hex');
            let decipher = createDecipheriv(ALGO, Buffer.from(Encryption.key), _iv_);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        } catch(error) {
            console.log(error);
            return null;
        }
    }
})();

