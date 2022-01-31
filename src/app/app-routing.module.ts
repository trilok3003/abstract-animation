import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' },
    {
        path: '',
        children: [
            {
                path: 'hello',
                loadChildren: 'app/hello/hello.module#HelloModule'
            },
            {
                path: 'bye',
                loadChildren: 'app/bye/bye.module#ByeModule'
            }
            ,
            {
                path: 'todo',
                loadChildren: 'app/todo/todo.module#ByeModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
