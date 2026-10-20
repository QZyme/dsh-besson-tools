// besson-tutorial-lookup — 独立组件：只注册 besson_tutorial_lookup（章节检索（关键词 → 标题+链接））
// 本组件由 bundle 补丁行 `- id: besson-tutorial-lookup` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-lookup';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_lookup;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
