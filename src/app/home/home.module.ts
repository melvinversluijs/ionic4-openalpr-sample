import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { Camera } from "@ionic-native/camera/ngx";

import { HomePage } from "./home.page";
import { ResultModalModule } from "../result/result.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultModalModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage
      }
    ])
  ],
  providers: [Camera],
  declarations: [HomePage]
})
export class HomePageModule {}
