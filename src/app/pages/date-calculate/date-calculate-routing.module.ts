import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DateCalculateComponent } from "./date-calculate.component";

const routes: Routes = [
    {path: '', component: DateCalculateComponent, }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DateCalculateRoutingModule {}