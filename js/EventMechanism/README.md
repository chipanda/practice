## 事件机制

### DOM0事件

有两种：

* 标签内onclick

<code>
    &ltbutton onClick="alert(1);"&gt&lt/button&gt
</code>

* js绑定

<code>
    element.onclick = function() { alert(1); };
</code>

### DOM1事件

1级DOM标准中并没有定义事件相关的内容。

### DOM2事件

监听方法，通过addEventListener绑定，removeEventListener移除。三个阶段：

* 捕获阶段：从document至顶向下只event.target
* 冒泡阶段：从event.target至底向下至document
* 目标阶段：event.target会先后触发捕获和冒泡绑定的时间
