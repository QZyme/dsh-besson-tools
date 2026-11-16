// 组件：besson_mod_mapping（单工具注册；实现与数据来自 ../../besson-tools.mjs）
import { TOOLS, defineBessonTool } from '../../besson-tools.mjs';

const def = TOOLS.besson_mod_mapping;
export const name = "besson_mod_mapping";
export const inject = ['tools'];

export const apply = (ctx) => {
  ctx.tools.register(defineBessonTool(def.name, def.description, def.parameters, def.execute));
};
