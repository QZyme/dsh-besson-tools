// dsh-besson-tools 入口（宿主侧空实现）
// 客户端模块（client.js）由 bundle patch 中精确包名行 name: 'dsh-besson-tools' 触发发现；
// 宿主侧不注册工具（11 个工具由 cordis.patch.yml 的 11 个组件行分别注册，避免重复注册）。
export function apply() {}
