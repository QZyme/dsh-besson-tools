// dsh-besson-tools 入口（宿主侧）：注册「工具调用统计」只读 HTTP 路由，供 Web 左栏面板读取。
// 客户端模块（client.js）由 bundle patch 精确包名行 name: 'dsh-besson-tools' 触发发现；
// 宿主侧不注册工具（11 个工具由 cordis.patch.yml 的 11 个组件行分别注册，避免重复注册）。
import { getUsage } from '../besson-tools.mjs';

export function apply(ctx) {
  ctx.inject(['webServer'], (sctx) => {
    sctx.effect(() => {
      const dispose = sctx.get('webServer').register({
        kind: 'exact',
        path: '/api/dsh-besson-tools/usage',
        handler: async (req, res) => {
          let body;
          try { body = getUsage(); } catch (e) { body = { error: String((e && e.message) || e) }; }
          const json = JSON.stringify(body);
          res.statusCode = 200;
          res.setHeader('content-type', 'application/json; charset=utf-8');
          res.setHeader('cache-control', 'no-store');
          res.end(json);
        },
      });
      return () => { if (typeof dispose === 'function') dispose(); };
    }, 'besson-tools: usage bridge');
  });
}
