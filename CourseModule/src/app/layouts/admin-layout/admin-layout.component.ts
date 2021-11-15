import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/auth/_services/token-storage.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(private router: Router, private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    if (!this.tokenStorage.getToken()) {
      this.router.navigateByUrl("/login");
  }
  }

}
