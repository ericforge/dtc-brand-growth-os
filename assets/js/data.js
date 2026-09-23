/* DTC Brand Growth OS · 内容数据
   结构：12 个常规模块（各 5 项检查）+ Trust & Proof OS（13 项）+ Audience Reach OS（13 项）= 86 项 */

const SITE = {};

/* ============ 0. 全景地图 ============ */
SITE.flow = [
  { t: 'Market',        d: '市场与品类判断' },
  { t: 'Customer',      d: '用户与 VOC' },
  { t: 'Product',       d: '产品定义' },
  { t: 'Validation',    d: '需求验证' },
  { t: 'Positioning',   d: '定位与品牌' },
  { t: 'Trust & Proof', d: '信任与证据' },
  { t: 'Audience Reach',d: '精准触达' },
  { t: 'Website',       d: '官网承接' },
  { t: 'Conversion',    d: '转化与结账' },
  { t: 'CRM',           d: '客户资产' },
  { t: 'Retention',     d: '复购与留存' },
  { t: 'Growth',        d: '规模化放大' }
];

/* ============ 1. 模块 ============ */
SITE.modules = [
{
  id:'strategy', num:'01', title:'Strategy 战略与商业模式', short:'先算清怎么赢，再动手', gate:'Gate 0',
  goal:'把“我想做一个品牌”变成一门能被算清楚的生意：你在哪个市场、靠什么赢、靠什么赚钱、最多能承受多少获客成本。',
  why:'大多数 DTC 失败不是执行问题，而是商业模型不成立 —— 毛利撑不住 CAC，复购撑不住 LTV。一旦模型错了，后面每一步的努力都会被打折。',
  inputs:['候选品类 / 产品方向','可投入资金总额与时间预期','团队现有能力（供应链 / 内容 / 投放 / 客服）','现有供应链或工厂资源','可接受的回本周期'],
  steps:[
    { name:'Step 1 · 算清单件经济模型（Unit Economics）', detail:'把一件商品从出厂到交付的全部成本列全：货成本 + 头程/运费 + 包装 + 平台佣金 + 支付手续费 + 预计退换货损耗 + 售后备件摊销。得出单件贡献毛利 CM = 售价 − 全部变动成本。自有站目标毛利率 ≥ 60%，含平台渠道 ≥ 45%。' },
    { name:'Step 2 · 定义赚钱方式（LTV 来源）', detail:'明确复购来自哪里：耗材 / 配件 / 订阅 / 新品迭代 / 服务。给出假设：首单 CM、12 个月复购次数、客单价、LTV。没有 LTV 来源的品牌，只能靠不断买新客活着。' },
    { name:'Step 3 · 选定战场与差异化轴', detail:'选单品类切入还是多品类；确定你的差异化轴：性能 / 价格 / 人群 / 场景 / 设计 / 服务。每条差异化轴必须有可被验证的证据，否则只是文案。' }
  ],
  dod:['一页纸 Business Model Sheet 完成','毛利率达到目标区间','CAC 回本周期 ≤ 6 个月','差异化轴与竞品对照写清'],
  checks:[
    '已算出单件贡献毛利 CM 与目标毛利率（自有站 ≥60% / 含平台 ≥45%）',
    '已明确 LTV 来源（复购 / 配件 / 订阅 / 服务）并写出假设数值',
    '已算出可承受 CAC 上限（首单回本或 LTV×0.3 取严者）',
    '已写出差异化轴，并列出至少 3 个竞品做对照',
    '已确认资金可覆盖到首个验证周期（≥ 3 个月）且写明止损线'
  ],
  acceptance:['毛利率 ≥ 60%（自有站口径）','CAC 回本周期 ≤ 180 天','至少 1 条差异化主张可被第三方证据支撑'],
  mistakes:['先想销量、后算毛利 —— 卖得越多亏得越多','把平台自然流量当成自己的能力','漏算退换货、售后备件与客服人力成本','一开始就做多品类，供应链和心智同时崩'],
  template:`BUSINESS MODEL SHEET（一页纸）
--------------------------------------------
品类 / 产品：
目标市场：              目标人群（ICP 一句话）：
售价：                  单件变动成本合计：
  ├ 货成本：            ├ 头程/运费：
  ├ 包装：              ├ 平台佣金/支付费：
  └ 预计退换损耗：      └ 售后摊销：
单件贡献毛利 CM =        毛利率 =
LTV 假设：首单 CM __ + 12 个月复购 __ 次 × 客单 __ =
可承受 CAC 上限 =        回本周期目标 =
差异化轴（打勾一个）：□性能 □价格 □人群 □场景 □设计 □服务
差异化证据（可验证来源）：
止损线：连续 __ 周 CAC > __ 或 毛利 < __ 即暂停`
},
{
  id:'market', num:'02', title:'Market 市场与品类研究', short:'判断值不值得进、能不能进', gate:'Gate 1',
  goal:'回答三件事：这个市场有多大、竞争结构是什么样的、从哪条缝能进去。',
  why:'品类决定天花板和竞争烈度。选错品类，后面所有的产品、内容、投放努力都会被打折。这一步做浅，等于用后面的钱补前面的洞。',
  inputs:['品类核心关键词（10–20 个）','竞品清单（Top 20）','市场规模与增速数据源','价格带与销量档位数据','竞品评论数据源'],
  steps:[
    { name:'Step 1 · 量市场（TAM / SAM / SOM）', detail:'TAM（总市场）→ SAM（你渠道能触达的）→ SOM（3 年内现实可拿的）。至少用两个独立数据源交叉验证：品类搜索量趋势、平台品类规模、行业报告、海关/进口数据。' },
    { name:'Step 2 · 看结构（集中度与门槛）', detail:'计算头部集中度 CR3 / CR5；统计 Top10 竞品的评论数量分布（判断新进入者的信任门槛）；看广告位密度与关键词竞价成本。CR3 ≥ 60% 视为高壁垒，需要更强的差异化或换细分。' },
    { name:'Step 3 · 找缝隙（高需求 × 低满意度）', detail:'抓取竞品差评 200+ 条做聚类，找出「需求强烈但现有产品没解决好」的点。缝隙必须同时满足：有场景、有人群、有可支撑的价格带。' }
  ],
  dod:['市场规模 / 增速 / 集中度 / 价格带 四张表完成','差评聚类出 Top 5 未满足痛点','锁定 1 个可切入细分'],
  checks:[
    'TAM / SAM / SOM 均有数据来源且可复核',
    'Top 10 竞品的价格带、销量档位、评论数已制表',
    '头部集中度已计算（CR3 / CR5），并判断进入难度',
    '已抓取 ≥ 200 条竞品差评并完成 Top 5 痛点聚类',
    '已锁定 1 个切入细分（写清场景 + 人群 + 价格带）'
  ],
  acceptance:['目标细分年增速 ≥ 10%','切入价格带内有 ≥ 3 个可参照竞品','Top 5 痛点中至少 2 个能被你的产品解决'],
  mistakes:['只看市场总量，不看竞争结构','只用单一数据源，被平台口径误导','把搜索热度当成真实需求','忽略季节性，按峰值做库存和预算'],
  template:`MARKET SNAPSHOT
--------------------------------------------
品类：                    数据源 / 日期：
TAM：                     SAM：                SOM（3年）：
年增速：                  季节性峰值月份：
CR3 =       %             CR5 =       %        → 进入难度：□低 □中 □高
Top10 竞品表：品牌 | 价格 | 月销档位 | 评论数 | 评分 | 主打卖点
差评聚类 Top5：1)        2)        3)        4)        5)
切入细分：场景 ______ 人群 ______ 价格带 ______
可被我解决的痛点：`
},
{
  id:'voc', num:'03', title:'VOC 用户声音与洞察', short:'用用户原话定义需求', gate:'Gate 2',
  goal:'拿到用户真实语言：他们在什么场景、遇到什么问题、用什么词描述、担心什么、被什么说服。',
  why:'VOC 同时决定四件事：产品定义、品牌定位、广告 Hook、官网文案。而且它直接决定精准触达效率 —— 用用户原话写广告，CTR、落地页匹配度、CVR、CAC 会同时改善。',
  inputs:['竞品评论（站内 + 平台）','Reddit / 垂直论坛 / FB Groups 帖子','社媒评论与 KOL 评论区','客服与售后记录','搜索词报告'],
  steps:[
    { name:'Step 1 · 采集（≥ 500 条真实语料）', detail:'只采集真实用户写的话，禁止用 AI 生成语料。来源要注明、可回溯。比例建议：平台评论 50%、社区讨论 30%、客服记录 20%。' },
    { name:'Step 2 · 编码（打标签）', detail:'每条语料打 4 类标签：痛点 / 场景 / 期待 / 顾虑；再额外标「触发词」——用户主动用来描述需求的那个词。' },
    { name:'Step 3 · 排序与沉淀（用户语言词典）', detail:'按「频次 × 强度」排序，产出 Top10 痛点、Top10 用户原话、禁用词清单。原话要能直接拿去做广告开头和 PDP 首屏。' }
  ],
  dod:['VOC 词典 v1 完成','Top10 痛点与 Top10 原话产出','禁用词清单产出'],
  checks:[
    '真实语料 ≥ 500 条，来源可回溯',
    '每条语料已完成 痛点 / 场景 / 期待 / 顾虑 标签',
    'Top10 痛点每条出现次数 ≥ 20 次',
    '已沉淀 ≥ 30 条可直接用作广告 Hook 的用户原话',
    '已产出禁用词清单（自嗨词、行业黑话、极限词）'
  ],
  acceptance:['语料 ≥ 500 条且来源标注完整','Top10 痛点均达到频次阈值','至少 30 条原话已实际写入广告或 PDP'],
  mistakes:['只看好评，最值钱的信息在差评和中评里','用 AI 编造语料，得到的是模型的想象不是用户','只做定性不做频次统计，无法排序优先级','词典做完就存档，没有落到文案和产品'],
  template:`VOC 词典 v1
--------------------------------------------
语料总量：      条     来源占比：平台 __% 社区 __% 客服 __%
Top10 痛点（频次 × 强度）：
 1) ________________  频次 __  强度 __
 ...
Top10 用户原话（可直接用）：
 1) "________________________________"
 ...
场景分布：________________________________
购买顾虑 Top5：___________________________
禁用词：___________________________________
→ 已写入：□广告Hook □PDP首屏 □FAQ □客服话术`
},
{
  id:'product', num:'04', title:'Product 产品定义与差异化', short:'把痛点变成可执行规格', gate:'Gate 2',
  goal:'把 VOC 输出翻译成一份工厂和设计师能直接执行的产品规格书，以及一套有证据支撑的卖点结构。',
  why:'DTC 的产品不是「参数最强」，而是「在某个具体场景下明显更好」。卖点没有证据，就只是噪音；参数没有取舍，就会把成本打爆。',
  inputs:['VOC Top10 痛点','竞品规格对照表','目标成本与售价区间','目标市场的强制认证清单','供应链可实现能力'],
  steps:[
    { name:'Step 1 · 定规格（三层清单）', detail:'把功能分成 Must-have（覆盖 VOC Top5 痛点）、Nice-to-have（有预算再加）、不做（明确写下来）。「不做清单」和「必做清单」同等重要。' },
    { name:'Step 2 · 定卖点结构', detail:'卖点控制在 5–7 个，分成：Core（1 个主卖点）+ Support（2–3 个支撑）+ Proof（每个卖点对应一个可验证证据）。没有证据的卖点直接删掉。' },
    { name:'Step 3 · 成本倒推与定价', detail:'目标成本 = 售价 × (1 − 目标毛利率) − 履约与售后成本。用目标成本去和工厂谈，而不是先问工厂报价再定售价。' }
  ],
  dod:['PRD 与规格书完成','卖点矩阵（Claim → Proof → Source）完成','目标成本达成'],
  checks:[
    'Must-have 清单 100% 覆盖 VOC Top5 痛点',
    '已明确写出「不做清单」',
    '卖点数量 ≤ 7 个，且每个都有对应证据',
    '已完成目标成本倒推，工厂可实现',
    '目标市场强制认证已列入开发计划（非上市前补办）'
  ],
  acceptance:['VOC Top5 痛点覆盖率 100%','目标成本达成率 ≥ 95%','至少 2 个核心卖点有第三方可验证证据'],
  mistakes:['堆参数，规格书像说明书不像卖点','卖点超过 7 个，用户一个都记不住','没有「不做清单」，成本失控','上市前才补认证，导致断货或下架'],
  template:`PRD 简版 + 卖点矩阵
--------------------------------------------
产品：                    目标售价：          目标毛利率：
Must-have（对应 VOC 痛点）：
 1) ____________  ← 痛点 #__
Nice-to-have：_____________________________
明确不做：_________________________________
卖点矩阵：
 CLAIM                  PROOF                    SOURCE
 ____________           ____________             ____________
成本倒推：目标成本 = 售价 ×(1−毛利率) − 履约售后 = ______
工厂报价：______   差距：______   解决方案：______
认证清单：□UL/ETL □CE □FCC □RoHS □其他 ______`
},
{
  id:'validation', num:'05', title:'Validation 需求与产品验证', short:'小成本先证明有人愿意买', gate:'Gate 3',
  goal:'在投入大货和广告预算之前，用最小成本拿到「有人真的付款」的证据。',
  why:'跳过验证，等于用库存和广告费做赌注。验证的目的不是证明你会成功，而是尽快、尽可能便宜地发现你会失败。',
  inputs:['落地页 / 预售页','样品或工程机','真实拍摄素材','种子人群（邮件列表 / 社群 / KOL 受众）','验证预算上限'],
  steps:[
    { name:'Step 1 · 测意愿（Fake-door / 预售页）', detail:'用真实卖点和真实价格做落地页，投小额预算（建议总预算 ≤ 10% 项目资金），看加购率、留资率、结算页到达率。核心看「到付款前一步」的转化率，而不是点击率。' },
    { name:'Step 2 · 测真实交易（小批量 50–200 台）', detail:'做小批量真实售卖，完整走一遍：下单 → 支付 → 发货 → 签收 → 使用 → 售后。这一步能暴露所有纸面上看不到的坑。' },
    { name:'Step 3 · 回收反馈与退货原因', detail:'对首批用户做 1 对 1 回访（≥ 20 人），结构化记录：为什么买、差点没买的顾虑、使用中超出预期/低于预期的点、退货原因分类。' }
  ],
  dod:['完成一次完整真实交易闭环','拿到 ≥ 20 份结构化用户回访','退货原因分类表完成'],
  checks:[
    '落地页已上线并投放，数据可查',
    '已完成 ≥ 50 单真实交易（非亲友单）',
    '已完成 ≥ 20 份结构化用户回访',
    '退货原因已分类且每类有改进动作',
    '验证预算控制在预设上限内'
  ],
  acceptance:['落地页 CVR ≥ 3% 或 加购率 ≥ 8%','小批量 ≥ 50 单且退货率 ≤ 品类均值','首批用户 NPS ≥ 30'],
  mistakes:['只测点击不测付款 —— 点击是便宜的，付款不是','把样品表现当成量产表现','忽略退货原因，把它只当成本不当信号','没设验证预算上限，验证变成豪赌'],
  template:`VALIDATION SCORECARD
--------------------------------------------
验证周期：____ 至 ____      预算上限：____  实际：____
落地页：访客 __  加购 __ ( __% )  到结算 __ ( __% )  成交 __ ( __% )
小批量：投放 __ 台  成交 __ 单  退货 __ ( __% )
退货原因分类：质量 __ / 预期不符 __ / 物流 __ / 其他 __
用户回访（≥20）：
 为什么买：______________________________
 差点不买的原因：_________________________
 超预期：________  低于预期：________
NPS：______
结论：□Continue  □Pivot（改 ______）  □Stop（原因 ______）`
},
{
  id:'brand', num:'06', title:'Brand 品牌定位与识别', short:'一句话说清你是谁', gate:'Gate 4',
  goal:'让用户能用一句话复述：你是谁、为谁、凭什么不一样。并把它落到视觉、语气和内容上。',
  why:'定位决定一致性。定位不清，内容、设计、投放各说各话，用户的记忆成本翻倍，品牌资产永远沉淀不下来。',
  inputs:['VOC 词典','差异化轴与竞品定位地图','目标人群画像','商标可注册性初检结果'],
  steps:[
    { name:'Step 1 · 写定位陈述', detail:'句式：对（目标人群）来说，（品牌）是（品类）中唯一（差异化），因为（证据）。写完拿给 5 个目标用户看，让他们复述 —— 复述不出来就是没写清楚。' },
    { name:'Step 2 · 搭品牌骨架', detail:'Mission / Values / Tone of Voice / 视觉系统（Logo、色板、字体、图片风格）。Tone of Voice 必须给正反例各 3 条，否则执行的人无法判断。' },
    { name:'Step 3 · 命名与 Slogan 检查', detail:'三项硬检查：商标可注册（检索过）、可读可拼（电话里能说清）、可搜索（搜得到你）。' }
  ],
  dod:['Brand Core 一页纸完成','视觉规范 v1 完成','Tone of Voice 正反例完成'],
  checks:[
    '定位陈述已写出并覆盖 人群/品类/差异化/证据',
    '5 个目标用户能正确复述定位',
    'Tone of Voice 已给出正反例各 ≥ 3 条',
    '视觉系统 v1（Logo/色板/字体/图片风格）已落地',
    '商标可注册性检索已完成'
  ],
  acceptance:['定位复述正确率 ≥ 4/5','商标检索无高风险冲突','官网与广告物料已统一使用视觉规范 v1'],
  mistakes:['定位写成口号（"让生活更美好"），没有信息量','Tone of Voice 只写形容词，没有正反例','视觉风格与定位脱节（高端定位 + 低价感素材）','忽视商标检索，做到一半被迫改名'],
  template:`BRAND CORE（一页纸）
--------------------------------------------
定位陈述：
 对 __________________ 来说，
 __________________ 是 __________________ 中
 唯一 __________________ 的品牌，因为 __________________。
Mission：____________________________________
Values（≤3 条）：____________________________
Tone of Voice：
 是：1) ______  2) ______  3) ______
 不是：1) ______  2) ______  3) ______
视觉：Logo ___  主色 ___  辅色 ___  字体 ___  图片风格 ___
Slogan：________   检索结论：□可注册 □有风险 □不可用
复述测试：__ / 5 人能正确复述`
},
{
  id:'trust', num:'07', title:'Trust & Proof OS', short:'信任与证据系统（独立章节）', gate:'Gate 4',
  link:'trust',
  goal:'把「信任」从官网的一个 CRO 元素，升级成独立的操作系统。',
  why:'DTC 用户不是在判断「品牌好不好」，而是在连续判断 8 件事：公司是真的吗、产品真的有效吗、别人真的买过吗、评价是真的吗、会按时发货吗、坏了怎么办、退款麻烦吗、这家公司会不会消失。任何一环掉链子，前面的流量全部浪费。',
  inputs:['公司主体与团队资料','产品测试数据与认证','真实客户评价与 UGC','履约与售后流程','第三方平台与媒体资产'],
  steps:[
    { name:'进入独立章节', detail:'Trust & Proof OS 包含 7 层信任模型、8 个建信任动作、4 个交付物与 13 项检查清单。点击右侧按钮进入。' }
  ],
  dod:[], checks:[], acceptance:[], mistakes:[],
  template:''
},
{
  id:'reach', num:'08', title:'Audience Reach OS', short:'精准用户触达系统（独立章节）', gate:'Gate 5',
  link:'reach',
  goal:'让「应该看到你的人在决策周期里反复看到你」，而不是让更多人看到你。',
  why:'很多品牌增长失败不是产品不好、网站不好，而是真正可能购买的人根本没有足够频率地看到你。问题通常不是流量不够，而是精准用户有效触达不足。',
  inputs:['ICP 定义与受众规模','渠道触点清单','内容与素材库','一方数据池','触达看板'],
  steps:[
    { name:'进入独立章节', detail:'Audience Reach OS 包含精准触达率公式、8 个杠杆、Intent 四层模型、Reach Funnel、KPI 体系与 13 项检查清单。点击右侧按钮进入。' }
  ],
  dod:[], checks:[], acceptance:[], mistakes:[],
  template:''
},
{
  id:'supply', num:'09', title:'Supply Chain 供应链与履约', short:'供得上、质量稳、赔得起', gate:'Gate 3',
  goal:'保证卖得出去时供得上、供得上时质量稳定、出问题时赔得起。',
  why:'DTC 的口碑是履约堆出来的。一次大面积延迟发货或质量问题，会把前面所有信任建设清零。',
  inputs:['候选供应商清单','认证与质检要求','头程/海外仓/尾程报价','备件与售后方案','销量预测'],
  steps:[
    { name:'Step 1 · 供应商筛选与验厂', detail:'至少 2 家可切换供应商（主 + 备）。验厂看：产能、良率、认证资质、过往客户、配合度。谈清 MOQ、交期、付款条件、质量责任条款。' },
    { name:'Step 2 · 质量与认证', detail:'强制认证必须在开发阶段完成，不是上市前补办。出货用 AQL 抽检标准，明确不合格处理方式与责任方。' },
    { name:'Step 3 · 履约方案与 SLA', detail:'确定头程（海运/空运比例）、海外仓或 3PL、尾程配送商。写清发货 SLA、异常件处理流程、缺货预案。' }
  ],
  dod:['主 + 备供应商确定','认证齐备','履约 SLA 书面化'],
  checks:[
    '已有 ≥ 2 家可切换供应商并完成验厂',
    '目标市场强制认证已全部取得',
    '已确定 AQL 抽检标准与不合格处理流程',
    '已确定头程 / 海外仓 / 尾程方案并签 SLA',
    '已建立备件库存与安全库存水位规则'
  ],
  acceptance:['首批大货合格率 ≥ 98%','订单发货 SLA ≤ 48 小时','库存周转天数 ≤ 90 天','缺货断供天数 ≤ 5 天/年'],
  mistakes:['单一供应商，一次意外就全线断供','认证临上市才补，导致下架或断货','只看货代报价不看实际时效与丢件率','没有备件计划，售后只能整件换新'],
  template:`SUPPLY & FULFILLMENT SHEET
--------------------------------------------
主供应商：______  MOQ __  交期 __ 天  良率 __%
备供应商：______  MOQ __  交期 __ 天
认证状态：□UL/ETL □CE □FCC □RoHS □其他 ___  到期日：___
质检：AQL 标准 ___  不合格处理：____________
履约：头程 ______  海外仓/3PL ______  尾程 ______
SLA：下单→出库 __ h   出库→签收 __ 天   异常件流程：____
安全库存：___ 天销量    备件库存：___ 件
断供预案：_________________________________`
},
{
  id:'website', num:'10', title:'Website 官网与转化', short:'把流量变成订单', gate:'Gate 5',
  goal:'让官网同时完成两件事：承接信任、完成转化。',
  why:'官网是 DTC 唯一的自有资产。它既是转化的终点，也是信任的总账本。这里做的每一个动作，都会同时影响 CVR 和品牌感知。',
  inputs:['VOC 原话与卖点矩阵','Trust & Proof 资产包','真实产品图与视频','FAQ 与售后政策','技术栈与埋点方案'],
  steps:[
    { name:'Step 1 · 信息架构与 PDP 结构', detail:'PDP 固定六段：用户原话首屏 → 核心卖点 + 证据 → 场景化演示 → 对比表 → 评价与 UGC → 风险逆转（退换/质保）+ FAQ。首屏必须用用户语言，不是参数。' },
    { name:'Step 2 · 转化组件', detail:'价格全程透明（Price + Discount + Shipping + Tax + ETA + Return + Warranty 提前展示）；CTA 明确且重复出现；信任徽章放真实可点的；FAQ 用 VOC 顾虑反向写。' },
    { name:'Step 3 · 速度与移动体验', detail:'移动端优先。图片压缩、懒加载、减少第三方脚本。上线前用真实手机在 4G 下走完一遍下单。' }
  ],
  dod:['PDP 六段结构落地','价格与政策全透明','移动端实测通过'],
  checks:[
    'PDP 首屏使用 VOC 用户原话而非参数',
    '每个核心卖点旁都有可点击的证据来源',
    '价格 / 运费 / 税 / ETA / 退货政策在加购前可见',
    '移动端 LCP ≤ 2.5s（实测）',
    '已用真实手机完成一次完整下单'
  ],
  acceptance:['移动端 LCP ≤ 2.5s','PDP → 加购率 ≥ 8%','结账完成率 ≥ 45%','移动端跳出率 ≤ 55%'],
  mistakes:['把首页做成说明书，用户找不到入口','参数堆砌，没有场景和证据','运费和税到结账才出现，弃购飙升','只在电脑上测试，移动端一堆问题'],
  template:`PDP 结构检查表
--------------------------------------------
[ ] 首屏：用户原话 + 场景图（不是参数表）
[ ] 卖点区：Claim → Proof → Source 三段齐全
[ ] 演示区：真实使用场景视频 / 拆机 / 实测
[ ] 对比表：与 __ 个竞品逐项对比
[ ] 评价区：Verified Purchase + UGC + 差评可见
[ ] 风险逆转：退货 __ 天 / 质保 __ 年 / 售后响应 __ h
[ ] FAQ：覆盖 VOC Top5 顾虑
[ ] 价格透明：□运费 □税 □ETA □退货 □质保
[ ] 移动端 LCP：___ s   加购率：___%   结账完成率：___%`
},
{
  id:'data', num:'11', title:'Data 数据基建与度量', short:'让增长可被度量和归因', gate:'Gate 5',
  goal:'让每一步增长都能被度量、被归因、被复盘，而不是靠感觉决策。',
  why:'没有数据基建，所有优化都是猜。而且平台侧数据和后端订单永远对不上，必须提前设计对账机制。',
  inputs:['埋点方案（GA4 / 像素 / 服务端事件）','订单系统数据','UTM 规范','指标字典'],
  steps:[
    { name:'Step 1 · 事件埋点', detail:'至少覆盖：浏览 → 加购 → 进入结算 → 填写信息 → 支付成功。关键事件用服务端上报（不受浏览器限制影响）。所有外链必须带 UTM。' },
    { name:'Step 2 · 指标字典与看板', detail:'每个指标写清：定义、口径、数据源、负责人、更新频率。没有定义的指标不能进看板。' },
    { name:'Step 3 · 归因与实验机制', detail:'确定归因模型并固定下来（不要频繁切换导致数据不可比）。建立 A/B 实验流程：假设 → 样本量 → 周期 → 判定规则。' }
  ],
  dod:['漏斗事件 100% 覆盖','周度增长看板上线','首个 A/B 实验跑完'],
  checks:[
    '核心漏斗 5 个事件已埋点且验证通过',
    '关键转化事件已使用服务端上报',
    'UTM 规范已文档化且全员执行',
    '指标字典已覆盖所有看板指标',
    '已完成 ≥ 1 个完整 A/B 实验并得出结论'
  ],
  acceptance:['平台数据与后端订单误差 ≤ 10%','周度看板按时产出 ≥ 4 周','实验结论可复现'],
  mistakes:['只看 GA 不看后端真实订单','指标没有统一定义，各说各话','UTM 乱写，渠道归因一片混乱','不做实验，把相关性当因果'],
  template:`DATA FOUNDATION CHECK
--------------------------------------------
漏斗事件：□ViewContent □AddToCart □BeginCheckout
          □AddPaymentInfo □Purchase（服务端）
UTM 规范：source=___ medium=___ campaign=___ content=___
指标字典：
 指标 | 定义 | 口径 | 数据源 | 负责人 | 频率
 CAC | ...  | ...  | ...    | ...    | 周
对账：平台订单 __ vs 后端订单 __   误差 __%
归因模型：□末次点击 □数据驱动 □其他 ___（固定 __ 个月）
实验台账：假设 / 变体 / 样本量 / 周期 / 结论`
},
{
  id:'acquisition', num:'12', title:'Acquisition 获客与投放', short:'建立可规模化的获客引擎', gate:'Gate 6',
  goal:'建立可预测、可规模化的获客引擎，并明确什么时候必须刹停。',
  why:'获客是唯一能直接花钱买增长的地方，也最容易失控。纪律比技巧重要：一次没刹住的放量，能吃掉半年的利润。',
  inputs:['渠道分层方案','素材库与 VOC Hook','落地页','CAC 上限与止损线','一方数据池'],
  steps:[
    { name:'Step 1 · 渠道分层（5 类 Reach Engine）', detail:'① Intent（Google/SEO/Shopping）② Algorithm（Meta/TikTok）③ Authority（YouTube/KOL/PR）④ Community（Reddit/群组/论坛）⑤ Owned（Email/SMS/社群）。先做透 1–2 类，不要同时开 5 个。' },
    { name:'Step 2 · 三段匹配', detail:'Creative × Audience × Landing Page 必须匹配同一 Intent。广告开头用用户原话做人群过滤（"Power goes out often?"），这本身就是一种定向。' },
    { name:'Step 3 · 放量纪律', detail:'每日预算增幅 ≤ 20%；CPA 连续 3 天超阈值即暂停并检查；每周上新 ≥ 5 条素材。把纪律写成规则，不要靠临场判断。' }
  ],
  dod:['至少 2 个渠道达到目标 CPA','素材迭代机制运转','止损规则书面化并执行'],
  checks:[
    '已选定 1–2 类主渠道并跑通（未同时开 5 个）',
    'Creative / Audience / 落地页 三者对同一 Intent 匹配',
    '已建立每周 ≥ 5 条新素材的上新节奏',
    '放量规则已写成文档（日增幅 ≤20%、CPA 超限即停）',
    '一方数据回传已打通（用于再营销与 Lookalike）'
  ],
  acceptance:['≥ 2 个渠道 CPA ≤ 目标 CAC','首单 ROAS ≥ 3','新客占比 ≥ 60%','连续 4 周 CAC 波动 ≤ 20%'],
  mistakes:['同时开 5 个渠道，每个都跑不透','素材不迭代，靠加预算续命','只看 ROAS 不看新客占比，被老客复购美化','没有止损线，亏损放量'],
  template:`ACQUISITION SCORECARD（周）
--------------------------------------------
渠道 | 花费 | 新客数 | CPA | 首单ROAS | 新客占比 | 判定
_____|_____|_______|_____|_________|_________|_____
目标 CAC：____   止损线：CPA > ____ 连续 3 天即停
放量规则：日增幅 ≤ 20%
素材：本周上新 __ 条（目标 ≥5）   Top Hook：____________
一方数据：网站访客 __ / 邮箱 __ / 加购未付 __ / 客户 __
下周动作：_________________________________`
},
{
  id:'crm', num:'13', title:'CRM 客户关系与私域', short:'把买家变成可反复触达的资产', gate:'Gate 6',
  goal:'把一次性买家变成可反复触达、可再激活的资产，同时回收口碑。',
  why:'付费流量越来越贵，唯一能对冲 CAC 的是自有触达能力。而且 CRM 是评价、UGC 和复购的共同来源。',
  inputs:['邮箱 / SMS 列表','分层规则','自动化流程设计','评价与 UGC 回收机制'],
  steps:[
    { name:'Step 1 · 留资与分层', detail:'留资不要只会弹"订阅享 9 折"，要给出对等价值（指南 / 对比表 / 场景方案）。按热度分层：Hot（结算/加购/PDP/搜索）、Warm（内容读者/视频观看/社媒互动）、Cold（泛人群/相似人群）。' },
    { name:'Step 2 · 生命周期自动化', detail:'至少 4 条：欢迎序列、弃购挽回、使用后跟进（要评价/UGC）、复购与沉睡唤醒。每条写清触发条件、内容、节奏、退出条件。' },
    { name:'Step 3 · 口碑回收', detail:'评价请求时机放在"已体验到价值"之后（如签收后 N 天），不是签收当天。差评走服务流程，好评转 UGC 与广告素材。' }
  ],
  dod:['留资机制上线','4 条自动化流程运转','评价回收机制运转'],
  checks:[
    '已建立非折扣型的留资价值主张',
    '受众已按 Hot / Warm / Cold 分层',
    '已上线 ≥ 4 条生命周期自动化流程',
    '评价请求已设置在体验后触发',
    '好评已回流为 UGC 与广告素材'
  ],
  acceptance:['邮箱订阅转化率 ≥ 3%','90 天复购率 ≥ 15%','评价回收率 ≥ 5%','自动化流程贡献 GMV ≥ 15%'],
  mistakes:['邮件只发促销，退订率飙升','不分人群，所有人收同样的内容','没有弃购挽回，白丢最热的一批人','评价只在售后问一次，回收率低'],
  template:`CRM / RETENTION SHEET
--------------------------------------------
留资主张：□折扣 □指南 □对比表 □场景方案 □其他 ___
订阅转化率：___%     列表规模：___
分层：Hot __  Warm __  Cold __
自动化流程：
 1) 欢迎序列      触发 ___  邮件 __ 封  开启率 __%
 2) 弃购挽回      触发 ___  挽回率 ___%
 3) 使用后跟进    触发 ___  评价回收率 ___%
 4) 复购/唤醒     触发 ___  90天复购率 ___%
评价：总数 __  均分 __  UGC 转化 __ 条
自动化贡献 GMV 占比：___%`
},
{
  id:'growth', num:'14', title:'Growth 增长与 Scale', short:'在单位经济成立后再放大', gate:'Gate 7',
  goal:'在单位经济成立的前提下放大规模，而不是放大亏损。',
  why:'Scale 是放大器：单位经济为正，放大是增长；单位经济为负，放大是加速失血。这一关的门槛必须是数字，不是感觉。',
  inputs:['LTV/CAC 与贡献毛利数据','复购与客单提升方案','新渠道与新市场清单','组织 SOP 与周会机制'],
  steps:[
    { name:'Step 1 · 提升客单与复购', detail:'Bundle、订阅、配件生态、会员。先做客单与复购，再谈投更多钱 —— 这能把 CAC 上限整体抬高。' },
    { name:'Step 2 · 有序扩张', detail:'新渠道 / 新市场 / 线下 / B2B，一次只开一个，每个给 90 天达到目标 CPA 的期限，达不到就关。' },
    { name:'Step 3 · 组织化', detail:'把跑通的动作写成 SOP，建立周会（看板 + Gate 状态 + 下周三个动作）。人不稳定时，SOP 是唯一能保住结果的东西。' }
  ],
  dod:['LTV/CAC ≥ 3 且稳定','至少 1 条扩张路径跑通','核心动作 SOP 化'],
  checks:[
    'LTV/CAC ≥ 3 且连续 8 周稳定',
    '客单提升方案（Bundle/订阅/配件）已上线',
    '新渠道一次只开 1 个并设 90 天期限',
    '核心执行动作已 SOP 化',
    '已建立周会机制（看板 + Gate 状态 + 下周动作）'
  ],
  acceptance:['LTV/CAC ≥ 3','月复合增长 ≥ 15% 且贡献毛利不下降','新渠道 90 天内达到目标 CPA','核心流程 SOP 覆盖率 ≥ 80%'],
  mistakes:['单位经济还没正就放量','渠道扩张快于供应链能力，交付崩盘','只靠个人经验，没有 SOP','只看 GMV 不看贡献毛利，规模越大越亏'],
  template:`GROWTH / SCALE REVIEW
--------------------------------------------
LTV/CAC：____ （≥3 才可 Scale）   贡献毛利：___%
客单提升：Bundle 客单 __ / 订阅占比 __% / 配件渗透 __%
扩张路径：渠道 ______  市场 ______  期限 __ 天  目标 CPA __
          当前 CPA __  → 判定：□达标扩量 □观察 □关闭
月复合增长：___%     GMV：____   贡献毛利：___%
SOP 覆盖：___%（目标 ≥80%）  未覆盖关键动作：______
周会：□看板 □Gate 状态 □下周三个动作
Gate 7 判定：□Continue（放量） □Pivot □Stop`
}
];

