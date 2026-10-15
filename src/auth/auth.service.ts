import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto.js';
import { RegisterDto } from './dto/register.dto.js';
import { forgotPasswordDto } from './dto/forgot-password.dto.js';
import { user } from './entities/users-entity.js';

@Injectable()
export class AuthService {
    private users: user[] = [];
    private nextId = 1;

    // Register
    register(registerDto: RegisterDto) {
        const existingUser = this.users.find(
            (u) => u.email === registerDto.email,
        );

        if (existingUser) {
            return {
                message: 'Email sudah terdaftar',
            };
        }

        const newUser: user = {
            id: this.nextId++,
            nama: registerDto.nama,
            email: registerDto.email,
            password: registerDto.password,
        };

        this.users.push(newUser);

        return {
            message: 'Register berhasil',
            data: {
                id: newUser.id,
                nama: newUser.nama,
                email: newUser.email,
            },
        };
    }

    // Login
    login(loginDto: LoginDto) {
        const existingUser = this.users.find(
            (u) => u.email === loginDto.email,
        );

        if (
            !existingUser ||
            existingUser.password !== loginDto.password
        ) {
            throw new UnauthorizedException('Email atau password salah');
        }

        return {
            message: 'Login berhasil',
            data: {
                id: existingUser.id,
                nama: existingUser.nama,
                email: existingUser.email,
            },
        };
    }

    // Forgot Password
    forgotPassword(forgotPasswordDto: forgotPasswordDto) {
        const existingUser = this.users.find(
            (u) => u.email === forgotPasswordDto.email,
        );

        if (!existingUser) {
            throw new UnauthorizedException('Email tidak ditemukan');
        }

        return {
            message: 'Permintaan reset password berhasil',
            email: existingUser.email,
        };
    }

    // Password Recovery
    passwordRecovery() {
        return {
            message: 'Password berhasil diperbarui',
        };
    }
}