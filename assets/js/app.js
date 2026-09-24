/* DTC Brand Growth OS · 应用逻辑 */
(function () {
  const S = window.SITE;
  const STORE_KEY = 'dtc-os-progress-v1';

  /* ---------- 进度存储 ---------- */
  let done = {};
  try { done = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch (e) { done = {}; }
  const save = () => { try { localStorage.setItem(STORE_KEY, JSON.stringify(done)); } catch (e) {} };

  const ALL_CHECKS = [];
  S.modules.forEach(m => (m.checks || []).forEach((c, i) => ALL_CHECKS.push(m.id + '-' + i)));
  (S.trust.checks || []).forEach((c, i) => ALL_CHECKS.push('trust-' + i));
  (S.reach.checks || []).forEach((c, i) => ALL_CHECKS.push('reach-' + i));
  const TOTAL = ALL_CHECKS.length;

  function updateProgress() {
    const n = ALL_CHECKS.filter(k => done[k]).length;
    const el1 = document.getElementById('doneNum');
    const el2 = document.getElementById('totalNum');
    if (el1) el1.textContent = n;
    if (el2) el2.textContent = TOTAL;
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = (TOTAL ? (n / TOTAL * 100) : 0) + '%';
  }

  /* ---------- 工具 ---------- */
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const $ = id => document.getElementById(id);

  function toast(msg) {
    const t = $('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._tm);
    t._tm = setTimeout(() => t.classList.remove('show'), 1800);
  }

  function blocks(title, tag, cls, items, ordered) {
    if (!items || !items.length) return '';
    const body = items.map(it => {
      if (typeof it === 'string') return '<li>' + esc(it) + '</li>';
      return '<li><span class="step-name">' + esc(it.name || it.t) + '</span>' +
             (it.detail || it.d ? '<div class="step-detail">' + esc(it.detail || it.d) + '</div>' : '') + '</li>';
    }).join('');
    return '<div class="block ' + (cls || '') + '"><div class="block-title">' + esc(title) +
      (tag ? '<span class="tag">' + esc(tag) + '</span>' : '') + '</div>' +
      (ordered ? '<ol class="steps">' + body + '</ol>' : '<ul class="plain">' + body + '</ul>') + '</div>';
  }

  function acceptanceBlock(title, items) {
    if (!items || !items.length) return '';
    const rows = items.map(item => {
      const text = typeof item === 'string' ? item : (item.name || item.t || '');
      const match = text.match(/^(.*?)[：:]?\s*(≥|≤|<|>|=)\s*(.+)$/);
      const leading = text.match(/^(≥|≤|<|>|=)\s*(.+)$/);
      const metric = match && match[1].trim() ? match[1].replace(/[：:]$/, '') : (leading ? leading[2] : text);
      const reference = match && match[1].trim()
        ? '示例：' + match[2] + ' ' + match[3] + '（仅参考）'
        : (leading ? '示例：' + leading[1] + ' ' + leading[2] + '（仅参考）' : '按品类 / 阶段 / 渠道建立');
      return [metric, reference, '___', '___', '___', '待判定'];
    });
    return '<div class="block accept"><div class="block-title">' + esc(title) +
      '<span class="tag">需填写实际数据</span></div>' +
      table(['指标', '参考起点', '我的目标', '实际值', '数据源', '判定'], rows, 'acceptance-table') +
      '<p class="muted" style="margin:8px 0 0">参考值 ≠ 通用及格线。请结合品类、客单价、渠道、决策周期和真实数据设定目标。</p></div>';
  }

  function table(headers, rows, cls) {
    return '<div class="table-wrap"><table' + (cls ? ' class="' + cls + '"' : '') + '><thead><tr>' +
      headers.map(h => '<th>' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
      rows.map(r => '<tr>' + r.map(c => '<td>' + esc(c) + '</td>').join('') + '</tr>').join('') +
      '</tbody></table></div>';
  }

  /* ---------- 检查清单 ---------- */
  function checkList(items, prefix) {
    return '<div class="block"><div class="block-title">检查清单 <span class="tag">' +
      items.filter((c, i) => done[prefix + '-' + i]).length + ' / ' + items.length + '</span></div>' +
      '<ul class="check-list">' + items.map((c, i) => {
        const id = prefix + '-' + i;
        const on = !!done[id];
        return '<li class="check-item' + (on ? ' done' : '') + '" data-check="' + id + '">' +
          '<input type="checkbox" ' + (on ? 'checked' : '') + ' data-check="' + id + '">' +
          '<span class="txt">' + esc(c) + '</span></li>';
      }).join('') + '</ul></div>';
  }

  function templateBlock(tpl) {
    if (!tpl) return '';
    return '<div class="block"><div class="tpl-head"><div class="block-title" style="margin:0">输出模板</div>' +
      '<button class="copy-btn" data-copy="' + esc(tpl) + '">复制</button></div>' +
      '<pre class="tpl">' + esc(tpl) + '</pre></div>';
  }

  /* ---------- 视图：首页 ---------- */
  function viewHome() {
    const flow = S.flow.map(f =>
      '<span class="flow-node" data-goto="' + (MOD_BY_NAME[f.t] || 'home') + '" title="' + esc(f.d) + '">' + esc(f.t) + '</span>'
    ).join('<span class="flow-arrow">↓</span>');

    const cards = S.modules.map(m => {
      const total = (m.checks || []).length;
      const d = (m.checks || []).filter((c, i) => done[m.id + '-' + i]).length;
      const target = m.link ? m.link : 'm/' + m.id;
      return '<a class="card" href="#/' + target + '">' +
        '<div class="card-top"><span class="card-num">' + esc(m.num) + '</span>' +
        (m.gate ? '<span class="card-num">' + esc(m.gate) + '</span>' : '') + '</div>' +
        '<div class="card-title">' + esc(m.title) + '</div>' +
        '<p class="card-desc">' + esc(m.short) + '</p>' +
        '<div class="card-meta">' + (total ? '<span>检查 ' + d + '/' + total + '</span>' : '<span>独立章节 →</span>') + '</div></a>';
    }).join('');

    return '<div class="hero">' +
      '<p class="h-eyebrow">DTC 0 → 1 全景地图</p>' +
      '<h1>DTC Brand Growth OS</h1>' +
      '<p class="lead">第一次做 DTC 的人，不需要老师解释，也能照着一步一步完成。<br>' +
      '12 个执行模块 + 2 大核心系统 + 8 道项目闸门，共 <b>' + TOTAL + '</b> 项可执行检查。</p>' +
      '<div class="flow">' + flow + '</div>' +
      '<div class="flow-legend"><span><i class="legend-dot" style="background:#2f6df6"></i>点任意节点跳到对应模块</span>' +
      '<span class="muted">顺序即执行顺序，每过一道 Gate 再进下一关</span></div>' +
      '</div>' +

      '<h2>14 个执行模块</h2>' +
      '<p class="muted">每个模块都按同一套结构展开：这一步解决什么 → 为什么重要 → 准备什么 → Step 1/2/3 → 做到什么算完成 → 检查清单 → 验收标准 → 常见错误 → 输出模板。</p>' +
      '<div class="grid">' + cards + '</div>' +

      '<h2>两大核心系统</h2>' +
      '<div class="grid">' +
      '<a class="card" href="#/trust"><div class="card-top"><span class="card-num">OS</span></div>' +
      '<div class="card-title">Trust &amp; Proof OS</div><p class="card-desc">7 层信任模型 · 8 个建信任动作 · 4 个交付物</p>' +
      '<div class="card-meta"><span>检查 ' + S.trust.checks.filter((c, i) => done['trust-' + i]).length + '/' + S.trust.checks.length + '</span></div></a>' +
      '<a class="card" href="#/reach"><div class="card-top"><span class="card-num">OS</span></div>' +
      '<div class="card-title">Audience Reach OS</div><p class="card-desc">精准触达率 · 8 个杠杆 · Reach Funnel · KPI 体系</p>' +
      '<div class="card-meta"><span>检查 ' + S.reach.checks.filter((c, i) => done['reach-' + i]).length + '/' + S.reach.checks.length + '</span></div></a>' +
      '</div>' +

      '<h2>不确定从哪开始？</h2>' +
      '<p>选择你现在的状态，直接看下一步。<a href="#/states">我现在应该做什么 →</a></p>' +
      '<p>想先看项目闸门？<a href="#/gates">Gate 0–7 →</a></p>';
  }

  const MOD_BY_NAME = {
    'Strategy': 'm/strategy', 'Market': 'm/market', 'Customer': 'm/voc', 'Product': 'm/product',
    'Validation': 'm/validation', 'Supply Chain': 'm/supply', 'Positioning': 'm/brand',
    'Trust & Proof': 'trust', 'Audience Reach': 'reach', 'Website': 'm/website', 'Data': 'm/data',
    'CRM': 'm/crm', 'Acquisition': 'm/acquisition', 'Growth': 'm/growth'
  };

  /* ---------- 视图：模块详情 ---------- */
  function viewModule(id) {
    const idx = S.modules.findIndex(m => m.id === id);
    if (idx < 0) return '<h1>未找到模块</h1>';
    const m = S.modules[idx];
    const prev = S.modules[idx - 1], next = S.modules[idx + 1];

    let h = '<p class="h-eyebrow">模块 ' + esc(m.num) + (m.gate ? ' · ' + esc(m.gate) : '') + '</p>' +
      '<h1>' + esc(m.title) + '</h1>' +
      '<p class="lead">' + esc(m.short) + '</p>' +
      '<div class="block goal"><div class="block-title">这一步解决什么</div><p style="margin:0">' + esc(m.goal) + '</p></div>' +
      '<div class="block why"><div class="block-title">为什么重要</div><p style="margin:0">' + esc(m.why) + '</p></div>' +
      blocks('准备什么', 'INPUTS', '', m.inputs, false) +
      blocks('执行步骤', 'STEP 1 / 2 / 3', '', m.steps, true);

    if (m.link) {
      const t = m.link === 'trust' ? S.trust : S.reach;
      h += '<div class="block"><div class="block-title">这是一个独立大章节</div>' +
        '<p>' + esc(m.steps[0].detail) + '</p>' +
        '<a class="copy-btn" style="display:inline-block" href="#/' + m.link + '">进入 ' + esc(t.title) + ' →</a></div>';
    } else {
      h += blocks('做到什么算完成', 'DOD', 'dod', m.dod, false) +
        checkList(m.checks, m.id) +
        acceptanceBlock('验收标准记录', m.acceptance) +
        blocks('常见错误', 'PITFALLS', 'mistakes', m.mistakes, false) +
        templateBlock(m.template);
    }

    h += '<div class="mod-nav">' +
      (prev ? '<a href="#/' + (prev.link || 'm/' + prev.id) + '"><small>上一个</small>' + esc(prev.num + ' ' + prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="#/' + (next.link || 'm/' + next.id) + '"><small>下一个</small>' + esc(next.num + ' ' + next.title) + '</a>' : '<span></span>') +
      '</div>';
    return h;
  }

  /* ---------- 视图：Trust & Proof OS ---------- */
  function viewTrust() {
    const t = S.trust;
    let h = '<p class="h-eyebrow">核心系统 · 模块 08</p><h1>' + esc(t.title) + '</h1>' +
      '<p class="lead">' + esc(t.lead) + '</p>' +
      blocks('用户真正在连续判断的 8 件事', 'QUESTIONS', 'goal', t.questions, false) +
      '<div class="block"><div class="block-title">信任公式</div>' +
      '<div class="formula">' + esc(t.formula) + '</div>' +
      '<div class="formula">' + esc(t.antiFormula) + '</div></div>' +
      '<div class="block"><div class="block-title">在 OS 中的位置</div><div class="chain">' + esc(t.chain) + '</div></div>';

    h += '<h2>7 层信任模型</h2><p class="muted">左列是信任层，中列是大多数品牌已有的动作，右列是还缺的动作。</p>' +
      '<div class="block">' + table(['信任层', '已有动作', '还缺的动作'], t.layers) + '</div>';

    h += '<h2>建立信任的 8 个动作</h2>' + blocks('', '', '', t.actions, true);

    h += '<h2>4 个交付物</h2><div class="block">' +
      table(['Deliverable', '作用'], t.deliverables) + '</div>';

    h += '<h2>检查与验收</h2>' + checkList(t.checks, 'trust') +
      acceptanceBlock('验收标准记录', t.acceptance) +
      templateBlock(t.template);
    return h;
  }

  /* ---------- 视图：Audience Reach OS ---------- */
  function viewReach() {
    const r = S.reach;
    let h = '<p class="h-eyebrow">核心系统 · 模块 12</p><h1>' + esc(r.title) + '</h1>' +
      '<p class="lead">' + esc(r.lead) + '</p>' +
      '<div class="block goal"><div class="block-title">团队原则</div><p style="margin:0">' + esc(r.principle) + '</p></div>' +
      '<div class="block"><div class="block-title">重新定义「触达率」</div>' +
      '<div class="formula">' + esc(r.rateFormula) + '</div>' +
      '<p class="muted">这比单纯说「本月有 500 万曝光」有意义得多。</p></div>' +
      '<div class="block why"><div class="block-title">最大误区</div>' +
      '<div class="chain">' + esc(r.wrongChain) + '</div>' +
      '<p style="margin:8px 0 4px">应该变成：</p>' +
      '<div class="chain">' + esc(r.rightChain) + '</div>' +
      '<p style="margin:8px 0 0">关键词：<b>' + esc(r.mistakeText) + '</b></p></div>';

    h += '<h2>一方数据与平台人群边界</h2><div class="block">' +
      table(['类别', '定义', '可用方式'], r.audienceTypes) +
      '<p class="muted" style="margin-top:8px">' + esc(r.consentNote) + '</p></div>';

    h += '<h2>提升精准触达率的 8 个杠杆</h2>' + blocks('', '', '', r.levels, true);

    h += '<h2>Audience Map 与 Intent Map</h2>' +
      '<div class="block"><div class="block-title">Audience Map（示例）</div>' +
      table(['Audience', '场景', 'Pain', 'Intent', 'Channel'], r.audienceMapEx) + '</div>' +
      '<div class="block"><div class="block-title">Intent Map（L1–L4）</div>' +
      table(['Intent 层级', '用户会搜什么', '最有效内容'], r.intentEx) + '</div>';

    h += '<h2>Effective Frequency（触达密度）</h2>' +
      '<div class="block"><div class="block-title">30 天 Sequential Retargeting 节奏</div>' +
      table(['时间', '触点'], r.freqEx) +
      '<p class="muted" style="margin-top:8px">关键不是「用户有没有看到」，而是「一定时间内看到多少次、看到了什么」。</p></div>';

    h += '<h2>Reach Funnel</h2><div class="block">' +
      table(['层级', '示例数量', '说明'], r.reachFunnel) +
      '<p class="muted" style="margin-top:8px">' + esc(r.funnelNote) + '</p></div>';

    h += '<h2>KPI 体系</h2><div class="block">' +
      table(['层级', 'KPI'], r.kpis) +
      '<p class="muted" style="margin-top:8px">' + esc(r.kpiNote) + '</p></div>' +
      '<div class="block"><div class="block-title">Reach Quality Score</div>' +
      '<div class="formula">' + esc(r.efficiencyFormula) + '</div>' +
      '<p class="muted" style="margin-top:8px">这是团队诊断模型，用来找短板，不是行业 Benchmark，也不应作为统一及格线。</p></div>';

    h += '<h2>5 类 Reach Engine 与交付物</h2>' +
      '<div class="block">' + table(['Deliverable', '作用'], r.deliverables) + '</div>' +
      '<div class="block"><div class="block-title">在 OS 中的位置</div><div class="chain">' + esc(r.fullChain) + '</div></div>';

    h += '<h2>检查与验收</h2>' + checkList(r.checks, 'reach') +
      acceptanceBlock('验收标准记录', r.acceptance) +
      templateBlock(r.template);
    return h;
  }

  /* ---------- 视图：Gate 0–7 ---------- */
  function viewGates() {
    let h = '<p class="h-eyebrow">项目闸门</p><h1>Gate 0 – 7</h1>' +
      '<p class="lead">每一关都有数字验证条件和三种判定：Continue / Pivot / Stop。没有过闸，不进下一关。</p>';
    h += S.gates.map(g =>
      '<div class="gate"><div class="gate-head"><span class="gate-id">' + esc(g.id.toUpperCase().replace('-', ' ')) + '</span>' +
      '<span class="gate-title">' + esc(g.title) + '</span></div>' +
      '<p class="muted" style="margin:0 0 4px">' + esc(g.q) + '</p>' +
      '<ul class="cond-list">' + g.conds.map(c => '<li>' + esc(c) + '</li>').join('') + '</ul>' +
      '<div class="decisions">' +
      '<div class="decision go"><b>CONTINUE</b>' + esc(g.go) + '</div>' +
      '<div class="decision pivot"><b>PIVOT</b>' + esc(g.pivot) + '</div>' +
      '<div class="decision stop"><b>STOP</b>' + esc(g.stop) + '</div>' +
      '</div></div>').join('');
    return h;
  }

  /* ---------- 视图：我现在应该做什么 ---------- */
  function viewStates() {
    let h = '<p class="h-eyebrow">导航</p><h1>我现在应该做什么？</h1>' +
      '<p class="lead">选择你当前的状态，直接告诉你要做哪几步。</p><div class="state-grid">' +
      S.states.map(s => '<button class="state-btn" data-state="' + s.key + '"><b>' + esc(s.label) + '</b>' +
        '<div class="muted" style="margin-top:4px">' + esc(s.desc) + '</div></button>').join('') +
      '</div><div class="state-result" id="stateResult"></div>';
    return h;
  }

  function renderState(key) {
    const s = S.states.find(x => x.key === key);
    const box = $('stateResult');
    if (!s || !box) return;
    document.querySelectorAll('.state-btn').forEach(b => b.classList.toggle('on', b.dataset.state === key));
    const items = s.steps.map((st, i) => {
      const m = S.modules.find(x => x.id === st.m) || (st.m === 'trust' ? S.trust : S.reach);
      const link = (st.m === 'trust' || st.m === 'reach') ? st.m : 'm/' + st.m;
      return '<li style="margin-bottom:10px"><b>第 ' + (i + 1) + ' 步：<a href="#/' + link + '">' + esc(m.title) + '</a></b>' +
        '<div class="muted" style="color:var(--text-2);font-size:13.5px">' + esc(st.why) + '</div></li>';
    }).join('');
    box.innerHTML = '<div class="block"><div class="block-title">接下来做这 ' + s.steps.length + ' 步' +
      '<span class="tag">' + esc(s.gate.toUpperCase().replace('-', ' ')) + '</span></div>' +
      '<ol class="steps">' + items + '</ol>' +
      '<p class="muted" style="margin:10px 0 0">提示：' + esc(s.tip) + '</p>' +
      '<p style="margin:8px 0 0"><a href="#/gates">查看 ' + esc(s.gate.toUpperCase().replace('-', ' ')) + ' 的数字条件 →</a></p></div>';
  }

  /* ---------- 视图：术语表 ---------- */
  function viewGlossary() {
    return '<p class="h-eyebrow">附录</p><h1>术语表</h1><p class="lead">看到不认识的词，先来这里查。</p>' +
      '<div class="block">' + table(['术语', '含义'], S.glossary) + '</div>';
  }

  /* ---------- 搜索 ---------- */
  function buildIndex() {
    const idx = [];
    S.modules.forEach(m => {
      idx.push({ t: m.num + ' ' + m.title, u: m.link || 'm/' + m.id,
        s: [m.short, m.goal, m.why, (m.inputs || []).join(' '), (m.steps || []).map(x => (x.name || x.t) + ' ' + (x.detail || x.d || '')).join(' '),
             (m.dod || []).join(' '), (m.checks || []).join(' '), (m.acceptance || []).join(' '), (m.mistakes || []).join(' ')].join(' ') });
    });
    idx.push({ t: 'Trust & Proof OS', u: 'trust',
      s: [S.trust.lead, S.trust.formula, S.trust.layers.map(r => r.join(' ')).join(' '), S.trust.actions.map(a => a.t + a.d).join(' '), S.trust.checks.join(' ')].join(' ') });
    idx.push({ t: 'Audience Reach OS', u: 'reach',
      s: [S.reach.lead, S.reach.principle, S.reach.rateFormula, S.reach.efficiencyFormula, S.reach.levels.map(a => a.t + a.d).join(' '), S.reach.kpis.map(r => r.join(' ')).join(' '), S.reach.checks.join(' ')].join(' ') });
    S.gates.forEach(g => idx.push({ t: g.id.toUpperCase().replace('-', ' ') + ' · ' + g.title, u: 'gates',
      s: [g.q, g.conds.join(' '), g.go, g.pivot, g.stop].join(' ') }));
    return idx;
  }
  const INDEX = buildIndex();

  function viewSearch(q) {
    const kw = q.trim().toLowerCase();
    if (!kw) return viewHome();
    const hits = INDEX.filter(i => (i.t + i.s).toLowerCase().includes(kw)).slice(0, 30);
    if (!hits.length) return '<h1>搜索：' + esc(q) + '</h1><p class="lead">没有匹配结果。试试：CAC、触达率、PDP、AQL、Gate 6。</p>';
    const re = new RegExp('(' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return '<h1>搜索：' + esc(q) + '</h1><p class="lead">共 ' + hits.length + ' 条结果</p>' +
      hits.map(i => {
        const pos = i.s.toLowerCase().indexOf(kw);
        const snip = pos >= 0 ? i.s.slice(Math.max(0, pos - 40), pos + 140) : i.s.slice(0, 140);
        return '<div class="result" data-goto="' + i.u + '"><div class="result-title">' + esc(i.t) + '</div>' +
          '<div class="result-snippet">' + esc(snip).replace(re, '<mark>$1</mark>') + '</div></div>';
      }).join('');
  }

  /* ---------- 导航 ---------- */
  function buildNav() {
    const link = (href, label, num) =>
      '<a class="nav-link" href="' + href + '" data-href="' + href.replace('#/', '') + '">' +
      (num ? '<span class="nav-num">' + esc(num) + '</span>' : '') + '<span>' + esc(label) + '</span></a>';

    let h = '<div class="nav-group"><div class="nav-group-title">开始</div>' +
      link('#/home', '全景地图', '00') +
      link('#/states', '我现在该做什么', '?') +
      link('#/gates', 'Gate 0 – 7', 'G') +
      link('#/glossary', '术语表', 'A') + '</div>';

    h += '<div class="nav-group"><div class="nav-group-title">14 个执行模块</div>' +
      S.modules.map(m => link('#/' + (m.link || 'm/' + m.id), m.title.replace(/^[A-Za-z& ]+/, '') || m.title, m.num)).join('') + '</div>';

    h += '<div class="nav-group"><div class="nav-group-title">两大核心系统</div>' +
      link('#/trust', 'Trust & Proof OS', 'OS') +
      link('#/reach', 'Audience Reach OS', 'OS') + '</div>';

    $('nav').innerHTML = h;
  }

  function setActive(route) {
    document.querySelectorAll('.nav-link').forEach(a => {
      a.classList.toggle('active', a.dataset.href === route || (route.indexOf('m/') === 0 && a.dataset.href === route));
    });
  }

  /* ---------- 路由 ---------- */
  function render() {
    const raw = location.hash.replace(/^#\/?/, '');
    let html, route = raw;
    if (!raw || raw === 'home') { html = viewHome(); route = 'home'; }
    else if (raw.indexOf('m/') === 0) { html = viewModule(raw.slice(2)); route = raw; setActive(route); }
    else if (raw === 'trust') { html = viewTrust(); setActive('trust'); }
    else if (raw === 'reach') { html = viewReach(); setActive('reach'); }
    else if (raw === 'gates') { html = viewGates(); setActive('gates'); }
    else if (raw === 'states') { html = viewStates(); setActive('states'); }
    else if (raw === 'glossary') { html = viewGlossary(); setActive('glossary'); }
    else if (raw.indexOf('s/') === 0) { html = viewSearch(decodeURIComponent(raw.slice(2))); }
    else { html = viewHome(); route = 'home'; }

    $('view').innerHTML = html;
    if (route === 'home') setActive('home');
    window.scrollTo(0, 0);
    closeSidebar();
    updateProgress();
  }

  /* ---------- 交互 ---------- */
  function closeSidebar() { $('sidebar').classList.remove('open'); $('scrim').classList.remove('show'); }

  document.addEventListener('click', e => {
    // 复制
    const copy = e.target.closest('[data-copy]');
    if (copy) {
      const txt = copy.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(() => toast('模板已复制')).catch(() => toast('复制失败，请手动选择'));
      } else toast('请手动选择复制');
      return;
    }
    // 检查项
    const item = e.target.closest('.check-item');
    if (item) {
      const id = item.dataset.check;
      const box = item.querySelector('input');
      const now = !done[id];
      done[id] = now; box.checked = now;
      item.classList.toggle('done', now);
      save();
      const ul = item.closest('.check-list');
      if (ul) {
        const n = ul.querySelectorAll('input:checked').length;
        const tag = ul.closest('.block').querySelector('.tag');
        if (tag) tag.textContent = n + ' / ' + ul.querySelectorAll('input').length;
      }
      updateProgress();
      return;
    }
    // 状态按钮
    const sb = e.target.closest('.state-btn');
    if (sb) { renderState(sb.dataset.state); return; }
    // 跳转卡片
    const goto = e.target.closest('[data-goto]');
    if (goto) { location.hash = '#/' + goto.dataset.goto; return; }
    // 导航链接（含卡片）
    const a = e.target.closest('a[href^="#/"]');
    if (a) { setTimeout(closeSidebar, 60); }
  });

  // 搜索
  document.addEventListener('input', e => {
    if (e.target.id !== 'searchInput') return;
    const q = e.target.value.trim();
    location.hash = q ? '#/s/' + encodeURIComponent(q) : '#/home';
  });

  // 重置
  document.addEventListener('click', e => {
    if (e.target.id === 'resetBtn') {
      if (confirm('确定清空所有已勾选的检查项？此操作不可恢复。')) {
        done = {}; save(); render(); toast('进度已重置');
      }
    }
  });

  // 侧边栏
  document.addEventListener('click', e => {
    if (e.target.id === 'menuBtn') { $('sidebar').classList.toggle('open'); $('scrim').classList.toggle('show'); }
    else if (e.target.id === 'scrim') closeSidebar();
  });

  window.addEventListener('hashchange', () => {
    if (location.hash.indexOf('#/s/') !== 0 && $('searchInput')) $('searchInput').value = '';
    render();
  });

  /* ---------- 启动 ---------- */
  buildNav();
  render();
})();
