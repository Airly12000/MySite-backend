import { Router } from 'express';
import Messages from '../../models/Messages';

const router = Router();

router.post('/post', async (req, res) => {
	const body = req.body;
	if (body.email && body.message) {
		await Messages.create({
			email: body.email,
			message: body.message,
		});
		res.json({ message: 'Message recieved!' });
	} else {
		res.json({ message: 'Fill in all sections' });
	}
});

module.exports = router;
