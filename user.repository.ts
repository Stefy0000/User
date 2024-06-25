import { User } from '../domain/user.model';

class UserRepository {
  private users: User[] = [];

  constructor() {
    this.users = [
      new User(1, 'Stefhanie', 'Huacho', 'stef@gmail.com', 'pass1234'),
      new User(2, 'Sebastian', 'Torres', 'sebas@gmail.com', 'pass1234'),
    ];
  }

  getUser(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }

  getUserByEmailAndPassword(email: string, password: string): User | null {
    return this.users.find((user) => user.email === email && user.password === password) || null;
  }
}

export default UserRepository;