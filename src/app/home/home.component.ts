import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppService } from '../app.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public instaData;
  public selectedData;

  constructor(private appService: AppService, private modalService: NgbModal) {}
  likesCount: number;
  isActive: boolean;
  ngOnInit(): void {
      this.appService.getInstaData().subscribe((res) => {
          this.instaData = res;
      })
  }
  open(content, data) {
    const modelRef = this.modalService.open(content);
    this.selectedData = data;
  }
  increaseLikes(likes: number) {
		this.selectedData.likes = likes + 1;
	}
}
