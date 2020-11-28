import { Component, OnInit } from '@angular/core';
import {Collaborator} from '../../models/collaborator';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpCollaboratorsDataService} from '../../services/http-collaborators-data.service';
import {Observable} from 'rxjs';
import {Diet} from '../../models/diet';
import {HttpDietService} from '../../services/http-diet.service';

@Component({
  selector: 'app-collaborator-profile',
  templateUrl: './collaborator-profile.component.html',
  styleUrls: ['./collaborator-profile.component.css']
})
export class CollaboratorProfileComponent implements OnInit {

  collaborator: Collaborator;

  constructor(
    private route: ActivatedRoute,
    private httpCollaboratorsDataService: HttpCollaboratorsDataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.httpCollaboratorsDataService.getItem(id)
      .subscribe(collaborator => {
        this.collaborator = collaborator;
      });
  }

}
