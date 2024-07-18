import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.BsMIaXkO.js";const c=JSON.parse('{"title":"对象版本","description":"","frontmatter":{},"headers":[],"relativePath":"Notes/14_other/websocket.md","filePath":"Notes/14_other/websocket.md"}'),l={name:"Notes/14_other/websocket.md"},h=n(`<h1 id="对象版本" tabindex="-1">对象版本 <a class="header-anchor" href="#对象版本" aria-label="Permalink to &quot;对象版本&quot;">​</a></h1><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 信息提示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ElMessage } from &#39;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">element-plus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function cutAfterHttp(url) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  return url</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[1] || url</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[1];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebSocket地址</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const url =&quot;ws&quot;+ cutAfterHttp(import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.meta.env.VITE_APP_BASE_API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)+&#39;/websocket/2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebSocket实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let ws</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重连定时器实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let reconnectTimer</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebSocket重连开关</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let isReconnecting = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebSocket对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const websocket = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // WebSocket建立连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Init() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 判断浏览器是否支持WebSocket</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    if (!(&#39;WebSocket&#39; in window)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ElMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;您的浏览器不支持 WebSocket&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建WebSocket实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws = new WebSocket(url)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 监听WebSocket连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onopen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ElMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket连接成功&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 监听WebSocket连接错误信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket重连开关&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, isReconnecting)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket数据传输发生错误&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ElMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket传输发生错误&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 打开重连</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      reconnect()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 监听WebSocket接收消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket接收后端消息:&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 心跳消息不做处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      if (e</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> === &#39;ok&#39;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 调用回调函数处理接收到的消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      if (websocket</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onMessageCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        websocket</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onMessageCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ElMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // WebSocket连接关闭方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Close() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 关闭断开重连机制</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isReconnecting = true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ElMessage</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket断开连接&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // WebSocket发送信息方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Send(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 处理发送数据JSON字符串</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    const msg = JSON</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 发送消息给后端</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(msg)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 暴露WebSocket实例，其他地方调用就调用这个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  getWebSocket() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return ws</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 新增回调函数用于处理收到的消息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  onMessageCallback: null,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 设置消息处理回调函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  setMessageCallback(callback) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onMessageCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = callback</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听窗口关闭事件，当窗口关闭时-每一个页面关闭都会触发-扩张需求业务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onbeforeunload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = function () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 在窗口关闭时关闭 WebSocket 连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  websocket</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.Close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket窗口关闭事件触发&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 浏览器刷新重新连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 刷新页面后需要重连-并且是在登录之后</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">if (performance</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.getEntriesByType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;navigation&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[0]</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> === &#39;reload&#39;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket浏览器刷新了&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 延迟一定时间再执行 WebSocket 初始化，确保页面完全加载后再进行连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket执行刷新后重连...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 刷新后重连</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    websocket</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, 200) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 适当调整延迟时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重连方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">function reconnect() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WebSocket重连开关&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, isReconnecting)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断是否主动关闭连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  if (isReconnecting) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 重连定时器-每次WebSocket错误方法onerror触发它都会触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  reconnectTimer </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> clearTimeout(reconnectTimer)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  reconnectTimer = setTimeout(function () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // console.log(&#39;WebSocket执行断线重连...&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    websocket</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    isReconnecting = false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, 4000)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 暴露对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export default websocket</span></span></code></pre></div><h1 id="class版本" tabindex="-1">class版本 <a class="header-anchor" href="#class版本" aria-label="Permalink to &quot;class版本&quot;">​</a></h1><p><a href="https://juejin.cn/post/7359900973991067685" target="_blank" rel="noreferrer">https://juejin.cn/post/7359900973991067685</a></p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class \`WebSocketHeartbeat\` {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  constructor(url) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = url;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pingTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 10000; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 心跳消息的发送间隔</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pongTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1000; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// pong消息允许的最大延时</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pingTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = null; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于发送心跳消息的延时器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pongTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = null; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于检测服务器是否及时返回pong消息的延时器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isReconnecting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于记录当前是否处于重连的状态</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.reconnectTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1000; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 尝试重连的时间间隔</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isForbiddenReconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 用于标记是否要尝试重连</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onopen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = () =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onclose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = () =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = () =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = () =&gt; {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.createWebSocket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 创建一个websocket实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createWebSocket() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = new WebSocket(this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 添加事件监听</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  init() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.onopen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.handleOpen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.onclose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.handleClose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.handleError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.onmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = (e) =&gt; this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.handleMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  handleOpen(e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;websocket连接已建立&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onopen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 开始进行心跳检测</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.checkHeartbeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  handleMessage(e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;接收到的消息内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 收到消息后，再次进行心跳检测</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.checkHeartbeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  handleClose(e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;websocket连接关闭了&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onclose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 尝试重连操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.reconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  handleError(e) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;websocket连接出错&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onerror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.reconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  send(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 用于用户主动断开连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  close() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ws.close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.resetHeartbeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isForbiddenReconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 原生的WebSocket并没有提供reconnect APi，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 因此我们此处reconnect实际上做的操作是重新创建一个WebSocket实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  reconnect() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;进行重连~&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 在重新创建连接的时候应该确保一次只创建一个，并且不要频繁创建</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    if (this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isReconnecting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> || this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isForbiddenReconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) return;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isReconnecting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.createWebSocket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.isReconnecting</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.reconnectTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  checkHeartbeat() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.resetHeartbeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.tryHeartbeat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  resetHeartbeat() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clearTimeout(this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pingTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clearTimeout(this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pongTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  tryHeartbeat() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pingTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;heartbeat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 如果超过一定时间（约定的pong返回时间）还没有接收到消息，此时需要进行重连操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pongTimeoutId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = setTimeout(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;需要进行重连操作&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.reconnect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }, this</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.pongTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, this.pingTimeout);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">export { WebSocketHeartbeat };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 心跳消息（ping）的发送时机：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 首先是发送间隔，这个应该是可以设置的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在建立websocket连接之后就开始尝试发送一次心跳消息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 服务端会返回pong消息或者其它消息给客户端，此时再次尝试发送一次心跳消息</span></span></code></pre></div><p>使用</p><div class="language-less vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { WebSocketHeartbeat } from &#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">websocket-heartbeat</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const ws = new WebSocketHeartbeat(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ws://localhost:3003&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.onmessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = ({ </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;用户处理消息&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const messageEl = document</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const sendBtnEl = document</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.send-btn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const closeBtnEl = document</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.close-btn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sendBtnEl</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(messageEl</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">closeBtnEl</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ws</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>.</p>`,8),k=[h];function p(t,E,e,r,g,d){return a(),i("div",null,k)}const o=s(l,[["render",p]]);export{c as __pageData,o as default};