/* ============ 2. Trust & Proof OS ============ */
SITE.trust = {
  id:'trust', num:'07', title:'Trust & Proof OS',
  lead:'DTC 用户不是在判断「品牌好不好」，而是在连续判断 8 件事。任何一环掉链子，前面的流量全部浪费。',
  questions:['这家公司是真的吗？','产品真的有效吗？','别人真的买过吗？','评价是真的吗？','会按时发货吗？','坏了怎么办？','退款会不会很麻烦？','这家公司会不会消失？'],
  formula:'Trust = Transparency × Evidence × Social Proof × Consistency × Risk Reversal × Delivery Experience',
  antiFormula:'Trust ≠ 漂亮的网站 + 五星评价',
  layers:[
    ['品牌真实性','About、品牌故事、统一视觉','公司主体、团队、创始人、工厂、地址、电话、LinkedIn、媒体资料'],
    ['产品可信度','PDP、参数、FAQ、Comparison','实测数据、测试方法、实验报告、认证、拆机、真实演示'],
    ['第三方证明','Review、UGC、KOL','Verified Purchase、第三方测评、媒体、专家、奖项、客户 Logo'],
    ['交易安全','Returns、Warranty、Payment','支付安全、税费、库存、配送 ETA、退款流程透明'],
    ['履约能力','Shipping、3PL、Inventory','本地仓、Track Order、发货 SLA、物流商、交付案例'],
    ['服务可信度','FAQ、Support、Email','在线客服、响应时效、维修中心、备件、售后流程'],
    ['长期关系','CRM、Review、Referral','Community、产品更新、客户案例、问题处理机制']
  ],
  actions:[
    { t:'建立 Evidence System', d:'很多品牌不是「说得不够」，而是 Claim 很多、Proof 太少。不要只写 Fast Charging，要写 0–80% in 42 minutes / Tested at 25°C / Using XXX charger / Test Method →。形成 CLAIM ↓ PROOF ↓ SOURCE ↓ TRUST 的链路，每一个核心卖点都要对应可验证证据。' },
    { t:'建立 Brand Proof Library', d:'不要只做 Content Library，还要做 Proof Library：产品证据（Lab Test）、性能（Benchmark）、认证（UL / ETL / CE）、客户（Review）、使用（UGC）、专家（Expert Review）、媒体（Press）、经营（Years in Business）、工厂（Factory Video）、物流（Local Warehouse）、服务（Repair Center）、规模（Customers Served）、专利（Patent）、渠道（Retail / Distributor）。一次建设，网站 / 广告 / Amazon / EDM / B2B 全部可复用。' },
    { t:'主动公开限制条件', d:'高信任品牌不只说 Everything is perfect，还会说 This product may not be suitable if...：不适用环境、不兼容设备、实际性能限制、极端温度影响、哪些配件不包含。这种 Transparency 会显著降低「只想让我下单」的感觉。' },
    { t:'增加「真实的人」', d:'很多 DTC 网站只有 Logo + 产品 + AI 图片 + AI 文案，但没有 Founder、Product Engineer、Customer Support、Factory、Warehouse、Customer。真实人物能把一个 Website 变成一个真实 Organization。' },
    { t:'增加「可验证身份」', d:'最强的信任是：用户可以离开你的网站验证你。Google Business、LinkedIn、YouTube、Amazon Store、Trustpilot、BBB、Instagram、Reddit、媒体报道、认证机构数据库、专利数据库、线下零售商。这种 Cross-check 比网站自己写「Trusted Brand」强得多。' },
    { t:'提高交易透明度', d:'用户不应该到 Checkout 才发现 Shipping Fee、Tax、Delivery Time。应提前展示：Price + Discount + Shipping + Tax + ETA + Return + Warranty，即 Total Purchase Transparency。' },
    { t:'把售后能力可视化', d:'只写 2-Year Warranty 不够，用户想知道坏了以后谁处理、多久处理、怎么处理。直接展示流程：Problem ↓ Submit Ticket ↓ Response < 24h ↓ Diagnosis ↓ Replacement / Repair ↓ Resolved。有 US/EU Warehouse、Repair Center、Spare Parts 都要明确展示。' },
    { t:'公开问题处理记录', d:'建立 Transparency / Product Update Page：Known Issues、Firmware Updates、Product Improvements、Recall Information、FAQ Updates。甚至可以写 Customers reported X. We changed Y in Version 2. 真正的长期信任不是「我们从不出问题」，而是出了问题会公开处理和持续改进。' }
  ],
  deliverables:[
    ['Trust Matrix','用户每个阶段在担心什么（按 7 层 × 决策阶段拆解）'],
    ['Proof Library','我们有哪些可验证证据（按 14 类证据归档）'],
    ['Claim–Evidence Matrix','每个卖点由什么证明（CLAIM / PROOF / SOURCE / TRUST）'],
    ['Risk Reversal System','Warranty / Return / Service / Guarantee 的完整设计']
  ],
  chain:'Market ↓ Customer ↓ Product ↓ Validation ↓ Brand ↓ TRUST & PROOF ↓ Website ↓ Content ↓ Traffic ↓ Conversion ↓ CRM ↓ Retention',
  checks:[
    '已产出 Trust Matrix（7 层信任 × 决策阶段）',
    '已建立 Proof Library 并归档 ≥ 8 类证据',
    '已完成 Claim–Evidence Matrix，核心卖点 100% 有证据',
    '已设计 Risk Reversal System（质保 / 退货 / 服务 / 承诺）',
    '官网已展示公司主体、团队、地址、电话等可核验信息',
    '已公开展示 ≥ 3 类第三方可验证身份（平台 / 媒体 / 认证库）',
    '已在加购前完整展示 价格+运费+税+ETA+退货+质保',
    '售后流程已可视化（响应时效 / 处理步骤 / 备件与维修中心）',
    '已主动公开产品限制条件与不适用人群',
    '评价区已区分 Verified Purchase 并保留差评可见',
    '已上线 Transparency / Product Update 页面',
    '已用真实人物（创始人/工程师/客服/工厂）替代纯 AI 素材',
    '核心实测数据已标注测试方法与测试条件'
  ],
  acceptance:['Claim–Evidence Matrix 覆盖率 100%','Proof Library 证据类型 ≥ 8 类','官网信任元素检查通过项 ≥ 12/13'],
  template:`CLAIM → EVIDENCE MATRIX
--------------------------------------------
CLAIM                PROOF                    SOURCE              TRUST
____________         ____________             ____________        ______
____________         ____________             ____________        ______
____________         ____________             ____________        ______
（每一条 CLAIM 必须有可点击 / 可查证的 SOURCE，否则删除该 CLAIM）

PROOF LIBRARY 归档状态：
□Lab Test □Benchmark □Certification □Review □UGC
□Expert Review □Press □Years in Business □Factory Video
□Local Warehouse □Repair Center □Customers Served □Patent □Retail

RISK REVERSAL：
退货 __ 天 / 质保 __ 年 / 响应 < __ h / 运费承担：______
限制条件公开：□不适用环境 □不兼容设备 □性能限制 □配件不含`
};

