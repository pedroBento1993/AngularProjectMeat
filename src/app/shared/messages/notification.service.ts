import { EventEmitter } from "@angular/core";


export class NotificationService{
    notifier = new EventEmitter<any>()

    notify(message:any){
        this.notifier.emit(message)
    }
}