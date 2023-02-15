import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/routes';
import bodyParser from 'body-parser';
const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening to ${PORT}`);
});
