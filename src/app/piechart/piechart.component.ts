import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html",
  styleUrls: ["./piechart.component.css"]
})
export class PiechartComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // Pie
  public pieChartLabels: string[] = [
    "Brandix",
    "Hidramani",
    "Helacloding",
    "Jat",
    "Maas"
  ];
  public pieChartData: number[] = [40, 20, 20, 10, 10];
  public pieChartType: string = "pie";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
