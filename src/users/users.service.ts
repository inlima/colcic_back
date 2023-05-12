import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const options = {
      where: { id },
    };
    return await this.userRepository.findOne(options);
  }

  async update(id: string, user: User): Promise<User> {
    const updatedUser = await this.findOne(id);
    updatedUser.admin = user.admin;
    return await this.userRepository.save(updatedUser);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
