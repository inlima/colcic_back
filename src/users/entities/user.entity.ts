import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: false })
  admin: boolean;
  
  @Column()
  photo: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  
  static fromDto(dto: CreateUserDto): User {
    const user = new User();
    user.name = dto.name;
    user.password = dto.password;
    user.email = dto.email;
    user.photo = dto.photo;
    user.admin = dto.admin;
    return user;
  }
  
  updateFromDto(dto: UpdateUserDto) {
    this.name = dto.name ?? this.name;
    this.password = dto.password ?? this.password;
    this.email = dto.email ?? this.email;
    this.photo = dto.photo ?? this.photo;
    this.admin = dto.admin ?? this.admin;
  }
}