/* ============ 3. Audience Reach OS ============ */
SITE.reach = {
  id:'reach', num:'08', title:'Audience Reach OS',
  lead:'核心目标不是「曝光最大化」，而是：让正确的人，在正确的时间，通过正确的渠道，以正确的内容，被足够次数触达。',
  principle:'不要追求让更多人看到品牌，而要追求让更多「应该看到品牌的人」，在购买决策周期里反复看到品牌。',
  rateFormula:'精准用户触达率 = 已触达目标用户数 ÷ 可触达目标用户池\n例：ICP 300 万 → 数字渠道可识别匹配 80 万 → 30 天有效触达 24 万\n精准用户触达率 = 24 / 80 = 30%',
  efficiencyFormula:'精准触达效率 = Audience Accuracy × Channel Coverage × Creative Match × Frequency × Timing\n例：0.8 × 0.7 × 0.5 × 0.7 × 0.6 ≈ 11.8%\n→ 广告、内容、KOL、SEO 全在做，用户仍觉得"从没听过这个品牌"，本质是有效触达密度太低。',
  wrongChain:'做内容 ↓ 买广告 ↓ 获得曝光 ↓ 希望有人购买',
  rightChain:'定义 ICP ↓ 建立 Audience Pool ↓ 找到用户出现的位置 ↓ 识别用户所处购买阶段 ↓ 匹配内容 ↓ 多渠道触达 ↓ 重复触达 ↓ 进入 First-party Data ↓ 持续经营',
  mistakeText:'从「流量思维」变成「人群经营思维」',
  levels:[
    { t:'01 · 先把 ICP 做窄，而不是做人群无限扩张', d:'"Portable Power Station 用户"太宽。应细分成 ICP × Scenario × Problem × Intent，例如：RV Owner + Boondocking + Need AC Power + Searching "portable power station for RV"。而 Homeowner + Frequent Power Outages + Need Refrigerator Backup + Searching "backup power for refrigerator" 是另一个完全不同的 Audience。用户画像不要只停留在「男，35–55，美国，中产」—— 这种 Persona 对投放几乎没用。' },
    { t:'02 · 按「购买意图」分人（Intent Layer）', d:'把用户分成四层：L1 Problem Aware（知道问题，搜 How to keep refrigerator running during outage）、L2 Solution Aware（知道方案，搜 Best portable power station for refrigerator）、L3 Product Aware（开始比较，搜 EcoFlow vs Bluetti vs ALLWEI）、L4 Brand Aware（知道你，搜 ALLWEI PPS2400 review）。四层人群触达方式完全不同：Problem→Education、Solution→Buying Guide、Product→Comparison、Brand→Review / Offer。所以精准触达 ≠ 精准定向，还必须精准内容匹配精准 Intent。' },
    { t:'03 · 占领「用户出现的地方」', d:'不要先问"我们应该做 Facebook 还是 TikTok"，要先问"ICP 在购买决策过程中会在哪里出现"。画 Customer Touchpoint Map：Google ↓ Reddit ↓ YouTube ↓ Amazon ↓ Brand Website ↓ Review Site ↓ Instagram ↓ Email。真实路径可能是：Google 搜索 → Reddit 看讨论 → YouTube 看测评 → Amazon 看 Review → 官网比价 → Meta 再看到 Retargeting → Email 收到优惠 → 购买。真正的触达不是一个渠道完成转化，而是多触点共同完成转化。' },
    { t:'04 · 建立 Audience Pool，而不是每次重新买用户', d:'每一次 Paid Traffic 都应该留下资产。建立 1st Party Audience：Website Visitor、Email、SMS、Customer、Cart Abandoner、Video Viewer、Content Reader、Product Viewer、Search User、Lead。再按热度分层：Hot（Checkout / Cart / PDP / Search / Email engaged）、Warm（Blog reader / Video viewer / Social engaged / Comparison page）、Cold（Lookalike / Interest / Broad / Contextual）。广告系统由此从 Buy Traffic 变成 Build Audience → Re-engage Audience → Convert Audience。' },
    { t:'05 · 提高触达「密度」（Effective Frequency）', d:'单次看到通常不够。关键不是"用户有没有看到"，而是"一定时间内看到多少次、看到了什么"。30 天节奏示例：Day 1 TikTok UGC → Day 3 Google Search → Day 5 YouTube Review → Day 7 Meta Retargeting → Day 10 Comparison Ad → Day 12 Email → Day 15 UGC → Day 20 Offer。这是 Sequential Retargeting，而不是永远给用户看同一条广告。' },
    { t:'06 · Creative 决定算法能不能找到精准用户', d:'现在广告平台越来越偏 Broad Targeting + Algorithm，所以"精准"越来越不是手工选什么 Interest，而是什么 Creative 会吸引正确的人。广告开头写 "Power goes out often?" 或 "RV owners: stop running your generator all night." 本身就在过滤无关人群 —— 这就是 Creative Targeting。因此 Targeting = Audience Setting + Creative + Offer + Landing Page，而不是广告后台的一个选项。' },
    { t:'07 · 用「用户原话」提高匹配度', d:'如果 VOC 发现用户一直说 "I just need something that can keep my fridge running overnight."，广告就不要写 2048Wh LiFePO4 Power Station，而要写 Keep your refrigerator running through the night. 用户会快速判断"这个广告就是给我的"，同时改善 CTR → Landing Page Match → CVR → CAC。所以 VOC 不只是做品牌定位，它直接影响精准触达效率。' },
    { t:'08 · 不要依赖单一平台（5 类 Reach Engine）', d:'① Intent Reach：Google / Bing / SEO / Shopping，捕获主动找方案的人；② Algorithm Reach：Meta / TikTok，算法主动找到潜在人群；③ Authority Reach：YouTube / KOL / Media / PR，借别人的信任触达；④ Community Reach：Reddit / Facebook Groups / Forums，进入真实讨论场景；⑤ Owned Reach：Email / SMS / App / Community，不再依赖平台。成熟之后应逐渐 Paid Reach ↓ Earned Reach ↓ Owned Reach，否则 CAC 会越来越难控制。' }
  ],
  reachFunnel:[
    ['TAM','10,000,000',''],
    ['ICP','3,000,000',''],
    ['Addressable Audience','2,000,000','可识别'],
    ['Reachable Audience','1,000,000','可触达'],
    ['Reached Audience','400,000','30 天内已触达'],
    ['Engaged Audience','80,000','产生互动'],
    ['Known Audience','25,000','进入一方数据'],
    ['Leads','8,000','留资'],
    ['Customers','1,000','成交']
  ],
  funnelNote:'马上就可以看到问题到底发生在哪：是触达不够、内容不吸引、还是留资和转化断了。',
  kpis:[
    ['Audience','ICP Pool Size'],
    ['Reach','Precise Reach Rate'],
    ['Exposure','Effective Frequency'],
    ['Content','Hook Rate'],
    ['Engagement','Engaged Audience %'],
    ['Capture','Email Capture Rate'],
    ['Retargeting','Retargetable Audience'],
    ['Acquisition','New Customer CAC'],
    ['Efficiency','Cost per Qualified Visit'],
    ['Revenue','Revenue per Reached User']
  ],
  kpiNote:'特别建议增加 Cost per Qualified Visit，而不是只看 CPC —— $0.20 CPC 的垃圾用户，可能比 $1.50 CPC 的精准用户贵得多。',
  deliverables:[
    ['Audience Map','谁是精准用户（ICP × Scenario × Problem × Intent）'],
    ['Intent Map','用户现在想解决什么问题（L1–L4）'],
    ['Touchpoint Map','这些人在哪里出现（全触点路径）'],
    ['Channel × Content Matrix','什么渠道应该给什么人看什么内容'],
    ['Reach Dashboard','到底有多少目标用户真正被覆盖']
  ],
  audienceMapEx:[
    ['A','Home Backup','Outage','High','Google'],
    ['B','RV','Off-grid','Medium','YouTube'],
    ['C','Camping','Outdoor','Low','TikTok'],
    ['D','Solar','Energy saving','High','Reddit / Search']
  ],
  intentEx:[
    ['L1 Problem Aware','How to keep refrigerator running during outage','Education'],
    ['L2 Solution Aware','Best portable power station for refrigerator','Buying Guide'],
    ['L3 Product Aware','EcoFlow vs Bluetti vs ALLWEI','Comparison'],
    ['L4 Brand Aware','ALLWEI PPS2400 review','Review / Offer']
  ],
  freqEx:[['Day 1','TikTok UGC'],['Day 3','Google Search'],['Day 5','YouTube Review'],['Day 7','Meta Retargeting'],['Day 10','Comparison Ad'],['Day 12','Email'],['Day 15','UGC'],['Day 20','Offer']],
  fullChain:'Market ↓ Customer ↓ Product ↓ Validation ↓ Positioning ↓ Trust & Proof ↓ Audience Reach ↓ Website ↓ Conversion ↓ CRM ↓ Retention ↓ Growth',
  checks:[
    '已算出精准用户触达率（已触达 ÷ 可触达池）',
    '已产出 Audience Map（ICP × 场景 × 痛点 × 意图）',
    '已建立 Intent Map 并覆盖 L1–L4 四层人群',
    '已画出 Customer Touchpoint Map（全触点路径）',
    '已产出 Channel × Content Matrix（渠道 × 人群 × 内容）',
    '已建立 1st Party Audience 并按 Hot/Warm/Cold 分层',
    '已设计 30 天 Sequential Retargeting 节奏（≥ 6 次触达）',
    '已建立 Reach Dashboard 并按周更新',
    '广告 Hook 已使用 VOC 用户原话（≥ 10 条在用）',
    '已启用 ≥ 3 类 Reach Engine（Intent / Algorithm / Authority / Community / Owned）',
    '已监控 Cost per Qualified Visit（不只 CPC）',
    '创意上新节奏 ≥ 5 条/周，用于 Creative Targeting',
    '有效触达密度已计算：精准触达效率 ≥ 20%'
  ],
  acceptance:['精准用户触达率 ≥ 30%','30 天内目标人群有效触达 ≥ 6 次','Cost per Qualified Visit 连续 4 周下降或持平'],
  template:`REACH DASHBOARD（周）
--------------------------------------------
ICP 池：______   可触达池：______   30天已触达：______
精准用户触达率 = ___ / ___ = ___%   （目标 ≥30%）

Reach Funnel：
TAM __ → ICP __ → Addressable __ → Reachable __
→ Reached __ → Engaged __ → Known __ → Leads __ → Customers __
断点诊断：问题发生在 ______ 层

Intent 分布：L1 __%  L2 __%  L3 __%  L4 __%
Reach Engine 覆盖：□Intent □Algorithm □Authority □Community □Owned
KPI：
 Precise Reach Rate ___%   Effective Frequency __ 次/30天
 Hook Rate ___%            Email Capture Rate ___%
 Cost per Qualified Visit $___   New Customer CAC $___
 Revenue per Reached User $___
精准触达效率 = __×__×__×__×__ = ___%（目标 ≥20%）`
};

