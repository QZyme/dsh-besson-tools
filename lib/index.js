// dsh-besson-tools 入口
// bundle patch 行（cordis.patch.yml 里的 `name: dsh-besson-tools`）加载本模块，
// 本模块即 besson-tools 插件本体：向 ctx.tools 注册 9 个工具（7 个教程工具 + 工程体检 + 迁移清单）。
export { apply, inject, name } from '../besson-tools.mjs';
