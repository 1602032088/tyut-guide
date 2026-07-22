const campuses = {
  yingxi: {
    index: '01 / YINGXI', name: '迎西校区', address: '山西省太原市万柏林区迎泽西大街79号 · 邮编 030024',
    facts: ['地址已由 2026 年本科招生章程确认', '太原站方向可参考 1 路、859 路、611 路至“理工大学”站，出发当天复核', '具体学院报到点和开放校门[...]'],
    map: 'https://uri.amap.com/marker?position=112.522526,37.861366&name=太原理工大学迎西校区'
  },
  huyu: {
    index: '02 / HUYU', name: '虎峪校区', address: '山西省太原市迎泽西大街新矿院路18号',
    facts: ['地址已由 2026 年本科招生章程确认', '与迎西校区相近，但不能导航到同一个门', '叫车、寄件和与家人会合时都要写清“虎峪校区”及校门'][...]
    map: 'https://uri.amap.com/marker?position=112.523099,37.854913&name=太原理工大学虎峪校区北门'
  },
  mingxiang: {
    index: '03 / MINGXIANG', name: '明向校区', address: '山西省晋中市榆次区大学街209号 · 邮编 030600',
    facts: ['地址已由 2026 年本科招生章程确认', '太原南站方向可参考 902、903、903 支线、909 路，出发当天复核', '晋中方向是否设接站及开放哪个校门�[...]'],
    map: 'https://uri.amap.com/marker?position=112.720752,37.750125&name=太原理工大学明向校区'
  }
}

