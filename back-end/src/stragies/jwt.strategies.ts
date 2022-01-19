import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'fdsfbsdfkjbskfjbskjbfksjd',
    });
  }

  async validate({ id, iat, exp }: { id: number; iat: number; exp: number }) {
    const timeDiff = exp - iat;
    if (timeDiff <= 0) {
      throw new UnauthorizedException();
    }
    const user = await this.prismaService.user.findFirst({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
      },
      where: { id: id },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
