import { Component, OnInit } from '@angular/core';
import { ProductosSucursalService } from 'src/app/services/productos-sucursal.service';
//SUCURSALES
import { ProductosSucursal } from 'src/app/models/productosSucursal.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-s',
  templateUrl: './productos-s.component.html',
  styleUrls: ['./productos-s.component.scss'],
  providers: [ ProductosSucursalService, UsuarioService ]
})
export class ProductosSComponent implements OnInit {

  public token;
  public idSucursal;
  public productoSucursalModelId=[];

  //SUCURSALES
  public productoSucursalModelGet: ProductosSucursal;
  public productoSucursalModelPost: ProductosSucursal;
  //public productoSucursalModelId: ProductosSucursal;

  constructor(private _productosSucursalService: ProductosSucursalService, public _usuarioService: UsuarioService,
    public _activatedRoute: ActivatedRoute) {
    this.productoSucursalModelPost = new ProductosSucursal('','',0,'',0,'','');
    //this.productoSucursalModelId = new ProductosSucursal('','',0,'',0,'','');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      this.getSucursales(dataRuta.get('idSucursal'))
    })
    //this.getSucursales();
  }

  getSucursales(idSucursal){
    this._productosSucursalService.obtenerProductosSucursal(idSucursal, this.token).subscribe(
      (response) => {
        this.productoSucursalModelId = response.productosSucursal;
        console.log(response.productosSucursal);
        console.log(this.productoSucursalModelId);

      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

}
