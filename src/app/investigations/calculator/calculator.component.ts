import { Component, OnInit } from '@angular/core';
import { InvestigationsService } from '../investigations.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  investigationList: {name: string, price: number}[] = []

  constructor(private investigationService: InvestigationsService) { }

  ngOnInit(): void {
    this.investigationService.toCalculate().subscribe(investigation => this.investigationList.push(investigation))
  }

}
