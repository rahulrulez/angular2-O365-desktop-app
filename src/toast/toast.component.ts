import { Component, Injectable } from "@angular/core";

@Component({
    selector: "my-toast",
    template: `<div aria-live="assertive" aria-atomic="true" aria-relevant="text" class="mdl-snackbar mdl-js-snackbar">
                 <div class="mdl-snackbar__text"></div>    
                 <button type="button" class="mdl-snackbar__action"></button>             
               </div>`,
})
@Injectable()
export class ToastComponent {

    public show(message: string) {
        let notify: any = document.querySelector(".mdl-js-snackbar");
        notify.style.backgroundColor = "#FF5722";
        notify.MaterialSnackbar.showSnackbar({
            message: message,
            timeout: 4000,
        });
    }
}
