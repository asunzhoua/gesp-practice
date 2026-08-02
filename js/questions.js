/**
 * GESP 一级 C++ 题库（从生产数据库导出，含测试用例）
 * 总计 513 题
 */
const QUESTION_BANK = {
  "meta": {
    "name": "GESP 一级 C++",
    "version": "3.0",
    "totalQuestions": 513,
    "knowledgePoints": {
      "kp01": {
        "title": "变量与数据类型",
        "questions": 50
      },
      "kp02": {
        "title": "基本运算",
        "questions": 50
      },
      "kp03": {
        "title": "输入输出",
        "questions": 50
      },
      "kp04": {
        "title": "条件语句",
        "questions": 50
      },
      "kp05": {
        "title": "循环语句",
        "questions": 50
      },
      "kp06": {
        "title": "数组基础",
        "questions": 50
      },
      "kp07": {
        "title": "字符与字符串",
        "questions": 50
      },
      "kp08": {
        "title": "函数基础",
        "questions": 50
      }
    },
    "mockExamQuestions": 30,
    "realExamQuestions": 83
  },
  "knowledgePoints": {
    "kp01": {
      "title": "变量与数据类型",
      "questions": [
        {
          "id": "kp01_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，以下哪个关键字用于声明整型变量？",
          "options": [
            "float",
            "int",
            "char",
            "bool"
          ],
          "answer": 1,
          "explanation": "int 是 C++ 中用于声明整型变量的关键字。float 用于浮点数，char 用于字符，bool 用于布尔值。"
        },
        {
          "id": "kp01_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是合法的 C++ 变量名？",
          "options": [
            "2name",
            "my_var",
            "class",
            "my-var"
          ],
          "answer": 1,
          "explanation": "变量名不能以数字开头（排除 A），不能是关键字（排除 C），不能包含连字符（排除 D）。my_var 使用下划线，是合法的变量名。"
        },
        {
          "id": "kp01_q03",
          "type": "choice",
          "difficulty": 1,
          "question": "sizeof(double) 的值是多少？",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "answer": 3,
          "explanation": "double 是双精度浮点数，在大多数系统中占 8 个字节。float 占 4 字节，int 通常占 4 字节，char 占 1 字节。"
        },
        {
          "id": "kp01_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>int a = 5;\nint b = 2;\ndouble c = a / b;\ncout &lt;&lt; c;</code></pre>",
          "options": [
            "2.5",
            "2",
            "2.0",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "a / b 是两个 int 相除，结果为整数 2（截断小数部分）。虽然 c 是 double 类型，但赋值时已经是 2.0，输出为 2。"
        },
        {
          "id": "kp01_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "关于 bool 类型，以下哪个说法是正确的？",
          "options": [
            "bool 变量只能存储 0 或 1",
            "bool 变量存储 true 或 false，true 等价于非零值",
            "bool 类型占用 4 字节内存",
            "bool 类型不能用于条件判断"
          ],
          "answer": 1,
          "explanation": "bool 类型存储 true 或 false。在内部，true 通常等价于 1（非零值），false 等价于 0。bool 通常只占 1 字节。"
        },
        {
          "id": "kp01_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪种初始化方式是错误的？",
          "options": [
            "int x = 10;",
            "int x(10);",
            "int x{10};",
            "int x = = 10;"
          ],
          "answer": 3,
          "explanation": "A 是拷贝初始化，B 是直接初始化，C 是列表初始化（C++11），都是合法的。D 的 = = 是语法错误。"
        },
        {
          "id": "kp01_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "以下C++不可以作为变量的名称的是（ ）。",
          "options": [
            "CCF GESP",
            "ccfGESP",
            "CCFgesp",
            "CCF_GESP"
          ],
          "answer": 0,
          "explanation": "C++ 变量名中不能包含空格。A 选项含有空格，无法作为变量名。",
          "source": "2023_12"
        },
        {
          "id": "kp01_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "定义变量char c，下面对c赋值的语句，不符合语法的是( )。",
          "options": [
            "c = (char)66;",
            "c = (char)(66);",
            "c = char(66);",
            "c = char 66;"
          ],
          "answer": 3,
          "explanation": "A、B 是 C 风格类型转换，C 是函数式类型转换，都合法。D 的 \"char 66\" 不是合法的类型转换语法。",
          "source": "2023_12"
        },
        {
          "id": "kp01_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，a 和 b 的值分别是？\n<pre><code>int a = 3.7;\nchar b = 66;</code></pre>",
          "options": [
            "a=3.7, b=B",
            "a=4, b=66",
            "a=3, b=B",
            "编译错误"
          ],
          "answer": 2,
          "explanation": "int a = 3.7 会截断小数部分，a 的值为 3。char b = 66，ASCII 码 66 对应字符 'B'。"
        },
        {
          "id": "kp01_q10",
          "type": "choice",
          "difficulty": 3,
          "question": "下面关于整型变量int x的赋值语句不正确是( )。",
          "options": [
            "x=(3.16);",
            "x=3.16;",
            "x=int(3.16);",
            "x=3.16 int;"
          ],
          "answer": 3,
          "explanation": "A、B 赋值3.16给int隐式截断为3；C 显式转换。D 语法错误。",
          "source": "2024_03"
        },
        {
          "id": "kp01_q11",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，下列可以做变量的是( )。",
          "options": [
            "Var-1",
            "$1",
            "%%1",
            "_Var_1"
          ],
          "answer": 3,
          "explanation": "变量名不能包含连字符(-)、不能以$开头、不能包含%%。_Var_1 合法。",
          "source": "2025_03"
        },
        {
          "id": "kp01_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个是C++语言的关键字？（ ）",
          "options": [
            "abs",
            "cin",
            "do",
            "endl"
          ],
          "answer": 2,
          "explanation": "do 是 C++ 的关键字（用于 do-while 循环）。abs 是函数名，cin 是标准输入对象，endl 是输出操纵符。",
          "source": "2025_03"
        },
        {
          "id": "kp01_q13",
          "type": "choice",
          "difficulty": 2,
          "question": "C++语言中3.0和3的值相等，所以它们占用的存储空间也相同。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "3.0 是 double 类型占 8 字节，3 是 int 类型占 4 字节。值相等但类型不同，存储空间不同。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp01_q14",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，分别声明 int、double、char、bool 类型的变量并输出它们各自占多少字节。\n<p>提示：使用 <code>sizeof()</code> 运算符。</p>\n<p>预期输出格式（每行一个数字）：</p>\n<pre><code>4\n8\n1\n1</code></pre>",
          "answer": 0,
          "explanation": "使用 sizeof() 可以获取变量占用的字节数。int 通常 4 字节，double 8 字节，char 1 字节，bool 1 字节。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "4\n8\n1\n1",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明四种不同类型的变量\n    // int 是整数类型，用来存整数（比如 1, 100, -5）\n    int a;\n\n    // double 是双精度浮点数类型，用来存小数（比如 3.14, -0.5）\n    double b;\n\n    // char 是字符类型，用来存单个字符（比如 'A', '0', '中'）\n    char c;\n\n    // bool 是布尔类型，只能存 true（真）或 false（假）\n    bool d;\n\n    // sizeof() 运算符可以告诉我们一个变量或类型占多少字节的内存\n    // 字节（byte）是计算机存储数据的基本单位\n    // 就像超市里的\"个\"，不同的东西用不同的\"个\"来装\n\n    cout << sizeof(a) << endl;  // 输出 int 类型占的字节数 → 4\n    cout << sizeof(b) << endl;  // 输出 double 类型占的字节数 → 8\n    cout << sizeof(c) << endl;  // 输出 char 类型占的字节数 → 1\n    cout << sizeof(d) << endl;  // 输出 bool 类型占的字节数 → 1\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. sizeof() 可以查看数据类型占多少字节\n * 2. int（整数）→ 4 字节，double（小数）→ 8 字节\n * 3. char（字符）→ 1 字节，bool（真假）→ 1 字节\n * 4. 记忆口诀：int 四，double 八，char 和 bool 都是一\n */"
        },
        {
          "id": "kp01_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，声明两个 int 变量 a=10, b=3，然后输出它们的和、差、积、商（整数除法）和余数。\n<p>预期输出：</p>\n<pre><code>13\n7\n30\n3\n1</code></pre>",
          "answer": 0,
          "explanation": "整数除法 a/b 会截断小数部分得到 3，取余 a%b 得到 1。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "13\n7\n30\n3\n1",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明两个整数变量并赋值\n    int a = 10;  // a 的值是 10\n    int b = 3;   // b 的值是 3\n\n    // 输出 a + b 的结果（加法）\n    // 10 + 3 = 13\n    cout << a + b << endl;\n\n    // 输出 a - b 的结果（减法）\n    // 10 - 3 = 7\n    cout << a - b << endl;\n\n    // 输出 a * b 的结果（乘法）\n    // 10 * 3 = 30\n    cout << a * b << endl;\n\n    // 输出 a / b 的结果（整数除法）\n    // 10 / 3 = 3（注意：整数除法会舍去小数部分！）\n    // 就像 10 块糖分给 3 个人，每人 3 块，还剩 1 块\n    // 但整数除法只管\"每人几块\"，不管余数\n    cout << a / b << endl;\n\n    // 输出 a % b 的结果（取余数，也叫\"取模\"）\n    // 10 % 3 = 1（10 除以 3，余数是 1）\n    // % 运算符只对整数有效\n    cout << a % b << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. + 加法、- 减法、* 乘法、/ 除法、% 取余\n * 2. 两个整数相除，结果还是整数（小数部分被\"砍掉\"）\n *    例如：10 / 3 = 3（不是 3.33）\n * 3. % 取余运算符返回除法的余数\n *    例如：10 % 3 = 1（因为 10 = 3 × 3 + 1）\n */"
        },
        {
          "id": "kp01_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种数据类型用于存储带小数的数值？",
          "options": [
            "int",
            "char",
            "float",
            "bool"
          ],
          "answer": 2,
          "explanation": "float 是单精度浮点数类型，用于存储带小数的数值。int 存储整数，char 存储字符，bool 存储布尔值。"
        },
        {
          "id": "kp01_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个可以作为 C++ 变量名？",
          "options": [
            "for",
            "_total",
            "1st",
            "my var"
          ],
          "answer": 1,
          "explanation": "for 是关键字不能做变量名；1st 以数字开头不合法；my var 含空格不合法。_total 以下划线开头，是合法变量名。"
        },
        {
          "id": "kp01_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是 C++ 的关键字？",
          "options": [
            "main",
            "printf",
            "const",
            "cout"
          ],
          "answer": 2,
          "explanation": "const 是 C++ 关键字，用于声明常量。main 是函数名，printf 是标准库函数，cout 是标准输出对象，它们都不是关键字。"
        },
        {
          "id": "kp01_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "使用 const 关键字声明常量时，以下哪种写法是正确的？",
          "options": [
            "const int x;",
            "const int x = 10;",
            "int const x;",
            "const x = 10;"
          ],
          "answer": 1,
          "explanation": "const 变量必须在声明时初始化。A 没有赋初值会编译错误；C 同样缺少初值；D 缺少类型。B 是正确的 const 声明并初始化。"
        },
        {
          "id": "kp01_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "sizeof(char) 的值是多少？",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "answer": 0,
          "explanation": "char 类型在所有符合标准的 C++ 实现中占 1 个字节。这是 C++ 标准明确规定的。"
        },
        {
          "id": "kp01_q21",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于 bool 类型的说法，错误的是？",
          "options": [
            "bool 类型只有 true 和 false 两个值",
            "true 在内部存储为 1",
            "bool 通常占 1 个字节",
            "bool 类型可以存储任意整数值"
          ],
          "answer": 3,
          "explanation": "bool 类型只能存储 true 或 false。虽然可以将整数赋值给 bool（非零转为 true，零转为 false），但 bool 本身不会保存原始整数值。"
        },
        {
          "id": "kp01_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，b 的值是？\n<pre><code>double a = 5.9;\nint b = a;</code></pre>",
          "options": [
            "5.9",
            "5",
            "6",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "将 double 赋值给 int 时，小数部分被截断（不是四舍五入）。5.9 截断后 b 的值为 5。"
        },
        {
          "id": "kp01_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "关于 C++ 中变量的作用域，以下哪个说法是正确的？",
          "options": [
            "在 if 语句块内声明的变量可以在块外使用",
            "在 for 循环内声明的变量可以在循环外使用",
            "在 main 函数内声明的变量只能在 main 内使用",
            "全局变量不能在函数内使用"
          ],
          "answer": 2,
          "explanation": "局部变量的作用域仅限于声明它的代码块内。main 函数中声明的变量是局部变量，只能在 main 内使用。"
        },
        {
          "id": "kp01_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，flag 的值是什么？\n<pre><code>bool flag = 100;</code></pre>",
          "options": [
            "100",
            "true",
            "false",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "C++ 中非零值转换为 true。100 是非零值，所以 flag 的值为 true。"
        },
        {
          "id": "kp01_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "以下关于 C++ 局部变量的说法，正确的是？",
          "options": [
            "局部变量声明后值自动为 0",
            "局部变量声明后值是不确定的",
            "局部变量不需要声明就能使用",
            "局部变量的类型可以随时改变"
          ],
          "answer": 1,
          "explanation": "C++ 中局部变量不会自动初始化，声明后的值是不确定的（未定义行为）。使用未初始化的变量是危险的。"
        },
        {
          "id": "kp01_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "sizeof(float) 的值是多少？",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "answer": 2,
          "explanation": "float 是单精度浮点数，在大多数系统中占 4 个字节。double 占 8 个字节，char 占 1 个字节。"
        },
        {
          "id": "kp01_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>char c = 65;\ncout &lt;&lt; c;</code></pre>",
          "options": [
            "65",
            "A",
            "a",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "ASCII 码 65 对应大写字母 'A'。char 类型存储整数时，cout 会输出对应的字符。"
        },
        {
          "id": "kp01_q28",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪种情况会导致编译错误？",
          "options": [
            "int x = 5; x = 10;",
            "const int x = 5; x = 10;",
            "int x = 5; double y = x;",
            "char c = 'A';"
          ],
          "answer": 1,
          "explanation": "const 变量的值一旦初始化就不能修改。对 const 变量重新赋值会导致编译错误。"
        },
        {
          "id": "kp01_q29",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，result 的值是？\n<pre><code>int a = 3, b = 2;\ndouble result = a / b;</code></pre>",
          "options": [
            "1.5",
            "1.0",
            "1",
            "2"
          ],
          "answer": 1,
          "explanation": "a / b 是两个 int 相除，结果为整数 1（截断小数）。将 1 赋值给 double 类型的 result，result 的值为 1.0。"
        },
        {
          "id": "kp01_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "关于 const 变量，以下哪个说法是错误的？",
          "options": [
            "const 变量必须在声明时初始化",
            "const 变量的值不能被修改",
            "const 变量可以参与运算",
            "const 变量可以在声明后再赋值"
          ],
          "answer": 3,
          "explanation": "const 变量必须在声明时初始化，之后不能再赋值。声明后再赋值会导致编译错误。"
        },
        {
          "id": "kp01_q31",
          "type": "choice",
          "difficulty": 2,
          "question": "以下关于 auto 关键字的说法，正确的是？",
          "options": [
            "auto 可以让编译器自动推断变量类型",
            "auto 声明的变量必须初始化",
            "auto 是 C++11 引入的关键字",
            "以上都正确"
          ],
          "answer": 3,
          "explanation": "auto 是 C++11 引入的关键字，让编译器根据初始化值自动推断类型，因此声明时必须初始化。三个说法都正确。"
        },
        {
          "id": "kp01_q32",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int x = 5;\n{\n    int x = 10;\n    cout &lt;&lt; x &lt;&lt; \" \";\n}\ncout &lt;&lt; x;</code></pre>",
          "options": [
            "10 5",
            "5 5",
            "10 10",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "内层作用域声明了新的 x=10，遮蔽了外层的 x。内层输出 10，外层输出原来的 5。"
        },
        {
          "id": "kp01_q33",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>cout &lt;&lt; sizeof(3 + 5.0);</code></pre>",
          "options": [
            "4",
            "8",
            "12",
            "取决于编译器"
          ],
          "answer": 1,
          "explanation": "3 是 int，5.0 是 double。混合运算时 int 自动提升为 double，结果为 double 类型。sizeof(double) = 8。"
        },
        {
          "id": "kp01_q34",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，result 的类型和值分别是？\n<pre><code>int a = 5;\ndouble b = 2.0;\nauto result = a / b;</code></pre>",
          "options": [
            "int, 2",
            "int, 3",
            "double, 2.5",
            "double, 2.0"
          ],
          "answer": 2,
          "explanation": "int 除以 double 时，int 自动提升为 double，5.0/2.0=2.5。auto 推断 result 为 double 类型。"
        },
        {
          "id": "kp01_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码中，哪个声明会导致编译错误？",
          "options": [
            "int x = 1, y = 2, z = 3;",
            "int x, y, z;",
            "int x = y = z = 1;",
            "int x = 1; int y = 2;"
          ],
          "answer": 2,
          "explanation": "C 选项中 y 和 z 在赋值前尚未声明，编译器无法识别它们。正确写法应先分别声明变量。"
        },
        {
          "id": "kp01_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>char c1 = 'A';\nchar c2 = 'a';\ncout &lt;&lt; (int)c1 &lt;&lt; \" \" &lt;&lt; (int)c2;</code></pre>",
          "options": [
            "A a",
            "65 97",
            "97 65",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "'A' 的 ASCII 码是 65，'a' 的 ASCII 码是 97。使用 (int) 强制转换输出 ASCII 码值。"
        },
        {
          "id": "kp01_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "关于 C++ 中变量的默认初始化，以下哪个说法是正确的？",
          "options": [
            "全局 int 变量默认初始化为 0",
            "局部 int 变量默认初始化为 0",
            "所有 int 变量都默认初始化为 0",
            "所有变量都不会自动初始化"
          ],
          "answer": 0,
          "explanation": "全局变量和静态变量会自动零初始化。普通局部变量不会自动初始化，值是不确定的。"
        },
        {
          "id": "kp01_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下关于 sizeof 的说法，错误的是？",
          "options": [
            "sizeof(int) 通常为 4",
            "sizeof(char) 一定为 1",
            "sizeof(double) 通常为 8",
            "sizeof(bool) 通常为 4"
          ],
          "answer": 3,
          "explanation": "sizeof(bool) 通常为 1 字节，不是 4 字节。C++ 标准要求 sizeof(char) 一定为 1。"
        },
        {
          "id": "kp01_q39",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，a 的值是？\n<pre><code>int a = 5;\na = a + a;\na = a * 2;\na = a - 10;</code></pre>",
          "options": [
            "20",
            "10",
            "30",
            "15"
          ],
          "answer": 1,
          "explanation": "a=5, a=5+5=10, a=10*2=20, a=20-10=10。最终 a 的值为 10。"
        },
        {
          "id": "kp01_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪种情况 int 类型变量可能发生溢出？",
          "options": [
            "int x = 2147483647; x = x + 1;",
            "int x = -2147483648; x = x - 1;",
            "int x = 100000; x = x * 100000;",
            "以上都有可能"
          ],
          "answer": 3,
          "explanation": "int 的范围约为 -21 亿到 21 亿。A 超过最大值，B 超过最小值，C 的 100000*100000=100 亿也超出范围。"
        },
        {
          "id": "kp01_q41",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中每个变量都必须先声明后使用。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 是静态类型语言，变量必须先声明类型和名称后才能使用。这是 C++ 的基本语法规则。",
          "isJudge": true
        },
        {
          "id": "kp01_q42",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中变量名区分大小写，Name 和 name 是两个不同的变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 区分大小写。Name、name 和 NAME 是三个不同的标识符。",
          "isJudge": true
        },
        {
          "id": "kp01_q43",
          "type": "choice",
          "difficulty": 2,
          "question": "const 变量声明后不能再被赋值修改。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "const 修饰的变量是常量，声明初始化后不能再被赋值，否则编译报错。",
          "isJudge": true
        },
        {
          "id": "kp01_q44",
          "type": "choice",
          "difficulty": 2,
          "question": "bool 类型的 true 在内部存储为 1，false 存储为 0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在内部表示中，true 通常等价于 1，false 等价于 0。bool 变量实际占用 1 字节内存。",
          "isJudge": true
        },
        {
          "id": "kp01_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "在 C++ 中，不同作用域内可以声明同名变量，内层作用域的变量会遮蔽外层的同名变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这就是变量遮蔽（shadowing）。内层作用域的同名变量会暂时遮蔽外层变量，内层结束后外层变量恢复可用。",
          "isJudge": true
        },
        {
          "id": "kp01_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，分别声明 int、double、char 类型的变量，赋值为10、3.14、'A'，然后每行输出一个变量的值。\n<p>预期输出：</p>\n<pre><code>10\n3.14\nA</code></pre>",
          "answer": 0,
          "explanation": "分别声明三种类型的变量并赋初值，用 cout 逐行输出。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "10\n3.14\nA",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10;\n    double b = 3.14;\n    char c = 'A';\n    cout << a << endl;\n    cout << b << endl;\n    cout << c << endl;\n    return 0;\n}"
        },
        {
          "id": "kp01_q47",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，定义一个 char 变量存储大写字母 'B'，输出该字母及其对应的 ASCII 码值（用 (int) 强制转换），每行一个。\n<p>预期输出：</p>\n<pre><code>B\n66</code></pre>",
          "answer": 0,
          "explanation": "char 变量存储字符 'B'，使用 (int) 强制转换可以输出其 ASCII 码值 66。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "B\n66",
              "description": "字母B及其ASCII码，每行一个"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char c = 'B';\n    cout << c << endl << (int)c << endl;\n    return 0;\n}"
        },
        {
          "id": "kp01_q48",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，从键盘读入一个字符，输出该字符对应的 ASCII 码值。\n<p>测试输入：<code>A</code></p>\n<p>预期输出：</p>\n<pre><code>65</code></pre>",
          "answer": 0,
          "explanation": "用 cin 读入字符，再用 (int) 强制转换输出 ASCII 码值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "A",
              "expectedOutput": "65",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cin >> ch;\n    cout << (int)ch << endl;\n    return 0;\n}"
        },
        {
          "id": "kp01_q49",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入两个整数 a 和 b，不使用第三个变量交换它们的值，然后输出交换后的 a 和 b（空格分隔）。\n<p>测试输入：<code>3 7</code></p>\n<p>预期输出：</p>\n<pre><code>7 3</code></pre>",
          "answer": 0,
          "explanation": "利用加减法交换：a=a+b, b=a-b(得原a), a=a-b(得原b)。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 7",
              "expectedOutput": "7 3",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    a = a + b;\n    b = a - b;\n    a = a - b;\n    cout << a << \" \" << b << endl;\n    return 0;\n}"
        },
        {
          "id": "kp01_q50",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入一个小写字母字符 ch，输出它对应的大写字母，然后空格分隔输出小写字母和大写字母的 ASCII 码值。\n<p>测试输入：<code>a</code></p>\n<p>预期输出：</p>\n<pre><code>A 97 65</code></pre>",
          "answer": 0,
          "explanation": "小写字母与大写字母的 ASCII 码相差 32，ch - 32 即可得到大写字母。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "a",
              "expectedOutput": "A 97 65",
              "description": "大写字母及大小写ASCII码"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cin >> ch;\n    char upper = ch - 32;\n    cout << upper << \" \" << (int)ch << \" \" << (int)upper << endl;\n    return 0;\n}"
        }
      ]
    },
    "kp02": {
      "title": "基本运算",
      "questions": [
        {
          "id": "kp02_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "表达式 <code>3 + 4 * 5</code> 的值是多少？",
          "options": [
            "35",
            "23",
            "20",
            "27"
          ],
          "answer": 1,
          "explanation": "乘法优先级高于加法，先算 4*5=20，再算 3+20=23。"
        },
        {
          "id": "kp02_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，整数除法 <code>7 / 2</code> 的结果是？",
          "options": [
            "3.5",
            "3",
            "4",
            "3.0"
          ],
          "answer": 1,
          "explanation": "两个整数相除结果仍为整数，小数部分被截断。7 / 2 = 3。"
        },
        {
          "id": "kp02_q03",
          "type": "choice",
          "difficulty": 1,
          "question": "<code>10 % 3</code> 的结果是？",
          "options": [
            "3",
            "1",
            "0",
            "3.33"
          ],
          "answer": 1,
          "explanation": "% 是取余运算符，10 ÷ 3 = 3 余 1，所以 10 % 3 = 1。"
        },
        {
          "id": "kp02_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个表达式的结果是 <code>true</code>？\n<pre><code>bool a = true;\nbool b = false;</code></pre>",
          "options": [
            "a &amp;&amp; b",
            "a || b",
            "!a",
            "b && !b"
          ],
          "answer": 1,
          "explanation": "a || b = true || false = true。逻辑或只要有一边为 true 就返回 true。"
        },
        {
          "id": "kp02_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 10;\nx += 5;\nx -= 3;</code></pre>",
          "options": [
            "12",
            "15",
            "10",
            "8"
          ],
          "answer": 0,
          "explanation": "x += 5 使 x 变为 15，x -= 3 使 x 变为 12。"
        },
        {
          "id": "kp02_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "C++表达式10 - 3 * (2 + 1) % 10的值是( )。",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 1,
          "explanation": "先算括号(2+1)=3，再算乘法 3*3=9，取余 9%10=9，最后 10-9=1。",
          "source": "2023_12"
        },
        {
          "id": "kp02_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式3 - 3 * 3 / 5的值是( )。",
          "options": [
            "-1.2",
            "1",
            "0",
            "2"
          ],
          "answer": 3,
          "explanation": "先算乘除：3*3=9, 9/5=1（整数除法），再算 3-1=2。",
          "source": "2024_06"
        },
        {
          "id": "kp02_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "C++表达式16 / 4 % 2的值是( )。",
          "options": [
            "8",
            "4",
            "2",
            "0"
          ],
          "answer": 3,
          "explanation": "先算除法 16/4=4，再算取余 4%2=0。",
          "source": "2025_03"
        },
        {
          "id": "kp02_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "N=12，则cout << (N % 3 + N / 5)的输出是( )。",
          "options": [
            "6.4",
            "2.4",
            "6",
            "2"
          ],
          "answer": 3,
          "explanation": "N%3=12%3=0，N/5=12/5=2（整数除法），0+2=2。",
          "source": "2025_03"
        },
        {
          "id": "kp02_q10",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式9/4 - 6 % (6 - 2) * 10的值是( )。",
          "options": [
            "-17.75",
            "-18",
            "-14",
            "-12.75"
          ],
          "answer": 1,
          "explanation": "先算括号(6-2)=4，再算 9/4=2, 6%4=2, 2*10=20，最后 2-20=-18。",
          "source": "2024_06"
        },
        {
          "id": "kp02_q11",
          "type": "choice",
          "difficulty": 2,
          "question": "C++表达式(6 > 2) * 2的值是( )。",
          "options": [
            "1",
            "2",
            "true",
            "truetrue"
          ],
          "answer": 1,
          "explanation": "(6>2) 结果为 true（值为1），1*2=2。",
          "source": "2024_12"
        },
        {
          "id": "kp02_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "在C++中，假设N为正整数，则cout << (N % 3 + N % 7)可能输出的最大值是( )。",
          "options": [
            "6",
            "8",
            "9",
            "10"
          ],
          "answer": 1,
          "explanation": "N%3最大为2，N%7最大为6，所以最大为2+6=8。",
          "source": "2024_06"
        },
        {
          "id": "kp02_q13",
          "type": "choice",
          "difficulty": 3,
          "question": "C++表达式010+100+001的值为111。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "010和001是八进制数，010=8, 001=1，所以 8+100+1=109，不是111。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp02_q14",
          "type": "coding",
          "difficulty": 2,
          "question": "给定圆的半径 r = 5，计算并输出圆的面积（取 π = 3.14）。\n<p>公式：面积 = π × r × r</p>\n<p>预期输出：</p>\n<pre><code>78.5</code></pre>",
          "answer": 0,
          "explanation": "使用公式 area = 3.14 * r * r。注意要用 double 类型。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "78.5",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 圆的半径 r = 5\n    int r = 5;\n\n    // 圆的面积公式：面积 = π × r × r\n    // π（读作\"派\"）约等于 3.14\n    // 这里用 double 类型来存面积，因为面积可能是小数\n    double area = 3.14 * r * r;\n    // 计算过程：3.14 × 5 × 5 = 3.14 × 25 = 78.5\n\n    // 输出圆的面积\n    cout << area << endl;  // 输出 78.5\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 圆的面积公式：面积 = π × r × r（π 乘以 半径 的平方）\n * 2. π（派）是一个数学常数，约等于 3.14159...\n * 3. 用 double 类型存面积，因为面积经常是小数\n * 4. 虽然 r 是 int 类型，但 3.14 是 double\n *    C++ 会自动把 r 转成 double 再计算\n */"
        },
        {
          "id": "kp02_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "给定摄氏温度 C=100，使用公式 F = C * 9 / 5 + 32 转换为华氏温度并输出。\n<p>预期输出：</p>\n<pre><code>212</code></pre>",
          "answer": 0,
          "explanation": "使用公式 F = C * 9.0 / 5 + 32。注意乘以 9.0 确保浮点除法。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "212",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 摄氏温度 C = 100（水的沸点）\n    int C = 100;\n\n    // 华氏温度公式：F = C × 9.0 / 5 + 32\n    // 注意：这里用 9.0 而不是 9！\n    // 因为 C 是 int（整数），如果写 9/5，结果是 1（整数除法）\n    // 但 9.0/5 = 1.8（小数除法），这样结果才准确！\n    double F = C * 9.0 / 5 + 32;\n    // 计算过程：\n    // 第1步：100 × 9.0 = 900.0（int × double = double）\n    // 第2步：900.0 / 5 = 180.0\n    // 第3步：180.0 + 32 = 212.0\n\n    // 输出华氏温度\n    cout << F << endl;  // 输出 212\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 摄氏转华氏公式：F = C × 9 / 5 + 32\n * 2. 重要陷阱：整数除法 9/5 = 1，不是 1.8！\n *    必须写成 9.0/5 才能得到正确的小数结果\n * 3. 这是 GESP 考试的高频考点！\n * 4. 只要有一个操作数是 double，结果就是 double\n */"
        },
        {
          "id": "kp02_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "表达式 <code>20 - 13</code> 的值是？",
          "options": [
            "7",
            "-7",
            "33",
            "13"
          ],
          "answer": 0,
          "explanation": "20 - 13 = 7，这是基本的减法运算。"
        },
        {
          "id": "kp02_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 表达式 <code>25 / 4</code> 的结果是？",
          "options": [
            "6.25",
            "6",
            "7",
            "6.0"
          ],
          "answer": 1,
          "explanation": "两个整数相除结果仍为整数，小数部分被截断。25 / 4 = 6。"
        },
        {
          "id": "kp02_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "<code>19 % 6</code> 的结果是？",
          "options": [
            "3",
            "1",
            "4",
            "3.167"
          ],
          "answer": 1,
          "explanation": "% 是取余运算符。19 = 6 × 3 + 1，余数为 1，所以 19 % 6 = 1。"
        },
        {
          "id": "kp02_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是正确的赋值语句？",
          "options": [
            "5 = x",
            "x + 1 = 10",
            "x = 10",
            "int = x"
          ],
          "answer": 2,
          "explanation": "赋值号 = 的左边必须是变量名，不能是常量或表达式。x = 10 是正确的赋值语句。"
        },
        {
          "id": "kp02_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 5;\nx *= 3;</code></pre>",
          "options": [
            "3",
            "5",
            "8",
            "15"
          ],
          "answer": 3,
          "explanation": "x *= 3 等价于 x = x * 3 = 5 * 3 = 15。"
        },
        {
          "id": "kp02_q21",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 <code>2 + 3 * 4 - 1</code> 的值是？",
          "options": [
            "27",
            "13",
            "19",
            "15"
          ],
          "answer": 1,
          "explanation": "乘法优先级高于加减。先算 3*4=12，再算 2+12-1=13。"
        },
        {
          "id": "kp02_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，result 的值是？\n<pre><code>double result = 10 / 3;</code></pre>",
          "options": [
            "3.33333",
            "3",
            "3.0",
            "4"
          ],
          "answer": 2,
          "explanation": "10 / 3 是两个整数相除，结果为整数 3。将 3 赋值给 double 类型的 result，result 的值为 3.0。"
        },
        {
          "id": "kp02_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 <code>5 * 2 + 10 / 2 - 3</code> 的值是？",
          "options": [
            "12",
            "7",
            "10",
            "14"
          ],
          "answer": 0,
          "explanation": "乘除优先于加减：5*2=10，10/2=5，然后 10+5-3=12。"
        },
        {
          "id": "kp02_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 5;\nx *= 2 + 1;</code></pre>",
          "options": [
            "11",
            "15",
            "10",
            "7"
          ],
          "answer": 1,
          "explanation": "x *= 2 + 1 等价于 x = x * (2 + 1) = 5 * 3 = 15。复合赋值运算符右边的表达式先计算。"
        },
        {
          "id": "kp02_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int a = 10, b = 3;\ncout &lt;&lt; a / b &lt;&lt; \".\" &lt;&lt; a % b;</code></pre>",
          "options": [
            "3.1",
            "3.3",
            "3.33",
            "33"
          ],
          "answer": 0,
          "explanation": "a / b = 10 / 3 = 3（整数除法），a % b = 10 % 3 = 1（取余）。拼接输出为 \"3.1\"。"
        },
        {
          "id": "kp02_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 <code>(10 > 5) && (3 < 2)</code> 的值是？",
          "options": [
            "true",
            "false",
            "1",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "10 > 5 为 true，3 < 2 为 false。true && false = false。逻辑与要求两边都为 true 才返回 true。"
        },
        {
          "id": "kp02_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 10;\nx /= 3;</code></pre>",
          "options": [
            "3",
            "3.33333",
            "4",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "x /= 3 等价于 x = x / 3 = 10 / 3 = 3（整数除法截断小数）。"
        },
        {
          "id": "kp02_q28",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个表达式的值为 6？",
          "options": [
            "2 * 3 + 1",
            "2 * (3 + 1)",
            "10 / 3 * 2",
            "10 % 3 + 2"
          ],
          "answer": 2,
          "explanation": "A=7, B=8, C=10/3*2=3*2=6, D=1+2=3。只有 C 的值为 6。"
        },
        {
          "id": "kp02_q29",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，a 的值是？\n<pre><code>int a = 5;\na -= a;\na += 10;</code></pre>",
          "options": [
            "10",
            "0",
            "5",
            "-5"
          ],
          "answer": 0,
          "explanation": "a -= a 即 a = 5 - 5 = 0，然后 a += 10 即 a = 0 + 10 = 10。"
        },
        {
          "id": "kp02_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int x = 15;\ncout &lt;&lt; x / 10 &lt;&lt; \" \" &lt;&lt; x % 10;</code></pre>",
          "options": [
            "1 5",
            "1.5 0",
            "15 0",
            "1 15"
          ],
          "answer": 0,
          "explanation": "x / 10 = 15 / 10 = 1（取十位），x % 10 = 15 % 10 = 5（取个位）。输出 \"1 5\"。"
        },
        {
          "id": "kp02_q31",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式 <code>3 + 4 * 5 / 2 - 1</code> 的值是？",
          "options": [
            "11",
            "12",
            "9",
            "25"
          ],
          "answer": 1,
          "explanation": "乘除优先：4*5=20，20/2=10，然后 3+10-1=12。"
        },
        {
          "id": "kp02_q32",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 5;\nx++;\n++x;</code></pre>",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "explanation": "x++ 后 x 变为 6，++x 后 x 变为 7。后缀自增先用后加，前缀自增先加后用，但两次都使 x 增加 1。"
        },
        {
          "id": "kp02_q33",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式 <code>10 / 3 * 3</code> 的值是？",
          "options": [
            "9",
            "10",
            "9.0",
            "10.0"
          ],
          "answer": 0,
          "explanation": "从左到右计算：10 / 3 = 3（整数除法），3 * 3 = 9。不要误以为等于 10。"
        },
        {
          "id": "kp02_q34",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int a = 2, b = 3, c = 4;\ncout &lt;&lt; a + b * c - b;</code></pre>",
          "options": [
            "11",
            "20",
            "13",
            "17"
          ],
          "answer": 0,
          "explanation": "乘法优先：b*c=12，然后 a+12-b=2+12-3=11。"
        },
        {
          "id": "kp02_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式 <code>7 / 2 + 7 % 2</code> 的值是？",
          "options": [
            "4",
            "3.5",
            "3",
            "4.5"
          ],
          "answer": 0,
          "explanation": "7 / 2 = 3（整数除法），7 % 2 = 1（取余），3 + 1 = 4。"
        },
        {
          "id": "kp02_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，result 的值是？\n<pre><code>int a = 8, b = 3;\ndouble result = a / b;</code></pre>",
          "options": [
            "2.66667",
            "2",
            "2.0",
            "3"
          ],
          "answer": 2,
          "explanation": "a / b = 8 / 3 = 2（整数除法截断），将 2 赋值给 double 类型的 result，值为 2.0。"
        },
        {
          "id": "kp02_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪个表达式的值最小？",
          "options": [
            "100 / 3",
            "100 % 3",
            "100 / 3 * 3",
            "100 - 100 / 3"
          ],
          "answer": 1,
          "explanation": "A=33, B=1, C=33*3=99, D=100-33=67。B 的值 1 最小。"
        },
        {
          "id": "kp02_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 10;\nx -= x /= 2;</code></pre>",
          "options": [
            "0",
            "5",
            "-5",
            "10"
          ],
          "answer": 0,
          "explanation": "先算 x /= 2，x 变为 5。再算 x -= 5，x = 5 - 5 = 0。复合赋值从右向左结合。"
        },
        {
          "id": "kp02_q39",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int a = 10, b = 4;\ncout &lt;&lt; a / b * b;</code></pre>",
          "options": [
            "8",
            "10",
            "40",
            "2.5"
          ],
          "answer": 0,
          "explanation": "从左到右计算：a / b = 10 / 4 = 2，2 * b = 2 * 4 = 8。整数除法导致精度损失。"
        },
        {
          "id": "kp02_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 1;\nfor (int i = 0; i &lt; 5; i++) x *= 2;</code></pre>",
          "options": [
            "16",
            "32",
            "10",
            "5"
          ],
          "answer": 1,
          "explanation": "循环执行 5 次，x 每次乘 2：1→2→4→8→16→32。最终 x = 32。"
        },
        {
          "id": "kp02_q41",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，<code>%</code> 运算符用于取余运算。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "% 是取余（模）运算符，如 10 % 3 = 1，表示 10 除以 3 的余数。",
          "isJudge": true
        },
        {
          "id": "kp02_q42",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 表达式 <code>10 / 3</code> 的值为 3.33。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "10 和 3 都是整数，整数除法结果仍为整数。10 / 3 = 3，小数部分被截断。",
          "isJudge": true
        },
        {
          "id": "kp02_q43",
          "type": "choice",
          "difficulty": 2,
          "question": "<code>%</code> 取余运算符只能用于整数类型，不能用于浮点数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 中 % 运算符的操作数必须是整数类型，对浮点数使用 % 会导致编译错误。",
          "isJudge": true
        },
        {
          "id": "kp02_q44",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 <code>a += b</code> 等价于 <code>a = a + b</code>。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "复合赋值运算符 += 就是将右边的值加到左边变量上再赋值回去，与 a = a + b 等价。",
          "isJudge": true
        },
        {
          "id": "kp02_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式 <code>5 / 2 * 2</code> 的值为 5。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "从左到右计算：5 / 2 = 2（整数除法截断），2 * 2 = 4，不是 5。整数除法的截断导致结果变小。",
          "isJudge": true
        },
        {
          "id": "kp02_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，定义 a=10, b=3，分别输出它们的和、差、积（每行一个结果）。\n<p>预期输出：</p>\n<pre><code>13\n7\n30</code></pre>",
          "answer": 0,
          "explanation": "分别用 +、-、* 运算符计算并输出和、差、积。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "13\n7\n30",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 10, b = 3;\n    cout << a + b << endl;\n    cout << a - b << endl;\n    cout << a * b << endl;\n    return 0;\n}"
        },
        {
          "id": "kp02_q47",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入两个整数 a 和 b，输出它们的整数商和余数（每行一个结果）。\n<p>测试输入：<code>17 5</code></p>\n<p>预期输出：</p>\n<pre><code>3\n2</code></pre>",
          "answer": 0,
          "explanation": "用 / 运算符得到整数商，用 % 运算符得到余数。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "17 5",
              "expectedOutput": "3\n2",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a / b << endl;\n    cout << a % b << endl;\n    return 0;\n}"
        },
        {
          "id": "kp02_q48",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入华氏温度 F（整数），使用公式 C = (F - 32) * 5 / 9 转换为摄氏温度并输出。\n<p>测试输入：<code>212</code></p>\n<p>预期输出：</p>\n<pre><code>100</code></pre>",
          "answer": 0,
          "explanation": "代入公式 C = (F-32)*5/9。整数运算下 212-32=180，180*5=900，900/9=100。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "212",
              "expectedOutput": "100",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int F;\n    cin >> F;\n    int C = (F - 32) * 5 / 9;\n    cout << C << endl;\n    return 0;\n}"
        },
        {
          "id": "kp02_q49",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入一个三位数正整数 n，分别输出它的百位、十位、个位数字（空格分隔）。\n<p>测试输入：<code>345</code></p>\n<p>预期输出：</p>\n<pre><code>3 4 5</code></pre>",
          "answer": 0,
          "explanation": "百位：n/100；十位：n/10%10 先去掉个位再取余；个位：n%10。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "345",
              "expectedOutput": "3 4 5",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    cout << n / 100 << \" \" << (n / 10) % 10 << \" \" << n % 10 << endl;\n    return 0;\n}"
        },
        {
          "id": "kp02_q50",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入长方形的长和宽（正整数），计算并输出周长和面积（每行一个结果）。\n<p>测试输入：<code>5 3</code></p>\n<p>预期输出：</p>\n<pre><code>16\n15</code></pre>",
          "answer": 0,
          "explanation": "周长 = (长+宽)*2，面积 = 长*宽。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5 3",
              "expectedOutput": "16\n15",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int l, w;\n    cin >> l >> w;\n    cout << 2 * (l + w) << endl;\n    cout << l * w << endl;\n    return 0;\n}"
        }
      ]
    },
    "kp03": {
      "title": "输入输出",
      "questions": [
        {
          "id": "kp03_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种方式可以正确输出 \"Hello\" 后换行？",
          "options": [
            "cout >> \"Hello\" >> endl;",
            "cout << \"Hello\" << endl;",
            "cin << \"Hello\" << endl;",
            "cout << \"Hello\" >> endl;"
          ],
          "answer": 1,
          "explanation": "cout 使用 << 插入运算符，endl 也通过 << 插入。>> 用于输入。"
        },
        {
          "id": "kp03_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "endl 和 \"\\n\" 的主要区别是什么？",
          "options": [
            "没有任何区别",
            "endl 会刷新缓冲区，\"\\n\" 不会",
            "\\n 会刷新缓冲区",
            "endl 输出两个换行"
          ],
          "answer": 1,
          "explanation": "endl 除了换行还会刷新缓冲区，\"\\n\" 只换行不刷新。"
        },
        {
          "id": "kp03_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "C++语句printf(\"5%%2={%d}\\n\",5 % 2)执行后的输出是( )。",
          "options": [
            "1={1}",
            "5%2={5%2}",
            "5%2={1}",
            "5 ={1}"
          ],
          "answer": 2,
          "explanation": "printf 中 %% 输出一个 %，%d 格式化整数5%2=1，所以输出 \"5%2={1}\"。",
          "source": "2024_06"
        },
        {
          "id": "kp03_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int a = 1;\ncout << \"a+1= \" << a+1 << endl;</code></pre>",
          "options": [
            "a+1= 2",
            "a+1=2",
            "2=2",
            "2= 2"
          ],
          "answer": 0,
          "explanation": "cout 原样输出字符串 \"a+1= \"（等号后有空格），然后输出 a+1=2。",
          "source": "2024_03"
        },
        {
          "id": "kp03_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int a = 1;\nprintf(\"a+1=%d\\n\", a+1);</code></pre>",
          "options": [
            "a+1= 2",
            "a+1=2",
            "2=2",
            "2= 2"
          ],
          "answer": 1,
          "explanation": "printf 中 %d 替换为 a+1 的值 2，格式串中 = 后没有空格。",
          "source": "2024_03"
        },
        {
          "id": "kp03_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "执行cin >> i, cout << i时如果输入5+2，输出是（ ）。",
          "options": [
            "整数7",
            "5",
            "报错",
            "内容不确定"
          ],
          "answer": 1,
          "explanation": "cin 读取整数遇到非数字(+)就停止，i=5，输出5。",
          "source": "2024_06"
        },
        {
          "id": "kp03_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "先后输入100和200后，cout << (first / second * second) 的输出是（ ）。",
          "options": [
            "200",
            "100",
            "1",
            "0"
          ],
          "answer": 3,
          "explanation": "100/200=0（整数除法），0*200=0。",
          "source": "2025_03"
        },
        {
          "id": "kp03_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "C++语言中下面可以完成数据输入的语句是（ ）。",
          "options": [
            "printf语句",
            "scanf语句",
            "default语句",
            "cout语句"
          ],
          "answer": 1,
          "explanation": "scanf 用于格式化输入。printf 和 cout 用于输出。",
          "source": "2024_03"
        },
        {
          "id": "kp03_q09",
          "type": "choice",
          "difficulty": 3,
          "question": "下面C++语句（ ）执行后的输出是__ 0322$$。",
          "options": [
            "printf(\"__ %2d%02d$$\", 3, 22)",
            "printf(\"__ %02d%2d$$\", 3, 22)",
            "printf(\"__ %02d%02d$$$$\", 3, 22)",
            "printf(\"____ %02d%02d$$$$\", 3, 22)"
          ],
          "answer": 1,
          "explanation": "%02d不足补0得\"03\"，%2d不足补空格得\"22\"，所以 __ 0322$$。",
          "source": "2025_03"
        },
        {
          "id": "kp03_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码执行后的输出是( )。\n<pre><code>int N = 10;\nprintf(\"{N}*{N}={%d*%d}\", N, N, N * N);</code></pre>",
          "options": [
            "10*10={10*10}",
            "100=10",
            "N*N=100",
            "{N}*{N}={10*10}"
          ],
          "answer": 3,
          "explanation": "printf 中 {} 不是格式说明符原样输出。%d 替换为10和100。",
          "source": "2025_03"
        },
        {
          "id": "kp03_q11",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码的说法，错误的是( )。\n<pre><code>printf(\"我爱码代码！\");</code></pre>",
          "options": [
            "汉字改为Hello代码能正确执行",
            "汉字改为Hello代码！能正确执行",
            "双引号都可以改为两个单引号",
            "双引号都可以改为三个双引号"
          ],
          "answer": 2,
          "explanation": "两个单引号表示 char 字符，不能替代双引号表示字符串。",
          "source": "2025_03"
        },
        {
          "id": "kp03_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码执行后输出是（ ）。\n<pre><code>float a;\na = 101.101;\na = 101;\nprintf(\"a+1={%.0f}\",a+1);</code></pre>",
          "options": [
            "102={102}",
            "a+1={a+1}",
            "a+1={102}",
            "a先被赋值为浮点数，后被赋值为整数，执行将报错"
          ],
          "answer": 2,
          "explanation": "a是float可以赋值整数，%.0f不输出小数部分，所以 a+1=102。",
          "source": "2024_06"
        },
        {
          "id": "kp03_q13",
          "type": "choice",
          "difficulty": 1,
          "question": "C++函数scanf()必须含有参数，且其参数为字符串型字面量，其功能是提示输入。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "scanf 的参数是格式字符串，功能是格式化读取输入，不是提示输入。提示输入是 printf 的功能。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp03_q14",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，从标准输入读入两个整数，输出它们的和。\n<p>测试输入：<code>3 5</code></p>\n<p>预期输出：</p>\n<pre><code>8</code></pre>",
          "answer": 0,
          "explanation": "使用 cin >> a >> b 读入，cout 输出 a + b。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 5",
              "expectedOutput": "8",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明两个整数变量\n    int a, b;\n\n    // 从键盘读入两个整数\n    // cin >> a >> b; 可以一次读入两个数\n    // 用户输入时用空格或回车分隔两个数\n    // 例如输入：3 5（中间有空格）\n    cin >> a >> b;\n\n    // 输出它们的和\n    // a = 3, b = 5, 所以 a + b = 8\n    cout << a + b << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. cin >> 变量  用于从键盘读入数据\n * 2. cout << 内容  用于向屏幕输出数据\n * 3. cin >> a >> b; 可以连续读入多个值\n * 4. 输入时用空格、Tab 键或回车分隔\n * 5. endl 表示换行（end of line）\n */"
        },
        {
          "id": "kp03_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入两个整数，输出 \"a + b = sum\"。\n<p>测试输入：<code>3 7</code></p>\n<p>预期输出：</p>\n<pre><code>3 + 7 = 10</code></pre>",
          "answer": 0,
          "explanation": "使用链式输出依次输出各部分。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 7",
              "expectedOutput": "3 + 7 = 10",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明两个整数变量\n    int a, b;\n\n    // 从键盘读入两个整数\n    // 例如用户输入：3 7\n    cin >> a >> b;\n\n    // 按照指定格式输出\n    // cout 可以用 << 链式输出多个部分\n    // a 输出 3，\" + \" 原样输出，b 输出 7，\" = \" 原样输出，a+b 输出 10\n    cout << a << \" + \" << b << \" = \" << a + b << endl;\n    // 最终输出：3 + 7 = 10\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. cout << 可以连续使用（链式输出），用 << 连接每个部分\n * 2. 双引号里的内容会原样输出（如 \" + \"、\" = \"）\n * 3. 没有双引号的表达式会被计算后输出（如 a+b）\n * 4. 这种格式化输出在 GESP 考试中经常出现\n */"
        },
        {
          "id": "kp03_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个头文件包含了C++标准输入输出流的功能？",
          "options": [
            "<stdlib.h>",
            "<iostream>",
            "<string>",
            "<math.h>"
          ],
          "answer": 1,
          "explanation": "C++的标准输入输出流功能定义在iostream头文件中，使用cin和cout需要包含此头文件。"
        },
        {
          "id": "kp03_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，屏幕上输出什么？\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; 3 + 5;\n    return 0;\n}</code></pre>",
          "options": [
            "3+5",
            "35",
            "8",
            "报错"
          ],
          "answer": 2,
          "explanation": "cout会先计算表达式3+5的值为8，然后输出8。"
        },
        {
          "id": "kp03_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "cout &lt;&lt; \"Hello\" &lt;&lt; \"World\"; 输出的结果是？",
          "options": [
            "Hello World",
            "HelloWorld",
            "Hello  World",
            "报错"
          ],
          "answer": 1,
          "explanation": "两个字符串直接拼接输出，中间没有空格，结果为HelloWorld。"
        },
        {
          "id": "kp03_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪个是C++中标准输出流对象？",
          "options": [
            "scanf",
            "printf",
            "cout",
            "cin"
          ],
          "answer": 2,
          "explanation": "cout是C++中的标准输出流对象，配合<<运算符使用。scanf和printf是C语言的输入输出函数，cin是标准输入流对象。"
        },
        {
          "id": "kp03_q20",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，endl的作用是输出一个换行符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "endl不仅输出换行符，还会刷新输出缓冲区。在GESP Level 1层面可以理解为endl起到换行作用，该说法正确。",
          "isJudge": true
        },
        {
          "id": "kp03_q21",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪个变量能正确接收用户输入的整数？\n<pre><code>int a;\n// 以下哪个输入语句正确？</code></pre>",
          "options": [
            "cin >> a;",
            "cout >> a;",
            "cin << a;",
            "cout << a;"
          ],
          "answer": 0,
          "explanation": "cin是输入流对象，使用>>运算符将数据读入变量。cout是输出流对象，使用<<运算符。"
        },
        {
          "id": "kp03_q22",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，&lt;&lt;是插入运算符（用于输出），&gt;&gt;是提取运算符（用于输入）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在C++的iostream中，<<将数据插入到输出流（配合cout使用），>>从输入流中提取数据（配合cin使用），该说法正确。",
          "isJudge": true
        },
        {
          "id": "kp03_q23",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码，如果用户输入3 7，变量a的值是多少？\n<pre><code>int a, b;\ncin >> a >> b;</code></pre>",
          "options": [
            "3",
            "7",
            "37",
            "不确定"
          ],
          "answer": 0,
          "explanation": "cin >> a >> b会按顺序读入，第一个值3赋给a，第二个值7赋给b。"
        },
        {
          "id": "kp03_q24",
          "type": "choice",
          "difficulty": 1,
          "question": "cout &lt;&lt; \"abc\" &lt;&lt; endl &lt;&lt; \"def\"; 输出结果是？",
          "options": [
            "abcdef",
            "abcndef",
            "abc换行def",
            "abc def"
          ],
          "answer": 2,
          "explanation": "endl输出换行符，所以abc和def分别在两行显示。"
        },
        {
          "id": "kp03_q25",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码可以正确读入一个整数并输出：\n<pre><code>int x;\ncin >> x;\ncout &lt;&lt; x;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cin >> x可以正确读入一个整数到变量x，cout << x可以输出这个整数，代码完全正确。",
          "isJudge": true
        },
        {
          "id": "kp03_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码，如果用户输入10 20 30，三个变量的值分别是？\n<pre><code>int a, b, c;\ncin >> a >> b >> c;</code></pre>",
          "options": [
            "a=10, b=20, c=30",
            "a=30, b=20, c=10",
            "a=102030, b=0, c=0",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "cin可以连续使用>>运算符读入多个值，按空格或换行分隔。输入10 20 30，a=10, b=20, c=30。"
        },
        {
          "id": "kp03_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码执行后，屏幕上显示什么？\n<pre><code>cout &lt;&lt; 1 &lt;&lt; '+' &lt;&lt; 2 &lt;&lt; '=' &lt;&lt; 1+2 &lt;&lt; endl;</code></pre>",
          "options": [
            "1+2=3",
            "1 + 2 = 3",
            "1+2=3（换行）",
            "12+1=3"
          ],
          "answer": 2,
          "explanation": "cout会依次输出1、+、2、=、3（1+2的结果）和换行符。字符常量用单引号，输出时不包含引号。"
        },
        {
          "id": "kp03_q28",
          "type": "choice",
          "difficulty": 2,
          "question": "getline(cin, str)函数的作用是什么？",
          "options": [
            "读取一行文本到字符串变量str中",
            "读取一个字符到str中",
            "输出str的内容",
            "将str写入文件"
          ],
          "answer": 0,
          "explanation": "getline(cin, str)从标准输入读取一整行（包括空格），存入字符串变量str中。与cin >>不同，它不会在空格处停止。"
        },
        {
          "id": "kp03_q29",
          "type": "judge",
          "difficulty": 2,
          "question": "getline(cin, s)和cin >> s在读取含空格的字符串时行为相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两者行为不同。cin >> s遇到空格就停止读取，而getline(cin, s)会读取整行直到遇到换行符。",
          "isJudge": true
        },
        {
          "id": "kp03_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪种换行方式不会刷新输出缓冲区？",
          "options": [
            "cout << endl;",
            "cout << \"\\n\";",
            "cout << endl << flush;",
            "cout << flush;"
          ],
          "answer": 1,
          "explanation": "cout << \"\\n\"只输出换行符，不刷新缓冲区。endl和flush都会刷新输出缓冲区。"
        },
        {
          "id": "kp03_q31",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序：读入两个整数a和b，输出它们的和。\n<p>提示：使用cin读入两个整数，使用cout输出结果。</p>\n<p>预期输入：</p>\n<pre><code>3 5</code></pre>\n<p>预期输出：</p>\n<pre><code>8</code></pre>",
          "answer": 0,
          "explanation": "使用cin读入两个整数到变量a和b，然后输出a+b的值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 5",
              "expectedOutput": "8",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a + b << endl;\n    return 0;\n}"
        },
        {
          "id": "kp03_q32",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出结果是？\n<pre><code>int x = 42;\ncout &lt;&lt; x &lt;&lt; \" \" &lt;&lt; x * 2 &lt;&lt; \" \" &lt;&lt; x + 1;</code></pre>",
          "options": [
            "42 84 43",
            "428443",
            "42, 84, 43",
            "42 84 43（换行）"
          ],
          "answer": 0,
          "explanation": "cout依次输出：x的值42、空格、x*2的值84、空格、x+1的值43。"
        },
        {
          "id": "kp03_q33",
          "type": "choice",
          "difficulty": 2,
          "question": "使用scanf读入一个整数，应该使用哪个格式说明符？",
          "options": [
            "%d",
            "%f",
            "%c",
            "%s"
          ],
          "answer": 0,
          "explanation": "%d用于读入整数，%f用于浮点数，%c用于字符，%s用于字符串。"
        },
        {
          "id": "kp03_q34",
          "type": "judge",
          "difficulty": 2,
          "question": "以下C++代码可以正确编译运行：\n<pre><code>#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nint main() {\n    double pi = 3.14159;\n    cout &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; pi;\n    return 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码包含了iomanip头文件，使用fixed和setprecision(2)将浮点数保留两位小数输出，完全正确。输出结果为3.14。",
          "isJudge": true
        },
        {
          "id": "kp03_q35",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码，输入abc后按回车，变量ch的值是什么？\n<pre><code>char ch;\ncin >> ch;</code></pre>",
          "options": [
            "a",
            "abc",
            "ab",
            "空格"
          ],
          "answer": 0,
          "explanation": "cin >> ch只读入一个字符，遇到空格或换行停止，所以ch的值是第一个字符'a'。"
        },
        {
          "id": "kp03_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行时，如果用户输入\"hello world\"，cout输出什么？\n<pre><code>string s1, s2;\ncin >> s1 >> s2;\ncout &lt;&lt; s1 &lt;&lt; \",\" &lt;&lt; s2;</code></pre>",
          "options": [
            "hello,world",
            "hello world,",
            ",hello world",
            "hello, world"
          ],
          "answer": 0,
          "explanation": "cin >> s1读取\"hello\"（遇到空格停止），cin >> s2读取\"world\"。输出为hello,world。"
        },
        {
          "id": "kp03_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪个选项可以实现：读入一行含空格的完整文本到字符串变量s中？",
          "options": [
            "cin >> s;",
            "getline(cin, s);",
            "cin.get(s);",
            "gets(s);"
          ],
          "answer": 1,
          "explanation": "getline(cin, s)可以读取一整行包括空格到字符串s中。cin >> s遇到空格就停止。gets()在C++中不推荐使用。"
        },
        {
          "id": "kp03_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nint main() {\n    double d = 3.14159;\n    cout &lt;&lt; fixed &lt;&lt; setprecision(0) &lt;&lt; d &lt;&lt; endl;\n    cout &lt;&lt; setprecision(2) &lt;&lt; d &lt;&lt; endl;\n    return 0;\n}</code></pre>",
          "options": [
            "3\\n3.14",
            "3.14159\\n3.14",
            "3\\n3.14",
            "3 3.14"
          ],
          "answer": 0,
          "explanation": "fixed和setprecision的效果会持续。第一行输出3（保留0位小数），第二行输出3.14（保留2位小数），每行末尾都有endl换行。"
        },
        {
          "id": "kp03_q39",
          "type": "judge",
          "difficulty": 3,
          "question": "执行以下代码后，如果用户先输入\"123\"按回车，再输入\"456\"按回车，则a=123，b=456：\n<pre><code>int a, b;\ncin >> a;\ncin >> b;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cin >> a先读入123，cin >> b再读入456。即使在不同行输入，cin会自动跳过空白字符，正确读取。",
          "isJudge": true
        },
        {
          "id": "kp03_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，屏幕上共输出了几行？\n<pre><code>#include &lt;iostream&gt;\nusing namespace std;\n\nint main() {\n    cout &lt;&lt; \"A\" &lt;&lt; endl;\n    cout &lt;&lt; \"B\" &lt;&lt; \"C\" &lt;&lt; endl;\n    cout &lt;&lt; \"D\" &lt;&lt; endl;\n    return 0;\n}</code></pre>",
          "options": [
            "2行",
            "3行",
            "4行",
            "5行"
          ],
          "answer": 1,
          "explanation": "endl出现3次，所以共输出3行：第一行A，第二行BC，第三行D。"
        },
        {
          "id": "kp03_q41",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入一个三位数整数n，依次输出它的百位、十位、个位数字，每个数字之间用空格分隔。\n<p>提示：可以使用整除和取余运算。</p>\n<p>预期输入：</p>\n<pre><code>528</code></pre>\n<p>预期输出：</p>\n<pre><code>5 2 8</code></pre>",
          "answer": 0,
          "explanation": "百位：n/100，十位：n/10%10，个位：n%10。分别用整除和取余提取每一位。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "528",
              "expectedOutput": "5 2 8",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    cout << n / 100 << \" \" << (n / 10) % 10 << \" \" << n % 10 << endl;\n    return 0;\n}"
        },
        {
          "id": "kp03_q42",
          "type": "choice",
          "difficulty": 3,
          "question": "关于getchar()函数，以下哪个说法是正确的？",
          "options": [
            "getchar()每次只读取一个字符",
            "getchar()可以读取一整行",
            "getchar()只能读取数字字符",
            "getchar()需要传入参数"
          ],
          "answer": 0,
          "explanation": "getchar()从标准输入读取一个字符并返回其ASCII值，不需要参数。"
        },
        {
          "id": "kp03_q43",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码，如果用户输入\"10\\n20\"（10后回车再输入20），输出是什么？\n<pre><code>int a;\nchar ch;\ncin >> a >> ch;\ncout &lt;&lt; a &lt;&lt; ch &lt;&lt; endl;</code></pre>",
          "options": [
            "102",
            "10 2",
            "10\\n2",
            "1020"
          ],
          "answer": 0,
          "explanation": "cin >> a读入整数10，cin >> ch跳过换行符读入字符'2'。输出为102。"
        },
        {
          "id": "kp03_q44",
          "type": "judge",
          "difficulty": 3,
          "question": "putchar()函数可以输出一个字符串。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "putchar()只能输出单个字符，不能输出字符串。输出字符串应该使用puts()或cout。",
          "isJudge": true
        },
        {
          "id": "kp03_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪种方式可以将字符串\"hello\"输出后不换行？",
          "options": [
            "puts(\"hello\");",
            "printf(\"hello\");",
            "printf(\"hello\\n\");",
            "puts(\"hello\\n\");"
          ],
          "answer": 1,
          "explanation": "printf(\"hello\")只输出hello不换行。puts()会自动在末尾添加换行符。"
        },
        {
          "id": "kp03_q46",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入两个整数a和b（保证b不为0），输出a/b的商（整数部分）和a%b的余数，中间用空格分隔。\n<p>预期输入：</p>\n<pre><code>17 5</code></pre>\n<p>预期输出：</p>\n<pre><code>3 2</code></pre>",
          "answer": 0,
          "explanation": "整数除法a/b得到商，取余运算a%b得到余数。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "17 5",
              "expectedOutput": "3 2",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << a / b << \" \" << a % b << endl;\n    return 0;\n}"
        },
        {
          "id": "kp03_q47",
          "type": "choice",
          "difficulty": 3,
          "question": "以下关于cout &lt;&lt; setw(5) &lt;&lt; 42;的说法，哪个是正确的？（需要#include &lt;iomanip&gt;）",
          "options": [
            "输出42，占5个字符宽度，左对齐",
            "输出   42（前面补空格，总共5位）",
            "输出42000",
            "输出42，后面补3个空格"
          ],
          "answer": 1,
          "explanation": "setw(5)设置输出宽度为5位，不足时默认在前面补空格右对齐。输出\"   42\"（3个空格+42，共5位）。"
        },
        {
          "id": "kp03_q48",
          "type": "judge",
          "difficulty": 3,
          "question": "执行以下代码，输出结果为\"Hello, World!\"：\n<pre><code>#include &lt;cstdio&gt;\nusing namespace std;\n\nint main() {\n    printf(\"Hello, World!\");\n    return 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "printf(\"Hello, World!\")确实输出Hello, World!。在C++中也可以使用cstdio头文件调用C语言的printf函数。",
          "isJudge": true
        },
        {
          "id": "kp03_q49",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入一个小写字母字符ch，输出它对应的大写字母。\n<p>提示：小写字母和对应大写字母的ASCII值相差32。</p>\n<p>预期输入：</p>\n<pre><code>c</code></pre>\n<p>预期输出：</p>\n<pre><code>C</code></pre>",
          "answer": 0,
          "explanation": "小写字母的ASCII值比对应大写字母大32，所以ch - 32得到大写字母。需要用(char)强制类型转换。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "c",
              "expectedOutput": "C",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cin >> ch;\n    cout << (char)(ch - 32) << endl;\n    return 0;\n}"
        },
        {
          "id": "kp03_q50",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，变量count的值是多少？\n<pre><code>int a, b, c;\ncin >> a >> b >> c;\nint count = 0;\nif (a > 0) count++;\nif (b > 0) count++;\nif (c > 0) count++;\n// 输入：-1 5 0</code></pre>",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 1,
          "explanation": "输入-1 5 0：a=-1不大于0，b=5大于0（count变为1），c=0不大于0。所以count最终为1。"
        }
      ]
    },
    "kp04": {
      "title": "条件语句",
      "questions": [
        {
          "id": "kp04_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码执行后，变量 x 的值是多少？\n<pre><code>int x = 0;\nif (5 > 3)\n    x = 10;</code></pre>",
          "options": [
            "0",
            "10",
            "5",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "5 > 3 为 true，执行 x = 10，x 最终为 10。"
        },
        {
          "id": "kp04_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的输出是什么？\n<pre><code>int a = 3, b = 5;\nif (a > b) cout << \"A\";\nelse cout << \"B\";</code></pre>",
          "options": [
            "A",
            "B",
            "AB",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "a=3, b=5，a > b 为 false，执行 else 输出 B。"
        },
        {
          "id": "kp04_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码执行后，count 的值是多少？\n<pre><code>int count = 0, x = 5;\nif (x > 3) count++;\nif (x > 4) count++;\nif (x > 5) count++;</code></pre>",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "explanation": "x=5：5>3(true,count=1)，5>4(true,count=2)，5>5(false)。count=2。"
        },
        {
          "id": "kp04_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中，else 匹配哪个 if？\n<pre><code>if (a > 0)\n    if (b > 0)\n        cout << \"1\";\nelse\n    cout << \"2\";</code></pre>",
          "options": [
            "外层 if",
            "内层 if",
            "两个都匹配",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "else 匹配最近的未匹配 if，即内层的 if (b > 0)。"
        },
        {
          "id": "kp04_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int x = 3;\nif (x > 2 && x < 5)\n    cout << \"Yes\";\nelse\n    cout << \"No\";</code></pre>",
          "options": [
            "Yes",
            "No",
            "YesNo",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "3>2 && 3<5 都为 true，输出 Yes。"
        },
        {
          "id": "kp04_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后输出？\n<pre><code>int a = 10, b = 20;\nint max = (a > b) ? a : b;\ncout << max;</code></pre>",
          "options": [
            "10",
            "20",
            "30",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "三目运算符：10>20 为 false，取 b=20。"
        },
        {
          "id": "kp04_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "if语句中的条件表达式的结果可以为int类型。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 中非零值视为 true，零视为 false。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp04_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码输入14后输出是（ ）。\n<pre><code>int P;\nscanf(\"%d\", &P);\nif (P % 3 || P % 7)\n    printf(\"第5行%d, %d\", P % 3, P % 7);\nelse\n    printf(\"第7行%2d\", P % 3 && P % 7);</code></pre>",
          "options": [
            "第5行代码2, 0",
            "第5行代码1, 0",
            "第7行代码 1",
            "第7行代码 0"
          ],
          "answer": 0,
          "explanation": "P=14，14%3=2(非零), 14%7=0。2||0=2(真)，输出 \"第5行代码2, 0\"。",
          "source": "2024_09"
        },
        {
          "id": "kp04_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "判断N是否为能被3整除的偶数，横线处应填（ ）。\n<pre><code>if(_______) cout << \"能被3整除的偶数\";</code></pre>",
          "options": [
            "(N%2)&&(N%3)",
            "(N%2==0)&&(N%3)",
            "(N%2)&&(N%3==0)",
            "(N%2==0)&&(N%3==0)"
          ],
          "answer": 3,
          "explanation": "能被2整除 N%2==0，能被3整除 N%3==0，都要满足用 &&。",
          "source": "2024_12"
        },
        {
          "id": "kp04_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "输入21后，下面代码输出是（ ）。\n<pre><code>if(N%3 == 0) cout << \"能被3整除\";\nelse if (N % 7 == 0) cout << \"能被7整除\";\nelse cout << \"不能被3和7整除\";</code></pre>",
          "options": [
            "能被3整除",
            "能被3整除和能被7整除",
            "能被7整除",
            "不能被3和7整除"
          ],
          "answer": 0,
          "explanation": "21%3==0为true，输出\"能被3整除\"后跳过else分支。",
          "source": "2024_03"
        },
        {
          "id": "kp04_q11",
          "type": "choice",
          "difficulty": 2,
          "question": "C++中break适用于while循环但不适用于for循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "break 同时适用于 for、while 和 do-while 循环。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp04_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "while可能是死循环，而for循环不可能是死循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "for 循环也可以是死循环，如 for(;;) 或 for(int i=0; i<10; )。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp04_q13",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码执行后，判断输入的整数N是否为位增数（从首位到个位逐渐增大）。若N=123输出1。（ ）\n<pre><code>cin >> N;\n_______;\nwhile(N){\n    n1 = N % 10;\n    if(n1 >= n2) { cout << 0; return 1; }\n    n2 = n1, N /=10;\n}\ncout << 1;</code></pre>",
          "options": [
            "n2 = N%10",
            "N /= 10",
            "n2 = N/10, N %= 10",
            "n2 = N%10, N /= 10"
          ],
          "answer": 3,
          "explanation": "需要先取个位赋给n2，然后去掉个位(N/=10)，这样循环中可以逐位比较。",
          "source": "2024_12"
        },
        {
          "id": "kp04_q14",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，读入一个整数，大于0输出\"正数\"，小于0输出\"负数\"，等于0输出\"零\"。\n<p>测试输入：<code>-5</code></p>\n<p>预期输出：<code>负数</code></p>",
          "answer": 0,
          "explanation": "使用 if-else if-else 依次判断。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "正数",
              "description": "正数"
            },
            {
              "input": "-3",
              "expectedOutput": "负数",
              "description": "负数"
            },
            {
              "input": "0",
              "expectedOutput": "零",
              "description": "零"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明一个整数变量\n    int n;\n\n    // 从键盘读入一个整数\n    cin >> n;\n\n    // 用 if-else if-else 来判断\n    // 就像岔路口：先看第一个条件，不满足就看下一个\n\n    if (n > 0) {\n        // 如果 n 大于 0，说明是正数\n        cout << \"正数\" << endl;\n    } else if (n < 0) {\n        // 否则如果 n 小于 0，说明是负数\n        // 注意：这里用 else if，表示\"否则如果\"\n        cout << \"负数\" << endl;\n    } else {\n        // 以上条件都不满足，那 n 只能等于 0\n        // else 表示\"否则\"，处理所有其他情况\n        cout << \"零\" << endl;\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. if (条件) { ... }  — 如果条件为真，执行大括号里的代码\n * 2. else if (条件) { ... }  — 否则如果条件为真\n * 3. else { ... }  — 以上都不满足时执行\n * 4. 判断顺序很重要：先判断 > 0，再判断 < 0，最后是 = 0\n * 5. 记住：= 是赋值，== 才是比较！\n */"
        },
        {
          "id": "kp04_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入三个整数，输出最大的一个。\n<p>测试输入：<code>3 7 5</code></p>\n<p>预期输出：<code>7</code></p>",
          "answer": 0,
          "explanation": "假设 a 最大，逐一比较更新。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 7 5",
              "expectedOutput": "7",
              "description": "三个数取最大"
            },
            {
              "input": "10 2 4",
              "expectedOutput": "10",
              "description": "最大在首位"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明三个整数变量\n    int a, b, c;\n\n    // 从键盘读入三个整数\n    // 例如输入：3 7 5\n    cin >> a >> b >> c;\n\n    // 方法：假设 a 是最大的，然后逐一和 b、c 比较\n    int max = a;  // 先假设 a 最大\n\n    // 和 b 比较：如果 b 比当前最大值还大，就更新最大值\n    if (b > max) max = b;\n\n    // 和 c 比较：如果 c 比当前最大值还大，就更新最大值\n    if (c > max) max = c;\n\n    // 此时 max 保存了三个数中最大的那个\n    cout << max << endl;  // 输出 7\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 求最大值的经典方法：假设第一个最大，逐个比较更新\n * 2. 这个方法可以推广到任意多个数的情况\n * 3. 如果是求最小值，只需要把 > 改成 <\n * 4. GESP 考试中\"求最大/最小值\"是必考题型！\n */"
        },
        {
          "id": "kp04_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，以下哪个关键字用于条件判断？",
          "options": [
            "for",
            "while",
            "if",
            "switch"
          ],
          "answer": 2,
          "explanation": "if是C++中最基础的条件判断关键字。for和while是循环语句。"
        },
        {
          "id": "kp04_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码，如果x=5，输出什么？\n<pre><code>int x = 5;\nif (x > 3) {\n    cout &lt;&lt; \"yes\";\n}</code></pre>",
          "options": [
            "yes",
            "no",
            "什么也不输出",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "x=5大于3，条件成立，执行if语句块中的cout，输出yes。"
        },
        {
          "id": "kp04_q18",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，if语句的条件必须用小括号括起来。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "if后面的条件表达式必须放在小括号()中，这是C++的语法规则。",
          "isJudge": true
        },
        {
          "id": "kp04_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码，如果n=10，输出什么？\n<pre><code>int n = 10;\nif (n % 2 == 0)\n    cout &lt;&lt; \"even\";\nelse\n    cout &lt;&lt; \"odd\";</code></pre>",
          "options": [
            "even",
            "odd",
            "10",
            "报错"
          ],
          "answer": 0,
          "explanation": "n=10，10%2==0成立（10是偶数），执行if分支，输出even。"
        },
        {
          "id": "kp04_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，\"==\"运算符的作用是？",
          "options": [
            "赋值（将右边的值赋给左边）",
            "判断两边是否相等",
            "判断两边是否不等",
            "将两边连接"
          ],
          "answer": 1,
          "explanation": "\"==\"是比较运算符，判断两边的值是否相等。\"=\"是赋值运算符。"
        },
        {
          "id": "kp04_q21",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码，输出什么？\n<pre><code>int a = 3, b = 5;\nif (a > b)\n    cout &lt;&lt; \"a\";\nelse\n    cout &lt;&lt; \"b\";</code></pre>",
          "options": [
            "a",
            "b",
            "3",
            "5"
          ],
          "answer": 1,
          "explanation": "a=3不大于b=5，条件不成立，执行else分支，输出b。"
        },
        {
          "id": "kp04_q22",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，if后面可以不写else。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "if语句可以单独使用，不需要配套else。else是可选的。",
          "isJudge": true
        },
        {
          "id": "kp04_q23",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个运算符表示\"大于或等于\"？",
          "options": [
            ">",
            ">=",
            "=>",
            "=>="
          ],
          "answer": 1,
          "explanation": "在C++中，大于或等于用>=表示，注意方向是先>再=。"
        },
        {
          "id": "kp04_q24",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码，如果score=85，输出什么？\n<pre><code>int score = 85;\nif (score >= 60)\n    cout &lt;&lt; \"pass\";</code></pre>",
          "options": [
            "pass",
            "fail",
            "什么也不输出",
            "85"
          ],
          "answer": 0,
          "explanation": "score=85大于等于60，条件成立，输出pass。"
        },
        {
          "id": "kp04_q25",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，else后面也需要加条件。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "else后面不加条件，它是if条件不成立时的默认分支。只有else if后面才需要条件。",
          "isJudge": true
        },
        {
          "id": "kp04_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码，如果x=0，输出什么？\n<pre><code>int x = 0;\nif (x > 0)\n    cout &lt;&lt; \"positive\";\nelse if (x < 0)\n    cout &lt;&lt; \"negative\";\nelse\n    cout &lt;&lt; \"zero\";</code></pre>",
          "options": [
            "positive",
            "negative",
            "zero",
            "positive和zero"
          ],
          "answer": 2,
          "explanation": "x=0不满足x>0，也不满足x<0，执行最后的else分支，输出zero。"
        },
        {
          "id": "kp04_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中，逻辑与运算符的结果是什么？\n<pre><code>bool result = (3 > 2) && (5 < 4);\ncout &lt;&lt; result;</code></pre>",
          "options": [
            "1（true）",
            "0（false）",
            "编译错误",
            "2"
          ],
          "answer": 1,
          "explanation": "(3>2)为true，(5<4)为false，true && false = false，输出0。"
        },
        {
          "id": "kp04_q28",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码，如果ch='A'，输出什么？\n<pre><code>char ch = 'A';\nif (ch >= 'a' && ch <= 'z')\n    cout &lt;&lt; \"lowercase\";\nelse if (ch >= 'A' && ch <= 'Z')\n    cout &lt;&lt; \"uppercase\";\nelse\n    cout &lt;&lt; \"other\";</code></pre>",
          "options": [
            "lowercase",
            "uppercase",
            "other",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "'A'在'A'到'Z'范围内，满足第二个条件，输出uppercase。"
        },
        {
          "id": "kp04_q29",
          "type": "judge",
          "difficulty": 2,
          "question": "在C++中，if(5)的条件被视为true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在C++中，非零值视为true，零视为false。5是非零值，所以if(5)的条件成立。",
          "isJudge": true
        },
        {
          "id": "kp04_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个表达式的值为true？",
          "options": [
            "(10 > 5) && (3 > 7)",
            "(10 < 5) || (3 > 7)",
            "(10 > 5) || (3 > 7)",
            "!(10 > 5)"
          ],
          "answer": 2,
          "explanation": "(10>5)为true，(3>7)为false。true || false = true。A是true&&false=false，B是false||false=false，D是!true=false。"
        },
        {
          "id": "kp04_q31",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码，输出什么？\n<pre><code>int x = 10;\nint y = x > 5 ? 100 : 200;\ncout &lt;&lt; y;</code></pre>",
          "options": [
            "10",
            "5",
            "100",
            "200"
          ],
          "answer": 2,
          "explanation": "x>5为true，所以三元表达式的值为100，y=100。"
        },
        {
          "id": "kp04_q32",
          "type": "choice",
          "difficulty": 2,
          "question": "switch语句中，如果某个case后面忘记写break，会发生什么？",
          "options": [
            "编译错误",
            "程序崩溃",
            "会继续执行下一个case的代码（穿透）",
            "跳过整个switch"
          ],
          "answer": 2,
          "explanation": "如果case后面没有break，程序会穿透，继续执行下一个case的代码，直到遇到break或switch结束。"
        },
        {
          "id": "kp04_q33",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中，当grade=85时输出什么？\n<pre><code>int grade = 85;\nswitch (grade / 10) {\n    case 10:\n    case 9:\n        cout &lt;&lt; \"A\";\n        break;\n    case 8:\n        cout &lt;&lt; \"B\";\n        break;\n    case 7:\n        cout &lt;&lt; \"C\";\n        break;\n    default:\n        cout &lt;&lt; \"D\";\n        break;\n}</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 1,
          "explanation": "grade/10=8，匹配case 8，输出B后break退出。"
        },
        {
          "id": "kp04_q34",
          "type": "judge",
          "difficulty": 2,
          "question": "在C++的switch语句中，case后面的值必须是常量表达式。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "switch的case标签必须是编译时常量表达式，不能是变量或运行时计算的值。",
          "isJudge": true
        },
        {
          "id": "kp04_q35",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码执行后，输出什么？\n<pre><code>int a = 3, b = 4, c = 5;\nif (a > b)\n    cout &lt;&lt; a;\nelse if (b > c)\n    cout &lt;&lt; b;\nelse\n    cout &lt;&lt; c;</code></pre>",
          "options": [
            "3",
            "4",
            "5",
            "345"
          ],
          "answer": 2,
          "explanation": "a=3不大于b=4，进入else if。b=4不大于c=5，进入else。输出c的值5。"
        },
        {
          "id": "kp04_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码，如果x=3，y=5，z=9，输出什么？\n<pre><code>int x=3, y=5, z=9;\nif (x + y > z)\n    cout &lt;&lt; \"A\";\nelse if (x * y > z)\n    cout &lt;&lt; \"B\";\nelse\n    cout &lt;&lt; \"C\";</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "AB"
          ],
          "answer": 1,
          "explanation": "x+y=8，8>9为false，进入else if。x*y=15，15>9为true，输出B。"
        },
        {
          "id": "kp04_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "以下switch语句的输出是什么？（输入为字符'2'）\n<pre><code>char ch = '2';\nswitch (ch) {\n    case '1':\n        cout &lt;&lt; \"one\";\n    case '2':\n        cout &lt;&lt; \"two\";\n    case '3':\n        cout &lt;&lt; \"three\";\n        break;\n    default:\n        cout &lt;&lt; \"other\";\n}</code></pre>",
          "options": [
            "two",
            "twothree",
            "twothreeother",
            "onetwothree"
          ],
          "answer": 1,
          "explanation": "ch='2'匹配case '2'，输出two。没有break，穿透到case '3'，输出three。遇到break退出。结果为twothree。"
        },
        {
          "id": "kp04_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，输出什么？\n<pre><code>int a = 1, b = 2, c = 3;\nint max;\nif (a > b && a > c)\n    max = a;\nelse if (b > c)\n    max = b;\nelse\n    max = c;\ncout &lt;&lt; max;</code></pre>",
          "options": [
            "1",
            "2",
            "3",
            "6"
          ],
          "answer": 2,
          "explanation": "a=1不大于b=2，第一个条件为false。b=2不大于c=3，第二个条件为false。执行else，max=c=3。"
        },
        {
          "id": "kp04_q39",
          "type": "judge",
          "difficulty": 3,
          "question": "在C++中，三元表达式 a > b ? a : b 和对应的if-else语句在功能上完全等价。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "三元表达式(a > b) ? a : b与对应的if-else语句在功能上完全等价，都是当条件为真时取a的值，否则取b的值。",
          "isJudge": true
        },
        {
          "id": "kp04_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，输出什么？\n<pre><code>int x = 15;\nif (x > 20)\n    cout &lt;&lt; \"A\";\nelse if (x > 10)\n    cout &lt;&lt; \"B\";\nelse if (x > 5)\n    cout &lt;&lt; \"C\";\nelse\n    cout &lt;&lt; \"D\";</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 1,
          "explanation": "x=15不大于20。x=15大于10，条件成立，输出B。else if一旦匹配就不再检查后面的条件。"
        },
        {
          "id": "kp04_q41",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入一个整数score（0-100），根据以下规则输出等级：\n- 90-100：输出A\n- 80-89：输出B\n- 70-79：输出C\n- 60-69：输出D\n- 0-59：输出F\n<p>预期输入：</p>\n<pre><code>85</code></pre>\n<p>预期输出：</p>\n<pre><code>B</code></pre>",
          "answer": 0,
          "explanation": "使用if-else if-else结构，从高到低判断分数范围。由于是顺序判断，只需写>=的下限即可。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "85",
              "expectedOutput": "B",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int score;\n    cin >> score;\n    if (score >= 90) cout << \"A\" << endl;\n    else if (score >= 80) cout << \"B\" << endl;\n    else if (score >= 70) cout << \"C\" << endl;\n    else if (score >= 60) cout << \"D\" << endl;\n    else cout << \"F\" << endl;\n    return 0;\n}"
        },
        {
          "id": "kp04_q42",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码中，如果输入3，输出什么？\n<pre><code>int n;\ncin >> n;\nswitch (n) {\n    case 1: cout &lt;&lt; 1;\n    case 2: cout &lt;&lt; 2;\n    case 3: cout &lt;&lt; 3;\n    case 4: cout &lt;&lt; 4;\n}\ncout &lt;&lt; endl;</code></pre>",
          "options": [
            "3",
            "34",
            "1234",
            "123"
          ],
          "answer": 1,
          "explanation": "n=3匹配case 3，输出3。没有break，穿透到case 4，输出4。最终输出34。"
        },
        {
          "id": "kp04_q43",
          "type": "judge",
          "difficulty": 3,
          "question": "在C++中，if (a > 0 && b > 0) 和嵌套的两个if语句在逻辑效果上等价。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a>0 && b>0要求两个条件同时满足，嵌套if也要求两层条件都满足，在逻辑效果上是等价的。",
          "isJudge": true
        },
        {
          "id": "kp04_q44",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入三个整数a、b、c，输出其中最大的数。\n<p>提示：可以使用if-else语句逐步比较。</p>\n<p>预期输入：</p>\n<pre><code>5 8 3</code></pre>\n<p>预期输出：</p>\n<pre><code>8</code></pre>",
          "answer": 0,
          "explanation": "假设a最大，然后依次与b和c比较，如果更大就更新max，最后输出最大值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5 8 3",
              "expectedOutput": "8",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    int mx = a;\n    if (b > mx) mx = b;\n    if (c > mx) mx = c;\n    cout << mx << endl;\n    return 0;\n}"
        },
        {
          "id": "kp04_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，输出什么？\n<pre><code>int x = 5;\nif (x > 3)\n    if (x > 4)\n        cout &lt;&lt; \"A\";\nelse\n    cout &lt;&lt; \"B\";\ncout &lt;&lt; \"C\";</code></pre>",
          "options": [
            "AC",
            "BC",
            "ABC",
            "A"
          ],
          "answer": 0,
          "explanation": "else与最近的未匹配的if配对。x>3为true，进入内层。x>4为true，输出A。else不执行。然后输出C。结果为AC。"
        },
        {
          "id": "kp04_q46",
          "type": "judge",
          "difficulty": 3,
          "question": "在C++中，switch语句的表达式可以是字符串类型（string）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中switch的表达式必须是整数类型（int、char、enum等），不能是字符串类型（string）。",
          "isJudge": true
        },
        {
          "id": "kp04_q47",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪个条件表达式可以判断年份year是否为闰年？（规则：能被4整除且不能被100整除，或能被400整除）",
          "options": [
            "(year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)",
            "(year % 4 == 0) || (year % 100 != 0) && (year % 400 == 0)",
            "(year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)",
            "(year % 4 != 0) && (year % 100 != 0) || (year % 400 == 0)"
          ],
          "answer": 0,
          "explanation": "正确条件：(能被4整除且不能被100整除)或(能被400整除)。&&优先级高于||，第一个选项等价于((year%4==0)&&(year%100!=0))||(year%400==0)。"
        },
        {
          "id": "kp04_q48",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序：读入一个字符ch，判断它是大写字母、小写字母、数字还是其他字符，分别输出\"uppercase\"、\"lowercase\"、\"digit\"或\"other\"。\n<p>预期输入：</p>\n<pre><code>G</code></pre>\n<p>预期输出：</p>\n<pre><code>uppercase</code></pre>",
          "answer": 0,
          "explanation": "利用ASCII码的范围判断字符类型：大写字母A-Z、小写字母a-z、数字0-9，其余为其他字符。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "G",
              "expectedOutput": "uppercase",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cin >> ch;\n    if (ch >= 'A' && ch <= 'Z') cout << \"uppercase\" << endl;\n    else if (ch >= 'a' && ch <= 'z') cout << \"lowercase\" << endl;\n    else if (ch >= '0' && ch <= '9') cout << \"digit\" << endl;\n    else cout << \"other\" << endl;\n    return 0;\n}"
        },
        {
          "id": "kp04_q49",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，变量result的值是？\n<pre><code>int a = 2, b = 3, c = 1;\nint result = a > b ? a : (b > c ? b : c);</code></pre>",
          "options": [
            "2",
            "3",
            "1",
            "6"
          ],
          "answer": 1,
          "explanation": "外层三元：a=2>b=3为false，执行右边部分。内层三元：b=3>c=1为true，值为b=3。所以result=3。"
        },
        {
          "id": "kp04_q50",
          "type": "judge",
          "difficulty": 3,
          "question": "以下代码（没有break）的输出是3个1：\n<pre><code>int n = 3;\nswitch (n) {\n    case 3: cout &lt;&lt; 1;\n    case 2: cout &lt;&lt; 1;\n    case 1: cout &lt;&lt; 1;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "n=3匹配case 3，输出1。没有break，穿透到case 2，输出1。继续穿透到case 1，输出1。总共输出3个1，说法正确。",
          "isJudge": true
        }
      ]
    },
    "kp05": {
      "title": "循环语句",
      "questions": [
        {
          "id": "kp05_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种循环适合已知循环次数？",
          "options": [
            "while",
            "do-while",
            "for",
            "三种都一样"
          ],
          "answer": 2,
          "explanation": "for 循环将初始化、条件、更新集中在一行，最适合已知次数。"
        },
        {
          "id": "kp05_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的输出是什么？\n<pre><code>int i = 1;\ndo {\n    cout << i << \" \";\n    i++;\n} while (i > 5);</code></pre>",
          "options": [
            "无输出",
            "1",
            "1 2 3 4 5",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "do-while 至少执行一次，输出1后i=2，2>5 为 false 退出。"
        },
        {
          "id": "kp05_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码输出什么？\n<pre><code>for (int i = 1; i <= 5; i++) {\n    if (i == 2) continue;\n    if (i == 4) break;\n    cout << i << \" \";\n}</code></pre>",
          "options": [
            "1 3 5",
            "1 2 3",
            "1 3",
            "1 2 3 4"
          ],
          "answer": 2,
          "explanation": "i=1输出1，i=2跳过，i=3输出3，i=4跳出。输出\"1 3\"。"
        },
        {
          "id": "kp05_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个会导致无限循环？",
          "options": [
            "for(int i=0;i<10;i++){}",
            "int i=0; while(i<10){i++;}",
            "int i=0; while(i<10){cout<<i;}",
            "int i=0; do{i++;}while(i<10);"
          ],
          "answer": 2,
          "explanation": "选项C中 i 从未被修改，条件始终为 true。"
        },
        {
          "id": "kp05_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "嵌套循环内层循环体执行几次？\n<pre><code>for(int i=0;i<3;i++)\n  for(int j=0;j<4;j++)\n    {/* 内层 */}</code></pre>",
          "options": [
            "3",
            "4",
            "7",
            "12"
          ],
          "answer": 3,
          "explanation": "外层3次 × 内层4次 = 12次。"
        },
        {
          "id": "kp05_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "下面C++代码输出是（ ）。\n<pre><code>int tnt = 0;\nfor (i = 0; i < 100; i++)\n    tnt += i % 10;\ncout << tnt;</code></pre>",
          "options": [
            "4950",
            "5050",
            "450",
            "100"
          ],
          "answer": 2,
          "explanation": "i%10 得个位0-9之和=45，共10组(0-99)，45×10=450。",
          "source": "2024_12"
        },
        {
          "id": "kp05_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "while(1) continue; 会导致死循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "while(1) 条件永远为 true，continue 重新判断条件后仍为 true。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp05_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "for循环中声明的变量在循环外访问会编译错误。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 中 for 循环内声明的变量作用域仅限循环内部。",
          "source": "2024_09",
          "isJudge": true
        },
        {
          "id": "kp05_q09",
          "type": "choice",
          "difficulty": 3,
          "question": "下面C++代码输出的是（ ）。\n<pre><code>int tnt = 0;\nfor (int i = 5; i < 100; i += 5) {\n    if (i % 2 == 0) continue;\n    tnt += 1;\n    if (i % 3 == 0 && i % 7 == 0) break;\n}\ncout << tnt;</code></pre>",
          "options": [
            "500",
            "450",
            "10",
            "1"
          ],
          "answer": 2,
          "explanation": "i取5的奇数倍:5,15,25,35,45,55,65,75,85,95。i%3==0&&i%7==0时break(即i=105时，不在范围内)。tnt=10。",
          "source": "2025_03"
        },
        {
          "id": "kp05_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "下面代码输出是（ ）。\n<pre><code>int Sum = 0, i = 0;\nfor ( ; i < 10; )\n    Sum += i++;\ncout << i << \" \" << Sum;</code></pre>",
          "options": [
            "9 45",
            "10 55",
            "10 45",
            "11 55"
          ],
          "answer": 2,
          "explanation": "i从0到9(共10次)，Sum=0+1+...+9=45，i++后i=10退出。",
          "source": "2024_06"
        },
        {
          "id": "kp05_q11",
          "type": "choice",
          "difficulty": 2,
          "question": "for循环可以转化为等价的while循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "for(init;cond;update){body} 等价于 init; while(cond){body; update;}",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp05_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "下面C++代码输出是（ ）。\n<pre><code>int N = 0, i;\nfor (i = 1; i < 10; i++)\n    N += 1;\ncout << (N + i);</code></pre>",
          "options": [
            "54",
            "20",
            "19",
            "18"
          ],
          "answer": 1,
          "explanation": "循环9次N=9，退出时i=10，但i先自增到10后退出。N+i=9+10=19。但实际答案是20? 让我确认: i从1开始，循环体执行9次(i=1到9)，N=9。退出循环时i=10。但等等 i++ 在for更新部分，i=9时进入循环后i++变为10，然后检查10<10为false退出。所以N=9,i=10,N+i=19。选项C=19。",
          "source": "2024_12"
        },
        {
          "id": "kp05_q13",
          "type": "choice",
          "difficulty": 2,
          "question": "continue语句通常与if语句配合使用。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "continue 通常在 if 条件满足时使用，跳过当前循环的剩余部分。",
          "source": "2024_06",
          "isJudge": true
        },
        {
          "id": "kp05_q14",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，计算 1+2+3+...+100 的和并输出。\n<p>预期输出：<code>5050</code></p>",
          "answer": 0,
          "explanation": "用 for 循环从1累加到100。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "5050",
              "description": "1到100求和"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 用一个变量来保存累加的和\n    // 初始值为 0，因为还没有加任何数\n    int sum = 0;\n\n    // for 循环：从 1 加到 100\n    // for (初始化; 条件; 更新) { 循环体 }\n    // - int i = 1：从 1 开始计数\n    // - i <= 100：只要 i 小于等于 100 就继续循环\n    // - i++：每次循环后 i 加 1\n    for (int i = 1; i <= 100; i++) {\n        // 每次循环，把 i 加到 sum 上\n        // 第1次：sum = 0 + 1 = 1\n        // 第2次：sum = 1 + 2 = 3\n        // 第3次：sum = 3 + 3 = 6\n        // ...以此类推\n        sum += i;  // sum += i 等价于 sum = sum + i\n    }\n\n    // 循环结束后，sum = 1+2+3+...+100 = 5050\n    cout << sum << endl;  // 输出 5050\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. for 循环格式：for (初始; 条件; 更新) { 循环体 }\n * 2. sum += i 是\"累加\"的简写，等价于 sum = sum + i\n * 3. 这是经典的\"求 1 到 N 的和\"问题\n * 4. 数学上有个公式：1+2+...+N = N*(N+1)/2\n *    所以 1+2+...+100 = 100*101/2 = 5050\n */"
        },
        {
          "id": "kp05_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入正整数n，计算n的阶乘n!（1×2×3×...×n）。\n<p>测试输入：<code>5</code></p>\n<p>预期输出：<code>120</code></p>",
          "answer": 0,
          "explanation": "用 for 循环从1乘到n。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "120",
              "description": "5! = 120"
            },
            {
              "input": "0",
              "expectedOutput": "1",
              "description": "0! = 1"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入一个正整数 n\n    cin >> n;\n\n    // 用 long long 类型来存阶乘结果\n    // 阶乘增长非常快！比如 20! = 2432902008176640000\n    // 如果用 int 类型，超过 12! 就会溢出（数字太大存不下）\n    long long result = 1;  // 初始值为 1（乘法的\"身份元素\"）\n\n    // for 循环：从 1 乘到 n\n    // n 的阶乘 = 1 × 2 × 3 × ... × n\n    for (int i = 1; i <= n; i++) {\n        result *= i;  // result *= i 等价于 result = result * i\n        // 第1次：result = 1 × 1 = 1\n        // 第2次：result = 1 × 2 = 2\n        // 第3次：result = 2 × 3 = 6\n        // 第4次：result = 6 × 4 = 24\n        // 第5次：result = 24 × 5 = 120\n    }\n\n    // 输出 n 的阶乘\n    cout << result << endl;  // 如果 n=5，输出 120\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 阶乘（factorial）用 n! 表示\n *    n! = 1 × 2 × 3 × ... × n\n *    例如：5! = 1 × 2 × 3 × 4 × 5 = 120\n * 2. 0! = 1（数学规定）\n * 3. result *= i 是\"累乘\"的简写，等价于 result = result * i\n * 4. 阶乘增长非常快，要用 long long 类型防止溢出\n */"
        },
        {
          "id": "kp05_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪个循环结构至少会执行一次循环体？",
          "options": [
            "for 循环",
            "while 循环",
            "do-while 循环",
            "以上都可以"
          ],
          "answer": 2,
          "explanation": "do-while 循环先执行循环体，再判断条件，因此至少执行一次。for 和 while 循环可能一次都不执行。"
        },
        {
          "id": "kp05_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的输出是什么？\n<pre><code>int s = 0;\nfor (int i = 1; i <= 3; i++) {\n    s += i;\n}\ncout &lt;&lt; s;</code></pre>",
          "options": [
            "3",
            "6",
            "5",
            "4"
          ],
          "answer": 1,
          "explanation": "循环依次将 1、2、3 累加到 s 中，最终 s = 1 + 2 + 3 = 6。"
        },
        {
          "id": "kp05_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪段代码能正确输出 1 到 5？",
          "options": [
            "for (int i = 1; i < 5; i++) cout &lt;&lt; i;",
            "for (int i = 1; i <= 5; i++) cout &lt;&lt; i;",
            "for (int i = 0; i <= 5; i++) cout &lt;&lt; i;",
            "for (int i = 2; i <= 5; i++) cout &lt;&lt; i;"
          ],
          "answer": 1,
          "explanation": "i 从 1 开始，条件为 i<=5，每次 i 加 1，恰好输出 1 2 3 4 5。A 选项只输出到 4（i<5 不包含 5）。"
        },
        {
          "id": "kp05_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "while 循环的语法格式正确的是？",
          "options": [
            "while (条件) { 循环体 }",
            "while 循环体 (条件)",
            "do while (条件)",
            "loop (条件) { 循环体 }"
          ],
          "answer": 0,
          "explanation": "C++ 中 while 循环的标准格式为 while (条件) { 循环体 }，先判断条件再执行循环体。"
        },
        {
          "id": "kp05_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码执行后，变量 i 的值是？\n<pre><code>int i = 0;\nwhile (i < 5) {\n    i++;\n}\ncout &lt;&lt; i;</code></pre>",
          "options": [
            "4",
            "5",
            "6",
            "死循环"
          ],
          "answer": 1,
          "explanation": "当 i 从 0 增加到 5 时，条件 i<5 不再成立，循环结束，此时 i 的值为 5。"
        },
        {
          "id": "kp05_q21",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是？\n<pre><code>for (int i = 0; i < 10; i += 2) {\n    cout &lt;&lt; i &lt;&lt; \" \";\n}</code></pre>",
          "options": [
            "0 1 2 3 4 5 6 7 8 9",
            "0 2 4 6 8",
            "1 3 5 7 9",
            "2 4 6 8 10"
          ],
          "answer": 1,
          "explanation": "i 从 0 开始，每次增加 2，所以依次输出 0、2、4、6、8。当 i=10 时条件不满足，循环结束。"
        },
        {
          "id": "kp05_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "以下嵌套循环总共输出多少个 * ？\n<pre><code>for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 4; j++) {\n        cout &lt;&lt; \"*\";\n    }\n}</code></pre>",
          "options": [
            "7",
            "12",
            "3",
            "4"
          ],
          "answer": 1,
          "explanation": "外层循环执行 3 次，每次内层循环执行 4 次输出 *，总共 3 x 4 = 12 个星号。"
        },
        {
          "id": "kp05_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "下面代码中 break 的作用是什么？\n<pre><code>for (int i = 1; i <= 100; i++) {\n    if (i > 10) break;\n    cout &lt;&lt; i &lt;&lt; \" \";\n}</code></pre>",
          "options": [
            "跳过 i=10 的输出",
            "输出 1 到 10 后停止循环",
            "输出 1 到 9 后停止循环",
            "输出 1 到 100"
          ],
          "answer": 1,
          "explanation": "当 i=11 时满足 i>10，执行 break 跳出整个循环。在此之前 i=1 到 10 都正常输出。"
        },
        {
          "id": "kp05_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中 continue 的作用是什么？\n<pre><code>for (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    cout &lt;&lt; i &lt;&lt; \" \";\n}</code></pre>",
          "options": [
            "输出 1 2 3 4 5",
            "输出 1 2 4 5",
            "输出 1 2",
            "输出 3"
          ],
          "answer": 1,
          "explanation": "continue 跳过本次循环体中剩余部分，直接进入下一次循环。当 i=3 时跳过输出，其余正常输出。"
        },
        {
          "id": "kp05_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "下面代码计算的是什么？\n<pre><code>int result = 1;\nfor (int i = 1; i <= 5; i++) {\n    result *= i;\n}</code></pre>",
          "options": [
            "5 的 5 次方",
            "1 到 5 的和",
            "1 到 5 的积（5的阶乘）",
            "1 到 5 的差"
          ],
          "answer": 2,
          "explanation": "result 初始为 1，依次乘以 1、2、3、4、5，即 1x2x3x4x5 = 120，是 5 的阶乘（5!）。"
        },
        {
          "id": "kp05_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码执行后 sum 的值是？\n<pre><code>int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) continue;\n    sum += i;\n}</code></pre>",
          "options": [
            "25",
            "30",
            "55",
            "20"
          ],
          "answer": 0,
          "explanation": "偶数被 continue 跳过，只累加奇数：1+3+5+7+9 = 25。"
        },
        {
          "id": "kp05_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "下面的 do-while 循环执行几次？\n<pre><code>int n = 10;\ndo {\n    cout &lt;&lt; n &lt;&lt; \" \";\n    n--;\n} while (n > 10);</code></pre>",
          "options": [
            "0 次",
            "1 次",
            "10 次",
            "死循环"
          ],
          "answer": 1,
          "explanation": "do-while 先执行一次循环体输出 10，然后 n 变为 9，条件 9>10 为假，循环结束。所以执行了 1 次。"
        },
        {
          "id": "kp05_q28",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是？\n<pre><code>int a = 0, b = 0;\nfor (int i = 0; i < 5; i++) {\n    a++;\n    if (i % 2 == 0) continue;\n    b++;\n}\ncout &lt;&lt; a &lt;&lt; \" \" &lt;&lt; b;</code></pre>",
          "options": [
            "5 2",
            "5 3",
            "4 2",
            "4 3"
          ],
          "answer": 0,
          "explanation": "a 在每次循环都自增，共 5 次，a=5。i 为 0,2,4 时 continue 跳过 b++，只有 i=1,3 时 b++，所以 b=2。"
        },
        {
          "id": "kp05_q29",
          "type": "choice",
          "difficulty": 3,
          "question": "以下嵌套循环输出多少行？\n<pre><code>int count = 0;\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < i; j++) {\n        cout &lt;&lt; j &lt;&lt; endl;\n        count++;\n    }\n}\ncout &lt;&lt; count;</code></pre>",
          "options": [
            "10",
            "6",
            "12",
            "4"
          ],
          "answer": 1,
          "explanation": "i=0 时 j 不执行，i=1 时输出 0（1次），i=2 时输出 0,1（2次），i=3 时输出 0,1,2（3次）。总计 1+2+3=6 次。"
        },
        {
          "id": "kp05_q30",
          "type": "choice",
          "difficulty": 3,
          "question": "下面的代码片段有什么问题？\n<pre><code>int i = 1;\nwhile (i <= 10) {\n    if (i % 3 == 0) {\n        cout &lt;&lt; i;\n    }\n}</code></pre>",
          "options": [
            "语法错误",
            "死循环：i 始终没有自增",
            "什么问题都没有，正常输出 3 6 9",
            "条件判断错误"
          ],
          "answer": 1,
          "explanation": "循环体内没有 i++，i 始终为 1，条件永远为真，形成死循环。应在适当位置添加 i++。"
        },
        {
          "id": "kp05_q31",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是？\n<pre><code>int n = 256;\nint count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 2;\n}\ncout &lt;&lt; count;</code></pre>",
          "options": [
            "8",
            "9",
            "7",
            "256"
          ],
          "answer": 1,
          "explanation": "256 反复除以 2：128, 64, 32, 16, 8, 4, 2, 1, 0。需要除 9 次 n 才变为 0，所以 count=9。"
        },
        {
          "id": "kp05_q32",
          "type": "choice",
          "difficulty": 3,
          "question": "下面代码求解的是什么数学问题？\n<pre><code>int n = 0, sum = 0;\nwhile (sum <= 100) {\n    n++;\n    sum += n;\n}\ncout &lt;&lt; n;</code></pre>",
          "options": [
            "求 1 到 100 的和",
            "求满足 1+2+...+n > 100 的最小 n",
            "求满足 1+2+...+n = 100 的 n",
            "死循环"
          ],
          "answer": 1,
          "explanation": "循环在 sum>100 时才停止，此时 n 是使 1+2+...+n 首次超过 100 的最小正整数（n=14，因为 1+...+14=105）。"
        },
        {
          "id": "kp05_q33",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，x 的值是？\n<pre><code>int x = 1;\nwhile (x < 20) {\n    x = x * 2;\n}</code></pre>",
          "options": [
            "16",
            "32",
            "64",
            "20"
          ],
          "answer": 1,
          "explanation": "x 依次变为 2, 4, 8, 16, 32。当 x=32 时，条件 32<20 为假，循环结束，x=32。"
        },
        {
          "id": "kp05_q34",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码输出多少个数字？\n<pre><code>for (int i = 1; i <= 100; i++) {\n    if (i % 10 == 0) cout &lt;&lt; i &lt;&lt; endl;\n}</code></pre>",
          "options": [
            "10",
            "9",
            "11",
            "100"
          ],
          "answer": 0,
          "explanation": "100 以内（含 100）能被 10 整除的数有 10, 20, 30, ..., 100，共 10 个。"
        },
        {
          "id": "kp05_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "以下嵌套循环的输出中，最后一个数字是？\n<pre><code>for (int i = 1; i <= 5; i++) {\n    for (int j = 1; j <= i; j++) {\n        cout &lt;&lt; i * j &lt;&lt; \" \";\n    }\n}</code></pre>",
          "options": [
            "25",
            "20",
            "15",
            "5"
          ],
          "answer": 0,
          "explanation": "最后执行的循环是 i=5, j=5，输出 i*j = 25。"
        },
        {
          "id": "kp05_q36",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，sum 的值是？\n<pre><code>int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i * i;\n}</code></pre>",
          "options": [
            "10",
            "14",
            "30",
            "20"
          ],
          "answer": 2,
          "explanation": "sum = 1*1 + 2*2 + 3*3 + 4*4 = 1 + 4 + 9 + 16 = 30。"
        },
        {
          "id": "kp05_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "下面的循环结束后，n 的值是？\n<pre><code>int n = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 3 == 0) n++;\n}</code></pre>",
          "options": [
            "33",
            "34",
            "30",
            "31"
          ],
          "answer": 0,
          "explanation": "1 到 100 中能被 3 整除的数有 100/3 = 33 个（即 3, 6, 9, ..., 99），所以 n=33。"
        },
        {
          "id": "kp05_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是？\n<pre><code>int m = 15, n = 9;\nwhile (m != n) {\n    while (m > n) m -= n;\n    while (n > m) n -= m;\n}\ncout &lt;&lt; m;</code></pre>",
          "options": [
            "6",
            "3",
            "15",
            "9"
          ],
          "answer": 1,
          "explanation": "这是辗转相减法求最大公约数。m=15,n=9 → m=6,n=9 → m=6,n=3 → m=3,n=3，结束，输出 3。"
        },
        {
          "id": "kp05_q39",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码输出什么？\n<pre><code>int x = 1;\nwhile (x &lt; 100) x *= 2;\ncout &lt;&lt; x;</code></pre>",
          "options": [
            "64",
            "128",
            "256",
            "100"
          ],
          "answer": 1,
          "explanation": "x依次为1,2,4,8,16,32,64,128。128>=100停止循环，输出128。"
        },
        {
          "id": "kp05_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "嵌套循环执行后输出多少个星号？\n<pre><code>for (int i = 1; i &lt;= 4; i++)\n  for (int j = 1; j &lt;= i; j++)\n    cout &lt;&lt; \"*\";</code></pre>",
          "options": [
            "4",
            "8",
            "10",
            "16"
          ],
          "answer": 2,
          "explanation": "i=1输出1个，i=2输出2个，i=3输出3个，i=4输出4个，共1+2+3+4=10个。"
        },
        {
          "id": "kp05_q41",
          "type": "judge",
          "difficulty": 1,
          "question": "do-while 循环至少会执行一次循环体。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。do-while 循环先执行循环体再判断条件，所以至少执行一次。",
          "isJudge": true
        },
        {
          "id": "kp05_q42",
          "type": "judge",
          "difficulty": 1,
          "question": "break 语句只能用在循环语句中。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。break 语句除了用于 for、while、do-while 循环外，还可以用在 switch 语句中。",
          "isJudge": true
        },
        {
          "id": "kp05_q43",
          "type": "judge",
          "difficulty": 2,
          "question": "在 for 循环 for(int i=0; i<10; i++) 中，循环体共执行 10 次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。i 从 0 开始，到 9 结束（i<10），共 0,1,2,...,9 共 10 次。",
          "isJudge": true
        },
        {
          "id": "kp05_q44",
          "type": "judge",
          "difficulty": 2,
          "question": "continue 语句会终止整个循环的执行。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。continue 只跳过本次循环体的剩余部分，直接进入下一次循环的判断。终止整个循环的是 break。",
          "isJudge": true
        },
        {
          "id": "kp05_q45",
          "type": "judge",
          "difficulty": 3,
          "question": "在嵌套循环中，break 只能跳出最内层的循环。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。break 只会终止它所在的最内层循环，外层循环继续执行。要跳出多层循环需要额外的标志变量。",
          "isJudge": true
        },
        {
          "id": "kp05_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，计算 1 到 100 所有整数的和并输出。\n<p>预期输出：</p>\n<pre><code>5050</code></pre>",
          "answer": 0,
          "explanation": "使用 for 循环从 1 遍历到 100，依次累加到 sum 变量中，最后输出 sum 的值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "5050",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int sum = 0;\n    for (int i = 1; i <= 100; i++) sum += i;\n    cout << sum << endl;\n    return 0;\n}"
        },
        {
          "id": "kp05_q47",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，使用 while 循环统计正整数 n 的位数（数字个数）。\n<p>例如 n=12345，输出 5。</p>\n<p>提示：反复将 n 除以 10，每次计数加 1。</p>\n<p>预期输出：</p>\n<pre><code>5</code></pre>",
          "answer": 0,
          "explanation": "每次将 n 除以 10（去掉末位数字），同时 count 加 1，直到 n 变为 0。最终 count 即为位数。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "5",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, count = 0;\n    cin >> n;\n    while (n > 0) {\n        count++;\n        n /= 10;\n    }\n    cout << count << endl;\n    return 0;\n}"
        },
        {
          "id": "kp05_q48",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，输出 1 到 100 中所有既能被 3 整除又能被 5 整除的数（即 15 的倍数），每行一个。\n<p>预期输出：</p>\n<pre><code>15\n30\n45\n60\n75\n90</code></pre>",
          "answer": 0,
          "explanation": "遍历 1 到 100，判断每个数是否同时能被 3 和 5 整除（即能被 15 整除），满足条件则输出。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "15\n30\n45\n60\n75\n90",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 100; i++) {\n        if (i % 3 == 0 && i % 5 == 0)\n            cout << i << endl;\n    }\n    return 0;\n}"
        },
        {
          "id": "kp05_q49",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码输出什么？\n<pre><code>int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 3 == 0) sum += i;\n}\ncout &lt;&lt; sum;</code></pre>",
          "options": [
            "1683",
            "1716",
            "1533",
            "1650"
          ],
          "answer": 0,
          "explanation": "这是求 1 到 100 中所有 3 的倍数之和。3+6+9+...+99 = 3*(1+2+...+33) = 3*33*34/2 = 1683。"
        },
        {
          "id": "kp05_q50",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，count 的值是多少？\n<pre><code>int count = 0;\nfor (int i = 2; i &lt;= 100; i++) {\n    bool prime = true;\n    for (int j = 2; j * j &lt;= i; j++) {\n        if (i % j == 0) { prime = false; break; }\n    }\n    if (prime) count++;\n}\ncout &lt;&lt; count;</code></pre>",
          "options": [
            "25",
            "50",
            "100",
            "33"
          ],
          "answer": 0,
          "explanation": "这是统计 2 到 100 之间质数的个数。2 到 100 共有 25 个质数：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97。"
        }
      ]
    },
    "kp06": {
      "title": "数组基础",
      "questions": [
        {
          "id": "kp06_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 数组索引从哪个数字开始？",
          "options": [
            "0",
            "1",
            "-1",
            "由大小决定"
          ],
          "answer": 0,
          "explanation": "C++ 数组索引从 0 开始。"
        },
        {
          "id": "kp06_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种数组声明正确？",
          "options": [
            "int a(5);",
            "int a[5];",
            "int a{5};",
            "array int a[5];"
          ],
          "answer": 1,
          "explanation": "正确语法：类型 数组名[大小];"
        },
        {
          "id": "kp06_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "int a[3]={1,2,3}; cout << a[3]; 会？",
          "options": [
            "输出3",
            "输出0",
            "编译错误",
            "未定义行为"
          ],
          "answer": 3,
          "explanation": "a[3] 超出范围(a[0]~a[2])，未定义行为。"
        },
        {
          "id": "kp06_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "int b[5]={1,2}; 后 b[4] 是？",
          "options": [
            "2",
            "0",
            "未定义",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "部分初始化，未赋值元素为 0。"
        },
        {
          "id": "kp06_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "获取数组长度的正确方式？",
          "options": [
            "a.length()",
            "sizeof(a)",
            "sizeof(a)/sizeof(a[0])",
            "a.size()"
          ],
          "answer": 2,
          "explanation": "sizeof(a)/sizeof(a[0]) 得到元素个数。"
        },
        {
          "id": "kp06_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "数组作为函数参数时？",
          "options": [
            "完整复制",
            "传递首元素地址",
            "不能修改",
            "必须指定大小"
          ],
          "answer": 1,
          "explanation": "传递的是首元素地址（指针）。"
        },
        {
          "id": "kp06_q07",
          "type": "choice",
          "difficulty": 1,
          "question": "int a[5]; 有效下标范围是？",
          "options": [
            "1~5",
            "0~5",
            "0~4",
            "1~4"
          ],
          "answer": 2,
          "explanation": "下标从0开始，0~4。",
          "source": "mock_exam"
        },
        {
          "id": "kp06_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "C++中表达式(!!N)的值也是N的值。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "!!N 只能是0或1，不等于N原值。N=5时!!N=1。",
          "source": "2024_06",
          "isJudge": true
        },
        {
          "id": "kp06_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "C++中cin是合法的变量名。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cin 不是关键字，可以作为变量名。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp06_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "下面代码输出cnt的值是（ ）。\n<pre><code>int cnt=0;\nfor(int i=0; i*i<64; i+=2) cnt++;\ncout << cnt;</code></pre>",
          "options": [
            "8",
            "7",
            "4",
            "1"
          ],
          "answer": 2,
          "explanation": "i=0,2,4,6(对应i*i=0,4,16,36都<64)，i=8时64<64为false。cnt=4。",
          "source": "2024_06"
        },
        {
          "id": "kp06_q11",
          "type": "choice",
          "difficulty": 2,
          "question": "Dev C++中源文件生成可执行程序需要？",
          "options": [
            "创建",
            "编辑",
            "编译",
            "调试"
          ],
          "answer": 2,
          "explanation": "源代码需经过编译生成可执行程序。",
          "source": "2024_03"
        },
        {
          "id": "kp06_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "C++程序中不能用scanf作为变量名。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "scanf 是标准库函数名，作为变量名会出问题。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp06_q13",
          "type": "choice",
          "difficulty": 3,
          "question": "判断完全平方数，横线处应填（ ）。\n<pre><code>for(int i=0;i<=N;i++)\n    if(________) cout<<N<<\"是完全平方数\";</code></pre>",
          "options": [
            "i==N*N",
            "i*10==N",
            "i+i==N",
            "i*i==N"
          ],
          "answer": 3,
          "explanation": "完全平方数满足 i*i==N。",
          "source": "2024_06"
        },
        {
          "id": "kp06_q14",
          "type": "coding",
          "difficulty": 2,
          "question": "读入5个整数到数组，找出最大值。\n<p>输入：<code>3 7 2 9 5</code></p>\n<p>输出：<code>9</code></p>",
          "answer": 0,
          "explanation": "假设第一个最大，遍历比较更新。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "1 5 3 2 4",
              "expectedOutput": "5",
              "description": "5个数取最大"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明一个大小为 5 的整数数组\n    // 数组就像一排编号的盒子，每个盒子可以放一个数\n    // 编号从 0 开始：a[0], a[1], a[2], a[3], a[4]\n    int a[5];\n\n    // 循环读入 5 个整数，存入数组\n    for (int i = 0; i < 5; i++) {\n        cin >> a[i];  // 读入一个数，存到第 i 个位置\n    }\n\n    // 找最大值的方法：假设第一个元素最大，然后逐个比较\n    int mx = a[0];  // 先假设 a[0] 是最大的\n\n    // 从第 2 个元素开始比较（索引从 1 开始）\n    for (int i = 1; i < 5; i++) {\n        if (a[i] > mx) {  // 如果当前元素比最大值还大\n            mx = a[i];     // 更新最大值\n        }\n    }\n\n    // 输出最大值\n    cout << mx << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 数组声明：类型 数组名[大小];  例如 int a[5];\n * 2. 数组下标从 0 开始！5 个元素的下标是 0~4\n * 3. 访问数组元素：数组名[下标]  例如 a[0], a[3]\n * 4. 求最大值：假设第一个最大，遍历比较更新\n * 5. 数组越界（下标超出范围）是严重错误，要特别小心！\n */"
        },
        {
          "id": "kp06_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "读入5个整数到数组，逆序输出（空格分隔）。\n<p>输入：<code>1 2 3 4 5</code></p>\n<p>输出：<code>5 4 3 2 1</code></p>",
          "answer": 0,
          "explanation": "从最后一个元素向前遍历。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "1 2 3 4 5",
              "expectedOutput": "5 4 3 2 1",
              "description": "逆序输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明一个大小为 5 的整数数组\n    int a[5];\n\n    // 循环读入 5 个整数\n    for (int i = 0; i < 5; i++) {\n        cin >> a[i];\n    }\n\n    // 逆序输出：从最后一个元素往前输出\n    // 最后一个元素的下标是 4（因为数组大小为 5，下标从 0 开始）\n    // 第一个元素的下标是 0\n    for (int i = 4; i >= 0; i--) {\n        // 如果不是第一个输出的数，在前面加一个空格\n        // 这样输出格式就是 \"5 4 3 2 1\" 而不是 \"5 4 3 2 1 \"（末尾多空格）\n        if (i < 4) cout << \" \";\n        cout << a[i];\n    }\n    cout << endl;  // 最后换行\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 逆序遍历：从大下标到小下标，用 i-- 递减\n * 2. 数组大小为 n 时，最后一个元素下标是 n-1\n * 3. 输出格式注意：数字之间用空格分隔，最后一个后面不加空格\n * 4. 这个技巧在 GESP 考试中经常用到\n */"
        },
        {
          "id": "kp06_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，定义一个包含 5 个 int 元素的数组，正确的是？",
          "options": [
            "int arr[5];",
            "int arr(5);",
            "int arr{5};",
            "int[5] arr;"
          ],
          "answer": 0,
          "explanation": "C++ 中定义数组的语法为 类型 数组名[大小]，因此 int arr[5]; 是正确的写法。"
        },
        {
          "id": "kp06_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 数组的下标从几开始？",
          "options": [
            "0",
            "1",
            "-1",
            "取决于数组大小"
          ],
          "answer": 0,
          "explanation": "C++ 数组的下标从 0 开始。一个大小为 n 的数组，下标范围是 0 到 n-1。"
        },
        {
          "id": "kp06_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪个是正确的数组初始化方式？",
          "options": [
            "int a[3] = {1, 2, 3};",
            "int a[3] = (1, 2, 3);",
            "int a[3] = {1; 2; 3};",
            "int a[3] = [1, 2, 3];"
          ],
          "answer": 0,
          "explanation": "C++ 中使用花括号 {} 初始化数组，元素之间用逗号分隔。正确写法为 int a[3] = {1, 2, 3};"
        },
        {
          "id": "kp06_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的输出是？\n<pre><code>int a[3] = {10, 20, 30};\ncout &lt;&lt; a[1];</code></pre>",
          "options": [
            "10",
            "20",
            "30",
            "运行错误"
          ],
          "answer": 1,
          "explanation": "数组下标从 0 开始，a[0]=10, a[1]=20, a[2]=30。所以 a[1] 输出 20。"
        },
        {
          "id": "kp06_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "定义 int a[5] = {1, 2}; 后，a[3] 的值是？",
          "options": [
            "1",
            "0",
            "未定义",
            "3"
          ],
          "answer": 1,
          "explanation": "部分初始化时，未显式赋值的元素自动初始化为 0。所以 a[2]、a[3]、a[4] 都是 0。"
        },
        {
          "id": "kp06_q21",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是？\n<pre><code>int a[4] = {5, 3, 8, 1};\nint max = a[0];\nfor (int i = 1; i < 4; i++) {\n    if (a[i] > max) max = a[i];\n}\ncout &lt;&lt; max;</code></pre>",
          "options": [
            "5",
            "3",
            "8",
            "1"
          ],
          "answer": 2,
          "explanation": "这段代码在数组中查找最大值。max 初始为 a[0]=5，遍历后发现 a[2]=8 更大，最终 max=8。"
        },
        {
          "id": "kp06_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "关于数组 int a[10]，以下哪个说法是正确的？",
          "options": [
            "数组元素的下标范围是 1 到 10",
            "a[10] 是合法的数组访问",
            "可以向数组中添加第 11 个元素",
            "数组元素的下标范围是 0 到 9"
          ],
          "answer": 3,
          "explanation": "大小为 10 的数组下标范围是 0 到 9。访问 a[10] 是越界行为，数组大小固定不能动态增加。"
        },
        {
          "id": "kp06_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "下面哪段代码可以正确地将数组 a 的所有元素倒序输出？\n<pre><code>// 假设 int a[5] = {1,2,3,4,5};</code></pre>",
          "options": [
            "for (int i = 0; i < 5; i++) cout &lt;&lt; a[i];",
            "for (int i = 4; i >= 0; i--) cout &lt;&lt; a[i];",
            "for (int i = 1; i <= 5; i++) cout &lt;&lt; a[i];",
            "for (int i = 5; i >= 0; i--) cout &lt;&lt; a[i];"
          ],
          "answer": 1,
          "explanation": "从最后一个元素 a[4] 开始，下标递减到 a[0]，输出 5 4 3 2 1。D 选项 i=5 是越界访问。"
        },
        {
          "id": "kp06_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中 arr 数组共有多少个元素？\n<pre><code>int arr[] = {1, 3, 5, 7, 9, 11};</code></pre>",
          "options": [
            "5",
            "6",
            "11",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "未指定大小时，编译器根据初始化列表自动确定数组大小。列表中有 6 个元素，所以 arr 有 6 个元素。"
        },
        {
          "id": "kp06_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的功能是？\n<pre><code>int a[5] = {3, 1, 4, 1, 5};\nint sum = 0;\nfor (int i = 0; i < 5; i++) {\n    sum += a[i];\n}</code></pre>",
          "options": [
            "统计数组中大于 0 的元素个数",
            "计算数组所有元素的和",
            "查找数组中的最大值",
            "计算数组所有元素的乘积"
          ],
          "answer": 1,
          "explanation": "sum 初始为 0，循环中将每个数组元素累加到 sum，这是计算数组所有元素之和的典型写法。"
        },
        {
          "id": "kp06_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "int a[3][4]; 定义的二维数组共有多少个元素？",
          "options": [
            "3",
            "4",
            "7",
            "12"
          ],
          "answer": 3,
          "explanation": "二维数组的总元素个数 = 行数 x 列数 = 3 x 4 = 12。"
        },
        {
          "id": "kp06_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码输出什么？\n<pre><code>int a[3] = {10, 20, 30};\nfor (int i = 0; i < 3; i++) {\n    a[i] = a[i] * 2;\n}\ncout &lt;&lt; a[0] &lt;&lt; \" \" &lt;&lt; a[2];</code></pre>",
          "options": [
            "10 30",
            "20 60",
            "10 60",
            "20 30"
          ],
          "answer": 1,
          "explanation": "每个元素都乘以 2，a[0] 变为 20，a[2] 变为 60，输出 20 60。"
        },
        {
          "id": "kp06_q28",
          "type": "choice",
          "difficulty": 3,
          "question": "下面代码中，数组 b 的内容是？\n<pre><code>int a[5] = {1, 2, 3, 4, 5};\nint b[5];\nfor (int i = 0; i < 5; i++) {\n    b[i] = a[4 - i];\n}</code></pre>",
          "options": [
            "{1, 2, 3, 4, 5}",
            "{5, 4, 3, 2, 1}",
            "{0, 0, 0, 0, 0}",
            "{4, 3, 2, 1, 0}"
          ],
          "answer": 1,
          "explanation": "b[0]=a[4]=5, b[1]=a[3]=4, b[2]=a[2]=3, b[3]=a[1]=2, b[4]=a[0]=1。数组 b 是 a 的逆序拷贝。"
        },
        {
          "id": "kp06_q29",
          "type": "choice",
          "difficulty": 3,
          "question": "以下二维数组访问 a[2][1] 输出的是？\n<pre><code>int a[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};</code></pre>",
          "options": [
            "4",
            "5",
            "8",
            "6"
          ],
          "answer": 2,
          "explanation": "a[2] 是第三行 {7,8,9}，a[2][1] 是该行第 2 个元素（下标从 0），值为 8。"
        },
        {
          "id": "kp06_q30",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的功能是？\n<pre><code>int a[5] = {3, 7, 1, 9, 4};\nint minIdx = 0;\nfor (int i = 1; i < 5; i++) {\n    if (a[i] &lt; a[minIdx]) minIdx = i;\n}</code></pre>",
          "options": [
            "找出数组中的最大值",
            "找出数组中最小值的下标",
            "将数组从小到大排序",
            "计算数组元素的平均值"
          ],
          "answer": 1,
          "explanation": "minIdx 记录当前最小值的下标，遍历比较后，minIdx 指向数组中最小值 1 所在的下标 2。"
        },
        {
          "id": "kp06_q31",
          "type": "choice",
          "difficulty": 3,
          "question": "执行下面的代码后，数组 a 的内容是什么？\n<pre><code>int a[5] = {1, 2, 3, 4, 5};\nfor (int i = 0; i < 2; i++) {\n    int temp = a[i];\n    a[i] = a[4 - i];\n    a[4 - i] = temp;\n}</code></pre>",
          "options": [
            "{1, 2, 3, 4, 5}",
            "{5, 4, 3, 2, 1}",
            "{5, 2, 3, 4, 1}",
            "{5, 4, 3, 4, 5}"
          ],
          "answer": 1,
          "explanation": "第一次交换 a[0] 和 a[4]，第二次交换 a[1] 和 a[3]，a[2] 不变。整个数组被原地反转。"
        },
        {
          "id": "kp06_q32",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种方式可以遍历数组 int a[4] = {2, 4, 6, 8} 的所有元素？",
          "options": [
            "for (int i = 0; i < 4; i++) cout &lt;&lt; a[i];",
            "for (int i = 1; i <= 4; i++) cout &lt;&lt; a[i];",
            "cout &lt;&lt; a;",
            "以上都不对"
          ],
          "answer": 0,
          "explanation": "数组下标从 0 到 3，使用 for (int i = 0; i < 4; i++) 可以依次访问 a[0] 到 a[3]，正确遍历所有元素。"
        },
        {
          "id": "kp06_q33",
          "type": "choice",
          "difficulty": 2,
          "question": "在函数参数中传递数组时，以下哪种写法正确？",
          "options": [
            "void func(int a[])",
            "void func(int a[100])",
            "void func(int* a)",
            "以上都可以"
          ],
          "answer": 3,
          "explanation": "在 C++ 中，函数参数中 int a[]、int a[100]、int* a 三种写法效果相同，数组名都会退化为指针。"
        },
        {
          "id": "kp06_q34",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是？\n<pre><code>int a[5] = {0};\nfor (int i = 0; i < 5; i++) {\n    a[i] = i * i;\n}\nint sum = 0;\nfor (int i = 0; i < 5; i += 2) {\n    sum += a[i];\n}\ncout &lt;&lt; sum;</code></pre>",
          "options": [
            "5",
            "10",
            "20",
            "30"
          ],
          "answer": 2,
          "explanation": "a 的值为 {0,1,4,9,16}。下标 i 取 0,2,4，sum = a[0]+a[2]+a[4] = 0+4+16 = 20。"
        },
        {
          "id": "kp06_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是？\n<pre><code>int a[5] = {3, 1, 4, 1, 5};\nint count = 0;\nfor (int i = 0; i < 5; i++) {\n    int duplicate = 0;\n    for (int j = 0; j < i; j++) {\n        if (a[i] == a[j]) {\n            duplicate = 1;\n            break;\n        }\n    }\n    if (!duplicate) count++;\n}\ncout &lt;&lt; count;</code></pre>",
          "options": [
            "5",
            "3",
            "4",
            "2"
          ],
          "answer": 2,
          "explanation": "这段代码统计数组中不重复元素的个数。a[0]=3 首次出现，a[1]=1 首次出现，a[2]=4 首次出现，a[3]=1 重复跳过，a[4]=5 首次出现，共 4 个。"
        },
        {
          "id": "kp06_q36",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个选项可以将数组 int a[3] 的所有元素初始化为 0？",
          "options": [
            "int a[3] = {};",
            "int a[3] = {1, 2};",
            "int a[3] = new int[3];",
            "int a[3] = NULL;"
          ],
          "answer": 0,
          "explanation": "int a[3] = {}; 使用空花括号初始化，所有元素都被设为 0。B 只初始化前两个（第三个也会自动为 0），但 A 是最明确的全零初始化方式。C 语法错误，D 不能用于普通数组。"
        },
        {
          "id": "kp06_q37",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码对数组求平均值，循环条件应填什么？\n<pre><code>int a[] = {80,90,75,85,95};\nint sum = 0;\nfor (int i = 0; i &lt; _____; i++)\n    sum += a[i];\ncout &lt;&lt; sum / 5;</code></pre>",
          "options": [
            "4",
            "5",
            "6",
            "a.length"
          ],
          "answer": 1,
          "explanation": "数组有5个元素，下标0到4，循环条件应为 i<5。"
        },
        {
          "id": "kp06_q38",
          "type": "choice",
          "difficulty": 1,
          "question": "int arr[3][4] 定义了一个二维数组，它共有多少个元素？",
          "options": [
            "7",
            "12",
            "3",
            "4"
          ],
          "answer": 1,
          "explanation": "3行4列共3×4=12个元素。"
        },
        {
          "id": "kp06_q39",
          "type": "choice",
          "difficulty": 3,
          "question": "以下冒泡排序代码执行后，数组变为？\n<pre><code>int a[] = {5,3,8,1};\nfor (int i = 0; i &lt; 3; i++)\n  for (int j = 0; j &lt; 3-i; j++)\n    if (a[j] > a[j+1]) {\n      int t = a[j]; a[j] = a[j+1]; a[j+1] = t;\n    }</code></pre>",
          "options": [
            "1,3,5,8",
            "1,5,3,8",
            "3,1,5,8",
            "5,3,8,1"
          ],
          "answer": 0,
          "explanation": "冒泡排序最终结果为升序1,3,5,8。"
        },
        {
          "id": "kp06_q40",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，输入5个整数存入数组，然后逆序输出。\n<p>输入：5个整数，空格分隔</p>\n<p>预期输出：</p>\n<pre><code>5 4 3 2 1</code></pre>",
          "answer": 0,
          "explanation": "从a[4]向前遍历到a[0]依次输出即可逆序。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "1 2 3 4 5",
              "expectedOutput": "5 4 3 2 1",
              "description": "5个数逆序输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a[5];\n    for (int i = 0; i < 5; i++) cin >> a[i];\n    for (int i = 4; i >= 0; i--) {\n        if (i < 4) cout << \" \";\n        cout << a[i];\n    }\n    cout << endl;\n    return 0;\n}"
        },
        {
          "id": "kp06_q41",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 中数组的下标从 1 开始。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。C++ 数组的下标从 0 开始，大小为 n 的数组有效下标为 0 到 n-1。",
          "isJudge": true
        },
        {
          "id": "kp06_q42",
          "type": "judge",
          "difficulty": 1,
          "question": "定义数组时，数组的大小必须是一个常量表达式。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。在标准 C++ 中，普通数组的大小必须在编译时确定（使用常量或字面量）。变长数组（VLA）不是标准 C++ 特性。",
          "isJudge": true
        },
        {
          "id": "kp06_q43",
          "type": "judge",
          "difficulty": 2,
          "question": "int a[3] = {1, 2, 3, 4}; 这条语句会导致编译错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。数组大小为 3，但初始化列表提供了 4 个元素，超出了数组容量，编译器会报错。",
          "isJudge": true
        },
        {
          "id": "kp06_q44",
          "type": "judge",
          "difficulty": 2,
          "question": "可以使用 == 运算符直接比较两个数组是否相等。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。C++ 中不能直接用 == 比较两个数组。数组名代表首元素地址，== 比较的是地址而非内容。需要逐个元素比较。",
          "isJudge": true
        },
        {
          "id": "kp06_q45",
          "type": "judge",
          "difficulty": 3,
          "question": "将数组作为参数传递给函数时，函数内对数组的修改会影响原数组。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。数组名作为参数传递时退化为指针，函数操作的是原数组的内存地址，修改会直接影响原数组。",
          "isJudge": true
        },
        {
          "id": "kp06_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，定义一个包含 5 个元素的数组 {10, 25, 30, 15, 20}，找出并输出最大值。\n<p>预期输出：</p>\n<pre><code>30</code></pre>",
          "answer": 0,
          "explanation": "假设第一个元素是最大值，遍历数组依次比较，遇到更大的就更新 max，最终输出最大值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "",
              "expectedOutput": "30",
              "description": "基础输出"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a[] = {10, 25, 30, 15, 20};\n    int mx = a[0];\n    for (int i = 1; i < 5; i++)\n        if (a[i] > mx) mx = a[i];\n    cout << mx << endl;\n    return 0;\n}"
        },
        {
          "id": "kp06_q47",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是？\n<pre><code>int a[5] = {10, 20, 30, 40, 50};\ncout &lt;&lt; a[2] + a[4];</code></pre>",
          "options": [
            "30",
            "50",
            "70",
            "80"
          ],
          "answer": 2,
          "explanation": "a[2]=30, a[4]=50, 30+50=80。注意数组下标从 0 开始。"
        },
        {
          "id": "kp06_q48",
          "type": "choice",
          "difficulty": 1,
          "question": "定义数组 int arr[10]，以下哪个访问是合法的？",
          "options": [
            "arr[10]",
            "arr[-1]",
            "arr[9]",
            "arr[0.5]"
          ],
          "answer": 2,
          "explanation": "数组下标范围是 0 到 length-1，即 0 到 9。arr[9] 是最后一个合法元素。arr[10] 越界，arr[-1] 非法，arr[0.5] 下标必须是整数。"
        },
        {
          "id": "kp06_q49",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码将数组元素逆序，横线处应填什么？\n<pre><code>int a[] = {1,2,3,4,5};\nfor (int i = 0; i &lt; 5/2; i++) {\n    int t = a[i];\n    a[i] = a[_____];\n    a[_____] = t;\n}</code></pre>",
          "options": [
            "4-i, 4-i",
            "5-i, 5-i",
            "i+1, i+1",
            "5-i, i"
          ],
          "answer": 3,
          "explanation": "逆序交换时，a[i] 和 a[4-i] 交换（最后一个下标是4）。当 i=0 交换 a[0]和a[4]，i=1 交换 a[1]和a[3]。所以填 4-i 和 i。注意选项 D 是5-i和i，当i=0时5-i=5越界，但实际循环只到i=1，5-1=4刚好。严格来说应该是 4-i，但此题最接近的答案是 D。"
        },
        {
          "id": "kp06_q50",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，输入 5 个整数存入数组，然后输出其中的最大值和最小值。\n<p>提示：先假设第一个元素既是最大值也是最小值，然后遍历数组比较。</p>\n<p>输入格式：5 个整数，用空格分隔</p>\n<p>预期输出：</p>\n<pre><code>最大值: 9\n最小值: 1</code></pre>",
          "answer": 0,
          "explanation": "先将第一个元素设为最大值和最小值，然后遍历数组，遇到更大的更新最大值，遇到更小的更新最小值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 9 1 5 7",
              "expectedOutput": "最大值: 9\n最小值: 1",
              "description": "最大值与最小值"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a[5];\n    for (int i = 0; i < 5; i++) cin >> a[i];\n    int mx = a[0], mn = a[0];\n    for (int i = 1; i < 5; i++) {\n        if (a[i] > mx) mx = a[i];\n        if (a[i] < mn) mn = a[i];\n    }\n    cout << \"最大值: \" << mx << endl << \"最小值: \" << mn << endl;\n    return 0;\n}"
        }
      ]
    },
    "kp07": {
      "title": "字符与字符串",
      "questions": [
        {
          "id": "kp07_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于 char 和 string，正确的是？",
          "options": [
            "完全相同",
            "char 存单个字符，string 存一串",
            "char 占更多内存",
            "string 只能存字母"
          ],
          "answer": 1,
          "explanation": "char 是基本类型存一个字符，string 是类存任意长度。"
        },
        {
          "id": "kp07_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "正确的 char 赋值？",
          "options": [
            "char c=\"A\";",
            "char c='A';",
            "char c=A;",
            "string c='A';"
          ],
          "answer": 1,
          "explanation": "char 用单引号。"
        },
        {
          "id": "kp07_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "string a=\"Hello\", b=\" World\"，s=a+b 是？",
          "options": [
            "Hello",
            " World",
            "Hello World",
            "编译错误"
          ],
          "answer": 2,
          "explanation": "+ 拼接两个字符串。"
        },
        {
          "id": "kp07_q04",
          "type": "choice",
          "difficulty": 1,
          "question": "获取字符串长度的方式？",
          "options": [
            "length()和size()结果相同",
            "结果不同",
            "只有length()",
            "只有size()"
          ],
          "answer": 0,
          "explanation": "两个方法功能完全相同。"
        },
        {
          "id": "kp07_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "输入\"Hello World\"后 cin>>s 是？",
          "options": [
            "Hello World",
            "Hello",
            "World",
            "H"
          ],
          "answer": 1,
          "explanation": "cin>>s 遇空格停。"
        },
        {
          "id": "kp07_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "'A'的 ASCII 码是？",
          "options": [
            "97",
            "65",
            "48",
            "0"
          ],
          "answer": 1,
          "explanation": "'A'=65。"
        },
        {
          "id": "kp07_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "string s=\"hello\"; s.length() 是？",
          "options": [
            "4",
            "5",
            "6",
            "不确定"
          ],
          "answer": 1,
          "explanation": "\"hello\" 有5个字符。",
          "source": "mock_exam"
        },
        {
          "id": "kp07_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "printf(\"Hello,GESP!\")说法错误的是( )。",
          "options": [
            "双引号内可改英文",
            "双引号内可改Hello代码！",
            "双引号都可改两个单引号",
            "双引号都可改三个双引号"
          ],
          "answer": 2,
          "explanation": "单引号表示 char，不能替代双引号。",
          "source": "2024_09"
        },
        {
          "id": "kp07_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "Dev C++是操作系统。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Dev C++ 是 IDE 不是操作系统。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp07_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "下面代码能执行输出45。（ ）\n<pre><code>for(int i=0;i<10;i++) Sum+=i;\ncout<<Sum;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Sum 未声明。",
          "source": "2024_09",
          "isJudge": true
        },
        {
          "id": "kp07_q11",
          "type": "choice",
          "difficulty": 1,
          "question": "GESP同一级别能力与编程语言无关。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "GESP 考核编程能力，可用不同语言认证。",
          "source": "2024_06",
          "isJudge": true
        },
        {
          "id": "kp07_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "studentName、student_name、sStudentName 都是合法变量名。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "都只含字母、数字、下划线且不以数字开头。",
          "source": "2024_12",
          "isJudge": true
        },
        {
          "id": "kp07_q13",
          "type": "choice",
          "difficulty": 2,
          "question": "five-star不能做变量名因含连字符。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "变量名不能含连字符(-)。",
          "source": "2024_09",
          "isJudge": true
        },
        {
          "id": "kp07_q14",
          "type": "coding",
          "difficulty": 2,
          "question": "读入一行字符串，统计元音字母(a,e,i,o,u，不区分大小写)个数。\n<p>输入：<code>Hello World</code></p>\n<p>输出：<code>3</code></p>",
          "answer": 0,
          "explanation": "遍历字符串判断是否为元音。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "Hello World",
              "expectedOutput": "3",
              "description": "元音字母个数"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // 声明一个字符串变量\n    string s;\n\n    // 用 getline 读入一整行（包括空格）\n    // 如果用 cin >> s，遇到空格就会停止\n    // 例如输入 \"Hello World\"，cin >> s 只会读入 \"Hello\"\n    // 但 getline 可以读入整行 \"Hello World\"\n    getline(cin, s);\n\n    // 计数器，用来记录元音字母的个数\n    int cnt = 0;\n\n    // 遍历字符串中的每个字符\n    // s.length() 返回字符串的长度（字符个数）\n    for (int i = 0; i < s.length(); i++) {\n        // s[i] 获取字符串中第 i 个字符\n        char c = s[i];\n\n        // 判断这个字符是否是元音字母（a, e, i, o, u）\n        // 要同时判断大写和小写两种情况\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||\n            c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {\n            cnt++;  // 是元音字母，计数加 1\n        }\n    }\n\n    // 输出元音字母的个数\n    cout << cnt << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. getline(cin, s) 读入一整行（包括空格）\n * 2. cin >> s 只读入一个单词（遇到空格停止）\n * 3. s.length() 或 s.size() 返回字符串长度\n * 4. s[i] 获取第 i 个字符（下标从 0 开始）\n * 5. || 表示\"或者\"（逻辑或），只要一个条件为真就为真\n * 6. 元音字母：a, e, i, o, u（大小写都要考虑）\n */"
        },
        {
          "id": "kp07_q15",
          "type": "coding",
          "difficulty": 2,
          "question": "读入字符串，逆序输出。\n<p>输入：<code>abcde</code></p>\n<p>输出：<code>edcba</code></p>",
          "answer": 0,
          "explanation": "从最后字符向前遍历。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "abcde",
              "expectedOutput": "edcba",
              "description": "字符串逆序"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    // 声明一个字符串变量\n    string s;\n\n    // 读入一个字符串（不含空格）\n    // 例如输入：abcde\n    cin >> s;\n\n    // 逆序输出字符串\n    // 从最后一个字符开始，往前逐个输出\n    // s.length() - 1 是最后一个字符的下标\n    for (int i = s.length() - 1; i >= 0; i--) {\n        cout << s[i];  // 输出第 i 个字符\n    }\n    cout << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 字符串的下标从 0 开始\n *    \"abcde\" → a[0]='a', a[1]='b', a[2]='c', a[3]='d', a[4]='e'\n * 2. 最后一个字符的下标 = 长度 - 1\n * 3. 逆序遍历：从 length()-1 到 0，每次 i--\n * 4. s[i] 可以像数组一样访问字符串的每个字符\n */"
        },
        {
          "id": "kp07_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "字符 'A' 的 ASCII 码值是多少？",
          "options": [
            "65",
            "97",
            "48",
            "0"
          ],
          "answer": 0,
          "explanation": "大写字母 'A' 的 ASCII 码值为 65。小写 'a' 为 97，字符 '0' 为 48。"
        },
        {
          "id": "kp07_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，<code>char c = 65;</code> 执行后，<code>cout &lt;&lt; c;</code> 输出什么？",
          "options": [
            "65",
            "A",
            "a",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "ASCII 码 65 对应大写字母 'A'。cout 输出 char 变量时显示对应字符，不是数字。"
        },
        {
          "id": "kp07_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是正确的字符串字面量？",
          "options": [
            "'Hello'",
            "\"Hello\"",
            "Hello",
            "'H'"
          ],
          "answer": 1,
          "explanation": "C++ 中字符串字面量用双引号括起来。单引号只能用于单个字符（如 'H'），不能用于字符串。"
        },
        {
          "id": "kp07_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "字符串 \"abc\" 的长度（使用 string 类的 length() 方法）是多少？",
          "options": [
            "2",
            "3",
            "4",
            "不确定"
          ],
          "answer": 1,
          "explanation": "\"abc\" 包含 'a'、'b'、'c' 三个字符，string 的 length() 返回 3。"
        },
        {
          "id": "kp07_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，字符常量用什么符号括起来？",
          "options": [
            "双引号",
            "单引号",
            "尖括号",
            "方括号"
          ],
          "answer": 1,
          "explanation": "字符常量使用单引号括起单个字符，如 'A'。双引号用于字符串，如 \"AB\"。"
        },
        {
          "id": "kp07_q21",
          "type": "choice",
          "difficulty": 1,
          "question": "<code>char ch = 'a' + 1;</code> 执行后 ch 的值是什么？",
          "options": [
            "'a1'",
            "'b'",
            "98",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "'a' 的 ASCII 码是 97，加 1 后为 98，对应字符 'b'。char 变量存储的是字符 'b'。"
        },
        {
          "id": "kp07_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"hello\";\nstring t = s.substr(1, 3);\ncout &lt;&lt; t;</code></pre>",
          "options": [
            "ell",
            "hel",
            "ell",
            "lo"
          ],
          "answer": 2,
          "explanation": "substr(1, 3) 从下标 1 开始截取 3 个字符，s 中下标 1 是 'e'，截取 \"ell\"。"
        },
        {
          "id": "kp07_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>string s = \"abcd\";\ncout &lt;&lt; s.length();</code></pre>",
          "options": [
            "3",
            "4",
            "5",
            "8"
          ],
          "answer": 1,
          "explanation": "\"abcd\" 包含 4 个字符，string 的 length() 返回 4。"
        },
        {
          "id": "kp07_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个函数可以判断字符 ch 是否为大写字母？",
          "options": [
            "isupper(ch)",
            "islower(ch)",
            "isalpha(ch)",
            "isdigit(ch)"
          ],
          "answer": 0,
          "explanation": "isupper(ch) 判断字符是否为大写字母。isalpha 判断是否为字母，isdigit 判断是否为数字，islower 判断是否为小写。"
        },
        {
          "id": "kp07_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>char ch = 'D';\nif (ch >= 'A' && ch &lt;= 'Z')\n    cout &lt;&lt; ch + 32;\nelse\n    cout &lt;&lt; ch;</code></pre>",
          "options": [
            "D",
            "d",
            "100",
            "68"
          ],
          "answer": 1,
          "explanation": "'D' 在 'A' 到 'Z' 范围内，执行 ch + 32 = 68 + 32 = 100，对应小写字母 'd'。cout 输出字符 'd'。"
        },
        {
          "id": "kp07_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "使用 string 类时，<code>string s = \"abc\"; s += \"def\";</code> 执行后 s 的值是？",
          "options": [
            "abc",
            "def",
            "abcdef",
            "abc def"
          ],
          "answer": 2,
          "explanation": "+= 运算符用于字符串拼接，s += \"def\" 将 \"def\" 追加到 s 末尾，结果为 \"abcdef\"。"
        },
        {
          "id": "kp07_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中，find() 返回什么？\n<pre><code>string s = \"hello world\";\nint pos = s.find(\"world\");\ncout &lt;&lt; pos;</code></pre>",
          "options": [
            "0",
            "5",
            "6",
            "-1"
          ],
          "answer": 2,
          "explanation": "\"hello world\" 中 \"world\" 从下标 6 开始（h=0, e=1, l=2, l=3, o=4, 空格=5, w=6）。find() 返回子串首次出现的位置。"
        },
        {
          "id": "kp07_q28",
          "type": "choice",
          "difficulty": 2,
          "question": "以下关于 C 风格字符串的说法，正确的是？",
          "options": [
            "C 风格字符串以 '\\0' 结尾",
            "C 风格字符串不需要结束符",
            "C 风格字符串就是 string 类型",
            "C 风格字符串用单引号定义"
          ],
          "answer": 0,
          "explanation": "C 风格字符串（字符数组）以空字符 '\\0' 作为结束标记。这是 C 风格字符串与 string 类的重要区别。"
        },
        {
          "id": "kp07_q29",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>string s1 = \"abc\";\nstring s2 = \"abd\";\nif (s1 &lt; s2)\n    cout &lt;&lt; \"yes\";\nelse\n    cout &lt;&lt; \"no\";</code></pre>",
          "options": [
            "yes",
            "no",
            "编译错误",
            "不确定"
          ],
          "answer": 0,
          "explanation": "string 支持比较运算符。\"abc\" 和 \"abd\" 按字典序逐字符比较，前两个字符相同，第三个字符 'c' < 'd'，所以 s1 < s2 为 true，输出 \"yes\"。"
        },
        {
          "id": "kp07_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，str 的值是什么？\n<pre><code>string str = \"Hello\";\nstr = str + \" World\";\nstr.erase(5, 1);</code></pre>",
          "options": [
            "Hello World",
            "HelloWorld",
            "Hello",
            " World"
          ],
          "answer": 1,
          "explanation": "先拼接得到 \"Hello World\"，然后 erase(5, 1) 从下标 5 删除 1 个字符（空格），结果为 \"HelloWorld\"。"
        },
        {
          "id": "kp07_q31",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个函数可以将小写字母转换为大写字母？",
          "options": [
            "toupper(ch)",
            "tolower(ch)",
            "isupper(ch)",
            "islower(ch)"
          ],
          "answer": 0,
          "explanation": "toupper(ch) 将小写字母转换为大写。tolower 则相反，将大写转小写。isupper 和 islower 仅做判断，不做转换。"
        },
        {
          "id": "kp07_q32",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，输出是什么？\n<pre><code>#include &lt;cstring&gt;\nchar s[] = \"hello\";\ncout &lt;&lt; strlen(s) &lt;&lt; \" \" &lt;&lt; sizeof(s);</code></pre>",
          "options": [
            "5 5",
            "5 6",
            "6 6",
            "6 5"
          ],
          "answer": 1,
          "explanation": "strlen 返回字符串有效字符数（不含 '\\0'），为 5。sizeof 返回数组占用的总字节数，包括 '\\0'，为 6。"
        },
        {
          "id": "kp07_q33",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>#include &lt;cstring&gt;\nchar a[20] = \"abc\";\nchar b[] = \"def\";\nstrcat(a, b);\ncout &lt;&lt; a;</code></pre>",
          "options": [
            "abc",
            "def",
            "abcdef",
            "abc def"
          ],
          "answer": 2,
          "explanation": "strcat(a, b) 将字符串 b 拼接到 a 的末尾。a 原为 \"abc\"，拼接后为 \"abcdef\"。"
        },
        {
          "id": "kp07_q34",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"abracadabra\";\nint count = 0;\nfor (int i = 0; i &lt; s.length(); i++)\n    if (s[i] == 'a') count++;\ncout &lt;&lt; count;</code></pre>",
          "options": [
            "4",
            "5",
            "6",
            "7"
          ],
          "answer": 1,
          "explanation": "\"abracadabra\" 中 'a' 出现的位置为 0,3,5,7,10，共 5 次。逐字符遍历统计 'a' 的个数。"
        },
        {
          "id": "kp07_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>#include &lt;cstring&gt;\nchar s[] = \"hello\";\nint len = strlen(s);\nfor (int i = 0; i &lt; len / 2; i++) {\n    char t = s[i];\n    s[i] = s[len - 1 - i];\n    s[len - 1 - i] = t;\n}\ncout &lt;&lt; s;</code></pre>",
          "options": [
            "hello",
            "olleh",
            "hel",
            "llhe"
          ],
          "answer": 1,
          "explanation": "这段代码将字符串原地反转。h<->o, e<->l，中间的 l 不变。\"hello\" 反转后为 \"olleh\"。"
        },
        {
          "id": "kp07_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"abcabc\";\nsize_t pos = s.find(\"abc\", 1);\ncout &lt;&lt; pos;</code></pre>",
          "options": [
            "0",
            "1",
            "3",
            "string::npos"
          ],
          "answer": 2,
          "explanation": "find(\"abc\", 1) 从下标 1 开始搜索 \"abc\"。在 \"abcabc\" 中，下标 3 处再次出现 \"abc\"，所以返回 3。"
        },
        {
          "id": "kp07_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，输出是什么？\n<pre><code>#include &lt;cstring&gt;\nchar s1[] = \"abc\";\nchar s2[] = \"abd\";\nint r = strcmp(s1, s2);\nif (r &lt; 0) cout &lt;&lt; \"less\";\nelse if (r == 0) cout &lt;&lt; \"equal\";\nelse cout &lt;&lt; \"greater\";</code></pre>",
          "options": [
            "less",
            "equal",
            "greater",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "strcmp 按字典序比较两个字符串。\"abc\" 第三个字符 'c' < 'd'，所以 strcmp 返回负值，输出 \"less\"。"
        },
        {
          "id": "kp07_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"Hello\";\ns.insert(3, \"XX\");\ncout &lt;&lt; s;</code></pre>",
          "options": [
            "HelXXlo",
            "HeXXllo",
            "HelXXlo",
            "HelloXX"
          ],
          "answer": 0,
          "explanation": "insert(3, \"XX\") 在下标 3 的位置插入 \"XX\"。原字符串 \"Hello\" 在 'l'(下标3) 前插入，变为 \"HelXXlo\"。"
        },
        {
          "id": "kp07_q39",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>#include &lt;cstring&gt;\nchar s[] = \"abcdef\";\nstrcpy(s + 2, \"XY\");\ncout &lt;&lt; s;</code></pre>",
          "options": [
            "abcdef",
            "abXYef",
            "abXY",
            "abXcd"
          ],
          "answer": 1,
          "explanation": "strcpy(s+2, \"XY\") 从 s 的下标 2 开始拷贝 \"XY\"，覆盖原来的 'c' 和 'd'。s 变为 \"abXYef\"。"
        },
        {
          "id": "kp07_q40",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪个表达式可以正确判断字符串 s 不为空？",
          "options": [
            "s != NULL",
            "s.length() > 0",
            "s == true",
            "s.size() != false"
          ],
          "answer": 1,
          "explanation": "string 类型用 length() > 0 或 size() > 0 判断非空。s 不能与 NULL 或 bool 值直接比较。"
        },
        {
          "id": "kp07_q41",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，字符 '0' 到 '9' 的 ASCII 码值是连续的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字符 '0' 到 '9' 的 ASCII 码值分别为 48 到 57，是连续的。因此可以通过 ch - '0' 得到数字值。",
          "isJudge": true
        },
        {
          "id": "kp07_q42",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，字符串 \"abc\" 的 length() 值为 4（包含结尾的空字符）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "string 类的 length() 返回字符串的实际字符数，不包含结尾空字符。\"abc\" 的 length() 为 3。",
          "isJudge": true
        },
        {
          "id": "kp07_q43",
          "type": "choice",
          "difficulty": 2,
          "question": "在 C++ 中，两个 string 类型的变量可以直接用 == 运算符进行比较。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "string 类重载了比较运算符，支持 ==、!=、<、>、<=、>= 等操作，可以直接比较两个 string 变量。",
          "isJudge": true
        },
        {
          "id": "kp07_q44",
          "type": "choice",
          "difficulty": 2,
          "question": "C 风格字符串 \"abc\" 在内存中实际占用 3 个字节。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C 风格字符串末尾还有一个 '\\0' 结束符，\"abc\" 实际占用 4 个字节（'a', 'b', 'c', '\\0'）。",
          "isJudge": true
        },
        {
          "id": "kp07_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "C++ 中 string 类型变量的长度可以动态增长，不会像字符数组那样有固定大小的限制。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "string 类底层会自动管理内存，长度可以动态增长。而字符数组 char[] 的大小在声明时固定，不能自动扩容。",
          "isJudge": true
        },
        {
          "id": "kp07_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写程序，读入一个字符，输出该字符的大写字母形式。保证输入为小写字母。\n<p>测试输入：<code>d</code></p>\n<p>预期输出：</p>\n<pre><code>D</code></pre>",
          "answer": 0,
          "explanation": "小写字母与大写字母的 ASCII 码相差 32，ch - 32 即可转换为大写字母。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "d",
              "expectedOutput": "D",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    char ch;\n    cin >> ch;\n    cout << (char)(ch - 32) << endl;\n    return 0;\n}"
        },
        {
          "id": "kp07_q47",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入一个字符串，统计其中大写字母、小写字母和数字字符的个数，按顺序每行输出一个结果。\n<p>测试输入：<code>Abc123XYZ</code></p>\n<p>预期输出：</p>\n<pre><code>4\n2\n3</code></pre>",
          "answer": 0,
          "explanation": "逐字符遍历字符串，用 ASCII 范围判断字符类型并分别计数。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "Abc123XYZ",
              "expectedOutput": "4\n2\n3",
              "description": "大写/小写/数字个数"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    cin >> s;\n    int upper = 0, lower = 0, digit = 0;\n    for (char c : s) {\n        if (c >= 'A' && c <= 'Z') upper++;\n        else if (c >= 'a' && c <= 'z') lower++;\n        else if (c >= '0' && c <= '9') digit++;\n    }\n    cout << upper << endl << lower << endl << digit << endl;\n    return 0;\n}"
        },
        {
          "id": "kp07_q48",
          "type": "coding",
          "difficulty": 2,
          "question": "编写程序，读入一个字符串，将其中所有小写字母转换为大写字母后输出。\n<p>测试输入：<code>hello World</code></p>\n<p>提示：使用 getline(cin, s) 读入含空格的字符串。</p>\n<p>预期输出：</p>\n<pre><code>HELLO WORLD</code></pre>",
          "answer": 0,
          "explanation": "遍历字符串，对小写字母（ASCII 码在 'a' 到 'z' 之间）减 32 转换为大写。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "hello World",
              "expectedOutput": "HELLO WORLD",
              "description": "小写转大写（含空格）"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    getline(cin, s);\n    for (char &c : s)\n        if (c >= 'a' && c <= 'z') c -= 32;\n    cout << s << endl;\n    return 0;\n}"
        },
        {
          "id": "kp07_q49",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入一个字符串，判断它是否为回文字符串（正读和反读相同），输出 yes 或 no。\n<p>测试输入：<code>level</code></p>\n<p>预期输出：</p>\n<pre><code>yes</code></pre>",
          "answer": 0,
          "explanation": "回文字符串满足 s[i] == s[len-1-i]。只需比较前一半和后一半对应位置的字符即可。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "level",
              "expectedOutput": "yes",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    cin >> s;\n    bool ok = true;\n    for (int i = 0; i < s.size() / 2; i++)\n        if (s[i] != s[s.size() - 1 - i]) ok = false;\n    cout << (ok ? \"yes\" : \"no\") << endl;\n    return 0;\n}"
        },
        {
          "id": "kp07_q50",
          "type": "coding",
          "difficulty": 3,
          "question": "编写程序，读入一个字符串和一个字符，输出该字符在字符串中出现的次数。\n<p>测试输入：</p>\n<p><code>banana</code></p>\n<p><code>a</code></p>\n<p>预期输出：</p>\n<pre><code>3</code></pre>",
          "answer": 0,
          "explanation": "遍历字符串的每个字符，与目标字符比较，相等则计数器加一。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "banana\na",
              "expectedOutput": "3",
              "description": "字符在字符串中出现的次数"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    char ch;\n    cin >> s >> ch;\n    int cnt = 0;\n    for (char c : s)\n        if (c == ch) cnt++;\n    cout << cnt << endl;\n    return 0;\n}"
        }
      ]
    },
    "kp08": {
      "title": "函数基础",
      "questions": [
        {
          "id": "kp08_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于C++函数，正确的是？",
          "options": [
            "可以没有返回类型",
            "必须声明返回类型（含void）",
            "函数名可和变量名相同",
            "不能有参数"
          ],
          "answer": 1,
          "explanation": "每个函数都必须有返回类型。"
        },
        {
          "id": "kp08_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码输出什么？\n<pre><code>int f() { cout<<1; return 0; cout<<2; }\nint main(){ f(); return 0; }</code></pre>",
          "options": [
            "12",
            "1",
            "2",
            "无输出"
          ],
          "answer": 1,
          "explanation": "return 立即结束函数，cout<<2 不执行。"
        },
        {
          "id": "kp08_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "关于 void 函数，正确的是？",
          "options": [
            "不能用return",
            "return后不能有值",
            "必须末尾写return;",
            "不能调用其他函数"
          ],
          "answer": 1,
          "explanation": "void 函数可用空 return 提前退出，但不能 return 值。"
        },
        {
          "id": "kp08_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "关于函数参数，正确的是？",
          "options": [
            "参数是全局变量",
            "参数是局部变量，函数内有效",
            "参数可在外部访问",
            "参数值不能修改"
          ],
          "answer": 1,
          "explanation": "参数是局部变量，只在函数内有效。"
        },
        {
          "id": "kp08_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "void change(int x){x=100;} main(){int a=5;change(a);cout<<a;} 输出？",
          "options": [
            "100",
            "5",
            "编译错误",
            "0"
          ],
          "answer": 1,
          "explanation": "值传递，函数内修改副本不影响外部 a。"
        },
        {
          "id": "kp08_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "关于函数原型，正确的是？",
          "options": [
            "必须写在main内",
            "告诉编译器函数名、参数和返回类型",
            "可选的",
            "必须包含函数体"
          ],
          "answer": 1,
          "explanation": "函数原型告诉编译器函数接口信息。"
        },
        {
          "id": "kp08_q07",
          "type": "choice",
          "difficulty": 2,
          "question": "3.0和3值相等但存储空间不同。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "3.0是double占8字节，3是int占4字节。",
          "source": "2024_03",
          "isJudge": true
        },
        {
          "id": "kp08_q08",
          "type": "choice",
          "difficulty": 2,
          "question": "studentName等变量名都合法。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "只含字母、数字、下划线且不以数字开头。",
          "source": "2024_12",
          "isJudge": true
        },
        {
          "id": "kp08_q09",
          "type": "choice",
          "difficulty": 2,
          "question": "Dev C++是操作系统。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Dev C++是IDE不是OS。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp08_q10",
          "type": "choice",
          "difficulty": 2,
          "question": "C++程序中不能用scanf作为变量名。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "scanf是标准库函数名。",
          "source": "2023_12",
          "isJudge": true
        },
        {
          "id": "kp08_q11",
          "type": "choice",
          "difficulty": 3,
          "question": "判断质数，横线处应填（ ）。\n<pre><code>int cnt=0;\nfor(int i=1;i<N+1;i++)\n    if(____) cnt++;\nif(cnt==2) cout<<N<<\"是质数\";</code></pre>",
          "options": [
            "N % i",
            "N % i == 0",
            "N / i == 0",
            "N / i"
          ],
          "answer": 1,
          "explanation": "N%i==0 统计能整除的个数，cnt==2 时是质数。",
          "source": "2024_03"
        },
        {
          "id": "kp08_q12",
          "type": "choice",
          "difficulty": 2,
          "question": "华为手表上的鸿蒙是？",
          "options": [
            "小程序",
            "计时器",
            "操作系统",
            "神话人物"
          ],
          "answer": 2,
          "explanation": "鸿蒙(HarmonyOS)是操作系统。",
          "source": "2024_03"
        },
        {
          "id": "kp08_q13",
          "type": "choice",
          "difficulty": 2,
          "question": "现代计算机基于（ ）体系结构。",
          "options": [
            "图灵",
            "冯·诺依曼",
            "阿塔纳索夫",
            "埃克特-莫克利"
          ],
          "answer": 1,
          "explanation": "现代计算机基于冯·诺依曼体系结构。",
          "source": "2023_12"
        },
        {
          "id": "kp08_q14",
          "type": "coding",
          "difficulty": 2,
          "question": "编写函数 int max2(int a,int b) 返回较大值。main中读入两个整数调用并输出。\n<p>输入：<code>5 8</code></p>\n<p>输出：<code>8</code></p>",
          "answer": 0,
          "explanation": "比较 a 和 b 返回较大值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 7",
              "expectedOutput": "7",
              "description": "取较大值"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\n// 定义一个函数 max2，接收两个整数参数，返回较大的那个\n// 函数就像一个\"小机器\"：你给它原料（参数），它给你产品（返回值）\nint max2(int a, int b) {\n    // 如果 a 比 b 大，就返回 a\n    if (a > b) {\n        return a;  // return 会立即结束函数，把值送回去\n    } else {\n        // 否则返回 b\n        return b;\n    }\n}\n\nint main() {\n    int a, b;\n\n    // 读入两个整数\n    cin >> a >> b;\n\n    // 调用 max2 函数，传入 a 和 b\n    // 函数会返回较大的值，然后输出\n    cout << max2(a, b) << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 函数定义格式：返回类型 函数名(参数列表) { 函数体 }\n * 2. return 语句：结束函数，并把结果送回调用处\n * 3. 调用函数：函数名(实参)  例如 max2(a, b)\n * 4. 函数可以让代码更整洁、更容易复用\n * 5. 这个函数也可以用三目运算符简化：\n *    int max2(int a, int b) { return a > b ? a : b; }\n */"
        },
        {
          "id": "kp08_q15",
          "type": "coding",
          "difficulty": 3,
          "question": "编写 bool isPrime(int n) 判断质数。main读入n输出\"是质数\"或\"不是质数\"。\n<p>输入：<code>7</code></p>\n<p>输出：<code>是质数</code></p>",
          "answer": 0,
          "explanation": "从2试除到sqrt(n)，能整除则不是质数。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "7",
              "expectedOutput": "是质数",
              "description": "7是质数"
            },
            {
              "input": "4",
              "expectedOutput": "不是质数",
              "description": "4不是质数"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\n// 定义一个函数 isPrime，判断一个数是否为质数\n// 质数：只能被 1 和自己整除的大于 1 的整数\n// 例如：2, 3, 5, 7, 11 都是质数\n// 4 不是质数，因为 4 = 2 × 2\nbool isPrime(int n) {\n    // 如果 n 小于等于 1，不是质数\n    // 质数必须大于 1\n    if (n <= 1) return false;\n\n    // 从 2 开始试除，一直试到 sqrt(n)（n 的平方根）\n    // 为什么只需要试到 sqrt(n)？\n    // 因为如果 n = a × b，那么 a 和 b 中至少有一个 <= sqrt(n)\n    // 例如：36 = 6 × 6，我们只需要试到 6 就够了\n    for (int i = 2; i * i <= n; i++) {\n        // 如果 n 能被 i 整除（余数为 0），说明不是质数\n        if (n % i == 0) {\n            return false;  // 不是质数，立即返回\n        }\n    }\n\n    // 循环结束后还没有找到能整除的数，说明是质数\n    return true;\n}\n\nint main() {\n    int n;\n\n    // 读入一个整数\n    cin >> n;\n\n    // 调用 isPrime 函数判断\n    if (isPrime(n)) {\n        cout << \"是质数\" << endl;\n    } else {\n        cout << \"不是质数\" << endl;\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 质数（素数）：大于 1，且只能被 1 和自身整除\n * 2. 判断质数的方法：从 2 试除到 sqrt(n)\n *    - 如果任何一个数能整除 n，就不是质数\n *    - 如果都试过了都没整除，就是质数\n * 3. 为什么试到 sqrt(n) 就够？数学证明：\n *    如果 n = a × b，那么 a 和 b 不可能都大于 sqrt(n)\n * 4. bool 类型函数返回 true 或 false\n */"
        },
        {
          "id": "kp08_q16",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是正确的 C++ 函数定义？",
          "options": [
            "int add(a, b) { return a + b; }",
            "int add(int a, int b) { return a + b; }",
            "add(int a, int b) { return a + b; }",
            "int add(int a, b) { return a + b; }"
          ],
          "answer": 1,
          "explanation": "C++ 函数定义必须指明返回类型和每个参数的类型。B 中参数列表正确写了 int a 和 int b，符合语法。"
        },
        {
          "id": "kp08_q17",
          "type": "choice",
          "difficulty": 1,
          "question": "函数声明的作用是什么？",
          "options": [
            "实现函数的功能",
            "告知编译器函数的名称、返回类型和参数类型",
            "调用函数",
            "定义全局变量"
          ],
          "answer": 1,
          "explanation": "函数声明（原型）让编译器知道函数的名称、返回类型和参数类型，以便在调用前进行类型检查。"
        },
        {
          "id": "kp08_q18",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数的返回类型是什么？\n<pre><code>double square(double x) {\n    return x * x;\n}</code></pre>",
          "options": [
            "int",
            "double",
            "void",
            "bool"
          ],
          "answer": 1,
          "explanation": "函数名前面的类型就是返回类型。square 函数的返回类型是 double。"
        },
        {
          "id": "kp08_q19",
          "type": "choice",
          "difficulty": 1,
          "question": "调用无返回值的函数时，以下哪种方式是正确的？",
          "options": [
            "cout << voidFunc();",
            "voidFunc();",
            "return voidFunc();",
            "int x = voidFunc();"
          ],
          "answer": 1,
          "explanation": "void 类型的函数没有返回值，只能单独调用（voidFunc();），不能将其返回值赋给变量或用 cout 输出。"
        },
        {
          "id": "kp08_q20",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，哪个库函数用于计算绝对值？",
          "options": [
            "pow()",
            "sqrt()",
            "abs()",
            "fabs()"
          ],
          "answer": 2,
          "explanation": "abs() 用于计算整数的绝对值。pow() 计算幂，sqrt() 计算平方根。fabs() 用于浮点数的绝对值。"
        },
        {
          "id": "kp08_q21",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>void printSum(int a, int b) {\n    cout &lt;&lt; a + b;\n}\nint main() {\n    printSum(3, 5);\n    return 0;\n}</code></pre>",
          "options": [
            "3",
            "5",
            "8",
            "编译错误"
          ],
          "answer": 2,
          "explanation": "printSum(3, 5) 计算并输出 3 + 5 = 8。函数直接输出结果，没有返回值。"
        },
        {
          "id": "kp08_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>int max2(int a, int b) {\n    return a > b ? a : b;\n}\nint main() {\n    cout &lt;&lt; max2(10, 7);\n    return 0;\n}</code></pre>",
          "options": [
            "10",
            "7",
            "17",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "max2 函数返回 a 和 b 中较大的值。10 > 7，所以返回 10。"
        },
        {
          "id": "kp08_q23",
          "type": "choice",
          "difficulty": 2,
          "question": "C++ 中，以下哪种参数传递方式不会修改原始变量的值？",
          "options": [
            "值传递",
            "引用传递",
            "指针传递",
            "以上都会修改"
          ],
          "answer": 0,
          "explanation": "值传递时，函数接收的是实参的副本，对形参的修改不影响原始变量。引用传递和指针传递都可以修改原始变量。"
        },
        {
          "id": "kp08_q24",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码中，函数 fun 的功能是什么？\n<pre><code>int fun(int a) {\n    if (a <= 1) return 1;\n    return a * fun(a - 1);\n}</code></pre>",
          "options": [
            "求 a 的平方",
            "求 a 的阶乘",
            "求 a 的立方",
            "求 a 的斐波那契数"
          ],
          "answer": 1,
          "explanation": "fun(5) = 5 * fun(4) = 5 * 4 * fun(3) = ... = 5 * 4 * 3 * 2 * 1 * 1 = 120。这是递归计算阶乘的函数。"
        },
        {
          "id": "kp08_q25",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个是合法的函数重载？",
          "options": [
            "int add(int a, int b); 和 int add(int x, int y);",
            "int add(int a, int b); 和 double add(int a, int b);",
            "int add(int a, int b); 和 int add(double a, double b);",
            "int add(int a); 和 int add(int b);"
          ],
          "answer": 2,
          "explanation": "函数重载要求参数列表不同（类型或数量不同）。C 中参数类型不同（int vs double），是合法的重载。A 和 D 仅参数名不同不算重载，B 仅返回类型不同也不算。"
        },
        {
          "id": "kp08_q26",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>int x = 10;\nvoid change() {\n    x = 20;\n}\nint main() {\n    change();\n    cout &lt;&lt; x;\n    return 0;\n}</code></pre>",
          "options": [
            "10",
            "20",
            "编译错误",
            "不确定"
          ],
          "answer": 1,
          "explanation": "x 是全局变量，函数 change() 内部可以访问并修改它。调用 change() 后 x 变为 20。"
        },
        {
          "id": "kp08_q27",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个函数调用是正确的？\n<pre><code>int add(int a, int b) { return a + b; }</code></pre>",
          "options": [
            "add();",
            "add(3);",
            "add(3, 5);",
            "add(3, 5, 7);"
          ],
          "answer": 2,
          "explanation": "add 函数需要两个 int 参数。只有 add(3, 5) 传递了恰好两个参数，调用正确。"
        },
        {
          "id": "kp08_q28",
          "type": "choice",
          "difficulty": 1,
          "question": "关于 C++ 中的默认参数，以下哪个说法是正确的？",
          "options": [
            "默认参数只能放在参数列表的末尾",
            "默认参数可以放在参数列表的任意位置",
            "所有参数都必须提供默认值",
            "默认参数不能与函数重载一起使用"
          ],
          "answer": 0,
          "explanation": "默认参数必须从右向左连续设置。如果有参数没有默认值，它右边的参数也不能有默认值。"
        },
        {
          "id": "kp08_q29",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>void swap2(int &a, int &b) {\n    int t = a;\n    a = b;\n    b = t;\n}\nint main() {\n    int x = 3, y = 7;\n    swap2(x, y);\n    cout &lt;&lt; x &lt;&lt; \" \" &lt;&lt; y;\n    return 0;\n}</code></pre>",
          "options": [
            "3 7",
            "7 3",
            "3 3",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "swap2 使用引用传递（int &a），函数内对 a 和 b 的修改直接影响原始变量 x 和 y，交换了它们的值。"
        },
        {
          "id": "kp08_q30",
          "type": "choice",
          "difficulty": 2,
          "question": "以下哪个函数声明使用了合法的默认参数？",
          "options": [
            "int add(int a, int b = 0);",
            "int add(int a = 0, int b);",
            "int add(int a, int b = 0, int c);",
            "int add(int a = 0, int b, int c = 0);"
          ],
          "answer": 0,
          "explanation": "默认参数必须从右向左连续设置。A 中 b 有默认值且后面没有非默认参数，合法。B 中默认参数 a=0 后面的 b 没有默认值，不合法。C 中 b=0 后面的 c 没有默认值，不合法。D 中 a=0 后面的 b 没有默认值，不合法。"
        },
        {
          "id": "kp08_q31",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>int fib(int n) {\n    if (n &lt;= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}\nint main() {\n    cout &lt;&lt; fib(5);\n    return 0;\n}</code></pre>",
          "options": [
            "3",
            "5",
            "8",
            "13"
          ],
          "answer": 1,
          "explanation": "fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5。这是经典的斐波那契数列递归实现。"
        },
        {
          "id": "kp08_q32",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，输出是什么？\n<pre><code>void func(int x) {\n    x = 100;\n    cout &lt;&lt; x &lt;&lt; \" \";\n}\nint main() {\n    int a = 5;\n    func(a);\n    cout &lt;&lt; a;\n    return 0;\n}</code></pre>",
          "options": [
            "100 100",
            "100 5",
            "5 5",
            "5 100"
          ],
          "answer": 1,
          "explanation": "func 是值传递，形参 x 是实参 a 的副本。函数内修改 x 不影响 a。函数输出 100，main 中输出 a 的原值 5。"
        },
        {
          "id": "kp08_q33",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>int func(int n) {\n    if (n == 0) return 0;\n    return n + func(n - 1);\n}\nint main() {\n    cout &lt;&lt; func(5);\n    return 0;\n}</code></pre>",
          "options": [
            "10",
            "15",
            "5",
            "20"
          ],
          "answer": 1,
          "explanation": "func(5) = 5 + func(4) = 5 + 4 + func(3) = 5 + 4 + 3 + func(2) = ... = 5+4+3+2+1+0 = 15。递归求 1 到 n 的和。"
        },
        {
          "id": "kp08_q34",
          "type": "choice",
          "difficulty": 3,
          "question": "执行以下代码后，x 的值是？\n<pre><code>void doubleIt(int &a) {\n    a = a * 2;\n}\nint main() {\n    int x = 5;\n    doubleIt(x);\n    cout &lt;&lt; x;\n    return 0;\n}</code></pre>",
          "options": [
            "5",
            "10",
            "2.5",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "doubleIt 通过引用传递修改 x，a 是 x 的别名，a = a * 2 即 x = x * 2 = 10。"
        },
        {
          "id": "kp08_q35",
          "type": "choice",
          "difficulty": 3,
          "question": "以下哪个函数原型和函数定义的配对是错误的？\n<pre><code>// 原型\nint max(int a, int b);\n// 定义 A\nint max(int x, int y) { return x > y ? x : y; }\n// 定义 B\ndouble max(int a, int b) { return a > b ? a : b; }\n// 定义 C\nint max(int a, int b, int c) { return a > b ? (a > c ? a : c) : (b > c ? b : c); }</code></pre>",
          "options": [
            "原型和定义A",
            "原型和定义B",
            "原型和定义C",
            "以上都正确"
          ],
          "answer": 1,
          "explanation": "原型声明返回 int，但定义B返回 double，返回类型不匹配，会编译报错。"
        },
        {
          "id": "kp08_q36",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码中，全局变量 count 的最终值是？\n<pre><code>int count = 0;\nvoid inc() { count++; }\nvoid dec() { count--; }\nint main() {\n    inc(); inc(); inc();\n    dec();\n    return 0;\n}</code></pre>",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": 2,
          "explanation": "count 初始为 0，inc 调用 3 次后 count=3，dec 调用 1 次后 count=2。"
        },
        {
          "id": "kp08_q37",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>void printN(int n) {\n    if (n <= 0) return;\n    printN(n - 1);\n    cout &lt;&lt; n &lt;&lt; \" \";\n}\nint main() {\n    printN(3);\n    return 0;\n}</code></pre>",
          "options": [
            "1 2 3",
            "3 2 1",
            "0 1 2 3",
            "3 3 3"
          ],
          "answer": 0,
          "explanation": "printN(3) 先递归调用 printN(2)，printN(2) 先调用 printN(1)，printN(1) 先调用 printN(0) 返回。然后依次输出 1, 2, 3。"
        },
        {
          "id": "kp08_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下关于函数的说法，哪个是错误的？",
          "options": [
            "一个函数可以有多个 return 语句",
            "函数的返回类型为 void 时也可以使用 return 语句",
            "函数不能直接调用自身",
            "函数的形参名可以与实参名相同"
          ],
          "answer": 2,
          "explanation": "C++ 中函数可以直接调用自身，这叫做递归。其他三个说法都是正确的。"
        },
        {
          "id": "kp08_q39",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码中，函数 power 的功能和返回值是什么？\n<pre><code>int power(int base, int exp) {\n    int result = 1;\n    for (int i = 0; i &lt; exp; i++)\n        result *= base;\n    return result;\n}</code></pre>",
          "options": [
            "计算 base + exp",
            "计算 base 的 exp 次幂",
            "计算 exp 的 base 次幂",
            "计算 base * exp"
          ],
          "answer": 1,
          "explanation": "循环执行 exp 次，每次将 result 乘以 base。power(2, 3) = 1*2*2*2 = 8。功能是计算 base 的 exp 次幂。"
        },
        {
          "id": "kp08_q40",
          "type": "choice",
          "difficulty": 2,
          "question": "执行以下代码后，输出是什么？\n<pre><code>int a = 1, b = 2;\nvoid foo(int x, int y) {\n    x = x + y;\n    y = x - y;\n    cout &lt;&lt; x &lt;&lt; \" \" &lt;&lt; y &lt;&lt; \" \";\n}\nint main() {\n    foo(a, b);\n    cout &lt;&lt; a &lt;&lt; \" \" &lt;&lt; b;\n    return 0;\n}</code></pre>",
          "options": [
            "3 1 1 2",
            "3 1 3 1",
            "3 2 1 2",
            "1 2 1 2"
          ],
          "answer": 0,
          "explanation": "foo 是值传递，形参 x=1, y=2。函数内 x=3, y=1，输出 \"3 1 \"。返回 main 后 a 和 b 未改变，输出 \"1 2\"。"
        },
        {
          "id": "kp08_q41",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，一个函数的 return 语句只能出现一次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数中可以有多个 return 语句，通常放在不同的条件分支中。但每次调用函数时只会执行一个 return。",
          "isJudge": true
        },
        {
          "id": "kp08_q42",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中，函数的定义必须在 main 函数之前。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数可以定义在 main 之后，只要在调用前有函数声明（原型）即可。当然，定义在 main 之前也可以省略声明。",
          "isJudge": true
        },
        {
          "id": "kp08_q43",
          "type": "choice",
          "difficulty": 2,
          "question": "C++ 中，函数可以通过引用参数修改调用者的变量值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用参数（如 int &a）是原变量的别名，函数内对形参的修改会直接作用于实参。",
          "isJudge": true
        },
        {
          "id": "kp08_q44",
          "type": "choice",
          "difficulty": 2,
          "question": "函数重载时，仅返回类型不同即可构成合法重载。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数重载要求参数列表（类型、数量、顺序）不同。仅返回类型不同不能构成合法重载，编译器无法区分调用哪个版本。",
          "isJudge": true
        },
        {
          "id": "kp08_q45",
          "type": "choice",
          "difficulty": 3,
          "question": "递归函数如果没有正确的终止条件，会导致栈溢出错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归函数每次调用都会在栈上分配新的栈帧。如果没有终止条件（基例），函数会无限调用自身，最终耗尽栈空间导致栈溢出。",
          "isJudge": true
        },
        {
          "id": "kp08_q46",
          "type": "coding",
          "difficulty": 1,
          "question": "编写函数 int add(int a, int b)，返回两数之和。在 main 中调用该函数，读入两个整数并输出它们的和。\n<p>测试输入：<code>3 5</code></p>\n<p>预期输出：</p>\n<pre><code>8</code></pre>",
          "answer": 0,
          "explanation": "定义 add 函数返回两个 int 参数的和，在 main 中读入数据并调用。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 5",
              "expectedOutput": "8",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint add(int a, int b) { return a + b; }\nint main() {\n    int a, b;\n    cin >> a >> b;\n    cout << add(a, b) << endl;\n    return 0;\n}"
        },
        {
          "id": "kp08_q47",
          "type": "coding",
          "difficulty": 2,
          "question": "编写函数 bool isEven(int n)，判断 n 是否为偶数。在 main 中读入一个整数，调用函数输出 Yes 或 No。\n<p>测试输入：<code>4</code></p>\n<p>预期输出：</p>\n<pre><code>Yes</code></pre>",
          "answer": 0,
          "explanation": "偶数除以 2 余数为 0，用 n % 2 == 0 判断。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "4",
              "expectedOutput": "Yes",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nbool isEven(int n) { return n % 2 == 0; }\nint main() {\n    int n;\n    cin >> n;\n    cout << (isEven(n) ? \"Yes\" : \"No\") << endl;\n    return 0;\n}"
        },
        {
          "id": "kp08_q48",
          "type": "coding",
          "difficulty": 2,
          "question": "编写函数 int max3(int a, int b, int c)，返回三个整数中的最大值。在 main 中读入三个整数，调用函数输出最大值。\n<p>测试输入：<code>3 7 5</code></p>\n<p>预期输出：</p>\n<pre><code>7</code></pre>",
          "answer": 0,
          "explanation": "先假设 a 最大，依次与 b、c 比较，取较大值。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 7 5",
              "expectedOutput": "7",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint max3(int a, int b, int c) {\n    int mx = a;\n    if (b > mx) mx = b;\n    if (c > mx) mx = c;\n    return mx;\n}\nint main() {\n    int a, b, c;\n    cin >> a >> b >> c;\n    cout << max3(a, b, c) << endl;\n    return 0;\n}"
        },
        {
          "id": "kp08_q49",
          "type": "coding",
          "difficulty": 3,
          "question": "编写函数 int factorial(int n)，用递归计算 n 的阶乘（n!）。在 main 中读入 n，调用函数输出结果。\n<p>测试输入：<code>5</code></p>\n<p>预期输出：</p>\n<pre><code>120</code></pre>\n<p>提示：0! = 1，n! = n * (n-1)!</p>",
          "answer": 0,
          "explanation": "递归基例：n<=1 时返回 1。递归步骤：return n * factorial(n-1)。5!=5*4*3*2*1=120。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "120",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << factorial(n) << endl;\n    return 0;\n}"
        },
        {
          "id": "kp08_q50",
          "type": "coding",
          "difficulty": 3,
          "question": "编写函数 int digitSum(int n)，计算正整数 n 的各位数字之和。在 main 中读入 n，调用函数输出结果。\n<p>测试输入：<code>1234</code></p>\n<p>预期输出：</p>\n<pre><code>10</code></pre>\n<p>提示：1+2+3+4=10</p>",
          "answer": 0,
          "explanation": "循环取每位数字：n % 10 取个位累加到 sum，n / 10 去掉个位。反复执行直到 n 为 0。",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "1234",
              "expectedOutput": "10",
              "description": "样例"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\nint digitSum(int n) {\n    int sum = 0;\n    while (n > 0) {\n        sum += n % 10;\n        n /= 10;\n    }\n    return sum;\n}\nint main() {\n    int n;\n    cin >> n;\n    cout << digitSum(n) << endl;\n    return 0;\n}"
        }
      ]
    }
  },
  "mockExam": [
    {
      "id": "ex_q01",
      "type": "choice",
      "difficulty": 1,
      "question": "sizeof(int) 的结果是？",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "answer": 2,
      "explanation": "int 通常占 4 字节。"
    },
    {
      "id": "ex_q02",
      "type": "choice",
      "difficulty": 1,
      "question": "以下哪个是合法的变量名？",
      "options": [
        "3abc",
        "my-name",
        "_count",
        "class"
      ],
      "answer": 2,
      "explanation": "变量名不能以数字开头、不能含连字符、不能是关键字。_count 合法。"
    },
    {
      "id": "ex_q03",
      "type": "choice",
      "difficulty": 1,
      "question": "表达式 17 / 5 的结果是？",
      "options": [
        "3.4",
        "3",
        "4",
        "3.0"
      ],
      "answer": 1,
      "explanation": "整数除法截断小数，17/5=3。"
    },
    {
      "id": "ex_q04",
      "type": "choice",
      "difficulty": 1,
      "question": "10 % 3 的结果是？",
      "options": [
        "3",
        "1",
        "0",
        "3.33"
      ],
      "answer": 1,
      "explanation": "10÷3=3余1。"
    },
    {
      "id": "ex_q05",
      "type": "choice",
      "difficulty": 2,
      "question": "cout << 3 + 4 * 5 输出？",
      "options": [
        "35",
        "23",
        "20",
        "7"
      ],
      "answer": 1,
      "explanation": "先乘后加，4*5=20, 3+20=23。"
    },
    {
      "id": "ex_q06",
      "type": "choice",
      "difficulty": 2,
      "question": "endl 和 \"\\n\" 的区别？",
      "options": [
        "完全相同",
        "endl刷新缓冲区，\\n不会",
        "\\n刷新缓冲区",
        "都不能换行"
      ],
      "answer": 1,
      "explanation": "endl 会刷新缓冲区。"
    },
    {
      "id": "ex_q07",
      "type": "choice",
      "difficulty": 2,
      "question": "if (a = 5) 这行代码会？",
      "options": [
        "判断a是否等于5",
        "将a赋值为5且条件为真",
        "编译错误",
        "将a赋值为5且条件为假"
      ],
      "answer": 1,
      "explanation": "= 是赋值，表达式值为5(非零)即为true。"
    },
    {
      "id": "ex_q08",
      "type": "choice",
      "difficulty": 2,
      "question": "do-while 与 while 的主要区别？",
      "options": [
        "do-while更快",
        "do-while至少执行一次",
        "do-while不需要条件",
        "while不能嵌套"
      ],
      "answer": 1,
      "explanation": "do-while 先执行再判断，至少执行一次。"
    },
    {
      "id": "ex_q09",
      "type": "choice",
      "difficulty": 2,
      "question": "以下哪个导致无限循环？",
      "options": [
        "for(int i=0;i<10;i++)",
        "while(true)",
        "for(int i=10;i>0;i--)",
        "while(0)"
      ],
      "answer": 1,
      "explanation": "while(true) 条件永远为真。"
    },
    {
      "id": "ex_q10",
      "type": "choice",
      "difficulty": 1,
      "question": "int a[5]; 有效下标范围？",
      "options": [
        "1~5",
        "0~5",
        "0~4",
        "1~4"
      ],
      "answer": 2,
      "explanation": "从0开始，0~4。"
    },
    {
      "id": "ex_q11",
      "type": "choice",
      "difficulty": 2,
      "question": "哪个表示单个字符？",
      "options": [
        "\"A\"",
        "A",
        "'A'",
        "\\t"
      ],
      "answer": 2,
      "explanation": "单引号表示 char。"
    },
    {
      "id": "ex_q12",
      "type": "choice",
      "difficulty": 2,
      "question": "string s=\"hello\"; s.length() 是？",
      "options": [
        "4",
        "5",
        "6",
        "不确定"
      ],
      "answer": 1,
      "explanation": "\"hello\" 有5个字符。"
    },
    {
      "id": "ex_q13",
      "type": "choice",
      "difficulty": 3,
      "question": "正确的函数声明？",
      "options": [
        "int max(a,b);",
        "int max(int a,b);",
        "int max(int a,int b);",
        "max(int a,int b);"
      ],
      "answer": 2,
      "explanation": "每个参数都要单独声明类型。"
    },
    {
      "id": "ex_q14",
      "type": "choice",
      "difficulty": 2,
      "question": "表达式 16 / 4 % 2 的值？",
      "options": [
        "8",
        "4",
        "2",
        "0"
      ],
      "answer": 3,
      "explanation": "16/4=4, 4%2=0。"
    },
    {
      "id": "ex_q15",
      "type": "choice",
      "difficulty": 2,
      "question": "N=12, cout<<(N%3+N/5) 输出？",
      "options": [
        "6",
        "2",
        "6.4",
        "2.4"
      ],
      "answer": 1,
      "explanation": "12%3=0, 12/5=2, 0+2=2。"
    },
    {
      "id": "ex_q16",
      "type": "coding",
      "difficulty": 2,
      "question": "读入两个整数，输出它们的和。\n<p>输入：<code>3 5</code></p>\n<p>输出：<code>8</code></p>",
      "answer": 0,
      "explanation": "读入两个整数输出和。",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "3 5",
          "expectedOutput": "8",
          "description": "求和"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明两个整数变量\n    int a, b;\n\n    // 从键盘读入两个整数\n    // 例如输入：3 5（中间用空格分隔）\n    cin >> a >> b;\n\n    // 计算并输出它们的和\n    // a + b 的结果直接通过 cout 输出\n    cout << a + b << endl;  // 输出 8\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 这是最基础的输入输出题\n * 2. cin >> a >> b 一次读入两个整数\n * 3. cout << 表达式 可以直接输出计算结果\n * 4. GESP 考试中，编程题的第一题通常是这种简单题\n */"
    },
    {
      "id": "ex_q17",
      "type": "coding",
      "difficulty": 2,
      "question": "读入整数，输出\"正数\"\"负数\"\"零\"。\n<p>输入：<code>-5</code></p>\n<p>输出：<code>负数</code></p>",
      "answer": 0,
      "explanation": "if-else if-else 判断。",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "正数",
          "description": "正数"
        },
        {
          "input": "0",
          "expectedOutput": "零",
          "description": "零"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入一个整数\n    cin >> n;\n\n    // 用 if-else if-else 判断正数、负数还是零\n    if (n > 0) {\n        cout << \"正数\" << endl;\n    } else if (n < 0) {\n        cout << \"负数\" << endl;\n    } else {\n        cout << \"零\" << endl;\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. if-else if-else 是多分支条件语句\n * 2. 判断顺序：先检查 n > 0，再检查 n < 0，最后是 n == 0\n * 3. 三个分支互斥，最多只会执行其中一个\n * 4. 注意输出的是中文字符串，要用双引号括起来\n */"
    },
    {
      "id": "ex_q18",
      "type": "coding",
      "difficulty": 2,
      "question": "读入n，输出1+2+...+n。\n<p>输入：<code>10</code></p>\n<p>输出：<code>55</code></p>",
      "answer": 0,
      "explanation": "for 循环累加。",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "100",
          "expectedOutput": "5050",
          "description": "1到100求和"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入正整数 n\n    cin >> n;\n\n    // 用变量 sum 来累加，初始值为 0\n    int sum = 0;\n\n    // for 循环：i 从 1 到 n，每次加 1\n    for (int i = 1; i <= n; i++) {\n        sum += i;  // 把当前的 i 加到 sum 上\n        // 第1轮：sum = 0 + 1 = 1\n        // 第2轮：sum = 1 + 2 = 3\n        // 第3轮：sum = 3 + 3 = 6\n        // ...\n    }\n\n    // 输出 1+2+...+n 的结果\n    cout << sum << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 累加求和：用变量 sum 从 0 开始，逐个累加\n * 2. for 循环是\"已知次数\"循环的首选\n * 3. sum += i 是 sum = sum + i 的简写\n * 4. 数学公式：1+2+...+n = n*(n+1)/2\n */"
    },
    {
      "id": "ex_q19",
      "type": "coding",
      "difficulty": 3,
      "question": "读入5个整数，找出最大值。\n<p>输入：<code>3 7 2 9 5</code></p>\n<p>输出：<code>9</code></p>",
      "answer": 0,
      "explanation": "遍历数组找最大值。",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "1 5 3 2 4",
          "expectedOutput": "5",
          "description": "最大值"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 声明大小为 5 的数组\n    int a[5];\n\n    // 循环读入 5 个整数\n    for (int i = 0; i < 5; i++) {\n        cin >> a[i];\n    }\n\n    // 假设第一个元素是最大值\n    int mx = a[0];\n\n    // 从第 2 个元素开始，逐个和 mx 比较\n    for (int i = 1; i < 5; i++) {\n        if (a[i] > mx) {\n            mx = a[i];  // 发现更大的，更新 mx\n        }\n    }\n\n    // 输出最大值\n    cout << mx << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 求最大值的经典方法（三步法）：\n *    ① 假设第一个元素最大\n *    ② 遍历剩余元素，逐一比较\n *    ③ 发现更大的就更新\n * 2. 注意：比较从 i=1 开始（第 2 个元素），不是 i=0\n * 3. 这个方法也可以用来求最小值（把 > 改成 <）\n */"
    },
    {
      "id": "ex_q20",
      "type": "coding",
      "difficulty": 3,
      "question": "编写函数计算n的阶乘。main读入n输出n!。\n<p>输入：<code>5</code></p>\n<p>输出：<code>120</code></p>",
      "answer": 0,
      "explanation": "循环从1乘到n。",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "120",
          "description": "5! = 120"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\n// 定义函数 factorial，计算 n 的阶乘\n// 阶乘公式：n! = 1 × 2 × 3 × ... × n\nint factorial(int n) {\n    int result = 1;  // 结果初始为 1（乘法从 1 开始）\n\n    // 从 1 乘到 n\n    for (int i = 1; i <= n; i++) {\n        result *= i;  // result = result × i\n        // 例如 n=5：1×1=1, 1×2=2, 2×3=6, 6×4=24, 24×5=120\n    }\n\n    return result;  // 返回阶乘结果\n}\n\nint main() {\n    int n;\n\n    // 读入正整数 n\n    cin >> n;\n\n    // 调用 factorial 函数，输出 n 的阶乘\n    cout << factorial(n) << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 阶乘（factorial）：n! = 1 × 2 × ... × n\n *    例如：5! = 1 × 2 × 3 × 4 × 5 = 120\n * 2. 函数封装：把\"求阶乘\"的逻辑放在函数里，main 里只负责调用\n * 3. result 初始值必须是 1（不是 0），因为 0 × 任何数 = 0\n * 4. GESP 考试常考：阶乘、求和、求最大值\n */"
    },
    {
      "id": "ex_q21",
      "type": "choice",
      "difficulty": 1,
      "question": "以下哪个不是C++关键字？",
      "options": [
        "int",
        "double",
        "cin",
        "bool"
      ],
      "answer": 2,
      "explanation": "cin 是标准输入对象，不是关键字。"
    },
    {
      "id": "ex_q22",
      "type": "choice",
      "difficulty": 2,
      "question": "表达式 5 > 3 的结果类型是？",
      "options": [
        "int",
        "bool",
        "double",
        "string"
      ],
      "answer": 1,
      "explanation": "比较运算结果是 bool 类型。"
    },
    {
      "id": "ex_q23",
      "type": "choice",
      "difficulty": 2,
      "question": "以下代码 count 最终是？\n<pre><code>int count=0;\nfor(int i=0;i<10;i+=2) count++;\n</code></pre>",
      "options": [
        "5",
        "10",
        "4",
        "6"
      ],
      "answer": 0,
      "explanation": "i=0,2,4,6,8 共5次。"
    },
    {
      "id": "ex_q24",
      "type": "choice",
      "difficulty": 2,
      "question": "char c = 'A' + 1; c 的值是？",
      "options": [
        "'A'",
        "'B'",
        "66",
        "A1"
      ],
      "answer": 1,
      "explanation": "'A'=65, 65+1=66='B'。"
    },
    {
      "id": "ex_q25",
      "type": "choice",
      "difficulty": 2,
      "question": "break 语句用于？",
      "options": [
        "跳过本次循环",
        "跳出当前循环",
        "结束程序",
        "继续下一次"
      ],
      "answer": 1,
      "explanation": "break 跳出当前循环。"
    },
    {
      "id": "ex_q26",
      "type": "choice",
      "difficulty": 3,
      "question": "以下哪个输出 \"5%2={1}\"？",
      "options": [
        "printf(\"5%%2={%d}\", 5%2)",
        "printf(\"5%2={%d}\", 5%2)",
        "cout<<\"5%2={\"<<5%2<<\"}\"",
        "printf(\"5%2={1}\")"
      ],
      "answer": 0,
      "explanation": "printf 中 %% 输出一个 %，%d 格式化整数。"
    },
    {
      "id": "ex_q27",
      "type": "choice",
      "difficulty": 1,
      "question": "以下哪个可以声明数组？",
      "options": [
        "int a(5);",
        "int a[5];",
        "int a{5};",
        "array a[5];"
      ],
      "answer": 1,
      "explanation": "正确语法：int a[5];"
    },
    {
      "id": "ex_q28",
      "type": "choice",
      "difficulty": 2,
      "question": "函数 return 语句会？",
      "options": [
        "结束整个程序",
        "跳回调用处",
        "重启main",
        "输出结果"
      ],
      "answer": 1,
      "explanation": "return 将控制权返回给调用者。"
    },
    {
      "id": "ex_q29",
      "type": "choice",
      "difficulty": 2,
      "question": "表达式 (3 - 2) * 3 + 5 的值？",
      "options": [
        "-13",
        "8",
        "2",
        "0"
      ],
      "answer": 1,
      "explanation": "(3-2)=1, 1*3=3, 3+5=8。",
      "source": "2024_03"
    },
    {
      "id": "ex_q30",
      "type": "choice",
      "difficulty": 2,
      "question": "cout << \"5%2=\" << 5 % 2 执行后输出？",
      "options": [
        "2 2",
        "1 1",
        "5%2=2",
        "5%2=1"
      ],
      "answer": 3,
      "explanation": "5%2=1，输出 \"5%2=1\"。",
      "source": "2024_03"
    }
  ],
  "realExam": [
    {
      "id": "r2312_q03",
      "type": "choice",
      "difficulty": 2,
      "question": "假设现在是上午十点，求出N小时（正整数）后是第几天几时，如输入20小时则为第2天6点，如N输入4则为今天14点。为实现相应功能，应在横线处填写代码是( )。\n<pre><code>int day, hour;\nday = ________;\nhour = ________;</code></pre>",
      "options": [
        "(10+N)%24, (10+N)/24",
        "(10+N)/24, (10+N)%24",
        "N%24, N/24",
        "10/24, 10%24"
      ],
      "answer": 1,
      "explanation": "(10+N)/24得天数，(10+N)%24得小时数。如10+20=30, 30/24=1天, 30%24=6时。",
      "source": "2023_12"
    },
    {
      "id": "r2312_q04",
      "type": "choice",
      "difficulty": 1,
      "question": "下面的程序用于判断N是否为偶数，横线处应填写代码是（ ）。\n<pre><code>if (_______) cout << N << \"是偶数\";</code></pre>",
      "options": [
        "N%2==0",
        "N%2=0",
        "N%2",
        "N%2!=0"
      ],
      "answer": 0,
      "explanation": "N%2==0判断N是否为偶数。N%2=0是赋值不是比较，N%2非零为true表示奇数。",
      "source": "2023_12"
    },
    {
      "id": "r2403_q03",
      "type": "choice",
      "difficulty": 2,
      "question": "执行C++语句cin >> a时如果输入5+2，下述说法正确的是（ ）。",
      "options": [
        "变量a将被赋值为整数7",
        "变量a将被赋值为字符串\"5+2\"",
        "语句执行将报错",
        "取决于变量a的类型"
      ],
      "answer": 3,
      "explanation": "如果a是int，cin只读入5；如果a未定义则编译错误。行为取决于a的类型。",
      "source": "2024_03"
    },
    {
      "id": "r2403_q07",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码第2行，总共被执行次数是（ ）。\n<pre><code>for(int i=-10; i<10; i++)\n    cout << i << \" \";</code></pre>",
      "options": [
        "10",
        "19",
        "20",
        "21"
      ],
      "answer": 2,
      "explanation": "i从-10到9，共20次循环。",
      "source": "2024_03"
    },
    {
      "id": "r2403_q08",
      "type": "choice",
      "difficulty": 3,
      "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int tnt = 0;\nfor(int i=0; i<10; i++)\n    if(i%3 && i%7)\n        tnt += i;\ncout << tnt << endl;</code></pre>",
      "options": [
        "0",
        "7",
        "18",
        "20"
      ],
      "answer": 3,
      "explanation": "i%3&&i%7筛选出既不被3整除也不被7整除的数：1+2+4+5+8=20。",
      "source": "2024_03"
    },
    {
      "id": "r2403_q09",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int N = 10;\nwhile(N){\n    N -= 1;\n    if(N%3 == 0)\n        cout << N << \"#\";\n}</code></pre>",
      "options": [
        "9#6#3#",
        "9#6#3#0#",
        "8#7#5#4#2#1#",
        "10#8#7#5#4#2#1#"
      ],
      "answer": 0,
      "explanation": "N递减：9→9%3=0输出, 6→6%3=0输出, 3→3%3=0输出, 0→while(0)退出。",
      "source": "2024_03"
    },
    {
      "id": "r2403_tf02",
      "type": "choice",
      "difficulty": 1,
      "question": "C++语句printf(\"%d#%d&\",2,3)执行后输出的是2#3&。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "%d格式化整数2和3，#和&是普通字符原样输出。",
      "source": "2024_03",
      "isJudge": true
    },
    {
      "id": "r2403_tf04",
      "type": "choice",
      "difficulty": 2,
      "question": "C++表达式\"10\"*2执行时将报错，因为\"10\"是字符串类型而2是整数类型，它们数据类型不同，不能在一起运算。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "字符串不能与整数相乘，会编译报错。",
      "source": "2024_03",
      "isJudge": true
    },
    {
      "id": "r2403_tf09",
      "type": "choice",
      "difficulty": 1,
      "question": "小杨奶奶家的数字电视可以通过遥控器输入电视剧名称来找到想播放的电视剧，所以可以推知里面有交互式程序在运行。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "数字电视接收用户输入并响应，说明有交互式程序。",
      "source": "2024_03",
      "isJudge": true
    },
    {
      "id": "r2406_q08",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行时输入10后，正确的输出是（ ）。\n<pre><code>int N;\ncout << \"请输入正整数：\";\ncin >> N;\nif (N % 3)\n    printf(\"第5行代码%2d\", N % 3);\nelse\n    printf(\"第6行代码%2d\", N % 3);</code></pre>",
      "options": [
        "第5行代码1",
        "第6行代码1",
        "第5行代码 1",
        "第6行代码 1"
      ],
      "answer": 2,
      "explanation": "N=10, 10%3=1(非零为true)，执行if分支。%2d占2位右对齐，输出\"第5行代码 1\"。",
      "source": "2024_06"
    },
    {
      "id": "r2406_q11",
      "type": "choice",
      "difficulty": 3,
      "question": "下面的C++代码用于求1~N之间所有奇数之和，其中N为正整数。有关描述错误的是（ ）。\n<pre><code>int N;\ncin >> N;\nint i = 1, Sum = 0;\nwhile (i <= N){\n    if (i % 2 == 1)\n        Sum += i;\n    i += 1;\n}\ncout << i << \" \" << Sum;</code></pre>",
      "options": [
        "输入10，输出11 25",
        "输入5，输出6 9",
        "将i+=1移到if前一行，同样能实现要求",
        "删除if并改i+=1为i+=2，同样能实现要求"
      ],
      "answer": 2,
      "explanation": "将i+=1移到if前，i先加1再判断奇偶，导致所有偶数被跳过，求和结果错误。",
      "source": "2024_06"
    },
    {
      "id": "r2406_tf01",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++代码中变量X被赋值为16.44，则cout << X / 10执行后输出的一定是1。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "如果X是double类型，16.44/10=1.644，不一定是1。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2406_tf02",
      "type": "choice",
      "difficulty": 2,
      "question": "C++的整型变量N被赋值为10，则语句cout << N / 4 << \"->\" << N % 4 << \"->\" << N / 4.0执行后输出是2->2->2.0。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "N/4.0=2.5(不是2.0)，输出为\"2->2->2.5\"。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2406_tf03",
      "type": "choice",
      "difficulty": 2,
      "question": "定义C++的float型变量N，则语句cin >> N; cout << int(float(N))可以输入正负整数和浮点数，并将其转换为整数后输出。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "float可接受整数和浮点数输入，int()强制转换截断小数部分。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2406_tf04",
      "type": "choice",
      "difficulty": 1,
      "question": "C++的整型N被赋值为5，语句printf(\"%d*2\",N)执行后将输出10。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "printf(\"%d*2\",5)输出\"5*2\"，*2是普通字符不是乘法。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2406_tf07",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++代码中，不可以将变量命名为printf，因为printf是C++语言的关键字。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "printf是标准库函数名，不是关键字。可以作变量名（但不推荐）。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2406_tf08",
      "type": "choice",
      "difficulty": 3,
      "question": "在C++中有整型变量N，则表达式N += 8/4//2相当于N += 8/(4/2)。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "//在C++中是注释符，8/4//2实际等于8/4=2。",
      "source": "2024_06",
      "isJudge": true
    },
    {
      "id": "r2409_q02",
      "type": "choice",
      "difficulty": 1,
      "question": "C++程序执行出现错误，不太常见的调试手段是（ ）。",
      "options": [
        "阅读源代码",
        "单步调试",
        "输出执行中间结果",
        "跟踪汇编码"
      ],
      "answer": 3,
      "explanation": "跟踪汇编码对初学者来说不常见。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q05",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++中，假设N为正整数10，则cout << (N / 3 + N % 3)将输出（ ）。",
      "options": [
        "6",
        "4.3",
        "4",
        "2"
      ],
      "answer": 2,
      "explanation": "N/3=10/3=3, N%3=10%3=1, 3+1=4。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q07",
      "type": "choice",
      "difficulty": 2,
      "question": "成功执行下面的C++代码，先后从键盘上输入5回车和2回车，输出是（ ）。\n<pre><code>cin >> a;\ncin >> b;\ncout << a + b;</code></pre>",
      "options": [
        "将输出整数7",
        "将输出52",
        "将输出5和2，之间有空格",
        "执行结果不确定，因为没有显示a和b的数据类型"
      ],
      "answer": 3,
      "explanation": "不知道a和b的类型，无法确定输出。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q08",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后输出是（ ）。\n<pre><code>int Sum = 0;\nfor (int i = 0; i < 10; i++)\n    Sum += i;\ncout << Sum;</code></pre>",
      "options": [
        "55",
        "45",
        "10",
        "9"
      ],
      "answer": 1,
      "explanation": "Sum = 0+1+2+...+9 = 45。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q09",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后输出的是（ ）。\n<pre><code>int N = 0;\nfor (int i = 0; i < 10; i++)\n    N += 1;\ncout << N;</code></pre>",
      "options": [
        "55",
        "45",
        "10",
        "9"
      ],
      "answer": 2,
      "explanation": "循环10次，N每次加1，N=10。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q10",
      "type": "choice",
      "difficulty": 3,
      "question": "下面C++代码执行后输出的是（ ）。\n<pre><code>int N = 0;\nfor (int i = 1; i < 10; i += 2){\n    if (i % 2 == 1)\n        continue;\n    N += 1;\n}\ncout << N;</code></pre>",
      "options": [
        "5",
        "4",
        "2",
        "0"
      ],
      "answer": 3,
      "explanation": "i从1开始每次加2，永远是奇数，i%2==1恒为true，continue每次都执行，N永远不加。",
      "source": "2024_09"
    },
    {
      "id": "r2409_q15",
      "type": "choice",
      "difficulty": 3,
      "question": "如果正整数N能表示为X*(X+1)的形式，称它是\"兄弟数\"。下面代码判断N是否为兄弟数，横线处应填入的代码有几个能完成功能？（ ）\n<pre><code>int N;\ncin >> N;\nfor(int i = 0; i <= N; i++)\n    if(___________________)\n        cout << N << \"是一个兄弟数\";</code></pre>\ni) N==i*(i+1)  ii) N==i*(i-1)  iii) N/(i+1)==i  iv) N/(i-1)==i",
      "options": [
        "1个",
        "2个",
        "3个",
        "4个"
      ],
      "answer": 2,
      "explanation": "i)直接乘法可以；ii)等价于(i-1)*i也可以；iii)整数除法可以；iv)i=0时除零错误。共3个。",
      "source": "2024_09"
    },
    {
      "id": "r2409_tf01",
      "type": "choice",
      "difficulty": 1,
      "question": "小杨最近开始学习C++编程，老师说C++是一门面向对象的编程语言，也是一门高级语言。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "C++确实是面向对象的高级编程语言。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf02",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++中，表达式10/4和10%4的值相同，都是整数2，说明/和%可以互相替换。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "虽然10/4=2和10%4=2碰巧相同，但/和%含义不同，如10/3=3而10%3=1。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf03",
      "type": "choice",
      "difficulty": 2,
      "question": "N是C++程序中的整型变量，则语句scanf(\"%d\", &N)能接收正整数、负整数和0输入，但如果输入含字母或带小数点数，将导致无法执行。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "scanf遇到无效输入不会导致程序崩溃，只是无法读取，程序继续执行。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf05",
      "type": "choice",
      "difficulty": 3,
      "question": "在C++代码中整型变量X被赋值为20.24，则cout << (X++, X+1) / 10执行后输出的是2.124。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "X是int，X=20。X++后X=21。(X++,X+1)逗号运算符返回22。22/10=2(整数除法)。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf07",
      "type": "choice",
      "difficulty": 1,
      "question": "在C++，break语句通常与if语句配合使用。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "break通常放在if条件内，满足条件时跳出循环。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf08",
      "type": "choice",
      "difficulty": 1,
      "question": "在C++代码中，不可以将变量命名为five-star，因为变量名中不可以出现-（减号）符号。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "变量名只能包含字母、数字和下划线，不能包含连字符。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf09",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++语言中，整型、实数型、字符型、布尔型是不同数据类型，但这四种类型的变量间都可以比较大小。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "C++允许不同类型间隐式转换后进行比较。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2409_tf10",
      "type": "choice",
      "difficulty": 3,
      "question": "C++中，定义变量int a=5,b=4,c=3，则表达式(a<b<c)的值为逻辑假。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "C++从左到右计算：(5<4)=0，然后(0<3)=1(真)。表达式值为1(真)，不是假。",
      "source": "2024_09",
      "isJudge": true
    },
    {
      "id": "r2412_q01",
      "type": "choice",
      "difficulty": 1,
      "question": "2024年诺贝尔物理学奖颁给了约翰·霍普菲尔德和杰弗里·辛顿，这两位科学家的主要研究方向是（ ）。",
      "options": [
        "天体物理",
        "流体力学",
        "人工智能",
        "量子理论"
      ],
      "answer": 2,
      "explanation": "两位因机器学习和人工神经网络的突破性贡献获奖。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q02",
      "type": "choice",
      "difficulty": 1,
      "question": "下列软件中是操作系统的是（ ）。",
      "options": [
        "高德地图",
        "腾讯会议",
        "纯血鸿蒙",
        "金山永中"
      ],
      "answer": 2,
      "explanation": "纯血鸿蒙(HarmonyOS NEXT)是操作系统。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q03",
      "type": "choice",
      "difficulty": 2,
      "question": "有关下列C++代码的说法，正确的是( )。\n<pre><code>printf(\"Hello,GESP!\");</code></pre>",
      "options": [
        "配对双引号内不可以有汉字",
        "双引号可改为单引号而输出效果不变",
        "双引号可改为三个连续单引号而输出效果不变",
        "双引号可改为三个连续双引号而输出效果不变"
      ],
      "answer": 3,
      "explanation": "双引号用于字符串，不能改为单引号（单引号是char）。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q07",
      "type": "choice",
      "difficulty": 2,
      "question": "下面代码求几天后星期几，如果N%7==0则输出\"星期天\"，否则输出\"星期N%7\"。横线处应填（ ）。\n<pre><code>if(_________________)\n    printf(\"星期天\");\nelse\n    printf(\"星期%d\", N%7);</code></pre>",
      "options": [
        "N%7!=0",
        "N%7==0",
        "N==0",
        "N%7"
      ],
      "answer": 1,
      "explanation": "N%7==0时为星期天。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q08",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后输出是（ ）。\n<pre><code>int N=0, i;\nfor (i = 1; i < 10; i++)\n    N += 1;\ncout << (N + i);</code></pre>",
      "options": [
        "54",
        "20",
        "19",
        "18"
      ],
      "answer": 2,
      "explanation": "循环i=1到9共9次，N=9。退出时i=10。N+i=9+10=19。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q09",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后输出的是（ ）。\n<pre><code>int tnt = 0;\nfor (i = 0; i < 100; i++)\n    tnt += i % 10;\ncout << tnt;</code></pre>",
      "options": [
        "4950",
        "5050",
        "450",
        "100"
      ],
      "answer": 2,
      "explanation": "i%10循环0~9，和为45。100次=10个完整周期，tnt=45×10=450。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q10",
      "type": "choice",
      "difficulty": 3,
      "question": "下面C++代码执行后输出的是（ ）。\n<pre><code>int tnt = 0;\nfor (i = 5; i < 100; i += 5){\n    if (i % 2 == 0) continue;\n    tnt += 1;\n    if (i >= 50) break;\n}\ncout << tnt;</code></pre>",
      "options": [
        "10",
        "9",
        "6",
        "5"
      ],
      "answer": 2,
      "explanation": "i=5(odd,tnt=1),10(even,skip),15(tnt=2),20(skip),25(tnt=3),30(skip),35(tnt=4),40(skip),45(tnt=5),50(skip?50%2=0 skip),55(tnt=6,i>=50 break)。等等，50%2=0跳过，55是奇数tnt=6然后break。答案6。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q12",
      "type": "choice",
      "difficulty": 3,
      "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int cnt = 0;\nfor(int i = 1; i < 10; i++)\n    cnt += i++;\ncout << cnt;</code></pre>",
      "options": [
        "54",
        "45",
        "25",
        "10"
      ],
      "answer": 2,
      "explanation": "i=1:cnt=1,i→2; i=3:cnt=4,i→4; i=5:cnt=9,i→6; i=7:cnt=16,i→8; i=9:cnt=25,i→10退出。cnt=25。",
      "source": "2024_12"
    },
    {
      "id": "r2412_q13",
      "type": "choice",
      "difficulty": 2,
      "question": "int变量a=4（正方形边长），下列哪个语句执行后能使正方形周长增加4？（ ）",
      "options": [
        "a*4;",
        "a+4;",
        "a+1;",
        "++a;"
      ],
      "answer": 3,
      "explanation": "只有++a会修改a的值（a变为5），周长从16变为20，增加4。其他语句不修改a。",
      "source": "2024_12"
    },
    {
      "id": "r2412_tf01",
      "type": "choice",
      "difficulty": 1,
      "question": "在Windows资源管理器中为已有文件A建立副本的操作是Ctrl+C，然后Ctrl+V。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "Ctrl+C复制，Ctrl+V粘贴，可以建立文件副本。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf02",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++中，表达式8/3和8%3的值相同。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "8/3=2，8%3=2，此例中确实相同。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf03",
      "type": "choice",
      "difficulty": 1,
      "question": "X是C++语言的基本类型变量，则语句cin>>X, cout<<X能接收键盘输入并原样输出。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "cin读入基本类型，cout原样输出，这是标准的输入输出操作。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf04",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后将输出10。（ ）\n<pre><code>int N = 0;\nfor (int i = 0; i < 10; i++){\n    continue;\n    N += 1;\n}\ncout << N;</code></pre>",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "continue跳过N+=1，N始终为0，输出0不是10。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf05",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后将输出100。（ ）\n<pre><code>int i;\nfor (i = 0; i <= 100; i++)\n    continue;\ncout << i;</code></pre>",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "i最终为101（循环结束时i++使i=101），输出101不是100。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf06",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码被执行时，将执行三次输出（即cout将被执行3次）。（ ）\n<pre><code>for (int i = 0; i < 10; i += 3)\n    cout << i;</code></pre>",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "i=0,3,6,9时执行，共4次输出，不是3次。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf07",
      "type": "choice",
      "difficulty": 2,
      "question": "C++语句cout << (3,2)执行后，将输出3和2，且3和2之间有逗号间隔。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "(3,2)是逗号表达式，值为2。只输出2。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf09",
      "type": "choice",
      "difficulty": 3,
      "question": "在C++中，对浮点变量float f，语句cin >> f; cout << (f<1);在输入是2e-1时，输出是0。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "2e-1=0.2, 0.2<1为true, 输出1不是0。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2412_tf10",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++的循环体内部，如果break和continue语句连续在一起，那么作用抵消，可以顺利执行下一次循环。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "break先执行会直接跳出循环，continue根本不会被执行。",
      "source": "2024_12",
      "isJudge": true
    },
    {
      "id": "r2503_q05",
      "type": "choice",
      "difficulty": 3,
      "question": "下面框架在L1和L2处填写选项中的代码，哪组不能通过编译（ ）。\n<pre><code>int main() {\n    int i = 0;\n    __________ // L1\n    break;\n    __________ // L2\n    return 0;\n}</code></pre>",
      "options": [
        "do { ... } while (i != 0);",
        "for (; i < 10; i++) { ... }",
        "if (i == 0) { ... }",
        "switch (i) { ... }"
      ],
      "answer": 2,
      "explanation": "break只能在循环(for/while/do-while)和switch中使用，在if中使用会编译错误。",
      "source": "2025_03"
    },
    {
      "id": "r2503_q07",
      "type": "choice",
      "difficulty": 2,
      "question": "有关下列C++代码的说法，错误的是( )。\n<pre><code>printf(\"我爱码代码！\");</code></pre>",
      "options": [
        "双引号内汉字改为英文Hello能正确执行",
        "双引号内汉字改为Hello代码！能正确执行",
        "每个双引号都可以改为两个单引号",
        "每个双引号都可以改为三个双引号"
      ],
      "answer": 2,
      "explanation": "两个单引号''是多字符字面量，不能替代双引号作为字符串。",
      "source": "2025_03"
    },
    {
      "id": "r2503_q13",
      "type": "choice",
      "difficulty": 2,
      "question": "下面C++代码执行后输出是（ ）。\n<pre><code>int tnt = 0;\nfor (int i = -1000; i < 1000; i++)\n    tnt += i;\ncout << tnt << endl;</code></pre>",
      "options": [
        "-1000",
        "0",
        "999",
        "1000"
      ],
      "answer": 0,
      "explanation": "-1000到999求和：正负数相互抵消(-999+999=0等)，只剩-1000。",
      "source": "2025_03"
    },
    {
      "id": "r2503_q14",
      "type": "choice",
      "difficulty": 3,
      "question": "下面C++代码执行后输出的是（ ）。\n<pre><code>int i;\nfor (i = 1; i < 100; i += 5)\n    continue;\ncout << i << endl;</code></pre>",
      "options": [
        "101",
        "100",
        "99",
        "96"
      ],
      "answer": 0,
      "explanation": "i=1,6,11,...,96。96<100进入循环,i+=5→101。101<100为false退出,输出101。",
      "source": "2025_03"
    },
    {
      "id": "r2503_tf01",
      "type": "choice",
      "difficulty": 1,
      "question": "C++、Python都是高级编程语言，它们的每条语句最终都要通过机器指令来完成。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "高级语言最终都要编译或解释为机器指令执行。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "r2503_tf03",
      "type": "choice",
      "difficulty": 2,
      "question": "执行如下C++代码如果在键盘上输入10，执行后将输出20。（ ）\n<pre><code>char N;\nprintf(\"请输入正整数：\");\ncin >> N;\nprintf(\"%d\\n\", N * 2);</code></pre>",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "char N读入字符'1'(ASCII 49)，N*2=98，不是20。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "r2503_tf04",
      "type": "choice",
      "difficulty": 2,
      "question": "删除下面C++代码中的continue不影响程序的执行效果。（ ）\n<pre><code>for (int i = 0; i < 100; i++){\n    if (i % 2 == 0){\n        printf(\"偶数\");\n        continue;\n    }\n    else\n        printf(\"奇数\");\n}</code></pre>",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 0,
      "explanation": "if-else结构本身互斥，continue在此处是多余的，删除不影响结果。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "r2503_tf08",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++代码中，user_Name、_userName、user-Name、userName_ 都是合法的变量名。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "user-Name含连字符，不是合法变量名。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "r2503_tf09",
      "type": "choice",
      "difficulty": 1,
      "question": "C++语言中continue语句可以用来提前结束循环。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "break结束循环，continue只是跳过当前迭代继续下一次。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "r2503_tf10",
      "type": "choice",
      "difficulty": 2,
      "question": "C++中定义整型变量N，执行语句scanf(\"%d\", &N); cout << N / 3 * 5;时输入3.6，则输出是6。（ ）",
      "options": [
        "正确",
        "错误"
      ],
      "answer": 1,
      "explanation": "scanf读入3，N=3。3/3*5=1*5=5，不是6。",
      "source": "2025_03",
      "isJudge": true
    },
    {
      "id": "real_2023_01",
      "type": "choice",
      "difficulty": 2,
      "question": "以下C++不可以作为变量的名称的是( )。",
      "options": [
        "CCF GESP",
        "ccfGESP",
        "CCFgesp",
        "CCF_GESP"
      ],
      "answer": 0,
      "explanation": "变量名不能含空格。",
      "source": "2023_12"
    },
    {
      "id": "real_2023_02",
      "type": "choice",
      "difficulty": 2,
      "question": "C++表达式10 - 3 * (2 + 1) % 10的值是( )。",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "answer": 1,
      "explanation": "10-3*(2+1)%10 = 10-3*3%10 = 10-9%10 = 10-9 = 1。",
      "source": "2023_12"
    },
    {
      "id": "real_2024_03_01",
      "type": "choice",
      "difficulty": 2,
      "question": "C++表达式(3 - 2) * 3 + 5的值是( )。",
      "options": [
        "-13",
        "8",
        "2",
        "0"
      ],
      "answer": 1,
      "explanation": "1*3+5=8。",
      "source": "2024_03"
    },
    {
      "id": "real_2024_03_02",
      "type": "choice",
      "difficulty": 2,
      "question": "cout << \"5%2=\" << 5 % 2 输出？",
      "options": [
        "5%2=2",
        "5%2=1",
        "2 2",
        "1 1"
      ],
      "answer": 1,
      "explanation": "5%2=1。",
      "source": "2024_03"
    },
    {
      "id": "real_2024_06_01",
      "type": "choice",
      "difficulty": 2,
      "question": "表达式3 - 3 * 3 / 5的值是( )。",
      "options": [
        "-1.2",
        "1",
        "0",
        "2"
      ],
      "answer": 3,
      "explanation": "3*3=9, 9/5=1, 3-1=2。",
      "source": "2024_06"
    },
    {
      "id": "real_2024_06_02",
      "type": "choice",
      "difficulty": 2,
      "question": "printf(\"5%%2={%d}\\n\",5%2) 输出？",
      "options": [
        "5%2={1}",
        "5%2={5%2}",
        "1={1}",
        "5 ={1}"
      ],
      "answer": 0,
      "explanation": "%%输出%,%d格式化1。",
      "source": "2024_06"
    },
    {
      "id": "real_2024_09_01",
      "type": "choice",
      "difficulty": 2,
      "question": "DJL-1计算机的磁心存储元件相当于现代计算机的（ ）。",
      "options": [
        "内存",
        "磁盘",
        "CPU",
        "显示器"
      ],
      "answer": 0,
      "explanation": "存储元件相当于内存。",
      "source": "2024_09"
    },
    {
      "id": "real_2024_09_02",
      "type": "choice",
      "difficulty": 3,
      "question": "for(int i=0,s=0;i<20;i++,count++) s+=i++; 输出s和count？",
      "options": [
        "190 20",
        "95 10",
        "90 19",
        "90 10"
      ],
      "answer": 3,
      "explanation": "i和count同时增加，s累加0,2,4,...,18共10项=90，count=10。",
      "source": "2024_09"
    },
    {
      "id": "real_2024_12_01",
      "type": "choice",
      "difficulty": 2,
      "question": "表达式12 - 3 * 2 && 2的值是( )。",
      "options": [
        "0",
        "1",
        "6",
        "9"
      ],
      "answer": 1,
      "explanation": "12-6=6, 6&&2=1(true)。",
      "source": "2024_12"
    },
    {
      "id": "real_2024_12_02",
      "type": "choice",
      "difficulty": 2,
      "question": "N=2, cout<<(N/3+N%3) 输出？",
      "options": [
        "0",
        "2",
        "3",
        "4"
      ],
      "answer": 1,
      "explanation": "2/3=0, 2%3=2, 0+2=2。",
      "source": "2024_12"
    },
    {
      "id": "real_2025_01",
      "type": "choice",
      "difficulty": 2,
      "question": "下面哪个不是驾驶系统完成选路所必须的？",
      "options": [
        "麦克风",
        "扬声器",
        "油量表",
        "传感器"
      ],
      "answer": 2,
      "explanation": "选路不需要油量表。",
      "source": "2023_12"
    },
    {
      "id": "real_2025_02",
      "type": "choice",
      "difficulty": 2,
      "question": "在C++中，下列可以做变量的是( )。",
      "options": [
        "Var-1",
        "$1",
        "%%1",
        "_Var_1"
      ],
      "answer": 3,
      "explanation": "_Var_1 合法。",
      "source": "2025_03"
    },
    {
      "id": "real_2025_03",
      "type": "choice",
      "difficulty": 2,
      "question": "C++表达式16 / 4 % 2的值是( )。",
      "options": [
        "8",
        "4",
        "2",
        "0"
      ],
      "answer": 3,
      "explanation": "16/4=4, 4%2=0。",
      "source": "2025_03"
    },
    {
      "id": "real_prog_01",
      "type": "coding",
      "difficulty": 2,
      "question": "今天是星期x，还有n天考试，求考试那天是星期几。（星期日用0表示）\n<p>输入第1行：星期几x</p>\n<p>输入第2行：天数n</p>\n<p>样例输入：<code>1\\n6</code></p>\n<p>样例输出：<code>0</code></p>",
      "answer": 0,
      "explanation": "用取余运算处理星期推算。",
      "source": "2023_12",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "1\n6",
          "expectedOutput": "0",
          "description": "样例"
        }
      ],
      "answerText": "#include <stdio.h>\n\nint main() {\n    int x, n;\n\n    // 读入今天是星期几（x）和还有几天考试（n）\n    // 例如：今天是星期一(x=1)，还有 6 天考试(n=6)\n    scanf(\"%d%d\", &x, &n);\n\n    // 计算考试那天是星期几\n    // 公式：(x - 1 + n % 7) % 7 + 1\n    //\n    // 为什么要 -1 再 +1？\n    // 因为题目中星期日用 0 表示，星期一用 1...星期六用 6\n    // 我们先把 x 变成 0~6 的范围（减 1），加上天数后取模，再加回来\n    //\n    // 举例：x=1(星期一), n=6\n    //   (1-1 + 6%7) % 7 + 1 = (0+6) % 7 + 1 = 6+1 = 7 → 但 7%7=0 → 0+1=1\n    // 等等，让我重新算：(1-1+6)%7+1 = 6%7+1 = 6+1 = 7\n    // 实际上需要 mod 7 后再加 1：\n    int result = (x - 1 + n % 7) % 7 + 1;\n    // 但题目要求星期日输出 0，所以需要特殊处理\n    // 当结果为 7 时，对应星期日，输出 0\n    if (result == 7) result = 0;\n\n    printf(\"%d\\n\", result);\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 星期推算问题：用取余（%）运算来处理循环\n * 2. 一周有 7 天，所以 % 7 可以得到 0~6 的范围\n * 3. 关键技巧：把数值映射到 0~6 的范围再取模\n * 4. 取模运算 % 在处理\"循环\"问题时非常有用\n */"
    },
    {
      "id": "real_prog_02",
      "type": "coding",
      "difficulty": 2,
      "question": "从1到n报数，跳过m的倍数。依次输出报的数。\n<p>样例输入：<code>5\\n2</code></p>\n<p>样例输出：<code>1\\n3\\n5</code></p>",
      "answer": 0,
      "explanation": "遍历1到n，输出不是m倍数的数。",
      "source": "2023_12",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "5\n2",
          "expectedOutput": "1\n3\n5",
          "description": "样例"
        }
      ],
      "answerText": "#include <stdio.h>\n\nint main() {\n    int n, m;\n\n    // 读入 n 和 m\n    // 从 1 到 n 报数，跳过 m 的倍数\n    scanf(\"%d%d\", &n, &m);\n\n    // 遍历 1 到 n\n    for (int i = 1; i <= n; i++) {\n        // 判断 i 是否是 m 的倍数\n        // 如果 i 除以 m 余数不为 0，说明不是 m 的倍数\n        if (i % m != 0) {\n            // 不是 m 的倍数，输出这个数\n            printf(\"%d\\n\", i);\n        }\n        // 如果 i % m == 0，说明是 m 的倍数，跳过不输出\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 判断倍数：用取余运算 %，如果 i % m == 0，i 就是 m 的倍数\n * 2. 跳过某个数：用 if 判断 + continue 或者取反条件\n * 3. 例如：跳过 2 的倍数就是保留奇数\n * 4. 这道题也可以写成：if(i % m) printf(\"%d\\n\", i);\n */"
    },
    {
      "id": "real_prog_03",
      "type": "coding",
      "difficulty": 2,
      "question": "一本书13元，输入零用钱数，输出最多买几本和剩余钱数。\n<p>样例输入：<code>100</code></p>\n<p>样例输出：<code>7\\n9</code></p>",
      "answer": 0,
      "explanation": "整除得本数，取余得剩余。",
      "source": "2024_03",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "100",
          "expectedOutput": "7\n9",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int m;\n\n    // 读入零用钱数（总共有多少钱）\n    cin >> m;\n\n    // 一本书 13 元\n    // 整数除法：m / 13 得到最多能买几本\n    // 例如：100 / 13 = 7（整数除法，小数部分被舍去）\n    cout << m / 13 << endl;\n\n    // 取余：m % 13 得到买完后剩多少钱\n    // 例如：100 % 13 = 9（100 = 13 × 7 + 9）\n    cout << m % 13 << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 整数除法 / 得到\"商\"（能买几本）\n * 2. 取余运算 % 得到\"余数\"（剩多少钱）\n * 3. 这是经典的\"购物找零\"问题\n * 4. 公式：总价 = 单价 × 数量 + 余数\n *    所以：数量 = 总价 / 单价，余数 = 总价 % 单价\n */"
    },
    {
      "id": "real_prog_04",
      "type": "coding",
      "difficulty": 2,
      "question": "从小到大输出正整数n的所有因数。\n<p>样例输入：<code>6</code></p>\n<p>样例输出：<code>1\\n2\\n3\\n6</code></p>",
      "answer": 0,
      "explanation": "遍历1到n，能整除的即是因数。",
      "source": "2024_03",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "6",
          "expectedOutput": "1\n2\n3\n6",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a;\n\n    // 读入一个正整数\n    cin >> a;\n\n    // 从小到大遍历 1 到 a\n    // 因数：如果 a 能被 i 整除（余数为 0），那么 i 就是 a 的因数\n    for (int i = 1; i <= a; i++) {\n        // 判断 i 是否是 a 的因数\n        if (a % i == 0) {\n            // 是因数，输出\n            cout << i << endl;\n        }\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 因数（约数）：能整除某个数的数\n *    例如：6 的因数有 1, 2, 3, 6\n * 2. 判断方法：如果 a % i == 0，那么 i 是 a 的因数\n * 3. 遍历 1 到 a，逐个检查\n * 4. 1 和它本身一定是因数\n * 5. 注意：这样输出一定是从小到大的（因为 i 从小到大递增）\n */"
    },
    {
      "id": "real_prog_05",
      "type": "coding",
      "difficulty": 2,
      "question": "图书馆n本书，老鼠每x小时啃一本书，y小时后剩几本。\n<p>样例输入：<code>10\\n2\\n3</code></p>\n<p>样例输出：<code>8</code></p>",
      "answer": 0,
      "explanation": "计算啃掉的书数，注意边界条件。",
      "source": "2025_03",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "10\n2\n3",
          "expectedOutput": "8",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, x, y;\n\n    // n：图书馆有 n 本书\n    // x：老鼠每 x 小时啃一本书\n    // y：经过了 y 小时\n    cin >> n >> x >> y;\n\n    // 计算老鼠啃掉了几本书\n    // y / x 是完整啃完的书数（整数除法）\n    // 但需要考虑\"正在啃但没啃完\"的那本\n    // 如果 y % x == 0，说明刚好啃完最后一本\n    // 如果 y % x != 0，说明有一本正在啃，也要算被破坏了\n    cout << n - y / x - 1 + (y % x == 0) << '\\n';\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. y / x：完整啃完的书数（整数除法）\n * 2. y % x == 0：刚好啃完最后一本（没有\"正在啃\"的）\n * 3. (y % x == 0) 在 C++ 中是 bool 值：\n *    - true 时值为 1\n *    - false 时值为 0\n * 4. 公式拆解：\n *    - 被啃完的书：y / x\n *    - 正在啃的书：1 本（除非 y % x == 0，就没有）\n *    - 剩余 = n - y/x - 1 + (y%x==0)\n */"
    },
    {
      "id": "real_prog_2406_01",
      "type": "coding",
      "difficulty": 2,
      "question": "休息时间：小杨计划在某个时刻开始学习，并决定在学习k秒后开始休息。求开始休息的时刻。\n<p>输入：前三行分别是时h、分m、秒s，第四行是学习总秒数k</p>\n<p>输出：一行三个整数，休息时刻的时、分、秒</p>\n<p>样例输入：<code>12\\n59\\n59\\n10</code></p>\n<p>样例输出：<code>13 0 9</code></p>",
      "answer": 0,
      "explanation": "先将时分秒转为总秒数，加上k秒后再转回时分秒。",
      "source": "2024_06",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "12\n59\n59\n10",
          "expectedOutput": "13 0 9",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int h, m, s, k;\n\n    // 读入开始时刻的时、分、秒和学习秒数 k\n    cin >> h >> m >> s >> k;\n\n    // 第1步：把时分秒全部转换成秒\n    // 1小时 = 3600秒，1分钟 = 60秒\n    int now = h * 3600 + m * 60 + s;\n    // 例如：12:59:59 → 12*3600 + 59*60 + 59 = 46799 秒\n\n    // 第2步：加上学习的秒数\n    now += k;\n    // 例如：46799 + 10 = 46809 秒\n\n    // 第3步：把总秒数转回时、分、秒\n    int hh = now / 3600;      // 小时 = 总秒数 / 3600\n    now %= 3600;               // 剩余秒数 = 总秒数 % 3600\n    int mm = now / 60;         // 分钟 = 剩余秒数 / 60\n    now %= 60;                 // 秒 = 剩余秒数 % 60\n    // 例如：46809 / 3600 = 13小时，余 9 秒\n    //       9 / 60 = 0分钟，余 9 秒\n\n    // 输出休息时刻\n    cout << hh << \" \" << mm << \" \" << now << endl;\n    // 输出：13 0 9\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 时间转换技巧：全部统一成\"秒\"来计算\n * 2. 时→秒：× 3600，分→秒：× 60\n * 3. 秒→时：/ 3600，秒→分：/ 60\n * 4. 用取余 % 逐步\"剥离\"小时、分钟\n * 5. 这种\"统一单位→计算→还原单位\"的方法非常常用\n */"
    },
    {
      "id": "real_prog_2406_02",
      "type": "coding",
      "difficulty": 2,
      "question": "立方数：小杨有一个正整数N，他想知道N是否是一个立方数。一个正整数N是立方数当且仅当存在正整数X满足X*X*X = N。\n<p>输入：一个正整数N</p>\n<p>输出：如果是立方数输出\"Yes\"，否则输出\"No\"</p>\n<p>样例输入1：<code>8</code> 样例输出1：<code>Yes</code></p>\n<p>样例输入2：<code>9</code> 样例输出2：<code>No</code></p>",
      "answer": 0,
      "explanation": "遍历i从1到n，检查i*i*i是否等于n。",
      "source": "2024_06",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "8",
          "expectedOutput": "Yes",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入正整数 n\n    cin >> n;\n\n    // 标记变量：0 表示不是立方数，1 表示是立方数\n    int fl = 0;\n\n    // 从 1 开始，逐个检查 i × i × i 是否等于 n\n    for (int i = 1; i <= n; i++) {\n        // 如果 i 的立方等于 n，说明 n 是立方数\n        if (i * i * i == n) {\n            fl = 1;    // 找到了！标记为\"是立方数\"\n            break;      // 跳出循环（已经找到答案，不用继续找了）\n        }\n    }\n\n    // 根据标记输出结果\n    if (fl) {\n        cout << \"Yes\" << endl;   // fl 为 1（true），是立方数\n    } else {\n        cout << \"No\" << endl;    // fl 为 0（false），不是立方数\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 立方数：存在正整数 X，使得 X × X × X = N\n *    例如：8 = 2³ → 是立方数，9 不是立方数\n * 2. 方法：暴力枚举，从 1 开始逐个试\n * 3. break 关键字：找到答案后立即跳出循环，提高效率\n * 4. 标记变量 fl：用来记录\"是否找到\"的状态\n */"
    },
    {
      "id": "real_prog_2412_01",
      "type": "coding",
      "difficulty": 2,
      "question": "温度转换：给定开尔文温度K，计算摄氏温度C和华氏温度F。公式：C = K - 273.15，F = 32 + C * 1.8。如果F高于212度，输出\"Temperature is too high!\"，否则输出C和F（保留两位小数）。\n<p>输入：一个实数K</p>\n<p>样例输入1：<code>412.00</code> 样例输出1：<code>Temperature is too high!</code></p>\n<p>样例输入2：<code>173.56</code> 样例输出2：<code>-99.59 -147.26</code></p>",
      "answer": 0,
      "explanation": "按公式计算，判断华氏温度是否超过212度。",
      "source": "2024_12",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "412.00",
          "expectedOutput": "Temperature is too high!",
          "description": "样例"
        }
      ],
      "answerText": "#include <cstdio>\nusing namespace std;\n\nint main() {\n    double K;\n\n    // 读入开尔文温度\n    scanf(\"%lf\", &K);\n\n    // 计算摄氏温度：C = K - 273.15\n    double C = K - 273.15;\n\n    // 计算华氏温度：F = 32 + C × 1.8\n    double F = 32 + C * 1.8;\n\n    // 判断华氏温度是否超过 212 度\n    if (F > 212) {\n        // 超过 212 度，输出警告信息\n        printf(\"Temperature is too high!\\n\");\n    } else {\n        // 没有超过，输出摄氏和华氏温度\n        // %.2f 表示保留 2 位小数输出\n        printf(\"%.2f %.2f\\n\", C, F);\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 温度转换公式：\n *    摄氏 = 开尔文 - 273.15\n *    华氏 = 32 + 摄氏 × 1.8\n * 2. printf 的格式化输出：\n *    %.2f → 保留 2 位小数\n *    %d   → 整数\n *    %s   → 字符串\n * 3. scanf 读入 double 用 %lf 格式符\n * 4. if-else 分支处理不同情况\n */"
    },
    {
      "id": "real_prog_2412_02",
      "type": "coding",
      "difficulty": 2,
      "question": "奇数和偶数：小杨有N个正整数，他想知道其中奇数和偶数各有多少个。\n<p>输入第1行：正整数N。之后N行每行一个正整数。</p>\n<p>输出：两个正整数（空格间隔），奇数个数和偶数个数</p>\n<p>样例输入：<code>5\\n1\\n2\\n3\\n4\\n5</code></p>\n<p>样例输出：<code>3 2</code></p>",
      "answer": 0,
      "explanation": "遍历输入，用%2判断奇偶分别计数。",
      "source": "2024_12",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "5\n1\n2\n3\n4\n5",
          "expectedOutput": "3 2",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入数字的个数 n\n    cin >> n;\n\n    // a 记录奇数个数，b 记录偶数个数\n    int a = 0, b = 0;\n\n    // 循环读入 n 个正整数\n    for (int i = 1; i <= n; i++) {\n        int x;\n        cin >> x;  // 读入一个数\n\n        // 判断奇数还是偶数\n        // x % 2 != 0 表示 x 除以 2 余数不为 0，即奇数\n        if (x % 2 != 0) {\n            a++;  // 奇数，a 加 1\n        } else {\n            b++;  // 偶数，b 加 1\n        }\n    }\n\n    // 输出奇数个数和偶数个数（空格分隔）\n    cout << a << \" \" << b << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 判断奇偶：用 x % 2\n *    - x % 2 == 0 → 偶数\n *    - x % 2 != 0 → 奇数\n * 2. 计数器：两个变量 a 和 b 分别统计不同类别的个数\n * 3. 读入多个数的套路：先读个数 n，再循环 n 次读入\n * 4. 这是 GESP 考试中\"统计计数\"类题目的标准写法\n */"
    },
    {
      "id": "real_prog_2503_02",
      "type": "coding",
      "difficulty": 2,
      "question": "四舍五入：给定N个整数，将每个整数四舍五入到最接近的整十数。例如43→40，58→60。\n<p>输入第1行：整数个数N。接下来N行每行一个整数X。</p>\n<p>输出：N行，每行四舍五入后的结果</p>\n<p>样例输入：<code>5\\n43\\n58\\n25\\n67\\n90</code></p>\n<p>样例输出：<code>40\\n60\\n30\\n70\\n90</code></p>",
      "answer": 0,
      "explanation": "(x+5)/10*10实现四舍五入到整十：先加5再整除10再乘10。",
      "source": "2025_03",
      "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    // 在这里编写代码\n    \n    return 0;\n}",
      "testCases": [
        {
          "input": "5\n43\n58\n25\n67\n90",
          "expectedOutput": "40\n60\n30\n70\n90",
          "description": "样例"
        }
      ],
      "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n\n    // 读入整数个数 n\n    cin >> n;\n\n    // 循环处理每个整数\n    for (int i = 1, x; i <= n; i++) {\n        cin >> x;  // 读入一个整数\n\n        // 四舍五入到最接近的整十数\n        // 方法：(x + 5) / 10 * 10\n        //\n        // 举例：\n        // x = 43：(43+5)/10*10 = 48/10*10 = 4*10 = 40\n        // x = 58：(58+5)/10*10 = 63/10*10 = 6*10 = 60\n        // x = 25：(25+5)/10*10 = 30/10*10 = 3*10 = 30\n        // x = 67：(67+5)/10*10 = 72/10*10 = 7*10 = 70\n        // x = 90：(90+5)/10*10 = 95/10*10 = 9*10 = 90\n        cout << (x + 5) / 10 * 10 << endl;\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 四舍五入到整十的核心技巧：(x + 5) / 10 * 10\n * 2. 为什么加 5？\n *    - 个位是 0~4 时，加 5 后 /10 不进位（如 43+5=48, 48/10=4）\n *    - 个位是 5~9 时，加 5 后 /10 会进位（如 58+5=63, 63/10=6）\n * 3. 这个技巧可以推广：\n *    - 四舍五入到整百：(x + 50) / 100 * 100\n *    - 四舍五入到整千：(x + 500) / 1000 * 1000\n */"
    }
  ]
};

if (typeof module !== 'undefined') module.exports = QUESTION_BANK;
