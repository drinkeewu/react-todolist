(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return storage});var storage={setJSON:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=JSON.stringify(t);localStorage.setItem(e,n)},getJSON:function getJSON(key){var cache=localStorage.getItem(key),result=cache&&"object"===typeof eval(cache)&&JSON.parse(cache)||null;return result}}},22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(12),i=n.n(l),c=(n(27),n(2)),r=n(3),u=n(7),s=n(4),d=n(6),p=(n(28),n(9)),h=n(1),b=(n(29),"ADD_TODO"),m="TOGGLE_COMPLETE",f="UPDATE_TODO",O="DELETE_TODO",v="CLEAR_COMPLETE",g={addTodo:function(e){return{type:b,payload:e}},toggleComplete:function(e){return{type:m,payload:e}},updateTodo:function(e){return{type:f,payload:e}},deleteTodo:function(e){return{type:O,payload:e}},clearCompleted:function(e){return{type:v,payload:e}}},j=n(5),y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={index:n.props.index},n.handleDoubleClick=n.handleDoubleClick.bind(Object(h.a)(Object(h.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(h.a)(Object(h.a)(n))),n.handleOnBlur=n.handleOnBlur.bind(Object(h.a)(Object(h.a)(n))),n.handleDelete=n.handleDelete.bind(Object(h.a)(Object(h.a)(n))),n.handleToggleComplete=n.handleToggleComplete.bind(Object(h.a)(Object(h.a)(n))),n.handleOnKeyUp=n.handleOnKeyUp.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleDoubleClick",value:function(){this.setState({editing:!0})}},{key:"handleOnBlur",value:function(e){this.setState({editing:!1}),e.target.value?this.handleInputChange(e):this.handleDelete()}},{key:"handleInputChange",value:function(e){this.props.updateTodo({value:e.target.value,id:this.props.data.id})}},{key:"handleDelete",value:function(){this.props.deleteTodo(this.props.data)}},{key:"handleToggleComplete",value:function(){this.props.toggleComplete(this.props.data)}},{key:"handleOnKeyUp",value:function(e){if(13!==e.keyCode)return!1;this.handleOnBlur(e)}},{key:"render",value:function(){var e=this,t=this.state.editing,n=this.props.data;return t?o.a.createElement("div",{className:"todo-list-item",onDoubleClick:this.handleDoubleClick},o.a.createElement("div",{className:"item-content editing"},o.a.createElement("input",{ref:function(t){return e.input=t},className:"item-input",value:n.value,onChange:this.handleInputChange,autoFocus:!0,onKeyUp:this.handleOnKeyUp,onBlur:this.handleOnBlur}))):o.a.createElement("div",{className:this.props.data.complete?"todo-list-item checked":"todo-list-item",onDoubleClick:this.handleDoubleClick},o.a.createElement("label",{className:"item-check-dot",onClick:this.handleToggleComplete}),o.a.createElement("div",{className:"item-content"},this.props.children,n&&n.value),o.a.createElement("span",{className:"todo-delete-btn",onClick:this.handleDelete},"\xd7"))}}]),t}(a.Component),C=Object(j.b)(function(e){return Object(p.a)({},e)},g)(y),k=(n(34),[{type:"all",text:"All"},{type:"active",text:"Active"},{type:"completed",text:"Completed"}]),T=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={},n.handleFilter=n.handleFilter.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleFilter",value:function(e){this.props.onTabChange(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.leftCount,a=t.todos,l=t.activeFilter,i=a.filter(function(e){return e.complete}).length;return o.a.createElement("footer",{className:"todo-list-footer"},o.a.createElement("span",{className:"todo-count"},n||"No"," item left"),o.a.createElement("div",{className:"filter-tabs"},k.map(function(t){return o.a.createElement("button",{className:t.type===l?"filter-tab active":"filter-tab",onClick:function(n){return e.handleFilter(t.type)},key:"filter-".concat(t.type)},t.text)})),i>0&&o.a.createElement("button",{className:"clear-completed",onClick:this.props.clearCompleted},"Clear Completed"))}}]),t}(a.Component),E=Object(j.b)(function(e){return Object(p.a)({},e)},g)(T),I=(n(35),{all:function(e){return e},active:function(e){return e.filter(function(e){return!e.complete})},completed:function(e){return e.filter(function(e){return e.complete})}}),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={inputValue:"",activeFilter:"all",IsInputFocus:!1},n.onItemBlur=n.onItemBlur.bind(Object(h.a)(Object(h.a)(n))),n.onInputBlur=n.onInputBlur.bind(Object(h.a)(Object(h.a)(n))),n.onInputFocus=n.onInputFocus.bind(Object(h.a)(Object(h.a)(n))),n.onInputChange=n.onInputChange.bind(Object(h.a)(Object(h.a)(n))),n.onInputKeyUp=n.onInputKeyUp.bind(Object(h.a)(Object(h.a)(n))),n.handleAddTodo=n.handleAddTodo.bind(Object(h.a)(Object(h.a)(n))),n.onItemChange=n.onItemChange.bind(Object(h.a)(Object(h.a)(n))),n.filteredTodos=n.filteredTodos.bind(Object(h.a)(Object(h.a)(n))),n.handleToggleTab=n.handleToggleTab.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onItemBlur",value:function(e,t){}},{key:"onItemChange",value:function(e,t){}},{key:"onInputBlur",value:function(e){}},{key:"onInputFocus",value:function(e){}},{key:"onInputChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"onInputKeyUp",value:function(e){if(13!==e.keyCode||!e.target.value)return!1;this.handleAddTodo(e.target.value.trim())}},{key:"handleAddTodo",value:function(e){this.props.addTodo({value:e,complete:!1,id:(new Date).getTime()}),this.setState({inputValue:""})}},{key:"filteredTodos",value:function(){var e=this.props.todos,t=this.state.activeFilter;return I[t](e)||[]}},{key:"handleToggleTab",value:function(e){this.setState({activeFilter:e}),this.filteredTodos()}},{key:"render",value:function(){var e=this,t=this.filteredTodos()||[],n=this.props.todos,a=I.active(n).length;return o.a.createElement("div",{className:"todo-list"},o.a.createElement("input",{className:"todo-input",placeholder:"What need to do ?",onBlur:this.onInputBlur,onFocus:this.onInputFocus,onKeyUp:this.onInputKeyUp,onChange:this.onInputChange,value:this.state.inputValue}),t.map(function(t,n){return o.a.createElement(C,{key:"item-".concat(n),data:Object.assign(t,{index:n}),onBlur:e.onItemBlur,index:n,onChange:e.onItemChange})}),this.props.todos.length>0&&o.a.createElement(E,{activeFilter:this.state.activeFilter,leftCount:a,onTabChange:this.handleToggleTab}))}}]),t}(a.Component),N=Object(j.b)(function(e){return Object(p.a)({},e)},g)(_),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={todoList:[]},n}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"todo-list-title"},"Todo List"),o.a.createElement(N,{list:this.state.todoList}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(10),B=n(13),F=n(21);function S(e){B.a.setJSON("react_todos",e)}var x=function(e,t){var n=t.payload,a=[];switch(t.type){case b:return S(a=[].concat(Object(F.a)(e.todos),[t.payload])),{todos:a};case m:return S(a=e.todos.map(function(e){return e.id===t.payload.id&&(e.complete=!e.complete),e})),{todos:a};case f:return S(a=e.todos.map(function(e){return e.id===n.id&&(e.value=n.value),e})),{todos:a};case O:return S(a=e.todos.filter(function(e){return e.id!==n.id})),{todos:a};case v:return S(a=e.todos.filter(function(e){return!e.complete})),{todos:a};default:return e}},U=n(20),A={todos:B.a.getJSON("react_todos")||[]},K=Object(D.d)(x,A,Object(D.c)(Object(D.a)(U.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));i.a.render(o.a.createElement(j.a,{store:K},o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.f0853ad1.chunk.js.map