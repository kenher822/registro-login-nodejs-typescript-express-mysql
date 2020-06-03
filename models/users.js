import { resolve } from "dns";
import { rejects } from "assert";

const getAll = () => {
    return new Promise((resolve, rejects) => {
        db.query("SELECT * FROM users", (err, rows) => {
            if (err) rejects(err)
            resolve(rows);
        });
    });
};