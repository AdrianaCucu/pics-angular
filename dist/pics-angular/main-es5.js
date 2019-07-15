(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/media/media.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/media/media.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar class=\"sticky\" (searchEvent)=\"getMedia($event)\"></app-nav-bar>\r\n\r\n<!-- Pictures -->\r\n<div\r\n  *ngIf=\"routeParams.includes('pictures')\"\r\n  class=\"ui container pictures-container\"\r\n>\r\n  <div *ngFor=\"let picture of pictures\" class=\"ui segment\">\r\n    <img src=\"{{ picture.largeImageURL }}\" />\r\n  </div>\r\n</div>\r\n\r\n<!-- Videos -->\r\n<div\r\n  *ngIf=\"routeParams.includes('videos')\"\r\n  class=\"ui container videos-container\"\r\n>\r\n  <div class=\"ui grid\">\r\n    <!-- Selected video -->\r\n    <div class=\"eleven wide column\">\r\n      <div class=\"selected-video\">\r\n        <div class=\"ui embed\">\r\n          <iframe\r\n            title=\"video player\"\r\n            [src]=\"getVideoUrl()\"\r\n            allowfullscreen\r\n          ></iframe>\r\n        </div>\r\n\r\n        <div *ngIf=\"selectedVideo\" class=\"ui segment\">\r\n          <h4 class=\"ui header\">{{ selectedVideo.snippet.title }}</h4>\r\n          <p>{{ selectedVideo.snippet.description }}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Videos list -->\r\n    <div class=\"five wide column\">\r\n      <div\r\n        class=\"ui segment video-snippet\"\r\n        *ngFor=\"let video of videos\"\r\n        (click)=\"selectVideo(video)\"\r\n      >\r\n        <img\r\n          alt=\"{{ video.snippet.title }}\"\r\n          class=\"ui image\"\r\n          src=\"{{ video.snippet.thumbnails.medium.url }}\"\r\n        />\r\n        <div class=\"content\">\r\n          <div class=\"header\">\r\n            {{ video.snippet.title }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-pagination\r\n  *ngIf=\"routeParams.includes('pictures')\"\r\n  [page]=\"page\"\r\n  [totalItems]=\"total\"\r\n  [perPage]=\"limit\"\r\n  (goPrev)=\"prevPage()\"\r\n  (goNext)=\"nextPage()\"\r\n  (goPage)=\"goToPage($event)\"\r\n></app-pagination>\r\n\r\n<footer class=\"ui inverted center aligned segment\">\r\n  <p>\r\n    Made with\r\n    <span id=\"heart\"> ❤ </span>\r\n    by A.C. ⠀· ⠀\r\n    <a href=\"https://github.com/AdrianaCucu\" target=\"_blank\">\r\n      GitHub\r\n    </a>\r\n  </p>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/nav-bar/nav-bar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted segment\">\n  <div class=\"ui container\">\n    <div class=\"ui two item menu\">\n      <div class=\"item menu\">\n        <div class=\"ui transparent icon input\">\n          <input\n            (keyup.enter)=\"enterSearch($event)\"\n            type=\"text\"\n            placeholder=\"Search ...\"\n          />\n          <i class=\"search icon\"></i>\n        </div>\n      </div>\n\n      <div class=\"item\">\n        <div class=\"ui buttons\">\n          <button\n            class=\"ui button\"\n            [routerLink]=\"['/pictures']\"\n          >\n            Pictures\n          </button>\n          <div class=\"or\"></div>\n          <button\n            class=\"ui button\"\n            [routerLink]=\"['/videos']\"\n          >\n            Videos\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pagination/pagination.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted center aligned segment pagination\">\n  <button class=\"ui button\" (click)=\"onPrev()\" [disabled]=\"page === 1\">\n    Previous\n  </button>\n  <button\n    class=\"ui button\"\n    *ngFor=\"let num of getPages()\"\n    (click)=\"onPage(num)\"\n  >\n    {{ num }}\n  </button>\n  <button class=\"ui button\" (click)=\"onNext()\" [disabled]=\"lastPage()\">\n    Next\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pics-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/media/media.component */ "./src/app/components/media/media.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/media.service */ "./src/app/services/media.service.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _components_media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'pictures', component: _components_media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: '/pictures', pathMatch: 'full' },
                    { path: 'videos', component: _components_media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"], pathMatch: 'full' }
                ])
            ],
            providers: [_services_media_service__WEBPACK_IMPORTED_MODULE_9__["MediaService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/media/media.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/media/media.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n  position: fixed !important;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3vh;\r\n  font-size: 1.5vh !important;\r\n  padding: 0 !important;\r\n  z-index: 2;\r\n}\r\n\r\nfooter a {\r\n  color: white;\r\n}\r\n\r\nfooter a:hover {\r\n  color: #76c1d4;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100% !important;\r\n  z-index: 2;\r\n}\r\n\r\n.pictures-container {\r\n  margin: 10vh 0;\r\n}\r\n\r\n.selected-video {\r\n  position: fixed;\r\n  max-width: 40%;\r\n}\r\n\r\n.videos-container {\r\n  position: relative;\r\n  top: 10vh;\r\n  margin-bottom: 5vh;\r\n}\r\n\r\n.video-snippet:hover {\r\n  cursor: pointer;\r\n  color: #76c1d4;\r\n}\r\n\r\n@media only screen and (min-width: 500px) and (max-width: 1100px) {\r\n  .pictures-container {\r\n    margin: 11vh 0;\r\n  }\r\n\r\n  .videos-container {\r\n    top: 11vh;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .pictures-container {\r\n    margin: 14vh 0;\r\n  }\r\n\r\n  .videos-container {\r\n    top: 14vh;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS9tZWRpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lZGlhL21lZGlhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIGZvbnQtc2l6ZTogMS41dmggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuZm9vdGVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuZm9vdGVyIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNzZjMWQ0O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBpY3R1cmVzLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAxMHZoIDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC12aWRlbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcblxyXG4udmlkZW9zLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTB2aDtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbn1cclxuXHJcbi52aWRlby1zbmlwcGV0OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM3NmMxZDQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAucGljdHVyZXMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTF2aCAwO1xyXG4gIH1cclxuXHJcbiAgLnZpZGVvcy1jb250YWluZXIge1xyXG4gICAgdG9wOiAxMXZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5waWN0dXJlcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxNHZoIDA7XHJcbiAgfVxyXG5cclxuICAudmlkZW9zLWNvbnRhaW5lciB7XHJcbiAgICB0b3A6IDE0dmg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/media/media.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/media/media.component.ts ***!
  \*****************************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/media.service */ "./src/app/services/media.service.ts");





var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService, router, sanitiser) {
        this.mediaService = mediaService;
        this.router = router;
        this.sanitiser = sanitiser;
        this.page = 1;
        this.total = 0;
        this.limit = 5;
        this.contentLoading = false;
        this.routeParams = router.url;
        // console.log(this.routeParams);
        this.getMedia('');
    }
    MediaComponent.prototype.getMedia = function (queryParams) {
        this.queryParams = queryParams;
        if (this.routeParams.includes('pictures')) {
            this.getPictures();
            this.router.navigate(['/pictures'], {
                queryParams: { q: queryParams, page: this.page }
            });
        }
        else if (this.routeParams.includes('videos')) {
            this.getVideos();
            this.router.navigate(['/videos'], {
                queryParams: { q: queryParams }
            });
        }
    };
    MediaComponent.prototype.getPictures = function () {
        var _this = this;
        this.contentLoading = true;
        this.mediaService
            .getPictures(this.queryParams, this.page)
            .subscribe(function (data) {
            _this.pictures = data['hits'];
            // console.log(data);
            _this.total = 200;
            _this.limit = _this.pictures.length;
            _this.contentLoading = false;
        });
    };
    MediaComponent.prototype.getVideos = function () {
        var _this = this;
        this.contentLoading = true;
        this.mediaService.getVideos(this.queryParams).subscribe(function (data) {
            _this.videos = data['items'];
            // console.log(data);
            if (_this.videos.length) {
                _this.selectVideo(_this.videos[0]);
            }
            _this.total = _this.videos.length;
            // console.log('video total', this.total);
            _this.contentLoading = false;
        });
    };
    MediaComponent.prototype.selectVideo = function (video) {
        // console.log(video);
        this.selectedVideo = video;
    };
    MediaComponent.prototype.getVideoUrl = function () {
        if (this.selectedVideo) {
            return this.sanitiser.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.selectedVideo.id.videoId);
        }
    };
    MediaComponent.prototype.goToPage = function (num) {
        this.page = num;
        this.getMedia(this.queryParams);
    };
    MediaComponent.prototype.nextPage = function () {
        this.page++;
        this.getMedia(this.queryParams);
    };
    MediaComponent.prototype.prevPage = function () {
        this.page--;
        this.getMedia(this.queryParams);
    };
    MediaComponent.ctorParameters = function () { return [
        { type: src_app_services_media_service__WEBPACK_IMPORTED_MODULE_4__["MediaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    MediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! raw-loader!./media.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.css */ "./src/app/components/media/media.component.css")]
        })
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n  background: #76c1d4 !important;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n  button,\r\n  .or {\r\n    font-size: 2.5vmin !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFOztJQUVFLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc2YzFkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIGJ1dHRvbixcclxuICAub3Ige1xyXG4gICAgZm9udC1zaXplOiAyLjV2bWluICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavBarComponent.prototype.enterSearch = function (event) {
        this.searchEvent.emit(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavBarComponent.prototype, "searchEvent", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button:hover {\r\n  background: #76c1d4 !important;\r\n}\r\n\r\n.pagination {\r\n  position: fixed;\r\n  bottom: 2.5vh;\r\n  width: 100%;\r\n  justify-content: center !important;\r\n  z-index: 5;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n  button {\r\n    font-size: 2.5vmin !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzc2YzFkNCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMi41dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDIuNXZtaW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.goPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PaginationComponent.prototype.onPage = function (num) {
        this.goPage.emit(num);
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function () {
        this.goNext.emit(true);
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.totalItems / this.perPage) || 0;
    };
    PaginationComponent.prototype.lastPage = function () {
        return this.perPage * this.page > this.totalItems - 1;
    };
    PaginationComponent.prototype.getPages = function () {
        var pages = [];
        for (var i = 0; i < Math.ceil(this.totalItems / this.perPage); i++) {
            pages.push(i + 1);
        }
        // console.log(pages);
        return pages;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "totalItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "perPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PaginationComponent.prototype, "contentLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationComponent.prototype, "goPrev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationComponent.prototype, "goNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/components/pagination/pagination.component.css")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/services/media.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/media.service.ts ***!
  \*******************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MediaService = /** @class */ (function () {
    function MediaService(http) {
        this.http = http;
        this.PICS_API_PATH = 'https://pixabay.com/api/';
        this.PICS_API_KEY = '12992433-ded5787208231f2338f537200';
        this.YT_PATH = 'https://www.googleapis.com/youtube/v3';
        this.YT_KEY = 'AIzaSyDe3CTEv8cNkQR8nTY8cI18Vnb6OiJSMeQ';
    }
    MediaService.prototype.getPictures = function (searchParams, page) {
        return this.http.get(this.PICS_API_PATH + "?key=" + this.PICS_API_KEY + "&q=" + searchParams + "&page=" + page);
    };
    MediaService.prototype.getVideos = function (searchParams) {
        return this.http.get(this.YT_PATH + "/search?key=" + this.YT_KEY + "&part=snippet&type=video&maxResults=10&videoEmbeddable=true&q=" + searchParams);
    };
    MediaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MediaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\angular\pics-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map