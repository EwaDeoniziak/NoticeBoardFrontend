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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/auth/auth.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/auth/auth.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <main>\n    <div class=\"side left\">\n        <h4>Zarejestruj</h4>\n        <form (ngSubmit)=\"registerUser($event)\" [formGroup]=\"registerForm\" #f=\"ngForm\">\n            <div class=\"item\">\n                <mat-form-field appearance=\"outline\" class=\"form-input \">\n                    <mat-label>Imię</mat-label>\n                    <input matInput name=\"firstName\" formControlName=\"firstName\" required minlength=\"3\">\n                    <mat-hint>Minimum 3 znaki</mat-hint>\n                </mat-form-field >\n            </div>\n            <div class=\"item\">\n                <mat-form-field appearance=\"outline\" class=\"form-input\">\n                    <mat-label>Nazwisko</mat-label>\n                    <input matInput name=\"lastName\" formControlName=\"lastName\" required minlength=\"3\">\n                    <mat-hint>Minimum 3 znaki</mat-hint>\n                </mat-form-field >\n            </div>\n            <div class=\"item\">\n                <mat-form-field appearance=\"outline\" class=\"form-input \">\n                    <mat-label>Numer telefonu</mat-label>\n                    <input matInput name=\"phone\" formControlName=\"phoneNumber\" required length=\"9\">\n                    <mat-error *ngIf=\"registerForm.get('phoneNumber').invalid\">{{getPhoneErrorMessage()}}</mat-error>\n                </mat-form-field >\n            </div>\n            <div class=\"item\">\n                <mat-form-field appearance=\"outline\" class=\"form-input \">\n                    <mat-label>Adres e-mail</mat-label>\n                    <input matInput name=\"email\" formControlName=\"registerLogin\" required minlength=\"6\">\n                    <mat-error *ngIf=\"registerForm.get('registerLogin').invalid\">{{getEmailErrorMessage()}}</mat-error>\n                </mat-form-field >\n            </div>\n            <div class=\"item\">\n                <mat-form-field appearance=\"outline\" class=\"form-input \">\n                    <mat-label>Hasło</mat-label>\n                    <input matInput  [type]=\"hide ? 'password' : 'text'\" name=\"password\" formControlName=\"registerPassword\" required minlength=\"5\">\n                    <button type=\"button\" mat-icon-button (click)=\"hide = !hide\" matSuffix [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                        <mat-icon>{{hide ? 'visibility_off' : 'visibility_n'}}</mat-icon>\n                        </button>\n                    <mat-hint>Minimum 6 znaków</mat-hint>\n                </mat-form-field >\n            </div>\n            <div class=\"spinner\" *ngIf=\"registerSpinnerActive\">\n                <mat-spinner diameter=\"40\"></mat-spinner>\n            </div>\n            <p [ngClass]=\"{hidden: !invalidRegister}\">Wprowadzony login lub hasło już istnieją</p>\n            <button mat-button class=\"green-button\" type=\"submit\">Zarejestruj</button>\n        </form>\n    </div>\n    <div class=\"side right\">\n        <h4>Zaloguj</h4>\n        <div class=\"item\">\n            <mat-form-field appearance=\"outline\" class=\"form-input \">\n                <mat-label>Adres e-mail</mat-label>\n                <input matInput name=\"email1\" required [(ngModel)]=\"login\">\n            </mat-form-field >\n        </div>\n        <div class=\"item\">\n            <mat-form-field appearance=\"outline\" class=\"form-input \">\n                <mat-label>Hasło</mat-label>\n                <input matInput  [type]=\"hide2 ? 'password' : 'text'\" name=\"password1\" required [(ngModel)]=\"password\">\n                <button mat-icon-button (click)=\"hide2 = !hide2\" matSuffix [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                    <mat-icon>{{hide2 ? 'visibility_off' : 'visibility_n'}}</mat-icon>\n                    </button>\n            </mat-form-field >\n        </div>\n        <div class=\"spinner\" *ngIf=\"loginSpinnerActive\">\n            <mat-spinner diameter=\"40\"></mat-spinner>\n        </div>\n        <p *ngIf=\"invalidLogin\">Wprowadzony login i hasło są niepoprawne</p>\n        <button mat-button class=\"green-button\" (click)=\"loginUser()\">Zaloguj</button>\n    </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page/main-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page/main-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"navigation main-page\">\n        <!-- <div *ngIf=\"categoriesVisible\" class=\"icon-div\">\n            <a class=\"icon\" (click)=\"sidenav.toggle()\">\n                <mat-icon>dehaze</mat-icon>\n            </a>\n        </div> -->\n        <div class=\"big-screen\" >\n            <a class=\"logo\" routerLink='notice-board/page/1'>Tablica ogłoszeń</a>\n            <div class=\"button-div\">\n                <button class=\"green-button\" mat-button (click)=\"addNewNotice()\">Dodaj ogłoszenie</button>\n            </div>\n            <a class=\"login\" (click)=\"myAccountNavigate()\">\n                <mat-icon class=\"icon login-icon\">person</mat-icon>\n                <div class=\"login-text\">Moje konto</div>\n                \n            </a>\n        </div>\n        <div class=\"small-screen\" >\n            <a class=\"icon\" routerLink='notice-board/page/1'><mat-icon>home</mat-icon></a>\n            <a class=\"icon\" (click)=\"myAccountNavigate()\"><mat-icon>person</mat-icon></a>\n        </div>\n        \n</mat-toolbar>\n<!-- <mat-sidenav-container fxFlexFill >\n    <mat-sidenav [fixedInViewport]=\"true\" #sidenav fxLayout=\"column\" class=\"side-nav\">\n        <div fxLayout=\"column\">\n                <div class=\"categories\" *ngIf=\"categories\">\n                    <h3>Wybierz kategorię</h3>\n                    \n                    <div *ngFor=\"let item of categories\" class=\"category\" (click)=\"changeCategory(item)\">\n                        <div class=\"icon\"><mat-icon>{{getCategoryIcon(item)}}</mat-icon></div>\n                        <div class=\"text\">{{getCategoryRightName(item)}}</div>\n                    </div>\n                    <div class=\"category\">\n                        <div class=\"icon\"><mat-icon>select_all</mat-icon></div>\n                        <div class=\"text\">Wszystkie</div>\n                    </div>\n            </div>\n        </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container> -->\n<div class=\"content\">\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-board/notice-board.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-board/notice-board.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <div class=\"categories-nav\">\n    \n        <a class=\"icon\" (click)=\"sidenav.toggle()\">\n            \n             <h3>\n                 <mat-icon>arrow_forward_ios</mat-icon>\n                 Wybierz kategorię\n            </h3>\n         </a> \n    </div>\n    <mat-sidenav-container fxFlexFill >\n        \n        <mat-sidenav [fixedInViewport]=\"true\" #sidenav fxLayout=\"column\" class=\"side-nav\">\n            <div fxLayout=\"column\">\n                    <div class=\"categories\" *ngIf=\"categories\">\n                        <h3 (click)=\"sidenav.toggle()\">\n                            <mat-icon>arrow_back_ios</mat-icon>\n                            Wybierz kategorię\n                        </h3>\n                        \n                        <div *ngFor=\"let item of categories\" class=\"category\" (click)=\"changeCategory(item)\" [ngClass]=\"{'checked': item === category}\">\n                            <div class=\"icon\"><mat-icon>{{getCategoryIcon(item)}}</mat-icon></div>\n                            <div class=\"text\">{{getCategoryRightName(item)}}</div>\n                        </div>\n                        <div class=\"category\" (click)=\"selectAll()\" [ngClass]=\"{'checked': category === null}\">\n                            <div class=\"icon\"><mat-icon>select_all</mat-icon></div>\n                            <div class=\"text\">Wszystkie</div>\n                        </div>\n                </div>\n            </div>\n        </mat-sidenav>\n        <mat-sidenav-content fxFlexFill>\n            <div class=\"content\">\n                <div class=\"button-div\">\n                    <button class=\"green-button\" mat-button (click)=\"addNewNotice()\">Dodaj ogłoszenie</button>\n                </div>\n                <div class=\"wrapper\">\n                    <mat-form-field appearance=\"outline\" class=\"filter-input search\">\n                        <mat-label>Znajdź ogłoszenie</mat-label>\n                        <input matInput [(ngModel)]=\"searchInput\" (ngModelChange)=\"filterByAll(notices)\">\n                        <mat-icon matSuffix>search</mat-icon>\n                    </mat-form-field >\n                    <mat-form-field appearance=\"outline\" class=\"filter-input location\">\n                        <mat-label>Wyszukaj lokalizację</mat-label>\n                        <input matInput [(ngModel)]=\"location\" (ngModelChange)=\"filterByAll(notices)\">\n                        <mat-icon matSuffix>location_on</mat-icon>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"filter-input price-from\">\n                        <mat-label>Cena od ...</mat-label>\n                        <input matInput type=\"number\" [(ngModel)]=\"price1\" (ngModelChange)=\"filterByAll(notices)\">\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"filter-input price-to\">\n                        <mat-label>Cena do ...</mat-label>\n                        <input matInput type=\"number\" [(ngModel)]=\"price2\" (ngModelChange)=\"filterByAll(notices)\">\n                    </mat-form-field>\n                    <div class=\"options\">\n                        <span class=\"options-title\">Typ ogłoszenia:</span>    \n                        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"type\" (ngModelChange)=\"filterByAll(notices)\">\n                            <mat-radio-button value=\"1\">Sprzedam</mat-radio-button>\n                            <mat-radio-button value=\"2\">Kupię</mat-radio-button>\n                            <mat-radio-button value=\"3\">Zamienię</mat-radio-button>\n                            <mat-radio-button  value=\"\" checked>Wszystkie</mat-radio-button>\n                        </mat-radio-group>\n                    </div>\n                    \n                    \n                </div>\n                <mat-paginator class=\"pager\" #paginator [pageSize]=\"pageSize\" [showFirstLastButtons]=\"true\" [length]=\"totalSize\"\n                    [pageIndex]=\"currentPage\" (page)=\"pageEvent = handlePage($event)\">\n                </mat-paginator>\n                <div class=\"notices\" *ngIf=\"notices\">\n                    <div *ngFor=\"let item of dataSource\" (click)=\"showNotice(item)\" class=\"one-notice\">\n                        <app-notice-card [item]=\"item\"></app-notice-card>     \n                    </div>\n                </div> \n                <div *ngIf=\"spinnerActive\">\n                    <mat-spinner class=\"spinner\" diameter=\"100\"></mat-spinner>\n                </div>\n                <mat-paginator class=\"pager\" #paginator [pageSize]=\"pageSize\" [showFirstLastButtons]=\"true\" [length]=\"totalSize\"\n                    [pageIndex]=\"currentPage\" (page)=\"pageEvent = handlePage($event)\">\n                </mat-paginator>\n            </div>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n    \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-card/notice-card.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-card/notice-card.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"card\">\n    <mat-card-header class=\"card-header\">\n        <mat-card-title>{{item.title}}</mat-card-title>\n        <mat-card-subtitle class=\"category\">\n            <span *ngIf=\"item.categories; else noCategory\">\n                {{getCategoryRightName(item.categories)}}\n            </span>\n            <ng-template #noCategory>\n                Brak kategorii\n            </ng-template>\n        </mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"photo-container\">\n        <img *ngIf=\"item.imgs.length>0; else no_picture\" [src]=\"_DomSanitizer.bypassSecurityTrustUrl(item.imgs[0])\" alt=\"Błąd w pliku\">\n    </div>\n    <ng-template #no_picture>\n        <div class=\"no-picture\">\n            <mat-icon>photo</mat-icon>\n            <div class=\"no-picture-text\">Brak zdjęcia</div>\n        </div>    \n    </ng-template>\n    <mat-card-content>\n        <p>\n            {{getShortDescription(item.description)}}\n        </p>\n        <div class=\"details\">\n            <div class=\"detail\">\n                <div class=\"detail-name\">Lokalizacja: </div>\n                <div class=\"detail-value\">{{item.location}}</div>\n            </div>\n            <div class=\"detail\">\n                <div class=\"detail-name\">Cena: </div>\n                <div class=\"detail-value\">{{item.price}} zł</div>\n            </div>\n        </div>\n    </mat-card-content>\n</mat-card>     ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/show-notice/show-notice.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/show-notice/show-notice.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <main>\n    <div class=\"container\" *ngIf=\"notice; else spinner\">\n        <h1>{{notice.title}}</h1>\n       <p class=\"categories\">\n           <span *ngIf=\"notice.categories; else noCategory\">\n                <div>Kategoria: {{getCategoryRightName(notice.categories)}}</div>\n           </span>\n           <ng-template #noCategory>\n               Brak kategorii\n           </ng-template>\n         </p>\n        <div class=\"imgs\" *ngIf=\"notice.imgs.length>0; else no_imgs\">\n            <div class=\"displayedImg\">\n                <img  [src]=\"_DomSanitizer.bypassSecurityTrustUrl(displayedImg.path)\">\n                <div class=\"arrow arrow_back\" [ngClass]=\"{'not-visible': isFirstImg}\" (click)=\"prevImg()\">\n                    <mat-icon>arrow_back_ios</mat-icon>\n                </div>\n                <div class=\"arrow arrow_forward\" [ngClass]=\"{'not-visible': isLastImg}\" (click)=\"nextImg()\">\n                    <mat-icon>arrow_forward_ios</mat-icon>\n                </div>\n            </div>\n            \n            \n            <div class=\"allImgs\" *ngIf=\"notice.imgs.length>0\">\n                <div class=\"smallImg\" *ngFor=\"let path of notice.imgs; let i = index\" (click)=changeDisplayedImg(path,i) [ngClass]=\"{'displayed': i===displayedImg.index}\">\n                    <img [src]=\"_DomSanitizer.bypassSecurityTrustUrl(path)\">\n                </div>\n                \n                \n            </div>\n        </div>\n        <ng-template #no_imgs></ng-template>\n        <div class=\"text\">\n            <h2 class=\"price\">Cena: {{notice.price}} zł</h2>\n            \n            <p>{{notice.description}}</p>\n\n            <h2 class=\"contact\">\n                \n                Kontakt</h2>\n            <p class=\"space\">\n                <span class=\"important\">\n                    <mat-icon>mail</mat-icon>\n                    Adres e-mail: \n                </span> \n                {{notice.userId.login}}\n            </p>\n            <p class=\"space\">\n                \n                <span class=\"important\">\n                    <mat-icon>local_phone</mat-icon>\n                    Numer telefonu: </span> \n                {{notice.userId.phoneNumber}}\n            </p>\n            <h2 class=\"contact\">\n                \n                Lokalizacja: \n                <span class=\"location\">{{notice.location}}</span>\n                \n            </h2>\n        </div> \n\n        <p class=\"date\">Data wystawienia: {{notice.date | date}}</p>\n        \n    </div>\n    <ng-template #spinner>\n        <mat-spinner class=\"spinner\" diameter=\"100\"></mat-spinner>\n    </ng-template>\n</main>   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/actualise-confirm/actualise-confirm.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/actualise-confirm/actualise-confirm.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\n    {{title}}\n  </h1>\n  \n  <div mat-dialog-content>\n    <p>{{message}}</p>\n  </div>\n  \n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onDismiss()\">Nie</button>\n    <button mat-raised-button class=\"confirm\" (click)=\"onConfirm()\">Tak</button>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-notice/add-notice.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-notice/add-notice.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"container\">\n        <h1>Dodaj nowe ogłoszenie</h1>\n        <form (ngSubmit)=\"addNewNotice($event)\" [formGroup]=\"addNoticeForm\" #f=\"ngForm\">\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Tytuł ogłoszenia</mat-label>\n                    <input matInput name=\"title\" formControlName=\"title\" required maxlength=\"25\">\n                    <mat-hint>Maksymalnie 25 znaków</mat-hint>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                <span *ngIf=\"categories.length>0; else spinner\">\n                    <p>Wybierz kategorię</p>\n                    <mat-radio-group class=\"categories-to-check\" aria-labelledby=\"example-radio-group-label\"\n                       formControlName=\"categories\">\n                        <mat-radio-button class=\"category-check\" *ngFor=\"let category of categories\" [value]=\"category\">\n                            {{getCategoryRightName(category)}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </span>\n                <ng-template #spinner>\n                    <mat-spinner class=\"spinner\" diameter=\"60\"></mat-spinner>\n                </ng-template>\n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Lokalizacja</mat-label>\n                    <input matInput name=\"location\" formControlName=\"location\" required>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                \n                    <p>Typ ogłoszenia</p>\n                    <mat-radio-group class=\"categories-to-check\" aria-labelledby=\"example-radio-group-label\"\n                       formControlName=\"type\">\n                        <mat-radio-button checked class=\"category-check\" [value]=\"1\">\n                            Sprzedam\n                        </mat-radio-button>\n                        <mat-radio-button class=\"category-check\" [value]=\"2\">\n                            Kupię\n                        </mat-radio-button>\n                        <mat-radio-button class=\"category-check\" [value]=\"3\">\n                            Zamienię\n                        </mat-radio-button>\n                    </mat-radio-group>\n                \n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input my-textarea\" appearance=\"outline\">\n                    <mat-label>Opis ogłoszenia</mat-label>\n                    <textarea matInput class=\"my-textarea\" name=\"description\" formControlName=\"description\" required></textarea>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Cena</mat-label>\n                    <input matInput type=\"number\" name=\"price\" formControlName=\"price\" required>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                <button type=\"button\" mat-stroked-button class=\"button\" (click)=\"fileUpload.click()\">Dodaj\n                    zdjęcia</button>\n                <input hidden type=\"file\" #fileUpload id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\"\n                    accept=\"image/*\" (change)=\"onFilesSelected($event)\" />\n            </div>\n\n            <p>Max 6 zdjęć</p>\n            <div class=\"alert\">{{toBigImgSizeAlert}}</div>\n            <ul *ngIf=\"imgURL.length>0; else no_photos\">\n                <li *ngFor=\"let img of imgURL; let i = index\">\n                    <div class=\"photo-container\">\n                        <div class=\"remove-icon\" (click)=\"removePhoto(i)\"><mat-icon>cancel</mat-icon></div>\n                        <img [src]=\"img\" height=\"200\" *ngIf=\"img\">\n                    </div>\n                </li>\n            </ul>\n            <ng-template #no_photos>\n                <p>Brak wgranych zdjęć</p>\n            </ng-template>\n\n\n\n            <div class=\"add\">\n                <div class=\"spinner\" *ngIf=\"addSpinnerActive\">\n                    <mat-spinner class=\"spinner\" diameter=\"40\"></mat-spinner>\n                </div>\n                <button mat-button class=\"green-button\" type=\"submit\">Dodaj nowe ogłoszenie</button>\n            </div>\n        </form>\n    </div>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/delete-confirm/delete-confirm.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/delete-confirm/delete-confirm.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>\n  {{title}}\n</h1>\n\n<div mat-dialog-content>\n  <p>{{message}}</p>\n</div>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onDismiss()\">Nie</button>\n  <button mat-raised-button class=\"confirm\" (click)=\"onConfirm()\">Tak</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/edit-notice/edit-notice.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/edit-notice/edit-notice.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"container\" *ngIf=\"notice; else spinner\">\n        <h1>Edytuj ogłoszenie</h1>\n        <form (ngSubmit)=\"addNewNotice($event)\" [formGroup]=\"addNoticeForm\" #f=\"ngForm\">\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Tytuł ogłoszenia</mat-label>\n                    <input matInput name=\"title\" formControlName=\"title\" required maxlength=\"25\">\n                    <mat-hint>Maksymalnie 25 znaków</mat-hint>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                <span *ngIf=\"categories; else spinner\">\n                    <p>Wybierz kategorię</p>\n                    <mat-radio-group class=\"categories-to-check\" aria-labelledby=\"example-radio-group-label\"\n                       formControlName=\"categories\">\n                        <mat-radio-button class=\"category-check\" *ngFor=\"let category of categories\" [value]=\"category\" [checked] = \"category._id == notice.categories._id ? 'checked' : null\">\n                            {{getCategoryRightName(category)}}\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </span>\n                \n                <ng-template #spinner>\n                    <mat-spinner class=\"spinner\" diameter=\"60\"></mat-spinner>\n                </ng-template>\n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Lokalizacja</mat-label>\n                    <input matInput name=\"location\" formControlName=\"location\" required>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                \n                    <p>Typ ogłoszenia</p>\n                    <mat-radio-group class=\"categories-to-check\" aria-labelledby=\"example-radio-group-label\"\n                       formControlName=\"type\">\n                        <mat-radio-button class=\"category-check\" [value]=\"1\">\n                            Sprzedam\n                        </mat-radio-button>\n                        <mat-radio-button class=\"category-check\" [value]=\"2\">\n                            Kupię\n                        </mat-radio-button>\n                        <mat-radio-button class=\"category-check\" [value]=\"3\">\n                            Zamienię\n                        </mat-radio-button>\n                    </mat-radio-group>\n                \n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input my-textarea\" appearance=\"outline\">\n                    <mat-label>Opis ogłoszenia</mat-label>\n                    <textarea matInput class=\"my-textarea\" name=\"description\" formControlName=\"description\"></textarea>\n                </mat-form-field>\n            </div>\n            <div class=\"property\">\n                <mat-form-field class=\"my-input\" appearance=\"outline\">\n                    <mat-label>Cena</mat-label>\n                    <input matInput type=\"number\" name=\"price\" formControlName=\"price\" required>\n                </mat-form-field>\n            </div>\n            <!-- <span>\n                <p>Aktualne zdjęcia</p>\n                <ul *ngIf=\"oldImgsURL.length>0; else no_actual_photos\">\n                    <li *ngFor=\"let img of oldImgsURL; let i = index\">\n                        <div class=\"photo-container\">  \n                            <div class=\"remove-icon\" (click)=\"removeOldPhoto(i)\"><mat-icon>cancel</mat-icon></div>\n                            <img [src]=\"_DomSanitizer.bypassSecurityTrustUrl('https://dry-fjord-48898.herokuapp.com/' + img)\" height=\"200\" *ngIf=\"img\">\n                        </div>\n                    </li>\n                </ul>\n                <ng-template #no_actual_photos>\n                    <p>Brak wgranych zdjęć</p>\n                </ng-template>\n            </span> -->\n            <div class=\"property\">\n                <button type=\"button\" mat-stroked-button class=\"button\" (click)=\"fileUpload.click()\">Dodaj nowe\n                    zdjęcia</button>\n                <input hidden type=\"file\" #fileUpload id=\"fileUpload\" name=\"fileUpload\" multiple=\"multiple\"\n                    accept=\"image/*\" (change)=\"onFilesSelected($event)\" />\n            </div>\n\n            <p>Max 6 zdjęć</p>\n            <div class=\"alert\">{{toBigImgSizeAlert}}</div>\n            <ul *ngIf=\"imgURL.length>0 || oldImgsURL.length>0; else no_photos\">\n                <li *ngFor=\"let img of oldImgsURL; let i = index\">\n                    <div class=\"photo-container\">  \n                        <div class=\"remove-icon\" (click)=\"removeOldPhoto(i)\"><mat-icon>cancel</mat-icon></div>\n                        <img [src]=\"_DomSanitizer.bypassSecurityTrustUrl(img)\" height=\"200\" *ngIf=\"img\">\n                    </div>\n                </li>\n                <li *ngFor=\"let img of imgURL; let file of addNoticeForm.get('imgs').value; let i = index\">\n                    <div class=\"photo-container\">  \n                        <div class=\"remove-icon\" (click)=\"removeNewPhoto(i)\"><mat-icon>cancel</mat-icon></div>\n                        <img [src]=\"img\" height=\"200\" *ngIf=\"img\">\n                    </div>\n                </li>\n            </ul>\n            <ng-template #no_photos>\n                <p>Brak wgranych zdjęć</p>\n            </ng-template>\n\n\n\n            <div class=\"add\">\n                <div class=\"spinner\" *ngIf=\"addSpinnerActive\">\n                    <mat-spinner class=\"spinner\" diameter=\"40\"></mat-spinner>\n                </div>\n                <button mat-button class=\"green-button\" type=\"submit\">Edytuj ogłoszenie</button>\n            </div>\n        </form>\n\n    </div>\n    <ng-template #spinner>\n        <mat-spinner class=\"spinner\" diameter=\"100\"></mat-spinner>\n    </ng-template>\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-account/my-account.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-account/my-account.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <div class=\"container\">\n        <h1>Moje konto</h1>\n        <div class=\"my-data\" *ngIf=\"user; else spinner\">\n            <div class=\"one\">\n                <h5>Imię</h5>\n                <div class=\"value\">{{user.firstName}}</div>\n            </div>\n            <div class=\"one\">\n                <h5>Nazwisko</h5>\n                <div class=\"value\">{{user.lastName}}</div>\n            </div>\n            <div class=\"one\">\n                <h5>Numer telefonu</h5>\n                <div class=\"value\">{{user.phoneNumber}}</div>\n            </div>\n            <div class=\"one\">\n                <h5>Adres e-mail</h5>\n                <div class=\"value\">{{user.login}}</div>\n            </div>\n            <div class=\"button-container\">\n                <button mat-stroked-button class=\"outline-sky-button\" (click)=\"myNoticesNavigate()\"> Sprawdź swoje ogłoszenia</button>\n            </div> \n        </div>\n        <ng-template #spinner>\n            <mat-spinner class=\"spinner\" diameter=\"100\"></mat-spinner>\n        </ng-template>\n        \n    </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-notices/my-notices.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-notices/my-notices.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n    <h1>Moje ogłoszenia</h1>\n    <h4>Aktualne ogłoszenia</h4>\n    <span *ngIf=\"spinnerActive\">\n        <mat-spinner class=\"spinner\" diameter=\"100\"></mat-spinner>\n    </span>\n    <div *ngIf=\"user\">\n        <div *ngIf=\"notices.length>0; else no_notices\" class=\"notices\">\n            <div class=\"one-notice\" *ngFor=\"let item of notices\">\n                \n                    <button mat-button class=\"delete\" (click)=\"openDialog(item)\">Usuń</button>\n                    <button mat-button class=\"edit\" (click)=\"editNotice(item)\">Edytuj</button>\n                    <app-notice-card [item]=\"item\" (click)=\"showNotice(item)\" ></app-notice-card>\n                \n            </div>    \n        </div>\n        <ng-template #no_notices>\n            <p>Brak dodanych ogłoszeń</p>\n        </ng-template>\n    </div> \n    \n    <div *ngIf=\"oldNotices && oldNotices.length>0\">\n        <h4>Wygaśnięte ogłoszenia</h4>\n            <div *ngIf=\"oldNotices\" class=\"notices\">\n                <div class=\"one-notice\" *ngFor=\"let item of oldNotices\">\n                        \n                        <!-- <button mat-button class=\"delete\" (click)=\"openDialog(item)\">Usuń</button>\n                        <button mat-button class=\"edit\" (click)=\"editNotice(item)\">Edytuj</button> -->\n                        <button mat-button class=\"actualise\" (click)=\"openActualiseDialog(item)\">Przedłuż ważność</button>\n                        <app-notice-card [item]=\"item\" (click)=\"showNotice(item)\" ></app-notice-card>\n                    \n                </div>    \n            </div>   \n    </div>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel/user-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel/user-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"navigation main-page\">\n    <!-- <div *ngIf=\"categoriesVisible\" class=\"icon-div\">\n        <a class=\"icon\" (click)=\"sidenav.toggle()\">\n            <mat-icon>dehaze</mat-icon>\n        </a>\n    </div> -->\n    <div class=\"big-screen\" >\n        <a class=\"logo\" routerLink='notice-board/page/1'>Tablica ogłoszeń</a>\n        <div class=\"button-div\">\n            <button class=\"green-button\" mat-button (click)=\"addNewNotice()\">Dodaj ogłoszenie</button>\n        </div>\n        <a class=\"login\" [matMenuTriggerFor]=\"menu\">\n            <mat-icon class=\"icon login-icon\">person</mat-icon>\n            <div class=\"login-text\">\n                Moje konto   \n            </div> \n            <mat-icon class=\"arrow-icon\">arrow_drop_down</mat-icon>\n        </a>\n    </div>\n    <div class=\"small-screen\" >\n        <a class=\"icon\" routerLink='notice-board/page/1'><mat-icon>home</mat-icon></a>\n        <a class=\"icon\" [matMenuTriggerFor]=\"menu\">\n            <mat-icon>person</mat-icon>\n            <mat-icon class=\"arrow-icon\">arrow_drop_down</mat-icon>\n        </a>\n    </div>\n    <mat-menu class=\"account-menu\" #menu=\"matMenu\" xPosition=\"before\">\n        <a mat-menu-item routerLink=\"/../../../../user-panel/add-notice\">\n          <mat-icon>library_add</mat-icon>\n          <span>Dodaj ogłoszenie</span>\n        </a>\n        <a mat-menu-item routerLink=\"/../../../user-panel/my-notices\">\n          <mat-icon>my_library_books</mat-icon>\n          <span>Moje ogłoszenia</span>\n        </a>\n        <a mat-menu-item routerLink=\"/../../../user-panel/my-account\">\n            <mat-icon>account_circle</mat-icon>\n            <span>Moje konto</span>\n          </a>\n        <a mat-menu-item (click)=\"logout()\">\n          <mat-icon>logout</mat-icon>\n          <span>Wyloguj</span>\n        </a>\n      </mat-menu>\n    \n</mat-toolbar>\n\n<!-- <mat-sidenav-container fxFlexFill >\n<mat-sidenav [fixedInViewport]=\"true\" #sidenav fxLayout=\"column\" class=\"side-nav\">\n    <div fxLayout=\"column\">\n            <div class=\"categories\">\n                <h3>Wybierz kategorię</h3>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>home_work</mat-icon></div>\n                    <div class=\"text\">Nieruchomości</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>watch</mat-icon></div>\n                    <div class=\"text\">Moda i uroda</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>weekend</mat-icon></div>\n                    <div class=\"text\">Dom i ogród</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>book</mat-icon></div>\n                    <div class=\"text\">Edukacja</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>sports_soccer</mat-icon></div>\n                    <div class=\"text\">Sport</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>tablet_mac</mat-icon></div>\n                    <div class=\"text\">Elektronika</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>child_friendly</mat-icon></div>\n                    <div class=\"text\">Dziecko</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>directions_car</mat-icon></div>\n                    <div class=\"text\">Motoryzacja</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>pets</mat-icon></div>\n                    <div class=\"text\">Zwierzęta</div>\n                </button>\n                <button class=\"category\" mat-button>\n                    <div class=\"icon\"><mat-icon>select_all</mat-icon></div>\n                    <div class=\"text\">Wszystkie</div>\n                </button>\n        </div>\n    </div>\n</mat-sidenav>\n<mat-sidenav-content fxFlexFill>\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</mat-sidenav-content>\n</mat-sidenav-container> -->\n<div class=\"content\">\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page/main-page.component */ "./src/app/main-page/main-page/main-page.component.ts");
/* harmony import */ var _shared_components_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-components/notice-board/notice-board.component */ "./src/app/shared-components/notice-board/notice-board.component.ts");
/* harmony import */ var _main_page_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/auth/auth.component */ "./src/app/main-page/auth/auth.component.ts");
/* harmony import */ var _user_panel_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-panel/user-panel/user-panel.component */ "./src/app/user-panel/user-panel/user-panel.component.ts");
/* harmony import */ var _user_panel_add_notice_add_notice_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-panel/add-notice/add-notice.component */ "./src/app/user-panel/add-notice/add-notice.component.ts");
/* harmony import */ var _user_panel_my_notices_my_notices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-panel/my-notices/my-notices.component */ "./src/app/user-panel/my-notices/my-notices.component.ts");
/* harmony import */ var _shared_components_show_notice_show_notice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-components/show-notice/show-notice.component */ "./src/app/shared-components/show-notice/show-notice.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _user_panel_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-panel/my-account/my-account.component */ "./src/app/user-panel/my-account/my-account.component.ts");
/* harmony import */ var _user_panel_edit_notice_edit_notice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-panel/edit-notice/edit-notice.component */ "./src/app/user-panel/edit-notice/edit-notice.component.ts");













