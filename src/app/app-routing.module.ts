import { BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuildTalentComponent } from './build-talent/build-talent.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LiveCourseLandingComponent } from './live-course-landing/live-course-landing.component';
import { LiveCourseComponent } from './live-course/live-course.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TalentAndCareersComponent } from './talent-and-careers/talent-and-careers.component';
import { UnlockChapter1Component } from './unlock-chapter1/unlock-chapter1.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WriterProfileComponent } from './writer-profile/writer-profile.component';
import { WriterComponent } from './writer/writer.component';
import { AppComponent } from './app.component';
import { LearnByProfessionComponent } from './learn-by-profession/learn-by-profession.component';
import { LearnBySubjectComponent } from './learn-by-subject/learn-by-subject.component';
import { MasterClassComponent } from './master-class/master-class.component';
import { MicroCourseComponent } from './micro-course/micro-course.component';
import { ExtensiveCourseComponent } from './extensive-course/extensive-course.component';
import { DirectorsComponent } from './directors/directors.component';
import { ActorsComponent } from './actors/actors.component';
import { CinemaToGrapherComponent } from './cinema-to-grapher/cinema-to-grapher.component';
import { EditorComponent } from './editor/editor.component';
import { SoundEditorComponent } from './sound-editor/sound-editor.component';
import { FilmMakerComponent } from './film-maker/film-maker.component';
import { FilmEditingComponent } from './film-editing/film-editing.component';
import { VideoGrapherComponent } from './video-grapher/video-grapher.component';


const routes: Routes = [
  
  { path: '', redirectTo:'/landing',pathMatch: 'full'},
  { path: 'landing', component:LandingComponent, },
  { path: 'home', component: HomeComponent,},
  { path: 'learn-by-profession', component: LearnByProfessionComponent,},
  { path: 'learn-by-subject', component:LearnBySubjectComponent,},
  { path: 'master-class', component: MasterClassComponent,},
  { path: 'micro-course', component: MicroCourseComponent,},
  { path: 'extensive-course', component: ExtensiveCourseComponent,},
  { path: 'sign-in', component: SignInComponent,},
  { path: 'sign-up', component: SignUpComponent,},
  { path: 'my-courses', component: MyCoursesComponent,},
  { path: 'personal-profile', component: PersonalProfileComponent,},
  { path: 'about', component: AboutComponent,},
  { path: 'welcome', component: WelcomeComponent,},
  { path: 'build-talent', component: BuildTalentComponent,},
  { path: 'get-started', component: GetStartedComponent,},
  { path: 'live-course', component: LiveCourseComponent,},
  { path: 'live-course-landing', component: LiveCourseLandingComponent,},
  { path: 'search', component:SearchComponent,},
  { path: 'talent-and-careers', component:TalentAndCareersComponent,},
  { path: 'unlock-chapter1', component:UnlockChapter1Component,},
  { path: 'writer', component:WriterComponent,},
  { path: 'directors', component:DirectorsComponent,},
  { path: 'actors', component:ActorsComponent,},
  { path: 'cinema-to-grapher', component:CinemaToGrapherComponent,},
  { path: 'editor', component:EditorComponent,},
  { path: 'sound-editor', component:SoundEditorComponent,},
  { path: 'film-maker', component:FilmMakerComponent,},
  { path: 'film-editing', component:FilmEditingComponent,},
  { path: 'video-grapher', component:VideoGrapherComponent,},

  { path: '**', redirectTo:'/home'}

  
  
  
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }
