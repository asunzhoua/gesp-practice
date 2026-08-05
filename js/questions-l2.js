const QUESTION_BANK = {
  "knowledgePoints": {
    "kp2_01": {
      "title": "计算机存储与网络",
      "questions": [
        {
          "id": "l2_202303_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下存储器中的数据不会受到附近强磁场干扰的是（　）",
          "options": [
            "硬盘",
            "U盘",
            "内存",
            "光盘"
          ],
          "answer": 3,
          "explanation": "光盘是光存储介质，靠激光改变涂覆层形状记录数据，不受磁场影响；硬盘是磁介质，U盘和内存是电子电路，强磁场都会干扰或破坏其数据，所以选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "明明和笑笑在“小庙会”上分别抽到一个4GB和4096MB的U盘，容量大的盘是笑笑的（　）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "1GB=1024MB，所以4GB=4×1024=4096MB，两人的U盘容量一样大，并非笑笑的更大，所以本题说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "IPv4的地址通常用“点分十进制”的表示形式，形如（a.b.c.d），其中a、b、c、d都是1~255之间的十进制整数（　）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "IPv4是32位二进制数，分成4个8位，每个8位对应0~255，所以a、b、c、d的范围是0~255而不是1~255，本题说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "诞生于1986年的中华学习机CEC-I入选了2021年的CCF计算机历史记忆（一类），它的内存只有64KB。当时的汉字编码字符集GB2312中共有6763个汉字，假如每个汉字用2个字节编码，将整个GB2312汉字字符集都放入CEC-I的内存，也只占用了不超过1÷5的内存空间。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "6763个汉字×2字节=13526字节，约13526÷1024≈13.21KB，而64KB的1÷5是12.8KB，13.21KB已经超过1÷5，所以说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "域名是由一串用点分隔的名字来标识互联网上一个计算机或计算机组的名称，CCF编程能力等级认证官方网站的域名是gesp.ccf.org.cn，其中顶级域名是gesp。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "顶级域名是域名最右边的那一段，gesp.ccf.org.cn的顶级域名是.cn，而不是gesp，所以本题说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "我国第一台大型通用电子计算机使用的逻辑部件是（　）。",
          "options": [
            "集成电路",
            "大规模集成电路",
            "晶体管",
            "电子管"
          ],
          "answer": 3,
          "explanation": "我国第一台通用数字电子计算机于1958年研制成功，当时使用的逻辑部件是电子管，所以选D。集成电路、晶体管是后来才采用的。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "我们常说的互联网（Internet）是一个覆盖全球的广域网络，它不属于任何一个国家。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "互联网是把全球各地的计算机网络互相连接而成的大网络，由众多组织共同管理，不属于任何一个国家，所以本题说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "神威·太湖之光超级计算机是中国自主研制的超级计算机，在全球超级计算机TOP500排行榜中多次荣膺榜首。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "神威·太湖之光是我国自主研制的超级计算机，曾多次在TOP500排行榜中排名第一，所以本题说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_13",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "某公司新出了一款无人驾驶的小汽车，通过声控智能驾驶系统，乘客只要告诉汽车目的地，车子就能自动选择一条优化路线，告诉乘客后驶达那里。请问下面哪项不是驾驶系统完成选路所必须的。（ ）",
          "options": [
            "麦克风",
            "扬声器",
            "油量表",
            "传感器"
          ],
          "answer": 2,
          "explanation": "声控选路需要麦克风采集乘客语音，需要传感器获取路况信息，需要扬声器播报路线。油量表只反映剩余油量，与智能选路无关，不是完成选路所必须的部件。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_14",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "现代计算机是指电子计算机，它所基于的是（ ）体系结构。",
          "options": [
            "艾伦·图灵",
            "冯·诺依曼",
            "阿塔纳索夫",
            "埃克特-莫克利"
          ],
          "answer": 1,
          "explanation": "现代电子计算机普遍采用冯·诺依曼体系结构，其核心思想是“存储程序”，即把程序和数据一起存放在存储器中，由CPU按顺序取指令执行。图灵、阿塔纳索夫、埃克特-莫克利虽对计算机有贡献，但体系结构以冯·诺依曼命名。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_14",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨的父母最近刚刚给他买了一块华为手表，他说手表上跑的是鸿蒙，这个鸿蒙是。（ ）",
          "options": [
            "小程序",
            "计时器",
            "操作系统",
            "神话人物"
          ],
          "answer": 2,
          "explanation": "鸿蒙（HarmonyOS）是华为开发的面向多种设备的操作系统，智能手表、手机等设备上都运行它。它负责管理设备硬件和软件资源，因此鸿蒙是操作系统。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_15",
          "kp": "kp2_01",
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
          "explanation": "王选院士是汉字激光照排系统的发明者，使汉字印刷告别铅与火、进入光与电的时代，被誉为“当代毕昇”。故选“发明汉字激光照排系统”。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_24",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨今年春节回奶奶家了，奶奶家的数字电视要设置ip地址并接入到WIFI盒子才能收看节目，那这个WIFI盒子具有路由器的功能。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "能分配IP地址、组建家庭网络并让设备接入互联网的WIFI盒子相当于无线路由器，具备路由、NAT、DHCP等路由功能，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "据有关资料，山东大学于1972年研制成功DJL-1计算机，其运算控制部分所使用的磁心存储元件由磁心颗粒组成，设计存贮周期为2μs（微秒）。那么该磁心存储元件相当于现代计算机的（ ）。",
          "options": [
            "内存",
            "磁盘",
            "CPU",
            "显示器"
          ],
          "answer": 0,
          "explanation": "磁心存储器是早期计算机用来临时存放指令和数据的部件，相当于现代计算机的内存（RAM）。它速度快、可读写，与磁盘（外存）、CPU（运算控制）、显示器（输出设备）不同。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "IPv4版本的因特网总共有（ ）个A类地址网络。",
          "options": [
            "65000",
            "200万",
            "126",
            "128"
          ],
          "answer": 2,
          "explanation": "IPv4地址共32位，A类地址网络号占8位，首位为0，范围0~127，共128个，其中网络0和网络127保留，可用126个。故选126。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下存储器中的数据不会受到附近强磁场干扰的是（ ）。",
          "options": [
            "硬盘",
            "U盘",
            "内存",
            "光盘"
          ],
          "answer": 3,
          "explanation": "光盘是光存储介质，靠激光照射在涂覆层上记录数据，不依赖磁性，所以强磁场不会影响它。硬盘属于磁介质存储器，U盘和内存靠电路存储，强磁场都会破坏其中的数据。故选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_03",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（ ）。",
          "options": [
            "double类型的变量占用内存的大小是浮动的",
            "bool类型的变量占用1字节内存",
            "int类型变量的取值范围不是无限的",
            "char类型的变量有256种取值"
          ],
          "answer": 0,
          "explanation": "double类型通常固定占8字节，大小不会浮动，所以A说法错误。bool占1字节，int占4字节且取值范围有限，char占1字节有256种取值，B、C、D都对。题目选不正确的，故选A。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "明明和笑笑在“小庙会”上分别抽到一个4GB和4096MB的U盘，容量大的盘是笑笑的（ ）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "1GB=1024MB，所以4GB=4×1024=4096MB，两个U盘容量一样大，不能说笑笑的更大。因此这句话错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "IPv4的地址通常用“点分十进制”的表示形式，形如（a.b.c.d），其中a、b、c、d都是1~255之间的十进制整数（ ）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "IPv4地址中的每个数取值范围是0~255，而不是1~255。0也是合法的（如0.0.0.0），所以题目说1~255是错误的。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "诞生于1986年的中华学习机CEC-I入选了2021年的CCF计算机历史记忆（一类），它的内存只有64KB。当时的汉字编码字符集GB2312中共有6763个汉字，假如每个汉字用2个字节编码，将整个GB2312汉字字符集都放入CEC-I的内存，也只占用了不超过1÷5的内存空间。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "6763个汉字用2字节编码，共需6763×2=13526字节，约13.2KB。64KB的1÷5是12.8KB，13.2KB超过了1÷5，所以说“不超过1÷5”是错误的。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "域名是由一串用点分隔的名字来标识互联网上一个计算机或计算机组的名称，CCF编程能力等级认证官方网站的域名是gesp.ccf.org.cn，其中顶级域名是gesp。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "顶级域名是域名最右边的一部分。gesp.ccf.org.cn从右往左看，顶级域名是.cn，而不是gesp。所以这句话错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "我国第一台大型通用电子计算机使用的逻辑部件是（ ）。",
          "options": [
            "集成电路",
            "大规模集成电路",
            "晶体管",
            "电子管"
          ],
          "answer": 3,
          "explanation": "我国第一台大型通用电子计算机诞生于1958年，当时计算机的逻辑部件使用的是电子管。集成电路和大规模集成电路是后来的技术，晶体管也在电子管之后。故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "我们常说的互联网（Internet）是一个覆盖全球的广域网络，它不属于任何一个国家。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "互联网是由全球众多网络互联而成的广域网，跨越国界，不由任何单一国家拥有。这是计算机网络的基础常识，所以这句话正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_17",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "神威·太湖之光超级计算机是中国自主研制的超级计算机，在全球超级计算机TOP500排行榜中多次荣膺榜首。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "神威·太湖之光是我国自主研发的超级计算机，曾在全球超级计算机TOP500排行榜中多次排名第一。这是计算机发展史常识，所以正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "2024年10月8日，诺贝尔物理学奖“意外地”颁给了两位计算机科学家约翰·霍普菲尔德（John J. Hopfield）和杰弗里·辛顿（Geoffrey E. Hinton）。这两位科学家的主要研究方向是（ ）。",
          "options": [
            "天体物理",
            "流体力学",
            "人工智能",
            "量子理论"
          ],
          "answer": 2,
          "explanation": "霍普菲尔德和辛顿因在人工神经网络和机器学习方面的奠基性工作获得2024年诺贝尔物理学奖，他们的主要研究方向是人工智能。故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "计算机系统中存储的基本单位用B来表示，它代表的是（ ），比如某个照片大小为3MB。",
          "options": [
            "Byte",
            "Block",
            "Bulk",
            "Bit"
          ],
          "answer": 0,
          "explanation": "计算机存储的基本单位B代表Byte（字节），1字节等于8位。MB表示兆字节，3MB就是3兆字节。Bit（位）是更小的单位，用b表示。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "在Windows的资源管理器中为已有文件A建立副本的操作是Ctrl+C，然后Ctrl+V。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在Windows中，Ctrl+C复制、Ctrl+V粘贴。选中文件A后按Ctrl+C复制，再到目标位置按Ctrl+V粘贴，就建立了文件A的副本。所以这句话正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "2025年春节有两件轰动全球的事件，一个是DeepSeek横空出世，另一个是贺岁片《哪吒2》票房惊人，入了全球票房榜。下面关于DeepSeek与《哪吒2》的描述成立的是( )。",
          "options": [
            "《哪吒2》是一款新型操作系统",
            "DeepSeek是深海钻探软件",
            "《哪吒2》可以生成新的软件",
            "DeepSeek可以根据《哪吒2》的场景生成剧情脚本"
          ],
          "answer": 3,
          "explanation": "DeepSeek是人工智能大模型，能够理解文本并按指令生成内容，可以根据《哪吒2》的场景生成剧情脚本。A、C把《哪吒2》说成操作系统或软件生成器，B说DeepSeek是深海软件，都不成立。故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "2025年4月19日在北京举行的人形机器人半程马拉松赛中，机器人利用传感器反馈的数据调整姿态保持平衡，这类传感器类似于计算机的（　）。",
          "options": [
            "A. 处理器",
            "B. 存储器",
            "C. 输入设备",
            "D. 输出设备"
          ],
          "answer": 2,
          "explanation": "传感器把温度、湿度、压力等外界信息转成电信号送给计算机处理，这相当于向计算机输入数据。处理器负责运算，存储器负责保存数据，输出设备负责把结果显示出来。传感器只负责采集和送入信息，所以它对应计算机的输入设备。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小明购置的计算机使用一年后觉得内存不够用，想购置容量更大的内存条，他需要的内存条是（　）。",
          "options": [
            "A. RAM",
            "B. ROM",
            "C. CACHE",
            "D. EPROM"
          ],
          "answer": 0,
          "explanation": "内存条是可读可写、断电后数据丢失的随机存取存储器，即RAM。ROM是只读存储器，CACHE是高速缓存，EPROM是可擦除编程只读存储器，它们都不能作为普通内存条随意扩充。日常说的内存条就是RAM。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "人们参加闭卷考试时通常不允许带智能手机、平板电脑、智能手表等，因为它们具有嵌入操作系统及通信功能。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "智能手机、平板和部分智能手表内置操作系统并支持联网通信，有作弊风险，所以闭卷考试时按规定不允许携带。这是计算机与网络常识，说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "人工智能中经常提到的\"大模型\"最贴切是指（　）。",
          "options": [
            "A. 大电脑模型",
            "B. 大规模智能",
            "C. 智能的单位",
            "D. 大语言模型"
          ],
          "answer": 3,
          "explanation": "近年来热门的\"大模型\"主要指大语言模型（LLM），它基于海量文本训练，能理解和生成自然语言，如对话、写作、翻译等。它并不是指电脑硬件大，也不是智能的单位，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "在TCP协议中，完成连接建立需要通过（　）握手。",
          "options": [
            "A. 一次",
            "B. 二次",
            "C. 三次",
            "D. 四次"
          ],
          "answer": 2,
          "explanation": "TCP协议建立连接采用三次握手：客户端发送SYN，服务器回复SYN+ACK，客户端再回复ACK，双方确认收发能力后建立连接。所以是三次握手，故选C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "空客约6000架A320飞机需更换受太阳辐射影响的飞行控制软件。飞行控制系统执行判断的部件最可能是（　）。",
          "options": [
            "A. 辐射传感器",
            "B. 处理器",
            "C. 内存单元",
            "D. 输出设备"
          ],
          "answer": 1,
          "explanation": "执行判断、运算等逻辑功能的部件是处理器（CPU）。传感器负责采集，内存负责存储，输出设备负责显示。飞行控制系统中做出判断靠处理器完成，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "小明上学所在教学楼内的网络是一个（　）。",
          "options": [
            "A. PAN",
            "B. LAN",
            "C. MAN",
            "D. WAN"
          ],
          "answer": 1,
          "explanation": "按覆盖范围分：PAN个人局域网、LAN局域网、MAN城域网、WAN广域网。教学楼内的网络覆盖范围小，属于局域网LAN，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "鸿蒙是华为公司开发的一款操作系统，那么它能够将正确的源程序翻译成目标程序，并运行。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "鸿蒙确实是华为开发的手机操作系统。但把源程序翻译成目标程序是编译器的功能，操作系统负责管理硬件和运行已编译好的程序，并不负责翻译源代码。所以题面说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "人形机器人在春晚表演空翻并调整姿态保持队列。将机器人视作计算机系统，下面哪一项不能作为输入设备（　）。",
          "options": [
            "A. 检测重心的重力传感器",
            "B. 预装的AI算法程序",
            "C. 接收动作指令的遥控器",
            "D. 拍摄其他机器人的摄像头"
          ],
          "answer": 1,
          "explanation": "输入设备是把外界信息送入计算机的硬件。重力传感器、遥控器、摄像头都是输入设备；而预装的AI算法程序是软件，不是设备，更不是输入设备。故选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "小明妈妈给他买了电话手表，他可以用它打电话、收发信息，那么可以推测这块手表中装有一款特定操作系统。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "电话手表能打电话、收发信息，说明其内部有处理器、内存和通信模块，必须由操作系统来调度管理这些软硬件资源。所以推测内置操作系统是合理的，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_01",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "智能温室中湿度传感器检测土壤湿度并发送给中央控制器。湿度传感器所发挥的作用类似于计算机系统中的哪一类组件（　）。",
          "options": [
            "A. 处理器",
            "B. 存储器",
            "C. 输入设备",
            "D. 输出设备"
          ],
          "answer": 2,
          "explanation": "传感器把湿度变化转成电信号送入控制器，功能是采集并输入信息，对应计算机的输入设备。处理器负责运算判断，存储器负责存储，输出设备负责显示，均不符合。故选C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_02",
          "kp": "kp2_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二手电脑运行时经常弹出\"系统内存不足\"警告，他计划增加物理内存。应购买哪种硬件（　）。",
          "options": [
            "A. 机械硬盘",
            "B. 内存条",
            "C. 图形显卡",
            "D. 移动硬盘"
          ],
          "answer": 1,
          "explanation": "物理内存就是内存条（RAM），内存不足时应增加内存条。机械硬盘和移动硬盘是外存，显卡负责图形显示，都不能直接解决内存不足问题。故选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_16",
          "kp": "kp2_01",
          "type": "judge",
          "difficulty": 1,
          "question": "期末考试不仅禁止携带手机、平板电脑，各类AI眼镜（智能眼镜）也不允许带入考场。这些AI眼镜应内置了操作系统并可能支持Wi-Fi或蓝牙连接。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "智能眼镜具备拍照、显示、联网等功能，必然内置操作系统，并通过Wi-Fi或蓝牙与手机等设备连接，因此闭卷考试禁止携带。说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_03": {
      "title": "流程图",
      "questions": [
        {
          "id": "l2_202303_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图，属于计算机的哪种程序结构？（　）。",
          "options": [
            "顺序结构",
            "循环结构",
            "分支结构",
            "数据结构"
          ],
          "answer": 2,
          "explanation": "流程图先判断“是否按下空格键”：成立则执行“小猫移动100步”，不成立则执行“小猫颜色特效增加25”，两个分支后汇合，属于典型的分支结构，选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "能够实现下面流程图功能的伪代码是（　）。\n（流程图：开始后进入“条件判断”，若条件成立则直接往下走结束；若条件不成立则执行“语句块”，执行完再回到“条件判断”重新判断。）",
          "options": [
            "if 条件判断 then 语句块",
            "if 条件判断 then 什么也不做 else 语句块",
            "while 条件判断 do 语句块",
            "while not 条件判断 do 语句块"
          ],
          "answer": 3,
          "explanation": "流程图中条件不成立时才执行语句块，执行后又回到判断处，形成循环；也就是说“只要条件不成立就继续循环”，即while not 条件判断 do 语句块，选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图的输出结果是（　）？\n（流程图：开始，令x=5、y=12；判断x>y；成立则a=x、b=y，不成立则a=y、b=x；最后输出a和b。）",
          "options": [
            "5 12",
            "12 5",
            "5 5",
            "12 12"
          ],
          "answer": 1,
          "explanation": "流程图中x=5、y=12，判断x>y不成立，走“否”分支，得到a=y=12、b=x=5，输出“12 5”，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_01",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图的输出结果是？（流程图：cj=75，判断cj>=60，否→输出不及格；是→再判断cj>=90，是→输出优秀，否→输出良好）",
          "options": [
            "优秀",
            "良好",
            "不及格",
            "没有输出"
          ],
          "answer": 1,
          "explanation": "流程图先给cj赋值为75，第一层判断cj>=60成立，进入第二层判断cj>=90：75不小于90，走“否”分支输出“良好”。所以结果是良好，选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面流程图在yr输入2024时，可以判定yr代表闰年，并输出2月是29天，则图中菱形框中应该填入（ ）。",
          "options": [
            "(yr%400==0)||(yr%4==0)",
            "(yr%400==0)||(yr%4==0&&yr%100!=0)",
            "(yr%400==0)&&(yr%4==0)",
            "(yr%400==0)&&(yr%4==0&&yr%100!=0)"
          ],
          "answer": 1,
          "explanation": "闰年的判定规则：能被400整除，或者能被4整除但不能被100整除。B完整表达了该规则，故应填入B。其余选项要么遗漏“不能被100整除”，要么误用与运算。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图，属于计算机的哪种程序结构？（ ）。",
          "options": [
            "顺序结构",
            "循环结构",
            "分支结构",
            "数据结构"
          ],
          "answer": 2,
          "explanation": "图中根据一个判断条件分出两个分支，条件成立走一条路，不成立走另一条路，这正是分支结构（选择结构）的特征。顺序结构是依次执行，循环结构是反复执行，均与图形不符。故选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "能够实现下面流程图功能的伪代码是（ ）。流程图逻辑：条件不成立时执行语句块并重新判断，条件成立时退出。",
          "options": [
            "if 条件判断then 语句块",
            "if 条件判断then 什么也不做else 语句块",
            "while 条件判断do 语句块",
            "while not 条件判断do 语句块"
          ],
          "answer": 3,
          "explanation": "流程图中，条件不成立时才执行语句块并回去重新判断，条件成立则直接退出，这正对应“当条件不成立时反复执行”的while not结构。A、B是分支结构，C是条件成立时循环，均不符。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下列流程图的输出结果是（ ）？流程图：x=5,y=12，若x>y不成立则a=y、b=x。",
          "options": [
            "5 12",
            "12 5",
            "5 5",
            "12 12"
          ],
          "answer": 1,
          "explanation": "流程图先令x=5、y=12，判断x>y即5>12不成立，于是走“否”分支，a=y=12、b=x=5，最后输出a和b的值即12 5。故选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "对整型变量N，如果它能够同时被3和5整除，则输出N是含有至少两个质因数。如果用流程图来描述处理过程，则输出语句应该在哪种图形框中（ ）。",
          "options": [
            "圆形框",
            "椭圆形框",
            "平行四边形框",
            "菱形框"
          ],
          "answer": 2,
          "explanation": "在流程图中，输出语句放在平行四边形框内，输入输出都用平行四边形表示；处理（赋值、计算）用矩形框，判断用菱形框。所以输出语句应在平行四边形框中。故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_02",
          "kp": "kp2_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码找出N个正整数中最大的一个。若用流程图表示，则L1标记的代码行（if(val>max)）应该使用的图形是（　）。",
          "options": [
            "A. 圆形框",
            "B. 椭圆形框",
            "C. 平行四边形框",
            "D. 菱形框"
          ],
          "answer": 3,
          "explanation": "流程图中判断（条件）用菱形框表示，输入输出用平行四边形，处理用矩形，起止用圆角矩形。L1是if条件判断，应画成菱形框，故选D。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_02": {
      "title": "程序设计语言",
      "questions": [
        {
          "id": "l2_202303_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（　）。",
          "options": [
            "double类型的变量占用内存的大小是浮动的",
            "bool类型的变量占用1字节内存",
            "int类型变量的取值范围不是无限的",
            "char类型的变量有256种取值"
          ],
          "answer": 0,
          "explanation": "double通常固定占8字节，大小不会浮动，所以A说法错误。bool占1字节，int范围有限（约-2^31到2^31-1），char有256种取值，其余都正确，选A。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_04",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（　）。",
          "options": [
            "变量定义后，可以使用赋值语句改变它的值",
            "变量定义时，必须指定类型",
            "变量名必须为合法标识符",
            "合法标识符可以以数字开始"
          ],
          "answer": 3,
          "explanation": "C++合法标识符只能由字母、数字、下划线组成，且不能以数字开头，所以D错误。变量定义时必须指定类型，定义后可以用赋值语句改变值，A、B、C都正确，选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_05",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的关键字？",
          "options": [
            "return",
            "max",
            "else",
            "case"
          ],
          "answer": 1,
          "explanation": "return、else、case都是C++关键字，用来控制流程或返回；max只是标准库里的一个函数名，不是关键字，所以选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_06",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的运算符？",
          "options": [
            "\\=",
            "/=",
            "-=",
            "!="
          ],
          "answer": 0,
          "explanation": "/=、-=是复合赋值运算符，!=是不等于比较运算符；\\=并不是C++中的任何运算符，所以选A。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_10",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为int类型的变量，且a的值为9，则执行a -= 3;之后，a的值会是（　）。",
          "options": [
            "3",
            "6",
            "9",
            "12"
          ],
          "answer": 1,
          "explanation": "a-=3等价于a=a-3，即把a-3的计算结果重新赋给a，9-3=6，所以a变为6，选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_11",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式能正确判断“a等于0或b等于0”的是（　）",
          "options": [
            "(!a) || (!b)",
            "(a == b == 0)",
            "(a == 0) && (b == 0)",
            "(a == 0) - (b == 0) == 0"
          ],
          "answer": 0,
          "explanation": "!a表示a等于0，!b表示b等于0，用||连接表示二者至少一个成立，正好是“a等于0或b等于0”，选A。C表示“且”，B和D都不能正确判断。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_13",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（　），使得输出是“50 10”。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint a = 10, b = 50;\n__________; // 在此处填入代码\nb -= a;\na += b;\ncout << a << \" \" << b << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "a -= b",
            "a += b",
            "a = b - a",
            "a = b"
          ],
          "answer": 2,
          "explanation": "这是用算术运算交换两个变量。a=b-a后a=50-10=40；b-=a得b=50-40=10；a+=b得a=40+10=50，最后输出“50 10”，选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_18",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，一个程序不能有多个main函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++程序有且只能有一个main函数，它是程序的入口，一个程序不允许有多个main函数，所以本题正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_19",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，标识符中可以有下划线_，但不能以下划线_开头。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++标识符可以由字母、数字、下划线组成，并且可以用下划线开头（只是不能以数字开头），所以“不能以下划线开头”的说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_23",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中>=是运算符，但=>不是。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": ">=是表示“大于等于”的关系运算符，而=>在C++中不存在，不是合法的运算符，所以本题说法正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_01",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "高级语言编写的程序需要经过以下（　）操作，可以生成在计算机上运行的可执行代码。",
          "options": [
            "编辑",
            "保存",
            "调试",
            "编译"
          ],
          "answer": 3,
          "explanation": "编译是把高级语言程序翻译成计算机能识别的二进制机器语言并生成可执行代码的过程，所以选D。编辑、保存、调试都不是生成可执行代码的关键步骤。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_04",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（　）。",
          "options": [
            "if语句中的判断条件必须用小括号‘(’和‘)’括起来。",
            "for语句中两个‘;’之间的循环条件可以省略，表示循环继续执行的条件一直满足。",
            "循环体包含多条语句时，可以用缩进消除二义性。",
            "除了“先乘除、后加减”，还有很多运算符优先级。"
          ],
          "answer": 2,
          "explanation": "循环体包含多条语句时，必须用花括号{}把它们括起来，仅靠缩进无法消除二义性，所以C错误。其余说法都正确，选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_05",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是C++语言的关键字？（　）",
          "options": [
            "main",
            "max",
            "double",
            "sqrt"
          ],
          "answer": 2,
          "explanation": "double是C++的数据类型关键字；main是函数名，max、sqrt是标准库函数名，它们都不是关键字，所以选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_06",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的运算符？（　）",
          "options": [
            ">=",
            "/=",
            "||",
            "<>"
          ],
          "answer": 3,
          "explanation": ">=是比较运算符，/=是复合赋值运算符，||是逻辑或运算符；<>在C++中不是运算符（C++用!=表示不等于），所以选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_09",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个循环语句会无限次执行？（　）",
          "options": [
            "for (int a = 0; a; a++) ;",
            "for (bool b = false; b <= true; b++) ;",
            "for (char c = 'A'; c < 'z'; c++) ;",
            "for (double d = 0.0; d < 10.0; d += 0.001) ;"
          ],
          "answer": 1,
          "explanation": "bool只有false和true（即0和1）。b从false变true后，b++仍为true，条件b<=true始终成立，循环无限执行，选B。A中a=0条件为假不进入循环，C、D都能正常结束。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_11",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式能正确判断“a等于1且b等于1”的是（　）。",
          "options": [
            "(a == b) && (b == 1)",
            "(a && b)",
            "(a == b == 1)",
            "(a×b == 1)"
          ],
          "answer": 0,
          "explanation": "A用&&连接a==b和b==1两个条件，a==1且b==1时两个都成立，判断正确。B只要a、b都非0就为真；C只要a==b就为真；D中a、b同为-1也成立，所以选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_19",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，标识符中可以有下划线‘_’。同时，‘_’也是C++语言的运算符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "标识符中可以用下划线，但下划线不是C++的运算符，所以“_也是运算符”的说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_23",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "++和==都是C++语言的运算符，但+=不是。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "++是自增运算符，==是比较运算符，+=是复合赋值运算符，三者都是C++的运算符，所以本题说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_04",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下不是C++关键字的是（　）。",
          "options": [
            "continue",
            "cout",
            "break",
            "goto"
          ],
          "answer": 1,
          "explanation": "continue、break、goto都是C++的关键字；cout是iostream库中定义的输出流对象，不是关键字，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_19",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 表达式 (2 * 3) || (2 + 5) 的值为 67 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "逻辑或运算符||最后执行，结果只有0或1。(2×3)即6为非零真，(2+5)即7也为真，整个表达式值为1，而不是67，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_20",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果 m 和 n 为 int 类型变量，则执行 for (m = 0, n = 1; n < 9; ) n = ((m = 3 * n, m + 1), m - 1); 之后 n 的值为偶数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "第1次：m=3，n取m-1=2；第2次：m=6，n=5；第3次：m=15，n=14，此时n<9不成立退出循环，n=14是偶数，所以本题说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_21",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "如果 a 为 int 类型的变量，则表达式 (a >= 5 && a <= 10) 与 (5 <= a <= 10) 的值总是相同的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "前者是两个条件都必须满足；后者先算5<=a得到0或1，再与10比较。例如a=20时，前者为0，后者1<=10为1，结果不同，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_25",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++是一种高级程序设计语言。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++接近人类语言、便于阅读和编写，需要通过编译转换成机器语言才能运行，属于高级程序设计语言，所以本题说法正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_01",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下不可以做为C++变量的是（ ）。",
          "options": [
            "FiveStar",
            "fiveStar",
            "5Star",
            "Star5"
          ],
          "answer": 2,
          "explanation": "C++变量名只能由字母、数字和下划线组成，并且不能以数字开头。5Star以数字5开头，不符合命名规则，所以不能作为变量名。其他三个都以字母开头且只含字母，均为合法变量名。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_24",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨最近在准备考GESP，他用的Dev C++来练习和运行程序，所以Dev C++也是一个小型操作系统。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Dev C++是集成开发环境（IDE），负责编辑、编译、调试代码，运行在操作系统之上，本身不是操作系统。操作系统是管理硬件和软件资源的系统程序，故说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_02",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下选项中不符合C++变量命名规则的是（ ）？",
          "options": [
            "student",
            "2_from",
            "_to",
            "Text"
          ],
          "answer": 1,
          "explanation": "C++变量名不能以数字开头。2_from以数字2开头，违反命名规则。student以字母开头，_to以下划线开头，Text以字母开头，都是合法的变量名。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_17",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "Xyz，xYz，xyZ是三个不同的变量。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++区分大小写，标识符中大小写字母视为不同字符，因此Xyz、xYz、xyZ是三个不同的变量名，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_01",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "小杨父母带他到某培训机构给他报名参加CCF组织的GESP认证考试的第1级，那他可以选择的认证语言有几种？（ ）",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explanation": "GESP认证目前支持图形化编程、Python和C++共三种编程语言，考生可任选其一参加认证，所以可选认证语言为3种。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，下列不可做变量的是（ ）。",
          "options": [
            "five-Star",
            "five_star",
            "fiveStar",
            "_fiveStar"
          ],
          "answer": 0,
          "explanation": "变量名只能由字母、数字和下划线组成，且不能含减号。five-Star含连字符-，会被解释为减法运算，不能作为变量名。其余三者都只含字母和下划线，合法。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_20",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，不可以将变量命名为scanf，因为scanf是C++语言的关键字。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "scanf不是C++关键字，而是C语言标准库提供的输入函数名。虽然不建议把变量命名为scanf，但语法上允许，不会报错。说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_25",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "GESP测试是对认证者的编程能力进行等级认证，同一级别的能力基本上与编程语言无关。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "GESP按等级认证编程能力，相同等级对应相近的算法与程序设计能力要求，与具体选择哪种语言关系不大，故说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，下列不可做变量的是（ ）。",
          "options": [
            "ccf-gesp",
            "ccf_gesp",
            "ccfGesp",
            "_ccfGesp"
          ],
          "answer": 0,
          "explanation": "变量名只能由字母、数字、下划线组成，不能含减号。ccf-gesp含连字符-，会被当作减法运算符，不能作为变量名。其余三者合法。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_16",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨最近开始学习C++编程，老师说C++是一门面向对象的编程语言，也是一门高级语言。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++支持类和对象，是面向对象的编程语言；它远离机器指令、接近人类思维，属于高级语言。说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_04",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（ ）。",
          "options": [
            "变量定义后，可以使用赋值语句改变它的值",
            "变量定义时，必须指定类型",
            "变量名必须为合法标识符",
            "合法标识符可以以数字开始"
          ],
          "answer": 3,
          "explanation": "C++标识符只能由字母、数字、下划线组成，且不能以数字开头，所以D说法错误。变量可以重新赋值、定义时必须指定类型、名字必须是合法标识符，A、B、C都对。故选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_05",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的关键字？（ ）",
          "options": [
            "return",
            "max",
            "else",
            "case"
          ],
          "answer": 1,
          "explanation": "关键字是C++预先定义好、编译器特殊处理、不能当作变量名的词。return、else、case都是关键字，而max只是标准库里的一个函数名，不属于关键字。故选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_06",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的运算符？（ ）",
          "options": [
            "\\=",
            "/=",
            "-=",
            "!="
          ],
          "answer": 0,
          "explanation": "/=、-=是复合赋值运算符，!=是不等于关系运算符，它们都是合法运算符。而\\=并不是C++里的运算符，属于干扰项。故选A。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_10",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为int类型的变量，且a的值为9，则执行a -= 3;之后，a的值会是（ ）。",
          "options": [
            "3",
            "6",
            "9",
            "12"
          ],
          "answer": 1,
          "explanation": "a -= 3;等价于a = a - 3;，即把a原来的值9减去3得到6，再存回a。所以执行后a的值为6。故选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_13",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），使得输出是`50 10`。\n<pre><code>int a=10,b=50;\n____;\nb-=a;\na+=b;\ncout<<a<<\" \"<<b;</code></pre>",
          "options": [
            "a -= b",
            "a += b",
            "a = b - a",
            "a = b"
          ],
          "answer": 2,
          "explanation": "带入验证：选C时a=50-10=40，然后b-=a得b=50-40=10，再a+=b得a=40+10=50，最后输出50 10，符合要求。其它选项代入后b都会变成别的数，故选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_18",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，一个程序不能有多个main函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "每个C++程序有且只能有一个main函数，它是程序执行的入口。如果定义了多个main，编译时会报错。这句话正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_19",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，标识符中可以有下划线_，但不能以下划线_开头。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++标识符由字母、数字、下划线组成，下划线既可以出现在中间，也可以放在开头（如_int是合法标识符），只是不能以数字开头。所以说不能以下划线开头是错误的。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_23",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语言中>=是运算符，但=>不是。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": ">=是“大于等于”关系运算符，是合法的；而=>不是C++中的运算符。所以这句话正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_01",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "高级语言编写的程序需要经过以下（ ）操作，可以生成在计算机上运行的可执行代码。",
          "options": [
            "编辑",
            "保存",
            "调试",
            "编译"
          ],
          "answer": 3,
          "explanation": "编译是把高级语言源代码翻译成计算机能识别的二进制机器码的过程，只有经过编译生成可执行文件才能在计算机上运行。编辑、保存、调试都不是生成可执行代码的关键步骤。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_05",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个是C++语言的关键字？（ ）",
          "options": [
            "main",
            "max",
            "double",
            "sqrt"
          ],
          "answer": 2,
          "explanation": "double是C++的基本数据类型关键字。main是函数名，max和sqrt是标准库函数名，它们都不是关键字。故选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_06",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个不是C++语言的运算符？（ ）",
          "options": [
            ">=",
            "/=",
            "||",
            "<>"
          ],
          "answer": 3,
          "explanation": ">=是大于等于运算符，/=是除并赋值运算符，||是逻辑或运算符，它们都是合法的。<>不是C++的运算符（不等于应写成!=）。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_19",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语言中，标识符中可以有下划线‘_’。同时，‘_’也是C++语言的运算符。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "下划线是标识符中允许出现的字符，但它不是C++的运算符。C++运算符包括算术、关系、逻辑、赋值等符号，不含单独的下划线。所以这句话错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_23",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "++和==都是C++语言的运算符，但+=不是。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "++是自增运算符，==是相等关系运算符，+=是加并赋值运算符，三者都是C++合法的运算符。所以说+=不是运算符是错误的。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_04",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "以下不是C++关键字的是（ ）。",
          "options": [
            "continue",
            "cout",
            "break",
            "goto"
          ],
          "answer": 1,
          "explanation": "continue、break、goto都是C++关键字。cout不是关键字，它是标准库iostream中定义的一个输出流对象。故选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_25",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++是一种高级程序设计语言。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++是面向对象的高级程序设计语言，语句接近人类语言，需要经过编译转换成机器语言才能运行。所以这句话正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "C++语句cout << (3 + 3 % 3 * 2 - 1) 执行后输出的值是（ ）。",
          "options": [
            "-1",
            "4",
            "56",
            "2"
          ],
          "answer": 3,
          "explanation": "按运算符优先级，先算%和*：3%3=0，0×2=0，再算加减：3+0-1=2。所以输出2。故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_05",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码的相关说法中，正确的是（ ）。\n<pre><code>int tnt;\nfor(int i=0;i<10;i++)\n    tnt+=i;\ncout<<tnt;</code></pre>",
          "options": [
            "上述代码执行后其输出相当于求1-10的和（包含10）",
            "上述代码执行后其输出相当于求1-10的和（不包含10）",
            "上述代码执行后其输出相当于求0-10的和（不包含10）",
            "上述代码执行后将输出不确定的值"
          ],
          "answer": 3,
          "explanation": "变量tnt在定义时没有初始化，就直接执行tnt+=i，使用未初始化的变量结果是未定义行为，输出是不确定的值。所以选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_20",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出2*3=6。\n<pre><code>int a=2,b=3;\nprintf(\"%%a*%%b=%d\",a*b);</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "printf中%%是转义，会输出一个百分号%。所以printf(\"%%a*%%b=%d\",6)输出的是%a*%b=6，而不是2*3=6。所以这句话错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_21",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "以下C++代码因为循环变量为将导致错误，即不能作为变量名称，不符合C++变量命名规范。\n<pre><code>for (int _ = 0; _ < 10; _++)\n    continue;</code></pre>\n（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "下划线_是合法的C++标识符字符，_单独作为变量名是合法的，程序能正常运行。说它“不能作为变量名称”是错误的。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行，其输出是( )。\n<pre><code>int a=3,b=4;\na==b;\nb==a;\ncout<<a<<' '<<b<<endl;</code></pre>",
          "options": [
            "3 4",
            "3 3",
            "4 4",
            "4 3"
          ],
          "answer": 0,
          "explanation": "a==b和b==a只是两个比较表达式，结果没有赋给任何变量，不会改变a、b的值。a仍是3，b仍是4，输出3 4。故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_16",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "C++、Python都是高级编程语言，它们的每条语句最终都要通过机器指令来完成。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++和Python都是高级语言，源程序最终都要被编译或解释成机器指令，由CPU执行。所以这句话正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_20",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++执行后将输出3*2=6。\n<pre><code>int a=2,b=3;\na=a-b;\nb=a+b;\na=b-a;\nprintf(\"%d*%d=%d\\n\",a,b,a*b);</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "逐步计算：a=2-3=-1，b=-1+3=2，a=2-(-1)=3。最终a=3，b=2，a×b=6，输出3×2=6。所以这句话正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码用于输入姓名再输出，正确的说法是（　）。\n<pre><code>string XingMing;\ncin >> XingMing;\ncout << XingMing;</code></pre>",
          "options": [
            "A. XingMing是汉语拼音，不能作为变量名",
            "B. 可以将XingMing改为Xing Ming",
            "C. 可以将XingMing改为xingming",
            "D. 可以将XingMing改为Xing-Ming"
          ],
          "answer": 2,
          "explanation": "C++变量名由字母、数字、下划线组成，不能含空格和减号，且区分大小写。XingMing合法；改成xingming也合法。B含空格、D含减号都非法；A认为拼音不能做变量名是错的。故选C。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_16",
          "kp": "kp2_02",
          "type": "judge",
          "difficulty": 1,
          "question": "在集成开发环境里调试程序时，要注意不能修改源程序，因为如果修改，就要终止调试、关闭该文件并重新打开，才能再次开始调试。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "现代IDE修改源程序后只需重新编译或重启调试即可，并不需要关闭并重新打开文件。所以题面说必须关闭文件才能再次调试是错误的。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关C++变量的说法，正确的是（　）。",
          "options": [
            "A. 不可以用for作为变量名，因为for是C++的关键字（保留字）",
            "B. _tnt不可以是变量名，因为变量名第一个字符必须是英文字母",
            "C. _tnt_不可以是变量名，因为最后一个字符容易与减号混淆",
            "D. 可以用printf作为变量名，因为printf是关键字，但这不是好习惯"
          ],
          "answer": 0,
          "explanation": "for是C++关键字，不能用作变量名，A正确。变量名可以以下划线开头，所以_tnt、_tnt_都合法，B、C错误。printf不是关键字而是库函数名，用它作变量名不合法，D错误。故选A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_03",
          "kp": "kp2_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码可以执行，有关说法正确的是（　）。\n<pre><code>double PI = 3.1415926;\ncout << (PI);</code></pre>",
          "options": [
            "A. cout<<(PI)和cout<<(pi)效果相同，变量名大小写不敏感",
            "B. cout<<(PI)改为cout<<(Pi)能正常执行",
            "C. 不能用PI做变量名，因为要保存圆周率常量",
            "D. 将程序中全部PI都改写为Pai，将能正常执行，不会报错"
          ],
          "answer": 3,
          "explanation": "C++变量名区分大小写，PI、pi、Pi是不同标识符，A、B错误。PI只是普通变量名，可以用于保存常量，C错误。把PI统一改成Pai后标识符一致，程序能正常执行，故选D。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_05": {
      "title": "数据类型转换",
      "questions": [
        {
          "id": "l2_202303_07",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b都是char类型的变量，下列哪个语句不符合C++语法？",
          "options": [
            "b = a + 1;",
            "b = a + '1';",
            "b = 'a'++;",
            "b = a++;"
          ],
          "answer": 2,
          "explanation": "字符常量'a'是常量，不能对常量做自增运算，所以C不符合语法。A、B在运算中char会提升为int再赋值回char，D对变量a自增并把原值赋给b，都合法，选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_08",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a、b、c和d都是int类型的变量，则下列哪个表达式能够正确计算它们的平均值？",
          "options": [
            "(a + b + c + d) / 4",
            "(a + b + c + d) % 4",
            "(a + b + c + d) / 4.0",
            "(a + b + c + d) % 4.0"
          ],
          "answer": 2,
          "explanation": "整数除整数结果还是整数，A会向下取整不准确；%求的是余数，B不对；%不能用于浮点数，D语法错误；除以4.0时int自动提升为double，结果带小数，选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_09",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且a的值为'2'，则下列哪条语句执行后，a的值不会变为'3'？",
          "options": [
            "a = a + 1;",
            "a + 1;",
            "a = 1 + a;",
            "++a;"
          ],
          "answer": 1,
          "explanation": "a=a+1、a=1+a、++a都会把a的ASCII码加1变成'3'；而“a+1;”只计算了结果却没有赋值给a，a本身没有改变，所以选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_25",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式(10.0 / 2)的计算结果为5.0，且结果类型为double。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "10.0是double类型，double与int运算时int会自动提升为double，结果仍为double，即5.0，所以本题说法正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_03",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，正确的是（　）。",
          "options": [
            "char类型变量不能赋值给int类型的变量。",
            "两个int类型变量相乘，计算结果还是int类型。",
            "计算两个int类型变量相乘时，如果乘积超出了int类型的取值范围，程序会报错崩溃。",
            "计算两个double类型变量相除时，如果除数的值为0.0，程序会报错崩溃。"
          ],
          "answer": 1,
          "explanation": "int乘int结果仍是int，B正确。char可以赋给int，A错；int溢出只得到错误结果但程序不崩溃，C错；double除以0.0得到INF或NaN但不崩溃，D错。选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_07",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为int类型的变量，b为char类型的变量，则下列哪个语句不符合C++语法？（　）",
          "options": [
            "a = a + 1.0;",
            "a = (int)(b - '0');",
            "b = (char)(a + '0');",
            "(int)b = a;"
          ],
          "answer": 3,
          "explanation": "强制类型转换(int)b得到的是一个值，不是可赋值的变量，所以(int)b=a不符合语法。其余选项都是合法的类型转换与赋值，选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_08",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果用两个int类型的变量a和b分别表达平行四边形的两条边长，用int类型的变量h表达a边对应的高，则下列哪个表达式不能用来计算b边对应的高？（　）",
          "options": [
            "a÷b * (0.0 + h)",
            "(0.0 + a×h) / b",
            "a×h / (b + 0.0)",
            "(a + 0.0) * h÷b"
          ],
          "answer": 0,
          "explanation": "平行四边形面积=底×高，a边对应的高为h，则面积=a×h，b边对应的高=面积/b=(a×h)/b。A中“a÷b”是两个int相除会向下取整，导致结果错误，所以选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_10",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且a的值为'C'（已知'C'的ASCII码为67），则执行cout << (a + 2);会输出（　）。",
          "options": [
            "E",
            "C+2",
            "C2",
            "69"
          ],
          "answer": 3,
          "explanation": "char与int运算时char会提升为int，所以a+2=67+2=69，结果是int类型，cout输出整数69，而不是字符'E'，所以选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a是double类型的变量，而且值为3.5，则表达式a * 10的计算结果为35，且结果类型为int。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "double与int相乘时int会提升为double，结果为35.0，类型是double而不是int，所以本题说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "C++表达式 int(-123.123 / 10) 的值是（　）。",
          "options": [
            "-124",
            "-123",
            "-13",
            "-12"
          ],
          "answer": 3,
          "explanation": "-123.123÷10=-12.3123，用int()强制转换为整数时直接舍去小数部分，得到-12（向0取整），所以选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式 7.8 / 2 的值为 3.9 ，类型为 float 。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中带小数的字面量默认是double类型，7.8÷2得到的是double类型的3.9，而不是float，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_16",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式 -7/2 的值为整数-3。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在C++中，两个整数相除结果仍为整数，且向零取整。-7除以2的商为-3（余-1），所以-7÷2的值确实是整数-3，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_22",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，运算符只能处理相同的数据类型，不同类型之间必须转换为相同的数据类型。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++允许不同类型的数据混合运算，编译器会按类型转换规则自动进行隐式转换（如int和double相加时int转成double），并不是必须由程序员显式转换，故说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_23",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，虽然变量都有数据类型，但同一个变量也可以先后用不同类型的值赋值。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "变量的类型固定，但可以把不同类型的值赋给它，C++会按规则自动转换。例如int a; a=3; a=3.5; 第二次赋值时3.5会转成3存入a，程序合法，故说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_16",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "如果有以下C++代码：\n<pre><code>double s;\nint t;\ns = 18.5;\nt = int(s) + 10;</code></pre>\n那么cout<<t的结果为28.5。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "int(s)把18.5截断取整为18，t=18+10=28，t是int类型，输出28而不是28.5。浮点转整数会丢弃小数部分，故说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "cout<<(8<9<10)的输出结果为true。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "先算8<9得真(1)，再算1<10得真，整个表达式结果为真。虽然cout输出时按数字1显示，但表达式的逻辑值确为true，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++中cout<<float(2022)与cout<<float('2022')运行后的输出结果均为2022。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "float(2022)结果是2022.0正确；但'2022'是字符字面量，包含多个字符，将其转换为float是不合理的，通常编译报错或得到不可预测值，不可能输出2022，故说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_22",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "bool()函数用于将给定参数或表达式转换为布尔类型。语句bool(-1)返回的是false值。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "bool(-1)中-1非零，转成bool为真（true）。只有0或空等才转成false，所以bool(-1)返回true，说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式-12%10的值为2。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中取余结果的符号与被除数相同。-12除以10商-1余-2，所以-12%10=-2，而不是2。正数12%10=2才对。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式int(12.56)的值为13。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "int()把浮点数转成整数时直接截断小数部分，不进行四舍五入，int(12.56)=12，而不是13。说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_06",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "假定变量a和b可能是整型、字符型或浮点型，则下面C++代码执行时先后输入-2和3.14后，其输出不可能是（ ）。[已知字符'+'、'-'、'='的ASCII码值分别是43、45和61]\ncin>>a;\ncin>>b;\ncout<<(a+b);",
          "options": [
            "1",
            "1.14",
            "47",
            "将触发异常"
          ],
          "answer": 3,
          "explanation": "若a、b为int则-2+3=1；若为float则-2+3.14=1.14；若a为char、b为int，则cin读入-2的字符'-'（45），再读入整数2，45+2=47，都成立。C++的cin不会因输入引发异常，故选D。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，cout<<(3,4,5)可以输出3 4 5，且每个输出项之间用空格分开。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "圆括号内的逗号是逗号运算符，表达式(3,4,5)依次求值，结果取最后一个值5，所以cout输出的是5而不是3 4 5。说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_07",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b都是char类型的变量，下列哪个语句不符合C++语法？（ ）",
          "options": [
            "b = a + 1;",
            "b = a + '1';",
            "b = 'a'++;",
            "b = a++;"
          ],
          "answer": 2,
          "explanation": "'a'是字符常量，常量不能进行++自增运算，所以C不符合语法。A、B把字符按ASCII码做算术后赋给b，D让变量a自增后再把原值赋给b，都符合C++语法。故选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_08",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a、b、c和d都是int类型的变量，则下列哪个表达式能够正确计算它们的平均值？（ ）",
          "options": [
            "(a + b + c + d) / 4",
            "(a + b + c + d) % 4",
            "(a + b + c + d) / 4.0",
            "(a + b + c + d) % 4.0"
          ],
          "answer": 2,
          "explanation": "int除以int结果仍是int，会向下取整，A算出的平均值不准；%是求余运算符，B算出的是余数；%不能用于浮点数，D用法错误。C除以4.0后结果是double，能保留小数，故选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_09",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且a的值为'2'，则下列哪条语句执行后，a的值不会变为'3'？（ ）",
          "options": [
            "a = a + 1;",
            "a + 1;",
            "a = 1 + a;",
            "++a;"
          ],
          "answer": 1,
          "explanation": "B选项只计算了a+1这个表达式的值，却没有赋值给a，所以a仍然保持'2'。A、C都把结果赋给a，D用自增让a加1，三者都会使a变成'3'。故选B。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a是int类型的变量，而且值为1，则表达式'a'的值为'1'。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "加了单引号的'a'是字符常量，与变量a无关；字符常量'a'的值是它的ASCII码97，而字符'1'的ASCII码是49，两者完全不同。所以这句话错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_25",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式(10.0 / 2)的计算结果为5.0，且结果类型为double。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "10.0是double类型，与整数2相除时，2会自动提升为double，结果仍是double类型，值为5.0。所以这句话正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_03",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，正确的是（ ）。",
          "options": [
            "char类型变量不能赋值给int类型的变量",
            "两个int类型变量相乘，计算结果还是int类型",
            "计算两个int类型变量相乘时，如果乘积超出了int类型的取值范围，程序会报错崩溃",
            "计算两个double类型变量相除时，如果除数的值为0.0，程序会报错崩溃"
          ],
          "answer": 1,
          "explanation": "两个int相乘结果仍是int，所以B正确。char可以赋给int（自动转成ASCII值）；int溢出只得到错误结果但程序不崩溃；double除以0.0得到无穷大或NaN但也不崩溃。故选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_07",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为int类型的变量，b为char类型的变量，则下列哪个语句不符合C++语法？（ ）",
          "options": [
            "a = a + 1.0;",
            "a = (int)(b - '0');",
            "b = (char)(a + '0');",
            "(int)b = a;"
          ],
          "answer": 3,
          "explanation": "(int)b只是把b的值强制转换成int类型的结果，它是一个临时值而不是变量，不能作为赋值语句的左值，所以D不符合语法。A、B、C都是合法的类型转换与赋值。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_08",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "如果用两个int类型的变量a和b分别表达平行四边形的两条边长，用int类型的变量h表达a边对应的高，则下列哪个表达式不能用来计算b边对应的高？（ ）",
          "options": [
            "a÷b * (0.0 + h)",
            "(0.0 + a×h) / b",
            "a×h / (b + 0.0)",
            "(a + 0.0) * h÷b"
          ],
          "answer": 0,
          "explanation": "面积a×h等于b边乘以b边对应的高，所以高=a×h÷b。A先算a÷b，两个int相除会向下取整丢失精度，算出的高不正确。其它选项都通过+0.0把除数变成double，结果准确。故选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_13",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），使得输出是9。\n<pre><code>char a='3',b='6';\ncout<<______;</code></pre>",
          "options": [
            "(a + b)",
            "(a + b - '0')",
            "(char)(a + b)",
            "(char)(a + b - '0')"
          ],
          "answer": 3,
          "explanation": "'3'的ASCII码是51，'6'是54，a+b=105。105减掉'0'的48得57，正好是字符'9'的ASCII码，再强制转换成char就输出'9'。A输出105，B输出57，C输出字符'i'。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a是double类型的变量，而且值为3.5，则表达式a * 10的计算结果为35，且结果类型为int。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "double与int运算时，int会提升为double，结果类型是double。a×10得到35.0（double），不是int类型的35。所以这句话错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "C++表达式int(-123.123 / 10) 的值是（ ）。",
          "options": [
            "-124",
            "-123",
            "-13",
            "-12"
          ],
          "answer": 3,
          "explanation": "-123.123÷10=-12.3123，int()强制类型转换把小数部分直接截掉（向0取整），-12.3123变成-12。注意不是四舍五入。故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式7.8 / 2 的值为3.9，类型为float。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中不带后缀的小数默认是double类型，7.8÷2的结果是3.9，但类型是double，不是float。所以说类型为float是错误的。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，假设N为正整数，则cout << (N - N / 10 * 10) 将获得N的个位数。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "N÷10去掉个位，N÷10×10把个位变成0，N减去它正好剩下个位。例如N=123，123÷10=12，12×10=120，123-120=3，得到个位3。所以正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，假设N为正整数，则N - N / 10 * 10 与N % 10 都将获得N的个位数。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "N÷10×10把N的个位清成0，N减去它就只剩个位，等于N%10。例如N=123：123-120=3，123%10=3。两个表达式都得到个位数。正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_03",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n<pre><code>int a = 3;\nfloat b = 3.5;\ncout << (a *= b);</code></pre>",
          "options": [
            "A. 3",
            "B. 3.5",
            "C. 10",
            "D. 11"
          ],
          "answer": 2,
          "explanation": "a *= b 等价于 a = a×b，即 a = 3×3.5 = 10.5。由于a是int整型，把10.5赋给整型变量时会舍弃小数部分，只保留整数10。所以程序输出10，故选C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_04",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于获得正整数的第3位数，如1234则输出2；如果是一位数或两位数则输出0。横线处应填入（　）。\n<pre><code>cout << _________________;</code></pre>\n选项见各选项。",
          "options": [
            "A. N % 1000÷100",
            "B. N÷1000 % 100",
            "C. N÷1000÷100",
            "D. N % 100÷100"
          ],
          "answer": 0,
          "explanation": "求第3位数：先对1000取余去掉百位以上的高位，再除以100去掉百位以下的低位。如1234：1234%1000=234，234÷100=2。若N是一位或两位数，如56：56%1000=56，56÷100=0，正好输出0。故选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行，其输出是（　）。\n<pre><code>int a, b = (6, 28);\nb == a;\na = b;\ncout << a << ' ' << b;</code></pre>",
          "options": [
            "A. 6 28",
            "B. 6 6",
            "C. 28 6",
            "D. 28 28"
          ],
          "answer": 3,
          "explanation": "逗号表达式(6,28)的值是最后一个表达式的值28，所以b=28。b==a只是比较并丢弃结果，不改变任何变量。a=b把a也赋成28。最后输出a和b都是28，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，假设N为正整数，则N/10舍弃个位数；如果N小于10则其值为0，大于10则是舍弃个位数的数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "整型相除只保留整数部分。N<10时如7÷10=0；N大于等于10时如123÷10=12，正好去掉个位。说法符合C++整数除法规则，正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++代码执行后，其输出为10 20，即a==b和b==a对a和b的值没有任何影响。\n<pre><code>int a = 10, b = 20;\na == b;\nb == a;\ncout << (a, b);</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "a==b和b==a确实只是比较不改变变量，但cout<<(a,b)是逗号表达式，先计算a再计算b，最后输出的是b的值20，而不是\"10 20\"。所以题面说输出10 20是错误的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码编译时将报错，因为字符变量a被赋值了浮点值。\n<pre><code>char a = '1';\na = 45.6;\ncout << a;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中浮点值可以隐式转换为char，45.6赋给char时自动截断为整数45再转成对应字符，编译不会报错。所以题面说编译将报错是错误的。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_21",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行时如输入59.99，将输出及格两个汉字。\n<pre><code>int score;\ncin >> score;\nif (score < 60)\n    cout << \"不及格\";\nelse\n    cout << \"及格\";</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "score是int类型，输入59.99时只读入整数部分59。59<60成立，程序输出\"不及格\"而不是\"及格\"。所以题面说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_04",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于获得正整数N的第M位数（从右往左数，M在1到N的位数之间）。横线处应填入（　）。\n<pre><code>for (int i = 0; i < (M - 1); i++)\n    div *= 10;\ncout << (______);</code></pre>",
          "options": [
            "A. N % div÷10",
            "B. N÷div÷10",
            "C. N % div % 10",
            "D. N÷div % 10"
          ],
          "answer": 3,
          "explanation": "div=10的(M-1)次方，先N÷div把目标位移到个位，再%10取出。如N=1234、M=2时div=10：1234÷10=123，123%10=3。故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行，其输出是（　）。\n<pre><code>a, b = 3, 4;\nc = a == b;\ncout << a << ' ' << b << ' ' << c;</code></pre>",
          "options": [
            "A. 3 4 0",
            "B. 3 3 3",
            "C. 4 4 4",
            "D. 以上都不对"
          ],
          "answer": 3,
          "explanation": "逗号表达式a,b=3,4中只有b被赋为3，a未被赋值（未初始化），读未初始化的a结果是未知的，c=a==b也因而无法确定。所以输出不是A、B、C中的任何一个，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_06",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "编号规则\"XX-Y\"中XX从00到11、Y从0到9，同时增1循环。下面的C++代码用于生成第N个编号，横线处应填（　）。\n<pre><code>part1 = N % ____;\npart2 = N % ____;</code></pre>",
          "options": [
            "A. 12 10",
            "B. 10 10",
            "C. 11 9",
            "D. 9 9"
          ],
          "answer": 0,
          "explanation": "XX取值0到11共12个值，所以对12取余；Y取值0到9共10个值，所以对10取余。因此横线处应填12和10，故选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_17",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，假设N为正整数且大于100，则N/100舍弃个位和十位，如1234则输出12；如果N小于100，则其值为0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "整型除法舍去小数：1234÷100=12，去掉个位和十位。N<100时商为0。说法完全符合C++整数除法规则，正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_20",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行时如输入99.99，将输出及格两个汉字。\n<pre><code>int score;\ncin >> score;\nif (score >= 60)\n    printf(\"及格\");\nelse\n    printf(\"不及格\");</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "score为int类型，输入99.99只保留整数99，99>=60成立，输出\"及格\"。说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_04",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "小数0.123123123…无限循环，小数点后第N位是1、2、3循环。求第N位的值，横线处应填（　）。\n<pre><code>remainder = ______;\nif (remainder == 0)\n    cout << 1;\nelse if (remainder == 1)\n    cout << 2;\nelse\n    cout << 3;</code></pre>",
          "options": [
            "A. N % 3",
            "B. (N - 1) % 3",
            "C. N÷3",
            "D. (N - 1) / 3"
          ],
          "answer": 1,
          "explanation": "数字按1、2、3循环，第1位1、第2位2、第3位3、第4位1。用(N-1)%3：N=1得0输出1，N=2得1输出2，N=3得2输出3，N=4得0输出1，完全匹配。故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行printf(\"%g\\n\",(3+3.1415926535))输出6.14159，其原因最可能是（　）。",
          "options": [
            "A. 整数和浮点数相加时整数被转换，某些十进制小数无法精确表示而产生舍入误差",
            "B. printf输出浮点数时根据格式有默认位数，因此输出了较少的位数",
            "C. 3.1415926535是无限循环小数",
            "D. 计算机CPU运算错误"
          ],
          "answer": 1,
          "explanation": "%g默认输出6位有效数字，6.1415926535按6位有效数字舍入就是6.14159。所以主要是printf的默认精度导致，选B。A所述误差通常出现在尾数上，不是位数变少的主因；C、D明显错误。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_06",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "工号编码：前4位整除以3的商累加除以10的余数为第5位。下面代码依次输入前4位，两个横线处应填（　）。\n<pre><code>rst += ___L1___;\n...\ncout << ___L2___;</code></pre>",
          "options": [
            "A. N%3; rst÷10",
            "B. N%3; rst%10",
            "C. N÷3; rst÷10",
            "D. N÷3; rst%10"
          ],
          "answer": 3,
          "explanation": "L1处累加每位整除以3的商，应填N÷3；第5位是累加和除以10的余数，L2处应填rst%10。如76587：7÷3=2、6÷3=2、5÷3=1、8÷3=2，和为7，7%10=7，第5位为7。故选D。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式10/0.333333==10/(1/3)的值为true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "1÷3是两个整数相除，结果为0，10/(1÷3)即10÷0，发生除零错误，无法得到正常值，更不可能等于10÷0.333333。所以题面说值为true错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行cout<<((0.1+0.2)==0.3)时输出0，最可能的原因是（　）。",
          "options": [
            "A. C++的+运算符在处理小数时存在bug",
            "B. 0.1、0.2和0.3无法用二进制浮点数精确表示，导致0.1+0.2与0.3存在微小误差",
            "C. ==运算符不能用于比较浮点数",
            "D. 0.1+0.2的数学结果不等于0.3"
          ],
          "answer": 1,
          "explanation": "0.1、0.2、0.3在二进制浮点中都是无限不循环小数，只能近似表示。0.1+0.2的结果与0.3的近似值存在极微小误差，使==返回假。这是浮点数表示的固有限制，不是bug，故选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_13",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "借阅卡号由6位整数组成，前5位是顺序号，第6位是前5位数字之和除以10的余数。下面的代码用于判断卡号是否正确，横线处应填（　）。",
          "options": [
            "A. tnt+=order_num÷10; tnt÷10==check_num",
            "B. tnt+=order_num%10; tnt%10==check_num",
            "C. tnt=order_num÷10+tnt; tnt%10==check_num",
            "D. tnt=order_num%10; tnt÷10==check_num"
          ],
          "answer": 1,
          "explanation": "循环内应累加前5位数字，每次取order_num的个位即order_num%10，故填tnt+=order_num%10；判断时用累加和除以10的余数与校验位比较，即tnt%10==check_num。故选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码段执行时将报错，因为10是整数类型、a是布尔类型，由于类型不同不能进行加法运算。\n<pre><code>bool a = true;\ncout << (10 + a);</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++中bool会隐式转换为int，true为1，10+1=11，程序正常输出11，不会报错。所以题面说会报错是错误的。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_03",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "有关如下C++代码的说法，正确的是（　）。\n<pre><code>float a = 3 + 3.5;\ncout << a;</code></pre>",
          "options": [
            "A. 将报错，改为a=float(3)+3.5才能执行",
            "B. 将报错，改为a=3.0+3.5才能执行",
            "C. 能正常执行，将输出6",
            "D. 能正常执行，将输出6.5"
          ],
          "answer": 3,
          "explanation": "int和double相加时int自动转成double，3+3.5=6.5，赋给float后仍为6.5，程序输出6.5。A、B说会报错错误，C说输出6错误。故选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_05",
          "kp": "kp2_05",
          "type": "choice",
          "difficulty": 1,
          "question": "执行cout<<(2.5+2.25)<<' '<<(2.2+2.1)输出4.75 4.300000000000001，其原因最可能是（　）。",
          "options": [
            "A. +运算符处理浮点数时有时正确有时错误",
            "B. 某些浮点数难以精确表示，导致微小误差",
            "C. +运算符不能用于浮点数",
            "D. cout函数难以输出太长的数值"
          ],
          "answer": 1,
          "explanation": "2.2和2.1在二进制浮点中无法精确表示，2.2+2.1的结果略大于4.3，cout默认输出更多小数位就显示了4.300000000000001。这是浮点表示误差，不是运算错误，故选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_18",
          "kp": "kp2_05",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++语句cout<<(int(3.5)*2)将输出6。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "int(3.5)把3.5强制转换成整数3（截断小数），3×2=6。所以输出6，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_04": {
      "title": "ASCII编码",
      "questions": [
        {
          "id": "l2_202303_12",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，下列哪个表达式可以正确判断“a是小写字母”？",
          "options": [
            "a <= a <= z",
            "a - 'a' <= 'z' - 'a'",
            "'a' <= a <= 'z'",
            "a >= 'a' && a <= 'z'"
          ],
          "answer": 3,
          "explanation": "C++里“a<=a<=z”会先算左边得到0或1，再和z比，判断不准确；D用&&把“a>=‘a’”和“a<=‘z’”连起来，恰好表示a的ASCII在a到z之间，即小写字母，选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_14",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（　），可以使得输出是5。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint cnt = 0;\nfor (char ch = '1'; ch <= '9'; ch++)\nif (____) // 在此处填入代码\ncnt++;\ncout << cnt << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "ch < '5'",
            "ch >= 5",
            "ch >= '4'",
            "ch % 2 == 1"
          ],
          "answer": 3,
          "explanation": "ch%2==1会对ch的ASCII码取余。字符'1'到'9'的ASCII码中奇数有'1'、'3'、'5'、'7'、'9'共5个，正好输出5；其他选项分别得到4、9、6，所以选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_20",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a是int类型的变量，而且值为1，则表达式'a'的值为'1'。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "带单引号的'a'是字符常量，只和字符'a'本身有关，与变量a无关，更不等于字符'1'，所以本题说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_24",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且取值为小写字母，则执行语句a = a - 'a' + 'A';后，a的值会变为与原值对应的大写字母。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "小写字母减去'a'得到0~25，正好是它在字母表中的位置，再加上'A'就得到对应的大写字母，所以本题说法正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_12",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，下列哪个表达式可以正确判断“a是数字”？（　）",
          "options": [
            "'0' <= a && a <= '9'",
            "'1' <= a && a <= '0'",
            "'0' <= a <= '9'",
            "'1' <= a <= '0'"
          ],
          "answer": 0,
          "explanation": "数字字符的ASCII码从'0'到'9'连续，判断“a是数字”要用&&连接“a>=‘0’”和“a<=‘9’”。C、D写成连续比较是错误的写法，所以选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_13",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（　），使得输出是9。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nchar a = '3', b = '6';\ncout << ________; // 在此处填入代码\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "(a + b)",
            "(a + b - '0')",
            "(char)(a + b)",
            "(char)(a + b - '0')"
          ],
          "answer": 3,
          "explanation": "字符a是'3'（ASCII 51），b是'6'（ASCII 54），a+b-'0'=51+54-48=57，正是字符'9'的ASCII码；a+b-‘0’结果是int，需要(char)转回字符输出，所以选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_24",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且取值为大写字母'F'，则执行语句a = a + 1;后，a的值会变为大写字母'G'。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "大写字母的ASCII码连续，'F'的ASCII码加1正好是'G'的ASCII码，所以a会变为'G'，本题说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_13",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面图形每一行从字母A开始，以ABC方式重复。行数为输入的整数。请在C++代码段横线处填入合适代码（　）。\n```cpp\nint N = 0;\ncout << \"请输入行列数量:\";\ncin >> N;\nfor (int i = 1; i < N + 1; i++) {\nfor (int j = 0; j < i; j++)\ncout << __________; // 此处填写代码\ncout << endl;\n}\n```",
          "options": [
            "'A' + j÷3",
            "(char)('A' + j÷3)",
            "'A' + j % 3",
            "(char)('A' + j % 3)"
          ],
          "answer": 3,
          "explanation": "j%3在0、1、2之间循环，对应A、B、C循环输出；而j÷3在j较小时一直为0，会连续输出A。字符与整数相加得到int，需要(char)转回字符，所以选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_17",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式 2*int('9')*2 的值为36。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "字符'9'的ASCII码是57，int('9')得到57，2×57×2=228，而不是36。注意数字字符对应的ASCII码不是其数值，'0'的ASCII码是48，'9'是57。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_21",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "已知A的ASCII码值为65，表达式int('C')+abs(-5.8)的值为72.8。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "'C'的ASCII码为67（A为65、B为66、C为67），abs(-5.8)=5.8，int('C')+abs(-5.8)=67+5.8=72.8，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_16",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "执行C++代码cout<<'9'+'1';的输出为10。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'9'的ASCII码是57，'1'的ASCII码是49，字符相加按ASCII码运算：57+49=106，输出106而不是10。数字字符相加不是数值相加，说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_20",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "定义C++的int类型的变量ch，而且值为'1'，则语句cout<<int(ch);的输出为1。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "ch的值为字符'1'，存入int的是其ASCII码49，int(ch)输出49，而不是1。数字字符的ASCII码不等于其数值，说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_12",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，下列哪个表达式可以正确判断“a是小写字母”？（ ）",
          "options": [
            "a <= a <= z",
            "a - 'a' <= 'z' - 'a'",
            "'a' <= a <= 'z'",
            "a >= 'a' && a <= 'z'"
          ],
          "answer": 3,
          "explanation": "判断a是不是小写字母，就是要a的ASCII码不小于'a'且不大于'z'，两个条件要同时成立，必须用&&连接，即a>='a'&&a<='z'。A、C写成连比形式会先算出0或1再比较，结果是错的。故选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_14",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是`5`。\n<pre><code>for(char ch='1'; ch<='9'; ch++)\n    if(___) cnt++;\ncout<<cnt;</code></pre>",
          "options": [
            "ch < '5'",
            "ch >= 5",
            "ch >= '4'",
            "ch % 2 == 1"
          ],
          "answer": 3,
          "explanation": "ch是字符，参与%运算时取其ASCII码。'1'到'9'的ASCII码分别是49,50,...,57，其中49,51,53,55,57共5个是奇数，ch%2==1时cnt正好加5次。A只数4个，C数6个，故选D。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_24",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且取值为小写字母，则执行语句a = a - 'a' + 'A';后，a的值会变为与原值对应的大写字母。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "小写字母减去'a'得到0~25，正好是该字母在字母表中的位置；再加上'A'就对应到A~Z。例如'a'-'a'+'A'='A'，'z'-'a'+'A'='Z'。所以这句话正确。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_10",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且a的值为'C'（已知'C'的ASCII码为67），则执行cout << (a + 2);会输出（ ）。",
          "options": [
            "E",
            "C+2",
            "C2",
            "69"
          ],
          "answer": 3,
          "explanation": "char与int运算时，char会提升为int。a+2就是67+2=69，结果是int类型，所以cout输出整数69，而不是字符'E'。故选D。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_12",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a为char类型的变量，下列哪个表达式可以正确判断“a是数字”？（ ）",
          "options": [
            "'0' <= a && a <= '9'",
            "'1' <= a && a <= '0'",
            "'0' <= a <= '9'",
            "'1' <= a <= '0'"
          ],
          "answer": 0,
          "explanation": "数字字符'0'到'9'的ASCII码连续，判断a是不是数字就要a的ASCII码在'0'和'9'之间，两个条件同时成立用&&，即'0'<=a&&a<='9'。C、D写成连比形式会先算出0或1再比较，结果错误。故选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_24",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为char类型的变量，且取值为大写字母'F'，则执行语句a = a + 1;后，a的值会变为大写字母'G'。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "大写字母的ASCII码连续，'F'的ASCII码加1正好是'G'的ASCII码，所以a+1赋给a后a就变成'G'。这句话正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_13",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面图形每一行从字母A开始，以ABC方式重复。行数为输入的整数。请在C++代码段横线处填入合适代码（ ）。\n<pre><code>for (int j = 0; j < i; j++)\n    cout << ____;</code></pre>",
          "options": [
            "'A' + j÷3",
            "(char)('A' + j÷3)",
            "'A' + j % 3",
            "(char)('A' + j % 3)"
          ],
          "answer": 3,
          "explanation": "j从0开始，j%3的值按0,1,2,0,1,2循环，加上'A'后对应A,B,C,A,B,C，正好每行从A开始按ABC重复。由于'A'+j%3是int类型，需要(char)强转后才能输出字符。故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_14",
          "kp": "kp2_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行，其输出是（　）。\n<pre><code>int a = 9, b = 27;\na = 'a' + 'b';\nb = 'a' - 'b';\na = a - b;\ncout << a << ' ' << b;</code></pre>",
          "options": [
            "A. 196 -1",
            "B. 27 9",
            "C. 98 97",
            "D. 不确定"
          ],
          "answer": 0,
          "explanation": "'a'的ASCII码是97，'b'是98。a=97+98=195，b=97-98=-1，a=195-(-1)=196。所以输出196 -1，故选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_21",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面的C++代码时输入123，则输出是DCB。\n<pre><code>while (a)\n{\n    cout << 'A' + a % 10;\n    a /= 10;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'A'+a%10的结果是int类型（ASCII码相加），cout按整数输出。123时依次得68、67、66，输出\"686766\"，而不是字符DCB。所以题面说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_25",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "C++代码cout<<('5'+4)执行后的输出为9。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'5'的ASCII码是53，'5'+4=57，cout输出整数57，而不是字符9。所以题面说输出9是错误的。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_21",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "C++代码中对表达式('Z'-'A')<('z'-'A')的结果输出为0。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'Z'-'A'=90-65=25，'z'-'A'=122-65=57，25<57成立为真，输出1而不是0。所以题面说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_17",
          "kp": "kp2_04",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语句cout<<('4'%'2'=='2'*'2'%2)执行后的输出是1。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "'4'=52、'2'=50，52%50=2；'2'*'2'=2500，2500%2=0。2==0为假，输出0而不是1。所以题面说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_07": {
      "title": "多层循环语句",
      "questions": [
        {
          "id": "l2_202303_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++语言程序后，输出结果是（　）。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint n = 17;\nbool isprime = true;\nfor (int i = 2; i <= n; i++)\nif (n % i == 0)\nisprime = false;\ncout << isprime << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "false",
            "true",
            "0",
            "1"
          ],
          "answer": 2,
          "explanation": "循环让i从2到17判断n是否能被整除，因为17能被自身17整除，isprime最终一定为false；而bool用cout输出时是0或1，false输出为0，所以选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "while语句的循环体至少会执行一次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "while是先判断条件再执行循环体，如果一开始条件就不成立，循环体一次也不会执行，所以“至少执行一次”的说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202303_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "画三角形\n【问题描述】输入一个正整数n，请使用大写字母拼成一个这样的三角形图案：三角形图案的第1行有1个字母，第2行有2个字母，以此类推；在三角形图案中，由上至下、由左至右依次由大写字母A-Z填充，每次使用大写字母Z填充后，将从头使用大写字母A填充。\n【输入描述】输入一行，包含一个正整数n。约定2≤n≤40。\n【输出描述】输出符合要求的三角形图案。注意每行三角形图案的右侧不要有多余的空格。\n\n【样例输入 1】\n3\n【样例输出 1】\nA\nBC\nDEF\n【数据范围】\n2 ≤ n ≤ 40",
          "options": null,
          "answer": null,
          "explanation": "思路：用ch从0开始计数，外层循环i控制行数（1到n），内层循环j控制每行字母个数（第i行有i个）。输出时把ch转成大写字母，即(char)('A'+(ch++)%26)，取%26保证Z之后回到A。每行结束输出换行。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;                          // 定义变量n，表示三角形有几行\n    cin >> n;                       // 读入行数n\n    int ch = 0;                     // ch用来数“已经输出了几个字母”，从0开始\n    for (int i = 1; i <= n; i++) {  // 外层循环：画第i行，i从1到n\n        for (int j = 1; j <= i; j++) {   // 内层循环：第i行要画i个字母\n            cout << (char)('A' + (ch++) % 26);  // 把计数变成字母：0=A、1=B……25=Z，到Z后回到A\n        }\n        cout << endl;               // 这一行画完了，换到下一行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3",
              "expectedOutput": "A\nBC\nDEF"
            },
            {
              "input": "7",
              "expectedOutput": "A\nBC\nDEF\nGHIJ\nKLMNO\nPQRSTU\nVWXYZAB"
            }
          ]
        },
        {
          "id": "l2_202303_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "百鸡问题\n【问题描述】“百鸡问题”是出自我国古代《张丘建算经》的著名数学问题。大意为：“每只公鸡5元，每只母鸡3元，每3只小鸡1元；现在有100元，买了100只鸡，共有多少种方案？”小明决定对这个问题进行扩展：如果每只公鸡x元，每只母鸡y元，每z只小鸡1元；现在有n元，买了m只鸡，共有多少种方案？\n【输入描述】输入一行，包含五个整数，分别为问题描述中的x、y、z、n、m。约定1≤x, y, z ≤10，1≤ n, m ≤1000。\n【输出描述】输出一行，包含一个整数C，表示有C种方案。\n\n【样例输入 1】\n5 3 3 100 100\n【样例输出 1】\n4\n【数据范围】\n1 ≤ x ≤ 10\n1 ≤ y ≤ 10\n1 ≤ z ≤ 10\n1 ≤ n ≤ 1000\n1 ≤ m ≤ 1000",
          "options": null,
          "answer": null,
          "explanation": "思路：用两层循环枚举公鸡数量gj和母鸡数量mj，条件保证花销不超过n且鸡总数不超过m。由剩余钱数算出小鸡数量xj=(n-gj×x-mj×y)*z，再判断gj+mj+xj是否等于m，若相等方案数加1。枚举结束后输出cnt。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int x, y, z, n, m, cnt = 0;     // 定义：公鸡x元、母鸡y元、z只小鸡1元、钱n元、共m只鸡，cnt记录方案数\n    cin >> x >> y >> z >> n >> m;   // 读入这5个数\n    // 枚举公鸡数量，花销和只数都不能超过限制\n    for (int gj = 0; gj * x <= n && gj <= m; gj++)   // 试公鸡0只、1只、2只……，钱和只数都不能超\n        // 枚举母鸡数量\n        for (int mj = 0; mj * y + gj * x <= n && mj + gj <= m; mj++) {  // 公鸡定了后，再试母鸡的只数\n            int xj = (n - gj * x - mj * y) * z; // 用剩下的钱算出能买多少只小鸡\n            if (gj + mj + xj == m) // 判断三种鸡的总数是否正好等于m\n                cnt++; // 方案数加1\n        }\n    cout << cnt << endl;            // 输出共有多少种方案\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 3 3 100 100",
              "expectedOutput": "4"
            },
            {
              "input": "1 1 1 100 100",
              "expectedOutput": "5151"
            }
          ]
        },
        {
          "id": "l2_202306_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（　），可以使得输出是42。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nint sum = 0;\nfor (int i = 1; i <= 20; i++)\nif (______) // 在此处填入代码\nsum += i;\ncout << sum << endl;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "i % 3 == 0",
            "20 % i == 0",
            "i <= 8",
            "i >= 18"
          ],
          "answer": 1,
          "explanation": "20%i==0表示i能整除20，即i是20的约数。1到20中20的约数是1、2、4、5、10、20，和为42；其他选项结果分别是63、36、57，所以选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++语言程序后，输出结果是（　）。\n```cpp\n<pre><code>#include <iostream>\nusing namespace std;\nint main() {\nfor (char x = 'A'; x <= 'D'; x++)\nif ((x != 'A') + (x == 'C') + (x == 'D') + (x != 'D') == 3)\ncout << x;\nreturn 0;\n}\n```</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 2,
          "explanation": "条件成立时每项值为1，否则为0。x取A、B、D时四个条件相加分别为1、2、2；取C时(x!='A')为1、(x=='C')为1、(x=='D')为0、(x!='D')为1，和为3成立，输出C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "循环语句的循环体有可能无限制地执行下去。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "如果每次判断循环条件结果都为真，循环体就会一直执行，形成死循环，所以“循环体有可能无限执行”的说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "找素数\n【问题描述】小明刚刚学习了素数的概念：如果一个大于1的正整数，除了1和它自身外，不能被其他正整数整除，则这个正整数是素数。现在，小明想找到两个正整数A和B之间（包括A和B）有多少个素数？\n【输入描述】输入2行，第一行包含正整数A，第二行包含正整数B。约定2≤A≤B≤1000。\n【输出描述】输出一行，包含一个整数C，表示找到C个素数。\n\n【样例输入 1】\n2\n10\n【样例输出 1】\n4\n【数据范围】\n2 ≤ A ≤ B ≤ 1000",
          "options": null,
          "answer": null,
          "explanation": "思路：从A到B枚举每个数n，用isPrime标记它是否是素数，初始为true。判断时只需枚举i从2到根号n，若n能整除i则isPrime=false并跳出。n是素数就cnt加1，最后输出cnt。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 0, b = 0, cnt = 0;      // 定义范围a到b，cnt记录素数的个数\n    cin >> a >> b;                  // 读入a和b\n    for (int n = a; n <= b; n++) {  // 把a到b之间的每个数n都检查一遍\n        bool isPrime = true; // 先假设n是素数\n        for (int i = 2; i * i <= n; i++) { // 只需检查到根号n\n            if (n % i == 0) {       // 如果n能被i整除，说明n不是素数\n                isPrime = false;    // 标记为不是素数\n                break;              // 不用再往下检查了\n            }\n        }\n        if (isPrime)                // 如果检查完还是素数标记\n            cnt++; // 统计素数个数  // 素数的个数加1\n    }\n    cout << cnt << endl;            // 输出素数的个数\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n10",
              "expectedOutput": "4"
            },
            {
              "input": "98\n100",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "l2_202306_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "自幂数判断\n【问题描述】自幂数是指，一个n位数，满足各位数字n次方之和是本身。例如，153是3位数，其每位数的3次方之和1^3+5^3+3^3=153，因此153是自幂数；1634是4位数，其每位数的4次方之和1^4+6^4+3^4+4^4=1634，因此1634是自幂数。现在，输入若干个正整数，请判断它们是否是自幂数。\n【输入描述】输入第一行是一个正整数m，表示有m个待判断的正整数。约定1≤m≤100。从第2行开始的m行，每行一个待判断的正整数。约定这些正整数均小于10^8。\n【输出描述】输出m行，如果对应的待判断正整数为自幂数，则输出英文大写字母'T'，否则输出英文大写字母'F'。\n\n【样例输入 1】\n3\n152\n111\n153\n【样例输出 1】\nF\nF\nT\n【数据范围】\n1 ≤ m ≤ 100\n1 ≤ n < 10^8",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个数n，先把它不断除以10统计位数l；再用while循环每次取个位d，用内层for循环求d的l次方并累加到sum；最后若sum等于n则输出T，否则输出F。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int m = 0;                      // 定义m，表示要判断几个数\n    cin >> m;                       // 读入m\n    for (int i = 0; i < m; i++) {   // 依次处理每个数\n        int n = 0;                  // 定义变量n\n        cin >> n;                   // 读入要判断的数n\n        // 数一下n有多少位数，记为l\n        int t = n, l = 0;           // 用t复制n，l用来数位数\n        while (t > 0) {             // 只要t还没变成0\n            t /= 10;                // 去掉t的最后一位\n            l++;                    // 位数加1\n        }\n        // 每位数l次方求和，记为sum\n        int sum = 0;                // sum存各位数字的l次方之和\n        t = n;                      // 重新把n复制给t\n        while (t > 0) {             // 取出每一位数字\n            int d = t % 10;         // 取t的个位数d\n            t /= 10;                // 去掉已经取过的个位\n            int mul = 1;            // mul用来算d的l次方，从1开始乘\n            for (int j = 0; j < l; j++)  // 连续乘l次\n                mul *= d;           // 每次都乘以d，得到d的l次方\n            sum += mul;             // 把结果加到总和里\n        }\n        // 判断是否为自幂数\n        if (sum == n)               // 如果各位数字次方之和等于原数\n            cout << \"T\" << endl;    // 是自幂数，输出T\n        else\n            cout << \"F\" << endl;    // 不是自幂数，输出F\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n152\n111\n153",
              "expectedOutput": "F\nF\nT"
            },
            {
              "input": "5\n8208\n548834\n88593477\n12345\n5432",
              "expectedOutput": "T\nT\nT\nF\nF"
            }
          ]
        },
        {
          "id": "l2_202309_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码实现从大到小的顺序输出 N 的所有因子。例如，输入 N = 18 时输出 18 9 6 3 2 1 ，横线处应填入（　）。\n```cpp\nint N = 0;\ncin >> N;\nfor (________________) // 此处填写代码\nif (!(N % i))\ncout << i << ' ';\n```",
          "options": [
            "; ;",
            "int i = 1; i < N; i++",
            "int i = N; i > 0; i--",
            "int i = N; i > 1; i--"
          ],
          "answer": 2,
          "explanation": "要从大到小输出N的所有因子，i应从N开始每次减1直到1，即int i=N; i>0; i--。D用i>1会漏掉因子1，所以选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "如下图 所示，输出 N 行 N 列的矩阵，对角线为1，横线处应填入（　）。\n```cpp\nint N = 0;\ncout << \"请输入行列数量:\";\ncin >> N;\nfor (int i = 1; i < N + 1; i++) {\nfor (int j = 1; j < N + 1; j++)\nif (___________) // 此处填写代码\ncout << 1 << \" \";\nelse\ncout << 0 << \" \";\ncout << endl;\n}\n```",
          "options": [
            "i = j",
            "j != j",
            "i >= j",
            "i == j"
          ],
          "answer": 3,
          "explanation": "对角线元素的特点是行号等于列号，即i==j，所以填i==j时输出1，其余位置输出0，选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于判断 N 是否为质数（素数），约定输入 N 为大于等于2的正整数，请在横线处填入合适的代码（　）。\n```cpp\nint N = 0, i = 0;\ncout << \"请输入一个大于等于2的正整数：\";\ncin >> N;\nfor (i = 2; i < N; i++)\nif (N % i == 0) {\ncout << \"非质数\";\n_________; // 此处填写代码\n}\nif (i == N)\ncout << \"是质数\";\n```",
          "options": [
            "break",
            "continue",
            "exit",
            "return"
          ],
          "answer": 0,
          "explanation": "一旦发现N能被2到N-1之间的某个i整除，说明N不是质数，输出“非质数”后应立刻跳出循环，所以填break，选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n```cpp\nint N = 9;\nfor (int i = 2; i < N; i++)\nif (N % i)\ncout << \"1#\";\ncout << \"0\" << endl;\n```",
          "options": [
            "1#0",
            "1#",
            "1#1#1#1#1#1",
            "1#1#1#1#1#1#0"
          ],
          "answer": 3,
          "explanation": "N=9，i从2到8，若9%i不为0就输出1#。9%2、%4、%5、%6、%7、%8都不为0，共输出6次1#，最后无条件输出0，所以结果是“1#1#1#1#1#1#0”，选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n```cpp\nint cnt = 0;\nfor (int i = 1; i < 9; i++)\nfor (int j = 1; j < i; j += 2)\ncnt += 1;\ncout << cnt;\n```",
          "options": [
            "16",
            "28",
            "35",
            "36"
          ],
          "answer": 0,
          "explanation": "外层i从1到8，内层j从1到i-1且每次加2。i=1时0次，i=2时1次，i=3时1次，i=4时2次，i=5时2次，i=6时3次，i=7时3次，i=8时4次，合计16次，选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n```cpp\nint cnt = 0;\nfor (int i = 1; i < 13; i += 3)\nfor (int j = 1; j < i; j += 2)\nif (i * j % 2 == 0)\nbreak;\nelse\ncnt += 1;\ncout << cnt;\n```",
          "options": [
            "1",
            "3",
            "15",
            "没有输出"
          ],
          "answer": 1,
          "explanation": "i取1、4、7、10。i=1时内层不执行；i=4时j=1，i×j为偶数直接break；i=10时j=1也为偶数break；只有i=7时j取1、3、5，i×j都为奇数，cnt加3，所以选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n```cpp\nint x = 1;\nwhile (x < 100) {\nif (!(x % 3))\ncout << x << \",\";\nelse if (x / 10)\nbreak;\nx += 2;\n}\ncout << x;\n```",
          "options": [
            "1",
            "3,9,11",
            "3,6,9,10",
            "1,5,7,11,13,15"
          ],
          "answer": 1,
          "explanation": "x依次取1,3,5,7,9,11……x能被3整除时输出：x=3输出“3,”，x=9输出“9,”；x=11时x÷10不为0，执行break跳出循环，最后输出x的值11，结果为“3,9,11”，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "输入行数，约定1≤ lineCount ≤ 9，输出以下图形。应在C++代码横线处填入（　）。\n```cpp\nint lineCount = 0;\ncout << \"请输入行数量:\";\ncin >> lineCount;\nfor (int i = 0; i < lineCount; i++) {\nfor (int j = 0; j < ____________; j++) // 此处填写代码\ncout << ' ';\nfor (int j = 1; j < i + 1; j++)\ncout << j << \" \";\nfor (int j = i + 1; j > 0; j--)\ncout << j << \" \";\ncout << endl;\n}\n```",
          "options": [
            "(lineCount - i - 1) * 2",
            "(lineCount - i) * 2",
            "lineCount - i - 1",
            "lineCount - i"
          ],
          "answer": 0,
          "explanation": "每行前面的空格逐行减少，最后一行不输出空格；又因数字之间有一个空格，前面的空格数要乘2。第i行（从0开始）空格数为(lineCount-i-1)*2，选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "某班级人数不知，连续输入成绩直到输入负数停止，输入结束后求出平均成绩。在以下C++代码横线处应填入是（　）。\n```cpp\ndouble totalScore = 0;\nint studCount = 0;\nwhile (______) { // 此处填写代码\ncin >> score;\nif (score < 0)\nbreak;\ntotalScore += score;\nstudCount += 1;\n}\ncout << \"平均分=\" << totalScore / studCount;\n```",
          "options": [
            "true",
            "false",
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "while条件用true让循环一直进行，靠循环体内的break在输入负数时退出。C、D的True÷False在C++中不是布尔关键字，B的false会直接不进循环，所以选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出为 10 。\n```cpp\nint cnt = 0;\nfor (int i = 1; i < 10; i++) {\ncnt += 1;\ni += 1;\n}\ncout << cnt;\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "循环体内i每次先自加1，再加上for的i++，实际i每次增加2。i取1、3、5、7、9共循环5次，cnt为5，输出5而不是10，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行以下C++代码后的输出为 0 。\n```cpp\nint rst = 0;\nfor (int i = -100; i < 100; i += 2)\nrst += i;\ncout << rst;\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i取-100,-98,…,-2,0,2,…,98，正好成对抵消：-100+100、-98+98……剩下-100（或按首尾和计算为-100），rst=-100，不是0，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行以下C++代码后的输出为 30 。\n```cpp\nint rst = 0;\nfor (int i = 0; i < 10; i += 2)\nrst += i;\ncout << rst;\n```",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i依次取0、2、4、6、8，累加得到0+2+4+6+8=20，输出20而不是30，所以本题说法错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "小杨的X字矩阵\n【问题描述】小杨想要构造一个N×N的X字矩阵（N为奇数），这个矩阵的两条对角线都是半角加号+，其余都是半角减号-。例如，一个5×5的X字矩阵如下：\n+---+\n-+-+-\n--+--\n-+-+-\n+---+\n请你帮小杨根据给定的N打印出对应的“X字矩阵”。\n【输入描述】一行一个整数N（5≤N≤49，保证N为奇数）。\n【输出描述】输出对应的“X字矩阵”。请严格按格式要求输出，不要擅自添加任何空格、标点、空行等任何符号。你应该恰好输出N行，每行除了换行符外恰好包含N个字符，这些字符要么是+，要么是-。\n\n【样例输入 1】\n5\n【样例输出 1】\n+---+\n-+-+-\n--+--\n-+-+-\n+---+\n【数据范围】\n5 ≤ N ≤ 49",
          "options": null,
          "answer": null,
          "explanation": "思路：双层循环i、j从0到n-1。主对角线条件是i==j，副对角线条件是i+j==n-1，满足任一就输出+，否则输出-。每行结束后换行。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 0;                      // 定义矩阵边长n\n    cin >> n;                       // 读入n\n    for (int i = 0; i < n; i++) {   // 外层循环：第i行，i从0到n-1\n        for (int j = 0; j < n; j++) {   // 内层循环：第j列\n            if (i == j || i + j == n - 1) // 主对角线或副对角线\n                cout << \"+\";        // 在对角线上就输出+\n            else\n                cout << \"-\";        // 不在对角线上就输出-\n        }\n        cout << endl;               // 一行画完，换行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "+---+\n-+-+-\n--+--\n-+-+-\n+---+"
            },
            {
              "input": "7",
              "expectedOutput": "+-----+\n-+---+-\n--+-+--\n---+---\n--+-+--\n-+---+-\n+-----+"
            }
          ]
        },
        {
          "id": "l2_202309_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "数字黑洞\n【问题描述】给定一个三位数，要求各位不能相同。例如，352是符合要求的，112是不符合要求的。将这个三位数的三个数字重新排列，得到的最大数减去得到的最小数，形成一个新的三位数。对这个新的三位数可以重复上述过程。神奇的是，最终一定会得到495！\n例如，重新排列352，最大数为532，最小数为235，差为297；变换297得693；变换693得594；变换594得495。因此，352经过4次变换得到了495。\n现在，输入一个三位数，你能通过编程得出，这个三位数经过多少次变换能够得到495吗？\n【输入描述】输入一行，包含一个符合要求的三位数。\n【输出描述】输出一行，包含一个整数C，表示经过C次变换得到495。\n\n【样例输入 1】\n352\n【样例输出 1】\n4\n【数据范围】\n100 ≤ n ≤ 999",
          "options": null,
          "answer": null,
          "explanation": "思路：用变量t记录变换次数，每轮先判断n是否等于495，是则输出t结束。否则取出个、十、百位，按大小分成最大数和最小数，用差值更新n并让t加1，循环直到得到495。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 0;                      // 定义变量n，存放当前的三位数\n    cin >> n;                       // 读入初始三位数\n    for (int t = 0; ; t++) {        // t记录变换次数；这是一个一直循环的循环\n        if (n == 495) {             // 如果已经变成495\n            cout << t << endl;      // 输出变换次数\n            break;                  // 结束循环\n        }\n        int m0 = n % 10, m1 = n / 10 % 10, m2 = n / 100; // 个位、十位、百位\n        int tmax = 0, tmin = 0;     // tmax存重新排出的最大数，tmin存最小数\n        // 按三个数字的大小排列出最大值和最小值\n        if (m0 >= m1 && m1 >= m2) { // 个位≥十位≥百位时\n            tmax = m0 * 100 + m1 * 10 + m2;  // 最大数按 大、中、小 排\n            tmin = m2 * 100 + m1 * 10 + m0;  // 最小数按 小、中、大 排\n        } else if (m0 >= m2 && m2 >= m1) {   // 个位≥百位≥十位时\n            tmax = m0 * 100 + m2 * 10 + m1;  // 最大数按 大、中、小 排\n            tmin = m1 * 100 + m2 * 10 + m0;  // 最小数按 小、中、大 排\n        } else if (m1 >= m0 && m0 >= m2) {   // 十位≥个位≥百位时\n            tmax = m1 * 100 + m0 * 10 + m2;  // 最大数按 大、中、小 排\n            tmin = m2 * 100 + m0 * 10 + m1;  // 最小数按 小、中、大 排\n        } else if (m1 >= m2 && m2 >= m0) {   // 十位≥百位≥个位时\n            tmax = m1 * 100 + m2 * 10 + m0;  // 最大数按 大、中、小 排\n            tmin = m0 * 100 + m2 * 10 + m1;  // 最小数按 小、中、大 排\n        } else if (m2 >= m0 && m0 >= m1) {   // 百位≥个位≥十位时\n            tmax = m2 * 100 + m0 * 10 + m1;  // 最大数按 大、中、小 排\n            tmin = m1 * 100 + m0 * 10 + m2;  // 最小数按 小、中、大 排\n        } else {                    // 最后一种：百位≥十位≥个位\n            tmax = m2 * 100 + m1 * 10 + m0;  // 最大数按 大、中、小 排\n            tmin = m0 * 100 + m1 * 10 + m2;  // 最小数按 小、中、大 排\n        }\n        n = tmax - tmin; // 更新为新的三位数  // 用最大数减最小数，得到新的三位数\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "352",
              "expectedOutput": "4"
            },
            {
              "input": "123",
              "expectedOutput": "5"
            }
          ]
        },
        {
          "id": "l2_2023-12_02",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，与 for(int i=10; i<20; i+=2) cout<<i; 输出结果相同的是（ ）。",
          "options": [
            "for(int i=10; i<19; i+=2) cout<<i;",
            "for(int i=11; i<19; i+=2) cout<<i;",
            "for(int i=10; i<21; i+=2) cout<<i;",
            "以上均不对"
          ],
          "answer": 0,
          "explanation": "原循环输出10,12,14,16,18共5个数。A项i从10到18步长2，输出完全相同；B项从11开始多输出11；C项i<21会多输出20。因此只有A与原循环输出一致。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_03",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码实现从小到大的顺序输出能整除N的数（N的因子），例如N=18时输出1 2 3 6 9 18，横线处应填入（ ）。\ncin>>N;\nfor(___) if(N%i==0) cout<<i<<\" \";",
          "options": [
            "int i=0; i<N; i++",
            "int i=1; i<N; i++",
            "int i=0; i<N+1; i++",
            "int i=1; i<N+1; i++"
          ],
          "answer": 3,
          "explanation": "要输出N的全部因子且包含N本身，i应从1循环到N（含）。A、C从0开始，0会作为除数出错且多算；B到N-1为止漏掉N；D从1到N含N，恰好输出全部因子。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于判断输入的整数是否为对称数，如1221、12321是对称数，但123、972不是对称数。下面对该题对应代码的说法，正确的是（ ）。\ncin>>N;\nnewNum=0;\nwhile(N){ newNum=newNum*10+N%10; N=N/10; }\nif(newNum==N) cout<<N<<\"为对称数\";",
          "options": [
            "代码没有语法错误，如果N为对称数，第8行将能正确输出。",
            "代码没有语法错误，但如果N为负数，将导致死循环。",
            "代码存在语法错误，程序不能被执行。",
            "代码没有语法错误，但不能达到预期目标，因为循环结束N总为0。"
          ],
          "answer": 3,
          "explanation": "while循环不断把N除以10，循环结束时N必为0，此时newNum存放的是N的倒序数。if(newNum==N)变成判断newNum是否等于0，且输出的是已经变成0的N，所以程序不能达到判断对称数的目标，故选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_05",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于判断N（大于等于2的正整数）是否为质数（素数）。下面对如下代码的说法，正确的是（ ）。\ncin>>N;\nfor(i=2;i<N/2;i++) if(N%i==0){ cout<<N<<\" 不是质数\"; break; }\nif(i>=N/2) cout<<N<<\" 是质数\";",
          "options": [
            "代码能正确判断N是否为质数。",
            "代码总是不能判断N是否质数。",
            "删除第5行break，将能正确判断N是否质数。",
            "代码存在漏洞，边界存在问题，应将第2行和第7行的N÷2改为N÷2+1。"
          ],
          "answer": 3,
          "explanation": "循环条件i<N÷2漏掉了i等于N÷2这一关键除数。例如N=4时i=2正好等于N÷2，循环不执行，会错误输出“是质数”。改为i<N÷2+1（即i<=N÷2）才能测到边界，故D正确。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nN=4;\nfor(int i=0;i<N;i++){ for(int j=1;j<i;j++) if(i*j%2==0) cout<<i<<\"#\"; continue; }\ncout<<\"0\";",
          "options": [
            "2#3#0",
            "1#2#0",
            "1#0#",
            "2#3#"
          ],
          "answer": 0,
          "explanation": "i=2时j=1，2×1=2为偶数输出2#；i=3时j=1乘积3为奇数、j=2乘积6为偶数输出3#。外层continue对结果无影响，循环结束后输出0，所以结果是2#3#0。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\ncnt=0;\nfor(i=1;i<10;i++) for(j=1;j<i;j+=2) if(i*j%2==0){ cnt++; break; }\nif(i>=10) cout<<cnt<<\"#\";\ncout<<cnt;",
          "options": [
            "0",
            "8#8",
            "4",
            "4#4"
          ],
          "answer": 3,
          "explanation": "只有当i为偶数时内层第一个j就能使i×j为偶数，cnt加1并break，所以i=2,4,6,8各计一次，cnt=4。循环结束后i=10满足i>=10，输出4#，最后再输出4，结果为4#4。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nint N=100;\nwhile(N>0){ if(N%2) break; else if(N%3==0) N-=5; else N-=20; }\ncout<<N;",
          "options": [
            "100",
            "95",
            "55",
            "0"
          ],
          "answer": 2,
          "explanation": "N=100为偶数且100%3!=0，减去20得80；80仍非3的倍数，再减20得60；60能被3整除，减5得55；55为奇数触发break，循环结束输出55。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\ncnt=0;\nfor(i=0;i<5;i++) for(j=0;j<i;j++) cnt+=1;\ncout<<cnt;",
          "options": [
            "5",
            "10",
            "20",
            "30"
          ],
          "answer": 1,
          "explanation": "外层i从0到4，内层j从0到i-1执行的次数分别为0、1、2、3、4，累计0+1+2+3+4=10次，cnt最终为10，输出10。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码用于实现如左图所示的数字三角效果，应在右图C++代码中填入（ ）。\ncin>>N;\nfor(i=0;i<N;i++){\nnowNum=0;\nfor(j=0;j<i+1;j++){ cout<<nowNum<<\" \"; nowNum+=1; if(nowNum==10) nowNum=0; }\n}",
          "options": [
            "与第8行下面填入一行：cout<<nowNum;",
            "与第2行下面填入一行：cout<<endl;",
            "与第7行下面填入一行：cout<<nowNum;",
            "与第9行下面填入一行：cout<<endl;"
          ],
          "answer": 3,
          "explanation": "要使每行数字结束后换行形成三角效果，需要在内层循环结束后（第9行下面）添加cout<<endl;。第9行是内层for循环的右花括号，在其后输出换行即可让每行各占一行。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "输入一个正整数N，想找出它所有相邻的因数对，比如，输入12，因数对有(1,2)、(2,3)、(3,4)。下面哪段代码找不到所有的因数对？（ ）\nA. for(i=1;i<N;i++) if(!(N%i)&&!(N%(i+1))) printf(\"(%d,%d)\\n\",i,i+1);\nB. for(i=2;i<N;i++) if(!(N%i)&&!(N%(i+1))) printf(\"(%d,%d)\\n\",i,i+1);\nC. for(i=2;i<N/2;i++) if(!(N%(i-1))&&!(N%i)) printf(\"(%d,%d)\\n\",i-1,i);\nD. for(i=1;i<N/2;i++) if(!(N%i)&&!(N%(i+1))) printf(\"(%d,%d)\\n\",i,i+1);",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 1,
          "explanation": "B从i=2开始，漏掉了以1开头的因数对(1,2)。对N=12，B只能找到(2,3)、(3,4)，找不到(1,2)。A、C、D都能从1开始覆盖全部相邻因数对，故B是找不到全部的代码。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_20",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "C++代码中 while(1){...} 的判断条件不是逻辑值，将导致语法错误。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "while的条件只需能转换为bool即可，整数1为真。while(1)是合法的无限循环写法，配合break使用，不会导致语法错误，故说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行以下C++代码后将输出0。（ ）\nSum=0;\nfor(i=-500;i<500;i++) Sum+=i;\ncout<<Sum;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i从-500加到499，其中-500到-1共500个负数、0一个、1到499共499个正数。(-500+499)+(-499+498)+...+(-1+1)+0，实际配对后总和为-500，而不是0，故输出为-500，说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个while循环都可以转化为等价的for循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "for循环本质上可以表达任意形式的循环，它的初始化、条件、更新三部分都可以留空，因此任何while循环都能改写成等价的for循环，故说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨做题\n时间限制：1.0 s  内存限制：128.0 MB\n【问题描述】\n为了准备考试，小杨每天都要做题。第1天，小杨做了a道题；第2天，小杨做了b道题；从第3天起，小杨每天做的题目数量是前两天的总和。此外，小杨还规定，当自己某一天做了大于或等于m题时，接下来的所有日子里，他就再也不做题了。请问，到了第n天，小杨总共做了多少题呢？\n\n【输入描述】\n总共4行，第一行一个整数a，第二行一个整数b，第三行一个整数m，第四行一个整数n。\n\n【输出描述】\n一行一个整数，表示小杨n天里总共做了多少题目。\n【样例输入 1】\n1\n2\n10\n5\n【样例输出 1】\n19",
          "options": null,
          "answer": null,
          "explanation": "思路：设第i天做题c_i，递推c_i=c_{i-1}+c_{i-2}，并用ans累加。从第3天起用循环依次求出每天的题目数，一旦某天题目数c达到或超过m，则当天算入总和后直接退出循环（之后不再做题）。最后输出ans。注意数据可能较大，累加和用long long。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <stdio.h>\nint main(int argc, char **argv)\n{\n    long long a=0, b=0, m=0, n=0, ans=0, c=0, i;  // a第1天题数、b第2天题数、m停止线、n共几天、ans总题数、c今天题数\n    scanf(\"%lld%lld%lld%lld\", &a, &b, &m, &n);    // 读入a、b、m、n\n    ans = a+b;                      // 先把前两天的题数加起来\n    for(i=3; i<=n; i++)             // 从第3天开始，一直到第n天\n    {\n        c = a+b;                    // 今天做的题 = 前两天做的题相加\n        ans += c;                   // 把今天的题数加进总数\n        a = b;                      // 昨天的题数变成“前天”\n        b = c;                      // 今天的题数变成“昨天”，为下一天做准备\n        if(c>=m) break;             // 如果某天做题数达到m，以后就不做了，结束循环\n    }\n    printf(\"%lld\\n\", ans);         // 输出总共做的题数\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "1\n2\n10\n5",
              "expectedOutput": "19"
            },
            {
              "input": "1\n1\n5\n8",
              "expectedOutput": "12"
            }
          ]
        },
        {
          "id": "l2_2023-12_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨的H字矩阵\n时间限制：1.0 s  内存限制：128.0 MB\n【问题描述】\n小杨想要构造一个n×n的H字矩阵（n为奇数），具体来说，这个矩阵共有n行，每行n个字符，其中最左列、最右列都是|，而中间一行（即第(n+1)÷2行）的n个字符都是-，其余所有字符都是半角小写字母a。例如，一个5×5的H字矩阵如下：\n|aaa|\n|aaa|\n|---|\n|aaa|\n|aaa|\n请你帮小杨根据给定的n打印出对应的“H字矩阵”。\n\n【输入描述】\n一行一个整数n（n为奇数）。\n\n【输出描述】\n输出对应的“H字矩阵”，恰好n行，每行n个字符。\n【样例输入 1】\n5\n【样例输出 1】\n|aaa|\n|aaa|\n|---|\n|aaa|\n|aaa|",
          "options": null,
          "answer": null,
          "explanation": "思路：逐行逐列输出字符。先输出上(n+1)/2-1行：每行开头和结尾是|，中间都是a；再输出中间一行：两端是|、中间是-；最后输出下(n+1)/2行：两端是|、中间是a。每行输出完换行。也可用条件判断：列j为1或n输出|，行i为中间行输出-，否则输出a。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <stdio.h>\nint main(int argc, char **argv)\n{\n    int n, i, j;                    // 定义边长n，循环变量i、j\n    scanf(\"%d\", &n);                // 读入n\n    for(i=1; i<=(n+1)/2-1; i++)     // 先画中间横线上面那几行\n    {\n        printf(\"|\");                // 每行最左边输出|\n        for(j=2; j<=n-1; j++) printf(\"a\");  // 中间的位置都输出a\n        printf(\"|\\n\");             // 每行最右边输出|，然后换行\n    }\n    printf(\"|\");                    // 中间那一行最左边输出|\n    for(j=2; j<=n-1; j++) printf(\"-\");   // 中间那一行全部输出-\n    printf(\"|\\n\");                 // 中间一行最右边输出|，换行\n    for(i=(n+1)/2+1; i<=n; i++)     // 再画中间横线下面那几行\n    {\n        printf(\"|\");                // 每行最左边输出|\n        for(j=2; j<=n-1; j++) printf(\"a\");  // 中间的位置都输出a\n        printf(\"|\\n\");             // 每行最右边输出|，然后换行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "|aaa|\n|aaa|\n|---|\n|aaa|\n|aaa|"
            },
            {
              "input": "7",
              "expectedOutput": "|aaaaa|\n|aaaaa|\n|aaaaa|\n|-----|\n|aaaaa|\n|aaaaa|\n|aaaaa|"
            }
          ]
        },
        {
          "id": "l2_2024-03_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列说法错误的是（　）？",
          "options": [
            "while循环满足循环条件时不断地运行，直到指定的条件不满足为止",
            "if语句通常用于执行条件判断",
            "在C++中可以使用foreach循环",
            "break和continue语句都可以用在for循环和while循环中"
          ],
          "answer": 2,
          "explanation": "C++中没有foreach这个关键字，循环可用for、while、do-while，C++11提供了基于范围的for（range-based for），但不是foreach。A、B、D描述都正确，故选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是？（ ）\nint n,a,m,i;\nn=3, a=5;\nm=(a-1)*2;\nfor(i=0;i<n-1;i++) m=(m-1)*2;\ncout<<m;",
          "options": [
            "8",
            "14",
            "26",
            "50"
          ],
          "answer": 2,
          "explanation": "n=3，a=5，初始m=(5-1)*2=8。循环i=0、1共两次：第一次m=(8-1)*2=14，第二次m=(14-1)*2=26。输出26。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是？（ ）\nint n,i,result;\nn=81;\ni=1, result=1;\nwhile(i*i<=n){ if(n%(i*i)==0) result=i*i; i+=1; }\ncout<<result;",
          "options": [
            "16",
            "36",
            "49",
            "81"
          ],
          "answer": 3,
          "explanation": "循环在i×i<=81时执行，依次检查i=1..9：i=1时81%1=0，result=1；i=3时81%9=0，result=9；i=9时81%81=0，result=81。i=10时100>81退出，输出81。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是？（ ）\nint s,t,ans;\ns=2, t=10;\nans=0;\nwhile(s!=t){ if(t%2==0 && t/2>=s) t/=2; else t-=1; ans+=1; }\ncout<<ans;",
          "options": [
            "2",
            "3",
            "4",
            "5"
          ],
          "answer": 1,
          "explanation": "t=10：10%2=0且5>=2，t=5，ans=1；t=5不是偶数，t=4，ans=2；t=4：4%2=0且2>=2，t=2，ans=3；此时t=s=2退出循环。输出3。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是？（ ）\nint n,masks,days,cur;\nn=17, masks=10, days=0;\ncur=2;\nwhile(masks!=n){ if(cur==0||cur==1) masks+=7; masks-=1; days+=1; cur=(cur+1)%7; }\ncout<<days;",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 2,
          "explanation": "masks从10递减到17需要补7（两次）+1共补的差。逐步模拟：10,9,8,7,6,5,5→11→10,10→17，其中cur为0或1时补7。第6次循环cur=0补7得11再减1为10；第7次cur=1补7得17，此时masks==n退出。days=7。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码判断一个正整数N的各个数位是否都是偶数。如果都是，则输出“是”，否则输出“否”。例如N=2024时输出“是”。则横线处应填入（ ）。\nint N,Flag;\ncin>>N;\nFlag=true;\nwhile(N!=0){ if(N%2!=0){ Flag=false; ______ } else N/=10; }\nif(Flag==true) cout<<\"是\"; else cout<<\"否\";",
          "options": [
            "break",
            "continue",
            "N=N÷10",
            "N=N%10"
          ],
          "answer": 0,
          "explanation": "一旦发现某一位是奇数，说明N不满足条件，应立刻跳出循环，之后输出“否”。横线处应填break。continue会继续检查后面的位，但Flag已经为false，结果虽同却不够严谨，且题目意图是提前终止。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数的所有数字倒序排列后这个数的大小保持不变，这个数就是回文数，比如101与6886都是回文数，而100不是回文数。以下程序代码用于判断一个数是否为回文数，横线处应填写？（ ）\nint n,a,k;\ncin>>n;\na=0;\nk=n;\nwhile(n>0){ a=______; n/=10; }\nif(a==k) cout<<\"是回文数\"; else cout<<\"不是回文数\";",
          "options": [
            "10×a+n%10",
            "a+n%10",
            "10×a+n÷10",
            "a+n÷10"
          ],
          "answer": 0,
          "explanation": "把原数倒序：每次取出个位n%10拼到已有结果a的后面，即a=a×10+n%10，再把n除以10去掉个位。最后倒序数a与原数k相等则为回文数。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "给定两个整数n与k，打印出一个栅栏图形，这个栅栏分成n段，段与段之间的间隔为+，段内的填充为k个-。以下程序代码用于绘制该图形，横线处应填写？（ ）\nint n,k,i,j;\nn=5, k=6;\nfor(i=0;i<n;i++){ ______ for(j=1;j<k;j++) cout<<'-'; }\ncout<<'+';",
          "options": [
            "cout<<'+'<<endl;",
            "cout<<'+'<<' '<<endl;",
            "cout<<'+';",
            "cout<<'+'<<' ';"
          ],
          "answer": 2,
          "explanation": "图形形如+-----+-----+...，每段开头输出一个+，随后连续输出k个-，段与段之间不能换行也不能有空格，最后整体再补一个+。所以横线处填cout<<'+';。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_19",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "for(i=0;i<100;i+=2);语句中变量i的取值范围是0到99。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i+=2使i依次取0、2、4、...、98，循环结束时i=100。i取的是0到98之间的偶数，并不是连续的0到99，故说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "任何一个for循环都可以转化为等价的while循环。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "for循环的三个部分（初始化、条件、更新）都可以在while循环中手动实现，因此任何for循环都能改写成等价的while循环，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨的日字矩阵\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨想要构造一个n行n列的日字矩阵，其中n为奇数。\n这个矩阵共有n行，每行有n个字符，构造规则如下：\n1. 最左列和最右列的字符都是竖线 |；\n2. 第一行、最后一行以及中间一行（也就是从上往下数第(n+1)÷2行）的每个字符都是短横线 -；\n3. 其余位置的字符都是半角小写字母 x。\n例如，当n等于5时，5行5列的日字矩阵如下：\n|---|\n|xxx|\n|---|\n|xxx|\n|---|\n请你帮小杨根据给定的n，打印出对应的日字矩阵。\n\n【输入描述】\n第一行一个整数n，表示日字矩阵的边长（n为奇数）。\n\n【输出描述】\n输出n行，每行n个字符，表示小杨的日字矩阵。\n\n【样例输入 1】\n5\n\n【样例输出 1】\n|---|\n|xxx|\n|---|\n|xxx|\n|---|\n\n【样例输入 2】\n7\n\n【样例输出 2】\n|-----|\n|xxxxx|\n|xxxxx|\n|-----|\n|xxxxx|\n|xxxxx|\n|-----|",
          "options": null,
          "answer": null,
          "explanation": "思路：逐行逐列判断字符。列j为第1列或第n列输出|；否则若行i为第1行、第n行或中间行(n+1)/2输出-；否则输出x。每行结束输出换行。用双重for循环即可完成。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;                          // 定义矩阵边长n\n    cin >> n;                       // 读入n\n    for (int i = 0; i < n; ++i) {   // 外层循环：第i行\n        for (int j = 0; j < n; ++j) {   // 内层循环：第j列\n            char ch;                // ch存放这个位置要画的字符\n            if (j == 0 || j == n - 1) ch = '|';        // 最左、最右两列画|\n            else if (i == 0 || i == n - 1 || i == n / 2) ch = '-';  // 第一行、最后一行、中间一行画-\n            else ch = 'x';          // 其余位置画x\n            cout << ch;             // 输出这个字符\n        }\n        cout << endl;               // 一行画完，换行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "|---|\n|xxx|\n|---|\n|xxx|\n|---|"
            },
            {
              "input": "7",
              "expectedOutput": "|-----|\n|xxxxx|\n|xxxxx|\n|-----|\n|xxxxx|\n|xxxxx|\n|-----|"
            }
          ]
        },
        {
          "id": "l2_2024-06_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，与for(int i=0; i<10; i++)效果相同的是（ ）。",
          "options": [
            "for(int i=0; i<10; i+=1)",
            "for(int i=1; i<=10; i++)",
            "for(int i=10; i>0; i--)",
            "for(int i=10; i<1; i++)"
          ],
          "answer": 0,
          "explanation": "原循环i从0到9，共执行10次。A中i+=1与i++等价，效果相同；B中i从1到10值不同；C是倒序；D一次也不执行。故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nint loopCount=0;\nfor(int i=0;i<10;i++) for(int j=1;j<i;j++) loopCount+=1;\ncout<<loopCount;",
          "options": [
            "55",
            "45",
            "36",
            "28"
          ],
          "answer": 2,
          "explanation": "外层i从0到9，内层j从1到i-1执行的次数：i<2时0次，i=2到9时分别为1、2、3、...、8次，累计1+2+...+8=36，输出36。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nint loopCount=0;\nfor(int i=0;i<10;i++){ for(int j=0;j<i;j++) if(i*j%2) break; loopCount+=1; }\ncout<<loopCount;",
          "options": [
            "25",
            "16",
            "10",
            "9"
          ],
          "answer": 2,
          "explanation": "外层循环i=0到9共10次，每次都执行loopCount+=1一次。内层break只跳出内层循环，不影响外层执行次数，所以loopCount最终为10。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "假设下面C++代码执行过程中仅输入正负整数或0，有关说法错误的是（ ）。\nint N,Sum=0;\ncin>>N;\nwhile(N){ Sum+=N; cin>>N; }\ncout<<Sum;",
          "options": [
            "执行上面代码如果输入0，将终止循环",
            "执行上面代码能实现所有非0整数的求和",
            "执行上面代码第一次输入0，最后将输出0",
            "执行上面代码将陷入死循环，可将while(N)改为while(N==0)"
          ],
          "answer": 3,
          "explanation": "while(N)在N为0时结束循环，能正确累加所有非0输入，不会死循环。D说会死循环并建议改成while(N==0)是错误的，改后反而只在输入0时循环。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面的C++代码，有关说法正确的是（ ）【质数是指仅能被1和它本身整除的正整数】。\nint N; cin>>N;\nbool Flag=true;\nfor(int i=2;i<N;i++){ if(i*i>N) break; if(N%i==0){ Flag=false; break; } }\nif(Flag) cout<<N<<\"是质数\"; else cout<<N<<\"不是质数\";",
          "options": [
            "如果输入正整数，上面代码能正确判断N是否为质数",
            "如果输入整数，上面代码能正确判断N是否为质数",
            "如果输入大于等于0的整数，上面代码能正确判断N是否质数",
            "如将Flag=true修改为Flag = N>=2? true:false 则能判断所有整数包括负整数、0、正整数是否为质数"
          ],
          "answer": 3,
          "explanation": "原代码对N=1会误判为质数（1不是质数），对负数和0也误判。若改为Flag=N>=2?true:false，则N=1、0、负数都先置Flag为false输出“不是质数”，N>=2再进入循环判断，可正确处理所有整数。故选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于实现如下图所示的乘法表效果，其有关说法正确的是（ ）。\nfor(int i=1;i<6;i++){ for(int j=1;j<i+1;j++) cout<<i*j<<\" \"; cout<<endl; }",
          "options": [
            "当前代码能实现预期效果，无需调整代码",
            "如果cout<<endl;移到循环L2内部，则可实现预期效果",
            "如果cout<<endl;移到循环L1外部，则可实现预期效果",
            "删除cout<<endl;行，则可实现预期效果"
          ],
          "answer": 0,
          "explanation": "内层循环输出第i行的i*j（1到i），外层循环每行结束时cout<<endl换行，正好输出1/2 4/3 6 9/4 8 12 16/5 10 15 20 25的三角形。当前代码已正确，选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后，输出是（ ）。\nint cnt1=0,cnt2=0;\nfor(int i=0;i<10;i++){ if(i%2==0) continue; if(i%2) cnt1+=1; else if(i%3==0) cnt2+=1; }\ncout<<cnt1<<\" \"<<cnt2;",
          "options": [
            "5 2",
            "5 0",
            "0 2",
            "0 0"
          ],
          "answer": 1,
          "explanation": "i为偶数时continue跳过。i为奇数(1,3,5,7,9)时，i%2恒为真，cnt1累加5次；由于if(i%2)已经成立，else if不再执行，cnt2保持0。输出“5 0”。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将导致死循环。（ ）\nfor(int i=0;i<10;i++) continue;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "continue只是跳过本轮循环体剩余部分，仍会执行i++并判断i<10，循环正常执行10次后结束，不会死循环。说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出10。（ ）\nint cnt=0;\nfor(int i=0;i<10;i++) for(int j=0;j<i;j++){ cnt+=1; break; }\ncout<<cnt;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "外层i从0到9共10次，但i=0时内层循环for(j=0;j<0;j++)一次也不执行；i=1到9时每次进入内层后cnt加1并立即break跳出内层，共加9次。所以cnt=9，输出9而不是10，说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后，将输出5。（ ）\nint cnt=0;\nfor(int i=1;i<5;i++) for(int j=i;j<5;j+=i) if(i*j%2==0) cnt+=1;\ncout<<cnt;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i=1时j=1,2,3,4，其中1×2、1×4为偶，cnt=2；i=2时j=2,4，乘积均偶，cnt=4；i=3时j=3乘积9为奇；i=4时j=4乘积16为偶，cnt=5。输出5，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码能实现正整数各位数字之和。（ ）\nint N,Sum=0;\ncin>>N;\nwhile(N){ Sum+=N%10; N/=10; }\ncout<<Sum;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "每次取个位N%10累加到Sum，再N/=10去掉个位，直到N为0，正好求出各位数字之和。对正整数来说实现正确，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：计数\n【问题描述】\n小杨认为自己的幸运数是正整数k。小杨想知道，对于从1到n的所有正整数中，数字k出现了多少次。\n\n【输入格式】\n第一行包含一个正整数n。第二行包含一个正整数k。\n\n【输出格式】\n输出从1到n的所有正整数中，k出现的次数。\n【样例输入 1】\n25\n2\n【样例输出 1】\n9",
          "options": null,
          "answer": null,
          "explanation": "思路：从1到n逐个检查每个数，用一个函数统计该数的十进制表示中数字k出现的次数：每次取个位与k比较，相等则计数加1，然后除以10去掉个位。把所有数的计数累加即得答案。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint check(int x, int y) {           // 自定义函数：数一数x这个数里面出现几次数字y\n    int cnt = 0;                    // cnt记录出现次数\n    while (x > 0) {                 // 只要x还没拆完\n        int tmp = x % 10;           // 取出x的最后一位\n        if (tmp == y) cnt++;        // 如果这一位就是y，计数加1\n        x = x / 10;                 // 去掉最后一位\n    }\n    return cnt;                     // 返回一共出现了几次\n}\nint main() {\n    int n, k;                       // 定义：从1数到n，要找数字k\n    cin >> n >> k;                  // 读入n和k\n    int ans = 0;                    // ans记录数字k总共出现的次数\n    for (int i = 1; i <= n; i++) ans += check(i, k);  // 从1到n每个数都数一遍，把次数加起来\n    cout << ans << endl;            // 输出总次数\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "25\n2",
              "expectedOutput": "9"
            }
          ]
        },
        {
          "id": "l2_2024-09_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，与for(int i=1; i<10; i++)效果相同的是（ ）。",
          "options": [
            "for(int i=0; i<10; i++)",
            "for(int i=0; i<11; i++)",
            "for(int i=1; i<10; ++i)",
            "for(int i=0; i<11; ++i)"
          ],
          "answer": 2,
          "explanation": "原循环i从1到9共9次。C中i从1到9且++i与i++在本场景等价，效果相同。A从0开始，B、D都循环11次，故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nint i;\nfor(i=0;i<10;i++){ if(i%2) break; cout<<\"0#\"; }\nif(i==10) cout<<\"1#\";",
          "options": [
            "0#",
            "1#",
            "0#0#1",
            "没有输出"
          ],
          "answer": 0,
          "explanation": "i=0时0%2=0不触发break，输出“0#”，i变为1；i=1时1%2=1触发break退出循环，此时i=1不等于10，不输出“1#”。所以只输出“0#”。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nint loopCount=0;\nfor(int i=1;i<5;i+=2) loopCount+=1;\ncout<<(loopCount);",
          "options": [
            "1",
            "2",
            "3",
            "5"
          ],
          "answer": 1,
          "explanation": "i从1开始，每次加2，依次取1、3，当i=5时不满足i<5退出，循环共执行2次，loopCount=2，输出2。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下图是C++程序执行后的输出（数字三角形：第1行1，第2行2 3，第3行3 4 5，...，第7行7 8 9 10 11 12 13）。为实现其功能，横线处应填入代码是（ ）。\nint lineNum;\ncin>>lineNum;\nfor(int i=1;i<lineNum+1;i++){ for(int ______) cout<<j<<\" \"; cout<<endl; }",
          "options": [
            "j=i; j<i; j++",
            "j=1; j<i; j++",
            "j=i; j<i×2; j++",
            "j=i+1; j<i+i; j++"
          ],
          "answer": 2,
          "explanation": "第i行输出i个数，从i开始到2i-1，即j从i到i×2-1。选项C的循环j=i; j<i×2; j++使j取i到2i-1，正好满足。其余选项行数或起始值不对。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出逆序数，如输入123则输出321。如输入120则输出21。横线处先后应填入的代码是（ ）。\nint N; cin>>N;\nint rst=0;\nwhile(N){ ______; ______; }\ncout<<(rst);",
          "options": [
            "rst=rst×10+N%10  和  N=N÷10",
            "rst+=N%10  和  N=N÷10",
            "rst=rst×10+N÷10  和  N=N%10",
            "rst+=N÷10  和  N=N%10"
          ],
          "answer": 0,
          "explanation": "构造逆序数：每次取出个位N%10，追加到rst后面（rst=rst×10+N%10），再把N除以10去掉个位。这样123→321；输入120时rst先得0、再2、再1，输出21。故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码用于输入学生成绩，并根据人数计算出平均成绩，有关说法错误的是（ ）。\nfloat Sum=0;\nint cnt=0;\nwhile(1){ int score; cin>>score; if(score<0) break; cnt+=1; Sum+=score; }\ncout<<\"总学生数：\"<<cnt<<\"平均分：\"<<Sum/cnt;",
          "options": [
            "代码while(1)写法错误",
            "如果输入负数，将结束输入，并正确输出",
            "如果输入的学生成绩含有小数，程序将无法正常执行",
            "变量int score初始值不确定，但不影响程序执行"
          ],
          "answer": 0,
          "explanation": "while(1)是合法的无限循环，配合if(score<0)break使用，不是语法错误。输入负数结束输入、成绩含小数时读入整数部分（或截断）、score在使用前都被cin赋值，A的说法错误。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码判断输入的正整数是否为质数，如果该数字是质数，则输出YES，否则输出NO。请在横线上填写代码。（ ）\nint num,i;\ncin>>num;\nfor(i=2;i<num;i++) if(______){ cout<<\"NO\"; break; }\nif(i==num) cout<<\"YES\";",
          "options": [
            "num % i",
            "num % i == 0",
            "num÷i",
            "num÷i == 0"
          ],
          "answer": 1,
          "explanation": "判断质数要检查num能否被i整除，若能整除（num%i==0）则说明不是质数，输出NO并break。循环结束后若i==num说明一直没有被整除，输出YES。故选num%i==0。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "一个数如果能被某个数（比如7）整除，或者含有该数，则说该数是某个数的相关数。下面C++代码用于判定输入的数与7是否有关。下列说法错误的是（ ）。\nint N,M; bool Flag=false;\ncin>>N; M=N;\nif(M%7==0) Flag=true;\nwhile(!Flag && M){ if(M%10==7){ Flag=true; break; } M/=10; }\nif(Flag) cout<<N<<\"与7有关\"; else cout<<N<<\"与7无关\";",
          "options": [
            "删除break语句不会导致死循环，但有时会导致结果错误",
            "删除M/=10将可能导致死循环",
            "删除M=N并将其后代码中的M变量改为N，并调整输出同样能完成相关功能",
            "删除break语句不会导致死循环，但有时会影响效率"
          ],
          "answer": 0,
          "explanation": "while的条件是!Flag&&M，一旦某位是7，Flag被置true后循环条件!Flag立即不满足，循环自然结束，所以删除break不会导致死循环也不会导致结果错误。A说“有时会导致结果错误”是错误的；B、C、D描述合理。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出10。（ ）\nint i;\nfor(i=0;i<10;i++) continue;\nif(i==10) cout<<i;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "循环从i=0到i=9共10次，continue只跳过循环体，i++正常执行。退出循环时i=10，满足i==10，输出10。说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码能求整数N和M之间所有整数之和，包含N和M。（ ）\nint N,M,Sum;\ncin>>N>>M;\nif(N>M){ int tmp=N; N=M, M=tmp; }\nfor(int i=N;i<M+1;i++) Sum+=i;\ncout<<Sum;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "变量Sum未初始化就用于累加，其初值是内存中的随机值，导致结果错误。要正确求和应先Sum=0。因此代码不能正确求N到M之间整数之和，说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "将下面C++代码中的L3标记的代码行调整为for(int i=0;i<5;i++)后输出结果相同。（ ）\nint loopCount=0;\nfor(int i=1;i<5;i++) for(int j=0;j<i;j++) loopCount+=1;\ncout<<loopCount;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "原代码loopCount=1+2+3+4=10；改为for(i=0;i<5;i++)后，内层累加0+1+2+3+4=10，结果仍为10。输出相同，说法正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "某一系列数据的规律是从第3个数值开始是前两个数之和。下面的代码求第N个数的值，N限定为大于2。（ ）\nint start1,start2,N,tmp;\ncin>>start1>>start2>>N;\nfor(int i=2;i<N;i++){ tmp=start1+start2; start1=start2; start2=tmp; }\ncout<<start2;",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "循环从i=2到N-1，每次把前两个数之和存入start2并滚动更新，当N>2时能正确求出第N个数。由于要求N>2，循环至少执行一次，start1、start2已由输入确定，代码正确。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行时如果输入2024，则输出是4202。（ ）\nint N,flag=0;\ncin>>N;\nwhile(N){ if(!flag) cout<<N%10; N/=10; flag=(flag+1)%2; }\ncout<<\"\\n\";",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "flag初始为0，第一轮输出个位4；此后flag交替，只在flag为0时输出：4（个位）、0（百位），最终输出40，而不是4202。说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：数位之和\n【问题描述】\n小杨有n个正整数，他认为一个正整数是美丽数字当且仅当该正整数每一位数字的总和是7的倍数。小杨想请你编写一个程序判断n个正整数哪些是美丽数字。\n\n【输入格式】\n第一行包含一个正整数n，代表正整数个数。之后n行，每行包含一个正整数。\n\n【输出格式】\n对于每个正整数，如果是美丽数字则输出Yes，否则输出No。\n【样例输入 1】\n3\n7\n52\n103\n【样例输出 1】\nYes\nYes\nNo",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个读入的数，用while循环不断取个位并累加到tot，再除以10，求出各位数字之和。若tot%7==0输出Yes，否则输出No。外层循环处理n个数。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n;                          // 定义n，表示有几个数\n    cin>>n;                         // 读入n\n    int ans=0;                      // ans记录美丽数字的个数\n    for(int i=1;i<=n;i++){          // 依次处理每个数\n        int x;                      // 定义变量x\n        cin>>x;                     // 读入这个数\n        int tot=0;                  // tot用来存各位数字的和\n        while(x){ tot+=(x%10); x/=10; }  // 把x的每一位都取出来加到tot里，直到x变成0\n        if(tot%7==0) cout<<\"Yes\\n\"; // 如果数位和是7的倍数，就是美丽数字\n        else cout<<\"No\\n\";         // 否则不是\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n7\n52\n103",
              "expectedOutput": "Yes\nYes\nNo"
            }
          ]
        },
        {
          "id": "l2_2024-09_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨的N字矩阵\n【问题描述】\n小杨想要构造一个n×n的N字矩阵（n为奇数），这个矩阵的从左上角到右下角的对角线、第1列和第n列都是半角加号+，其余都是半角减号-。例如，一个5×5的N字矩阵如下：\n+---+\n++--+\n+-+-+\n+--++\n+---+\n请你帮小杨根据给定的n打印出对应的N字矩阵。\n\n【输入格式】\n第一行包含一个正整数n。\n\n【输出格式】\n输出对应的N字矩阵，恰好n行，每行n个字符。\n【样例输入 1】\n5\n【样例输出 1】\n+---+\n++--+\n+-+-+\n+--++\n+---+",
          "options": null,
          "answer": null,
          "explanation": "思路：逐行逐列判断字符。若列j为第1列或第n列输出+；否则若行i等于列j（主对角线）也输出+；其余位置输出-。每行结束后换行。用双重for循环实现即可。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nint main(){\n    int n;                          // 定义矩阵边长n\n    cin>>n;                         // 读入n\n    for(int i=1;i<=n;i++){          // 外层循环：第i行\n        for(int j=1;j<=n;j++){      // 内层循环：第j列\n            if(j==1||j==n) cout<<\"+\";   // 第一列和最后一列画+\n            else{\n                if(i==j) cout<<\"+\"; // 主对角线（行号=列号）画+\n                else cout<<\"-\";     // 其余位置画-\n            }\n        }\n        cout<<\"\\n\";                // 一行画完，换行\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "+---+\n++--+\n+-+-+\n+--++\n+---+"
            }
          ]
        },
        {
          "id": "l2_2023-03_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++语言程序后，输出结果是（ ）。\n<pre><code>int n=17;\nbool isprime=true;\nfor(int i=2;i<=n;i++)\n    if(n%i==0) isprime=false;\ncout<<isprime;</code></pre>",
          "options": [
            "false",
            "true",
            "0",
            "1"
          ],
          "answer": 2,
          "explanation": "循环从i=2到i=n=17，当i=17时n%17==0成立，isprime被改成false。输出bool类型时不会打印单词，只会输出0（false）或1（true），所以输出0。故选C。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "while语句的循环体至少会执行一次。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "while是先判断条件再执行循环体，如果一开始条件就不成立，循环体一次都不会执行，可能执行0次。只有do...while才保证至少执行一次。所以这句话错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "画三角形\n【问题描述】输入一个正整数n，请使用大写字母拼成一个这样的三角形图案：第1行有1个字母，第2行有2个字母，以此类推；在三角形中，由上至下、由左至右依次由大写字母A-Z填充，每次使用大写字母Z填充后，将从头使用大写字母A填充。\n【输入描述】输入一行，包含一个正整数n。约定2≤n≤40。\n【输出描述】输出符合要求的三角形图案。注意每行三角形图案的右侧不要有多余的空格。\n\n【样例输入 1】\n3\n【样例输出 1】\nA\nBC\nDEF\n【数据范围】\n2 ≤ n ≤ 40",
          "options": null,
          "answer": null,
          "explanation": "思路：把大写字母看成编号0~25。外层循环i控制行数1~n，内层循环j控制第i行输出i个字母；用一个计数器ch从0开始，每次输出(char)('A'+ch%26)后再自增，ch%26保证到Z之后回到A。每行结束输出换行。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n; cin >> n;                // 读入三角形的行数n\n    int ch = 0;                     // ch用来数已经输出了几个字母，从0开始\n    for (int i = 1; i <= n; i++) {  // 外层循环：画第i行\n        for (int j = 1; j <= i; j++)    // 内层循环：第i行要画i个字母\n            cout << (char)('A' + (ch++) % 26);  // 把计数变成字母：0=A、1=B……25=Z，到Z后回到A\n        cout << endl;               // 这一行画完，换行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3",
              "expectedOutput": "A\nBC\nDEF"
            },
            {
              "input": "7",
              "expectedOutput": "A\nBC\nDEF\nGHIJ\nKLMNO\nPQRSTU\nVWXYZAB"
            }
          ]
        },
        {
          "id": "l2_2023-03_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "百鸡问题\n【问题描述】“百鸡问题”出自我国古代《张丘建算经》：每只公鸡5元，每只母鸡3元，每3只小鸡1元；现在有100元，买了100只鸡，共有多少种方案？小明决定扩展：如果每只公鸡x元，每只母鸡y元，每z只小鸡1元；现在有n元，买了m只鸡，共有多少种方案？\n【输入描述】输入一行，包含五个整数x、y、z、n、m。约定1≤x,y,z≤10，1≤n,m≤1000。\n【输出描述】输出一行，包含一个整数C，表示有C种方案。\n\n【样例输入 1】\n5 3 3 100 100\n【样例输出 1】\n4\n【数据范围】\n1 ≤ x ≤ 10\n1 ≤ y ≤ 10\n1 ≤ z ≤ 10\n1 ≤ n ≤ 1000\n1 ≤ m ≤ 1000",
          "options": null,
          "answer": null,
          "explanation": "思路：用两层循环枚举公鸡数gj和母鸡数mj，先根据钱数算出能买的小鸡数xj=(n-gj×x-mj×y)*z，再判断三种鸡总数gj+mj+xj是否等于m，相等则方案数加1。枚举时利用gj×x<=n且gj<=m、mj×y+gj×x<=n且mj+gj<=m来减少无效循环。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int x, y, z, n, m, cnt = 0;     // 公鸡x元、母鸡y元、z只小鸡1元、钱n元、共m只鸡，cnt记录方案数\n    cin >> x >> y >> z >> n >> m;   // 读入这5个数\n    for (int gj = 0; gj * x <= n && gj <= m; gj++)  // 试公鸡0只、1只、2只……，钱和只数都不能超\n        for (int mj = 0; mj * y + gj * x <= n && mj + gj <= m; mj++) {  // 公鸡定了后，再试母鸡的只数\n            int xj = (n - gj * x - mj * y) * z;     // 用剩下的钱算出能买多少只小鸡\n            if (gj + mj + xj == m) cnt++;           // 三种鸡加起来正好m只，方案数加1\n        }\n    cout << cnt << endl;            // 输出方案数\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 3 3 100 100",
              "expectedOutput": "4"
            },
            {
              "input": "1 1 1 100 100",
              "expectedOutput": "5151"
            }
          ]
        },
        {
          "id": "l2_2023-06_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于C++语言的叙述，不正确的是（ ）。",
          "options": [
            "if语句中的判断条件必须用小括号‘(’和‘)’括起来",
            "for语句中两个‘;’之间的循环条件可以省略，表示循环继续执行的条件一直满足",
            "循环体包含多条语句时，可以用缩进消除二义性",
            "除了“先乘除、后加减”，还有很多运算符优先级"
          ],
          "answer": 2,
          "explanation": "循环体包含多条语句时必须用花括号{}把它们括起来，只靠缩进无法消除二义性，所以C说法错误。A、B、D说法都正确。题目选不正确的，故选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下哪个循环语句会无限次执行？（ ）",
          "options": [
            "for (int a = 0; a; a++);",
            "for (bool b = false; b <= true; b++);",
            "for (char c = 'A'; c < 'z'; c++);",
            "for (double d = 0.0; d < 10.0; d += 0.001);"
          ],
          "answer": 1,
          "explanation": "bool只有false(0)和true(1)两个值。b++让false变成true，再自增仍保持true，循环条件b<=true永远成立，所以无限循环。A中a初始为0，条件a为假，循环一次都不执行；C、D的循环条件最终都会不成立而正常结束。故选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在下列代码的横线处填写（ ），可以使得输出是42。\n<pre><code>int sum=0;\nfor(int i=1;i<=20;i++)\n    if(____) sum+=i;\ncout<<sum;</code></pre>",
          "options": [
            "i % 3 == 0",
            "20 % i == 0",
            "i <= 8",
            "i >= 18"
          ],
          "answer": 1,
          "explanation": "20%i==0成立的i有1,2,4,5,10,20，这些数之和为1+2+4+5+10+20=42，符合输出。A得到63，C得到36，D得到57。故选B。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行以下C++语言程序后，输出结果是（ ）。\n<pre><code>for(char x='A'; x<='D'; x++)\n    if((x!='A')+(x=='C')+(x=='D')+(x!='D')==3) cout<<x;</code></pre>",
          "options": [
            "A",
            "B",
            "C",
            "D"
          ],
          "answer": 2,
          "explanation": "逐一检验：x='A'时四个条件为0+0+0+1=1；x='B'时为1+0+0+1=2；x='C'时为1+1+0+1=3，满足条件输出C；x='D'时为1+0+1+0=2。所以只输出C，故选C。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "循环语句的循环体有可能无限制地执行下去。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "如果循环条件永远为真（比如忘记更新循环变量），循环体就会无限执行，形成死循环。所以这句话正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "找素数\n【问题描述】小明刚刚学习了素数的概念：如果一个大于1的正整数，除了1和它自身外，不能被其他正整数整除，则这个正整数是素数。现在，小明想找到两个正整数A和B之间（包括A和B）有多少个素数？\n【输入描述】输入2行，第一行包含正整数A，第二行包含正整数B。约定2≤A≤B≤1000。\n【输出描述】输出一行，包含一个整数C，表示A到B之间素数的个数。\n\n【样例输入 1】\n2\n10\n【样例输出 1】\n4\n【数据范围】\n2 ≤ A ≤ B ≤ 1000",
          "options": null,
          "answer": null,
          "explanation": "思路：枚举A到B的每个数n，用isPrime标记它是否为素数，初始为true。判断因数时只需枚举2到根号n，因为因数成对出现；一旦找到n的因数就把isPrime设为false并break。isPrime仍为true则计数加1，最后输出cnt。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int a = 0, b = 0, cnt = 0;      // 范围a到b，cnt记录素数的个数\n    cin >> a >> b;                  // 读入a和b\n    for (int n = a; n <= b; n++) {  // 把a到b之间每个数都检查一遍\n        bool isPrime = true;        // 先假设n是素数\n        for (int i = 2; i * i <= n; i++) {  // 只用试到根号n就行\n            if (n % i == 0) { isPrime = false; break; }  // 能被i整除就不是素数，标记并跳出\n        }\n        if (isPrime) cnt++;         // 还是素数就计数加1\n    }\n    cout << cnt << endl;            // 输出素数个数\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n10",
              "expectedOutput": "4"
            },
            {
              "input": "98\n100",
              "expectedOutput": "0"
            }
          ]
        },
        {
          "id": "l2_2023-06_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "自幂数判断\n【问题描述】自幂数是指，一个n位数，满足各位数字n次方之和是本身。例如，153是3位数，其每位数的3次方之和1³+5³+3³=153，因此153是自幂数；1634是4位数，其每位数的4次方之和1⁴+6⁴+3⁴+4⁴=1634，因此1634是自幂数。现在，输入若干个正整数，请判断它们是否是自幂数。\n【输入描述】输入第一行是一个正整数M，表示有M个待判断的正整数。约定1≤M≤100。从第2行开始的M行，每行一个待判断的正整数，均小于10⁸。\n【输出描述】输出M行，如果对应的待判断正整数为自幂数，则输出英文大写字母'T'，否则输出英文大写字母'F'。\n\n【样例输入 1】\n3\n152\n111\n153\n【样例输出 1】\nF\nF\nT\n【数据范围】\n1 ≤ M ≤ 100\n1 ≤ n < 10^8",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个数n，先用while循环不断除以10数出位数l；再用while循环每次取个位数字d，用内层for循环计算d的l次方并累加到sum；最后如果sum==n就输出T，否则输出F。输入一个判断一个即可。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int m = 0; cin >> m;            // 读入要判断几个数m\n    for (int i = 0; i < m; i++) {   // 依次处理每个数\n        int n = 0; cin >> n;        // 读入要判断的数n\n        int t = n, l = 0;           // t复制n，l用来数n有几位\n        while (t > 0) { t /= 10; l++; }  // 每次去掉一位，数出位数l\n        int sum = 0; t = n;         // sum存各位数字次方之和，t重新变成n\n        while (t > 0) {             // 取出每一位\n            int d = t % 10; t /= 10;    // 取个位数d，再去掉这一位\n            int mul = 1;            // mul用来算d的l次方\n            for (int j = 0; j < l; j++) mul *= d;  // 连续乘l次得到d的l次方\n            sum += mul;             // 加到总和里\n        }\n        if (sum == n) cout << \"T\" << endl;   // 相等就是自幂数，输出T\n        else cout << \"F\" << endl;   // 否则输出F\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n152\n111\n153",
              "expectedOutput": "F\nF\nT"
            },
            {
              "input": "5\n8208\n548834\n88593477\n12345\n5432",
              "expectedOutput": "T\nT\nT\nF\nF"
            }
          ]
        },
        {
          "id": "l2_2023-09_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码实现从大到小的顺序输出N的所有因子。例如，输入N=18时输出18 9 6 3 2 1，横线处应填入（ ）。\n<pre><code>for (____)\n    if (!(N % i))\n        cout << i << ' ';</code></pre>",
          "options": [
            "; ;",
            "int i = 1; i < N; i++",
            "int i = N; i > 0; i--",
            "int i = N; i > 1; i--"
          ],
          "answer": 2,
          "explanation": "要从大到小输出因子，i应从N开始递减到1。C的int i=N;i>0;i--正好遍历N,N-1,...,1，把N的因子全部输出。D的i>1漏掉了因子1。故选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "如下图所示，输出N行N列的矩阵，对角线为1，横线处应填入（ ）。\n<pre><code>if (____)\n    cout << 1 << \" \";\nelse\n    cout << 0 << \" \";</code></pre>",
          "options": [
            "i = j",
            "j != j",
            "i >= j",
            "i == j"
          ],
          "answer": 3,
          "explanation": "矩阵主对角线上元素的特点是行号等于列号，即i==j时输出1，其它位置输出0。A是赋值不是判断，B永远为假，C会输出上三角全部为1。故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于判断N是否为质数（素数），约定输入N为大于等于2的正整数，请在横线处填入合适的代码（ ）。\n<pre><code>for (i = 2; i < N; i++)\n    if (N % i == 0)\n    {\n        cout << \"非质数\";\n        ____;\n    }\nif (i == N)\n    cout << \"是质数\";</code></pre>",
          "options": [
            "break",
            "continue",
            "exit",
            "return"
          ],
          "answer": 0,
          "explanation": "一旦找到N的因子就说明N不是质数，应立刻退出循环，用break跳出for循环。此时i<N，最后的if(i==N)不成立，不会再输出“是质数”。continue只会跳过本次，exit、return用法不符。故选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int N=9;\nfor(int i=2;i<N;i++)\n    if(N%i) cout<<\"1#\";\ncout<<\"0\"<<endl;</code></pre>",
          "options": [
            "1#0",
            "1#",
            "1#1#1#1#1#1",
            "1#1#1#1#1#1#0"
          ],
          "answer": 3,
          "explanation": "i从2到8：N%i不等于0时输出1#。9%2=1、9%4=1、9%5=4、9%6=3、9%7=2、9%8=1都非0，共6次输出1#；9%3=0不输出。循环结束再输出0，所以是1#×6后跟0。故选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int cnt=0;\nfor(int i=1;i<9;i++)\n    for(int j=1;j<i;j+=2)\n        cnt+=1;\ncout<<cnt;</code></pre>",
          "options": [
            "16",
            "28",
            "35",
            "36"
          ],
          "answer": 0,
          "explanation": "数内层循环执行次数：i=1时0次；i=2时j=1共1次；i=3时1次；i=4时j=1,3共2次；i=5时2次；i=6时j=1,3,5共3次；i=7时3次；i=8时j=1,3,5,7共4次。总和0+1+1+2+2+3+3+4=16。故选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int cnt=0;\nfor(int i=1;i<13;i+=3)\n    for(int j=1;j<i;j+=2)\n        if(i*j%2==0) break;\n        else cnt+=1;\ncout<<cnt;</code></pre>",
          "options": [
            "1",
            "3",
            "15",
            "没有输出"
          ],
          "answer": 1,
          "explanation": "i取值1,4,7,10。i=1时内层不执行；i=4时j=1，i×j=4为偶数直接break；i=7时j=1,3,5都使i×j为奇数，cnt加3；i=10时j=1，i×j=10为偶数break。cnt最终为3。故选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>int x=1;\nwhile(x<100)\n{\n    if(!(x%3)) cout<<x<<\",\";\n    else if(x/10) break;\n    x+=2;\n}\ncout<<x;</code></pre>",
          "options": [
            "1",
            "3,9,11",
            "3,6,9,10",
            "1,5,7,11,13,15"
          ],
          "answer": 1,
          "explanation": "x从1开始每次加2。x=3、9时x%3==0输出“3,”和“9,”；x=11时x%3=2且x÷10=1非0，执行break退出循环，最后输出x=11。因此输出3,9,11。故选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "输入行数，约定1≤lineCount≤9，输出数字三角形图形。应在C++代码横线处填入（ ）。\n<pre><code>for (int j = 0; j < ______; j++)\n    cout << ' ';</code></pre>",
          "options": [
            "(lineCount - i - 1) * 2",
            "(lineCount - i) * 2",
            "lineCount - i - 1",
            "lineCount - i"
          ],
          "answer": 0,
          "explanation": "每行前面的空格逐行减少，最后一行不输出空格；又因为每个数字后面都跟一个空格，一个位置占2列，所以第i行前面的空格数是(lineCount-i-1)×2。故选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "某班级人数不知，连续输入成绩直到输入负数停止，输入结束后求出平均成绩。在以下C++代码横线处应填入是（ ）。\n<pre><code>while (____)\n{\n    cin >> score;\n    if (score < 0)\n        break;\n    totalScore += score;\n    studCount += 1;\n}</code></pre>",
          "options": [
            "true",
            "false",
            "True",
            "False"
          ],
          "answer": 0,
          "explanation": "循环靠while体内的if(score<0)break来结束，所以while条件应一直为真，填true。false会使循环一次都不执行；True、False不是C++关键字（C++中必须小写）。故选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_20",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如果m和n为int类型变量，则执行for (m = 0, n = 1; n < 9; ) n = ((m = 3 * n, m + 1), m - 1); 之后n的值为偶数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "第1次：m=3×1=3，逗号表达式整体取最后一个值m-1=2，n=2；第2次：m=3×2=6，n=5；第3次：m=15，n=14，此时n<9不成立退出循环。n最后为14，是偶数。所以正确。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出为10。\n<pre><code>int cnt=0;\nfor(int i=1;i<10;i++)\n{\n    cnt+=1;\n    i+=1;\n}\ncout<<cnt;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "循环体内有i+=1，加上for语句的i++，每次循环i实际上增加2。i依次为1,3,5,7,9，cnt共加5次，输出5而不是10。所以这句话错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行以下C++代码后的输出为0。\n<pre><code>int rst=0;\nfor(int i=-100;i<100;i+=2)\n    rst+=i;\ncout<<rst;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i取-100,-98,...,98共100个数，它们与对应的相反数成对相加为0，但-100到100（含100）的和为0，这里少了最后的100，所以rst=-100，不是0。这句话错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行以下C++代码后的输出为30。\n<pre><code>int rst=0;\nfor(int i=0;i<10;i+=2)\n    rst+=i;\ncout<<rst;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i取0,2,4,6,8，rst=0+2+4+6+8=20，输出20而不是30。所以这句话错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "小杨的X字矩阵\n【问题描述】小杨想要构造一个N×N的X字矩阵（N为奇数），这个矩阵的两条对角线都是半角加号+，其余都是半角减号-。例如，一个5×5的X字矩阵如下：\n+---+\n-+-+-\n--+--\n-+-+-\n+---+\n【输入描述】一行一个整数N（5≤N≤49，保证N为奇数）。\n【输出描述】输出对应的“X字矩阵”。请严格按格式要求输出，不要擅自添加任何空格、标点、空行。你应该恰好输出N行，每行除换行符外恰好包含N个字符，要么是+要么是-。\n\n【样例输入 1】\n5\n【样例输出 1】\n+---+\n-+-+-\n--+--\n-+-+-\n+---+\n【数据范围】\n5 ≤ N ≤ 49",
          "options": null,
          "answer": null,
          "explanation": "思路：用两层循环i、j枚举每个位置。主对角线条件是i==j，副对角线条件是i+j==N-1（0下标）。只要满足其中一条就输出+，否则输出-。每行结束后换行。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 0; cin >> n;            // 读入矩阵边长n\n    for (int i = 0; i < n; i++) {   // 外层循环：第i行\n        for (int j = 0; j < n; j++) {   // 内层循环：第j列\n            if (i == j || i + j == n - 1) cout << \"+\";  // 主对角线或副对角线画+\n            else cout << \"-\";       // 其他位置画-\n        }\n        cout << endl;               // 一行画完，换行\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "+---+\n-+-+-\n--+--\n-+-+-\n+---+"
            },
            {
              "input": "7",
              "expectedOutput": "+-----+\n-+---+-\n--+-+--\n---+---\n--+-+--\n-+---+-\n+-----+"
            }
          ]
        },
        {
          "id": "l2_2023-09_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "数字黑洞\n【问题描述】给定一个三位数，要求各位不能相同。例如，352是符合要求的，112是不符合要求的。将这个三位数的三个数字重新排列，得到的最大数，减去得到的最小数，形成一个新的三位数。对这个新的三位数可以重复上述过程。神奇的是，最终一定会得到495！例如：352→532-235=297→972-279=693→963-369=594→954-459=495，共4次变换得到495。现在，输入的三位数，你能通过编程得出，这个三位数经过多少次变换能够得到495吗？\n【输入描述】输入一行，包含一个符合要求的三位数。\n【输出描述】输出一行，包含一个整数，表示经过多少次变换得到495。\n\n【样例输入 1】\n352\n【样例输出 1】\n4\n【数据范围】\n100 ≤ n ≤ 999",
          "options": null,
          "answer": null,
          "explanation": "思路：用循环t从0开始计数，每轮先判断n是否等于495，是则输出t并退出；否则把n拆成个位、十位、百位三个数字，通过比较大小重新组合出最大数tmax和最小数tmin，令n=tmax-tmin，继续下一轮。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n = 0; cin >> n;            // 读入初始三位数n\n    for (int t = 0; ; t++) {        // t是变换次数；一直循环直到算出495\n        if (n == 495) { cout << t << endl; break; }  // 已经到495就输出次数并停止\n        int m0 = n % 10, m1 = n / 10 % 10, m2 = n / 100;  // 拆出个位m0、十位m1、百位m2\n        int tmax = 0, tmin = 0;     // tmax存最大数，tmin存最小数\n        if (m0 >= m1 && m1 >= m2) { tmax = m0*100+m1*10+m2; tmin = m2*100+m1*10+m0; }  // 按 大、中、小 排最大数，按 小、中、大 排最小数\n        else if (m0 >= m2 && m2 >= m1) { tmax = m0*100+m2*10+m1; tmin = m1*100+m2*10+m0; }  // 同理：按大小排出最大数和最小数\n        else if (m1 >= m0 && m0 >= m2) { tmax = m1*100+m0*10+m2; tmin = m2*100+m0*10+m1; }  // 同理：按大小排出最大数和最小数\n        else if (m1 >= m2 && m2 >= m0) { tmax = m1*100+m2*10+m0; tmin = m0*100+m2*10+m1; }  // 同理：按大小排出最大数和最小数\n        else if (m2 >= m0 && m0 >= m1) { tmax = m2*100+m0*10+m1; tmin = m1*100+m0*10+m2; }  // 同理：按大小排出最大数和最小数\n        else { tmax = m2*100+m1*10+m0; tmin = m0*100+m1*10+m2; }   // 最后一种顺序：按大小排出最大数和最小数\n        n = tmax - tmin;            // 用最大数减最小数，得到新的三位数\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "352",
              "expectedOutput": "4"
            }
          ]
        },
        {
          "id": "l2_2024-12_04",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（ ）。\n<pre><code>for(int i=0;i<10;i++)\n    printf(\"%d\",i);</code></pre>",
          "options": [
            "123456789",
            "0123456789",
            "12345678910",
            "012345678910"
          ],
          "answer": 1,
          "explanation": "循环从i=0开始到i=9结束，依次输出0、1、2、3、4、5、6、7、8、9，且printf之间没有分隔符，连在一起就是0123456789。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（ ）。\n<pre><code>int i;\nfor(i=1;i<10;i++)\n    if(i%2) continue;\n    else break;\ncout<<i;</code></pre>",
          "options": [
            "1",
            "2",
            "9",
            "10"
          ],
          "answer": 1,
          "explanation": "i=1时1%2=1，执行continue进入下一轮；i=2时2%2=0，执行break跳出循环。循环结束后i=2，输出2。故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>for(i=0;i<10;i++)\n{\n    if(i%3) continue;\n    printf(\"0#\");\n}\nif(i>=10) printf(\"1#\");</code></pre>",
          "options": [
            "0#0#0#0#0#0#0#1#",
            "0#0#0#0#0#0#1#",
            "0#0#0#0#1#",
            "0#0#0#0#"
          ],
          "answer": 2,
          "explanation": "i%3==0的i为0,3,6,9，共4次输出“0#”；i=10退出循环后i>=10成立，再输出“1#”。所以结果是0#0#0#0#1#。故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于求正整数各位数字之和，横线处不应填入代码是（ ）。\n<pre><code>while (N != 0)\n{\n    ____;\n    N /= 10;\n}\ncout << tnt;</code></pre>",
          "options": [
            "tnt = tnt + N % 10",
            "tnt += N % 10",
            "tnt = N % 10 + tnt",
            "tnt = N % 10"
          ],
          "answer": 3,
          "explanation": "A、B、C都把N的个位数字累加到tnt上，正确实现数位和。D只把tnt覆盖成当前个位数字，每轮都被覆盖，最终只能得到最高位，求不出和，所以不能填D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下图的C++程序执行后的输出是（ ）。\n<pre><code>for(i=0;i<5;i++)\n    for(j=0;j<i;j++)\n        cout<<j;</code></pre>",
          "options": [
            "0010120123",
            "01012012301234",
            "001012012301234",
            "01012012301234012345"
          ],
          "answer": 0,
          "explanation": "i=0时内层不输出；i=1输出0；i=2输出01；i=3输出012；i=4输出0123。依次拼接为0、01、012、0123，即0010120123。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于实现图示的九九乘法表。相关说法错误的是（ ）。\n<pre><code>for (Hang = 1; Hang < 10; Hang++)\n{\n    for (Lie = 1; Lie < Hang + 1; Lie++)\n    {\n        if (Lie * Hang > 9)\n            printf(\"%d*%d=%d \", Lie, Hang, Lie * Hang);\n        else\n            printf(\"%d*%d=%d  \", Lie, Hang, Lie * Hang);\n    }\n    printf(\"\\n\");\n}</code></pre>",
          "options": [
            "将L1注释的printf(\"\\n\")移到L2注释所在行，效果相同",
            "将L1注释的printf(\"\\n\")修改为print(\"%c\",'\\n')效果相同",
            "将Lie×Hang > 9 修改为Lie×Hang >= 10 效果相同",
            "将Lie×Hang > 9 修改为Hang×Lie > 9 效果相同"
          ],
          "answer": 0,
          "explanation": "A把换行从每行结束后移到内层循环里，每输出一个算式就换行，会打乱乘法表的行结构，效果不同，所以A是错误说法。B的print实为printf笔误；C、D条件等价。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++用于求1-N的阶乘之和，如N为3，则是1!+2!+3!。下面代码段补充选项后用于实现上述功能，其中不能实现阶乘和的选项是（ ）。\n<pre><code>for (int i = 1; i < N + 1; i++)\n{\n    ____;\n    ____;\n}\ncout << tnt;</code></pre>",
          "options": [
            "nowNum *= i; tnt += nowNum;",
            "nowNum = nowNum×i; tnt = tnt + nowNum;",
            "nowNum *= i; tnt = nowNum + tnt;",
            "nowNum = nowNum + i; tnt *= nowNum;"
          ],
          "answer": 3,
          "explanation": "求阶乘和需要每次让nowNum乘上i得到当前阶乘，再累加到tnt。A、B、C都正确。D让nowNum加i而不是乘i，tnt又乘上nowNum，完全错误，不能实现阶乘和。故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于输出N和M之间（可以包括N和M）的孪生素数。孪生素数是指间隔为2的两个数均为素数，如11和13分别是素数，且间隔为2。为完成上述功能，横线处应填上的代码是（ ）。\n<pre><code>for (int i = N; i < ______; i++)\n    if (isPrime(i) && isPrime(i + 2))\n        printf(\"%d %d\\n\", i, i + 2);</code></pre>",
          "options": [
            "M - 2",
            "M - 1",
            "M",
            "M + 1"
          ],
          "answer": 1,
          "explanation": "要输出i和i+2这对孪生素数，i+2必须不超过M，即i不超过M-2。循环条件i<M-1使i最大取到M-2，正好满足。选B；M-2会漏掉(M-2,M)这对，M和M+1会让i+2超过M。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码实现输出如下图形（星号金字塔，高度为5时第1行4空格1星号、最后一行9星号），横线应填入的代码是（ ）。\n<pre><code>for (i = 0; i < height; i++)\n{\n    for (j = 0; j < ______; j++)\n        cout << \" \";\n    for (k = 0; k < ______; k++)\n        cout << \"*\";\n    cout << endl;\n}</code></pre>",
          "options": [
            "height - i, 2×i",
            "height, 2×i",
            "height - i, 2×i + 1",
            "height - i - 1, 2×i + 1"
          ],
          "answer": 3,
          "explanation": "第i行（从0开始）前面空格数=height-i-1（最后一行0个空格），星号数=2i+1（1,3,5,7,9）。A、B、C的空格数或星号数与图形不符。故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后因为有break，将输出0。\n<pre><code>int i;\nfor(i=0;i<10;i++)\n{\n    continue;\n    break;\n}\ncout<<i;</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "循环体内continue在前，每次都先执行continue跳过break，所以break从不会执行。i从0加到9再自增到10退出循环，输出10而不是0。所以这句话错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后将输出18行“OK”。\n<pre><code>for(i=8;i>2;i-=2)\n    for(j=0;j<i;j++)\n        printf(\"OK\\n\");</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "外层i取8、6、4；内层j分别循环8次、6次、4次，总共8+6+4=18次，输出18行OK。所以这句话正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "将下面C++代码中的i = 1 调整为i = 0 的输出结果相同。\n<pre><code>int cnt=0;\nfor(i=1;i<5;i++)\n    if(i%2) cnt+=1;\ncout<<cnt;</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i=1时，i取1、2、3、4，奇数1、3使cnt加2。i=0时，i取0、1、2、3、4，奇数1、3仍使cnt加2，0不影响。两种写法cnt都等于2，输出相同。所以正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面两段C++代码都是用于求1-10的和，其运行结果相同。通常说来，for循环都可以用while循环实现。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "第一段for循环从1加到10得55，第二段while循环同样从1加到10得55，结果相同。for循环的三个部分在while中都能对应改写，所以这句话正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "数位和\n【问题描述】小杨有n个正整数，小杨想知道这些正整数的数位和中最大值是多少。“数位和”指的是一个数字中所有数位的和。例如：对于数字16，它的各个数位分别是1、6，将这些数位相加得到7，因此16的数位和是7。\n【输入格式】第一行包含一个正整数n，代表正整数个数。之后n行，每行包含一个正整数。\n【输出格式】输出这些正整数的数位和的最大值。\n【样例输入 1】\n3\n16\n81\n10\n【样例输出 1】\n9",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个数，用while循环不断取个位tmp%10累加到smu，再tmp/=10去掉个位，循环结束后得到该数的数位和；用x记录所有数位和的最大值，每处理一个数就x=max(x,smu)，最后输出x。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\n#define ll long long               // 把ll当作long long的简写（能存很大的整数）\nint main() {\n    int n; cin >> n;                // 读入一共有几个数\n    int x = 0;                      // x记录目前最大的数位和\n    for (int i = 0; i < n; i++) {   // 依次处理每个数\n        int smu = 0;                // smu存当前这个数的数位和\n        ll tmp; cin >> tmp;         // 读入这个数\n        while (tmp > 0) { smu += tmp % 10; tmp /= 10; }  // 把每一位加起来，直到这个数变成0\n        x = max(x, smu);            // 如果这个数位和比之前的大，就更新最大值\n    }\n    cout << x << endl;              // 输出数位和的最大值\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n16\n81\n10",
              "expectedOutput": "9"
            }
          ]
        },
        {
          "id": "l2_2025-03_05",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是( )。\n<pre><code>int tnt=0;\nfor(int i=0;i<10;i++)\n    if(i%3) tnt+=1;\n    else tnt+=2;\ncout<<tnt;</code></pre>",
          "options": [
            "18",
            "17",
            "16",
            "14"
          ],
          "answer": 3,
          "explanation": "i从0到9，共10个数。i%3!=0的i为1,2,4,5,7,8共6个，每个tnt加1；i%3==0的i为0,3,6,9共4个，每个加2。tnt=6×1+4×2=14。故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是( )。\n<pre><code>int i;\nfor(i=10;i>0;i-=2)\n    break;\ncout<<i;</code></pre>",
          "options": [
            "10",
            "8",
            "0",
            "因为循环执行时会执行break语句而终止循环，所以i的值不确定"
          ],
          "answer": 0,
          "explanation": "循环第一次迭代i=10时，循环体第一条语句就是break，立刻跳出循环。此时i仍为10，输出10。故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（ ）。\n<pre><code>for(i=0;i<10;i++)\n{\n    if(i%3==0) continue;\n    cout<<\"0\"<<\"#\";\n}\nif(i>=10) cout<<\"1\"<<\"#\";</code></pre>",
          "options": [
            "0#0#0#0#0#0#",
            "0#0#0#0#0#0#0#1#",
            "0#0#0#0#1#",
            "0#0#0#0#0#0#1#"
          ],
          "answer": 3,
          "explanation": "i%3==0的i为0,3,6,9跳过；其余i=1,2,4,5,7,8共6次输出“0#”。循环结束i=10，i>=10成立输出“1#”。所以是6个0#加1#。故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\n<pre><code>for(i=0;i<5;i++)\n    for(j=i;j>0;j-=1)\n        printf(\"%d-\",j);</code></pre>",
          "options": [
            "1-2-1-3-2-1-4-3-2-1-",
            "1-2-1-3-2-1-4-3-2-1",
            "0-0-1-0-1-2-0-1-2-3-",
            "0-0-1-0-1-2-0-1-2-3"
          ],
          "answer": 0,
          "explanation": "i=0时内层不执行；i=1输出1-；i=2输出2-1-；i=3输出3-2-1-；i=4输出4-3-2-1-。拼接为1-2-1-3-2-1-4-3-2-1-。故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于求1到N之间正整数中含有3的数的个数，比如123和32都是符合条件的数。则前后两处横线应填入代码分别是（ ）。\n<pre><code>for (i = 1; (j = i) < N; i++)\n    while (j != 0)\n        if (j % 10 == 3)\n        {\n            cnt += 1;\n            ____;\n        }\n        else\n            ____;</code></pre>",
          "options": [
            "continue, j /= 10",
            "break, j /= 10",
            "continue, j %= 10",
            "break, j %= 10"
          ],
          "answer": 1,
          "explanation": "当某位数字是3时，该数已经含3，cnt加1后应跳出while循环检查下一个数，所以第一个空填break；否则要消去最后一位继续检查，j/=10。故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "两段C++代码都用于求1到N的阶乘之和（实现1用last*=i并累加，实现2每轮用内层循环重算tmp=1*2*...*i）。选项中的说法正确的是（ ）。",
          "options": [
            "虽然实现1的代码短小，但效率并不高",
            "实现2的代码效率更高，且更易于理解",
            "实现1因为应用了前项计算结果，计算量更小，因此效率高",
            "两种实现，效率几乎一致"
          ],
          "answer": 2,
          "explanation": "实现1在循环中直接沿用上一轮的阶乘值last*=i，每轮只做一次乘法，总计算量小；实现2每轮都要从1乘到i重新算阶乘，总计算量大。所以实现1效率高，选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "哥德巴赫猜想是指大于2的偶数都可以分解为两个质数之和，下面的代码用于验证4-1000之内的偶数能否分解为两个质数之和。对该段代码，错误的说法是（ ）。\n<pre><code>for (i = 4; i < 1000; i += 2)\n    for (j = 2; j < i; j++)\n        if (isPrime(j) && isPrime(i - j))\n        {\n            printf(...);\n            break;\n        }</code></pre>",
          "options": [
            "将代码isPrime(j) && isPrime(i-j) 修改为 isPrime(j)==true && isPrime(i-j)==true 效果相同",
            "代码执行后，输出的一对质数，一定是小的数在前",
            "即便将外层循环中i的上界1000修改为很大的整数，也不能说从数学上证明了哥德巴赫猜想",
            "根据题意，break语句应该移到if语句块之外"
          ],
          "answer": 3,
          "explanation": "break在内层if里，找到一对质数就结束内层循环去验证下一个偶数，位置正确；移到if外则j=2时就无条件break，代码出错，所以D是错误说法。A两个写法等价，B因j从2递增且先找到的解必有j≤i-j，C验证有限范围不能证明猜想，都对。故选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "已知C++代码和执行后的期望输出如下（数字金字塔，last从1开始每输出一个加1，大于9回到1），相关说法正确的是（ ）。\n<pre><code>last = 1;\nfor (i = 1; i < N; i++)\n{\n    for (j = 1; j < i + 1; j++)\n    {\n        if (last > 9)\n            last = 1;\n        cout << last << \" \";\n        last += 1;\n    }\n    printf(\"\\n\");\n}</code></pre>",
          "options": [
            "倒数第二行的printf(\"\\n\") 有错，应该修改为cout << endl; ，printf()函数不能输出换行",
            "last += 1 修改为last = last + 1 执行效果相同",
            "代码中L1标记行中的j < i + 1 应修改为j < i",
            "外层for循环前的last = 1 修改为last = 0 执行效果相同"
          ],
          "answer": 1,
          "explanation": "last+=1和last=last+1都是把last加1，执行效果完全相同，所以B正确。printf(\"\\n\")本身就能输出换行；把j<i+1改成j<i会少输出每行的最后一个数；last从0开始会让整个序列从0而不是1开始，效果不同。故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出10。\n<pre><code>int i;\nfor(i=0;i<10;i++)\n    continue;\ncout<<i<<endl;</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "循环从i=0执行到i=9，continue只是跳过剩余语句（本来也没有），i=10时条件不成立退出循环，输出i=10。所以正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出1。\n<pre><code>int i;\nfor(i=1;i<10;i++)\n{\n    break;\n    continue;\n}\ncout<<i<<endl;</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "第一次循环i=1时先执行break，立刻退出循环。循环结束后i=1，输出1。所以这句话正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后将输出10行\"OK\"。\n<pre><code>for(int i=0;i<5;i++)\n    for(int j=0;j<i;j++)\n        printf(\"OK\\n\");</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "内层循环执行次数：i=1时1次，i=2时2次，i=3时3次，i=4时4次，共1+2+3+4=10次，输出10行OK。所以正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "将下面C++代码中的for循环中的i = 1 调整为i = 0 的输出结果相同。\n<pre><code>int tnt=0;\nfor(int i=1;i<5;i++)\n    tnt+=i;\ncout<<tnt;</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i从1到4时tnt=1+2+3+4=10；i从0到4时tnt=0+1+2+3+4=10。多出的0不影响和，两种写法输出都相同。所以正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出0123。\n<pre><code>for(i=0;i<5;i++)\n    for(i=0;i<i;i++)\n        continue;\nprintf(\"%d\\n\",i);</code></pre> ( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "内层循环复用外层变量i，进入时先把i重置为0，而条件i<i在i=0时立即为假，内层循环体从不执行、i保持0；外层i++又把i加回1，于是外层始终停在i=1，程序陷入死循环，永远执行不到printf，不会有任何输出。题面说输出0123是错误的。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 3,
          "question": "等差矩阵\n【问题描述】小A想构造一个n行m列的矩阵，使得矩阵的每一行与每一列均是等差数列。小A发现，在矩阵的第i行第j列填入整数i×j，得到的矩阵能满足要求。你能帮小A输出这个矩阵吗？\n【输入格式】一行，两个正整数n m。\n【输出格式】共n行，每行m个由空格分割的整数，表示小A需要构造的矩阵。\n【样例输入 1】\n3 4\n【样例输出 1】\n1 2 3 4\n2 4 6 8\n3 6 9 12",
          "options": null,
          "answer": null,
          "explanation": "思路：直接用两层循环，第i行第j列输出i×j。注意第i行、第j列从1开始编号，每行最后一个数字后不要输出多余空格（用\" \\n\"[j==m]实现：j是最后一个位置时输出换行，否则输出空格）。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nint n, m;                           // 全局变量：行数n、列数m\nint main() {\n    scanf(\"%d%d\", &n, &m);          // 读入n和m\n    for (int i = 1; i <= n; i++)    // 外层循环：第i行\n        for (int j = 1; j <= m; j++)    // 内层循环：第j列\n            printf(\"%d%c\", i * j, \" \\n\"[j == m]);  // 第i行第j列填i×j；不是本行最后一个数就输出空格，是最后一个就换行\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 4",
              "expectedOutput": "1 2 3 4\n2 4 6 8\n3 6 9 12"
            }
          ]
        },
        {
          "id": "l2_202506_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>int i, Sum = 0;\nfor (i = 1; i < 10; i++)\n{\n    Sum += i;\n    if (i % 2)\n        continue;\n    if (i % 7)\n        break;\n}\ncout << Sum;</code></pre>",
          "options": [
            "A. 45",
            "B. 28",
            "C. 3",
            "D. 0"
          ],
          "answer": 2,
          "explanation": "i=1：Sum=1，1%2=1执行continue跳过本次；i=2：Sum=3，2%2=0不跳，但2%7=2执行break退出循环。循环只执行到i=2，Sum为3，所以输出3，故选C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（　）。\n<pre><code>int i, j;\nfor (i = 1; i < 12; i++)\n    for (j = 1; j < i; j++)\n        if (i * j % 2 == 1)\n            break;\ncout << i * j;</code></pre>",
          "options": [
            "A. 110",
            "B. 22",
            "C. 12",
            "D. 3"
          ],
          "answer": 2,
          "explanation": "内层找到第一个使i×j为奇数的j就break。奇数i（如3、5）时j=1即奇数，内层立刻break，j保持1；偶数i时内层跑完j=i。i=11（奇数）内层j=1退出后，i自增为12，循环结束。此时i×j=12×1=12，故选C。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（　）。\n<pre><code>int i, cnt = 0;\nfor (i = -99; i < 100; i += 2)\n    cnt = 1 + cnt;\ncout << cnt;</code></pre>",
          "options": [
            "A. 101",
            "B. 100",
            "C. 99",
            "D. 98"
          ],
          "answer": 1,
          "explanation": "循环i从-99到99每次加2，共(99-(-99))/2+1=100个数。cnt每次加1，循环执行100次，所以cnt=100，故选B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（　）。\n<pre><code>for (i = 1; i < 10; i++)\n{\n    if (i % 3 != 0)\n    {\n        printf(\"A#\");\n        continue;\n    }\n    else\n        break;\n    printf(\"0#\");\n}\nif (i == 10)\n    cout << \"1\";</code></pre>",
          "options": [
            "A. A#A#",
            "B. A#0#A#0",
            "C. A#A#1",
            "D. A#0#A#0#1"
          ],
          "answer": 0,
          "explanation": "i=1时1%3=1不等于0，输出A#并continue；i=2时2%3=2不等于0，输出A#并continue；i=3时3%3=0进入else执行break，后面的0#永远不执行。退出循环时i=3不等于10，不输出1。所以只输出A#A#，故选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（　）。\n<pre><code>for (i = 0; i < 3; i++)\n    for (j = 0; j < i; j++)\n        printf(\"%d#%d-\", i, j);\nprintf(\"END\");</code></pre>",
          "options": [
            "A. 1#0-2#0-2#1-END",
            "B. 0#0-1#0-1#1-2#0-2#1-2#2-END",
            "C. 0#0-1#0-1#1-2#0-2#1-2#2-END",
            "D. 1#0-2#0-2#1-END"
          ],
          "answer": 0,
          "explanation": "i=0时内层j<0不执行；i=1时j=0，输出1#0-；i=2时j=0、1，输出2#0-、2#1-；i=3时循环结束。最后输出END。连起来是1#0-2#0-2#1-END，故选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于判断一个大于0的正整数是几位数，横线处应填入的代码先后是（　）。\n<pre><code>cnt = 0;\nwhile (___1___)\n{\n    cnt += 1;\n    ___2___;\n}\ncout << cnt;</code></pre>",
          "options": [
            "A. N>1; N=N÷10",
            "B. N>1; N/=10",
            "C. N==0; N/=10",
            "D. N>0; N/=10"
          ],
          "answer": 3,
          "explanation": "不断把N除以10去掉个位并计数，直到N变成0。如123：123>0计数1变12，12>0计数2变1，1>0计数3变0，退出，cnt=3。若用N>1，则N=1时循环不执行，一位数会误判为0位，故必须用N>0，选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "判断一个数是否为自守数（平方的尾数与原数相同，如25的平方是625，尾数是25）。相关说法错误的是（　）。",
          "options": [
            "A. 如果Flag在循环中不被改为false，则说明该数是自守数",
            "B. if(N1%10!=M1%10)用于判断个位数是否相等",
            "C. N1=N1÷10, M1=M1÷10将个位数去掉",
            "D. 将N1>0改为N>0效果相同"
          ],
          "answer": 3,
          "explanation": "循环中N1不断除以10，循环条件是N1>0。若改成N>0，而N在循环中从未被修改，循环条件永远为真，程序会死循环，所以效果不同。A、B、C的说法都正确，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_15",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码输出由0开始连续递增、逢10归0的数字三角图形（10行）。相关说法错误的是（　）。",
          "options": [
            "A. 将now_number=0移到L1和L2之间效果不变",
            "B. now_number+=1改为now_number=1+now_number效果不变",
            "C. now_number==10改为now_number>9效果不变",
            "D. 最后一行cout<<endl改为cout<<\"\\n\"效果不变"
          ],
          "answer": 0,
          "explanation": "now_number=0若移到L1和L2之间，即每次进入新行前都把数字清零，则每行都从0开始，会输出0、01、012…而不是连续的三角数字，效果改变。B、C、D都是等价写法，效果不变，故选A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在下面的C++代码中，因为continue将被执行，因此不会有输出。\n<pre><code>for (i = 1; i < 10; i++)\n    if (i % 2 == 0)\n        continue;\nif (i == 10)\n    cout << \"END\";</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "continue只跳过循环体剩余部分，循环结束后i递增到10，if(i==10)成立，会输出END。所以\"不会有输出\"的说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后将输出15。\n<pre><code>int Sum = 0;\nfor (int i = 0; i < 5; i++)\n    Sum += i;\ncout << Sum;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "循环把0、1、2、3、4累加，Sum=0+1+2+3+4=10，不是15。题面说输出15错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "将下面C++代码中的(int i=5; i>1; i--)调整为(int i=1; i<5; i++)输出结果相同，因为5到1与1到5的求和相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "原代码求5+4+3+2=14，改后求1+2+3+4=10，两者并不相同。虽然从5到1和从1到5的整数集合相同，但循环范围i>1不包含1，i<5不包含5，结果不同，说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "为实现N行N列字符：输入奇数时中间列为*，输入偶数时中间两列为*，其他为-。代码if((j==N/2)||(j==(N-1)/2))能实现效果。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "N为奇数如5：N÷2=2，(N-1)/2=2，只有j=2为*，是中间一列；N为偶数如4：N÷2=2，(N-1)/2=1，j=1、2为*，是中间两列。两种情况都符合要求，说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：数三角形\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨在数直角三角形。一个直角三角形的两条直角边分别为a和b，其中a、b都是不超过n的正整数。\n直角三角形的面积等于a×b÷2，如果这个面积是整数，小杨就把它记入答案。\n注意：两条直角边a和b交换位置后，例如(1,2)和(2,1)，表示的是同一个直角三角形，只能算一次。\n请你求出这样的直角三角形一共有多少个。\n\n【输入描述】\n第一行一个整数n，表示两条直角边a、b的最大取值。\n\n【输出描述】\n输出一个整数，表示面积为整数的直角三角形个数。\n\n【样例输入 1】\n3\n\n【样例输出 1】\n3\n\n【样例输入 2】\n5\n\n【样例输出 2】\n9",
          "options": null,
          "answer": null,
          "explanation": "思路：面积为a×b÷2，面积为整数等价于a×b为偶数。用双层循环枚举a从1到n、b从a到n（避免重复），若a×b为偶数则计数。样例：n=3时(1,2)(2,2)(2,3)共3个；n=5时共9个。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main(){\n  int n,c=0; cin>>n;\n  for(int a=1;a<=n;a++) for(int b=a;b<=n;b++)\n    if((a*b)%2==0) c++;\n  cout<<c<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3",
              "expectedOutput": "3"
            },
            {
              "input": "5",
              "expectedOutput": "9"
            }
          ]
        },
        {
          "id": "l2_202506_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：幂和数\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n如果一个正整数n可以表示成两个2的次幂的和，就称n为幂和数。这里两个2的次幂的指数都是非负整数，并且两个次幂可以相同。\n例如，2可以表示成1+1，所以2是幂和数；3可以表示成1+2，也是幂和数；8可以表示成4+4，还是幂和数。\n给定两个正整数l和r，请你统计区间[l,r]内一共有多少个幂和数（l和r都包含在内）。\n\n【输入描述】\n第一行两个整数l和r，中间用空格分隔，分别表示统计区间的左端点和右端点。\n\n【输出描述】\n输出一个整数，表示区间[l,r]内幂和数的个数。\n\n【样例输入 1】\n2 8\n\n【样例输出 1】\n6\n\n【样例输入 2】\n10 100\n\n【样例输出 2】\n20",
          "options": null,
          "answer": null,
          "explanation": "思路：a、b都取2的幂（从1开始每次乘2）。外层a从1到r，内层b从a到r，计算a+b；若a+b落在[l,r]内则计数，b、a每次乘2扩大。样例：l=2,r=8时和为2、3、4、5、6、8共6个；l=10,r=100共20个。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <set>\nusing namespace std;\nint main(){\n  int l,r; cin>>l>>r;\n  set<int> s;\n  for(int i=0;i<=20;i++) for(int j=0;j<=20;j++){\n    long long v=(1LL<<i)+(1LL<<j);\n    if(v>=l&&v<=r) s.insert(v);\n  }\n  cout<<s.size()<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2 8",
              "expectedOutput": "6"
            },
            {
              "input": "10 100",
              "expectedOutput": "20"
            }
          ]
        },
        {
          "id": "l2_202509_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>cnt = 0;\nfor (int i = -10; i < 10; i++)\n    for (int j = 0; j < i; j++)\n        cnt += 1;\ncout << cnt;</code></pre>",
          "options": [
            "A. 145",
            "B. 125",
            "C. 55",
            "D. 45"
          ],
          "answer": 3,
          "explanation": "i为负数或0时，j<i不成立，内层不执行；i=1到9时内层执行i次。所以cnt=1+2+…+9=45，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（　）。\n<pre><code>for (i = 1; i < 12; i++)\n{\n    if (i % 2 == 0)\n        continue;\n    for (j = 0; j < i; j++)\n        if (i * j % 2)\n            break;\n}\nif (i >= 12)\n    cout << (i * j);</code></pre>",
          "options": [
            "A. 110",
            "B. 12",
            "C. 不确定",
            "D. 无输出"
          ],
          "answer": 1,
          "explanation": "i为奇数时，j=0时i×0%2=0不break，j=1时i×1为奇数立即break，j保持1；i为偶数时continue跳过。i=11后i自增为12退出循环。i×j=12×1=12，且i>=12成立，输出12，故选B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读下面的C++代码（变量都是整型），说法正确的是（　）。\n<pre><code>while (b != 0)\n{\n    remainder = a % b;\n    a = b;\n    b = remainder;\n}\ncout << a;</code></pre>",
          "options": [
            "A. b不能为0，因为a%b将导致错误",
            "B. a必须小于b，否则a%b将导致错误",
            "C. a和b必须都为正整数",
            "D. 如果a输入为0，则不管b是什么，输出值的绝对值都是abs(b)"
          ],
          "answer": 3,
          "explanation": "这是辗转相除法求最大公约数。b=0时循环条件不成立，不会执行a%b，所以A错；a无需小于b，B错；负数也可求，C错。若a=0，循环不进，直接输出a即b的原值，其绝对值等于abs(b)，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（　）。\n<pre><code>num = 0;\nwhile (num <= 5)\n{\n    num += 1;\n    if (num == 3)\n        continue;\n    printf(\"%d#\", num);\n}</code></pre>",
          "options": [
            "A. 1#2#4#5#6#",
            "B. 1#2#4#5#6",
            "C. 1#2#3#4#5#6#",
            "D. 1#2#3#4#5#6"
          ],
          "answer": 0,
          "explanation": "num从1增到6，每次先自增再判断。num=3时continue跳过输出；其余1、2、4、5、6都输出并带#。num=6后条件num<=5不成立退出。输出1#2#4#5#6#，故选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于记录多个输入数中的最大数和最小数（输入-999则输入结束），相关说法错误的是（　）。",
          "options": [
            "A. 如果第一个数输入-999，则输出将是-999 -999",
            "B. 如果输入中无-999，则程序能求出已输入整数的最大数和最小数",
            "C. 用于输入考试成绩（无-999）能求出最高分和最低分",
            "D. 可以将cin>>now_num移动到while(now_num!=-999){下面，结果不变"
          ],
          "answer": 3,
          "explanation": "把cin移到循环体开头，第一次读入的初始数会被第二次读入覆盖丢弃，且-999作为结束标志也会先被用来更新min_num，使结果改变，所以D错误。A、B、C说法都正确，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码统计与5有关的数（含5或能被5整除）。相关说法正确的是（　）。",
          "options": [
            "A. 删除continue不影响结果",
            "B. 删除j=i并把while内j改为i不影响结果",
            "C. 把break改为j=0不影响结果",
            "D. 把while(j>0)改为while(j>=0)不影响结果"
          ],
          "answer": 2,
          "explanation": "break是退出while循环，而j=0使j>0不成立同样退出循环，效果相同，C正确。A中continue防止能被5整除的数被重复计数，删除会改变结果；B中j=i保证不破坏外层i；D中j>=0当j=0时j/=10恒为0会死循环，都错误。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_13",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码输出右对齐的数字三角图形（N=10时共10行），两个横线处应填（　）。\n<pre><code>for (i = 1; i < N + 1; i++)\n{\n    for (_ = 1; _ < ___1___; _++)\n        cout << \" \";\n    for (_ = 1; _ < ___2___; _++)\n    {\n        ...\n    }\n}</code></pre>",
          "options": [
            "A. N-i+1; i+1",
            "B. 1; i",
            "C. N; i",
            "D. N-i; i+1"
          ],
          "answer": 0,
          "explanation": "第i行前面有N-i个空格，因为for(_=1;_<x;_++)执行x-1次，所以x=N-i+1；第i行输出i个数字，执行i次即x=i+1。故两处分别为N-i+1和i+1，选A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后将输出+#+#3#。\n<pre><code>for (i = 0; i < 3; i++)\n{\n    if (i == 2)\n        continue;\n    printf(\"+#\");\n}\ncout << i << '#';</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i=0、1时各输出+#，i=2时continue跳过。循环结束i=3，再输出3#。整体输出+#+#3#，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++代码用于求斐波那契数列（第1个数0，第2个数1，之后是前两数之和），输入大于1的正整数时能实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码用b=b+a、a=b-a迭代，每次输出a，依次得到0、1、1、2、3、5…，正是斐波那契数列，且输入n时输出前n项。说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++不能实现如下输出（对角矩阵），但如果将L1标记的cout<<0移到if块外面（L2处），则可以。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "原代码中cout<<0位于continue之后，永远不会执行，非对角线位置没有输出，所以不能实现对角矩阵；把cout<<0移到L2（if块外的循环体内），非对角线输出0，对角线因continue跳过，即可实现。说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：优美的数字\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n如果一个正整数的十进制表示中，所有数位上的数字都相同，就称它为优美的数字。例如，5、33、666、1111都是优美的数字，而23不是优美的数字。\n给定一个正整数n，请你求出不超过n的优美的数字一共有多少个。\n\n【输入描述】\n第一行一个整数n。\n\n【输出描述】\n输出一个整数，表示不超过n的优美的数字个数。\n\n【样例输入 1】\n6\n\n【样例输出 1】\n6\n\n【样例输入 2】\n2025\n\n【样例输出 2】\n28",
          "options": null,
          "answer": null,
          "explanation": "思路：从1到n逐个判断每个数的各位数字是否全相同。取出个位作基准v，循环除以10逐个比较其余各位，若都等于v则计数。样例：n=6时1到6都是优美数，共6个；n=2025时一位数9个、二位数9个、三位数9个、四位数1111和2222共2个（2222>2025），合计28个。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nbool beauty(int x){ int d=x%10; while(x){ if(x%10!=d) return false; x/=10;} return true;}\nint main(){\n  int n,c=0; cin>>n;\n  for(int i=1;i<=n;i++) if(beauty(i)) c++;\n  cout<<c<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6",
              "expectedOutput": "6"
            },
            {
              "input": "2025",
              "expectedOutput": "28"
            }
          ]
        },
        {
          "id": "l2_202509_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：菱形\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨想要在n行n列的网格中画一个菱形，其中n为奇数。\n菱形的四个顶点分别位于四条边的中点，用字符 # 画出菱形的四条边，其余位置用字符 . 填充。\n例如，当n等于3时，画出的菱形如下：\n.#.\n#.#\n.#.\n请你根据给定的n，画出对应的菱形。\n\n【输入描述】\n第一行一个整数n，表示菱形所在网格的边长（n为奇数）。\n\n【输出描述】\n输出n行，每行n个字符，表示画出的菱形。\n\n【样例输入 1】\n3\n\n【样例输出 1】\n.#.\n#.#\n.#.\n\n【样例输入 2】\n9\n\n【样例输出 2】\n....#....\n...#.#...\n..#...#..\n.#.....#.\n#.......#\n.#.....#.\n..#...#..\n...#.#...\n....#....",
          "options": null,
          "answer": null,
          "explanation": "思路：对n行n列的每个位置(i,j)判断是否在菱形边上。菱形条件为|i-k|+|j-k|==k，其中k=n÷2（行列从0开始）。满足则输出#否则输出.。样例：n=3输出.#./#.#/.#.；n=9输出9行的菱形。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main(){\n  int n; cin>>n; int mid=n/2;\n  for(int r=0;r<n;r++){\n    int d=abs(r-mid), l=d, rr=n-1-d;\n    for(int c=0;c<n;c++) cout<<(c==l||c==rr?\"#\":\".\");\n    cout<<endl;\n  }\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3",
              "expectedOutput": ".#.\n#.#\n.#."
            },
            {
              "input": "9",
              "expectedOutput": "....#....\n...#.#...\n..#...#..\n.#.....#.\n#.......#\n.#.....#.\n..#...#..\n...#.#...\n....#...."
            }
          ]
        },
        {
          "id": "l2_202512_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后的输出是（　）。\n<pre><code>for (int i = -2; i < 2; i++)\n    if (i % 2)\n        printf(\"%d#\", i);</code></pre>",
          "options": [
            "A. -1#1#",
            "B. -1#0#1#",
            "C. -2#-1#1#",
            "D. -2#-1#1#2#"
          ],
          "answer": 0,
          "explanation": "i=-2：-2%2=0为假；i=-1：-1%2=-1非0为真，输出-1#；i=0：0%2=0为假；i=1：1%2=1为真，输出1#。所以输出-1#1#，故选A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>int cnt = 0, N;\nfor (int i = 1; i < 10; i += 2)\n    for (int j = 0; j < i; j++)\n        cnt += 1;\ncout << cnt;</code></pre>",
          "options": [
            "A. 100",
            "B. 55",
            "C. 45",
            "D. 25"
          ],
          "answer": 3,
          "explanation": "外层i取1、3、5、7、9，内层j分别执行1、3、5、7、9次。cnt=1+3+5+7+9=25，故选D。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（　）。\n<pre><code>for (i = 1; i < 12; i++)\n{\n    if (i % 2 == 0)\n        continue;\n    for (j = 0; j < i; j++)\n        if (i * j % 2 == 0)\n            break;\n    if (j >= i)\n        cout << i * j << \" \";\n}\nif (i >= 12)\n    cout << (i * j);</code></pre>",
          "options": [
            "A. 0 0",
            "B. 11",
            "C. 0",
            "D. 0 11"
          ],
          "answer": 2,
          "explanation": "i为奇数时，j=0使i×0%2==0成立立即break，j=0，j>=i不成立无输出；i为偶数时continue跳过。i=11后自增为12，if(i>=12)输出i×j=12×0=0。所以只输出0，故选C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "与下面C++输出效果不一致的代码是（　）。原代码：\n<pre><code>for (i = 0; i < 10; i++)\n    cout << i;</code></pre>\n（输出0123456789）",
          "options": [
            "A. int i=0; while(i<10){cout<<i; i+=1;}",
            "B. int i=0; while(i<10){i+=1; cout<<i;}",
            "C. while(true){cout<<i; i+=1; if(i>=10)break;}",
            "D. while(true){if(i>=10)break; cout<<i; i+=1;}"
          ],
          "answer": 1,
          "explanation": "A输出0123456789，与原效果相同；C、D也输出0123456789。B中先自增再输出，输出12345678910，与原效果不一致，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（　）。\n<pre><code>int num = 0;\nwhile (num <= 5)\n{\n    num += 1;\n    if (num % 3)\n        continue;\n    printf(\"%d#\", num);\n}\nif (num > 5)\n    printf(\"%d\", num);</code></pre>",
          "options": [
            "A. 3#6#",
            "B. 3#6#6",
            "C. 1#2#3#4#5#6#",
            "D. 1#2#3#4#5#6#6"
          ],
          "answer": 1,
          "explanation": "num=3时3%3=0输出3#；num=6时6%3=0输出6#，其余num%3非0被continue跳过。循环结束num=6>5，再输出6。所以输出3#6#6，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后，其输出是（　）。\n<pre><code>int cnt = 0;\nfor (int i = 0; i < 5; i++)\n    for (int j = i; j < 4; j++)\n        cnt += 1;\ncout << cnt;</code></pre>",
          "options": [
            "A. 9",
            "B. 10",
            "C. 14",
            "D. 20"
          ],
          "answer": 1,
          "explanation": "i=0时j取0、1、2、3共4次；i=1时j取1、2、3共3次；i=2时2次；i=3时1次；i=4时j<4即4<4不执行。cnt=4+3+2+1=10，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码，输入5后输出的字符图形是（　）。\n<pre><code>for (i = 0; i < n; i++)\n{\n    for (j = 0; j < n - i - 1; j++)\n        cout << \" \";\n    for (k = 0; k < 2 * i + 1; k++)\n        cout << \"*\";\n    cout << endl;\n}</code></pre>",
          "options": [
            "A. 倒三角",
            "B. 正金字塔（每行奇数个*，居中）",
            "C. 左对齐递增三角",
            "D. 左对齐递减三角"
          ],
          "answer": 1,
          "explanation": "第i行先输出n-i-1个空格使星号居中，再输出2×i+1个星号。i=0时1个星号，i=4时9个星号，形成居中的正金字塔。n=5时输出第1行1个*、第5行9个*的等腰三角形，故选B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_19",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码中N是整数，执行时无论输入负整数、0或正整数，其输出都将是0。\n<pre><code>cin >> N;\nwhile (N)\n    N /= 10;\ncout << N;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "正整数不断除以10最终为0；0时循环不执行直接输出0；负整数如-123，-123÷10=-12、-12÷10=-1、-1÷10=0（C++向零取整），最终也为0。所以总是输出0，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码可以用于判断正整数N的位数（如123为3位数、12为2位数）。\n<pre><code>N10 = 10, i = 1;\nwhile (1)\n{\n    if (N % N10 == N)\n    {\n        printf(\"%d是%d位数\", N, i);\n        break;\n    }\n    i++, N10 *= 10;\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "N%N10当N10超过N的最高位时结果等于N本身。如N=123：10、100时都不等，N10=1000时123%1000=123相等，此时i=3，判断为3位数。能正确求位数，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++代码段执行后将输出55。\n<pre><code>for (i = 0; i < 10; i++)\n    for (j = i; j < 10; j++)\n        cnt += 1;\ncout << cnt;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "外层i取0到9，内层j从i到9，次数为10+9+8+…+1=55。cnt=55，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后输出九九乘法表，因为代码printf(\"\\n\")没有任何可读内容，删除不影响输出效果。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "printf(\"\\n\")是换行符，它决定每一行结束后换行。若删除它，所有数据会连续输出在同一行，无法形成乘法表的9行结构。所以题面说删除不影响输出错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：环保能量球\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨在参加一个环保活动：他每步行1公里就能获得1点能量，此外，每走满x公里还能额外获得1点能量。\n例如，当x等于2时，小杨走了5公里，他先获得5点能量，又因为走满了2公里和4公里这两个整x公里，额外获得2点能量，一共得到7点能量。\n现在有T组数据，每组数据给出小杨走的里程n和奖励间隔x，请你求出每组数据中小杨一共能获得的能量点数。\n\n【输入描述】\n第一行一个整数T，表示数据的组数。\n接下来T行，每行两个整数n和x，中间用空格分隔，分别表示这组数据中的里程数和奖励间隔。\n\n【输出描述】\n共T行，每行一个整数，表示这一组数据中小杨总共获得的能量点数。\n\n【样例输入 1】\n3\n5 2\n10 3\n2 5\n\n【样例输出 1】\n7\n13\n2",
          "options": null,
          "answer": null,
          "explanation": "思路：对每组数据，基础能量为n点；每走x公里额外1点，即额外奖励n÷x（整除）点。答案=n+n÷x。用循环从1到n判断i%x==0也可。样例：n=5,x=2得5+2=7；n=10,x=3得10+3=13；n=2,x=5得2+0=2。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main(){\n  int T; cin>>T;\n  while(T--){ int n,x; cin>>n>>x; cout<<n+n/x<<endl; }\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n5 2\n10 3\n2 5",
              "expectedOutput": "7\n13\n2"
            }
          ]
        },
        {
          "id": "l2_202603_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码段执行后其输出是（　）。\n<pre><code>tnt = 0;\nfor (int i = 0; i < 5; i++)\n{\n    for (int j = 0; j < i; j++)\n        tnt += 1;\n    cout << tnt << \"#\";\n}\ncout << tnt;</code></pre>",
          "options": [
            "A. 0#1#3#6#10#10",
            "B. 1#2#3#4#5#6#7#8#9#10#10",
            "C. 10#10",
            "D. 10"
          ],
          "answer": 0,
          "explanation": "每轮外层循环后内层使tnt累加i次。i=0时tnt=0输出0#，i=1后1输出1#，i=2后3输出3#，i=3后6输出6#，i=4后10输出10#，最后输出10。结果为0#1#3#6#10#10，故选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_08",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>for (i = 1; i < 5; i++)\n{\n    for (j = 0; j < i; j++)\n        cout << j << \"#\";\n    break;\n}\nif (i >= 5)\n    cout << (i * j);</code></pre>",
          "options": [
            "A. 0#0#1#0#1#2#0#1#2#3#12",
            "B. 0#0#1#0#1#2#0#1#2#3#",
            "C. 0#",
            "D. 1#"
          ],
          "answer": 2,
          "explanation": "i=1时内层j=0输出0#，随后执行break跳出外层循环，i仍为1，不满足i>=5，不再输出。所以只输出0#，故选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（　）。\n<pre><code>for (i = 1; i < 4; i++)\n    for (j = 1; j < 5; j++)\n    {\n        if (j == 3)\n            continue;\n        if (i == 2)\n            break;\n        count += 1;\n    }\ncout << (count);</code></pre>",
          "options": [
            "A. 2",
            "B. 4",
            "C. 6",
            "D. 8"
          ],
          "answer": 2,
          "explanation": "i=1：j=1、2各加1，j=3跳过，j=4加1，共3次；i=2：j=1时立即break，0次；i=3：同i=1共3次。count=3+0+3=6，故选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面4个选项中，与代码段 i=0; while(i<5){cout<<i; i+=1;} 具有相同效果的是（　）。",
          "options": [
            "A. for(i=0;i<5;i++) cout<<i;",
            "B. for(i=1;i<5;i++) cout<<i;",
            "C. for(i=0;i<6;i++) cout<<i;",
            "D. for(i=1;i<6;i++) cout<<i;"
          ],
          "answer": 0,
          "explanation": "原代码依次输出0、1、2、3、4。A的for(i=0;i<5;i++)同样输出0到4，效果相同；B输出1到4，C输出0到5，D输出1到5，都不同。故选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出是（　）。\n<pre><code>int n = 10;\nwhile (n > 0)\n{\n    n -= 1;\n    if (n % 3 == 0)\n        continue;\n    if (n == 5)\n        break;\n}\ncout << n;</code></pre>",
          "options": [
            "A. 0",
            "B. 5",
            "C. 6",
            "D. 7"
          ],
          "answer": 1,
          "explanation": "n从10递减：9被continue跳过，8、7继续，6被continue跳过，n=5时5%3不等于0且n==5成立，执行break退出。输出n=5，故选B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码段执行后，其输出是（　）。\n<pre><code>for (i = 0; i < 5; i++)\n{\n    i = -i;\n    for (j = i; j < -i; j++)\n        cnt += 1;\n    i = -i;\n}\ncout << cnt;</code></pre>",
          "options": [
            "A. 5",
            "B. 15",
            "C. 20",
            "D. 30"
          ],
          "answer": 2,
          "explanation": "i=0时内层0次；i=1时i=-1，内层j=-1、0共2次；i=2时i=-2，内层4次；i=3时6次；i=4时8次。内层次数为0+2+4+6+8=20，cnt=20，故选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码段正常执行后其输出的数字图形是（　）。\n<pre><code>for (i = 1; i < 5; i++)\n{\n    for (j = 1; j < i + 1; j++)\n        cout << j;\n    cout << endl;\n}</code></pre>",
          "options": [
            "A. 1÷12÷123÷1234",
            "B. 1÷22÷333÷4444",
            "C. 1÷21÷321÷4321",
            "D. 4÷34÷234÷1234"
          ],
          "answer": 0,
          "explanation": "第i行输出1到i，即i=1行输出1，i=2行输出12，i=3行输出123，i=4行输出1234。图形为1、12、123、1234，故选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_19",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码段执行后将输出0-3-6-9-。\n<pre><code>for (int i = 0; i < 10; i++)\n{\n    if (i % 3)\n        continue;\n    cout << i << \"-\";\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "i%3为0时输出该数，即i=0、3、6、9各输出一次并带短横线。输出0-3-6-9-，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_20",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下面的C++代码段，如果N是基本数据类型，则语句cout<<(N)将被执行0次或无数次（即死循环）。\n<pre><code>cin >> N;\nwhile (N)\n    cout << (N);</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "N=0时循环条件为假，执行0次；N不等于0时循环体内不改变N，条件永远为真，死循环。所以\"0次或无数次\"的说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码段可正常执行，删除continue不影响执行效果。\n<pre><code>for (i = 0; i < 10; i++)\n{\n    i += 1;\n    continue;\n}\ncout << (i);</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "continue是循环体内最后一条语句，删除它不改变循环执行流程，输出结果不变（都输出10）。所以说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码段执行将不会有输出，因为内层循环j总是从0开始，i*j%10==0会满足并执行break，故而i小于10，不会满足if判断条件。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "j=0时i×0%10==0成立，内层立即break，每个i都如此。循环结束后i=10，if(i>=10)成立，输出i×j=10×0=0，所以是有输出的。题面说不会有输出错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++代码执行后将输出1#4#9#16#16。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "实际执行：i=1时j结束为2，输出1×2=2#；i=2时j=3输出6#；i=3时j=4输出12#；i=4时j=5输出20#；最后输出5×5=25。整体为2#6#12#20#25，与题面1#4#9#16#16不符，说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码输出九九乘法表（左图），将\" %d\"修改为\"%3d\"即可实现右图（列对齐）输出。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "%3d把每个数按至少3位宽右对齐输出，各列对齐形成整齐的表格；而\" %d\"每个数前只加一个空格，两位数开始就错位。所以把\" %d\"改为\"%3d\"能实现右图效果，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_26",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：数数\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n如果一个正整数的十进制表示中恰好含有3个数字2，就称它为美丽的数。例如，2221和2223都恰好含有3个数字2，是美丽的数；而2222含有4个数字2，不是美丽的数。\n给定两个正整数L和R，请你统计区间[L,R]内一共有多少个美丽的数（L和R都包含在内）。\n\n【输入描述】\n第一行一个整数L，第二行一个整数R，分别表示统计区间的左端点和右端点。\n\n【输出描述】\n输出一个整数，表示区间[L,R]内美丽的数的个数。\n\n【样例输入 1】\n2221\n2223\n\n【样例输出 1】\n2",
          "options": null,
          "answer": null,
          "explanation": "思路：从L到R逐个枚举，对每个数i用循环除以10统计数字2出现的次数c，若c==3则计数。样例：2221和2223各含3个2是美丽数，2222含4个2不是，所以2221到2223共有2个美丽数，输出2。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint cnt2(int x){ int c=0; while(x){ if(x%10==2) c++; x/=10;} return c;}\nint main(){\n  int L,R,c=0; cin>>L>>R;\n  for(int i=L;i<=R;i++) if(cnt2(i)==3) c++;\n  cout<<c<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2221\n2223",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l2_202603_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：画画\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨想要在屏幕上画一个n行n列的正方形，具体规则如下：\n1. 四个顶点都用加号 +；\n2. 第1行和第n行上，除了顶点以外的位置都用短横线 -；\n3. 第1列和第n列上，除了顶点以外的位置都用竖线 |；\n4. 其余内部位置都用星号 *。\n例如，当n等于5时，画出的图形如下：\n+---+\n|***|\n|***|\n|***|\n+---+\n请你根据给定的n，画出对应的图形。\n\n【输入描述】\n第一行一个整数n，表示正方形的边长。\n\n【输出描述】\n输出n行，每行n个字符，表示画出的图形。\n\n【样例输入 1】\n5\n\n【样例输出 1】\n+---+\n|***|\n|***|\n|***|\n+---+",
          "options": null,
          "answer": null,
          "explanation": "思路：双重循环枚举行i和列j（0到n-1）。若j==0或j==n-1（边界列）：顶点处输出+，其余输出|；否则若i==0或i==n-1输出-，其余输出*。样例：n=5输出+---+、|***|共5行。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main(){\n  int n; cin>>n;\n  for(int r=0;r<n;r++){\n    for(int c=0;c<n;c++){\n      if((r==0||r==n-1)&&(c==0||c==n-1)) cout<<\"+\";\n      else if(r==0||r==n-1) cout<<\"-\";\n      else if(c==0||c==n-1) cout<<\"|\";\n      else cout<<\"*\";\n    }\n    cout<<endl;\n  }\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5",
              "expectedOutput": "+---+\n|***|\n|***|\n|***|\n+---+"
            }
          ]
        },
        {
          "id": "l2_202606_06",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "执行如下C++程序后，当输入4时，输出的最后一行是（　）。\n<pre><code>for (int i = n; i > 0; i--)\n{\n    for (int j = 0; j < i; j++)\n        cout << j + 1 << ' ';\n    cout << endl;\n}</code></pre>",
          "options": [
            "A. 0",
            "B. 1",
            "C. 1 2",
            "D. 1 2 3 4"
          ],
          "answer": 1,
          "explanation": "i=4输出1 2 3 4，i=3输出1 2 3，i=2输出1 2，i=1输出1。最后一行是i=1时输出的\"1\"，故选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_07",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>int tnt = 0;\nfor (int i = 1; i < 5; i += 3)\n{\n    for (int j = 0; j < i; j++)\n        tnt += 1;\n    cout << tnt << \"#\";\n}\ncout << tnt;</code></pre>",
          "options": [
            "A. 1#5#5",
            "B. 1#5#5#",
            "C. 1#5#12#12",
            "D. 0"
          ],
          "answer": 0,
          "explanation": "i=1时内层执行1次tnt=1，输出1#；i=4时内层执行4次tnt=5，输出5#；i=7时循环结束，最后输出5。结果为1#5#5，故选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_09",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行后其输出是（　）。\n<pre><code>for (i = 0; i < 3; i++)\n{\n    j = i;\n    while (j)\n    {\n        cnt += 1;\n        j -= 1;\n    }\n}\ncout << i << ' ' << j << ' ' << cnt;</code></pre>",
          "options": [
            "A. 3 0 3",
            "B. 2 0 4",
            "C. 2 0 5",
            "D. 3 0 5"
          ],
          "answer": 0,
          "explanation": "i=0：j=0，while不执行；i=1：j=1减到0，cnt=1；i=2：j=2减到0，cnt再+2得3。循环结束i=3，j=0，cnt=3。输出3 0 3，故选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_10",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后其输出是（　）。\n<pre><code>for (i = 1; i < 4; i++)\n    for (j = 0; j < i; j++)\n    {\n        if (j % 3 != 0)\n            continue;\n        count += 1;\n        break;\n    }\ncout << i << ' ' << j << ' ' << count;</code></pre>",
          "options": [
            "A. 4 0 4",
            "B. 3 0 0",
            "C. 3 2 0",
            "D. 4 0 3"
          ],
          "answer": 3,
          "explanation": "每轮外层循环，内层j=0时0%3==0，count加1后break，j保持0。i=1、2、3各加1次，count=3。外层结束后i=4。输出4 0 3，故选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_11",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "代码执行后输出1 2 3 … 10 11 5 6 … 11 5 6 …（循环数列），横线处应填入的运算符是（　）。\n<pre><code>if (num ___ 10)\n    num ___ 2;\nelse\n    num ___ 1;</code></pre>",
          "options": [
            "A. > /= +=",
            "B. >= %= +=",
            "C. > /= =+",
            "D. >= %= =+"
          ],
          "answer": 0,
          "explanation": "数列先递增到11，大于10时除以2得5，再递增到11又除以2，如此循环。所以判断num>10成立时num/=2，否则num+=1。三个空依次填>、/=、+=，故选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_12",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "如下数字图形（边框和对角线为1，其余为0），输入10来输出。横线处应填入的代码是（　）。",
          "options": [
            "A. i==j and i==1 and j==1 and i==N and j==N",
            "B. i==j or i==1 or j==1 or i==N or j==N",
            "C. i==j or i==0 or j==0 or i==(N+1) or j==(N+1)",
            "D. i==j and i==1 and j==1 and i==(N+1) and j==(N+1)"
          ],
          "answer": 1,
          "explanation": "图形中输出1的位置是第一行、最后一行、第一列、最后一列（边框）以及主对角线i==j。这些条件用or连接，即i==j or i==1 or j==1 or i==N or j==N，故选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_14",
          "kp": "kp2_07",
          "type": "choice",
          "difficulty": 1,
          "question": "如下C++代码执行后，输入4后输出的数字图形是（　）。\n<pre><code>for (i = n; i > 0; i--)\n{\n    for (j = 0; j < n - i; j++)\n        cout << \"0 \";\n    for (k = 0; k < i; k++)\n        cout << k + 1 << \" \";\n    cout << endl;\n}</code></pre>",
          "options": [
            "A. 1 2 3 4÷1 2 3 0÷1 2 0 0÷1 0 0 0",
            "B. 1 2 3 4÷0 1 2 3÷0 0 1 2÷0 0 0 1",
            "C. 1 2 3 4÷2 3 4 0÷3 4 0 0÷4 0 0 0",
            "D. 0 0 0 1÷0 0 1 2÷0 1 2 3÷1 2 3 4"
          ],
          "answer": 1,
          "explanation": "i=4输出0个0再接1 2 3 4；i=3先输出1个0再接1 2 3；i=2输出0 0再接1 2；i=1输出0 0 0再接1。图形为B，故选B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_19",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "下面C++代码执行后将输出1-4-7-。\n<pre><code>for (int i = 1; i < 10; i += 3)\n{\n    if (not i % 3)\n        break;\n    cout << i << \"-\";\n}</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "not i%3即(!i)%3，i=1时!1=0，0%3=0为假不break，输出1-；i=4、7同样输出。i=10时循环结束。输出1-4-7-，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_21",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如下C++代码执行后，输出值为9。\n<pre><code>for (i = 0; i < 10; i++)\n{\n    for (int j = 0; j < i; j++)\n        cnt += 1;\n    break;\n}\ncout << i;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "i=0时内层j<0不执行，随后break退出循环，i仍为0，输出0而不是9。所以题面说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_22",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如下C++代码执行时如输入10，输出将是100。\n<pre><code>for (i = 0; i < N; i++)\n    for (j = -i; j < i; j++)\n        cnt += 1;\ncout << cnt;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "第i轮内层执行2i次（i>0时），总次数为0+2+4+…+18=90，输出90而不是100。所以题面说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_23",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如下C++代码执行其输出是3。\n<pre><code>while (i < 3)\n{\n    j = 0;\n    while (j < 3)\n    {\n        if (i + j >= 3)\n            count += 1;\n        j += 1;\n    }\n    i += 1;\n}\ncout << count;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "满足i+j>=3的有(1,2)(2,1)(2,2)共3个，count=3。所以输出3，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_24",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如下C++代码执行时如果输入正整数，其输出将是输入的正整数。\n<pre><code>while (N != 0)\n{\n    rst = rst + N % 10 * Nbase;\n    N /= 10, Nbase *= 10;\n    i += 1;\n}\ncout << rst;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该循环把各位数字按位权重新组合：个位乘1、十位乘10、百位乘100…累加后正好还原原数N。所以输出与输入相同，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_25",
          "kp": "kp2_07",
          "type": "judge",
          "difficulty": 1,
          "question": "如下C++代码执行时如输入5，将输出代码后的字符图形（每行两边0、中间递增再递减的数字，共5行）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "第i行先输出n-i个0，中间输出1到i再到1的对称序列，再输出n-i个0。n=5时各行依次为000010000、000121000、001232100、012343210、123454321，与题图一致。说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_27",
          "kp": "kp2_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：菱形图案\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨想要在一张(2n−1)行(2n−1)列的画布上画一个菱形，菱形每条边由n个格子组成。用加号 + 画出菱形的四条边，其余位置用点号 . 填充。\n例如，当n等于4时，画布大小为7行7列，画出的菱形图案如下：\n...+...\n..+.+..\n.+...+.\n+.....+\n.+...+.\n..+.+..\n...+...\n请你根据给定的n，画出对应的菱形图案。\n\n【输入描述】\n第一行一个整数n，表示菱形每条边的格子数。\n\n【输出描述】\n输出2n−1行，每行2n−1个字符，表示画出的菱形图案。\n\n【样例输入 1】\n4\n\n【样例输出 1】\n...+...\n..+.+..\n.+...+.\n+.....+\n.+...+.\n..+.+..\n...+...",
          "options": null,
          "answer": null,
          "explanation": "思路：行列都从1到2n-1。菱形边满足四个条件：i+j==n+1、i+j==3n-1、i-j==n-1、j-i==n-1，满足任一条件输出+，否则输出.。样例：n=4输出7行的菱形。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main(){\n  int n; cin>>n; int sz=2*n-1, mid=n-1;\n  for(int r=0;r<sz;r++){\n    int d=abs(r-mid), l=d, rr=sz-1-d;\n    for(int c=0;c<sz;c++) cout<<(c==l||c==rr?\"+\":\".\");\n    cout<<endl;\n  }\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4",
              "expectedOutput": "...+...\n..+.+..\n.+...+.\n+.....+\n.+...+.\n..+.+..\n...+..."
            }
          ]
        }
      ]
    },
    "kp2_06": {
      "title": "多层分支结构",
      "questions": [
        {
          "id": "l2_202303_21",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在if...else语句中，else子句可以嵌套if...else语句，但if子句不可以，因为会造成二义性。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "if子句里同样可以嵌套if...else语句，只要用花括号把复合语句括起来就能避免二义性，所以“if子句不可以”的说法错误。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_21",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在if语句中，如果条件成立时需要执行多条语句，可以使用大括号‘{’和‘}’将这些语句括起来。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "当条件成立需要执行多条语句时，用花括号把语句括起来组成复合语句即可，所以本题说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202309_03",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "如果要找出整数 a 、 b 中较大一个，通常要用下面哪种程序结构？（　）。",
          "options": [
            "顺序结构",
            "循环结构",
            "分支结构",
            "跳转结构"
          ],
          "answer": 2,
          "explanation": "比较两个数的大小需要根据比较结果选择执行不同的语句，这正是分支结构（选择结构）的用途，所以选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_09",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是（ ）。\nx=1;\nwhile(x<100){ if(x%3!=0) cout<<x<<\",\"; else if(x/10) break; else x+=5; x+=2; }\ncout<<x;",
          "options": [
            "1",
            "1,3",
            "15,17",
            "1,10,12"
          ],
          "answer": 3,
          "explanation": "x=1输出“1,”后加2得3；3是3的倍数且3÷10为0，执行x+=5得8再加2得10；10不是3的倍数输出“10,”再加2得12；12是3的倍数且12÷10为1触发break，最后输出12，结果为1,10,12。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_18",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式 3+2 && 5-5 的值为false。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "3+2=5非零为真，5-5=0为零为假，真与假的逻辑与结果为假（false，即0）。在C++中真值为1，假值为0，所以该表达式值确实为false，说法正确。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_03",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "以下选项中，不能用于表示分支结构的C++保留字是（ ）？",
          "options": [
            "switch",
            "return",
            "else",
            "if"
          ],
          "answer": 1,
          "explanation": "switch、else、if都是用于构造分支（选择）结构的关键字，而return是函数返回值语句，不用于分支结构。故选return。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_11",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "有句俗话叫“三天打渔，两天晒网”。如果小杨前三天打渔，后两天晒网，一直重复这个过程，以下程序代码用于判断，第n天小杨是在打鱼还是晒网，横线处应填写？（ ）\nint n,i;\ncin>>n;\ni=n%5;\nif(______) cout<<\"晒网\"; else cout<<\"打鱼\";",
          "options": [
            "i==0",
            "i==4",
            "i==0&&i==4",
            "i==0||i==4"
          ],
          "answer": 3,
          "explanation": "5天为一个周期：第1、2、3天打渔，第4、5天晒网。n%5的结果中，第5天得0、第4天得4，这两天晒网；其余1、2、3打渔。所以条件为i==0||i==4。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_26",
          "kp": "kp2_06",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：乘法问题\n【问题描述】\n小A最近刚刚学习了乘法，为了帮助他练习，我们给他若干个正整数，并要求他将这些数乘起来。如果这些数的乘积超过1000000，小A就不会做了。请你写一个程序，告诉我们小A会如何作答。\n\n【输入描述】\n第一行一个整数n，表示正整数的个数。接下来n行，每行一个整数a，小A需要将所有a乘起来。\n\n【输出描述】\n输出一行，如果乘积超过1000000，则输出>1000000；否则输出所有数的乘积。\n【样例输入 1】\n2\n3\n5\n【样例输出 1】\n15",
          "options": null,
          "answer": null,
          "explanation": "思路：用long long保存乘积，初始为1。依次读入每个数，若当前乘积乘以该数会超过1000000，就直接输出>1000000并结束；否则累乘。读完全部数后输出最终乘积。注意判断要在累乘前进行，防止乘积溢出或先越界。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int n;                          // 定义n，表示有几个数\n    cin >> n;                       // 读入n\n    long long product = 1;          // product存乘积，从1开始乘（用long long防止数太大）\n    for (int i = 0; i < n; ++i) {   // 依次乘每个数\n        int a;                      // 定义变量a\n        cin >> a;                   // 读入一个数\n        if (product * a > 1000000) {    // 如果乘完后超过1000000\n            cout << \">1000000\" << endl; // 输出>1000000\n            return 0;               // 直接结束程序\n        }\n        product *= a;               // 没超的话就把a乘进乘积里\n    }\n    cout << product << endl;        // 输出最后的乘积\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n3\n5",
              "expectedOutput": "15"
            },
            {
              "input": "3\n100\n100\n100",
              "expectedOutput": "1000000"
            },
            {
              "input": "4\n100\n100\n100\n100",
              "expectedOutput": ">1000000"
            }
          ]
        },
        {
          "id": "l2_2024-06_06",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面的C++代码时输入1，则输出是（ ）。\nint month;\ncin>>month;\nswitch(month){\ncase 1: cout<<\"Jan \";\ncase 3: cout<<\"Mar \"; break;\ndefault: ;\n}",
          "options": [
            "Jan",
            "Mar",
            "Jan Mar",
            "以上均不对"
          ],
          "answer": 2,
          "explanation": "输入month=1，匹配case 1输出“Jan ”，case 1末尾没有break，会继续向下执行case 3输出“Mar ”，遇到break结束。所以输出“Jan Mar”。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_07",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码后，有关说法错误的是（ ）。\nint a,b;\ncin>>a>>b;\nif(a&&b) cout<<\"1\";\nelse if(!(a||b)) cout<<\"2\";\nelse if(a||b) cout<<\"3\";\nelse cout<<\"4\";",
          "options": [
            "如果先后输入1和1，则将输出1",
            "如果先后输入0和1或者1和0，则将输出3",
            "如果先后输入0和0，则将输出2",
            "如果先后输入0和0，则将输出4"
          ],
          "answer": 3,
          "explanation": "输入0和0时：a&&b为假，!(a||b)为真，输出2。选项D说输出4是错误的。输入1和1输出1，输入0和1（或1和0）时a||b为真输出3，A、B、C均正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_08",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "某货币由5元、2元和1元组成。输入金额（假设为正整数），计算出最少数量。为实现其功能，横线处应填入代码是（ ）。\nint N; cin>>N;\nint M5,M2,M1;\nM5=N/5;\nM2=______;\nM1=______;\nprintf(\"5*%d+2*%d+1*%d\",M5,M2,M1);",
          "options": [
            "N÷2  和  N-M5-M2",
            "(N-M5×5)/2  和  N-M5×5-M2×2",
            "N-M5×5÷2  和  N-M5×5-M2×2",
            "(N-M5×5)/2  和  N-M5-M2"
          ],
          "answer": 1,
          "explanation": "用5元尽量多取，M5=N÷5；剩下N-M5×5元用2元尽量多取，M2=(N-M5×5)/2；最后剩余N-M5×5-M2×2元用1元补齐，M1=N-M5×5-M2×2。故选B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_15",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在下面的C++代码中，N必须是小于10大于1的整数，M为正整数（大于0）。如果M被N整除则M为幸运数，如果M中含有N且能被N整除，则为超级幸运数，否则不是幸运数。程序用于判断M是否为幸运数或超级幸运数或非幸运数。阅读下面代码，有关说法正确的是（ ）。",
          "options": [
            "如果N输入3，M输入36则将输出：36是3的超级幸运数!",
            "如果N输入7，M输入21则将输出：21是7的幸运数!",
            "如果N输入8，M输入36则将输出：36非8的超级幸运数!",
            "如果N输入3，M输入63则将输出：63是3的超级幸运数!"
          ],
          "answer": 3,
          "explanation": "while循环里每轮先检查M的个位是否等于N，再执行M/=10，所以输出时M已被除以10。对A：M=36第一轮个位6不等于3，M变3，第二轮M=3个位等于3，此时输出的是“3是3的超级幸运数”，不是36。对D：M=63第一轮个位3等于N且Lucky为真，直接输出“63是3的超级幸运数!”，正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_09",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "执行下面C++代码并输入1和0，有关说法正确的是（ ）。\nint a,b;\ncin>>a>>b;\nif(a&&b) cout<<\"1\";\nelse if(!(a||b)) cout<<\"2\";\nelse if(a||b) cout<<\"3\";\nelse cout<<\"4\";",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "answer": 2,
          "explanation": "输入a=1、b=0：a&&b为假；!(a||b)为假；a||b为真，输出3。故选3。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_11",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式能正确判断“a等于0或b等于0”的是（ ）。",
          "options": [
            "(!a) || (!b)",
            "(a == b == 0)",
            "(a == 0) && (b == 0)",
            "(a == 0) - (b == 0) == 0"
          ],
          "answer": 0,
          "explanation": "!a表示a等于0，!b表示b等于0，中间的||是逻辑或，正好表示“a等于0或b等于0”。B只能判断a与b相等且都等于0；C是“且”关系；D要求a、b同时为0或同时不为0。故选A。",
          "source": "GESP2023-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-03_21",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在if...else语句中，else子句可以嵌套if...else语句，但if子句不可以，因为会造成二义性。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "if子句和else子句里都可以再嵌套if...else语句。如果担心二义性，可以用花括号{}把嵌套的语句括起来明确归属。所以说if子句不可以嵌套是错误的。",
          "source": "GESP2023-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_11",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "如果a和b均为int类型的变量，下列表达式能正确判断“a等于1且b等于1”的是（ ）。",
          "options": [
            "(a == b) && (b == 1)",
            "(a && b)",
            "(a == b == 1)",
            "(a×b == 1)"
          ],
          "answer": 0,
          "explanation": "A先判断a和b相等，再判断b等于1，两个条件同时成立时说明a=b=1，符合题意。B只要a、b都非0；C只要a和b相等；D中a=-1、b=-1也满足。故选A。",
          "source": "GESP2023-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_21",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在if语句中，如果条件成立时需要执行多条语句，可以使用大括号‘{’和‘}’将这些语句括起来。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "if后面默认只跟一条语句，如果条件成立时要执行多条语句，必须用花括号{}把它们组成一个复合语句。所以这句话正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_03",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "如果要找出整数a、b中较大一个，通常要用下面哪种程序结构？（ ）。",
          "options": [
            "顺序结构",
            "循环结构",
            "分支结构",
            "跳转结构"
          ],
          "answer": 2,
          "explanation": "比较两个数的大小需要根据条件选择输出哪一个，这正是分支（选择）结构做的事。顺序结构按部就班执行，循环结构反复执行，都无法单独完成大小比较。故选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_19",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式(2 * 3) || (2 + 5) 的值为67。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "||是逻辑或运算，返回值只能是0或1（false或true）。2×3=6非0，所以整个表达式为真，值是1，不是67。这句话错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-09_21",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "如果a为int类型的变量，则表达式(a >= 5 && a <= 10) 与(5 <= a <= 10) 的值总是相同的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "前者要求a同时满足大于等于5且小于等于10；后者先算5<=a得到0或1，再与10比较，0和1都小于10，所以恒为真。例如a=20时前者为0后者为1，值不同。所以错误。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_08",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码用于输出0-100之前（包含100）能被7整除但不能被3整除的数，横线处填入的代码是（ ）。\n<pre><code>for (i = 0; i < 100; i++)\n    if (_____)\n        cout << i << endl;</code></pre>",
          "options": [
            "i % 7 == 0 && i % 3 != 0",
            "!(i % 7) && i % 3 != 0",
            "i % 7 && i % 3",
            "i % 7 == 0 && !(i % 3 == 0)"
          ],
          "answer": 0,
          "explanation": "要筛选“能被7整除且不能被3整除”的数，条件应为i%7==0 && i%3!=0，即A。B中!(i%7)等价于i%7==0，D中!(i%3==0)等价于i%3!=0，B、D功能上也正确；C中i%7为真表示不能被7整除，方向反了，不能实现功能。故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_18",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++语句cout << (10 <= N <= 12) 中，假设N为12，则其输出为1。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++的<=从左到右结合：先算10<=12，结果为真即1；再算1<=12，结果为真即1。所以整个表达式的值是1，输出1。所以这句话正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_04",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "求三色彩球的颜色。每组先为5个红色球，随后3个绿色，最后为2个蓝色，每球有编号1,2,3……。输入编号N求颜色。下面C++代码是实现，正确说法是( )。\n<pre><code>remainder = N % 10;\nif (1 <= remainder && remainder <= 5)\n    cout << \"Red\";\nelse if (6 <= remainder && remainder <= 8)\n    cout << \"Green\";\nelse if (remainder == 9 || remainder == 0)\n    cout << \"Blue\";</code></pre>",
          "options": [
            "将else if ((remainder == 9) || (remainder == 0)) 修改为else 效果相同",
            "将((1 <= remainder) && (remainder<= 5)) 修改为(remainder <= 5) 效果相同",
            "else if ((6 <= remainder) && (remainder <= 8)) 写法错误，应修改为else if (6 <= remainder <= 8)",
            "根据题意remainder = N % 10 应修改为remainder = N÷10"
          ],
          "answer": 0,
          "explanation": "每个循环周期10个球，余数1~5红、6~8绿、9和0蓝，覆盖了所有可能。最后一个else if改成else也能正确捕捉其余情况（余数为9或0），所以A说法正确。B会让0误判为Red，C的连比写法语义不同，D改N÷10方向错误。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_09",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后，将输出能被2整除且除以7余数为2的数。下列选项不能实现的是（ ）。\n<pre><code>for (int i = 0; i < 100; i++)\n    if ____\n        cout << i << \"  \";</code></pre>",
          "options": [
            "((i % 2 == 0) && (i % 7 == 2))",
            "((!(i % 2)) && (i % 7 == 2))",
            "((!(i % 2)) && (!(i % 7)))",
            "((i % 2 != 1) && (i % 7 == 2))"
          ],
          "answer": 2,
          "explanation": "A、B、D都正确表达了“能被2整除（i%2==0）且除以7余2（i%7==2）”。C要求i%2==0且i%7==0，是“同时被2和7整除”，而不是余数为2，不能实现题意。故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_18",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语句cout << ((10 <= N <= 12)? \"true\":\"false\") 中，假设整型变量N为12，则其输出为true。原因是执行10 <= N 后其值为true，true 与12 相比仍然是true 。( )",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "10<=12为真（值1），然后1<=12仍为真，所以整个条件(10<=N<=12)为真，三元表达式输出\"true\"。理由描述符合C++从左到右的比较规则，所以正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_27",
          "kp": "kp2_06",
          "type": "coding",
          "difficulty": 3,
          "question": "时间跨越\n【问题描述】假设现在是y年m月d日h时，而k小时后是Y年M月D日H时，对于给定的y、m、d、h、k，请你帮他计算出对应的Y、M、D、H是多少。\n【输入格式】输入包含五行，每行一个正整数，分别代表y、m、d、h、k。\n【输出格式】输出四个正整数，代表Y M D H。\n【提示】闰年判断规则：普通闰年：年份能被4整除，但不能被100整除；世纪闰年：年份能被400整除。满足以上任意一条规则的年份就是闰年，否则是平年。\n【样例输入 1】\n2008\n2\n28\n23\n1\n【样例输出 1】\n2008 2 29 0",
          "options": null,
          "answer": null,
          "explanation": "思路：先把小时h加上k，若h>=24则h减24并把日期d加1；再根据当前月份和是否闰年确定当月天数days，若d超过days则减去days并把月份m加1；若m超过12则回到1月且年份y加1。最后输出y、m、d、h。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main() {\n    int y, m, d, h, k;              // 定义：年y、月m、日d、时h，再过k小时\n    cin >> y >> m >> d >> h >> k;   // 读入这5个数\n    h += k;                         // 把k小时直接加到当前小时上\n    if (h >= 24) {                  // 如果小时达到或超过24，说明要跨到第二天\n        h -= 24; d += 1;            // 减去24小时，日期加1\n        int days = 0;               // days存当前这个月有几天\n        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) days = 31;  // 这些是大月，有31天\n        else if (m == 4 || m == 6 || m == 9 || m == 11) days = 30;  // 这些是小月，有30天\n        else if (m == 2) {          // 2月要分平年闰年\n            if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) days = 29;  // 闰年2月有29天\n            else days = 28;         // 平年2月有28天\n        }\n        if (d > days) {             // 如果日期超过了这个月的天数\n            d -= days; m += 1;      // 减去这个月的天数，月份加1\n            if (m > 12) { m = 1; y += 1; }  // 如果月份超过12，就变成明年的1月\n        }\n    }\n    cout << y << \" \" << m << \" \" << d << \" \" << h << \"\\n\";  // 输出新的年月日时\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2008\n2\n28\n23\n1",
              "expectedOutput": "2008 2 29 0"
            }
          ]
        },
        {
          "id": "l2_202506_06",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "今天星期六，其后第N天是星期几？代码横线处应填（　）。\n<pre><code>remainder = ______;\nif (remainder == 0)\n    输出星期天\nelse\n    输出星期remainder。</code></pre>",
          "options": [
            "A. (N + 6) / 7",
            "B. (N + 6) // 7",
            "C. N % 7",
            "D. (N + 6) % 7"
          ],
          "answer": 3,
          "explanation": "星期六记作6，过了N天是星期(6+N)。用(6+N)%7取余：余数为0表示星期天，1到6表示星期1到星期6。如N=1得0是星期天，N=2得1是星期1。注意整除/得到商而非余数，故用取余%，选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_12",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后输出不能被3整除且除以5余数为2的数。下列选项不能实现的是（　）。\n<pre><code>if (______)\n    cout << i << endl;</code></pre>",
          "options": [
            "A. (i % 3 != 0) && (i % 5 == 2)",
            "B. (i % 3) && (i % 5 == 2)",
            "C. (i % 3) && !(i % 5 != 2)",
            "D. !(i % 3) && (i % 5 == 2)"
          ],
          "answer": 3,
          "explanation": "A表示i不能被3整除且余5为2，正确；B中i%3非0即为真，同A；C中!(i%5!=2)等价于i%5==2，也正确。D中!(i%3)在i能被3整除时为真，正好选了能被3整除的数，与题目要求相反，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_15",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "由重量3、4、6克的环按G3、G4、G6组（每组各12克，依次循环）组成无限长链，求编号N前所有环的总重量。下面的C++代码正确说法是（　）。",
          "options": [
            "A. 必须同时修改L1和L2才能实现",
            "B. 必须同时修改L3和L4才能实现",
            "C. 必须同时修改L3和L5才能实现",
            "D. 其他说法都不对"
          ],
          "answer": 3,
          "explanation": "每组9环36克：4个3克环、3个4克环、2个6克环。R=(N-1)%9表示当前周期内N前面的环数。前4环每环3克，第5-7环每环4克，第8环6克。代码L3用3R正确；L4应为4R-4，L5应为30，都需修改，但A、B、C所列组合都不对，故选D。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_18",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下列C++代码执行后将输出1，因为a确实小于20和10。\n<pre><code>a = 5;\ncout << (a < 10 and 20);</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a=5，a<10 and 20即(a<10)&&20，5<10为真(1)，1&&20的结果仍为真(1)，所以cout输出1；而且5确实小于20也小于10，题面结论正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202509_19",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码中变量都是整型，则执行后将输出1。\n<pre><code>x, y, z = 5, 10, 15;\nresult = x < y < z;\ncout << result;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "x,y,z=5,10,15是逗号表达式，实际只有z被赋值为5，x和y未赋值（整型变量在常见环境中默认值为0）。此时x<y<z即0<0<5，先算0<0得0，再算0<5得1，故输出1。题面结论正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_13",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "完整漂亮数：N能被M整除且某位是M且各位和能被M整除。下面的C++代码用于判断N是否为M的完整漂亮数，相关说法正确的是（　）。",
          "options": [
            "A. 代码能完成题目设定目标",
            "B. 在while前增加int old_num=N，并将L1开始的N改为old_num就能正确判定",
            "C. while中if判断可以增加else子句Flag=0",
            "D. 如果先后输入0和3，则肯定输出0是3的完整漂亮数"
          ],
          "answer": 1,
          "explanation": "while循环把N除到0，L1处用N%M时N已为0，0%M恒为0，导致判断失效。解决方法是先用old_num保存原N，L1处改用old_num。故选B；A错误（代码有bug），C、D也都不对。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "B",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_15",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "十佳歌手赛：25位选手、10位评委，去掉一个最高分一个最低分作为最终得分。关于代码的说法正确的是（　）。",
          "options": [
            "A. 程序总体逻辑错误，因为去掉最高最低需要排序",
            "B. max_score=0开始的3行应移到外层循环外",
            "C. L1和L2可以用if语句或?:代替",
            "D. total_score+=now_score不能改为total_score=total_score+now_score"
          ],
          "answer": 2,
          "explanation": "max和min函数与if、?:表达式完全等价，C正确。A错误：找最大最小值用比较即可，无需排序；B错误：这3行要每名选手重置一次，应留在内层循环外、外层循环内；D错误：+=与展开写法等价。故选C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_17",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式5<10&&20对应的逻辑值为true。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "5<10为真(1)，1&&20中20非0为真，结果为真，逻辑值为true。所以说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_20",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的C++代码执行后，其输出是4 0。\n<pre><code>int a, b;\na = 4;\nb = a == 5;\ncout << a << ' ' << b;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "a=4，b=a==5即4==5为假，值为0。所以输出\"4 0\"，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_23",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "计算1-2+3-4+5-…的代码中，将Flag=-Flag改为Flag-=Flag效果相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Flag=-Flag让符号在1和-1间交替；Flag-=Flag即Flag=Flag-Flag，结果恒为0。两者效果完全不同，所以题面说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_04",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "与C++表达式!(x>5 && y<=10)等价的是（　）。",
          "options": [
            "A. x<=5 && y>10",
            "B. x>5 || y<=10",
            "C. x<=5 || y>10",
            "D. !x>5 && !y<=10"
          ],
          "answer": 2,
          "explanation": "根据德摩根定律，!(A&&B)等价于!A||!B。这里A是x>5，!A是x<=5；B是y<=10，!B是y>10。所以原式等价于x<=5 || y>10，故选C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_07",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行之后的输出是（　）。\n<pre><code>for (int i = -2; i < 2; i++)\n    if (not i % 3)\n        cout << i << \"#\";</code></pre>",
          "options": [
            "A. 0#",
            "B. -2#-1#1#",
            "C. -1#0#",
            "D. -2#0#1#"
          ],
          "answer": 0,
          "explanation": "not优先级高于%，not i%3即(!i)%3，且C++中if(0)为假、if(非0)为真。i=-2：!(-2)=0，0%3=0为假，不输出；i=-1：!(-1)=0，0%3=0为假，不输出；i=0：!0=1，1%3=1为真，输出0#；i=1：!1=0，0%3=0为假，不输出。所以只输出0#，故选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202603_15",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "校园演讲比赛：8位评委打分（0~10的整数），若至少5位评委打大于等于6分则成绩有效取总分，否则记0分。横线处应填（　）。",
          "options": [
            "A. total_score+=score; high_count+=1",
            "B. total_score+=score; high_count+=score",
            "C. high_count+=1; total_score+=score",
            "D. total_score*=score; high_count*=1"
          ],
          "answer": 0,
          "explanation": "每次输入分数后，应把分数累加到总分并判断是否大于等于6分来计数。第一个空填total_score+=score；第二个空在score>=6时给high_count加1，填high_count+=1。故选A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_04",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "与C++表达式not(x>5 or y<=10)等价的是（　）。",
          "options": [
            "A. x<=5 or y>10",
            "B. x>5 and y<=10",
            "C. x<=5 and y>10",
            "D. not x>5 and not y<=10"
          ],
          "answer": 2,
          "explanation": "德摩根定律：not(A or B)等价于(not A) and (not B)。not(x>5)是x<=5，not(y<=10)是y>10。所以原式等价于x<=5 and y>10，故选C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "C",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_08",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的C++代码执行之后的输出是（　）。\n<pre><code>for (i = -2; i < 2; i++)\n    if (not i % 3 == 0)\n        cout << i << \"#\";\ncout << i;</code></pre>",
          "options": [
            "A. -2#-1#1#2",
            "B. -2#-1#1#2#3",
            "C. 1#2#3",
            "D. 0#1#2#3"
          ],
          "answer": 0,
          "explanation": "not i%3==0中not优先级最高：(!i)%3==0。i=-2：(!-2)%3=0%3=0==0真，输出-2#；i=-1输出-1#；i=0：(!0)%3=1不等于0不输出；i=1：0%3=0输出1#。循环结束i=2，再输出2。结果为-2#-1#1#2，故选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_13",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "英文corner case通常指正常范围以外的问题或情形。在如下C++代码中（读入分数到-1结束，输出平均分），corner case最应该是（　）。",
          "options": [
            "A. tnt=0,cnt=0应分为两行",
            "B. while(1)会死循环",
            "C. cin>>score前应提示输入整型数据",
            "D. cout<<tnt/cnt：如果直接输入-1，将导致除0错误"
          ],
          "answer": 3,
          "explanation": "如果第一次输入就是-1，则cnt为0，tnt÷cnt发生除零错误，这是典型的边界（corner case）。A、B、C都不是实质性问题。故选D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "D",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_15",
          "kp": "kp2_06",
          "type": "choice",
          "difficulty": 1,
          "question": "校园演讲比赛：10位评委打分，去掉一个最高分一个最低分作为最终得分。下列说法正确的是（　）。",
          "options": [
            "A. 上述代码能完成题目要求",
            "B. max_score=0,min_score=100应改为max_score=0,min_score=0",
            "C. max_score<score和min_score>score必须改为<=和>=",
            "D. total_score=total_score-max_score-min_score不能达到预期，应改为两行"
          ],
          "answer": 0,
          "explanation": "代码每次输入分数更新max、min并累加总分，最后总分减max减min即去掉一个最高分一个最低分，逻辑正确，A对。min初始为100能保证被实际分数替换，B错；用<和>即可，无需<=、>=，C错；单行减法表达式正确，D错。故选A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "A",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_17",
          "kp": "kp2_06",
          "type": "judge",
          "difficulty": 1,
          "question": "C++代码cout<<(not('5'%2==0)==((not'5'%2)==0))执行后的输出是1。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "左边not('5'%2==0)：'5'=53，53%2==0为假，not假为真(1)。右边(not'5'%2)==0：not53=0，0%2=0，0==0为真(1)。1==1成立，输出1。说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        }
      ]
    },
    "kp2_08": {
      "title": "数学函数",
      "questions": [
        {
          "id": "l2_202306_18",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "在使用C++语言编写程序时，不能使用sqrt、abs等数学函数，包含<cmath>或<math.h>头文件后就能够使用了。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "sqrt、abs等数学函数声明在<cmath>或<math.h>头文件中，包含对应头文件后就能使用，所以本题说法正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202306_25",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式sqrt(9.0)的计算结果为3，且结果类型为int。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sqrt函数的返回值类型是double，sqrt(9.0)得到的是double类型的3.0，而不是int类型的3，所以本题说法错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_11",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码用于输出1-100（含）的整数平方数（完全平方数），如16是4的平方，横线处应填写（ ）。\nfor(i=1;i<100+1;i++) if(______) cout<<i<<\" \";",
          "options": [
            "int(sqrt(i))*int(sqrt(i))=i",
            "int(sqrt(i))==sqrt(i)",
            "int(sqrt(i))*int(sqrt(i))==i",
            "int(sqrt(i))=sqrt(i)"
          ],
          "answer": 2,
          "explanation": "判断i是否为完全平方数，可先取sqrt(i)的整数部分r，再检查r×r是否等于i。A、D用单个等号是赋值不是比较；B比较整数与浮点可能因精度误判；C用r×r==i最稳妥。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-12_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++代码中，执行srand(0)后连续两次执行rand()的结果相等。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "srand()用于设置随机数种子，设置后rand()仍按伪随机序列依次产生不同数值，连续两次调用rand()结果通常不相等。若要在每次调用前重新设置种子才会相同，故说法错误。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_05",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "下列4个表达式中，答案不是整数8的是（ ）？",
          "options": [
            "abs(-8)",
            "min(max(8,9),10)",
            "int(8.88)",
            "sqrt(64)"
          ],
          "answer": 1,
          "explanation": "abs(-8)=8；min(max(8,9),10)：max(8,9)=9，min(9,10)=9，结果是9不是8；int(8.88)=8；sqrt(64)=8.0，数值为8。因此答案为min(max(8,9),10)。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-03_23",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "如果变量a的值使得C++表达式sqrt(a)==abs(a)，则a的值为0。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "a=0时sqrt(0)=0、abs(0)=0成立；但a=1时sqrt(1)=1、abs(1)=1同样成立。满足条件的a不只0一个，所以“a的值为0”说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_05",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，cout<<(5%2 && 5%3)的输出是（ ）。",
          "options": [
            "1",
            "2",
            "true",
            "false"
          ],
          "answer": 0,
          "explanation": "5%2=1，5%3=2，1和2都非零为真，1&&2的真值为true，C++中cout输出布尔值true时显示为1，故选1。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++的整型变量N被赋值为10，则语句cout<<N/3<<\"-\"<<N%3执行后输出是3-1。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "10÷3=3（整除），10%3=1（余数），中间输出一个“-”，所以输出“3-1”，说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-06_26",
          "kp": "kp2_08",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：平方之和\n【问题描述】\n小杨有n个正整数a_i，他想知道对于所有的a_i，是否存在两个正整数x和y满足x×x+y×y=a_i。\n\n【输入格式】\n第一行包含一个正整数n，代表正整数数量。之后n行，每行包含一个正整数a_i。\n\n【输出格式】\n对于每个正整数，如果存在两个正整数x和y满足条件，输出Yes，否则输出No。\n【样例输入 1】\n2\n5\n4\n【样例输出 1】\nYes\nNo",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个数n，枚举x从1到sqrt(n-1)（保证y×y>=1），令j=n-x×x，判断j是否是完全平方数（开方后平方等于j）。若存在则输出Yes，否则No。判断完全平方可用int(sqrt(j))*int(sqrt(j))==j，注意用double开方并转为int比较。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nbool check(int x){                  // 判断x是不是完全平方数\n    int y = sqrt(x);                // 取x的平方根（自动取整）\n    return y*y==x;                  // 取整后的平方根乘自己正好等于x，就是完全平方数\n}\nint main(){\n    int t;                          // 定义t，表示有几组数据\n    cin>>t;                         // 读入t\n    while(t--){                     // 每组数据都处理一遍\n        int n;                      // 定义n\n        cin>>n;                     // 读入这个数n\n        int fl=0;                   // fl标记有没有找到两个数\n        for(int i=1;i*i<n;i++){     // 试着让第一个数i从1开始，且i的平方必须小于n\n            int j=n-i*i;            // 剩下的部分就是第二个数的平方\n            if(check(j))fl=1;       // 如果剩下部分也是完全平方数，就找到了\n        }\n        if(fl)cout<<\"Yes\\n\";       // 找到了输出Yes\n        else cout<<\"No\\n\";         // 没找到输出No\n    }\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n5\n4",
              "expectedOutput": "Yes\nNo"
            }
          ]
        },
        {
          "id": "l2_2024-09_05",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，cout<<(5/2+5%3)的输出是（ ）。",
          "options": [
            "1",
            "2",
            "4",
            "5"
          ],
          "answer": 2,
          "explanation": "5/2在C++中是整数除法，结果为2；5%3是取余运算，结果为2。两者相加2+2=4，因此cout输出4。注意整数除法只保留商的整数部分，而取余得到的是整除后的余数，二者配合常用于拆分数字的十位与个位。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_07",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++代码中假设N为正整数，则下面代码能获得个位数的是（ ）。",
          "options": [
            "N % 10",
            "N÷10",
            "N && 10",
            "以上选项均不正确"
          ],
          "answer": 0,
          "explanation": "取个位数用N%10，即N除以10的余数。N÷10得到的是去掉个位后的数，N&&10是逻辑运算，结果只表示N是否非零。故选N%10。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_18",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式12%10%10的值为2。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "按从左到右的顺序计算：先算12%10得到2，再用2%10得到2，所以整个表达式的结果确实是2。取余运算的优先级相同，从左向右结合，本题主要考查同一数字连续取余的运算过程。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-09_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++语句cout<<rand()<<' '<<rand();的第二个输出值较大。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "rand()产生伪随机数，两次调用结果没有确定的大小关系，可能第一次大也可能第二次大，不能断言第二个较大。说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_18",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "在使用C++语言编写程序时，不能使用sqrt、abs等数学函数，包含<cmath>或<math.h>头文件后就能够使用了。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "sqrt、abs等数学函数在<cmath>或<math.h>头文件中声明，只要包含对应头文件就可以使用。所以这句话正确。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2023-06_25",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "表达式sqrt(9.0)的计算结果为3，且结果类型为int。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sqrt函数的返回类型是double，sqrt(9.0)的结果是3.0，类型是double而不是int。所以这句话错误。",
          "source": "GESP2023-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_15",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "下面C++代码执行后的输出是30，则横线处不能填入（ ）。\n<pre><code>int a = 10, b = 20, c = 30;\ncout << ____ << endl;</code></pre>",
          "options": [
            "max(max(a, b), c)",
            "min(a+b, c)",
            "sqrt(a+b+c)",
            "(a+b+c)/2"
          ],
          "answer": 2,
          "explanation": "max(max(10,20),30)=30，min(30,30)=30，(10+20+30)/2=30，A、B、D都输出30。sqrt(60)约等于7.7，不是30，所以不能填C。故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "如果C++表达式int(sqrt(N))*int(sqrt(N)) == N 的值为True，则说明N为完全平方数，如4、9、25等。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "若N是完全平方数，sqrt(N)是整数，int(sqrt(N))的平方正好等于N；若N不是完全平方数，sqrt(N)带小数，int截断后平方小于N。所以表达式为真当且仅当N是完全平方数。正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2024-12_26",
          "kp": "kp2_08",
          "type": "coding",
          "difficulty": 3,
          "question": "寻找数字\n【问题描述】小杨有一个正整数a，小杨想知道是否存在一个正整数b满足b×b×b×b = a（即b的四次方等于a）。\n【输入格式】第一行包含一个正整数T，代表测试数据组数。对于每组测试数据，第一行包含一个正整数代表a。\n【输出格式】对于每组测试数据，如果存在满足条件的正整数b，则输出b，否则输出-1。\n【样例输入 1】\n3\n16\n81\n10\n【样例输出 1】\n2\n3\n-1",
          "options": null,
          "answer": null,
          "explanation": "思路：对每个a，先取b=int(sqrt(sqrt(a)))（a的四次方根的整数部分），再检查b×b×b×b是否恰好等于a，相等则输出b，否则输出-1。利用cmath的sqrt函数开两次平方即可得到四次方根。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main() {\n    int t; cin >> t;                // 读入有几组数据t\n    while (t--) {                   // 每组数据处理一遍\n        int a; cin >> a;            // 读入这个数a\n        int b = (int)(sqrt(sqrt(a)));   // 先开两次平方根，大致得到b\n        if (b * b * b * b == a) cout << b << endl;  // 验算：b的四次方正好等于a就输出b\n        else cout << -1 << endl;    // 否则输出-1\n    }\n    return 0;                       // 程序正常结束\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n16\n81\n10",
              "expectedOutput": "2\n3\n-1"
            }
          ]
        },
        {
          "id": "l2_2025-03_14",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，（ ）最适合填入横线处连续5次正确生成1到10之间的随机整数？\n<pre><code>for (int i = 0; i < 5; i++)\n    ____;</code></pre>",
          "options": [
            "rand( ) % 11",
            "rand( ) % 10",
            "rand( ) % 10 + 1",
            "rand() % 9 + 1"
          ],
          "answer": 2,
          "explanation": "rand()%10得到0~9，再加1得到1~10，正好覆盖1到10，所以C正确。A得到0~10（含0，11个数），B得到0~9（含0），D得到1~9（缺10）。故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_15",
          "kp": "kp2_08",
          "type": "choice",
          "difficulty": 1,
          "question": "在C++中，如果a和b均为float类型的变量，那么二者如果相差足够小（比如0.000001），就可以视作相等。下列哪个表达式能用来正确判断“a等于b” ( )。",
          "options": [
            "((b-a) < 0.000001 )",
            "((b-a) <= 0.000001 )",
            "(abs(b-a) <= 0.000001 )",
            "(sqrt(b-a) <= 0.000001 )"
          ],
          "answer": 2,
          "explanation": "比较两个float是否近似相等，应取它们差值的绝对值与阈值比较。abs(b-a)<=0.000001在差值无论正负都很小时都成立，所以C正确。A、B在b<a时b-a为负，恒小于阈值，判断不严谨；D对负值开方出错。故选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_2025-03_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "C++表达式(sqrt(N) * sqrt(N)) == N 中的N如果为正整数，则表达式的值为true，相当于开平方后平方是本身。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "sqrt(N)返回double，sqrt(N)*sqrt(N)是浮点运算，结果可能有微小误差（如28.9999...），与整数N用==比较不一定相等。所以表达式不一定为true。这句话错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202506_19",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "a和b分别是C++的整型变量，如果表达式max(a,b)==min(a,b)的值为真，则说明a和b相等。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "max(a,b)是两者中较大者，min(a,b)是较小者。只有当a==b时，最大值才等于最小值。所以该判断语句正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202512_27",
          "kp": "kp2_08",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：黄金格\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨有一张H行W列的矩形地图，地图上的格子用坐标(r,c)表示，其中r表示行号，c表示列号，行号和列号都从1开始数。\n如果一个格子满足不等式 √(r×r+c×c) ≤ x+r−c，就称它为黄金格。\n给定H、W和x，请你求出这张地图上一共有多少个黄金格。\n\n【输入描述】\n第一行一个整数H，表示地图的行数。\n第二行一个整数W，表示地图的列数。\n第三行一个整数x。\n\n【输出描述】\n输出一个整数，表示黄金格的个数。\n\n【样例输入 1】\n4\n4\n2\n\n【样例输出 1】\n4",
          "options": null,
          "answer": null,
          "explanation": "思路：枚举所有格子(r从1到H，c从1到W)，用sqrt函数计算坐标平方和的平方根，判断是否小于等于x+r-c，满足则计数。样例：H=4,W=4,x=2时满足条件的有(1,1)(2,1)(3,1)(4,1)共4个黄金格。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint main(){\n  int H,W,x,c=0; cin>>H>>W>>x;\n  for(int r=1;r<=H;r++) for(int c2=1;c2<=W;c2++)\n    if(r*r+c2*c2<=(x+r-c2)*(x+r-c2)) c++;\n  cout<<c<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n4\n2",
              "expectedOutput": "4"
            }
          ]
        },
        {
          "id": "l2_202603_22",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "统计1到N中含3的个数。如果将while(i!=0)改为while(abs(i))，则执行结果相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "循环中i从正整数k开始反复除以10，i始终非负，此时abs(i)与i相等，while(abs(i))与while(i!=0)判断结果完全相同。所以说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": "正确",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_20",
          "kp": "kp2_08",
          "type": "judge",
          "difficulty": 1,
          "question": "执行如下C++代码，将从小到大依次输出abs(N)个整数，并在最后输出1。\n<pre><code>if (N < 0)\n    start_num = N, end_num = 0;\nfor (i = start_num; i < end_num; i++)\n    cout << i << \" \";\ncout << endl << ((i - 1) == abs(N)) << endl;</code></pre>",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "N为正时输出1到N共N个数，最后(i-1)==abs(N)成立输出1；但N为负时输出N到-1共|N|个数，最后i=0，i-1=-1不等于|N|，输出0。所以\"最后输出1\"并非总是成立，说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": "错误",
          "starterCode": null,
          "testCases": null
        },
        {
          "id": "l2_202606_26",
          "kp": "kp2_08",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：完全平方数计数\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n如果一个正整数可以写成某个正整数的平方，就称它为完全平方数。例如，1、4、9、16都是完全平方数。\n给定两个正整数l和r，请你统计区间[l,r]内一共有多少个完全平方数（l和r都包含在内）。\n\n【输入描述】\n第一行一个整数l，第二行一个整数r，分别表示统计区间的左端点和右端点。\n\n【输出描述】\n输出一个整数，表示区间[l,r]内完全平方数的个数。\n\n【样例输入 1】\n1\n21\n\n【样例输出 1】\n4",
          "options": null,
          "answer": null,
          "explanation": "思路：完全平方数是某正整数平方的数。用i从1开始，若i×i在[l,r]内则计数；i×i超过r即停止。样例：1到21之间完全平方数为1、4、9、16，共4个。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <cmath>\nusing namespace std;\nint main(){\n  int l,r,c=0; cin>>l>>r;\n  for(int i=l;i<=r;i++){ int s=sqrt(i); if(s*s==i) c++; }\n  cout<<c<<endl;\n  return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "1\n21",
              "expectedOutput": "4"
            }
          ]
        }
      ]
    }
  },
  "mockExam": [],
  "realExam": []
};

if (typeof module !== 'undefined') module.exports = QUESTION_BANK;