const routes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: _main_page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], children: [
            { path: '', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board/page', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board/page/:page', component: _shared_components_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__["NoticeBoardComponent"] },
            { path: 'notice-board/:id', component: _shared_components_show_notice_show_notice_component__WEBPACK_IMPORTED_MODULE_9__["ShowNoticeComponent"] },
            { path: 'auth', component: _main_page_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] }
        ] },
    { path: 'user-panel', component: _user_panel_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_6__["UserPanelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]], children: [
            { path: '', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board/page', redirectTo: 'notice-board/page/1', pathMatch: 'full' },
            { path: 'notice-board/page/:page', component: _shared_components_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_4__["NoticeBoardComponent"] },
            { path: 'notice-board/:id', component: _shared_components_show_notice_show_notice_component__WEBPACK_IMPORTED_MODULE_9__["ShowNoticeComponent"] },
            { path: 'add-notice', component: _user_panel_add_notice_add_notice_component__WEBPACK_IMPORTED_MODULE_7__["AddNoticeComponent"] },
            { path: 'my-notices', component: _user_panel_my_notices_my_notices_component__WEBPACK_IMPORTED_MODULE_8__["MyNoticesComponent"] },
            { path: 'my-account', component: _user_panel_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_11__["MyAccountComponent"] },
            { path: 'my-notices/edit/:id', component: _user_panel_edit_notice_edit_notice_component__WEBPACK_IMPORTED_MODULE_12__["EditNoticeComponent"] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AppComponent = class AppComponent {
    constructor(httpService, platformId, appId) {
        this.httpService = httpService;
        this.platformId = platformId;
        this.appId = appId;
        this.httpService.getNotices().subscribe(el => {
            // console.log(el);
        });
    }
    onActivate(event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"],] }] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"]))
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _main_page_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/auth/auth.component */ "./src/app/main-page/auth/auth.component.ts");
/* harmony import */ var _shared_components_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared-components/notice-board/notice-board.component */ "./src/app/shared-components/notice-board/notice-board.component.ts");
/* harmony import */ var _main_page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/main-page/main-page.component */ "./src/app/main-page/main-page/main-page.component.ts");
/* harmony import */ var _user_panel_add_notice_add_notice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-panel/add-notice/add-notice.component */ "./src/app/user-panel/add-notice/add-notice.component.ts");
/* harmony import */ var _user_panel_my_notices_my_notices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-panel/my-notices/my-notices.component */ "./src/app/user-panel/my-notices/my-notices.component.ts");
/* harmony import */ var _user_panel_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-panel/user-panel/user-panel.component */ "./src/app/user-panel/user-panel/user-panel.component.ts");
/* harmony import */ var _shared_components_show_notice_show_notice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared-components/show-notice/show-notice.component */ "./src/app/shared-components/show-notice/show-notice.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _shared_pipes_filter_by_price_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/pipes/filter-by-price.pipe */ "./src/app/shared/pipes/filter-by-price.pipe.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _user_panel_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user-panel/my-account/my-account.component */ "./src/app/user-panel/my-account/my-account.component.ts");
/* harmony import */ var _shared_components_notice_card_notice_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared-components/notice-card/notice-card.component */ "./src/app/shared-components/notice-card/notice-card.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _shared_pipes_search_by_location_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/pipes/search-by-location.pipe */ "./src/app/shared/pipes/search-by-location.pipe.ts");
/* harmony import */ var _shared_pipes_filter_by_type_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/pipes/filter-by-type.pipe */ "./src/app/shared/pipes/filter-by-type.pipe.ts");
/* harmony import */ var _user_panel_edit_notice_edit_notice_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user-panel/edit-notice/edit-notice.component */ "./src/app/user-panel/edit-notice/edit-notice.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _user_panel_delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./user-panel/delete-confirm/delete-confirm.component */ "./src/app/user-panel/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var _user_panel_actualise_confirm_actualise_confirm_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user-panel/actualise-confirm/actualise-confirm.component */ "./src/app/user-panel/actualise-confirm/actualise-confirm.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");










































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _main_page_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"],
            _shared_components_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_8__["NoticeBoardComponent"],
            _main_page_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__["MainPageComponent"],
            _user_panel_add_notice_add_notice_component__WEBPACK_IMPORTED_MODULE_10__["AddNoticeComponent"],
            _user_panel_my_notices_my_notices_component__WEBPACK_IMPORTED_MODULE_11__["MyNoticesComponent"],
            _user_panel_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_12__["UserPanelComponent"],
            _shared_components_show_notice_show_notice_component__WEBPACK_IMPORTED_MODULE_13__["ShowNoticeComponent"],
            _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchPipe"],
            _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"],
            _shared_pipes_filter_by_price_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterByPricePipe"],
            _user_panel_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_31__["MyAccountComponent"],
            _shared_components_notice_card_notice_card_component__WEBPACK_IMPORTED_MODULE_32__["NoticeCardComponent"],
            _shared_pipes_search_by_location_pipe__WEBPACK_IMPORTED_MODULE_34__["SearchByLocationPipe"],
            _shared_pipes_filter_by_type_pipe__WEBPACK_IMPORTED_MODULE_35__["FilterByTypePipe"],
            _user_panel_edit_notice_edit_notice_component__WEBPACK_IMPORTED_MODULE_36__["EditNoticeComponent"],
            _user_panel_delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_38__["DeleteConfirmComponent"],
            _user_panel_actualise_confirm_actualise_confirm_component__WEBPACK_IMPORTED_MODULE_39__["ActualiseConfirmComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            //FlexLayoutModule,
            //material
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_23__["MatStepperModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_40__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_41__["MatSnackBarModule"],
        ],
        providers: [_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["FilterPipe"], _shared_pipes_filter_by_price_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterByPricePipe"], _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchPipe"], _shared_pipes_search_by_location_pipe__WEBPACK_IMPORTED_MODULE_34__["SearchByLocationPipe"], _shared_pipes_filter_by_type_pipe__WEBPACK_IMPORTED_MODULE_35__["FilterByTypePipe"]],
        entryComponents: [_user_panel_delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_38__["DeleteConfirmComponent"], _user_panel_actualise_confirm_actualise_confirm_component__WEBPACK_IMPORTED_MODULE_39__["ActualiseConfirmComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authHttp, router) {
        this.authHttp = authHttp;
        this.router = router;
    }
    canActivate() {
        if (this.authHttp.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['main-page/auth']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/main-page/auth/auth.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-page/auth/auth.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media (min-width: 1600px) {\n  main {\n    width: 1400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\nmain .side {\n  width: 34%;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.342);\n  font-size: 12px;\n  margin: 1% 5% 5% 5%;\n  padding: 3%;\n}\n@media (max-width: 600px) {\n  main .side {\n    width: 90%;\n  }\n}\nmain .side h4 {\n  margin-bottom: 30px;\n}\nmain .side .item {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n}\nmain .side .item .name {\n  margin-right: 5%;\n  width: 45%;\n  padding-top: 10px;\n}\nmain .side .item .form-input {\n  font-size: 10px;\n  width: 90vw;\n}\n@media (min-width: 1200px) {\n  main .side .item .form-input {\n    font-size: 12px;\n  }\n}\n@media (min-width: 1600px) {\n  main .side .item .form-input {\n    font-size: 14px;\n  }\n}\nmain .side .green-button {\n  margin-left: 10px;\n  margin-bottom: 20px;\n}\nmain p {\n  color: #cc0000;\n  font-size: 12px;\n  padding: 10px;\n  letter-spacing: 1.2px;\n}\nmain .spinner {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL2F1dGgvQzpcXFVzZXJzXFxFd2FcXERlc2t0b3BcXEdJVCBwcm9qZWt0eVxcTm90aWNlQm9hcmRBUFB0ZXN0XFxUYWJsaWNhT2dsb3N6ZW4vc3JjXFxhcHBcXG1haW4tcGFnZVxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi1wYWdlL2F1dGgvQzpcXFVzZXJzXFxFd2FcXERlc2t0b3BcXEdJVCBwcm9qZWt0eVxcTm90aWNlQm9hcmRBUFB0ZXN0XFxUYWJsaWNhT2dsb3N6ZW4vc3JjXFxhcHBcXHNoYXJlZFxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FDQUo7QURJSTtFQVJKO0lBU1EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNETjtBQUNGO0FERUk7RUFDSSxVQUFBO0VBQ0EsZ0RFa0JTO0VGakJULGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBUjtBRENRO0VBTko7SUFPUSxVQUFBO0VDRVY7QUFDRjtBRERRO0VBQ0ksbUJBQUE7QUNHWjtBRERRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtBQ0daO0FERlk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0loQjtBREZZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNJaEI7QURIZ0I7RUFISjtJQUlRLGVBQUE7RUNNbEI7QUFDRjtBRExnQjtFQU5KO0lBT1EsZUFBQTtFQ1FsQjtBQUNGO0FESlE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDTVo7QURISTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDS1I7QURISTtFQUNJLGFBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzcyc7XHJcbm1haW57XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAvL2NsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA1MSUsIDY1JSAyNiUsIDAgNjglKTtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJGxlbW9uO1xyXG4gICAgLy96LWluZGV4OiAtMTtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICB3aWR0aDoxNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnNpZGV7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgICBib3gtc2hhZG93OiAkb3V0bGluZS1zaGFkb3c7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMSUgNSUgNSUgNSU7XHJcbiAgICAgICAgcGFkZGluZzogMyU7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgLm5hbWV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlIDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1pbnB1dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHZ3O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmVlbi1idXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgY29sb3I6IGRhcmtlbihyZWQsMTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbiAgICB9XHJcbiAgICAuc3Bpbm5lcntcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbn0iLCJtYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogMTQwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxubWFpbiAuc2lkZSB7XG4gIHdpZHRoOiAzNCU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDElIDUlIDUlIDUlO1xuICBwYWRkaW5nOiAzJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIC5zaWRlIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5tYWluIC5zaWRlIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbm1haW4gLnNpZGUgLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxubWFpbiAuc2lkZSAuaXRlbSAubmFtZSB7XG4gIG1hcmdpbi1yaWdodDogNSU7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxubWFpbiAuc2lkZSAuaXRlbSAuZm9ybS1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgd2lkdGg6IDkwdnc7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIG1haW4gLnNpZGUgLml0ZW0gLmZvcm0taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICBtYWluIC5zaWRlIC5pdGVtIC5mb3JtLWlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbm1haW4gLnNpZGUgLmdyZWVuLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxubWFpbiBwIHtcbiAgY29sb3I6ICNjYzAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xufVxubWFpbiAuc3Bpbm5lciB7XG4gIHBhZGRpbmc6IDIwcHg7XG59IiwiJHJvc2U6ICNlNzcxN2Q7XHJcbiRncmVlbjogI2FmZDI3NTtcclxuJGJlaWdlOiAjYzJiOWIwO1xyXG4kYnJvd246ICM3ZTY4NWE7XHJcbiRncmV5OiAjYzJjYWQwO1xyXG4kbGlnaHRfZ3JleTogI2VlZWVlZTtcclxuXHJcblxyXG4kY29yYWw6I2U5ODA3NDtcclxuJGRhcmtfY29yYWw6ICNlODVhNGY7XHJcbiRkYXJrX2dyZXk6ICM4ZThkOGE7XHJcbiR3YXJtX2JlaWdlOiAjZDhjM2E1O1xyXG5cclxuXHJcbiRuaWdodF9ibHVlOiAjNDQzMThkO1xyXG5cclxuJGJvcmRvOiAjNTkyNTNhO1xyXG4kcm9zZV9ib3JkbzogIzc4MjQ0YztcclxuJHJvc2VfYmVpZ2U6ICM4OTUwNjE7XHJcblxyXG4kc2VhOiAjMTdiODkwO1xyXG4kc2t5OiAjOWRjNWJiO1xyXG4kbGlnaHQtc2t5OiAjZGVlNWU1O1xyXG4kZGFya19za3k6ICM1ZTgwN2Y7IFxyXG4kZGFya19ncmVlbjogIzRiN2Y1MjtcclxuJGxlbW9uOiAjZDFlOWFkO1xyXG4kcmVkOiAjZTk0ZjM3O1xyXG4kZGFya19ncmV5X2JsdWU6ICMzOTVlNjY7XHJcbiRkYXJrX2JsdWU6ICMyNDIwMzg7XHJcbiRyZWRfcGluazogI2E3MWQzMTtcclxuXHJcblxyXG5cclxuJHNoYWRvdzogMHB4IDhweCAxMXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjMwMSk7XHJcbiRvdXRsaW5lLXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpOyJdfQ== */");

/***/ }),

/***/ "./src/app/main-page/auth/auth.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/auth/auth.component.ts ***!
  \**************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AuthComponent = class AuthComponent {
    constructor(authHttp, router, _snackbar) {
        this.authHttp = authHttp;
        this.router = router;
        this._snackbar = _snackbar;
        //hide passwords in forms 
        this.hide = true;
        this.hide2 = true;
        this.invalidLogin = false;
        this.invalidRegister = false;
        this.registerSpinnerActive = false;
        this.loginSpinnerActive = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            registerLogin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(6)]),
            registerPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(5)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[0-9]{9}$/)]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(3)]),
        });
        //login
        this.login = '';
        this.password = '';
        this.message = 'Ok';
        this.action = '';
    }
    ngOnInit() {
    }
    loginUser() {
        this.loginSpinnerActive = true;
        const user = {
            login: this.login,
            password: this.password
        };
        this.authHttp.loginUser(user).subscribe(res => {
            //console.log('Zalogowany');
            //console.log(res);
            localStorage.setItem('token', res);
            this.loginSpinnerActive = false;
            this.router.navigate(['../../user-panel']);
        }, err => {
            this.loginSpinnerActive = false;
            this.invalidLogin = true;
        });
    }
    registerUser(event) {
        if (this.registerForm.valid) {
            this.registerSpinnerActive = true;
            const user = {
                login: this.registerForm.get('registerLogin').value,
                password: this.registerForm.get('registerPassword').value,
                phoneNumber: this.registerForm.get('phoneNumber').value,
                firstName: this.registerForm.get('firstName').value,
                lastName: this.registerForm.get('lastName').value
            };
            this.authHttp.registerUser(user).subscribe(res => {
                //console.log(res);
                this.registerSpinnerActive = false;
                this.message = 'Zostałeś poprawnie zarejestrowany!';
                this.openSnackBar();
            }, er => {
                this.registerSpinnerActive = false;
                //console.log(er);
                this.invalidRegister = true;
                setTimeout(function () {
                    this.invalidRegister = false;
                    //console.log(this.invalidRegister);
                }.bind(this), 10000);
                this.message = 'Coś poszło nie tak';
                this.openSnackBar();
            }, () => {
                this.myNgForm.reset();
            });
            event.currentTarget.reset();
        }
    }
    openSnackBar() {
        this._snackbar.open(this.message, this.action, {
            duration: 5000,
        });
    }
    //validation
    getEmailErrorMessage() {
        return this.registerForm.get('registerLogin').hasError('required') ? 'Musisz wprowadzić wartość' :
            this.registerForm.get('registerLogin').hasError('email') ? 'Nieprawidłowy adres e-mail' :
                '';
    }
    getPhoneErrorMessage() {
        return this.registerForm.get('phoneNumber').hasError('required') ? 'Musisz wprowadzić wartość' :
            this.registerForm.get('phoneNumber').hasError('pattern') ? 'Nieprawidłowa ilość cyfr' :
                '';
    }
};
AuthComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], AuthComponent.prototype, "myNgForm", void 0);
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.scss */ "./src/app/main-page/auth/auth.component.scss")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/main-page/main-page/main-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/main-page/main-page/main-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/main-page/main-page/main-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/main-page/main-page/main-page.component.ts ***!
  \************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let MainPageComponent = class MainPageComponent {
    constructor(platformId, appId, appService, cdr, router, httpService) {
        this.platformId = platformId;
        this.appId = appId;
        this.appService = appService;
        this.cdr = cdr;
        this.router = router;
        this.httpService = httpService;
        this.categories = [];
        this.httpService.getCategories().subscribe(res => {
            this.categories = res;
            this.category = this.categories[0];
            this.appService.category.next(this.category);
        });
    }
    onActivate(event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.appService.categoriesVisible.subscribe(el => {
            this.categoriesVisible = el;
        });
        this.cdr.detectChanges();
    }
    addNewNotice() {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['../../../../user-panel/add-notice']);
        }
        else {
            this.router.navigate(['../../../../main-page/auth']);
        }
    }
    myAccountNavigate() {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['../../../../user-panel']);
        }
        else {
            this.router.navigate(['../../../../main-page/auth']);
        }
    }
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
    getCategoryIcon(category) {
        return this.appService.getCategoryIcon(category);
    }
    changeCategory(category) {
        this.category = category;
        this.appService.category.next(category);
    }
};
MainPageComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"],] }] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }
];
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.scss */ "./src/app/main-page/main-page/main-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"]))
], MainPageComponent);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AppService = class AppService {
    constructor() {
        this.categoriesVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.category = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    getCategoryRightName(category) {
        if (category.name === 'real-estate') {
            return 'Nieruchomości';
        }
        else if (category.name === 'fashion-and-beauty') {
            return 'Moda i uroda';
        }
        else if (category.name === 'house-and-garden') {
            return 'Dom i ogród';
        }
        else if (category.name === 'education') {
            return 'Edukacja';
        }
        else if (category.name === 'sport') {
            return 'Sport';
        }
        else if (category.name === 'electronic') {
            return 'Elektronika';
        }
        else if (category.name === 'kid') {
            return 'Dziecko';
        }
        else if (category.name === 'motorization') {
            return 'Motoryzacja';
        }
        else if (category.name === 'pets') {
            return 'Zwierzęta';
        }
    }
    getCategoryIcon(category) {
        if (category.name === 'real-estate') {
            return 'home_work';
        }
        else if (category.name === 'fashion-and-beauty') {
            return 'watch';
        }
        else if (category.name === 'house-and-garden') {
            return 'weekend';
        }
        else if (category.name === 'education') {
            return 'book';
        }
        else if (category.name === 'sport') {
            return 'sports_soccer';
        }
        else if (category.name === 'electronic') {
            return 'tablet_mac';
        }
        else if (category.name === 'kid') {
            return 'child_friendly';
        }
        else if (category.name === 'motorization') {
            return 'directions_car';
        }
        else if (category.name === 'pets') {
            return 'pets';
        }
    }
    getOldNotice(notice) {
        if (!notice.expDate || Date.now() > Date.parse(notice.expDate)) {
            return true;
        }
        else {
            return false;
        }
    }
    getActNotice(notice) {
        if (Date.now() < Date.parse(notice.expDate)) {
            return true;
        }
        else {
            return false;
        }
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AppService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let AuthService = class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.httpUrl = 'https://dry-fjord-48898.herokuapp.com/api/';
    }
    //httpUrl = 'http://localhost:3000/api/';
    loginUser(user) {
        return this.http.post(this.httpUrl + 'user/login', user, { responseType: 'text' });
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['../../main-page/auth']);
    }
    registerUser(user) {
        return this.http.post(this.httpUrl + 'user/register', user);
    }
    isLoggedIn() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HttpService = class HttpService {
    //httpUrl = 'http://localhost:3000/api/';
    constructor(http) {
        this.http = http;
        this.httpUrl = 'https://dry-fjord-48898.herokuapp.com/api/';
    }
    getNotices() {
        return this.http.get(this.httpUrl + 'notices');
    }
    getOneNotice(id) {
        return this.http.get(this.httpUrl + 'notices/' + id);
    }
    getMyInfo() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let token = localStorage.getItem('token');
        headers = headers.append('token', token);
        return this.http.get(this.httpUrl + 'users/logged-user-information', { headers });
    }
    addNotice(formData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let token = localStorage.getItem('token');
        headers = headers.append('token', token);
        return this.http.post(this.httpUrl + 'notices', formData, { headers, reportProgress: true, observe: 'events' });
    }
    getCategories() {
        return this.http.get(this.httpUrl + 'categories');
    }
    updateNotice(id, formData) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let token = localStorage.getItem('token');
        headers = headers.append('token', token);
        return this.http.put(this.httpUrl + 'notices/' + id, formData, { headers });
    }
    deleteNotice(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let token = localStorage.getItem('token');
        headers = headers.append('token', token);
        return this.http.delete(this.httpUrl + 'notices/' + id, { headers });
    }
    extendValidity(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        let token = localStorage.getItem('token');
        headers = headers.append('token', token);
        return this.http.put(this.httpUrl + 'notices/extendValidity/' + id, {}, { headers });
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ "./src/app/shared-components/notice-board/notice-board.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/notice-board/notice-board.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  margin-top: 70px;\n}\n@media (max-width: 800px) {\n  .content {\n    margin-top: 50px;\n  }\n}\n@media (max-width: 660px) {\n  .content {\n    margin-top: 20px;\n  }\n}\n.wrapper {\n  display: grid;\n  background-color: #dee5e5;\n  margin: 3%;\n  padding-bottom: 10px;\n  grid-template-areas: \"search location price-from price-to\" \"radio-buttons radio-buttons radio-buttons radio-buttons\";\n}\n@media (max-width: 1125px) {\n  .wrapper {\n    grid-template-areas: \"search location\" \"price-from price-to\" \"radio-buttons radio-buttons\";\n  }\n}\n@media (max-width: 600px) {\n  .wrapper {\n    grid-template-areas: \"search\" \"location\" \"price-from\" \"price-to\" \"radio-buttons\";\n  }\n}\n.wrapper .filter-input {\n  margin: 10px;\n  font-size: 13px;\n}\n@media (max-width: 1125px) {\n  .wrapper .filter-input {\n    font-size: 10px;\n  }\n}\n@media (max-width: 300px) {\n  .wrapper .filter-input {\n    font-size: 8px;\n    width: 80vw;\n    margin-bottom: 0;\n  }\n}\n.wrapper .search {\n  grid-area: search;\n}\n.wrapper .location {\n  grid-area: location;\n}\n.wrapper .price-from {\n  grid-area: price-from;\n}\n.wrapper .price-to {\n  grid-area: price-to;\n}\n.wrapper .options {\n  display: -webkit-box;\n  display: flex;\n  grid-area: radio-buttons;\n  background-color: white;\n  padding: 2%;\n  border-radius: 5px;\n  margin: 10px;\n  font-size: 13px;\n}\n.wrapper .options mat-radio-button {\n  margin-left: 30px;\n  margin-bottom: 10px;\n}\n@media (max-width: 300px) {\n  .wrapper .options mat-radio-button {\n    margin-left: 10px;\n  }\n}\n@media (max-width: 1125px) {\n  .wrapper .options {\n    font-size: 10px;\n  }\n}\n@media (max-width: 300px) {\n  .wrapper .options {\n    font-size: 8px;\n    width: 78vw;\n    padding: 1vw;\n  }\n}\n.wrapper .options .options-title {\n  color: #5e807f;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n@media (max-width: 300px) {\n  .wrapper .options .options-title {\n    display: none;\n  }\n}\n.button-div {\n  margin: 3%;\n  margin-bottom: 20px;\n}\n@media (min-width: 731px) {\n  .button-div {\n    display: none;\n  }\n}\n.pager {\n  margin: 3%;\n}\n.checked {\n  background-color: #1acfa2;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbm90aWNlLWJvYXJkL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWQtY29tcG9uZW50c1xcbm90aWNlLWJvYXJkXFxub3RpY2UtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL25vdGljZS1ib2FyZC9ub3RpY2UtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL25vdGljZS1ib2FyZC9DOlxcVXNlcnNcXEV3YVxcRGVza3RvcFxcR0lUIHByb2pla3R5XFxOb3RpY2VCb2FyZEFQUHRlc3RcXFRhYmxpY2FPZ2xvc3plbi9zcmNcXGFwcFxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGdCQUFBO0FDRlI7QURHUTtFQUZKO0lBR1EsZ0JBQUE7RUNBVjtBQUNGO0FEQ1E7RUFMSjtJQU1RLGdCQUFBO0VDRVY7QUFDRjtBREFHO0VBQ0ksYUFBQTtFQUVDLHlCRU9JO0VGTkosVUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0hBQ0E7QUNDUjtBRENRO0VBVEw7SUFVUywwRkFDQTtFQ0NWO0FBQ0Y7QURFUTtFQWZMO0lBZ0JTLGdGQUNBO0VDQVY7QUFDRjtBREtRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNIWjtBRElZO0VBSEo7SUFJUSxlQUFBO0VDRGQ7QUFDRjtBREVZO0VBTko7SUFPUSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDQ2Q7QUFDRjtBRENRO0VBQ0ksaUJBQUE7QUNDWjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBRENRO0VBQ0kscUJBQUE7QUNDWjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBRENRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ1o7QURDWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDaEI7QURBZ0I7RUFISjtJQUlRLGlCQUFBO0VDR2xCO0FBQ0Y7QUREWTtFQWhCSjtJQWlCUSxlQUFBO0VDSWQ7QUFDRjtBREhZO0VBbkJKO0lBb0JRLGNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ01kO0FBQ0Y7QURMWTtFQUNJLGNFN0RMO0VGOERLLHlCQUFBO0VBQ0EsZ0JBQUE7QUNPaEI7QUROZ0I7RUFKSjtJQUtRLGFBQUE7RUNTbEI7QUFDRjtBRExJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDUVI7QURQUTtFQUhKO0lBSVEsYUFBQTtFQ1VWO0FBQ0Y7QURSSTtFQUNJLFVBQUE7QUNXUjtBRFJJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbm90aWNlLWJvYXJkL25vdGljZS1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiAgICBcclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgLndyYXBwZXJ7XHJcbiAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJGRhcmtfc2t5LCAkbGlnaHRfc2t5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRfc2t5O1xyXG4gICAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXHJcbiAgICAgICAgXCJzZWFyY2ggbG9jYXRpb24gcHJpY2UtZnJvbSBwcmljZS10b1wiXHJcbiAgICAgICAgXCJyYWRpby1idXR0b25zIHJhZGlvLWJ1dHRvbnMgcmFkaW8tYnV0dG9ucyByYWRpby1idXR0b25zXCI7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTEyNXB4KSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxyXG4gICAgICAgICAgICBcInNlYXJjaCBsb2NhdGlvblwiIFxyXG4gICAgICAgICAgICBcInByaWNlLWZyb20gcHJpY2UtdG9cIlxyXG4gICAgICAgICAgICBcInJhZGlvLWJ1dHRvbnMgcmFkaW8tYnV0dG9uc1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICAgICAgICAgXCJzZWFyY2hcIiBcclxuICAgICAgICAgICAgXCJsb2NhdGlvblwiIFxyXG4gICAgICAgICAgICBcInByaWNlLWZyb21cIiBcclxuICAgICAgICAgICAgXCJwcmljZS10b1wiXHJcbiAgICAgICAgICAgIFwicmFkaW8tYnV0dG9uc1wiIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlsdGVyLWlucHV0e1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MTEyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MzAwcHgpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2h7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogc2VhcmNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZS1mcm9te1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IHByaWNlLWZyb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZS10b3tcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBwcmljZS10bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9wdGlvbnN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogcmFkaW8tYnV0dG9ucztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWF0LXJhZGlvLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjMwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExMjVweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjMwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3OHZ3O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcHRpb25zLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrX3NreTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MzAwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIC5idXR0b24tZGl2e1xyXG4gICAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDo3MzFweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYWdlcntcclxuICAgICAgICBtYXJnaW46IDMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja2Vke1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yOiAkc2VhLCAkYW1vdW50OiA1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgIiwiLmNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlNWU1O1xuICBtYXJnaW46IDMlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzZWFyY2ggbG9jYXRpb24gcHJpY2UtZnJvbSBwcmljZS10b1wiIFwicmFkaW8tYnV0dG9ucyByYWRpby1idXR0b25zIHJhZGlvLWJ1dHRvbnMgcmFkaW8tYnV0dG9uc1wiO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjVweCkge1xuICAud3JhcHBlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzZWFyY2ggbG9jYXRpb25cIiBcInByaWNlLWZyb20gcHJpY2UtdG9cIiBcInJhZGlvLWJ1dHRvbnMgcmFkaW8tYnV0dG9uc1wiO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwic2VhcmNoXCIgXCJsb2NhdGlvblwiIFwicHJpY2UtZnJvbVwiIFwicHJpY2UtdG9cIiBcInJhZGlvLWJ1dHRvbnNcIjtcbiAgfVxufVxuLndyYXBwZXIgLmZpbHRlci1pbnB1dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjVweCkge1xuICAud3JhcHBlciAuZmlsdGVyLWlucHV0IHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAud3JhcHBlciAuZmlsdGVyLWlucHV0IHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4ud3JhcHBlciAuc2VhcmNoIHtcbiAgZ3JpZC1hcmVhOiBzZWFyY2g7XG59XG4ud3JhcHBlciAubG9jYXRpb24ge1xuICBncmlkLWFyZWE6IGxvY2F0aW9uO1xufVxuLndyYXBwZXIgLnByaWNlLWZyb20ge1xuICBncmlkLWFyZWE6IHByaWNlLWZyb207XG59XG4ud3JhcHBlciAucHJpY2UtdG8ge1xuICBncmlkLWFyZWE6IHByaWNlLXRvO1xufVxuLndyYXBwZXIgLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBncmlkLWFyZWE6IHJhZGlvLWJ1dHRvbnM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi53cmFwcGVyIC5vcHRpb25zIG1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAud3JhcHBlciAub3B0aW9ucyBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExMjVweCkge1xuICAud3JhcHBlciAub3B0aW9ucyB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLndyYXBwZXIgLm9wdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIHdpZHRoOiA3OHZ3O1xuICAgIHBhZGRpbmc6IDF2dztcbiAgfVxufVxuLndyYXBwZXIgLm9wdGlvbnMgLm9wdGlvbnMtdGl0bGUge1xuICBjb2xvcjogIzVlODA3ZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMDBweCkge1xuICAud3JhcHBlciAub3B0aW9ucyAub3B0aW9ucy10aXRsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYnV0dG9uLWRpdiB7XG4gIG1hcmdpbjogMyU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzMxcHgpIHtcbiAgLmJ1dHRvbi1kaXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnBhZ2VyIHtcbiAgbWFyZ2luOiAzJTtcbn1cblxuLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFjZmEyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSIsIiRyb3NlOiAjZTc3MTdkO1xyXG4kZ3JlZW46ICNhZmQyNzU7XHJcbiRiZWlnZTogI2MyYjliMDtcclxuJGJyb3duOiAjN2U2ODVhO1xyXG4kZ3JleTogI2MyY2FkMDtcclxuJGxpZ2h0X2dyZXk6ICNlZWVlZWU7XHJcblxyXG5cclxuJGNvcmFsOiNlOTgwNzQ7XHJcbiRkYXJrX2NvcmFsOiAjZTg1YTRmO1xyXG4kZGFya19ncmV5OiAjOGU4ZDhhO1xyXG4kd2FybV9iZWlnZTogI2Q4YzNhNTtcclxuXHJcblxyXG4kbmlnaHRfYmx1ZTogIzQ0MzE4ZDtcclxuXHJcbiRib3JkbzogIzU5MjUzYTtcclxuJHJvc2VfYm9yZG86ICM3ODI0NGM7XHJcbiRyb3NlX2JlaWdlOiAjODk1MDYxO1xyXG5cclxuJHNlYTogIzE3Yjg5MDtcclxuJHNreTogIzlkYzViYjtcclxuJGxpZ2h0LXNreTogI2RlZTVlNTtcclxuJGRhcmtfc2t5OiAjNWU4MDdmOyBcclxuJGRhcmtfZ3JlZW46ICM0YjdmNTI7XHJcbiRsZW1vbjogI2QxZTlhZDtcclxuJHJlZDogI2U5NGYzNztcclxuJGRhcmtfZ3JleV9ibHVlOiAjMzk1ZTY2O1xyXG4kZGFya19ibHVlOiAjMjQyMDM4O1xyXG4kcmVkX3Bpbms6ICNhNzFkMzE7XHJcblxyXG5cclxuXHJcbiRzaGFkb3c6IDBweCA4cHggMTFweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zMDEpO1xyXG4kb3V0bGluZS1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzQyKTsiXX0= */");

/***/ }),

/***/ "./src/app/shared-components/notice-board/notice-board.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/notice-board/notice-board.component.ts ***!
  \**************************************************************************/
/*! exports provided: NoticeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var src_app_shared_pipes_filter_by_price_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/filter-by-price.pipe */ "./src/app/shared/pipes/filter-by-price.pipe.ts");
/* harmony import */ var src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var src_app_shared_pipes_search_by_location_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pipes/search-by-location.pipe */ "./src/app/shared/pipes/search-by-location.pipe.ts");
/* harmony import */ var src_app_shared_pipes_filter_by_type_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/pipes/filter-by-type.pipe */ "./src/app/shared/pipes/filter-by-type.pipe.ts");













let NoticeBoardComponent = class NoticeBoardComponent {
    constructor(http, router, _DomSanitizer, route, appService, filter, filter_by_price, search, searchLocation, filterType) {
        // this.http.getNotices().subscribe(el => this.notices = el );
        this.http = http;
        this.router = router;
        this._DomSanitizer = _DomSanitizer;
        this.route = route;
        this.appService = appService;
        this.filter = filter;
        this.filter_by_price = filter_by_price;
        this.search = search;
        this.searchLocation = searchLocation;
        this.filterType = filterType;
        this.category = null;
        this.type = '';
        this.spinnerActive = false;
        this.displayedColumns = ['', '', '', '', ''];
        this.pageSize = 12;
        this.currentPage = 0;
        this.totalSize = 0;
        // get page number from route and show items
        this.route.params.subscribe(params => {
            this.currentPage = +params.page - 1;
            this.iterator();
        });
        this.appService.category.subscribe(el => {
            this.category = el;
            //console.log(this.category);
        });
        this.http.getCategories().subscribe(res => this.categories = res);
    }
    ngOnInit() {
        this.getArray();
        this.appService.categoriesVisible.next(true);
    }
    ngOnDestroy() {
        this.appService.categoriesVisible.next(false);
    }
    //click on Add Notice
    addNewNotice() {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['../../../../user-panel/add-notice']);
        }
        else {
            this.router.navigate(['../../../../main-page/auth']);
        }
    }
    // show notice after click on card
    showNotice(notice, router) {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['/../../user-panel/notice-board/', notice._id]);
        }
        else {
            this.router.navigate(['/../../main-page/notice-board/', notice._id]);
        }
    }
    // show modified text on card
    // getShortDescription(descripton: string): string {
    //   if (descripton.length < 40) {
    //     return descripton;
    //   } else {
    //     return descripton.slice(0, 10) + '...';
    //   }
    // }
    // getCategories(categories: Category[]): string {
    //   let categoriesString = '';
    //   categories.forEach(el => categoriesString += el.name + ' ');
    //   return categoriesString;
    // }
    // pagination functions
    handlePage(e) {
        // this.currentPage = e.pageIndex;
        this.router.navigate(['/../../main-page/notice-board/page/', (e.pageIndex + 1)]);
        this.pageSize = e.pageSize;
        // this.iterator();
    }
    getArray() {
        this.spinnerActive = true;
        this.http.getNotices()
            .subscribe((response) => {
            this.spinnerActive = false;
            this.notices = response;
            this.filteredItems = response;
            this.category = null;
            this.filterItemsByPriceL(this.notices);
            this.filterItemsByPriceM(this.notices);
            this.filterItemsBySearch(this.notices);
            this.filterItemsByCategory(this.notices);
            this.filterItemsBySearchLocation(this.notices);
            this.updateItems();
        });
        this.route.params.subscribe(params => {
            this.currentPage = +params.page - 1;
            this.iterator();
        });
    }
    updateItems() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.filteredItems);
        this.dataSource.paginator = this.paginator;
        this.array = this.filteredItems;
        this.totalSize = this.array.length;
        this.iterator();
    }
    iterator() {
        if (this.array) {
            // this.route.params.subscribe(params => {
            //   this.currentPage = +params['page'] - 1;
            const end = (this.currentPage + 1) * this.pageSize;
            const start = this.currentPage * this.pageSize;
            const part = this.array.slice(start, end);
            this.dataSource = part;
            window.scroll(0, 0);
            // });
        }
    }
    //filter functions
    filterItemsByPriceM(array) {
        this.filteredItems = this.filter_by_price.transform(array, this.price1, 'more');
        this.updateItems();
        //console.log(this.filter_by_price.transform(this.notices, this.price1, 'more'));
    }
    filterItemsByPriceL(array) {
        this.filteredItems = this.filter_by_price.transform(array, this.price2, 'less');
        this.updateItems();
        //console.log(this.filter_by_price.transform(this.notices, this.price2, 'less'));
    }
    filterItemsBySearch(array) {
        this.filteredItems = this.search.transform(array, this.searchInput);
        this.updateItems();
    }
    filterItemsBySearchLocation(array) {
        this.filteredItems = this.searchLocation.transform(array, this.location);
        this.updateItems();
    }
    filterItemsByCategory(array) {
        this.filteredItems = this.filter.transform(array, 'categories', this.category);
        //console.log(this.category);
        //console.log(this.filteredItems = this.filter.transform(array, 'categories', this.category));
        this.updateItems();
    }
    filterItemsByType(array) {
        const type = parseInt(this.type, 10);
        this.filteredItems = this.filterType.transform(array, 'type', type);
        //console.log(this.filteredItems = this.filterType.transform(array, 'type', type));
        this.updateItems();
    }
    filterByAll(array) {
        this.filteredItems = array;
        this.filterItemsBySearchLocation(this.filteredItems);
        this.filterItemsBySearch(this.filteredItems);
        this.filterItemsByPriceL(this.filteredItems);
        this.filterItemsByPriceM(this.filteredItems);
        this.filterItemsByCategory(this.filteredItems);
        this.filterItemsByType(this.filteredItems);
        //console.log(this.category);
        //console.log(this.filteredItems);
        //console.log(this.location);
        //console.log(this.type);
    }
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
    getCategoryIcon(category) {
        return this.appService.getCategoryIcon(category);
    }
    changeCategory(category) {
        this.appService.category.next(category);
        //console.log(category);
        //console.log(this.category);
        this.filterByAll(this.notices);
        this.sidenav.toggle();
    }
    selectAll() {
        this.appService.category.next(null);
        this.filterByAll(this.notices);
        this.sidenav.toggle();
    }
};
NoticeBoardComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: src_app_shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"] },
    { type: src_app_shared_pipes_filter_by_price_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterByPricePipe"] },
    { type: src_app_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_9__["SearchPipe"] },
    { type: src_app_shared_pipes_search_by_location_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchByLocationPipe"] },
    { type: src_app_shared_pipes_filter_by_type_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterByTypePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], NoticeBoardComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], { static: true })
], NoticeBoardComponent.prototype, "sidenav", void 0);
NoticeBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notice-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-board/notice-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notice-board.component.scss */ "./src/app/shared-components/notice-board/notice-board.component.scss")).default]
    })
], NoticeBoardComponent);



