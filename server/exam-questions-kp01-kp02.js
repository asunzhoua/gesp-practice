/**
 * GESP 一级 补充题库 - kp01 变量与数据类型 & kp02 基本运算
 * 每个知识点 35 题：25 选择 + 5 判断 + 5 编程
 * IDs: q16-q50 (q01-q15 已在主题库中)
 */
module.exports = {
  kp01: [
    // ==================== 选择题 q16-q40 (25题) ====================

    // --- 简单 d1 (7题) ---
    {
      id: "kp01_q16", type: "choice", difficulty: 1,
      question: "以下哪个是合法的 C++ 变量名？",
      options: ["3name", "my-var", "class", "student_age"],
      answer: 3,
      explanation: "变量名不能以数字开头(排除A)，不能包含连字符(排除B)，不能是关键字(排除C)。student_age只含字母和下划线，是合法的变量名。"
    },
    {
      id: "kp01_q17", type: "choice", difficulty: 1,
      question: "sizeof(float) 的值是多少？",
      options: ["1", "2", "4", "8"],
      answer: 2,
      explanation: "float 是单精度浮点数，在大多数系统中占 4 个字节。"
    },
    {
      id: "kp01_q18", type: "choice", difficulty: 1,
      question: "以下哪个是 C++ 的关键字？",
      options: ["printf", "cin", "void", "endl"],
      answer: 2,
      explanation: "void 是 C++ 关键字，用于表示无返回值。printf 是标准库函数，cin 是标准输入对象，endl 是输出操纵符。", source: "2025_03"
    },
    {
      id: "kp01_q19", type: "choice", difficulty: 1,
      question: "在 C++ 中，字符 'A' 的 ASCII 码值是？",
      options: ["48", "65", "97", "128"],
      answer: 1,
      explanation: "'A' 的 ASCII 码是 65。'a' 的 ASCII 码是 97，'0' 的 ASCII 码是 48。"
    },
    {
      id: "kp01_q20", type: "choice", difficulty: 1,
      question: "以下哪种方式可以正确定义并初始化一个 bool 变量？",
      options: ["bool b = 2;", "bool b = \"yes\";", "bool b = true;", "bool b = 1.5;"],
      answer: 2,
      explanation: "bool 类型只能存储 true 或 false。直接赋值 true 是最正确的写法。"
    },
    {
      id: "kp01_q24", type: "choice", difficulty: 1,
      question: "代码 char c = 65; 执行后，cout &lt;&lt; c; 输出的是？",
      options: ["65", "A", "a", "编译错误"],
      answer: 1,
      explanation: "ASCII 码 65 对应字符 'A'。char 变量存储 ASCII 码值，输出时显示对应字符。", source: "2023_12"
    },
    {
      id: "kp01_q25", type: "choice", difficulty: 1,
      question: "以下代码执行后，a 的类型是？\n<pre><code>auto a = 10;</code></pre>",
      options: ["double", "int", "float", "long"],
      answer: 1,
      explanation: "auto 关键字让编译器自动推导类型。10 是 int 字面量，所以 a 被推导为 int 类型。"
    },

    // --- 中等 d2 (10题) ---
    {
      id: "kp01_q21", type: "choice", difficulty: 2,
      question: "以下哪个变量名是不合法的？",
      options: ["_total", "MAX_SIZE", "count2", "2ndValue"],
      answer: 3,
      explanation: "变量名不能以数字开头，2ndValue 以数字 2 开头，不合法。其他三个都只含字母、数字和下划线。"
    },
    {
      id: "kp01_q22", type: "choice", difficulty: 2,
      question: "执行代码 double d = 5 / 2; 后，d 的值是？",
      options: ["2.5", "2", "2.0", "3"],
      answer: 1,
      explanation: "5 / 2 是两个 int 相除，结果为整数 2（截断小数部分）。虽然 d 是 double 类型，但赋值时已经是整数 2。"
    },
    {
      id: "kp01_q23", type: "choice", difficulty: 2,
      question: "以下关于 const 的描述，正确的是？",
      options: ["const 变量可以不初始化", "const 变量初始化后不能修改", "const 只能用于 int 类型", "const 变量占用更多内存"],
      answer: 1,
      explanation: "const 修饰的变量为常量，初始化后其值不能被修改。const 可以用于任何类型。"
    },
    {
      id: "kp01_q26", type: "choice", difficulty: 2,
      question: "以下哪个不是 C++ 的关键字？",
      options: ["break", "continue", "switch", "printf"],
      answer: 3,
      explanation: "printf 是 C 标准库函数，不是 C++ 关键字。break、continue、switch 都是 C++ 关键字。"
    },
    {
      id: "kp01_q27", type: "choice", difficulty: 2,
      question: "表达式 sizeof(3.14) 的值是？",
      options: ["1", "4", "8", "取决于变量类型"],
      answer: 2,
      explanation: "3.14 是 double 字面量（C++ 中默认），double 占 8 字节。"
    },
    {
      id: "kp01_q28", type: "choice", difficulty: 2,
      question: "定义 int x = 3.9; 后，x 的值是？",
      options: ["3.9", "3", "4", "编译错误"],
      answer: 1,
      explanation: "将浮点数赋值给整型变量时，小数部分被截断（不是四舍五入），所以 x = 3。", source: "2023_12"
    },
    {
      id: "kp01_q29", type: "choice", difficulty: 2,
      question: "在 C++ 中，变量名 max_count 是合法的，而 max-count 不合法的原因是？",
      options: ["max_count 太长了", "max-count 中包含连字符", "max-count 是关键字", "max_count 包含下划线不合法"],
      answer: 1,
      explanation: "C++ 变量名只能包含字母、数字和下划线，不能包含连字符（-）。"
    },
    {
      id: "kp01_q30", type: "choice", difficulty: 2,
      question: "以下代码执行后 result 的值是？\n<pre><code>int a = 10;\ndouble b = 3.0;\nauto result = a / b;</code></pre>",
      options: ["3", "3.0", "3.33333", "编译错误"],
      answer: 2,
      explanation: "int 除以 double 时，int 自动提升为 double，结果为 double 类型（3.333...）。"
    },
    {
      id: "kp01_q31", type: "choice", difficulty: 2,
      question: "以下哪个字面量的类型是 float？",
      options: ["3.14", "3.14f", "'A'", "100"],
      answer: 1,
      explanation: "3.14 默认是 double 类型。加 f 后缀 3.14f 才是 float 类型。'A' 是 char，100 是 int。"
    },
    {
      id: "kp01_q32", type: "choice", difficulty: 2,
      question: "执行以下代码后，ch 的值是什么？\n<pre><code>char ch = 'A' + 1;\n</code></pre>",
      options: ["A", "B", "65", "编译错误"],
      answer: 1,
      explanation: "'A' 的 ASCII 码是 65，65 + 1 = 66，对应字符 'B'。"
    },

    // --- 困难 d3 (8题) ---
    {
      id: "kp01_q33", type: "choice", difficulty: 3,
      question: "以下代码的输出是什么？\n<pre><code>bool a = true;\nbool b = false;\nint c = a + b + 2.5;\ncout &lt;&lt; c;</code></pre>",
      options: ["3.5", "4", "3", "2"],
      answer: 2,
      explanation: "true 值为 1，false 值为 0，1 + 0 + 2.5 = 3.5，赋值给 int 时截断为 3。"
    },
    {
      id: "kp01_q34", type: "choice", difficulty: 3,
      question: "以下代码执行后，输出是什么？\n<pre><code>int a = 10, b = 3;\nint c = a / b + a % b;\nint d = a * b + c;\ncout &lt;&lt; c &lt;&lt; \",\" &lt;&lt; d;</code></pre>",
      options: ["4,34", "3,33", "4,33", "3,34"],
      answer: 0,
      explanation: "c = 10/3 + 10%3 = 3 + 1 = 4。d = 10*3 + 4 = 34。输出 4,34。"
    },
    {
      id: "kp01_q35", type: "choice", difficulty: 3,
      question: "以下代码执行后，a 和 b 的值分别是？\n<pre><code>int a = 5;\nint b = 2;\na = a / b * b;\nb = a % b;</code></pre>",
      options: ["a=5, b=1", "a=4, b=0", "a=5, b=0", "a=4, b=1"],
      answer: 1,
      explanation: "a = 5/2*2 = 2*2 = 4（整数除法先得 2）。b = 4%2 = 0。"
    },
    {
      id: "kp01_q36", type: "choice", difficulty: 3,
      question: "以下代码执行后输出？\n<pre><code>char a = 'A';\nint b = a + 1;\nchar c = b;\ncout &lt;&lt; a &lt;&lt; b &lt;&lt; c;</code></pre>",
      options: ["A66B", "A 66 B", "656666", "A65B"],
      answer: 0,
      explanation: "a = 'A'(65)，b = 65 + 1 = 66，c = (char)66 = 'B'。输出 a('A') b(66) c('B') 即 A66B。"
    },
    {
      id: "kp01_q37", type: "choice", difficulty: 3,
      question: "以下哪种声明方式在 C++11 中不合法？",
      options: ["int x = {10};", "int x = {10, 20};", "int x(10);", "int x = 10;"],
      answer: 1,
      explanation: "列表初始化 {} 中给单个 int 变量提供多个值是不合法的。其他三种都是合法的初始化方式。"
    },
    {
      id: "kp01_q38", type: "choice", difficulty: 3,
      question: "以下代码的输出是什么？\n<pre><code>int a = 256;\nchar b = a;\ncout &lt;&lt; (int)b;</code></pre>",
      options: ["256", "0", "128", "编译错误"],
      answer: 1,
      explanation: "char 只有 1 字节（范围 -128~127），256 超出范围发生溢出。256 的二进制是 100000000，截取低 8 位为 00000000，所以 b = 0。"
    },
    {
      id: "kp01_q39", type: "choice", difficulty: 3,
      question: "在 C++ 中，以下哪个表达式的类型是 double？",
      options: ["3 * 2", "3 / 2", "3 * 2.0", "3 % 2"],
      answer: 2,
      explanation: "3 是 int，2.0 是 double。int 与 double 运算时 int 自动提升为 double，结果为 double。其他三个表达式结果都是 int。"
    },
    {
      id: "kp01_q40", type: "choice", difficulty: 3,
      question: "以下代码执行后，c 和 d 的值分别是？\n<pre><code>int a = 10, b = 3;\nfloat c = a / b;\nfloat d = (float)a / b;</code></pre>",
      options: ["c=3.33, d=3.33", "c=3.0, d=3.33", "c=3.33, d=3.0", "c=3, d=3"],
      answer: 1,
      explanation: "a/b 是 int 除法得 3，赋给 float c 得 3.0。(float)a/b 中 a 先转为 float，结果为浮点除法得 3.33...。"
    },

    // ==================== 判断题 q41-q45 (5题) ====================
    {
      id: "kp01_q41", type: "choice", difficulty: 1,
      question: "在 C++ 中，sizeof(int) 的值一定是 4。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "sizeof(int) 的值取决于编译器和平台。在大多数 32 位和 64 位系统上是 4，但 C++ 标准并未规定具体值。"
    },
    {
      id: "kp01_q42", type: "choice", difficulty: 2,
      question: "C++ 语句 int a = 3.7; 执行后，a 的值为 3。",
      options: ["正确", "错误"], answer: 0, isJudge: true,
      explanation: "将浮点数赋给整型变量时，小数部分被截断（不是四舍五入），3.7 截断为 3。", source: "2023_12"
    },
    {
      id: "kp01_q43", type: "choice", difficulty: 2,
      question: "C++ 中变量名 class 是合法的，因为 class 不是关键字。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "class 是 C++ 的关键字（用于定义类），不能作为变量名使用。"
    },
    {
      id: "kp01_q44", type: "choice", difficulty: 2,
      question: "字符变量 char c = '0'; 中，c 的 ASCII 码值是 0。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "字符 '0' 的 ASCII 码是 48，不是 0。ASCII 码 0 对应的是空字符 '\\0'。"
    },
    {
      id: "kp01_q45", type: "choice", difficulty: 3,
      question: "C++ 中定义 const int N = 10; 后，可以执行 N = 20; 修改 N 的值。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "const 修饰的变量为常量，初始化后不能修改其值。N = 20 会导致编译错误。"
    },

    // ==================== 编程题 q46-q50 (5题) ====================
    {
      id: "kp01_q46", type: "coding", difficulty: 1,
      question: "编写程序，定义两个 int 变量 a=15 和 b=4，输出它们的商（整数除法）和余数，每行一个结果。\n<p>预期输出：</p>\n<pre><code>3\n3</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 4;\n    // 输出商和余数\n    \n    return 0;\n}",
      testCases: [{ input: "", expectedOutput: "3\n3", description: "15/4=3, 15%4=3" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 15, b = 4;\n    cout << a / b << endl;\n    cout << a % b << endl;\n    return 0;\n}",
      explanation: "使用 / 运算符得到整数商，% 运算符得到余数。"
    },
    {
      id: "kp01_q47", type: "coding", difficulty: 2,
      question: "编写程序，定义一个 char 变量 ch = 'A'，然后依次输出：ch 的字符、ch 的 ASCII 码值（用 int 强制转换）、ch + 32 对应的字符。\n<p>预期输出：</p>\n<pre><code>A\n65\na</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch = 'A';\n    // 输出字符、ASCII码值、+32后的字符\n    \n    return 0;\n}",
      testCases: [{ input: "", expectedOutput: "A\n65\na", description: "A 的 ASCII 码 65，+32 得 97 即 a" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch = 'A';\n    cout << ch << endl;\n    cout << (int)ch << endl;\n    cout << (char)(ch + 32) << endl;\n    return 0;\n}",
      explanation: "字符和 ASCII 码可以互相转换。'A' = 65，+32 = 97 = 'a'。大写字母 +32 就是对应小写。"
    },
    {
      id: "kp01_q48", type: "coding", difficulty: 2,
      question: "编写程序，定义两个 int 变量 a = 10, b = 20，然后交换它们的值，最后输出 a 和 b（空格分隔）。\n<p>预期输出：</p>\n<pre><code>20 10</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    // 交换a和b的值\n    \n    cout << a << \" \" << b << endl;\n    return 0;\n}",
      testCases: [{ input: "", expectedOutput: "20 10", description: "交换后 a=20, b=10" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 20;\n    int t = a;\n    a = b;\n    b = t;\n    cout << a << \" \" << b << endl;\n    return 0;\n}",
      explanation: "使用临时变量 t 保存 a 的值，然后将 b 赋给 a，最后将 t 赋给 b，完成交换。"
    },
    {
      id: "kp01_q49", type: "coding", difficulty: 2,
      question: "编写程序，输入一个整数 n，如果 n 在 int 范围内（约 -21 亿到 21 亿）输出 \"safe\"，否则输出 \"overflow\"。\n<p>提示：可以用 long long 类型读入，然后判断范围。</p>\n<p>测试输入：<code>100</code></p>\n<p>预期输出：<code>safe</code></p>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    cin >> n;\n    // 判断是否在int范围内\n    \n    return 0;\n}",
      testCases: [
        { input: "100", expectedOutput: "safe", description: "100 在 int 范围内" },
        { input: "3000000000", expectedOutput: "overflow", description: "超出 int 范围" }
      ],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    long long n;\n    cin >> n;\n    if (n >= -2147483648LL && n <= 2147483647LL)\n        cout << \"safe\" << endl;\n    else\n        cout << \"overflow\" << endl;\n    return 0;\n}",
      explanation: "int 的范围是 -2147483648 到 2147483647。先用 long long 读入避免溢出，再与范围比较。"
    },
    {
      id: "kp01_q50", type: "coding", difficulty: 3,
      question: "编写程序，输入一个字符 ch，如果是小写字母则转大写输出，如果是大写字母则转小写输出，非字母则原样输出。\n<p>提示：大写字母 ASCII 码比对应小写字母小 32。</p>\n<p>测试输入：<code>a</code></p>\n<p>预期输出：<code>A</code></p>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ch;\n    // 大小写转换\n    \n    return 0;\n}",
      testCases: [
        { input: "a", expectedOutput: "A", description: "小写转大写" },
        { input: "B", expectedOutput: "b", description: "大写转小写" },
        { input: "5", expectedOutput: "5", description: "非字母原样输出" }
      ],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    char ch;\n    cin >> ch;\n    if (ch >= 'a' && ch <= 'z')\n        cout << (char)(ch - 32) << endl;\n    else if (ch >= 'A' && ch <= 'Z')\n        cout << (char)(ch + 32) << endl;\n    else\n        cout << ch << endl;\n    return 0;\n}",
      explanation: "利用 ASCII 码规律：大写 +32 得小写，小写 -32 得大写。先判断范围再转换。"
    }
  ],

  kp02: [
    // ==================== 选择题 q16-q40 (25题) ====================

    // --- 简单 d1 (7题) ---
    {
      id: "kp02_q16", type: "choice", difficulty: 1,
      question: "表达式 8 + 2 * 3 的值是？",
      options: ["30", "26", "14", "24"],
      answer: 2,
      explanation: "乘法优先级高于加法，先算 2*3=6，再算 8+6=14。"
    },
    {
      id: "kp02_q17", type: "choice", difficulty: 1,
      question: "表达式 17 % 5 的值是？",
      options: ["3", "2", "5", "3.4"],
      answer: 1,
      explanation: "% 是取余运算符，17 ÷ 5 = 3 余 2，所以 17 % 5 = 2。"
    },
    {
      id: "kp02_q18", type: "choice", difficulty: 1,
      question: "C++ 表达式 2 > 3 的结果是？",
      options: ["true", "false", "1", "编译错误"],
      answer: 1,
      explanation: "2 大于 3 为假，比较结果为 false。"
    },
    {
      id: "kp02_q19", type: "choice", difficulty: 1,
      question: "表达式 !true 的结果是？",
      options: ["true", "false", "1", "0"],
      answer: 1,
      explanation: "! 是逻辑非运算符，!true = false。"
    },
    {
      id: "kp02_q20", type: "choice", difficulty: 1,
      question: "C++ 中表达式 5 / 2 的结果是？",
      options: ["2.5", "2", "3", "2.0"],
      answer: 1,
      explanation: "两个整数相除结果为整数，小数部分截断。5 / 2 = 2。"
    },
    {
      id: "kp02_q25", type: "choice", difficulty: 1,
      question: "表达式 1 && 0 || 1 的值是？",
      options: ["0", "1", "2", "编译错误"],
      answer: 1,
      explanation: "&& 优先级高于 ||。1 && 0 = 0，0 || 1 = 1。逻辑运算结果为 0 或 1。"
    },
    {
      id: "kp02_q31", type: "choice", difficulty: 1,
      question: "C++ 表达式 10 > 5 ? 2 : 8 的值是？",
      options: ["10", "5", "2", "8"],
      answer: 2,
      explanation: "三目运算符：10 > 5 为 true，取第一个值 2。"
    },

    // --- 中等 d2 (10题) ---
    {
      id: "kp02_q21", type: "choice", difficulty: 2,
      question: "C++ 表达式 5 + 3 * 2 - 8 / 4 的值是？",
      options: ["9", "7", "1", "5"],
      answer: 0,
      explanation: "先乘除：3*2=6, 8/4=2。再加减：5+6-2=9。"
    },
    {
      id: "kp02_q22", type: "choice", difficulty: 2,
      question: "表达式 10 / 3 * 3 的值是？",
      options: ["10", "9", "3.33", "30"],
      answer: 1,
      explanation: "从左到右计算（/ 和 * 优先级相同）：10/3=3（整数除法），3*3=9。", source: "2024_06"
    },
    {
      id: "kp02_q23", type: "choice", difficulty: 2,
      question: "以下代码的输出是什么？\n<pre><code>int N = 7;\nprintf(\"%d/3=%d\", N, N / 3);</code></pre>",
      options: ["7/3=2", "7/3=2.33", "7/3=3", "2/2"],
      answer: 0,
      explanation: "printf 中 %d 格式化整数，N=7, N/3=2（整数除法）。输出 7/3=2。"
    },
    {
      id: "kp02_q24", type: "choice", difficulty: 2,
      question: "N = 15，则 cout &lt;&lt; (N % 4 + N / 4) 的输出是？",
      options: ["6", "7", "3", "4"],
      answer: 0,
      explanation: "N%4 = 15%4 = 3，N/4 = 15/4 = 3（整数除法截断），3+3 = 6。", source: "2025_03"
    },
    {
      id: "kp02_q26", type: "choice", difficulty: 2,
      question: "表达式 3 * (2 + 1) % 4 的值是？",
      options: ["1", "3", "9", "0"],
      answer: 0,
      explanation: "先算括号 (2+1)=3，再算乘法 3*3=9，最后取余 9%4=1。"
    },
    {
      id: "kp02_q27", type: "choice", difficulty: 2,
      question: "表达式 0 || 5 的值是？",
      options: ["0", "5", "1", "true"],
      answer: 2,
      explanation: "逻辑或：0 为 false，5 为 true（非零），false || true = true，逻辑运算结果为 1。"
    },
    {
      id: "kp02_q28", type: "choice", difficulty: 2,
      question: "表达式 3 && 4 && 0 的值是？",
      options: ["3", "4", "0", "1"],
      answer: 2,
      explanation: "逻辑与：3(真) && 4(真) = 真(1)，1 && 0 = 0。只要有一个为 0 结果就是 0。"
    },
    {
      id: "kp02_q29", type: "choice", difficulty: 2,
      question: "C++ 表达式 (1, 2, 3) 的值是？",
      options: ["1", "2", "3", "6"],
      answer: 2,
      explanation: "逗号运算符从左到右计算，返回最右边表达式的值。所以 (1, 2, 3) = 3。"
    },
    {
      id: "kp02_q30", type: "choice", difficulty: 2,
      question: "以下代码执行后 a 的值是？\n<pre><code>int a = 5;\na *= 2 + 3;</code></pre>",
      options: ["13", "25", "10", "16"],
      answer: 1,
      explanation: "a *= 2+3 等价于 a = a * (2+3) = 5 * 5 = 25。复合赋值符右边先算完再与左边运算。"
    },
    {
      id: "kp02_q32", type: "choice", difficulty: 2,
      question: "N = 20，则 cout &lt;&lt; (N / 7 + N % 7) 的输出是？",
      options: ["8", "4", "5", "6"],
      answer: 0,
      explanation: "N/7 = 20/7 = 2（整数除法），N%7 = 20%7 = 6，2+6 = 8。", source: "2024_12"
    },

    // --- 困难 d3 (8题) ---
    {
      id: "kp02_q33", type: "choice", difficulty: 3,
      question: "表达式 2 + 3 * 4 - 5 / 5 的值是？",
      options: ["13", "9", "11", "15"],
      answer: 0,
      explanation: "先乘除：3*4=12, 5/5=1。再加减：2+12-1=13。"
    },
    {
      id: "kp02_q34", type: "choice", difficulty: 3,
      question: "表达式 (7 + 3) % 4 * 2 的值是？",
      options: ["0", "4", "8", "20"],
      answer: 1,
      explanation: "先算括号 (7+3)=10。% 和 * 优先级相同，从左到右：10%4=2，2*2=4。"
    },
    {
      id: "kp02_q35", type: "choice", difficulty: 3,
      question: "表达式 12 / 3 * 2 + 5 % 3 的值是？",
      options: ["10", "3", "13", "9"],
      answer: 0,
      explanation: "从左到右：12/3=4, 4*2=8, 5%3=2, 8+2=10。"
    },
    {
      id: "kp02_q36", type: "choice", difficulty: 3,
      question: "以下代码执行后输出？\n<pre><code>int a = 1, b = 2, c = 3;\nint x = a > b ? a : b > c ? b : c;\ncout &lt;&lt; x;</code></pre>",
      options: ["1", "2", "3", "编译错误"],
      answer: 2,
      explanation: "第一个三目：1>2 为 false，取 b=2。第二个三目（嵌套在 else 中）：2>3 为 false，取 c=3。x=3。"
    },
    {
      id: "kp02_q37", type: "choice", difficulty: 3,
      question: "表达式 true + true * false || true 的值是？",
      options: ["true", "false", "1", "2"],
      answer: 2,
      explanation: "先乘法：true*false = 1*0 = 0。再加法：true+0 = 1+0 = 1。最后逻辑或：1||true = 1。"
    },
    {
      id: "kp02_q38", type: "choice", difficulty: 3,
      question: "以下表达式的值是？\n<pre><code>2 * 3 + 4 / 2 - 1</code></pre>",
      options: ["7", "8", "9", "10"],
      answer: 0,
      explanation: "先乘除：2*3=6, 4/2=2。再加减：6+2-1=7。"
    },
    {
      id: "kp02_q39", type: "choice", difficulty: 3,
      question: "N = 50，则 cout &lt;&lt; (N / 9 + N % 9) 的输出是？",
      options: ["10", "14", "5", "56"],
      answer: 0,
      explanation: "N/9 = 50/9 = 5（整数除法），N%9 = 50%9 = 5（50 = 5*9 + 5），5+5 = 10。"
    },
    {
      id: "kp02_q40", type: "choice", difficulty: 3,
      question: "以下表达式的值是？\n<pre><code>10 - 2 * (3 + 1) % 5</code></pre>",
      options: ["2", "4", "6", "7"],
      answer: 3,
      explanation: "先算括号 (3+1)=4，再算乘法 2*4=8，再算取余 8%5=3，最后 10-3=7。"
    },

    // ==================== 判断题 q41-q45 (5题) ====================
    {
      id: "kp02_q41", type: "choice", difficulty: 1,
      question: "C++ 表达式 6 / 4 的值是 1.5。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "6/4 是两个整数相除，结果为整数 1（截断小数部分），不是 1.5。"
    },
    {
      id: "kp02_q42", type: "choice", difficulty: 2,
      question: "在 C++ 中，表达式 10 % 3 和 10 / 3 的值相同。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "10%3 = 1（余数），10/3 = 3（商），两者值不同。"
    },
    {
      id: "kp02_q43", type: "choice", difficulty: 2,
      question: "C++ 中逻辑运算符 && 的优先级高于 ||。",
      options: ["正确", "错误"], answer: 0, isJudge: true,
      explanation: "在 C++ 中，&& 的优先级确实高于 ||。所以 a && b || c 会被解析为 (a && b) || c。"
    },
    {
      id: "kp02_q44", type: "choice", difficulty: 2,
      question: "表达式 3 || 0 的值是 3。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "逻辑运算的结果只能是 true（1）或 false（0）。3 || 0 = true，值为 1 不是 3。"
    },
    {
      id: "kp02_q45", type: "choice", difficulty: 3,
      question: "C++ 表达式 3 > 2 > 1 的值为 true（1）。",
      options: ["正确", "错误"], answer: 1, isJudge: true,
      explanation: "从左到右计算：3>2 得 true(1)，然后 1>1 得 false(0)。表达式值为 0，不是 1。这是常见的逻辑陷阱。"
    },

    // ==================== 编程题 q46-q50 (5题) ====================
    {
      id: "kp02_q46", type: "coding", difficulty: 1,
      question: "编写程序，输入两个整数 a 和 b，输出它们的商（整数除法）和余数，每行一个结果。\n<p>测试输入：<code>17 5</code></p>\n<p>预期输出：</p>\n<pre><code>3\n2</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // 输出商和余数\n    \n    return 0;\n}",
      testCases: [{ input: "17 5", expectedOutput: "3\n2", description: "17/5=3 余 2" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a / b << endl;\n    cout << a % b << endl;\n    return 0;\n}",
      explanation: "使用 / 运算符得整数商，% 运算符得余数。"
    },
    {
      id: "kp02_q47", type: "coding", difficulty: 2,
      question: "编写程序，输入长方形的长 a 和宽 b，输出面积和周长，每行一个结果。\n<p>测试输入：<code>5 3</code></p>\n<p>预期输出：</p>\n<pre><code>15\n16</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // 计算面积和周长\n    \n    return 0;\n}",
      testCases: [{ input: "5 3", expectedOutput: "15\n16", description: "面积=15, 周长=16" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a * b << endl;\n    cout << 2 * (a + b) << endl;\n    return 0;\n}",
      explanation: "面积 = 长 × 宽，周长 = 2 × (长 + 宽)。"
    },
    {
      id: "kp02_q48", type: "coding", difficulty: 2,
      question: "编写程序，输入一个三位数 n，依次输出它的百位、十位、个位数字（每个数字用空格分隔）。\n<p>测试输入：<code>527</code></p>\n<p>预期输出：<code>5 2 7</code></p>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 分离各位数字\n    \n    return 0;\n}",
      testCases: [{ input: "527", expectedOutput: "5 2 7", description: "百位 5 十位 2 个位 7" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int bai = n / 100;\n    int shi = n / 10 % 10;\n    int ge = n % 10;\n    cout << bai << \" \" << shi << \" \" << ge << endl;\n    return 0;\n}",
      explanation: "百位 = n/100，十位 = n/10%10，个位 = n%10。利用 / 和 % 组合分离各位数字。"
    },
    {
      id: "kp02_q49", type: "coding", difficulty: 2,
      question: "编写程序，输入一个四位数 n，输出 n 的个位数字和 n 的各位数字之和。\n<p>测试输入：<code>1234</code></p>\n<p>预期输出：</p>\n<pre><code>4\n10</code></pre>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 输出个位和各位之和\n    \n    return 0;\n}",
      testCases: [{ input: "1234", expectedOutput: "4\n10", description: "个位 4, 1+2+3+4=10" }],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int ge = n % 10;\n    int sum = n / 1000 + n / 100 % 10 + n / 10 % 10 + n % 10;\n    cout << ge << endl;\n    cout << sum << endl;\n    return 0;\n}",
      explanation: "个位 = n%10。各位之和 = 千位 + 百位 + 十位 + 个位，分别用 / 和 % 提取。"
    },
    {
      id: "kp02_q50", type: "coding", difficulty: 3,
      question: "编写程序，输入一个不超过三位的正整数 n，输出它的各位数字的乘积。\n<p>例如输入 234，输出 24（因为 2*3*4=24）。</p>\n<p>测试输入：<code>234</code></p>\n<p>预期输出：<code>24</code></p>",
      starterCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    // 计算各位数字之积\n    \n    return 0;\n}",
      testCases: [
        { input: "234", expectedOutput: "24", description: "2*3*4=24" },
        { input: "25", expectedOutput: "10", description: "2*5=10" }
      ],
      referenceCode: "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int product = 1;\n    while (n > 0) {\n        product *= n % 10;\n        n /= 10;\n    }\n    cout << product << endl;\n    return 0;\n}",
      explanation: "用循环依次取出每位数字并累乘。n%10 取个位，n/=10 去掉个位，直到 n 为 0。"
    }
  ]
};
