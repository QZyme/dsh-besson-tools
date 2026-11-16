// besson-mod-migrate — 独立组件：只注册 besson_mod_migrate（跨系列迁移清单）
// 本组件由 bundle 补丁行 `- id: besson-mod-migrate` 加载，与其余组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'dsh-besson-mod-migrate';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_mod_migrate;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