/***/ }),

/***/ "./src/app/shared-components/notice-card/notice-card.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/notice-card/notice-card.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  max-width: 90%;\n  margin-bottom: 80px;\n  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.342);\n}\n.card :hover {\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .card {\n    margin-bottom: 40px;\n  }\n}\n@media (max-width: 850px) {\n  .card {\n    margin-right: 10px;\n    margin-left: 10px;\n    margin-bottom: 40px;\n  }\n}\n.card p {\n  height: 70px;\n  padding: 20px;\n}\n.card .card-header {\n  height: 30px;\n  padding-bottom: 10px;\n}\n.card .card-header mat-card-subtitle {\n  height: 40px;\n}\n.card .photo-container {\n  margin-top: 10px;\n  height: 200px;\n  text-align: center;\n  border: 1px solid #dee5e5;\n  position: relative;\n}\n.card .photo-container img {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.card .photo-container .no-picture {\n  padding-top: 50px;\n  color: #5e807f;\n}\n.card .details {\n  padding: 20px;\n}\n.card .details .detail {\n  padding-bottom: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n.card .details .detail .detail-name {\n  text-transform: uppercase;\n  color: #5e807f;\n  width: 100px;\n}\n@media (max-width: 950px) {\n  .card .mat-card-header .mat-card-title {\n    font-size: 15px;\n  }\n  .card .mat-card-content {\n    font-size: 12px;\n  }\n  .card .photo-container {\n    height: 130px;\n    text-align: center;\n    border: 1px solid #dee5e5;\n  }\n  .card .photo-container img {\n    max-height: 130px;\n    width: auto;\n  }\n  .card .photo-container .no-picture {\n    padding-top: 25px;\n    color: #5e807f;\n  }\n  .card p {\n    padding: 10px 0 10px 0;\n  }\n  .card .details {\n    padding: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbm90aWNlLWNhcmQvQzpcXFVzZXJzXFxFd2FcXERlc2t0b3BcXEdJVCBwcm9qZWt0eVxcTm90aWNlQm9hcmRBUFB0ZXN0XFxUYWJsaWNhT2dsb3N6ZW4vc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxub3RpY2UtY2FyZFxcbm90aWNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL25vdGljZS1jYXJkL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9ub3RpY2UtY2FyZC9ub3RpY2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUlJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQzJCYTtBQzlCakI7QUZGSTtFQUNJLGVBQUE7QUVJUjtBRkNJO0VBUEo7SUFRUSxtQkFBQTtFRUVOO0FBQ0Y7QUZESTtFQVZKO0lBV1Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VFSU47QUFDRjtBRkhJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUVLUjtBRkhJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FFS1I7QUZKUTtFQUNJLFlBQUE7QUVNWjtBRkZNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FFSVI7QUZIUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUVLWjtBRkhRO0VBQ0ksaUJBQUE7RUFDQSxjQ3ZCRDtBQzRCWDtBRkZJO0VBQ0ksYUFBQTtBRUlSO0FGSFE7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBRUtaO0FGSlk7RUFDSSx5QkFBQTtFQUNBLGNDakNMO0VEa0NLLFlBQUE7QUVNaEI7QUZBSTtFQUNJO0lBQ0ksZUFBQTtFRUVWO0VGQU07SUFDSSxlQUFBO0VFRVY7RUZBTTtJQUNJLGFBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0VFRVY7RUZEVTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtFRUdkO0VGRFU7SUFDSSxpQkFBQTtJQUNBLGNDekRMO0VDNERUO0VGQU07SUFDSSxzQkFBQTtFRUVWO0VGQU07SUFDSSxVQUFBO0VFRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL25vdGljZS1jYXJkL25vdGljZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuLmNhcmQge1xyXG4gICAgOmhvdmVye1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgIGJveC1zaGFkb3c6ICRvdXRsaW5lLXNoYWRvdztcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hdC1jYXJkLXN1YnRpdGxle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC5waG90by1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfc2t5O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgICAgICAgICAgIHRvcDogMDsgIFxyXG4gICAgICAgICAgICBib3R0b206IDA7ICBcclxuICAgICAgICAgICAgbGVmdDogMDsgIFxyXG4gICAgICAgICAgICByaWdodDogMDsgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby1waWN0dXJle1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrX3NreTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsc3tcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLmRldGFpbC1uYW1le1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZGFya19za3k7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbC12YWx1ZXtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgICAgIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG90by1jb250YWluZXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X3NreTtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm8tcGljdHVyZXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRkYXJrX3NreTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRldGFpbHN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIiwiJHJvc2U6ICNlNzcxN2Q7XHJcbiRncmVlbjogI2FmZDI3NTtcclxuJGJlaWdlOiAjYzJiOWIwO1xyXG4kYnJvd246ICM3ZTY4NWE7XHJcbiRncmV5OiAjYzJjYWQwO1xyXG4kbGlnaHRfZ3JleTogI2VlZWVlZTtcclxuXHJcblxyXG4kY29yYWw6I2U5ODA3NDtcclxuJGRhcmtfY29yYWw6ICNlODVhNGY7XHJcbiRkYXJrX2dyZXk6ICM4ZThkOGE7XHJcbiR3YXJtX2JlaWdlOiAjZDhjM2E1O1xyXG5cclxuXHJcbiRuaWdodF9ibHVlOiAjNDQzMThkO1xyXG5cclxuJGJvcmRvOiAjNTkyNTNhO1xyXG4kcm9zZV9ib3JkbzogIzc4MjQ0YztcclxuJHJvc2VfYmVpZ2U6ICM4OTUwNjE7XHJcblxyXG4kc2VhOiAjMTdiODkwO1xyXG4kc2t5OiAjOWRjNWJiO1xyXG4kbGlnaHQtc2t5OiAjZGVlNWU1O1xyXG4kZGFya19za3k6ICM1ZTgwN2Y7IFxyXG4kZGFya19ncmVlbjogIzRiN2Y1MjtcclxuJGxlbW9uOiAjZDFlOWFkO1xyXG4kcmVkOiAjZTk0ZjM3O1xyXG4kZGFya19ncmV5X2JsdWU6ICMzOTVlNjY7XHJcbiRkYXJrX2JsdWU6ICMyNDIwMzg7XHJcbiRyZWRfcGluazogI2E3MWQzMTtcclxuXHJcblxyXG5cclxuJHNoYWRvdzogMHB4IDhweCAxMXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjMwMSk7XHJcbiRvdXRsaW5lLXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpOyIsIi5jYXJkIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzQyKTtcbn1cbi5jYXJkIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5jYXJkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuLmNhcmQgcCB7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgbWF0LWNhcmQtc3VidGl0bGUge1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uY2FyZCAucGhvdG8tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlNWU1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAucGhvdG8tY29udGFpbmVyIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jYXJkIC5waG90by1jb250YWluZXIgLm5vLXBpY3R1cmUge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgY29sb3I6ICM1ZTgwN2Y7XG59XG4uY2FyZCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZCAuZGV0YWlscyAuZGV0YWlsIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FyZCAuZGV0YWlscyAuZGV0YWlsIC5kZXRhaWwtbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjNWU4MDdmO1xuICB3aWR0aDogMTAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLmNhcmQgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuY2FyZCAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5jYXJkIC5waG90by1jb250YWluZXIge1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWU1ZTU7XG4gIH1cbiAgLmNhcmQgLnBob3RvLWNvbnRhaW5lciBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEzMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5jYXJkIC5waG90by1jb250YWluZXIgLm5vLXBpY3R1cmUge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGNvbG9yOiAjNWU4MDdmO1xuICB9XG4gIC5jYXJkIHAge1xuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG4gIH1cbiAgLmNhcmQgLmRldGFpbHMge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared-components/notice-card/notice-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-components/notice-card/notice-card.component.ts ***!
  \************************************************************************/
