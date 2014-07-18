(function(window) {

	defaultSetting = {
		color: '#fff', // #fff, white, related
		size: '50',	// 30px
		radius: 'auto', // auto, square, circle, 10px, 20%
		bg: 'auto' //  none, #fff
	},
	settings = {};

	function getDataAttr(set) {
		for (key in defaultSetting){
			if (set.getAttribute('data-' + key)) 
				settings[key] = set.getAttribute('data-' + key);
			else 
				settings[key] = defaultSetting[key];
		}

	}

	function setProperties(set) {
		icons = set.getElementsByTagName('a');
		for (j = 0, len = icons.length; j < len; j++){
			if (settings.color === 'related')
				icons[j].style.color = getComputedStyle(icons[j], null).getPropertyValue('background-color');
			else 
				icons[j].style.color = settings.color;	

			if (settings.bg === 'none')
				icons[j].style.backgroundColor = 'transparent'
			else {
				icons[j].style.backgroundColor = settings.bg;
			}

			icons[j].style.height = settings.size + 'px';
			icons[j].style.width = settings.size + 'px';
			icons[j].style.lineHeight = settings.size + 'px';
			icons[j].style.fontSize = settings.size * 0.6 + 'px';

			switch (settings.radius) {
				case 'auto':
					icons[j].style.borderRadius = settings.size * 0.2 + 'px'
					break;
				case 'circle':
					icons[j].style.borderRadius = '50%'
					break;
				case 'square':
					icons[j].style.borderRadius = 'none'
					break;
				default:
					icons[j].style.borderRadius = settings.radius;
			}
		}
	}

	function Socicon() {
		this.style();
	}

	window.Socicon = Socicon;

	Socicon.prototype = {
		style: function() {
			this.render();
		},
		render: function() {
			this.iconSet = document.getElementsByClassName('socicon');
			for (i = 0; i < this.iconSet.length; i++) {
				getDataAttr(this.iconSet[i]);
				setProperties(this.iconSet[i]);
			}
		}
	}
}(window));

var social = new Socicon();
