/**
 * GESP 二级 C++ 题库
 * 8 个知识点模块（kp2_01 ~ kp2_08），每模块 6 道选择题 + 1 道编程题，共 56 题
 */
const QUESTION_BANK = {
  "meta": {
    "name": "GESP 二级 C++",
    "version": "1.0",
    "totalQuestions": 56,
    "knowledgePoints": {
      "kp4_03": {
        "title": "指针",
        "questions": 7
      },
      "kp5_10": {
        "title": "递归",
        "questions": 7
      },
      "kp4_09": {
        "title": "排序算法",
        "questions": 7
      },
      "kp3_05": {
        "title": "字符串及函数",
        "questions": 7
      },
      "kp4_05": {
        "title": "结构体",
        "questions": 7
      },
      "kp6_13": {
        "title": "栈、队列、循环队列",
        "questions": 7
      },
      "kp6_01": {
        "title": "树的定义与遍历",
        "questions": 7
      },
      "kp3_02": {
        "title": "位运算",
        "questions": 7
      }
    },
    "mockExamQuestions": 0,
    "realExamQuestions": 0
  },
  "knowledgePoints": {
    "kp4_03": {
      "title": "指针",
      "questions": [
        {
          "id": "kp2_01_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于指针变量，下列说法正确的是（ ）。",
          "options": [
            "指针变量存储的是另一个变量的地址",
            "指针变量存储的是另一个变量的值",
            "指针变量不能进行加减运算",
            "每个变量都必须有一个指针指向它"
          ],
          "answer": 0,
          "explanation": "【解题思路】本题考察指针变量的本质。指针是专门用来存放“地址”的变量，与普通变量存放“值”不同。牢记两个基本概念：& 取地址运算符得到变量的地址，* 解引用运算符通过地址访问该变量。\n【逐步推理】指针变量的定义形式为 int *p，它的作用就是保存一个 int 类型变量的地址。例如 int a=5; int *p=&a; 中 p 保存的是 a 的地址。因此“指针变量存储的是另一个变量的地址”正确。\n【其他选项为何错】B 说指针存的是值，实际上存值的是普通变量；C 说指针不能参与运算，实际上指针可以做加减运算在数组中移动；D 说每个变量都必须有指针指向它，显然没有这种要求。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 int a = 10; int *p = &a; 那么 *p 的值是（ ）。\n<pre><code>int a = 10;\nint *p = &amp;a;</code></pre>",
          "options": [
            "&a",
            "10",
            "p 本身的地址",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "【解题思路】本题考察 & 与 * 这一对互逆运算。& 取出变量的地址，* 通过地址取得该地址处存放的变量。理解了这一对互逆关系即可快速作答。\n【逐步推理】int a=10; int *p=&a; 表示 p 指向 a，即 p 保存的是 a 的地址。表达式 *p 表示“访问 p 所指向的那个变量”，也就是 a，所以 *p 的值就是 a 的值 10。\n【其他选项为何错】A 的 &a 是 a 的地址，它是 p 的值而不是 *p 的值；C 说 *p 是 p 本身的地址，混淆了地址与取值；D 说编译错误，实际这是完全合法的代码。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "关于引用，下列说法正确的是（ ）。",
          "options": [
            "引用本质上是一个全新的变量",
            "引用可以随时改变所绑定的对象",
            "引用是变量的别名，声明时必须初始化",
            "引用在声明时可以不初始化"
          ],
          "answer": 2,
          "explanation": "【解题思路】引用是 C++ 中一个重要概念，本质上是给已有变量起一个别名。要抓住引用的两条核心规则：声明时必须初始化，且初始化后不能改变所绑定的对象。\n【逐步推理】int a=5; int &r=a; 之后 r 与 a 是同一个变量的两个名字，修改 r 就是修改 a。引用在声明时必须初始化，并且一旦绑定便不能再指向其他变量。因此“引用是变量的别名，声明时必须初始化”正确。\n【其他选项为何错】A 说引用是全新的变量，错，它只是别名；B 说引用可以随时改变绑定对象，错，引用一经绑定不能改变；D 说引用可以不初始化，错，引用必须初始化，否则编译报错。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "已知 int a[5]; 单独书写数组名 a 时，它的值是（ ）。",
          "options": [
            "数组的元素个数",
            "首元素 a[0] 的地址",
            "数组所有元素的和",
            "a[0] 的值"
          ],
          "answer": 1,
          "explanation": "【解题思路】数组名在 C++ 中代表数组的起始地址，即首元素 a[0] 的地址。这是“指针与数组”知识点的核心，理解它才能读懂数组相关指针代码。\n【逐步推理】int a[5] 定义了含 5 个 int 元素的数组。单独书写数组名 a 时，它被看作指向第一个元素的指针，即 a 的值等于 &a[0]。因此“首元素 a[0] 的地址”正确。可以用 *a 访问 a[0]，用 a[i] 或 *(a+i) 访问第 i 个元素。\n【其他选项为何错】A 说数组名是元素个数，元素个数一般用 sizeof(a)/sizeof(a[0]) 求得；C 说数组名是所有元素的和，显然错误；D 说 a 是 a[0] 的值，混淆了地址与值。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "在 C++ 中，以下哪种方式可以用来表示空指针（ ）。",
          "options": [
            "nullptr",
            "NULL",
            "0",
            "以上都可以表示空指针"
          ],
          "answer": 3,
          "explanation": "【解题思路】C++ 中表示空指针有多种写法。C++11 标准引入了专门的关键字 nullptr，而 NULL 和 0 在旧代码中也长期被用来表示空指针。题目问哪些方式可用于表示空指针。\n【逐步推理】nullptr 是 C++11 引入的空指针常量，类型安全，是官方推荐写法；NULL 通常被定义为整数 0；而整数 0 赋给指针同样代表空指针。三种写法在“表示空指针”这一含义上都可行，因此“以上都可以表示空指针”正确。\n【其他选项为何错】A、B、C 各自单独看都正确，但只是其中的一种写法，未能把全部可行方式都概括进去。题目问“哪种方式”，最完整的答案是把所有可行写法都包含在内的 D 选项。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "以下代码执行后，输出结果是（ ）。\n<pre><code>int a = 5;\nint *p = &amp;a;\n*p = 10;\ncout &lt;&lt; a;</code></pre>",
          "options": [
            "5",
            "编译错误",
            "10",
            "a 的地址"
          ],
          "answer": 2,
          "explanation": "【解题思路】本题考察通过指针修改所指向变量的值。解引用 *p 得到的是 p 所指向的那个变量本身，对它赋值会真正改变原来的变量。\n【逐步推理】int a=5; int *p=&a; 使 p 指向 a。执行 *p=10 时，*p 就是变量 a，把 10 赋给 a，因此 a 的值由 5 变为 10。最后 cout<<a 输出 10。\n【其他选项为何错】A 的 5 是修改前的值，忽略了 *p=10 这一赋值；B 说编译错误，对指向 int 的指针解引用后赋值完全合法；D 说输出地址，cout<<a 输出的是 a 的值而不是地址。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_01_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "用指针实现两个整数的交换。输入一行两个整数 a 和 b，交换 a、b 的值后输出。\n<p>输入格式：一行两个整数，中间用空格隔开。</p>\n<p>输出格式：交换后的两个整数，中间用空格隔开。</p>\n<p>样例输入1：<code>3 5</code> 样例输出1：<code>5 3</code></p>\n<p>样例输入2：<code>-7 2</code> 样例输出2：<code>2 -7</code></p>",
          "answer": 0,
          "explanation": "【解题思路】交换两个数的值，可以用一个临时变量 t 过渡。本题要求用指针完成：定义两个指针 pa、pb 分别指向 a、b，通过解引用 *pa、*pb 完成交换，体会“指针间接修改原变量”的特点。\n【逐步推理】第一步读入 a、b；第二步 int *pa=&a, *pb=&b 让指针指向这两个变量；第三步 int t=*pa 把 a 的值暂存，*pa=*pb 把 b 的值写入 a，*pb=t 把暂存的值写入 b；第四步输出 a 和 b。交换后原变量 a、b 的值互换了。\n【要点提醒】只有通过指针（或引用）间接修改，才能在函数外部真正改变原变量的值，这也是指针最常见的用途之一。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // 在这里编写代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3 5",
              "expectedOutput": "5 3",
              "description": "基础交换"
            },
            {
              "input": "10 10",
              "expectedOutput": "10 10",
              "description": "两数相等"
            },
            {
              "input": "-7 2",
              "expectedOutput": "2 -7",
              "description": "含负数"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n\n    // 定义两个指针分别指向 a 和 b\n    int *pa = &a;   // pa 保存 a 的地址\n    int *pb = &b;   // pb 保存 b 的地址\n\n    // 通过指针交换两个变量的值\n    int t = *pa;    // t 暂存 a 的值\n    *pa = *pb;      // 把 b 的值写入 a\n    *pb = t;        // 把暂存的值写入 b\n\n    // 输出交换后的结果\n    cout << a << \" \" << b << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 指针变量保存的是其他变量的地址：int *p = &a\n * 2. 解引用运算符 * 通过地址访问变量：*p 就代表变量 a\n * 3. 通过 *p 赋值可以间接修改原变量：*p = 10 等价于 a = 10\n * 4. 交换两数套路：t = x; x = y; y = t\n */"
        }
      ]
    },
    "kp5_10": {
      "title": "递归",
      "questions": [
        {
          "id": "kp2_02_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "递归函数指的是（ ）。",
          "options": [
            "函数直接或间接调用自身",
            "一个函数被调用很多次",
            "在函数内部使用循环",
            "一个程序包含多个函数"
          ],
          "answer": 0,
          "explanation": "【解题思路】递归的核心特征是函数在自身函数体内直接或间接调用自己。识别递归的关键是看函数定义中是否出现对自身的调用。\n【逐步推理】一个典型的递归函数形如 int f(int n){ ... f(n-1) ... }，在 f 的内部再次调用 f。这种自己调用自己的方式叫直接递归；若 f 调用 g、g 又调用 f，则叫间接递归。因此“函数直接或间接调用自身”正确。\n【其他选项为何错】B 说函数被调用很多次，循环中被反复调用并不构成递归；C 说在函数里写循环，那是迭代而不是递归；D 说程序包含多个函数，多函数程序很常见，但彼此不调用就不构成递归。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "一个正确的递归函数必须具有（ ）。",
          "options": [
            "至少两个参数",
            "终止条件（边界条件）",
            "全局变量",
            "多个 return 语句"
          ],
          "answer": 1,
          "explanation": "【解题思路】递归函数必须保证能停止运行，否则会无限调用自身导致栈溢出。保证停止的条件叫边界条件，又称递归出口，这是写递归的第一要务。\n【逐步推理】例如 int f(int n){ if(n==1) return 1; return n*f(n-1);} 中 if(n==1) return 1 就是边界条件，它让 n 减小到 1 时不再继续调用。没有边界条件的递归会无限递归，最终栈空间耗尽导致程序崩溃。因此递归必须具有“终止条件（边界条件）”。\n【其他选项为何错】A 说至少两个参数，递归与参数个数无关；C 说全局变量，不是递归的必要条件；D 说多个 return，一个 return 也能写出正确的递归。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "已知递归函数 int f(int n){ if(n==1) return 1; return n*f(n-1); } 则 f(4) 的值是（ ）。",
          "options": [
            "24",
            "4",
            "10",
            "12"
          ],
          "answer": 0,
          "explanation": "【解题思路】求 f(4) 可以用展开法逐步代入：把 f(n)=n*f(n-1) 反复展开，直到到达边界 f(1)=1，再自底向上反推回来。\n【逐步推理】f(4)=4*f(3)；f(3)=3*f(2)；f(2)=2*f(1)；f(1)=1。从最底层向上计算：f(2)=2*1=2，f(3)=3*2=6，f(4)=4*6=24。所以 f(4)=24，实际上这个函数就是求 4 的阶乘。\n【其他选项为何错】B 的 4 是参数 n 本身而不是结果；C 的 10 是 1+2+3+4 的和，混淆了连加与连乘；D 的 12 是 4*3 的结果，只算了一层。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "斐波那契数列 1, 1, 2, 3, 5, 8, 13, ... 中第 6 项是（ ）。",
          "options": [
            "5",
            "13",
            "8",
            "21"
          ],
          "answer": 2,
          "explanation": "【解题思路】斐波那契数列前几项为 1,1,2,3,5,8,13...，每一项等于前两项之和。写出数列后从第 1 项开始数到第 6 项即可。\n【逐步推理】第 1 项 f(1)=1，第 2 项 f(2)=1，第 3 项 f(3)=f(1)+f(2)=2，第 4 项 f(4)=f(2)+f(3)=3，第 5 项 f(5)=f(3)+f(4)=5，第 6 项 f(6)=f(4)+f(5)=3+5=8。因此第 6 项是 8。\n【其他选项为何错】A 的 5 是第 5 项；B 的 13 是第 7 项；D 的 21 是第 8 项。这些数都是数列中的项，但都不是题目要求的第 6 项。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "递推数列 a1=1, a2=1, an=a(n-1)+a(n-2)（n≥3），用递推方法求 a7 的值是（ ）。",
          "options": [
            "8",
            "21",
            "34",
            "13"
          ],
          "answer": 3,
          "explanation": "【解题思路】递推与递归相反，从已知的前几项出发，用循环按公式逐项往后推。本题按 an=a(n-1)+a(n-2) 从 a1、a2 一直推到 a7。\n【逐步推理】a1=1，a2=1。a3=a2+a1=2，a4=a3+a2=3，a5=a4+a3=5，a6=a5+a4=8，a7=a6+a5=8+5=13。所以 a7=13。\n【其他选项为何错】A 的 8 是 a6；B 的 21 是 a8（21=13+8）；C 的 34 是 a9（34=21+13）。这些是 a7 后面的项，不符合题目要求。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "关于递归和递推，下列说法正确的是（ ）。",
          "options": [
            "递归一定比循环实现更快",
            "递归可能导致栈溢出，递推通常不会",
            "递归只能处理数学问题",
            "递推一定比递归占用更多内存"
          ],
          "answer": 1,
          "explanation": "【解题思路】递归与递推都能解决问题，但各有特点。递归每层调用都会在栈上分配空间，层数过深可能耗尽栈空间；递推用循环迭代，通常只用固定数量的变量。\n【逐步推理】递归实现简洁，但每层调用都消耗栈帧，递归深度很大时容易发生栈溢出；递推通常只维护少数几个变量，不存在栈溢出问题。因此“递归可能导致栈溢出，递推通常不会”正确。\n【其他选项为何错】A 说递归一定比循环快，实际递归常因函数调用开销而更慢；C 说递归只能处理数学问题，递归在树的遍历、分治等场景中被广泛使用；D 说递推占更多内存，一般递推占用内存更少。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_02_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "用递归求斐波那契数列的第 n 项。斐波那契数列定义：f(1)=1，f(2)=1，f(n)=f(n-1)+f(n-2)（n≥3）。\n<p>输入格式：一行一个正整数 n（1≤n≤20）。</p>\n<p>输出格式：一个整数，表示第 n 项的值。</p>\n<p>样例输入1：<code>6</code> 样例输出1：<code>8</code></p>\n<p>样例输入2：<code>10</code> 样例输出2：<code>55</code></p>",
          "answer": 0,
          "explanation": "【解题思路】递归求斐波那契数列的关键是写出递推公式和边界条件：当 n≤2 时返回 1（边界），否则返回 f(n-1)+f(n-2)。\n【逐步推理】第一步读入 n；第二步定义递归函数 fib(n)：若 n≤2 返回 1，否则返回 fib(n-1)+fib(n-2)；第三步在 main 中调用 fib(n) 并输出。以 n=6 为例，fib(6)=fib(5)+fib(4)，逐层展开最终得到 8。\n【要点提醒】递归函数必须有边界条件（本题为 n≤2 时返回 1），否则会无限递归；n 范围控制在 20 以内，递归深度较小，不会造成栈溢出。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\nusing namespace std;\n\n// 在这里编写递归函数\n\nint main() {\n    int n;\n    cin >> n;\n    // 在这里调用递归函数并输出\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "6",
              "expectedOutput": "8",
              "description": "第6项"
            },
            {
              "input": "1",
              "expectedOutput": "1",
              "description": "第1项（边界）"
            },
            {
              "input": "10",
              "expectedOutput": "55",
              "description": "第10项"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\n// 递归求斐波那契数列第 n 项\nint fib(int n) {\n    // 边界条件：第 1、2 项都是 1\n    if (n <= 2) return 1;\n    // 递推关系：第 n 项 = 前两项之和\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    int n;\n    cin >> n;\n\n    cout << fib(n) << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 递归两要素：递推公式 + 边界条件\n *    - 递推公式：f(n) = f(n-1) + f(n-2)\n *    - 边界条件：n<=2 时返回 1\n * 2. 递归过程：f(6)=f(5)+f(4) 逐层向下拆解，到边界后逐层返回\n * 3. 写递归函数时一定要先写边界条件，否则会无限递归导致栈溢出\n */"
        }
      ]
    },
    "kp4_09": {
      "title": "排序算法",
      "questions": [
        {
          "id": "kp2_03_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "冒泡排序的基本操作是（ ）。",
          "options": [
            "任意两个元素之间直接交换",
            "每趟选出最小元素放到最前面",
            "比较相邻元素，若逆序则交换",
            "把中间元素作为基准划分序列"
          ],
          "answer": 2,
          "explanation": "【解题思路】冒泡排序的核心操作是反复比较相邻两个元素，若顺序错误就交换，每一趟把当前未排序部分的最大元素“冒泡”到最后面。\n【逐步推理】以升序为例，从前往后扫描，若 a[j]>a[j+1] 则交换，一趟下来最大的元素到达末尾。重复 n-1 趟后整个数组有序。因此冒泡排序的基本操作是“比较相邻元素，若逆序则交换”。\n【其他选项为何错】A 说任意两元素交换，那不是冒泡排序的相邻交换规则；B 说每趟选最小放最前，这是选择排序；D 说取中间元素为基准划分，这是快速排序的思路。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "选择排序每一趟要做的事情是（ ）。",
          "options": [
            "在未排序部分选出最值放到已排序部分末尾",
            "将相邻元素两两交换",
            "随机打乱后检查是否有序",
            "每次把最后一个元素移到最前面"
          ],
          "answer": 0,
          "explanation": "【解题思路】选择排序的策略是每趟在未排序部分中选出最小（或最大）元素，把它放到已排序部分的末尾，即与未排序部分第一个位置交换。\n【逐步推理】第一趟在整个数组中找最小元素与第一个位置交换；第二趟在剩余部分找最小与第二个位置交换；重复 n-1 趟即完成排序。因此“在未排序部分选出最值放到已排序部分末尾”正确。\n【其他选项为何错】B 说相邻元素两两交换，那是冒泡排序；C 说随机打乱后检查，那不能保证效率，也不是系统化的排序算法；D 说每次把最后元素放最前，不符合选择排序的规则。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "对数组 [5, 2, 8, 1, 9] 用冒泡排序（升序）进行第一趟排序后，数组变为（ ）。",
          "options": [
            "[2, 5, 8, 1, 9]",
            "[2, 5, 1, 8, 9]",
            "[1, 2, 5, 8, 9]",
            "[5, 2, 8, 1, 9]"
          ],
          "answer": 1,
          "explanation": "【解题思路】模拟一趟冒泡：从前往后依次比较相邻元素，逆序就交换。一趟结束后最大的元素 9 会到达末尾，其余元素也会随着交换略作调整。\n【逐步推理】初始数组 5,2,8,1,9。比较 5 和 2，5>2 交换得 2,5,8,1,9；比较 5 和 8，不交换；比较 8 和 1，交换得 2,5,1,8,9；比较 8 和 9，不交换。一趟结束数组为 [2,5,1,8,9]。\n【其他选项为何错】A 的 [2,5,8,1,9] 漏掉了 8 与 1 的交换；C 的 [1,2,5,8,9] 是完整排序后的结果；D 的 [5,2,8,1,9] 是原数组，说明没有进行任何交换。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "下列排序算法中，不稳定的是（ ）。",
          "options": [
            "冒泡排序",
            "插入排序",
            "选择排序",
            "归并排序"
          ],
          "answer": 2,
          "explanation": "【解题思路】稳定排序指相等元素的相对顺序排序后保持不变。冒泡、插入和归并排序都是稳定的；选择排序在交换时可能改变相等元素的相对顺序，因而不稳定。\n【逐步推理】以选择排序为例，数组 2a,2b,1（两个 2 相等），第一趟选最小元素 1 与 2a 交换得 1,2b,2a，两个 2 的相对顺序被改变，说明选择排序不稳定。冒泡和插入只在必要时交换相邻元素，不会破坏相等元素的顺序。\n【其他选项为何错】A 冒泡排序稳定；B 插入排序稳定；D 归并排序（合理实现）稳定。所以不稳定的是选择排序。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "冒泡排序和选择排序的时间复杂度都是（ ）。",
          "options": [
            "O(n log n)",
            "O(n²)",
            "O(n)",
            "O(log n)"
          ],
          "answer": 1,
          "explanation": "【解题思路】时间复杂度衡量算法运行时间随数据规模 n 增长的变化规律。冒泡排序和选择排序都需要两层循环，每层大约执行 n 次，总体是 n 的二次方级别。\n【逐步推理】两层嵌套循环，外层执行 n-1 趟，内层平均比较约 n/2 次，总比较次数约为 n(n-1)/2，忽略常数后数量级为 O(n²)。因此冒泡排序和选择排序的时间复杂度都是 O(n²)。\n【其他选项为何错】A 的 O(n log n) 是归并排序、快速排序等更高效算法的复杂度；C 的 O(n) 是单层循环的线性复杂度；D 的 O(log n) 是二分查找等算法的复杂度。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "对 n 个元素用冒泡排序，最坏情况下需要（ ）趟才能完成排序。",
          "options": [
            "n",
            "n/2",
            "n-1",
            "n+1"
          ],
          "answer": 2,
          "explanation": "【解题思路】冒泡排序每一趟都能确定一个元素的最终位置。对 n 个元素，前 n-1 个元素各就各位后，最后一个元素自然有序，因此最坏情况下需要 n-1 趟。\n【逐步推理】每趟冒泡把未排序部分的最大元素送到末尾：第 1 趟确定第 n 个位置，第 2 趟确定第 n-1 个位置，依此类推。当 n-1 个元素都归位后，剩下的第一个元素无需再排。所以最坏情况需要 n-1 趟。\n【其他选项为何错】A 的 n 趟多了一趟，第 n 趟没有实际作用；B 的 n/2 低估了趟数，最坏情况需要约 n-1 趟；D 的 n+1 更是多出两趟。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_03_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "用冒泡排序对 n 个整数升序排序。\n<p>输入格式：第一行一个正整数 n，第二行 n 个整数（用空格隔开）。</p>\n<p>输出格式：排序后的 n 个整数，用空格隔开。</p>\n<p>样例输入1：<code>5\\n5 2 8 1 9</code> 样例输出1：<code>1 2 5 8 9</code></p>\n<p>样例输入2：<code>3\\n3 2 1</code> 样例输出2：<code>1 2 3</code></p>",
          "answer": 0,
          "explanation": "【解题思路】冒泡排序的框架：外层循环控制趟数（n-1 趟），内层循环比较相邻元素，若逆序则交换。每趟结束后最大的元素到达末尾，内层循环范围相应缩小。\n【逐步推理】第一步读入 n 和数组；第二步外层 for(i=0;i<n-1;i++) 控制趟数，内层 for(j=0;j<n-1-i;j++) 比较 a[j] 与 a[j+1]，若 a[j]>a[j+1] 则交换；第三步循环输出排序后的数组，元素之间用空格隔开。\n【要点提醒】内层循环写成 n-1-i，是因为每趟已经确定了一个最大元素在末尾，无需再参与比较。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[1005];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n    // 在这里编写冒泡排序\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5\n5 2 8 1 9",
              "expectedOutput": "1 2 5 8 9",
              "description": "基础排序"
            },
            {
              "input": "3\n3 2 1",
              "expectedOutput": "1 2 3",
              "description": "完全逆序"
            },
            {
              "input": "1\n7",
              "expectedOutput": "7",
              "description": "单个元素"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n, a[1005];\n    cin >> n;\n    for (int i = 0; i < n; i++) cin >> a[i];\n\n    // 外层循环：共进行 n-1 趟\n    for (int i = 0; i < n - 1; i++) {\n        // 内层循环：比较相邻元素，把最大的“冒泡”到末尾\n        // 每趟结束后，末尾 i 个元素已经就位，无需再比较\n        for (int j = 0; j < n - 1 - i; j++) {\n            if (a[j] > a[j + 1]) {\n                // 相邻元素逆序，交换\n                int t = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = t;\n            }\n        }\n    }\n\n    // 输出排序后的数组\n    for (int i = 0; i < n; i++) {\n        if (i) cout << \" \";\n        cout << a[i];\n    }\n    cout << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 冒泡排序：相邻比较 + 逆序交换\n * 2. 外层循环 n-1 趟，内层范围逐趟缩小（n-1-i）\n * 3. 时间复杂度 O(n²)，属于稳定排序\n */"
        }
      ]
    },
    "kp3_05": {
      "title": "字符串及函数",
      "questions": [
        {
          "id": "kp2_04_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中 strlen 函数的功能是（ ）。",
          "options": [
            "复制字符串",
            "连接字符串",
            "比较字符串",
            "返回字符串长度（不含 '\\0'）"
          ],
          "answer": 3,
          "explanation": "【解题思路】C 语言风格字符串函数各司其职：strlen 求长度、strcpy 复制、strcat 连接、strcmp 比较。做题时先看清函数名，再对应其功能。\n【逐步推理】strlen 返回字符串中字符的个数，计数到末尾的 '\\0' 为止但不包含 '\\0' 本身。例如 strlen(\"abc\") 的值是 3。因此 strlen 的功能是“返回字符串长度（不含 '\\0'）”。\n【其他选项为何错】A 复制字符串是 strcpy 的功能；B 连接字符串是 strcat 的功能；C 比较字符串是 strcmp 的功能。这些函数名都与 strlen 不同，功能也各不相同。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "执行 strcmp(\"abc\", \"abd\") 的结果是（ ）。",
          "options": [
            "大于 0",
            "小于 0",
            "等于 0",
            "无法确定"
          ],
          "answer": 1,
          "explanation": "【解题思路】strcmp 按字典序逐字符比较两个字符串，返回负值、0 或正值来表示前者小于、等于或大于后者。本题只需判断 \"abc\" 与 \"abd\" 的字典序大小。\n【逐步推理】逐字符比较：第一个字符 a 与 a 相等，第二个 b 与 b 相等，第三个字符 c 的 ASCII 码是 99，d 是 100，c<d，所以 \"abc\" 小于 \"abd\"。strcmp 对前者返回小于 0 的值。\n【其他选项为何错】A 说大于 0，那表示第一个字符串更大，与事实相反；C 说等于 0，表示两个字符串完全相同，显然不是；D 说无法确定，strcmp 的比较结果是确定的，不会因环境变化而改变。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "已知 string s = \"hello\"; 则 s.substr(1, 3) 的结果是（ ）。",
          "options": [
            "\"hel\"",
            "\"llo\"",
            "\"ell\"",
            "\"elo\""
          ],
          "answer": 2,
          "explanation": "【解题思路】substr 的用法是 substr(起始下标, 长度)，从指定下标开始截取指定长度的子串。string 的下标从 0 开始计数。\n【逐步推理】s=\"hello\"，各字符下标依次为 h(0) e(1) l(2) l(3) o(4)。s.substr(1,3) 表示从下标 1 开始取 3 个字符，即 e、l、l，结果是 \"ell\"。\n【其他选项为何错】A 的 \"hel\" 是从下标 0 取 3 个字符的结果；B 的 \"llo\" 是从下标 2 取 3 个字符的结果；D 的 \"elo\" 跳过了字符，而 substr 取的是连续子串，不会跳过中间字符。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "关于 char s[] = \"abc\"; 下列说法正确的是（ ）。",
          "options": [
            "s 的长度是 4（含 '\\0'）",
            "s 的长度是 3",
            "这样的初始化不合法",
            "strlen(s) 的值是 4"
          ],
          "answer": 0,
          "explanation": "【解题思路】用字符串字面量初始化字符数组时，数组会自动在末尾补一个 '\\0'。因此数组的实际大小比可见字符多 1。\n【逐步推理】char s[]=\"abc\" 等价于 char s[]={'a','b','c','\\0'}，数组大小是 4，其中前 3 个是字符，最后一个是字符串结束标志。strlen(s) 数到 '\\0' 前为止，所以 strlen(s)=3。因此“s 的长度是 4（含 '\\0'）”正确。\n【其他选项为何错】B 说长度是 3，忽略了末尾自动补的 '\\0'；C 说这样初始化不合法，实际完全合法；D 说 strlen(s)=4，strlen 不含 '\\0'，应为 3。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "按字典序比较字符串 \"abc\" 与 \"ab\"，结果是（ ）。",
          "options": [
            "\"abc\" 等于 \"ab\"",
            "\"abc\" 小于 \"ab\"",
            "\"abc\" 大于 \"ab\"",
            "无法比较"
          ],
          "answer": 2,
          "explanation": "【解题思路】字符串的字典序比较与字典单词排序规则一致：逐个比较字符，若前面字符都相同，则较短的字符串排在前面，即更小。\n【逐步推理】比较 \"abc\" 与 \"ab\"：前两个字符 a、b 都相同，此时 \"ab\" 已经结束，而 \"abc\" 还有第三个字符 c。按字典序，短的 \"ab\" 是 \"abc\" 的前缀，前缀更小，所以 \"abc\" 大于 \"ab\"。\n【其他选项为何错】A 说两者相等，长度不同的字符串不可能相等；B 说 \"abc\" 小于 \"ab\"，与字典序规则相反；D 说无法比较，字符串按字典序可以比较大小。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "关于 string 类型的 find 函数，下列说法正确的是（ ）。",
          "options": [
            "返回子串首次出现的起始下标，找不到时返回 npos",
            "只能查找单个字符",
            "返回子串的长度",
            "找不到时返回 0"
          ],
          "answer": 0,
          "explanation": "【解题思路】string 的 find 函数用于查找子串，返回子串第一次出现的起始下标；若找不到，返回特殊常量 string::npos（一个很大的数）。\n【逐步推理】s=\"hello\"，s.find(\"ll\") 会返回 2，因为 \"ll\" 从下标 2 开始出现。若查找 \"xyz\"，字符串中不存在，返回 string::npos。因此 find 的规则是“返回子串起始下标，找不到时返回 npos”。\n【其他选项为何错】B 说只能查找单个字符，实际 find 可以查找字符串；C 说返回子串长度，find 返回的是位置而非长度；D 说找不到返回 0，实际返回 npos，返回 0 反而表示在开头找到了。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_04_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "输入一个字符串（可能含空格），统计其中元音字母的个数。元音字母指 a、e、i、o、u（不区分大小写）。\n<p>输入格式：一行字符串，可能包含大小写字母、空格等字符。</p>\n<p>输出格式：一个整数，表示元音字母的个数。</p>\n<p>样例输入1：<code>Hello World</code> 样例输出1：<code>3</code></p>\n<p>样例输入2：<code>AEIOU</code> 样例输出2：<code>5</code></p>\n<p>样例输入3：<code>xyz</code> 样例输出3：<code>0</code></p>",
          "answer": 0,
          "explanation": "【解题思路】统计元音的核心是遍历字符串的每个字符，判断它是否为 a、e、i、o、u 之一。由于大小写不敏感，需要先把大写字母转换为小写再判断。\n【逐步推理】第一步用 getline 读入整行字符串（因为可能含空格）；第二步遍历每个字符，若它是大写字母则加 32 转成小写；第三步判断小写字符是否等于 a、e、i、o、u 中的任意一个，是则计数器加 1；第四步输出计数结果。\n【要点提醒】字母 ASCII 码中小写比大写大 32，例如 'A'=65、'a'=97，因此大写转小写只需加 32。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);\n    // 在这里编写统计代码\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "Hello World",
              "expectedOutput": "3",
              "description": "含空格与大小写"
            },
            {
              "input": "AEIOU",
              "expectedOutput": "5",
              "description": "全大写元音"
            },
            {
              "input": "xyz",
              "expectedOutput": "0",
              "description": "无元音"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string s;\n    getline(cin, s);  // 读入整行，保留空格\n\n    int cnt = 0;\n    for (int i = 0; i < (int)s.size(); i++) {\n        char c = s[i];\n        // 大写字母转小写：小写比大写 ASCII 大 32\n        if (c >= 'A' && c <= 'Z') c += 32;\n\n        // 判断是否为元音字母\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {\n            cnt++;\n        }\n    }\n\n    cout << cnt << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. getline(cin, s) 可以读入含空格的整行字符串\n * 2. 大小写转换：大写字母加 32 变对应小写字母\n * 3. 统计套路：遍历 + 逐个判断 + 计数器累加\n */"
        }
      ]
    },
    "kp4_05": {
      "title": "结构体",
      "questions": [
        {
          "id": "kp2_05_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "C++ 中定义结构体的关键字是（ ）。",
          "options": [
            "class",
            "define",
            "struct",
            "type"
          ],
          "answer": 2,
          "explanation": "【解题思路】定义结构体的关键字是 struct，定义类的关键字是 class。两者功能相近，但在 C++ 中默认访问权限不同。记住关键字即可作答。\n【逐步推理】C++ 中用 struct 定义结构体，例如 struct Student { string name; int score; };。定义完成后可以用 Student 声明结构体变量。因此定义结构体的关键字是 struct。\n【其他选项为何错】A 的 class 是定义类的关键字；B 的 define 是预处理器宏定义指令；D 的 type 不是 C++ 中定义结构体的关键字。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "结构体变量通过（ ）访问其成员。",
          "options": [
            "点号 .",
            "箭头 ->",
            "冒号 :",
            "下划线 _"
          ],
          "answer": 0,
          "explanation": "【解题思路】结构体成员访问有两种方式：对结构体变量用点号 .，对结构体指针用箭头 ->。本题问的是结构体变量访问成员的方式。\n【逐步推理】struct Student { string name; int score; }; Student s; 之后可以用 s.name 和 s.score 访问成员。若用指针 Student *p=&s，则用 p->name 访问。因此结构体变量通过点号 . 访问成员。\n【其他选项为何错】B 的箭头 -> 用于通过指针访问成员，不是普通变量；C 的冒号用于位域定义或构造函数的初始化列表，不用于访问成员；D 的下划线只是标识符中允许出现的字符。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "关于结构体和类的区别，下列说法正确的是（ ）。",
          "options": [
            "结构体的成员默认公有，类的成员默认私有",
            "类和结构体的成员都默认公有",
            "类和结构体的成员都默认私有",
            "结构体不能定义成员函数"
          ],
          "answer": 0,
          "explanation": "【解题思路】C++ 中 struct 和 class 的差别主要在默认访问权限：结构体成员默认 public（公有），类成员默认 private（私有）。\n【逐步推理】struct Student { int score; }; 中 score 默认为公有，外部可直接访问；class Student { int score; }; 中 score 默认为私有，外部不能直接访问，需要通过公有成员函数来操作。因此“结构体的成员默认公有，类的成员默认私有”正确。\n【其他选项为何错】B 说两者都默认公有，class 实际默认私有；C 说两者都默认私有，struct 实际默认公有；D 说结构体不能定义成员函数，实际上结构体完全可以定义成员函数。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "构造函数的作用是（ ）。",
          "options": [
            "销毁对象",
            "在创建对象时初始化对象的成员",
            "返回对象的地址",
            "比较两个对象是否相等"
          ],
          "answer": 1,
          "explanation": "【解题思路】构造函数是类中的特殊成员函数，函数名与类名相同，没有返回值，在创建对象时被自动调用，用于初始化对象的成员。\n【逐步推理】例如 struct Point { int x, y; Point(int a, int b){ x=a; y=b; } };，执行 Point p(3,4) 时构造函数被自动调用，p.x=3、p.y=4。因此构造函数的作用是“在创建对象时初始化对象的成员”。\n【其他选项为何错】A 说销毁对象，那是析构函数的工作；C 说返回对象地址，构造函数不返回值；D 说比较两个对象，构造函数与对象比较无关。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "关于结构体数组，下列说法正确的是（ ）。",
          "options": [
            "结构体数组只能有一个元素",
            "结构体数组的元素不能访问成员",
            "C++ 中不允许定义结构体数组",
            "可以定义结构体数组，每个元素都是一个结构体变量"
          ],
          "answer": 3,
          "explanation": "【解题思路】结构体是一种自定义类型，与基本类型一样可以定义数组。数组的每个元素都是独立的结构体变量，可以分别访问其成员。\n【逐步推理】struct Student { string name; int score; }; Student stu[100]; 定义了含 100 个学生的数组，stu[i].name、stu[i].score 用于访问第 i 个学生的姓名和成绩。这在处理批量数据时非常常用。因此“可以定义结构体数组，每个元素都是一个结构体变量”正确。\n【其他选项为何错】A 说只能有一个元素，数组可以有任意多个元素；B 说元素不能访问成员，stu[i].name 完全可以访问；C 说 C++ 不允许结构体数组，实际完全允许。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_q06",
          "type": "choice",
          "difficulty": 3,
          "question": "已知 struct Student { string name; int score; }; Student s; 则给 s 的 name 成员赋值的正确写法是（ ）。",
          "options": [
            "s->name = \"Tom\";",
            "Student.name = \"Tom\";",
            "s.name = \"Tom\";",
            "name.s = \"Tom\";"
          ],
          "answer": 2,
          "explanation": "【解题思路】结构体变量用点号 . 访问成员。本题有一个结构体对象 s，要修改其 name 成员应使用 s.name。\n【逐步推理】struct Student { string name; int score; }; Student s; 中，s 是结构体变量，访问成员用点号：s.name=\"Tom\"。因此 C 选项正确。\n【其他选项为何错】A 的 s->name 用于结构体指针，而 s 是普通变量而不是指针；B 的 Student.name 试图用类型名访问成员，类型名本身不能访问成员，必须先声明变量；D 的 name.s 把成员名和变量名写反了，语法也不正确。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_05_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "有 n 个学生，每个学生有姓名和成绩。输入 n 名学生的姓名和成绩，输出成绩最高的学生的姓名和成绩（成绩相同则输出先出现的）。\n<p>输入格式：第一行一个正整数 n；接下来 n 行，每行一个姓名和一个成绩（整数），用空格隔开。</p>\n<p>输出格式：成绩最高的学生姓名和成绩，用空格隔开。</p>\n<p>样例输入1：<code>3\\nTom 90\\nAmy 85\\nBob 95</code> 样例输出1：<code>Bob 95</code></p>\n<p>样例输入2：<code>2\\nJoe 70\\nZoe 80</code> 样例输出2：<code>Zoe 80</code></p>",
          "answer": 0,
          "explanation": "【解题思路】用结构体把“姓名 + 成绩”打包成一个整体，再用结构体数组存储多名学生，最后遍历数组找出成绩最大的下标并输出。\n【逐步推理】第一步定义结构体 Student，含 name 和 score 两个成员；第二步读入 n，用循环读入每名学生的姓名和成绩存入结构体数组；第三步假设第 0 名学生成绩最高，遍历其余学生，若当前成绩大于已记录的最高成绩则更新下标；第四步输出该下标对应学生的姓名和成绩。\n【要点提醒】用下标记录而不是直接记录姓名，可以避免频繁复制字符串，也更清晰。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int score;\n};\n\nint main() {\n    int n;\n    cin >> n;\n    Student stu[105];\n    for (int i = 0; i < n; i++) {\n        cin >> stu[i].name >> stu[i].score;\n    }\n    // 在这里找出成绩最高的学生并输出\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "3\nTom 90\nAmy 85\nBob 95",
              "expectedOutput": "Bob 95",
              "description": "基础情况"
            },
            {
              "input": "1\nAlice 100",
              "expectedOutput": "Alice 100",
              "description": "只有一个学生"
            },
            {
              "input": "2\nJoe 70\nZoe 80",
              "expectedOutput": "Zoe 80",
              "description": "后一名成绩更高"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\n\nstruct Student {\n    string name;\n    int score;\n};\n\nint main() {\n    int n;\n    cin >> n;\n\n    Student stu[105];\n    for (int i = 0; i < n; i++) {\n        cin >> stu[i].name >> stu[i].score;\n    }\n\n    // 先假设第 0 名学生成绩最高\n    int idx = 0;\n    for (int i = 1; i < n; i++) {\n        // 只更新最高分，成绩相等时保留先出现的\n        if (stu[i].score > stu[idx].score) {\n            idx = i;\n        }\n    }\n\n    // 输出成绩最高的学生姓名和成绩\n    cout << stu[idx].name << \" \" << stu[idx].score << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 结构体把多个数据打包成一个整体，用 . 访问成员\n * 2. 结构体数组：每个元素都是一个结构体变量\n * 3. 求最值的套路：先假设第一个最大，再逐个比较更新\n */"
        }
      ]
    },
    "kp6_13": {
      "title": "栈、队列、循环队列",
      "questions": [
        {
          "id": "kp2_06_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "栈的数据特点是（ ）。",
          "options": [
            "先进先出",
            "先进后出",
            "随机存取",
            "只能从中间插入元素"
          ],
          "answer": 1,
          "explanation": "【解题思路】栈是一种受限的线性结构，只允许在一端（栈顶）进行插入和删除，后进入的元素先离开，即先进后出（LIFO）。\n【逐步推理】向栈中依次压入 a、b、c 后，栈顶是 c。弹出时先弹 c，再弹 b，最后弹 a。这种“后进先出”的特性正是栈区别于队列的本质。因此栈的特点是先进后出。\n【其他选项为何错】A 的先进先出是队列的特点；C 的随机存取是数组的特点；D 说只能从中间插入，栈只能在栈顶操作，不能从中间插入。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "队列的数据特点是（ ）。",
          "options": [
            "先进先出",
            "先进后出",
            "后进先出",
            "随机存取"
          ],
          "answer": 0,
          "explanation": "【解题思路】队列允许在一端（队尾）插入、在另一端（队首）删除，先入队的元素先出队，即先进先出（FIFO）。\n【逐步推理】向队列依次入队 a、b、c 后，队首是 a。出队时先出 a，再出 b，最后出 c。这种“先来先服务”的规则与日常排队的场景一致，因此队列的特点是先进先出。\n【其他选项为何错】B 的先进后出是栈的特点；C 的后进先出与先进后出同义，也是栈的特点；D 的随机存取是数组的特点。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "在 STL 中，stack 用（ ）成员函数访问栈顶元素。",
          "options": [
            "top()",
            "front()",
            "back()",
            "peek()"
          ],
          "answer": 0,
          "explanation": "【解题思路】STL 中 stack 的常用成员函数包括 push 入栈、pop 出栈、top 取栈顶、empty 判空、size 求大小。访问栈顶元素用 top()。\n【逐步推理】stack<int> s; s.push(5); s.push(8); 此时栈顶元素是 8，s.top() 返回 8。top() 只查看不删除，pop() 才真正把栈顶元素弹出。因此访问栈顶元素用 top()。\n【其他选项为何错】B 的 front() 是 queue 和 deque 取队首的成员函数；C 的 back() 是 queue 取队尾的成员函数；D 的 peek() 是部分教材里自定义的方法名，STL 的 stack 并没有 peek 成员函数。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "在 STL 中，queue 用（ ）成员函数访问队首元素。",
          "options": [
            "top()",
            "back()",
            "front()",
            "pop()"
          ],
          "answer": 2,
          "explanation": "【解题思路】STL 中 queue 的常用成员函数包括 push 入队、pop 出队、front 取队首、back 取队尾、empty 判空。访问队首元素用 front()。\n【逐步推理】queue<int> q; q.push(5); q.push(8); 队首是 5，q.front() 返回 5。front() 只查看不删除，pop() 才将队首元素移出队列。因此访问队首元素用 front()。\n【其他选项为何错】A 的 top() 是 stack 和 priority_queue 取栈顶（堆顶）的成员函数；B 的 back() 取的是队尾元素；D 的 pop() 是删除队首元素的操作，不是查看。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "往空栈中依次压入 1、2、3，然后依次弹出，弹出的顺序是（ ）。",
          "options": [
            "1, 2, 3",
            "3, 2, 1",
            "1, 3, 2",
            "2, 1, 3"
          ],
          "answer": 1,
          "explanation": "【解题思路】栈按先进后出工作。依次压入 1、2、3 后，栈顶依次为 1、2、3，弹出时从栈顶开始，所以先弹出最后压入的 3。\n【逐步推理】入栈序列为 1、2、3，入栈完成后栈内从栈底到栈顶为 1、2、3。弹出操作取栈顶元素：第一次弹 3，栈变为 1、2；第二次弹 2，栈变为 1；第三次弹 1。因此弹出顺序是 3、2、1。\n【其他选项为何错】A 的 1、2、3 是先进先出，那是队列的出队顺序；C 的 1、3、2 和 D 的 2、1、3 都不符合栈的后进先出规则。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "往空队列中依次入队 1、2、3，然后依次出队，出队的顺序是（ ）。",
          "options": [
            "1, 2, 3",
            "3, 2, 1",
            "2, 3, 1",
            "3, 1, 2"
          ],
          "answer": 0,
          "explanation": "【解题思路】队列按先进先出工作。依次入队 1、2、3 后，队首是 1，出队时先出最早入队的元素。\n【逐步推理】入队序列为 1、2、3，入队完成后队列从队首到队尾为 1、2、3。出队操作取队首元素：第一次出 1，队列变为 2、3；第二次出 2，队列变为 3；第三次出 3。因此出队顺序是 1、2、3。\n【其他选项为何错】B 的 3、2、1 是后进先出，那是栈的弹出顺序；C 的 2、3、1 和 D 的 3、1、2 都不符合队列的先进先出规则。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_06_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "用栈判断一个只包含小括号的字符串是否括号匹配。所谓匹配，指每个左括号 ( 都有一个右括号 ) 与之对应，且括号的嵌套顺序正确。\n<p>输入格式：一行字符串，只含 '(' 和 ')' 两种字符。</p>\n<p>输出格式：若括号匹配输出 OK，否则输出 NO。</p>\n<p>样例输入1：<code>(())</code> 样例输出1：<code>OK</code></p>\n<p>样例输入2：<code>(()</code> 样例输出2：<code>NO</code></p>\n<p>样例输入3：<code>())</code> 样例输出3：<code>NO</code></p>",
          "answer": 0,
          "explanation": "【解题思路】经典括号匹配问题用栈解决：遇到左括号入栈，遇到右括号时若栈为空则右括号多余、匹配失败，否则弹出一个左括号与之配对。最后栈为空说明全部匹配。\n【逐步推理】第一步定义 stack<char> st 和一个标记 ok=true；第二步遍历每个字符，若是 '(' 则 push，若是 ')' 则先检查 st 是否为空，为空则 ok=false 并跳出，不为空则 pop；第三步遍历结束后，若 ok 为 true 且栈为空，输出 OK，否则输出 NO。\n【要点提醒】最后必须检查栈是否为空，因为左括号多于右括号时（如 \"(()\"）栈中会残留未配对的左括号。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n    // 在这里用栈判断括号是否匹配\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "(())",
              "expectedOutput": "OK",
              "description": "标准匹配"
            },
            {
              "input": "(()",
              "expectedOutput": "NO",
              "description": "左括号多余"
            },
            {
              "input": "())(",
              "expectedOutput": "NO",
              "description": "顺序错误"
            }
          ],
          "answerText": "#include <iostream>\n#include <string>\n#include <stack>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n\n    stack<char> st;  // 用栈保存左括号\n    bool ok = true;\n\n    for (int i = 0; i < (int)s.size(); i++) {\n        if (s[i] == '(') {\n            st.push(s[i]);          // 左括号入栈\n        } else {\n            if (st.empty()) {       // 遇到右括号但栈已空：右括号多余\n                ok = false;\n                break;\n            }\n            st.pop();               // 弹出一个左括号与之配对\n        }\n    }\n\n    // 全部处理完且栈为空，才算完全匹配\n    if (ok && st.empty()) {\n        cout << \"OK\" << endl;\n    } else {\n        cout << \"NO\" << endl;\n    }\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 栈：先进后出（LIFO），常用操作 push、pop、top、empty\n * 2. 括号匹配套路：左括号入栈，右括号弹栈并检查栈是否为空\n * 3. 最终还要检查栈是否为空，排除左括号多于右括号的情况\n */"
        }
      ]
    },
    "kp6_01": {
      "title": "树的定义与遍历",
      "questions": [
        {
          "id": "kp2_07_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "二叉树中每个节点最多有（ ）个子节点。",
          "options": [
            "1 个",
            "3 个",
            "任意多个",
            "2 个"
          ],
          "answer": 3,
          "explanation": "【解题思路】二叉树定义的关键限制是每个节点最多有两个子节点，分别称为左孩子和右孩子。“至多两个”是二叉树与一般树（多叉树）的本质区别。\n【逐步推理】二叉树中的每个节点可以有 0、1 或 2 个子节点，但最多不超过 2 个。这种结构便于用数组或链式方式存储，也适合进行遍历。因此“最多 2 个子节点”正确。\n【其他选项为何错】A 说只有 1 个子节点，忽略了可以有 2 个的情况；B 说 3 个，那是一般多叉树，不是二叉树；C 说任意多个，二叉树的“二”字就限定了最多两个。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_q02",
          "type": "choice",
          "difficulty": 1,
          "question": "树中度（孩子个数）为 0 的节点称为（ ）。",
          "options": [
            "叶子节点",
            "根节点",
            "中间节点",
            "父节点"
          ],
          "answer": 0,
          "explanation": "【解题思路】树中节点的分类依据是孩子个数。没有子节点的节点称为叶子节点，它是树的末端。度为 0 即没有孩子。\n【逐步推理】节点的度表示该节点的孩子个数。度为 0 的节点没有孩子，处于树的末端，称为叶子节点（叶节点）。与之相对，有孩子的节点称为内部节点，最顶层的节点称为根节点。因此“叶子节点”正确。\n【其他选项为何错】B 的根节点是树中唯一没有父节点的节点，但不一定度为 0；C 的中间节点通常有孩子；D 的父节点是其他节点的前驱，其度一般大于 0。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "二叉树先序遍历的顺序是（ ）。",
          "options": [
            "根左右",
            "左根右",
            "左右根",
            "根右左"
          ],
          "answer": 0,
          "explanation": "【解题思路】二叉树的遍历顺序由访问根节点的时机决定：先访问根，再递归遍历左子树、右子树，称为先序遍历，简记为“根左右”。\n【逐步推理】先序遍历的访问顺序是：访问根节点，然后先序遍历左子树，再先序遍历右子树。例如根为 A、左子树根为 B、右子树根为 C 的树，先序遍历结果是 A B C。因此先序遍历顺序是根左右。\n【其他选项为何错】B 的左根右是中序遍历；C 的左右根是后序遍历；D 的根右左不是标准的遍历顺序，标准先序总是先左后右。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "二叉树中序遍历的顺序是（ ）。",
          "options": [
            "根左右",
            "左右根",
            "左根右",
            "根右左"
          ],
          "answer": 2,
          "explanation": "【解题思路】中序遍历按“左子树、根、右子树”的顺序访问节点，简记为“左根右”。这是二叉搜索树按序输出元素的关键遍历方式。\n【逐步推理】中序遍历的访问顺序是：先中序遍历左子树，然后访问根节点，最后中序遍历右子树。例如根为 A、左子树根为 B、右子树根为 C 的树，中序遍历结果是 B A C。因此中序遍历顺序是左根右。\n【其他选项为何错】A 的根左右是先序遍历；B 的左右根是后序遍历；D 的根右左不是标准的中序遍历。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_q05",
          "type": "choice",
          "difficulty": 2,
          "question": "一棵有 n 个节点的树，它的边数是（ ）。",
          "options": [
            "n - 1",
            "n",
            "n + 1",
            "2n"
          ],
          "answer": 0,
          "explanation": "【解题思路】树的边数是树的一个重要性质：n 个节点的树恰好有 n-1 条边。可以从根节点出发逐层延伸来理解。\n【逐步推理】一棵树从根节点出发，每增加一个节点就必须为它连一条边，使它成为某个已有节点的孩子。初始只有 1 个根节点时边数为 0，之后每加 1 个节点就加 1 条边，因此 n 个节点对应 n-1 条边。所以边数是 n-1。\n【其他选项为何错】B 的 n 多算了一条边，只有图恰好成环时边数才可能等于节点数；C 的 n+1 和 D 的 2n 都明显多于树的实际边数。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "图中一个节点的度指的是（ ）。",
          "options": [
            "该节点所在的层数",
            "与该节点直接相连的边的条数",
            "图中节点的总数",
            "该节点到根节点的距离"
          ],
          "answer": 1,
          "explanation": "【解题思路】图中节点的度定义为与该节点直接相连的边的条数。有向图中还进一步分为入度和出度，本题针对一般意义下的度。\n【逐步推理】在一个无向图中，若节点 A 与 3 条边相连，就称 A 的度为 3。度的概念用来描述一个节点与其他节点的连接紧密程度。因此“与该节点直接相连的边的条数”正确。\n【其他选项为何错】A 说层数，层是树中描述深度的概念，图不一定有层次；C 说节点总数，那是图的规模，与单个节点的度无关；D 说节点到根的距离，那是树的深度，图中未必存在根。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_07_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "一棵完全二叉树按数组方式存储：根节点放在下标 1，节点 i 的左孩子在下标 2*i，右孩子在下标 2*i+1。输入 n 和 n 个节点值，输出叶子节点的个数（叶子节点指没有孩子节点的节点）。\n<p>输入格式：第一行一个正整数 n；第二行 n 个整数（用空格隔开），即下标 1 到 n 的节点值。</p>\n<p>输出格式：一个整数，表示叶子节点的个数。</p>\n<p>样例输入1：<code>5\\n1 2 3 4 5</code> 样例输出1：<code>3</code></p>\n<p>样例输入2：<code>3\\n1 2 3</code> 样例输出2：<code>2</code></p>",
          "answer": 0,
          "explanation": "【解题思路】在数组存储的完全二叉树中，节点 i 的左孩子下标是 2*i。若 2*i 大于 n，说明节点 i 没有左孩子，也就没有孩子，是叶子节点。遍历所有节点统计即可。\n【逐步推理】第一步读入 n 和节点数组（下标从 1 开始）；第二步遍历 i 从 1 到 n，判断 2*i>n 是否成立；第三步若成立则计数器加 1（该节点没有孩子，是叶子）；第四步输出计数结果。\n【要点提醒】完全二叉树节点要么有两个孩子，要么没有孩子，不可能只有一个孩子，所以只需检查左孩子下标是否越界即可判断是否为叶子。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n    int a[1005];\n    for (int i = 1; i <= n; i++) cin >> a[i];\n    // 在这里统计叶子节点个数\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "5\n1 2 3 4 5",
              "expectedOutput": "3",
              "description": "5个节点"
            },
            {
              "input": "3\n1 2 3",
              "expectedOutput": "2",
              "description": "3个节点"
            },
            {
              "input": "1\n7",
              "expectedOutput": "1",
              "description": "只有根节点"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int n;\n    cin >> n;\n\n    int a[1005];\n    for (int i = 1; i <= n; i++) cin >> a[i];\n\n    int cnt = 0;\n    // 节点 i 的左孩子在下标 2*i\n    // 若 2*i 超过 n，说明节点 i 没有左孩子，也没有右孩子，是叶子节点\n    for (int i = 1; i <= n; i++) {\n        if (2 * i > n) {\n            cnt++;\n        }\n    }\n\n    cout << cnt << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 完全二叉树数组存储：下标 1 为根，节点 i 的孩子是 2*i 和 2*i+1\n * 2. 叶子节点：没有孩子节点的节点\n * 3. 判断叶子：2*i > n 说明节点 i 没有左孩子，即没有孩子\n */"
        }
      ]
    },
    "kp3_02": {
      "title": "位运算",
      "questions": [
        {
          "id": "kp2_08_q01",
          "type": "choice",
          "difficulty": 1,
          "question": "判断正整数 n（n>1）是否为素数，只需检查 2 到（ ）之间是否存在 n 的因子。",
          "options": [
            "sqrt(n)",
            "n",
            "n / 2",
            "1"
          ],
          "answer": 0,
          "explanation": "【解题思路】判断素数只需检查 2 到 sqrt(n) 之间是否存在 n 的因子。因为若 n 有大于 sqrt(n) 的因子，必然对应一个小于 sqrt(n) 的因子。\n【逐步推理】若 n 是合数，设 n=a*b，则 a、b 中必有一个不超过 sqrt(n)。因此只要 2 到 sqrt(n) 内没有因子，n 就是素数。例如判断 17，只需试除 2、3、4。因此“sqrt(n)”正确。\n【其他选项为何错】B 检查到 n 会把 n 本身也算作因子，导致所有数都判为合数；C 检查到 n/2 虽然正确但多做了不少无用功；D 从 1 开始，1 是所有数的因子，会误判所有数为合数。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_q02",
          "type": "choice",
          "difficulty": 2,
          "question": "用辗转相除法求最大公约数 gcd(a,b) 的核心步骤是（ ）。",
          "options": [
            "不断用余数替换较大的数，直到余数为 0",
            "把两个数相乘",
            "取两个数中的较大者",
            "求两个数的最小公倍数"
          ],
          "answer": 0,
          "explanation": "【解题思路】辗转相除法（欧几里得算法）求 gcd 的步骤：用较大数除以较小数取余数，再用除数除以余数，重复直到余数为 0，此时除数就是最大公约数。\n【逐步推理】求 gcd(12,8)：12 除以 8 余 4，再用 8 除以 4 余 0，最大公约数为 4。核心是“不断用余数替换较大的数，直到余数为 0”。因此 A 正确。\n【其他选项为何错】B 说把两个数相乘，乘积与公约数无关；C 说取较大者，最大公约数不可能大于较小的那个数；D 说求最小公倍数，那是 lcm，与最大公约数不同。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_q03",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 5 & 3 的值是（ ）。",
          "options": [
            "7",
            "1",
            "6",
            "8"
          ],
          "answer": 1,
          "explanation": "【解题思路】按位与 & 的规则是：两个对应位都为 1 时结果位为 1，否则为 0。先把操作数转成二进制，再逐位运算。\n【逐步推理】5 的二进制是 101，3 的二进制是 011。逐位相与：第 0 位 1&1=1，第 1 位 0&1=0，第 2 位 1&0=0，结果二进制 001，即十进制 1。因此 5&3=1。\n【其他选项为何错】A 的 7 是按位或的结果（101|011=111=7）；C 的 6 是异或的结果（101^011=110=6）；D 的 8 不是上述任何基本位运算的结果。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_q04",
          "type": "choice",
          "difficulty": 2,
          "question": "表达式 5 | 3 的值是（ ）。",
          "options": [
            "1",
            "6",
            "7",
            "15"
          ],
          "answer": 2,
          "explanation": "【解题思路】按位或 | 的规则是：两个对应位只要有一个为 1，结果位就是 1。先把操作数转成二进制，再逐位运算。\n【逐步推理】5 的二进制是 101，3 的二进制是 011。逐位相或：第 0 位 1|1=1，第 1 位 0|1=1，第 2 位 1|0=1，结果二进制 111，即十进制 7。因此 5|3=7。\n【其他选项为何错】A 的 1 是按位与的结果（101&011=001=1）；B 的 6 是异或的结果（101^011=110=6）；D 的 15 是二进制 1111 的十进制，5 和 3 或运算结果不可能是 15。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_q05",
          "type": "choice",
          "difficulty": 3,
          "question": "表达式 5 ^ 3 的值是（ ）。",
          "options": [
            "1",
            "7",
            "8",
            "6"
          ],
          "answer": 3,
          "explanation": "【解题思路】按位异或 ^ 的规则是：两个对应位相同时结果位为 0，不同时为 1。这是位运算中较难的一个，需逐位对比。\n【逐步推理】5 的二进制是 101，3 的二进制是 011。逐位异或：第 0 位 1^1=0，第 1 位 0^1=1，第 2 位 1^0=1，结果二进制 110，即十进制 6。因此 5^3=6。\n【其他选项为何错】A 的 1 是按位与的结果（101&011=001=1）；B 的 7 是按位或的结果（101|011=111=7）；C 的 8 是 5+3 的十进制结果，异或并不是加法。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_q06",
          "type": "choice",
          "difficulty": 2,
          "question": "二进制数 1010 表示的十进制数是（ ）。",
          "options": [
            "8",
            "12",
            "10",
            "6"
          ],
          "answer": 2,
          "explanation": "【解题思路】二进制转十进制：从最低位开始，每位数字乘以 2 的相应次方再求和。1010 的第 0 位是 0、第 1 位是 1、第 2 位是 0、第 3 位是 1。\n【逐步推理】1010 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10。因此二进制 1010 表示的十进制数是 10。\n【其他选项为何错】A 的 8 是二进制 1000 的结果；B 的 12 是二进制 1100 的结果；D 的 6 是二进制 110 的结果。这些都与 1010 不对应。",
          "source": "二级题库",
          "isJudge": false
        },
        {
          "id": "kp2_08_c01",
          "type": "coding",
          "difficulty": 2,
          "question": "求两个正整数的最大公约数。要求用辗转相除法（欧几里得算法）实现。\n<p>输入格式：一行两个正整数 a、b，用空格隔开。</p>\n<p>输出格式：一个整数，表示 a 和 b 的最大公约数。</p>\n<p>样例输入1：<code>12 8</code> 样例输出1：<code>4</code></p>\n<p>样例输入2：<code>7 13</code> 样例输出2：<code>1</code></p>\n<p>样例输入3：<code>100 25</code> 样例输出3：<code>25</code></p>",
          "answer": 0,
          "explanation": "【解题思路】辗转相除法求最大公约数：反复执行“用当前较小的数对较大的数取余，再交换”，直到余数为 0，此时除数就是最大公约数。实现为一个循环或递归函数即可。\n【逐步推理】第一步读入 a、b；第二步循环 while(b!=0)：令 t=a%b，把 b 赋给 a，把 t 赋给 b；第三步循环结束后 a 即为最大公约数，输出 a。例如 gcd(12,8)：12%8=4，8%4=0，循环结束 a=4，输出 4。\n【要点提醒】循环终止条件是 b 变为 0，不需要关心 a、b 谁大，循环内部自动处理。",
          "source": "二级题库",
          "starterCode": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n    // 在这里用辗转相除法求最大公约数\n    \n    return 0;\n}",
          "testCases": [
            {
              "input": "12 8",
              "expectedOutput": "4",
              "description": "基础情况"
            },
            {
              "input": "7 13",
              "expectedOutput": "1",
              "description": "互质数"
            },
            {
              "input": "100 25",
              "expectedOutput": "25",
              "description": "倍数关系"
            }
          ],
          "answerText": "#include <iostream>\nusing namespace std;\n\nint main() {\n    int a, b;\n    cin >> a >> b;\n\n    // 辗转相除法：不断用余数替换，直到余数为 0\n    while (b != 0) {\n        int t = a % b;  // 求 a 除以 b 的余数\n        a = b;          // 原来的除数变成新的被除数\n        b = t;          // 余数变成新的除数\n    }\n\n    // 循环结束时 b 为 0，a 就是最大公约数\n    cout << a << endl;\n\n    return 0;\n}\n\n/*\n * 【知识点总结】\n * 1. 辗转相除法（欧几里得算法）：gcd(a,b) = gcd(b, a%b)\n * 2. 循环实现：while(b!=0){ t=a%b; a=b; b=t; }\n * 3. 最大公约数（gcd）是最能同时整除 a、b 的最大正整数\n */"
        }
      ]
    }
  },
  "mockExam": [],
  "realExam": []
};

if (typeof module !== 'undefined') module.exports = QUESTION_BANK;
