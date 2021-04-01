import { Component } from '@angular/core';
import {
  CdkOverlayOrigin,
  ScrollStrategy,
  ScrollStrategyOptions,
  CdkConnectedOverlay
} from "@angular/cdk/overlay";
/** @title Sidenav open & close behavior */
@Component({
  selector: 'sidenav-open-close-example',
  templateUrl: 'sidenav-open-close-example.html',
  styleUrls: ['sidenav-open-close-example.css'],
})
export class SidenavOpenCloseExample {
  open: boolean;
  scrollStrategy: ScrollStrategy;

  constructor(private readonly sso: ScrollStrategyOptions) {
    this.scrollStrategy = this.sso.block();
  }

    public overlayDetach(ref: CdkConnectedOverlay) {
    console.log("overlayDetach", ref.scrollStrategy);
  }

  public overlayAttach(ref: CdkConnectedOverlay) {
    console.log("overlayAttach", ref.scrollStrategy);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */