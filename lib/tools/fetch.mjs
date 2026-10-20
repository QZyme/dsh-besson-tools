// besson-tutorial-fetch — 独立组件：只注册 besson_tutorial_fetch（抓取一篇文章正文）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-fetch` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-fetch';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_fetch;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
