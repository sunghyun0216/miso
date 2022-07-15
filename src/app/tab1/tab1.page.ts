import { Component, OnInit, NgZone } from '@angular/core';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';
import { Pedometer, IPedometerData } from '@ionic-native/pedometer/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  {

  startingOffset: any;
  stepsCount: any;

  constructor(
     private stepcounter: Stepcounter,
     private pedometer: Pedometer,
     private ngZone: NgZone,
     private router: Router
  ) {}

  ionViewDidEnter() {
    this.test2();
     /* setTimeout(async()=>{
       console.log(await this.stepcounter.getStepCount());
       console.log(await this.stepcounter.deviceCanCountSteps());
     }, 5000) */

  }

/*   async test(){
//     this.stepcounter.stop();

    let startingOffset = 0;
    this.stepcounter.start(startingOffset).then(onSuccess =>
      console.log('stepcounter-1start success', onSuccess), onFailure =>
      console.log('stepcounter-start error1', onFailure)

    );

    this.stepcounter.getHistory().then(historyObj =>
      console.log('stepcounter-history success', historyObj), onFailure =>
      console.log('stepcounter-history error!', onFailure)
    );

    startingOffset = await this.stepcounter.getStepCount();

    console.log(await this.stepcounter.deviceCanCountSteps());
    console.log(await this.stepcounter.getStepCount());
    console.log(await this.stepcounter.getTodayStepCount());
    console.log(await this.stepcounter.deviceCanCountSteps());

    this.startingOffset = startingOffset;
     setInterval(async() => {
       this.startingOffset = await this.stepcounter.getTodayStepCount();
       console.log(this.startingOffset);
       console.log(await this.stepcounter.getStepCount());
       this.ngZone.run(() => {
         this.router.navigateByUrl('/tabs', {skipLocationChange: true});
       });
     }, 2000);

     this.startingOffset = await this.stepcounter.getTodayStepCount()
  } */

  async test2() {
    let stepsCount = 0;
    console.log(stepsCount);

    this.pedometer.startPedometerUpdates().subscribe((data: IPedometerData) => {
    console.log("1",stepsCount);

        this.stepsCount = data.numberOfSteps;
    });

    this.stepsCount= stepsCount;

    /* this.startingOffset = await this.stepcounter.getTodayStepCount();
    console.log(this.startingOffset);
    console.log(await this.stepcounter.getStepCount());
    console.log(await this.stepcounter.deviceCanCountSteps()); */
  }
}
