# BW-8200C Blue Device UI

This standalone interface for the BW-8200C blood recovery system opens on the blue standby screen. Download and extract the repository ZIP, then open `index.html` in a browser. All scripts, styles, and images are included for offline use. The layout scales proportionally from its 1280 × 800 design size.

## 本地开发

项目使用原生 HTML、CSS 和 JavaScript，无需安装依赖或构建。若需要通过 HTTP 调试，在本目录运行以下命令，然后打开 `http://localhost:8000/`。

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

| 文件 | 用途 |
| --- | --- |
| `index.html` | 机器入口，默认中文。接入英文版本时，将根元素的 `lang="zh-CN"` 改为 `lang="en"`。 |
| `app.js` | 页面渲染、按键、管路动画和设备数据接口。 |
| `data.js` | 模式、报警定义、参数项目和中文帮助。 |
| `i18n.js` | 英文界面文案及帮助。 |
| `style.css`、`assets/` | 机器界面样式、品牌标识、离心杯和帮助照片。 |

## 设备数据接入

页面初始化后，可从 `window.BloodRecoveryUI` 读取界面状态并传入设备数据。下例中的变量由接入方提供。

```js
const ui = window.BloodRecoveryUI;
ui.setMeasurements({ feed, wash, empty, waste, speed });
ui.showAlarm(alarmId);
ui.clearAlarm(alarmId);
```

数量使用 mL，泵速使用 mL/min。未提供的数据以横线显示。报警编号见 `data.js`。设备解除报警后调用 `clearAlarm`，界面会显示队列中的下一条报警。通过 `ui.navigate("boot")` 可进入开机流程，通过 `ui.navigate("main")` 可返回主界面。

浓缩状态下清空端回流至离心杯，并从低位接口排出废液。回血状态下离心杯沿进血管路反向回输。暂停和继续会同时作用于管路动画。选择「不清洗」会请求确认，普通报警显示在顶栏中央。

当前代码交付范围为前端界面。按键操作更新本地状态，自检采用演示计时，打印调用浏览器。实机通信、控制指令、设备自检结果和打印驱动由接入方实现。操作视频可通过在加载 `app.js` 前设置 `window.DEVICE_VIDEO_SRC` 接入。
