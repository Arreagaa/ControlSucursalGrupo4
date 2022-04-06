import { Component, OnInit } from '@angular/core';
//USUARIO
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [ UsuarioService ]
})
export class RegistroComponent implements OnInit {

  //USUARIO
  public usuarioModelGet: Usuario;
  public usuarioModelPost: Usuario;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarioModelPost = new Usuario('','', '','', '', '');
   }

  ngOnInit(): void {
    //this.getUsuarios();
  }

  /*getUsuarios(){
    this._usuarioService.obtenerEmpresas().subscribe(
      (response) => {
        this.usuarioModelGet = response.usuarios;
        console.log(response);
        console.log(this.usuarioModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }*/

  postUsuarios(){
    this._usuarioService.agregarUsuario(this.usuarioModelPost).subscribe(
      (response)=>{
        console.log(response);
        //this.getUsuarios();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }
}
