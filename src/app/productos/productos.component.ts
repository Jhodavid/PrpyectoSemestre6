import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalComponent } from './modal/modal.component';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnDestroy, OnInit {

  gridColums: number | undefined;
  gridRows: string | undefined;
  modoCelular = false;
  listaProductos: any[] = [];

  destroyed = new Subject<void>();
  currentScreenSize: string | undefined;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
  ]);

  constructor(breakpointObserver: BreakpointObserver,
              public dialog: MatDialog,
              private productosService: ProductosService) {breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
      if(this.currentScreenSize == 'XSmall'){
        this.gridColums = 1;
        this.gridRows = "1:1";
        this.modoCelular = true;
      }else if(this.currentScreenSize == 'Small'){
        this.gridColums = 2;
        this.gridRows = "11:12";
        this.modoCelular = true;
      }else if(this.currentScreenSize == 'Medium'){
        this.gridColums = 3;
        this.gridRows = "9:10";
        this.modoCelular = false;
      }else if(this.currentScreenSize == 'Large'){
        this.gridColums = 4;
        this.gridRows = "10:11";
        this.modoCelular = false;
      }
    });}

    ngOnDestroy() {
      this.destroyed.next();
      this.destroyed.complete();
    }

    openDialog(nombre: any, instrucciones: any, texto: any, img: any) {
      this.dialog.open(ModalComponent,{
        data: [nombre, instrucciones, texto, img]
      });
    }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.listaProductos = this.productosService.getProductos();
  }
}
