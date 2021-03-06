module.exports = {	
	origin: 'https://test.miniprogram.com',	
	entry: '/',	
	router: {		
		index: ['/'],

		layout: ['/layout'],
		container: ['/container'],
		icon: ['/icon'],
		button: ['/button'],
		link: ['/link'],

		radio: ['/radio'],
		checkbox: ['/checkbox'],
		input: ['/input'],
		inputnumber: ['/inputnumber'],
		select: ['/select'],
		cascader: ['/Cascader'],
		switch: ['/switch'],
		slider: ['/slider'],
		timepicker: ['/timepicker'],
		datepicker: ['/datepicker'],
		datetimepicker: ['/datetimepicker'],
		upload: ['/upload'],
		rate: ['/rate'],
		colorpicker: ['/colorpicker'],
		transfer: ['/transfer'],
		form: ['/form'],

		table: ['/table'],
		tag: ['/tag'],
		progress: ['/progress'],
		tree: ['/tree'],
		pagination: ['/pagination'],
		badge: ['/badge'],
		avatar: ['/avatar'],

		alert: ['/alert'],
		loading: ['/loading'],
		message: ['/message'],
		messagebox: ['/messagebox'],
		notification: ['/notification'],

		navmenu: ['/navmenu'],
		tabs: ['/tabs'],
		breadcrumb: ['/breadcrumb'],
		pageheader: ['/pageheader'],
		dropdown: ['/dropdown'],
		steps: ['/steps'],

		dialog: ['/dialog'],
		tooltip: ['/tooltip'],
		popover: ['/popover'],
		popconfirm: ['/popconfirm'],
		card: ['/card'],
		carousel: ['/carousel'],
		collapse: ['/collapse'],
		timeline: ['/timeline'],
		divider: ['/divider'],
		calendar: ['/calendar'],
		image: ['/image'],
		backtop: ['/backtop'],
		infinitescroll: ['/infinitescroll'],
		drawer: ['/drawer'],
	},	
	redirect: {		
		notFound: 'index',		
		accessDenied: 'index',
	},
	runtime: {
		cookieStore: 'globalstorage',
	},
	app: {
		navigationBarTitleText: 'miniprogram-project',
	},
	projectConfig: {
		appid: '',
		projectname: 'kbone-demo21',
		condition: {
			miniprogram: {
				current: 0,
				list: [{
					id: -1,
					name: 'layout',
					pathName: 'pages/layout/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Flayout&search=&hash=',
					scene: null,
				}, {
					id: -2,
					name: 'container',
					pathName: 'pages/container/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcontainer&search=&hash=',
					scene: null,
				}, {
					id: -6,
					name: 'icon',
					pathName: 'pages/icon/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ficon&search=&hash=',
					scene: null,
				}, {
					id: -7,
					name: 'button',
					pathName: 'pages/button/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fbutton&search=&hash=',
					scene: null,
				}, {
					id: -8,
					name: 'link',
					pathName: 'pages/link/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Flink&search=&hash=',
					scene: null,
				}, {
					id: -9,
					name: 'radio',
					pathName: 'pages/radio/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fradio&search=&hash=',
					scene: null,
				}, {
					id: -10,
					name: 'checkbox',
					pathName: 'pages/checkbox/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcheckbox&search=&hash=',
					scene: null,
				}, {
					id: -11,
					name: 'input',
					pathName: 'pages/input/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Finput&search=&hash=',
					scene: null,
				}, {
					id: -12,
					name: 'inputnumber',
					pathName: 'pages/inputnumber/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Finputnumber&search=&hash=',
					scene: null,
				}, {
					id: -13,
					name: 'select',
					pathName: 'pages/select/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fselect&search=&hash=',
					scene: null,
				}, {
					id: -14,
					name: 'cascader',
					pathName: 'pages/cascader/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcascader&search=&hash=',
					scene: null,
				}, {
					id: -15,
					name: 'switch',
					pathName: 'pages/switch/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fswitch&search=&hash=',
					scene: null,
				}, {
					id: -16,
					name: 'slider',
					pathName: 'pages/slider/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fslider&search=&hash=',
					scene: null,
				}, {
					id: -17,
					name: 'timepicker',
					pathName: 'pages/timepicker/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftimepicker&search=&hash=',
					scene: null,
				}, {
					id: -18,
					name: 'datepicker',
					pathName: 'pages/datepicker/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdatepicker&search=&hash=',
					scene: null,
				}, {
					id: -19,
					name: 'datetimepicker',
					pathName: 'pages/datetimepicker/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdatetimepicker&search=&hash=',
					scene: null,
				}, {
					id: -20,
					name: 'upload',
					pathName: 'pages/upload/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fupload&search=&hash=',
					scene: null,
				}, {
					id: -21,
					name: 'rate',
					pathName: 'pages/rate/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Frate&search=&hash=',
					scene: null,
				}, {
					id: -22,
					name: 'colorpicker',
					pathName: 'pages/colorpicker/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcolorpicker&search=&hash=',
					scene: null,
				}, {
					id: -23,
					name: 'transfer',
					pathName: 'pages/transfer/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftransfer&search=&hash=',
					scene: null,
				}, {
					id: -24,
					name: 'form',
					pathName: 'pages/form/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fform&search=&hash=',
					scene: null,
				}, {
					id: -25,
					name: 'table',
					pathName: 'pages/table/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftable&search=&hash=',
					scene: null,
				}, {
					id: -26,
					name: 'tag',
					pathName: 'pages/tag/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftag&search=&hash=',
					scene: null,
				}, {
					id: -27,
					name: 'progress',
					pathName: 'pages/progress/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fprogress&search=&hash=',
					scene: null,
				}, {
					id: -28,
					name: 'tree',
					pathName: 'pages/tree/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftree&search=&hash=',
					scene: null,
				}, {
					id: -29,
					name: 'pagination',
					pathName: 'pages/pagination/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fpagination&search=&hash=',
					scene: null,
				}, {
					id: -30,
					name: 'badge',
					pathName: 'pages/badge/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fbadge&search=&hash=',
					scene: null,
				}, {
					id: -31,
					name: 'avatar',
					pathName: 'pages/avatar/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Favatar&search=&hash=',
					scene: null,
				}, {
					id: -32,
					name: 'alert',
					pathName: 'pages/alert/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Falert&search=&hash=',
					scene: null,
				}, {
					id: -33,
					name: 'loading',
					pathName: 'pages/loading/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Floading&search=&hash=',
					scene: null,
				}, {
					id: -34,
					name: 'message',
					pathName: 'pages/message/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fmessage&search=&hash=',
					scene: null,
				}, {
					id: -35,
					name: 'messagebox',
					pathName: 'pages/messagebox/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fmessagebox&search=&hash=',
					scene: null,
				}, {
					id: -36,
					name: 'notification',
					pathName: 'pages/notification/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fnotification&search=&hash=',
					scene: null,
				}, {
					id: -37,
					name: 'navmenu',
					pathName: 'pages/navmenu/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fnavmenu&search=&hash=',
					scene: null,
				}, {
					id: -38,
					name: 'tabs',
					pathName: 'pages/tabs/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftabs&search=&hash=',
					scene: null,
				}, {
					id: -39,
					name: 'breadcrumb',
					pathName: 'pages/breadcrumb/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fbreadcrumb&search=&hash=',
					scene: null,
				}, {
					id: -40,
					name: 'pageheader',
					pathName: 'pages/pageheader/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fpageheader&search=&hash=',
					scene: null,
				}, {
					id: -41,
					name: 'dropdown',
					pathName: 'pages/dropdown/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdropdown&search=&hash=',
					scene: null,
				}, {
					id: -42,
					name: 'steps',
					pathName: 'pages/steps/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fsteps&search=&hash=',
					scene: null,
				}, {
					id: -43,
					name: 'dialog',
					pathName: 'pages/dialog/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdialog&search=&hash=',
					scene: null,
				}, {
					id: -44,
					name: 'tooltip',
					pathName: 'pages/tooltip/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftooltip&search=&hash=',
					scene: null,
				}, {
					id: -45,
					name: 'popover',
					pathName: 'pages/popover/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fpopover&search=&hash=',
					scene: null,
				}, {
					id: -46,
					name: 'popconfirm',
					pathName: 'pages/popconfirm/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fpopconfirm&search=&hash=',
					scene: null,
				}, {
					id: -47,
					name: 'card',
					pathName: 'pages/card/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcard&search=&hash=',
					scene: null,
				}, {
					id: -48,
					name: 'carousel',
					pathName: 'pages/carousel/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcarousel&search=&hash=',
					scene: null,
				}, {
					id: -49,
					name: 'collapse',
					pathName: 'pages/collapse/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcollapse&search=&hash=',
					scene: null,
				}, {
					id: -50,
					name: 'timeline',
					pathName: 'pages/timeline/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Ftimeline&search=&hash=',
					scene: null,
				}, {
					id: -51,
					name: 'divider',
					pathName: 'pages/divider/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdivider&search=&hash=',
					scene: null,
				}, {
					id: -52,
					name: 'calendar',
					pathName: 'pages/calendar/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fcalendar&search=&hash=',
					scene: null,
				}, {
					id: -53,
					name: 'image',
					pathName: 'pages/image/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fimage&search=&hash=',
					scene: null,
				}, {
					id: -54,
					name: 'backtop',
					pathName: 'pages/backtop/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fbacktop&search=&hash=',
					scene: null,
				}, {
					id: -55,
					name: 'infinitescroll',
					pathName: 'pages/infinitescroll/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Finfinitescroll&search=&hash=',
					scene: null,
				}, {
					id: -56,
					name: 'drawer',
					pathName: 'pages/drawer/index',
					query: 'type=open&targeturl=https%3A%2F%2Ftest.miniprogram.com%2Fdrawer&search=&hash=',
					scene: null,
				}],
			},
		},
	},
	packageConfig: {
		author: 'wechat-miniprogram',
	},
}