const checklistGroups = [
  { icon:'证', title:'必须随身携带', note:'原件与贵重物品不托运', items:[
    ['notice','录取通知书原件','必带'],['id','居民身份证原件','必带'],['copies','身份证及重要材料复印件','建议'],['photos','一寸、二寸证件照及电子版（��[...]']
  ]},
  { icon:'衣', title:'出发前装箱', note:'到校第一天就会用到', items:[
    ['luggage','行李箱、书包或随身背包',''],['clothes','夏秋两季衣物',''],['underwear','内衣、袜子',''],['sleepwear','睡衣、睡裤',''],['suncoat','防晒衣','按需'],['[...]']
  },
  { icon:'训', title:'军训与电子', note:'电子产品随身，药品谨慎', items:[
    ['sunscreen','防晒霜','建议'],['aftersun','晒后修复面膜','按需'],['huoxiang','藿香正气类药品（先看禁忌，勿预防性滥用）','谨慎'],['repellent','驱蚊水或风[...']
  },
  { icon:'洁', title:'到校后可买·日用', note:'体积较大，不必一路携带', items:[
    ['rag','抹布','可后买'],['glues','胶棒、透明胶、双面胶','可后买'],['powerstrip','符合宿舍规定的插线板','可后买'],['thermos','暖瓶','可后买'],['basins','脸�[...]']
  },
  { icon:'洗', title:'到校后可买·洗护', note:'先带旅行装即可', items:[
    ['dental','牙刷、牙膏、漱口杯','可后买'],['cleanser','洗面奶','可后买'],['hairbody','洗发水、护发素、沐浴露','可后买'],['laundry','洗衣粉、洗衣液、内��[...]']
  },
  { icon:'床', title:'床品·先确认再买', note:'楼栋、床型和消防要求可能不同', items:[
    ['sheets','四件套（床单、被套、枕套等）','先核对'],['mattress','床垫','先核对'],['pillow','枕头','可到校买'],['summerquilt','夏凉被或应季被褥','按季节'],[...]
  },
  { icon:'行', title:'出发前确认', note:'临走再看一遍', items:[
    ['campus','确认学院、报到校区及适用通知','关键'],['date','确认 2026 官方报到日期','关键'],['gate','确认指定校门和车辆规则','关键'],['route','保存车票[...']
  ]}
]

const guideSections = [
  {
    category:'报到', badge:'先看', title:'录取后第一件事：确认校区、日期和适用通知',
    summary:'把身份、材料、路线和现场办理串成一条可核对流程。三个本科办学地址已由 2026 招生章程确认，但报到日期和开放校门仍应等待迎新通知[...']
    blocks:[
      ['30 秒先看',['先认本人录取通知书与学院通知','原件随身，扫描件加密备份','迟到、证件缺失或无法报到先联系学院']],
      ['四步核对',['确认身份、校区和本人适用的通知','按要求整理原件与复印件','生成到校路线并确认指定校门','现场办理后逐项检查结果']],
      ['材料分三层',['必须原件：通知书、身份证等','按通知准备：档案、关系转接、资助等','个人备份：少量复印件与加密电子扫描件']],
      ['异常处理',['证件缺失、晚到或健康原因应提前说明','保存学院或辅导员的正式回复','不找私人代办，不把证件交给陌生人']],
      ['常见误区',['把往年日期当成 2026 日期','认为提前到校一定能入住','把证件原件放进托运行李']]
    ],
    tip:'报到日最不能缺的不是某件日用品，而是证件不在手边；原件始终由本人保管。若通知有差异，以本人适用的最新正式通知为准。',
    source:['太原理工大学 2026 年本科招生章程','https://zs.tyut.edu.cn/info/1006/6507.htm']
  },
  {
    category:'材料', badge:'必做', title:'证件、档案与关系材料怎么带',
    summary:'核心原则是原件随身、复印件分类、扫描件加密备份、档案按通知转递。不要私拆密封档案。',
    blocks:[
      ['必须原件',['录取通知书、身份证原件','规定尺寸证件照及电子版','贷款回执等资助材料（如适用）']],
      ['按通知准备',['档案由本人携带还是统一邮寄','党团组织关系线上/线下转接方式','户口迁移是否自愿及所需材料']],
      ['个人备份',['准备少量复印件，不盲目大量打印','扫描件加密保存，避免公开网盘泄露','电脑与证件原件都不放托运行李']]
    ],
    tip:'学校规定新生应按指定日期持录取通知书和有关证件办理入学；不能按期报到应提前向学院说明并办理请假。',
    source:['本科生学籍管理规定','https://jwc.tyut.edu.cn/info/1359/7705.htm']
  },
  {
    category:'采购', badge:'分级', title:'哪些必须带，哪些可以到校再买',
    summary:'先保证证件、贵重物品和首晚用品，再处理体积大的日用品。图片中的清单已全部拆分进可勾选区域。',
    blocks:[
      ['必须随身',['录取通知书、身份证及本人适用的条件性材料','要求自带时的密封档案','手机、充电器、充电宝、电脑等贵重物品']],
      ['出发前准备',['应季衣物、内衣袜子、睡衣与合脚鞋','个人处方药、特殊洗护用品','首晚用的小份洗漱用品、毛巾和水杯']],
      ['到校后可买',['盆、暖瓶、衣架、垃圾桶、收纳盒','纸品、洗衣液、肥皂与大瓶洗护用品','枕头、夏凉被等可在确认需求后购买']],
      ['先确认再买',['床垫、床单、蚊帐、凉席和床上桌','台灯、插线板等涉及宿舍用电的物品','尺寸相关用品应以实际楼栋、床位和消防要求为准']],
      ['个人按需',['晒后修复面膜、磨砂膏、身体乳','眼罩、耳塞、床上桌','腰带、风油精及其他非必需用品']]
    ],
    tip:'“清单里出现”不等于“人人必买”。到校购买能减轻行李，但证件、贵重物品、个人药品和第一晚用品不要等到现场再解决。',
    source:['太原理工大学官方校园导览','https://www.tyut.edu.cn/xxgk1/xydl.htm']
  },
  {
    category:'交通', badge:'路线', title:'火车站、机场到校：先确定目的校区',
    summary:'2026 本科招生章程列明迎西、虎峪、明向三个办学地址。明向位于晋中市榆次区，迎西与虎峪相近但不是同一目的地。',
    blocks:[
      ['导航方法',['地图 App 中输入完整校区名，不只搜学校名','核对下车点、校门与步行距离','夜间抵达优先使用正规公共交通或网约车']],
      ['公开公交参考',['太原南站至明向方向：902、903、903 支线、909 路','太原站至迎西方向：1 路、859 路、611 路至“理工大学”站','公交线路可能调�[...]']
    ],
    tip:'接站安排属于年度信息；本页只说明往届做法，2026 是否设置及具体时段必须等待官方通知。',
    source:['官方校园导览','https://www.tyut.edu.cn/xxgk1/xydl.htm']
  },
  {
    category:'宿舍', badge:'生活', title:'宿舍入住与行李精简原则',
    summary:'床位、床品尺寸、供电和宿舍用品要求可能因校区与楼栋不同，先看学院和公寓通知再购物。',
    blocks:[
      ['适合提前带',['换洗衣物、洗漱用品、常用药','轻便收纳用品与文件袋','个人必须使用的合规电器']],
      ['适合到校买',['盆、暖瓶、垃圾桶、衣架等体积较大的日用品','大瓶洗护用品、纸品与清洁用品','确认住宿安排后再决定的枕头、被褥']],
      ['图片参考尺寸',['床：190cm × 90cm','桌子：119cm × 55.1cm','衣柜外尺寸：67.5cm × 57cm × 150cm']],
      ['其他参考尺寸',['桌面离地约77.5cm，桌底离地约57cm','梯子宽度约30.9cm','以上来自用户提供图片，未核验具体校区和楼栋']]
    ],
    tip:'床垫、蚊帐、凉席、床上桌等尺寸相关用品先不要按图片盲买，应以实际楼栋、床位测量和消防要求为准。不购买违规电器，贵重物品不要交[...]',
    source:['2025 迎新报道','https://www.tyut.edu.cn/info/1027/74441.htm']
  },
  {
    category:'校园', badge:'上手', title:'校园卡、网络与信息系统',
    summary:'不同系统的激活顺序以迎新平台和现场指引为准。不要向非官方人员提供验证码、密码或身份证照片。',
    blocks:[
      ['常见事项',['完成学校统一身份认证','领取或激活校园卡','连接校园网络并修改初始密码']],
      ['安全习惯',['首次登录后更换独立密码','不扫码加入来源不明的缴费群','官方业务优先从学校官网进入']]
    ],
    tip:'任何要求私下转账、代缴学费、出售“内部校园卡”的信息，都应先通过学校渠道核验。',
    source:['学校官网','https://www.tyut.edu.cn/']
  },
  {
    category:'安全', badge:'避坑', title:'新生季防诈骗清单',
    summary:'冒充老师、学长、宿管推销或收费，是报到季常见风险。身份可信不等于付款请求可信。',
    blocks:[
      ['高风险信号',['催促私聊转账或发红包','索要短信验证码、支付密码','声称不立即购买就无法入学或住宿']],
      ['核验方式',['通过官网公布电话回拨确认','缴费只进学校正式平台','保留聊天与付款页面证据']]
    ],
    tip:'遇到疑似诈骗先停止操作，联系辅导员或学校保卫部门；已转账应立即联系支付平台和警方。',
    source:['2025 学院迎新方案','https://hgxy.tyut.edu.cn/info/1067/8846.htm']
  }
]

const arrivalSteps = [
  ['出发前','确认适用通知','核对本人身份、学院、校区、2026 报到安排及指定校门。'],
  ['到站后','识别校车接站点','外省同学到太原站、太原南站后寻找学校统一标识；乘车日期、时段和去向以当年通知为准。'],
  ['抵达校门','进入指定入口','出示所需凭证，听从现场交通和安全指引。'],
  ['官方报到点','身份与资格核验','出示通知书、身份证，按要求提交或核验材料；住宿与学院核验的先后以当年指引为准。'],
  ['宿舍区域','办理入住','核对宿舍、床位与资产情况，发现问题及时向宿管反馈。'],
  ['完成手续','领卡并逐项检查','领取校园卡、资料包，确认每项办理结果和后续安排。'],
  ['安顿之后','保存凭证','保留重要回复和办理凭证，关注班级、学院的正式通知.']
]

const faqs = [
  ['2026 新生具体哪天报到？','截至本页核对日期，普通本科 2026 级的具体报到日期不在本页擅自填写。请以录取通知书、太原理工大学官网、本科招[...]']
]

const $ = (selector, root=document) => root.querySelector(selector)
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)]
const itemCount = checklistGroups.reduce((sum, group) => sum + group.items.length, 0)
const validCheckIds = new Set(checklistGroups.flatMap(group=>group.items.map(item=>item[0])))
let selectedCategory = '全部'
let query = ''
let completed = new Set()
try { completed = new Set(JSON.parse(localStorage.getItem('tyut-guide-checks') || '[]').filter(id=>validCheckIds.has(id))) } catch {}

function renderCampus(id='yingxi') {
  const c = campuses[id]
  $('#campus-panel').innerHTML = `<span class="campus-index">${c.index}</span><h3>${c.name}</h3><p class="address">${c.address}</p><hr><h4>到校前提醒</h4><ul>${c.facts.map(x=>`<li>${x}</li>`[...]
  $$('.map-pin').forEach(pin=>pin.classList.toggle('active',pin.dataset.campus===id))
}

function renderChecklist() {
  $('#item-count').textContent = itemCount
  $('#check-grid').innerHTML = checklistGroups.map(group=>`<article class="check-group"><header><span>${group.icon}</span><div><h3>${group.title}</h3><p>${group.note}</p></div></header><ul>${grou[...]
  updateProgress()
}

function updateProgress() {
  const n = completed.size, percent = Math.round(n / itemCount * 100)
  document.documentElement.style.setProperty('--progress-offset', String(327 - 327 * percent / 100))
  $$('[data-progress-text]').forEach(el=>el.textContent=`${n}/${itemCount}`)
  $$('[data-progress-percent]').forEach(el=>el.textContent=`${percent}%`)
}

function renderFilters() {
  const cats = ['全部',...new Set(guideSections.map(x=>x.category))]
  $('#filters').innerHTML = cats.map(cat=>`<button type="button" class="${cat===selectedCategory?'active':''}" data-filter="${cat}" aria-pressed="${cat===selectedCategory}">${cat}</button>`).join[...]
}

function renderGuides() {
  const q = query.trim().toLowerCase()
  const visible = guideSections.filter(s => (selectedCategory==='全部'||s.category===selectedCategory) && (!q || JSON.stringify(s).toLowerCase().includes(q)))
  $('#result-count').textContent = visible.length
  $('#guide-list').innerHTML = visible.length ? visible.map((s,i)=>`<article class="guide-card"><div class="guide-number">${String(i+1).padStart(2,'0')}</div><div class="guide-body"><div class="g[...]
}

function renderTimeline() {
  $('#timeline').innerHTML = arrivalSteps.map((s,i)=>`<li class="reveal"><span class="step">${String(i+1).padStart(2,'0')}</span><time>${s[0]}</time><h3>${s[1]}</h3><p>${s[2]}</p></li>`).join('')
}

function renderFaqs() {
  $('#faq-list').innerHTML = faqs.map((f,i)=>`<article class="faq-item"><h3><button type="button" aria-expanded="${i===0}" aria-controls="faq-${i}" data-faq><span>Q${String(i+1).padStart(2,'0')}<[...]
}

function toast(message) {
  const el = $('.toast'); el.textContent = message; el.classList.add('show')
  clearTimeout(toast.timer); toast.timer = setTimeout(()=>el.classList.remove('show'),2200)
}

async function share() {
  const data={title:document.title,text:'太原理工大学 2026 新生实地手册',url:location.href}
  try { if(navigator.share) await navigator.share(data); else { await navigator.clipboard.writeText(location.href); toast('链接已复制') } } catch(e) { if(e.name!=='AbortError') toast('暂时[...]
}

function openQrModal(src, alt) {
  const modal=document.createElement('div')
  modal.className='qr-modal'
  modal.setAttribute('role','dialog')
  modal.setAttribute('aria-modal','true')
  modal.setAttribute('aria-label','联系人二维码大图')
  modal.innerHTML=`<div class="qr-modal-box"><button type="button" data-qr-close aria-label="关闭二维码大图">×</button><img src="${src}" alt="${alt}"><p>可长按或保存图片后扫码<[...]
  document.body.append(modal)
  modal.querySelector('[data-qr-close]').focus()
}

document.addEventListener('click', e=>{
  const pin=e.target.closest('[data-campus]'); if(pin){renderCampus(pin.dataset.campus);return}
  const filter=e.target.closest('[data-filter]'); if(filter){selectedCategory=filter.dataset.filter;renderFilters();renderGuides();return}
  const faq=e.target.closest('[data-faq]'); if(faq){const open=faq.getAttribute('aria-expanded')==='true';faq.setAttribute('aria-expanded',String(!open));document.getElementById(faq.getAttribute([...]
  const qr=e.target.closest('[data-qr-open]'); if(qr){openQrModal(qr.dataset.qrOpen,qr.querySelector('img')?.alt||'联系人二维码');return}
  if(e.target.closest('[data-qr-close]')||e.target.classList.contains('qr-modal')){e.target.closest('.qr-modal')?.remove();return}
  if(e.target.closest('[data-share]')) share()
  if(e.target.closest('[data-clear-checks]')){if(!completed.size){toast('清单现在还是空的');return}if(confirm('确定清空全部勾选进度吗？')){completed.clear();localStorage.remov[...]
})

document.addEventListener('keydown',e=>{if(e.key==='Escape')$('.qr-modal')?.remove()})

document.addEventListener('change',e=>{
  const input=e.target.closest('[data-check]'); if(!input)return
  input.checked?completed.add(input.dataset.check):completed.delete(input.dataset.check)
  input.closest('.check-item').classList.toggle('checked',input.checked)
  localStorage.setItem('tyut-guide-checks',JSON.stringify([...completed]));updateProgress()
})

$('[data-search]').addEventListener('input',e=>{query=e.target.value;renderGuides()})

function observe() {
  if(!('IntersectionObserver' in window)){$$('.reveal').forEach(x=>x.classList.add('visible'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0p[...]
  $$('.reveal').forEach(x=>io.observe(x))
  const links=$$('.desktop-nav a'), sections=links.map(a=>$(a.getAttribute('href'))).filter(Boolean)
  const navIo=new IntersectionObserver(entries=>{const v=entries.find(x=>x.isIntersecting);if(v)links.forEach(a=>a.classList.toggle('active',a.hash===`#${v.target.id}`))},{rootMargin:'-25% 0px -6[...]
  sections.forEach(x=>navIo.observe(x))
}

$('#guide-count').textContent=guideSections.length
renderCampus();renderChecklist();renderFilters();renderGuides();renderTimeline();renderFaqs();observe()
