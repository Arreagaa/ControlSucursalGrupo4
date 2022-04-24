import { Component, OnInit } from '@angular/core';
import { ProductosSucursalService } from 'src/app/services/productos-sucursal.service';
//SUCURSALES
import { ProductosSucursal } from 'src/app/models/productosSucursal.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos-s',
  templateUrl: './productos-s.component.html',
  styleUrls: ['./productos-s.component.scss'],
  providers: [ ProductosSucursalService, UsuarioService ]
})
export class ProductosSComponent implements OnInit {

  public token;
  public idSucursal;

  //SUCURSALES
  public productoSucursalModelGet: ProductosSucursal;
  public productoSucursalModelPost: ProductosSucursal;
  public productoSucursalModelId: ProductosSucursal;

  constructor(private _productosSucursalService: ProductosSucursalService, public _usuarioService: UsuarioService) {
    this.productoSucursalModelPost = new ProductosSucursal('','',0,'',0,'','');
    this.productoSucursalModelId = new ProductosSucursal('','',0,'',0,'','');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getSucursales();
  }

  getSucursales(){
    this._productosSucursalService.obtenerProductosSucursal(this.idSucursal, this.token).subscribe(
      (response) => {
        this.productoSucursalModelGet = response.sucursales;
        console.log(response.sucursales);
        console.log(this.productoSucursalModelGet);

      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

}
