import { Component } from "@angular/core";
import { mockData } from "./weather-data";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-title text="Hybrid car mileage report"></kendo-chart-title>
       <kendo-chart-legend position="top"></kendo-chart-legend>

      <kendo-chart-value-axis>
        <kendo-chart-value-axis-item
          *ngFor="let item of valueAxes"
          [name]="item.name"
          [title]="{ text: item.title }"
          [min]="item.min"
          [max]="item.max"
          [majorUnit]="item.majorUnit"
          [color]="item.color"
        >
        </kendo-chart-value-axis-item>
      </kendo-chart-value-axis>

      <kendo-chart-category-axis>
        <kendo-chart-category-axis-item
          [categories]="categories"
          [axisCrossingValue]="crossingValues"
        >
        </kendo-chart-category-axis-item>
      </kendo-chart-category-axis>

      <kendo-chart-series>
        <kendo-chart-series-item
          *ngFor="let item of series"
          [name]="item.name"
          [data]="item.data"
          [type]="item.type"
          [stack]="item.stack"
          [color]="item.color"
          [axis]="item.axis"
        >
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public series: any[] = [
    {
      type: "column",
      data: [20, 40, 45, 30, 50],
      stack: true,
      name: "on battery",
      color: "#cc6e38"
    },
    {
      type: "column",
      data: [20, 30, 35, 35, 40],
      stack: true,
      name: "on gas",
      color: "#ef955f"
    },
    {
      type: "line",
      data: [30, 38, 40, 32, 42],
      name: "mpg",
      color: "#ec5e0a",
      axis: "mpg"
    },
    {
      type: "line",
      data: [7.8, 6.2, 5.9, 7.4, 5.6],
      name: "l/100 km",
      color: "#4e4141",
      axis: "l100km"
    }
  ];

  public valueAxes: any[] = [
    {
      title: "miles",
      min: 0,
      max: 100
    },
    {
      name: "km",
      title: "km",
      min: 0,
      max: 161,
      majorUnit: 32
    },
    {
      name: "mpg",
      title: "miles per gallon",
      color: "#ec5e0a"
    },
    {
      name: "l100km",
      title: "liters per 100km",
      color: "#4e4141"
    }
  ];

  public categories: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  // Align the first two value axes to the left
  // and the last two to the right.
  //
  // Right alignment is done by specifying a
  // crossing value greater than or equal to
  // the number of categories.
  public crossingValues: number[] = [0, 0, 10, 10];
}
