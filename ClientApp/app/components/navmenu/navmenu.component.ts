import { Component, ViewChild, AfterViewInit, ElementRef, Renderer} from '@angular/core';
//const logoImage = require('./assets/gulf_coast_spirits.svg');

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.less']
})
export class NavMenuComponent implements AfterViewInit {
    @ViewChild('navButton') menuButton: ElementRef;
    @ViewChild('navMenu') menuDiv: ElementRef;

    constructor(private renderer: Renderer) {}
    public isCollpased=true;         //store state
    //public LogoPath:string = logoImage;
    ngAfterViewInit() {
        
    }

    collapseNav()
    {
        if (this.menuDiv.nativeElement.getAttribute('aria-expanded') == 'true')
        { 
           console.log('about to collapse');
            this.menuButton.nativeElement.click();
        }
    }
    // @ViewChild('navButton')
    // private navButtonlementRef;

    // constructor(@Inject(Renderer) private renderer: Renderer){}

}
