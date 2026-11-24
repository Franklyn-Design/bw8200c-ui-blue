(() => {
'use strict';
const D=window.UI_DATA, root=document.getElementById('device');
const paths={
drop:'M12 3C9 7 5 11 5 15a7 7 0 0 0 14 0c0-4-4-8-7-12Z',
right:'m9 5 7 7-7 7',gear:'M9 3h6l1 3 3 1 2 5-2 5-3 1-1 3H9l-1-3-3-1-2-5 2-5 3-1 1-3ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
hand:'M8 12V5a2 2 0 0 1 4 0v6-3a2 2 0 0 1 4 0v3-1a2 2 0 0 1 4 0v5c0 5-3 7-7 7-3 0-4-2-6-4l-4-5a2 2 0 0 1 3-3l2 2',
siren:'M5 18V11a7 7 0 0 1 14 0v7M3 21h18M12 1v2M3 4l2 2M21 4l-2 2M13 9l-3 4h4l-3 4',
noWash:'M7 5h10M12 2v3M6 10v10h12V10l-3-2H9l-3 2ZM3 3l18 18',
pause:'M8 5v14M16 5v14',stop:'M6 6h12v12H6z',play:'m8 4 12 8-12 8Z',help:'M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5M12 17h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
bell:'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4',
swap:'M4 7h16l-4-4M20 17H4l4 4',refresh:'M20 7a9 9 0 1 0 1 8M20 2v5h-5',
cup:'M6 5h12l2 15H4L6 5ZM10 2h4v3M7 16h10',menu:'M4 6h16M4 12h16M4 18h16',
grid:'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z',
tools:'M14 3a5 5 0 0 0-5 7L3 16a3 3 0 0 0 4 4l6-6a5 5 0 0 0 7-6l-4 3-3-3 3-4Z',
patient:'M3 4h18v16H3zM6 14h5M6 17h5M16 8h3M16 12h3M16 16h3M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
chart:'M3 4h18v13H3zM7 13l4-5 4 3 4-5M9 21l3-4 3 4',clock:'M12 6v6l4 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
home:'m2 11 10-9 10 9M5 9v12h5v-7h4v7h5V9',print:'M7 8V2h10v6M7 17H3V8h18v9h-4M7 14h10v8H7zM17 11h1',
up:'m12 6 9 12H3Z',down:'m12 18 9-12H3Z',back:'M20 12H4l6-6M4 12l6 6',check:'m5 12 4 4L19 6',
cross:'M6 6l12 12M18 6 6 18',alert:'M12 3 2 21h20L12 3ZM12 9v5M12 17h.01',info:'M12 11v6M12 7h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
empty:'M6 3h12v11a6 6 0 0 1-12 0V3ZM9 9l6 6M15 9l-6 6',concentrate:'M8 3h8l5 13-4 5H7l-4-5L8 3ZM9 9h6l-3 7Z',
return:'M18 18a8 8 0 1 1 0-12M14 3h5v5',motor:'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M11 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0M18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0',
ban:'M5 5l14 14M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',volume:'M3 9h4l5-5v16l-5-5H3zM16 8a6 6 0 0 1 0 8M19 5a10 10 0 0 1 0 14',
next:'m3 5 8 7-8 7ZM13 5l8 7-8 7Z',prev:'m21 5-8 7 8 7ZM11 5l-8 7 8 7Z',full:'M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5'
};
const alarmArt={"bell": "<svg class=\"icon legacy-alarm-bell\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"报警\"><path d=\"M17 3.2c-4.1 0-6.4 3.2-6.4 7.3 0 4.5-1.7 7.8-4.8 11 5.9 2.4 16.5 2.4 22.4 0-3.1-3.2-4.8-6.5-4.8-11 0-4.1-2.3-7.3-6.4-7.3Z\" stroke=\"#304b5b\" stroke-width=\"1.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M13.4 25.1a3.6 3.6 0 0 0 7.2 0M16 7.2c-1.5.7-2 2.4-2 4.3\" stroke=\"#304b5b\" stroke-width=\"1.4\" stroke-linecap=\"round\"/></svg>", "critical": "<svg class=\"icon legacy-alarm-symbol\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"红色圆形叉号报警\"><circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"#f53f3f\"/><path d=\"m12 12 8 8m0-8-8 8\" stroke=\"#fff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/></svg>", "warning": "<svg class=\"icon legacy-alarm-symbol\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"橙色圆形叹号报警\"><circle cx=\"16\" cy=\"16\" r=\"14\" fill=\"#ff7d00\"/><path d=\"M16 8.5v10\" stroke=\"#fff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"16\" cy=\"23\" r=\"1.5\" fill=\"#fff\"/></svg>"};
const icon=(n)=>n==='bell'?alarmArt.bell:`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[n]||paths.info}"/></svg>`;
const esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pos=(x,y,w,h)=>`left:${x*1.6}px;top:${y*4/3}px;${w==null?'':`width:${w*1.6}px;`}${h==null?'':`height:${h*4/3}px;`}`;
const key=(label,action,x,y,w,h,cls='',extra='')=>`<button class="pos key ${cls}" style="${pos(x,y,w,h)}" data-action="${action}" ${extra}>${label}</button>`;
const fieldValue=(v)=>v===null||v===undefined?'— —':esc(v);
const initialParams=D.parameters.map(x=>x.value),initialAlarms=D.alarmsSettings.map(x=>x.value);
const surgeryProfiles=D.surgeryTypes.map(()=>D.surgeryFields.map(()=>null));
const surgeryParameterIndices=[4,3,2];
let previousSurgery=null;
function applySurgery(){if(S.surgeryIndex!==null)surgeryParameterIndices.forEach((idx,i)=>{S.parameters[idx]=S.surgeryProfiles[S.surgeryIndex][i]});}
function cancelSurgeryEdit(){if(S.surgeryDraft){S.surgeryIndex=previousSurgery;S.surgeryDraft=null;}}
const surgerySteps=D.surgeryFields.map(()=>null);
const S={surgeryIndex:null,surgeryProfiles,surgeryDraft:null,page:'main',autoReady:false,stage:'待机',paused:false,mode:0,draftMode:0,cup:225,parameterIndex:0,alarmIndex:0,parameters:[...initialParams],alarmSettings:[...initialAlarms],patient:['','','','',''],focusField:0,time:[2026,11,18,10,30,0],timeIndex:0,selfProgress:0,selfResult:'',modal:null,alarmQueue:[],alarmActive:null,events:[],trendPage:0,debugSelection:0,debugValue:null,toast:'',lastPage:'main',mediaStatus:'未载入',volume:50,measurements:{feed:null,wash:null,empty:null,waste:null,speed:null},noticeIndex:0};
let dropdown=null;
let returnPage='main';
let selfTimer=null,toastTimer=null,videoElement=null;
const titles={surgery:['手术类型','Surgery type'],mode:['模式选择','MODE SELECTION'],parameters:['参数设置','PARAMETERS'],alarmSettings:['报警设置','ALARM SETTINGS'],patient:['患者信息','PATIENT INFORMATION'],trend:['趋势查看','EVENT RECORDS'],time:['时间设置','DATE & TIME'],help1:['耗材安装','INSTALLATION · 01'],help2:['耗材安装','INSTALLATION · 02'],help3:['简明操作流程','OPERATION GUIDE'],help4:['常见故障排除','TROUBLESHOOTING']};
const menuPages = new Set(['mode','parameters','alarmSettings','patient','trend','time']);
const brand = () => '<div class="brand"><img class="brand-logo" src="assets/brand-logo.png" alt="万东康源 WANDONG KANGYUAN"></div>';
const menuMark = '<span class="menu-mark" aria-hidden="true"><img class="brand-logo" src="assets/brand-icon.png" alt=""></span>';
function header(home=false,debug=false){return `<header class="topbar">${home?key(icon('bell'),'alarm-open',14,10,39,38,'help-key','aria-label="查看报警"'):''}</header>${debug?'':key(icon(S.paused?'play':'pause')+`<span>${S.paused?'继续':'暂停'}</span>`,'pause',585,15,52,52,'top-action '+(S.paused?'resume-key':'pause-key'),`aria-label="${S.paused?'继续':'暂停'}"`)+key(icon('stop')+'<span>停止</span>','stop',669,15,52,52,'top-action danger','aria-label="停止"')+key(icon('help'),'help',750,21,28,26,'help-key','aria-label="帮助"')}`;}
function heading(id){let t=titles[id];return `<div class="page-heading">${menuPages.has(id)?menuMark:''}<h1>${t[0]}</h1>${id==='time'?`<span class="hint">${S.time.slice(0,3).map((v,i)=>i?String(v).padStart(2,'0'):v).join('-')} ${String(S.time[3]).padStart(2,'0')}:${String(S.time[4]).padStart(2,'0')}</span>`:''}</div>`;}
function nav(main=false){let list=main?[['进血','drop','stage:进血','feed'],['清洗','drop','stage:清洗','wash'],['清空','empty','stage:清空','empty'],['浓缩','concentrate','stage:浓缩'],['回血','return','stage:回血'],['打印','print','print'],['菜单','menu','go:mode']]:[['模式选择','grid','go:mode'],['参数设置','tools','go:parameters'],['报警设置','bell','go:alarmSettings'],['患者信息','patient','go:patient'],['趋势查看','chart','go:trend'],['时间设置','clock','go:time'],['主界面','home','go:main']];if(main&&S.autoReady)list=[['启动','play','auto-start'],['','',''],['','',''],['','',''],['','',''],['打印','print','print'],['菜单','menu','go:mode']];return `<nav class="nav" aria-label="${main?'操作':'设置'}导航">${list.map(([label,i,act,c])=>{if(!label)return '<div></div>';let selected=main?S.stage===label:act===`go:${S.page==='surgery'?'parameters':S.page}`;return `<button class="key ${selected?'selected':''} ${c?'stage-'+c:''}" data-action="${act}">${selected?'<i class="active-mark"></i>':''}${icon(i)}<span>${label}</span></button>`}).join('')}</nav>`;}
function modeSelector(){
 const label='运行模式',open=dropdown==='mode';
 const current=S.mode,draft=S.draftMode;
 const items=D.modes.map((_,i)=>i);
 const name=v=>D.modes[v].name;
 const action='mode-dropdown',pick='mode';
 const trigger=`<button class="key selector-trigger" data-action="${action}" aria-label="${label}，${name(current)}" aria-expanded="${open}" ${open?'aria-controls="selector-options"':''}>${icon(D.modes[current].icon)}<span>${name(current)}</span><svg class="selector-chevron" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="m2 5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>`;
 if(!open)return `<div class="top-selector">${trigger}</div>`;
 const choices=items.map(v=>`<button class="option" data-action="${pick}:${v}" aria-pressed="${draft===v}"><span>${name(v)}</span>${v===draft?icon('check'):''}</button>`).join('');
 return `<div class="top-selector">${trigger}<section class="option-list" id="selector-options" aria-label="${label}"><h3>${label}</h3>${choices}<p>${D.modes[draft].description}</p><div class="option-actions"><button data-action="dropdown-close">取消</button><button data-action="mode-confirm">确认</button></div></section></div>`;
}
function alarmBanner(){
 const a=S.alarmActive;
 if(!a)return '';
 const critical=a.level==='critical',n=S.alarmQueue.length;
 return `<section class="alarm-banner ${critical?'critical':'warning'}" aria-label="当前报警"><span class="alarm-symbol original-symbol">${alarmArt[critical?'critical':'warning']}</span><div role="alert" aria-atomic="true"><small>${critical?'重要报警':'报警提示'} · ${n} 项报警</small><strong>${esc(a.name)}</strong></div></section>`;
}
// The main tube geometry runs from a vessel to the high cup port.
const stageFlows = {
 '进血': {vessel:0, waste:true},
 '清洗': {vessel:1, waste:true},
 '清空': {vessel:2, reverse:true},
 '浓缩': {vessel:2, waste:true, description:'清空端 → 离心杯 · 离心杯 → 废液端'},
 '回血': {vessel:0, reverse:true, description:'离心杯 → 进血端'}
};
function main(){const active=S.stage,flow=stageFlows[active];return `${header(true)}<div class="top-selectors">${modeSelector()}</div><section class="pos panel status-panel" style="${pos(20,113,146,100)}"><div class="eyebrow">运行状态</div><div class="status-name">${S.paused?'暂停中':active}</div><div class="status-sub"><i class="status-dot" style="${S.paused?'background:#cea252':''}"></i>${S.paused?'按继续取消暂停':active==='待机'?'等待操作':active==='停止'?'操作已停止':'运行中'}</div></section><section class="pos panel side-detail" style="${pos(20,234,146,244)}"><h3>本次运行</h3><dl><dt>当前模式</dt><dd>${D.modes[S.mode].name}模式</dd><dt>离心杯型号</dt><dd>${S.cup}<span class="unit">mL</span></dd><dt>处理杯数</dt><dd>— —</dd></dl><div class="side-note">${S.alarmQueue.length?`${S.alarmQueue.length} 条报警待处理`:S.paused?'运行已暂停':flow?`${active}进行中`:'等待设备状态同步'}</div></section><section class="pos panel flow-panel ${S.paused?'paused':''}" style="${pos(186,101,602,405)}" aria-label="管路运行示意"><svg class="flow-lines" viewBox="0 0 956 484" aria-hidden="true"></svg>${[['进血量','feed','#e0b552',18],['清洗量','wash','#55af94',216],['清空量','empty','#dc7785',414]].map(([name,v,c,x])=>`<div class="pos metric" style="${pos(x,35,180,80)}"><div class="vessel" style="--liquid:${c}"></div><div><h3>${name}<span class="unit">mL</span></h3><span class="reading">${fieldValue(S.measurements[v])}</span></div></div>`).join('')}<div class="pump-reading"><h3>蠕动泵速 <span class="unit">mL/min</span></h3><strong>${fieldValue(S.measurements.speed)}</strong></div>${key(icon('up'),'speed-adjust:1',207,282,26,26,'arrow speed-key','aria-label="增加蠕动泵速"')}${key(icon('down'),'speed-adjust:-1',207,320,26,26,'arrow speed-key','aria-label="减少蠕动泵速"')}<div class="bowl ${['浓缩','回血','预充'].includes(active)?'bowl-active':''}"><img class="cup-photo" src="assets/centrifuge-cup.webp" alt="离心杯，左侧高位接口、右侧低位接口">${['浓缩','回血','预充'].includes(active)?'<svg class="cup-activity" width="195" height="195" viewBox="0 0 195 195" aria-hidden="true"><ellipse class="cup-cycle" cx="98" cy="137" rx="46" ry="18" fill="none" stroke="#d88796" stroke-width="2"/></svg>':''}</div><div class="pos metric waste-reading" style="left:620px;top:405px"><div class="vessel" style="--liquid:#688da7;width:43px;height:69px"></div><div><h3 style="font-size:17px">废液量 <span class="unit">mL</span></h3><span class="reading" style="font-size:29px">${fieldValue(S.measurements.waste)}</span></div></div><div class="flow-status"><i></i>${S.paused?'管路运行已暂停':flow?(flow.description||`${active}进行中`):'管路就绪状态等待设备读取'}</div></section>${nav(true)}`;}
function mode(){return `${header()}${heading('mode')}<div class="form-caption" style="left:196px;top:196px">选择运行模式</div>${D.modes.map((m,i)=>`${key(icon(m.icon),`mode:${i}`,[123,277,431,585][i],222,88,88,'mode-card '+(S.draftMode===i?'selected':''),`aria-label="${m.name}" aria-pressed="${S.draftMode===i}"`)}<div class="mode-caption" style="left:${[123,277,431,585][i]*1.6-25}px;top:437px">${m.name}</div>`).join('')}<div class="mode-note"><strong>${D.modes[S.draftMode].name}模式</strong><br>${D.modes[S.draftMode].description}</div>${key('确认','mode-confirm',692,400,98,33,'primary')}${key('取消','mode-cancel',692,453,98,33)}${nav()}`;}
function parameters(alarm=false){
 const id=alarm?'alarmSettings':'parameters',list=alarm?D.alarmsSettings:D.parameters,vals=alarm?S.alarmSettings:S.parameters,selected=alarm?S.alarmIndex:S.parameterIndex;
 const tiles=list.map((item,i)=>`<button class="key parameter ${selected===i?'selected':''}" data-action="select:${i}" aria-label="${item.name}" aria-pressed="${selected===i}"><span class="name">${item.name}</span><i class="tag"></i><span class="value">${fieldValue(vals[i])}</span><span class="unit">${item.unit}</span></button>`);
 if(!alarm)tiles.push('<button class="key surgery-link" data-action="go:surgery"><span>手术类型选择&amp;自定义</span>'+icon('right')+'</button>');
 return `${header()}${heading(id)}<div class="form-caption">${alarm?'报警项目':'运行参数'} <span style="margin-left:18px">${vals.filter(v=>v!==null).length} / ${list.length} 已载入</span></div><div class="settings-grid">${tiles.join('')}</div><div class="adjust-info">当前选择 · ${list[selected].name}</div>${key(icon('up'),'adjust:1',550,144,218,96,'arrow','aria-label="增加"')}${key(icon('down'),'adjust:-1',550,254,218,96,'arrow','aria-label="减少"')}${key('确认','parameters-confirm',550,369,218,45,'primary')}${key('复位','parameters-reset',550,430,218,48)}<div class="form-caption" style="top:618px">${vals[selected]===null?'— — 表示等待设备读取参数':'使用右侧箭头调整所选项目'}</div>${nav()}`;}
function surgery(){
 const index=S.surgeryIndex,editing=S.surgeryDraft!==null,values=editing?S.surgeryDraft:S.surgeryProfiles[index]||[];
 const choices=D.surgeryTypes.map((name,i)=>`<button class="key surgery-type ${index===i?'selected':''}" data-action="surgery-select:${i}" aria-pressed="${index===i}" ${editing?'disabled':''}>${name}</button>`).join('');
 const fields=D.surgeryFields.map((field,i)=>`<section class="panel surgery-field"><h2>${field.name}</h2><div class="surgery-reading">${editing?`<input aria-label="${field.name}" type="number" min="${surgerySteps[i]?.min??0}" ${surgerySteps[i]?`max="${surgerySteps[i].max}"`: ''} step="any" inputmode="decimal" data-surgery-field="${i}" value="${esc(values[i])}">`:`<strong>${fieldValue(values[i])}</strong>`}<span class="unit">${field.unit}</span></div><div class="surgery-arrows">${[1,-1].map(dir=>`<button class="key" aria-label="${field.name} · ${dir>0?'增加':'减少'}" data-action="surgery-adjust:${i},${dir}">${icon(dir>0?'up':'down')}</button>`).join('')}</div></section>`).join('');
 return header()+`<div class="surgery-heading"><button class="key" aria-label="返回" data-action="go:parameters">${icon('back')}</button>${menuMark}<h1>手术类型</h1></div><div class="surgery-choices">${choices}</div><div class="surgery-edit-actions">${editing?'<button class="key" data-action="surgery-cancel">取消</button>':''}<button class="key" data-action="surgery-edit">${editing?'保存编辑':'自定义编辑'}</button></div><div class="surgery-fields">${fields}</div>`+nav();
}
function adjustSurgery(field,dir){
 if(S.surgeryIndex===null){toast('请先选择手术类型');return;}
 const values=S.surgeryDraft||S.surgeryProfiles[S.surgeryIndex],rule=surgerySteps[field],v=values[field];
 if(v==null||v===''||!rule){toast(D.surgeryFields[field].name+'：等待设备提供数值、范围与步长');return;}
 values[field]=Math.min(rule.max,Math.max(rule.min,Number((Number(v)+dir*rule.step).toPrecision(12))));if(!S.surgeryDraft)applySurgery();render();
}
function patient(){const fields=[['患者病历号',52,172,200,544],['科室',796,172,880,344],['患者姓名',52,252,200,328],['性别',560,252,624,120],['年龄',796,252,880,120]];let html=`${header()}${heading('patient')}<section class="panel patient-form" aria-label="患者资料"></section>`;fields.forEach(([name,x,y,ix,iw],i)=>{html+=`<label for="field-${i}" class="form-label" style="left:${x}px;top:${y}px;width:${ix-x-16}px;height:44px">${name}</label><input class="input ${S.focusField===i?'active':''}" style="left:${ix}px;top:${y}px;width:${iw}px;height:44px" id="field-${i}" data-field="${i}" value="${esc(S.patient[i])}" autocomplete="off" maxlength="${i===4?3:40}" aria-label="${name}">`;});html+='<span class="field-hint" style="left:880px;top:223px">1 骨科 / 2 心外科 / 3 妇产科 / 4 其他</span><span class="field-hint" style="left:624px;top:303px">1 男 / 2 女</span>';[['1234567890⌫',88,348],['QWERTYUIOP',138,420],['ASDFGHJKL',188,492],['ZXCVBNM',238,564]].forEach(([str,x,y])=>{[...str].forEach((c,i)=>html+=key(c,`type:${c}`,(x+i*100)/1.6,y*.75,84/1.6,54*.75,'keyboard-key',`aria-label="${c==='⌫'?'退格':c}"`));});html+=key('清空','patient-clear',938/1.6,564*.75,84/1.6,54*.75,'keyboard-key chinese soft-danger')+key('确认','patient-confirm',1038/1.6,564*.75,134/1.6,54*.75,'keyboard-key chinese primary')+nav();return html;}
function timePage(){let html=header()+heading('time')+'<div class="form-caption" style="top:215px;left:53px">选择时间字段，然后使用箭头调整</div>';['年','月','日','时','分','秒'].forEach((u,i)=>{let x=34+(i%3)*170,y=212+Math.floor(i/3)*100;html+=key(String(S.time[i]).padStart(2,'0'),`time-select:${i}`,x,y,118,59,'time-key '+(S.timeIndex===i?'selected':''),`aria-label="${u}"`)+`<span class="time-unit" style="${pos(x+126,y+17)}">${u}</span>`});return html+key(icon('up'),'time-adjust:1',550,180,218,96,'arrow','aria-label="增加"')+key(icon('down'),'time-adjust:-1',550,290,218,96,'arrow','aria-label="减少"')+key('确认','time-confirm',550,405,218,47,'primary')+nav();}
function trend(){let defaults=[['— —','开机','患者病历号：'+(S.patient[0]||'— —')],['— —','进血','总进血量：— —'],['— —','清洗','总清洗量：— —'],['— —','回收','总回收量：— —'],['— —','回收','总回收量：— —']];let rows=S.events.length?S.events.slice(S.trendPage*5,S.trendPage*5+5).map(e=>[e.time,e.name,e.detail]):defaults;return header()+heading('trend')+key(icon('print')+' 打印','print',1092/1.6,152*.75,156/1.6,46*.75,'trend-print','aria-label="打印"')+`<table class="table"><thead><tr><th>日期/时间</th><th>事件</th><th>运行概况</th></tr></thead><tbody>${rows.map(r=>'<tr>'+r.map((v,i)=>`<td class="${i===0?'empty-value':''}">${esc(v)}</td>`).join('')+'</tr>').join('')}</tbody></table><div class="page-counter">${S.trendPage+1} / ${Math.max(1,Math.ceil(S.events.length/5))}</div>`+key('上一页','trend-prev',74,449,100,33,'',S.trendPage===0?'disabled':'')+key('下一页','trend-next',629,449,100,33,'',S.trendPage>=Math.ceil(S.events.length/5)-1?'disabled':'')+nav();}
function boot(recovery=false){return `<div class="boot">${brand()}<div class="boot-art" aria-hidden="true"><svg viewBox="0 0 128 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M64 10C52 32 21 69 21 98a43 43 0 0 0 86 0c0-29-31-66-43-88Z" stroke-width="5"/><path d="M38 99a26 26 0 0 0 24 26" stroke-width="4"/></svg></div><div class="boot-title"><h1>BW–8200C${document.documentElement.lang==='en'?'':'<span style="font-size:24px;margin-left:13px">型</span>'}</h1><h2>自体血液回收机</h2></div><div class="boot-footer"></div>${key('开机自检','self-start',30,524,132,50,'primary')}${recovery?`<div class="pos" style="${pos(230,525)};font-size:16px;line-height:1.8;color:#7b909c">关机时间 <span style="margin:0 30px">— —</span> 分钟<br>选择跳过自检恢复上次操作</div>${key('跳过自检','self-skip',630,524,140,50)}`:''}</div>`;}
function selftest(){let fail=S.selfResult==='fail',pass=S.selfResult==='pass',status=fail?'自检失败':pass?'自检完成':S.selfProgress?'正在检测':'等待自检';return `<div class="boot"><div class="self-title">系统自检</div><div class="self-state" style="${fail?'color:#bd5365':''}">${icon(fail?'alert':pass?'check':'refresh')}${status}<span style="font-size:14px;margin-left:20px;color:#8a9fa9">${S.selfProgress}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${S.selfProgress}%;${fail?'background:#cc6c7c':''}"></div></div><div class="self-list">${D.selfItems.map((n,i)=>`<div class="self-item">${icon(fail&&i===3?'alert':(pass||S.selfProgress>(i+1)*14)?'check':'clock')}${n}</div>`).join('')}</div><div class="self-note">${fail?'存在未通过的检测项目，请检查后重新检测。':pass?'自检结果预览完成。':'正在展示自检流程；实际结果由设备提供。'}</div><div class="boot-footer"></div>${key('重新检测','self-start',30,524,132,50)}${key('跳过','self-skip',635,524,135,50,'primary')}</div>`;}
// 调试工作台使用原生1280×800坐标；保留原有操作事件。
const serviceKey=(label,action,x,y,w,h,cls='',aria='')=>key(label,action,x/1.6,y*.75,w/1.6,h*.75,'service-key '+cls,aria?`aria-label="${aria}"`:'');
const serviceHeader=(title,action,symbol='tools')=>`<header class="service-header"><div class="service-heading">${icon(symbol)}<h1>${title}</h1></div>${action}</header>`;
function debug(){
 const labels=['上称重检测','下称重检测','红灯检测','绿灯检测','气泡检测','血层检测','离心井盖','上漏液','下漏液'];
 const tile=(label,ic,action,x,y,cls='')=>serviceKey(icon(ic)+`<span>${label}</span>`,action,x,y,164,64,'service-tile '+cls,label);
 return serviceHeader('设备调试',serviceKey(icon('print')+'打印','print',1088,20,160,56))
 +`<section class="panel service-status"><div class="service-section-title">状态显示</div><div class="service-readings">${labels.map((v,i)=>`<div class="service-status-row"><span>${v}</span><span>${i===0?'0':i===1?'7000':'— —'}</span><span>${i===0?'500':i===1?'9000':'— —'}</span></div>`).join('')}</div></section>
 <section class="panel service-group system-group"><h2>系统操作</h2></section>
 <section class="panel service-group mode-group"><h2>模式选择</h2></section>
 <section class="panel service-group motor-group"><h2>电机测试</h2></section>
 <section class="panel service-process"><h2>运行操作</h2></section>`
 +tile('系统停止','ban','debug-stop',880,200,'soft-danger')+tile('系统设置','gear','go:debugDetail',1060,200)
 +tile('手动模式','hand','debug-mode:1',880,400,S.draftMode===1?'selected':'')+tile('自动模式','gear','debug-mode:0',1060,400,S.draftMode===0?'selected':'')
 +tile('离心电机','motor','debug-motor:离心电机',880,600)
 +serviceKey('1','debug-motor:1',1060,600,164,64,'service-motor','电机 1')
 +serviceKey('3','debug-motor:3',880,684,164,56,'service-motor','电机 3')
 +serviceKey('2','debug-motor:2',1060,684,164,56,'service-motor','电机 2')
 +[['时间','clock','go:time'],['进血','drop','debug-stage:进血'],['清洗','drop','debug-stage:清洗'],['清空','empty','debug-stage:清空']].map(([n,i,a],j)=>serviceKey(icon(i)+`<span>${n}</span>`,a,56+j*160,664,140,80,'service-stage',n)).join('')
 +serviceKey(icon('up'),'debug-adjust:1',712,628,96,48,'arrow','增加')+serviceKey(icon('down'),'debug-adjust:-1',712,696,96,48,'arrow','减少');
}
function debugDetail(){
 const current=D.parameters[S.debugSelection];
 return `<div class="debug-secondary">`+serviceHeader('调试参数',serviceKey(icon('back')+'返回','go:debug',1088,20,160,56))
 +`<section class="panel service-projects"><div class="service-section-title">项目选择<span>${String(S.debugSelection+1).padStart(2,'0')} / 06</span></div><div class="service-project-list">${D.parameters.map((p,i)=>`<div class="service-project ${i===S.debugSelection?'is-current':''}"><span class="service-number">${String(i+1).padStart(2,'0')}</span><span>${p.name}</span>${i===S.debugSelection?icon('check'):''}</div>`).join('')}</div></section>
 <section class="panel service-value"><div class="service-value-label">当前项目</div><h2>${current.name}</h2><div class="service-value-well"><span class="service-value-caption">当前数值</span><div class="service-value-reading">${fieldValue(S.debugValue)}<span>${current.unit}</span></div><p>等待设备参数读取</p></div><div class="service-adjust-label">数值调节</div></section>
 <section class="panel service-confirm"><span>当前项目 · ${current.name}</span><p>确认所选调试项目</p></section>`
 +serviceKey(icon('up'),'debug-item:-1',56,680,132,56,'arrow','上一项目')+serviceKey(icon('down'),'debug-item:1',212,680,132,56,'arrow','下一项目')
 +serviceKey(icon('up')+'增加','debug-adjust:1',864,488,160,64,'','增加数值')+serviceKey(icon('down')+'减少','debug-adjust:-1',1048,488,176,64,'','减少数值')
 +serviceKey(icon('check')+'确定','debug-confirm',1048,652,176,72,'primary')+`</div>`;
}
function help(){let n=Number(S.page.slice(-1));return header()+heading(S.page)+`<div class="help-content">${(document.documentElement.lang==='en'?DeviceText.help:window.HELP_CONTENT)[n-1]}</div><span class="help-counter">0${n} / 04</span>`+(n>1?key('前页',`go:help${n-1}`,681,n===4?383:383,98,47):'')+(n<4?key('后页',`go:help${n+1}`,681,445,98,47,'primary'):'')+key('返回','help-return',681,517,98,47);}
function video(){return `<div class="video-screen"><div>${icon('play')}<h2>操作视频</h2><p>${S.mediaStatus==='未载入'?'暂无视频文件':esc(S.mediaStatus)}</p></div>${window.DEVICE_VIDEO_SRC?`<video src="${esc(window.DEVICE_VIDEO_SRC)}" id="video-player" playsinline></video>`:''}</div><nav class="nav">${[['播放/暂停','play','video-play'],['音量 +','volume','video-volume:10'],['音量 -','volume','video-volume:-10'],['下一曲','prev','video-next'],['上一曲','next','video-prev'],['停止','stop','video-stop'],['全屏','full','video-full']].map(([n,i,a])=>`<button class="key" data-action="${a}">${icon(i)}<span>${n}</span></button>`).join('')}</nav>`;}
function printSheet(){return `<div class="print-sheet"><div><strong>BW–8200C · 自体血液回收机</strong></div><div><span>患者病历号</span><span data-verbatim>${esc(S.patient[0]||'— —')}</span></div><div><span>运行模式</span><span>${D.modes[S.mode].name}</span></div><div><span>总进血量</span><span>${fieldValue(S.measurements.feed)} mL</span></div><div><span>总清洗量</span><span>${fieldValue(S.measurements.wash)} mL</span></div><div><span>总回收量</span><span>${fieldValue(S.measurements.empty)} mL</span></div></div>`;}
function detailPage(){
 const printing=S.page==='printRecord';
 const title=printing?'运行记录打印预览':'报警记录';
 const back=serviceKey(icon('back')+'返回','detail-back',1088,20,160,56);
 const content=printing?printSheet():S.alarmQueue.length
  ?`<ul class="active-alarms">${S.alarmQueue.map(a=>`<li><strong>${a.id}</strong> <span>${esc(a.name)}</span></li>`).join('')}</ul>`
  :'<p>当前无报警</p>';
 return serviceHeader(title,back,printing?'print':'bell')+`<section class="panel record-content">${content}</section>`
  +(printing?serviceKey(icon('print')+'打印','print-apply',1056,687,192,70,'primary'):'');
}
function showNotice(index){
 S.noticeIndex=index;
 toast(D.messages[index]||'运行提示');
}
function dialog(){if(!S.modal)return '';let body='';const actions=(a)=>`<div class="dialog-actions">${a.map(([label,action,cls])=>`<button class="key ${cls||''}" data-action="${action}">${label}</button>`).join('')}</div>`;const shell=(title,content,buttons,kicker='操作确认')=>`<section class="dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="dialog-kicker"><span>${kicker}</span><span>BW–8200C</span></div><h2 id="modal-title">${title}</h2>${content}${actions(buttons)}</section>`;
 if(S.modal==='mode'){let m=D.modes[S.draftMode];body=shell(`切换为${m.name}模式`, `<p>${m.description}</p><div class="dialog-detail">当前模式：${D.modes[S.mode].name}<br>设定模式：${m.name}</div>`,[['取消','modal-close'],['确认切换','mode-apply',S.draftMode>1?'danger':'primary']],'模式切换');}
 return `<div class="overlay">${body}</div>`;
}
function render(){root.setAttribute('aria-label','血液回收机操作界面');root.dataset.page=S.page;const pages={printRecord:detailPage,alarmLog:detailPage,main,mode,surgery,parameters:()=>parameters(false),alarmSettings:()=>parameters(true),patient,trend,time:timePage,boot:()=>boot(false),recovery:()=>boot(true),selftest,debug,debugDetail,video,help1:help,help2:help,help3:help,help4:help};root.innerHTML=(pages[S.page]||main)()+dialog()+alarmBanner()+(S.toast?`<div class="inline-status" role="status">${esc(S.toast)}</div>`:'');DeviceText.localize(root);if(document.documentElement.lang==='en'){const clear=root.querySelector('[data-action="patient-clear"]');if(clear)clear.textContent='Clear';}if(S.modal){root.querySelectorAll('button,input').forEach(el=>{if(!el.closest('.overlay,.alarm-banner'))el.setAttribute('tabindex','-1')});const el=root.querySelector('.dialog');if(el){el.setAttribute('tabindex','-1');el.focus({preventScroll:true});}}if(S.page==='video'){videoElement=document.getElementById('video-player');if(videoElement)videoElement.volume=S.volume/100;}resize();}
function toast(message){
 clearTimeout(toastTimer);S.toast=message;
 render();
 toastTimer=setTimeout(()=>{S.toast='';root.querySelector('.inline-status')?.remove()},4200);
}
function event(name,detail='界面演示操作'){let d=new Date();S.events.unshift({name,detail,time:d.toLocaleString('sv-SE').slice(0,16)});S.trendPage=0;}
function go(page){if(S.page==='surgery'&&page!=='help1')cancelSurgeryEdit();dropdown=null;S.page=page;S.modal=null;S.toast='';if(page==='mode')S.draftMode=S.mode;render();}
function startSelf(){clearInterval(selfTimer);S.page='selftest';S.selfResult='';S.selfProgress=0;render();selfTimer=setInterval(()=>{S.selfProgress=Math.min(S.selfProgress+14,100);if(S.selfProgress===100){clearInterval(selfTimer);S.selfResult='pass';}render()},500);}
function refreshAlarms(){
 S.alarmActive=S.alarmQueue.find(alarm=>alarm.level==='critical')||S.alarmQueue[0]||null;
  const before=root.querySelector('.alarm-banner'),html=alarmBanner();
  if(before && html)before.outerHTML=html;
  else if(before)before.remove();
  else if(html)root.insertAdjacentHTML('beforeend',html);
  const note=root.querySelector('.side-note');
  if(note && S.alarmQueue.length)note.textContent=S.alarmQueue.length+' 条报警待处理';
  else if(note && !S.alarmQueue.length)note.textContent=S.paused?'运行已暂停':stageFlows[S.stage]?S.stage+'进行中':'等待设备状态同步';
  DeviceText.localize(root.querySelector('.alarm-banner'));DeviceText.localize(note);if(S.page==='alarmLog')render();
}
function pushAlarm(id,origin){
 const definition=D.alarms.find(a=>a.id===id);
 if(!definition)return;
 const record={...definition,...(origin?{origin}:{})};
 const existing=S.alarmQueue.find(a=>a.id===id);
 if(existing)Object.assign(existing,record);
 else S.alarmQueue.push(record);
 
 refreshAlarms();
}
function changeParameter(dir){let alarm=S.page==='alarmSettings',values=alarm?S.alarmSettings:S.parameters,index=alarm?S.alarmIndex:S.parameterIndex,list=alarm?D.alarmsSettings:D.parameters;if(!alarm&&index===5){values[index]=dir>0?225:125;render();return;}/* No device ranges or increments were supplied. Do not fabricate them. */toast(`${list[index].name}：等待设备提供数值、范围与步长`);}
function handle(action){const [a,v]=action.split(':');switch(a){
case'go':go(v);break;
case'help':S.lastPage=S.page;go('help1');break;
case'help-return':go(S.lastPage.startsWith('help')?'main':S.lastPage);break;
case'pause':if(S.stage==='待机'||S.stage==='停止'){toast('当前未运行');break;}S.paused=!S.paused;event(S.paused?'暂停':'继续');render();break;
case'auto-start':S.autoReady=false;S.stage='预充';event('启动');render();break;
case'speed-adjust':toast('等待设备提供蠕动泵速范围与步长');break;
case'stage':S.stage=v;S.paused=false;event(v);render();break;
case'stop':S.stage='停止';S.paused=false;S.modal=null;event('停止');render();break;
case'mode':S.draftMode=+v;render();break;
case'mode-confirm':
 dropdown=null;
 if(D.modes[S.draftMode].icon==='noWash'){S.modal='mode';render();break;}
 handle('mode-apply');break;
case'mode-cancel':S.draftMode=S.mode;go('main');break;
case'mode-apply':S.mode=S.draftMode;S.modal=null;event('模式切换',D.modes[S.mode].name);go('main');break;
case'mode-dropdown':{
 dropdown=dropdown?null:'mode';S.draftMode=S.mode;render();
 root.querySelector(dropdown?'.option[aria-pressed="true"]':'[data-action="mode-dropdown"]')?.focus();break;
}
case'dropdown-close':dropdown=null;render();root.querySelector('[data-action="mode-dropdown"]')?.focus();break;
case'surgery-select':S.surgeryIndex=Number(v);applySurgery();render();break;
case'surgery-edit':{
 if(!S.surgeryDraft){
  previousSurgery=S.surgeryIndex;
  if(S.surgeryIndex===null||S.surgeryIndex<5)S.surgeryIndex=5;
  S.surgeryDraft=[...S.surgeryProfiles[S.surgeryIndex]];render();root.querySelector('[data-surgery-field]')?.focus();break;
 }
 const invalid=[...root.querySelectorAll('[data-surgery-field]')].some(el=>!el.validity.valid);
 if(invalid){toast('请输入有效数值');break;}
 S.surgeryProfiles[S.surgeryIndex]=S.surgeryDraft.map(x=>x===''||x==null?null:Number(x));S.surgeryDraft=null;applySurgery();render();break;
}
case'surgery-cancel':cancelSurgeryEdit();render();break;
case'surgery-adjust':{const [field,dir]=v.split(',').map(Number);adjustSurgery(field,dir);break;}
case'select':if(S.page==='alarmSettings')S.alarmIndex=+v;else S.parameterIndex=+v;render();break;
case'adjust':changeParameter(+v);break;
case'parameters-confirm':S.cup=S.parameters[5];toast('当前设置已保留在本次界面预览中');break;
case'parameters-reset':if(S.page==='alarmSettings')S.alarmSettings=[...initialAlarms];else{S.parameters=[...initialParams];S.surgeryIndex=null;S.cup=225;}S.modal=null;render();break;
case'type':{let i=S.focusField;if(v==='⌫')S.patient[i]=S.patient[i].slice(0,-1);else if(S.patient[i].length<(i===4?3:40))S.patient[i]+=v;render();break;}
case'patient-clear':S.patient[S.focusField]='';render();break;
case'patient-confirm':toast('患者信息已保留在本次会话中');break;
case'time-select':S.timeIndex=+v;render();break;
case'time-adjust':{let i=S.timeIndex,bounds=[[1970,2099],[1,12],[1,new Date(S.time[0],S.time[1],0).getDate()],[0,23],[0,59],[0,59]][i];S.time[i]=Math.min(bounds[1],Math.max(bounds[0],S.time[i]+(+v)));S.time[2]=Math.min(S.time[2],new Date(S.time[0],S.time[1],0).getDate());render();break;}
case'time-confirm':toast('时间已更新到本次界面预览');break;
case'trend-prev':S.trendPage=Math.max(0,S.trendPage-1);render();break;
case'trend-next':S.trendPage=Math.min(Math.max(0,Math.ceil(S.events.length/5)-1),S.trendPage+1);render();break;
case'self-start':startSelf();break;
case'self-skip':clearInterval(selfTimer);go('main');break;
case'debug-stop':toast('系统停止指令预览');break;
case'debug-mode':S.draftMode=+v;render();break;
case'debug-motor':toast(`电机 ${v} 测试按键预览`);break;
case'debug-stage':toast(`${v}测试按键预览`);break;
case'debug-adjust':toast('等待设备提供调试参数范围与步长');break;
case'debug-item':S.debugSelection=(S.debugSelection+(+v)+6)%6;render();break;
case'debug-confirm':toast('调试项目已选择，等待设备参数');break;
case'alarm-open':
 returnPage=S.page;go('alarmLog');
 break;
case'detail-back':go(returnPage);break;
case'modal-close':S.modal=null;render();break;
case'print':
 returnPage=S.page;go('printRecord');
 break;
case'print-apply':window.print();break;
case'video-play':if(!videoElement){toast('尚未提供视频文件');break;}if(videoElement.paused)videoElement.play().catch(()=>toast('视频暂时无法播放'));else videoElement.pause();break;
case'video-volume':S.volume=Math.max(0,Math.min(100,S.volume+(+v)));if(videoElement)videoElement.volume=S.volume/100;toast(`音量 ${S.volume}%`);break;
case'video-stop':if(videoElement){videoElement.pause();videoElement.currentTime=0;}else toast('尚未提供视频文件');break;
case'video-prev':case'video-next':toast('暂无其他视频');break;
case'video-full':if(document.fullscreenElement)document.exitFullscreen();else root.requestFullscreen?.().catch(()=>toast('请使用浏览器全屏功能'));break;
}}
root.addEventListener('click',e=>{
 const b=e.target.closest('[data-action]'),wasOpen=dropdown;
 if(dropdown&&!e.target.closest('.top-selectors')){dropdown=null;if(!b)render();}
 if(!b||b.disabled)return;
 handle(b.dataset.action);
 if(wasOpen&&b.matches('.option'))root.querySelector('.option[aria-pressed="true"]')?.focus();
 if(wasOpen&&!S.modal&&b.dataset.action==="mode-confirm")root.querySelector('[data-action="mode-dropdown"]')?.focus();
 if(wasOpen&&!dropdown&&root.querySelector('.option-list'))render();
});
root.addEventListener('focusin',e=>{if(e.target.matches('[data-field]')){S.focusField=+e.target.dataset.field;root.querySelectorAll('[data-field]').forEach(x=>x.classList.toggle('active',x===e.target));}});
root.addEventListener('input',e=>{if(e.target.matches('[data-surgery-field]')&&S.surgeryDraft)S.surgeryDraft[+e.target.dataset.surgeryField]=e.target.value;if(e.target.matches('[data-field]'))S.patient[+e.target.dataset.field]=e.target.value;});
document.addEventListener('keydown',e=>{if(dropdown&&e.key==='Escape'){e.preventDefault();handle('dropdown-close');return;}if(S.modal&&e.key==='Tab'){let els=[...root.querySelectorAll('.dialog button:not([disabled])')];let first=els[0],last=els.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}if(e.key==='Escape'&&S.modal){S.modal=null;render();}});

// Routes use the rendered component anchors, independent of viewport scaling.
function syncFlowGeometry(){
 const panel=root.querySelector('.flow-panel'),svg=panel?.querySelector('.flow-lines');if(!svg)return;
 const rect=panel.getBoundingClientRect(),scale=rect.width/panel.offsetWidth;
 const bounds=el=>{const r=el.getBoundingClientRect();return{x:(r.x-rect.x)/scale-panel.clientLeft,y:(r.y-rect.y)/scale-panel.clientTop,w:r.width/scale,h:r.height/scale}};
 const metrics=[...panel.querySelectorAll('.metric:not(.waste-reading) .vessel')].map(bounds),b=bounds(panel.querySelector('.bowl')),w=bounds(panel.querySelector('.waste-reading .vessel'));
 // Port mouth centers on the 626 × 626 cup artwork, in its own coordinate system.
 const inlet={x:b.x+b.w*209/626,y:b.y+b.h*34/626};
 const outlet={x:b.x+b.w*416/626,y:b.y+b.h*102/626};
 const cx=inlet.x-20,joinY=216,round=n=>Math.round(n*100)/100;
 const route=m=>{const x=m.x+m.w/2,y=m.y+m.h,dir=x<cx?1:-1;return `M${round(x)} ${round(y)} V${joinY-18} Q${round(x)} ${joinY} ${round(x+18*dir)} ${joinY} H${round(cx-18*dir)} Q${round(cx)} ${joinY} ${round(cx)} ${joinY+18} V${round(inlet.y-8)} Q${round(cx)} ${round(inlet.y)} ${round(cx+8)} ${round(inlet.y)} H${round(inlet.x)}`};
 const flow=stageFlows[S.stage],colors=['#d5ad50','#45a48e','#d56a7d'],paths=[];
 if(flow){
  paths.push({d:route(metrics[flow.vessel]),color:colors[flow.vessel],reverse:flow.reverse});
  if(flow.waste){
   const wy=w.y+w.h/2,bend=w.x-28;
   paths.push({d:`M${round(outlet.x)} ${round(outlet.y)} H${round(bend-12)} Q${round(bend)} ${round(outlet.y)} ${round(bend)} ${round(outlet.y+12)} V${round(wy-12)} Q${round(bend)} ${round(wy)} ${round(bend+12)} ${round(wy)} H${round(w.x)}`,color:'#688da7'});
  }
 }
 svg.setAttribute('viewBox',`0 0 ${panel.clientWidth} ${panel.clientHeight}`);svg.innerHTML=paths.map(p=>`<path class="pipe-base" d="${p.d}"/><path class="pipe-flow ${p.reverse?'reverse':''}" style="--flow:${p.color}" d="${p.d}"/>`).join('');
}

function resize(){root.style.transform=`scale(${Math.min(innerWidth/1280,innerHeight/800)})`;syncFlowGeometry();}
window.addEventListener('resize',resize);
/* Device integration boundary. No transport, hardware commands or medical defaults. */
window.BloodRecoveryUI={getState:()=>JSON.parse(JSON.stringify(S)),showAlarm:pushAlarm,clearAlarm:(id)=>{S.alarmQueue=S.alarmQueue.filter(a=>a.id!==id);refreshAlarms()},setMeasurements:(values)=>{for(let key of Object.keys(S.measurements))if(key in values)S.measurements[key]=values[key];render()},setParameters:(values)=>{values.forEach((v,i)=>{if(i<6)S.parameters[i]=v});render()},setAlarmSettings:(values)=>{values.forEach((v,i)=>{if(i<S.alarmSettings.length)S.alarmSettings[i]=v});render()},setSurgeryProfile:(index,values)=>{if(!S.surgeryProfiles[index]||!Array.isArray(values))return;values.slice(0,3).forEach((v,i)=>{if(v===null||Number.isFinite(v))S.surgeryProfiles[index][i]=v});if(index===S.surgeryIndex)applySurgery();render()},setSurgeryRanges:(ranges)=>{if(!Array.isArray(ranges))return;ranges.slice(0,3).forEach((r,i)=>{surgerySteps[i]=r&&[r.min,r.max,r.step].every(Number.isFinite)&&r.min<=r.max&&r.step>0?{...r}:null});},showNotice,navigate:go};
if(document.documentElement.lang==='en') document.title='BW-8200C · Blood Recovery System';
render();
})();
