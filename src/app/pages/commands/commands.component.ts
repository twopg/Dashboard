import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandsService } from '../../services/commands.service';
import { GuildService } from '../../services/guild.service';
import { kebabToCamelCase } from '../../utils';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
  commands = [];
  displayedCommands = [];
  modules = [
    { name: 'autoMod', icon: 'fa-gavel' },
    { name: 'general', icon: 'fa-star' },
    { name: 'leveling', icon: 'fa-trophy' },
    { name: 'music', icon: 'fa-music' }
  ];
  selectedModule = '';
  guild: any;

  constructor(
    private route: ActivatedRoute,
    private service: CommandsService,
    private guildService: GuildService) {}

  async ngOnInit() {
    await this.service.init();

    this.commands = this.displayedCommands = [...this.service.commands];

    document.title = '2PG - Commands';

    const guildId = this.route.snapshot.queryParamMap.get('guild_id');
    if (guildId) {
      const { guild, commands } = await this.guildService.getCommands(guildId);
      const customCommands = commands
        .filter(c => c.alias && c.command)
        ?.map(c => ({
          name: c.alias,
          module: 'Custom',
          summary: c.command,
          usage: c.alias,
          anywhere: c.anywhere
        }));

      this.displayedCommands.push(...customCommands);
      this.guild = guild;
    }
    this.setModule('general');
  }

  setModule(name: string) {
    this.selectedModule = name;
    this.displayedCommands = this.commands
      .filter(c => kebabToCamelCase(c.module) === name)
      .sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  search(query: string) {
    const empty = query.trim().length <= 0;
    if (empty)
      return this.setModule(this.modules[0].name);

    this.displayedCommands = this.service.search(query);
    this.selectedModule = '';
  }
}
