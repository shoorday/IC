(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{187:function(e,t,a){"use strict";a.r(t);var s=a(6),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[e._v("#")]),e._v(" 部署")]),e._v(" "),a("p",[e._v("生产环境下的部署就是Django的部署和Vue的部署，步骤如下：")]),e._v(" "),a("h2",{attrs:{id:"后端（django）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端（django）"}},[e._v("#")]),e._v(" 后端（Django）")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("生产环境变量")]),e._v(" "),a("p",[e._v("设置"),a("code",[e._v("SITE_ENV")]),e._v("为"),a("code",[e._v("production")]),e._v("，确保运行在生产环境下")])]),e._v(" "),a("li",[a("p",[e._v("生产环境配置")]),e._v(" "),a("p",[a("code",[e._v("ic/settings/prod.py")]),e._v("和"),a("code",[e._v("ic/settings/base.py")]),e._v("中")]),e._v(" "),a("ul",[a("li",[a("strong",[a("code",[e._v("SECRET_KEY")])]),e._v("，十分重要，安全密钥")]),e._v(" "),a("li",[a("code",[e._v("ALLOWED_HOSTS")]),e._v("，添加网站域名")]),e._v(" "),a("li",[e._v("使用生产数据库，生产环境下不建议使用Sqlite3，推荐PostgreSQL，见"),a("a",{attrs:{href:"https://docs.djangoproject.com/en/3.0/ref/settings/#std:setting-DATABASES",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django文档配置文件下DATABASE一节"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[a("p",[e._v("静态资源收集")])])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("python manage.py collectstatic\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("代理服务器")]),e._v(" "),a("p",[e._v("推荐Nginx+uWSGI，见文档部署参考一节，或参考"),a("a",{attrs:{href:"https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/uwsgi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Django的部署文档"),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("邮箱验证服务\n需开启Redis服务并在配置文件中配置Redis服务器，默认配置本地6371端口无密码Redis数据库，然后运行")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("celery -A tasks worker --loglevel"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("info\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[e._v("#")]),e._v(" 前端")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("修改配置文件")]),e._v(" "),a("p",[a("code",[e._v(".env.production")]),e._v("中，修改后端地址"),a("code",[e._v("VUE_APP_BACK_URL")]),e._v("和前端地址"),a("code",[e._v("VUE_APP_FRONT_URL")])])]),e._v(" "),a("li",[a("p",[e._v("Build")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd front\nnpm run build\n")])])]),a("ul",[a("li",[e._v("默认使用了第三方CDN，注意高可靠性的话可以使用自己的CDN")]),e._v(" "),a("li",[e._v("默认生成了Gzip，Nginx可以利用")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("代理服务器\n推荐使用Nginx，见文档部署参考一节，或参考"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/deployment.html#ad",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue的部署文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);