/* ============ 4. Gate 0–7 ============ */
SITE.gates = [
  { id:'gate-0', title:'要不要做', q:'这门生意在纸面上成立吗？',
    conds:['单件贡献毛利 ≥ 售价的 60%（自有站口径）','可承受 CAC 上限已算出且 ≥ 品类获客成本参考值','资金可覆盖 ≥ 3 个月验证周期','团队具备供应链或内容/投放中的至少一项优势'],
    go:'毛利与 CAC 均达标，进入 Market 研究',
    pivot:'毛利不足：重新选品 / 提价 / 换渠道结构',
    stop:'毛利为负且无改善路径' },
  { id:'gate-1', title:'市场是否成立', q:'这个市场值得进、进得去吗？',
    conds:['目标细分年增速 ≥ 10%','切入价格带内有 ≥ 3 个可参照竞品（说明有真实成交）','CR3 < 60%，或你有一条明确的差异化缝隙','差评聚类 Top5 中至少 2 个痛点可被解决'],
    go:'进入 VOC 与产品定义',
    pivot:'集中度过高：换细分场景或换人群',
    stop:'市场萎缩或缝隙被头部快速封堵' },
  { id:'gate-2', title:'用户与需求是否真实', q:'痛点是真的、用用户的话说的吗？',
    conds:['真实语料 ≥ 500 条且来源可回溯','Top10 痛点每条出现 ≥ 20 次','Must-have 规格 100% 覆盖 VOC Top5 痛点','至少 2 个卖点有第三方可验证证据'],
    go:'进入 Validation 小批量验证',
    pivot:'痛点分散：缩小人群重做 VOC',
    stop:'找不到高频、高强度的真实痛点' },
  { id:'gate-3', title:'产品是否可交付', q:'做得出来、供得上、质量稳吗？',
    conds:['小批量 ≥ 50 单真实交易','退货率 ≤ 品类均值','首批大货合格率 ≥ 98%','强制认证全部取得','主 + 备供应商已就位'],
    go:'进入品牌与信任建设',
    pivot:'质量不达标：换厂 / 改规格 / 降级上市定位',
    stop:'良率无法达标且成本不可承受' },
  { id:'gate-4', title:'品牌与信任是否成立', q:'用户凭什么相信你？',
    conds:['定位可被 ≥ 4/5 目标用户正确复述','Claim–Evidence Matrix 覆盖率 100%','Proof Library 证据类型 ≥ 8 类','Trust & Proof 检查通过项 ≥ 12/13'],
    go:'进入官网与转化建设',
    pivot:'证据不足：补实测 / 认证 / 第三方背书，或删掉无证据卖点',
    stop:'核心卖点无法被任何证据支撑' },
  { id:'gate-5', title:'官网与转化是否成立', q:'流量来了接得住吗？',
    conds:['移动端 LCP ≤ 2.5s','PDP → 加购率 ≥ 8%','结账完成率 ≥ 45%','精准用户触达率 ≥ 30%','平台与后端订单误差 ≤ 10%'],
    go:'进入规模化获客',
    pivot:'转化不足：先修 PDP 与结账流程，不急着加预算',
    stop:'技术栈无法支撑，需重构后再来' },
  { id:'gate-6', title:'获客是否可规模化', q:'花钱买增长，买得到吗？',
    conds:['≥ 2 个渠道 CPA ≤ 目标 CAC','首单 ROAS ≥ 3','新客占比 ≥ 60%','CAC 回本周期 ≤ 180 天','连续 4 周 CAC 波动 ≤ 20%'],
    go:'进入 Scale 与复购提升',
    pivot:'单渠道跑通但 CPA 偏高：先提客单与复购抬高 CAC 上限',
    stop:'CPA 长期 > 目标 CAC ×1.5 且无改善' },
  { id:'gate-7', title:'是否可以 Scale', q:'放大是增长还是加速失血？',
    conds:['LTV/CAC ≥ 3 且连续 8 周稳定','月复合增长 ≥ 15% 且贡献毛利不下降','新渠道 90 天内达到目标 CPA','核心流程 SOP 覆盖率 ≥ 80%','供应链交付可支撑 2× 销量'],
    go:'放量：加预算、扩渠道、扩市场',
    pivot:'增长停滞：回到 Reach 与 Conversion 找断点',
    stop:'单位经济为负，停止放量先修模型' }
];

