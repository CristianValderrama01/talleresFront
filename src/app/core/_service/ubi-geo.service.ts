import { HttpClient } from '@angular/common/http';
import { UbiGeo } from './../_model/ubi-geo';
import { CRUDService } from './crud.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UbiGeoService extends CRUDService<UbiGeo>{

  constructor(protected override _http: HttpClient) {
    super(
      _http,
      `${environment.HOST}/ubi-geo`
    )
   }
}
