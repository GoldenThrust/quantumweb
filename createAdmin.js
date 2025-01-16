import { hash } from "argon2";
import mongodb from "./config/db.js";
import redis from "./config/db.js"; // Ensure redis is correctly imported
import Admin from "./models/admin.js";

// Function to read user input
const getInput = (prompt) => {
    return new Promise((resolve) => {
        process.stdout.write(prompt);
        process.stdin.once('data', (data) => resolve(data.toString().trim()));
    });
};

const main = async () => {
    await mongodb.run();
    await redis.run();

    const admin = {};

    admin.email = await getInput('Enter your Email Address: ');
    admin.name = await getInput('Enter your Name: ');
    admin.password = await hash(await getInput('Enter your Password: '));

    console.log(admin);

    const adminModel = new Admin({ ...admin });
    await adminModel.save();

    process.exit(0);
};

main().catch(err => {
    console.error(err);
    process.exit(1);
});
