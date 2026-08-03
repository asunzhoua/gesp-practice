// GESP multi-level helpers.
// Levels share one site; the kp code encodes the level (L1: kp01-08, L2+: kpN_XX).
const L1_LABELS = {
  kp01: '变量与数据类型', kp02: '基本运算', kp03: '输入输出',
  kp04: '条件语句', kp05: '循环语句', kp06: '数组基础',
  kp07: '字符与字符串', kp08: '函数基础'
};

// Add real module names for higher levels as their banks are written.
const LEVEL_NAMES = {
  2: {
    kp2_01: '指针与引用', kp2_02: '递归与递推', kp2_03: '排序算法',
    kp2_04: '字符串进阶', kp2_05: '结构体与类', kp2_06: '栈与队列',
    kp2_07: '树与图入门', kp2_08: '数学与位运算'
  }
};

function levelInt(v) {
  const n = parseInt(v, 10);
  return Number.isInteger(n) && n >= 1 && n <= 8 ? n : 1;
}

function kpName(kp, level) {
  if (level === 1) return L1_LABELS[kp] || kp;
  const m = LEVEL_NAMES[level] || {};
  return m[kp] || (level + '级·模块' + (String(kp).split('_')[1] || kp));
}

// SQL WHERE fragment restricting a query to one level's kp codes.
function kpWhere(level, alias) {
  const a = alias ? alias + '.' : '';
  if (level === 1) return a + "kp LIKE 'kp0%'";
  return a + "kp GLOB 'kp" + level + "_*'";
}

module.exports = { levelInt, kpName, kpWhere, L1_LABELS, LEVEL_NAMES };
