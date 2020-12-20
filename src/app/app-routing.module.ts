import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent } from "./test/test.component";
const appRoutes: Routes =[
    {path: '', redirectTo:'/home', pathMatch:'full'},

    {path: 'test', component:TestComponent}


]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
