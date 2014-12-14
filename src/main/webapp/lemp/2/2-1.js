Ext.onReady(function(){
	Ext.define('Calculator', {
		config:{
			name:'张三'
		},
		constructor:function(config){
			this.initConfig(config);
			return this;
		},
		plus:function(v1, v2){
			return v1+v2;
		},
		minus:function(v1, v2){
			return v1-v2;
		},
		multiply:function(v1, v2){
			return v1*v2;
		},
		divid:function(v1, v2){
			return v1/v2;
		}
	});
	 
	var cal = new Calculator();
	console.log(cal.getName());
	console.log(cal.plus(87, 28));
	console.log(cal.minus(87, 28));
	console.log(cal.multiply(7, 8));
	console.log(cal.divid(28, 7));
	
	
	console.log(document);
	
	Ext.Msg.alert('警告','出错');
	
});




























