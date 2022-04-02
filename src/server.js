const app = require('./index');
const PORT = process.env.PORT ||  5000;

const connect = require('./configs/db')



app.listen(PORT, async () => {
    try {
        await connect();
        console.log(`Listening on port ${PORT}`)
    } catch (err) {
        console.error(err.message);
    }
});

