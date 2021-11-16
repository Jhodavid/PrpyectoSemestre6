import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-proposito',
  templateUrl: './proposito.component.html',
  styleUrls: ['./proposito.component.css']
})
export class PropositoComponent implements OnDestroy {

  modoCelular = false;
 
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
            }else if(this.currentScreenSize == 'Small'){
              this.modoCelular = true;
            }else{
              this.modoCelular = false;
            }
          });
      }
    
      ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
      }

}
