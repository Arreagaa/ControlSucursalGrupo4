import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
//EMPRESA
import { Empresa } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [ EmpresasService, UsuarioService ]
})
export class EmpresaComponent implements OnInit {

  public token;

  //Empresa
  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;

  constructor(private _empresaService: EmpresasService, private _usuarioService: UsuarioService) {
    this.empresaModelPost = new Empresa('','', '','', '', '');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this._empresaService.obtenerEmpresas(this.token).subscribe(
      (response) => {
        this.empresaModelGet = response.usuarios;
        console.log(response);
        console.log(this.empresaModelGet);
      },
      (error)=>{
        console.log(<any>error)
      }
    )
  }

  postEmpresas(){
    this._empresaService.agregarEmpresa(this.empresaModelPost, this._usuarioService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getEmpresas();
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

  deleteEmpresa(idEmpresa) {
    this._empresaService.eliminarEmpresa(idEmpresa, this._usuarioService.obtenerToken()).subscribe(
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