/*! exports provided: NoticeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeCardComponent", function() { return NoticeCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");




let NoticeCardComponent = class NoticeCardComponent {
    constructor(_DomSanitizer, appService) {
        this._DomSanitizer = _DomSanitizer;
        this.appService = appService;
    }
    ngOnInit() {
        // console.log(this.item);
    }
    getShortDescription(descripton) {
        if (descripton.length < 100) {
            return descripton;
        }
        else {
            return descripton.slice(0, 100) + '...';
        }
    }
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
};
NoticeCardComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NoticeCardComponent.prototype, "item", void 0);
NoticeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notice-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/notice-card/notice-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notice-card.component.scss */ "./src/app/shared-components/notice-card/notice-card.component.scss")).default]
    })
], NoticeCardComponent);



/***/ }),

/***/ "./src/app/shared-components/show-notice/show-notice.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/show-notice/show-notice.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  text-align: center;\n}\nmain p.date {\n  text-align: left;\n  padding: 20px;\n}\n@media (max-width: 600px) {\n  main p.date {\n    padding: 10px;\n  }\n}\nmain .text {\n  text-align: left;\n}\n@media (max-width: 800px) {\n  main .text {\n    padding: 20px;\n  }\n}\n@media (max-width: 600px) {\n  main .text {\n    padding: 10px;\n  }\n}\nmain .text .important {\n  font-weight: bolder;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  color: #5e807f;\n  padding-right: 10px;\n}\nmain .text .space {\n  padding-bottom: 10px;\n}\nmain .text h2.price {\n  margin: 30px 0 50px 0;\n}\n@media (max-width: 600px) {\n  main .text h2.price {\n    margin: 0 0 15px 0;\n  }\n}\nmain .text h2.contact {\n  font-size: 23px;\n  margin: 40px 0 40px;\n}\n@media (max-width: 600px) {\n  main .text h2.contact {\n    margin: 20px 0 20px;\n    font-size: 15px;\n  }\n}\nmain .text h2 .location {\n  color: #5e807f;\n}\nmain .imgs {\n  padding: 40px 0 40px 0;\n  display: grid;\n  grid-template-columns: 80% 20%;\n  margin-top: 40px;\n}\nmain .imgs .allImgs .displayed {\n  min-height: 60px;\n  min-width: 60px;\n  position: relative;\n}\nmain .imgs .allImgs .displayed img {\n  max-height: 100%;\n  height: auto;\n  max-width: 100%;\n  width: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\nmain .imgs .allImgs .smallImg {\n  height: 50px;\n  width: 50px;\n  margin-bottom: 10px;\n  border: 1px solid #dee5e5;\n  position: relative;\n}\nmain .imgs .allImgs .smallImg:hover {\n  cursor: pointer;\n  height: 60px;\n  width: 60px;\n}\nmain .imgs .allImgs .smallImg img {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n@media (max-width: 750px) {\n  main .imgs .allImgs {\n    display: none;\n  }\n}\n@media (max-width: 750px) {\n  main .imgs {\n    grid-template-columns: 100%;\n    width: 100%;\n    margin-top: 0;\n    padding: 20px 0 20px 0;\n  }\n}\nmain .imgs .displayedImg {\n  position: relative;\n  height: 400px;\n  width: 400px;\n  border: 1px solid #dee5e5;\n  margin-right: auto;\n  margin-left: auto;\n  position: relative;\n}\nmain .imgs .displayedImg img {\n  max-height: 400px;\n  max-width: 400px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n@media (max-width: 500px) {\n  main .imgs .displayedImg {\n    width: 90vw;\n    height: 90vw;\n    position: relative;\n  }\n  main .imgs .displayedImg img {\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n  }\n}\nmain .imgs .displayedImg .arrow {\n  position: absolute;\n  top: 0px;\n  z-index: 1;\n  height: 100%;\n  width: 20%;\n  text-align: center;\n}\nmain .imgs .displayedImg .arrow.arrow_back {\n  left: 0px;\n  float: left;\n}\nmain .imgs .displayedImg .arrow.arrow_forward {\n  right: 0px;\n  float: right;\n}\nmain .imgs .displayedImg .arrow:hover {\n  background-color: rgba(0, 0, 0, 0.171);\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  cursor: pointer;\n}\nmain .imgs .displayedImg .arrow mat-icon {\n  margin-top: 190px;\n  font-size: 40px;\n}\n@media (max-width: 500px) {\n  main .imgs .displayedImg .arrow mat-icon {\n    margin-top: 40vw;\n  }\n}\nmain .not-visible {\n  display: none;\n}\nmain .categories {\n  font-size: 12px;\n  color: #5e807f;\n  text-align: center;\n  margin: 0 auto;\n}\nmain .categories div {\n  padding-top: 10px;\n}\n.displayed {\n  height: 60px;\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2hvdy1ub3RpY2UvQzpcXFVzZXJzXFxFd2FcXERlc2t0b3BcXEdJVCBwcm9qZWt0eVxcTm90aWNlQm9hcmRBUFB0ZXN0XFxUYWJsaWNhT2dsb3N6ZW4vc3JjXFxhcHBcXHNoYXJlZC1jb21wb25lbnRzXFxzaG93LW5vdGljZVxcc2hvdy1ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3Nob3ctbm90aWNlL3Nob3ctbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zaG93LW5vdGljZS9DOlxcVXNlcnNcXEV3YVxcRGVza3RvcFxcR0lUIHByb2pla3R5XFxOb3RpY2VCb2FyZEFQUHRlc3RcXFRhYmxpY2FPZ2xvc3plbi9zcmNcXGFwcFxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FDQUo7QURFUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtBQ0FaO0FEQ1k7RUFISjtJQUlRLGFBQUE7RUNFZDtBQUNGO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FEQVM7RUFGTDtJQUdRLGFBQUE7RUNHVjtBQUNGO0FERFE7RUFOSjtJQU9RLGFBQUE7RUNJVjtBQUNGO0FESFE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjRUZEO0VGR0MsbUJBQUE7QUNLWjtBREhRO0VBQ0ksb0JBQUE7QUNLWjtBREZZO0VBQ0kscUJBQUE7QUNJaEI7QURIZ0I7RUFGSjtJQUdRLGtCQUFBO0VDTWxCO0FBQ0Y7QURKWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ01oQjtBRExnQjtFQUhKO0lBSVEsbUJBQUE7SUFDQSxlQUFBO0VDUWxCO0FBQ0Y7QUROWTtFQUNJLGNFeEJMO0FEZ0NYO0FESkk7RUFFSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDS1I7QURIWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS2hCO0FESmdCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDTXBCO0FESFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0toQjtBREpnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ01wQjtBREpnQjtFQUNJLGdCQUFBO0VBRUEsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNJcEI7QUREWTtFQTFDSjtJQTJDUSxhQUFBO0VDSWQ7QUFDRjtBREZRO0VBcERKO0lBcURRLDJCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQ0tWO0FBQ0Y7QURKUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFHQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0laO0FESFk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0doQjtBRERZO0VBdEJKO0lBdUJRLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNJZDtFREhjO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFQ0tsQjtBQUNGO0FESFk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0toQjtBREpnQjtFQUNJLFNBQUE7RUFDQSxXQUFBO0FDTXBCO0FESmdCO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNNcEI7QURKZ0I7RUFDSSxzQ0FBQTtFQUNBLCtCQUFBO0VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDTXBCO0FESmdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDTXBCO0FETG9CO0VBSEo7SUFJUSxnQkFBQTtFQ1F0QjtBQUNGO0FESEk7RUFDSSxhQUFBO0FDS1I7QURGSTtFQUNRLGVBQUE7RUFDQSxjRS9KRDtFRmdLQyxrQkFBQTtFQUNBLGNBQUE7QUNJWjtBREhZO0VBQ0ksaUJBQUE7QUNLaEI7QUREQTtFQUNRLFlBQUE7RUFDQSxXQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zaG93LW5vdGljZS9zaG93LW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzcyc7XHJcbm1haW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwe1xyXG4gICAgICAgICYuZGF0ZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltcG9ydGFudHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcmtfc2t5O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhY2V7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgJi5wcmljZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAwIDUwcHggMDtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGRhcmtfc2t5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZ3N7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRfc2t5O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAyMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAuYWxsSW1nc3tcclxuICAgICAgICAgICAgLmRpc3BsYXllZHtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNtYWxsSW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X3NreTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAvL2hlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy93aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweCAwIDIwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpc3BsYXllZEltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIC8vIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9za3k7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDMwdnc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICAgICAgICAgIHRvcDogMDsgIFxyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwOyAgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwOyAgXHJcbiAgICAgICAgICAgICAgICByaWdodDogMDsgIFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Ojkwdnc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7ICBcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXJyb3d7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgJi5hcnJvd19iYWNre1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuYXJyb3dfZm9yd2FyZHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTkwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwdnc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5vdC12aXNpYmxle1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhdGVnb3JpZXN7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrX3NreTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgZGl2e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbn1cclxuLmRpc3BsYXllZHtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICB9IiwibWFpbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbm1haW4gcC5kYXRlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIHAuZGF0ZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxubWFpbiAudGV4dCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgbWFpbiAudGV4dCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIG1haW4gLnRleHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbm1haW4gLnRleHQgLmltcG9ydGFudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgY29sb3I6ICM1ZTgwN2Y7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5tYWluIC50ZXh0IC5zcGFjZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxubWFpbiAudGV4dCBoMi5wcmljZSB7XG4gIG1hcmdpbjogMzBweCAwIDUwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIC50ZXh0IGgyLnByaWNlIHtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIH1cbn1cbm1haW4gLnRleHQgaDIuY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbWFyZ2luOiA0MHB4IDAgNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIC50ZXh0IGgyLmNvbnRhY3Qge1xuICAgIG1hcmdpbjogMjBweCAwIDIwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5tYWluIC50ZXh0IGgyIC5sb2NhdGlvbiB7XG4gIGNvbG9yOiAjNWU4MDdmO1xufVxubWFpbiAuaW1ncyB7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDIwJTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbm1haW4gLmltZ3MgLmFsbEltZ3MgLmRpc3BsYXllZCB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAuaW1ncyAuYWxsSW1ncyAuZGlzcGxheWVkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbm1haW4gLmltZ3MgLmFsbEltZ3MgLnNtYWxsSW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTVlNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiAuaW1ncyAuYWxsSW1ncyAuc21hbGxJbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5tYWluIC5pbWdzIC5hbGxJbWdzIC5zbWFsbEltZyBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgbWFpbiAuaW1ncyAuYWxsSW1ncyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIG1haW4gLmltZ3Mge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gIH1cbn1cbm1haW4gLmltZ3MgLmRpc3BsYXllZEltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlNWU1O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5tYWluIC5pbWdzIC5kaXNwbGF5ZWRJbWcgaW1nIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgbWFpbiAuaW1ncyAuZGlzcGxheWVkSW1nIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBoZWlnaHQ6IDkwdnc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIG1haW4gLmltZ3MgLmRpc3BsYXllZEltZyBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5tYWluIC5pbWdzIC5kaXNwbGF5ZWRJbWcgLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5tYWluIC5pbWdzIC5kaXNwbGF5ZWRJbWcgLmFycm93LmFycm93X2JhY2sge1xuICBsZWZ0OiAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxubWFpbiAuaW1ncyAuZGlzcGxheWVkSW1nIC5hcnJvdy5hcnJvd19mb3J3YXJkIHtcbiAgcmlnaHQ6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxubWFpbiAuaW1ncyAuZGlzcGxheWVkSW1nIC5hcnJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNzEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxubWFpbiAuaW1ncyAuZGlzcGxheWVkSW1nIC5hcnJvdyBtYXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDE5MHB4O1xuICBmb250LXNpemU6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgbWFpbiAuaW1ncyAuZGlzcGxheWVkSW1nIC5hcnJvdyBtYXQtaWNvbiB7XG4gICAgbWFyZ2luLXRvcDogNDB2dztcbiAgfVxufVxubWFpbiAubm90LXZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxubWFpbiAuY2F0ZWdvcmllcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1ZTgwN2Y7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5tYWluIC5jYXRlZ29yaWVzIGRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZGlzcGxheWVkIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbn0iLCIkcm9zZTogI2U3NzE3ZDtcclxuJGdyZWVuOiAjYWZkMjc1O1xyXG4kYmVpZ2U6ICNjMmI5YjA7XHJcbiRicm93bjogIzdlNjg1YTtcclxuJGdyZXk6ICNjMmNhZDA7XHJcbiRsaWdodF9ncmV5OiAjZWVlZWVlO1xyXG5cclxuXHJcbiRjb3JhbDojZTk4MDc0O1xyXG4kZGFya19jb3JhbDogI2U4NWE0ZjtcclxuJGRhcmtfZ3JleTogIzhlOGQ4YTtcclxuJHdhcm1fYmVpZ2U6ICNkOGMzYTU7XHJcblxyXG5cclxuJG5pZ2h0X2JsdWU6ICM0NDMxOGQ7XHJcblxyXG4kYm9yZG86ICM1OTI1M2E7XHJcbiRyb3NlX2JvcmRvOiAjNzgyNDRjO1xyXG4kcm9zZV9iZWlnZTogIzg5NTA2MTtcclxuXHJcbiRzZWE6ICMxN2I4OTA7XHJcbiRza3k6ICM5ZGM1YmI7XHJcbiRsaWdodC1za3k6ICNkZWU1ZTU7XHJcbiRkYXJrX3NreTogIzVlODA3ZjsgXHJcbiRkYXJrX2dyZWVuOiAjNGI3ZjUyO1xyXG4kbGVtb246ICNkMWU5YWQ7XHJcbiRyZWQ6ICNlOTRmMzc7XHJcbiRkYXJrX2dyZXlfYmx1ZTogIzM5NWU2NjtcclxuJGRhcmtfYmx1ZTogIzI0MjAzODtcclxuJHJlZF9waW5rOiAjYTcxZDMxO1xyXG5cclxuXHJcblxyXG4kc2hhZG93OiAwcHggOHB4IDExcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzAxKTtcclxuJG91dGxpbmUtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM0Mik7Il19 */");

