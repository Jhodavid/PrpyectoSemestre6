import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  producto: any;
  mostrarIntrucciones = true;

  constructor(
    public modaRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: any) {
    this.producto = {
      nombre: datos[0],
      instrucciones: datos[1],
      texto: datos[2],
      img: datos[3],
    }
   }

   validarInstrucciones(){
     if(this.producto.instrucciones === ""){
      this.mostrarIntrucciones = false;
     }
     
   }

  ngOnInit(): void {
    this.validarInstrucciones();
  }

}
