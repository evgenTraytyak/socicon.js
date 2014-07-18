(function(context) {

	var 
		getDataAttr, setProperties, getStyle, parseRadius,
		defaultSetting = {
			color: 'white', // #fff, white, related
			size: '50',	// 30
			radius: 'auto', // auto, square, circle, 10px, 20%
			bg: 'auto' //  none, #fff
		};

	function Socicon() {
		this.init();
	}

	getStyle = function(element, property) {
		return getComputedStyle(element, null).getPropertyValue(property);
	};

	parseRadius = function(settings) {
		switch (settings.radius) {
			case 'auto':
				return settings.size * 0.2 + 'px';
			case 'circle':
				return '50%';
			case 'square':
				return 'none';
			default:
				return settings.radius;
		}
	};

	getDataAttr = function(set) {
		var 
			key,
			obj = {};

		for (key in defaultSetting) {
			obj[key] = set.getAttribute('data-' + key) || defaultSetting[key];
		}

		return obj;
	};

	setProperties = function(set) {
		var 
			icon, iconStyle,
			i = 0,
			settings = getDataAttr(set),
			icons = set.getElementsByTagName('a'),
			len = icons.length;
	
		for (; i < len; i++) {
			icon = icons[i];
			iconStyle = icon.style;

			iconStyle.width = settings.size + 'px';
			iconStyle.height = settings.size + 'px';
			iconStyle.borderRadius = parseRadius(settings);
			iconStyle.lineHeight = settings.size + 'px';
			iconStyle.fontSize = settings.size * 0.6 + 'px';
			iconStyle.color = (settings.color === 'related') ? getStyle(icon, 'background-color') : settings.color;
			iconStyle.backgroundColor = (settings.bg === 'none') ? 'transparent' : settings.bg;
		}
	};

	Socicon.prototype = {
		init: function() {
			var 
				that = this;

			context.onload = function() {
				that.style();
			};
		},
		style: function() {
			var
				iconSet = context.document.getElementsByClassName('socicon'),
				len = iconSet.length,
				i = 0;

			for (; i < len; i++) {
				setProperties(iconSet[i]);
			}
		}
	};

	context.instanceSocicon = new Socicon();

})(this);
