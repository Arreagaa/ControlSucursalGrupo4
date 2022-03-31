import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//EMPRESA
import { Empresa } from 'src/app/models/empresas.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [ EmpresasService ]
})
export class EmpresaComponent implements OnInit {

  //Empresa
  public empresaModelGet: Empresa;
  public empresaModelPost: Empresa;

  constructor(private _empresaService: EmpresasService) {
    this.empresaModelPost = new Empresa('','', '','', '', '');
  }

  ngOnInit(): void {
    this.getEmpresas();
  }

  getEmpresas(){
    this._empresaService.obtenerEmpresas().subscribe(
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