/***/ }),

/***/ "./src/app/shared-components/show-notice/show-notice.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-components/show-notice/show-notice.component.ts ***!
  \************************************************************************/
/*! exports provided: ShowNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowNoticeComponent", function() { return ShowNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");






let ShowNoticeComponent = class ShowNoticeComponent {
    constructor(route, http, _DomSanitizer, appService) {
        this.route = route;
        this.http = http;
        this._DomSanitizer = _DomSanitizer;
        this.appService = appService;
        this.isLastImg = false;
        this.isFirstImg = false;
        this.subscription = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.noticeSubsription = this.http.getOneNotice(this.id).subscribe(el => {
            this.notice = el;
            //console.log(this.notice);
            if (this.notice.imgs.length > 0) {
                this.displayedImg = {
                    path: this.notice.imgs[0],
                    index: 0
                };
                this.isFirstImg = true;
                if (this.notice.imgs.length === 1) {
                    this.isLastImg = true;
                }
                // console.log(this.displayedImg.index)
            }
        });
    }
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
    ngOnInit() {
    }
    changeDisplayedImg(path, i) {
        if (this.notice.imgs.length > 1) {
            this.displayedImg = {
                path: path,
                index: i
            };
            // console.log(this.displayedImg.index);
            const displayedImgId = this.displayedImg.index;
            if (displayedImgId === 0) {
                this.isFirstImg = true;
                this.isLastImg = false;
                // console.log(this.isFirstImg);
            }
            if (this.notice.imgs.length === displayedImgId + 1) {
                this.isLastImg = true;
                this.isFirstImg = false;
                // console.log(this.isLastImg);
            }
            if (displayedImgId !== 0 && this.notice.imgs.length !== displayedImgId + 1) {
                this.isFirstImg = false;
                this.isLastImg = false;
            }
        }
    }
    nextImg() {
        const lastImgId = this.notice.imgs.length - 1;
        const displayedImgId = this.displayedImg.index;
        if (this.notice.imgs[lastImgId] !== this.displayedImg.path) {
            this.displayedImg = {
                index: displayedImgId + 1,
                path: this.notice.imgs[displayedImgId + 1]
            };
            this.isFirstImg = false;
            // console.log(this.displayedImg.index)
            if (this.notice.imgs.length === displayedImgId + 2) {
                this.isLastImg = true;
            }
        }
    }
    prevImg() {
        const displayedImgId = this.displayedImg.index;
        if (displayedImgId !== 0) {
            this.displayedImg = {
                index: displayedImgId - 1,
                path: this.notice.imgs[displayedImgId - 1]
            };
            this.isLastImg = false;
            if (displayedImgId - 1 === 0) {
                this.isFirstImg = true;
            }
        }
    }
    getOldNotice(notice) {
        return this.appService.getOldNotice(notice);
    }
};
ShowNoticeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
ShowNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-notice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./show-notice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared-components/show-notice/show-notice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./show-notice.component.scss */ "./src/app/shared-components/show-notice/show-notice.component.scss")).default]
    })
], ShowNoticeComponent);



/***/ }),

/***/ "./src/app/shared/pipes/filter-by-price.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/filter-by-price.pipe.ts ***!
  \******************************************************/
/*! exports provided: FilterByPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPricePipe", function() { return FilterByPricePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterByPricePipe = class FilterByPricePipe {
    transform(value, price, moreOrLess) {
        if (moreOrLess === 'more') {
            return value.filter(el => {
                if (!price && price !== 0) {
                    return value;
                }
                else {
                    return el['price'] >= price;
                }
            });
        }
        else if (moreOrLess === 'less') {
            return value.filter(el => {
                if (!price && price !== 0) {
                    return value;
                }
                else {
                    return el['price'] <= price;
                }
            });
        }
    }
};
FilterByPricePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterByPrice'
    })
], FilterByPricePipe);



/***/ }),

/***/ "./src/app/shared/pipes/filter-by-type.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/filter-by-type.pipe.ts ***!
  \*****************************************************/
/*! exports provided: FilterByTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByTypePipe", function() { return FilterByTypePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterByTypePipe = class FilterByTypePipe {
    transform(value, propertyName, propertyValue) {
        if (!propertyName || !propertyValue) {
            return value;
        }
        else {
            value = value.filter(el => {
                if (el[propertyName]) {
                    return el[propertyName] === propertyValue;
                }
                else {
                    return false;
                }
            });
            console.log(value);
            return value;
        }
        ;
    }
};
FilterByTypePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterByType'
    })
], FilterByTypePipe);



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, propertyName, propertyValue) {
        if (!propertyName || !propertyValue) {
            return value;
        }
        else {
            value = value.filter(el => {
                const category = el[propertyName];
                if (category) {
                    //console.log(category._id === propertyValue._id);
                    return category._id === propertyValue._id;
                }
                else {
                    return false;
                }
            });
            //console.log(value);
            return value;
        }
        ;
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/shared/pipes/search-by-location.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/search-by-location.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SearchByLocationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByLocationPipe", function() { return SearchByLocationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchByLocationPipe = class SearchByLocationPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.location.toLowerCase().includes(searchText);
        });
    }
};
SearchByLocationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'searchByLocation'
    })
], SearchByLocationPipe);



/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.title.toLowerCase().includes(searchText);
        });
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/user-panel/actualise-confirm/actualise-confirm.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/user-panel/actualise-confirm/actualise-confirm.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvYWN0dWFsaXNlLWNvbmZpcm0vYWN0dWFsaXNlLWNvbmZpcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user-panel/actualise-confirm/actualise-confirm.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/user-panel/actualise-confirm/actualise-confirm.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ActualiseConfirmComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualiseConfirmComponent", function() { return ActualiseConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ActualiseConfirmComponent = class ActualiseConfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
};
ActualiseConfirmComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: ConfirmDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ActualiseConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actualise-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actualise-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/actualise-confirm/actualise-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actualise-confirm.component.scss */ "./src/app/user-panel/actualise-confirm/actualise-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ActualiseConfirmComponent);

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}


/***/ }),

/***/ "./src/app/user-panel/add-notice/add-notice.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-panel/add-notice/add-notice.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property {\n  padding: 20px;\n}\n\n.my-input {\n  width: 100%;\n  font-size: 13px;\n}\n\n.my-textarea {\n  height: 300px;\n}\n\nh1 {\n  padding: 20px;\n  padding-bottom: 40px;\n}\n\n@media (max-width: 440px) {\n  h1 {\n    font-size: 25px;\n  }\n}\n\n.add {\n  text-align: center;\n  margin-top: 40px;\n}\n\np {\n  padding: 20px;\n  color: #5e807f;\n}\n\n@media (max-width: 440px) {\n  p {\n    font-size: 13px;\n  }\n}\n\nul {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  padding: 20px;\n}\n\nul li {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n}\n\nul li img {\n  max-width: 200px;\n  height: auto;\n  max-height: 200px;\n  width: auto;\n}\n\nul li .photo-container {\n  margin-top: 10px;\n  height: 200px;\n  text-align: center;\n  border: 1px solid #dee5e5;\n  position: relative;\n}\n\nul li .photo-container img {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\nul li .photo-container .remove-icon {\n  position: absolute;\n  z-index: 3;\n  top: 2px;\n  right: 2px;\n}\n\nul li .photo-container .remove-icon:hover {\n  color: #d1e9ad;\n  cursor: pointer;\n}\n\nul li:first-child .photo-container {\n  border: 7px solid #dee5e5;\n}\n\n@media (max-width: 310px) {\n  button.green-button {\n    width: 80vw;\n    margin: 5vw;\n    height: 50px;\n    font-size: 10px;\n    letter-spacing: 0;\n    padding: 0;\n  }\n}\n\n.categories-to-check {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.categories-to-check .category-check {\n  display: block;\n  width: 150px;\n  padding: 20px;\n  font-size: 15px;\n}\n\n@media (max-width: 700px) {\n  .categories-to-check .category-check {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 440px) {\n  .categories-to-check .category-check {\n    font-size: 10px;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9hZGQtbm90aWNlL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFx1c2VyLXBhbmVsXFxhZGQtbm90aWNlXFxhZGQtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL2FkZC1ub3RpY2UvYWRkLW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wYW5lbC9hZGQtbm90aWNlL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREZJO0VBSEo7SUFJUSxlQUFBO0VDS047QUFDRjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxjRURPO0FEUVg7O0FETkk7RUFISjtJQUlRLGVBQUE7RUNTTjtBQUNGOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1VKOztBRFRJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDV1I7O0FEVlE7RUFBSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNhWjs7QURWUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1laOztBRFhVO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ2FkOztBRFhVO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNhZDs7QURaYztFQUNJLGNFMUNWO0VGMkNVLGVBQUE7QUNjbEI7O0FEVFk7RUFDQSx5QkFBQTtBQ1daOztBREpZO0VBREo7SUFFUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VDUWQ7QUFDRjs7QURKSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNPUjs7QUROUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNRWjs7QURQWTtFQUxKO0lBTVEsZUFBQTtFQ1VkO0FBQ0Y7O0FEVFk7RUFSSjtJQVNRLGVBQUE7SUFDQSxhQUFBO0VDWWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvYWRkLW5vdGljZS9hZGQtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi8uLi8uLi9hcHAvc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuLnByb3BlcnR5e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ubXktaW5wdXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubXktdGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgfVxyXG59XHJcbi5hZGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbnB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgY29sb3I6ICRkYXJrLXNreTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxufVxyXG51bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGxpe1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaW1ne21heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBob3RvLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfc2t5O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgICAgICAgICAgICAgdG9wOiAwOyAgXHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwOyAgXHJcbiAgICAgICAgICAgICAgbGVmdDogMDsgIFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwOyAgXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlbW92ZS1pY29ue1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRsZW1vbjtcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgLnBob3RvLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgYm9yZGVyOiA3cHggc29saWQgJGxpZ2h0LXNreTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59YnV0dG9ue1xyXG4gICAgICAgICYuZ3JlZW4tYnV0dG9ue1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMzEwcHgpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1dnc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhdGVnb3JpZXMtdG8tY2hlY2t7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLmNhdGVnb3J5LWNoZWNre1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4iLCIucHJvcGVydHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubXktaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubXktdGV4dGFyZWEge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5oMSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cblxuLmFkZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNWU4MDdmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxudWwgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG51bCBsaSBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbnVsIGxpIC5waG90by1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWU1ZTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsIGxpIC5waG90by1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxudWwgbGkgLnBob3RvLWNvbnRhaW5lciAucmVtb3ZlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xufVxudWwgbGkgLnBob3RvLWNvbnRhaW5lciAucmVtb3ZlLWljb246aG92ZXIge1xuICBjb2xvcjogI2QxZTlhZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudWwgbGk6Zmlyc3QtY2hpbGQgLnBob3RvLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNkZWU1ZTU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMTBweCkge1xuICBidXR0b24uZ3JlZW4tYnV0dG9uIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW46IDV2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmNhdGVnb3JpZXMtdG8tY2hlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2F0ZWdvcmllcy10by1jaGVjayAuY2F0ZWdvcnktY2hlY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNhdGVnb3JpZXMtdG8tY2hlY2sgLmNhdGVnb3J5LWNoZWNrIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xuICAuY2F0ZWdvcmllcy10by1jaGVjayAuY2F0ZWdvcnktY2hlY2sge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59IiwiJHJvc2U6ICNlNzcxN2Q7XHJcbiRncmVlbjogI2FmZDI3NTtcclxuJGJlaWdlOiAjYzJiOWIwO1xyXG4kYnJvd246ICM3ZTY4NWE7XHJcbiRncmV5OiAjYzJjYWQwO1xyXG4kbGlnaHRfZ3JleTogI2VlZWVlZTtcclxuXHJcblxyXG4kY29yYWw6I2U5ODA3NDtcclxuJGRhcmtfY29yYWw6ICNlODVhNGY7XHJcbiRkYXJrX2dyZXk6ICM4ZThkOGE7XHJcbiR3YXJtX2JlaWdlOiAjZDhjM2E1O1xyXG5cclxuXHJcbiRuaWdodF9ibHVlOiAjNDQzMThkO1xyXG5cclxuJGJvcmRvOiAjNTkyNTNhO1xyXG4kcm9zZV9ib3JkbzogIzc4MjQ0YztcclxuJHJvc2VfYmVpZ2U6ICM4OTUwNjE7XHJcblxyXG4kc2VhOiAjMTdiODkwO1xyXG4kc2t5OiAjOWRjNWJiO1xyXG4kbGlnaHQtc2t5OiAjZGVlNWU1O1xyXG4kZGFya19za3k6ICM1ZTgwN2Y7IFxyXG4kZGFya19ncmVlbjogIzRiN2Y1MjtcclxuJGxlbW9uOiAjZDFlOWFkO1xyXG4kcmVkOiAjZTk0ZjM3O1xyXG4kZGFya19ncmV5X2JsdWU6ICMzOTVlNjY7XHJcbiRkYXJrX2JsdWU6ICMyNDIwMzg7XHJcbiRyZWRfcGluazogI2E3MWQzMTtcclxuXHJcblxyXG5cclxuJHNoYWRvdzogMHB4IDhweCAxMXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjMwMSk7XHJcbiRvdXRsaW5lLXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpOyJdfQ== */");

/***/ }),

/***/ "./src/app/user-panel/add-notice/add-notice.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-panel/add-notice/add-notice.component.ts ***!
  \***************************************************************/
