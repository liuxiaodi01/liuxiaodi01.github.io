(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{549:function(s,t,a){"use strict";a.r(t);var n=a(41),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"首先看下系统自带版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先看下系统自带版本"}},[s._v("#")]),s._v(" 首先看下系统自带版本")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("$PSVersionTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通常情况下自带的是 5.x 版本")]),s._v(" "),a("p",[a("img",{attrs:{src:"a6ef8e579529e68bbaa9ad15121f58a0.png",alt:"截图"}})]),s._v(" "),a("ol",[a("li",[s._v("访问官网安装最新的")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2",target:"_blank",rel:"noopener noreferrer"}},[s._v(" 下载 powershell-7.2"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("\t下载msi 文件安装即可。安装完成后，在 Windows Terminal 中设置成默认\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("安装美化模块")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装posh-git和oh-my-posh")]),s._v("\nInstall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Module posh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("git "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Scope CurrentUser\nInstall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Module oh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("posh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Scope CurrentUser\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用默认设置")]),s._v("\nSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Prompt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选中主题")]),s._v("\nSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("PoshPrompt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Theme Paradox\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用记事本打开PS配置文件（如无则创建该文件）")]),s._v("\nif ("),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!(Test-Path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Path $PROFILE )) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" New"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Type File "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Path $PROFILE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Force "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nnotepad $PROFILE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("随后，在打开的记事本窗口里添加以下内容然后保存。（仅对当前用户生效)")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[s._v("Import"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Module posh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("git\nImport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Module oh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("posh\nSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("PoshPrompt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Theme Paradox\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Themes")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看主题命令")]),s._v("\nGet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("PoshThemes\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置主题命令")]),s._v("\nSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("PoshPrompt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Theme\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置默认主题 将3的Set-Theme后面的名称更改为需要设置的主题即可")]),s._v("\nif ("),a("span",{pre:!0,attrs:{class:"token tag"}},[s._v("!(Test-Path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Path $PROFILE )) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" New"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Item "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Type File "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Path $PROFILE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("Force "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nnotepad $PROFILE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置主题字体乱码问题")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("乱码需要下载字体文件\n\n我下载的是作者推荐的字体文件Meslo\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);