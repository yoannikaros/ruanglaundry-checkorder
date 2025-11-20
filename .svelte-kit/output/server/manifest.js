export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BbtGxDYF.js",app:"_app/immutable/entry/app.CRClTVtx.js",imports:["_app/immutable/entry/start.BbtGxDYF.js","_app/immutable/chunks/DXO_rgKn.js","_app/immutable/chunks/t_wk_9ky.js","_app/immutable/chunks/BqEt7gUp.js","_app/immutable/chunks/DEQgLjO0.js","_app/immutable/entry/app.CRClTVtx.js","_app/immutable/chunks/t_wk_9ky.js","_app/immutable/chunks/D5Q_EPn1.js","_app/immutable/chunks/BxctG4mE.js","_app/immutable/chunks/DEQgLjO0.js","_app/immutable/chunks/CpUlXQ3E.js","_app/immutable/chunks/_Ssj5rt6.js","_app/immutable/chunks/BqEt7gUp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/orders/[id]",
				pattern: /^\/orders\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
