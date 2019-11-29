import { Directive, HostListener, ElementRef, Renderer2, Output, EventEmitter, HostBinding } from "@angular/core";

@Directive({
    selector: '[addDropdown]'
})
export class DropDownDirective {
    @HostBinding('class.open') isOpen:boolean= false;
    constructor(private elRef: ElementRef,
        private renderer:Renderer2) {
        
    }

    @HostListener('document:click', ['$event']) onClick(event: Event){
        this.clickHandler(event);
    }

    clickHandler(event){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}