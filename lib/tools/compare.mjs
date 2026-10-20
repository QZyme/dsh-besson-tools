// besson-tutorial-compare — 独立组件：只注册 besson_tutorial_compare（两个系列/版本差异对比）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-compare` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-compare';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_compare;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
