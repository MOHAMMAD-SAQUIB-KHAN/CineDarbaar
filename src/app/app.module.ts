import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import {Routes,RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BuildTalentComponent } from './build-talent/build-talent.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LiveCourseComponent } from './live-course/live-course.component';
import { LiveCourseLandingComponent } from './live-course-landing/live-course-landing.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { SearchComponent } from './search/search.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TalentAndCareersComponent } from './talent-and-careers/talent-and-careers.component';
import { UnlockChapter1Component } from './unlock-chapter1/unlock-chapter1.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WriterComponent } from './writer/writer.component';
import { WriterProfileComponent } from './writer-profile/writer-profile.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { ApiService } from './service/api.service';
import { MasterClassComponent } from './master-class/master-class.component';
import { ExtensiveCourseComponent } from './extensive-course/extensive-course.component';
import { MicroCourseComponent } from './micro-course/micro-course.component';
import { LearnByProfessionComponent } from './learn-by-profession/learn-by-profession.component';
import { LearnBySubjectComponent } from './learn-by-subject/learn-by-subject.component';
import { DirectorsComponent } from './directors/directors.component';
import { ActorsComponent } from './actors/actors.component';
import { CinemaToGrapherComponent } from './cinema-to-grapher/cinema-to-grapher.component';
import { EditorComponent } from './editor/editor.component';
import { SoundEditorComponent } from './sound-editor/sound-editor.component';
import { FilmMakerComponent } from './film-maker/film-maker.component';
import { VideoGrapherComponent } from './video-grapher/video-grapher.component';
import { FilmEditingComponent } from './film-editing/film-editing.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BuildTalentComponent,
    GetStartedComponent,
    LiveCourseComponent,
    LiveCourseLandingComponent,
    MyCoursesComponent,
    PersonalProfileComponent,
    SearchComponent,
    SignInComponent,
    SignUpComponent,
    TalentAndCareersComponent,
    UnlockChapter1Component,
    UserProfileComponent,
    WelcomeComponent,
    WriterComponent,
    WriterProfileComponent,
    AboutComponent,
    LandingComponent,
    MasterClassComponent,
    ExtensiveCourseComponent,
    MicroCourseComponent,
    LearnByProfessionComponent,
    LearnBySubjectComponent,
    DirectorsComponent,
    ActorsComponent,
    CinemaToGrapherComponent,
    EditorComponent,
    SoundEditorComponent,
    FilmMakerComponent,
    VideoGrapherComponent,
    FilmEditingComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
