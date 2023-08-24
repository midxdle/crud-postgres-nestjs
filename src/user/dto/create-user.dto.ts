import {
  IsNotEmpty,
  MinLength,
  IsAlphanumeric,
  IsEmail,
  IsString,
  IsEnum,
  Matches,
} from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3, { message: 'Username must have at least 3 characters.' })
  @IsAlphanumeric(null, {
    message: 'Username just allow alpha numeric characters.',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide a valid Email,' })
  email: string;

  @IsString()
  @IsEnum(['m', 'f', 'u'])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and Maximum 20 characters,
  at least one uppercase letter, one lowercase letter,
  one number and one special character`,
  })
  password: string;
}
