(function(context) {

	var 
		getDataAttr, setProperties,
		defaultSetting = {
			color: '#fff', // #fff, white, related
			size: '50',	// 30
			radius: 'auto', // auto, square, circle, 10px, 20%
			bg: 'auto' //  none, #fff
		};

	function Socicon() {
		this.init();
	}

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
			i_style, p_color, p_radius, icon,
			settings = {},
			i = 0,
			icons = set.getElementsByTagName('a'),
			len = icons.length;


		settings = getDataAttr(set);
			
		for (; i < len; i++) {
			icon = icons[i];
			i_style = icon.style;

			if (settings.color === 'related') {
				p_color = getComputedStyle(icon, null).getPropertyValue('background-color');
			} else {
				p_color = settings.color;	
			}

			i_style.color = p_color;

			i_style.backgroundColor = (settings.bg === 'none') ? 'transparent' : settings.bg;

			i_style.height = settings.size + 'px';
			i_style.width = settings.size + 'px';
			i_style.lineHeight = settings.size + 'px';
			i_style.fontSize = settings.size * 0.6 + 'px';

			switch (settings.radius) {
				case 'auto':
					p_radius = settings.size * 0.2 + 'px';
					break;
				case 'circle':
					p_radius = '50%';
					break;
				case 'square':
					p_radius = 'none';
					break;
				default:
					p_radius = settings.radius;
			}

			i_style.borderRadius = p_radius;
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
