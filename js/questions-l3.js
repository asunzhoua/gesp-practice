const QUESTION_BANK = {
  "knowledgePoints": {
    "kp3_03": {
      "title": "算法的概念与描述",
      "questions": [
        {
          "id": "l3_202306_01",
          "kp": "kp3_03",
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
          "explanation": "编译（D）是把源程序整体翻译成机器能直接执行的目标代码，从而生成可执行代码。编辑只是修改代码，保存是存盘，调试是查找和修正程序错误，它们都不会直接生成可执行文件，因此选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_16",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一个算法可以用不同的形式来描述，但要求描述比较规范，因此不能用自然语言描述。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "算法的描述方式有很多种，除了程序语言，还可以用自然语言、流程图、伪代码等来描述，只要表达清晰规范即可。题干说不能使用自然语言描述，与实际情况不符，因此该说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_17",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "域名是由一串用点分隔的名字来标识互联网上一个计算机或计算机组的名称，CCF编程能力等级认证官方网站的域名是gesp.ccf.org.cn，其中顶级域名是gesp。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "域名由多个部分用点号连接而成，其中最右边的部分是顶级域名。gesp.ccf.org.cn的最右边是cn，所以顶级域名是cn而不是gesp，cn代表中国，因此题干说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_01",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "人们所使用的手机上安装的App通常指的是（ ）。",
          "options": [
            "A. 一款操作系统",
            "B. 一款应用软件",
            "C. 一种通话设备",
            "D. 以上都不对"
          ],
          "answer": 1,
          "explanation": "App是英文application的简称，指安装在手机、平板等设备上的应用软件，例如微信、支付宝等，泛指第三方开发的应用软件，与系统软件相对。它既不是操作系统，也不是通话设备，所以本题选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_02",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图的输出结果是？（ ）",
          "options": [
            "A. 60",
            "B. 20",
            "C. 5",
            "D. 1"
          ],
          "answer": 1,
          "explanation": "按流程图执行循环：s初始为1，a从5开始，只要条件成立就执行s=s*a并让a减1。当a=5时s=5，当a=4时s=5×4=20，之后条件不再满足，输出20，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_12",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "C++的数据类型转换让人很难琢磨透，下列代码输出的值是（ ）。\n<pre><code>int a=3;\nint b=2;\ncout<<a/b*1.0<<endl;\n</code></pre>",
          "options": [
            "A. 1.5",
            "B. 1",
            "C. 2",
            "D. 1.50"
          ],
          "answer": 1,
          "explanation": "a和b都是int类型，3/2先做整数除法得到1，小数部分被直接截掉，再乘1.0仍得1.0，输出显示为1。整数除法会先截断小数部分再进行后续运算，所以本题选B。这就是整数除法先截断再运算的典型例子。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_14",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "某公司新出了一款无人驾驶的小汽车，通过声控智能驾驶系统，乘客只要告诉汽车目的地，车子就能自动选择一条优化路线，告诉乘客后驶达那里。请问下面哪项不是驾驶系统完成选路所必须的。（ ）",
          "options": [
            "A. 麦克风",
            "B. 扬声器",
            "C. 油量表",
            "D. 传感器"
          ],
          "answer": 2,
          "explanation": "完成选路需要接收乘客语音（麦克风）、感知车辆位置与环境（传感器）、向乘客播报路线（扬声器）。题目问\"不是必须\"，要找与选路功能无关的部件，油量表只反映油量，故选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_15",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "现代计算机是指电子计算机，它所基于的是（ ）体系结构。",
          "options": [
            "A. 艾伦·图灵",
            "B. 冯·诺依曼",
            "C. 阿塔纳索夫",
            "D. 埃克特-莫克利"
          ],
          "answer": 1,
          "explanation": "现代电子计算机普遍采用存储程序控制原理，即冯·诺依曼体系结构，把程序和数据一起存放在内存中，由CPU依次取出指令执行，所以本题选B。所以现代计算机又称冯·诺依曼机。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_24",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨最近在准备考GESP，他用的Dev C++来练习和运行程序，所以Dev C++也是一个小型操作系统。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Dev C++是集成开发环境（IDE），负责代码编辑、编译和运行，但它本身运行在操作系统之上，并不是一个小型操作系统。要区分集成开发环境与操作系统的概念，所以题干说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_25",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个while循环都可以转化为等价的for循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "for循环由初始化、条件、步进三个部分组成，可以把while循环的条件直接放进for的条件部分，所以任何一个while循环都能转化为等价的for循环，题干正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202403_14",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨的父母最近刚刚给他买了一块华为手表，他说手表上跑的是鸿蒙，这个鸿蒙是（ ）。",
          "options": [
            "小程序",
            "计时器",
            "操作系统",
            "神话人物"
          ],
          "answer": 2,
          "explanation": "鸿蒙（HarmonyOS）是华为开发的分布式操作系统，运行在手机、手表、平板等设备上，不属于小程序或计时器，也不是神话人物，所以选操作系统。操作系统属于系统软件，负责管理硬件并运行应用程序。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_15",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "中国计算机学会（CCF）在2024年1月27日的颁奖典礼上颁布了王选奖，王选先生的重大贡献是（ ）。",
          "options": [
            "制造自动驾驶汽车",
            "创立培训学校",
            "发明汉字激光照排系统",
            "成立方正公司"
          ],
          "answer": 2,
          "explanation": "王选院士主持研制了汉字激光照排系统，使汉字印刷告别铅与火，是计算机汉字信息处理领域的重大贡献，因此设立王选奖纪念他，选C。这是计算机技术改变传统行业的典型例子。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_18",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码可以计算1到100的累加和，采用的是穷举法。\n<pre><code>for(int i=1;i<=100;i++)\n    sum+=i;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。这段代码用循环顺序累加，是直接求和，并没有把每个候选值逐一测试是否满足条件，所以不是穷举法（枚举法）。穷举法强调列出所有可能情况再筛选，例如判断哪些数满足某个条件。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_24",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨今年春节回奶奶家了，奶奶家的数字电视要设置ip地址并接入到WIFI盒子才能收看节目，那这个WIFI盒子具有路由器的功能。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。能提供WIFI信号、分配IP地址并让电视上网的WIFI盒子本质上就是路由器。路由器负责把家庭网络与运营商网络连接起来并转发数据，所以这个说法正确。路由器同时兼具交换机和网关的功能，负责转发数据。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_25",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个for循环都可以转化为等价的while循环（ ）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。for(初始化;条件;步进)本质上等价于：初始化; while(条件){循环体;步进;}。两种循环表达能力相同，任何for循环都能改写成功能完全一样的while循环。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_01",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨父母带他到某培训机构给他报名参加CCF组织的GESP认证考试的第1级，那他可以选择的认证语言有（ ）种。",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explanation": "GESP认证在1级时可以选择C++、Python和图形化（Scratch）三种编程语言进行认证，因此可以选择的认证语言有3种，选C。报名时从这三门认证语言中任选其一参加即可。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_02",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面流程图在yr输入2024时，可以判定yr代表闰年，并输出2月是29天，则图中菱形框中应该填入（ ）。",
          "options": [
            "(yr%400==0) || (yr%4==0)",
            "(yr%400==0) || (yr%4==0 && yr%100!=0)",
            "(yr%400==0) && (yr%4==0)",
            "(yr%400==0) && (yr%4==0 && yr%100!=0)"
          ],
          "answer": 1,
          "explanation": "闰年的判断条件是：能被400整除，或者能被4整除但不能被100整除。四个选项中只有B完整表达了这个规则。选项A会把2100这类年份误判成闰年，故填B。C、D用&&把条件连在一起，也无法正确判断世纪闰年。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_16",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "GESP测试是对认证者的编程能力进行等级认证，同一级别的能力基本上与编程语言无关。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。GESP按能力等级认证编程能力，同一级别考察的算法和编程能力基本一致，不局限于某一门语言，所以说法正确。这也说明学编程重在掌握思路，而不必死记语言语法。所以说GESP考察的是编程能力本身，而不是某一门语言。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_24",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "自然界中，最小的素数是 2",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。素数（质数）是只有1和它本身两个因数的正整数。1既不是素数也不是合数，所以最小的素数是2，说法正确。注意1很特殊，它既不是质数也不是合数，要单独记忆。最小的质数是2，这个结论要记牢。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_16",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "判断一个三角形是否成立的条件只有:任意两边长度之和大于第三条边的长度",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。三角形任意两边之和大于第三边，这是三角形存在的充要条件（再配合三边都为正）。只要这个条件满足，三边就能围成三角形。三条边中任意两条之和都要大于第三边，缺一不可。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_18",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面程序是判断是否是闰年的正确程序。\n<pre><code>cin>>n;\ncout<<((n%4==0&&n%100!=0)||(n%400==0))?1:0;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。(n%4==0&&n%100!=0)||(n%400==0)正是闰年判断规则，n满足时表达式为真（1），不满足为假（0），输出1或0，判断正确。要特别区分普通闰年和世纪闰年两种情况的判断。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_19",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语句cout<<(n%15==0? \"YES\":\"NO\"); 能够判断一个整数能否被3和5同时整除",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。一个数能同时被3和5整除，当且仅当它能被3和5的最小公倍数15整除。所以n%15==0能准确判断能否被3和5同时整除。这是整除性质在判断公约数类问题中的直接应用。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_20",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "有n个同学，从中抽取任意个人数来参加学校组织的大合唱，共有2的n次幂个方法",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。每个同学有选或不选两种可能，n个同学共有2的n次方种选择方式（包括选0个和全选），所以说法正确。这是排列组合中集合子集数的经典结论。这是组合计数中每个元素都有两种状态的经典模型。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_23",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在数学纸面计算中，pow(2, 3) 的计算结果一定是8，但是在C++中，如果遇到数据类型是浮点数，那就不一定正确。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++的pow函数返回的是double浮点数，浮点数在二进制里不能精确表示所有值，计算2^3可能得到7.99999这样的结果。用浮点数判断它是否等于整数8时，结果不一定为true，与数学纸面计算不同。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_24",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，枚举的底层类型可以是非整型（如 float 或 double ）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++规定枚举的底层类型必须是整型，例如int、char、unsigned int等，目的是让枚举值能够参与整数运算。float和double属于浮点类型，不能作为枚举的底层类型，所以题干的说法是错误的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_25",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "函数声明 double f(); 返回 int 时，会自动转换为 double",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数的返回类型以声明为准。函数声明是double f()，要求返回double；如果函数体里return的是int类型值，编译器会自动把这个int值转换为double再返回，转换是无损的，所以说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_01",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++代码后，c 的数值是（ ）。int a = 10, b = 3; double c = a / b;",
          "options": [
            "3.33333",
            "3.333",
            "3.0",
            "3.3"
          ],
          "answer": 2,
          "explanation": "a和b都是int类型，a/b执行的是整数除法，10除以3商3余1，只保留整数部分得到3，小数部分被丢弃。然后把整数3赋给double类型的c，c自动转换成浮点数表示，得到3.0而不是3.33333。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_02",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列C++表达式的结果为 true 的是（ ）。",
          "options": [
            "(5 <= 5) && (7 < 5)",
            "!(10 > 5)",
            "(10 != 10) || (5 >= 3)",
            "(5 == 3) && (4 > 2)"
          ],
          "answer": 2,
          "explanation": "先算各小括号：A中5<=5为true、7<5为false，true&&false=false；B中!(10>5)=!true=false；C中10!=10为false、5>=3为true，false||true=true；D中false&&true=false。只有C的结果是true。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_04",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++代码后，变量 sum 的值是（ ）。int sum = 0; for (int i = 1; i <= 5; i += 2) { sum += i; int sum=0; }",
          "options": [
            "6",
            "9",
            "15",
            "死循环"
          ],
          "answer": 1,
          "explanation": "循环体里int sum=0声明了一个新的局部变量，它只在循环体内有效，不影响外层的sum。sum+=i累加的始终是外层sum，i按i+=2依次取1、3、5，所以外层sum=1+3+5=9，答案为9。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_08",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码 count++ 执行的次数是（ ）。int i = 10; int count=0; while (i > 0) { i -= 3; continue; count++; }",
          "options": [
            "2",
            "3",
            "4",
            "0"
          ],
          "answer": 3,
          "explanation": "循环体内continue出现在count++之前，每次执行到continue就会跳过count++直接进入下一轮循环。变量i从10开始依次减3变成7、4、1、-2，循环共执行4轮，但count++一次都没执行，所以执行次数是0。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_09",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码段的输出是（ ）。for (int i = 0; i < 4; i++) { for (int j = 0; j <= i; j++) cout << j; cout << \"#\"; }",
          "options": [
            "0#01#012#0123#",
            "1#12#123#1234#",
            "0#1#2#3#",
            "0#01#012#01243#"
          ],
          "answer": 0,
          "explanation": "外层i从0到3。内层循环j从0到i，逐个输出j：i=0输出0；i=1输出01；i=2输出012；i=3输出0123。每轮内层结束后输出一个#，所以整体输出0#01#012#0123#。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_10",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++变量作用域的说法，错误的是（ ）。",
          "options": [
            "在 for 循环语句中声明的变量，其作用域仅限于该循环体内。",
            "在函数内部声明的变量（局部变量），仅在函数内部有效。",
            "在所有函数外部声明的变量，在整个程序中都有效。",
            "不同函数中的局部变量可以同名，它们代表不同的内存单元"
          ],
          "answer": 2,
          "explanation": "全局变量的作用域从它的声明处开始，到所在文件结束。如果声明写在文件中间，那么声明之前的代码无法访问它，说它“在整个程序中都有效”不够准确。A、B、D三个说法都正确，所以错误的是C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_11",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "关于以下代码的说法正确的是（ ）。int reversed = 0; while (x != 0) { int digit = x % 10; x /= 10; reversed = reversed * 10 + digit; }",
          "options": [
            "能够反转任何位数的整数",
            "能够反转的最大位数正整数是 2147483647",
            "能够反转的最大位数正整数是 2147483648",
            "能够反转的最大位数正整数是 1463847412"
          ],
          "answer": 3,
          "explanation": "这个循环把x反转存入reversed，关键是reversed可能超出int的范围。2147483647反转后溢出；程序能安全反转的最大正整数是1463847412，因为它的反转2147483641没有超过int上限2147483647。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_16",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式 sizeof('a') 的结果总是 1 ，因为 'a' 是一个字符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在C++中，字符字面量'a'的类型是char，占1字节，所以sizeof('a')=1。注意在C语言中'a'的类型是int占4字节，但本题考察的是C++，因此结论为1，题干说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_18",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "do { ... } while (false); 循环体内的语句至少会被执行一次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "do-while循环的特点是先执行一次循环体，再判断while条件。所以无论条件是真还是假，循环体都至少会执行一次。这和while循环不同，while是先判断后执行，条件不满足一次都不执行。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_19",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，++i 是一个左值表达式，而 i++ 是一个右值表达式。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++中++i返回自增之后的对象本身，它是左值，可以取地址、可以被赋值；i++返回的是自增之前的旧值副本，是纯右值，不能取地址。因此“++i是左值、i++是右值”的说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_20",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "对于 enum Color { RED, GREEN, BLUE }; ，RED 的类型是 int",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "按C++标准，枚举项RED的类型是枚举类型Color，而不是int。只不过Color的底层类型是int，RED可以隐式转换为int参与运算，但它的静态类型是Color。所以“RED的类型是int”是错误的。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_21",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "#define SQUARE(x) x * x 是一个安全的宏定义，SQUARE(2+3) 会正确计算出 25 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "宏是纯文本替换，不做计算。SQUARE(2+3)会被展开成2+3×2+3，按运算符优先级先算乘法得到2+6+3=11，不是25。要得到正确结果必须把参数加括号，定义成#define SQUARE(x) ((x)*(x))。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_23",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式 a > b ? a : b = 10; 一定是合法的C++代码。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "条件运算符的优先级比赋值运算符高，所以a>b?a:b=10会被解析成(a>b?a:b)=10。这要求条件表达式的两个分支都是同一类型的左值，且结果可以赋值，但并不是所有情况下都满足，所以不能说它一定合法。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_24",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "#include \"file.h\" 和 #include <file.h> 在编译器查找头文件时的搜索策略是完全相同的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "双引号形式的#include \"file.h\"会先搜索当前源文件所在的目录，再搜索系统头文件路径；尖括号形式的#include <file.h>只搜索系统/标准头文件路径，不先搜当前目录。两种搜索策略不同，题干错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_25",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在同一个作用域内，extern 声明的变量可以多次定义。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "extern声明变量时如果带初始化，则是定义；不带初始化只是声明。同一个变量在同一作用域内可以多次用extern声明（重复声明），但只能定义一次，多次定义会违反“一个定义规则”，所以题干错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_03",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码段执行后，变量 sum 的值是（ ）。{ int sum = 0; for (int i = 1; i <= 10; i++) { if (i % 3 == 8>>2) continue; sum += i; } }",
          "options": [
            "12",
            "17",
            "33",
            "40"
          ],
          "answer": 3,
          "explanation": "先计算8>>2，即把8右移2位：8的二进制1000右移2位得0010，也就是2。循环中i%3==2时执行continue跳过累加，i=2、5、8被跳过。1到10之和是55，减去2+5+8=15，得到sum=40。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_04",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下程序段，输出值是（ ）。int x = 5; if (x == 3 >> 2) x = 8 >> 3; cout << x << endl;",
          "options": [
            "0",
            "5",
            "120",
            "1"
          ],
          "answer": 1,
          "explanation": "3>>2表示3右移2位：3的二进制0011右移2位得0000，也就是0。if条件x==0，但x=5不等于0，条件不成立，所以x=8>>3这行不执行，x仍然是5，输出5。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_11",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "整型变量 x 的初始值为 10 ，以下代码的输出结果是（ ）。int t = x--; t -= x; cout << t << endl;",
          "options": [
            "0",
            "-1",
            "1",
            "死循环"
          ],
          "answer": 2,
          "explanation": "t=x--是先用x的当前值10给t赋值，然后x自减变成9；接着t-=x相当于t=10-9=1；最后输出t，结果是1。注意后置自减x--是先取值后自减，与前置自减不同。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_12",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "根据下面的流程图，如果成绩 score 输入 60 ，输出的结果是（ ）。流程图：开始→输入score→score≥90?是→优秀；否→score≥60?是→及格；否→不及格",
          "options": [
            "优秀",
            "及格",
            "不及格",
            "没有输出"
          ],
          "answer": 1,
          "explanation": "流程图先判断score是否大于等于90，60不满足，进入第二个判断；再判断score是否大于等于60，60刚好满足，于是输出“及格”。如果小于60才输出“不及格”，大于等于90则输出“优秀”。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_17",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "整型变量 a 的值为 3 ，浮点数变量 b 的值为 3.5 ，在 C++ 编译环境下，经过 a *= b 计算后，a 的值变为 10.5 ，此时如果输出 a ，将输出 10.5 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "a是整型变量，a*=b等价于a=a*b，右边乘积3×3.5=10.5是double类型，赋给int的a时会截断小数部分，a变成10。所以输出a得到的是10，而不是10.5，题干说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_19",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码输出结果为 8 。int a = 5, b = 3; int c = a++ + ++b; cout << c << endl;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "a++是后置自增，表达式a++的值为5，同时a变为6；++b是前置自增，表达式++b的值为4，同时b变为4。c=a+++ ++b=5+4=9，输出9而不是8，所以题干说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_22",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 表达式 z = a > b ? x : y 等同于：if (a > b) { z = x; } else { z = y; }",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "条件运算符a>b?x:y的含义是：若a>b成立就取x，否则取y。把它赋值给z，与if(a>b){z=x;}else{z=y;}完全等价，只是写法不同，执行效果相同，所以题干的说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_23",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，++ 和 -- 运算符只能用于整型变量，不能用于浮点数变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中的++和--运算符不仅可以作用于整型变量，也可以作用于浮点数变量，使浮点数增加或减少1.0。例如float x=2.5;x++;之后x变成3.5，所以“只能用于整型变量”的说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_25",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码中，Hello 将被输出5次。for (int i = 0; i < 5; i++); { cout << \"Hello\" << endl; }",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "for(int i=0;i<5;i++);的后面直接跟了分号，循环体是空语句，只是让i从0空转到5，什么都不做。后面的大括号块是独立的，不属于循环，Hello只输出1次，而不是5次，所以题干错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_04",
          "kp": "kp3_03",
          "type": "choice",
          "difficulty": 1,
          "question": "关于以下程序段，说法正确的是（ ）。int x=10; cout << (x++) + (++x) << endl;",
          "options": [
            "C++11 标准中，这是未定义行为，不同的环境有可能出现不同的结果",
            "22",
            "21",
            "20"
          ],
          "answer": 0,
          "explanation": "表达式(x++)+(++x)中，x++要读x的旧值并写回x自增，++x也要读并写回x，两个修改之间没有先后顺序的规定，属于未定义行为。不同编译器、不同优化级别可能得到不同结果，所以选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_19",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的流程图是用来求 1+2+3+…+10 的和。请判断：这个流程图的逻辑正确还是错误？流程图内容：sum=0,i=1；判断i≤10？是→sum=sum+i、i=i+1后回到判断；否→输出sum。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "流程图设置sum=0、i=1，然后判断i≤10：成立则执行sum=sum+i、i=i+1并回到判断，不成立则输出sum。这样从i=1到i=10逐个累加，正确求出1+2+…+10=55，逻辑正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_20",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面流程图的功能是计算 5 对 2 取余数，输出结果为 1。流程图内容：a=5,b=2；判断a≥b？是→a=a-b回到判断；否→输出a。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "流程图先设a=5、b=2，判断a≥b：成立则执行a=a-b并回到判断，不成立则输出a。过程为5→3→1，当a=1<b=2时输出1。1正是5对2取余的结果，流程图功能正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_23",
          "kp": "kp3_03",
          "type": "judge",
          "difficulty": 1,
          "question": "<pre><code>某个初学 C++ 的学生，在对照参考程序写了一个程序以后，信心满满地进行编译，他敲进编译器的全部代码为：1 #include<bits/stdc++.h> 2 using namespace std; 3 int main(){ 4 cout<<\"Hello world!\"<<endl; 5 return 0; }，这个程序能够正常编译运行。</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这段程序包含了<bits/stdc++.h>头文件、using namespace std、main函数和cout输出语句，语法完整正确，可以正常编译运行并输出Hello world!，所以题干说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp3_01": {
      "title": "数据编码与进制转换",
      "questions": [
        {
          "id": "l3_202306_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数11.01在十进制下是（ ）。",
          "options": [
            "A. 3.01",
            "B. 3.05",
            "C. 3.125",
            "D. 3.25"
          ],
          "answer": 3,
          "explanation": "按位权展开：1×2^1+1×2^0+0×2^-1+1×2^-2=2+1+0+0.25=3.25。整数部分2+1=3，小数部分只有第2位为1，是0.25，所以结果是3.25，选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知大写字符'A'的ASCII编码的十六进制表示为0x41，则字符'F'的ASCII编码的十六进制表示为（ ）。",
          "options": [
            "A. 46",
            "B. 47",
            "C. 48",
            "D. 49"
          ],
          "answer": 0,
          "explanation": "字母表按从A到Z的顺序排列，'F'在'A'后面第5个位置，所以ASCII编码值也相应增加5：0x41加5得0x46。另外十六进制46换成十进制是70，恰好等于'F'的ASCII码，因此本题选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_08",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于进制的叙述，不正确的是（ ）。",
          "options": [
            "A. 正整数的二进制表示中只会出现0和1。",
            "B. 10不是2的整数次幂，所以十进制数无法转换为二进制数。",
            "C. 从二进制转换为8进制时，可以很方便地由低到高将每3位二进制位转换为对应的一位8进制位。",
            "D. 从二进制转换为16进制时，可以很方便地由低到高将每4位二进制位转换为对应的一位16进制位。"
          ],
          "answer": 1,
          "explanation": "二进制与十进制只是同一个数的不同表示方式，任何进制之间都可以互相转换，所以\"10不是2的整数次幂就无法转换\"的说法明显错误。A、C、D对进制的描述都正确，因此选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_18",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "数据编码方式只有原码、反码、补码三种。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数据的编码方式非常多，除了原码、反码、补码，还有格雷码、哈夫曼编码、BCD码等，它们各自适用于不同的场景。题干限定\"只有三种\"，把多种编码方式说成只有三种，以偏概全，所以该说法是错误的。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_23",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "计算机中存储的数据都是二进制形式。因此，在使用C++语言编写程序时，将所有十进制数改写为相同数值的二进制数，会使得程序运行效率更高。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "无论程序源码中写十进制还是二进制，编译器最终都会把它们翻译成等价的二进制机器指令来运行，运行效率没有差别。效率只与程序本身和运行环境有关，与书写进制无关，所以题干说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_24",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，表达式(0xf == 015)的值为true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "0xf是十六进制数，f表示15，所以0xf等于十进制15；015的前导0表示八进制，等于1×8+5=13。区分0x开头的十六进制和0开头的八进制是关键，15不等于13，所以题干说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知大写字符'A'的ASCII编码的十六进制表示为0x41，则字符'L'的ASCII编码的十六进制表示为（ ）。",
          "options": [
            "A. 4A",
            "B. 4B",
            "C. 4C",
            "D. 52"
          ],
          "answer": 2,
          "explanation": "'L'在字母表中排在'A'后面第11个位置，ASCII编码值也相应大11：0x41加11得0x4C，0x4C就是十进制的76，恰好是'L'的ASCII值，所以'L'的十六进制编码为4C，本题选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_08",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于进制的叙述，正确的是（ ）。",
          "options": [
            "A. 只有十进制和二进制能够用来表示小数，八进制和十六进制不可以。",
            "B. 常用的进制包括二进制、八进制、十进制、十六进制，其他进制在日常生活中很少使用。",
            "C. 对任意正整数，其二进制表示不会比它的十进制表示更短。",
            "D. 正整数的八进制表示中，每一位可能出现的最大数字是8。"
          ],
          "answer": 2,
          "explanation": "A错在八进制和十六进制同样可以表示小数；D错在八进制每位最大只能是7，不会出现数字8；C正确，因为二进制只有0和1两种符号，位数一般比十进制更长。逐一排除，故选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_16",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "二进制数101.101在十进制下是5.005。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "按位权展开：101.101₂=1×4+1×1+1×0.5+1×0.125=5.625，整数部分是5，小数部分是0.625，并不是0.005，所以题干说它等于5.005是错误的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_18",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "字符常量'3'的值和int类型常量3的值是相同的，只是占用的字节数不同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "字符'3'在内存中以ASCII码存储，值是整数51；而int类型常量3的值是3。字符参与比较时先转换成其ASCII整数值，51与3不同，所以不只是字节数不同，题干说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_24",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，表达式(0xff == 255)的值为true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "0xff是十六进制数，每位最大是f表示15，0xff=15×16+15=255，与十进制255相等。掌握十六进制与十进制的互算是基本功，所以表达式值为true，题干说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_27",
          "kp": "kp3_01",
          "type": "coding",
          "difficulty": 2,
          "question": "进制判断\n【问题描述】N进制数指的是逢N进一的计数制。例如，人们日常生活中大多使用十进制计数，而计算机底层则一般使用二进制。除此之外，八进制和十六进制在一些场合也是常用的计数制（十六进制中，一般使用字母A至F表示十至十五）。现在有N个数，请你分别判断他们是否可能是二进制、八进制、十进制、十六进制。例如，15A6F就只可能是十六进制，而1011则是四种进制皆有可能。\n【输入描述】输入的第一行为一个十进制表示的整数N。接下来N行，每行一个字符串，表示需要判断的数。保证所有字符串均由数字和大写字母组成，且不以0开头。保证不会出现空行。保证1≤N≤1000，保证所有字符串长度不超过10。\n【输出描述】输出N行，每行4个数，用空格隔开，分别表示给定的字符串是否可能表示一个二进制数、八进制数、十进制数、十六进制数。使用1表示可能，使用0表示不可能。例如，对于只可能是十六进制数的15A6F，就需要输出0001；而对于四者皆有可能的1011，则需要输出1111。\n【数据范围】\n1 ≤ N ≤ 1000\n1 ≤ 字符串长度 ≤ 10",
          "options": null,
          "answer": null,
          "explanation": "思路：找出字符串中出现的最大的字符max。二进制只含0和1，八进制只含0到7，十进制只含0到9，十六进制只含0到9和A到F。分别把max与'1'、'7'、'9'、'F'比较，小于等于对应字符则该进制可能，输出1，否则输出0。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 0;\n    cin >> n;\n    for (int i = 0; i < n; i++) {\n        char str[11];\n        cin >> str;\n        char maxc = '0';\n        for (int j = 0; str[j] != '\\0'; j++)\n            if (str[j] > maxc) maxc = str[j];\n        cout << (maxc <= '1') << \" \" << (maxc <= '7') << \" \"\n             << (maxc <= '9') << \" \" << (maxc <= 'F') << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n15A6F\n1011",
              "expectedOutput": "0 0 0 1\n1 1 1 1"
            },
            {
              "input": "4\n1234567\n12345678\nFF\nGG",
              "expectedOutput": "0 1 1 1\n0 0 1 1\n0 0 0 1\n0 0 0 0"
            }
          ]
        },
        {
          "id": "l3_202312_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列编码中，不能够和二进制\"1101 1101\"相等的是（ ）。",
          "options": [
            "A. （221）十进制",
            "B. （335）八进制",
            "C. （dd）十六进制",
            "D. （5d）十六进制"
          ],
          "answer": 3,
          "explanation": "11011101₂=221（十进制），八进制335=3×64+3×8+5=221，十六进制dd=13×16+13=221，都与它相等；而十六进制5d=5×16+13=93，不等，故选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_10",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "32位计算机中，C++的整型变量int能够表示的数据范围是（ ）。",
          "options": [
            "A. 2^31~(2^31)-1",
            "B. 2^32",
            "C. -2^31~+(2^31)-1",
            "D. -(2^31)+1~2^31"
          ],
          "answer": 2,
          "explanation": "32位int采用补码存储，最高位是符号位，因此表示范围是从-2^31到2^31-1。补码表示中，负数的个数比正数多一个，所以正确答案为C。这也是补码编码的重要特点，需要牢记。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202403_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "整数-5的16位补码表示是（ ）。",
          "options": [
            "1005",
            "1006",
            "FFFA",
            "FFFB"
          ],
          "answer": 3,
          "explanation": "-5的16位补码等于2的16次方减5，即65536-5=65531，写成十六进制就是FFFB。补码的规则：正数补码是它本身，负数补码是它的绝对值取反加1，所以-5的补码是0x0005取反得0xFFFA再加1得0xFFFB。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果16位短整数-2的二进制是\"FFFE\"，则短整数-4的十六进制是（ ）。",
          "options": [
            "FF04",
            "FFFA",
            "FFFC",
            "FFFH"
          ],
          "answer": 2,
          "explanation": "16位补码中，-4 = 65536-4 = 65532，写成十六进制是FFFC。也可从-2的补码FFFE推：补码递减1就表示整数减1，-2对应FFFE，-3对应FFFD，-4对应FFFC。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_10",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "C++的字符变量的码值是整数，下面字面量形式的字符码值最大的是（ ）。",
          "options": [
            "100",
            "075",
            "0x70",
            "0x60"
          ],
          "answer": 2,
          "explanation": "100是十进制就是100；075以0开头是八进制，等于7×8+5=61；0x70是十六进制，等于7×16=112；0x60等于96。四个数里112最大，所以选0x70。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_16",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "任意整数a的二进制反码与补码都有1位不同。 ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。正数的反码和补码都等于原码本身，一位都不差；只有负数补码=反码+1。而且反码加1可能产生进位，例如反码...0111加1后可能多位变化，所以并不总是只差1位。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_20",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，(010<<1) 执行结果是100 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。以0开头的010是八进制数，等于十进制8。8<<1左移一位等于16，输出是16而不是100。如果按二进制理解，8的二进制1000左移一位是10000也是16。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_04",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码将十进制转化成八进制，则横线上应填入（ ）。\n<pre><code>while (decimal > 0)\n{\n    ____\n}\n</code></pre> 之后逆序输出oct_number。",
          "options": [
            "oct_number[i] = decimal % 8; decimal /= 8;",
            "oct_number[i] = decimal / 8; decimal %/= 8;",
            "oct_number[i++] = decimal % 8; decimal /= 8;",
            "oct_number[i++] = decimal / 8; decimal %= 8;"
          ],
          "answer": 2,
          "explanation": "十进制转八进制要反复取余数并存到数组里，所以先取decimal%8存到oct_number[i]，再让i加1，同时decimal/=8去掉最后一位。选项C的顺序完全正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_05",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数101.11对应的十进制数是（ ）。",
          "options": [
            "6.5",
            "5.5",
            "5.75",
            "5.25"
          ],
          "answer": 2,
          "explanation": "二进制整数部分101等于1×4+0×2+1×1=5；小数部分.11等于1÷2+1÷4=0.5+0.25=0.75。合起来就是5.75，选C。小数点后第一位的位权是1÷2，之后每往后一位就减半。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_17",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "整数-6的16位补码可用十六进制表示为FFFA。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。-6的16位补码等于65536-6=65530，十六进制是FFFA。也可以从-1=FFFF推：-2是FFFE，-3是FFFD，-4是FFFC，-5是FFFB，-6是FFFA。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_18",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "补码的优点是可以将减法运算转化为加法运算，从而简化计算机的硬件设计。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。补码把负数表示成可直接相加的形式，减法A-B就变成A+(-B)的补码，计算机只需一套加法电路就能完成加减法，简化了硬件设计。A减B就变成A加B的补码，运算完自然得到正确结果。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_23",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码后，输出的结果是8。\n<pre><code>int a=0b1010;\nint b=01100;\nint c=a&b;\ncout<<c<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。0b1010是二进制数10；01100以0开头是八进制数，等于1×512+1×64=576。10&576：10的二进制0000001010与576的二进制1001000000按位与得0，输出0而不是8。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于计算机中的编码，下列说法中正确的是（ ）。",
          "options": [
            "机器数的形式值和真值是一致的",
            "原码就是符号位加上真值",
            "机器数是带符号的",
            "[-1]=[1000 0001]原=[1111 1111]反"
          ],
          "answer": 2,
          "explanation": "A错在补码等机器数的形式值与真值不一致；B错在原码是符号位加绝对值；D错在-1的反码是1111 1110不是1111 1111。C正确：机器数用最高位作符号位表示正负。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "8进制数3703转换成16进制数是（ ）。",
          "options": [
            "7C3",
            "7A3",
            "7B3",
            "7D3"
          ],
          "answer": 0,
          "explanation": "先转十进制：3703(8)=3×512+7×64+0×8+3=1987。再转十六进制：1987=7×256+12×16+3，即十六进制7C3。C代表12。也可先把8进制每3位对应成1位二进制，再转16进制。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_04",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "0.8125变成二进制是（ ）。",
          "options": [
            "0.1110",
            "0.1 1111 1011 1101",
            "0.1 1111 1011 1100",
            "0.1101"
          ],
          "answer": 3,
          "explanation": "0.8125=0.5+0.25+0.0625，对应二进制0.1+0.01+0.001=0.111。再验证0.8125乘以2得1.625，整数位1...逐步得1101，即0.1101，选D。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_16",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "+1和-1的原码进行1+（-1）计算的结果是-2 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。+1的原码是0000 0001，-1的原码是1000 0001，把两个原码直接相加得1000 0010，即-2。这正说明原码做加法会出错，所以计算机改用补码。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_24",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "16进制数AB，表示成2进制数是10101011 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。十六进制每位对应4位二进制：A对应1010，B对应1011，拼起来就是10101011，所以说法正确。按这个规则，任意十六进制数都能转换成二进制数。所以十六进制AB转成二进制就得到10101011。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_25",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "def (十六进制) = 103231 (五进制)。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。def(16)=13×256+14×16+15=3567。而103231(5)=1×3125+0×625+3×125+2×25+3×5+1=3566，两者差1，不相等。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列二进制表示的十进制数值分别是（ ）。[10000011]原=（ ） [10000011]补=（ ）",
          "options": [
            "-125，-3",
            "-3，-125",
            "-3，-3",
            "-125，-125"
          ],
          "answer": 1,
          "explanation": "[10000011]原中首位1是符号位表示负，数值位0000011等于3，所以是-3；[10000011]补最高位1表示负数，值等于-128+3=-125。所以答案是-3和-125。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于计算机中的编码，下列说法中错误的是（ ）。",
          "options": [
            "对于无符号数，原码就是真值",
            "正数的反码是其本身",
            "负数的反码和补码是不一样的",
            "负数的反码，在其原码的基础上, 各个位取反"
          ],
          "answer": 3,
          "explanation": "D错误：负数的反码是符号位不变、其余各数值位取反，而不是所有位都取反。A、B、C的说法都正确：无符号数原码即真值，正数反码是本身，负数补码等于反码加1所以不同。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "16进制数B2025转换成8进制数是（ ）。",
          "options": [
            "2620045",
            "2004526",
            "729125",
            "2420045"
          ],
          "answer": 0,
          "explanation": "先转十进制：B2025(16)=11×65536+2×4096+0+2×16+5=729125。再转八进制得2620045(8)。验证：2×262144+6×32768+2×4096+0+0+4×8+5=524288+196608+8192+32+5=729125。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_04",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "625.625变成二进制是（ ）。",
          "options": [
            "1001110001.101",
            "101.101",
            "101.1001110001",
            "1001110001.1101"
          ],
          "answer": 0,
          "explanation": "整数625=512+64+32+16+1，二进制1001110001；小数0.625=0.5+0.125，二进制.101。合起来是1001110001.101，选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_15",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "工人工作一天，会得到一个金环作为工资报酬，某个工作需要15天完成，一条15个环的金环项链，为了严格执行每天工作结束时，完成对工人工资的结算，最少需要将金环项链剪裁成几段，每段几个金环（ ）。",
          "options": [
            "4段，分别是1、2、4、8",
            "15段，每段1个",
            "6段，分别是3、3、3、3、2、1",
            "9段，分别是2、2、2、2、2、2、1、1、1"
          ],
          "answer": 0,
          "explanation": "把金环剪成1、2、4、8四段，利用发工资和找零，能凑出1到15中任意一天应付的数量（二进制表示），所以最少剪成4段。选A。二进制能把任意数量表示成若干2的幂之和，所以1、2、4、8够用。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_16",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "为了简化计算机基本运算电路，使加减法都只需要通过加法电路实现，也就是让减去一个正数或加上一个负数这样的运算可以用加上一个正数来代替。于是改变负数存储的形式，存储成一种可以直接当成正数来相加的形式，这种形式就是补码。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。这段话描述的正是补码的设计思想：把负数存储成补码形式，减法变成补码相加，从而只需加法电路，简化硬件设计。这是计算机组成原理中的核心设计思想。这样硬件只需加法器就能完成加减法两种运算。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_17",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "使用原码进行的计算，2+(-1) 的结果是 -3",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。+2的原码0000 0010，-1的原码1000 0001，直接相加得1000 0011，即原码-3。这正是原码做加法的缺陷，说明需要补码。这正是原码不能直接做加法的例子，所以计算机用补码。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_18",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "反码计算加减法：加法与减法结果都是正确的，只是解决不了 -0 的问题",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。反码相比原码能正确完成加减法（需处理循环进位），但还存在-0（全1）的问题，补码通过加1消除了-0。所以这个描述正确。正因为反码有-0问题，计算机最终改用补码存储整数。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_19",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "10 进制数 63，在转换成二进制的计算过程中，产生了如下的式子：63÷2=31余1、31÷2=15余1、15÷2=7余1、7÷2=3余1、3÷2=1余1、1÷2=0余1。按照从前往后的顺序，获得 63 的二进制值是 111111。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。63的二进制确实是111111（32+16+8+4+2+1）。本例所有余数都是1，所以无论按什么顺序读，结果都是111111。一般转二进制要按余数从后往前的顺序读，本例恰巧都相同。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_25",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "CCF(十六进制) = 12363(七进制)",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。CCF(16)=12×256+12×16+15=3279。12363(7)=1×2401+2×343+3×49+6×7+3=3279，两边相等。两种进制表达的是同一个数值，所以等式成立。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "Base64 编码将每3字节的输入数据编码为4字节的输出数据。如果输入数据长度不是3的倍数，会用=号填充。在Base64编码中，如果输入字符串的长度为10字节，编码后的字符串长度是多少（ ）。",
          "options": [
            "12 字节",
            "13 字节",
            "14 字节",
            "16 字节"
          ],
          "answer": 3,
          "explanation": "10字节分两组：前9字节按3字节一组可编码成12个字符，剩下1字节不足3字节，也要补成4个字符（带=填充）。12+4=16，所以编码后长度是16字节。Base64按每3字节一组处理，不足3字节时用=号补齐。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "UTF-8 编码规则如下：1字节0xxxxxxx；2字节110xxxxx 10xxxxxx；3字节1110xxxx 10xxxxxx 10xxxxxx；4字节11110xxx 10xxxxxx 10xxxxxx 10xxxxxx。以下哪个字节序列是合法的 UTF-8 编码（ ）。",
          "options": [
            "0xC0 0x80",
            "0xF0 0x90 0x80 0x80",
            "0x80 0x80 0x80",
            "0xFF 0xFE 0xFD"
          ],
          "answer": 1,
          "explanation": "B中0xF0（11110xxx）是4字节引导字节，后跟三个10xxxxxx形式的续字节0x90、0x80、0x80，格式完全符合UTF-8规则。A中0xC0是非法引导码，C以续字节开头，D含无效字节0xFF。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在8位二进制原码表示中，八进制数-5的二进制形式是什么（ ）。",
          "options": [
            "10000101",
            "11111010",
            "11111011",
            "00000101"
          ],
          "answer": 0,
          "explanation": "原码中最高位是符号位，负数为1，其余7位是绝对值5的二进制0000101，所以-5的原码是10000101。11111011是-5的补码，别混淆。原码、反码、补码三种编码各有规则，要仔细区分。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_04",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "十进制数111.111 的二进制表示可以是下面的（ ）。",
          "options": [
            "1101111.0001110001",
            "1101110.1001110001",
            "1101111.1001110001",
            "1101111.0011110001"
          ],
          "answer": 0,
          "explanation": "整数111=64+32+8+4+2+1，二进制1101111。小数0.111用乘2取整：依次得0、0、0、1、1、1、0、0、0、1，即0.0001110001。合起来是1101111.0001110001。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_05",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，补码的主要作用是（ ）。",
          "options": [
            "提高浮点数的精度",
            "简化整数的加减法运算",
            "增加整数的表示范围",
            "优化内存分配"
          ],
          "answer": 1,
          "explanation": "补码让负数也能直接相加，把减法变成加法，从而简化整数加减法运算，硬件只需一套加法电路。它不提高浮点精度，也不扩大表示范围。这是补码被广泛采用的根本原因。这也是整数在计算机中统一用补码存储的原因。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_06",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，一个8位有符号整数（使用补码表示）的范围是（ ）。",
          "options": [
            "-128 到 127",
            "-127 到 128",
            "-256 到 255",
            "0 到 255"
          ],
          "answer": 0,
          "explanation": "8位补码最高位是符号位，能表示的最小值是1000 0000即-128，最大值是0111 1111即127，所以范围是-128到127。记住-128这个特殊值，就能准确判断8位补码的范围。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_07",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，以下代码的输出是什么（ ）。\n<pre><code>int a=-5;\nunsigned int b=a;\ncout<<b;\n</code></pre>",
          "options": [
            "-5",
            "5",
            "4294967291",
            "编译错误"
          ],
          "answer": 2,
          "explanation": "把-5赋给unsigned int时按无符号解释，-5的补码全32位是1111...1011，作为无符号数等于2的32次方减5，即4294967291。同一串二进制位按有符号和无符号读出的数值完全不同。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_08",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序的作用是（ ）。\n<pre><code>int decimal=25;\ncout<<oct<<decimal;\n</code></pre>",
          "options": [
            "将十进制数转换成八进制数",
            "将八进制数转换成十进制数",
            "将二进制数转换成八进制数",
            "将八进制数转换成16进制数"
          ],
          "answer": 0,
          "explanation": "cout<<oct是输出格式控制，表示此后整数按八进制输出。25按八进制显示为31，作用是把十进制数按八进制形式输出，选A。配合hex、dec等控制符，可以随意切换输出的进制形式。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_09",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序是将十进制转十六进制，横线处应该填入的是（ ）。\n<pre><code>int decimal=255;\n____;\nreturn 0;\n</code></pre>",
          "options": [
            "cout << oct << decimal;",
            "cout << decimal << decimal;",
            "cout << hex << decimal;",
            "不能正确执行"
          ],
          "answer": 2,
          "explanation": "cout<<hex让后面的整数按十六进制输出，255会显示为ff。要输出十六进制就用hex，所以填cout<<hex<<decimal。oct表示八进制、dec表示十进制，与hex互相配合。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_21",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "若将一个正整数化为二进制数，在此二进制数中，我们将数字1的个数是偶数的这类二进制数称为A类数，否则就称其为B类数。例如(13)10=(1101)2中1的个数为3则称此数为B类数；(10)10=(1010)2中1的个数为2，称此数为A类数；判断（2025）10化为二进制后，1的个数为偶数个，因此2025为A类数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。2025的二进制是11111101001，其中1一共有8个，是偶数，所以按定义2025属于A类数，判断正确。数1的个数时一定要一位一位认真数清楚，避免漏数。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_23",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "两个13进制的数A和B，在10进制下分别表示10和11。（A+B）13=（18）13，也就是说13进制数A加上13进制数B，和是13进制数18。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。A+B=10+11=21（十进制），21转换为13进制：21=1×13+8，即18。所以(A+B)13=18，说法正确。进制转换时，用除以目标进制取余数的方法即可完成。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_24",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "k进制，逢k进第二位，进百位，进千位；",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。k进制中从低位往高位数，第二位表示k的1次方，百位表示k的2次方，千位表示k的3次方，某一位累加到k就向高位进一。所以k进制也叫位权计数法，低位满k就向高位进一。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_25",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "CCF(十九进制) = 21AC(十三进制)(不区分大小写)",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。CCF(19)=12×361+12×19+15=4575；而21AC(13)=2×2197+1×169+10×13+12=4705。两边不相等，所以等式不成立。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "8位二进制原码能表示的最小整数是：（ ）",
          "options": [
            "-127",
            "-128",
            "-255",
            "-256"
          ],
          "answer": 0,
          "explanation": "原码用最高位表示符号（0正1负），其余7位表示数值的绝对值。7位能表示的最大数值是2^7-1=127，因此8位原码的取值范围是-127到+127，能表示的最小整数就是-127。-128需要8位全用来表示数值再加上符号，原码装不下，只有补码才能表示-128。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "反码表示中，零的表示形式有：",
          "options": [
            "1种",
            "2种",
            "8种",
            "16种"
          ],
          "answer": 1,
          "explanation": "反码中，正数0表示为0000 0000，而负数0表示为1111 1111（把正零的每一位取反），所以0在反码里有两种表示形式。这正是反码的一个缺点，也是它被补码取代的原因之一：补码中0只有0000 0000一种表示，没有二义性。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "补码 1011 1011 对应的真值是( )",
          "options": [
            "-69",
            "-59",
            "-68",
            "-58"
          ],
          "answer": 0,
          "explanation": "补码符号位为1表示这是一个负数。求它的真值可以按两步做：先按位取反得到0100 0100，再加1得到0100 0101，这个数的值是69，所以原补码对应的真值是-69。也可以直接按权展开：-128+32+16+8+2+1=-69，两种方法结果一致。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_05",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数 1101.101 对应的十进制数是( )",
          "options": [
            "13.625",
            "12.75",
            "11.875",
            "14.5"
          ],
          "answer": 0,
          "explanation": "把二进制数按权展开再求和。整数部分1101从高位到低位是8、4、0、1，相加得13；小数部分0.101表示2^-1、0、2^-3，即0.5加0.125等于0.625。把整数部分和小数部分合起来，1101.101就等于13.625。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_06",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "补码加法中，若符号位无进位而次高位有进位，则说明（）",
          "options": [
            "结果正确",
            "发生上溢",
            "发生下溢",
            "结果符号位错误"
          ],
          "answer": 1,
          "explanation": "补码加法判断溢出用“符号位进位异或次高位进位”的方法：两者不同就是溢出。本题符号位没有进位，说明结果符号看起来正确；但次高位有进位，说明两个加数都比较大，结果超出了正数能表示的最大范围，因此发生上溢。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_07",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "八进制数 35.6 对应的十进制数是( )",
          "options": [
            "29.75",
            "28.5",
            "27.625",
            "30.25"
          ],
          "answer": 0,
          "explanation": "八进制转十进制按权展开：整数部分3×8^1+5×8^0=24+5=29；小数部分6×8^-1=6÷8=0.75。两部分相加，35.6(8)=29.75。注意八进制只有0到7这些数字，6在小数部分表示八分之六。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_22",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，char 类型的取值范围总是 -128 到 127。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "char是否有符号由编译器实现决定。如果char是无符号类型，取值范围是0到255；只有明确写成signed char才是-128到127。所以“char的范围总是-128到127”的说法是错误的。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "请将二进制数 (1101.101)2 转换为等值的10进制数（ ）。",
          "options": [
            "14.25",
            "13.625",
            "13.5",
            "14.5"
          ],
          "answer": 1,
          "explanation": "把二进制数按权展开求和。整数部分1101从高到低对应8、4、0、1，相加得13；小数部分0.101对应2^-1、2^-2、2^-3即0.5、0、0.125，相加得0.625。整数和小数合并，1101.101等于13.625。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_08",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个特定的计算机系统中，假如 unsigned int 类型需要占用2个字节的存储空间（每个字节有8位），则 unsigned int 可以表示的数据范围是（ ）",
          "options": [
            "0 ~ 65535",
            "0 ~ 65536",
            "-65536 ~ 65535",
            "0 ~ 32767"
          ],
          "answer": 0,
          "explanation": "2个字节共16位。unsigned int是无符号类型，没有符号位，所有16位都用来表示数值。最小值为全0，即0；最大值为全1，即2^16-1=65535。所以取值范围是0到65535。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_24",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "给定一个正整数 a ，当需要计算 -a 的补码时，有这样一个计算技巧：将 a 的二进制形式从右往左扫描，遇到第一个 1 之后，将找到的第一个 1 左边的所有位都取反，能得到 -a 的补码。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "求-a的补码技巧：把a的二进制从右往左扫，找到第一个1，把它左边的所有位全部取反，右边保持不变。例如a=5(0101)，最低位就是第一个1，左边取反得1011，这正是-5的补码，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "如果字符变量 _1 的值是字符 1 ，那么 (int)_1 的值是？（ ）。",
          "options": [
            "1",
            "-1",
            "49",
            "+1 或者 -1"
          ],
          "answer": 2,
          "explanation": "字符'1'是字符数字，不是数值1。计算机里字符都按ASCII码存储，字符'1'的ASCII码是49。把字符'1'强制转换成int类型，得到的是它的ASCII码49，而不是1，所以选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_05",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "8 位二进制下，十进制数 -15 的补码是（ ）。",
          "options": [
            "11110000",
            "10001111",
            "10010000",
            "11110001"
          ],
          "answer": 3,
          "explanation": "求-15的补码：先把15写成8位二进制0000 1111，再按位取反得到1111 0000，最后加1得到1111 0001。这就是-15的8位补码。D选项11110001正确。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_06",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "三进制数 (2102)3 转换成十进制是：（ ）。",
          "options": [
            "63",
            "65",
            "67",
            "69"
          ],
          "answer": 1,
          "explanation": "把三进制数按权展开：最高位2在3^3位，所以2×27=54；第二位1在3^2位，1×9=9；第三位0在3^1位；最低位2在3^0位，2×1=2。54+9+0+2=65，所以(2102)3等于十进制65。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_07",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数 10110101 是某数的 8 位补码，该数的十进制是（ ）。",
          "options": [
            "-73",
            "-75",
            "-77",
            "75"
          ],
          "answer": 1,
          "explanation": "补码10110101的最高位是1，说明是负数。求真值：按位取反得到0100 1010，再加1得到0100 1011，这个数是75，所以原补码对应的真值是-75。选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_21",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "已知大写字符 A 的ASCII编码的十六进制表示为 0x41 ，计算字符 m 的ASCII编码的八进制表示为 155（八进制）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "'m'的ASCII码是109（十进制）。把109转换成八进制：109除以8商13余5，13除以8商1余5，1除以8商0余1，从下往上读得到155（八进制）。题干说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_23",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "由于在 0~255 范围内，char 类型和 int 类型可以互换，因此在这里 x 和 y 相等。char x='1'; int y=1;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "char x='1'存放的是字符'1'的ASCII码49，而int y=1是数值1，两者数值不相等。char在0到255范围内可以转换为int，但那是把ASCII码转换，不是把字符'1'变成数字1，所以x和y不相等。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_26",
          "kp": "kp3_01",
          "type": "coding",
          "difficulty": 1,
          "question": "二进制回文串：对一个正整数，将其转换为不含前导零的二进制表示，如果这个二进制序列从左向右读与从右向左读完全相同，则称该数为二进制回文数。给定一个正整数n，计算在1到n范围内二进制回文数的数量。输入：一行一个正整数n。输出：一行一个数，表示1到n范围内二进制回文数的数量。",
          "options": [],
          "answer": null,
          "explanation": "思路：从1到n逐个枚举，对每个数反复除以2并把余数存入数组（得到二进制各位），再检查数组是否回文，是则答案加1。枚举范围小，直接模拟即可。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n, a[50] = {0}, ans = 0;\n    cin >> n;\n    for(int i = 1; i <= n; i++) {\n        int t = i, pos = 0;\n        while(t) {\n            a[pos++] = t % 2;\n            t /= 2;\n        }\n        bool ok = true;\n        for(int i = 0; i < pos; i++)\n            if(a[i] != a[pos - i - 1]) {\n                ok = false;\n                break;\n            }\n        ans += ok;\n    }\n    cout << ans;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "15",
              "expectedOutput": "6"
            }
          ]
        },
        {
          "id": "l3_202606_01",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于计算机的数据编码，下面说法正确的是（  ）。",
          "options": [
            "机器数 1000 1101B 的真值可能是 -13（如果它是原码）或 141（如果它是无符号数）等数，这取决于我们如何解释它。",
            "计算机中，所有数据最终都以二进制、八进制、十六进制的形式存储和运算。",
            "字节（Byte）是计算机中最小的数据单位。位（bit）是计算机中最小的存储单位。",
            "计算机中，1k 字节是 1000 字节的意思。"
          ],
          "answer": 0,
          "explanation": "同一串二进制数按不同规则解释会得到不同的值：1000 1101作原码时最高位1表示负数，真值为-(0001101)=-13；作无符号数时是128+8+4+1=141。A的说法正确。B错在计算机只用二进制存储，C错在最小数据单位是位，D错在1K字节是1024字节。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_02",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "计算机厂商为了计算方便，一般采用 1000 进制。如果我们买的厂商标注的是 1 TB 的硬盘，它实际的存储容量是（ ）。",
          "options": [
            "1000×1000×1000×1000÷1024÷1024÷1024 b = 931 Gb",
            "1000×1000×1000×1000÷1024÷1024÷1024 B = 931 GB",
            "1024×1024×1024×1024÷1000÷1000÷1024 B = 1049 GB",
            "1000×1024×1024×1024÷1024÷1024÷1024 b = 977 Gb"
          ],
          "answer": 1,
          "explanation": "厂商按1000进制标称，1TB=10^12字节。换算成计算机的1024进制：10^12÷1024÷1024÷1024≈931.3，所以实际约931GB。B选项正确地用字节B计算得到931GB，选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_03",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "低4位、高4位压缩技术：一个字节为8位，分为高4位和低4位。数据仅用低4位（值0x0到0xF）时高4位全为0，可将两个相邻的4位值合并为一个字节。四个数据 0x1、0x2、0x3、0x4 采用上述压缩技术压缩以后是（ ）。",
          "options": [
            "12D、34D",
            "12Q、34Q",
            "12H、34H",
            "00010011B、00110101B"
          ],
          "answer": 2,
          "explanation": "把两个相邻的4位二进制数合并成一个字节：0x1和0x2合并，高4位0001、低4位0010，组成0001 0010即0x12；0x3和0x4合并，高4位0011、低4位0100，组成0011 0100即0x34。用十六进制表示为12H、34H，选C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_04",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于计算机编码中反码和补码，下面说法错误的是（  ）。",
          "options": [
            "负数的补码，一个快速方法是从右往左扫描正数的二进制形式，遇到第一个 1 之后，左边的所有位都取反。",
            "对于一个 n 位的二进制数：最大表示范围：[-(2^(n-1))-1, +(2^(n-1)-1)]。",
            "反码减法可以统一为加法。符号位可以直接参与运算。",
            "反码表示中，0 的表示不唯一：0000 0000B 和 1111 1111B 。"
          ],
          "answer": 1,
          "explanation": "n位补码能表示的范围是[-2^(n-1), 2^(n-1)-1]，最小值-2^(n-1)，最大值2^(n-1)-1。B中写成的[-(2^(n-1))-1, 2^(n-1)-1]，把最小值多减了1，是错误的。其余三个说法都正确，所以选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_08",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "计算机中的 2 KB 等于多少 bit（  ）。",
          "options": [
            "16384",
            "20000",
            "2000",
            "2048"
          ],
          "answer": 0,
          "explanation": "1KB等于1024字节，1字节等于8位，所以2KB=2×1024×8=16384位。注意不要按1000进制算成2×1000×8=16000，计算机存储采用1024进制，所以选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_10",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "关于计算机中的二进制编码表示，下列说法错误的是（  ）。",
          "options": [
            "原码是最直观的一种有符号数表示方法。最高位为符号位：0 表示正数，1 表示负数，其余位为数值位（真值的绝对值）。",
            "补码完美解决了原码和反码的缺陷，是现代计算机中表示有符号整数的标准方式。正数的补码与其原码、反码相同；负数的补码是将其对应正数的原码按位取反再加 1。",
            "计算补码的一个更快的技巧：从右往左扫描正数的二进制形式，遇到第一个 1 之后，左边的所有位都取反。",
            "对于一个 n 位的二进制数，补码最大表示范围为 [-2^(n-1), +2^(n-1)]。"
          ],
          "answer": 3,
          "explanation": "n位补码的范围是[-2^(n-1), 2^(n-1)-1]，正数最大值是2^(n-1)-1。D写成+2^(n-1)等于把最大值多加了1，是错误的。A、B、C分别正确描述原码、补码定义和补码快速算法，所以选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_15",
          "kp": "kp3_01",
          "type": "choice",
          "difficulty": 1,
          "question": "判断一个字符串可能是二进制、八进制、十进制、十六进制中的哪些：对每个字符串找到其最大字符max，输出4个数（1可能、0不可能），分别表示能否作为二进制、八进制、十进制、十六进制。下面程序横线处可以满足这个要求的是（  ）。",
          "options": [
            "cout << (max >= '1') << \" \" << (max >= '7') << \" \" << (max >= '9') << \" \" << (max >= 'F') << endl;",
            "cout << (max <= '1') << \" \" << (max <= '7') << \" \" << (max <= '9') << \" \" << (max <= 'F') << endl;",
            "cout << (max = '1') << \" \" << (max = '7') << \" \" << (max = '9') << \" \" << (max = 'F') << endl;",
            "cout << (max < '1') << \" \" << (max < '7') << \" \" << (max < '9') << \" \" << (max < 'F') << endl;"
          ],
          "answer": 1,
          "explanation": "一个字符串能表示哪种进制，取决于它的最大字符。最大字符不超过'1'可作二进制、不超过'7'可作八进制、不超过'9'可作十进制、不超过'F'可作十六进制，都用<=判断，所以选B。A方向反了，C是赋值不是比较，D少了等于的情况。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_16",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "反码运算时，产生的进位需要循环进位，即最高位产生的进位要加回到结果的最低位。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "反码加法中，如果最高位（符号位）相加产生了进位，要把这个进位循环加回到结果的最低位，这叫循环进位或端回进位。这是因为反码中+0和-0要统一处理，所以题干说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_17",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "-11 的补码的一种计算方式是从右往左扫描正数的二进制形式，遇到第一个 1 之后，左边的所有位都取反。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "11的二进制是1011，从右往左扫描，第一个1是最低位（第0位），把这个1左边的所有位取反：最高位1变0、第3位... 得到0101，这正是-11的补码。求负数补码的这个技巧是正确的。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_18",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一个 8 位的二进制数补码，最大的表示范围是从 -127 到 +127。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "8位补码能表示的范围是-128到127。其中-128的补码是1000 0000，这是补码独有的最小负数。题干写成-127到+127，漏掉了-128，范围不对，所以说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_21",
          "kp": "kp3_01",
          "type": "judge",
          "difficulty": 1,
          "question": "十六进制数 CCF 对应的二进制数、八进制数、十进制数分别是：110011001111、6317、3269。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "CCF转二进制：C是1100、C是1100、F是1111，合起来110011001111正确；转八进制：从右往左每3位一组011、001、100、110得6317正确；转十进制：12×256+12×16+15=3279，不是3269。十进制写错了，所以说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp3_02": {
      "title": "位运算",
      "questions": [
        {
          "id": "l3_202306_04",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言中的运算符？（ ）",
          "options": [
            "A. &",
            "B. &&",
            "C. *",
            "D. **"
          ],
          "answer": 3,
          "explanation": "&是按位与、&&是逻辑与、*是乘法（也可作指针运算符），这些在C++中都有定义；**看起来像幂运算的记号，但C++并没有这个运算符，写出来会编译报错，所以本题只能选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_10",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "一个int类型的值，做以下哪个操作，一定会变回原来的值？（ ）",
          "options": [
            "A. 左移3位，再右移3位。",
            "B. 右移3位，再左移3位。",
            "C. 按位或7，再按位与-8。",
            "D. 按位异或7，再按位异或7。"
          ],
          "answer": 3,
          "explanation": "按位异或的逆运算就是它本身：同一个数与7连续做两次异或，结果会还原成原来的数，所以D一定变回原值。A、B可能因移位越界而丢位，C会改变高位，均不符合要求，选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_11",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式能正确判断\"a等于b\"的是（ ）。",
          "options": [
            "A. ((a / b) == 1)",
            "B. ((a & b) == a)",
            "C. ((a ^ b) == 0)",
            "D. ((a | b) == b)"
          ],
          "answer": 2,
          "explanation": "异或是逐位运算，只有当a和b的每一位都相同时结果才为0，因此(a^b)==0等价于a等于b。A中5/3=1但5不等于3，B中5&15=5，D中5|15=15，都可举出反例，所以选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_12",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为int类型的变量，下列哪个表达式可以正确求出满足\"小于等于a且是4的倍数\"的整数中最大的？（ ）",
          "options": [
            "A. (a & (~3))",
            "B. ((a << 2) >> 2)",
            "C. (a ^ 3)",
            "D. ((a - 1) | 3) + 1"
          ],
          "answer": 0,
          "explanation": "4的倍数的二进制末两位一定是00。~3把低两位变成0、其余位保持不变，a&(~3)把a的末两位清零，结果既不超过a又是4的倍数，而且是满足条件的最大者，故选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_13",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是\"24 12\"。\n<pre><code>int a=12,b=24;\n____;\na=a^b;\nb=a^b;\ncout<<a<<\" \"<<b<<endl;\n</code></pre>",
          "options": [
            "A. a = a ^ b",
            "B. b = a ^ b",
            "C. a = a + b",
            "D. b = a + b"
          ],
          "answer": 1,
          "explanation": "填B后先执行b=a^b使b=12^24，再执行a=a^b=12^(12^24)=24，最后执行b=a^b=24^(12^24)=12。三句异或恰好把a、b完成交换，输出\"24 12\"，所以选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_15",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出不是\"31\"。\n<pre><code>int array[5]={1,2,4,8,16};\nint res=0;\nfor(i=0;i<5;i++)\n    ____;\ncout<<res<<endl;\n</code></pre>",
          "options": [
            "A. res = res + array[i]",
            "B. res = res & array[i]",
            "C. res = res | array[i]",
            "D. res = res ^ array[i]"
          ],
          "answer": 1,
          "explanation": "1、2、4、8、16这五个数相加、按位或、按位异或的结果都是31；只有按位与运算从1&2=0开始一直保持为0，得不到31。可见按位与与算术加法的结果截然不同，所以横线处应填B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_25",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为int类型的变量，且表达式((a | 3) == 3)的值为true，则说明a在从0到3之间（可能为0、可能为3）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a|3==3说明a的高位全部为0，只有最低两位可能为1，因此a只可能是0、1、2、3四个数，确实位于0到3之间（含两端），所以题干说法正确。所以该表达式蕴含a的取值范围是0到3。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_04",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言中的运算符？（ ）",
          "options": [
            "A. ~",
            "B. ~~",
            "C. <",
            "D. <<"
          ],
          "answer": 1,
          "explanation": "~是按位取反、<是比较小于、<<是左移运算符，在C++中都存在；~~是两个波浪号连写，C++并没有这种运算符，写出来会编译报错。识别这种不存在的写法是本题的关键，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_10",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a是int类型的变量，下列哪个表达式的值一定为true？（ ）",
          "options": [
            "A. a + 1000 - 1000 == a",
            "B. a * 2 / 2 == a",
            "C. (a & 1) == 1",
            "D. (a | 1) == a + 1"
          ],
          "answer": 0,
          "explanation": "A先加1000再减1000，值不变，恒成立；B中a*2可能溢出导致结果改变，C只有a是奇数时才成立，D只有a是偶数时才成立。遇到\"一定\"字样要举反例验证，所以本题选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_11",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式不能正确判断\"a等于b\"的是（ ）。",
          "options": [
            "A. ((a >= b) && (a <= b))",
            "B. ((a >> 1) == (b >> 1))",
            "C. ((a + b) == (a + a))",
            "D. ((a ^ b) == 0)"
          ],
          "answer": 1,
          "explanation": "B选项把a、b都右移一位，会丢掉各自的最低位，例如a=4、b=5右移一位后都等于2，表达式为真但两数并不相等。本题问的是\"不能正确判断\"，属于逆向设问，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_13",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是\"20 10\"。\n<pre><code>int a=10,b=20;\na=(a<<8)|b;\n____;\ncout<<a<<\" \"<<b<<endl;\n</code></pre>",
          "options": [
            "A. a = a >> 8; b = a & 0xff",
            "B. b = a >> 8; a = a & 0xff;",
            "C. a = b; b = a & 0xff;",
            "D. b = a; a = b;"
          ],
          "answer": 1,
          "explanation": "a=(10<<8)|20=0x0A14。填B后执行b=a>>8得到0x0A即10，再执行a=a&0xff得到0x14即20，从而输出\"20 10\"，实现了用高低8位交换两个数，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_17",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，位运算符也有类似\"先乘除、后加减\"的优先级规则。因此，使用时应注意合理使用括号。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "位运算符同样有优先级高低之分，与算术运算符混用时容易产生歧义，例如不加括号时(a|b)与a|b的含义可能被改变，因此应尽量使用括号明确运算顺序，题干说法正确。因此应养成加括号的好习惯，避免产生歧义。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_20",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，所有int类型的值，经过若干次左移操作（<<）后，它们的值总会变为0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "左移运算低位补0，高位不断被移出丢弃，连续左移足够多次后，所有有效位都被移出，数值必然变为0。这说明移位运算的本质是按位填充0，所以题干说法正确。这也是移位运算的一个基本性质。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_25",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为int类型的变量，且表达式((a & 1) == 0)的值为true，则说明a是偶数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "偶数的二进制最低位是0，与1按位与得0；奇数的二进制最低位是1，与1按位与得1，所以(a&1)==0说明a的最低位是0，即a是偶数。这是用位运算判断奇偶的常用方法，题干正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_16",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++代码cout<<(5&&2)<<endl;后将输出1。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "5和2都是非0的数，逻辑与只要两个操作数都非零，结果就为真，即true，cout输出布尔值时显示为1，所以题干说将输出1是正确的。布尔值true输出时显示为1，false显示为0。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_18",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++代码cout<<(5||2);后将输出1。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "5和2都是非0的数，逻辑或只要有一个操作数非零，结果就为真，即true，cout输出布尔值时显示为1，所以题干说将输出1是正确的。布尔值true输出时显示为1，false显示为0。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202403_03",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>cout << (3|16) << endl;\n</code></pre>",
          "options": [
            "3",
            "16",
            "19",
            "48"
          ],
          "answer": 2,
          "explanation": "按位或|把两个数二进制对应位逐位做或运算。3的二进制是00011，16的二进制是10000，相或得10011，正好等于十进制19，所以输出19。或运算的规则是：只要某一位有一个1结果就是1。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_04",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "定义整数int x=-5，则执行C++代码cout << (x == (x<<1>>1)) 输出是（ ）。",
          "options": [
            "0",
            "1",
            "-5",
            "5"
          ],
          "answer": 1,
          "explanation": "x=-5，x<<1得-10，-10>>1算术右移得-5，两边相等，所以比较结果(x==-5)为真，cout输出1。左移一位相当于乘2，右移一位相当于除以2（负数用算术右移），于是x<<1>>1又回到x。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_13",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "定义整型变量int a=3, b=16，则a|b的值和a+b的关系是（ ）。",
          "options": [
            "大于",
            "等于",
            "小于",
            "等于或小于"
          ],
          "answer": 1,
          "explanation": "3的二进制是00011，16的二进制是10000，按位或得10011即19。而a+b=3+16=19，所以a|b等于a+b。这是因为3和16的二进制位互不重叠，或运算结果恰好等于相加。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_17",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "对整型变量int a = 3，执行C++代码a<<2 将把2输出到a中。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。a<<2是把a的二进制左移2位，3<<2=12。而且a<<2只是一个表达式，并不会把结果赋值回a，更不是把2输出到a中，说法完全不对。要让结果真正存入a，必须写a=a<<2或a<<=2。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_19",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "一个int类型变量a，执行操作(a<<2>>2)后的值一定是a。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。整数在计算机中用补码存储，左移2位再算术右移2位会恢复原值，例如-5<<2=-20，-20>>2=-5。不过严格来说若a很大使左移发生溢出，结果可能不再是a，考试按通常情况判对。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_07",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码的输出结果是（ ）。\n<pre><code>int a = 12;\nint result = a >> 2;\ncout << result << endl;\n</code></pre>",
          "options": [
            "12",
            "6",
            "3",
            "1"
          ],
          "answer": 2,
          "explanation": ">>是右移运算符。12的二进制是1100，右移2位变成11，即十进制3，所以result=3，输出3。右移n位相当于整除2的n次方（对正数）。对正数来说右移就是去掉低位，等价于整除2的n次方。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_08",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码的输出结果是（ ）。\n<pre><code>int a=5;\nint b=10;\na=a^b;\nb=a^b;\na=a^b;\ncout<<a<<\", \"<<b<<endl;\n</code></pre>",
          "options": [
            "a = 5, b = 10",
            "a = 5, b = 5",
            "a = 10, b = 5",
            "a = 10, b = 10"
          ],
          "answer": 2,
          "explanation": "这是用异或交换两个变量的值。连续三次异或后a和b的值互换：最终a=10，b=5。原理是x^y^y=x，异或同一个数两次会还原，所以输出a=10, b=5。三次异或后a、b内容对调，这就是异或交换的原理。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_22",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果为int类型的变量，且表达式((a | 3) == 3) 的值为true，则说明在从0到3之间（可能为0、可能为3）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。3的二进制是11，a|3==3说明a的二进制位是11的子集，即a只能是0、1、2、3（00、01、10、11），确实在0到3之间。因为或运算只会把位变成1，不会把1变成0。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_05",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面说法正确的是（ ）。",
          "options": [
            "（22&01）==（22&&01）成立",
            "(23|11)==30",
            "(23|10)==31",
            "(23|01)==31"
          ],
          "answer": 2,
          "explanation": "C中23的二进制10111与10的二进制01010按位或得11111即31，成立。A中22&1=0而22&&1=1不相等；B中23|11=31；D中23|1=23，都不成立。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_06",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列说法正确的是（ ）。",
          "options": [
            "2>>1和1>>1的值是一样的",
            "(2>>2)和(1>>1)的值是一样的",
            "(11^00)和(1^0)的值是一样的",
            "(~0的输出值是1)"
          ],
          "answer": 1,
          "explanation": "2>>2=0，1>>1=0，两者相等，B正确。A中2>>1=1而1>>1=0；C中11^0=11而1^0=1；D中~0等于-1而不是1。把每个选项都按位计算一遍，就能找出正确的一项。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_07",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码实现的是（ ）。\n<pre><code>void Swap(int &a, int &b)\n{\n    if(a!=b)\n    {\n        a^=b;\n        b^=a;\n        a^=b;\n    }\n}\n</code></pre>",
          "options": [
            "a和b的异或",
            "a和b的同或",
            "a和b的值交换",
            "a和b的高低位互换"
          ],
          "answer": 2,
          "explanation": "连续三次异或完成交换：a^=b后b^=a再a^=b，最终a、b互换。因为x^y^y=x，这是经典的异或交换两个变量的方法，实现的是值交换。异或交换法不需要借助第三个临时变量。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_08",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a&~1运算实现的是（ ）。",
          "options": [
            "使a的最低位为1",
            "使a的最高位为1",
            "使a的最低位为0",
            "使a的最高位为0"
          ],
          "answer": 2,
          "explanation": "~1把所有位取反后最低位是0其余位是1，a&~1会把a的最低位强制为0而其他位保持不变，所以作用是使a的最低位为0。这是常用的把某一位清零的位运算技巧。例如在对齐或取整的场合经常用到把最低位清零的操作。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_09",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a=1010 1110, a<<2,下面关于这个说法正确的是（ ）。",
          "options": [
            "a的值变为1011 1000",
            "a的值变为1011 1010",
            "a的值变为0101 1101",
            "a的值变为0101 1100"
          ],
          "answer": 0,
          "explanation": "左移2位时高位丢弃低位补0：1010 1110左移2位，前两位10被移出，末尾补两个0，得1011 1000，所以选A。在不溢出的前提下，左移n位相当于乘2的n次方。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_10",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序中，result和result2输出分别是( )。\n<pre><code>long a=123;\nint b=1;\nlong result=a&b;\nlong a2=-123;\nunsigned int b2=-1;\nlong result2=a2&b2;\n</code></pre>",
          "options": [
            "123 -1",
            "123 -123",
            "1 -1",
            "1 -123"
          ],
          "answer": 3,
          "explanation": "result=123&1=1。result2按题意把b2当作全1的-1，-123&-1=-123，故输出1和-123。注意：严格按C++规则，64位下unsigned int提升为long后结果是4294967173，答案以题意为准。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_17",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "~1 的输出值是-2 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。~是按位取反，1的二进制...0001取反得...1110，在补码表示下正好是-2，所以输出-2。因为~1的最高位变成1，在补码中表示负数，所以是-2。这是按位取反在补码表示下的必然结果。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_18",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "~1 = 1111 1110 。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。在8位表示下，1是0000 0001，按位取反每一位都翻转，得1111 1110，所以等式成立。按位取反就是0变1、1变0，每一位都翻转。这个结果正好就是-2在8位补码里的形式。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_19",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "取X的低四位，可以用Y = 0000 1111，用X&Y获取X的低四位。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。0000 1111的高四位是0会把X的高四位清零，低四位是1会保留X的低四位，所以X&0000 1111正好取出X的低四位。用掩码配合按位与来取指定位，是位运算的基本方法。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_05",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面逻辑运算中，正确的是（ ）。",
          "options": [
            "5&&3==0",
            "5|3==8",
            "5||3==11",
            "5&3==0001"
          ],
          "answer": 3,
          "explanation": "5&3：5的二进制101与3的二进制011按位与得001，即0001，所以D正确。A中5&&3=1不等于0；B中5|3=7；C中5||3=1不等于11。把每个选项都按位运算一遍，答案就清楚了。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_06",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "补码1111 1101进行运算1111 1101>>1以后得到的结果是（ ）。",
          "options": [
            "1111 1100",
            "-2",
            "1111 1101",
            "1111 1010"
          ],
          "answer": 1,
          "explanation": "1111 1101作为补码等于-3。算术右移1位相当于除以2向下取整，-3>>1=-2，所以结果是-2，选B。负数右移采用的是算术移位，空出的高位补符号位。这道题考的就是对负数算术右移的理解。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_08",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a|10（a与10都是10进制，且二进制表示最高位为1）运算的结果是（ ）。",
          "options": [
            "使a的二进制表示从右往左的第二位为1",
            "使a的二进制表示从右往左的第一位为0",
            "使a的二进制表示从右往左第二位为0",
            "使a的二进制表示最高位为0"
          ],
          "answer": 0,
          "explanation": "10的二进制是1010，其中从右往左第二位是1。a|10中这个1会强制把a从右往左第二位设为1，其他位不变，所以选A。按位或的作用是强制把某些位置成1。所以a从右往左第二位一定被置成1，故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_20",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "下列程序输出的是 A。\n<pre><code>char x=65;\nx=x&00001111;\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。65的二进制1000001与00001111按位与得1，x变成1，输出的是ASCII码为1的控制字符而不是A。按位与的规则是：对应位都是1结果才是1。所以最终输出的是ASCII码为1的控制字符，而不是A。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_10",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的说法正确的是什么（ ）。\n<pre><code>int a=0b1101;\nint b=0b1011;\ncout<<(a^b);\n</code></pre>",
          "options": [
            "进行的是整体异或运算",
            "进行的是按位同或运算",
            "进行的是按位与运算",
            "进行的是按位异或运算"
          ],
          "answer": 3,
          "explanation": "^是按位异或运算符，把a和b的每一位逐位做异或：1101^1011=0110。选项说的是运算类型，实际进行的正是按位异或运算，选D。异或的规则是：相同为0，不同为1。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_17",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "这段程序进行的是判断一个从键盘输入的字符的ASCII是否是奇数，若是，输出YES，否则，输出NO。\n<pre><code>char x;\nscanf(\"%c\",&x);\ncout<<(x&1?\"YES\":\"NO\");\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。x&1取x ASCII码的最低位，最低位为1表示奇数，为0表示偶数。条件为真输出YES（奇数），否则输出NO，描述正确。判断一个数奇偶只需看它的最低位，因为奇数末位必为1。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_26",
          "kp": "kp3_02",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：小A有一个整数x，他想找到最小的正整数i使得(x & i) + (x | i)等于2025，其中&是按位与、|是按位或。如果不存在则输出-1。输入：一行一个整数x。输出：一行一个整数。样例输入：1025，样例输出：1000。",
          "options": [],
          "answer": null,
          "explanation": "思路：x不超过2025，直接枚举i从1到2025，对每个i计算(x&i)+(x|i)，一旦等于2025就输出i并结束；全部试完都没有就输出-1。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nint x;\nint main(){\n    scanf(\"%d\",&x);\n    for(int i=1;i<=2025;i++)\n        if((x&i)+(x|i)==2025){\n            printf(\"%d\\n\",i);\n            return 0;\n        }\n    printf(\"-1\\n\");\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "1025",
              "expectedOutput": "1000"
            }
          ]
        },
        {
          "id": "l3_202506_04",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "若X的8位补码为 0000 1010，则 X/2 的补码是（  ）。",
          "options": [
            "0000 0101",
            "1000 0101",
            "0000 0101 或 1000 0101",
            "算术右移后结果取决于符号位"
          ],
          "answer": 0,
          "explanation": "0000 1010是正数10的补码，X=10，那么X/2=5。对正数做算术右移一位，最高位补0，正好相当于除以2：0000 1010右移一位得到0000 0101，也就是5的补码。D项说法本身也对，但本题问的是具体的补码结果，应选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_08",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "二进制数 1010 | 1100 的结果是（ ）",
          "options": [
            "1000",
            "1110",
            "1010",
            "1100"
          ],
          "answer": 1,
          "explanation": "按位或的规则是：两个位只要有一个是1，结果就是1；只有两个都是0结果才是0。对1010和1100从高位到低位逐位做或运算：1|1=1、0|1=1、1|0=1、0|0=0，得到结果1110。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_09",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个位运算可以交换两个变量的值（无需临时变量）( )",
          "options": [
            "a = a ^ b; b = a ^ b; a = a ^ b;",
            "a = a & b; b = a | b; a = a & b;",
            "a = a | b; b = a ^ b; a = a ^ b;",
            "a = ~a; b = ~b; a = ~a;"
          ],
          "answer": 0,
          "explanation": "异或交换法是经典技巧：因为a^a=0、a^0=a，而且异或满足交换律和结合律，所以先b=a^b把b变成“异或包”，再a=a^b取出原b，最后b=a^b取出原a，三步之后a、b的值互换，全程不需要临时变量。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_18",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "x 是浮点数，(x >> 1) 等价于 x / 2",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "移位运算只能用于整型操作数，浮点数不能进行右移，所以x>>1这行代码本身就非法。即使能编译，右移是整除（向下取整），而x/2对负数会向零取整，两者含义也不相同，因此说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_21",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "(x & 1) == 0 可以判断整数 x 是否为偶数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二进制中最低位是0表示这个数是偶数，最低位是1表示是奇数。x&1只保留最低位，如果结果是0，说明x的最低位是0，也就是x能被2整除，x是偶数，所以这个判断方法是正确的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_26",
          "kp": "kp3_02",
          "type": "coding",
          "difficulty": 1,
          "question": "奇偶校验：数据在传输过程中可能出错，接收方收到数据后需要校验。给定n个非负整数，统计它们在二进制下1的总个数。若1的总个数为奇数，校验码为1，否则为0。请输出1的总个数和校验码（0或1）。输入：第一行一个正整数n；第二行n个非负整数。输出：一行两个整数，第一个是二进制下1的总数量，第二个是校验码。",
          "options": [],
          "answer": null,
          "explanation": "思路：对每个数反复用c&1取出最低位累加到总数，再用c>>=1右移去掉已处理的最低位，直到c为0。所有数统计完后，总数对2取余（v&1）即得校验码。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nint n, v;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        int c;\n        scanf(\"%d\", &c);\n        while (c) {\n            v += c & 1;\n            c >>= 1;\n        }\n    }\n    printf(\"%d %d\\n\", v, v & 1);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n71 69 83 80",
              "expectedOutput": "13 1"
            },
            {
              "input": "6\n1 2 4 8 16 32",
              "expectedOutput": "6 0"
            }
          ]
        },
        {
          "id": "l3_202512_10",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a & b | (c ^ d) ，其中 a = 3, b = 7, c = 15, d = 4 ，计算结果是（ ）",
          "options": [
            "十进制11",
            "二进制11",
            "八进制11",
            "十六进制11"
          ],
          "answer": 0,
          "explanation": "按位与&、按位异或^的优先级高于按位或|。先算3&7：0011&0111=0011即3；再算15^4：1111^0100=1011即11；最后算3|11：0011|1011=1011即11。结果是十进制的11，选A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_20",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "位运算符 & 、| 、^ 、~ 的优先级高于算术运算符 + 、- 、* 、/ 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中运算符优先级从高到低大致是：算术运算符、移位运算符、关系运算符、位运算、逻辑运算、赋值运算。位运算符&、|、^的优先级低于算术运算符+、-、*、/，所以题干说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_02",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a,b是整型变量，各自有互不相同的初始值。下列程序实现了什么效果（ ）。a=a^b; b=a^b; a=a^b;",
          "options": [
            "a,b 的值从始至终都没有改变。",
            "a,b 的值实现了互换。",
            "a,b 的值互换了以后，又还回去了，相当于没有变化。",
            "a,b 的值最后和原值不一样，没有任何意义。"
          ],
          "answer": 1,
          "explanation": "这是异或交换法：利用a^a=0和a^0=a，以及异或运算满足交换律和结合律。第一步a=a^b把“异或包”存进a；第二步b=a^b取出原a；第三步a=a^b取出原b。最终a、b两数互换。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_08",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知 unsigned char c = 0x0F;（十六进制0F=二进制00001111），执行 c = c << 3; 后，c 的十进制值是：（ ）。",
          "options": [
            "64",
            "72",
            "80",
            "120"
          ],
          "answer": 3,
          "explanation": "0000 1111左移3位，低位移出的位置补0，得到0111 1000。这个二进制数按权展开是64+32+16+8=120。也可以理解为左移3位相当于乘以2^3=8，15×8=120，所以结果是120。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_09",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "补码的情况下，关于按位取反运算，用笔计算的情况下，以下说法错误的是：（ ）。",
          "options": [
            "~5 的结果是 -6（int 类型，32 位）",
            "~0 的结果是 0（int 类型，32 位）",
            "~(-3) 的结果是 2（int 类型，32 位）",
            "~8 的结果是 -9（int 类型，32 位）"
          ],
          "answer": 1,
          "explanation": "按位取反（连同符号位一起）满足公式~n=-n-1。逐项验证：~5=-6、~(-3)=2、~8=-9都符合这个公式，而~0按公式应是-1，不是0。所以B的说法是错误的，答案为B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_22",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 位运算中，各种不同的运算符有优先级的区分，使用括号能够解决优先级的问题。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++中位运算符、算术运算符等都有明确的优先级和结合性，例如&的优先级低于+。为了避免混淆，可以随时用括号强制指定运算顺序，括号能解决优先级问题，这个说法是正确的。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_24",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，表达式 ((0xf0 + 0x15) == 255) 的值为 true 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "0xf0表示十六进制240，0x15表示十六进制21，两者相加等于261。261不等于255，所以表达式(0xf0+0x15)==255的结果是false，不是true，题干说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_25",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果 a 为 int 类型的变量，且 a 的二进制最低位为 0 ，则表达式 ((a & 3 & 1) == 0) 的值为 true 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a的二进制最低位为0说明a是偶数。a&3取出a的最低两位，再&1只保留最低位，因为a最低位是0，所以结果是0，于是(a&3&1)==0成立，表达式的值为true，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_05",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "一种加密方式是字符数组与密钥 KEY、运算方式分开传输：char text[4]={'G','E','S','P'}; KEY=2026; char function[4]={'|','-','^','+'}; 分别进行 'G'|6、'E'-2、'S'^0、'P'+2 等计算得到真实内容，上述 GESP 加密以后最终的内容是（ ）。",
          "options": [
            "GCSR",
            "RSCG",
            "GCSA",
            "BCSR"
          ],
          "answer": 0,
          "explanation": "把KEY=2026从低位到高位取数字6、2、0、2，与运算方式结合：'G'|6，71|6=71仍是'G'；'E'-2，69-2=67即'C'；'S'^0，83即'S'；'P'+2，80+2=82即'R'。四个字符拼成GCSR。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_06",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "关于位运算，下列说法错误的是（  ）。",
          "options": [
            "找唯一数：数组中唯一出现一次的数，其余出现两次，全部异或结果即为该数。例如：[5, 7, 9, 7, 5]（唯一数是9）。",
            "交换两个数：a ^= b; b ^= a; a ^= b;（无需临时变量）。",
            "将二进制位整体左移 n 位，高位溢出舍弃，低位补 0；等价于 num 乘以 2^n。",
            "对每一个二进制位取反，包括符号位，简单运算规则是 ~n = -n - 1 。"
          ],
          "answer": 2,
          "explanation": "左移n位相当于乘以2^n，但前提是结果没有溢出。一旦高位溢出被舍弃，结果就不等于原来的数乘以2^n，所以C的说法错误。A用异或找唯一数、B用异或交换、D的~n=-n-1都是正确的。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_09",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在 C++ 中，对于 32 位有符号整数 int 类型数据 n ，关于按位取反运算符 ~ ，下列说法正确的是（  ）。",
          "options": [
            "~6 的结果是 5 。",
            "按位取反满足公式 ~n = -n - 1 。",
            "~0 的结果是 1 。",
            "~(-2) 的结果是 -1 。"
          ],
          "answer": 1,
          "explanation": "按位取反运算符~会连同符号位一起取反，满足~n=-n-1。验证：~6=-7、~0=-1、~(-2)=1，所以A、C、D都错误，只有B的公式~n=-n-1是正确的。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_11",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面选项中提到的变量都是正整数，关于位运算，下面说法错误的是（  ）。",
          "options": [
            "num & 1 ，结果为 1 则奇数，0 则偶数（仅看最低位）。",
            "num & 0xFF 保留低 8 位。",
            "num & b 的结果一定小于等于 num 。",
            "若 num 左移导致高位溢出（如超过整型范围），结果符合乘法规律。"
          ],
          "answer": 3,
          "explanation": "num左移如果高位溢出，溢出位被舍弃，结果不再等于num乘以2^n，所以D说法错误。A中num&1判断奇偶正确，B中num&0xFF保留低8位正确，C中与运算的结果不会大于参与运算的数，正确。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_12",
          "kp": "kp3_02",
          "type": "choice",
          "difficulty": 1,
          "question": "a=7, b=3, c=14, d=15, e=8 ，对于运算表达式 !a << b & c ^ d | e 的结果是（ ）。",
          "options": [
            "0",
            "15",
            "7",
            "14"
          ],
          "answer": 1,
          "explanation": "按优先级从高到低依次计算：先!a=!7=0；再0<<b=0<<3=0；接着0&c=0&14=0；然后0^d=0^15=15；最后15|e=15|8=15。整个表达式的值是15，选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_20",
          "kp": "kp3_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果 a 为 int 类型的变量，且表达式 ((a & 1) == 1) 的值为 true ，则说明 a 是奇数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a&1只保留a的二进制最低位。如果(a&1)==1为true，说明a的最低位是1。二进制最低位为1的整数一定是奇数（不能被2整除），所以可以判断a是奇数，题干的说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp3_05": {
      "title": "字符串及函数",
      "questions": [
        {
          "id": "l3_202306_05",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果字符串定义为char str[] = \"Hello\";，则字符数组str的长度为（ ）。",
          "options": [
            "A. 0",
            "B. 5",
            "C. 6",
            "D. 7"
          ],
          "answer": 2,
          "explanation": "字符串\"Hello\"本身有5个字符，但C++规定字符串末尾会自动保存一个'\\0'结束符，因此char数组实际需要6个位置来存放这5个字符加结束符，所以数组长度为6，选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_20",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "字符常量'\\0'常用来表示字符串结束，它和字符常量'0'是不同的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "'\\0'的ASCII码是0，专门表示字符串结束；'0'是数字字符零，ASCII码是48。记住：\\0数值为0，而'0'数值为48，两者是完全不同的字符常量，所以题干说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_27",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 2,
          "question": "密码合规检测\n【问题描述】网站注册需要有用户名和密码，编写程序以检查用户输入密码的有效性。合规的密码应满足以下要求：1、只能由a-z之间26个小写字母、A-Z之间26个大写字母、0-9之间10个数字以及!@#$四个特殊字符构成。2、密码最短长度：6个字符，密码最大长度：12个字符。3、大写字母、小写字母和数字必须至少有其中两种，以及至少有四个特殊字符中的一个。\n【输入描述】输入一行不含空格的字符串。约定长度不超过100。该字符串被英文逗号分隔为多段，作为多组被检测密码。\n【输出描述】输出若干行，每行输出一组合规的密码。输出顺序以输入先后为序，即先输入则先输出。\n【数据范围】\n1 ≤ 字符串长度 ≤ 100",
          "options": null,
          "answer": null,
          "explanation": "思路：先按逗号把输入切分成多段密码，对每段做检查：长度必须在6到12之间；逐个字符判断类别，用hasC/hasL/hasD/hasS记录是否出现大写、小写、数字、特殊字符，出现其他字符直接判非法；最后要求至少含一个特殊字符，且大写、小写、数字中至少含两类，通过则输出该密码。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nchar line[101], pwd[101];\nbool check(char *str, int l) {\n    if (l < 6 || l > 12) return false;\n    bool hasC = false, hasL = false, hasD = false, hasS = false;\n    for (int i = 0; str[i] != '\\0'; i++) {\n        if ('A' <= str[i] && str[i] <= 'Z') hasC = true;\n        else if ('a' <= str[i] && str[i] <= 'z') hasL = true;\n        else if ('0' <= str[i] && str[i] <= '9') hasD = true;\n        else if (str[i] == '!' || str[i] == '@' || str[i] == '#' || str[i] == '$') hasS = true;\n        else return false;\n    }\n    if (!hasS) return false;\n    if (hasC + hasL + hasD < 2) return false;\n    return true;\n}\nint main() {\n    cin >> line;\n    int len = 0;\n    for (int i = 0; line[i] != '\\0'; i++) {\n        if (line[i] != ',') { pwd[len] = line[i]; len++; }\n        else {\n            pwd[len] = '\\0';\n            if (check(pwd, len)) cout << pwd << endl;\n            len = 0;\n        }\n    }\n    if (len > 0) {\n        pwd[len] = '\\0';\n        if (check(pwd, len)) cout << pwd << endl;\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "seHJ12!@,sjdkffH$123,sdf!@&12HDHa!,123&^YUhg@!",
              "expectedOutput": "seHJ12!@\nsjdkffH$123"
            }
          ]
        },
        {
          "id": "l3_202309_12",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，下列哪个表达式可以正确判断\"a是大写字母\"？（ ）",
          "options": [
            "A. a - 'A' <= 26",
            "B. 'A' <= a <= 'Z'",
            "C. 'A' <= 'a' <= 'Z'",
            "D. ('A' <= a) && (a <= 'Z')"
          ],
          "answer": 3,
          "explanation": "大写字母的ASCII码在65到90之间，即'A'到'Z'。D用与运算同时判断a不小于'A'且不大于'Z'，是正确的。B的连比较写法在C++中含义与数学不同，故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_03",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后不能输出\"GESP\"的是（ ）。",
          "options": [
            "A. string str(\"GESP\"); cout<<str<<endl;",
            "B. string str=\"GESP\"; cout<<str<<endl;",
            "C. string str(\"GESP\"); cout<<str[1]<<str[2]<<str[3]<<str[4]<<endl;",
            "D. string str{\"GESP\"}; cout<<str<<endl;"
          ],
          "answer": 2,
          "explanation": "str[0]到str[3]分别对应G、E、S、P，而str[4]是字符串的结束符'\\0'，所以C输出的是\"ESP\"，缺少开头的G，不能输出\"GESP\"。A、B、D都能完整输出，故选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_05",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码后，输出是（ ）。\n<pre><code>string str(\"chen\");\nint x=str.length();\nint temp=0;\nfor(i=0;i<=x;i++)\n    temp++;\ncout<<temp<<endl;\n</code></pre>",
          "options": [
            "A. 4",
            "B. 2",
            "C. 5",
            "D. 3"
          ],
          "answer": 2,
          "explanation": "\"chen\"共有4个字符，所以x=4。循环条件是i<=x，即i从0到4一共执行5次，每次temp加1，注意这里多执行了i=4这一次，所以temp=5，输出5，本题选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_06",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码后输出的是（ ）。\n<pre><code>string str(\"chen\");\nint x=str.length();\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "A. 4",
            "B. 3",
            "C. 2",
            "D. 5"
          ],
          "answer": 0,
          "explanation": "str.length()返回字符串中字符的个数，\"chen\"由c、h、e、n四个字符组成，所以x=4。字符串长度只统计有效字符，不含结束符，cout输出4，本题选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_07",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码后输出的是（ ）。\n<pre><code>string str(\"chen\");\ncout<<str[5]<<endl;\n</code></pre>",
          "options": [
            "A. 输出未知的数",
            "B. 输出'n'",
            "C. 输出'\\0'",
            "D. 输出空格"
          ],
          "answer": 0,
          "explanation": "字符串\"chen\"的合法下标范围是0到4，str[5]已经越界。越界访问在C++中是未定义行为，得到的结果无法预知，所以选A\"输出未知的数\"。所以无法预知str[5]会输出什么内容。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_09",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于统计每种字符出现的次数，当输出为3时，横线上不能填入的代码是（ ）。\n<pre><code>string str=\"GESP is a good programming test!\";\nint x=0;\nfor(i=0;i<str.length();i++)\n    if(____)\n        x++;\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "A. str[i]=='o'",
            "B. str[i]=='a'+14",
            "C. str[i]==115",
            "D. str[i]==111"
          ],
          "answer": 2,
          "explanation": "'o'在good中出现2次、programming中出现1次，共3次，所以A、B、D（都代表'o'）填入后输出3。str[i]==115统计的是小写's'，GESP中的S是大写不计入，只出现2次，输出不是3，故选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_13",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "C++代码用于抽取字符串中的电话号码。约定：电话号码全部是数字，数字之间没有其他符号如连字符或空格等。代码中变量strSrc仅仅是示例，可以包含更多字符。下面有关代码说法，正确的说法是（ ）。\n<pre><code>string strSrc=\"红十字: 01084025890火警电话: 119急救电话: 120紧急求助: 110\";\nstring tel=\"\";\nfor(i=0;i<=strSrc.length();i++)\n{\n    if(strSrc[i]>='0'&&strSrc[i]<='9')\n        tel=tel+strSrc[i];\n    else if(tel!=\"\")\n    {\n        cout<<tel<<endl;\n        tel=\"\";\n    }\n}\n</code></pre>",
          "options": [
            "A. 代码将换行输出各个含有数字的电话号码。",
            "B. 代码将不换行输出各个含有数字的电话号码，号码中间没有分隔。",
            "C. 代码将不换行输出各个含有数字的电话号码，号码中间有分隔。",
            "D. 不能够输出数字电话号码。"
          ],
          "answer": 0,
          "explanation": "连续的数字会拼接进tel，遇到非数字字符且tel非空时，就用endl换行输出tel并清空。于是01084025890、119、120、110四个号码被分行输出，所以选A换行输出。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_17",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++程序执行后，输入chen a dai输出应该为：chen。（ ）\n<pre><code>string str;\ncin>>str;\ncout<<str;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "cin>>在读入字符串时遇到空格等空白字符就会停止，所以输入\"chen a dai\"时只会读入chen，输出也是chen。cin以空白字符为读取边界，所以题干说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_19",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码后将输出\"China\"。（ ）\n<pre><code>string a=\"china\";\na.replace(0,1,\"C\");\ncout<<a<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "replace(0,1,\"C\")把字符串a中下标0处长度为1的字符'c'替换成'C'，得到\"China\"。replace函数按位置和长度替换子串，所以题干说将输出China是正确的。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202403_05",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知字符'0'的ASCII编码的十进制表示为48，则执行下面C++代码后，输出是（ ）。\n<pre><code>string s=\"316\";\nint n=s.length();\nint x=0;\nfor(int i=0;i<n;i++)\n    x+=s[i];\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "10",
            "58",
            "154",
            "316"
          ],
          "answer": 2,
          "explanation": "s[i]取出的是字符而不是数字。'3'的ASCII是51，'1'是49，'6'是54，把它们相加得51+49+54=154，所以输出154。注意字符'0'到'9'的ASCII码等于48加上对应数字。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_08",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是GESP IS INTERESTING。\n<pre><code>string str=\"gEsP is Interesting\";\nint x=str.length();\nfor(int i=0;i<x;i++)\n    if((str[i]>='a')&&(str[i]<='z'))\n        ____;\ncout<<str<<endl;\n</code></pre>",
          "options": [
            "str[i]+='a'-'A'",
            "str[i]+=20",
            "str[i]+='A'-'a'",
            "无法实现"
          ],
          "answer": 2,
          "explanation": "要把小写字母变大写。'A'的ASCII是65，'a'是97，两者相差32，所以str[i]+='A'-'a'即加-32，就把小写变成大写。程序中只对小写字母执行，得到GESP IS INTERESTING。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_09",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "假设英文句子由若干词构成。下面C++代码统计输出的词数是（ ）。\n<pre><code>string str=\"gEsP is  Interesting  !\";\nint x=str.length();\nint nwords=0;\nfor(int i=0;i<x;i++)\n    if(str[i]==' ')\n    {\n        nwords++;\n        while(str[++i]==' ');\n    }\ncout<<nwords<<endl;\n</code></pre>",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explanation": "遇到空格就计一个词并跳过连续的空格。字符串有3段连续空格：gEsP后1个、is后2个、Interesting后2个，分别触发一次计数，nwords=3，所以输出3。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_12",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "定义字符数组char str[20]={'G','E','S','P'}; ，则str的字符串长度为（ ）。",
          "options": [
            "4",
            "5",
            "19",
            "20"
          ],
          "answer": 0,
          "explanation": "字符数组初始化时只给了4个字符，其余位置自动补'\\0'。字符串长度按strlen计算，即遇到第一个'\\0'为止，所以长度是4。数组容量20只是数组大小，不是字符串长度。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_21",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码后将输出2 。（ ）\n<pre><code>string str=\"gEsP is Interesting\";\nint x=str.find(\"s\");\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。find(\"s\")返回字符s第一次出现的位置（下标从0开始）。字符串gEsP is Interesting中，g在下标0、E在下标1、s在下标2，所以x=2，输出2。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_26",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：字母求和。小杨同学发明了一种新型密码，对于每个小写英文字母代表它在字母顺序中的位置（a=1，b=2，…，z=26）；每个大写英文字母代表它的ASCII码的相反数（如A代表-65）。给定一个由大小写字母组成的字符串，求它加密前的整数。输入：第一行一个正整数n，第二行一个字符串。输出：一个整数。\n【数据范围】\n1 ≤ n ≤ 100000\n样例输入：3\\naAc，样例输出：-61。",
          "options": [],
          "answer": null,
          "explanation": "思路：依次读入字符串的每个字符，如果是小写字母就加上str[i]-'a'+1，如果是大写字母就减去str[i]（因为ASCII码本身就是正数，取相反数即减去它），最后输出累加和。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nconst int N = 100005;\nchar str[N];\nint main() {\n    int n;\n    cin >> n;\n    cin >> str;\n    int ans = 0;\n    for (int i = 0; i < n; i++) {\n        if (str[i] >= 'a' && str[i] <= 'z')\n            ans += str[i] - 'a' + 1;\n        else if (str[i] >= 'A' && str[i] <= 'Z')\n            ans -= str[i];\n    }\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\naAc",
              "expectedOutput": "-61"
            }
          ]
        },
        {
          "id": "l3_202406_09",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果字符串定义为char str[] = \"GESP\"; ，则字符数组str的长度为( )。",
          "options": [
            "0",
            "4",
            "5",
            "6"
          ],
          "answer": 2,
          "explanation": "char str[]=\"GESP\"会在末尾自动补一个'\\0'结束符，所以数组占用5个字节。数组长度包含结束符，故为5，选C。而strlen只统计到\\0之前的字符数，并不包含结束符。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_12",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知字符'0'的ASCII编码的十进制表示为48，则执行下面C++代码后，输出是( )。\n<pre><code>string s=\"0629\";\nint n=s.length();\nint x=0;\nfor(int i=0;i<n;i++)\n    x+=s[i];\ncout<<x<<endl;\n</code></pre>",
          "options": [
            "17",
            "158",
            "209",
            "316"
          ],
          "answer": 2,
          "explanation": "x累加的是字符的ASCII码：'0'是48，'6'是54，'2'是50，'9'是57，和为48+54+50+57=209，所以输出209。注意数字字符要按ASCII码计。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_14",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面可以正确输出 They're planning a party for their friend's birthday. 的C++语句是（ ）。",
          "options": [
            "cout << 'They\\'re planning a party for their friend'\\s birthday.\" << endl;",
            "cout << \"They\\'re planning a party for their friend's birthday.'<< endl;",
            "cout << 'They're planning a party for their friend's birthday.'<< endl;",
            "cout << \"They\\'re planning a party for their friend\\'s birthday.\" << endl;"
          ],
          "answer": 3,
          "explanation": "字符串里出现单引号'时要用\\'转义，并且整个字符串用双引号括起来。只有D用双引号且对两处撇号都做了转义，能正确输出这句话。转义字符\\'表示撇号本身，不再作为字符串结束标志。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果执行下面C++代码后，输出的结果是\"gesp ccf org cn \"，则横线上应填入哪个代码？\n<pre><code>string str=\"gesp.ccf.org.cn\";\n...\nwhile(found!=string::npos)\n{\n    token=str.substr(0,found);\n    result+=token;\n    result+=\" \";\n    ____;\n    found=str.find(delimiter);\n}\nresult+=str;\nresult+=\" \";\n</code></pre>",
          "options": [
            "str = str.substr(found + delimiter.length(), str.length() - 1);",
            "str = str.substr(found, str.length());",
            "str = str.substr(found, str.length() -1);",
            "以上都不对"
          ],
          "answer": 0,
          "explanation": "每取完一段要在str里删掉已处理的\"段+分隔符\"，即从found+1处截取剩余部分。选项A从found+delimiter.length()开始截取，循环后str只剩下最后的cn，配合末尾result+=str得到gesp ccf org cn。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_19",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "字符常量'\\0'常用来表示字符串结束，和字符常量'0'相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。'\\0'是ASCII码为0的空字符，用来标记字符串结束；'0'是ASCII码为48的数字字符0，两者完全不同，不能混用。一个是字符串结束标志，一个是数字字符，绝不能混用。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_26",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：移位。小杨学习了加密技术移位，所有大写字母都向后按照一个固定数目进行偏移，偏移时把字母表视作首尾相接的环。给定偏移量n，输出大写字母表ABCDEFGHIJKLMNOPQRSTUVWXYZ移位替换后的结果。输入：一行一个正整数n。输出：移位后的26个大写字母。样例输入：3，样例输出：DEFGHIJKLMNOPQRSTUVWXYZABC。",
          "options": [],
          "answer": null,
          "explanation": "思路：第i个位置上的字符应该是'A'加上(i+n)%26，即原字母表向后偏移n位、超出Z时绕回A。依次输出26个字符即可。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n;\n    cin>>n;\n    for(int i=0;i<26;i++){\n        int j=(i+n)%26;\n        cout<<(char)('A'+j);\n    }\n    cout<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3",
              "expectedOutput": "DEFGHIJKLMNOPQRSTUVWXYZABC"
            }
          ]
        },
        {
          "id": "l3_202409_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序输出的是（ ）。\n<pre><code>string str = \"Hello,陈A歹\";\ncout << str.find(\"A\") << '\\n';\n</code></pre>",
          "options": [
            "9",
            "8",
            "7"
          ],
          "answer": 0,
          "explanation": "find(\"A\")返回字符A首次出现的字节下标（从0开始）。字符串按UTF-8编码存储时，\"Hello,\"占6个字节（下标0到5），汉字\"陈\"占3个字节（下标6到8），'A'在下标9，所以输出9，选A。std::string按字节存储，中文字符在UTF-8下每个占3个字节。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_20",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下列程序输出的是A 。（ ）\n<pre><code>char x=65;\nx++;\ncout<<x++<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。x=65即字符'A'，先执行语句x++使x变为66（即'B'），随后cout<<x++输出的是当前的'B'并把x自增到67。所以输出的是B而不是A，说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_21",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下列程序输出的是3 。（ ）\n<pre><code>string str=\"陈ADai\";\nsize_t pos = str.find('D');\ncout<<pos<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。字符串\"陈ADai\"按UTF-8编码存储时，汉字\"陈\"占3个字节（下标0到2），'A'在下标3，'D'在下标4，find('D')返回4而不是3，所以输出4，说法错误。下标从0开始编号，注意别和人数的第几位混淆。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_23",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下列程序将输出A 。（ ）\n<pre><code>int a=65;\ncout<<(char)a<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。把整数65强制转换成字符类型，ASCII码65对应的就是大写字母A，所以输出A。记住常用ASCII码：A是65，a是97，两者相差32。这就是把整数类型转换后按字符显示的应用。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_27",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：回文拼接。一个字符串是回文串当且仅当从前往后读和从后往前读一样。小杨有n个仅包含小写字母的字符串，判断每个字符串是否由两个长度至少为2的回文串前后拼接而成。输入：第一行字符串数量n，之后n行每行一个字符串。输出：每个字符串输出一行Yes或No。样例输入：4\\nabcd\\naabbb\\naaac\\nabcdd，样例输出：No\\nYes\\nNo\\nNo。",
          "options": [],
          "answer": null,
          "explanation": "思路：对每个字符串，枚举分割点j（2到m-2），把字符串分成前后两段，分别判断两段是否都是回文串（正反读相同），一旦找到就输出Yes，否则输出No。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    for(int i=1;i<=n;i++){\n        string s; cin>>s;\n        int m=s.length();\n        int fl=0;\n        for(int j=2;j<=m-2;j++){\n            string s1=s.substr(0,j), s2=s.substr(j,m-j);\n            string t1=s1, t2=s2;\n            reverse(t1.begin(),t1.end()); reverse(t2.begin(),t2.end());\n            if(t1==s1 && t2==s2){ fl=1; break; }\n        }\n        if(fl) cout<<\"Yes\\n\"; else cout<<\"No\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\nabcd\naabbb\naaac\nabcdd",
              "expectedOutput": "No\nYes\nNo\nNo"
            }
          ]
        },
        {
          "id": "l3_202412_07",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码输出的是（ ）。\n<pre><code>string s=\"1234@@chenadai\";\nstring str=\"12345\";\ns.replace(1,5,str);\ncout<<s<<endl;\n</code></pre>",
          "options": [
            "12345",
            "2345@",
            "112345chenadai",
            "12345chenadai"
          ],
          "answer": 2,
          "explanation": "replace(1,5,str)把s中从下标1开始长度为5的\"234@@\"替换成\"12345\"，保留开头的1和后面的chenadai，结果s=\"112345chenadai\"，输出C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_09",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序输出的是（ ）。\n<pre><code>string ch=\"hello\";\nif(ch[5]==NULL)\n    cout<<\"right\";\nelse if(ch[5]=='\\0')\n    cout<<\"wrong\";\nelse\n    cout<<\"hello\";\n</code></pre>",
          "options": [
            "right",
            "wrong",
            "hello",
            "不能正确执行"
          ],
          "answer": 0,
          "explanation": "字符串\"hello\"长度为5，ch[5]就是末尾的'\\0'空字符，其值为0，与NULL（0）相等，所以第一个条件成立，输出right。NULL和\\0的数值都是0，因此第一个if条件成立。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_10",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序中，假设一个字符占用的内存空间是1，下列程序中，ch占用的内存空间是( )。\n<pre><code>char ch[] = \"hello world\";\nsize_t ret=strlen(ch);\ncout<<ret<<endl;\n</code></pre>",
          "options": [
            "11",
            "10",
            "13",
            "12"
          ],
          "answer": 3,
          "explanation": "问的是ch占用的内存空间而不是strlen。\"hello world\"共11个字符，末尾还要加一个'\\0'结束符，所以char ch[]占用11+1=12个字节，输出12。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_11",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列程序最后输出的是（ ）。\n<pre><code>int a=65;\ncout<<tolower(a)<<endl;\n</code></pre>",
          "options": [
            "65",
            "A",
            "a",
            "97"
          ],
          "answer": 3,
          "explanation": "tolower把大写字母转成小写，tolower(65)即tolower('A')返回字符'a'的ASCII码97，所以输出97，选D。与它配套的toupper函数则把小写字母转换成大写。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_21",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下列可执行程序段中，最后 pos 的值是 4。\n<pre><code>string str=\"chenADai\";\nint pos=str.find('D');\n--pos&11;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。find('D')在字符串chenADai中返回下标5，--pos使pos变成4，表达式--pos&11的结果被丢弃但pos已经变成4，所以最后pos=4。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_22",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "该段程序将不能正确执行。\n<pre><code>string ch=\"chen\";\ncout<<ch[4]<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。ch=\"chen\"数组长度5，ch[4]是字符串末尾的'\\0'空字符，没有越界，程序能正常执行，只是输出空字符看不到内容。输出\\0字符时屏幕上不会有任何可见内容。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_23",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "将输出 97。\n<pre><code>char a='A';\na=a+32;\ncout<<(int)a<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。'A'的ASCII码是65，加32得97，即小写'a'的ASCII码，强制转int后输出97。大小写字母的ASCII码正好相差32，是常用的规律。把a转成int后输出97，正好是小写a的ASCII码。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_13",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面程序最后能够得到HelloC++ 的是（ ）。\n<pre><code>string str=\"HelloWorld\";\n____;\ncout<<str;\n</code></pre>",
          "options": [
            "str.replace(0, 5, \"C++\");",
            "str.replace(5, 5, \"C++\");",
            "str.replace(1, 5, \"C++\");",
            "str.replace(4, 5, \"C++\");"
          ],
          "answer": 1,
          "explanation": "replace(5,5,\"C++\")把下标5开始长度为5的\"World\"替换成\"C++\"，str变成\"HelloC++\"。其他选项替换的位置不对，得不到HelloC++。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_14",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "想要得到字符串world，下面程序横线处应该填入的是（ ）。\n<pre><code>string str=\"HelloC++\";\n____;\n____;\nreturn 0;\n</code></pre>",
          "options": [
            "str.insert(4, \"World\"); cout << str.substr(4, 4);",
            "cout << str.substr(5, 5);",
            "str.insert(\"World\"); cout << str.substr(5, 5);",
            "str.insert(5, \"World\"); cout << str.substr(5, 5);"
          ],
          "answer": 3,
          "explanation": "先str.insert(5,\"World\")把World插到下标5处，得到\"HelloWorldC++\"，再substr(5,5)取出下标5开始的5个字符\"World\"。A插入位置错，B没插，C缺少位置参数。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_27",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：词频统计。在文本处理中，统计单词出现的频率是一个常见的任务。给定n个单词，找出其中出现次数最多的单词。忽略单词中字母的大小写（Apple、apple、APPLE视为同一个单词）。输入：第一行整数n，接下来n行每行一个单词（由大小写英文字母组成），保证出现次数最多的单词只有一个。输出：出现次数最多的单词（小写形式）。样例输入：6\\nApple\\nbanana\\napple\\nOrange\\nbanana\\napple，样例输出：apple。",
          "options": [],
          "answer": null,
          "explanation": "思路：用map统计每个单词（统一转小写）出现的次数，同时记录最大次数。最后遍历map输出次数等于最大次数的那个单词，即为出现次数最多的单词。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n; cin>>n;\n    map<string,int> cnt;\n    int mx=-1;\n    for(int i=1;i<=n;i++){\n        string s; cin>>s;\n        transform(s.begin(),s.end(),s.begin(),::tolower);\n        if(!cnt.count(s)) cnt[s]=0;\n        mx=max(mx,++cnt[s]);\n    }\n    for(auto it=cnt.begin(); it!=cnt.end(); it++)\n        if(it->second==mx){ cout<<it->first<<'\\n'; break; }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\nApple\nbanana\napple\nOrange\nbanana\napple",
              "expectedOutput": "apple"
            }
          ]
        },
        {
          "id": "l3_202506_13",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "C++代码 string s = \"GESP考试\"; s占据的字节数是（）",
          "options": [
            "10",
            "8",
            "8或10",
            "取决于计算机采用什么编码"
          ],
          "answer": 3,
          "explanation": "字符串中英文字母GESP各占1字节共4字节；两个汉字占多少字节取决于编码：UTF-8中每个汉字3字节、GBK中每个汉字2字节。因此字符串总共占的字节数会随系统采用的编码而不同，所以选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_14",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "C++语句 string s=\"Gesp Test\"; 执行 s.rfind(\"e\") 以后，输出的是（）",
          "options": [
            "1",
            "2",
            "6",
            "3"
          ],
          "answer": 2,
          "explanation": "rfind(子串)从字符串末尾向前查找子串最后一次出现的位置。字符串\"Gesp Test\"中，字符e第一次出现在下标1，第二次出现在下标6，rfind返回最后一次出现的位置，也就是6，所以输出6。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "字符串\"Gesp考试\"，字符数是（ ）",
          "options": [
            "10",
            "8",
            "6",
            "字符数多少取决于编码"
          ],
          "answer": 2,
          "explanation": "字符数指的是字符的个数，不区分英文字符和汉字，每个字符都算1个。\"Gesp考试\"中有G、e、s、p共4个英文字符，加上“考试”2个汉字，一共6个字符。字符数与编码无关，只有字节数才取决于编码。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_16",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++中 string 的 == 运算符比较的是字符串的内存地址，而非内容",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中的string类重载了==运算符，比较的是两个字符串的内容是否相同，而不是比较内存地址。用==比较指针变量才是比较地址，string对象之间用==比较的是它们存放的字符序列，所以题干的说法是错误的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_17",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "string 的 substr(1, 3) 返回从下标1开始的3个字符的子串。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "string的substr(pos, len)函数返回从下标pos开始、长度为len的子串。下标从0开始计数，所以substr(1, 3)就是从下标1取3个字符。例如\"abcdef\".substr(1,3)得到\"bcd\"，与题干描述一致。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_19",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "string(\"hello\") == \"hello\" 的比较结果为 true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "string类重载了与const char*的==运算符，比较时会自动把字符串字面量\"hello\"转换成string再比较内容。两边内容都是hello，完全相同，所以比较结果为true，题干的说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_20",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "sort 可以直接用于排序 set 中的元素。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "set内部用红黑树维护，元素本来就是有序排列的；而且sort算法要求随机访问迭代器，set只提供双向迭代器。因此不能直接对set调用sort，要对set排序没有意义也没必要，题干说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_22",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "string 的 substr(2, 10) 在字符串长度不足时会抛出异常。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "substr(pos, len)中，只要pos是合法下标，len超过剩余长度时函数会返回从pos到字符串结尾的子串，不会抛异常。只有pos大于等于字符串长度（越界）时才会抛出out_of_range异常，所以题干错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_05",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "要正确定义一个返回两个整数中较大值的函数 max ，应该使用（ ）。",
          "options": [
            "void max(int a, int b) { return a > b ? a : b; }",
            "int max(int a, int b) { if (a > b) return a; else return b; }",
            "int max(a, b) { if (a > b) return a; else return b; }",
            "void max(a, b) { cout << (a > b ? a : b); }"
          ],
          "answer": 1,
          "explanation": "要返回两个整数中较大的值，函数返回类型必须是int，参数必须写明类型。B项int max(int a,int b)返回类型、参数类型都正确。A返回void不能return值，C参数没写类型，D既没返回类型还用cout输出。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_07",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++函数的描述，正确的是（ ）。",
          "options": [
            "函数必须要有参数。",
            "函数通过 return 语句只能返回一个值。但是可以通过很多间接的方式返回多个值。",
            "main 函数可以被其他函数调用。",
            "函数的定义可以直接嵌套，即一个函数内部可以真正定义另一个函数。"
          ],
          "answer": 1,
          "explanation": "C++函数通过return语句只能直接返回一个值，但可以借助引用参数、指针、数组或结构体等方式间接返回多个值，所以B正确。A错在函数可以没有参数，C错在main不能由其他函数调用，D错在C++不允许函数嵌套定义。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_13",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++函数的说法，正确的是（ ）。",
          "options": [
            "函数参数传递只有值传递一种方式。",
            "函数的形参在函数调用结束后依然占用内存空间",
            "没有返回值的函数必须声明为 void 类型，且不能包含 return 语句",
            "C++11 及之后标准要求函数必须显式声明返回类型，不允许默认返回 int"
          ],
          "answer": 3,
          "explanation": "C++11起取消了“未写返回类型默认为int”的旧规则，函数必须显式声明返回类型，所以D正确。A错在还有引用传递，B错在形参在函数调用结束后就释放，C错在void函数可以包含不带值的return语句。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++中 string 类和字符数组( char[] )的说法，错误的是（ ）。",
          "options": [
            "string 对象可以使用 = 进行赋值，而字符数组需要使用 strcpy 。",
            "string 对象的长度可以使用 length() 成员函数获取，而字符数组需要使用 strlen() 函数。",
            "string 对象在内存中是动态分配空间的，因此可以自动处理字符串长度的变化。",
            "string 对象和字符数组都可以使用 == 运算符来直接比较两个字符串的内容是否相同。"
          ],
          "answer": 3,
          "explanation": "string重载了==可以直接比较内容；但char[]数组名代表首地址，用==比较的是两个数组的地址而不是内容，比较内容必须用strcmp函数。所以D说字符数组也能用==直接比较内容，是错误的。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_05",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "已知字符串 s = \"C++ Programming\" ，下列程序运行的结果是（ ）。cout << (int)(s.length() | 3) << endl;",
          "options": [
            "14",
            "15",
            "16",
            "17"
          ],
          "answer": 1,
          "explanation": "字符串\"C++ Programming\"包含C、+、+、空格、P、r、o、g、r、a、m、m、i、n、g，一共15个字符，所以s.length()=15。15的二进制是1111，3的二进制是0011，按位或得到1111，即15，输出15。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_07",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于 C++ 求最小值函数 min() 的描述，不正确的是（ ）。",
          "options": [
            "函数必须返回一个值",
            "该函数可以嵌套调用",
            "调用 min(5) 是错误的，不能通过编译",
            "调用 min() （不传任何参数）可以通过编译，结果为 0"
          ],
          "answer": 3,
          "explanation": "std::min至少需要两个参数才能比较出较小值，调用min()不传任何参数会编译错误，不可能“通过编译结果为0”，所以D描述不正确。min(5)只有一个参数也无法编译，A、B、C的说法都正确。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_14",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于 C++ 中 abs() 函数的描述，正确的是（ ）",
          "options": [
            "abs() 函数可用于计算 int 类型整数的绝对值，头文件为 <cmath> 或 <cstdlib>",
            "调用 abs(3.14) 可以四舍五入得到 3",
            "abs(-1, -2) 的返回值是 1",
            "若传入负数浮点数，abs() 会自动截断小数部分后返回整数绝对值"
          ],
          "answer": 0,
          "explanation": "C++中abs()计算int类型整数的绝对值，头文件是<cmath>或<cstdlib>，A正确。B错误：abs(3.14)不四舍五入；C错误：abs只有一个参数，不能传两个；D错误：<cmath>下的abs对浮点数返回浮点绝对值，不截断。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果字符串 s 的值是 GESP ，以下代码 s 的最后结果是（ ）。for (int i = 0; i < s.length(); i++) { s[i] = toupper(s[i] + i); }",
          "options": [
            "GESP",
            "HFTR",
            "hesp",
            "GFUS"
          ],
          "answer": 3,
          "explanation": "循环对每个字符做s[i]=toupper(s[i]+i)：i=0时'G'+0='G'；i=1时'E'+1='F'；i=2时'S'+2='U'；i=3时'P'+3='S'。四个字符拼起来得到GFUS，选D。toupper不改变已经是大写字母的值。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_18",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "strcmp(str1, str2) 返回 0 表示 str1 大于 str2 ，返回正数表示两者相等。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "strcmp函数比较两个字符串：返回0表示两个字符串相等；返回正数表示str1大于str2；返回负数表示str1小于str2。题干把“返回0”和“返回正数”的含义说反了，因此说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_26",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "密码强度：一个安全的密码需同时满足：①至少包含8个字符；②至少包含一个大写字母；③至少包含一个数字。给定若干密码，判断每个是否安全，安全输出Y，否则输出N。输入：第一行一个正整数T表示密码组数；接下来T行每行一个密码。输出：每组密码输出一行Y或N。",
          "options": [],
          "answer": null,
          "explanation": "思路：对每个密码遍历一遍，用两个布尔变量记录是否出现大写字母和数字，最后检查长度≥8且两项布尔都为真，满足则输出Y否则输出N。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int T;\n    cin >> T;\n    while (T--) {\n        string password;\n        cin >> password;\n        bool has_upper = false;\n        bool has_digit = false;\n        for (size_t i = 0; i < password.length(); ++i) {\n            if (isupper(password[i])) has_upper = true;\n            if (isdigit(password[i])) has_digit = true;\n        }\n        if (password.length() >= 8 && has_upper && has_digit) cout << \"Y\\n\";\n        else cout << \"N\\n\";\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\nPAs1s2an\n1a2bCql3\nPa12bsna\nab1da3cd\nPaabdbcd\nPa2",
              "expectedOutput": "Y\nY\nY\nN\nN\nN"
            }
          ]
        },
        {
          "id": "l3_202603_03",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下列程序段，说法正确的是（ ）。char str1[] = \"Hello\"; char str2[] = {'H','e','l','l','0'}; cout<<str1<<endl; cout<<str2<<endl;",
          "options": [
            "字符数组 str1 和 str2 完全相同。",
            "这段程序多次执行将输出不同的结果。",
            "字符数组 str1 和 str2 不相等。",
            "这两个赋值方式完全相同。"
          ],
          "answer": 2,
          "explanation": "str1=\"Hello\"是字符串字面量赋值，编译器自动在末尾加'\\0'，共6个元素；str2={'H','e','l','l','0'}是字符数组，只有5个元素，最后是数字0字符且没有'\\0'。两个数组的内容和长度都不同，所以不相等。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_10",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下 C++ 代码后，sub 的值是（ ）。string str = \"GESP2026\"; string sub = str.substr(4, 2);",
          "options": [
            "20",
            "02",
            "2026",
            "026"
          ],
          "answer": 0,
          "explanation": "字符串\"GESP2026\"的长度是8，下标从0到7依次是G、E、S、P、2、0、2、6。substr(4,2)表示从下标4开始取2个字符，下标4是'2'、下标5是'0'，所以得到子串\"20\"。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_12",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，输出结果是：（ ）。char s[10] = \"abcde\"; int a = sizeof(s) / sizeof(s[0]); int b = strlen(s); cout << a - b;",
          "options": [
            "4",
            "5",
            "6",
            "10"
          ],
          "answer": 1,
          "explanation": "char s[10]=\"abcde\"中，数组s占10字节，sizeof(s[0])是1字节，所以a=10；strlen(s)统计到'\\0'之前的字符个数，\"abcde\"有5个字符，所以b=5。a-b=10-5=5。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_15",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "模拟“字符串加密”：规则为“每个字符 ASCII 码 + 3，若超过 z (122) 则从 a 重新开始”，以下代码中正确的条件判断是：（ ）。for (int i = 0; i < str.length(); i++) { ____ else { str[i] += 3; } }",
          "options": [
            "if (str[i]> 122) str[i] = str[i] + 3 - 26;",
            "if (str[i] > 122) str[i] = str[i] - 26;",
            "if (str[i] + 3 > 122) str[i] = str[i] - 26;",
            "if (str[i] + 3 > 'z') str[i] = 'a' + (str[i] + 3 - 'z') - 1;"
          ],
          "answer": 3,
          "explanation": "规则是先加3，加完后如果超过'z'(122)才需要回绕到'a'。因此判断条件应是str[i]+3>'z'。D的回绕公式'a'+(str[i]+3-'z')-1正确：如'y'(121)+3=124，124-122=2，'a'+2-1='b'，即y变b。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_27",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "凯撒密码：凯撒密码把明文中的所有字母按字母表固定偏移后替换成密文。现在给出一组已破解的凯撒密码明文与密文，以及一个与它有相同偏移量的未破解密文，请破解它。输入共三行：第一行已破解的明文；第二行已破解的密文；第三行待破解的密文。输出：一行字符串，表示待破解密文对应的明文。",
          "options": [],
          "answer": null,
          "explanation": "思路：由已知明文密文第一对字符算出偏移量d=明文[0]-密文[0]（取模26化为0到25）。然后对待破解密文的每个字符反向偏移（减d）还原成明文，注意循环处理字母表。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nint main() {\n    string s1, s2, s3;\n    cin >> s1 >> s2 >> s3;\n    int d = s1[0] - s2[0];\n    d = (d % 26 + 26) % 26;\n    for(int i = 0; i < s3.length(); i++) {\n        int ch = (s3[i] - 'A' + d) % 26;\n        cout << (char)(ch + 'A');\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "ABCDEFGVWXYZ\nDEFGHIJYZABC\nWKHTXLFNEURZQIRAMXPSVRYHUWKHODCBGRJ",
              "expectedOutput": "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG"
            }
          ]
        },
        {
          "id": "l3_202606_07",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于字符串和字符数组，下列说法正确的是（  ）。",
          "options": [
            "A对应\n<pre><code>char str[]=\"GESP\";\nint len1=sizeof(str);\nint len2=strlen(str);\n</code></pre> 上面程序能够正确执行，len1 与 len2 相等。",
            "B对应\n<pre><code>char str1[4]=\"GESP\";\nchar str2[4]={'G','E','S','P'};\n</code></pre> 这段程序将能够正确执行。",
            "C对应\n<pre><code>char str2[4]={'G','E','S','P'};\nstrcpy(str2,\"HELLO,GESP\");\ncout<<str2;\n</code></pre> 这段程序即使能够运行，但是存在覆盖数组以外的内存空间的行为，可能会引起严重错误。",
            "D对应\n<pre><code>char dest[4]={'G','E','S','P'};\nchar src[]=\"HELLO\";\nstrcat(dest,src);\ncout<<dest;\n</code></pre> 这段程序能够正确执行，不存在数组越界行为。"
          ],
          "answer": 2,
          "explanation": "C项strcpy把\"HELLO,GESP\"共11个字符拷进只有4字节的str2，必然越界覆盖相邻内存，可能引起严重错误，说法正确。A中sizeof(str)=5不等于strlen(str)=4；B中str1[4]装不下5个字符编译失败；D的strcat同样越界。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_13",
          "kp": "kp3_05",
          "type": "choice",
          "difficulty": 1,
          "question": "关于 string 的成员函数，下面说法错误的是（  ）。",
          "options": [
            "size()：返回字符串长度（字符个数，不含 '\\0'）。",
            "length() 与 size() 功能完全一致，返回字符串长度。",
            "empty()：判断字符串是否为空（非空返回 true ，空返回 false ）。",
            "s.append(s2, 0, 3); 从 s2 下标 0 开始，截取 3 个字符。"
          ],
          "answer": 2,
          "explanation": "empty()成员函数的功能是判断字符串是否为空：空字符串返回true，非空返回false。C选项把返回值说反了，所以是错误的。size()和length()都返回字符个数，append(s2,0,3)从s2下标0取3个字符，A、B、D都正确。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_22",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "<pre><code>下列程序如果能够正确执行，那么输出的结果是 GESP。int main() { string name=\"GESP\"; cout << name[false] << name[true] << name[1<<1] << name[7>>1] << endl; }</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "false会转换为整数0，true转换为1；1<<1是2，7>>1是3。所以依次输出name[0]、name[1]、name[2]、name[3]，即字符串\"GESP\"的G、E、S、P，输出结果为GESP，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_25",
          "kp": "kp3_05",
          "type": "judge",
          "difficulty": 1,
          "question": "判断一个 int 型数字 s[i] 是不是在 0 和 9 之间（可以是 0 和 9 ），判断条件可以写为 if (s[i] >= '0' && s[i] <= '9') 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "s[i]是int型的数字，值在0到9之间，判断它是否在0和9之间应该写s[i]>=0 && s[i]<=9。而'0'和'9'是字符，对应ASCII码49和57，用它判断会把0到9全部判成不在范围内，所以题干写法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_27",
          "kp": "kp3_05",
          "type": "coding",
          "difficulty": 1,
          "question": "字符转换：小杨有一串字符，里面可能有大小写字母和数字。转换规则：①大写字母变成对应小写字母；②小写字母变成对应大写字母；③数字变成*。请按规则转换整串字符。输入共两行：第一行一个整数n，表示字符个数；第二行一串连续的字符。输出：转换后的字符，字符间不加空格。\n【数据范围】\n1 ≤ n ≤ 1000\n",
          "options": [],
          "answer": null,
          "explanation": "思路：逐个字符判断。小写转大写：减('a'-'A')；大写转小写：加('a'-'A')；其余字符输出*。注意转换后连续输出不加空格。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nchar s[1010];\nint main() {\n    int n;\n    cin >> n;\n    cin >> s;\n    for (int i = 0; i < n; ++i) {\n        char c = s[i];\n        if ('a' <= c && c <= 'z') cout << (char)(c - ('a' - 'A'));\n        else if ('A' <= c && c <= 'Z') cout << (char)(c + ('a' - 'A'));\n        else cout << '*';\n    }\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\naBc98",
              "expectedOutput": "AbC**"
            }
          ]
        }
      ]
    },
    "kp3_04": {
      "title": "一维数组",
      "questions": [
        {
          "id": "l3_202306_06",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数组定义为double array[3];，则这个数组占用内存的大小为（ ）。",
          "options": [
            "A. 24",
            "B. 12",
            "C. 6",
            "D. 3"
          ],
          "answer": 0,
          "explanation": "double类型在内存中占8个字节，数组array[3]包含3个double类型的元素，总共占用3×8=24字节的内存空间。这类题的做法是：元素个数乘以单个元素占用的字节数，所以本题选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_07",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下数组定义，符合C++语言语法的是（ ）。",
          "options": [
            "A. int a[];",
            "B. int b['3'];",
            "C. int c[3.0];",
            "D. int[3] d;"
          ],
          "answer": 1,
          "explanation": "'3'的ASCII码是51，所以int b['3']等价于int b[51]，是合法的数组定义。A没有给数组大小，C的下标必须是整数不能是小数，D的书写格式本身错误，故只能选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_09",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言中数组的叙述，不正确的是（ ）。",
          "options": [
            "A. 数组必须先定义后使用。",
            "B. 数组的所有元素在内存中是连续存放的。",
            "C. 除了字符数组，在定义数组时\"[]\"内必须有常数。",
            "D. 不能对数组赋值，但可以对数组的每个基础类型的元素赋值。"
          ],
          "answer": 2,
          "explanation": "数组只要在定义时给出初始化，无论什么类型都可以省略\"[]\"里的大小，例如int a[]={1,2,3}就是合法的。所以C说\"除了字符数组，定义时[]内必须有常数\"不正确，故选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_14",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是\"2\"。\n<pre><code>int array[5]={3,7,5,2,4};\nint min=0;\nfor(i=0;i<5;i++)\n    if(____)\n        min=array[i];\ncout<<min<<endl;\n</code></pre>",
          "options": [
            "A. min > array[i]",
            "B. min < array[i]",
            "C. min = array[i]",
            "D. 以上均不对。"
          ],
          "answer": 3,
          "explanation": "min的初值是0。A的条件0>array[i]对所有元素都不成立，min保持0；B和C都会把min更新成最后一个元素4，三种填法都无法得到2，因此只能选D以上均不对。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_19",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，长度为n的数组，合理的下标范围是从0到n，包括0和n。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "长度为n的数组，下标范围是0到n-1，一共n个位置，下标n已经越界。越界访问不属于合法下标，是常见的编程错误，题干却说范围包括0和n，与正确规则不符，因此说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_21",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，可以使用字符（如'0'）作为数组下标。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "字符在C++中会先按ASCII码转换为整数再参与运算，因此可以用作数组下标，例如int b['0']就等价于int b[48]，这是字符自动转整数的体现，所以题干说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202306_22",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，数组被定义时，它的大小就确定了。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "数组在定义时大小就已确定，之后程序运行过程中不能再改变数组的大小，既不能增加也不能减少元素。这是C++数组的基本特点之一，所以题干说法正确。这是C++数组的基本特性，中途不能扩展或缩小。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_05",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果数组定义为long long array[] = {3, 5, 7, 2};，则数组array占用的字节数为（ ）。",
          "options": [
            "A. 32",
            "B. 16",
            "C. 8",
            "D. 4"
          ],
          "answer": 0,
          "explanation": "数组array共有4个元素：3、5、7、2。long long类型每个元素占8个字节，所以整个数组占用4×8=32字节内存。这类题先数元素个数，再乘单个类型占用的字节数，故本题选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_06",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数组定义为double array[3];，则可合理访问这个数组的元素的下标最大为（ ）。",
          "options": [
            "A. 2",
            "B. 3",
            "C. 23",
            "D. 24"
          ],
          "answer": 0,
          "explanation": "数组下标从0开始编号，长度为3的数组，其元素下标为0、1、2。所以能够合理访问的最大下标是2，恰好等于长度减1，记住\"最大下标等于长度减1\"这个规律，本题选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_07",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下数组定义，符合C++语言语法的是（ ）。",
          "options": [
            "A. double a[];",
            "B. double b[] = {1, 2.0, '3'};",
            "C. double c[3.0];",
            "D. double[] d = new double[3];"
          ],
          "answer": 1,
          "explanation": "B选项带初始化列表{1,2.0,'3'}，三个元素都能转换为double类型，定义合法。A没有指定大小，C的下标必须是整数，D的写法不符合C++语法，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_09",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言中数组的叙述，不正确的是（ ）。",
          "options": [
            "A. 可以定义0个元素的数组。",
            "B. 不能定义-1个元素的数组。",
            "C. 数组下标越界访问会产生编译错误。",
            "D. 程序运行时发生数组下标的越界访问，程序依然可能正常结束。"
          ],
          "answer": 2,
          "explanation": "数组越界访问并不一定会产生编译错误，很多编译器要等程序运行时才会报错，甚至程序可能正常结束。越界属于运行期的未定义行为，编译阶段一般只查语法，所以C的说法不正确，选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_14",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是\"120\"。\n<pre><code>int array[5]={1,2,3,4,5};\nint res=0;\nfor(i=0;i<5;i++)\n    ____;\ncout<<res<<endl;\n</code></pre>",
          "options": [
            "A. res += array[i];",
            "B. res *= array[i];",
            "C. res = array[i];",
            "D. 以上均不对。"
          ],
          "answer": 3,
          "explanation": "要输出120需要把1到5连乘，但res的初值是0，B选项0乘任何数都还是0；A是求和会得到15，C最后得到5，三个选项都得不到120，因此只能选D以上均不对。这道题提醒我们，做累乘前要先检查初始值是否为1。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_15",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的输出是（ ）。\n<pre><code>array[i]=i（i=0..9）；\nfor(p=2;p<10;p++)\n    if(array[p]==p)\n        for(n=p;n<10;n+=p)\n            array[n]=array[n]/p*(p-1);\nres=array[1]+...+array[9];\n</code></pre>",
          "options": [
            "A. 15",
            "B. 28",
            "C. 45",
            "D. 55"
          ],
          "answer": 1,
          "explanation": "这是筛法求欧拉函数的过程。逐轮执行后array变为0,1,1,2,2,4,2,6,4,6，把array[1]到array[9]相加：1+1+2+2+4+2+6+4+6=28，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_19",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，长度为n的数组，访问下标为n的元素会引起编译错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组越界访问一般不会引起编译错误，因为编译阶段只检查语法，越界问题要等到程序运行时才可能暴露，所以题干说\"会引起编译错误\"是错误的。所以题干把越界误当成编译错误是不对的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_21",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，数组下标的大小决定元素在逻辑上的先后顺序，与元素在内存中位置的先后顺序无关。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组元素在内存中连续存放，下标越大元素地址越靠后，下标顺序与内存位置顺序是一致的。两者顺序一致是数组连续存储的必然结果，所以题干说两者无关是错误的。连续存放决定了逻辑顺序与内存顺序一致。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_22",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，定义数组时，[]中必须指定元素个数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "只要定义数组时带上初始化列表，就可以省略[]中的元素个数，例如int d[]={1,2,3}，数组大小由初始化列表的长度自动推断，所以题干说\"必须指定元素个数\"是错误的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202309_26",
          "kp": "kp3_04",
          "type": "coding",
          "difficulty": 2,
          "question": "小杨的储蓄\n【问题描述】小杨共有N个储蓄罐，编号从0到N-1。从第1天开始，小杨每天都会往存钱罐里存钱。具体来说，第i天他会挑选一个存钱罐a[i]，并存入i元钱。过了D天后，他已经忘记每个储蓄罐里都存了多少钱了，你能帮帮他吗？\n【输入描述】输入2行，第一行两个整数N,D；第二行D个整数，其中第i个整数为a[i]（保证0≤a[i]≤N-1）。每行的各个整数之间用单个空格分隔。保证1≤N≤1000；1≤D≤1000。\n【输出描述】输出N个用单个空格隔开的整数，其中第i个整数表示编号为i-1的存钱罐中有多少钱（i=1,...,N）。\n【数据范围】\n1 ≤ N ≤ 1000\n1 ≤ D ≤ 1000\n0 ≤ a_i ≤ N-1",
          "options": null,
          "answer": null,
          "explanation": "思路：开一个大小为N的数组jar记录每个存钱罐的钱数并初始化为0。第i天读到编号a，就把i累加到jar[a]上。最后按编号0到N-1依次输出jar[i]，中间用空格分隔。注意存钱金额是第几天对应的i值，从1开始。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint jar[1000];\nint main() {\n    int n = 0, d = 0;\n    cin >> n >> d;\n    for (int i = 0; i < n; i++) jar[i] = 0;\n    for (int i = 1; i <= d; i++) {\n        int a = 0;\n        cin >> a;\n        jar[a] += i;\n    }\n    cout << jar[0];\n    for (int i = 1; i < n; i++) cout << \" \" << jar[i];\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 3\n0 1 0",
              "expectedOutput": "4 2"
            },
            {
              "input": "3 5\n0 0 0 2 0",
              "expectedOutput": "11 0 4"
            }
          ]
        },
        {
          "id": "l3_202312_01",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++数组的定义中，会丢失数据的是（ ）。",
          "options": [
            "A. char dict_key[] = {'p','t','o'};",
            "B. int dict_value[] = {33,22,11};",
            "C. char dict_name[]={'chen','wang','zhou'};",
            "D. float dict_value[]={3,2,1};"
          ],
          "answer": 2,
          "explanation": "C中{'chen','wang','zhou'}每个元素是含多个字符的字符串字面量，赋给char类型的数组元素时只保留其中一个字符，其余字符全部丢失。A、B、D的初始化都合法且完整，所以选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_08",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>char ch[10]={'1'};\ncout<<ch[2]<<endl;\n</code></pre>",
          "options": [
            "A. 0",
            "B. 1",
            "C. 输出空格",
            "D. 什么也不输出"
          ],
          "answer": 3,
          "explanation": "char ch[10]={'1'}只初始化了ch[0]='1'，其余元素ch[1]到ch[9]自动初始化为'\\0'。ch[2]是'\\0'，直接输出时屏幕上什么也看不到，所以选D什么也不输出。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_20",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++代码将输出0 5，5之后还有一个空格。（ ）\n<pre><code>int list[10]={1,2,3,4,5,6,7,8,9,10};\nfor(i=0;i<10;i++)\n    if(i%5==0)\n        cout<<list[i]<<\" \";\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "满足i%5==0的i是0和5，输出的是list[0]=1和list[5]=6，即输出\"1 6 \"。输出的是数组元素的值而不是下标本身，与题干说的\"0 5\"不符，所以题干说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_21",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码将输出1（ ）。\n<pre><code>int list[10]={1};\ncout<<list<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "cout<<list输出的是数组list的首地址，也就是一个指针值，而不是数组元素的值1。数组名在输出时转换为地址，所以题干说将输出1是错误的。要输出元素值应写list[0]，而不是list。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_22",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++程序将输出1。（ ）\n<pre><code>int arr[10]={1};\ncout<<arr[0]<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "int arr[10]={1}把arr[0]初始化为1，其余元素自动初始化为0，cout<<arr[0]输出的正是1，所以题干说法正确。未初始化的其余元素自动补0，不影响本题。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_23",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++代码，将输出1 3 5 7 9，9之后还有一个空格。（ ）\n<pre><code>for(i=0;i<10;i+=2)\n    cout<<list[i]<<\" \";\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i依次取0、2、4、6、8这些偶数下标，对应list的元素是1、3、5、7、9，每次输出后都带一个空格，所以输出\"1 3 5 7 9 \"，题干说法正确。步长i+=2使下标依次取0、2、4、6、8。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202403_06",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后数组中大于0的数的特征是（ ）。\n<pre><code>int a[20],i;\nfor(i=0;i<20;i++)\n    a[i]=i+1;\nfor(int i=0;i<20;i++)\n    if((a[i]%2)&&(a[i]%3))\n        a[i]=0;\nfor(i=0;i<20;i++)\n    if(a[i])\n        cout<<a[i]<<\" \";\n</code></pre>",
          "options": [
            "2的倍数",
            "3的倍数",
            "能被2或3整除的数",
            "能被2和3同时整除的数"
          ],
          "answer": 2,
          "explanation": "条件是(a[i]%2)&&(a[i]%3)，即既不能被2整除也不能被3整除时才把a[i]清零。所以保留下来(大于0)的数正是能被2或3整除的数，选项C正确。&&两边余数都不为0时才执行清零，所以留下的数必能被2或3整除。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_07",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码后输出的第一个数是（ ）。\n<pre><code>int a[20],i;\nfor(i=0;i<20;i++)\n    a[i]=i+1;\nfor(;i>0;i--)\n    cout<<a[i-1]<<\" \";\n</code></pre>",
          "options": [
            "20",
            "19",
            "1",
            "不确定"
          ],
          "answer": 0,
          "explanation": "第一个for循环结束后i=20，第二个循环从i=20开始递减，先输出a[i-1]即a[19]。a[19]是第20个元素，值为20，所以第一个输出是20。循环结束后，循环变量保留的是循环结束时的值。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_11",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++程序执行的结果是（ ）。\n<pre><code>int a[20],i;\nint cnt=0;\nfor(i=0;i<20;i++)\n    a[i]=i+1;\nfor(;i>1;i--)\n    if((a[i-1]+a[i-2])%3)\n        cnt++;\ncout<<cnt<<endl;\n</code></pre>",
          "options": [
            "5",
            "6",
            "10",
            "12"
          ],
          "answer": 3,
          "explanation": "a[i-1]+a[i-2]=(i)+(i-1)=2i-1。当2i-1不能被3整除时cnt加1。i从20到2逐个检查，统计出不能被3整除的2i-1共有12个，所以输出12。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_22",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，字符数组被定义时，它的大小可以调整。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。数组一旦定义，长度就固定了，不能动态调整大小。C++中数组的大小在编译时确定，例如char s[20]就始终是20个字符，无法改变。如果希望长度可变，应当使用string或vector。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202403_23",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "对定义的数组int a[7]={2,0,2,4,3,1,6}，可以用简单循环就找到其中最小的整数。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。用一层循环从头扫到尾，用一个变量记录当前最小值，遇到更小的就更新，一遍就能找到数组中最小的整数，所以用简单循环完全可以实现。这种打擂台找最值的方法在编程中非常常用。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_10",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写( )，可以使得输出是\"7\"。\n<pre><code>int array[5]={3,7,5,2,4};\nint max=0;\nfor(int i=0;i<5;i++)\n    if(____)\n        max=array[i];\ncout<<max<<endl;\n</code></pre>",
          "options": [
            "max > array[i]",
            "max < array[i]",
            "max = array[i]",
            "以上均不对"
          ],
          "answer": 1,
          "explanation": "这是找最大值：当当前元素array[i]比记录的最大值max还大时，就更新max。所以横线处填max < array[i]，扫描完max就是7，输出7。注意max初始值0要足够小，才能正确覆盖所有数据。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_13",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "某小学男子篮球队要求身高在135厘米以上（不含135厘米）。报名10人身高是125、127、136、134、137、138、126、135、140、145。完善以下代码，求出能招募的人数？\n<pre><code>int count=0;\nfor(int i=0;i<10;i++)\n    ____;\ncout<<count<<endl;\n</code></pre>",
          "options": [
            "count = arr[i]>135? 1: 0;",
            "count += arr[i]>135? 1: 0;",
            "count++;",
            "以上都不对"
          ],
          "answer": 1,
          "explanation": "统计身高大于135的人数，应累加：满足条件就加1，用count += arr[i]>135?1:0。选项A每次循环把count重置成0或1，选项C对所有人都加1，都不正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_20",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "数组的所有元素在内存中可以不连续存放。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。C++数组的元素在内存中一定是连续存放的，按下标依次排布，正因为连续才能用a[i]通过首地址加偏移直接访问。正因为连续存储，数组才能通过首地址加下标直接定位元素。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_21",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "C++中可以对数组和数组的每个基础类型的元素赋值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。可以对数组的每个元素赋值，但不能直接对整个数组赋值，例如int a[3],b[3]; a=b;是不合法的。所以说法不正确。要想复制整个数组，只能逐元素复制或改用vector容器。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_12",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "关于一维数组，下列程序能够正确执行的是（ ）。",
          "options": [
            "int a[10]; int sum=0; for(int i=0;i<=10;i++) sum=sum+a[i];",
            "int a[10]={1,2,3,4,5,6,7,8,9,10}; int sum=0; for(int i=0;i<=10;i++) sum=sum+a[i];",
            "int a[10]={1,2,3,4,5,6,7,8,9,10}; int sum=0; for(int i=0;i<10;i++) sum=sum+a[i];",
            "int a[10]={0}; int sum=0; for(int i=0;i<=10;i++) sum=sum+a[i];"
          ],
          "answer": 2,
          "explanation": "选项C的循环边界i<10没有越界，逻辑上正确（选项A、B、D都访问了不存在的a[10]越界，A还有未初始化问题）。C中sum=sum+a[i]从i=0到9正确求和，答案选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_13",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的程序中，会输出（ ）。\n<pre><code>int a[10]={1,2,3,4,5,6,7,8,9,10};\ncout<<a[10]<<endl;\n</code></pre>",
          "options": [
            "1",
            "0",
            "10",
            "不确定的值"
          ],
          "answer": 3,
          "explanation": "数组a只定义了下标0到9共10个元素，a[10]已经越界。访问越界元素属于未定义行为，输出的值不确定，所以选D。写程序时一定要保证下标落在数组的有效范围内。越界读取的值由内存里恰好存放的内容决定，没有任何保证。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_22",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下列程序将输出1 。（ ）\n<pre><code>int a[10]={1};\ncout<<a[1]<<endl;\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "错误。初始化{1}只给a[0]赋1，其余元素默认补0，所以a[1]=0，输出0而不是1。数组初始化时未写出的位置都会自动填0。所以输出0，题目说输出1是错误的。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_26",
          "kp": "kp3_04",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：数字替换。小杨有一个包含n个数字的序列，他想将其中大于k的数字都替换为序列的最大值，将其中小于k的数字都替换为序列的最小值，等于k的不变，输出替换后的序列。输入：第一行两个正整数n、k，第二行n个数字。输出：替换后的n个数。\n【数据范围】\n1 ≤ n ≤ 100000\n样例输入：5 0\\n-2 -1 0 1 2，样例输出：-2 -2 0 2 2。",
          "options": [],
          "answer": null,
          "explanation": "思路：先遍历一遍求出序列最大值和最小值，再遍历第二遍：大于k的换成最大值，小于k的换成最小值，按空格隔开输出（最后一个数后换行）。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint a[100010];\nint main(){\n    int n,k; cin>>n>>k;\n    for(int i=1;i<=n;i++) cin>>a[i];\n    int mx=a[1], mn=a[1];\n    for(int i=1;i<=n;i++){ mx=max(mx,a[i]); mn=min(mn,a[i]); }\n    for(int i=1;i<=n;i++){\n        if(a[i]>k) a[i]=mx;\n        else if(a[i]<k) a[i]=mn;\n        if(i!=n) cout<<a[i]<<\" \"; else cout<<a[i]<<endl;\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 0\n-2 -1 0 1 2",
              "expectedOutput": "-2 -2 0 2 2"
            }
          ]
        },
        {
          "id": "l3_202503_11",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面枚举法查找最大值索引程序中，横线处应该填写的是（ ）。\n<pre><code>int arr[]={3,7,2,9,5};\nint maxIndex=0;\nfor(int i=1;i<5;i++)\n{\n    ____\n    {\n        maxIndex=i;\n    }\n}\ncout<<maxIndex;\n</code></pre>",
          "options": [
            "if (arr[maxIndex] > arr[i])",
            "if (arr[i]-1 > arr[maxIndex])",
            "if (arr[i]+1 > arr[maxIndex])",
            "if (arr[i] > arr[maxIndex])"
          ],
          "answer": 3,
          "explanation": "要找最大值所在的下标：当arr[i]比当前记录的arr[maxIndex]大时更新maxIndex=i。所以横线处填if(arr[i]>arr[maxIndex])，最终输出最大值9的下标3。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_12",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码的功能是将数组中的奇数和偶数分别放在数组的前半部分和后半部分，横线处应该填入的是（ ）。\n<pre><code>int arr[]={1,2,3,4,5};\nint left=0,right=4;\nwhile(left<right)\n{\n    while(arr[left]%2==1&&left<right)\n        left++;\n    ____;\n    if(left<right)\n        swap(arr[left],arr[right]);\n}\n</code></pre>",
          "options": [
            "while (arr[left] % 2 == 0 && left < right) right--;",
            "while (arr[right] % 2 == 0 && left < right) left--;",
            "while (arr[right] % 2 != 0 && left < right) right--;",
            "while (arr[right] % 2 == 0 && left < right) right--;"
          ],
          "answer": 3,
          "explanation": "left从左往右停在偶数上，right应从右往左停到奇数上，所以要让right在遇到偶数时继续左移，即while(arr[right]%2==0&&left<right) right--，再交换奇偶数位置。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_10",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如何正确定义一个长度为5的整型数组( )",
          "options": [
            "int array = new int[5];",
            "array int[5];",
            "int[] array = {1,2,3,4,5};",
            "int array[5];"
          ],
          "answer": 3,
          "explanation": "C++中一维数组的定义格式是“元素类型 数组名[元素个数]”，int array[5]就是定义包含5个整数的数组。A项new是C#/Java写法，B项语法顺序错误，C项int[]是C#/Java风格，在C++里都不正确。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_03",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++数组的说法，错误的是（ ）。",
          "options": [
            "数组的下标通常从 0 开始。",
            "int arr[5]; 声明了一个包含5个整数的数组。",
            "数组的大小必须在编译时确定，不能使用变量定义大小。",
            "可以通过 arr[5] 来访问 int arr[5]; 数组的最后一个元素。"
          ],
          "answer": 3,
          "explanation": "int arr[5]的下标范围是0到4，最后一个元素是arr[4]，访问arr[5]已经越界，是错误的。A、B、C三个说法都正确：标准C++数组下标从0开始，数组长度需要在编译期确定为常量，不能用变量。所以错误的是D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_06",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++代码后，数组 arr 的内容是（ ）。int arr[4] = {1, 2, 3}; arr[3] = arr[0] + arr[2];",
          "options": [
            "{1, 2, 3, 3}",
            "{1, 2, 3, 4}",
            "{1, 2, 3, 5}",
            "{1, 2, 3, 6}"
          ],
          "answer": 1,
          "explanation": "数组初始化int arr[4]={1,2,3}时，前三个元素是1、2、3，第四个元素arr[3]自动初始化为0。执行arr[3]=arr[0]+arr[2]=1+3=4后，数组变成{1,2,3,4}。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_12",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码试图查找数组中的最大值，划线处应填入（ ）。int findMax(int arr[], int size) { int maxVal = ____; for (int i = 1; i < size; i++) if (arr[i] > maxVal) maxVal = arr[i]; return maxVal; }",
          "options": [
            "0",
            "arr[-1]",
            "arr[0]",
            "size"
          ],
          "answer": 2,
          "explanation": "查找最大值时，maxVal要先初始化为数组第一个元素arr[0]，这样从i=1开始比较，任何更大的元素都会更新maxVal。若初始为0，当数组全是负数时结果会出错；初始为arr[-1]或size都是错误的。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_14",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码中存在几处错误（ ）。const int SIZE = 5; int arr[SIZE]; for (int i = 0; i <= SIZE; i++) { arr[i] = i * 2; } cout << arr[SIZE] << endl;",
          "options": [
            "0处",
            "1处",
            "2处",
            "3处"
          ],
          "answer": 2,
          "explanation": "数组arr的合法下标是0到4。循环条件i<=SIZE使得i可以等于5，此时执行arr[5]=i*2会越界写入，这是第一处错误；最后的cout<<arr[SIZE]输出arr[5]也是越界读取，这是第二处错误，共两处。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202509_17",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，所有全局变量如果没有显式初始化，都会被自动初始化为0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "全局变量存储在静态区，具有静态存储期。即使没有显式初始化，编译器也会自动把它们零初始化，数值型为0。这与函数内部的局部变量不同，局部变量不初始化会得到不确定的垃圾值，所以题干正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_02",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于标准 C++ 一维数组的描述，哪一项是错误的？（ ）",
          "options": [
            "数组的下标从0开始",
            "数组在内存中是连续存放的",
            "数组的长度只能在运行时才能确定",
            "可以在程序中修改数组某个元素的值"
          ],
          "answer": 2,
          "explanation": "标准C++中，普通数组的长度必须是编译期能确定的常量表达式，不能用变量作为长度（变长数组不是标准C++特性）。A、B、D说法都正确：下标从0开始、内存连续、可修改元素。所以错误的是C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_06",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码是一个程序的部分代码，能够正确执行，输出的结果是（ ）。int arr[5] = {1, 2, 3, 4, 5}; int p = arr[1]; cout << (p + 2) << endl;",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 3,
          "explanation": "数组下标从0开始，arr[1]是数组的第二个元素，值等于2。把2赋给整型变量p，然后输出p+2，也就是2+2=4。数组前五个元素依次是1、2、3、4、5，arr[1]对应第二个数2。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_09",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码执行后，数组 arr 的内容是（ ）。int arr[6] = {1, 2, 3, 4, 5, 6}; for (int i = 0; i < 6; i += 2) { arr[i]=arr[i]+arr[i+1]; arr[i+1]=arr[i]-arr[i+1]; arr[i]=arr[i]-arr[i+1]; }",
          "options": [
            "{2,1,4,3,6,5}",
            "{1,2,3,4,5,6}",
            "{3,1,4,2,5,3}",
            "{1,3,2,5,4,6}"
          ],
          "answer": 0,
          "explanation": "循环i从0开始每次加2，处理下标0和1、2和3、4和5这三对相邻元素。对每对元素做三次加减运算：第一次arr[i]=a+b，第二次arr[i+1]=a，第三次arr[i]=b，效果是交换相邻两数。结果变成{2,1,4,3,6,5}。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_13",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码运行后，sum 的结果是（ ）。int arr[5] = {2, 4, 6, 8, 10}; int sum = 0; for (int i = 0; i < 5; i++) { switch (arr[i] % (1|2)) { case 0: sum += 1; break; case 1: sum += 2; break; case 2: sum += 3; break; } }",
          "options": [
            "10",
            "11",
            "14",
            "15"
          ],
          "answer": 1,
          "explanation": "先算1|2=3。每个元素对3取余进入对应case：2%3=2加3，4%3=1加2，6%3=0加1，8%3=2加3，10%3=1加2。把五次累加相加：3+2+1+3+2=11，所以sum的结果是11。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_16",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，数组名不能改变，数组名不能被赋值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "数组名代表数组首元素的地址，它是一个地址常量，不能作为赋值表达式的左值，也不能重新指向其他位置。例如int a[5], b[5];，不能写a=b。所以“数组名不能改变、不能被赋值”的说法是正确的。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202512_21",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中，int a[] = {1, 2, 3, 4, 5}; 可以定义一个包含 5 个元素的整型数组。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用初始化列表定义数组时，可以省略方括号里的大小，编译器会根据花括号里元素的个数自动确定数组大小。{1,2,3,4,5}有5个元素，所以int a[]定义的是包含5个元素的数组，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_11",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下代码后，输出结果是：（ ）。int arr[] = {5, 10, 15, 20, 25, 30}; int count = sizeof(arr) / sizeof(arr[0]); cout << count;",
          "options": [
            "4",
            "6",
            "24",
            "30"
          ],
          "answer": 1,
          "explanation": "sizeof(arr)返回整个数组占的字节数，数组有6个int元素，每个int占4字节，所以sizeof(arr)=24；sizeof(arr[0])=4。24÷4=6，即数组的元素个数，输出6。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_16",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "定义 int arr[5] = {1,2,3}; ，则 arr[3] 的值为 0，arr[5] 是合法下标。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "int arr[5]={1,2,3}只初始化了前3个元素，arr[3]和arr[4]自动初始化为0，所以arr[3]的值是0正确；但数组下标范围是0到4，arr[5]已经越界，不是合法下标，所以整体说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_17",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "定义 double arr[10]; ，未手动初始化时，数组中所有元素的默认值为 0.0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "double arr[10]如果是函数内部的局部数组，没有手动初始化时，数组元素的值是不确定的（垃圾值），不会自动变成0.0。只有全局变量或静态数组才会自动零初始化，所以题干说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_18",
          "kp": "kp3_04",
          "type": "judge",
          "difficulty": 1,
          "question": "定义 int arr[] = {1,2,3}; ，则 sizeof(arr) 的结果为 12（int 占 4 字节）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "int arr[]={1,2,3}由初始化列表确定数组有3个int元素，每个int占4字节，因此sizeof(arr)=3×4=12字节。题干给出的结果12是正确的。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_14",
          "kp": "kp3_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下数组定义，符合 C++ 语法的是（  ）。",
          "options": [
            "int [10] a;",
            "int b['&'];",
            "int c[*];",
            "double d[10.0];"
          ],
          "answer": 1,
          "explanation": "'&'是字符常量，其ASCII码是38，是一个编译期就能确定的整型常量，可以作为数组大小，所以int b['&']合法。A的语法错误，C的*不是常量，D用浮点数10.0作数组大小不合法。选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp3_07": {
      "title": "模拟法",
      "questions": [
        {
          "id": "l3_202306_26",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 2,
          "question": "春游\n【问题描述】老师带领同学们春游。已知班上有n位同学，每位同学有从0到n-1的唯一编号。到了集合时间，老师确认是否所有同学都到达了集合地点，就让同学们报出自己的编号。到达的同学都会报出编号，不会报出别人的编号，但有的同学很顽皮，会多次报出。你能帮老师找出有哪些同学没有到达吗？\n【输入描述】输入包含2行。第一行包含两个整数n和m，表示班级有n位同学，同学们共有m次报出编号。约定2≤n,m≤1000。第二行包含m个整数，分别为m次报出的编号。约定所有编号都在合理范围内。\n【输出描述】输出一行。如果所有同学都到达，则输出n；否则由小到大输出所有未到达的同学编号，空格分隔。\n【数据范围】\n2 ≤ n ≤ 1000\n2 ≤ m ≤ 1000",
          "options": null,
          "answer": null,
          "explanation": "思路：用bool数组arrive记录每位同学是否报到，初始全为false；每次读到一个编号就把对应位置置true；最后从0到n-1扫描，把仍为false的下标按顺序输出，并用all变量记录是否全部到达；若全部到达则输出n。属于典型的模拟加一维数组题。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nbool arrive[1000];\nint main() {\n    int n = 0, m = 0;\n    cin >> n >> m;\n    for (int i = 0; i < n; i++)\n        arrive[i] = false;\n    for (int i = 0; i < m; i++) {\n        int code = 0;\n        cin >> code;\n        arrive[code] = true;\n    }\n    bool all = true;\n    for (int i = 0; i < n; i++) {\n        if (!arrive[i]) {\n            if (all) { cout << i; all = false; }\n            else cout << \" \" << i;\n        }\n    }\n    if (all) cout << n;\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 3\n0 2 1",
              "expectedOutput": "3"
            },
            {
              "input": "3 5\n0 0 0 0 0",
              "expectedOutput": "1 2"
            }
          ]
        },
        {
          "id": "l3_202312_04",
          "kp": "kp3_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码输出是（ ）。\n<pre><code>int temp=0;\nfor(i=1;i<7;i++)\n    for(j=1;j<5;j++)\n        if(i/j==2)\n            temp++;\ncout<<temp<<endl;\n</code></pre>",
          "options": [
            "A. 10",
            "B. 8",
            "C. 4",
            "D. 3"
          ],
          "answer": 2,
          "explanation": "数满足i/j==2的(i,j)：j=1时i=2；j=2时i=4、5；j=3时i=6。共(2,1),(4,2),(5,2),(6,3)四组，temp累加到4，输出4，选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_11",
          "kp": "kp3_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++程序执行的结果是（ ）。\n<pre><code>int cnt=0;\nfor(i=0;i<=20;i++)\n    if(i%3==0&&i%5==0)\n        cnt++;\ncout<<cnt;\n</code></pre>",
          "options": [
            "A. 2",
            "B. 3",
            "C. 5",
            "D. 4"
          ],
          "answer": 0,
          "explanation": "同时被3和5整除等价于被15整除。0到20之间能被15整除的数只有0和15两个，求公倍数要转化为求最小公倍数的倍数，所以cnt=2，输出2，本题选A。这道题只需数出15的倍数个数即可。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_27",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 2,
          "question": "单位转换\n【问题描述】小杨这周的数学作业是做单位转换，喜欢编程的小杨决定编程帮他解决这些问题。小杨只学了长度单位和重量单位，具体来说：长度单位包括千米（km）、米（m）、毫米（mm），它们之间的关系是：1km=1000m=1000000mm。重量单位包括千克（kg）、克（g）、毫克（mg），它们之间的关系是：1kg=1000g=1000000mg。小杨的作业只涉及将更大的单位转换为更小的单位，也就是说，小杨的作业只会包含如下题型：米转换为毫米，千米转换为毫米，千米转换为米，克转换为毫克，千克转换为毫克，千克转换为克。现在，请你帮忙完成单位转换的程序。\n【输入描述】输入的第一行为一个整数n，表示题目数量。接下来n行，每行一个字符串，表示转换单位的题目，格式为 x 单位1 = ? 单位2。其中，x为一个不超过10^9的非负整数，单位1和单位2分别为两个单位的英文缩写，保证它们都是长度单位或都是重量单位，且单位1比单位2更大。例如，如果题目需要你将1km转换为1mm，则输入为 1 km = ? mm。\n【输出描述】输出n行，依次输出所有题目的答案，输出时，只需要将输入中的?代入答案，其余部分一字不差地输出即可。由于小杨的题目只涉及将更大的单位转换为更小的单位，并且输入的x是整数，因此答案一定也是整数。\n【数据范围】\n0 ≤ x ≤ 10^9",
          "options": null,
          "answer": null,
          "explanation": "思路：以最小单位（毫米/毫克）为基准给每个单位定一个倍数：单字母单位m、g为1000，k开头的km、kg为1000000，双字母mm、mg为1。读入x、单位1、单位2后，答案=x×get_base(单位1)/get_base(单位2)，再按原格式原样输出。属于模拟题。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\nint get_base(char *s) {\n    if (strlen(s) == 1) return 1000;\n    return s[0] == 'k' ? 1000000 : 1;\n}\nint main() {\n    int T;\n    scanf(\"%d\", &T);\n    while (T--) {\n        int x;\n        char s1[5], s2[5];\n        scanf(\"%d\", &x);\n        scanf(\"%s\", s1);\n        scanf(\"%s\", s2), scanf(\"%s\", s2), scanf(\"%s\", s2);\n        printf(\"%d %s = %d %s\\n\", x, s1, x * get_base(s1) / get_base(s2), s2);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n1 km = ? mm\n1 m = ? mm",
              "expectedOutput": "1 km = 1000000 mm\n1 m = 1000 mm"
            },
            {
              "input": "5\n100 m = ? mm\n1000 km = ? m\n20 kg = ? g\n200 g = ? mg\n0 kg = ? mg",
              "expectedOutput": "100 m = 100000 mm\n1000 km = 1000000 m\n20 kg = 20000 g\n200 g = 200000 mg\n0 kg = 0 mg"
            }
          ]
        },
        {
          "id": "l3_202406_24",
          "kp": "kp3_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面C++代码后，输出的结果不可能是89781。（ ）\n<pre><code>srand(time(NULL));\nwhile(i<=5)\n{\n    int a=rand()%10;\n    if(a%3==(i+1)%3)\n        s[i++]=a;\n}\nfor(int i=1;i<=5;i++)\n    cout<<s[i];\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。第5位s[5]的a必须满足a%3==0，只能是0、3、6、9，而89781最后一位是1，1%3=1不满足，所以这个数不可能出现。所以89781这种末尾数字不满足条件的情况一定不会出现。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_01",
          "kp": "kp3_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码中，输出结果是（ ）。\n<pre><code>double a=0.9;\ndouble b=1.0;\nif(((b-a)==0.1))\n    cout<<\"Equal\";\nelse\n    cout<<\"Not equal\";\n</code></pre>",
          "options": [
            "Equal",
            "Not equal",
            "程序不能正确执行",
            "没有输出"
          ],
          "answer": 1,
          "explanation": "浮点数在内存中按二进制近似存储，1.0-0.9的结果不是精确的0.1，而是0.09999999999999998，与0.1比较不相等，所以输出Not equal。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_11",
          "kp": "kp3_07",
          "type": "choice",
          "difficulty": 1,
          "question": "陈A歹种植一批农作物，第一天需要浇水一次，随后的两天（第2、第3天），每天需要浇水2次，再随后的3天（第4、第5、第6天），需要每天浇水3次，这样持续下去，随后的n天，每天需要浇水n次。请问在100天里，总共浇了多少次水（ ）。",
          "options": [
            "994",
            "996",
            "995",
            "945"
          ],
          "answer": 3,
          "explanation": "前13组共浇1+2+...+13天，每天浇水次数等于组号，共1^2+2^2+...+13^2=819次；第92到100天共9天每天浇14次，加126次。819+126=945。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202409_26",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：平衡序列。小杨有一个包含n个正整数的序列，判断序列是否平衡：存在一个位置k，使得第1到第k个数的总和等于第k+1到第n个数的总和。输入：第一行测试用例组数t；每组先给n，再给n个正整数。输出：平衡输出Yes否则No。\n【数据范围】\n1 ≤ n ≤ 10000\n样例输入：3\\n3\\n1 2 3\\n4\\n2 3 1 4\\n5\\n1 2 3 4 5，样例输出：Yes\\nYes\\nNo。",
          "options": [],
          "answer": null,
          "explanation": "思路：先求出整个序列的和sum。依次累加前k项得到tot，只要存在tot*2==sum，就说明前k项和等于后半段和，输出Yes；扫完都没有则输出No。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint a[10010];\nint main(){\n    int t; cin>>t;\n    while(t--){\n        int n; cin>>n;\n        int sum=0;\n        for(int i=1;i<=n;i++){ cin>>a[i]; sum+=a[i]; }\n        int tot=0,fl=0;\n        for(int i=1;i<n;i++){\n            tot+=a[i];\n            if(tot*2==sum){ fl=1; break; }\n        }\n        if(fl) cout<<\"Yes\\n\"; else cout<<\"No\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3\n1 2 3\n4\n2 3 1 4\n5\n1 2 3 4 5",
              "expectedOutput": "Yes\nYes\nNo"
            }
          ]
        },
        {
          "id": "l3_202412_27",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：打印数字。小杨为数字0、1、2、3设计了一款表示形式，每个数字占用一个5x5的网格（用*和.表示），请你将给定的数字串转换为对应的表示形式输出。输入：一行一个正整数n（仅由数字0、1、2、3组成）。输出：5行，每行是对应数字的表示形式。样例输入：12230，样例输出：****.....................\\n****.****.****.****..***.\\n****.................***.\\n****..****.********..***.\\n****.....................。",
          "options": [],
          "answer": null,
          "explanation": "思路：对数字串中的每个字符，按它所在的行（0到4行）拼接出对应的5个字符（.或*）。依次处理每个数字，把当前行的内容连起来输出，共输出5行。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <string>\nusing namespace std;\nint main(){\n    string n; cin>>n;\n    for(int row=0; row<5; row++){\n        string line=\"\";\n        for(char d : n){\n            if(d=='0') line += (row==0||row==4)?\".....\":\".***.\";\n            else if(d=='1') line += \"****.\";\n            else if(d=='2'){\n                if(row==0) line+=\".....\"; else if(row==1) line+=\"****.\";\n                else if(row==2) line+=\".....\"; else if(row==3) line+=\".****\"; else line+=\".....\";\n            }\n            else {\n                if(row==0) line+=\".....\"; else if(row==1) line+=\"****.\";\n                else if(row==2) line+=\".....\"; else if(row==3) line+=\"****.\"; else line+=\".....\";\n            }\n        }\n        cout<<line<<endl;\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "12230",
              "expectedOutput": "****.....................\n****.****.****.****..***.\n****.................***.\n****..****.********..***.\n****....................."
            }
          ]
        },
        {
          "id": "l3_202503_22",
          "kp": "kp3_07",
          "type": "judge",
          "difficulty": 1,
          "question": "该段程序将n不停地除以2，并输出此时的商和余数，直到n=0为止。\n<pre><code>long long n;\ncin>>n;\nwhile(n!=0)\n{\n    cout<<n/2<<' '<<n%2<<'\\n';\n    n/=2;\n}\n</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。循环体先输出n/2的商和n%2的余数，再把n更新为n/2，一直重复直到n变成0为止，与描述完全一致。这个程序模拟的正是除2取余的过程。直到n变成0时循环结束，正好把每一位都处理完。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_12",
          "kp": "kp3_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下程序模拟了一个简单的小球反弹过程，横线处应该填入的是（ ）。\n<pre><code>int height=10, distance=0;\nfor(i=1;i<=5;i++)\n{\n    ____;\n    height/=2;\n    distance+=height;\n}\n</code></pre>",
          "options": [
            "distance += height/2;",
            "distance += height;",
            "distance += height*2;",
            "distance += height+1;"
          ],
          "answer": 1,
          "explanation": "每次落地前，小球先从当前高度height下落，所以distance要先加上height；然后height减半，小球反弹上升到新高度height，distance再加上height。横线处位于height/=2之前，应填distance += height。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_27",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "分糖果：有n位小朋友排成一队等待老师分糖果。第i位小朋友想要至少a[i]颗糖果，并且分给他的糖果数量必须比前一位小朋友多，否则他不开心。求最少需要准备多少颗糖果才能让所有小朋友都开心。输入：第一行一个正整数n；第二行n个正整数a[i]。输出：一行一个整数，表示最少需要准备的糖果数量。\n【数据范围】\n1 ≤ n ≤ 1000\n",
          "options": [],
          "answer": null,
          "explanation": "思路：从前到后遍历。第i位至少分max(前一位+1, a[i])颗，这样既满足自己要求又比前一位多。逐位累加即可得到最少总数，答案可能超过int范围要用long long。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1005;\nint n, a[N];\nlong long ans;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%d\", &a[i]);\n        a[i] = max(a[i - 1] + 1, a[i]);\n        ans += a[i];\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 4 3 3",
              "expectedOutput": "16"
            },
            {
              "input": "15\n314 15926 53589793 238462643 383279502 8 8 4 1 9 7 1 6 9 3",
              "expectedOutput": "4508143253"
            }
          ]
        },
        {
          "id": "l3_202509_26",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "数组清零：小A有一个由n个非负整数构成的数组。他重复以下操作直到数组全部为0：①找到最大的整数并记其下标，若有多个最大值选下标最大的；②从数组所有非零整数中找到最小的整数；③把①找到的最大整数减去②找到的最小整数。问需要多少次操作才能让数组全部变成0。输入：第一行一个正整数n；第二行n个非负整数。输出：一行一个正整数，表示需要的操作次数。\n【数据范围】\n1 ≤ n ≤ 100\n",
          "options": [],
          "answer": null,
          "explanation": "思路：直接按题意模拟。每一轮用两个循环分别找最大元素（取下标最大）和最小非零元素，把最大值减去最小值并计数，直到最大值已为0（即全部为0）时停止。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nconst int N = 105;\nint n;\nint a[N];\nint cnt;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    while (1) {\n        int mx = n;\n        for (int i = 1; i <= n; i++)\n            if (a[i] >= a[mx]) mx = i;\n        if (a[mx] == 0) break;\n        int mn = a[mx];\n        for (int i = 1; i <= n; i++)\n            if (a[i] > 0) mn = min(mn, a[i]);\n        a[mx] -= mn;\n        cnt++;\n    }\n    printf(\"%d\\n\", cnt);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n2 3 4",
              "expectedOutput": "7"
            },
            {
              "input": "5\n1 3 2 2 5",
              "expectedOutput": "13"
            }
          ]
        },
        {
          "id": "l3_202509_27",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "日历制作：请按格式输出2025年某个月的日历。第一行输出 MON TUE WED THU FRI SAT SUN（周一至周日），接下来若干行依次输出该月包含的日期，日期的个位要与对应星期缩写最后一个字母对齐（已知2025年9月1日是星期一）。输入：一行一个正整数m，表示月份。输出：2025年m月的日历。\n【数据范围】\n1 ≤ m ≤ 12\n",
          "options": [],
          "answer": null,
          "explanation": "思路：先算出该月1号是星期几（w，1对应周一），再按周输出。每个日期用宽度3右对齐打印，星期w每周递增，w变回1时换行；1号前的空格用4个空格填充。注意12月为参考月，9月1号是周一。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\nusing namespace std;\nint days[20] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};\nint main() {\n    int m;\n    scanf(\"%d\", &m);\n    printf(\"MON TUE WED THU FRI SAT SUN\\n\");\n    int d = days[m];\n    int w = 1;\n    if (m > 9) {\n        for (int i = 9; i < m; i++) w = (w + days[i] - 1) % 7 + 1;\n    } else if (m < 9) {\n        for (int i = 8; i >= m; i--) w = ((w - days[i]) % 7 + 7) % 7;\n        if (w == 0) w = 7;\n    }\n    for (int i = 1; i < w; i++) printf(\"    \");\n    for (int i = 1; i <= d; i++) {\n        printf(\"% 3d\", i);\n        w = w % 7 + 1;\n        if (w == 1 || i == d)\n            printf(\"\\n\");\n        else\n            printf(\" \");\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "9",
              "expectedOutput": "MON TUE WED THU FRI SAT SUN\n  1   2   3   4   5   6   7\n  8   9  10  11  12  13  14\n 15  16  17  18  19  20  21\n 22  23  24  25  26  27  28\n 29  30"
            },
            {
              "input": "6",
              "expectedOutput": "MON TUE WED THU FRI SAT SUN\n                          1\n  2   3   4   5   6   7   8\n  9  10  11  12  13  14  15\n 16  17  18  19  20  21  22\n 23  24  25  26  27  28  29\n 30"
            }
          ]
        },
        {
          "id": "l3_202512_27",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "小杨的智慧购物：小杨要买M种不同的文具，商店有N件文具，每件文具有一个种类编号K（1到M）和价格P。对每种文具只买最便宜的那一件，求买齐M种文具的总花费。输入：第一行两个正整数M、N；接下来N行每行两个正整数K和P，分别表示种类编号和价格。输出：一行一个整数，表示总花费。\n【数据范围】\n1 ≤ M ≤ 100000\n",
          "options": [],
          "answer": null,
          "explanation": "思路：用数组min_price[k]记录每种文具目前看到的最便宜价格，初始设为一个很大的数。读入每件文具时更新对应种类的最小值，最后把M个种类的最小值相加即总花费。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cstring>\nusing namespace std;\nint min_price[100005];\nint main() {\n    int M, N;\n    cin >> M >> N;\n    for (int i = 0; i <= M; i ++) min_price[i] = 1000000000;\n    for (int i = 0; i < N; ++i) {\n        int K, P;\n        cin >> K >> P;\n        min_price[K] = min(min_price[K], P);\n    }\n    int total_cost = 0;\n    for (int k = 1; k <= M; ++k) total_cost += min_price[k];\n    cout << total_cost;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 5\n1 1\n1 2\n1 1\n2 3\n2 10",
              "expectedOutput": "4"
            }
          ]
        },
        {
          "id": "l3_202606_24",
          "kp": "kp3_07",
          "type": "judge",
          "difficulty": 1,
          "question": "代码逐行复刻手工运算步骤，中间不能增加任何判断逻辑，否则就不属于模拟算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "模拟算法是严格按照题目描述的过程，用程序一步步复现每一步操作，完全可以在过程中使用判断、循环等逻辑，并不要求“不能加任何判断”。题干把模拟算法理解得太死板，说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_26",
          "kp": "kp3_07",
          "type": "coding",
          "difficulty": 1,
          "question": "加密：小杨有一串数字想变成另一串数字。他有一本密码本，密码本依次告诉你0、1、2、…、9每个数字要变成什么。请按照密码本把原来每个数字都换成新数字后输出。输入共三行：第一行一个整数n，表示有多少个数字需要加密；第二行n个待加密的数字；第三行10个数字，第i个数字表示数字i-1加密后变成什么。输出：加密后的数字，空格分隔。\n【数据范围】\n1 ≤ n ≤ 20000\n",
          "options": [],
          "answer": null,
          "explanation": "思路：开一个keys数组读入10个密码（keys[i]表示数字i变成keys[i]），再读入n个原数字，逐个输出keys[a[i]]即可完成映射。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint a[20010];\nint keys[11];\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 0; i < n; ++i) cin >> a[i];\n    for (int i = 0; i < 10; ++i) cin >> keys[i];\n    for (int i = 0; i < n; ++i) cout << keys[a[i]] << ' ';\n    cout << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "7\n0 2 0 3 4 1 9\n9 0 1 2 3 4 5 6 7 8",
              "expectedOutput": "9 1 9 2 3 0 8"
            }
          ]
        }
      ]
    },
    "kp3_06": {
      "title": "枚举法",
      "questions": [
        {
          "id": "l3_202309_23",
          "kp": "kp3_06",
          "type": "judge",
          "difficulty": 1,
          "question": "著名的哥德巴赫猜想：任一大于2的偶数都可写成两个素数之和。我们可以通过枚举法来证明它。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "枚举法只能逐一检查有限多个情况，而偶数有无穷多个，无法一一枚举验证。数学猜想需要严格的证明，不能用有限次的枚举来代替，所以题干说法错误。数学中的无限命题无法靠有限枚举来证明。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l3_202312_26",
          "kp": "kp3_06",
          "type": "coding",
          "difficulty": 2,
          "question": "小猫分鱼\n【问题描述】海滩上有一堆鱼，n只小猫来分。第一只小猫把这堆鱼平均分为n份，多了i个，这只小猫把多的i个扔入海中，拿走了一份。第二只小猫接着把剩下的鱼平均分成n份，又多了i个，小猫同样把多的i个扔入海中，拿走了一份。第三、第四、……、第n只小猫仍是最终剩下的鱼分成n份，扔掉多了的i个，并拿走一份。编写程序，输入小猫的数量n以及每次扔到海里的鱼的数量i，输出海滩上最少的鱼数，使得每只小猫都可吃到鱼。例如：两只小猫来分鱼，每次扔掉鱼的数量为1，为了每只小猫都可吃到鱼，可令第二只小猫需要拿走1条鱼，则此时待分配的有3条鱼。第一只小猫待分配的鱼有7条。\n【输入描述】总共2行。第一行一个整数n，第二行一个整数i。\n【输出描述】一行一个整数，表示满足要求的海滩上最少的鱼数。",
          "options": null,
          "answer": null,
          "explanation": "思路：设第k只小猫操作前的鱼数为F[k]，则F[k]=n×m[k]+i，操作后剩(n-1)×m[k]=F[k+1]。反过来F[k]=F[k+1]/(n-1)×n+i。从小往大枚举最后一只小猫的份数k，令ans=k×n+i作为最后一只小猫前的鱼数，再逐只往前推，途中只要出现ans不能被(n-1)整除就换下一个k，第一个能推回第一只小猫的k对应的ans就是答案。属于枚举法。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <stdio.h>\nint main() {\n    long long n, i, j, k, ans;\n    bool flag;\n    scanf(\"%lld%lld\", &n, &i);\n    k = 1;\n    while (true) {\n        flag = true;\n        ans = k * n + i;\n        for (j = 1; j < n; j++) {\n            if (ans % (n - 1) != 0) {\n                flag = false;\n                break;\n            }\n            ans = ans / (n - 1) * n + i;\n        }\n        if (flag) break;\n        k++;\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n1",
              "expectedOutput": "7"
            },
            {
              "input": "3\n1",
              "expectedOutput": "25"
            }
          ]
        },
        {
          "id": "l3_202403_27",
          "kp": "kp3_06",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：完全平方数。小杨有一个包含n个非负整数的序列，想知道其中有多少对下标组合(i,j)（i<j）使得a[i]+a[j]是完全平方数。输入：第一行一个整数n，第二行n个非负整数。输出：满足条件的对数。\n【数据范围】\n1 ≤ n ≤ 1000\n样例输入：5\\n1 4 3 3 5，样例输出：3。",
          "options": [],
          "answer": null,
          "explanation": "思路：用两层循环枚举所有下标对(i,j)，对每一对求出和m，判断m是不是完全平方数。判断方法：令t=int(sqrt(m))，若t*t==m则m是完全平方数，计数器加1。n不大时双循环足够。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 1010;\nint a[N];\nint main(){\n    int n;\n    cin >> n;\n    for(int i=1;i<=n;i++) cin>>a[i];\n    int ans=0;\n    for(int i=1;i<=n;i++)\n        for(int j=i+1;j<=n;j++){\n            int m = a[i]+a[j];\n            int t = sqrt(m + 1e-7);\n            if(t*t==m) ans++;\n        }\n    cout<<ans<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5\n1 4 3 3 5",
              "expectedOutput": "3"
            }
          ]
        },
        {
          "id": "l3_202406_11",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨在做数学题，题目要求找出从1到35中能被7整除的数字，即[7, 14, 21, 28, 35]，则横线处应填入哪个代码？\n<pre><code>for(int i=1;i<=35;i++)\n    if(i%7==0)\n        ____;\n</code></pre>",
          "options": [
            "arr[count++] = i;",
            "arr[i] = count++;",
            "arr[i] = count;",
            "arr[count] = count++;"
          ],
          "answer": 0,
          "explanation": "能被7整除时要把i存进数组并让count加1，用arr[count++] = i最合适：先存i到arr[count]，再让count自增，依次记录下7、14、21、28、35。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_25",
          "kp": "kp3_06",
          "type": "judge",
          "difficulty": 1,
          "question": "把整数3025从中剪开分为30和25两个数，此时再将这两数之和平方，计算结果又等于原数。(30+25)×(30+25)=55×55=3025，这样的数叫\"雷劈数\"。可以使用枚举的方法求出所有符合这样条件的四位数。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正确。可以把所有四位数逐一枚举，对每个数尝试从不同位置剪开，检验平方和是否等于原数，用枚举法完全可以求出所有雷劈数。枚举法虽然直观较慢，但数据范围有限时一定可行。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202406_27",
          "kp": "kp3_06",
          "type": "coding",
          "difficulty": 1,
          "question": "编程题：寻找倍数。小杨有一个包含n个正整数的序列，想知道是否存在i使得a[i]是序列中所有数的倍数。输入：第一行测试用例组数t；每组先给n，再给n个正整数。输出：存在则输出Yes，否则输出No。\n【数据范围】\n1 ≤ n ≤ 100000\n样例输入：2\\n3\\n1 2 4\\n5\\n1 2 3 4 5，样例输出：Yes\\nNo。",
          "options": [],
          "answer": null,
          "explanation": "思路：如果某个数是所有数的倍数，那么它至少是所有数中的最大值。所以先求出序列最大值x，再检查x能否整除所有数，若能全部整除输出Yes，否则输出No。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N=1e5+10;\nint a[N];\nint main(){\n    int t; cin>>t;\n    while(t--){\n        int n; cin>>n;\n        int x=0;\n        for(int i=1;i<=n;i++){ cin>>a[i]; x=max(x,a[i]); }\n        int fl=0;\n        for(int i=1;i<=n;i++) if(x%a[i]) fl=1;\n        if(fl) cout<<\"No\\n\"; else cout<<\"Yes\\n\";\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n3\n1 2 4\n5\n1 2 3 4 5",
              "expectedOutput": "Yes\nNo"
            }
          ]
        },
        {
          "id": "l3_202409_14",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "有ABCD4个人，其中一个是小偷，每个人说一句话，只有小偷说的是假话。A说：不是我。B说：是C。C说：是D。D说：C瞎说。请问谁是小偷（ ）。",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 2,
          "explanation": "假设C是小偷：A说不是A（真）、B说是C（真）、D说C瞎说（真，C是小偷确实在撒谎），而C自己说是D是假话，所有条件都满足。所以小偷是C。把每个嫌疑人都假设一遍，排除矛盾就能找到小偷。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_12",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "想要计算从数字n到数字m之间（包含n和m）有多少个数字d出现，下列程序哪个能够实现（ ）。",
          "options": [
            "int n,m,res,d; cin>>n>>m>>d; for(int i=n+1;i<=m;i++){int temp=i; while(temp){ if(temp%10==d) res++; temp/=10; }}",
            "int n,m,res,d; cin>>n>>m>>d; for(int i=n;i<=m;i++){int temp=i; while(temp){ if(temp%10=d) res++; temp/=10; }}",
            "int n,m,res=0,d; cin>>n>>m>>d; for(int i=n;i<=m;i++){int temp=i; while(temp){ if(temp%10==d) res++; temp/=10; }}",
            "int n,m,res=0,d; cin>>n>>m>>d; for(int i=n;i<=m;i++){ while(temp){ if(temp%10==d) res++; temp/=10; }}"
          ],
          "answer": 2,
          "explanation": "C正确：res初始化为0，循环从n到m包含端点，对每个数用while拆出每一位判断是否等于d。A从n+1开始漏掉n且res未初始化，B用=赋值错误，D中temp未定义。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_13",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "兔子五元一只，鸡三元一只，小鸭子一元三只，现在你有一百元要买一百只，兔子、鸡、鸭子，问兔子、鸡、鸭子各买多少只，每种必须至少一只，下列哪个程序能实现。（ ）。",
          "options": [
            "三重循环i,j,k到100，条件i+j+k==100且25*i+10*j+k==300",
            "三重循环i,j,k到100，条件i+j+k==100且20*i+10*j+k==300",
            "三重循环i到20、j到34、k到20，条件i+j+k==100且15*i+9*j+k==300",
            "三重循环i,j,k到100，条件i+j+k==100且15*i+9*j+k==300"
          ],
          "answer": 3,
          "explanation": "设兔子i只、鸡j只、鸭k只，则i+j+k=100且5i+3j+k/3=100，两边乘3得15i+9j+k=300。D用15*i+9*j+k==300且循环范围足够，能找出所有解；A、B金额不对，C的k上限20太小漏解。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202412_14",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "求小于等于N的素数的方法中，有一种方法是将所有从2到它本身减1的数都除一遍，如果不能整除，就是素数。下列哪个程序，体现了这种方法（ ）。",
          "options": [
            "if(N>=3){cout<<2<<endl; for(int i=2;i<=N;i++){ for(int j=2;j<i;j++){ if(i%j!=0) flag=1; } if(flag==0) cout<<i<<endl; flag=0; }}",
            "if(N>=2){ for(int i=3;i<=N;i++){ for(int j=2;j<i;j++){ if(i%j==0) flag=1; } if(flag==0) cout<<i<<endl; flag=0; }}",
            "if(N>=2){ cout<<2<<endl; for(int i=3;i<=N;i++){ for(int j=2;j<i;j++){ if(i%j==0) flag=1; } if(flag==0) cout<<i<<endl; flag=0; }}",
            "if(N>=2){ cout<<2<<endl; for(int i=2;i<=N;i++){ for(int j=2;j<=i;j++){ if(i%j==0) flag=1; } if(flag==0) cout<<i<<endl; flag=0; }}"
          ],
          "answer": 2,
          "explanation": "试除法：i能被2到i-1中任何一个整除就置flag=1，扫描完flag仍为0说明是素数并输出。C先单独输出2，再从3开始用内层j<i试除，方法正确；A判反了，B漏掉2，D内层到i会误判。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202503_15",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "有 n 个正整数，假设一个正整数是美丽数字当且仅当该正整数是 9 的倍数但不是 8 的倍数。下面的程序是编写计算 n 个正整数中美丽数字的数量，横线处应该填入的是（ ）。\n<pre><code>for(int i=1;i<=n;i++)\n{\n    cin>>a;\n    ____;\n    cnt++;\n}\n</code></pre>",
          "options": [
            "if (a % 9 != 0 && a % 8 != 0)",
            "if (a % 9 == 0 & a % 8 == 0)",
            "if (a % 9 == 0 && a % 8 != 0)",
            "if (a % 9 == 0 & a % 8 != 0)"
          ],
          "answer": 2,
          "explanation": "美丽数字要同时满足能被9整除（a%9==0）且不能被8整除（a%8!=0），两个条件用&&连接。C正确；A少一个条件，B、D逻辑不对。&&表示两个条件必须同时成立才算数。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202506_11",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "以下程序使用枚举法（穷举法）求解满足条件的三位数，横线处应该填入的是（ ）。\n<pre><code>for(i=100;i<=999;i++)\n{\n    int a=i/100;\n    ____;\n    int c=i%10;\n    if(a*a+b*b==c*c)\n        count++;\n}\n</code></pre>",
          "options": [
            "int b = (i / 10) / 10;",
            "int b = (i / 10) % 10;",
            "int b = (i % 10) / 10;",
            "int b = (i % 10) % 10;"
          ],
          "answer": 1,
          "explanation": "三位数i的百位是i/100，个位是i%10，十位则用(i/10)%10求出：先除以10去掉个位，再对10取余得到十位。例如i=345，i/10=34，34%10=4，正是345的十位数字。故选B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_13",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "以下问题中，最不适合用枚举法解决的是：（  ）",
          "options": [
            "找出 1~100 之间所有能被 7 整除的数",
            "找出 100~200 之间的所有质数",
            "计算 1+2+3+…+1000 的和",
            "找出三位数中个位、十位、百位数字之和等于 10 的数"
          ],
          "answer": 2,
          "explanation": "计算1+2+…+1000可以直接套用等差数列求和公式n(n+1)/2=1000×1001÷2，一步算出答案，根本不需要枚举。其余三项都要逐个检查范围内的候选数，才适合用枚举法，所以选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202603_14",
          "kp": "kp3_06",
          "type": "choice",
          "difficulty": 1,
          "question": "用枚举法解决“鸡兔同笼问题：头共 35 个，脚共 94 只，求鸡和兔的数量”，以下枚举逻辑最合理的是：（  ）",
          "options": [
            "枚举鸡的数量 x（0~35），兔的数量 y=35-x ，判断 2*x + 4*y == 94",
            "枚举兔的数量 y（0~94），鸡的数量 x=35-y ，判断 2*x + 4*y == 94",
            "枚举所有整数 x（0-100）和 y（0-100），判断 x+y==35 && 2*x+4*y==94",
            "枚举脚的总数 sum（0~94），判断 sum == 94"
          ],
          "answer": 0,
          "explanation": "头数固定35个，只要确定鸡数x，兔数就唯一确定为y=35-x，再验证脚数2x+4y==94即可。A只枚举x从0到35，一重循环范围合理，效率最高。B、C范围过大，D枚举脚总数没有意义，选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l3_202606_19",
          "kp": "kp3_06",
          "type": "judge",
          "difficulty": 1,
          "question": "判断某个数是否是质数，枚举范围可适当缩小（遍历到 √n 而非 n），提升效率。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "判断质数时，如果n有大于√n的因子，那么必然同时存在一个小于√n的配对因子，所以只需要枚举2到√n去试除就够了。把枚举范围从n缩小到√n可以大幅减少循环次数，提升效率，说法正确。",
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
