import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { GuildService } from '../services/guild.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private guildService: GuildService,
  ) {}

  async canActivate() {
    await this.userService.init();

    const likelyFromDiscord = this.route.snapshot.queryParamMap.has('code');
    if (likelyFromDiscord)
      await this.guildService.updateGuilds(true);

    const canActivate = Boolean(this.userService.user); 
    if (!canActivate)
      this.router.navigate(['/']);

    return canActivate;
  }  
}
