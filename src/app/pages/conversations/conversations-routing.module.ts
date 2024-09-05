import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ConversationsComponent } from "./conversations.component";

const routes: Routes = [
    {path: '', component: ConversationsComponent, }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConversationsRoutingModule {}