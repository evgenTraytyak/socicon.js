(function(context) {

	var 
		getDataAttr, setProperties, getStyle,
		defaultSetting = {
			color: '#fff', // #fff, white, related
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
			iconStyle, radius, icon,
			settings = {},
			i = 0,
			icons = set.getElementsByTagName('a'),
			len = icons.length;

		settings = getDataAttr(set);
			
		for (; i < len; i++) {
			icon = icons[i];
			iconStyle = icon.style;

			switch (settings.radius) {
				case 'auto':
					radius = settings.size * 0.2 + 'px';
					break;
				case 'circle':
					radius = '50%';
					break;
				case 'square':
					radius = 'none';
					break;
				default:
					radius = settings.radius;
			}

			iconStyle.width = settings.size + 'px';
			iconStyle.height = settings.size + 'px';
			iconStyle.borderRadius = radius;
			iconStyle.backgroundColor = (settings.bg === 'none') ? 'transparent' : settings.bg;
			iconStyle.lineHeight = settings.size + 'px';
			iconStyle.fontSize = settings.size * 0.6 + 'px';
			iconStyle.color = (settings.color === 'related') ? getStyle(icon, 'background-color') : settings.color;

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
