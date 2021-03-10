import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material/core';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import { CommandsComponent } from './pages/commands/commands.component';
import { AuthComponent } from './pages/auth/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { InviteComponent } from './pages/auth/invite/invite.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { DashboardOverviewComponent } from './dashboard/dashboard/dashboard-overview/dashboard-overview.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { GuildComponent } from './dashboard/guild/guild/guild.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { CommandsModuleComponent } from './dashboard/guild/commands-module/commands-module.component';
import { LogsModuleComponent } from './dashboard/guild/logs-module/logs-module.component';
import { AutoModModuleComponent } from './dashboard/guild/auto-mod-module/auto-mod-module.component';
import { GeneralModuleComponent } from './dashboard/guild/general-module/general-module.component';
import { MusicModuleComponent } from './dashboard/guild/music-module/music-module.component';
import { LogModuleComponent } from './dashboard/guild/log-module/log-module.component';
import { SettingsModuleComponent } from './dashboard/dashboard/settings-module/settings-module.component';
import { LevelingModuleComponent } from './dashboard/guild/leveling-module/leveling-module.component';
import { GuildSidebarComponent } from './dashboard/guild/guild-sidebar/guild-sidebar.component';
import { LeaderboardModuleComponent } from './dashboard/guild/leaderboard-module/leaderboard-module.component';
import { XPCardComponent } from './xp-card/xp-card.component';
import { DashboardSidebarComponent } from './dashboard/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { CustomizeXPCardComponent } from './dashboard/dashboard/customize-xp-card/customize-xp-card.component';
import { MaterialModule } from './material-module';
import { PremiumDirective } from '../directives/premium.directive';
import { SaveChangesComponent } from './utils/discord/save-changes/save-changes.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { PlusComponent } from './pages/plus/plus/plus.component';
import { CleanDateTimePipe } from './pipes/clean-date-time.pipe';
import { MemberUsernameComponent } from './utils/discord/member-username/member-username.component';
import { ZippyComponent } from './zippy/zippy.component';
import { AuditLogWidgetComponent } from './dashboard/widgets/audit-log-widget/audit-log-widget.component';
import { CommandsWidgetComponent } from './dashboard/widgets/commands-widget/commands-widget.component';
import { MiniDatePipe } from './pipes/mini-date.pipe';
import { environment } from 'src/environments/environment';
import { SnakeToSentenceCasePipe } from './pipes/snake-to-sentence-case.pipe';
import { TruncatedPipe } from './pipes/truncated.pipe';
import { DurationStringPipe } from './pipes/duration-string.pipe';
import { CamelToSentenceCasePipe } from './pipes/camel-to-sentence-case.pipe';
import { MessagePreviewComponent } from './utils/discord/message-preview/message-preview.component';
import { ReactionRolesModuleComponent } from './dashboard/dashboard/reaction-roles-module/reaction-roles-module.component';
import { PlusPaywallComponent } from './utils/plus-paywall/plus-paywall.component';
import { PlusBadgeComponent } from './utils/plus-badge/plus-badge.component';
import { StatsComponent } from './stats/stats.component';
import { PopularInputsGraphComponent } from './stats/popular-inputs-graph/popular-inputs-graph.component';
import { PopularCommandsGraphComponent } from './stats/popular-commands-graph/popular-commands-graph.component';
import { WavesComponent } from './utils/waves/waves.component';
import { PlusCardComponent } from './pages/plus/plus-card/plus-card.component';
import { DocsComponent } from './pages/docs/docs.component';

@Injectable()
export class AlertErrorHandler implements ErrorHandler {
  async handleError(error: Error | any) {
    try {
      console.log(error?.rejection?.error ?? error?.message ?? error);

      const key = localStorage.getItem('key');
      await fetch(`${environment.endpoint}/error?key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: error.message })
      });
    } finally {
      console.log(error);
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CommandsComponent,
    AuthComponent,
    LoginComponent,
    InviteComponent,
    LogoutComponent,
    DashboardOverviewComponent,
    SidebarComponent,
    GuildComponent,
    SpinnerComponent,
    CommandsModuleComponent,
    AutoModModuleComponent,
    GeneralModuleComponent,
    MusicModuleComponent,
    LevelingModuleComponent,
    SettingsModuleComponent,
    LevelingModuleComponent,
    GuildSidebarComponent,
    LeaderboardModuleComponent,
    XPCardComponent,
    CustomizeXPCardComponent,
    DashboardSidebarComponent,
    PremiumDirective,
    SaveChangesComponent,
    NotFoundComponent,
    PaymentSuccessComponent,
    PlusComponent,
    CleanDateTimePipe,
    MemberUsernameComponent,
    ZippyComponent,
    AuditLogWidgetComponent,
    CommandsWidgetComponent,
    MiniDatePipe,
    SnakeToSentenceCasePipe,
    TruncatedPipe,
    DurationStringPipe,
    CamelToSentenceCasePipe,
    MessagePreviewComponent,
    LogModuleComponent,
    LogsModuleComponent,
    ReactionRolesModuleComponent,
    PlusPaywallComponent,
    PlusBadgeComponent,
    StatsComponent,
    PopularInputsGraphComponent,
    PopularCommandsGraphComponent,
    WavesComponent,
    PlusCardComponent,
    DocsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HighlightModule,
    ChartsModule
  ],
  exports: [PremiumDirective],
  providers: [
    { provide: ErrorHandler, useClass: AlertErrorHandler },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: HIGHLIGHT_OPTIONS, useValue: { languages: getHighlightLanguages() } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

function getHighlightLanguages() {
  return {
    json: () => import('highlight.js/lib/languages/json')
  };
}
