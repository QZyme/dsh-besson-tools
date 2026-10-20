// besson-tutorial-series — 独立组件：只注册 besson_tutorial_series（单系列全部章节，或取单章）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-series` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-series';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_series;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
