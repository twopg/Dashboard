import { Component, OnInit } from '@angular/core';
import { ModuleConfig } from '../../../module-config';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { GuildService } from '../../../services/guild.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { toIterable } from 'src/app/utils';

@Component({
  selector: 'app-auto-mod-module',
  templateUrl: './auto-mod-module.component.html',
  styleUrls: ['./auto-mod-module.component.css']
})
export class AutoModModuleComponent extends ModuleConfig implements OnInit {
  maxRules = toIterable(4);
  filters = [ MessageFilter.Links, MessageFilter.Words, MessageFilter.MassMention, MessageFilter.MassCaps ];
  moduleName = 'autoMod';

  constructor(
    guildService: GuildService,
    route: ActivatedRoute,
    saveChanges: MatSnackBar) {
    super(guildService, route, saveChanges);
  }

  async ngOnInit() {
    await super.init();
  }
  
  buildForm({ autoMod }: any) {
    const form = new FormGroup({
      banWords: new FormControl([]),
      banLinks: new FormControl([]),
      enabled: new FormControl(true),
      filters: new FormControl([]),
      autoDeleteMessages: new FormControl(true),
      autoWarnUsers: new FormControl(false),
      ignoredRoles: new FormControl([]),
      filterThreshold: new FormControl(5, [ Validators.min(1), Validators.max(20) ]),
      punishments: new FormArray(
        new Array(this.maxRules.length).fill(
          new FormGroup({
            type: new FormControl(''),
            warnings: new FormControl(5, [ Validators.min(1), Validators.max(100) ]),
            minutes: new FormControl(5, [ Validators.min(1), Validators.max(60) ])
          }), 0, this.maxRules.length
        )
      )
    });
    form.patchValue(autoMod);
    return form;
  }
}

export enum MessageFilter {
  Links = 'LINKS',
  MassCaps = 'MASS_CAPS',
  MassMention = 'MASS_MENTION',
  Words = 'WORDS',
  Toxicity = 'TOXICITY'
}
