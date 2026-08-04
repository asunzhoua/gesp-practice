const QUESTION_BANK = {
  "knowledgePoints": {
    "kp8_01": {
      "title": "计数原理",
      "questions": [
        {
          "id": "l8_202312_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨要从A城到B城，又想顺路游览一番。他有两个选项：1、坐高铁路到C城游览，再坐高铁或飞机到B城；2、坐船到D城游览，再坐船、高铁或飞机到B城。请问小杨从A城到B城共有几种交通方案可以选择？（  ）。",
          "options": [
            "2",
            "3",
            "5",
            "6"
          ],
          "answer": 2,
          "explanation": "这是分类计数问题，用加法原理：经C城到B城有2种方案（高铁或飞机），经D城到B城有3种方案（船、高铁或飞机）。两类互不重叠，总方案数=2+3=5，选C。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_13",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint cnt = 0;\nfor (int a = 1; a <= 10; a++)\nfor (int b = 1; b <= 10; b++)\nfor (int h = 1; h <= 10; h++)\nif ((a + b) * h == 20) cnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "12",
            "18",
            "36",
            "42"
          ],
          "answer": 1,
          "explanation": "枚举a、b、h均在[1,10]，统计(a+b)*h=20。h可取1、2、4、5、10，对应a+b为20、10、5、4、2，方案数分别为1、9、4、3、1，合计1+9+4+3+1=18，选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "为丰富食堂菜谱，炒菜部进行头脑风暴。肉类有鸡肉、牛肉、羊肉、猪肉4种，切法有肉排、肉块、肉末3种，配菜有圆白菜、油菜、豆腐3种，辣度有麻辣、微辣、不辣3种。不考虑口感的情况下，选1种肉、1种切法、1种配菜、1种辣度产生一道菜，这样能产生多少道菜？（  ）。",
          "options": [
            "13",
            "42",
            "63",
            "108"
          ],
          "answer": 3,
          "explanation": "选菜过程分四步且互不影响，用乘法原理：4种肉×3种切法×3种配菜×3种辣度=4×3×3×3=108道菜，选D。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_14",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint cnt = 0;\nfor (int x = 0; x <= 10; x++)\nfor (int y = 0; y <= 10; y++)\nfor (int z = 0; z <= 10; z++)\nif (x + y + z == 15) cnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "90",
            "91",
            "96",
            "100"
          ],
          "answer": 1,
          "explanation": "统计0≤x,y,z≤10且x+y+z=15的解数。无上限时插板法得C(17,2)=136，减去某变量≥11的情况：令x'=x-11，x'+y+z=4，共C(6,2)=15种，三种变量共45种，136-45=91，选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_17",
          "kp": "kp8_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一个袋子中有3个完全相同的红色小球、2个完全相同的蓝色小球。每次从中取出1个，再放回袋子，这样进行3次后，可能的颜色顺序有7种。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "每次取出后放回，三次取样互相独立，每次有红、蓝2种结果，因此可能的颜色顺序为2×2×2=8种，而不是7种，说法错误。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_26",
          "kp": "kp8_01",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：公倍数问题\n问题描述：小A写了一个N×M的矩阵A，我们看不到这个矩阵，但可以知道其中第i行第j列的元素A[i][j]是i和j的公倍数。现在有K个小朋友，第k个小朋友想知道，矩阵中最多有多少个元素可以是k。每位小朋友的答案互不相关，有些位置既可能是k1又可能是k2，则可同时满足两名小朋友的要求。输出sum(k×第k位小朋友的答案)对1e9+7取模（数据保证用long long）。\n输入：第一行三个正整数N、M、K。\n输出：一行，即答案。",
          "options": [],
          "answer": null,
          "explanation": "思路：位置(i,j)的元素能等于k，当且仅当k同时是i和j的倍数，即i|k且j|k。因此第k位小朋友的答案=(1..N中整除k的个数)×(1..M中整除k的个数)。预处理cnt_N[x]表示不超过N且整除x的正整数个数（用倍数枚举），cnt_M同理，最后对每个k累加k×cnt_N[k]×cnt_M[k]。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> count_divisors(int limit, int num) {\n    vector<int> s(num + 1, 0);\n    for (int i = 1; i <= limit; ++i) {\n        for (int j = i; j <= num; j += i) {\n            s[j] += 1;\n        }\n    }\n    return s;\n}\nint main() {\n    int N, M, K;\n    cin >> N >> M >> K;\n    vector<int> s_N = count_divisors(N, 1000000);\n    vector<int> s_M = count_divisors(M, 1000000);\n    long long result = 0;\n    for (int k = 1; k <= K; ++k) {\n        result += (long long)k * s_N[k] * s_M[k];\n    }\n    cout << result << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 5 2",
              "expectedOutput": "9"
            },
            {
              "input": "100 100 100",
              "expectedOutput": "185233"
            }
          ]
        },
        {
          "id": "l8_202406_05",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "一对夫妻生男生女的概率相同。已知这对夫妻有两个孩子，其中一个是女孩，另一个是男孩的概率是多少？（  ）。",
          "options": [
            "2/3",
            "1/4",
            "1/2",
            "1/3"
          ],
          "answer": 2,
          "explanation": "若理解为至少有一个女孩，样本空间为{女女,女男,男女}，其中一男一女占2种，概率为2/3（选项A）。官方按其中一个孩子是女孩（明确指认一个孩子）理解，另一孩子男女独立，概率为1/2（选项C）。两种解释均常见，本题以官方口径为准。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_06",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "从1到2024这2024个数中，共有（  ）个包含数字6的数。",
          "options": [
            "544",
            "546",
            "564",
            "602"
          ],
          "answer": 0,
          "explanation": "用补集计算：1-999中不含6的有9³-1=728个，1000-1999中不含6的有9³=729个，2000-2024中除2006、2016外不含6的有23个，共728+729+23=1480个不含6。故1到2024中含数字6的数为2024-1480=544，选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_15",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint cnt = 0;\nfor (int x = 0; x <= 10; x++)\nfor (int y = 0; y <= 10; y++)\nfor (int z = 0; z <= 10; z++)\nif (x + y + z <= 15) cnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "90",
            "91",
            "710",
            "711"
          ],
          "answer": 3,
          "explanation": "统计0≤x,y,z≤10且x+y+z≤15的解数。先算不加上限的解数C(18,3)=816，减去某个变量≥11：x'=x-11后x'+y+z≤4，有C(7,3)=35种，三个变量共105种（不会重复），816-105=711，选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_18",
          "kp": "kp8_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一个袋子中有3个完全相同的红色小球、2个完全相同的蓝色小球。每次从中取出1个，再放回袋子，这样进行3次后，可能的颜色顺序有8种。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "每次取出后放回，三次取样独立，每次2种结果，共2×2×2=8种颜色顺序，说法正确。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_04",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "从甲地到乙地，可以乘高铁，也可以乘汽车，还可以乘轮船。一天中，高铁有10班，汽车有5班，轮船有2班。那么一天中乘坐这些交通工具从甲地到乙地共有多少种不同的走法？（  ）。",
          "options": [
            "100",
            "60",
            "30",
            "17"
          ],
          "answer": 3,
          "explanation": "三类交通工具互斥，用加法原理：10+5+2=17种不同的走法，选D。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_06",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个单位圆上，随机分布n个点，求这n个点能被一个单位半圆周全部覆盖的概率（  ）。",
          "options": [
            "n/2^(n-1)",
            "1/n^2",
            "1/n",
            "1/2^n"
          ],
          "answer": 0,
          "explanation": "n个随机点能被某个半圆覆盖，等价于存在一个点为起点时其余点都在它顺时针半圈内。对每个点作起点概率为1/2^(n-1)，且各情形互斥，总概率为n/2^(n-1)，选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_25",
          "kp": "kp8_01",
          "type": "judge",
          "difficulty": 1,
          "question": "诚实国公民只说实话，说谎国公民只说谎话。你来到一处分岔口，一条通往诚实国，一条通往说谎国。走来两位路人，他们都自称是诚实国公民，都说对方是说谎国公民。你想去说谎国，可以这样问其中一位路人：\"我要去说谎国，如果我去问另一个路人，他会指向哪一条路？\"",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "问其中一位\"另一人指哪条路\"，诚实者会说真话转述，说谎者会说假话，但两人指向的是同一条错误的路，取相反方向即可到说谎国，该问法有效，说法正确。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨家响应国家\"以旧换新\"政策，将自家的汽油车置换为新能源汽车，正在准备自编车牌。自编车牌包括5位数字或英文字母，要求第5位必须是数字，前4位中可以有最多1位英文字母。英文字母必须是大写，而且不能是O或I（因为容易与数字0或1混淆）。请问自编车牌共有多少种可能性？（  ）。",
          "options": [
            "100,000",
            "1,060,000",
            "1,360,000",
            "1,460,000"
          ],
          "answer": 1,
          "explanation": "分两类：前4位全数字有10^4×10=100000种；前4位恰有1位字母，选位置4种、字母24种、其余3位数字10³、末位数字10，共4×24×10³×10=960000种。总计100000+960000=1060000，选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_10",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint N = 15, cnt = 0;\nfor (int x = 0; x + x + x <= N; x++)\nfor (int y = x; x + y + y <= N; y++)\nfor (int z = y; x + y + z <= N; z++)\ncnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "174",
            "447",
            "816",
            "4096"
          ],
          "answer": 0,
          "explanation": "统计满足0≤x≤y≤z且x+y+z≤15的非降三元组个数。逐层枚举计数可得174（如按x=0时y、z组合累加，或x≥1时计入更少组合），选A。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_02",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨和3位朋友约好一起去看电影\"哪吒2\"。打开购票软件，他们发现，已经没有同一排连续的四个座位了（图中每个方框代表一个座位，红色方框代表已经售出）。朋友们商量了一下，决定分为两组，每组两人在同一排的相邻两个座位，且两组之间至少有一对座位是前后相邻的。请问共有多少种购票方案？（  ）。\n（图示为两排座位，红色为已售出，各组选相邻两座且两组的座位对前后相邻）",
          "options": [
            "495",
            "96",
            "7",
            "4"
          ],
          "answer": 2,
          "explanation": "座位为3排6列，已售出(1,3)(1,4)(2,4)(3,4)(3,5)(3,6)。可选相邻双人位：第1排2组、第2排3组、第3排2组。两组须分处相邻两排且至少一列前后相邻，第1、2排间有3种配对，第2、3排间有4种配对，共7种，选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_05",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "从1到2025这2025个数中，包含数字5的个数（  ）。",
          "options": [
            "600",
            "601",
            "602",
            "603"
          ],
          "answer": 3,
          "explanation": "统计数字5出现的总次数：个位为5的数有(2025-5)/10+1=203个，十位为5的有50-59、150-159...共20×10=200个，百位为5的有500-599、1500-1599共200个，合计203+200+200=603，选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "一间的机房要安排6名同学进行上机考试，座位共2行3列。考虑到在座位上很容易看到同一行的左右两侧的屏幕，安排中间一列的同学做A卷，左右两列的同学做B卷。请问共有多少种排座位的方案？（  ）。",
          "options": [
            "720",
            "90",
            "48",
            "15"
          ],
          "answer": 0,
          "explanation": "座位2行3列共6个，中间一列2个座位坐做A卷的同学，左右两列共4个座位坐做B卷的同学。先选2名同学做A卷C(6,2)=15，再在中间列排列2!=2种；其余4名同学在左右4个座位排列4!=24种。总方案数15×2×24=720，选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_05",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "一对夫妻生男生女的概率相同。这对夫妻希望儿女双全。请问这对夫妻生下两个孩子时，实现儿女双全的概率是多少？（  ）。",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "7/8"
          ],
          "answer": 1,
          "explanation": "生两个孩子的样本空间为：男男、男女、女男、女女，共4种等可能结果。儿女双全即一男一女，对应男女、女男两种，概率为2/4=1/2，选B。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨想点一杯奶茶外卖，但还差5元起送。于是，小杨决定点一些小料。可选的小料包括：珍珠1元、椰果2元、奶冻3元、奶盖4元。每种小料最多点1份。请问共有多少种满足起送条件的点小料方案？（  ）。",
          "options": [
            "16",
            "10",
            "9",
            "7"
          ],
          "answer": 2,
          "explanation": "4种小料每种最多一份，全部子集共2^4=16种。总价不超过4元（不满5元）的子集为：空集、珍珠、椰果、奶冻、奶盖、珍珠+椰果(3)、珍珠+奶冻(4)，共7种。满足起送=16-7=9种，选C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_05",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "一对夫妻生男生女的概率相同。这对夫妻希望儿女双全。请问这对夫妻生下三个孩子时，实现儿女双全的概率是多少？（  ）。",
          "options": [
            "1/4",
            "1/2",
            "3/4",
            "7/8"
          ],
          "answer": 2,
          "explanation": "三个孩子的性别组合共2^3=8种等可能结果。不是儿女双全的情形只有全男或全女2种，因此儿女双全的概率为1-2/8=6/8=3/4，选C。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_01",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "某平台生成\"取件码\"由6个字符组成：前4位为数字（0–9），后2位为大写字母（A–Z），其中字母不能为I、O。假设数字和字母均可重复使用，要求整个取件码中恰好有2个数字为奇数。共有多少种不同取件码？（  ）",
          "options": [
            "1440000",
            "2160000",
            "2535000",
            "8640000"
          ],
          "answer": 1,
          "explanation": "数字位中恰好2个奇数：选2个数字位置放奇数C(4,2)=6，奇数有{1,3,5,7,9}共5种、偶数有5种，数字部分6×5²×5²=3750；后2位字母从24个(去掉I、O)中任选，24²=576。总数3750×576=2160000，选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_13",
          "kp": "kp8_01",
          "type": "choice",
          "difficulty": 1,
          "question": "从1到999这999个正整数中，十进制表示中数字5恰好出现一次的数有多少个？（  ）",
          "options": [
            "243",
            "271",
            "300",
            "333"
          ],
          "answer": 0,
          "explanation": "分位数统计：一位数中只有\"5\"，1个；两位数中十位为5(50-59除55)共9个、个位为5(15,25,35,45,65,75,85,95)共8个，小计17；三位数中百位为5共9×9=81个、十位为5共8×9=72个、个位为5共8×9=72个，小计225。总计1+17+225=243，选A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_16",
          "kp": "kp8_01",
          "type": "judge",
          "difficulty": 1,
          "question": "若一项任务可用两种互斥方案完成：方案A有a种做法，方案B有b种做法，则总做法数为a+b。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两种方案互斥，不能同时使用，总数由加法原理得a+b，说法正确。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_16",
          "kp": "kp8_01",
          "type": "judge",
          "difficulty": 1,
          "question": "若一项任务可从两种互斥的方案中选择一种完成，其中方案A有a种做法，方案B有b种做法，则总做法数为a+b。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两种方案互斥，只能二选一，由加法原理总做法数为a+b，说法正确。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。计数问题要先分清用加法原理还是乘法原理，并用补集或插板法处理重复与边界情况。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp8_02": {
      "title": "排列与组合",
      "questions": [
        {
          "id": "l8_202312_05",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "5位同学排队，其中一位同学不能排在第一，则共有多少种可能的排队方式？（  ）。",
          "options": [
            "5",
            "24",
            "96",
            "120"
          ],
          "answer": 2,
          "explanation": "按位置依次安排：第一位不能是那位特定同学，有4种选择；第二位从剩余4人中选，有4种；第三、四、五位分别有3、2、1种。总方案数=4×4×3×2×1=96，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_11",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint record_choose[MAXN][MAXM];\nint choose(int n, int m) {\nif (m == 0 || m == n) return 1;\nif (record_choose[n][m] == 0)\nrecord_choose[n][m] = choose(n - 1, m - 1) + choose(n - 1, m);\nreturn record_choose[n][m];\n}",
          "options": [
            "O(2n)",
            "O(2m×(n-m))",
            "O(c(n,m))",
            "O(m×(n-m))"
          ],
          "answer": 3,
          "explanation": "该函数带记忆化搜索计算组合数C[n][m]。每个状态(n',m')只计算一次，被访问的状态总数约为n*m-m*m=m×(n-m)个（去掉边界），故总复杂度为O(m×(n-m))，选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_17",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "一个袋子中有3个完全相同的红色小球、2个完全相同的蓝色小球。每次从中取出1个，且不放回袋子，这样进行3次后，将取出的小球依次排列，则可能的颜色顺序有7种。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "不放回取3次，可能的颜色顺序按红蓝数量列出：红红红，蓝红红，红蓝红，红红蓝，蓝蓝红，红蓝蓝，蓝红蓝，正好7种，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_26",
          "kp": "kp8_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：奖品分配\n时间限制：1.0 s  内存限制：128.0 MB\n问题描述：班上有N名同学，学号从0到N-1。有M种奖品要分给这些同学，其中第i种奖品总共有ai个。奖品的数量不多不少，每位同学都可以恰好分到一个奖品，且最后剩余的奖品不超过1个（即N≤a0+a1+...+a(M-1)≤N+1）。求每个班级礼物分配的方案数，方案指为每位同学都分配一个种类的奖品，只要有一位同学获得不同种类奖品即视为不同方案。对1e9+7取模后输出。共有T个班级需要依次解答。\n输入：第一行一个整数T；接下来T行，每行若干正整数，先是两个正整数N、M，接着是M个正整数a0..a(M-1)。\n输出：T行，每行一个整数表示方案数模1e9+7。",
          "options": [],
          "answer": null,
          "explanation": "思路：当奖品总数等于人数N时，方案数为C(N,a0)×C(N-a0,a1)×...，即先预处理组合数表再依次乘。当奖品总数等于N+1时，额外虚设1个人，仍按总数等于人数的方式分配并输出方案数；由于虚设人拿的奖品不同必然导致前面N人的分配方案不同，方案不会重复，故统一按总数计算即可。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n#include <algorithm>\n#include <string>\n#include <map>\n#include <iostream>\n#include <cmath>\n#include <vector>\nusing namespace std;\nconst int N = 1005;\nconst int mod = 1e9 + 7;\nint C[N + 5][N + 5], a[N + 5];\nvoid add(int &a, int b) {\n    a += b; if(a >= mod) a -= mod;\n}\nvoid init() {\n    C[0][0] = 1;\n    for(int i = 1; i <= N; i ++) {\n        C[i][0] = C[i][i] = 1;\n        for(int j = 1; j < i; j ++)\n            C[i][j] = C[i - 1][j - 1], add(C[i][j], C[i - 1][j]);\n    }\n}\nint main() {\n    init();\n    int T;\n    scanf(\"%d\", &T);\n    while(T --) {\n        int n, m, sum = 0;\n        scanf(\"%d%d\", &n, &m);\n        for(int i = 1; i <= m; i ++)\n            scanf(\"%d\", &a[i]), sum += a[i];\n        int ans = 1;\n        for(int i = 1; i <= m; i ++) {\n            ans = 1ll * ans * C[sum][a[i]] % mod;\n            sum -= a[i];\n        }\n        cout << ans << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3 2 1 2\n3 2 1 3\n5 3 3 1 1",
              "expectedOutput": "3\n4\n20"
            },
            {
              "input": "5\n100 1 100\n100 1 101\n20 2 12 8\n123 4 80 20 21 3\n999 5 101 234 499 66 99",
              "expectedOutput": "1\n1\n125970\n895031741\n307187590"
            }
          ]
        },
        {
          "id": "l8_202403_02",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知袋中有2个相同的红球、3个相同的绿球、5个相同的黄球。每次取出一个不放回，全部取出。可能产生多少种序列？（  ）。",
          "options": [
            "6",
            "1440",
            "2520",
            "3628800"
          ],
          "answer": 2,
          "explanation": "共10个球，同类球彼此相同，不同序列数是多重集排列：10!/(2!×3!×5!)=3628800/(2×6×120)=2520，选C。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_11",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint choose(int n, int m) {\nif (m == 0 || m == n) return 1;\nreturn choose(n - 1, m - 1) + choose(n - 1, m);\n}",
          "options": [
            "O(2^n)",
            "O(2m×(n-m))",
            "O(C(n, m))",
            "O(m×(n-m))"
          ],
          "answer": 2,
          "explanation": "朴素递归计算组合数，不记忆化。递归树的叶子数恰好等于C(n,m)（每个叶子对应一种选取方案），总调用次数约为2×C(n,m)-1，因此复杂度为O(C(n,m))，选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_01",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "GESP活动期间，举办方从获胜者ABCDE五个人中选出三个人排成一队升国旗，其中A不能排在队首，请问有多少种排法？",
          "options": [
            "24",
            "48",
            "32",
            "12"
          ],
          "answer": 1,
          "explanation": "总的三排列为P(5,3)=60种；其中A排在队首时有P(4,2)=12种。用排除法，A不排队首的方案数为60-12=48，选B。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_03",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "0,1,2,3,4,5这些数字组成一个三位数，请问没有重复数字的情况下，有多少种组法（  ）。",
          "options": [
            "180",
            "120",
            "80",
            "100"
          ],
          "answer": 3,
          "explanation": "百位不能为0，有5种选择；十位可从剩余5个数字中选，有5种；个位剩4种。总组法=5×5×4=100，选D。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_16",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "ABCDE五个小朋友，排成一队跑步，其中AB两人必须排在一起，一共有48种排法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "把AB两人看作一个整体，与其余3人共4个元素全排列为4!=24种，AB内部排列2!种，总排法=24×2=48，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_03",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "设有编号为A、B、C、D、E的5个球和编号为A、B、C、D、E的5个盒子。现将这5个球投入5个盒子，要求每个盒子放一个球，并且恰好有两个球的编号与盒子编号相同，问有多少种不同的方法？（  ）。",
          "options": [
            "5",
            "120",
            "20",
            "60"
          ],
          "answer": 2,
          "explanation": "先选出编号相同的两个位置：C(5,2)=10种；剩下3个球必须与盒子编号全不同（错排），D₃=2种。总方法数=10×2=20，选C。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_07",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面pailie函数是一个实现排列的程序，横线处可以填入的是（  ）。\n#include <iostream>\nusing namespace std;\nint sum = 0;\nvoid swap(int & a, int & b) {\nint temp = a; a = b; b = temp;\n}\nvoid pailie(int begin, int end, int a[]) {\nif (begin == end) {\nfor (int i = 0; i < end; i++) cout << a[i];\ncout << endl;\n}\nfor (int i = begin; i < end; i++) {\n__________\n}\n}",
          "options": [
            "swap(a[begin + 1], a[i]); pailie(begin + 1, end, a); swap(a[i], a[begin]);",
            "swap(a[begin], a[i]); pailie(begin, end, a); swap(a[i], a[begin]);",
            "swap(a[begin], a[i]); pailie(begin + 1, end, a); swap(a[i], a[begin]);",
            "swap(a[begin] + 1, a[i]); pailie(begin + 1, end, a); swap(a[i], a[begin + 1]);"
          ],
          "answer": 2,
          "explanation": "标准回溯全排列：先把a[begin]与a[i]交换，递归排列begin+1到end，再交换回来恢复现场。选项C符合：swap(a[begin],a[i])、pailie(begin+1,end,a)、swap(a[i],a[begin])。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_08",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题中，如果主函数为如下的程序，则最后的排列数是多少个？（  ）。\nint main() {\nint a[5] = {1, 2, 3, 4, 5};\npailie(0, 5, a);\nreturn 0;\n}",
          "options": [
            "120",
            "60",
            "240",
            "180"
          ],
          "answer": 0,
          "explanation": "pailie(0,5,a)对5个互不相同的数做全排列，递归每层交换一个位置，最终输出全部5!种排列，即120个，选A。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_21",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "你有三种硬币，分别面值2元、5元和7元，每种硬币都有足够多。买一本书需要27元，则最少可以用5个硬币组合起来正好付清，且不需要对方找钱。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "27=5×4+7，即4个5元加1个7元共5个硬币正好27元。少于5个硬币无法凑出27元（最多4×7=28需5个及以上才可行），故5个硬币可行，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_22",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "现有n个完全相同的元素，要将其分为k组，允许每组可以有0个元素，则一共有C(n-1, k-1)种分组方案。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "允许每组为空时，把n个相同元素分成k组的方案数为C(n+k-1, k-1)（插板法加虚板），而不是C(n-1,k-1)，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_26",
          "kp": "kp8_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：手套配对\n时间限制：1.0 s  内存限制：512.0 MB\n题面描述：小杨有n对不同的手套，每对手套由左右各一只组成。小杨想知道从中取出m只手套，恰好包含k对手套的情况有多少种。两种取法不同，当且仅当取出的手套中存在不同的手套（同一对手套的左右手也视为不同）。\n输入：第一行一个正整数T代表测试组数；接下来T行，每行三个正整数n、m、k。\n输出：每组数据输出一个整数，表示情况数对1e9+7取模的结果。",
          "options": [],
          "answer": null,
          "explanation": "思路：先从n对中选出k对作为完整取出的配对，即C(n,k)；再从剩下的n-k对中取出m-2k只（左右手任选），即C(n-k,m-2k)×2^(m-2k)。两者相乘并取模即答案。需先预处理组合数表与2的幂。无解情况（m<2k或m-2k>n-k）直接输出0。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 2e3+10;\nconst int p = 1e9+7;\n#define ll long long\nll c[N][N];\nll pw[N];\nint n,m,k;\nvoid init(){    \n    pw[0]=1;\n    for(int i=0;i<N;i++){\n        if(i)pw[i]=pw[i-1]*2%p;\n        for(int j=0;j<=i;j++){\n            if(j==0)c[i][j]=1;\n            else c[i][j]=(c[i-1][j]+c[i-1][j-1])%p;\n        }       \n    }\n}\nint main(){\n    init();\n    int t;\n    cin>>t;\n    while(t--){\n        cin>>n>>m>>k;\n        if(m<2*k||m-2*k>n-k){\n            cout<<\"0\\n\";\n            continue;\n        }\n        ll ans=c[n][k]*c[n-k][m-2*k]%p;\n        ans=ans*pw[m-2*k]%p;\n        cout<<ans<<\"\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n5 6 2\n5 1 5",
              "expectedOutput": "120\n0"
            }
          ]
        },
        {
          "id": "l8_202412_02",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "新年到，四家人在一起聚会。其中两家有三口人，另外两家有两口人。现在要安排大家在一张十人圆桌坐下，要求一家人必须相邻就座。由于有\"主座\"的习俗，每个座位都被认为是不同的。请问共有多少种就座方案？（  ）。",
          "options": [
            "8640",
            "6912",
            "144",
            "60"
          ],
          "answer": 0,
          "explanation": "把每家看成一个整体，4个家庭围圆桌且座位有编号：圆排列(4-1)!=6种，再乘10个座位位置（旋转10种）。每家内部排列3!×3!×2!×2!=144种。总数=6×10×144=8640，选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_09",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下面的程序中，使用整数表示一种组合。整数二进制表示的某一位为1，表示该位对应的数被选中。zuhe_next函数按组合对应的整数由大到小的顺序，求出组合c的下一个组合。横线处可以填入的是（  ）。\nint intlow2(int c) {\nreturn ________;\n}\nint zuhe_next_incur(int c, int n, int l) {\nif (n == 1) return c;\nif ((c & (1 << l)) == 0) {\nint d = intlow2(c);\nc = (c & ~d);\nc = (c | (d >> 1));\n} else {\nc = (c & ~(1 << l));\nc = zuhe_next_incur(c, n - 1, l + 1);\nint d = intlow2(c);\nc = (c | (d >> 1));\n}\nreturn c;\n}",
          "options": [
            "((c - 1) ^ c)",
            "(((c - 1) ^ c) + 1)",
            "(((c - 1) ^ c) >> 1)",
            "((((c - 1) ^ c) + 1) >> 1)"
          ],
          "answer": 3,
          "explanation": "intlow2应返回c的最低位1。设c最低位为第k位，则(c-1)将第k位变0、低位变1，(c-1)^c得到2^(k+1)-1，再加1得2^(k+1)，右移1位得2^k即最低位，选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_21",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "你有三种硬币，分别面值2元、5元和7元，每种硬币都有足够多。买一本书需要27元，则有8种硬币组合（组合与顺序无关）可以正好付清，且不需要对方找钱。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "枚举2a+5b+7c=27的非负整数解：c=0时b=1,3,5共3组；c=1时b=0,2,4共3组；c=2时b=1共1组；c=3时b=0共1组，总计3+3+1+1=8种，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_27",
          "kp": "kp8_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：排队\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小杨所在班级共有n位同学，依次以1到n标号。这n位同学想排成一行队伍，其中有些同学之间关系非常好，在队伍里需要排在相邻的位置。具体来说，有m对这样的关系，第i对关系给出a、b，表示排队时编号为a的同学需要排在编号为b的同学前面，并且两人在队伍中相邻。求总共有多少种排队方式，对1e9+7取模。\n输入：第一行两个整数n、m；接下来m行每行两个整数a、b表示一对关系。\n输出：一行一个整数，表示答案对1e9+7取模的结果。",
          "options": [],
          "answer": null,
          "explanation": "思路：把每条相邻关系看成一条有向边a→b，整条队伍就是若干条这样的链（及孤立点）。若有冲突（某点出度>1、入度>1或成环）则答案为0。统计链的条数（没有前驱的节点个数）为cnt，把这些链（含孤立点）任意排列，方案数为cnt!，因为每条链内部顺序已由关系唯一确定。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nconst int N = 2e5 + 5;\nconst int mod = 1e9 + 7;\nint n, m;\nint pre[N], suf[N];\nint vis[N];\nint cnt;\nint ans;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    ans = 1;\n    for (int i = 1; i <= m; i++) {\n        int a, b;\n        scanf(\"%d%d\", &a, &b);\n        if (pre[b] == a && suf[a] == b)\n            continue;\n        if (pre[b] || suf[a])\n            ans = 0;\n        pre[b] = a;\n        suf[a] = b;\n    }\n    for (int i = 1; i <= n; i++) {\n        if (vis[i])\n            continue;\n        int j = i;\n        while (j) {\n            if (vis[j] == i)\n                ans = 0;\n            if (vis[j])\n                break;\n            vis[j] = i;\n            j = suf[j];\n        }\n    }\n    for (int i = 1; i <= n; i++)\n        cnt += !pre[i];\n    for (int i = 1; i <= cnt; i++)\n        ans = 1ll * ans * i % mod;\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 2\n1 3\n2 4",
              "expectedOutput": "2"
            },
            {
              "input": "3 0",
              "expectedOutput": "6"
            },
            {
              "input": "3 2\n1 2\n2 1",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "l8_202503_01",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "国家\"以旧换新\"政策仍在继续，小杨家决定在家里旧的冰箱、电视、洗衣机、微波炉中选两种换新。其中，冰箱有4种型号可选，电视有6种型号可选，洗衣机有3种型号可选，微波炉有5种型号可选。请问小杨家共有多少种换新的方案？（  ）。",
          "options": [
            "18",
            "119",
            "238",
            "360"
          ],
          "answer": 1,
          "explanation": "从4种电器中选2种，再分别选型号。6对电器组合的型号数乘积之和：4×6+4×3+4×5+6×3+6×5+3×5=24+12+20+18+30+15=119，选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_19",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "5个相同的红球和4个相同的蓝球排成一排，要求蓝球不能相邻，则一共有15种排列方案。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "先排5个相同的红球（只有1种），形成6个空位，选4个空位放蓝球，方案数为C(6,4)=15，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_25",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "从32名学生中选出4人分别担任班长、副班长、学习委员和组织委员，共有C(32,4)种不同的选法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "四个职务互不相同，属于排列而不是组合，应为P(32,4)=32×31×30×29种，不是C(32,4)，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与错排等计数模型需熟练运用。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_02",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "又到了毕业季，学长学姐们都在开心地拍毕业照。现在有3位学长、3位学姐希望排成一排拍照，要求男生不相邻、女生不相邻。请问共有多少种拍照方案？（  ）。",
          "options": [
            "720",
            "72",
            "36",
            "2"
          ],
          "answer": 1,
          "explanation": "男生女生都必须交替排列，只有两类交替方式：男男女...即\"男-女-男-女-男-女\"或\"女-男-女-男-女-男\"两种框架。男生内部排列3!=6种，女生内部排列3!=6种，共2×6×6=72种，选B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_19",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "5个相同的红球和4个相同的蓝球排成一排，要求每个蓝球的两侧都必须至少有一个红球，则一共有15种排列方案。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "5个红球排好形成4个内部空档，4个蓝球必须各占一个内部空档才能使两侧都有红球，于是只有唯一一种排列，而不是15种，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_25",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "从32名学生中选出4人分别担任班长、副班长、学习委员和组织委员，老师要求班级综合成绩排名最后的4名学生不得参选班长或学习委员（仍可以参选副班长和组织委员），则共有 28×27×30×29 种不同的选法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "班长从除末4名外的28人中选28种，学习委员再从剩余27人选27种，副班长从32人中减去已选2人得30种，组织委员剩29种，共28×27×30×29=657720种，说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_02",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨和小刘是好朋友，她们在逛商场时发现新设置的大头贴自拍机，于是决定一起拍一组照片。一组照片包括4张，这4张照片没有顺序区分。拍每张照片时，可以选择有相框或无相框、两人可以分别选择有头饰或无头饰、还可以从2种位置（小杨在左，或小刘在左）中选出一种。她们不希望一组照片中出现完全相同的相框、头饰、位置的组合。请问一组照片共有多少种不同的方案？（  ）。",
          "options": [
            "1820",
            "70",
            "24",
            "16"
          ],
          "answer": 0,
          "explanation": "每张照片有相框2选1、两人头饰各2选1、位置2选1，共2×2×2×2=16种不同组合。一组4张要互不相同，即从16种组合中选4张，C(16,4)=1820种，选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_19",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "有4个红球、3个蓝球和2个绿球排成一排（相同色球视为完全相同），则不同的排列方案数为1260种。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "9个球全排列再除以同色球内部的重复排列：9!/(4!3!2!)=362880/(24×6×2)=1260种，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_25",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "从32名学生中选出2人分别担任男生班长和女生班长（男生班长必须是男生，女生班长必须是女生），则共有 32×31 种不同的选法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "男生班长必须从男生中选、女生班长必须从女生中选，选法数为男数×女数，而不是任意的32×31，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_03",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "某社团有男生8人、女生7人。现需选出1名队长（性别不限）、1名副队长（性别不限）、2名宣传委员（两人无角色区别，且必须至少1名女生）。假如一人不能兼任多职，共有多少种不同选法？（  ）",
          "options": [
            "12012",
            "11844",
            "12474",
            "11025"
          ],
          "answer": 0,
          "explanation": "分两类：2名宣传委员为一女一男：选C(7,1)C(8,1)=56，队长从剩余13人选13，副队长从剩余12人选12，共56×13×12=8736；宣传委员为两女：C(7,2)=21，队长13、副队长12，共21×13×12=3276。总计8736+3276=12012，选A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_22",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "n个不同元素依次入栈的出栈序列数与将n个不同元素划分成若干非空子集的方案数相等。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "n个元素入栈的出栈序列数是第n个卡特兰数，而将n个元素划分成非空子集的方案数是第n个贝尔数，两者不相等，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_01",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "某班级有8名男生和6名女生，现要选出3人组成学习小组，要求小组中至少有1名男生和1名女生，则不同的选法共有（ ）种。",
          "options": [
            "112",
            "168",
            "224",
            "288"
          ],
          "answer": 3,
          "explanation": "总选法C(14,3)=364，减去全是男生C(8,3)=56和全是女生C(6,3)=20，得364-56-20=288，选D。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_04",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "从5本不同的数学书和4本不同的物理书中选取3本书，要求至少包含1本数学书，则不同的选法有（ ）种。",
          "options": [
            "60",
            "74",
            "80",
            "84"
          ],
          "answer": 2,
          "explanation": "总选法C(9,3)=84，减去全是物理书C(4,3)=4，得84-4=80，选C。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_10",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "有6个人排成一排照相，其中甲、乙两人必须相邻，且丙不能站在排头的不同排法有（ ）种。",
          "options": [
            "120",
            "144",
            "192",
            "240"
          ],
          "answer": 2,
          "explanation": "甲乙绑定成块，共5个对象排列5!×2(甲乙内部)=240种。减去丙在排头的情形：丙固定排头，甲乙块与其余2人共4个对象排列4!×2=48种。故240-48=192，选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_12",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "用数字0、1、2、3、4组成无重复数字的五位偶数，共有（ ）个。",
          "options": [
            "48",
            "60",
            "72",
            "96"
          ],
          "answer": 1,
          "explanation": "末位取0时前4位任意排列4!=24个；末位取2或4时，首位不能为0且不能等于末位，有3种选择，中间3位从剩余3个数字排列3!=6，共2×3×6=36个。总计24+36=60，选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_01",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "从5本不同的算法书和7本不同的数学书中选出4本，要求两类书都至少选1本，共有（  ）种不同选法。",
          "options": [
            "420",
            "455",
            "465",
            "495"
          ],
          "answer": 1,
          "explanation": "总选法C(12,4)=495，减去全是算法书C(5,4)=5和全是数学书C(7,4)=35，得495-5-35=455，选B。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_02",
          "kp": "kp8_02",
          "type": "choice",
          "difficulty": 1,
          "question": "6个人排成一排照相，其中甲、乙两人不能相邻，共有（  ）种不同排法。",
          "options": [
            "240",
            "480",
            "600",
            "720"
          ],
          "answer": 1,
          "explanation": "6人全排列6!=720种，减去甲乙相邻的情形：甲乙绑定成块与其余4人共5个对象排列5!×2=240种。不相邻排法为720-240=480，选B。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_17",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "将n个不同元素围成一圈，若只把旋转视为同一种排法、翻转仍视为不同排法，则方案数为(n-1)!。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "圆排列中n个元素的排列数为(n-1)!，只消除旋转等价、保留翻转差异，说法正确。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_18",
          "kp": "kp8_02",
          "type": "judge",
          "difficulty": 1,
          "question": "从n个不同元素中可重复地选取m个且不考虑顺序，方案数为C(n+m, m)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "可重复组合的隔板法结果为C(n+m-1, m)（或C(n+m-1, n-1)），而不是C(n+m, m)，说法错误。排列讲究顺序、组合不讲究顺序，多重集排列与隔板法等计数模型需熟练运用。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_27",
          "kp": "kp8_02",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：堆石子\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：有m堆石子，编号1到m，石子数量分别记为a[1..m]。要求第1堆石子恰有n个（a[1]=n），且此后每堆石子数量严格小于前一堆，即a[i]<a[i-1]，并且每堆至少一个石子。在总石子数量不设限制的情况下，求有多少个满足要求的堆放方案；若不存在输出0。方案数可能很大，输出对1e9+7取模的结果。\n输入：一行两个正整数m和n。\n输出：一个整数，表示方案数对1e9+7取模后的结果。",
          "options": [],
          "answer": null,
          "explanation": "思路：条件等价于从1到n-1这n-1个数中选出m-1个不同的数作为a[2..m]（按严格递减排序后放置），因此方案数为组合数C(n-1, m-1)。若m-1>n-1即m>n则方案数为0。用乘法逆元计算组合数并取模1e9+7。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nconst int MOD = (int)1e9 + 7;\nint qpow(int base, int exp) {\n    if (!exp) return 1;\n    if (exp & 1) return (long long)base * qpow((long long)base * base % MOD, exp >> 1) % MOD;\n    return qpow((long long)base * base % MOD, exp >> 1);\n}\nint comb(int n, int m) {\n    if (m > n) return 0;\n    int ans = 1;\n    for (int i = 0; i < m; ++i) {\n        ans = (long long)ans * (n - i) % MOD;\n        ans = (long long)ans * qpow(i + 1, MOD - 2) % MOD;\n    }\n    return ans;\n}\nint main() {\n    int m, n;\n    cin >> m >> n;\n    cout << comb(n - 1, m - 1) << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5",
              "expectedOutput": "6"
            }
          ]
        }
      ]
    },
    "kp8_03": {
      "title": "杨辉三角",
      "questions": [
        {
          "id": "l8_202312_18",
          "kp": "kp8_03",
          "type": "judge",
          "difficulty": 1,
          "question": "杨辉三角，是二项式系数的一种三角形排列，在中国南宋数学家杨辉1261年所著的《详解九章算法》一书中出现，是中国数学史上的一项伟大成就。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "杨辉三角正是二项式系数在三角形中的一种几何排列，最早见于南宋杨辉《详解九章算法》（1261年），是中国数学史的重要成就，说法正确。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_13",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint a[10][10];\nint main() {\nint m = 5, n = 4;\nfor (int x = 0; x <= m; x++) a[x][0] = 1;\nfor (int y = 1; y <= n; y++) a[0][y] = 1;\nfor (int x = 1; x <= m; x++)\nfor (int y = 1; y <= n; y++)\na[x][y] = a[x - 1][y] + a[x][y - 1];\ncout << a[m][n] << endl;\nreturn 0;\n}",
          "options": [
            "4",
            "5",
            "126",
            "3024"
          ],
          "answer": 2,
          "explanation": "边界全为1，递推a[x][y]=a[x-1][y]+a[x][y-1]正是杨辉三角/组合数C(x+y,x)，故a[5][4]=C(9,5)=C(9,4)=126，输出126，选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_12",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "二项展开式(a+b)^n的系数，正好满足杨辉三角的规律。当n=5时，二项式展开式中(a^2)(b^3)项的系数是（  ）。",
          "options": [
            "5",
            "9",
            "10",
            "8"
          ],
          "answer": 2,
          "explanation": "(a+b)^5展开式中a²b³项的系数为C(5,2)=C(5,3)=10，与杨辉三角第6行对应，选C。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_09",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序实现了输出杨辉三角形，代码中横线部分应该填入的是（  ）。\n#include <iostream>\nusing namespace std;\n#define N 35\nint a[N][N];\nint main() {\nint n;\ncin >> n;\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= i; j++) {\nif (j == 1 || j == i) a[i][j] = 1;\nelse __________\n}\nfor (int i = 1; i <= n; i++) {\nfor (int j = 1; j <= i; j++) cout << a[i][j];\ncout << endl;\n}\nreturn 0;\n}",
          "options": [
            "a[i][j] = a[i - 1][j - 1] + a[i - 1][j];",
            "a[i][j] = a[i][j - 1] + a[i - 1][j];",
            "a[i][j] = a[i - 1][j] + a[i - 1][j];",
            "a[i][j] = a[i - 1][j - 1] + a[i][j];"
          ],
          "answer": 0,
          "explanation": "杨辉三角的核心递推式：中间元素等于左上与正上方元素之和，即a[i][j]=a[i-1][j-1]+a[i-1][j]，选A。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_07",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "二项式(1+x)^6的展开式中x³项的系数是（  ）。",
          "options": [
            "6",
            "15",
            "20",
            "120"
          ],
          "answer": 2,
          "explanation": "(1+x)^6展开式中x³的系数为C(6,3)=6!/(3!3!)=20，选C。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_23",
          "kp": "kp8_03",
          "type": "judge",
          "difficulty": 1,
          "question": "杨辉三角中的第n行、第m项，即为将二项式(a+b)^n展开后a^(n-m)b^m项的系数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "若把杨辉三角从第0行开始编号，第n行确为(a+b)^n的系数，但题目未指明行号从0开始；按通常第1行从1开始计，第n行对应(a+b)^(n-1)的系数，故原说法不成立，判断错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_14",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序实现了输出杨辉三角形，代码中横线部分应该填入的是（  ）。\n#include <iostream>\nusing namespace std;\n#define N 35\nint a[N];\nint main() {\nint n;\ncin >> n;\nfor (int i = 0; i < n; i++) {\na[i] = 1;\nfor (int j = i - 1; j > 0; j--)\n________;\nfor (int j = 0; j <= i; j++)\ncout << a[j] << \" \";\ncout << endl;\n}\nreturn 0;\n}",
          "options": [
            "a[j] += a[j + 1]",
            "a[j] += a[j - 1]",
            "a[j - 1] += a[j]",
            "a[j + 1] += a[j]"
          ],
          "answer": 1,
          "explanation": "用一维数组滚动生成杨辉三角：每行先把末位置1，再从右往左更新a[j]=a[j]+a[j-1]，即a[j] += a[j-1]，选B。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_15",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题程序（输出杨辉三角形）的时间复杂度为（  ）。\n（外层循环i从0到n-1，内层j从0到i）",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(n^3)"
          ],
          "answer": 2,
          "explanation": "外层循环n次，第i次循环内层执行约i次，总操作数为1+2+...+n=n(n+1)/2，时间复杂度为O(n²)，选C。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_06",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "二项式 (1-x)^6 的展开式中 x^2 项的系数是（  ）。",
          "options": [
            "720",
            "120",
            "20",
            "15"
          ],
          "answer": 3,
          "explanation": "(1-x)^6展开式中x²项来自C(6,2)·1^4·(-x)^2=C(6,2)x²=15x²，系数为15，选D。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_04",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "二项式 (2x-1)^8 的展开式中 x^5 项的系数为（  ）。",
          "options": [
            "-7168",
            "7168",
            "-1792",
            "1792"
          ],
          "answer": 2,
          "explanation": "(2x-1)^8的展开式中x^5项为C(8,5)(2x)^5(-1)^3=C(8,5)·2^5·(-1)=-56×32=-1792，选C。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_20",
          "kp": "kp8_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在杨辉三角形中，第n行（从0开始计数，即第n行有n+1个数）的所有数字之和等于2^n。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "杨辉三角第n行的数字即二项式系数C(n,0)到C(n,n)，其和为2^n，说法正确。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_02",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在杨辉三角中，从第0行开始计数，第10行的所有数之和为（ ）。",
          "options": [
            "512",
            "1024",
            "2048",
            "4096"
          ],
          "answer": 1,
          "explanation": "杨辉三角第n行所有数之和为2^n，第10行之和为2^10=1024，选B。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_17",
          "kp": "kp8_03",
          "type": "judge",
          "difficulty": 1,
          "question": "对于任意正整数n，二项式(x+y)^n展开式中各项的二项式系数之和等于2^n。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "令x=y=1，则(1+1)^n=2^n，即各项二项式系数之和等于2^n，说法正确。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_03",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "展开式 (x^2 + 1/x)^6 中，常数项的系数为（  ）。",
          "options": [
            "6",
            "12",
            "15",
            "20"
          ],
          "answer": 2,
          "explanation": "通项为C(6,k)(x²)^k(1/x)^(6-k)=C(6,k)x^(3k-6)。常数项要求3k-6=0即k=2，系数为C(6,2)=15，选C。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_04",
          "kp": "kp8_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码用于预处理组合数，横线处应填入的是（  ）。\nfor (int i = 0; i <= n; i++) {\nc[i][0] = c[i][i] = 1;\nfor (int j = 1; j < i; j++)\nc[i][j] = __________;\n}",
          "options": [
            "c[i - 1][j - 1] + c[i - 1][j]",
            "c[i][j - 1] + c[i - 1][j - 1]",
            "c[i - 1][j] + c[i][j + 1]",
            "c[i][j - 1] * c[i - 1][j]"
          ],
          "answer": 0,
          "explanation": "组合数递推公式为C(i,j)=C(i-1,j-1)+C(i-1,j)，即c[i][j]=c[i-1][j-1]+c[i-1][j]，选A。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_19",
          "kp": "kp8_03",
          "type": "judge",
          "difficulty": 1,
          "question": "杨辉三角中的组合数满足 C(n,k) = C(n,k-1) + C(n-1,k-1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "杨辉三角递推公式应为C(n,k)=C(n-1,k-1)+C(n-1,k)，题中给出的递推关系错误，说法错误。杨辉三角的每一项即组合数，掌握递推式a[i][j]=a[i-1][j-1]+a[i-1][j]即可求二项式系数。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp8_04": {
      "title": "倍增法",
      "questions": [
        {
          "id": "l8_202312_10",
          "kp": "kp8_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nlong long power_mod(long long a, long long n, long long mod) {\nif (n == 0) return 1;\na = a % mod;\nif (n == 1) return a;\nlong long pw = power_mod(a, n / 2, mod);\nlong long pw2 = pw * pw % mod;\nif (n % 2 == 0) return pw2;\nreturn pw2 * a % mod;\n}",
          "options": [
            "O(n)",
            "O(an)",
            "O(log(n))",
            "O(log(n)×a)"
          ],
          "answer": 2,
          "explanation": "这是快速幂，采用倍增思想每次把指数减半。设T(n)为耗时，则T(n)=T(n/2)+常数，由主定理可得T(n)=O(log n)，选C。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_25",
          "kp": "kp8_04",
          "type": "judge",
          "difficulty": 1,
          "question": "给定double类型的变量x，且其值大于等于0，我们可以通过二分法求出sqrt(x)的近似值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "函数y=x²在值域[0,+∞)上单调递增，因此在[0,x]区间上对x²进行二分查找即可逼近sqrt(x)，二分法可行，说法正确。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_27",
          "kp": "kp8_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：大量的工作沟通\n时间限制：2.0 s  内存限制：128.0 MB\n问题描述：某公司有N名员工，编号从0至N-1。其中除0号员工是老板，其余每名员工都有一个直接领导，编号为i的员工的直接领导是fi。员工x可以管理员工y，当且仅当x=y，或x=fi，或x可以管理fi。现在有一些同事要开展合作，希望找到一位同事主持合作，这位同事必须能够管理参与合作的所有同事；如果有多名满足条件的员工，希望找到编号最大的员工。\n输入：第一行一个整数N；第二行N-1个正整数，依次为f1..f(N-1)；第三行一个整数Q；接下来Q行，每行以整数m开头，后跟m个整数表示参与的员工编号。\n输出：Q行，每行一个整数为每场合作的主持人选。",
          "options": [],
          "answer": null,
          "explanation": "思路：能够管理某组员工的人，是该组员工的最近公共祖先lca及其所有祖先。题目要求编号最大，故预处理mxId[u]表示从根到u路径上所有节点编号的最大值，对每组询问先求所有参与员工的lca，再输出mxId[lca]。求lca可用倍增法或树链剖分实现。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstdlib>\n#include <cstring>\n#include <algorithm>\n#include <string>\n#include <map>\n#include <iostream>\n#include <cmath>\n#include <vector>\n#include <queue>\nusing namespace std;\nconst int N = 100005;\nint fa[N], sz[N], dep[N], son[N], tp[N], mxId[N];\nint cnt, fir[N], tar[N], nxt[N];\nvoid link(int a, int b) {\n    tar[++ cnt] = b, nxt[cnt] = fir[a], fir[a] = cnt;\n}\nvoid dfs(int x, int mxid) {\n    int Mx = 0; sz[x] = 1;\n    mxId[x] = max(x, mxid);\n    for (int i = fir[x]; i; i = nxt[i]) {\n        dep[tar[i]] = dep[x] + 1;\n        dfs(tar[i], mxId[x]);\n        sz[x] += sz[tar[i]];\n        if (Mx < sz[tar[i]])\n            Mx = sz[son[x] = tar[i]];\n    }\n}\nvoid gettp(int x) {\n    tp[x] = x;\n    if (son[fa[x]] == x)\n        tp[x] = tp[fa[x]];\n    for (int i = fir[x]; i; i = nxt[i])\n        gettp(tar[i]);\n}\nint lca(int x,int y){\n    while (tp[x] != tp[y])\n        dep[tp[x]] > dep[tp[y]] ? x = fa[tp[x]] : y = fa[tp[y]];\n    return dep[x] < dep[y] ? x : y;\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    for(int i = 2; i <= n; i ++)\n        scanf(\"%d\", &fa[i]), link(++ fa[i], i);\n    dfs(1, 1), gettp(1);\n    int q;\n    scanf(\"%d\", &q);\n    while(q --) {\n        int m, x, y;\n        scanf(\"%d%d\", &m, &x), x ++;\n        for(int i = 2; i <= m; i ++)\n            scanf(\"%d\", &y), x = lca(x, ++ y);\n        cout << mxId[x] - 1 << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n0 0 2 2\n3\n2 3 4\n3 2 3 4\n2 1 4",
              "expectedOutput": "2\n2\n0"
            },
            {
              "input": "7\n0 1 0 2 1 2\n5\n2 4 6\n2 4 5\n3 4 5 6\n4 2 4 5 6\n2 3 4",
              "expectedOutput": "2\n1\n1\n1\n0"
            }
          ]
        },
        {
          "id": "l8_202403_25",
          "kp": "kp8_04",
          "type": "judge",
          "difficulty": 1,
          "question": "给定double类型的变量x，且其值大于等于0，我们可以通过二分法求出sqrt(x)的近似值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "y=x²在[0,+∞)上单调，可在[0,x]区间对x²二分逼近sqrt(x)，因此可以用二分法求sqrt(x)的近似值，说法正确。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_27",
          "kp": "kp8_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：接竹竿\n题面描述：每张牌上有一个点数，将给定的牌依次放入一列牌的末端。若放入之前这列牌中已有与这张牌点数相同的牌，则小杨会将这张牌和点数相同的牌之间的所有牌全部取出队列（包括这两张牌本身）。小杨有一个长度为n的卡牌序列a，有q次询问，每次给出l、r，问如果用下标在[l,r]的所有卡牌按下标顺序玩接竹竿游戏，最后队列中剩余的牌数。\n输入：第一行一个正整数T表示测试组数；每组数据第一行一个正整数n，第二行n个正整数，第三行一个正整数q，接下来q行每行两个正整数l、r。\n输出：每组数据对每次询问输出一行答案。",
          "options": [],
          "answer": null,
          "explanation": "思路：记nxt[i]为i之后第一个与a[i]点数相同的牌位置。一次询问[l,r]模拟放置：当前位置的牌能留下当且仅当nxt[i]>r。用倍增表nxt[i][j]表示从i出发跳2^j次配对（每次跳到nxt后再往后一格），查询时先用倍增快速跳到能留下的位置并统计留下的牌数，复杂度O(log n)每次询问。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\n#define ll long long\nconst int N = 1e5+10;\nint a[N];\nint nxt[N][30],pos[20];\nint main(){\n    int t;\n    cin>>t;\n    while(t--){\n    int n;\n    cin>>n;\n    memset(pos,0,sizeof pos);\n    for(int i=1;i<=n;i++){\n        cin>>a[i];\n        for(int j=0;j<=20;j++)nxt[i][j]=n+1;\n    }\n    for(int i=n;i>=1;i--){\n        if(!pos[a[i]]){\n            nxt[a[i]][0]=n+1;\n            pos[a[i]]=i;\n        }else{\n            nxt[i][0]=pos[a[i]];\n            pos[a[i]]=i;\n        }\n    }\n    for(int i=n;i>=1;i--){\n        for(int j=1;j<=20;j++){\n            if(nxt[i][j-1]+1<=n)\n            nxt[i][j]=nxt[nxt[i][j-1]+1][j-1];\n        }\n    }\n    int q;\n    cin>>q;\n    while(q--){\n        int l,r;\n        cin>>l>>r;\n        int ii=l;\n        int ans=0;\n        while(ii<=r){\n            while(ii<=r&&nxt[ii][0]>r){\n                ii++;\n                ans++;\n            }\n            if(ii>r)break;\n            for(int j=20;j>=0;j--){\n                if(nxt[ii][j]<=r){\n                    ii=nxt[ii][j];\n                    break;\n                }\n            }\n            ii++;\n        }\n        cout<<ans<<\"\\n\";\n    }\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "1\n6\n1 2 2 3 1 3\n4\n1 3\n1 6\n1 5\n5 6",
              "expectedOutput": "1\n1\n0\n2"
            }
          ]
        },
        {
          "id": "l8_202503_27",
          "kp": "kp8_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：割裂\n时间限制：4.0 s  内存限制：512.0 MB\n题面描述：小杨有一棵包含n个节点的树，其中节点的编号从1到n。小杨设置了k个好点对和1个坏点对。一个节点能够被删除，当且仅当：删除该节点后对于所有的好点对(u,v)，u和v仍然连通；删除该节点后坏点对(u,v)不连通。如果点对中的任意一个节点被删除，其视为不连通。小杨想知道有多少个节点能够被删除。\n输入：第一行两个正整数n、k；接下来n-1行每行两个正整数表示一条边；接下来k行每行两个正整数表示一个好点对；最后一行两个正整数表示坏点对。\n输出：一个正整数，表示能够删除的节点个数。",
          "options": [],
          "answer": null,
          "explanation": "思路：用树上差分+LCA统计。对每个好点对(u,v)，在u、v处+1，lca处-1，lca的父处再-1，然后自底向上累加，g[x]表示删除x后会影响的好点对个数（不含x本身端点的情况通过lca差分自动处理）；坏点对同理求h[x]。x可删除当且仅当g[x]==0且h[x]>0。求lca用倍增法，复杂度O(n log n)。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 1e6+10;\nint n, k;\nvector<int> e[N];\nint f[N][25], dep[N], g[N], h[N];\nvoid dfs(int u, int fa){\n    dep[u] = dep[fa] + 1;\n    f[u][0] = fa;\n    for(int i = 1; i <= 20; i++){\n        f[u][i] = f[f[u][i - 1]][i - 1];\n    }\n    for(auto v: e[u]){\n        if(v == fa) continue;\n        dfs(v, u);\n    }\n}\nint lca(int u, int v){\n    if(dep[u] < dep[v]) swap(u, v);\n    int t = dep[u] - dep[v];\n    for(int i = 0; i <= 20; i++){\n        if(t & (1 << i)) u = f[u][i];\n    }\n    for(int i = 20; i >= 0; i--){\n        if(f[u][i] != f[v][i])\n            u = f[u][i], v = f[v][i];\n    }\n    if(u == v) return u;\n    return f[u][0];\n}\nint ans;\nvoid dfs2(int u, int fa){\n    for(auto v: e[u]){\n        if(v == fa) continue;\n        dfs2(v, u);\n        g[u] += g[v];\n        h[u] += h[v];\n    }\n    if(!g[u] && h[u]) {\n        ans++;\n    }\n}\nvoid solve(){\n    cin >> n >> k;\n    for(int i = 1; i < n; i++){\n        int u, v;\n        cin >> u >> v;\n        e[u].push_back(v);\n        e[v].push_back(u);\n    }\n    dfs(1, 0);\n    for(int i = 1; i <= k; i++){\n        int u, v;\n        cin >> u >> v;\n        int lc = lca(u, v);\n        g[u]++, g[v]++, g[lc]--, g[f[lc][0]]--;\n    }\n    int u, v;\n    cin >> u >> v;\n    int lc = lca(u, v);\n    h[u]++, h[v]++, h[lc]--, h[f[lc][0]]--;\n    dfs2(1, 0);\n    cout << ans << '\\n';\n}\nint main(){\n    solve();\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6 2\n1 3\n1 5\n3 6\n3 2\n5 4\n5 4\n5 3\n2 6",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l8_202506_26",
          "kp": "kp8_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：树上旅行\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵有n个结点的有根树，结点以1到n编号，根结点编号为1。小A进行q次旅行，第i次从起点s出发移动若干次。移动分两种：1.移动到当前结点的父结点（在根则不移动）；2.移动到当前结点所有子结点中编号最小的结点（在叶子则不移动）。移动以非零整数序列表示，正数a表示向上移a次，负数-a表示向下移a次。给出每次起点与序列，求终点编号。\n输入：第一行两个正整数n、q；第二行n-1个整数表示结点2..n的父结点编号；接下来每组询问先给s和序列长度k，再给k个非零整数。\n输出：q行，每行一个终点编号。",
          "options": [],
          "answer": null,
          "explanation": "思路：向上和向下移动次数可能很大，直接模拟会超时。用倍增法预处理每个结点向上2^i步到达的祖先par[i][u]，以及向下走2^i步（每次取编号最小的子结点）到达的结点son[i][u]。对一次移动a，把a二进制拆分，用倍增表在O(log n)内跳到目标；序列中每段正负移动分别用par与son表处理，总复杂度O((n+q)log n)。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nconst int L = 18;\nint n, q;\nint h[N], nx[N];\nint par[L][N], son[L][N];\nvoid dfs(int u) {\n    for (int i = 1; i < L; i++)\n        par[i][u] = par[i - 1][par[i - 1][u]];\n    son[0][u] = u;\n    for (int i = h[u]; i; i = nx[i]) {\n        dfs(i);\n        if (son[0][u] == u || i < son[0][u])\n            son[0][u] = i;\n    }\n    for (int i = 1; i < L; i++)\n        son[i][u] = son[i - 1][son[i - 1][u]];\n}\nint move(int go[L][N], int u, int step) {\n    for (int i = 0; i < L; i++)\n        if ((step >> i) & 1)\n            u = go[i][u];\n    return u;\n}\nint main() {\n    scanf(\"%d%d\", &n, &q);\n    for (int i = 2; i <= n; i++) {\n        scanf(\"%d\", &par[0][i]);\n        nx[i] = h[par[0][i]];\n        h[par[0][i]] = i;\n    }\n    par[0][1] = 1;\n    dfs(1);\n    while (q--) {\n        int s, k;\n        scanf(\"%d%d\", &s, &k);\n        while (k--) {\n            int a;\n            scanf(\"%d\", &a);\n            if (a < 0) s = move(son, s, -a);\n            else s = move(par, s, a);\n        }\n        printf(\"%d\\n\", s);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 4\n1 1 2 2\n3 3\n1 -1 -1\n2 5\n1 -1 1 -1 1\n5 8\n1 1 1 -1 -1 -1 -1 -1\n5 3\n-1 -1 1",
              "expectedOutput": "4\n1\n4\n2"
            },
            {
              "input": "8 3\n5 4 2 1 3 6 6\n8 1\n8\n8 2\n8 -8\n8 3\n8 -8 8",
              "expectedOutput": "1\n7\n1"
            }
          ]
        },
        {
          "id": "l8_202512_27",
          "kp": "kp8_04",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：宝石项链\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小A有一串包含n枚宝石的项链，宝石按顺序以1到n编号，第i枚与第i+1枚相邻（第n枚与第1枚相邻）。项链由m种宝石组成，第i枚宝石种类为t[i]。小A想将项链划分为若干连续段，要求每段都包含全部m种宝石。求满足条件时最多可以划分多少段。\n输入：第一行两个正整数n、m；第二行n个正整数t[i]。\n输出：一行一个整数，表示最多可划分的段数。",
          "options": [],
          "answer": null,
          "explanation": "思路：项链是环，先用双指针对每个起点i求最小的终点r，使得区间[i,r]恰好包含全部m种宝石，记jump[0][i]=r-i+1。再用倍增法预处理jump[k][i]表示从i出发走2^k个完整段到达的下一个起点，对每个起点倍增跳段并累计步数，取最大值即最多段数，复杂度O(n log n)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int L = 20;\nconst int N = 2e5 + 5;\nconst int oo = 1e9;\nint n, m;\nint t[N], jump[L][N];\nint cnt[N], tot;\nint ans;\nint go(int u) {\n    int cnt = 0, ans = 0;\n    for (int i = L - 1; i >= 0; i--)\n        if (cnt + jump[i][u] <= n) {\n            cnt += jump[i][u];\n            ans += 1 << i;\n            u = (u + jump[i][u] - 1) % n + 1;\n        }\n    return ans;\n}\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%d\", &t[i]);\n        t[i + n] = t[i];\n    }\n    for (int i = 1, r = 0; i <= n; i++) {\n        while (tot < m) {\n            r++;\n            if (!cnt[t[r]]++) tot++;\n        }\n        jump[0][i] = r - i + 1;\n        if (!--cnt[t[i]]) tot--;\n    }\n    for (int i = 1; i < L; i++)\n        for (int j = 1; j <= n; j++) {\n            int tar = (j + jump[i - 1][j] - 1) % n + 1;\n            jump[i][j] = min(jump[i - 1][j] + jump[i - 1][tar], oo);\n        }\n    for (int i = 1; i <= n; i++)\n        ans = max(ans, go(i));\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6 2\n1 2 1 2 1 2",
              "expectedOutput": "3"
            },
            {
              "input": "7 3\n3 1 3 1 2 1 2",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l8_202603_03",
          "kp": "kp8_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码实现了快速幂算法，其时间复杂度为（ ）。\nlong long fastPow(long long b, long long e, long long mod) {\nlong long result = 1;\nwhile (e > 0) {\nif (e & 1) result = result * b % mod;\nb = b * b % mod;\ne >>= 1;\n}\nreturn result;\n}",
          "options": [
            "O(e)",
            "O(log e)",
            "O(1)",
            "O(e^2)"
          ],
          "answer": 1,
          "explanation": "快速幂每次把指数右移一位，循环次数等于e的二进制位数O(log e)，因此时间复杂度为O(log e)，选B。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_22",
          "kp": "kp8_04",
          "type": "judge",
          "difficulty": 1,
          "question": "使用倍增法预处理区间最值问题时，预处理的时间复杂度为O(n log n)，查询的时间复杂度为O(1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "RMQ的ST表预处理每个区间的2^k长度最值，复杂度O(n log n)；查询取两段重叠区间取最值，复杂度O(1)，说法正确。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_05",
          "kp": "kp8_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序输出的值为（  ）。\n#include <iostream>\nusing namespace std;\nlong long qpow(long long a, long long b, long long mod) {\nlong long ans = 1 % mod;\nwhile (b) {\nif (b & 1) ans = ans * a % mod;\na = a * a % mod;\nb >>= 1;\n}\nreturn ans;\n}\nint main() {\ncout << qpow(3, 20, 17) << endl;\nreturn 0;\n}",
          "options": [
            "1",
            "4",
            "13",
            "16"
          ],
          "answer": 2,
          "explanation": "计算3^20 mod 17：3^4=81≡13，3^8≡13²=169≡16≡-1，3^16≡1，3^20=3^16×3^4≡1×13=13，输出13，选C。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_20",
          "kp": "kp8_04",
          "type": "judge",
          "difficulty": 1,
          "question": "快速幂通过二进制拆分指数，可以在O(log n)时间内计算 a^n mod m。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "快速幂把指数n按二进制拆分成log n位，每次循环平方底数并按位乘入答案，故可在O(log n)内计算a^n mod m，说法正确。倍增法把线性查找或树上跳跃优化到O(log n)，常用于LCA、快速幂与区间定位。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp8_05": {
      "title": "代数与平面几何",
      "questions": [
        {
          "id": "l8_202312_07",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知三个double类型的变量a、b和theta分别表示一个三角形的两条边长及二者的夹角（弧度），则下列哪个表达式可以计算这个三角形的面积？（  ）。",
          "options": [
            "a * b * sin(theta) / 2",
            "(a + b) * sin(theta) / 2",
            "a * b * cos(theta) / 2",
            "sqrt(a * a + b * b - 2 * a * b * cos(theta))"
          ],
          "answer": 0,
          "explanation": "两边夹一角求面积：以a为底，作高h，h/b=sin(theta)，即h=b·sin(theta)，故S=(1/2)ab·sin(theta)，选A。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_14",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nconst int N = 30;\nint cnt = 0;\nfor (int a = 1; a <= N; a++)\nfor (int b = a; a + b <= N; b++)\nfor (int c = b; a + b + c <= N; c++)\nif (a * a + b * b == c * c) cnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "3",
            "6",
            "11",
            "22"
          ],
          "answer": 0,
          "explanation": "程序统计满足a≤b≤c、a²+b²=c²且a+b+c≤30的勾股数组。依次手算可得3、4、5；5、12、13；6、8、10共3组，输出3，选A。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_22",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知int类型的变量a、b和h中分别存储着一个梯形的顶边长、底边长和高，则这个梯形的面积可以通过表达式(a + b) * h / 2求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "梯形面积为(a+b)×h/2，但a、b、h均为int类型，整数除法会截断小数部分，当面积不是整数时会丢失精度，因此不能用整数/2直接求得准确面积，说法错误。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_07",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知三个double类型的变量a、b和theta分别表示一个三角形的两条边长及二者的夹角（弧度），则下列哪个表达式可以计算这个三角形的周长？（  ）。",
          "options": [
            "a * b * sin(theta) / 2",
            "a + b + (a + b) * sin(theta) / 2",
            "a * b * cos(theta) / 2",
            "a + b + sqrt(a * a + b * b - 2 * a * b * cos(theta))"
          ],
          "answer": 3,
          "explanation": "周长=两边之和+第三边。由余弦定理，第三边c=sqrt(a²+b²-2ab·cos(theta))，因此周长为a+b+c，选项D正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_09",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如下图所示，半径为r、圆心角为t（弧度）的扇形，下面哪个表达式能够求出顶部阴影部分的面积？（  ）。\n（图示为扇形，阴影为其顶部弓形区域，两侧是半径r构成的三角形）",
          "options": [
            "r * r * sin(t) / 2",
            "r * r * t / 2",
            "r * r * (t - sin(t))",
            "r * r * (t - sin(t)) / 2"
          ],
          "answer": 3,
          "explanation": "扇形面积为r²t/2，两侧半径围成的等腰三角形面积为r²sin(t)/2，顶部弓形阴影面积=扇形面积-三角形面积=r²(t-sin(t))/2，选D。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_18",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "孙子定理是求解一次同余方程组的方法，最早见于中国南北朝时期（公元5世纪）的数学著作《孙子算经》。又称中国余数定理，是中国数学史上的一项伟大成就。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "孙子定理（中国剩余定理）用于求解一次同余式组，最早见于《孙子算经》（约公元5世纪），是中国数学史上的伟大成就，说法正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_22",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知int类型的变量a、b和c中分别存储着一个三角形的三条边长，则这个三角形的面积可以通过表达式sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c)) / 4求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "这是海伦公式的变形：令p=(a+b+c)/2，面积S=sqrt(p(p-a)(p-b)(p-c))=sqrt((a+b+c)(b+c-a)(a+c-b)(a+b-c))/4，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_02",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "7进制数235转换成3进制数是（  ）。",
          "options": [
            "11121",
            "11122",
            "11211",
            "11112"
          ],
          "answer": 0,
          "explanation": "7进制235转为十进制：2×49+3×7+5=124。再转3进制：124=1×81+1×27+1×9+2×3+1，即11121，选A。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_07",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数100.001转换成十进制数是（  ）。",
          "options": [
            "4.25",
            "4.125",
            "4.5",
            "4.75"
          ],
          "answer": 1,
          "explanation": "二进制100为4，小数位.001表示1×(1/2³)=0.125，故100.001(2)=4+0.125=4.125，选B。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_10",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "小于或等于给定正整数n的数中，与n互质的数的个数，我们称为欧拉函数，记作φ(n)。下面说法错误的是（  ）。",
          "options": [
            "如果n是质数，那么φ(n)=n-1。",
            "两个质数一定是互质数。",
            "两个相邻的数一定是互质数。",
            "相邻的两个质数不一定是互质数。"
          ],
          "answer": 3,
          "explanation": "若n为质数，1到n-1都与n互质，φ(n)=n-1，A正确；不同质数没有公因子必互质，B正确；相邻整数gcd=1必互质，C正确。相邻的两个质数（如2和3、7和11）也一定互质，D说法错误。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_19",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知int类型的变量a和b中分别存储着一个直角三角形的两条直角边的长度，则斜边的长度可以通过表达式sqrt(a * a + b * b)求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "直角三角形斜边平方等于两直角边平方和，即c=sqrt(a²+b²)，表达式正确，说法正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_20",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的余弦函数，表达式cos(60)的结果类型为double、值约为0.5。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cos函数的参数是弧度而不是角度，cos(60)计算的是60弧度的余弦值，约等于0.154而不是0.5，说法错误。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_23",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知int类型的变量a和b中分别存储着一个直角三角形的两条直角边的长度，则该三角形的面积可以通过表达式a / 2.0 * b求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "直角三角形面积为两直角边乘积的一半，a/2.0*b先做浮点除法再乘b，得到正确的面积值，说法正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_24",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知等差数列的通项公式an=a1+(n-1)d，则前n项和的求和公式为Sn=n·(a1+an)/2。使用这一公式计算Sn的时间复杂度是O(1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "等差数列求和公式Sn=n(a1+an)/2正确，且只需常数次四则运算，时间复杂度为O(1)，说法正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_06",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知两个点A、B在平面直角坐标系下的坐标分别为(xa,ya)和(xb,yb)，并分别定义变量double xa, ya, xb, yb;存储坐标。假设直线AB的斜率存在，下列哪个表达式可以用来表达它？（  ）。",
          "options": [
            "(xa - xb) / (ya - yb)",
            "(xa - xb) / (yb - ya)",
            "(ya - yb) / (xa - xb)",
            "(ya - yb) / (xb - xa)"
          ],
          "answer": 2,
          "explanation": "直线斜率是纵坐标差除以横坐标差，即(ya-yb)/(xa-xb)，选C。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_20",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的函数，表达式log(1000)的结果类型为double、值约为3。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "log是自然对数（底数e），log(1000)约等于6.908而不是3；要得到3应使用log10(1000)，说法错误。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_25",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "要求解一元二次方程ax²+bx+c=0（a≠0）是否有实数根，需要先判断表达式a ^ 2 - b * 4 >= 0是否为真。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "判断实根应使用判别式b²-4ac≥0。题目写成a^2-b*4，其中^在C++中是按位异或而非乘方，形式也错误，说法错误。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_06",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已定义double类型的变量r和theta，分别表示图中圆半径和圆心角。下列表达式中可以求出弦长s的是（  ）。\n（图示：圆中圆心角theta对应的弦s，半径为r）",
          "options": [
            "r * cos(theta)",
            "r * cos(theta / 2) * 2",
            "r * sin(theta)",
            "r * sin(theta / 2) * 2"
          ],
          "answer": 3,
          "explanation": "圆心角theta对应的弦长，作圆心到弦的垂线，半弦长为r·sin(theta/2)，故弦长s=2r·sin(theta/2)，选D。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_09",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "2025是个神奇的数字，因为它是由两个数20和25拼接而成，而且2025=(20+25)²。小杨决定写个程序找找小于N的正整数中共有多少这样神奇的数字。下面程序横线处应填入的是（  ）。\n#include <string>\nint count_miracle(int N) {\nint cnt = 0;\nfor (int n = 1; n * n < N; n++) {\nint n2 = n * n;\nstd::string s = std::to_string(n2);\nfor (int i = 1; i < s.length(); i++)\nif (s[i] != '0') {\nstd::string sl = s.substr(0, i);\nstd::string sr = s.substr(i);\nint nl = std::stoi(sl);\nint nr = std::stoi(sr);\nif (_________) cnt++;\n}\n}\nreturn cnt;\n}",
          "options": [
            "nl + nr == n",
            "nl + nr == n2",
            "(nl + nr) * (nl + nr) == n",
            "(nl + nr) ^ 2 == n2"
          ],
          "answer": 0,
          "explanation": "神奇数满足n²由nl、nr拼接而成且n=nl+nr（Kaprekar数），因此判断条件应为nl+nr==n，选A。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_20",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的函数，表达式pow(2, 5)的结果类型为int、值为32。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++中pow函数返回double类型，pow(2,5)的结果类型是double而不是int，说法错误。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_23",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "定义int类型的变量a和b，求二次函数x²+ax+b取最小值时x的值，可以通过表达式-a / 2.0求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二次函数y=x²+ax+b是开口向上的抛物线，对称轴为x=-a/2，即最小值点，-a/2.0正确，说法正确。三角函数、余弦定理、海伦公式与数论结论常结合考查，公式要记准且注意弧度与单位。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_06",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已定义变量double a, b;，下列哪个表达式可以用来判断一元二次方程 x*x + a*x + b = 0 是否有实根？（  ）。",
          "options": [
            "4 * b - a * a < 0",
            "4 * b <= a * a",
            "a * a - 4 * b",
            "b * 4 - a * a"
          ],
          "answer": 1,
          "explanation": "一元二次方程x²+ax+b=0的判别式为Δ=a²-4b。方程有实根当且仅当Δ≥0，即a²≥4b，也就是4*b <= a*a，选B。A、D是Δ<0才成立的情形，C只是一个差值缺少比较。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_20",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的函数，表达式log(8) 的结果类型为double、值约为3。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "log是自然对数，log(8)≈2.079而非3，log2(8)=3才对。虽然结果类型确为double，但值约为3的说法错误。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_23",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知三个double类型的变量a、b和theta分别表示一个三角形的两条边长及二者的夹角（弧度），则三角形的周长可以通过表达式sqrt(a * a + b * b - 2 * a * b * cos(theta)) 求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "由余弦定理，sqrt(a²+b²-2ab·cosθ)求出的是第三条边的长度，而不是周长。要求周长还需加上a与b，说法错误。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_20",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的函数，对于int类型的变量x，表达式fabs(x)和sqrt(x * x)的结果总是近似相等的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "当x很大时，x*x可能超出int范围发生溢出，得到错误结果，使sqrt(x*x)与fabs(x)不相等；另外负整数fabs给出正数而(x*x)溢出为负时开方无定义，说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_23",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "已知两个double类型的变量r和theta分别表示一个扇形的圆半径及圆心角（弧度），则扇形的周长可以通过表达式(2 + theta) * r 求得。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "扇形周长等于两条半径加弧长：2r+r·θ=(2+θ)·r，说法正确。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_07",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知两个点(x1,y1)和(x2,y2)在平面直角坐标系中的坐标。下列C++表达式中，能正确计算这两点之间直线距离的是（  ）。",
          "options": [
            "sqrt((x1 - x2) ^ 2 + (y1 - y2) ^ 2)",
            "sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2))",
            "pow(x1 - x2, 2) + pow(y1 - y2, 2)",
            "abs(x1 - x2) + abs(y1 - y2)"
          ],
          "answer": 1,
          "explanation": "两点距离公式为√[(x1-x2)²+(y1-y2)²]。C++中^是按位异或不是乘方，A错误；C少了开方；D是曼哈顿距离。只有B正确用pow平方并开方，选B。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_19",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用math.h或cmath头文件中的函数，表达式sqrt(4)的结果类型为double。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中sqrt函数的返回类型为double，sqrt(4)的结果类型是double，说法正确。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_14",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知三个点(x1,y1)、(x2,y2)、(x3,y3)在平面直角坐标系中的坐标。下列C++表达式中，在精度误差范围1e-8内能正确计算判断这三个点是三点共线的表达式是（ ）。",
          "options": [
            "(x2-x1)/(y2-y1) == (x3-x1)/(y3-y1)",
            "(x2-x1)*(y3-y1)-(x3-x1)*(y2-y1) == 0",
            "fabs((x2-x1)*(y3-y1)-(x3-x1)*(y2-y1)) < 1e-8",
            "fabs((x2-x1)/(y2-y1)-(x3-x1)/(y3-y1)) < 1e-8"
          ],
          "answer": 2,
          "explanation": "三点共线等价于向量叉积为0，即(x2-x1)(y3-y1)-(x3-x1)(y2-y1)=0；浮点运算需允许误差，用fabs(...)<1e-8判断，选C。A、D用除法有除零风险，B用==判断浮点相等不可靠。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_07",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在平面直角坐标系中，三角形三个顶点为(0,0)、(3,0)、(0,4)，该三角形面积为（  ）。",
          "options": [
            "6",
            "12",
            "3",
            "24"
          ],
          "answer": 0,
          "explanation": "三个顶点构成直角三角形，两直角边分别为3和4，面积=1/2×3×4=6，选A。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_08",
          "kp": "kp8_05",
          "type": "choice",
          "difficulty": 1,
          "question": "某程序需要判断点(x,y)是否在以原点为圆心、半径为5的圆内或圆上。下列判断条件正确的是（  ）。",
          "options": [
            "x * x + y * y <= 25",
            "abs(x) + abs(y) <= 5",
            "x * x - y * y <= 25",
            "x + y <= 5"
          ],
          "answer": 0,
          "explanation": "点在圆内或圆上等价于到圆心距离不超过半径，即x²+y²≤5²=25，选A。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_23",
          "kp": "kp8_05",
          "type": "judge",
          "difficulty": 1,
          "question": "判断点(x,y)是否在以原点为圆心、半径为r的圆内或圆上时，可以比较x²+y²与r²，不必先开平方。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "因为x²+y²与r²均为非负，比较x²+y²≤r²与√(x²+y²)≤r完全等价，避免开方运算更高效，说法正确。三角函数、余弦定理、两点距离公式与圆的方程要记准，注意浮点误差与单位。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp8_06": {
      "title": "图论算法综合",
      "questions": [
        {
          "id": "l8_202312_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "使用邻接矩阵表达n个顶点的有向图，则该矩阵的大小为（  ）。",
          "options": [
            "n×(n+1)",
            "n×n",
            "n×(n-1)",
            "n×(n-1)/2"
          ],
          "answer": 1,
          "explanation": "邻接矩阵的行和列都对应n个顶点，即行号和列号均取0到n-1，因此矩阵为n行n列，大小为n×n，选B。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_06",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "一个无向图包含n个顶点，则其最小生成树包含多少条边？（  ）。",
          "options": [
            "n-1",
            "n",
            "n+1",
            "最小生成树可能不存在。"
          ],
          "answer": 3,
          "explanation": "n个顶点的树包含n-1条边，但题目没有保证图连通。若图不连通则不存在最小生成树，因此正确说法是D：最小生成树可能不存在。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_08",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对有n个元素的二叉排序树进行中序遍历，其时间复杂度是（  ）。",
          "options": [
            "O(1)",
            "O(log(n))",
            "O(n)",
            "O(n2)"
          ],
          "answer": 2,
          "explanation": "中序遍历需要依次访问树中的每个结点，每个结点恰好被访问一次，因此时间复杂度为O(n)，选C。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_12",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用出边的邻接表表达有向图，则下列选项中哪个是它表达的图？（  ）。\n（结构体edge中的next指向下一条边，Node中的first指向每个点的第一条边，构造出的边依次为0→1、1→2、1→3、2→3、3→0）",
          "options": [
            "0→1、1→3、3→2、2→1",
            "0→1、1→2、1→3、2→3、3→0",
            "0→1、0→3、1→3、2→3、3→2",
            "0→0、0→1、1→3、3→2、2→3"
          ],
          "answer": 1,
          "explanation": "按程序依次读入边，0号点指向1号点，1号点指向2、3号点，2号点指向3号点，3号点指向0号点，即0→1、1→2、1→3、2→3、3→0，选B。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_19",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "N个顶点的有向完全图（不带自环）有N×(N-1)/2条边。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "有向完全图中(x,y)与(y,x)是两条不同的边，因此不带自环的N个顶点有向完全图共有N×(N-1)条边，而不是N×(N-1)/2，说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_23",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "判断图是否连通只能用广度优先搜索算法实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "判断图的连通性不限于广度优先搜索，深度优先搜索同样可以从任意顶点出发遍历并统计访问到的顶点数，因此说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_05",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "使用邻接表表达一个无向简单图，图中包含v个顶点、e条边，则该表中边节点的个数为（  ）。",
          "options": [
            "v×(v-1)",
            "v×v",
            "2×e",
            "e"
          ],
          "answer": 2,
          "explanation": "无向图的每条边都要在两个端点的邻接表中各记录一次，因此边节点总数为2e，选C。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_06",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "关于生成树的说法，错误的是（  ）。",
          "options": [
            "一个无向连通图可以有多个生成树。",
            "一个无向图，只要连通，就一定有生成树。",
            "n个顶点的无向完全图，有n^(n-2)棵生成树。",
            "n个顶点的无向图，生成树包含n-1条边。"
          ],
          "answer": 3,
          "explanation": "无向连通图一定有生成树且通常有多个，A、B正确；Cayley定理给出n个顶点的完全图生成树数为n^(n-2)，C正确。D把结论推广到不连通的无向图，不连通图没有生成树，故D错误。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_15",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用邻接矩阵表达的带权无向图，则从顶点0到顶点3的最短距离为（  ）。\nint weight[4][4] = {\n{  0,   1,   7, 100},\n{  1,   0,   5,  15},\n{  7,   5,   0,   6},\n{100,  15,   6,   0}};",
          "options": [
            "100",
            "16",
            "12",
            "13"
          ],
          "answer": 2,
          "explanation": "用Dijkstra或直接手算0到3的最短路：0→1→2→3的距离为1+5+6=12，0→1→3为1+15=16，0→2→3为7+6=13，其余路径更长，最短为12，选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_19",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "N个顶点的无向完全图有N×(N-1)条边。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "无向完全图中边(x,y)与(y,x)是同一条边，因此N个顶点的无向完全图共有N×(N-1)/2条边，而不是N×(N-1)条，说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_21",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "求一个包含v个顶点、e条边的带权连通无向图的最小生成树，Prim算法的时间复杂度为O(v×e)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "Prim算法的复杂度与实现方式有关：用邻接矩阵实现为O(v²)，用二叉堆优化为O(e·log v)，并非O(v×e)，说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_23",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "可以使用深度优先搜索算法判断图的连通性。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "从任一顶点出发做深度优先搜索，统计访问到的顶点个数，若等于总顶点数则图连通，否则不连通，故DFS可以判断连通性，说法正确。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "有V个顶点、E条边的图的深度优先搜索遍历时间复杂度为（  ）。",
          "options": [
            "O(V)",
            "O(E)",
            "O(V+E)",
            "O(log(V+E))"
          ],
          "answer": 2,
          "explanation": "深度优先搜索每个顶点恰好被访问一次，每条边至多被检查两次，总时间复杂度为O(V+E)，选C。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_11",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "已知一棵二叉树有10个节点，则其中至多有（  ）个节点有2个子节点。",
          "options": [
            "4",
            "5",
            "6",
            "3"
          ],
          "answer": 0,
          "explanation": "设n2为有2个子节点的个数，叶节点数n0=n2+1。总节点n0+n1+n2=10，代入n0=n2+1得2n2+n1+1=10，即2n2=9-n1，n1取1时n2最大为4，选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_20",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在一个包含v个顶点、e条边的带权连通简单有向图上使用Dijkstra算法求最短路径，时间复杂度为O(v²)，可进一步优化至O(e + v·log v)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "朴素Dijkstra每次线性找最小顶点，复杂度O(v²)；用二叉堆/优先队列维护待选顶点可优化到O(e+v·log v)，说法正确。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_25",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "要判断无向图的连通性，在深度优先搜索和广度优先搜索中选择，深度优先的平均时间复杂度更低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "DFS和BFS判断无向图连通性都需要遍历所有顶点和边，时间复杂度都是O(V+E)，平均复杂度相同，不存在谁更低，说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：最远点对\n时间限制：1.0 s  内存限制：512.0 MB\n题面描述：小杨有一棵包含n个节点的树，树上每个节点要么是白色要么是黑色。小杨想知道相距最远的一对不同颜色节点的距离是多少。\n输入：第一行一个正整数n；第二行n个非负整数c1..cn（0或1，0白1黑）；接下来n-1行每行两个正整数表示一条边。保证树中存在不同颜色的点。\n输出：一个整数，表示最远不同色点对的距离。",
          "options": [],
          "answer": null,
          "explanation": "思路：树形DP。dfs时对每个节点x维护far[x][c]表示x的子树中颜色为c的节点的最大深度。处理子节点i时，用far[x][j]+far[i][j^1]-2·dep[x]更新答案（经过x的不同色点对距离），再用far[i]更新far[x]。最后还要考虑x本身与子树中异色点的距离。复杂度O(n)。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nvector<int> g[N];\nint col[N];\nint n;\nint dep[N],far[N][2];\nint ans;\nvoid dfs(int x,int fa){\n    dep[x]=dep[fa]+1;\n    far[x][col[x]]=dep[x];\n    for(int i:g[x]){\n        if(i!=fa){\n            dfs(i,x);\n            for(int j=0;j<2;j++){\n                if(far[x][j]!=-1&&far[i][j^1]!=-1){\n                    ans = max(ans,far[x][j]-dep[x]+far[i][j^1]-dep[x]);\n                }\n            }\n            for(int j=0;j<2;j++){\n                far[x][j]=max(far[x][j],far[i][j]);\n            }\n        }\n    }\n    ans = max(ans,far[x][col[x]^1]-dep[x]);\n}\nint main(){\n    int n;\n    cin>>n;\n    memset(far,-1,sizeof far);\n    for(int i=1;i<=n;i++){\n        cin>>col[i];\n    }\n    for(int i=1;i<n;i++){\n        int u,v;\n        cin>>u>>v;\n        g[u].push_back(v);\n        g[v].push_back(u);\n    }\n    dfs(1,0);\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n0 1 0 1 0\n1 2\n1 3\n3 4\n3 5",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l8_202406_27",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：空间跳跃\n时间限制：1.0 s  内存限制：512.0 MB\n题面描述：小杨在二维空间中有n个水平挡板，挡板之间彼此不重叠，第i个挡板处于水平高度hi，左右端点分别位于li与ri。小杨可以在挡板上左右移动，移动到右端点时若再向右移动会竖直掉落，落到下方第一个挡板上，左端点同理。在挡板上每移动1个单位长度耗时1，掉落每1个单位高度耗时1。小杨想知道，从第s个挡板上的左端点出发到第t个挡板需要耗费的最少时间。可能无法从第s个挡板到达第t个挡板。\n输入：第一行一个正整数n；第二行两个正整数s、t；接下来n行每行三个正整数li、ri、hi。\n输出：最少时间，无法到达则输出-1。",
          "options": [],
          "answer": null,
          "explanation": "思路：把每个挡板的左右端点各看成一个点建图：同一挡板两端点连权为r-l的边（横向移动）；对每个端点x，找到它正下方最高且横坐标覆盖x的挡板j，连权为hi-hj的边（掉落）。起点为s挡板左端点，终点为t挡板任一端点，跑Dijkstra求最短路。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int maxn = 1e4+10;\nstruct edge {\n    int v, w;\n    edge(){}\n    edge(int vv,int ww){ v=vv;w=ww; }\n};\nstruct node {\n    int dis, u;\n    node (){}\n    node (int diss,int uu){dis=diss;u=uu;}\n    bool operator>(const node& a) const { return dis > a.dis; }\n};\nvector<edge> e[maxn];\nint dis[maxn], vis[maxn];\npriority_queue<node, vector<node>, greater<node> > q;\nint cnt;\nvoid dijkstra(int s) {\n    for(int i=1;i<=cnt;i++)dis[i]=INT_MAX;\n    dis[s] = 0;\n    q.push(node(0, s));\n    while (!q.empty()) {\n        int u = q.top().u;\n        q.pop();\n        if (vis[u]) continue;\n        vis[u] = 1;\n        for (auto ed : e[u]) {\n            int v = ed.v, w = ed.w;\n            if (dis[v] > dis[u] + w) {\n                dis[v] = dis[u] + w;\n                q.push(node(dis[v], v));\n            }\n        }\n    }\n}\nmap<pair<int,int>,int> mp;\nvector<int> es[2010];\nint l[maxn],r[maxn],h[maxn];\nint main(){\n    int n;\n    cin>>n;\n    int s,t;\n    cin>>s>>t;\n    for(int i=1;i<=n;i++){\n        cin>>l[i]>>r[i]>>h[i];\n        mp[make_pair(l[i],h[i])]=i;\n        mp[make_pair(r[i],h[i])]=n+i;\n        es[i].push_back(i);\n        es[i].push_back(n+i);\n        e[i].push_back(edge(n+i,r[i]-l[i]));\n        e[n+i].push_back(edge(i,r[i]-l[i]));\n    }\n    cnt=2*n+1;\n    for(int i=1;i<=n;i++){\n        int hh = -1,idx = i;\n        for(int j=1;j<=n;j++){\n            if(i==j)continue;\n            if(l[j]<=l[i]&&l[i]<=r[j]&&h[j]<=h[i]){\n                if(h[j]>hh){ hh=h[j]; idx=j; }\n            }\n        }\n        if(hh!=-1){\n            if(!mp[make_pair(l[i],hh)]){ mp[make_pair(l[i],hh)]=cnt++; }\n            int v = mp[make_pair(l[i],hh)];\n            e[i].push_back(edge(v,h[i]-hh));\n            e[idx].push_back(edge(v,abs(l[i]-l[idx])));\n            e[n+idx].push_back(edge(v,abs(l[i]-r[idx])));\n            e[v].push_back(edge(idx,abs(l[i]-l[idx])));\n            e[v].push_back(edge(n+idx,abs(l[i]-r[idx])));\n            es[idx].push_back(v);\n        }\n        hh = -1,idx = i;\n        for(int j=1;j<=n;j++){\n            if(i==j)continue;\n            if(l[j]<=r[i]&&r[i]<=r[j]&&h[j]<=h[i]){\n                if(h[j]>hh){ hh=h[j]; idx=j; }\n            }\n        }\n        if(hh!=-1){\n            if(!mp[make_pair(r[i],hh)]){ mp[make_pair(r[i],hh)]=cnt++; }\n            int v = mp[make_pair(r[i],hh)];\n            e[n+i].push_back(edge(v,h[i]-hh));\n            e[idx].push_back(edge(v,abs(r[i]-l[idx])));\n            e[n+idx].push_back(edge(v,abs(r[i]-r[idx])));\n            e[v].push_back(edge(idx,abs(r[i]-l[idx])));\n            e[v].push_back(edge(n+idx,abs(r[i]-r[idx])));\n            es[idx].push_back(v);\n        }\n    }\n    dijkstra(s);\n    int ans = INT_MAX;\n    for(auto i:es[t]){\n        ans=min(ans,dis[i]);\n    }\n    if(ans!=INT_MAX)cout<<ans<<\"\\n\";\n    else cout<<\"-1\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3 1\n5 6 3\n3 5 6\n1 4 100000",
              "expectedOutput": "100001"
            }
          ]
        },
        {
          "id": "l8_202409_02",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对于一个具有n个顶点的无向图，若采用邻接矩阵表示，则该矩阵的大小为（  ）。",
          "options": [
            "n×(n/2)",
            "n×n",
            "(n-1)×(n-1)",
            "(n+1)×(n+1)"
          ],
          "answer": 1,
          "explanation": "邻接矩阵的行和列都对应n个顶点，即n行n列，矩阵大小为n×n，选B。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_05",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "n个结点的二叉树，执行释放全部结点操作的时间复杂度是（  ）。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(log n)",
            "O(2^n)"
          ],
          "answer": 0,
          "explanation": "释放二叉树的所有结点需要逐个访问每个结点一次，无论采用先序、中序还是后序删除，时间复杂度均为O(n)，选A。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_10",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面最小生成树的Kruskal算法程序中，横线处应该填入的是（  ）。\n（并查集findParent已实现，edges按权值排序）\nfor (const auto & edge : edges) {\nint uParent = findParent(edge.u, parent);\nint vParent = findParent(edge.v, parent);\nif (__________) {\nparent[uParent] = vParent;\ntotalWeight += edge.weight;\n}\n}",
          "options": [
            "uParent == vParent",
            "uParent >= vParent",
            "uParent != vParent",
            "uParent <= vParent"
          ],
          "answer": 2,
          "explanation": "Kruskal算法中，一条边可加入生成树当且仅当它的两个端点分属不同集合（不会成环），即uParent != vParent，选C。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_11",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面Prim算法程序中，横线处应该填入的是（  ）。\nfor (int v = 0; v < n; v++) {\nif (__________) {\nkey[v] = graph[u][v];\nparent[v] = u;\n}\n}",
          "options": [
            "graph[u][v] >= 0 && key[v] > graph[u][v]",
            "graph[u][v] <= 0 && key[v] > graph[u][v]",
            "graph[u][v] == 0 && key[v] > graph[u][v]",
            "graph[u][v] != 0 && key[v] > graph[u][v]"
          ],
          "answer": 3,
          "explanation": "图中无自环且无向，graph[u][v]==0表示无边，只有graph[u][v]!=0才存在边，且key[v]>graph[u][v]时才更新更短距离，选D。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_12",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列Dijkstra算法中，横线处应该填入的是（  ）。\nfor (int j = 1; j <= n; j++) {\nif (__________) {\nminn = dis[j];\nminx = j;\n}\n}",
          "options": [
            "dis[j] > minn && cheak[j] == 0",
            "dis[j] < minn && cheak[j] == 0",
            "dis[j] >= minn && cheak[j] == 0",
            "dis[j] < minn && cheak[j] != 0"
          ],
          "answer": 1,
          "explanation": "该循环从未确定最短路的顶点中选出dis值最小者，条件应为dis[j] < minn且该点未确定（cheak[j]==0），选B。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_13",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面Floyd算法中，横线处应该填入的是（  ）。\nfor (int k = 1; k <= n; k++)\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= n; j++)\nif (__________)\nmap[i][j] = map[i][k] + map[k][j];",
          "options": [
            "map[i][j] < map[i][k] + map[k][j]",
            "map[i][j] > map[i][k] + map[k][j]",
            "map[i][j] > map[i][k] - map[k][j]",
            "map[i][j] < map[i][k] - map[k][j]"
          ],
          "answer": 1,
          "explanation": "Floyd算法用中间点k松弛，当经过k的路径更短时更新，即map[i][j] > map[i][k]+map[k][j]时更新为更短值，选B。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_27",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：美丽路径\n时间限制：1.0 s  内存限制：512.0 MB\n题面描述：小杨有一棵包含n个节点的树，节点从1到n编号，每个节点要么是白色要么是黑色。对于树上的一条简单路径，小杨认为它是美丽的当且仅当路径上相邻节点的颜色均不相同。路径长度是路径包含节点的数量。小杨想知道最长的美丽路径的长度是多少。\n输入：第一行一个正整数n；第二行n个整数c1..cn（0白1黑）；接下来n-1行每行两个正整数表示一条边。\n输出：一个整数，表示最长美丽路径的长度。",
          "options": [],
          "answer": null,
          "explanation": "思路：树形DP。对每个节点x，只统计颜色与x不同的子节点分支，递归求得每个异色分支向下的最大深度，取其中最大的两条深度相加再加1，即经过x的最长美丽路径长度，全局取最大值。颜色相同的边不能经过，因此不会进入同色子节点。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nvector<int> g[N];\nint dep[N],vis[N],c[N];\nint n,ans;\nint dfs(int x,int fa){\n    vis[x]=1;\n    dep[x]=dep[fa]+1;\n    int mx = dep[x];\n    vector<int> tmp;\n    tmp.push_back(mx);\n    for(auto i:g[x]){\n        if(i==fa||c[i]==c[x])continue;\n        int d = dfs(i,x);\n        tmp.push_back(d);\n        mx = max(d,mx);\n    }\n    sort(tmp.begin(),tmp.end());\n    int m = tmp.size(),res=1;\n    if(m>1){\n        res = tmp[m - 1] + tmp[m - 2] - 2 * dep[x] + 1;\n    }\n    ans=max(ans,res);\n    return mx;\n}\nint main(){\n    cin>>n;\n    for(int i=1;i<=n;i++){ cin>>c[i]; }\n    for(int i=1;i<n;i++){\n        int u,v;\n        cin>>u>>v;\n        g[u].push_back(v);\n        g[v].push_back(u);\n    }\n    for(int i=1;i<=n;i++){\n        if(!vis[i]){ dfs(i,0); }\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n1 0 0 1 0\n1 2\n3 5\n4 3\n1 3",
              "expectedOutput": "4"
            },
            {
              "input": "5\n0 0 0 0 0\n1 2\n2 3\n3 4\n4 5",
              "expectedOutput": "1"
            }
          ]
        },
        {
          "id": "l8_202412_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "使用邻接表表达一个简单有向图，图中包含v个顶点、e条边，则该出边表中边节点的个数为（  ）。",
          "options": [
            "v×(v-1)",
            "v×v",
            "2×e",
            "e"
          ],
          "answer": 3,
          "explanation": "出边表中每个顶点只记录它出发的边，每条有向边恰有一个出边节点，因此出边表边节点个数等于边数e，选D。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_12",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列Dijkstra算法中，横线处应该填入的是（  ）。\nfor (Edge * e = graph[minv]; e != NULL; e = e->next) {\n________;\n}",
          "options": [
            "if (dis[e->out] > e->len) dis[e->out] = e->len;",
            "if (dis[e->out] > min + e->len) dis[e->out] = min + e->len;",
            "if (dis[e->in] > e->len) dis[e->in] = e->len;",
            "if (dis[e->in] > min + e->len) dis[e->in] = min + e->len;"
          ],
          "answer": 1,
          "explanation": "取出最短点minv（距离min）后，对其每条出边做松弛：若经minv到e->out更短则更新，即dis[e->out]>min+e->len时dis[e->out]=min+e->len，选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_13",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "假设图graph中顶点数v、边数e，上题程序的时间复杂度为（  ）。",
          "options": [
            "O(e)",
            "O(v^2)",
            "O(v·log v + e)",
            "O((v+e)·log v)"
          ],
          "answer": 1,
          "explanation": "该Dijkstra实现每轮用线性扫描在所有未确定顶点中找最小dis，共需v轮，每轮扫描O(v)，加上遍历所有边O(e)，总复杂度为O(v²+e)=O(v²)，选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_24",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "判断图是否连通，可以通过广度优先搜索实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "从任意顶点做BFS，统计访问到的顶点个数，若等于总顶点数则图连通，故BFS可以判断连通性，说法正确。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：树上移动\n时间限制：1.0 s  内存限制：512.0 MB\n题面描述：小杨有一棵包含n个节点的树，节点编号从1到n，每个节点的颜色要么是白色要么是黑色。小杨可以任意选择节点u和节点v并从u出发移动到v，移动过程中不能经过重复节点。小杨希望在至多经过k个黑色节点的前提下，经过的总节点数尽可能多，请你帮他求出最多的节点数。\n输入：第一行两个正整数n、k；第二行n个正整数a1..an（0白1黑）；接下来n-1行每行两个正整数表示一条边。\n输出：一个正整数，表示最多经过的节点数。",
          "options": [],
          "answer": null,
          "explanation": "思路：树上任意简单路径。以每个节点为起点向各方向深度优先搜索，累计经过的黑色节点数，一旦超过k就停止并更新答案。由于n较小可对每个起点做一次DFS，维护当前路径长度与已用黑色节点数，取最大可行长度。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\n#define ll long long\nconst int N = 1010;\nvector<int> g[N];\nint a[N];\nint n,k;\nint ans;\nvoid dfs(int x,int fa,int tot,int le){\n    tot+=a[x];\n    if(tot>k){\n        ans = max(ans,le);\n        return;\n    }\n    le++;\n    ans = max(ans,le);\n    for(int i:g[x]){\n        if(i!=fa){\n            dfs(i,x,tot,le);\n        }\n    }\n}\nint main(){\n    cin>>n>>k;\n    for(int i=1;i<=n;i++){ cin>>a[i]; }\n    for(int i=1;i<n;i++){\n        int u,v;\n        cin>>u>>v;\n        g[u].push_back(v);\n        g[v].push_back(u);\n    }\n    for(int i=1;i<=n;i++){\n        dfs(i,0,0,0);\n    }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 1\n0 0 1 1 1\n1 2\n2 3\n2 5\n1 4",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l8_202503_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树和图的说法，错误的是（  ）。",
          "options": [
            "树是一种有向无环图，有向无环图都是一棵树。",
            "如果把树看做有向图，每个节点指向其子节点，则该图是弱连通图。",
            "N个顶点且连通的无向图，其最小生成树一定包含N-1条边。",
            "N+1个顶点、N条边的有向图，一定不是强连通的。"
          ],
          "answer": 0,
          "explanation": "树是连通无环图，看成有向无环图是成立的，但有向无环图不一定是树（可有多个源点或多条路径），A错误。树的边都指向子节点时底图连通，是弱连通图，B正确；连通无向图的最小生成树含N-1条边，C正确；强连通有向图每个顶点至少有一条出边，至少需要N条边，故N条边不可能强连通，D正确。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_07",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "N个节点的平衡二叉树的高为（  ）。",
          "options": [
            "⌊log2 N⌋",
            "⌈log2 N⌉",
            "⌊log2 N⌋+1",
            "无法确定。"
          ],
          "answer": 3,
          "explanation": "平衡二叉树（如AVL树）保证树高为O(log N)，但具体高度随节点分布而变化，在最小可能高度与最大可能高度（约1.44log N）之间浮动，不能仅由节点数N唯一确定，选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_12",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面Floyd算法中，横线处应该填入的是（  ）。\nfor (int k = 1; k <= n; k++)\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= n; j++)\nif (map[i][j] > map[i][k] + map[k][j])\n________;",
          "options": [
            "map[i][j] = map[i][k] + map[k][j]",
            "map[i][k] = map[i][j] - map[k][j]",
            "map[i][j] = map[i][k] - map[k][j]",
            "map[k][j] = map[i][j] - map[i][k]"
          ],
          "answer": 0,
          "explanation": "Floyd算法当经过中间点k的路径更短时更新，把map[i][j]更新为map[i][k]+map[k][j]，选A。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_13",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题Floyd算法程序的时间复杂度为（  ）。\n（三重循环k、i、j均遍历1..n）",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^3)",
            "O(n^4)"
          ],
          "answer": 2,
          "explanation": "Floyd算法有三重嵌套循环，每层都遍历n个顶点，故总时间复杂度为O(n³)，选C。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_22",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在N个节点的平衡二叉树中查找指定元素的最差时间复杂度为O(N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "平衡二叉树（如AVL树）保证树高为O(log N)，查找指定元素的最差时间复杂度为O(log N)而不是O(N)，说法错误。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_24",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "判断无向图中是否有环，可以通过广度优先搜索实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "BFS遍历无向图时，若访问到已入队且不是父节点的邻居，则存在环，因此BFS可以判断无向图是否有环，说法正确。最短路、最小生成树、连通性、树与LCA等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：上学\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：C城可以视为由n个结点与m条边组成的无向图。这些结点依次以1到n标号，第i条边连接编号为ui与vi的结点，长度为li米。小A的学校坐落在C城中编号为s的结点。小A的同学们共有q位，第i位同学的家位于编号为pi的结点，他每秒能行走1米。请你帮小A计算，每位同学从家出发到达学校需要多少秒。\n输入：第一行四个正整数n、m、s、q；接下来m行每行三个正整数u、v、l；接下来q行每行一个正整数pi。\n输出：共q行，对每位同学输出从家到学校的最短时间。",
          "options": [],
          "answer": null,
          "explanation": "思路：这是无向带权图的单源最短路问题，用Dijkstra算法以学校s为源点求到每个结点的最短距离。速度为1米/秒，最短距离即最短时间。因边权均为正整数，用优先队列实现的Dijkstra复杂度为O((n+m)log n)，对q次询问直接查表输出。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <queue>\n#include <iostream>\nusing namespace std;\nconst int N = 2e5 + 5;\nconst int E = N << 1;\nconst long long oo = 1e18;\nint n, m, s, q;\nint h[N], to[E], nx[E], wt[E], et;\nint vis[N];\nlong long d[N];\npriority_queue <pair<long long, int>> pq;\nvoid ae(int u, int v, int w) {\n    et++;\n    to[et] = v;\n    nx[et] = h[u];\n    wt[et] = w;\n    h[u] = et;\n}\nint main() {\n    scanf(\"%d%d%d%d\", &n, &m, &s, &q);\n    for (int i = 1; i <= m; i++) {\n        int u, v, l;\n        scanf(\"%d%d%d\", &u, &v, &l);\n        ae(u, v, l);\n        ae(v, u, l);\n    }\n    for (int i = 1; i <= n; i++)\n        d[i] = oo;\n    d[s] = 0;\n    pq.push({0, s});\n    while (!pq.empty()) {\n        auto p = pq.top();\n        pq.pop();\n        int u = p.second;\n        if (vis[u])\n            continue;\n        vis[u] = 1;\n        for (int i = h[u]; i; i = nx[i])\n            if (d[u] + wt[i] < d[to[i]]) {\n                d[to[i]] = d[u] + wt[i];\n                pq.push({-d[to[i]], to[i]});\n            }\n    }\n    while (q--) {\n        int p;\n        scanf(\"%d\", &p);\n        printf(\"%lld\\n\", d[p]);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 5 3 3\n1 2 3\n2 3 2\n3 4 1\n4 5 3\n1 4 2\n5\n1\n4",
              "expectedOutput": "4\n3\n1"
            }
          ]
        },
        {
          "id": "l8_202506_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "关于生成树的说法，错误的是（  ）。",
          "options": [
            "一个无向连通图，一定有生成树。",
            "N个顶点的无向图，其生成树要么不存在，要么一定包含N-1条边。",
            "N个顶点、N-1条边的无向图，不可能有多颗生成树。",
            "N个顶点、N条边的无向图，它本身就是自己的生成树。"
          ],
          "answer": 3,
          "explanation": "生成树是包含全部顶点且恰好N-1条边的连通子图。N个顶点、N条边的连通无向图至少含一个环，不是树，不能是自己的生成树，D错误。连通图必有生成树，A正确；生成树含N-1条边，B正确；N顶点N-1条边若连通则是树，生成树唯一，C正确，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_07",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "N个结点的二叉树，执行广度优先搜索的平均时间复杂度是（  ）。",
          "options": [
            "O(N log N)",
            "O(N^2)",
            "O(N)",
            "O(log N)"
          ],
          "answer": 2,
          "explanation": "广度优先搜索按层用队列访问结点，每个结点入队出队各一次，每条边也访问一次。二叉树的边数为N-1，因此总时间复杂度为O(N)，选C。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_15",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用邻接矩阵表达的带权无向图，则从顶点0到顶点3的最短距离为（  ）。\nint weight[4][4] = {\n{ 0,  5,  8, 10},\n{ 5,  0,  1,  7},\n{ 8,  1,  0,  3},\n{10,  7,  3,  0}};",
          "options": [
            "9",
            "10",
            "11",
            "12"
          ],
          "answer": 0,
          "explanation": "从顶点0到3有多条路径：0-3直达为10；0-1-3为5+7=12；0-2-3为8+3=11；0-1-2-3为5+1+3=9。最短路径为0-1-2-3，总长为9，选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_22",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "N个顶点的无向完全图，有 N^(N-2) 棵生成树。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "由Cayley公式，n个顶点的无向完全图K_n的生成树数目为n^(n-2)，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_24",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "有N个顶点、M条边的图的深度优先搜索遍历时间复杂度为 O(N+M)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "深度优先搜索每个顶点恰好访问一次、每条边恰好检查一次，时间复杂度为O(N+M)，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_27",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：遍历计数\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵有n个结点的树T，结点以1到n标号。深度优先遍历序由以下过程得到：1.选定遍历起点（任意）；2.若当前结点存在未被遍历的相邻结点则遍历它并继续，否则回溯；3.按访问顺序记下结点编号。由于起点与访问相邻结点的顺序任意，同一棵树可能有多组不同的DFS序。求T有多少组不同的深度优先遍历序，答案对1e9取模。\n输入：第一行一个整数n；接下来n-1行每行两个正整数表示一条边。\n输出：一个整数，表示不同DFS序数量对1e9取模的结果。",
          "options": [],
          "answer": null,
          "explanation": "思路：以某个结点为起点时，DFS序由各结点子树的访问顺序决定：每次进入一个结点后，其各子树在DFS序中作为连续块出现，块间顺序任意。以i为根的整棵树的DFS序数量与各子树块排列相关，通过前后缀乘积计算：ans=Σ pre[i-1]·fac[deg[i]]·suf[i+1]，其中fac为阶乘、pre/suf为子树块排列数乘积，可在O(n)内递推求出。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nconst int mod = 1e9;\nint n, deg[N], fac[N];\nint pre[N], suf[N];\nint ans;\nint main() {\n    scanf(\"%d\", &n);\n    fac[0] = 1;\n    for (int i = 1; i <= n; i++)\n        fac[i] = 1ll * fac[i - 1] * i % mod;\n    for (int i = 1; i < n; i++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        deg[u]++; deg[v]++;\n    }\n    pre[0] = 1;\n    for (int i = 1; i <= n; i++)\n        pre[i] = 1ll * pre[i - 1] * fac[deg[i] - 1] % mod;\n    suf[n + 1] = 1;\n    for (int i = n; i; i--)\n        suf[i] = 1ll * suf[i + 1] * fac[deg[i] - 1] % mod;\n    for (int i = 1; i <= n; i++)\n        ans = (ans + 1ll * pre[i - 1] * fac[deg[i]] % mod * suf[i + 1]) % mod;\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 2\n2 3\n3 4",
              "expectedOutput": "6"
            },
            {
              "input": "8\n1 2\n1 3\n1 4\n2 5\n2 6\n3 7\n3 8",
              "expectedOutput": "112"
            }
          ]
        },
        {
          "id": "l8_202509_04",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树和图的说法，错误的是（  ）。",
          "options": [
            "每个连通图都存在生成树。",
            "每个存在生成树的有向图，都一定是强连通的。",
            "保留树的所有节点，并把树的每个节点指向其父节点，则可以将树转换为一个有向弱连通图。",
            "保留树的所有节点，并把树的每个节点指向其子节点，则可以将树转换为一个有向无环图。"
          ],
          "answer": 1,
          "explanation": "有向图存在生成树只要求底图连通（弱连通），并不要求任意两点互相可达，因此\"存在生成树就一定是强连通的\"错误，B错。连通图必有生成树，A正确；指向父节点得到弱连通图，C正确；指向子节点得到无环图，D正确。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_07",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对一个包含V个顶点、E条边的图，执行广度优先搜索，其最优时间复杂度是（  ）。",
          "options": [
            "O(V)",
            "O(V+E)",
            "O(V·E)",
            "O(V^2)"
          ],
          "answer": 1,
          "explanation": "广度优先搜索借助队列，每个顶点入队出队一次，每条边被检查一次，最优实现的时间复杂度为O(V+E)，选B。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_11",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列Dijkstra算法，假设图G中顶点数V、边数E，则程序的时间复杂度为（  ）。\ntypedef struct Edge { int in, out; int len; struct Edge *next; } Edge;\nvoid dijkstra(int v, Edge *graph[], int start, int *dis) {\nconst int MAX_DIS = 0x7fffff;\nfor (int i = 0; i < v; i++) dis[i] = MAX_DIS;\ndis[start] = 0;\nint *visited = new int[v];\nfor (int i = 0; i < v; i++) visited[i] = 0;\nvisited[start] = 1;\nfor (int t = 0; ; t++) {\nint min = MAX_DIS, minv = -1;\nfor (int i = 0; i < v; i++)\nif (visited[i] == 0 && min > dis[i]) { min = dis[i]; minv = i; }\nif (minv < 0) break;\nvisited[minv] = 1;\nfor (Edge *e = graph[minv]; e != NULL; e = e->next)\nif (dis[e->out] > e->len) dis[e->out] = e->len;\n}\ndelete[] visited;\n}",
          "options": [
            "O(V^2)",
            "O(V+E)",
            "O((V+E) log V)",
            "O(V·E)"
          ],
          "answer": 0,
          "explanation": "该实现未使用堆，每轮用线性扫描在O(V)内选出距离最小且未访问的顶点，共进行V轮，选点总代价O(V²)；每条边又被松弛检查一次O(E)，故总时间复杂度为O(V²+E)=O(V²)，选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_14",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面Prim算法程序中，横线处应该填入的是（  ）。\nint prim(vector<vector<int>> & graph, int n) {\nvector<int> key(n, INT_MAX);\nvector<int> parent(n, -1);\nkey[0] = 0;\nfor (int i = 0; i < n; i++) {\nint u = min_element(key.begin(), key.end()) - key.begin();\nif (key[u] == INT_MAX) break;\nfor (int v = 0; v < n; v++) {\nif (__________) {\nkey[v] = graph[u][v];\nparent[v] = u;\n}\n}\n}\nint sum = 0;\nfor (int i = 0; i < n; i++)\nif (parent[i] != -1) sum += key[i];\nreturn sum;\n}",
          "options": [
            "graph[u][v] >= 0 && key[v] > graph[u][v]",
            "graph[u][v] <= 0 && key[v] > graph[u][v]",
            "graph[u][v] == 0 && key[v] > graph[u][v]",
            "graph[u][v] != 0 && key[v] > graph[u][v]"
          ],
          "answer": 3,
          "explanation": "graph[u][v]==0表示u、v之间无边，应跳过；只有存在边(graph[u][v]!=0)且能减小key值(key[v]>graph[u][v])时才更新，选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_15",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序使用出边邻接表表达的带权无向图，则从顶点0到顶点3的最短距离为（  ）。\nclass Graph {\n...\n};\nint main() {\nGraph g(4);\ng.addEdge(0, 1, 8);\ng.addEdge(0, 2, 5);\ng.addEdge(1, 2, 1);\ng.addEdge(1, 3, 3);\ng.addEdge(2, 3, 7);\nreturn 0;\n}",
          "options": [
            "12",
            "11",
            "10",
            "9"
          ],
          "answer": 3,
          "explanation": "顶点0到3的路径有：0-3直达(无边，即无穷)；0-1-3为8+3=11；0-2-3为5+7=12；0-2-1-3为5+1+3=9；0-1-2-3为8+1+7=16。最短为0-2-1-3，距离9，选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_22",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "存在一个简单无向图满足：顶点数为6，边数为8，6个顶点的度数分别为3、3、3、3、2、2。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "度数之和为3+3+3+3+2+2=16=2×8，满足握手定理。用Havel-Hakimi算法逐步删除顶点可验证该度数序列可图化，因此存在这样的简单无向图，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_24",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "Dijkstra算法的时间复杂度为 O(V)，其中V为图中顶点的数量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "Dijkstra算法最常用的朴素实现复杂度为O(V²)，堆优化版本为O((V+E)log V)，无论如何不会是O(V)，说法错误。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：最短距离\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定正整数n以及常数p、q。构建一张包含n个结点的带权无向图，结点以1到n编号。对任意满足1≤i<j≤n的i、j，若i、j互质（最大公因数为1），则加入长度为p的边；否则加入长度为q的边。给定q组询问(u,v)，回答u到v的最短距离。\n输入：第一行三个正整数n、p、q（n为询问数量）；接下来n行每行两个正整数u、v。\n输出：n行，每行一个整数，表示对应询问的最短距离。",
          "options": [],
          "answer": null,
          "explanation": "思路：利用特殊结构直接计算。u==v时距离为0；u或v等于1时，1与任何数互质，距离为p。对一般情况，两数不互质时可直接走边q，或绕道1：u→1→v需2p；两数互质时可直接走边p，或绕道：p+p。取上述最小值即可，单次询问O(log n)求gcd，总复杂度O(n log n)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nint n, p, q, a, b, ans;\nint gcd(int a, int b) {\n    if (!a || !b) return a + b;\n    return gcd(b, a % b);\n}\nint main() {\n    scanf(\"%d%d%d\", &n, &p, &q);\n    while (n--) {\n        scanf(\"%d%d\", &a, &b);\n        if (a == b) ans = 0;\n        else if (a == 1 || b == 1) ans = p;\n        else {\n            ans = min(p + p, q + q);\n            if (gcd(a, b) == 1) ans = min(ans, p);\n            else ans = min(ans, q);\n        }\n        printf(\"%d\\n\", ans);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 4 3\n1 2\n2 3\n4 2\n3 5",
              "expectedOutput": "4\n4\n3\n4"
            },
            {
              "input": "5 2 6\n1 2\n2 3\n4 2\n3 5\n6 6",
              "expectedOutput": "2\n2\n4\n2\n0"
            }
          ]
        },
        {
          "id": "l8_202509_27",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：最小生成树\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一张包含n个结点、m条边的带权连通无向图，结点以1到n编号。对每条边，求从图中移除该边后，图的最小生成树中所有边的边权和。若移除该边后图不连通（最小生成树不存在），则输出-1。\n输入：第一行两个正整数n、m；接下来m行每行三个正整数u、v、w，表示一条边。\n输出：m行，第i行一个整数，表示移除第i条边后MST的边权和，不存在则输出-1。",
          "options": [],
          "answer": null,
          "explanation": "思路：先求原图MST，标记树边并计算总权s。非树边删除后MST仍为原MST，答案为s；树边被删除时，需要从非树边中找一条能连接被切开的两个连通块的边替换。先求LCA并给每个非树边对应路径上的树边维护最小替换代价，用并查集按从大到小合并即可一次性求出每条树边删除后的答案，复杂度O(m log m)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nconst int M = 2e5 + 5;\nconst long long oo = 1e18;\nint n, m;\nint u[M], v[M], w[M], p[M];\nint h[N], id[M], nx[M], et;\nint f[N], mark[M];\nlong long s, ans[M];\nint dep[N], pid[N];\nbool cmp(int x, int y) { return w[x] < w[y]; }\nint getf(int u) { return f[u] ? f[u] = getf(f[u]) : u; }\nvoid link(int x, int p) { id[++et] = p; nx[et] = h[x]; h[x] = et; }\nvoid dfs(int x, int f=0, int p=0) {\n    dep[x] = dep[f] + 1;\n    pid[x] = p;\n    for (int i = h[x]; i; i = nx[i]) {\n        int to = u[id[i]] ^ v[id[i]] ^ x;\n        if (to != f) dfs(to, x, id[i]);\n    }\n}\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= m; i++) {\n        scanf(\"%d%d%d\", &u[i], &v[i], &w[i]);\n        p[i] = i;\n    }\n    sort(p + 1, p + m + 1, cmp);\n    for (int i = 1; i <= m; i++) {\n        int x = u[p[i]], y = v[p[i]];\n        if (getf(x) == getf(y)) continue;\n        mark[p[i]] = 1;\n        f[getf(x)] = y;\n        s += w[p[i]];\n        link(x, p[i]); link(y, p[i]);\n    }\n    for (int i = 1; i <= m; i++) ans[i] = mark[i] ? oo : s;\n    dfs(1);\n    for (int i = 1; i <= n; i++) f[i] = 0;\n    for (int i = 1; i <= m; i++) {\n        if (mark[p[i]]) continue;\n        int x = getf(u[p[i]]), y = getf(v[p[i]]);\n        while (x != y) {\n            if (dep[x] < dep[y]) x ^= y ^= x ^= y;\n            int to = u[pid[x]] ^ v[pid[x]] ^ x;\n            ans[pid[x]] = s - w[pid[x]] + w[p[i]];\n            f[x] = to;\n            x = getf(x);\n        }\n    }\n    for (int i = 1; i <= m; i++)\n        printf(\"%lld\\n\", ans[i] < oo ? ans[i] : -1);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 5\n1 2 4\n2 3 3\n3 4 1\n2 5 2\n3 1 8",
              "expectedOutput": "14\n15\n-1\n-1\n10"
            },
            {
              "input": "6 10\n1 2 6\n2 3 3\n3 1 4\n3 4 5\n4 5 8\n5 6 2\n6 4 1\n3 2 4\n5 4 4\n3 3 6",
              "expectedOutput": "15\n16\n17\n-1\n15\n17\n18\n15\n15\n15"
            }
          ]
        },
        {
          "id": "l8_202512_05",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面是使用邻接矩阵实现的Dijkstra算法的核心片段，用于求单源最短路径。在找到当前距离起点最近的顶点u后，需要更新其邻接点j的距离。横线处应填入的代码是（  ）。\nfor (int j = 1; j <= n; j++) {\nif (!visited[j] && graph[u][j] < INF) {\nif (________) {\ndis[j] = dis[u] + graph[u][j];\n}\n}\n}",
          "options": [
            "dis[j] < dis[u] + graph[u][j]",
            "dis[j] > dis[u] + graph[u][j]",
            "graph[u][j] > dis[u] + dis[j]",
            "dis[j] > graph[u][j]"
          ],
          "answer": 1,
          "explanation": "松弛操作的条件是经u中转的路径更短：dis[u]+graph[u][j]小于当前dis[j]，即dis[j] > dis[u] + graph[u][j]，选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_15",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对连通无向图执行Kruskal算法。已按边权从小到大依次扫描到某条边e。此时在已经构建的部分MST结构中，e的两端点已在同一连通块内。关于边e的处理，下列说法正确的是（  ）。",
          "options": [
            "必须选入MST，否则可能不连通。",
            "一定不能选入MST（在此扫描顺序下）。",
            "若后续出现更大的边权，可以回溯改选e。",
            "只有当e是当前最小边时才能舍弃。"
          ],
          "answer": 1,
          "explanation": "Kruskal中若两端点已在同一连通块，加入e必形成环，此扫描顺序下一定舍弃，且贪心性质保证这样能得到最优MST，选B。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_21",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "使用二叉堆优化的Dijkstra最短路算法，在某些特殊情况下时间复杂度不如朴素实现的O(V^2)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "堆优化的Dijkstra为O((V+E)log V)，在稠密图(E≈V²)上约为O(V²log V)，反而不如朴素实现的O(V²)，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：猫和老鼠\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：猫和老鼠所在的庄园可以视为一张由n个点和m条带权无向边构成的连通图。结点以1到n编号，结点i有价值为c[i]的奶酪。猫窝位于结点a，老鼠洞位于结点b。结点u是安全的当且仅当：老鼠能规划一条从u逃往b的路径，使得路径上任意结点w都有：猫从a到w的最短时间严格大于老鼠从w到b所需的时间。老鼠只拿取安全结点的奶酪，求能拿到的奶酪价值之和。\n输入：第一行两个正整数n、m；第二行两个正整数a、b；第三行n个正整数c[i]；接下来m行每行u、v、w。\n输出：一行，一个整数，表示老鼠能拿到的奶酪价值之和。",
          "options": [],
          "answer": null,
          "explanation": "思路：以老鼠洞b为源点用Dijkstra求dist到各结点的最短时间。结点i若dist[i]小于猫窝结点对应的dist[a]，则说明猫追到该结点的时间严格更大，该结点安全，累加其奶酪价值。优先队列Dijkstra复杂度O((n+m)log n)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\n#include <vector>\n#include <queue>\nusing namespace std;\nconst int N = 1e5 + 5;\nconst long long oo = 1e18;\nint n, m, a, b, c[N];\nvector<pair<int, int>> e[N];\nlong long dis[N];\npriority_queue<pair<long long, int>> q;\nlong long ans;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    scanf(\"%d%d\", &a, &b);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &c[i]);\n    for (int i = 1; i <= m; i++) {\n        int u, v, w;\n        scanf(\"%d%d%d\", &u, &v, &w);\n        e[u].emplace_back(make_pair(v, w));\n        e[v].emplace_back(make_pair(u, w));\n    }\n    for (int i = 1; i <= n; i++) dis[i] = oo;\n    dis[b] = 0;\n    q.push(make_pair(-dis[b], b));\n    while (!q.empty()) {\n        auto p = q.top(); q.pop();\n        if (dis[p.second] != -p.first) continue;\n        int u = p.second;\n        for (auto r : e[u]) {\n            int v = r.first, w = r.second;\n            if (dis[v] > dis[u] + w) {\n                dis[v] = dis[u] + w;\n                q.push(make_pair(-dis[v], v));\n            }\n        }\n    }\n    for (int i = 1; i <= n; i++)\n        if (dis[i] < dis[a]) ans += c[i];\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 5\n1 2\n1 2 4 8 16\n1 2 4\n2 3 3\n3 4 1\n2 5 2\n3 1 8",
              "expectedOutput": "22"
            },
            {
              "input": "6 10\n3 4\n1 1 1 1 1 1\n1 2 6\n2 3 3\n3 1 4\n3 4 5\n4 5 8\n5 6 2\n6 4 1\n3 2 4\n5 4 4\n3 3 6",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l8_202603_05",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在二叉搜索树（BST）中，若中序遍历的序列为{1,2,3,4,5}，且先序遍历的第一个序列元素为3，则下列说法正确的是（ ）。",
          "options": [
            "该树一定是一棵完全二叉树",
            "元素4和5不可能是兄弟节点",
            "元素1所在节点的深度可能大于3（根节点深度为1）",
            "元素2一定是元素1的父节点"
          ],
          "answer": 1,
          "explanation": "根为3，左子树含{1,2}、右子树含{4,5}。右子树中序遍历为{4,5}且BST保证中序升序，因此4必为5的父节点，4和5不可能是兄弟节点，B正确。元素1深度最大为2（左子树根为2时），不可能大于3，C错误；左子树根既可为2也可为1，D错误；完全二叉树不保证，A错误。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_06",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个有向带权图中，使用Dijkstra算法求单源最短路时，若使用优先队列（小根堆）优化，其时间复杂度为（ ）。",
          "options": [
            "O(V^2)",
            "O(V·E)",
            "O((V+E) log V)",
            "O(V log V)"
          ],
          "answer": 2,
          "explanation": "堆优化Dijkstra中每个顶点最多入堆一次、每条边松弛一次，每次堆操作O(log V)，总时间复杂度为O((V+E)log V)，选C。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_07",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "对于含V个顶点（V≥2）的连通加权有向图，若图中不存在负权环，则任意两点之间的最短路径（简单路径）最多包含（ ）条边。",
          "options": [
            "V",
            "V-1",
            "V/2",
            "无法确定，取决于图的具体边数"
          ],
          "answer": 1,
          "explanation": "简单路径不重复经过顶点，最多经过V个不同顶点，因此边数最多为V-1条，选B。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_08",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在使用Floyd算法求任意两点间最短路径时，时间复杂度为O(n^3)。若在某次算法执行前，已经用Dijkstra算法正确求出了所有点对的最短路并存入了dist数组。如果此时继续对该dist数组执行一次完整的Floyd算法过程（无任何提前终止），执行完毕后dist数组内的值（ ）。",
          "options": [
            "会发生改变，因为 Floyd 又做了一次松弛",
            "不会发生改变",
            "可能变大，因为未针对已有最短路优化",
            "可能在某些负权图中陷入死循环"
          ],
          "answer": 1,
          "explanation": "dist已经是真实最短距离，满足三角不等式dist[i][j]≤dist[i][k]+dist[k][j]，Floyd的松弛min不会改变已有值，执行后数组不变，选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_09",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "关于图论中的最短路径算法，下列说法中严格正确的是（ ）。",
          "options": [
            "Dijkstra 算法能够高效处理包含负权边的有向图。",
            "Floyd 算法可以求出任意两点间的最短路径，且允许图中存在负权边（但不能有负权环）。",
            "单源最短路径算法无法用于无向图，无向图只能通过 BFS 求解。",
            "Dijkstra 算法的每一步必定从当前未访问的节点中，选取距离起始点最远的节点进行松弛操作。"
          ],
          "answer": 1,
          "explanation": "Floyd允许负权边但不允许负权环，能求任意两点最短路，B正确。Dijkstra不能处理负权边，A错误；无向图可转化为双向有向图用Dijkstra等求解，C错误；Dijkstra每次选距离最近的节点，D错误，故选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_11",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码试图实现Floyd算法求所有点对之间的最短路径，横线处应填入（ ）。\nvoid floyd(int n, int dist[][MAXN]) {\nfor (int k = 0; k < n; k++)\nfor (int i = 0; i < n; i++)\nfor (int j = 0; j < n; j++)\nif (__________)\ndist[i][j] = dist[i][k] + dist[k][j];\n}",
          "options": [
            "dist[i][k] + dist[k][j] < dist[i][j]",
            "dist[i][k] != INF && dist[k][j] != INF",
            "dist[i][k] != INF && dist[k][j] != INF && dist[i][k] + dist[k][j] < dist[i][j]",
            "dist[i][j] == INF"
          ],
          "answer": 2,
          "explanation": "Floyd松弛应同时满足两条中间边可达且路径更短，即dist[i][k]与dist[k][j]均非INF且两者之和小于dist[i][j]，选C。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_13",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个无向带权图中，若使用Prim算法从顶点0开始构造最小生成树（边权均为正整数，且graph[u][v]==0表示无边），下列代码中横线处应填入（ ）。\nint prim(vector<vector<int>>& graph, int n) {\nvector<bool> inMST(n, false);\nvector<int> minEdge(n, INT_MAX);\nminEdge[0] = 0;\nint result = 0;\nfor (int i = 0; i < n; i++) {\nint u = -1;\nfor (int j = 0; j < n; j++)\nif (!inMST[j] && (u == -1 || minEdge[j] < minEdge[u])) u = j;\ninMST[u] = true;\nresult += minEdge[u];\nfor (int v = 0; v < n; v++)\nif (__________)\nminEdge[v] = graph[u][v];\n}\nreturn result;\n}",
          "options": [
            "graph[u][v] && !inMST[v] && graph[u][v] < minEdge[v]",
            "!inMST[v] && graph[u][v] < minEdge[v]",
            "graph[u][v] > 0 && !inMST[v]",
            "!inMST[v] && minEdge[v] > 0"
          ],
          "answer": 0,
          "explanation": "松弛条件应排除已入树顶点、要求存在边(graph[u][v]非0)且能减小minEdge[v]，即graph[u][v] && !inMST[v] && graph[u][v]<minEdge[v]，选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_19",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "若一个无向图的最小生成树唯一，则图中所有边权必定各不相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "最小生成树唯一并不要求所有边权互不相同，只要不存在权值相等的可替换边即可，说法错误。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_21",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "若一个图中所有顶点的度数为偶数，则一定存在欧拉回路。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "所有顶点度数为偶数只是存在欧拉回路的必要条件，还需图连通（去掉孤立点后连通），缺少连通性则不一定存在欧拉回路，说法错误。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_23",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "如果将一个连通无向图G中所有边的权值都统一增加同一个正整数常数c，形成图G'，则G的最小生成树中每条边在G'中对应的边组成的树，一定是G'的最小生成树。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "所有生成树都包含n-1条边，各增加c后总权同时增加(n-1)c，相对大小关系不变，因此原来的最小生成树仍是G'的最小生成树，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_24",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在图论算法中，Kruskal算法和Prim算法都可以用来求解最小生成树，且这两者的贪心策略无论在任何连通无向图上求得的最小生成树总边权和必定相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "两者都求最小生成树，最小生成树的总边权和是图的最小值，是唯一的，因此两算法得到的边权和必定相同，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_27",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：子图最短路\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定包含n个结点、m条边的带权无向图G，结点以1到n编号。对指定的l、r按以下方式构造子图G_{l,r}：保留编号在区间[l,r]中的结点及其间边，其余结点和边删去。记d(l,r)为子图G_{l,r}中所有点对之间的最短距离之和（若某点对不连通则记该距离为0）。求Σ_{1≤l≤r≤n} d(l,r)对1e9取模的结果。\n输入：第一行两个正整数n、m；接下来m行每行三个正整数u、v、w。\n输出：一行，一个整数，表示答案对1e9取模的结果。",
          "options": [],
          "answer": null,
          "explanation": "思路：n≤100，可枚举左端点l，对每个l依次扩展右端点r并动态维护所有点对最短路：每加入一个新点r，用Floyd式更新一次（把r作为中转点松弛所有i,j），然后累加子图[l,r]内所有点对(i,j)（i≤j）的最短距离之和。复杂度O(n^4)，n=100时可行。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 105;\nconst int mod = 1e9;\nint n, m;\nint f[N][N], g[N][N];\nint ans;\nint main() {\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n; j++) f[i][j] = mod;\n        f[i][i] = 0;\n    }\n    for (int i = 1; i <= m; i++) {\n        int u, v, w;\n        scanf(\"%d%d%d\", &u, &v, &w);\n        f[u][v] = min(f[u][v], w);\n        f[v][u] = min(f[v][u], w);\n    }\n    for (int l = 1; l <= n; l++) {\n        for (int i = 1; i <= n; i++)\n            for (int j = 1; j <= n; j++) g[i][j] = f[i][j];\n        for (int r = l; r <= n; r++) {\n            for (int i = 1; i <= n; i++)\n                for (int j = 1; j <= n; j++)\n                    g[i][j] = min(g[i][j], g[i][r] + g[r][j]);\n            for (int i = l; i <= r; i++)\n                for (int j = i; j <= r; j++)\n                    ans = (ans + g[i][j]) % mod;\n        }\n    }\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 2\n1 2 1 \n2 3 2",
              "expectedOutput": "9"
            },
            {
              "input": "4 6\n1 2 100\n2 3 100\n3 4 100\n1 3 10\n2 4 10\n1 4 1",
              "expectedOutput": "784"
            }
          ]
        },
        {
          "id": "l8_202606_09",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "某无向带权图有边 1-2(1)、2-3(3)、3-4(1)、4-5(2)、5-6(3)、1-3(4)、3-5(5)。该图最小生成树的总权值为（  ）。",
          "options": [
            "7",
            "8",
            "9",
            "10"
          ],
          "answer": 3,
          "explanation": "按Kruskal从小到大选边：3-4(1)、1-2(1)、4-5(2)、2-3(3)、5-6(3)，共选5条边构成生成树，总权=1+1+2+3+3=10，选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_10",
          "kp": "kp8_06",
          "type": "choice",
          "difficulty": 1,
          "question": "有向非负权图边为 1-2(2)、1-3(5)、2-3(1)、2-4(6)、3-4(2)。使用Dijkstra算法从1号顶点出发到4号顶点的最短距离为（  ）。",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 0,
          "explanation": "从1到4的路径：1-2-3-4为2+1+2=5；1-2-4为2+6=8；1-3-4为5+2=7。最短为1-2-3-4，距离5，选A。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_21",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "只要图中不存在负权环，Dijkstra算法就一定能正确处理带负权边的图。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "Dijkstra基于贪心，出现负权边时已确定的距离可能被更短的负边路径推翻，即使没有负权环也会出错，说法错误。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_22",
          "kp": "kp8_06",
          "type": "judge",
          "difficulty": 1,
          "question": "若一张连通无向图所有边权两两不同，则它的最小生成树一定唯一。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "所有边权互不相同时，Kruskal选边的顺序唯一确定，不会出现权值相等的替代边，因此最小生成树唯一，说法正确。最短路、最小生成树、连通性、树与DFS/BFS等图论算法的原理、实现与复杂度都要掌握。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_26",
          "kp": "kp8_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：线网建设\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：A市有n座基站，第i座位于坐标(x[i],y[i])。第i座与第j座的距离定义为两点的欧氏距离。若距离不超过给定整数l，则可修建连接两基站的线路，线路长度即距离。若从一座基站可经过若干线路到达另一座，则称互相连接。求使n座基站两两互相连接需要修建的最小线路总长度；若无法建成，输出Impossible（保留两位小数）。\n输入：第一行两个正整数n、l；接下来n行每行两个整数x[i]、y[i]。\n输出：若能建成输出最小总长度（保留两位小数），否则输出Impossible。",
          "options": [],
          "answer": null,
          "explanation": "思路：对任意两座基站，若距离不超过l就在两者之间连一条长度为该距离的边，得到带权无向图。问题转化为求该图的最小生成树：若所有n个点连通（MST边数达到n-1），输出MST总权并保留两位小数；否则输出Impossible。用Kruskal+并查集求解，复杂度O(n² log n)。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstdio>\n#include <algorithm>\n#include <cmath>\nusing namespace std;\nconst int N = 510;\nconst int E = N * N;\nint n, l, x[N], y[N];\nint p[E], u[E], v[E], cnt;\nint f[N], t = 0;\ndouble d[E], ans = 0;\nint getf(int u) { return f[u] ? f[u] = getf(f[u]) : u; }\nbool cmp(int a, int b) { return d[a] < d[b]; }\nint main() {\n    cin >> n >> l;\n    for (int i = 1; i <= n; i++) cin >> x[i] >> y[i];\n    for (int i = 1; i <= n; i++)\n        for (int j = i + 1; j <= n; j++) {\n            int dx = x[i] - x[j], dy = y[i] - y[j];\n            if (dx * dx + dy * dy > l * l) continue;\n            cnt++; p[cnt] = cnt; u[cnt] = i; v[cnt] = j;\n            d[cnt] = sqrt(dx * dx + dy * dy);\n        }\n    sort(p + 1, p + cnt + 1, cmp);\n    for (int i = 1; i <= cnt; i++) {\n        int pu = u[p[i]], pv = v[p[i]];\n        if (getf(pu) == getf(pv)) continue;\n        t++; ans += d[p[i]];\n        f[getf(pu)] = pv;\n    }\n    if (t == n - 1) printf(\"%.2lf\\n\", ans);\n    else printf(\"Impossible\\n\");\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4 2\n1 0\n-1 -1\n0 0\n1 1",
              "expectedOutput": "3.41"
            },
            {
              "input": "4 1\n1 0\n-1 -1\n0 0\n1 1",
              "expectedOutput": "Impossible"
            }
          ]
        }
      ]
    },
    "kp8_07": {
      "title": "算法优化",
      "questions": [
        {
          "id": "l8_202312_02",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个函数声明是符合语法的，且在调用时可以将二维数组的名字作为实际参数传递给形式参数a？（  ）。",
          "options": [
            "void QuickSort(int a[][10], int n);",
            "void QuickSort(int a[5][], int m);",
            "void QuickSort(int a[][], int n, int m);",
            "void QuickSort(int ** a, int n, int m);"
          ],
          "answer": 0,
          "explanation": "把二维数组名传给形参时，编译器必须知道第二维长度才能计算元素地址，因此形参第二维必须写具体数字。选项A给出第二维长度10，符合语法；B、C的第二维为空，D的int**不是数组参数的正确形式，选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关C++类和对象的说法，错误的是（  ）。",
          "options": [
            "对象的生命周期开始时，会执行构造函数。",
            "对象的生命周期结束时，会执行析构函数。",
            "类的析构函数可以为虚函数。",
            "类的构造函数可以为虚函数。"
          ],
          "answer": 3,
          "explanation": "对象创建和销毁时分别调用构造和析构函数，A、B正确；析构函数可声明为虚函数以满足基类指针释放派生对象，C正确。构造函数不允许为虚函数，因为构造时类必须确定，没有把构造函数设为虚函数的需要，故D错误。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_09",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "假设输入参数m和n满足m≤n，则下面程序的最差情况的时间复杂度为（  ）。\nint gcd(int m, int n) {\nwhile (m > 0) {\nint t = m;\nm = n % m;\nn = t;\n}\nreturn n;\n}",
          "options": [
            "O(log(n))",
            "O(n)",
            "O(n×m)",
            "O(m×log(n))"
          ],
          "answer": 0,
          "explanation": "这是辗转相除法求最大公约数。每轮n%m使较大的数迅速减小，最差情况是输入为斐波那契数列相邻两项，循环次数约等于该项在数列中的位置，故最差复杂度为O(log n)，选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_15",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序中，二维数组h和v分别代表如下图所示的网格中的水平边的时间消耗和垂直边的时间消耗。程序使用动态规划计算从左下角到右上角的最小时间消耗，则横线处应该填写下列哪个选项的代码？（  ）。\nint dis[MAXY][MAXX];\nint shortest_path(int x, int y) {\ndis[0][0] = 0;\nfor (int i = 0; i < y; i++) dis[i + 1][0] = dis[i][0] + v[i][0];\nfor (int j = 0; j < x; j++) dis[0][j + 1] = dis[0][j] + h[0][j];\nfor (int i = 0; i < y; i++)\nfor (int j = 0; j < x; j++)\n________________;\nreturn dis[y][x];\n}",
          "options": [
            "dis[i][j] = min(dis[i - 1][j] + v[i - 1][j], dis[i][j - 1] + h[i][j - 1]);",
            "dis[i][j] = min(dis[i - 1][j] + h[i - 1][j], dis[i][j - 1] + v[i][j - 1]);",
            "dis[i + 1][j + 1] = min(dis[i][j + 1] + v[i][j + 1], dis[i + 1][j] + h[i + 1][j]);",
            "dis[i + 1][j + 1] = min(dis[i][j + 1] + h[i][j + 1], dis[i + 1][j] + v[i + 1][j]);"
          ],
          "answer": 2,
          "explanation": "循环范围是i<y、j<x，而输出为dis[y][x]，故每次计算的是dis[i+1][j+1]，排除A、B。从左下方点(i,j+1)到来走垂直边v[i][j+1]，从左侧点(i+1,j)到来走水平边h[i+1][j]，与第5行的v数组风格一致，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言非常强大，可以用来求解方程的解。例如，如果变量x为double类型的变量，则执行语句x * 2 - 4 = 0; 后，变量x的值会变为2.0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "语句x*2-4=0;既不是赋值语句也不是判断语句，等号左边不是左值，它不是合法的C++语句，根本无法通过编译，因此x的值不会变为2.0，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_20",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如果待查找的元素确定，只要哈希表的大小不小于查找元素的个数，就一定存在不会产生冲突的哈希函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "极端情况下可先把待查找元素放入哈希表，再按位置构造一个由if-else判断组成的哈希函数，当输入与某待查找元素相同时返回对应位置，虽然该函数效率低，但确实不会冲突，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_21",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划算法的时间复杂度一般为：必要状态的数量，乘以计算一次状态转移方程的时间复杂度。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "动态规划的总耗时等于状态数乘以每次状态转移的代价，这正是DP时间复杂度的通用估计方法，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202312_24",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在N个元素的二叉排序树中查找一个元素，最好情况的时间复杂度是O(logN)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "最好情况是待查找元素恰好位于二叉排序树的根结点，一次比较即可找到，时间复杂度为O(1)，而不是O(logN)，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下二维数组的初始化，哪个是符合语法的？（  ）。",
          "options": [
            "int a[][] = {{1, 2}, {3, 4}};",
            "int a[][2] = {};",
            "int a[2][2] = {{1, 2, 3}, {4, 5, 6}};",
            "int a[2][] = {{1, 2, 3}, {4, 5, 6}};"
          ],
          "answer": 1,
          "explanation": "二维数组第一维可以省略但第二维必须给定。A两维都省略不合法；C初值个数超过容量不合法；D第二维为空不合法。B声明int a[][2]并给空初值合法，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_04",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关C++拷贝构造函数的说法，错误的是（  ）。",
          "options": [
            "必须实现拷贝构造函数，否则一定会出现编译错误。",
            "对象作为函数参数、以值传递方式传入函数时，会自动调用拷贝构造函数。",
            "对象作为函数返回值、以值传递方式从函数返回时，会自动调用拷贝构造函数。",
            "使用一个对象初始化另一个对象时，会自动调用拷贝构造函数。"
          ],
          "answer": 0,
          "explanation": "若没有显式定义拷贝构造函数，编译器会默认生成一个做逐成员拷贝，因此不会出现编译错误，A说法错误。值传参、值返回、用对象初始化对象三种情形都会自动调用拷贝构造函数，B、C、D正确。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在有n个元素的二叉排序树中进行查找，其最好、最差时间复杂度分别为（  ）。",
          "options": [
            "O(1)、O(n)",
            "O(1)、O(log n)",
            "O(log n)、O(log n)",
            "O(log n)、O(n)"
          ],
          "answer": 0,
          "explanation": "二叉排序树查找的复杂度取决于树高。最好情况是待查元素恰好位于根结点，一次比较即返回，为O(1)；最差情况是树退化成单链，需比较n次，为O(n)。故最好、最差分别为O(1)、O(n)，选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_10",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint fib(int n) {\nif (n <= 1) return 1;\nreturn fib(n - 1) + fib(n - 2);\n}",
          "options": [
            "O(2^n)",
            "O(φ^n)，其中φ=(√5+1)/2",
            "O(n)",
            "O(1)"
          ],
          "answer": 1,
          "explanation": "朴素递归求斐波那契，每次调用产生两个子调用，递归树近似满二叉树，节点数约2^n；更精确地，调用次数满足T(n)=T(n-1)+T(n-2)+1，解为O(φ^n)，φ=(√5+1)/2，选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_12",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint primes[MAXP], num = 0;\nbool isPrime[MAXN] = {false};\nvoid sieve() {\nfor (int n = 2; n <= MAXN; n++) {\nif (!isPrime[n]) primes[num++] = n;\nfor (int i = 0; i < num && n * primes[i] <= MAXN; i++) {\nisPrime[n * primes[i]] = true;\nif (n % primes[i] == 0) break;\n}\n}\n}",
          "options": [
            "O(n)",
            "O(n×log(n))",
            "O(n×log(log(n)))",
            "O(n^2)"
          ],
          "answer": 0,
          "explanation": "这是欧拉线性筛（欧氏筛），每个合数只会被其最小质因子筛掉一次，因此每个数只处理常数次，总时间复杂度为O(n)，选A。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "已知int类型的变量a和b，则执行语句a, b = b, a; 后，变量a和b的值会互换。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "逗号运算符优先级低于赋值，a, b = b, a;等价于a, (b=b), a，即先计算a并丢弃，再执行b=b，最后计算a丢弃。a和b的值均未互换，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_20",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "为解决哈希函数冲突，在哈希表项内设置链表存储该项内的所有冲突元素，则该哈希表内查找元素的最差时间复杂度为O(1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链地址法解决冲突时，最坏情况是所有元素都散列到同一条链表中，查找需遍历整条链表，最差时间复杂度为O(n)而非O(1)，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202403_24",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在N个元素的二叉排序树中查找一个元素，平均情况的时间复杂度是O(logN)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "在随机插入构造的二叉排序树中，树高平均为O(log N)，查找的平均时间复杂度为O(log N)，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数声明，哪个是符合C++语法的？（  ）。",
          "options": [
            "void BubbleSort(char a[][], int n);",
            "void BubbleSort(char a[][20], int n);",
            "void BubbleSort(char a[10][], int n);",
            "void BubbleSort(char[,] a, int n);"
          ],
          "answer": 1,
          "explanation": "二维数组作参数时第二维必须给出长度。A第二维为空不合法；B正确；C第一维给了但第二维为空不合法；D的char[,]不是C++语法，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_09",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关C++重载的说法，错误的是（  ）。",
          "options": [
            "两个参数个数不同的函数可以重名。",
            "两个参数类型不同的函数可以重名。",
            "两个类的方法可以重名。",
            "所有C++运算符均可以重载。"
          ],
          "answer": 3,
          "explanation": "函数重载靠参数个数或类型区分，A、B正确；不同类的方法相互独立可以重名，C正确。并非所有运算符都能重载，如.、::、?:、sizeof等不可重载，D错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_13",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nbool notPrime[N] = {false};\nvoid sieve() {\nfor (int n = 2; n * n < N; n++)\nif (!notPrime[n])\nfor (int i = n * n; i < N; i += n)\nnotPrime[i] = true;\n}",
          "options": [
            "O(N)",
            "O(N×log N)",
            "O(N×log(log N))",
            "O(N^2)"
          ],
          "answer": 2,
          "explanation": "这是埃拉托斯特尼筛法。对每个质数p标记其倍数，总标记次数为N/2+N/3+N/5+...约等于N·log(log N)，故时间复杂度为O(N log log N)，选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的最差时间复杂度为（  ）。\nint gcd(int m, int n) {\nif (m == 0) return n;\nreturn gcd(n % m, m);\n}",
          "options": [
            "O(√n)",
            "O(log(n))",
            "O(n)",
            "O(1)"
          ],
          "answer": 1,
          "explanation": "这是递归辗转相除法求最大公约数，每轮n%m使两个数急剧减小，最差情况（斐波那契相邻两项）循环次数为O(log n)，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "已知double类型的变量a和b，则执行语句a = a + b; b = a - b; a = a - b; 后，变量a和b的值会互换。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该三段式在实数精确运算下确实能互换a、b，但a、b是double类型，浮点运算存在舍入误差（如a很大b很小），a+b可能损失精度，不能保证精确互换，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_21",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在N个元素的二叉排序树中查找一个元素，最差情况的时间复杂度是O(logN)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉排序树最差情况是插入有序序列退化成单链表，此时查找需比较N次，最差时间复杂度为O(N)而非O(logN)，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_22",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中，可以为同一个类定义多个析构函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "析构函数不能重载，一个类只能定义一个析构函数（且无参数），因此不能定义多个析构函数，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_23",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "使用单链表和使用双向链表，查找元素的时间复杂度相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "无论单链表还是双向链表，查找指定元素都需要从头顺序扫描，平均和最差时间复杂度都为O(n)，两者相同，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202406_24",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "为解决哈希函数冲突，可以使用不同的哈希函数为每个表项各建立一个子哈希表，用来管理该表项的所有冲突元素。这些子哈希表一定不会发生冲突。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "建立子哈希表只能降低冲突概率，子哈希表内部仍然可能发生冲突，不存在一定不发生冲突的保证，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_01",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于C++类和对象的说法，错误的是（  ）。",
          "options": [
            "类的析构函数可以为虚函数。",
            "类的构造函数不可以为虚函数。",
            "class中成员的默认访问权限为private。",
            "struct中成员的默认访问权限为private。"
          ],
          "answer": 3,
          "explanation": "析构函数可以声明为虚函数，构造函数不能为虚函数，A、B正确；class的默认访问权限是private，C正确；struct的默认访问权限是public而不是private，D错误。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的Merge_Sort函数时间复杂度为（  ）。\n（标准归并排序：每次对半分并线性合并）",
          "options": [
            "O(n log n)",
            "O(n^2)",
            "O(n)",
            "O(log n)"
          ],
          "answer": 0,
          "explanation": "归并排序每次把区间对半分割，递归深度O(log n)，每层合并总代价O(n)，总时间复杂度为O(n log n)，选A。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_15",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面fibonacci函数的时间复杂度为（  ）。\nint fibonacci(int n) {\nif (n <= 1) return n;\nelse return fibonacci(n - 1) + fibonacci(n - 2);\n}",
          "options": [
            "O(1)",
            "O(φ^n)，φ=(√5+1)/2",
            "O(n)",
            "O(n log n)"
          ],
          "answer": 1,
          "explanation": "朴素递归斐波那契每次分裂成两个子调用，递归树节点数满足T(n)=T(n-1)+T(n-2)+1，解为指数级O(φ^n)，φ=(√5+1)/2，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式'3' & 1 的结果为'1'。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字符'3'的ASCII码为51，二进制110011，51&1=1，结果是整数1（int类型），不是字符'1'，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，变量定义必须在某一个函数定义之内。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "变量可以定义在函数之外（全局变量），也可以在类中定义成员变量，并不必须位于某个函数定义之内，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "冒泡排序一般是不稳定的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "冒泡排序只交换相邻逆序元素，相等元素不会交换相对位置，因此冒泡排序是稳定排序，说它不稳定错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202409_19",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉排序树的查找操作的平均时间复杂度，正比于树的高度。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二叉排序树每次查找沿从根到叶的一条路径比较，比较次数等于树的高度级别，因此平均时间复杂度正比于树高，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于C++类继承的说法，错误的是（  ）。",
          "options": [
            "一个类可以继承多个类。",
            "一个类可以被多个类继承。",
            "一个类可以继承另一个类的子类。",
            "抽象类必须被至少一个类继承，否则会编译错误。"
          ],
          "answer": 3,
          "explanation": "C++支持多继承，一个类可继承多个类，A正确；一个类可被多个类继承，B正确；继承具有传递性，C正确。抽象类（含纯虚函数的类）不一定要被继承，不继承也不会编译错误，D错误。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_05",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下将二维数组作为参数的函数声明，哪个是符合语法的？（  ）。",
          "options": [
            "void Bubble(int a[10][], int m);",
            "void Bubble(int a[][], int n, int m);",
            "void Bubble(int (*a)[20], int n);",
            "void Bubble(int * a[20], int n);"
          ],
          "answer": 2,
          "explanation": "二维数组作参数第二维必须给定。C的int (*a)[20]是指向含20个int的一维数组的指针，等价于第二维为20的数组参数，符合语法；A、B第二维为空，D是指针数组，选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划的说法中，错误的是（  ）。",
          "options": [
            "动态规划方法有递推和递归两种实现形式。",
            "递归实现动态规划方法的时间复杂度总是不低于递推实现。",
            "动态规划方法将原问题分解为一个或多个相似的子问题。",
            "动态规划方法通常能够列出递推公式。"
          ],
          "answer": 1,
          "explanation": "DP可用递推（自底向上）或带记忆化递归（自顶向下）实现，A正确；配合记忆化后递归与递推复杂度相同，并不总是不低于递推，B错误；DP分解为重叠子问题，C正确；DP核心是状态转移递推公式，D正确。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_11",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面最长公共子序列程序中，横线处应该填入的是（  ）。\n#define MAX(A, B) (((A) > (B)) ? (A) : (B))\n#define MIN(A, B) (((A) < (B)) ? (A) : (B))\nint dp[MAX_L + 1][MAX_L + 1];\nint LCS(char str1[], char str2[]) {\nint len1 = strlen(str1);\nint len2 = strlen(str2);\nfor (int i = 0; i < len1; i++)\nfor(int j = 0; j < len2; j++)\nif (str1[i] == str2[j])\ndp[i + 1][j + 1] = dp[i][j] + 1;\nelse\n________;\nreturn dp[len1][len2];\n}",
          "options": [
            "dp[i + 1][j + 1] = dp[i][j + 1] + dp[i + 1][j];",
            "dp[i + 1][j + 1] = MIN(dp[i][j + 1], dp[i + 1][j]);",
            "dp[i + 1][j + 1] = MAX(dp[i][j + 1], dp[i + 1][j]);",
            "dp[i + 1][j + 1] = MAX(dp[i][j + 1], dp[i + 1][j]) + 1;"
          ],
          "answer": 2,
          "explanation": "LCS的DP转移：当str1[i]!=str2[j]时，取dp[i][j+1]与dp[i+1][j]的较大者，即MAX(dp[i][j+1],dp[i+1][j])，选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的快速排序程序中，两处横线处分别应填入的是（  ）。\nvoid quick_sort(int a[], int n) {\nif (n <= 1) return;\nint pivot = 0, l = 0, r = n - 1;\nwhile (________) {\nwhile (r > pivot && a[r] >= a[pivot]) r--;\nif (r > pivot) { int temp = a[pivot]; a[pivot] = a[r]; a[r] = temp; pivot = r; }\nwhile (l < pivot && a[l] <= a[pivot]) l++;\nif (l < pivot) { int temp = a[pivot]; a[pivot] = a[l]; a[l] = temp; pivot = l; }\n}\nquick_sort(a, pivot);\nquick_sort(________);\n}",
          "options": [
            "l < r ; a + pivot + 1, n - pivot - 1",
            "l < r ; a + pivot + 1, n - pivot",
            "l <= r ; a + pivot + 1, n - pivot - 1",
            "l <= r ; a + pivot + 1, n - pivot"
          ],
          "answer": 0,
          "explanation": "外层循环当左右指针未相遇时继续，即l<r。pivot为最终基准位置，左半段为a[0..pivot-1]（长度pivot），右半段从a+pivot+1开始，长度n-pivot-1，选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_15",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "上题程序的时间复杂度为（  ）。",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "平均O(n log n)、最差O(n^2)"
          ],
          "answer": 3,
          "explanation": "快速排序平均情况下每次划分接近对半，复杂度O(n log n)；最差情况（每次基准是极值）退化为O(n²)，选D。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式'3' + '5' 的结果为'8'，类型为char。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字符'3'的ASCII为51，'5'为53，相加得104，对应字符'h'且类型为int，而不是'8'，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，可以在函数内定义结构体，但该结构体类型只能在该函数内使用。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++允许在函数内定义局部结构体，其作用域局限于该函数，函数外无法使用该类型，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "对n个元素的数组进行排序，快速排序和归并排序的平均时间复杂度都为O(n log n)。但快速排序存在退化情况，使得时间复杂度升高至O(n²)；归并排序需要额外的空间开销。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "快排与归并平均都是O(n log n)，快排退化到O(n²)，归并需O(n)辅助空间，陈述全部正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_19",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "二维数组的最后一维在内存中一定是连续的，但第一维在内存中可能不连续。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++的二维数组按行优先存储，整块内存完全连续，第一维和第二维都是连续的，不存在第一维不连续的情况，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202412_22",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "使用哈希函数f(x) = x % p建立键值为int类型的哈希表，只要p取小于等于哈希表大小的素数，可保证不发生碰撞。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "素数模数只能让散列更均匀，不能消除碰撞，例如p=5时10和15都映射到0仍冲突，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面关于C++类构造和析构函数的说法，错误的是（  ）。",
          "options": [
            "构造函数不能声明为虚函数。",
            "析构函数必须声明为虚函数。",
            "类的默认构造函数可以被声明为private。",
            "类的析构函数可以被声明为private。"
          ],
          "answer": 1,
          "explanation": "构造函数不能是虚函数，A正确；析构函数可以为虚函数，但并非必须，只有通过基类指针删除派生对象时才需要，B错误；默认构造函数和析构函数都可以声明为private，C、D正确。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于算法的说法，错误的是（  ）。",
          "options": [
            "如果有足够的时间和空间，枚举法能解决一切有限的问题。",
            "分治算法将原问题分为多个子问题进行求解，且分解出的子问题必须相互独立。",
            "如果能找到合理的贪心原则，贪心算法往往能够比其他方法更快求解。",
            "倍增法在搜索未知长度的有序数组时，通过动态倍增或减半步长，快速定位目标范围。"
          ],
          "answer": 1,
          "explanation": "分治算法的子问题并不要求必须相互独立，子问题可以存在重叠（重叠子问题正是动态规划优化的对象），B说法错误。枚举法原则上可解一切有限问题，A正确；贪心通常更快，C正确；倍增法动态倍增或减半步长定位范围，D正确。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_10",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题（count_miracle函数）的时间复杂度为（  ）。\n（循环n从1到sqrt(N)，对每个n²做字符串切分与转换）",
          "options": [
            "O(N log N)",
            "O(N^1/2)",
            "O(N^1/2 · log N)",
            "O(N^1/2 · (log N)^2)"
          ],
          "answer": 3,
          "explanation": "外层n枚举到sqrt(N)，共O(√N)次；对每个n²转字符串后，内层按位置切分，每次substr和stoi都是O(位数)=O(log N)，切分位置也有O(log N)个，故总复杂度为O(√N·(log N)²)，选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_11",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的欧氏筛法程序中，两个横线处应填入的分别是（  ）。\nint primes[MAXP], num = 0;\nbool isPrime[MAXN + 1] = {false};\nvoid sieve() {\nfor (int n = 2; n <= MAXN; n++) {\nif (!isPrime[n]) primes[num++] = n;\nfor (int i = 0; i < num && ________; i++) {\nisPrime[n * primes[i]] = true;\nif (________) break;\n}\n}\n}",
          "options": [
            "n * primes[i] < MAXN ; n % primes[i] == 0",
            "n * primes[i] < MAXN ; primes[i] > n",
            "n * primes[i] <= MAXN ; n % primes[i] == 0",
            "n * primes[i] <= MAXN ; primes[i] > n"
          ],
          "answer": 2,
          "explanation": "欧拉筛中内层循环终止条件为n×primes[i]不超过MAXN（数组下标合法），且当n能被primes[i]整除时break，保证每个合数只被其最小质因子筛一次，选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式'5' - 3.0 的结果为2.0，类型为double。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字符'5'的ASCII码为53，53-3.0=50.0，结果约为50.0而不是2.0，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，如果想要在一个函数内调用一个类的私有方法，可以在该类中将该函数声明为友元函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "友元函数可以访问类的私有成员，将普通函数声明为该类的友元后，就能在函数内调用其私有方法，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "插入排序一般是稳定的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "插入排序把新元素插到已排序序列中时，遇到相等元素插在其后，不改变相等元素的相对顺序，因此插入排序是稳定排序，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202503_21",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++是一种面向对象编程语言，C则不是。多态是面向对象三大特性之一，虚函数是动态多态的代表特性。因此，使用C语言无法实现虚函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C语言虽然没有virtual关键字，但可以用函数指针、结构体等机制模拟实现多态和虚函数的效果，因此说C语言无法实现虚函数错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++类和对象的说法，错误的是（  ）。",
          "options": [
            "通过语句const int x = 5; 定义了一个对象x 。",
            "通过语句std::string t = \"12345\"; 定义了一个对象t 。",
            "通过语句void (*fp)() = NULL; 定义了一个对象fp 。",
            "通过语句class MyClass; 定义了一个类MyClass 。"
          ],
          "answer": 3,
          "explanation": "class MyClass; 只是类的前置声明，并没有完整定义类，更不是定义一个对象，D说法错误。const int x=5中x是整型对象，std::string t是类对象，函数指针fp也是C++中的对象，A、B、C正确，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_08",
          "kp": "kp8_07",
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
          "explanation": "DP的时间复杂度通常等于状态个数乘以每个状态转移的代价，而不只是状态个数，B说法错误。DP通常有递推公式，A正确；可用递推或递归实现，C正确；二者复杂度通常相当，D正确，故选B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_09",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的sum_digit函数试图求出从1到n（包含1和n）的数中，包含数字d的个数。该函数的时间复杂度为（  ）。\n#include <string>\nint count_digit(int n, char d) {\nint cnt = 0;\nstd::string s = std::to_string(n);\nfor (int i = 0; i < s.length(); i++)\nif (s[i] == d) cnt++;\nreturn cnt;\n}\nint sum_digit(int n, char d) {\nint sum = 0;\nfor (int i = 1; i <= n; i++)\nsum += count_digit(i, d);\nreturn sum;\n}",
          "options": [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
          ],
          "answer": 0,
          "explanation": "count_digit把n转为字符串并扫描，每次耗时O(位数)=O(log n)。sum_digit外层从1到n循环n次，每次调用一次O(log n)的count_digit，故总时间复杂度为O(n log n)，选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_10",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nconst int N = 10;\nint ch[N][N][N];\nint main() {\nfor (int x = 0; x < N; x++)\nfor (int y = 0; y < N; y++)\nfor (int z = 0; z < N; z++)\nif (x == 0 && y == 0 && z == 0) ch[x][y][z] = 1;\nelse {\nif (x > 0) ch[x][y][z] += ch[x - 1][y][z];\nif (y > 0) ch[x][y][z] += ch[x][y - 1][z];\nif (z > 0) ch[x][y][z] += ch[x][y][z - 1];\n}\nstd::cout << ch[1][2][3] << std::endl;\nreturn 0;\n}",
          "options": [
            "60",
            "20",
            "15",
            "10"
          ],
          "answer": 0,
          "explanation": "ch[x][y][z]表示从(0,0,0)到(x,y,z)每次沿一个坐标轴+1的路径数，即三项式系数(x+y+z)!/(x!y!z!)。ch[1][2][3]=(1+2+3)!/(1!2!3!)=720/(1×2×6)=60，选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_11",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面count_triple函数的时间复杂度为（  ）。\nint gcd(int a, int b) {\nif (a == 0) return b;\nreturn gcd(b % a, a);\n}\nint count_triple(int n) {\nint cnt = 0;\nfor (int v = 1; v * v * 4 <= n; v++)\nfor (int u = v + 1; u * (u + v) * 2 <= n; u += 2)\nif (gcd(u, v) == 1) {\nint a = u * u - v * v;\nint b = u * v * 2;\nint c = u * u + v * v;\ncnt += n / (a + b + c);\n}\nreturn cnt;\n}",
          "options": [
            "O(n^2)",
            "O(n^2 log n)",
            "O(n log n)",
            "O(n)"
          ],
          "answer": 2,
          "explanation": "外层v从1枚举到约√n/2，内层u满足u(u+v)·2≤n，即u也到√n量级，双层总迭代次数约为O(n)；每轮还需用欧几里得算法计算gcd(u,v)，复杂度O(log n)，故整体时间复杂度为O(n log n)，选C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_12",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面quick_sort函数试图实现快速排序算法，两处横线处分别应该填入的是（  ）。\nvoid swap(int & a, int & b) {\nint temp = a; a = b; b = temp;\n}\nint partition(int a[], int l, int r) {\nint pivot = a[l], i = l + 1, j = r;\nwhile (i <= j) {\nwhile (i <= j && a[j] >= pivot) j--;\nwhile (i <= j && a[i] <= pivot) i++;\nif (i < j) swap(a[i], a[j]);\n}\n________;\nreturn ________;\n}",
          "options": [
            "swap(a[l], a[i]); i",
            "swap(a[l], a[j]); i",
            "swap(a[l], a[i]); j",
            "swap(a[l], a[j]); j"
          ],
          "answer": 3,
          "explanation": "划分循环结束后i>j，此时a[j]是最后一个不小于pivot的元素，基准值应归位到j处，故交换swap(a[l],a[j])并返回分界下标j，递归时以j为界分开左右区间。选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_13",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面LIS函数试图求出最长上升子序列的长度，横线处应该填入的是（  ）。\nint LIS(vector<int> & nums) {\nint n = nums.size();\nif (n == 0) return 0;\nvector<int> dp(n, 1);\nint maxLen = 1;\nfor (int i = 1; i < n; i++)\nfor (int j = 0; j < i; j++)\nif (nums[j] < nums[i])\n________;\nreturn maxLen;\n}",
          "options": [
            "dp[j] = max(dp[j] + 1, dp[i])",
            "dp[j] = max(dp[j], dp[i] + 1)",
            "dp[i] = max(dp[i] + 1, dp[j])",
            "dp[i] = max(dp[i], dp[j] + 1)"
          ],
          "answer": 3,
          "explanation": "经典LIS的DP：以i结尾的最长上升子序列长度dp[i]由前面的dp[j](j<i且nums[j]<nums[i])加1转移而来，应填dp[i]=max(dp[i], dp[j]+1)，选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面LIS函数试图求出最长上升子序列的长度，其时间复杂度为（  ）。\n#define INT_MIN (-1000)\nint LIS(vector<int> & nums) {\nint n = nums.size();\nvector<int> tail;\ntail.push_back(INT_MIN);\nfor (int i = 0; i < n; i++) {\nint x = nums[i], l = 0, r = tail.size();\nwhile (l < r) {\nint mid = (l + r) / 2;\nif (tail[mid] < x) l = mid + 1;\nelse r = mid;\n}\nif (r == tail.size()) tail.push_back(x);\nelse tail[r] = x;\n}\nreturn tail.size() - 1;\n}",
          "options": [
            "O(n)",
            "O(n^2)",
            "O(n log n)",
            "O(n^3)"
          ],
          "answer": 2,
          "explanation": "该LIS实现维护单调递增的tail数组，对每个元素在tail中二分查找插入位置，二分每次O(log n)，共n个元素，总时间复杂度为O(n log n)，选C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中，表达式9 | 12 的结果类型为int、值为13 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "9的二进制为1001，12的二进制为1100，按位或得到1101，即十进制的13，两个int按位或结果仍为int，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中，访问数据发生下标越界时，总是会产生运行时错误，从而使程序异常退出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++中数组越界属于未定义行为，编译器不做边界检查，运行时不一定会报错，可能访问到非法地址或得到随机值，\"总是会产生运行时错误\"说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "对n个元素的数组进行归并排序，最差情况的时间复杂度为 O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序每次将区间分成两半递归排序，再用线性时间合并，无论最好还是最坏情况时间复杂度都为O(n log n)，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202506_21",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++是一种面向对象编程语言，C则不是。继承是面向对象三大特性之一，因此，使用C语言无法实现继承。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C语言虽无继承关键字，但可以通过结构体嵌套、函数指针等技巧模拟继承的效果，因此\"使用C语言无法实现继承\"的说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_03",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++类的说法，错误的是（  ）。",
          "options": [
            "派生类对象占用的内存总是不小于基类对象。",
            "派生类可以不实现基类的虚函数。",
            "如果一个类包含纯虚函数，则它不能包含成员变量。",
            "如果一个类包含纯虚函数，则不能用它定义对象。"
          ],
          "answer": 2,
          "explanation": "包含纯虚函数的类是抽象类，不能实例化对象，但完全可以拥有自己的成员变量（数据成员），C说法错误。派生类对象包含基类部分，内存不小于基类对象，A正确；非纯虚函数可继承不实现，B正确；抽象类不能定义对象，D正确，故选C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于贪心法和动态规划的说法中，错误的是（  ）。",
          "options": [
            "动态规划能解决大部分多阶段决策问题。",
            "对特定的问题，贪心法不一定适用。",
            "当特定的问题适用贪心法时，通常比动态规划的时间复杂度更低。",
            "对很多问题，递推实现和递归实现动态规划方法的时间复杂度相当。"
          ],
          "answer": 0,
          "explanation": "动态规划只能解决具有最优子结构与无后效性的多阶段决策问题，并不是大多数多阶段决策问题都能用DP求解，A说法错误。贪心需满足贪心选择性质，不总是适用，B正确；贪心通常更快，C正确；DP递推与递归复杂度相当，D正确，故选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_09",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的输出为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint N = 15, cnt = 0;\nfor (int x = 1; x + x + x <= N; x++)\nfor (int y = x; x + y + y <= N; y++)\nfor (int z = y; x + y + z <= N; z++)\ncnt++;\ncout << cnt << endl;\nreturn 0;\n}",
          "options": [
            "45",
            "102",
            "174",
            "3375"
          ],
          "answer": 1,
          "explanation": "统计满足1≤x≤y≤z且x+y+z≤15的整数三元组数。逐层枚举：x=1时y=1..7分别贡献13,11,9,7,5,3,1共49；x=2时y=2..6贡献10,8,6,4,2共30；x=3贡献16；x=4贡献6；x=5贡献1。合计49+30+16+6+1=102，选B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_10",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序的时间复杂度为（  ）。\nint primes[MAXP], num = 0;\nbool isPrime[MAXN] = {false};\nvoid sieve() {\nfor (int n = 2; n <= MAXN; n++) {\nif (!isPrime[n]) primes[num++] = n;\nfor (int i = 0; i < num && n * primes[i] <= MAXN; i++) {\nisPrime[n * primes[i]] = true;\nif (n % primes[i] == 0) break;\n}\n}\n}",
          "options": [
            "O(log MAXN)",
            "O(MAXN log MAXN)",
            "O(MAXN)",
            "O(MAXN log log MAXN)"
          ],
          "answer": 2,
          "explanation": "这是欧拉线性筛，每个合数恰好被其最小质因子筛去一次，外层循环MAXN次，总操作数为O(MAXN)，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_12",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面count_triple函数的时间复杂度为（  ）。\nint gcd(int m, int n) {\nif (m == 0) return n;\nreturn gcd(n % m, m);\n}\nint count_triple(int n) {\nint cnt = 0;\nfor (int v = 1; v * v * 4 <= n; v++)\nfor (int u = v + 1; u * (u + v) * 2 <= n; u += 2)\nif (gcd(u, v) == 1) {\nint a = u * u - v * v;\nint b = u * v * 2;\nint c = u * u + v * v;\ncnt += n / (a + b + c);\n}\nreturn cnt;\n}",
          "options": [
            "O(n)",
            "O(n^2)",
            "O(n^2 log n)",
            "O(n log n)"
          ],
          "answer": 3,
          "explanation": "外层v到√n量级、内层u到√n量级，双层循环总迭代次数约为O(n)，每次迭代还要调用gcd求最大公因数，其复杂度为O(log n)，故总时间复杂度为O(n log n)，选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_13",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面merge_sort函数试图实现归并排序算法，横线处应该填入的是（  ）。\nvoid merge_sort(vector<int> & arr, int left, int right) {\nif (right - left <= 1) return;\nint mid = (left + right) / 2;\nmerge_sort(________);\nmerge_sort(________);\nvector<int> temp(right - left);\nint i = left, j = mid, k = 0;\nwhile (i < mid && j < right)\nif (arr[i] <= arr[j]) temp[k++] = arr[i++];\nelse temp[k++] = arr[j++];\nwhile (i < mid) temp[k++] = arr[i++];\nwhile (j < right) temp[k++] = arr[j++];\nfor (i = left, k = 0; i < right; ++i, ++k) arr[i] = temp[k];\n}",
          "options": [
            "arr, left, mid ; arr, mid, right",
            "arr, left, mid + 1 ; arr, mid + 1, right",
            "arr, left, mid ; arr, mid + 1, right",
            "arr, left, mid + 1 ; arr, mid + 1, right + 1"
          ],
          "answer": 0,
          "explanation": "该实现采用左闭右开区间[left,right)，mid=(left+right)/2，合并时左边为[left,mid)、右边为[mid,right)，因此两次递归调用应为merge_sort(arr,left,mid)与merge_sort(arr,mid,right)，选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中，表达式'9' ^ 3 的结果值为'999' 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "'9'是字符，ASCII码为57，57按位异或3：57^3=58，对应字符':'，结果为':'而不是字符串\"999\"，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++语言代码，能够安全地输出arr[5]的值。\nint n = 5;\nint arr[n] = {1, 2, 3};\nstd::cout << arr[5];",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "数组arr长度为5，合法下标为0到4，arr[5]下标越界，属于未定义行为，不能安全访问，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "对n个元素的数组进行排序，最差情况的时间复杂度为 O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "题目没有指定排序算法，若用冒泡、选择、插入等排序，最坏情况为O(n²)，因此\"最差情况一定是O(n log n)\"的说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202509_21",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "运算符重载是C++语言静态多态的一种典型体现，而使用C语言则无法实现运算符重载。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "运算符重载在编译期根据操作数类型决定调用，属于静态多态；C语言没有运算符重载的语言机制，确实无法实现真正意义上的运算符重载，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_02",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码实现了归并排序（Merge Sort）的分治部分。为了正确地将数组a的[left, right]区间进行排序，横线处应该填入的是（  ）。\nvoid merge_sort(int a[], int left, int right) {\nif (left >= right) return;\nint mid = (left + right) / 2;\nmerge_sort(a, left, mid);\n________;\nmerge(a, left, mid, right);\n}",
          "options": [
            "merge_sort(a, mid, right)",
            "merge_sort(a, mid + 1, right)",
            "merge_sort(a, left, mid + 1)",
            "merge_sort(a, mid - 1, right)"
          ],
          "answer": 1,
          "explanation": "该实现为闭区间[left,right]，中点为mid，已递归左半[left,mid]，还需递归右半[mid+1,right]，即merge_sort(a, mid + 1, right)，选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_06",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序使用动态规划求两个字符串的最长公共子序列（LCS）长度，横线处应填入的是（  ）。\nint lcs_len(const string &a, const string &b) {\nint n = a.size(), m = b.size();\nvector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j <= m; j++)\nif (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;\nelse ________;\nreturn dp[n][m];\n}",
          "options": [
            "dp[i][j] = dp[i - 1][j] + dp[i][j - 1];",
            "dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]);",
            "dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);",
            "dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]) + 1;"
          ],
          "answer": 2,
          "explanation": "LCS转移：两字符相等时取左上+1；不等时继承左边或上边的较大者，即dp[i][j]=max(dp[i-1][j], dp[i][j-1])，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_08",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "已知int a = 10;，执行int &b = a; b = 20; 后，变量a的值是（  ）。",
          "options": [
            "10",
            "20",
            "30",
            "编译错误"
          ],
          "answer": 1,
          "explanation": "引用b是变量a的别名，b=20实际上就是对a赋值，因此a的值变为20，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_09",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码的时间复杂度（以n为自变量，忽略常数与低阶项）是（  ）。\nlong long s = 0;\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j * j <= i; j++)\ns += j;",
          "options": [
            "O(n)",
            "O(n^2)",
            "O(n^(3/2))",
            "O(n log n)"
          ],
          "answer": 2,
          "explanation": "外层循环n次，内层循环次数为√i，总操作数为Σ√i(i=1..n)≈(2/3)n^(3/2)，因此时间复杂度为O(n^(3/2))，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_10",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序实现了线性筛法（欧拉筛），用于在O(n)时间内求出1到n之间的所有质数。为了保证每个合数只被其最小质因子筛掉，横线处应填入的语句是（  ）。\nfor (int i = 2; i <= n; i++) {\nif (!not_prime[i]) primes[++cnt] = i;\nfor (int j = 1; j <= cnt && i * primes[j] <= n; j++) {\nnot_prime[i * primes[j]] = true;\nif (________) break;\n}\n}",
          "options": [
            "i + primes[j] == n",
            "primes[j] > i",
            "i % primes[j] == 0",
            "i % primes[j] != 0"
          ],
          "answer": 2,
          "explanation": "欧拉筛中当i能被当前质数primes[j]整除时立即break，保证每个合数只被其最小质因子筛一次，应填i % primes[j] == 0，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_11",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++语言中，关于类的继承和访问权限，下列说法正确的是（  ）。",
          "options": [
            "派生类可以访问基类的 private 成员。",
            "基类的 protected 成员在私有继承（private inheritance）后，在派生类中变为 public 。",
            "派生类对象在创建时，会先调用基类的构造函数，再调用派生类自己的构造函数。",
            "派生类对象在销毁时，会先调用基类的析构函数，再调用派生类自己的析构函数。"
          ],
          "answer": 2,
          "explanation": "创建派生类对象时按构造链先调用基类构造函数再调用派生类构造函数，C正确。派生类不能访问基类private成员，A错误；私有继承把基类protected降为private，B错误；析构顺序与构造相反，先派生类再基类，D错误，选C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_12",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "当输入 6 时，下列程序的输出结果为（  ）。\n#include <iostream>\nusing namespace std;\nint f(int n) {\nif (n <= 3) return n;\nreturn f(n - 1) + f(n - 2) + 2 * f(n - 3);\n}\nint main() {\nint n;\ncin >> n;\ncout << f(n) << endl;\nreturn 0;\n}",
          "options": [
            "14",
            "27",
            "28",
            "15"
          ],
          "answer": 1,
          "explanation": "递推：f(1)=1,f(2)=2,f(3)=3；f(4)=3+2+2×1=7；f(5)=7+3+2×2=14；f(6)=14+7+2×3=27，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "当输入 2023 时，下列程序的输出结果为（  ）。\n#include <iostream>\nusing namespace std;\nint main() {\nint x, ans = 0;\ncin >> x;\nwhile (x != 0) {\nx -= x & -x;\nans++;\n}\ncout << ans << endl;\nreturn 0;\n}",
          "options": [
            "7",
            "8",
            "9",
            "11"
          ],
          "answer": 2,
          "explanation": "x -= x & -x每次去掉最低位的1，循环次数即x的二进制中1的个数。2023=11111100111(2)，共有9个1，故输出9，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_17",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，引用一旦被初始化，就不能再改为引用另一个变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "引用必须在定义时初始化，且一经初始化便绑定到该变量，之后无法再改为引用其他变量，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序和归并排序的平均时间复杂度都是O(n log n)，但快速排序是不稳定的排序算法，归并排序是稳定的排序算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "快速排序平均复杂度O(n log n)且不稳定，归并排序复杂度O(n log n)且稳定，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_23",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "快速排序在最坏情况下的时间复杂度为O(n^2)，可以通过随机化选择基准值（pivot）的方法完全避免退化。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "随机化基准只是以极大概率避免最坏情况，并不能保证完全避免退化（最坏情况仍可能发生），说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_24",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，一个类可以拥有多个构造函数，也可以拥有多个析构函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "类可以有多个构造函数（重载），但析构函数只能有一个，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202512_25",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "求两个序列的最长公共子序列（LCS）时，使用滚动数组优化空间后，仍然可以还原出具体的LCS序列。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "滚动数组只保留两行DP值，丢失了完整的状态表，无法回溯还原出具体的LCS序列，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_15",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在64位操作系统下（LP64/LLP64模型），下面代码的输出结果是（ ）。\nint main() {\nint a[4] = {1, 2, 3, 4};\nint (*p)[4] = &a;\nint *q = a;\ncout << sizeof(a) << \" \";\ncout << sizeof(p) << \" \";\ncout << sizeof(p + 1) << \" \";\ncout << sizeof(q + 1) << \" \";\ncout << (p + 1) - p << \" \";\ncout << (q + 1) - q << endl;\n}",
          "options": [
            "16 8 8 8 1 1",
            "16 8 16 8 1 1",
            "16 8 8 4 4 1",
            "16 8 8 8 4 1"
          ],
          "answer": 0,
          "explanation": "int为4字节，sizeof(a)=4×4=16；64位下指针占8字节，sizeof(p)=sizeof(p+1)=sizeof(q+1)=8；p+1在int[4]数组上移动一个数组单位，(p+1)-p=1；q+1在int上移动，(q+1)-q=1。输出16 8 8 8 1 1，选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_16",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，若结构体中包含一个static成员变量，则该变量的存储空间属于结构体对象的一部分。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "static成员变量属于类/结构体，所有对象共享同一份存储，不包含在单个对象中，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_18",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，若函数参数类型为const int &，则该参数既可以绑定左值，也可以绑定右值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "const引用可以绑定到左值，也可以绑定到右值（临时对象），说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_20",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "使用快速排序对n个元素进行排序时，无论最好、最坏还是平均情况，时间复杂度均为O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "快速排序最好和平均为O(n log n)，但最坏情况（如已有序且每次选到极值基准）为O(n²)，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_25",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在动态规划问题中，\"状态转移方程+递推\"和\"递归+记忆化搜索\"通常是解决同一问题的两种不同实现方式，它们的时间复杂度总是相同的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推会计算全部状态，记忆化搜索只计算被实际访问到的状态，且递归有调用开销；两种方式的时间复杂度并不总是相同，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202603_26",
          "kp": "kp8_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：消息查找\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小A的消息记录中有n条消息，以1到n编号，编号小的发送时间早。一条消息可以引用一条编号小于它的消息，r[i]表示消息i引用的消息编号，r[i]=0表示无引用。查找工具任意时刻定位一条消息，若当前位于i，可执行：1.定位到i-1或i+1；2.若i引用了r[i]，定位到r[i]。有q次询问(u,v)，求从u定位到v的最少操作次数。保证至多只有2000条引用消息。\n输入：第一行两个正整数n、q；第二行n个非负整数r[i]；接下来q行每行两个正整数u、v。\n输出：q行，每行一个整数，表示最少操作次数。",
          "options": [],
          "answer": null,
          "explanation": "思路：引用消息数量很少，只对有引用关系的消息建图。在相邻消息之间连权为1的边，在引用边(u→r[u])上连权为1的边，用Floyd预处理这些关键点之间的最短路；普通消息到最近关键点用前后缀指针维护，询问答案由三段构成：u到最近关键点+关键点间最短路+最近关键点到v，复杂度O(C³+q)，C≤2000。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nconst int C = 2e3 + 5;\nconst int oo = 1e9;\nint n, q, r[N], mark[N], pos[N];\nint p[C], cnt, d[C][C];\nint pre[N], suf[N];\nint main() {\n    scanf(\"%d%d\", &n, &q);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%d\", &r[i]);\n        if (r[i]) mark[i] = mark[r[i]] = 1;\n    }\n    for (int i = 1; i <= n; i++)\n        if (mark[i]) { p[++cnt] = i; pos[i] = cnt; }\n    for (int i = 1; i <= cnt; i++) {\n        for (int j = 1; j <= i; j++) d[i][j] = oo;\n        d[i][i] = 0;\n        for (int j = i; j > 1; j--) {\n            d[i][j - 1] = min(d[i][j - 1], d[i][j] + p[j] - p[j - 1]);\n            if (r[p[j]]) {\n                int k = pos[r[p[j]]];\n                d[i][k] = min(d[i][k], d[i][j] + 1);\n            }\n        }\n    }\n    for (int i = 1; i <= n; i++) {\n        pre[i] = pre[i - 1];\n        if (mark[i]) pre[i] = i;\n    }\n    suf[n + 1] = n + 1;\n    for (int i = n; i; i--) {\n        suf[i] = suf[i + 1];\n        if (mark[i]) suf[i] = i;\n    }\n    while (q--) {\n        int x, y;\n        scanf(\"%d%d\", &x, &y);\n        if (pre[x] < suf[y]) printf(\"%d\\n\", x - y);\n        else printf(\"%d\\n\", x - pre[x] + d[pos[pre[x]]][pos[suf[y]]] + suf[y] - y);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6 3\n0 0 1 2 2 5\n4 1\n6 2\n6 3",
              "expectedOutput": "2\n2\n3"
            },
            {
              "input": "5 5\n0 0 0 1 3\n4 1\n4 2\n5 1\n5 2\n5 3",
              "expectedOutput": "1\n2\n2\n2\n1"
            }
          ]
        },
        {
          "id": "l8_202606_06",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "归并排序每次把长度为n的序列分成两个规模约为n/2的子序列，递归排序后再用线性时间合并。该算法的时间复杂度通常为（  ）。",
          "options": [
            "O(n)",
            "O(n^2)",
            "O(2^n)",
            "O(n log n)"
          ],
          "answer": 3,
          "explanation": "归并排序每层总合并代价为O(n)，共log n层，时间复杂度为O(n log n)，选D。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_11",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码片段的时间复杂度为（  ）。\nlong long s = 0;\nfor (int i = 1; i <= n; i++)\nfor (int j = 1; j * j <= n; j++)\ns += i + j;",
          "options": [
            "O(n)",
            "O(n log n)",
            "O(n^(3/2))",
            "O(n^2)"
          ],
          "answer": 2,
          "explanation": "外层循环n次，内层循环次数为√n，总操作数为n·√n=n^(3/2)，时间复杂度为O(n^(3/2))，选C。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_12",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "某优化问题的答案是在[L,R]内的整数，存在单调判定函数check(x)，且每次判定的时间复杂度为O(T)。使用二分答案求最小可行值，整体时间复杂度通常为（  ）。",
          "options": [
            "O(T)",
            "O(T log(R-L))",
            "O(T(R-L))",
            "O((R-L) log T)"
          ],
          "answer": 1,
          "explanation": "二分答案每次把区间减半，共需log(R-L)次判定，每次判定耗时O(T)，总时间复杂度为O(T log(R-L))，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_13",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列线性筛的代码片段中，当枚举到质数p且i % p == 0时，使用break;语句停止继续枚举。这样做的主要目的是（  ）。",
          "options": [
            "保证递归深度不超过 O(log n)。",
            "保证每个合数只被它的最小质因子筛去一次。",
            "保证每个素数都被标记为合数。",
            "把筛法时间复杂度提高到 O(n log n)。"
          ],
          "answer": 1,
          "explanation": "欧拉筛中当i%p==0时，更大的质数q会使i*q的最小质因子是p而不是q，若继续枚举会造成重复标记，因此break保证每个合数只被最小质因子筛一次，选B。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_14",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，关于类的继承和构造、析构顺序，下列说法正确的是（  ）。",
          "options": [
            "派生类可以直接访问基类的 private 成员。",
            "基类的 protected 成员在私有继承后会变成派生类的 public 成员。",
            "创建派生类对象时，会先调用基类构造函数，再调用派生类构造函数。",
            "销毁派生类对象时，会先调用基类析构函数，再调用派生类析构函数。"
          ],
          "answer": 2,
          "explanation": "创建派生类对象按构造顺序先基类后派生类，C正确。派生类不能直接访问基类private成员，A错误；私有继承把protected降为private，B错误；析构顺序与构造相反，先派生类后基类，D错误，选C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_15",
          "kp": "kp8_07",
          "type": "choice",
          "difficulty": 1,
          "question": "将5个元素按1、2、3、4、5的顺序入栈，在该过程中可随时插入出栈操作。下列序列中不可能作为出栈序列的是（  ）。",
          "options": [
            "5,4,3,2,1",
            "3,2,1,5,4",
            "4,3,2,1,5",
            "3,4,1,2,5"
          ],
          "answer": 3,
          "explanation": "D序列：先入1,2,3出3，再入4出4，此时栈内自顶向下为2、1，栈顶是2，要输出1必须先输出2，因此\"3,4,1,...\"不可能。A、B、C均可用入出栈顺序实现，故选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_24",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "若能写出判定函数check(x)表示\"答案为x时是否可行\"，即使check(x)不满足单调性，也一定可以使用二分答案求最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二分答案要求判定函数具有单调性（可行域连续），若不满足单调性则无法通过二分定位最优解，说法错误。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l8_202606_25",
          "kp": "kp8_07",
          "type": "judge",
          "difficulty": 1,
          "question": "归并排序是一种稳定排序算法，常见实现的时间复杂度为O(n log n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "归并排序合并时相等元素保持原相对顺序，是稳定排序，且最坏/平均时间复杂度均为O(n log n)，说法正确。分析时空复杂度要抓住循环层数与数据规模，选对排序、哈希、DP与筛法等优化手段。",
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
