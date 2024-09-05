import { NgModule } from "@angular/core";
import { CambioLetrasPipe } from "./cambio-letras.pipe";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ CambioLetrasPipe],
    imports: [CommonModule],
    exports:[CambioLetrasPipe],
})
export class PipesModule {}