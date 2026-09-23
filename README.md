# DTC Brand Growth OS

面向**第一次做 DTC 的人**的执行工作台。不是文章，不是教程 —— 是一套可以照着一步步做完、并且每一步都有验收数字的操作系统。

> 设计原则：**第一次做 DTC 的人，不需要老师解释，也能照着一步一步完成。**

## 在线访问

https://ericforge.github.io/dtc-brand-growth-os/

## 它包含什么

| 部分 | 内容 |
| --- | --- |
| 全景地图 | Market → Customer → Product → Validation → Positioning → Trust & Proof → Audience Reach → Website → Conversion → CRM → Retention → Growth，点任意节点直达模块 |
| 14 个执行模块 | Strategy、Market、VOC、Product、Validation、Brand、Trust & Proof、Audience Reach、Supply Chain、Website、Data、Acquisition、CRM、Growth |
| Trust & Proof OS | 7 层信任模型、8 个建信任动作、Proof Library、Claim–Evidence Matrix、Risk Reversal System |
| Audience Reach OS | 精准触达率公式、8 个杠杆、Intent L1–L4、Touchpoint Map、Reach Funnel、KPI 体系 |
| Gate 0 – 7 | 八道项目闸门，每关都有数字验证条件与 Continue / Pivot / Stop 三种判定 |
| 我现在该做什么 | 6 种状态（还没选品 / 已有产品 / 网站建设中 / 已上线没流量 / 有流量没转化 / CAC 过高）直接给出下一步 |
| 进度 Checklist | 共 **86** 项可执行检查，顶部实时显示 `已完成 / 86`，进度保存在浏览器本地 |

## 每个模块的固定结构

```
这一步解决什么  →  为什么重要  →  准备什么  →  Step 1/2/3 执行
→  做到什么算完成  →  检查清单  →  验收标准（数字）
→  常见错误  →  输出模板（可一键复制）
```

## Gate 速查

| Gate | 判断什么 | 关键数字（示例） |
| --- | --- | --- |
| Gate 0 | 要不要做 | 毛利 ≥ 60%、资金覆盖 ≥ 3 个月 |
| Gate 1 | 市场是否成立 | 细分增速 ≥ 10%、CR3 < 60% |
| Gate 2 | 用户与需求是否真实 | 语料 ≥ 500 条、痛点频次 ≥ 20 |
| Gate 3 | 产品是否可交付 | ≥ 50 单真实交易、良率 ≥ 98% |
| Gate 4 | 品牌与信任是否成立 | Claim–Evidence 覆盖 100%、证据 ≥ 8 类 |
| Gate 5 | 官网与转化是否成立 | LCP ≤ 2.5s、加购率 ≥ 8%、结账完成 ≥ 45% |
| Gate 6 | 获客是否可规模化 | ≥ 2 渠道 CPA 达标、ROAS ≥ 3、回本 ≤ 180 天 |
| Gate 7 | 是否可以 Scale | LTV/CAC ≥ 3、月复合增长 ≥ 15% 且毛利不降 |

## 两条核心公式

**信任**

```
Trust = Transparency × Evidence × Social Proof × Consistency × Risk Reversal × Delivery Experience
Trust ≠ 漂亮的网站 + 五星评价
```

**精准触达**

```
精准用户触达率 = 已触达目标用户数 ÷ 可触达目标用户池
精准触达效率   = Audience Accuracy × Channel Coverage × Creative Match × Frequency × Timing
```

## 本地运行

纯静态站点，无需构建：

```bash
git clone https://github.com/ericforge/dtc-brand-growth-os.git
cd dtc-brand-growth-os
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 目录结构

```
.
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── data.js   # 全部内容数据（模块 / 两大 OS / Gate / 状态导航 / 术语）
│       └── app.js    # 路由、渲染、检查清单与进度持久化
└── README.md
```

想改内容，只需要改 `assets/js/data.js`，页面会自动同步。

## 说明

- 站内所有阈值（毛利率、CAC、LCP、转化率等）是**通用起点参考**，请按你的品类、渠道和阶段替换为自己的目标值。
- 进度数据保存在浏览器 `localStorage`，不上传、不跨设备同步。

## License

MIT
