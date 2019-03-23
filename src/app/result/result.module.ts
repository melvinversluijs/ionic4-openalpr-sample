import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
// The modal's component of the previous chapter
import { ResultModal } from "./result.page";
@NgModule({
  declarations: [ResultModal],
  imports: [IonicModule, CommonModule],
  entryComponents: [ResultModal]
})
export class ResultModalModule {}
