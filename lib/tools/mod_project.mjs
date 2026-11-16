// besson-mod-project — 独立组件：只注册 besson_mod_project（本地模组工程体检）
// 本组件由 bundle 补丁行 `- id: besson-mod-project` 加载，与其余组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'dsh-besson-mod-project';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_mod_project;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
