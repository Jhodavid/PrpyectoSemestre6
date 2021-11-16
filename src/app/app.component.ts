import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import {takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy {
    modoCelular = false;
    modoNav = "side";
 
    destroyed = new Subject<void>();
    currentScreenSize: string | undefined;

    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
      ]);
      
    constructor(breakpointObserver: BreakpointObserver) {
        breakpointObserver
          .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
          ])
          .pipe(takeUntil(this.destroyed))
          .subscribe(result => {
            for (const query of Object.keys(result.breakpoints)) {
              if (result.breakpoints[query]) {
                this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
              }
            }
            if(this.currentScreenSize == 'XSmall'){
               this.modoCelular = true;
               this.modoNav = "side";
            }else if(this.currentScreenSize == 'Small'){
              this.modoCelular = true;
              this.modoNav = "side";
            }else{
              this.modoCelular = false;
              this.modoNav = "side";
            }

            console.log(this.modoNav)
          });
      }
    
      ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
      }
}
