"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[359],{8527:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5bd9f006",path:"/docs/configuration/authentifications/jwt.html",title:"JWT",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/authentifications/jwt.md",git:{updatedTime:1638817966e3,contributors:[{name:"txs4444",email:"47295978+txs4444@users.noreply.github.com",commits:1}]}}},1150:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h1><p>AKHQ uses JWT tokens to perform authentication. Please generate a secret that is at least 256 bits and change the config like this:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">micronaut</span><span class="token punctuation">:</span>\n  <span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n    <span class="token key atrule">token</span><span class="token punctuation">:</span>\n      <span class="token key atrule">jwt</span><span class="token punctuation">:</span>\n        <span class="token key atrule">signatures</span><span class="token punctuation">:</span>\n          <span class="token key atrule">secret</span><span class="token punctuation">:</span>\n            <span class="token key atrule">generator</span><span class="token punctuation">:</span>\n              <span class="token key atrule">secret</span><span class="token punctuation">:</span> &lt;Your secret here<span class="token punctuation">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',3),t={},p=(0,a(3744).Z)(t,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);