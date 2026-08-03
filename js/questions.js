/**
 * GESP 一级 C++ 题库（从生产数据库导出，含测试用例与详细解析）
 * 总计 513 题
 */
const QUESTION_BANK = {
  "meta": {
    "name": "GESP 一级 C++",
    "version": "3.0",
    "totalQuestions": 513,
    "knowledgePoints": {
      "kp1_08": {
        "title": "基本数据类型",
        "questions": 50
      },
      "kp1_07": {
        "title": "基本运算",
        "questions": 50
      },
      "kp1_03": {
        "title": "程序的基本语句",
        "questions": 50
      },
      "kp1_04": {
        "title": "分支结构",
        "questions": 50
      },
      "kp1_05": {
        "title": "循环结构",
        "questions": 50
      },
      "kp3_04": {
        "title": "一维数组",
        "questions": 50
      },
      "kp3_05": {
        "title": "字符串及函数",
        "questions": 50
      },
      "kp4_01": {
        "title": "函数",
        "questions": 50
      }
    },
    "mockExamQuestions": 30,
    "realExamQuestions": 83
  },
  "knowledgePoints": {
    "kp1_08": {
      "title": "基本数据类型",
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
          "explanation": "【解题思路】本题考察 C++ 基本数据类型关键字的功能区分。需要牢记四类基本类型的用途：int 表示整型、float 表示浮点型、char 表示字符型、bool 表示布尔型，然后按题目要求对号入座即可。\n【逐步推理】题目问的是声明整型变量的关键字，整型即整数类型，C++ 中使用关键字 int 来声明，例如 int a = 5。因此正确答案是 int。\n【其他选项为何错】float 用于声明单精度浮点数，即带小数点的数值；char 用于声明单个字符，存储字符及其 ASCII 编码；bool 用于声明布尔变量，只取 true 或 false 两个逻辑值。这三个关键字各对应一类数据类型，均不是整型，故都不正确。"
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
          "explanation": "【解题思路】变量名的合法性由 C++ 标识符规则决定：只能由字母、数字和下划线组成，不能以数字开头，不能与关键字重名，不能包含空格、连字符等特殊符号。逐项检查即可。\n【逐步推理】2name 以数字 2 开头，违反不能以数字开头的规则；class 是 C++ 关键字，被系统保留，不能用作变量名；my-var 中间含连字符减号，不属于标识符允许的字符集；my_var 由字母和下划线组成，完全符合标识符规则，是合法变量名。\n【其他选项为何错】2name 数字开头不合法；class 是保留关键字；my-var 的连字符不是合法标识符字符。三个选项中只有 my_var 满足全部命名规则，故正确。"
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
          "explanation": "【解题思路】sizeof 是求类型占用内存字节数的运算符。需要记住常见基本类型的大小：char 占 1 字节、short 占 2 字节、int 占 4 字节、float 占 4 字节、double 占 8 字节，然后对应查找即可。\n【逐步推理】double 是双精度浮点数，用于存储精度更高、数值范围更大的小数。在主流 32 位和 64 位平台上，double 均占用 8 个字节，因此 sizeof(double) 的值是 8。\n【其他选项为何错】1 是 char 的字节数；2 是 short 的字节数；4 是 int 或 float 的字节数。这些都是其他类型的大小，而不是 double 所占的 8 字节。"
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
          "explanation": "【解题思路】本题关键点在于两个 int 相除的结果类型。C++ 中两个整型相除结果仍是整型，小数部分被直接截断丢弃，而不是四舍五入。只有当除法中有浮点数参与时，结果才是浮点数。\n【逐步推理】a=5，b=2。先计算 a/b：5 除以 2 商 2 余 1，整数除法只取商 2，余数被舍弃。随后 double c = 2，整数 2 自动转换为 double 类型，值为 2.0。cout 输出 double 值 2.0 时，默认格式不显示小数末尾的 0，所以屏幕上显示 2。\n【其他选项为何错】2.5 是实数除法的结果，但本题除法没有浮点数参与，结果是整数 2 而非 2.5；2.0 数值上正确但 cout 默认输出不含多余小数零，显示为 2；编译错误不会发生，整型除法完全合法。因此正确答案是 2。"
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
          "explanation": "【解题思路】bool 是 C++ 的布尔类型，只有 true 和 false 两个逻辑值。关键要理解布尔值与其他类型的转换规则：任何非零值转换为 true，零转换为 false。本题要选出说法最准确的选项。\n【逐步推理】bool 变量真正保存的是 true 或 false 两个逻辑值，而不是原始数字。选项 B 表述为 bool 变量存储 true 或 false，且 true 等价于非零值，既说清了存储内容，又说清了转换规则，表述准确，是正确答案。\n【其他选项为何错】A 说 bool 只能存储 0 或 1 不准确，0 和 1 只是 bool 的内部表示，bool 在语义上存储的是 true 和 false；C 说 bool 占 4 字节错误，bool 通常只占 1 字节；D 说 bool 不能用于条件判断错误，条件判断正是 bool 最典型的用途。"
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
          "explanation": "【解题思路】C++ 提供多种变量初始化方式：拷贝初始化用等号，直接初始化用小括号，列表初始化用花括号（C++11 起）。本题要求找出语法非法的写法，逐一辨认即可。\n【逐步推理】int x = 10 是拷贝初始化，把 10 复制给 x，合法；int x(10) 是直接初始化，合法；int x{10} 是列表初始化，C++11 引入，合法；int x = = 10 出现了两个等号，既不符合任何初始化语法，也不能看作比较表达式，属于拼写类语法错误，编译报错。\n【其他选项为何错】A、B、C 分别是三种标准初始化写法，都是合法代码。只有 D 的 = = 双等号是错误写法，注意在 C++ 中 = = 是相等比较运算符，不能出现在变量声明语句中。"
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
          "explanation": "【解题思路】C++ 变量名只能由字母、数字和下划线组成，不能以数字开头，不能是关键字，不能包含空格。本题要在四个候选名称中找出非法的一项。\n【逐步推理】CCF GESP 中间含有一个空格，而空格不是合法的标识符字符，编译器会把名称截断成两个词，无法作为变量名，因此它是本题答案。其余三个名称分别由字母、字母下划线组合构成，均合法。\n【其他选项为何错】ccfGESP 全由字母组成，合法；CCFgesp 同样由字母组成，说明 C++ 允许大小写字母混用，只要字符在允许集内即可；CCF_GESP 中的下划线是合法标识符字符，合法。只有含空格的 CCF GESP 不能做变量名。",
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
          "explanation": "【解题思路】char 类型变量接收整数时通常使用类型转换，把整数转换成 char 再赋值。C++ 的类型转换写法有两类：C 风格 (类型)表达式 和函数风格 类型(表达式)。要找出不符合这两种语法的写法。\n【逐步推理】(char)66 是 C 风格强制类型转换，把整数 66 转换为 char，合法；(char)(66) 是带额外括号的 C 风格转换，同样合法；char(66) 是函数风格的转换，合法；char 66 中间缺少括号，既不是转换语法也不是赋值语法，编译器无法解析，是非法语句。\n【其他选项为何错】A、B 都是 C 风格的强制类型转换写法，只是括号嵌套不同，作用相同；C 是函数式转换，与 C 风格等价。只有 D 缺少括号，无法构成合法的类型转换表达式。",
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
          "explanation": "【解题思路】本题考察两个知识点：一是小数赋给整型时小数部分被截断，二是字符与 ASCII 码的对应关系。先处理赋值，再查 ASCII 码表。\n【逐步推理】int a = 3.7，把小数 3.7 赋给整型变量，小数部分 .7 被直接截断丢弃，a 等于 3，注意是截断不是四舍五入，所以不会是 4。char b = 66，66 是 ASCII 码，对应大写字母 B，所以 b 的值是字符 B。\n【其他选项为何错】a=3.7 错误，a 是 int 类型无法保存小数，已被截断为 3；a=4 错误，类型转换是截断而非四舍五入，且 b 是 char 应显示字符 B 而非数字 66；编译错误不会发生，double 到 int、int 到 char 的隐式转换都是 C++ 允许的。"
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
          "explanation": "【解题思路】考察把小数赋给整型变量时的处理方式，以及类型转换的写法。整数变量接收小数时，编译器做隐式转换把小数部分截断，也可以用类型转换显式表达意图。要找的是语法不正确的语句。\n【逐步推理】x=(3.16) 与 x=3.16 本质相同，都是把 double 值 3.16 隐式转换为 int，小数被截断为 3，合法；x=int(3.16) 是函数式显式转换，结果同为 3，合法；x=3.16 int 把类型名放在数值之后，不符合任何转换或赋值语法，编译报错，所以它是题目所说的不正确语句。\n【其他选项为何错】A、B 是合法的隐式赋值，虽然可能有精度丢失警告，但语法正确；C 是合法的显式转换。只有 D 把类型名 int 放到数值 3.16 后面，形成 3.16 int 这种无意义表达式，语法非法。",
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
          "explanation": "【解题思路】变量名合法性规则：只能由字母、数字和下划线组成，不能以数字开头，不能包含空格、连字符、百分号、美元符号等特殊字符。逐项判断。\n【逐步推理】_Var_1 以下划线开头，后面是字母、数字和下划线的组合，全部符合标识符规则，是四个选项中唯一合法的变量名。\n【其他选项为何错】Var-1 中间的连字符不是合法标识符字符；$1 以美元符号开头，美元符号不属于标识符允许字符集；%%1 含有两个百分号，同样非法。C++ 标识符只能由字母、数字和下划线构成。",
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
          "explanation": "【解题思路】关键字是 C++ 语言预先保留、具有特殊语法含义的单词，不能用作变量名。本题要区分关键字与标准库函数名、标准对象名、操纵符这些普通标识符。\n【逐步推理】do 是 do-while 循环语句的组成部分，属于 C++ 关键字，是本题答案。abs 是数学库中的求绝对值函数名；cin 是标准输入流对象；endl 是输出流操纵符，它们都是标准库定义的名字，不是语言关键字。\n【其他选项为何错】abs 是 <cstdlib> 或 <cmath> 中声明的函数；cin 是 iostream 中定义的输入流对象；endl 是配合 << 使用的操纵符。三者都是库提供的标识符，即使不能随意改名使用，但本质上不是关键字。do 才是系统保留的关键字。",
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
          "explanation": "【解题思路】本题判断的关键在于区分值相等与类型相同。3.0 和 3 在数值上相等，但它们是不同类型的字面量，存储空间由类型决定。\n【逐步推理】3.0 带小数点，是 double 类型字面量，占 8 字节；3 没有小数点，是 int 类型字面量，占 4 字节。两者做比较运算 3.0 == 3 结果为 true，说明数值相等；但内存占用要看类型，double 的 8 字节和 int 的 4 字节显然不同。\n【判断依据】值相等只能说明数学数值一致，不能推导出存储空间相同。3.0 与 3 类型不同，占用的字节数不同，因此题目中它们占用的存储空间也相同的说法错误，本题选错误。",
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
          "explanation": "【解题思路】基本数据类型按用途分类：int 存整数，float 和 double 存带小数的数值，char 存单个字符，bool 存真假。题目问存储带小数数值的类型。\n【逐步推理】float 是单精度浮点类型，专门用于表示带小数点的数值，如 3.14、-0.5 等，是四个选项中唯一能直接存储小数的类型，为正确答案。\n【其他选项为何错】int 只能存储整数，给 int 赋小数会被截断；char 存储单个字符，本质是一个字节的整数；bool 存储 true 或 false 两个逻辑值。这三种类型都不能直接保存带小数的数值。"
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
          "explanation": "【解题思路】C++ 变量名规则：由字母、数字和下划线组成，不能以数字开头，不能是关键字，不能含空格。逐项对照规则判断。\n【逐步推理】_total 以下划线开头，后面是字母，符合标识符全部规则，是合法变量名，为正确答案。\n【其他选项为何错】for 是循环语句关键字，保留字不能作变量名；1st 以数字 1 开头，违反首字符不能是数字的规则；my var 中间有空格，空格不是合法标识符字符。只有 _total 满足所有条件。"
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
          "explanation": "【解题思路】关键字是语言保留字，具有特殊语法含义，不能用作用户标识符。main 是程序入口函数名，printf 是库函数名，cout 是流对象名，它们都不是保留字。\n【逐步推理】const 用于声明常量，修饰不可修改的对象，是 C++ 的关键字，为本题答案。例如 const int x = 10。\n【其他选项为何错】main 是编译器约定的主函数名，属普通函数标识符；printf 是 C 标准库声明的输出函数；cout 是 iostream 库定义的输出流对象。三者都是库或语言框架提供的名字，不是语言关键字，因此 const 才是正确的关键字选项。"
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
          "explanation": "【解题思路】const 修饰的变量是常量，必须在声明的同时给出初始值，之后不能再修改。判断写法是否正确的核心是是否写明类型、是否完成初始化。\n【逐步推理】const int x = 10 声明常量 x 并初始化为 10，类型和初值都齐全，是唯一正确的写法。const int x 声明了 const 却没给初值，编译错误；int const x 与 const int x 等价，同样缺少初值，编译错误；const x = 10 省略了类型名，无法构成合法声明。\n【其他选项为何错】A 和 C 都缺少初始化，const 变量必须初始化；D 没有类型名，const 不能单独作为类型使用。只有 B 同时满足写明类型、声明、初始化三个要求。"
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
          "explanation": "【解题思路】sizeof 求类型占用字节数。C++ 标准明确规定 sizeof(char) 恒等于 1，char 是内存编址的基本单位，这一点在所有平台通用。\n【逐步推理】不论在什么平台、什么编译器上，char 都恰好占用 1 个字节，这是 C++ 标准保证的，因此 sizeof(char) 的值为 1。\n【其他选项为何错】2 是 short 类型的常见大小；4 是 int 或 float 的常见大小；8 是 double 的常见大小。这些都不是 char 的大小，char 恒为 1 字节。"
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
          "explanation": "【解题思路】本题要找说法错误的一项。bool 的语义是 true 和 false 两个逻辑值，内部通常表示为 1 和 0，占用 1 字节。关键要理解 bool 本身不能保存任意整数。\n【逐步推理】把整数赋给 bool 变量时，例如 bool b = 5，非零值转换为 true，零转换为 false，原始的整数 5 不会保留下来，b 中只存逻辑值 true。因此 bool 类型可以存储任意整数值的说法是错的。\n【其他选项为何错】A 说 bool 只有 true 和 false 两个值，正确；B 说 true 在内部存为 1，正确；C 说 bool 通常占 1 字节，正确。只有 D 把转换规则误解为可以保存任意整数，是错误说法。"
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
          "explanation": "【解题思路】double 转换为 int 时采用截断方式，丢弃小数部分，而不是四舍五入。这是 C++ 类型转换的基本规则。\n【逐步推理】a = 5.9，随后 int b = a 把 double 值 5.9 赋给整型变量 b，小数部分 .9 被直接丢弃，b 的值为 5。\n【其他选项为何错】5.9 不可能，b 是 int 类型存不下小数；6 是四舍五入的结果，但 C++ 的浮点转整型是截断而非四舍五入；编译错误不会发生，double 到 int 是合法的隐式转换，虽然编译器可能给出精度丢失的警告。因此 b 等于 5。"
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
          "explanation": "【解题思路】作用域规则：在花括号块内声明的变量是局部变量，作用域从声明处开始到所在块结束。main 函数本身也是一个代码块。\n【逐步推理】在 main 函数内声明的变量是 main 的局部变量，其作用域仅限于 main 函数内部，离开 main 后这些变量不可访问。因此，在 main 函数内声明的变量只能在 main 内使用，这个说法正确。\n【其他选项为何错】if 语句块内声明的变量在块外不可用，A 错误；for 循环内声明的变量在循环外不可用，B 错误；全局变量定义在所有函数之外，可以在任何函数内使用，D 错误。故 C 正确。"
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
          "explanation": "【解题思路】bool 类型与其他类型的转换规则：零值转换为 false，任何非零值转换为 true。这是整数赋给 bool 时的标准行为。\n【逐步推理】flag 是 bool 类型，初始化表达式是整数 100。100 是非零值，按照转换规则转换为逻辑值 true，所以 flag 的值为 true。\n【其他选项为何错】100 不可能，bool 变量不会保存原始整数值；false 只有在初始化值为 0 时才会得到；编译错误不会发生，整数到 bool 是合法隐式转换。非零即 true，故答案为 true。"
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
          "explanation": "【解题思路】C++ 对普通局部变量不做自动初始化，声明后其值是该内存位置原有的残留数据，是不确定的，直接使用属于未定义行为。\n【逐步推理】局部 int 变量声明后，如果尚未赋值就读取，拿到的值取决于内存中残留的随机数据，无法预测。因此局部变量声明后值是不确定的，这个说法正确。\n【其他选项为何错】自动为 0 是全局变量或静态变量的行为，普通局部变量不会自动清零；不需要声明就能使用违反 C++ 先声明后使用的原则；类型可以随时改变错误，C++ 变量的类型在声明时确定，不可更改。只有 B 符合 C++ 规则。"
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
          "explanation": "【解题思路】float 是单精度浮点类型。常见基础类型的字节数为：char 占 1、short 占 2、int 占 4、float 占 4、double 占 8，查找对应即可。\n【逐步推理】float 在绝大多数平台占用 4 个字节，因此 sizeof(float) 的值为 4。\n【其他选项为何错】1 是 char 的大小；2 是 short 的大小；8 是 double 的大小。float 介于 int 与 double 之间，占 4 字节，故正确选项为 4。"
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
          "explanation": "【解题思路】char 变量既能存放字符，也能存放整数，存放整数时按 ASCII 码解释。cout 输出 char 变量时按字符显示。\n【逐步推理】c = 65，整数 65 是 ASCII 码表中大写字母 A 的编码。cout << c 输出该编码对应的字符，即大写字母 A。\n【其他选项为何错】65 是整数形式，只有用 (int)c 强制转换或 printf(\"%d\") 才会输出数字 65；a 是小写字母，其 ASCII 码是 97 而不是 65；编译错误不会发生，int 到 char 是合法隐式转换。因此输出大写 A。"
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
          "explanation": "【解题思路】const 变量是只读常量，声明初始化后不能再修改。对 const 变量重新赋值会导致编译错误。\n【逐步推理】const int x = 5; 之后执行 x = 10;，试图修改只读变量 x，违反 const 的语义，编译器直接报错。这是四种情况中唯一编译错误的情形。\n【其他选项为何错】普通变量 int x = 5 后再赋 x = 10，允许修改，A 合法；int 赋给 double 是合法隐式转换，C 合法；char c = 'A' 是合法声明，D 合法。只有修改 const 变量的 B 会编译报错。"
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
          "explanation": "【解题思路】两个 int 相除结果仍是 int，小数部分截断。本题先做整数除法得到整数，再把这个整数赋给 double 变量。\n【逐步推理】a=3，b=2，a/b 即 3/2，整数除法商 1，余数 1 被丢弃。double result = 1，整数 1 转换为 double 值 1.0。所以 result 的值是 1.0。\n【其他选项为何错】1.5 是实数除法的结果，本题没有浮点数参与运算；1 只写了整数部分，但 double 变量保存的完整值是 1.0；2 与 3/2 的结果无关，是混淆了变量取值。正确答案为 1.0。"
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
          "explanation": "【解题思路】本题要找错误说法。const 的核心规则是声明时必须初始化，初始化后不可修改。\n【逐步推理】const 变量在声明后再赋值会编译报错，因此，const 变量可以在声明后再赋值的说法是错的，为本题答案。\n【其他选项为何错】必须在声明时初始化正确，这是 const 的基本要求；const 变量的值不能被修改正确，这正是 const 的意义所在；const 变量可以参与运算正确，常量可以作为运算数出现在表达式中。只有 D 的说法错误。"
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
          "explanation": "【解题思路】auto 是 C++11 引入的类型推断关键字，让编译器根据初始化表达式的类型自动推断变量类型。因为类型来自初始化表达式，所以声明必须有初始化值。\n【逐步推理】auto x = 3.14 推断 x 为 double 类型；auto n = 10 推断 n 为 int 类型。选项中的三个说法：能自动推断类型、必须初始化、C++11 引入，全部正确。\n【其他选项为何错】本题三个分项陈述都符合 auto 的特性，没有错误分项，因此应选择以上都正确。"
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
          "explanation": "【解题思路】本题考察变量遮蔽（shadowing）规则：内层作用域可以声明与外层同名变量，内层声明会遮蔽外层同名变量，离开内层块后外层变量恢复可见。\n【逐步推理】外层 int x = 5。进入内层花括号块后，声明 int x = 10，此时 cout << x 访问的是内层 x，输出 10 和一个空格。离开内层块后，内层 x 销毁，cout << x 访问外层 x，输出 5。整体输出为 10 5。\n【其他选项为何错】5 5 忽略了内层声明的存在；10 10 忽略了块结束后外层变量恢复可见；编译错误不会发生，内层同名声明是合法的遮蔽。故正确答案是 10 5。"
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
          "explanation": "【解题思路】混合类型运算的自动提升规则：int 与 double 运算时，int 先提升为 double，结果类型是 double。sizeof 作用于表达式时返回表达式结果类型所占的字节数。\n【逐步推理】3 是 int，5.0 是 double。表达式 3 + 5.0 中，int 值 3 自动提升为 double，运算结果为 double 类型，值为 8.0。sizeof(3 + 5.0) 求的是 double 类型的大小，等于 8。\n【其他选项为何错】4 是 int 的大小，但表达式结果不是 int；12 无意义，像是 4 与 8 的简单相加；取决于编译器错误，double 在主流平台统一为 8 字节。故答案为 8。"
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
          "explanation": "【解题思路】auto 推断变量类型依据初始化表达式的类型。int 与 double 做混合除法时，int 自动提升为 double，结果类型为 double。\n【逐步推理】a=5 是 int，b=2.0 是 double。计算 a/b 时，int 值 a 自动提升为 double，5.0 除以 2.0 等于 2.5，结果为 double 类型。auto result 推断为 double，值为 2.5。\n【其他选项为何错】int, 2 和 int, 3 都忽略了类型提升，把结果当成整型，错误；double, 2.0 类型对但数值错，正确结果是 2.5。因此答案是 double, 2.5。"
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
          "explanation": "【解题思路】变量的使用必须建立在先声明的基础上。链式赋值 int x = y = z = 1 中，y 和 z 出现在 x 的初始化表达式右侧，而它们此刻尚未声明。\n【逐步推理】语句 int x = y = z = 1; 中，编译器在解析 x 的初始化值时遇到标识符 y 和 z，但在本条语句之前没有任何声明提到 y 和 z，属于使用未声明变量，编译报错。\n【其他选项为何错】A 用一条语句声明 x、y、z 三个变量并初始化，合法；B 声明三个未初始化变量，语法合法，只是使用前必须赋值；D 用两条独立语句分别声明，合法。只有 C 因引用未声明的 y、z 而编译失败。"
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
          "explanation": "【解题思路】字符在内存中以 ASCII 码整数形式存储。(int) 强制转换让 cout 把 char 按整数输出，得到对应字符的 ASCII 码。\n【逐步推理】大写字母 A 的 ASCII 码是 65，小写字母 a 的 ASCII 码是 97。(int)c1 输出 65，(int)c2 输出 97，两者之间输出一个空格，因此结果是 65 97。\n【其他选项为何错】A a 是直接输出字符而非转为整数，只有去掉 (int) 才这样显示；97 65 把大小写字母的 ASCII 码记反了；编译错误不会发生，(int) 强制转换合法。故正确答案是 65 97。"
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
          "explanation": "【解题思路】C++ 的初始化规则分两类：全局变量和静态变量自动零初始化；普通局部变量不自动初始化，值不确定。分清这两类即可。\n【逐步推理】全局 int 变量定义在所有函数之外，程序启动时由运行环境自动置为 0，所以全局 int 变量默认初始化为 0 的说法正确，为本题答案。\n【其他选项为何错】局部 int 变量不会自动初始化，值是不确定的残留数据；所有 int 变量都默认初始化为 0 过于绝对，局部变量不符合；所有变量都不会自动初始化忽略了全局变量和静态变量的零初始化行为。故只有 A 正确。"
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
          "explanation": "【解题思路】sizeof 常见类型的字节数：char 恒为 1，int 通常为 4，double 通常为 8，bool 通常为 1。本题要找错误说法。\n【逐步推理】bool 只表示 true 和 false 两个逻辑值，通常只占 1 字节，而不是 4 字节，因此 sizeof(bool) 通常为 4 的说法是错误的，为本题答案。\n【其他选项为何错】sizeof(int) 通常为 4 正确；sizeof(char) 一定为 1 是 C++ 标准明确保证的；sizeof(double) 通常为 8 正确。四个选项中只有 bool 的说法错误。"
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
          "explanation": "【解题思路】按语句出现的先后顺序逐步跟踪变量 a 的值，每一步都用上一步得到的当前值代入下一次运算。\n【逐步推理】初始 a=5。第一条 a = a + a 得 5 + 5 = 10；第二条 a = a * 2 得 10 * 2 = 20；第三条 a = a - 10 得 20 - 10 = 10。最终 a 的值为 10。\n【其他选项为何错】20 是第二步的中间结果；30 可能是把 10 加 20 的误算；15 可能是 20 减 5 的误算。正确跟踪每条语句后结果为 10。"
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
          "explanation": "【解题思路】32 位平台上 int 类型的取值范围约为 -2147483648 到 2147483647。运算结果超出这个范围就发生溢出。逐一判断每个选项是否越界。\n【逐步推理】A 中 2147483647 加 1 超过 int 的最大值，溢出；B 中 -2147483648 减 1 低于 int 的最小值，溢出；C 中 100000 乘 100000 等于 10000000000，即 100 亿，远大于 21 亿，溢出。三个选项都会溢出。\n【其他选项为何错】A、B、C 单独分析都确实会溢出，因此不能只选其中一个选项。三种情况都可能发生溢出，正确答案是以上都有可能。"
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
          "explanation": "【解题思路】本题判断 C++ 是否要求所有变量先声明后使用。C++ 是强类型静态语言，编译器在编译阶段需要知道每个标识符的类型，因此使用未声明变量必然编译失败。\n【逐步推理】例如直接写 cout << x 而不先写 int x，编译器会报 x 未声明的错误。这证明先声明后使用是 C++ 的强制规则，任何变量都必须先声明类型和名称才能使用。\n【判断依据】C++ 通过声明建立符号表，未声明的标识符无法通过编译。变量必须先声明后使用，这是 C++ 的基本语法规则，因此本题说法正确。",
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
          "explanation": "【解题思路】本题判断 C++ 是否区分大小写。C++ 对标识符严格区分大小写，大小写不同的标识符被视为不同的变量。\n【逐步推理】int name = 1; int Name = 2; 这两条声明可以同时存在，互不冲突，分别保存 1 和 2，说明编译器把 name 和 Name 当作两个不同的变量。同理 NAME 也是第三个不同的标识符。\n【判断依据】C++ 区分大小写是明确的语言规则，Name、name、NAME 是三个不同的标识符，可以同时使用。因此本题说法正确。",
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
          "explanation": "【解题思路】本题判断 const 变量声明后能否再被赋值。const 的核心语义是只读，声明时绑定初值，之后整个生命周期不可改写。\n【逐步推理】const int x = 5; 之后若执行 x = 10;，编译器会因为 x 是只读对象而报错。const 变量的值一经初始化即锁定，任何尝试修改的操作都无法通过编译。\n【判断依据】const 修饰的变量是常量，声明初始化后不能再被赋值，否则编译报错，这是 C++ 语言的规定。因此本题说法正确。",
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
          "explanation": "【解题思路】本题判断 bool 类型的内部表示。bool 在语义上是 true 和 false 两个逻辑值，底层存储采用整数编码，通常 true 编码为 1，false 编码为 0。\n【逐步推理】bool b = true 时，b 在内存中存储的是 1；bool c = false 时，c 存储的是 0。此外，任何非零整数赋给 bool 都会转换为 true 并存储为 1，零转换为 false 存储为 0。\n【判断依据】true 在内部存储为 1、false 存储为 0 是 C/C++ 对布尔值的标准实现行为。因此本题说法正确。",
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
          "explanation": "【解题思路】本题判断不同作用域内可否声明同名变量以及遮蔽规则。C++ 允许内层作用域声明与外层同名变量，内层声明会遮蔽外层变量。\n【逐步推理】外层声明 int x = 5，进入内层块后重新声明 int x = 10，块内访问 x 得到 10，说明内层声明遮蔽了外层变量；离开内层块后，内层 x 销毁，再访问 x 得到外层值 5，说明外层变量恢复可用。\n【判断依据】变量遮蔽（shadowing）是 C++ 作用域嵌套的标准行为：不同作用域可以声明同名变量，内层遮蔽外层，内层结束后外层恢复。因此本题说法正确。",
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
    "kp1_07": {
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
          "explanation": "【解题思路】本题考查运算符优先级。在 C++ 中，乘法（*）的优先级高于加法（+），所以必须先算乘法再算加法，不能从左到右依次计算。\n【逐步推理】第一步：先计算乘法 4 * 5 = 20。第二步：把结果代回原式，计算 3 + 20 = 23。所以表达式 3 + 4 * 5 的值为 23。\n【其他选项为何错】选项 35 是按从左到右先算 3+4=7 再乘 5 得出的错误结果，违反了乘法优先的规则；选项 20 只算了 4*5，漏掉了加号前的 3；选项 27 是误把 4*5 算成 24 再加 3 得到的。故只有选项 23 正确。"
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
          "explanation": "【解题思路】本题考查整数除法的截断行为。在 C++ 中，当两个整数相除时，结果仍为整数类型，小数部分被直接丢弃（截断），不进行四舍五入。\n【逐步推理】7 ÷ 2 = 3.5，但由于 7 和 2 都是 int 类型，计算结果是整数，0.5 的小数部分被截掉，所以 7 / 2 = 3。\n【其他选项为何错】选项 3.5 是浮点数除法的结果，只有把其中一个操作数改为 7.0 或 2.0 才能得到；选项 4 是四舍五入的结果，整数除法不做四舍五入；选项 3.0 写成小数形式，而整数除法的结果是整数，不会带小数点。故答案为 3。"
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
          "explanation": "【解题思路】本题考查取余运算符 % 的含义。% 计算两个整数相除后的余数，且要求两个操作数都是整数。\n【逐步推理】10 除以 3：商为 3，3 × 3 = 9，10 - 9 = 1，余数为 1。所以 10 % 3 = 1。\n【其他选项为何错】选项 3 是 10 除以 3 的商，不是余数，取余运算要的是余数；选项 0 只有在被除数能整除除数（如 9 % 3）时才出现；选项 3.33 是浮点数除法的小数结果，% 不参与小数运算。故正确答案为 1。"
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
          "explanation": "【解题思路】本题考查逻辑运算符的真值表。逻辑与（&&）要求两边都为真结果才为真，逻辑或（||）只要有一边为真结果就为真，逻辑非（!）对真假取反。已知 a 为 true、b 为 false。\n【逐步推理】逐项判断：a && b 是 true && false，结果为 false；a || b 是 true || false，有一边为真，结果为 true；!a 是对 true 取反，结果为 false；b && !b 中 !b 为 true，但 b 为 false，false && true 结果为 false。所以只有 a || b 的结果为 true。\n【其他选项为何错】a && b 因 b 为假导致整体为假；!a 把真的 a 取反得假；b && !b 是假与真的组合仍为假。故正确答案是 a || b。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符。x += 5 等价于 x = x + 5，x -= 3 等价于 x = x - 3，执行时每一步都会更新 x 的当前值。\n【逐步推理】初始 x = 10。第一步 x += 5，把当前值 10 加上 5，x 变为 15。第二步 x -= 3，把当前值 15 减去 3，x 变为 12。最终 x 的值为 12。\n【其他选项为何错】选项 15 只执行了第一步加法就停止，漏掉第二步减法；选项 10 是初始值，没有执行任何运算；选项 8 误以为从初始值直接减 3，忽略了中间 x += 5 的更新。故正确答案为 12。"
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
          "explanation": "【解题思路】本题考查运算符优先级的完整顺序：括号优先级最高，其次是乘法和取余（%），且乘、除、取余同级时从左到右计算，最后才是加减。\n【逐步推理】第一步算括号：(2 + 1) = 3。第二步算乘法：3 * 3 = 9。第三步算取余：9 % 10 = 9（9 除以 10 商 0 余 9）。第四步算减法：10 - 9 = 1。所以表达式的值为 1。\n【其他选项为何错】选项 0 是把 9 % 10 误算成 0（当成整除）或运算顺序颠倒；选项 2 和 3 都是在某一步数值代错导致的错误结果。故正确答案为 1。",
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
          "explanation": "【解题思路】本题考查整数除法截断与优先级。乘除同级且优先于加减，同级别运算从左到右执行；两个整数相除结果仍为整数，小数部分被截断。\n【逐步推理】第一步算乘法：3 * 3 = 9。第二步算除法：9 / 5，两个整数相除，商为 1（1.8 的小数部分被截掉），结果为 1。第三步算减法：3 - 1 = 2。所以表达式的值为 2。\n【其他选项为何错】选项 -1.2 把 3 * 3 / 5 当成了浮点除法得 1.8 再让 3 减 4.8 之类，完全混用了浮点与整数运算；选项 1 误把 9 / 5 的结果当成 0 或算错减法；选项 0 是其他运算路径的错误结果。故正确答案为 2。",
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
          "explanation": "【解题思路】本题考查取余运算符与除法的优先级关系。/ 和 % 是同级运算符，优先级高于加减，且同级运算符按从左到右的顺序执行。\n【逐步推理】第一步：16 / 4 = 4，这是整数除法，结果恰好是整数 4。第二步：4 % 2 = 0，因为 4 能被 2 整除，余数为 0。所以 16 / 4 % 2 的值为 0。\n【其他选项为何错】选项 8 误把 % 当成加号或做成了 16 / 2；选项 4 只算了除法部分就停了；选项 2 把 4 % 2 误算成 2。故正确答案为 0。",
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
          "explanation": "【解题思路】本题考查取余与整数除法的组合运算。把 N=12 分别代入取余和除法，两部分都是整数运算，再把两个结果相加。\n【逐步推理】第一部分 N % 3 = 12 % 3：12 能被 3 整除，余数为 0。第二部分 N / 5 = 12 / 5：整数除法，12 除以 5 商 2 余 2，结果为 2。两部分相加：0 + 2 = 2。所以输出的值为 2。\n【其他选项为何错】选项 6.4 和 2.4 都引入了小数，本题全是整数运算不可能出现小数；选项 6 是误算 N%3 得到 6 之类的错误路径。故正确答案为 2。",
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
          "explanation": "【解题思路】本题考查复杂表达式求值，关键在于理清优先级：括号最高，乘除与取余同级且从左到右，加减最后。还要注意整数除法 9 / 4 的截断。\n【逐步推理】第一步算括号：(6 - 2) = 4。第二步按从左到右算乘除取余：9 / 4 = 2（整数除法，2.25 截断为 2）；6 % 4 = 2（6 除以 4 余 2）；2 * 10 = 20。第三步算减法：2 - 20 = -18。所以表达式的值为 -18。\n【其他选项为何错】选项 -17.75 把 9 / 4 当浮点除法得 2.25，但本题是整数除法；选项 -14 是在某一步数值代错；选项 -12.75 同样引入了浮点结果。故正确答案为 -18。",
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
          "explanation": "【解题思路】本题考查关系运算与算术运算的混用。关系运算符（>）的结果是 bool 类型，真为 true，假为 false；当 bool 值参与算术运算时，true 自动转换为数值 1，false 转换为 0。\n【逐步推理】第一步：计算 (6 > 2)，6 确实大于 2，结果为 true。第二步：把 true 转换为数值 1，再做乘法 1 * 2 = 2。所以表达式的值为 2。\n【其他选项为何错】选项 1 只计算了关系表达式的结果就停止，没有继续做乘法；选项 true 以为结果保持 bool 型，但表达式参与了算术运算，结果已是整数；选项 truetrue 完全混淆了概念。故正确答案为 2。",
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
          "explanation": "【解题思路】本题考查取余运算的取值范围。对正整数 N 取余 k 时，余数的可能取值是 0 到 k-1，即最大值是 k-1。要求两部分和的最大值，就让两个余数同时取到最大值。\n【逐步推理】N % 3 的余数范围是 0、1、2，最大为 2；N % 7 的余数范围是 0 到 6，最大为 6。两部分之和的最大可能值就是 2 + 6 = 8。实际能取到：例如 N = 20 时，20 % 3 = 2，20 % 7 = 6，和正好为 8。\n【其他选项为何错】选项 6 把其中一个余数的上限算小了；选项 9 和 10 都超过了 2 + 6 = 8 的上限，两个余数各自都不可能再大，所以不可能出现。故正确答案为 8。",
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
          "explanation": "【解题思路】本题是判断题，考查八进制数的表示。在 C++ 中，以数字 0 开头的整数常量按八进制解读，而不是十进制。\n【逐步推理】先识别各常量的进制：010 以 0 开头是八进制数，其值等于 1 × 8 = 8；001 以 0 开头也是八进制数，其值等于 1；100 没有前导 0，是十进制数 100。把它们相加：8 + 100 + 1 = 109。\n【判断依据】题目把 010 当成了十进制的 10，把 001 当成了十进制的 1，得出 10 + 100 + 1 = 111，但按 C++ 的八进制规则正确结果是 109，与题目不符，因此该说法是错误的。",
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
          "explanation": "【解题思路】本题考查最基本的整数减法运算，被减数为 20，减数为 13，直接相减即可。\n【逐步推理】20 - 13 = 7。这个结果是一个简单的一步运算，无需考虑运算符优先级等复杂规则。\n【其他选项为何错】选项 -7 是把减数与被减数的位置弄反，即 13 - 20 的结果；选项 33 误把减号当成加号做了 20 + 13；选项 13 直接取了减数本身，没有进行运算。故正确答案为 7。"
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
          "explanation": "【解题思路】本题考查整数除法。两个整数相除，结果仍是整数类型，小数部分被直接截断丢弃，不做四舍五入。\n【逐步推理】25 ÷ 4 = 6.25。由于 25 和 4 都是 int 类型，计算结果是整数，6.25 的小数部分 .25 被截掉，得到 6。所以 25 / 4 = 6。\n【其他选项为何错】选项 6.25 是浮点数除法的结果，需把操作数之一写成浮点形式（如 25.0 / 4）才能得到；选项 7 是四舍五入的结果，整数除法不做四舍五入；选项 6.0 写成小数形式，整数除法结果是整数不带小数点。故正确答案为 6。"
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
          "explanation": "【解题思路】本题考查取余运算。% 计算两个整数相除后的余数。先把 19 表示成 6 的整数倍加余数的形式。\n【逐步推理】19 = 6 × 3 + 1，即 6 乘以商 3 得 18，19 减去 18 余 1。所以 19 % 6 = 1。\n【其他选项为何错】选项 3 是 19 除以 6 的商，取余要的是余数 1 而不是商；选项 4 误算了乘法的 6×4=24 与 19 的关系；选项 3.167 是浮点数除法的小数结果，% 不产生小数。故正确答案为 1。"
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
          "explanation": "【解题思路】本题考查赋值语句的语法规则。赋值运算符 = 的左边必须是一个可以修改的变量（称为左值），右边是赋给该变量的值。常量、表达式和关键字都不能放在赋值号左边。\n【逐步推理】x = 10 中，左边 x 是一个变量，右边 10 是常量，赋值后 x 的值变为 10，这是合法赋值语句。\n【其他选项为何错】选项 5 = x 中 5 是常量，不能出现在赋值号左边；选项 x + 1 = 10 中左边是表达式，表达式不是可修改的变量；选项 int = x 中 int 是 C++ 关键字，不能当变量名使用。故正确答案为 x = 10。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符。x *= 3 等价于 x = x * 3，即把 x 的当前值乘以 3 后再赋回给 x。\n【逐步推理】初始 x = 5。执行 x *= 3，相当于 x = 5 * 3 = 15。最终 x 的值为 15。\n【其他选项为何错】选项 3 取了乘数本身；选项 5 是初始值，没有执行运算；选项 8 是把乘法误当成加法 5 + 3 的结果。故正确答案为 15。"
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
          "explanation": "【解题思路】本题考查运算符优先级。乘法（*）的优先级高于加减（+ 和 -），所以先计算乘法，再把结果代入加减运算。\n【逐步推理】第一步算乘法：3 * 4 = 12。第二步按从左到右做加减：2 + 12 - 1 = 13。所以表达式 2 + 3 * 4 - 1 的值为 13。\n【其他选项为何错】选项 27 是按从左到右 (2 + 3) * 4 - 1 = 19 再误算的路径，本质是违反了乘法优先；选项 19 是 2 + (3 * 4 + 1) 之类的错误代算；选项 15 是其他数值代入错误。故正确答案为 13。"
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
          "explanation": "【解题思路】本题考查整数除法与类型转换的先后关系。关键点：除法运算先按操作数的类型进行，10 和 3 都是 int，所以先做整数除法得 3，然后再把整数 3 赋值给 double 类型的变量 result。\n【逐步推理】第一步：计算 10 / 3，两个整数相除，结果为整数 3（3.33 的小数被截断）。第二步：把整数 3 赋给 double 变量，数值被转换为浮点形式，变为 3.0。所以 result 的值为 3.0。\n【其他选项为何错】选项 3.33333 误以为除法会自动变成浮点运算，但操作数全是整数时不会自动转换；选项 3 忽略了赋值给 double 后的类型转换显示；选项 4 是四舍五入结果。故正确答案为 3.0。"
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
          "explanation": "【解题思路】本题考查运算符优先级。乘法和除法同级且优先于加减，同级运算符从左到右计算。\n【逐步推理】第一步算乘法：5 * 2 = 10。第二步算除法：10 / 2 = 5。第三步做加减：10 + 5 - 3 = 12。所以表达式 5 * 2 + 10 / 2 - 3 的值为 12。\n【其他选项为何错】选项 7 只算了 10 / 2 - 3 这部分，漏掉了前面的 5 * 2；选项 10 只算了乘法部分，忽略了后面的运算；选项 14 是 10 + 5 - 1 之类的数值代入错误。故正确答案为 12。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符的求值规则。x *= 2 + 1 等价于 x = x * (2 + 1)，右侧表达式 2 + 1 先完整求值，再与左边的 x 相乘。\n【逐步推理】第一步：先算右边的 2 + 1 = 3。第二步：x *= 3，即 x = 5 * 3 = 15。所以最终 x 的值为 15。\n【其他选项为何错】选项 11 误把 *= 当成加法，做成 5 + 2 + 1 之类；选项 10 是把右边的 +1 丢掉，只做了 5 * 2，忽略了括号整体求值；选项 7 是 5 + 2 的错误路径。故正确答案为 15。"
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
          "explanation": "【解题思路】本题考查整数除法与取余的输出拼接。先分别算出 10 除以 3 的商和余数，再用 cout 按顺序输出，中间插入一个点号字符。\n【逐步推理】第一步：a / b = 10 / 3 = 3（整数除法，商为 3）。第二步：a % b = 10 % 3 = 1（余数为 1）。第三步：cout 依次输出 3、.、1，拼起来是 3.1。所以输出为 3.1。\n【其他选项为何错】选项 3.3 把余数 1 误当成了 3，两个位置都填了商；选项 3.33 误以为做的是浮点除法；选项 33 丢掉了中间的点号。故正确答案为 3.1。"
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
          "explanation": "【解题思路】本题考查逻辑与（&&）运算。逻辑与要求两边的条件都为真时，结果才为真；只要有一边为假，结果就为假。\n【逐步推理】先看两个比较式：10 > 5 成立，结果为 true；3 < 2 不成立，结果为 false。再用逻辑与连接：true && false，因为有一边为假，整体结果为 false。\n【其他选项为何错】选项 true 需要两边都为真才能成立，而 3 < 2 为假，所以整体不可能为真；选项 1 是 true 的数值表示，逻辑结果只能是 true 或 false 两个概念；选项 编译错误 不存在，两个 bool 值做逻辑与是完全合法的运算。故正确答案为 false。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符与整数除法。x /= 3 等价于 x = x / 3，两个整数相除结果仍是整数，小数部分截断。\n【逐步推理】执行 x /= 3，即 x = 10 / 3。10 除以 3 商 3 余 1，整数除法取商为 3，小数部分被截断。所以 x 的值为 3。\n【其他选项为何错】选项 3.33333 需要浮点除法，但 10 和 3 都是 int 类型，不会自动转浮点；选项 4 是四舍五入的结果；选项 编译错误 不存在，整数除以整数赋值给整数是合法操作。故正确答案为 3。"
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
          "explanation": "【解题思路】本题考查多个表达式的综合求值。要逐个按优先级计算每个选项，看哪个结果恰好等于 6，尤其要注意整数除法的截断。\n【逐步推理】逐项计算：选项 A：2 * 3 + 1 = 6 + 1 = 7；选项 B：2 * (3 + 1) = 2 * 4 = 8；选项 C：10 / 3 * 2，先算 10 / 3 = 3（整数除法截断），再算 3 * 2 = 6；选项 D：10 % 3 + 2 = 1 + 2 = 3。只有选项 C 的结果为 6。\n【其他选项为何错】A 得 7、B 得 8、D 得 3，都不等于题目要求的 6；若误以为 10 / 3 * 2 = 10 / 6 则属运算顺序错误。故正确答案为 10 / 3 * 2。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符的连续使用。a -= a 等价于 a = a - a，a += 10 等价于 a = a + 10，每一步都基于更新后的当前值继续运算。\n【逐步推理】初始 a = 5。第一步 a -= a：a = 5 - 5 = 0。第二步 a += 10：a = 0 + 10 = 10。所以最终 a 的值为 10。\n【其他选项为何错】选项 0 只执行了第一步就停止，漏掉了第二步的加 10；选项 5 是初始值，以为运算相互抵消；选项 -5 误把 a -= a 理解成把 a 变成它的相反数。故正确答案为 10。"
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
          "explanation": "【解题思路】本题考查整数除法与取余分离数位的方法。一个两位数除以 10 取整得到十位，对 10 取余得到个位，再按空格连接输出。\n【逐步推理】第一步：x / 10 = 15 / 10 = 1，得到十位数字 1（整数除法截断）。第二步：x % 10 = 15 % 10 = 5，得到个位数字 5。第三步：cout 按 x / 10、空格、x % 10 的顺序输出，即 1 空格 5，结果为 1 5。\n【其他选项为何错】选项 1.5 0 把除法当成了浮点运算；选项 15 0 没有做任何分离运算，直接输出了原数；选项 1 15 把 x % 10 误当成了 15，实际上余数是 5。故正确答案为 1 5。"
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
          "explanation": "【解题思路】本题考查运算符优先级。乘法和除法同级，优先于加减法；同级运算从左到右执行，所以先完整算出乘除部分再代入加减。\n【逐步推理】第一步算乘法：4 * 5 = 20。第二步算除法（同级从左到右）：20 / 2 = 10。第三步做加减：3 + 10 - 1 = 12。所以表达式 3 + 4 * 5 / 2 - 1 的值为 12。\n【其他选项为何错】选项 11 是把 20 / 2 误算或加减顺序错误；选项 9 是其他数值代入错误；选项 25 是把加减也当成了乘除或括号位置错误。故正确答案为 12。"
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
          "explanation": "【解题思路】本题考查自增运算符。前缀自增（++x）先让变量加 1 再使用变量值，后缀自增（x++）先使用变量值再加 1；两者区别在表达式返回值，但本题两句都是独立语句，效果都是让 x 加 1。\n【逐步推理】初始 x = 5。第一条语句 x++：x 从 5 变为 6。第二条语句 ++x：x 从 6 变为 7。所以最终 x 的值为 7。\n【其他选项为何错】选项 5 是初始值，一次自增都没执行；选项 6 只执行了一次自增；选项 8 多执行了一次自增，实际只有两次自增语句。故正确答案为 7。"
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
          "explanation": "【解题思路】本题考查整数除法与乘除同级运算。/ 和 * 优先级相同，按从左到右的顺序计算；关键陷阱是 10 / 3 是整数除法，先截断为 3，之后再乘以 3。\n【逐步推理】第一步：10 / 3 = 3（整数除法，3.33 的小数被截断）。第二步：3 * 3 = 9。所以 10 / 3 * 3 的值为 9。\n【其他选项为何错】选项 10 是常见的想当然错误，以为 (10 / 3) * 3 能约回去等于 10，但整数除法截断已经丢失了精度，结果不再能还原为 10；选项 9.0 和 10.0 都是浮点形式，本式所有操作数都是整数，结果也是整数。故正确答案为 9。"
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
          "explanation": "【解题思路】本题考查运算符优先级。乘法优先级高于加减，先算 b * c，再按从左到右的顺序做加减。\n【逐步推理】a = 2，b = 3，c = 4。第一步算乘法：b * c = 3 * 4 = 12。第二步代入加减：a + b * c - b = 2 + 12 - 3 = 11。所以输出为 11。\n【其他选项为何错】选项 20 误把括号加在了 a + b 上，即 (2 + 3) * 4 = 20 之后再减 3 的错误路径；选项 13 是 2 + 3 + 4 + 4 之类的加法错误；选项 17 是其他数值代入错误。故正确答案为 11。"
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
          "explanation": "【解题思路】本题考查整数除法与取余的组合。7 除以 2，商为 3 余 1；把商和余数相加，就是用整数除法和取余两种运算分别取到 3 和 1。\n【逐步推理】第一步：7 / 2 = 3（整数除法，商为 3）。第二步：7 % 2 = 1（余数为 1，因为 7 = 2 × 3 + 1）。第三步：3 + 1 = 4。所以表达式的值为 4。\n【其他选项为何错】选项 3.5 把 7 / 2 当成了浮点除法；选项 3 只算了商，漏掉了余数；选项 4.5 引入浮点结果，本题全是整数运算。故正确答案为 4。"
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
          "explanation": "【解题思路】本题考查整数除法与赋值的先后关系。a 和 b 都是 int，先做整数除法得整数结果，再把该整数赋给 double 变量，数值转换为浮点形式。\n【逐步推理】第一步：a / b = 8 / 3 = 2（整数除法，2.666 的小数被截断）。第二步：把整数 2 赋给 double 类型的 result，数值转为浮点形式，变为 2.0。所以 result 的值为 2.0。\n【其他选项为何错】选项 2.66667 误以为 a / b 会自动做浮点除法，但两个操作数都是 int 时不会自动转换；选项 2 忽略了赋值给 double 后的类型转换显示；选项 3 是 8 / 2.6 之类的错误代算。故正确答案为 2.0。"
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
          "explanation": "【解题思路】本题考查多个表达式的求值比较。逐一按优先级和整数除法规则计算出每个选项的数值，再比较大小找出最小的。\n【逐步推理】逐项计算：A：100 / 3 = 33（整数除法，33.33 截断）；B：100 % 3 = 1（100 除以 3 余 1）；C：100 / 3 * 3 = 33 * 3 = 99；D：100 - 100 / 3 = 100 - 33 = 67。四个值分别为 33、1、99、67，其中 1 最小，即 100 % 3。\n【其他选项为何错】A 得 33，大于 1；C 得 99，是四个里最大的；D 得 67，也远大于 1。故正确答案为 100 % 3。"
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
          "explanation": "【解题思路】本题考查复合赋值运算符的右结合性与求值顺序。x -= x /= 2 中，赋值类运算符从右向左结合，等价于 x -= (x /= 2)。先执行右侧的 x /= 2 修改 x 的值，再执行左侧的减法。\n【逐步推理】初始 x = 10。第一步执行 x /= 2：x = 10 / 2 = 5，x 被更新为 5。第二步执行 x -= 5：用更新后的 x 值 5 减去 5，得 x = 5 - 5 = 0。所以最终 x 的值为 0。\n【其他选项为何错】选项 5 只执行了 x /= 2 就停止，漏掉减法；选项 -5 误把减法做成 5 - 10 = -5，忽略了 x 已被更新为 5；选项 10 以为运算相互抵消，x 保持不变。故正确答案为 0。"
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
          "explanation": "【解题思路】本题考查整数除法的精度损失。a / b * b 中 / 和 * 同级，按从左到右顺序计算；10 / 4 先做整数除法截断为 2，之后再乘 4，结果不再能还原为 10。\n【逐步推理】第一步：a / b = 10 / 4 = 2（整数除法，2.5 截断为 2）。第二步：2 * b = 2 * 4 = 8。所以输出为 8。\n【其他选项为何错】选项 10 误以为 a / b * b 可以还原为原来的 a，但整数除法截断丢失精度后无法还原；选项 40 把 a / b 当成了 10 再做 10 * 4；选项 2.5 是浮点除法结果，本题是整数除法。故正确答案为 8。"
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
          "explanation": "【解题思路】本题考查循环与复合赋值的组合。for 循环从 i = 0 到 i < 5，循环体共执行 5 次；每次执行 x *= 2，即把 x 的值翻倍。\n【逐步推理】初始 x = 1。第一次循环（i=0）：1 × 2 = 2；第二次（i=1）：2 × 2 = 4；第三次（i=2）：4 × 2 = 8；第四次（i=3）：8 × 2 = 16；第五次（i=4）：16 × 2 = 32。循环结束后 x = 32。\n【其他选项为何错】选项 16 只执行了 4 次翻倍（漏掉最后一次）；选项 10 误把乘 2 当成加 2 做了 5 次；选项 5 误以为结果是循环次数本身。故正确答案为 32。"
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
          "explanation": "【解题思路】本题是判断题，考查 % 运算符的功能。C++ 中 % 称为取余（求模）运算符，专门用来计算两个整数相除后的余数。\n【逐步推理】用实例验证：10 % 3 表示 10 除以 3，商 3 余 1，结果是 1；17 % 5 表示 17 除以 5，商 3 余 2，结果是 2。这些例子都印证 % 的作用就是取整除后的余数。\n【判断依据】% 运算符确实用于取余运算，且要求操作数是整数，题目陈述与 C++ 的实际规则一致，因此该说法是正确的。",
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
          "explanation": "【解题思路】本题是判断题，考查整数除法。10 和 3 都是 int 类型，两个整数相除的结果仍是整数，小数部分被截断丢弃，不会自动变成小数。\n【逐步推理】10 / 3 的精确数学结果是 3.33（循环小数），但 C++ 中按整数除法规则只保留整数部分，把 .33 截断，结果是 3。只有把操作数之一写成浮点形式（如 10.0 / 3）才会得到 3.33。\n【判断依据】题目说 10 / 3 的值为 3.33，与整数除法的实际结果 3 不符，因此该说法是错误的。",
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
          "explanation": "【解题思路】本题是判断题，考查 % 运算符的操作数类型限制。C++ 语法规定取余运算符 % 的两个操作数都必须是整数类型。\n【逐步推理】% 计算的是整除后的余数，而浮点数没有整除余数的概念，因此对浮点数使用 % 会直接导致编译错误，例如 10.5 % 3 是非法的。相比之下 / 运算符既支持整数也支持浮点数。\n【判断依据】题目说 % 只能用于整数类型、不能用于浮点数，与 C++ 的规定完全一致，因此该说法是正确的。",
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
          "explanation": "【解题思路】本题是判断题，考查复合赋值运算符的等价关系。复合赋值运算符 += 的含义是把右侧的值加到左侧变量上，并把结果赋回给左侧变量。\n【逐步推理】a += b 执行时，先计算 a + b 的值，再把这个值赋给 a，即 a = a + b。两者功能完全一致，+= 只是更简短的写法。同理 a -= b 等价于 a = a - b，a *= b 等价于 a = a * b。\n【判断依据】a += b 与 a = a + b 在语义上完全等价，题目说法与 C++ 规则一致，因此该说法是正确的。",
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
          "explanation": "【解题思路】本题是判断题，考查整数除法的截断与同级运算顺序。/ 和 * 优先级相同，按从左到右的顺序计算；5 / 2 是整数除法，先截断为 2，再乘 2。\n【逐步推理】第一步计算 5 / 2 = 2，因为 5 和 2 都是整数，整数除法把 2.5 截断为 2。第二步计算 2 * 2 = 4。所以 5 / 2 * 2 的值为 4。\n【判断依据】题目说 5 / 2 * 2 的值为 5，但实际结果是 4，整数除法截断导致结果比数学值偏小，因此该说法是错误的。",
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
    "kp1_03": {
      "title": "程序的基本语句",
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
          "explanation": "【解题思路】C++ 输出用 cout 配合 << 插入运算符，endl 同样通过 << 插入，作用是换行并刷新缓冲区。需要区分 <<（输出）与 >>（输入）。\n【逐步推理】cout 后跟 << 表示把右侧内容送入输出流。cout << \"Hello\" << endl; 先输出字符串 Hello，再输出一个换行符。\n【其他选项为何错】选项1 写成 cout >>，>> 是提取运算符，用于输入而非输出；选项3 用 cin <<，cin 是输入流对象，不能用于输出，且运算符方向也反了；选项4 cout << \"Hello\" >> endl 把 endl 用 >> 插入，方向错误。因此只有选项2 正确。"
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
          "explanation": "【解题思路】比较 endl 与 \"\\n\" 的异同：二者都能换行，区别在于 endl 会额外刷新缓冲区。\n【逐步推理】endl 等价于输出一个换行符后再调用 flush()，把缓冲区内容立即写到屏幕等目标设备；\"\\n\" 只产生换行字符，不主动刷新。所以主要区别就是是否刷新缓冲区。\n【其他选项为何错】选项1 说没有任何区别，忽略了刷新行为这一差异；选项3 把刷新归给 \"\\n\"，方向反了；选项4 说 endl 输出两个换行，错误，endl 只输出一个换行。因此选项2 正确。"
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
          "explanation": "【解题思路】printf 格式串中 %% 用于输出一个字面百分号，%d 用于输出整数。关键要正确解析转义规则与求值顺序。\n【逐步推理】先算 5 % 2 = 1。格式串 \"5%%2={%d}\\n\" 中，\"5%%2=\" 输出为 \"5%2=\"（%% 变成一个 %），{%d} 中的 %d 被参数 1 替换，最后 \\n 换行。整体输出 \"5%2={1}\"。\n【其他选项为何错】选项1 \"1={1}\" 丢掉了前面的 \"5%2=\" 前缀；选项2 \"5%2={5%2}\" 把 %d 当成普通字符原样输出，没有代入计算结果；选项4 \"5 ={1}\" 凭空多了一个空格。故选项3 正确。",
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
          "explanation": "【解题思路】cout << 字符串时原样输出字符串内容（含空格），<< 表达式则先求值再输出。\n【逐步推理】a=1。第一个 << 输出字符串 \"a+1= \"，等号后有一个空格；第二个 << 输出 a+1=2。所以屏幕显示 \"a+1= 2\"，末尾 endl 换行。\n【其他选项为何错】选项1 \"a+1=2\" 丢掉了等号后的空格（那是 printf 版本的结果）；选项2、3 输出为 \"2=2\" 或 \"2= 2\"，与格式串内容完全不符。故选项1（下标0）正确。",
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
          "explanation": "【解题思路】printf 按格式串逐字符输出，只有 % 开头的说明符会被替换，其余字符原样保留。\n【逐步推理】a=1。格式串 \"a+1=%d\\n\" 中 \"a+1=\" 原样输出（= 后无空格），%d 替换为 a+1=2，最后 \\n 换行。整体输出 \"a+1=2\"。\n【其他选项为何错】选项1 \"a+1= 2\" 多了等号后的空格（那是 cout 版本的结果）；选项2、3 输出成 \"2=2\" 或 \"2= 2\"，不符合格式串。故选项2（下标1）正确。",
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
          "explanation": "【解题思路】cin >> 读取整数时，遇到非数字字符就停止，把已经读入的数字组成整数赋给变量。\n【逐步推理】输入为 \"5+2\"。cin >> i 先读入数字 '5'，读到 '+' 时发现不是数字，立即停止，i 得到 5；\"+2\" 留在输入流中未被读取。cout << i 输出 5。\n【其他选项为何错】选项1 \"整数7\" 误以为 cin 会把 \"5+2\" 当表达式求值，cin 只做格式化读取不做计算；选项3 \"报错\" 不会发生，读取到非法字符只是停止；选项4 \"内容不确定\" 错误，行为有确定规则，就是读到非数字停止。故选项2 正确。",
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
          "explanation": "【解题思路】C++ 中两个 int 相除结果仍为 int（小数部分截断），运算按从左到右的顺序执行。\n【逐步推理】first=100，second=200。表达式 first / second * second 从左到右计算：100 / 200 = 0（整数除法，商取 0），再算 0 * 200 = 0。所以输出 0。\n【其他选项为何错】选项2 \"100\" 是把除法当成实数运算得到的 (100/200)*200=100，忽略了整数除法的截断；选项1 \"200\" 混淆了 first 与 second 的取值或运算顺序；选项4 \"1\" 是误把 100/200 的结果当成约 1 再相乘。故选项4（下标3）正确。",
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
          "explanation": "【解题思路】区分 C/C++ 中完成输入与输出的语句。输入用 scanf（C 风格函数）或 cin（C++ 流对象）。\n【逐步推理】scanf 是格式化输入函数，按格式串从标准输入读取数据，因此可以完成数据输入，是本题正确答案。\n【其他选项为何错】选项1 printf 是格式化输出函数，只负责显示；选项3 default 是 switch 语句的关键字，与输入输出无关；选项4 cout 是输出流对象，用于输出。三者都不能完成输入。故选项2 正确。",
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
          "explanation": "【解题思路】printf 宽度格式说明符：%2d 表示最小宽度 2，不足补空格；%02d 表示最小宽度 2，不足补 0。\n【逐步推理】要求输出 \"__ 0322$$\"。先看 3 和 22 各自需要的格式：%02d 配参数 3 得 \"03\"；%2d 配参数 22，22 已满 2 位，得 \"22\"。合起来为 \"__ \" + \"03\" + \"22\" + \"$$\" = \"__ 0322$$\"。所以正确语句是 printf(\"__ %02d%2d$$\", 3, 22)。\n【其他选项为何错】选项1 用 %2d 配 3 得 \" 3\"（空格在前），再 %02d 配 22 得 \"22\"，输出 \"__  322$$\"，中间出现两个空格，不符；选项3 末尾多了两个 $，输出 \"__ 0322$$$$\"；选项4 开头多两个下划线且末尾多两个 $，输出 \"____ 0322$$$$\"。故选项2 正确。",
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
          "explanation": "【解题思路】printf 格式串中只有以 % 开头的才是格式说明符，{} 花括号是普通字符，会原样输出。\n【逐步推理】格式串 \"{N}*{N}={%d*%d}\"，参数为 N=10、N=10、N*N=100。前面两个 {N} 原样输出，{%d*%d} 中的 %d 依次替换为 10 和 100。整体输出 \"{N}*{N}={10*100}\"。\n【其他选项为何错】选项1 \"10*10={10*10}\" 误以为 {N} 会被替换成 N 的值，实际上 {} 不是格式说明符；选项2 \"100=10\" 是对格式串的完全误解；选项3 \"N*N=100\" 也不符合，因为 {} 内的 N 不会替换。故选项4 正确。",
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
          "explanation": "【解题思路】本题考字符串字面量的引号规则：字符串必须用双引号，单引号只能表示单个字符。\n【逐步推理】printf(\"我爱码代码！\") 的字符串内容可以是任意文本（含中文、字母数字）。而单引号 ' ' 表示 char 字符常量，只能容纳一个字符，多字符字面量在 C++ 中不合法，不能替代双引号表示字符串。所以\"双引号都可以改为两个单引号\"是错误的说法。\n【其他选项为何错】选项1、2 把汉字换成 \"Hello代码\" 或 \"Hello代码！\"，仍然是合法字符串，说法正确；选项4 把每个双引号改成三个双引号（变成 printf(\"\"\"我爱码代码！\"\"\")），相邻字符串字面量会被自动拼接，仍能正确编译执行，说法也正确。因此错误项是选项3。",
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
          "explanation": "【解题思路】float 变量可以接收整数值（自动转换为 float），%.0f 表示按浮点数输出但不显示小数部分。\n【逐步推理】a 是 float。先 a=101.101，随后 a=101，整数 101 自动转成 101.0 覆盖旧值。a+1=102.0。%.0f 舍去小数输出 102。格式串 \"a+1={%.0f}\" 中 {%.0f} 替换为 102，输出 \"a+1={102}\"。\n【其他选项为何错】选项1 \"102={102}\" 把 \"a+1=\" 写成了 \"102=\"，不符；选项2 \"a+1={a+1}\" 把 %.0f 当普通字符；选项4 认为 float 赋整数会报错，错误，int 可隐式转换为 float，程序正常执行。故选项3 正确。",
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
          "explanation": "【解题思路】判断题，需辨别 scanf 的功能描述是否正确。scanf 是格式化输入函数，不是\"提示输入\"。\n【逐步推理】scanf 的第一个参数是格式字符串（通常写成字符串字面量），后面跟存储数据的变量地址；它按格式从标准输入读取数据并存入对应变量。\"提示输入\"（在屏幕上输出提示文字）是 printf 的功能。题干把 scanf 的功能说成\"提示输入\"，结论错误。\n【易错点】scanf 的格式串也可以用 char 数组变量存放，不一定是字面量，但这不影响判题；题干前半句大体成立，关键是\"功能是提示输入\"这一判断错误，故整句判为错误。",
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
          "explanation": "【解题思路】cin、cout、endl 等标准输入输出流对象和操纵符定义在 iostream 头文件中。\n【逐步推理】使用 cin（输入流）、cout（输出流）、endl 都需要 #include <iostream>。这是 C++ 标准输入输出流的功能所在。\n【其他选项为何错】选项1 <stdlib.h> 提供 exit、abs、atoi 等通用函数；选项3 <string> 提供 string 字符串类型；选项4 <math.h> 提供 sqrt、pow 等数学函数。三者都不含标准输入输出流。故选项2 正确。"
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
          "explanation": "【解题思路】cout << 后面跟的是表达式时，会先计算表达式的值再输出。\n【逐步推理】代码中 cout << 3 + 5;，3+5 是算术表达式，先计算得 8，再输出 8，语句末尾没有换行。屏幕显示 8。\n【其他选项为何错】选项1 \"3+5\" 把表达式当字符串原样输出，但 3+5 没有加引号，是算术表达式而非字符串；选项2 \"35\" 误以为把两个数字拼接成字符串；选项4 \"报错\" 错误，代码可正常编译运行。故选项3 正确。"
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
          "explanation": "【解题思路】连续使用 << 输出多个字符串，各字符串之间没有自动插入任何分隔符。\n【逐步推理】\"Hello\" 和 \"World\" 两个字符串字面量本身都不含空格，cout 依次输出，中间没有空格或其他字符，结果为 HelloWorld。\n【其他选项为何错】选项1 \"Hello World\" 凭空在中间加了空格；选项2 \"Hello  World\" 加了两个空格；选项4 \"报错\" 错误，代码完全合法。故选项2 正确。"
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
          "explanation": "【解题思路】区分流对象与函数：cin/cout 是 C++ 标准流对象，scanf/printf 是 C 语言库函数。\n【逐步推理】cout 是标准输出流对象，配合 << 插入运算符输出数据；cin 是标准输入流对象，配合 >> 提取运算符读入数据。题目问标准输出流对象，答案是 cout。\n【其他选项为何错】选项1 scanf 是 C 语言输入函数；选项2 printf 是 C 语言输出函数，二者都是函数而非流对象；选项4 cin 是标准输入流对象，不是输出流。故选项3 正确。"
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
          "explanation": "【解题思路】判断题，考察 endl 的作用。endl 的作用是输出换行符，同时刷新输出缓冲区。\n【逐步推理】endl 插入输出流时，会输出一个换行符，并刷新缓冲区。题干说\"endl 的作用是输出一个换行符\"，这准确描述了 endl 的核心功能，并未声称\"endl 不会刷新缓冲区\"，因此该说法成立。\n【易错点】如果题干写成\"endl 的作用只是输出换行，不会刷新缓冲区\"，那才是错误表述。本题措辞并不排除刷新行为，故判为正确。",
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
          "explanation": "【解题思路】cin 是输入流对象，使用 >> 提取运算符把数据读入变量；cout 是输出流对象，使用 << 插入运算符。\n【逐步推理】要把用户输入的整数存入变量 a，应写 cin >> a;。>> 从输入流中提取一个整数并存入 a。\n【其他选项为何错】选项2 cout >> a 用输出流做提取操作，运算符与对象不匹配，无法编译；选项3 cin << a 方向反了，cin 应配合 >>；选项4 cout << a 是输出 a 的值，不是输入。故选项1 正确。"
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
          "explanation": "【解题思路】判断题，考察 iostream 中两个运算符的语义：<< 是插入运算符（输出），>> 是提取运算符（输入）。\n【逐步推理】<< 把数据插入到输出流，配合 cout 使用实现输出；>> 从输入流提取数据，配合 cin 使用实现输入。题干描述与 C++ 标准语义完全一致。\n【易错点】初学者容易把两者的方向记反。可借助口诀记忆：>> 箭头指向变量（输入），<< 箭头指向屏幕（输出）。本题说法正确。",
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
          "explanation": "【解题思路】cin >> 连续读取多个值时按输入流顺序赋值，空格、换行等空白字符会被自动跳过。\n【逐步推理】输入 \"3 7\"。第一个 >> 读入 3 赋给 a，第二个 >> 跳过空格读入 7 赋给 b。所以 a 的值是 3。\n【其他选项为何错】选项2 \"7\" 是 b 的值，不是 a；选项3 \"37\" 误以为两个数拼成 37；选项4 \"不确定\" 错误，行为是确定的，按顺序赋值。故选项1 正确。"
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
          "explanation": "【解题思路】endl 的作用是输出换行符，因此它会把一行输出拆成两行。\n【逐步推理】语句 cout << \"abc\" << endl << \"def\"; 先输出 \"abc\"，接着 endl 换行，再输出 \"def\"。屏幕上显示两行：第一行 abc，第二行 def。\n【其他选项为何错】选项1 \"abcdef\" 忽略了 endl 的换行效果；选项2 \"abcndef\" 把 endl 当成字母 n；选项4 \"abc def\" 把换行误当成空格。故选项3 正确。"
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
          "explanation": "【解题思路】判断题，逐句验证代码：声明变量、读入整数、输出整数。\n【逐步推理】int x; 声明一个整型变量；cin >> x; 从输入读取一个整数存入 x；cout << x; 输出 x 的值。三步组合完整，运算符方向正确，可正常编译运行。\n【易错点】注意运算符方向：cin 用 >>（数据流入变量），cout 用 <<（数据流向屏幕）。本代码两处方向都正确，故判断为正确。",
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
          "explanation": "【解题思路】cin 支持链式 >> 连续读取多个值，值之间以空白（空格或换行）分隔。\n【逐步推理】输入 \"10 20 30\"，三个 >> 按顺序依次读入：a=10，b=20，c=30。\n【其他选项为何错】选项2 顺序颠倒成 a=30, b=20, c=10；选项3 把三个数连成 102030 赋给 a；选项4 \"编译错误\" 错误，cin 完全支持链式读取。故选项1 正确。"
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
          "explanation": "【解题思路】逐个展开 cout 链上每个 << 的输出内容，注意字符常量与表达式求值的区别。\n【逐步推理】依次输出：1、字符 '+'、2、字符 '='、1+2 的值 3，最后 endl 换行。字符常量用单引号括起，输出时不带引号，故显示 \"1+2=3\" 且末尾换行。\n【其他选项为何错】选项1 \"1+2=3\" 内容对但没体现末尾的换行，而 endl 确实产生了换行，故应选带\"（换行）\"的选项3；选项2 \"1 + 2 = 3\" 假设输出中有空格，实际没有；选项4 \"12+1=3\" 顺序或字符内容错误。"
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
          "explanation": "【解题思路】getline(cin, str) 的用途是读取一整行文本（包含空格）到字符串变量中。\n【逐步推理】getline 从标准输入读取直到遇到换行符，把整行内容（含行内空格）存入 str，换行符本身被丢弃。这与 cin >> 不同，getline 不会在空格处停止。\n【其他选项为何错】选项2 \"读取一个字符\" 是 cin.get 或 getchar 的功能；选项3 \"输出 str 的内容\" 是 cout 的功能；选项4 \"将 str 写入文件\" 属于文件操作，与 getline 无关。故选项1 正确。"
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
          "explanation": "【解题思路】判断题，比较 getline(cin, s) 与 cin >> s 在读取含空格字符串时的行为差异。\n【逐步推理】cin >> s 遇到空白字符（空格、制表符、换行）就停止，只读入第一个单词；getline(cin, s) 一直读到换行符为止，保留行内的空格。二者行为不同，题干说\"行为相同\"是错误的。\n【易错点】举例：输入 \"hello world\"，cin >> s 得到 \"hello\"，而 getline(cin, s) 得到 \"hello world\"。本题判断为错误。",
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
          "explanation": "【解题思路】区分换行与刷新的写法：endl 换行并刷新，\"\\n\" 只换行不刷新，flush 只刷新不换行。\n【逐步推理】cout << \"\\n\" 只向缓冲区写入一个换行字符，不主动刷新缓冲区；cout << endl 等价于换行加刷新；cout << endl << flush 会刷新两次；cout << flush 只刷新。题目问\"不会刷新缓冲区的换行方式\"，答案是非 endl 的换行写法，即 cout << \"\\n\"。\n【其他选项为何错】选项1 endl 会刷新；选项3 endl 加 flush 明确刷新；选项4 是纯 flush 刷新语句（且不算换行方式）。故选项2 正确。"
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
          "explanation": "【解题思路】按顺序展开 cout 链：每个 << 依次输出其右侧内容，字符串原样输出，表达式先求值。\n【逐步推理】x=42。依次输出：x 的值 42、空格、x*2=84、空格、x+1=43。整体显示 \"42 84 43\"，语句末尾没有 endl，不换行。\n【其他选项为何错】选项2 \"428443\" 忽略了中间的空格；选项3 \"42, 84, 43\" 误把空格换成逗号；选项4 多了\"（换行）\"，本代码末尾没有换行。故选项1 正确。"
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
          "explanation": "【解题思路】scanf 的格式说明符对应数据类型：%d 整数、%f 浮点数、%c 字符、%s 字符串。\n【逐步推理】读入一个整数应使用 %d，对应参数需为 int 变量的地址（如 &a）。\n【其他选项为何错】选项2 %f 用于读入 float/double 浮点数；选项3 %c 用于读入单个 char 字符；选项4 %s 用于读入字符串（char 数组）。只有 %d 匹配整数。故选项1 正确。"
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
          "explanation": "【解题思路】判断题，检查代码的头文件、操纵符搭配是否合法，并推演输出结果。\n【逐步推理】#include <iomanip> 提供了 fixed 与 setprecision 操纵符。cout << fixed << setprecision(2) 使后续浮点数以固定小数位输出并保留 2 位。pi=3.14159 按两位小数四舍五入输出为 3.14。代码可正常编译运行。\n【易错点】若漏包含 <iomanip> 或漏写 fixed，输出可能不是预期的 3.14。本题各要素齐全，故判断为正确。",
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
          "explanation": "【解题思路】cin >> char 变量只读取一个字符，遇到空白字符（空格或换行）即停止。\n【逐步推理】输入 \"abc\" 后回车。cin >> ch 先跳过前导空白，然后读取第一个字符 'a'，遇空格或换行停止，'b'、'c' 和回车仍留在输入缓冲区。所以 ch 的值是 'a'。\n【其他选项为何错】选项2 \"abc\" 是一整串文本，char 变量装不下；选项3 \"ab\" 是前两个字符；选项4 \"空格\" 错误，cin >> 会自动跳过前导空格。故选项1 正确。"
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
          "explanation": "【解题思路】cin >> 读取字符串时遇到空白（空格）即停止，因此一个 >> 只能读入一个单词。\n【逐步推理】输入 \"hello world\"。cin >> s1 读到 \"hello\"（在空格处停止），cin >> s2 跳过空格再读到 \"world\"。cout 输出 s1、逗号、s2，结果为 \"hello,world\"。\n【其他选项为何错】选项2 \"hello world,\" 逗号位置和内容都不对；选项3 \",hello world\" 顺序颠倒；选项4 \"hello, world\" 在逗号后多了一个空格，实际输出是逗号直接连接，没有空格。故选项1 正确。"
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
          "explanation": "【解题思路】读入一行含空格的完整文本需要使用 getline(cin, s)，它读取到换行符为止，保留行内空格。\n【逐步推理】getline(cin, s) 从输入流读取一整行（含空格）存入 string 变量 s，换行符被丢弃，是题目要求的正确方式。\n【其他选项为何错】选项1 cin >> s 遇空格即停止，只能读一个单词；选项3 cin.get(s) 用法不对，cin.get 通常需要字符指针和大小参数，且不能直接用于 string；选项4 gets(s) 在 C++ 中已被弃用，且缓冲区溢出风险高，不推荐。故选项2 正确。"
        },
        {
          "id": "kp03_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>#include &lt;iostream&gt;\n#include &lt;iomanip&gt;\nusing namespace std;\n\nint main() {\n    double d = 3.14159;\n    cout &lt;&lt; fixed &lt;&lt; setprecision(0) &lt;&lt; d &lt;&lt; endl;\n    cout &lt;&lt; setprecision(2) &lt;&lt; d &lt;&lt; endl;\n    return 0;\n}</code></pre>",
          "options": [
            "3\\n3.14",
            "3.14159\\n3.14",
            "3\n3.1",
            "3 3.14"
          ],
          "answer": 0,
          "explanation": "【解题思路】fixed 和 setprecision 的效果具有持续性，会作用于后续所有输出，直到被重新设置。\n【逐步推理】d=3.14159。第一条 cout << fixed << setprecision(0)：fixed 开启固定小数位模式，setprecision(0) 保留 0 位小数，3.14159 四舍五入后输出 3，endl 换行。第二条 cout << setprecision(2)：fixed 仍然生效，setprecision(2) 改为保留 2 位小数，输出 3.14，endl 换行。所以屏幕显示两行：3 和 3.14。\n【其他选项为何错】选项2 \"3.14159\\n3.14\" 认为第一次输出原值，忽略了 setprecision(0) 的效果；选项4 \"3 3.14\" 忽略了 endl 产生的换行。注：本卷选项1 与选项3 文本相同（均为 \"3\\n3.14\"），指向同一正确结果，选选项1（下标0）即可。"
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
          "explanation": "【解题思路】判断题，考察 cin >> 对换行的处理。cin 读整数时自动跳过空白字符，包括换行。\n【逐步推理】cin >> a 先读入 123，输入缓冲中剩下换行符；cin >> b 先跳过这个换行符，再读入 456。所以 a=123，b=456，与题干一致。\n【易错点】很多初学者担心换行符残留影响下次读取，但 cin >> 配合整数类型会自动跳过所有前导空白，无需手动清空缓冲区。本题判断为正确。",
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
          "explanation": "【解题思路】输出行数由 endl（换行）出现的次数决定。\n【逐步推理】三条 cout 语句各带一个 endl：第一行输出 \"A\"，第二行输出 \"BC\"，第三行输出 \"D\"。共 3 行。\n【其他选项为何错】选项1 \"2行\" 少算了一处 endl；选项3 \"4行\" 误把第二行的两个输出当成两行；选项4 \"5行\" 更不符合。三处 endl 对应三行，故选项2 正确。"
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
          "explanation": "【解题思路】getchar() 是 C/C++ 的字符输入函数，功能是从标准输入读取一个字符。\n【逐步推理】getchar() 不需要任何参数，读入下一个字符并返回其 ASCII 值（int 类型）。调用一次只读取一个字符。\n【其他选项为何错】选项2 \"可以读取一整行\" 是 gets 或 getline 的功能；选项3 \"只能读取数字字符\" 错误，getchar 可读取任意字符（字母、符号等）；选项4 \"需要传入参数\" 错误，getchar 无参数。故选项1 正确。"
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
          "explanation": "【解题思路】cin >> 读整数遇到非数字即停；cin >> 读字符会先跳过空白（含换行），再读一个字符。\n【逐步推理】输入 \"10\\n20\"。cin >> a 读整数 10，在换行符处停止；cin >> ch 先跳过换行符，然后读到 '2'（数字 20 的第一个字符）。cout << a << ch 输出 10 与 '2'，即 \"102\"，末尾 endl 换行。\n【其他选项为何错】选项2 \"10 2\" 多了一个空格；选项3 \"10\\n2\" 误以为中间有换行；选项4 \"1020\" 误以为 ch 读入了整个 \"20\"，但 ch 是 char 类型，只能存一个字符 '2'。故选项1 正确。"
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
          "explanation": "【解题思路】判断题，考察 putchar() 的功能：它只能输出单个字符，不能输出字符串。\n【逐步推理】putchar(c) 向标准输出写入一个字符 c。要输出整个字符串应使用 puts() 或 cout。题干说 putchar() 可以输出一个字符串，与事实不符，故错误。\n【易错点】putchar 一次一个字符，若要输出 \"hello\" 需要连续调用 putchar 五次。本题判断为错误。",
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
          "explanation": "【解题思路】区分输出字符串时是否自动换行：puts 输出后自动补一个换行，printf 默认不换行。\n【逐步推理】printf(\"hello\") 只输出 hello，不换行；printf(\"hello\\n\") 输出 hello 后换行；puts(\"hello\") 输出 hello 后自动补换行；puts(\"hello\\n\") 会输出 hello 后再补换行，产生两个换行。因此不换行的方式是 printf(\"hello\")。\n【其他选项为何错】选项1 puts(\"hello\") 自动添加换行；选项3 printf(\"hello\\n\") 显式带 \\n 会换行；选项4 puts(\"hello\\n\") 会换行两次。故选项2 正确。"
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
          "explanation": "【解题思路】setw(n) 设置最小输出宽度为 n，默认右对齐，内容不足宽度时在左侧补空格。\n【逐步推理】setw(5) << 42：宽度为 5，内容 \"42\" 占 2 位，左侧补 3 个空格，输出 \"   42\"（3 空格加 42 共 5 位）。setw 只对紧随其后的一个输出项生效。\n【其他选项为何错】选项1 \"左对齐\" 错误，默认是右对齐；选项3 \"42000\" 是把补空格误当成补 0；选项4 \"后面补 3 个空格\" 方向反了，补空格在左侧。故选项2 正确。"
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
          "explanation": "【解题思路】判断题，验证代码的头文件与输出结果。\n【逐步推理】#include <cstdio> 是 C++ 中引入 C 标准输入输出库的写法，等价于 <stdio.h>，可正常使用 printf。printf(\"Hello, World!\") 原样输出字符串 Hello, World!（无换行）。代码可编译运行，输出即为题干所述。\n【易错点】末尾没有 \\n 只影响是否换行，不影响\"输出结果为 Hello, World!\"的判断。本题判断为正确。",
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
          "explanation": "【解题思路】逐个用 if 判断三个输入数的正负，用 count 统计大于 0 的个数。\n【逐步推理】输入为 -1 5 0。a=-1，不大于 0，不计数；b=5，大于 0，count 由 0 变为 1；c=0，不大于 0，不计数。最终 count=1。\n【其他选项为何错】选项1 \"0\" 忽略了 b=5 满足条件；选项3 \"2\" 误把 a 或 c 也计入；选项4 \"3\" 误以为三个数都大于 0。逐个判断后只有 b 满足条件，故选项2 正确。"
        }
      ]
    },
    "kp1_04": {
      "title": "分支结构",
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
          "explanation": "【解题思路】判断 if 后的条件表达式 5 > 3 是否为真，为真则执行语句 x = 10。\n【逐步推理】5 > 3 的比较结果为 true（真），满足 if 条件，因此执行 x = 10，把 10 赋给 x。x 的初值是 0，赋值后被覆盖为 10，所以最终值为 10。\n【其他选项为何错】0 是 x 的初值，但赋值语句已将其覆盖，最终不是 0；5 只是参与比较的常量，不会赋给 x；本代码没有语法错误，不会编译失败。"
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
          "explanation": "【解题思路】比较 a 与 b 的大小，根据 if-else 分支决定输出哪个字符。\n【逐步推理】a=3，b=5，a > b 即 3 > 5 不成立，为 false，所以不执行 cout << “A”，而是进入 else 分支输出 “B”。if-else 是二选一结构，只会输出一个字符。\n【其他选项为何错】A 只有在条件成立时才会输出；AB 不可能出现，因为 if-else 两个分支互斥，只会执行其中一个；代码语法正确，不会编译错误。"
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
          "explanation": "【解题思路】三个 if 是并列关系而非 else if，需要依次独立判断每个条件，条件为真时 count 加 1。\n【逐步推理】x=5：第 1 个条件 5>3 为真，count 从 0 变 1；第 2 个条件 5>4 为真，count 从 1 变 2；第 3 个条件 5>5 为假，count 不变。最终 count=2。\n【其他选项为何错】0 相当于一次分支都没进入；1 只累加了两个成立条件中的一个；3 错误地认为三个条件全部成立，但 5>5 显然为假。"
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
          "explanation": "【解题思路】C++ 的 else 就近配对规则：else 与离它最近的、尚未配对的 if 组成一对，缩进不影响配对。\n【逐步推理】代码中 else 之前最近的未配对 if 是内层的 if (b > 0)。外层的 if (a > 0) 的语句体就是整个内层 if，内层 if 尚未与 else 配对，因此 else 属于内层 if。只有当 a>0 为真且 b>0 为假时才执行 cout << “2”。\n【其他选项为何错】“外层 if” 错，else 不与外层 if 配对；“两个都匹配” 错，一个 else 只能匹配一个 if；“编译错误” 错，这是合法代码，不会编译失败。"
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
          "explanation": "【解题思路】先分别计算两个比较表达式，再用逻辑与 && 连接，两者都为真才进入 if。\n【逐步推理】x=3：3>2 为 true，3<5 为 true，true && true = true，条件成立，执行 cout << “Yes”，else 分支被跳过。\n【其他选项为何错】No 是条件为假时才输出；YesNo 不会出现，if-else 只会执行一个分支；代码语法正确，不会编译错误。"
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
          "explanation": "【解题思路】三目运算符 cond ? a : b 的含义：条件为真取冒号左边的值，为假取冒号右边的值。\n【逐步推理】a=10，b=20，(a>b) 即 10>20 为 false，所以取冒号右边的 b=20，赋给 max，cout 输出 20。\n【其他选项为何错】10 是三目条件为真时才取的 a 值，条件为假不会取；30 是 a+b 的和，与本题无关；代码没有语法错误，不会编译失败。"
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
          "explanation": "【解题思路】判断 C++ 中 if 的条件表达式是否允许为 int 类型。\n【逐步推理】C++ 中条件表达式的类型可以是算术类型、指针等。int 表达式作为条件时会被隐式转换：非零值转换为 true，零转换为 false。因此 int 类型完全可以直接用作 if 条件，例如 if(3)、if(x) 都是合法的，所以该说法正确。\n【其他选项为何错】“错误” 认为条件必须是 bool 类型，但 C++ 允许整数经隐式转换充当条件，题目说法与 C++ 语法一致。",
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
          "explanation": "【解题思路】先分别求出 14%3 与 14%7，再判断 P%3 || P%7 的真假，从而决定走 if 还是 else 分支。\n【逐步推理】P=14：14%3=2（非零，为真），14%7=0（零，为假）。|| 只要有一个操作数为真结果即为真，所以进入 if 分支。printf 的第一个格式符 %d 对应 P%3=2，第二个 %d 对应 P%7=0，因此输出内容为“第5行2, 0”（题目选项中写作“第5行代码2, 0”），选对应选项。\n【其他选项为何错】“第5行代码1, 0” 错，P%3 是 2 不是 1；“第7行” 的两个选项对应 else 分支，但 P%3||P%7 为真，不会进入 else；且 else 中 %2d 对应 P%3&&P%7=2&&0=0，即便进入也应输出 0 而非 1。",
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
          "explanation": "【解题思路】“能被3整除的偶数”要求两个条件同时满足：能被 2 整除（偶数）且能被 3 整除，用逻辑与 && 连接。\n【逐步推理】偶数即 N%2==0；能被 3 整除即 N%3==0。两个条件都要成立，应填 (N%2==0)&&(N%3==0)，即选项 D。\n【其他选项为何错】(N%2)&&(N%3) 中 N%2 为真表示 N 是奇数、N%3 为真表示不能被 3 整除，与题意完全相反；(N%2==0)&&(N%3) 中 N%3 为真表示不能被 3 整除，不满足；(N%2)&&(N%3==0) 表示“奇数且能被 3 整除”，把偶数条件弄反了。",
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
          "explanation": "【解题思路】按顺序检查 if、else if、else，一旦某个条件为真就执行对应输出，并跳过后面所有分支。\n【逐步推理】N=21：第一个条件 21%3==0 为真（21 能被 3 整除），直接输出“能被3整除”。之后的 else if 和 else 分支都不再执行。\n【其他选项为何错】虽然 21 同时也能被 7 整除，但 if-else if 结构互斥，第一个条件成立后后面的条件不再判断，不会输出“能被7整除”，更不会同时输出两个；21 能被 3 整除，所以“不能被3和7整除”也不可能。",
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
          "explanation": "【解题思路】检查 break 是否适用于 for 循环。\n【逐步推理】break 的作用是跳出当前循环或 switch，在 C++ 中 for、while、do-while 三种循环内部都可以使用 break。题目说“break 适用于 while 但不适用于 for”，与语法不符，故该说法错误。\n【其他选项为何错】“正确” 认为 for 里不能写 break，但 for 循环中同样可以用 break 提前结束循环，这是 C++ 的合法用法。",
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
          "explanation": "【解题思路】判断 for 循环是否也可能构成死循环。\n【逐步推理】for 循环的初始化、条件、更新三个部分都可以省略或写成恒真条件。例如 for(;;) 没有条件，等价于条件永远为真；for(int i=0; i<10; ) 缺少更新语句，i 始终为 0，条件恒成立。所以 for 循环同样可能是死循环，题目说法错误。\n【其他选项为何错】“正确” 认为 for 不会死循环，但省略条件或更新部分的 for 完全可以无限循环，死循环并非 while 独有。",
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
          "explanation": "【解题思路】位增数从高位到低位逐渐增大，等价于从低位到高位逐渐减小。补全处要先初始化 n2 为当前最低位数字，并去掉该位，使循环可以逐位比较。\n【逐步推理】以 N=123 为例验证选项 D（n2=N%10, N/=10）：n2=3，N=12。第 1 次循环 n1=2，2>=3 为假；n2=2，N=1。第 2 次循环 n1=1，1>=2 为假；n2=1，N=0，循环结束输出 1，正确。\n【其他选项为何错】A 只取个位但不缩小 N，循环里永远取同一个末位 3，第一次比较 3>=3 就输出 0；B 只做 N/=10，n2 从未初始化，属未定义行为；C 把 N/10（前两位组成的数）赋给 n2 且 N%=10 后只剩一位，无法正确逐位比较，例如 N=121 时会被误判为位增数。只有 D 同时完成了初始化 n2 和缩小 N。",
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
          "explanation": "【解题思路】区分“条件判断关键字”与“循环关键字”。\n【逐步推理】if 根据条件表达式的真伪决定是否执行某段代码，是 C++ 中最基础、最常用的条件判断关键字，所以选 if。switch 虽然也用于多分支条件判断，但本题考察的是条件判断的一般性关键字，if 是最佳答案。\n【其他选项为何错】for 和 while 都是循环语句关键字，用于重复执行一段代码，不是用于条件判断的关键字。"
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
          "explanation": "【解题思路】判断 x>3 是否成立，成立则执行大括号内的语句。\n【逐步推理】x=5，5>3 为真，执行 if 语句块中的 cout << “yes”，输出 yes。代码没有 else 分支，因此没有其他输出。\n【其他选项为何错】no 需要有 else 分支才会输出，代码中没有；条件成立必有输出，不会“什么也不输出”；代码语法正确，不会编译错误。"
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
          "explanation": "【解题思路】检查 C++ 中 if 条件语法的书写要求。\n【逐步推理】C++ 语法规定 if 后面的条件表达式必须用圆括号 ( ) 括起来，写成 if(条件) 的形式，这是强制要求，不能省略。因此“if 语句的条件必须用小括号括起来”的说法正确。\n【其他选项为何错】“错误” 认为条件可以不写括号，但去掉括号会直接导致语法错误，程序无法通过编译。",
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
          "explanation": "【解题思路】通过 n%2==0 判断 n 的奇偶性，成立走 if 分支，不成立走 else 分支。\n【逐步推理】n=10，10%2=0，0==0 为真，说明 10 是偶数，执行 if 分支输出 even，else 分支不执行。\n【其他选项为何错】odd 是奇数分支的输出，10 是偶数不会走该分支；10 是变量 n 的数值，代码输出的是判断结果字符串而不是 n 的值；代码没有报错。"
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
          "explanation": "【解题思路】识别 == 运算符的含义，并与赋值运算符 = 区分开。\n【逐步推理】== 是比较运算符，用于判断左右两边的值是否相等：相等返回 true，不相等返回 false。因此选“判断两边是否相等”。\n【其他选项为何错】“赋值” 是单个 = 的作用；两个等号不表示“不等”，那是 != 运算符；“将两边连接” 是字符串拼接的概念，与 == 无关。"
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
          "explanation": "【解题思路】比较 a 与 b 的大小，a>b 为假时执行 else 分支。\n【逐步推理】a=3，b=5，3>5 为假，所以不执行 cout << “a”，而是执行 else 分支输出 “b”。\n【其他选项为何错】a 是条件成立时才输出的字符；3 和 5 是变量的数值，而代码输出的是字符串 “a” 或 “b”，不会输出变量本身的数值。"
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
          "explanation": "【解题思路】判断 else 是否为 if 语句的必需部分。\n【逐步推理】C++ 中 if 语句可以独立使用，例如 if(条件) 语句; 完全可以不写 else，else 只是可选的补充分支。因此“if 后面可以不写 else”的说法正确。\n【其他选项为何错】“错误” 认为 if 必须与 else 配套使用，但 C++ 语法明确规定 else 是可选的，不写 else 完全合法。",
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
          "explanation": "【解题思路】记忆并识别 C++ 中“大于或等于”运算符的写法。\n【逐步推理】C++ 中“大于或等于”写作 >=，先写大于号 >，再写等号 =，合在一起表示“不小于”，因此选 >=。\n【其他选项为何错】> 只表示严格大于，不包含相等的情况；=> 和 =>= 都不是 C++ 的合法运算符，写法顺序错误，无法编译。"
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
          "explanation": "【解题思路】判断 score>=60 是否成立，成立则输出 pass。\n【逐步推理】score=85，85>=60 为真，执行 if 后面的 cout << “pass”，输出 pass。代码没有 else 分支，所以没有其他输出。\n【其他选项为何错】fail 需要 else 分支才会输出，代码中没有；条件成立必有输出，不会“什么也不输出”；85 是 score 的值，而代码输出的是字符串 “pass” 而非数值。"
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
          "explanation": "【解题思路】检查 else 的语法要求：else 后是否需要跟条件。\n【逐步推理】else 是 if 条件不成立时的默认分支，后面直接跟语句或语句块，不需要也不能写条件。需要带条件的是 else if。因此“else 后面也需要加条件”的说法错误。\n【其他选项为何错】“正确” 混淆了 else 与 else if 的写法，else 本身不带条件，只有 else if 才需要条件。",
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
          "explanation": "【解题思路】根据 x 的正、负、零三种情况走互斥的三个分支，最多执行一个。\n【逐步推理】x=0：x>0 为假，不输出 positive；x<0 也为假，不输出 negative；两个条件都不满足，进入最后的 else，输出 zero。\n【其他选项为何错】positive 需要 x>0，negative 需要 x<0，而 x=0 两者都不满足；“positive和zero” 不可能，if-else if-else 分支互斥，只会执行其中一个。"
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
          "explanation": "【解题思路】先分别计算两个比较表达式，再按逻辑与 && 的规则求值。\n【逐步推理】(3>2) 为 true，(5<4) 为 false。true && false = false，bool 类型的 false 用 cout 输出为 0，所以选 0（false）。\n【其他选项为何错】1（true）需要两个条件都为真，但 5<4 为假；代码没有语法问题，不会编译错误；逻辑与的结果只有 0 或 1 两种，不可能是 2。"
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
          "explanation": "【解题思路】用字符的 ASCII 码范围判断 ch 是小写字母、大写字母还是其他字符。\n【逐步推理】ch='A'。第一个条件 ch>='a' 即 'A'>='a' 为假（'A' 的 ASCII 码小于 'a'），进入 else if；第二个条件 'A'>='A' 且 'A'<='Z' 都成立，输出 uppercase。\n【其他选项为何错】lowercase 是小写字符才会输出，'A' 是大写；other 需要两个条件都为假，但 'A' 落在大写字母范围内；代码没有编译错误。"
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
          "explanation": "【解题思路】判断整数直接作为条件时，C++ 的真伪转换规则。\n【逐步推理】C++ 中整数作为条件时会被隐式转换：非零值转换为 true，零转换为 false。if(5) 中 5 是非零值，被视为 true，条件成立。因此“if(5) 的条件被视为 true”的说法正确。\n【其他选项为何错】“错误” 认为 5 不能作为条件，但 C++ 允许整数经隐式转换充当条件，if(5) 是合法且恒真的写法。",
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
          "explanation": "【解题思路】逐个计算四个逻辑表达式的值，注意比较运算符结果优先于逻辑运算符，&& 优先于 ||，! 优先级最高。\n【逐步推理】A：(10>5)&&(3>7)=true&&false=false。B：(10<5)||(3>7)=false||false=false。C：(10>5)||(3>7)=true||false=true。D：!(10>5)=!true=false。只有 C 的结果为 true。\n【其他选项为何错】A 两个条件一真一假，&& 要求全真；B 两个条件全假，|| 结果仍为假；D 对真值取反得到假。"
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
          "explanation": "【解题思路】三目运算符 cond ? a : b，先判断条件，条件为真取冒号左边的值。\n【逐步推理】x=10，x>5 即 10>5 为 true，所以取冒号左边的 100，y=100，cout 输出 100。\n【其他选项为何错】10 是 x 本身的值，不是三目运算的结果；5 是参与比较的常量；200 是条件为假时才取的值，条件为真不会取。"
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
          "explanation": "【解题思路】理解 switch 中 case 缺少 break 时的“穿透”行为。\n【逐步推理】case 执行完后若没有 break，程序不会退出 switch，而是继续执行下一个 case（或 default）里的语句，这称为穿透，直到遇到 break 或 switch 自然结束。所以选“会继续执行下一个case的代码（穿透）”。\n【其他选项为何错】漏写 break 是合法的 C++ 语法，不会编译错误；也不会导致程序崩溃；更不会跳过整个 switch，switch 仍从匹配的 case 开始执行。"
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
          "explanation": "【解题思路】先计算 grade/10 的整数商，再在 switch 中定位匹配的 case。\n【逐步推理】grade=85，85/10=8（整数除法，结果取整），匹配 case 8，执行 cout << “B” 后遇到 break，退出 switch，因此输出 B。\n【其他选项为何错】A 需要商为 9 或 10；C 需要商为 7；D 是没有任何 case 匹配时走 default 的结果，而这里 case 8 已被匹配。"
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
          "explanation": "【解题思路】检查 switch 的 case 标签能否使用变量或运行时计算的值。\n【逐步推理】C++ 要求 case 后的值必须是编译期就能确定的整型常量表达式，例如字面量、const 常量、枚举值等，不能是变量或运行时才能算出的值，否则编译错误。因此“case 后面的值必须是常量表达式”的说法正确。\n【其他选项为何错】“错误” 认为 case 后可以用变量，但这是 C++ 语法不允许的，会导致编译失败。",
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
          "explanation": "【解题思路】按顺序判断 if 与 else if 的条件，都不成立时走最后的 else。\n【逐步推理】a=3，b=4：a>b 即 3>4 为假，进入 else if；b>c 即 4>5 为假，进入 else，输出 c 的值 5。\n【其他选项为何错】3 需要 a>b 为真；4 需要 b>c 为真；“345” 不可能，因为 if-else if-else 分支互斥，只输出一个值。"
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
          "explanation": "【解题思路】先算 x+y 并与 z 比较，再算 x*y 并与 z 比较，按分支顺序求值。\n【逐步推理】x=3，y=5，z=9：x+y=8，8>9 为假，进入 else if；x*y=15，15>9 为真，输出 B。\n【其他选项为何错】A 需要 8>9 成立，显然不成立；C 需要两个条件都为假，但 x*y>z 为真；AB 不可能，分支互斥，只输出一个字符。"
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
          "explanation": "【解题思路】按 ch 的值定位匹配的 case，注意没有 break 时会产生穿透。\n【逐步推理】ch='2' 匹配 case '2'，输出 two；该 case 后没有 break，穿透到 case '3'，输出 three；case '3' 后有 break，退出 switch。最终输出 twothree。\n【其他选项为何错】two 忽略了穿透到 case '3' 的 three；“twothreeother” 忽略了 case '3' 的 break 会阻止继续执行 default；“onetwothree” 需要 ch='1' 才可能，且 ch='2' 不会经过 case '1'。"
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
          "explanation": "【解题思路】逐层判断条件找出最大值，若所有条件都为假则由 else 兜底。\n【逐步推理】a=1，b=2，c=3：a>b&&a>c 即 1>2 且 1>3，为假；b>c 即 2>3，为假；执行 else，max=c=3，输出 3。\n【其他选项为何错】1 需要 a 同时大于 b 和 c；2 需要 b>c；6 是 a+b+c 的和，与求最大值的逻辑无关。"
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
          "explanation": "【解题思路】比较三元表达式与 if-else 的逻辑功能是否等价。\n【逐步推理】a>b?a:b 与 if(a>b) 取 a else 取 b，都是“条件为真取 a，为假取 b”，对相同的输入产生相同的结果，功能上等价。因此该说法正确。\n【其他选项为何错】“错误” 认为二者不等价，但两者在逻辑功能上完全一致。需要注意二者仍有语法差异（三元要求两个分支都是表达式且类型兼容，if-else 更灵活），但这不影响“功能上完全等价”这一判断。",
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
          "explanation": "【解题思路】按顺序检查 if 与 else if 的条件，一旦命中就执行并结束整个 if-else if 链。\n【逐步推理】x=15：x>20 为假；x>10 即 15>10 为真，输出 B，并结束整条链，不再检查后面的 x>5。因此输出 B。\n【其他选项为何错】A 需要 x>20；C 虽然 15>5 也为真，但前面的 x>10 已经命中，else if 链命中后不再继续判断；D 需要所有条件都为假，而 x>10 为真。"
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
          "explanation": "【解题思路】按 n 的值定位匹配的 case，注意 switch 内没有 break 时会发生穿透。\n【逐步推理】n=3 匹配 case 3，输出 3；case 3 后没有 break，穿透到 case 4，输出 4；case 4 后没有 break，但 switch 到此结束（没有 default），之后执行 cout << endl 换行。最终输出 34。\n【其他选项为何错】3 忽略了穿透输出的 4；1234 需要 n=1 并一路穿透，而 n=3 从 case 3 开始，不会经过 case 1、2；123 需要 n=1 且穿透到 2、3，与输入 3 不符。"
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
          "explanation": "【解题思路】比较“逻辑与条件”与“嵌套的两个 if”的真值关系。\n【逐步推理】if(a>0 && b>0) 要求两个条件同时为真才进入；嵌套的两个 if 也是外层为真后再判断内层，同样要求两个条件同时为真。两者的真值表一致，逻辑效果上等价，因此该说法正确。\n【其他选项为何错】“错误” 认为二者不等价，但 && 与嵌套 if 在“两个条件都必须成立”这一点上完全相同，不会出现一个为真另一个为假的情况。",
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
          "explanation": "【解题思路】先用 else 就近配对规则确定 else 属于哪个 if，再按执行顺序分析输出。\n【逐步推理】代码缩进具有迷惑性，但 C++ 规定 else 与最近的未配对 if 配对，即内层 if(x>4)。x=5：x>3 为真，进入内层；x>4 为真，输出 A；else 属于内层 if，条件为真故不执行；最后执行 cout << “C”，输出 C。最终结果为 AC。\n【其他选项为何错】BC 需要外层 if 为假走 else，但 x>3 为真不会执行 else；“ABC” 多出了不存在的 B；A 忽略了最后一行 cout << “C” 的输出。"
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
          "explanation": "【解题思路】检查 switch 的表达式是否允许 string 类型。\n【逐步推理】C++ 中 switch 的表达式必须是整型或能转换为整型的类型，例如 int、char、short、bool、enum 等，不能是浮点数，也不能是 string。因此“switch 的表达式可以是字符串类型”的说法错误。\n【其他选项为何错】“正确” 认为 string 可用于 switch，但 C++ 不支持，对字符串的比较需要改用 if-else 语句。",
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
          "explanation": "【解题思路】把闰年规则写成逻辑表达式：能被 4 整除且不能被 100 整除，或能被 400 整除，注意运算符优先级。\n【逐步推理】选项 A 为 (year%4==0)&&(year%100!=0)||(year%400==0)。由于 && 优先级高于 ||，它等价于 ((year%4==0)&&(year%100!=0))||(year%400==0)，正好对应闰年规则。验证：2000 能被 400 整除，为真，是闰年；1900 满足 %4==0 但 %100!=0 为假，第一部分为假，%400==0 也为假，整体为假，不是闰年，正确。\n【其他选项为何错】B 把 || 放在最前，任何能被 4 整除的年份（包括 1900 等非闰年）都为真；C 把“不能被 100 整除”错写成“能被 100 整除”，使 1900 之类年份被误判为闰年；D 用 %4!=0 否定掉了“能被 4 整除”这一必要条件，判断结果完全错误。"
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
          "explanation": "【解题思路】嵌套三元表达式从外层到内层逐步求值。\n【逐步推理】a=2，b=3，c=1。外层：a>b 即 2>3 为假，取冒号右边的表达式 b>c?b:c；内层：b>c 即 3>1 为真，取 b=3。result=3，输出 3。\n【其他选项为何错】2 是外层条件为真时才取的 a 值；1 是 c 的值，需要内层条件为假才取；6 是三个数的和，与三元逻辑无关。"
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
          "explanation": "【解题思路】模拟无 break 的 switch 穿透过程，统计输出。\n【逐步推理】n=3 匹配 case 3，输出 1；case 3 后无 break，穿透到 case 2，输出 1；case 2 后无 break，继续穿透到 case 1，输出 1。整个 switch 共输出三次 1，与题目“输出是 3 个 1”的说法一致，因此该说法正确。\n【其他选项为何错】“错误” 认为不会输出 3 个 1，但 switch 在没有 break 时会一直穿透执行直到 switch 结束，这里恰好输出三个 1。",
          "isJudge": true
        }
      ]
    },
    "kp1_05": {
      "title": "循环结构",
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
          "explanation": "【解题思路】考查三种基本循环结构的特点，关键是判断哪一种循环把初始化、条件判断、循环变量更新集中管理，最适合循环次数已知的场景。【逐步推理】for 循环在头部一次性写出 for(初始化; 条件; 更新)，循环次数明确时写法紧凑、不容易漏掉循环变量更新；while 与 do-while 需要在循环体内手动维护循环变量，次数已知时反而容易出错。【其他选项为何错】while 适合条件型循环，循环变量更新要写进循环体，容易漏写造成死循环；do-while 适合先执行后判断的场景；三种循环适用场景不同，所以三种都一样也错误。"
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
          "explanation": "【解题思路】考查 do-while 与 while 的关键区别：do-while 无论条件是否成立都会先执行一次循环体。【逐步推理】进入 do 后先执行 cout << i，输出 1，再执行 i++，i 变为 2；随后判断 while (i > 5)，即 2 > 5 为假，循环结束。整个程序只输出一个 1。【其他选项为何错】无输出错误，do-while 至少执行一次；1 2 3 4 5 错误，条件 i>5 从一开始就不满足，最多只执行一次；编译错误错误，代码语法完全合法。"
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
          "explanation": "【解题思路】考查 continue 与 break 的区别：continue 跳过本次循环剩余语句直接进入下一次迭代，break 终止整个循环。【逐步推理】i=1 不满足两个 if，输出 1；i=2 满足 if(i==2) 执行 continue，跳过输出；i=3 正常输出 3；i=4 满足 if(i==4) 执行 break 跳出循环，i=5 不再执行。最终输出 1 3。【其他选项为何错】1 3 5 错误，i=4 已 break，i=5 不会执行；1 2 3 错误，i=2 被 continue 跳过；1 2 3 4 错误，i=2 被跳过且 i=4 触发 break 不输出。"
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
          "explanation": "【解题思路】判断死循环的关键：循环变量是否会在循环体内被修改，循环条件是否有可能变为假。【逐步推理】选项 C 中 while(i<10) 的循环体只有 cout<<i，i 从未被修改，始终为 0，条件 0<10 永远为真，循环永远无法退出，构成死循环。【其他选项为何错】A 是标准 for 循环，i 每次加 1，到 10 时结束，正常退出；B 循环体内有 i++，i 能逐渐增加到 10 退出；D 是 do-while，循环体内 i++ 使 i 最终达到 10 退出，不会死循环。"
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
          "explanation": "【解题思路】嵌套循环的执行次数等于各层循环次数的乘积，内层循环体的总执行次数等于外层次数乘以内层次数。【逐步推理】外层 for(i=0;i<3;i++) 执行 3 次；每一次外层循环中，内层 for(j=0;j<4;j++) 完整执行 4 次。因此内层循环体共执行 3 乘 4 等于 12 次。【其他选项为何错】3 只算了外层次数，4 只算了内层次数，7 错误地把两个次数相加而不是相乘。"
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
          "explanation": "【解题思路】i 从 0 到 99 共 100 个数，i%10 得到的是 i 的个位数字，即 0,1,2,...,9 循环出现。【逐步推理】i 从 0 到 9 时 i%10 分别为 0,1,...,9，和为 45；i 从 10 到 19、20 到 29、直至 90 到 99 同理，每 10 个数一组，每组和都是 45。100 个数正好 10 组，总和为 45 乘 10 等于 450。【其他选项为何错】4950 是 0+1+...+99 即所有 i 本身之和；5050 是 1+2+...+100 之和；100 只是循环次数，不是累加结果。",
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
          "explanation": "【解题思路】判断是否死循环，看循环条件能否变为假，以及 continue 对执行流程的影响。【逐步推理】while(1) 的条件 1 永远为真；continue 的作用是跳过本次循环剩余语句并回到条件判断处，条件判断后仍然是 1 为真，于是再次进入循环体，循环永远无法退出。所以该语句确实会死循环，说法正确。【其他选项为何错】若把 continue 换成 break 则会立即退出循环，但 continue 不改变循环条件，不能使循环结束，因此不能说该语句不会死循环。",
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
          "explanation": "【解题思路】考查 C++ 中 for 循环变量作用域规则。【逐步推理】for(int i=0; i<10; i++) 中变量 i 在 for 的初始化部分声明，其作用域从声明处延伸到整个 for 语句结束，包括循环体与更新表达式，循环结束后 i 即被销毁。在循环体外访问 i 属于使用未声明的标识符，编译器会报错。所以说法正确。【其他选项为何错】若改为在 for 之前声明 i，例如 int i; for(i=0;...)，则循环外可以访问 i，但本题变量是在 for 中声明的，情况不同。",
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
          "explanation": "【解题思路】i 从 5 到 95 每隔 5 取一个数；i 为偶数时 continue 跳过计数，只统计奇数的 5 的倍数；break 条件要确认是否真的会在范围内触发。【逐步推理】i 的取值序列为 5,10,15,...,95 共 19 个。i 为偶数即 10,20,...,90 被 continue 跳过，剩下 5,15,25,35,45,55,65,75,85,95 共 10 个，每个都使 tnt 加 1。再看 break 条件 i 能被 3 整除且能被 7 整除，即 i 是 21 的倍数，范围为 21,42,63,84，但这些数都不是 5 的倍数，在 i 取 5 的倍数时永远不会满足，所以循环全程没有 break。tnt 等于 10。【其他选项为何错】500 与 450 是把循环变量累加求和的干扰结果；1 误以为循环中途会 break 而只加一次。",
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
          "explanation": "【解题思路】for 循环的初始化与更新部分为空，只有条件 i<10，等价于 while(i<10)；Sum += i++ 是先用当前 i 参与加法，再让 i 自增。【逐步推理】i 从 0 开始，每次循环 Sum 先加上当前 i 再使 i 加 1：i 依次为 0,1,...,9 共 10 次，Sum=0+1+...+9=45；最后一次循环结束后 i++ 使 i=10，条件 10<10 为假退出。所以输出 10 45。【其他选项为何错】9 45 误以为循环只执行 9 次；10 55 误把 Sum 算成 0+...+10=55；11 55 叠加了两处误解。",
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
          "explanation": "【解题思路】for 循环本质是初始化、条件判断、循环体、更新四部分的结构化写法，可以用 while 组合等价表达。【逐步推理】for(init; cond; update){body} 的执行流程是：先执行 init，再循环判断 cond，条件为真执行 body，随后执行 update，再回到条件判断。写成 init; while(cond){body; update;} 后执行流程完全一致，二者等价。所以说法正确。【其他选项为何错】部分学生误认为 for 有 while 无法表达的语法，实际上 for 只是语法糖，任何 for 都能改写为等价的 while。",
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
          "answer": 2,
          "explanation": "【解题思路】注意 for 循环的更新表达式 i++ 在每次循环体结束后执行，循环退出时 i 的值比最后一次进入循环的值多 1。【逐步推理】i 从 1 开始，循环条件 i<10：当 i=1 到 9 时条件成立，循环体 N+=1 共执行 9 次，所以 N=9；当 i=9 的那一次循环结束后执行 i++ 使 i=10，再判断 10<10 为假，循环退出。因此退出时 i=10，输出 N+i=9+10=19。【其他选项为何错】20 是把循环次数误认为 10 且退出时 i 误认为 10 的错误组合；18 误以为循环退出时 i 仍为 9；54 是无关干扰项。正确答案是 19，对应下标 2。",
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
          "explanation": "【解题思路】continue 的作用是跳过本次循环剩余语句，什么时候跳过通常由 if 判断来决定。【逐步推理】continue 如果无条件出现，每次循环都会跳过剩余语句，循环体后半部分永远不会执行，没有实际使用价值。实际编程中 continue 总是配合 if 等条件语句，满足某种条件时才执行 continue，跳过该次循环剩余部分。所以 continue 通常与 if 配合使用的说法正确。【其他选项为何错】continue 也可以写在使用条件表达式的场合，但核心仍是条件触发，因此说不配合 if 反而是不合理的。",
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
          "explanation": "【解题思路】比较三种循环结构判断条件的时机：for 与 while 先判断后执行，do-while 先执行后判断。【逐步推理】do-while 无论条件真假都先执行一次循环体，再检查条件决定是否继续；for 与 while 若初始条件不满足，循环体一次都不执行。因此至少执行一次循环体的只有 do-while 循环。【其他选项为何错】for 循环和 while 循环在条件一开始为假时可能一次都不执行；以上都可以错误，因为只有 do-while 具有先执行再判断的特性。"
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
          "explanation": "【解题思路】循环变量 i 从 1 到 3，把 i 依次累加到 s 中。【逐步推理】i=1 时 s=0+1=1；i=2 时 s=1+2=3；i=3 时 s=3+3=6；i=4 时 4<=3 为假，循环退出。所以 s=6。【其他选项为何错】3 只是最后一次进入循环的 i 值；5 是累加过程的中间结果误算；4 是循环退出时 i 的值，都不是累加和。"
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
          "explanation": "【解题思路】输出 1 到 5 的边界要求：从 1 开始且包含 5，即条件必须用 i<=5 而不能用 i<5。【逐步推理】选项 B 中 i 从 1 开始，条件 i<=5，每次加 1，依次输出 1,2,3,4,5，符合要求。A 用 i<5 只输出到 4，漏掉 5；C 从 i=0 开始多输出一个 0；D 从 i=2 开始漏掉 1。【其他选项为何错】如逐步推理所述，A 少 5，C 多 0，D 少 1，只有 B 恰好输出 1 到 5。"
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
          "explanation": "【解题思路】考查 while 循环的标准语法格式。【逐步推理】while 循环的格式为 while (条件) { 循环体 }，执行时先判断条件，条件为真才执行循环体，执行完再回到条件判断。选项 A 完全符合该格式。【其他选项为何错】B 把关键字 while 与循环体的位置写颠倒；C 写成了 do while 的形式，既缺少 do 关键字又缺少分号规则，不是 while 循环的正确写法；D 中 loop 不是 C++ 的循环关键字，语法错误。"
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
          "explanation": "【解题思路】注意 while 循环中 i++ 与条件判断的顺序，i 是在循环体内自增。【逐步推理】i 从 0 开始，0<5 成立进入循环 i 变为 1；1<5 成立进入循环 i 变为 2；依次类推，当 i=4 时 4<5 成立，循环体内 i++ 使 i=5；此时判断 5<5 为假，循环结束。输出 i 的值为 5。【其他选项为何错】4 是最后一次进入循环时的 i 值；6 误以为 i 又多加了一次；死循环错误，i 在循环体内自增，能够正常退出。"
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
          "explanation": "【解题思路】for 循环的更新部分是 i+=2，i 每次增加 2，跳过奇数直接取偶数。【逐步推理】i 的取值序列为 0,2,4,6,8，条件 i<10 成立时依次输出；i=10 时 10<10 为假退出。所以输出 0 2 4 6 8。【其他选项为何错】0 1 2 3 4 5 6 7 8 9 是步长为 1 的输出；1 3 5 7 9 起点和步长都不对；2 4 6 8 10 少了 0 且多输出 10。"
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
          "explanation": "【解题思路】嵌套循环内层每执行一次输出一个星号，总星数等于外层次数乘以内层次数。【逐步推理】外层 i 取 0,1,2 共 3 次；每一次外层循环中内层 j 取 0,1,2,3 共 4 次，每次输出一个星号。所以总共输出 3 乘 4 等于 12 个星号。【其他选项为何错】7 是 3 加 4 的和，3 是外层次数，4 是内层次数，都不是正确的乘积结果。"
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
          "explanation": "【解题思路】break 在 i>10 时触发，触发之前 i=1 到 10 均正常输出。【逐步推理】i=1 到 10 时 if(i>10) 为假，执行 cout<<i 正常输出；i=11 时 i>10 成立，执行 break 跳出整个循环，后面的 i 不再执行。所以程序输出 1 2 3 ... 10 后停止循环。【其他选项为何错】跳过 i=10 的输出错误，i=10 时条件 10>10 不成立仍会输出；输出 1 到 9 后停止错误，10 也会被输出；输出 1 到 100 错误，遇到 break 循环提前终止。"
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
          "explanation": "【解题思路】continue 在 i==3 时跳过本次输出，其余 i 正常输出。【逐步推理】i=1、2 时 if(i==3) 为假，正常输出；i=3 时 if(i==3) 成立，执行 continue 跳过 cout，直接进入下一次循环；i=4、5 正常输出。最终输出 1 2 4 5。【其他选项为何错】1 2 3 4 5 把 continue 当成了无效语句；1 2 误以为 continue 后循环结束；3 只取了被跳过的那次输出，都不正确。"
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
          "explanation": "【解题思路】result 初始为 1，循环中 result 乘等于 i，即把 i 依次乘进 result。【逐步推理】i 依次为 1,2,3,4,5，result 依次为 1 乘 1、乘 2、乘 3、乘 4、乘 5，最终等于 120，即 5 的阶乘。【其他选项为何错】5 的 5 次方应是 5 个 5 连乘，与代码不符；1 到 5 的和应用加法且初值为 0；1 到 5 的差没有对应的循环运算。"
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
          "explanation": "【解题思路】i 为偶数时 continue 跳过累加，只累加 1 到 10 中的奇数。【逐步推理】i 从 1 到 10，i%2==0 时 continue 跳过，只有 i 为奇数 1,3,5,7,9 时执行 sum+=i，sum=1+3+5+7+9=25。【其他选项为何错】30 是偶数之和 2+4+6+8+10；55 是 1 到 10 全部数字之和；20 是计算错误的干扰值。"
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
          "explanation": "【解题思路】do-while 先执行一次循环体再判断条件，关键在于判断条件 n>10 一开始就是假。【逐步推理】第一次进入循环体，cout<<n 输出 10，然后 n-- 使 n=9；判断 while(n>10) 即 9>10 为假，循环结束。整个 do-while 只执行了 1 次。【其他选项为何错】0 次错误，do-while 至少执行一次；10 次误把 n 的初值当作循环次数；死循环错误，n 在递减，条件会变为假正常退出。"
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
          "explanation": "【解题思路】a 无条件自增，b 只在 i 为奇数时自增，i 为偶数时被 continue 跳过。【逐步推理】循环执行 5 次，i 取 0,1,2,3,4，每次 a++，所以 a=5。i=0,2,4 时 i%2==0 执行 continue 跳过 b++；只有 i=1,3 时执行 b++，所以 b=2。输出 5 2。【其他选项为何错】5 3 误以为奇数有 3 个；4 2 误以为循环只执行 4 次；4 3 是两种错误叠加。"
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
          "explanation": "【解题思路】内层循环条件 j<i，即内层循环次数随外层 i 变化，内层每输出一行 count 就加 1。【逐步推理】i=0 时内层 j<0 不执行，输出 0 行；i=1 时 j=0 输出 1 行；i=2 时 j=0,1 输出 2 行；i=3 时 j=0,1,2 输出 3 行。总共输出 1+2+3=6 行，count=6。【其他选项为何错】10 是 1+2+3+4 的误算，但 i 最大只到 3；12 是 3 乘 4 的结果，混淆了乘与加；4 是外层的循环次数。"
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
          "explanation": "【解题思路】while 循环依赖循环体内改变条件相关变量来终止，本题中 i 从未被修改。【逐步推理】i 初始为 1，条件 i<=10 为真；循环体内只有 if(i%3==0) 输出 i，i 始终保持 1，条件 1<=10 永远为真，循环永远无法终止，形成死循环。应在循环体内添加 i++ 或等价语句使 i 增大。【其他选项为何错】语法错误错误，代码语法合法；正常输出 3 6 9 错误，i 不变只会反复输出 1；条件判断错误错误，条件本身没问题，问题是缺少循环变量更新。"
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
          "explanation": "【解题思路】n 每次除以 2，记录除以多少次后 n 变为 0。【逐步推理】n 的变化序列为 256、128、64、32、16、8、4、2、1、0，共除 9 次。每次循环 count++，n 除以 2，当 n=0 时条件 n>0 为假退出，所以 count=9。【其他选项为何错】8 误以为 2 的 8 次方等于 256 所以是 8 次，但除到 1 后还要再除一次才变为 0；7 是误算；256 是 n 的初值而非循环次数。"
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
          "explanation": "【解题思路】sum 累加 1+2+...+n，循环条件是 sum<=100，即 sum 首次超过 100 时停止并输出此时的 n。【逐步推理】依次累加：加到 n=13 时 sum=1+...+13=91，仍不超过 100，继续；再加 n=14 得 sum=105>100，循环退出，此时 n=14。所以代码求的是使 1+2+...+n 首次超过 100 的最小正整数 n。【其他选项为何错】求 1 到 100 的和错误，代码输出的是 n 而不是和；求等于 100 的 n 错误，退出时 sum 严格大于 100，而且 1+...+n=100 没有整数解；死循环错误，sum 单调递增必会超过 100。"
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
          "explanation": "【解题思路】x 每次翻倍，循环条件是 x<20。【逐步推理】x 的变化序列为 1、2、4、8、16、32。16<20 成立继续翻倍得 x=32；此时 32<20 为假，循环退出，最终 x=32。【其他选项为何错】16 是最后一次满足条件的值；64 多算了一次翻倍；20 误以为循环到 20 停止，但 x 是翻倍增长，不会恰好停在 20。"
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
          "explanation": "【解题思路】统计 1 到 100 中能被 10 整除的数的个数。【逐步推理】能被 10 整除的数个位为 0，从 10 开始每隔 10 一个：10、20、30、40、50、60、70、80、90、100，共 10 个。【其他选项为何错】9 漏算了 100；11 多算了一个数；100 是循环执行的总次数，而不是满足条件的个数。"
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
          "explanation": "【解题思路】嵌套循环输出 i 乘 j，最后一个输出的数字对应最后一次执行的 i 和 j 的值。【逐步推理】外层 i 从 1 到 5，内层 j 从 1 到 i。最后一次外层循环 i=5 时，内层 j 依次取 1,2,3,4,5，输出 5,10,15,20,25，最后一个数字是 25。【其他选项为何错】20 是最后一个数字之前的输出；15 和 5 也都是内层循环中的中间结果，不是最后一个。"
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
          "explanation": "【解题思路】循环累加 i 的平方，i 取 1,2,3,4。【逐步推理】sum=1 的平方加 2 的平方加 3 的平方加 4 的平方=1+4+9+16=30。【其他选项为何错】10 是 1+2+3+4 的和，没有平方；14 是 1+4+9 少加一项；20 是计算错误的干扰值。"
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
          "explanation": "【解题思路】统计 1 到 100 中能被 3 整除的数的个数。【逐步推理】能被 3 整除的数从 3 开始每隔 3 一个，100 除以 3 等于 33 余 1，所以共有 33 个，即 3,6,9,...,99。【其他选项为何错】34 把 100 也误算成 3 的倍数；30 和 31 都是计算错误的干扰值。"
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
          "explanation": "【解题思路】这是辗转相减法求最大公约数：两数不相等时用较大者减去较小者。【逐步推理】初始 m=15,n=9；m>n，执行 m=m-n=6；此时 m=6,n=9，n>m，执行 n=n-m=3；此时 m=6,n=3，m>n，执行 m=m-n=3；此时 m=n=3，while(m!=n) 条件为假退出，输出 3。3 正是 15 和 9 的最大公约数。【其他选项为何错】6 是计算中间过程的值；15 和 9 分别是 m、n 的初值，都不是最大公约数。"
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
          "explanation": "【解题思路】x 每次乘 2，直到 x 不小于 100 时退出循环。【逐步推理】x 的变化序列为 1,2,4,8,16,32,64,128。64<100 成立继续翻倍得 x=128；此时 128<100 为假，循环退出，输出 128。【其他选项为何错】64 是最后一次满足条件的值；256 多算了一次翻倍；100 误以为循环到 100 停止，但 x 翻倍不会恰好等于 100。"
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
          "explanation": "【解题思路】内层 j 从 1 到 i，外层第 i 次循环输出 i 个星号。【逐步推理】i=1 时内层执行 1 次输出 1 个星号；i=2 时输出 2 个；i=3 时输出 3 个；i=4 时输出 4 个。总共输出 1+2+3+4=10 个星号。【其他选项为何错】4 是外层循环次数；8 是 2 乘 4 的误算；16 是 4 乘 4 的结果，误把每层都当成 4 个。"
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
          "explanation": "【解题思路】do-while 循环的特点是先执行循环体再判断条件。【逐步推理】执行流程是：进入 do 后无条件先执行一次循环体，然后再判断 while 后面的条件，条件为真才继续下一次循环。因此无论条件真假，循环体都至少被执行一次，说法正确。【其他选项为何错】若题目换成 while 或 for，条件一开始为假时可能一次都不执行，但 do-while 没有这种情况。",
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
          "explanation": "【解题思路】break 的作用是终止最近一层 switch 或循环语句。【逐步推理】break 除了用于 for、while、do-while 循环外，还常用于 switch 语句中，每个 case 分支末尾用 break 跳出 switch 避免贯穿执行。因此 break 只能用在循环语句中的说法是错误的。【其他选项为何错】本题为判断题，两个选项中错误正确，因为 break 确实也可以用在 switch 中。",
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
          "explanation": "【解题思路】数清楚 for(int i=0; i<10; i++) 的循环体执行次数。【逐步推理】i 从 0 开始，只要 i<10 就执行循环体，i 依次为 0,1,2,...,9，共 10 次；i=10 时条件 10<10 为假退出。所以循环体确实执行 10 次，说法正确。【其他选项为何错】本题为判断题，说法正确；若条件改为 i<=10 则执行 11 次，但本题是 i<10。",
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
          "explanation": "【解题思路】区分 continue 与 break：continue 只跳过本次循环，break 才终止整个循环。【逐步推理】continue 执行后跳过当前循环体中 continue 之后的语句，直接进入下一次迭代的条件判断，整个循环是否结束仍由循环条件决定。终止整个循环的是 break。因此 continue 会终止整个循环的说法是错误的。【其他选项为何错】本题为判断题，错误正确；若题目说的是 break，则符合终止整个循环的描述。",
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
          "explanation": "【解题思路】break 只能作用于它所在的最近一层循环。【逐步推理】在嵌套循环中执行 break，只会跳出直接包含该 break 的那一层循环，也就是最内层循环；外层循环会继续执行下一次迭代。如果要一次性跳出多层循环，需要用标志变量配合判断。因此说法正确。【其他选项为何错】本题为判断题，说法正确；若误以为 break 能跳出所有外层循环则不符合 C++ 的规则。",
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
          "explanation": "【解题思路】求 1 到 100 中所有 3 的倍数之和。【逐步推理】3 的倍数从 3 到 99，共 33 个，可以写成 3 乘 (1+2+...+33)，1 到 33 的和等于 33 乘 34 除以 2 等于 561，所以总和为 3 乘 561 等于 1683。【其他选项为何错】1716、1533、1650 都是错误的估算或计算值，正确结果为 1683。"
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
          "explanation": "【解题思路】用试除法统计 2 到 100 之间的质数个数，内层 j 从 2 到 i 的平方根检查是否有因子。【逐步推理】内层条件 j*j<=i 即检查 i 是否有 2 到根号 i 之间的因子，若找到因子则 prime 置为 false 并 break；否则 i 是质数，count 加 1。2 到 100 之间的质数共有 25 个：2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97。【其他选项为何错】50 把奇数的个数当成质数个数；100 是所有数的个数；33 是 3 的倍数的个数，都不正确。"
        }
      ]
    },
    "kp3_04": {
      "title": "一维数组",
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
          "explanation": "【解题思路】此题考查 C++ 数组下标的起始值。数组是一组连续存储的同类元素，通过下标定位元素，下标的取值规则是本题的关键。\n【逐步推理】C++ 规定数组第一个元素的下标为 0。例如 int a[5] 的合法下标是 0、1、2、3、4，其中 a[0] 是第一个元素，a[4] 是最后一个元素，最后一个元素的下标恒为 n-1。因此“索引从哪个数字开始”的答案是 0。\n【其他选项为何错】选项“1”是部分编程语言或日常数数习惯的起始值，C++ 并不采用；选项“-1”根本不是合法的起始下标，任何数组都不会用负数作首元素下标；选项“由大小决定”错误，起始下标与数组大小无关，无论数组多大都从 0 开始。"
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
          "explanation": "【解题思路】此题考查 C++ 数组声明的标准语法。声明数组需要三个要素：元素类型、数组名、方括号中的元素个数，书写顺序固定。\n【逐步推理】C++ 定义数组的格式是“类型 数组名[元素个数];”。int a[5]; 表示定义一个名为 a、含 5 个 int 元素的数组，元素依次为 a[0] 至 a[4]，语法完全正确。\n【其他选项为何错】int a(5); 是函数式初始化，用于初始化单个变量，不是数组声明；int a{5}; 用列表初始化把 int 变量 a 初始化为 5，也不是数组；array int a[5]; 把关键字顺序写反，C++ 中没有这种声明语法，标准库数组容器应写作 array<int,5> a。"
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
          "explanation": "【解题思路】此题考查数组越界访问。访问数组元素时下标必须落在 0 到 n-1 的合法范围内，越界将导致未定义行为。\n【逐步推理】int a[3]={1,2,3} 中数组大小为 3，合法下标是 0、1、2，分别对应元素 1、2、3。a[3] 已经越过最后一个元素 a[2]，属于越界访问。C++ 对越界访问不提供任何保证，可能读到无关内存中的随机值、覆盖其他数据甚至导致程序崩溃，行为不可预期，因此是未定义行为。\n【其他选项为何错】“输出3”误认为下标从 1 开始，与 C++ 规定矛盾；“输出0”误以为越界会自动返回 0，实际并无此保证；“编译错误”不对，编译器一般不对数组越界做静态检查，越界是运行时问题而非语法错误。"
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
          "explanation": "【解题思路】此题考查数组部分初始化的补零规则。初始化列表元素少于数组大小时，剩余元素会被自动初始化。\n【逐步推理】int b[5]={1,2} 中初始化列表只给出两个值，b[0]=1、b[1]=2，剩下 b[2]、b[3]、b[4] 没有显式赋值。对于 int 类型数组，未赋值部分会自动补为 0，因此 b[4] 的值是 0。\n【其他选项为何错】“2”把最后一个显式初值当成 b[4] 的值，实际上 2 存于 b[1]；“未定义”错误，部分初始化时剩余元素确定补 0，与完全不初始化不同；“编译错误”错误，初始化列表元素少于数组大小是合法写法。"
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
          "explanation": "【解题思路】此题考查用 sizeof 运算符求数组元素个数的方法，关键是区分“整个数组的字节数”与“单个元素的字节数”。\n【逐步推理】sizeof(a) 返回整个数组占用的总字节数，sizeof(a[0]) 返回一个元素占用的字节数，二者相除得到元素个数。以 int a[5] 为例，sizeof(a) 为 20 字节、sizeof(a[0]) 为 4 字节，20 除以 4 得 5。这是 C/C++ 中求数组长度的标准做法。\n【其他选项为何错】a.length() 与 a.size() 都是 string、vector 等类型或容器的成员函数，普通内建数组没有成员方法，调用它们属于编译错误；sizeof(a) 单独使用得到的是总字节数，不是元素个数。"
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
          "explanation": "【解题思路】此题考查数组作为函数参数时的传递机制。理解数组名退化为指针是本知识点的核心。\n【逐步推理】把数组传给函数时，数组名在表达式中会退化为指向首元素的指针，函数形参实际接收的是 a[0] 的地址，而不是把整个数组复制一份。正因如此，函数内通过该指针读写元素，会直接作用到调用者的原数组上，且数组大小信息在传递中丢失，通常要另传一个长度参数。\n【其他选项为何错】“完整复制”错误，C++ 传数组按指针传递，不复制元素内容；“不能修改”错误，通过指针可以在函数内修改数组元素；“必须指定大小”错误，形参写成 int a[] 与 int* a 等价，大小并不作为类型的一部分。"
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
          "explanation": "【解题思路】此题考查数组下标的合法范围。大小为 n 的数组，下标从 0 到 n-1，共 n 个合法位置。\n【逐步推理】int a[5] 有 5 个元素，分别由 a[0]、a[1]、a[2]、a[3]、a[4] 访问，最后一个元素的下标是 5-1=4。所以有效下标范围是从 0 到 4。\n【其他选项为何错】“1~5”与“1~4”把起始下标当成 1，混淆了日常计数与 C++ 的从 0 计数；“0~5”多包含了 a[5]，而 a[5] 已经越界，不属于合法范围。",
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
          "explanation": "【解题思路】此题考查逻辑非运算符对值的两次取反效果。判断前先明确 ! 的运算规则：非零变 0、0 变 1，从而推算 !!N 的可能取值。\n【判断依据】! 把非零值变成 0、把 0 变成 1，因此 !!N 的结果只能是 0 或 1，不可能等于任意整数 N 的原值。以 N=5 为例：!N 得 0，!!N 得 1，1 不等于 5。只有当 N=0 或 N=1 时 !!N 才恰好等于 N，命题对一般 N 并不成立，故应判错误。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。由上述分析可知“!!N 的值也是 N 的值”以偏概全，应选择“错误”。",
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
          "explanation": "【解题思路】此题考查变量命名规则与关键字辨别。判断 cin 能否作变量名，关键是确认它是否属于 C++ 关键字或保留字。\n【判断依据】cin 只是标准输入流对象的名字，位于命名空间 std 中，并不是 C++ 关键字（int、if、for、return 等才是）。它由字母组成，符合“只能由字母、数字、下划线组成且不能以数字开头”的命名规则，因此可以作为变量名使用，虽然会遮蔽标准对象，实践中不推荐。命题成立，应判正确。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。cin 不是关键字且满足命名规则，命题成立，应选择“正确”而非“错误”。",
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
          "explanation": "【解题思路】此题考查 for 循环执行次数的统计。关键是列出 i 的每一次取值，并检查退出条件是否满足。\n【逐步推理】循环变量 i 从 0 开始，步长为 2，条件 i*i<64。逐次取值：i=0 时 0<64，i=2 时 4<64，i=4 时 16<64，i=6 时 36<64，这四次都满足条件，cnt 各加 1 变为 4；当 i=8 时 64<64 不成立，循环停止。最终 cnt=4。\n【其他选项为何错】“8”把 i 的最大取值当成计数，混淆了循环变量与计数器；“7”误按步长为 1 逐个数 i=0 到 6 来理解，忽略了每次加 2 只取偶数；“1”只认为循环执行了一次，漏掉了后续三次迭代。",
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
          "explanation": "【解题思路】此题考查从源代码到可执行程序的基本流程。源文件是文本，必须先被编译器翻译成机器指令才能运行。\n【逐步推理】在 Dev C++ 等集成开发环境中，编写好的源文件要经过编译生成目标文件，再经链接生成可执行程序，之后才能运行。题干问“源文件生成可执行程序需要什么操作”，其核心步骤就是编译。\n【其他选项为何错】“创建”只是新建一个源文件，并不产生可执行程序；“编辑”是修改源代码内容，仍然停留在文本层面；“调试”用于定位和修复运行时错误，不是生成可执行程序的动作。",
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
          "explanation": "【解题思路】此题考查变量名与标准库函数名的冲突问题。判断 scanf 能否作变量名，要看它是否在库函数中被实际占用。\n【判断依据】scanf 是 C 标准库中声明的输入函数名，在全局命名空间使用。若再定义同名变量，程序中对 scanf(...) 的调用会与变量名产生二义性，编译器无法区分是函数调用还是变量，从而编译报错。为避免冲突，应避免使用标准库函数名作为变量名，所以命题“不能用 scanf 作为变量名”正确，应判正确。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。虽然 scanf 不是关键字，但作为库函数名它被实际保留使用，不能当作普通变量名，故选择“正确”。",
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
          "explanation": "【解题思路】此题考查完全平方数的判定。若存在整数 i 使 i 的平方等于 N，则 N 是完全平方数。循环逐个尝试 i，条件处应写平方相等判断。\n【逐步推理】循环让 i 从 0 取到 N，当且仅当 i*i 等于 N 时才应输出“是完全平方数”。四个选项里只有 i*i==N 正确地表达了“i 的平方等于 N”这一判定条件。\n【其他选项为何错】i==N*N 把平方作用在 N 上，判定对象颠倒，且当 N 较大时 i 几乎不可能等于 N 的平方；i*10==N 没有任何数学意义，纯属干扰项；i+i==N 只判断 N 是否为某个 i 的两倍，与平方完全无关。",
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
          "explanation": "【解题思路】此题考查一维数组定义的标准语法。定义数组需要类型、数组名、方括号和大小，顺序固定。\n【逐步推理】C++ 定义数组的格式为“类型 数组名[元素个数];”。int arr[5]; 定义了一个名为 arr、含 5 个 int 元素（arr[0] 到 arr[4]）的数组，语法正确。\n【其他选项为何错】int arr(5); 是函数式初始化，用于初始化单个变量而非数组；int arr{5}; 用列表初始化把单个 int 变量 arr 初始化为 5；int[5] arr; 把方括号写到类型后面，C++ 不支持这种声明顺序，编译会报错。"
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
          "explanation": "【解题思路】此题考查数组下标的起始值。C++ 数组从 0 开始编号，这一点与日常计数习惯不同，是初学者最易混淆的知识点。\n【逐步推理】数组大小为 n 时，第一个元素是 a[0]，最后一个元素是 a[n-1]，合法下标范围是 0 到 n-1。所以 C++ 数组的下标从 0 开始。\n【其他选项为何错】“1”是常见数数习惯，但 C++ 明确规定从 0 计；“-1”不可能是起始下标，数组下标不能为负；“取决于数组大小”错误，起始下标与数组大小无关，任何数组都从 0 开始。"
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
          "explanation": "【解题思路】此题考查数组初始化列表的正确写法。初始化列表用花括号包裹，元素之间用逗号分隔。\n【逐步推理】C++ 中初始化数组的格式是“类型 数组名[大小] = {值1, 值2, ...};”。int a[3] = {1, 2, 3}; 把三个初值依次赋给 a[0]、a[1]、a[2]，写法完全正确。\n【其他选项为何错】int a[3] = (1, 2, 3); 用圆括号是函数式初始化，不能用于数组；int a[3] = {1; 2; 3}; 花括号内用分号分隔元素，是语法错误；int a[3] = [1, 2, 3]; 方括号是下标运算符，不能用于初始化列表。"
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
          "explanation": "【解题思路】此题考查数组下标的定位。下标从 0 开始，a[0] 是第一个元素，a[1] 是第二个元素。\n【逐步推理】int a[3] = {10, 20, 30} 中，三个元素的对应关系是 a[0]=10、a[1]=20、a[2]=30。cout << a[1] 输出下标为 1 的元素，也就是第二个元素 20。\n【其他选项为何错】“10”是 a[0] 的值，属于第一个元素；“30”是 a[2] 的值，属于第三个元素；“运行错误”不对，a[1] 在合法下标范围内，访问没有任何问题。"
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
          "explanation": "【解题思路】此题考查数组部分初始化的补零规则。初始化列表不足时，剩余元素自动补 0。\n【逐步推理】int a[5] = {1, 2} 只显式给 a[0]=1、a[1]=2 赋值，a[2]、a[3]、a[4] 没有被列出。按 C++ 规则，这些剩余元素会被自动初始化为 0，因此 a[3] 的值是 0。\n【其他选项为何错】“1”是 a[0] 的值，与 a[3] 无关；“未定义”错误，部分初始化后的剩余元素确定补 0，并不是随机值；“3”是随意编造的干扰值，数组里根本没有元素值为 3。"
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
          "explanation": "【解题思路】此题考查数组中求最大值的经典算法：先假定第一个元素最大，再逐个与后续元素比较，发现更大的就更新。\n【逐步推理】max 初值为 a[0]=5。i=1 时 a[1]=3 不大于 5，max 不变；i=2 时 a[2]=8 大于 5，max 更新为 8；i=3 时 a[3]=1 不大于 8，max 保持 8。循环结束后 max=8，即数组的最大值。\n【其他选项为何错】“5”只是初始假设值，随后被 8 超越；“3”是 a[1] 的值，从未当过最大值；“1”是 a[3] 的值，是数组中的最小值，与结果无关。"
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
          "explanation": "【解题思路】此题综合考查数组的下标范围与大小固定两个性质。10 个元素的数组下标从 0 到 9，且数组一旦定义大小不可改变。\n【逐步推理】int a[10] 的合法下标是 0 到 9，共 10 个位置。a[10] 已经越界，属于未定义行为；数组大小在定义时确定，无法再添加第 11 个元素。因此“下标范围是 0 到 9”是正确说法。\n【其他选项为何错】“下标 1 到 10”是把起始下标错当成 1；“a[10] 合法”错误，它越过了最后一个合法元素；“可以添加第 11 个元素”错误，普通数组大小固定，不能动态增加元素。"
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
          "explanation": "【解题思路】此题考查倒序遍历数组的循环写法。倒序输出要从最后一个元素开始，下标每次减 1，直到第一个元素为止。\n【逐步推理】int a[5]={1,2,3,4,5} 的最后一个元素是 a[4]。for(int i=4; i>=0; i--) 依次输出 a[4]、a[3]、a[2]、a[1]、a[0]，即 5 4 3 2 1，正确实现倒序输出。\n【其他选项为何错】选项 1 的循环从头到尾正序输出 1 2 3 4 5；选项 3 从 a[1] 开始且访问 a[5] 越界，同时漏掉 a[0]；选项 4 的 i 从 5 开始，a[5] 已经越界，属于未定义行为。"
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
          "explanation": "【解题思路】此题考查数组大小的自动推导。省略方括号中的大小并给出初始化列表时，编译器按列表元素个数确定数组大小。\n【逐步推理】int arr[] = {1, 3, 5, 7, 9, 11} 的初始化列表中一共有 6 个元素，编译器自动把数组大小定为 6，元素对应 arr[0] 到 arr[5]。所以 arr 共有 6 个元素。\n【其他选项为何错】“5”少算了列表中最后一个 11；“11”把最大的元素值当成元素个数，混淆了数值与数量两个概念；“编译错误”错误，省略大小并给出初始化列表是 C++ 允许的标准写法。"
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
          "explanation": "【解题思路】此题考查数组求和的标准模式：设一个求和变量并初始化为 0，循环把每个数组元素累加进去。\n【逐步推理】sum 初值为 0，for 循环从 i=0 到 i=4 执行 sum += a[i]，也就是把 3、1、4、1、5 依次累加。这段代码的功能正是计算数组所有元素之和。\n【其他选项为何错】“统计大于 0 的个数”需要 if(a[i]>0) 判断并计数，代码中没有；“查找最大值”需要比较并更新 max，代码中没有；“计算乘积”初值应为 1 且用乘法，这里用的是加法且初值为 0。"
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
          "explanation": "【解题思路】此题考查二维数组的元素总数计算。二维数组可以看作多行多列的表格，总元素数等于行数乘以列数。\n【逐步推理】int a[3][4] 定义了 3 行 4 列的二维数组，行下标 0 到 2，列下标 0 到 3，每行 4 个元素。总元素个数为 3×4=12。\n【其他选项为何错】“3”只取了行数，“4”只取了列数，都只反映了一个维度；“7”把 3 和 4 相加，误以为元素数是行数加列数，三种理解都不正确，只有行乘列等于 12 才对。"
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
          "explanation": "【解题思路】此题考查对数组整体做统一运算。循环逐一把每个元素乘以 2，再输出指定下标的新值。\n【逐步推理】原数组 a={10,20,30}。循环执行 a[i]=a[i]*2 后，各元素变为 a[0]=20、a[1]=40、a[2]=60。cout 输出 a[0] 与 a[2]，结果为“20 60”。\n【其他选项为何错】“10 30”是运算前的原值，忘了乘 2；“10 60”只对 a[2] 乘了 2，a[0] 仍是原值；“20 30”把两个下标的元素对应错，a[0] 是 20 但 a[2] 应是 60。"
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
          "explanation": "【解题思路】此题考查数组间按逆序拷贝。b[i] 取 a 中对称位置的元素 a[4-i]，实现整体倒序。\n【逐步推理】循环让 i 从 0 到 4：b[0]=a[4]=5，b[1]=a[3]=4，b[2]=a[2]=3，b[3]=a[1]=2，b[4]=a[0]=1。因此数组 b 的内容为 {5,4,3,2,1}，恰好是 a 的逆序。\n【其他选项为何错】“{1,2,3,4,5}”是原数组 a，没有经过任何交换；“{0,0,0,0,0}”错误，b 的每个元素都被显式赋值，并非全零；“{4,3,2,1,0}”把对称下标写错了一格，正确应取 a[4-i] 而非 a[3-i]。"
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
          "explanation": "【解题思路】此题考查二维数组的下标定位。第一个下标表示行，第二个下标表示列，行与列都从 0 开始计数。\n【逐步推理】数组 a 的三行分别为 {1,2,3}、{4,5,6}、{7,8,9}。a[2] 指向第三行 {7,8,9}，该行下标为 1 的元素是第二个元素 8，所以 a[2][1]=8。\n【其他选项为何错】“4”是 a[1][0]、“5”是 a[1][1]、“6”是 a[1][2]，这三个值都位于第二行，而 a[2][1] 明确指向第三行第二列，只有 8 才是正确结果。"
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
          "explanation": "【解题思路】此题考查记录最小值下标的算法。minIdx 始终保存当前找到的最小元素的下标，比较完整轮后即为最终答案。\n【逐步推理】minIdx 初值为 0。i=1 时 a[1]=7 不小于 a[0]=3，不变；i=2 时 a[2]=1 小于 3，minIdx 更新为 2；i=3 时 a[3]=9、i=4 时 a[4]=4 都不小于 1，不再更新。最终 minIdx=2，正是最小值 1 的下标。\n【其他选项为何错】“找出最大值”与代码方向相反，代码比较的是“更小”；“从小到大排序”需要交换元素，代码只记录下标没有排序动作；“计算平均值”需要累加与除法，代码中完全没有。"
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
          "explanation": "【解题思路】此题考查原地逆序交换。利用临时变量把对称位置的一对元素互换，循环次数为数组长度的一半。\n【逐步推理】i=0 时交换 a[0] 与 a[4]（1 和 5），数组变为 {5,2,3,4,1}；i=1 时交换 a[1] 与 a[3]（2 和 4），数组变为 {5,4,3,2,1}。中间元素 a[2] 不动。最终数组是 {5,4,3,2,1}。\n【其他选项为何错】“{1,2,3,4,5}”是交换前的原数组；“{5,2,3,4,1}”只完成了一次交换的中间状态；“{5,4,3,4,5}”把 a[3] 误写成 4、a[4] 误写成 5，与真实的逆序结果不符。"
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
          "explanation": "【解题思路】此题考查数组遍历的循环写法。要访问全部 n 个元素，下标应从 0 到 n-1，循环条件用 i<n。\n【逐步推理】int a[4]={2,4,6,8} 有 4 个元素，合法下标是 0 到 3。for(int i=0; i<4; i++) 依次访问 a[0]、a[1]、a[2]、a[3]，恰好覆盖所有元素，是正确遍历方式。\n【其他选项为何错】for(int i=1; i<=4; i++) 从 a[1] 开始，漏掉 a[0]，且访问到 a[4] 时越界；cout<<a; 输出的是数组首元素的地址而不是各个元素的值；“以上都不对”不成立，因为选项 0 本身就是正确答案。"
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
          "explanation": "【解题思路】此题考查数组作为函数参数时三种形参写法的等价性。数组名传入函数时会退化为指针，三种写法实质相同。\n【逐步推理】调用函数传入数组名时，实参退化为指向首元素的指针。因此形参无论写成 int a[]、int a[100] 还是 int* a，编译器都将其视为一个 int* 类型的参数，函数内拿到的都是同一个首元素地址，行为完全一致。\n【其他选项为何错】前三个选项分别只列举了一种写法，实际上三种写法功能等价，没有本质区别，单独认其中任何一种都不全面，正确结论是“以上都可以”。"
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
          "explanation": "【解题思路】此题是两段逻辑的组合：先用 i*i 为数组赋值，再按步长 2 累加偶数下标位置的元素。\n【逐步推理】第一段循环后 a={0,1,4,9,16}（a[i]=i*i）。第二段循环的 i 依次取 0、2、4，sum=a[0]+a[2]+a[4]=0+4+16=20。输出 sum 为 20。\n【其他选项为何错】“5”是数组的元素个数而不是累加和；“10”只有在把某几项算错或把数组误当成 {1,2,3,4,5} 时才会得到；“30”比正确结果大，说明累加了本不该加的元素，实际只累加偶数下标的三个值。"
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
          "explanation": "【解题思路】此题考查去重计数。对每个元素，用内层循环扫描它之前的位置，若出现过则跳过，否则计数加 1，最终统计出不重复元素的个数。\n【逐步推理】逐项分析：a[0]=3 之前无元素，count=1；a[1]=1 之前无 1，count=2；a[2]=4 之前无 4，count=3；a[3]=1 之前有 a[1]=1，重复则跳过；a[4]=5 之前无 5，count=4。所以输出 4。\n【其他选项为何错】“5”把每个元素都当成第一次出现，忽略了 1 重复了一次；“3”少计了一个首次出现的元素；“2”把逻辑理解成只统计重复元素，方向完全相反。"
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
          "explanation": "【解题思路】此题考查把数组所有元素初始化为 0 的写法。空花括号会对数组做值初始化，int 元素全部置 0。\n【逐步推理】int a[3] = {}; 用空初始化列表，编译器把所有三个元素都值初始化为 0，是最直接、最明确的全零初始化方式。部分初始化 int a[3]={1,2} 虽然第三个也会补 0，但前两个不是 0，不符合“全部初始化为 0”的要求。\n【其他选项为何错】int a[3]={1,2} 只把前两个元素设为 1 和 2；int a[3]=new int[3]; 语法错误，new 表达式不能与数组声明这样混用；int a[3]=NULL 类型不匹配，NULL 是空指针值，不能用来初始化 int 数组。"
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
          "explanation": "【解题思路】此题考查遍历 5 个元素时的循环边界。数组下标从 0 开始，循环条件应为 i<5，才能访问 a[0] 到 a[4]。\n【逐步推理】数组 a 有 5 个元素：80、90、75、85、95，合法下标是 0 到 4。循环条件应写 i<5，这样 i 取 0、1、2、3、4 共五次，把全部元素累加进 sum，最后 sum/5 才是平均值。\n【其他选项为何错】“4”让循环只执行 i=0 到 3 四次，漏掉了最后一个元素 95；“6”会让 i 取到 5，访问 a[5] 越界；“a.length”普通数组没有 length 成员函数，这是 string 类的方法，用在数组上会编译错误。"
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
          "explanation": "【解题思路】此题考查二维数组元素总数的计算。总元素数等于行数乘以列数，与一维数组按“个数”计数同理。\n【逐步推理】int arr[3][4] 定义 3 行 4 列的二维数组，每行 4 个元素，共 3 个这样的行，总元素数为 3×4=12。行下标 0 到 2，列下标 0 到 3。\n【其他选项为何错】“7”把行数与列数相加，误以为元素总数是 3+4；“3”只取了行数；“4”只取了列数。三者都只考虑了部分信息，正确答案是 12。"
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
          "explanation": "【解题思路】此题考查冒泡排序的执行过程。相邻元素两两比较，前大后小就交换，多轮扫描后较小的元素逐渐冒泡到前面，较大的沉到后面，最终得到升序序列。\n【逐步推理】对 {5,3,8,1} 执行两层冒泡循环：第一轮比较交换后 8 被移到末尾；第二轮把 5 移到倒数第二；第三轮完成 3 与 1 的调整。三轮结束后数组变为 {1,3,5,8}，即升序排列。\n【其他选项为何错】“1,5,3,8”是排序只进行到一半的状态；“3,1,5,8”是较早轮次的中间状态；“5,3,8,1”是排序前的原始数组。三者都不是冒泡排序的最终结果。"
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
          "explanation": "【解题思路】此题考查数组下标的起始值。判断命题是否正确，只需回忆 C++ 对下标起始位置的明确规定。\n【判断依据】C++ 语言规定数组下标从 0 开始：大小为 n 的数组，第一个元素是 a[0]，最后一个元素是 a[n-1]，合法下标范围是 0 到 n-1。若下标从 1 开始，第一个元素将无法用 a[0] 访问，与语言规范矛盾。下标从 1 开始是部分其他语言的约定，不适用于 C++，命题“下标从 1 开始”错误，应判错误。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。由上述分析，命题与 C++ 规定相悖，应选择“错误”。",
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
          "explanation": "【解题思路】此题考查普通数组大小必须是常量表达式这一要求。判断命题正确与否，关键区分常量表达式与运行时变量两种写法。\n【判断依据】标准 C++ 要求普通数组大小在编译时确定：int a[10]; 的字面量、int a[K]; 中 K 为 const 常量，都是合法写法；而 int a[n]; 中 n 是普通变量，属于变长数组（VLA），那是 C99 的扩展特性，标准 C++ 并不支持，只是个别编译器以扩展方式接受。所以数组大小必须是常量表达式，命题正确，应判正确。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。命题符合标准 C++ 的规定，应选择“正确”，“错误”对应的是非标准的变长数组写法。",
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
          "explanation": "【解题思路】此题考查初始化列表元素个数与数组大小是否匹配。判断命题正确与否，看多出的初始值是否会造成语法错误。\n【判断依据】int a[3] 只能容纳 3 个元素，而初始化列表给出了 4 个值。第 4 个值 4 没有对应的存储位置，编译器会在编译阶段报“初始值太多”之类的错误，属于编译器能直接检查出的语法问题而非运行时问题。所以命题“int a[3]={1,2,3,4} 会导致编译错误”正确，应判正确。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。有些语言会忽略多余初始值，但 C++ 规定这种情况直接编译失败，故选择“正确”。",
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
          "explanation": "【解题思路】此题考查 == 运算符比较数组时的实际语义。判断命题正确与否，关键是理解数组名在表达式中退化为首元素地址。\n【判断依据】若写 if(a==b)，实际比较的是 a 与 b 两个数组的首地址是否相同。不同数组的地址几乎不可能相等，即使元素内容完全相同，比较结果也是假，== 无法反映数组内容是否一致。要比较数组是否相等必须逐个元素比较，所以“可以直接用 == 比较两个数组”的说法错误，应判错误。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。命题与 C++ 的实际行为不符，应选择“错误”。",
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
          "explanation": "【解题思路】此题考查数组作为函数参数时的传递机制。判断命题正确与否，关键理解形参退化为指针后操作的是原数组内存。\n【判断依据】调用 f(a) 时形参得到 a 的首元素地址，函数内写 a[i] 或 *a 都会直接写入原数组所在的内存单元。函数返回后，调用者的原数组内容已经改变，这与普通 int、double 变量传值复制、修改不影响原变量的行为不同。因此“函数内对数组的修改会影响原数组”正确，应判正确。\n【其他选项为何错】本题为判断题，只有正确与错误两个选项。命题符合数组退化为指针的传递机制，应选择“正确”。",
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
          "explanation": "【解题思路】此题考查数组下标定位与简单求和。先确认 a[2] 和 a[4] 分别对应数组中的哪个元素，再相加。\n【逐步推理】int a[5]={10,20,30,40,50} 中，各下标对应：a[0]=10、a[1]=20、a[2]=30、a[3]=40、a[4]=50。a[2]+a[4]=30+50=80，输出为 80。\n【其他选项为何错】“30”只取了 a[2] 的值，漏掉了 a[4]；“50”只取了 a[4] 的值，漏掉了 a[2]；“70”只有在把 a[2] 误认为 20、a[4] 误认为 50 时才会得到，正确两项是 30 和 50，和为 80。"
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
          "explanation": "【解题思路】此题考查合法下标的条件：必须是整数，且落在 0 到 n-1 范围内。int arr[10] 的合法下标是 0 到 9。\n【逐步推理】数组大小 10，最后一个合法元素是 arr[9]，它完全在范围内，访问合法。arr[10] 越界，arr[-1] 下标为负，arr[0.5] 用浮点数作下标，下标必须是整型，这三者都是非法访问。\n【其他选项为何错】arr[10] 越过了最后一个元素 arr[9]，属于越界访问；arr[-1] 负下标会访问数组之前的无关内存，非法；arr[0.5] 下标必须是整数，浮点数不能作为数组下标，编译即出错。"
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
          "answer": 0,
          "explanation": "【解题思路】考查数组逆序（反转）的对称交换法。数组长度 n=5，最后一个合法下标是 n-1=4，所以 a[i] 应对称交换 a[4-i]。\n【逐步推理】循环 for(i=0;i<5/2;i++) 中 5/2=2（整数除法），只执行 i=0、1 两轮。当 i=0 时交换 a[0] 与 a[4]；当 i=1 时交换 a[1] 与 a[3]。因此两处横线都应填 4-i，即 a[i]=a[4-i]; a[4-i]=t;。执行后 a 变为 {5,4,3,2,1}，逆序正确。\n【其他选项为何错】选项“5-i,i”：i=0 时访问 a[5]，超出合法下标 0~4，属于越界（未定义行为），且 a[5]=t 也是越界写入，代码错误，故不能选 D；选项“5-i,5-i”：i=0 时同样访问 a[5] 越界；选项“i+1,i+1”：交换的是相邻元素 a[i] 与 a[i+1]，无法完成首尾对称交换，i=1 时还会访问 a[2] 而非 a[3]，逆序失败。正确答案为 A 项“4-i,4-i”。"
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
    "kp3_05": {
      "title": "字符串及函数",
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
          "explanation": "【解题思路】区分 C++ 基本类型 char 与标准库类 string，明确二者在存储粒度和内存占用上的差异。【逐步推理】char 是 C++ 的基本类型，固定占 1 字节，用来存一个字符，例如 char c='A'。string 是标准库 string 类的对象，内部用动态数组管理字符序列，可以存任意长度（包括空串）的字符串，并封装了拼接、查找、求长度等操作。因此“char 存单个字符，string 存一串”是正确的。【其他选项为何错】“完全相同”错，二者类型不同、声明方式不同（单引号对双引号）；“char 占更多内存”错，char 固定 1 字节，而 string 内部还有缓冲区与额外成员，通常占更多；“string 只能存字母”错，string 可以存字母、数字、中文、空格等任意字符，也能是空串。"
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
          "explanation": "【解题思路】考查字符字面量的写法。C++ 中字符常量必须用单引号括住单个字符，字符串字面量用双引号。【逐步推理】赋值语句右侧是单个字符，应写成 'A'，所以 char c='A'; 是合法写法，char 恰好用来存单个字符。【其他选项为何错】char c=\"A\"; 错，双引号得到的是字符串字面量（字符数组），不能赋给 char；char c=A; 错，A 是未定义的标识符，编译报错；string c='A'; 错，单引号括的是字符，string 没有从单个 char 直接初始化的构造函数，编译错误。"
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
          "explanation": "【解题思路】string 重载了 + 运算符，功能是字符串拼接。【逐步推理】s=a+b 将 a、b 两个字符串按顺序连接：\"Hello\" 加 \" World\"，由于 b 以空格开头，正好中间一个空格，结果是 \"Hello World\"。【其他选项为何错】\"Hello\" 少拼了 b；“ World\" 少了 a；编译错误错，string 的 + 拼接完全合法。"
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
          "explanation": "【解题思路】string 提供两个求长度的成员函数 length() 与 size()。【逐步推理】size() 是为兼容 STL 容器而设计，length() 强调字符串长度语义，二者返回完全相同的结果，可以互换使用，功能等价。【其他选项为何错】“结果不同”错，二者结果相同；“只有 length()”“只有 size()”错，两个函数都存在且都可调用。"
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
          "explanation": "【解题思路】cin>> 按空白字符（空格、换行、制表符）分隔输入，读取到空白字符即停止。【逐步推理】输入 \"Hello World\" 时，cin>>s 只读到空格前的 \"Hello\" 就停止，\"World\" 仍留在输入缓冲区中，等待下一次读取。【其他选项为何错】\"Hello World\" 是带空格的完整输入，cin>> 不读空格；\"World\" 是第二个词，本次没有被读入；\"H\" 错，cin>> 按词读取而不是按字符读取。"
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
          "explanation": "【解题思路】熟记常用 ASCII 码基准值：'A'=65，'a'=97，'0'=48。【逐步推理】大写字母从 A(65) 开始到 Z(90) 连续递增，小写字母从 a(97) 开始，大小写对应字母相差 32。因此 'A' 的 ASCII 码是 65。【其他选项为何错】97 是小写 'a' 的码值；48 是字符 '0' 的码值；0 是空字符 '\\0' 的码值。"
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
          "explanation": "【解题思路】string::length() 返回字符串中实际字符的个数，不包含任何结束符。【逐步推理】\"hello\" 由 h、e、l、l、o 共 5 个字符组成，length() 返回 5。【其他选项为何错】4 少算了一个字符；6 是把 C 风格字符串结尾的 '\\0' 也算进去，但 string::length() 不统计 '\\0'（那是 sizeof 对字符数组的行为）；“不确定”错，结果明确是 5。",
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
          "explanation": "【解题思路】考查 printf 中字符串字面量的定界规则：双引号内的内容可以随意修改，但定界符本身不能改成单引号。【逐步推理】printf(\"Hello,GESP!\") 中双引号括住的是字符串字面量，括号里的文本（Hello,GESP!）可以改成任何英文、数字或汉字，但必须保持用双引号定界。单引号只能括单个字符（char），如 'A'，如果把字符串的定界符改成两个单引号，'Hello,GESP!' 就不是合法的字符字面量，会编译出错，因此“双引号都可改两个单引号”是错误的说法。【其他选项为何错】“双引号内可改英文”“双引号内可改 Hello代码！”描述的都是修改字符串内容，这是允许的；“双引号都可改三个双引号”同样不是合法的字符串定界写法，但本题官方考查点在于双引号不能改为单引号，故选择下标 2。",
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
          "explanation": "【解题思路】区分操作系统与编程工具的概念。【逐步推理】操作系统是管理计算机硬件与软件资源、为其他程序提供运行环境的系统软件，例如 Windows、Linux、macOS。Dev C++ 是一款集成开发环境（IDE），用于编写、编译、调试 C++ 程序，它运行在操作系统之上，本身并不是操作系统，所以该判断错误。【其他选项为何错】“正确”错，Dev C++ 是 IDE 而非操作系统。",
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
          "explanation": "【解题思路】检查 C++ 变量的使用规则：变量必须先声明后使用。【逐步推理】代码 for(int i=0;i<10;i++) Sum+=i; 中变量 Sum 从未被声明，C++ 规定变量必须先声明再使用，因此程序无法编译通过，也就不能输出 45，所以该判断错误。【其他选项为何错】“正确”错，Sum 未声明导致编译错误；若补上 int Sum=0; 声明，循环累加 0 到 9 的结果才是 45。",
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
          "explanation": "【解题思路】理解 GESP 等级认证的定位。【逐步推理】GESP（CCF 编程能力等级认证）考核的是编程能力本身，同一级别可以用 C++、Python、图形化编程等多种语言参加认证，考纲按能力等级划分，并不绑定某一种编程语言，因此“同一级别能力与编程语言无关”的说法正确。【其他选项为何错】“错误”错，GESP 官方明确支持多种语言认证同一级别。",
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
          "explanation": "【解题思路】套用 C++ 标识符命名规则：只能由字母、数字、下划线组成，不能以数字开头，不能与关键字重名。【逐步推理】studentName 由字母组成；student_name 由字母和下划线组成；sStudentName 由字母组成，三者都符合命名规则，且都不是 C++ 关键字，因此都是合法变量名，判断正确。【其他选项为何错】“错误”错，三个名字均合法。",
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
          "explanation": "【解题思路】标识符允许的字符集合是字母、数字、下划线，连字符不属于合法字符。【逐步推理】C++ 变量名中不能出现连字符 '-',因为 '-' 会被当成减号运算符，导致语法错误。five-star 含有连字符，因此不能作为变量名，判断正确。【其他选项为何错】“错误”错，含连字符的标识符确实不合法。",
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
          "explanation": "【解题思路】熟记 ASCII 码的基准值：'A'=65，'a'=97，'0'=48。【逐步推理】ASCII 码表中大写字母从 'A'(65) 连续到 'Z'(90)，小写字母从 'a'(97) 连续到 'z'(122)，大小写对应字母相差 32。字符 '0' 的码值是 48。所以 'A' 的 ASCII 码值是 65。【其他选项为何错】97 是小写 'a' 的码值；48 是数字字符 '0' 的码值；0 是空字符 '\\0' 的码值。"
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
          "explanation": "【解题思路】char 存储的是整数形式的字符编码，ASCII 码 65 对应大写字母 'A'；cout 对 char 变量按字符输出。【逐步推理】char c=65 把整数 65 存入 char 变量，ASCII 码 65 对应的正是大写字母 'A'。cout 输出 char 类型时显示字符本身，而不是数字 65，因此输出为 A。【其他选项为何错】“65”错，cout 对 char 打印字符而非数值，除非显式转成 int；“a”错，小写 a 的码值是 97；“编译错误”错，整数 65 赋给 char 在 0 到 255 范围内完全合法。"
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
          "explanation": "【解题思路】区分字符串字面量与字符字面量的定界符：字符串用双引号，字符用单引号。【逐步推理】字符串字面量用双引号括起来，如 \"Hello\"，可以赋给 string 变量。单引号只能括单个字符，如 'H'。【其他选项为何错】'Hello' 用单引号括多个字符，不是合法的字面量；Hello 不带引号，是一个标识符，不是字符串字面量；'H' 是字符字面量（char），不是字符串。"
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
          "explanation": "【解题思路】string::length() 返回字符串中实际字符的个数。【逐步推理】字符串 \"abc\" 包含 a、b、c 共 3 个字符，string 对象的 length() 返回实际字符数，不包含任何结束符，因此返回 3。【其他选项为何错】2 少算一个字符；4 把 C 风格字符串的 '\\0' 也算进去了，但 string::length() 不统计结束符；“不确定”错，结果明确是 3。"
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
          "explanation": "【解题思路】字符常量的定界符号是单引号。【逐步推理】C++ 中字符常量用单引号括住单个字符，例如 'A'、'0'、'\\n'，类型为 char。双引号用于字符串字面量，例如 \"AB\"。【其他选项为何错】双引号是字符串的定界符；尖括号用于 #include 引入头文件，如 <iostream>，不是字符定界符；方括号用于数组下标访问，如 a[0]。"
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
          "explanation": "【解题思路】char 参与算术运算时按 ASCII 码值计算，结果再存回 char 即得到对应字符。【逐步推理】'a' 的 ASCII 码是 97，'a'+1 得到整数 98，赋值给 char 时存储码值 98 对应的字符，即 'b'。所以 ch 的值是字符 'b'。【其他选项为何错】\"'a1'\" 是两个字符，不能赋给单个 char；“98”是整数形式，赋值给 char 后实际存的是字符 'b'，cout 输出的是 b；“编译错误”错，char 与 int 的混合运算合法。"
        },
        {
          "id": "kp07_q22",
          "type": "choice",
          "difficulty": 2,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"hello\";\nstring t = s.substr(1, 3);\ncout &lt;&lt; t;</code></pre>",
          "options": [
            "el",
            "hel",
            "ell",
            "lo"
          ],
          "answer": 2,
          "explanation": "【解题思路】substr(pos, len) 表示从下标 pos 开始，连续取 len 个字符；注意第二个参数是长度，不是结束下标。【逐步推理】字符串 \"hello\" 的下标：h(0) e(1) l(2) l(3) o(4)。s.substr(1, 3) 从下标 1 开始取 3 个字符，即 e、l、l，得到 \"ell\"。【其他选项为何错】\"el\" 只取了 2 个字符；\"hel\" 是从下标 0 取 3 个字符的结果；\"lo\" 是从下标 3 取 2 个字符的结果。所以正确答案是 \"ell\"。"
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
          "explanation": "【解题思路】string::length() 返回字符串实际字符个数。【逐步推理】\"abcd\" 包含 a、b、c、d 共 4 个字符，length() 返回 4。【其他选项为何错】3 少算一个字符；5 多算，把不存在的 '\\0' 也计入了，string::length() 不统计结束符；8 无任何依据。"
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
          "explanation": "【解题思路】ctype 头文件提供字符分类函数，注意区分判断大写、判断小写、判断字母、判断数字。【逐步推理】isupper(ch) 判断 ch 是否为大写字母（'A' 到 'Z'），是则返回非零，正好满足题目要求。【其他选项为何错】islower 判断是否是小写字母，方向相反；isalpha 判断是否为字母（大小写都算），范围比大写更宽；isdigit 判断是否为数字字符 '0' 到 '9'。"
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
          "answer": 2,
          "explanation": "【解题思路】ch+32 中 char 参与算术运算会先提升为 int，整个表达式类型为 int，cout 输出的是整数而不是字符。【逐步推理】'D' 的 ASCII 码是 68，满足 'A'<=ch<='Z' 的条件，进入 if 分支。ch+32 中 ch 被提升为 int，68+32=100，表达式 ch+32 的类型是 int，所以 cout<<ch+32 输出整数 100。若要输出小写字母 'd'，必须强转，写成 cout<<(char)(ch+32) 才行。【其他选项为何错】\"d\" 错，只有把 ch+32 强制转换为 char 后才输出字符 d，本题没有转换，输出的是数字 100；“D”是未转换前的原字符；“68”是 'D' 本身的值，不是运算结果。"
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
          "explanation": "【解题思路】+= 是 string 的追加运算符，把右侧字符串拼接到原字符串末尾。【逐步推理】s=\"abc\"，执行 s+=\"def\" 后把 \"def\" 追加到 \"abc\" 后面，结果为 \"abcdef\"，拼接过程不会自动插入空格。【其他选项为何错】\"abc\" 是追加前的值；\"def\" 只是被追加的部分；“abc def”错，+= 不会自动加空格。"
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
          "explanation": "【解题思路】string::find 返回子串首次出现的起始下标，下标从 0 开始，找不到时返回 string::npos。【逐步推理】\"hello world\" 各字符下标为 h(0) e(1) l(2) l(3) o(4) 空格(5) w(6) o(7) r(8) l(9) d(10)。\"world\" 从下标 6 开始匹配，所以 find(\"world\") 返回 6。【其他选项为何错】0 是 \"hello\" 的开头下标；5 是空格的下标；-1 表示找不到，但 \"world\" 确实存在，不会返回 -1。"
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
          "explanation": "【解题思路】C 风格字符串本质是字符数组，以空字符 '\\0' 作为结束标记。【逐步推理】C 风格字符串用 '\\0'（ASCII 0）标识结束，strlen 依据它计算长度，printf 的 %s 也依据它输出。没有 '\\0' 就无法知道字符串到哪里结束，这是 C 风格字符串与 string 类的关键区别。【其他选项为何错】“不需要结束符”错，缺 '\\0' 会越界读内存；“就是 string 类型”错，C 风格字符串是字符数组，与 string 类不同；“用单引号定义”错，C 风格字符串字面量用双引号，单引号只能定义单个字符。"
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
          "explanation": "【解题思路】string 重载了比较运算符，按字典序逐字符比较（比较对应字符的 ASCII 码）。【逐步推理】s1=\"abc\"，s2=\"abd\"。逐字符比较：第一个字符 'a' 相等，第二个字符 'b' 相等，第三个字符 'c' 的 ASCII 码 99 小于 'd' 的 100，所以 s1<s2 为真，输出 yes。【其他选项为何错】“no”错，s1 确实小于 s2；“编译错误”错，string 支持比较运算符；“不确定”错，比较结果唯一确定。"
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
          "explanation": "【解题思路】erase(pos, len) 从下标 pos 开始删除 len 个字符；先拼接再删除。【逐步推理】str 先由 \"Hello\" 拼接 \" World\" 得到 \"Hello World\"，其下标为 H(0) e(1) l(2) l(3) o(4) 空格(5) W(6) o(7) r(8) l(9) d(10)。erase(5,1) 删除下标 5 的空格，得到 \"HelloWorld\"。【其他选项为何错】\"Hello World\" 是删除前的值；\"Hello\" 是删除太多字符的结果；\" World\" 是保留空格去掉前面的错误结果。"
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
          "explanation": "【解题思路】区分转换函数与判断函数：toupper/tolower 做大小写转换，isupper/islower 只做判断。【逐步推理】toupper(ch) 把 ch 中的小写字母转换为对应大写字母（如 'a' 变 'A'），若 ch 不是小写字母则原样返回，正好满足题目要求。【其他选项为何错】tolower 是大写转小写，方向相反；isupper 和 islower 只返回真假做判断，不改变字符，不能完成转换。"
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
          "explanation": "【解题思路】strlen 统计到 '\\0' 为止的有效字符数，sizeof 返回整个数组占用的字节数，二者含义不同。【逐步推理】char s[]=\"hello\" 在内存中为 {'h','e','l','l','o','\\0'}，共 6 个字节。strlen(s) 数到 '\\0' 前，返回 5；sizeof(s) 是数组总字节数，包含 '\\0'，返回 6。输出 \"5 6\"。【其他选项为何错】“5 5”漏算了 '\\0' 占用的空间；“6 6”把 strlen 也错算成 6；“6 5”把 strlen 和 sizeof 的值弄颠倒了。"
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
          "explanation": "【解题思路】strcat(dest, src) 把 src 字符串拼接到 dest 末尾，并补上 '\\0'，要求 dest 有足够空间。【逐步推理】char a[20]=\"abc\" 分配了 20 字节，空间充足。strcat(a,b) 把 \"def\" 连同结束符追加到 a 末尾，a 变为 \"abcdef\"。【其他选项为何错】\"abc\" 是拼接前的值；\"def\" 是 b 的内容；“abc def”错，strcat 不会在拼接处加空格。"
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
          "explanation": "【解题思路】用 for 循环配合下标逐个访问字符，统计与 'a' 相等的个数。【逐步推理】\"abracadabra\" 各下标依次为 0a 1b 2r 3a 4c 5a 6d 7a 8b 9r 10a，其中 'a' 出现在下标 0、3、5、7、10，共 5 次，count 为 5。【其他选项为何错】4 漏数了一处；6 或 7 把非 'a' 的字符误算进去了。"
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
          "explanation": "【解题思路】双指针交换法实现字符串原地反转：首尾对称交换。【逐步推理】s=\"hello\"，len=strlen(s)=5，循环 i 取 0、1（共 len/2=2 次）。i=0 时交换 s[0] 与 s[4]（h 与 o）；i=1 时交换 s[1] 与 s[3]（e 与 l）；中间的 s[2]='l' 不动。结果为 \"olleh\"。【其他选项为何错】\"hello\" 是原字符串，未反转；\"hel\" 只取了一半；\"llhe\" 交换方式错误，不符合首尾对称交换的结果。"
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
          "explanation": "【解题思路】find(str, pos) 的第二个参数是起始搜索下标，从该下标开始找子串首次出现的位置。【逐步推理】s=\"abcabc\"，find(\"abc\",1) 从下标 1 开始查找。下标 0 处那个 \"abc\" 被跳过，从下标 3 起再次出现 \"abc\"，因此返回 3。【其他选项为何错】0 是不带起始参数时从头找到的位置；1 是搜索的起点而非结果；string::npos 表示找不到，本题能找回 3，不会返回 npos。"
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
          "explanation": "【解题思路】strcmp(s1,s2) 按字典序逐字符比较，返回负值表示 s1 小于 s2，0 表示相等，正值表示 s1 大于 s2。【逐步推理】s1=\"abc\"，s2=\"abd\"。前两个字符相同，第三个字符 'c' 的 ASCII 码 99 小于 'd' 的 100，因此 strcmp 返回负值，r<0 成立，输出 less。【其他选项为何错】\"equal\" 需要两字符串完全相同；\"greater\" 需要 s1 更大；“编译错误”错，strcmp 在 <cstring> 中声明，用法合法。"
        },
        {
          "id": "kp07_q38",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码的输出是什么？\n<pre><code>string s = \"Hello\";\ns.insert(3, \"XX\");\ncout &lt;&lt; s;</code></pre>",
          "options": [
            "HelXXlo",
            "HeXXllo",
            "HelXlo",
            "HelloXX"
          ],
          "answer": 0,
          "explanation": "【解题思路】insert(pos, str) 把字符串 str 插到下标 pos 对应字符的前面。【逐步推理】字符串 \"Hello\" 下标：H(0) e(1) l(2) l(3) o(4)。s.insert(3, \"XX\") 在下标 3 的 'l' 之前插入 \"XX\"，得到 \"Hel\" + \"XX\" + \"lo\" = \"HelXXlo\"。【其他选项为何错】\"HeXXllo\" 是把 XX 插到了下标 2 前面；\"HelXlo\" 少了一个 X；\"HelloXX\" 是追加到末尾。所以正确答案是 \"HelXXlo\"。"
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
          "answer": 2,
          "explanation": "【解题思路】strcpy(dest, src) 会把 src 连同结尾的 '\\0' 一起拷贝到 dest 起始位置，覆盖 dest 中从该位置开始的原有字符。【逐步推理】s=\"abcdef\"，即 {'a','b','c','d','e','f','\\0'}。strcpy(s+2,\"XY\") 从 s[2] 开始写入 'X'、'Y'、'\\0'，数组变为 {'a','b','X','Y','\\0','f','\\0'}。cout<<s 从开头输出，遇到第一个 '\\0'（下标 4）停止，得到 \"abXY\"。原 'c'、'd' 被覆盖，'e'、'f' 虽仍在内存中但已被 '\\0' 截断，不会被输出。【其他选项为何错】\"abXYef\" 错，strcpy 会写入终止符 '\\0'，后面的 e、f 不会输出；“abcdef”是拷贝前的状态；“abXcd”只在 s[2] 覆盖一个字符（那是手动赋值 s[2]='X' 的结果），不是 strcpy 的行为。"
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
            "s.empty()"
          ],
          "answer": 1,
          "explanation": "【解题思路】判断 string 是否为空，标准做法是用 length() > 0、size() > 0，或用 !s.empty()。【逐步推理】s.length() 返回字符串长度，长度大于 0 就表示非空，这是最直观正确的写法。【其他选项为何错】s != NULL 错误，因为 string 不是指针，不能和 NULL 比较；s == true 错误，string 不能和布尔值比较；s.empty() 判断的是\"为空\"，语义正好相反。所以选 s.length() > 0。"
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
          "explanation": "【解题思路】数字字符 '0' 到 '9' 在 ASCII 码表中连续排列。【逐步推理】'0' 的码值是 48，'1' 是 49，依此类推，'9' 是 57，彼此相邻且连续。因此用 ch-'0' 可以直接把数字字符转换成对应的数值 0 到 9。判断正确。【其他选项为何错】“错误”错，数字字符的 ASCII 码确实是连续的。",
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
          "explanation": "【解题思路】string::length() 返回实际字符数，不包含结尾的空字符。【逐步推理】string 对象内部自行记录长度，不依赖 '\\0' 计数。\"abc\" 由 3 个字符组成，length() 返回 3。题目说返回 4（把空字符也算进去）是错误的。【其他选项为何错】“正确”错，length() 对 \"abc\" 返回 3 而非 4。",
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
          "explanation": "【解题思路】string 类重载了关系运算符，支持直接比较两个 string 对象。【逐步推理】string 重载了 ==、!=、<、>、<=、>=，比较时按字典序逐字符进行。因此两个 string 变量可以直接用 == 判断是否相等，判断正确。【其他选项为何错】“错误”错，string 明确支持 == 等比较运算符。",
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
          "explanation": "【解题思路】C 风格字符串以 '\\0' 结尾，计算占用字节数时必须把结束符算进去。【逐步推理】字符串字面量 \"abc\" 在内存中存储为 'a'、'b'、'c'、'\\0' 共 4 个字节。题目说实际占用 3 个字节，漏算了结尾的 '\\0'，因此判断错误。【其他选项为何错】“正确”错，实际占用 4 字节。",
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
          "explanation": "【解题思路】string 内部自动管理内存，长度可以动态变化，与固定大小的字符数组对比。【逐步推理】string 类内部用动态分配的内存管理字符序列，拼接、插入等操作会自动扩容，长度可以动态增长。而 char[] 数组的大小在声明时固定，不能自动扩容，越界写入会导致错误。因此判断正确。【其他选项为何错】“错误”错，string 确实支持长度动态增长。",
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
    "kp4_01": {
      "title": "函数",
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
          "explanation": "【解题思路】本题考查 C++ 函数定义的基本语法。一个完整的函数定义由返回类型、函数名、参数列表和函数体组成，解题关键是判断四个选项中哪一项符合这一语法规定。\n【逐步推理】函数定义的第一行称为函数头，格式为“返回类型 函数名(参数列表)”。即使函数不返回任何值，也必须显式写 void，不能省略返回类型。因此“必须声明返回类型（含 void）”这一说法正确，选项 B 符合题意。\n【其他选项为何错】选项 A“可以没有返回类型”错误，C++ 规定函数不能省略返回类型，否则编译报错；选项 C“函数名可和变量名相同”错误，函数名不能与同一作用域内的变量名相同，否则会造成重定义冲突；选项 D“不能有参数”错误，函数可以有零个或多个参数，参数个数并无强制限制。"
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
          "explanation": "【解题思路】本题考查 return 语句对函数执行流程的影响。关键点是 return 会立即终止整个函数的执行，其后的任何语句都不会再运行。\n【逐步推理】函数 f 内部先执行 cout<<1 输出数字 1；紧接着执行 return 0，return 语句会立刻结束函数并把返回值 0 交回调用处，因此后面的 cout<<2 永远不会执行。main 函数调用 f() 后只输出了一个 1，所以输出结果是 1。\n【其他选项为何错】选项 A“12”错误，return 之后的 cout<<2 根本不会被执行，不可能输出 2；选项 C“2”错误，先执行的是输出 1 的语句，输出内容是 1 而不是 2；选项 D“无输出”错误，函数确实执行了 cout<<1，产生了实际输出。"
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
          "explanation": "【解题思路】本题考查 void 函数的语法规则。void 表示函数没有返回值，解题关键是弄清 void 函数中 return 语句的使用限制：可以用不带值的 return 提前结束，但绝不能 return 一个值。\n【逐步推理】void 函数的返回类型是 void，因此函数体内任何 return 语句后面都不能跟具体数值或表达式，否则编译器会报“返回值类型不匹配”的错误。所以“return 后不能有值”的说法正确，选项 B 符合题意。\n【其他选项为何错】选项 A“不能用 return”错误，void 函数中完全可以使用不带表达式的空 return 提前退出；选项 C“必须末尾写 return;”错误，函数体执行到末尾会自动返回，最后的 return 可写可不写；选项 D“不能调用其他函数”错误，void 函数内部可以正常调用其他函数。"
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
          "explanation": "【解题思路】本题考查函数形参的作用域和性质。形参是函数特有的局部变量，解题关键是理解形参在函数调用时创建、在函数结束时销毁，可见范围仅限于函数体内部。\n【逐步推理】形参在函数被调用时接收实参传入的值，随函数执行结束而消失。在函数体内既可以访问形参，也可以修改形参（默认值传递下修改的是副本）。因此“参数是局部变量，函数内有效”这一说法正确，选项 B 符合题意。\n【其他选项为何错】选项 A“参数是全局变量”错误，形参在函数头中定义，不属于全局变量，全局变量定义在所有函数之外；选项 C“参数可在外部访问”错误，形参的作用域仅限函数体内部，函数外部无法访问；选项 D“参数值不能修改”错误，函数内部可以对形参重新赋值，只是在值传递下这种修改不影响实参。"
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
          "explanation": "【解题思路】本题考查值传递的参数传递方式。按值传递时，形参是实参的一份副本，两者占用不同的内存单元，解题关键是判断函数内对形参的修改是否影响实参。\n【逐步推理】调用 change(a) 时，系统把实参 a 的值 5 复制给形参 x。函数内执行 x=100 只改变了副本 x 的值，实参 a 仍然是 5。函数结束返回 main 后，cout<<a 输出的依旧是 5。\n【其他选项为何错】选项 A“100”错误，值传递下函数内对形参的修改不会传导到实参 a；选项 C“编译错误”错误，代码语法完全合法，可以正常编译运行；选项 D“0”错误，a 从未被修改，初值就是 5。"
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
          "explanation": "【解题思路】本题考查函数原型（函数声明）的作用。函数原型是一条只有函数头加分号、不含函数体的语句，解题关键是理解它向编译器传递的接口信息。\n【逐步推理】当函数定义出现在调用点之后时，需要在调用前先声明函数原型。原型告诉编译器函数的名字、返回类型和形参列表，使编译器在调用处能够进行实参个数和类型的检查。因此“告诉编译器函数名、参数和返回类型”正确，选项 B 符合题意。\n【其他选项为何错】选项 A“必须写在 main 内”错误，原型通常写在所有函数之外、调用之前，写在 main 内只是允许但并非必须；选项 C“可选的”错误，当函数定义在调用之后时，缺少原型会编译报错，此时原型是必需的；选项 D“必须包含函数体”错误，原型只有声明没有函数体，包含函数体的语句是函数定义而非声明。"
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
          "explanation": "【解题思路】本题考查浮点型常量与整型常量的类型区别和存储大小。解题关键是识别 3.0 是 double 型、3 是 int 型，再比较两者的字节占用。\n【判断依据】3.0 是 double 型浮点常量，在内存中通常占 8 字节；3 是 int 型整型常量，通常占 4 字节。两者的数值确实相等（3.0 与 3 比较为真），但数据类型不同导致存储空间不同，所以说法正确，应选“正确”。\n【其他选项为何错】本题是判断题，另一选项“错误”不成立。认为“值相等则存储空间一定相同”的做法，忽略了 3.0 是 double 而 3 是 int 这一类型差异，double 用 8 字节表示、int 用 4 字节表示，存储空间显然不同，判断应选正确。",
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
          "explanation": "【解题思路】本题考查 C++ 标识符的命名规则。合法的标识符只能由字母、数字和下划线组成，且不能以数字开头，解题关键是按此规则核对题目中的变量名。\n【判断依据】studentName 由字母组成，采用驼峰式命名，全部字符符合字母、数字、下划线三类允许字符的要求，且不以数字开头，也不是 C++ 的关键字，完全符合标识符命名规则。因此“studentName 等变量名都合法”的说法正确，应选“正确”。\n【其他选项为何错】本题是判断题，另一选项“错误”不成立。这些名字不含空格、连字符、@ 等非法字符，也没有以数字开头，不违反任何命名规则，把它们判为非法是错误理解，所以判断应选正确。",
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
          "explanation": "【解题思路】本题考查软件分类的基本概念。解题关键是区分“集成开发环境”和“操作系统”两种性质完全不同的软件。\n【判断依据】Dev C++ 是一个用于编写、编译和运行 C/C++ 程序的集成开发环境（IDE），属于应用开发工具软件；而操作系统是管理计算机硬件资源、提供用户接口的底层系统软件，例如 Windows、Linux。两者的功能和地位完全不同，因此“Dev C++ 是操作系统”的说法错误，应选“错误”。\n【其他选项为何错】本题是判断题，另一选项“正确”不成立。Dev C++ 只是编辑器、编译器和调试器的集合工具，不具备管理进程、调度内存、驱动硬件等操作系统功能，把它当作操作系统属于概念混淆，所以判断应选错误。",
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
          "explanation": "【解题思路】本题考查标准库函数名与用户标识符的冲突问题。解题关键是理解 scanf 虽然是库函数名而非语言关键字，但程序中已存在该名字的声明，再用作变量名会产生冲突。\n【判断依据】scanf 是 C/C++ 标准库中声明的标准输入函数。程序在包含头文件后，scanf 已被作为函数名引入，同一作用域内再定义名为 scanf 的变量，就会与库函数名发生重定义冲突，编译时报错。因此“C++ 程序中不能用 scanf 作为变量名”的说法正确，应选“正确”。\n【其他选项为何错】本题是判断题，另一选项“错误”不成立。虽然 scanf 不是 C++ 的关键字，但它是标准库函数，程序中同名函数与同名变量共存会引发命名冲突，实际编程中不能用 scanf 作变量名，所以判断应选正确。",
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
          "explanation": "【解题思路】本题考查质数判断的算法实现。质数指只有 1 和自身两个正因数的正整数，解题关键是理解 cnt 统计的是 1 到 N 之间能整除 N 的数的个数。\n【逐步推理】循环变量 i 从 1 取到 N，每当 i 能整除 N 时 cnt 加一。判断整除应使用取余运算 N % i，且结果等于 0 表示整除，所以条件应为 N % i == 0。循环结束后若 cnt == 2，说明因数只有 1 和 N 两个，N 就是质数。故横线处应填 N % i == 0。\n【其他选项为何错】选项 A“N % i”错误，它只是一个取余的数值结果，不是布尔判断，逻辑上无法正确统计因数；选项 C“N / i == 0”错误，N / i 是整除的商，只有当 N 小于 i 时才为 0，不能判断整除关系；选项 D“N / i”错误，同样只是求商，不能用来判断 i 是否为 N 的因数。",
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
          "explanation": "【解题思路】本题考查基础的信息技术常识。解题关键是知道鸿蒙是华为研发的操作系统，以及它和手机上运行的小程序、计时器等功能应用之间的区别。\n【逐步推理】鸿蒙系统（HarmonyOS）是华为公司自主研发的面向多种智能设备的操作系统，用于手机、平板、手表等设备，为它们提供运行环境和硬件管理。华为手表上搭载的鸿蒙正是操作系统，所以选“操作系统”。\n【其他选项为何错】选项 A“小程序”错误，小程序是运行在平台之上的轻量应用，不是系统级软件；选项 B“计时器”错误，计时器只是手表里的一个功能应用，与系统无关；选项 D“神话人物”错误，鸿蒙虽然出自中国古代神话，但在本题语境中指华为的操作系统，不是人物。",
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
          "explanation": "【解题思路】本题考查计算机体系结构的基础知识。解题关键是记住现代通用计算机普遍采用的“存储程序”思想由冯·诺依曼提出。\n【逐步推理】冯·诺依曼在 1945 年提出的体系结构包含运算器、控制器、存储器、输入设备和输出设备五大部件，其核心思想是程序和数据一起存放在存储器中，由 CPU 依次取出指令执行。目前几乎所有通用电子计算机都遵循这一体系结构，因此现代计算机基于冯·诺依曼体系结构，选“冯·诺依曼”。\n【其他选项为何错】选项 A“图灵”错误，图灵提出的是图灵机理论模型，属于计算理论而非计算机硬件体系结构；选项 C“阿塔纳索夫”和选项 D“埃克特-莫克利”错误，他们分别是 ABC 计算机和 ENIAC 计算机的主要研制者，贡献在于具体机器的建造，而非被广泛沿用的体系结构。",
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
          "explanation": "【解题思路】本题考查 C++ 函数定义的完整语法。函数定义格式为“返回类型 函数名(参数类型 参数名, ...) {函数体}”，解题关键是逐个核对返回类型和每个形参的类型声明。\n【逐步推理】选项 B 写作 int add(int a, int b)，返回类型为 int，函数名为 add，两个形参 int a 和 int b 都分别注明了类型，符合 C++ 语法规范，能够正确编译运行。因此选项 B 是正确的函数定义。\n【其他选项为何错】选项 A“int add(a, b)”错误，形参 a、b 前面缺少类型说明，C++ 不允许省略形参类型；选项 C“add(int a, int b)”错误，缺少返回类型，函数定义不能省略返回类型；选项 D“int add(int a, b)”错误，形参 b 前缺少类型，只写了参数名，语法不完整。"
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
          "explanation": "【解题思路】本题考查函数声明（函数原型）的作用。解题关键是区分“声明”与“定义”：声明只提供接口信息，不含函数体。\n【逐步推理】函数声明是一条以分号结尾、不含函数体的语句，其作用是把函数的名字、返回类型和参数类型提前告知编译器。这样编译器在遇到函数调用时，就能据此检查实参的个数和类型是否匹配。因此“告知编译器函数的名称、返回类型和参数类型”正确，选项 B 符合题意。\n【其他选项为何错】选项 A“实现函数的功能”错误，实现功能的是含函数体的函数定义，声明本身不包含实现代码；选项 C“调用函数”错误，调用函数是通过函数名加实参的调用语句完成，声明不会触发任何执行；选项 D“定义全局变量”错误，函数声明与全局变量的定义无关。"
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
          "explanation": "【解题思路】本题考查识别函数的返回类型。返回类型写在函数名之前，解题关键是直接在函数头中找出 square 前面紧挨着的类型名。\n【逐步推理】函数头为 double square(double x)，返回类型是函数名 square 前面的 double。函数体内 return x*x，其中 x 是 double 型，x*x 的结果也是 double 型，与声明的返回类型一致。因此该函数的返回类型是 double，选项 B 正确。\n【其他选项为何错】选项 A“int”错误，虽然返回值可以隐式转换为 int，但函数声明中明确写的是 double；选项 C“void”错误，该函数通过 return 返回了 x*x 的值，不是无返回值函数；选项 D“bool”错误，函数头中没有任何 bool 类型出现。"
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
          "explanation": "【解题思路】本题考查 void 类型函数的调用方式。void 函数没有返回值，解题关键是判断哪种调用方式不把 void 函数当作有值的表达式使用。\n【逐步推理】void 函数执行完即返回，不产生任何值，因此只能作为独立语句调用，写成 voidFunc(); 即可。这种形式合法，能正确调用函数执行其功能。选项 B 正确。\n【其他选项为何错】选项 A“cout << voidFunc();”错误，cout 输出需要具体的值，void 函数无值可输出，编译报错；选项 C“return voidFunc();”错误，把 void 函数返回值作为 return 的表达式，类型不匹配；选项 D“int x = voidFunc();”错误，不能把 void 类型赋给 int 变量，同样编译报错。"
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
          "explanation": "【解题思路】本题考查常用数学库函数的记忆与区分。解题关键是分清各函数的功能：abs 求绝对值、pow 求幂、sqrt 求平方根、fabs 求浮点绝对值。\n【逐步推理】abs() 是 C++ 中计算整数绝对值的标准库函数，是求绝对值最常用的函数，符合题目要求，选项 C 正确。\n【其他选项为何错】选项 A“pow()”错误，它用于计算幂，如 pow(2, 3) 等于 8；选项 B“sqrt()”错误，它用于计算平方根；选项 D“fabs()”错误，fabs() 用于计算 double 型浮点数的绝对值，而常规考查整数绝对值时使用 abs()，本题答案为 abs()。"
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
          "explanation": "【解题思路】本题考查函数的定义、调用与输出。解题关键是阅读 printSum 的函数体，确认它接收两个参数并把它们的和输出到屏幕。\n【逐步推理】main 中调用 printSum(3, 5)，实参 3、5 分别传给形参 a、b。函数体内执行 cout << a + b，即输出 3 + 5 的结果 8。函数没有返回值，但输出已在函数内完成，程序结束前屏幕显示 8，所以输出为 8，选项 C 正确。\n【其他选项为何错】选项 A“3”和选项 B“5”错误，函数输出的是 a 与 b 的和，而不是单独的某个参数；选项 D“编译错误”错误，代码语法完全正确，a + b 是合法的表达式，可以正常编译运行。"
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
          "explanation": "【解题思路】本题考查三目运算符和函数返回值的结合。解题关键是理解 a > b ? a : b 的含义：条件成立返回 a，否则返回 b，即返回两者中较大的值。\n【逐步推理】max2(10, 7) 调用时 a = 10、b = 7。判断 10 > 7 为真，条件表达式取 a 的值 10，函数 return 返回 10，main 中 cout 输出 10。因此输出为 10，选项 A 正确。\n【其他选项为何错】选项 B“7”错误，7 是两者中较小的值，三目运算符在条件为真时选择的是 a 即 10；选项 C“17”错误，函数求的是最大值而不是两个数的和；选项 D“编译错误”错误，代码语法正确，可以正常编译运行。"
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
          "explanation": "【解题思路】本题考查三种参数传递方式的区别。解题关键是判断哪一种方式下形参与实参是相互独立的内存，从而函数内修改形参不影响实参。\n【逐步推理】值传递时，实参的值被复制一份交给形参，形参和实参是两块独立的内存单元，函数内对形参的修改不会影响实参。因此不修改原始变量的是值传递，选项 A 正确。\n【其他选项为何错】选项 B“引用传递”错误，引用参数是实参的别名，与实参共享同一内存，修改引用就是修改实参；选项 C“指针传递”错误，通过指针解引用可以直接修改实参所指向的变量；选项 D“以上都会修改”错误，值传递方式下实参不会因形参修改而改变。"
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
          "explanation": "【解题思路】本题考查递归函数的识别。解题关键是观察递归关系和基准情形：fun(a) 等于 a 乘 fun(a-1)，且 a <= 1 时返回 1，这正是阶乘的递归定义。\n【逐步推理】fun(a) = a * fun(a - 1) = a * (a - 1) * ... * 2 * 1，基准情形 a <= 1 返回 1。例如 fun(5) = 5 * 4 * 3 * 2 * 1 = 120，与数学上 5! 完全一致。因此函数 fun 的功能是求 a 的阶乘，选项 B 正确。\n【其他选项为何错】选项 A“求 a 的平方”错误，平方是 a 自乘一次，没有递归结构；选项 C“求 a 的立方”错误，立方是 a 连乘三次；选项 D“求 a 的斐波那契数”错误，斐波那契数的递归形式是 fib(n) = fib(n - 1) + fib(n - 2)，与本函数连乘的结构完全不同。"
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
          "explanation": "【解题思路】本题考查函数重载的判定规则。重载要求函数名相同而参数列表不同（参数类型、个数或顺序不同），返回类型不参与区分，解题关键是逐项比较各选项的参数列表。\n【逐步推理】选项 C 中两个 add 函数的参数列表分别是 (int, int) 和 (double, double)，参数类型不同，构成合法的函数重载。调用时编译器会根据实参的类型自动选择匹配的版本，因此选项 C 是合法重载。\n【其他选项为何错】选项 A 两个函数都是两个 int 参数，仅参数名不同，参数列表实质相同，属于重复定义会编译报错；选项 B 仅返回类型不同（int 与 double），参数列表相同，编译器无法区分，不构成重载；选项 D 两个函数都是单个 int 参数，仅参数名不同，同样是重复定义。"
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
          "explanation": "【解题思路】本题考查全局变量的作用域。解题关键是识别 x 定义在所有函数之外，属于全局变量，其作用域覆盖整个程序，任何函数内都可直接访问修改。\n【逐步推理】全局变量 x 初始值为 10。调用 change() 时，函数内部执行 x = 20，直接修改了全局变量 x，使其变为 20。返回 main 后 cout << x 输出的就是修改后的值 20，因此输出为 20，选项 B 正确。\n【其他选项为何错】选项 A“10”错误，change() 已把全局变量 x 修改为 20，输出的不是初始值；选项 C“编译错误”错误，函数内部访问和修改全局变量完全合法；选项 D“不确定”错误，程序的执行流程确定，结果明确是 20，不存在不确定性。"
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
          "explanation": "【解题思路】本题考查函数调用的实参匹配规则。解题关键是核对 add 函数的形参列表：它需要两个 int 类型的参数，实参的个数和类型必须与之对应。\n【逐步推理】add 的定义为 int add(int a, int b)，形参是两个 int。选项 C 的调用 add(3, 5) 提供了两个 int 实参，与形参一一对应，能够正确编译并返回 3 + 5 的结果，因此是正确调用。\n【其他选项为何错】选项 A“add();”错误，没有提供任何实参，与两个形参不匹配；选项 B“add(3);”错误，只提供一个实参，个数不足；选项 D“add(3, 5, 7);”错误，提供了三个实参，超出形参个数，编译器会报错。"
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
          "explanation": "【解题思路】本题考查默认参数的使用规则。解题关键是理解默认参数必须从右向左连续设置，也就是一旦某个形参有默认值，它右侧的所有形参都必须有默认值。\n【逐步推理】调用函数时，若省略实参只能从最右边开始省略，这样才能通过默认值补足。因此默认参数必须集中在参数列表的末尾，不能出现中间有默认值而右侧无默认值的情况。所以“默认参数只能放在参数列表的末尾”正确，选项 A 符合题意。\n【其他选项为何错】选项 B“默认参数可以放在任意位置”错误，参数中间带默认值而右侧不带会导致调用时实参无法正确对应，语法不允许；选项 C“所有参数都必须提供默认值”错误，可以只有部分参数有默认值；选项 D“默认参数不能与函数重载一起使用”错误，两者可以同时使用，只需注意避免调用歧义。"
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
          "explanation": "【解题思路】本题考查引用传递的参数传递方式。解题关键是理解 int &a、int &b 是实参的别名，函数内对形参的操作会直接作用于实参本身。\n【逐步推理】调用 swap2(x, y) 时，引用形参 a 就是变量 x，b 就是变量 y。函数通过临时变量 t 完成交换：t 保存 a 的值，a 赋值为 b，b 赋值为 t，即交换了 x 和 y 的内容。交换后 x = 7、y = 3，cout 输出“7 3”，选项 B 正确。\n【其他选项为何错】选项 A“3 7”错误，这是交换前的值，引用传递已经实际交换了两个实参；选项 C“3 3”错误，交换逻辑正确，不会使两个变量变成相同的值；选项 D“编译错误”错误，引用参数语法完全合法，程序可以正常编译运行。"
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
          "explanation": "【解题思路】本题考查默认参数声明的合法性判断。解题关键是套用“默认参数必须从右向左连续设置”的规则，检查每个选项中有默认值的参数右侧是否都紧跟默认值。\n【逐步推理】选项 A 为 int add(int a, int b = 0)，b 位于参数列表最右端，有默认值且其右侧没有参数，满足连续规则，声明合法，选项 A 正确。\n【其他选项为何错】选项 B 中 a = 0 右侧的 b 没有默认值，违反从右向左连续的规则；选项 C 中 b = 0 右侧的 c 没有默认值，同样违规；选项 D 中 a = 0 右侧的 b 没有默认值，仍然违规。B、C、D 三项编译都会报错，均不合法。"
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
          "explanation": "【解题思路】本题考查斐波那契数列的递归计算。解题关键是抓住递归基准 fib(0) = 0、fib(1) = 1 和递推式 fib(n) = fib(n - 1) + fib(n - 2)，从基准逐步推导到 fib(5)。\n【逐步推理】先算 fib(2) = fib(1) + fib(0) = 1 + 0 = 1；fib(3) = fib(2) + fib(1) = 1 + 1 = 2；fib(4) = fib(3) + fib(2) = 2 + 1 = 3；fib(5) = fib(4) + fib(3) = 3 + 2 = 5。因此 fib(5) 返回 5，main 中输出 5，选项 B 正确。\n【其他选项为何错】选项 A“3”是 fib(4) 的值，不是 fib(5)；选项 C“8”是 fib(6) 的值，向后多推了一项；选项 D“13”是 fib(7) 的值，同样对应更靠后的项。它们都不是 fib(5) 的结果。"
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
          "explanation": "【解题思路】本题考查值传递下形参与实参的关系。解题关键是理解 func 的参数按值传递，形参 x 是实参 a 的副本，函数内修改 x 不影响 a。\n【逐步推理】调用 func(a) 时，x 得到实参 a 的值 5。函数内执行 x = 100 后，cout << x 输出 100。函数结束返回 main，由于值传递，实参 a 仍然是 5，cout << a 输出 5。因此整体输出为“100 5”，选项 B 正确。\n【其他选项为何错】选项 A“100 100”错误，值传递下实参 a 不会因形参修改而改变；选项 C“5 5”错误，函数内 x 已被赋值为 100，第一次输出应为 100；选项 D“5 100”错误，顺序颠倒，第一次输出是函数内的 100，第二次才是 a 的值 5。"
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
          "explanation": "【解题思路】本题考查递归求和函数的推导。解题关键是观察递归关系 func(n) = n + func(n - 1) 和基准情形 func(0) = 0，逐步展开累加。\n【逐步推理】func(5) = 5 + func(4) = 5 + 4 + func(3) = 5 + 4 + 3 + func(2) = 5 + 4 + 3 + 2 + func(1) = 5 + 4 + 3 + 2 + 1 + func(0) = 15。递归展开后等于 1 到 5 的累加和，输出为 15，选项 B 正确。\n【其他选项为何错】选项 A“10”是 1 到 4 的和，漏算了最外层的加数 5；选项 C“5”只考虑了最外层的返回值，忽略了递归内层的累加；选项 D“20”没有依据，正确递推展开累加的结果是 15，而非 20。"
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
          "explanation": "【解题思路】本题考查引用传递的效果。解题关键是理解 doubleIt 的形参是引用类型 int &a，a 是实参 x 的别名，函数内对 a 的修改就是对 x 的修改。\n【逐步推理】调用 doubleIt(x) 时，a 成为 x 的别名。函数内执行 a = a * 2，即对 x 本身执行 x = 5 * 2，x 变为 10。返回 main 后 cout << x 输出 10，选项 B 正确。\n【其他选项为何错】选项 A“5”错误，引用传递使 x 被修改为 10，不再是初值；选项 C“2.5”错误，5 * 2 = 10，函数做的是乘法翻倍而不是除法；选项 D“编译错误”错误，引用参数的语法合法，程序可以正常编译运行。"
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
          "explanation": "【解题思路】本题考查函数原型与函数定义的一致性。解题关键是核对每个定义与原型 int max(int, int) 的返回类型和参数列表是否完全一致。\n【逐步推理】原型声明返回类型为 int、参数为两个 int。定义 B 写作 double max(int a, int b)，返回类型是 double，与原型声明的 int 不一致，编译器会报“返回类型冲突”的错误，因此 B 是错误的配对，选项 B 正确。\n【其他选项为何错】选项 A 的定义返回 int、参数两个 int，与原型完全一致，配对正确；选项 C 是三个参数的 max，参数个数与原型不同，属于另一个重载版本，不会与原型冲突；选项 D“以上都正确”错误，因为定义 B 与原型返回类型不匹配，确实存在问题。"
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
          "explanation": "【解题思路】本题考查全局变量在多次函数调用中的累计变化。解题关键是按调用顺序逐个统计 inc 和 dec 对全局变量 count 的增减影响。\n【逐步推理】count 为全局变量，初值 0。main 中依次调用 inc() 三次，每次 count 加一，三次后 count = 0 + 3 = 3；接着调用 dec() 一次，count 减一，变为 2。main 结束前 count 的最终值为 2，选项 C 正确。\n【其他选项为何错】选项 A“0”错误，忽略了函数调用对全局变量的实际修改；选项 B“1”错误，少算了一次 inc 的加一；选项 D“3”错误，漏算了 dec() 对 count 的一次减一操作。"
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
          "explanation": "【解题思路】本题考查递归函数中语句执行顺序对输出的影响。解题关键是注意 cout 位于递归调用之后，因此输出在递归返回的过程中进行，顺序为从小到大。\n【逐步推理】printN(3) 先调用 printN(2)，printN(2) 先调用 printN(1)，printN(1) 先调用 printN(0)。printN(0) 因 n <= 0 直接返回，随后逐层回溯：printN(1) 输出 1，printN(2) 输出 2，printN(3) 输出 3。因此输出为“1 2 3”，选项 A 正确。\n【其他选项为何错】选项 B“3 2 1”是 cout 放在递归调用之前时的输出顺序，与本题的顺序恰好相反；选项 C“0 1 2 3”错误，n <= 0 时函数直接 return，不会输出 0；选项 D“3 3 3”错误，每一层输出的 n 值并不相同。"
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
          "explanation": "【解题思路】本题考查函数基本规则的判断。解题关键是逐项核对四个说法，尤其要注意函数调用自身的递归特性是否被正确描述。\n【逐步推理】C++ 允许函数在函数体内直接调用自身，这种编程方式称为递归，求阶乘、斐波那契数等函数都依靠递归实现。因此“函数不能直接调用自身”这一说法是错误的，选项 C 是题目要找的错误说法。\n【其他选项为何错】选项 A 一个函数可以有多个 return 语句，例如在不同条件分支中各返回一次，说法正确；选项 B 返回类型为 void 的函数也可以用不带值的 return 提前结束函数，说法正确；选项 D 形参名与实参名可以相同，因为形参和实参位于不同作用域，互不影响，说法正确。"
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
          "explanation": "【解题思路】本题考查通过阅读循环代码判断函数功能。解题关键是跟踪 result 的变化：初始为 1，循环执行 exp 次、每次乘以 base，即连乘 exp 个 base。\n【逐步推理】以 power(2, 3) 为例，循环 i 从 0 到 2 共三次，result 依次变为 1 * 2 = 2、2 * 2 = 4、4 * 2 = 8，恰好等于 2 的 3 次方。循环次数由 exp 控制，连乘的是 base，因此函数的功能是计算 base 的 exp 次幂，选项 B 正确。\n【其他选项为何错】选项 A“计算 base + exp”错误，函数执行的是连乘运算而非加法；选项 C“计算 exp 的 base 次幂”错误，底数与指数不能颠倒，循环乘的是 base、次数是 exp；选项 D“计算 base * exp”错误，连乘 exp 次的结果远大于一次乘法 base * exp。"
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
          "explanation": "【解题思路】本题考查值传递下函数内交换变量的效果。解题关键是注意 foo 的形参 x、y 是实参 a、b 的副本，函数内的修改不会影响实参。\n【逐步推理】调用 foo(a, b) 时 x = 1、y = 2。执行 x = x + y 得 x = 3；执行 y = x - y 得 y = 3 - 2 = 1。函数内输出“3 1 ”（带空格）。返回 main 后，由于值传递，a = 1、b = 2 保持不变，输出“1 2”。整体输出为“3 1 1 2”，选项 A 正确。\n【其他选项为何错】选项 B“3 1 3 1”错误，值传递不会修改实参 a、b，它们仍是 1 和 2；选项 C“3 2 1 2”错误，函数内 y 已被改为 1，输出第二个数是 1 而不是 2；选项 D“1 2 1 2”错误，函数内确实输出了修改后的 x、y，第一组数字应为 3 1。"
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
          "explanation": "【解题思路】本题考查函数体内 return 语句的个数限制。解题关键是回忆语法规定：函数中 return 语句的数量不受限制，判断的核心是区分“语句数量”与“每次执行次数”。\n【判断依据】C++ 允许一个函数体内出现多个 return 语句，通常放在不同的条件分支中，例如 if 语句的不同分支分别返回不同值。每次调用函数时只会执行其中一个 return，但这并不意味着只能写一条 return。因此“一个函数的 return 语句只能出现一次”的说法错误，应选“错误”。\n【其他选项为何错】本题是判断题，另一选项“正确”不成立。多个 return 语句并存是常见且合法的写法，只要程序控制流保证每次调用只执行其中一个即可，把“只能出现一次”当作硬性规定是对语法的误解，所以判断应选错误。",
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
          "explanation": "【解题思路】本题考查函数定义位置的合法性。解题关键是理解 C++ 的“先声明后使用”规则：只要在调用前编译器已经见到函数原型或完整定义即可。\n【判断依据】函数既可以定义在 main 之前，也可以定义在 main 之后。若定义在 main 之后，只需在调用前先给出函数声明（函数原型），编译器就能正确编译调用语句。因此“函数的定义必须在 main 函数之前”的说法错误，应选“错误”。\n【其他选项为何错】本题是判断题，另一选项“正确”不成立。C++ 并没有强制函数定义必须位于 main 之前的规则，先声明后定义是常见的做法，把函数定义放在 main 之后完全合法，所以判断应选错误。",
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
          "explanation": "【解题思路】本题考查引用参数的作用。解题关键是理解引用形参是实参的别名，两者共享同一内存单元，函数内对形参的修改会直接反映到实参上。\n【判断依据】引用参数的写法形如 int &a，在函数调用时它成为实参的别名，不再复制一份副本。函数体内对引用形参的赋值、自增等操作都会直接作用于调用者的变量。因此“函数可以通过引用参数修改调用者的变量值”的说法正确，应选“正确”。\n【其他选项为何错】本题是判断题，另一选项“错误”不成立。引用传递与值传递的本质区别就在于修改能否外传，引用形参与实参共享内存，修改必然生效，这正是引用传递的设计目的，所以判断应选正确。",
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
          "explanation": "【解题思路】本题考查函数重载的判定依据。解题关键是记住重载的区分条件：参数列表（类型、个数或顺序）必须不同，返回类型不属于函数签名的一部分。\n【判断依据】函数重载要求函数名相同且参数列表不同，编译器依靠参数列表区分同名的多个函数。若仅返回类型不同而参数列表相同，编译器无法确定调用时应该选用哪一个函数，会产生重定义错误。因此“函数重载时仅返回类型不同即可构成合法重载”的说法错误，应选“错误”。\n【其他选项为何错】本题是判断题，另一选项“正确”不成立。返回类型不能作为重载的区分依据是 C++ 的明确规则，仅改变返回类型而参数不变的同名函数是重复定义，会导致编译失败，所以判断应选错误。",
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
          "explanation": "【解题思路】本题考查递归函数的终止条件与栈的关系。解题关键是理解每次递归调用都会在调用栈上压入新的栈帧，栈空间是有限的。\n【判断依据】递归函数每次调用自身时，系统都会在调用栈上分配一个新的栈帧，保存参数、返回地址和局部变量。若没有正确的终止条件（基例），递归会无限进行，栈帧不断累积，最终耗尽栈空间，引发栈溢出错误。因此“递归函数如果没有正确的终止条件，会导致栈溢出错误”的说法正确，应选“正确”。\n【其他选项为何错】本题是判断题，另一选项“错误”不成立。缺少终止条件的递归必然无限调用自身，而栈容量有限，最终一定溢出，这是所有递归都必须设置基例的原因，所以判断应选正确。",
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
      "explanation": "【解题思路】sizeof 是 C++ 的运算符，用来求出某个类型或变量在内存中占用的字节数。int 占几个字节由具体平台决定，题目按 GESP 考试常用环境判断。【逐步推理】在 GESP 常见的 32 位及以上平台上，int 占 4 字节，也就是 32 个二进制位，取值范围约为 -2147483648 到 2147483647。所以 sizeof(int) 的值为 4。【其他选项为何错】1 字节是 char 类型的大小（sizeof(char) 恒为 1）；2 字节是 short 类型的大小（老式 16 位平台上 int 也可能是 2 字节，但现代平台已很少见）；8 字节是 long long、double 或 64 位平台上指针的大小。"
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
      "explanation": "【解题思路】C++ 对变量名（标识符）有明确规则：只能由字母、数字、下划线组成；不能以数字开头；不能与关键字同名。【逐步推理】逐一检查四个选项：_count 以下划线开头，后面是英文字母，全是字母和下划线，且不是任何 C++ 关键字，因此完全合法。【其他选项为何错】3abc 以数字 3 开头，违反“不能以数字开头”的规则；my-name 中间有连字符 -（减号），不在允许的字符集内；class 是 C++ 关键字（用于定义类），不能被当作变量名。"
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
      "explanation": "【解题思路】当两个 int 类型的整数做除法时，结果仍然是 int，采用整数除法：商的小数部分直接丢弃，不进行四舍五入。【逐步推理】17 除以 5，真实商是 3.4，截断小数部分后得到 3，因此 17 / 5 的值是 3。【其他选项为何错】3.4 是数学上的精确商，需要写成 17.0 / 5 这类浮点数运算才能得到；4 是四舍五入的结果，整数除法不做四舍五入；3.0 是浮点形式，而 17 / 5 的结果是整数 3，不是 3.0。"
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
      "explanation": "【解题思路】% 是取模（求余数）运算符，它计算两个整数相除后剩下的余数。【逐步推理】10 除以 3，商是 3，余数是 1，因为 10 = 3 × 3 + 1，所以 10 % 3 的结果是 1。【其他选项为何错】3 是商而不是余数；0 不是正确的余数；3.33 是 10 ÷ 3 的小数商，而取模运算的结果一定是整数。"
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
      "explanation": "【解题思路】算术运算符有优先级：乘除（*、/、%）优先于加减（+、-）。此题先做乘法再做加法。【逐步推理】先算 4 × 5 = 20，再算 3 + 20 = 23，所以 cout 输出 23。【其他选项为何错】35 是把运算当成从左到右依次执行（3+4=7，再 7×5=35），违反了乘法优先的规则；20 只算了 4×5 而漏掉了前面的 3；7 只算了 3+4 而漏掉了 ×5。"
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
      "explanation": "【解题思路】endl 和 \\n 都能让输出换行，区别在于 endl 在换行之后还会刷新输出缓冲区。【逐步推理】endl 等价于输出一个换行符后再调用 flush，把缓冲区里积攒的数据立刻写入屏幕或文件；而 \\n 只负责换行，数据可能还要等缓冲区满或程序结束时才真正输出。对程序运行结果来说两者都换行，但底层的刷新机制不同。【其他选项为何错】选项1“完全相同”忽略了刷新行为的差异；选项3“\\n刷新缓冲区”把方向搞反了，实际是 endl 会刷新缓冲区；选项4“都不能换行”明显错误，两者都能换行。"
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
      "explanation": "【解题思路】C++ 中单个等号 = 是赋值运算符，双等号 == 才是判断是否相等。if 的括号里是一个赋值表达式，它的值就是被赋进去的那个值。【逐步推理】执行 a = 5 会把 5 赋给变量 a，整个表达式 a = 5 的值是 5；在 C++ 里，非零数值在布尔条件中表示“真”，所以 if (a = 5) 的条件为真，进入分支体，同时 a 的值也被改成了 5。【其他选项为何错】选项1“判断 a 是否等于 5”是 == 的语义，并且 == 不会修改 a 的值；选项3“编译错误”不对，这行代码能正常编译；选项4“条件为假”不对，5 是非零值，条件为真。"
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
      "explanation": "【解题思路】while 和 do-while 都能实现循环，关键差别在于“先判断”还是“先执行”。【逐步推理】while 循环先判断条件，条件为真才执行循环体，如果一开始条件就是假，循环体一次也不会执行；do-while 循环先无条件执行一次循环体，再判断条件，条件为真则继续循环。所以 do-while 至少会执行一次循环体。【其他选项为何错】选项1“do-while 更快”没有依据，两种循环速度上没有必然差别；选项3“do-while 不需要条件”错误，do-while 在结尾同样要有 while(条件)；选项4“while 不能嵌套”错误，while 完全可以嵌套使用。"
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
      "explanation": "【解题思路】一个循环是否会无限执行，要看它的终止条件有没有可能变成假。如果条件恒为真，就永远退不出来。【逐步推理】while(true) 的括号里是常量 true，条件永远为真，循环体每次都会执行，永远不会结束，造成无限循环。【其他选项为何错】选项1 for(int i=0;i<10;i++) 中 i 从 0 加到 10 后条件 i<10 不成立，循环正常结束，共执行 10 次；选项3 for(int i=10;i>0;i--) 中 i 递减到 0 时条件不成立，正常结束；选项4 while(0) 条件恒为假，循环体一次都不执行，不算无限循环。"
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
      "explanation": "【解题思路】C++ 数组的下标从 0 开始编号，长度为 n 的数组，有效下标是 0 到 n-1。【逐步推理】int a[5]; 声明了一个长度为 5 的数组，五个元素分别是 a[0]、a[1]、a[2]、a[3]、a[4]，有效下标范围是 0 到 4。【其他选项为何错】选项1“1~5”是很多从 1 开始编号的语言的习惯，C++ 从 0 开始；选项2“0~5”超出了范围，a[5] 已经越界，属于非法访问；选项4“1~4”漏掉了 a[0]，少了一个下标。"
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
      "explanation": "【解题思路】C++ 中字符常量用单引号括起来，字符串常量用双引号括起来，这是区分 char 与字符串的关键。【逐步推理】'A' 用单引号括住一个字符 A，类型是 char，表示单个字符。【其他选项为何错】选项1 “A” 用双引号，是字符串常量，类型不是 char；选项2 裸写的 A 会被当成标识符（变量名），在代码中直接出现是未定义的，不能表示字符；选项4 \\t 是转义序列，表示制表符，且作为字符常量应写成 '\\t'，它不是一个普通的可见字符。"
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
      "explanation": "【解题思路】string 类的 length() 成员函数返回字符串中字符的个数，不包含字符串结尾的空字符。C 风格的 strlen 同样不统计结尾的 \\0。【逐步推理】字符串 \"hello\" 由 h、e、l、l、o 五个字符组成，所以 s.length() 的结果是 5。【其他选项为何错】4 是少数了一个字符（比如漏掉了一个 l）；6 是把结尾的空字符 \\0 也算进去了，length() 和 strlen 都不统计它；这个值确定就是 5，不存在“不确定”的情况。"
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
      "explanation": "【解题思路】函数声明（也叫函数原型）要写出返回值类型、函数名和参数表，参数表里每个参数都必须单独写出类型。【逐步推理】int max(int a, int b); 返回值类型是 int，函数名是 max，两个参数 int a 和 int b 都写明了类型，是完全正确的函数声明。【其他选项为何错】选项1 int max(a,b); 中的参数 a、b 都没有类型，声明不合法；选项2 int max(int a,b); 中第一个参数有类型，第二个参数 b 没有写类型，声明仍然不合法；选项4 max(int a,int b); 缺少返回值类型，也不合法。"
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
      "explanation": "【解题思路】% 与 / 的优先级相同，结合方向是自左向右，所以按书写顺序先算 16/4，再对结果取模。【逐步推理】16 / 4 = 4；再用 4 对 2 取模，4 % 2 = 0（4 能被 2 整除，余数为 0）。所以整个表达式的值是 0。【其他选项为何错】8 是把运算顺序理解成 16 / (4 % 2) 一类的错误，甚至会出现除以 0 的问题；4 只算了 16/4，漏掉了后面的取模；2 是把 %2 错当成 ÷2，即 4 ÷ 2 = 2。"
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
      "explanation": "【解题思路】先分别求出取模 N%3 与整除 N/5 的结果，再把两个整数相加。注意 N/5 是整数除法。【逐步推理】N = 12 时，12 % 3 = 0（12 能被 3 整除，余 0）；12 / 5 = 2（整数除法，12÷5=2 余 2，取商 2）；两者相加 0 + 2 = 2，输出 2。【其他选项为何错】6 是把取模和整除的对象搞反了：12 % 5 = 2，12 / 3 = 4，2 + 4 = 6；6.4 和 2.4 是把整除结果当成小数（如 12/5=2.4），但 N 是 int，12/5 的结果是整数 2，所以结果一定是整数，不可能是小数。"
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
      "explanation": "【解题思路】关键字是语言预先保留、有固定含义的词，不能当作变量名。要区分“关键字”和“标准库对象”。【逐步推理】int、double、bool 都是 C++ 内置的基本类型关键字，其中 bool 是布尔类型。cin 虽然名字看起来像关键字，但它其实是头文件 <iostream> 里定义的一个标准输入流对象，属于标准库，不是语言保留字。【其他选项为何错】int 是关键字；double 是关键字；bool 是关键字。只有 cin 不是关键字。"
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
      "explanation": "【解题思路】关系运算符（>、<、==、!= 等）比较后得到的值是布尔类型，只有 true 或 false 两种。【逐步推理】5 > 3 成立，结果为 true，类型是 bool。【其他选项为何错】int 是 C 语言中比较运算的结果类型，C++ 已经改为 bool；double 是浮点类型，比较运算不会得到它；string 是字符串类型，与比较结果无关。"
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
      "explanation": "【解题思路】看 for 循环的步长和终止条件：i 从 0 开始，每次增加 2，只要 i 仍小于 10 就执行一次 count++。【逐步推理】i 依次取 0、2、4、6、8，这五个值都满足 i<10，count 每次加 1，共加 5 次；当 i 变为 10 时，10<10 不成立，循环结束。所以 count 的最终值是 5。【其他选项为何错】10 是按每次加 1（i++）来数得到的次数；4 是漏数了 i=0 这一次；6 是误把 i=10 也当成了满足条件的取值。"
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
      "explanation": "【解题思路】字符与整数可以直接相加。英文字母在 ASCII 表中连续排列，'A' 的 ASCII 码是 65，'B' 是 66。【逐步推理】'A' + 1 = 65 + 1 = 66，66 对应的字符正是 'B'。char c = 'A' + 1 后 c 中存的是字符 'B'。【其他选项为何错】'A' 是没加 1 的结果；66 是 'B' 的 ASCII 数值，c 的类型是 char，若按字符输出得到的是 B，只是按整数输出才会看到 66，题目问的是字符值，应为 'B'；A1 是把字符当成字符串去拼接，字符和整数相加不是字符串拼接。"
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
      "explanation": "【解题思路】break 和 continue 都是循环控制语句，作用不同：break 用于彻底退出当前循环，continue 用于跳过本次循环的剩余部分。【逐步推理】执行到 break 时，程序立即跳出当前所在的最内层循环，不再执行循环体中 break 之后的语句，也不再继续循环，直接执行循环后面的代码。【其他选项为何错】选项1“跳过本次循环”和选项4“继续下一次”都是 continue 的功能；选项3“结束程序”是 exit() 等函数或 main 函数 return 才能做到，break 只结束当前循环，不结束程序。"
    },
    {
      "id": "ex_q26",
      "type": "choice",
      "difficulty": 3,
      "question": "以下哪个输出 \"5%2={1}\"？",
      "options": [
        "printf(\"5%%2={%d}\", 5%2)",
        "printf(\"5%2={%d}\", 5%2)",
        "cout << 5 % 2;",
        "printf(\"5%2={1}\")"
      ],
      "answer": 0,
      "explanation": "【解题思路】printf 的格式串里，% 是特殊字符：想原样输出一个 % 必须写成 %%，%d 表示用后面的整数替换。【逐步推理】printf(\"5%%2={%d}\", 5%2) 中：%% 输出一个 %，%d 被 5%2 的计算结果 1 替换，最终得到 \"5%2={1}\"。【其他选项为何错】选项 B \"printf(\\\"5%2={%d}\\\", 5%2)\" 中 %2 不是合法的格式说明符，属于未定义行为；选项 C \"cout << 5 % 2\" 只输出整数 1（没有花括号 \"5%2=\" 前缀）；选项 D \"printf(\\\"5%2={1}\\\")\" 中 %2 同样非法。所以只有选项 A 正确。"
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
      "explanation": "【解题思路】C++ 声明数组的标准语法是“类型 数组名[大小]”。【逐步推理】int a[5]; 声明了一个名为 a、包含 5 个 int 元素的数组，这是标准写法。【其他选项为何错】选项1 int a(5); 是构造/初始化语法，不是数组声明；选项3 int a{5}; 是用大括号初始化，声明的是一个 int 变量并把初值设为 5；选项4 array a[5]; 中 array 不是内置类型（C++ 标准里是 std::array 且用法不是这样），直接写 array 会编译错误。"
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
      "explanation": "【解题思路】return 语句用于结束当前函数的执行，把控制权交还给调用该函数的地方，同时可以携带一个返回值。【逐步推理】当函数执行到 return 时，函数立刻结束，程序回到调用处继续运行下面的代码。比如主函数调用 max(a,b)，max 中 return 后，控制权就回到主函数调用那一行的下一句。【其他选项为何错】选项1“结束整个程序”只有在 main 函数里执行 return 才会结束整个程序，普通函数的 return 只结束当前函数；选项3“重启 main”没有这种功能；选项4“输出结果”是 cout、printf 等输出语句的工作，return 只是把值返回给调用者，本身不负责输出。"
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
      "explanation": "【解题思路】运算优先级从高到低是：括号、乘除、加减。本题先算括号，再算乘法，最后算加法。【逐步推理】先算括号里的 3 - 2 = 1；再算乘法 1 × 3 = 3；最后算加法 3 + 5 = 8，所以结果是 8。【其他选项为何错】2 是忽略括号、直接按“先乘除后加减”计算 3 - 2 × 3 + 5 = 3 - 6 + 5 得到的结果，说明括号改变了运算顺序；-13 是符号或顺序上的错误组合；0 同样是错误的运算顺序产物。",
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
      "explanation": "【解题思路】cout 用 << 依次输出各部分。% 的优先级比 << 高，所以 5 % 2 会先被求值，再作为整数输出。字符串字面量 \"5%2=\" 原样输出。【逐步推理】5 % 2 = 1，输出顺序为：先输出字符串 \"5%2=\"，再输出整数 1，连起来就是 \"5%2=1\"。【其他选项为何错】选项1“2 2”和选项2“1 1”把输出理解成两个数字，不符合题目中字符串加数值的写法；选项3“5%2=2”把余数算错了，5 除以 2 商 2 余 1，余数应为 1 而不是 2。",
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
      "explanation": "【解题思路】把上午十点看作第0天的10点，N小时后总小时数为10+N，用整数除法求经过的整天数，用取余求当天时刻。【逐步推理】先算total=10+N；整天数=total/24（整除），当天时刻=total%24（取余）。以N=20为例：total=30，30/24=1，30%24=6，即再过1整天又6小时，对应题目示例中的“第2天6点”（把今天看作第1天）；N=4时total=14，14/24=0，14%24=14，即今天14点。故第一空填(10+N)/24，第二空填(10+N)%24，选B。【其他选项为何错】A把整除与取余的顺序颠倒，得到day=(10+N)%24、hour=(10+N)/24，含义完全相反；C用N而不是10+N，丢掉了上午十点这个起点；D把10当作总数且没有加N，结果恒为0天10时，与题意不符。",
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
      "explanation": "【解题思路】判断整数N是否为偶数，本质是检查N除以2的余数是否为0，需要把取余运算与相等比较组合成条件。【逐步推理】偶数就是能被2整除的数，即N%2的结果为0。写成条件就是N%2==0，条件为真时输出“是偶数”，故选A。若N为奇数，N%2得1，条件不成立。【其他选项为何错】B写N%2=0，单等号是赋值而不是比较，在if条件中既语法有误也语义不对；C只写N%2，非零为真恰好表示奇数，与题意相反；D写N%2!=0表示余数不为0即奇数，同样与题意相反。",
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
      "explanation": "【解题思路】cin>>a的读取方式取决于变量a的数据类型，而题目并没有声明a的类型，所以正确答案是“取决于类型”。【逐步推理】cin按照a的类型解析输入串“5+2”。若a是int，cin读到字符+（非数字）就停止，a被赋值为5；若a是char，a得到字符‘5’；若a是string，则整个“5+2”被读入。同一输入在不同类型下结果不同，因此不能笼统断定结果。【其他选项为何错】A说一定得整数7，cin不会把输入当作表达式求值，只有整数类型时才会得5；B说一定是字符串“5+2”，只有当a是string时成立；C说会报错，实际上cin遇到无法匹配的类型只是读取失败、变量保持原值，程序不会因类型不匹配而报错。",
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
      "explanation": "【解题思路】for循环从i=-10开始，每轮自增1，直到i<10不成立，循环体执行次数就是满足条件的整数个数。【逐步推理】i依次取-10,-9,...,8,9，共10-(-10)=20个数都满足i<10，循环体执行20次。当i自增到10时，条件10<10为假，循环结束。【其他选项为何错】10只是0到9的个数，忽略了负数部分；19漏算了一个数；21把i=10也算进去了，但i=10时条件已为假，不会执行循环体。",
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
      "explanation": "【解题思路】tnt累加满足i%3与i%7都为非零真值的i，即同时不被3整除也不被7整除的数。【逐步推理】i取0到9：i%3==0表示被3整除，i%7==0表示被7整除，二者都不为0才累加。逐个检查：1、2、4、5、8满足条件（其中7被7整除跳过，3、6、9被3整除跳过，0的0%3=0跳过），累加1+2+4+5+8=20，输出20。【其他选项为何错】0是完全没累加任何数；7是把被7整除的7错误加入；18是少加或多减某个数，它们都不是按“既不被3整除也不被7整除”筛选得到的正确和。",
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
      "answer": 1,
      "explanation": "【解题思路】循环条件是 while(N)，只要 N 非 0 就进入循环体；循环体内先把 N 减 1，再判断 N%3==0 是否成立，成立就输出 N 和 #。关键陷阱是：当 N 减到 0 时，判断发生在循环体内，会先输出 0#，之后才轮到 while(0) 判断并退出循环。\n【逐步推理】N 从 10 开始：第 1 轮进入后 N 减为 9，9%3=0，输出 9#；第 2 轮 N 减为 8，8%3=2 不输出；第 3 轮 N 减为 7，7%3=1 不输出；第 4 轮 N 减为 6，6%3=0，输出 6#；第 5 轮 N 减为 5 不输出；第 6 轮 N 减为 4 不输出；第 7 轮 N 减为 3，3%3=0，输出 3#；第 8 轮 N 减为 2 不输出；第 9 轮 N 减为 1 不输出；第 10 轮 N 减为 0，0%3=0 仍为真，输出 0#；此后 N=0，while(0) 为假，循环结束。所以输出依次为 9#、6#、3#、0#，结果为 9#6#3#0#。\n【其他选项为何错】9#6#3# 漏掉了 N 减到 0 时输出的 0#（0%3==0 成立，且该判断先于循环条件检查）；8#7#5#4#2#1# 没有输出任何 3 的倍数，与题意完全不符；10#8#7#5#4#2#1# 错在把进入循环体之前的原始 N=10 也算进去，且遗漏了 9、6、3 这些 3 的倍数。",
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
      "explanation": "【判断依据】printf(\"%d#%d&\",2,3)中%d是格式占位符，分别按整数格式输出2和3；#和&不是格式说明符，作为普通字符原样输出。因此输出序列就是2#3&，与题述一致，判断为正确。",
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
      "explanation": "【判断依据】在C++中“10”是字符串字面量，属于字符串类型；2是整数。字符串类型与整数之间没有定义乘法运算，编译器在编译阶段就会因为类型不匹配而报错，程序无法执行。题述“执行时将报错”正确，判断为正确。",
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
      "explanation": "【判断依据】数字电视能够接收遥控器输入的电视剧名称并据此找到并播放对应剧集，说明设备内部有程序在“接收输入—处理—输出结果”，这正是交互式程序（交互式系统）的特征，即程序能与人进行交互。题述推知正确，判断为正确。",
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
      "explanation": "【解题思路】先判断N%3的真假决定进入if还是else分支，再按%2d的格式输出余数，注意%2d表示占2位右对齐、不足补空格。【逐步推理】N=10，N%3=1，非零为真，进入if分支执行printf(\"第5行代码%2d\",1)。%2d把整数1按2位宽度右对齐输出，前面补一个空格，得到“ 1”。完整输出为“第5行代码 1”。【其他选项为何错】A和B没有考虑%2d补空格，格式与输出不符；D写成“第6行代码”，但10%3=1非零应走if分支，不会走else，所以分支也判断错了。",
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
      "explanation": "【解题思路】逐项验证四个说法：前两项直接模拟程序验证输出，后两项检查修改代码后是否仍能正确求出1~N的奇数和。【逐步推理】原程序累加1到N之间的奇数，i最后自增到N+1。输入10：奇数和1+3+5+7+9=25，i=11，输出“11 25”，A对；输入5：1+3+5=9，i=6，输出“6 9”，B对。若把i+=1移到if之前，i先自增再判断奇偶，第一次判断的是2，奇数1被漏加，求和结果错误，所以C是错误说法；若删除if并把i+=1改成i+=2，i从1起每次加2恒为奇数，同样能累加全部奇数，D对。【其他选项为何错】本题要求选出“错误的”，A、B、D三项描述均正确，只有C会破坏奇数求和逻辑，故只能选C。",
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
      "explanation": "【判断依据】题述没有说明X的数据类型。若X是double类型，16.44/10=1.644，cout输出的是1.644，不是1；只有当X是int且被赋值为16时，整数除法16/10才得1。因此“输出的一定是1”不成立，判断为错误。",
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
      "explanation": "【判断依据】N=10时，N/4两端为整数，整数除法得2；N%4得余数2；N/4.0中除数含小数，执行浮点除法得2.5。cout输出应为“2->2->2.5”。题述把2.5误写成2.0，因此判断为错误。",
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
      "explanation": "【判断依据】float型变量N既能接收整数值也能接收浮点数值的输入。int(float(N))先把N的float值取出来，再用int()强制类型转换，int()对浮点数直接截断小数部分。因此该语句可以完成“输入正负整数或浮点数并转换为整数后输出”的功能，判断为正确。",
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
      "explanation": "【判断依据】printf(\"%d*2\",N)中只有%d是格式说明符，把N=5按整数输出为5；“*2”是普通文本，原样输出。实际输出是“5*2”，并不是10。printf只做格式化输出，不会把输出内容当作表达式求值，判断为错误。",
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
      "explanation": "【判断依据】printf是C标准库提供的库函数名，并不是C++语言的保留关键字。关键字由语言规范规定，如int、if、for、while等，用户完全可以给变量命名为printf（虽然会遮蔽库函数、不推荐）。题述“printf是关键字，不能作变量名”错误，判断为错误。",
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
      "explanation": "【判断依据】在C++中“//”是行注释符。表达式8/4//2中，8/4之后的“//2”被当作注释忽略，整个表达式就是8/4=2。而8/(4/2)=8/2=4，两者并不相等。因此“N+=8/4//2相当于N+=8/(4/2)”的说法错误，判断为错误。",
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
      "explanation": "【解题思路】题目问“不太常见”的调试手段，把常见调试方法与非常见方法区分开即可。【逐步推理】阅读源代码来定位逻辑错误、单步调试逐行观察变量变化、在关键位置输出中间结果来验证中间状态，都是程序员日常使用的调试手段。而“跟踪汇编码”需要阅读和理解编译生成的底层汇编指令，对普通编程学习者很少使用，属于不太常见的做法。【其他选项为何错】阅读源代码、单步调试、输出执行中间结果都在一般教程和实践里被普遍采用，属于常见调试手段，故不选。",
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
      "explanation": "【解题思路】N=10时分别做整数除法和取余运算，再把商和余数相加。【逐步推理】10/3中两个操作数都是整数，做整数除法得3（小数部分截断）；10%3得余数1。两者相加3+1=4，cout输出4。【其他选项为何错】4.3是把除法当成浮点计算（3.33+1约4.33）的结果，但这里是整数除法；6和2都是计算错误的产物，正确值只有4。",
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
      "explanation": "【解题思路】代码中没有声明a和b的数据类型，cin如何解析输入、+如何运算都取决于类型，因此输出无法确定。【逐步推理】若a、b是int，输入5和2后a+b输出整数7；若a、b是string，字符串“5”+“2”拼接成“52”；若a、b是char，输出的是字符码值的和。题目只给出输入而没有声明类型，无法确定具体输出。【其他选项为何错】A假设了整数类型，B假设了字符串类型，C描述的是输出格式而非结果值；三者都是对未声明的类型做了具体假设，因此都不正确。",
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
      "explanation": "【解题思路】for循环让i从0累加到9，Sum求0到9的整数和。【逐步推理】i依次取0,1,2,...,9，共10轮，每轮Sum+=i。0+1+2+...+9=(0+9)*10/2=45，输出45。【其他选项为何错】55是1加到10的和，多加了10；10只是循环次数；9是循环次数减一，它们都不是求和结果。",
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
      "explanation": "【解题思路】循环体每轮把N加1，循环10轮，所以N等于累加的次数。【逐步推理】i从0到9共10轮，每轮N+=1。N初值为0，10轮后N=10，cout输出10。【其他选项为何错】45和55是把i累加进N的结果，而这里累加的是常数1；9漏算了一轮循环，均不正确。",
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
      "explanation": "【解题思路】i从1开始每次加2，i永远是奇数，continue每次都触发，N+=1从未执行。【逐步推理】i取1,3,5,7,9，每一轮i%2==1恒为真，continue立即跳到下一轮循环，循环体后半的N+=1一次都没有执行，N保持初值0，输出0。【其他选项为何错】5是i的取值个数，4是取值个数减一，2没有计算依据；它们都不是N的最终值，N始终为0。",
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
      "explanation": "【解题思路】兄弟数满足N=X*(X+1)，循环i从0到N，逐个判断四个表达式能否在i=X处命中目标，并且不会产生除零等错误。【逐步推理】i) N==i*(i+1)就是定义式，i=X时成立，可行；ii) N==i*(i-1)，令i=X+1则i*(i-1)=X*(X+1)=N，可行；iii) N/(i+1)==i，当N=X*(X+1)时取i=X，商恰为X，整数除法可行；iv) N/(i-1)==i，当i=1时分母为0，造成除零错误，不可行。所以共3个表达式可行。【其他选项为何错】1个、2个漏算了可行的表达式；4个把会除零的iv也算进去，只有3个能完成功能。",
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
      "explanation": "【判断依据】C++是在C语言基础上发展起来的编程语言，支持面向对象的三大特性：封装、继承、多态，因此是面向对象的编程语言；相对于机器语言和汇编语言，C++又属于高级语言。题述“C++是面向对象的高级编程语言”正确，判断为正确。",
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
      "explanation": "【判断依据】10/4=2（整除求商），10%4=2（求余数），此例中两个表达式的值恰巧相等，但/与%的语义完全不同：/求商、%求余。例如10/3=3而10%3=1，明显不同。因此不能由一例相同就得出“/和%可以互相替换”的结论，判断为错误。",
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
      "explanation": "【判断依据】scanf(\"%d\",&N)按格式读取：输入为整数时N被正确赋值；输入含字母或小数时，scanf可能读取其中合法的一部分（如3.6按%d读入3），也可能读不到合法数据使N保持原值，但程序会继续向后执行，并不会“无法执行”或崩溃。题述“将导致无法执行”错误，判断为错误。",
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
      "explanation": "【判断依据】X是整型变量，赋20.24时小数部分被截断，X=20。X++使X变为21，但逗号表达式(X++,X+1)的值为最后一个表达式X+1的结果，即22。22/10两端都是整数，整数除法得2。因此cout输出的是2，而不是2.124，判断为错误。",
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
      "explanation": "【判断依据】break用于跳出循环（或switch），而“什么时候跳出”通常需要先判断条件，所以break一般写在if语句的条件分支中，满足特定条件时才执行break。这是break最常见的配合用法，题述正确，判断为正确。",
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
      "explanation": "【判断依据】C++变量命名规则规定：变量名只能由字母、数字、下划线组成，不能以数字开头，也不能包含空格或连字符（减号）等符号。five-star中含有“-”，不符合命名规则，不能作为变量名。题述正确，判断为正确。",
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
      "explanation": "【判断依据】C++中整型、实数型（浮点）、字符型（char本质上是整数）、布尔型（bool）四种类型之间可以进行隐式类型转换：字符和布尔会转换为整数参与比较，整数与实数比较时整数转为实数。因此这四种类型的变量之间都可以比较大小，题述正确，判断为正确。",
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
      "explanation": "【判断依据】a=5,b=4,c=3。按从左到右的优先级顺序先算a<b，即5<4为假，结果为0；再用0与c比较，即0<3为真，结果为1。整个表达式(a<b<c)的值为逻辑真1，而不是逻辑假。题述错误，判断为错误。",
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
      "explanation": "【解题思路】这是一道时事常识题，需要知道2024年诺贝尔物理学奖得主及其主要研究领域。【逐步推理】约翰·霍普菲尔德和杰弗里·辛顿因“利用物理学方法实现机器学习和人工神经网络的基础性发现与发明”共同获得2024年诺贝尔物理学奖，两人的主要研究方向是人工智能（机器学习与神经网络）。【其他选项为何错】天体物理、流体力学、量子理论都不是这两位科学家的主要研究方向，与获奖理由没有关系。",
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
      "explanation": "【解题思路】判断选项中各软件分别属于操作系统还是应用软件。【逐步推理】纯血鸿蒙（HarmonyOS NEXT）是华为推出的操作系统，负责管理硬件资源并为应用提供运行环境，属于操作系统。高德地图是地图导航应用，腾讯会议是音视频会议应用，金山永中是办公套件，它们都是运行在操作系统之上的应用软件。【其他选项为何错】高德地图、腾讯会议、金山永中都不具有操作系统管理硬件与调度资源的职能，只是应用软件。",
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
      "explanation": "【解题思路】printf(\"Hello,GESP!\")中的双引号用于界定字符串字面量，考查把引号替换后输出能否保持不变。【逐步推理】C++允许相邻的字符串字面量自动拼接。把每个双引号改成三个连续双引号，词法上会解析成“”“Hello,GESP!”“”三个相邻的字符串字面量，拼接后仍然是“Hello,GESP!”，输出不变，故D正确。【其他选项为何错】双引号内完全可以有汉字，A错；单引号表示字符字面量，‘Hello,GESP!’是多字符字面量，printf的输出与字符串不同，B错；三个连续单引号无法构成合法的字符或字符串字面量，是语法错误，C错。",
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
      "explanation": "【解题思路】N天后的星期由N对7取余决定，若N%7==0则回到原星期，题目要求这种情况输出“星期天”。【逐步推理】N%7==0表示N是7的倍数，过了整数周仍回到与今天相同的星期（题中按星期天处理）；否则输出“星期N%7”。所以if条件应填N%7==0，选B。【其他选项为何错】A填N%7!=0与else分支重复，会使if永远成立、else失去作用；C填N==0只判断N是否为0，与星期几无关；D填N%7，非零恒为真，同样使if永远成立，逻辑错误。",
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
      "explanation": "【解题思路】循环执行次数决定N，循环退出后i是第一个不满足条件i<10的值，再把N和i相加。【逐步推理】for(i=1;i<10;i++)执行9次（i取1到9），N从0累加到9。退出循环时，i先自增为10，再判断10<10为假。因此N=9，i=10，N+i=9+10=19，输出19。【其他选项为何错】54、20、18都是对i或N计算错误的组合：20把退出后的i当成10又加10，18把i误算成9，54没有对应关系，均不正确。",
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
      "explanation": "【解题思路】i%10的取值在0到9之间循环，先算一个周期（0到9）的和，再乘周期个数。【逐步推理】i从0到99共100个值，i%10按0,1,2,...,9循环，恰好10个完整周期。一个周期的和0+1+...+9=45，总累加值为45*10=450，输出450。【其他选项为何错】4950是0到99直接求和的普通累加结果，5050是1到100的和，两者都没有对i取模；100只是循环次数，不是累加值。",
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
      "explanation": "【解题思路】i以5为步长递增，偶数被continue跳过，奇数累加计数，且当i>=50时break提前退出。【逐步推理】i依次取5,10,15,20,25,30,35,40,45,50,55,...。偶数10,20,30,40,50被continue跳过；奇数5,15,25,35,45使tnt依次变为1,2,3,4,5；i=55时tnt变为6，同时55>=50触发break退出循环。tnt=6，输出6。【其他选项为何错】10是i的取值个数而非计数结果，9是漏算了一个奇数，5是在break前少算一次，正确值只有6。",
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
      "explanation": "【解题思路】循环体cnt+=i++使用后置自增，循环头的i++还会再自增一次，每轮i净增2，逐轮模拟累加。【逐步推理】第一轮i=1：cnt+=1得1，i先变为2，循环头再自增为3；第二轮i=3：cnt+=3得4，i变4再自增为5；第三轮i=5：cnt+=5得9，i变7；第四轮i=7：cnt+=7得16，i变9；第五轮i=9：cnt+=9得25，i变10再自增为11退出循环。cnt=25，输出25。【其他选项为何错】54和45是把1到10或1到9直接累加的结果，没有考虑i每轮净增2；10只是循环轮数，均不正确。",
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
      "explanation": "【解题思路】正方形周长等于4倍边长，要使周长增加4，边长a必须增加1，即必须有语句真正改变a的值。【逐步推理】周长初始为4*4=16。++a使a变为5，周长变为4*5=20，恰增加4，故选D。其余三个语句只是求出表达式的结果但未把结果赋回a，a仍为4，周长不变。【其他选项为何错】a*4、a+4、a+1都只计算不赋值，表达式的值被丢弃，变量a没有发生变化，周长也就不会增加。",
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
      "explanation": "【判断依据】在Windows资源管理器中，Ctrl+C用于复制选中的文件，Ctrl+V用于在目标位置粘贴。对已有文件A执行“先Ctrl+C再Ctrl+V”，即可在同一目录或目标目录建立文件A的副本。题述操作正确，判断为正确。",
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
      "explanation": "【判断依据】8/3两个操作数都是整数，整数除法得商2（小数截断）；8%3求余数，因为8=3*2+2，所以余数为2。在此例中两个表达式的值都是2，确实相同，判断为正确。（注意这只是一例碰巧相等，/与%的语义本身不同。）",
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
      "explanation": "【判断依据】X是C++的基本类型变量时，cin>>X按X的类型从键盘读取一个值存入X，cout<<X按X的类型把值输出到屏幕。对基本类型，输入和输出都能正常完成，题述“能接收键盘输入并原样输出”正确，判断为正确。",
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
      "explanation": "【判断依据】循环体第一条语句是continue，每次循环都直接跳过剩余语句进入下一轮，N+=1永远不会执行。N初值为0，循环结束后仍为0，cout输出0而不是10。题述“输出10”错误，判断为错误。",
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
      "explanation": "【判断依据】continue不影响循环控制变量的变化。for(i=0;i<=100;i++)中i从0自增到100，当i=100时仍满足i<=100，执行循环体后i++使i变为101，再判断101<=100为假退出。循环结束后i=101，cout输出101而不是100，判断为错误。",
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
      "explanation": "【判断依据】for(int i=0;i<10;i+=3)中i依次取0、3、6、9，共4次满足i<10并执行cout输出；i=12时条件为假退出。因此cout被执行4次而不是3次，题述错误，判断为错误。",
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
      "explanation": "【判断依据】(3,2)是逗号表达式，逗号表达式的值等于最后一个表达式的值，即2。cout<<(3,2)只输出一个整数2，并不会输出“3和2且有逗号间隔”。题述错误，判断为错误。",
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
      "explanation": "【判断依据】输入2e-1是科学计数法写法，其值为0.2。f<1即0.2<1为真，cout输出布尔真值1，而不是0。题述“输出是0”错误，判断为错误。",
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
      "explanation": "【判断依据】在循环体内若break和continue连续书写，位于前面的break会立即终止整个循环，后面的continue根本不会被执行，两者的作用不可能“抵消”。题述错误，判断为错误。",
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
      "explanation": "【解题思路】break只能在循环（for/while/do-while）或switch语句中使用，判断哪个选项把break包在非法位置。【逐步推理】do-while、for、switch都能把break包含在各自的语句体内，break合法。而if语句既不是循环也不是switch，if内的break没有任何循环或switch可跳出，编译器会报“break statement not within loop or switch”错误。因此填if这一组不能通过编译，选C。【其他选项为何错】do-while循环体内可以用break跳出循环；for循环体内可以用break跳出；switch的case分支中break用于结束该分支，三者都能通过编译。",
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
      "explanation": "【解题思路】考查字符串字面量双引号的作用，以及把引号替换后程序能否编译、输出是否不变。【逐步推理】printf(\"我爱码代码！\")输出字符串。把双引号内的汉字换成英文Hello、或换成“Hello代码！”，仍是合法字符串，可正常执行，A、B正确；把每个双引号改成三个连续双引号，词法上解析为“”“我爱码代码！”“”三个相邻字符串并自动拼接，输出不变，D正确；改成两个单引号则构成空字符常量或非法字符序列，是语法错误，C错误。【其他选项为何错】本题要求选“错误的”，A、B、D三种改法都能正确执行且输出不变，只有C不能通过编译。",
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
      "explanation": "【解题思路】对-1000到999的整数求和，利用正负对称相互抵消。【逐步推理】i从-1000递增到999，共2000个整数。-999与999、-998与998等成对出现并相互抵消为0，而-1000没有正数配对项，所以总和为-1000，输出-1000。【其他选项为何错】0是误以为所有数都成对抵消，但-1000是单独多出来的；999和1000是误取了区间边界值，均不正确。",
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
      "explanation": "【解题思路】continue不影响循环变量自增，退出循环时i是第一个不小于100的值。【逐步推理】i从1开始每次加5，取1,6,11,...,96。96<100满足条件进入循环体，continue跳过其他语句后i+=5得到101；判断101<100为假，循环退出，cout输出101。【其他选项为何错】100是误以为i会恰好停在100，但i从1出发步长5不可能取到100；99和96都是i在循环内的取值，不是退出循环时的值。",
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
      "explanation": "【判断依据】C++和Python都属于高级编程语言。高级语言编写的语句经过编译器编译成目标代码、或由解释器解释执行，最终都要翻译为处理器能够执行的机器指令。题述正确，判断为正确。",
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
      "explanation": "【判断依据】char N按字符类型读入，输入10时N得到的是第一个字符‘1’，而不是数值10。字符‘1’的ASCII码是49，N*2即49*2=98，printf输出98。若想得到20，N必须声明为int类型。题述“输出20”错误，判断为错误。",
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
      "explanation": "【判断依据】if(i%2==0){printf(\"偶数\");continue;}else printf(\"奇数\");中if与else分支互斥：偶数走if分支打印“偶数”并continue，奇数走else分支打印“奇数”。continue只是提前结束本轮，而if-else结构本身就保证了二者互斥，删除continue后偶数仍打印“偶数”且不会执行else，整体输出不变，判断为正确。",
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
      "explanation": "【判断依据】user_Name由字母、数字、下划线组成且不以数字开头，合法；_userName以下划线开头合法；userName_合法。但user-Name中含有连字符“-”，不符合“变量名只能由字母、数字、下划线组成”的规则，不是合法变量名。题述“都是合法变量名”错误，判断为错误。",
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
      "explanation": "【判断依据】continue语句的作用是结束本次循环迭代、跳过本轮剩余的语句并进入下一轮循环判断，它并不终止整个循环。能够提前结束整个循环的是break语句（或return等）。题述“continue可以用来提前结束循环”错误，判断为错误。",
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
      "explanation": "【判断依据】scanf(\"%d\",&N)遇到3.6时按%d规则读取整数部分3，N=3。表达式N/3*5按从左到右的顺序计算：3/3=1，1*5=5，cout输出5而不是6。题述“输出是6”错误，判断为错误。",
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
      "explanation": "【解题思路】按C++标识符命名规则逐一检查四个候选变量名。【逐步推理】C++变量名只能由字母、数字、下划线组成，不能包含空格等空白字符。“CCF GESP”中间有一个空格，不符合命名规则，不能作为变量名；ccfGESP、CCFgesp、CCF_GESP都由字母和下划线构成，都是合法标识符。【其他选项为何错】ccfGESP是合法变量名；CCFgesp是合法变量名；CCF_GESP含下划线且不违规，同样合法；三者都可以用作变量名。",
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
      "explanation": "【解题思路】按运算符优先级和结合性计算：括号优先级最高，其次乘除和取余（同级从左到右），最后加减。【逐步推理】10-3*(2+1)%10：先算括号(2+1)=3；再按从左到右的顺序算3*3=9、9%10=9；最后算10-9=1，结果为1。【其他选项为何错】0是把9%10误算成0，其实9除以10余数仍是9；2和3是运算顺序或数值计算错误，正确结果只有1。",
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
      "explanation": "【解题思路】先算括号内的减法，再做乘法，最后做加法。【逐步推理】(3-2)*3+5：括号内3-2=1；1*3=3；3+5=8，结果为8。【其他选项为何错】-13是错误地把减号当作负号并改变运算顺序；2和0都是计算过程中某一步出错得到的错误值，正确结果只有8。",
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
      "explanation": "【解题思路】cout<<左串右式，字符串“5%2=”原样输出，再输出5%2的余数值。【逐步推理】“5%2=”是普通文本原样输出，5%2=1是求余结果。合并输出为“5%2=1”，故选B。【其他选项为何错】“5%2=2”把5%2的余数误算为2；选项“2 2”和“1 1”丢失了“5%2=”这段文本，输出格式与题意不符，均不正确。",
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
      "explanation": "【解题思路】乘、除同级且从左到右结合，两端都是整数时做整数除法（截断小数），再算减法。【逐步推理】3-3*3/5：先算3*3=9；再算9/5，两端为整数做整除得1；最后3-1=2，结果为2。【其他选项为何错】-1.2是把9/5当成浮点除法（1.8）再做3-3*1.8的结果，但这里除法两端是整数；1是误把9/5算成2再做3-2；0是其他计算错误，均不正确。",
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
      "explanation": "【解题思路】printf格式串中%%转义输出一个百分号，%d用对应参数格式化输出。【逐步推理】“5%%2={%d}”中第一个%%被转义为字符%，随后的5、2和{}都原样输出，%d用参数5%2=1填充。组合起来输出“5%2={1}”。【其他选项为何错】“5%2={5%2}”是没把5%2求值而直接输出文本；“1={1}”丢掉了前面的“5%2”内容；“5 ={1}”格式错误，三者都不符合输出结果。",
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
      "explanation": "【解题思路】这是一道计算机硬件常识题，考查磁心存储元件的功能定位。【逐步推理】DJL-1计算机的磁心存储元件用于保存运行时使用的数据和程序，其作用与现代计算机的内存（主存储器RAM）相当，都是在运行期间提供数据与指令的存储场所。【其他选项为何错】磁盘属于外部辅助存储器，用于长期保存数据；CPU是运算与控制部件；显示器是输出设备；它们都不承担“存储元件”的职能。",
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
      "explanation": "【解题思路】注意循环体s+=i++和循环头i++,count++都会自增，i每轮净增2，需逐轮模拟。【逐步推理】每轮循环体执行s+=i++，先累加当前i的值再自增；随后循环头再执行i++并count++，所以i每轮净增2。i取0,2,4,...,18共10轮，s=0+2+4+...+18=90，count=10，输出“90 10”。【其他选项为何错】“190 20”是把i当成每轮只自增一次（0到19全部累加、count算成20）；“95 10”把和误算成(0+19)*10/2；“90 19”把count误算成19，均不正确。",
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
      "explanation": "【解题思路】先按优先级计算算术表达式，再执行逻辑与运算。【逐步推理】12-3*2：先算3*2=6，再算12-6=6。6&&2中两个操作数都是非零真值，逻辑与的结果为真1，所以整个表达式的值为1，输出1。【其他选项为何错】0是误以为逻辑与结果为假；6是只算了算术部分而没有继续做逻辑与；9是运算顺序或求值错误，均不正确。",
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
      "explanation": "【解题思路】N=2时分别做整数除法与取余，再求和。【逐步推理】2/3两端为整数，整数除法得商0；2%3得余数2；0+2=2，cout输出2。【其他选项为何错】0是只算了整数除法部分；3是误把2/3算成1再加2；4是误把2%3算成2又加2或误用浮点计算，均不正确。",
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
      "explanation": "【解题思路】判断题中各设备对驾驶系统“选路”功能的必要性。【逐步推理】驾驶系统完成选路需要传感器采集车辆位置与环境信息，需要麦克风接收语音指令、扬声器播报导航提示来完成人机交互。油量表只反映燃油剩余量，与选择行驶路线没有直接关系，不是选路所必需的设备。【其他选项为何错】传感器、麦克风、扬声器都参与信息的采集或输出，服务于选路与导航交互，属于选路所需的设备。",
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
      "explanation": "【解题思路】按C++标识符命名规则判断各选项。【逐步推理】_Var_1以下划线开头，后跟字母和数字，完全符合“以字母或下划线开头、其余为字母数字下划线”的规则，可以作变量名。【其他选项为何错】Var-1中含有连字符“-”，不合法；$1中含有“$”符号，不合法；%%1以“%”开头且含“%”符号，不合法。",
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
      "explanation": "【解题思路】除法与取余优先级相同且从左到右结合，按顺序计算。【逐步推理】16/4=4，再计算4%2=0，所以表达式的值为0，输出0。【其他选项为何错】8是16除以4后误加的结果；4是只计算了除法部分；2是误把4%2算成2或按其他顺序计算，均不正确。",
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
