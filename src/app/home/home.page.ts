import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import {
  OpenALPR,
  OpenALPROptions,
  OpenALPRResult
} from "@ionic-native/openalpr/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html"
})
/**
 * Class HomePage
 */
export class HomePage {
  //Camera options.
  protected cameraOptions: CameraOptions;
  //OpenALPR options.
  protected openAlprOptions: OpenALPROptions;
  //Countries array.
  public countries: string[] = [];

  /**
   * Constructor.
   *
   * @param camera
   */
  constructor(
    protected camera: Camera,
    protected openalpr: OpenALPR,
    protected platform: Platform
  ) {
    //Set default camera options.
    this.cameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.openAlprOptions = {
      amount: 3,
      country: this.openalpr.Country.EU
    };

    this.countries = this.getAllCountries();
  }

  /**
   * Scan an image for any licenseplates.
   *
   * @param input - determines whether to use the camera or the photolibrary.
   */
  scan(input: string) {
    this.cameraOptions.sourceType =
      input === "camera"
        ? this.camera.PictureSourceType.CAMERA
        : this.camera.PictureSourceType.PHOTOLIBRARY;

    this.camera.getPicture(this.cameraOptions).then(imageData => {
      this.openalpr
        .scan(imageData, this.openAlprOptions)
        .then((result: OpenALPRResult) => {
          console.log(result);
        });
    });

    if (this.platform.is("ios")) {
      this.camera.cleanup();
    }
  }

  /**
   * Set country.
   *
   * @param country
   */
  setCountry(country: string) {
    console.log(country);
    this.openAlprOptions.country = country;
  }

  /**
   * Get currently selected country.
   */
  getCountry(): string {
    return this.openAlprOptions.country;
  }

  /**
   * Function to get all countries options from the openalpr Country property.
   */
  getAllCountries(): string[] {
    const countries = [];

    for (let country in this.openalpr.Country) {
      if (this.openalpr.Country.hasOwnProperty(country)) {
        const countryValue = this.openalpr.Country[country];
        countries.push({
          value: countryValue,
          label: countryValue.toUpperCase()
        });
      }
    }

    return countries;
  }
}
