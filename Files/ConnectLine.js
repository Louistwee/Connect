$.connectLine = function(box1,box2){
	if(false){//check if there is a line
		return;//return the line
	}else{
		var line = document.body.appendChild(document.createElement('div'));
		for(var i in $.connectLine.fn){
			line[i] = $.connectLine.fn[i];
		}
		box1.lines.push(line);
		box2.lines.push(line);
		if(box1.type == 'output'){
			line.input = box2;
			line.output = box1;
		}else{
			line.input = box1;
			line.output = box2;
		}
		line.output.connector.connect(line.input.connector);
		$(line.output).on('offset',function(){line.update()});
		$(line.input).on('offset',function(){line.update()});
		$(line).css({
			height:2,
			position:'absolute',
		}).cssGradient('linear',line.output.connector.color,line.input.connector.color);
		setTimeout(function(){line.update},100);
		return line;
	}
};
$.connectLine.fn = {};
$.connectLine.fn.remove = function(){
	
};
$.connectLine.fn.dataBullet = function(){
	
};
$.connectLine.fn.update = function(){
	var	w = 7;
	var 	x1 = this.output.x + 7,
		y1 = this.output.y + 7,
	 	x2 = this.input.x + 7,
		y2 = this.input.y + 7;
	var 	a = x1 - x2,
        	b = y1 - y2,
        	length = Math.sqrt(a * a + b * b),
		sx = (x1 + x2) / 2,
        	sy = (y1 + y2) / 2;
    	var 	x = sx - length / 2,
        	y = sy,
		angle = Math.PI - Math.atan2(-b, a);
	$(this).css({
		width:length,
		left:x,
		top:y,
		'-ms-transform': 'rotate('+angle+'rad)', /* IE 9 */
		'-webkit-transform': 'rotate('+angle+'rad)', /* Chrome, Safari, Opera */
		'transform': 'rotate('+angle+'rad)',
	});
};
