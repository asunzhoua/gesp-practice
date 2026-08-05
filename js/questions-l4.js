const QUESTION_BANK = {
  "knowledgePoints": {
    "kp4_01": {
      "title": "函数",
      "questions": [
        {
          "id": "l4_202306_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "高级语言编写的程序需要经过以下（ ）操作，可以生成在计算机上运行的可执行代码。",
          "options": [
            "A. 编辑",
            "B. 保存",
            "C. 调试",
            "D. 编译"
          ],
          "answer": 3,
          "explanation": "编辑是编写和修改代码，保存是把代码存到磁盘，调试是测试并修正程序的错误，只有编译才能把源程序翻译成计算机能直接执行的可执行代码，所以选 D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_05",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中函数的叙述，正确的是（ ）。",
          "options": [
            "A. 函数必须有名字",
            "B. 函数必须有参数",
            "C. 函数必须有返回值",
            "D. 函数定义必须写在函数调用前"
          ],
          "answer": 0,
          "explanation": "函数可以没有参数（如 main 也可以无参）、可以没有返回值（void 类型），定义也可以写在调用之后（只要调用前有声明）。但函数必须有名字才能被调用，选 A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_10",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果 a 为 int 类型的变量，且 a 的值为 6，则执行 a &= 3; 之后，a 的值会是（ ）。",
          "options": [
            "A. 3",
            "B. 9",
            "C. 2",
            "D. 7"
          ],
          "answer": 2,
          "explanation": "a &= 3 等价于 a = a & 3，& 是按位与。6 的二进制是 110，3 是 011，110 & 011 = 010，即十进制的 2，选 C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_16",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "域名是由一串用点分隔的名字来标识互联网上一个计算机或计算机组的名称，CCF 编程能力等级认证官方网站的域名是 gesp.ccf.org.cn，其中顶级域名是 gesp。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "域名最右边的部分称为顶级域名。gesp.ccf.org.cn 从右往左看，顶级域名是 cn，gesp 只是主机名，所以题中说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_23",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "字符常量 '0' 和 '\\0' 是等价的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'0' 是字符 '0'，ASCII 码为 48；'\\0' 是空字符，ASCII 码为 0，通常表示字符串结束标志。二者完全不同，说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_24",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": ">= 和 >>= 都是 C++ 语言的运算符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": ">= 是关系运算符“大于等于”；>>= 是复合位右移赋值运算符，a >>= b 等价于 a = a >> b。二者都是合法运算符，说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_26",
          "kp": "kp4_01",
          "type": "coding",
          "difficulty": 2,
          "question": "幸运数\n【问题描述】小明发明了一种“幸运数”。一个正整数，其偶数位不变（个位为第 1 位，十位为第 2 位，以此类推），奇数位做如下变换：将数字乘以 7，如果不大于 9 则作为变换结果，否则把结果的各位数相加，如果结果不大于 9 则作为变换结果，否则（结果仍大于 9）继续把各位数相加，直到结果不大于 9，作为变换结果。变换结束后，把变换结果的各位数相加，如果得到的和是 8 的倍数，则称一开始的正整数为幸运数。\n例如，16347：第 1 位为 7，乘以 7 结果为 49，大于 9，各位数相加为 13，仍大于 9，继续各位数相加，最后结果为 4；第 3 位为 3，变换结果为 3；第 5 位为 1，变换结果为 7。最后变化结果为 76344，对于结果 76344 其各位数之和为 24，是 8 的倍数。因此 16347 是幸运数。\n【输入描述】输入第一行为正整数 N，表示有 N 个待判断的正整数。约定 1 ≤ N ≤ 20。从第 2 行开始的 N 行，每行一个正整数，为待判断的正整数。约定这些正整数小于 10^12。\n【输出描述】输出 N 行，对应 N 个正整数是否为幸运数，如是则输出 'T'，否则输出 'F'。提示：不需要等到所有输入结束再依次输出，可以输入一个数就判断一个数并输出，再输入下一个数。\n【数据范围】\n1 ≤ N ≤ 20\n1 ≤ x < 10^12",
          "options": null,
          "answer": null,
          "explanation": "思路：逐一读入每个数（用 long long），不停除以 10 取出每一位；偶数位直接累加，奇数位调用变换函数：乘 7 后反复数位求和直到不大于 9（等价公式是 (t*7-1)%9+1）。最后判断累加和能否被 8 整除。合理拆分函数（trans、judge）能让思路更清晰。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\n// 奇数位要做的数字变换\nint trans(int t) {\n    if (t == 0)\n        return 0;\n    return (t * 7 - 1) % 9 + 1;\n}\n// 判断是否为幸运数\nbool judge(long long x) {\n    int sum = 0;\n    for (int d = 1; x > 0; d++, x /= 10) {\n        int t = (int)(x % 10);\n        if (d % 2 == 0)\n            sum += t;\n        else\n            sum += trans(t);\n    }\n    return (sum % 8 == 0);\n}\nint main() {\n    int N = 0;\n    cin >> N;\n    for (int n = 0; n < N; n++) {\n        long long x = 0;\n        cin >> x;\n        if (judge(x))\n            cout << \"T\" << endl;\n        else\n            cout << \"F\" << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n16347\n76344",
              "expectedOutput": "T\nF"
            }
          ]
        },
        {
          "id": "l4_202309_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "人们所使用的手机上安装的 App 通常指的是（ ）。",
          "options": [
            "A. 一款操作系统",
            "B. 一款应用软件",
            "C. 一种通话设备",
            "D. 以上都不对"
          ],
          "answer": 1,
          "explanation": "App 是英文 application 的简写，意思是应用程序，也就是手机上安装的应用软件，比如微信、游戏等，选 B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_02",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图的输出结果是？( ) 流程图：变量 m、n 初始值均为 1；循环中先判断 m×n>20：是则 m=m-2，否则 m=2×m+1；然后 n=n+1；再判断 n>5：是则输出 m 并结束，否则回到循环继续判断。",
          "options": [
            "A. 9",
            "B. 7",
            "C. 5",
            "D. 11"
          ],
          "answer": 0,
          "explanation": "按流程推算：n=1,m=1 时 1×1=1 不大于 20，m=3；n=2,m=3 时 6 不大于 20，m=7；n=3,m=7 时 21>20，m=5；n=4,m=5 时 20 不大于 20，m=11；n=5,m=11 时 55>20，m=9；n=6>5 结束，输出 9，选 A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_06",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中函数的叙述，正确的是（ ）。",
          "options": [
            "A. 函数调用前必须定义",
            "B. 函数调用时必须提供足够的实际参数",
            "C. 函数定义前必须声明",
            "D. 函数声明只能写在函数调用前"
          ],
          "answer": 1,
          "explanation": "函数调用前只需声明（原型）即可，定义可以放在后面，A、C 错；声明也可以写在别处，D 错。调用时必须提供与形参个数匹配的实参，选 B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_07",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中函数的叙述，不正确的是（ ）。",
          "options": [
            "A. 两个函数的声明可以相同",
            "B. 两个函数的局部变量可以重名",
            "C. 两个函数的参数可以重名",
            "D. 两个函数可以重名"
          ],
          "answer": 0,
          "explanation": "同作用域内两个函数声明相同会产生重复定义错误；而不同函数的局部变量、参数可以重名，函数名相同但参数不同（重载）也是允许的，所以 A 不正确，选 A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_11",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果 a 为 int 类型的变量，且 a 的值为 6，则执行 a = ~a; 之后，a 的值会是（ ）。",
          "options": [
            "A. -6",
            "B. 6",
            "C. -7",
            "D. 7"
          ],
          "answer": 2,
          "explanation": "~ 是按位取反（含符号位）。6 的二进制 00000110 取反得 11111001（补码），这是 -7 的补码表示，所以 a 变为 -7，选 C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_24",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "== 和 := 都是 C++ 语言的运算符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "== 是比较是否相等的运算符，是合法的；而 := 是 Pascal 等语言中的赋值号，C++ 中没有这个运算符，所以说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_26",
          "kp": "kp4_01",
          "type": "coding",
          "difficulty": 2,
          "question": "进制转换\n【问题描述】N 进制数指的是逢 N 进一的计数制。例如，人们日常生活中大多使用十进制计数，而计算机底层则一般使用二进制。除此之外，八进制和十六进制在一些场合也是常用的计数制（十六进制中，一般使用字母 A 至 F 表示十至十五；本题中，十一进制到十五进制也是类似的）。\n在本题中，我们将给出 N 个不同进制的数。你需要分别把它们转换成十进制数。\n【提示】对于任意一个 L 位 K 进制数，假设其最右边的数位为第 0 位，最左边的数位为第 L-1 位，我们只需要将其第 i 位的数码乘以权值 K^i，再将每位的结果相加，即可得到原 K 进制数对应的十进制数。例如：八进制数 1362 对应的十进制数为 1×8^3+3×8^2+6×8^1+2×8^0=754；十六进制数 3F0 对应的十进制数为 3×16^2+15×16^1+0×16^0=1008。\n【输入描述】输入的第一行为一个十进制表示的整数 N。接下来 N 行，每行一个整数 K，随后是一个空格，紧接着是一个 K 进制数，表示需要转换的数。保证所有 K 进制数均由数字和大写字母组成，且不以 0 开头。保证 K 进制数合法。保证 N≤1000；保证 2≤K≤16；保证所有 K 进制数的位数不超过 9。\n【输出描述】输出 N 行，每一个十进制数，表示对应 K 进制数的十进制数值。\n【数据范围】\n1 ≤ N ≤ 1000\n2 ≤ K ≤ 16\nK 进制数位数 ≤ 9",
          "options": null,
          "answer": null,
          "explanation": "思路：先读入 N，再循环 N 次读入进制 K 和数字串。转换时从最低位（字符串最右）开始，用权值 pw 从 1 开始每次乘 K，把每个数字字符（'0'~'9' 或 'A'~'F'）转成对应数值后乘以权值累加，最后输出十进制结果。可以用函数把进制转换封装起来。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nint trans_digit(int k, char c) {\n    if (c <= '9')\n        return (c - '0');\n    return (c - 'A' + 10);\n}\nlong long trans(int k, char str[]) {\n    int l = strlen(str);\n    long long res = 0, pw = 1;\n    for (int i = l - 1; i >= 0; i--) {\n        res += pw * trans_digit(k, str[i]);\n        pw *= k;\n    }\n    return res;\n}\nint main() {\n    int n = 0;\n    cin >> n;\n    for (int t = 0; t < n; t++) {\n        int k = 0;\n        char str[10];\n        cin >> k >> str;\n        cout << trans(k, str) << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n8 1362\n16 3F0",
              "expectedOutput": "754\n1008"
            },
            {
              "input": "2\n2 11011\n10 123456789",
              "expectedOutput": "27\n123456789"
            }
          ]
        },
        {
          "id": "l4_202309_27",
          "kp": "kp4_01",
          "type": "coding",
          "difficulty": 2,
          "question": "变长编码\n【问题描述】小明刚刚学习了三种整数编码方式：原码、反码、补码，并了解到计算机存储整数通常使用补码。但他总是觉得生活中很少用到 2^31-1 这么大的数，生活中常用的 0~100 这种数也同样需要用 4 个字节的补码表示，太浪费了些。热爱学习的小明通过搜索，发现了一种正整数的变长编码方式。这种编码方式的规则如下：\n1. 对于给定的正整数，首先将其表达为二进制形式。例如，(0)10=(0)2，(926)10=(1110011110)2。\n2. 将二进制数从低位到高位切分成每组 7 bit，不足 7 bit 的在高位用 0 填补。例如，(0)2 变为 0000000 的一组，(1110011110)2 变为 0011110 和 0000111 的两组。\n3. 由代表低位的组开始，为其加入最高位。如果这组是最后一组，则在最高位填上 0，否则在最高位填上 1。于是，0 的变长编码为 00000000 一个字节，926 的变长编码为 10011110 和 00000111 两个字节。\n这种编码方式可以用更少的字节表达比较小的数，也可以用很多的字节表达非常大的数。例如，987654321012345678 的二进制为 (0001101 1011010 0110110 1001011 1110100 0100110 1001000 0010110 1001110)2，于是它的变长编码为（十六进制表示）CE 96 C8 A6 F4 CB B6 DA 0D，共 9 个字节。\n你能通过编写程序，找到一个正整数的变长编码吗？\n【输入描述】输入第一行，包含一个正整数 N。约定 0≤N≤10^18。\n【输出描述】输出一行，输出 N 对应的变长编码的每个字节，每个字节均以 2 位十六进制表示（其中，A-F 使用大写字母表示），两个字节间以空格分隔。\n【数据范围】\n0 ≤ N ≤ 10^18",
          "options": null,
          "answer": null,
          "explanation": "思路：把正整数 N 不断右移 7 位，用 N & 0x7f 取出每 7 位一组存入数组（低位在前）；除最后一组外，其余每组最高位置 1（或 0x80），最后一组保持 0。最后从低位组到高位组逐个输出，每个字节先输出高 4 位再输出低 4 位的十六进制字符。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nvoid output_digit(int d) {\n    if (d >= 10)\n        cout << (char)('A' + d - 10);\n    else\n        cout << (char)('0' + d);\n}\nvoid output_code(int s) {\n    output_digit(s >> 4);\n    output_digit(s & 0x0f);\n}\nint main() {\n    long long n = 0;\n    cin >> n;\n    int split[10];\n    int l = 0;\n    while (n > 0) {\n        split[l] = (int)(n & 0x7f);\n        n >>= 7;\n        l++;\n    }\n    if (l == 0) {\n        split[0] = 0;\n        l = 1;\n    }\n    for (int i = 0; i < l - 1; i++)\n        split[i] |= 0x80;\n    output_code(split[0]);\n    for (int i = 1; i < l; i++) {\n        cout << \" \";\n        output_code(split[i]);\n    }\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "0",
              "expectedOutput": "00"
            },
            {
              "input": "926",
              "expectedOutput": "9E 07"
            },
            {
              "input": "987654321012345678",
              "expectedOutput": "CE 96 C8 A6 F4 CB B6 DA 0D"
            }
          ]
        },
        {
          "id": "l4_202312_08",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列 C++ 语句执行以后结果是 true 的是（ ）。",
          "options": [
            "A. 3&&false",
            "B. 5&&2",
            "C. 101&&000",
            "D. 4&true"
          ],
          "answer": 1,
          "explanation": "逻辑与 && 要求两边都为真才为真。3&&false 是假；5&&2 两边都非 0，为真；000 是八进制 0，所以 101&&000 为假；4&true 是位与，4&1=0 为假。选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_12",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下 C++ 代码用于实现每个整数对应的因数，如输入 12 ，则输出 1 2 3 4 6 12 ；如输入 18 ，则输出 1 2 3 6 9 18 。横线处应填入代码是（ ）。\n```cpp\nint n;\ncin>>n;\nfor(int i=1;i<=n;i++)\n{\n____\n{\ncout<<i<<\" \";\n}\n}\n```",
          "options": [
            "A. if(n%i==0)",
            "B. if(n/i==0)",
            "C. if(n%i!=0)",
            "D. if(n/i!=0)"
          ],
          "answer": 0,
          "explanation": "判断 i 是不是 n 的因数，就看 n 能否被 i 整除，即 n%i==0，成立时输出 i。输入 12 会输出 1 2 3 4 6 12，选 A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_13",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "某公司新出了一款无人驾驶的小汽车，通过声控智能驾驶系统，乘客只要告诉汽车目的地，车子就能自动选择一条优化路线，告诉乘客后驶达那里。请问下面哪项不是驾驶系统完成选路所必须的。（  ）",
          "options": [
            "A. 麦克风",
            "B. 扬声器",
            "C. 油量表",
            "D. 传感器"
          ],
          "answer": 2,
          "explanation": "选路需要麦克风（接收语音目的地）、扬声器（播报路线）、传感器（感知环境用于导航）。油量表只显示油量，与选路无关，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_14",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "现代计算机是指电子计算机，它所基于的是（  ）体系结构。",
          "options": [
            "A. 艾伦·图灵",
            "B. 冯·诺依曼",
            "C. 阿塔纳索夫",
            "D. 埃克特-莫克利"
          ],
          "answer": 1,
          "explanation": "现代计算机普遍采用冯·诺依曼体系结构：程序和数据都存放在存储器中，按存储程序方式执行。图灵是计算机理论奠基人，故 B 正确。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_15",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "第 15 题 输入一个正整数 N（N>=7)，想找出它所有相邻的因数对，比如，输入 12，因数对有 (1,2)、(2,3)、(3,4)。下面哪段代码找不到所有的因数对?()",
          "options": [
            "A. for(i=1;i<N;i++) if(!(N%i) && !(N%(i+1))) printf(\"(%d,%d)\\n\", i, i+1);",
            "B. for(i=2;i<N;i++) if(!(N%i) && !(N%(i+1))) printf(\"(%d,%d)\\n\", i, i+1);",
            "C. for(i=2;i<N/2;i++) if(!(N%(i-1)) && !(N%i)) printf(\"(%d,%d)\\n\", i-1, i);",
            "D. for(i=1;i<N/2;i++) if(!(N%i) && !(N%(i+1))) printf(\"(%d,%d)\\n\", i, i+1);"
          ],
          "answer": 1,
          "explanation": "B 中 i 从 2 开始，永远不会检查 i=1，因此漏掉因数对 (1,2)。A、C、D 都能输出全部相邻因数对，所以找不到全部因数对的是 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_18",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "[(1,2)*2]*3 在 C++ 中是合法的表达式。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "方括号 [ ] 在 C++ 里只用于数组下标等语法，不能像数学里那样用 [ ] 做运算分组，所以该表达式不合法，说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_21",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "执行 C++ 代码 cout<<(5||2); 后将输出 1 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "5||2 是逻辑或，两个操作数都非 0，结果为真 true。cout 输出布尔真时显示 1，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_22",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，两个字符串相加的运算符为 + 相当于字符串的合并运算。下面 C++ 代码执行后，将输出 chenadai 。（ ）\n```cpp\nstring a=\"chen\";\nstring b=\"a\";\nstring c=\"dai\";\nstring name=a+b+c;\ncout<<name<<endl;\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "string 类型重载了 + 运算符，表示字符串拼接。a+b+c 把 \"chen\"、\"a\"、\"dai\" 依次连起来得到 \"chenadai\"，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_24",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨最近在准备考 GESP，他用的 Dev C++ 来练习和运行程序，所以 Dev C++ 也是一个小型操作系统。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Dev C++ 是一个集成开发环境（IDE），用来编写、编译和调试 C++ 程序，需要运行在操作系统之上，它本身不是操作系统，说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_25",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个 while 循环都可以转化为等价的 for 循环（ ）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "while 循环的三个部分（初始化、条件、步进）都可以放到 for 循环的三个表达式中，所以任意 while 循环都能改写成等价 for 循环，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_26",
          "kp": "kp4_01",
          "type": "coding",
          "difficulty": 2,
          "question": "小杨的字典\n【问题描述】在遥远的星球，有两个国家 A 国和 B 国，他们使用着不同的语言：A 语言和 B 语言。小杨是 B 国的翻译官，他的工作是将 A 语言的文章翻译成 B 语言的文章。\n为了顺利完成工作，小杨制作了一本字典，里面记录了 N 个 A 语言单词对应的 B 语言单词，巧合的是，这些单词都由地球上的 26 个小写英文字母组成。\n小杨希望你写一个程序，帮助他根据这本字典翻译一段 A 语言文章。这段文章由标点符号 !()-[]{}\\|;:'\",./?<> 和一些 A 语言单词构成，每个单词之间必定由至少一个标点符号分割，你的程序需要把这段话中的所有 A 语言单词替换成它的 B 语言翻译。特别地，如果遇到不在字典中的单词，请使用大写 UNK 来替换它。\n例如，小杨的字典中包含 2 个 A 语言单词 abc 和 d ，它们的 B 语言翻译分别为 a 和 def ，那么我们可以把 A 语言文章 abc.d.d.abc.abcd. 翻译成 B 语言文章 a.def.def.a.UNK. ，其中，单词 abcd 不在词典内，因此我们需要使用 UNK 来替换它。\n【输入描述】第一行一个整数 N，表示词典中的条目数。接下来 N 行，每行两个用单个空格隔开的字符串，分别表示字典中的一个 A 语言单词以及它对应的 B 语言翻译。最后一行一个字符串，表示需要翻译的 A 语言文章。\n【输出描述】输出一行，表示翻译后的结果。\n【特别提醒】在常规程序中，输入、输出时提供提示是好习惯。但在本场考试中，由于系统限定，请不要在输入、输出中附带任何提示信息。",
          "options": null,
          "answer": null,
          "explanation": "思路：用 map<string,string> 存字典，读入 N 对单词。再读入整篇文章，逐字符扫描：连续的小写字母拼成一个单词，遇到标点符号时若当前单词非空，则在字典中查找：找到就输出对应翻译，找不到输出 UNK，然后把标点原样输出并清空单词。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n#include <algorithm>\n#include <string>\n#include <map>\n#include <iostream>\nusing namespace std;\nmap<string, string> dict;\nint main() {\n    int N;\n    cin >> N;\n    while (N--) {\n        string word1, word2;\n        cin >> word1 >> word2;\n        dict[word1] = word2;\n    }\n    string content, word = \"\";\n    cin >> content, content += \"\\n\";\n    int m = content.length();\n    for (int i = 0; i < m; i++) {\n        if (content[i] >= 'a' && content[i] <= 'z')\n            word += content[i];\n        else {\n            if (word != \"\") {\n                if (dict.count(word))\n                    cout << dict[word];\n                else\n                    cout << \"UNK\";\n                word = \"\";\n            }\n            cout << content[i];\n        }\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\nabc a\nd def\nabc.d.d.abc.abcd.",
              "expectedOutput": "a.def.def.a.UNK."
            },
            {
              "input": "3\nabc a\nd def\nabcd xxxx\nabc,(d)d!-abc?abcd",
              "expectedOutput": "a,(def)def!-a?xxxx"
            },
            {
              "input": "1\nabcdefghij klmnopqrst\n!()-[]{}\\|;:'\",./?<>abcdefghijklmnopqrstuvwxyz",
              "expectedOutput": "!()-[]{}\\|;:'\",./?<>UNK"
            }
          ]
        },
        {
          "id": "l4_202403_14",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨的父母最近刚刚给他买了一块华为手表，他说手表上跑的是鸿蒙，这个鸿蒙是（  ）。",
          "options": [
            "小程序",
            "计时器",
            "操作系统",
            "神话人物"
          ],
          "answer": 2,
          "explanation": "鸿蒙（HarmonyOS）是华为开发的面向手机、手表等设备的物联网操作系统，手表上运行的就是这个操作系统，它负责管理硬件和软件资源，所以鸿蒙是操作系统。鸿蒙负责调度和管理设备资源，是设备的核心系统软件。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_15",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "中国计算机学会（CCF）在2024年1月27日的颁奖典礼上颁布了王选奖，王选先生的重大贡献是（  ）。",
          "options": [
            "制造自动驾驶汽车",
            "创立培训学校",
            "发明汉字激光照排系统",
            "成立方正公司"
          ],
          "answer": 2,
          "explanation": "王选院士主持研制了汉字激光照排系统，用计算机控制激光把汉字直接排成版面并印刷到纸上，实现了汉字排版印刷的数字化革命，这是他对中国计算机事业最重要的贡献。王选奖正是为表彰在计算机领域做出重大贡献的科学家而设立的。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_23",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中 cout << 9^2 << endl; 会输出 81。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "^ 是按位异或运算符，不是乘方。9 的二进制 1001 与 2 的二进制 0010 异或得 1011，即十进制的 11，所以输出 11 而不是 81，说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_24",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨今年春节回奶奶家了，奶奶家的数字电视要设置 ip 地址并接入到 WIFI 盒子才能收看节目，那这个 WIFI 盒子具有路由器的功能。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "WIFI 盒子能给设备分配 IP 地址，并在不同网络之间转发数据，这些正是路由器（含 NAT、DHCP 等功能）的作用，所以它具备路由器的功能，说法正确。路由器的作用之一就是让多个设备共享网络并分配 IP 地址。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_25",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个 for 循环都可以转化为等价的 while 循环。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "for(初始化; 条件; 步进) 可以改写成 初始化; while(条件){ 循环体; 步进; }，while 循环也能改写回 for，两者等价，所以说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_26",
          "kp": "kp4_01",
          "type": "coding",
          "difficulty": 1,
          "question": "相似字符串\n对于两个字符串 s 和 t，如果 s 可以通过删除一个字符，或插入一个字符，或修改一个字符变成 t，那么我们说 s 和 t 是相似的。比如 apple 可以通过插入一个字符变成 applee，通过删除一个字符变成 appe，通过修改一个字符变成 bpple，因此 apple 和 applee、appe、bpple 都相似。特别地，完全相同的两个字符串也是相似的。给定 n 组 (s,t)，请你分别判断它们是否相似。\n输入描述：第一行一个正整数 n。接下来 n 行，每行两个用空格隔开的字符串 s 和 t，保证它们只包含小写字母。\n输出描述：输出 n 行，对于每组 (s,t)，如果相似则输出 similar，否则输出 not similar。",
          "options": [],
          "answer": null,
          "explanation": "思路：两个字符串长度差超过 1 一定不相似。长度相等时统计不同字符数，超过 1 个就不相似；长度差 1 时用两个指针扫长串，遇到不相等就跳过长串的字符（相当于一次修改或插入），跳过的次数超过 1 则失败。逐组判断并输出。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nbool isSimilar(string A, string B) {\n    int m = A.size(), n = B.size();\n    if (abs(m - n) > 1) return false;\n    if (m == n) {\n        int diff = 0;\n        for (int i = 0; i < m; ++i) {\n            if (A[i] != B[i]) {\n                if (++diff > 1) return false;\n            }\n        }\n        return diff <= 1;\n    } else {\n        string& shorter = (m < n) ? A : B;\n        string& longer = (m < n) ? B : A;\n        int i = 0, j = 0;\n        int diff = 0;\n        while (i < shorter.size() && j < longer.size()) {\n            if (shorter[i] != longer[j]) {\n                if (++diff > 1) return false;\n                ++j;\n            } else {\n                ++i;\n                ++j;\n            }\n        }\n        return true;\n    }\n}\nint main() {\n    int T;\n    cin >> T;\n    while (T--) {\n        string A, B;\n        cin >> A >> B;\n        if (isSimilar(A, B)) {\n            cout << \"similar\" << endl;\n        } else {\n            cout << \"not similar\" << endl;\n        }\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\napple applee\napple appe\napple bpple\napplee bpple\napple apple",
              "expectedOutput": "similar\nsimilar\nsimilar\nnot similar\nsimilar"
            }
          ]
        },
        {
          "id": "l4_202406_02",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面函数不能正常执行的是（  ）。\n<pre><code>A. int func(){...} 定义在前，int main(){...} 中未调用 func。\nB. int main(){ func(); } 在前，int func(){...} 定义在后，且无函数声明。\nC. int func(){...} 定义在前，int main(){ func(); }。\nD. int func(); 声明在前，int main(){ func(); }，int func(){...} 定义在后。</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 1,
          "explanation": "C++ 要求函数先声明（或先定义）再使用。B 中 main 先调用 func()，而 func 的定义在 main 之后且没有任何前置声明，编译阶段就报错，所以不能正常执行。A、C、D 都能通过编译正常运行。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，（  ）正确定义了一个返回整数值并接受两个整数参数的函数。",
          "options": [
            "int add(int a, int b) { return a + b; }",
            "void add(int a, int b) { return a + b; }",
            "int add(a, b) { return a + b; }",
            "void add(int a, int b) { return a - b; }"
          ],
          "answer": 0,
          "explanation": "函数定义要有返回类型、函数名和参数列表。A 返回类型是 int，接受两个 int 参数并返回 a+b，完全正确。B 是 void 却返回了值，C 缺返回类型，D 返回类型错误。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的语句中，（  ）正确定义了一个计算浮点数的平方的函数，并成功调用该函数。",
          "options": [
            "float square(float x) { return x * x; }\nfloat area = square(2);",
            "square(float x) { return x * x; }\nfloat area = square(2);",
            "void square(float x) { return x * x; }\narea = square(2.0);",
            "void square(float x) { x * x; return; }\narea = square(2);"
          ],
          "answer": 0,
          "explanation": "函数应声明返回类型 float 并返回 x*x，A 完全符合。B 缺返回类型，C 的 void 函数不能返回 x*x，D 的 void 函数没有返回值，调用结果也没有意义。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_02",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码的描述中，正确的是（  ）。\nvoid n_chars(char c, int n) {\nwhile (n-- > 0) cout << c;\n}\nchar my_char = 'w';\nint times = 5;\nn_chars(my_char, times);",
          "options": [
            "代码执行结束后，times 的值为 0",
            "n 是形参，times 是实参",
            "n 是实参，times 是形参",
            "代码最后一行换成 n_chars(times, my_char); 也可以"
          ],
          "answer": 1,
          "explanation": "n_chars 定义里的 c 和 n 是形参，调用时传入的 my_char 和 times 是实参。n 按值传递，函数内 n-- 不影响 times，times 仍为 5，所以 A 错误、B 正确。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_17",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一个函数必须在调用之前既声明又定义。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "调用函数前只要有函数声明（原型）就可以了，定义可以放在调用之后；如果定义写在前，定义本身就同时充当声明。并不需要既声明又定义，所以说法错误。声明只给出类型信息，定义才给出函数体。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下述代码，说法错误的是（  ）。\nint multiply(int x, int y);\n<pre><code>int main() {\nint a = 4, b = 5;\nint result = multiply(a, b);\nstd::cout << \"The result is: \" << result << std::endl;\n}\nint multiply(int x, int y) { return x * y; }</code></pre>",
          "options": [
            "函数 multiply 的定义应该放到函数 main 之前。",
            "函数声明 int multiply(int x, int y); 中明确指定了函数 multiply() 的返回值为整数类型。",
            "在 main 函数中，函数 multiply 通过 multiply(a, b) 被调用，其中 a 和 b 是定义在 main 函数中的变量，它们作为实参传递给了 multiply 函数的形参 x 和 y。",
            "运行上述代码，将输出 The result is: 20。"
          ],
          "answer": 0,
          "explanation": "代码开头已有函数声明（原型），所以 multiply 的定义放在 main 之后完全合法，不必放到 main 之前。A 的说法错误；B、C、D 描述都正确。声明加定义前后分离是常见的组织代码方式。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_16",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "函数是C++中的核心概念，用于封装可重用的代码块。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数把一段完成特定功能的代码封装起来，可以多次调用、反复复用，是 C++ 程序的基本组织单元。使用函数还能让程序结构清晰、便于维护，所以说法正确。合理使用函数能避免重复代码，提高可维护性。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_17",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，函数的返回类型可以省略，默认为 int。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 要求函数必须明确写出返回类型，省略返回类型是语法错误，并不会默认成 int。那是早期 C 语言的做法，在 C++ 中不可行，所以说法错误。C++ 所有函数都必须写返回类型，这是语法要求。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_04",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于以下 C++ 代码，说法正确的是（    ）。\n<pre><code>int main() {\ngreet();\nreturn 0;\n}\nvoid greet() {\ncout << \"Hello!\" << endl;\n}</code></pre>",
          "options": [
            "正确编译并输出 Hello!",
            "编译错误：找不到函数 greet()",
            "编译警告但可以运行",
            "链接错误"
          ],
          "answer": 1,
          "explanation": "main 里调用 greet() 时，greet 还没有声明（定义在 main 之后），C++ 要求函数先声明后使用，所以编译阶段就报错，根本到不了链接环节，也不会输出 Hello!。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_16",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码正确声明了一个返回int 类型、接受两个int 参数的函数。\nint add(int, int);",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "int add(int, int); 是函数声明，它没有写形参名，但类型正确：返回 int，接受两个 int 参数。这样的声明完全合法，所以说法正确。函数声明只写参数类型即可，形参名可以省略，所以是正确的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_04",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面这段代码会输出（   ）。\nint add(int a, int b = 1); // 函数声明\n<pre><code>int main() {\ncout << add(2) << \" \" << add(2, 3);\nreturn 0;\n}\nint add(int a, int b) { // 函数定义\nreturn a + b;\n}</code></pre>",
          "options": [
            "3 5",
            "编译失败：定义处少了默认参数",
            "运行错误",
            "链接失败：未定义引用"
          ],
          "answer": 0,
          "explanation": "声明中 b 有默认值 1，所以 add(2) 按 add(2,1)=3 计算，add(2,3)=5。默认参数只需在声明处给出，定义处可以省略，因此编译链接都正常，输出 3 5。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_24",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码可以正常编译并输出 10 。\nint calculate(int x, int y = 10);\n<pre><code>int main() {\ncout << calculate(5);  // 调用1\nreturn 0;\n}\nint calculate(int x, int y) { return x * y; }\nint calculate(int x) {  // 重载函数\nreturn x * 2;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "调用 calculate(5) 时，calculate(int,int) 通过默认参数也能匹配，calculate(int) 也能匹配，二者匹配程度相同，产生二义性，编译报错，根本无法输出。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_01",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面程序后，输出为（ ）。\n<pre><code>int f(int x = 2){\nreturn x * 3;\n}\nint main(){\ncout << f() << \" \" << f(4);\n}</code></pre>",
          "options": [
            "2 12",
            "6 12",
            "6 4",
            "12 6"
          ],
          "answer": 1,
          "explanation": "f() 没传参数，用默认值 2，返回 2×3=6；f(4) 用实参 4，返回 12。所以输出 6 12。默认参数在没有实参时自动生效，所以 f() 用 x=2 计算。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_19",
          "kp": "kp4_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序可以正常编译并输出 10 。\nint calc(int x, int y = 10);\n<pre><code>int calc(int x) { return x * 2; }\nint calc(int x, int y) { return x * y; }\nint main() {\ncout << calc(5);\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "calc(5) 既可以匹配 calc(int)（1 个参数），也可以通过默认参数匹配 calc(int,int)（2 个参数），两个重载匹配程度相同，产生二义性，编译报错，不能输出。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_02",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序想通过函数计算三门课总分，横线处应填入的是（  ）。\n<pre><code>int sumScore(int a, int b, int c) {\nreturn a + b + c;\n}\nint main() {\nint chinese = 88, math = 95, english = 90;\nint total = __________;\ncout << total;\nreturn 0;\n}</code></pre>",
          "options": [
            "sumScore",
            "sumScore(chinese, math, english)",
            "sumScore(int chinese, int math, int english)",
            "sumScore(a, b, c)"
          ],
          "answer": 1,
          "explanation": "函数调用要写上函数名并传入实参，写成 sumScore(chinese, math, english)，返回值赋给 total。其余写法要么只有函数名，要么带了类型声明，都不是合法的调用。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_03",
          "kp": "kp4_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序输出结果是（  ）。\n<pre><code>int addOne(int x) {\nreturn x + 1;\n}\nint main() {\nint a = 6;\ncout << addOne(a) + addOne(3);\nreturn 0;\n}</code></pre>",
          "options": [
            "9",
            "10",
            "11",
            "12"
          ],
          "answer": 2,
          "explanation": "addOne(a)=addOne(6)=7，addOne(3)=4，两个返回值相加 7+4=11。函数返回后相加，只需分别算出两个返回值即可。先把 6 和 3 分别加 1，得到 7 与 4，再加起来就是 11。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_02": {
      "title": "形参实参与作用域",
      "questions": [
        {
          "id": "l4_202306_06",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中变量的叙述，正确的是（ ）。",
          "options": [
            "A. 变量定义后可以一直使用",
            "B. 两个变量的变量名不能是相同的",
            "C. 两个变量的变量名可以相同，但它们的类型必须是不同的",
            "D. 两个变量的变量名可以相同，但它们的作用域必须是不同的"
          ],
          "answer": 3,
          "explanation": "变量有作用域，离开作用域后就不能使用，所以 A 错。不同作用域下可以用相同变量名（如不同函数里的局部变量），它们互不影响，所以 D 正确。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_20",
          "kp": "kp4_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，一个函数没有被调用时，它的参数不占用内存。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数参数存储在调用栈上，只有函数被调用时才会为形参分配内存，函数返回时回收。函数没有被调用，参数自然不占内存，说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_18",
          "kp": "kp4_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，每个变量都有其作用域。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "变量从定义处开始，到它所在代码块结束为止的范围内有效，这个范围就是作用域。全局变量也有其作用域，所以每个变量都有作用域，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_01",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关函数参数的说法，正确的是( )。",
          "options": [
            "A. 函数参数传递时，主函数当中采用值传递方式将参数传递给子函数时，若子函数将参数值改变，主函数当中的参数值不变。",
            "B. 函数参数传递时，主函数当中采用值传递方式将参数传递给子函数时，若子函数将参数值改变，主函数当中的参数值将随子函数一样改变而改变。",
            "C. 函数参数传递时，主函数如果将参数的地址传递给子函数，若子函数将参数值改变，主函数当中的参数值将不改变。",
            "D. 函数参数传递可以不满足子函数的参数个数要求。"
          ],
          "answer": 0,
          "explanation": "值传递时形参是实参的副本，子函数修改形参不影响主函数实参，A 正确、B 错误；传地址（指针）时子函数可通过指针修改实参，C 错误；调用必须满足形参个数要求，D 错误。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_13",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "C++语言中下面哪个关键字能够限定对象的作用域（  ）。",
          "options": [
            "extern",
            "static",
            "inline",
            "public"
          ],
          "answer": 1,
          "explanation": "static 可以限制变量/函数的作用域（如只在当前文件或当前函数内可见），还能控制静态变量的生命周期。extern 是声明外部变量，inline 表示内联，public 是访问权限，都起不到限定作用域的作用。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_19",
          "kp": "kp4_02",
          "type": "judge",
          "difficulty": 1,
          "question": "两个函数之间可以使用全局变量来传递数据。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "全局变量定义在所有函数之外，程序任何地方都能访问，作用域覆盖所有函数，因此两个函数可以通过全局变量相互传递数据，这种用法是合法的，所以正确。不过过度依赖全局变量会降低程序可读性，应谨慎使用。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_03",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序输出的是（  ）。\n<pre><code>int main() {\nint i=2;\ncout<<i<<endl;\nfor(int x=0;x<1;x++) { int i=10; cout<<i<<endl; }\ni=i+1;\ncout<<i<<endl;\n{ i=i*i; cout<<i<<endl; }\n}</code></pre>",
          "options": [
            "2 2 3 9",
            "2 10 3 9",
            "2 10 11 121",
            "2 10 3 100"
          ],
          "answer": 1,
          "explanation": "先输出 2；for 循环里的局部 i=10 输出 10；出 for 后 i=i+1=3 输出 3；块内 i=i*i=9 输出 9。所以输出 2 10 3 9，选 B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_02",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，形参与实参的关系描述正确的是（  ）。",
          "options": [
            "形参在函数调用时指定，实参在函数定义时传递",
            "形参在函数定义时指定，实参在函数调用时传递",
            "形参和实参可以互换",
            "形参和实参必须是完全相同的类型，不能有任何差异"
          ],
          "answer": 1,
          "explanation": "形参（parameter）写在函数定义中，用来接收数据；实参（argument）是调用函数时真正传入的值，调用时把实参的值赋给形参，所以 B 正确。实参与形参按位置一一对应，类型要兼容。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_03",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "运行以下代码，屏幕上将输出（  ）。\nint var = 100;\n<pre><code>void function() {\nint var = 200;\ncout << var << \" \";\ncout << ::var << \" \";\n}\nint main() {\ncout << var << \" \";\nfunction();\nvar += 100;\ncout << var << \" \";\n}</code></pre>",
          "options": [
            "100 200 100 200",
            "100 200 100 300",
            "100 200 200 200",
            "100 200 200 300"
          ],
          "answer": 0,
          "explanation": "main 先输出全局 var=100；function 里局部 var=200 输出 200，::var 是全局变量输出 100；var+=100 后全局 var=200，最后输出 200。得到 100 200 100 200。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_02",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下述代码将输出（  ）。\nint x = 10;\n<pre><code>void func() { int x = 20; std::cout << x; }\nint main() {\nfunc();\nstd::cout << x;\n}</code></pre>",
          "options": [
            "2020",
            "2010",
            "1010",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "func 函数内部定义了局部变量 x=20 并输出 20；main 函数里没有局部 x，输出的是全局变量 x=10。两行输出连起来是\"2010\"，中间没有换行，所以选 B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_06",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个选项正确描述了C++中形参和实参的区别？",
          "options": [
            "形参是函数调用时传递给函数的具体值，实参是函数定义中声明的变量。",
            "形参是函数定义中声明的变量，实参是函数调用时传递给函数的具体值。",
            "形参和实参在函数调用时是完全相同的。",
            "形参只在函数内部可见，实参在函数外部可见。"
          ],
          "answer": 1,
          "explanation": "形参（parameter）写在函数定义和声明里，是接收数据的变量；实参（argument）是调用时真正传入的具体值。调用时实参的值会赋给形参。把两者分清，是理解函数调用时数据如何传递的基础。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_07",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "运行如下代码会输出（  ）。\nint value = 100;\nvoid print1() {\nint value = 50;\ncout << value << \" \";\ncout << ::value << \" \";\n}\nvoid print2() {\ncout << value << \" \";\n}\nprint1();\nprint2();",
          "options": [
            "100 100 100",
            "50 50 50",
            "50 100 100",
            "50 50 100"
          ],
          "answer": 2,
          "explanation": "print1 里局部的 value 是 50，输出 50；::value 表示全局变量，是 100，输出 100。print2 里没有局部变量，直接用全局 value=100。所以输出 50 100 100。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_05",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面这段代码会输出（   ）。\nint x = 5;\n<pre><code>void foo() { int x = 10; cout << x << \" \"; }\nvoid bar() { cout << x << \" \"; }\nint main() { foo(); bar(); }</code></pre>",
          "options": [
            "5 5",
            "10 10",
            "5 10",
            "10 5"
          ],
          "answer": 3,
          "explanation": "foo 里定义了局部变量 x=10，输出 10；bar 里没有局部 x，使用的是全局 x=5，输出 5。所以结果是 10 5。局部变量优先于全局变量，这是作用域规则的基本应用。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_17",
          "kp": "kp4_02",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码将输出 11 。\nint x = 10;\n<pre><code>void f() {\nint x = x + 1;\ncout << x << endl;\n}\nint main() {\nf();\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数 f 里声明局部变量 x 时，初始化器 x+1 中的 x 指向自己这个还没初始化的局部变量，读未初始化变量是未定义行为，结果不确定，不一定是 11。new 返回指针赋给对应指针类型，代码可以正常编译。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_06",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "执行完下面的代码后，输出是（  ）。\nint a = 1;\n<pre><code>void test() {\nint a = 2;\n{\nint a = 3;\na++;\n}\na++;\ncout << a << \" \";\n}\nint main() {\ntest();\ncout << a;\nreturn 0;\n}</code></pre>",
          "options": [
            "3 1",
            "4 1",
            "3 2",
            "4 2"
          ],
          "answer": 0,
          "explanation": "test 里最内层大括号的 a=3 自增为 4，但只在内层有效；离开内层后外层 a=2 自增为 3，输出 3。main 里用的是全局 a=1，输出 1。所以结果是 3 1。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_05",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面程序后输出为（ ）。\nint x = 3;\n<pre><code>void f(int& x){\nx += 2;\n}\nint main(){\nint x = 10;\nf(x);\ncout << x << \" \" << ::x;\n}</code></pre>",
          "options": [
            "12 3",
            "10 5",
            "12 5",
            "10 3"
          ],
          "answer": 0,
          "explanation": "main 里的局部 x=10，f(x) 用引用把局部 x 加 2 变成 12；::x 是全局变量，值为 3。输出 12 3。局部变量遮蔽全局变量，用 :: 才能访问全局的 x。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_20",
          "kp": "kp4_02",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序执行后输出 2010 。\nint x = 10;\n<pre><code>void f() { int x = 20; cout << x; }\nint main() {\nf();\ncout << x;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "f 里的局部 x=20 输出 20，main 里的全局 x=10 输出 10，连起来输出 2010。说法正确。局部优先、全局其次，拼起来就是 2010。先输出函数内的 20，再输出全局的 10，合起来正好是 2010。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_04",
          "kp": "kp4_02",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下面程序，说法正确的是（  ）。\n<pre><code>void show() {\nint stars = 5;\n}\nint main() {\ncout << stars;\nreturn 0;\n}</code></pre>",
          "options": [
            "程序输出 5",
            "程序可以通过编译，但输出随机值",
            "程序不能通过编译，因为 stars 只在 show 函数中有效",
            "程序不能通过编译，因为 cout 不能输出变量"
          ],
          "answer": 2,
          "explanation": "stars 是 show 函数内部的局部变量，离开 show 就不可见，main 里使用 stars 会报未声明错误，因此编译失败。局部变量只在所属函数内可见，越界使用就是编译错误。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_03": {
      "title": "指针",
      "questions": [
        {
          "id": "l4_202306_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中指针的叙述，不正确的是（ ）。",
          "options": [
            "A. 指针变量中存储的是内存地址",
            "B. 定义指针变量时必须指定其指向的类型",
            "C. 指针变量只能指向基本类型变量，不能指向指针变量",
            "D. 指针变量指向的内存地址不一定能够合法访问"
          ],
          "answer": 2,
          "explanation": "指针变量存的是内存地址，定义时要指明所指向的类型。指针不仅可以指向基本类型变量，也可以指向别的指针（如 int**），所以 C 的说法错误，选 C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_08",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个变量定义为 int *p = nullptr;，则下列说法正确的是（ ）。",
          "options": [
            "A. 该指针变量的类型为 int",
            "B. 该指针变量指向的类型为 int",
            "C. 该指针变量指向的内存地址是随机的",
            "D. 访问该指针变量指向的内存会出现编译错误"
          ],
          "answer": 1,
          "explanation": "p 本身的类型是 int*（指针类型），它指向的类型是 int，所以 B 正确。nullptr 指向地址 0，不是随机值；解引用它通常出现运行时错误而非编译错误，所以 B 对。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_11",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数组定义为 int a[5] = {1, 2, 3, 4, 5};，一个指针定义为 int * p = &a[2];，则执行 a[1] = *p; 后，数组 a 中的值会变为（ ）。",
          "options": [
            "A. {1, 3, 3, 4, 5}",
            "B. {2, 2, 3, 4, 5}",
            "C. {1, 2, 2, 4, 5}",
            "D. {1, 2, 3, 4, 5}"
          ],
          "answer": 0,
          "explanation": "p 指向 a[2]，*p 就是 a[2]=3。执行 a[1] = *p 相当于 a[1] = a[2]，a[1] 由 2 变为 3，数组成为 {1,3,3,4,5}，选 A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_13",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是“20 10”。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nvoid xchg(__________) { // 在此处填入代码\nint t = *x;\n*x = *y;\n*y = t;\n}\nint main() {\nint a = 10, b = 20;\nxchg(&a, &b);\ncout << a << \" \" << b << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "A. int x, int y",
            "B. int * x, int * y",
            "C. int a, int b",
            "D. int & a, int & b"
          ],
          "answer": 1,
          "explanation": "函数体用 *x、*y 访问，调用时传 &a、&b（地址），说明形参必须是能存放地址的指针，即 int *x, int *y，选 B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_04",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中指针的叙述，不正确的是（ ）。",
          "options": [
            "A. 可以定义指向 int 类型的指针",
            "B. 可以定义指向自定义结构体类型的指针",
            "C. 自定义结构体类型可以包含指针类型的元素",
            "D. 不能定义指向 void 类型的指针，那没有意义"
          ],
          "answer": 3,
          "explanation": "C++ 中可以定义指向任何类型的指针，包括 void*（空类型指针，可用于通用地址）。结构体里也可以含指针成员，所以 D 的说法错误，选 D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_09",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "如果 n 为 int 类型的变量，一个指针变量定义为 int *p=&n;，则下列说法正确的是（ ）。",
          "options": [
            "A. 指针变量 p 的值与变量 n 是相同的",
            "B. 指针变量 p 的值与变量 n 的地址是相同的",
            "C. 指针变量 p 指向的值为 'n'",
            "D. 指针变量 p 指向的值与变量 n 的地址是相同的"
          ],
          "answer": 1,
          "explanation": "p 保存的是变量 n 的内存地址，所以 p 的值等于 n 的地址。p 指向的值是 n 的值，不是 'n' 字符，选 B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_12",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数组定义为 int a[5] = {1, 2, 3, 4, 5};，一个指针定义为 int * p = &a[2];，则执行 *p = a[1]; 后，数组 a 中的值会变为（ ）。",
          "options": [
            "A. {1, 2, 2, 4, 5}",
            "B. {1, 3, 3, 4, 5}",
            "C. {1, 2, 3, 3, 5}",
            "D. {1, 2, 4, 4, 5}"
          ],
          "answer": 0,
          "explanation": "p 指向 a[2]，*p = a[1] 就是把 a[1] 的值 2 赋给 a[2]，a[2] 由 3 变成 2，数组成为 {1,2,2,4,5}，选 A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，指针变量在逻辑上指向另一个变量在内存中的位置，指针变量本身不占用内存。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "指针变量本身也是一个变量，用来存放地址，它同样要占用内存（如 32 位系统占 4 字节，64 位系统占 8 字节），所以说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 C++ 代码最后执行后输出是( )。\n```cpp\nint fun1(int *n)\n{\nreturn *n**n;\n}\n<pre><code>int main()\n{\nint arr[10]={2};\narr[1]=fun1(arr);\ncout<<arr[1]<<endl;\n}\n```</code></pre>",
          "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          "answer": 3,
          "explanation": "arr[0]=2，其余为 0。fun1(arr) 传入数组首地址，*n 是 arr[0]=2，返回 2*2=4。arr[1] 被赋为 4，输出 4，选 D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_05",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 C++ 代码执行后输出是（ ）。\n```cpp\nint arr[3]={1,2,3};\nint *p=NULL;\np=arr;\np++;\ncout<<*p<<endl;\n```",
          "options": [
            "A. 1,2,3",
            "B. 1",
            "C. 2",
            "D. 3"
          ],
          "answer": 2,
          "explanation": "p=arr 让 p 指向数组首元素 arr[0]（值为 1）；p++ 让 p 指向下一个元素 arr[1]，*p 就是 2，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_06",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "如果变量 x 的地址是 0x6ffe14，下面 C++ 代码执行以后输出的是（ ）。\n```cpp\nint *p=NULL;\nint x=2;\np=&x;\np++;\ncout<<p<<endl;\n```",
          "options": [
            "A. 0x6ffe11",
            "B. 0x6ffe14",
            "C. 0x6ffe18",
            "D. 0x6ffe15"
          ],
          "answer": 2,
          "explanation": "p 指向 x，地址 0x6ffe14。p++ 让指针向后移动一个 int 的大小，即 4 字节，地址变为 0x6ffe18，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_07",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，执行下面代码后，输出的是（ ）。\n```cpp\nint point(int *p)\n{\nreturn *p**p;\n}\n<pre><code>int main()\n{\nint a=20;\nint *p=&a;\n*p=point(p);\ncout<<*p<<endl;\n}\n```</code></pre>",
          "options": [
            "A. 400",
            "B. 200",
            "C. 20",
            "D. 100"
          ],
          "answer": 0,
          "explanation": "point(p) 中 *p 是 a 的值 20，返回 20*20=400。随后 *p=400 把 a 改为 400，cout<<*p 输出 400，选 A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（  ）。\n<pre><code>int foo(float *f) {\nreturn int(*f*2);\n}\nint main() {\nfloat fnum[10]={1.1};\nfnum[1]=foo(fnum);\ncout << fnum[0]+fnum[1] << endl;\n}</code></pre>",
          "options": [
            "1",
            "1.1",
            "3",
            "3.1"
          ],
          "answer": 3,
          "explanation": "foo(fnum) 传入 fnum 的首地址，*f 是 1.1，*f*2=2.2，int(2.2) 截断小数部分得到 2，所以 fnum[1]=2。fnum[0]+fnum[1]=1.1+2=3.1，输出 3.1。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_06",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（  ）。\n<pre><code>int main() {\nchar *p=\"I love GESP!\";\ncout << p+5 << endl;\n}</code></pre>",
          "options": [
            "e",
            "I lov",
            "e GESP!",
            "GESP!"
          ],
          "answer": 2,
          "explanation": "p 指向字符串第一个字符 I，p+5 使指针向后移动 5 个字符位置，指向字母 e。从 e 开始一直输出到字符串结尾，得到\"e GESP!\"，所以选 C。指针加 5 表示从字符串开头向后跳过 5 个字符，所以从第 6 个字符 e 开始输出。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_12",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下列C++代码时输出中的第2行是（  ）。\n<pre><code>int main() {\nchar *s[]={(char*)\"2024\",(char*)\"3.16\",(char*)\"GESP\"};\nfor (int i=0; i<2; i++){\ncout << *s+i << endl;\n}\n}</code></pre>",
          "options": [
            "2024",
            "3.16",
            "024",
            "3"
          ],
          "answer": 2,
          "explanation": "*s 就是 s[0]，指向字符串\"2024\"。*s+i 是 (*s)+i，i=0 时输出\"2024\"，i=1 时指针后移一位，从第 2 个字符起输出\"024\"，这就是第 2 行。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_18",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "定义变量 int a=5 ，则 cout << &++a 会输出 6 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "++a 使 a 变成 6，但 & 是取地址运算符，cout << &++a 输出的是 a 的地址值，而不是 6。要输出 6 应写 cout << ++a 或 cout << a，所以说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_04",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "假设变量 a 的地址是 0x6ffe14，下面程序的输出是（  ）。\n<pre><code>int main() {\nint *p;\nint a=10;\np=&a;\np++;\ncout<<p<<endl;\n}</code></pre>",
          "options": [
            "10",
            "0x6ffe14",
            "0x6ffe15",
            "0x6ffe18"
          ],
          "answer": 3,
          "explanation": "p=&a 指向 0x6ffe14，p 是 int*，p++ 按 int 大小前进 4 字节，变成 0x6ffe18。cout 输出指针时打印地址 0x6ffe18。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_15",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序中，如果语句 cout<<p<<endl; 输出的是 0x6ffe00 ，则 cout<<++p<<endl; 输出的是（  ）。\nint x[10][10][10]={{0}};\nint *p;\np=&x[0][0][0];\ncout<<p<<endl;\ncout<<++p<<endl;",
          "options": [
            "0x6ffe0c",
            "0x6ffe09",
            "0x6ffe06",
            "0x6ffe04"
          ],
          "answer": 3,
          "explanation": "p 是 int* 类型，指向 0x6ffe00。++p 使指针按 int 的大小前进 4 字节，得到 0x6ffe00+4=0x6ffe04，所以选 D。int* 指针自增一次移动一个 int 的长度，即 4 字节。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "int& a 和 &a 是一样的，都是取 a 的地址。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "int& a 是声明一个名为 a 的引用，它是其他变量的别名；&a 才是取 a 的地址，两者含义完全不同。把引用声明和取地址运算混为一谈，说法错误。引用是变量的别名，声明后要绑定；取地址返回的是地址值。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_17",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码不能够正确执行。\n<pre><code>int main() {\nint a=20;\nint& ra;\nra=&a;\ncout<<ra<<endl;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用必须在声明时进行初始化，int& ra; 声明后没有立刻绑定对象，再写 ra=&a 试图给引用赋值是语法错误，编译器直接报错，所以这段代码不能正确执行，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_18",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "引用是一个指针常量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用一旦绑定到某个变量就不能再改指向别的变量，而且使用时会自动解引用，不需要写星号，本质上相当于带有自动解引用功能的指针常量。说引用是指针常量是合理的，所以正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_22",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码输出的值等于 0。\n<pre><code>int main() {\nint *p=NULL;\ncout<<p<<endl;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "p 初始化为空指针 NULL，NULL 在 C++ 中的数值就是 0，cout 输出指针 p 时按数值输出为 0，所以输出的值等于 0，与题目说法一致。NULL 与 0 等价，输出空指针显示为 0。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_04",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面代码，屏幕上输出是（  ）。\nint arr[3] = {24, 9, 7};\nint* p = arr;\np++;\ncout << *p << endl;",
          "options": [
            "24",
            "9",
            "7",
            "不确定"
          ],
          "answer": 1,
          "explanation": "p 先指向 arr[0]=24，p++ 后指针向后移动一个 int 的大小，指向 arr[1]=9，*p 解引用得到 9。指针加一按所指向类型的大小移动，所以输出 9。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_05",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面代码片段的结果是（  ）。\nint x = 20;\nint y = 24;\nint* p = &x;\nint* q = &y;\np = q;",
          "options": [
            "p 将赋值为 24",
            "p 将赋值为 20",
            "p 将指向 x 的地址",
            "p 将指向 y 的地址"
          ],
          "answer": 3,
          "explanation": "q 指向 y 的地址，执行 p=q 后，p 里存放的就是 y 的地址，即 p 现在指向 y 这个变量，而不是改变 x、y 的数值，所以选 D。指针变量存的是地址，赋地址就是改变指向，不改动目标的值。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "代码 int a = 10; int* p = &a; 可以正确定义指针和初始化指针。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "int* p 定义了一个指向 int 的指针变量 p，&a 取出变量 a 的地址并赋给 p，定义的同时完成了初始化，写法完全合法，所以说法正确。定义指针的同时用地址初始化，是最安全的写法。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_18",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "指针的大小与其所指向的变量的数据类型的大小相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "指针的大小只取决于运行平台，在 64 位系统上是 8 字节，与它指向什么类型无关。char* 和 int* 的大小相同，所以说指针大小等于所指向类型大小是错误的。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_25",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码后，输出的是 20。\n<pre><code>int point(int* p){ return *p * 2; }\nint main() {\nint a = 10;\nint* p = &a;\n*p = point(p);\ncout << *p << endl;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "point(p) 计算 *p*2=10×2=20，把 20 赋给 *p，也就是 a=20。最后 cout<<*p 输出 20，与题目说法一致，所以正确。指针指向 a，*p 与 a 是同一个变量，赋值同步生效。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_04",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面代码，屏幕上输出是（  ）。\ndouble* p_arr = new double[3];\np_arr[0]=0.2; p_arr[1]=0.5; p_arr[2]=0.8;\np_arr += 1;\ncout << p_arr[0] << endl;\np_arr -= 1;\ndelete p_arr;",
          "options": [
            "0.2",
            "0.5",
            "1.2",
            "1.5"
          ],
          "answer": 1,
          "explanation": "p_arr 指向动态数组的首元素，p_arr+=1 后指向下标 1 的元素，此时 p_arr[0] 就是原来的 p_arr[1]=0.5，所以输出 0.5。p_arr 指针加减移动后，再取下标就是按新位置访问。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_05",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面代码片段后，x 和 *p 的结果分别是（  ）。\nint x = 20;\nint* p = &x;\n*p = *p + 2;",
          "options": [
            "20 20",
            "20 22",
            "22 20",
            "22 22"
          ],
          "answer": 3,
          "explanation": "*p 就是 x，*p=*p+2 把 x 的值增加 2，x 从 20 变成 22。由于 p 仍指向 x，*p 也等于 22，所以 x 和 *p 都是 22，选 D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，下面代码可以正确定义指针和初始化指针。\nint* ptr;\n*ptr = 10;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "int* ptr; 只是声明了指针但未初始化，随即 *ptr=10 对未初始化指针解引用，这是未定义行为。不能正确定义并初始化指针，所以说法错误。未初始化的指针是野指针，解引用后果不可预测。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下述代码后，变量 a 的值为（  ）。\nint a = 10;\nint* p = &a;\n*p = 20;",
          "options": [
            "10",
            "20",
            "随机值",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "p 指向变量 a，*p=20 通过解引用把 a 的值改为 20，所以 a=20。这里 *p 就代表 p 所指向的那个变量，给 *p 赋值等价于给 a 赋值，指针本身存的地址并没有改变，只是它指向的变量的内容被改写了。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_19",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "假设整数数组 arr[4]={0, 1, 2, 3} 的第一个元素在内存中的地址为 0x7ffee4065820，经过 int* p = arr; p += 1; 后，指针 p 的值是 1。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "p+=1 让 p 指向 arr[1]，p 里存放的是 arr[1] 的地址（0x7ffee4065824），不是数值 1。题目把指针的地址值和它指向的元素值混为一谈，说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_01",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，声明一个指向整型变量的指针的正确语法是（  ）。",
          "options": [
            "int* ptr;",
            "*int ptr;",
            "int ptr*;",
            "ptr int;"
          ],
          "answer": 0,
          "explanation": "声明指针时用 * 放在类型名和变量名之间，表示这个变量存放的是地址。int* ptr 表示 ptr 是一个指向 int 的指针，其余写法都缺少 * 或位置错误，编译会失败。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_01",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面程序后变量a 的值是（   ）。\nint a = 42;\nint* p = &a;\n*p = *p + 1;",
          "options": [
            "42",
            "43",
            "编译错误",
            "不确定"
          ],
          "answer": 1,
          "explanation": "p 指向 a 的地址，*p 就是 a 本身。*p = *p + 1 相当于 a = 42 + 1，所以 a 变成 43。指针 *p 就是它指向的变量，修改 *p 等于修改 a 本身。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_02",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于数组的描述中，（   ）是错误的。",
          "options": [
            "数组名是一个指针常量",
            "随机访问数组的元素方便快捷",
            "数组可以像指针一样进行自增操作",
            "sizeof(arr) 返回的是整个数组arr 占用的字节数"
          ],
          "answer": 2,
          "explanation": "数组名可以隐式转换为指针，但数组名本身是常量，不能做 arr++ 这样的自增运算。其他三个说法都正确，所以错误的是 C。数组名是常量，不能自增，这是数组与指针的重要区别。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下定义的数组arr ，则*(*(arr + 1) + 2) 的值是（   ）。\nint arr[2][3] = {{1, 2, 3}, {4, 5, 6}};",
          "options": [
            "2",
            "5",
            "4",
            "6"
          ],
          "answer": 3,
          "explanation": "arr 是二维数组名，arr+1 指向第 1 行，*(arr+1) 相当于 arr[1]，再加 2 相当于 arr[1][2]，值为 6。二维数组名加行偏移再解引用，就能定位到具体元素。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码能正确初始化指针。\nint a = 5;\nint *p = a;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "把 int 类型的值 a 直接赋给 int* 指针，类型不匹配，编译器会报错（除非强转）。要取地址应写 int *p = &a，所以这段代码不能正确初始化指针。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_19",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码将输出 10 。\n<pre><code>void func(int* p) {\n*p = 10;\n}\nint main() {\nint a = 5;\nfunc(&a);\ncout << a << endl;\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "func 收到 a 的地址，*p = 10 直接修改 a 所在内存，a 从 5 变成 10，输出 10。int arr[][4] 作为形参完全合法，它退化为行指针。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_01",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨想让指针 p 指向整数变量 x ，正确写法是（  ）。",
          "options": [
            "int p = &x;",
            "int *p = x;",
            "int *p = &x;",
            "p = *x;"
          ],
          "answer": 2,
          "explanation": "声明指向 int 的指针并让它指向 x，要写 int *p = &x，其中 &x 取 x 的地址。其他写法要么类型不匹配，要么把值当成地址，都是错的。取地址符 & 是让指针指向变量的正确方式，其他写法都是错的。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_02",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨写了如下的指针接力程序，程序执行完后变量 a 、*p1 和*p2 的值分别是（  ）。\nint a = 5;\nint* p1 = &a;\nint* p2 = p1;\n*p2 = 10;",
          "options": [
            "5 10 10",
            "5 10 15",
            "10 10 10",
            "5 5 10"
          ],
          "answer": 2,
          "explanation": "p1 指向 a，p2 也指向 a，*p2 = 10 就是把 a 改成 10。所以 a=10、*p1=10、*p2=10，三者都是 10。两个指针指向同一变量，改其中一个就都改了。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_04",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行完下面的代码后，*(p + 5) 和 arr[1][1] 的值分别是（  ）。\nint arr[3][4] = {{1,2,3,4}, {5,6,7,8}, {9,10,11,12}};\nint* p = &arr[0][0];",
          "options": [
            "5 6",
            "6 5",
            "5 5",
            "6 6"
          ],
          "answer": 3,
          "explanation": "p 指向数组首元素，二维数组按行连续存储，*(p+5) 就是第 6 个元素：1,2,3,4,5,6，所以是 6。arr[1][1] 是第 2 行第 2 列，也是 6。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨正在调试他的温度传感器程序，其中变量 x 保存当前温度。下面这段代码运行后，变量 x 的值变成了 8 。\nint x = 5;\nint *p = &x;\n*p = *p + 3;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "p 指向 x，*p 就是 x，*p = *p + 3 相当于 x = 5 + 3 = 8。所以说法正确。指针解引用后加 3，等价于 x 自增 3，变为 8。温度从 5 上升到 8，题目描述完全正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_20",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面的C++代码，会输出 8 ，因为两个指针地址相差 8 个字节（假设 int 占 4 字节）。\nint arr[5] = {1, 2, 3, 4, 5};\nint* p1 = arr;\nint* p2 = arr + 2;\ncout << p2 - p1;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两个指针相减得到的是中间相隔的元素个数，不是字节数。p2 与 p1 相隔 2 个元素，输出 2 而不是 8。说法错误。指针相减按元素个数计，与元素占多少字节无关。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_02",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面代码后，输出为（ ）。\n<pre><code>int main() {\nint a = 5;\nint* p = &a;\nint** q = &p;\n**q += 7;\ncout << a << \" \" << *p;\n}</code></pre>",
          "options": [
            "5 5",
            "12 12",
            "12 5",
            "5 12"
          ],
          "answer": 1,
          "explanation": "q 是指向指针的指针，**q 就是 a 本身。**q += 7 把 a 从 5 变成 12，*p 也是 12，所以输出 12 12。多一层指针就多一层解引用，**q 最终指向 a。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_03",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "已知：\nint a[3][4] = {\n{1,2,3,4},\n{5,6,7,8},\n{9,10,11,12}\n};\nint (*p)[4] = a;\n则表达式 *(*(p + 2) + 1) 的值为（ ）。",
          "options": [
            "6",
            "10",
            "9",
            "11"
          ],
          "answer": 1,
          "explanation": "p 指向一维数组（4 个 int），p+2 指向第 2 行，*(p+2) 相当于 a[2]，再加 1 就是 a[2][1]=10。行指针加 2 跳到第 2 行，再偏移 1 列得到 a[2][1]。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_17",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "引用一旦绑定某个变量，就不能再绑定其他变量。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用在初始化时绑定一个变量，之后不能重新绑定到别的变量，对引用赋值只会修改原变量的值。所以说法正确。引用一旦绑定不能改绑，这是引用与指针的重要区别。想改绑只能换一个引用，重新赋值无法改变绑定关系。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_21",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，如果声明了一个指针变量但没有显式初始化，该指针会自动被初始化为 nullptr 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "未初始化的局部指针变量的值是随机的（不确定），并不会自动变成 nullptr。只有全局或 static 指针才默认初始化为 nullptr。只有全局或静态指针才默认清零，局部指针是随机值。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_05",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在调试一个“等级提升”系统，代码逻辑如下，执行后 *p 的值是（  ）。\nint lv = 5, next_lv = 6;\nint *p = &lv;\n*p = *p + 1;\np = &next_lv;",
          "options": [
            "5",
            "6",
            "lv 的地址",
            "next_lv 的地址"
          ],
          "answer": 1,
          "explanation": "先把 lv 改为 6，然后 p 重新指向 next_lv，此时 *p 就是 next_lv 的值 6。指针改指向后，*p 取的是新目标的值 6。指针重新指向 next_lv 之后，解引用得到的就是新目标的值。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_07",
          "kp": "kp4_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行完下面代码后，变量 val 的值是（  ）。\nint data[] = {10, 20, 30, 40, 50};\nint *ptr = data + 2;\nint val = *(ptr - 1) + *(ptr + 1);",
          "options": [
            "50",
            "60",
            "70",
            "80"
          ],
          "answer": 1,
          "explanation": "ptr 指向 data[2]=30，*(ptr-1)=data[1]=20，*(ptr+1)=data[3]=40，val=20+40=60。整个数组有 20 个 int 共 80 字节，地址加 80 得到 0x2050。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_16",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "运行以下程序后，变量 a 的值最终会变为 20 。\n<pre><code>void modify(int *p) {\n*p = *p + 10;\n}\nint main() {\nint a = 10;\nmodify(&a);\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "modify 收到 a 的地址，*p 就是 a，*p = *p + 10 把 a 从 10 变成 20。说法正确。modify 通过指针把 a 增大 10，最终变为 20。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_17",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，引用一旦初始化并绑定到某个变量后，可以通过赋值语句将其重新绑定到另一个变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "引用绑定后不能重新绑定到别的变量，对引用赋值只会改变它绑定变量的值。所以说法错误。引用不能重新绑定，赋值只改原变量的值。引用是变量的别名，赋值只修改原变量，不能改变引用的绑定对象。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_25",
          "kp": "kp4_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码可以通过编译。\nint a[5];\na++;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组名是常量指针，不能作为左值做自增运算，a++ 编译报错。所以代码不能通过编译。数组名不能自增，所以 a++ 无法通过编译。数组名是常量指针，自增会编译报错，因此不能通过编译。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_04": {
      "title": "函数参数传递",
      "questions": [
        {
          "id": "l4_202306_12",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个函数声明在调用时可以传递二维数组的名字作为参数？（ ）",
          "options": [
            "A. void BubbleSort(int a[][4]);",
            "B. void BubbleSort(int a[3][]);",
            "C. void BubbleSort(int a[][]);",
            "D. void BubbleSort(int ** a);"
          ],
          "answer": 0,
          "explanation": "数组作为参数时只传首地址，多维数组作形参时除第一维外的各维长度都不能省略，否则编译器无法定位元素。int a[][4] 正确，选 A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_18",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，函数的参数默认以引用传递方式进行传递。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 函数的参数默认采用值传递：调用时把实参的值复制一份给形参，函数内修改形参不影响实参。只有显式写成引用（&）才按引用传递，所以说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_19",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，在函数调用时，通过引用传递的参数不会复制实际参数，因此不会额外占用内存。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "引用参数虽然不复制实参的值，但引用本身作为一个变量也要占用内存（存实参的地址），并不是完全不占用内存，所以说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_01",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "若函数声明为 int f(int &x){ x+=3; return x; } ，则对声明的变量 int a=3 ，下面哪个调用能够改变 a 的值（  ）。",
          "options": [
            "f(&a);",
            "f(*a);",
            "f(a);",
            "f(a-3);"
          ],
          "answer": 2,
          "explanation": "f 的形参是引用 int&，f(a) 会把 a 以引用的方式传进去，函数里 x+=3 直接修改的是 a，a 变为 6。A 传的是地址（int*）类型不匹配，B 的 *a 非法，D 的 a-3 是右值不能绑定到非 const 引用。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_21",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，函数的参数为指针时，可以在函数内部修改该参数的值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "指针参数也是按值传递，函数内得到的形参只是实参指针的拷贝，修改形参本身不会影响实参。要改变实参指针，必须传指针的引用或指针的指针，说法错误。按值传递的形参是实参的一份拷贝，改拷贝改不到原件。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_01",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码中，输出结果是（  ）。\n<pre><code>#include<iostream>\nusing namespace std;\nint func(int x,int y) {\nint a=x,b=y,t;\nt=a; a=b; b=t;\ncout<<a<<\" \"<<b<<\" \";\n}\nint main() {\nint c,d; c=12; d=24;\nfunc(12,24);\ncout<<c<<\" \"<<d<<endl;\n}</code></pre>",
          "options": [
            "12 24 24 12",
            "24 12 12 24",
            "12 12 24 24",
            "24 24 12 12"
          ],
          "answer": 1,
          "explanation": "func 按值接收 12、24，函数内交换 a、b 后输出\"24 12 \"；main 里的 c、d 不受影响仍是 12 24，输出\"12 24\"。连起来是 24 12 12 24。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_21",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "函数参数传递过程中，如果传常量值、常量引用和常量指针都是不能被修改的，它们可以防止函数对实参的值或地址进行修改。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "const 限定的参数在函数内只读不可写：const 值、const 引用、const 指针都能防止函数修改实参的值或地址，从而保护实参不被改动，所以说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_17",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，引用传递允许函数修改传递给它的参数的值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用传递的形参是实参的别名，函数内对引用的修改会直接作用到实参上，因此通过引用参数可以修改调用者变量的值，这正是引用传递区别于值传递的特点，所以正确。若形参是普通值传递，则无法修改实参。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_03",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "给定以下代码，执行上述代码后，变量 a 的值为（  ）。\nvoid func(int& x) { x = x * 2; }\nint a = 5;\nfunc(a);",
          "options": [
            "5",
            "10",
            "15",
            "20"
          ],
          "answer": 1,
          "explanation": "func 的参数是引用 int&，x 是实参 a 的别名，函数里 x=x*2 实际直接修改的是 a 本身，a 由 5 变成 10。引用传递不会拷贝数据，函数内改动会直接反映到原变量上。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_18",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "函数参数可以通过值传递、引用传递和指针传递，这样函数内对参数的修改可以直接修改传入变量的值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "引用传递和指针传递可以修改传入的变量，但值传递传的是实参的副本，函数内的修改不会影响实参。题目把三种传递方式混在一起，说成都能直接修改传入变量，所以说法错误。只有引用和指针传参才能把修改带出函数。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_04",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种参数传递方式可以避免拷贝大型对象？",
          "options": [
            "只能用值传递",
            "只能用引用传递",
            "只能用指针传递",
            "引用传递和指针传递均可"
          ],
          "answer": 3,
          "explanation": "值传递会把实参整体复制一份，大型对象拷贝开销很大；引用传递和指针传递都只传地址或别名，不复制对象本身，都能避免拷贝，所以 D 正确。值传递会产生拷贝开销，大对象时尤其明显。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_05",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下述代码，将输出（  ）。\n<pre><code>void swap(int a, int &b) {\nint temp = a;\na = b;\nb = temp;\n}\nint main() {\nint x = 1, y = 2;\nswap(x, y);\nstd::cout << x << y;\n}</code></pre>",
          "options": [
            "12",
            "21",
            "22",
            "11"
          ],
          "answer": 3,
          "explanation": "a 按值接收 x 的副本 1，b 是 y 的引用。函数内 a=b 使 a=2，b=temp=1。x 不受影响仍是 1，y 变为 1，输出\"11\"，所以选 D。值传递的形参改不动实参，引用的形参才能改到实参。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_20",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "二维数组作为函数参数时，必须显式指定所有维度的大小。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二维数组作函数参数时，第一维（行数）可以省略，只要求给出列数，例如 int f(int a[][4])。不是必须指定所有维度，所以说法错误。二维数组形参中，第一维大小可省，第二维必须写。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_02",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的函数接收一个行列的二维数组并输出其中元素，则横线上不能填写（  ）。\nvoid printArray(________) {\nfor (int i = 0; i < 3; ++i)\nfor (int j = 0; j < 4; ++j)\nstd::cout << arr[i][j] << \" \";\n}",
          "options": [
            "int arr[3][4]",
            "int arr[][4]",
            "int (*arr)[4]",
            "int** arr"
          ],
          "answer": 3,
          "explanation": "形参用 int arr[3][4]、int arr[][4] 或 int (*arr)[4] 都等价于指向一维数组（4 个 int）的指针，可以用 arr[i][j] 正确访问。int** 是指向指针的指针，用它访问 arr[i][j] 语义错误，无法正确表示二维数组，所以不能填。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_05",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，如果希望通过函数修改传入的结构体对象的内容，应该使用哪种参数传递方式？",
          "options": [
            "值传递或引用传递",
            "值传递或指针传递",
            "引用传递或指针传递",
            "仅指针传递"
          ],
          "answer": 2,
          "explanation": "值传递会把结构体复制一份，函数里改的是副本，原对象不变。要修改调用者的结构体，必须用引用或指针传入地址，所以引用传递和指针传递都可以。仅用值传递无法修改原对象，所以选引用或指针，答案 C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_17",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码的输出是15 。\n<pre><code>void foo(int x) { x += 5; }\nint main() {\nint a = 10;\nfoo(a);\ncout << a << endl;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "foo 的参数是按值传递，x 是 a 的副本，函数里 x += 5 只改了副本，a 仍然是 10。所以输出是 10 而不是 15，说法错误。按值传递只改副本，这正是本题容易出错的地方。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_19",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，相比于值传递，使用引用传递作的优点可以直接操作和修改原始变量，避免数据拷贝，提高效率。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用传递不会复制数据，形参就是原变量的别名，可以直接修改原变量，还能省去拷贝的开销。所以这句话正确。引用既是别名又省去拷贝，这两点都是它的核心优点。做题时看到'直接操作原变量'和'省去拷贝'，都应立刻联想到引用传递。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_06",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序运行的结果是（   ）。\n<pre><code>void increaseA(int x) { x++; }\nvoid increaseB(int* p) { (*p)++; }\nint main() {\nint a = 5;\nincreaseA(a);\ncout << a << \" \";\nincreaseB(&a);\ncout << a;\n}</code></pre>",
          "options": [
            "6 7",
            "6 6",
            "5 6",
            "5 5"
          ],
          "answer": 2,
          "explanation": "increaseA 按值传参，只改变副本，a 仍是 5，输出 5。increaseB 传入 a 的地址，*p 就是 a，自增后 a 变成 6。所以输出 5 6。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_20",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码将二维数组arr 传递给函数f ，函数内部用arr[i][j] 访问元素，函数参数声明为int arr[][4] 是错误的。\nvoid f(int arr[][4], int rows) {\n// 访问 arr[i][j]\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "作为形参，int arr[][4] 是合法的二维数组参数写法，它退化为指向 int[4] 的指针，可以正确用 arr[i][j] 访问。题目的说法错误。递推就是由前推后，从初值出发逐步求出每一项。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_07",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行完下面的代码后，a 、b 和 c 的值分别是（   ）。\n<pre><code>void byValue(int x) { x = 100; }\nvoid byRef(int& x) { x = 200; }\nvoid byPointer(int* x) { *x = 300; }\nint main() {\nint a = 1, b = 2, c = 3;\nbyValue(a);\nbyRef(b);\nbyPointer(&c);\nreturn 0;\n}</code></pre>",
          "options": [
            "100 200 300",
            "1 2 3",
            "1 200 300",
            "1 2 300"
          ],
          "answer": 2,
          "explanation": "byValue 改的是副本，a 仍是 1；byRef 用引用改 b 为 200；byPointer 用指针改 c 为 300。所以 a=1、b=200、c=300。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_19",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面程序后，变量 a 的值会变成 15 。\nvoid add(int &x){\nx += 10;\n}\nint a = 5;\nadd(a);",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "add 的参数是引用 int&，函数内 x += 10 直接作用于原变量 a，所以 a = 5 + 10 = 15。说法正确。引用作为形参可以直接修改传入的实参变量。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_04",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面程序后，输出为（ ）。\n<pre><code>void fun(int a, int &b, int *c){\na += 1;\nb += 2;\n*c += 3;\n}\nint main(){\nint x = 1, y = 1, z = 1;\nfun(x, y, &z);\ncout << x << \" \" << y << \" \" << z;\n}</code></pre>",
          "options": [
            "2 3 4",
            "1 3 4",
            "2 1 4",
            "1 1 1"
          ],
          "answer": 1,
          "explanation": "a 按值传，x 不变仍是 1；b 按引用传，y 变成 3；c 按指针传，*c 就是 z，z 变成 4。输出 1 3 4。三种传参方式的效果不同：值不改、引用和指针能改。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_07",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面代码后输出为（ ）。\nstruct S { int a; int b; };\n<pre><code>void g(S s){ s.a += 10; }\nvoid h(S& s){ s.b += 10; }\nint main(){\nS s{1,2};\ng(s);\nh(s);\ncout << s.a << \" \" << s.b;\n}</code></pre>",
          "options": [
            "11 12",
            "1 12",
            "11 2",
            "1 2"
          ],
          "answer": 1,
          "explanation": "g 按值传参，改的是副本，s.a 仍是 1；h 按引用传参，s.b 从 2 变成 12。所以输出 1 12。值传递改副本，引用传递改原对象，两种方式结果不同。按值传参不会改动原结构体，按引用传参才会，结果因此不同。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_16",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码执行结束时，变量 a 的值变成 15。\n<pre><code>void add10(int &x) { x += 10; }\nint main() {\nint a = 5;\nadd10(a);\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "add10 的参数是引用，函数里 x += 10 直接修改原变量 a，5+10=15。说法正确。引用形参直接作用于实参，所以 a 被改成 15。引用形参直接作用于实参 a，所以 a 被成功修改为 15。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_01",
          "kp": "kp4_04",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨正在编写一个“数字交换器”程序，他希望通过函数交换两个变量的值。请问运行以下代码后，屏幕上输出的是（  ）。\n<pre><code>void exchange(int *a, int &b) {\nint t = *a;\n*a = b;\nb = t;\n}\nint main() {\nint x = 100, y = 200;\nexchange(&x, y);\ncout << x << \" \" << y;\nreturn 0;\n}</code></pre>",
          "options": [
            "100 200",
            "200 100",
            "200 200",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "exchange 用指针和引用分别传入 x、y：t 暂存 100，*a 即 x 被改为 200，b 即 y 被改为 t=100。所以输出 200 100。指针和引用都能交换两个变量的值，运行结果是 200 100。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_24",
          "kp": "kp4_04",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨想通过下面程序给饭卡充值，程序会输出 70 。\n<pre><code>void recharge(int money) {\nmoney += 20;\n}\nint main() {\nint card = 50;\nrecharge(card);\ncout << card;\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "recharge 的参数按值传递，money 是 card 的副本，函数内 money+=20 不影响 card，card 仍是 50，输出 50 而不是 70。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_05": {
      "title": "结构体",
      "questions": [
        {
          "id": "l4_202309_20",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，可以通过定义结构体，定义一个新的数据类型。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用 struct 定义结构体就是在声明一个新的数据类型，之后可以用这个类型名定义变量，所以说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_21",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，可以定义结构体类型的数组变量，定义结构体时也可以包含数组成员。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "结构体是一种数据类型，可以定义该类型的数组；结构体成员也可以是数组（如 char name[20]），两种写法都合法，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_10",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在如下的C++代码执行后，设第11和12行的输出地址值分别为X和Y，则下面正确的是（  ）。\nstruct pass{ int no; char name[20]; int level; };\n<pre><code>int main() {\nstruct pass XiaoYang;\ncout << \"&XiaoYang=\" << &XiaoYang << endl;  //第11行\ncout << \"&(XiaoYang.no)=\" << &(XiaoYang.no) << endl; //第12行\n}</code></pre>",
          "options": [
            "X>Y",
            "X==Y",
            "X<Y",
            "不确定"
          ],
          "answer": 1,
          "explanation": "结构体变量的地址就是它第一个成员 no 的地址，因为第一个成员排在结构体存储的最前面，两者起始位置相同。X 和 Y 都是同一个地址，所以 X==Y。结构体与它的第一个成员从同一地址开始，这是结构体内存布局的基本规律。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_06",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，（  ）正确定义一个名为 student 的结构体，其中包含一个 name 字符数组和一个 age 整数？",
          "options": [
            "struct student { char name[20]; int age; };",
            "student struct { char name[20]; int age; };",
            "student struct { string name; int age; };",
            "struct student { char[20] name; int age; };"
          ],
          "answer": 0,
          "explanation": "结构体定义的格式是 struct 结构体名 { 成员列表 };。A 用 struct student 开头，成员是字符数组 name[20] 和 int age，写法正确。其他选项关键字顺序或成员声明格式都错了。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_06",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的描述中，（  ）不能正确定义一个名为 Student 的结构体以及一个包含 20 个元素的结构数组。",
          "options": [
            "struct Student { string name; int age; float score; };\nstruct Student students[20];",
            "struct Student { string name; int age; float score; };\nStudent students[20];",
            "struct Student { string name; int age; float score; };\nStudent* students = new Student[20];",
            "struct Student { string name; int age; float score; };\nStudent students = new Student[20];"
          ],
          "answer": 3,
          "explanation": "D 把 new 返回的指针赋给单个结构体变量 students，类型不匹配，编译错误。A、B 定义结构数组合法，C 用 new 动态分配结构数组也合法。结构体变量与指针是不同类型，不能直接赋值。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_06",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的描述中，（  ）正确定义一个名为 Person 的结构体并正确初始化了一个 Person 结构体的变量 p。",
          "options": [
            "struct Person { string name; int age; };\nPerson p(\"Yang\", 10);",
            "struct Person { string name, int age; };\nPerson p; p.name=\"Yang\"; p.age=10;",
            "struct Person { string name; int age; };\nPerson p = { \"Yang\", 10 };",
            "struct Person { string name; int age; };\nPerson p = new Person(\"Yang\", 10);"
          ],
          "answer": 2,
          "explanation": "Person 是无构造函数的结构体，用花括号聚合初始化 Person p = {\"Yang\", 10} 正确。A 用圆括号初始化需要构造函数；B 的成员声明用逗号是语法错误；D 把指针赋给结构体变量，类型不匹配。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_07",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下代码，下面描述错误的是（  ）。\nstruct Person {\nstd::string name;\nint age;\nstruct Address { std::string street; std::string city; };\nAddress address;\n};",
          "options": [
            "结构 Person 内嵌套结构 Address",
            "Person 有一个 Address 类型的 address 成员",
            "一个 Person 类型的变量 p 的 address 的初始化可以写成：p.address.street = \"123 Main St\"; p.address.city = \"Anytown\";",
            "结构的嵌套可以减少命名冲突，因此可以不必控制嵌套层次"
          ],
          "answer": 3,
          "explanation": "结构体允许嵌套，也不限制嵌套的层次深浅，但过度嵌套会严重影响代码的可读性和维护性，应该控制嵌套层数。D 说可以不必控制嵌套层次，所以错误。嵌套层次越多，程序越难阅读，应尽量扁平。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_18",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "结构体的成员默认是 public 访问权限。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 中 struct 的成员默认访问权限是 public，可以直接通过对象访问成员；class 才默认是 private。所以结构体成员默认为 public，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_18",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面c++代码在一个结构体中又定义了别的结构体。这种结构嵌套定义的方式语法不正确。\nstruct Library {\nstruct Book {\nstruct Author { string name; int birthYear; };\nstring title; int year; Author author;\n};\nstring name; vector<Book> books;\n};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 完全允许在结构体内部再定义另一个结构体，即结构体嵌套，语法是合法的。题目说这种嵌套'语法不正确'，所以说法错误。C++ 对结构体嵌套没有任何限制，这种写法常用且合法。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_07",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于结构体初始化，以下哪个选项中正确的是（   ）。\nstruct Point {int x,y;};",
          "options": [
            "Point p = (1,2);",
            "Point p = {1,2};",
            "Point p = new {1,2};",
            "Point p = <1,2>;"
          ],
          "answer": 1,
          "explanation": "C++ 用花括号做聚合初始化，Point p = {1,2} 把 1 赋给 x、2 赋给 y。圆括号是逗号表达式，new 需要配指针，尖括号不是初始化的语法。聚合初始化用花括号按成员顺序赋初值，是最规范的写法。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_08",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "运行如下代码会输出（  ）。\nstruct Cat { string name; int age; };\n<pre><code>void birthday(Cat& c) { c.age++; }\nint main() {\nCat kitty{\"Mimi\", 2};\nbirthday(kitty);\ncout << kitty.name << \" \" << kitty.age;\n}</code></pre>",
          "options": [
            "Mimi 2",
            "Mimi 3",
            "kitty 3",
            "kitty 2"
          ],
          "answer": 1,
          "explanation": "Cat kitty{\"Mimi\", 2} 名字是 Mimi、年龄 2。birthday 用引用传参，函数里 c.age++ 直接修改原对象，年龄变成 3，所以输出 Mimi 3。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_18",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "以下C++代码合法。\nstruct Student {\nstring name;\nint age;\nfloat score;\n};\nStudent* students = new Student[20];",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "new Student[20] 在堆上申请 20 个 Student 对象的数组，返回指针赋给 Student* 类型，语法完全合法。通过指针直接改内存中 a 的值，所以输出 10。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_08",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "运行如下代码会输出（  ）。\nstruct Point { int x, y; };\nstruct Rectangle { Point topLeft; Point bottomRight; };\n<pre><code>int main() {\nRectangle rect = {{10, 10}, {20, 20}};\nrect.topLeft.x = 5;\nPoint* p = &rect.bottomRight;\np->y = 5;\ncout << rect.topLeft.x + rect.bottomRight.y;\nreturn 0;\n}</code></pre>",
          "options": [
            "10",
            "30",
            "15",
            "20"
          ],
          "answer": 0,
          "explanation": "rect.topLeft.x 被改成 5；p 指向 bottomRight，p->y = 5 把 bottomRight.y 改成 5。5+5=10。指针 p 指向结构体成员，p->y 就是该成员的别名。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_17",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "一个结构体不能包含另一个结构体。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 允许结构体作为另一个结构体的成员，例如 struct A { struct B b; } 完全合法，这种嵌套没有语法问题。所以说法错误。结构体可以嵌套结构体，这是 C++ 允许的语法。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_06",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于结构体初始化的写法，正确的是（ ）。\nstruct Point { int x, y; };",
          "options": [
            "Point p = (1,2);",
            "Point p = {1,2};",
            "Point p = new Point(1,2);",
            "Point p = <1,2>;"
          ],
          "answer": 1,
          "explanation": "聚合初始化用花括号，Point p = {1,2} 正确。圆括号是逗号表达式，new 返回指针不能赋给 Point，尖括号不是初始化语法。花括号聚合初始化是结构体最标准的初始化方式。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_22",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码没有语法错误。\nstruct GameCharacter {\nstring name;\nint level;\nfloat position_x;\nfloat position_y;\nstruct Equipment {\nstring weapon;\nint attack_bonus;\nint defense_bonus;\n} equipment;\nstruct Skill {\nstring name;\nint damage;\n} skills[8];\nint skill_count;\n};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "结构体内部嵌套定义其他结构体，以及用嵌套结构体类型声明成员（equipment、skills[8]），都是 C++ 合法语法，代码没有语法错误。结构体嵌套定义合法，成员声明也正确，语法无误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_09",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨定义了一个结构体 Hero 来表示游戏角色，下面哪种初始化方式会由于语法错误导致编译失败？（  ）。\nstruct Hero {\nstring name;\nint hp;\n};",
          "options": [
            "Hero h = {\"Arthur\", 100};",
            "Hero h; h.name = \"Arthur\"; h.hp = 100;",
            "Hero h = new Hero{\"Arthur\", 100};",
            "Hero *p = new Hero{\"Arthur\", 100};"
          ],
          "answer": 2,
          "explanation": "new 在堆上分配并返回指针，不能直接赋给结构体对象 Hero，必须用 Hero* 接收（如 D）。A 是聚合初始化，B 是先定义再逐项赋值，都合法。new 返回指针必须用指针接收，直接赋给对象会编译失败。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_10",
          "kp": "kp4_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序输出结果是（  ）。\nstruct Book {\nstring title;\nint pages;\n};\n<pre><code>int main() {\nBook books[2] = {{\"Math\", 120}, {\"Science\", 150}};\ncout << books[1].title;\nreturn 0;\n}</code></pre>",
          "options": [
            "Math",
            "Science",
            "120",
            "150"
          ],
          "answer": 1,
          "explanation": "books[1] 是数组中第 2 个结构体 {\"Science\", 150}，它的 title 是 Science，输出 Science。结构体数组按下标访问，books[1] 的 title 是 Science。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_18",
          "kp": "kp4_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序可以正确计算并输出 3 名学生的平均成绩。\nstruct Student {\nint id;\nint score;\n};\n<pre><code>int main() {\nStudent students[3] = {\n{1, 90},\n{2, 80},\n{3, 100}\n};\nint sum = 0;\nfor (int i = 0; i < 3; i++) {\nsum += students[i].score;\n}\ndouble average = sum / 3.0;\ncout << average << endl;\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "程序把 3 名学生的成绩求和为 270，再除以 3.0（浮点数除法）得到 90，输出平均值。代码正确。总分 270 除以人数 3 得平均分 90，计算正确。求和 270 后做浮点除法除以 3.0，得到平均值 90 并输出。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_06": {
      "title": "二维及多维数组",
      "questions": [
        {
          "id": "l4_202306_04",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中数组的叙述，不正确的是（ ）。",
          "options": [
            "A. 一维数组在内存中一定是连续存放的",
            "B. 二维数组是一维数组的一维数组",
            "C. 二维数组中的每个一维数组在内存中都是连续存放的",
            "D. 二维数组在内存中可以不是连续存放的"
          ],
          "answer": 3,
          "explanation": "无论一维还是多维，C++ 数组在内存中都必须连续存放，二维数组按行优先规则把元素依次排在一段连续空间里，所以 D 的说法错误，选 D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_07",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个二维数组定义为 double array[3][10];，则这个二维数组占用内存的大小为（ ）。",
          "options": [
            "A. 30",
            "B. 60",
            "C. 120",
            "D. 240"
          ],
          "answer": 3,
          "explanation": "double 类型占 8 字节，array 有 3×10=30 个元素，共占 30×8=240 字节，选 D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_09",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个二维数组定义为 int array[5][3];，则 array[1][2] 和 array[2][1] 在内存中的位置相差多少字节？（ ）",
          "options": [
            "A. 2 字节",
            "B. 4 字节",
            "C. 8 字节",
            "D. 无法确定"
          ],
          "answer": 2,
          "explanation": "二维数组按行优先存放。array[1][2] 的下标位置是 1×3+2=5，array[2][1] 是 2×3+1=7，中间差 2 个 int，即 2×4=8 字节，选 C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_14",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下 C++ 语言程序后，输出结果是（ ）。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint array[3][3];\nfor (int i = 0; i < 3; i++)\nfor (int j = 0; j < 3; j++)\narray[i][j] = i * 10 + j;\nint sum;\nfor (int i = 0; i < 3; i++)\nsum += array[i][i];\ncout << sum << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "A. 3",
            "B. 30",
            "C. 33",
            "D. 无法确定"
          ],
          "answer": 3,
          "explanation": "sum 在函数内部定义但没有初始化，初始值是随机的。sum += array[i][i] 是在随机初值上累加，结果无法确定，选 D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_19",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，可以定义四维数组，但在解决实际问题时不可能用到，因为世界是三维的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 允许定义任意多维数组，四维甚至更高维数组在实际问题（如多维数据表、张量计算）中是有意义的，“不可能用到”的说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_22",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "如果希望记录 10 个最长为 99 字节的字符串，可以将字符串数组定义为 char s[100][10];。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "最长 99 字节的字符串需要 100 个字符的空间（还要存结尾的 '\\0'）。要存 10 个这样的字符串，应定义 char s[10][100]，即 10 行每行 100 列，所以题中定义错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202306_27",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 2,
          "question": "图像压缩\n【问题描述】图像是由很多的像素点组成的。如果用 0 表示黑，255 表示白，0 和 255 之间的值代表不同程度的灰色，则可以用一个字节表达一个像素（取值范围为十进制 0-255、十六进制 00-FF）。这样的像素组成的图像，称为 256 级灰阶的灰度图像。\n现在希望将 256 级灰阶的灰度图像压缩为 16 级灰阶，即每个像素的取值范围为十进制 0-15、十六进制 0-F。压缩规则为：统计出每种灰阶的数量，取数量最多的前 16 种灰阶（如某种灰阶的数量与另外一种灰阶的数量相同，则以灰阶值从小到大为序），分别编号 0-F（最多的编号为 0，以此类推）。其他灰阶转换到最近的 16 种灰阶之一，将某个点灰阶数与 16 种灰阶中的一种相减，绝对值最小即为最近，如果绝对值相等，则编号较小的灰阶更近。\n【输入描述】输入第 1 行为一个正整数 N，表示接下来有 N 行数据组成一幅 256 级灰阶的灰度图像。约定 10 ≤ N ≤ 20。第 2 行开始的 N 行，每行为长度相等且为偶数的字符串，每两个字符用十六进制表示一个像素。约定输入的灰度图像至少有 16 种灰阶。约定每行最多 20 个像素。\n【输出描述】第一行输出压缩选定的 16 种灰阶的十六进制编码，共计 32 个字符。第二行开始的 N 行，输出压缩后的图像，每个像素一位十六进制数表示压缩后的灰阶值。\n【数据范围】\n10 ≤ N ≤ 20\n每行像素数 ≤ 20",
          "options": null,
          "answer": null,
          "explanation": "思路：先读入 N 行十六进制串，每两个字符转成一个 0~255 的灰阶值存进数组并计数。再重复 16 次选出现次数最多的灰阶（次数相同按值从小到大）作为标准色，编号 0~F。之后遍历每个像素，找离它距离（差的绝对值）最近的标准灰阶。最后先输出 16 个标准灰阶的十六进制，再逐行输出压缩后的十六进制图像。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nint image[20][20];\nint cpimg[20][20];\nint his[256];\nint color[16];\n// 一位十六进制字符转换为数字\nint trans(char a) {\n    if (a <= '9')\n        return (a - '0');\n    return (a - 'A' + 10);\n}\n// 一位十六进制数字转换为字符\nchar itrans(int n) {\n    if (n >= 10)\n        return (char)(n - 10 + 'A');\n    return (char)(n + '0');\n}\n// 寻找离 c 最近的灰阶\nint compress(int c) {\n    int dis = 256, res = -1;\n    for (int i = 0; i < 16; i++) {\n        int d = c - color[i];\n        if (d < 0)\n            d = -d;\n        if (d < dis) {\n            dis = d;\n            res = i;\n        }\n    }\n    return res;\n}\nint main() {\n    int N = 0, M = 0;\n    cin >> N;\n    // 灰阶计数，初始化为 0\n    for (int i = 0; i < 256; i++)\n        his[i] = 0;\n    // 输入图像，并对灰阶计数\n    for (int i = 0; i < N; i++) {\n        char line[50];\n        cin >> line;\n        M = strlen(line) / 2;\n        for (int j = 0; j < M; j++) {\n            int c = trans(line[j * 2]) * 16 + trans(line[j * 2 + 1]);\n            image[i][j] = c;\n            his[c]++;\n        }\n    }\n    // 选取出现次数最多的 16 个灰阶\n    for (int c = 0; c < 16; c++) {\n        int max = -1, max_id = -1;\n        for (int i = 0; i < 256; i++)\n            if (his[i] > max) {\n                max = his[i];\n                max_id = i;\n            }\n        color[c] = max_id;\n        his[max_id] = -1;\n    }\n    // 将 image 的灰阶压缩为 cpimg\n    for (int i = 0; i < N; i++)\n        for (int j = 0; j < M; j++)\n            cpimg[i][j] = compress(image[i][j]);\n    // 输出选取的 16 个灰阶\n    for (int c = 0; c < 16; c++)\n        cout << itrans(color[c] / 16) << itrans(color[c] % 16);\n    cout << endl;\n    // 输出压缩后的图像\n    for (int i = 0; i < N; i++) {\n        for (int j = 0; j < M; j++)\n            cout << itrans(cpimg[i][j]);\n        cout << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "10\n00FFCFAB00FFAC09071B5CCFAB76\n00AFCBAB11FFAB09981D34CFAF56\n01BFCEAB00FFAC0907F25FCFBA65\n10FBCBAB11FFAB09981DF4CFCA67\n00FFCBFB00FFAC0907A25CCFFC76\n00FFCBAB1CFFCB09FC1AC4CFCF67\n01FCCBAB00FFAC0F071A54CFBA65\n10EFCBAB11FFAB09981B34CFCF67\n01FFCBAB00FFAC0F071054CFAC76\n1000CBAB11FFAB0A981B84CFCF66",
              "expectedOutput": "ABCFFF00CB09AC07101198011B6776FC\n321032657CD10E\n36409205ACC16D\nB41032657FD16D\n8F409205ACF14D\n324F326570D1FE\n3240C245FC411D\nBF4032687CD16D\n8F409205ACC11D\nB240326878D16E\n83409205ACE11D"
            }
          ]
        },
        {
          "id": "l4_202309_05",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中数组的叙述，不正确的是（ ）。",
          "options": [
            "A. 一维数组可以用来表示数列",
            "B. 二维数组可以用来表示矩阵",
            "C. 三维数组可以用来表示空间中物体的形状",
            "D. 世界是三维的，所以定义四维数组没有意义"
          ],
          "answer": 3,
          "explanation": "一维数组表示数列、二维数组表示矩阵、三维数组表示立体数据都很常见；虽然物理世界是三维的，但四维甚至更高维数组在数据表示中仍有意义，D 错误，选 D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_08",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个二维数组定义为 char array[3][10];，则这个二维数组占用内存的大小为（ ）。",
          "options": [
            "A. 10",
            "B. 30",
            "C. 32",
            "D. 48"
          ],
          "answer": 1,
          "explanation": "char 类型占 1 字节，array 共有 3×10=30 个元素，占 30 字节，选 B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_10",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个三维数组定义为 long long array[6][6][6];，则 array[1][2][3] 和 array[3][2][1] 在内存中的位置相差多少字节？( )",
          "options": [
            "A. 70 字节",
            "B. 198 字节",
            "C. 560 字节",
            "D. 无法确定"
          ],
          "answer": 2,
          "explanation": "三维数组按行优先存放。array[1][2][3] 相对开头的元素个数是 1×36+2×6+3=51，array[3][2][1] 是 3×36+2×6+1=121，相差 121-51=70 个元素。long long 占 8 字节，所以相差 70×8=560 字节，选 C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_14",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下 C++ 语言程序后，输出结果是（ ）。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint fib[10];\nfib[0] = 0;\nfib[1] = 1;\nfor (int i = 2; i < 10; i++)\nfib[i] = fib[i - 1] + fib[i - 2];\ncout << fib[10] << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "A. 0",
            "B. 5",
            "C. 55",
            "D. 无法确定"
          ],
          "answer": 3,
          "explanation": "程序求斐波那契数列前 10 项，合法下标是 0~9。但输出 fib[10] 越界访问数组外部的内存，其值不可预测，选 D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_22",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "如果希望记录 10 个最长为 99 字节的字符串，可以将字符串数组定义为 char s[10][100];。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "最长 99 字节的字符串需要 100 个字符空间（多一个存 '\\0'），10 个字符串用 char s[10][100]，10 行每行 100 列正好满足，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_02",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 C++ 代码执行后，输出的是( )。\n```cpp\nint arr[10]={1};\nstring strArr=\"chen a dai\";\ncout<<strArr[arr[1]]<<endl;\n```",
          "options": [
            "A. chen",
            "B. c",
            "C. chen a dai",
            "D. dai"
          ],
          "answer": 1,
          "explanation": "int arr[10]={1} 只把 arr[0] 初始化为 1，其余为 0，所以 arr[1]=0。strArr[0] 是字符串第一个字符 'c'，输出 c，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_04",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 C++ 代码执行后的结果是（ ）。\n```cpp\nint arr[3][3]={{1,2,3},{4,5,6},{7,8,9}};\nfor(int i=0;i<3;i++)\n{\nfor(int j=2;j>=0;j--)\n{\ncout<<arr[i][j]<<\" \";\n}\ncout<<endl;\n}\n```",
          "options": [
            "A. 1 2 3\\n4 5 6\\n7 8 9",
            "B. 1 2 3 4 5 6 7 8 9",
            "C. 3 2 1\\n6 5 4\\n9 8 7",
            "D. 9 8 7 6 5 4 3 2 1"
          ],
          "answer": 2,
          "explanation": "外层 i 逐行输出，内层 j 从 2 到 0 逆序输出每一行的元素，所以每一行都被倒过来：第一行 3 2 1，第二行 6 5 4，第三行 9 8 7，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_09",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在如下的 C++ 代码中实现了对字符串中出现的 26 个字母的个数统计，横线处应填入是（ ）。\n```cpp\nstring str=\"HELLO CHEN A DAI\";\nint strlen=str.length();\nchar alpha[26]={65};\nint cnt[26]={0};\nfor(int i=1;i<26;i++)\n{\n________________;\n}\n```",
          "options": [
            "A. alpha[i]=alpha[i-1]+1;",
            "B. alpha[i]=alpha[i]+1;",
            "C. alpha[i+1]=alpha[i]+1;",
            "D. alpha[i-1]=alpha[i]+1;"
          ],
          "answer": 0,
          "explanation": "alpha[26]={65} 使 alpha[0]='A'(65)，其余为 0。要让 alpha 依次变为 A~Z，需要每个 alpha[i] 等于前一个加 1，即 alpha[i]=alpha[i-1]+1，选 A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_11",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列 C++ 代码输入 1,2,3,4 ，执行后，将输出的是（ ）。\n```cpp\nstring str=\"\";\ncin>>str;\nint strlen=str.length();\nfor(int i=0;i<strlen;i++)\n{\nif(str[i]<='9'&&str[i]>='0')\n{\ncout<<str[i];\n}\nelse\n{\ncout<<\"#\";\n}\n}\n```",
          "options": [
            "A. 1#4#",
            "B. 1#3#",
            "C. 1#2#3#4#",
            "D. 1#2#3#4"
          ],
          "answer": 3,
          "explanation": "字符串 \"1,2,3,4\" 中数字字符原样输出，逗号 ',' 输出 '#',所以依次输出 1 # 2 # 3 # 4，即 1#2#3#4，选 D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_02",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后，输出的是（  ）。\n<pre><code>int main() {\nint x[]={2, 0, 2, 4};\nchar geSP[]=\"Grade Examination of SP\";\ncout << geSP[sizeof(x)] << endl;\n}</code></pre>",
          "options": [
            "G",
            "e",
            "n",
            "P"
          ],
          "answer": 2,
          "explanation": "sizeof(x) 等于 4 个 int 占用的字节数 4×4=16，geSP[16] 就是字符串\"Grade Examination of SP\"的第 17 个字符 n（下标从 0 开始）。所以输出 n。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_04",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对二维数组 int arr[3][16]; ，则 arr[1] 占用内存的大小为（  ）字节。",
          "options": [
            "4",
            "16",
            "48",
            "64"
          ],
          "answer": 3,
          "explanation": "arr[1] 是第二行，也就是一个有 16 个 int 元素的一维数组。每个 int 占 4 字节，16×4=64，所以 arr[1] 一共占 64 字节内存。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_05",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对二维数组 int arr[3][16]; ，若 arr 的地址是 0x28cbc0 ，则 arr[1] 的值是（  ）。",
          "options": [
            "0x28cbc4",
            "0x28cbd0",
            "0x28cc00",
            "不确定"
          ],
          "answer": 2,
          "explanation": "arr[1] 是第二行首地址，等于首地址加上一行的大小。一行有 16 个 int 共 64 字节（0x40），0x28cbc0+0x40=0x28cc00，所以选 C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_20",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "定义数组 int a[2024][3][16]={2,0,2,4,3,1,6} ，则 cout << a[2023][2][15] 的结果不确定。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组初始化只给出一部分元素时，其余元素会自动补 0。a[2023][2][15] 没有显式赋值，值为确定的 0，而不是不确定，所以说法错误。C++ 规定部分初始化时未列出的元素一律补零，所以结果确定。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_05",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "如果下列程序输出的地址是 0x6ffe00 ，则 cout<<a+1<<endl; 输出的是（  ）。\n<pre><code>int main() {\nint a[2][3]={0};\ncout<<a<<endl;\n}</code></pre>",
          "options": [
            "0x6ffe04",
            "0x6ffe0C",
            "0x6ffe08",
            "0x6ffe00"
          ],
          "answer": 1,
          "explanation": "a 输出首地址 0x6ffe00。a+1 指向第二行，一行有 3 个 int 共 12 字节（0xC），0x6ffe00+0xC=0x6ffe0C，所以选 B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_19",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序两个输出结果是一样的。\n<pre><code>int main() {\nint a[2][3]={0};\ncout<<a<<endl;\ncout<<&a[0][0]<<endl;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a 作为数组名会退化成指向首行的指针，其值与首行首元素的地址相同；&a[0][0] 也是首元素的地址，两者数值一样，输出的地址相同，所以说法正确。数组名与首元素地址数值相等，是 C++ 的基本常识。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_23",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在下面这个程序里，a[i][j] 和一个普通的整型变量一样使用。\nint a[10][10]={0};\nfor(int i=0;i<10;i++)\nfor(int j=0;j<10;j++)\nif(i==j) a[i][j]=1;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二维数组元素 a[i][j] 的类型是 int，可以像普通整型变量一样读取、赋值、参与加减乘除等运算，编译器把它当作普通 int 处理，所以在程序里它就是普通的整型变量，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "黑白方块\n小杨有一个 n 行 m 列的网格图，其中每个格子要么是白色，要么是黑色。对于网格图中的一个子矩形，小杨认为它是平衡的当且仅当其中黑色格子与白色格子数量相同。小杨想知道最大的平衡子矩形包含了多少个格子。\n输入格式：第一行包含两个正整数 n、m。之后 n 行，每行一个长度为 m 的 0/1 串，代表网格图第 i 行格子的颜色，若为 0 则对应格子为白色，否则为黑色。\n输出格式：输出一个整数，代表最大的平衡子矩形包含的格子数量，如果不存在则输出 0。\n【数据范围】\n1 ≤ n ≤ 50\n1 ≤ m ≤ 50\n样例1：输入 4 5 / 00000 / 01111 / 00011 / 00011，输出 16。",
          "options": [],
          "answer": null,
          "explanation": "思路：枚举所有子矩形的左上角 (i,j) 和右下角 (ii,jj)，统计其中白色和黑色格子的数量，若相等则用面积 (ii-i+1)*(jj-j+1) 更新答案。n、m 较小，四重循环枚举即可。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 55;\nint w[N][N];\nint n,m;\nbool check(int xa,int ya,int xb,int yb){\n    int a[2]={0,0};\n    for(int i = xa;i<=xb;i++){\n        for(int j=ya;j<=yb;j++){\n            a[w[i][j]]++;\n        }\n    }\n    return a[0]==a[1];\n}\nint main(){\n    cin>>n>>m;\n    for(int i=1;i<=n;i++){\n        string s;\n        cin>>s;\n        for(int j=1;j<=m;j++){\n            w[i][j]=s[j-1]-'0';\n        }\n    }\n    int ans = 0;\n    for(int i=1;i<=n;i++){\n        for(int j=1;j<=m;j++){\n            for(int ii=i;ii<=n;ii++){\n                for(int jj=j;jj<=m;jj++){\n                    if(check(i,j,ii,jj)){\n                        ans = max(ans,(ii-i+1)*(jj-j+1));\n                    }\n                }\n            }\n        }\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 5\n00000\n01111\n00011\n00011",
              "expectedOutput": "16"
            }
          ]
        },
        {
          "id": "l4_202409_07",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，（  ）正确声明了一个 3 行 4 列的二维数组。",
          "options": [
            "int arr[3, 4];",
            "int arr[3][4];",
            "int arr[4][3];",
            "int arr(3, 4);"
          ],
          "answer": 1,
          "explanation": "二维数组的声明格式是 类型 数组名[行数][列数];，3 行 4 列应写 int arr[3][4]。A 用逗号分隔维数是错误语法，C 是 4 行 3 列，D 是函数声明。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_08",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个二维数组定义为 int arr[3][4]; （假设一个 int 变量占 4 个字节），则 int arr[0] 占用（  ）个字节的内存。",
          "options": [
            "3",
            "4",
            "12",
            "16"
          ],
          "answer": 3,
          "explanation": "arr[0] 是二维数组的第一行，也就是一个有 4 个 int 元素的一维数组，每个 int 占 4 字节，4×4=16 字节，所以 arr[0] 一共占 16 字节内存。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_19",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "二维数组的行的大小必须在定义时确定，列的大小可以动态变化。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 的数组维数在定义时就必须全部确定（除非用 vector 或 new 动态分配），行和列都不能在运行中随意变化。说列的大小可以动态变化是错误的。只有动态数组（vector 或 new）才能在运行期决定大小。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "黑白方块\n小杨有一个 n 行 m 列的网格图，其中每个格子要么是白色，要么是黑色。小杨想知道网格图中是否存在一个满足如下条件的子矩形：子矩形由 4 行 4 列组成；子矩形的第 1 行和第 4 行只包含白色格子；对于子矩形的第 2 行和第 3 行，只有第 2 个和第 3 个格子是白色的，其余格子都是黑色的。请你编写程序帮助小杨判断。\n输入格式：第一行包含一个正整数 t，代表测试用例组数。接下来是 t 组测试用例。每组第一行包含两个正整数 n、m；之后 n 行，每行一个长度为 m 的 0/1 串，代表网格图第 i 行格子的颜色，若为 1 则对应格子为白色，否则为黑色。\n输出格式：对于每组测试用例，如果存在，输出 Yes，否则输出 No。\n【数据范围】\n1 ≤ n ≤ 100\n1 ≤ m ≤ 100\n样例1：输入 3 / 1 4 / 0110 / 5 5 / 00000 / 01100 / 01100 / 00001 / 01100 / 5 5 / 00000 / 01100 / 01110 / 00001 / 01100，输出 No / Yes / No。",
          "options": [],
          "answer": null,
          "explanation": "思路：目标 4×4 子矩形的模板是 0000/0110/0110/0000。对每组测试数据，用四重循环枚举所有 4×4 子矩形的左上角，逐一比对四个角行与中间两行的黑白模式，完全匹配就输出 Yes。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 110;\nint w[N][N];\nint n,m;\nint match[4][4];\nbool check(int xa,int ya){\n    for(int i=0;i<4;i++){\n        for(int j=0;j<4;j++){\n            if(w[xa+i][ya+j]!=match[i][j]){\n                return false;\n            }\n        }\n    }\n    return true;\n}\nint main(){\n    int t;\n    cin>>t;\n    for(int i=1;i<3;i++)match[1][i]=match[2][i]=1;\n    while(t--){\n        cin>>n>>m;\n        for(int i=1;i<=n;i++){\n            string s;\n            cin>>s;\n            for(int j=1;j<=m;j++){\n                w[i][j]=s[j-1]-'0';\n            }\n        }\n        int fl = 0;\n        for(int i=1;i<=n-3;i++){\n            for(int j=1;j<=m-3;j++){\n                if(check(i,j)){\n                    fl=1;\n                }\n            }\n        }\n        if(fl)cout<<\"Yes\\n\";\n        else cout<<\"No\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 4\n0110\n5 5\n00000\n01100\n01100\n00001\n01100\n5 5\n00000\n01100\n01110\n00001\n01100",
              "expectedOutput": "No\nYes\nNo"
            }
          ]
        },
        {
          "id": "l4_202412_07",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "假定整型是 32 位，对一个 2 行 3 列的二维整数数组 array，假设数组第一个元素在内存中的地址为 0x7ffee4065820，则第 2 行第 2 个元素的地址 &array[1][1] 为（  ）。",
          "options": [
            "0x7ffee4065824",
            "0x7ffee4065828",
            "0x7ffee406582c",
            "0x7ffee4065830"
          ],
          "answer": 3,
          "explanation": "array[1][1] 是第 2 行第 2 个元素，下标从 0 开始，前面有 1×3+1=4 个 int，偏移 4×4=16 字节（0x10），0x7ffee4065820+0x10=0x7ffee4065830。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_08",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面（  ）正确定义二维数组。",
          "options": [
            "int a[3][];",
            "int a[][];",
            "int a[][4];",
            "int a[][2] = {{1,2},{1,2},{3,4}};"
          ],
          "answer": 3,
          "explanation": "二维数组声明时列数必须给出。D 给出列数 2 并用初始化列表确定行数，合法。A、B 列数缺失非法，C 没有初始化器、第一维缺失会形成不完整类型，也不能正确定义。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_19",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "int arr[3][] 是一个正确的二维数组的声明。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二维数组的声明必须给出列数，int arr[3][] 缺少列数，编译器无法确定每一行有多少个元素，是非法的声明。即使行数已经确定，列数也不能省略，所以说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_08",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "假设 int arr[2][3] = {{1,2,3},{4,5,6}}; ，则 arr[1][2] 的值是（  ）。",
          "options": [
            "2",
            "3",
            "5",
            "6"
          ],
          "answer": 3,
          "explanation": "arr[1] 是二维数组的第二行 {4,5,6}，arr[1][2] 是第二行第三个元素，值为 6。二维数组下标从 0 开始，第一维表示行号、第二维表示列号，arr[1] 对应第二行，再取下标 2 就是这一行第 3 个数 6。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_09",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面（  ）正确定义了二维数组。",
          "options": [
            "int arr[3,4];",
            "int arr[3][4];",
            "int arr(3,4);",
            "int a[3-4];"
          ],
          "answer": 1,
          "explanation": "二维数组用方括号分别指定行列，int arr[3][4] 是 3 行 4 列数组。A 的逗号是错误语法，C 变成函数声明，D 的 3-4 是负数下标，都不合法。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "荒地开垦\n小杨有一大片荒地，可以表示为一个 n 行 m 列的网格图。小杨想要开垦这块荒地，但荒地中一些位置存在杂物，对于一块不存在杂物的荒地，该荒地可以开垦当且仅当它上下左右四个方向相邻的格子均不存在杂物。小杨可以选择至多一个位置，清除该位置的杂物，移除杂物后该位置变为荒地。小杨想知道在清除至多一个位置的杂物的情况下，最多能够开垦多少块荒地。\n输入格式：第一行包含两个正整数 n、m。之后 n 行，每行包含一个长度为 m 且仅包含字符 . 和 # 的字符串，如果为 . 代表该位置为荒地，如果为 # 代表该位置为杂物。\n输出格式：输出一个整数，代表在清除至多一个位置的杂物的情况下，最多能够开垦的荒地块数。\n【数据范围】\n1 ≤ n ≤ 1000\n1 ≤ m ≤ 1000\n样例1：输入 3 5 / ..... / .#..# / ....., 输出 11。",
          "options": [],
          "answer": null,
          "explanation": "思路：先统计所有四个邻居都不是杂物的荒地数 ans。再对每个杂物位置，统计清除它后能新开垦的荒地数：它本身（若四邻无杂物）以及那些以它为唯一杂物邻居的荒地。取清除某一杂物能带来的最大增益，答案就是 ans 加最大增益。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1005;\nchar mat[N][N];\nint a[N][N];\nconst int d[4][2] = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};\nint main() {\n    int n, m, ans = 0;\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i ++)\n        scanf(\"%s\", mat[i] + 1);\n    for (int i = 1; i <= n; i ++)\n        for (int j = 1; j <= m; j ++) {\n            int num = 0, p = -1;\n            for (int k = 0; k < 4; k ++)\n                if (mat[i + d[k][0]][j + d[k][1]] == '#')\n                    num ++, p = k;\n            if (mat[i][j] == '.' && num == 1)\n                a[i + d[p][0]][j + d[p][1]] ++;\n            else if (mat[i][j] == '.' && num == 0)\n                ans ++;\n            else if (mat[i][j] == '#' && num == 0)\n                a[i][j] ++;\n        }\n    int mx = 0;\n    for (int i = 1; i <= n; i ++)\n        for (int j = 0; j <= m; j ++)\n            mx = max(mx, a[i][j]);\n    cout << ans + mx << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5\n.....\n.#..#\n.....",
              "expectedOutput": "11"
            }
          ]
        },
        {
          "id": "l4_202503_27",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "二阶矩阵\n小 A 有一个 n 行 m 列的矩阵 A。小 A 认为一个 2×2 的矩阵 B 是好的，当且仅当 B[1][1]*B[2][2] == B[2][1]*B[1][2]（即对角线乘积相等）。小 A 想知道 A 中有多少个好的子矩阵。\n输入格式：第一行，两个正整数 n、m。接下来 n 行，每行 m 个整数。\n输出格式：一行，一个整数，表示 A 中好的子矩阵的数量。\n【数据范围】\n1 ≤ n ≤ 500\n1 ≤ m ≤ 500\n样例：输入 3 4 / 1 2 1 0 / 2 4 2 1 / 0 3 3 0，输出 2。",
          "options": [],
          "answer": null,
          "explanation": "思路：枚举所有 2×2 子矩阵的左上角 (i,j)，检查四个元素是否满足对角线乘积相等 a[i][j]*a[i+1][j+1]==a[i+1][j]*a[i][j+1]，满足就计数。n、m 不超过 500，双重枚举即可。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 505;\nint n, m;\nint a[N][N];\nint ans;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++) {\n            scanf(\"%d\", &a[i][j]);\n        }\n    for (int i = 1; i < n; i++)\n        for (int j = 1; j < m; j++)\n            if (a[i][j] * a[i + 1][j + 1] == a[i + 1][j] * a[i][j + 1])\n                ans++;\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 4\n1 2 1 0\n2 4 2 1\n0 3 3 0",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l4_202506_03",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，int arr[3][4] 和 int* arr = new int[12] 均可模拟一个行列的二维数组。关于这两种方式，下面说法错误的是（   ）。",
          "options": [
            "int arr[3][4] 在栈上分配空间，适合数组较小的情况；",
            "int* arr = new int[12] 在堆上分配空间，数组较大时也适用；",
            "这两种方式申请的内存空间都是连续的。",
            "这两种方式申请的内存都能自动释放。"
          ],
          "answer": 3,
          "explanation": "栈上数组自动释放，但 new 出来的堆内存必须用 delete 手动释放，不会自动释放。A、B、C 说法都正确，只有 D 错误，所以选 D。这道题考的是堆内存与栈内存的释放区别，记住谁 new 谁就要 delete。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_20",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下面这段代码不合法，因为每一行都必须显式初始化个元素。\nint arr[2][3] = {{1, 2}, {3}};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 允许部分初始化，没有显式给出的元素会自动补 0。arr[2][3] 这样初始化后两行分别为 {1,2,0} 和 {3,0,0}，代码完全合法。说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：画布裁剪\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小 A 在高 H 宽 W 的矩形画布上绘制了一幅画，画布可以视为 n 行 m 列的字符矩阵，字符均为 ASCII 可见字符。小 A 只保留画布中由第 x1 行到第 x2 行、第 y1 列到第 y2 列构成的子矩阵。请帮助他完成画布裁剪。\n输入格式：第一行两个正整数 n、m，表示画布的行数与列数。第二行四个正整数 x1、x2、y1、y2，表示保留的行列边界。接下来 n 行，每行一个长度为 m 的字符串，表示画布内容。\n输出格式：输出共 x2-x1+1 行，每行一个长度为 y2-y1+1 的字符串，表示裁剪后的画布。\n【数据范围】\n1 ≤ n ≤ 100\n1 ≤ m ≤ 100",
          "options": [],
          "answer": null,
          "explanation": "思路：先读入 n、m 和裁剪边界，再把 n 行画布存进字符数组。最后按行输出第 x1 到 x2 行、第 y1 到 y2 列的子串即可，可用 printf(\"%s\", s[i]+y1) 的方式输出每行的裁剪部分。注意行列都从 1 开始编号，数组下标要对应好。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nconst int N = 105;\nint n, m;\nchar s[N][N];\nint x1, x2, y1, y2;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    scanf(\"%d%d%d%d\", &x1, &x2, &y1, &y2);\n    for (int i = 1; i <= n; i++)\n        scanf(\"%s\", s[i] + 1);\n    for (int i = x1; i <= x2; i++) {\n        s[i][y2 + 1] = 0;\n        printf(\"%s\\n\", s[i] + y1);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5\n2 2 2 4\n.....\n.>_<.\n.....\n",
              "expectedOutput": ">_<"
            },
            {
              "input": "5 5\n1 2 3 4\nAbCdE\nfGhIk\nLmNoP\nqRsTu\nVwXyZ\n",
              "expectedOutput": "Cd\nhI"
            }
          ]
        },
        {
          "id": "l4_202509_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：排兵布阵\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：地图可以视为 n 行 m 列的网格，适合排兵的网格以 1 标注，不适合排兵的网格以 0 标注。现在需要在图上选择一个矩形区域排兵，这个矩形区域内不能包含不适合排兵的网格。请问可选择的矩形区域最多能包含多少网格？\n输入格式：第一行两个正整数 n、m，分别表示网格的行数与列数。接下来 n 行，每行 m 个整数，表示各网格是否适合排兵。\n输出格式：一行，一个整数，表示适合排兵的矩形区域包含的最大网格数。\n【数据范围】\n1 ≤ n ≤ 10\n1 ≤ m ≤ 10",
          "options": [],
          "answer": null,
          "explanation": "思路：n、m 很小，可以枚举矩形的上下边界 u、d 和左边界 l，然后向右扩展右边界 r，用 chk 标记当前列是否全为 1。若某列出现 0 就停止扩展，否则更新面积 (r-l+1)×(d-u+1) 的最大值。时间复杂度 O(n²·m²)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int N = 15;\nint n, m;\nint a[N][N];\nint ans;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++) scanf(\"%d\", &a[i][j]);\n    for (int u = 1; u <= n; u++)\n        for (int l = 1; l <= m; l++)\n            for (int d = u; d <= n; d++) {\n                int chk = 1;\n                for (int r = l; r <= m; r++) {\n                    for (int x = u; x <= d; x++) chk &= a[x][r];\n                    if (!chk) break;\n                    ans = max(ans, (r - l + 1) * (d - u + 1));\n                }\n            }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 3\n0 1 1\n1 0 1\n0 1 1\n1 1 1\n",
              "expectedOutput": "4"
            },
            {
              "input": "3 5\n1 0 1 0 1\n0 1 0 1 0\n0 1 1 1 0\n",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l4_202512_03",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨用一个二维数组表示棋盘，其中 1 表示有棋子，0 表示没有棋子。他想知道第 2 行 第 3 列有没有棋子，可采用的代码是：（  ）。\nint a[3][4] = {\n{1, 0, 1, 0},\n{0, 1, 0, 1},\n{1, 1, 0, 0}\n};",
          "options": [
            "cout << a[1, 2] << endl;",
            "cout << a[1][2] << endl;",
            "cout << a(1, 2) << endl;",
            "cout << a{1}{2} << endl;"
          ],
          "answer": 1,
          "explanation": "第 2 行第 3 列对应下标 a[1][2]（从 0 开始）。二维数组访问必须用两个方括号 a[i][j]，a[1,2] 里的逗号是逗号表达式，a(1,2) 是函数调用语法，都不对。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_05",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行完下面的代码后，sum 的值是（  ）。\nint arr[2][3][2] = {\n{{1,2}, {3,4}, {5,6}},\n{{7,8}, {9,10}, {11,12}}\n};\nint sum = 0;\nfor(int i = 0; i < 2; i++)\nfor(int j = 0; j < 3; j++)\nfor(int k = 0; k < 2; k++)\nif((i+j+k) % 2 == 0)\nsum += arr[i][j][k];",
          "options": [
            "36",
            "39",
            "78",
            "30"
          ],
          "answer": 1,
          "explanation": "逐一检查满足 (i+j+k) 为偶数的元素并累加：1、4、5、8、9、12，和为 1+4+5+8+9+12=39。其余元素条件不满足不加。按条件筛选元素再求和，注意坐标奇偶性的判断即可。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_18",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，定义如下二维数组：int a[3][4]; ，数组 a 在内存中是按行优先连续存放的，即 a[0][0] 、a[0][1] 、a[0][2] 、a[0][3] 在内存中是连续的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 的二维数组按行优先存储，同一行的相邻元素在内存中地址连续，先存满一行再存下一行。所以说法正确。按行优先存储是二维数组在内存中的标准布局方式。记住'按行优先、同一行连续'这条规律，二维数组地址题都能做对。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：建造\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小 A 有一张 M 行 N 列的地形图，第 i 行第 j 列的数字 a[i][j] 代表坐标 (i,j) 的海拔高度。停机坪为一个 3×3 的区域且内部所有 9 个点的最大高度和最小高度之差不超过 H。请你计算出，在所有适合建造停机坪的区域中，区域内部 9 个点海拔之和最大是多少。\n输入格式：第一行三个正整数 M、N、H。之后 M 行，每行 N 个整数，代表坐标高度。数据保证总存在一个适合建造停机坪的区域。\n输出格式：输出一行，代表最大的海拔之和。\n【数据范围】\n1 ≤ M ≤ 1000\n1 ≤ N ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：枚举 3×3 子区域的左上角，计算该 3×3 区域的和、最大值、最小值。若最大值减最小值不超过 H，说明适合建造，用其和更新答案最大值。遍历所有左上角位置即可，复杂度 O(M·N)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint a[1010][1010];\nint main(){\n    int M, N, H;\n    cin >> M >> N >> H;\n    for (int i = 1; i <= M; ++i) {\n        for (int j = 1; j <= N; ++j) {\n            cin >> a[i][j];\n        }\n    }\n    int max_sum = 0;\n    for (int i = 1; i <= M - 2; ++i) {\n        for (int j = 1; j <= N - 2; ++j) {\n            int local_max = a[i][j], local_min = a[i][j], local_sum = 0;\n            for (int x = 0; x < 3; ++x) {\n                for (int y = 0; y < 3; ++y) {\n                    int height = a[i + x][j + y];\n                    local_sum += height;\n                    if (height > local_max) local_max = height;\n                    if (height < local_min) local_min = height;\n                }\n            }\n            if (local_max - local_min <= H) {\n                if (local_sum > max_sum) {\n                    max_sum = local_sum;\n                }\n            }\n        }\n    }\n    cout << max_sum;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 5 3\n5 5 5 5 5\n5 1 5 1 5\n5 5 5 5 5\n5 2 5 2 5\n3 5 5 5 2\n",
              "expectedOutput": "40"
            }
          ]
        },
        {
          "id": "l4_202603_18",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面代码，输出结果为 5 。\n<pre><code>int main() {\nint a[2][3];\ncout << &a[1][2] - &a[0][1] << endl;\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "指针相减得到元素个数。二维数组按行优先，&a[1][2] 与 &a[0][1] 之间的元素数为 3+2-1=4，输出 4 而不是 5。&a[1][2] 与 &a[0][1] 相隔 4 个元素，输出 4。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：山之谷\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：现有一片山地，可以视为一个 n 行 m 列的网格图，第 i 行 j 列的海拔为 h[i][j]。如果一个单元格的海拔不高于其所有相邻单元格（相邻包括上、下、左、右、左上、右上、左下、右下，最多 8 个方向）的海拔，则称该单元格为山谷。请数一数该片山地中有多少山谷。\n输入格式：第一行包含 2 个整数 n、m，表示山地的大小。之后 n 行，每行包含 m 个整数，表示海拔。\n输出格式：输出 1 行，包含 1 个整数，表示山谷的数量。\n【数据范围】\n1 ≤ n ≤ 100\n1 ≤ m ≤ 100",
          "options": [],
          "answer": null,
          "explanation": "思路：枚举每个单元格，检查它周围 8 个方向的邻居，若存在比它更矮的格子，则该格子不是山谷。为避免边界判断，可把地图四周填上很大的数（如 1e9）。统计所有满足条件的格子数即可。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, m;\n    int h[105][105];\n    cin >> n >> m;\n    for(int i = 1; i <= n; i++)\n        for(int j = 1; j <= m; j++)\n            cin >> h[i][j];\n    for(int i = 0; i <= max(n, m) + 1; i++)\n        h[i][0] = h[0][i] = h[i][m + 1] = h[n + 1][i] = 1e9;\n    int ans = 0;\n    for(int i = 1; i <= n; i++)\n        for(int j = 1; j <= m; j++) {\n            bool ok = true;\n            for(int i2 = i - 1; i2 <= i + 1; i2++)\n                for(int j2 = j - 1; j2 <= j + 1; j2++)\n                    if(h[i][j] > h[i2][j2]) {\n                        ok = false;\n                        break;\n                    }\n            ans += ok;\n        }\n    cout << ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5\n7 6 6 7 9\n6 5 6 7 6\n6 5 7 8 9\n",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l4_202606_06",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨正在开发一款名为“星际网格”的游戏，他用二维数组 int map[5][4]; 来表示地图。已知 int 占 4 字节，如果 map 的内存地址是 0x2000 ，则表达式 &map + 1 的地址值是（  ）。",
          "options": [
            "0x204c",
            "0x205c",
            "0x2050",
            "0x2058"
          ],
          "answer": 2,
          "explanation": "&map 是 int(*)[5][4] 类型，指向整个 20 个 int 的数组，&map+1 跳到整个数组之后。20×4=80 字节，0x2000+80=0x2050。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_08",
          "kp": "kp4_06",
          "type": "choice",
          "difficulty": 1,
          "question": "某班 3 个小组、每组 4 名同学的分数存入下面的二维数组 score ，则 score[1][2] 的值是（  ）。\nint score[3][4] = {\n{80, 81, 82, 83},\n{90, 91, 92, 93},\n{70, 71, 72, 73}\n};",
          "options": [
            "81",
            "90",
            "92",
            "72"
          ],
          "answer": 2,
          "explanation": "score[1][2] 是第 2 行（下标 1）第 3 列（下标 2）的元素，对应 {90,91,92,93} 中的第 3 个数 92。下标从 0 开始，score[1][2] 对应第二行第三个元素。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_21",
          "kp": "kp4_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中定义二维数组并初始化时，可以省略第一维，但不能省略第二维。因此 int a[][2] = {{1, 2}, {3, 4}}; 是合法的，而 int a[][] = {{1, 2}, {3, 4}}; 是不合法的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "定义二维数组时第二维（列数）必须明确，第一维可以由初始化列表自动推导。int a[][2] 合法，int a[][] 两维都省略非法。说法正确。第一维可由初始化推导，第二维必须写明，判断正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_26",
          "kp": "kp4_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：扫雷\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小杨同学正在游玩经典游戏「扫雷」，他想自己生成一个「扫雷」的地图。地图大小为 n 行 m 列，区块行号为 1 到 n，列号为 1 到 m。其中一些区块为雷区，其它区块不为雷区。小杨指定了 q 个区块为雷区。请帮忙计算非雷区的区块，每个区块与多少个雷区相邻（两个区块相邻当且仅当至少有一个公共顶点，即周围最多 8 个区块）。\n输入格式：输入包含 q+1 行。第一行三个正整数 n、m 和 q。接下来的 q 行，每行有 2 个整数，分别表示第 i 个雷区的行号和列号。保证输入的雷区不重复。\n输出格式：输出 n 行，每行 m 个字符（使用空格分割）。雷区输出 *，非雷区输出其相邻雷区数量（0 到 8 之间的数字）。\n【数据范围】\n1 ≤ n ≤ 500\n1 ≤ m ≤ 500",
          "options": [],
          "answer": null,
          "explanation": "思路：用二维数组记录每个格子是否是雷（-1 表示雷）。对每个非雷格子，枚举周围 8 个方向统计雷的数量并输出；雷格子输出 *。注意行号列号从 1 开始，下标转换和越界判断要处理好。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint mp[510][510];\nint main() {\n    int n, m, q;\n    cin >> n >> m >> q;\n    for (int i = 0; i < q; ++i) {\n        int x, y;\n        cin >> x >> y;\n        mp[x-1][y-1] = -1;\n    }\n    for (int i = 0; i < n; ++i) {\n        for (int j = 0; j < m; ++j) {\n            if (mp[i][j] == -1) {\n                cout << '*' << ' ';\n                continue;\n            }\n            for (int di = -1; di <= 1; ++di) {\n                for (int dj = -1; dj <= 1; ++dj) {\n                    if (i + di < 0 || i + di >= n || j + dj < 0 || j + dj >= m)\n                        continue;\n                    if (mp[i+di][j+dj] == -1)\n                        mp[i][j] += 1;\n                }\n            }\n            cout << mp[i][j] << ' ';\n        }\n        cout << '\\n';\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 4 4\n1 1\n1 3\n2 4\n3 2\n",
              "expectedOutput": "* 2 * 2\n2 3 3 *\n1 * 2 1"
            }
          ]
        }
      ]
    },
    "kp4_07": {
      "title": "递推",
      "questions": [
        {
          "id": "l4_202306_17",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "数列 1, 1, 2, 3, 5, 8 ... 是以意大利数学家列昂纳多·斐波那契命名的数列，从第三个数开始，每个数是前面两项之和。如果计算该数列的第 n 项（其中 n>3）fib(n)，我们采用如下方法：①令 fib(1)=fib(2)=1 ②用循环 for i=3 to n 分别计算 f(i) ③输出 fib(n)。这体现了递推的编程思想。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "由已知的初始项开始，按公式从前往后逐项推出后面的项，正是递推（递推的英文是 recurrence）的编程思想，而不是递归，所以说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_07",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行以后输出的是（  ）。\nint fib(int n) {\nint i, f[n]={0, 1};\nfor(int i=2; i<=n; i++)\nf[i]=f[i-1]+f[i-2];\nreturn f[n];\n}",
          "options": [
            "0",
            "1",
            "6",
            "不确定"
          ],
          "answer": 3,
          "explanation": "f[n] 是长度为 n 的数组，合法下标是 0 到 n-1。循环最后一次访问并返回 f[n]，下标已经越界，属于未定义行为，结果无法确定，所以选 D。越界访问 f[n] 读取的是数组之外的内存，其内容不可预期。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_08",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++函数中采用的算法是（  ）。\nint fib(int n) {\nint i, f[n]={0, 1};\nfor(int i=2; i<=n; i++)\nf[i]=f[i-1]+f[i-2];\nreturn f[n];\n}",
          "options": [
            "递推",
            "递归",
            "迭代",
            "循环"
          ],
          "answer": 0,
          "explanation": "函数从 f[0]、f[1] 两个初始值出发，按 f[i]=f[i-1]+f[i-2] 的公式用循环一步步推出后面的项，是典型的正向递推（也是迭代）。它不是自己调用自己，所以不是递归。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_09",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于递推的说法不正确的是（  ）。",
          "options": [
            "递推表现为自己调用自己",
            "递推是从简单问题出发，一步步向前发展，最终求得问题，是正向的",
            "递推中，问题的 n 要求是在计算中确定，不要求计算前就知道 n",
            "斐波那契数列可以用递推实现求解"
          ],
          "answer": 0,
          "explanation": "自己调用自己描述的是递归，不是递推。递推是从已知初始值出发，按递推公式逐步推出结果，是正向迭代；斐波那契数列也常用递推实现，A 说法错误。判断递推还是递归，关键看算法是正向循环还是函数自调用。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_14",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "10条直线，最多可以把平面分为多少个区域（  ）。",
          "options": [
            "55",
            "56",
            "54",
            "58"
          ],
          "answer": 1,
          "explanation": "第 n 条直线最多与前面 n-1 条直线相交出 n 个交点，把平面多分出 n 个区域，所以最多区域数=1+1+2+…+n=1+n(n+1)/2。n=10 时为 1+55=56。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_20",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "函数不可以调用自己。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数完全可以调用自己，这就是递归，是 C++ 的合法特性，比如递归求阶乘、求斐波那契数列都依靠函数在内部再次调用自己来实现。所以\"函数不可以调用自己\"的说法是错误的。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_24",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "一个一维数组，至少含有一个自然数 N，是一个合法的数列。可以在一维数组末尾加入一个自然数 M，M 不能超过一维数组末尾元素的一半，形成一个新的合法的一维数组，如果 N=6，那么可以有 6 个不同的合法数组。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "从 [6] 出发，末尾 6 的一半是 3，所以可加 1、2、3。枚举全部合法数组：6；6,1；6,2；6,2,1；6,3；6,3,1，共 6 个，与题目一致，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_09",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码采用递推算法来实现整数的阶乘，则横线上应填写（  ）。\nint factorial(int n) {\nint result = 1;\nfor (int i = 2; i <= n; i++) {\n________  // 在此处填入代码\n}\nreturn result;\n}",
          "options": [
            "result *= i;",
            "result += i;",
            "result *= result;",
            "result += result;"
          ],
          "answer": 0,
          "explanation": "阶乘 n! 等于从 2 乘到 n 的连乘积，每轮把 result 乘上当前的 i 累乘进去，应填 result *= i。累加、自乘都不符合阶乘连乘的定义。注意循环从 2 开始，保证初始 result=1 不会被破坏。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_20",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "递推算法通过逐步求解当前状态和前一个或几个状态之间的关系来解决问题。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推就是由已知的初始状态出发，利用当前状态与前面一个或几个状态的递推关系，逐步求出目标状态，正是题目所描述的过程。它是正向逐步推进的计算方式，所以正确。它与递归不同，递推不需要反复调用自身。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_24",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码用递推法求斐波那契数列的第 n 项，时间复杂度为指数级。\nint fibonacci(int n) {\nif (n == 0) return 0;\nif (n == 1) return 1;\nint f0 = 0, f1 = 1, current;\nfor (int i = 2; i <= n; i++) {\ncurrent = f1 + f2;\nf0 = f1; f1 = current;\n}\nreturn current;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "代码用 for 循环从 f0、f1 递推到第 n 项，循环大约执行 n 次，时间复杂度是 O(n) 线性级，不是指数级。说它是指数级是错误的。真正的递归求斐波那契才是指数级，本题代码是线性递推。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_09",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码采用递推算法来计算斐波那契数列，则横线上应填写（  ）。\nint fib(int n) {\nif (n == 0 || n == 1) return n;\nint f1 = 0, f2 = 1, result = 0;\nfor (int i = 2; i <= n; i++) {\n________  // 在此处填入代码\n}\nreturn result;\n}",
          "options": [
            "result = f1 + f2;\nf1 = f2;\nf2 = result;",
            "result += f1 + f2;\nf1 = f2;\nf2 = result;",
            "result += f1 + f2;\nf2 = result;\nf1 = f2;",
            "result = f1 + f2;\nf2 = result;\nf1 = f2;"
          ],
          "answer": 0,
          "explanation": "每轮先算下一项 result=f1+f2，再把 f1、f2 依次前移为 f1=f2、f2=result。注意要用赋值 = 而不是累加 +=，否则结果会一直叠加，所以选 A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_20",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "递推是一种通过已知的初始值和递推公式，逐步求解目标值的算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推正是从已知的初始值出发，依据递推关系式一步步推出后面的结果，最终得到目标值，完全符合递推算法的定义。它是正向迭代计算，与函数自己调用自己的递归不同。与递归的区别在于：递推用循环正向推导，不反复调用自己。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_10",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨正在爬楼梯，需要爬 n 阶才能到达楼顶。如果每次可以爬 1 个或 2 个台阶，下面代码采用递推算法来计算一共有多少种不同的方法可以爬到楼顶，则横线上应填写（  ）。\nint f(int n) {\nif (n == 1 || n == 2) return n;\nint f1 = 1, f2 = 2, res = 0;\nfor (int i = 3; i <= n; i++) {\n________  // 在此处填入代码\n}\nreturn res;\n}",
          "options": [
            "res += f1 + f2;\nf1 = f2;\nf2 = res;",
            "res = f1 + f2;\nf1 = f2;\nf2 = res;",
            "res += f1 + f2;\nf2 = res;\nf1 = f2;",
            "res = f1 + f2;\nf2 = res;\nf1 = f2;"
          ],
          "answer": 1,
          "explanation": "爬楼方法数满足递推关系 res=f1+f2，先算出下一项，再把 f1、f2 前移。必须用赋值 = 而不是 +=，否则 res 会不断累积错误值，所以选 B。该递推与斐波那契一致，只是初始值不同。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_21",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "递推是一种通过已知的初始值和递推公式，逐步求解目标值的算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推就是由已知初始值出发，按照递推关系式一步步推出后面的结果，最终得到目标值，符合递推算法的定义，比如用循环求斐波那契数列就是典型的递推，所以正确。递推的关键是找到相邻项之间的数量关系。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_10",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于递推算法基本思想的描述，正确的是（   ）。",
          "options": [
            "递推算法通过将问题分解为相互独立的子问题来解决。",
            "递推算法从已知的基础情况出发，通过某种关系逐步推导出更大规模问题的解。",
            "递推算法通常用于穷举所有可能的解决方案。",
            "递推算法适用于在每一步做出局部最优选择以达到全局最优。"
          ],
          "answer": 1,
          "explanation": "递推是从已知的初始条件出发，按递推关系一步步推出后面的结果，比如斐波那契数列。分解子问题是分治，穷举是搜索，局部最优是贪心，它们都不是递推。注意与递归、分治、贪心区分开，递推强调的是'逐步推出'。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_21",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "以下程序中使用了递推方式计算阶乘（20），计算结果正确。\nint factorial(int n) {\nint res = 1;\nfor (int i = 0; i < n; ++i) {\nres *= i;\n}\nreturn res;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "循环从 i=0 开始乘，第一次 res 乘 0 变成 0，之后一直为 0，根本算不出 n!。正确写法应从 i=1 开始乘。所以计算结果错误，说法错误。i 从 0 开始导致结果恒为 0，递推或循环求阶乘都应从 1 开始。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_13",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨正在爬楼梯，需要 n 阶才能到达楼顶，每次可以爬 1 阶或 2 阶，求小杨有多少种不同的方法可以爬到楼顶，横线上应填写（  ）。\nint climbStairs(int n) {\nif (n <= 2) return n;\nint prev2 = 1;\nint prev1 = 2;\nint current = 0;\nfor (int i = 3; i <= n; ++i) {\n________________    // 此处填入代码\n}\nreturn current;\n}",
          "options": [
            "prev2 = prev1; prev1 = current; current = prev1 + prev2;",
            "current = prev1 + prev2; prev2 = prev1; prev1 = current;",
            "current = prev1 + prev2; prev1 = current; prev2 = prev1;",
            "prev1 = current; prev2 = prev1; current = prev1 + prev2;"
          ],
          "answer": 1,
          "explanation": "爬 n 阶的方法数 f(n)=f(n-1)+f(n-2)。循环里先算 current = prev1 + prev2，再把前两项往后滚：prev2=prev1、prev1=current，顺序不能乱，否则会用到刚被改的值。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_21",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "递推是在给定初始条件下，已知前一项（或前几项）求后一项的过程。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推正是从初始条件出发，利用前后项之间的关系，由已知项逐步推出未知项，例如斐波那契数列 f[n]=f[n-1]+f[n-2]。说法正确。虽然最坏是平方级，但小数据量下实际开销很小，很实用。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_09",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定函数 climbStairs(int n) 的定义如下，则 climbStairs(5) 的返回的值是（  ）。\nint climbStairs(int n) {\nif(n <= 2) return n;\nint a = 1, b = 2;\nfor(int i = 3; i <= n; i++) {\nint temp = a + b;\na = b;\nb = temp;\n}\nreturn b;\n}",
          "options": [
            "5",
            "8",
            "13",
            "10"
          ],
          "answer": 1,
          "explanation": "这是斐波那契式递推：f(1)=1、f(2)=2。i=3 时 b=3，i=4 时 b=5，i=5 时 b=8，所以 climbStairs(5)=8。这是爬楼梯问题的递推版本，滚动变量保存前两项。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_21",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "考虑用如下递推方式计算斐波那契数列，时间复杂度是 O(n) 。\nint n = 10;\nint f[20];\nf[0] = 0;\nf[1] = 1;\nfor (int i = 2; i <= n; i++)\nf[i] = f[i - 1] + f[i - 2];",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推用数组从 f[2] 一直算到 f[n]，总共 n 次加法，每次 O(1)，所以时间复杂度是 O(n)。说法正确。用数组递推求斐波那契，每项 O(1)，总复杂度 O(n)。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_08",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "关于递推算法的描述，正确的是（ ）。",
          "options": [
            "递推表现为函数自己调用自己",
            "递推从已知初值出发，利用递推关系逐步推出后续结果",
            "递推只能用于指数复杂度问题",
            "递推一定需要回溯"
          ],
          "answer": 1,
          "explanation": "递推从初始条件出发，按递推关系一步步推出后面的结果。函数自己调用自己是递归；递推通常复杂度不高，也不需要回溯。递推与递归不同，递推用循环逐步推出结果，不用回溯。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_09",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行 climb(6) 的返回值为（ ）。\nint climb(int n){\nif(n <= 2) return n;\nint a = 1, b = 2, c = 0;\nfor(int i = 3; i <= n; i++){\nc = a + b;\na = b;\nb = c;\n}\nreturn c;\n}",
          "options": [
            "8",
            "13",
            "5",
            "10"
          ],
          "answer": 1,
          "explanation": "f(1)=1、f(2)=2。i=3 时 c=3，i=4 时 c=5，i=5 时 c=8，i=6 时 c=13，所以 climb(6)=13。滚动递推逐步计算，第 6 项恰好是 13。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_25",
          "kp": "kp4_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面用递推方式计算斐波那契数列第 n 项的程序，时间复杂度是 O(2ⁿ) 。\nint fib(int n) {\nif (n <= 1) return n;\nint f0 = 0, f1 = 1, cur = 0;\nfor (int i = 2; i <= n; i++) {\ncur = f0 + f1;\nf0 = f1;\nf1 = cur;\n}\nreturn cur;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "该代码用循环从 f2 递推到 fn，只执行 n-1 次加法，时间复杂度是 O(n)，而不是题述的 O(2ⁿ)。朴素递归才是指数级，递推循环已是线性，题述与代码不符，所以说法错误。（注：PDF 中复杂度公式为图片，按递推循环代码判定为 O(n)。）",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_12",
          "kp": "kp4_07",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨的机器人正在能量踏板上跳跃，踏板编号为 1 到 n。跳到第 n 块踏板的方案数满足递推式 f(n)=f(n-1)+f(n-2)，若 f(1)=1、f(2)=2，则运行以下代码计算 jump(5) 的结果是（  ）。\nint jump(int n) {\nif (n <= 2) return n;\nint a = 1, b = 2, c = 0;\nfor (int i = 3; i <= n; i++) {\nc = a + b;\na = b;\nb = c;\n}\nreturn c;\n}",
          "options": [
            "5",
            "8",
            "13",
            "21"
          ],
          "answer": 1,
          "explanation": "递推 f(3)=3、f(4)=5、f(5)=8，与代码循环一致（i=3 得 3，i=4 得 5，i=5 得 8），所以 jump(5)=8。递推一步步得到 3、5、8，所以 jump(5) 等于 8。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_08": {
      "title": "排序概念",
      "questions": [
        {
          "id": "l4_202306_02",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "排序算法是稳定的（Stable Sorting），就是指排序算法可以保证，在待排序数据中有两个相等记录的关键字 R 和 S（R 出现在 S 之前），在排序后的列表中 R 也一定在 S 前。下面关于排序稳定性的描述，正确的是（ ）。",
          "options": [
            "A. 冒泡排序是不稳定的",
            "B. 插入排序是不稳定的",
            "C. 选择排序是不稳定的",
            "D. 以上都不正确"
          ],
          "answer": 2,
          "explanation": "稳定性指相等元素排序后相对顺序不变。冒泡排序和插入排序通常都是稳定的；选择排序在交换时可能把相等元素的位置打乱，一般是不稳定的，所以选 C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_16",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 的内置函数 sort() 支持数组的局部排序。例如 int a[]={10,9,8,7,6,5,4,3,2,1} ，可以用 sort(a,a+5) ，排序成 {6,7,8,9,10,5,4,3,2,1} 。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "sort 支持用迭代器/指针区间排序，sort(a, a+5) 只对前 5 个元素排序，得到 {6,7,8,9,10}，后面不变，正是局部排序，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_23",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 内置函数 sort() 可以对整数、浮点数、字符数组进行从大到小，从小到大，局部排序。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "sort() 是泛型算法，可对任意可比较类型（int、double、char 数组等）排序，通过自定义比较函数可实现从小到大或从大到小，也可传入区间做局部排序，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_17",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "如果待排序数据不能都装进内存，需要使用外排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "当数据量超过内存容量时，普通内排序无法一次性完成，需要用外排序算法（如多路归并）把数据分块存放在外存中，逐步归并完成排序，所以正确。外排序与内排序相对，核心思想是分块读取、外部归并。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_10",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在排序算法中，稳定性指的是（  ）。",
          "options": [
            "排序后数据不会丢失",
            "排序后相同元素的相对顺序保持不变",
            "排序后数据不会被修改",
            "排序后数据的时间复杂度不变"
          ],
          "answer": 1,
          "explanation": "稳定排序保证值相同的元素在排序前后保持原有的相对顺序，比如两个相等的 5，原来在前面的排序后仍在前。这正是稳定性的定义，所以 B 正确。稳定性与效率无关，只关乎相同元素的前后次序。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_21",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序是稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "选择排序每轮在剩余元素中挑出最小值，把它与当前位置的元素交换，交换时可能跨越位置、改变相等元素的相对顺序，所以它不稳定。只有插入排序和冒泡排序才是稳定的，说选择排序稳定是错误的。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_23",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序和插入排序都是稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序只在相邻逆序时交换，相等的元素不会互换位置；插入排序相等的元素也不会越过对方。两者都保持相同元素的相对顺序，都是稳定的，说法正确。两者都不做相等元素的跨越交换，所以保持稳定。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_24",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序是稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "选择排序每轮把最小值与当前位置交换，交换时元素可能跨越多个位置，相等元素的相对顺序就可能被改变，因此它不稳定。相比之下插入排序才是稳定的排序算法，所以题目说选择排序稳定是错误的。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_12",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于排序稳定性的描述，正确的是（  ）。",
          "options": [
            "稳定性指算法的时间复杂度恒定",
            "稳定排序保证相同元素的相对顺序不变",
            "选择排序是稳定排序",
            "插入排序不是稳定排序"
          ],
          "answer": 1,
          "explanation": "稳定排序保证值相等的元素在排序前后相对顺序不变。选择排序会跨越交换所以不稳定，插入排序是稳定的，稳定性与时间复杂度是否恒定无关，所以 B 正确。稳定的算法还有冒泡和插入，不稳定的典型是选择。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_22",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "无论初始数组是否有序，选择排序都执行 n(n-1)/2 次比较。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "选择排序每轮都要在剩余元素中找最小值，无论原数组是否有序，比较次数固定：n-1 + n-2 + … + 1 = n(n-1)/2。所以说法正确。因为每轮都要在剩余部分重新扫描找最小值，比较次数固定不变。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_09",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "关于排序算法的稳定性，以下说法错误的是（   ）。",
          "options": [
            "稳定的排序算法不改变相等元素的相对位置",
            "冒泡排序是稳定的排序算法",
            "选择排序是稳定的排序算法",
            "插入排序是稳定的排序算法"
          ],
          "answer": 2,
          "explanation": "稳定性指相等元素的相对顺序保持不变。冒泡、插入排序都稳定，而普通选择排序把最小值往前换，可能打乱相等元素的顺序，所以是不稳定的。掌握三种常见排序的稳定性，这类判断题就迎刃而解。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_10",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "对如下4个扑克牌进行排序，使用某排序算法按value排序后，结果为: {3,'D'}, {3,'B'}, {5,'A'}, {5,'C'} ，则这个排序算法是稳定的吗？\nstruct Card { int value; char suit; };\nCard cards[4] = {{5,'A'}, {3,'B'}, {5,'C'}, {3,'D'}};",
          "options": [
            "稳定，因为相同 value 的元素相对顺序保持不变",
            "不稳定，因为 {3,'D'} 出现在 {3,'B'} 之前",
            "无法判断",
            "稳定，因为结果是有序的"
          ],
          "answer": 1,
          "explanation": "原始顺序中 value=3 的是 {3,B}（第 2 个）、{3,D}（第 4 个），B 在 D 前面。排序后变成 {3,D} 在前、{3,B} 在后，相等元素的相对顺序被改变了，所以该算法不稳定。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_22",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序和插入排序都是稳定排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序只在左边大于右边时交换，相等元素不交换；插入排序把新元素插到相等元素的后面，二者都不改变相等元素的相对顺序，所以都稳定。两种排序都不交换相等元素，因此都满足稳定性定义。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_10",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "某排序算法对如下数据排序（按 score 升序），则下面关于该排序算法稳定性的描述中，说法正确的是（ ）。\n初始：(90,'A'), (90,'B'), (80,'C'), (90,'D')\n排序后：(80,'C'), (90,'A'), (90,'B'), (90,'D')",
          "options": [
            "不稳定，因为出现了相同分数",
            "稳定，因为相同 score 的相对顺序保持为 A 在 B 前、B 在 D 前",
            "不稳定，因为 C 跑到前面了",
            "无法判断"
          ],
          "answer": 1,
          "explanation": "分数为 90 的三个元素初始顺序是 A、B、D，排序后仍是 A、B、D，相对顺序没变，说明该排序算法稳定。C 分数低排最前是正常结果，不是不稳定的表现。判断稳定性要看相等元素的先后顺序是否被打乱，与分数是否重复无关。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_11",
          "kp": "kp4_08",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在对“能量晶石”按亮度进行排序。如果两块晶石亮度相同，他希望保持它们在原始序列中的相对顺序。下列关于排序算法稳定性的说法，错误的是（  ）。",
          "options": [
            "冒泡排序是稳定的，因为只有在左边比右边大时才交换。",
            "插入排序是稳定的，因为它将元素插入到相等元素的右侧。",
            "选择排序是稳定的，因为它每次选出最小元素放在前面。",
            "稳定性是指排序后相等元素的相对位置不发生改变。"
          ],
          "answer": 2,
          "explanation": "选择排序每次把最小值换到前面，交换时可能越过相等的元素，导致相等元素的相对顺序改变，所以它是不稳定的。A、B、D 说法正确，C 错误。选择排序不稳定是常见考点，A、B、D 都正确。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_19",
          "kp": "kp4_08",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序算法在寻找每一轮最小值时，如果遇到相等的元素不进行交换，则选择排序是一种稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "即使只在严格小于时才更新最小值下标，选择排序把最小值与当前元素交换时仍可能把相等的元素换到相对顺序之后，所以仍不稳定。说法错误。即使相等不交换，交换步骤仍可能打乱相等元素顺序。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_09": {
      "title": "排序算法",
      "questions": [
        {
          "id": "l4_202306_15",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），完成对有 n 个 int 类型元素的数组 array 由小到大排序。\n```cpp\nvoid SelectionSort(int array[], int n) {\nint i, j, min, temp;\nfor (i = 0; i < n - 1; i++) {\nmin = i;\nfor (j = i + 1; j < n; j++)\nif (________) // 在此处填入代码\nmin = j;\ntemp = array[min];\narray[min] = array[i];\narray[i] = temp;\n}\n}\n```",
          "options": [
            "A. array[min] > array[j]",
            "B. array[min] > array[i]",
            "C. min > array[j]",
            "D. min > array[i]"
          ],
          "answer": 0,
          "explanation": "这是选择排序：在待排区间里找到最小元素的下标 min。内层循环用当前最小值 array[min] 和每个 array[j] 比较，array[min] > array[j] 时更新 min=j，所以填 A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_15",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），完成对有 n 个 int 类型元素的数组 array 由小到大排序。\n```cpp\nvoid BubbleSort(int array[], int n) {\nfor (int i = n; i >= 2; i--)\nfor (______) // 在此处填入代码\nif (array[j] > array[j + 1]) {\nint t = array[j];\narray[j] = array[j + 1];\narray[j + 1] = t;\n}\n}\n```",
          "options": [
            "A. int j = 1; j < n; j++",
            "B. int j = 0; j < n; j++",
            "C. int j = 0; j < i - 1; j++",
            "D. int j = 0; j < i; j++"
          ],
          "answer": 2,
          "explanation": "外层 i 从 n 递减到 2，表示当前待比较的元素个数为 i。内层要比较 array[j] 与 array[j+1]，j 必须从 0 到 i-2，即 j < i-1，这样每趟把最大的数冒泡到最后，选 C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 2,
          "question": "田忌赛马\n【问题描述】你要和田忌赛马。你们各自有 n 匹马，并且要进行 n 轮比赛，每轮比赛，你们都要各派出一匹马决出胜负。你的马匹的速度分别为，田忌的马匹的速度分别为。田忌会按顺序派出他的马匹，请问你要如何排兵布阵，才能赢得最多轮次的比赛？巧合的是，你和田忌的所有马匹的速度两两不同，因此不可能出现平局。\n【输入描述】第一行一个整数 n。接下来一行 n 个用空格隔开的整数，依次为你的马匹们的速度。接下来一行 n 个用空格隔开的整数，依次为田忌的马匹们的速度。\n【输出描述】输出一行，表示你最多能获胜几轮。\n【数据范围】\n1 ≤ n ≤ 100000\n【特别提醒】在常规程序中，输入、输出时提供提示是好习惯。但在本场考试中，由于系统限定，请不要在输入、输出中附带任何提示信息。",
          "options": null,
          "answer": null,
          "explanation": "思路：把双方的马按速度排序，然后用贪心：从小到大依次看你的每一匹马，如果它比田忌当前最慢（尚未被击败/使用的）马还快，就能赢这一轮，计数加一并让田忌指针后移；否则不计数。排序用 sort()，复杂度 O(n log n)。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 100005;\nint a[N], t;\nint b[N], h;\nint n;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; ++i) {\n        scanf(\"%d\", &a[i]);\n    }\n    for (int i = 1; i <= n; ++i) {\n        scanf(\"%d\", &b[i]);\n    }\n    h = 1;\n    t = 0;\n    sort(a + 1, a + n + 1);\n    sort(b + 1, b + n + 1);\n    int ans = 0;\n    for (int i = 1; i <= n; ++i)\n        if (a[i] > b[h])\n            ++ans, ++h;\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 3 5\n2 4 6",
              "expectedOutput": "2"
            },
            {
              "input": "5\n10 3 5 8 7\n4 6 1 2 9",
              "expectedOutput": "5"
            }
          ]
        },
        {
          "id": "l4_202403_16",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "对 int a[]={2,0,2,4,3,1,6} ，执行第一趟选择排序处理后 a 中数据变为 {0,2,2,4,3,1,6} 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "选择排序第一趟在整个数组中找出最小值 0（原下标 1），把它与 a[0] 交换，得到 {0,2,2,4,3,1,6}，与题目描述一致，所以正确。选择排序每轮把当前区间的最小值换到最前面，完成一趟后最小元素就位。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202403_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "做题\n小杨同学为了提高自己的实力制定了做题计划，在第 i 天时，他必须要完成 i 道题，否则他就会偷懒。小杨现在找到了一个题库，一共有 n 套题单，每套题单中有一定数量的题目。他十分挑剔，每套题单只会使用一次，每一天也只能使用一套题单里的题目，之后那套题单就被弃之不用。对于每套题单，他不必完成题单内所有的题。问小杨最多会做题几天才偷懒？\n输入格式：第一行一个数 n，表示有多少套题单。第二行 n 个整数，分别表示每套题单有多少道题。\n输出格式：输出一行，小杨偷懒前最多做题天数。\n【数据范围】\n1 ≤ n ≤ 1000000\n样例1：输入 4 / 3 1 4 1，输出 3。",
          "options": [],
          "answer": null,
          "explanation": "思路：把题单按题目数量从小到大排序。第 j 天要求 j 道题，依次尝试用一套题数不少于 j 的题单，贪心选取题目数量最少且够用的那一套，用完（标记为 j）后继续下一天，直到找不到满足 j 的题单为止，统计天数即可。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\n#define maxn 1000006\nusing namespace std;\nlong long a[maxn];int n;\nint main()\n{\n    int m,ans=0;\n    cin>>n;m=n;int s=1;\n    for(int i=1;i<=n;i++)\n    {\n        cin>>a[i];\n    }\n    sort(a+1,a+n+1);\n    for(int j=1;j<=m;j++)\n    {\n        for(int k=s;k<=n;k++)\n        {\n            if(j<=a[k])\n            {\n                ans++;\n                a[k]=j;\n                s=k;\n                break;\n            }\n        }\n    }\n    cout<<ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n3 1 4 1",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l4_202406_07",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于直接插入排序，下列说法错误的是（  ）。",
          "options": [
            "插入排序的最好情况是数组已经有序，此时只需要进行 n-1 次比较，时间复杂度为 O(n)",
            "最坏情况是数组逆序排序，此时需要进行 n(n-1)/2 次比较以及 n-1 次插入（赋值）操作",
            "平均来说插入排序算法的复杂度为 O(n^2)",
            "空间复杂度上，直接插入法是就地排序，空间复杂度为 O(n)"
          ],
          "answer": 3,
          "explanation": "直接插入排序是就地排序，只需要常数个额外变量，空间复杂度是 O(1) 而不是 O(n)。A、B、C 的描述都正确，只有 D 错误，所以选 D。就地排序只需常数空间，插入排序不占用额外数组。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_08",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序横线处，应该输入的是（  ）。\n<pre><code>void swap(int &a,int &b){ int t=a; a=b; b=t; }\nint main() {\ncin>>n;\nfor(int i=1;i<=n;i++) cin>>a[i];\nfor(int i=n;i>1;i--)\nfor(int j=1;j<i;j++)\nif(a[j]>a[j+1]) { ________ }\n}</code></pre>",
          "options": [
            "swap(a[j],a[j+1]);",
            "swap(a[j-1],a[j]);",
            "swap(a[j-1],a[j+1]);",
            "swap(&a[j-1],&a[j+1]);"
          ],
          "answer": 0,
          "explanation": "这是冒泡排序，内层比较相邻元素 a[j] 和 a[j+1]，逆序时交换它们。自定义 swap 的形参是 int&，只能传变量，swap(a[j],a[j+1]) 合法且正是所需；传 & 是指针，类型不匹配。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_10",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于几种排序算法的说法，下面说法错误的是（  ）。",
          "options": [
            "选择排序不是一个稳定的排序算法",
            "冒泡排序算法不是一种稳定的排序算法",
            "插入排序是一种稳定的排序算法",
            "如果排序前 2 个相等的数在序列中的前后位置顺序和排序后它们的前后位置顺序相同，则称为一种稳定的排序算法"
          ],
          "answer": 1,
          "explanation": "冒泡排序只在相邻元素逆序时才交换，相等的元素不会互换，相对顺序保持不变，所以它是稳定的。B 说冒泡排序不稳定是错误的，选 B。稳定性判断依据是相等元素排序前后的相对位置是否改变。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "数组 {45,66,23,1,10,97,52,88,5,33} 进行从小到大冒泡排序过程中，第一遍冒泡过后的序列是（  ）。",
          "options": [
            "{45,23,1,10,66,52,88,5,33,97}",
            "{45,66,1,23,10,97,52,88,5,33}",
            "{45,66,23,1,10,52,88,5,33,97}",
            "{45,66,23,1,10,97,52,88,33,5}"
          ],
          "answer": 0,
          "explanation": "第一遍从前往后两两比较，较大的后移：66 依次与 23、1、10 交换到最后位置，97 依次与 52、88、5、33 交换到最后，得到 {45,23,1,10,66,52,88,5,33,97}，最大数 97 沉底。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_12",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的排序算法程序中，横线处应该填入的是（  ）。\nint a[8]={2,3,4,5,6,2,3,1};\nfor (int i=1;i<8;i++) {\nint key = a[i];\nint j=i-1;\nwhile(a[j]>key && j>=0) {\n________;\nj -= 1;\n}\na[j+1]= key;\n}",
          "options": [
            "a[j]=a[j-1];",
            "a[j]=a[j+1];",
            "a[j+1]=a[j-1];",
            "a[j+1]=a[j];"
          ],
          "answer": 3,
          "explanation": "这是插入排序：把 key 插入到前面有序部分。while 循环里不断把比 key 大的元素向后挪一位腾出位置，应写 a[j+1]=a[j]，即把 a[j] 移到 j+1 位置。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "宝箱\n小杨发现了 n 个宝箱，其中第 i 个宝箱的价值是 a[i]。小杨可以选择一些宝箱放入背包并带走，但是小杨的背包比较特殊，假设小杨选择的宝箱中最大价值为 max，最小价值为 min，小杨需要保证 max-min≤k，否则背包会损坏。小杨想知道背包不损坏的情况下，自己能够带走宝箱的总价值最大是多少。\n输入格式：第一行包含两个正整数 n、k。第二行包含 n 个正整数，代表宝箱的价值。\n输出格式：输出一个整数，代表带走宝箱的最大总价值。\n【数据范围】\n1 ≤ n ≤ 1000\n样例1：输入 5 1 / 1 2 3 1 2，输出 7（拿走两个价值为 2 的宝箱和一个价值为 3 的宝箱）。",
          "options": [],
          "answer": null,
          "explanation": "思路：先把价值从小到大排序。合法选择的价值必然落在一个宽度不超过 k 的区间里，为了总价值最大应取连续的一段。对每个元素作为最大值，向左累加所有与它差值不超过 k 的价值并更新答案。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1010;\nint a[N];\nint n,k;\nint main(){\n    cin>>n>>k;\n    for(int i=1;i<=n;i++){\n        cin>>a[i];\n    }\n    sort(a+1,a+n+1);\n    int ans=0;\n    for(int i=1;i<=n;i++){\n        int sum=0;\n        for(int j=i;j>=1;j--){\n            if(a[i]-a[j]<=k){\n                sum+=a[j];\n            }else break;\n        }\n        ans=max(ans,sum);\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 1\n1 2 3 1 2",
              "expectedOutput": "7"
            }
          ]
        },
        {
          "id": "l4_202409_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了冒泡排序函数，则横线上应填写（  ）。\nint bubble_sort(vector<int> &arr) {\nfor (int i = arr.size() - 1; i > 0; i--) {\nbool flag = false;\n________ {  // 在此处填入代码\nif (arr[j] > arr[j + 1]) {\nswap(arr, i, j);\nflag = true;\n}\n}\nif (!flag) break;\n}\n}",
          "options": [
            "for (int j = 0; j < arr.size() - 1; j++)",
            "for (int j = arr.size() - 1; j > 0; j--)",
            "for (int j = 0; j < i; j++)",
            "for (int j = i-1; j <=0; j--)"
          ],
          "answer": 2,
          "explanation": "外层 i 从后往前表示已排好的位置，内层要扫描未排好区域 0 到 i-1，比较相邻元素，所以填 for(int j=0; j<i; j++)，让最大的元素在每轮冒泡到 i 位置。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_13",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了插入排序函数（升序），则横线上应填写（  ）。\nvoid insertion_sort(vector<int> &nums) {\nfor (int i = 1; i < nums.size(); i++) {\nint base = nums[i], j = i - 1;\n________ {  // 在此处填入代码\nnums[j + 1] = nums[j];\nj--;\n}\nnums[j + 1] = base;\n}\n}",
          "options": [
            "while (j >= 0 && nums[j] > base)",
            "while (j > 0 && nums[j] > base)",
            "while (j >= 0 && nums[j] < base)",
            "while (j > 0 && nums[j] < base)"
          ],
          "answer": 0,
          "explanation": "升序插入排序要把前面比 base 大的元素向后移，循环条件是 j 不越界且 nums[j] 大于 base。j 可以到 0，所以用 j>=0，条件用 >，即 while(j>=0 && nums[j]>base)。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "区间排序\n小杨有一个包含 n 个正整数的序列。小杨计划对序列进行多次升序排序，每次升序排序小杨会选择一个区间 [l,r] 并对区间内所有数字进行升序排序。每次升序排序会在上一次升序排序的结果上进行。小杨想请你计算出多次升序排序后的序列。\n输入格式：第一行包含一个正整数 n。第二行包含 n 个正整数，代表序列。第三行包含一个正整数 q，代表排序次数。之后 q 行，每行包含两个正整数 l、r，代表将区间 [l,r] 内所有数字进行升序排序。\n输出格式：输出一行包含 n 个正整数，代表多次升序排序后的序列。\n【数据范围】\n1 ≤ n ≤ 1000\n样例1：输入 5 / 3 4 5 2 1 / 3 / 4 5 / 3 4 / 1 3，输出 1 3 4 5 2。",
          "options": [],
          "answer": null,
          "explanation": "思路：按顺序处理每次区间排序。对区间 [l,r] 用冒泡排序把该区间内的元素升序排列，多次操作叠加，最后按顺序输出整个序列。区间长度和次数都不大，直接模拟即可。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1010;\nint a[N];\nint n;\nvoid bubbleSort(int l,int r){\n    bool flag = true;\n    while (flag) {\n        flag = false;\n        for (int i = l; i < r; ++i) {\n            if (a[i] > a[i + 1]) {\n                flag = true;\n                swap(a[i],a[i+1]);\n            }\n        }\n    }\n}\nint main(){\n    cin>>n;\n    for(int i=1;i<=n;i++){\n        cin>>a[i];\n    }\n    int q;\n    cin>>q;\n    while(q--){\n        int l,r;\n        cin>>l>>r;\n        bubbleSort(l,r);\n    }\n    for(int i=1;i<=n;i++){\n        cout<<a[i];\n        if(i!=n)cout<<\" \";\n        else cout<<\"\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n3 4 5 2 1\n3\n4 5\n3 4\n1 3",
              "expectedOutput": "1 3 4 5 2"
            }
          ]
        },
        {
          "id": "l4_202412_10",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于排序算法（冒泡排序、插入排序和选择排序）的描述中，不正确的是（  ）。",
          "options": [
            "冒泡排序基于元素交换实现，需借助临时变量，而插入排序基于元素赋值实现。因此冒泡排序的计算开销通常比插入排序更高。",
            "选择排序在任何情况下的时间复杂度都为 O(n^2)。",
            "冒泡排序在任何情况下的时间复杂度都为 O(n^2)。",
            "如果给定数据部分有序，插入排序通常比选择排序效率更高。"
          ],
          "answer": 2,
          "explanation": "加了 flag 优化的冒泡排序在数组已有序时只需一趟扫描，最好情况是 O(n)，不是任何情况都是 O(n²)。C 说法不准确，是本题要找的错误描述。只有加了提前终止优化的冒泡最好才可能是 O(n)。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "冒泡排序的第一轮操作是从左到右遍历数组，通过两两比较相邻元素，将当前最大的元素移动到末尾。给定数组 arr[]={4, 1, 3, 1, 5, 2}，执行第一轮冒泡排序后数组 arr 中的内容为（  ）。",
          "options": [
            "1, 4, 3, 1, 5, 2",
            "1, 3, 1, 4, 2, 5",
            "1, 4, 3, 1, 2, 5",
            "4, 1, 3, 1, 5, 2"
          ],
          "answer": 1,
          "explanation": "第一轮相邻比较：4 与 1 换、4 与 3 换、4 与 1 换、4 与 5 不换、5 与 2 换，得到 {1,3,1,4,2,5}，最大数 5 沉到末尾，选 B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_13",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了插入排序函数，则横线上应填写（  ）。\nvoid insertion_sort(vector<int> &nums) {\nfor (int i = 1; i < nums.size(); i++) {\n________ {  // 在此处填入代码\nwhile (j >= 0 && nums[j] > base)\nnums[j + 1] = nums[j];\nj--;\n}\nnums[j + 1] = base;\n}\n}",
          "options": [
            "int base = nums[i], j = i - 1;",
            "int base = nums[i], j = i;",
            "int base = nums[0], j = i - 1;",
            "int base = nums[0], j = i;"
          ],
          "answer": 0,
          "explanation": "插入排序每轮取出当前元素 nums[i] 作为 base，从它前面一个位置 j=i-1 开始向前比较并后移元素，所以填 int base=nums[i], j=i-1;。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_26",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "Recamán\n小杨最近发现了有趣的 Recamán 数列，这个数列是这样生成的：数列的第一项 a1 是 1；如果 a[i-1]-i 是正整数并且没有在数列中出现过，那么数列的第 i 项 a[i] 为 a[i-1]-i，否则为 a[i-1]+i。小杨想知道 Recamán 数列的前 n 项从小到大排序后的结果。\n输入格式：第一行，一个正整数 n。\n输出格式：一行，n 个空格分隔的整数，表示 Recamán 数列的前 n 项从小到大排序后的结果。\n【数据范围】\n1 ≤ n ≤ 200000\n样例1：输入 5，输出 1 2 3 6 7。\n样例2：输入 8，输出 1 2 3 6 7 12 13 20。",
          "options": [],
          "answer": null,
          "explanation": "思路：按递推规则生成前 n 项，用标记数组记录某个数是否出现过：若 a[i-1]-i 为正且未出现则用减，否则用加。生成完用冒泡排序把前 n 项升序后输出。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 2e5 + 5;\nconst int C = 1e6 + 5;\nint n;\nint a[N];\nint vis[C];\nvoid bubble_sort(int *a, int n) {\n    bool flag = true;\n    while (flag) {\n        flag = false;\n        for (int i = 1; i < n; ++i) {\n            if (a[i] > a[i + 1]) {\n                flag = true;\n                int t = a[i];\n                a[i] = a[i + 1];\n                a[i + 1] = t;\n            }\n        }\n    }\n}\nint main() {\n    scanf(\"%d\", &n);\n    a[1] = 1;\n    vis[1] = 1;\n    for (int i = 2; i <= n; i++) {\n        if (a[i - 1] - i <= 0 || vis[a[i - 1] - i])\n            a[i] = a[i - 1] + i;\n        else\n            a[i] = a[i - 1] - i;\n        vis[a[i]] = 1;\n    }\n    bubble_sort(a, n);\n    for (int i = 1; i <= n; i++)\n        printf(\"%d%c\", a[i], \" \\n\"[i == n]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "1 2 3 6 7"
            },
            {
              "input": "8",
              "expectedOutput": "1 2 3 6 7 12 13 20"
            }
          ]
        },
        {
          "id": "l4_202412_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "字符排序\n小杨有 n 个仅包含小写字母的字符串，小杨想将这些字符串按一定顺序排列后拼接到一起构成字符串 t。小杨希望最后构成的字符串 t 满足：假设 t 的第 i 个字符为 t[i]，对于所有 i 均有 t[i]≤t[i+1]（即拼接后整体按字典序非递减）。小杨想知道是否存在满足条件的字符串排列顺序。\n输入格式：第一行包含一个正整数 T，代表测试数据组数。对于每组测试数据，第一行包含一个正整数 n；之后 n 行，每行包含一个字符串。\n输出格式：对于每组测试数据，如果存在满足条件的排列顺序，输出 1，否则输出 0。\n【数据范围】\n1 ≤ n ≤ 100\n样例：输入 3 / 3 / aa / ac / de / 2 / aac / bc / 1 / gesp，输出 1 / 0 / 0。",
          "options": [],
          "answer": null,
          "explanation": "思路：把字符串按字典序排序后拼接，若拼接结果整体非递减则存在可行排列，输出 1，否则输出 0。因为字典序排序后拼接能得到最有序的串，若它都不满足则没有其他排列可行。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nstring s[110];\nvoid bubble_sort(string *a, int n) {\n    bool flag = true;\n    while (flag) {\n        flag = false;\n        for (int i = 1; i < n; ++i) {\n            if (a[i] > a[i + 1]) {\n                flag = true;\n                string t = a[i];\n                a[i] = a[i + 1];\n                a[i + 1] = t;\n            }\n        }\n    }\n}\nint main(){\n    int t;\n    cin>>t;\n    while(t--){\n        int n;\n        cin>>n;\n        for(int i=1;i<=n;i++){\n            cin>>s[i];\n        }\n        bubble_sort(s, n);\n        string t=\"\";\n        for(int i=1;i<=n;i++){\n            t+=s[i];\n        }\n        int m = t.size();\n        int fl=1;\n        for(int i=1;i<m;i++){\n            if(t[i]<t[i-1]){\n                fl=0;\n                break;\n            }\n        }\n        cout<<fl<<\"\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3\naa\nac\nde\n2\naac\nbc\n1\ngesp",
              "expectedOutput": "1\n0\n0"
            }
          ]
        },
        {
          "id": "l4_202503_13",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "对数组 arr[]={5, 3, 8, 1} 进行升序排序，执行第一轮冒泡排序后数组 arr 中的内容为（  ）。",
          "options": [
            "3, 5, 1, 8",
            "3, 1, 5, 8",
            "3, 5, 8, 1",
            "5, 3, 8, 1"
          ],
          "answer": 0,
          "explanation": "第一轮冒泡排序：5 与 3 比较后交换，5 与 8 比较不换，8 与 1 比较后交换，得到 {3,5,1,8}，最大数 8 沉到末尾，所以选 A。每轮比较相邻元素，把较大的元素向末尾推进。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_24",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "对数组 arr[]={4, 3, 1, 5, 2} 进行升序排序，执行第一轮选择排序后数组 arr 中的内容是 {1, 4, 3, 5, 2}。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "第一趟选择排序找出最小值 1（原下标 2），与 a[0]=4 交换，得到 {1,3,4,5,2}，而不是 {1,4,3,5,2}，所以说法错误。选择排序第一趟只交换最小元素与首个位置，其余不动。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_08",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在整理一副扑克牌的所有红心扑克牌，使其从小到大排列。他的做法是：最开始抓到第1张扑克牌被认为已经排好序；然后抓第2张扑克牌，将其插入至有序部分的正确位置；不断循环步骤，每次将新抓到扑克牌插入至有序部分，直至抓完所有扑克牌，这样抓牌结束时就完成了扑克牌的排序。小杨这种整理扑克牌的方式与（  ）排序的方式最接近。",
          "options": [
            "冒泡排序",
            "插入排序",
            "选择排序",
            "直接排序"
          ],
          "answer": 1,
          "explanation": "每次把新元素插入到前面已排好序列的正确位置，这正是插入排序的核心思想。冒泡是相邻交换，选择是每轮挑最小，都不符合'抓一张插一张'的做法。抓牌即插入，一张张放到有序部分的正确位置，与插入排序完全对应。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_09",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种情况是使用插入排序的合适场景？",
          "options": [
            "数据量非常大，且乱序严重",
            "希望获得稳定排序，但不要求实时性",
            "数据几乎有序，只需少量调整",
            "想在交换次数最少的前提下排好大数组"
          ],
          "answer": 2,
          "explanation": "插入排序最好情况是 O(n)，当数据几乎有序时每轮只需很少的搬移，非常高效。数据量大且乱序时 O(n²) 会超时；稳定性和实时性不是插入排序最突出的优势。所以当数据近乎有序时优先考虑插入排序，效率最高。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_15",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "为了提高冒泡排序的效率，如果某轮“冒泡”中没有执行任何交换操作，说明数组已经完成排序，可直接返回结果，则两条横线上分别应该填写（  ）。\nvoid bubbleSortWithFlag(vector<int> &nums) {\nfor (int i = nums.size() - 1; i > 0; i--) {\nbool flag;\n________________    // 第一条横线\nfor (int j = 0; j < i; j++) {\nif (nums[j] > nums[j + 1]) {\nswap(nums[j], nums[j + 1]);\n___________________________    // 第二条横线\n}\n}\nif (!flag) break;\n}\n}",
          "options": [
            "flag = false; flag = false",
            "flag = false; flag = true",
            "flag = true; flag = false",
            "flag = true; flag = true"
          ],
          "answer": 1,
          "explanation": "每一轮开始时先假设本轮没有交换，令 flag=false；一旦发生交换就把 flag 置为 true。一轮结束后若 flag 仍为 false，说明数组已经有序，直接 break。所以第一条填 flag=false，第二条填 flag=true。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_23",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "以下C++代码，尝试对有n个整数的数组arr 进行排序。这个代码实现了选择排序算法。\nfor (int i = 0; i < n - 1; ++i) {\nint minIndex = i;\nfor (int j = i + 1; j < n; ++j) {\nif (arr[j] < arr[minIndex]) minIndex = j;\n}\nif (minIndex != i) swap(arr[i], arr[minIndex]);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码每一轮在剩余元素中找最小值下标 minIndex，然后和当前位置交换，这正是选择排序的标准写法。所以说法正确。每轮挑最小与当前位置交换，正是选择排序的核心步骤。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：排序\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：体育课上有 n 名同学排成一队，从前往后数第 i 位同学的身高为 h[i]，体重为 w[i]。老师希望同学们按照身高从高到低的顺序排队，如果身高相同则按照体重从重到轻排序。在调整队伍时，每次只能交换相邻两位同学的位置。请问最少需要多少次交换操作，才能将队伍调整成目标顺序。\n输入格式：第一行一个正整数 n，表示队伍人数。接下来 n 行，每行两个正整数 h[i] 和 w[i]。\n输出格式：输出一行，一个整数，表示最少需要的交换次数。",
          "options": [],
          "answer": null,
          "explanation": "思路：相邻交换达到目标顺序的最小次数，等于原序列中'逆序对'的数量。把每个同学看成二元组，若 i<j 且 (h[i],w[i]) 排在 (h[j],w[j]) 之后（即目标顺序中更小），就构成一个逆序对，统计所有逆序对个数输出即可，用双重循环枚举所有数对。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\n#include <vector>\n#include <iostream>\nusing namespace std;\nint main() {\n    int n, ans = 0;\n    scanf(\"%d\", &n);\n    vector<pair<int,int>> a(n);\n    for (int i = 0; i < n; i ++)\n        scanf(\"%d%d\", &a[i].first, &a[i].second);\n    for (int i = 0; i < n; i ++)\n        for (int j = i + 1; j < n; j ++)\n            if (a[i] < a[j])\n                ans ++;\n    cout << ans << '\\n';\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n1 60\n3 70\n2 80\n4 55\n4 50\n",
              "expectedOutput": "8"
            },
            {
              "input": "5\n4 0\n4 0\n2 0\n3 0\n1 0\n",
              "expectedOutput": "1"
            }
          ]
        },
        {
          "id": "l4_202509_10",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码试图实现选择排序，使其能对数组 nums 排序为升序，则横线上应分别填写（   ）。\nvoid selectionSort(vector<int>& nums) {\nint n = nums.size();\nfor (int i = 0; i < n - 1; ++i) {\nint minIndex = i;\nfor (int j = i + 1; j < n; ++j) {\nif ( __________ ) {     // 第一条横线\nminIndex = j;\n}\n}\n____________________; // 第二条横线\n}\n}",
          "options": [
            "nums[j] < nums[minIndex]; swap(nums[i], nums[minIndex])",
            "nums[j] > nums[minIndex]; swap(nums[i], nums[minIndex])",
            "nums[j] <= nums[minIndex]; swap(nums[j], nums[minIndex])",
            "nums[j] <= nums[minIndex]; swap(nums[i], nums[j])"
          ],
          "answer": 0,
          "explanation": "选择排序每轮先在未排序部分找最小值，条件是 nums[j] < nums[minIndex]，找到后把最小值换到位置 i，即 swap(nums[i], nums[minIndex])。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序实现插入排序（升序排序），则横线上应分别填写（   ）。\nvoid insertionSort(int arr[], int n) {\nfor (int i = 1; i < n; i++) {\nint key = arr[i];\nint j = i - 1;\nwhile ( j >= 0 && ____________________ ) { // 第一条横线\narr[j + 1] = arr[j];\nj--;\n}\n____________________; // 第二条横线\n}\n}",
          "options": [
            "arr[j] > key; arr[j + 1] = key",
            "arr[j] < key; arr[j + 1] = key",
            "arr[j] > key; arr[j] = key",
            "arr[j] < key; arr[j] = key"
          ],
          "answer": 0,
          "explanation": "插入排序把 key 向左搬，遇到比 key 大的元素就后移一位，条件是 arr[j] > key；循环结束后把 key 放到空出的位置，即 arr[j+1] = key。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_22",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "虽然插入排序的时间复杂度为 O(n²) ，但由于单元操作相对较少，因此在小数据量的排序任务中非常受欢迎。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "插入排序虽然最坏是 O(n²)，但常数小、原地排序且稳定，在数据量小时实际运行很快，因此常用于小规模排序。说法正确。一轮冒泡后最大值已到最后，题目给出的中间结果不符合实际。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_23",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "对整数数组{4, 1, 3, 1, 5, 2} 进行冒泡排序（将最大元素放到最后），执行一轮之后是{4, 1, 3, 1, 2, 5} 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "一轮冒泡两两比较交换：4 与 1 换、4 与 3 换、4 与 1 换，4<5 不换，5 与 2 换，得到 {1,3,1,4,2,5}，最大值 5 到了末尾，而不是题目说的 {4,1,3,1,2,5}。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：最长连续段\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：对于 n 个整数构成的数组 a，如果对数组内的任意相邻两项都有后一项比前一项大 1，那么称该数组是一个连续段。给定数组 a，你可以任意重排元素顺序。请问在重排之后，所有是连续段的子数组中，最长的子数组长度是多少？\n输入格式：第一行一个正整数 n，表示数组长度。第二行 n 个整数，表示数组中的整数。\n输出格式：一行，一个整数，表示数组重排后所有是连续段的子数组的最长长度。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：先对数组排序。排序后相同元素堆在一起，用 last 记录上一个出现的数、cnt 记录当前连续段的长度。若当前数等于 last 就跳过（去重），等于 last+1 则 cnt 加 1，否则重新开始。最后答案取 cnt 的最大值 mx。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nint a[N];\nint last, cnt, mx;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    sort(a + 1, a + n + 1);\n    last = a[1];\n    cnt = mx = 1;\n    for (int i = 1; i <= n; i++) {\n        if (a[i] == last) continue;\n        if (a[i] == last + 1)\n            cnt++;\n        else\n            cnt = 1;\n        last = a[i];\n        mx = max(cnt, mx);\n    }\n    printf(\"%d\\n\", mx);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 0 2 4\n",
              "expectedOutput": "3"
            },
            {
              "input": "9\n9 9 8 2 4 4 3 5 3\n",
              "expectedOutput": "4"
            }
          ]
        },
        {
          "id": "l4_202512_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的函数 selectTopK() 实现从 n 个学生中选出前 k 名成绩最好的学生颁发奖学金（不需要对所有学生完全排序，只需要找出前 k 名），则横线上应填写（   ）。\nstruct Student { string name; int score; };\nvoid selectTopK(Student students[], int n, int k) {\nfor (int i = 0; i < k; i++) {\nint maxIdx = i;\nfor (____________________) {    // 此处填入代码\nif (students[j].score > students[maxIdx].score) {\nmaxIdx = j;\n}\n}\nif (maxIdx != i) {\nStudent temp = students[i];\nstudents[i] = students[maxIdx];\nstudents[maxIdx] = temp;\n}\n}\n}",
          "options": [
            "int j = 0; j < n; j++",
            "int j = i + 1; j < n; j++",
            "int j = i; j < n; j++",
            "int j = 1; j <= n; j++"
          ],
          "answer": 1,
          "explanation": "这类似选择排序，前 k 轮每轮在 i 后面的未处理部分找最高分。maxIdx 初值为 i，所以内层从 j = i + 1 开始扫描到 n-1，条件为 j < n。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_12",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "某游戏的排行榜系统需要实时更新玩家分数。每次只有一个玩家的分数发生变化，排行榜已经是按分数降序排列的。现在需要将更新后的玩家调整到正确位置。下面的函数 updateRanking() 要实现上述功能，则两处横线上应分别填写（   ）。\nstruct Player { string name; int score; };\nvoid updateRanking(Player players[], int size, int playerIdx) {\nPlayer updatedPlayer = players[playerIdx];\nif (playerIdx > 0 && updatedPlayer.score > players[playerIdx - 1].score) {\nint i = playerIdx;\nwhile (____________________) {  // 第一条横线\nplayers[i] = players[i - 1];\ni--;\n}\nplayers[i] = updatedPlayer;\n}\nelse if (playerIdx < size - 1 && updatedPlayer.score < players[playerIdx + 1].score) {\nint i = playerIdx;\nwhile (____________________) {  // 第二条横线\nplayers[i] = players[i + 1];\ni++;\n}\nplayers[i] = updatedPlayer;\n}\n}",
          "options": [
            "i > 0 && updatedPlayer.score > players[i - 1].score ; i < size - 1 && updatedPlayer.score < players[i + 1].score",
            "i < size - 1 && updatedPlayer.score < players[i + 1].score ; i > 0 && updatedPlayer.score > players[i - 1].score",
            "i > 0 && updatedPlayer.score < players[i - 1].score ; i < size - 1 && updatedPlayer.score < players[i + 1].score",
            "i > 0 && updatedPlayer.score < players[i - 1].score ; i < size - 1 && updatedPlayer.score > players[i + 1].score"
          ],
          "answer": 0,
          "explanation": "分数上升时向前搬：只要前一个分数更小（score > players[i-1]），就继续左移；分数下降时向后搬：只要后一个分数更大（score < players[i+1]），就继续右移。注意不能越界。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_23",
          "kp": "kp4_09",
          "type": "judge",
          "difficulty": 1,
          "question": "下面这段代码实现了选择排序算法。\nvoid sort(int a[], int n) {\nfor (int i = 1; i < n; i++) {\nint x = a[i];\nint j = i - 1;\nwhile (j >= 0 && a[j] > x) {\na[j + 1] = a[j];\nj--;\n}\na[j + 1] = x;\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "这段代码把 a[i] 存到 x，再把前面比 x 大的元素逐个后移，最后把 x 插回空位，这是插入排序，而不是选择排序。所以说法错误。它的步骤是后移插入，属于插入排序而非选择排序。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：优先购买\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小 A 有 M 元预算。商店有 N 个商品，每个商品有商品名、价格和优先级三种属性，其中优先级为正整数，且数值越小代表优先级越高。购物策略为：总是优先买优先级最高的商品；如果有多个最高优先级商品，购买价格最低的；如果有多个优先级最高且价格最低的商品，购买商品名字典序最小的。请问小 A 能购买哪些商品。\n输入格式：第一行两个正整数 M、N，代表预算和商品数。之后 N 行，每行一个商品，依次为商品名、价格、优先级。\n输出格式：按照字典序从小到大的顺序，输出所有购买商品的商品名。\n【数据范围】\n1 ≤ N ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：先按（优先级小、价格小、名字字典序小）的顺序对所有商品排序，然后从前往后贪心购买：只要预算够就买，预算减去价格。把买到的商品名收集起来，最后按字典序排序输出。排序用自定义比较函数 cmp。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\n#include <string>\n#include <map>\n#include <assert.h>\nusing namespace std;\nstruct Item {\n    string name;\n    int price;\n    int priority;\n};\nbool cmp(const Item &a, const Item &b) {\n    if (a.priority != b.priority) return a.priority < b.priority;\n    if(a.price != b.price) return a.price < b.price;\n    return a.name < b.name;\n}\nstring s[1005];\nstd::map<string, int> mp;\nint main(){\n    int M, N;\n    cin >> M >> N;\n    Item items[N];\n    for (int i = 0; i < N; ++i) {\n        cin >> items[i].name >> items[i].price >> items[i].priority;\n        assert(mp.find(items[i].name) == mp.end());\n        mp[items[i].name] = items[i].priority;\n    }\n    sort(items, items + N, cmp);\n    int budget = M;\n    int count = 0;\n    for (int i = 0; i < N; ++i) {\n        if (items[i].price <= budget) {\n            budget -= items[i].price;\n            s[count++] = items[i].name;\n        }\n    }\n    sort(s, s + count);\n    for (int i = 0; i < count; ++i) {\n        cout << s[i] << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "20 4\napple 6 8\nbus 15 1\ncab 1 10\nwater 4 8\n",
              "expectedOutput": "bus\ncab\nwater"
            }
          ]
        },
        {
          "id": "l4_202603_11",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码试图把数组按升序进行“插入排序”，横线处应填写（ ）。\nvoid ins(int a[], int n){\nfor(int i = 1; i < n; i++){\nint key = a[i];\nint j = i-1;\nwhile(j >= 0 && __________){\na[j+1] = a[j];\nj--;\n}\na[j+1] = key;\n}\n}",
          "options": [
            "a[j] < key",
            "a[j] > key",
            "a[j+1] > key",
            "a[j] == key"
          ],
          "answer": 1,
          "explanation": "升序插入排序要把比 key 大的元素往后移，为 key 腾出位置，所以循环条件是 a[j] > key，直到前面的元素都不大于 key 为止。比 key 大的元素后移，循环结束后 key 落在正确位置。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_15",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下列函数实现排行榜中单个元素的位置调整（类似插入排序的相邻搬移）。当某玩家分数增加，需将其向前移动时，while 循环的条件应为（ ）。\nstruct Player{ int score; };\nvoid up(Player players[], int n, int idx){\nPlayer cur = players[idx];\nint i = idx;\nwhile( ____________________ ){\nplayers[i] = players[i-1];\ni--;\n}\nplayers[i] = cur;\n}",
          "options": [
            "i > 0 && cur.score > players[i-1].score",
            "i > 0 && cur.score < players[i-1].score",
            "i < n-1 && cur.score > players[i+1].score",
            "i < n-1 && cur.score < players[i+1].score"
          ],
          "answer": 0,
          "explanation": "分数增加要往前（更小下标）搬，只要前一个元素的分数比当前低，就继续把前面的元素后移。条件是 i > 0（不越界）且 cur.score > players[i-1].score。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：礼盒排序\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：商店推出了许多礼盒，每个礼盒中包含 k 件商品，每件商品都有一个价格。现在需要对礼盒排序，规则如下：1. 先按礼盒总价格从小到大排序；2. 如果总价格相同，按礼盒中最贵商品的价格从小到大排序；3. 如果仍然相同，按礼盒中最便宜商品的价格从小到大排序；4. 如果仍然相同，按礼盒编号从小到大排序。请输出排序后的礼盒编号。\n输入格式：第一行包含两个整数 n 和 k，分别表示礼盒数量和每个礼盒中商品的数量。接下来 n 行，每行包含 k 个整数，第 i 行表示第 i 个礼盒中各商品的价格。\n输出格式：输出一行，包含排序后的礼盒编号（编号从 1 开始），用空格分隔。",
          "options": [],
          "answer": null,
          "explanation": "思路：为每个礼盒记录总价 sum、最贵 mx、最便宜 mn 和编号 id。读入时同时统计这些值，然后用自定义比较函数 cmp 按题目给的四个优先级排序，最后输出排序后的编号。用 sort 加结构体即可。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nstruct Combo {\n    int sum, mx, mn, id;\n};\nbool cmp(const Combo &a, const Combo &b) {\n    if (a.sum != b.sum) return a.sum < b.sum;\n    if (a.mx != b.mx) return a.mx < b.mx;\n    if (a.mn != b.mn) return a.mn < b.mn;\n    return a.id < b.id;\n}\nint main() {\n    int n, k;\n    cin >> n >> k;\n    vector<Combo> v(n);\n    for (int i = 0; i < n; i++) {\n        v[i].sum = 0;\n        v[i].mx = -1;\n        v[i].mn = 1e9;\n        v[i].id = i + 1;\n        for (int j = 0; j < k; j++) {\n            int x;\n            cin >> x;\n            v[i].sum += x;\n            v[i].mx = max(v[i].mx, x);\n            v[i].mn = min(v[i].mn, x);\n        }\n    }\n    sort(v.begin(), v.end(), cmp);\n    for (int i = 0; i < n; i++) {\n        cout << v[i].id;\n        if (i + 1 < n) cout << \" \";\n    }\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 3\n3 5 2\n4 1 5\n2 2 4\n3 4 3\n",
              "expectedOutput": "3 4 2 1"
            }
          ]
        },
        {
          "id": "l4_202606_14",
          "kp": "kp4_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码使用某种排序算法，将数组中的元素按从小到大排序。这段代码使用的排序算法是（  ）。\nvoid mystery_sort(double arr[], int n) {\nfor (int i = 0; i < n - 1; i++) {\nint minPos = i;\nfor (int j = i + 1; j < n; j++) {\nif (arr[j] < arr[minPos]) {\nminPos = j;\n}\n}\ndouble temp = arr[i];\narr[i] = arr[minPos];\narr[minPos] = temp;\n}\n}",
          "options": [
            "冒泡排序",
            "插入排序",
            "选择排序",
            "非典型排序"
          ],
          "answer": 2,
          "explanation": "每一轮在剩余元素中找最小值下标 minPos，然后与当前位置交换，这正是选择排序的特征。冒泡是相邻交换，插入是逐步前插。每轮选最小值交换是选择排序的标志，故选 C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_27",
          "kp": "kp4_09",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：身高体重指数\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：一个人的身高体重指数（BMI）等于其体重（千克为单位）除以其身高（米为单位）的平方。现在有 n 个小朋友，第 i 个小朋友的编号为 i，体重为 w[i]，身高为 h[i]。请按照身高体重指数从高到低为小朋友们排序，数据保证不存在两个小朋友的身高体重指数完全相同。输出排序后小朋友的编号。\n输入格式：输入 n+1 行，第一行为一个正整数 n，表示小朋友个数；第二行为 n 个整数 w[i] 表示体重，单位为 kg；第三行为 n 个浮点数 h[i] 表示身高，单位为 m。\n输出格式：输出一行 n 个数，表示按照身高体重指数从高到低排序后的编号。\n【数据范围】\n1 ≤ n ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：用结构体存每个小朋友的编号、体重、身高。用冒泡排序（或 sort 加比较函数）按 BMI 从高到低排列，BMI 用 w / h / h 计算（注意转成 double）。排序完成后依次输出编号。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nstruct Human {\n    int id;\n    int w;\n    double h;\n} humans[1010];\nvoid bubble_sort(int n) {\n    for (int i = 0; i < n; ++i) {\n        for (int j = 1; j < n - i; ++j) {\n            double bmi1 = (double)humans[j-1].w / humans[j-1].h / humans[j-1].h;\n            double bmi2 = (double)humans[j].w / humans[j].h / humans[j].h;\n            if (bmi1 < bmi2)\n                swap(humans[j - 1], humans[j]);\n        }\n    }\n}\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; ++i)\n        humans[i].id = i + 1;\n    for (int i = 0; i < n; ++i)\n        cin >> humans[i].w;\n    for (int i = 0; i < n; ++i)\n        cin >> humans[i].h;\n    bubble_sort(n);\n    for (int i = 0; i < n; ++i)\n        cout << humans[i].id << ' ';\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n45 33 39\n1.55 1.33 1.44\n",
              "expectedOutput": "3 1 2"
            }
          ]
        }
      ]
    },
    "kp4_10": {
      "title": "算法复杂度",
      "questions": [
        {
          "id": "l4_202309_03",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "对包含 n 个元素的数组进行冒泡排序，平均时间复杂度一般为（ ）。",
          "options": [
            "A. O(n)",
            "B. O(n log n)",
            "C. O(n^2)",
            "D. 以上都不正确"
          ],
          "answer": 2,
          "explanation": "冒泡排序是两层循环：外层 n-1 趟，内层逐对比较交换，平均要做约 n²/2 次比较，时间复杂度为 O(n²)，选 C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_17",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "对 N 个元素的数组执行插入排序算法，通常的时间复杂度是 O(N^2)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "插入排序每插入一个元素平均要移动约一半已有元素，两层循环嵌套，平均时间复杂度是 O(N²)，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_17",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "用递归法求 n 的阶乘，时间复杂度是 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归求阶乘：f(n)=n*f(n-1)，每次递归调用规模减 1，共递归 n 次，每次做常数运算，总时间复杂度 O(n)，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_09",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "插入排序在最好情况下的时间复杂度是（  ）。",
          "options": [
            "O(1)",
            "O(N/2)",
            "O(N)",
            "O(N^2)"
          ],
          "answer": 2,
          "explanation": "最好情况是数组已经有序，插入排序每轮只要把新元素和前一个元素比较一次就能确定位置，总共约 n 次比较，所以时间复杂度为 O(N)。数组有序时每轮只需一次比较，不需要移动元素，效率最高。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_25",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序算法中，平均时间复杂度是 O(n^2)，最坏的情况逆序情况下，达到最大时间复杂度。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "插入排序的平均和最坏（逆序）时间复杂度都是 O(n²)，逆序时每个元素都要一路移到最前面，比较和移动次数达到最大，所以说法正确。逆序是最坏情形，比较和移动次数都达到 O(n²) 级别。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_12",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题算法的时间复杂度为（  ）。",
          "options": [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(1)"
          ],
          "answer": 0,
          "explanation": "上一题是冒泡排序，外层循环执行 n 次，内层循环平均执行 n/2 次，总比较次数约 n²/2，忽略常数系数后时间复杂度为 O(n²)。内外两层循环嵌套，是最常见的 O(n²) 结构。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_22",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序的时间复杂度总是比冒泡排序低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "插入排序和冒泡排序的平均、最坏时间复杂度都是 O(n²)，并不总是插入排序更低。只有在数据基本有序时，插入排序才明显比冒泡排序快，所以说法错误。两者最坏都是 O(n²)，说插入总是更低是不对的。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_12",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下代码，其时间复杂度为（  ）。\nint cellRecur(int n) {\nif (n == 1) return 1;\nreturn cellRecur(n - 1) + cellRecur(n - 1) + 1;\n}",
          "options": [
            "O(n)",
            "O(2^n)",
            "O(n log n)",
            "O(n^2)"
          ],
          "answer": 1,
          "explanation": "每次调用 cellRecur(n) 都会展开成两个规模为 n-1 的调用，递推式为 T(n)=2T(n-1)+1，解得 T(n)=2^n-1，所以时间复杂度为 O(2^n)。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_21",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "某算法的递推关系式为 T(n)=T(n-1)+n（n 为正整数）及 T(0)=1，则该算法的时间复杂度为 O(n^2)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "把递推式逐步展开：T(n)=T(0)+1+2+…+n=1+n(n+1)/2，主项是 n² 级，因此该算法的时间复杂度为 O(n²)，与题目说法一致。等差数列求和得 n(n+1)/2，故主项是 n²。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_22",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序的平均时间复杂度为 O(n^2)，但最优情况下为 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "加了标志位优化的冒泡排序，平均和最坏情况都是 O(n²)，但当数组已经有序时，第一趟扫描没有任何交换，可以提前结束，最好情况是 O(n)，所以说法正确。最好 O(n)、平均最坏 O(n²)，是冒泡排序的完整复杂度画像。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_11",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下算法，其时间复杂度为（  ）。\nbool f(int arr[], int n, int target) {\nfor (int i = 0; i < (1 << n); i++) {\nint sum = 0;\nfor (int j = 0; j < n; j++) {\nif (i & (1 << j)) sum += arr[j];\n}\nif (sum == target) return true;\n}\nreturn false;\n}",
          "options": [
            "O(n^2)",
            "O(n x 2^n)",
            "O(1)",
            "O(n^3)"
          ],
          "answer": 1,
          "explanation": "外层循环枚举 2^n 种子集（i 从 0 到 2^n-1），内层每次检查 n 位判断是否取该元素，总操作次数约为 n×2^n，所以时间复杂度为 O(n×2^n)。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_22",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "考虑最坏情况下冒泡排序算法的时间复杂度，T(n) 为待排序数字数目为 n 的复杂度，则其递推关系式为 T(n)=T(n-1)+n，T(0)=1。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序每一趟把 n 个元素中最大的冒泡到位，需要约 n 次比较，剩余 n-1 个元素继续，故 T(n)=T(n-1)+n，展开为 O(n²)，说法正确。该递推式展开即为等差数列求和，结果是 O(n²)。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_23",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序在最好情况（已有序）下的时间复杂度是 O(n^2)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "插入排序在数组已有序时，每个元素只和前一个元素比较一次即可确定位置，总共约 n 次操作，最好情况是 O(n)，不是 O(n²)，所以说法错误。有序时每轮比较一次即可，时间复杂度降为 O(n)。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_11",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下算法，其时间复杂度为（  ）。\nbool f(int arr[], int n, int target) {\nfor (int i = 0; i < n; i++) {\nint sum = 0;\nfor (int j = 0; j < n; j++) {\nif (i & (1 << j)) sum += arr[j];\n}\nif (sum == target) return true;\n}\nreturn false;\n}",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(2ⁿ)"
          ],
          "answer": 1,
          "explanation": "外层循环执行 n 次，内层循环也执行 n 次，两层循环嵌套，总共约 n×n 次基本操作，所以时间复杂度是 O(n²)。注意内层的位运算只是常数时间，不改变量级。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_12",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下述斐波那契数列计算的时间复杂度是（   ）。\nint fibonacci(int n) {\nif (n == 0) return 0;\nif (n == 1) return 1;\nreturn fibonacci(n - 1) + fibonacci(n - 2);\n}",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n log n)",
            "O(2ⁿ)"
          ],
          "answer": 3,
          "explanation": "每次调用会递归产生两个子调用，形成一棵近似满二叉树，节点数约为 2ⁿ 个，所以朴素递归求斐波那契的时间复杂度是 O(2ⁿ)。用递推循环可以把复杂度降到 O(n)。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_12",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "关于插入排序的时间复杂度，下列说法正确的是（   ）。",
          "options": [
            "最好情况和最坏情况的时间复杂度都是 O(n)",
            "最好情况是 O(n)，最坏情况是 O(n²)",
            "最好情况是 O(n²)，最坏情况是 O(n)",
            "最好情况和最坏情况的时间复杂度都是 O(n²)"
          ],
          "answer": 1,
          "explanation": "插入排序在数组已经有序时每轮只需比较一次，总比较次数约 n，最好 O(n)；在逆序时每轮要搬移很多元素，最坏 O(n²)。所以选 B。最好与最坏差别很大，选 B 符合插入排序的真实表现。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_14",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "假设有一个班级的成绩单，存储在一个长度为 n 的数组 scores 中，每个元素是一个学生的分数。老师想要找出 所有满足 scores[i] + scores[j] + scores[k] == 300 的三元组，其中 i < j < k。下面代码实现该功能，请问其时间复杂度是（   ）。\nint cnt = 0;\nfor (int i = 0; i < n; i++)\nfor (int j = i + 1; j < n; j++)\nfor (int k = j + 1; k < n; k++)\nif (scores[i] + scores[j] + scores[k] == 300) cnt++;",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(2ⁿ)"
          ],
          "answer": 2,
          "explanation": "代码有三层循环，分别枚举 i、j、k，每层都到 n，嵌套后总操作次数约 n³ 量级，所以时间复杂度是 O(n³)。数循环层数就能快速判断时间复杂度，三层就是三次方。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_13",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下算法，其时间复杂度为（  ）。\nbool f(int arr[], int n, int target) {\nfor (int i = 0; i < n; i++) {\nint sum = 0;\nfor (int j = 0; j < n; j++) {\nif (i & (1 << j)) sum += arr[j];\n}\nif (sum == target) return true;\n}\nreturn false;\n}",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(2ⁿ)"
          ],
          "answer": 1,
          "explanation": "外层循环 n 次、内层循环 n 次，两层嵌套，总操作约 n×n 次，所以时间复杂度是 O(n²)。位运算本身是常数时间。双层循环嵌套就是 O(n²)，注意区分内层是否为常数时间。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_12",
          "kp": "kp4_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码段的时间复杂度为（ ）。\nint cnt=0;\nfor(int i=0; i<n; i++){\nfor(int j=0; j<n; j++){\nif( (i+j) % 3 == 0) cnt++;\n}\n}",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(n³)"
          ],
          "answer": 2,
          "explanation": "外层循环 n 次，内层循环 n 次，共执行约 n×n 次，if 判断是常数时间，不影响量级，所以时间复杂度是 O(n²)。双重循环嵌套是 O(n²) 的典型标志，if 只是常数判断。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_24",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "由于选择排序和插入排序的时间复杂度均为 O(n²) ，在任何实际场景下两者的性能表现几乎相同，可以互相替代。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两者虽然最坏时间复杂度都是 O(n²)，但交换次数、稳定性、最好情况表现等不同，例如插入排序在数据近乎有序时是 O(n)，选择排序固定 O(n²)，所以不能完全互相替代。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_20",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "如果使用带 flag 的冒泡排序，且待排序数组一开始就是有序的，那么算法只需一轮扫描即可结束，时间复杂度为 O(n) 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "带 flag 的冒泡排序若第一轮没有发生任何交换，说明数组已有序，直接退出，只扫描一遍，最好情况时间复杂度是 O(n)。说法正确。一轮无交换即结束，最好情况只需扫描一遍。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_22",
          "kp": "kp4_10",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码的时间复杂度是 O(n) 。\nint cnt = 0;\nfor (int i = 1; i <= n; i++) {\nfor (int j = 1; j <= i; j++) {\ncnt++;\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "内层循环次数随 i 变化，共执行 1+2+…+n = n(n+1)/2 次操作，数量级是 O(n²)，而不是题述的 O(n)。题述时间复杂度与代码不符，说法错误。（注：PDF 中复杂度公式为图片，按代码执行次数判定为 O(n²)。）",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_11": {
      "title": "文件读写",
      "questions": [
        {
          "id": "l4_202306_25",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "由于文件重定向操作，程序员在使用 C++ 语言编写程序时无法确定通过 cout 输出的内容是否会被输出到屏幕上。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "文件重定向会把标准输出指向文件而不是屏幕（如程序运行命令加了重定向符）。是否重定向由使用者决定，程序员无法确定，所以说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_25",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "通过使用文件重定向操作，可以将程序中输出到 cout 的内容输出到文件中，这是常用的记录程序运行日志的方法之一。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在运行命令中把标准输出重定向到文件，程序里 cout 的内容就会写入该文件，常用来保存程序运行日志，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_10",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 C++ 代码执行后生成的文件其字节数为（ ）。\n```cpp\nofstream fout;\nfout.open(\"1.txt\");\nfor(int i=1;i<=10;i++)\n{\nif(i%5==0)\n{\nint x=6;\nfout<<x;\n}\nelse\n{\nchar ch='A';\nfout<<ch;\n}\n}\n```",
          "options": [
            "A. 10",
            "B. 16",
            "C. 40",
            "D. 24"
          ],
          "answer": 0,
          "explanation": "循环 10 次，i=5 和 i=10 时写入字符 '6'（2 个字节），其余 8 次写入字符 'A'（8 个字节），共写入 10 个字符，文件大小 10 字节，选 A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_19",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "在下面的 C++ 代码中，将对 1.txt 文件写入 hello 。( )\n```cpp\nifstream filein;\nofstream fileout;\nfilein.open(\"1.txt\");\nfileout<<\"hello\";\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "代码用 filein.open(\"1.txt\") 是打开文件进行读取，而 fileout 根本没有用 open 打开文件，fileout<<\"hello\" 不会写入任何文件，所以说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202312_20",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "文本文件 1.txt 第 1 行由 01234 共 5 个字符组成其间没有空格，当用 C++ 代码正常打开文件成功并执行如下代码以后，第 1 行长度为 5。（ ）\n```cpp\nifstream filein;\nint buff;\nfilein.open(\"1.txt\");\nfilein>>buff;\ncout<<buff<<endl;\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "filein>>buff 把 \"01234\" 当作整数读入 int 变量，输出的是整数 1234，而不是第 1 行的长度 5，所以说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_11",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "如果文件 1.txt 中的内容为 50 2024 3.16 I love GESP!，执行下面C++代码时，注释了####那行代码所输出的 x 的值为（  ）。\nifstream fin; string line; int x;\nfin.open(\"1.txt\",ios::in);\nfor (int i=0; i<2; i++){ fin >> line; cout << line << endl; }\nfin>>x;\ncout << x << endl; //####",
          "options": [
            "5",
            "2024",
            "3",
            "0"
          ],
          "answer": 2,
          "explanation": "前两次 >> 读到\"50\"和\"2024\"，接下来 fin>>x 按整数读取，遇到\"3.16\"只读走整数部分 3，后面的 \".16\" 留待后续，所以 x=3。用 >> 读整数会在遇到非数字字符处停下来，只取整数部分。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_06",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "C++中，关于文件路径说法错误的是（  ）。",
          "options": [
            "\"GESP.txt\"：指定与当前工作目录中的程序文件相同目录中的 GESP.txt 文件",
            "\"../data/GESP.txt\"：指定与当前工作目录中的程序文件上一级目录下的 data 目录中的 GESP.txt 文件",
            "\"./data/GESP.txt\"：指定与当前工作目录中的程序文件同级目录下的 data 目录中的 GESP.txt 文件",
            "\"GESP.txt\"是绝对路径"
          ],
          "answer": 3,
          "explanation": "GESP.txt 没有以盘符或斜杠开头，是相对路径（相对当前工作目录），不是绝对路径。A、B、C 对相对路径的描述都正确，只有 D 错误。绝对路径通常以盘符或根目录开头，与当前目录无关。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_14",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨用文件重定向实现在 log.txt 文件中输出日志，则下面横线上应填写（  ）。\n<pre><code>int main() {\nofstream log_file(\"log.txt\");\nstreambuf* original_cout = cout.rdbuf();\ncout.rdbuf(log_file.rdbuf());\n________  // 在此处填入代码\ncout.rdbuf(original_cout);\n}</code></pre>",
          "options": [
            "cout << \"This output will go to the log file.\" << endl;",
            "log_file << \"This output will go to the log file.\" << endl;",
            "cout >> \"This output will go to the log file.\" >> endl;",
            "log_file >> \"This output will go to the log file.\" >> endl;"
          ],
          "answer": 0,
          "explanation": "已把 cout 的输出流缓冲区指向 log_file，此后 cout 的输出都会写入文件。横线处应照常用 cout << 输出语句，这样内容就重定向到 log.txt 了。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_14",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪种方式不能实现将字符串\"Welcome to GESP!\"输出重定向到文件 log.txt（  ）。",
          "options": [
            "freopen(\"log.txt\", \"w\", stdout);\ncout << \"Welcome to GESP!\" << endl;\nfclose(stdout);",
            "std::ofstream outFile(\"log.txt\");\noutFile << \"Welcome to GESP!\" << endl;\noutFile.close();",
            "std::ofstream outFile(\"log.txt\");\ncout << \"Welcome to GESP!\" << endl;\noutFile.close();",
            "ofstream log_file(\"log.txt\");\nstreambuf* org_cout = cout.rdbuf();\ncout.rdbuf(log_file.rdbuf());\ncout << \"Welcome to GESP!\" << endl;\ncout.rdbuf(org_cout);"
          ],
          "answer": 2,
          "explanation": "C 打开文件后却用 cout 输出，cout 仍输出到屏幕，文件里什么都没有，所以不能实现重定向。A 用 freopen、B 直接用文件流、D 用 rdbuf 替换缓冲区都能把内容写进文件。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_15",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪种方式不能实现将字符串\"Happy Spring!\"输出重定向到文件 log.txt（  ）。",
          "options": [
            "freopen(\"log.txt\", \"w\", stdout);\ncout << \"Happy Spring!\" << endl;\nfclose(stdout);",
            "std::ofstream outFile(\"log.txt\");\noutFile << \"Happy Spring!\" << endl;\noutFile.close();",
            "std::ofstream outFile(\"log.txt\");\ncout << \"Happy Spring!\" << endl;\noutFile.close();",
            "ofstream log_file(\"log.txt\");\nstreambuf* org_cout = cout.rdbuf();\ncout.rdbuf(log_file.rdbuf());\ncout << \"Happy Spring!\" << endl;\ncout.rdbuf(org_cout);"
          ],
          "answer": 2,
          "explanation": "C 虽然打开了 log.txt，却仍用 cout 输出，cout 的输出跑到屏幕而不是文件，所以不能实现重定向。A、B、D 都能把内容写入 log.txt。cout 的输出目标是当前标准输出流，打开文件并不改变它。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_13",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下面 C++ 程序的描述，（    ）最准确。\nifstream in(\"data.txt\");\nstring line;\nwhile (getline(in, line)) {\ncout << line << endl;\n}",
          "options": [
            "将从标准输入读取每行，并输出到屏幕",
            "程序无法运行，因为 getline 只能读取 cin",
            "将 data.txt 中的每一行读取并输出到屏幕",
            "程序将创建 data.txt 并写入默认文本"
          ],
          "answer": 2,
          "explanation": "ifstream in(\"data.txt\") 是打开文件来读，getline(in, line) 每次从文件流 in 中读一整行，while 循环读到最后，把每一行输出到屏幕。getline 可以配合任意输入流，不只 cin。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_25",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码实现将 Hello 写入 data.txt 。\nofstream out(\"data.txt\");\nout << \"Hello\";\nout.close();",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "ofstream out(\"data.txt\") 打开文件准备写入，out << \"Hello\" 把内容写入文件，最后 close 关闭，代码正确地把 Hello 写入 data.txt。说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_25",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码将 Hello 写入文件 data.txt 。\nofstream file(\"data.txt\");\ncout << \"Hello\" << endl;\nfile.close();",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "代码打开了文件 data.txt，但输出用的是 cout（屏幕），并没有用 file 流写入，所以 Hello 被输出到屏幕而不是文件。说法错误。想写入文件必须用文件流对象，而不能用 cout。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_14",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面 C++ 程序，会输出（    ）。\n<pre><code>int main() {\nofstream fout(\"test.txt\");\nfout << \"Happy\" << endl;\nfout << \"New Year\";\nfout.close();\nifstream fin(\"test.txt\");\nstring s1, s2;\nfin >> s1;\ngetline(fin, s2);\nfin.close();\ncout << s1 << \"|\" << s2;\nreturn 0;\n}</code></pre>",
          "options": [
            "Happy|New Year",
            "Happy| New Year",
            "HappyNew Year|",
            "Happy|"
          ],
          "answer": 3,
          "explanation": "文件内容是 Happy\\nNew Year。fin >> s1 读到 Happy 后停在第 1 行行尾的换行符前，getline 再读本行剩余内容得到空字符串。所以输出 Happy|。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_25",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面代码会输出 100 。\n<pre><code>int main() {\nofstream fout(\"data.txt\");\nfout << 10 << \" \" << 20 << endl;\nfout << 30 << \" \" << 40;\nfout.close();\nifstream fin(\"data.txt\");\nint a, b, c, d;\nfin >> a >> b >> c >> d;\nfin.close();\ncout << a + b + c + d;\nreturn 0;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "程序把 10 20 30 40 写入文件，再依次读回 a、b、c、d，求和 10+20+30+40=100，输出 100。说法正确。先写入再读回，四数求和为 100，输出正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_13",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪种方式不能实现将字符串 Welcome to 2026! 输出重定向到文件 log.txt （  ）。",
          "options": [
            "freopen(\"log.txt\", \"w\", stdout); cout << \"Welcome to 2026!\" << endl; fclose(stdout);",
            "std::ofstream outFile(\"log.txt\"); cout << \"Welcome to 2026!\" << endl; outFile.close();",
            "ofstream log_file(\"log.txt\"); streambuf* org_cout = cout.rdbuf(); cout.rdbuf(log_file.rdbuf()); cout << \"Welcome to 2026!\" << endl; cout.rdbuf(org_cout);",
            "std::ofstream outFile(\"log.txt\"); outFile << \"Welcome to 2026!\" << endl; outFile.close();"
          ],
          "answer": 1,
          "explanation": "B 打开了文件但输出仍用 cout 写到屏幕，并没有把内容重定向进文件。A 用 freopen 重定向标准输出，C 用 rdbuf 切换输出缓冲，D 直接用文件流输出，都能把内容写进 log.txt。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_23",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序能够把 Hello 写入 data.txt 文件中。\nofstream fout(\"data.txt\");\ncout << \"Hello\";\nfout.close();",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "虽然打开了 fout，但输出用的是 cout（写到屏幕），并没有用 fout 写入，所以 Hello 不会进入 data.txt。说法错误。输出应使用 fout 流，用 cout 只能写到屏幕。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_15",
          "kp": "kp4_11",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨正在读取“冒险日志”文件 quest.txt 。若文件内容为 Level 10 ，执行以下程序后输出为（  ）。\nifstream fin(\"quest.txt\");\nstring s;\nint v;\nfin >> s >> v;\ncout << s.length() * v;",
          "options": [
            "50",
            "15",
            "70",
            "5"
          ],
          "answer": 0,
          "explanation": "s 读到字符串 Level，长度为 5；v 读到整数 10。5×10=50，输出 50。用提取运算符读字符串和整数，再求长度与数值的乘积。Level 共 5 个字符，乘上数值 10 得到 50，故选 A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_23",
          "kp": "kp4_11",
          "type": "judge",
          "difficulty": 1,
          "question": "假设文件 output.txt 能正常打开，下面代码通过 rdbuf 将 cout 的输出重定向到了文件中。\nofstream fout(\"output.txt\");\nstreambuf* old_buf = cout.rdbuf();\ncout.rdbuf(fout.rdbuf());\ncout << \"GESP Exam\";\ncout.rdbuf(old_buf);",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cout.rdbuf(fout.rdbuf()) 把 cout 的缓冲区指向文件输出流，此后 cout 的输出会写入 output.txt，最后恢复。确实完成了重定向。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp4_12": {
      "title": "异常处理",
      "questions": [
        {
          "id": "l4_202306_21",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，如果一个函数可能抛出异常，那么一定要在 try 子句里调用这个函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "抛出异常的函数可以正常调用，不一定非要在 try 子句中。若外层调用在 try 中，异常可以向上传播到外层再被捕获处理，所以说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_13",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中异常处理的叙述，正确的是（ ）。",
          "options": [
            "A. 一个 try 子句可以有多个 catch 子句与之对应",
            "B. 如果 try 子句在执行时发生异常，就一定会进入某一个 catch 子句执行",
            "C. 如果 try 子句中没有可能发生异常的语句，会产生编译错误",
            "D. catch 子句处理异常后，会重新执行与之对应的 try 子句"
          ],
          "answer": 0,
          "explanation": "一个 try 后面可以跟多个 catch，分别捕获不同类型的异常，A 正确。发生异常时若没有匹配类型的 catch，异常会继续向上抛出，不一定会进入某个 catch，B 错；catch 执行后不会重跑 try，D 错。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202309_23",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "一个可能抛出异常的函数，调用它的位置没有在 try 子句中，会引起编译错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数可能抛出异常并不要求调用点必须在 try 中，这样的代码能正常编译，只是异常会继续向更上层传播，所以说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l4_202403_22",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中 try 子句里抛出的结构体等类型的异常无法被 catch 捕获。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 允许抛出任意类型的对象，包括结构体和类，catch 也能用对应类型去捕获它们。抛出的结构体异常完全可以被捕获，说无法捕获是错误的。C++ 的异常可以抛出任意类型，捕获类型要与抛出类型对应。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202406_13",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序中，如果输入 10 0 ，会输出（  ）。\n<pre><code>double Division(int a,int b) {\nif (b == 0) throw \"Division by zero condition!\";\nelse return ((double)a/(double)b);\n}\nint main() {\ntry { func(); }\ncatch (const char* errmsg) { cout << errmsg << endl; }\ncatch (const int errmsg) { cout << errmsg << endl; }\n}</code></pre>",
          "options": [
            "Division by zero condition!",
            "0",
            "10",
            "100"
          ],
          "answer": 0,
          "explanation": "输入 10 0 时 Division 的除数为 0，抛出字符串常量\"Division by zero condition!\"，它被 catch(const char* errmsg) 捕获并原样输出，所以屏幕上打印这句话。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_15",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面的代码，屏幕上将输出（  ）。\n<pre><code>int divide(int a, int b) {\nif (b == 0) throw runtime_error(\"division by zero error \");\nreturn a / b;\n}\nint main() {\nint x = 10, y = 0;\ntry {\nint result = divide(x, y);\ncout << \"result: \" << result << endl;\n} catch (const runtime_error& e) {\ncout << \"caught an exception: \" << e.what() << endl;\n}\n}</code></pre>",
          "options": [
            "division by zero error result: caught an exception:",
            "result: caught an exception: division by zero error",
            "caught an exception: division by zero error",
            "division by zero error caught an exception: division by zero error"
          ],
          "answer": 2,
          "explanation": "y=0 时 divide 抛出 runtime_error，try 中的赋值被中断，不会执行 result 那行输出，直接跳到 catch，打印\"caught an exception: \"加错误信息，得到 caught an exception: division by zero error。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202409_23",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，如果没有捕获到异常（没有匹配的 catch 块），程序会继续执行而不会终止。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "异常抛出后如果没有匹配的 catch 捕获，会沿着调用链向上传播，最终调用 std::terminate 终止程序，而不是继续执行，所以说法错误。std::terminate 会终止程序，而不是静默继续。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_15",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面的代码，将出现什么情况？（  ）\n<pre><code>double hmean(double a, double b) {\nif (a == -b) throw runtime_error(\"Runtime error occurred\");\nreturn 2.0*a*b/(a + b);\n}\nint main() {\ndouble x = 10, y = -10;\ntry {\nint result = hmean(x, y);\ncout << \"hmean: \" << result << endl;\n} catch (const runtime_error& e) {\ncout << \"Caught: \" << e.what() << endl;\n} catch (...) {\ncout << \"Caught an unknown exception.\" << endl;\n}\n}</code></pre>",
          "options": [
            "屏幕上输出 Caught: Runtime error occurred",
            "屏幕上输出 Caught an unknown exception",
            "程序调用 std::terminate()",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "x=10、y=-10 时 a==-b 成立，hmean 抛出 runtime_error(\"Runtime error occurred\")，被第一个 catch(const runtime_error&) 捕获，输出 Caught: Runtime error occurred。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202412_25",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，如果一个函数可能抛出异常，那么一定要在 try 子句里调用这个函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "可能抛异常的函数并不强制在 try 中调用，异常可以沿调用链向上传播，由上层代码或程序默认机制处理。不写 try 完全合法，所以说法错误。是否使用 try-catch 由程序员决定，不是语言强制要求。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_14",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下面的代码，将出现（  ）。\n<pre><code>double hmean(double a, double b) {\nif (a == -b) throw runtime_error(\"Runtime error occurred.\");\nreturn 2.0*a*b/(a + b);\n}\nint main() {\ndouble x = 10, y = -10;\ntry {\nint result = hmean(x, y);\ncout << \"hmean: \" << result << endl;\n} catch (const runtime_error& e) {\ncout << \"Caught: \" << e.what() << endl;\n} catch (...) {\ncout << \"Caught an unknown exception.\" << endl;\n}\n}</code></pre>",
          "options": [
            "屏幕上输出 Caught: Runtime error occurred.",
            "屏幕上输出 Caught an unknown exception.",
            "程序调用 std::terminate()",
            "编译错误"
          ],
          "answer": 0,
          "explanation": "x=10、y=-10 满足 a==-b，hmean 抛出 runtime_error，被第一个 catch 捕获，输出 Caught: Runtime error occurred.。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202503_25",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "未捕获异常会调用 std::terminate 终止程序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "异常如果没有被任何 catch 捕获，会调用 std::terminate 终止程序运行，这正是 C++ 异常处理的默认行为，所以说法正确。std::terminate 是程序无法处理异常时的最终措施。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_14",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，异常处理机制（try-catch块）的主要目的是(  )。",
          "options": [
            "提高程序的运行速度。",
            "在程序发生运行时错误时，提供一种结构化的错误处理方式。",
            "确保程序在编译时没有错误。",
            "减少程序的内存占用。"
          ],
          "answer": 1,
          "explanation": "try-catch 用于捕获和处理运行时错误（如除零、越界），让程序能结构化地应对异常而不是直接崩溃。它既不加速也不省内存，更管不到编译错误。它的作用是让异常能被结构化地处理，让程序更健壮。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202506_24",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "如果一个异常在 try 块中抛出但没有任何 catch 匹配，它将在编译时报错。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "没有匹配的 catch 时不会在编译阶段报错，而是在运行时调用 std::terminate 导致程序终止。所以这是运行时错误而不是编译错误，说法错误。无匹配 catch 是运行时终止，不是编译期错误，注意区分。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_15",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "关于异常处理，以下说法错误的是（   ）。",
          "options": [
            "try 块中的代码可能会抛出异常",
            "catch 块可以有多个，处理不同类型的异常",
            "throw 语句用于抛出异常",
            "所有异常都必须被捕获，否则程序会崩溃"
          ],
          "answer": 3,
          "explanation": "异常并不强制必须捕获，抛出的异常若没有对应 catch 匹配，程序会终止（调用 std::terminate）。所以'所有异常都必须被捕获'的说法不准确，D 错误。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202509_24",
          "kp": "kp4_12",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码只能捕获int 类型异常。\n<pre><code>int main() {\ntry {\nthrow 42;\n} catch (...) {\ncout << \"Caught\" << endl;\n}\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "catch (...) 是省略号形式，能捕获所有类型的异常，不只 int。所以'只能捕获 int 类型异常'的说法错误。catch(...) 能接住一切异常，不能只捕获 int 的说法不对。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202512_15",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码，会输出(  )。\n<pre><code>int divide(int a, int b) {\nif(b == 0) throw \"Division by zero\";\nreturn a / b;\n}\nint main() {\nint result = 0;\ntry {\nresult = divide(10, 0);\ncout << \"A\";\n}\ncatch(const char* msg) {\ncout << \"B\";\nresult = -1;\n}\ncout << result;\nreturn 0;\n}</code></pre>",
          "options": [
            "A0",
            "B-1",
            "A10",
            "程序崩溃"
          ],
          "answer": 1,
          "explanation": "divide(10,0) 抛出 const char* 类型的字符串，被 catch(const char*) 捕获，输出 B，并把 result 置为 -1，最后输出 -1，所以结果是 B-1。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202603_14",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面程序，输出结果是（ ）。\n<pre><code>int divi(int a,int b){\nif(b==0) throw 0;\nreturn a/b;\n}\nint main(){\ntry{\ncout << divi(10,0);\n}catch(const char* msg){\ncout << \"A\";\n}catch(int){\ncout << \"B\";\n}\n}</code></pre>",
          "options": [
            "A",
            "B",
            "程序崩溃",
            "无输出"
          ],
          "answer": 1,
          "explanation": "divi(10,0) 抛出整数 0。第一个 catch 期望 const char* 类型，不匹配；第二个 catch(int) 能匹配整数，输出 B。异常类型必须与 catch 参数类型匹配，int 由第二个 catch 处理。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l4_202606_13",
          "kp": "kp4_12",
          "type": "choice",
          "difficulty": 1,
          "question": "在“模拟实验室”程序中，为了防止除以 0 导致崩溃，小杨使用了异常处理机制。执行以下代码将输出（  ）。\ntry {\nint x = 10, y = 0;\nif (y == 0) throw \"Zero Error\";\ncout << x / y;\n} catch (int e) {\ncout << \"Error Code: \" << e;\n} catch (const char* msg) {\ncout << \"Caught: \" << msg;\n}",
          "options": [
            "0",
            "Error Code: 0",
            "Caught: Zero Error",
            "程序直接崩溃"
          ],
          "answer": 2,
          "explanation": "y==0 时 throw \"Zero Error\" 抛出 const char* 类型的字符串。第一个 catch(int) 不匹配，第二个 catch(const char*) 匹配，输出 Caught: Zero Error。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    }
  },
  "mockExam": [],
  "realExam": []
};

if (typeof module !== 'undefined') module.exports = QUESTION_BANK;
