import express, { Request, Response } from 'express';
import  UserService  from '../service/user.service';

class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const user = await this.userService.getUser(id);
    if (!user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.send(user);
    }
  }

  async authenticate(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const user = await this.userService.authenticate(email, password);
    if (!user) {
      res.status(401).send({ message: 'Invalid email or password' });
    } else {
      res.send(user);
    }
  }
}

export default UserController;