/* 仅记录参考图片可见信息；null 表示原图未提供数值，不代表设备默认值。 */
window.UI_DATA={
 parameters:[{name:'进血流速',unit:'mL/min',value:null},{name:'清洗流速',unit:'mL/min',value:null},{name:'清空流速',unit:'mL/min',value:null},{name:'清洗量设置',unit:'mL',value:null},{name:'自动启动量',unit:'mL',value:null},{name:'离心杯型号',unit:'',value:225,options:[125,225]}],
 alarmsSettings:[{name:'废液报警',unit:'mL',value:null},{name:'气泡报警',unit:'',value:null},{name:'血层检测',unit:'',value:null},{name:'漏液报警',unit:'',value:null},{name:'井盖报警',unit:'',value:null},{name:'夹紧臂报警',unit:'',value:null},{name:'进血管路阻塞报警',unit:'',value:null},{name:'清空管路阻塞报警',unit:'',value:null}],
 surgeryTypes:['创伤外科','心脏手术','产科手术','骨科手术','神外手术','自定义手术1','自定义手术2'],
 surgeryFields:[{name:'自动启动血量',unit:'mL'},{name:'清洗液量设置',unit:'mL'},{name:'清空速度设置',unit:'mL/min'}],
 modes:[{name:'自动',en:'AUTOMATIC',icon:'gear',description:'该模式下血液回收机自动完成回收操作'},{name:'手动',en:'MANUAL',icon:'hand',description:'该模式下血液回收机手动完成回收操作'},{name:'应急',en:'EMERGENCY',icon:'siren',description:'该模式下所有报警都关闭，请谨慎选择'},{name:'不清洗',en:'NO WASH',icon:'noWash',description:'该模式下血液未经清洗，请谨慎选择'}],
 alarms:[
  {id:'A01',name:'离心井处检测到漏液',level:'critical'},
  {id:'A02',name:'所有报警都关闭',level:'critical'},
  {id:'A03',name:'过早检测到断流',level:'warning'},
  {id:'A04',name:'检测到断流',level:'warning'},
  {id:'A05',name:'检测到血层',level:'warning'},
  {id:'A06',name:'离心电机故障',level:'warning'},
  {id:'A07',name:'废液达到上限值',level:'warning'},
  {id:'A08',name:'离心井盖未关闭',level:'warning',occurrences:2},
  {id:'A09',name:'蠕动泵故障',level:'warning',occurrences:3},
  {id:'A10',name:'血袋管夹关闭！',level:'warning'},
  {id:'A11',name:'储血罐管夹关闭！',level:'warning'},
  {id:'A12',name:'锁紧夹紧臂！',level:'warning'},
  {id:'A13',name:'气泡报警',level:'warning'},
  {id:'A14',name:'血液未经充分洗涤',level:'warning'},
  {id:'A15',name:'请检查盐水袋',level:'warning'},
  {id:'A16',name:'请检查贮血滤血器',level:'warning'}
 ],
 statuses:['待机','预充','进血','清洗','清空','浓缩','回血','运行','停止','运行中','暂停中'],
 messages:['储血器状态','按清洗进入','井盖已打开','井盖已关闭','血液未经充分洗涤','请按清空键继续','按箭头改变蠕动泵速','血液重新分层中','按继续取消暂停','清洗进度','清洗完成','将在3S后自动启动','检测到血层','处理杯数','清空进行中','清洗完成后进入待机','预充进度','预充完成','进血完成','请检查盐水袋','请检查贮血滤血器','清空完成'],
 selfItems:['进血泵','清洗泵','清空泵','漏液传感器','离心电机','称重传感器','离心井盖']
};
window.HELP_CONTENT=[
 `<div class="callout">耗材分为<strong>贮血滤血器、双管、离杯</strong> 3 个独立包装。</div><ol><li><strong>安装贮血滤血器及双管</strong><br>将贮血滤血器放入环形支架，负压吸引管连接到负压吸引器。<br><strong>取出另一段连接管连接到贮血滤血器下方出口，夹闭管夹。</strong>如图 1 所示。</li><li><strong>安装双管</strong><br>分别与吸引器（台上）、抗凝剂容器、贮血滤血器连接，<strong>连接时不可用力下压支架，否则损坏称重系统。抗凝剂配比为 1.25 万单位肝素/500ml 生理盐水。</strong></li><li><strong>安装离心杯</strong><br>A. 将离心杯放入离心井，调整离心杯位置，握住离心杯颈部稍稍用力下压，<strong>离心托盘上的 6 个卡爪完全卡住离心杯，安装到位应听到“咔”的声音。</strong>如图 2、3 所示。<br>B. 顺时针旋转夹紧臂，使离心杯颈部被夹住，旋紧夹紧臂上的锁紧旋钮。如图 4 所示。正确锁紧时：<strong>离心杯颈部不应有过大位移，转动锁紧旋钮应手感柔和、不费力。</strong>否则重新操作。<br>C. 完成后，<strong>务必用手轻转离心杯，观察离心杯转动是否平稳、自如。</strong>若旋转过程中离心杯晃动明显、有尖锐刺耳的声响则证明安装不到位，<strong>务必重复以上步骤。</strong></li></ol><div class="help-photos"><figure><img src="assets/help-1.jpg" alt="旧版耗材安装图1"><figcaption>图 1</figcaption></figure><figure><img src="assets/help-2.jpg" alt="旧版耗材安装图2"><figcaption>图 2</figcaption></figure><figure><img src="assets/help-3.jpg" alt="旧版耗材安装图3"><figcaption>图 3</figcaption></figure><figure><img src="assets/help-4.jpg" alt="旧版耗材安装图4"><figcaption>图 4</figcaption></figure></div>`,
 `<ol start="4"><li><strong>管路及袋类安装</strong><br>A. 离心杯较低出口管路（废液管路）压入离心井下方凹槽内。<strong>注意完成后不得使离心杯颈部受过大拉力。</strong><br>B. 离心杯较高出口管路（四通管路）放入四通凹槽内，并用力将管路压入黑色空气探测器内，如图 5 所示，<strong>务必使管路完全进入空气探测器</strong>，否则在工作过程中易产生不计数、气泡报警等问题。<br>C. 将 3 条管路放入管路槽并绕过 3 个蠕动泵。<br>D. 将废液袋的 3 个安装孔套入机器下方 3 个安装柱，整平废液袋，<strong>务必将废液袋排出口开关关闭。</strong><br>E. 将血袋挂在上支架，红色管路连接血袋较粗管路，如图 6 所示，<strong>务必关闭血袋的 2 个小管夹，并打开大管夹。</strong><br>F. 将绿色管路 2 个针头插入生理盐水清洗液容器，<strong>并打开管夹。</strong><br>G. 将黄色管路接口与贮血滤血器下方连接管的接头相连。</li><li>全部安装完毕后，检查<strong>离心杯转动是否正常，空气探测器管路是否按压到位</strong>，所有插头是否连接牢固，管路有无打结、扭曲或压瘪，管夹开与关是否正确，最后关闭离心井盖和蠕动泵盖。</li></ol><div class="help-photos"><figure><img src="assets/help-5.jpg" alt="旧版耗材安装图5"><figcaption>图 5</figcaption></figure><figure><img src="assets/help-6.jpg" alt="旧版耗材安装图6"><figcaption>图 6</figcaption></figure></div>`,
 `<ol><li>安装耗材，严格按照安装说明操作，以免影响正常使用。</li><li>打开抗凝剂调节器，放入 100–200ml 抗凝剂冲洗双管管路，防止血液早期凝结，然后停止抗凝剂滴入，直至进血过程开始，全部操作过程中使用的肝素抗凝剂与收集血液之比约为 1:10。</li><li>开机进入开机欢迎界面，按“继续”键，开始开机自检，自检完成后进入<strong>半自动操作界面。</strong></li><li>当贮血滤血器中收集的血量达到 600–900ml 即可按“进血”键开始<strong>进血</strong>过程，在第一次运行进血前会先开始<strong>预充</strong> 300ml 清洗液。<strong>进血前务必打开贮血滤血器下方管夹。</strong></li><li>进血过程中可以看到离心杯中血层（红细胞与其它成分的分界线）沿离心杯内壁逐渐上升，当达到血层探测器检测位置后，系统会在屏幕中下方显示已经“检测到血层”，并停止黄色蠕动泵转动，也可由操作人员根据经验判断，自行停止进血过程。</li><li>检测到血层后，按“清洗”键开始<strong>清洗</strong>过程，随着清洗过程的逐渐进行，废液排出管路中液体颜色逐渐变浅，直到颜色与进入离心杯的液体颜色相同或达到最大清洗容量后，系统会停止清洗过程，也可由操作人员根据经验判断，停止清洗过程。</li><li>清洗结束后，按“清空”键开始<strong>清空</strong>过程，红细胞成品血进入血袋。<strong>清空前务必打开血袋下方的大管夹。</strong></li><li>若还有血液需要处理可重复步骤 3–6，全部血液处理完成后可将血袋中的红细胞回输给病人。</li></ol>`,
 `<ol><li><strong>气泡报警</strong><br>A. 黑色空气探测器部位的管路没有安装到位，即该部位管路中明显充满液体，但仍然报警；可用力下压该段管路。<br>B. 管路中出现气体。<br>进血过程中报警，检查贮血滤血器下方管夹是否打开，或贮血滤血器是否已空。<br>清洗过程中报警，检查清洗液是否已经用完。<br>清空过程中报警，检查血液是否排空。</li><li><strong>离心井启动异响</strong><br>停机检查离心杯是否安装到位，轻转有无异响，是否平稳。</li><li><strong>检测不到血层</strong><br>A. 血层尚未达到检测位置，从侧面可看到由血层探测器照射到离心杯外壁的红色光斑，超过此位置才开始检测血层，延时 10 秒后画面显示检测到血层，并停止进血。<br>B. 血层探测器前的玻璃窗被污物挡住，需用酒精轻轻擦拭干净。</li><li><strong>漏液报警</strong><br>A. 检查液体探测器表面有无液体，并检查液体是否由离心杯甩出，如果离心杯中液体甩出请停止操作。<br>B. 若表面无明显液体痕迹，请用干燥的纱布轻轻擦拭探测器表面，<br><strong>使其充分干燥或用热吹风装置使其充分干燥。</strong></li></ol>`
];
