// besson-tutorial-env — 独立组件：只注册 besson_tutorial_env（某版本+Loader 的环境搭建清单）
// 本组件由 bundle 补丁行 `- id: besson-tutorial-env` 加载，与其余 6 个组件互不依赖。
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

export const name = 'besson-tool-env';
export const inject = ['tools'];
export const apply = (ctx) => {
  const def = TOOLS.besson_tutorial_env;
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
