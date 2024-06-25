import  UserRepository  from '../repository/user.repository';
import { User } from '../domain/user.model';

interface UserService {
  getUser(id: number): Promise<User | null>;
  authenticate(email: string, password: string): Promise<User | null>;
}

class UserServiceImpl implements UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUser(id: number): Promise<User | null> {
    return this.userRepository.getUser(id);
  }

  async authenticate(email: string, password: string): Promise<User | null> {
    return this.userRepository.getUserByEmailAndPassword(email, password);
  }
}

export default UserServiceImpl;