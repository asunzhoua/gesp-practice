const QUESTION_BANK = {
  "knowledgePoints": {
    "kp5_01": {
      "title": "初等数论",
      "questions": [
        {
          "id": "l5_202309_01",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "近年来，线上授课变得普遍，很多有助于改善教学效果的设备也逐渐流行，其中包括比较常用的手写板，那么它属于哪类设备？（ ）",
          "options": [
            "A. 输入",
            "B. 输出",
            "C. 控制",
            "D. 记录"
          ],
          "answer": 0,
          "explanation": "手写板的作用是把人在板上写下的笔迹采集并输入到电脑中，属于输入设备。它并不输出信息，也不负责控制或记录数据，所以选A。它是把笔迹转换成电信号传给电脑的设备，属于输入设备，选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_02",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，且b的值不为0，那么下列能正确判断“a是b的3倍”的表达式是（ ）。",
          "options": [
            "A. (a >> 3 == b)",
            "B. (a - b) % 3 == 0",
            "C. (a / b == 3)",
            "D. (a == 3 * b)"
          ],
          "answer": 3,
          "explanation": "a是b的3倍应写成a==3*b。A把a右移3位相当于除以8，含义不对；B只判断a减b能否被3整除；C用整型除法，比如a=7、b=2时a/b也等于3，会误判。只有D精确，所以选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_03",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果变量a和b分别为double类型和int类型，则表达式(a = 6, b = 3 * (7 + 8) / 2, b += a)的计算结果为（ ）。",
          "options": [
            "A. 6",
            "B. 21",
            "C. 28",
            "D. 不确定"
          ],
          "answer": 2,
          "explanation": "这是逗号表达式，从左到右依次计算，整个表达式的值是最后一项的结果。a=6；b=3×15÷2=22（b是int，45÷2取整为22）；最后b+=a即22+6=28，所以选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_08",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面代码正确的是（ ）。\n// 在C++中，可以通过函数指针的形式，将一个函数作为另一个函数的参数。\n// bool checkNum(bool (*Fx)(int), int N); 声明了一个函数，\n// 其第一个参数是函数指针类型，指向一个接收一个int参数且返回bool的函数。\n#include <iostream>\nusing namespace std;\nbool isEven(int N) {\nreturn N % 2 == 0;\n}\nbool checkNum(bool (*Fx)(int), int N) {\nreturn Fx(N);\n}\nint main() {\ncout << checkNum(isEven, 10) << endl;\nreturn 0;\n}",
          "options": [
            "A. checkNum()函数定义错误。",
            "B. 将isEven作为checkNum()参数将导致错误。",
            "C. 执行后将输出1。",
            "D. 运行时触发异常。"
          ],
          "answer": 2,
          "explanation": "isEven返回bool且只接收一个int参数，完全符合checkNum第一个参数要求的函数指针类型，定义和调用都没错。调用checkNum(isEven, 10)内部执行isEven(10)，10是偶数返回true，输出1，所以选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_09",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码正确的是（ ）。\n#include <iostream>\nusing namespace std;\nbool isOdd(int N) {\nreturn N % 2 == 1;\n}\nint Square(int N) {\nreturn N * N;\n}\nbool checkNum(bool (*Fx)(int), int x) {\nreturn Fx(x);\n}\nint main() {\ncout << checkNum(isOdd, 10) << endl;   // 输出行A\ncout << checkNum(Square, 10) << endl;  // 输出行B\nreturn 0;\n}",
          "options": [
            "A. checkNum()函数定义错误。",
            "B. 输出行A的语句将导致编译错误。",
            "C. 输出行B的语句将导致编译错误。",
            "D. 该代码没有编译错误。"
          ],
          "answer": 2,
          "explanation": "checkNum第一个参数要求返回bool、参数为int的函数。isOdd符合要求，所以输出行A合法；而Square的返回值是int，不符合bool(*)(int)类型，传给它会在编译时出错，所以选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_16",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "TCP/IP的传输层的两个不同的协议分别是UDP和TCP。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "TCP/IP协议族的传输层主要有两个协议：面向连接的TCP和无连接的UDP，说法正确，所以选正确。TCP是面向连接、可靠传输的协议，UDP是无连接、不可靠的协议，它们共同构成传输层。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_17",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在特殊情况下流程图中可以出现三角框和圆形框。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "流程图的符号是固定的：起止框用圆角矩形（或椭圆），判断框用菱形，处理框用矩形，输入输出框用平行四边形，流程图中没有三角框，说法错误。因此流程图中可以出现三角框的说法不成立，选错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_24",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "质数的判定和筛法的目的并不相同，质数判定旨在判断特定的正整数是否为质数，而质数筛法意在筛选出范围内的所有质数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "质数判定针对的是单个具体的数，判断它是不是质数；质数筛法（如埃氏筛）一次性筛出某个范围内的全部质数。两者目的不同，说法正确。两者目标不同，判定针对单个数，筛法针对区间，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_25",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后将输出0 5 1 6 2 3 4。\n#include <iostream>\n#include <algorithm>\nusing namespace std;\nbool compareModulo5(int a, int b) {\nreturn a % 5 < b % 5;\n}\nint main() {\nint lst[7];\nfor (int i = 0; i < 7; i++)\nlst[i] = i;\n// 对序列所有元素按compareModulo5结果排序\nsort(lst, lst + 7, compareModulo5);\nfor (int i = 0; i < 7; i++)\ncout << lst[i] << \" \";\ncout << endl;\nreturn 0;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "compareModulo5按“除5的余数”升序排序。0到6除以5的余数分别是0、1、2、3、4、0、1，按余数排序，余数0的有0和5，余数1的有1和6，再是2、3、4，输出0 5 1 6 2 3 4，说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_13",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "通讯卫星在通信网络系统中主要起到（）的作用。",
          "options": [
            "A. 信息过滤",
            "B. 信号中继",
            "C. 避免攻击",
            "D. 数据加密"
          ],
          "answer": 1,
          "explanation": "通信卫星转发无线电信号，把信号从一个地面站传给另一个地面站，起到信号中继的作用，实现远距离通信。它不是用来过滤信息、防攻击或加密的，所以选B。卫星将地面站信号转发到另一地面站，实现远距离通信，选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_14",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨想编写一个判断任意输入的整数N是否为素数的程序，下面哪个方法不合适？（ ）",
          "options": [
            "A. 埃氏筛法",
            "B. 线性筛法",
            "C. 二分答案",
            "D. 枚举法"
          ],
          "answer": 2,
          "explanation": "埃氏筛法和线性筛法都能筛选质数，枚举法逐个检查因数也可以判断素数；而二分答案只能对具有单调性的答案进行查找，无法判断一个数是不是素数，所以不合适的方法选C。而二分答案只适合有单调性的答案查找，无法判断单个数的素性，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_22",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码能实现十进制正整数N转换为八进制并输出。（ ）\nchar s[10];\nint main()\n{\nint N;\ncin >> N;\nstring rst = \"\";\nwhile (N != 0)\n{\ns[0]=N % 8 + '0';\nrst += string(s);\nN /= 8;\n}\ncout << rst << endl;\nreturn 0;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "把十进制转八进制，每次取N%8得到的是最低位，应该从低位到高位依次取，最后把结果倒序输出。这段代码把每次得到的位直接拼到末尾，顺序是反的；而且string(s)读取s[]中未被初始化的内容，结果不确定。因此不能正确转换八进制，说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_24",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨想写一个程序来算出正整数N有多少个因数，经过思考他写出了一个重复没有超过N/2次的循环就能够算出来了。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "除N本身外，N的因数d都满足d≤N/2，所以循环到N/2统计所有能整除N的数，再加上N本身，就能得到全部因数个数，循环次数确实不超过N/2，说法正确。因为N的因子除自身外都不超过N/2，循环足够统计全部因数，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_09",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码片段用于判断一个正整数是否为素数。请对以下代码进行修改，使其能正确实现相应功能。（ ）\nbool isPrime(int num) {\nif (num < 2) return false;\nfor (int i = 2; i * i < num; ++i)\nif (num % i == 0) return false;\nreturn true;\n}",
          "options": [
            "A. num < 2 应该改为 num <= 2",
            "B. 循环条件 i * i < num 应该改为 i * i <= num",
            "C. 循环条件应该是 i <= num",
            "D. 循环体中应该是 if (num % i != 0)"
          ],
          "answer": 1,
          "explanation": "判断素数只需检查2到√num的因子。当num是完全平方数（如4、9）时，i*i<num会漏掉i=√num这个因子，把4、9误判为素数。改成 i*i<=num 才能覆盖这个因子，故选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_25",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在下面C++代码中，由于删除了变量ptr，因此ptr所对应的数据也随之删除，故执行下述代码时，将报错。\nint* ptr = new int(10);\ncout << *ptr << endl;\ndelete ptr;\ncout << ptr << endl;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "delete ptr释放的是ptr指向的那块堆内存，但指针变量ptr本身依然存在，它的值（地址）仍然可以输出。只是ptr此时成为悬垂指针，再次通过它访问内存是危险的，但单纯输出ptr并不会报错，所以“将报错”的说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_27",
          "kp": "kp5_01",
          "type": "coding",
          "difficulty": 1,
          "question": "挑战怪物\n问题描述：怪物的血量为H，只有当血量恰好为0时才能击败。小杨有两种攻击方式：物理攻击，第i次使用物理攻击会造成2^(i-1)点伤害；魔法攻击，选择一个不超过当前血量的质数p造成p点伤害，魔法攻击至多使用一次。求能否击败怪物，若能输出最少攻击次数，否则输出-1。\n输入格式：第一行一个正整数t代表测试组数。接下来t组，每组一个正整数H。\n输出格式：每组输出最少攻击次数或-1。",
          "options": [],
          "answer": null,
          "explanation": "思路：模拟攻击过程。若当前血量为质数，就用魔法一次把它清空（次数+1）；否则使用下一次物理攻击（伤害按1、2、4、8递增）减血。模拟中血量变为0则成功，小于0则无法击败输出-1。先预处理质数表辅助判断。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nvector<int> prime;\nbool is_prime[100010];\nvoid Eratosthenes(int n) {\n  is_prime[0] = is_prime[1] = false;\n  for (int i = 2; i <= n; ++i) is_prime[i] = true;\n  for (int i = 2; i <= n; ++i) {\n    if (is_prime[i]) {\n      prime.push_back(i);\n      if ((long long)i * i > n) continue;\n      for (int j = i * i; j <= n; j += i)\n        is_prime[j] = false;\n    }\n  }\n}\nint main() {\n    Eratosthenes(100000);\n    int t;\n    cin>>t;\n    while(t--){\n        int tmp=1;\n        int x;\n        cin>>x;\n        int ans=0;\n        while(1){\n            if(is_prime[x]){\n                ans++;\n                break;\n            }\n            x-=tmp;\n            ans++;\n            if(x<=0){\n                if(x<0) ans=-1;\n                break;\n            }\n            tmp*=2;\n        }\n        cout<<ans<<\"\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n6\n188\n9999\n",
              "expectedOutput": "2\n4\n-1\n"
            }
          ]
        },
        {
          "id": "l5_202503_27",
          "kp": "kp5_01",
          "type": "coding",
          "difficulty": 1,
          "question": "原根判断\n问题描述：对质数p而言，p的原根g是满足以下条件的正整数：1≤g≤p-1；g^(p-1)≡1 (mod p)；且对任意1≤d<p-1均有g^d≢1 (mod p)。小A有一个整数a，请判断a是不是p的原根。\n输入格式：第一行一个正整数T，表示测试组数。每组一行两个正整数a,p。\n输出格式：每组输出一行，是原根输出Yes，否则输出No。",
          "options": [],
          "answer": null,
          "explanation": "思路：判断a是否为质数p的原根，等价于检验：a^(p-1)≡1 (mod p)，并且对p-1的每个质因数q，都有a^((p-1)/q)≢1 (mod p)。用快速幂（分治）求模幂，枚举p-1的质因数并验证。参考代码用fpw快速幂和check逐一检查。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nint a, p;\nint ans;\nint fpw(int b, int e) {\n    if (e == 0) return 1;\n    int r = fpw(b, e >> 1);\n    r = 1ll * r * r % p;\n    if (e & 1) r = 1ll * r * b % p;\n    return r;\n}\nvoid check(int e) {\n    if (fpw(a, e) == 1) ans = 0;\n}\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    while (T--) {\n        scanf(\"%d%d\", &a, &p);\n        ans = 1;\n        int phi = p - 1, r = phi;\n        for (int i = 2; i * i <= phi; i++)\n            if (phi % i == 0) {\n                check(phi / i);\n                while (r % i == 0) r /= i;\n            }\n        if (r > 1) check(phi / r);\n        printf(ans ? \"Yes\\n\" : \"No\\n\");\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3 998244353\n5 998244353\n7 998244353\n",
              "expectedOutput": "Yes\nYes\nNo\n"
            }
          ]
        },
        {
          "id": "l5_202506_05",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列C++代码判断一个正整数是否是质数，说法正确的是（   ）。",
          "options": [
            "A. 代码存在错误，比如5是质数，但因为5 % 5 余数是0返回了false",
            "B. finish_number 的值应该是n / 2，当前写法将导致错误",
            "C. 当前while循环正确的前提是：所有大于3的质数都符合6k±1形式",
            "D. while循环修改如下，其执行效果和执行时间相同"
          ],
          "answer": 2,
          "explanation": "大于 3 的质数都可写成 6k±1 的形式。代码用 i 从 7 开始按 6k±1 数列（7,11,13,17…）试除，正好覆盖全部可能的质因子，因此正确，C 准确描述了这一前提。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_07",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码用于判断一个整数是否为质数。若要找出 1 到 n 之间的所有质数，对 1 到 n 中的每个整数都调用该函数，下列说法中错误的是（   ）。",
          "options": [
            "A. 埃氏筛算法相对于上面的代码效率更高",
            "B. 线性筛算法相对于上面的代码效率更高",
            "C. 上面的代码有很多重复计算，因为不是判断单个数是否为质数，故而导致筛选出连续数中质数的效率不高",
            "D. 相对而言，埃氏筛算法比上面代码以及线性筛算法效率都高"
          ],
          "answer": 3,
          "explanation": "埃氏筛复杂度约 O(n log log n)，线性筛 O(n)，都远优于对每个数单独试除。选项 D 说埃氏筛比线性筛效率还高是错误的，线性筛渐进复杂度更优，故选 D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_04",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "函数isPerfectNumber判断一个正整数是否为完全数（该数是否等于它的真因子之和），则横线上应填写（   ）。一个正整数 n 的真因子包括所有小于 n 的正因子，如28的真因子为1, 2, 4, 7, 14。",
          "options": [
            "A. i <= n",
            "B. i*i <= n",
            "C. i <= n/2",
            "D. i < n"
          ],
          "answer": 1,
          "explanation": "真因子成对出现，枚举到 sqrt(n) 即可，同时把 i 和 n/i 都加入和，循环条件是 i*i <= n，选 B。这样最多枚举到根号 n，避免重复计算较大的因子对。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_16",
          "kp": "kp5_01",
          "type": "judge",
          "difficulty": 1,
          "question": "基于下面定义的函数，通过判断 isDivisibleBy9(n) == isDigitSumDivisibleBy9(n) 代码可验算如果一个数能被9整除，则它的各位数字之和能被9整除。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "9 的整除判定就是各位数字之和能被 9 整除，两者对任意 n 恒相等，用该代码可以验证这一性质，正确。因为 9 的整除性质就是各位数字之和能否被 9 整除。这是 9 的整除判定法则，可用于快速验证。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_04",
          "kp": "kp5_01",
          "type": "choice",
          "difficulty": 1,
          "question": "假设我们有两个数 a 和 b，它们对模 m 同余，即 a ≡ b (mod m)。以下哪个值不可能是 m？",
          "options": [
            "A. 3",
            "B. 4",
            "C. 6",
            "D. 9"
          ],
          "answer": 3,
          "explanation": "a≡b (mod m) 等价于 m 能整除 a−b。题中两数之差能被 3、4、6 整除但不能被 9 整除（如差为 12），因此 m 不可能是 9。模 m 同余要求 m 整除两数之差，故 9 不可能。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_26",
          "kp": "kp5_01",
          "type": "coding",
          "difficulty": 1,
          "question": "若分数可化为一个有限的、不循环的小数，则称该数为终止数。请你求出在 l 到 r 中终止数的数量。",
          "options": null,
          "answer": null,
          "explanation": "思路：最简分数能化为有限小数当且仅当分母只含质因子 2 和 5。对每个数不断除以 2 和 5，若最终变为 1 则为终止数，统计即可。例如 1、2、4、5、8、10 等只含因子 2 和 5 的数是终止数。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int l, r, ans = 0;\n    cin >> l >> r;\n    for(int i = l; i <= r; i++) {\n        int t = i;\n        while(t && t % 2 == 0)\n            t /= 2;\n        while(t && t % 5 == 0)\n            t /= 5;\n        if(t == 1)\n            ans++;\n    }\n    cout << ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 11",
              "expectedOutput": "5"
            }
          ]
        }
      ]
    },
    "kp5_02": {
      "title": "高精度运算",
      "questions": [
        {
          "id": "l5_202312_11",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码使用数组模拟整数加法，可以处理超出大整数范围的加法运算。横线处应填入代码是（ ）。\nvector<int> operator + (vector<int> a, vector<int> b)\n{\nvector<int> c;\nint t = 0;\nfor(int i = 0; i < a.size() || i < b.size(); i ++)\n{\nif(i < a.size()) t = t + a[i];\nif(i < b.size()) t = t + b[i];\n}\nif(t) c.push_back(t);\nreturn c;\n}",
          "options": [
            "A. c.push_back(t % 10), t = t % 10;",
            "B. c.push_back(t / 10), t = t % 10;",
            "C. c.push_back(t / 10), t = t / 10;",
            "D. c.push_back(t % 10), t = t / 10;"
          ],
          "answer": 3,
          "explanation": "高精度加法中，t保存当前位的和加上进位。先把个位t%10存入结果c，再把进位t/10保留给下一位继续用，所以横线处填c.push_back(t % 10), t = t / 10;，选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_07",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码片段用于将两个高精度整数进行相加。请在横线处填入（ ），使其能正确实现相应功能。\nstring add(string num1, string num2) {\nstring result; int carry = 0;\nint i = num1.size()-1, j = num2.size()-1;\nwhile (i>=0 || j>=0 || carry) {\nint x = (i>=0)? num1[i--]-'0':0;\nint y = (j>=0)? num2[j--]-'0':0;\nint sum = x + y + carry;\ncarry = sum / 10;\n____________\n}\nreturn result;\n}",
          "options": [
            "A. result = to_string(sum % 10) + result;",
            "B. result = to_string(carry % 10) + result;",
            "C. result = to_string(sum / 10) + result;",
            "D. result = to_string(sum % 10 + carry) + result;"
          ],
          "answer": 0,
          "explanation": "高精度加法中，当前位应写入 sum%10（个位数字），进位交给 sum/10 由下一次循环处理。result = to_string(sum%10) + result 把当前位数字接到结果串最前面，符合从低位算起最后逆序的效果。故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_12",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "要实现一个高精度减法函数，则下面代码中加划线应该填写的代码为（  ）。\nif (a[i] < b[i]) {  // 借位\n____________  // 在此处填入代码\n}",
          "options": [
            "A. a[i + 1]--;",
            "B. a[i]--;",
            "C. b[i + 1]--;",
            "D. b[i]--;"
          ],
          "answer": 0,
          "explanation": "高精度减法中数字按低位在前存储，当a[i]小于b[i]时说明当前位不够减，需要向更高位借1，即把高一位的数字减1：a[i+1]--，同时当前位加上10再相减。借位操作只修改被减数的高位，故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_14",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于高精度运算的说法错误的是( )。",
          "options": [
            "A. 高精度计算主要是用来处理大整数或需要保留多位小数的运算",
            "B. 大整数除以小整数的处理步骤可以是，将被除数和除数对齐，从左到右逐位尝试将除数乘以某个数，通过减法得到新的被除数，并累加商",
            "C. 高精度乘法的运算时间只与参与运算的两个整数中长度较长者的位数有关",
            "D. 高精度加法运算的关键在于逐位相加并处理进位"
          ],
          "answer": 2,
          "explanation": "高精度乘法是逐位相乘再累加进位，两个大数分别有a位和b位时，需要做a×b次基本乘法运算，时间复杂度约为O(a×b)，与两个数的位数都有关系。选项C说只与长度较长者的位数有关是错误的，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨编写了一个如下的高精度减法函数，下面说法，正确的是（  ）。\nvector<int> highPrecisionSubtract(vector<int> a, vector<int> b) {\nvector<int> result; int borrow = 0;\nfor (int i = 0; i < a.size(); ++i) {\nint digitA = a[i];\nint digitB = i < b.size() ? b[i] : 0;\nint diff = digitA - digitB - borrow;\nif (diff < 0) { diff += 10; borrow = 1; } else borrow = 0;\nresult.push_back(diff);\n}\nwhile (result.size() > 1 && result.back() == 0) result.pop_back();\nreturn result;\n}",
          "options": [
            "A. 如果数组a表示的整数小于b表示的整数，代码会正确返回二者的差为负数",
            "B. 代码假设输入数字是以倒序存储的，例如500存储为{0, 0, 5}",
            "C. 代码的时间复杂度为O(n^2)",
            "D. 当减法结果为0时，结果数组仍然会存储很多个元素"
          ],
          "answer": 1,
          "explanation": "代码从下标0开始逐位相减并处理借位，说明数字按个位在前的倒序存储，B正确。A错：a<b时代码不能正确返回负数；C错：复杂度是O(n)；D错：while循环会去掉多余的0。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨编写了一个如下的高精度乘法函数，则横线上应填写的代码为（  ）。\nint carry = 0;\nfor (int k = 0; k < c.size(); ++k) {\n____________  // 在此处填入代码\nc[k] = temp % 10;\ncarry = temp / 10;\n}",
          "options": [
            "A. int temp = c[k];",
            "B. int temp = c[k] + carry;",
            "C. int temp = c[k] - carry;",
            "D. int temp = c[k] * carry;"
          ],
          "answer": 1,
          "explanation": "处理高精度乘法的进位时，当前位c[k]要先加上从低位传来的进位carry，即temp=c[k]+carry，然后写入当前位数字temp%10，并更新下一轮的进位carry=temp/10。所以横线处应填int temp=c[k]+carry，故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨编写了一个如下的高精度除法函数，则横线上应填写的代码为（   ）。",
          "options": [
            "A. r.d[0] = a.d[i]; r.len++",
            "B. r.d[i] = a.d[i]; r.len++",
            "C. r.d[i] = a.d[i]; r.len = 1",
            "D. r.d[0] = a.d[i]; r.len = 1"
          ],
          "answer": 0,
          "explanation": "前面已把余数整体右移一位，现在把被除数下一位 a.d[i] 放到 r.d[0]（最低位），同时长度加一，即 r.d[0]=a.d[i]; r.len++，故选 A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个由非负整数组成的数组digits，表示一个非负整数的各位数字，最高位在数组首位。下面代码对该整数执行 +1 操作并返回结果数组，则横线上应填写（   ）。",
          "options": [
            "A. digits[i] = 0;",
            "B. digits[i] = 9;",
            "C. digits[i] = 1;",
            "D. digits[i] = 10;"
          ],
          "answer": 0,
          "explanation": "当某位为 9 时需要进位，把该位置 0 并继续向前进位；若所有位都进位，则在最前面插入 1，故选 A。当所有位都是 9 时，循环结束后在数组头部插入 1。若 digits 全为 9，如 999+1=1000，需在最前面插入 1。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了对两个数组表示的正整数的高精度加法（数组低位在前），则横线上应填写（   ）。",
          "options": [
            "A. c.push_back(carry / 10); carry %= 10;",
            "B. c.push_back(carry % 10); carry /= 10;",
            "C. c.push_back(carry % 10);",
            "D. c.push_back(carry); carry /= 10;"
          ],
          "answer": 1,
          "explanation": "当前位存入 carry%10，进位给下一位用 carry/=10，故选 B。carry 超过 9 的部分通过除法传给下一位。最后若 carry 不为 0 还要再压入一个最高位。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现两个整数除法，其中被除数为一个“大整数”用字符串表示，除数是一个小整数用 int 表示，则横线处应该填写（   ）。",
          "options": [
            "A. rem /= b;",
            "B. rem %= b;",
            "C. rem = b;",
            "D. rem = q;"
          ],
          "answer": 1,
          "explanation": "长除法每步取 rem = rem*10 + 当前位，商为 rem/b，余数更新为 rem%b，选 B。余数需要保留给后续位继续使用。这样下一轮才能带上正确的余数继续除。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_15",
          "kp": "kp5_02",
          "type": "choice",
          "difficulty": 1,
          "question": "高精度减法中，假设两个高精度数按低位在前存储，且已经保证被减数不小于减数。下面处理借位逻辑代码中横线处应填入（   ）。",
          "options": [
            "A. a[i] += 10",
            "B. a[i] -= 10",
            "C. b[i] += 10",
            "D. a[i] = a[i+1] + 10"
          ],
          "answer": 0,
          "explanation": "被减数该位不足时向高位借 1（a[i+1]--），当前位加 10，即 a[i] += 10，选 A。向高位借 1 后低位加 10，再相减得到正确结果。低位在前存储时向高一位借位，再在当前位加 10。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_03": {
      "title": "链表",
      "questions": [
        {
          "id": "l5_202309_15",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面代码的说法正确的是（ ）。\n#include <iostream>\nclass Node {\npublic:\nint Value;\nNode * Next;\nNode(int Val, Node * Nxt = nullptr) {\nValue = Val;\nNext = Nxt;\n}\n};\nint main() {\nNode * firstNode = new Node(10);\nfirstNode->Next = new Node(100);\nfirstNode->Next->Next = new Node(111, firstNode);\nreturn 0;\n}",
          "options": [
            "A. 上述代码构成单向链表。",
            "B. 上述代码构成双向链表。",
            "C. 上述代码构成循环链表。",
            "D. 上述代码构成指针链表。"
          ],
          "answer": 2,
          "explanation": "代码创建了三个节点：第一个节点的Next指向第二个，第二个的Next指向第三个，第三个的Next又指回第一个节点，首尾相接成一个环，所以是循环链表，选C。三个节点的next依次相连并回到起点，形成一个闭合的环，选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_20",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，通过恰当的实现，可以将链表首尾相接，形成循环链表。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "在C++中，链表是一种用指针把节点串起来的数据结构。只要把链表最后一个节点的next指针指向头结点，整个链表就首尾相接形成一个环，变成循环链表。这种实现是完全可以做到的，因此这道题的说法是正确的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_05",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码用于将字符串保存到带头节点的双向链表中，并对重复的串计数，然后将最新访问的串的节点放在链头便于查找。横线处应填入代码是（ ）。\ntypedef struct Node{\nstring str;\nint ref;\nstruct Node *next, *prev;\n}Node;\nNode * Insert(Node *pHead, string s)\n{\nNode *p = pHead->next;\nNode *q;\nwhile(p){\nif(p->str == s){\np->ref++;\np->next->prev = p->prev;\np->prev->next = p->next;\nbreak;\n}\np=p->next;\n}\nif(!p) {\np = new Node;\np->str = s;\np->ref=0;\np->next = p->prev = NULL;\n}\npHead->next = p, p->prev = pHead;\n______________________________;\nreturn pHead;\n}",
          "options": [
            "A. if(pHead) {p->next = pHead->next, pHead->next->prev = p;}",
            "B. if(pHead->next) {p->next = pHead->next, pHead->next->prev = p;}",
            "C. p->next = pHead->next, pHead->next->prev = p;",
            "D. 触发异常，不能对空指针进行操作。"
          ],
          "answer": 1,
          "explanation": "把p插到链头时，要先把p->next指向原来的第一个节点，再让原来第一个节点的prev指向p。但原链表可能为空，此时pHead->next是空指针，直接解引用会崩溃，所以必须先判断pHead->next是否为空，选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_12",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法正确的是（ ）。\nclass Node\n{\npublic:\nint Value;\nNode* Prev;\nNode* Next;\nNode(int Val, Node* Prv = NULL, Node* Nxt = NULL);\n};\nNode::Node(int Val, Node* Prv, Node* Nxt)\n{\nthis->Value = Val;\nthis->Prev = Prv;\nthis->Next = Nxt;\n}\nint main()\n{\nNode firstNode = Node(10);\nfirstNode.Next = new Node(100, &firstNode);\nfirstNode.Next->Next = new Node(111, firstNode.Next);\n}",
          "options": [
            "A. 上述代码构成单向链表",
            "B. 上述代码构成双向链表",
            "C. 上述代码构成循环链表",
            "D. 上述代码构成指针链表"
          ],
          "answer": 1,
          "explanation": "每个节点都同时有Prev（指向前驱）和Next（指向后继）两个指针，第一个节点指向第二个，第二个又指回第一个，第三个也同时保存前后指针，构成双向链表，选B。两个节点双向相连，构成双向链表，选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_25",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "同样的整数序列分别保存在单链表和双向链中，这两种链表上的简单冒泡排序的复杂度相同。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "简单冒泡排序需要两层循环，比较次数都约n(n-1)/2。单链表和双向链表冒泡的差别只在于指针移动方向，比较和交换的次数相同，时间复杂度都是O(n²)，所以复杂度相同，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_04",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码片段用于在双向链表中删除一个节点。请在横线处填入（ ），使其能正确实现相应功能。\nvoid deleteNode(DoublyListNode*& head, int value) {\nDoublyListNode* current = head;\nwhile (current && current->val != value) current = current->next;\nif (current) {\nif (current->prev) {\n____________  // 在此处填入代码\n} else {\nhead = current->next;\n}\nif (current->next) current->next->prev = current->prev;\ndelete current;\n}\n}",
          "options": [
            "A. if (current->next != nullptr) current->next->prev = current->prev;",
            "B. current->prev->next = current->next;",
            "C. delete current->next;",
            "D. current->prev = current->next;"
          ],
          "answer": 1,
          "explanation": "删除双向链表中的节点current，必须让它的前驱的next指向其后继，即 current->prev->next = current->next。代码后面已处理了后继的prev指针，所以横线处只需连前驱到后继，故选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_15",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "假设给定链表为：head->1->2->3->4->5->nullptr，若调用 searchValue(head, 5)，函数返回值为（ ）。\nint searchValue(ListNode* head, int target) {\nwhile (head) {\nif (head->val == target) return 1;\nhead = head->next;\n}\nreturn 0;\n}",
          "options": [
            "A. 返回 1",
            "B. 返回 0",
            "C. 死循环，无法返回",
            "D. 返回 -1"
          ],
          "answer": 0,
          "explanation": "searchValue从头开始遍历链表，遇到值等于target的节点就返回1，遍历完仍找不到则返回0。链表中存在值为5的节点，所以调用searchValue(head,5)返回1，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_24",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "单链表和双链表都可以在常数时间内实现在链表头部插入或删除节点的操作。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "在链表头部插入或删除节点，只需要修改头指针以及首节点的少量指针指向，操作步骤固定，与链表里已经存储的元素个数n没有关系，所以可以在常数时间O(1)内完成。单链表和双链表都支持这种头部的快速增删，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨想在头指针为head的双链表中查找他喜欢的某首歌曲，采用如下查询函数，该操作的时间复杂度为（  ）。\ndl_node* search(dl_node* head, string my_song) {\ndl_node* temp = head;\nwhile (temp) {\nif (temp->song == my_song) return temp;\ntemp = temp->next;\n}\nreturn nullptr;\n}",
          "options": [
            "A. O(1)",
            "B. O(n)",
            "C. O(log n)",
            "D. O(n^2)"
          ],
          "answer": 1,
          "explanation": "查找函数从head指针开始逐个节点比较歌曲名，最坏情况下目标歌曲在链表末尾甚至不存在，需要遍历整个链表。链表不支持按下标随机访问，只能顺序遍历，所以查找操作的时间复杂度是O(n)，故选B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_04",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨想在如上题所述的双向链表中加入一首新歌曲。为了能快速找到该歌曲，他将其作为链表的第一首歌曲，则下面横线上应填入的代码为（  ）。\nvoid insert(dl_node *head, string my_song) {\np = new dl_node;\np->song = my_song;\np->prev = nullptr;\np->next = head;\nif (head != nullptr) { ____________ }  // 在此处填入代码\nhead = p;\n}",
          "options": [
            "A. head->next->prev = p;",
            "B. head->next = p;",
            "C. head->prev = p;",
            "D. 触发异常，不能对空指针进行操作。"
          ],
          "answer": 2,
          "explanation": "把p插入到head之前时，p->prev=nullptr、p->next=head，还需要让原头节点的前驱指向p，即 head->prev = p，这样p就成了新的头节点。故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "如果将双向链表的最后一个结点的下一项指针指向第一个结点，第一个结点的前一项指针指向最后一个结点，则该双向链表构成循环链表。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "把双向链表的最后一个结点的next指向第一个结点，同时把第一个结点的prev指向最后一个结点，这样链表的头和尾就连接起来了，形成一个首尾相接的环，结点之间可以双向循环访问，该链表就构成了循环链表，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_17",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "数组和链表都是线性表，链表的优点是插入删除不需要移动元素，并且能随机查找。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链表和数组都是线性表。链表插入删除时确实不需要移动其他元素，但链表只能从头顺序访问，不支持随机查找（随机访问是数组的优点）。题干说链表“能随机查找”是错误的，所以整个说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_18",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "链表的存储空间物理上可以连续，也可以不连续。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "链表中的每个结点通过指针指向下一个结点，各结点在内存中的物理地址可以连续地存放，也可以分散在不连续的位置，只要指针正确相连即可。所以链表的存储空间在物理上连续与否都可以，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于链表和数组的描述，错误的是（ ）。",
          "options": [
            "A. 数组大小固定，链表大小可动态调整",
            "B. 数组支持随机访问，链表只能顺序访问",
            "C. 存储相同数目的整数，数组比链表所需的内存多",
            "D. 数组插入和删除元素效率低，链表插入和删除元素效率高"
          ],
          "answer": 2,
          "explanation": "链表每个结点除了存放数据还要存放指向下一个结点的指针，所以存储相同数目的整数时，链表比数组占用更多的内存。选项C说“数组比链表所需的内存多”正好说反了，是错误的；A、B、D都是链表与数组的正确区别，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "通过（  ）操作，能完成在双向循环链表结点p之后插入结点s的功能（其中next域为结点的直接后继，prev域为结点的直接前驱）。",
          "options": [
            "A. p->next->prev = s; s->prev = p; p->next = s; s->next = p->next;",
            "B. p->next->prev = s; p->next = s; s->prev = p; s->next = p->next;",
            "C. s->prev = p; s->next = p->next; p->next = s; p->next->prev = s;",
            "D. s->next = p->next; p->next->prev = s; s->prev = p; p->next = s;"
          ],
          "answer": 3,
          "explanation": "正确的插入顺序：先让s指向p的后继(s->next=p->next)，再让原后继的前驱指向s(p->next->prev=s)，然后s的前驱指向p(s->prev=p)，最后p的后继指向s(p->next=s)。四步都正确，故选D。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在操作系统中，需要对一组进程进行循环。每个进程被赋予一个时间片，当时间片用完时，CPU将切换到下一个进程。这种循环操作可以通过环形链表来实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "操作系统用时间片轮转调度进程：每个进程运行一个时间片后，CPU切换到下一个进程，最后一个进程用完后回到第一个进程。这种首尾相接、循环轮转的结构正好可以用环形链表来表示，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于链表和数组的描述，错误的是（ ）。",
          "options": [
            "A. 当数据数量不确定时，需要申请一个较大的数组，可能浪费空间；此时用链表比较合适，大小可动态调整",
            "B. 在链表中访问节点的效率较低，时间复杂度为O(n)",
            "C. 链表插入和删除元素效率较低，时间复杂度为O(n)",
            "D. 链表的节点在内存中是分散存储的，通过指针连在一起"
          ],
          "answer": 2,
          "explanation": "链表的插入和删除只需要修改相关节点的指针，在已知插入或删除位置的情况下是O(1)，并不低效。选项C说“链表插入和删除元素效率较低，时间复杂度为O(n)”是错误的，因为O(n)的代价主要是寻找位置；A、B、D都是对链表的正确描述，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在循环单链表中，节点的next指针指向下一个节点，最后一个节点的next指针指向（  ）。",
          "options": [
            "A. 当前节点",
            "B. nullptr",
            "C. 第一个节点",
            "D. 上一个节点"
          ],
          "answer": 2,
          "explanation": "在循环单链表中，最后一个节点没有指向nullptr，而是通过next指针指回头节点（第一个节点），这样从头节点出发沿next指针遍历，最终能回到起点，形成首尾相接的环。所以最后一个节点的next指向第一个节点，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "为了方便链表的增删操作，一些算法生成一个虚拟头节点。下面代码实现删除链表中值为val的节点，横线上应填的最佳代码是( )。\nLinkedNode* dummyHead = new LinkedNode(0);\n____________  // 在此处填入代码\nwhile (cur->next != nullptr) { ... }",
          "options": [
            "A. dummyHead->next = head; cur = dummyHead;",
            "B. dummyHead->next = head->next; cur = dummyHead;",
            "C. dummyHead->next = head; cur = dummyHead->next;",
            "D. dummyHead->next = head->next; cur = dummyHead->next;"
          ],
          "answer": 0,
          "explanation": "创建虚拟头节点后，让它指向原链表头（dummyHead->next=head），并让cur从虚拟头开始遍历（cur=dummyHead）。这样删除头节点也能和其他节点统一处理，故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "单链表只支持在表头进行插入和删除操作。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "单链表在已知某个节点的前驱节点时，可以在该位置之后插入新节点，也可以删除该位置之后的节点，因此并不“只支持在表头进行插入和删除”。只是要在中间位置操作时需要先从头部遍历找到前驱而已，说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "链表不具备的特点是( )。",
          "options": [
            "A. 可随机访问任何一个元素",
            "B. 插入、删除操作不需要移动元素",
            "C. 无需事先估计存储空间大小",
            "D. 所需存储空间与存储元素个数成正比"
          ],
          "answer": 0,
          "explanation": "链表由节点通过指针串联而成，访问某个元素必须从头节点开始沿着指针逐个遍历，没有下标的随机访问能力。选项A“可随机访问任何一个元素”正是链表不具备的特点；B、C、D都是链表具备的特点，故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "双向链表中每个结点有两个指针域prev和next，分别指向前驱及后继。设p指向链表中的一个结点，它的前驱结点和后继结点均非空。要删除结点p，则下述语句中错误的是（  ）。\nA: p->next->prev = p->next; p->prev->next = p->prev; delete p;\nB: p->prev->next = p->next; p->next->prev = p->prev; delete p;\nC: p->next->prev = p->prev; p->next->prev->next = p->next; delete p;\nD: p->prev->next = p->next; p->prev->next->prev = p->prev; delete p;",
          "options": [
            "A. p->next->prev = p->next; p->prev->next = p->prev; delete p;",
            "B. p->prev->next = p->next; p->next->prev = p->prev; delete p;",
            "C. p->next->prev = p->prev; p->next->prev->next = p->next; delete p;",
            "D. p->prev->next = p->next; p->prev->next->prev = p->prev; delete p;"
          ],
          "answer": 0,
          "explanation": "删除p要让p的前驱的next指向p的后继、p的后继的prev指向p的前驱。A中p->next->prev=p->next把后继的prev错误地指向后继自己，没有正确绕开p，所以A是错误的。故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "假设双向循环链表包含头尾哨兵结点（不存储实际内容），分别为head和tail。下面代码实现了一个空的双向循环链表，横线上应填的最佳代码是( )。\nvoid InitLinkedList(LinkedList* list) {\nlist->head = new ListNode<T>;\nlist->tail = new ListNode<T>;\n____________  // 在此处填入代码\n};",
          "options": [
            "A. list->head->prev = list->head; list->tail->prev = list->head;",
            "B. list->head->next = list->tail; list->tail->prev = list->head;",
            "C. list->head->next = list->tail; list->tail->next = list->head;",
            "D. list->head->next = list->tail; list->tail->next = nullptr;"
          ],
          "answer": 1,
          "explanation": "空的双向链表只有头尾两个哨兵节点，让head的next指向tail、tail的prev指向head，链表骨架就完整了，故选B。C、D没有让tail的prev指向head，双向关系不完整。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "单链表中删除某个结点p（非尾结点），但不知道头结点，可行的操作是将p的值设为p->next的值，然后删除p->next。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "在不知道头结点的情况下删除非尾结点p，可以先把p的后继节点的值复制给p，然后删除p的后继节点，这样从外部看相当于把p“删除了”。这种方法不需要访问头结点，是可行的操作，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_17",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "链表存储线性表时要求内存中可用存储单元地址是连续的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链表通过指针把各个节点连接起来，各节点在内存中的物理地址不需要连续，可以分散在不同的存储单元中，这正是链表与数组的重要区别。题干要求存储单元地址连续，与链表的实际特性不符，说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "与数组相比，链表在（   ）操作上通常具有更高的效率。",
          "options": [
            "A. 随机访问元素",
            "B. 查找指定元素",
            "C. 在已知位置插入或删除节点",
            "D. 遍历所有元素"
          ],
          "answer": 2,
          "explanation": "数组支持 O(1) 随机访问，但插入或删除元素要移动大量数据，耗时 O(n)；链表只需修改指针，在已知位置插入或删除节点只要 O(1)，所以链表在“在已知位置插入或删除节点”上效率更高。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码实现双向链表。函数 is_empty() 判断链表是否为空，如链表为空返回 true，否则返回 false。横线处不能填写（   ）。",
          "options": [
            "A. return head == nullptr;",
            "B. return tail == nullptr;",
            "C. return head.data == 0;",
            "D. return size == 0;"
          ],
          "answer": 2,
          "explanation": "判空应检查头指针或尾指针是否为空，或 size 是否为 0。选项 C 访问 head.data，链表为空时 head 是 nullptr，解引用空指针会崩溃，而且 data 为 0 也不代表链表为空，所以 C 不能填写。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "基于上题代码正确的前提下，填入相应代码完善 append()，用于在双向链表尾部增加新节点，横线上应填写（   ）。",
          "options": [
            "A. tail->next = newNode;",
            "B. newNode->prev = tail; tail = newNode;",
            "C. tail = newNode; newNode->prev = tail; tail->next = newNode;",
            "D. tail->next = newNode; newNode->prev = tail; tail = newNode;"
          ],
          "answer": 3,
          "explanation": "尾插要三步：先让原尾结点的 next 指向新结点（tail->next=newNode），再让新结点的 prev 指向原尾结点（newNode->prev=tail），最后更新尾指针（tail=newNode），顺序不能乱，选 D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_04",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列C++代码用循环链表解决约瑟夫问题，即 n 个人围成一圈，从第一个人开始数，每次数到第 k 个的人出圈，输出最后留下的那个人的编号。横线上应填写（   ）。",
          "options": [
            "A. prev->next = p->next; delete p; p = prev->next;",
            "B. delete p; prev->next = p->next; p = prev->next;",
            "C. delete p; p = prev->next; prev->next = p->next;",
            "D. prev->next = p->next; p = prev->next; delete p;"
          ],
          "answer": 0,
          "explanation": "出圈要先断开连接（prev->next=p->next），再释放结点（delete p），最后让 p 移到下一结点（p=prev->next）。先 delete 再用 p 会访问已释放内存，故选 A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪种情况使用链表比数组更合适？",
          "options": [
            "A. 数据量固定且读多写少",
            "B. 需要频繁在中间或开头插入、删除元素",
            "C. 需要高效随机访问元素",
            "D. 存储空间必须连续"
          ],
          "answer": 1,
          "explanation": "链表插入删除只需改指针、不需要移动大量元素，因此在频繁在中间或开头插入、删除元素的场景比数组更合适，选 B。数组随机访问快，但中间插入删除要搬移元素，不如链表。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "函数removeElements删除单链表中所有结点值等于 val 的结点，并返回新的头结点，其中链表头结点为 head，则横线处填写（   ）。",
          "options": [
            "A. Node* del = cur; cur = del->next; delete del;",
            "B. Node* del = cur->next; cur->next = del; delete del;",
            "C. Node* del = cur->next; cur->next = del->next; delete del;",
            "D. Node* del = cur->next; delete del; cur->next = del->next;"
          ],
          "answer": 2,
          "explanation": "删除 cur 的下一个结点要先让 cur->next 指向 del->next，再 delete del。D 先删除后再访问 del->next 会使用已释放内存，故选 C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "函数hasCycle采用Floyd快慢指针法判断一个单链表中是否存在环，slow 每次走 1 步、fast 每次走 2 步，若存在环 fast 终会追上 slow，则横线上应填写（   ）。",
          "options": [
            "A. slow = slow->next; fast = fast->next->next;",
            "B. slow = fast->next; fast = slow->next->next;",
            "C. slow = slow->next; fast = slow->next->next;",
            "D. slow = fast->next; fast = fast->next->next;"
          ],
          "answer": 0,
          "explanation": "快慢指针应各自在链表上前进：slow 走 1 步、fast 走 2 步，即 slow=slow->next; fast=fast->next->next，选 A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_19",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "链表通过更改指针实现高效的结点插入与删除，但结点访问效率低、占用内存较多，且对缓存利用不友好。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链表结点分散存储、每个结点带指针，访问需要遍历、缓存命中率低，但插入删除只需改指针，说法正确。结点的分散存储使缓存命中率较低。因此链表适合插入删除频繁、访问少的场景。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对如下定义的循环单链表，横线处填写（   ）。",
          "options": [
            "A. while (p != nullptr) { cout << p->data << \" \"; p = p->next; }",
            "B. while (p->next != nullptr) { cout << p->data << \" \"; p = p->next; }",
            "C. do { cout << p->data << \" \"; p = p->next; } while (p != head);",
            "D. for (; p; p = p->next) { cout << p->data << \" \"; }"
          ],
          "answer": 2,
          "explanation": "循环链表没有空指针，用 while(p) 或 for(;p;) 会死循环。应先用 do 至少输出一次，再判断是否回到头结点 head，故选 C。循环链表尾结点的 next 指向头结点，不存在空指针。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "区块链技术是比特币的基础。在区块链中，每个区块指向前一个区块，构成链式列表，新区块只能接在链尾。下面代码实现插入区块添加函数，则横线处填写（   ）。",
          "options": [
            "A. Block* newBlock = new Block(tail->index + 1, data, tail); tail = newBlock->prev;",
            "B. Block* newBlock = new Block(tail->index + 1, data, tail); tail = newBlock;",
            "C. Block* newBlock = new Block(tail->index + 1, data, tail->prev); tail = newBlock;",
            "D. Block* newBlock = new Block(tail->index + 1, data, tail->prev); tail = newBlock->prev;"
          ],
          "answer": 1,
          "explanation": "新区块接在链尾，前驱是原 tail，索引加 1，创建后更新 tail 为新区块，即 tail = newBlock，选 B。新区块的前驱必须是当前链尾，索引逐块递增。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于单链表和双链表的描述中，正确的是（   ）。",
          "options": [
            "A. 双链表删除指定节点是 O(1)，单链表是 O(1)",
            "B. 双链表删除指定节点是 O(n)，单链表是 O(n)",
            "C. 双链表删除指定节点是 O(1)，单链表是 O(n)",
            "D. 双链表删除指定节点是 O(n)，单链表是 O(1)"
          ],
          "answer": 2,
          "explanation": "双链表知道前驱可直接改指针，O(1)；单链表必须先从头遍历找到前驱才能删除，O(n)，故选 C。单链表没有前驱指针，删除必须找到前驱。双链表删除已知结点是 O(1)，单链表需先找前驱是 O(n)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "数组和链表都是线性表。链表的优点是插入删除不需要移动元素，并且能随机查找。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "链表不能随机查找（访问需要遍历），只有顺序访问，说法后半句错误。链表只能顺序访问，不能按下标随机查找。链表只能从头到尾顺序访问，这是它相对数组的缺点。所以“能随机查找”不成立。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_18",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在单链表中，已知指针 p 指向要删除的结点（非尾结点），想在 O(1) 删除 p，可行做法是用 p->next 覆盖 p 的值与 next，然后删除 p->next。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "把 p->next 的值和 next 拷给 p，再删除原 p->next，等效删除了 p 指向的结点，是常见技巧，正确。这是单链表删除的非尾结点技巧，复杂度 O(1)。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "关于单链表、双链表和循环链表，下列说法正确的是（   ）。",
          "options": [
            "A. 在单链表中，若已知任意结点的指针，则可以在 O(1) 时间内删除该结点。",
            "B. 循环链表中一定不存在空指针。",
            "C. 在循环双链表中，尾结点的next指针一定为nullptr。",
            "D. 在带头结点的循环单链表中，判定链表是否为空只需判断头结点的next是否指向自身。"
          ],
          "answer": 3,
          "explanation": "带头结点的循环单链表空表时头结点 next 指向自身，判空只需检查 head->next==head，D 正确。A 中尾结点无法 O(1) 删除，B、C 说法也不对。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "双向循环链表中要在结点 p 之前插入新结点 s（均非空），以下指针操作正确的是（   ）。",
          "options": [
            "A. s -> next = p; p -> prev = s; p -> next = s; s -> prev = p;",
            "B. s -> prev = p; s -> next = p -> next; p -> next -> prev = s; p -> next = s;",
            "C. s -> next = p; s -> prev = p->prev; p -> prev -> next = s; p -> prev = s;",
            "D. s -> next = p; s -> prev = nullptr; p -> prev = s;"
          ],
          "answer": 2,
          "explanation": "在 p 前插入需让 s 的 next 指向 p、prev 指向 p 的前驱，再让前驱的 next 指向 s、p 的 prev 指向 s，即 C。四步中必须先改前驱和后继的指针，最后再改 p 的指针。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面函数用“哑结点”统一处理删除单向链表中的头结点与中间结点。横线处应填（   ）。",
          "options": [
            "A. cur = cur->next;",
            "B. cur->next = del->next;",
            "C. del->next = cur->next;",
            "D. cur->next = nullptr;"
          ],
          "answer": 1,
          "explanation": "删除 cur 的下一个结点 del，需跳过它：cur->next = del->next，再 delete del，故选 B。跳过 del 后再释放，保证链表不断开。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "有一个存储了 n 个整数的线性表，分别用数组和单链表两种方式实现。在已知下标（或结点指针）的前提下，数组的随机访问是 O(1)，而在链表中已知某结点的指针时，在该结点之后插入一个新结点的操作也是 O(1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "数组按下标 O(1) 访问；链表已知结点指针时修改指针即可插入，也是 O(1)，正确。两者在已知位置的访问和插入都是 O(1)。数组按索引访问、链表按指针插入，都很快。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_01",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "假设 head != nullptr，下面是实现单向循环链表在头节点后插入新节点的代码，横线处应填入（   ）。",
          "options": [
            "A. newNode->next = head; head->next = newNode;",
            "B. newNode->next = head->next; head->next = newNode;",
            "C. head->next = newNode; newNode->next = head->next;",
            "D. newNode->next = head->next; head = newNode;"
          ],
          "answer": 1,
          "explanation": "在头结点后插入：先让新结点指向原 head 的后继（newNode->next = head->next），再把 head->next 改为 newNode，选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_02",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码遍历并输出一个循环单链表，其中 head 指向链表的第一个节点，横线处应填入的是（   ）。",
          "options": [
            "A. while (p != nullptr) { cout << p->val << \" \"; p = p->next; }",
            "B. while (p->next != nullptr) { cout << p->val << \" \"; p = p->next; }",
            "C. do { cout << p->val << \" \"; p = p->next; } while (p != head);",
            "D. for (; p; p = p->next) { cout << p->val << \" \"; }"
          ],
          "answer": 2,
          "explanation": "循环链表无空指针，while(p) 会死循环；应用 do-while 先输出一次再判断是否回到 head，选 C。循环链表没有空指针，需用 do-while 结构。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_03",
          "kp": "kp5_03",
          "type": "choice",
          "difficulty": 1,
          "question": "双链表结点定义如下，若要删除双链表中的中间结点（非首尾节点）p，下面写法正确的是（   ）。",
          "options": [
            "A. p->prev->next = p->next; p->next->prev = p->prev; delete p;",
            "B. p->next->prev = p->next; p->prev->next = p->prev; delete p;",
            "C. p->prev = p->next; p->next = p->prev; delete p;",
            "D. p->next->next = p->prev; p->prev->prev = p->next; delete p;"
          ],
          "answer": 0,
          "explanation": "删除 p 要让它前驱的 next 指向后继、后继的 prev 指向前驱，再 delete p，即 A。中间结点前后都有结点，直接修改两端指针即可。双链表删除中间结点只需修改两侧指针，无需遍历。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_16",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "数组的存储空间在物理上通常是连续的，而链表的结点可以存储在不连续的内存空间中。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "数组元素连续存储，链表结点通过指针链接、可分散在内存各处，正确。这与数组连续存储、链表分散存储的特点一致。链表结点通过 next 指针串联，位置可不连续。故该说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_17",
          "kp": "kp5_03",
          "type": "judge",
          "difficulty": 1,
          "question": "带哨兵头尾节点的双向循环链表，在表头插入节点 p，以下四步操作无论什么顺序执行结果都正确。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "四步存在依赖关系，例如先执行 head->next=p 再执行 head->next->prev=p 会把 p 的前驱设错，顺序不能任意，说法错误。必须先建立新连接再断开旧连接，顺序颠倒会出错。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_04": {
      "title": "辗转相除法",
      "questions": [
        {
          "id": "l5_202312_06",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码说法正确的是（ ）。\nint rc;\nint foo(int x, int y)\n{\nint r;\nif(y == 0)\nr = x;\nelse{\nr = foo(y, x % y);\nrc++;\n}\nreturn r;\n}",
          "options": [
            "A. 如果x小于10，rc值也不会超过20",
            "B. foo可能无限递归",
            "C. foo可以求出x和y的最大公共质因子",
            "D. foo能够求出x和y的最小公倍数"
          ],
          "answer": 0,
          "explanation": "这是欧几里得算法（辗转相除法）求x和y的最大公约数，每次递归y变成x%y，规模快速变小，一定会结束，不会无限递归。x小于10时递归次数很少，rc不会超过20，A正确。C、D都错误，选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_05",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "辗转相除法也被称为（ ）。",
          "options": [
            "A. 高斯消元法",
            "B. 费马定理",
            "C. 欧几里德算法",
            "D. 牛顿迭代法"
          ],
          "answer": 2,
          "explanation": "辗转相除法就是欧几里得算法，用来求两个整数的最大公约数。高斯消元法用于解线性方程组，费马定理是数论中的著名定理，牛顿迭代法用于求方程的近似解，都与辗转相除无关，故选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_16",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "辗转相除法用于求两个整数的最大公约数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "辗转相除法就是欧几里得算法，它利用“两数的最大公约数等于较大数对较小数取余后与较小数的最大公约数”这一性质，反复取余直到余数为0，最终得到两个整数的最大公约数。这是求最大公约数最经典的算法，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_05",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面是根据欧几里得算法编写的函数，它计算的是与的（  ）。\nint gcd(int a, int b) {\nwhile (b != 0) { int temp = b; b = a % b; a = temp; }\nreturn a;\n}",
          "options": [
            "A. 最小公倍数",
            "B. 最大公共质因子",
            "C. 最大公约数",
            "D. 最小公共质因子"
          ],
          "answer": 2,
          "explanation": "该函数循环执行(a,b)=(b,a%b)，直到b变成0时返回a。根据辗转相除的原理，这一步一步得到的余数序列最后能收敛到两个数的最大公约数，所以该函数计算的是两个数的最大公约数，故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_06",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "欧几里得算法还可以写成如下形式（递归版）。下面有关说法，错误的是（  ）。\nint gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }",
          "options": [
            "A. 本题的gcd()实现为递归方式",
            "B. 本题的gcd()代码量少，更容易理解其辗转相除的思想",
            "C. 当较大时，本题的gcd()实现会多次调用自身，需要较多额外的辅助空间",
            "D. 当较大时，相比上题中的gcd()的实现，本题的gcd()执行效率更高"
          ],
          "answer": 3,
          "explanation": "递归版和上题的循环版辗转相除步骤完全相同，时间复杂度都是O(log n)，执行效率没有差别。D说递归版“效率更高”是错误的；A、B正确，C说递归占用较多栈空间也正确。故选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_04",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "有如下函数fun ，则fun(20, 12) 的返回值为（  ）。\nint fun(int a, int b) {\nif (a % b == 0) return b;\nelse return fun(b, a % b);\n}",
          "options": [
            "A. 20",
            "B. 12",
            "C. 4",
            "D. 2"
          ],
          "answer": 2,
          "explanation": "fun(20,12)：20%12=8≠0→fun(12,8)；12%8=4≠0→fun(8,4)；8%4==0返回4。所以fun(20,12)=4，即gcd(20,12)=4，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_05",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "两块长方形土地的长宽分别为24和36米，要将它们分成正方形的小块，使正方形的尺寸尽可能大。小杨采用如下的辗转相除函数gcd(24, 36)来求边长，则函数gcd调用顺序为（  ）。\nint gcd(int a, int b) {\nint big = a > b ? a : b;\nint small = a < b ? a : b;\nif (big % small == 0) return small;\nreturn gcd(small, big % small);\n}",
          "options": [
            "A. gcd(24, 36)、gcd(24, 12)、gcd(12, 0)",
            "B. gcd(24, 36)、gcd(12, 24)、gcd(0, 12)",
            "C. gcd(24, 36)、gcd(24, 12)",
            "D. gcd(24, 36)、gcd(12, 24)"
          ],
          "answer": 2,
          "explanation": "gcd(24,36)：36%24=12≠0，调用gcd(24,12)；gcd(24,12)：24%12==0，直接返回12，不再递归。所以实际只调用两次：gcd(24,36)、gcd(24,12)，应选C。答案表给的A多了一个不会发生的gcd(12,0)。 官方答案表为A，但按代码实际调用只有两次：gcd(24,36)、gcd(24,12)，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_04",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "用以下辗转相除法（欧几里得算法）求gcd(84, 60)的步骤中，第二步计算的数是（  ）。\nint gcd(int a, int b) {\nint big = a > b ? a : b;\nint small = a < b ? a : b;\nif (big % small == 0) return small;\nreturn gcd(small, big % small);\n}",
          "options": [
            "A. 84和60",
            "B. 60和24",
            "C. 24和12",
            "D. 12和0"
          ],
          "answer": 1,
          "explanation": "第一步gcd(84,60)：84%60=24→gcd(60,24)；第二步计算gcd(60,24)：60%24=12→gcd(24,12)。所以第二步计算的数是60和24，故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_06",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列C++代码用两种方式求解两个正整数的最大公约数，说法错误的是（   ）。",
          "options": [
            "A. gcd0() 函数的时间复杂度为 O(log n)",
            "B. gcd1() 函数的时间复杂度为 O(n)",
            "C. 一般说来，gcd0() 的效率高于gcd1()",
            "D. gcd1() 中的代码for (int i = small; i >= 1; --i) 应该修改为for (int i = small; i > 1; --i)"
          ],
          "answer": 3,
          "explanation": "gcd0 是辗转相除法，效率高；gcd1 从大往小逐个试除，效率低。选项 D 认为循环应从 i>1 开始是错误的，因为 i=1 时任何数都能整除、保证函数总有返回值，无需修改，故选 D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_16",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码是用欧几里得算法（辗转相除法）求两个正整数 a、b 的最大公约数，a 大于 b 还是小于 b 都适用。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "辗转相除每次用 a%b 替换，若 a<b，第一次 a%b 就是 a，相当于自动交换，因此无论初始大小关系都正确。因此说法正确。无论 a、b 谁大谁小，反复取余都会得到相同结果。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_17",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "假设函数 gcd() 函数能正确求两个正整数的最大公约数，则下面的 lcm() 函数能求相应两数的最小公倍数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "两个数的最小公倍数等于两数乘积除以它们的最大公约数，lcm(a,b)=a*b/gcd(a,b) 公式正确。先除以最大公约数可避免乘积溢出，公式正确。例如 lcm(4,6)=4×6÷2=12，与最小公倍数定义一致。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_27",
          "kp": "kp5_04",
          "type": "coding",
          "difficulty": 1,
          "question": "对于两个正整数 a、b，它们的最大公因数记为 gcd(a,b)。给定 n 个正整数 a1..an 以及 q 组询问，对于第 i 组询问，请求出所有数都加上 i 之后的最大公因数，即 gcd(a1+i, a2+i, ..., an+i)。",
          "options": null,
          "answer": null,
          "explanation": "思路：设 g 为排序后相邻元素差值的最大公约数，则任意两数之差都是 g 的倍数。gcd(a1+i,…,an+i)=gcd(a1+i, a2−a1, a3−a2, …)=gcd(a1+i, g)。对每个 i 直接输出 gcd(a1+i, g) 即可。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, q, a[N], g;\nint gcd(int a, int b) {\n    if (a == 0 || b == 0) return a + b;\n    return gcd(b, a % b);\n}\nint main() {\n    scanf(\"%d%d\", &n, &q);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    sort(a + 1, a + n + 1);\n    for (int i = 2; i <= n; i++) g = gcd(g, a[i] - a[i - 1]);\n    for (int i = 1; i <= q; i++) printf(\"%d\\n\", gcd(g, a[1] + i));\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 3\n6 9 12 18 30",
              "expectedOutput": "1\n1\n3"
            },
            {
              "input": "3 5\n31 47 59",
              "expectedOutput": "4\n1\n2\n1\n4"
            }
          ]
        },
        {
          "id": "l5_202509_05",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码计算两个正整数的最大公约数(GCD)，横线上应填写（   ）。",
          "options": [
            "A. b",
            "B. a",
            "C. temp",
            "D. a * b"
          ],
          "answer": 1,
          "explanation": "辗转相除循环结束时 b 为 0，此时 a 保存的就是最大公约数，返回 a，选 B。循环结束后 a 中保存的是最大公约数。这是辗转相除法循环实现的标准写法。注意返回的是 a 而不是 b 或 temp。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_17",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "假设函数gcd()能正确求两个正整数的最大公约数，则下面的findMusicalPattern(4，6)函数返回2。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "commonDivisor=gcd(4,6)=2，patternLength=(4×6)/2=12，函数返回 12 而非 2，说法错误。实际返回的是 12 而不是 2，故说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_05",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了欧几里得算法。下面有关说法，错误的是（   ）。",
          "options": [
            "A. gcd1() 实现为递归方式。",
            "B. gcd2() 实现为迭代方式。",
            "C. 当 a、b 较大时，gcd1() 实现会多次调用自身，需要较多额外的辅助空间。",
            "D. 当 a、b 较大时，gcd1() 的实现比 gcd2() 执行效率更高。"
          ],
          "answer": 3,
          "explanation": "gcd1 用递归，每次调用占用栈空间，且递归调用有额外开销，不会比迭代的 gcd2 效率更高，故 D 错误。递归版本每层占用栈空间，且调用开销更大。递归调用栈深度可达 O(log n)，而迭代版本是 O(1) 空间。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_17",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "假设函数 gcd() 函数能正确求两个正整数的最大公约数，则下面的 lcm(a,b) 函数能正确找到两个正整数 a 和 b 的最小公倍数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "先除以最大公约数再乘 b，结果就是最小公倍数，且避免溢出，正确。a/gcd(a,b) 先缩小再乘 b，避免中间溢出。例如 lcm(12,18)=12÷6×18=36。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_04",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "对如下代码实现的欧几里得算法（辗转相除法），执行 gcd(48, 18) 得到的调用序列为（   ）。",
          "options": [
            "A. gcd(48,18) -> gcd(18,12) -> gcd(12,6) -> gcd(6,0)",
            "B. gcd(48,18) -> gcd(30,18) -> gcd(12,18)",
            "C. gcd(48,18) -> gcd(18,30) -> gcd(30,6)",
            "D. gcd(48,18) -> gcd(12,18) -> gcd(6,12)"
          ],
          "answer": 0,
          "explanation": "48%18=12，18%12=6，12%6=0，故调用序列为 gcd(48,18)→gcd(18,12)→gcd(12,6)→gcd(6,0)，选 A。每一次递归都把前一个余数作为新的被除数。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_04",
          "kp": "kp5_04",
          "type": "choice",
          "difficulty": 1,
          "question": "使用如下欧几里得算法求 gcd(105, 45) 时，函数 gcd(a, b) 的递归调用序列正确的是（   ）。",
          "options": [
            "A. gcd(105, 45) -> gcd(45, 60) -> gcd(60, 15) -> gcd(15, 0)",
            "B. gcd(105, 45) -> gcd(45, 15) -> gcd(15, 0)",
            "C. gcd(105, 45) -> gcd(60, 45) -> gcd(15, 45)",
            "D. gcd(105, 45) -> gcd(15, 45) -> gcd(15, 0)"
          ],
          "answer": 1,
          "explanation": "105%45=15，45%15=0，序列为 gcd(105,45)→gcd(45,15)→gcd(15,0)，选 B。余数 0 时递归结束，返回 15。辗转相除每次用余数替换，直到余数为 0。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_18",
          "kp": "kp5_04",
          "type": "judge",
          "difficulty": 1,
          "question": "对任意正整数 a、b，以下两种写法的 gcd 函数返回值完全相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归版 b?gcd1(b,a%b):a 与迭代版效果相同，都正确实现辗转相除法，返回相同结果。两种写法都正确实现欧几里得算法。递归与迭代只是写法不同，计算过程等价。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_27",
          "kp": "kp5_04",
          "type": "coding",
          "difficulty": 1,
          "question": "小明去参加晚宴。晚宴中有 n 个菜肴，每个菜肴都有一个美味度。晚宴规定小明只能恰好选取两道菜肴，并且这两道菜肴的美味度必须要互质（即最大公约数为 1）。请帮助小明选取两道菜肴，使得两道菜肴美味度之和最大。",
          "options": null,
          "answer": null,
          "explanation": "思路：数据规模小，直接枚举所有两两组合，用 gcd 判断是否互质，取互质对和的最大值。样例中 3 与 35 互质且和为 38 最大。枚举所有配对即可保证找出最优解。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint gcd(int a, int b) {\n    if (b == 0) return a;\n    return gcd(b, a % b);\n}\nint arr[1010];\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0, x; i < n; ++i)\n        cin >> arr[i];\n    int ans = 0;\n    for (int i = 0; i < n; ++i)\n        for (int j = i + 1; j < n; ++j)\n            if (gcd(arr[i], arr[j]) == 1)\n                ans = max(ans, arr[i] + arr[j]);\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n3 5 7 35 105",
              "expectedOutput": "38"
            }
          ]
        }
      ]
    },
    "kp5_05": {
      "title": "素数筛法",
      "questions": [
        {
          "id": "l5_202309_18",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "找出自然数N以内的所有质数，常用算法有埃氏筛法和线性筛法，其中埃氏筛法效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "线性筛法（欧拉筛）是在埃氏筛法基础上的改进，每个合数只被它的最小质因子筛掉一次，总体效率比埃氏筛法更高，所以“埃氏筛法效率更高”的说法错误。所以埃氏筛法效率更高的说法是错误的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_26",
          "kp": "kp5_05",
          "type": "coding",
          "difficulty": 1,
          "question": "小杨的幸运数\n问题描述：小杨认为，所有大于等于a的完全平方数都是他的超级幸运数。小杨还认为，所有超级幸运数的倍数都是他的幸运数。自然地，小杨的所有超级幸运数也都是幸运数。\n对于一个非幸运数，小杨规定，可以将它一直＋1，直到它变成一个幸运数。我们把这个过程叫做幸运化。例如，如果a＝4，那么4是最小的幸运数，而1不是，但我们可以连续对1做3次＋1操作，使其变为4，所以我们可以说，1幸运化后的结果是4。\n现在，小杨给出N个数，请你首先判断它们是不是幸运数；接着，对于非幸运数，请你将它们幸运化。\n输入描述：第一行2个正整数a，N。接下来N行，每行一个正整数x，表示需要判断（幸运化）的数。\n输出描述：输出N行，对于每个给定的x，如果它是幸运数，请输出lucky，否则请输出将其幸运化后的结果。\n特别提醒：在常规程序中，输入、输出时提供提示是好习惯。但在本场考试中，由于系统限定，请不要在输入、输出中附带任何提示信息。",
          "options": [],
          "answer": null,
          "explanation": "思路：先用筛法思想预处理。大于等于a的完全平方数（如a=2时是4、9、16…）是超级幸运数；再用类似埃氏筛的办法，把每个超级幸运数的所有倍数都标记为幸运数。然后从大到小扫描一遍，维护next_lucky[i]：i是幸运数就存i，否则存下一个最近的幸运数。最后对每个询问x：是幸运数输出lucky，否则输出next_lucky[x]（即不断+1到达的第一个幸运数）。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstring>\n#include <algorithm>\n#include <string>\n#include <map>\n#include <iostream>\n#include <cmath>\nusing namespace std;\nconst int N = 1001 * 1001;\nconst double eps = 1e-8;\nbool is_lucky[N + 5];\nint next_lucky[N + 5];\nint main() {\n    int a, T;\n    scanf(\"%d%d\", &a, &T);\n    for (int i = 1; i <= N; i ++) {\n        int t = int(sqrt(i) + eps);\n        if (i >= a && t * t == i)\n            is_lucky[i] = 1;\n        if (! is_lucky[i])\n            continue;\n        for (int j = i + i; j <= N; j += i)\n            is_lucky[j] = 1;\n    }\n    for(int i = N; i; i --)\n        next_lucky[i] = is_lucky[i] ? i : next_lucky[i + 1];\n    while(T --) {\n        int x;\n        scanf(\"%d\", &x);\n        if (is_lucky[x])\n            cout << \"lucky\" << endl;\n        else\n            cout << next_lucky[x] << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 4\n1\n4\n5\n9",
              "expectedOutput": "4\nlucky\n8\nlucky"
            },
            {
              "input": "16 11\n1\n2\n4\n8\n16\n32\n64\n128\n256\n512\n1024",
              "expectedOutput": "16\n16\n16\n16\nlucky\nlucky\nlucky\nlucky\nlucky\nlucky\nlucky"
            }
          ]
        },
        {
          "id": "l5_202403_10",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在埃拉托斯特尼筛法中，要筛选出不大于n的所有素数，最外层循环应该遍历什么范围（ ）？",
          "options": [
            "A. for (int i = 2; i <= n; ++i)",
            "B. for (int i = 1; i < n; ++i)",
            "C. for (int i = 2; i <= sqrt(n); ++i)",
            "D. for (int i = 1; i <= sqrt(n); ++i)"
          ],
          "answer": 2,
          "explanation": "埃拉托斯特尼筛法只需用2到√n的素数作为筛子去标记它们的倍数，因为如果一个合数m含有大于√n的因子，那么它必然同时含有小于√n的因子，早在之前就会被标记。所以最外层循环从2开始、遍历到√n即可，故选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_27",
          "kp": "kp5_05",
          "type": "coding",
          "difficulty": 1,
          "question": "B-smooth数\n问题描述：如果一个正整数的最大质因子不超过B，则该正整数为B-smooth数。给定n和B，求不超过n的B-smooth数的个数。\n输入格式：第一行包含两个正整数n, B。\n输出格式：输出一个非负整数，表示不超过n的B-smooth数的数量。",
          "options": [],
          "answer": null,
          "explanation": "思路：用线性筛的思想求出1到n每个数的最大质因子：i是素数时其最大质因子就是i；合数i×p的最大质因子取max(自身的最大质因子, p)。1的最大质因子记为1（也算smooth数）。最后统计最大质因子≤B的个数。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint main() {\n    int n, B;\n    cin >> n >> B;\n    assert(1 <= n && n <= 1e6);\n    assert(1 <= B && B <= 1e6);\n    vector<bool> vis = vector<bool>(n + 5, false);\n    vector<int> mx_prime_factor = vector<int>(n + 5, 0);\n    vector<int> prime;\n    mx_prime_factor[1] = 1;\n    for (int i = 2; i <= n; i ++) {\n        if (! vis[i]) {\n            mx_prime_factor[i] = i;\n            prime.push_back(i);\n        }\n        for (int p : prime) {\n            if (1ll * p * i > n) break ;\n            vis[i * p] = 1;\n            mx_prime_factor[i * p] = max(mx_prime_factor[i * p], max(mx_prime_factor[i], p));\n            if (i % p == 0) break ;\n        }\n    }\n    int ans = 0;\n    for (int i = 1; i <= n; i ++)\n        ans += (mx_prime_factor[i] <= B);\n    cout << ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "10 3\n",
              "expectedOutput": "7\n"
            }
          ]
        },
        {
          "id": "l5_202406_07",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的线性筛法，筛选出所有小于等于n的素数，则横线上应填的代码是(  )。\nvector<int> linear_sieve(int n) {\nvector<bool> is_prime(n+1, true);\nvector<int> primes;\nis_prime[0]=is_prime[1]=0;\nfor (int i=2;i<=n;++i) {\nif (is_prime[i]) primes.push_back(i);\n____________ {  // 在此处填入代码\nis_prime[i*primes[j]]=0;\nif (i%primes[j]==0) break;\n}\n}\nreturn primes;\n}",
          "options": [
            "A. for (int j = 0; j < primes.size() && i * primes[j] <= n; j++)",
            "B. for (int j = 0; j <= sqrt(n) && i * primes[j] <= n; j++)",
            "C. for (int j = 0; j <= n; j++)",
            "D. for (int j = 1; j <= sqrt(n); j++)"
          ],
          "answer": 0,
          "explanation": "线性筛内层循环要遍历所有已筛出的素数，直到i×primes[j]超过n，且当i能被primes[j]整除时break。A同时限制j的范围和乘积不超n，保证每个合数只被最小质因子筛一次，故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_19",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "找出自然数n以内的所有质数，常用算法有埃拉托斯特尼（埃氏）筛法和线性筛法，其中埃氏筛法效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "埃氏筛法在标记合数时，一个合数可能被它的多个质因子重复标记，时间复杂度约为O(n log log n)；而线性筛保证每个合数只被它的最小质因子筛掉一次，时间复杂度是O(n)，效率更高。所以“埃氏筛法效率更高”的说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_05",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的埃拉托斯特尼筛法，筛选出所有小于等于n的素数，则横线上应填的最佳代码是( )。\nfor (int i = 2; i * i <= n; i++) {\nif (is_prime[i]) {\nprimes.push_back(i);\n____________ {  // 在此处填入代码\nis_prime[j] = false;\n}\n}\n}",
          "options": [
            "A. for (int j = i; j <= n; j++)",
            "B. for (int j = i * i; j <= n; j++)",
            "C. for (int j = i * i; j <= n; j += i)",
            "D. for (int j = i; j <= n; j += i)"
          ],
          "answer": 2,
          "explanation": "埃氏筛从i×i开始每隔i标记一个合数，即for(j=i*i;j<=n;j+=i)is_prime[j]=false。从i×i开始可以跳过已被更小因子标记的倍数，步长为i，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_06",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的线性筛法，筛选出所有小于等于n的素数，则横线上应填的代码是( )。",
          "options": [
            "A. for (int j = 0; j < primes.size() && i * primes[j] <= n; j++)",
            "B. for (int j = 1; j < primes.size() && i * j <= n; j++)",
            "C. for (int j = 2; j < primes.size() && i * primes[j] <= n; j++)",
            "D. 以上都不对"
          ],
          "answer": 0,
          "explanation": "线性筛的内层循环从j=0开始遍历所有已经筛出的素数，循环条件是j<primes.size()且i×primes[j]≤n。当i能被当前素数整除时就break，保证每个合数只被它的最小质因子筛一次。选项A的写法正确，故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_17",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "找出自然数n以内的所有质数，常用算法有埃拉托斯特尼（埃氏）筛法和线性筛法，其中线性筛法效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "线性筛保证每个合数只被它的最小质因子筛掉一次，每个数最多被处理一次，总操作次数与n成正比，时间复杂度为O(n)；而埃氏筛约为O(n log log n)。所以线性筛效率更高，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_07",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的埃拉托色尼(埃氏)筛法，筛选出所有小于等于n的素数。下面说法，正确的是（  ）。",
          "options": [
            "A. 代码的时间复杂度是O(n log n)",
            "B. 在标记非素数时，代码从i^2开始，可以减少重复标记",
            "C. 代码会输出所有小于等于n的奇数",
            "D. 调用函数sieve_Eratosthenes(10)，函数返回值的数组中包含的元素有：2, 3, 5, 7, 9"
          ],
          "answer": 1,
          "explanation": "埃氏筛从j=i×i开始标记倍数，因为更小的质因子已经把更小的倍数标记过了，从i^2开始能减少重复标记，B正确。D中9不是素数，返回数组不含9；C说输出所有奇数也不对。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_08",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的线性筛法，筛选出所有小于等于n的素数。下面说法正确的是( )。",
          "options": [
            "A. 线性筛的时间复杂度是O(n)",
            "B. 每个合数会被其所有的质因子标记一次",
            "C. 线性筛和埃拉托色尼筛的实现思路完全相同",
            "D. 以上都不对"
          ],
          "answer": 0,
          "explanation": "线性筛保证每个合数只被最小质因子标记一次，总操作O(n)，A正确。B说被所有质因子标记（错）；C说思路完全相同（错，埃氏筛一个合数会被多个质因子标记）。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_17",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "线性筛相对于埃拉托斯特尼筛法，每个合数只会被它的最小质因数筛去一次，因此效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "线性筛算法通过在内层循环中当i能被primes[j]整除时就break，保证每个合数只被它的最小质因数筛去一次，每个合数只处理一次，总操作次数O(n)，比埃氏筛的O(n log log n)更高效，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_06",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的线性筛法，横线上应填的最佳代码是( )。\nfor (int i = 2; i <= n/2; i++) {\nif (is_prime[i]) primes.push_back(i);\nfor (int j = 0; ____________ ; j++) {  // 在此处填入代码\nis_prime[i * primes[j]] = false;\nif (i % primes[j] == 0) break;\n}\n}",
          "options": [
            "A. j < primes.size()",
            "B. i * primes[j] <= n",
            "C. j < primes.size() && i * primes[j] <= n",
            "D. j <= n"
          ],
          "answer": 2,
          "explanation": "线性筛的内层循环要遍历已经筛出的所有素数，既要保证数组下标j不越界（j<primes.size()），又要保证乘积i×primes[j]不超过n，两个条件缺一不可。选项C同时满足这两个条件，是最佳代码，故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_18",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "线性筛相对于埃拉托斯特尼筛法，每个合数只会被它的最小质因数筛去一次，因此效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "线性筛内层循环中，当i能被当前素数primes[j]整除时就break，这一技巧保证每个合数只被它的最小质因数筛去一次，每个合数只处理一次，总操作次数为O(n)，效率比埃氏筛更高，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_25",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "如下为线性筛法，用于高效生成素数表，其核心思想是每个合数只被它的最小质因数筛掉一次，时间复杂度为 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "线性筛在 i%primes[j]==0 时 break，保证每个合数只被其最小质因子标记一次，总复杂度为 O(n)。因此其时间复杂度为 O(n)。每个合数只被标记一次，没有重复工作。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_06",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "函数sieve实现埃拉托斯特尼筛法(埃氏筛)，横线处应填入（   ）。",
          "options": [
            "A. i",
            "B. i+1",
            "C. i*2",
            "D. i*i"
          ],
          "answer": 3,
          "explanation": "埃氏筛从 i*i 开始标记 i 的倍数，因为小于 i*i 的 i 的倍数已被更小的质因子标记过，从 i*i 开始可避免重复，选 D。从 i*i 开始标记可跳过已被更小质因子筛过的数。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_07",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "函数linearSieve实现线性筛法(欧拉筛)，横线处应填入（   ）。",
          "options": [
            "A. i % p == 0",
            "B. p % i == 0",
            "C. i == p",
            "D. i * p == n"
          ],
          "answer": 0,
          "explanation": "当 i 能被质数 p 整除时，说明 p 是 i 的最小质因子，更大的质数会把 i*p 交给更小的质因子处理，此时应 break，即 i % p == 0。只有最小质因子负责标记，才能保证每个合数只被筛一次。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_08",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于埃氏筛和线性筛的比较，下列说法错误的是（   ）。",
          "options": [
            "A. 埃氏筛可能会对同一个合数进行多次标记",
            "B. 线性筛的理论时间复杂度更优，所以线性筛的速度往往优于埃氏筛",
            "C. 线性筛保证每个合数只被其最小质因子筛到一次",
            "D. 对于常见范围，埃氏筛因实现简单，常数较小，其速度往往优于线性筛"
          ],
          "answer": 1,
          "explanation": "线性筛理论 O(n) 优于埃氏筛 O(n log log n)，但实际常见范围内埃氏筛常数小、速度快。B 把理论优势说成“速度往往更优”，结论过于绝对，是错误的。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_21",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "线性筛关键是“每个合数只会被最小质因子筛到一次”，因此为 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "线性筛在 i%primes[j]==0 时 break，每个合数仅被其最小质因子标记一次，总复杂度 O(n)，正确。每个合数只被其最小质因子标记一次，复杂度为 O(n)。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_26",
          "kp": "kp5_05",
          "type": "coding",
          "difficulty": 1,
          "question": "给定正整数 n，现在有 1,2,...,n 共 n 个整数。需要从中选取一些整数，使得所选取的整数中任意两个不同的整数均互质（即最大公因数为 1）。请你最大化所选取整数的数量。",
          "options": null,
          "answer": null,
          "explanation": "思路：任意两个不同质数一定互质，且 1 与任何数都互质，因此取 1 加上所有质数就能得到互质数量最多的一组。用线性筛求出 1..n 的质数个数 cnt，答案为 cnt+1。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n, p[N], cnt;\nbool np[N];\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 2; i <= n; i++) {\n        if (!np[i]) p[++cnt] = i;\n        for (int j = 1; j <= cnt && i * p[j] <= n; j++) {\n            np[i * p[j]] = 1;\n            if (i % p[j] == 0) break;\n        }\n    }\n    printf(\"%d\\n\", 1 + cnt);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6",
              "expectedOutput": "4"
            },
            {
              "input": "9",
              "expectedOutput": "5"
            }
          ]
        },
        {
          "id": "l5_202512_07",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下述代码实现素数表的线性筛法，筛选出所有小于等于 n 的素数，则横线上应填的代码是（   ）。",
          "options": [
            "A. for (int j = 0; j < primes.size() && i * primes[j] <= n; j++)",
            "B. for(int j = sqrt(n); j <= n && i * primes[j] <= n; j++)",
            "C. for (int j = 1; j <= sqrt(n); j++)",
            "D. for(int j = 1; j < n && i * primes[j] <= n; j++)"
          ],
          "answer": 0,
          "explanation": "线性筛需遍历已筛出的全部质数，同时保证 i*primes[j] 不超过 n，即 j < primes.size() 且 i*primes[j] <= n，故选 A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_19",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在求解所有不大于 n 的素数时，线性筛法（欧拉筛）都应当优先于埃氏筛法使用，因为线性筛法的时间复杂度为 O(n)，低于埃氏筛法的 O(n log log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "虽然线性筛理论 O(n) 更优，但埃氏筛常数小、实现简单，常见范围内常常更快，不能说“都应当优先”。所以不能说线性筛总是应当优先使用。实践中埃氏筛常数小，常被优先使用。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_05",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了欧拉（线性）筛，横线处应填写（   ）。",
          "options": [
            "A. j <= n",
            "B. j < sqrt(n)",
            "C. j < primes.size()",
            "D. j < i"
          ],
          "answer": 2,
          "explanation": "遍历已筛出的全部质数，j 的上界是质数个数，即 j < primes.size()，选 C。j 遍历的是已经筛出的质数集合。j 遍历已筛出的所有质数集合，保证不漏筛。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_06",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "埃氏筛中将内层循环从 j = i*i 开始而不是 j = 2*i 的主要原因是（   ）。",
          "options": [
            "A. 因为 2*i 一定不是合数",
            "B. i*i 一定是质数",
            "C. 小于 i*i 的 i 的倍数已被更小质因子筛过",
            "D. 这样可以把时间复杂度降为 O(n)"
          ],
          "answer": 2,
          "explanation": "对 i 的倍数 2i、3i、…、i*(i-1)，它们都有比 i 更小的质因子，早已被筛掉，从 i*i 开始避免重复标记，选 C。从 i*i 开始避免重复标记，降低常数。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_24",
          "kp": "kp5_05",
          "type": "judge",
          "difficulty": 1,
          "question": "线性筛相比埃氏筛的核心改进在于：埃氏筛中一个合数可能被多个质数重复标记，线性筛通过“每个合数只被其最大质因子筛去”的策略，保证每个合数恰好被标记一次，从而实现 O(n) 的时间复杂度。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "线性筛的核心是每个合数只被其最小质因子筛去，而非最大质因子，说法错误。线性筛保证每个合数只被其最小质因子筛去。“最大质因子”是错误说法，应为最小质因子。故原题说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_05",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现线性筛（欧拉筛），以筛选出 n 以内的所有素数。横线处的代码应为（   ）。",
          "options": [
            "A. i % primes[j] == 0",
            "B. primes[j] % i == 0",
            "C. i % primes[j] != 0",
            "D. i == primes[j]"
          ],
          "answer": 0,
          "explanation": "当 i 能被 primes[j] 整除时，i 的最小质因子是 primes[j]，再往后标记会重复，应 break，即 i % primes[j] == 0。break 保证每个合数只被最小质因子标记一次。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_06",
          "kp": "kp5_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于埃氏筛法的说法正确的是（   ）。",
          "options": [
            "A. 每个合数只会被筛掉一次",
            "B. 从每个素数出发，把它的倍数标记为合数",
            "C. 只能判断一个数是不是偶数",
            "D. 不能求出素数表"
          ],
          "answer": 1,
          "explanation": "埃氏筛从每个质数出发标记其倍数，能求出素数表；但合数可能被多个质数重复标记，故选 B。埃氏筛可能重复标记合数，但整体仍高效。B 是埃氏筛的基本做法，其余选项描述错误。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_06": {
      "title": "唯一分解定理",
      "questions": [
        {
          "id": "l5_202309_26",
          "kp": "kp5_06",
          "type": "coding",
          "difficulty": 1,
          "question": "因数分解\n问题描述：每个正整数都可以分解成素数的乘积，例如：6=2×3、20=2²×5。现在，给定一个正整数N，请按要求输出它的因数分解式。约定2≤N≤10¹²。\n输入描述：输入第一行，包含一个正整数N。\n输出描述：输出一行，为N的因数分解式。要求按质因数由小到大排列，乘号用星号*表示，且左右各空一格。当且仅当一个素数出现多次时，将它们合并为指数形式，用上箭头^表示，且左右不空格。",
          "options": [],
          "answer": null,
          "explanation": "思路：每个正整数的质因数分解是唯一的。从小到大枚举可能的质因子p（只用枚举到√N即可），若p能整除N，就不断用p除N并计数，得到该质因子的指数；按题目格式输出p和指数。循环结束后若N还大于1，说明剩下一个大于√N的质因子，直接输出。用bool变量first控制乘号“ * ”只在非第一项前输出，指数用^表示。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    long long N = 0;\n    cin >> N;\n    bool first = true;\n    for (long long p = 2; p * p <= N; p++) {\n        if (N % p != 0)\n            continue;\n        int cnt = 0;\n        while (N % p == 0) {\n            cnt++;\n            N /= p;\n        }\n        if (first) {\n            first = false;\n        } else {\n            cout << \" * \";\n        }\n        cout << p;\n        if (cnt > 1)\n            cout << \"^\" << cnt;\n    }\n    if (N > 1) {\n        if (first) {\n            first = false;\n        } else {\n            cout << \" * \";\n        }\n        cout << N;\n    }\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6",
              "expectedOutput": "2 * 3"
            },
            {
              "input": "20",
              "expectedOutput": "2^2 * 5"
            },
            {
              "input": "23",
              "expectedOutput": "23"
            }
          ]
        },
        {
          "id": "l5_202312_20",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨设计了一个拆数程序，它能够将任意的非质数自然数N转换成若干个质数的乘积，这个程序是可以设计出来的。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "算术基本定理（质因数分解定理）保证：任何大于1的整数都可以唯一地分解成若干个质数的乘积。所以写出把任意非质数自然数分解成质数乘积的程序是可行的，说法正确。算术基本定理保证了分解的可行性，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_01",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "唯一分解定理描述的内容是（ ）。",
          "options": [
            "A. 任意整数都可以分解为素数的乘积",
            "B. 每个合数都可以唯一分解为一系列素数的乘积",
            "C. 两个不同的整数可以分解为相同的素数乘积",
            "D. 以上都不对"
          ],
          "answer": 1,
          "explanation": "唯一分解定理（算术基本定理）指出：每个大于1的整数都可以唯一地分解为素数的乘积。A说“任意整数”，把1、0和负数都包含进去，不成立；B准确描述了这个定理，故选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_20",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "唯一分解定理表明任何一个大于1的整数都可以唯一地表示为一系列质数的乘积，即质因数分解是唯一的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "唯一分解定理也就是算术基本定理，它指出：任何一个大于1的整数都可以写成若干个质数的乘积，并且这种分解方式在不计因数排列顺序的意义下是唯一的。质因数分解的确定性正是该定理的核心内容，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_27",
          "kp": "kp5_06",
          "type": "coding",
          "difficulty": 1,
          "question": "小杨的幸运数字\n问题描述：小杨认为他的幸运数字应该恰好有两种不同的质因子。例如6的质因子有2和3，恰好两种，所以6是幸运数字；而30的质因子有2、3、5三种，不是幸运数字。小杨有n个正整数，请判断每个正整数是否是他的幸运数字。\n输入格式：第一行一个正整数n，之后n行每行一个正整数。\n输出格式：输出n行，每个正整数是幸运数字输出1，否则输出0。",
          "options": [],
          "answer": null,
          "explanation": "思路：对每个数做质因数分解，用set收集不同的质因子，判断质因子种类数是否恰好为2。分解时先试除2，再枚举3到√x的奇数因子，除尽后若x>1说明还剩一个大质因子。质因子种数为2则输出1，否则0。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nint calc(int x) {\n    set<int> s;\n    for (int i = 2; i * i <= x; i++) {\n        if (x % i == 0) {\n            s.insert(i);\n            while (x % i == 0) x /= i;\n        }\n    }\n    if (x != 1) s.insert(x);\n    return (int)s.size();\n}\nint a[N];\nint main(){\n    int n;\n    cin>>n;\n    for(int i=1;i<=n;i++){\n        cin>>a[i];\n        int x = calc(a[i]);\n        if(x==2) cout<<\"1\\n\";\n        else cout<<\"0\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n7\n12\n30\n",
              "expectedOutput": "0\n1\n0\n"
            }
          ]
        },
        {
          "id": "l5_202409_18",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "唯一分解定理表明任何一个大于1的整数都可以唯一地分解为素数之和。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "算术基本定理说的是：任何一个大于1的整数都可以唯一地分解为一系列素数的乘积。题干把它说成“分解为素数之和”是错误的，质因数分解用的是乘法而不是加法，所以说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_06",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面函数将自然数的所有质因数找出来，横线上能填写的最佳代码是（    ）。\nwhile (n % 2 == 0) { factors.push_back(2); n /= 2; }\n____________  {  // 在此处填入代码\nwhile (n % i == 0) { factors.push_back(i); n /= i; }\n}\nif (n > 2) factors.push_back(n);",
          "options": [
            "A. for (int i = 3; i <= n; i ++)",
            "B. for (int i = 3; i * i <= n; i ++)",
            "C. for (int i = 3; i <= n; i += 2)",
            "D. for (int i = 3; i * i <= n; i += 2)"
          ],
          "answer": 3,
          "explanation": "处理完因子2之后，只需要从3开始枚举奇数因子，并且枚举到√n即可停止，因为如果n还剩一个大于√n的质因子，它最多只有一个，会由最后的if(n>2)处理。所以最佳代码是for(i=3;i*i<=n;i+=2)，故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_18",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个大于1的自然数都可以分解成若干个不同的质数的乘积，且分解方式是唯一的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "唯一分解定理说的是分解为质数的乘积且唯一，但其中的质数可以重复出现，例如12=2×2×3、18=2×3×3。题干说“若干个不同的质数”不准确，因为质数可能重复，所以说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_26",
          "kp": "kp5_06",
          "type": "coding",
          "difficulty": 1,
          "question": "奇妙数字\n问题描述：小杨认为一个数字x是奇妙数字当且仅当x=p^k，其中p为任意质数且k为正整数。给定一个正整数n，构造一个包含奇妙数字的集合，集合中数字不重复，且所有数字的乘积是n的因子。求满足条件的集合最多能包含多少个奇妙数字。\n输入格式：第一行一个正整数n。\n输出格式：输出一个正整数，代表集合最多包含的奇妙数字个数。",
          "options": [],
          "answer": null,
          "explanation": "思路：把n分解质因数。对每个质因子p，设指数为cnt，由于p^1、p^2、…各只能用一次，最多能选的数量是使1+2+…+k≤cnt的最大k（连续自然数和），即calc(cnt)。所有质因子贡献的数量相加就是答案。如128=2^7，7可拆成1+2+3共3个。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\n#define ll long long\nconst int N = 1e5+10;\nll calc(ll x){\n    int ans = 0;\n    ll tmp=1;\n    while(x>=tmp){\n        ans++;\n        x-=tmp;\n        tmp++;\n    }\n    return ans;\n}\nint main(){\n    ll n;\n    cin>>n;\n    ll ans = 0;\n    for(ll i=2;i*i<=n;i++){\n        if(n%i==0){\n            int cnt = 0;\n            while(n%i==0){\n                cnt++;\n                n/=i;\n            }\n            ans+=calc(cnt);\n        }\n    }\n    if(n!=1){\n        ans+=calc(1);\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "128\n",
              "expectedOutput": "3\n"
            }
          ]
        },
        {
          "id": "l5_202503_05",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "根据唯一分解定理，下面整数的唯一分解是正确的（  ）。",
          "options": [
            "A. 18 = 3 × 6",
            "B. 28 = 4 × 7",
            "C. 36 = 2 × 3 × 6",
            "D. 30 = 2 × 3 × 5"
          ],
          "answer": 3,
          "explanation": "唯一分解要求所有因子都必须是质数。选项A中6不是质数（18=2×3×3才正确），B中4不是质数，C中6不是质数；只有D中2、3、5全是质数，且30=2×3×5是30的唯一质因数分解，故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_08",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "唯一分解定理描述了关于正整数的什么性质？",
          "options": [
            "A. 任何正整数都可以表示为两个素数的和。",
            "B. 任何大于1的合数都可以唯一分解为有限个质数的乘积。",
            "C. 两个正整数的最大公约数总是等于它们的最小公倍数除以它们的乘积。",
            "D. 所有素数都是奇数。"
          ],
          "answer": 1,
          "explanation": "唯一分解定理（算术基本定理）指出：任何大于 1 的自然数都可以唯一地分解为质数的乘积（忽略顺序），故选 B。这一性质是数论的基础，判断质数、分解质因数等算法都依赖它。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_18",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码用于输出每个数对应的质因数列表，输出形如：{5: [5], 6: [2, 3], 7: [7], 8: [2, 2, 2]}。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "代码中 prime_factor[i] = prime_factor[i] + j 不能对 vector 直接加整数，且输出是逐行“i: 因子”形式，与所示集合形式不符，说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_09",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "唯一分解定理描述的是（   ）。",
          "options": [
            "A. 每个整数都能表示为任意素数的乘积",
            "B. 每个大于1的整数能唯一分解为素数幂乘积（忽略顺序）",
            "C. 合数不能分解为素数乘积",
            "D. 素数只有两个因子：1和自身"
          ],
          "answer": 1,
          "explanation": "唯一分解定理：任何大于 1 的整数都可唯一分解为素数幂的乘积（忽略顺序），故选 B。例如 12=2²×3，分解方式在忽略顺序下唯一。如 12=2×2×3，忽略顺序后分解唯一。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_06",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "唯一分解定理描述的内容是（   ）。",
          "options": [
            "A. 任何正整数都可以表示为两个素数的和。",
            "B. 任何大于1的合数都可以唯一分解为有限个质数的乘积。",
            "C. 两个正整数的最大公约数总是等于它们的最小公倍数除以它们的乘积。",
            "D. 所有素数都是奇数。"
          ],
          "answer": 1,
          "explanation": "唯一分解定理即算术基本定理：任何大于 1 的数都可唯一分解为质数的乘积（忽略顺序），选 B。合数分解为质数乘积的方式在忽略顺序下唯一。例如 18=2×3×3，是合数可唯一分解的实例。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_27",
          "kp": "kp5_06",
          "type": "coding",
          "difficulty": 1,
          "question": "小A有一个包含 n 个正整数的序列。每次可花费 1 个金币执行以下任意一种操作：选择序列中一个正整数将其乘以任意质数；或将其除以任意质数（要求能被整除）。求令序列中所有整数都相同的最少金币数。",
          "options": null,
          "answer": null,
          "explanation": "思路：各质因数互不影响。对每个质数统计其在 n 个数中的指数，所有数变到同一个目标时最优目标指数是中位数，费用为各指数到中位数的绝对差之和，累加即为答案。取中位数作为目标指数，可以保证总费用最小。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nconst int N = 100010;\nint num[N][20];\nint n, a[N];\nvoid calc_prime_factor(int x){\n    for(int i=2;i*i<=x;i++){\n        if(x%i==0){\n            int cnt=0;\n            while(x%i==0){\n                x/=i;\n                cnt++;\n            }\n            num[i][cnt]++;\n        }\n    }\n    if(x>1){\n        num[x][1]++;\n    }\n}\nint main(){\n    scanf(\"%d\",&n);\n    for(int i=1;i<=n;i++){\n        scanf(\"%d\",&a[i]);\n        calc_prime_factor(a[i]);\n    }\n    long long ans=0;\n    for(int i=2;i<100001;i++){\n        int pos = 0;\n        for(int j=0;j<20;j++){\n            pos += num[i][j];\n        }\n        num[i][0]=n-pos;\n        int median_exponent=0;\n        pos = 0;\n        for(int j=0;j<20;j++){\n            pos += num[i][j];\n            if(pos*2>=n){\n                median_exponent=j;\n                break;\n            }\n        }\n        for(int j=0;j<20;j++){\n            ans+=num[i][j]*abs(j-median_exponent);\n        }\n    }\n    printf(\"%lld\\n\",ans);\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n10 6 35 105 42",
              "expectedOutput": "8"
            }
          ]
        },
        {
          "id": "l5_202603_21",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "根据唯一分解定理，如果大于1的整数 n 不能被任何不超过其平方根的质数整除，那么 n 必定是质数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "若 n 是合数，必有小于等于 sqrt(n) 的质因子，因此不被任何不超过 sqrt(n) 的质数整除时 n 必为质数，正确。若 n 有大于 sqrt(n) 的因子，必配套有小于 sqrt(n) 的因子。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_08",
          "kp": "kp5_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码用于统计 n 中因子 2 出现了多少次。若 n = 40，输出是（   ）。",
          "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          "answer": 2,
          "explanation": "40=8×5=2³×5，while 循环会执行 3 次（40→20→10→5），输出 3，选 C。40 分解后含三个因子 2。因子 2 的个数即 40 分解中 2 的指数。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_24",
          "kp": "kp5_06",
          "type": "judge",
          "difficulty": 1,
          "question": "唯一分解定理表明，任何一个大于 1 的自然数都可以唯一地分解为若干个质数的乘积，如果不考虑质因数的顺序，这种分解方式是唯一的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这是唯一分解定理的准确表述，正确。例如 30=2×3×5，分解方式唯一。如 60=2²×3×5，不考虑顺序分解唯一。故该说法正确。这是数论中最重要的基础定理之一。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_07": {
      "title": "二分查找",
      "questions": [
        {
          "id": "l5_202309_19",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，可以使用二分法查找链表中的元素。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二分查找要求数据顺序存储、支持随机访问（能直接跳到中间），链表只能从头到尾一个个找，不能随机访问，因此不能用二分法查找链表元素，说法错误。因此不能对链表使用二分法查找，说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_09",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于有序list的二分查找，有关说法错误的是（ ）。\nint _binarySearch(vector<int>lst, int Low, int High, int Target)\n{\nif (Low > High)\nreturn -1;\nint Mid = (Low + High) / 2;\nif (Target == lst[Mid])\nreturn Mid;\nelse if (Target < lst[Mid])\nreturn _binarySearch(lst, Low, Mid - 1, Target);\nelse\nreturn _binarySearch(lst, Mid + 1, High, Target);\n}\nint bSearch(vector<int>lst, int Val)\n{\nreturn _binarySearch(lst, 0, lst.size(), Val);\n}",
          "options": [
            "A. 代码采用二分法实现有序list的查找",
            "B. 代码采用分治算法实现有序list的查找",
            "C. 代码采用递归方式实现有序list的查找",
            "D. 代码采用动态规划算法实现有序list的查找"
          ],
          "answer": 3,
          "explanation": "这个函数每次把区间从中间分成两半，只查其中一半，是典型的二分查找，也符合分治思想，并且用递归实现。动态规划是把问题分解成重叠子问题并保存结果，这里没有用到，所以D说法错误，选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_10",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在上题的_binarySearch算法中，如果lst中有N个元素，其时间复杂度是（ ）。",
          "options": [
            "A. O(N)",
            "B. O(logN)",
            "C. O(NlogN)",
            "D. O(N²)"
          ],
          "answer": 1,
          "explanation": "二分查找每比较一次，搜索范围就缩小一半，最多比较约log₂N次就能找到或判定不存在，所以时间复杂度是O(logN)，选B。因为每比较一次就排除一半元素，所以选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_17",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨在生日聚会时拿一块H*W的巧克力招待来的K个小朋友，保证每位小朋友至少能获得一块相同大小的巧克力。那么小杨想分出来最大边长的巧克力可以使用二分法。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "设正方形边长为x，能切出的块数为(H÷x向下取整)×(W÷x向下取整)。x越大块数越少，满足“块数≥K”的条件随x增大单调变难，符合二分答案的使用条件，可以用二分法求最大边长。官方答案标为错误，但按二分答案可以求解，故选正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_08",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定序列：1，3，6，9，17，31，39，52，61，79，81，90，96。使用以下代码进行二分查找查找元素82时，需要循环多少次，即最后输出的times值为（ ）。",
          "options": [
            "A. 2",
            "B. 5",
            "C. 3",
            "D. 4"
          ],
          "answer": 3,
          "explanation": "序列有13个元素。第一次mid=6（39），82大，left=7；第二次mid=9（79），left=10；第三次mid=11（90），right=10；第四次mid=10（81），left=11，此时left>right循环结束，共4次。times=4，故选D。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_18",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找要求被搜索的序列是有序的，否则无法保证正确性。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二分查找的核心是每次取序列中间的元素与目标比较，根据比较结果可以判断目标在左半段还是右半段，从而舍弃一半区间继续查找。这个判断依赖序列已经有序，如果序列无序，中间元素无法提供有效的排除信息，无法保证查找正确，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_11",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "根据下述二分查找法，在排好序的数组1，3，6，9，17，31，39，52，61，79，81，90，96中查找数值82，和82比较的数组元素分别是（  ）。",
          "options": [
            "A. 52, 61, 81, 90",
            "B. 52, 79, 90, 81",
            "C. 39, 79, 90, 81",
            "D. 39, 79, 90"
          ],
          "answer": 2,
          "explanation": "数组共13个元素。第一次mid=6取到39，82更大所以left=7；第二次mid=9取到79，仍小于82所以left=10；第三次mid=11取到90，大于82所以right=10；第四次mid=10取到81，小于82所以left=11，循环结束。比较顺序是39、79、90、81，故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_26",
          "kp": "kp5_07",
          "type": "coding",
          "difficulty": 1,
          "question": "黑白格\n问题描述：小杨有一个n行m列的网格图，每个格子要么是白色，要么是黑色。求至少包含k个黑色格子的最小子矩形包含了多少个格子，如果不存在这样的子矩形则输出-1。\n输入格式：第一行包含三个正整数n,m,k。之后n行，每行一个长度为m的01串，为0表示白色，否则为黑色。\n输出格式：输出一个整数，代表至少包含k个黑色格子的最小子矩形包含的格子数。",
          "options": [],
          "answer": null,
          "explanation": "思路：先用二维前缀和（每行累加）快速求出任意子矩形的黑色格子数。枚举子矩形的左右边界（列），再用“行方向前缀和+二分”找包含至少k个黑格的最短连续行区间，更新最小面积。若所有矩形都达不到k个黑格则输出-1。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 110;\nint w[N][N];\nint sum[N][N];\nint n,m;\nint main(){\n    int k;\n    cin>>n>>m>>k;\n    for(int i=1;i<=n;i++){\n        string s;\n        cin>>s;\n        for(int j=1;j<=m;j++){\n            w[i][j]=s[j-1]-'0';\n            sum[i][j]=sum[i][j-1]+w[i][j];\n        }\n    }\n    int ans = 0;\n    for(int i=1;i<=m;i++){\n        for(int j=i;j<=m;j++){\n            vector<int> num;\n            int now = 0;\n            for(int l=1;l<=n;l++){\n                int tmp = sum[l][j]-sum[l][i-1];\n                now+=tmp;\n                num.push_back(now);\n                if(now>=k){\n                    if(ans ==0)ans=(j-i+1)*l;\n                    else ans=min(ans,(j-i+1)*l);\n                    int L=1,R=l;\n                    while (L < R){\n                        int mid = L + R + 1 >> 1;\n                        if (now-num[mid-1]>=k) L = mid;\n                        else R = mid - 1;\n                    }\n                    if(now-num[L-1]>=k){\n                        if(ans ==0)ans=(j-i+1)*(l-L);\n                        else ans=min(ans,(j-i+1)*(l-L));\n                    }\n                }\n            }\n        }\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 5 5\n00000\n01111\n00011\n00011\n",
              "expectedOutput": "6\n"
            }
          ]
        },
        {
          "id": "l5_202409_13",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "根据下述二分查找法，在排好序的数组1，3，6，9，17，31，39，52，61，79中查找数值31，循环while (left <= right) 执行的次数为（  ）。",
          "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ],
          "answer": 2,
          "explanation": "数组共10个元素。第一次mid=4（17），31大，left=5；第二次mid=7（52），right=6；第三次mid=5（31）命中。共执行3次循环，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_23",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找要求被搜索的序列是有序的，否则无法保证正确性。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二分查找每次把中间元素与目标比较，根据大小关系排除一半区间。这个排除操作依赖序列已经有序，如果序列无序，中间元素的大小不能说明目标落在哪一半，查找无法保证正确，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_11",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个长度为n的有序数组nums（元素唯一），下面的函数返回target的索引。关于上述函数，描述不正确的是（  ）。\nint binarySearch(...) {\nif (left > right) return -1;\nint middle = left + (right - left) / 2;\nif (nums[middle] == target) return middle;\nelse if (nums[middle] < target) return binarySearch(..., middle+1, right);\nelse return binarySearch(..., left, middle-1);\n}",
          "options": [
            "A. 函数采用二分查找，每次根据中点的元素值排除一半搜索区间",
            "B. 函数采用递归求解，每次问题的规模减小一半",
            "C. 递归的终止条件是中间元素的值等于target，若数组中不包含该元素，递归不会终止",
            "D. 算法的复杂度为O(log n)"
          ],
          "answer": 2,
          "explanation": "当数组中不包含target时，递归会把搜索区间不断缩小：要么target大于中点而收缩到右半，要么小于中点而收缩到左半。最终区间为空（left>right）触发基线条件返回-1，递归一定会终止。C说“递归不会终止”是错误的，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_12",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个长度为n的有序数组nums（可能包含重复元素），下面的函数返回target的左边界，若不存在返回-1。例如nums=[5,7,7,8,8,10]中查target=8，返回索引3。则横线上应填写的代码为（  ）。\nwhile (left < right) {\nint middle = left + (right - left) / 2;\nif (target <= nums[middle])\n____________  // 在此处填入代码\nelse\nleft = middle + 1;\n}",
          "options": [
            "A. right = middle - 1;",
            "B. right = middle;",
            "C. right = middle + 1;",
            "D. 以上都不对"
          ],
          "answer": 1,
          "explanation": "要寻找最左边的target，当target<=nums[middle]时middle仍可能是左边界，所以收缩右边界时要保留middle：right=middle；否则排除middle：left=middle+1。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_23",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找仅适用于数组而不适合链表，因为二分查找需要跳跃式访问元素，链表中执行跳跃式访问的效率低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二分查找每次需要跳到当前区间的中间位置访问元素。数组支持O(1)的下标随机访问，可以高效地完成；而链表只能从头顺序遍历，跳到中间位置需要O(n)时间，效率很低。所以二分查找适合数组而不适合链表，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_24",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "对有序数组{5,13,19,21,37,56,64,75,88,92,100}进行二分查找，成功查找元素19的比较次数是2。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组{5,13,19,21,37,56,64,75,88,92,100}共11个元素。第一次取mid=5（56），19小于56，右边界移到4；第二次取mid=2（19）正好命中，共比较2次。所以“成功查找元素19的比较次数是2”的说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_11",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "若用二分法在[1, 100]内猜数，最多需要猜（  ）次。",
          "options": [
            "A. 100",
            "B. 10",
            "C. 7",
            "D. 5"
          ],
          "answer": 2,
          "explanation": "二分法每次根据提示排除当前范围的一半，最坏情况下需要猜的次数是⌈log2 100⌉。因为2^6=64<100≤128=2^7，所以最多需要7次就能确定[1,100]内的任意整数，故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_12",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了二分查找算法，在数组arr找到目标元素target的位置，则横线上能填写的最佳代码是（  ）。\nint binarySearch(int arr[], int left, int right, int target) {\nwhile (left <= right) {\n____________  // 在此处填入代码\nif (arr[mid] == target) return mid;\nelse if (arr[mid] < target) left = mid + 1;\nelse right = mid - 1;\n}\nreturn -1;\n}",
          "options": [
            "A. int mid = left + (right - left) / 2;",
            "B. int mid = left;",
            "C. int mid = (left + right) / 2;",
            "D. int mid = right;"
          ],
          "answer": 0,
          "explanation": "二分查找每次计算当前区间的中点下标，通常写成(left+right)/2。写成left+(right-left)/2可以避免left和right都很大时相加发生整数溢出，是更稳妥的最佳写法，因此横线处应填选项A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_23",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找适用于对无序数组和有序数组的查找。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二分查找依靠“序列有序”这一前提，每次把中间元素与目标比较后排除一半区间。如果数组无序，中间元素的大小无法可靠地判断目标在左半还是右半，查找结果无法保证正确，所以二分查找不适用于无序数组，说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_11",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码用于在升序数组 lst 中查找目标值 target 最后一次出现的位置。相关说法，正确的是（   ）。",
          "options": [
            "A. 当lst中存在重复的target时，该函数总能返回最后一个target的位置，即便lst全由相同元素组成",
            "B. 当target小于lst中所有元素时，该函数会返回0",
            "C. 循环条件改为while (low <= high) 程序执行效果相同，且能提高准确性",
            "D. 将代码中(low + high + 1) / 2 修改为(low + high) / 2 效果相同"
          ],
          "answer": 0,
          "explanation": "代码用 (low+high+1)/2 向上取整，配合 low=mid，能定位到最右一个等于 target 的位置。target 小于全部元素时返回 -1 而非 0；把 mid 改成向下取整配合 low=mid 会死循环，故选 A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_12",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，错误的是（    ）。",
          "options": [
            "A. “阶段1”的目标是寻找正整数n可能的正完全平方根",
            "B. “阶段2”的目标是如果正整数n没有正完全平方根，则在可能产生完全平方根附近寻找带小数点的平方根",
            "C. 代码check_int = (long long)(result + 0.5) 是检查因浮点误差是否为正完全平方根",
            "D. 阶段2的二分法中 high_d - low_d >= epsilon 不能用于浮点数比较，会进入死循环"
          ],
          "answer": 3,
          "explanation": "阶段2 的二分区间每次缩小一半，当区间小于 epsilon 时循环自然结束，不会死循环，用差值判断收敛是常见做法，故 D 说法错误。所以 D 中“会进入死循环”的说法不成立。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_21",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "查字典这个小学生必备技能，可以把字典视为一个已排序的数组。假设小杨要查找一个音首字母为g的单词，他首先翻到字典约一半的页数，发现该页的首字母是m，由于字母表中g位于m之前，所以排除字典后半部分，查找范围缩小到前半部分；不断重复上述步骤，直至找到首字母为g的页码。这种查字典的一系列操作可看作二分查找。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字典按字母有序排列，每次翻到中间页并与目标比较，排除一半范围继续查找，正是二分查找的思想。每次比较后排除一半，正是二分查找的本质。这与在有序数组中二分查找目标完全同构。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_26",
          "kp": "kp5_07",
          "type": "coding",
          "difficulty": 1,
          "question": "班主任给上课专心听讲、认真完成作业的同学们分别发放了若干张课堂优秀券和作业优秀券。同学们可以使用这些券兑换奖品：用 a 张课堂优秀券和 b 张作业优秀券可以兑换一份奖品，或者用 b 张课堂优秀券和 a 张作业优秀券也可以兑换一份奖品。现在小A有 n 张课堂优秀券和 m 张作业优秀券，他最多能兑换多少份奖品呢？",
          "options": null,
          "answer": null,
          "explanation": "思路：总票数固定，每份奖品消耗 a+b 张券。对答案 v 二分：若兑换 v 份，先按一种方式分配，若作业券超出 m，就把若干份从 (a,b) 换成 (b,a) 来平衡，检查课堂券和作业券是否都够用。check 满足则放大 v，否则缩小。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nint n, m, a, b;\nint l, r;\nint check(int v) {\n    long long x, y, t;\n    x = 1ll * v * a;\n    y = 1ll * v * b;\n    if (y > m) {\n        t = (y - m + (b - a) - 1) / (b - a);\n        y -= t * (b - a);\n        x += t * (b - a);\n    }\n    return x <= n && y <= m;\n}\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    scanf(\"%d%d\", &a, &b);\n    if (n > m) swap(n, m);\n    if (a > b) swap(a, b);\n    if (a == b) { printf(\"%d\\n\", n / a); return 0; }\n    l = 0; r = n;\n    while (l < r) {\n        int mid = (l + r + 1) >> 1;\n        if (check(mid)) l = mid;\n        else r = mid - 1;\n    }\n    printf(\"%d\\n\", r);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "8 8\n2 1",
              "expectedOutput": "5"
            },
            {
              "input": "314159 2653589\n27 1828",
              "expectedOutput": "1599"
            }
          ]
        },
        {
          "id": "l5_202509_10",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个 n x n 的矩阵 matrix，矩阵的每一行和每一列都按升序排列。函数countLE返回矩阵中第 k 小的元素，则两处横线上应分别填写（   ）。",
          "options": [
            "A. hi = mid - 1; lo = mid + 1;",
            "B. hi = mid; lo = mid;",
            "C. hi = mid; lo = mid + 1;",
            "D. hi = mid + 1; lo = mid;"
          ],
          "answer": 2,
          "explanation": "要查找最小 mid 使 <=mid 的元素个数 >= k。若 countLE>=k 则答案在左半，hi=mid；否则 lo=mid+1，故选 C。这样二分在 [lo,hi) 上收敛到第 k 小的值。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_20",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找依赖数据的有序性，通过循环逐步缩减一半搜索区间来进行查找，且仅适用于数组或基于数组实现的数据结构。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二分需要 O(1) 随机访问中间元素，数组满足而链表不满足，说法正确。链表不支持 O(1) 随机访问，无法直接二分。二分查找的前提是能 O(1) 取得中间元素。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_11",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码尝试在有序数组中查找第一个大于等于 x 的元素位置。如果没有大于等于 x 的元素，返回 arr.size()。以下说法正确的是（   ）。",
          "options": [
            "A. 上述代码逻辑正确",
            "B. 上述代码逻辑错误，while 循环条件应该用 l <= r",
            "C. 上述代码逻辑错误，mid 计算错误",
            "D. 上述代码逻辑错误，边界条件不对"
          ],
          "answer": 0,
          "explanation": "l=0、r=size，while(l<r)，arr[mid]>=x 时 r=mid，否则 l=mid+1，能正确返回第一个 >=x 的位置，逻辑正确。当所有元素小于 x 时 l 会递增到 size，返回正确。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_12",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨要把一根长度为 L 的木头切成 K 段，使得每段长度小于等于 x。已知每切一刀只能把一段木头分成两段，他用二分法找到满足条件的最小 x（x 为正整数），则横线处应填写（   ）。",
          "options": [
            "A. if (check(L, K, mid)) r = mid; else l = mid + 1;",
            "B. if (check(L, K, mid)) r = mid+1; else l = mid + 1;",
            "C. if (check(L, K, mid)) r = mid + 1; else l = mid - 1;",
            "D. if (check(L, K, mid)) r = mid + 1; else l = mid;"
          ],
          "answer": 0,
          "explanation": "找最小可行 x：check 成立说明 x 还能再小，r=mid；不成立说明 x 太小，l=mid+1，故选 A。check 成立说明当前 x 可行，可继续尝试更小的值。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_20",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找仅适用于有序数据。若输入数据无序，当仅进行一次查找时，为了使用二分而排序通常不划算。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "排序 O(n log n) 比线性查找 O(n) 还慢，仅查一次时先排序再二分不划算，正确。一次查找直接线性扫描即可，无需先排序。对单次查询，直接线性扫描更省时间。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_26",
          "kp": "kp5_07",
          "type": "coding",
          "difficulty": 1,
          "question": "小A有一个包含 n 个正整数的序列，序列恰好包含 n/2 对不同的正整数，每个数字恰好出现两次。小A希望每对相同的数字在序列中相邻。每次操作可选择任意一个数字移动到任意位置，并花费等于该数字数值的体力。求一个最小的 k，使得在每次花费的体力均不超过 k 的情况下可以让每对相同数字相邻。",
          "options": null,
          "answer": null,
          "explanation": "思路：对答案 k 二分。若移动的数字大于 k 则付不起体力，只需考虑所有值大于 k 的数字，取出它们的排列；若第 0 与第 1、第 2 与第 3…每相邻两个都相等，说明这些“贵”数字能原地配对，则可行。最小 k 用二分求出。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nconst int N = 100010;\nint a[N];\nint b[N];\nint pos;\nint main(){\n    int n;\n    cin >> n;\n    for(int i = 0; i < n; i++){\n        cin >> a[i];\n    }\n    int left = 1, right = 1e6, ans = 1e6;\n    while(left <= right){\n        int mid = (left + right) / 2;\n        bool possible = true;\n        pos = 0;\n        for(int i = 0; i < n; i++){\n            if(a[i]>mid){\n                b[pos++]=a[i];\n            }\n        }\n        for(int i = 0; i < pos; i += 2){\n            if(b[i]!=b[i+1]){\n                possible = false;\n                break;\n            }\n        }\n        if(possible){\n            ans = mid;\n            right = mid - 1;\n        } else {\n            left = mid + 1;\n        }\n    }\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\n1 2 1 3 2 3",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l5_202603_07",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的运行结果为（   ）。",
          "options": [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 5"
          ],
          "answer": 1,
          "explanation": "排序得 {1,2,4,8,9}，二分最大最小间距：dist=4 只能放 2 个点；dist=3 可放 1、4、8 共 3 个；dist=4 不行，故答案为 3。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_08",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在升序数组中查找第一个大于等于 x 的位置，下面循环中横线应填（   ）。",
          "options": [
            "A. r = mid;",
            "B. r = mid - 1;",
            "C. l = mid;",
            "D. l = mid + 1;"
          ],
          "answer": 0,
          "explanation": "a[mid]>=x 说明答案在左半含 mid，r=mid，配合 l=mid+1 找到第一个 >=x 的位置，选 A。r=mid 保证不遗漏 mid 这个候选位置。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_10",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定 n 根木头，第 i 根长度为 a[i]。要切成不少于 m 段等长木段，求最大可能长度，则横线上应填写（   ）。",
          "options": [
            "A. l = mid + 1; r = mid - 1;",
            "B. l = mid - 1; r = mid + 1;",
            "C. l = mid + 1; r = mid;",
            "D. l = mid; r = mid + 1;"
          ],
          "answer": 0,
          "explanation": "若能切成不少于 m 段，则答案还可更大，l=mid+1；否则 r=mid-1，故选 A。二分答案在可行区间上不断逼近最大值。当 check 不成立说明段太长，需缩小长度。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_17",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "若数组 a 已按升序排列，则下面的代码可以正确实现“在 a 中查找第一个大于等于 x 的元素的位置”。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "l=0、r=size，while(l<r)，a[mid]>=x 时 r=mid，否则 l=mid+1，返回 l，正确实现下界查找。该代码是标准的下界二分查找实现。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_27",
          "kp": "kp5_07",
          "type": "coding",
          "difficulty": 1,
          "question": "给定一个包含 n 个互不相同的正整数的数组 a 与一个包含 m 个互不相同的正整数的数组 b，请你帮忙计算有多少数在数组 a 与数组 b 中均出现。",
          "options": null,
          "answer": null,
          "explanation": "思路：对 a 排序，对 b 中每个数在 a 上做二分查找，找到则计数加一，输出计数。时间复杂度为 O(m log n)。对每个 b 在排序后的 a 中二分查找，判断是否存在。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint main() {\n    int n, m, l, r, mid;\n    bool ok;\n    cin >> n >> m;\n    vector<int> a(n);\n    for(int i = 0; i < n; i++)\n        cin >> a[i];\n    sort(a.begin(), a.end());\n    int ans = 0;\n    for(int i = 0, b; i < m; i++) {\n        cin >> b;\n        ok = false;\n        l = 0;\n        r = n-1;\n        while(l <= r) {\n            mid = l + (r-l)/2;\n            if(a[mid] > b) r = mid - 1;\n            else if(a[mid] < b) l = mid + 1;\n            else { ok = true; break; }\n        }\n        if(ok) ans++;\n    }\n    cout << ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5\n4 2 3\n3 1 5 4 6",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l5_202606_09",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个有序数组中查找第一个大于或等于 x 的元素位置，横线处应填写（   ）。",
          "options": [
            "A. r = mid + 1",
            "B. r = mid - 1",
            "C. r = mid",
            "D. l = mid"
          ],
          "answer": 2,
          "explanation": "a[mid]>=x 时把右边界收到 mid，r=mid，才能找到第一个 >=x 的位置，选 C。r=mid 保留候选，配合 l=mid+1 收敛到第一个大于等于 x 的位置。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_10",
          "kp": "kp5_07",
          "type": "choice",
          "difficulty": 1,
          "question": "有若干根木头，长度存于 wood。每切一刀可以把一段木头分成两段。函数 check(wood, K, x) 返回：用不超过 K 刀能否使所有木段长度都不超过 x。下面代码使用二分答案查找最小可行的 x，横线处应填（   ）。",
          "options": [
            "A. r = mid + 1",
            "B. r = mid",
            "C. l = mid",
            "D. r = mid - 1"
          ],
          "answer": 1,
          "explanation": "找最小可行 x，check 成立则答案不大于 mid，r=mid；不成立则 l=mid+1，选 B。check 成立说明答案还能更小，收缩右边界。二分答案在单调的 check 函数上找最小可行解。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_22",
          "kp": "kp5_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二分查找不仅可以应用于有序数组，也可以在不增加时间复杂度的情况下应用于有序的单链表，因为链表也支持 O(1) 时间内的随机访问。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "链表不支持 O(1) 随机访问，每次取中间元素需遍历，二分在链表上效率反而变差，说法错误。二分需要随机访问能力，链表不具备。链表取中需遍历 O(n)，二分总代价反升为 O(n log n)。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_08": {
      "title": "贪心算法",
      "questions": [
        {
          "id": "l5_202309_21",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法的解可能不是最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心算法每一步都只做当前看起来最好的选择，不回头重新考虑前面的决定，因此它只保证局部最优，不能保证得到全局最优解，它的解可能不是最优解。这是贪心算法的重要特点，所以这道题的说法是正确的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_27",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "巧夺大奖\n问题描述：小明参加了一个巧夺大奖的游戏节目。主持人宣布了游戏规则：\n(1) 游戏分为n个时间段，参加者每个时间段可以选择一个小游戏。\n(2) 游戏中共有n个小游戏可供选择。\n(3) 每个小游戏有规定的时限和奖励。对于第i个小游戏，参加者必须在第Ti个时间段结束前完成才能得到奖励Ri。\n小明发现，这些小游戏都很简单，不管选择哪个小游戏，他都能在一个时间段内完成。关键问题在于，如何安排每个时间段分别选择哪个小游戏，才能使得总奖励最高？\n输入描述：输入第一行，包含一个正整数n。n既是游戏时间段的个数，也是小游戏的个数。约定1≤n≤500。输入第二行，包含n个正整数，第i个正整数为Ti，即第i个小游戏的完成期限。约定1≤Ti≤n。输入第三行，包含n个正整数，第i个正整数为Ri，即第i个小游戏的完成奖励。约定1≤Ri≤1000。\n输出描述：输出一行，包含一个正整数C，为最高可获得的奖励。",
          "options": [],
          "answer": null,
          "explanation": "思路：采用贪心策略。奖励高的游戏优先完成：先把所有游戏按奖励从大到小排序，然后逐个处理。对每个游戏，在1到Ti的时间段里从后往前找一个还没被占用的空闲时间段，安排进去并累加奖励；若1到Ti全部被占用，说明这个游戏无法完成，跳过。用bool数组标记各时间段是否被占用。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint n = 0;\nstruct game_t {\n    int T, R;\n} games[500];\nbool game_cmp(game_t x, game_t y){\n    return x.R > y.R;\n}\nbool arrange[500];\nint main() {\n    cin >> n;\n    for (int i = 0; i < n; i++)\n        arrange[i] = false;\n    for (int i = 0; i < n; i++)\n        cin >> games[i].T;\n    for (int i = 0; i < n; i++)\n        cin >> games[i].R;\n    sort(games, games + n, game_cmp);\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        for (int t = games[i].T - 1; t >= 0; t--)\n            if (!arrange[t]) {\n                arrange[t] = true;\n                sum += games[i].R;\n                break;\n            }\n    }\n    cout << sum << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "7\n4 2 4 3 1 4 6\n70 60 50 40 30 20 10",
              "expectedOutput": "230"
            }
          ]
        },
        {
          "id": "l5_202312_19",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法可以达到局部最优，但可能不是全局最优解。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心算法每一步都选择当前局部最优的方案，做完一步就不再回头调整，所以它只能保证局部最优，不能保证得到全局最优解，最终求出的解可能并不是最优解。这是贪心算法的基本特点，这道题的说法是正确的。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_27",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "烹饪问题\n问题描述：有N种食材，编号从0至N-1，其中第i种食材的美味度为aᵢ。不同食材之间的组合可能产生奇妙的化学反应。具体来说，如果两种食材的美味度分别为x和y，那么它们的契合度为x and y。其中，and运算为按位与运算，需要先将两个运算数转换为二进制，然后在高位补足0，再逐位进行与运算。例如，12与6的二进制表示分别为1100和0110，将它们逐位进行与运算，得到0100，转换为十进制得到4，因此12 and 6 = 4。在C++或Python中，可以直接使用&运算符表示与运算。现在，请你找到契合度最高的两种食材，并输出它们的契合度。\n输入描述：第一行一个整数N，表示食材的种数。接下来一行N个用空格隔开的整数，依次为a₀，…，aᵤ₋₁，表示各种食材的美味度。\n输出描述：输出一行一个整数，表示最高的契合度。\n特别提醒：在常规程序中，输入、输出时提供提示是好习惯。但在本场考试中，由于系统限定，请不要在输入、输出中附带任何提示信息。",
          "options": [],
          "answer": null,
          "explanation": "思路：两个数按位与的结果，二进制位越高是1，数值越大。从最高位（第31位）往最低位扫描：调用part把当前区间中“该位为1”的数都放到左边，若该位为1的数至少有2个，说明答案的这位可以取1，累加进ans，并只保留这些数继续往下看；否则这位取0。用快速排序式的划分实现，每次区间按当前位一分为二，总复杂度约O(N×31)。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include<cstdio>\n#include<iostream>\n#include<algorithm>\n#include<cstdlib>\n#include<cstring>\nusing namespace std;\nconst int MAX_N = int(1e6) + 100;\nint a[MAX_N];\nint part(int l,int r,int k) {\n    while(l <= r) {\n        while ((l <= r) && (a[l] >> k & 1)) l++;\n        while ((l <= r) && (!(a[r] >> k & 1))) r--;\n        if (l <= r) swap(a[l++], a[r--]);\n    }\n    return r;\n}\nint main() {\n    int n, j, ans=0;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 31; i >= 0; i--)\n        if ((j = part(1, n, i)) >= 2) {\n            ans = ans | 1 << i;\n            n = j;\n        }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 2 3",
              "expectedOutput": "2"
            },
            {
              "input": "5\n5 6 2 10 13",
              "expectedOutput": "8"
            }
          ]
        },
        {
          "id": "l5_202403_02",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "贪心算法的核心思想是（ ）。",
          "options": [
            "A. 在每一步选择中都做当前状态下的最优选择",
            "B. 在每一步选择中都选择局部最优解",
            "C. 在每一步选择中都选择全局最优解",
            "D. 以上都对"
          ],
          "answer": 0,
          "explanation": "贪心算法的核心是每一步都根据当前状态做出最优选择，并且不做回溯、不尝试所有可能的选择组合，因此它通常只能保证局部最优。选项C说“在每一步都选择全局最优解”是不对的，因为贪心并不具备全局视野。标准教材的表述是“每一步做当前状态下的最优选择”，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_19",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "使用贪心算法解决问题时，每一步的局部最优解一定会导致全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "贪心算法每一步都选择当前看起来最好的方案，这种局部最优的选择只有在问题满足“贪心选择性质”和“最优子结构”时才能累积出全局最优解。对于一般的优化问题，局部最优并不一定导致全局最优，所以“每一步的局部最优解一定会导致全局最优解”的说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_23",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法是一种可以应用于所有问题的通用解决方案。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "贪心算法只在问题具有贪心选择性质时才能保证得到最优解，比如活动安排、哈夫曼编码等问题。但对于很多优化问题，贪心选择会错过全局最优。因此贪心算法并不是能够应用于所有问题的通用解决方案，说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_02",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于将输入金额换成最少币种组合方案，其实现算法是(  )。",
          "options": [
            "A. 枚举算法",
            "B. 贪心算法",
            "C. 迭代算法",
            "D. 递归算法"
          ],
          "answer": 1,
          "explanation": "换零钱代码从面值最大的硬币开始，每次尽可能多地使用当前最大面值（money/coins[i]），再用余下的金额继续换较小的面值，整个过程每一步都选择当前看起来最好的方案并且不回溯。这是典型的贪心算法，故选B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_21",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法通过每一步选择局部最优解来获得全局最优解，但并不一定能找到最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心算法每一步都选择局部最优解，当问题满足贪心选择性质时，这些局部最优能累积成全局最优解；但很多问题不具备该性质，此时贪心并不一定能找到最优解。题干正确地指出了贪心不一定最优的特点，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_11",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "现在有n个人要过河，每只船最多载2人，船的承重为100kg。下列代码中，数组weight中保存有n个人的体重（已按从小到大排序），代码输出过河所需要的船的数目，采用的思想为（  ）。\nint count = 0;\nfor (i = 0, j = n - 1; i < j; j--) {\nif (weight[i] + weight[j] <= 100) i++;\ncount++;\n}",
          "options": [
            "A. 枚举算法",
            "B. 贪心算法",
            "C. 迭代算法",
            "D. 递归算法"
          ],
          "answer": 1,
          "explanation": "代码用两个指针i和j分别指向最轻和最重的人，如果最轻和最重的人能同船（体重和不超过100）就让i后移，否则最重的人单独坐船，无论哪种情况都增加一条船并让j前移。每一步都做出当前最优的安排，这是贪心算法，故选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_19",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法通过每一步选择局部最优解，从而一定能获得最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "贪心算法每一步选择局部最优解，只有在问题满足贪心选择性质时，局部最优才能累积成全局最优解。对于不具备该性质的问题，贪心选择可能导致偏离最优，所以“一定能获得最优解”的说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_26",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "小杨的武器\n问题描述：小杨有n种不同的武器，第i种武器的初始熟练度为c_i。小杨依次参加m场战斗，每场只能且必须选择一种武器使用，使用第i种武器参加第j场战斗后该武器熟练度会加上a_j（a_j可能是正数、0或负数）。求m场战斗后n种武器熟练度的最大值最大能是多少。\n输入格式：第一行两个正整数n,m。第二行n个正整数c_i。第三行m个整数a_j。\n输出格式：输出一个整数。",
          "options": [],
          "answer": null,
          "explanation": "思路：初始取所有武器熟练度的最大值mx。每场战斗的增益a_j若为正数，总能让最大值再增大a_j，所以把m场中所有正增益累加到mx上；若只有一种武器（n=1），则无论正负都必须累加。贪心累加后即为最优结果。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 100010;\nint a[N], c[N];\nint main(){\n    int n, m;\n    cin>>n>>m;\n    int mx = -10000;\n    for (int i = 1; i <= n; ++ i){\n        cin>>c[i];\n        mx = max(mx,c[i]);\n    }\n    for (int i = 1; i <= m; ++ i) cin>>a[i];\n    for (int i = 1; i <= m; ++ i){\n        if (n == 1 || a[i] > 0){\n            mx += a[i];\n        }\n    }\n    cout<<mx<<\"\\n\";\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 2\n9 9\n1 -1\n",
              "expectedOutput": "10\n"
            }
          ]
        },
        {
          "id": "l5_202412_13",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "数组g保存所有孩子的胃口值，数组s保存所有饼干的尺寸，饼干尺寸≥孩子胃口时孩子才能满足，目标是尽可能满足更多孩子（贪心）。则横线上应填写的代码为（  ）。\nfor (int i = g.size()-1; i >= 0; i--) {\nif (index >= 0 && s[index] >= g[i]) {\n____________  // 在此处填入代码\n}\n}",
          "options": [
            "A. result++;  index--;",
            "B. result--;  index--;",
            "C. result--;  index++;",
            "D. result++;  index++;"
          ],
          "answer": 0,
          "explanation": "代码从胃口最大的孩子开始，用当前最大的饼干去满足他：如果s[index]>=g[i]，就说明这块饼干能让他满足，满足人数result加1，同时index--换到下一块稍小的饼干。所以横线处应填result++; index--，故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_19",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法通过每一步选择当前最优解，从而一定能获得全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "贪心算法每一步选择当前看起来最优的方案，只有在问题满足贪心选择性质时，局部最优才能保证累积成全局最优。对于其他问题，贪心选择可能不是最优解，所以“一定能获得全局最优解”的说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_27",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "武器强化\n问题描述：小杨有n种武器和m种强化材料。第i种材料适配第p_i种武器，可以花费c_i金币将该材料对应的适配武器改为任意武器。小杨最喜欢第1种武器，希望适配第1种武器的材料数严格大于其他所有武器。求最少需要花费多少金币。\n输入格式：第一行两个正整数n,m。之后m行，每行两个正整数p_i,c_i。\n输出格式：输出一个整数，代表最少花费。",
          "options": [],
          "answer": null,
          "explanation": "思路：枚举第1种武器最终的材料数aim（从初始数量到m）。对每把其他武器，若其材料数超过aim-1，就必须把超出的部分按花费从小到大改成武器1；改完后若第1种武器还不够aim个，再从未改动的材料中挑最便宜的补齐。对每个aim求花费，取最小值。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\n#define ll long long\nint n, m;\nint cnt[1010];\nvector<int> cs[1010];\nll calc(int aim) {\n    int cur_cnt = cnt[1];\n    ll res = 0;\n    vector<int> tmp;\n    for (int i = 2; i<=n; i++) {\n        int buy = max((int)cs[i].size() - aim + 1, 0);\n        for (int j = 0; j < buy; ++j) res += (ll)cs[i][j];\n        cur_cnt += buy;\n        for (int j = buy; j < cs[i].size(); ++j) tmp.push_back(cs[i][j]);\n    }\n    sort(tmp.begin(), tmp.end());\n    for (int i = 0; i < aim - cur_cnt; i++) res += (ll)tmp[i];\n    return res;\n}\nsigned main() {\n    cin >> n >> m;\n    for (int i = 1; i <=m; i++) {\n        int p, c;\n        cin >> p >> c;\n        cnt[p]++;\n        cs[p].push_back(c);\n    }\n    for (int i = 1; i <=n; i++) sort(cs[i].begin(), cs[i].end());\n    ll ans = 1e18;\n    for (int i = max(cnt[1], 1); i <= m; ++i) ans = min(ans, calc(i));\n    cout << ans << \"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 4\n1 1\n2 1\n3 1\n3 2\n",
              "expectedOutput": "1\n"
            }
          ]
        },
        {
          "id": "l5_202503_13",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "贪心算法的核心特征是（  ）。",
          "options": [
            "A. 总是选择当前最优解",
            "B. 回溯尝试所有可能",
            "C. 分阶段解决子问题",
            "D. 总能找到最优解"
          ],
          "answer": 0,
          "explanation": "贪心算法的核心特征是每一步都选择当前状态下看起来最优的方案，并且不回溯、不尝试所有可能。选项B“回溯尝试所有可能”是回溯算法；C是分治；D“总能找到最优解”并不成立。故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_19",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法通过每一步选择当前最优解，从而一定能获得全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "贪心算法每一步都选择当前看起来最优的方案，这种局部最优的选择只有在问题满足贪心选择性质时才能得到全局最优解。对于其他优化问题，贪心选择的结果可能不是最优，所以“一定能获得全局最优解”的说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_24",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨有100元去超市买东西，每个商品有各自的价格，每种商品只能买1个，小杨的目标是买到最多数量的商品。小杨采用的策略是每次挑价格最低的商品买，这体现了分治思想。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "每次挑价格最低的商品购买，每一步都选择当前看起来最便宜的方案，这是典型的贪心策略，目的是在有限的金钱内买到最多的商品。题干说这体现了“分治思想”是错误的，它体现的是贪心思想。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_26",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "平均分配\n问题描述：小A有2n件物品，小B和小C各买走恰好n件。对第i件物品，小B出价b_i，小C出价c_i。求小A卖出这2n件物品能获得的最大收入。\n输入格式：第一行一个正整数n。第二行2n个整数b_i。第三行2n个整数c_i。\n输出格式：一行一个整数表示答案。",
          "options": [],
          "answer": null,
          "explanation": "思路：先假设全部卖给B，收入为∑b_i；第i件改卖给C会多赚d_i=c_i-b_i。由于B、C各买n件，等价于从2n件中选恰好n件卖给C。为让总收入最大，把d_i从大到小排序，选前n个最大的d_i加到总收入上即可。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 2e5 + 5;\nint n;\nlong long b[N], c[N], d[N];\nlong long ans;\nint main() {\n    scanf(\"%d\", &n);\n    assert(1 <= n && n <= 1e5);\n    for (int i = 1; i <= 2 * n; i++) scanf(\"%lld\", &b[i]);\n    for (int i = 1; i <= 2 * n; i++) scanf(\"%lld\", &c[i]);\n    for (int i = 1; i <= 2 * n; i++) {\n        ans += b[i];\n        d[i] = c[i] - b[i];\n    }\n    sort(d + 1, d + 2 * n + 1);\n    for (int i = n + 1; i <= 2 * n; i++) ans += d[i];\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 3 5 6 8 10\n2 4 6 7 9 11\n",
              "expectedOutput": "36\n"
            },
            {
              "input": "2\n6 7 9 9\n1 2 10 12\n",
              "expectedOutput": "35\n"
            }
          ]
        },
        {
          "id": "l5_202506_13",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "硬币找零问题中要求找给客户最少的硬币。coins 存储可用硬币规格，单位为角，规格都小于10角，且一定有1角规格。amount 为要找零的金额，约定必须为1角的整数倍。下面是其实现代码，相关说法正确的是（    ）。",
          "options": [
            "A. 上述代码采用贪心算法实现",
            "B. 针对本题具体要求，上述代码总能找到最优解",
            "C. 上述代码采用枚举算法",
            "D. 上述代码采用分治算法"
          ],
          "answer": 0,
          "explanation": "代码每次取面值最大的硬币尽量多拿，是典型的贪心策略。本题问的是算法类型，A 正确；贪心对普通硬币系统不一定保证最优。本题只判断算法类型，A 正确；贪心在面额不成倍数关系时不一定最优。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_22",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "求解下图中A点到D点最短路径，其中A到B之间的12可以理解为距离。求解这样的问题常用Dijkstra算法，其思路是通过逐步选择当前距离起点最近的节点来求解非负权重图（如距离不能为负值）单源最短路径的算法。从该算法的描述可以看出，Dijkstra算法是贪心算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "Dijkstra 每步都选择当前距离起点最近且未确定的结点，做出局部最优选择，属于贪心思想。每一步都选当前最近的点做局部最优，体现贪心思想。它属于贪心思想，但不适用于含负权边的图。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_13",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "假设你是一家电影院的排片经理，只有一个放映厅。你有一个电影列表 movies，其中 movies[i] = [start_i, end_i] 表示第 i 部电影的开始和结束时间。请你找出最多能安排多少部不重叠的电影，则横线上应分别填写的代码为（   ）。",
          "options": [
            "A. a[0] < b[0] 和 lastEnd",
            "B. a[1] < b[1] 和 lastEnd",
            "C. a[0] < b[0] 和 movies[i][0]",
            "D. a[1] < b[1] 和 movies[i][0]"
          ],
          "answer": 1,
          "explanation": "活动安排贪心要先按结束时间排序（a[1]<b[1]），再不断选开始时间不早于上一场结束时间的电影，更新 lastEnd = movies[i][1]，故选 B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_25",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法总能得到全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心只做局部最优选择，不保证全局最优，很多问题贪心会得到次优解，说法错误。局部最优不等于全局最优，如硬币找零贪心可能失败。贪心只在满足贪心选择性质的问题中适用。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_14",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "给定若干个任务，每个任务有截止时间和利润，每个任务耗时 1 个时间单位、必须在截止时间前完成，且每个时间槽最多做 1 个任务。按利润从高到低排序尽量安排，则横线处应填写（   ）。",
          "options": [
            "A. slot[t] = true; totalProfit += task.profit;",
            "B. slot[t] = false; totalProfit += task.profit;",
            "C. slot[t] = true; totalProfit = task.profit;",
            "D. slot[t] = false; totalProfit = task.profit;"
          ],
          "answer": 0,
          "explanation": "找到空闲时间槽后要占用它（slot[t]=true），并把该任务利润累加到 totalProfit（+=），故选 A。从截止时间往前找第一个空闲槽，保证能按时完成。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_22",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法在每一步都做出当前看来最优的局部选择，并且一旦做出选择就不再回溯；而分治算法将问题分解为若干子问题分别求解，再将子问题的解合并得到原问题的解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "描述分别准确概括了贪心（局部最优、不回退）和分治（分解、求解、合并）的核心特征，正确。两者的核心特征描述都准确。两者是两种完全不同的算法设计策略。两种思想各有适用场景。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_25",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "使用贪心算法解决问题时，通过对每一步求局部最优解，最终一定能找到全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心不保证全局最优，许多问题需要回溯或动态规划，说法错误。如 0/1 背包等问题贪心无法得到全局最优。所以贪心不保证任何问题都能得到全局最优。故该说法不正确。贪心只在部分问题中适用，不能一概而论。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_23",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "若一个问题满足最优子结构性质，则一定可以用贪心算法得到最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心还要求贪心选择性质，只满足最优子结构不保证贪心最优，说法错误。最优子结构只是必要条件，还需贪心选择性质。因此满足最优子结构不等于贪心一定最优。故原命题不成立。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_14",
          "kp": "kp5_08",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在学校义卖会上负责打包“零食盲盒”。每个盲盒重量不同，快递盒最多承重 limit 克，每个快递盒最多装两个盲盒。策略：每次把最轻的和最重的盲盒尝试放在一起，若重量之和不超过 limit 就一起装，否则最重的单独装一盒。下面代码用于计算最少需要多少个快递盒，则横线处应填入的是（   ）。",
          "options": [
            "A. l++;",
            "B. r--;",
            "C. l++; r--;",
            "D. boxes--;"
          ],
          "answer": 2,
          "explanation": "最轻和最重能一起装时，两者都打包，需 l++ 且 r--；否则最重单独装 r--，故选 C。两个都能装下时一次装箱，否则重的单独装箱。双指针向中间靠拢，直到所有盲盒都装完。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_21",
          "kp": "kp5_08",
          "type": "judge",
          "difficulty": 1,
          "question": "贪心算法只要每一步选择当前最优解，就一定能得到全局最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "贪心只保证局部最优，不保证全局最优，说法错误。贪心只在满足贪心选择性质时才能得到全局最优。例如找零钱问题贪心可能不是最优，故说法错误。故该判断错误。贪心缺少回溯，可能错过更优的全局方案。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_26",
          "kp": "kp5_08",
          "type": "coding",
          "difficulty": 1,
          "question": "老师正在和小朋友们分糖果。小朋友们先在自己的手上写一个数字，然后坐成一排。老师分发糖果的规则是：每个小朋友获得自己以及左侧所有小朋友的手上数字之和个糖果。请帮小朋友们安排合适的座位顺序，使得小朋友们分到的糖果总量最大，输出这个最大值。",
          "options": null,
          "answer": null,
          "explanation": "思路：越靠左的小朋友被累加的次数越多，应把大的数字放前面。按从大到小排序后求前缀和并累加，即糖果总量。样例排序为 9,8,7,5,3，前缀和 9+17+24+29+32=111。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint a[1010];\nvoid bubble_sort(int n) {\n    for (int i = 0; i < n; ++i) {\n        for (int j = 1; j < n - i; ++j) {\n            if (a[j - 1] < a[j])\n                swap(a[j - 1], a[j]);\n        }\n    }\n}\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; ++i)\n        cin >> a[i];\n    bubble_sort(n);\n    int ans = 0, sum = 0;\n    for (int i = 0; i < n; ++i) {\n        sum += a[i];\n        ans += sum;\n    }\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n7 5 8 9 3",
              "expectedOutput": "111"
            }
          ]
        }
      ]
    },
    "kp5_09": {
      "title": "分治算法",
      "questions": [
        {
          "id": "l5_202309_07",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "根据下面C++代码的注释，两个横线处应分别填入（ ）。\n#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nbool isOdd(int N) {\nreturn N % 2 == 1;\n}\nbool compare(int a, int b) {\nif (a % 2 == 0 && b % 2 == 1)\nreturn true;\nreturn false;\n}\nint main() {\nvector<int> lstA; // lstA是一个整型向量\nfor (int i = 1; i < 100; i++)\nlstA.push_back(i);\n// 对lstA成员按比较函数执行结果排序\nsort(lstA.begin(), lstA.end(), ________); // 此处填写代码1\nvector<int> lstB;\nfor (int i = 0; i < lstA.size(); i++) // lstB成员全为奇数\nif (____________) // 此处填写代码2\nlstB.push_back(lstA[i]);\nreturn 0;\n}",
          "options": [
            "A. compare和isOdd(lstA[i])",
            "B. compare(x1,y1)和isOdd",
            "C. compare和isOdd",
            "D. compare(x1,y1)和isOdd(lstA[i])"
          ],
          "answer": 0,
          "explanation": "sort的第三个参数要传比较规则函数，直接写函数名compare即可，不能写成调用的形式，所以排除B和D。第二个横线处要判断lstA[i]是否为奇数，需要调用isOdd并传入lstA[i]，写isOdd(lstA[i])，所以选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码用于归并排序，其中merge()函数被调用次数为（ ）。\n#include <iostream>\nusing namespace std;\nvoid mergeSort(int * listData, int start, int end);\nvoid merge(int * listData, int start, int middle, int end);\nvoid mergeSort(int * listData, int start, int end) {\nif (start >= end)\nreturn;\nint middle = (start + end) / 2;\nmergeSort(listData, start, middle);\nmergeSort(listData, middle + 1, end);\nmerge(listData, start, middle, end);\n}\nvoid merge(int * listData, int start, int middle, int end) {\nint leftSize = middle - start + 1;\nint rightSize = end - middle;\nint * left = new int[leftSize];\nint * right = new int[rightSize];\nfor (int i = 0; i < leftSize; i++)\nleft[i] = listData[start + i];\nfor (int j = 0; j < rightSize; j++)\nright[j] = listData[middle + 1 + j];\nint i = 0, j = 0, k = start;\nwhile (i < leftSize && j < rightSize) {\nif (left[i] <= right[j]) {\nlistData[k] = left[i];\ni++;\n} else {\nlistData[k] = right[j];\nj++;\n}\nk++;\n}\nwhile (i < leftSize) {\nlistData[k] = left[i];\ni++;\nk++;\n}\nwhile (j < rightSize) {\nlistData[k] = right[j];\nj++;\nk++;\n}\ndelete[] left;\ndelete[] right;\n}\nint main() {\nint lstA[] = {1, 3, 2, 7, 11, 5, 3};\nint size = sizeof(lstA) / sizeof(lstA[0]);\nmergeSort(lstA, 0, size - 1); // 对lstA执行归并排序\nfor (int i = 0; i < size; i++)\ncout << lstA[i] << \" \";\ncout << endl;\nreturn 0;\n}",
          "options": [
            "A. 0",
            "B. 1",
            "C. 6",
            "D. 7"
          ],
          "answer": 2,
          "explanation": "lstA共有7个元素。归并排序把数组不断对半分，每个内部结点对应一次merge调用，合并n个元素需要n-1次merge。7个元素形成7个叶子，内部结点为6个，所以merge被调用6次，选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_13",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在上题的归并排序算法中，mergeSort(listData, start, middle);和mergeSort(listData, middle + 1, end);涉及到的算法为（ ）。",
          "options": [
            "A. 搜索算法",
            "B. 分治算法",
            "C. 贪心算法",
            "D. 递推算法"
          ],
          "answer": 1,
          "explanation": "这两个调用把原数组从中间分成左右两个子数组，分别递归排序后再合并，正是把大问题拆成小问题、最后再合并结果的“分治”思想，所以选B。分治先把问题拆小，再分别解决，最后合并，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "归并排序算法的基本思想是（ ）。",
          "options": [
            "A. 将数组分成两个子数组，分别排序后再合并。",
            "B. 随机选择一个元素作为枢轴，将数组划分为两个部分。",
            "C. 从数组的最后一个元素开始，依次与前一个元素比较并交换位置。",
            "D. 比较相邻的两个元素，如果顺序错误就交换位置。"
          ],
          "answer": 0,
          "explanation": "归并排序的核心就是：把数组从中间分成两个子数组，各自排序后，再把两个有序子数组合并成一个有序数组。B是快速排序，C和D都不是归并的做法，所以选A。A描述的正是这种分而治之、合而为一的过程，故选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "一般说来，冒泡排序算法优于归并排序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序平均和最坏时间复杂度都是O(n²)，归并排序稳定在O(n log n)，数据量大时归并明显更快，所以“冒泡优于归并”的说法错误。所以冒泡优于归并的说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_23",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中的qsort库函数是不稳定排序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C标准库的qsort内部用快速排序实现。快速排序在划分时会把相等的元素互相交换位置，无法保证它们的相对顺序不变，属于不稳定排序。因此说C++的qsort是不稳定排序，这道题的说法是正确的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_02",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码以递归方式实现合并排序，并假设merge(int T[], int R[], int s, int m, int t)函数将有序（同样排序规则）的T[s..m]和T[m+1..t]归并到R[s..t]中。横线处应填上代码是( )。\nvoid mergeSort(int SList[], int TList[], int s, int t, int len)\n{\nif (s == t){\nTList[s] = SList[s];\nreturn;\n}\nint *T2 = new int[len]; // 保存中间结果\nint m = (s + t) / 2;\n_______________________________________________________________________________;\nmerge(T2, SList, s, m, t);\ndelete T2;\nreturn ;\n}",
          "options": [
            "A. mergeSort(SList, T2, s, m,len), mergeSort(SList, T2, m,t,len)",
            "B. mergeSort(SList, T2, s, m-1,len), mergeSort(SList, T2, m+1,t,len)",
            "C. mergeSort(SList, T2, s, m,len), mergeSort(SList, T2, m+1,t,len)",
            "D. mergeSort(SList, T2, s, m-1,len), mergeSort(SList, T2, m-1,t,len)"
          ],
          "answer": 2,
          "explanation": "归并排序先把序列一分为二：左半区间是[s,m]，右半区间是[m+1,t]。两半都递归排好后，再调用merge把它们合并。所以横线处填mergeSort(SList, T2, s, m, len)和mergeSort(SList, T2, m+1, t, len)，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_04",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++用于对lstA排序，使得偶数在前奇数在后，横线处应填入( )。\nbool isEven(int N)\n{\nreturn N % 2 == 0;\n}\nvoid swap(int &a, int &b)\n{\nint t;\nt=a,a=b,b=t;\nreturn;\n}\nvoid sortA(int lstA[], int n)\n{\nint i,j,t;\nfor (i = n-1; i > 0; i--)\nfor(j = 0; j < i; j++)\nif(__________________________)\nswap(lstA[j], lstA[j+1]);\nreturn;\n}",
          "options": [
            "A. !isEven(lstA[j]) && isEven(lstA[j+1])",
            "B. isEven(lstA[j]) && !isEven(lstA[j+1])",
            "C. lstA[j] > lstA[j+1]",
            "D. lstA[j] < lstA[j+1]"
          ],
          "answer": 0,
          "explanation": "要偶数在前、奇数在后，冒泡排序中当“前面的数是奇数、后面的数是偶数”时就应该交换，这样偶数逐渐往前冒。条件!isEven(lstA[j]) && isEven(lstA[j+1])正好表示lstA[j]是奇数、lstA[j+1]是偶数，选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_07",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码实现对list的快速排序，有关说法，错误的是（ ）。\nvector<int> operator +(vector<int>lA, vector<int>lB)\n{\nvector<int>lst;\nfor (int i = 1; i < lA.size(); i++)\nlst.push_back(lA[i]);\nfor (int i = 1; i < lB.size(); i++)\nlst.push_back(lB[i]);\nreturn lst;\n}\nvector<int>qSort(vector<int>lst)\n{\nif (lst.size() < 2)\nreturn lst;\nint pivot = lst[0];\nvector<int>less, greater;\nfor (int i = 1; i < lst.size(); i++)\nif (lst[i] <= pivot) less.push_back(lst[i]);\nelse greater.push_back(lst[i]);\nreturn _______________________________________________________________________;\n}",
          "options": [
            "A. qSort(less) + qSort(greater) +  (vector<int>)pivot",
            "B. (vector<int>)pivot + (qSort(less) + qSort(greater))",
            "C. (qSort(less) + (vector<int>)pivot + qSort(greater))",
            "D. qSort(less) + pivot + qSort(greater)"
          ],
          "answer": 2,
          "explanation": "快速排序选定pivot后，less保存不大于pivot的数，greater保存大于pivot的数。正确做法是把排好序的less放在最前、pivot放在中间、排好序的greater放在最后，且pivot要转成vector才能用重载的+拼接，所以应填选项C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_15",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的排序算法都要处理多趟数据，哪种排序算法不能保证在下一趟处理时从待处理数据中选出最大或最小的数据？（ ）",
          "options": [
            "A. 选择排序",
            "B. 快速排序",
            "C. 堆排序",
            "D. 冒泡排序"
          ],
          "answer": 1,
          "explanation": "选择排序每趟挑出最小（或最大）值，冒泡排序每趟让最大（或最小）值冒到一端，堆排序堆顶就是极值，它们都能确定地选出最值。快速排序每趟只把pivot放到正确位置，无法保证选出全局最大或最小，所以选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_16",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序的时间复杂度是O(N logN)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序把数组不断对半分，递归深度约log₂N层，每层合并总耗时O(N)，总时间复杂度是O(N logN)，说法正确。分log2N层，每层合并O(N)，总O(N logN)，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序有时比快速排序时间复杂度更低。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "当数据基本有序时，插入排序最快只要O(n)趟；而快速排序最坏情况（如每次pivot都选到最大或最小）复杂度会退化到O(n²)。所以插入排序确实有时比快速排序时间复杂度更低，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_23",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "对数组int arr[] = {2, 6, 3, 5, 4, 8, 1, 0, 9, 10}执行sort(arr, arr+10)，则执行后arr中的数据调整为{0, 1, 2, 3, 4, 5, 6, 8, 9, 10}。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sort默认按从小到大（升序）排序。原数组中的10个数从小到大排正好是0, 1, 2, 3, 4, 5, 6, 8, 9, 10，与题目给出的结果一致，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "归并排序的基本思想是（ ）。",
          "options": [
            "A. 动态规划",
            "B. 分治",
            "C. 贪心算法",
            "D. 回溯算法"
          ],
          "answer": 1,
          "explanation": "归并排序先把数组从中间分成两半，递归地把左右两半分别排序，再把两个已经有序的子序列合并成一个整体有序的序列。整个过程符合分治算法“分解—解决—合并”三个步骤，所以归并排序的基本思想是分治，故选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_13",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在快速排序中，选择的主元素（pivot）会影响算法的（ ）。",
          "options": [
            "A. 不影响",
            "B. 时间复杂度",
            "C. 空间复杂度",
            "D. 时间复杂度和空间复杂度"
          ],
          "answer": 1,
          "explanation": "快速排序的时间复杂度取决于基准元素选择的好坏：基准把区间分得越均匀越接近O(n log n)，选到边界元素会退化为O(n^2)。题目考察的是教科书标准结论：pivot影响时间复杂度，故选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_20",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "分治算法的核心思想是将一个大问题分解成多个相同或相似的子问题进行解决，最后合并得到原问题的解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "分治算法把一个大问题分解成若干个规模较小、结构与原问题相同的子问题，先分别解决这些子问题，再把子问题的解合并起来得到原问题的解。题干准确描述了这一“分解—解决—合并”的核心思想，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "分治算法的典型应用之一是归并排序，其时间复杂度为O(N log N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序把数组不断分成两半递归排序，最后把两个有序序列合并，是分治算法的典型应用。分治后每一层合并的代价是O(n)，递归深度是O(log n)，所以归并排序总的时间复杂度为O(n log n)，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_26",
          "kp": "kp5_09",
          "type": "coding",
          "difficulty": 1,
          "question": "成绩排序\n问题描述：有n名同学，每名同学有语文、数学、英语三科成绩。按如下规则对所有同学的成绩从高到低排序：1.比较总分，高者靠前；2.如果总分相同，则比较语文和数学两科总分，高者靠前；3.如果仍相同，则比较语文和数学两科的最高分，高者靠前；4.如果仍相同，则二人并列。输出每位同学的排名，若m人并列则排名相同，并留空后面的m-1个名次。\n输入描述：第一行一个整数n，表示人数。接下来n行，每行三个非负整数表示语文、数学、英语成绩。\n输出描述：输出n行，按输入同学的顺序输出各自的排名。",
          "options": [],
          "answer": null,
          "explanation": "思路：按规则构造排序关键字，用tuple保存(总分, 语数总分, 语数最高分, 原序号)。按关键字降序排序后从前往后计算排名：若当前三项与上一个相同则沿用当前排名（并列），否则排名更新为i+1。最后按原序号输出每个人的排名。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\n#include <tuple>\nusing namespace std;\nconst int MAX_N = 10005;\ntuple<int, int, int, int> students[MAX_N];\nint main() {\n    ios::sync_with_stdio(false);\n    int N;\n    cin >> N;\n    for (int i = 0; i < N; ++i) {\n        int c, m, e;\n        cin >> c >> m >> e;\n        students[i] = make_tuple(c + m + e, c + m, max(c, m), i);\n    }\n    sort(students, students + N, greater<tuple<int, int, int, int>>());\n    int rank[N];\n    int curr_rank;\n    tuple<int, int, int> last_student = make_tuple(-1, -1, -1);\n    for (int i = 0; i < N; ++i) {\n        if (make_tuple(get<0>(students[i]), get<1>(students[i]), get<2>(students[i])) != last_student) {\n            last_student = make_tuple(get<0>(students[i]), get<1>(students[i]), get<2>(students[i]));\n            curr_rank = i + 1;\n        }\n        rank[get<3>(students[i])] = curr_rank;\n    }\n    for (int i = 0; i < N; ++i) cout << rank[i] << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\n140 140 150\n140 149 140\n148 141 140\n141 148 140\n145 145 139\n0 0 0\n",
              "expectedOutput": "1\n3\n4\n4\n2\n6\n"
            }
          ]
        },
        {
          "id": "l5_202406_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "为了正确实现快速排序，下面横线上的代码应为（  ）。\nvoid qsort(vector<int>& arr, int left, int right) {\nint i=left, j=right, mid=(left+right)/2;\nint pivot = arr[mid];\ndo {\nwhile (arr[i] < pivot) i++;\nwhile (arr[j] > pivot) j--;\nif (i <= j) { swap(arr[i],arr[j]); i++; j--; }\n} ____________;  // 在此处填入代码\nif (left < j) qsort(arr, left, j);\nif (i < right) qsort(arr, i, right);\n}",
          "options": [
            "A. while (i <= mid)",
            "B. while (i < mid)",
            "C. while (i < j)",
            "D. while (i <= j)"
          ],
          "answer": 3,
          "explanation": "该快速排序采用do-while结构进行双向扫描：i从左向右跳过比pivot小的元素，j从右向左跳过比pivot大的元素，只要i<=j就交换两元素并继续扫描。循环继续的条件是i<=j，所以横线处应填while(i<=j)，故选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于分治算法，以下哪个说法正确？",
          "options": [
            "A. 分治算法将问题分成子问题，然后分别解决子问题，最后合并结果",
            "B. 归并排序不是分治算法的应用",
            "C. 分治算法通常用于解决小规模问题",
            "D. 分治算法的时间复杂度总是优于其他算法"
          ],
          "answer": 0,
          "explanation": "分治算法的标准步骤是：分解成子问题、分别解决子问题、合并子问题的解。A准确描述了这个过程。归并排序正是分治的典型应用，B错；分治通常用来解决大规模问题，C错；分治并不总是优于其他算法，D错。故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_13",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "设a和b是两个长度为n的有序数组，现将a和b合并成一个有序数组，归并排序算法在最坏情况下至少要做（  ）次比较。",
          "options": [
            "A. n^2",
            "B. n log n",
            "C. 2n - 1",
            "D. n"
          ],
          "answer": 2,
          "explanation": "合并两个各有n个元素的有序数组时，最坏情况下要一直交替比较，直到其中一个数组的元素全部被取完，这时共做了2n-1次比较，剩下的元素直接按顺序放入即可。所以最坏情况至少需要2n-1次比较，故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序和快速排序都采用递归实现，也都是不稳定排序。（  ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "归并排序和快速排序通常都用递归实现，但它们的稳定性不同：归并排序在合并时遇到相等元素会先取左半边的，相对次序保持不变，是稳定排序；快速排序在交换时可能打乱相等元素的次序，是不稳定排序。所以“都是不稳定排序”的说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_23",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序有时比快速排序时间复杂度更低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "当输入序列基本有序时，插入排序只需要很少的移动，时间可以接近O(n)；而快速排序在极端输入（如已有序且每次选到边界基准）下可能退化为O(n^2)。所以在特定输入下插入排序确实可能比快速排序更快，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_24",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "在进行全国人口普查时，将其分解为对每个省市县乡来进行普查和统计。这是典型的分治策略。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "全国人口普查把全国这个大任务，按照省、市、县、乡逐级划分成许多规模更小的子任务，各级分别完成普查和统计，最后再把结果逐级汇总，得到全国的数据。这种分解—解决—合并的模式是典型的分治策略，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_08",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "现在用如下代码来计算x^n（n个x相乘），其时间复杂度为（  ）。\ndouble quick_power(double x, unsigned n) {\nif (n == 0) return 1;\nif (n == 1) return x;\nreturn quick_power(x, n/2) * quick_power(x, n/2) * ((n & 1) ? x : 1);\n}",
          "options": [
            "A. O(n)",
            "B. O(n^2)",
            "C. O(log n)",
            "D. O(n log n)"
          ],
          "answer": 0,
          "explanation": "该“快速幂”每次递归调用两次quick_power(x,n/2)，递归树是满二叉树，总调用次数约n次，所以时间复杂度是O(n)，而不是优化后单次调用的O(log n)，故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "假设快速排序算法的输入是一个长度为n的已排序数组，且该快速排序算法在分治过程总是选择第一个元素作为基准元素。下面选项（  ）描述的是在这种情况下的快速排序行为。",
          "options": [
            "A. 快速排序对于此类输入的表现最好，因为数组已经排序",
            "B. 快速排序对于此类输入的时间复杂度是O(n log n)",
            "C. 快速排序对于此类输入的时间复杂度是O(n^2)",
            "D. 快速排序无法对此类数组进行排序，因为数组已经排序"
          ],
          "answer": 2,
          "explanation": "每次选第一个元素作基准，对已排序数组划分后基准总在区间边界，每轮只能排除一个元素，递归深度为n，总复杂度O(n^2)，是快排最坏情况，应选C。答案表给的B(O(n log n))与事实不符。 官方答案表为B，但已排序数组配首元素基准是快排最坏情况，复杂度为O(n²)，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "对长度为n的数组arr，调用函数merge_sort(a, 0, n-1)，在排序过程中merge_sort函数的递归调用次数大约是（  ）。",
          "options": [
            "A. O(1)",
            "B. O(n)",
            "C. O(log n)",
            "D. O(n log n)"
          ],
          "answer": 1,
          "explanation": "归并排序每次把区间分成两半递归排序，递归调用形成的树是一棵近似完全二叉树，有n个叶结点。一棵有n个叶子的二叉树共有2n-1个结点，也就是说merge_sort的递归调用次数约为2n-1次，数量级为O(n)，故选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于分治算法，以下哪个说法正确？",
          "options": [
            "A. 分治算法将问题分成子问题，然后分别解决子问题，最后合并结果",
            "B. 归并排序不是分治算法的应用",
            "C. 分治算法通常用于解决小规模问题",
            "D. 分治算法的时间复杂度总是优于其他算法"
          ],
          "answer": 0,
          "explanation": "分治算法的步骤是分解、解决、合并，A正确。归并排序是分治的典型应用（B错）；分治通常用来解决规模较大的问题（C错）；分治的复杂度取决于具体问题，并不总是优于其他算法（D错）。故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_20",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序和归并排序的平均时间复杂度均为O(n log n)，且都是稳定排序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快速排序和归并排序的平均时间复杂度都是O(n log n)，这一点正确；但稳定性不同：归并排序是稳定排序，快速排序在划分交换时会打乱相等元素的相对顺序，是不稳定排序。所以“都是稳定排序”的说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序的时间复杂度总是比快速排序低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "一般情况下快速排序的平均复杂度O(n log n)优于插入排序的O(n^2)，但插入排序在输入序列基本有序时可以达到接近O(n)，而快速排序此时可能退化到O(n^2)。所以“插入排序的时间复杂度总是比快速排序低”的说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "引入分治策略往往可以提升算法效率。一方面，分治策略减少了操作数量；另一方面，分治后有利于系统的并行优化。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "分治策略把规模为n的问题分解成规模更小的子问题，子问题分别解决后合并，往往能减少总的操作次数；而且各个子问题相互独立，可以分配给不同的处理器并行计算。所以引入分治策略往往能提升算法效率，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "考虑以下C++代码实现的快速排序算法，以下关于快速排序的说法，正确的是（  ）。",
          "options": [
            "A. 快速排序通过递归对子问题进行求解",
            "B. 快速排序的最坏时间复杂度是O(n)",
            "C. 快速排序是一个稳定的排序算法",
            "D. 在最优情况下，快速排序的时间复杂度是O(n)"
          ],
          "answer": 0,
          "explanation": "快速排序每次用基准把数组划分成左右两部分，再递归地对两部分排序，A正确。快排最坏情况（基准总选到边界）是O(n^2)，B错；快速排序是不稳定排序，C错；最优情况是O(n log n)而不是O(n)，D错。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于归并排序，描述正确的是（  ）。",
          "options": [
            "A. 归并排序是一个不稳定的排序算法",
            "B. 归并排序的时间复杂度在最优、最差和平均情况下都是O(n log n)",
            "C. 归并排序需要额外的O(1)空间",
            "D. 对于输入数组{12, 11, 13, 5, 6, 7}，代码输出结果为：7 6 5 13 12 11"
          ],
          "answer": 1,
          "explanation": "归并排序无论输入如何都要分成两半再合并，最优、最差、平均都是O(n log n)，且是稳定排序。C说额外空间O(1)错（实际O(n)），D输出降序错（应升序）。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于分治算法，以下说法中不正确的是（  ）。",
          "options": [
            "A. 分治算法将问题分成子问题，然后分别解决子问题，最后合并结果",
            "B. 归并排序采用了分治思想",
            "C. 快速排序采用了分治思想",
            "D. 冒泡排序采用了分治思想"
          ],
          "answer": 3,
          "explanation": "分治算法的特征是“分解—解决—合并”。归并排序和快速排序都先把问题划分成子区间再分别处理，都是分治思想的应用。而冒泡排序只是反复比较相邻元素并交换，没有分解子问题的过程，不属于分治，故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序和归并排序的平均时间复杂度均为O(n log n)，且都是稳定排序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快速排序和归并排序的平均时间复杂度都是O(n log n)，但稳定性不同：归并排序是稳定排序，快速排序在划分时会交换元素，可能打乱相等元素的相对顺序，是不稳定排序。所以“都是稳定排序”的说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序的时间复杂度总比插入排序的时间复杂度低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快速排序一般情况下比插入排序更快，但当数据规模很小或输入序列基本有序时，插入排序可以接近O(n)，而快速排序可能退化为O(n^2)，此时插入排序反而更快。所以“总比插入排序低”的说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下算法中，（  ）是不稳定的排序。",
          "options": [
            "A. 选择排序",
            "B. 插入排序",
            "C. 归并排序",
            "D. 冒泡排序"
          ],
          "answer": 0,
          "explanation": "选择排序每一趟选出剩余元素中的最小（或最大）值，与当前待排位置交换。交换时可能把相同元素中靠后的换到前面，打乱相等元素的相对顺序，因而是不稳定的。插入、归并、冒泡排序都是稳定的，故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "考虑以下C++代码实现的快速排序算法，将数据从小到大排序，则横线上应填的最佳代码是( )。\nint partition(vector<int>& arr, int low, int high) {\nint pivot = arr[high];\nint i = low - 1;\nfor (int j = low; j < high; j++) {\n____________  // 在此处填入代码\n}\nswap(arr[i + 1], arr[high]);\nreturn i + 1;\n}",
          "options": [
            "A. if (arr[j] > pivot) { i++; swap(arr[i], arr[j]); }",
            "B. if (arr[j] < pivot) { i++; swap(arr[i], arr[j]); }",
            "C. if (arr[j] < pivot) { swap(arr[i], arr[j]); i++; }",
            "D. if (arr[j] == pivot) { i++; swap(arr[i], arr[j]); }"
          ],
          "answer": 1,
          "explanation": "partition函数要把所有比pivot小的元素交换到左边：当arr[j]<pivot时，i先自增，再把arr[j]和arr[i]交换，使小元素逐步集中到左段；循环结束后把pivot交换到i+1位置。选项B的写法正确，故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "函数int findMax(int arr[], int low, int high)计算数组中最大元素（数组arr从索引low到high），（   ）正确实现了分治逻辑。\nA: if(low==high)return arr[low]; int mid=(low+high)/2; return arr[mid];\nB: if(low>=high)return arr[low]; ... return leftMax + rightMax;\nC: if(low>high)return 0; ... return leftMax * rightMax;\nD: if(low==high)return arr[low]; ... return (leftMax>rightMax)?leftMax:rightMax;",
          "options": [
            "A. if (low == high) return arr[low]; int mid = (low + high) / 2; return arr[mid];",
            "B. if (low >= high) return arr[low]; int mid=(low+high)/2; int leftMax=findMax(arr,low,mid-1); int rightMax=findMax(arr,mid,high); return leftMax + rightMax;",
            "C. if (low > high) return 0; int mid=low+(high-low)/2; int leftMax=findMax(arr,low,mid); int rightMax=findMax(arr,mid+1,high); return leftMax * rightMax;",
            "D. if (low == high) return arr[low]; int mid=low+(high-low)/2; int leftMax=findMax(arr,low,mid); int rightMax=findMax(arr,mid+1,high); return (leftMax > rightMax) ? leftMax : rightMax;"
          ],
          "answer": 3,
          "explanation": "分治求最大值：基线是区间只有一个元素时返回它，否则把区间分成左右两半递归求最大值，再返回两者中较大的。A直接返回中间值、B用加法、C用乘法且基线错误，只有D正确，故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序算法的时间复杂度与输入是否有序无关，始终稳定为O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快速排序的时间复杂度与输入数据的顺序密切相关：当输入已经有序且每次选择第一个元素作基准时，划分极不均衡，快速排序会退化为O(n^2)；只有当基准能把区间较均匀划分时才是O(n log n)。所以“与输入是否有序无关”的说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序算法的时间复杂度与输入是否有序无关，始终稳定为O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序无论如何划分，都要先把数组分成大小大致相等的两半，分别递归排序后再合并，划分结构固定。因此归并排序的最优、最差、平均时间复杂度都是O(n log n)，与输入数据的顺序无关，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_25",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序算法体现了分治算法，每次将大的待排序数组分成大小大致相等的两个小数组，然后分别对两个小数组进行排序，最后对排好序的两个小数组合并成有序数组。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序每次都把大的待排序数组分成大小大致相等的两个小数组，分别递归地对两个小数组排序，最后把两个有序的小数组合并成一个有序的大数组。整个过程完整地体现了分治算法“分解—解决—合并”的思想，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码，用于求一系列数据中的最大值。有关其算法说法错误的是（    ）。",
          "options": [
            "A. 该算法采用分治算法",
            "B. 该算法是递归实现",
            "C. 该算法采用贪心算法",
            "D. 该算法不是递推算法"
          ],
          "answer": 2,
          "explanation": "该函数把区间一分为二分别求最大值再合并，属于递归加分治，不是贪心，贪心也不会这样求最大值，故选 C。该函数把数组对半拆分，时间复杂度为 O(n)。它先递归求左右两半的最大值，再比较合并，这是典型的分治套路。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码，用于求一系列数据中的最大值。有关其算法说法错误的是（    ）。",
          "options": [
            "A. 本题find_max() 函数采用的是迭代算法",
            "B. 本题find_max() 函数的时间复杂度为 O(n)",
            "C. 本题find_max() 函数没有使用递归，因此不会因为递归调用层数过多而导致栈溢出。",
            "D. 本题find_max() 函数和上一题的find_max() 空间复杂度相同"
          ],
          "answer": 3,
          "explanation": "上一题是递归分治，递归深度约 O(log n)，需要栈空间；本题用循环迭代，只用 O(1) 辅助空间，两者空间复杂度不同，D 是错误说法。官方答案标为 C，但 C 表述正确，此处以计算为准。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下述C++代码的快速排序算法，说法错误的是（   ）。",
          "options": [
            "A. 在randomPartition函数中，变量i的作用是记录大于基准值的元素的边界",
            "B. randomPartition函数随机选择基准值，可以避免输入数据特定模式导致的最坏情况下时间复杂度",
            "C. 快速排序平均时间复杂度是 O(n log n)",
            "D. 快速排序是稳定排序算法"
          ],
          "answer": 3,
          "explanation": "快速排序划分时会交换相等元素和相隔较远的元素，不能保持相等元素的相对顺序，是不稳定排序，故 D 错误；其余说法均正确。只有归并等稳定排序才能保持相等元素的原始相对顺序。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_19",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码实现归并排序。代码在执行时，将输出一次HERE字符串，因为merge()函数仅被调用一次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序会把数组不断二分，每层多次合并，merge() 会被调用 n-1 次，HERE 也会输出多次，说法错误。因此“只输出一次 HERE、merge 只调用一次”的说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_20",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序的最好、最坏和平均时间复杂度均为 O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "归并排序无论数据如何都要递归二分并逐层合并，每层 O(n)、共 log n 层，三种情况都是 O(n log n)。这是归并排序区别于快速排序的重要特点。因为每次递归都把区间对半拆，总共 log n 层，每层合并 O(n)。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_23",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "分治算法将原问题可以分解成规模更小的子问题，使得求解问题的难度降低。但由于分治算法需要将问题进行分解，并且需要将多个子问题的解合并为原问题的解，所以分治算法的效率通常比直接求解原问题的效率低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "分治把大问题拆成小问题常常能提高效率，如归并排序 O(n log n) 远优于暴力 O(n²)，说分治效率通常更低是错误的。因此说分治效率通常更低是错误的。分治能把问题规模指数级缩小，效率常常不降反升。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_11",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下述C++代码实现了快速排序算法，下面说法错误的是（   ）。",
          "options": [
            "A. 快速排序之所以叫“快速”，是因为它在平均情况下运行速度较快，常数小、就地排序，实践中通常比归并排序更高效。",
            "B. 在平均情况下，划分的递归层数为 O(log n)，每层中的总循环数为 O(n)，总时间为 O(n log n)。",
            "C. 在最差情况下，每轮划分操作都将长度为 n 的数组划分为长度为 0 和 n-1 的两个子数组，此时递归层数达到 n，每层中的循环数为 O(n)，总时间为 O(n²)。",
            "D. 划分函数partition中“从右往左查找”与“从左往右查找”的顺序可以交换。"
          ],
          "answer": 3,
          "explanation": "先从左扫描时 i 会先停在大于基准的元素上，与先右后左的结果不同，可能把大于基准的元素换到左边，破坏正确性，因此顺序不能随意交换，D 错误。所以左右扫描顺序不能随意交换，D 错误。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下述C++代码实现了归并排序算法，则横线上应填写（   ）。",
          "options": [
            "A. i < mid",
            "B. j < right",
            "C. i <= mid",
            "D. j <= right"
          ],
          "answer": 3,
          "explanation": "左半复制完后，还需把右半剩余元素拷入临时数组，条件为 j <= right，选 D。注意这里的条件是 j<=right，不能写成 i 或 mid。若漏掉这步，右半剩余元素会丢失。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个整数数组nums，下面代码找到一个具有最大和的连续子数组，并返回该最大和。则下面说法错误的是（   ）。",
          "options": [
            "A. 上述代码采用分治算法实现",
            "B. 上述代码采用贪心算法",
            "C. 上述代码时间复杂度为 O(n log n)",
            "D. 上述代码采用递归方式实现"
          ],
          "answer": 1,
          "explanation": "代码把数组二分，分别求左右最大子段和，再求跨中间的和取最大，是递归分治，不是贪心，故选 B。跨中间的最大子段和单独计算，三者取最大。该分治算法时间复杂度为 O(n log n)，C 说法正确。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_22",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序和归并排序都是稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序稳定，但快速排序划分时交换会把相等元素顺序打乱，是不稳定排序，说法错误。快速排序交换远距离元素，破坏了稳定性。所以题目说“两者都稳定”是错误的。故该判断题应为错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_27",
          "kp": "kp5_09",
          "type": "coding",
          "difficulty": 1,
          "question": "如果一个正整数的二进制表示包含奇数个 1，那么小A就会认为这个正整数是有趣的。给定正整数 l、r，请你统计满足 l <= x <= r 的有趣的整数 x 之和。",
          "options": null,
          "answer": null,
          "explanation": "思路：用数位分治。cal(n,p) 统计 0..n 中二进制含奇数个 1（p=1）的数的个数与和。按最高位 1 的位置拆分，高位部分用公式直接算，低位部分递归并翻转奇偶性。答案为 cal(r,1) 减 cal(l-1,1)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nint l, r;\nlong long ans;\npair<int, long long> cal2(int n, int p) {\n    if (n == 0) { return {1 - p, 0}; }\n    if (n == 1) { return {1, p}; }\n    return {(n + 1) / 2, 1ll * n * (n + 1) / 4};\n}\npair<int, long long> cal(int n, int p) {\n    if (n <= 1) { return cal2(n, p); }\n    long long x = 1ll << (31 - __builtin_clz(n));\n    auto l = cal2(x - 1, p);\n    auto r = cal(n - x, 1 - p);\n    return {l.first + r.first, l.second + r.second + x * r.first};\n}\nint main() {\n    scanf(\"%d%d\", &l, &r);\n    ans -= cal(l - 1, 1).second;\n    ans += cal(r, 1).second;\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 8",
              "expectedOutput": "19"
            },
            {
              "input": "65 36248",
              "expectedOutput": "328505490"
            }
          ]
        },
        {
          "id": "l5_202512_08",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于排序的说法，正确的是（   ）。",
          "options": [
            "A. 快速排序是稳定排序",
            "B. 归并排序通常是稳定的",
            "C. 插入排序是不稳定排序",
            "D. 冒泡排序不是原地排序"
          ],
          "answer": 1,
          "explanation": "归并排序合并时相等元素先取左半，能保持相对顺序，是稳定的；快排不稳定，插入和冒泡稳定且冒泡是原地排序，故选 B。插入排序和冒泡排序也都属于稳定排序。稳定排序在相等元素多时能保持原有顺序。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_09",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了归并排序。下述关于归并排序的说法中，不正确的是（   ）。",
          "options": [
            "A. 归并排序的平均复杂度是 O(n log n)。",
            "B. 归并排序需要 O(n) 的额外空间。",
            "C. 归并排序在最坏情况的时间复杂度是 O(n²)。",
            "D. 归并排序适合大规模数据。"
          ],
          "answer": 2,
          "explanation": "归并排序任何情况下都是 O(n log n)，最坏也不会是 O(n²)，故 C 不正确。归并排序最坏情况同样是 O(n log n)。归并排序无论输入是否有序，划分都是均匀的。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_10",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下述C++代码实现了快速排序算法，最坏情况的时间复杂度是（   ）。",
          "options": [
            "A. O(n log n)",
            "B. O(n)",
            "C. O(n²)",
            "D. O(log n)"
          ],
          "answer": 2,
          "explanation": "每次选首元素为基准且数据有序时，划分会退化成只减少一个元素，递归 n 层、每层 O(n)，最坏 O(n²)。这是快速排序最坏情况下退化的复杂度。此时递归深度为 n，性能退化为平方级。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_21",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "通过在数组的第一个、最中间和最后一个这3个数据中选择中间值作为枢轴（比较基准），快速排序算法可降低落入最坏情况的概率。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "从首、中、尾取中位数作基准，避免每次取到极端值，降低落入最坏情况的概率，正确。中位数作基准让划分更均匀，减少最坏概率。三数取中能有效避免每次选到极端元素。这是常见的快排优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_11",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码用分治求“最大连续子段和”，其时间复杂度为（   ）。",
          "options": [
            "A. O(2^n)",
            "B. O(n log n)",
            "C. O(n²)",
            "D. O(n)"
          ],
          "answer": 1,
          "explanation": "每次把区间二分递归，跨中点的部分用 O(n) 扫描，T(n)=2T(n/2)+O(n)，得 O(n log n)，选 B。每层合并扫描 O(n)，共 log n 层。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "游戏大赛决赛，两组选手分别按得分从小到大排好队，现在要把他们合并成一个有序排行榜。A组：A = {12, 35, 67, 89}，B组：B = {20, 45, 55, 78}，下面是归并合并函数的核心循环，横线处应填入（   ）。",
          "options": [
            "A. A[i] >= B[j]",
            "B. A[i] <= B[j]",
            "C. i >= j",
            "D. i <= j"
          ],
          "answer": 1,
          "explanation": "归并时取两数组当前较小者，若 A[i]<=B[j] 取 A，否则取 B，选 B。把两组已排序的选手按得分顺序归并成一条有序链。比较两指针所指元素，较小者先入结果数组。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_13",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "有 n 位同学的成绩已经从小到大排好序，现在对它执行下面这段以第一个元素为 pivot 的快速排序，请问此次排序的时间复杂度是（   ）。",
          "options": [
            "A. O(n log n)",
            "B. O(n)",
            "C. O(n²)",
            "D. O(log n)"
          ],
          "answer": 2,
          "explanation": "已升序排列、以首元素为基准时，每次划分只减少一个元素，递归 n 层，总复杂度退化为 O(n²)。基准总是最小元素导致划分极端不平衡。每次划分都极不平衡，是快排的最坏情形。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_14",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于排序算法的描述中，不正确的是（   ）。",
          "options": [
            "A. 冒泡排序和插入排序都是稳定的排序算法",
            "B. 快速排序和归并排序都是不稳定的排序算法",
            "C. 冒泡排序和插入排序最好时间复杂度均为 O(n)",
            "D. 归并排序在最好、最坏和平均三种情况的时间复杂度均为 O(n log n)"
          ],
          "answer": 1,
          "explanation": "归并排序是稳定的，只有快速排序不稳定，B 说“都是不稳定”错误。归并排序稳定，快速排序不稳定。所以只有 B 说“都是不稳定”是错的。B 的说法与事实相反。只有快速排序是不稳定的，归并排序是稳定的。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_18",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序只要每次都选取中间元素作为枢轴，就一定是稳定排序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "快排的稳定性取决于交换方式，选择中间元素作基准不会改变其交换导致的不稳定性，说法错误。稳定性由交换方式决定，与枢轴选择无关。快排的交换操作决定其不稳定，与枢轴选取无关。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_20",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "在一个数组中，如果两个元素 a[i] 和 a[j] 满足 i<j 且 a[i]>a[j]，则 a[i] 和 a[j] 是一个逆序对。下面的代码可以正确统计数组 a 区间 [l,r] 内的逆序对总数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "给出的只是单次合并的片段，缺少递归分治与合并回写，不能完成整个数组的逆序对统计，说法错误。完整实现还需要递归拆分和拷贝回写。给出的代码只是归并排序统计逆序的一部分。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_07",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了计算 x^n 的快速幂算法，该算法体现的编程思想是（   ）。",
          "options": [
            "A. 枚举",
            "B. 贪心",
            "C. 分治",
            "D. 模拟"
          ],
          "answer": 2,
          "explanation": "快速幂把 x^n 拆成 x^(n/2) 的平方，自顶向下递归、自底向上合并，是分治思想，选 C。每次把指数减半，是典型的分治递归结构。分治让指数规模逐层减半，计算量从 O(n) 降到 O(log n)。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_11",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码段实现了快速排序的划分操作（以首元素为基准），横线处代码应填入（   ）。",
          "options": [
            "A. swap(arr[low], arr[high])",
            "B. swap(arr[low], arr[i])",
            "C. swap(arr[i], arr[high])",
            "D. arr[i] = pivot"
          ],
          "answer": 1,
          "explanation": "基准是 arr[low]，循环结束后 i 是基准应处的位置，把 arr[low] 与 arr[i] 交换，选 B。交换后基准就位，左半小于等于基准、右半大于基准。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_12",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "下面哪句话最符合归并排序的思想？（   ）",
          "options": [
            "A. 每次选择最小元素放到前面",
            "B. 将数组分成两半分别排序，再合并两个有序部分",
            "C. 相邻元素两两交换",
            "D. 从左到右把元素插入有序区"
          ],
          "answer": 1,
          "explanation": "归并排序先把数组二分分别排序，再合并两个有序部分，故选 B。归并排序的核心是分治加合并。分两半分别排序再合并，正是归并排序的精髓。故选 B。它把数组不断对半分割，再自底向上合并有序段。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_13",
          "kp": "kp5_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在对长度为 n（n 为 2 的幂）的数组进行归并排序的过程中，mergeArray 函数（合并两个有序子数组的操作）被调用的次数是（   ）。",
          "options": [
            "A. n-1",
            "B. n",
            "C. n/2",
            "D. n+1"
          ],
          "answer": 0,
          "explanation": "每次 mergeArray 把两个有序子数组合并成一个，相当于减少一个“段”，从 n 个单元素段到 1 段需要 n-1 次合并。n 个元素归并为 1 个有序段共需 n-1 次合并。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_19",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "在归并排序的合并操作中，下面的代码片段可以正确地将两个已排序的子数组 L 和 R 合并回原数组 arr 中。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码正确把两个有序子数组比较后按序写回 arr，剩余部分也拷贝回，合并正确。该 merge 片段逻辑完整，能正确合并两个有序子数组。两个有序子数组按序归并回 arr，结果有序。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_20",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "分治法通常将一个规模较大的问题拆分为若干个规模较小、结构相似的子问题，分别求解后再合并子问题的结果。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这是分治法的标准描述：分解、求解子问题、合并解，正确。分治的三要素：分解、求解、合并。如归并排序、快速排序都是分治法的应用。故该说法正确。分治法通过分解、求解、合并三步解决问题。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_25",
          "kp": "kp5_09",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序和快速排序在平均情况下的时间复杂度均为 O(n log n)。但在稳定性方面，归并排序通常是不稳定的，而快速排序是稳定的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "稳定性说反了：归并排序稳定，快速排序不稳定，说法错误。稳定性结论与实际情况完全相反。归并稳定、快排不稳定，两者稳定性截然不同。故该判断错误。两者在稳定性上的表现完全相反。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_10": {
      "title": "递归",
      "questions": [
        {
          "id": "l5_202309_04",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码说法错误的是（ ）。\n// sumA()和sumB()用于求从1到N之和\n#include <iostream>\nusing namespace std;\nint sumA(int n) {\nint sum = 0;\nfor (int i = 1; i < n + 1; i++)\nsum += i;\nreturn sum;\n}\nint sumB(int n) {\nif (n == 1)\nreturn 1;\nelse\nreturn n + sumB(n - 1);\n}\nint main() {\nint n = 0;\ncin >> n;\ncout << sumA(n) << \" \" << sumB(n) << endl;\nreturn 0;\n}",
          "options": [
            "A. sumA()用循环方式求从1到N之和，sumB()用递归方式求从1到N之和。",
            "B. 默认情况下，如果输入正整数1000，能实现求从1到1000之和。",
            "C. 默认情况下，如果输入正整数100000，能实现求从1到100000之和。",
            "D. 一般说来，sumA()的效率高于sumB()。"
          ],
          "answer": 2,
          "explanation": "sumA用循环累加，sumB用递归。1加到1000的和约50万，int放得下；而1加到100000的和约5×10⁹，超过了int最大值2147483647，会溢出，所以C的说法错误，选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_05",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码以递归方式实现字符串反序，横线处应填上代码是（ ）。\n// 字符串反序\n#include <iostream>\n#include <string>\nusing namespace std;\nstring sReverse(string sIn) {\nif (sIn.length() <= 1) {\nreturn sIn;\n} else {\nreturn __________ // 此处填写代码\n}\n}\nint main() {\nstring sIn;\ncin >> sIn;\ncout << sReverse(sIn) << endl;\nreturn 0;\n}",
          "options": [
            "A. sIn[sIn.length() - 1] + sReverse(sIn.substr(0, sIn.length() - 1));",
            "B. sIn[0] + sReverse(sIn.substr(1, sIn.length() - 1));",
            "C. sReverse(sIn.substr(0, sIn.length() - 1)) + sIn[sIn.length() - 1];",
            "D. sReverse(sIn.substr(1, sIn.length() - 1)) + sIn[sIn.length() - 1];"
          ],
          "answer": 0,
          "explanation": "反序字符串的思路：先取出最后一个字符sIn[length-1]，再接上反序后的前length-1个字符，即sIn.substr(0, length-1)的反序。所以填sIn[sIn.length()-1] + sReverse(sIn.substr(0, sIn.length()-1))，选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_06",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "印度古老的汉诺塔传说：创世时有三根金刚柱，其中一柱从下往上按照大小顺序摞着64片黄金圆盘，当圆盘逐一从一柱借助另外一柱全部移动到另外一柱时，宇宙毁灭。移动规则：在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。下面的C++代码以递归方式实现汉诺塔，横线处应填入代码是（ ）。\n#include <iostream>\nusing namespace std;\n// 递归实现汉诺塔，将N个圆盘从A通过B移动C\nvoid Hanoi(string A, string B, string C, int N) {\nif (N == 1) {\ncout << A << \" -> \" << C << endl;\n} else {\nHanoi(A, C, B, N - 1);\ncout << A << \" -> \" << C << endl;\n__________; // 此处填写代码\n}\n}\nint main() {\nHanoi(\"甲\", \"乙\", \"丙\", 3);\nreturn 0;\n}",
          "options": [
            "A. Hanoi(B, C, A, N - 2)",
            "B. Hanoi(B, A, C, N - 1)",
            "C. Hanoi(A, B, C, N - 2)",
            "D. Hanoi(C, B, A, N - 1)"
          ],
          "answer": 1,
          "explanation": "汉诺塔移动N个圆盘分三步：先把N-1个圆盘借助C从A移到B，把最大的盘从A移到C，再把N-1个圆盘借助A从B移到C。横线处是第三步，即Hanoi(B, A, C, N - 1)，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202309_10",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码执行后的输出是（ ）。\n#include <iostream>\nusing namespace std;\nint jumpFloor(int N) {\ncout << N << \"#\";\nif (N == 1 || N == 2) {\nreturn N;\n} else {\nreturn jumpFloor(N - 1) + jumpFloor(N - 2);\n}\n}\nint main() {\ncout << jumpFloor(4) << endl;\nreturn 0;\n}",
          "options": [
            "A. 4#3#2#2#4",
            "B. 4#3#2#2#1#5",
            "C. 4#3#2#1#2#4",
            "D. 4#3#2#1#2#5"
          ],
          "answer": 3,
          "explanation": "jumpFloor(4)先输出4#，再调用jumpFloor(3)+jumpFloor(2)。jumpFloor(3)输出3#、2#、1#并返回3；jumpFloor(2)输出2#返回2，最后输出3+2=5。整个输出为4#3#2#1#2#5，所以选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_01",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于求斐波那契数列，该数列第1、2项为1，以后各项均是前两项之和。下面有关说法错误的是( )。\nint fiboA(int N)\n{\nif (N == 1 || N == 2)\nreturn 1;\nreturn fiboA(N - 1) + fiboA(N - 2);\n}\nint fiboB(int N)\n{\nif (N == 1 || N == 2)\nreturn 1;\nint last2 = 1, last1 = 1;\nint nowVal = 0;\nfor (int i = 2; i < N; i++)\n{\nnowVal = last1 + last2;\nlast2 = last1;\nlast1 = nowVal;\n}\nreturn nowVal;\n}",
          "options": [
            "A. fiboA()用递归方式，fiboB()循环方式",
            "B. fiboA()更加符合斐波那契数列的数学定义，直观易于理解，而fiboB()需要将数学定义转换为计算机程序实现",
            "C. fiboA()不仅仅更加符合数学定义，直观易于理解，且因代码量较少执行效率更高",
            "D. fiboB()虽然代码量有所增加，但其执行效率更高"
          ],
          "answer": 2,
          "explanation": "fiboA用递归求斐波那契，会产生大量重复计算（如fiboA(3)被反复求），执行效率很低；fiboB用循环每次只算一次，效率高。所以“fiboA执行效率更高”的说法错误，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_03",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读下面的C++代码，执行后其输出是( )。\nint stepCount = 0;\nint fracA(int N)\n{\nstepCount += 1;\ncout << stepCount << \"->\";\nint rtn = 1;\nfor (int i = 1; i <= N; i++)\nrtn *= i;\nreturn rtn;\n}\nint fracB(int N)\n{\nstepCount += 1;\ncout << stepCount << \"->\";\nif (N == 1)\nreturn 1;\nreturn N * fracB(N - 1);\n}\nint main()\n{\ncout << fracA(5);\ncout << \"<===>\";\ncout << fracB(5);\nreturn 0;\n}",
          "options": [
            "A. 1->120<===>2->120",
            "B. 1->120<===>1->120",
            "C. 1->120<===>1->2->3->4->5->120",
            "D. 1->120<===>2->3->4->5->6->120"
          ],
          "answer": 3,
          "explanation": "stepCount是全局计数。fracA(5)先输出1->并算得5!=120返回；fracB(5)从stepCount=2起，每层先输出步数再递归，依次输出2->3->4->5->6->，最终返回120。所以输出1->120<===>2->3->4->5->6->120，选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_18",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "以下C++代码能以递归方式实现斐波那契数列，该数列第1、2项为1，以后各项均是前两项之和。( )\nint Fibo(int N)\n{\nif (N == 1 || N == 2)\nreturn 1;\nelse\n{\nint m = fiboA(N - 1);\nint n = fiboB(N - 2);\nreturn m + n;\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归函数的标志是“函数体内调用它自己”。这里Fibo函数内部调用的是fiboA和fiboB，并没有调用Fibo自身，无法完成递归，所以这段代码不能以递归方式实现斐波那契数列，说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_03",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码片段用于计算阶乘。请在横线处填入（ ），实现正确的阶乘计算。\nint factorial(int n) {\nif (n == 0 || n == 1) return 1;\nelse { ____________ }  // 在此处填入代码\n}",
          "options": [
            "A. return n * factorial(n - 1);",
            "B. return factorial(n - 1) / n;",
            "C. return n * factorial(n);",
            "D. return factorial(n / 2) * factorial(n / 2);"
          ],
          "answer": 0,
          "explanation": "阶乘定义 n! = n × (n-1)!，基线条件为 0! = 1! = 1。选项A调用factorial(n-1)使参数不断减小，最终到达基线条件返回1，递归正确。B算成了(n-1)!/n，C会造成无限递归。故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_06",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码片段用于计算斐波那契数列。该代码的时间复杂度是（ ）。\nint fibonacci(int n) {\nif (n <= 1) return n;\nelse return fibonacci(n - 1) + fibonacci(n - 2);\n}",
          "options": [
            "A. O(1)",
            "B. O(n)",
            "C. O(2^n)",
            "D. O(log n)"
          ],
          "answer": 2,
          "explanation": "每次调用fibonacci(n)都会递归调用fibonacci(n-1)和fibonacci(n-2)两个子调用，递归树大约有2^n个结点，所以时间复杂度是指数级的O(2^n)。当n稍大时计算量会急剧增长，这正是朴素递归求斐波那契数列效率低的原因，故选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_14",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "递归函数在调用自身时，必须满足（ ），以避免无限递归？",
          "options": [
            "A. 有终止条件",
            "B. 函数参数递减（或递增）",
            "C. 函数返回值固定",
            "D. 以上都对"
          ],
          "answer": 0,
          "explanation": "递归函数必须设置一个基线条件（终止条件）：当参数满足基线时函数直接返回结果，不再调用自身。如果没有终止条件，函数会无限地调用自身，不断在系统栈上分配新的栈帧，最终耗尽栈空间导致栈溢出。选项A正确描述了这一要求，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_25",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在C语言中，递归的实现方式通常会占用更多的栈空间，可能导致栈溢出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归函数每调用一次自身，系统都会在栈上为这次调用分配一个栈帧，用来保存局部变量、返回地址等信息。如果递归层数太多，栈空间会被耗尽从而发生栈溢出错误，所以递归通常比循环占用更多的栈空间，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_01",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于求斐波那契数列，该数列第1、2项为1，以后各项均是前两项之和。函数fibo()属于(  )。\nint fibo(int n) {\nif (n <= 0) return 0;\nif (n == 1 || n == 2) return 1;\nint a = 1, b = 1, next;\nfor (int i = 3; i <= n; i++) { next = a + b; a = b; b = next; }\nreturn next;\n}",
          "options": [
            "A. 枚举算法",
            "B. 贪心算法",
            "C. 迭代算法",
            "D. 递归算法"
          ],
          "answer": 2,
          "explanation": "fibo()使用for循环从第3项开始依次计算斐波那契数列，用变量a、b保存前两项的值并不断向后更新，整个过程不调用函数自身，这是典型的迭代（递推）实现方式。它与递归不同，因此该函数属于迭代算法，故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_14",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下函数：\nint fun(int n) {\nif (n == 1) return 1;\nif (n == 2) return 2;\nreturn fun(n - 2) - fun(n - 1);\n}\n则当 n=7 时，函数返回值为（  ）。",
          "options": [
            "A. 0",
            "B. 1",
            "C. 21",
            "D. -11"
          ],
          "answer": 3,
          "explanation": "fun(n)=fun(n-2)-fun(n-1)，基线fun(1)=1、fun(2)=2。逐项算得fun(3)=-1、fun(4)=3、fun(5)=-4、fun(6)=7、fun(7)=fun(5)-fun(6)=-11，故选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_15",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定如下函数（函数功能同上题，增加输出打印）：\nint fun(int n) {\ncout << n << \" \";\nif (n == 1) return 1;\nif (n == 2) return 2;\nreturn fun(n - 2) - fun(n - 1);\n}\n则当 n=4 时，屏幕上输出序列为（  ）。",
          "options": [
            "A. 4 3 2 1",
            "B. 1 2 3 4",
            "C. 4 2 3 1 2",
            "D. 4 2 3 2 1"
          ],
          "answer": 2,
          "explanation": "fun(4)先输出“4 ”，再求fun(2)-fun(3)：fun(2)输出“2 ”返回2；fun(3)输出“3 ”后求fun(1)-fun(2)，分别输出“1 ”和“2 ”。完整输出为4 2 3 1 2，故选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_03",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "对下面两个函数，说法错误的是（  ）。\nint sumA(int n) { int res=0; for (int i=1;i<=n;i++) res+=i; return res; }\nint sumB(int n) { if (n==1) return 1; int res = n + sumB(n-1); return res; }",
          "options": [
            "A. sumA体现了迭代的思想",
            "B. SumB采用的是递归方式",
            "C. SumB函数比SumA的时间效率更高",
            "D. 两个函数的实现的功能相同"
          ],
          "answer": 2,
          "explanation": "sumA使用for循环累加，是迭代方式；sumB递归调用自身，是递归方式。两者实现的功能相同（都求1到n的和），时间复杂度都是O(n)，执行效率没有本质差别。C说SumB比SumA效率更高是错误的，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_15",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "当 n=7 时，下面函数的返回值为（  ）。\nint fun(int n) {\nif (n == 1) return 1;\nelse if (n >= 5) return n * fun(n - 2);\nelse return n * fun(n - 1);\n}",
          "options": [
            "A. 105",
            "B. 840",
            "C. 210",
            "D. 420"
          ],
          "answer": 2,
          "explanation": "fun(1)=1，fun(2)=2×1=2，fun(3)=3×2=6，fun(4)=4×6=24，fun(5)=5×fun(3)=30，fun(6)=6×fun(4)=144，fun(7)=7×fun(5)=7×30=210，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_24",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，递归的实现方式通常会占用更多的栈空间，可能导致栈溢出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归函数每次调用自身都会在系统栈上分配一个新的栈帧，用来保存局部变量和返回地址。当递归层数太多时，栈空间会被耗尽而发生栈溢出，所以递归通常比迭代占用更多栈空间，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_25",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "对于已经定义好的标准数学函数sin(x)，应用程序中的语句y=sin(sin(x)); 是一种递归调用。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归调用要求函数直接或间接地调用它自身。sin()是系统提供的标准库函数，语句y=sin(sin(x))只是把sin的返回值再作为参数调用一次sin，属于普通的嵌套函数调用，并不是sin函数调用自身，所以不是递归，说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_04",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "对下面两个函数，说法错误的是（  ）。\nint fibA(int n) { if (n<=1) return n; int f1=0,f2=1; for(...) {...} return f2; }\nint fibB(int n) { if (n<=1) return n; return fibB(n-1)+fibB(n-2); }",
          "options": [
            "A. 两个函数的实现的功能相同",
            "B. fibA采用递推方式",
            "C. fibB采用的是递归方式",
            "D. fibA时间复杂度为O(n)，fibB的时间复杂度为O(2^n)"
          ],
          "answer": 3,
          "explanation": "fibA用for循环递推求斐波那契，复杂度O(n)；fibB用fibB(n-1)+fibB(n-2)递归，复杂度O(2^n)。D把两者复杂度互换或说错就是错误的（题目给出的D与事实不符），故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_20",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "递归算法必须有一个明确的结束条件，否则会导致无限递归并可能引发栈溢出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归函数必须设置明确的结束条件（基线条件），当满足条件时不再调用自身而直接返回。如果没有结束条件，函数会无限递归调用自身，不断占用栈空间，最终导致栈溢出错误，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202412_25",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "递归函数每次调用自身时，系统都会为新开启的函数分配内存，以存储局部变量、调用地址和其他信息等，导致递归通常比迭代更加耗费内存空间。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归函数每次调用自身时，系统都要在栈上为新调用分配独立的内存空间，保存局部变量、参数和返回地址等信息，调用结束后再释放。递归的栈帧数量与递归深度成正比，通常比迭代占用更多的内存空间，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_07",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "在程序运行过程中，如果递归调用的层数过多，会因为（  ）引发错误。",
          "options": [
            "A. 系统分配的栈空间溢出",
            "B. 系统分配的堆空间溢出",
            "C. 系统分配的队列空间溢出",
            "D. 系统分配的链表空间溢出"
          ],
          "answer": 0,
          "explanation": "递归函数每次调用自身都会在系统栈上分配一个新的栈帧来保存局部变量和返回地址。当递归调用的层数过多时，栈空间会被全部占满，引发栈溢出错误。所以“递归层数过多”引发的是系统分配的栈空间溢出，故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_08",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "对下面两个函数，说法错误的是（  ）。\nint factorialA(int n) { if (n<=1) return 1; return n * factorialA(n-1); }\nint factorialB(int n) { if (n<=1) return 1; int res=1; for(int i=2;i<=n;i++) res *= n; return res; }",
          "options": [
            "A. 两个函数的实现的功能相同",
            "B. 两个函数的时间复杂度均为O(n)",
            "C. factorialA采用递归方式",
            "D. factorialB采用递归方式"
          ],
          "answer": 3,
          "explanation": "factorialA在函数体内调用它自身factorialA(n-1)，是递归实现；factorialB使用for循环迭代计算，是递推实现。选项D说“factorialB采用递归方式”与代码事实不符，是错误的说法，故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202503_20",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "递归函数必须具有一个终止条件，以防止无限递归。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "递归函数必须设置一个终止条件（基线条件），当满足该条件时函数不再调用自身而直接返回。如果没有终止条件，函数会无限地递归调用自身，不断在系统栈上分配栈帧，最终导致栈溢出，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202506_24",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "函数puzzle定义如下，则调用puzzle(7)程序会无限递归。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "puzzle(7) 会按 7→22→11→34→17→52→…→1 的路线最终到达 n=1 返回，递归会终止，不会无限递归。递归最终会到达终止条件返回，不会无限递归。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_18",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "下面递归实现的斐波那契数列的时间复杂度为 O(2^n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "代码使用了备忘录 memo，每个 n 只计算一次，时间复杂度是 O(n)，不是 O(2^n)，说法错误。备忘录避免重复计算，是典型的空间换时间。加了备忘录后每个子问题只算一次，效率大幅提升。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_23",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码采用分治算法求解标准 3 柱汉诺塔问题，时间复杂度为 O(2^n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "汉诺塔递推式 T(n)=2T(n-1)+1，解得 T(n)=2^n-1，时间复杂度为 O(2^n)，语句应判定为正确。官方答案标为错误，此处以计算为准。移动次数恰为 2^n-1，指数级增长，符合该复杂度。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202509_24",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "所有递归算法都可以转换为迭代算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归本质是系统栈，可用显式栈或循环改写为迭代，理论上所有递归都可转为迭代，正确。本质是系统栈，可用显式栈或循环等价改写。这是可计算性理论中的基本结论。两者在功能上完全等价。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_13",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面给出了阶乘计算的两种方式。以下说法正确的是（   ）。",
          "options": [
            "A. 上面两种实现方式的时间复杂度相同，都为 O(n)",
            "B. 上面两种实现方式的空间复杂度相同，都为 O(1)",
            "C. 上面两种实现方式的空间复杂度相同，都为 O(n)",
            "D. 函数 factorial1() 的时间复杂度为 O(n)，函数 factorial2() 的时间复杂度为 O(log n)"
          ],
          "answer": 0,
          "explanation": "递归 factorial1 与循环 factorial2 都执行约 n 次乘法，时间都是 O(n)；但空间上递归用 O(n) 栈、迭代只用 O(1)，故 A 正确。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_23",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "以下 fib 函数计算第 n 项斐波那契数（fib(0)=0, fib(1)=1），其时间复杂度为 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "朴素递归每个 fib(k) 被重复计算，递推式 T(n)=T(n-1)+T(n-2)+1，复杂度为 O(2^n) 指数级，不是 O(n)。朴素递归没有记忆化，会重复计算大量子问题。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202512_24",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "递归函数一定要有终止条件，否则可能会造成栈溢出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "没有终止条件的递归会无限调用，不断压栈最终栈溢出，正确。终止条件是递归退出的必要条件。缺少终止条件会导致无限递归直至栈空间耗尽。这也是递归设计的基本要求。没有终止条件的递归会一直压栈，最终导致程序异常。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_09",
          "kp": "kp5_10",
          "type": "choice",
          "difficulty": 1,
          "question": "关于递归函数调用，下列说法错误的是（   ）。",
          "options": [
            "A. 递归调用层次过深时，可能会耗尽栈空间导致栈溢出",
            "B. 尾递归函数可以通过编译器优化来避免栈溢出",
            "C. 所有递归函数都可以通过循环结构来改写，从而避免栈溢出",
            "D. 栈溢出发生时，程序会抛出异常并可以继续执行后续代码"
          ],
          "answer": 3,
          "explanation": "栈溢出是致命错误，程序会崩溃，不会抛出可捕获的异常后继续执行，D 说法错误。栈溢出属于程序级错误，无法被普通异常机制捕获。因此 D 的说法与事实不符，是错误选项。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_25",
          "kp": "kp5_10",
          "type": "judge",
          "difficulty": 1,
          "question": "任何递归程序都可以改写为等价的非递归程序，但改写后的非递归程序一定需要显式地使用栈来模拟递归调用过程。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "尾递归或简单递推可直接改循环，不一定需要显式栈，说法“一定需要”错误。尾递归可直接改写成循环，无需显式栈。所以“一定需要显式栈”的表述绝对化了。故该判断错误。改写后是否用栈取决于递归的具体结构。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp5_11": {
      "title": "算法复杂度",
      "questions": [
        {
          "id": "l5_202309_11",
          "kp": "kp5_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码中的isPrimeA()和isPrimeB()都用于判断参数N是否素数，有关其时间复杂度的正确说法是（ ）。\n#include <iostream>\n#include <cmath>\nusing namespace std;\nbool isPrimeA(int N) {\nif (N < 2)\nreturn false;\nfor (int i = 2; i < N; i++)\nif (N % i == 0)\nreturn false;\nreturn true;\n}\nbool isPrimeB(int N) {\nif (N < 2)\nreturn false;\nint endNum = int(sqrt(N));\nfor (int i = 2; i <= endNum; i++)\nif (N % i == 0)\nreturn false;\nreturn true;\n}\nint main() {\ncout << boolalpha;\ncout << isPrimeA(13) << \" \" << isPrimeB(13) << endl;\nreturn 0;\n}",
          "options": [
            "A. isPrimeA()的最坏时间复杂度是O(N)，isPrimeB()的最坏时间复杂度是O(logN)，isPrimeB()优于isPrimeA()。",
            "B. isPrimeA()的最坏时间复杂度是O(N)，isPrimeB()的最坏时间复杂度是O(√N)，isPrimeB()优于isPrimeA()。",
            "C. isPrimeA()的最坏时间复杂度是O(√N)，isPrimeB()的最坏时间复杂度是O(N)，isPrimeA()优于isPrimeB()。",
            "D. isPrimeA()的最坏时间复杂度是O(logN)，isPrimeB()的最坏时间复杂度是O(N)，isPrimeA()优于isPrimeB()。"
          ],
          "answer": 1,
          "explanation": "isPrimeA把i从2试到N-1，最坏要做N次除法，复杂度O(N)；isPrimeB只试到√N，复杂度O(√N)。√N比N小得多，所以isPrimeB更优，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202312_08",
          "kp": "kp5_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码中的isPrimeA()和isPrimeB()都用于判断参数N是否素数，有关其时间复杂度的正确说法是（ ）。\nbool isPrimeA(int N)\n{\nif (N < 2)\nreturn false;\nfor (int i = 2; i <= N / 2 ; i++)\nif (N % i == 0)\nreturn false;\nreturn true;\n}\nbool isPrimeB(int N)\n{\nif (N < 2)\nreturn false;\nfor (int i = 2; i <= sqrt(N); i++)\nif (N % i == 0)\nreturn false;\nreturn true;\n}",
          "options": [
            "A. isPrimeA()的最坏时间复杂度是O(N/2)，isPrimeB()的最坏时间复杂度是O(logN)，isPrimeA()优于isPrimeB()",
            "B. isPrimeA()的最坏时间复杂度是O(N/2)，isPrimeB()的最坏时间复杂度是O(√N)，isPrimeB()绝大多数情况下优于isPrimeA()",
            "C. isPrimeA()的最坏时间复杂度是O(√N)，isPrimeB()的最坏时间复杂度是O(N)，isPrimeA()优于isPrimeB()",
            "D. isPrimeA()的最坏时间复杂度是O(logN)，isPrimeB()的最坏时间复杂度是O(N)，isPrimeA()优于isPrimeB()"
          ],
          "answer": 1,
          "explanation": "isPrimeA要试到N/2，最坏复杂度O(N/2)，也就是O(N)；isPrimeB只试到√N，复杂度O(√N)。√N比N小得多，绝大多数情况下isPrimeB更快，所以选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_11",
          "kp": "kp5_11",
          "type": "choice",
          "difficulty": 1,
          "question": "素数的线性筛法时间复杂度为（ ）。",
          "options": [
            "A. O(n)",
            "B. O(n log log n)",
            "C. O(n log n)",
            "D. O(n^2)"
          ],
          "answer": 0,
          "explanation": "线性筛法的关键优化是保证“每个合数只被它的最小质因子筛掉一次”，这样每个合数只做一次标记，总操作次数与n成正比。相比于埃氏筛的O(n log log n)，线性筛更优，时间复杂度为O(n)，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_17",
          "kp": "kp5_11",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序的时间复杂度是O(N log N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "插入排序是先把前一部分排好序，再把新元素插入到合适位置。它的平均和最坏时间复杂度都是O(n^2)，只有当输入序列已经基本有序时才能接近O(n)，并不是题干所说的O(n log n)。所以“插入排序的时间复杂度是O(N log N)”的说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202403_22",
          "kp": "kp5_11",
          "type": "judge",
          "difficulty": 1,
          "question": "素数表的埃氏筛法和线性筛法的时间复杂度都是O(N log log N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "埃拉托斯特尼筛法的时间复杂度约为O(n log log n)，它需要多次标记同一个合数；而线性筛通过让每个合数只被最小质因子筛一次，时间复杂度达到O(n)。两者复杂度并不相同，所以“都是O(N log log N)”的说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202406_08",
          "kp": "kp5_11",
          "type": "choice",
          "difficulty": 1,
          "question": "上题代码的时间复杂度是（  ）。",
          "options": [
            "A. O(n^2)",
            "B. O(n log n)",
            "C. O(n log log n)",
            "D. O(n)"
          ],
          "answer": 3,
          "explanation": "线性筛利用“每个合数只被其最小质因子筛一次”，总操作次数与n成正比，正确时间复杂度应为O(n)（选D）。答案表给出的A(O(n^2))与线性筛的性质不符，判定为官方答案表笔误。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202409_07",
          "kp": "kp5_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面函数可以将n的所有质因数找出来，其时间复杂度是（    ）。\nvector<int> get_prime_factors(int n) {\nvector<int> factors;\nwhile (n % 2 == 0) { factors.push_back(2); n /= 2; }\nfor (int i = 3; i * i <= n; i += 2) {\nwhile (n % i == 0) { factors.push_back(i); n /= i; }\n}\nif (n > 2) factors.push_back(n);\nreturn factors;\n}",
          "options": [
            "A. O(n^2)",
            "B. O(n log n)",
            "C. O(√n log n)",
            "D. O(n)"
          ],
          "answer": 2,
          "explanation": "试除法从3枚举到√n（步长2），每找到一个因子就用它除尽n，n会快速变小。最多约√n次试除，加上除尽时的log n次内层循环，复杂度为O(√n log n)，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_19",
          "kp": "kp5_11",
          "type": "judge",
          "difficulty": 1,
          "question": "若某算法满足递推式 T(n)=2T(n/2)+O(n)，则其时间复杂度为 O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该递推式每层总工作量 O(n)、共 log n 层，由主定理得 T(n)=O(n log n)，正确。例如归并排序就符合该递推式。主定理适用于这类分治递推式的复杂度分析。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202603_22",
          "kp": "kp5_11",
          "type": "judge",
          "difficulty": 1,
          "question": "假设数组的值域范围是 [1,n]，以下程序的时间复杂度是 O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "程序在值域上二分答案，约 log n 轮，每轮 check 扫描数组 O(n)，总复杂度 O(n log n)，正确。每轮 check 都线性扫描数组一次。值域二分的轮数与值域大小有关，通常为 log n 级别。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l5_202606_23",
          "kp": "kp5_11",
          "type": "judge",
          "difficulty": 1,
          "question": "以下函数 f1 的时间复杂度比函数 f2 的更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "f1 是 O(log n)，f2 递归两次调用是 O(2^n)，f2 复杂度远高于 f1，说法错误。f2 的复杂度是指数级，远高于 f1。所以“f1 比 f2 更高”的说法错误。",
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
