import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-a2aa737d.js";const e={},p=t(`<h2 id="节流函数" tabindex="-1"><a class="header-anchor" href="#节流函数" aria-hidden="true">#</a> 节流函数</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
* 频率控制，返回函数连续调用时，fn执行周期控制为delay/次
* <span class="token keyword">@param</span> <span class="token parameter">fn</span> <span class="token punctuation">{</span>function<span class="token punctuation">}</span> 需要调用的函数
* <span class="token keyword">@param</span> <span class="token parameter">delay</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 延迟时间，单位毫秒
* <span class="token keyword">@return</span> <span class="token punctuation">{</span>function<span class="token punctuation">}</span> 实际调用函数
*/</span>
<span class="token function">throttle</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> last <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">-</span> last<span class="token punctuation">)</span> <span class="token operator">&gt;</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>
          last <span class="token operator">=</span> cur
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="去抖函数" tabindex="-1"><a class="header-anchor" href="#去抖函数" aria-hidden="true">#</a> 去抖函数</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
* 空闲控制，返回函数连续调用时，空闲时间必须大于等于delay才会执行fn
* <span class="token keyword">@param</span> <span class="token parameter">fn</span> <span class="token punctuation">{</span>function<span class="token punctuation">}</span> 需要调用的函数
* <span class="token keyword">@param</span> <span class="token parameter">delay</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 空闲时间，单位毫秒
* <span class="token keyword">@return</span> <span class="token punctuation">{</span>function<span class="token punctuation">}</span> 实际调用函数
*/</span>
<span class="token function">debounce</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","throttle-debounce.html.vue"]]);export{d as default};
