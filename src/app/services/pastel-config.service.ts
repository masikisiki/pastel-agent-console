import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastelConfigService {

  constructor(private http: HttpClient) { }

  public loadConfig(config: string): Observable<{}> {
    // this.http.get(`http://localhost:8881/${config}`);
    const d = data.find(i => i.label == config);
    return of(d.data);
  }


}

const data = [
  {
    label: 'SDK',
    data: { "$id": "1", "sdkLicense": "DK191110346", "sdkAuthCode": "9634365", "pastelProjectPath": "D:\\ETHNIX20", "Id": "29414e81-2e1b-4e30-a5c4-6840ff48ab93", "Active": true }
  },
  {
    label: 'Invoice',
    data: { "$id": "1", "MinuteInterval": 10, "CollectionId": "d7d9198b-21e5-4403-9ac2-6c3e9b69ec43", "CollectionName": "Invoices", "Username": "Lizo", "Password": "L1z0", "ApiBaseUrl": "https://api.moditar.com", "FetchDate": "2019-10-05T00:00:00+02:00", "Id": "0552def0-3796-4b3e-a021-b6aa10077d92", "Active": false }
  },
  {
    label: 'Customer',
    data: { "$id": "1", "MinuteInterval": 1, "CollectionId": "eea59ff4-f626-4c64-b6d1-e361dd5f1e32", "CollectionName": "6997a294-e4af-48c3-86d4-d3f1af8b4d36", "Username": "Lizo", "Password": "L1z0", "ApiBaseUrl": "https://api.moditar.com", "FetchDate": "2020-10-01T00:00:00+02:00", "Id": "4cb50c5e-48fa-4d6e-a82f-1fe5b8373a3c", "Active": false }
  },
  {
    label: 'Product',
    data: { "$id": "1", "MinuteInterval": 1, "CollectionId": "7072eeec-7f53-498b-af87-e17c124a9262", "CollectionName": "6997a294-e4af-48c3-86d4-d3f1af8b4d36", "Username": "Lizo", "Password": "L1z0", "ApiBaseUrl": "https://api.moditar.com", "FetchDate": "2021-01-01T00:00:00+02:00", "Id": "1de4795f-6c77-465b-a357-0dc85e128c5a", "Active": false }
  }
  ,
  {
    label: 'PriceList',
    data: { "$id": "1", "MinuteInterval": 1, "CollectionId": "77d9cceb-81e1-4f3f-ba70-53da8dc18bb3", "CollectionName": "PriceList", "Username": "Lizo", "Password": "L1z0", "ApiBaseUrl": "https://api.moditar.com", "FetchDate": "2020-10-01T00:00:00+02:00", "Id": "0318eaa8-28ce-492e-9f7a-912889f5e94c", "Active": false }
  }
  ,
  {
    label: 'OrderApi',
    data: { "$id": "1", "DeliveryChargeCode": "delfee", "DeliveryChargeDesc": "delfee", "DeliveryChargeLimit": 500.0, "DeliveryChargeAmount": 2500.0, "MinuteInterval": 4, "CollectionId": "c68b5a2f-b8e3-4c26-9feb-6e561544ee3a", "CollectionName": "my Orders", "Username": "Lizo", "Password": "L1z0", "ApiBaseUrl": "https://api.moditar.com", "FetchDate": "2020-10-01T00:00:00+02:00", "Id": "42c83837-2503-433a-9288-8e2dcbcd9ee5", "Active": true }
  }
];