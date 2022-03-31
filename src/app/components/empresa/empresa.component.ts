import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';

//EMPRESA
import { Empresa } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';

/*@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [ ProductosService ]
})
export class EmpresaComponent implements OnInit {

  //Productos
  public productoModelGet: Producto;
  public productoModelPost: Producto;

  constructor(private _productoService: ProductosService) {
    this.productoModelPost = new Producto('','',0,0,0);
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this._productoService.obtenerProductos().subscribe(
      (response) => {
        this.productoModelGet = response.productos;
        console.log(this.productoModelGet);

      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postProductos(){
    this._productoService.agregarProducto(this.productoModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}*/

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [ EmpresasService ]
})
export class EmpresaComponent implements OnInit {

  //Productos
  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;

  constructor(private _empresaService: EmpresasService) {
    this.empresaModelPost = new Empresa('','', '','');
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this._empresaService.obtenerEmpresas().subscribe(
      (response) => {
        this.empresaModelGet = response.empresas;
        console.log(this.empresaModelGet);

      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postProductos(){
    this._empresaService.agregarEmpresa(this.empresaModelPost).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
