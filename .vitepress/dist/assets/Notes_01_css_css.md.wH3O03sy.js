import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DWT__QHq.js";const g=JSON.parse('{"title":"css","description":"","frontmatter":{},"headers":[],"relativePath":"Notes/01_css/css.md","filePath":"Notes/01_css/css.md"}'),t={name:"Notes/01_css/css.md"},e=n(`<h1 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h1><h2 id="_1-覆盖" tabindex="-1">1. 覆盖 <a class="header-anchor" href="#_1-覆盖" aria-label="Permalink to &quot;1. 覆盖&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 1.没有访问过 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.aa:link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 2.访问过 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.aa:visited</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* visited接受的样式有限 */</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 3.鼠标覆盖在上面 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.aa:hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 4.鼠标按下不放开 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.aa:active</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{}</span></span></code></pre></div><h2 id="_2-position-定位" tabindex="-1">2. position 定位 <a class="header-anchor" href="#_2-position-定位" aria-label="Permalink to &quot;2. position    定位&quot;">​</a></h2><p>static 默认值，没有定位，正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列</p><p>absolute 相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定</p><p>relative 相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定</p><p>fixed 指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式</p><h2 id="_3-transition-过渡" tabindex="-1">3. transition 过渡 <a class="header-anchor" href="#_3-transition-过渡" aria-label="Permalink to &quot;3. transition    过渡&quot;">​</a></h2><p>元素从这个属性(color)的某个值(red)过渡到这个属性(color)的另外一个值(green)，</p><p>这是一个状态的转变，需要一种条件来触发这种转变，比如我们平时用到的:hoever、:focus、:checked、媒体查询或者JavaScript。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: property duration timing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>property 规定设置过渡效果的 CSS 属性的名称 duration 规定完成过渡效果需要多少秒或毫秒</p><p>timing-function 规定速度效果的速度曲线</p><p>delay 定义过渡效果何时开始</p><pre><code>                 持续时间  匀速   延迟
</code></pre><p>简写 transition：all 1s linear 2s</p><h2 id="_4-transform-旋转" tabindex="-1">4. transform 旋转 <a class="header-anchor" href="#_4-transform-旋转" aria-label="Permalink to &quot;4. transform 旋转&quot;">​</a></h2><p>旋转、缩放、移动或者倾斜 应用2D，3D转换，</p><p>translate位移 translate（x，y），translateX（），translateY（），translate3D（x,y,z）</p><p>rotate 旋转 rotate3D（x,y,z,角度）deg旋转角度单位，负数逆时针</p><p>scale 缩放 缩放基数为1， 大于1放大， 小于1缩小</p><p>skew [skjuː]倾斜 skey（x,y) skeyX() skeyY() 第一个水平扭转方向，第二个垂直扭转方向</p><h2 id="_5-animation-动画" tabindex="-1">5. animation：动画 <a class="header-anchor" href="#_5-animation-动画" aria-label="Permalink to &quot;5. animation：动画&quot;">​</a></h2><p>使用@keyframes，来定义关键帧，使用百分比来划分动画持续的时长，</p><p>简写 animation: name duration timing-function delay iteration-count direction play-state fill-mode;</p><p>name ： 用来调用@keyframes定义好的动画，与@keyframes定义的动画名称一致</p><p>duration ： 指定元素播放动画所持续的时间</p><p>timing-function ： 规定速度效果的速度曲线</p><p>delay ： 整个animation执行之前等待的时间</p><p>iteration-count ： 定义动画的播放次数，可选具体次数或者无限(infinite)</p><p>direction fill-mode ：设置动画播放方向：normal(按时间轴顺序),reverse(时间轴反方向运行),alternate(轮流，即来回往复进行),alternate-reverse(动画先反运行再正方向运行，并持续交替运行)</p><p>play-state ：控制元素动画的播放状态，通过此来控制动画的暂停和继续，两个值：running(继续)，paused(暂停)</p><p>fill-mode ： 控制动画结束后，元素的样式，有四个值：none(回到动画没开始时的状态)，forwards(动画结束后动画停留在结束状态)，backwords(动画回到第一帧的状态)，both(根据animation-direction轮流应用forwards和backwards规则)，注意与iteration-count不要冲突(动画执行无限次)</p><h2 id="_6-漂浮" tabindex="-1">6. 漂浮 <a class="header-anchor" href="#_6-漂浮" aria-label="Permalink to &quot;6. 漂浮&quot;">​</a></h2><p>float：left；</p><p>清除漂浮：clear：left</p><h2 id="_7-伪元素" tabindex="-1">7. 伪元素 <a class="header-anchor" href="#_7-伪元素" aria-label="Permalink to &quot;7. 伪元素&quot;">​</a></h2><p>一种在页面中可以看到 但是不在html文档内的内容</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::before{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: block;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* 可见性 隐藏 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: hidden;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::after{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_8-伪类选择器" tabindex="-1">8. 伪类选择器 <a class="header-anchor" href="#_8-伪类选择器" aria-label="Permalink to &quot;8. 伪类选择器&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.item:first</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">child{}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.list .item:nth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: red; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.list .item:last</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">child{}</span></span></code></pre></div><h2 id="_9-3d" tabindex="-1">9. 3d <a class="header-anchor" href="#_9-3d" aria-label="Permalink to &quot;9. 3d&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.wrap{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       /* 视距 */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       perspective</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 400px;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       /* 视点 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       perspective</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.stage{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       /* 保留子元素的3d效果 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       transform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: preserve</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3d;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>.</p>`,45),p=[e];function l(h,k,r,d,o,c){return a(),i("div",null,p)}const y=s(t,[["render",l]]);export{g as __pageData,y as default};