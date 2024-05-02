import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [


		// {
		// 	path: '/registration/referal/list-referal', title: 'Referal Detail', icon: 'home', type: 'link', active: false
		// },
		// {
		// 	path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		// },
		// { 
		// 	path: '/db-franchise/franchise-dashboard', title: 'Franchise Dashboard',icon: 'home', type: 'link' , active: false 
		// },
		// { 
		// 	path: '/db-customer/customer-dashboard', title: 'Customer Dashboard',icon: 'home', type: 'link' , active: false 
		// },
		// {
		// 	path: '/sales/orders', title: 'Seller Dashboard', icon: 'home', type: 'link', active: false
		// },
		// { 
		// 	path: '/db-supplier/supplier-dashboard', title: 'Supplier Dashboard',icon: 'home', type: 'link' , active: false 
		// },
		{
			title: 'Menu Master', icon: 'clipboard', type: 'sub', active: false, children: [
				
				// {
				// 	title: 'R-S-W Product', type: 'sub', children: [
				// 		{ path: '/registration/seller-product/new-product/0', title: 'New Product', type: 'link' },
				// 		{ path: '/registration/seller-product/list-product', title: 'Product List', type: 'link' },
				// 	]
				// },	
				
				{
				title: 'Menu', type: 'sub', children: [
					{ path: '/registration/menu/list-menu2', title: 'New Menu', type: 'link' },
					{ path: '/registration/menu/list-menu', title: 'Active List Menu', type: 'link' },
					{ path: '/registration/menu/de-active-list-menu', title: 'De-Active List Menu', type: 'link' },
				]
			   },
			   
			]
		},	


		// {
		// 	title: 'Order Entry', icon: 'shopping-bag', type: 'sub', active: false, children: [
		// 		{
		// 			title: 'Supplier Order Entery',  type: 'sub',  children: [
		// 				{ path: '/order-entry/supplier-order/new-supplier-order/0', title: 'New Supplier Order', type: 'link' },
		// 				{ path: '/order-entry/supplier-order/list-supplier-order', title: 'List Supplier Order', type: 'link' },
		// 			]
		// 		},
		// 		{
		// 			title: 'Seller Order Entery', type: 'sub', children: [
		// 				{ path: '/order-entry/seller-order/new-seller-order/0', title: 'New Seller Order', type: 'link' },
		// 				{ path: '/order-entry/seller-order/list-seller-order', title: 'List Seller Order', type: 'link' },
		// 			]
		// 		},

		// 	]
		// },
		{
			title: 'Order Information', icon: 'dollar-sign', type: 'sub', active: false, children: [
				// {
				// 	title: 'Supplier Order-Info',  type: 'sub', children: [

				// 		{ path: '/order-info/supplier-order-info', title: 'Todays All Order', type: 'link' },
				// 		{ path: '/order-info/statuswise-supplier/supplier-shipped-status', title: 'Todays Shipped Order', type: 'link' },
				// 		{ path: '/order-info/statuswise-supplier/supplier-delivered-status', title: 'Todays Delivered Order', type: 'link' },
				// 		{ path: '/order-info/statuswise-supplier/supplier-cancel-status', title: 'Todays Canceled Order', type: 'link' },
				// 		{ path: '/order-info/supplier-datewise-report', title: 'Datewise Order Report', type: 'link' },

				// 	]
				// },
				{
					title: 'Customer Order-Info', type: 'sub', active: false,  children: [

						// { path: '/sales/orders', title: 'Todays All Order', type: 'link' },
						//{ path: '/sales/orderdisplay/287', title: 'Order Update', type: 'link' },
						//{ path: '/sales/delivered-order', title: 'Todays Delivered Order', type: 'link' },
						//{ path: '/sales/canceled-order', title: 'Todays Canceled Order', type: 'link' },
						//{ path: '/sales/datewise-order', title: 'Datewise Order', type: 'link' },
						//{ path: '/sales/all-pending-order', title: 'All Pending Order', type: 'link' },

					]
				},
				{
					title: 'Seller Order-Info', type: 'sub', children: [

						{ path: '/order-info/seller-order-info', title: 'Todays All Order', type: 'link' },
						{ path: '/order-info/statuswise-seller/seller-shipped-status', title: 'Todays Shipped Order', type: 'link' },
						{ path: '/order-info/statuswise-seller/seller-delivered-status', title: 'Todays Delivered Order', type: 'link' },
						{ path: '/order-info/statuswise-seller/seller-cancel-status', title: 'Todays Canceled Order', type: 'link' },
						{ path: '/order-info/seller-datewise-report', title: 'Datewise Order Report', type: 'link' },

					]
				},

			]
		},

		// {
		// 	title: 'Purchase', icon: 'shopping-bag', type: 'sub', active: false, children: [
		// 		{ path: '/purchase/new-purchase', title: 'Purchase Entry', type: 'link' },
		// 		{ path: '/purchase/list-purchase', title: 'Purchase List', type: 'link' },
		// 	]
		// },
		// {
		// 	title: 'Todays Market Rate', icon: 'shopping-bag', type: 'sub', active: false, children: [
		// 		{ path: '/market-rate/new-market-rate/0', title: 'Market Rate Entry', type: 'link' },
		// 		{ path: '/market-rate/list-market-rate', title: 'Market Rate List', type: 'link' },
		// 	]
		// },
		{
			title: 'Queries/Complaints', icon: 'align-left', type: 'sub', active: false, children: [
				{ path: '/queries/list-query', title: 'Query/Complaint Lists', type: 'link' },
				{ path: '/queries/new-query/0', title: 'Add Query/Complaint', type: 'link' },
			]
		},


		{
			title: 'Reports', icon: 'bar-chart', type: 'sub', active: false, children: [
				{ path: '/reports', title: 'Report-1', type: 'link' },
				{ path: '/reports', title: 'Report-2', type: 'link' },
			]
		},
		// {
		// 	path: '/auth/login', title: 'Login', icon: 'home', type: 'link', active: false
		// },

	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