/* ============ 5. 我现在应该做什么 ============ */
SITE.states = [
  { key:'no-product', label:'还没选品', desc:'有做 DTC 的想法，但还没定品类',
    steps:[{ m:'strategy', why:'先把钱算清楚：毛利、CAC 上限、回本周期，避免选到一个卖得越多亏得越多的品类' },
           { m:'market', why:'用量化和结构判断哪个细分值得进，而不是凭感觉' },
           { m:'voc', why:'从真实差评里找「高频 + 高强度」的痛点，这才是选品依据' }],
    gate:'gate-0',
    tip:'这一阶段最贵的错误是：先囤货再验证。Gate 0 不过，不要下单。' },
  { key:'has-product', label:'已有产品', desc:'产品已确定或已有货，准备上市',
    steps:[{ m:'product', why:'把产品翻译成「某场景下明显更好」的卖点结构，每个卖点配证据' },
           { m:'validation', why:'小批量 50–200 台跑真实交易，先发现坑再放量' },
           { m:'trust', why:'信任决定转化上限，这一步做在投放前面，不是后面' }],
    gate:'gate-3',
    tip:'已有产品不等于已验证。跳过 Validation 直接投广告，是最常见也最贵的坑。' },
  { key:'building-site', label:'网站建设中', desc:'正在搭官网，还没上线',
    steps:[{ m:'website', why:'PDP 六段结构 + 价格全透明 + 移动端速度，这三件事决定上线后的转化基线' },
           { m:'trust', why:'把公司主体、实测数据、售后流程、第三方身份一次性铺进网站' },
           { m:'data', why:'上线前埋好漏斗事件，上线后才有可复盘的数据' }],
    gate:'gate-5',
    tip:'上线前用真实手机在 4G 下走完一遍下单流程，能发现 80% 的问题。' },
  { key:'no-traffic', label:'已上线没流量', desc:'网站上线了，但没什么人访问',
    steps:[{ m:'reach', why:'先算精准用户触达率，确认是触达不够而不是内容不行' },
           { m:'voc', why:'用用户原话重写 Hook，CTR 和触达效率会同时改善' },
           { m:'acquisition', why:'选定 1–2 类 Reach Engine 做透，不要同时开 5 个渠道' }],
    gate:'gate-6',
    tip:'「没流量」通常是「精准用户有效触达不足」，不是曝光不够。先建 Audience Pool 再加预算。' },
  { key:'no-conversion', label:'有流量没转化', desc:'有访问量，但订单很少',
    steps:[{ m:'website', why:'查 PDP 首屏是不是参数堆砌、价格是否在加购前透明' },
           { m:'trust', why:'查 Trust & Proof 13 项：证据、第三方身份、售后可视化是否到位' },
           { m:'data', why:'用漏斗数据定位断点：是加购低、还是结账流失' }],
    gate:'gate-5',
    tip:'转化问题 80% 出在两处：运费/税到结账才出现、卖点没有证据。先查这两项。' },
  { key:'high-cac', label:'CAC 过高', desc:'能卖，但获客成本吃掉了利润',
    steps:[{ m:'reach', why:'算精准触达效率：Audience Accuracy × Coverage × Creative × Frequency × Timing，找最低的那一项' },
           { m:'crm', why:'用复购和客单抬高 LTV，CAC 上限整体抬高' },
           { m:'acquisition', why:'检查 Creative Targeting：用用户原话做人群过滤，比加定向便宜' }],
    gate:'gate-6',
    tip:'不要一上来就砍预算。先看是触达不精准（Reach 问题）还是承接不行（Conversion 问题）。' }
];

