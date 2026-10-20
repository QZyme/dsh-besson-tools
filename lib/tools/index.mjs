// besson-tutorial-index — 独立组件：只注册 besson_tutorial_index（系列/版本/数据健康总览）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-index` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-index';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_index;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
