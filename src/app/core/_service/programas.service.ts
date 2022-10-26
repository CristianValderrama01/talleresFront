import { HttpClient } from '@angular/common/http';
import { Programas } from './../_model/programas';
import { CRUDService } from './crud.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService extends CRUDService<Programas>{

  constructor(protected override _http: HttpClient) {
    super(
      _http,
      `${environment.HOST}/programas`
    )
   }
}
