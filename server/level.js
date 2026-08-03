// GESP multi-level helpers — module names follow the official GESP syllabus
// (GESP考级大纲.pdf). kp code encodes level: kp{level}_{index}.
// e.g. L1: kp1_01..kp1_08, L2: kp2_01..kp2_08, L4: kp4_01..kp4_12 ...
const LEVEL_NAMES = {
  1: {
    kp1_01: '计算机基础知识', kp1_02: '集成开发环境', kp1_03: '程序的基本语句',
    kp1_04: '分支结构', kp1_05: '循环结构', kp1_06: '程序的基本概念',
    kp1_07: '基本运算', kp1_08: '基本数据类型'
  },
  2: {
    kp2_01: '计算机存储与网络', kp2_02: '程序设计语言', kp2_03: '流程图',
    kp2_04: 'ASCII编码', kp2_05: '数据类型转换', kp2_06: '多层分支结构',
    kp2_07: '多层循环语句', kp2_08: '数学函数'
  },
  3: {
    kp3_01: '数据编码与进制转换', kp3_02: '位运算', kp3_03: '算法的概念与描述',
    kp3_04: '一维数组', kp3_05: '字符串及函数', kp3_06: '枚举法', kp3_07: '模拟法'
  },
  4: {
    kp4_01: '函数', kp4_02: '形参实参与作用域', kp4_03: '指针', kp4_04: '函数参数传递',
    kp4_05: '结构体', kp4_06: '二维及多维数组', kp4_07: '递推', kp4_08: '排序概念',
    kp4_09: '排序算法', kp4_10: '算法复杂度', kp4_11: '文件读写', kp4_12: '异常处理'
  },
  5: {
    kp5_01: '初等数论', kp5_02: '高精度运算', kp5_03: '链表', kp5_04: '辗转相除法',
    kp5_05: '素数筛法', kp5_06: '唯一分解定理', kp5_07: '二分查找', kp5_08: '贪心算法',
    kp5_09: '分治算法', kp5_10: '递归', kp5_11: '算法复杂度'
  },
  6: {
    kp6_01: '树的定义与遍历', kp6_02: '哈夫曼树', kp6_03: '完全二叉树',
    kp6_04: '二叉排序树', kp6_05: '哈夫曼编码', kp6_06: '格雷编码', kp6_07: '深度优先搜索',
    kp6_08: '宽度优先搜索', kp6_09: '二叉树搜索', kp6_10: '简单动态规划',
    kp6_11: '面向对象思想', kp6_12: '类', kp6_13: '栈、队列、循环队列'
  },
  7: {
    kp7_01: '数学库函数', kp7_02: '复杂动态规划', kp7_03: '图的定义及遍历',
    kp7_04: '图论基本算法', kp7_05: '哈希表'
  },
  8: {
    kp8_01: '计数原理', kp8_02: '排列与组合', kp8_03: '杨辉三角', kp8_04: '倍增法',
    kp8_05: '代数与平面几何', kp8_06: '图论算法综合', kp8_07: '算法优化'
  }
};

function levelInt(v) {
  const n = parseInt(v, 10);
  return Number.isInteger(n) && n >= 1 && n <= 8 ? n : 1;
}

function kpName(kp, level) {
  const m = LEVEL_NAMES[level] || {};
  return m[kp] || (level + '级·模块' + (String(kp).split('_')[1] || kp));
}

// SQL WHERE fragment restricting a query to one level's kp codes.
function kpWhere(level, alias) {
  const a = alias ? alias + '.' : '';
  return a + "kp GLOB 'kp" + level + "_*'";
}

// Official kp code list for a level (variable length per level).
function levelKps(level) {
  const m = LEVEL_NAMES[level] || {};
  return Object.keys(m);
}

module.exports = { levelInt, kpName, kpWhere, levelKps, LEVEL_NAMES };
