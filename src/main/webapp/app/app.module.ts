import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { Sandbox2SharedModule, UserRouteAccessService } from './shared';
import { Sandbox2AppRoutingModule} from './app-routing.module';
import { Sandbox2HomeModule } from './home/home.module';
import { Sandbox2AdminModule } from './admin/admin.module';
import { Sandbox2AccountModule } from './account/account.module';
import { Sandbox2EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Sandbox2AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Sandbox2SharedModule,
        Sandbox2HomeModule,
        Sandbox2AdminModule,
        Sandbox2AccountModule,
        Sandbox2EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Sandbox2AppModule {}
