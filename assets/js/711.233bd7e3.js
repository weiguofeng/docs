(window.webpackJsonp=window.webpackJsonp||[]).push([[711],{8258:function(s,a,n){"use strict";n.r(a);var t=n(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_2二维数组查找和替换空格问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2二维数组查找和替换空格问题"}},[s._v("#")]),s._v(" 2二维数组查找和替换空格问题")]),s._v(" "),n("h3",{attrs:{id:"一-二维数组查找"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-二维数组查找"}},[s._v("#")]),s._v(" 一  二维数组查找")]),s._v(" "),n("h4",{attrs:{id:"题目描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" "),n("strong",[s._v("题目描述：")])]),s._v(" "),n("p",[s._v("在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。")]),s._v(" "),n("h4",{attrs:{id:"问题解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题解析"}},[s._v("#")]),s._v(" "),n("strong",[s._v("问题解析：")])]),s._v(" "),n("p",[s._v("这一道题还是比较简单的，我们需要考虑的是如何做，效率最快。这里有一种很好理解的思路：")]),s._v(" "),n("blockquote",[n("p",[s._v("矩阵是有序的，从左下角来看，向上数字递减，向右数字递增，\n因此从左下角开始查找，当要查找数字比左下角数字大时。右移\n要查找数字比左下角数字小时，上移。这样找的速度最快。")])]),s._v(" "),n("h4",{attrs:{id:"示例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[s._v("#")]),s._v(" "),n("strong",[s._v("示例代码：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("    public boolean Find(int target, int [][] array) {\n        //基本思路从左下角开始找，这样速度最快\n       int row = array.length-1;//行\n        int column = 0;//列\n        //当行数大于0，当前列数小于总列数时循环条件成立\n        while((row >= 0)&& (column< array[0].length)){\n            if(array[row][column] > target){\n                row--;\n            }else if(array[row][column] < target){\n               column++;\n            }else{\n                return true;\n            }\n        }\n        return false;\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h3",{attrs:{id:"二-替换空格"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-替换空格"}},[s._v("#")]),s._v(" 二 替换空格")]),s._v(" "),n("h4",{attrs:{id:"题目描述-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#题目描述-2"}},[s._v("#")]),s._v(" "),n("strong",[s._v("题目描述：")])]),s._v(" "),n("p",[s._v("请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。")]),s._v(" "),n("h4",{attrs:{id:"问题分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[s._v("#")]),s._v(" "),n("strong",[s._v("问题分析：")])]),s._v(" "),n("p",[s._v("这道题不难，我们可以通过循环判断字符串的字符是否为空格，是的话就利用append()方法添加追加“%20”，否则还是追加原字符。")]),s._v(" "),n("p",[s._v("或者最简单的方法就是利用： replaceAll(String regex,String replacement)方法了，一行代码就可以解决。")]),s._v(" "),n("h4",{attrs:{id:"示例代码-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例代码-2"}},[s._v("#")]),s._v(" "),n("strong",[s._v("示例代码：")])]),s._v(" "),n("p",[n("strong",[s._v("常规做法：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public String replaceSpace(StringBuffer str) {\n        StringBuffer out=new StringBuffer();\n        for (int i = 0; i < str.toString().length(); i++) {\n            char b=str.charAt(i);\n            if(String.valueOf(b).equals(" ")){\n                out.append("%20");\n            }else{\n                out.append(b);\n            }\n        }\n        return out.toString();     \n    }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("一行代码解决：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    public String replaceSpace(StringBuffer str) {\n        //return str.toString().replaceAll(" ", "%20");\n        //public String replaceAll(String regex,String replacement)\n        //用给定的替换替换与给定的regular expression匹配的此字符串的每个子字符串。 \n        //\\ 转义字符. 如果你要使用 "\\" 本身, 则应该使用 "\\\\". String类型中的空格用“\\s”表示，所以我这里猜测"\\\\s"就是代表空格的意思\n        return str.toString().replaceAll("\\\\s", "%20");\n    }\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);