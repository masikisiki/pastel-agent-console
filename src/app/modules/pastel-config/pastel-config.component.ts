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

  target = '';

  constructor(private pService: PastelConfigService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(p => {
      if (p['target']) {
        this.target = p['target'];
        this.loadData(this.target);
      }
    });
  }

  loadData(config: string) {
    console.log(config);
    this.pService.loadConfig(config).subscribe(data => {
      this.data = data;
      this.isConfigActive = data['Active'] ? data['Active'] : false;
    });
  }

  saveChanges(data: {}) {
    alert('HElo');
    alert(JSON.stringify(data));
  }

}
