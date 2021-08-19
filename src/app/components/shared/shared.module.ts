import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
   
    imports:[
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule
    ],
    exports:[
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}