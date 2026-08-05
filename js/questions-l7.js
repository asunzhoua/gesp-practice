const QUESTION_BANK = {
  "knowledgePoints": {
    "kp7_01": {
      "title": "数学库函数",
      "questions": [
        {
          "id": "l7_202312_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "定义变量 double x，如果下面代码输入为 100，输出最接近（  ）。\n<pre><code>#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() { double x; cin >> x; cout << log10(x) - log2(x); return 0; }</code></pre>",
          "options": [
            "0",
            "-5",
            "-8",
            "8"
          ],
          "answer": 1,
          "explanation": "log10(100) 表示 10 的多少次方等于 100，即 2；log2(100) 表示 2 的多少次方等于 100，因为 2 的 6 次方是 64，所以约等于 6.64。两者相减约为 -4.64，最接近选项 B 的 -5。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 语言中，下列关于关键字 static 的描述不正确的是（  ）。",
          "options": [
            "可以修饰类的成员函数。",
            "常量静态成员可以在类外进行初始化。",
            "若 a 是类 A 的常量静态成员，则 a 的地址都可以访问且唯一。",
            "静态全局对象一定在 main 函数调用前完成初始化，执行完 main 函数后被析构。"
          ],
          "answer": 2,
          "explanation": "static 修饰的成员在内存中只存一份，可被共享访问和修改。选项 C 说常量静态成员的地址都可以访问，这不正确，静态成员不能通过类的实例随便获取其地址访问，所以 C 是错误描述，本题选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨准备参加 GESP 七级考试，其中有关于三角函数的内容，他能够通过下面的代码找到结束循环的角度值。\n<pre><code>while((int)sin(x)!=0)\n{\n    x+=0.001;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码把弧度不断转成 int 判断，虽然数学上 sin 大多数点不为 0，但 int() 截断会在某些 x 处得到 0，从而使循环结束，所以说法正确。这正是利用了浮点转整数时的截断特性。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "若变量 x 为 double 类型正数，则 log(exp(x)) > log10(x)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "log(exp(x)) 就是 x。当 0<x<1 时 log10(x) 为负，x>负数成立；当 x=1 时 log10(1)=0，成立；当 x>1 时 x 的增长远快于 log10(x)，也成立，所以说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_25",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，如果定义了构造函数，则创建对象时先执行完缺省的构造函数，再执行这个定义的构造函数。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "创建对象时最多只会执行一个构造函数，要么调用默认（缺省）构造函数，要么调用自定义构造函数，不会两个都执行，所以说法错误。构造过程不会先执行缺省再执行自定义。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关 C++ 类的说法，错误的是（  ）。",
          "options": [
            "C++ 类对象销毁时，会执行析构函数。",
            "C++ 类可以通过定义构造函数实现自动类型转换。",
            "C++ 类可以通过重载 [] 运算符实现通过给定下标访问数组成员的元素。",
            "C++ 类可以包含任意类型的成员变量。"
          ],
          "answer": 3,
          "explanation": "类不能包含任意类型的成员变量，例如不能包含自身类型的非引用成员（否则无限递归占用），也不能有引用未初始化等限制，选项 D 说法错误，本题选 D。成员类型要满足可构造可存储等要求。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_08",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 x 为 double 类型的变量，且值大于 0，则下列表达式的值一定大于 0 的是(  )。",
          "options": [
            "sin(x) / x",
            "exp(x) - x",
            "log(x) - x",
            "x * x - x"
          ],
          "answer": 1,
          "explanation": "sin(x) 可正可负；exp(x)=1+x+x²÷2+... 对任意 x>0 都大于 x，所以 exp(x)-x 恒大于 0，选项 B 正确。log(x)-x 在 x>1 时为负，x²-x 在 0<x<1 时为负，选 B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "祖冲之是南北朝时期杰出的数学家、天文学家，他首次将圆周率精算到小数第七位，即在 3.1415926 和 3.1415927 之间。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "祖冲之把圆周率精确到 3.1415926 与 3.1415927 之间，是我国古代数学的重要成就，史实正确，说法正确。这是南北朝时期祖冲之对圆周率的重大贡献。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 2 ^ 3 的结果类型为 int、值为 8。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 中 ^ 是按位异或，不是乘方。2 的二进制 10 与 3 的二进制 11 异或得 01，即结果为 1，不是 8，说法错误。要得到 2 的 3 次方必须用 pow 函数或左移。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的正弦函数，表达式 sin(30) 的结果类型为 double、值约为 0.5。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sin 的参数是弧度制，sin(30) 计算的是 30 弧度的正弦，约等于 -0.988，不是 sin 30 度约 0.5，说法错误。C++ 三角函数默认使用弧度，需要角度时要先换算。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_25",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "类 B 继承了抽象类 A，但未实现类 A 中的纯虚函数 f，则类 B 不能直接实例化。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "只要类中还含有未实现的纯虚函数，该类就是抽象类，不能实例化对象。B 未实现 f，仍是抽象类，说法正确。抽象类必须被具体派生类完整实现才能创建对象。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列 C++ 代码的输出结果是（  ）。\n<pre><code>#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() { cout << sin(3.1415926 / 2); return 0; }</code></pre>",
          "options": [
            "0",
            "1",
            "0.5",
            "0.7071"
          ],
          "answer": 1,
          "explanation": "sin(π÷2) 的值就是 1，代码把 3.1415926 除以 2 近似得到 π÷2，调用 sin 后输出约 1，选 B。π 取近似值后结果仍是接近 1 的浮点数。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_08",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，关于运算符 &（按位与），下面说法正确的是（  ）。",
          "options": [
            "2 & 3 的结果是 true",
            "011 & 111 的结果是 3",
            "3 & 6 的结果是 2",
            "110 & 101 的结果是 4"
          ],
          "answer": 2,
          "explanation": "按位与逐位计算：3 的二进制 011 与 6 的二进制 110 相与得 010，即 2，选项 C 正确。2&3=2 不是 true，011&111 按位与得 011 即 3 但前提按二进制理解，110&101=100 即 4 不是本题所选，选 C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 6 & 5 的结果类型为 int、值为 1。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "6 的二进制是 110，5 的二进制是 101，按位与得 100 即 4，不是 1，说法错误。按位与要求对应位都是 1 结果位才是 1。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_18",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "唯一分解定理指出每个大于 1 的自然数都可唯一分解成若干素数的乘积，因此我们可以很容易地对给定自然数 n 进行质因数分解，时间复杂度仅为 O(1)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "唯一分解定理只保证分解存在且唯一，并不保证分解容易。对一般 n 的质因数分解目前没有 O(1) 的简单方法，说法错误。分解容易性需要借助预处理的质数表。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，可以为同一个类定义多个构造函数。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "构造函数支持重载，只要参数列表不同，一个类可以定义多个构造函数，说法正确。多个构造函数让对象能按不同参数初始化，这是 C++ 重载机制的一部分。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的对数函数，表达式 log(128) 的结果类型为 double、值约为 7.0。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "log 默认以 e 为底，ln128 约等于 4.85，不是 7.0（7 是 log2(128)），说法错误。要看以几为底，log 和 log2 的结果完全不同。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知小写字母 b 的 ASCII 码为 98，下列 C++ 代码的输出结果是（  ）。\n<pre><code>char a = 'b';\na++;\ncout << a;</code></pre>",
          "options": [
            "b",
            "c",
            "98",
            "99"
          ],
          "answer": 1,
          "explanation": "字符 'b' 的 ASCII 是 98，执行 a++ 后变成 99，对应字符 'c'，输出字符 c，选 B。字符加一就是在 ASCII 码上加一。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 a 为 int 类型变量，下列表达式不符合语法的是（  ）。",
          "options": [
            "&a + 3",
            "+a & 3",
            "a - - 4",
            "a++3"
          ],
          "answer": 3,
          "explanation": "a++ 是后置自增运算符，后面不能再跟 3 构成 a++3，这是非法语法。&a+3（指针算术）、+a&3、a--4 都能通过编译，选 D。运算符组合必须符合 C++ 的语法规则。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 语言中指针的叙述，不正确的是（  ）。",
          "options": [
            "指针变量中存储的是内存地址。",
            "指针变量指向的内存地址不一定能够合法访问。",
            "结构类型中的指针成员不能指向该结构类型。",
            "定义指针变量时必须指定其指向的类型。"
          ],
          "answer": 2,
          "explanation": "结构体中的指针成员完全可以指向自身这种结构体类型，例如链表节点中 next 指针就指向同类型节点，选项 C 说法错误，本题选 C。这种自引用是链表等结构的实现基础。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 类的说法，错误的是(  )。",
          "options": [
            "将 C++ 类对象通过值传递给函数参数时，会自动调用复制构造函数。",
            "将一个类的对象赋值给该类的另一个对象时，不会自动调用构造函数。",
            "定义 C++ 类对象时，一定会调用默认构造函数。",
            "构造派生类的对象时，一定会调用基类的构造函数。"
          ],
          "answer": 2,
          "explanation": "定义对象时可能调用默认构造，也可能调用带参数的构造函数，并不一定调用默认构造，选项 C 说法错误，本题选 C。用哪种构造取决于定义对象时是否传参。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_11",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>cout << (int)log(8) << endl;</code></pre>",
          "options": [
            "2",
            "3",
            "8",
            "无法通过编译"
          ],
          "answer": 0,
          "explanation": "log(8) 以 e 为底，ln8 约等于 2.08，强制转 int 后截断为 2，输出 2，选 A。注意 log 是自然对数不是以 2 为底。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式 'a' << 1 的结果为 'a'。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'a' 是 ASCII 97，左移 1 位得 194，是一个 int 值，不是字符 'a'，说法错误。字符左移会提升为 int 后参与运算。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，函数可以定义在另一个函数定义之内。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 不允许函数嵌套定义，函数只能定义在命名空间或类作用域内，不能定义在另一个函数体内部，说法错误。这与 Python 等语言不同。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "埃氏筛法和欧拉筛法都是使用筛法思想生成素数表的算法，欧拉筛法的时间复杂度更低。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "埃氏筛复杂度 O(n log log n)，欧拉筛（线性筛）复杂度 O(n)，欧拉筛更低，说法正确。欧拉筛保证每个合数只被筛一次。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的正弦函数，表达式 sin(30) 的结果类型为 double、值约为 0.5。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sin 的参数按弧度计算，sin(30) 是 30 弧度的正弦，约等于 -0.988，不是 0.5，说法错误。若要计算 30 度应写 sin(30*pi/180)。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_24",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用单链表实现队列时，链表头结点作为队首比链表头结点作为队尾更便于操作。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "队首在链表头部时，出队删除头结点是 O(1)；若队首在尾部，出队需要找到倒数第二个结点，操作麻烦，所以头结点作为队首更方便，说法正确。队列操作应尽量都是 O(1)。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知小写字母 b 的 ASCII 码为 98，下列 C++ 代码的输出结果是（  ）。\n<pre><code>char a = 'b';\ncout << a + 1;</code></pre>",
          "options": [
            "b",
            "c",
            "98",
            "99"
          ],
          "answer": 3,
          "explanation": "a+1 中 char 会提升为 int，'b' 的 ASCII 98 加 1 得 99，输出整数 99，选 D。字符参与算术运算会先转成 int。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 a 为 int 类型变量，p 为 int * 类型变量，下列赋值语句不符合语法的是（  ）。",
          "options": [
            "+a = *p;",
            "*p = +a;",
            "a = *(p + a);",
            "*(p + a) = a;"
          ],
          "answer": 0,
          "explanation": "+a 是取正运算的结果，是右值，不能作为赋值语句的左值，所以 +a = *p 不符合语法。其余选项左值都是可写的变量或指针解引用，合法，选 A。左值必须能表示可写存储位置。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知数组 a 的定义 int a[10] = {0};，下列说法不正确的是（  ）。",
          "options": [
            "语句 a[-1] = 0; 会产生编译错误。",
            "数组 a 的所有元素均被初始化为 0。",
            "数组 a 至少占用 10 个 int 大小的内存，一般为 40 个字节。",
            "语句 a[13] = 0; 不会产生编译错误，但会导致难以预测的运行结果。"
          ],
          "answer": 0,
          "explanation": "a[-1] 和 a[13] 都是越界访问，C++ 编译阶段通常不检查数组下标越界，不会产生编译错误，只是运行结果不确定。选项 A 说会产生编译错误是不正确的，本题选 A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 类的说法，错误的是(  )。",
          "options": [
            "构造函数不能声明为虚函数，但析构函数可以。",
            "函数参数如声明为类的引用类型，调用时不会调用该类的复制构造函数。",
            "静态方法属于类、不属于对象，因此不能使用对象.方法(...) 的形式调用静态方法。",
            "析构派生类的对象时，一定会调用基类的析构函数。"
          ],
          "answer": 2,
          "explanation": "静态成员函数属于类，但通过对象访问是允许的，可以使用 对象.方法() 的形式调用，选项 C 说法错误，本题选 C。静态方法虽推荐类名调用，但对象也能调用。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_11",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>cout << (int)exp(2) << endl;</code></pre>",
          "options": [
            "4",
            "7",
            "100",
            "无法通过编译"
          ],
          "answer": 1,
          "explanation": "exp(2) 是 e 的 2 次方，约等于 7.389，强制转 int 截断为 7，输出 7，选 B。exp 函数计算自然指数。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式 5 ^ 3 的结果为 125。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "^ 是按位异或，5 的二进制 101 与 3 的二进制 011 异或得 110 即 6，不是 125，说法错误。异或相同为 0、相异为 1。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，函数定义和函数调用可以不在同一个文件内。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数可以定义在别的源文件中，只要调用前有声明（如头文件中的函数原型），就可以跨文件调用，说法正确。声明与定义分离是 C++ 工程常见做法。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "unsigned long long 类型是 C++ 语言中表达范围最大的非负整数类型之一，其表达范围是 0 到 2^64-1。超出该范围的非负整数运算，将无法使用 C++ 语言进行计算。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "超出 2^64-1 的大整数可以用数组、字符串或高精度库模拟计算，并非无法计算，说法错误。C++ 虽无内置大整数但可自行实现。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的函数，表达式 log2(32) 的结果为 5、类型为 int。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "log2(32) 返回 double 类型，值约为 5.0，类型是 double 而不是 int，说法错误。数学库函数返回值一般是 double。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_21",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 是一种面向对象编程语言，C 则不是。继承是面向对象三大特性之一。因此，使用 C 语言无法实现继承。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C 语言可以通过结构体包含（组合）来模拟继承的效果，实现代码复用，所以说 C 无法实现继承过于绝对，说法错误。组合是模拟继承的常用手段。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列哪个选项是 C++ 中的关键字？",
          "options": [
            "function",
            "class",
            "method",
            "object"
          ],
          "answer": 1,
          "explanation": "class 是 C++ 用于定义类的关键字。function、method、object 都不是 C++ 关键字，选 B。关键字是语言保留的具有特定含义的标识符。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码输出的是（  ）。\n<pre><code>int main(){ int a=5, b=2; cout << (a >> b) << endl; }</code></pre>",
          "options": [
            "1",
            "2",
            "5",
            "10"
          ],
          "answer": 0,
          "explanation": "5 右移 2 位：5 的二进制 101 右移两位得 1，输出 1，选 A。右移相当于整除 2 的 n 次方。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的输出是什么？\n<pre><code>int main(){ int a=10; int *p=&a; int *&q=p; *q=20; cout << a << endl; }</code></pre>",
          "options": [
            "10",
            "20",
            "地址值",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "q 是 p 的引用（指针的引用），*q=20 实际修改了 a 的值，所以 a 变为 20，输出 20，选 B。引用是变量的别名，操作引用就是操作原变量。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码输出的是（  ）。\n<pre><code>int main(){ int arr[5]={1,2,3,4,5}; int *p=arr+2; cout << *p << endl; }</code></pre>",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explanation": "p 指向 arr 下标 2 的元素，即数组中的第 3 个元素 3，*p 输出 3，选 C。数组指针偏移对应下标移动。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_06",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于 C++ 类构造和析构函数的说法，错误的是（  ）。",
          "options": [
            "构造函数不能声明为虚函数。",
            "析构函数必须声明为虚函数。",
            "类的默认构造函数可以被声明为 private。",
            "类的析构函数可以被声明为 private。"
          ],
          "answer": 1,
          "explanation": "只有通过基类指针删除派生类对象时才建议把析构声明为虚函数，并非必须，选项 B 说法错误，本题选 B。虚析构是为了防止内存泄漏的最佳实践而非强制要求。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_08",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在找小于 N 的正整数中有多少个神奇数字：n 满足 n² 可以拆成两段 nl 和 nr，且 nl+nr=n。下面程序横线处应填入的是（  ）。\n<pre><code>for(n=1;n*n<N;n++)\n{\n    n2=n*n;\n    s=to_string(n2);\n    for(i=1;i<s.length();i++)\n    {\n        sl=s.substr(0,i);\n        sr=s.substr(i);\n        nl=stoi(sl);\n        nr=stoi(sr);\n        if(_________)\n            cnt++;\n    }\n}</code></pre>",
          "options": [
            "nl + nr == n",
            "nl + nr == n2",
            "(nl + nr) * (nl + nr) == n",
            "(nl + nr) ^ 2 == n2"
          ],
          "answer": 0,
          "explanation": "神奇数字的定义是拆分后两段之和等于原数 n，所以条件是 nl+nr==n，选 A。题目明确给出 nl+nr 等于 n 这一判定规则。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语法中，表达式 1e6、1000000 和 10^6 的值是相同的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "1e6 是浮点数 1000000，1000000 是整数，但 10^6 中 ^ 是按位异或，10 与 6 异或得 12，三者不同，说法错误。^ 不是乘方运算符。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，函数调用前必须有函数声明或定义。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 要求函数先声明后使用，调用前必须有声明或定义，否则编译报错，说法正确。先声明再使用是 C++ 编译规则。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "long long 类型能表达的数都能使用 double 类型精确表达。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "double 的尾数只有约 53 位，不能精确表示所有 64 位整数，大整数会丢失精度，说法错误。53 位二进制精度小于 64 位整数的范围。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的函数，表达式 cos(60) 的结果类型为 double、值约为 0.5。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "cos 参数按弧度计算，cos(60) 是 60 弧度的余弦，不等于 0.5，说法错误。要用角度需先转弧度。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_23",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "子类对象包含父类的所有成员（包括私有成员）。从父类继承的私有成员也是子类的成员，因此子类可以直接访问。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "父类的私有成员虽然被子类继承、占内存，但子类不能直接访问它们，必须通过父类提供的公有或保护接口，说法错误。私有成员的访问权限是封装的核心。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知小写字母 b 的 ASCII 码为 98，下列 C++ 代码的输出结果是（  ）。\n<pre><code>char a = 'b' ^ 4;\ncout << a;</code></pre>",
          "options": [
            "b",
            "bbbb",
            "f",
            "102"
          ],
          "answer": 2,
          "explanation": "'b' 的 ASCII 是 98，98 与 4 按位异或：98 二进制 1100010 与 0000100 异或得 1100110 即 102，对应字符 'f'，输出 f，选 C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 a 为 int 类型变量，p 为 int * 类型变量，下列赋值语句不符合语法的是（  ）。",
          "options": [
            "*(p + a) = *p;",
            "*(p - a) = a;",
            "p + a = p;",
            "p = p + a;"
          ],
          "answer": 2,
          "explanation": "p+a 是指针算术运算的结果，是右值，不能作为赋值语句左值，所以 p+a = p 不符合语法。其余选项左值都是可写的，选 C。指针算术的结果不能直接赋值。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 类的说法，错误的是(  )。",
          "options": [
            "如需要使用基类的指针释放派生类对象，基类的析构函数应声明为虚析构函数。",
            "构造派生类对象时，只调用派生类的构造函数，不会调用基类的构造函数。",
            "基类和派生类分别实现了同一个虚函数，派生类对象仍能够调用基类的该方法。",
            "如果函数形参为基类指针，调用时可以传入派生类指针作为实参。"
          ],
          "answer": 1,
          "explanation": "构造派生类对象时会先调用基类构造函数再调用派生类构造函数，选项 B 说不会调用基类构造函数是错误的，本题选 B。构造顺序是先基类后派生类。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列 C++ 代码的输出是（  ）。\n<pre><code>int main(){ int arr[5]={2,4,6,8,10}; int *p=arr+2; cout << p[3] << endl; }</code></pre>",
          "options": [
            "6",
            "8",
            "编译出错，无法运行。",
            "不确定，可能发生运行时异常。"
          ],
          "answer": 3,
          "explanation": "p 指向 arr[2]，p[3] 相当于 arr[5]，已越出数组边界，是未定义行为，结果不确定，可能发生运行时异常，选 D。越界访问是典型的未定义行为。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 9 & 12 的结果类型为 int、值为 8。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "9 的二进制 1001 与 12 的二进制 1100 按位与得 1000 即 8，类型为 int，说法正确。按位与逐位计算，都为 1 才得 1。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，指针变量指向的内存地址不一定都能够合法访问。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "指针可以指向任意地址，但很多地址（如野指针、越界地址）不能合法读写，说法正确。指针只存地址，是否可访问取决于指向区域。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一般情况下，long long 类型占用的字节数比 float 类型多。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "long long 通常占 8 字节，float 占 4 字节，8 大于 4，说法正确。long long 是 64 位、float 是 32 位。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的函数，表达式 pow(10, 3) 的结果的值为 1000、类型为 int。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "pow 的返回值类型是 double，虽然数值是 1000，但类型不是 int，说法错误。数学库函数的返回值统一为 double。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_23",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 语言中，类的构造函数和析构函数均可以声明为虚函数。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "构造函数不能声明为虚函数，只有析构函数可以，说法错误。虚函数需要对象已构造完成才能调用，而构造时对象还不完整。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知小写字母 b 的 ASCII 码为 98，下列 C++ 代码的输出结果是（  ）。\n<pre><code>char a = 'b' + 1;\ncout << a;</code></pre>",
          "options": [
            "b",
            "c",
            "98",
            "99"
          ],
          "answer": 1,
          "explanation": "字符 'b' 加 1 后 ASCII 变为 99，对应字符 'c'，cout 按 char 类型输出 c，选 B。字符加整数得到新的字符。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 a 为 int 类型变量，p 为 int * 类型变量，下列表达式不符合语法的是（  ）。",
          "options": [
            "a * a",
            "p * p",
            "a && a",
            "p && p"
          ],
          "answer": 1,
          "explanation": "两个指针相乘没有意义，C++ 不允许对指针做乘法运算，p*p 不符合语法。a*a、a&&a、p&&p（指针转 bool）都合法，选 B。指针只能做加减和比较。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 类的说法，错误的是（  ）。",
          "options": [
            "如果一个类包含纯虚函数，则它不能包含成员变量。",
            "如果一个类包含纯虚函数，则不能用它定义对象。",
            "派生类对象占用的内存总是不小于基类对象。",
            "派生类可以不实现基类的虚函数。"
          ],
          "answer": 0,
          "explanation": "含有纯虚函数的类是抽象类，不能实例化，但完全可以有成员变量，选项 A 说法错误，本题选 A。抽象类可以携带状态数据。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_04",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知数组 a 的定义 int a[10] = {-1};，下列说法不正确的是（  ）。",
          "options": [
            "数组 a 至少占用 10 个 int 大小的内存，一般为 40 个字节。",
            "数组 a 的所有元素均被初始化为 -1。",
            "语句 a[-1] = 0; 不会产生编译错误，但会导致难以预测的运行结果。",
            "语句 a[13] = 0; 不会产生编译错误，但会导致难以预测的运行结果。"
          ],
          "answer": 1,
          "explanation": "int a[10]={-1} 只把第一个元素初始化为 -1，其余元素自动初始化为 0，不是全部为 -1，选项 B 说法错误，本题选 B。部分初始化时其余元素补 0。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 9 && 12 的结果类型为 int、值为 8。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "&& 是逻辑与，只要两边都非 0 结果就是 1（bool/int），不是按位与的 8，说法错误。逻辑与与按位与完全不同。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，在有 int a[10]; 定义的范围内，通过表达式 a[-1] 进行访问将导致编译错误。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组越界（包括负下标）在 C++ 编译阶段通常不报错，属于运行时未定义行为，说法错误。越界访问编译期不检查。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_19",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，float 和 int 类型一般都是 4 字节，因此 float 类型能够表达不同的浮点数值的数量，与 int 类型能够表达不同的整数值的数量是相同的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "float 虽然也占 4 字节，但其位数分为符号位、指数位和尾数位，能精确表示的整数值范围远小于 int，能表达的不同数值数量也不同，说法错误。IEEE 754 浮点格式与整数格式不同。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_20",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的对数函数，表达式 log(256) 的结果类型为 double、值约为 8.0。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "log 以 e 为底，ln256 约等于 5.55，不是 8.0（8 是 log2(256)），说法错误。log 与 log2 的结果不能混用。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_23",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，类的构造函数可以声明为私有（private）。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "构造函数可以被声明为 private，用于单例模式等限制对象创建方式的场景，合法，说法正确。私有构造函数限制外部直接创建对象。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于 C++ 中形参、实参和定义域的说法中，正确的一项是（  ）。",
          "options": [
            "形参是函数定义时所指定的变量，它只在函数内部有效。",
            "在函数内部，可以修改传入的形参的值，即使该形参是一个常量引用。",
            "实参和形参的类型必须完全一致，否则会导致编译错误。",
            "使用指针作为形参时，形参是指向实参的地址，因此对该指针赋值会影响实参。"
          ],
          "answer": 0,
          "explanation": "形参是函数定义时声明的变量，作用域在函数内部，选项 A 正确。常量引用不能修改其值；实参类型可隐式转换不必完全一致；对指针形参本身赋值不会改变实参指针，选 A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_07",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的运行结果为（  ）。\n<pre><code>int query(int n,int*a,int x){ int l=0,r=n; while(l<r){ int mid=l+(r-l)/2; if(a[mid]>=x)r=mid; else l=mid+1; } if(l==n)return -1; return l; } int main(){ int num[]={1,2,2,3,3,4,5,5,6,7}; cout<<query(10,num,3); }</code></pre>",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": 1,
          "explanation": "query 实现 lower_bound：返回第一个不小于 3 的下标。数组 num 中第一个值为 3 的元素在下标 3，所以返回 3，输出 3，选 B。lower_bound 找的是第一个大于等于目标值的位置。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 3 ^ 2 的结果类型为 int，值为 9。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "^ 是按位异或，3(011) 与 2(010) 异或得 1，不是 9，说法错误。异或运算逐位比较，相同为 0 相异为 1。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 cmath 头文件中的正弦函数，表达式 sin(90) 的结果类型为 double，值约为 1.0。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sin 参数是弧度，sin(90) 是 90 弧度的正弦，不等于 1，说法错误。90 度应换算为 π÷2 弧度。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_18",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 strcmp(\"10\", \"9\") 比较两个字符串，返回值大于 0，说明 \"10\" 比 \"9\" 大。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "strcmp 按字典序比较，'1' 的 ASCII 小于 '9'，所以 \"10\" 小于 \"9\"，strcmp 返回负值，说法错误。字典序逐字符比较而不是按数值大小。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于唯一分解定理和素数筛法的说法中，错误的是（  ）。",
          "options": [
            "如果预处理出 N 以内每个数的最小质因子，那么可以在 O(log n) 时间内完成任意一个不超过 N 的整数的质因数分解。",
            "线性筛（欧拉筛）能够保证每个合数只被其最小质因子筛掉一次，这一性质依赖于唯一分解定理。",
            "唯一分解定理保证：若一个数未被任何不超过其平方根的质数筛去，则它一定是质数。",
            "唯一分解定理是埃氏筛时间复杂度为 O(n log log n) 的根本原因。"
          ],
          "answer": 3,
          "explanation": "埃氏筛 O(n log log n) 的复杂度来自筛法的调和级数累加，与唯一分解定理无关，选项 D 说法错误，本题选 D。唯一分解定理保证分解唯一性与筛法复杂度无关。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_14",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于单链表、双链表和循环链表，下列说法正确的是（  ）。",
          "options": [
            "在单链表中，若已知某结点的指针，则可以在 O(1) 时间内删除该结点。",
            "循环链表中一定不存在空指针。",
            "在循环双链表中，尾结点的 next 指针一定为 NULL。",
            "在带头结点的循环单链表中，判定链表是否为空只需判断头结点的 next 是否指向自身。"
          ],
          "answer": 3,
          "explanation": "带头结点的循环单链表为空时，头结点的 next 指向头结点自身，据此即可判断为空，选项 D 正确。单链表已知结点指针但无前驱时无法 O(1) 删除该结点本身，选 D。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 语言中，表达式 4 ^ 2 的结果类型为 int，值为 6。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "4(100) 与 2(010) 按位异或得 110 即 6，类型为 int，说法正确。异或相同为 0 相异为 1。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 中引用可以重新绑定。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "引用一旦初始化绑定到某个对象后就不能再改为绑定其他对象，不能重新绑定，说法错误。引用只能初始化一次，这点与指针不同。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_18",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，若函数形参为引用类型，则在函数内部对该形参的修改会影响对应的实参。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "引用形参是实参的别名，函数内修改引用形参就是修改实参，说法正确。引用传递让函数能直接改写外部变量。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_24",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 math.h 或 cmath 头文件中的函数，表达式 sin(90) 的结果为 1。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sin 参数为弧度，sin(90) 是 90 弧度的正弦，不是 sin 90 度，结果不为 1，说法错误。角度弧度混淆是常见错误。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_01",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列 C++ 代码的输出结果是（  ）。\n<pre><code>cout << (int)(sqrt(50) + log2(8));</code></pre>",
          "options": [
            "9",
            "10",
            "11",
            "12"
          ],
          "answer": 1,
          "explanation": "sqrt(50) 约等于 7.07，log2(8)=3，两者相加约 10.07，强制转 int 截断为 10，输出 10，选 B。先算浮点再取整。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_02",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 <cmath> 或 <math.h> 中的数学库函数的说法，正确的是（  ）。",
          "options": [
            "sqrt(49) 的返回值可以参与浮点运算。",
            "log2(32) 的返回值类型为 int。",
            "pow(2, 5) 的返回值类型一定为 int。",
            "sin(90) 的参数 90 表示 90 度。"
          ],
          "answer": 0,
          "explanation": "sqrt 返回 double，可以继续参与浮点运算，选项 A 正确。log2、pow 都返回 double 而非 int，sin 参数是弧度不是度，选 A。数学库函数返回值统一为 double。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_03",
          "kp": "kp7_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 函数参数传递的说法，正确的是（  ）。",
          "options": [
            "函数形参一定和实参使用同一块内存。",
            "值传递时，在函数内修改形参一定会修改实参。",
            "引用形参绑定到实参后，在函数内修改引用形参通常会影响实参。",
            "指针形参不能用于修改实参指向的数据。"
          ],
          "answer": 2,
          "explanation": "引用形参是实参的别名，函数内修改引用形参就是在修改实参，选项 C 正确。值传递修改形参不影响实参；指针形参可以通过解引用修改实参指向的数据，选 C。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_16",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 cmath 或 math.h 中的三角函数时，角度参数默认采用角度制。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 的三角函数参数采用弧度制而不是角度制，说法错误。弧度制下 π 对应 180 度，sin(π÷2) 才是 1，若要输入角度必须先乘 π÷180 换算，这是使用三角函数时的常见易错点。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_17",
          "kp": "kp7_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用 cmath 或 math.h 中的 pow(2, 10) 计算 2 的 10 次方时，由于参数均为整型 int，返回值类型也为整型 int。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "pow 的返回值类型是 double，即使参数是整数，返回的也是 double，说法错误。pow 是浮点函数。理解 C++ 语法与数学库函数的细节，是避免这类题目出错的关键。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp7_02": {
      "title": "复杂动态规划",
      "questions": [
        {
          "id": "l7_202312_02",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "对于下面的动态规划方法实现的函数（石子合并区间 DP），以下选项中最适合表达其状态转移函数的为（  ）。\n核心代码：\n<pre><code>f[i][j]=min(f[i][k]+f[k+1][j])+s[j]-s[i-1]</code></pre>，k 在 [i,j) 中枚举，f 数组初始为 INF，只有 f[i][i]=0。",
          "options": [
            "f(i,j)=min(f(i,k)+f(k,j))+a(j)",
            "f(i,j)=max(f(i,k)+f(k+1,j))+s(j)-s(i-1)",
            "f(i,j)=min(f(i,k)+f(k+1,j))+a(i)+a(j)（k 不含区间端点）",
            "f(i,j)=min(f(i,k)+f(k+1,j))+s(j)-s(i-1)，k 从 i 到 j-1"
          ],
          "answer": 3,
          "explanation": "代码是区间 DP：s 是前缀和数组，f 初始为正无穷，只有 f[i][i]=0。k 在区间 [i,j) 内枚举分界点，转移方程是 f[i][j]=min(f[i][k]+f[k+1][j])+s[j]-s[i-1]，其中 s[j]-s[i-1] 与 k 无关可单独提出，选项 D 正确。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_03",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码可以用来求最长上升子序列（LIS）的长度，如果输入是：5 1 7 3 5 9，则输出是（  ）。\n<pre><code>cin>>n;\nfor(i=1;i<=n;i++)\n{\n    cin>>a[i];\n    f[i]=1;\n}\nfor(i=1;i<=n;i++)\n    for(j=1;j<i;j++)\n        if(a[j]<a[i])\n            f[i]=max(f[i],f[j]+1);\nfor(i=1;i<=n;i++)\n{\n    ans=max(ans,f[i]);\n    cout<<f[i]<<\" \";\n}\ncout<<ans;</code></pre>",
          "options": [
            "9 7 5 1 1 9",
            "1 2 2 3 4 4",
            "1 3 5 7 9 9",
            "1 1 1 1 1 1"
          ],
          "answer": 1,
          "explanation": "输入 n=5，序列为 1 7 3 5 9。f[i] 表示以 i 结尾的最长上升子序列长度，手算得 f 值依次为 1、2、2、3、4，最终 ans=4，所以先输出 f[1] 到 f[5] 再输出 ans，结果是 1 2 2 3 4 4，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_08",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码段可以求两个字符串 s1 和 s2 的最长公共子串（LCS），下列相关描述不正确的是（  ）。",
          "options": [
            "代码的时间复杂度为 O(n²)",
            "代码的空间复杂度为 O(n²)",
            "空间复杂度已经最优",
            "采用了动态规划求解"
          ],
          "answer": 2,
          "explanation": "代码用双重循环，两层范围分别为两个字符串长度，时间复杂度 O(n²)；用二维 dp 数组，空间 O(n²)。空间还可以用滚动数组优化到 O(n)，所以空间复杂度并非已经最优，选项 C 错误，本题选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_19",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "给定一个数字序列 A1，A2，...，An，要求 i 和 j（1≤i≤j≤n）使 Ai+...+Aj 最大，可以使用动态规划方法来求解。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这是经典的最大子段和问题，设 f[i] 为以 i 结尾的最大子段和，则 f[i]=max(a[i], f[i-1]+a[i])，答案取所有 f[i] 的最大值，是动态规划经典例题，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_23",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划只要推导出状态转移方程，就可以写出递归程序来求出最优解。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "用递归直接求解动态规划会造成大量重复子问题计算，可能导致超时；此外还需要定义状态、初始条件和边界条件，并非只要转移方程就可以，所以说法错误。完整的 DP 还要处理边界和状态定义。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：纸牌游戏\n时间限制：1.0 s  内存限制：128.0 MB\n问题描述：你和小杨各有 3 张牌 0、1、2，按 1 胜 0、2 胜 1、0 胜 2 决胜负，第 i 轮胜者得 2×ai 分，平局各得 ai 分。小杨预先给出全部 n 轮出牌；你从第 2 轮起要么继续出上一轮的牌，要么记一次换牌，共换 t 次额外扣 b1+...+bt 分。求你能获得的最大总分。\n输入：第一行 n；第二行 n 个 ai；第三行 n-1 个 bi；第四行 n 个 ci（小杨出牌）。\n输出：最大总分。\n【数据范围】\n1 ≤ n ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：设 dp[i][j][k] 表示前 i 轮，第 i 轮出牌为 j（0~2），累计换牌 k 次的最大得分。若本轮出牌与上轮相同则直接从 dp[i-1][j][k] 转移；若不同则从 dp[i-1][j'][k-1] 转移并扣 b[k]。每轮分数由 result(j,ci)*ai 决定，最终取 dp[n][j][k] 的最大值。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nconst int max_n = 1005;\nint n;\nint a[max_n], b[max_n], c[max_n];\nint dp[3][max_n];\nint result(int x, int y) {\n    if (x == y + 1 || x == y - 2) return 2;\n    if (x == y) return 1;\n    return 0;\n}\nint main() {\n    ios::sync_with_stdio(false);\n    cin >> n;\n    for (int i = 1; i <= n; ++i) cin >> a[i];\n    for (int i = 1; i < n; ++i) cin >> b[i];\n    for (int i = 1; i <= n; ++i) cin >> c[i];\n    memset(dp, 128, sizeof(dp));\n    for (int k = 0; k < 3; ++k) dp[k][0] = result(k, c[1]) * a[1];\n    for (int i = 2; i <= n; ++i)\n        for (int j = i - 1; j >= 0; --j)\n            for (int k = 0; k < 3; ++k) {\n                int curr_score = result(k, c[i]) * a[i];\n                dp[k][j] = dp[k][j] + curr_score;\n                if (j > 0) {\n                    for (int l = 0; l < 3; ++l)\n                        dp[k][j] = max(dp[k][j], dp[l][j - 1] + curr_score - b[j]);\n                }\n            }\n    int ans = -2e9;\n    for (int j = 0; j < n; ++j)\n        for (int k = 0; k < 3; ++k)\n            ans = max(ans, dp[k][j]);\n    cout << ans << '\\n';\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 2 10 100\n1 100 1\n1 1 2 0",
              "expectedOutput": "219"
            },
            {
              "input": "6\n3 7 2 8 9 4\n1 3 9 27 81\n0 1 2 1 2 0",
              "expectedOutput": "56"
            }
          ]
        },
        {
          "id": "l7_202403_01",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于排序的说法，正确的是(  )。",
          "options": [
            "冒泡排序是最快的排序算法之一。",
            "快速排序通常是不稳定的。",
            "最差情况，n 个元素做归并排序的时间复杂度为 O(n²)。",
            "以上均不正确。"
          ],
          "answer": 1,
          "explanation": "快速排序在通常实现下是不稳定的，选项 B 正确。冒泡排序效率很低不是最快的；归并排序最差也是 O(n log n)，所以选项 C 错误，本题选 B。排序稳定性和复杂度是最常考的排序性质。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_11",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 schedule 函数（按结束时间排序的活动选择贪心）的时间复杂度为(  )。\n<pre><code>int schedule(int n, activity* p) { sort(p,p+n,compare); int cnt=0,end=0; for(i=0;i<n;i++) if(p[i].start>=end){end=p[i].end;cnt++;} return cnt; }</code></pre>",
          "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n²)"
          ],
          "answer": 2,
          "explanation": "函数先对 n 个活动按结束时间排序，sort 的复杂度是 O(n log n)，之后的一次线性扫描是 O(n)，取主要部分，总复杂度为 O(n log n)，选 C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_12",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 search 函数（二分查找）的平均时间复杂度为(  )。\n<pre><code>int search(int n,int*p,int target){ int low=0,high=n; while(low<=high){ int middle=(low+high)/2; if(target==p[middle])return middle; else if(target>p[middle])low=middle+1; else high=middle-1; } return -1; }</code></pre>",
          "options": [
            "O(n)",
            "O(log n)",
            "O(1)",
            "可能无法返回"
          ],
          "answer": 1,
          "explanation": "二分查找每轮把查找区间缩小一半，最多执行 O(log n) 次比较就能找到目标或判定不存在，平均时间复杂度是 O(log n)，选 B。前提是数组已经有序，否则二分无法进行。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 count_triple 函数的时间复杂度为(  )。\n<pre><code>int count_triple(int n){ int cnt=0; for(a=1;a<=n;a++)for(b=a;a+b<=n;b++)for(c=b;a+b+c<=n;c++) if(a*a+b*b==c*c)cnt++; return cnt; }</code></pre>",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(n⁴)"
          ],
          "answer": 2,
          "explanation": "三层循环，a、b、c 都从 1 到 n 量级，内层还受 a+b+c≤n 限制，但整体迭代次数仍是 n³ 量级，所以时间复杂度为 O(n³)，选 C。三重循环嵌套复杂度通常为三次方。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>int down(int n){ if(n<=1)return n; return down(n-1)+down(n-2)+down(n-3); } int main(){ cout<<down(6); }</code></pre>",
          "options": [
            "6",
            "13",
            "20",
            "无法正常结束"
          ],
          "answer": 0,
          "explanation": "down(0)=0、down(1)=1、down(2)=down(1)+down(0)+down(-1)=1+0+(-1)=0、down(3)=1、down(4)=2、down(5)=3、down(6)=3+2+1=6，输出 6，选 A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_19",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "能用动态规划解决的问题，一般也可以用贪心法解决，但动态规划的效率更高。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "动态规划的问题往往不具备贪心选择性质，贪心法并不能一般性地解决 DP 问题，说法错误。贪心每一步做局部最优，而 DP 需要全面比较子问题，两者适用范围不同。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_23",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划有递推实现和递归实现，有时两种实现的时间复杂度不同。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "不加记忆化的递归会重复计算子问题，复杂度高；用递推或带记忆化递归则只需算每个子问题一次，两者复杂度可能不同，说法正确。记忆化是递归优化为递推效率的关键。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_03",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知两个序列 s1={1,3,4,5,6,7,7,8,1}、s2={3,5,7,4,8,2,9,5,1}，则它们的最长公共子序列是（  ）。",
          "options": [
            "{3,5,7,8,1}",
            "{3,4,5,7,8}",
            "{5,7,8}",
            "{3,5,7,9,1}"
          ],
          "answer": 0,
          "explanation": "验证选项：{3,5,7,8,1} 在两个序列中都按顺序出现，长度为 5，是二者最长公共子序列。{3,4,5,7,8} 在 s2 中 4 在 5 之后不满足顺序，{5,7,8} 长度只有 3，{3,5,7,9,1} 中 9 不在 s1 中，故选 A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_04",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "关于序列 {2,7,1,5,6,4,3,8,9}，以下说法错误的是（  ）。",
          "options": [
            "{2,5,6,8,9} 是它的最长上升子序列",
            "{1,5,6,8,9} 是它的最长上升子序列",
            "{7,5,4,3} 是它的最长下降子序列",
            "{1,5,6,8,9} 是它的唯一最长上升子序列"
          ],
          "answer": 3,
          "explanation": "最长上升子序列长度为 5，{1,5,6,8,9} 和 {2,5,6,8,9} 都是长度 5 的上升子序列，所以最长上升子序列不唯一，选项 D 说它是唯一的是错误的，本题选 D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>int fib(int n){ if(n<=1)return n; return fib(n-1)+fib(n-2); } int main(){ cout<<fib(6); }</code></pre>",
          "options": [
            "5",
            "8",
            "13",
            "无法正常结束"
          ],
          "answer": 1,
          "explanation": "fib 数列：fib(0)=0，fib(1)=1，fib(2)=1，fib(3)=2，fib(4)=3，fib(5)=5，fib(6)=8，输出 8，选 B。斐波那契数列前几项需要熟记便于快速计算。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 count_triple 函数的时间复杂度为(  )。\n<pre><code>int count_triple(int n){ int cnt=0; for(a=1;a<=n;a++)for(b=a;a+b<=n;b++){ int c=sqrt(a*a+b*b); if(a+b+c>n)break; if(a*a+b*b==c*c)cnt++; } return cnt; }</code></pre>",
          "options": [
            "O(n)",
            "O(n²)",
            "O(n³)",
            "O(n⁴)"
          ],
          "answer": 1,
          "explanation": "外层循环 a 从 1 到 n，内层 b 从 a 到 n，两层循环迭代次数约为 n² 量级，内层开方和判断都是常数时间，所以时间复杂度为 O(n²)，选 B。循环次数约等于 n(n+1)÷2。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_17",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序是稳定的排序算法。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序只交换相邻逆序元素，相等元素不会交换相对位置，因此是稳定排序，说法正确。稳定性保证相等元素的先后顺序在排序前后不变。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_24",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划有递推实现和递归实现，对于很多问题，通过记录子问题的解，两种实现的时间复杂度是相同的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "带记忆化的递归和递推都只计算每个子问题一次，时间复杂度相同，说法正确。记忆化把递归的重复计算消除后，两者效率一致。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_26",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：黑白翻转\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：小杨有一棵 n 个节点的树，每个节点是白色或黑色。美丽树定义为删除所有白色节点后剩余节点仍组成一棵树。每次操作可以把一个白色节点变黑，求最少操作次数使树变成美丽树。\n输入：第一行 n；第二行 n 个非负整数（0 表示白，非 0 表示黑）；之后 n-1 行每行一条边。\n输出：最少操作次数。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：统计黑色节点总数 sum。一次 DFS 计算以每个节点为根的子树中黑色节点数 num。再次 DFS 判断：若某个节点既不是全黑也不是全白，且它的某个子树含黑但该子树内黑色节点并未连通到当前分支，则该节点必须变黑才能保证删白后连通。最后累加需要变黑的白色节点数。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nvector<int> g[N];\nint col[N], num[N];\nint ans, sum;\nvoid calc(int x, int fa){\n    num[x] += col[x];\n    for (auto i : g[x]) if (i != fa) { calc(i, x); num[x] += num[i]; }\n}\nvoid dfs(int x, int fa){\n    int fl = 0;\n    if (num[x] != sum && num[x] != 0) fl = 1;\n    for (auto i : g[x]) if (i != fa) {\n        dfs(i, x);\n        if (num[i] != 0 && num[i] != num[x] - col[x]) fl = 1;\n    }\n    if (fl == 1 && col[x] != 1) ans++;\n}\nint main(){\n    int n; cin >> n;\n    for (int i = 1; i <= n; i++){ cin >> col[i]; sum += col[i]; }\n    for (int i = 1; i < n; i++){ int u, v; cin >> u >> v; g[u].push_back(v); g[v].push_back(u); }\n    calc(1, 0); dfs(1, 0);\n    cout << ans << \"\\n\";\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n0 1 0 1 0\n1 2\n1 3\n3 4\n3 5",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202409_12",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>#define N 10\nint path[N][N];\nfor(i=1;i<N;i++)\n    path[i][0]=i;\nfor(j=1;j<N;j++)\n    path[0][j]=j;\nfor(i=1;i<N;i++)\n    for(j=1;j<N;j++)\n        path[i][j]=path[i-1][j]+path[i][j-1];\ncout<<path[8][4];</code></pre>",
          "options": [
            "84",
            "495",
            "1012",
            "结果是随机的"
          ],
          "answer": 2,
          "explanation": "这是带边界的递推表。逐行手算：path[1][1]=2，path[1][2]=4，path[1][3]=7，path[1][4]=11，path[2][1]=4，path[2][4]=26，逐步递推可得 path[8][4]=1012，选 C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上题中程序的时间复杂度为（  ）。\n外层循环 i=1..N-1，内层循环 j=1..N-1，共约 (N-1)² 次基本操作。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^(3/2))",
            "O(n²)"
          ],
          "answer": 3,
          "explanation": "程序是两层嵌套循环，外层和内层都执行约 n 次，总共约 n² 次操作，所以时间复杂度为 O(n²)，选 D。双层循环的复杂度通常是平方级。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 fib 函数的时间复杂度为(  )。\nint fib_rcd[MAX_N];\n<pre><code>int fib(int n){ if(n<=1)return 1; if(fib_rcd[n]>0)return fib_rcd[n]; return fib(n-1)+fib(n-2); }</code></pre>",
          "options": [
            "O(n)",
            "O(2ⁿ)",
            "O(n log n)",
            "无法正常结束"
          ],
          "answer": 1,
          "explanation": "代码虽然声明了 fib_rcd，但从没给 fib_rcd 赋值，记忆化失效，递归退化为朴素斐波那契，每次调用分裂成两个子调用，复杂度为 O(2ⁿ)（更精确为 O(φⁿ)），选 B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序一般是不稳定的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "选择排序每轮把最小元素与当前位置交换，交换会改变相等元素的相对顺序，一般是不稳定的，说法正确。不稳定意味着相等元素可能互换位置。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：矩阵移动\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：小杨有一个 n×m 的 01? 矩阵，从左上角走到右下角，只能向下或向右移动，每经过一个字符 1 得 1 分。可以把不超过 x 个字符 ? 变成 1，求最优策略下最多得分。\n输入：第一行 t；每组第一行 n m x；接下来 n 行每行 m 个字符。\n输出：每组输出最大得分。\n【数据范围】\n1 ≤ n ≤ 500\n1 ≤ m ≤ 500\n0 ≤ x ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：设 dp[j][k] 表示走到当前行第 j 列、已使用 k 次转换时的最大得分，逐行逐列滚动更新。遇到字符 1 得分加一；遇到 ? 时，若还可用转换次数，则把 k-1 次的方案得分加一，比较取最大值。最后取 dp[m][k] 在 k≤x 中的最大值。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 505;\nint dp[N][1005];\nchar a[N][N];\nint n, m, x;\nint main(){\n    int t; scanf(\"%d\", &t);\n    while(t--){\n        scanf(\"%d%d%d\", &n, &m, &x);\n        for(int i = 1; i <= m; i++) for(int j = 0; j <= x; j++) dp[i][j] = 0;\n        for(int i = 1; i <= n; i++) scanf(\"%s\", a[i] + 1);\n        for(int i = 1; i <= n; i++)\n            for(int j = 1; j <= m; j++)\n                for(int k = x; k >= 0; k--){\n                    if(a[i][j] == '1') dp[j][k] = max(dp[j][k], dp[j-1][k]) + 1;\n                    if(a[i][j] == '0') dp[j][k] = max(dp[j][k], dp[j-1][k]);\n                    if(a[i][j] == '?'){\n                        if(!k) dp[j][k] = max(dp[j][k], dp[j-1][k]);\n                        else dp[j][k] = max(max(dp[j][k], dp[j-1][k]), max(dp[j][k-1], dp[j-1][k-1]) + 1);\n                    }\n                }\n        int ans = 0;\n        for(int k = 0; k <= x; k++) ans = max(ans, dp[m][k]);\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n3 3 1\n000\n111\n01?\n3 3 1\n000\n?0?\n01?",
              "expectedOutput": "4\n2"
            }
          ]
        },
        {
          "id": "l7_202412_10",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划的说法中，错误的是（  ）。",
          "options": [
            "动态规划方法将原问题分解为一个或多个相似的子问题。",
            "动态规划方法通常能够列出递推公式。",
            "动态规划方法有递推和递归两种实现形式。",
            "递推实现动态规划方法的时间复杂度总是不低于递归实现。"
          ],
          "answer": 3,
          "explanation": "递推实现通常比无记忆化的递归实现更快，复杂度一般不超过递归实现，选项 D 说递推复杂度总是不低于递归是错误的，本题选 D。递推省去了重复计算开销。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_12",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>#define N 10\nint h[N];\nh[0]=h[1]=1;\nfor(n=2;n<N;n++)\n    for(j=0;j<n;j++)\n        h[n]+=h[j]*h[n-j-1];\ncout<<h[6];</code></pre>",
          "options": [
            "132",
            "1430",
            "16796",
            "结果是随机的"
          ],
          "answer": 0,
          "explanation": "这是卡特兰数的递推式 h[n]=sum(h[j]*h[n-1-j])，h 值依次为 1,1,2,5,14,42,132，h[6]=132，选 A。卡特兰数常出现在括号匹配等计数问题中。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上题中程序的时间复杂度为（  ）。\n外层 n 从 2 到 N，内层 j 从 0 到 n，共约 n²÷2 次操作。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^(3/2))",
            "O(n²)"
          ],
          "answer": 3,
          "explanation": "双层循环，外层约 n 次、内层约 n 次，总操作次数为 n² 量级，所以时间复杂度为 O(n²)，选 D。嵌套循环复杂度看两层相乘。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 init_sieve 函数的时间复杂度为(  )。\n<pre><code>void init_sieve(int n){ for(i=1;i<=n;i++)sieve[i]=i; for(i=2;i<=n;i++)for(j=i;j<=n;j+=i)sieve[j]--; }</code></pre>",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "无法正常结束"
          ],
          "answer": 1,
          "explanation": "第二个循环中，内层 j 从 i 开始每次加 i，总迭代次数为 n÷2+n÷3+...+n÷n = n·H(n) 约等于 n ln n，所以复杂度为 O(n log n)，选 B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在 n 个元素中进行二分查找，平均时间复杂度是 O(log n)，但须要事先进行排序。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二分查找要求数组有序，所以必须提前排序，平均复杂度 O(log n)，说法正确。无序数组无法利用折半排除一半元素。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_24",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "递归调用在运行时会由于层数过多导致程序崩溃，可以通过循环配合栈缓解这一问题。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归过深会导致调用栈溢出崩溃，用显式栈加循环可以模拟递归而不占用调用栈，缓解该问题，说法正确。显式栈是避免栈溢出的常用技巧。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_26",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：武器购买\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：商店里有 n 个武器，第 i 个武器强度为 p[i]、花费为 c[i]。要购买一些武器使总强度不小于 P，总花费不超过 Q，求是否存在方案以及最少花费。\n输入：第一行 t；每组第一行 n P Q；之后 n 行每行两个正整数 p c。\n输出：每组输出最少花费，不存在输出 -1。\n【数据范围】\n1 ≤ Q ≤ 50000",
          "options": [],
          "answer": null,
          "explanation": "思路：把花费看作背包容量，用 0/1 背包求每种花费下能获得的最大强度，dp[j] 表示花费不超过 j 时的最大强度。遍历所有花费 j，找到第一个满足 dp[j]≥P 的 j 即为最小花费；若没有任何花费能达到 P 则输出 -1。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\n#define ll long long\nll dp[50010];\nll solve(int n, int P, int Q, vector<pair<int,int>>& weapons) {\n    dp[0] = 0;\n    for (auto& weapon : weapons) {\n        int p = weapon.first, c = weapon.second;\n        for (int j = Q; j >= c; --j)\n            if (dp[j - c] >= 0) dp[j] = max(dp[j], dp[j - c] + p);\n    }\n    for (int j = 0; j <= Q; ++j)\n        if (dp[j] >= P) return j;\n    return -1;\n}\nint main() {\n    int t; cin >> t;\n    while (t--) {\n        int n, P, Q; cin >> n >> P >> Q;\n        memset(dp, -0x3f, sizeof dp);\n        vector<pair<int,int>> weapons(n);\n        for (int i = 0; i < n; ++i) cin >> weapons[i].first >> weapons[i].second;\n        cout << solve(n, P, Q, weapons) << \"\\n\";\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3 2 3\n1 2\n1 2\n2 3\n3 3 4\n1 2\n1 2\n2 3\n3 1000 1000\n1 2\n1 2\n2 3",
              "expectedOutput": "3\n-1\n-1"
            }
          ]
        },
        {
          "id": "l7_202412_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：燃烧\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：小杨有一棵 n 个节点的树，节点 i 有权值 a[i]。选择一个初始节点引燃，每个燃烧节点会把权值严格小于自身的相邻节点也引燃，直到不再扩散。求合理选择初始节点时最多能燃烧的节点数。\n输入：第一行 n；第二行 n 个正整数权值；之后 n-1 行每条边。\n输出：最多燃烧节点数。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：火焰只能从权值大的节点流向权值小的节点，形成有向依赖。先 DFS 计算 down[x]：以 x 为根，沿权值递减方向能向下燃烧的节点数。再做二次 DFS 计算 sum[x]：把父节点方向的燃烧贡献也补上，最终答案取所有节点 down[i]+sum[i] 的最大值。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nint a[N], sum[N], down[N];\nvector<int> g[N];\nvoid dfs_down(int x, int fa){\n    down[x] = 1;\n    for(int i:g[x]) if(i != fa){ dfs_down(i, x); if(a[x] > a[i]) down[x] += down[i]; }\n}\nvoid dfs_sum(int x, int fa){\n    if(a[x] > a[fa]) sum[x] += sum[fa] + down[fa];\n    for(int i:g[x]) if(i != fa) dfs_sum(i, x);\n}\nint main(){\n    int n; cin >> n;\n    for(int i=1;i<=n;i++) cin >> a[i];\n    for(int i=1;i<n;i++){ int u,v; cin>>u>>v; g[u].push_back(v); g[v].push_back(u); }\n    dfs_down(1, 0); dfs_sum(1, 0);\n    int mx = 0;\n    for(int i=1;i<=n;i++) mx = max(mx, sum[i] + down[i]);\n    cout << mx << \"\\n\";\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n6 2 3 4 5\n1 2\n2 3\n2 5\n1 4",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l7_202503_05",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于排序的说法，正确的是(  )。",
          "options": [
            "选择排序是最快的排序算法之一。",
            "归并排序通常是稳定的。",
            "最差情况，n 个元素做快速排序的时间复杂度为 O(n log n)。",
            "最好情况，n 个元素做插入排序的时间复杂度为 O(n log n)。"
          ],
          "answer": 1,
          "explanation": "归并排序在合并时不改变相等元素的相对顺序，是稳定排序，选项 B 正确。快排最差是 O(n²)，插入排序最好情况是 O(n)，选 B。稳定排序保证相等元素顺序不变。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_10",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个整数数组 nums，找到其中最长的严格上升子序列的长度。下面程序横线处应该填入的是（  ）。\n<pre><code>vector<int> dp(n,1);\nfor(i=1;i<n;i++)\n    for(j=0;j<i;j++)\n        if(nums[i]>nums[j])\n        {\n            _______;\n        }</code></pre>",
          "options": [
            "dp[i] = max(dp[i], dp[j]);",
            "dp[i] = max(dp[i+1], dp[j] + 1);",
            "dp[i] = max(dp[i], dp[j] - 1);",
            "dp[i] = max(dp[i], dp[j] + 1);"
          ],
          "answer": 3,
          "explanation": "经典 LIS 转移：当 nums[i]>nums[j] 时，以 i 结尾的上升子序列长度可以由 dp[j]+1 更新，即 dp[i]=max(dp[i],dp[j]+1)，选 D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_11",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上题 LIS 程序的时间复杂度为（  ）。\n双层循环 i 和 j，各约 n 次。",
          "options": [
            "O(n²)",
            "O(n log n)",
            "O(n³)",
            "O(2ⁿ)"
          ],
          "answer": 0,
          "explanation": "LIS 的动态规划用两层循环枚举所有 (i,j) 对，时间复杂度为 O(n²)，选 A。每对下标都要比较更新一次 dp。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个 m×n 的二维网格 grid，找一条从左上角到右下角路径使数字总和最小，每次只能向右或向下。横线处应该填入的是（  ）。\n<pre><code>for(i=1;i<m;i++)\n    for(j=1;j<n;j++)\n    {\n        _______;\n    }</code></pre>",
          "options": [
            "dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][1];",
            "dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j];",
            "dp[i][j] = min(dp[i-1][j], dp[i][j]) + grid[i][j];",
            "dp[i][j] = min(dp[i][j], dp[i][j-1]) + grid[i][j];"
          ],
          "answer": 1,
          "explanation": "最小路径和的状态转移：从上方或左方来取较小值，再加上当前格子的值 grid[i][j]，即 dp[i][j]=min(dp[i-1][j],dp[i][j-1])+grid[i][j]，选 B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个整数数组 nums，找到具有最大和的连续子数组，返回最大和。下面横线处应该填入的是（  ）。\n<pre><code>vector<int> dp(n,0);\ndp[0]=nums[0];\nfor(i=1;i<n;i++)\n{\n    _______;\n    maxSum=max(maxSum,dp[i]);\n}</code></pre>",
          "options": [
            "dp[i] = max(nums[i+1], dp[i-1] + nums[i]);",
            "dp[i] = max(nums[i], dp[i-1] + nums[i]);",
            "dp[i] = max(nums[i], dp[i+1] + nums[i]);",
            "dp[i] = max(nums[i], dp[i-1] + nums[i+1]);"
          ],
          "answer": 1,
          "explanation": "最大子段和的转移：以 i 结尾的子段要么从 nums[i] 重新开始，要么接上以 i-1 结尾的子段，即 dp[i]=max(nums[i], dp[i-1]+nums[i])，选 B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序一般是不稳定的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快排的分区交换会改变相等元素的相对顺序，通常实现是不稳定的，说法正确。快速排序以基准元素划分，交换过程可能让相等元素互换位置，这是它与归并排序在稳定性上的重要区别。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_24",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划算法通常有递归实现和递推实现。但由于递归调用在运行时会由于层数过多导致程序崩溃，有些动态规划算法只能用递推实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归过深确实可能栈溢出，但理论上任何递推实现的 DP 也能写成递归（加记忆化），说某些只能递推不准确，说法错误。递归与递推在理论上等价。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_10",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划的说法中，错误的是（  ）。",
          "options": [
            "动态规划方法通常能够列出递推公式。",
            "动态规划方法的时间复杂度通常为状态的个数。",
            "动态规划方法有递推和递归两种实现形式。",
            "对很多问题，递推实现和递归实现动态规划方法的时间复杂度相当。"
          ],
          "answer": 1,
          "explanation": "DP 的时间复杂度等于状态数乘以每个状态的转移代价，不只是状态的个数，选项 B 说法错误，本题选 B。转移代价有时也是影响复杂度的因素。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_11",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\nint rec_fib[100];\n<pre><code>int fib(int n){ if(n<=1)return n; if(rec_fib[n]==0)rec_fib[n]=fib(n-1)+fib(n-2); return rec_fib[n]; } int main(){ cout<<fib(6); }</code></pre>",
          "options": [
            "8",
            "13",
            "64",
            "结果是随机的"
          ],
          "answer": 0,
          "explanation": "这是带记忆化的斐波那契，fib 值依次为 0,1,1,2,3,5,8，fib(6)=8，输出 8，选 A。记忆化数组避免了重复计算。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_12",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序（带记忆化的斐波那契）的时间复杂度为（  ）。\n<pre><code>int fib(int n){ if(n<=1)return n; if(rec_fib[n]==0)rec_fib[n]=fib(n-1)+fib(n-2); return rec_fib[n]; }</code></pre>",
          "options": [
            "O(2ⁿ)",
            "O(φⁿ)，φ=(√5-1)/2",
            "O(n²)",
            "O(n)"
          ],
          "answer": 3,
          "explanation": "带记忆化后每个 n 只计算一次，每次递归计算 fib(n-1) 和 fib(n-2) 都是常数时间，总复杂度为 O(n)，选 D。记忆化把指数级降为线性。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 search 函数（二分查找下界）的平均时间复杂度为(  )。\n<pre><code>int search(int n,int*p,int target){ int low=0,high=n; while(low<high){ int middle=(low+high)/2; if(target==p[middle])return middle; else if(target>p[middle])low=middle+1; else high=middle; } return -1; }</code></pre>",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(1)"
          ],
          "answer": 2,
          "explanation": "每轮把查找区间缩小一半，最多约 log n 次比较，平均时间复杂度为 O(log n)，选 C。二分查找是 O(log n) 的典型代表。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序（欧拉线性筛）的时间复杂度为（  ）。\n<pre><code>void sieve(){ for(n=2;n<=MAXN;n++){ if(!isPrime[n])primes[num++]=n; for(i=0;i<num && n*primes[i]<=MAXN;i++){ isPrime[n*primes[i]]=true; if(n%primes[i]==0)break; } } }</code></pre>",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(1)"
          ],
          "answer": 0,
          "explanation": "欧拉筛每个合数只被其最小质因子筛掉一次，总操作次数与 n 成正比，时间复杂度为 O(n)，选 A。线性筛是效率最高的筛法。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "对 n 个元素的数组进行快速排序，最差情况的时间复杂度为 O(n log n)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "快速排序在每轮划分极度不平衡（如已有序）时最差复杂度为 O(n²)，不是 O(n log n)，说法错误。只有平均才是 O(n log n)。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_24",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划方法将原问题分解为一个或多个相似的子问题，因此必须使用递归实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "动态规划可以用递推（迭代）实现，也可以用递归加记忆化实现，并不必须用递归，说法错误。两种实现方式理论上等价，递推省去函数调用开销，递归实现时要加记忆化避免重复计算。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：调味平衡\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：有 n 种食材，第 i 种食材酸度为 a[i]、甜度为 b[i]。选择若干食材放入料理，使酸度总和等于甜度总和，并最大化酸度与甜度之和。\n输入：第一行 n；之后 n 行每行两个正整数 a b。\n输出：平衡前提下酸度与甜度之和的最大值。\n【数据范围】\n1 ≤ n ≤ 100",
          "options": [],
          "answer": null,
          "explanation": "思路：平衡要求酸度减甜度之和为 0。设 x=a+b、y=a-b，每个食材对差值 y 贡献，目标是在总差值 y 的和为 0 的前提下最大化 x 的总和。用背包式 DP：f[d] 表示差值为 d 时的最大 x 和，逐个食材正序或倒序转移，最后输出 f[0]，即差值为 0 时的最大和。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 105, C = 505, D = N * C * 2;\nint n;\nint f[D];\nint main(){\n    scanf(\"%d\", &n);\n    for (int i = 0; i < D; i++) f[i] = -1e9;\n    f[N * C] = 0;\n    while (n--){\n        int a, b; scanf(\"%d%d\", &a, &b);\n        int x = a + b, y = a - b;\n        if (y <= 0){ for (int i = -y; i < D; i++) f[i + y] = max(f[i + y], f[i] + x); }\n        else { for (int i = D - y - 1; i; i--) f[i + y] = max(f[i + y], f[i] + x); }\n    }\n    printf(\"%d\\n\", f[N * C]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 2\n2 4\n3 2",
              "expectedOutput": "8"
            },
            {
              "input": "5\n1 1\n2 3\n6 1\n8 2\n5 7",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202509_10",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于贪心法和动态规划的说法中，错误的是（  ）。",
          "options": [
            "对特定的问题，贪心法不一定适用。",
            "当特定的问题适用贪心法时，通常比动态规划的时间复杂度更低。",
            "对很多问题，递推实现和递归实现动态规划方法的时间复杂度相当。",
            "采用动态规划的算法一定具有多项式时间复杂度。"
          ],
          "answer": 3,
          "explanation": "有些问题用动态规划仍然是 NP 难的，复杂度是指数级，并非一定多项式，选项 D 说法错误，本题选 D。DP 不能保证多项式时间。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_11",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n<pre><code>int fib(int n){ if(n==0)return 1; return fib(n-1)+fib(n-2); } int main(){ cout<<fib(6); }</code></pre>",
          "options": [
            "8",
            "13",
            "21",
            "无法正常结束"
          ],
          "answer": 3,
          "explanation": "该函数只对 n==0 有出口，调用 fib(1) 时进入 fib(0)+fib(-1)，fib(-1) 会继续递归 fib(-2)+fib(-3) 永无止境，导致栈溢出，程序无法正常结束，选 D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_12",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint rec_fib[MAX_N];\n<pre><code>int fib(int n){ if(n<=1)return n; if(rec_fib[n]!=0)return rec_fib[n]; return fib(n-1)+fib(n-2); }</code></pre>",
          "options": [
            "O(φⁿ)，φ=(√5+1)/2",
            "O(2ⁿ)",
            "O(n²)",
            "O(n)"
          ],
          "answer": 0,
          "explanation": "代码虽然声明了 rec_fib 数组，但从未给其赋值，记忆化失效，退化为朴素斐波那契递归，每个 n 分裂成两个子问题，复杂度约为 O(φⁿ)（φ 为黄金比例），选 A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 init_sieve 函数的时间复杂度为(  )。\n<pre><code>void init_sieve(int n){ for(i=1;i<=n;i++)sieve[i]=i; for(i=2;i<=n;i++)for(j=i;j<=n;j+=i)sieve[j]--; }</code></pre>",
          "options": [
            "O(n)",
            "O(n log log n)",
            "O(n log n)",
            "O(n²)"
          ],
          "answer": 2,
          "explanation": "第二个双层循环中，内层迭代次数为 n÷2+n÷3+...+n÷n = n·H(n) 约等于 n ln n，所以时间复杂度为 O(n log n)，选 C。调和级数求和得到对数因子。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面 count_triple 函数（用欧几里得公式枚举勾股三元组）的时间复杂度为(  )。\n<pre><code>for(v=1;v*v*4<=n;v++)\n    for(u=v+1;u*(u+v)*2<=n;u+=2)\n        if(gcd(u,v)==1)\n        {\n            ...\n        }</code></pre>",
          "options": [
            "O(n²)",
            "O(n² log n)",
            "O(n log n)",
            "O(n)"
          ],
          "answer": 2,
          "explanation": "v 枚举到 √n÷2 量级，u 也枚举到 √n 量级，总迭代次数约为 O(n)；每轮还要做一次 gcd(u,v)，其复杂度为 O(log n)，合起来总时间复杂度为 O(n log n)，选 C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序一般是不稳定的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "选择排序把最小元素交换到前面，可能改变相等元素的相对顺序，一般不稳定，说法正确。交换最小元素时可能跳过相等的元素。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：金币收集\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：数轴上会出现 n 枚金币，第 i 枚在时刻 t[i] 出现在坐标 x[i]。小 A 从时刻 0 坐标 0 出发，每个时刻只能保持不动或向右移动一格，必须在时刻 t[i] 恰好位于 x[i] 才能收集金币。求最多收集多少枚金币。\n输入：第一行 n；之后 n 行每行两个正整数 x t。\n输出：最多收集的金币数量。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：小 A 的坐标只能不增不减地增加，且收集第 i 枚金币需要 t[i]≥x[i]（从左到右移动可行）。把能到达的金币按坐标排序，问题转化为对 t[i]-x[i] 求最长不下降子序列：排序后在同一坐标内先按时刻递增，再对这些值求 LIS 的长度即为最多可收集数，用二分优化到 O(n log n)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int oo = 2e9;\nconst int N = 1e5 + 5;\nint n;\nint x[N], t[N];\nint p[N], f[N];\nint mx;\nbool cmp(int a, int b){ if (x[a] != x[b]) return x[a] < x[b]; return t[a] < t[b]; }\nint main(){\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++){\n        scanf(\"%d%d\", &x[i], &t[i]);\n        t[i] -= x[i];\n        p[i] = i;\n        f[i] = oo;\n    }\n    sort(p + 1, p + n + 1, cmp);\n    mx = 0;\n    f[0] = 0;\n    for (int i = 1; i <= n; i++){\n        int l = 0, r = mx;\n        int v = t[p[i]];\n        if (v < 0) continue;\n        while (l < r){ int mid = (l + r) / 2 + 1; if (v < f[mid]) r = mid - 1; else l = mid; }\n        mx = max(mx, r + 1);\n        f[r + 1] = v;\n    }\n    printf(\"%d\\n\", mx);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 6\n3 7\n2 4",
              "expectedOutput": "2"
            },
            {
              "input": "4\n1 1\n2 2\n1 3\n2 4",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l7_202512_02",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知三个序列：s1={3,1,8,2,5,6,7,4}，s2={1,5,1,8,6,4,7,5,6}，s3={1,8,3,5,7,6,2,4}。以下哪个序列是它们的最长公共子序列（  ）。",
          "options": [
            "{1,8,5,6}",
            "{1,5,6,7}",
            "{1,8,6}",
            "{1,5,7,4}"
          ],
          "answer": 0,
          "explanation": "验证 {1,8,5,6}：在 s1、s2、s3 三个序列中 1,8,5,6 都按顺序出现，长度 4 可行。{1,5,6,7} 在 s3 中 6 在 7 之后，{1,5,7,4} 在 s2 中 4 在 7 之后，均不满足，故选 A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_04",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在 0/1 背包问题中，给定一组物品，每个物品有一个重量和价值，背包容量有限。以下关于 0/1 背包问题的描述，正确的是（  ）。",
          "options": [
            "使用贪心算法可以保证找到最优解，因为物品只能放入一次。",
            "0/1 背包是 P 问题，它可以在 O(nW) 的时间复杂度内解决。",
            "动态规划解法的空间复杂度为 O(nW)，但可以通过滚动数组技巧将空间复杂度优化到 O(W)。",
            "每个物品只能选择一次，并且子问题之间是独立的，无法重用计算结果。"
          ],
          "answer": 2,
          "explanation": "0/1 背包的标准 DP 用二维表空间 O(nW)，用滚动数组可优化到一维 O(W)，选项 C 正确。贪心不能保证最优，选 C。背包问题是经典动态规划模型。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_08",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上题中，函数 query 的时间复杂度是（  ）。\n<pre><code>while(l<r)\n{\n    mid=l+(r-l)/2;\n    ...\n}</code></pre>",
          "options": [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(n²)"
          ],
          "answer": 1,
          "explanation": "query 是二分查找的变体，每轮把区间缩小一半，时间复杂度为 O(log n)，选 B。二分思想让查找效率远高于线性扫描。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_10",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的运行结果为（  ）。\n<pre><code>int f(int n){ if(n<=2)return n*2; return f(n-1)+f(n-2); } int main(){ cout<<f(5); }</code></pre>",
          "options": [
            "10",
            "16",
            "26",
            "30"
          ],
          "answer": 1,
          "explanation": "f(1)=2，f(2)=4，f(3)=f(2)+f(1)=6，f(4)=f(3)+f(2)=10，f(5)=f(4)+f(3)=16，输出 16，选 B。按递推式从前往后依次计算。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "假设一个算法时间复杂度的递推式是 T(n)=8T(n/4)+n√n（n 为正整数），且 T(0)=1，那么这个算法的时间复杂度是（  ）。",
          "options": [
            "O(n√n)",
            "O(n√n log n)",
            "O(n²)",
            "O(n² log n)"
          ],
          "answer": 1,
          "explanation": "用主定理：a=8，b=4，log_b(a)=log4(8)=3/2，而 f(n)=n√n=n^(3/2)，恰好与 n^(log_b a) 同阶，属于主定理情况二，所以 T(n)=O(n√n log n)，选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_19",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "选择排序是一种不稳定的排序算法，而冒泡排序是一种稳定的排序算法。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "选择排序交换时可能改变相等元素相对顺序，不稳定；冒泡排序只交换相邻逆序元素，稳定，说法正确。两种排序的稳定性截然不同。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_20",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "求两个长度为 n 序列的最长公共子序列（LCS）长度时，可以使用滚动数组将空间复杂度从 O(n²) 优化到 O(n)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "LCS 的 DP 只依赖上一行状态，用滚动数组可以把空间从 O(n²) 降到 O(n)，说法正确。滚动数组优化空间是 DP 常用技巧。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：学习小组\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：把 n 名同学（发言积极度 c[i]）划分为若干个连续学习小组。人数为 k 的小组基础讨论积极度为 a[k]，小组综合积极度为基础积极度加上组内最大积极度减最小积极度。求所有划分方案中综合积极度之和的最大值。\n输入：第一行 n；第二行 n 个 c[i]；第三行 n 个 a[k]（k=1..n）。\n输出：最大综合积极度之和。\n【数据范围】\n1 ≤ n ≤ 300",
          "options": [],
          "answer": null,
          "explanation": "思路：先对积极度排序，最优划分中同一小组的人必然是连续的一段。设 f[j][k] 表示用前 j 人组成总人数 k 的最大综合积极度。枚举最后一组的人数 i：取前 k-i 人的最优值加上 a[i] 以及该组最大值减最小值（排序后为两端之差）。最终答案取 f[j][n] 的最大值。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 305;\nint n;\nint c[N], a[N];\nint f[N][N];\nint ans;\nint main(){\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &c[i]);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    sort(c + 1, c + n + 1);\n    for (int i = n; i >= 1; i--)\n        for (int j = 1; j <= n; j++)\n            for (int k = i; k <= n; k++){\n                int diff = 0;\n                if (i > 1) diff = c[n - j + 1] - c[j];\n                f[j][k] = max(f[j][k], f[j - 1][k - i] + a[i] + diff);\n                if (k == n) ans = max(ans, f[j][k]);\n            }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n2 1 3 2\n1 5 6 3",
              "expectedOutput": "12"
            },
            {
              "input": "8\n1 3 2 4 3 5 4 6\n0 2 5 6 4 3 3 4",
              "expectedOutput": "21"
            }
          ]
        },
        {
          "id": "l7_202603_01",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "假设一个算法时间复杂度的递推式是 T(n)=2T(n-1)+1（n 为正整数），且 T(0)=1，那么这个算法的时间复杂度是（  ）。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(2ⁿ)"
          ],
          "answer": 3,
          "explanation": "展开递推：T(n)=2T(n-1)+1=4T(n-2)+3=...=2ⁿ·T(0)+(2ⁿ-1)=2^(n+1)-1，所以时间复杂度为 O(2ⁿ)，选 D。每次递归翻倍调用是指数增长的典型。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_03",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "若字符串与字符串的最长公共子序列（LCS）长度为 5，则（  ）。",
          "options": [
            "它们的编辑距离为 5",
            "它们至少有 5 个公共字符",
            "它们最长公共子串长度为 5",
            "它们一定长度相等"
          ],
          "answer": 1,
          "explanation": "LCS 长度 5 说明存在长度为 5 的公共子序列，这些字符按顺序同时出现在两个串中，所以至少有 5 个公共字符，选 B。公共子序列的长度不超过公共字符个数。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_07",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的运行结果为（  ）。\n<pre><code>int a[]={1,2,8,4,9};\nn=5;\nk=3;\nsolve(n,a,k)</code></pre> 二分求最大最近距离，check 判断能否选 k 个点使间距不小于 dist。",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": 1,
          "explanation": "排序后 a={1,2,4,8,9}，要在 3 个点间最大化最小间距。检查 dist=3：选 1、4、8，间距 3 和 4 都满足；dist=4：选 1、8 后第三个点无法满足，所以最大最小间距为 3，输出 3，选 B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_08",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上题 solve 程序的时间复杂度是（  ），假设数组值域范围是 10^9。\n先 sort，再对距离区间二分并每次 O(n) 检查。",
          "options": [
            "O(n log n)",
            "O(n²)",
            "O(n log²n)",
            "O(n)"
          ],
          "answer": 0,
          "explanation": "先排序 O(n log n)，二分查找距离区间约 O(log V) 轮，每轮 check 是 O(n)，总复杂度为 O(n log n + n log V)，主要部分是 O(n log n)，选 A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_19",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果一个最值问题可以用动态规划在多项式时间内求解，那么也一定存在一种贪心策略，可以在多项式时间内求得最优解。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "很多 DP 问题不具备贪心选择性质，贪心不一定能得到最优解，说法错误。贪心只适用于满足贪心选择性质和最优子结构的问题，而 DP 通过比较所有子问题方案能处理更一般的情况。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_20",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "使用归并排序对 n 个元素进行排序时，无论最好、最坏还是平均情况，时间复杂度均为 O(n log n)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "归并排序总是先分后治，任何输入下的复杂度都是 O(n log n)，说法正确。归并排序的最坏、平均、最好复杂度相同。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_26",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：拆分\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：把正整数 n 拆分成若干个正整数之和，最大化拆分后的正整数之积，输出最大值对 10^9 取模的结果。\n输入：第一行 t（数据组数）；每组一行一个整数 n。\n输出：每组输出最大乘积对 10^9 取模。\n【数据范围】\n1 ≤ n ≤ 10^6",
          "options": [],
          "answer": null,
          "explanation": "思路：最大化乘积应尽量用 3 拆分（3 的乘积贡献最大），对余数处理：n 对 3 余 1 时把一个 3 拆成 2+2，余 2 时保留一个 2。由于 n 很大，用递推预处理 f[i]（i 到 1e6），并用 lnf[i] 记录 log 值比较大小，保证模运算同时选出真正最大的方案。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cmath>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e6 + 5;\nconst int mod = 1e9;\nconst double ln2 = log(2), ln3 = log(3);\nint f[N];\ndouble lnf[N];\nint main(){\n    f[0] = f[1] = 1;\n    for (int i = 0; i < N; i++){\n        if (i + 2 < N && lnf[i] + ln2 > lnf[i + 2]) { lnf[i+2] = lnf[i] + ln2; f[i+2] = 2ll * f[i] % mod; }\n        if (i + 3 < N && lnf[i] + ln3 > lnf[i + 3]) { lnf[i+3] = lnf[i] + ln3; f[i+3] = 3ll * f[i] % mod; }\n    }\n    int t; scanf(\"%d\", &t);\n    while (t--){ int n; scanf(\"%d\", &n); printf(\"%d\\n\", f[n]); }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n5\n8\n100",
              "expectedOutput": "6\n18\n755407364"
            }
          ]
        },
        {
          "id": "l7_202606_05",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 dp[i][j] 表示从网格左上角走到第 i 行第 j 列能取得的最大数字和，每次只能向右或向下移动。对于 i>0 且 j>0 的位置，正确的状态转移代码为（  ）。",
          "options": [
            "dp[i][j] = a[i][j] + min(dp[i-1][j], dp[i][j-1])",
            "dp[i][j] = max(dp[i-1][j-1], dp[i][j])",
            "dp[i][j] = a[i][j] + max(dp[i-1][j], dp[i][j-1])",
            "dp[i][j] = a[i][j] + dp[i-1][j-1]"
          ],
          "answer": 2,
          "explanation": "求最大数字和要取上方和左方较大的那个，再加上当前格子的数字，即 dp[i][j]=a[i][j]+max(dp[i-1][j],dp[i][j-1])，选 C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_06",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 f[0]=0，f[1]=2，并且对 i≥2 有 f[i]=max(f[i-1], f[i-2]+a[i])。若 a[1..5]={2,7,9,3,1}，则 f[5] 的值为（  ）。",
          "options": [
            "10",
            "11",
            "12",
            "13"
          ],
          "answer": 2,
          "explanation": "f[2]=max(f[1], f[0]+a[2])=max(2,0+7)=7；f[3]=max(7,2+9)=11；f[4]=max(11,7+3)=11；f[5]=max(11,11+1)=12，选 C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_07",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码是一维数组优化 0/1 背包的核心片段，其中 w[i] 表示重量、v[i] 表示价值。横线处应填入（  ）。\n<pre><code>for(i=1;i<=n;i++)\n    for(c=W;c>=w[i];c--)\n    {\n        _______;\n    }</code></pre>",
          "options": [
            "dp[c] = max(dp[c], dp[c + w[i]] + v[i])",
            "dp[c] = min(dp[c], dp[c - w[i]] + v[i])",
            "dp[c] = dp[c - w[i]] + v[i]",
            "dp[c] = max(dp[c], dp[c - w[i]] + v[i])"
          ],
          "answer": 3,
          "explanation": "0/1 背包一维优化要倒序枚举容量，转移为 dp[c]=max(dp[c], dp[c-w[i]]+v[i])，保证每件物品最多取一次，选 D。倒序避免同一物品被重复选择。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_09",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于排序稳定性的说法，正确的是（  ）。",
          "options": [
            "冒泡排序在只交换相邻逆序元素时是稳定排序。",
            "选择排序一定是稳定排序。",
            "快速排序一定是稳定排序。",
            "稳定排序一定会改变相等元素的相对顺序。"
          ],
          "answer": 0,
          "explanation": "冒泡排序只交换相邻的逆序对，相等元素不会交换，是稳定排序，选项 A 正确。选择排序和快排一般不稳定；稳定排序保证不改变相等元素相对顺序，选 A。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_13",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "某算法需要枚举 n 个对象；对每个对象，还需要进行一次二分查找。若二分查找的对象规模也是 n，则该算法的时间复杂度通常为（  ）。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(log n)"
          ],
          "answer": 1,
          "explanation": "枚举 n 个对象，每个对象做一次 O(log n) 的二分查找，总复杂度为 n × O(log n) = O(n log n)，选 B。循环与二分嵌套相乘。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_14",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在升序数组中用二分查找第一个大于等于 x 的位置。若当前中点 mid 满足 a[mid] < x，下一步应（  ）。",
          "options": [
            "令闭区间右边界变为 mid - 1",
            "令闭区间左边界变为 mid + 1",
            "立即返回 mid",
            "交换 a[mid] 与 x"
          ],
          "answer": 1,
          "explanation": "a[mid]<x 说明 mid 及其左边都小于 x，不可能是答案，应把区间下界提到 mid+1，继续向右半段查找，选 B。二分查找的移动方向取决于比较结果。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_15",
          "kp": "kp7_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在如下网格中，# 表示不能经过的格子，. 表示可以经过的格子。从左上角走到右下角，每次只能向右或向下移动，不同路径共有（  ）条。\n. . . . .\n. # . # .\n. . . . .\n# . # . .\n. . . . .",
          "options": [
            "4",
            "5",
            "6",
            "8"
          ],
          "answer": 3,
          "explanation": "用 DP 统计路径数，障碍处为 0。逐格计算可得：(0,0)=1，第一行全 1；到 (2,2) 有 2 条，(2,4) 有 3 条；第三行 (3,4) 为 5；最后一行累加得到 (4,4)=8，选 D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_18",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "0/1 背包使用一维数组优化时，容量从小到大枚举也能保证每件物品最多被选一次。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "容量从小到大枚举会允许同一件物品被重复选择（变为完全背包），必须倒序枚举才能保证每件最多选一次，说法错误。倒序枚举是 0/1 背包一维优化的关键。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_23",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序的常见实现是稳定排序，选择排序也是。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "冒泡排序稳定，但选择排序交换最小元素时可能破坏相等元素相对顺序，一般不稳定，说法错误。选择排序的交换策略导致不稳定。动态规划与算法复杂度的分析需要反复练习才能熟练掌握。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_25",
          "kp": "kp7_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在二维动态规划中，状态 dp[i][j] 的计算常常依赖其他状态，这些状态的计算必须在完成 dp[i][j] 的计算前完成。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "DP 状态转移有先后依赖，被依赖的状态必须先算出来，说法正确。例如二维 DP 中 dp[i][j] 依赖 dp[i-1][j] 等状态，必须按依赖顺序从小到大计算，否则会用到未求出的值。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_27",
          "kp": "kp7_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：消消乐\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定 n 个整数构成的数组。每次指定一个元素，获得该元素两侧相邻元素之和的分数（相邻元素不存在则视为 0），并把该元素删去，直到数组为空。求能获得的分数总和最大是多少。\n输入：第一行 n；第二行 n 个非负整数。\n输出：最大分数总和。\n【数据范围】\n1 ≤ n ≤ 100",
          "options": [],
          "answer": null,
          "explanation": "思路：设 f[l][r] 表示删除区间 [l,r] 内所有元素能获得的最大分数。枚举该区间最后删除的元素 k：删除它时两侧相邻元素是 l-1 和 r+1，得分为 a[l-1]+a[r+1]，加上左右子区间的最优值。转移 f[l][r]=max(f[l][k-1]+f[k+1][r]+a[l-1]+a[r+1])，区间长度从小到大枚举。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint n;\nint a[110];\nlong long f[110][110];\nint main(){\n    cin >> n;\n    for (int i = 1; i <= n; i++) cin >> a[i];\n    for (int i = 1; i <= n; i++)\n        for (int l = 1, r = i; r <= n; l++, r++)\n            for (int k = l; k <= r; k++)\n                f[l][r] = max(f[l][r], f[l][k-1] + f[k+1][r] + a[l-1] + a[r+1]);\n    cout << f[1][n] << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\n1 6 3 2 9 1",
              "expectedOutput": "55"
            },
            {
              "input": "5\n3 1415 926 53 58",
              "expectedOutput": "5771"
            }
          ]
        }
      ]
    },
    "kp7_03": {
      "title": "图的定义及遍历",
      "questions": [
        {
          "id": "l7_202312_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "G 是一个非连通无向图，共有 28 条边，则该图至少有（  ）个顶点。",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": 3,
          "explanation": "非连通图要顶点最少，就让其中一部分点组成尽可能密集的连通块，其余点孤立。8 个顶点的完全图有 8×7÷2=28 条边，正好满足 28 条边，再另加一个孤立点保证非连通，所以共 9 个顶点，选 D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "某二叉树 T 的先序遍历序列为：{A B D F C E G H}，中序遍历序列为：{B F D A G E H C}，则下列说法中正确的是（  ）。",
          "options": [
            "T 的度为 1",
            "T 的高为 4",
            "T 有 4 个叶节点",
            "以上说法都不对"
          ],
          "answer": 1,
          "explanation": "由先序（根左右）和中序（左根右）可还原二叉树：A 为根，左子树为 B、D、F，右子树为 C、E、G、H。画出树后可知高度为 4（A 到 F 共 4 层），叶节点只有 B、F、G、H 之外的 C 子树部分，叶节点数不是 4，度为 2，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "图的广度优先搜索中既要维护一个标志数组标志已访问的图的结点，还需哪种结构存放结点以实现遍历？(  )",
          "options": [
            "双向栈",
            "队列",
            "哈希表",
            "堆"
          ],
          "answer": 1,
          "explanation": "广度优先搜索按层向外扩展，先访问的结点先扩展其邻居，正好符合先进先出，用队列存放待访问结点；栈适合深度优先，堆和哈希表与 BFS 的层序扩展无关。队列先入先出的特性恰好保证 BFS 按离起点距离从近到远逐层处理，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_11",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "学生先修课程关系构成有向图 G，边 <U,V> 表示 U 是 V 的先修课，要找到某门课程 C 的全部先修课，下面哪种方法不可行？(  )",
          "options": [
            "BFS 搜索",
            "DFS 搜索",
            "DFS+BFS",
            "动态规划"
          ],
          "answer": 3,
          "explanation": "找某顶点的全部先修课，等价于在反图上找从 C 出发能到达的所有顶点，用 BFS 或 DFS 都能完成，所以选项 A、B、C 都可行。动态规划不适用于这种可达性查询，本题选 D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_12",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵完全二叉树有 2023 个结点，则叶结点有多少个？(  )",
          "options": [
            "1024",
            "1013",
            "1012",
            "1011"
          ],
          "answer": 2,
          "explanation": "完全二叉树按层序编号，最后一个非叶结点是第 2023 号结点的双亲，序号为 2023÷2=1011（向下取整），所以叶结点数 = 2023-1011=1012，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_13",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "用邻接表结构保存一个有向图 G（n 个顶点、e 条弧），则求图中某个顶点 u（序号为 k）的度的算法复杂度是（  ）。",
          "options": [
            "O(n)",
            "O(e)",
            "O(n+e)",
            "O(n+2e)"
          ],
          "answer": 1,
          "explanation": "邻接表中某点的出度直接遍历该点出发的边即可；求入度需要在反图上做类似操作，或扫描整张邻接表统计包含该顶点的弧。整体最坏情况要遍历所有边，复杂度为 O(e)，与顶点数 n 无关，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "从顶点 v1 开始遍历下图 G 得到顶点访问序列，在下面所给的 4 个序列中符合广度优先的序列有几个？(  )\n{v1 v2 v3 v4 v5}，{v1 v2 v4 v3 v5}，{v1 v4 v2 v3 v5}，{v1 v2 v4 v5 v3}",
          "options": [
            "4",
            "3",
            "2",
            "1"
          ],
          "answer": 1,
          "explanation": "BFS 要求先访问完与起点距离为 k 的所有顶点，再访问距离 k+1 的顶点。第一个序列中 v3 与 v1 的距离大于 v4，但 v3 排在 v4 前面，违反 BFS 的按层顺序，其余三个序列都符合广度优先，选 B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_17",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨在开发画笔刷小程序，操作之一是选中黄颜色，然后在左图的中间区域双击后，就变成了右图。这个操作可以用图的泛洪算法来实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "泛洪算法从某个点出发向周边相邻区域扩展填充颜色，与题目中点击中间区域填充成右图的操作原理一致，所以说法正确。泛洪正是从起点向四周相邻格扩散的填充过程。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_18",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "假设一棵完全二叉树共有 N 个节点，则树的深度为 log(N)+1。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "以 2 为底的对数要写成 [log₂N]+1，直接用 log(N) 默认以 e 为底，数值不对，所以说法错误。完全二叉树深度应为向下取整的 log₂N 再加一，题目写成自然对数形式不准确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "简单有向图有 n 个顶点和 e 条弧，可以用邻接矩阵或邻接表来存储，二者求节点 u 的度的时间复杂度一样。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "邻接矩阵求某点度要扫描一行一列，复杂度 O(n)；邻接表只需统计该点出边和入边，复杂度 O(e)，二者不同，所以说法错误。两种存储结构求度的方式不同，时间复杂度并不一样。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_24",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "广度优先搜索（BFS）能够判断图是否连通。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "从任意点出发做 BFS，记录访问到的不同顶点个数，若等于总点数说明图连通，否则不连通，所以 BFS 可以判断图的连通性，说法正确。连通性判断就是看能否一次遍历覆盖全部顶点。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_02",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序属于哪种算法？\n<pre><code>void queen(int n) { for(int i=0;i<8;i++){ pos[n]=i; ... 判断攻击 ... if(n==7)return; else queen(n+1);} }</code></pre>",
          "options": [
            "贪心算法",
            "动态规划",
            "深度优先搜索",
            "广度优先搜索"
          ],
          "answer": 2,
          "explanation": "这是经典的八皇后问题，程序逐行尝试放置皇后，遇到冲突就回溯换列，本质是对搜索树做深度优先的尝试与回退，属于深度优先搜索，选 C。八皇后是 DFS 加剪枝回溯的典型例题。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_04",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个连通的简单无向图，共有 28 条边，则该图至少有(  )个顶点。",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": 2,
          "explanation": "连通图边数最多的是完全图，8 个顶点的完全图边数为 8×7÷2=28，正好有 28 条边，所以至少需要 8 个顶点，选 C。注意本题要求连通，与考察非连通图的那一题答案不同。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "已知一颗二叉树的中序遍历序列为：{C F B A E D G}，后序遍历序列为：{F C B E G D A}，则下列说法中正确的是(  )。",
          "options": [
            "该树是平衡二叉树。",
            "该树的高为 4。",
            "该树有 4 个叶节点。",
            "以上说法都不对。"
          ],
          "answer": 1,
          "explanation": "后序最后一个 A 是根，中序中 A 左边 C F B 为左子树、右边 E D G 为右子树。左子树根为 B，其左子树 C F（C 为根，F 为左孩子）；右子树根 D，左 E 右 G。树高为 A-B-C-F 共 4 层，左右子树深度相差过大，不是平衡树，叶节点为 F、E、G 共 3 个，选 B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于二叉排序树的说法，正确的是（  ）。",
          "options": [
            "二叉排序树的中序遍历序列一定是有序的。",
            "在含 n 个节点的二叉排序树中查找元素，最差情况的时间复杂度为 O(n)。",
            "二叉排序树一定是二叉平衡树。",
            "以上说法都不对。"
          ],
          "answer": 0,
          "explanation": "二叉排序树满足左子树所有值小于根、右子树所有值大于根，因此中序遍历得到的序列一定从小到大有序，选项 A 正确。选项 B 最差 O(n) 也对，但它是关于查找复杂度的补充，题目要选正确说法，A 是最直接正确的，选 A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个简单有向图有 10 个结点、30 条边。再增加多少条边可以成为完全图。（  ）",
          "options": [
            "60",
            "70",
            "15",
            "20"
          ],
          "answer": 0,
          "explanation": "n 个顶点的简单有向完全图边数为 n(n-1)=10×9=90 条，现有 30 条，还需要增加 90-30=60 条，选 A。有向完全图每对顶点之间有两条方向相反的有向边。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_10",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~12，连接关系如 8-10、10-12、12-9、12-11、12-4、4-5、5-3、3-2、2-1、1-6、6-7、7-8、8-6、6-1、1-5 等。",
          "options": [
            "8, 6, 1, 5, 3, 4, 2, 10, 7, 12, 11, 9",
            "7, 8, 6, 4, 2, 1, 5, 3, 12, 9, 11, 10",
            "8, 10, 12, 9, 11, 4, 5, 3, 2, 1, 6, 7",
            "7, 8, 10, 9, 11, 12, 4, 5, 1, 2, 3, 6"
          ],
          "answer": 2,
          "explanation": "以 8 为起点做 DFS：8→10→12→9→11→4→5→3→2→1→6→7。每一步都是深入未访问邻居（如 12 先访问 9、11、4，4 再访问 5、2 等），走到底再回溯，序列为 8,10,12,9,11,4,5,3,2,1,6,7，正好是选项 C，其余选项违反 DFS 深入回溯的顺序。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_18",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一棵有 N 个节点的完全二叉树，则树的深度为 floor(log2N)+1。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "完全二叉树按层铺满节点，深度为 floor(log2N)+1，这是正确的公式，说法正确。从 1 层开始编号，每层节点数翻倍，反推可得深度的对数公式。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_24",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "围棋游戏中，判断落下一枚棋子后是否会提掉对方的子，可以使用泛洪算法来实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "提子需要判断对方被围住的气是否为空，即从一个位置出发扩展找连通区域，泛洪算法正适合这类连通性判断，说法正确。围棋提子判断本质上是检查一块棋的连通气域。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_27",
          "kp": "kp7_03",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：俄罗斯方块\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定一个 n×m 的彩色网格，同色方块四连通构成一个俄罗斯方块。两个方块种类相同当且仅当可以通过平移重合（与颜色无关）。求网格中不同种类俄罗斯方块的数量。\n输入：第一行 n m；接下来 n 行每行 m 个正整数表示颜色。\n输出：不同形状的种类数。\n【数据范围】\n1 ≤ n ≤ 500\n1 ≤ m ≤ 500",
          "options": [],
          "answer": null,
          "explanation": "思路：先用 DFS 找出每个同色四连通块，记录其覆盖的最小外接矩形以及所有格子的相对坐标，得到该块的形状。再用字典树（Trie）对形状进行去重统计：依次把宽度、高度和排序后的相对坐标编码插入 Trie，若路径已存在说明形状已出现过，否则种类数加一。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\n#include <map>\nusing namespace std;\nconst int N = 505;\nint n, m;\nint val[N][N];\nint vis[N][N];\nint xmin, xmax, ymin, ymax;\nint posx[N * N], posy[N * N], cnt;\nint idx[N * N];\nbool isend[3 * N * N];\nmap<int, int> ch[3 * N * N];\nint root, ncnt;\nint ans;\nvoid dfs(int x, int y, int c) {\n    if (x < 1 || x > n || y < 1 || y > m) return;\n    if (vis[x][y]) return;\n    if (val[x][y] != c) return;\n    vis[x][y] = 1;\n    xmin = min(xmin, x), xmax = max(xmax, x);\n    ymin = min(ymin, y), ymax = max(ymax, y);\n    posx[++cnt] = x; posy[cnt] = y;\n    dfs(x - 1, y, c); dfs(x + 1, y, c); dfs(x, y - 1, c); dfs(x, y + 1, c);\n}\nvoid go(int &n, int v) { if (!ch[n].count(v)) ch[n][v] = ++ncnt; n = ch[n][v]; }\nvoid work(int x, int y) {\n    cnt = 0;\n    xmin = n, xmax = 1; ymin = m, ymax = 1;\n    dfs(x, y, val[x][y]);\n    for (int i = 1; i <= cnt; i++) idx[i] = (posx[i] - xmin) * (ymax - ymin + 1) + (posy[i] - ymin);\n    sort(idx + 1, idx + cnt + 1);\n    int cur = root;\n    go(cur, xmax - xmin + 1); go(cur, ymax - ymin + 1);\n    for (int i = 1; i <= cnt; i++) go(cur, idx[i]);\n    ans += (!isend[cur]); isend[cur] = 1;\n}\nint main() {\n    root = ++ncnt;\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i++) for (int j = 1; j <= m; j++) scanf(\"%d\", &val[i][j]);\n    for (int i = 1; i <= n; i++) for (int j = 1; j <= m; j++) if (!vis[i][j]) work(i, j);\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 6\n1 2 3 4 4 5\n1 2 3 3 4 5\n1 2 2 3 4 5\n1 6 6 7 7 8\n6 6 7 7 8 8",
              "expectedOutput": "7"
            }
          ]
        },
        {
          "id": "l7_202406_02",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对于如下图的二叉树（根为 A，A 左孩子 B、右孩子 C，B 左孩子 D、右孩子 E，C 左孩子 F、右孩子 G，F 右孩子 H，G 左孩子 I、右孩子 J），说法正确的是（  ）。",
          "options": [
            "先序遍历是 132。",
            "中序遍历是 123。",
            "后序遍历是 312。",
            "先序遍历和后序遍历正好是相反的。"
          ],
          "answer": 3,
          "explanation": "树的先序为 ABDEFCGHIJ 之类，中序为 DBEAFCGIHJ，后序为 DEBFHIJGCA。先序和后序并非互为逆序，只有在特殊情况才相反，选项 D 说法错误，其余选项均不对，本题选 D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "关于图的深度优先搜索和广度优先搜索，下列说法错误的是（  ）。",
          "options": [
            "二叉树也是一种图。",
            "二叉树的前序遍历和后序遍历都是深度优先搜索的一种。",
            "深度优先搜索可以从任意根节点开始。",
            "二叉树的后序遍历也是广度优先搜索的一种。"
          ],
          "answer": 3,
          "explanation": "二叉树的后序遍历先访问左子树、再右子树、最后根，属于深度优先搜索，不是广度优先搜索，选项 D 错误，本题选 D。前中后序三种遍历都是深度优先。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对于如下二叉树（先序 ABDHECFGI 之类），下面访问顺序说法错误的是（  ）。",
          "options": [
            "HDEBFIGCA 不是它的后序遍历序列",
            "ABCDEFGHI 是它的广度优先遍历序列",
            "ABDHECFGI 是它的深度优先遍历序列",
            "ABDHECFGI 是它的先序遍历序列"
          ],
          "answer": 0,
          "explanation": "由先序 ABDHECFGI 还原的树，其后序遍历恰好是 HDEBFIGCA，所以选项 A 说它不是后序是错误的。ABCDEFGHI 是层次遍历即广度优先，ABDHECFGI 是先序遍历也是深度优先，选 A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于图的说法正确的是（  ）。",
          "options": [
            "在无向图中，环是指至少包含三个不同顶点，并且第一个顶点和最后一个顶点是相同的路径。",
            "在有向图中，环是指一个顶点经过至少另一个顶点到自身的路径。",
            "在有向图中，如果任意两个顶点之间都存在一条边，则这个图一定是强连通图。",
            "在有向图中，所有顶点的入度和出度的总和就是图的边数的两倍。"
          ],
          "answer": 3,
          "explanation": "有向图中每条边对入度贡献 1、对出度贡献 1，所有顶点入度之和等于边数，出度之和也等于边数，两者相加等于边数的两倍，选项 D 正确。A、B 关于环的定义不严谨，C 中任意两点有边并不保证强连通，选 D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_10",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "图的存储和遍历算法，下面说法错误的是（  ）。",
          "options": [
            "图的深度优先搜索和广度优先搜索对有向图和无向图都适用。",
            "图的深度优先搜索和二叉树的先序遍历道理是不一样的。",
            "图的深度优先搜索需要借助栈来完成。",
            "邻接表中，顶点对应链表中的边结点数目正好是顶点的度。"
          ],
          "answer": 1,
          "explanation": "图的 DFS 与二叉树先序遍历本质相同，都是先访问根（当前顶点）再深入子节点，选项 B 说它们道理不一样是错误的，本题选 B。DFS 借助栈完成深入回溯。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_11",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "如下图所示的邻接表结构（顶点 0 的链表含 1、3，顶点 1 的链表含 0、2，顶点 2 的链表含 1，顶点 3 的链表含 0），表示的是下列哪个选项中的图？",
          "options": [
            "无向图，边为 (0,1),(1,2),(0,3)",
            "无向图，边为 (0,1),(1,2),(2,3),(0,3)",
            "无向图，边为 (0,1),(1,2),(0,3)",
            "有向图，边为 0->1,1->2,2->1,3->0"
          ],
          "answer": 2,
          "explanation": "邻接表中每条无向边在两端点各记录一次：0 的链表有 1 和 3，1 的链表有 0 和 2，2 的链表有 1，3 的链表有 0，对应边为 (0,1)、(1,2)、(0,3)，即选项 C 描述的无向图。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_12",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "如下图所示的邻接矩阵（inf 表示无穷大），表示的是下列哪个选项中的图？\n矩阵：第 1 行 0,5,inf,8；第 2 行 5,0,3,inf；第 3 行 inf,3,0,2；第 4 行 8,inf,2,0（示例）",
          "options": [
            "无向带权图，边为 1-2(5),1-4(8),2-3(3),3-4(2)",
            "有向带权图，1->2,2->3,3->4,4->1",
            "无向带权图，边为 1-2,2-3,3-4",
            "有向图，边为 1->4,2->1,3->2,4->3"
          ],
          "answer": 0,
          "explanation": "矩阵对称表示无向图，对称位置都有相同的权值；inf 位置表示无边。读出非 inf 的对称边为 1-2 权 5、1-4 权 8、2-3 权 3、3-4 权 2，即选项 A 的无向带权图。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发可经 3、4 等扩展，如 1-3-4-2-7-6-8-9-5 形成深搜路径。",
          "options": [
            "1, 3, 7, 5, 4, 2, 6, 8, 9",
            "9, 4, 2, 1, 3, 5, 7, 6, 8",
            "1, 3, 4, 2, 7, 6, 8, 9, 5",
            "9, 7, 6, 8, 4, 2, 1, 5, 3"
          ],
          "answer": 2,
          "explanation": "DFS 从 1 出发深入：1→3→4→2，回溯到 4 再访问 7→6→8→9，最后回溯访问 5，序列为 1,3,4,2,7,6,8,9,5，正好是选项 C，其余选项不符合 DFS 的深入回溯特征，选 C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一颗 N 层的二叉树，至少有 2^N - 1 个节点。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "N 层二叉树可以是退化的链状，每层只有 1 个节点，最少只要 N 个节点，2^N-1 是满二叉树（每层铺满）的节点数，说法错误。最少节点数与树的形态有关。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "非连通图不能使用广度优先搜索算法进行遍历。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "对非连通图，可以从每个未访问顶点依次做 BFS，仍能遍历所有顶点，只是需要多次启动，说法错误。遍历非连通图只需对每个连通分量各启动一次搜索。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "泛洪算法的递归方法容易造成溢出，因此大的二维地图算法中，一般不用递归方法。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归泛洪在大型地图上调用栈可能很深导致栈溢出，实际中常用 BFS 或显式栈代替，说法正确。大尺寸地图用迭代实现可以避免栈溢出。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "某二叉树 T 的先序遍历序列为：{A B D C E G H F}，中序遍历序列为：{D B A H G E C F}，则下列说法中正确的是(  )。",
          "options": [
            "T 的高为 5",
            "T 有 4 个叶节点",
            "T 是平衡树",
            "以上说法都不对"
          ],
          "answer": 0,
          "explanation": "由先序和中序还原树：A 为根，左子树 B、D，右子树 C、E、G、H、F。右子树中 E 的左侧有 G、H（H 为 G 左孩子），C 的右子树 F。从根 A 到叶 H 或 D 深度为 5，所以高为 5，选 A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵完全二叉树有 431 个结点，则叶结点有多少个？(  )",
          "options": [
            "176",
            "215",
            "216",
            "255"
          ],
          "answer": 2,
          "explanation": "完全二叉树按层序编号，叶结点数等于 ceil(n÷2)。n=431 时 ceil(431÷2)=216，即叶结点有 216 个，选 C。这是完全二叉树叶结点数的快速计算公式。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树的说法，错误的是（  ）。",
          "options": [
            "二叉树的中序遍历与其深度优先遍历总是相同的。",
            "所有树都可以构造一颗二叉树与之一一对应。",
            "如果树的一个叶结点有两个不同的祖先结点，那么其中一个一定是另一个的祖先结点。",
            "树的结点不能有两个父结点。"
          ],
          "answer": 0,
          "explanation": "中序遍历不是深度优先遍历，深度优先是前序或后序，选项 A 说中序遍历和 DFS 总是相同是错误的，本题选 A。前序、中序、后序中只有前序和后序属于深度优先。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_08",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个简单无向图有 10 个结点、30 条边。再增加多少条边可以成为完全图。（  ）",
          "options": [
            "10",
            "15",
            "51",
            "60"
          ],
          "answer": 1,
          "explanation": "10 个顶点的无向完全图边数为 10×9÷2=45，现有 30 条，还需增加 45-30=15 条，选 B。完全图每对顶点之间都有一条边。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_10",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个迷宫，已知从起点不经过重复结点到达终点的路径有且仅有一条，则下面说法错误的是（  ）。",
          "options": [
            "可以使用深度优先搜索找到这条路径。",
            "可以使用广度优先搜索找到这条路径。",
            "该迷宫内与起点连通的结点，一定也与终点连通。",
            "该迷宫内与起点连通的结点及它们之间的路径可以抽象为无向无环图。"
          ],
          "answer": 3,
          "explanation": "起点可达的所有节点构成一个连通分量，里面可能含有环（不在唯一路径上的死循环分支），所以不一定是无环图，选项 D 说法错误。DFS、BFS 都能找到那条唯一路径，选项 C 在无向图连通分量内也成立，选 D。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个可能是下图的广度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发先访问其邻接点 3、5 等，再逐层扩展。",
          "options": [
            "1, 3, 5, 7, 4, 2, 6, 8, 9",
            "9, 4, 2, 1, 3, 7, 5, 6, 8",
            "1, 3, 5, 7, 6, 8, 9, 4, 2",
            "9, 4, 7, 2, 1, 3, 5, 6, 8"
          ],
          "answer": 0,
          "explanation": "BFS 按层访问：从 1 出发，第一层为 1 的邻接点（如 3、5），第二层再访问它们的邻接点，序列为 1,3,5,7,4,2,6,8,9 符合按层扩展且队内顺序合理，选 A，其余选项不满足 BFS 的层次顺序。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一颗 N 层的完全二叉树，一定有 2^N - 1 个结点。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "完全二叉树只要求每层从左到右连续铺满，最后一层可以不满，节点数在 2^(N-1) 到 2^N-1 之间，不一定等于 2^N-1，说法错误。满二叉树才是每层都铺满。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一个图，不管是否连通，都可以使用深度优先搜索算法进行遍历。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "对非连通图，从每个未访问顶点分别启动 DFS 即可遍历全部顶点，所以无论是否连通都能用 DFS 遍历，说法正确。遍历要覆盖所有连通分量。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一个图中，每个结点表达一个人，连接两个结点的边表达两个结点对应的人相互认识，则这个图可以用来表达社交网络。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用顶点表示人、边表示认识关系，正是社交网络的常见图模型，说法正确。图中边反映人物之间的认识关系，可以用邻接表或邻接矩阵存储，便于分析社交圈子、好友推荐等应用。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_26",
          "kp": "kp7_03",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨寻宝\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：小杨有一棵 n 个节点的树，部分节点放有宝物。小杨可以任选起点，每条边最多经过一次（经过后消失），经过有宝物节点即取得宝物。判断能否取得所有宝物。\n输入：第一行 t（测试组数）；每组第一行 n；第二行 n 个非负整数（1 表示有宝物）；之后 n-1 行每条边。\n输出：每组输出 Yes 或 No。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：每条边最多走一次相当于在树上找一条路径，能覆盖所有宝物节点当且仅当所有宝物节点都在同一条简单路径上。先 DFS 求出深度，找到深度最大的宝物节点作为一端，再以它为根 DFS 检查：任意节点子树中若出现两个以上含宝物的分支则不可能，即所有宝物必须分布在一条链上。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nvector<int> g[N];\nint col[N], dep[N], has[N];\nvoid dfs(int x, int fa){ dep[x] = dep[fa] + 1; for(auto i:g[x]) if(i != fa) dfs(i, x); }\nbool dfs2(int x, int fa){\n    for(auto i:g[x]) if(i != fa){\n        auto res = dfs2(i, x);\n        if(res == false) return false;\n        if(has[i] || col[i]) has[x]++;\n    }\n    if(has[x] > 1) return false;\n    return true;\n}\nint main(){\n    int t; cin >> t;\n    while(t--){\n        int n; cin >> n;\n        for(int i=1;i<=n;i++){ dep[i]=0; g[i].clear(); cin>>col[i]; }\n        for(int i=1;i<n;i++){ int u,v; cin>>u>>v; g[u].push_back(v); g[v].push_back(u); }\n        dfs(1,0);\n        int mx=0, pos=0;\n        for(int i=1;i<=n;i++){ has[i]=0; if(col[i]) if(dep[i]>mx){ mx=dep[i]; pos=i; } }\n        bool res = dfs2(pos,0);\n        if(res) cout<<\"Yes\\n\"; else cout<<\"No\\n\";\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n5\n0 1 0 1 0\n1 2\n1 3\n3 4\n3 5\n5\n1 1 1 1 1\n1 2\n1 3\n3 4\n3 5",
              "expectedOutput": "Yes\nNo"
            }
          ]
        },
        {
          "id": "l7_202412_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于有向图的说法，错误的是(  )。",
          "options": [
            "n 个顶点的弱连通有向图，最少有 n-1 条边。",
            "n 个顶点的强连通有向图，最少有 n 条边。",
            "n 个顶点的有向图，最多有 n² 条边。",
            "n 个顶点的有向完全图，有 n(n-1) 条边。"
          ],
          "answer": 2,
          "explanation": "简单有向图任意两点间最多有一条有向边，所以 n 个顶点最多有 n(n-1) 条边，而不是 n² 条，选项 C 错误，本题选 C。自环不计入简单有向图的边。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵二叉树的每个结点均满足：结点的左子树和右子树，要么同时存在，要么同时不存在。该树有 197 个结点，则其叶结点有多少个？(  )",
          "options": [
            "98",
            "99",
            "不存在这样的树。",
            "无法确定叶结点数量。"
          ],
          "answer": 1,
          "explanation": "满足每个结点要么有 0 个要么有 2 个孩子的树称为满二叉树，叶结点数 = (n+1)÷2 = (197+1)÷2 = 99，选 B。这种树每个内部节点都有两个孩子。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于二叉树的说法，错误的是（  ）。",
          "options": [
            "二叉排序树的中序遍历顺序与元素排序的顺序是相同的。",
            "n 个元素的二叉排序树，其高一定为 floor(log2n)+1。",
            "自平衡二叉查找树（AVL 树）是一种二叉排序树。",
            "任意的森林，都可以映射为一颗二叉树进行表达和存储。"
          ],
          "answer": 1,
          "explanation": "二叉排序树的高度取决于插入顺序，最差可退化为单链表高度为 n，不是固定为 floor(log2n)+1，选项 B 说法错误，本题选 B。只有平衡树高度才是对数级。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_08",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个简单无向图有 10 个结点、6 条边。在最差情况，至少增加多少条边可以使其连通？（  ）",
          "options": [
            "3",
            "4",
            "6",
            "9"
          ],
          "answer": 2,
          "explanation": "最差情况是 6 条边互不相连，形成 3 条独立边（6 个点）加 4 个孤立点，共 7 个连通分量。要使整个图连通，需要增加 分量数-1 = 6 条边，选 C。每加一条边最多合并两个分量。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个不可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发。",
          "options": [
            "1, 2, 3, 5, 7, 8, 6, 9, 4",
            "1, 4, 7, 8, 9, 5, 2, 3, 6",
            "1, 5, 7, 8, 9, 4, 2, 3, 6",
            "1, 2, 3, 6, 9, 8, 5, 7, 4"
          ],
          "answer": 0,
          "explanation": "从 1 出发做 DFS，1 的邻接点有 2、4、5 等。序列 1,2,3,5,7,8,6,9,4 中，访问到 3 后下一步跳到 5，但 3 与 5 之间若没有边、且 3 还有未访问邻接点时，就不能直接跨到 5，该序列不符合 DFS 的深入回溯规则，故 A 不可能。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "邻接表和邻接矩阵都是图的存储形式。邻接表在遍历单个顶点的所有边时，时间复杂度更低；邻接矩阵在判断两个顶点之间是否有边时，时间复杂度更低。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "遍历某点的全部出边：邻接表 O(deg)，邻接矩阵 O(n)，邻接表更快；判断两点是否有边：邻接矩阵 O(1)，邻接表 O(deg)，邻接矩阵更快，说法正确。两种存储各有优势。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一个图中，每个顶点表达一个城市，连接两个顶点的边表达从一个城市到达另一个城市的一种交通方式。这个图可以用来表达交通网络，且是简单有向图。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两座城市之间可能有多种交通方式（多边），且道路通常双向通行，所以该图不一定是简单有向图，说法错误。多种交通方式会形成多重边。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树和图的说法，错误的是（  ）。",
          "options": [
            "树是一种有向无环图，但有向无环图不都是一棵树。",
            "如果把树看做有向图，每个节点指向其子节点，则该图是强连通图。",
            "n 个顶点且连通的无向图，其最小生成树一定包含 n-1 条边。",
            "n 个顶点、n-1 条边的有向图，一定不是强连通的。"
          ],
          "answer": 1,
          "explanation": "每个节点只指向子节点的有向树，边的方向单一，不可能从子节点回到根节点，不是强连通图，选项 B 说法错误，本题选 B。强连通要求任意两点互相可达。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用深度优先搜索（DFS）遍历图，并输出遍历顺序。横线处应该填入的是（  ）。\n<pre><code>while(!s.empty())\n{\n    node=s.top();\n    s.pop();\n    for(neighbor: graph[node])\n        if(!visited[neighbor])\n        {\n            ______;\n            ______;\n        }\n}</code></pre>",
          "options": [
            "visited[neighbor]=true; s.push(neighbor-1);",
            "visited[neighbor]=true; s.push(neighbor+1);",
            "visited[neighbor]=false; s.push(neighbor);",
            "visited[neighbor]=true; s.push(neighbor);"
          ],
          "answer": 3,
          "explanation": "DFS 需要把未访问邻居标记为已访问并入栈，保证不会重复访问且能继续深入，所以两处分别填 visited[neighbor]=true 和 s.push(neighbor)，选 D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一颗 N 层的满二叉树，一定有 2^N - 1 个结点。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "满二叉树每一层都铺满节点，N 层共 1+2+4+...+2^(N-1)=2^N-1 个节点，说法正确。这是等比数列求和的结果。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "邻接表和邻接矩阵都是图的存储形式。为了操作时间复杂度考虑，同一个图可以同时维护两种存储形式。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "两种存储各有优势，可以同时维护分别用于不同操作（如快速判边用矩阵、快速遍历邻接用表），说法正确。空间允许时双存储能兼顾两类操作。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "按照规则生成一棵二叉树：以一个人为根，其父亲为左子节点、母亲为右子节点，对父亲母亲分别用同样规则生成子树。记录 30 代的直系家谱，则这是一棵满二叉树。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "30 代家谱理论祖先数为 2^30 个，但人数远远不够，必然存在祖先重合（近亲），导致节点重复，不可能是满二叉树，说法错误。实际人口远少于理论祖先数。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "假定只有一个根节点的树的深度为 1，则一棵有 n 个节点的完全二叉树，则树的深度为(  )。",
          "options": [
            "floor(log2n)+1",
            "ceil(log2(n+1))",
            "log2n",
            "不能确定"
          ],
          "answer": 0,
          "explanation": "完全二叉树按层铺满节点，n 个节点时深度为 floor(log2n)+1，选 A。这是完全二叉树深度的标准公式。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对于如下图的二叉树（5 个结点 A、B、C、D、E），说法正确的是（  ）。",
          "options": [
            "先序遍历是 ABDEC。",
            "中序遍历是 BDACE。",
            "后序遍历是 DBCEA。",
            "广度优先遍历是 ABCDE。"
          ],
          "answer": 3,
          "explanation": "该二叉树的层次遍历（广度优先）为 ABCDE；先序应为 ABDEC 附近的顺序，但需结合树结构核对，四个选项中只有广度优先 ABCDE 一定正确，选 D。层次遍历按层从上到下输出。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_07",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "图的存储和遍历算法，下面说法错误的是（  ）。",
          "options": [
            "图的深度优先遍历须要借助队列来完成。",
            "图的深度优先遍历和广度优先遍历对有向图和无向图都适用。",
            "使用邻接矩阵存储一个包含 n 个顶点的有向图，统计其边数的时间复杂度为 O(n²)。",
            "同一个图分别使用出边邻接表和入边邻接表存储，其边结点个数相同。"
          ],
          "answer": 0,
          "explanation": "深度优先遍历借助栈（可用递归），用队列的是广度优先遍历，选项 A 说法错误，本题选 A。栈的后进先出正好匹配 DFS 的深入回溯。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_08",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个连通的简单有向图，共有 28 条边，则该图至少有(  )个顶点。",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 1,
          "explanation": "n 个顶点的简单有向图最多 n(n-1) 条边。n=6 时最多 30 条边，能容纳 28 条；n=5 时最多 20 条放不下，所以至少 6 个顶点，选 B。简单有向图无自环无重边。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个不可能是下图的广度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发。",
          "options": [
            "1, 2, 4, 5, 3, 7, 6, 8, 9",
            "1, 2, 5, 4, 3, 7, 8, 6, 9",
            "1, 4, 5, 2, 7, 3, 8, 6, 9",
            "1, 5, 4, 2, 7, 3, 8, 6, 9"
          ],
          "answer": 1,
          "explanation": "BFS 按层访问并借助队列，同一层内按入队顺序输出。选项 B 中 1,2,5,4,... 的访问顺序与该图的邻接关系及 BFS 队列规则不符，不可能是广度优先遍历序列，选 B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉排序树的中序遍历序列一定是有序的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉排序树左子树都小于根、右子树都大于根，中序遍历得到升序序列，说法正确。这一性质使二叉排序树能高效完成有序遍历和范围查找，是它被称为排序树的原因。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "如果将城市视作顶点，公路视作边，将城际公路网络抽象为简单图，可以满足城市间的车道级导航需求。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "简单图只记录顶点和边，没有车道数、方向、限速等细节，不能满足车道级导航需求，说法错误。车道级导航需要更丰富的数据模型。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_26",
          "kp": "kp7_03",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：线图\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定 n 个结点 m 条边的简单无向图 G。G 的线图 L(G) 以 G 的每条边为结点，两条边有公共端点则在 L(G) 中连边。求 L(G) 中的无向边数量。\n输入：第一行 n m；之后 m 行每条边。\n输出：线图中边的数量。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：线图中两条边相邻当且仅当它们共用一个端点，因此统计每个顶点的度数 deg[i]，与该顶点关联的 deg[i] 条边两两都会在线图中相连，贡献 C(deg[i],2) 条边。答案就是所有顶点 deg[i]×(deg[i]-1)÷2 之和，只需统计度数即可，O(n+m)。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, m, deg[N];\nlong long ans;\nint main(){\n    scanf(\"%d%d\", &n, &m);\n    while (m--){ int u, v; scanf(\"%d%d\", &u, &v); deg[u]++; deg[v]++; }\n    for (int i = 1; i <= n; i++) ans += 1ll * deg[i] * (deg[i] - 1) / 2;\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 4\n1 2\n2 3\n3 1\n4 5",
              "expectedOutput": "3"
            },
            {
              "input": "5 10\n1 2\n1 3\n1 4\n1 5\n2 3\n2 4\n2 5\n3 4\n3 5\n4 5",
              "expectedOutput": "30"
            }
          ]
        },
        {
          "id": "l7_202509_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵完全二叉树有 165 个结点，则叶结点有多少个？(  )",
          "options": [
            "38",
            "82",
            "83",
            "84"
          ],
          "answer": 2,
          "explanation": "完全二叉树叶结点数等于 ceil(n÷2)，n=165 时 ceil(165÷2)=83，选 C。叶结点数约为总节点数的一半向上取整。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于二叉树的说法，错误的是（  ）。",
          "options": [
            "二叉排序树的中序遍历顺序与元素排序的顺序是相同的。",
            "自平衡二叉查找树（AVL 树）是一种二叉排序树。",
            "n 个元素的二叉排序树，其高一定为 floor(log2n)+1。",
            "任意的森林，都可以映射为一颗二叉树进行表达和存储。"
          ],
          "answer": 2,
          "explanation": "二叉排序树高度与插入顺序有关，最差退化为链，不是固定高度，选项 C 说法错误，本题选 C。只有平衡树才有固定对数高度。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_08",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对一个包含 n 个顶点、m 条边的图，执行广度优先搜索，其最优时间复杂度是（  ）。",
          "options": [
            "O(n+m)",
            "O(n)",
            "O(m)",
            "O(nm)"
          ],
          "answer": 0,
          "explanation": "BFS 每个顶点入队出队各一次，每条边被检查一次，总时间复杂度为 O(n+m)，选 A。顶点加边就是 BFS 的总工作量。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列选项中，哪个不可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~9，从某点出发。",
          "options": [
            "2, 3, 5, 7, 8, 9, 6, 4, 1",
            "5, 7, 8, 9, 1, 2, 4, 3, 6",
            "6, 8, 9, 5, 7, 1, 2, 3, 4",
            "8, 5, 7, 9, 1, 2, 3, 6, 4"
          ],
          "answer": 1,
          "explanation": "DFS 访问一个点后会一直深入其未访问邻居再回溯。选项 B 中 5→7→8→9 之后突然跳到 1，若 9 与 1 无边或 9 还有未访问邻居，则违背 DFS 的深入回溯规则，故 B 不可能是深度优先遍历序列，选 B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一棵有 N 个节点的完全二叉树，则树的深度为 floor(log2N)+1。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "完全二叉树深度公式为 floor(log2N)+1，说法正确。按层序编号第 k 层有 2^(k-1) 个节点，节点数 N 落在 2^(h-1) 到 2^h-1 之间，故深度为向下取整的 log₂N 加一。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "邻接表和邻接矩阵都是图的存储形式。通常，使用邻接表比使用邻接矩阵的时间复杂度更低。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "并非总是如此：判断两点是否有边时邻接矩阵 O(1) 更快，邻接表则要遍历链表，所以不能说邻接表总是更低，说法错误。操作类型决定哪种存储更优。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_24",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "泛洪算法的递归实现容易造成溢出，因此大的二维地图算法中，一般使用广度优先搜索实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归泛洪在大型地图上栈深过大易溢出，实际常用 BFS 或显式栈实现，说法正确。递归每层占用调用栈，网格过大时层数可达数十万，改用队列 BFS 或显式栈就能稳定完成填充。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "很多游戏中为玩家设置多种可供学习的技能，要学习特定技能又往往需要先学习 1 个或以上的前置技能。尽管这样的技能间依赖关系常被玩家称为技能树，但它并不一定是树，更可能是有向无环图。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "技能可能同时作为多个技能的前置，形成网状依赖，是 DAG 而非严格意义的树，说法正确。多个前置会造成一个节点有多个后继。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_05",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵深度为 6（根节点深度为 1）的完全二叉树，节点总数最少有（  ）。",
          "options": [
            "31",
            "32",
            "63",
            "64"
          ],
          "answer": 1,
          "explanation": "深度为 6 的完全二叉树前 5 层必须铺满，共 2^5-1=31 个节点，第 6 层至少放 1 个节点，所以最少 32 个节点，选 B。完全二叉树最后一层可以不满但必须连续。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对于如下二叉树（根 A，B、C 为子，...），下面关于访问的顺序说法错误的是（  ）。",
          "options": [
            "D E B F H J I G C A 是它的后序遍历序列。",
            "A B C D E F G H I J 是它的广度优先遍历序列。",
            "A B D E C F G H I J 是它的先序遍历序列。",
            "D B E A F C H G J I 是它的中序遍历序列。"
          ],
          "answer": 3,
          "explanation": "由先序 ABDECFGHIJ 和树的形状还原中序应为 D B E A C H G J I F 附近，选项 D 写的中序 D B E A F C H G J I 与树不符（F 的位置错），说法错误，本题选 D。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "有 5 个字符，它们出现的次数分别为 2 次、2 次、3 次、3 次、5 次。用哈夫曼编码为这些字符编码，最小加权路径长度 WPL 的值为（  ）。",
          "options": [
            "30",
            "34",
            "43",
            "47"
          ],
          "answer": 1,
          "explanation": "哈夫曼树：先合并两个 2 得 4，再合并两个 3 得 6，再合并 4 和 5 得 9，再合并 6 和 9 得 15。内部节点之和 WPL = 4+6+9+15 = 34，选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_11",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个简单无向图有 36 条边，且每个顶点的度数都为 4，则图的顶点个数为（  ）。",
          "options": [
            "9",
            "12",
            "18",
            "36"
          ],
          "answer": 2,
          "explanation": "无向图所有顶点度数之和等于边数的两倍：4·n = 2×36 = 72，所以 n = 18，选 C。握手定理是无向图的基本性质。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_12",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于二叉树的说法正确的是（  ）。",
          "options": [
            "任意二叉树的中序遍历与后序遍历必定不相同。",
            "对任意二叉树，若已知先序遍历与后序遍历，则该二叉树唯一确定。",
            "若二叉树有 n 个结点，根节点高度为 1，则其高度满足 floor(log2n)+1 <= h <= n。",
            "在二叉树的先序遍历中，根后紧跟的结点一定是根的左孩子。"
          ],
          "answer": 2,
          "explanation": "有 n 个结点的二叉树，高度下界是链状时的 n，上界是平衡时的 floor(log2n)+1，即满足该范围，选项 C 正确。仅靠先序和后序不能唯一确定二叉树；根后紧跟的可能是左孩子，若没有左孩子则是右孩子，选 C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_14",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪一个可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发。",
          "options": [
            "1, 5, 6, 3, 2, 8, 9, 4, 7",
            "1, 5, 8, 9, 7, 4, 6, 3, 2",
            "3, 2, 1, 4, 7, 6, 9, 5, 8",
            "2, 5, 6, 3, 8, 7, 9, 4, 1"
          ],
          "answer": 1,
          "explanation": "DFS 从 1 出发深入：1→5→8→9→7→4，回溯后再访问 6→3→2，序列为 1,5,8,9,7,4,6,3,2，正好是选项 B，其余选项不符合 DFS 深入回溯的顺序，选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在无向图中，所有顶点的度数之和等于边数的两倍。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "每条无向边为两个端点各贡献 1 度，所以所有顶点度数之和等于边数的两倍，说法正确。这就是握手定理，统计度数时每条边被数两次，因此总度数一定是偶数，可用于判断图性质。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "使用邻接矩阵存储一个 n 个顶点、m 条边的图，对该图进行一次完整的 BFS 遍历，时间复杂度为 O(n)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "邻接矩阵存储时 BFS 每访问一个顶点都要扫描整行判断邻居，复杂度为 O(n²)，不是 O(n)，说法错误。矩阵 BFS 要逐行扫描所有顶点。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_23",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在图像处理或游戏开发中，泛洪（flood fill）算法既可以用 BFS 实现，也可以用 DFS 实现。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "泛洪填充用队列做 BFS 或用递归或栈做 DFS 都可以实现，说法正确。两种搜索都能从起点扩展到全部连通区域，区别只在访问顺序，工程中常根据地图大小选择队列或栈实现。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_04",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对于一棵包含 n 个顶点（n>1）的树，其所有顶点的度数之和必定等于（  ）。",
          "options": [
            "n-1",
            "2(n-1)",
            "2n",
            "n"
          ],
          "answer": 1,
          "explanation": "树有 n 个顶点就有 n-1 条边，无向图所有顶点度数之和等于边数的两倍，即 2(n-1)，选 B。由握手定理直接得出。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_06",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "深度优先搜索（DFS）在遍历图时，每当访问到某个顶点后，选择一个相邻的未访问顶点继续搜索，直到某个顶点的所有相邻顶点均已被访问，则退回到前一顶点继续搜索。该算法主要运用了（  ）。",
          "options": [
            "分治",
            "贪心",
            "动态规划",
            "回溯"
          ],
          "answer": 3,
          "explanation": "DFS 的核心是先深入再回退，访问完一个顶点的所有邻居后回到上一个顶点继续尝试，这种走不通就退回去的做法就是回溯，选 D。回溯是 DFS 的实现骨架。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_09",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "某二叉树共有 10 个结点，记为 A~J，已知先序遍历序列为：A B D H I E C F J G，中序遍历序列为：H D I B E A F J C G，则该二叉树的后序遍历序列是（  ）。",
          "options": [
            "H I D E B J F G C A",
            "H I D B E J F G C A",
            "I H D E B J F G C A",
            "H I D E B F J G C A"
          ],
          "answer": 0,
          "explanation": "由先序和中序还原：A 为根，左子树先序 B D H I E、中序 H D I B E，B 的左子树 D 下挂 H、I，右子树 E；右子树先序 C F J G、中序 F J C G，C 的左子树 F 右挂 J，右子树 G。后序为 H I D E B J F G C A，选 A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_10",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪一个可能是下图的深度优先遍历序列（  ）。\n图包含顶点 1~9，从 1 出发。",
          "options": [
            "1, 5, 4, 8, 7, 9, 6, 3, 2",
            "1, 5, 8, 4, 7, 9, 6, 3, 2",
            "2, 5, 8, 7, 9, 6, 3, 4, 1",
            "8, 9, 6, 3, 2, 5, 1, 4, 7"
          ],
          "answer": 1,
          "explanation": "从 1 出发 DFS：1→5→8→4，回溯后 4 访问 7→9→6→3→2，序列为 1,5,8,4,7,9,6,3,2，正好是选项 B，其余选项不符合 DFS 的深入回溯顺序，选 B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_12",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "关于泛洪算法（Flood Fill）的说法，正确的是（  ）。",
          "options": [
            "泛洪算法只适用于二维网格中的四连通或八连通问题。",
            "泛洪算法必须使用递归方式实现。",
            "泛洪算法本质上是对图进行一次从起点出发的搜索。",
            "泛洪算法只能用于统计连通块个数，不能用于计算面积或周长。"
          ],
          "answer": 2,
          "explanation": "泛洪算法就是从某个起点出发，沿相邻关系扩展标记连通区域，本质上是对图做一次搜索，选项 C 正确。它不限于二维网格，也可迭代实现，还能算面积周长，选 C。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_13",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "有 6 个字符，它们出现的次数分别为：{2, 3, 3, 4, 6, 8}，现在用哈夫曼编码为这些字符编码，最小加权路径长度 WPL 的值为（  ）。",
          "options": [
            "58",
            "60",
            "62",
            "64"
          ],
          "answer": 3,
          "explanation": "哈夫曼合并：2+3=5，3+4=7，5+6=11，7+8=15，11+15=26。内部节点和 WPL = 5+7+11+15+26 = 64，选 D。WPL 等于所有内部节点权值之和。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_15",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树的遍历的说法中，正确的一项是（  ）。",
          "options": [
            "对任意一棵树进行深度优先遍历，所得序列一定唯一。",
            "已知一棵二叉树的先序遍历和后序遍历序列，可以唯一确定这棵二叉树。",
            "已知一棵二叉树的先序遍历和中序遍历序列，可以唯一确定这棵二叉树。",
            "一棵二叉树的中序遍历序列是单调递增的，则该二叉树一定是二叉平衡树。"
          ],
          "answer": 2,
          "explanation": "先序遍历确定根，中序遍历确定左右子树划分，二者组合可以唯一确定一棵二叉树，选项 C 正确。仅先序和后序不能唯一确定；DFS 序列还取决于邻居访问顺序；中序递增只说明是二叉排序树，不代表平衡，选 C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在一个无向图中，每个顶点有不同的编号，在执行深度优先遍历过程中选择下一个顶点时总是优先选择编号更小的相邻顶点，则从指定顶点开始的遍历序列是唯一的。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在相同规则（优先编号小的未访问邻居）下，DFS 的访问序列是确定的、唯一的，说法正确。因为每个顶点的邻居访问顺序被编号大小规则完全确定，所以 DFS 树和访问序列都唯一。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_23",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "若所有字符出现频率相同，则哈夫曼编码一定会得到完全二叉树。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "频率相同时哈夫曼树各分支长度可能不同（取决于合并顺序），不一定每个内部节点都有两个孩子且完全平衡，说法错误。哈夫曼树形态与合并顺序有关。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_25",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在一个无向连通图中，从任意顶点开始进行深度优先遍历，最终得到的 DFS 生成树一定包含图中的所有顶点。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "从任意顶点开始 DFS 会访问到连通图中所有顶点，生成的 DFS 树包含全部顶点，说法正确。连通图的 DFS 生成树覆盖全部节点。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_04",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "有 5 个字符，它们出现的次数分别为 3、4、7、8、9。使用哈夫曼编码时，最小的带权路径长度 WPL 为（  ）。",
          "options": [
            "62",
            "64",
            "67",
            "69"
          ],
          "answer": 3,
          "explanation": "哈夫曼合并：3+4=7，7+7=14，8+9=17，14+17=31。内部节点之和 WPL = 7+14+17+31 = 69，选 D。每次合并取两个最小权值。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_08",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序片段主要体现的算法思想是（  ）。\n<pre><code>void dfs(int x,int y){ vis[x][y]=true; for(k=0;k<4;k++){ nx=x+dx[k]; ny=y+dy[k]; if(inside(nx,ny)&&a[nx][ny]==1&&!vis[nx][ny]) dfs(nx,ny); } }</code></pre>",
          "options": [
            "泛洪算法",
            "二分查找",
            "贪心算法",
            "归并排序"
          ],
          "answer": 0,
          "explanation": "该代码从 (x,y) 出发向上下左右四个方向递归标记连通区域，正是泛洪（Flood Fill）算法，选 A。四方向递归填充是泛洪的经典写法。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_10",
          "kp": "kp7_03",
          "type": "choice",
          "difficulty": 1,
          "question": "无向图的边为 (1,2),(1,3),(2,4),(3,4),(4,5)。从顶点 1 开始进行 BFS，每轮根据出队顶点将相邻顶点按编号从小到大入队，则顶点 4 第一次入队时，队列的状态为（  ）。",
          "options": [
            "1, 2, 3, 4",
            "2, 3, 4",
            "3, 4",
            "3, 4, 5"
          ],
          "answer": 2,
          "explanation": "初始队列 [1]；出队 1 入队邻居 2、3 → [2,3]；出队 2 入队未访问邻居 4 → [3,4]。所以顶点 4 第一次入队时队列为 3,4，选 C。BFS 队列严格按入队顺序。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_20",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "同一个图从同一个起点进行深度优先搜索，访问序列一定与邻接点的枚举顺序无关。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "DFS 的访问顺序取决于先访问哪个邻居，邻接点的枚举顺序不同，访问序列也不同，说法错误。同样的图和起点，若邻居顺序改变，DFS 深入的方向就改变，遍历序列也随之变化。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_21",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "泛洪算法可以用递归 DFS 实现，但地图很大时可能由于递归层数过深导致调用栈溢出等运行时错误。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归泛洪在大型地图上递归层数可达格子数，容易栈溢出，说法正确。递归每深入一层就压一次栈，格子很多时栈深度接近格子总数，很可能超出栈空间，故大图常用非递归实现。图与树的定义、存储和遍历是信息学竞赛的基础内容。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_22",
          "kp": "kp7_03",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼树中不存在度为 1 的结点。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼树的每个内部节点都有两个孩子（度为 2），不存在度为 1 的节点，说法正确。哈夫曼树由两个最小权值节点不断合并生成，每次合并都产生一个二度内部节点，因此没有单分支。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp7_04": {
      "title": "图论基本算法",
      "questions": [
        {
          "id": "l7_202312_14",
          "kp": "kp7_04",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个简单有向图 G，判断其中是否存在环路的下列说法哪个最准确？(  )",
          "options": [
            "BFS 更快",
            "DFS 更快",
            "BFS 和 DFS 一样快",
            "不确定"
          ],
          "answer": 3,
          "explanation": "对不同的图结构，BFS 与 DFS 判环的效率不一样，有的图 DFS 先发现环，有的图 BFS 更快，无法一概而论，所以最准确的答案是 D 不确定。判环时间与图的形状、起始点都有关，不能简单断定谁更快。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：商品交易\n时间限制：1.0 s  内存限制：128.0 MB\n问题描述：市场上有 N 种商品，第 i 种商品价值 vi 元。有 M 个商人，第 j 个商人愿意用第 xj 种商品交换第 yj 种商品。若 v[xj]>v[yj] 他付给你差价，否则你付差价，另外每次交易收 1 元手续费。你现在持有商品 a，希望通过交换获得商品 b，求最少花费（可为负），无法交换则输出 No solution。\n输入：第一行 N M a b；第二行 N 个价值；接下来 M 行每行两个整数 xj yj。\n输出：最少花费或 No solution。\n【数据范围】\n1 ≤ N ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：无论怎么换，因为价值差产生的花费总和固定为 v[b]-v[a]，区别只在每次交易都要额外付 1 元手续费。因此问题转化为从商品 a 到商品 b 经过最少边数，用 BFS 求最短路（边权为 1），答案 = 最短边数 + v[b]-v[a]。把每种商品看成点，商人给出的交换关系连成有向边即可。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\n#include <vector>\nusing namespace std;\nconst int max_n = 1e5 + 10;\nint n;\nvector<int> edge[max_n];\nint val[max_n];\nint min_dist[max_n];\nint queue[max_n], qh, qt;\nvoid bfs(int src) {\n    qh = qt = 0;\n    memset(min_dist, 127, sizeof(min_dist));\n    queue[++qt] = src;\n    min_dist[src] = 0;\n    while (qh < qt) {\n        int u = queue[++qh];\n        for (auto v: edge[u]) {\n            if (min_dist[u] + 1 < min_dist[v]) {\n                min_dist[v] = min_dist[u] + 1;\n                queue[++qt] = v;\n            }\n        }\n    }\n}\nint main() {\n    int m, src, dst;\n    ios::sync_with_stdio(false);\n    cin >> n >> m >> src >> dst;\n    for (int i = 0; i < n; ++i) cin >> val[i];\n    for (int i = 0; i < m; ++i) { int x, y; cin >> x >> y; edge[x].push_back(y); }\n    bfs(src);\n    if (min_dist[dst] > n) cout << \"No solution\\n\";\n    else cout << min_dist[dst] - val[src] + val[dst] << '\\n';\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5 0 2\n1 2 4\n1 0\n2 0\n0 1\n2 1\n1 2",
              "expectedOutput": "5"
            },
            {
              "input": "3 3 0 2\n100 2 4\n0 1\n1 2\n0 2",
              "expectedOutput": "-95"
            },
            {
              "input": "4 4 3 0\n1 2 3 4\n1 0\n0 1\n3 2\n2 3",
              "expectedOutput": "No solution"
            }
          ]
        },
        {
          "id": "l7_202403_15",
          "kp": "kp7_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用邻接矩阵表达的带权无向图，则从顶点 0 到顶点 3 的最短距离为（  ）。\n<pre><code>int weight[4][4]={{0,2,5,8},{2,0,1,7},{5,1,0,4},{8,7,4,0}};</code></pre>",
          "options": [
            "6",
            "7",
            "8",
            "9"
          ],
          "answer": 1,
          "explanation": "从 0 到 3 直接距离是 8。0→1→2→3 距离为 2+1+4=7，0→2→3 为 5+4=9，0→1→3 为 2+7=9，最短是 7，选 B。用邻接矩阵读出各边权后逐一比较三条可能路径。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_21",
          "kp": "kp7_04",
          "type": "judge",
          "difficulty": 1,
          "question": "要求出简单有向图中从顶点 A 到顶点 B 的最短路径，在深度优先搜索和广度优先搜索中选择，广度优先更适合。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在无权（简单有向图不带权）图中，BFS 按层扩展，首次到达 B 的层数就是最短路长度，而 DFS 不一定能找到最短路，所以 BFS 更适合，说法正确。BFS 的层次天然对应最短距离。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：交流问题\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：来自 A、B 两所学校的 n 名同学进行交流，只有不同学校的同学之间会交流（输入保证合法）。已知全部 m 次交流记录，求 B 校至少有几名同学、至多有几名同学。\n输入：第一行 n m；接下来 m 行每行两个正整数，表示一次跨校交流。\n输出：一行两个整数，分别表示 B 校最少和最多人数。",
          "options": [],
          "answer": null,
          "explanation": "思路：跨校交流意味着所有交流关系构成一个二分图。对每个连通分量用 DFS 二染色（颜色 0/1），该分量内两色人数分别为 cnt0、cnt1。要让 B 校人数最少，每个分量选人数较少的一色归入 B；B 校最多就是 n 减最少值。累加每个分量的 min(cnt0,cnt1) 即可。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid dfs(vector<vector<int>>& graph, int node, vector<int>& colors, int* color_cnt, int curr_color) {\n    colors[node] = curr_color;\n    color_cnt[curr_color]++;\n    for (int neighbor : graph[node])\n        if (colors[neighbor] == -1)\n            dfs(graph, neighbor, colors, color_cnt, curr_color ^ 1);\n}\nint main() {\n    int N, M;\n    cin >> N >> M;\n    vector<vector<int>> graph(N + 1);\n    for (int i = 0; i < M; i++) { int u, v; cin >> u >> v; graph[u].push_back(v); graph[v].push_back(u); }\n    vector<int> colors(N + 1, -1);\n    int min_ans = 0;\n    for (int i = 1; i <= N; i++)\n        if (colors[i] == -1) {\n            int color_cnt[2] = {0, 0};\n            dfs(graph, i, colors, color_cnt, 0);\n            min_ans += min(color_cnt[0], color_cnt[1]);\n        }\n    cout << min_ans << \" \" << N - min_ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 3\n1 2\n2 3\n4 2",
              "expectedOutput": "1 3"
            },
            {
              "input": "7 5\n1 2\n2 3\n4 2\n5 6\n6 7",
              "expectedOutput": "2 5"
            }
          ]
        },
        {
          "id": "l7_202503_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：图上移动\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定 n 个结点 m 条边的无向图，从每个结点出发恰好移动 k 步，求每步之后可能位于的结点数量。\n输入：第一行 n m k；之后 m 行每条边。\n输出：共 n 行，每行 k 个整数，第 i 行第 t 个数表示从 i 出发恰好 t 步可到达的结点数。\n【数据范围】\n1 ≤ n ≤ 500\n1 ≤ k ≤ 20",
          "options": [],
          "answer": null,
          "explanation": "思路：用布尔 DP，f[t][x][y] 表示从 x 出发恰好 t 步能否到达 y。初始 f[0][i][i]=1，每步枚举所有可达点向其邻居转移。最后对每个起点 i 和步数 t 统计 f[t][i][y] 为真的数量并输出。n、k 都较小，复杂度 O(k·n·(n+m))。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nconst int K = 25, N = 505, E = N << 1;\nint n, m, k;\nint h[N], to[E], nx[E], et;\nint f[K][N][N];\nvoid ae(int u, int v){ et++; to[et]=v; nx[et]=h[u]; h[u]=et; }\nint main(){\n    scanf(\"%d%d%d\", &n, &m, &k);\n    for (int i = 1; i <= m; i++){ int u,v; scanf(\"%d%d\",&u,&v); ae(u,v); ae(v,u); }\n    for (int i = 1; i <= n; i++) f[0][i][i] = 1;\n    for (int t = 1; t <= k; t++)\n        for (int x = 1; x <= n; x++)\n            for (int y = 1; y <= n; y++)\n                if (f[t-1][x][y])\n                    for (int i = h[y]; i; i = nx[i]) f[t][x][to[i]] = 1;\n    for (int i = 1; i <= n; i++){\n        for (int t = 1; t <= k; t++){\n            int ans = 0;\n            for (int j = 1; j <= n; j++) ans += f[t][i][j];\n            printf(\"%d%c\", ans, \" \\n\"[t == k]);\n        }\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 4 3\n1 2\n1 3\n2 3\n3 4",
              "expectedOutput": "2 4 4\n2 4 4\n3 3 4\n1 3 3"
            }
          ]
        },
        {
          "id": "l7_202509_07",
          "kp": "kp7_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树和图的说法，错误的是（  ）。",
          "options": [
            "保留树的所有节点，并把树的每个节点指向其父节点，则可以将树转换为一个有向弱连通图。",
            "保留树的所有节点，并把树的每个节点指向其子节点，则可以将树转换为一个有向无环图。",
            "每个连通图都存在生成树。",
            "每个存在生成树的有向图，都一定是强连通的。"
          ],
          "answer": 3,
          "explanation": "有向图存在生成树只说明从根能到达其他顶点，并不保证任意两点互相可达，所以不一定是强连通图，选项 D 说法错误，本题选 D。强连通需要双向可达。图论基本算法（最短路、连通性、生成树等）是七级的核心考点。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：连通图\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定 n 个结点 m 条边的无向图（可能含重边与自环），需要加入若干条边使图中任意两点连通，求最少需要加入的边数。\n输入：第一行 n m；之后 m 行每条边。\n输出：最少需要加入的边数。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：用并查集（DSU）统计当前图的连通分量个数。重边和自环不改变连通性，直接跳过或正常合并。要使整个图连通，最少再连 分量数-1 条边，即把每个分量串起来即可。统计根节点个数减一就是答案。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, m;\nint f[N];\nint getf(int u) { return f[u] ? f[u] = getf(f[u]) : u; }\nint main(){\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= m; i++){\n        int u, v; scanf(\"%d%d\", &u, &v);\n        if (getf(u) != getf(v)) f[getf(u)] = v;\n    }\n    int ans = 0;\n    for (int i = 1; i <= n; i++) ans += getf(i) == i;\n    printf(\"%d\\n\", ans - 1);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 4\n1 2\n2 3\n3 1\n1 4",
              "expectedOutput": "0"
            },
            {
              "input": "6 4\n1 2\n2 3\n3 1\n6 5",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202512_15",
          "kp": "kp7_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面这个有向图的强连通分量的个数是（  ）。\n图含 12 个顶点，包含 1↔2、9↔11 等双向边及若干单向边。",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "explanation": "强连通分量是任意两点互相可达的最大子图。图中双向连接的组构成独立分量，再叠加单向边可达关系，数出互相可达的强连通分量共有 5 个，选 C。缩点后统计强连通分量个数。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_25",
          "kp": "kp7_04",
          "type": "judge",
          "difficulty": 1,
          "question": "一个包含 n 个顶点的连通无向图，其任何一棵生成树都恰好包含 n-1 条边。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "连通无向图的生成树包含全部顶点且无环，边数固定为 n-1，说法正确。生成树用最少的边连接所有顶点，再添加任何一条边都会形成环，n-1 条边是连通图成为树的前提。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：城市规划\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：A 国有 n 座城市，由 m 条双向道路连接且任意城市间可达。城市 i 和 j 的连通度是它们之间最少道路数。城市 x 的建设难度是它到其它城市的最大连通度。求建设难度最小的城市编号（多个取最小）。\n输入：第一行 n m；之后 m 行每条边。\n输出：建设难度最小的城市编号。\n【数据范围】\n1 ≤ n ≤ 2000",
          "options": [],
          "answer": null,
          "explanation": "思路：对每个城市做一次 BFS，求出它到所有其它城市的距离，取最大值为该城市的建设难度。遍历所有城市，维护建设难度最小的编号，若难度相同取编号更小的。图规模小（n≤2000），对每个顶点 BFS 总复杂度 O(n(n+m)) 可接受。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <vector>\nusing namespace std;\nconst int N = 2005;\nint n, m;\nvector<int> e[N];\nint d[N], mx[N], q[N];\nvoid bfs(int u){\n    for (int i = 1; i <= n; i++) d[i] = n + 1;\n    d[u] = 0;\n    q[1] = u;\n    int ql = 1, qr = 1;\n    while (ql <= qr){\n        int x = q[ql++];\n        for (auto y : e[x]) if (d[x] + 1 < d[y]) { d[y] = d[x] + 1; q[++qr] = y; }\n    }\n    mx[u] = d[q[qr]];\n}\nint main(){\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= m; i++){ int u, v; scanf(\"%d%d\", &u, &v); e[u].push_back(v); e[v].push_back(u); }\n    int ans = 1;\n    for (int i = 1; i <= n; i++){ bfs(i); if (mx[i] < mx[ans]) ans = i; }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 3\n1 2\n1 3\n2 3",
              "expectedOutput": "1"
            },
            {
              "input": "4 4\n1 2\n2 3\n3 4\n2 4",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202603_11",
          "kp": "kp7_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面这个有向图的强连通分量的个数是（  ）。\n图含 9 个顶点，含若干双向与单向边。",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 1,
          "explanation": "强连通分量要求分量内任意两点互相可达。把互相可达的顶点缩成点后统计，该有向图共有 4 个强连通分量，选 B。用 Tarjan 或 Kosaraju 算法可准确求出。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_21",
          "kp": "kp7_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在无向连通图中删除一条边，该图就一定变成非连通图。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "只有删除桥（割边）才会使图不连通，删除非桥边图仍然连通，说法错误。桥是移除后会使连通分量数增加的边，普通边删除后图依然连通，不能说删任意一条边都破坏连通性。图论基本算法（最短路、连通性、生成树等）是七级的核心考点。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_27",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：物流网络\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：物流网络有 n 个城市、m 条双向公路，每条公路有运输费用和景观评分。运输路径上可免除景观评分最高的那条公路的费用。求从城市 1 到城市 n 的最小运输费用，无法到达输出 -1。\n输入：第一行 n m；之后 m 行每行四个整数 u v 费用 评分。\n输出：最小运输费用。",
          "options": [],
          "answer": null,
          "explanation": "思路：答案等价于在每条边上枚举它作为被免除的最高评分边。把公路按评分从小到大排序，依次加入图中：每当加入一条新边，就更新从 1 出发和从 n 出发的最短路（费用），并尝试用这条新边连接 1 侧和 n 侧，即答案取 dp1[u]+dpn[v] 或 dp1[v]+dpn[u]。保证被免的边就是当前评分最高的边。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nstruct Highway { int u, v, fee, b; bool operator<(const Highway &other) const { return b == other.b ? fee < other.fee : b < other.b; } };\nint main(){\n    int n, m; cin >> n >> m;\n    vector<Highway> hs(m);\n    for (int i = 0; i < m; i++) cin >> hs[i].u >> hs[i].v >> hs[i].fee >> hs[i].b;\n    sort(hs.begin(), hs.end());\n    vector<vector<const Highway*>> net(n + 1);\n    vector<long long> d1(n + 1, (long long)1e18), dn(n + 1, (long long)1e18);\n    d1[1] = 0; dn[n] = 0;\n    long long ans = (long long)1e18;\n    for (auto &r : hs){\n        ans = min(ans, min(d1[r.u] + dn[r.v], d1[r.v] + dn[r.u]));\n        net[r.u].push_back(&r); net[r.v].push_back(&r);\n        vector<int> cur = {r.u, r.v};\n        for (int t = 0; t < (int)cur.size(); t++){\n            int i = cur[t];\n            for (auto j : net[i]){\n                int k = (i == j->u ? j->v : j->u);\n                if (d1[i] + j->fee < d1[k]) { d1[k] = d1[i] + j->fee; cur.push_back(k); }\n            }\n        }\n        cur = {r.u, r.v};\n        for (int t = 0; t < (int)cur.size(); t++){\n            int i = cur[t];\n            for (auto j : net[i]){\n                int k = (i == j->u ? j->v : j->u);\n                if (dn[i] + j->fee < dn[k]) { dn[k] = dn[i] + j->fee; cur.push_back(k); }\n            }\n        }\n    }\n    cout << (ans == (long long)1e18 ? -1 : ans) << '\\n';\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 3\n1 2 10 5\n2 3 20 6\n1 3 100 1",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "l7_202606_24",
          "kp": "kp7_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在无权图中从起点执行 BFS 时，某个顶点第一次被访问到的层数等于起点到该顶点经过的最少边数。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "BFS 按层扩展，顶点第一次被访问时的层数就是起点到它的最短路长度（最少边数），说法正确。BFS 首次访问即是最短距离。图论基本算法（最短路、连通性、生成树等）是七级的核心考点。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_26",
          "kp": "kp7_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：染色\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：小杨有一张 n 个结点的无向图 G，G 中每个结点度数都是 2（即由若干环组成），恰好有 n 条边。要给结点染色使任意一条边两端的结点颜色不同，求最少需要的颜色数。\n输入：第一行 t（数据组数）；每组第一行 n；之后 n 行每条边。\n输出：每组输出最少颜色数。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：每个节点度数为 2 说明图是若干个环的并。对每个环，若环长为偶数用 2 种颜色即可交替染色，若环长为奇数则需要 3 种颜色。沿环遍历统计每个环的长度奇偶，若存在奇环答案就是 3，否则是 2。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint n;\nint a[100010], b[100010], cnt[100010];\nvoid solve(){\n    cin >> n;\n    for (int i = 1; i <= n; i++) a[i] = b[i] = cnt[i] = 0;\n    for (int i = 1; i <= n; i++){\n        int u, v; cin >> u >> v;\n        b[u] = a[u]; a[u] = v;\n        b[v] = a[v]; a[v] = u;\n    }\n    bool flag = false;\n    for (int i = 1; i <= n; i++){\n        if (cnt[i]) continue;\n        int u = i, last = a[u];\n        int v = a[u] + b[u] - last;\n        while (!cnt[v]){\n            cnt[v] = cnt[u] + 1;\n            last = u; u = v;\n            v = a[u] + b[u] - last;\n        }\n        if (cnt[i] % 2 != 0) flag = true;\n    }\n    if (flag) cout << 3 << endl; else cout << 2 << endl;\n}\nint main(){ int t; cin >> t; while (t--) solve(); return 0; }",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n6\n1 6\n2 1\n3 2\n4 3\n5 4\n6 5\n6\n1 3\n3 5\n5 1\n2 4\n4 6\n6 2\n3\n1 2\n2 3\n3 1\n5\n1 4\n2 5\n3 1\n4 2\n5 3",
              "expectedOutput": "2\n3\n3\n3"
            }
          ]
        }
      ]
    },
    "kp7_05": {
      "title": "哈希表",
      "questions": [
        {
          "id": "l7_202312_06",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "哈希表长 31，按照下面的程序依次输入 4 17 28 30 4（第一个 4 是元素个数 n），则最后的 4 存入哪个位置？\n<pre><code>cin>>n;\nfor(i=0;i<n;i++)\n{\n    cin>>x;\n    k=x%13;\n    while(flag[k])\n        k=(k+1)%13;\n    htab[k]=x;\n    flag[k]=1;\n}</code></pre>",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 3,
          "explanation": "程序按 %13 取哈希，冲突时线性向后探测。n=4，依次插入 17、28、30、4：17%13=4 放 4 号位，28%13=2 放 2 号位，30%13=4 冲突后移到 5 号位，最后的 4 哈希到 4 号位被占，5 号位也被占，最终放到 6 号位，选 D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_10",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "对关键字序列 {44,36,23,35,52,73,90,58} 建立哈希表，哈希函数为 h(k)=k%7，执行链地址法 Insert 函数，则等概率情况下的平均成功查找长度为（  ）。",
          "options": [
            "7/8",
            "1",
            "1.5",
            "2"
          ],
          "answer": 2,
          "explanation": "哈希地址按 %7 计算：44、36、23、35、52、73、90、58 的地址依次为 2、1、2、0、3、3、6、2。各元素查找成功比较次数分别为 1、1、2、1、1、2、1、3，总和 12，平均 12÷8=1.5，选 C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202312_22",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "某个哈希表键值 x 为整数，为其定义哈希函数 H(x)=x%p，则 p 选择素数时不会产生冲突。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "素数模数只能让哈希分布更均匀，并不能消除冲突。例如 p=7 时，14 和 21 对 7 取模都等于 0，仍然冲突，所以说法错误。取素数的好处是减少冲突概率，而不是保证无冲突。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_05",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个方案不能合理解决或缓解哈希表冲突（  ）。",
          "options": [
            "在每个哈希表项处，使用单链表管理该表项的冲突元素。",
            "建立额外的单链表，用来管理所有发生冲突的元素。",
            "使用不同的哈希函数再建立一个哈希表，用来管理所有发生冲突的元素。",
            "用新元素覆盖发生冲突的哈希表项。"
          ],
          "answer": 3,
          "explanation": "用新元素覆盖旧元素会直接丢失原有数据，不是合理的冲突解决方式。链地址法、再哈希等都能保留数据并解决冲突，所以选 D。合理方案必须既不丢数据又能快速找到元素。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202403_22",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "某 N 个表项的哈希表，发生冲突时采用向后寻找空位的方法解决冲突。其查找操作的平均时间复杂度为 O(1)，即使当该哈希表的每个表项都有元素时，查找操作的平均时间复杂度仍为 O(1)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "线性探测哈希表装满后，查找需要探测很长一段甚至整表，最坏和平均复杂度都会退化到 O(N)，不再是 O(1)，说法错误。装载因子越高，线性探测的性能越差。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_07",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个方案不能合理解决或缓解哈希表冲突（  ）。",
          "options": [
            "丢弃发生冲突的新元素。",
            "在每个哈希表项处，使用不同的哈希函数再建立一个哈希表，管理该表项的冲突元素。",
            "在每个哈希表项处，建立二叉排序树，管理该表项的冲突元素。",
            "使用不同的哈希函数建立额外的哈希表，用来管理所有发生冲突的元素。"
          ],
          "answer": 0,
          "explanation": "丢弃新元素会直接丢失数据，不是合理的冲突解决方案。用二叉排序树、再哈希等都能妥善保存并管理冲突元素，所以选 A。冲突处理的前提是元素都能被保留下来。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_23",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "现使用有 N 个表项的哈希表，从 M 个元素中进行查找。该哈希表为解决哈希函数冲突，为每个表项处建立单链表存储冲突元素。其查找操作的最坏情况时间复杂度为 O(M)。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链地址法中若所有元素都映射到同一个表项，该链表长度可达 M，查找最坏要遍历整条链表，时间复杂度为 O(M)，题中给出的公式正确，说法正确。这是哈希表冲突最坏退化的情形。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202406_27",
          "kp": "kp7_05",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：区间乘积\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：给定 n 个正整数 a1..an，求有多少对 (i,j)（1≤i≤j≤n）满足 ai×ai+1×...×aj 是完全平方数。\n输入：第一行 n；第二行 n 个正整数。\n输出：满足条件的区间数量。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：完全平方数要求区间内每个质因子的出现次数为偶数。对每个数预处理其奇偶性向量（质因子出现次数奇偶），用前缀异或表示前缀奇偶状态。区间 (i,j) 的乘积是完全平方数当且仅当前缀状态相等。用哈希表 map 统计每个前缀状态出现的次数，同状态配对即可，O(n)。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nmap<int,int> mp;\nconst int N = 1e5+10;\nint calc(int x) {\n    int res = 0;\n    for (int i = 2; i * i <= x; i++) {\n        if (x % i == 0) { while (x % i == 0){ x /= i; res ^= (1 << (i - 1)); } }\n    }\n    if (x != 1) res ^= (1 << (x - 1));\n    return res;\n}\nint a[N];\nint main(){\n    int n; cin >> n;\n    long long ans = 0;\n    int pre = 0;\n    for (int i = 1; i <= n; i++){\n        cin >> a[i];\n        int res = calc(a[i]);\n        pre ^= res;\n        if (pre == 0) ans++;\n        ans += mp[pre];\n        mp[pre] += 1;\n    }\n    cout << ans << \"\\n\";\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n3 2 4 3 2",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202409_09",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个方案可以合理解决或缓解哈希表冲突（  ）。",
          "options": [
            "丢弃发生冲突的新元素。",
            "用新元素覆盖发生冲突的元素。",
            "用新元素覆盖在冲突位置的下一个位置。",
            "将新元素放置在冲突位置之后的第一个空位。"
          ],
          "answer": 3,
          "explanation": "线性探测法把新元素放到冲突位置之后的第一个空位，既解决冲突又不丢数据，是合理的方案。丢弃或覆盖都会丢失信息，选 D。线性探测是开放定址法的一种。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202409_23",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "某个哈希表键值 x 为整数，H(x) = x % p 是常用的哈希函数之一，要求 p 选择素数是因为这样不会产生冲突。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "p 选素数只是让哈希分布更均匀，减少冲突概率，并不能保证不产生冲突，例如 p=7 时 14 和 21 都映射到 0，说法错误。素数只能降低冲突不能杜绝冲突。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_09",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "一个哈希表，包括 n 个位置（编号 0~(n-1)），每个位置最多仅能存储一个元素，只有插入和查询两种操作。以下说法错误的是（  ）。",
          "options": [
            "若哈希函数取值范围为 0~(n-1)，且冲突时循环向后寻找空位，则查询操作的最差时间复杂度为 O(n)。",
            "若哈希函数取值范围为 0~(n-1)，且冲突时仅循环向后一个位置寻找空位，则查询操作的最差时间复杂度为 O(n)。",
            "若哈希函数取值范围为 0~(m-1)（m<n），且冲突时仅在 m~(n-1) 范围内寻找空位，则查询操作的最差时间复杂度为 O(n)。",
            "查询操作时，如果发现查询元素经哈希函数对应的位置为空位，该查询元素仍可能出现在哈希表内。"
          ],
          "answer": 3,
          "explanation": "在无删除操作的线性探测哈希表中，若某元素经哈希函数对应的位置是空位，则它不可能出现在表中更靠后的位置（插入时它必然占用第一个空位），选项 D 说法错误，本题选 D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202412_23",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "MD5 是一种常见的哈希函数，可以由任意长度的数据生成 128 位的哈希值，曾广泛应用于数据完整性校验。中国科学家的系列工作首次发现了可实用的 MD5 破解方法。之后，MD5 逐渐被其他哈希函数所取代。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "MD5 输出 128 位哈希，中国学者王小云团队提出了对 MD5 的碰撞攻击，此后 MD5 逐步被更强的哈希算法取代，说法正确。这是哈希函数安全性研究的里程碑。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_12",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "给定两个无向图 G1 和 G2，判断它们是否同构。下面程序中横线处应该给出的是（  ）。\n<pre><code>string graphHash(vector<vector<int>>& graph){ ... for(neighbor: neighbors){ _______; } ... }</code></pre>",
          "options": [
            "hash += to_string(neighbor);",
            "hash += to_string(neighbors);",
            "hash += to_string(neighbor) + \",\";",
            "hash -= to_string(neighbors);"
          ],
          "answer": 2,
          "explanation": "为了区分不同邻居编号，需要把每个邻居的编号转成字符串并加分隔符拼到哈希串中，即 hash += to_string(neighbor) + \",\"，选 C。分隔符避免相邻编号连在一起产生歧义。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_15",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在哈希表的实现中，冲突解决是一个重要的问题。以下哪种方法不是常见的哈希表冲突解决策略？",
          "options": [
            "链地址法（Chaining）",
            "开放地址法（Open Addressing）",
            "二次哈希法（Double Hashing）",
            "二分查找法（Binary Search）"
          ],
          "answer": 3,
          "explanation": "二分查找是数组的查找算法，不是哈希表的冲突解决策略。链地址法、开放地址法、二次哈希法都是常见冲突解决方式，选 D。冲突解决只与哈希表结构相关。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202503_27",
          "kp": "kp7_05",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：等价消除\n时间限制：1.0 s  内存限制：512.0 MB\n问题描述：一个字符串如果能通过每次删去两个相同字符变为空串，则称其可被等价消除。求给定字符串有多少子串可以被等价消除。\n输入：第一行 n（长度）；第二行长度为 n 的小写字母串。\n输出：可被等价消除的子串数量。\n【数据范围】\n1 ≤ n ≤ 200000",
          "options": [],
          "answer": null,
          "explanation": "思路：可被等价消除等价于子串中每个字母出现次数都是偶数。用前缀异或记录各字母出现次数的奇偶状态：从左到右维护当前状态 v（字母 i 用 1<<i 异或），若两个前缀状态相同，则它们之间的子串所有字母出现偶数次。用哈希表 map 统计每个状态出现次数，相同状态两两配对计数即可。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <map>\nusing namespace std;\nconst int N = 2e5 + 5;\nint n;\nchar s[N];\nmap<int, int> m;\nlong long ans;\nint main(){\n    scanf(\"%d\", &n);\n    scanf(\"%s\", s + 1);\n    int v = 0;\n    m[v]++;\n    for (int i = 1; i <= n; i++){\n        v ^= 1 << (s[i] - 'a');\n        ans += m[v];\n        m[v]++;\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "7\naaaaabb",
              "expectedOutput": "9"
            },
            {
              "input": "9\nbabacabab",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l7_202506_09",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个方案不能合理解决或缓解哈希表冲突（  ）。",
          "options": [
            "在每个哈希表项处，使用不同的哈希函数再建立一个哈希表，管理该表项的冲突元素。",
            "在每个哈希表项处，建立二叉排序树，管理该表项的冲突元素。",
            "使用不同的哈希函数建立额外的哈希表，用来管理所有发生冲突的元素。",
            "覆盖发生冲突的旧元素。"
          ],
          "answer": 3,
          "explanation": "覆盖旧元素会丢失已有数据，不是合理的冲突解决方式。用再哈希或二叉排序树等都能保留数据，选 D。冲突处理必须保证所有元素都可检索。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202506_22",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "无论哈希表采用何种方式解决冲突，只要管理的元素足够多，都无法避免冲突。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "元素数量超过哈希表容量时，任何哈希函数都会发生冲突（鸽巢原理），无法完全避免，说法正确。鸽巢原理说明物品多于箱子时必有物品共箱，所以冲突只能通过扩容和好哈希函数缓解。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202509_09",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个方案不能合理解决或缓解哈希表冲突（  ）。",
          "options": [
            "用新元素覆盖发生冲突的哈希表项。",
            "在每个哈希表项处，使用单链表管理该表项的冲突元素。",
            "建立额外的单链表，用来管理所有发生冲突的元素。",
            "使用不同的哈希函数再建立一个哈希表，用来管理所有发生冲突的元素。"
          ],
          "answer": 0,
          "explanation": "覆盖冲突表项会丢失原有数据，不是合理的冲突解决方案。链地址法和再哈希都能妥善处理，选 A。合理方案必须保留全部元素。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_03",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "现有一个地址区间为 0~10 的哈希表，当出现冲突情况，会往后找第一个空的地址存储（到 10 冲突了就从 0 开始往后），现在要依次存储 1、3、5、7、9，哈希函数为 h(x)=(x²+x) mod 11。其中 9 存储在哈希表哪个地址中（  ）。",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 3,
          "explanation": "依次计算：h(1)=(1+1)%11=2 放 2；h(3)=(9+3)%11=1 放 1；h(5)=(25+5)%11=8 放 8；h(7)=(49+7)%11=1 冲突移到 3；h(9)=(81+9)%11=2 冲突，2、3 都被占，最终放到 4，选 D。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202512_24",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用链地址法处理冲突的哈希表，当所有元素都映射到同一个槽位时，查找操作的最坏时间复杂度为 O(m)，其中 m 为元素个数。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "所有元素挤在同一链表时，查找要遍历整条链，最坏复杂度为 O(m)，说法正确。这是链地址法最坏退化的例子，说明哈希表虽平均 O(1)，但最坏情况取决于冲突链的长度。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202603_05",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于哈希表（Hash Table）在不考虑扩容且采用简单均匀哈希函数的前提下，下列说法中错误的是（  ）。",
          "options": [
            "装载因子越大，发生冲突的概率通常越高。",
            "开放定址法在删除元素时实现相对复杂。",
            "链地址法在最坏情况下查找时间复杂度为 O(n)。",
            "查找哈希表的时间复杂度总是 O(1)。"
          ],
          "answer": 3,
          "explanation": "哈希表查找平均是 O(1)，但在冲突严重时最坏可退化为 O(n)，并非总是 O(1)，选项 D 说法错误，本题选 D。平均 O(1) 不等于最坏 O(1)。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_11",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "一个长度为 11、下标为 0 到 10 的哈希表采用线性探测法处理冲突，哈希函数为 h(x) = x % 11。依次插入 22、33、4、15、26，则 26 最终存放在下标（  ）。",
          "options": [
            "3",
            "4",
            "5",
            "6"
          ],
          "answer": 3,
          "explanation": "h(22)=0 放 0；h(33)=0 冲突移到 1；h(4)=4 放 4；h(15)=4 冲突移到 5；h(26)=4 冲突，5 也被占，最终放到下标 6，选 D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_12",
          "kp": "kp7_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于哈希表处理冲突的方法，下列说法正确的是（  ）。",
          "options": [
            "线性探测法发生冲突后，只能放弃插入该元素。",
            "链地址法可以把哈希到同一位置的多个元素组织在同一个桶中。",
            "只要哈希表长度是素数，就一定不会发生冲突。",
            "开放定址法查找元素时不需要考虑冲突位置。"
          ],
          "answer": 1,
          "explanation": "链地址法把哈希地址相同的元素挂在同一个链表（桶）里，是常用冲突解决方法，选项 B 正确。线性探测是向后探测而非放弃；素数长度不能杜绝冲突；开放定址查找要考虑探测链，选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l7_202606_19",
          "kp": "kp7_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈希表采用开放定址法时，即使哈希函数设计合理，也仍然可能发生冲突。(  )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈希函数设计得再均匀，只要元素数量增多就可能碰撞（鸽巢原理），开放定址法也不能完全避免冲突，说法正确。冲突只能缓解不能根除。哈希表的冲突处理与平均查找长度分析是常考重点。",
          "source": "GESP2026-06",
          "isJudge": true,
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
