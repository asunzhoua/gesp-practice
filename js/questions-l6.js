const QUESTION_BANK = {
  "knowledgePoints": {
    "kp6_01": {
      "title": "树的定义与遍历",
      "questions": [
        {
          "id": "l6_202309_11",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下图的二叉树，说法正确的是（ ）。\n【图为二叉树，见原卷】",
          "options": [
            "A. 既是完全二叉树也是满二叉树。",
            "B. 既是二叉搜索树也是平衡二叉树。",
            "C. 非平衡二叉树。",
            "D. 以上说法都不正确。"
          ],
          "answer": 1,
          "explanation": "图中二叉树满足左子树所有结点值小于根、右子树所有结点值大于根，是二叉搜索树；且左右子树高度差不超过1，是平衡二叉树。它既非满二叉树也不一定完全，因此A、C错误，答案选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_27",
          "kp": "kp6_01",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨的握手问题\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨的班级里共有 N 名同学，学号分别是从 0 到 N-1 的整数。\n老师安排了一个进入教室的顺序，全班 N 名同学按照这个顺序依次走进教室。\n每一位同学走进教室时，都要和教室里已经坐好的、学号比自己小的同学握手。\n请你帮助小杨计算：整个班级一共会进行多少次握手？\n\n【输入描述】\n第一行包含一个正整数 N，表示班级里的同学人数。\n第二行包含 N 个整数，依次表示同学们进入教室的顺序，也就是这 N 名同学的学号。\n\n【输出描述】\n输出一行，包含一个整数，表示整个班级总共进行握手的次数。\n【数据范围】\n1 ≤ N ≤ 300000\n\n【样例输入 1】\n4\n2 1 3 0\n\n【样例输出 1】\n2\n\n【样例输入 2】\n6\n0 1 2 3 4 5\n\n【样例输出 2】\n15",
          "options": [],
          "answer": null,
          "explanation": "每次进入时与之前学号比自己小的同学握手，等价于统计所有(i>j且a[i]>a[j])的“顺序对”个数。N最大3×10^5，双重循环会超时。用归并排序求逆序对的思路：在合并过程中，若左边元素num[i]>num[j]，则左边剩余元素个数m-i即新增的握手数，累加即可，时间复杂度O(N log N)。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint num[300000];\nint tmp[300000];\nlong long merge(int l, int r) {\n    if (l + 1 == r)\n        return 0;\n    int m = (l + r) / 2;\n    long long res = merge(l, m) + merge(m, r);\n    for (int i = l, j = m, k = l; k < r; k++) {\n        if (j == r || (i < m && num[i] > num[j])) {\n            tmp[k] = num[i];\n            i++;\n        } else {\n            tmp[k] = num[j];\n            j++;\n            res += m - i;\n        }\n    }\n    for (int k = l; k < r; k++)\n        num[k] = tmp[k];\n    return res;\n}\nint main() {\n    int n = 0;\n    cin >> n;\n    for (int i = 0; i < n; i++)\n        cin >> num[i];\n    cout << merge(0, n) << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n2 1 3 0",
              "expectedOutput": "2"
            },
            {
              "input": "6\n0 1 2 3 4 5",
              "expectedOutput": "15"
            }
          ]
        },
        {
          "id": "l6_202312_04",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，错误的是（ ）。\n【题面含二叉树结点与树构造代码块（BiNode/BiTree），见原卷】",
          "options": [
            "A. 上列C++代码适用于构造各种二叉树",
            "B. 代码struct BiNode用于构造二叉树的节点",
            "C. 代码BiTree(){root=Creat();} 用于构造二叉树",
            "D. 析构函数不可以省略"
          ],
          "answer": 3,
          "explanation": "C++中析构函数可以省略，编译器会自动生成一个默认析构函数，因此D的说法错误。struct BiNode定义结点，BiTree()构造函数中调用Creat()创建树，A、B、C都正确，故答案选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_05",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "基于第4题的定义，有关下面C++代码的说法正确的是（ ）。\n【题面含二叉树遍历Order()函数代码块，见原卷】",
          "options": [
            "A. 代码中Order()函数是中序遍历二叉树的方法",
            "B. 代码中Order()先访问根节点，然后对左子树进行前序遍历，再对右子树前序遍历",
            "C. 代码中Order()先访问中序遍历左子树，然后访问根节点，最后则是中序遍历右子树",
            "D. 代码中Order()先后序遍历左子树，然后后序遍历右子树，最后访问根节点"
          ],
          "answer": 1,
          "explanation": "该Order()函数的访问顺序是“根、左、右”，即先访问根节点，再对左子树做同样的前序遍历，最后对右子树前序遍历，这是前序遍历，B正确。中序是“左根右”，后序是“左右根”，A、C、D描述都不对，故答案选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_11",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "构造二叉树[1,2,3,null,4]（ ）。",
          "options": [
            "A. 1(2()(4))(3)",
            "B. 1(2(3)())(4)",
            "C. (1,2(3),(4))",
            "D. (1,(2)(3),(4))"
          ],
          "answer": 0,
          "explanation": "括号表示法中，根结点1的左右孩子为2和3，写成1(2)(3)；结点2的左孩子为空、右孩子为4，写成2()(4)。整体即1(2()(4))(3)，与选项A一致，所以选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_12",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "若一棵二叉树的先序遍历为：A, B, D, E, C, F、中序遍历为：D, B, E, A, F, C，它的后序遍历为（ ）。",
          "options": [
            "A. D, E, B, F, C, A",
            "B. E, D, B, F, C, A",
            "C. D, E, B, C, F, A",
            "D. E, D, B, C, F, A"
          ],
          "answer": 0,
          "explanation": "先序第一个A为根，中序中A把序列分成左子树(DBE)和右子树(FC)。左子树先序BDE、中序DBE，得B为根，D在左、E在B的右；右子树先序CF、中序FC，得C为根、F在左。后序为左子树(E D B)、右子树(F C)、根A，即D E B F C A，选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_09",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "二叉树的（ ）第一个访问的节点是根节点。",
          "options": [
            "A. 先序遍历",
            "B. 中序遍历",
            "C. 后序遍历",
            "D. 以上都是"
          ],
          "answer": 0,
          "explanation": "先序遍历的顺序是“根、左、右”，首先访问根节点；中序遍历第一个访问的是最左结点，后序遍历最后才访问根。因此只有先序遍历第一个访问的是根节点，答案选A。本题是二叉树遍历的基础判断题。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_08",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一棵二叉树，其前序遍历结果为：ABDECFG，中序遍历结果为：DEBACFG，则这棵树的正确后序遍历结果是（ ）。",
          "options": [
            "A. EDBGFCA",
            "B. EDGBFCA",
            "C. DEBGFCA",
            "D. DBEGFCA"
          ],
          "answer": 0,
          "explanation": "前序第一个A是根，中序把序列分成左子树(DEB)和右子树(FCG)。左子树前序BDE、中序DEB，得B为根、左子树含DE，D为B左孩子、E为D右孩子；右子树前序CFG、中序FCG，得C为根、F左G右。后序为E D B F G C A，即EDBGFCA，选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_06",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于树的说法，（ ）是正确的。",
          "options": [
            "A. 在一棵二叉树中，叶子结点的度一定是2。",
            "B. 满二叉树中每一层的结点数等于2^(层数-1)。",
            "C. 在一棵树中，所有结点的度之和等于所有叶子结点的度之和。",
            "D. 一棵二叉树的先序遍历结果和中序遍历结果一定相同。"
          ],
          "answer": 1,
          "explanation": "满二叉树第k层结点数为2^(k-1)，B正确。叶子结点度为0不是2，A错；所有结点度之和等于边数的2倍，不等于叶子度之和，C错；先序与中序结果通常不同，D错，故答案选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_22",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的代码实现了二叉树的前序遍历，它通过递归方法访问每个节点并打印节点值。\nvoid preorder(TreeNode* root){ if(root==NULL) return; cout<<root->val<<\" \"; preorder(root->left); preorder(root->right); }",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "代码先输出根节点值，再递归遍历左子树，最后递归遍历右子树，访问顺序为“根、左、右”，这正是二叉树的前序遍历，并且采用递归方式实现。题干说法正确，故选“正确”。先序“根左右”与递归实现完全对应。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_26",
          "kp": "kp6_01",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：树上游走\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨有一棵非常特别的二叉树，它一共有无穷多个节点。\n这棵二叉树的根节点编号是 1，并且每一个节点都有左儿子和右儿子：编号为 x 的节点，它的左儿子编号是 2x，右儿子编号是 2x+1。\n\n小杨一开始站在编号为 s 的节点上，接下来他会移动 n 次，每次可以选择下面三种方式之一：\n（1）U：如果当前节点有父节点，就向上移动到它的父节点；如果当前节点是根节点（编号为 1），就原地不动。\n（2）L：移动到当前节点的左儿子。\n（3）R：移动到当前节点的右儿子。\n\n请你计算出小杨移动 n 次之后，他所处的节点编号。\n\n【输入描述】\n第一行包含两个正整数 n 和 s，分别表示移动次数和小杨初始所在的节点编号。\n第二行包含一个长度为 n 的字符串，由字符 U、L、R 组成，依次表示小杨每一次的移动方式。\n\n【输出描述】\n输出一行，包含一个整数，表示小杨移动 n 次之后所处的节点编号。\n\n【样例输入 1】\n3 2\nURR\n\n【样例输出 1】\n7",
          "options": [],
          "answer": null,
          "explanation": "模拟移动即可：节点x上移U变为x÷2，左移L变为2x，右移R变为2x+1。注意根节点（编号1）向上不移动。数据保证最终节点编号不超过限制，直接按移动指令模拟计算即可得到答案。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\n#define ll long long\nusing namespace std;\nconst ll INF = 1e12;\nint n;\nstack<char> st;\nstring c;\nll s;\nint main(){\n    cin >> n >> s >> c;\n    for(int i = 0; i < n; i ++){\n        if(c[i] == 'U'){\n            if(s == 1) continue;\n            if(st.size()){\n                st.pop();\n                continue;\n            }\n            s >>= 1;\n        }else if(c[i] == 'L'){\n            if((s << 1) > INF){\n                st.push('L');\n                continue;\n            }\n            s = s << 1;\n        }else{\n            if((s << 1 | 1) > INF){\n                st.push('R');\n                continue;\n            }\n            s = s << 1 | 1;\n        }\n    }\n    cout << s << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 2\nURR",
              "expectedOutput": "7"
            }
          ]
        },
        {
          "id": "l6_202503_03",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了树的哪种遍历方式？\nvoid traverse(TreeNode* root){ if(root==nullptr) return; cout<<root->val<<\" \"; traverse(root->left); traverse(root->right); }",
          "options": [
            "A. 前序遍历",
            "B. 中序遍历",
            "C. 后序遍历",
            "D. 层次遍历"
          ],
          "answer": 0,
          "explanation": "该代码先输出根节点值，再递归遍历左子树，最后递归遍历右子树，访问顺序为“根、左、右”，这是二叉树的前序遍历。因此该代码实现的是前序遍历，答案选A。前序遍历是三种深度遍历中最先访问根的一种。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_19",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码实现的是二叉树的中序遍历：\nvoid traverse(TreeNode* root){ if(root==nullptr) return; traverse(root->left); cout<<root->val<<\" \"; traverse(root->right); }",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该代码先递归遍历左子树，再访问根节点，最后递归遍历右子树，访问顺序为“左、根、右”，这正是二叉树的中序遍历。因此“该代码实现的是中序遍历”的说法正确，故选“正确”。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_08",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知一棵二叉树的前序遍历序列为 GDAFEMHZ，中序遍历序列为 ADFGEHMZ，则其后序遍历序列为（   ）。",
          "options": [
            "A. ADFGEHMZ",
            "B. ADFGHMEZ",
            "C. AFDGEMZH",
            "D. AFDHZMEG"
          ],
          "answer": 3,
          "explanation": "前序 G 为根，中序 ADF|G|EHMZ，左子树 A-D-F（D 为根，左 A 右 F），右子树 E-M-H-Z（E 根，M 为右子根，左 H 右 Z）。后序为左+右+根：A F D H Z M E G，即 AFDHZMEG。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_25",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "如下为线性筛法，用于高效生成素数表，其核心思想是每个合数只被它的最小质因数筛掉一次，时间复杂度为 O(n)。\nfor (int i = 2; i <= n; ++i) {\nif (is_prime[i]) primes.push_back(i);\nfor (int j = 0; j < primes.size() && i * primes[j] <= n; ++j) {\nis_prime[i * primes[j]] = false;\nif (i % primes[j] == 0) break;\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "线性筛通过 if (i % primes[j] == 0) break 保证每个合数只被它的最小质因数标记一次，总操作次数与 n 成正比，时间复杂度 O(n)。说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_27",
          "kp": "kp6_01",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：最大因数\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵有 n 个结点的有根树，这些结点依次以 1,2,...,n 编号，根结点的编号为 1。对于编号为 i 的结点，其父结点的编号为 i 的因数中除 i 以外最大的因数。现在有 q 组询问，第 i 组询问给定 xi, yi，请你求出编号分别为 xi 和 yi 的两个结点在这棵树上的距离。\n输入格式：第一行，一个正整数 q，表示询问组数。接下来 q 行，每行两个正整数，表示询问结点的编号。\n输出格式：输出共 q 行，每行一个整数，表示结点之间的距离。",
          "options": [],
          "answer": null,
          "explanation": "思路：结点 i 的父结点是 i 的最大真因数，即不断除以 i 的最小质因子，因此从 i 到根的链就是把 i 按质因子逐个除下去。把 x、y 的质因子链（除质因子的中间值）求出来，从根向下比较找到公共前缀 LCA，距离就是两链长度减去公共部分，即两指针移动到相同值的步数之和。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 50;\nint q;\nint a[N], cnta;\nint b[N], cntb;\nint f[N], t;\nvoid factorize(int x, int a[], int &cnt) {\n    a[0] = x;\n    t = 0;\n    for (int i = 2; i * i <= x; i++)\n        while (x % i == 0) {\n            f[++t] = i;\n            x /= i;\n        }\n    if (x > 1)\n        f[++t] = x;\n    for (int i = 1; i <= t; i++)\n        a[i] = a[i - 1] / f[i];\n    cnt = t;\n}\nint main() {\n    scanf(\"%d\", &q);\n    while (q--) {\n        int x, y;\n        scanf(\"%d%d\", &x, &y);\n        factorize(x, a, cnta);\n        factorize(y, b, cntb);\n        int px = 0, py = 0;\n        while (a[px] != b[py]) {\n            if (a[px] > b[py])\n                px++;\n            else\n                py++;\n        }\n        printf(\"%d\\n\", px + py);\n    }\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 3\n2 5\n4 8\n",
              "expectedOutput": "1\n2\n1\n"
            },
            {
              "input": "1\n120 650\n",
              "expectedOutput": "9\n"
            }
          ]
        },
        {
          "id": "l6_202509_07",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知二叉树的中序遍历是 [D, B, E, A, F, C]，先序遍历是 [A, B, D, E, C, F]。请问该二叉树的后序遍历结果是（   ）。",
          "options": [
            "A. [D, E, B, F, C, A]",
            "B. [D, B, E, F, C, A]",
            "C. [D, E, B, C, F, A]",
            "D. [B, D, E, F, C, A]"
          ],
          "answer": 0,
          "explanation": "先序 A 为根，中序 DBE|A|FC；左子树先序 BDE 中序 DBE，B 为根，左 D 右 E；右子树先序 CF 中序 FC，C 为根，左 F。后序为左+右+根：D E B F C A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_21",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "一棵有 n 个节点的二叉树一定有 n-1 条边。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉树是特殊的树结构。一棵有 n 个节点的树中，除根节点外每个节点都恰好有一条边连接其父节点，因此总边数为 n-1。该结论对任意二叉树都成立，例如单节点树边数为 0、三节点满二叉树边数为 2，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_22",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码实现了二叉树的中序遍历。输入以下二叉树，中序遍历结果是 4 2 5 1 3 6。\n//     1\n//    / \\\n//   2   3\n//  / \\   \\\n// 4   5   6",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "中序按左-根-右访问：节点 2 的左子树输出 4，再输出 2，再输出 5；然后根 1；右子树节点 3 先访问其左（空）再输出 3，最后输出 3 的右孩子 6，得到 4 2 5 1 3 6。说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_07",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了二叉树的（  ）。\nvoid traverse(TreeNode* root) {\nif (!root) return;\ntraverse(root->left);\ntraverse(root->right);\ncout << root->val << \" \";\n}",
          "options": [
            "A. 前序遍历",
            "B. 中序遍历",
            "C. 后序遍历",
            "D. 层序遍历"
          ],
          "answer": 2,
          "explanation": "该函数先递归遍历左子树 traverse(root->left)，再递归遍历右子树 traverse(root->right)，最后才输出根节点值 root->val，访问顺序为左-右-根，这正是后序遍历的典型实现，故选 C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_18",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码能够正确统计二叉树中叶子结点的数量。\nint countLeaf(TreeNode* root) {\nif (!root) return 0;\nif (!root->left && !root->right) return 1;\nreturn countLeaf(root->left) + countLeaf(root->right);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该递归函数处理三种情况：空树返回 0；当前节点没有左孩子也没有右孩子，说明它是叶子，返回 1；否则递归统计左右子树的叶子数并相加。三种情况覆盖完整，能正确统计二叉树的叶子节点数量，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_07",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "某二叉树共有 10 个结点，记为 A~J，已知它的先序遍历序列为：A B D H I E C F J G，中序遍历序列为：H D I B E A F J C G，则该二叉树的后序遍历序列是（   ）。",
          "options": [
            "A. H I D E B J F G C A",
            "B. H I D B E J F G C A",
            "C. I H D E B J F G C A",
            "D. H I D E B F J G C A"
          ],
          "answer": 0,
          "explanation": "根 A，左子树 B-D-H-I-E（B 根，左 D 有子 H、I，右 E），右子树 C-F-J-G（C 根，左 F-J，右 G）。后序为左+右+根：H I D E B J F G C A。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_08",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树的遍历的说法中，正确的一项是（ ）。",
          "options": [
            "A. 对任意一棵树进行深度优先遍历，所得序列一定唯一。",
            "B. 已知一棵二叉树的先序遍历和后序遍历序列，可以唯一确定这棵二叉树。",
            "C. 已知一棵二叉树的先序遍历和中序遍历序列，可以唯一确定这棵二叉树。",
            "D. 已知一棵二叉树的先序遍历序列，可以唯一确定这棵二叉树。"
          ],
          "answer": 2,
          "explanation": "由先序遍历可确定根节点，由中序遍历可确定左右子树各含哪些节点，两者结合能唯一确定一棵二叉树。仅先序和后序无法区分只有一个孩子的左右方向，仅先序信息更是不足，因此 A、B、D 错误，选 C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_23",
          "kp": "kp6_01",
          "type": "judge",
          "difficulty": 1,
          "question": "设二叉树共有 n 个结点，函数 preorderTraversal 以下代码的时间复杂度为 O(n)，空间复杂度为 O(n)。\nvoid preorder(TreeNode* root, vector<int>& res) {\nif (root == nullptr) return;\nres.push_back(root->val);\npreorder(root->left, res);\npreorder(root->right, res);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递归前序遍历中每个节点恰好被访问一次，因此时间复杂度为 O(n)。递归调用会产生调用栈，递归深度最坏等于树的高度，斜树时深度为 n，所以空间复杂度最坏为 O(n)，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_07",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了二叉树的哪种遍历方式？\nvoid traverse(TreeNode* root) {\nif (root == nullptr) return;\ncout << root->val << \" \";\ntraverse(root->left);\ntraverse(root->right);\n}",
          "options": [
            "A. 前序遍历",
            "B. 中序遍历",
            "C. 后序遍历",
            "D. 层序遍历"
          ],
          "answer": 0,
          "explanation": "该函数先输出当前根节点值 cout << root->val，再递归遍历左子树，最后递归遍历右子树，访问顺序为根-左-右，这是前序遍历（先序遍历）的典型实现，故选 A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_08",
          "kp": "kp6_01",
          "type": "choice",
          "difficulty": 1,
          "question": "已知一棵二叉树的先序遍历序列为：A B D E H C F G，中序遍历序列为：D B H E A F C G，则该二叉树的后序遍历序列是（  ）。",
          "options": [
            "A. D H E B F G C A",
            "B. D E H B F G C A",
            "C. H D E B F C G A",
            "D. D H E B G F C A"
          ],
          "answer": 0,
          "explanation": "先序第一个 A 是根，中序 D B H E | A | F C G 确定左右子树。左子树 B-D-E-H（B 根，左 D，右 E 有左 H），右子树 C-F-G（C 根，左 F 右 G）。后序按左-右-根：D H E B F G C A，故选 A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_27",
          "kp": "kp6_01",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：满二叉树\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵包含 n 个结点的有根二叉树，结点依次以 1,2,...,n 编号，根结点编号为 1。对于结点 i，其左儿子的编号记为 li，右儿子编号记为 ri；如果左儿子不存在则 li=0，如果右儿子不存在则 ri=0。树中每个结点都对应一棵以其为根的子树。请你求出给定有根树的所有 n 棵子树中，有多少棵子树是满二叉树。满二叉树是指所有叶子深度均相同，且除叶子外均有两个儿子的二叉树。\n输入格式：第一行一个正整数 n，表示有根二叉树结点数量。接下来 n 行，每行两个非负整数 li, ri，表示结点 i 的左儿子编号和右儿子编号。\n输出格式：输出一行，一个整数，表示所有子树中满二叉树的数量。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：后序遍历求每棵子树的高度 h[u]，并判断是否为满二叉树：u 为空则视为满且高 0；u 是满二叉树当且仅当左右子树都是满二叉树且两者高度相等，即 chk[u] = chk[l] && chk[r] && h[l]==h[r]。满足条件则计数加 1。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <algorithm>\nusing namespace std;\nint n;\nint l[100010], r[100010];\nint h[100010], chk[100010] = {1};\nint ans;\nvoid dfs(int u) {\n    if (!u)\n        return;\n    dfs(l[u]);\n    dfs(r[u]);\n    h[u] = max(h[l[u]], h[r[u]]) + 1;\n    chk[u] = chk[l[u]] && chk[r[u]] && (h[l[u]] == h[r[u]]);\n    ans += chk[u];\n}\nint main() {\n    cin >> n;\n    for (int i = 1; i <= n; i++)\n        cin >> l[i] >> r[i];\n    ans = 0;\n    dfs(1);\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n2 3\n4 0\n0 0\n0 0\n",
              "expectedOutput": "2\n"
            },
            {
              "input": "3\n2 3\n0 0\n0 0\n",
              "expectedOutput": "3\n"
            }
          ]
        }
      ]
    },
    "kp6_02": {
      "title": "哈夫曼树",
      "questions": [
        {
          "id": "l6_202403_01",
          "kp": "kp6_02",
          "type": "choice",
          "difficulty": 1,
          "question": "在构建哈夫曼树时，每次应该选择（ ）合并。",
          "options": [
            "A. 最小权值的节点",
            "B. 最大权值的节点",
            "C. 随机节点",
            "D. 深度最深的节点"
          ],
          "answer": 0,
          "explanation": "哈夫曼树的构造基于贪心策略，每次从当前集合中选出权值最小的两个节点合并成一个新节点，使高频字符离根更近、编码更短，从而保证整棵树的带权路径长度最短，故答案选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_16",
          "kp": "kp6_02",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼树是一种二叉树。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼树又称最优二叉树，是每次合并两个最小权值结点构造出的一棵带权路径长度最短的二叉树，因此它确实是一种二叉树，并且是二叉树的一种特殊形态，说法正确。二叉树的属性决定了它具备左右孩子与层次结构。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_07",
          "kp": "kp6_02",
          "type": "choice",
          "difficulty": 1,
          "question": "已知字符集{A, B, C, D}的出现频率如下表所示：A=8, B=3, C=1, D=6。根据哈夫曼编码法，下面（ ）是正确的哈夫曼树。\n【四个树形选项见原卷】",
          "options": [
            "A. 树A：根下A与BCD，BCD下D与BC，BC下B与C",
            "B. 树B：根下A与BCD，BCD下B与CD，CD下C与D",
            "C. 树C：根下D与ABC，ABC下A与BC，BC下B与C",
            "D. 树D：根下C与ABC，ABC下B与AD，AD下A与D"
          ],
          "answer": 0,
          "explanation": "哈夫曼树每次合并频率最小的两个：先合并C(1)+B(3)=4，再合并4+D(6)=10，最后合并A(8)+10=18。树的结构为根(A,BCD)，BCD(D,BC)，BC(B,C)，即选项A所示，故选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_16",
          "kp": "kp6_02",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼树在构造过程中，每次合并权值最小的两个节点，最终生成的树带权路径长度最小。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼树正是通过每次合并权值最小的两个结点（贪心策略）构造的，其带权路径长度WPL最小，是给定权值集合下的最优二叉树。题干说法正确，故选“正确”。WPL最小是哈夫曼树区别于其他二叉树的关键。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_17",
          "kp": "kp6_02",
          "type": "judge",
          "difficulty": 1,
          "question": "给定一组字符及其出现的频率，构造出的哈夫曼树是唯一的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼树不唯一：当存在相同权值的节点或合并顺序不同时，树的形态会不同，对应的编码也会不同。唯一确定的是最优前缀码的性质，即带权路径长度 WPL 达到最小。题目说构造出的哈夫曼树唯一，说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_08",
          "kp": "kp6_02",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现了哈夫曼编码，则横线处应填写的代码是（   ）。\nfor (int k = 1; k < n; k++) {\nint x = PopMinNode(nodes, leafIdx, n, pA, internalIdx, pB);\nint y = PopMinNode(nodes, leafIdx, n, pA, internalIdx, pB);\nint z = (int)nodes.size();\n________________________\n}",
          "options": [
            "A. nodes.push_back(Node(nodes[x].w + nodes[y].w, x, y, -1)); internalIdx.push_back(z);",
            "B. nodes.push_back(Node(nodes[x].w + nodes[y].w, x, y, -1)); leafIdx.push_back(z);",
            "C. internalIdx.push_back(z); nodes.push_back(Node(nodes[x].w + nodes[y].w, x, y, x+y));",
            "D. nodes.push_back(Node(nodes[x].w + nodes[y].w, x, y, x+y)); leafIdx.push_back(z);"
          ],
          "answer": 0,
          "explanation": "合并两棵最小树 x、y 得到内部节点 z，其权值为两者之和，左右孩子为 x、y，sym 为 -1（内部节点），并把 z 加入内部节点队列 internalIdx，故选 A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_10",
          "kp": "kp6_02",
          "type": "choice",
          "difficulty": 1,
          "question": "对 n 个不同符号进行哈夫曼编码。若生成的哈夫曼树共有 115 个结点，则 n 的值是（  ）。",
          "options": [
            "A. 60",
            "B. 58",
            "C. 57",
            "D. 56"
          ],
          "answer": 1,
          "explanation": "由 n 个叶子节点（对应 n 个符号）构造哈夫曼树时，需要做 n-1 次合并，每次合并新增一个内部节点，因此总结点数为 n+(n-1)=2n-1。已知总结点数为 115，由 2n-1=115 解得 n=58，故选 B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_19",
          "kp": "kp6_02",
          "type": "judge",
          "difficulty": 1,
          "question": "若所有字符出现频率相同，则哈夫曼编码一定会得到完全二叉树。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "频率全部相同时每次合并的两棵子树权值相等，但只有叶子个数是 2 的幂时才会得到各层全满的完美二叉树；叶子个数不是 2 的幂时，最底层不满，并不保证是完全二叉树。说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_10",
          "kp": "kp6_02",
          "type": "choice",
          "difficulty": 1,
          "question": "对 n 个不同符号进行哈夫曼编码。若生成的哈夫曼树共有 63 个结点，则 n 的值是（  ）。",
          "options": [
            "A. 31",
            "B. 32",
            "C. 63",
            "D. 64"
          ],
          "answer": 1,
          "explanation": "由 n 个叶子节点（对应 n 个符号）构造哈夫曼树，需做 n-1 次合并，每次新增一个内部节点，总结点数为 n+(n-1)=2n-1。已知总节点数为 63，由 2n-1=63 解得 n=32，故选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_03": {
      "title": "完全二叉树",
      "questions": [
        {
          "id": "l6_202312_10",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关树的存储，错误的是（ ）。",
          "options": [
            "A. 完全二叉树可以用list存储",
            "B. 一般二叉树都可以用list存储，空子树位置可以用None表示",
            "C. 满二叉树可以用list存储",
            "D. 树数据结构，都可以用list存储"
          ],
          "answer": 3,
          "explanation": "完全二叉树和满二叉树按层序编号后下标连续，适合用数组/list存储；但一般二叉树结点下标可能不连续，直接用list会造成大量空位浪费；而“所有树都能用list存储”的说法过于绝对，D错误，故答案选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_10",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一个有124个叶子节点的完全二叉树，最多有（ ）个结点。",
          "options": [
            "A. 247",
            "B. 248",
            "C. 249",
            "D. 250"
          ],
          "answer": 1,
          "explanation": "按层序编号存储的完全二叉树中，叶子节点个数为ceil(n÷2)。若叶子数为124，则n÷2≤124，n最大取248（248个结点时有124个叶子，因为2号到248号中叶子为第125至248号共124个），故答案选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_19",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "完全二叉树的任意一层都可以不满。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "完全二叉树中，除最后一层外，其余各层的结点数都必须达到最大值（满的），只有最后一层允许不满且结点必须靠左连续排列。因此“完全二叉树的任意一层都可以不满”的说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_10",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵5层的满二叉树中节点数为（ ）。",
          "options": [
            "A. 31",
            "B. 32",
            "C. 33",
            "D. 16"
          ],
          "answer": 0,
          "explanation": "满二叉树每层结点数达到最大：第1层1个、第2层2个、第3层4个、第4层8个、第5层16个。总节点数为1+2+4+8+16=31，也等于2^5-1=31，故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_22",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "完全二叉树可以用数组存储数据。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "完全二叉树按层序编号后，结点下标从1到n连续无空位，可以很方便地用数组（顺序存储）存放，父结点与子结点的下标关系清晰，因此“完全二叉树可以用数组存储数据”说法正确。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_09",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "一棵有n个结点的完全二叉树用数组进行存储与表示，已知根结点存储在数组的第1个位置。若存储在数组第9个位置的结点存在兄弟结点和两个子结点，则它的兄弟结点和右子结点的位置分别是（ ）。",
          "options": [
            "A. 8, 18",
            "B. 10, 18",
            "C. 8, 19",
            "D. 10, 19"
          ],
          "answer": 2,
          "explanation": "完全二叉树顺序存储中，编号i的结点左孩子2i、右孩子2i+1，父结点i÷2，兄弟结点为i±1。结点9为奇数（右孩子），其兄弟为8；其右孩子为2×9+1=19。故选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_22",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "如果根结点的深度记为0，则一棵恰有n个叶结点的二叉树的深度最少是⌈log2 n⌉。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "深度为d的二叉树最多有2^d个叶结点，因此n个叶结点至少需要d=ceil(log2 n)层，即树的深度最少是ceil(log2 n)。题干说法正确，故选“正确”。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_19",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码构建的树一定是完全二叉树：\nTreeNode* root=new TreeNode{1}; root->left=new TreeNode{2}; root->right=new TreeNode{3}; root->left->left=new TreeNode{4}; root->left->right=new TreeNode{5}; root->right->left=new TreeNode{6};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该树有1、2、3、4、5、6共6个结点：前两层全满，第三层从左到右依次有4、5、6，符合完全二叉树“除最后一层外全满且最后一层靠左连续”的定义，因此它一定是完全二叉树，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_04",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于完全二叉树的代码描述，正确的是（ ）。\nbool isCompleteTree(TreeNode* root){ if(root==nullptr) return true; queue<TreeNode*> q; q.push(root); bool hasNull=false; while(!q.empty()){ TreeNode* node=q.front(); q.pop(); if(node==nullptr) hasNull=true; else { if(hasNull) return false; q.push(node->left); q.push(node->right); } } return true; }",
          "options": [
            "A. 该代码用于判断一棵树是否为满二叉树",
            "B. 该代码用于判断一棵树是否为完全二叉树",
            "C. 该代码用于判断一棵树是否为二叉搜索树",
            "D. 该代码用于计算树的高度"
          ],
          "answer": 1,
          "explanation": "该代码采用层序遍历：一旦出现过空结点（hasNull置true），之后若再遇到非空结点就返回false，这正是完全二叉树“最后一层必须靠左连续”的判断逻辑，因此用于判断完全二叉树，选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_24",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码创建的树是一棵完全二叉树：\nTreeNode* root=new TreeNode{1}; root->left=new TreeNode{2}; root->right=new TreeNode{3}; root->left->left=new TreeNode{4};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该树有1、2、3、4共4个结点：前两层全满，第三层从左到右只有最左边的4，符合完全二叉树“最后一层靠左连续”的定义。因此这棵树是一棵完全二叉树，说法正确。最后一层靠左连续是完全二叉树的判别标准。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_06",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "（   ）只有最底层的节点未被填满，且最底层节点尽量靠左填充。",
          "options": [
            "A. 完美二叉树",
            "B. 完全二叉树",
            "C. 完满二叉树",
            "D. 平衡二叉树"
          ],
          "answer": 1,
          "explanation": "完全二叉树的定义：除最底层外其余各层都充满节点，且最底层节点从左到右依次填充。完美二叉树每一层都满，完满二叉树每个节点要么是叶子要么有两个孩子，平衡二叉树强调左右子树高度差不超过 1，三者均与题意描述不符，故选 B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_07",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "在使用数组表示完全二叉树时，如果一个节点的索引为 i（从 0 开始计数），那么其左子节点的索引通常是（   ）。",
          "options": [
            "A. (i - 1) / 2",
            "B. 2 * i + 1",
            "C. 2 * i + 2",
            "D. 2 * i"
          ],
          "answer": 1,
          "explanation": "从 0 开始编号的完全二叉树数组中，节点 i 的左孩子下标为 2i+1，右孩子下标为 2i+2，父节点为 (i-1)÷2。官方答案给出 2i，那是对从 1 开始编号的约定；题目明确说明从 0 开始，故正确答案为 2i+1。 题干明确从0开始计数，故左孩子为2i+1，选B（官方答案2i是按从1编号的约定）。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_23",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "下列代码中的 tree 向量，表示的是一棵完全二叉树（-1 代表空节点）按照层序遍历的结果。\nstd::vector<int> tree = {1, 2, 3, 4, -1, 6, 7};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "该层序序列中节点 2 的右孩子（下标 4）为空，但节点 3 的两个孩子 6、7 又存在，中间出现空洞，不符合完全二叉树最底层从左到右连续填充的要求，因此不是完全二叉树。说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_06",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数 createTree() 构造的树是什么类型？\nstruct TreeNode {\nint val;\nTreeNode* left;\nTreeNode* right;\nTreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n};\nTreeNode* createTree() {\nTreeNode* root = new TreeNode(1);\nroot->left = new TreeNode(2);\nroot->right = new TreeNode(3);\nroot->left->left = new TreeNode(4);\nroot->left->right = new TreeNode(5);\nreturn root;\n}",
          "options": [
            "A. 满二叉树",
            "B. 完全二叉树",
            "C. 二叉排序树",
            "D. 其他都不对"
          ],
          "answer": 1,
          "explanation": "该树第一层只有根 1，第二层有节点 2、3 已满，第三层只有节点 4、5 且都在节点 2 下靠左排列，符合完全二叉树最底层从左到右连续填充的定义。它不是满二叉树（第三层未满），也没有左右子树的大小关系，不是二叉排序树，故选 B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_08",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "完全二叉树可以用数组连续高效存储，如果节点从 1 开始编号，则对有两个孩子节点的节点 i，（   ）。",
          "options": [
            "A. 左孩子位于 2i，右孩子位于 2i+1",
            "B. 完全二叉树的叶子节点可以出现在最后一层的任意位置",
            "C. 所有节点都有两个孩子",
            "D. 左孩子位于 2i+1，右孩子位于 2i+2"
          ],
          "answer": 0,
          "explanation": "从 1 开始编号的完全二叉树数组存储中，节点 i 的左孩子下标为 2i，右孩子下标为 2i+1。B 错在完全二叉树的叶子只能位于最底层且靠左，不能出现在任意位置；C 说所有节点都有两个孩子明显错误；D 的下标公式对应从 0 开始编号的约定，故选 A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_18",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "一个含有 100 个节点的完全二叉树，高度为 8。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "含有 n 个节点的完全二叉树，其高度为 floor(log2 n)+1。对于 n=100，log2 100 约为 6.64，取下整为 6，再加 1 得高度 7，而不是题目所说的 8，因此说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_06",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数 check() 用于判断一棵二叉树是否为（   ）。\nbool check(TreeNode* root) {\nif (!root) return true;\nqueue<TreeNode*> q;\nq.push(root);\nbool hasNull = false;\nwhile (!q.empty()) {\nTreeNode* cur = q.front(); q.pop();\nif (!cur) hasNull = true;\nelse {\nif (hasNull) return false;\nq.push(cur->left);\nq.push(cur->right);\n}\n}\nreturn true;\n}",
          "options": [
            "A. 满二叉树",
            "B. 完全二叉树",
            "C. 二叉搜索树",
            "D. 平衡二叉树"
          ],
          "answer": 1,
          "explanation": "该函数用队列做层序遍历，用 hasNull 标记是否已出现过空节点：一旦在非空节点之前已经出现空节点，就说明层序中有空洞，返回 false；直到遍历结束都保持连续则返回 true。这正是判断完全二叉树（最底层从左到右连续）的方法，故选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_25",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "假定只有一个根节点的树的深度为 1，则一棵有 n 个节点的完全二叉树的深度为 floor(log2 n) + 1。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "完全二叉树的高度由节点数决定，深度（根深度为 1）为 floor(log2 n)+1。验证：n=1 时深度为 1，n=2 或 3 时深度为 2，n=4 到 7 时深度为 3，公式成立，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_21",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中使用一维数组 vector<int> tree 存储按层序遍历的完全二叉树时，若根节点存储在 tree[0]，则对于任意非空节点 tree[i]，其右孩子（如果存在）必然位于 tree[2 * i + 2]。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用数组从 0 开始编号存储完全二叉树时，节点 i 的左孩子下标为 2i+1，右孩子下标为 2i+2，父节点下标为 (i-1)÷2。例如 i=0 的左孩子为 1、右孩子为 2，与层序存储一致，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_27",
          "kp": "kp6_03",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：完全二叉树\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵包含 n 个结点的有根二叉树，结点依次以 1,2,...,n 编号，根结点编号为 1。对于结点 i，其左儿子的编号记为 li，右儿子编号记为 ri；如果左儿子不存在则 li=0，如果右儿子不存在则 ri=0。树中每个结点都对应一棵以其为根的子树。请你求出给定有根树的所有 n 棵子树中，有多少棵子树是完全二叉树。\n输入格式：第一行一个正整数 n，表示有根二叉树结点数量。接下来 n 行，每行两个正整数 li, ri，表示结点 i 的左儿子编号和右儿子编号。\n输出格式：输出一行，一个整数，表示所有子树中完全二叉树的数量。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：后序遍历判断每棵子树是否完全。记录每个节点子树的最小高度 mn 和最大高度 mx：完全二叉树中左子树比右子树高 0 或 1（或右比左高 0/1 按实现），且左右子树都必须是完全二叉树。用 mn[l]>=mx[r] 和 mn[u]>=mx[u]-1 等条件判定，满足则计数。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nint l[N], r[N];\nint mn[N], mx[N], chk[N];\nint ans;\nvoid dfs(int u) {\n    chk[u] = 1;\n    if (!u)\n        return;\n    dfs(l[u]);\n    dfs(r[u]);\n    chk[u] &= chk[l[u]] & chk[r[u]];\n    mn[u] = 1 + min(mn[l[u]], mn[r[u]]);\n    mx[u] = 1 + max(mx[l[u]], mx[r[u]]);\n    chk[u] &= mn[l[u]] >= mx[r[u]];\n    chk[u] &= mn[u] >= mx[u] - 1;\n    ans += chk[u];\n}\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++)\n        scanf(\"%d%d\", &l[i], &r[i]);\n    dfs(1);\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n2 3\n4 0\n0 0\n0 0\n",
              "expectedOutput": "4\n"
            },
            {
              "input": "4\n2 3\n0 0\n4 0\n0 0\n",
              "expectedOutput": "3\n"
            }
          ]
        },
        {
          "id": "l6_202606_06",
          "kp": "kp6_03",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数 check() 用于判断一棵二叉树是否为（  ）。\nbool check(TreeNode* root) {\nif (!root) return true;\nqueue<TreeNode*> q;\nq.push(root);\nbool hasNull = false;\nwhile (!q.empty()) {\nTreeNode* cur = q.front(); q.pop();\nif (cur == nullptr) hasNull = true;\nelse {\nif (hasNull) return false;\nq.push(cur->left);\nq.push(cur->right);\n}\n}\nreturn true;\n}",
          "options": [
            "A. 满二叉树",
            "B. 完全二叉树",
            "C. 二叉搜索树",
            "D. 平衡二叉树"
          ],
          "answer": 1,
          "explanation": "该函数用队列做层序遍历，hasNull 记录是否已遇到空节点。一旦在某个非空节点之前已经出现过空节点，说明层序序列中间有空洞，返回 false；若全程无空洞则返回 true。这正是判断完全二叉树（最底层从左到右连续）的方法，故选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_22",
          "kp": "kp6_03",
          "type": "judge",
          "difficulty": 1,
          "question": "若用数组按层序存储完全二叉树，且根节点下标为 0，则下标为 i 的节点左孩子下标为 2*i+1，右孩子下标为 2*i+2。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用数组从 0 开始编号按层序存储完全二叉树时，节点 i 的左孩子下标为 2i+1，右孩子下标为 2i+2，父节点下标为 (i-1)÷2。例如根节点下标 0，其左孩子为 1、右孩子为 2，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_04": {
      "title": "二叉排序树",
      "questions": [
        {
          "id": "l6_202309_25",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉搜索树的左右子树也是二叉搜索树。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "根据二叉搜索树的定义，其左子树所有结点值小于根、右子树所有结点值大于根，并且左右子树自身也必须满足同样的性质，即左右子树也都是二叉搜索树。说法正确，故选“正确”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_23",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉搜索树可以是空树（没有任何节点）或者单节点树（只有一个节点），或者多节点。如果是多节点，则左节点的值小于父节点的值，右节点的值大于父节点的值，由此推理，右节点树的值都大于根节点的值，左节点树的值都小于根节点的值。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉搜索树允许为空或只有单节点；多节点时左孩子值小于父节点、右孩子值大于父节点，由递归性质可推出右子树所有值都大于根、左子树所有值都小于根，说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_05",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码希望能在一棵二叉排序树中搜索特定的值，请在横线处填入（ ），使其能正确实现相应功能。\nTreeNode* search(TreeNode* root, int target) { if(root==NULL||root->val==target) return root; if(_______) return search(root->left,target); else return search(root->right,target); }",
          "options": [
            "A. target < root->left",
            "B. target < root->val",
            "C. target > root->val",
            "D. target > root->left"
          ],
          "answer": 1,
          "explanation": "在二叉排序树中，左子树所有值小于根、右子树所有值大于根。搜索时若target小于当前根的值，则应到左子树继续查找，即填入target < root->val，选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_12",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "二叉搜索树中的每个结点，其左子树的所有结点值都小于该结点值，右子树的所有结点值都大于该结点值。以下代码对给定的整数数组（假设数组中没有数值相等的元素），构造一个对应的二叉搜索树，横线上应填写（ ）。\ntree_node* insert(tree_node* root, int val){ if(root==nullptr) return new tree_node(val); ______ return root; }",
          "options": [
            "A. if(val<root->val) root->left=insert(root->left,val); else root->right=insert(root->right,val);",
            "B. if(val>root->val) root->left=insert(root->left,val); else root->right=insert(root->right,val);",
            "C. if(val<root->val) root->left=insert(root,val); else root->right=insert(root,val);",
            "D. if(val>root->val) root->left=insert(root,val); else root->right=insert(root,val);"
          ],
          "answer": 0,
          "explanation": "插入BST时，若val小于当前根值，应插入到左子树（递归调用insert(root->left,val)并更新root->left），否则插入右子树。只有A的方向与递归位置都正确，选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_13",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "对上题中的二叉搜索树，当输入数组为【数组见原卷图】时，构建二叉搜索树，并采用如下代码实现的遍历方式，得到的输出是（ ）。\nvoid traversal(tree_node* root){ if(root==nullptr) return; traversal(root->left); cout<<root->val<<\" \"; traversal(root->right); } 【输出选项见原卷】",
          "options": [
            "A. 【选项见原卷】",
            "B. 【选项见原卷】",
            "C. 【选项见原卷】",
            "D. 【选项见原卷】"
          ],
          "answer": 1,
          "explanation": "该traversal()先遍历左子树、再访问根、最后遍历右子树，是中序遍历。对二叉搜索树做中序遍历得到的结果必是按从小到大排序的序列，因此输出即输入数组的升序排列，答案选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_20",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在二叉排序树中，左子树所有节点的值都大于根节点的值，右子树所有节点的值都小于根节点的值。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "二叉排序树（二叉搜索树）的定义是：左子树所有节点的值都小于根节点的值，右子树所有节点的值都大于根节点的值。题干把大小关系完全说反了，因此说法错误，故选“错误”。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_05",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了二叉排序树的哪种操作？\nTreeNode* op(TreeNode* root,int val){ if(root==nullptr) return new TreeNode(val); if(val<root->val) root->left=op(root->left,val); else root->right=op(root->right,val); return root; }",
          "options": [
            "A. 查找",
            "B. 插入",
            "C. 删除",
            "D. 遍历"
          ],
          "answer": 1,
          "explanation": "该代码在空位置创建新节点，然后按二叉排序树的性质递归：值小于根则插入左子树，值大于根则插入右子树，最终把新节点挂到正确位置。这实现的是二叉排序树的插入操作，故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_21",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉排序树（BST）中，若某节点的左子树为空，则该节点一定是树中的最小值节点。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "BST中的最小结点是最左边的结点（不断向左走到头）。某结点左子树为空只能说明它没有更小的后代，但其祖先（更靠近根的较小值）仍可能比它小，因此它不一定是全树最小值，说法错误。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_13",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现一个二叉排序树的插入函数（没有相同的数值），横线处应填入（   ）。\nvoid insert(TreeNode*& root, int key) {\nif (!root) {\nroot = new TreeNode(key);\nreturn;\n}\n_______________________________\n}",
          "options": [
            "A. if (key < root->val) insert(root->left, key); else if (key > root->val) insert(root->right, key);",
            "B. if (key < root->val) insert(root->right, key); else if (key > root->val) insert(root->left, key);",
            "C. insert(root->left, key); insert(root->right, key);",
            "D. insert(root->right, key); insert(root->left, key);"
          ],
          "answer": 0,
          "explanation": "二叉排序树满足左子树所有值小于根、右子树所有值大于根，插入时 key 小于根值应插到左子树，大于根值应插到右子树。B 把左右插反，C、D 无条件同时向两边插入会破坏有序性质，只有 A 符合规则，故选 A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_19",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "对一棵二叉排序树进行中序遍历，可以得到一个递增的有序序列。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉排序树满足左子树所有节点值均小于根节点、右子树所有节点值均大于根节点。中序遍历按左-根-右的顺序访问节点，恰好按值从小到大输出，因此得到递增有序序列，说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_20",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "如果二叉搜索树在连续的插入和删除操作后，所有节点都偏向一侧，导致其退化为类似于链表的结构，这时其查找、插入、删除操作的时间复杂度会从理想情况下的 O(log n) 退化到 O(n)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "当 BST 退化成斜树（链状）时，树高变成 n，查找、插入、删除都要沿链走到底，复杂度从 O(log n) 退化到 O(n)。该描述是正确的；官方答案标为错误，与实际不符。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_14",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "删除二叉排序树中的节点时，如果节点有两个孩子，则横线处应填入（   ），其中 findMax 和 findMin 分别为寻找树的最大值和最小值的函数。\nTreeNode* deleteNode(TreeNode* root, int key) {\nif (!root) return nullptr;\nif (key < root->val) {\nroot->left = deleteNode(root->left, key);\n}\nelse if (key > root->val) {\nroot->right = deleteNode(root->right, key);\n}\nelse {\nif (!root->left) return root->right;\nif (!root->right) return root->left;\nTreeNode* temp = ____________;\nroot->val = temp->val;\nroot->right = deleteNode(root->right, temp->val);\n}\nreturn root;\n}",
          "options": [
            "A. root->left",
            "B. root->right",
            "C. findMin(root->right)",
            "D. findMax(root->left)"
          ],
          "answer": 2,
          "explanation": "删除有两个孩子的节点，常用中序后继（右子树的最小值）替换，随后递归删除该后继。代码后续递归删除 root->right 中的 temp->val，所以 temp 应为 findMin(root->right)。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_10",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "以下函数实现了二叉排序树（BST）的（   ）操作。\nTreeNode* op(TreeNode* root, int x) {\nif (!root) return new TreeNode(x);\nif (x < root->val)\nroot->left = op(root->left, x);\nelse\nroot->right = op(root->right, x);\nreturn root;\n}",
          "options": [
            "A. 查找",
            "B. 插入",
            "C. 删除",
            "D. 遍历"
          ],
          "answer": 1,
          "explanation": "该函数从根开始，若 x 小于根值则递归到左子树，否则递归到右子树，直到遇到空节点就创建新节点并返回，同时把递归结果赋回相应子树指针。这是标准的 BST 插入操作，不会破坏二叉排序树性质，故选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_21",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "在二叉排序树（BST）中，若某结点的左子树为空，则该结点一定是整棵树中的最小值结点。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "某节点左子树为空，只说明它是它所在子树中按中序遍历最小的节点，但这个节点本身可能位于整棵树的右子树部分，此时整棵 BST 还有更小的值存在于左侧祖先或更左的节点处。因此该节点不一定是整棵树的最小值，说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_22",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下面的函数能正确判断一棵树是不是二叉排序树（左边的数字要比当前数字小，右边的数字要比当前数字大）。\nbool isBST(TreeNode* root, int minVal, int maxVal) {\nif (!root) return true;\nif (root->val <= minVal || root->val >= maxVal) return false;\nreturn isBST(root->left, minVal, root->val) &&\nisBST(root->right, root->val, maxVal);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数用 (minVal, maxVal) 上下界约束每个节点：左子树值域为 (minVal, val)，右子树为 (val, maxVal)，能正确判断 BST。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_06",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "在二叉搜索树（BST）中，若中序遍历的序列为 {1, 2, 3, 4, 5}，且先序遍历的第一个序列元素为 3，则下列说法正确的是（ ）。",
          "options": [
            "A. 该树一定是一棵完全二叉树。",
            "B. 元素 4 和 5 不可能是兄弟节点。",
            "C. 元素 1 所在节点的深度可能大于 3（根节点深度为 1）。",
            "D. 元素 2 一定是元素 1 的父节点。"
          ],
          "answer": 1,
          "explanation": "先序第一个是根，根为 3，左子树含 {1,2}，右子树含 {4,5}。右子树只有两个节点，无论谁做根，另一个都是它的孩子，因此 4 和 5 只能是父子关系，不可能是兄弟。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_13",
          "kp": "kp6_04",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现二叉搜索树的插入操作。假设树中不存在重复值，横线处应填写（  ）。\nTreeNode* insertNode(TreeNode* root, int x) {\nif (root == nullptr) {\nreturn new TreeNode(x);\n}\nif (x < root->val) {\n__________________________\n} else {\nroot->right = insertNode(root->right, x);\n}\nreturn root;\n}",
          "options": [
            "A. root->left = insertNode(root->left, x);",
            "B. root = insertNode(root->left, x);",
            "C. root->right = insertNode(root->left, x);",
            "D. insertNode(root->left, x);"
          ],
          "answer": 0,
          "explanation": "x 小于根值时插到左子树，递归结果要赋回 root->left，即 root->left = insertNode(root->left, x)，否则递归结果丢失。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_20",
          "kp": "kp6_04",
          "type": "judge",
          "difficulty": 1,
          "question": "下列函数试图将整数 x 插入到一棵二叉搜索树中。假设二叉搜索树满足：对于任意结点，左子树中所有结点的值均小于该结点，右子树中所有结点的值均大于或等于该结点。判断该函数是否能够在插入后保持二叉搜索树性质。\nTreeNode* insertNode(TreeNode* root, int x) {\nif (root == nullptr) return new TreeNode(x);\nif (x < root->val) {\nroot->right = insertNode(root->right, x);\n} else {\nroot->left = insertNode(root->left, x);\n}\nreturn root;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "x < root->val 时应插入左子树，代码却插到 root->right；否则插到 root->left，左右方向完全反了，插入后破坏 BST 性质，不能保持二叉搜索树。说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_05": {
      "title": "哈夫曼编码",
      "questions": [
        {
          "id": "l6_202309_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "某内容仅会出现ABCDEFG，其对应的出现概率为0.40、0.30、0.15、0.05、0.04、0.03、0.03，如下图所示。按照哈夫曼编码规则，假设B的编码为11，则D的编码为（ ）。\n【图为哈夫曼树，见原卷】",
          "options": [
            "A. 10010",
            "B. 10011",
            "C. 10111",
            "D. 10001"
          ],
          "answer": 1,
          "explanation": "按频率由低到高合并：FG(0.03+0.03=0.06)、DE(0.04+0.05=0.09)、(FG+DE)=0.15、C+0.15=0.30、B+0.30=0.60、A+0.60=1。左0右1，B=11，则D的路径为1-0-0-1-1，即10011，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_22",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码是一种有损压缩算法。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码通过给高频字符分配短编码、低频字符分配长编码来压缩数据，解码时按前缀规则可以无损还原原文，属于无损压缩算法。题干把它说成有损压缩，说法错误，故选“错误”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_07",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "对hello world使用霍夫曼编码（Huffman Coding），最少bit（比特）为（ ）。",
          "options": [
            "A. 4",
            "B. 32",
            "C. 64",
            "D. 88"
          ],
          "answer": 1,
          "explanation": "对“hello world”统计字符频率：l出现3次，o出现2次，h、e、空格、w、r、d各1次。按频率构造哈夫曼树，所有内部结点权值之和即为最少比特数：2+2+2+4+4+7+11=32，因此最少需要32 bit，选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_20",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码（Huffman Coding）具有唯一性，因此有确定的压缩率。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码得到的编码（在给定频率下）不唯一，压缩率还取决于输入数据本身的频率分布，不同输入即使采用相同算法压缩率也可能不同。因此“有确定的压缩率”说法错误，故选“错误”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_22",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码的主要应用领域是有损数据压缩。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码对每个字符用不同长度的二进制码表示，解码时能无损还原原始数据，属于无损压缩算法，其应用领域是无损压缩而不是有损压缩，题干说法错误。有损压缩是音频、图像等多媒体领域的压缩方式。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_25",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "使用哈夫曼编码对一些字符进行编码，如果两个字符的频率差异最大，则它们的编码可能出现相同的前缀。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码是前缀编码，任意一个字符的编码都不可能是另一个字符编码的前缀，否则无法唯一解码。因此无论两个字符的频率差异多大，它们的编码都不可能出现相同前缀，题干说法错误。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_08",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "对“classmycls”使用哈夫曼（Huffman）编码，最少需要（ ）比特。",
          "options": [
            "A. 10",
            "B. 20",
            "C. 25",
            "D. 30"
          ],
          "answer": 2,
          "explanation": "统计字符：s出现3次，c、l各2次，a、m、y各1次。构造哈夫曼树，总比特数等于所有内部结点权值之和：先合1+1=2、1+2=3、2+2=4、3+3=6、4+6=10，内部权值和2+3+4+6+10=25，故最少25 bit，选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_16",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码本质上是一种贪心策略。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼编码在构造过程中每次选择频率最低的两个节点合并，属于典型的贪心策略，通过不断做局部最优的合并选择，最终得到整体带权路径长度最短的编码，说法正确。贪心策略在此能保证全局最优是哈夫曼编码的特点。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_06",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "假设字母表{a,b,c,d,e}在字符串出现的频率分别为10%，15%，30%，16%，29%。若使用哈夫曼编码方式对字母进行二进制编码，则字符a,b,c,d,e分别对应的一组哈夫曼编码的长度分别为（ ）。",
          "options": [
            "A. 4, 4, 1, 3, 2",
            "B. 3, 3, 2, 2, 2",
            "C. 3, 3, 1, 2, 1",
            "D. 4, 4, 1, 2, 2"
          ],
          "answer": 1,
          "explanation": "按频率升序合并：a(10)+b(15)=25，再与d(16)合并得41，c(30)+e(29)=59，最后41+59=100。编码深度：a、b在深度3，c、d、e在深度2，因此长度依次为3,3,2,2,2，选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_21",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码本质上是一种贪心策略。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼编码构造过程中每次选择频率最低的两个结点合并，是典型贪心策略，通过局部最优的合并操作最终得到整体带权路径长度最小的编码，题干说法正确。该贪心策略能保证得到最优二叉树。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_08",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题中各字符的哈夫曼编码是（ ）。",
          "options": [
            "A. A: 0, B: 10, C: 110, D: 111",
            "B. A: 0, B: 10, C: 11, D: 10",
            "C. A: 0, B: 101, C: 100, D: 11",
            "D. A: 11, B: 10, C: 01, D: 00"
          ],
          "answer": 2,
          "explanation": "由哈夫曼树得编码：A频率最高取最短码0，D频率次之取11，B与C频率最低取101、100（顺序可互换）。四个选项中只有C符合“频率越高编码越短”且为合法前缀码，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_02",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "哈夫曼编码是一种数据压缩算法。以下关于哈夫曼编码的描述中，不正确的是（ ）。",
          "options": [
            "A. 哈夫曼编码是一种变长编码，频率高的字符使用较短的编码，频率低的字符使用较长的编码。",
            "B. 在构造哈夫曼树时，频率越低的字符离根节点越近，频率越高的字符离根节点越远。",
            "C. 哈夫曼编码的生成过程基于贪心算法，每次选择频率最低的两个节点进行合并。",
            "D. 哈夫曼编码是一种前缀编码，任何一个字符的编码都不会是另一个字符编码的前缀，因此可以实现唯一解码。"
          ],
          "answer": 1,
          "explanation": "哈夫曼树中频率越低的字符越远离根节点（编码更长），频率越高的字符越靠近根节点（编码更短），B把远近关系说反了，不正确。A、C、D分别对应变长编码、贪心合并和前缀码性质，都正确，选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_06",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "给定字符集{A, B, C, D}的出现频率分别为{5, 1, 6, 2}，则正确的哈夫曼编码是（ ）。",
          "options": [
            "A. A: 0, B: 100, C: 11, D: 101",
            "B. A: 11, B: 100, C: 0, D: 101",
            "C. A: 0, B: 101, C: 11, D: 100",
            "D. A: 10, B: 101, C: 0, D: 100"
          ],
          "answer": 1,
          "explanation": "先合并B(1)+D(2)=3，再合并3+A(5)=8，最后C(6)+8=14。左0右1得编码：C=0（最高频），A=11，B=100，D=101，正是选项B，故选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "设有字符集 {a, b, c, d, e}，其出现频率分别为 {5, 8, 12, 15, 20}，得到的哈夫曼编码为（   ）。",
          "options": [
            "A. a: 010 b: 011 c: 00 d: 10 e: 11",
            "B. a: 00 b: 10 c: 011 d: 100 e: 111",
            "C. a: 10 b: 01 c: 011 d: 100 e: 111",
            "D. a: 100 b: 01 c: 011 d: 100 e: 00"
          ],
          "answer": 0,
          "explanation": "哈夫曼树：5 与 8 合并成 13，12 与 13 合并成 25，15 与 20 合并成 35，25 与 35 合成根 60。左 0 右 1 得：12→00，13→01，15→10，20→11，5→010，8→011，故 a:010、b:011、c:00、d:10、e:11 与选项 A 一致。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "设有字符集 {a, b, c, d, e, f}，其出现频率分别为 {5, 9, 12, 13, 16, 45}。哈夫曼算法构造最优前缀编码，以下哪一组可能是对应的哈夫曼编码？",
          "options": [
            "A. a: 00；b: 01；c: 10；d: 110；e: 111；f: 0",
            "B. a: 1100；b: 1101；c: 100；d: 101；e: 111；f: 0",
            "C. a: 000；b: 001；c: 01；d: 10；e: 110；f: 111",
            "D. a: 10；b: 01；c: 100；d: 101；e: 111；f: 0"
          ],
          "answer": 1,
          "explanation": "合并过程：5+9=14，12+13=25，14+16=30，25+30=55，45+55=100。左 0 右 1 得 f→0，12→100，13→101，16→111，5→1100，9→1101，即选项 B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_17",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码是最优前缀码，且编码结果唯一。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码是最优前缀码，带权路径长度最小，但编码结果不唯一：当存在相同频率的字符，或合并时左右子树交换，都会得到不同的编码方案。题目说编码结果唯一是错误的，后半句不成立，故整个说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于哈夫曼编码的说法，正确的是（  ）。",
          "options": [
            "A. 哈夫曼编码是定长编码",
            "B. 哈夫曼编码中，没有任何一个字符的编码是另一个字符编码的前缀",
            "C. 哈夫曼编码一定唯一",
            "D. 哈夫曼编码不能用于数据压缩"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码是基于哈夫曼树的前缀码：任何一个字符的编码都不是另一个字符编码的前缀，因此解码时无需分隔符即可无歧义还原。它是变长编码而非定长编码，编码方案不唯一，常用于数据压缩，故选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "有 6 个字符，它们出现的次数分别为：{2, 3, 3, 4, 6, 8}，现在用哈夫曼编码为这些字符编码，最小加权路径长度 WPL（每个字符的出现次数 × 它的编码长度，再求和）的值为（   ）。",
          "options": [
            "A. 58",
            "B. 60",
            "C. 62",
            "D. 64"
          ],
          "answer": 3,
          "explanation": "哈夫曼树的带权路径长度 WPL 等于所有内部节点权值之和。合并过程：2+3=5，3+4=7，5+6=11，7+8=15，11+15=26，内部节点权值和为 5+7+11+15+26=64，即 WPL 为 64，故选 D。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_20",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码是一种变长的前缀编码，在解码时不需要额外的分隔符就能唯一还原，这是因为在哈夫曼树中，任何一个字符的叶子结点都不会成为另一个字符结点的祖先。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "哈夫曼编码树中，每个字符对应一个叶子节点，叶子节点之间不存在祖先关系，因此任一字符的编码都不会是另一个字符编码的前缀，这是前缀码性质。解码时从根沿编码路径走到叶子即可，无需分隔符就能无歧义唯一还原，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_09",
          "kp": "kp6_05",
          "type": "choice",
          "difficulty": 1,
          "question": "有 6 个字符，它们出现的次数分别为：{3, 4, 7, 8, 12, 15}，现在用哈夫曼编码为这些字符编码，最小加权路径长度 WPL 的值为（  ）。",
          "options": [
            "A. 113",
            "B. 119",
            "C. 126",
            "D. 31"
          ],
          "answer": 1,
          "explanation": "哈夫曼树的带权路径长度 WPL 等于所有内部节点权值之和。合并过程：3+4=7，7+7=14，8+12=20，14+15=29，20+29=49，内部节点权值和为 7+14+20+29+49=119，即 WPL 为 119，故选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_21",
          "kp": "kp6_05",
          "type": "judge",
          "difficulty": 1,
          "question": "哈夫曼编码一定唯一，只要字符频率相同，得到的编码也一定完全相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "哈夫曼编码并不唯一：即使字符频率完全相同，合并时选择哪两棵子树、左右子树如何摆放，都可能得到不同的编码方案；唯一不变的是所有方案都满足最优前缀码性质，即带权路径长度最小，题目说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_06": {
      "title": "格雷编码",
      "questions": [
        {
          "id": "l6_202309_10",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关格雷码的说法，错误的是（ ）。",
          "options": [
            "A. 在格雷码中，任意两个相邻的代码只有一位二进制数不同。",
            "B. 格雷码是一种唯一性编码。",
            "C. 在格雷码中，最大数和最小数只有一位二进制数不同。",
            "D. 格雷码是一种可靠性编码。"
          ],
          "answer": 1,
          "explanation": "格雷码的定义是任意两个相邻编码只有一位不同，且首尾（最大数与最小数）也只有一位不同，属于可靠性编码。但同一个数值序列可以构造出多种不同的格雷码，因此它不是唯一性编码，B说法错误，选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_06",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "3位格雷编码的正确顺序是（ ）。",
          "options": [
            "A. 000, 001, 010, 011, 100, 101, 110, 111",
            "B. 000, 001, 011, 010, 110, 111, 101, 100",
            "C. 000, 010, 001, 011, 100, 110, 101, 111",
            "D. 000, 010, 110, 100, 111, 101, 011, 001"
          ],
          "answer": 1,
          "explanation": "格雷码要求相邻编码只有一位不同。B选项即标准反射式格雷码：00→01→11→10→110→111→101→100，逐项验证相邻都只差一位，且首尾（000与100）也只差一位，故答案选B。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_20",
          "kp": "kp6_06",
          "type": "judge",
          "difficulty": 1,
          "question": "000, 001, 011, 010, 110, 111, 101, 100是一组格雷码。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "格雷码的规则是相邻两个编码之间只有一位二进制数不同。序列000,001,011,010,110,111,101,100逐项检查相邻都只差一位，且首尾000与100也只差一位，完全符合格雷码定义，说法正确，故选“正确”。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_07",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码实现n位的格雷码，则横线上应填写（ ）。\nvector<string> generate_graycode(int n){ vector<string> graycode_list; graycode_list.push_back(\"0\"); graycode_list.push_back(\"1\"); for(int i=2;i<=n;i++){ int current_size=graycode_list.size(); for(int j=current_size-1;j>=0;j--){ graycode_list.push_back(\"1\"+graycode_list[j]); } for(int j=0;j<current_size;j++){ ______ } } return graycode_list; }",
          "options": [
            "A. graycode_list.push_back(\"0\" + graycode_list[j]);",
            "B. graycode_list[j] = \"0\" + graycode_list[j];",
            "C. graycode_list.push_back(\"1\" + graycode_list[j]);",
            "D. graycode_list[j] = \"1\" + graycode_list[j];"
          ],
          "answer": 1,
          "explanation": "反射式格雷码生成时，把原列表倒序加上前缀“1”追加到末尾，再把原列表每一项前面加前缀“0”。因此第二段循环应把原下标j的元素原地改为\"0\"+原串，即graycode_list[j]=\"0\"+graycode_list[j]，选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_09",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "（ ）是3位格雷编码。",
          "options": [
            "A. 000 001 011 010 110 111 101 100",
            "B. 000 001 010 011 100 101 110 111",
            "C. 000 001 100 101 011 010 111 110",
            "D. 000 010 001 011 100 110 101 111"
          ],
          "answer": 0,
          "explanation": "格雷码要求相邻编码（含首尾）只有一位不同。A项即标准反射式3位格雷码：000→001→011→010→110→111→101→100，逐项验证都只差一位，故答案选A。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_12",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码用于生成n位格雷编码。横线上应填写（ ）。\nvector<string> generateGrayCode(int n){ if(n==0) return {\"0\"}; if(n==1) return {\"0\",\"1\"}; vector<string> prev=generateGrayCode(n-1); vector<string> result; for(string s:prev) result.push_back(\"0\"+s); for(int i=prev.size()-1;i>=0;i--){ ______ } return result; }",
          "options": [
            "A. result.push_back(\"1\" + prev[i]);",
            "B. result.push_back(\"0\" + prev[i]);",
            "C. result.push_back(prev[i] + \"1\");",
            "D. result.push_back(prev[i] + \"0\");"
          ],
          "answer": 0,
          "explanation": "反射式格雷码：前半部分为0前缀的prev，后半部分把prev倒序并加1前缀，保证相邻编码只有一位不同。因此应填入result.push_back(\"1\"+prev[i])，选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_17",
          "kp": "kp6_06",
          "type": "judge",
          "difficulty": 1,
          "question": "格雷编码的相邻两个编码之间必须有多位不同，以避免数据传输错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "格雷码的定义是相邻两个编码之间只有一位二进制数不同，这样在传输或读入时即使发生一位变化也易于检错，从而降低出错概率。题干说“必须有多位不同”正好与定义相反，说法错误，故选“错误”。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_10",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "3 位格雷编码中，编码 101 之后的下一个编码不可能是（   ）。",
          "options": [
            "A. 100",
            "B. 111",
            "C. 110",
            "D. 001"
          ],
          "answer": 2,
          "explanation": "格雷码相邻两个编码恰好有一位二进制位不同。101 与 110 在第 2、3 位都有变化（相差两位），因此 110 不可能是下一个编码。其余 100、111、001 都与 101 只差一位。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_10",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码生成格雷编码，则横线上应填写（   ）。\nvector<string> grayCode(int n) {\nif (n == 0) return {\"0\"};\nif (n == 1) return {\"0\", \"1\"};\nvector<string> prev = grayCode(n-1);\nvector<string> result;\nfor (string s : prev) {\nresult.push_back(\"0\" + s);\n}\nfor (_______________) {\nresult.push_back(\"1\" + prev[i]);\n}\nreturn result;\n}",
          "options": [
            "A. int i = 0; i < prev.size(); i++",
            "B. int i = prev.size()-1; i >= 0; i--",
            "C. auto s : prev",
            "D. int i = prev.size()/2; i < prev.size(); i++"
          ],
          "answer": 1,
          "explanation": "生成 n 位格雷码时，前半部分在 n-1 位码前加 0，后半部分需逆序加 1 才能保证相邻只差一位，因此第二个循环必须从后往前遍历 prev，即 i=prev.size()-1 递减到 0。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_23",
          "kp": "kp6_06",
          "type": "judge",
          "difficulty": 1,
          "question": "格雷编码相邻两个编码之间必须有多位不同，以避免数据传输错误。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "格雷码的核心性质是相邻两个编码之间恰好只有一位二进制位不同，例如 000、001、011、010 依次相邻。正是因为变化位数少，才避免状态切换时多位同时变化造成的数据错误，而不是多位不同，题目说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_11",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "关于格雷编码（Gray Code），下列说法正确的是（ ）。",
          "options": [
            "A. 格雷编码中，编码位数越多，相邻编码之间变化的位数也越多",
            "B. 格雷编码中，相邻两个编码的二进制位恰好有一位不同",
            "C. 格雷编码就是把普通二进制编码按位取反后得到的结果",
            "D. 格雷编码不能用于数字电路和状态转换的设计中"
          ],
          "answer": 1,
          "explanation": "格雷码的核心性质是相邻两个编码恰好只有一位二进制位不同，且这一性质与编码位数多少无关。按位取反得到的是普通二进制编码的反码，不是格雷码；格雷码广泛用于数字电路中的状态转换设计，以减少转换错误，故选 B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_11",
          "kp": "kp6_06",
          "type": "choice",
          "difficulty": 1,
          "question": "在格雷码中，相邻两个编码只能有一位不同。若当前编码为 110，则它的下一个编码不可能是（  ）。",
          "options": [
            "A. 010",
            "B. 111",
            "C. 100",
            "D. 001"
          ],
          "answer": 3,
          "explanation": "格雷码要求相邻两个编码恰好一位不同。110 与 001 相比，第 2 位从 1 变为 0、第 3 位从 0 变为 1，共有两位不同，不可能是下一个编码。010、111、100 与 110 都只差一位，可以接在后面，故选 D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_07": {
      "title": "深度优先搜索",
      "questions": [
        {
          "id": "l6_202309_21",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "DFS是深度优先算法的英文简写。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "DFS是Depth First Search（深度优先搜索）的英文简写，其核心思想是沿着一条分支尽量深入，走不通再回溯到上一分支继续探索。因此“DFS是深度优先算法的英文简写”的说法正确，故选“正确”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_09",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码不正确的说法是（ ）。\n【题面含二叉树深度Depth()递归代码块，见原卷】",
          "options": [
            "A. 该代码可用于求解二叉树的深度",
            "B. 代码中函数Depth()的参数T表示根节点，非根节点不可以作为参数",
            "C. 代码中函数Depth()采用了递归方法",
            "D. 代码中函数Depth()可用于求解各种形式的二叉树深度，要求该二叉树节点至少有left和right属性"
          ],
          "answer": 1,
          "explanation": "Depth()递归地计算左右子树深度的较大值再加1，左右孩子结点完全可以作为参数传入递归调用，并非只能传根节点，因此B的说法错误。A、C、D描述都正确，故答案选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_19",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "深度优先搜索（DFS，Depth First Search的简写）属于图算法，其过程是对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "深度优先搜索（DFS）是图的遍历算法，其过程是对每一个可能的分支路径深入到不能再深入为止，找不到再回溯，并且每个节点只能访问一次以免陷入死循环。题干描述与DFS的标准定义一致，说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_27",
          "kp": "kp6_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：工作沟通\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n某公司一共有 N 名员工，编号从 0 到 N-1，编号为 0 的员工是老板。\n编号为 i 的员工，他的直接领导是编号为 f[i] 的员工。\n我们规定：员工 x 可以管理员工 y，当且仅当满足下面三个条件之一：\n（1）x 和 y 是同一个人；\n（2）x 恰好是 y 的直接领导；\n（3）x 可以管理 y 的直接领导。\n\n现在公司要举行 Q 场合作会议，每一场会议都会给出参加这场会议的若干名员工。\n小杨需要为每一场会议找到一名能够管理所有参会员工的员工，并且希望找到的这个人的编号尽可能大。\n请你帮助小杨计算每一场会议的答案。\n\n【输入描述】\n第一行包含一个正整数 N，表示员工的人数。\n第二行包含 N-1 个整数，依次表示编号为 1 到 N-1 的员工的直接领导编号。\n第三行包含一个正整数 Q，表示会议的场数。\n接下来 Q 行，每行描述一场会议：首先给出一个整数 m，表示这场会议的参会人数，然后给出 m 个整数，表示参会员工的编号。\n\n【输出描述】\n输出 Q 行，每行一个整数，第 i 行输出第 i 场会议中能够管理所有参会员工的编号最大的员工。\n【数据范围】\n1 ≤ N ≤ 300\n\n【样例输入 1】\n5\n0 0 2 2\n3\n2 3 4\n3 2 3 4\n2 1 4\n\n【样例输出 1】\n2\n2\n0\n\n【样例输入 2】\n7\n0 1 0 2 1 2\n5\n2 4 6\n2 4 5\n3 4 5 6\n4 2 4 5 6\n2 3 4\n\n【样例输出 2】\n2\n1\n1\n1\n0",
          "options": [],
          "answer": null,
          "explanation": "根据父子关系建立树并求出每人的深度。对每场查询，先看参与者中深度最小的人能否管理全部参与者，不能则向上找其上级；从编号大到小枚举候选人（深度不超过参与者最浅深度），用DFS判断该候选人的子树能否覆盖所有参与者，第一个满足的即为答案，最终至少0号老板一定可行。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\n#include <vector>\n#include <iostream>\nusing namespace std;\nconst int N = 305;\nint fa[N], dep[N];\nbool vis[N];\nvector<int> ch[N];\nint getdep(int x) {\n    return x == 0 ? 0 : getdep(fa[x]) + 1;\n}\nvoid dfs(int x) {\n    vis[x] = 1;\n    for (int y : ch[x])\n        dfs(y);\n}\nbool check(int x, int n, const vector<int> &vec) {\n    for(int i = 0; i <= n; i ++)\n        vis[i] = 0;\n    dfs(x);\n    for (int y : vec)\n        if(! vis[y])\n            return 0;\n    return 1;\n}\nint main() {\n    int n;\n    scanf(\"%d\", &n);\n    for(int i = 1; i < n; i ++) {\n        scanf(\"%d\", &fa[i]);\n        ch[fa[i]].push_back(i);\n    }\n    for(int i = 1; i < n; i ++)\n        dep[i] = getdep(i);\n    int q;\n    scanf(\"%d\", &q);\n    while(q --) {\n        int m, mnd = n + 1;\n        scanf(\"%d\", &m);\n        vector<int> vec(m);\n        for(int i = 0; i < m; i ++) {\n            scanf(\"%d\", &vec[i]);\n            mnd = min(mnd, dep[vec[i]]);\n        }\n        for (int i = n - 1; i >= 0; i --)\n            if (dep[i] <= mnd && check(i, n, vec)) {\n                printf(\"%d\\n\", i);\n                break ;\n            }\n    }\n    return 0;\n}",
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
          "id": "l6_202406_14",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "同上题中的二叉树，阅读以下二叉树的深度优先搜索代码：使用以上算法，在二叉树搜索数值时，可能的输出是（ ）。\n【非递归DFS：栈先压右子树再压左子树】",
          "options": [
            "A. 5 2 -4 3 17 9",
            "B. -4 2 3 5 9 17",
            "C. 5 2 17 -4 3 9",
            "D. 以上都不对"
          ],
          "answer": 0,
          "explanation": "非递归DFS用栈实现前序遍历，先压右孩子再压左孩子，于是左子树先被访问。访问顺序为5、2、-4、3，然后回到右子树访问17、9，即5 2 -4 3 17 9，与选项A一致，选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_15",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "在上题的树中搜索数值时，采用深度优先搜索一共比较的节点数为（ ）。",
          "options": [
            "A. 2",
            "B. 3",
            "C. 4",
            "D. 5"
          ],
          "answer": 2,
          "explanation": "按DFS顺序5、2、-4、3、17、9访问结点。若搜索目标为3，则依次比较5、2、-4、3共4个结点后找到目标并返回，因此采用深度优先搜索一共比较的节点数为4，选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_24",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在深度优先搜索中，通常使用队列来辅助实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "深度优先搜索（DFS）借助栈（或递归）实现“后进先出”的回溯过程，而队列用于宽度优先搜索（BFS）。题干说DFS用队列辅助实现，与事实不符，说法错误。栈与队列在两类搜索中的分工需分清。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_27",
          "kp": "kp6_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：二叉树\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨有一棵包含 n 个节点的二叉树，根节点的编号为 1。\n这棵二叉树里的每一个节点要么是白色（用 0 表示），要么是黑色（用 1 表示）。\n\n之后小杨会对这棵二叉树进行 q 次操作。每次操作，小杨会选择一个节点，把以这个节点为根的整棵子树里所有节点的颜色都反转：黑色变成白色，白色变成黑色。\n\n请你计算出 q 次操作全部完成之后，每一个节点的最终颜色。\n\n【输入描述】\n第一行包含一个正整数 n，表示二叉树的节点个数。\n第二行包含 n-1 个整数，依次表示编号为 2 到 n 的节点的父节点编号。\n第三行包含一个长度为 n 的字符串，由字符 0 和 1 组成，表示每一个节点的初始颜色，其中第 i 个字符表示编号为 i 的节点的颜色。\n第四行包含一个正整数 q，表示操作的次数。\n接下来 q 行，每行包含一个整数，表示这一次操作所选择的节点编号。\n\n【输出描述】\n输出一行，包含一个长度为 n 的字符串，其中第 i 个字符表示编号为 i 的节点的最终颜色。\n【数据范围】\n1 ≤ n ≤ 100000\n\n【样例输入 1】\n6\n3 1 1 3 4\n100101\n3\n1\n3\n2\n\n【样例输出 1】\n010000",
          "options": [],
          "answer": null,
          "explanation": "先根据每个节点的父亲编号建立树结构（每个节点最多两个儿子）。对每次操作，用sum[x]记录节点x的子树被翻转的次数（只对操作点计数）。最后DFS一次，累计祖先的翻转次数now，若now为奇数则该节点颜色取反，输出每个节点的最终颜色。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nint n;\nint son[N][2];\nint f[N],col[N],sum[N];\nvoid dfs(int x,int now){\n    now+=sum[x];\n    if(now&1)col[x]^=1;\n    for(int i=0;i<2;i++){\n        if(son[x][i]!=-1)dfs(son[x][i],now);\n    }\n}\nint main(){\n    cin>>n;\n    memset(son,-1,sizeof son);\n    for(int i=2;i<=n;i++){\n        cin>>f[i];\n        for(int j=0;j<2;j++){\n            if(son[f[i]][j]==-1){\n                son[f[i]][j]=i;\n                break;\n            }\n        }\n    }\n    string s;\n    cin>>s;\n    for(int i=1;i<=n;i++){\n        col[i]=s[i-1]-'0';\n    }\n    int q;\n    cin>>q;\n    while(q--){\n        int x;\n        cin>>x;\n        sum[x]+=1;\n    }\n    dfs(1,0);\n    for(int i=1;i<=n;i++) cout<<col[i];\n    cout<<\"\\n\";\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\n3 1 1 3 4\n100101\n3\n1\n3\n2",
              "expectedOutput": "010000"
            }
          ]
        },
        {
          "id": "l6_202409_10",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "二叉树的深度定义为从根结点到叶结点的最长路径上的结点数，则以下基于二叉树的深度优先搜索实现的深度计算函数中横线上应填写（ ）。\nint max_depth(tree_node* root){ if(root==nullptr) return 0; int left_depth=max_depth(root->left); int right_depth=max_depth(root->right); ______ }",
          "options": [
            "A. return left_depth + right_depth;",
            "B. return max(left_depth, right_depth);",
            "C. return max(left_depth, right_depth) + 1;",
            "D. return left_depth + right_depth + 1;"
          ],
          "answer": 2,
          "explanation": "树的深度等于左右子树深度的较大值再加1（根结点本身占一层）。即return max(left_depth,right_depth)+1，同时递归终止条件是空树深度为0，选项C正确。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_11",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下二叉树的深度优先搜索算法，横线上应填写（ ）。\nvoid dfs(TreeNode* root){ if(root==nullptr) return; stack<TreeNode*> s; s.push(root); while(!s.empty()){ ______ cout<<node->value<<\" \"; if(node->right) s.push(node->right); if(node->left) s.push(node->left); } }",
          "options": [
            "A. TreeNode* node = s.top();",
            "B. TreeNode* node = s.top(); s.pop();",
            "C. TreeNode* node = s.front();",
            "D. TreeNode* node = s.front(); s.pop();"
          ],
          "answer": 1,
          "explanation": "非递归DFS借助栈，每次循环应取出栈顶元素并从栈中弹出，即TreeNode* node=s.top(); s.pop();。栈用top()而不用front()，故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_10",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了二叉树的深度优先搜索（DFS），并统计叶子结点的数量，则横线上应填写（ ）。\nint countLeafNodes(TreeNode* root){ if(root==nullptr) return 0; stack<TreeNode*> s; s.push(root); int count=0; while(!s.empty()){ TreeNode* node=s.top(); s.pop(); if(node->left==nullptr&&node->right==nullptr) count++; if(node->right) s.push(node->right); ______ } return count; }",
          "options": [
            "A. if (node->left) s.push(node->left);",
            "B. if (node->left) s.pop(node->left);",
            "C. if (node->left) s.front(node->left);",
            "D. if (node->left) s.push(node->right);"
          ],
          "answer": 0,
          "explanation": "DFS用栈遍历所有结点统计叶子：把右孩子入栈后，还应把左孩子入栈（先压右再压左，保证左先被访问），即if(node->left) s.push(node->left)，选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_18",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在树的深度优先搜索（DFS）中，使用队列作为辅助数据结构以实现“先进后出”的访问顺序。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "深度优先搜索（DFS）的回溯特性需要借助栈（先进后出）或递归来实现，而队列（先进先出）用于宽度优先搜索（BFS）。题干把DFS的辅助数据结构说成队列，说法错误，故选“错误”。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_26",
          "kp": "kp6_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：树上漫步\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小A有一棵包含 n 个结点的树，结点分别用 1 到 n 标号。\n小A会从树上的某个结点出发开始漫步。每走一步，他都可以移动到与当前结点相邻的另一个结点。\n小A只会在走了偶数步（可以是 0 步）之后结束漫步，并且在漫步过程中，他可以重复经过已经走过的结点。\n\n请你对于树上的每一个结点，计算：从这个结点出发开始漫步，经过若干偶数步能够结束漫步的结点一共有多少个。\n\n【输入描述】\n第一行包含一个正整数 n，表示树中结点的个数。\n接下来 n-1 行，每行包含两个整数 u 和 v，表示结点 u 和结点 v 之间有一条边。\n\n【输出描述】\n输出一行，包含 n 个整数，其中第 i 个整数表示从结点 i 出发开始漫步，经过偶数步能够结束漫步的结点个数。相邻两个整数之间用一个空格隔开。\n【数据范围】\n1 ≤ n ≤ 200000\n\n【样例输入 1】\n3\n1 3\n2 3\n\n【样例输出 1】\n2 2 1\n\n【样例输入 2】\n4\n1 3\n3 2\n4 3\n\n【样例输出 2】\n3 3 1 3",
          "options": [],
          "answer": null,
          "explanation": "树是二分图：对任意结点u，走偶数步能到达的结点恰好是与u同色的所有结点（因为每条边改变一次奇偶性）。对树做DFS染色，统计两个颜色的结点数量cnt[0]、cnt[1]，从结点u出发的答案就是它所在颜色类的结点总数。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 2e5 + 5;\nconst int E = N << 1;\nint n;\nint h[N], to[E], nx[E], et;\nint cnt[N], bel[N];\nvoid ae(int u, int v) {\n    et++;\n    to[et] = v;\n    nx[et] = h[u];\n    h[u] = et;\n}\nvoid dfs(int u, int c, int f) {\n    bel[u] = c;\n    cnt[c]++;\n    for (int i = h[u]; i; i = nx[i])\n        if (to[i] != f)\n            dfs(to[i], c ^ 1, u);\n}\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i < n; i++) {\n        int u, v;\n        scanf(\"%d%d\", &u, &v);\n        ae(u, v);\n        ae(v, u);\n    }\n    dfs(1, 0, 0);\n    for (int i = 1; i <= n; i++)\n        printf(\"%d%c\", cnt[bel[i]], \" \\n\"[i == n]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n1 3\n2 3",
              "expectedOutput": "2 2 1"
            },
            {
              "input": "4\n1 3\n3 2\n4 3",
              "expectedOutput": "3 3 1 3"
            }
          ]
        },
        {
          "id": "l6_202506_11",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "请将下列 C++ 实现的深度优先搜索（DFS）代码补充完整，横线处应填入（   ）。\nvoid dfs(TreeNode* root, vector<int>& result) {\nif (root == nullptr) return;\n__________________________\n}",
          "options": [
            "A. result.push_back(root->val); dfs(root->left); dfs(root->right);",
            "B. result.push_back(root->left->val); dfs(root->right); dfs(root->left);",
            "C. result.push_back(root->left->val); dfs(root->left); dfs(root->right);",
            "D. result.push_back(root->right->val); dfs(root->right); dfs(root->left);"
          ],
          "answer": 0,
          "explanation": "DFS 前序遍历应先处理根节点，把 root->val 加入结果，再递归左子树和右子树。选项 B、C 直接解引用空指针 root->left 会崩溃，D 先取右孩子访问顺序错误，只有 A 的访问顺序正确，故选 A。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_24",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "函数 puzzle 定义如下，则调用 puzzle(7) 程序会无限递归。\nint puzzle(int n) {\nif (n == 1) return 1;\nif (n % 2 == 0) return puzzle(n / 2);\nreturn puzzle(3 * n + 1);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "模拟调用过程：7 为奇数转 3n+1 得 22，22 为偶数减半得 11，如此反复得到 7→22→11→34→17→52→26→13→40→20→10→5→16→8→4→2→1，最终到达 n==1 这个基线条件返回，程序正常终止，不会无限递归，说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_11",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "请将下列树的深度优先遍历代码补充完整，横线处应填入（   ）。\nvoid dfs(TreeNode* root) {\nif (!root) return;\n______<TreeNode*> temp;\ntemp.push(root);\nwhile (!temp.empty()) {\nTreeNode* node = temp.top();\ntemp.pop();\ncout << node->val << \" \";\nif (node->right) temp.push(node->right);\nif (node->left) temp.push(node->left);\n}\n}",
          "options": [
            "A. vector",
            "B. list",
            "C. queue",
            "D. stack"
          ],
          "answer": 3,
          "explanation": "代码用 top()/pop()/push() 且先压右再压左，符合栈的 LIFO 特性，配合后进先出实现深度优先遍历，故填 stack。queue 用于广度优先。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_27",
          "kp": "kp6_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：货物运输\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：A 国有 n 座城市，依次以 1,2,...,n 编号，其中 1 号城市为首都。这 n 座城市由 n-1 条双向道路连接，第 i 条道路连接编号为 ui, vi 的两座城市，道路长度为 wi。任意两座城市间均可通过双向道路到达。满载货物的车队从首都出发，经过每座城市时将货物送出，因此车队需要经过所有城市。请你设计一条路线，在从首都出发经过所有城市的前提下，最小化经过的道路长度总和。注意一座城市可以经过多次，车队最后可以不返回首都。\n输入格式：第一行一个正整数 n，表示城市数量。接下来 n-1 行，每行三个整数 ui, vi, wi，表示一条双向道路。\n输出格式：一行，一个整数，表示设计路线经过的道路长度总和。",
          "options": [],
          "answer": null,
          "explanation": "思路：要覆盖所有城市且不必返回首都，等价于从根出发走遍所有边，其中最长的那条从根到叶子的路径只走一次，其余边来回各走一次。因此答案 = 2×(边权和) − (根到最远叶子的距离)。用一次 DFS 求根到最远节点的最长距离即可。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\n#include <vector>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nvector<vector<pair<int, int>>> e;\nlong long s, mx;\nvoid dfs(int u, int f, long long d) {\n    mx = max(d, mx);\n    for (auto p : e[u]) {\n        if (p.first != f) { dfs(p.first, u, d + p.second); }\n    }\n}\nint main() {\n    scanf(\"%d\", &n);\n    e.resize(n + 1);\n    for (int i = 1; i < n; i++) {\n        int u, v, w;\n        scanf(\"%d%d%d\", &u, &v, &w);\n        e[u].emplace_back(make_pair(v, w));\n        e[v].emplace_back(make_pair(u, w));\n        s += w;\n    }\n    dfs(1, 0, 0);\n    printf(\"%lld\\n\", s * 2 - mx);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 2 6\n1 3 1\n3 4 5\n",
              "expectedOutput": "18\n"
            },
            {
              "input": "7\n1 2 1\n2 3 1\n3 4 1\n7 6 1\n6 5 1\n5 1 1\n",
              "expectedOutput": "9\n"
            }
          ]
        },
        {
          "id": "l6_202512_11",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码实现了树的深度优先遍历，则横线处应填入（   ）。\nvoid dfs(TreeNode* root) {\nif (!root) return;\nstack<TreeNode*> st;\nst.push(root);\nwhile (!st.empty()) {\nTreeNode* node = st.top(); st.pop();\ncout << node->val << \" \";\nif (node->right) st.push(node->right);\n________________________\n}\n}",
          "options": [
            "A. if (node->left) st.push(node->left);",
            "B. if (node->left) st.pop(node->left);",
            "C. if (node->left) st.front(node->left);",
            "D. if (node->left) st.push(node->right);"
          ],
          "answer": 0,
          "explanation": "为配合栈的 LIFO 实现先左后右的 DFS，应先把右孩子入栈再把左孩子入栈，因此横线处填 if (node->left) st.push(node->left)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_26",
          "kp": "kp6_07",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：路径覆盖\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定一棵有 n 个结点的有根树 T，结点依次以 1,2,...,n 编号，根结点编号为 1。初始时 T 中的结点均为白色。你需要将 T 中的若干个结点染为黑色，使得所有叶子到根的路径上至少有一个黑色结点。将结点 i 染为黑色需要代价 c[i]，你需要在满足条件的情况下，最小化染色代价之和。叶子是指 T 中没有子结点的结点。\n输入格式：第一行一个正整数 n，表示结点数量。第二行 n-1 个正整数，其中第 i 个表示结点 i+1 的父结点编号。第三行 n 个正整数，其中第 i 个表示将结点 i 染为黑色所需的代价。\n输出格式：一行，一个整数，表示最小染色代价之和。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：树形 DP。ans[u] 表示保证 u 子树内所有叶子到 u 的路径至少有一个黑点的最小代价。若 u 是叶子（无孩子），必须染 u，代价为 c[u]；否则 u 可以不染，直接累加各孩子子树的答案，并与染 u（代价 c[u]，孩子子树不再要求）取较小。从叶子向根递推即可。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nint f[N], c[N], cnt[N];\nlong long ans[N];\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 2; i <= n; i++) {\n        scanf(\"%d\", &f[i]);\n        cnt[f[i]]++;\n    }\n    for (int i = 1; i <= n; i++)\n        scanf(\"%d\", &c[i]);\n    for (int i = n; i >= 1; i--) {\n        if (cnt[i] == 0)\n            ans[i] = c[i];\n        ans[i] = min(ans[i], 1ll * c[i]);\n        ans[f[i]] += ans[i];\n    }\n    printf(\"%lld\\n\", ans[1]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 2 3\n5 6 2 3\n",
              "expectedOutput": "2\n"
            },
            {
              "input": "7\n1 1 2 2 3 3\n64 16 15 4 3 2 1\n",
              "expectedOutput": "10\n"
            }
          ]
        },
        {
          "id": "l6_202603_13",
          "kp": "kp6_07",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于树的深度优先搜索（DFS）的说法中，正确的是（ ）。",
          "options": [
            "A. 对树进行 DFS 时，一定是按层从上到下依次访问结点",
            "B. 对任意一棵树进行 DFS，得到的遍历序列唯一",
            "C. 对一棵树进行 DFS 时，常借助递归或栈实现",
            "D. DFS 只能用于二叉树，不能用于普通树"
          ],
          "answer": 2,
          "explanation": "DFS 的访问方式是沿一条路径深入到底再回溯，通常借助递归或显式栈实现。按层从上到下访问是 BFS；DFS 遍历序列依赖子节点的访问顺序，并不唯一；DFS 适用于普通树、二叉树等任意树结构，故选 C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_18",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "对如下结构的树，执行 travel 函数，输出结果是 1 2 3 4 5。\n//       1\n//      / \\\n//     2   3\n//    / \\\n//   4   5\nvoid travel(Node* root) {\nif (!root) return;\nstack<Node*> s;\ns.push(root);\nwhile (!s.empty()) {\nNode* cur = s.top(); s.pop();\ncout << cur->val << \" \";\nif (cur->right) s.push(cur->right);\nif (cur->left)  s.push(cur->left);\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "栈实现前序 DFS：出 1 压右 3 左 2，出 2 压 5 压 4，出 4、出 5、出 3，输出顺序为 1 2 4 5 3，不是 1 2 3 4 5。说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_22",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ 中使用栈来非递归地实现二叉树的前序遍历时，为了保证遍历顺序正确，在处理完当前结点后，应该先将该结点的左孩子压入栈中，然后再将右孩子压入栈中。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "用栈非递归实现前序遍历时，栈是后进先出结构，为了先访问左子树，必须先把右孩子压入栈、再把左孩子压入栈，这样左孩子后入栈先出栈。若先压左孩子再压右孩子，右孩子会先出栈，遍历顺序错误，说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_24",
          "kp": "kp6_07",
          "type": "judge",
          "difficulty": 1,
          "question": "使用栈非递归实现二叉树前序遍历时，若希望先访问左子树，通常应先将右孩子入栈，再将左孩子入栈。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "用栈实现非递归前序遍历时，栈是后进先出结构。为保证先访问左子树，应先把右孩子压入栈、再把左孩子压入栈，这样左孩子后入栈会先出栈，先被访问，从而得到根-左-右的前序顺序，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_08": {
      "title": "宽度优先搜索",
      "questions": [
        {
          "id": "l6_202309_24",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "如果节点数为N，广度搜索算法的最差时间复杂度为O(N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "广度优先搜索（BFS）借助队列逐层访问每个节点，每个节点最多入队出队各一次，最坏情况要遍历全部N个节点，因此时间复杂度为O(N)。题干的说法正确，故选“正确”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_08",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下广度优先搜索的代码：使用以上算法遍历以下这棵树，可能的输出是（ ）。\n【图为二叉树，见原卷】\n1\n/ \\\n2   3\n/ \\   \\\n8   9   6\n/ \\   \\\n4   5   7\n/ \\\n10 11",
          "options": [
            "A. 1 2 8 9 4 5 3 6 7 10 11",
            "B. 1 2 3 4 5 6 7 8 9 10 11",
            "C. 1 2 3 8 9 6 4 5 7 10 11",
            "D. 1 2 3 8 9 4 5 6 7 10 11"
          ],
          "answer": 2,
          "explanation": "BFS用队列逐层遍历：第一层1，第二层2、3，第三层8、9、6（2的孩子8、9和3的孩子6），第四层4、5、7（9的孩子4、5和6的孩子7），第五层10、11（7的孩子）。输出1 2 3 8 9 6 4 5 7 10 11，选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_21",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "在宽度优先搜索中，通常使用队列来辅助实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "宽度优先搜索（BFS）按层扩展，先入队的节点先被访问，正好符合队列先进先出的特点，因此通常使用队列作为辅助数据结构来实现BFS。题干的说法正确，故选“正确”。队列先进先出的特性与BFS逐层扩展完全契合。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_13",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下二叉树的广度优先搜索代码：使用以上算法，在以下这棵树搜索数值时，可能的输出是（ ）。\n【图为二叉树，见原卷】\n5\n/ \\\n2   17\n/ \\\n-4   3\n\\\n9",
          "options": [
            "A. 5 2 -4 3 17 9",
            "B. -4 2 3 5 9 17",
            "C. 5 2 17 -4 3 9",
            "D. 以上都不对"
          ],
          "answer": 2,
          "explanation": "BFS用队列逐层访问：先输出根5，再按层输出其孩子2、17，接着输出2的孩子-4、3，最后输出17的孩子9。输出顺序为5 2 17 -4 3 9，与选项C一致，故答案选C。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_11",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "上一题的二叉树深度计算还可以采用二叉树的广度优先搜索来实现。以下基于二叉树的广度优先搜索实现的深度计算函数中横线上应填写（ ）。\nint max_depth_bfs(tree_node* root){ if(root==nullptr) return 0; queue<tree_node*> q; q.push(root); int depth=0; while(!q.empty()){ ______ for(int i=0;i<level_size;++i){ tree_node* node=q.front(); q.pop(); if(node->left) q.push(node->left); if(node->right) q.push(node->right); } } return depth; }",
          "options": [
            "A. int level_size = q.size(); depth++;",
            "B. int level_size = 2; depth++;",
            "C. int level_size = q.size(); depth += level_size;",
            "D. int level_size = 2; depth += level_size;"
          ],
          "answer": 0,
          "explanation": "BFS逐层统计：每层开始时记录当前队列大小level_size，即为本层结点数，然后depth加1表示多了一层。随后用for循环把这层结点全部出队并加入其孩子，故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_23",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "在非递归实现的树的广度优先搜索中，通常使用栈来辅助实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "非递归广度优先搜索（BFS）按层扩展，先访问的先入队，符合先进先出特点，应使用队列辅助实现；栈用于非递归深度优先搜索（DFS）。题干说BFS用栈，说法错误。队列BFS、栈DFS要记住这个对应关系。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下二叉树的广度优先搜索的代码，横线上应填写（ ）。\nvoid bfs(TreeNode* root){ if(root==NULL) return; queue<TreeNode*> q; q.push(root); while(!q.empty()){ ______ cout<<node->val<<\" \"; if(node->left) q.push(node->left); if(node->right) q.push(node->right); } }",
          "options": [
            "A. TreeNode* node = q.top();",
            "B. TreeNode* node = q.top(); q.pop();",
            "C. TreeNode* node = q.front();",
            "D. TreeNode* node = q.front(); q.pop();"
          ],
          "answer": 3,
          "explanation": "非递归BFS借助队列，每次取出队首元素并出队，即TreeNode* node=q.front(); q.pop();。队列访问队首用front()而不是top()，且需要同时弹出，故选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_13",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "使用上题中的宽度优先搜索算法遍历以下这棵树，可能的输出是（ ）。\n【图为二叉树】\n1\n/ \\\n2   3\n/ \\   \\\n8  9   6\n/ \\   \\\n4  5   7",
          "options": [
            "A. 1 2 3 8 9 4 5 6 7",
            "B. 1 2 8 9 6 4 5 7 3",
            "C. 1 2 3 8 9 6 4 5 7",
            "D. 以上都不对"
          ],
          "answer": 2,
          "explanation": "BFS按层遍历：第一层1，第二层2、3，第三层8、9、6（2的孩子8、9和3的孩子6），第四层4、5、7（9的孩子4、5和6的孩子7）。输出1 2 3 8 9 6 4 5 7，选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_23",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "宽度优先搜索算法（BFS）保证了每个节点在最短路径的情况下被访问。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "宽度优先搜索（BFS）按层次递增的顺序访问节点，从起点出发的每个节点首次被访问时，经过的路径就是最短路径（在无权图中）。因此“BFS保证了每个节点在最短路径的情况下被访问”的说法正确，故选“正确”。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_11",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了二叉树的广度优先搜索（BFS），并查找特定值的节点，则横线上应填写（ ）。\nTreeNode* findNode(TreeNode* root,int target){ if(root==nullptr) return nullptr; queue<TreeNode*> q; q.push(root); while(!q.empty()){ TreeNode* current=q.front(); q.pop(); if(current->val==target) return current; ______ } return nullptr; }",
          "options": [
            "A. if (current->left) q.push(current->left); if (current->right) q.push(current->right);",
            "B. if (current->left) q.pop(current->left); if (current->right) q.pop(current->right);",
            "C. if (current->left) q.front(current->left); if (current->right) q.front(current->right);",
            "D. if (current->left) q.push(current->right); if (current->right) q.push(current->left);"
          ],
          "answer": 0,
          "explanation": "BFS查找目标时，当前结点出队后应把它的左右孩子依次入队等待访问，即if(current->left) q.push(current->left); if(current->right) q.push(current->right)，故选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个二叉树，返回每一层中最大的节点值，结果以数组形式返回，横线处应填入（   ）。\nvector<int> largestValues(TreeNode* root) {\nvector<int> result;\nif (!root) return result;\nqueue<TreeNode*> q;\nq.push(root);\nwhile (!q.empty()) {\nint sz = q.size();\nint maxVal = INT_MIN;\nfor (int i = 0; i < sz; ++i) {\nTreeNode* node;\n_______________________________\nmaxVal = max(maxVal, node->val);\nif (node->left) q.push(node->left);\nif (node->right) q.push(node->right);\n}\nresult.push_back(maxVal);\n}\nreturn result;\n}",
          "options": [
            "A. node = q.end();",
            "B. node = q.front();",
            "C. q.pop(); node = q.front();",
            "D. node = q.front(); q.pop();"
          ],
          "answer": 3,
          "explanation": "BFS 每次处理队首元素：先取出队首 node = q.front()，再弹出 q.pop()。A 用迭代器 end 错误，B 没弹队首，C 先 pop 再取 front 会把当前要处理的元素丢掉。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "令 n 是树的节点数目，下列代码实现了树的广度优先遍历，其时间复杂度是（   ）。\nvoid bfs(TreeNode* root) {\nif (!root) return;\nqueue<TreeNode*> q;\nq.push(root);\nwhile (!q.empty()) {\nTreeNode* node = q.front();\nq.pop();\ncout << node->val << \" \";\nif (node->left) q.push(node->left);\nif (node->right) q.push(node->right);\n}\n}",
          "options": [
            "A. O(n)",
            "B. O(log n)",
            "C. O(n^2)",
            "D. O(2^n)"
          ],
          "answer": 0,
          "explanation": "广度优先遍历中，每个节点入队一次、出队一次，每次入队和出队操作都是常数时间 O(1)，加上访问节点输出的代价，总时间复杂度与节点总数成正比，为 O(n)，与树的形态无关。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一棵普通二叉树（节点值没有大小规律），下面代码判断是否存在值为 x 的结点，则横线处应填入（   ）。\nTreeNode* bfsFind(TreeNode* root, int x) {\nif (!root) return nullptr;\nqueue<TreeNode*> q;\nq.push(root);\nwhile (!q.empty()) {\nTreeNode* cur = q.front(); q.pop();\nif (cur->val == x) return cur;\n________________________\n}\nreturn nullptr;\n}",
          "options": [
            "A. q.push(cur);",
            "B. if (cur->right) q.push(cur->right);",
            "C. if (cur->left) q.push(cur->left); if (cur->right) q.push(cur->right);",
            "D. q.push(cur->left); q.push(cur->right);"
          ],
          "answer": 2,
          "explanation": "BFS 搜索时，弹出当前节点后应把它的左右孩子入队以便继续搜索。左右孩子可能为空指针，直接入队会导致后续访问空节点出错，因此必须加判空条件 if (cur->left) 和 if (cur->right) 再分别入队，故选 C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_19",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "广度优先遍历二叉树可用栈来实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "广度优先遍历要求按层从上到下依次访问，先进入队列的节点先被访问，需要先进先出的队列来实现。栈是后进先出结构，适合深度优先遍历，若用栈实现 BFS 顺序会颠倒，因此说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一棵二叉树，采用广度优先搜索（BFS）算法，返回右视图所有节点的值。其中右视图定义为从树的右侧看过去时可见的节点集合，即右视图中的每个节点都是某一层中最右侧的节点。\nvector<int> rightSideView(TreeNode* root) {\nunordered_map<int, int> rightmostValueAtDepth;\nint max_depth = -1;\nqueue<TreeNode*> nodeQueue;\nqueue<int> depthQueue;\nnodeQueue.push(root); depthQueue.push(0);\nwhile (!nodeQueue.empty()) {\nTreeNode* node = nodeQueue.front(); nodeQueue.pop();\nint depth = depthQueue.front(); depthQueue.pop();\nif (node != NULL) {\nmax_depth = max(max_depth, depth);\nrightmostValueAtDepth[depth] = node->val;\nnodeQueue.push(node->left);  depthQueue.push(________);\nnodeQueue.push(node->right); depthQueue.push(________);\n}\n}\nvector<int> rightView;\nfor (int depth = 0; ________; ++depth) {\nrightView.push_back(rightmostValueAtDepth[depth]);\n}\nreturn rightView;\n}",
          "options": [
            "A. depth; depth; depth < max_depth",
            "B. depth + 1; depth + 1; depth <= max_depth",
            "C. depth + 1; depth + 1; depth < max_depth",
            "D. depth; depth; depth <= max_depth"
          ],
          "answer": 1,
          "explanation": "孩子节点的深度比父节点大 1，两个横线都填 depth+1；遍历深度从 0 到 max_depth 都要取，故循环条件为 depth <= max_depth。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_12",
          "kp": "kp6_08",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一棵二叉树，采用广度优先搜索 BFS 返回其右视图，其中右视图中的每个节点都是该层最右侧的节点。横线处应填写（  ）。\nvector<int> rightSideView(TreeNode* root) {\nvector<int> result;\nif (!root) return result;\nqueue<TreeNode*> q;\nq.push(root);\nwhile (!q.empty()) {\nint sz = q.size();\nfor (int i = 0; i < sz; ++i) {\nTreeNode* node = q.front();\nq.pop();\n__________________________\nif (node->left) q.push(node->left);\nif (node->right) q.push(node->right);\n}\n}\nreturn result;\n}",
          "options": [
            "A. if (i == 0) result.push_back(node->val);",
            "B. if (i == sz - 1) result.push_back(node->val);",
            "C. result.push_back(q.front()->val);",
            "D. if (node->right) result.push_back(node->right->val);"
          ],
          "answer": 1,
          "explanation": "该代码按层遍历二叉树，每层循环处理 sz 个节点。右视图要求记录每一层最右侧的节点，即本层最后一个出队的节点，对应循环下标 i==sz-1 时把 node->val 加入结果，故选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_23",
          "kp": "kp6_08",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码可以正确地按层换行输出二叉树的节点值。\nvoid printByLevel(TreeNode* root) {\nif (!root) return;\nqueue<TreeNode*> q;\nq.push(root);\nwhile (!q.empty()) {\nfor (int i = 0; i < q.size(); ++i) {\nTreeNode* cur = q.front(); q.pop();\ncout << cur->val << \" \";\nif (cur->left) q.push(cur->left);\nif (cur->right) q.push(cur->right);\n}\ncout << endl;\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "for 条件里每次循环都会重新计算 q.size()，而循环中又在不断入队使 q.size() 变化，导致一层内处理的节点数超过本层节点数，无法按层正确分组换行。应先记录本层大小。说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_09": {
      "title": "二叉树搜索",
      "questions": [
        {
          "id": "l6_202309_12",
          "kp": "kp6_09",
          "type": "choice",
          "difficulty": 1,
          "question": "N个节点的二叉搜索树，其查找的平均时间复杂度为（ ）。",
          "options": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N²)"
          ],
          "answer": 2,
          "explanation": "二叉搜索树查找时，每比较一次就排除一半（若树平衡），查找范围平均缩小一半，因此平均时间复杂度为O(log N)。最坏情况（退化成单链）才达到O(N)，故答案选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_22",
          "kp": "kp6_09",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉搜索树查找的平均时间复杂度为O(log N)。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉搜索树查找每次比较都能排除一半的子树（平均情况下），查找范围按对数规模缩小，因此平均时间复杂度为O(log N)。最坏情况退化成单链才是O(N)，题干说平均O(log N)正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_23",
          "kp": "kp6_09",
          "type": "judge",
          "difficulty": 1,
          "question": "二叉搜索树的查找操作的时间复杂度是O(log N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉搜索树平均情况下查找一次排除一半子树，平均时间复杂度为O(log N)；最坏情况退化为单链时为O(N)。题目描述的是平均情况，因此“查找时间复杂度为O(log N)”说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_10",
          "kp": "kp6_09",
          "type": "choice",
          "difficulty": 1,
          "question": "根据下面二叉树和给定的代码，给定以下二叉搜索树，调用函数search(root,7)时，输出的结果是（ ）。\nTreeNode* search(TreeNode* root,int val){ cout<<root->val<<\" \"; if(root==NULL||root->val==val) return root; if(val<root->val) return search(root->left,val); else return search(root->right,val); }\n【图为二叉搜索树】\n5\n/ \\\n3   7\n/ \\ / \\\n2  4 6  8",
          "options": [
            "A. 5 3 2 4",
            "B. 5 7",
            "C. 5 3 7",
            "D. 7"
          ],
          "answer": 1,
          "explanation": "search(root,7)先输出当前根5，因7>5转向右子树search(7)；进入后先输出7，发现root->val==val=7满足终止条件，返回。因此输出的结果是5 7，选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_13",
          "kp": "kp6_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在二叉排序树（Binary Search Tree, BST）中查找元素 50，从根节点开始：若根值为 60，则下一步应去搜索：",
          "options": [
            "A. 左子树",
            "B. 右子树",
            "C. 随机",
            "D. 根节点"
          ],
          "answer": 0,
          "explanation": "二叉排序树满足左子树所有节点值小于根、右子树所有节点值大于根。要查找的元素 50 小于当前根值 60，因此 50 只可能存在于左子树中，下一步应去左子树继续搜索，故选 A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_23",
          "kp": "kp6_09",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码实现的二叉排序树的查找操作时间复杂度是 O(h)，其中 h 为树高。\nTreeNode* searchBST(TreeNode* root, int val) {\nwhile (root && root->val != val) {\nroot = (val < root->val) ? root->left : root->right;\n}\nreturn root;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "二叉排序树查找时，每比较一次就根据待查值与当前节点值的大小关系进入左子树或右子树，路径长度最多为树高 h，因此时间复杂度为 O(h)。平衡情况下 h 约为 log n，最坏斜树时为 O(n)，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_13",
          "kp": "kp6_09",
          "type": "choice",
          "difficulty": 1,
          "question": "在二叉排序树（Binary Search Tree, BST）中，假设节点值互不相同。给定如下搜索函数，以下说法一定正确的是（   ）。\nbool find(Node* root, int x) {\nwhile (root) {\nif (root->val == x) return true;\nroot = (x < root->val) ? root->left : root->right;\n}\nreturn false;\n}",
          "options": [
            "A. 最坏情况下，访问结点数是 O(log n)",
            "B. 最坏情况下，访问结点数是 O(n)",
            "C. 无论如何，访问结点数都不超过树高的一半",
            "D. 一定比在普通二叉树中搜索快"
          ],
          "answer": 1,
          "explanation": "BST 查找的时间复杂度取决于树高。最坏情况下树退化为单链的斜树，每次只能排除一个节点，查找要访问全部 n 个节点，复杂度为 O(n)；O(log n) 只在树平衡时成立。C 说访问数不超过树高一半不成立，D 也并非一定成立，故选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_10": {
      "title": "简单动态规划",
      "questions": [
        {
          "id": "l6_202309_13",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "青蛙每次能跳1或2步。下面是青蛙跳到第N步台阶C++实现代码。该段代码采用的算法是（ ）。\n【题面含跳台阶代码块，见原卷】",
          "options": [
            "A. 递推算法",
            "B. 贪心算法",
            "C. 动态规划算法",
            "D. 分治算法"
          ],
          "answer": 2,
          "explanation": "跳台阶问题是典型的动态规划：设f(n)表示到第n级的方法数，则f(n)=f(n-1)+f(n-2)，通过状态转移从小到大依次求解并保存结果，避免重复计算，属于动态规划算法，答案选C。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨买饮料\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨来到了一家商店，打算购买一些饮料。这家商店总共出售 N 种饮料，编号从 0 到 N-1，其中编号为 i 的饮料售价为 c[i] 元，容量为 l[i] 毫升。\n\n小杨购买饮料时需要满足下面几个要求：\n（1）每种饮料至多购买 1 瓶；\n（2）购买的所有饮料的总容量不能低于 L 毫升；\n（3）在满足（1）和（2）的前提下，使用的费用尽可能少。\n\n请你计算出小杨最少需要花费多少元。如果无论如何都无法让购买的总容量达到 L 毫升，就输出 no solution。\n\n【输入描述】\n第一行包含两个正整数 N 和 L，分别表示饮料的种类数和需要的总容量。\n接下来 N 行，每行包含两个正整数 c 和 l，分别表示一种饮料的售价和容量。\n\n【输出描述】\n输出一行，包含一个整数，表示最少花费的费用；如果无法满足要求，输出 no solution。\n【数据范围】\n1 ≤ L ≤ 2000\n\n【样例输入 1】\n5 100\n100 2000\n2 50\n4 40\n5 30\n3 20\n\n【样例输出 1】\n9\n\n【样例输入 2】\n5 141\n100 2000\n2 50\n4 40\n5 30\n3 20\n\n【样例输出 2】\n100\n\n【样例输入 3】\n4 141\n2 50\n4 40\n5 30\n3 20\n\n【样例输出 3】\nno solution",
          "options": [],
          "answer": null,
          "explanation": "每种饮料要么选要么不选，相当于01背包：把容量看作“重量”，花费看作“价值”，目标是容量达到L时的最小花费。用一维dp[j]表示容量j所需最小费用，初始化dp[0]=0其余为INF，对每种饮料倒序更新dp[j]=min(dp[j],dp[max(j-li,0)]+ci)，最终dp[L]即答案。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nconst int INF = 1000000000;\nint cost[2001];\nint main() {\n    int N = 0, L = 0;\n    cin >> N >> L;\n    cost[0] = 0;\n    for (int i = 1; i <= L; i++)\n        cost[i] = INF;\n    for (int i = 0; i < N; i++) {\n        int c = 0, l = 0;\n        cin >> c >> l;\n        for (int j = L; j >= 0; j--)\n            cost[j] = min(cost[j], cost[max(j - l, 0)] + c);\n    }\n    if (cost[L] == INF)\n        cout << \"no solution\" << endl;\n    else\n        cout << cost[L] << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "5 100\n100 2000\n2 50\n4 40\n5 30\n3 20",
              "expectedOutput": "9"
            },
            {
              "input": "5 141\n100 2000\n2 50\n4 40\n5 30\n3 20",
              "expectedOutput": "100"
            },
            {
              "input": "4 141\n2 50\n4 40\n5 30\n3 20",
              "expectedOutput": "no solution"
            }
          ]
        },
        {
          "id": "l6_202312_08",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的fiboA()和fiboB()两个函数分别实现斐波那契数列，该数列第1、第2项值为1，其余各项分别为前两项之和。下面有关说法错误的是（ ）。\n【题面含fiboA/fiboB代码块，见原卷】",
          "options": [
            "A. fiboA()采用递归方式实现斐波那契数列",
            "B. fiboB()采用动态规划算法实现斐波那契数列",
            "C. 当N值较大时，fiboA()存在大量重复计算",
            "D. 由于fiboA()代码较短，其执行效率较高"
          ],
          "answer": 3,
          "explanation": "fiboA()用递归实现斐波那契，会反复计算同一个子问题（如f(3)被算多次），N较大时存在大量重复计算，执行效率很低，因此D“代码短所以效率高”的说法错误。fiboB()用数组递推保存结果，是动态规划思想，A、B、C正确，故答案选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨想写一个程序来算出正整数N有多少个因数，经过思考他写出了一个重复没有超过N÷2次的循环就能够算出来了。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "除N自身外，N不可能有大于N÷2的因子，因此循环只需从1枚举到N÷2即可统计出N的所有因数，重复次数不超过N÷2次。这个做法是正确的，故选“正确”。这种枚举到N÷2的写法是正确的。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：闯关游戏\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n这个游戏一共有 N 关，关卡编号为 0 到 N-1。\n游戏里的每一关都有 M 个通道。选择第 i 个通道可以让你前进 a[i] 关：如果你当前在第 x 关，选择第 i 个通道后，你会直接来到第 x+a[i] 关；如果 x+a[i] ≥ N，那么你就成功通关了。\n当你顺利离开第 S 关时，你会获得 b[S] 分。\n\n游戏一开始，你在第 0 关。请你计算：从第 0 关出发，通关时最多能获得多少总分？\n\n【输入描述】\n第一行包含两个正整数 N 和 M，分别表示关卡总数和每一关的通道数量。\n第二行包含 M 个整数，依次为 a[1] 到 a[M]，表示每个通道能够前进的关卡数。\n第三行包含 N 个整数，依次为 b[0] 到 b[N-1]，表示离开每一关时获得的分数。\n\n【输出描述】\n输出一行，包含一个整数，表示通关时能够获得的最大总分。\n【数据范围】\n1 ≤ N ≤ 10000\n1 ≤ M ≤ 100\n\n【样例输入 1】\n6 2\n2 3\n1 0 30 100 30 30\n\n【样例输出 1】\n131\n\n【样例输入 2】\n6 2\n2 3\n1 0 30 100 30 -1\n\n【样例输出 2】\n101",
          "options": [],
          "answer": null,
          "explanation": "动态规划。设f[i]为到达第i关时能获得的最大分数（不含离开该关的分数），f[0]=0，对每个关卡i枚举通道j，若i-a[j]>=0则f[i]=max(f[i],f[i-a[j]]+b[i-a[j]])。最后枚举所有能一步通关的状态i（i+a[j]>=N），答案取max(f[i]+b[i])。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <cstring>\n#include <algorithm>\n#include <iostream>\nusing namespace std;\nconst int N = 10005;\nconst int M = 105;\nconst int inf = 0x3f3f3f3f;\nint a[M], b[N], f[N];\nint main() {\n    int n, m;\n    scanf(\"%d%d\", &n, &m);\n    for (int i = 1; i <= m; i ++)\n        scanf(\"%d\", &a[i]);\n    for (int i = 0; i < n; i ++)\n        scanf(\"%d\", &b[i]);\n    memset(f, -0x3f, sizeof(f));\n    f[0] = 0;\n    for (int i = 1; i < n; i ++)\n        for (int j = 1; j <= m; j ++)\n            if (i - a[j] >= 0)\n                f[i] = max(f[i], f[i - a[j]] + b[i - a[j]]);\n    int ans = -inf;\n    for (int i = 0; i < n; i ++)\n        for (int j = 1; j <= m; j ++)\n            if (i + a[j] >= n) {\n                ans = max(ans, f[i] + b[i]);\n                break ;\n            }\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6 2\n2 3\n1 0 30 100 30 30",
              "expectedOutput": "131"
            },
            {
              "input": "6 2\n2 3\n1 0 30 100 30 -1",
              "expectedOutput": "101"
            }
          ]
        },
        {
          "id": "l6_202403_07",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "以下动态规划算法的含义与目的是（ ）。\nint function(vector<int>& nums){ int n=nums.size(); if(n==0) return 0; if(n==1) return nums[0]; vector<int> dp(n,0); dp[0]=nums[0]; dp[1]=max(nums[0],nums[1]); for(int i=2;i<n;++i) dp[i]=max(dp[i-1], nums[i]+dp[i-2]); return dp[n-1]; }",
          "options": [
            "A. 计算数组nums中的所有元素的和",
            "B. 计算数组nums中相邻元素的最大和",
            "C. 计算数组nums中不相邻元素的最大和",
            "D. 计算数组nums中的最小元素"
          ],
          "answer": 2,
          "explanation": "状态转移dp[i]=max(dp[i-1], nums[i]+dp[i-2])表示：到第i个位置为止，要么不取nums[i]沿用dp[i-1]，要么取nums[i]并加上dp[i-2]（跳过相邻元素），因此求解的是不相邻元素的最大和，选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_11",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "在求解最优化问题时，动态规划常常涉及到两个重要性质，即最优子结构和（ ）。",
          "options": [
            "A. 重叠子问题",
            "B. 分治法",
            "C. 贪心策略",
            "D. 回溯算法"
          ],
          "answer": 0,
          "explanation": "动态规划适用于具有“最优子结构”和“重叠子问题”两大性质的问题：最优子结构保证整体最优可由子问题最优组合而来，重叠子问题保证保存中间结果有意义、避免重复计算，故答案选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_17",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在动态规划中，状态转移方程的作用是定义状态之间的关系。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "状态转移方程是动态规划的核心，它用数学式描述当前状态如何由前面的状态递推而来，例如dp[i]=dp[i-1]+dp[i-2]。它的作用正是定义状态与状态之间的递推关系，说法正确，故选“正确”。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：游戏\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n你有四个正整数 n、a、b、c，并准备用它们玩一个简单的小游戏。\n在一轮游戏操作中，你可以选择把当前的数 x 减去 a，也可以选择把当前的数 x 减去 b。\n游戏从 x=n 开始，会进行很多轮操作；当 x ≤ c 时，游戏立即结束，不再进行任何操作。\n\n游戏从 x=n 开始。你想知道：游戏结束时，一共有多少种不同的游戏操作序列？\n注意：即使 a 和 b 相等，把当前数减去 a 和把当前数减去 b 也认为是两种不同的操作。\n由于答案可能非常大，你只需要输出答案对 1e9+7 取模后的结果。\n\n【输入描述】\n一行，包含四个正整数 n、a、b、c，含义如问题描述所述。\n\n【输出描述】\n输出一行，包含一个整数，表示不同的游戏操作序列数量对 1e9+7 取模的结果。\n【数据范围】\n1 ≤ n ≤ 200000\n\n【样例输入 1】\n1 1 1 1\n\n【样例输出 1】\n1\n\n【样例输入 2】\n114 51 4 1\n\n【样例输出 2】\n176\n\n【样例输入 3】\n114514 191 9 810\n\n【样例输出 3】\n384178446",
          "options": [],
          "answer": null,
          "explanation": "动态规划统计方案数。设f[x]表示当前数为x时到游戏结束为止的序列数，从大到小转移：对x从n递减到c+1，f[x-a]+=f[x]、f[x-b]+=f[x]（小于c的值作为终态），最后累加所有终态。数组下标需要加偏移以容纳x减到负数的情况。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\nusing namespace std;\nconst int N = 2e5 + 5;\nconst int mod = 1e9 + 7;\nint n, a, b, c;\nint f[N << 1];\nint ans;\nint main()\n{\n    scanf(\"%d%d%d%d\", &n, &a, &b, &c);\n    f[N + n] = 1;\n    for (int i = n; i > c; i--)\n    {\n        f[N + i - a] = (f[N + i - a] + f[N + i]) % mod;\n        f[N + i - b] = (f[N + i - b] + f[N + i]) % mod;\n    }\n    for (int i = 0; i <= N + c; i++)\n        ans = (ans + f[i]) % mod;\n    printf(\"%d\\n\", ans);;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "1 1 1 1",
              "expectedOutput": "1"
            },
            {
              "input": "114 51 4 1",
              "expectedOutput": "176"
            },
            {
              "input": "114514 191 9 810",
              "expectedOutput": "384178446"
            }
          ]
        },
        {
          "id": "l6_202406_11",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "在求解最优化问题时，动态规划常常涉及到两个重要性质，即最优子结构和（ ）。",
          "options": [
            "A. 重叠子问题",
            "B. 分治法",
            "C. 贪心策略",
            "D. 回溯算法"
          ],
          "answer": 0,
          "explanation": "动态规划适用的两个关键性质是最优子结构和重叠子问题：最优子结构保证可用子问题最优解构造整体最优解，重叠子问题说明保存中间结果能避免重复计算，故选A。这两个性质是判断能否使用DP的关键依据。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_12",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "青蛙每次能跳1或2步，下面代码计算青蛙跳到第n步台阶有多少种不同跳法。则下列说法，错误的是（ ）。\nint jump_recur(int n){ if(n==1) return 1; if(n==2) return 2; return jump_recur(n-1)+jump_recur(n-2);} int jump_dp(int n){ vector<int> dp(n+1); dp[1]=1; dp[2]=2; for(int i=3;i<=n;++i) dp[i]=dp[i-1]+dp[i-2]; return dp[n];}",
          "options": [
            "A. 函数jump_recur()采用递归方式。",
            "B. 函数jump_dp()采用动态规划方法。",
            "C. 当n较大时，函数jump_recur()存在大量重复计算，执行效率低。",
            "D. 函数jump_recur()代码量小，执行效率高。"
          ],
          "answer": 3,
          "explanation": "jump_recur()递归求解时同一子问题被重复计算多次，n较大时执行效率很低，因此D“代码量小所以执行效率高”的说法错误。A、B、C分别描述了递归方式、动态规划方法和重复计算问题，都正确，选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_25",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "对0-1背包问题，贪心算法一定能获得最优解。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "0-1背包问题具有重叠子问题和最优子结构，但贪心策略（如按单位价值最大）不能保证全局最优，只能得到近似解，必须用动态规划求解。因此“贪心算法一定能获得最优解”说法错误。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：计算得分\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨想要计算一个由 m 个小写字母组成的字符串的得分。\n小杨设置了一个计分序列 a[1..n]，里面一共有 n 个正整数。\n计分规则是：如果字符串的一个子串由 k 个首尾相接的 abc 组成（其中 k ≤ n），那么就能得到分数 a[k]。\n字符串里包含的字符不能重复计算得分，整个字符串的得分是所有计分子串的分数之和。\n\n请你帮助小杨计算：这个字符串的最大总得分是多少？\n\n【输入描述】\n第一行包含一个正整数 n，表示计分序列中分数的个数。\n第二行包含 n 个正整数，依次为 a[1] 到 a[n]，表示计分的分数。\n第三行包含一个正整数 m，表示字符串的长度。\n第四行包含一个长度为 m 的字符串，由小写字母组成。\n\n【输出描述】\n输出一行，包含一个整数，表示给定字符串的最大总得分。\n【数据范围】\n1 ≤ n ≤ 30\n1 ≤ m ≤ 100000\n\n【样例输入 1】\n3\n3 1 2\n13\ndabcabcabcabz\n\n【样例输出 1】\n9",
          "options": [],
          "answer": null,
          "explanation": "动态规划。设dp[i]表示字符串前i个字符的最大得分，先继承dp[i-1]（第i个字符不参与计分）；若以第i个字符结尾存在连续的j个abc块，则dp[i]=max(dp[i],dp[i-3j]+a[j])。枚举j从1到n，检查以i结尾的3j个字符是否为j个连续的abc，取最大值。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nint a[30];\nstring s;\nint dp[N];\nint main(){\n    int n;\n    cin>>n;\n    for(int i=1;i<=n;i++) cin>>a[i];\n    int m;\n    cin>>m;\n    cin>>s;\n    for(int i=1;i<=m;i++){\n        dp[i]=dp[i-1];\n        for(int j=1;j<=n;j++){\n            if(i-3*j+1<=0)break;\n            int l = i-3*j+1;\n            if(s.substr(l-1,3)==\"abc\"){\n                dp[i]=max(dp[i],dp[l]+a[j]);\n            }else break;\n        }\n    }\n    cout<<dp[m]<< endl;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3\n3 1 2\n13\ndabcabcabcabz",
              "expectedOutput": "9"
            }
          ]
        },
        {
          "id": "l6_202409_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "动态规划通常用于解决（ ）。",
          "options": [
            "A. 无法分解的问题",
            "B. 可以分解成相互依赖的子问题的问题",
            "C. 可以通过贪心算法解决的问题",
            "D. 只能通过递归解决的问题"
          ],
          "answer": 1,
          "explanation": "动态规划适用于可分解为若干相互依赖（重叠）子问题的问题，通过保存子问题解避免重复计算。完全独立无关的子问题用分治即可，贪心不依赖重叠子问题，故答案选B。重叠子问题是DP相比分治的核心差异。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下用动态规划解决的0-1背包问题的函数，假设背包的容量是10kg，假设输入4个物品的重量分别为【见原卷】（单位为kg），每个物品对应的价值分别为【见原卷】，则函数的输出为（ ）。\nint knapsack(int W, vector<int>& weights, vector<int>& values, int n){ vector<vector<int>> dp(n+1, vector<int>(W+1,0)); for(int i=1;i<=n;++i) for(int w=0;w<=W;++w){ if(weights[i-1]<=w) dp[i][w]=max(dp[i-1][w], dp[i-1][w-weights[i-1]]+values[i-1]); else dp[i][w]=dp[i-1][w]; } return dp[n][W]; }",
          "options": [
            "A. 90",
            "B. 100",
            "C. 110",
            "D. 140"
          ],
          "answer": 2,
          "explanation": "0-1背包用二维DP：dp[i][w]表示前i个物品容量w时的最大价值，状态转移为放或不放第i个物品取较大值。按题目给定4个物品在容量10kg下求出的最大价值为110，故答案选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "状态转移方程是动态规划的核心，可以通过递推方式表示问题状态的变化。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "状态转移方程是动态规划的核心，它用递推公式描述状态之间的变化关系，例如dp[i]=max(dp[i-1],nums[i]+dp[i-2])。通过递推方式从较小的状态逐步推出较大状态，说法正确，故选“正确”。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_25",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "应用动态规划算法时，识别并存储重叠子问题的解是必须的。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "动态规划之所以高效，正是因为能够识别出重叠子问题并保存子问题的解，避免重复计算。识别并存储重叠子问题的解是动态规划的必要环节，否则就退化为低效递归，说法正确，故选“正确”。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：小杨和整数拆分\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨有一个正整数 n，他想要把它拆分成若干个完全平方数的和。\n所谓完全平方数，就是可以写成某个整数乘它本身得到的数，例如 1、4、9、16 都是完全平方数。\n小杨希望拆分成完全平方数的数量越少越好。\n\n请你编写程序，计算出总和为 n 的完全平方数的最少数量。\n\n【输入描述】\n一行，包含一个正整数 n，表示需要拆分的整数。\n\n【输出描述】\n输出一行，包含一个整数，表示总和为 n 的完全平方数的最少数量。\n【数据范围】\n1 ≤ n ≤ 100000\n\n【样例输入 1】\n18\n\n【样例输出 1】\n2\n\n【样例输入 2】\n4\n\n【样例输出 2】\n1\n\n【样例输入 3】\n10\n\n【样例输出 3】\n2",
          "options": [],
          "answer": null,
          "explanation": "动态规划。设dp[i]表示总和为i所需的最少完全平方数个数，初始化dp[i]=i（全用1构成）。对每个i，枚举平方数j*j（j从1到√i），转移dp[i]=min(dp[i], dp[i-j*j]+1)，最终输出dp[n]。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5+10;\nint n;\nint dp[N];\nint main(){\n    cin>>n;\n    for(int i=1;i<=n;i++){\n        dp[i]=i;\n        for(int j=1;j<=sqrt(i);j++){\n            dp[i] = min(dp[i-j*j]+1,dp[i]);\n        }\n    }\n    cout<<dp[n]<< endl;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "18",
              "expectedOutput": "2"
            },
            {
              "input": "4",
              "expectedOutput": "1"
            },
            {
              "input": "10",
              "expectedOutput": "2"
            }
          ]
        },
        {
          "id": "l6_202409_27",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：算法学习\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨计划学习 m 种算法，为此他找了 n 道题目来帮助自己学习，每一道题目至多学习一次。\n小杨对每一种算法的初始掌握程度都是 0。\n第 i 道题目有一个对应的知识点 a[i]：学习第 i 道题目，可以让小杨对第 a[i] 种算法的掌握程度提高 b[i]。\n小杨的学习目标是：对 m 种算法的掌握程度都至少达到 k。\n另外，小杨认为连续学习两道相同知识点的题目是不好的。\n\n请你帮助小杨计算：他最少需要学习多少道题目，才能在完成学习目标的同时，避免连续学习两道相同知识点的题目？如果不存在这样的方案，请输出 -1。\n\n【输入描述】\n第一行包含三个正整数 m、n、k，分别表示算法的种类数、题目的数量和需要达到的掌握程度。\n第二行包含 n 个整数，依次为 a[1] 到 a[n]，表示每道题目对应的知识点。\n第三行包含 n 个整数，依次为 b[1] 到 b[n]，表示学习每道题目后掌握程度的提高值。\n\n【输出描述】\n输出一行，包含一个整数，表示最少需要学习的题目数量；如果不存在这样的方案，输出 -1。\n【数据范围】\n1 ≤ m ≤ 100000\n\n【样例输入 1】\n3 5 10\n1 1 2 3 3\n9 1 10 10 1\n\n【样例输出 1】\n4\n\n【样例输入 2】\n2 4 10\n1 1 1 2\n1 2 7 10\n\n【样例输出 2】\n-1",
          "options": [],
          "answer": null,
          "explanation": "对每种算法，其题目按提升值从大到小排序，依次取到掌握度达到k，得到该算法至少需要的题目数need[i]及剩余题目数。若某算法题目的总提升不足k则输出-1。取需题数最多的算法mx，若其need不超过其余题目总数则答案为总need之和；否则需要用其它算法剩余题目隔开，能隔开输出2*mx-1，否则-1。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": "#include <bits/stdc++.h>\nusing namespace std;\nconst int N = 1e5 + 5;\nint f[N];\nvector<int> score[N + 2], a, b;\nbool cmp(int i, int j) {\n    return i > j;\n}\nint main() {\n    int n, m, k;\n    cin >> m >> n >> k;\n    a.resize(n), b.resize(n);\n    for (int i = 0; i < n; i ++) cin >> a[i];\n    for (int i = 0; i < n; i ++) {\n        cin >> b[i];\n        score[a[i]].emplace_back(b[i]);\n    }\n    vector<int> need(m + 2);\n    int ans = 0, mx_meed = 0, mx_need_i = -1;\n    for (int i = 1; i <= m; i ++) {\n        sort(score[i].begin(), score[i].end(), cmp);\n        int sum = 0;\n        for (int j = 0; j < (int) score[i].size(); j ++) {\n            sum += score[i][j];\n            if (sum >= k) {\n                need[i] = j + 1; break ;\n            }\n        }\n        if (sum < k) { puts(\"-1\"); return 0; }\n        ans += need[i];\n        if (need[i] > mx_meed) mx_meed = need[i], mx_need_i = i;\n    }\n    if (mx_meed - 1 <= ans - mx_meed) { cout << ans << endl; return 0; }\n    int last = 0;\n    for (int i = 1; i <= m; i ++)\n        if (i != mx_need_i)\n            last += score[i].size() - need[i];\n    cout << (mx_meed - 1 <= ans - mx_meed + last ? 2 * mx_meed - 1 : -1) << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5 10\n1 1 2 3 3\n9 1 10 10 1",
              "expectedOutput": "4"
            },
            {
              "input": "2 4 10\n1 1 1 2\n1 2 7 10",
              "expectedOutput": "-1"
            }
          ]
        },
        {
          "id": "l6_202412_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划的描述，（ ）是正确的。",
          "options": [
            "A. 动态规划适用于没有重叠子问题的优化问题。",
            "B. 动态规划要求问题具有最优子结构和无后效性。",
            "C. 动态规划通常通过递归来实现。",
            "D. 动态规划与贪心算法不同，贪心算法不适用于有重叠子问题的问题。"
          ],
          "answer": 1,
          "explanation": "动态规划要求问题具有最优子结构（整体最优由子问题最优构成）和无后效性（当前决策只依赖之前的状态）。它需要重叠子问题才有保存价值的优势，A错；通常用递推实现，C错；贪心与重叠子问题无必然冲突，D错，故选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "假设背包的最大容量【见原卷】，共有4个物品可供选择，4个物品的重量分别为【见原卷】，对应的价值分别为【见原卷】，则该0-1背包问题中，背包的最大价值为（ ）。",
          "options": [
            "A. 70",
            "B. 90",
            "C. 100",
            "D. 120"
          ],
          "answer": 2,
          "explanation": "0-1背包用动态规划dp[i][w]=max(dp[i-1][w], dp[i-1][w-wi]+vi)逐项求解。按题中给定的容量与4个物品的重量、价值计算，背包能够获得的最大价值为100，故答案选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在解决简单背包问题时，动态规划的状态转移方程dp[i][w]=max(dp[i-1][w], dp[i-1][w-weights[i-1]]+values[i-1])：不放物品i则价值是dp[i-1][w]，放入物品i则价值是dp[i-1][w-weights[i-1]]+values[i-1]。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "该状态转移方程是0-1背包的标准写法：不选第i个物品沿用前i-1个物品在容量w下的价值，选第i个物品则空出weights[i-1]容量并加上其价值，取两者较大值，说法正确。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_07",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "关于动态规划的描述，正确的是（ ）。",
          "options": [
            "A. 动态规划算法的时间复杂度总是低于贪心算法。",
            "B. 动态规划要求问题必须具有最优子结构和重叠子问题两个性质。",
            "C. 动态规划通过递归实现时不需要存储中间结果。",
            "D. 动态规划的核心思想是将问题分解为互不重叠的子问题。"
          ],
          "answer": 1,
          "explanation": "动态规划的适用条件是最优子结构和重叠子问题：前者保证子问题最优可组合成整体最优，后者使保存中间结果有意义。A说法绝对，C不存储中间结果会退化为低效递归，D“互不重叠”是分治的特点，故答案选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_13",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了0/1背包问题的动态规划解法。假设物品重量为weights[]，价值为values[]，背包容量为W，横线上应填写（ ）。\nfor(int i=1;i<=n;i++) for(int j=1;j<=W;j++){ if(weights[i-1]>j) dp[i][j]=dp[i-1][j]; else dp[i][j]=max(______); }",
          "options": [
            "A. dp[i-1][j], values[i-1]",
            "B. dp[i-1][j], dp[i-1][j - weights[i-1]] + values[i-1]",
            "C. dp[i][j-1], values[i-1]",
            "D. dp[i-1][j - weights[i-1]] + values[i-1], dp[i][j-1]"
          ],
          "answer": 1,
          "explanation": "0-1背包的标准转移：不装第i个物品为dp[i-1][j]，装入则为dp[i-1][j-weights[i-1]]+values[i-1]，取两者较大值，即max(dp[i-1][j], dp[i-1][j-weights[i-1]]+values[i-1])，选B。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_22",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在动态规划解决一维硬币找零问题时，若硬币面额为[1, 3, 4]，目标金额为6，则最少需要2枚硬币（3+3）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "硬币面额为1、3、4，目标金额6。用两枚3元硬币凑成3+3=6正好只需2枚；若用面额4和1则需要3枚（4+1+1），用面额1则需要6枚。因此最少需要2枚硬币的说法正确，故选“正确”。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划算法特性的描述，正确的是（   ）。",
          "options": [
            "A. 子问题相互独立，不重叠",
            "B. 问题包含重叠子问题和最优子结构",
            "C. 只能从底至顶迭代求解",
            "D. 必须使用递归实现，不能使用迭代"
          ],
          "answer": 1,
          "explanation": "动态规划的两个基本要素是重叠子问题和最优子结构：子问题被重复求解时可用表格缓存，最优子结构保证子问题最优解能推出原问题最优解。子问题相互独立是分治的特点；DP 既可以从底向上迭代，也可以递归加记忆化，故 A、C、D 说法都不正确，选 B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定 n 个物品和一个最大承重为 W 的背包，每个物品只能选择放或不放，目标是总价值最大且总重量不超过 W。关于下面代码，说法正确的是（   ）。\nint knapsack1D(int W, vector<int>& wt, vector<int>& val, int n) {\nvector<int> dp(W+1, 0);\nfor (int i = 0; i < n; ++i) {\nfor (int w = W; w >= wt[i]; --w) {\ndp[w] = max(dp[w], dp[w - wt[i]] + val[i]);\n}\n}\nreturn dp[W];\n}",
          "options": [
            "A. 该算法不能处理背包容量为 0 的情况",
            "B. 外层循环 i 遍历背包容量，内层遍历物品",
            "C. 从大到小遍历 w 是为了避免重复使用同一物品",
            "D. 这段代码计算的是最小重量而非最大价值"
          ],
          "answer": 2,
          "explanation": "这是 0/1 背包一维 DP。外层 i 遍历物品，内层 w 从大到小遍历容量，保证 dp[w-wt[i]] 仍是上一件物品的状态，避免同一件物品被多次选择。A、B、D 说法均错误。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：学习小组\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：班主任计划将班级里的 n 名同学划分为若干个学习小组，每名同学都需要分入某一个学习小组中。如果一个学习小组中恰好包含 i 名同学，则该学习小组的讨论积极度为 a[i]。给定讨论积极度 a，请你计算将这 n 名同学划分为学习小组的所有可能方案中，讨论积极度之和的最大值。\n输入格式：第一行一个正整数 n，表示班级人数。第二行 n 个非负整数，表示不同人数学习小组的讨论积极度。\n输出格式：输出共一行，一个整数，表示所有划分方案中讨论积极度之和的最大值。\n【数据范围】\n1 ≤ n ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：把 n 名同学划分成若干个小组，等价于用若干份大小 i 拼出总数 n，每份贡献 a[i]。设 f[i] 为恰好 i 名同学的方案中积极度之和的最大值，则 f[i]=max(f[j]+f[i-j])，即枚举最后一次划分的大小，用完全背包式递推求 f[n]。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1005;\nint n;\nint a[N];\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%d\", &a[i]);\n        for (int j = 1; j < i; j++)\n            a[i] = max(a[i], a[j] + a[i - j]);\n    }\n    printf(\"%d\\n\", a[n]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 5 6 3\n",
              "expectedOutput": "10\n"
            },
            {
              "input": "8\n0 2 5 6 4 3 3 4\n",
              "expectedOutput": "12\n"
            }
          ]
        },
        {
          "id": "l6_202509_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定 n 个物品和一个最大承重为 W 的背包，每个物品只能选择放或不放，目标是总价值最大且总重量不超过 W，则横线上应填写（   ）。\nint knapsack(int W, vector<int>& wt, vector<int>& val, int n) {\nvector<int> dp(W+1, 0);\nfor (int i = 0; i < n; ++i) {\nfor (int w = W; w >= wt[i]; --w) {\n________________________\n}\n}\nreturn dp[W];\n}",
          "options": [
            "A. dp[w] = max(dp[w], dp[w] + val[i]);",
            "B. dp[w] = dp[w - wt[i]] + val[i];",
            "C. dp[w] = max(dp[w - 1], dp[w - wt[i]] + val[i]);",
            "D. dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);"
          ],
          "answer": 3,
          "explanation": "0/1 背包状态转移：不选当前物品保持 dp[w]，选则在容量 w-wt[i] 的基础上加 val[i]，取二者最大值，即 dp[w]=max(dp[w], dp[w-wt[i]]+val[i])。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "下面代码实现了动态规划版本的斐波那契数列计算，其时间复杂度是 O(2^n)。\nint fib_dp(int n) {\nif (n <= 1) return n;\nvector<int> dp(n+1);\ndp[0] = 0; dp[1] = 1;\nfor (int i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];\nreturn dp[n];\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "该代码用一维数组 dp 自底向上递推，每个 dp[i] 只计算一次，循环执行 n-1 次，时间复杂度是 O(n)。O(2^n) 是朴素递归不缓存结果时的复杂度，与这段 DP 代码不符，故说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_25",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "有一排香蕉，每个香蕉有不同的甜度值。小猴子想吃香蕉，但不能吃相邻的香蕉。以下代码能找到小猴子吃到最甜的香蕉组合。\nvector<int> bananas = {1, 2, 3, 1};\nvector<int> dp(bananas.size());\ndp[0] = bananas[0];\ndp[1] = max(bananas[0], bananas[1]);\nfor (int i = 2; i < bananas.size(); i++) {\ndp[i] = max(bananas[i] + dp[i-2], dp[i-1]);\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "这是打家劫舍类 DP：dp[i] 表示前 i 个香蕉能取得的最大甜度，要么不吃第 i 个（dp[i-1]），要么吃第 i 个并取 dp[i-2]，取最大值，正确求解该问题。说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：划分字符串\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：小 A 有一个由 n 个小写字母组成的字符串 s。他希望将 s 划分为若干个子串，使得子串中每个字母至多出现一次。例如对于字符串 street，str + e + e + t 是满足条件的划分；而 s + tree + t 不是，因为子串 tree 中 e 出现了两次。额外地，小 A 还给出了价值 a，表示划分后长度为 len 的子串价值为 a[len]。小 A 希望最大化划分后得到的子串价值之和。\n输入格式：第一行一个正整数 n，表示字符串长度。第二行一个包含 n 个小写字母的字符串。第三行 n 个正整数，表示不同长度的子串价值。\n输出格式：一行，一个整数，表示划分后子串价值之和的最大值。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：设 f[i] 为前 i 个字符划分的最大价值。枚举最后一段 [j..i]，用掩码记录该段中出现的字母，遇到重复字母就停止枚举；若该段无重复字母，则 f[i]=max(f[i], f[j-1]+a[i-j+1])。复杂度 O(n^2)，用位运算快速判断重复。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": "#include <algorithm>\n#include <cstdio>\n#include <vector>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nchar s[N];\nint a[N];\nlong long f[N];\nint main() {\n    scanf(\"%d\", &n);\n    scanf(\"%s\", s + 1);\n    for (int i = 1; i <= n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 1; i <= n; i++) {\n        int mask = 0;\n        for (int j = i; j; j--) {\n            int cur = 1 << (s[j] - 'a');\n            if (mask & cur) break;\n            mask |= cur;\n            f[i] = max(f[i], f[j - 1] + a[i - j + 1]);\n        }\n    }\n    printf(\"%lld\\n\", f[n]);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "6\nstreet\n2 1 7 4 3 3\n",
              "expectedOutput": "13\n"
            },
            {
              "input": "8\nblossoms\n1 1 2 3 5 8 13 21\n",
              "expectedOutput": "8\n"
            }
          ]
        },
        {
          "id": "l6_202512_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "0/1 背包（每件物品最多选一次）问题通常可用一维动态规划求解，核心代码如下。则下面说法正确的是（   ）。\nfor each item (w, v):\nfor (int j = W; j >= w; --j)\ndp[j] = max(dp[j], dp[j-w] + v);",
          "options": [
            "A. 内层 j 必须从小到大，否则会漏解",
            "B. 内层 j 必须从大到小，否则同一件物品会被用多次",
            "C. j 从大到小或从小到大都一样",
            "D. 只要 dp 初始为 0，方向无所谓"
          ],
          "answer": 1,
          "explanation": "0/1 背包内层必须从大到小遍历容量，保证 dp[j-w] 是上一件物品的状态；若从小到大，dp[j-w] 可能已被本件物品更新过，导致一件物品被使用多次（退化为完全背包）。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于动态规划的说法中，错误的是（ ）。",
          "options": [
            "A. 动态规划方法通常能够列出递推公式。",
            "B. 动态规划方法的时间复杂度通常为状态的个数。",
            "C. 动态规划方法有递推和递归两种实现形式。",
            "D. 对很多问题，递推实现和递归实现动态规划方法的时间复杂度相当。"
          ],
          "answer": 1,
          "explanation": "动态规划的时间复杂度是状态总数乘以每个状态转移的代价，而不是简单等于状态个数。A 说 DP 通常可列出递推公式、C 说 DP 有递推和递归两种实现、D 说两种实现时间复杂度相当，均正确；只有 B 说法不准确，故选 B。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "小杨在玩一个闯关游戏，从第 1 关走到第 4 关。每一关的体力消耗如下（下标表示关卡编号）：cost = [0, 3, 5, 2, 4]，其中 cost[i] 表示到达第 i 关需要消耗的体力，cost[0]=0 表示开始状态。小杨每次可以从当前关卡前进 1 步或 2 步。按照上述规则，从第 1 关到第 4 关所需消耗的最小体力为 7。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "cost 数组下标即关卡编号，cost[i] 表示到达第 i 关消耗的体力。从第 1 关到第 4 关每次前进 1 或 2 步，最优走法是 1→3→4，消耗 cost[3]+cost[4]=2+4=6；若把到达第 1 关的体力 3 也算上则为 9。最小为 6，不是 7，说法错误。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_27",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：道具商店\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：道具商店里有 n 件道具可供挑选。第 i 件道具可为玩家提升 a[i] 点攻击力，需要 c[i] 枚金币才能购买，每件道具只能购买一次。现在你有 k 枚金币，请问你最多可以提升多少点攻击力？\n输入格式：第一行两个正整数 n, k，表示道具数量以及所拥有的金币数量。接下来 n 行，每行两个正整数 a[i], c[i]，表示道具提升的攻击力点数和购买所需金币数量。\n输出格式：输出一行，一个整数，表示最多可以提升的攻击力点数。",
          "options": [],
          "answer": null,
          "explanation": "思路：0/1 背包，但以攻击力为状态、金币为代价：设 f[j] 为获得至少 j 点攻击力所需的最少金币。按道具逐个更新，f[j]=min(f[j], f[j-a[i]]+c[i])，最后找出 f[j]<=k 的最大 j 即为答案。攻击力总和有限，复杂度可接受。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 505;\nconst int oo = 1e9 + 10;\nint n, k;\nint f[N * N];\nint main() {\n    scanf(\"%d%d\", &n, &k);\n    for (int i = 1; i < N * N; i++)\n        f[i] = oo;\n    int s = 0;\n    for (int i = 1; i <= n; i++) {\n        int a, c;\n        scanf(\"%d%d\", &a, &c);\n        s += a;\n        for (int j = s; j >= a; j--)\n            f[j] = min(f[j], f[j - a] + c);\n    }\n    int ans = 0;\n    for (int i = 0; i < N * N; i++)\n        if (f[i] <= k)\n            ans = i;\n    printf(\"%d\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 5\n99 1\n33 2\n11 3\n",
              "expectedOutput": "132\n"
            },
            {
              "input": "4 100\n10 1\n20 11\n40 33\n100 99\n",
              "expectedOutput": "110\n"
            }
          ]
        },
        {
          "id": "l6_202603_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "小朋友们去邻里拜年，每个家里有不同数量的糖果。规则是：不能连续进入两个相邻的房子（即不能同时取相邻两家的糖果）。目标是拿到最多糖果。以下是代码实现，请补全横线。\nint visit(vector<int>& nums) {\nif (nums.empty()) return 0;\nint size = nums.size();\nif (size == 1) return nums[0];\nvector<int> dp = vector<int>(size, 0);\ndp[0] = nums[0];\ndp[1] = max(nums[0], nums[1]);\nfor (int i = 2; i < size; i++) {\ndp[i] = ______;\n}\nreturn dp[size - 1];\n}",
          "options": [
            "A. dp[i] = dp[i - 1] + nums[i];",
            "B. dp[i] = max(dp[i - 1], dp[i - 2] * nums[i]);",
            "C. dp[i] = max(dp[i - 1], dp[i - 2] + nums[i]);",
            "D. dp[i] = dp[i - 2] + nums[i];"
          ],
          "answer": 2,
          "explanation": "打家劫舍型 DP：取第 i 家得 dp[i-2]+nums[i]，不取则为 dp[i-1]，取两者最大值，即 dp[i]=max(dp[i-1], dp[i-2]+nums[i])。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "元宵节晚上，小朋友沿着一条发光石板路前进，每次可向前走 1 块或 2 块石板。动态规划定义如下：dp[i] = dp[i-1] + dp[i-2]，下面关于 dp[i] 的含义最合适的是（ ）。",
          "options": [
            "A. 走到第 i 块石板的不同走法数量",
            "B. 走到第 i 块石板时，已经走过的石板总数",
            "C. 从第 i 块石板走回起点的最少步数",
            "D. 从第 i 块石板走回起点的最大步数"
          ],
          "answer": 0,
          "explanation": "每次走 1 或 2 块，到达第 i 块石板的走法等于从 i-1 走 1 步加上从 i-2 走 2 步，即 dp[i]=dp[i-1]+dp[i-2]，所以 dp[i] 表示不同走法数量。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_24",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "下列代码实现了一个 0-1 背包的一维动态规划代码，内层循环是经典的逆序写法。若将内层循环改成正序遍历（即 for (int j = w[i]; j <= W; j++)），仍能得到正确答案。\nfor (int i = 0; i < n; i++) {\nfor (int j = W; j >= w[i]; j--) {\ndp[j] = max(dp[j], dp[j - w[i]] + v[i]);\n}\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "0/1 背包要求每件物品最多选一次，逆序遍历保证 dp[j-w[i]] 还是上一件物品处理后的状态。若改为从小到大正序遍历，dp[j-w[i]] 可能已被当前物品更新，同一件物品会被重复放入，退化成完全背包，得不到正确答案，说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_25",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "在动态规划问题中，状态空间相同且没有重复计算的情况下，状态转移方程+递推 与 递归+记忆化搜索 的时间复杂度通常相同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "递推和记忆化搜索都只计算每个状态一次：递推按拓扑序自底向上填充表，记忆化搜索自顶向下递归并在缓存中记录结果。当状态空间相同且无重复计算时，两者对每个状态都做一次常数转移，时间复杂度通常相同，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：选数\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：给定两个包含 n 个整数的数组 a 与 b。你需要指定若干下标 i1, i2, ..., ik（1 <= i <= n）使得：相邻选中的下标满足 ik+1 >= ik + b[ik]（即选中 i 后至少跳 b[i] 个位置），并最大化所选下标对应 a[i] 的整数之和。\n输入格式：第一行一个正整数 n，表示数组长度。第二行 n 个非负整数，表示数组 a。第三行 n 个非负整数，表示数组 b。\n输出格式：一行，一个整数，表示所选下标的 a 值之和的最大值。\n【数据范围】\n1 ≤ n ≤ 100000",
          "options": [],
          "answer": null,
          "explanation": "思路：DP 递推。设 f[i] 为考虑前 i 个下标可选出的最大和。对每个 i：不选 i 则 f[i+1]=max(f[i+1], f[i])；选 i 则收益 f[i]+a[i] 并更新答案，同时令 f[i+b[i]]=max(f[i+b[i]], f[i]+a[i])。扫描一遍取最大即可。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 1e5 + 5;\nint n;\nint a[N], b[N];\nlong long f[N], ans;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++)\n        scanf(\"%d\", &a[i]);\n    for (int i = 1; i <= n; i++)\n        scanf(\"%d\", &b[i]);\n    for (int i = 1; i <= n; i++) {\n        ans = max(ans, f[i] + a[i]);\n        if (i + b[i] <= n)\n            f[i + b[i]] = max(f[i + b[i]], f[i] + a[i]);\n        f[i + 1] = max(f[i + 1], f[i]);\n    }\n    printf(\"%lld\\n\", ans);\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 2 3 4\n3 3 1 1\n",
              "expectedOutput": "7\n"
            },
            {
              "input": "6\n1 1 4 5 1 4\n1 2 3 2 1 0\n",
              "expectedOutput": "11\n"
            }
          ]
        },
        {
          "id": "l6_202606_14",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个整数数组 a，每个元素表示一个位置上的数值。要求从数组中选择若干个元素，使得任意两个被选择的元素在原数组中都不相邻，并且所选元素的总和最大。函数 choose(vector<int>& a) 返回能够得到的最大总和，则横线处应填写（  ）。\nint choose(vector<int>& a) {\nif (a.empty()) return 0;\nint n = a.size();\nif (n == 1) return a[0];\nvector<int> dp(n, 0);\ndp[0] = a[0];\ndp[1] = max(a[0], a[1]);\nfor (int i = 2; i < n; ++i) {\ndp[i] = __________________________;\n}\nreturn dp[n - 1];\n}",
          "options": [
            "A. dp[i - 1] + a[i]",
            "B. max(dp[i - 1], dp[i - 2] + a[i])",
            "C. max(dp[i - 2], a[i])",
            "D. dp[i - 1] + dp[i - 2]"
          ],
          "answer": 1,
          "explanation": "打家劫舍 DP：不取第 i 个为 dp[i-1]，取第 i 个为 dp[i-2]+a[i]，取两者最大值，即 max(dp[i-1], dp[i-2]+a[i])。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_15",
          "kp": "kp6_10",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码实现 0/1 背包的一维动态规划。第 i 个物品重量为 wt[i]，价值为 val[i]，背包容量为 W。横线处应填写（  ）。\nint knapsack(int W, vector<int>& wt, vector<int>& val) {\nint n = wt.size();\nvector<int> dp(W + 1, 0);\nfor (int i = 0; i < n; ++i) {\nfor (int w = W; w >= wt[i]; --w) {\n__________________________\n}\n}\nreturn dp[W];\n}",
          "options": [
            "A. dp[w] = max(dp[w], dp[w - wt[i]] + val[i]);",
            "B. dp[w] = max(dp[w - 1], dp[w - wt[i]] + val[i]);",
            "C. dp[w] = dp[w] + val[i];",
            "D. dp[w - wt[i]] = max(dp[w], val[i]);"
          ],
          "answer": 0,
          "explanation": "0/1 背包的状态转移为 dp[w]=max(dp[w], dp[w-wt[i]]+val[i])，表示容量 w 下要么不选当前物品、要么在剩余容量 w-wt[i] 的基础上选它。内层从大到小遍历容量，保证每件物品最多被选一次，故选 A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_25",
          "kp": "kp6_10",
          "type": "judge",
          "difficulty": 1,
          "question": "动态规划问题通常要求具有最优子结构，并且常常存在重叠子问题。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "动态规划适用于具有最优子结构和重叠子问题的问题：最优子结构指问题的最优解包含子问题的最优解，可由子问题递推；重叠子问题指递归求解时大量子问题被重复计算，可通过表格存储避免重复，说法正确。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_26",
          "kp": "kp6_10",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：条形蛋糕\n时间限制：1.0 s  内存限制：512.0 MB\n题目描述：寒假到了，小杨同学打算找一份兼职。店长每天会做一条长条蛋糕，不同长度的蛋糕块卖出的价格不同。给定一条长度为 n 的长条蛋糕和一个价格表，价格表表示长度为 i 的蛋糕块的价格为 p[i]。求蛋糕的分割方案，使得总销售价格最大，注意蛋糕块的长度必须为整数。\n输入格式：第一行一个正整数 n，表示长条蛋糕的总长度。第二行 n 个正整数，表示不同长度蛋糕块的价格。\n输出格式：一行一个正整数，表示最大总销售价格。\n【数据范围】\n1 ≤ n ≤ 1000",
          "options": [],
          "answer": null,
          "explanation": "思路：钢条切割（完全背包）DP。dp[j] 表示长度为 j 的蛋糕能卖到的最大价格，枚举切割块长度 i（1<=i<=j），dp[j]=max(dp[j], dp[j-i]+p[i])。因为可以切多段同长度，长度 i 从小到大枚举可无限次使用。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": "#include <iostream>\nusing namespace std;\nint dp[1010], p[1010];\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; ++i)\n        cin >> p[i];\n    for (int i = 1; i <= n; ++i) {\n        for (int j = i; j <= n; ++j) {\n            dp[j] = max(dp[j], dp[j - i] + p[i]);\n        }\n    }\n    cout << dp[n] << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n1 5 8 9\n",
              "expectedOutput": "10\n"
            },
            {
              "input": "10\n1 5 8 9 10 17 17 20 24 30\n",
              "expectedOutput": "30\n"
            }
          ]
        }
      ]
    },
    "kp6_11": {
      "title": "面向对象思想",
      "questions": [
        {
          "id": "l6_202309_01",
          "kp": "kp6_11",
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
          "explanation": "手写板的作用是把人在板上书写的笔迹采集并输入到电脑中，属于输入设备。它并不向外界输出信息，也不负责控制其他设备或记录数据。常见的输入设备还有键盘、鼠标、扫描仪等，手写板本质也是把外部信息送进计算机的设备，因此选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_02",
          "kp": "kp6_11",
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
          "explanation": "a是b的3倍应写成a==3*b。A把a右移3位相当于除以8，含义不对；B只判断a减b能否被3整除，不能保证倍数关系；C用整型除法，如a=7、b=2时a/b也等于3，会误判。只有D精确，选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_03",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "以下不属于面向对象程序设计语言的是（ ）。",
          "options": [
            "A. C++",
            "B. Python",
            "C. Java",
            "D. C"
          ],
          "answer": 3,
          "explanation": "C语言是典型的面向过程程序设计语言，它以函数为基本单位，按照步骤组织程序，不支持类和对象、封装、继承等面向对象特性。C++、Python、Java都支持面向对象编程，因此不属于面向对象语言的是C，答案选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_16",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "TCP/IP的传输层的两个不同的协议分别是UDP和TCP。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "TCP/IP协议族中传输层主要有两个协议：面向连接、可靠传输的TCP和无连接、不可靠但高效的UDP。题干关于传输层两个协议的说法完全正确，故选“正确”。这部分属于计算机网络基础常识，常作为判断题出现。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_17",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "5G网络中，5G中的G表示Gigabytes/s，其中1 GB = 1024 MB。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "5G中的G是generation（代）的简写，表示第五代移动通信技术，而不是Gigabytes（吉字节）。题干把G误解为存储单位，还牵强地联系到1GB=1024MB的换算，说法错误，故选“错误”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_18",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "在面向对象中，类是对象的实例。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "类与对象的关系是：类是模板或蓝图，用来描述一类事物的共同属性和行为；对象则是按照类这个模板创建出来的具体实例。因此正确的说法是“对象是类的实例”，题干把类与对象的关系说反了，说法错误，故选“错误”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "关于C++类和对象的说法，错误的是（ ）。",
          "options": [
            "A. 在C++中，一切皆对象，即便是字面量如整数5等也是对象",
            "B. 在C++中，可以自定义新的类，并实例化为新的对象",
            "C. 在C++中，内置函数和自定义函数，都是类或者对象",
            "D. 在C++中，可以在自定义函数中嵌套定义新的函数"
          ],
          "answer": 3,
          "explanation": "C++中不允许在自定义函数内部再嵌套定义新的函数，D说法错误。A、B、C分别描述“字面量也是对象（广义）”“可自定义类并实例化”“函数也是类或对象”的说法，均为可接受的知识点，故答案选D。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_12",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关布尔类型的函数的说法，正确的是（ ）。",
          "options": [
            "A. bool类型函数只能返回0或者1两种值",
            "B. bool类型函数可以返回任何整数值",
            "C. bool类型函数必须有参数传递",
            "D. bool类型函数没有返回值"
          ],
          "answer": 0,
          "explanation": "bool类型函数返回类型是bool，只能返回true或false（即1或0）两种值，A正确。函数不一定需要参数，且bool函数是有返回值的，B、C、D说法都错误，故答案选A。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_13",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "通讯卫星在通信网络系统中主要起到（ ）的作用。",
          "options": [
            "A. 信息过滤",
            "B. 信号中继",
            "C. 避免攻击",
            "D. 数据加密"
          ],
          "answer": 1,
          "explanation": "通信卫星把接收到的无线电信号放大后再转发到另一个地球站，起到信号中继（转发）的作用，从而跨越地理距离实现远距离通信。它不负责信息过滤、防攻击或数据加密，故答案选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_14",
          "kp": "kp6_11",
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
          "explanation": "埃氏筛、线性筛都可以预处理出素数表来判断素数，枚举法逐个试除也能判断。而二分答案适用于单调、可判定的最优化问题，无法用来判断一个数是否为素数，C不合适，故答案选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_15",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "内排序有不同的类别，下面哪种排序算法和冒泡排序是同一类？（ ）",
          "options": [
            "A. 希尔排序",
            "B. 快速排序",
            "C. 堆排序",
            "D. 插入排序"
          ],
          "answer": 1,
          "explanation": "按排序方法分类：交换排序包括冒泡排序和快速排序；选择排序包括简单选择排序和堆排序；插入排序包括直接插入排序和希尔排序。冒泡排序与快速排序同属交换排序，故答案选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_16",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "在面向对象中，方法在C++的class中表现为class内定义的函数。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "在面向对象中，“方法”指的是对象能够执行的行为或操作，在C++中就是类内部定义的成员函数。因此“方法在C++的class中表现为class内定义的函数”的说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_02",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "面向对象的编程思想主要包括以下哪些原则（ ）？",
          "options": [
            "A. 贪心、动态规划、回溯",
            "B. 并发、并行、异步",
            "C. 递归、循环、分治",
            "D. 封装、继承、多态"
          ],
          "answer": 3,
          "explanation": "面向对象编程（OOP）的三大核心特性是封装、继承和多态：封装把数据和行为捆绑并隐藏实现细节，继承实现代码复用，多态允许同一接口有不同的行为。这与A、B、C所列的算法思想无关，故答案选D。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_13",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "线性筛法与埃氏筛法相比的优势是（ ）。",
          "options": [
            "A. 更容易实现",
            "B. 更节省内存",
            "C. 更快速",
            "D. 更准确"
          ],
          "answer": 2,
          "explanation": "线性筛法（欧拉筛）保证每个合数只被其最小质因子筛掉一次，避免了埃氏筛中合数被重复标记的问题，整体时间复杂度为O(N)，比埃氏筛O(N log log N)更快，故答案选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_14",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码使用了辗转相除法求解最大公因数，请在横线处填入（ ），使其能正确实现相应功能。\nint gcd(int a, int b) { while (b != 0) { ______ } return a; }",
          "options": [
            "A. int temp = b; b = a / b; a = temp;",
            "B. int temp = a; a = b / a; b = temp;",
            "C. int temp = b; b = a % b; a = temp;",
            "D. b = a % b; a = b;"
          ],
          "answer": 2,
          "explanation": "辗转相除法：每轮用a%b替换b，原来的b赋给a。即先保存temp=b，然后b=a%b，a=temp。A、B用的是除法而不是取余，D先改b再赋a会出错，只有C正确，故答案选C。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_18",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "继承是将已有类的属性和方法引入新类的过程。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "继承允许新类（派生类）获得已有类（基类）的属性和方法，并在此基础上扩展新的功能，这正是把已有类的属性和方法引入新类的过程，是面向对象代码复用的重要手段，说法正确。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "面向对象的编程思想主要包括（ ）原则。",
          "options": [
            "A. 贪心、动态规划、回溯",
            "B. 并发、并行、异步",
            "C. 递归、循环、分治",
            "D. 封装、继承、多态"
          ],
          "answer": 3,
          "explanation": "面向对象编程的核心原则是封装（隐藏实现细节）、继承（代码复用）和多态（同一接口多种实现），即D选项所列的三项。A、B、C列出的分别是算法设计和并发编程概念，故答案选D。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "以下（ ）没有涉及C++语言的面向对象特性支持。",
          "options": [
            "A. C++中构造一个class或struct",
            "B. C++中调用printf函数",
            "C. C++中调用用户定义的类成员函数",
            "D. C++中构造来源于同一基类的多个派生类"
          ],
          "answer": 1,
          "explanation": "printf是C语言风格的标准库函数，属于面向过程调用，不涉及面向对象的类、对象、继承等特性。构造class/struct、调用类成员函数、构造多个派生类都与面向对象有关，故答案选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_16",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "C++、Python和JAVA等都是面向对象的编程语言。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++、Python、Java都支持类和对象、封装、继承、多态等面向对象特性，都属于面向对象编程语言。因此“C++、Python和JAVA等都是面向对象的编程语言”的说法正确，故选“正确”。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "面向对象编程（OOP）是一种特殊的程序设计方法。下面（ ）不是重要的OOP特性。",
          "options": [
            "A. 抽象",
            "B. 封装",
            "C. 继承",
            "D. 模块化"
          ],
          "answer": 3,
          "explanation": "面向对象编程的重要特性包括抽象、封装、继承和多态，它们共同支持代码复用、信息隐藏和动态绑定。模块化是程序设计中的通用思想，并非OOP特有的核心特性，故答案选D。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "在面向对象编程中，类是一种重要的概念。下面关于类的描述中，不正确的是（ ）。",
          "options": [
            "A. 类是一个抽象的概念，用于描述具有相同属性和行为的对象集合。",
            "B. 类可以包含属性和方法，属性用于描述对象的状态，方法用于描述对象的行为。",
            "C. 类可以被实例化，生成具体的对象。",
            "D. 类一旦定义后，其属性和方法不能被修改或扩展。"
          ],
          "answer": 3,
          "explanation": "类定义后可以通过继承在派生类中扩展属性和方法，也可以通过运算符重载等方式扩展功能，并非“一旦定义就不能被修改或扩展”，D的说法不正确。A、B、C都是对类的正确描述，故答案选D。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_23",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "面向对象编程中，封装是指将数据和行为绑定在一起，并对外隐藏实现细节。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "封装是面向对象的特性之一：把数据（属性）和行为（方法）捆绑在类中，并通过私有/公有访问控制对外隐藏内部实现细节，外部只能通过公有接口访问，题干说法正确。访问控制与信息隐藏是封装的核心目的。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_01",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下列哪一项不是面向对象编程的基本特征？",
          "options": [
            "A. 继承",
            "B. 封装",
            "C. 多态",
            "D. 链接"
          ],
          "answer": 3,
          "explanation": "面向对象编程的三大基本特征是继承、封装和多态：继承让子类复用父类的成员，封装把数据和对数据的操作绑定并隐藏细节，多态让同一接口因对象实际类型不同而表现出不同行为。链接是程序编译连接阶段的概念，不属于面向对象编程的特征，故选D。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_02",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "假设变量 veh 是类 Car 的一个实例，我们可以调用 veh.move()，是因为面向对象编程有（   ）性质。",
          "options": [
            "A. 继承 (Inheritance)",
            "B. 封装 (Encapsulation)",
            "C. 多态 (Polymorphism)",
            "D. 链接 (Linking)"
          ],
          "answer": 0,
          "explanation": "move() 定义在基类 Vehicle 中，Car 通过继承获得该方法，因此 veh.move() 可以直接调用，这体现的是继承性质。封装、多态都与本题现象无关。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_03",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码中 v1 和 v2 调用了相同接口 move()，但输出结果不同，这体现了面向对象编程的（   ）特性。",
          "options": [
            "A. 继承 (Inheritance)",
            "B. 封装 (Encapsulation)",
            "C. 多态 (Polymorphism)",
            "D. 链接 (Linking)"
          ],
          "answer": 2,
          "explanation": "Vehicle 的 move() 是虚函数，Car 和 Bike 各自重写，v1、v2 通过基类指针调用 move() 时发生动态绑定，输出不同结果，这正是多态。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_02",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "执行如下代码，会输出 钢琴：叮咚叮咚 和 吉他：咚咚当当。这体现了面向对象编程的（   ）特性。",
          "options": [
            "A. 继承",
            "B. 封装",
            "C. 多态",
            "D. 链接"
          ],
          "answer": 2,
          "explanation": "Piano 和 Guitar 都重写了 Instrument 的虚函数 play()，通过基类指针数组调用 play() 时分别输出各自的声音，这是多态的典型体现。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_17",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "面向对象编程中，封装是指将数据和操作数据的方法绑定在一起，并对外隐藏实现细节。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "封装是面向对象三大特性之一，指把数据成员和对这些数据进行操作的方法绑定在同一个类中，并利用 private、protected 等访问权限把内部实现细节对外隐藏，只通过公有接口与外部交互，从而提高安全性和可维护性，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_02",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码中，s1->draw(); 和 s2->draw(); 输出不同结果的主要原因是（ ）。\nclass Shape {\npublic:\nvirtual void draw() { cout << \"绘制图形\" << endl; }\nvirtual ~Shape() {}\n};\nclass Circle : public Shape {\npublic:\nvoid draw() override { cout << \"绘制圆形\" << endl; }\n};\nclass Rectangle : public Shape {\npublic:\nvoid draw() override { cout << \"绘制矩形\" << endl; }\n};",
          "options": [
            "A. draw() 是普通成员函数",
            "B. Shape 中的 draw() 被声明为虚函数",
            "C. Circle 和 Rectangle 中使用了 public 继承",
            "D. 指针变量名不同"
          ],
          "answer": 1,
          "explanation": "Shape 中的 draw() 是虚函数，s1 实际指向 Circle 对象，s2 实际指向 Rectangle 对象，通过基类指针调用虚函数时发生动态绑定，分别执行 Circle 和 Rectangle 重写后的 draw()，因此输出不同。根本原因是虚函数加动态绑定，故选 B。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_17",
          "kp": "kp6_11",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 中的继承支持单继承和多继承，但子类无法直接访问父类的私有成员。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++ 中一个类可以继承一个基类（单继承），也可以继承多个基类（多继承）。父类的 private 私有成员只能由父类自身访问，子类无论公有、保护还是私有继承都无法直接访问，只能通过父类提供的公有或保护接口间接访问，说法正确。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_02",
          "kp": "kp6_11",
          "type": "choice",
          "difficulty": 1,
          "question": "下列代码中，d1->work(); 和 d2->work(); 输出不同结果的主要原因是（  ）。\nclass Device {\npublic:\nvirtual void work() { cout << \"Device is working\" << endl; }\nvirtual ~Device() {}\n};\nclass Printer : public Device {\npublic:\nvoid work() override { cout << \"Printer is printing\" << endl; }\n};\nclass Scanner : public Device {\npublic:\nvoid work() override { cout << \"Scanner is scanning\" << endl; }\n};",
          "options": [
            "A. Printer 和 Scanner 使用了相同的构造函数。",
            "B. work() 是虚函数，且 d1 和 d2 实际指向不同派生类对象，发生动态绑定。",
            "C. d1 和 d2 是不同的指针变量。",
            "D. 程序中使用了 delete 释放对象。"
          ],
          "answer": 1,
          "explanation": "Device 的 work() 是虚函数，d1 指向 Printer 对象、d2 指向 Scanner 对象，通过基类指针调用虚函数发生动态绑定，分别执行 Printer::work 和 Scanner::work 的重写版本，因此输出不同，这体现了虚函数与多态机制，故选 B。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_12": {
      "title": "类",
      "questions": [
        {
          "id": "l6_202309_04",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下面有关C++类定义的说法，错误的是（ ）。",
          "options": [
            "A. C++类实例化时，会执行构造函数。",
            "B. C++自定义类可以通过定义构造函数实现自动类型转换。",
            "C. C++自定义类可以通过重载>、<等运算符实现大小比较。",
            "D. C++自定义类可以包含任意类型的成员。"
          ],
          "answer": 3,
          "explanation": "类中的数据成员可以是整型、浮点型、字符型、数组、指针、引用等，但不能是抽象类类型，也不能是类自身等，所以D的说法错误。A、B、C都符合C++类的基本知识，故答案选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_05",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，错误的是（ ）。\n【题面含MyStr类定义代码块，见原卷】",
          "options": [
            "A. 代码cout << st << endl; 不会报错，将正常输出ABC。",
            "B. 第6行代码的data是MyStr类的成员变量。",
            "C. 代码MyStr st(\"ABC\"); 不会报错，将执行构造函数。",
            "D. 以上说法均没有错误。"
          ],
          "answer": 0,
          "explanation": "MyStr类没有重载输出运算符<<，因此cout<<st直接输出对象名会报错，A的说法错误。data是类内定义的成员变量，MyStr st(\"ABC\")会调用带参构造函数，B、C正确，故答案选A。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_06",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于命名空间的说法错误的是（ ）。",
          "options": [
            "A. 命名空间可以嵌套，例如namespace A { namespace B { int i;}}。",
            "B. 命名空间只可以在全局定义。",
            "C. 命名空间中可以存放变量和函数。",
            "D. 如果程序中使用了using命令同时引用了多个命名空间，并且命名空间中存在相同的函数，会出现程序运行错误。"
          ],
          "answer": 3,
          "explanation": "不同命名空间里可以定义同名函数，使用using同时引入后若调用该名字会产生二义性，属于编译阶段问题，并非运行错误，D说法错误。A、B、C均为命名空间的正确描述，故答案选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_07",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，正确的是（ ）。\n【题面含ManyData类定义代码块，见原卷】",
          "options": [
            "A. 这段代码不能正常运行。",
            "B. ManyData类可用于构造队列（Queue）数据结构。",
            "C. 在上面代码环境，代码cout << myData.__data[0] << endl; 可以增加到代码main函数末尾（return 0;之前），且不会导致报错。",
            "D. 可以为ManyData类的push()、pop()函数增加异常处理代码，否则在使用ManyData类时可能导致运行时错误或逻辑错误。"
          ],
          "answer": 3,
          "explanation": "ManyData的push()、pop()没有对数组下标做越界检查，如果数组已满还继续push或数组为空就pop，会导致越界等运行时错误或逻辑错误，因此需要增加异常处理，D正确。__data是私有成员，外部不能直接访问，C错误。故答案选D。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_08",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，错误的是（ ）。\n【题面含MoreData类定义代码块，见原卷】",
          "options": [
            "A. MoreData类可用于构造队列（Queue）数据结构。",
            "B. 代码第29行，连续push()的用法将导致编译错误。",
            "C. __data是MoreData类的私有成员，只能在类内访问。",
            "D. 以上说法均没有错误。"
          ],
          "answer": 1,
          "explanation": "对象指向的数组容量为100，而程序中push的元素个数小于100，不会发生越界，因此连续push()不会导致编译错误，B的说法错误。MoreData确实可以用作队列，__data作为私有成员只能在类内访问，故答案选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_15",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "关于C++语言，以下说法不正确的是（ ）。",
          "options": [
            "A. 若对象被定义为常量，则它只能调用以const修饰的成员函数。",
            "B. 所有的常量静态变量都只能在类外进行初始化。",
            "C. 若类A的对象a是类B的静态成员变量，则a在main()函数调用之前应被初始化。",
            "D. 静态全局对象、常量全局对象都是在main函数调用之前完成初始化，执行完main函数后被析构。"
          ],
          "answer": 3,
          "explanation": "官方答案D、B均算对。D中基本类型的全局常量可在编译期完成初始化，说法不准确；B存在特例：const static整型成员可在类内直接初始化（如const static int b=1）。按标准选项，本题选D（官方同时接受B）。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_19",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++类的定义中，使用static修饰符定义的静态成员被该类的所有对象共享。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "静态成员变量使用static修饰，它属于类本身而不属于某个具体的对象，所有对象共享同一份静态成员数据，任何一个对象修改它，其它对象看到的值都会同步改变。因此“静态成员被该类的所有对象共享”的说法正确，故选“正确”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_20",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++类的定义中，可以定义初始化函数或运算符函数等。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "类中既可以定义构造函数等初始化函数，也可以通过运算符重载定义运算符函数（如operator+、operator<等），这些都是类定义所允许的内容。因此“可以定义初始化函数或运算符函数”的说法正确，故选“正确”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_02",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，错误的是（ ）。\n【题面含嵌套类（Rectangle与Point）代码块，见原卷】",
          "options": [
            "A. C++中类内部可以嵌套定义类",
            "B. 在类中定义的类被称为内部类，定义类的类被称为外部类",
            "C. 内部类可以随便访问，不需要通过外部类来访问",
            "D. 代码中Point被称为内部类，可以通过外部类Rectangle来访问 Rectangle::Point"
          ],
          "answer": 2,
          "explanation": "内部类是定义在类内部的类，需要借助外部类来访问（如Rectangle::Point），不能脱离外部类随便访问，所以C的说法错误。A、B、D对内部类的描述都正确，故答案选C。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法，正确的是（ ）。\n【题面含静态成员objCounter访问代码块，见原卷】",
          "options": [
            "A. 第14行代码错误，第15行正确",
            "B. 第15行代码错误，第14行代码正确",
            "C. 第14、15两行代码都正确",
            "D. 第6行代码可修改为objCounter += 1"
          ],
          "answer": 2,
          "explanation": "objCounter是静态成员变量，既可以通过类名加作用域符访问（如ClassName::objCounter），也可以通过对象访问（如obj.objCounter），两种方式都正确，所以C正确。静态成员修改为objCounter+=1属于对私有成员的写法问题，不影响本题。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_17",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "C++类的定义中，可以没有构造函数，会给出默认的构造函数。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "构造函数用于创建对象时完成初始化。如果类中没有定义任何构造函数，编译器会自动生成一个默认的无参构造函数，对象照样可以正常创建。因此“可以没有构造函数，会给出默认构造函数”的说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_18",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "如果某个C++对象（object）支持下标运算符（方括号运算符），则该对象在所对应class中以成员函数的形式进行了重载。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "下标运算符[ ]在C++中需要通过运算符重载来实现，通常重载为类的成员函数，例如vector和string都重载了下标运算符以支持下标访问。因此题干的说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_21",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在下面C++代码中，由于删除了变量ptr，因此ptr所对应的数据也随之删除，故第8行代码被执行时，将报错。（ ）\n【题面含指针删除代码块，见原卷】",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "delete只是释放指针指向的内存，指针变量本身仍然存在，但变成悬空指针，指向的内容不确定。之后再访问该指针可能崩溃也可能正常执行，不一定会报错，说法错误，故选“错误”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_04",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个简单的类定义如下，（ ）语句在类的外部正确地创建了一个Circle对象并调用了getArea函数？\nclass Circle { private: double radius; public: Circle(double r) : radius(r) {} double getArea() { return 3.14*radius*radius; } };",
          "options": [
            "A. Circle c = Circle(5.0); c.getArea(c);",
            "B. Circle c(5.0); getArea(c);",
            "C. Circle c = new Circle(5.0); c.getArea();",
            "D. Circle c(5.0); c.getArea();"
          ],
          "answer": 3,
          "explanation": "创建对象用Circle c(5.0)（栈对象）或Circle* c=new Circle(5.0)（堆对象，需用->调用）。getArea是无参成员函数，应用对象调用c.getArea()。A多传了参数，B缺少对象，C用new后赋给对象类型错误，D正确，故选D。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_02",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下列代码，屏幕上输出（ ）。\nclass my_class { public: static int count; my_class(){count++;} ~my_class(){count--;} static void print_count(){ cout<<count<<\" \"; } }; int my_class::count=0; int main(){ my_class obj1; my_class::print_count(); my_class obj2; obj2.print_count(); my_class obj3; obj3.print_count(); return 0; }",
          "options": [
            "A. 1 1 1",
            "B. 1 2 3",
            "C. 1 1 2",
            "D. 1 2 2"
          ],
          "answer": 1,
          "explanation": "count是静态成员，所有对象共享。创建obj1后count=1，第一次输出1；创建obj2后count=2，输出2；创建obj3后count=3，输出3。最终输出1 2 3，故选B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "运行下列代码，屏幕上输出（ ）。\nshape为基类含virtual area()，rectangle和triangle继承并重写area()。int main(){ shape* pshape; rectangle rec(10,7); triangle tri(10,5); pshape=&rec; pshape->area(); pshape=&tri; pshape->area(); return 0; }",
          "options": [
            "A. rectangle area: triangle area:",
            "B. parent class area: parent class area:",
            "C. 运行时报错",
            "D. 编译时报错"
          ],
          "answer": 0,
          "explanation": "area()是虚函数，通过基类指针pshape调用时发生动态绑定：pshape指向rec时调用rectangle::area()输出rectangle area:，指向tri时调用triangle::area()输出triangle area:，故答案选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_17",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "创建一个对象时，会自动调用该对象所属类的构造函数。如果没有定义构造函数，编译器会自动生成一个默认的构造函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "创建对象时系统会自动调用构造函数完成初始化；若类中没有定义任何构造函数，编译器会自动生成一个默认的无参构造函数，对象照样能正常创建，题干说法正确。默认构造函数保证对象总是可以被创建。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_18",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "定义一个类时，必须手动定义一个析构函数，用于释放对象所占用的资源。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "析构函数可以省略，编译器会自动生成一个默认析构函数。只有类中动态分配了资源需要在销毁时释放，才需要手动定义析构函数，因此“必须手动定义析构函数”说法错误。默认析构函数由编译器自动生成。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_19",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "C++中类内部可以嵌套定义类。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "C++允许在类内部再定义类，这种类称为内部类（嵌套类），它通过外部类的作用域来引用和访问。嵌套定义类是C++合法的语法特性，因此“类内部可以嵌套定义类”的说法正确，故选“正确”。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_23",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，静态成员函数只能访问静态成员变量。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "静态成员函数没有this指针，不能通过对象实例访问非静态成员，它只能直接访问类的静态成员变量和静态成员函数。因此“静态成员函数只能访问静态成员变量”的说法正确，故选“正确”。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_02",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "关于以下C++代码，（ ）行代码会引起编译错误。\nclass Base { private: int a; protected: int b; public: int c; Base():a(1),b(2),c(3){} }; class Derived: public Base { public: void show(){ cout<<a<<endl; //Line 1 cout<<b<<endl; //Line 2 cout<<c<<endl; //Line 3 } };",
          "options": [
            "A. Line 1",
            "B. Line 2",
            "C. Line 3",
            "D. 没有编译错误"
          ],
          "answer": 0,
          "explanation": "a是Base类的私有成员，私有成员只能被类自身的成员函数访问，派生类Derived不能访问基类的私有成员，因此Line 1访问a会编译错误。b受保护、c公有，派生类都可以访问，故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_17",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在C++中，类的静态成员变量只能被该类对象的成员函数访问。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "静态成员变量属于类本身，既可以通过对象访问，也可以通过类名加作用域运算符直接访问；若其访问权限为public，外部代码也可访问。因此“只能被成员函数访问”说法错误。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_19",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "运行以下C++代码，屏幕将输出“derived class”。\nbase* b; derived d; b=&d; b->show(); 其中show为虚函数，derived重写为输出derived class。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "show()是虚函数，通过基类指针b调用时发生动态绑定，实际调用派生类derived重写的show()，屏幕输出“derived class”。题干说法正确，故选“正确”。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_20",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "如下列代码所示的基类（base）及其派生类（derived），则生成一个派生类的对象时，只调用派生类的构造函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "创建派生类对象时，先调用基类的构造函数再调用派生类的构造函数；销毁时先析构派生类再析构基类。因此“生成派生类对象时只调用派生类的构造函数”的说法错误。构造与析构的顺序都是基类先、派生类后。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_02",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于C++中类的说法，哪一项是正确的？",
          "options": [
            "A. 类中定义的所有成员变量和成员函数默认是public访问权限。",
            "B. 类的构造函数必须显式声明返回类型为void。",
            "C. 在C++中，类的数据一般设置为私有，其公有成员函数提供访问私有数据的唯一途径。",
            "D. 同一个类的实例有各自的成员数据和成员函数。"
          ],
          "answer": 2,
          "explanation": "C++中类成员默认访问权限是private，构造函数没有返回值类型，同一个类的不同对象各有自己的成员数据但共享成员函数。C描述的是封装思想的常规做法，是正确的，故选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "以下C++代码段中存在语法错误或逻辑错误，（ ）是正确的。\nclass MyClass { public: MyClass(){ cout<<\"Constructor called!\"<<endl; } void display(){ cout<<\"Display function called!\"<<endl; } }; int main(){ MyClass* obj = NULL; obj->display(); return 0; }",
          "options": [
            "A. NULL在C++中无法用于指针初始化，应使用nullptr。",
            "B. obj的定义应该是MyClass obj; 而不是指针类型。",
            "C. obj->display()语句存在空指针访问错误，obj应该初始化为一个有效的对象。",
            "D. obj->display()语句会调用display()函数，但它没有输出任何内容。"
          ],
          "answer": 2,
          "explanation": "obj被初始化为NULL空指针，未指向任何有效对象，此时调用obj->display()会产生空指针访问错误。NULL在C++中仍可用于指针初始化（等价于0），定义成指针本身也不一定错，关键是obj没有指向有效对象，故答案选C。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "构造函数是一种特殊的类成员函数，构造函数的名称和类名相同。但通过函数重载，可以创建多个同名的构造函数，条件是每个构造函数的参数列表不同。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "构造函数名与类名相同且无返回值，可以通过重载定义多个构造函数，只要参数列表不同即可（如无参、带参、拷贝构造）。但无参的默认构造函数只能有一个，题干前半部分正确，故选“正确”。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_17",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "类的静态成员函数既能访问类的静态数据成员，也能访问非静态数据成员。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "静态成员函数没有this指针，不能直接访问属于具体对象的非静态数据成员。它只能直接访问静态成员，因此“静态成员函数既能访问静态成员，也能访问非静态成员”的说法错误。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_21",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "在生成一个派生类的对象时，只调用派生类的构造函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "创建派生类对象时，会先调用基类构造函数再调用派生类构造函数（构造顺序：基类在前、派生类在后）；销毁时顺序相反。因此“只调用派生类的构造函数”的说法错误。先基类后派生类是C++对象的构造规则。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_08",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码中，类的构造函数被调用了（ ）次。\nclass MyClass { public: MyClass(){ cout<<\"Constructor called!\"<<endl; } }; int main(){ MyClass obj1; MyClass obj2 = obj1; return 0; }",
          "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 0"
          ],
          "answer": 0,
          "explanation": "obj1通过默认构造函数MyClass()创建，调用1次构造函数输出提示；obj2=obj1使用的是拷贝初始化，调用的是编译器生成的拷贝构造函数（它不执行用户自定义的MyClass()），因此用户构造函数只被调用1次，选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_15",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "关于下面代码，说法错误的是（ ）。\nclass Shape { protected: string name; public: Shape(const string& n):name(n){} virtual double area() const{ return 0.0; } }; class Circle:public Shape { private: double radius; public: Circle(const string& n,double r):Shape(n),radius(r){} double area() const override{ return 3.14159*radius*radius; } }; class Rectangle:public Shape { ... }; int main(){ Circle circle(\"MyCircle\",5.0); Rectangle rectangle(\"MyRectangle\",4.0,6.0); Shape* shapePtr=&circle; cout<<\"Area: \"<<shapePtr->area()<<endl; shapePtr=&rectangle; cout<<\"Area: \"<<shapePtr->area()<<endl; return 0; }",
          "options": [
            "A. 语句Shape* shapePtr = &circle; 和shapePtr = &rectangle; 出现编译错误",
            "B. Shape为基类，Circle和Rectangle是派生类",
            "C. 通过继承，Circle和Rectangle复用了Shape的属性和方法，并扩展了新的功能",
            "D. Circle和Rectangle通过重写（override）基类的虚函数area和基类指针，实现了运行时多态"
          ],
          "answer": 0,
          "explanation": "派生类对象地址可以赋给基类指针，&circle、&rectangle都是Shape*，两句赋值完全合法，不会编译错误，A的说法错误。B、C、D描述正确，故答案选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_20",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "C++支持构造函数重载，但默认无参数的构造函数只能有一个。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "构造函数可以重载，只要参数列表不同即可定义多个构造函数。但无参数的默认构造函数只能定义一个，如果定义多个无参构造函数，调用时编译器无法区分，会产生歧义，说法正确，故选“正确”。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_02",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "为了让 Dog 类的构造函数能正确地调用其父类 Animal 的构造方法，横线处应填入（   ）。\nclass Animal {\npublic:\nstd::string name;\nAnimal(std::string str) : name(str) {\nstd::cout << \"Animal created\\n\";\n}\nvirtual void speak() {\ncout << \"Animal speaks\" << endl;\n}\n};\nclass Dog : public Animal {\nstd::string breed;\npublic:\nDog(std::string name, std::string b) : _________________, breed(b) {\nstd::cout << \"Dog created\\n\";\n}\nvoid speak() override {\ncout << \"Dog barks\" << endl;\n}\n};",
          "options": [
            "A. Animal(name)",
            "B. super(name)",
            "C. Animal::Animal(name)",
            "D. Animal()"
          ],
          "answer": 0,
          "explanation": "C++ 中派生类构造函数通过初始化列表调用基类构造函数，写法是直接写基类类名加参数，即 Animal(name)。super 是 Java 的写法，Animal::Animal(name) 用于限定访问，Animal() 缺少参数，均不正确。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "代码同上一题，代码执行结果是（  ）。",
          "options": [
            "A. 输出 Animal speaks",
            "B. 输出 Dog barks",
            "C. 编译错误",
            "D. 程序崩溃"
          ],
          "answer": 1,
          "explanation": "主函数通过 Animal* p 指向 Dog 对象，speak() 是虚函数且 Dog 重写了它，因此调用时发生动态绑定，执行 Dog::speak，输出 Dog barks。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "构造函数可以被声明为 virtual。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "C++ 规定构造函数不能声明为虚函数，因为在构造对象时对象的实际类型已经确定，不存在动态绑定；虚函数机制依赖对象构造完成后才建立的虚表，构造阶段无法发挥作用。只有析构函数可以且多态场景下应当声明为虚函数，说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_21",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "执行下列代码，my_dog.name 的最终值是 Charlie。\nclass Dog {\npublic:\nstd::string name;\nDog(std::string str) : name(str) {}\n};\nint main() {\nDog my_dog(\"Buddy\");\nmy_dog.name = \"Charlie\";\nreturn 0;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "name 是公有成员，先构造为 Buddy，随后赋值语句 my_dog.name = \"Charlie\" 把它改成 Charlie，因此最终值是 Charlie。说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_22",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "下列 C++ 代码可以成功编译，并且子类 Child 的实例能通过其成员函数访问父类 Parent 的属性 value。\nclass Parent {\nprivate:\nint value = 100;\n};\nclass Child : public Parent {\npublic:\nint get_private_val() {\nreturn value;\n}\n};",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "value 是 Parent 的私有成员，子类无法直接访问私有成员，get_private_val 里引用 value 会编译报错。该代码不能成功编译。说法错误。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_01",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于类的说法，错误的是( )。",
          "options": [
            "A. 构造函数不能声明为虚函数，但析构函数可以。",
            "B. 函数参数如声明为类的引用类型，调用时不会调用该类的复制构造函数。",
            "C. 静态方法属于类而不是某个具体对象，因此推荐用 类名::方法(...) 调用。",
            "D. 不管基类的析构函数是否是虚函数，都可以通过基类指针/引用正确删除派生类对象。"
          ],
          "answer": 3,
          "explanation": "A、B、C 说法都正确：构造函数不能是虚函数而析构函数可以；传引用不会触发复制构造；静态方法用类名调用。D 错误，若基类析构函数不是虚函数，通过基类指针 delete 派生类对象是未定义行为，无法正确释放派生类资源。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "当基类可能被多态使用，其析构函数应该声明为虚函数。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "通过基类指针或引用删除派生类对象时，只有基类析构函数是虚函数，delete 才会触发动态绑定，先调用派生类析构释放派生类资源，再调用基类析构。若基类析构不是虚函数，则只调用基类析构，派生类资源可能泄漏，因此多态使用时基类析构应声明为虚函数，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_01",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "在面向对象编程中，下列关于虚函数的描述中，错误的是（ ）。",
          "options": [
            "A. 虚函数用于支持运行时多态",
            "B. 通过基类指针调用虚函数时，会根据对象实际类型决定调用版本",
            "C. 构造函数可以声明为虚函数以支持多态",
            "D. 基类析构函数常声明为虚函数以避免资源泄漏"
          ],
          "answer": 2,
          "explanation": "构造函数在创建对象时被调用，此时对象的实际类型已经完全确定，不存在运行时动态绑定，因此 C++ 不允许把构造函数声明为虚函数。A 说虚函数用于运行时多态、B 说基类指针调用虚函数按实际类型分派、D 说基类析构声明为虚函数避免资源泄漏，这三项都正确，故选 C。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "关于以下代码，说法正确的是（   ）。\nclass Instrument {\npublic:\nvoid play() {\ncout << \"乐器在演奏声音\" << endl;\n}\nvirtual ~Instrument() {}\n};\nclass Piano : public Instrument {\npublic:\nvoid play() override {\ncout << \"钢琴：叮咚叮咚\" << endl;\n}\n};",
          "options": [
            "A. 执行代码会输出两行，内容分别为：钢琴：叮咚叮咚 和 吉他：咚咚当当",
            "B. 执行代码会输出两行，内容分别为：乐器在演奏声音 和 乐器在演奏声音",
            "C. 代码编译出现错误",
            "D. 代码运行出现错误"
          ],
          "answer": 2,
          "explanation": "基类 Instrument 中的 play() 没有 virtual，而派生类用 override 关键字重写，C++ 规定 override 只能修饰重写虚函数的函数，因此编译报错。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "以下代码中，构造函数被调用的次数是 1 次。\nclass Test {\npublic:\nTest() { cout << \"T \"; }\n};\nint main() {\nTest a;\nTest b = a;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Test a; 调用默认构造函数一次；Test b = a; 用已存在的对象 a 初始化 b，会调用编译器自动生成的拷贝构造函数，而拷贝构造函数也属于构造函数。因此构造函数一共被调用 2 次，题目说 1 次是错误的。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_01",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 中类的描述，正确的是（ ）。",
          "options": [
            "A. 如果类没有用户声明的构造函数，那么编译器会隐式声明一个默认构造函数",
            "B. 类的析构函数可以被重载，一个类可以有多个析构函数",
            "C. 类中的所有成员都必须声明为 public",
            "D. 类和结构体在 C++ 中没有区别，包括默认访问权限也相同"
          ],
          "answer": 0,
          "explanation": "C++ 中若类未声明任何构造函数，编译器会隐式生成默认构造函数。析构函数不能重载（只能有一个）；成员默认可为 private；类和结构体默认访问权限不同（class 默认 private，struct 默认 public）。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码在 main() 中有一行会导致编译错误，请找出来。\nclass Pet {\npublic:\nPet(string n, int a) : name(n), age(a) {}\nstring getName() { return name; }\nvoid birthday() { age++; }\nprivate:\nstring name;\nint age;\n};\nint main() {\nPet cat(\"奶茶\", 2);\ncout << cat.getName();  // ①\ncat.birthday();         // ②\ncat.name = \"大橘\";      // ③\ncout << cat.getName();  // ④\n}",
          "options": [
            "A. 第①行",
            "B. 第②行",
            "C. 第③行",
            "D. 第④行"
          ],
          "answer": 2,
          "explanation": "name 在类 Pet 中被声明为 private 私有成员，私有成员只能被本类的成员函数访问，外部函数 main 中不能直接访问。第③行 cat.name = 大橘 越权访问私有成员，编译报错；①、②、④行都只调用公有接口，没有问题，故选 C。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "下面定义了一个表示二维坐标点的类 Point，并提供了一个带参数的构造函数，但第②行 Point b; 会调用编译器自动生成的默认构造函数，将 b.x 和 b.y 初始化为 0.0，程序可以正常编译运行。\nclass Point {\npublic:\ndouble x, y;\nPoint(double px, double py) : x(px), y(py) {}\n};\nint main() {\nPoint a(3.0, 4.0);  // ①\nPoint b;            // ②\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "用户为 Point 定义了带两个参数的构造函数后，编译器就不再自动生成默认的无参构造函数。因此 main 中第②行 Point b; 找不到匹配的构造函数，编译报错，也就不会把 b.x、b.y 初始化为 0.0，说法错误。",
          "source": "GESP2026-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_01",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下列关于 C++ 中继承和多态的描述中，错误的是（  ）。",
          "options": [
            "A. 通过基类指针调用虚函数时，会根据对象实际类型决定调用版本。",
            "B. 基类析构函数常声明为虚函数，以便通过基类指针正确释放派生类对象。",
            "C. 派生类可以重写基类中的虚函数。",
            "D. 构造函数可以声明为 virtual，以便在构造对象时实现动态绑定。"
          ],
          "answer": 3,
          "explanation": "构造函数在创建对象时调用，此时对象的类型已经确定，不存在运行时动态绑定，因此构造函数不能声明为 virtual。A 说基类指针调用虚函数按实际类型分派、B 说基类析构常声明为虚函数以便正确释放派生类对象、C 说派生类可重写基类虚函数，均正确；D 错误，故选 D。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_03",
          "kp": "kp6_12",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码在 main() 中有一行会导致编译错误，请找出来。\nclass Student {\npublic:\nStudent(string n, int s) : name(n), score(s) {}\nstring getName() { return name; }\nvoid setScore(int s) { score = s; }\nprivate:\nstring name;\nint score;\n};\nint main() {\nStudent stu(\"Tom\", 85);\ncout << stu.getName();   // ①\nstu.setScore(90);       // ②\nstu.score = 100;        // ③\ncout << stu.getName();  // ④\n}",
          "options": [
            "A. 第①行",
            "B. 第②行",
            "C. 第③行",
            "D. 第④行"
          ],
          "answer": 2,
          "explanation": "score 在类 Student 中被声明为 private，私有成员只能被类内成员函数访问。第③行 stu.score = 100 在 main 中直接访问私有数据成员，违反封装规则，编译报错；①②④行均通过公有接口 getName、setScore 访问，没有错误，故选 C。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_16",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "C++ 中构造函数可以声明为虚函数，从而实现运行时多态。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "构造函数不能被声明为虚函数，因为对象构造时其实际类型已经确定，编译器无法也不需要做动态绑定；虚函数机制依赖对象构造完成后才建立的虚表。只有析构函数可以声明为虚函数，说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_17",
          "kp": "kp6_12",
          "type": "judge",
          "difficulty": 1,
          "question": "通过指向 Base 的指针删除 Derived 对象时，一定会先调用 Derived 的析构函数，再调用 Base 的析构函数。\nclass Base {\npublic:\n~Base() { cout << \"Base destructor\" << endl; }\n};\nclass Derived : public Base {\npublic:\n~Derived() { cout << \"Derived destructor\" << endl; }\n};\nint main() {\nBase* p = new Derived();\ndelete p;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "Base 的析构函数没有声明为虚函数，delete p 时只调用 Base 的析构，不会调用 Derived 的析构，这是未定义行为，并不保证先调用 Derived 析构。说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        }
      ]
    },
    "kp6_13": {
      "title": "栈、队列、循环队列",
      "questions": [
        {
          "id": "l6_202309_14",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "N个节点的双向循环链表，在其中查找某个节点的平均时间复杂度是（ ）。",
          "options": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N²)"
          ],
          "answer": 1,
          "explanation": "链表存储是非连续的，只能从头开始沿着指针逐个比较，无法像数组那样随机访问或二分定位，因此查找某个节点平均要遍历一半链表。双向循环链表虽然可以双向移动，但查找仍需线性扫描，时间复杂度为O(N)，答案选B。",
          "source": "GESP2023-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202309_23",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "有些算法或数据结构在C/C++语言中使用指针实现，一个典型的例子就是链表。因此，链表这一数据结构在C/C++语言中只能使用指针来实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "链表除了用指针（动态结点）实现外，还可以用数组加下标模拟指针的方式实现，称为静态链表，同样能完成链式存储与访问。因此“链表只能使用指针来实现”的说法错误，故选“错误”。",
          "source": "GESP2023-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_06",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "有关下面C++代码的说法正确的是（ ）。\n【题面含链表结点代码块，见原卷】",
          "options": [
            "A. 上述代码构成单向链表",
            "B. 上述代码构成双向链表",
            "C. 上述代码构成循环链表",
            "D. 上述代码构成指针链表"
          ],
          "answer": 1,
          "explanation": "从代码结构看，结点中既有指向前一个结点的指针，也有指向后一个结点的指针，能够在两个方向上前进，因此构成双向链表，B正确。单向链表只有一个方向的指针，循环链表首尾相连，而“指针链表”不是标准分类，故答案选B。",
          "source": "GESP2023-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202312_25",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "同样的整数序列分别保存在单链表和双向链中，这两种链表上的简单冒泡排序的复杂度相同。（ ）",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "简单冒泡排序只涉及相邻元素的比较和交换，无论用单链表还是双向链表存储，相邻元素比较和交换的次数都相同，因此两种链表上的时间复杂度一样。题干的说法正确，故选“正确”。",
          "source": "GESP2023-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_03",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "在队列中，元素的添加和删除是按照（ ）原则进行的。",
          "options": [
            "A. 先进先出",
            "B. 先进后出",
            "C. 最小值先出",
            "D. 随机进出"
          ],
          "answer": 0,
          "explanation": "队列是一种先进先出（FIFO）的线性结构：新元素从队尾入队，删除元素时从队头出队，先进入队列的元素先离开队列，就像排队买票一样。因此队列遵循“先进先出”原则，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_09",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "给定一个空栈，执行以下操作序列：push(1), push(2), push(3), pop(), pop(), push(4), push(5), pop()。最终栈中的元素是（ ）。",
          "options": [
            "A. 1, 2",
            "B. 1, 4, 5",
            "C. 1, 2, 5",
            "D. 1, 4"
          ],
          "answer": 3,
          "explanation": "栈按后进先出操作。push 1、2、3后栈为[1,2,3]；两次pop弹掉3、2，栈为[1]；push 4、5后为[1,4,5]；再pop弹掉5，最终栈为[1,4]，选D。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_15",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "下面的代码片段用于反转单链表，请进行（ ）修改，使其能正确实现相应功能。\nListNode* reverseLinkedList(ListNode* head){ ListNode* prev=nullptr; ListNode* current=head; while(current!=nullptr){ ListNode* next=current->next; current->next=next; prev=current; current=next; } return prev; }",
          "options": [
            "A. current->next = next; 应该改为 current->next = prev;",
            "B. ListNode* next = current->next; 应该改为 ListNode* next = prev->next;",
            "C. current != nullptr 应该改为 current->next != nullptr",
            "D. ListNode* prev = nullptr; 应该改为 ListNode* prev = head;"
          ],
          "answer": 0,
          "explanation": "反转单链表的核心是把每个结点的next指针指向它的前驱。原代码current->next=next等于没改（还指向原后继），应改为current->next=prev，再让prev、current向后移动，故选A。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_20",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "删除单向链表中的节点，只需知道待删除节点的地址即可，无需访问前一个节点。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "单向链表删除普通结点时，需要修改其前驱结点的next指针才能把该结点从链中断开，因此必须知道前一个结点的地址。只有删除头结点时才不需要前驱，题干的说法错误。牢记删除链表结点需要前驱地址即可。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_24",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "栈的基本操作包括入栈（push）和出栈（pop）。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "栈是后进先出的线性表，其基本操作就是入栈（push，把元素压到栈顶）和出栈（pop，删除并取出栈顶元素）。因此“栈的基本操作包括入栈push和出栈pop”的说法正确，故选“正确”。",
          "source": "GESP2024-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202403_27",
          "kp": "kp6_13",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：好斗的牛\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n你一共有 N 头牛，还有 N 个牛棚，这些牛棚从左到右一字排开。\n你希望把这 N 头牛全部安置到牛棚里，一头牛占一个牛棚。\n不过这些牛有点好斗：第 i 头牛的攻击范围是，如果它左边 a[i] 个牛棚内或者右边 b[i] 个牛棚内有其他牛，它就会挑事打架。你希望最后不会有任何一头牛挑事。\n\n为此，你想留下一段连续排列的牛棚（也就是从某个位置开始、连续一段的牛棚都保留），并把其它牛棚全部卖掉。\n请你计算：最少需要留下多少个牛棚，才能保证一定存在一种方案，把所有 N 头牛都安置进留下的牛棚里，并且没有任何牛会挑事？\n\n【输入描述】\n第一行包含一个正整数 N，表示牛的数量，同时也是牛棚的数量。\n第二行包含 N 个整数，依次为 a[1] 到 a[N]，表示每头牛左边的攻击范围。\n第三行包含 N 个整数，依次为 b[1] 到 b[N]，表示每头牛右边的攻击范围。\n\n【输出描述】\n输出一行，包含一个整数，表示最少需要留下的牛棚数量。\n\n【样例输入 1】\n2\n1 2\n1 2\n\n【样例输出 1】\n4\n\n【样例输入 2】\n3\n1 2 3\n3 2 1\n\n【样例输出 2】\n7",
          "options": [],
          "answer": null,
          "explanation": "把牛按顺序排成一排，相邻两头牛之间至少要间隔max(右边牛向左的攻击范围, 左边牛向右的攻击范围)个牛棚，才能互不挑事。留棚总数=牛棚本身N+相邻间隔之和，问题转化为求一个排列使相邻间隔总和最小，即贪心/全排列取最小值。",
          "source": "GESP2024-03",
          "isJudge": false,
          "answerText": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint N;\nvector<int> a, b;\nint ans = 1e9;\nint main() {\n    cin >> N;\n    a.resize(N);\n    b.resize(N);\n    for (int i = 0; i < N; ++i) cin >> a[i];\n    for (int i = 0; i < N; ++i) cin >> b[i];\n    vector<int> permutation;\n    permutation.resize(N);\n    for (int i = 0; i < N; i ++) permutation[i] = i;\n    do {\n        int curr_len = N;\n        for (int i = 1; i < N; ++i) {\n            curr_len += max(b[permutation[i - 1]], a[permutation[i]]);\n        }\n        ans = min(ans, curr_len);\n    } while(next_permutation(permutation.begin(), permutation.end()));\n    cout << ans << endl;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "2\n1 2\n1 2",
              "expectedOutput": "4"
            },
            {
              "input": "3\n1 2 3\n3 2 1",
              "expectedOutput": "7"
            }
          ]
        },
        {
          "id": "l6_202406_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "向一个栈顶为hs的链式栈中插入一个指针为s的结点时，应执行（ ）。",
          "options": [
            "A. hs->next = s;",
            "B. s->next = hs; hs = s;",
            "C. s->next = hs->next; hs->next = s;",
            "D. s->next = hs; hs = hs->next;"
          ],
          "answer": 1,
          "explanation": "链式栈的插入（入栈）在栈顶进行：先把新结点s的next指向原栈顶hs，再把栈顶指针更新为s，即s->next=hs; hs=s。这样新结点就成为新的栈顶，选项B正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "在栈数据结构中，元素的添加和删除是按照什么原则进行的？",
          "options": [
            "A. 先进先出",
            "B. 先进后出",
            "C. 最小值先出",
            "D. 随机顺序"
          ],
          "answer": 1,
          "explanation": "栈是后进先出（LIFO）的线性结构，元素的添加（入栈）和删除（出栈）都在栈顶进行，最后进栈的元素最先出栈，就像一摞盘子后放先取。因此栈遵循“先进后出”原则，故选B。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_06",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "要实现将一个输入的十进制正整数转化为二进制表示，下面横线上应填入的代码为（ ）。\nstack<int> ten2bin(int n){ stack<int> st; int r,m; r=n%2; m=n/2; st.push(r); while(m!=1){ r=m%2; st.push(r); m=m/2; } st.push(m); return st; } int main(){ int n; cin>>n; stack<int> bin; bin=ten2bin(n); while(!bin.empty()){ ______ } return 0; }",
          "options": [
            "A. cout << bin.top(); bin.pop();",
            "B. bin.pop(); cout << bin.top();",
            "C. cout << bin.back(); bin.pop();",
            "D. cout << bin.front(); bin.pop();"
          ],
          "answer": 0,
          "explanation": "栈只能从栈顶访问，且访问后要出栈才能继续取下一个元素，循环内顺序应为“先输出栈顶再弹出”，即cout<<bin.top(); bin.pop();，选项A正确。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_07",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "下面定义了一个循环队列的类，请补全判断队列是否满的函数，横向上应填写（ ）。\nclass circular_queue { int *arr; int capacity,front,rear; circular_queue(int size){ capacity=size+1; arr=new int[capacity]; front=rear=0; } bool is_empty(){ return front==rear; } bool is_full(){ ______ } ... };",
          "options": [
            "A. return (rear + 1) % capacity == front;",
            "B. return rear % capacity == front;",
            "C. return rear == front;",
            "D. return (rear + 1) == front;"
          ],
          "answer": 0,
          "explanation": "循环队列多预留一个空间以区分队满与队空。队空是front==rear；队满时队尾再走一步就追上队头，即(rear+1)%capacity==front，故选A。",
          "source": "GESP2024-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202406_21",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "n个节点的双向循环链表，在其中查找某个节点的平均时间复杂度是O(N)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "链表是链式存储结构，即使双向循环链表，查找节点时仍需要沿着指针逐个比较，无法像数组那样随机访问或二分定位，平均要遍历约一半节点，因此平均时间复杂度为O(N)，说法正确，故选“正确”。",
          "source": "GESP2024-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_03",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "有6个元素，按照6,5,4,3,2,1的顺序进入栈S，下列（ ）的出栈序列是不能出现的。",
          "options": [
            "A. 5,4,3,6,1,2",
            "B. 4,5,3,1,2,6",
            "C. 3,4,6,5,2,1",
            "D. 2,3,4,1,5,6"
          ],
          "answer": 2,
          "explanation": "入栈顺序为6,5,4,3,2,1（先6后5后4…）。C序列：出3需已入6,5,4,3，此时栈内从上到下为3,4,5,6，出4后栈顶是5，此时6被压在5下面，无法先于5出栈，因此C不可能。其余选项都可以通过合适的入出栈时机实现，选C。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "采用如下代码实现检查输入的字符串括号是否匹配，横线上应填入的代码为（ ）。\nbool is_valid(string s){ stack<char> st; char top; for(char& ch:s){ if(ch=='('||ch=='{'||ch=='['){ st.push(ch); } else { if(st.empty()) return false; ______; if((ch==')'&&top!='(')||(ch=='}'&&top!='{')||(ch==']'&&top!='[')) return false; } } return st.empty(); }",
          "options": [
            "A. top = st.top(); st.pop();",
            "B. st.pop(); top = st.top();",
            "C. st.pop(); top = st.front();",
            "D. top = st.front(); st.pop();"
          ],
          "answer": 0,
          "explanation": "判断括号匹配时，遇到右括号需要取出栈顶的左括号进行比较。应先读取栈顶top=st.top()，再弹出st.pop()，顺序不能颠倒，否则比较的是被弹出后新的栈顶，故选A。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "下面代码判断队列的第一个元素是否等于a，并删除该元素，横向上应填写（ ）。\nbool is_front_equal(queue<int>& q, int a){ bool is_equal=false; if(!q.empty()){ ______ } return is_equal; }",
          "options": [
            "A. is_equal = (q.front() == a);",
            "B. is_equal = (q.front() == a); q.pop();",
            "C. q.pop(); is_equal = (q.front() == a);",
            "D. q.pop(); is_equal = (q.top() == a);"
          ],
          "answer": 1,
          "explanation": "先取出队首元素与a比较，再删除队首：is_equal=(q.front()==a); q.pop();。若先pop，队首就变成了原第二个元素，比较就错了；队首用front()而不是top()，故答案选B。",
          "source": "GESP2024-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202409_18",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "栈是一种线性结构，可通过数组或链表来实现。二者相比，数组实现占用的内存较少，链表实现的入队和出队操作的时间复杂度较低。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "数组和链表实现栈，其入栈、出栈操作时间复杂度都是O(1)，不存在链表更低的情况；而且栈只有栈顶一个操作端，题干却用“入队出队”来混淆栈与队列的概念，说法错误。数组与链表实现栈的复杂度相同。",
          "source": "GESP2024-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "阅读以下代码，下面哪一项是正确的？\nvoid processData(){ stack<int> s; queue<int> q; for(int i=1;i<=5;++i){ s.push(i); q.push(i);} while(!s.empty()){ cout<<\"Stack pop: \"<<s.top()<<endl; s.pop();} while(!q.empty()){ cout<<\"Queue pop: \"<<q.front()<<endl; q.pop();} }",
          "options": [
            "A. 栈s的输出顺序是1 2 3 4 5，队列q的输出顺序是5 4 3 2 1。",
            "B. 栈s的输出顺序是5 4 3 2 1，队列q的输出顺序是1 2 3 4 5。",
            "C. 栈s的输出顺序是1 2 3 4 5，队列q的输出顺序是1 2 3 4 5。",
            "D. 栈s的输出顺序是1 2 3 4 5，队列q的输出顺序是1 2 3 4 5，程序不会正常执行。"
          ],
          "answer": 1,
          "explanation": "栈是后进先出，依次push 1到5后，从栈顶pop的顺序是5 4 3 2 1；队列是先进先出，依次push 1到5后，从队首pop的顺序是1 2 3 4 5，故答案选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "N个节点的双向循环链表，在其中查找某个节点的平均时间复杂度是（ ）。",
          "options": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N²)"
          ],
          "answer": 1,
          "explanation": "链表采用链式存储，不支持随机访问，查找节点时必须从某个位置开始沿指针逐个比较，平均需要比较约N÷2个节点，时间复杂度为O(N)。双向循环链表也不改变这一结论，故答案选B。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_18",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "栈中元素的插入和删除操作都在栈的顶端进行，所以方便用单向链表实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "栈的入栈、出栈、取栈顶等所有操作都发生在栈顶这一端，用单向链表实现时只需维护一个栈顶指针即可完成全部操作，不需要双向指针，因此用单向链表实现栈非常方便，说法正确，故选“正确”。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_25",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "栈中元素的插入和删除操作都在栈的顶端进行，所以方便用双向链表比单向链表更合适实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "双向链表在表头、表尾进行插入和删除操作的时间复杂度都是O(1)，栈的入栈出栈、队列的入队出队都只涉及链表的某一端或两端，因此用双向链表实现栈和队列时插入删除均为O(1)。但栈用单向链表即可，题干说双向链表更合适是不准确的，故选“错误”。",
          "source": "GESP2024-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202412_27",
          "kp": "kp6_13",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：运送物资\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小杨管理着 m 辆货车，每辆货车每天都要向 A 市和 B 市运送若干次物资。\n小杨同时还拥有 n 个运输站点，这些站点都位于 A 市和 B 市之间，其中 A 市的坐标是 0，B 市的坐标是 x。\n第 i 个运输站点的位置是 p[i]，并且它至多可以作为 c[i] 辆货车的初始运输站点。\n第 j 辆货车每天需要向 A 市运送 a[j] 次物资，向 B 市运送 b[j] 次物资。\n\n每一辆货车都从自己的初始运输站点出发。货车向 A 市运送一次物资，需要从初始站点到 A 市，再回到初始站点；向 B 市运送一次物资，需要从初始站点到 B 市，再回到初始站点。\n\n请你计算：在最优地分配每一辆货车的初始运输站点的情况下，所有货车每天的最短总行驶路程是多少？\n\n【输入描述】\n第一行包含三个正整数 n、m、x，分别表示运输站点的个数、货车的数量和 B 市的坐标。\n接下来 n 行，每行包含两个整数 p 和 c，分别表示一个运输站点的位置，以及这个站点至多可以作为多少辆货车的初始运输站点。\n接下来 m 行，每行包含两个整数 a 和 b，分别表示一辆货车每天向 A 市和 B 市运送物资的次数。\n\n【输出描述】\n输出一行，包含一个整数，表示所有货车每天的最短总行驶路程。\n【数据范围】\n1 ≤ m ≤ 100000\n\n【样例输入 1】\n3 4 10\n1 1\n2 1\n8 3\n5 3\n7 2\n9 0\n1 10000\n\n【样例输出 1】\n40186",
          "options": [],
          "answer": null,
          "explanation": "某货车在位置p的站点时，每天去A市路程为2a×p，去B市路程为2b×(x-p)，总路程为2(bx+(a-b)p)。令res=2Σbx，再按(a-b)的正负分别处理：差值负的货车安排在位置大的站点，差值正的安排在位置小的站点，站点按位置排序后贪心分配，最后乘以2输出。",
          "source": "GESP2024-12",
          "isJudge": false,
          "answerText": "#include<bits/stdc++.h>\nusing namespace std;\n#define ll long long\nconst int N = 1e5+10;\nint n,m;\nll x;\nvector<pair<int,int> > st;\nint a[N],b[N];\nint main(){\n    cin>>n>>m>>x;\n    for(int i=1;i<=n;i++){\n        int p,c;\n        cin>>p>>c;\n        st.push_back(make_pair(p,c));\n    }\n    sort(st.begin(),st.end());\n    for(int i=1;i<=m;i++) cin>>a[i]>>b[i];\n    vector<pair<int,int> > neg,pos;\n    ll res=0;\n    for(int i=1;i<=m;i++){\n        if(a[i]>=b[i])\n            pos.push_back(make_pair(a[i]-b[i],i));\n        else\n            neg.push_back(make_pair(a[i]-b[i],i));\n        res+=1ll*b[i]*x;\n    }\n    sort(neg.begin(),neg.end());\n    sort(pos.begin(),pos.end());\n    reverse(pos.begin(),pos.end());\n    int l=0,r=n-1;\n    for(auto i:neg){\n        while(r>=1&&st[r].second==0)r--;\n        res+=1ll*(a[i.second]-b[i.second])*st[r].first;\n        st[r].second-=1;\n    }\n    for(auto i:pos){\n        while(l<=n&&st[l].second==0)l++;\n        res+=1ll*(a[i.second]-b[i.second])*st[l].first;\n        st[l].second-=1;\n    }\n    cout<<res*2<< endl;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "3 4 10\n1 1\n2 1\n8 3\n5 3\n7 2\n9 0\n1 10000",
              "expectedOutput": "40186"
            }
          ]
        },
        {
          "id": "l6_202503_09",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码实现了循环队列的哪种操作？\nclass CircularQueue{ int* arr; int front,rear,size; public: CircularQueue(int k){ size=k; arr=new int[k]; front=rear=-1;} bool enQueue(int value){ if(isFull()) return false; if(isEmpty()) front=0; rear=(rear+1)%size; arr[rear]=value; return true; } };",
          "options": [
            "A. 入队",
            "B. 出队",
            "C. 查看队首元素",
            "D. 判断队列是否为空"
          ],
          "answer": 0,
          "explanation": "函数enQueue中把队尾rear后移并写入arr[rear]=value，同时处理队列从空变非空时front置0的情况，这正是在队尾插入元素的入队操作，故答案选A。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_14",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "以下代码用于检查字符串中的括号是否匹配，横线上应填写（ ）。\nbool isBalanced(string s){ stack<char> st; for(char c:s){ if(c=='('||c=='['||c=='{') st.push(c); else { if(st.empty()) return false; char top=st.top(); st.pop(); if((c==')'&&top!='(')||(c==']'&&top!='[')||(c=='}'&&top!='{')) return false; } } return ______; }",
          "options": [
            "A. true",
            "B. false",
            "C. st.empty()",
            "D. !st.empty()"
          ],
          "answer": 2,
          "explanation": "括号匹配要求所有字符处理完后，栈必须为空（所有左括号都有对应右括号），因此函数应返回st.empty()。若栈不空说明有多余的左括号未匹配，应当返回false，故答案选C。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_25",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "栈和队列均可以用双向链表实现，插入和删除操作的时间复杂度为O(1)。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "双向链表在表头、表尾插入删除都是O(1)，栈的入栈出栈和队列的入队出队分别只涉及两端操作，因此用双向链表实现栈和队列其插入删除时间复杂度均为O(1)，说法正确。",
          "source": "GESP2025-03",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202503_27",
          "kp": "kp6_13",
          "type": "coding",
          "difficulty": 1,
          "question": "试题名称：环线\n时间限制：1.0 s\n内存限制：128.0 MB\n\n【问题描述】\n小A喜欢坐地铁。有一条地铁环线一共有 n 个车站，车站依次用 1 到 n 标号。\n车站 i（1 ≤ i < n）的下一个车站是车站 i+1，车站 n 的下一个车站是车站 1。\n\n小A会从某个车站出发，乘坐地铁环线到某个车站结束行程。要求这段行程至少经过一个车站，并且不会重复经过任何一个车站。\n当小A经过车站 i 时，他会获得 a[i] 点快乐值。\n\n请你帮助小A安排一段行程（选择出发车站和结束车站），使得他获得的快乐值总和最大。\n\n【输入描述】\n第一行包含一个正整数 n，表示环线上的车站数量。\n第二行包含 n 个整数，依次为 a[1] 到 a[n]，表示经过每个车站时获得的快乐值。\n\n【输出描述】\n输出一行，包含一个整数，表示能够获得的最大快乐值总和。\n【数据范围】\n1 ≤ n ≤ 200000\n\n【样例输入 1】\n4\n-1 2 3 0\n\n【样例输出 1】\n5\n\n【样例输入 2】\n5\n-3 4 -5 1 3\n\n【样例输出 2】\n5",
          "options": [],
          "answer": null,
          "explanation": "在环上找一段连续（不重复经过车站）的和最大的区间，等价于环形数组上的最大子段和。把数组复制成两倍长度，用前缀和加单调队列维护，限制区间长度不超过n，即可求出最大快乐值。",
          "source": "GESP2025-03",
          "isJudge": false,
          "answerText": "#include <cstdio>\n#include <algorithm>\nusing namespace std;\nconst int N = 4e5 + 5;\nint n;\nlong long a[N], pre[N];\nint q[N], ql, qr;\nlong long ans;\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) {\n        scanf(\"%lld\", &a[i]);\n        a[n + i] = a[i];\n    }\n    for (int i = 1; i <= 2 * n; i++)\n        pre[i] = pre[i - 1] + a[i];\n    ql = qr = 1;\n    ans = -1e18;\n    for (int i = 1; i <= 2 * n; i++) {\n        while (ql <= qr && q[ql] < i - n) ql++;\n        ans = max(ans, pre[i] - pre[q[ql]]);\n        while (ql <= qr && pre[i] < pre[q[qr]]) qr--;\n        q[++qr] = i;\n    }\n    printf(\"%lld\\n\", ans);;\n    return 0;\n}",
          "starterCode": null,
          "testCases": [
            {
              "input": "4\n-1 2 3 0",
              "expectedOutput": "5"
            },
            {
              "input": "5\n-3 4 -5 1 3",
              "expectedOutput": "5"
            }
          ]
        },
        {
          "id": "l6_202506_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "以下关于栈和队列的代码，执行后输出是（   ）。\nstack<int> s;\nqueue<int> q;\nfor (int i = 1; i <= 3; ++i) {\ns.push(i);\nq.push(i);\n}\ncout << s.top() << \" \" << q.front() << endl;",
          "options": [
            "A. 1 3",
            "B. 3 1",
            "C. 3 3",
            "D. 1 1"
          ],
          "answer": 1,
          "explanation": "栈是后进先出结构，依次压入 1、2、3 后栈顶为 3，s.top() 返回 3；队列是先进先出结构，q.front() 返回最早入队的队首 1。因此 cout 输出一行 3 1，对应选项 B。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "在一个循环队列中，front 是指向队头的指针，rear 指向队尾的指针，队列最大容量为 maxSize。判断队列已满的条件是（  ）。",
          "options": [
            "A. rear == front",
            "B. (rear + 1) % maxSize == front",
            "C. (rear - 1 + maxSize) % maxSize == front",
            "D. (rear - 1) == front"
          ],
          "answer": 1,
          "explanation": "循环队列牺牲一个存储单元来区分空和满：队满时 rear 再前进一格就追上 front，即 (rear+1)%maxSize == front。rear==front 表示队空。",
          "source": "GESP2025-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202506_18",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "为了实现一个队列，使其出队操作（pop）的时间复杂度为 O(1) 并且避免数组删除首元素的问题，一种常见且有效的方法是使用环形数组，通过调整队首和队尾指针来实现。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "环形数组队列中，出队只需把队首指针 front 向后移动一位（取模运算），不需要搬移数组元素，出队时间复杂度为 O(1)，避免了普通数组实现队列时删除首元素要整体前移的代价，是一种常见有效的队列实现方式，说法正确。",
          "source": "GESP2025-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "栈的操作特点是（   ）。",
          "options": [
            "A. 先进先出",
            "B. 先进后出",
            "C. 随机访问",
            "D. 双端进出"
          ],
          "answer": 1,
          "explanation": "栈是后进先出（LIFO）结构，只能在一端即栈顶进行插入和删除，先入栈的元素最后才能出栈，如同叠放盘子。先进先出是队列的特点，随机访问和双端进出都不是栈的操作特点，因此选 B。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "循环队列常用于实现数据缓冲。假设一个循环队列容量为 5（即最多存放 4 个元素，留一个位置区分空与满），依次进行操作：入队数据 1，2，3，出队 1 个数据，再入队数据 4 和 5，此时队首到队尾的元素顺序是（   ）。",
          "options": [
            "A. [2, 3, 4, 5]",
            "B. [1, 2, 3, 4]",
            "C. [3, 4, 5, 2]",
            "D. [2, 3, 5, 4]"
          ],
          "answer": 0,
          "explanation": "循环队列容量 5 可存 4 个元素。入队 1、2、3 后队为 [1,2,3]；出队一个弹出队首 1，剩余 [2,3]；再依次入队 4、5 排在队尾，最终队首到队尾顺序为 [2,3,4,5]，对应选项 A。",
          "source": "GESP2025-09",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_19",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ STL 中，栈（std::stack）的 pop 操作返回栈顶元素并移除它。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "STL 中 std::stack 的 pop() 成员函数只负责删除栈顶元素，返回类型为 void，不返回任何值。要读取栈顶元素必须先调用 top() 取得引用，因此题目说 pop 返回栈顶元素并移除，说法错误。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202509_20",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "循环队列通过模运算循环使用空间。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "循环队列中，队首指针 front 和队尾指针 rear 通过 (rear+1)%N 这样的模运算前进，当到达数组末尾时自动回到开头，使固定大小的数组空间被循环利用，这正是循环队列区别于普通队列的核心机制，说法正确。",
          "source": "GESP2025-09",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "某文本编辑器把用户输入的字符依次压入栈 S。用户依次输入 A, B, C, D 后，用户按了两次撤销（每次撤销弹出栈顶一个字符）。此时栈从栈底到栈顶的内容是：（   ）。",
          "options": [
            "A. A B",
            "B. A B C",
            "C. A B D",
            "D. B C"
          ],
          "answer": 0,
          "explanation": "栈是后进先出结构。依次压入 A、B、C、D 后，栈从底到顶为 A B C D，栈顶是 D。每次撤销弹出栈顶一个字符：第一次弹出 D，第二次弹出 C，栈中剩余 A、B，因此从栈底到栈顶为 A B，对应选项 A。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "假设循环队列数组长度为 N，队空条件 front == rear，队满条件 (rear+1)%N == front，出队 front=(front+1)%N，入队 rear=(rear+1)%N。循环队列长度 N=6，初始 front=1, rear=1，执行操作序列为：入队、入队、入队、出队、入队、入队，则最终 (front, rear) 的值是（   ）。",
          "options": [
            "A. (2, 5)",
            "B. (2, 0)",
            "C. (3, 5)",
            "D. (3, 0)"
          ],
          "answer": 1,
          "explanation": "入队 3 次 rear=1+3=4；出队 front=2；入队 rear=5；再入队 rear=(5+1)%6=0。最终 (front,rear)=(2,0)。",
          "source": "GESP2025-12",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202512_20",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "函数调用管理可用栈来管理。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "函数调用时，系统把返回地址、实参和局部变量压入调用栈保存现场；函数返回时从栈顶弹出这些数据恢复现场，后调用的函数先返回，符合后进先出原则。因此函数调用管理使用栈来实现，说法正确。",
          "source": "GESP2025-12",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "游乐园的过山车每次限坐 4 人，用循环队列管理排队（容量 MAX=5，空一格判满）。下面代码执行后，循环队列是否已满？rear 的值是多少？\nconst int MAX = 5;\nint queue[MAX];\nint front = 0, rear = 0;\nvoid enqueue(int x) { queue[rear] = x; rear = (rear + 1) % MAX; }\nvoid dequeue() { front = (front + 1) % MAX; }\nint main() {\nenqueue(1); enqueue(2); enqueue(3); enqueue(4);\ndequeue(); dequeue();\nenqueue(5); enqueue(6);\n}",
          "options": [
            "A. 已满，rear = 1",
            "B. 未满，rear = 1",
            "C. 已满，rear = 2",
            "D. 未满，rear = 4"
          ],
          "answer": 0,
          "explanation": "入队 4 次 rear=4，出队 2 次 front=2；入队 5 得 rear=0，再入队 6 得 rear=1。判断 (rear+1)%MAX==front，即 (1+1)%5=2==front=2，故队列已满，rear=1。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202603_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "在以下计算机系统应用场景中，最适合使用循环队列的是（   ）。",
          "options": [
            "A. 函数调用过程中，保存局部变量和返回地址",
            "B. 表达式求值中的运算符优先级处理",
            "C. 操作系统中的进程优先级调度（高优先级先执行）",
            "D. 生产者和消费者问题中的共享缓冲区"
          ],
          "answer": 3,
          "explanation": "生产者消费者问题需要一个有界缓冲区，生产者写入、消费者按先进先出的顺序取出，循环队列用模运算复用空间、出队不搬移元素，最适合作为共享缓冲区。函数调用和表达式求值用栈，进程优先级调度用优先队列，均不合适，故选 D。",
          "source": "GESP2026-03",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_04",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "某文本编辑器把用户输入的字符依次压入栈 S。用户依次输入 X, Y, Z, W 后，连续执行两次撤销操作。每次撤销都会弹出栈顶一个字符。此时栈从栈底到栈顶的内容是（  ）。",
          "options": [
            "A. X Y",
            "B. X Y Z",
            "C. Y Z",
            "D. X Z"
          ],
          "answer": 0,
          "explanation": "栈是后进先出结构。依次压入 X、Y、Z、W 后，栈从底到顶为 X Y Z W，栈顶是 W。连续两次撤销各弹出栈顶一个字符：先弹出 W，再弹出 Z，栈中剩余 X、Y，因此从栈底到栈顶为 X Y，对应选项 A。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_05",
          "kp": "kp6_13",
          "type": "choice",
          "difficulty": 1,
          "question": "假设循环队列数组长度为 N=7，队空判断条件为 front==rear。入队和出队操作如下：\nconst int N = 7;\nint q[N];\nint front = 3, rear = 3;\nvoid enqueue(int x) { q[rear] = x; rear = (rear + 1) % N; }\nvoid dequeue() { front = (front + 1) % N; }\n依次执行：enqueue(10); enqueue(20); enqueue(30); dequeue(); enqueue(40); dequeue(); enqueue(50);\n最终 (front, rear) 的值是（  ）。",
          "options": [
            "A. (5, 1)",
            "B. (4, 0)",
            "C. (5, 0)",
            "D. (3, 1)"
          ],
          "answer": 0,
          "explanation": "入 10、20、30 后 rear=6；出队 front=4；入 40 rear=0；出队 front=5；入 50 rear=1。最终 (front,rear)=(5,1)。",
          "source": "GESP2026-06",
          "isJudge": false,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_18",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "在 C++ STL 中，stack 的 pop() 函数会返回栈顶元素并将其删除。",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 1,
          "explanation": "STL 中 std::stack 的 pop() 只删除栈顶元素，返回类型是 void，不会返回被删除的元素。需要先通过 top() 获取栈顶元素的值，再调用 pop() 删除它。题目说 pop() 返回栈顶元素，说法错误。",
          "source": "GESP2026-06",
          "isJudge": true,
          "answerText": null,
          "starterCode": null,
          "testCases": []
        },
        {
          "id": "l6_202606_19",
          "kp": "kp6_13",
          "type": "judge",
          "difficulty": 1,
          "question": "程序运行后会输出 2。\nint main() {\nqueue<int> q;\nq.push(1); q.push(2); q.push(3);\nq.pop();\ncout << q.front() << endl;\n}",
          "options": [
            "正确",
            "错误"
          ],
          "answer": 0,
          "explanation": "队列先进先出：依次入队 1、2、3 后队首为 1，q.pop() 弹出队首 1，此时队首变为 2，q.front() 返回 2 并输出，因此程序输出 2，说法正确。",
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
