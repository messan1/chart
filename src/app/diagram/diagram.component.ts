import { Component, OnInit, Input } from '@angular/core';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';
import { DagreNodesOnlyLayout } from './customDagreNodesOnly';
import * as shape from 'd3-shape';
export class Employee {
  id: string;
  name: string;
  office: string;
  role: string;
  upperManagerId?: string;
}

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss'],
})
export class DiagramComponent implements OnInit {

  @Input() employees: Employee[] = [];

  information:Node
  public nodes: Node[] = [];
  public links: Edge[] = [];
  public layoutSettings = {
    orientation: 'TB'
  };
  public curve: any = shape.curveLinear;
  public layout: Layout = new DagreNodesOnlyLayout();

  constructor() {
    this.employees = [
      {
        id: '1',
        name: 'Christian Jean',
        office: 'Office 1',
        role: 'DESIGNER',
      },
      {
        id: '2',
        name: 'François De la force',
        office: 'Office 2',
        role: 'DEV',
        upperManagerId: '1'
      },
      {
        id: '3',
        name: 'Patrick Gerard',
        office: 'Office 3',
        role: 'ARTISTE',
        upperManagerId: '1'
      },
      {
        id: '4',
        name: 'Guigma Marie',
        office: 'Office 4',
        role: 'INGENIEUR',
        upperManagerId: '1'
      },
      {
        id: '5',
        name: 'Marie-Gilla',
        office: 'Office 5',
        role: 'ELEVE',

        upperManagerId: '4'
      }
    ];
  }

  public ngOnInit(): void {
    for (const employee of this.employees) {
      const node: Node = {
        id: employee.id,
        label: employee.name,
        data: {
          office: employee.office,
          role: employee.role
        }
      };

      this.nodes.push(node);
    }

    for (const employee of this.employees) {
      if (!employee.upperManagerId) {
        continue;
      }

      const edge: Edge = {
        source: employee.upperManagerId,
        target: employee.id,
        label: '',
        data: {
          linkText: 'Relation'
        }
      };

      this.links.push(edge);
    }
  }

  public getStyles(node: Node): any {
    return {
      'background-color': node.data.backgroundColor
    };
  }

click(e){
  this.information=e
}
}
