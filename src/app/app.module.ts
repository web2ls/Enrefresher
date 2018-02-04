import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WordsListComponent } from './words-list/words-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewWordFormComponent } from './new-word-form/new-word-form.component';
import { environment } from '../environments/environment';
import { WordService } from './services/word.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { StatisticComponent } from './statistic/statistic.component';
import { ControlsComponent } from './controls/controls.component';
import { LearnedWordService } from './services/learned-word.service';
import { WordsInProccessComponent } from './words-in-proccess/words-in-proccess.component';
import { LearnedWordsComponent } from './learned-words/learned-words.component';
import { ExamComponent } from './exam/exam.component';
import { TranslatedArrayPipe } from './pipes/translated-array.pipe';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    WordsListComponent,
    NavbarComponent,
    NewWordFormComponent,
    StatisticComponent,
    ControlsComponent,
    WordsInProccessComponent,
    LearnedWordsComponent,
    ExamComponent,
    TranslatedArrayPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: WordsListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [
    WordService,
    LearnedWordService,
    AuthService, 
    AngularFireDatabase,
    AngularFireAuth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
