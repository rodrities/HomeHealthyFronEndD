import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Diet } from './../../models/diet';
import { HttpDietService } from '../../services/http-diet.service';

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.css']
})
export class DietDetailComponent implements OnInit {

  diet: Diet;

  constructor(
    private route: ActivatedRoute,
    private httpDietService: HttpDietService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.httpDietService.getDiet(id)
      .subscribe(diet => {
        this.diet = diet;
      });
  }
}
