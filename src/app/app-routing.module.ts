import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommandsComponent } from './pages/commands/commands.component';
import { AuthComponent } from './pages/auth/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InviteComponent } from './pages/auth/invite/invite.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { DashboardOverviewComponent } from './dashboard/dashboard/dashboard-overview/dashboard-overview.component';
import { GuildComponent } from './dashboard/guild/guild/guild.component';
import { DashboardAuthGuard } from './guards/dashboard-auth.guard';
import { GuildAuthGuard } from './guards/guild-auth.guard';
import { GeneralModuleComponent } from './dashboard/guild/general-module/general-module.component';
import { LevelingModuleComponent } from './dashboard/guild/leveling-module/leveling-module.component';
import { MusicModuleComponent } from './dashboard/guild/music-module/music-module.component';
import { AutoModModuleComponent } from './dashboard/guild/auto-mod-module/auto-mod-module.component';
import { LogsModuleComponent } from './dashboard/guild/logs-module/logs-module.component';
import { LogModuleComponent } from './dashboard/guild/log-module/log-module.component';
import { SettingsModuleComponent } from './dashboard/dashboard/settings-module/settings-module.component';
import { CommandsModuleComponent } from './dashboard/guild/commands-module/commands-module.component';
import { LeaderboardModuleComponent } from './dashboard/guild/leaderboard-module/leaderboard-module.component';
import { LeaderboardAuthGuard } from './guards/leaderboard-auth.guard';
import { XPCardComponent } from './xp-card/xp-card.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PlusComponent } from './pages/plus/plus/plus.component';
import { CanDeactivateDashboard } from './guards/can-deactivate-dashboard.guard';
import { ReactionRolesModuleComponent } from './dashboard/dashboard/reaction-roles-module/reaction-roles-module.component';
import { StatsComponent } from './stats/stats.component';
import { DocsComponent } from './pages/docs/docs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'stats', component: StatsComponent },

  { path: 'docs/**/**', component: DocsComponent },
  { path: 'docs/**', component: DocsComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'invite', component: InviteComponent },
  
  { path: 'leaderboard/:id', component: LeaderboardModuleComponent, canActivate: [LeaderboardAuthGuard] },

  { path: 'dashboard', component: DashboardOverviewComponent, canActivate: [DashboardAuthGuard] },
  { path: 'dashboard/xp-card', component: XPCardComponent, canActivate: [DashboardAuthGuard] },

  { path: 'servers/:id', component: GuildComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/auto-mod', component: AutoModModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/commands', component: CommandsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/general', component: GeneralModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/music', component: MusicModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/leveling', component: LevelingModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/log', component: LogModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/logs', component: LogsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/reaction-roles', component: ReactionRolesModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },
  { path: 'servers/:id/settings', component: SettingsModuleComponent, canActivate: [GuildAuthGuard], canDeactivate: [CanDeactivateDashboard] },

  { path: 'plus', component: PlusComponent },
  { path: 'payment-success', component: PaymentSuccessComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
