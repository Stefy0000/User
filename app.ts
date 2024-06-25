import express from 'express';
import UserController from '../controller/user.controller';

const app = express();
app.use(express.json());

const userController = new UserController(new UserServiceImpl(new UserRepositoryImpl()));

app.get('/api/users/:id', userController.getUser);
app.post('/api/users/authenticate', userController.authenticate);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});