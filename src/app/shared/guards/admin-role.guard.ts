import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { IRole } from '../interfaces/mongo-backend';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles: IRole[] | undefined = userService.user()?.roles;
  const hasPermission = userRoles?.some((r: IRole) => r.role==="ADMIN" && r.active )
  console.log(userRoles, hasPermission)

  if (userService.user() && hasPermission) {
    return true;
  }
  return router.navigate(['restricted-content-example']);
};
