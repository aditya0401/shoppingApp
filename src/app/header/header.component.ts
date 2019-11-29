import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class AppHeaderComponent{
    @Output() headerItem= new EventEmitter();

    onItemClick(param){
        console.log("recipe clicked", param);
        this.headerItem.emit(param);
    }
}