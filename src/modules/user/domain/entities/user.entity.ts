import { randomUUID } from 'crypto';
import { Role } from 'generated/prisma';
import { Replace } from 'src/sherad/utils/replace';

interface UserSchema {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  private props: UserSchema;
  private _id: string;
  constructor(
    props: Replace<UserSchema, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    };
    this._id = id || randomUUID();
  }
  get id(): string {
    return this._id;
  }
  get name(): string {
    return this.name;
  }
  set name(name: string) {
    this.name = name;
  }
  get email(): string {
    return this.props.email;
  }
  set email(email: string) {
    this.email = email;
  }
  get phone(): string {
    return this.props.phone;
  }
  set phone(phone: string) {
    this.phone = phone;
  }
  get password(): string {
    return this.props.password;
  }
  set password(password: string) {
    this.password = password;
  }
  get role(): Role {
    return this.props.role;
  }
  set role(role: Role) {
    this.role = role;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }
  set updatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
  }
}