/* ============ 6. 术语表 ============ */
SITE.glossary = [
  ['CM（贡献毛利）','售价减去全部变动成本，衡量每卖一件实际赚多少'],
  ['CAC','获取一个新客户的全部成本'],
  ['LTV','一个客户在生命周期内贡献的总毛利'],
  ['ICP','Ideal Customer Profile，理想客户画像'],
  ['TAM / SAM / SOM','总市场 / 可服务市场 / 3 年内可获得市场'],
  ['CR3 / CR5','前 3 / 前 5 名玩家的市场份额，衡量进入壁垒'],
  ['VOC','Voice of Customer，用户真实语言与反馈'],
  ['Intent Layer','按购买意图把人群分成 L1–L4 四层'],
  ['Effective Frequency','一定时间内目标用户有效看到品牌的次数'],
  ['Precise Reach Rate','已触达目标用户 ÷ 可触达目标用户池'],
  ['Cost per Qualified Visit','获得一次「精准用户访问」的成本，比 CPC 更能反映质量'],
  ['Risk Reversal','把购买风险从用户转移到品牌：质保 / 退货 / 承诺'],
  ['First-party Audience','品牌自有的一方数据人群，用于再营销与相似人群扩展'],
  ['Sequential Retargeting','按时间序列给用户看不同内容的再营销，而不是重复同一条广告'],
  ['AQL','出货抽检的质量接受标准']
];

if (typeof window !== 'undefined') window.SITE = SITE;
