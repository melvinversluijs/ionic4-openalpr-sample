import { Component } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { OpenALPRResult } from "@ionic-native/openalpr/ngx";

@Component({
  templateUrl: "result.page.html",
  selector: "result-modal"
})
export class ResultModal {
  // Array of OpenALPRResults.
  protected result: OpenALPRResult[];
  //Chosen country.
  protected country: string;

  /**
   * Constructor.
   *
   * @param modalController
   * @param navParams
   */
  constructor(
    protected modalController: ModalController,
    protected navParams: NavParams
  ) {
    this.result = this.navParams.get("result");
    this.country = this.navParams.get("country");
  }

  /**
   * Function to dismiss the modal.
   */
  async dismiss() {
    await this.modalController.dismiss();
  }

  /**
   * Function to round the confidence to a round number.
   *
   * @param confidence
   */
  roundConfidence(confidence: number) {
    return Math.round(confidence);
  }

  /**
   * Function to return country as uppercase.
   */
  getCountry(): string {
    return this.country.toUpperCase();
  }
}
