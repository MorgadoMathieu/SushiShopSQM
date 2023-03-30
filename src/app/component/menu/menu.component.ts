import { Component, OnInit } from '@angular/core';
import { SushiAPI } from 'src/app/models/SushiAPI';
import { ManagerMenuService } from 'src/app/service/manager-menu.service';
import { StructureBox } from 'src/app/models/StructureBox';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api-service.service';
import { environment } from 'src/environments/environment';
import { Box } from 'src/app/models/Box';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  boxs: StructureBox[] = []; 
  apiBoxesUrl = environment.apiBoxesUrl;
  apiImageUrl = environment.apiImageUrl

  constructor(private managerMenuService: ManagerMenuService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.managerMenuService.getBoxes().subscribe({
      next:(boxs: StructureBox[]) => {
        this.boxs = boxs
      }, 
    })
  }

  //ngOnInit() {
  //  const url = `${this.apiUrl}`;
  //  this.http.get<SushiAPI>(url).subscribe((data) => {
  //    this.boxs = data.boxs;
  //  });
  //}

}