/*! exports provided: AddNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNoticeComponent", function() { return AddNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");






let AddNoticeComponent = class AddNoticeComponent {
    constructor(httpService, appService, _snackbar) {
        this.httpService = httpService;
        this.appService = appService;
        this._snackbar = _snackbar;
        this.imgURL = [];
        this.files = [];
        //categories
        this.categories = [];
        //spinners
        this.addSpinnerActive = false;
        this.toBigImgSizeAlert = '';
        // title: string;
        // description: string;
        // price: string;
        this.addNoticeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(25)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(500)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            imgs: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1),
        });
        this.message = 'Ok';
        this.action = '';
        this.httpService.getCategories().subscribe(res => {
            this.categories = res;
            // console.log(this.categories);
        });
    }
    addNewNotice(event) {
        if (this.addNoticeForm.valid) {
            this.addSpinnerActive = true;
            const formData = new FormData();
            const title = this.addNoticeForm.get('title').value;
            const description = this.addNoticeForm.get('description').value;
            const price = this.addNoticeForm.get('price').value;
            const imgs = this.addNoticeForm.get('imgs').value;
            const location = this.addNoticeForm.get('location').value;
            let type = this.addNoticeForm.get('type').value;
            type = parseInt(type, 10);
            const categories = this.addNoticeForm.get('categories').value;
            // console.log(type)
            if (imgs.length > 0) {
                imgs.forEach(element => {
                    //console.log('tu ok')
                    formData.append('imgs', element, element.name);
                });
            }
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('location', location);
            formData.append('type', type);
            formData.append('categories', categories._id);
            //new Response(formData).text().then(console.log)
            //console.log(this.addNoticeForm);
            //console.log(imgs);
            // console.log(formData);
            // console.log(categories);
            this.httpService.addNotice(formData).subscribe(res => {
                //console.log(res);
                this.message = 'Twoje ogłoszenie zostało dodane!';
                //this.addNoticeForm.reset();
                //this.openSnackBar();
            }, err => {
                this.message = 'Coś poszło nie tak';
                this.openSnackBar();
            }, () => {
                this.addSpinnerActive = false;
                this.openSnackBar();
                //this.addNoticeForm.reset();
                this.imgURL = [];
            });
            event.currentTarget.reset();
        }
    }
    onFilesSelected(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const properSize = 4500000;
            const toBigPhotoId = [];
            //const properSizeFiles = event.target.files.filter(el => el.size < properSize);
            //console.log(event.target.files[0]);
            if (event.target.files.length + this.files.length < 7) {
                for (let index = 0; index < event.target.files.length; index++) {
                    // console.log(event)
                    this.files.push(event.target.files[index]);
                    let count = this.files.length - 1;
                    if (event.target.files[index].size > properSize) {
                        this.toBigImgSizeAlert = 'Uwaga! Zdjęcie ' + event.target.files[index].name + ' ma zbyt duży rozmiar :(';
                        setTimeout(function () {
                            this.toBigImgSizeAlert = '';
                        }.bind(this), 10000);
                        toBigPhotoId.push(count);
                        //console.log(count);
                    }
                    try {
                        const fileContents = yield this.readFile(this.files[count]);
                        // console.log(fileContents);
                        this.imgURL.push(fileContents);
                    }
                    catch (e) {
                        console.warn(e.message);
                    }
                }
            }
            // console.log('Zdjęcia wyświetlane po kolei: ' + this.imgURL);
            // console.log(this.files);
            //console.log(toBigPhotoId);
            toBigPhotoId.forEach(el => {
                this.removePhoto(el);
            });
            toBigPhotoId.slice(0, toBigPhotoId.length);
            //console.log(toBigPhotoId)
            this.files = this.files.filter(el => el.size < properSize);
            //console.log(this.files);
            this.addNoticeForm.patchValue({ imgs: this.files });
            //console.log(this.addNoticeForm.get('imgs'));
        });
    }
    readFile(event) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Problem parsing input file."));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(event);
        });
    }
    removePhoto(i) {
        this.addNoticeForm.get('imgs').value.splice(i, 1);
        //console.log(this.addNoticeForm.get('imgs'));
        this.imgURL.splice(i, 1);
    }
    //categories
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
    ngOnInit() {
    }
    openSnackBar() {
        this._snackbar.open(this.message, this.action, {
            duration: 5000,
        });
    }
};
AddNoticeComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: true })
], AddNoticeComponent.prototype, "myNgForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("fileUpload", { static: false })
], AddNoticeComponent.prototype, "fileUpload", void 0);
AddNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-notice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-notice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/add-notice/add-notice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-notice.component.scss */ "./src/app/user-panel/add-notice/add-notice.component.scss")).default]
    })
], AddNoticeComponent);



/***/ }),

/***/ "./src/app/user-panel/delete-confirm/delete-confirm.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user-panel/delete-confirm/delete-confirm.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm {\n  background-color: #d1e9ad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9kZWxldGUtY29uZmlybS9DOlxcVXNlcnNcXEV3YVxcRGVza3RvcFxcR0lUIHByb2pla3R5XFxOb3RpY2VCb2FyZEFQUHRlc3RcXFRhYmxpY2FPZ2xvc3plbi9zcmNcXGFwcFxcdXNlci1wYW5lbFxcZGVsZXRlLWNvbmZpcm1cXGRlbGV0ZS1jb25maXJtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL2RlbGV0ZS1jb25maXJtL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL2RlbGV0ZS1jb25maXJtL2RlbGV0ZS1jb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJDdUJJO0FDdkJSIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wYW5lbC9kZWxldGUtY29uZmlybS9kZWxldGUtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuLmNvbmZpcm17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGVtb247XHJcbn0iLCIkcm9zZTogI2U3NzE3ZDtcclxuJGdyZWVuOiAjYWZkMjc1O1xyXG4kYmVpZ2U6ICNjMmI5YjA7XHJcbiRicm93bjogIzdlNjg1YTtcclxuJGdyZXk6ICNjMmNhZDA7XHJcbiRsaWdodF9ncmV5OiAjZWVlZWVlO1xyXG5cclxuXHJcbiRjb3JhbDojZTk4MDc0O1xyXG4kZGFya19jb3JhbDogI2U4NWE0ZjtcclxuJGRhcmtfZ3JleTogIzhlOGQ4YTtcclxuJHdhcm1fYmVpZ2U6ICNkOGMzYTU7XHJcblxyXG5cclxuJG5pZ2h0X2JsdWU6ICM0NDMxOGQ7XHJcblxyXG4kYm9yZG86ICM1OTI1M2E7XHJcbiRyb3NlX2JvcmRvOiAjNzgyNDRjO1xyXG4kcm9zZV9iZWlnZTogIzg5NTA2MTtcclxuXHJcbiRzZWE6ICMxN2I4OTA7XHJcbiRza3k6ICM5ZGM1YmI7XHJcbiRsaWdodC1za3k6ICNkZWU1ZTU7XHJcbiRkYXJrX3NreTogIzVlODA3ZjsgXHJcbiRkYXJrX2dyZWVuOiAjNGI3ZjUyO1xyXG4kbGVtb246ICNkMWU5YWQ7XHJcbiRyZWQ6ICNlOTRmMzc7XHJcbiRkYXJrX2dyZXlfYmx1ZTogIzM5NWU2NjtcclxuJGRhcmtfYmx1ZTogIzI0MjAzODtcclxuJHJlZF9waW5rOiAjYTcxZDMxO1xyXG5cclxuXHJcblxyXG4kc2hhZG93OiAwcHggOHB4IDExcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzAxKTtcclxuJG91dGxpbmUtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM0Mik7IiwiLmNvbmZpcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlOWFkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/user-panel/delete-confirm/delete-confirm.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user-panel/delete-confirm/delete-confirm.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteConfirmComponent, ConfirmDialogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmComponent", function() { return DeleteConfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogModel", function() { return ConfirmDialogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DeleteConfirmComponent = class DeleteConfirmComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Update view with given values
        this.title = data.title;
        this.message = data.message;
    }
    ngOnInit() {
    }
    onConfirm() {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
};
DeleteConfirmComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: ConfirmDialogModel, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeleteConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-confirm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/delete-confirm/delete-confirm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-confirm.component.scss */ "./src/app/user-panel/delete-confirm/delete-confirm.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DeleteConfirmComponent);

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
class ConfirmDialogModel {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}


/***/ }),

/***/ "./src/app/user-panel/edit-notice/edit-notice.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user-panel/edit-notice/edit-notice.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".property {\n  padding: 20px;\n}\n\n.my-input {\n  width: 100%;\n  font-size: 13px;\n}\n\n.my-textarea {\n  height: 300px;\n}\n\nh1 {\n  padding: 20px;\n  padding-bottom: 40px;\n}\n\n@media (max-width: 440px) {\n  h1 {\n    font-size: 25px;\n  }\n}\n\n.add {\n  text-align: center;\n  margin-top: 40px;\n}\n\np {\n  padding: 20px;\n  color: #5e807f;\n}\n\n@media (max-width: 440px) {\n  p {\n    font-size: 13px;\n  }\n}\n\nul {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0;\n  padding: 20px;\n}\n\nul li {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n}\n\nul li img {\n  max-width: 200px;\n  height: auto;\n  max-height: 200px;\n  width: auto;\n}\n\nul li .photo-container {\n  margin-top: 10px;\n  height: 200px;\n  text-align: center;\n  border: 1px solid #dee5e5;\n  position: relative;\n}\n\nul li .photo-container img {\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\nul li .photo-container .remove-icon {\n  position: absolute;\n  z-index: 3;\n  top: 2px;\n  right: 2px;\n}\n\nul li .photo-container .remove-icon:hover {\n  color: #d1e9ad;\n  cursor: pointer;\n}\n\nul li:first-child .photo-container {\n  border: 7px solid #dee5e5;\n}\n\n@media (max-width: 310px) {\n  button.green-button {\n    width: 80vw;\n    margin: 5vw;\n    height: 50px;\n    font-size: 10px;\n    letter-spacing: 0;\n    padding: 0;\n  }\n}\n\n.categories-to-check {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.categories-to-check .category-check {\n  display: block;\n  width: 150px;\n  padding: 20px;\n  font-size: 15px;\n}\n\n@media (max-width: 700px) {\n  .categories-to-check .category-check {\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 440px) {\n  .categories-to-check .category-check {\n    font-size: 10px;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9lZGl0LW5vdGljZS9DOlxcVXNlcnNcXEV3YVxcRGVza3RvcFxcR0lUIHByb2pla3R5XFxOb3RpY2VCb2FyZEFQUHRlc3RcXFRhYmxpY2FPZ2xvc3plbi9zcmNcXGFwcFxcdXNlci1wYW5lbFxcZWRpdC1ub3RpY2VcXGVkaXQtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL2VkaXQtbm90aWNlL2VkaXQtbm90aWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL2VkaXQtbm90aWNlL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREZJO0VBSEo7SUFJUSxlQUFBO0VDS047QUFDRjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxjRURPO0FEUVg7O0FETkk7RUFISjtJQUlRLGVBQUE7RUNTTjtBQUNGOztBRFBBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1VKOztBRFRJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDV1I7O0FEVlE7RUFBSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNhWjs7QURWUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1laOztBRFhVO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ2FkOztBRFhVO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNhZDs7QURaYztFQUNJLGNFMUNWO0VGMkNVLGVBQUE7QUNjbEI7O0FEVFk7RUFDQSx5QkFBQTtBQ1daOztBREpZO0VBREo7SUFFUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VDUWQ7QUFDRjs7QURKSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNPUjs7QUROUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNRWjs7QURQWTtFQUxKO0lBTVEsZUFBQTtFQ1VkO0FBQ0Y7O0FEVFk7RUFSSjtJQVNRLGVBQUE7SUFDQSxhQUFBO0VDWWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvZWRpdC1ub3RpY2UvZWRpdC1ub3RpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uLy4uLy4uL2FwcC9zaGFyZWQvdmFyaWFibGVzLnNjc3MnO1xyXG4ucHJvcGVydHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5teS1pbnB1dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi5teS10ZXh0YXJlYXtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuLmFkZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxucHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBjb2xvcjogJGRhcmstc2t5O1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcbnVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbGl7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBpbWd7bWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvdG8tY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9za3k7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICBcclxuICAgICAgICAgICAgICB0b3A6IDA7ICBcclxuICAgICAgICAgICAgICBib3R0b206IDA7ICBcclxuICAgICAgICAgICAgICBsZWZ0OiAwOyAgXHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7ICBcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVtb3ZlLWljb257XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGxlbW9uO1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAucGhvdG8tY29udGFpbmVye1xyXG4gICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCAkbGlnaHQtc2t5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1idXR0b257XHJcbiAgICAgICAgJi5ncmVlbi1idXR0b257XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMTBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDV2dztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcmllcy10by1jaGVja3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAuY2F0ZWdvcnktY2hlY2t7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iLCIucHJvcGVydHkge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubXktaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubXktdGV4dGFyZWEge1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG5oMSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbn1cblxuLmFkZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNWU4MDdmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxudWwgbGkge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG51bCBsaSBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cbnVsIGxpIC5waG90by1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWU1ZTU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnVsIGxpIC5waG90by1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxudWwgbGkgLnBob3RvLWNvbnRhaW5lciAucmVtb3ZlLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xufVxudWwgbGkgLnBob3RvLWNvbnRhaW5lciAucmVtb3ZlLWljb246aG92ZXIge1xuICBjb2xvcjogI2QxZTlhZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudWwgbGk6Zmlyc3QtY2hpbGQgLnBob3RvLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNkZWU1ZTU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzMTBweCkge1xuICBidXR0b24uZ3JlZW4tYnV0dG9uIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW46IDV2dztcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLmNhdGVnb3JpZXMtdG8tY2hlY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY2F0ZWdvcmllcy10by1jaGVjayAuY2F0ZWdvcnktY2hlY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLmNhdGVnb3JpZXMtdG8tY2hlY2sgLmNhdGVnb3J5LWNoZWNrIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkge1xuICAuY2F0ZWdvcmllcy10by1jaGVjayAuY2F0ZWdvcnktY2hlY2sge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG59IiwiJHJvc2U6ICNlNzcxN2Q7XHJcbiRncmVlbjogI2FmZDI3NTtcclxuJGJlaWdlOiAjYzJiOWIwO1xyXG4kYnJvd246ICM3ZTY4NWE7XHJcbiRncmV5OiAjYzJjYWQwO1xyXG4kbGlnaHRfZ3JleTogI2VlZWVlZTtcclxuXHJcblxyXG4kY29yYWw6I2U5ODA3NDtcclxuJGRhcmtfY29yYWw6ICNlODVhNGY7XHJcbiRkYXJrX2dyZXk6ICM4ZThkOGE7XHJcbiR3YXJtX2JlaWdlOiAjZDhjM2E1O1xyXG5cclxuXHJcbiRuaWdodF9ibHVlOiAjNDQzMThkO1xyXG5cclxuJGJvcmRvOiAjNTkyNTNhO1xyXG4kcm9zZV9ib3JkbzogIzc4MjQ0YztcclxuJHJvc2VfYmVpZ2U6ICM4OTUwNjE7XHJcblxyXG4kc2VhOiAjMTdiODkwO1xyXG4kc2t5OiAjOWRjNWJiO1xyXG4kbGlnaHQtc2t5OiAjZGVlNWU1O1xyXG4kZGFya19za3k6ICM1ZTgwN2Y7IFxyXG4kZGFya19ncmVlbjogIzRiN2Y1MjtcclxuJGxlbW9uOiAjZDFlOWFkO1xyXG4kcmVkOiAjZTk0ZjM3O1xyXG4kZGFya19ncmV5X2JsdWU6ICMzOTVlNjY7XHJcbiRkYXJrX2JsdWU6ICMyNDIwMzg7XHJcbiRyZWRfcGluazogI2E3MWQzMTtcclxuXHJcblxyXG5cclxuJHNoYWRvdzogMHB4IDhweCAxMXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjMwMSk7XHJcbiRvdXRsaW5lLXNoYWRvdzogMHB4IDBweCA3cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNDIpOyJdfQ== */");

/***/ }),

/***/ "./src/app/user-panel/edit-notice/edit-notice.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user-panel/edit-notice/edit-notice.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoticeComponent", function() { return EditNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");








let EditNoticeComponent = class EditNoticeComponent {
    constructor(route, _DomSanitizer, http, appService, _snackbar) {
        this.route = route;
        this._DomSanitizer = _DomSanitizer;
        this.http = http;
        this.appService = appService;
        this._snackbar = _snackbar;
        this.addSpinnerActive = false;
        this.toBigImgSizeAlert = '';
        this.addNoticeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(25)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            imgs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([]),
            categories: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            newImgs: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([])
        });
        this.imgURL = [];
        this.files = [];
        //categories
        this.categories = [];
        this.message = 'Ok';
        this.action = '';
        this.subscription = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.noticeSubscription = this.http.getOneNotice(this.id).subscribe(el => {
            this.notice = el;
            // console.log(this.notice);
            this.oldImgsURL = this.notice.imgs;
            this.addNoticeForm.patchValue({
                title: this.notice.title,
                description: this.notice.description,
                price: this.notice.price,
                categories: this.notice.categories,
                location: this.notice.location,
                type: this.notice.type,
                imgs: this.notice.imgs
            });
        });
        // console.log(this.addNoticeForm);
        this.http.getCategories().subscribe(res => {
            this.categories = res;
            // console.log(this.categories);
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.noticeSubscription.unsubscribe();
    }
    // title: string;
    // description: string;
    // price: string;
    addNewNotice(event) {
        // console.log(this.addNoticeForm);
        if (this.addNoticeForm.valid) {
            this.addSpinnerActive = true;
            const formData = new FormData();
            const title = this.addNoticeForm.get('title').value;
            const description = this.addNoticeForm.get('description').value;
            const price = this.addNoticeForm.get('price').value;
            const imgs = this.addNoticeForm.get('imgs').value;
            const newImgs = this.addNoticeForm.get('newImgs').value;
            const location = this.addNoticeForm.get('location').value;
            let type = this.addNoticeForm.get('type').value;
            type = parseInt(type, 10);
            const categories = this.addNoticeForm.get('categories').value;
            // console.log(imgs);
            if (this.imgURL.length > 0 && newImgs.length > 0) {
                newImgs.forEach(element => {
                    formData.append('newImgs', element, element.name);
                });
            }
            if (this.oldImgsURL.length > 0) {
                imgs.forEach(element => {
                    formData.append('imgs', element);
                });
            }
            formData.append('title', title);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('location', location);
            formData.append('type', type);
            formData.append('categories', categories._id);
            // console.log(this.addNoticeForm);
            // console.log(formData);
            // console.log(categories);
            imgs.forEach(element => {
                // console.log('Zdjecie z formGroup' + element.name);
            });
            this.http.updateNotice(this.id, formData).subscribe(res => {
                // console.log(res);
                this.message = 'Twoje ogłoszenie zostało edytowane';
                this.openSnackBar();
            }, err => {
                this.message = 'Coś poszło nie tak';
                this.openSnackBar();
            }, () => {
                this.addSpinnerActive = false;
                this.openSnackBar();
                //this.addNoticeForm.reset();
            });
            //event.currentTarget.reset();
        }
    }
    onFilesSelected(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const properSize = 4500000;
            const toBigPhotoId = [];
            if (event.target.files.length + this.files.length + this.oldImgsURL.length < 7) {
                for (let index = 0; index < event.target.files.length; index++) {
                    // console.log(event);
                    this.files.push(event.target.files[index]);
                    let count = this.files.length - 1;
                    // console.log(count);
                    // console.log(this.files[count]);
                    // console.log(event.target.files[index]);
                    if (event.target.files[index].size > properSize) {
                        this.toBigImgSizeAlert = 'Uwaga! Zdjęcie ' + event.target.files[index].name + ' ma zbyt duży rozmiar :(';
                        setTimeout(function () {
                            this.toBigImgSizeAlert = '';
                        }.bind(this), 10000);
                        toBigPhotoId.push(count);
                        //console.log(count);
                    }
                    try {
                        const fileContents = yield this.readFile(this.files[count]);
                        // console.log(fileContents);
                        this.imgURL.push(fileContents);
                    }
                    catch (e) {
                        console.warn(e.message);
                    }
                }
            }
            //console.log(toBigPhotoId);
            toBigPhotoId.forEach(el => {
                this.removeNewPhoto(el);
            });
            toBigPhotoId.slice(0, toBigPhotoId.length);
            //console.log(toBigPhotoId)
            this.files = this.files.filter(el => el.size < properSize);
            //console.log(this.files);
            this.addNoticeForm.patchValue({ newImgs: this.files });
        });
    }
    readFile(event) {
        var reader = new FileReader();
        return new Promise((resolve, reject) => {
            reader.onerror = () => {
                reader.abort();
                reject(new DOMException("Problem parsing input file."));
            };
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(event);
        });
    }
    removeOldPhoto(index) {
        this.oldImgsURL.splice(index, 1);
        // console.log(this.oldImgsURL)    
        // console.log(this.addNoticeForm.get('imgs'));
    }
    removeNewPhoto(index) {
        console.log(index);
        this.imgURL.splice(index, 1);
        this.addNoticeForm.get('newImgs').value.splice(index, 1);
        // console.log(this.addNoticeForm.get('newImgs'));
        // console.log(this.imgURL);
    }
    //categories
    getCategoryRightName(category) {
        return this.appService.getCategoryRightName(category);
    }
    openSnackBar() {
        this._snackbar.open(this.message, this.action, {
            duration: 5000,
        });
    }
};
EditNoticeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
EditNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-notice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-notice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/edit-notice/edit-notice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-notice.component.scss */ "./src/app/user-panel/edit-notice/edit-notice.component.scss")).default]
    })
], EditNoticeComponent);



