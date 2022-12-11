import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavComponent } from './Components/header/nav/nav.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { DividerComponent } from './Components/divider/divider.component';
import { PfpComponent } from './Components/about-me/pfp/pfp.component';
import { BannerComponent } from './Components/about-me/banner/banner.component';
import { TextContainerComponent } from './Components/about-me/text-container/text-container.component';
import { EducationComponent } from './Components/education/education.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, AboutMeComponent, DividerComponent, PfpComponent, BannerComponent, TextContainerComponent, EducationComponent, SkillsComponent, ProjectsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
