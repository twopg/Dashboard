import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent {
  discordInvite = environment.discordInvite;

  get plusDaysLeft() {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date().getTime();
    const secondDate = new Date(this.userService.savedUser.premiumExpiration).getTime();

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }

  constructor(
    public userService: UserService
  ) {

  }
}
