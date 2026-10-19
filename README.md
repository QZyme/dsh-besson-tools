# dsh-besson-tools

北山Besson（BeiShan_Besson）Minecraft 模组开发教程的 **DSH 插件**：7 个工具，覆盖「检索 → 路线规划 → 版本迁移对比 → 环境搭建 → 正文抓取」全流程。

- 教程站：https://beishanair.github.io/
- 主仓库（Skill + MCP + 插件三件套）：https://github.com/QZyme/Besson-Tools
- 数据：站点 195 篇（2026-10-19 同步），190 章节 + 4 独立文章 + 1 教程总汇页

## 安装（两种方式任选）

**方式 1 · DSH 插件栏（推荐）**：打开 DSH → 插件栏 → 「添加插件」→ 输入 GitHub 仓库地址

```
https://github.com/QZyme/dsh-besson-tools
```

或本仓库源码目录（下载解压后选择该目录即可）。

安装后所有会话可用 7 个 `besson_tutorial_*` 工具。

**方式 2 · 预设内挂载（只在 Besson 预设里用）**：把仓库放进 `.dsh` 下任意目录，在预设插件列表加一行：

```yaml
- id: besson-tools
  name: dsh-besson-tools
```

## 工具

| 工具 | 作用 |
|---|---|
| `besson_tutorial_lookup` | 关键词检索章节（系列/版本/章节号/主题词，limit 1-25） |
| `besson_tutorial_index` | 六大系列总览：MC 版本、Java、章节数、缺号、数据健康 |
| `besson_tutorial_series` | 列某系列全部章节，或取单章详情（`chapter` 参数） |
| `besson_tutorial_fetch` | 抓取一篇教程正文（url 或 query 自动解析；仅站内 https） |
| `besson_tutorial_plan` | 按目标生成学习路线（新手/进阶/neoforge/forge/迁移/26.1） |
| `besson_tutorial_compare` | 两系列/版本工程与 API 差异对比（11 项） |
| `besson_tutorial_env` | 环境搭建清单（JDK/Gradle/模板仓库/命令/坑点） |

## 系列总览

| 系列 | MC | Loader | Java | 章节 |
|---|---|---|---|---|
| A | 1.20.1 | Fabric | 17 | 55 |
| B | 1.21.X | Fabric | 21 | 57 |
| C | 1.20.1 | Forge | 17 | 38 |
| D | 1.21.1 | NeoForge | 21 | 32 |
| E | 26.1 | Fabric | 25 | 8 |
| F | 26.1 | NeoForge | 25 | 待开更 |

## 版本与许可

- v2.0.0（2026-10-19）：7 工具、bundle 形态、适配 DSH 0.2.1-rc.2
- 许可：CC BY-NC-SA 4.0（教程内容与索引数据来自 BeiShan_Besson；代码同样按该协议提供）