/***/ }),

/***/ "./src/app/user-panel/my-account/my-account.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-panel/my-account/my-account.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.one {\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.one h5 {\n  width: 200px;\n}\n\n@media (max-width: 500px) {\n  .one h5 {\n    width: 100px;\n    padding-right: 20px;\n  }\n}\n\n@media (min-width: 1600px) {\n  .one h5 {\n    width: 300px;\n    font-size: 20px;\n  }\n}\n\n.one .value {\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  color: #5e807f;\n  width: 130px;\n}\n\n@media (max-width: 500px) {\n  .one .value {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 1600px) {\n  .one .value {\n    width: 300px;\n    font-size: 20px;\n  }\n}\n\n.button-container {\n  margin: 40px 0 40px;\n  text-align: center;\n}\n\n.button-container .outline-sky-button {\n  margin: 30px;\n}\n\n@media (max-width: 500px) {\n  .button-container .outline-sky-button {\n    width: 90%;\n    margin: 0;\n    padding: 0;\n    letter-spacing: normal;\n    font-weight: normal;\n  }\n}\n\n@media (min-width: 1600px) {\n  .button-container .outline-sky-button {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9teS1hY2NvdW50L0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFx1c2VyLXBhbmVsXFxteS1hY2NvdW50XFxteS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQUk7RUFDSSxZQUFBO0FDRVI7O0FERFE7RUFGSjtJQUdRLFlBQUE7SUFDQSxtQkFBQTtFQ0lWO0FBQ0Y7O0FESFE7RUFOSjtJQU9RLFlBQUE7SUFDQSxlQUFBO0VDTVY7QUFDRjs7QURKSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTVI7O0FETFE7RUFMSjtJQU1RLGVBQUE7RUNRVjtBQUNGOztBRFBRO0VBUko7SUFTUSxZQUFBO0lBQ0EsZUFBQTtFQ1VWO0FBQ0Y7O0FEUEE7RUFDSSxtQkFBQTtFQWNBLGtCQUFBO0FDSEo7O0FEVkc7RUFDSyxZQUFBO0FDWVI7O0FEWFE7RUFGTDtJQUdTLFVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUNjVjtBQUNGOztBRGJRO0VBVEw7SUFVUyxlQUFBO0VDZ0JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyLXBhbmVsL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5vbmV7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGg1e1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC52YWx1ZXtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIGNvbG9yOiAkZGFya19za3k7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idXR0b24tY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiA0MHB4IDAgNDBweDtcclxuICAgLm91dGxpbmUtc2t5LWJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLm9uZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5vbmUgaDUge1xuICB3aWR0aDogMjAwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLm9uZSBoNSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLm9uZSBoNSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLm9uZSAudmFsdWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgY29sb3I6ICM1ZTgwN2Y7XG4gIHdpZHRoOiAxMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAub25lIC52YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5vbmUgLnZhbHVlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4IDAgNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ1dHRvbi1jb250YWluZXIgLm91dGxpbmUtc2t5LWJ1dHRvbiB7XG4gIG1hcmdpbjogMzBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuYnV0dG9uLWNvbnRhaW5lciAub3V0bGluZS1za3ktYnV0dG9uIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAuYnV0dG9uLWNvbnRhaW5lciAub3V0bGluZS1za3ktYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-panel/my-account/my-account.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-panel/my-account/my-account.component.ts ***!
  \***************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");




let MyAccountComponent = class MyAccountComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.http.getMyInfo().subscribe(res => {
            this.user = res;
            // console.log(res);
        });
    }
    ngOnInit() {
    }
    myNoticesNavigate() {
        this.router.navigate(['/../../user-panel/my-notices']);
    }
};
MyAccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-account/my-account.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-account.component.scss */ "./src/app/user-panel/my-account/my-account.component.scss")).default]
    })
], MyAccountComponent);



/***/ }),

/***/ "./src/app/user-panel/my-notices/my-notices.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-panel/my-notices/my-notices.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: center;\n  padding: 40px;\n  margin-bottom: 30px;\n}\n\n.notices {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n}\n\nbutton {\n  padding: 0 30px;\n  margin: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n@media (max-width: 700px) {\n  button {\n    padding: 0 20px;\n    margin: 10px;\n    font-size: 12px;\n  }\n}\n\n@media (max-width: 500px) {\n  button {\n    font-size: 10px;\n  }\n}\n\n.delete {\n  border: 3px solid #a71d31;\n  color: #a71d31;\n  font-weight: 600;\n}\n\n.edit {\n  border: 3px solid #4b7f52;\n  color: #4b7f52;\n  font-weight: 600;\n}\n\n.actualise {\n  border: 3px solid #5e807f;\n  color: #5e807f;\n  font-weight: 600;\n  width: 90%;\n  margin-top: 0;\n}\n\n.one-notice {\n  width: 30%;\n}\n\n@media (min-width: 2200px) {\n  .one-notice {\n    width: 2100px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media (max-width: 1700px) {\n  .one-notice {\n    width: 45%;\n  }\n}\n\n@media (max-width: 840px) {\n  .one-notice {\n    width: 80%;\n  }\n}\n\n@media (max-width: 600px) {\n  .one-notice {\n    width: 90%;\n  }\n}\n\n@media (max-width: 600px) {\n  h1 {\n    padding: 0;\n  }\n}\n\nh4 {\n  padding-bottom: 40px;\n}\n\n@media (max-width: 600px) {\n  h4 {\n    padding: 0;\n  }\n}\n\np {\n  color: #5e807f;\n  text-align: center;\n  letter-spacing: 1.2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wYW5lbC9teS1ub3RpY2VzL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFx1c2VyLXBhbmVsXFxteS1ub3RpY2VzXFxteS1ub3RpY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXBhbmVsL215LW5vdGljZXMvbXktbm90aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci1wYW5lbC9teS1ub3RpY2VzL0M6XFxVc2Vyc1xcRXdhXFxEZXNrdG9wXFxHSVQgcHJvamVrdHlcXE5vdGljZUJvYXJkQVBQdGVzdFxcVGFibGljYU9nbG9zemVuL3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURESTtFQUxKO0lBTVEsZUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VDSU47QUFDRjs7QURISTtFQVZKO0lBV1EsZUFBQTtFQ01OO0FBQ0Y7O0FESkE7RUFDSSx5QkFBQTtFQUNBLGNFR087RUZGUCxnQkFBQTtBQ09KOztBRExBO0VBQ0kseUJBQUE7RUFDQSxjRVBTO0VGUVQsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLHlCQUFBO0VBQ0EsY0ViTztFRmNQLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNTSjs7QURQQTtFQU9JLFVBQUE7QUNJSjs7QURUSTtFQUZKO0lBR1EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNZTjtBQUNGOztBRFZJO0VBUko7SUFTUSxVQUFBO0VDYU47QUFDRjs7QURaSTtFQVhKO0lBWVEsVUFBQTtFQ2VOO0FBQ0Y7O0FEZEk7RUFkSjtJQWVRLFVBQUE7RUNpQk47QUFDRjs7QURkSTtFQURKO0lBRVEsVUFBQTtFQ2tCTjtBQUNGOztBRGhCQTtFQUNJLG9CQUFBO0FDbUJKOztBRGxCSTtFQUZKO0lBR1EsVUFBQTtFQ3FCTjtBQUNGOztBRG5CQTtFQUNJLGNFaERPO0VGaURQLGtCQUFBO0VBQ0EscUJBQUE7QUNzQkoiLCJmaWxlIjoic3JjL2FwcC91c2VyLXBhbmVsL215LW5vdGljZXMvbXktbm90aWNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubm90aWNlc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5idXR0b257XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbi5kZWxldGV7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAkcmVkX3Bpbms7XHJcbiAgICBjb2xvcjogJHJlZF9waW5rO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uZWRpdHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRkYXJrX2dyZWVuO1xyXG4gICAgY29sb3I6ICRkYXJrX2dyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uYWN0dWFsaXNle1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgJGRhcmtfc2t5O1xyXG4gICAgY29sb3I6ICRkYXJrX3NreTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG4ub25lLW5vdGljZXtcclxuICAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDIyMDBweCkge1xyXG4gICAgICAgIHdpZHRoOiAyMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxufVxyXG5oMXtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuaDR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAkZGFya19za3k7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XHJcbn0iLCJoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm5vdGljZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5cbi5kZWxldGUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjYTcxZDMxO1xuICBjb2xvcjogI2E3MWQzMTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmVkaXQge1xuICBib3JkZXI6IDNweCBzb2xpZCAjNGI3ZjUyO1xuICBjb2xvcjogIzRiN2Y1MjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmFjdHVhbGlzZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM1ZTgwN2Y7XG4gIGNvbG9yOiAjNWU4MDdmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ub25lLW5vdGljZSB7XG4gIHdpZHRoOiAzMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjIwMHB4KSB7XG4gIC5vbmUtbm90aWNlIHtcbiAgICB3aWR0aDogMjEwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE3MDBweCkge1xuICAub25lLW5vdGljZSB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XG4gIC5vbmUtbm90aWNlIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm9uZS1ub3RpY2Uge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgxIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbmg0IHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgaDQge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxucCB7XG4gIGNvbG9yOiAjNWU4MDdmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbn0iLCIkcm9zZTogI2U3NzE3ZDtcclxuJGdyZWVuOiAjYWZkMjc1O1xyXG4kYmVpZ2U6ICNjMmI5YjA7XHJcbiRicm93bjogIzdlNjg1YTtcclxuJGdyZXk6ICNjMmNhZDA7XHJcbiRsaWdodF9ncmV5OiAjZWVlZWVlO1xyXG5cclxuXHJcbiRjb3JhbDojZTk4MDc0O1xyXG4kZGFya19jb3JhbDogI2U4NWE0ZjtcclxuJGRhcmtfZ3JleTogIzhlOGQ4YTtcclxuJHdhcm1fYmVpZ2U6ICNkOGMzYTU7XHJcblxyXG5cclxuJG5pZ2h0X2JsdWU6ICM0NDMxOGQ7XHJcblxyXG4kYm9yZG86ICM1OTI1M2E7XHJcbiRyb3NlX2JvcmRvOiAjNzgyNDRjO1xyXG4kcm9zZV9iZWlnZTogIzg5NTA2MTtcclxuXHJcbiRzZWE6ICMxN2I4OTA7XHJcbiRza3k6ICM5ZGM1YmI7XHJcbiRsaWdodC1za3k6ICNkZWU1ZTU7XHJcbiRkYXJrX3NreTogIzVlODA3ZjsgXHJcbiRkYXJrX2dyZWVuOiAjNGI3ZjUyO1xyXG4kbGVtb246ICNkMWU5YWQ7XHJcbiRyZWQ6ICNlOTRmMzc7XHJcbiRkYXJrX2dyZXlfYmx1ZTogIzM5NWU2NjtcclxuJGRhcmtfYmx1ZTogIzI0MjAzODtcclxuJHJlZF9waW5rOiAjYTcxZDMxO1xyXG5cclxuXHJcblxyXG4kc2hhZG93OiAwcHggOHB4IDExcHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzAxKTtcclxuJG91dGxpbmUtc2hhZG93OiAwcHggMHB4IDdweCAwcHggcmdiYSgwLCAwLCAwLCAwLjM0Mik7Il19 */");

/***/ }),

/***/ "./src/app/user-panel/my-notices/my-notices.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-panel/my-notices/my-notices.component.ts ***!
  \***************************************************************/
/*! exports provided: MyNoticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNoticesComponent", function() { return MyNoticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../delete-confirm/delete-confirm.component */ "./src/app/user-panel/delete-confirm/delete-confirm.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");








let MyNoticesComponent = class MyNoticesComponent {
    constructor(http, _DomSanitizer, router, dialog, appService, _snackbar) {
        this.http = http;
        this._DomSanitizer = _DomSanitizer;
        this.router = router;
        this.dialog = dialog;
        this.appService = appService;
        this._snackbar = _snackbar;
        this.result = '';
        this.spinnerActive = false;
        this.message = 'Ok';
        this.action = '';
        this.getMyInfo();
    }
    getMyInfo() {
        this.spinnerActive = true;
        this.http.getMyInfo().subscribe(res => {
            // console.log(res);
            this.user = res;
            this.spinnerActive = false;
            this.notices = this.user.notices.filter(el => this.getActNotice(el));
            this.oldNotices = this.user.notices.filter(el => this.getOldNotice(el));
            // console.log(this.oldNotices);
            // console.log(this.notices);
        });
    }
    ngOnInit() {
    }
    showNotice(notice, router) {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['/../../user-panel/notice-board/', notice._id]);
        }
        else {
            this.router.navigate(['/../../main-page/notice-board/', notice._id]);
        }
    }
    editNotice(notice) {
        this.router.navigate(['/../../user-panel/my-notices/edit/', notice._id]);
    }
    openDialog(notice) {
        // console.log(notice);
        const message = `Czy na pewno chcesz usunąć to ogłosznie?`;
        const dialogData = new _delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]("", message);
        const dialogRef = this.dialog.open(_delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_5__["DeleteConfirmComponent"], {
            maxWidth: "400px",
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult === true) {
                this.http.deleteNotice(notice._id).subscribe(res => {
                    // console.log(res);
                    this.message = 'Twoje ogłoszenie zostało usunięte!';
                    this.openSnackBar();
                }, err => {
                    this.message = 'Coś poszło nie tak';
                    this.openSnackBar();
                });
                this.notices = this.notices.filter(el => el._id !== notice._id);
            }
        });
    }
    openActualiseDialog(notice) {
        // console.log(notice);
        const message = `Czy na pewno chcesz odświeżyć swoje ogłoszenie?`;
        const dialogData = new _delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]('Możesz przedłużyć ważność swojego ogłoszenia o jeden miesiąc', message);
        const dialogRef = this.dialog.open(_delete_confirm_delete_confirm_component__WEBPACK_IMPORTED_MODULE_5__["DeleteConfirmComponent"], {
            maxWidth: "400px",
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult === true) {
                this.http.extendValidity(notice._id).subscribe(res => {
                    //console.log(res);
                });
                this.oldNotices = this.oldNotices.filter(el => el._id !== notice._id);
                this.notices.push(notice);
            }
        });
    }
    getOldNotice(notice) {
        return this.appService.getOldNotice(notice);
    }
    getActNotice(notice) {
        return this.appService.getActNotice(notice);
    }
    openSnackBar() {
        this._snackbar.open(this.message, this.action, {
            duration: 5000,
        });
    }
};
MyNoticesComponent.ctorParameters = () => [
    { type: src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MyNoticesComponent.prototype, "item", void 0);
MyNoticesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-notices',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-notices.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/my-notices/my-notices.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-notices.component.scss */ "./src/app/user-panel/my-notices/my-notices.component.scss")).default]
    })
], MyNoticesComponent);



/***/ }),

/***/ "./src/app/user-panel/user-panel/user-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user-panel/user-panel/user-panel.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFuZWwvdXNlci1wYW5lbC91c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user-panel/user-panel/user-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user-panel/user-panel/user-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: UserPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPanelComponent", function() { return UserPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let UserPanelComponent = class UserPanelComponent {
    constructor(authHttp, appService, cdr, router, platformId, appId) {
        this.authHttp = authHttp;
        this.appService = appService;
        this.cdr = cdr;
        this.router = router;
        this.platformId = platformId;
        this.appId = appId;
    }
    onActivate(event) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(this.platformId)) {
            let scrollToTop = window.setInterval(() => {
                let pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        this.appService.categoriesVisible.subscribe(el => {
            this.categoriesVisible = el;
        });
        this.cdr.detectChanges();
    }
    logout() {
        this.authHttp.logout();
    }
    addNewNotice() {
        const token = localStorage.getItem('token');
        if (!!token) {
            this.router.navigate(['../../../../user-panel/add-notice']);
        }
        else {
            this.router.navigate(['../../../../main-page/auth']);
        }
    }
};
UserPanelComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"],] }] }
];
UserPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-panel/user-panel/user-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-panel.component.scss */ "./src/app/user-panel/user-panel/user-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"]))
], UserPanelComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ewa\Desktop\GIT projekty\NoticeBoardAPPtest\TablicaOgloszen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map