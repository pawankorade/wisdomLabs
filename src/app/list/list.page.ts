import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { _ } from 'underscore';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public shops: Array<any> = [];
  public items: Array<any> = [];
  mySearchBar: string;
  constructor(private http: HttpClient) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  onSearchBarChange() {
    console.log(this.mySearchBar);
    const searchBarText = this.mySearchBar;
    this.items = _.filter(this.shops, (shop) => {
      // const patternTest = `/${searchBarText}/gmi`;
      // console.log(patternTest);
      //  if () {
      //   return shop;
      // }
      const testX = new RegExp(searchBarText.toLowerCase());
      return testX.test(shop.name.toLowerCase()) || testX.test(shop.city.toLowerCase());
      // return shop.name.match('\/' + searchBarText + '\/gmi')/*  || shop.city.match(/${searchBarText}/gmi) */;
      // return shop.name.match(/testX/gmi)/*  || shop.city.match(/${searchBarText}/gmi) */;
    });
    console.log(this.items);
  }

  ngOnInit() {
    this.http.get('https://api.openbrewerydb.org/breweries', {
      // params: new HttpParams(data)
    }).subscribe((response: any) => {
      console.log('breweries => ', response);
      this.shops = response;
      this.items = response;
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
