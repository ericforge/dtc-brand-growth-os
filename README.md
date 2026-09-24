# DTC Brand Growth OS

面向**第一次做 DTC 的人**的执行工作台。不是文章，不是教程 —— 是一套可以照着一步步做完、并且每一步都有验收数字的操作系统。

> 设计原则：**第一次做 DTC 的人，不需要老师解释，也能照着一步一步完成。**

## 在线访问

https://ericforge.github.io/dtc-brand-growth-os/

## 它包含什么

| 部分 | 内容 |
| --- | --- |
| 全景地图 | Strategy → Market → Customer → Product → Validation → Supply → Brand → Trust → Website → Data → CRM → Audience Reach → Acquisition → Growth，点任意节点直达模块 |
| 14 个执行模块 | Strategy、Market、VOC、Product、Validation、Supply Chain、Brand、Trust & Proof、Website、Data、CRM、Audience Reach、Acquisition、Growth |
| Trust & Proof OS | 7 层信任模型、8 个建信任动作、Proof Library、Claim–Evidence Matrix、Risk Reversal System |
| Audience Reach OS | 精准触达率、8 个杠杆、Intent L1–L4、Touchpoint Map、Reach Funnel、KPI 体系、Reach Quality Score |
| Gate 0 – 7 | 八道项目闸门，每关都有数据验证条件与 Continue / Pivot / Stop 三种判定；参考值不是统一及格线 |
| 我现在该做什么 | 6 种状态（还没选品 / 已有产品 / 网站建设中 / 已上线没流量 / 有流量没转化 / CAC 过高）直接给出下一步 |
| 进度 Checklist | 共 **86** 项可执行检查，顶部实时显示 `已完成 / 86`，进度保存在浏览器本地 |

## 每个模块的固定结构

```
这一步解决什么  →  为什么重要  →  准备什么  →  Step 1/2/3 执行
→  做到什么算完成  →  检查清单  →  验收标准（数字）
→  常见错误  →  输出模板（可一键复制）
```

## V2.1 执行顺序

模块按真实依赖排列：

```
01 Strategy & Economics
02 Market & Competition
03 Customer & VOC
04 Product & Offer
05 Demand Validation
06 Supply Chain & Compliance
07 Brand & Positioning
08 Trust & Proof
09 Website & CRO
10 Data & Privacy
11 CRM & Customer Experience
12 Audience Reach
13 Acquisition
14 Growth & Scale
```

Audience Reach 可以提前做战略设计，但规模化 Acquisition 必须等产品、履约、官网、数据、CRM 和合规准备好。

## Gate 速查

| Gate | 判断什么 | 关键数字（示例） |
| --- | --- | --- |
| Gate 0 | Strategic Fit | CM1 / CM2、Break-even CAC / ROAS、现金周期可解释 |
| Gate 1 | Market Opportunity | 市场规模、竞争结构、切入缝隙有来源 |
| Gate 2 | Customer Problem | VOC 来源可追溯，痛点频次与样本量可解释 |
| Gate 3 | Product & Demand Validation | 产品规格、真实交易和验证反馈闭环 |
| Gate 4 | Product / Supply / Compliance Readiness | 供应、质量、法规和 Claim 证据已确认 |
| Gate 5 | Launch Readiness | Website、CWV、Tracking、Consent、CRM、客服和退货准备完成 |
| Gate 6 | Unit Economics / PMF Signal | 目标 CAC、Break-even ROAS、触达质量和复盘机制成立 |
| Gate 7 | Scale Readiness | 贡献毛利、现金、供应链和 SOP 能支持放量 |

## 两条核心公式

**信任**

```
Trust = Transparency × Evidence × Social Proof × Consistency × Risk Reversal × Delivery Experience
Trust ≠ 漂亮的网站 + 五星评价
```

**Unit Economics**

```
Gross Margin = Net Revenue - COGS
CM1 = Net Revenue - COGS - Payment - Fulfillment - Freight - Duties - Returns/Warranty variable cost
CM2 = CM1 - Acquisition Cost
Contribution LTV = 首单 CM1 + 后续订单 CM1 - 后续可变服务/留存成本
Break-even CAC = 目标回本周期内累计 Contribution Margin
Break-even ROAS = 1 ÷ Pre-ad Contribution Margin %
```

**精准触达**

```
精准用户触达率 = 已触达目标用户数 ÷ 可触达目标用户池
Reach Quality Score = Audience Accuracy × Channel Coverage × Creative Match × Frequency × Timing
（每项按 1–5 分诊断；不是行业 Benchmark，也不是统一及格线）
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

- 站内验收数字会显示为“参考起点 / 我的目标 / 实际值 / 数据源 / 判定”。参考值不是通用及格线，请按品类、渠道、客单价、决策周期和真实数据填写。
- First-party Data 仅指品牌直接收集并能在自身系统管理的数据；Platform-engaged Audience 和 Platform-modeled Audience 不能混称为一方数据。三者都要结合适用的 Consent、隐私和数据共享退出要求。
- 进度数据保存在浏览器 `localStorage`，不上传、不跨设备同步。

## License

MIT
