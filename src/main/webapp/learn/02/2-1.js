Ext.onReady(function () {
 
    Ext.define("My.test.Animal", {
        height: 0,
        weight: 0
    });
 
    Ext.define("My.test.Person", {
        //普通子段
        name: "",
 
        //属性
        config: {
            age: 0,
            father: {
                name: "",
                age: 0
            }
        },
 
        //构造方法
        constructor: function (name, height) {
            this.self.count++;
            if (name) this.name = name;
            if (height) this.height = height;
 
        },
 
        //继承
        extend: "My.test.Animal",
 
        //实例方法
        Say: function () {
            alert("你好，我是：" + this.name + ",我今年" + this.age + "岁,我的身高是：" + this.height
　　　　　　　　　　+ "。我的爸爸是：" + this.father.name + "，他" + this.father.age + "岁。");
        },
 
        //静态子段，方法
        statics: {
            type: "高等动物",
            count: 0,
            getCount: function () {
                return "当前共有" + this.count + "人";
            }
        }
 
    });
 
    function test() {
        var p = Ext.create("My.test.Person", "李四", 178);
        p.setAge(21);
        p.setFather({
            age: 48,
            name: "李五"
        });
        p.Say();
        Ext.create("My.test.Person");
        alert(My.test.Person.getCount());
    }
    test();
});
