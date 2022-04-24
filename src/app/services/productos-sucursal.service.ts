import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductosSucursal } from '../models/productosSucursal.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosSucursalService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');

  constructor(public _http: HttpClient) { }

  obtenerProductosSucursal(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/buscarProductoSucursal/' + idSucursal, { headers: headersToken })
  }
}
