import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayService } from 'src/app/services/pay.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {
  checkoutEndpoint = `${environment.endpoint}/pay`;

  get plusDaysLeft() {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date().getTime();
    const secondDate = new Date(this.userService.savedUser.premiumExpiration).getTime();

    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }

  constructor(
    private route: ActivatedRoute,
    private pay: PayService,
    public userService: UserService
  ) {}
  
  async ngOnInit() {
    await this.userService.init();

    const status = this.route.snapshot.queryParamMap.get('payment_status');
    if (status === 'failed')
      alert('Payment Failed');
  }

  async checkout(plan: number) {
    window.location.href = this.pay.payURL(plan);
  }
}
