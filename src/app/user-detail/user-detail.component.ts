import { Component } from '@angular/core';
import { Firestore, doc, collection} from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  userId:string | null = '';
  user$: Observable<any> | null = null;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {

  }

  ngOnInit(){
    this.route.paramMap.subscribe(routePath => {
      this.userId = routePath.get('id');
      if (this.userId) {
        let test = doc(collection(this.firestore, 'user'), this.userId);
        console.log(test);
      }  
    })
  }
}
