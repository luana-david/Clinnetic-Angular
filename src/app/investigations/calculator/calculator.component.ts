import { Component, OnInit } from '@angular/core';
import { InvestigationsService } from '../investigations.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  investigationList: {name: string, price: number}[] = []
  total:number = 0

  constructor(private investigationService: InvestigationsService) { }

  ngOnInit(): void {
    this.investigationService.toCalculate().subscribe(investigation => {
      console.log(this.total);
      this.investigationList.push(investigation)
      this.total += investigation.price
    })
  }

  onDeleteInv(index) {
    this.total -= this.investigationList[index].price
    this.investigationList.splice(index, 1)
  }

}
