import { Component, OnInit } from '@angular/core';
import { InvestigationsModel } from '../investigations.model';
import { InvestigationsService } from '../investigations.service';

@Component({
  selector: 'app-investigations-list',
  templateUrl: './investigations-list.component.html',
  styleUrls: ['./investigations-list.component.css']
})
export class InvestigationsListComponent implements OnInit {

  investigations: InvestigationsModel[]

  constructor(private investigationsService: InvestigationsService) { }

  ngOnInit(): void {
    this.investigations = this.investigationsService.getInvestigations()
  }

}
