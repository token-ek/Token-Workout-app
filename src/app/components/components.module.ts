import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from '../pipes/pipes.module';
import { HtmlComponent } from './html/html.component';
import { PostratingComponent } from './postrating/postrating.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { StarRatingModule } from 'ionic4-star-rating';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { EmptyComponent } from './empty/empty.component';
import { RestdayComponent } from './restday/restday.component';
import { PostsfavComponent } from './postsfav/postsfav.component';
import { RouterModule } from '@angular/router';
import { WorkoutsfavComponent } from './workoutsfav/workoutsfav.component';
import { DietsfavComponent } from './dietsfav/dietsfav.component';


@NgModule({
  entryComponents: [PostcommentsComponent, AddcommentComponent],
  declarations: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,
    PostratingComponent,
    PostcommentsComponent,
    AddcommentComponent,
    EmptyComponent,
    RestdayComponent,
    PostsfavComponent,
    WorkoutsfavComponent,
    DietsfavComponent
  ],
  exports: [
    BackbuttonComponent,
    LoadingComponent,
    HtmlComponent,
    PostratingComponent,
    PostcommentsComponent,
    AddcommentComponent,
    EmptyComponent,
    RestdayComponent,
    PostsfavComponent,
    WorkoutsfavComponent,
    DietsfavComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    StarRatingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
