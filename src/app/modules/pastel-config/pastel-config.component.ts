import { SchedulerOption } from './../../models/scheduler-option';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastelConfigService } from 'src/app/services/pastel-config.service';

@Component({
  selector: 'app-pastel-config',
  templateUrl: './pastel-config.component.html',
  styleUrls: ['./pastel-config.component.scss']
})
export class PastelConfigComponent implements OnInit {

  data: {} = {};
  isConfigActive = false;

  schedulerOptions = new Array<SchedulerOption>();

  target = '';

  constructor(private pService: PastelConfigService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadSchedulerOptions();
    this.activeRoute.params.subscribe(p => {
      if (p['target']) {
        this.target = p['target'];
        this.loadData(this.target);
      }
    });
  }

  loadData(config: string) {
    this.pService.loadConfig(config).subscribe(data => {
      data = data ? data : chooseDefult(this.target);
      this.data = this.resolveScheduler(data);
      this.isConfigActive = data['Active'] ? data['Active'] : false;
    });
  }

  resolveScheduler(data: {}): {} {
    if (data && data['Schedule']) {
      const schedule = this.schedulerOptions.find(a => a.Value == data['Schedule'])
      if (schedule) {
        data['Schedule'] = schedule.Name;
      }
    }
    return data;
  }

  saveChanges(data: {}) {
    this.pService.saveConfigChanges(data, this.target)
      .subscribe(() => this.pService.success('Success'))
  }

  loadSchedulerOptions() {
    this.pService.loadSchedulerOptions()
      .subscribe(data => this.schedulerOptions = data)
  }
}

function chooseDefult(tartget: string) {
  let data = {};
  switch (tartget) {
    case 'Customer':
    case 'Product':
    case 'Invoice':
    case 'PriceList':
      data = defualts.find(a => a.label == 'configDefualtData');
      break;

    case 'SupplierInvoice':
    case 'OrderApi':
      data = defualts.find(a => a.label == 'apiDefaultData');
      break;
    case 'SDK':
      data = defualts.find(a => a.label == 'sdkDefaultData');
      break;
    case 'FTP':
      data = defualts.find(a => a.label == 'ftpDefaultData')
      break;
    case 'ModitorMicrosInvoice':
      data = defualts.find(a => a.label == 'moditorMicrosInvoice')
      break;
    case 'MagicCloud':
      data = defualts.find(a => a.label == 'magicCloud')
      break;
  }

  return data && data['data'] ? data['data'] : {}
}

const defualts = [
  {
    label: 'configDefualtData',
    data: {
      CollectionId: "6997a294-e4af-48c3-86d4-d3f1af8b4d36",
      CollectionName: "Test Collection",
      ApiBaseUrl: "http://127.0.0.1:9110",
      FetchDate: "2021-01-29",
      Active: false,
      Schedule: 0,
      Username: "User",
      Password: "Password",
      Id: "aa79f23b-5707-4c59-8a2d-5c09702f1a47"
    }
  },
  {
    label: 'sdkDefaultData',
    data: {
      $id: "1",
      sdkAuthCode: "6997a294-e4af-48c3-86d4-d3f1af8b4d36",
      sdkLicense: "6997a294-e4af-48c3-86d4-d3f1af8b4d36",
      pastelProjectPath: "C:\\",
    }
  },
  {
    label: 'ftpDefaultData',
    data: {
      $id: "1",
      Address: "127.0.0.1",
      Port: 21,
      Active: false,
      Username: "User",
      Password: "Password",
    }
  },
  {
    label: 'apiDefaultData',
    data: {
      CollectionId: "6997a294-e4af-48c3-86d4-d3f1af8b4d36",
      CollectionName: "Test Collection",
      ApiBaseUrl: "http://127.0.0.1:9110",
      FetchDate: "2021-01-29",
      DeliveryChargeCode: "A",
      DeliveryChargeDesc: "B",
      DeliveryChargeLimit: 0,
      DeliveryChargeAmount: 0,
      Schedule: 0,
      Active: false,
      Username: "User",
      Password: "Password",
      Id: "aa79f23b-5707-4c59-8a2d-5c09702f1a47",
    }
  },
  {
    label: 'moditorMicrosInvoice',
    data: {
      "Schedule": 0,
      "CollectionId": "string",
      "CollectionName": "string",
      "Username": "string",
      "Password": "string",
      "ApiBaseUrl": "string",
      "FetchDate": "2021-03-03T14:25:42.199Z",
      "Id": "string",
      "Active": true,
      "InsertDate": "2021-03-03T14:25:42.199Z"
    }
  },

  {
    label: 'magicCloud',
    data: {
      "Schedule": 0,
      "MagicCloudUri": "string",
      "MagicCloudUserName": "string",
      "MagicCloudPassword": "string",
      "CompanyIdsCommaSeperated":"string",
      "Id": "string",
      "Active": true,
      "InsertDate": "2021-03-03T14:25:42.186Z"
    }
  },
];
