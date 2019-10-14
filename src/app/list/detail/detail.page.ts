import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  shop: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit() {
    /* this.http.get('https://api.openbrewerydb.org/breweries/' + this.route.snapshot.paramMap.get('id'), {
      // params: new HttpParams(data)
    }).subscribe((response: any) => {
      this.shop = response;
      console.log('brewery => ', this.shop);
    }); */
    this.route.data.subscribe((data: { brewery: any }) => {
      console.log(data.brewery);
      this.shop = data.brewery;
    });

  }

}
