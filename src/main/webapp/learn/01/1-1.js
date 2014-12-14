Ext.onReady(function(){
	//Ext.Element类：是ExtJs对dom对象的封装
	//Ext.CompositeElement类：是ExtJs对象dom对象集合的封装
	
	//查询id='div1'的元素， 返回第一个匹配元素的Ext.Element类型
	//该方法只能查id， 不支持选择器
	///log(Ext.get("div1"));
	
	//功能同上
	//log(Ext.fly("div1"));
	
	
	//查询id='div1'的元素的dom的对象
	///log(Ext.get('div1').dom);      //<div id="div1">DIV1</div>
	//或者
	///log(Ext.getDom('div1'));	
	
	//获取body元素的Ext.Element类型
	///log(Ext.getBody());
	//返回当前HTML文档的Ext.Element类型
	///log(Ext.getDoc());
	
	//查询id=div1的元素，返回满足条件的集合Ext.CompositeElement类型
	///log(Ext.select('#div'));
	
	//查询属性title='d1'的div，  返回满足条件的集合Ext.CompositeElement类型
	///log(Ext.select("div[title='d1']"));
	
	//查询属性title='d1'的div，返回满足条件的dom节点集合
	///log(Ext.query("div[title='d1']"));
	
	function log(param){
		console.log(param);
	}
	
});