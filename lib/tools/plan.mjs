// besson-tutorial-plan — 独立组件：只注册 besson_tutorial_plan（按目标生成学习路线）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-plan` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-plan';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_plan;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
