(function () {
  const v = document.createElement("link").relList;
  if (v && v.supports && v.supports("modulepreload")) return;
  for (const b of document.querySelectorAll('link[rel="modulepreload"]')) h(b);
  new MutationObserver((b) => {
    for (const w of b)
      if (w.type === "childList")
        for (const B of w.addedNodes)
          B.tagName === "LINK" && B.rel === "modulepreload" && h(B);
  }).observe(document, { childList: !0, subtree: !0 });
  function g(b) {
    const w = {};
    return (
      b.integrity && (w.integrity = b.integrity),
      b.referrerPolicy && (w.referrerPolicy = b.referrerPolicy),
      b.crossOrigin === "use-credentials"
        ? (w.credentials = "include")
        : b.crossOrigin === "anonymous"
          ? (w.credentials = "omit")
          : (w.credentials = "same-origin"),
      w
    );
  }
  function h(b) {
    if (b.ep) return;
    b.ep = !0;
    const w = g(b);
    fetch(b.href, w);
  }
})();
var iu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function bh(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
function Wm(f) {
  if (Object.prototype.hasOwnProperty.call(f, "__esModule")) return f;
  var v = f.default;
  if (typeof v == "function") {
    var g = function h() {
      return this instanceof h
        ? Reflect.construct(v, arguments, this.constructor)
        : v.apply(this, arguments);
    };
    g.prototype = v.prototype;
  } else g = {};
  return (
    Object.defineProperty(g, "__esModule", { value: !0 }),
    Object.keys(f).forEach(function (h) {
      var b = Object.getOwnPropertyDescriptor(f, h);
      Object.defineProperty(
        g,
        h,
        b.get
          ? b
          : {
              enumerable: !0,
              get: function () {
                return f[h];
              },
            },
      );
    }),
    g
  );
}
var _c = { exports: {} },
  qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qd;
function Pm() {
  if (qd) return qn;
  qd = 1;
  var f = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.fragment");
  function g(h, b, w) {
    var B = null;
    if (
      (w !== void 0 && (B = "" + w),
      b.key !== void 0 && (B = "" + b.key),
      "key" in b)
    ) {
      w = {};
      for (var V in b) V !== "key" && (w[V] = b[V]);
    } else w = b;
    return (
      (b = w.ref),
      { $$typeof: f, type: h, key: B, ref: b !== void 0 ? b : null, props: w }
    );
  }
  return ((qn.Fragment = v), (qn.jsx = g), (qn.jsxs = g), qn);
}
var Bd;
function $m() {
  return (Bd || ((Bd = 1), (_c.exports = Pm())), _c.exports);
}
var s = $m(),
  Ec = { exports: {} },
  ge = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd;
function Fm() {
  if (Yd) return ge;
  Yd = 1;
  var f = Symbol.for("react.transitional.element"),
    v = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    b = Symbol.for("react.profiler"),
    w = Symbol.for("react.consumer"),
    B = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    D = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    ae = Symbol.iterator;
  function te(u) {
    return u === null || typeof u != "object"
      ? null
      : ((u = (ae && u[ae]) || u["@@iterator"]),
        typeof u == "function" ? u : null);
  }
  var me = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ce = Object.assign,
    $ = {};
  function he(u, d, j) {
    ((this.props = u),
      (this.context = d),
      (this.refs = $),
      (this.updater = j || me));
  }
  ((he.prototype.isReactComponent = {}),
    (he.prototype.setState = function (u, d) {
      if (typeof u != "object" && typeof u != "function" && u != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, u, d, "setState");
    }),
    (he.prototype.forceUpdate = function (u) {
      this.updater.enqueueForceUpdate(this, u, "forceUpdate");
    }));
  function oe() {}
  oe.prototype = he.prototype;
  function ve(u, d, j) {
    ((this.props = u),
      (this.context = d),
      (this.refs = $),
      (this.updater = j || me));
  }
  var ye = (ve.prototype = new oe());
  ((ye.constructor = ve), ce(ye, he.prototype), (ye.isPureReactComponent = !0));
  var Te = Array.isArray,
    x = { H: null, A: null, T: null, S: null, V: null },
    E = Object.prototype.hasOwnProperty;
  function R(u, d, j, z, U, k) {
    return (
      (j = k.ref),
      { $$typeof: f, type: u, key: d, ref: j !== void 0 ? j : null, props: k }
    );
  }
  function W(u, d) {
    return R(u.type, d, void 0, void 0, void 0, u.props);
  }
  function T(u) {
    return typeof u == "object" && u !== null && u.$$typeof === f;
  }
  function m(u) {
    var d = { "=": "=0", ":": "=2" };
    return (
      "$" +
      u.replace(/[=:]/g, function (j) {
        return d[j];
      })
    );
  }
  var q = /\/+/g;
  function X(u, d) {
    return typeof u == "object" && u !== null && u.key != null
      ? m("" + u.key)
      : d.toString(36);
  }
  function C() {}
  function L(u) {
    switch (u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw u.reason;
      default:
        switch (
          (typeof u.status == "string"
            ? u.then(C, C)
            : ((u.status = "pending"),
              u.then(
                function (d) {
                  u.status === "pending" &&
                    ((u.status = "fulfilled"), (u.value = d));
                },
                function (d) {
                  u.status === "pending" &&
                    ((u.status = "rejected"), (u.reason = d));
                },
              )),
          u.status)
        ) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw u.reason;
        }
    }
    throw u;
  }
  function P(u, d, j, z, U) {
    var k = typeof u;
    (k === "undefined" || k === "boolean") && (u = null);
    var Y = !1;
    if (u === null) Y = !0;
    else
      switch (k) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case f:
            case v:
              Y = !0;
              break;
            case J:
              return ((Y = u._init), P(Y(u._payload), d, j, z, U));
          }
      }
    if (Y)
      return (
        (U = U(u)),
        (Y = z === "" ? "." + X(u, 0) : z),
        Te(U)
          ? ((j = ""),
            Y != null && (j = Y.replace(q, "$&/") + "/"),
            P(U, d, j, "", function (de) {
              return de;
            }))
          : U != null &&
            (T(U) &&
              (U = W(
                U,
                j +
                  (U.key == null || (u && u.key === U.key)
                    ? ""
                    : ("" + U.key).replace(q, "$&/") + "/") +
                  Y,
              )),
            d.push(U)),
        1
      );
    Y = 0;
    var F = z === "" ? "." : z + ":";
    if (Te(u))
      for (var ne = 0; ne < u.length; ne++)
        ((z = u[ne]), (k = F + X(z, ne)), (Y += P(z, d, j, k, U)));
    else if (((ne = te(u)), typeof ne == "function"))
      for (u = ne.call(u), ne = 0; !(z = u.next()).done; )
        ((z = z.value), (k = F + X(z, ne++)), (Y += P(z, d, j, k, U)));
    else if (k === "object") {
      if (typeof u.then == "function") return P(L(u), d, j, z, U);
      throw (
        (d = String(u)),
        Error(
          "Objects are not valid as a React child (found: " +
            (d === "[object Object]"
              ? "object with keys {" + Object.keys(u).join(", ") + "}"
              : d) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return Y;
  }
  function S(u, d, j) {
    if (u == null) return u;
    var z = [],
      U = 0;
    return (
      P(u, z, "", "", function (k) {
        return d.call(j, k, U++);
      }),
      z
    );
  }
  function r(u) {
    if (u._status === -1) {
      var d = u._result;
      ((d = d()),
        d.then(
          function (j) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 1), (u._result = j));
          },
          function (j) {
            (u._status === 0 || u._status === -1) &&
              ((u._status = 2), (u._result = j));
          },
        ),
        u._status === -1 && ((u._status = 0), (u._result = d)));
    }
    if (u._status === 1) return u._result.default;
    throw u._result;
  }
  var I =
    typeof reportError == "function"
      ? reportError
      : function (u) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var d = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof u == "object" &&
                u !== null &&
                typeof u.message == "string"
                  ? String(u.message)
                  : String(u),
              error: u,
            });
            if (!window.dispatchEvent(d)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", u);
            return;
          }
          console.error(u);
        };
  function p() {}
  return (
    (ge.Children = {
      map: S,
      forEach: function (u, d, j) {
        S(
          u,
          function () {
            d.apply(this, arguments);
          },
          j,
        );
      },
      count: function (u) {
        var d = 0;
        return (
          S(u, function () {
            d++;
          }),
          d
        );
      },
      toArray: function (u) {
        return (
          S(u, function (d) {
            return d;
          }) || []
        );
      },
      only: function (u) {
        if (!T(u))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return u;
      },
    }),
    (ge.Component = he),
    (ge.Fragment = g),
    (ge.Profiler = b),
    (ge.PureComponent = ve),
    (ge.StrictMode = h),
    (ge.Suspense = K),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (u) {
        return x.H.useMemoCache(u);
      },
    }),
    (ge.cache = function (u) {
      return function () {
        return u.apply(null, arguments);
      };
    }),
    (ge.cloneElement = function (u, d, j) {
      if (u == null)
        throw Error(
          "The argument must be a React element, but you passed " + u + ".",
        );
      var z = ce({}, u.props),
        U = u.key,
        k = void 0;
      if (d != null)
        for (Y in (d.ref !== void 0 && (k = void 0),
        d.key !== void 0 && (U = "" + d.key),
        d))
          !E.call(d, Y) ||
            Y === "key" ||
            Y === "__self" ||
            Y === "__source" ||
            (Y === "ref" && d.ref === void 0) ||
            (z[Y] = d[Y]);
      var Y = arguments.length - 2;
      if (Y === 1) z.children = j;
      else if (1 < Y) {
        for (var F = Array(Y), ne = 0; ne < Y; ne++) F[ne] = arguments[ne + 2];
        z.children = F;
      }
      return R(u.type, U, void 0, void 0, k, z);
    }),
    (ge.createContext = function (u) {
      return (
        (u = {
          $$typeof: B,
          _currentValue: u,
          _currentValue2: u,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (u.Provider = u),
        (u.Consumer = { $$typeof: w, _context: u }),
        u
      );
    }),
    (ge.createElement = function (u, d, j) {
      var z,
        U = {},
        k = null;
      if (d != null)
        for (z in (d.key !== void 0 && (k = "" + d.key), d))
          E.call(d, z) &&
            z !== "key" &&
            z !== "__self" &&
            z !== "__source" &&
            (U[z] = d[z]);
      var Y = arguments.length - 2;
      if (Y === 1) U.children = j;
      else if (1 < Y) {
        for (var F = Array(Y), ne = 0; ne < Y; ne++) F[ne] = arguments[ne + 2];
        U.children = F;
      }
      if (u && u.defaultProps)
        for (z in ((Y = u.defaultProps), Y)) U[z] === void 0 && (U[z] = Y[z]);
      return R(u, k, void 0, void 0, null, U);
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (u) {
      return { $$typeof: V, render: u };
    }),
    (ge.isValidElement = T),
    (ge.lazy = function (u) {
      return { $$typeof: J, _payload: { _status: -1, _result: u }, _init: r };
    }),
    (ge.memo = function (u, d) {
      return { $$typeof: D, type: u, compare: d === void 0 ? null : d };
    }),
    (ge.startTransition = function (u) {
      var d = x.T,
        j = {};
      x.T = j;
      try {
        var z = u(),
          U = x.S;
        (U !== null && U(j, z),
          typeof z == "object" &&
            z !== null &&
            typeof z.then == "function" &&
            z.then(p, I));
      } catch (k) {
        I(k);
      } finally {
        x.T = d;
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return x.H.useCacheRefresh();
    }),
    (ge.use = function (u) {
      return x.H.use(u);
    }),
    (ge.useActionState = function (u, d, j) {
      return x.H.useActionState(u, d, j);
    }),
    (ge.useCallback = function (u, d) {
      return x.H.useCallback(u, d);
    }),
    (ge.useContext = function (u) {
      return x.H.useContext(u);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (u, d) {
      return x.H.useDeferredValue(u, d);
    }),
    (ge.useEffect = function (u, d, j) {
      var z = x.H;
      if (typeof j == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React.",
        );
      return z.useEffect(u, d);
    }),
    (ge.useId = function () {
      return x.H.useId();
    }),
    (ge.useImperativeHandle = function (u, d, j) {
      return x.H.useImperativeHandle(u, d, j);
    }),
    (ge.useInsertionEffect = function (u, d) {
      return x.H.useInsertionEffect(u, d);
    }),
    (ge.useLayoutEffect = function (u, d) {
      return x.H.useLayoutEffect(u, d);
    }),
    (ge.useMemo = function (u, d) {
      return x.H.useMemo(u, d);
    }),
    (ge.useOptimistic = function (u, d) {
      return x.H.useOptimistic(u, d);
    }),
    (ge.useReducer = function (u, d, j) {
      return x.H.useReducer(u, d, j);
    }),
    (ge.useRef = function (u) {
      return x.H.useRef(u);
    }),
    (ge.useState = function (u) {
      return x.H.useState(u);
    }),
    (ge.useSyncExternalStore = function (u, d, j) {
      return x.H.useSyncExternalStore(u, d, j);
    }),
    (ge.useTransition = function () {
      return x.H.useTransition();
    }),
    (ge.version = "19.1.0"),
    ge
  );
}
var Gd;
function Zt() {
  return (Gd || ((Gd = 1), (Ec.exports = Fm())), Ec.exports);
}
var We = Zt();
const Il = bh(We);
var Nc = { exports: {} },
  Bn = {},
  Mc = { exports: {} },
  zc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xd;
function Im() {
  return (
    Xd ||
      ((Xd = 1),
      (function (f) {
        function v(S, r) {
          var I = S.length;
          S.push(r);
          e: for (; 0 < I; ) {
            var p = (I - 1) >>> 1,
              u = S[p];
            if (0 < b(u, r)) ((S[p] = r), (S[I] = u), (I = p));
            else break e;
          }
        }
        function g(S) {
          return S.length === 0 ? null : S[0];
        }
        function h(S) {
          if (S.length === 0) return null;
          var r = S[0],
            I = S.pop();
          if (I !== r) {
            S[0] = I;
            e: for (var p = 0, u = S.length, d = u >>> 1; p < d; ) {
              var j = 2 * (p + 1) - 1,
                z = S[j],
                U = j + 1,
                k = S[U];
              if (0 > b(z, I))
                U < u && 0 > b(k, z)
                  ? ((S[p] = k), (S[U] = I), (p = U))
                  : ((S[p] = z), (S[j] = I), (p = j));
              else if (U < u && 0 > b(k, I)) ((S[p] = k), (S[U] = I), (p = U));
              else break e;
            }
          }
          return r;
        }
        function b(S, r) {
          var I = S.sortIndex - r.sortIndex;
          return I !== 0 ? I : S.id - r.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var w = performance;
          f.unstable_now = function () {
            return w.now();
          };
        } else {
          var B = Date,
            V = B.now();
          f.unstable_now = function () {
            return B.now() - V;
          };
        }
        var K = [],
          D = [],
          J = 1,
          ae = null,
          te = 3,
          me = !1,
          ce = !1,
          $ = !1,
          he = !1,
          oe = typeof setTimeout == "function" ? setTimeout : null,
          ve = typeof clearTimeout == "function" ? clearTimeout : null,
          ye = typeof setImmediate < "u" ? setImmediate : null;
        function Te(S) {
          for (var r = g(D); r !== null; ) {
            if (r.callback === null) h(D);
            else if (r.startTime <= S)
              (h(D), (r.sortIndex = r.expirationTime), v(K, r));
            else break;
            r = g(D);
          }
        }
        function x(S) {
          if ((($ = !1), Te(S), !ce))
            if (g(K) !== null) ((ce = !0), E || ((E = !0), X()));
            else {
              var r = g(D);
              r !== null && P(x, r.startTime - S);
            }
        }
        var E = !1,
          R = -1,
          W = 5,
          T = -1;
        function m() {
          return he ? !0 : !(f.unstable_now() - T < W);
        }
        function q() {
          if (((he = !1), E)) {
            var S = f.unstable_now();
            T = S;
            var r = !0;
            try {
              e: {
                ((ce = !1), $ && (($ = !1), ve(R), (R = -1)), (me = !0));
                var I = te;
                try {
                  t: {
                    for (
                      Te(S), ae = g(K);
                      ae !== null && !(ae.expirationTime > S && m());
                    ) {
                      var p = ae.callback;
                      if (typeof p == "function") {
                        ((ae.callback = null), (te = ae.priorityLevel));
                        var u = p(ae.expirationTime <= S);
                        if (((S = f.unstable_now()), typeof u == "function")) {
                          ((ae.callback = u), Te(S), (r = !0));
                          break t;
                        }
                        (ae === g(K) && h(K), Te(S));
                      } else h(K);
                      ae = g(K);
                    }
                    if (ae !== null) r = !0;
                    else {
                      var d = g(D);
                      (d !== null && P(x, d.startTime - S), (r = !1));
                    }
                  }
                  break e;
                } finally {
                  ((ae = null), (te = I), (me = !1));
                }
                r = void 0;
              }
            } finally {
              r ? X() : (E = !1);
            }
          }
        }
        var X;
        if (typeof ye == "function")
          X = function () {
            ye(q);
          };
        else if (typeof MessageChannel < "u") {
          var C = new MessageChannel(),
            L = C.port2;
          ((C.port1.onmessage = q),
            (X = function () {
              L.postMessage(null);
            }));
        } else
          X = function () {
            oe(q, 0);
          };
        function P(S, r) {
          R = oe(function () {
            S(f.unstable_now());
          }, r);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (f.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (W = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return te;
          }),
          (f.unstable_next = function (S) {
            switch (te) {
              case 1:
              case 2:
              case 3:
                var r = 3;
                break;
              default:
                r = te;
            }
            var I = te;
            te = r;
            try {
              return S();
            } finally {
              te = I;
            }
          }),
          (f.unstable_requestPaint = function () {
            he = !0;
          }),
          (f.unstable_runWithPriority = function (S, r) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var I = te;
            te = S;
            try {
              return r();
            } finally {
              te = I;
            }
          }),
          (f.unstable_scheduleCallback = function (S, r, I) {
            var p = f.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? p + I : p))
                : (I = p),
              S)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (u = I + u),
              (S = {
                id: J++,
                callback: r,
                priorityLevel: S,
                startTime: I,
                expirationTime: u,
                sortIndex: -1,
              }),
              I > p
                ? ((S.sortIndex = I),
                  v(D, S),
                  g(K) === null &&
                    S === g(D) &&
                    ($ ? (ve(R), (R = -1)) : ($ = !0), P(x, I - p)))
                : ((S.sortIndex = u),
                  v(K, S),
                  ce || me || ((ce = !0), E || ((E = !0), X()))),
              S
            );
          }),
          (f.unstable_shouldYield = m),
          (f.unstable_wrapCallback = function (S) {
            var r = te;
            return function () {
              var I = te;
              te = r;
              try {
                return S.apply(this, arguments);
              } finally {
                te = I;
              }
            };
          }));
      })(zc)),
    zc
  );
}
var Qd;
function ev() {
  return (Qd || ((Qd = 1), (Mc.exports = Im())), Mc.exports);
}
var Cc = { exports: {} },
  ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function tv() {
  if (kd) return ot;
  kd = 1;
  var f = Zt();
  function v(K) {
    var D = "https://react.dev/errors/" + K;
    if (1 < arguments.length) {
      D += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        D += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return (
      "Minified React error #" +
      K +
      "; visit " +
      D +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function g() {}
  var h = {
      d: {
        f: g,
        r: function () {
          throw Error(v(522));
        },
        D: g,
        C: g,
        L: g,
        m: g,
        X: g,
        S: g,
        M: g,
      },
      p: 0,
      findDOMNode: null,
    },
    b = Symbol.for("react.portal");
  function w(K, D, J) {
    var ae =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: ae == null ? null : "" + ae,
      children: K,
      containerInfo: D,
      implementation: J,
    };
  }
  var B = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function V(K, D) {
    if (K === "font") return "";
    if (typeof D == "string") return D === "use-credentials" ? D : "";
  }
  return (
    (ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (ot.createPortal = function (K, D) {
      var J =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!D || (D.nodeType !== 1 && D.nodeType !== 9 && D.nodeType !== 11))
        throw Error(v(299));
      return w(K, D, null, J);
    }),
    (ot.flushSync = function (K) {
      var D = B.T,
        J = h.p;
      try {
        if (((B.T = null), (h.p = 2), K)) return K();
      } finally {
        ((B.T = D), (h.p = J), h.d.f());
      }
    }),
    (ot.preconnect = function (K, D) {
      typeof K == "string" &&
        (D
          ? ((D = D.crossOrigin),
            (D =
              typeof D == "string"
                ? D === "use-credentials"
                  ? D
                  : ""
                : void 0))
          : (D = null),
        h.d.C(K, D));
    }),
    (ot.prefetchDNS = function (K) {
      typeof K == "string" && h.d.D(K);
    }),
    (ot.preinit = function (K, D) {
      if (typeof K == "string" && D && typeof D.as == "string") {
        var J = D.as,
          ae = V(J, D.crossOrigin),
          te = typeof D.integrity == "string" ? D.integrity : void 0,
          me = typeof D.fetchPriority == "string" ? D.fetchPriority : void 0;
        J === "style"
          ? h.d.S(K, typeof D.precedence == "string" ? D.precedence : void 0, {
              crossOrigin: ae,
              integrity: te,
              fetchPriority: me,
            })
          : J === "script" &&
            h.d.X(K, {
              crossOrigin: ae,
              integrity: te,
              fetchPriority: me,
              nonce: typeof D.nonce == "string" ? D.nonce : void 0,
            });
      }
    }),
    (ot.preinitModule = function (K, D) {
      if (typeof K == "string")
        if (typeof D == "object" && D !== null) {
          if (D.as == null || D.as === "script") {
            var J = V(D.as, D.crossOrigin);
            h.d.M(K, {
              crossOrigin: J,
              integrity: typeof D.integrity == "string" ? D.integrity : void 0,
              nonce: typeof D.nonce == "string" ? D.nonce : void 0,
            });
          }
        } else D == null && h.d.M(K);
    }),
    (ot.preload = function (K, D) {
      if (
        typeof K == "string" &&
        typeof D == "object" &&
        D !== null &&
        typeof D.as == "string"
      ) {
        var J = D.as,
          ae = V(J, D.crossOrigin);
        h.d.L(K, J, {
          crossOrigin: ae,
          integrity: typeof D.integrity == "string" ? D.integrity : void 0,
          nonce: typeof D.nonce == "string" ? D.nonce : void 0,
          type: typeof D.type == "string" ? D.type : void 0,
          fetchPriority:
            typeof D.fetchPriority == "string" ? D.fetchPriority : void 0,
          referrerPolicy:
            typeof D.referrerPolicy == "string" ? D.referrerPolicy : void 0,
          imageSrcSet:
            typeof D.imageSrcSet == "string" ? D.imageSrcSet : void 0,
          imageSizes: typeof D.imageSizes == "string" ? D.imageSizes : void 0,
          media: typeof D.media == "string" ? D.media : void 0,
        });
      }
    }),
    (ot.preloadModule = function (K, D) {
      if (typeof K == "string")
        if (D) {
          var J = V(D.as, D.crossOrigin);
          h.d.m(K, {
            as: typeof D.as == "string" && D.as !== "script" ? D.as : void 0,
            crossOrigin: J,
            integrity: typeof D.integrity == "string" ? D.integrity : void 0,
          });
        } else h.d.m(K);
    }),
    (ot.requestFormReset = function (K) {
      h.d.r(K);
    }),
    (ot.unstable_batchedUpdates = function (K, D) {
      return K(D);
    }),
    (ot.useFormState = function (K, D, J) {
      return B.H.useFormState(K, D, J);
    }),
    (ot.useFormStatus = function () {
      return B.H.useHostTransitionStatus();
    }),
    (ot.version = "19.1.0"),
    ot
  );
}
var Zd;
function lv() {
  if (Zd) return Cc.exports;
  Zd = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return (f(), (Cc.exports = tv()), Cc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vd;
function av() {
  if (Vd) return Bn;
  Vd = 1;
  var f = ev(),
    v = Zt(),
    g = lv();
  function h(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function b(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function w(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function B(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function V(e) {
    if (w(e) !== e) throw Error(h(188));
  }
  function K(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = w(e)), t === null)) throw Error(h(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return (V(n), e);
          if (i === a) return (V(n), t);
          i = i.sibling;
        }
        throw Error(h(188));
      }
      if (l.return !== a.return) ((l = n), (a = i));
      else {
        for (var c = !1, o = n.child; o; ) {
          if (o === l) {
            ((c = !0), (l = n), (a = i));
            break;
          }
          if (o === a) {
            ((c = !0), (a = n), (l = i));
            break;
          }
          o = o.sibling;
        }
        if (!c) {
          for (o = i.child; o; ) {
            if (o === l) {
              ((c = !0), (l = i), (a = n));
              break;
            }
            if (o === a) {
              ((c = !0), (a = i), (l = n));
              break;
            }
            o = o.sibling;
          }
          if (!c) throw Error(h(189));
        }
      }
      if (l.alternate !== a) throw Error(h(190));
    }
    if (l.tag !== 3) throw Error(h(188));
    return l.stateNode.current === l ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = D(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var J = Object.assign,
    ae = Symbol.for("react.element"),
    te = Symbol.for("react.transitional.element"),
    me = Symbol.for("react.portal"),
    ce = Symbol.for("react.fragment"),
    $ = Symbol.for("react.strict_mode"),
    he = Symbol.for("react.profiler"),
    oe = Symbol.for("react.provider"),
    ve = Symbol.for("react.consumer"),
    ye = Symbol.for("react.context"),
    Te = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    E = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    T = Symbol.for("react.activity"),
    m = Symbol.for("react.memo_cache_sentinel"),
    q = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (q && e[q]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Symbol.for("react.client.reference");
  function L(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === C ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case he:
        return "Profiler";
      case $:
        return "StrictMode";
      case x:
        return "Suspense";
      case E:
        return "SuspenseList";
      case T:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case me:
          return "Portal";
        case ye:
          return (e.displayName || "Context") + ".Provider";
        case ve:
          return (e._context.displayName || "Context") + ".Consumer";
        case Te:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case R:
          return (
            (t = e.displayName || null),
            t !== null ? t : L(e.type) || "Memo"
          );
        case W:
          ((t = e._payload), (e = e._init));
          try {
            return L(e(t));
          } catch {}
      }
    return null;
  }
  var P = Array.isArray,
    S = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    r = g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    p = [],
    u = -1;
  function d(e) {
    return { current: e };
  }
  function j(e) {
    0 > u || ((e.current = p[u]), (p[u] = null), u--);
  }
  function z(e, t) {
    (u++, (p[u] = e.current), (e.current = t));
  }
  var U = d(null),
    k = d(null),
    Y = d(null),
    F = d(null);
  function ne(e, t) {
    switch ((z(Y, t), z(k, e), z(U, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? dd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = dd(t)), (e = hd(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (j(U), z(U, e));
  }
  function de() {
    (j(U), j(k), j(Y));
  }
  function xe(e) {
    e.memoizedState !== null && z(F, e);
    var t = U.current,
      l = hd(t, e.type);
    t !== l && (z(k, e), z(U, l));
  }
  function Ee(e) {
    (k.current === e && (j(U), j(k)),
      F.current === e && (j(F), (Dn._currentValue = I)));
  }
  var Ne = Object.prototype.hasOwnProperty,
    je = f.unstable_scheduleCallback,
    pe = f.unstable_cancelCallback,
    Me = f.unstable_shouldYield,
    Ze = f.unstable_requestPaint,
    se = f.unstable_now,
    Ge = f.unstable_getCurrentPriorityLevel,
    Ve = f.unstable_ImmediatePriority,
    Pe = f.unstable_UserBlockingPriority,
    tt = f.unstable_NormalPriority,
    Vt = f.unstable_LowPriority,
    Cl = f.unstable_IdlePriority,
    Zn = f.log,
    Al = f.unstable_setDisableYieldValue,
    Dl = null,
    Xe = null;
  function ht(e) {
    if (
      (typeof Zn == "function" && Al(e),
      Xe && typeof Xe.setStrictMode == "function")
    )
      try {
        Xe.setStrictMode(Dl, e);
      } catch {}
  }
  var bt = Math.clz32 ? Math.clz32 : Hh,
    Dh = Math.log,
    Rh = Math.LN2;
  function Hh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dh(e) / Rh) | 0)) | 0);
  }
  var Vn = 256,
    Kn = 4194304;
  function Rl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Jn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var o = a & 134217727;
    return (
      o !== 0
        ? ((a = o & ~i),
          a !== 0
            ? (n = Rl(a))
            : ((c &= o),
              c !== 0
                ? (n = Rl(c))
                : l || ((l = o & ~e), l !== 0 && (n = Rl(l)))))
        : ((o = a & ~i),
          o !== 0
            ? (n = Rl(o))
            : c !== 0
              ? (n = Rl(c))
              : l || ((l = a & ~e), l !== 0 && (n = Rl(l)))),
      n === 0
        ? 0
        : t !== 0 &&
            t !== n &&
            (t & i) === 0 &&
            ((i = n & -n),
            (l = t & -t),
            i >= l || (i === 32 && (l & 4194048) !== 0))
          ? t
          : n
    );
  }
  function Ga(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Lh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Kc() {
    var e = Vn;
    return ((Vn <<= 1), (Vn & 4194048) === 0 && (Vn = 256), e);
  }
  function Jc() {
    var e = Kn;
    return ((Kn <<= 1), (Kn & 62914560) === 0 && (Kn = 4194304), e);
  }
  function vu(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Xa(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Uh(e, t, l, a, n, i) {
    var c = e.pendingLanes;
    ((e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0));
    var o = e.entanglements,
      y = e.expirationTimes,
      M = e.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var G = 31 - bt(l),
        Z = 1 << G;
      ((o[G] = 0), (y[G] = -1));
      var A = M[G];
      if (A !== null)
        for (M[G] = null, G = 0; G < A.length; G++) {
          var H = A[G];
          H !== null && (H.lane &= -536870913);
        }
      l &= ~Z;
    }
    (a !== 0 && Wc(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t)));
  }
  function Wc(e, t, l) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - bt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090)));
  }
  function Pc(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - bt(l),
        n = 1 << a;
      ((n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n));
    }
  }
  function yu(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function gu(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function $c() {
    var e = r.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ad(e.type));
  }
  function qh(e, t) {
    var l = r.p;
    try {
      return ((r.p = e), t());
    } finally {
      r.p = l;
    }
  }
  var cl = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + cl,
    mt = "__reactProps$" + cl,
    ta = "__reactContainer$" + cl,
    pu = "__reactEvents$" + cl,
    Bh = "__reactListeners$" + cl,
    Yh = "__reactHandles$" + cl,
    Fc = "__reactResources$" + cl,
    Qa = "__reactMarker$" + cl;
  function bu(e) {
    (delete e[st], delete e[mt], delete e[pu], delete e[Bh], delete e[Yh]);
  }
  function la(e) {
    var t = e[st];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ta] || l[st])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = gd(e); e !== null; ) {
            if ((l = e[st])) return l;
            e = gd(e);
          }
        return t;
      }
      ((e = l), (l = e.parentNode));
    }
    return null;
  }
  function aa(e) {
    if ((e = e[st] || e[ta])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ka(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(h(33));
  }
  function na(e) {
    var t = e[Fc];
    return (
      t ||
        (t = e[Fc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function lt(e) {
    e[Qa] = !0;
  }
  var Ic = new Set(),
    es = {};
  function Hl(e, t) {
    (ia(e, t), ia(e + "Capture", t));
  }
  function ia(e, t) {
    for (es[e] = t, e = 0; e < t.length; e++) Ic.add(t[e]);
  }
  var Gh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ts = {},
    ls = {};
  function Xh(e) {
    return Ne.call(ls, e)
      ? !0
      : Ne.call(ts, e)
        ? !1
        : Gh.test(e)
          ? (ls[e] = !0)
          : ((ts[e] = !0), !1);
  }
  function Wn(e, t, l) {
    if (Xh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function Pn(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Kt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var xu, as;
  function ua(e) {
    if (xu === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ((xu = (t && t[1]) || ""),
          (as =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      xu +
      e +
      as
    );
  }
  var Su = !1;
  function Ou(e, t) {
    if (!e || Su) return "";
    Su = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Z, []);
                } catch (H) {
                  var A = H;
                }
                Reflect.construct(e, [], Z);
              } else {
                try {
                  Z.call();
                } catch (H) {
                  A = H;
                }
                e.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (H) {
                A = H;
              }
              (Z = e()) &&
                typeof Z.catch == "function" &&
                Z.catch(function () {});
            }
          } catch (H) {
            if (H && A && typeof H.stack == "string") return [H.stack, A.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        c = i[0],
        o = i[1];
      if (c && o) {
        var y = c.split(`
`),
          M = o.split(`
`);
        for (
          n = a = 0;
          a < y.length && !y[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < M.length && !M[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === y.length || n === M.length)
          for (
            a = y.length - 1, n = M.length - 1;
            1 <= a && 0 <= n && y[a] !== M[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (y[a] !== M[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || y[a] !== M[n])) {
                  var G =
                    `
` + y[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      G.includes("<anonymous>") &&
                      (G = G.replace("<anonymous>", e.displayName)),
                    G
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Su = !1), (Error.prepareStackTrace = l));
    }
    return (l = e ? e.displayName || e.name : "") ? ua(l) : "";
  }
  function Qh(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ua(e.type);
      case 16:
        return ua("Lazy");
      case 13:
        return ua("Suspense");
      case 19:
        return ua("SuspenseList");
      case 0:
      case 15:
        return Ou(e.type, !1);
      case 11:
        return Ou(e.type.render, !1);
      case 1:
        return Ou(e.type, !0);
      case 31:
        return ua("Activity");
      default:
        return "";
    }
  }
  function ns(e) {
    try {
      var t = "";
      do ((t += Qh(e)), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function is(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function kh(e) {
    var t = is(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (c) {
            ((a = "" + c), i.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function $n(e) {
    e._valueTracker || (e._valueTracker = kh(e));
  }
  function us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = is(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function Fn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Zh = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(Zh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function wu(e, t, l, a, n, i, c, o) {
    ((e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Nt(t))
          : e.value !== "" + Nt(t) && (e.value = "" + Nt(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? ju(e, c, Nt(t))
        : l != null
          ? ju(e, c, Nt(l))
          : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      o != null &&
      typeof o != "function" &&
      typeof o != "symbol" &&
      typeof o != "boolean"
        ? (e.name = "" + Nt(o))
        : e.removeAttribute("name"));
  }
  function rs(e, t, l, a, n, i, c, o) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      ((l = l != null ? "" + Nt(l) : ""),
        (t = t != null ? "" + Nt(t) : l),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = o ? e.checked : !!a),
      (e.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c));
  }
  function ju(e, t, l) {
    (t === "number" && Fn(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ra(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        ((n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0));
    } else {
      for (l = "" + Nt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          ((e[n].selected = !0), a && (e[n].defaultSelected = !0));
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function cs(e, t, l) {
    if (
      t != null &&
      ((t = "" + Nt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Nt(l) : "";
  }
  function ss(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(h(92));
        if (P(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        l = a;
      }
      (l == null && (l = ""), (t = l));
    }
    ((l = Nt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a));
  }
  function ca(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function fs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, l)
        : typeof l != "number" || l === 0 || Vh.has(t)
          ? t === "float"
            ? (e.cssFloat = l)
            : (e[t] = ("" + l).trim())
          : (e[t] = l + "px");
  }
  function os(e, t, l) {
    if (t != null && typeof t != "object") throw Error(h(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var n in t)
        ((a = t[n]), t.hasOwnProperty(n) && l[n] !== a && fs(e, n, a));
    } else for (var i in t) t.hasOwnProperty(i) && fs(e, i, t[i]);
  }
  function Tu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Jh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function In(e) {
    return Jh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var _u = null;
  function Eu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var sa = null,
    fa = null;
  function ds(e) {
    var t = aa(e);
    if (t && (e = t.stateNode)) {
      var l = e[mt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (wu(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Mt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[mt] || null;
                if (!n) throw Error(h(90));
                wu(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (t = 0; t < l.length; t++)
              ((a = l[t]), a.form === e.form && us(a));
          }
          break e;
        case "textarea":
          cs(e, l.value, l.defaultValue);
          break e;
        case "select":
          ((t = l.value), t != null && ra(e, !!l.multiple, t, !1));
      }
    }
  }
  var Nu = !1;
  function hs(e, t, l) {
    if (Nu) return e(t, l);
    Nu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Nu = !1),
        (sa !== null || fa !== null) &&
          (qi(), sa && ((t = sa), (e = fa), (fa = sa = null), ds(t), e)))
      )
        for (t = 0; t < e.length; t++) ds(e[t]);
    }
  }
  function Za(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[mt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(h(231, t, typeof l));
    return l;
  }
  var Jt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Mu = !1;
  if (Jt)
    try {
      var Va = {};
      (Object.defineProperty(Va, "passive", {
        get: function () {
          Mu = !0;
        },
      }),
        window.addEventListener("test", Va, Va),
        window.removeEventListener("test", Va, Va));
    } catch {
      Mu = !1;
    }
  var sl = null,
    zu = null,
    ei = null;
  function ms() {
    if (ei) return ei;
    var e,
      t = zu,
      l = t.length,
      a,
      n = "value" in sl ? sl.value : sl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var c = l - e;
    for (a = 1; a <= c && t[l - a] === n[i - a]; a++);
    return (ei = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ti(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function li() {
    return !0;
  }
  function vs() {
    return !1;
  }
  function vt(e) {
    function t(l, a, n, i, c) {
      ((this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = c),
        (this.currentTarget = null));
      for (var o in e)
        e.hasOwnProperty(o) && ((l = e[o]), (this[o] = l ? l(i) : i[o]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? li
          : vs),
        (this.isPropagationStopped = vs),
        this
      );
    }
    return (
      J(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = li));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = li));
        },
        persist: function () {},
        isPersistent: li,
      }),
      t
    );
  }
  var Ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ai = vt(Ll),
    Ka = J({}, Ll, { view: 0, detail: 0 }),
    Wh = vt(Ka),
    Cu,
    Au,
    Ja,
    ni = J({}, Ka, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ru,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Ja &&
              (Ja && e.type === "mousemove"
                ? ((Cu = e.screenX - Ja.screenX), (Au = e.screenY - Ja.screenY))
                : (Au = Cu = 0),
              (Ja = e)),
            Cu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Au;
      },
    }),
    ys = vt(ni),
    Ph = J({}, ni, { dataTransfer: 0 }),
    $h = vt(Ph),
    Fh = J({}, Ka, { relatedTarget: 0 }),
    Du = vt(Fh),
    Ih = J({}, Ll, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    e0 = vt(Ih),
    t0 = J({}, Ll, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    l0 = vt(t0),
    a0 = J({}, Ll, { data: 0 }),
    gs = vt(a0),
    n0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    i0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    u0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function r0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = u0[e])
        ? !!t[e]
        : !1;
  }
  function Ru() {
    return r0;
  }
  var c0 = J({}, Ka, {
      key: function (e) {
        if (e.key) {
          var t = n0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? i0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ru,
      charCode: function (e) {
        return e.type === "keypress" ? ti(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ti(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    s0 = vt(c0),
    f0 = J({}, ni, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ps = vt(f0),
    o0 = J({}, Ka, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ru,
    }),
    d0 = vt(o0),
    h0 = J({}, Ll, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    m0 = vt(h0),
    v0 = J({}, ni, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    y0 = vt(v0),
    g0 = J({}, Ll, { newState: 0, oldState: 0 }),
    p0 = vt(g0),
    b0 = [9, 13, 27, 32],
    Hu = Jt && "CompositionEvent" in window,
    Wa = null;
  Jt && "documentMode" in document && (Wa = document.documentMode);
  var x0 = Jt && "TextEvent" in window && !Wa,
    bs = Jt && (!Hu || (Wa && 8 < Wa && 11 >= Wa)),
    xs = " ",
    Ss = !1;
  function Os(e, t) {
    switch (e) {
      case "keyup":
        return b0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ws(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var oa = !1;
  function S0(e, t) {
    switch (e) {
      case "compositionend":
        return ws(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ss = !0), xs);
      case "textInput":
        return ((e = t.data), e === xs && Ss ? null : e);
      default:
        return null;
    }
  }
  function O0(e, t) {
    if (oa)
      return e === "compositionend" || (!Hu && Os(e, t))
        ? ((e = ms()), (ei = zu = sl = null), (oa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return bs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var w0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!w0[e.type] : t === "textarea";
  }
  function Ts(e, t, l, a) {
    (sa ? (fa ? fa.push(a) : (fa = [a])) : (sa = a),
      (t = ki(t, "onChange")),
      0 < t.length &&
        ((l = new ai("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t })));
  }
  var Pa = null,
    $a = null;
  function j0(e) {
    rd(e, 0);
  }
  function ii(e) {
    var t = ka(e);
    if (us(t)) return e;
  }
  function _s(e, t) {
    if (e === "change") return t;
  }
  var Es = !1;
  if (Jt) {
    var Lu;
    if (Jt) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var Ns = document.createElement("div");
        (Ns.setAttribute("oninput", "return;"),
          (Uu = typeof Ns.oninput == "function"));
      }
      Lu = Uu;
    } else Lu = !1;
    Es = Lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Ms() {
    Pa && (Pa.detachEvent("onpropertychange", zs), ($a = Pa = null));
  }
  function zs(e) {
    if (e.propertyName === "value" && ii($a)) {
      var t = [];
      (Ts(t, $a, e, Eu(e)), hs(j0, t));
    }
  }
  function T0(e, t, l) {
    e === "focusin"
      ? (Ms(), (Pa = t), ($a = l), Pa.attachEvent("onpropertychange", zs))
      : e === "focusout" && Ms();
  }
  function _0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ii($a);
  }
  function E0(e, t) {
    if (e === "click") return ii(t);
  }
  function N0(e, t) {
    if (e === "input" || e === "change") return ii(t);
  }
  function M0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var xt = typeof Object.is == "function" ? Object.is : M0;
  function Fa(e, t) {
    if (xt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Ne.call(t, n) || !xt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function Cs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function As(e, t) {
    var l = Cs(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Cs(l);
    }
  }
  function Ds(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Ds(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function Rs(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Fn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Fn(e.document);
    }
    return t;
  }
  function qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var z0 = Jt && "documentMode" in document && 11 >= document.documentMode,
    da = null,
    Bu = null,
    Ia = null,
    Yu = !1;
  function Hs(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Yu ||
      da == null ||
      da !== Fn(a) ||
      ((a = da),
      "selectionStart" in a && qu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ia && Fa(Ia, a)) ||
        ((Ia = a),
        (a = ki(Bu, "onSelect")),
        0 < a.length &&
          ((t = new ai("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = da))));
  }
  function Ul(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ha = {
      animationend: Ul("Animation", "AnimationEnd"),
      animationiteration: Ul("Animation", "AnimationIteration"),
      animationstart: Ul("Animation", "AnimationStart"),
      transitionrun: Ul("Transition", "TransitionRun"),
      transitionstart: Ul("Transition", "TransitionStart"),
      transitioncancel: Ul("Transition", "TransitionCancel"),
      transitionend: Ul("Transition", "TransitionEnd"),
    },
    Gu = {},
    Ls = {};
  Jt &&
    ((Ls = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ha.animationend.animation,
      delete ha.animationiteration.animation,
      delete ha.animationstart.animation),
    "TransitionEvent" in window || delete ha.transitionend.transition);
  function ql(e) {
    if (Gu[e]) return Gu[e];
    if (!ha[e]) return e;
    var t = ha[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in Ls) return (Gu[e] = t[l]);
    return e;
  }
  var Us = ql("animationend"),
    qs = ql("animationiteration"),
    Bs = ql("animationstart"),
    C0 = ql("transitionrun"),
    A0 = ql("transitionstart"),
    D0 = ql("transitioncancel"),
    Ys = ql("transitionend"),
    Gs = new Map(),
    Xu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Xu.push("scrollEnd");
  function Ut(e, t) {
    (Gs.set(e, t), Hl(t, [e]));
  }
  var Xs = new WeakMap();
  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Xs.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: ns(t) }), Xs.set(e, t), t);
    }
    return { value: e, source: t, stack: ns(t) };
  }
  var Ct = [],
    ma = 0,
    Qu = 0;
  function ui() {
    for (var e = ma, t = (Qu = ma = 0); t < e; ) {
      var l = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      if (((Ct[t++] = null), a !== null && n !== null)) {
        var c = a.pending;
        (c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
          (a.pending = n));
      }
      i !== 0 && Qs(l, n, i);
    }
  }
  function ri(e, t, l, a) {
    ((Ct[ma++] = e),
      (Ct[ma++] = t),
      (Ct[ma++] = l),
      (Ct[ma++] = a),
      (Qu |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function ku(e, t, l, a) {
    return (ri(e, t, l, a), ci(e));
  }
  function va(e, t) {
    return (ri(e, null, null, t), ci(e));
  }
  function Qs(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      ((i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - bt(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function ci(e) {
    if (50 < Tn) throw ((Tn = 0), (Pr = null), Error(h(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ya = {};
  function R0(e, t, l, a) {
    ((this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function St(e, t, l, a) {
    return new R0(e, t, l, a);
  }
  function Zu(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Wt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = St(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function ks(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function si(e, t, l, a, n, i) {
    var c = 0;
    if (((a = e), typeof e == "function")) Zu(e) && (c = 1);
    else if (typeof e == "string")
      c = Lm(e, l, U.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case T:
          return ((e = St(31, l, t, n)), (e.elementType = T), (e.lanes = i), e);
        case ce:
          return Bl(l.children, n, i, t);
        case $:
          ((c = 8), (n |= 24));
          break;
        case he:
          return (
            (e = St(12, l, t, n | 2)),
            (e.elementType = he),
            (e.lanes = i),
            e
          );
        case x:
          return ((e = St(13, l, t, n)), (e.elementType = x), (e.lanes = i), e);
        case E:
          return ((e = St(19, l, t, n)), (e.elementType = E), (e.lanes = i), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case oe:
              case ye:
                c = 10;
                break e;
              case ve:
                c = 9;
                break e;
              case Te:
                c = 11;
                break e;
              case R:
                c = 14;
                break e;
              case W:
                ((c = 16), (a = null));
                break e;
            }
          ((c = 29),
            (l = Error(h(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = St(c, l, t, n)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function Bl(e, t, l, a) {
    return ((e = St(7, e, a, t)), (e.lanes = l), e);
  }
  function Vu(e, t, l) {
    return ((e = St(6, e, null, t)), (e.lanes = l), e);
  }
  function Ku(e, t, l) {
    return (
      (t = St(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ga = [],
    pa = 0,
    fi = null,
    oi = 0,
    At = [],
    Dt = 0,
    Yl = null,
    Pt = 1,
    $t = "";
  function Gl(e, t) {
    ((ga[pa++] = oi), (ga[pa++] = fi), (fi = e), (oi = t));
  }
  function Zs(e, t, l) {
    ((At[Dt++] = Pt), (At[Dt++] = $t), (At[Dt++] = Yl), (Yl = e));
    var a = Pt;
    e = $t;
    var n = 32 - bt(a) - 1;
    ((a &= ~(1 << n)), (l += 1));
    var i = 32 - bt(t) + n;
    if (30 < i) {
      var c = n - (n % 5);
      ((i = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (n -= c),
        (Pt = (1 << (32 - bt(t) + n)) | (l << n) | a),
        ($t = i + e));
    } else ((Pt = (1 << i) | (l << n) | a), ($t = e));
  }
  function Ju(e) {
    e.return !== null && (Gl(e, 1), Zs(e, 1, 0));
  }
  function Wu(e) {
    for (; e === fi; )
      ((fi = ga[--pa]), (ga[pa] = null), (oi = ga[--pa]), (ga[pa] = null));
    for (; e === Yl; )
      ((Yl = At[--Dt]),
        (At[Dt] = null),
        ($t = At[--Dt]),
        (At[Dt] = null),
        (Pt = At[--Dt]),
        (At[Dt] = null));
  }
  var dt = null,
    Qe = null,
    Ce = !1,
    Xl = null,
    Yt = !1,
    Pu = Error(h(519));
  function Ql(e) {
    var t = Error(h(418, ""));
    throw (ln(zt(t, e)), Pu);
  }
  function Vs(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[st] = e), (t[mt] = a), l)) {
      case "dialog":
        (we("cancel", t), we("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        we("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++) we(En[l], t);
        break;
      case "source":
        we("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (we("error", t), we("load", t));
        break;
      case "details":
        we("toggle", t);
        break;
      case "input":
        (we("invalid", t),
          rs(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ),
          $n(t));
        break;
      case "select":
        we("invalid", t);
        break;
      case "textarea":
        (we("invalid", t), ss(t, a.value, a.defaultValue, a.children), $n(t));
    }
    ((l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      od(t.textContent, l)
        ? (a.popover != null && (we("beforetoggle", t), we("toggle", t)),
          a.onScroll != null && we("scroll", t),
          a.onScrollEnd != null && we("scrollend", t),
          a.onClick != null && (t.onclick = Zi),
          (t = !0))
        : (t = !1),
      t || Ql(e));
  }
  function Ks(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 13:
          Yt = !1;
          return;
        case 27:
        case 3:
          Yt = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function en(e) {
    if (e !== dt) return !1;
    if (!Ce) return (Ks(e), (Ce = !0), !1);
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || dc(e.type, e.memoizedProps))),
        (l = !l)),
      l && Qe && Ql(e),
      Ks(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                Qe = Bt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        Qe = null;
      }
    } else
      t === 27
        ? ((t = Qe), Tl(e.type) ? ((e = yc), (yc = null), (Qe = e)) : (Qe = t))
        : (Qe = dt ? Bt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function tn() {
    ((Qe = dt = null), (Ce = !1));
  }
  function Js() {
    var e = Xl;
    return (
      e !== null &&
        (pt === null ? (pt = e) : pt.push.apply(pt, e), (Xl = null)),
      e
    );
  }
  function ln(e) {
    Xl === null ? (Xl = [e]) : Xl.push(e);
  }
  var $u = d(null),
    kl = null,
    Ft = null;
  function fl(e, t, l) {
    (z($u, t._currentValue), (t._currentValue = l));
  }
  function It(e) {
    ((e._currentValue = $u.current), j($u));
  }
  function Fu(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function Iu(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = n;
          for (var y = 0; y < t.length; y++)
            if (o.context === t[y]) {
              ((i.lanes |= l),
                (o = i.alternate),
                o !== null && (o.lanes |= l),
                Fu(i.return, l, e),
                a || (c = null));
              break e;
            }
          i = o.next;
        }
      } else if (n.tag === 18) {
        if (((c = n.return), c === null)) throw Error(h(341));
        ((c.lanes |= l),
          (i = c.alternate),
          i !== null && (i.lanes |= l),
          Fu(c, l, e),
          (c = null));
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (((n = c.sibling), n !== null)) {
            ((n.return = c.return), (c = n));
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function an(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(h(387));
        if (((c = c.memoizedProps), c !== null)) {
          var o = n.type;
          xt(n.pendingProps.value, c.value) ||
            (e !== null ? e.push(o) : (e = [o]));
        }
      } else if (n === F.current) {
        if (((c = n.alternate), c === null)) throw Error(h(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Dn) : (e = [Dn]));
      }
      n = n.return;
    }
    (e !== null && Iu(t, e, l, a), (t.flags |= 262144));
  }
  function di(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zl(e) {
    ((kl = e),
      (Ft = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ft(e) {
    return Ws(kl, e);
  }
  function hi(e, t) {
    return (kl === null && Zl(e), Ws(e, t));
  }
  function Ws(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Ft === null)) {
      if (e === null) throw Error(h(308));
      ((Ft = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Ft = Ft.next = t;
    return l;
  }
  var H0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                }));
            };
          },
    L0 = f.unstable_scheduleCallback,
    U0 = f.unstable_NormalPriority,
    Ie = {
      $$typeof: ye,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function er() {
    return { controller: new H0(), data: new Map(), refCount: 0 };
  }
  function nn(e) {
    (e.refCount--,
      e.refCount === 0 &&
        L0(U0, function () {
          e.controller.abort();
        }));
  }
  var un = null,
    tr = 0,
    ba = 0,
    xa = null;
  function q0(e, t) {
    if (un === null) {
      var l = (un = []);
      ((tr = 0),
        (ba = ac()),
        (xa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        }));
    }
    return (tr++, t.then(Ps, Ps), t);
  }
  function Ps() {
    if (--tr === 0 && un !== null) {
      xa !== null && (xa.status = "fulfilled");
      var e = un;
      ((un = null), (ba = 0), (xa = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function B0(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        },
      ),
      a
    );
  }
  var $s = S.S;
  S.S = function (e, t) {
    (typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      q0(e, t),
      $s !== null && $s(e, t));
  };
  var Vl = d(null);
  function lr() {
    var e = Vl.current;
    return e !== null ? e : qe.pooledCache;
  }
  function mi(e, t) {
    t === null ? z(Vl, Vl.current) : z(Vl, t.pool);
  }
  function Fs() {
    var e = lr();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var rn = Error(h(460)),
    Is = Error(h(474)),
    vi = Error(h(542)),
    ar = { then: function () {} };
  function ef(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function yi() {}
  function tf(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(yi, yi), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), af(e), e);
      default:
        if (typeof t.status == "string") t.then(yi, yi);
        else {
          if (((e = qe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(h(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), af(e), e);
        }
        throw ((cn = t), rn);
    }
  }
  var cn = null;
  function lf() {
    if (cn === null) throw Error(h(459));
    var e = cn;
    return ((cn = null), e);
  }
  function af(e) {
    if (e === rn || e === vi) throw Error(h(483));
  }
  var ol = !1;
  function nr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function ir(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function dl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Ae & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = ci(e)),
        Qs(e, null, l),
        t
      );
    }
    return (ri(e, a, t, l), ci(e));
  }
  function sn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Pc(e, l));
    }
  }
  function ur(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (i === null ? (n = i = c) : (i = i.next = c), (l = l.next));
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      ((l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l));
      return;
    }
    ((e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t));
  }
  var rr = !1;
  function fn() {
    if (rr) {
      var e = xa;
      if (e !== null) throw e;
    }
  }
  function on(e, t, l, a) {
    rr = !1;
    var n = e.updateQueue;
    ol = !1;
    var i = n.firstBaseUpdate,
      c = n.lastBaseUpdate,
      o = n.shared.pending;
    if (o !== null) {
      n.shared.pending = null;
      var y = o,
        M = y.next;
      ((y.next = null), c === null ? (i = M) : (c.next = M), (c = y));
      var G = e.alternate;
      G !== null &&
        ((G = G.updateQueue),
        (o = G.lastBaseUpdate),
        o !== c &&
          (o === null ? (G.firstBaseUpdate = M) : (o.next = M),
          (G.lastBaseUpdate = y)));
    }
    if (i !== null) {
      var Z = n.baseState;
      ((c = 0), (G = M = y = null), (o = i));
      do {
        var A = o.lane & -536870913,
          H = A !== o.lane;
        if (H ? (_e & A) === A : (a & A) === A) {
          (A !== 0 && A === ba && (rr = !0),
            G !== null &&
              (G = G.next =
                {
                  lane: 0,
                  tag: o.tag,
                  payload: o.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var fe = e,
              ue = o;
            A = t;
            var Le = l;
            switch (ue.tag) {
              case 1:
                if (((fe = ue.payload), typeof fe == "function")) {
                  Z = fe.call(Le, Z, A);
                  break e;
                }
                Z = fe;
                break e;
              case 3:
                fe.flags = (fe.flags & -65537) | 128;
              case 0:
                if (
                  ((fe = ue.payload),
                  (A = typeof fe == "function" ? fe.call(Le, Z, A) : fe),
                  A == null)
                )
                  break e;
                Z = J({}, Z, A);
                break e;
              case 2:
                ol = !0;
            }
          }
          ((A = o.callback),
            A !== null &&
              ((e.flags |= 64),
              H && (e.flags |= 8192),
              (H = n.callbacks),
              H === null ? (n.callbacks = [A]) : H.push(A)));
        } else
          ((H = {
            lane: A,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          }),
            G === null ? ((M = G = H), (y = Z)) : (G = G.next = H),
            (c |= A));
        if (((o = o.next), o === null)) {
          if (((o = n.shared.pending), o === null)) break;
          ((H = o),
            (o = H.next),
            (H.next = null),
            (n.lastBaseUpdate = H),
            (n.shared.pending = null));
        }
      } while (!0);
      (G === null && (y = Z),
        (n.baseState = y),
        (n.firstBaseUpdate = M),
        (n.lastBaseUpdate = G),
        i === null && (n.shared.lanes = 0),
        (Sl |= c),
        (e.lanes = c),
        (e.memoizedState = Z));
    }
  }
  function nf(e, t) {
    if (typeof e != "function") throw Error(h(191, e));
    e.call(t);
  }
  function uf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) nf(l[e], t);
  }
  var Sa = d(null),
    gi = d(0);
  function rf(e, t) {
    ((e = ul), z(gi, e), z(Sa, t), (ul = e | t.baseLanes));
  }
  function cr() {
    (z(gi, ul), z(Sa, Sa.current));
  }
  function sr() {
    ((ul = gi.current), j(Sa), j(gi));
  }
  var ml = 0,
    be = null,
    Re = null,
    $e = null,
    pi = !1,
    Oa = !1,
    Kl = !1,
    bi = 0,
    dn = 0,
    wa = null,
    Y0 = 0;
  function Ke() {
    throw Error(h(321));
  }
  function fr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!xt(e[l], t[l])) return !1;
    return !0;
  }
  function or(e, t, l, a, n, i) {
    return (
      (ml = i),
      (be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = e === null || e.memoizedState === null ? kf : Zf),
      (Kl = !1),
      (i = l(a, n)),
      (Kl = !1),
      Oa && (i = sf(t, l, a, n)),
      cf(e),
      i
    );
  }
  function cf(e) {
    S.H = Ti;
    var t = Re !== null && Re.next !== null;
    if (((ml = 0), ($e = Re = be = null), (pi = !1), (dn = 0), (wa = null), t))
      throw Error(h(300));
    e === null ||
      at ||
      ((e = e.dependencies), e !== null && di(e) && (at = !0));
  }
  function sf(e, t, l, a) {
    be = e;
    var n = 0;
    do {
      if ((Oa && (wa = null), (dn = 0), (Oa = !1), 25 <= n))
        throw Error(h(301));
      if (((n += 1), ($e = Re = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((S.H = K0), (i = t(l, a)));
    } while (Oa);
    return i;
  }
  function G0() {
    var e = S.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? hn(t) : t),
      (e = e.useState()[0]),
      (Re !== null ? Re.memoizedState : null) !== e && (be.flags |= 1024),
      t
    );
  }
  function dr() {
    var e = bi !== 0;
    return ((bi = 0), e);
  }
  function hr(e, t, l) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l));
  }
  function mr(e) {
    if (pi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      pi = !1;
    }
    ((ml = 0), ($e = Re = be = null), (Oa = !1), (dn = bi = 0), (wa = null));
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ($e === null ? (be.memoizedState = $e = e) : ($e = $e.next = e), $e);
  }
  function Fe() {
    if (Re === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = $e === null ? be.memoizedState : $e.next;
    if (t !== null) (($e = t), (Re = e));
    else {
      if (e === null)
        throw be.alternate === null ? Error(h(467)) : Error(h(310));
      ((Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        $e === null ? (be.memoizedState = $e = e) : ($e = $e.next = e));
    }
    return $e;
  }
  function vr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hn(e) {
    var t = dn;
    return (
      (dn += 1),
      wa === null && (wa = []),
      (e = tf(wa, e, t)),
      (t = be),
      ($e === null ? t.memoizedState : $e.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? kf : Zf)),
      e
    );
  }
  function xi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return hn(e);
      if (e.$$typeof === ye) return ft(e);
    }
    throw Error(h(438, String(e)));
  }
  function yr(e) {
    var t = null,
      l = be.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = be.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = vr()), (be.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = m;
    return (t.index++, l);
  }
  function el(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Si(e) {
    var t = Fe();
    return gr(t, Re, e);
  }
  function gr(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        ((n.next = i.next), (i.next = c));
      }
      ((t.baseQueue = n = i), (a.pending = null));
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var o = (c = null),
        y = null,
        M = t,
        G = !1;
      do {
        var Z = M.lane & -536870913;
        if (Z !== M.lane ? (_e & Z) === Z : (ml & Z) === Z) {
          var A = M.revertLane;
          if (A === 0)
            (y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: M.action,
                  hasEagerState: M.hasEagerState,
                  eagerState: M.eagerState,
                  next: null,
                }),
              Z === ba && (G = !0));
          else if ((ml & A) === A) {
            ((M = M.next), A === ba && (G = !0));
            continue;
          } else
            ((Z = {
              lane: 0,
              revertLane: M.revertLane,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null,
            }),
              y === null ? ((o = y = Z), (c = i)) : (y = y.next = Z),
              (be.lanes |= A),
              (Sl |= A));
          ((Z = M.action),
            Kl && l(i, Z),
            (i = M.hasEagerState ? M.eagerState : l(i, Z)));
        } else
          ((A = {
            lane: Z,
            revertLane: M.revertLane,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          }),
            y === null ? ((o = y = A), (c = i)) : (y = y.next = A),
            (be.lanes |= Z),
            (Sl |= Z));
        M = M.next;
      } while (M !== null && M !== t);
      if (
        (y === null ? (c = i) : (y.next = o),
        !xt(i, e.memoizedState) && ((at = !0), G && ((l = xa), l !== null)))
      )
        throw l;
      ((e.memoizedState = i),
        (e.baseState = c),
        (e.baseQueue = y),
        (a.lastRenderedState = i));
    }
    return (n === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function pr(e) {
    var t = Fe(),
      l = t.queue;
    if (l === null) throw Error(h(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var c = (n = n.next);
      do ((i = e(i, c.action)), (c = c.next));
      while (c !== n);
      (xt(i, t.memoizedState) || (at = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i));
    }
    return [i, a];
  }
  function ff(e, t, l) {
    var a = be,
      n = Fe(),
      i = Ce;
    if (i) {
      if (l === void 0) throw Error(h(407));
      l = l();
    } else l = t();
    var c = !xt((Re || n).memoizedState, l);
    (c && ((n.memoizedState = l), (at = !0)), (n = n.queue));
    var o = hf.bind(null, a, n, e);
    if (
      (mn(2048, 8, o, [e]),
      n.getSnapshot !== t || c || ($e !== null && $e.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ja(9, Oi(), df.bind(null, a, n, l, t), null),
        qe === null)
      )
        throw Error(h(349));
      i || (ml & 124) !== 0 || of(a, t, l);
    }
    return l;
  }
  function of(e, t, l) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = be.updateQueue),
      t === null
        ? ((t = vr()), (be.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e)));
  }
  function df(e, t, l, a) {
    ((t.value = l), (t.getSnapshot = a), mf(t) && vf(e));
  }
  function hf(e, t, l) {
    return l(function () {
      mf(t) && vf(e);
    });
  }
  function mf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !xt(e, l);
    } catch {
      return !0;
    }
  }
  function vf(e) {
    var t = va(e, 2);
    t !== null && _t(t, e, 2);
  }
  function br(e) {
    var t = yt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Kl)) {
        ht(!0);
        try {
          l();
        } finally {
          ht(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: e,
      }),
      t
    );
  }
  function yf(e, t, l, a) {
    return ((e.baseState = l), gr(e, Re, typeof a == "function" ? a : el));
  }
  function X0(e, t, l, a, n) {
    if (ji(e)) throw Error(h(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          i.listeners.push(c);
        },
      };
      (S.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), gf(t, i))
          : ((i.next = l.next), (t.pending = l.next = i)));
    }
  }
  function gf(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = S.T,
        c = {};
      S.T = c;
      try {
        var o = l(n, a),
          y = S.S;
        (y !== null && y(c, o), pf(e, t, o));
      } catch (M) {
        xr(e, t, M);
      } finally {
        S.T = i;
      }
    } else
      try {
        ((i = l(n, a)), pf(e, t, i));
      } catch (M) {
        xr(e, t, M);
      }
  }
  function pf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            bf(e, t, a);
          },
          function (a) {
            return xr(e, t, a);
          },
        )
      : bf(e, t, l);
  }
  function bf(e, t, l) {
    ((t.status = "fulfilled"),
      (t.value = l),
      xf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), gf(e, l))));
  }
  function xr(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = l), xf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function xf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sf(e, t) {
    return t;
  }
  function Of(e, t) {
    if (Ce) {
      var l = qe.formState;
      if (l !== null) {
        e: {
          var a = be;
          if (Ce) {
            if (Qe) {
              t: {
                for (var n = Qe, i = Yt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Bt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                ((i = n.data), (n = i === "F!" || i === "F" ? n : null));
              }
              if (n) {
                ((Qe = Bt(n.nextSibling)), (a = n.data === "F!"));
                break e;
              }
            }
            Ql(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = yt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Gf.bind(null, be, a)),
      (a.dispatch = l),
      (a = br(!1)),
      (i = Tr.bind(null, be, !1, a.queue)),
      (a = yt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = X0.bind(null, be, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function wf(e) {
    var t = Fe();
    return jf(t, Re, e);
  }
  function jf(e, t, l) {
    if (
      ((t = gr(e, t, Sf)[0]),
      (e = Si(el)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = hn(t);
      } catch (c) {
        throw c === rn ? vi : c;
      }
    else a = t;
    t = Fe();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((be.flags |= 2048), ja(9, Oi(), Q0.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function Q0(e, t) {
    e.action = t;
  }
  function Tf(e) {
    var t = Fe(),
      l = Re;
    if (l !== null) return jf(t, l, e);
    (Fe(), (t = t.memoizedState), (l = Fe()));
    var a = l.queue.dispatch;
    return ((l.memoizedState = e), [t, a, !1]);
  }
  function ja(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = be.updateQueue),
      t === null && ((t = vr()), (be.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Oi() {
    return { destroy: void 0, resource: void 0 };
  }
  function _f() {
    return Fe().memoizedState;
  }
  function wi(e, t, l, a) {
    var n = yt();
    ((a = a === void 0 ? null : a),
      (be.flags |= e),
      (n.memoizedState = ja(1 | t, Oi(), l, a)));
  }
  function mn(e, t, l, a) {
    var n = Fe();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Re !== null && a !== null && fr(a, Re.memoizedState.deps)
      ? (n.memoizedState = ja(t, i, l, a))
      : ((be.flags |= e), (n.memoizedState = ja(1 | t, i, l, a)));
  }
  function Ef(e, t) {
    wi(8390656, 8, e, t);
  }
  function Nf(e, t) {
    mn(2048, 8, e, t);
  }
  function Mf(e, t) {
    return mn(4, 2, e, t);
  }
  function zf(e, t) {
    return mn(4, 4, e, t);
  }
  function Cf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Af(e, t, l) {
    ((l = l != null ? l.concat([e]) : null), mn(4, 4, Cf.bind(null, t, e), l));
  }
  function Sr() {}
  function Df(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && fr(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Rf(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && fr(t, a[1])) return a[0];
    if (((a = e()), Kl)) {
      ht(!0);
      try {
        e();
      } finally {
        ht(!1);
      }
    }
    return ((l.memoizedState = [a, t]), a);
  }
  function Or(e, t, l) {
    return l === void 0 || (ml & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = qo()), (be.lanes |= e), (Sl |= e), l);
  }
  function Hf(e, t, l, a) {
    return xt(l, t)
      ? l
      : Sa.current !== null
        ? ((e = Or(e, l, a)), xt(e, t) || (at = !0), e)
        : (ml & 42) === 0
          ? ((at = !0), (e.memoizedState = l))
          : ((e = qo()), (be.lanes |= e), (Sl |= e), t);
  }
  function Lf(e, t, l, a, n) {
    var i = r.p;
    r.p = i !== 0 && 8 > i ? i : 8;
    var c = S.T,
      o = {};
    ((S.T = o), Tr(e, !1, t, l));
    try {
      var y = n(),
        M = S.S;
      if (
        (M !== null && M(o, y),
        y !== null && typeof y == "object" && typeof y.then == "function")
      ) {
        var G = B0(y, a);
        vn(e, t, G, Tt(e));
      } else vn(e, t, a, Tt(e));
    } catch (Z) {
      vn(e, t, { then: function () {}, status: "rejected", reason: Z }, Tt());
    } finally {
      ((r.p = i), (S.T = c));
    }
  }
  function k0() {}
  function wr(e, t, l, a) {
    if (e.tag !== 5) throw Error(h(476));
    var n = Uf(e).queue;
    Lf(
      e,
      n,
      t,
      I,
      l === null
        ? k0
        : function () {
            return (qf(e), l(a));
          },
    );
  }
  function Uf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: I,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: el,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function qf(e) {
    var t = Uf(e).next.queue;
    vn(e, t, {}, Tt());
  }
  function jr() {
    return ft(Dn);
  }
  function Bf() {
    return Fe().memoizedState;
  }
  function Yf() {
    return Fe().memoizedState;
  }
  function Z0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = dl(l);
          var a = hl(t, e, l);
          (a !== null && (_t(a, t, l), sn(a, t, l)),
            (t = { cache: er() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function V0(e, t, l) {
    var a = Tt();
    ((l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ji(e)
        ? Xf(t, l)
        : ((l = ku(e, t, l, a)), l !== null && (_t(l, e, a), Qf(l, t, a))));
  }
  function Gf(e, t, l) {
    var a = Tt();
    vn(e, t, l, a);
  }
  function vn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ji(e)) Xf(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var c = t.lastRenderedState,
            o = i(c, l);
          if (((n.hasEagerState = !0), (n.eagerState = o), xt(o, c)))
            return (ri(e, t, n, 0), qe === null && ui(), !1);
        } catch {
        } finally {
        }
      if (((l = ku(e, t, n, a)), l !== null))
        return (_t(l, e, a), Qf(l, t, a), !0);
    }
    return !1;
  }
  function Tr(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ac(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ji(e))
    ) {
      if (t) throw Error(h(479));
    } else ((t = ku(e, l, a, 2)), t !== null && _t(t, e, 2));
  }
  function ji(e) {
    var t = e.alternate;
    return e === be || (t !== null && t === be);
  }
  function Xf(e, t) {
    Oa = pi = !0;
    var l = e.pending;
    (l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t));
  }
  function Qf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (l |= a), (t.lanes = l), Pc(e, l));
    }
  }
  var Ti = {
      readContext: ft,
      use: xi,
      useCallback: Ke,
      useContext: Ke,
      useEffect: Ke,
      useImperativeHandle: Ke,
      useLayoutEffect: Ke,
      useInsertionEffect: Ke,
      useMemo: Ke,
      useReducer: Ke,
      useRef: Ke,
      useState: Ke,
      useDebugValue: Ke,
      useDeferredValue: Ke,
      useTransition: Ke,
      useSyncExternalStore: Ke,
      useId: Ke,
      useHostTransitionStatus: Ke,
      useFormState: Ke,
      useActionState: Ke,
      useOptimistic: Ke,
      useMemoCache: Ke,
      useCacheRefresh: Ke,
    },
    kf = {
      readContext: ft,
      use: xi,
      useCallback: function (e, t) {
        return ((yt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ft,
      useEffect: Ef,
      useImperativeHandle: function (e, t, l) {
        ((l = l != null ? l.concat([e]) : null),
          wi(4194308, 4, Cf.bind(null, t, e), l));
      },
      useLayoutEffect: function (e, t) {
        return wi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        wi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = yt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Kl) {
          ht(!0);
          try {
            e();
          } finally {
            ht(!1);
          }
        }
        return ((l.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, l) {
        var a = yt();
        if (l !== void 0) {
          var n = l(t);
          if (Kl) {
            ht(!0);
            try {
              l(t);
            } finally {
              ht(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = V0.bind(null, be, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = br(e);
        var t = e.queue,
          l = Gf.bind(null, be, t);
        return ((t.dispatch = l), [e.memoizedState, l]);
      },
      useDebugValue: Sr,
      useDeferredValue: function (e, t) {
        var l = yt();
        return Or(l, e, t);
      },
      useTransition: function () {
        var e = br(!1);
        return (
          (e = Lf.bind(null, be, e.queue, !0, !1)),
          (yt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = be,
          n = yt();
        if (Ce) {
          if (l === void 0) throw Error(h(407));
          l = l();
        } else {
          if (((l = t()), qe === null)) throw Error(h(349));
          (_e & 124) !== 0 || of(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          Ef(hf.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          ja(9, Oi(), df.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = yt(),
          t = qe.identifierPrefix;
        if (Ce) {
          var l = $t,
            a = Pt;
          ((l = (a & ~(1 << (32 - bt(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = bi++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»"));
        } else ((l = Y0++), (t = "«" + t + "r" + l.toString(32) + "»"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: jr,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function (e) {
        var t = yt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Tr.bind(null, be, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: yr,
      useCacheRefresh: function () {
        return (yt().memoizedState = Z0.bind(null, be));
      },
    },
    Zf = {
      readContext: ft,
      use: xi,
      useCallback: Df,
      useContext: ft,
      useEffect: Nf,
      useImperativeHandle: Af,
      useInsertionEffect: Mf,
      useLayoutEffect: zf,
      useMemo: Rf,
      useReducer: Si,
      useRef: _f,
      useState: function () {
        return Si(el);
      },
      useDebugValue: Sr,
      useDeferredValue: function (e, t) {
        var l = Fe();
        return Hf(l, Re.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Si(el)[0],
          t = Fe().memoizedState;
        return [typeof e == "boolean" ? e : hn(e), t];
      },
      useSyncExternalStore: ff,
      useId: Bf,
      useHostTransitionStatus: jr,
      useFormState: wf,
      useActionState: wf,
      useOptimistic: function (e, t) {
        var l = Fe();
        return yf(l, Re, e, t);
      },
      useMemoCache: yr,
      useCacheRefresh: Yf,
    },
    K0 = {
      readContext: ft,
      use: xi,
      useCallback: Df,
      useContext: ft,
      useEffect: Nf,
      useImperativeHandle: Af,
      useInsertionEffect: Mf,
      useLayoutEffect: zf,
      useMemo: Rf,
      useReducer: pr,
      useRef: _f,
      useState: function () {
        return pr(el);
      },
      useDebugValue: Sr,
      useDeferredValue: function (e, t) {
        var l = Fe();
        return Re === null ? Or(l, e, t) : Hf(l, Re.memoizedState, e, t);
      },
      useTransition: function () {
        var e = pr(el)[0],
          t = Fe().memoizedState;
        return [typeof e == "boolean" ? e : hn(e), t];
      },
      useSyncExternalStore: ff,
      useId: Bf,
      useHostTransitionStatus: jr,
      useFormState: Tf,
      useActionState: Tf,
      useOptimistic: function (e, t) {
        var l = Fe();
        return Re !== null
          ? yf(l, Re, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: yr,
      useCacheRefresh: Yf,
    },
    Ta = null,
    yn = 0;
  function _i(e) {
    var t = yn;
    return ((yn += 1), Ta === null && (Ta = []), tf(Ta, e, t));
  }
  function gn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Ei(e, t) {
    throw t.$$typeof === ae
      ? Error(h(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          h(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Vf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Kf(e) {
    function t(_, O) {
      if (e) {
        var N = _.deletions;
        N === null ? ((_.deletions = [O]), (_.flags |= 16)) : N.push(O);
      }
    }
    function l(_, O) {
      if (!e) return null;
      for (; O !== null; ) (t(_, O), (O = O.sibling));
      return null;
    }
    function a(_) {
      for (var O = new Map(); _ !== null; )
        (_.key !== null ? O.set(_.key, _) : O.set(_.index, _), (_ = _.sibling));
      return O;
    }
    function n(_, O) {
      return ((_ = Wt(_, O)), (_.index = 0), (_.sibling = null), _);
    }
    function i(_, O, N) {
      return (
        (_.index = N),
        e
          ? ((N = _.alternate),
            N !== null
              ? ((N = N.index), N < O ? ((_.flags |= 67108866), O) : N)
              : ((_.flags |= 67108866), O))
          : ((_.flags |= 1048576), O)
      );
    }
    function c(_) {
      return (e && _.alternate === null && (_.flags |= 67108866), _);
    }
    function o(_, O, N, Q) {
      return O === null || O.tag !== 6
        ? ((O = Vu(N, _.mode, Q)), (O.return = _), O)
        : ((O = n(O, N)), (O.return = _), O);
    }
    function y(_, O, N, Q) {
      var le = N.type;
      return le === ce
        ? G(_, O, N.props.children, Q, N.key)
        : O !== null &&
            (O.elementType === le ||
              (typeof le == "object" &&
                le !== null &&
                le.$$typeof === W &&
                Vf(le) === O.type))
          ? ((O = n(O, N.props)), gn(O, N), (O.return = _), O)
          : ((O = si(N.type, N.key, N.props, null, _.mode, Q)),
            gn(O, N),
            (O.return = _),
            O);
    }
    function M(_, O, N, Q) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== N.containerInfo ||
        O.stateNode.implementation !== N.implementation
        ? ((O = Ku(N, _.mode, Q)), (O.return = _), O)
        : ((O = n(O, N.children || [])), (O.return = _), O);
    }
    function G(_, O, N, Q, le) {
      return O === null || O.tag !== 7
        ? ((O = Bl(N, _.mode, Q, le)), (O.return = _), O)
        : ((O = n(O, N)), (O.return = _), O);
    }
    function Z(_, O, N) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ((O = Vu("" + O, _.mode, N)), (O.return = _), O);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case te:
            return (
              (N = si(O.type, O.key, O.props, null, _.mode, N)),
              gn(N, O),
              (N.return = _),
              N
            );
          case me:
            return ((O = Ku(O, _.mode, N)), (O.return = _), O);
          case W:
            var Q = O._init;
            return ((O = Q(O._payload)), Z(_, O, N));
        }
        if (P(O) || X(O))
          return ((O = Bl(O, _.mode, N, null)), (O.return = _), O);
        if (typeof O.then == "function") return Z(_, _i(O), N);
        if (O.$$typeof === ye) return Z(_, hi(_, O), N);
        Ei(_, O);
      }
      return null;
    }
    function A(_, O, N, Q) {
      var le = O !== null ? O.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return le !== null ? null : o(_, O, "" + N, Q);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case te:
            return N.key === le ? y(_, O, N, Q) : null;
          case me:
            return N.key === le ? M(_, O, N, Q) : null;
          case W:
            return ((le = N._init), (N = le(N._payload)), A(_, O, N, Q));
        }
        if (P(N) || X(N)) return le !== null ? null : G(_, O, N, Q, null);
        if (typeof N.then == "function") return A(_, O, _i(N), Q);
        if (N.$$typeof === ye) return A(_, O, hi(_, N), Q);
        Ei(_, N);
      }
      return null;
    }
    function H(_, O, N, Q, le) {
      if (
        (typeof Q == "string" && Q !== "") ||
        typeof Q == "number" ||
        typeof Q == "bigint"
      )
        return ((_ = _.get(N) || null), o(O, _, "" + Q, le));
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case te:
            return (
              (_ = _.get(Q.key === null ? N : Q.key) || null),
              y(O, _, Q, le)
            );
          case me:
            return (
              (_ = _.get(Q.key === null ? N : Q.key) || null),
              M(O, _, Q, le)
            );
          case W:
            var Se = Q._init;
            return ((Q = Se(Q._payload)), H(_, O, N, Q, le));
        }
        if (P(Q) || X(Q)) return ((_ = _.get(N) || null), G(O, _, Q, le, null));
        if (typeof Q.then == "function") return H(_, O, N, _i(Q), le);
        if (Q.$$typeof === ye) return H(_, O, N, hi(O, Q), le);
        Ei(O, Q);
      }
      return null;
    }
    function fe(_, O, N, Q) {
      for (
        var le = null, Se = null, ie = O, re = (O = 0), it = null;
        ie !== null && re < N.length;
        re++
      ) {
        ie.index > re ? ((it = ie), (ie = null)) : (it = ie.sibling);
        var ze = A(_, ie, N[re], Q);
        if (ze === null) {
          ie === null && (ie = it);
          break;
        }
        (e && ie && ze.alternate === null && t(_, ie),
          (O = i(ze, O, re)),
          Se === null ? (le = ze) : (Se.sibling = ze),
          (Se = ze),
          (ie = it));
      }
      if (re === N.length) return (l(_, ie), Ce && Gl(_, re), le);
      if (ie === null) {
        for (; re < N.length; re++)
          ((ie = Z(_, N[re], Q)),
            ie !== null &&
              ((O = i(ie, O, re)),
              Se === null ? (le = ie) : (Se.sibling = ie),
              (Se = ie)));
        return (Ce && Gl(_, re), le);
      }
      for (ie = a(ie); re < N.length; re++)
        ((it = H(ie, _, re, N[re], Q)),
          it !== null &&
            (e &&
              it.alternate !== null &&
              ie.delete(it.key === null ? re : it.key),
            (O = i(it, O, re)),
            Se === null ? (le = it) : (Se.sibling = it),
            (Se = it)));
      return (
        e &&
          ie.forEach(function (zl) {
            return t(_, zl);
          }),
        Ce && Gl(_, re),
        le
      );
    }
    function ue(_, O, N, Q) {
      if (N == null) throw Error(h(151));
      for (
        var le = null,
          Se = null,
          ie = O,
          re = (O = 0),
          it = null,
          ze = N.next();
        ie !== null && !ze.done;
        re++, ze = N.next()
      ) {
        ie.index > re ? ((it = ie), (ie = null)) : (it = ie.sibling);
        var zl = A(_, ie, ze.value, Q);
        if (zl === null) {
          ie === null && (ie = it);
          break;
        }
        (e && ie && zl.alternate === null && t(_, ie),
          (O = i(zl, O, re)),
          Se === null ? (le = zl) : (Se.sibling = zl),
          (Se = zl),
          (ie = it));
      }
      if (ze.done) return (l(_, ie), Ce && Gl(_, re), le);
      if (ie === null) {
        for (; !ze.done; re++, ze = N.next())
          ((ze = Z(_, ze.value, Q)),
            ze !== null &&
              ((O = i(ze, O, re)),
              Se === null ? (le = ze) : (Se.sibling = ze),
              (Se = ze)));
        return (Ce && Gl(_, re), le);
      }
      for (ie = a(ie); !ze.done; re++, ze = N.next())
        ((ze = H(ie, _, re, ze.value, Q)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              ie.delete(ze.key === null ? re : ze.key),
            (O = i(ze, O, re)),
            Se === null ? (le = ze) : (Se.sibling = ze),
            (Se = ze)));
      return (
        e &&
          ie.forEach(function (Jm) {
            return t(_, Jm);
          }),
        Ce && Gl(_, re),
        le
      );
    }
    function Le(_, O, N, Q) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === ce &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case te:
            e: {
              for (var le = N.key; O !== null; ) {
                if (O.key === le) {
                  if (((le = N.type), le === ce)) {
                    if (O.tag === 7) {
                      (l(_, O.sibling),
                        (Q = n(O, N.props.children)),
                        (Q.return = _),
                        (_ = Q));
                      break e;
                    }
                  } else if (
                    O.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === W &&
                      Vf(le) === O.type)
                  ) {
                    (l(_, O.sibling),
                      (Q = n(O, N.props)),
                      gn(Q, N),
                      (Q.return = _),
                      (_ = Q));
                    break e;
                  }
                  l(_, O);
                  break;
                } else t(_, O);
                O = O.sibling;
              }
              N.type === ce
                ? ((Q = Bl(N.props.children, _.mode, Q, N.key)),
                  (Q.return = _),
                  (_ = Q))
                : ((Q = si(N.type, N.key, N.props, null, _.mode, Q)),
                  gn(Q, N),
                  (Q.return = _),
                  (_ = Q));
            }
            return c(_);
          case me:
            e: {
              for (le = N.key; O !== null; ) {
                if (O.key === le)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === N.containerInfo &&
                    O.stateNode.implementation === N.implementation
                  ) {
                    (l(_, O.sibling),
                      (Q = n(O, N.children || [])),
                      (Q.return = _),
                      (_ = Q));
                    break e;
                  } else {
                    l(_, O);
                    break;
                  }
                else t(_, O);
                O = O.sibling;
              }
              ((Q = Ku(N, _.mode, Q)), (Q.return = _), (_ = Q));
            }
            return c(_);
          case W:
            return ((le = N._init), (N = le(N._payload)), Le(_, O, N, Q));
        }
        if (P(N)) return fe(_, O, N, Q);
        if (X(N)) {
          if (((le = X(N)), typeof le != "function")) throw Error(h(150));
          return ((N = le.call(N)), ue(_, O, N, Q));
        }
        if (typeof N.then == "function") return Le(_, O, _i(N), Q);
        if (N.$$typeof === ye) return Le(_, O, hi(_, N), Q);
        Ei(_, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          O !== null && O.tag === 6
            ? (l(_, O.sibling), (Q = n(O, N)), (Q.return = _), (_ = Q))
            : (l(_, O), (Q = Vu(N, _.mode, Q)), (Q.return = _), (_ = Q)),
          c(_))
        : l(_, O);
    }
    return function (_, O, N, Q) {
      try {
        yn = 0;
        var le = Le(_, O, N, Q);
        return ((Ta = null), le);
      } catch (ie) {
        if (ie === rn || ie === vi) throw ie;
        var Se = St(29, ie, null, _.mode);
        return ((Se.lanes = Q), (Se.return = _), Se);
      } finally {
      }
    };
  }
  var _a = Kf(!0),
    Jf = Kf(!1),
    Rt = d(null),
    Gt = null;
  function vl(e) {
    var t = e.alternate;
    (z(et, et.current & 1),
      z(Rt, e),
      Gt === null &&
        (t === null || Sa.current !== null || t.memoizedState !== null) &&
        (Gt = e));
  }
  function Wf(e) {
    if (e.tag === 22) {
      if ((z(et, et.current), z(Rt, e), Gt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Gt = e);
      }
    } else yl();
  }
  function yl() {
    (z(et, et.current), z(Rt, Rt.current));
  }
  function tl(e) {
    (j(Rt), Gt === e && (Gt = null), j(et));
  }
  var et = d(0);
  function Ni(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || vc(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function _r(e, t, l, a) {
    ((t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : J({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l));
  }
  var Er = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        n = dl(a);
      ((n.payload = t),
        l != null && (n.callback = l),
        (t = hl(e, n, a)),
        t !== null && (_t(t, e, a), sn(t, e, a)));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = Tt(),
        n = dl(a);
      ((n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = hl(e, n, a)),
        t !== null && (_t(t, e, a), sn(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = Tt(),
        a = dl(l);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = hl(e, a, l)),
        t !== null && (_t(t, e, l), sn(t, e, l)));
    },
  };
  function Pf(e, t, l, a, n, i, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Fa(l, a) || !Fa(n, i)
          : !0
    );
  }
  function $f(e, t, l, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Er.enqueueReplaceState(t, t.state, null));
  }
  function Jl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = J({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Mi =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ff(e) {
    Mi(e);
  }
  function If(e) {
    console.error(e);
  }
  function eo(e) {
    Mi(e);
  }
  function zi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function to(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Nr(e, t, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        zi(e, t);
      }),
      l
    );
  }
  function lo(e) {
    return ((e = dl(e)), (e.tag = 3), e);
  }
  function ao(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      ((e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          to(t, l, a);
        }));
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        (to(t, l, a),
          typeof n != "function" &&
            (Ol === null ? (Ol = new Set([this])) : Ol.add(this)));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : "",
        });
      });
  }
  function J0(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && an(t, l, n, !0),
        (l = Rt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Gt === null ? Fr() : l.alternate === null && ke === 0 && (ke = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === ar
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  ec(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === ar
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  ec(e, a, n)),
              !1
            );
        }
        throw Error(h(435, l.tag));
      }
      return (ec(e, a, n), Fr(), !1);
    }
    if (Ce)
      return (
        (t = Rt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Pu && ((e = Error(h(422), { cause: a })), ln(zt(e, l))))
          : (a !== Pu && ((t = Error(h(423), { cause: a })), ln(zt(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = zt(a, l)),
            (n = Nr(e.stateNode, a, n)),
            ur(e, n),
            ke !== 4 && (ke = 2)),
        !1
      );
    var i = Error(h(520), { cause: a });
    if (
      ((i = zt(i, l)),
      jn === null ? (jn = [i]) : jn.push(i),
      ke !== 4 && (ke = 2),
      t === null)
    )
      return !0;
    ((a = zt(a, l)), (l = t));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = Nr(l.stateNode, a, e)),
            ur(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (Ol === null || !Ol.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = lo(n)),
              ao(n, e, l, a),
              ur(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var no = Error(h(461)),
    at = !1;
  function ut(e, t, l, a) {
    t.child = e === null ? Jf(t, null, l, a) : _a(t, e.child, l, a);
  }
  function io(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var o in a) o !== "ref" && (c[o] = a[o]);
    } else c = a;
    return (
      Zl(t),
      (a = or(e, t, l, c, i, n)),
      (o = dr()),
      e !== null && !at
        ? (hr(e, t, n), ll(e, t, n))
        : (Ce && o && Ju(t), (t.flags |= 1), ut(e, t, a, n), t.child)
    );
  }
  function uo(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Zu(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), ro(e, t, i, a, n))
        : ((e = si(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !Lr(e, n))) {
      var c = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Fa), l(c, a) && e.ref === t.ref)
      )
        return ll(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Wt(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ro(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Fa(i, a) && e.ref === t.ref)
        if (((at = !1), (t.pendingProps = a = i), Lr(e, n)))
          (e.flags & 131072) !== 0 && (at = !0);
        else return ((t.lanes = e.lanes), ll(e, t, n));
    }
    return Mr(e, t, l, a, n);
  }
  function co(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            ((i = i | n.lanes | n.childLanes), (n = n.sibling));
          t.childLanes = i & ~a;
        } else ((t.childLanes = 0), (t.child = null));
        return so(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && mi(t, i !== null ? i.cachePool : null),
          i !== null ? rf(t, i) : cr(),
          Wf(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          so(e, t, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (mi(t, i.cachePool), rf(t, i), yl(), (t.memoizedState = null))
        : (e !== null && mi(t, null), cr(), yl());
    return (ut(e, t, n, l), t.child);
  }
  function so(e, t, l, a) {
    var n = lr();
    return (
      (n = n === null ? null : { parent: Ie._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && mi(t, null),
      cr(),
      Wf(t),
      e !== null && an(e, t, a, !0),
      null
    );
  }
  function Ci(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(h(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Mr(e, t, l, a, n) {
    return (
      Zl(t),
      (l = or(e, t, l, a, void 0, n)),
      (a = dr()),
      e !== null && !at
        ? (hr(e, t, n), ll(e, t, n))
        : (Ce && a && Ju(t), (t.flags |= 1), ut(e, t, l, n), t.child)
    );
  }
  function fo(e, t, l, a, n, i) {
    return (
      Zl(t),
      (t.updateQueue = null),
      (l = sf(t, a, l, n)),
      cf(e),
      (a = dr()),
      e !== null && !at
        ? (hr(e, t, i), ll(e, t, i))
        : (Ce && a && Ju(t), (t.flags |= 1), ut(e, t, l, i), t.child)
    );
  }
  function oo(e, t, l, a, n) {
    if ((Zl(t), t.stateNode === null)) {
      var i = ya,
        c = l.contextType;
      (typeof c == "object" && c !== null && (i = ft(c)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Er),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        nr(t),
        (c = l.contextType),
        (i.context = typeof c == "object" && c !== null ? ft(c) : ya),
        (i.state = t.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (_r(t, l, c, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((c = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          c !== i.state && Er.enqueueReplaceState(i, i.state, null),
          on(t, a, i, n),
          fn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps,
        y = Jl(l, o);
      i.props = y;
      var M = i.context,
        G = l.contextType;
      ((c = ya), typeof G == "object" && G !== null && (c = ft(G)));
      var Z = l.getDerivedStateFromProps;
      ((G =
        typeof Z == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (o = t.pendingProps !== o),
        G ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((o || M !== c) && $f(t, i, a, c)),
        (ol = !1));
      var A = t.memoizedState;
      ((i.state = A),
        on(t, a, i, n),
        fn(),
        (M = t.memoizedState),
        o || A !== M || ol
          ? (typeof Z == "function" && (_r(t, l, Z, a), (M = t.memoizedState)),
            (y = ol || Pf(t, l, y, a, A, M, c))
              ? (G ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = M)),
            (i.props = a),
            (i.state = M),
            (i.context = c),
            (a = y))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = t.stateNode),
        ir(e, t),
        (c = t.memoizedProps),
        (G = Jl(l, c)),
        (i.props = G),
        (Z = t.pendingProps),
        (A = i.context),
        (M = l.contextType),
        (y = ya),
        typeof M == "object" && M !== null && (y = ft(M)),
        (o = l.getDerivedStateFromProps),
        (M =
          typeof o == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((c !== Z || A !== y) && $f(t, i, a, y)),
        (ol = !1),
        (A = t.memoizedState),
        (i.state = A),
        on(t, a, i, n),
        fn());
      var H = t.memoizedState;
      c !== Z ||
      A !== H ||
      ol ||
      (e !== null && e.dependencies !== null && di(e.dependencies))
        ? (typeof o == "function" && (_r(t, l, o, a), (H = t.memoizedState)),
          (G =
            ol ||
            Pf(t, l, G, a, A, H, y) ||
            (e !== null && e.dependencies !== null && di(e.dependencies)))
            ? (M ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, H, y),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, H, y)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && A === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = H)),
          (i.props = a),
          (i.state = H),
          (i.context = y),
          (a = G))
        : (typeof i.componentDidUpdate != "function" ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && A === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Ci(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = _a(t, e.child, null, n)),
              (t.child = _a(t, null, l, n)))
            : ut(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = ll(e, t, n)),
      e
    );
  }
  function ho(e, t, l, a) {
    return (tn(), (t.flags |= 256), ut(e, t, l, a), t.child);
  }
  var zr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Cr(e) {
    return { baseLanes: e, cachePool: Fs() };
  }
  function Ar(e, t, l) {
    return ((e = e !== null ? e.childLanes & ~l : 0), t && (e |= Ht), e);
  }
  function mo(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      c;
    if (
      ((c = i) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (et.current & 2) !== 0),
      c && ((n = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ce) {
        if ((n ? vl(t) : yl(), Ce)) {
          var o = Qe,
            y;
          if ((y = o)) {
            e: {
              for (y = o, o = Yt; y.nodeType !== 8; ) {
                if (!o) {
                  o = null;
                  break e;
                }
                if (((y = Bt(y.nextSibling)), y === null)) {
                  o = null;
                  break e;
                }
              }
              o = y;
            }
            o !== null
              ? ((t.memoizedState = {
                  dehydrated: o,
                  treeContext: Yl !== null ? { id: Pt, overflow: $t } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (y = St(18, null, null, 0)),
                (y.stateNode = o),
                (y.return = t),
                (t.child = y),
                (dt = t),
                (Qe = null),
                (y = !0))
              : (y = !1);
          }
          y || Ql(t);
        }
        if (
          ((o = t.memoizedState),
          o !== null && ((o = o.dehydrated), o !== null))
        )
          return (vc(o) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        tl(t);
      }
      return (
        (o = a.children),
        (a = a.fallback),
        n
          ? (yl(),
            (n = t.mode),
            (o = Ai({ mode: "hidden", children: o }, n)),
            (a = Bl(a, n, l, null)),
            (o.return = t),
            (a.return = t),
            (o.sibling = a),
            (t.child = o),
            (n = t.child),
            (n.memoizedState = Cr(l)),
            (n.childLanes = Ar(e, c, l)),
            (t.memoizedState = zr),
            a)
          : (vl(t), Dr(t, o))
      );
    }
    if (
      ((y = e.memoizedState), y !== null && ((o = y.dehydrated), o !== null))
    ) {
      if (i)
        t.flags & 256
          ? (vl(t), (t.flags &= -257), (t = Rr(e, t, l)))
          : t.memoizedState !== null
            ? (yl(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (yl(),
              (n = a.fallback),
              (o = t.mode),
              (a = Ai({ mode: "visible", children: a.children }, o)),
              (n = Bl(n, o, l, null)),
              (n.flags |= 2),
              (a.return = t),
              (n.return = t),
              (a.sibling = n),
              (t.child = a),
              _a(t, e.child, null, l),
              (a = t.child),
              (a.memoizedState = Cr(l)),
              (a.childLanes = Ar(e, c, l)),
              (t.memoizedState = zr),
              (t = n));
      else if ((vl(t), vc(o))) {
        if (((c = o.nextSibling && o.nextSibling.dataset), c)) var M = c.dgst;
        ((c = M),
          (a = Error(h(419))),
          (a.stack = ""),
          (a.digest = c),
          ln({ value: a, source: null, stack: null }),
          (t = Rr(e, t, l)));
      } else if (
        (at || an(e, t, l, !1), (c = (l & e.childLanes) !== 0), at || c)
      ) {
        if (
          ((c = qe),
          c !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : yu(a)),
            (a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== y.retryLane))
        )
          throw ((y.retryLane = a), va(e, a), _t(c, e, a), no);
        (o.data === "$?" || Fr(), (t = Rr(e, t, l)));
      } else
        o.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = y.treeContext),
            (Qe = Bt(o.nextSibling)),
            (dt = t),
            (Ce = !0),
            (Xl = null),
            (Yt = !1),
            e !== null &&
              ((At[Dt++] = Pt),
              (At[Dt++] = $t),
              (At[Dt++] = Yl),
              (Pt = e.id),
              ($t = e.overflow),
              (Yl = t)),
            (t = Dr(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (yl(),
        (n = a.fallback),
        (o = t.mode),
        (y = e.child),
        (M = y.sibling),
        (a = Wt(y, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = y.subtreeFlags & 65011712),
        M !== null ? (n = Wt(M, n)) : ((n = Bl(n, o, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (o = e.child.memoizedState),
        o === null
          ? (o = Cr(l))
          : ((y = o.cachePool),
            y !== null
              ? ((M = Ie._currentValue),
                (y = y.parent !== M ? { parent: M, pool: M } : y))
              : (y = Fs()),
            (o = { baseLanes: o.baseLanes | l, cachePool: y })),
        (n.memoizedState = o),
        (n.childLanes = Ar(e, c, l)),
        (t.memoizedState = zr),
        a)
      : (vl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Wt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function Dr(e, t) {
    return (
      (t = Ai({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ai(e, t) {
    return (
      (e = St(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function Rr(e, t, l) {
    return (
      _a(t, e.child, null, l),
      (e = Dr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function vo(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), Fu(e.return, t, l));
  }
  function Hr(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function yo(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((ut(e, t, a.children, l), (a = et.current), (a & 2) !== 0))
      ((a = (a & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && vo(e, l, t);
          else if (e.tag === 19) vo(e, l, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      a &= 1;
    }
    switch ((z(et, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          ((e = l.alternate),
            e !== null && Ni(e) === null && (n = l),
            (l = l.sibling));
        ((l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          Hr(t, !1, n, l, i));
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Ni(e) === null)) {
            t.child = n;
            break;
          }
          ((e = n.sibling), (n.sibling = l), (l = n), (n = e));
        }
        Hr(t, !0, l, null, i);
        break;
      case "together":
        Hr(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ll(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Sl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((an(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(h(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Wt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (l = l.sibling = Wt(e, e.pendingProps)),
          (l.return = t));
      l.sibling = null;
    }
    return t.child;
  }
  function Lr(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && di(e)));
  }
  function W0(e, t, l) {
    switch (t.tag) {
      case 3:
        (ne(t, t.stateNode.containerInfo),
          fl(t, Ie, e.memoizedState.cache),
          tn());
        break;
      case 27:
      case 5:
        xe(t);
        break;
      case 4:
        ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        fl(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (vl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
              ? mo(e, t, l)
              : (vl(t), (e = ll(e, t, l)), e !== null ? e.sibling : null);
        vl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (an(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return yo(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          z(et, et.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), co(e, t, l));
      case 24:
        fl(t, Ie, e.memoizedState.cache);
    }
    return ll(e, t, l);
  }
  function go(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) at = !0;
      else {
        if (!Lr(e, l) && (t.flags & 128) === 0) return ((at = !1), W0(e, t, l));
        at = (e.flags & 131072) !== 0;
      }
    else ((at = !1), Ce && (t.flags & 1048576) !== 0 && Zs(t, oi, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Zu(a)
              ? ((e = Jl(a, e)), (t.tag = 1), (t = oo(null, t, a, e, l)))
              : ((t.tag = 0), (t = Mr(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === Te)) {
                ((t.tag = 11), (t = io(null, t, a, e, l)));
                break e;
              } else if (n === R) {
                ((t.tag = 14), (t = uo(null, t, a, e, l)));
                break e;
              }
            }
            throw ((t = L(a) || a), Error(h(306, t, "")));
          }
        }
        return t;
      case 0:
        return Mr(e, t, t.type, t.pendingProps, l);
      case 1:
        return ((a = t.type), (n = Jl(a, t.pendingProps)), oo(e, t, a, n, l));
      case 3:
        e: {
          if ((ne(t, t.stateNode.containerInfo), e === null))
            throw Error(h(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((n = i.element), ir(e, t), on(t, a, null, l));
          var c = t.memoizedState;
          if (
            ((a = c.cache),
            fl(t, Ie, a),
            a !== i.cache && Iu(t, [Ie], l, !0),
            fn(),
            (a = c.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = ho(e, t, a, l);
              break e;
            } else if (a !== n) {
              ((n = zt(Error(h(424)), t)), ln(n), (t = ho(e, t, a, l)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Qe = Bt(e.firstChild),
                  dt = t,
                  Ce = !0,
                  Xl = null,
                  Yt = !0,
                  l = Jf(t, null, a, l),
                  t.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((tn(), a === n)) {
              t = ll(e, t, l);
              break e;
            }
            ut(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Ci(e, t),
          e === null
            ? (l = Sd(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : Ce ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = Vi(Y.current).createElement(l)),
                (a[st] = t),
                (a[mt] = e),
                ct(a, l, e),
                lt(a),
                (t.stateNode = a))
            : (t.memoizedState = Sd(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          xe(t),
          e === null &&
            Ce &&
            ((a = t.stateNode = pd(t.type, t.pendingProps, Y.current)),
            (dt = t),
            (Yt = !0),
            (n = Qe),
            Tl(t.type) ? ((yc = n), (Qe = Bt(a.firstChild))) : (Qe = n)),
          ut(e, t, t.pendingProps.children, l),
          Ci(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ce &&
            ((n = a = Qe) &&
              ((a = wm(a, t.type, t.pendingProps, Yt)),
              a !== null
                ? ((t.stateNode = a),
                  (dt = t),
                  (Qe = Bt(a.firstChild)),
                  (Yt = !1),
                  (n = !0))
                : (n = !1)),
            n || Ql(t)),
          xe(t),
          (n = t.type),
          (i = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (a = i.children),
          dc(n, i) ? (a = null) : c !== null && dc(n, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = or(e, t, G0, null, null, l)), (Dn._currentValue = n)),
          Ci(e, t),
          ut(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ce &&
            ((e = l = Qe) &&
              ((l = jm(l, t.pendingProps, Yt)),
              l !== null
                ? ((t.stateNode = l), (dt = t), (Qe = null), (e = !0))
                : (e = !1)),
            e || Ql(t)),
          null
        );
      case 13:
        return mo(e, t, l);
      case 4:
        return (
          ne(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = _a(t, null, a, l)) : ut(e, t, a, l),
          t.child
        );
      case 11:
        return io(e, t, t.type, t.pendingProps, l);
      case 7:
        return (ut(e, t, t.pendingProps, l), t.child);
      case 8:
        return (ut(e, t, t.pendingProps.children, l), t.child);
      case 12:
        return (ut(e, t, t.pendingProps.children, l), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          fl(t, t.type, a.value),
          ut(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Zl(t),
          (n = ft(n)),
          (a = a(n)),
          (t.flags |= 1),
          ut(e, t, a, l),
          t.child
        );
      case 14:
        return uo(e, t, t.type, t.pendingProps, l);
      case 15:
        return ro(e, t, t.type, t.pendingProps, l);
      case 19:
        return yo(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Ai(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = Wt(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return co(e, t, l);
      case 24:
        return (
          Zl(t),
          (a = ft(Ie)),
          e === null
            ? ((n = lr()),
              n === null &&
                ((n = qe),
                (i = er()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              nr(t),
              fl(t, Ie, n))
            : ((e.lanes & l) !== 0 && (ir(e, t), on(t, null, null, l), fn()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  fl(t, Ie, a))
                : ((a = i.cache),
                  fl(t, Ie, a),
                  a !== n.cache && Iu(t, [Ie], l, !0))),
          ut(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function al(e) {
    e.flags |= 4;
  }
  function po(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !_d(t))) {
      if (
        ((t = Rt.current),
        t !== null &&
          ((_e & 4194048) === _e
            ? Gt !== null
            : ((_e & 62914560) !== _e && (_e & 536870912) === 0) || t !== Gt))
      )
        throw ((cn = ar), Is);
      e.flags |= 8192;
    }
  }
  function Di(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Jc() : 536870912), (e.lanes |= t), (za |= t)));
  }
  function pn(e, t) {
    if (!Ce)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            (t.alternate !== null && (l = t), (t = t.sibling));
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            (l.alternate !== null && (a = l), (l = l.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling));
    else
      for (n = e.child; n !== null; )
        ((l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = l), t);
  }
  function P0(e, t, l) {
    var a = t.pendingProps;
    switch ((Wu(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ye(t), null);
      case 1:
        return (Ye(t), null);
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          It(Ie),
          de(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (en(t)
              ? al(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Js())),
          Ye(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (al(t),
              l !== null ? (Ye(t), po(t, l)) : (Ye(t), (t.flags &= -16777217)))
            : l
              ? l !== e.memoizedState
                ? (al(t), Ye(t), po(t, l))
                : (Ye(t), (t.flags &= -16777217))
              : (e.memoizedProps !== a && al(t), Ye(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        (Ee(t), (l = Y.current));
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (Ye(t), null);
          }
          ((e = U.current),
            en(t) ? Vs(t) : ((e = pd(n, a, l)), (t.stateNode = e), al(t)));
        }
        return (Ye(t), null);
      case 5:
        if ((Ee(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && al(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(h(166));
            return (Ye(t), null);
          }
          if (((e = U.current), en(t))) Vs(t);
          else {
            switch (((n = Vi(Y.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((e = n.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)));
                    break;
                  case "select":
                    ((e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size));
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            ((e[st] = t), (e[mt] = a));
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            t.stateNode = e;
            e: switch ((ct(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && al(t);
          }
        }
        return (Ye(t), (t.flags &= -16777217), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && al(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(h(166));
          if (((e = Y.current), en(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = dt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((e[st] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                od(e.nodeValue, l)
              )),
              e || Ql(t));
          } else
            ((e = Vi(e).createTextNode(a)), (e[st] = t), (t.stateNode = e));
        }
        return (Ye(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = en(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(h(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(h(317));
              n[st] = t;
            } else
              (tn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (n = !1));
          } else
            ((n = Js()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return t.flags & 256 ? (tl(t), t) : (tl(t), null);
        }
        if ((tl(t), (t.flags & 128) !== 0)) return ((t.lanes = l), t);
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          ((a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool));
          var i = null;
          (a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048));
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Di(t, t.updateQueue),
          Ye(t),
          null
        );
      case 4:
        return (de(), e === null && rc(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (It(t.type), Ye(t), null);
      case 19:
        if ((j(et), (n = t.memoizedState), n === null)) return (Ye(t), null);
        if (((a = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) pn(n, !1);
          else {
            if (ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Ni(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      pn(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Di(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;
                  )
                    (ks(l, e), (l = l.sibling));
                  return (z(et, (et.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            n.tail !== null &&
              se() > Li &&
              ((t.flags |= 128), (a = !0), pn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ni(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Di(t, e),
                pn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !Ce)
              )
                return (Ye(t), null);
            } else
              2 * se() - n.renderingStartTime > Li &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), pn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = se()),
            (t.sibling = null),
            (e = et.current),
            z(et, a ? (e & 1) | 2 : e & 1),
            t)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          tl(t),
          sr(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          (l = t.updateQueue),
          l !== null && Di(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && j(Vl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          It(Ie),
          Ye(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $0(e, t) {
    switch ((Wu(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          It(Ie),
          de(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ee(t), null);
      case 13:
        if (
          (tl(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(h(340));
          tn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (j(et), null);
      case 4:
        return (de(), null);
      case 10:
        return (It(t.type), null);
      case 22:
      case 23:
        return (
          tl(t),
          sr(),
          e !== null && j(Vl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (It(Ie), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bo(e, t) {
    switch ((Wu(t), t.tag)) {
      case 3:
        (It(Ie), de());
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        de();
        break;
      case 13:
        tl(t);
        break;
      case 19:
        j(et);
        break;
      case 10:
        It(t.type);
        break;
      case 22:
      case 23:
        (tl(t), sr(), e !== null && j(Vl));
        break;
      case 24:
        It(Ie);
    }
  }
  function bn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              c = l.inst;
            ((a = i()), (c.destroy = a));
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (o) {
      Ue(t, t.return, o);
    }
  }
  function gl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst,
              o = c.destroy;
            if (o !== void 0) {
              ((c.destroy = void 0), (n = t));
              var y = l,
                M = o;
              try {
                M();
              } catch (G) {
                Ue(n, y, G);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (G) {
      Ue(t, t.return, G);
    }
  }
  function xo(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        uf(t, l);
      } catch (a) {
        Ue(e, e.return, a);
      }
    }
  }
  function So(e, t, l) {
    ((l.props = Jl(e.type, e.memoizedProps)), (l.state = e.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ue(e, t, a);
    }
  }
  function xn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Ue(e, t, n);
    }
  }
  function Xt(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ue(e, t, n);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ue(e, t, n);
        }
      else l.current = null;
  }
  function Oo(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ue(e, e.return, n);
    }
  }
  function Ur(e, t, l) {
    try {
      var a = e.stateNode;
      (pm(a, e.type, l, t), (a[mt] = t));
    } catch (n) {
      Ue(e, e.return, n);
    }
  }
  function wo(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Tl(e.type)) ||
      e.tag === 4
    );
  }
  function qr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || wo(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Tl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Br(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = Zi)));
    else if (
      a !== 4 &&
      (a === 27 && Tl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (Br(e, t, l), e = e.sibling; e !== null; )
        (Br(e, t, l), (e = e.sibling));
  }
  function Ri(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && Tl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Ri(e, t, l), e = e.sibling; e !== null; )
        (Ri(e, t, l), (e = e.sibling));
  }
  function jo(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      (ct(t, a, l), (t[st] = e), (t[mt] = l));
    } catch (i) {
      Ue(e, e.return, i);
    }
  }
  var nl = !1,
    Je = !1,
    Yr = !1,
    To = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;
  function F0(e, t) {
    if (((e = e.containerInfo), (fc = Fi), (e = Rs(e)), qu(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (l.nodeType, i.nodeType);
            } catch {
              l = null;
              break e;
            }
            var c = 0,
              o = -1,
              y = -1,
              M = 0,
              G = 0,
              Z = e,
              A = null;
            t: for (;;) {
              for (
                var H;
                Z !== l || (n !== 0 && Z.nodeType !== 3) || (o = c + n),
                  Z !== i || (a !== 0 && Z.nodeType !== 3) || (y = c + a),
                  Z.nodeType === 3 && (c += Z.nodeValue.length),
                  (H = Z.firstChild) !== null;
              )
                ((A = Z), (Z = H));
              for (;;) {
                if (Z === e) break t;
                if (
                  (A === l && ++M === n && (o = c),
                  A === i && ++G === a && (y = c),
                  (H = Z.nextSibling) !== null)
                )
                  break;
                ((Z = A), (A = Z.parentNode));
              }
              Z = H;
            }
            l = o === -1 || y === -1 ? null : { start: o, end: y };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      oc = { focusedElem: e, selectionRange: l }, Fi = !1, nt = t;
      nt !== null;
    )
      if (
        ((t = nt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        ((e.return = t), (nt = e));
      else
        for (; nt !== null; ) {
          switch (((t = nt), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode));
                try {
                  var fe = Jl(l.type, n, l.elementType === l.type);
                  ((e = a.getSnapshotBeforeUpdate(fe, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ue) {
                  Ue(l, l.return, ue);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  mc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      mc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(h(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (nt = e));
            break;
          }
          nt = t.return;
        }
  }
  function _o(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (pl(e, l), a & 4 && bn(5, l));
        break;
      case 1:
        if ((pl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              Ue(l, l.return, c);
            }
          else {
            var n = Jl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Ue(l, l.return, c);
            }
          }
        (a & 64 && xo(l), a & 512 && xn(l, l.return));
        break;
      case 3:
        if ((pl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            uf(e, t);
          } catch (c) {
            Ue(l, l.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && jo(l);
      case 26:
      case 5:
        (pl(e, l), t === null && a & 4 && Oo(l), a & 512 && xn(l, l.return));
        break;
      case 12:
        pl(e, l);
        break;
      case 13:
        (pl(e, l),
          a & 4 && Mo(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = rm.bind(null, l)), Tm(e, l)))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || nl), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Je), (n = nl));
          var i = Je;
          ((nl = a),
            (Je = t) && !i ? bl(e, l, (l.subtreeFlags & 8772) !== 0) : pl(e, l),
            (nl = n),
            (Je = i));
        }
        break;
      case 30:
        break;
      default:
        pl(e, l);
    }
  }
  function Eo(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Eo(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && bu(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Be = null,
    gt = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; ) (No(e, t, l), (l = l.sibling));
  }
  function No(e, t, l) {
    if (Xe && typeof Xe.onCommitFiberUnmount == "function")
      try {
        Xe.onCommitFiberUnmount(Dl, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Je || Xt(l, t),
          il(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Je || Xt(l, t);
        var a = Be,
          n = gt;
        (Tl(l.type) && ((Be = l.stateNode), (gt = !1)),
          il(e, t, l),
          Mn(l.stateNode),
          (Be = a),
          (gt = n));
        break;
      case 5:
        Je || Xt(l, t);
      case 6:
        if (
          ((a = Be),
          (n = gt),
          (Be = null),
          il(e, t, l),
          (Be = a),
          (gt = n),
          Be !== null)
        )
          if (gt)
            try {
              (Be.nodeType === 9
                ? Be.body
                : Be.nodeName === "HTML"
                  ? Be.ownerDocument.body
                  : Be
              ).removeChild(l.stateNode);
            } catch (i) {
              Ue(l, t, i);
            }
          else
            try {
              Be.removeChild(l.stateNode);
            } catch (i) {
              Ue(l, t, i);
            }
        break;
      case 18:
        Be !== null &&
          (gt
            ? ((e = Be),
              yd(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                l.stateNode,
              ),
              Un(e))
            : yd(Be, l.stateNode));
        break;
      case 4:
        ((a = Be),
          (n = gt),
          (Be = l.stateNode.containerInfo),
          (gt = !0),
          il(e, t, l),
          (Be = a),
          (gt = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Je || gl(2, l, t), Je || gl(4, l, t), il(e, t, l));
        break;
      case 1:
        (Je ||
          (Xt(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && So(l, t, a)),
          il(e, t, l));
        break;
      case 21:
        il(e, t, l);
        break;
      case 22:
        ((Je = (a = Je) || l.memoizedState !== null), il(e, t, l), (Je = a));
        break;
      default:
        il(e, t, l);
    }
  }
  function Mo(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Un(e);
      } catch (l) {
        Ue(t, t.return, l);
      }
  }
  function I0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new To()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new To()),
          t
        );
      default:
        throw Error(h(435, e.tag));
    }
  }
  function Gr(e, t) {
    var l = I0(e);
    t.forEach(function (a) {
      var n = cm.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function Ot(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          c = t,
          o = c;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Tl(o.type)) {
                ((Be = o.stateNode), (gt = !1));
                break e;
              }
              break;
            case 5:
              ((Be = o.stateNode), (gt = !1));
              break e;
            case 3:
            case 4:
              ((Be = o.stateNode.containerInfo), (gt = !0));
              break e;
          }
          o = o.return;
        }
        if (Be === null) throw Error(h(160));
        (No(i, c, n),
          (Be = null),
          (gt = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null));
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) (zo(t, e), (t = t.sibling));
  }
  var qt = null;
  function zo(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ot(t, e),
          wt(e),
          a & 4 && (gl(3, e, e.return), bn(3, e), gl(5, e, e.return)));
        break;
      case 1:
        (Ot(t, e),
          wt(e),
          a & 512 && (Je || l === null || Xt(l, l.return)),
          a & 64 &&
            nl &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var n = qt;
        if (
          (Ot(t, e),
          wt(e),
          a & 512 && (Je || l === null || Xt(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n));
                  t: switch (a) {
                    case "title":
                      ((i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Qa] ||
                          i[st] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title"),
                          )),
                        ct(i, a, l),
                        (i[st] = e),
                        lt(i),
                        (a = i));
                      break e;
                    case "link":
                      var c = jd("link", "href", n).get(a + (l.href || ""));
                      if (c) {
                        for (var o = 0; o < c.length; o++)
                          if (
                            ((i = c[o]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        ct(i, a, l),
                        n.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (c = jd("meta", "content", n).get(
                          a + (l.content || ""),
                        ))
                      ) {
                        for (o = 0; o < c.length; o++)
                          if (
                            ((i = c[o]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(o, 1);
                            break t;
                          }
                      }
                      ((i = n.createElement(a)),
                        ct(i, a, l),
                        n.head.appendChild(i));
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  ((i[st] = e), lt(i), (a = i));
                }
                e.stateNode = a;
              } else Td(n, e.type, e.stateNode);
            else e.stateNode = wd(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? Td(n, e.type, e.stateNode)
                  : wd(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                Ur(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Ot(t, e),
          wt(e),
          a & 512 && (Je || l === null || Xt(l, l.return)),
          l !== null && a & 4 && Ur(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Ot(t, e),
          wt(e),
          a & 512 && (Je || l === null || Xt(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            ca(n, "");
          } catch (H) {
            Ue(e, e.return, H);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), Ur(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (Yr = !0));
        break;
      case 6:
        if ((Ot(t, e), wt(e), a & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((a = e.memoizedProps), (l = e.stateNode));
          try {
            l.nodeValue = a;
          } catch (H) {
            Ue(e, e.return, H);
          }
        }
        break;
      case 3:
        if (
          ((Wi = null),
          (n = qt),
          (qt = Ki(t.containerInfo)),
          Ot(t, e),
          (qt = n),
          wt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Un(t.containerInfo);
          } catch (H) {
            Ue(e, e.return, H);
          }
        Yr && ((Yr = !1), Co(e));
        break;
      case 4:
        ((a = qt),
          (qt = Ki(e.stateNode.containerInfo)),
          Ot(t, e),
          wt(e),
          (qt = a));
        break;
      case 12:
        (Ot(t, e), wt(e));
        break;
      case 13:
        (Ot(t, e),
          wt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Kr = se()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Gr(e, a))));
        break;
      case 22:
        n = e.memoizedState !== null;
        var y = l !== null && l.memoizedState !== null,
          M = nl,
          G = Je;
        if (
          ((nl = M || n),
          (Je = G || y),
          Ot(t, e),
          (Je = G),
          (nl = M),
          wt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || y || nl || Je || Wl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                y = l = t;
                try {
                  if (((i = y.stateNode), n))
                    ((c = i.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    o = y.stateNode;
                    var Z = y.memoizedProps.style,
                      A =
                        Z != null && Z.hasOwnProperty("display")
                          ? Z.display
                          : null;
                    o.style.display =
                      A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (H) {
                  Ue(y, y.return, H);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = n ? "" : y.memoizedProps;
                } catch (H) {
                  Ue(y, y.return, H);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), Gr(e, l))));
        break;
      case 19:
        (Ot(t, e),
          wt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Gr(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ot(t, e), wt(e));
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (wo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(h(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = qr(e);
            Ri(e, i, n);
            break;
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (ca(c, ""), (l.flags &= -33));
            var o = qr(e);
            Ri(e, o, c);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              M = qr(e);
            Br(e, M, y);
            break;
          default:
            throw Error(h(161));
        }
      } catch (G) {
        Ue(e, e.return, G);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Co(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Co(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function pl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (_o(e, t.alternate, t), (t = t.sibling));
  }
  function Wl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(4, t, t.return), Wl(t));
          break;
        case 1:
          Xt(t, t.return);
          var l = t.stateNode;
          (typeof l.componentWillUnmount == "function" && So(t, t.return, l),
            Wl(t));
          break;
        case 27:
          Mn(t.stateNode);
        case 26:
        case 5:
          (Xt(t, t.return), Wl(t));
          break;
        case 22:
          t.memoizedState === null && Wl(t);
          break;
        case 30:
          Wl(t);
          break;
        default:
          Wl(t);
      }
      e = e.sibling;
    }
  }
  function bl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (bl(n, i, l), bn(4, i));
          break;
        case 1:
          if (
            (bl(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (M) {
              Ue(a, a.return, M);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var o = a.stateNode;
            try {
              var y = n.shared.hiddenCallbacks;
              if (y !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < y.length; n++)
                  nf(y[n], o);
            } catch (M) {
              Ue(a, a.return, M);
            }
          }
          (l && c & 64 && xo(i), xn(i, i.return));
          break;
        case 27:
          jo(i);
        case 26:
        case 5:
          (bl(n, i, l), l && a === null && c & 4 && Oo(i), xn(i, i.return));
          break;
        case 12:
          bl(n, i, l);
          break;
        case 13:
          (bl(n, i, l), l && c & 4 && Mo(n, i));
          break;
        case 22:
          (i.memoizedState === null && bl(n, i, l), xn(i, i.return));
          break;
        case 30:
          break;
        default:
          bl(n, i, l);
      }
      t = t.sibling;
    }
  }
  function Xr(e, t) {
    var l = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && nn(l)));
  }
  function Qr(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && nn(e)));
  }
  function Qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ao(e, t, l, a), (t = t.sibling));
  }
  function Ao(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Qt(e, t, l, a), n & 2048 && bn(9, t));
        break;
      case 1:
        Qt(e, t, l, a);
        break;
      case 3:
        (Qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && nn(e))));
        break;
      case 12:
        if (n & 2048) {
          (Qt(e, t, l, a), (e = t.stateNode));
          try {
            var i = t.memoizedProps,
              c = i.id,
              o = i.onPostCommit;
            typeof o == "function" &&
              o(
                c,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (y) {
            Ue(t, t.return, y);
          }
        } else Qt(e, t, l, a);
        break;
      case 13:
        Qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? Qt(e, t, l, a)
              : Sn(e, t)
            : i._visibility & 2
              ? Qt(e, t, l, a)
              : ((i._visibility |= 2),
                Ea(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && Xr(c, t));
        break;
      case 24:
        (Qt(e, t, l, a), n & 2048 && Qr(t.alternate, t));
        break;
      default:
        Qt(e, t, l, a);
    }
  }
  function Ea(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        c = t,
        o = l,
        y = a,
        M = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Ea(i, c, o, y, n), bn(8, c));
          break;
        case 23:
          break;
        case 22:
          var G = c.stateNode;
          (c.memoizedState !== null
            ? G._visibility & 2
              ? Ea(i, c, o, y, n)
              : Sn(i, c)
            : ((G._visibility |= 2), Ea(i, c, o, y, n)),
            n && M & 2048 && Xr(c.alternate, c));
          break;
        case 24:
          (Ea(i, c, o, y, n), n && M & 2048 && Qr(c.alternate, c));
          break;
        default:
          Ea(i, c, o, y, n);
      }
      t = t.sibling;
    }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (Sn(l, a), n & 2048 && Xr(a.alternate, a));
            break;
          case 24:
            (Sn(l, a), n & 2048 && Qr(a.alternate, a));
            break;
          default:
            Sn(l, a);
        }
        t = t.sibling;
      }
  }
  var On = 8192;
  function Na(e) {
    if (e.subtreeFlags & On)
      for (e = e.child; e !== null; ) (Do(e), (e = e.sibling));
  }
  function Do(e) {
    switch (e.tag) {
      case 26:
        (Na(e),
          e.flags & On &&
            e.memoizedState !== null &&
            qm(qt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Na(e);
        break;
      case 3:
      case 4:
        var t = qt;
        ((qt = Ki(e.stateNode.containerInfo)), Na(e), (qt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = On), (On = 16777216), Na(e), (On = t))
            : Na(e));
        break;
      default:
        Na(e);
    }
  }
  function Ro(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((nt = a), Lo(a, e));
        }
      Ro(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Ho(e), (e = e.sibling));
  }
  function Ho(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e), e.flags & 2048 && gl(9, e, e.return));
        break;
      case 3:
        wn(e);
        break;
      case 12:
        wn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Hi(e))
          : wn(e);
        break;
      default:
        wn(e);
    }
  }
  function Hi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ((nt = a), Lo(a, e));
        }
      Ro(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (gl(8, t, t.return), Hi(t));
          break;
        case 22:
          ((l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Hi(t)));
          break;
        default:
          Hi(t);
      }
      e = e.sibling;
    }
  }
  function Lo(e, t) {
    for (; nt !== null; ) {
      var l = nt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          gl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          nn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) ((a.return = l), (nt = a));
      else
        e: for (l = e; nt !== null; ) {
          a = nt;
          var n = a.sibling,
            i = a.return;
          if ((Eo(a), a === l)) {
            nt = null;
            break e;
          }
          if (n !== null) {
            ((n.return = i), (nt = n));
            break e;
          }
          nt = i;
        }
    }
  }
  var em = {
      getCacheForType: function (e) {
        var t = ft(Ie),
          l = t.data.get(e);
        return (l === void 0 && ((l = e()), t.data.set(e, l)), l);
      },
    },
    tm = typeof WeakMap == "function" ? WeakMap : Map,
    Ae = 0,
    qe = null,
    Oe = null,
    _e = 0,
    De = 0,
    jt = null,
    xl = !1,
    Ma = !1,
    kr = !1,
    ul = 0,
    ke = 0,
    Sl = 0,
    Pl = 0,
    Zr = 0,
    Ht = 0,
    za = 0,
    jn = null,
    pt = null,
    Vr = !1,
    Kr = 0,
    Li = 1 / 0,
    Ui = null,
    Ol = null,
    rt = 0,
    wl = null,
    Ca = null,
    Aa = 0,
    Jr = 0,
    Wr = null,
    Uo = null,
    Tn = 0,
    Pr = null;
  function Tt() {
    if ((Ae & 2) !== 0 && _e !== 0) return _e & -_e;
    if (S.T !== null) {
      var e = ba;
      return e !== 0 ? e : ac();
    }
    return $c();
  }
  function qo() {
    Ht === 0 && (Ht = (_e & 536870912) === 0 || Ce ? Kc() : 536870912);
    var e = Rt.current;
    return (e !== null && (e.flags |= 32), Ht);
  }
  function _t(e, t, l) {
    (((e === qe && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (Da(e, 0), jl(e, _e, Ht, !1)),
      Xa(e, l),
      ((Ae & 2) === 0 || e !== qe) &&
        (e === qe &&
          ((Ae & 2) === 0 && (Pl |= l), ke === 4 && jl(e, _e, Ht, !1)),
        kt(e)));
  }
  function Bo(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(h(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ga(e, t),
      n = a ? nm(e, t) : Ir(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        Ma && !a && jl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !lm(l))) {
          ((n = Ir(e, t, !1)), (i = !1));
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var c = 0;
          else
            ((c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            e: {
              var o = e;
              n = jn;
              var y = o.current.memoizedState.isDehydrated;
              if ((y && (Da(o, c).flags |= 256), (c = Ir(o, c, !1)), c !== 2)) {
                if (kr && !y) {
                  ((o.errorRecoveryDisabledLanes |= i), (Pl |= i), (n = 4));
                  break e;
                }
                ((i = pt),
                  (pt = n),
                  i !== null &&
                    (pt === null ? (pt = i) : pt.push.apply(pt, i)));
              }
              n = c;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (Da(e, 0), jl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              jl(a, t, Ht, !xl);
              break e;
            case 2:
              pt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && ((n = Kr + 300 - se()), 10 < n)) {
            if ((jl(a, t, Ht, !xl), Jn(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = md(
              Yo.bind(null, a, l, pt, Ui, Vr, t, Ht, Pl, za, xl, i, 2, -0, 0),
              n,
            );
            break e;
          }
          Yo(a, l, pt, Ui, Vr, t, Ht, Pl, za, xl, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    kt(e);
  }
  function Yo(e, t, l, a, n, i, c, o, y, M, G, Z, A, H) {
    if (
      ((e.timeoutHandle = -1),
      (Z = t.subtreeFlags),
      (Z & 8192 || (Z & 16785408) === 16785408) &&
        ((An = { stylesheets: null, count: 0, unsuspend: Um }),
        Do(t),
        (Z = Bm()),
        Z !== null))
    ) {
      ((e.cancelPendingCommit = Z(
        Ko.bind(null, e, t, i, l, a, n, c, o, y, G, 1, A, H),
      )),
        jl(e, i, c, !M));
      return;
    }
    Ko(e, t, i, l, a, n, c, o, y);
  }
  function lm(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!xt(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        ((l.return = t), (t = l));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function jl(e, t, l, a) {
    ((t &= ~Zr),
      (t &= ~Pl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var n = t; 0 < n; ) {
      var i = 31 - bt(n),
        c = 1 << i;
      ((a[i] = -1), (n &= ~c));
    }
    l !== 0 && Wc(e, l, t);
  }
  function qi() {
    return (Ae & 6) === 0 ? (_n(0), !1) : !0;
  }
  function $r() {
    if (Oe !== null) {
      if (De === 0) var e = Oe.return;
      else ((e = Oe), (Ft = kl = null), mr(e), (Ta = null), (yn = 0), (e = Oe));
      for (; e !== null; ) (bo(e.alternate, e), (e = e.return));
      Oe = null;
    }
  }
  function Da(e, t) {
    var l = e.timeoutHandle;
    (l !== -1 && ((e.timeoutHandle = -1), xm(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      $r(),
      (qe = e),
      (Oe = l = Wt(e.current, null)),
      (_e = t),
      (De = 0),
      (jt = null),
      (xl = !1),
      (Ma = Ga(e, t)),
      (kr = !1),
      (za = Ht = Zr = Pl = Sl = ke = 0),
      (pt = jn = null),
      (Vr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - bt(a),
          i = 1 << n;
        ((t |= e[n]), (a &= ~i));
      }
    return ((ul = t), ui(), l);
  }
  function Go(e, t) {
    ((be = null),
      (S.H = Ti),
      t === rn || t === vi
        ? ((t = lf()), (De = 3))
        : t === Is
          ? ((t = lf()), (De = 4))
          : (De =
              t === no
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (jt = t),
      Oe === null && ((ke = 1), zi(e, zt(t, e.current))));
  }
  function Xo() {
    var e = S.H;
    return ((S.H = Ti), e === null ? Ti : e);
  }
  function Qo() {
    var e = S.A;
    return ((S.A = em), e);
  }
  function Fr() {
    ((ke = 4),
      xl || ((_e & 4194048) !== _e && Rt.current !== null) || (Ma = !0),
      ((Sl & 134217727) === 0 && (Pl & 134217727) === 0) ||
        qe === null ||
        jl(qe, _e, Ht, !1));
  }
  function Ir(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var n = Xo(),
      i = Qo();
    ((qe !== e || _e !== t) && ((Ui = null), Da(e, t)), (t = !1));
    var c = ke;
    e: do
      try {
        if (De !== 0 && Oe !== null) {
          var o = Oe,
            y = jt;
          switch (De) {
            case 8:
              ($r(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var M = De;
              if (((De = 0), (jt = null), Ra(e, o, y, M), l && Ma)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((M = De), (De = 0), (jt = null), Ra(e, o, y, M));
          }
        }
        (am(), (c = ke));
        break;
      } catch (G) {
        Go(e, G);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ft = kl = null),
      (Ae = a),
      (S.H = n),
      (S.A = i),
      Oe === null && ((qe = null), (_e = 0), ui()),
      c
    );
  }
  function am() {
    for (; Oe !== null; ) ko(Oe);
  }
  function nm(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = Xo(),
      n = Qo();
    qe !== e || _e !== t
      ? ((Ui = null), (Li = se() + 500), Da(e, t))
      : (Ma = Ga(e, t));
    e: do
      try {
        if (De !== 0 && Oe !== null) {
          t = Oe;
          var i = jt;
          t: switch (De) {
            case 1:
              ((De = 0), (jt = null), Ra(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (ef(i)) {
                ((De = 0), (jt = null), Zo(t));
                break;
              }
              ((t = function () {
                ((De !== 2 && De !== 9) || qe !== e || (De = 7), kt(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              ef(i)
                ? ((De = 0), (jt = null), Zo(t))
                : ((De = 0), (jt = null), Ra(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (Oe.tag) {
                case 26:
                  c = Oe.memoizedState;
                case 5:
                case 27:
                  var o = Oe;
                  if (!c || _d(c)) {
                    ((De = 0), (jt = null));
                    var y = o.sibling;
                    if (y !== null) Oe = y;
                    else {
                      var M = o.return;
                      M !== null ? ((Oe = M), Bi(M)) : (Oe = null);
                    }
                    break t;
                  }
              }
              ((De = 0), (jt = null), Ra(e, t, i, 5));
              break;
            case 6:
              ((De = 0), (jt = null), Ra(e, t, i, 6));
              break;
            case 8:
              ($r(), (ke = 6));
              break e;
            default:
              throw Error(h(462));
          }
        }
        im();
        break;
      } catch (G) {
        Go(e, G);
      }
    while (!0);
    return (
      (Ft = kl = null),
      (S.H = a),
      (S.A = n),
      (Ae = l),
      Oe !== null ? 0 : ((qe = null), (_e = 0), ui(), ke)
    );
  }
  function im() {
    for (; Oe !== null && !Me(); ) ko(Oe);
  }
  function ko(e) {
    var t = go(e.alternate, e, ul);
    ((e.memoizedProps = e.pendingProps), t === null ? Bi(e) : (Oe = t));
  }
  function Zo(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fo(l, t, t.pendingProps, t.type, void 0, _e);
        break;
      case 11:
        t = fo(l, t, t.pendingProps, t.type.render, t.ref, _e);
        break;
      case 5:
        mr(t);
      default:
        (bo(l, t), (t = Oe = ks(t, ul)), (t = go(l, t, ul)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Bi(e) : (Oe = t));
  }
  function Ra(e, t, l, a) {
    ((Ft = kl = null), mr(t), (Ta = null), (yn = 0));
    var n = t.return;
    try {
      if (J0(e, n, t, l, _e)) {
        ((ke = 1), zi(e, zt(l, e.current)), (Oe = null));
        return;
      }
    } catch (i) {
      if (n !== null) throw ((Oe = n), i);
      ((ke = 1), zi(e, zt(l, e.current)), (Oe = null));
      return;
    }
    t.flags & 32768
      ? (Ce || a === 1
          ? (e = !0)
          : Ma || (_e & 536870912) !== 0
            ? (e = !1)
            : ((xl = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Rt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Vo(t, e))
      : Bi(t);
  }
  function Bi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Vo(t, xl);
        return;
      }
      e = t.return;
      var l = P0(t.alternate, t, ul);
      if (l !== null) {
        Oe = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function Vo(e, t) {
    do {
      var l = $0(e.alternate, e);
      if (l !== null) {
        ((l.flags &= 32767), (Oe = l));
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Oe = e;
        return;
      }
      Oe = e = l;
    } while (e !== null);
    ((ke = 6), (Oe = null));
  }
  function Ko(e, t, l, a, n, i, c, o, y) {
    e.cancelPendingCommit = null;
    do Yi();
    while (rt !== 0);
    if ((Ae & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === e.current) throw Error(h(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= Qu),
        Uh(e, l, i, c, o, y),
        e === qe && ((Oe = qe = null), (_e = 0)),
        (Ca = t),
        (wl = e),
        (Aa = l),
        (Jr = i),
        (Wr = n),
        (Uo = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            sm(tt, function () {
              return (Fo(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = S.T), (S.T = null), (n = r.p), (r.p = 2), (c = Ae), (Ae |= 4));
        try {
          F0(e, t, l);
        } finally {
          ((Ae = c), (r.p = n), (S.T = a));
        }
      }
      ((rt = 1), Jo(), Wo(), Po());
    }
  }
  function Jo() {
    if (rt === 1) {
      rt = 0;
      var e = wl,
        t = Ca,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        ((l = S.T), (S.T = null));
        var a = r.p;
        r.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          zo(t, e);
          var i = oc,
            c = Rs(e.containerInfo),
            o = i.focusedElem,
            y = i.selectionRange;
          if (
            c !== o &&
            o &&
            o.ownerDocument &&
            Ds(o.ownerDocument.documentElement, o)
          ) {
            if (y !== null && qu(o)) {
              var M = y.start,
                G = y.end;
              if ((G === void 0 && (G = M), "selectionStart" in o))
                ((o.selectionStart = M),
                  (o.selectionEnd = Math.min(G, o.value.length)));
              else {
                var Z = o.ownerDocument || document,
                  A = (Z && Z.defaultView) || window;
                if (A.getSelection) {
                  var H = A.getSelection(),
                    fe = o.textContent.length,
                    ue = Math.min(y.start, fe),
                    Le = y.end === void 0 ? ue : Math.min(y.end, fe);
                  !H.extend && ue > Le && ((c = Le), (Le = ue), (ue = c));
                  var _ = As(o, ue),
                    O = As(o, Le);
                  if (
                    _ &&
                    O &&
                    (H.rangeCount !== 1 ||
                      H.anchorNode !== _.node ||
                      H.anchorOffset !== _.offset ||
                      H.focusNode !== O.node ||
                      H.focusOffset !== O.offset)
                  ) {
                    var N = Z.createRange();
                    (N.setStart(_.node, _.offset),
                      H.removeAllRanges(),
                      ue > Le
                        ? (H.addRange(N), H.extend(O.node, O.offset))
                        : (N.setEnd(O.node, O.offset), H.addRange(N)));
                  }
                }
              }
            }
            for (Z = [], H = o; (H = H.parentNode); )
              H.nodeType === 1 &&
                Z.push({ element: H, left: H.scrollLeft, top: H.scrollTop });
            for (
              typeof o.focus == "function" && o.focus(), o = 0;
              o < Z.length;
              o++
            ) {
              var Q = Z[o];
              ((Q.element.scrollLeft = Q.left), (Q.element.scrollTop = Q.top));
            }
          }
          ((Fi = !!fc), (oc = fc = null));
        } finally {
          ((Ae = n), (r.p = a), (S.T = l));
        }
      }
      ((e.current = t), (rt = 2));
    }
  }
  function Wo() {
    if (rt === 2) {
      rt = 0;
      var e = wl,
        t = Ca,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        ((l = S.T), (S.T = null));
        var a = r.p;
        r.p = 2;
        var n = Ae;
        Ae |= 4;
        try {
          _o(e, t.alternate, t);
        } finally {
          ((Ae = n), (r.p = a), (S.T = l));
        }
      }
      rt = 3;
    }
  }
  function Po() {
    if (rt === 4 || rt === 3) {
      ((rt = 0), Ze());
      var e = wl,
        t = Ca,
        l = Aa,
        a = Uo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (rt = 5)
        : ((rt = 0), (Ca = wl = null), $o(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (Ol = null),
        gu(l),
        (t = t.stateNode),
        Xe && typeof Xe.onCommitFiberRoot == "function")
      )
        try {
          Xe.onCommitFiberRoot(Dl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = S.T), (n = r.p), (r.p = 2), (S.T = null));
        try {
          for (var i = e.onRecoverableError, c = 0; c < a.length; c++) {
            var o = a[c];
            i(o.value, { componentStack: o.stack });
          }
        } finally {
          ((S.T = t), (r.p = n));
        }
      }
      ((Aa & 3) !== 0 && Yi(),
        kt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === Pr
            ? Tn++
            : ((Tn = 0), (Pr = e))
          : (Tn = 0),
        _n(0));
    }
  }
  function $o(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), nn(t)));
  }
  function Yi(e) {
    return (Jo(), Wo(), Po(), Fo());
  }
  function Fo() {
    if (rt !== 5) return !1;
    var e = wl,
      t = Jr;
    Jr = 0;
    var l = gu(Aa),
      a = S.T,
      n = r.p;
    try {
      ((r.p = 32 > l ? 32 : l), (S.T = null), (l = Wr), (Wr = null));
      var i = wl,
        c = Aa;
      if (((rt = 0), (Ca = wl = null), (Aa = 0), (Ae & 6) !== 0))
        throw Error(h(331));
      var o = Ae;
      if (
        ((Ae |= 4),
        Ho(i.current),
        Ao(i, i.current, c, l),
        (Ae = o),
        _n(0, !1),
        Xe && typeof Xe.onPostCommitFiberRoot == "function")
      )
        try {
          Xe.onPostCommitFiberRoot(Dl, i);
        } catch {}
      return !0;
    } finally {
      ((r.p = n), (S.T = a), $o(e, t));
    }
  }
  function Io(e, t, l) {
    ((t = zt(l, t)),
      (t = Nr(e.stateNode, t, 2)),
      (e = hl(e, t, 2)),
      e !== null && (Xa(e, 2), kt(e)));
  }
  function Ue(e, t, l) {
    if (e.tag === 3) Io(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Io(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Ol === null || !Ol.has(a)))
          ) {
            ((e = zt(l, e)),
              (l = lo(2)),
              (a = hl(t, l, 2)),
              a !== null && (ao(l, a, t, e), Xa(a, 2), kt(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ec(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new tm();
      var n = new Set();
      a.set(t, n);
    } else ((n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n)));
    n.has(l) ||
      ((kr = !0), n.add(l), (e = um.bind(null, e, t, l)), t.then(e, e));
  }
  function um(e, t, l) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      qe === e &&
        (_e & l) === l &&
        (ke === 4 || (ke === 3 && (_e & 62914560) === _e && 300 > se() - Kr)
          ? (Ae & 2) === 0 && Da(e, 0)
          : (Zr |= l),
        za === _e && (za = 0)),
      kt(e));
  }
  function ed(e, t) {
    (t === 0 && (t = Jc()), (e = va(e, t)), e !== null && (Xa(e, t), kt(e)));
  }
  function rm(e) {
    var t = e.memoizedState,
      l = 0;
    (t !== null && (l = t.retryLane), ed(e, l));
  }
  function cm(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (a !== null && a.delete(t), ed(e, l));
  }
  function sm(e, t) {
    return je(e, t);
  }
  var Gi = null,
    Ha = null,
    tc = !1,
    Xi = !1,
    lc = !1,
    $l = 0;
  function kt(e) {
    (e !== Ha &&
      e.next === null &&
      (Ha === null ? (Gi = Ha = e) : (Ha = Ha.next = e)),
      (Xi = !0),
      tc || ((tc = !0), om()));
  }
  function _n(e, t) {
    if (!lc && Xi) {
      lc = !0;
      do
        for (var l = !1, a = Gi; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = a.suspendedLanes,
                o = a.pingedLanes;
              ((i = (1 << (31 - bt(42 | e) + 1)) - 1),
                (i &= n & ~(c & ~o)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((l = !0), nd(a, i));
          } else
            ((i = _e),
              (i = Jn(
                a,
                a === qe ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (i & 3) === 0 || Ga(a, i) || ((l = !0), nd(a, i)));
          a = a.next;
        }
      while (l);
      lc = !1;
    }
  }
  function fm() {
    td();
  }
  function td() {
    Xi = tc = !1;
    var e = 0;
    $l !== 0 && (bm() && (e = $l), ($l = 0));
    for (var t = se(), l = null, a = Gi; a !== null; ) {
      var n = a.next,
        i = ld(a, t);
      (i === 0
        ? ((a.next = null),
          l === null ? (Gi = n) : (l.next = n),
          n === null && (Ha = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (Xi = !0)),
        (a = n));
    }
    _n(e);
  }
  function ld(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;
    ) {
      var c = 31 - bt(i),
        o = 1 << c,
        y = n[c];
      (y === -1
        ? ((o & l) === 0 || (o & a) !== 0) && (n[c] = Lh(o, t))
        : y <= t && (e.expiredLanes |= o),
        (i &= ~o));
    }
    if (
      ((t = qe),
      (l = _e),
      (l = Jn(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (De === 2 || De === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && pe(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ga(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && pe(a), gu(l))) {
        case 2:
        case 8:
          l = Pe;
          break;
        case 32:
          l = tt;
          break;
        case 268435456:
          l = Cl;
          break;
        default:
          l = tt;
      }
      return (
        (a = ad.bind(null, e)),
        (l = je(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && pe(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function ad(e, t) {
    if (rt !== 0 && rt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var l = e.callbackNode;
    if (Yi() && e.callbackNode !== l) return null;
    var a = _e;
    return (
      (a = Jn(
        e,
        e === qe ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (Bo(e, a, t),
          ld(e, se()),
          e.callbackNode != null && e.callbackNode === l
            ? ad.bind(null, e)
            : null)
    );
  }
  function nd(e, t) {
    if (Yi()) return null;
    Bo(e, t, !0);
  }
  function om() {
    Sm(function () {
      (Ae & 6) !== 0 ? je(Ve, fm) : td();
    });
  }
  function ac() {
    return ($l === 0 && ($l = Kc()), $l);
  }
  function id(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : In("" + e);
  }
  function ud(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function dm(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = id((n[mt] || null).action),
        c = a.submitter;
      c &&
        ((t = (t = c[mt] || null)
          ? id(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((i = t), (c = null)));
      var o = new ai("action", "action", null, a, n);
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if ($l !== 0) {
                  var y = c ? ud(n, c) : new FormData(n);
                  wr(
                    l,
                    { pending: !0, data: y, method: n.method, action: i },
                    null,
                    y,
                  );
                }
              } else
                typeof i == "function" &&
                  (o.preventDefault(),
                  (y = c ? ud(n, c) : new FormData(n)),
                  wr(
                    l,
                    { pending: !0, data: y, method: n.method, action: i },
                    i,
                    y,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var nc = 0; nc < Xu.length; nc++) {
    var ic = Xu[nc],
      hm = ic.toLowerCase(),
      mm = ic[0].toUpperCase() + ic.slice(1);
    Ut(hm, "on" + mm);
  }
  (Ut(Us, "onAnimationEnd"),
    Ut(qs, "onAnimationIteration"),
    Ut(Bs, "onAnimationStart"),
    Ut("dblclick", "onDoubleClick"),
    Ut("focusin", "onFocus"),
    Ut("focusout", "onBlur"),
    Ut(C0, "onTransitionRun"),
    Ut(A0, "onTransitionStart"),
    Ut(D0, "onTransitionCancel"),
    Ut(Ys, "onTransitionEnd"),
    ia("onMouseEnter", ["mouseout", "mouseover"]),
    ia("onMouseLeave", ["mouseout", "mouseover"]),
    ia("onPointerEnter", ["pointerout", "pointerover"]),
    ia("onPointerLeave", ["pointerout", "pointerover"]),
    Hl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Hl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Hl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Hl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Hl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Hl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var En =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    vm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(En),
    );
  function rd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var o = a[c],
              y = o.instance,
              M = o.currentTarget;
            if (((o = o.listener), y !== i && n.isPropagationStopped()))
              break e;
            ((i = o), (n.currentTarget = M));
            try {
              i(n);
            } catch (G) {
              Mi(G);
            }
            ((n.currentTarget = null), (i = y));
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((o = a[c]),
              (y = o.instance),
              (M = o.currentTarget),
              (o = o.listener),
              y !== i && n.isPropagationStopped())
            )
              break e;
            ((i = o), (n.currentTarget = M));
            try {
              i(n);
            } catch (G) {
              Mi(G);
            }
            ((n.currentTarget = null), (i = y));
          }
      }
    }
  }
  function we(e, t) {
    var l = t[pu];
    l === void 0 && (l = t[pu] = new Set());
    var a = e + "__bubble";
    l.has(a) || (cd(t, e, 2, !1), l.add(a));
  }
  function uc(e, t, l) {
    var a = 0;
    (t && (a |= 4), cd(l, e, a, t));
  }
  var Qi = "_reactListening" + Math.random().toString(36).slice(2);
  function rc(e) {
    if (!e[Qi]) {
      ((e[Qi] = !0),
        Ic.forEach(function (l) {
          l !== "selectionchange" && (vm.has(l) || uc(l, !1, e), uc(l, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qi] || ((t[Qi] = !0), uc("selectionchange", !1, t));
    }
  }
  function cd(e, t, l, a) {
    switch (Ad(t)) {
      case 2:
        var n = Xm;
        break;
      case 8:
        n = Qm;
        break;
      default:
        n = Sc;
    }
    ((l = n.bind(null, t, l, e)),
      (n = void 0),
      !Mu ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
          ? e.addEventListener(t, l, { passive: n })
          : e.addEventListener(t, l, !1));
  }
  function cc(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var y = c.tag;
              if ((y === 3 || y === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; o !== null; ) {
            if (((c = la(o)), c === null)) return;
            if (((y = c.tag), y === 5 || y === 6 || y === 26 || y === 27)) {
              a = i = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
    hs(function () {
      var M = i,
        G = Eu(l),
        Z = [];
      e: {
        var A = Gs.get(e);
        if (A !== void 0) {
          var H = ai,
            fe = e;
          switch (e) {
            case "keypress":
              if (ti(l) === 0) break e;
            case "keydown":
            case "keyup":
              H = s0;
              break;
            case "focusin":
              ((fe = "focus"), (H = Du));
              break;
            case "focusout":
              ((fe = "blur"), (H = Du));
              break;
            case "beforeblur":
            case "afterblur":
              H = Du;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = ys;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = $h;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = d0;
              break;
            case Us:
            case qs:
            case Bs:
              H = e0;
              break;
            case Ys:
              H = m0;
              break;
            case "scroll":
            case "scrollend":
              H = Wh;
              break;
            case "wheel":
              H = y0;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = l0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = ps;
              break;
            case "toggle":
            case "beforetoggle":
              H = p0;
          }
          var ue = (t & 4) !== 0,
            Le = !ue && (e === "scroll" || e === "scrollend"),
            _ = ue ? (A !== null ? A + "Capture" : null) : A;
          ue = [];
          for (var O = M, N; O !== null; ) {
            var Q = O;
            if (
              ((N = Q.stateNode),
              (Q = Q.tag),
              (Q !== 5 && Q !== 26 && Q !== 27) ||
                N === null ||
                _ === null ||
                ((Q = Za(O, _)), Q != null && ue.push(Nn(O, Q, N))),
              Le)
            )
              break;
            O = O.return;
          }
          0 < ue.length &&
            ((A = new H(A, fe, null, l, G)),
            Z.push({ event: A, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((A = e === "mouseover" || e === "pointerover"),
            (H = e === "mouseout" || e === "pointerout"),
            A &&
              l !== _u &&
              (fe = l.relatedTarget || l.fromElement) &&
              (la(fe) || fe[ta]))
          )
            break e;
          if (
            (H || A) &&
            ((A =
              G.window === G
                ? G
                : (A = G.ownerDocument)
                  ? A.defaultView || A.parentWindow
                  : window),
            H
              ? ((fe = l.relatedTarget || l.toElement),
                (H = M),
                (fe = fe ? la(fe) : null),
                fe !== null &&
                  ((Le = w(fe)),
                  (ue = fe.tag),
                  fe !== Le || (ue !== 5 && ue !== 27 && ue !== 6)) &&
                  (fe = null))
              : ((H = null), (fe = M)),
            H !== fe)
          ) {
            if (
              ((ue = ys),
              (Q = "onMouseLeave"),
              (_ = "onMouseEnter"),
              (O = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = ps),
                (Q = "onPointerLeave"),
                (_ = "onPointerEnter"),
                (O = "pointer")),
              (Le = H == null ? A : ka(H)),
              (N = fe == null ? A : ka(fe)),
              (A = new ue(Q, O + "leave", H, l, G)),
              (A.target = Le),
              (A.relatedTarget = N),
              (Q = null),
              la(G) === M &&
                ((ue = new ue(_, O + "enter", fe, l, G)),
                (ue.target = N),
                (ue.relatedTarget = Le),
                (Q = ue)),
              (Le = Q),
              H && fe)
            )
              t: {
                for (ue = H, _ = fe, O = 0, N = ue; N; N = La(N)) O++;
                for (N = 0, Q = _; Q; Q = La(Q)) N++;
                for (; 0 < O - N; ) ((ue = La(ue)), O--);
                for (; 0 < N - O; ) ((_ = La(_)), N--);
                for (; O--; ) {
                  if (ue === _ || (_ !== null && ue === _.alternate)) break t;
                  ((ue = La(ue)), (_ = La(_)));
                }
                ue = null;
              }
            else ue = null;
            (H !== null && sd(Z, A, H, ue, !1),
              fe !== null && Le !== null && sd(Z, Le, fe, ue, !0));
          }
        }
        e: {
          if (
            ((A = M ? ka(M) : window),
            (H = A.nodeName && A.nodeName.toLowerCase()),
            H === "select" || (H === "input" && A.type === "file"))
          )
            var le = _s;
          else if (js(A))
            if (Es) le = N0;
            else {
              le = _0;
              var Se = T0;
            }
          else
            ((H = A.nodeName),
              !H ||
              H.toLowerCase() !== "input" ||
              (A.type !== "checkbox" && A.type !== "radio")
                ? M && Tu(M.elementType) && (le = _s)
                : (le = E0));
          if (le && (le = le(e, M))) {
            Ts(Z, le, l, G);
            break e;
          }
          (Se && Se(e, A, M),
            e === "focusout" &&
              M &&
              A.type === "number" &&
              M.memoizedProps.value != null &&
              ju(A, "number", A.value));
        }
        switch (((Se = M ? ka(M) : window), e)) {
          case "focusin":
            (js(Se) || Se.contentEditable === "true") &&
              ((da = Se), (Bu = M), (Ia = null));
            break;
          case "focusout":
            Ia = Bu = da = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Yu = !1), Hs(Z, l, G));
            break;
          case "selectionchange":
            if (z0) break;
          case "keydown":
          case "keyup":
            Hs(Z, l, G);
        }
        var ie;
        if (Hu)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          oa
            ? Os(e, l) && (re = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (re = "onCompositionStart");
        (re &&
          (bs &&
            l.locale !== "ko" &&
            (oa || re !== "onCompositionStart"
              ? re === "onCompositionEnd" && oa && (ie = ms())
              : ((sl = G),
                (zu = "value" in sl ? sl.value : sl.textContent),
                (oa = !0))),
          (Se = ki(M, re)),
          0 < Se.length &&
            ((re = new gs(re, e, null, l, G)),
            Z.push({ event: re, listeners: Se }),
            ie
              ? (re.data = ie)
              : ((ie = ws(l)), ie !== null && (re.data = ie)))),
          (ie = x0 ? S0(e, l) : O0(e, l)) &&
            ((re = ki(M, "onBeforeInput")),
            0 < re.length &&
              ((Se = new gs("onBeforeInput", "beforeinput", null, l, G)),
              Z.push({ event: Se, listeners: re }),
              (Se.data = ie))),
          dm(Z, e, M, l, G));
      }
      rd(Z, t);
    });
  }
  function Nn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ki(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Za(e, l)),
          n != null && a.unshift(Nn(e, n, i)),
          (n = Za(e, t)),
          n != null && a.push(Nn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function La(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function sd(e, t, l, a, n) {
    for (var i = t._reactName, c = []; l !== null && l !== a; ) {
      var o = l,
        y = o.alternate,
        M = o.stateNode;
      if (((o = o.tag), y !== null && y === a)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        M === null ||
        ((y = M),
        n
          ? ((M = Za(l, i)), M != null && c.unshift(Nn(l, M, y)))
          : n || ((M = Za(l, i)), M != null && c.push(Nn(l, M, y)))),
        (l = l.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var ym = /\r\n?/g,
    gm = /\u0000|\uFFFD/g;
  function fd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ym,
        `
`,
      )
      .replace(gm, "");
  }
  function od(e, t) {
    return ((t = fd(t)), fd(e) === t);
  }
  function Zi() {}
  function He(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || ca(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            ca(e, "" + a);
        break;
      case "className":
        Pn(e, "class", a);
        break;
      case "tabIndex":
        Pn(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pn(e, l, a);
        break;
      case "style":
        os(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Pn(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        ((a = In("" + a)), e.setAttribute(l, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && He(e, t, "name", n.name, n, null),
                He(e, t, "formEncType", n.formEncType, n, null),
                He(e, t, "formMethod", n.formMethod, n, null),
                He(e, t, "formTarget", n.formTarget, n, null))
              : (He(e, t, "encType", n.encType, n, null),
                He(e, t, "method", n.method, n, null),
                He(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        ((a = In("" + a)), e.setAttribute(l, a));
        break;
      case "onClick":
        a != null && (e.onclick = Zi);
        break;
      case "onScroll":
        a != null && we("scroll", e);
        break;
      case "onScrollEnd":
        a != null && we("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(h(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((l = In("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(l, a)
            : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        (we("beforetoggle", e), we("toggle", e), Wn(e, "popover", a));
        break;
      case "xlinkActuate":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Wn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Kh.get(l) || l), Wn(e, l, a));
    }
  }
  function sc(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        os(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(h(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(h(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ca(e, a)
          : (typeof a == "number" || typeof a == "bigint") && ca(e, "" + a);
        break;
      case "onScroll":
        a != null && we("scroll", e);
        break;
      case "onScrollEnd":
        a != null && we("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Zi);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!es.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[mt] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n));
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
                ? e.setAttribute(l, "")
                : Wn(e, l, a);
          }
    }
  }
  function ct(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (we("error", e), we("load", e));
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var c = l[i];
            if (c != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  He(e, t, i, c, l, null);
              }
          }
        (n && He(e, t, "srcSet", l.srcSet, l, null),
          a && He(e, t, "src", l.src, l, null));
        return;
      case "input":
        we("invalid", e);
        var o = (i = c = n = null),
          y = null,
          M = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var G = l[a];
            if (G != null)
              switch (a) {
                case "name":
                  n = G;
                  break;
                case "type":
                  c = G;
                  break;
                case "checked":
                  y = G;
                  break;
                case "defaultChecked":
                  M = G;
                  break;
                case "value":
                  i = G;
                  break;
                case "defaultValue":
                  o = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null) throw Error(h(137, t));
                  break;
                default:
                  He(e, t, a, G, l, null);
              }
          }
        (rs(e, i, o, y, M, c, n, !1), $n(e));
        return;
      case "select":
        (we("invalid", e), (a = c = i = null));
        for (n in l)
          if (l.hasOwnProperty(n) && ((o = l[n]), o != null))
            switch (n) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                c = o;
                break;
              case "multiple":
                a = o;
              default:
                He(e, t, n, o, l, null);
            }
        ((t = i),
          (l = c),
          (e.multiple = !!a),
          t != null ? ra(e, !!a, t, !1) : l != null && ra(e, !!a, l, !0));
        return;
      case "textarea":
        (we("invalid", e), (i = n = a = null));
        for (c in l)
          if (l.hasOwnProperty(c) && ((o = l[c]), o != null))
            switch (c) {
              case "value":
                a = o;
                break;
              case "defaultValue":
                n = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(h(91));
                break;
              default:
                He(e, t, c, o, l, null);
            }
        (ss(e, a, n, i), $n(e));
        return;
      case "option":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                He(e, t, y, a, l, null);
            }
        return;
      case "dialog":
        (we("beforetoggle", e),
          we("toggle", e),
          we("cancel", e),
          we("close", e));
        break;
      case "iframe":
      case "object":
        we("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++) we(En[a], e);
        break;
      case "image":
        (we("error", e), we("load", e));
        break;
      case "details":
        we("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (we("error", e), we("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (M in l)
          if (l.hasOwnProperty(M) && ((a = l[M]), a != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                He(e, t, M, a, l, null);
            }
        return;
      default:
        if (Tu(t)) {
          for (G in l)
            l.hasOwnProperty(G) &&
              ((a = l[G]), a !== void 0 && sc(e, t, G, a, l, void 0));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && ((a = l[o]), a != null && He(e, t, o, a, l, null));
  }
  function pm(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          c = null,
          o = null,
          y = null,
          M = null,
          G = null;
        for (H in l) {
          var Z = l[H];
          if (l.hasOwnProperty(H) && Z != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = Z;
              default:
                a.hasOwnProperty(H) || He(e, t, H, null, a, Z);
            }
        }
        for (var A in a) {
          var H = a[A];
          if (((Z = l[A]), a.hasOwnProperty(A) && (H != null || Z != null)))
            switch (A) {
              case "type":
                i = H;
                break;
              case "name":
                n = H;
                break;
              case "checked":
                M = H;
                break;
              case "defaultChecked":
                G = H;
                break;
              case "value":
                c = H;
                break;
              case "defaultValue":
                o = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null) throw Error(h(137, t));
                break;
              default:
                H !== Z && He(e, t, A, H, a, Z);
            }
        }
        wu(e, c, o, y, M, G, i, n);
        return;
      case "select":
        H = c = o = A = null;
        for (i in l)
          if (((y = l[i]), l.hasOwnProperty(i) && y != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                H = y;
              default:
                a.hasOwnProperty(i) || He(e, t, i, null, a, y);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (y = l[n]),
            a.hasOwnProperty(n) && (i != null || y != null))
          )
            switch (n) {
              case "value":
                A = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                c = i;
              default:
                i !== y && He(e, t, n, i, a, y);
            }
        ((t = o),
          (l = c),
          (a = H),
          A != null
            ? ra(e, !!l, A, !1)
            : !!a != !!l &&
              (t != null ? ra(e, !!l, t, !0) : ra(e, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        H = A = null;
        for (o in l)
          if (
            ((n = l[o]),
            l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o))
          )
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(e, t, o, null, a, n);
            }
        for (c in a)
          if (
            ((n = a[c]),
            (i = l[c]),
            a.hasOwnProperty(c) && (n != null || i != null))
          )
            switch (c) {
              case "value":
                A = n;
                break;
              case "defaultValue":
                H = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(h(91));
                break;
              default:
                n !== i && He(e, t, c, n, a, i);
            }
        cs(e, A, H);
        return;
      case "option":
        for (var fe in l)
          if (
            ((A = l[fe]),
            l.hasOwnProperty(fe) && A != null && !a.hasOwnProperty(fe))
          )
            switch (fe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                He(e, t, fe, null, a, A);
            }
        for (y in a)
          if (
            ((A = a[y]),
            (H = l[y]),
            a.hasOwnProperty(y) && A !== H && (A != null || H != null))
          )
            switch (y) {
              case "selected":
                e.selected =
                  A && typeof A != "function" && typeof A != "symbol";
                break;
              default:
                He(e, t, y, A, a, H);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ue in l)
          ((A = l[ue]),
            l.hasOwnProperty(ue) &&
              A != null &&
              !a.hasOwnProperty(ue) &&
              He(e, t, ue, null, a, A));
        for (M in a)
          if (
            ((A = a[M]),
            (H = l[M]),
            a.hasOwnProperty(M) && A !== H && (A != null || H != null))
          )
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(h(137, t));
                break;
              default:
                He(e, t, M, A, a, H);
            }
        return;
      default:
        if (Tu(t)) {
          for (var Le in l)
            ((A = l[Le]),
              l.hasOwnProperty(Le) &&
                A !== void 0 &&
                !a.hasOwnProperty(Le) &&
                sc(e, t, Le, void 0, a, A));
          for (G in a)
            ((A = a[G]),
              (H = l[G]),
              !a.hasOwnProperty(G) ||
                A === H ||
                (A === void 0 && H === void 0) ||
                sc(e, t, G, A, a, H));
          return;
        }
    }
    for (var _ in l)
      ((A = l[_]),
        l.hasOwnProperty(_) &&
          A != null &&
          !a.hasOwnProperty(_) &&
          He(e, t, _, null, a, A));
    for (Z in a)
      ((A = a[Z]),
        (H = l[Z]),
        !a.hasOwnProperty(Z) ||
          A === H ||
          (A == null && H == null) ||
          He(e, t, Z, A, a, H));
  }
  var fc = null,
    oc = null;
  function Vi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function dd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function hd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function dc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hc = null;
  function bm() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === hc
        ? !1
        : ((hc = e), !0)
      : ((hc = null), !1);
  }
  var md = typeof setTimeout == "function" ? setTimeout : void 0,
    xm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vd = typeof Promise == "function" ? Promise : void 0,
    Sm =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof vd < "u"
          ? function (e) {
              return vd.resolve(null).then(e).catch(Om);
            }
          : md;
  function Om(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Tl(e) {
    return e === "head";
  }
  function yd(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((e.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var c = e.ownerDocument;
            if ((l & 1 && Mn(c.documentElement), l & 2 && Mn(c.body), l & 4))
              for (l = c.head, Mn(l), c = l.firstChild; c; ) {
                var o = c.nextSibling,
                  y = c.nodeName;
                (c[Qa] ||
                  y === "SCRIPT" ||
                  y === "STYLE" ||
                  (y === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(c),
                  (c = o));
              }
          }
          if (n === 0) {
            (e.removeChild(i), Un(t));
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    Un(t);
  }
  function mc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (mc(l), bu(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function wm(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Qa])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Bt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function jm(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Bt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function vc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function Tm(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        (t(), l.removeEventListener("DOMContentLoaded", a));
      };
      (l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var yc = null;
  function gd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function pd(e, t, l) {
    switch (((t = Vi(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(h(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(h(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(h(454));
        return e;
      default:
        throw Error(h(451));
    }
  }
  function Mn(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    bu(e);
  }
  var Lt = new Map(),
    bd = new Set();
  function Ki(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var rl = r.d;
  r.d = { f: _m, r: Em, D: Nm, C: Mm, L: zm, m: Cm, X: Dm, S: Am, M: Rm };
  function _m() {
    var e = rl.f(),
      t = qi();
    return e || t;
  }
  function Em(e) {
    var t = aa(e);
    t !== null && t.tag === 5 && t.type === "form" ? qf(t) : rl.r(e);
  }
  var Ua = typeof document > "u" ? null : document;
  function xd(e, t, l) {
    var a = Ua;
    if (a && typeof t == "string" && t) {
      var n = Mt(t);
      ((n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        bd.has(n) ||
          (bd.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            ct(t, "link", e),
            lt(t),
            a.head.appendChild(t))));
    }
  }
  function Nm(e) {
    (rl.D(e), xd("dns-prefetch", e, null));
  }
  function Mm(e, t) {
    (rl.C(e, t), xd("preconnect", e, t));
  }
  function zm(e, t, l) {
    rl.L(e, t, l);
    var a = Ua;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + Mt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + Mt(l.imageSizes) + '"]'))
        : (n += '[href="' + Mt(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = qa(e);
          break;
        case "script":
          i = Ba(e);
      }
      Lt.has(i) ||
        ((e = J(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l,
        )),
        Lt.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(zn(i))) ||
          (t === "script" && a.querySelector(Cn(i))) ||
          ((t = a.createElement("link")),
          ct(t, "link", e),
          lt(t),
          a.head.appendChild(t)));
    }
  }
  function Cm(e, t) {
    rl.m(e, t);
    var l = Ua;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ba(e);
      }
      if (
        !Lt.has(i) &&
        ((e = J({ rel: "modulepreload", href: e }, t)),
        Lt.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Cn(i))) return;
        }
        ((a = l.createElement("link")),
          ct(a, "link", e),
          lt(a),
          l.head.appendChild(a));
      }
    }
  }
  function Am(e, t, l) {
    rl.S(e, t, l);
    var a = Ua;
    if (a && e) {
      var n = na(a).hoistableStyles,
        i = qa(e);
      t = t || "default";
      var c = n.get(i);
      if (!c) {
        var o = { loading: 0, preload: null };
        if ((c = a.querySelector(zn(i)))) o.loading = 5;
        else {
          ((e = J({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = Lt.get(i)) && gc(e, l));
          var y = (c = a.createElement("link"));
          (lt(y),
            ct(y, "link", e),
            (y._p = new Promise(function (M, G) {
              ((y.onload = M), (y.onerror = G));
            })),
            y.addEventListener("load", function () {
              o.loading |= 1;
            }),
            y.addEventListener("error", function () {
              o.loading |= 2;
            }),
            (o.loading |= 4),
            Ji(c, t, a));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: o }),
          n.set(i, c));
      }
    }
  }
  function Dm(e, t) {
    rl.X(e, t);
    var l = Ua;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = Ba(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Cn(n))),
        i ||
          ((e = J({ src: e, async: !0 }, t)),
          (t = Lt.get(n)) && pc(e, t),
          (i = l.createElement("script")),
          lt(i),
          ct(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Rm(e, t) {
    rl.M(e, t);
    var l = Ua;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = Ba(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Cn(n))),
        i ||
          ((e = J({ src: e, async: !0, type: "module" }, t)),
          (t = Lt.get(n)) && pc(e, t),
          (i = l.createElement("script")),
          lt(i),
          ct(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Sd(e, t, l, a) {
    var n = (n = Y.current) ? Ki(n) : null;
    if (!n) throw Error(h(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = qa(l.href)),
            (l = na(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = qa(l.href);
          var i = na(n).hoistableStyles,
            c = i.get(e);
          if (
            (c ||
              ((n = n.ownerDocument || n),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, c),
              (i = n.querySelector(zn(e))) &&
                !i._p &&
                ((c.instance = i), (c.state.loading = 5)),
              Lt.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Lt.set(e, l),
                i || Hm(n, e, l, c.state))),
            t && a === null)
          )
            throw Error(h(528, ""));
          return c;
        }
        if (t && a !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ba(l)),
              (l = na(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(h(444, e));
    }
  }
  function qa(e) {
    return 'href="' + Mt(e) + '"';
  }
  function zn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Od(e) {
    return J({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Hm(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ct(t, "link", l),
        lt(t),
        e.head.appendChild(t));
  }
  function Ba(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function Cn(e) {
    return "script[async]" + e;
  }
  function wd(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Mt(l.href) + '"]');
          if (a) return ((t.instance = a), lt(a), a);
          var n = J({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            lt(a),
            ct(a, "style", n),
            Ji(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = qa(l.href);
          var i = e.querySelector(zn(n));
          if (i) return ((t.state.loading |= 4), (t.instance = i), lt(i), i);
          ((a = Od(l)),
            (n = Lt.get(n)) && gc(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            lt(i));
          var c = i;
          return (
            (c._p = new Promise(function (o, y) {
              ((c.onload = o), (c.onerror = y));
            })),
            ct(i, "link", a),
            (t.state.loading |= 4),
            Ji(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Ba(l.src)),
            (n = e.querySelector(Cn(i)))
              ? ((t.instance = n), lt(n), n)
              : ((a = l),
                (n = Lt.get(i)) && ((a = J({}, l)), pc(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                lt(n),
                ct(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), Ji(a, l.precedence, e));
    return t.instance;
  }
  function Ji(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        c = 0;
      c < a.length;
      c++
    ) {
      var o = a[c];
      if (o.dataset.precedence === t) i = o;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function gc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function pc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Wi = null;
  function jd(e, t, l) {
    if (Wi === null) {
      var a = new Map(),
        n = (Wi = new Map());
      n.set(l, a);
    } else ((n = Wi), (a = n.get(l)), a || ((a = new Map()), n.set(l, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Qa] ||
          i[st] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var o = a.get(c);
        o ? o.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function Td(e, t, l) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Lm(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function _d(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var An = null;
  function Um() {}
  function qm(e, t, l) {
    if (An === null) throw Error(h(475));
    var a = An;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = qa(l.href),
          i = e.querySelector(zn(n));
        if (i) {
          ((e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = Pi.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            lt(i));
          return;
        }
        ((i = e.ownerDocument || e),
          (l = Od(l)),
          (n = Lt.get(n)) && gc(l, n),
          (i = i.createElement("link")),
          lt(i));
        var c = i;
        ((c._p = new Promise(function (o, y) {
          ((c.onload = o), (c.onerror = y));
        })),
          ct(i, "link", l),
          (t.instance = i));
      }
      (a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = Pi.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  function Bm() {
    if (An === null) throw Error(h(475));
    var e = An;
    return (
      e.stylesheets && e.count === 0 && bc(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && bc(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                ((e.unsuspend = null), a());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Pi() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) bc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var $i = null;
  function bc(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        ($i = new Map()),
        t.forEach(Ym, e),
        ($i = null),
        Pi.call(e)));
  }
  function Ym(e, t) {
    if (!(t.state.loading & 4)) {
      var l = $i.get(e);
      if (l) var a = l.get(null);
      else {
        ((l = new Map()), $i.set(e, l));
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      ((n = t.instance),
        (c = n.getAttribute("data-precedence")),
        (i = l.get(c) || a),
        i === a && l.set(null, n),
        l.set(c, n),
        this.count++,
        (a = Pi.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Dn = {
    $$typeof: ye,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function Gm(e, t, l, a, n, i, c, o) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = vu(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vu(0)),
      (this.hiddenUpdates = vu(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map()));
  }
  function Ed(e, t, l, a, n, i, c, o, y, M, G, Z) {
    return (
      (e = new Gm(e, t, l, c, o, y, M, Z)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = St(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = er()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      nr(i),
      e
    );
  }
  function Nd(e) {
    return e ? ((e = ya), e) : ya;
  }
  function Md(e, t, l, a, n, i) {
    ((n = Nd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = dl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = hl(e, a, t)),
      l !== null && (_t(l, e, t), sn(l, e, t)));
  }
  function zd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function xc(e, t) {
    (zd(e, t), (e = e.alternate) && zd(e, t));
  }
  function Cd(e) {
    if (e.tag === 13) {
      var t = va(e, 67108864);
      (t !== null && _t(t, e, 67108864), xc(e, 67108864));
    }
  }
  var Fi = !0;
  function Xm(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var i = r.p;
    try {
      ((r.p = 2), Sc(e, t, l, a));
    } finally {
      ((r.p = i), (S.T = n));
    }
  }
  function Qm(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var i = r.p;
    try {
      ((r.p = 8), Sc(e, t, l, a));
    } finally {
      ((r.p = i), (S.T = n));
    }
  }
  function Sc(e, t, l, a) {
    if (Fi) {
      var n = Oc(a);
      if (n === null) (cc(e, t, a, Ii, l), Dd(e, a));
      else if (Zm(n, e, t, l, a)) a.stopPropagation();
      else if ((Dd(e, a), t & 4 && -1 < km.indexOf(e))) {
        for (; n !== null; ) {
          var i = aa(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var c = Rl(i.pendingLanes);
                  if (c !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var y = 1 << (31 - bt(c));
                      ((o.entanglements[1] |= y), (c &= ~y));
                    }
                    (kt(i), (Ae & 6) === 0 && ((Li = se() + 500), _n(0)));
                  }
                }
                break;
              case 13:
                ((o = va(i, 2)), o !== null && _t(o, i, 2), qi(), xc(i, 2));
            }
          if (((i = Oc(a)), i === null && cc(e, t, a, Ii, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else cc(e, t, a, null, l);
    }
  }
  function Oc(e) {
    return ((e = Eu(e)), wc(e));
  }
  var Ii = null;
  function wc(e) {
    if (((Ii = null), (e = la(e)), e !== null)) {
      var t = w(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = B(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Ii = e), null);
  }
  function Ad(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ge()) {
          case Ve:
            return 2;
          case Pe:
            return 8;
          case tt:
          case Vt:
            return 32;
          case Cl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jc = !1,
    _l = null,
    El = null,
    Nl = null,
    Rn = new Map(),
    Hn = new Map(),
    Ml = [],
    km =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Dd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _l = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        Nl = null;
        break;
      case "pointerover":
      case "pointerout":
        Rn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(t.pointerId);
    }
  }
  function Ln(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = aa(t)), t !== null && Cd(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Zm(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ((_l = Ln(_l, e, t, l, a, n)), !0);
      case "dragenter":
        return ((El = Ln(El, e, t, l, a, n)), !0);
      case "mouseover":
        return ((Nl = Ln(Nl, e, t, l, a, n)), !0);
      case "pointerover":
        var i = n.pointerId;
        return (Rn.set(i, Ln(Rn.get(i) || null, e, t, l, a, n)), !0);
      case "gotpointercapture":
        return (
          (i = n.pointerId),
          Hn.set(i, Ln(Hn.get(i) || null, e, t, l, a, n)),
          !0
        );
    }
    return !1;
  }
  function Rd(e) {
    var t = la(e.target);
    if (t !== null) {
      var l = w(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = B(l)), t !== null)) {
            ((e.blockedOn = t),
              qh(e.priority, function () {
                if (l.tag === 13) {
                  var a = Tt();
                  a = yu(a);
                  var n = va(l, a);
                  (n !== null && _t(n, l, a), xc(l, a));
                }
              }));
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function eu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Oc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        ((_u = a), l.target.dispatchEvent(a), (_u = null));
      } else return ((t = aa(l)), t !== null && Cd(t), (e.blockedOn = l), !1);
      t.shift();
    }
    return !0;
  }
  function Hd(e, t, l) {
    eu(e) && l.delete(t);
  }
  function Vm() {
    ((jc = !1),
      _l !== null && eu(_l) && (_l = null),
      El !== null && eu(El) && (El = null),
      Nl !== null && eu(Nl) && (Nl = null),
      Rn.forEach(Hd),
      Hn.forEach(Hd));
  }
  function tu(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      jc ||
        ((jc = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Vm)));
  }
  var lu = null;
  function Ld(e) {
    lu !== e &&
      ((lu = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        lu === e && (lu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (wc(a || l) === null) continue;
            break;
          }
          var i = aa(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            wr(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Un(e) {
    function t(y) {
      return tu(y, e);
    }
    (_l !== null && tu(_l, e),
      El !== null && tu(El, e),
      Nl !== null && tu(Nl, e),
      Rn.forEach(t),
      Hn.forEach(t));
    for (var l = 0; l < Ml.length; l++) {
      var a = Ml[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ml.length && ((l = Ml[0]), l.blockedOn === null); )
      (Rd(l), l.blockedOn === null && Ml.shift());
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          c = n[mt] || null;
        if (typeof i == "function") c || Ld(l);
        else if (c) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (c = i[mt] || null))) o = c.formAction;
            else if (wc(n) !== null) continue;
          } else o = c.action;
          (typeof o == "function" ? (l[a + 1] = o) : (l.splice(a, 3), (a -= 3)),
            Ld(l));
        }
      }
  }
  function Tc(e) {
    this._internalRoot = e;
  }
  ((au.prototype.render = Tc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(h(409));
      var l = t.current,
        a = Tt();
      Md(l, a, e, t, null, null);
    }),
    (au.prototype.unmount = Tc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Md(e.current, 2, null, e, null, null), qi(), (t[ta] = null));
        }
      }));
  function au(e) {
    this._internalRoot = e;
  }
  au.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = $c();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++);
      (Ml.splice(l, 0, e), l === 0 && Rd(e));
    }
  };
  var Ud = v.version;
  if (Ud !== "19.1.0") throw Error(h(527, Ud, "19.1.0"));
  r.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(h(188))
        : ((e = Object.keys(e).join(",")), Error(h(268, e)));
    return (
      (e = K(t)),
      (e = e !== null ? D(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Km = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nu.isDisabled && nu.supportsFiber)
      try {
        ((Dl = nu.inject(Km)), (Xe = nu));
      } catch {}
  }
  return (
    (Bn.createRoot = function (e, t) {
      if (!b(e)) throw Error(h(299));
      var l = !1,
        a = "",
        n = Ff,
        i = If,
        c = eo,
        o = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (o = t.unstable_transitionCallbacks)),
        (t = Ed(e, 1, !1, null, null, l, a, n, i, c, o, null)),
        (e[ta] = t.current),
        rc(e),
        new Tc(t)
      );
    }),
    (Bn.hydrateRoot = function (e, t, l) {
      if (!b(e)) throw Error(h(299));
      var a = !1,
        n = "",
        i = Ff,
        c = If,
        o = eo,
        y = null,
        M = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (o = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (y = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (M = l.formState)),
        (t = Ed(e, 1, !0, t, l ?? null, a, n, i, c, o, y, M)),
        (t.context = Nd(null)),
        (l = t.current),
        (a = Tt()),
        (a = yu(a)),
        (n = dl(a)),
        (n.callback = null),
        hl(l, n, a),
        (l = a),
        (t.current.lanes = l),
        Xa(t, l),
        kt(t),
        (e[ta] = t.current),
        rc(e),
        new au(t)
      );
    }),
    (Bn.version = "19.1.0"),
    Bn
  );
}
var Kd;
function nv() {
  if (Kd) return Nc.exports;
  Kd = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (v) {
        console.error(v);
      }
  }
  return (f(), (Nc.exports = av()), Nc.exports);
}
var iv = nv(),
  xh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Jd = Il.createContext && Il.createContext(xh),
  uv = ["attr", "size", "title"];
function rv(f, v) {
  if (f == null) return {};
  var g = cv(f, v),
    h,
    b;
  if (Object.getOwnPropertySymbols) {
    var w = Object.getOwnPropertySymbols(f);
    for (b = 0; b < w.length; b++)
      ((h = w[b]),
        !(v.indexOf(h) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(f, h) &&
          (g[h] = f[h]));
  }
  return g;
}
function cv(f, v) {
  if (f == null) return {};
  var g = {};
  for (var h in f)
    if (Object.prototype.hasOwnProperty.call(f, h)) {
      if (v.indexOf(h) >= 0) continue;
      g[h] = f[h];
    }
  return g;
}
function ru() {
  return (
    (ru = Object.assign
      ? Object.assign.bind()
      : function (f) {
          for (var v = 1; v < arguments.length; v++) {
            var g = arguments[v];
            for (var h in g)
              Object.prototype.hasOwnProperty.call(g, h) && (f[h] = g[h]);
          }
          return f;
        }),
    ru.apply(this, arguments)
  );
}
function Wd(f, v) {
  var g = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(f);
    (v &&
      (h = h.filter(function (b) {
        return Object.getOwnPropertyDescriptor(f, b).enumerable;
      })),
      g.push.apply(g, h));
  }
  return g;
}
function cu(f) {
  for (var v = 1; v < arguments.length; v++) {
    var g = arguments[v] != null ? arguments[v] : {};
    v % 2
      ? Wd(Object(g), !0).forEach(function (h) {
          sv(f, h, g[h]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(g))
        : Wd(Object(g)).forEach(function (h) {
            Object.defineProperty(f, h, Object.getOwnPropertyDescriptor(g, h));
          });
  }
  return f;
}
function sv(f, v, g) {
  return (
    (v = fv(v)),
    v in f
      ? Object.defineProperty(f, v, {
          value: g,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (f[v] = g),
    f
  );
}
function fv(f) {
  var v = ov(f, "string");
  return typeof v == "symbol" ? v : v + "";
}
function ov(f, v) {
  if (typeof f != "object" || !f) return f;
  var g = f[Symbol.toPrimitive];
  if (g !== void 0) {
    var h = g.call(f, v);
    if (typeof h != "object") return h;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (v === "string" ? String : Number)(f);
}
function Sh(f) {
  return (
    f &&
    f.map((v, g) =>
      Il.createElement(v.tag, cu({ key: g }, v.attr), Sh(v.child)),
    )
  );
}
function Et(f) {
  return (v) =>
    Il.createElement(dv, ru({ attr: cu({}, f.attr) }, v), Sh(f.child));
}
function dv(f) {
  var v = (g) => {
    var { attr: h, size: b, title: w } = f,
      B = rv(f, uv),
      V = b || g.size || "1em",
      K;
    return (
      g.className && (K = g.className),
      f.className && (K = (K ? K + " " : "") + f.className),
      Il.createElement(
        "svg",
        ru(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          g.attr,
          h,
          B,
          {
            className: K,
            style: cu(cu({ color: f.color || g.color }, g.style), f.style),
            height: V,
            width: V,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        w && Il.createElement("title", null, w),
        f.children,
      )
    );
  };
  return Jd !== void 0
    ? Il.createElement(Jd.Consumer, null, (g) => v(g))
    : v(xh);
}
function hv(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(f);
}
function mv(f) {
  return Et({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(f);
}
function Oh(f) {
  return Et({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
        },
        child: [],
      },
    ],
  })(f);
}
function vv(f) {
  return Et({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
        },
        child: [],
      },
    ],
  })(f);
}
function yv(f) {
  return Et({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
        child: [],
      },
    ],
  })(f);
}
function gv(f) {
  return Et({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
        },
        child: [],
      },
    ],
  })(f);
}
function Pd(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z",
        },
        child: [],
      },
    ],
  })(f);
}
function pv(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M403.3 32H285.1c-3.7 0-7.2 1.5-9.8 4.1L40.1 272.2c-10.8 10.8-10.8 28.4 0 39.2l111.5 112.5C162.4 434.7 179 440 195 426l231.9-232.3c2.6-2.6 4.1-6.1 4.1-9.8V59.7c0-15.3-12.4-27.7-27.7-27.7zm-45.9 107.5c-19.6 2.1-36-14.4-33.9-33.9 1.5-14.3 13-25.7 27.3-27.3 19.6-2.1 36 14.4 33.9 33.9-1.5 14.3-13 25.8-27.3 27.3z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M456 80.3V194c0 3.7-1.5 7.2-4.1 9.8L192.7 463l8.8 8.8c10.8 10.8 28.4 10.8 39.2 0l235.2-236.2c2.6-2.6 4.1-6.1 4.1-9.8V107.7c0-14-10.5-25.6-24-27.4z",
        },
        child: [],
      },
    ],
  })(f);
}
function bv(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z",
        },
        child: [],
      },
    ],
  })(f);
}
function xv(f) {
  return Et({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(f);
}
function Sv(f) {
  return Et({
    attr: { version: "1.1", viewBox: "0 0 17 17" },
    child: [
      { tag: "g", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M13 10v-10h-13v13h13v-3zM1 1h11v8h-0.755l-2.564-3.319-1.159 1.214-2.248-3.881-3.576 5.986h-0.698v-8zM9.982 9h-7.119l2.398-4.014 2.064 3.564 1.275-1.337 1.382 1.787zM1 12v-2h11v2h-11zM17 3v13h-13v-1.984h1v0.984h11v-11h-2v-1h3z",
        },
        child: [],
      },
    ],
  })(f);
}
// Theme context and provider for light/dark mode
const ThemeContext = We.createContext({ theme: "dark", toggleTheme: () => {} });

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = We.useState("dark");

  const applyTheme = (next) => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;
    if (next === "light") {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#111111";
    } else {
      body.style.backgroundColor = "#000000";
      body.style.color = "#ffffff";
    }
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      try {
        window.localStorage.setItem("theme", next);
      } catch {}
    }
    applyTheme(next);
  };

  We.useEffect(() => {
    let initial = "dark";
    try {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") initial = saved;
    } catch {}
    setTheme(initial);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", initial);
    }
    applyTheme(initial);
  }, []);

  return s.jsx(ThemeContext.Provider, {
    value: { theme, toggleTheme },
    children,
  });
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = We.useContext(ThemeContext);
  return s.jsx("button", {
    onClick: toggleTheme,
    className:
      "ml-4 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent border border-primary/60",
    "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    children:
      theme === "dark"
        ? s.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 text-yellow-300",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
            }),
          })
        : s.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 text-gray-800",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: s.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
            }),
          }),
  });
};

const Ac = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about-us" },
    { name: "Pricing", href: "#offer-packages" },
    { name: "Gallery", href: "#room-gallery" },
    { name: "How It Works", href: "#how-it-works" },
  ],
  Ov = [
    { name: "Home", Icon: gv, href: "#hero" },
    { name: "About", Icon: xv, href: "#about-us" },
    { name: "Pricing", Icon: pv, href: "#offer-packages" },
    { name: "Gallery", Icon: Sv, href: "#room-gallery" },
    { name: "Menu", Icon: xv, href: "#menu" },
  ],
  su = "/logo.png",
  wv = ({ active: f, handleNavClick: v, navbarOpen: g, navbarToggler: h }) =>
    s.jsx("section", {
      className: "fixed-menu sm:hidden block",
      children: s.jsx("div", {
        className: "fixed bottom-[-2px] left-0 right-0 w-full z-[99]",
        children: s.jsxs("div", {
          className:
            "studio-logo before:content-[''] before:absolute before:inset-0 relative h-[78px]",
          children: [
            s.jsx("a", {
              href: "/",
              class:
                "w-[78px] h-[78px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-lg flex items-center justify-center overflow-hidden",
              children: s.jsx("img", {
                src: su,
                alt: "logo",
                width: 80,
                height: 20,
                className: "w-full h-full object-contain",
              }),
            }),
            s.jsx("div", {
              className: "h-full flex items-center justify-center gap-4",
              children: Ov.map((b, w) =>
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("div", {
                      className: "w-1/5",
                      children: s.jsxs("a", {
                        href: "",
                        className: `${f === b.href ? "text-primary" : "text-white"} text-xs flex flex-col items-center`,
                        onClick: (B) => {
                          (B.preventDefault(),
                            b.href === "#menu" ? h() : v(b.href));
                        },
                        children: [
                          s.jsx(b.Icon, { className: "text-lg mb-2" }),
                          s.jsx("span", {
                            className: "block text-center",
                            children: b.name,
                          }),
                        ],
                      }),
                    }),
                    w === 1 && s.jsx("div", { className: "w-1/5" }),
                  ],
                }),
              ),
            }),
          ],
        }),
      }),
    });
function jv() {
  const [f, v] = We.useState(!1),
    [g, h] = We.useState("#hero"),
    [b, w] = We.useState(-1),
    B = () => {
      v(!f);
    },
    [V, K] = We.useState(!1),
    D = () => {
      window.scrollY >= 80 ? K(!0) : K(!1);
    },
    J = (te) => {
      w(b === te ? -1 : te);
    },
    ae = (te) => {
      const me = document.querySelector(te);
      if (me) {
        const $ = me.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: $, behavior: "smooth" });
        const he = Ac.some((oe) => {
          var ve;
          return (ve = oe.submenu) == null
            ? void 0
            : ve.some((ye) => ye.path === te);
        });
        h(he ? "products" : te);
      }
    };
  return (
    We.useEffect(() => {
      window.addEventListener("scroll", D);
    }),
    We.useEffect(() => {
      const te = () => {
        let ce = null,
          $ = 1 / 0;
        for (const he of Ac) {
          if (he.href) {
            const oe = document.querySelector(he.href);
            if (oe) {
              const ve = Math.abs(oe.getBoundingClientRect().top - 80);
              ve < $ && (($ = ve), (ce = he.href));
            }
          }
          if (he.submenu)
            for (const oe of he.submenu) {
              const ve = document.querySelector(oe.path);
              if (ve) {
                const ye = Math.abs(ve.getBoundingClientRect().top - 80);
                ye < $ && (($ = ye), (ce = "products"));
              }
            }
        }
        ce &&
          (h(ce === "products" ? null : `#${ce}`),
          h((he) => (ce === "products" ? "products" : ce)));
      };
      return (
        window.addEventListener("scroll", te, { passive: !0 }),
        te(),
        () => window.removeEventListener("scroll", te)
      );
    }, []),
    We.useEffect(() => {
      const { classList: te } = document.body;
      return (
        f ? te.add("overflow-hidden") : te.remove("overflow-hidden"),
        () => te.remove("overflow-hidden")
      );
    }, [f]),
    s.jsxs(s.Fragment, {
      children: [
        s.jsx("header", {
          className: `header top-0 left-0 z-99 flex w-full items-center ${V ? "shadow-sticky fixed z-9999 bg-black/80 backdrop-blur-xs transition" : "absolute bg-transparent"}`,
          children: s.jsx("div", {
            className: "container",
            children: s.jsxs("div", {
              className: "relative -mx-4 flex items-center justify-between",
              children: [
                s.jsx("div", {
                  className: "w-60 max-w-full px-4 xl:mr-12",
                  children: s.jsxs("a", {
                    href: "/",
                    className: `header-logo block w-full ${V ? "md:py-5 py-2 lg:py-2" : "py-6"} `,
                    children: [
                      s.jsx("img", {
                        src: su,
                        alt: "logo",
                        width: 80,
                        height: 20,
                        className: "w-full",
                      }),
                      s.jsx("img", {
                        src: su,
                        alt: "logo",
                        width: 80,
                        height: 20,
                        className: "w-full hidden",
                      }),
                    ],
                  }),
                }),
                s.jsxs("div", {
                  className: "flex w-full items-center justify-between px-4",
                  children: [
                    s.jsxs("div", {
                      className: "lg:flex grow justify-center",
                      children: [
                        s.jsxs("button", {
                          onClick: B,
                          id: "navbarToggler",
                          "aria-label": "Mobile Menu",
                          className:
                            "ring-primary !bg-transparent absolute top-1/2 right-4 translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden sm:block hidden outline outline-white",
                          children: [
                            s.jsx("span", {
                              className: `relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${f ? "top-[7px] rotate-45" : " "}`,
                            }),
                            s.jsx("span", {
                              className: `relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${f ? "opacity-0" : " "}`,
                            }),
                            s.jsx("span", {
                              className: `relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${f ? "top-[-8px] -rotate-45" : " "}`,
                            }),
                          ],
                        }),
                        s.jsx("nav", {
                          id: "navbarCollapse",
                          className: `grow navbar border-body-color/50 fixed top-0 bottom-0 lg:h-auto h-screen z-50 w-[250px] rounded-r-lg border-[.5px] bg-black px-6 py-4 duration-700 lg:visible lg:static lg:w-auto lg:border-none  lg:!bg-transparent lg:opacity-100 ${f ? "left-0 opacity-100" : "left-[-100%] opacity-0"}`,
                          children: s.jsx("ul", {
                            className: "block lg:flex lg:space-x-12",
                            children: Ac.map((te, me) =>
                              s.jsx(
                                "li",
                                {
                                  className: "group relative",
                                  children: te.href
                                    ? s.jsx("a", {
                                        href: te.href,
                                        className: `flex py-2 md:text-base text-sm font-bold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${g === te.href ? "text-primary" : "text-white hover:text-primary"}`,
                                        onClick: (ce) => {
                                          (ce.preventDefault(), ae(te.href));
                                        },
                                        children: te.name,
                                      })
                                    : s.jsxs(s.Fragment, {
                                        children: [
                                          s.jsxs("p", {
                                            onClick: () => J(me),
                                            className: `flex py-2 md:text-base text-sm font-bold lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${g === "products" ? "text-primary" : "text-white hover:text-primary"}`,
                                            children: [
                                              te.name,
                                              s.jsx("span", {
                                                className: "pl-3",
                                                children: s.jsx("svg", {
                                                  width: "25",
                                                  height: "24",
                                                  viewBox: "0 0 25 24",
                                                  children: s.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",
                                                    fill: "currentColor",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          s.jsx("div", {
                                            className: `submenu relative top-full left-0 rounded-sm bg-black/80 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${b === me ? "block" : "hidden"}`,
                                            children: te.submenu.map((ce, $) =>
                                              s.jsx(
                                                "a",
                                                {
                                                  href: ce.path,
                                                  className:
                                                    "text-white hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white",
                                                  onClick: (he) => {
                                                    (he.preventDefault(),
                                                      ae(ce.path));
                                                  },
                                                  children: ce.title,
                                                },
                                                $,
                                              ),
                                            ),
                                          }),
                                        ],
                                      }),
                                },
                                me,
                              ),
                            ),
                          }),
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "flex items-center justify-end pr-24 lg:pr-0",
                      children: s.jsx("a", {
                        href: "tel:+91-904 3463200",
                        className:
                          "hidden px-7 py-2 md:text-base text-sm text-black font-bold bg-[#DBA160] hover:opacity-70 md:block rounded-4xl",
                        children: "Contact us",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        s.jsx(Tv, { navbarOpen: f, navbarToggler: B }),
        s.jsx(wv, {
          active: g,
          handleNavClick: ae,
          navbarOpen: f,
          navbarToggler: B,
        }),
      ],
    })
  );
}
const Tv = ({ navbarOpen: f, navbarToggler: v }) =>
  s.jsx("div", {
    className: `fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 backdrop-blur-xs ${f ? "opacity-100" : "opacity-0 pointer-events-none"}`,
    onClick: v,
  });
var Dc = {},
  Rc = {},
  Yn = {},
  Hc = {},
  $d;
function _v() {
  return (
    $d ||
      (($d = 1),
      (function (f) {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.default = void 0));
        var v = {
          animating: !1,
          autoplaying: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          dragging: !1,
          edgeDragged: !1,
          initialized: !1,
          lazyLoadedList: [],
          listHeight: null,
          listWidth: null,
          scrolling: !1,
          slideCount: null,
          slideHeight: null,
          slideWidth: null,
          swipeLeft: null,
          swiped: !1,
          swiping: !1,
          touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
          trackStyle: {},
          trackWidth: 0,
          targetSlide: 0,
        };
        f.default = v;
      })(Hc)),
    Hc
  );
}
var Lc, Fd;
function Ev() {
  if (Fd) return Lc;
  Fd = 1;
  var f = "Expected a function",
    v = NaN,
    g = "[object Symbol]",
    h = /^\s+|\s+$/g,
    b = /^[-+]0x[0-9a-f]+$/i,
    w = /^0b[01]+$/i,
    B = /^0o[0-7]+$/i,
    V = parseInt,
    K = typeof iu == "object" && iu && iu.Object === Object && iu,
    D = typeof self == "object" && self && self.Object === Object && self,
    J = K || D || Function("return this")(),
    ae = Object.prototype,
    te = ae.toString,
    me = Math.max,
    ce = Math.min,
    $ = function () {
      return J.Date.now();
    };
  function he(x, E, R) {
    var W,
      T,
      m,
      q,
      X,
      C,
      L = 0,
      P = !1,
      S = !1,
      r = !0;
    if (typeof x != "function") throw new TypeError(f);
    ((E = Te(E) || 0),
      oe(R) &&
        ((P = !!R.leading),
        (S = "maxWait" in R),
        (m = S ? me(Te(R.maxWait) || 0, E) : m),
        (r = "trailing" in R ? !!R.trailing : r)));
    function I(F) {
      var ne = W,
        de = T;
      return ((W = T = void 0), (L = F), (q = x.apply(de, ne)), q);
    }
    function p(F) {
      return ((L = F), (X = setTimeout(j, E)), P ? I(F) : q);
    }
    function u(F) {
      var ne = F - C,
        de = F - L,
        xe = E - ne;
      return S ? ce(xe, m - de) : xe;
    }
    function d(F) {
      var ne = F - C,
        de = F - L;
      return C === void 0 || ne >= E || ne < 0 || (S && de >= m);
    }
    function j() {
      var F = $();
      if (d(F)) return z(F);
      X = setTimeout(j, u(F));
    }
    function z(F) {
      return ((X = void 0), r && W ? I(F) : ((W = T = void 0), q));
    }
    function U() {
      (X !== void 0 && clearTimeout(X), (L = 0), (W = C = T = X = void 0));
    }
    function k() {
      return X === void 0 ? q : z($());
    }
    function Y() {
      var F = $(),
        ne = d(F);
      if (((W = arguments), (T = this), (C = F), ne)) {
        if (X === void 0) return p(C);
        if (S) return ((X = setTimeout(j, E)), I(C));
      }
      return (X === void 0 && (X = setTimeout(j, E)), q);
    }
    return ((Y.cancel = U), (Y.flush = k), Y);
  }
  function oe(x) {
    var E = typeof x;
    return !!x && (E == "object" || E == "function");
  }
  function ve(x) {
    return !!x && typeof x == "object";
  }
  function ye(x) {
    return typeof x == "symbol" || (ve(x) && te.call(x) == g);
  }
  function Te(x) {
    if (typeof x == "number") return x;
    if (ye(x)) return v;
    if (oe(x)) {
      var E = typeof x.valueOf == "function" ? x.valueOf() : x;
      x = oe(E) ? E + "" : E;
    }
    if (typeof x != "string") return x === 0 ? x : +x;
    x = x.replace(h, "");
    var R = w.test(x);
    return R || B.test(x) ? V(x.slice(2), R ? 2 : 8) : b.test(x) ? v : +x;
  }
  return ((Lc = he), Lc);
}
var Uc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ var Id;
function hu() {
  return (
    Id ||
      ((Id = 1),
      (function (f) {
        (function () {
          var v = {}.hasOwnProperty;
          function g() {
            for (var w = "", B = 0; B < arguments.length; B++) {
              var V = arguments[B];
              V && (w = b(w, h(V)));
            }
            return w;
          }
          function h(w) {
            if (typeof w == "string" || typeof w == "number") return w;
            if (typeof w != "object") return "";
            if (Array.isArray(w)) return g.apply(null, w);
            if (
              w.toString !== Object.prototype.toString &&
              !w.toString.toString().includes("[native code]")
            )
              return w.toString();
            var B = "";
            for (var V in w) v.call(w, V) && w[V] && (B = b(B, V));
            return B;
          }
          function b(w, B) {
            return B ? (w ? w + " " + B : w + B) : w;
          }
          f.exports
            ? ((g.default = g), (f.exports = g))
            : (window.classNames = g);
        })();
      })(Uc)),
    Uc.exports
  );
}
var ee = {},
  qc = {},
  eh;
function wh() {
  return (
    eh ||
      ((eh = 1),
      (function (f) {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.default = void 0));
        var v = g(Zt());
        function g(b) {
          return b && b.__esModule ? b : { default: b };
        }
        var h = {
          accessibility: !0,
          adaptiveHeight: !1,
          afterChange: null,
          appendDots: function (w) {
            return v.default.createElement(
              "ul",
              { style: { display: "block" } },
              w,
            );
          },
          arrows: !0,
          autoplay: !1,
          autoplaySpeed: 3e3,
          beforeChange: null,
          centerMode: !1,
          centerPadding: "50px",
          className: "",
          cssEase: "ease",
          customPaging: function (w) {
            return v.default.createElement("button", null, w + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: null,
          nextArrow: null,
          onEdge: null,
          onInit: null,
          onLazyLoadError: null,
          onReInit: null,
          pauseOnDotsHover: !1,
          pauseOnFocus: !1,
          pauseOnHover: !0,
          prevArrow: null,
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "div",
          slidesPerRow: 1,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
          swipe: !0,
          swipeEvent: null,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          waitForAnimate: !0,
          asNavFor: null,
          unslick: !1,
        };
        f.default = h;
      })(qc)),
    qc
  );
}
var th;
function Qn() {
  if (th) return ee;
  ((th = 1),
    Object.defineProperty(ee, "__esModule", { value: !0 }),
    (ee.checkSpecKeys =
      ee.checkNavigable =
      ee.changeSlide =
      ee.canUseDOM =
      ee.canGoNext =
        void 0),
    (ee.clamp = D),
    (ee.extractObject = void 0),
    (ee.filterSettings = I),
    (ee.validSettings =
      ee.swipeStart =
      ee.swipeMove =
      ee.swipeEnd =
      ee.slidesOnRight =
      ee.slidesOnLeft =
      ee.slideHandler =
      ee.siblingDirection =
      ee.safePreventDefault =
      ee.lazyStartIndex =
      ee.lazySlidesOnRight =
      ee.lazySlidesOnLeft =
      ee.lazyEndIndex =
      ee.keyHandler =
      ee.initializedState =
      ee.getWidth =
      ee.getTrackLeft =
      ee.getTrackCSS =
      ee.getTrackAnimateCSS =
      ee.getTotalSlides =
      ee.getSwipeDirection =
      ee.getSlideCount =
      ee.getRequiredLazySlides =
      ee.getPreClones =
      ee.getPostClones =
      ee.getOnDemandLazySlides =
      ee.getNavigableIndexes =
      ee.getHeight =
        void 0));
  var f = g(Zt()),
    v = g(wh());
  function g(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function h(p) {
    "@babel/helpers - typeof";
    return (
      (h =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (u) {
              return typeof u;
            }
          : function (u) {
              return u &&
                typeof Symbol == "function" &&
                u.constructor === Symbol &&
                u !== Symbol.prototype
                ? "symbol"
                : typeof u;
            }),
      h(p)
    );
  }
  function b(p, u) {
    var d = Object.keys(p);
    if (Object.getOwnPropertySymbols) {
      var j = Object.getOwnPropertySymbols(p);
      (u &&
        (j = j.filter(function (z) {
          return Object.getOwnPropertyDescriptor(p, z).enumerable;
        })),
        d.push.apply(d, j));
    }
    return d;
  }
  function w(p) {
    for (var u = 1; u < arguments.length; u++) {
      var d = arguments[u] != null ? arguments[u] : {};
      u % 2
        ? b(Object(d), !0).forEach(function (j) {
            B(p, j, d[j]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(d))
          : b(Object(d)).forEach(function (j) {
              Object.defineProperty(
                p,
                j,
                Object.getOwnPropertyDescriptor(d, j),
              );
            });
    }
    return p;
  }
  function B(p, u, d) {
    return (
      (u = V(u)),
      u in p
        ? Object.defineProperty(p, u, {
            value: d,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (p[u] = d),
      p
    );
  }
  function V(p) {
    var u = K(p, "string");
    return h(u) == "symbol" ? u : String(u);
  }
  function K(p, u) {
    if (h(p) != "object" || !p) return p;
    var d = p[Symbol.toPrimitive];
    if (d !== void 0) {
      var j = d.call(p, u);
      if (h(j) != "object") return j;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (u === "string" ? String : Number)(p);
  }
  function D(p, u, d) {
    return Math.max(u, Math.min(p, d));
  }
  var J = (ee.safePreventDefault = function (u) {
      var d = ["onTouchStart", "onTouchMove", "onWheel"];
      d.includes(u._reactName) || u.preventDefault();
    }),
    ae = (ee.getOnDemandLazySlides = function (u) {
      for (var d = [], j = te(u), z = me(u), U = j; U < z; U++)
        u.lazyLoadedList.indexOf(U) < 0 && d.push(U);
      return d;
    });
  ee.getRequiredLazySlides = function (u) {
    for (var d = [], j = te(u), z = me(u), U = j; U < z; U++) d.push(U);
    return d;
  };
  var te = (ee.lazyStartIndex = function (u) {
      return u.currentSlide - ce(u);
    }),
    me = (ee.lazyEndIndex = function (u) {
      return u.currentSlide + $(u);
    }),
    ce = (ee.lazySlidesOnLeft = function (u) {
      return u.centerMode
        ? Math.floor(u.slidesToShow / 2) +
            (parseInt(u.centerPadding) > 0 ? 1 : 0)
        : 0;
    }),
    $ = (ee.lazySlidesOnRight = function (u) {
      return u.centerMode
        ? Math.floor((u.slidesToShow - 1) / 2) +
            1 +
            (parseInt(u.centerPadding) > 0 ? 1 : 0)
        : u.slidesToShow;
    }),
    he = (ee.getWidth = function (u) {
      return (u && u.offsetWidth) || 0;
    }),
    oe = (ee.getHeight = function (u) {
      return (u && u.offsetHeight) || 0;
    }),
    ve = (ee.getSwipeDirection = function (u) {
      var d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        j,
        z,
        U,
        k;
      return (
        (j = u.startX - u.curX),
        (z = u.startY - u.curY),
        (U = Math.atan2(z, j)),
        (k = Math.round((U * 180) / Math.PI)),
        k < 0 && (k = 360 - Math.abs(k)),
        (k <= 45 && k >= 0) || (k <= 360 && k >= 315)
          ? "left"
          : k >= 135 && k <= 225
            ? "right"
            : d === !0
              ? k >= 35 && k <= 135
                ? "up"
                : "down"
              : "vertical"
      );
    }),
    ye = (ee.canGoNext = function (u) {
      var d = !0;
      return (
        u.infinite ||
          (((u.centerMode && u.currentSlide >= u.slideCount - 1) ||
            u.slideCount <= u.slidesToShow ||
            u.currentSlide >= u.slideCount - u.slidesToShow) &&
            (d = !1)),
        d
      );
    });
  ((ee.extractObject = function (u, d) {
    var j = {};
    return (
      d.forEach(function (z) {
        return (j[z] = u[z]);
      }),
      j
    );
  }),
    (ee.initializedState = function (u) {
      var d = f.default.Children.count(u.children),
        j = u.listRef,
        z = Math.ceil(he(j)),
        U = u.trackRef && u.trackRef.node,
        k = Math.ceil(he(U)),
        Y;
      if (u.vertical) Y = z;
      else {
        var F = u.centerMode && parseInt(u.centerPadding) * 2;
        (typeof u.centerPadding == "string" &&
          u.centerPadding.slice(-1) === "%" &&
          (F *= z / 100),
          (Y = Math.ceil((z - F) / u.slidesToShow)));
      }
      var ne = j && oe(j.querySelector('[data-index="0"]')),
        de = ne * u.slidesToShow,
        xe = u.currentSlide === void 0 ? u.initialSlide : u.currentSlide;
      u.rtl && u.currentSlide === void 0 && (xe = d - 1 - u.initialSlide);
      var Ee = u.lazyLoadedList || [],
        Ne = ae(w(w({}, u), {}, { currentSlide: xe, lazyLoadedList: Ee }));
      Ee = Ee.concat(Ne);
      var je = {
        slideCount: d,
        slideWidth: Y,
        listWidth: z,
        trackWidth: k,
        currentSlide: xe,
        slideHeight: ne,
        listHeight: de,
        lazyLoadedList: Ee,
      };
      return (
        u.autoplaying === null && u.autoplay && (je.autoplaying = "playing"),
        je
      );
    }),
    (ee.slideHandler = function (u) {
      var d = u.waitForAnimate,
        j = u.animating,
        z = u.fade,
        U = u.infinite,
        k = u.index,
        Y = u.slideCount,
        F = u.lazyLoad,
        ne = u.currentSlide,
        de = u.centerMode,
        xe = u.slidesToScroll,
        Ee = u.slidesToShow,
        Ne = u.useCSS,
        je = u.lazyLoadedList;
      if (d && j) return {};
      var pe = k,
        Me,
        Ze,
        se,
        Ge = {},
        Ve = {},
        Pe = U ? k : D(k, 0, Y - 1);
      if (z) {
        if (!U && (k < 0 || k >= Y)) return {};
        (k < 0 ? (pe = k + Y) : k >= Y && (pe = k - Y),
          F && je.indexOf(pe) < 0 && (je = je.concat(pe)),
          (Ge = {
            animating: !0,
            currentSlide: pe,
            lazyLoadedList: je,
            targetSlide: pe,
          }),
          (Ve = { animating: !1, targetSlide: pe }));
      } else
        ((Me = pe),
          pe < 0
            ? ((Me = pe + Y),
              U ? Y % xe !== 0 && (Me = Y - (Y % xe)) : (Me = 0))
            : !ye(u) && pe > ne
              ? (pe = Me = ne)
              : de && pe >= Y
                ? ((pe = U ? Y : Y - 1), (Me = U ? 0 : Y - 1))
                : pe >= Y &&
                  ((Me = pe - Y), U ? Y % xe !== 0 && (Me = 0) : (Me = Y - Ee)),
          !U && pe + Ee >= Y && (Me = Y - Ee),
          (Ze = m(w(w({}, u), {}, { slideIndex: pe }))),
          (se = m(w(w({}, u), {}, { slideIndex: Me }))),
          U || (Ze === se && (pe = Me), (Ze = se)),
          F && (je = je.concat(ae(w(w({}, u), {}, { currentSlide: pe })))),
          Ne
            ? ((Ge = {
                animating: !0,
                currentSlide: Me,
                trackStyle: T(w(w({}, u), {}, { left: Ze })),
                lazyLoadedList: je,
                targetSlide: Pe,
              }),
              (Ve = {
                animating: !1,
                currentSlide: Me,
                trackStyle: W(w(w({}, u), {}, { left: se })),
                swipeLeft: null,
                targetSlide: Pe,
              }))
            : (Ge = {
                currentSlide: Me,
                trackStyle: W(w(w({}, u), {}, { left: se })),
                lazyLoadedList: je,
                targetSlide: Pe,
              }));
      return { state: Ge, nextState: Ve };
    }),
    (ee.changeSlide = function (u, d) {
      var j,
        z,
        U,
        k,
        Y,
        F = u.slidesToScroll,
        ne = u.slidesToShow,
        de = u.slideCount,
        xe = u.currentSlide,
        Ee = u.targetSlide,
        Ne = u.lazyLoad,
        je = u.infinite;
      if (
        ((k = de % F !== 0),
        (j = k ? 0 : (de - xe) % F),
        d.message === "previous")
      )
        ((U = j === 0 ? F : ne - j),
          (Y = xe - U),
          Ne && !je && ((z = xe - U), (Y = z === -1 ? de - 1 : z)),
          je || (Y = Ee - F));
      else if (d.message === "next")
        ((U = j === 0 ? F : j),
          (Y = xe + U),
          Ne && !je && (Y = ((xe + F) % de) + j),
          je || (Y = Ee + F));
      else if (d.message === "dots") Y = d.index * d.slidesToScroll;
      else if (d.message === "children") {
        if (((Y = d.index), je)) {
          var pe = L(w(w({}, u), {}, { targetSlide: Y }));
          Y > d.currentSlide && pe === "left"
            ? (Y = Y - de)
            : Y < d.currentSlide && pe === "right" && (Y = Y + de);
        }
      } else d.message === "index" && (Y = Number(d.index));
      return Y;
    }),
    (ee.keyHandler = function (u, d, j) {
      return u.target.tagName.match("TEXTAREA|INPUT|SELECT") || !d
        ? ""
        : u.keyCode === 37
          ? j
            ? "next"
            : "previous"
          : u.keyCode === 39
            ? j
              ? "previous"
              : "next"
            : "";
    }),
    (ee.swipeStart = function (u, d, j) {
      return (
        u.target.tagName === "IMG" && J(u),
        !d || (!j && u.type.indexOf("mouse") !== -1)
          ? ""
          : {
              dragging: !0,
              touchObject: {
                startX: u.touches ? u.touches[0].pageX : u.clientX,
                startY: u.touches ? u.touches[0].pageY : u.clientY,
                curX: u.touches ? u.touches[0].pageX : u.clientX,
                curY: u.touches ? u.touches[0].pageY : u.clientY,
              },
            }
      );
    }),
    (ee.swipeMove = function (u, d) {
      var j = d.scrolling,
        z = d.animating,
        U = d.vertical,
        k = d.swipeToSlide,
        Y = d.verticalSwiping,
        F = d.rtl,
        ne = d.currentSlide,
        de = d.edgeFriction,
        xe = d.edgeDragged,
        Ee = d.onEdge,
        Ne = d.swiped,
        je = d.swiping,
        pe = d.slideCount,
        Me = d.slidesToScroll,
        Ze = d.infinite,
        se = d.touchObject,
        Ge = d.swipeEvent,
        Ve = d.listHeight,
        Pe = d.listWidth;
      if (!j) {
        if (z) return J(u);
        U && k && Y && J(u);
        var tt,
          Vt = {},
          Cl = m(d);
        ((se.curX = u.touches ? u.touches[0].pageX : u.clientX),
          (se.curY = u.touches ? u.touches[0].pageY : u.clientY),
          (se.swipeLength = Math.round(
            Math.sqrt(Math.pow(se.curX - se.startX, 2)),
          )));
        var Zn = Math.round(Math.sqrt(Math.pow(se.curY - se.startY, 2)));
        if (!Y && !je && Zn > 10) return { scrolling: !0 };
        Y && (se.swipeLength = Zn);
        var Al = (F ? -1 : 1) * (se.curX > se.startX ? 1 : -1);
        Y && (Al = se.curY > se.startY ? 1 : -1);
        var Dl = Math.ceil(pe / Me),
          Xe = ve(d.touchObject, Y),
          ht = se.swipeLength;
        return (
          Ze ||
            (((ne === 0 && (Xe === "right" || Xe === "down")) ||
              (ne + 1 >= Dl && (Xe === "left" || Xe === "up")) ||
              (!ye(d) && (Xe === "left" || Xe === "up"))) &&
              ((ht = se.swipeLength * de),
              xe === !1 && Ee && (Ee(Xe), (Vt.edgeDragged = !0)))),
          !Ne && Ge && (Ge(Xe), (Vt.swiped = !0)),
          U
            ? (tt = Cl + ht * (Ve / Pe) * Al)
            : F
              ? (tt = Cl - ht * Al)
              : (tt = Cl + ht * Al),
          Y && (tt = Cl + ht * Al),
          (Vt = w(
            w({}, Vt),
            {},
            {
              touchObject: se,
              swipeLeft: tt,
              trackStyle: W(w(w({}, d), {}, { left: tt })),
            },
          )),
          Math.abs(se.curX - se.startX) < Math.abs(se.curY - se.startY) * 0.8 ||
            (se.swipeLength > 10 && ((Vt.swiping = !0), J(u))),
          Vt
        );
      }
    }),
    (ee.swipeEnd = function (u, d) {
      var j = d.dragging,
        z = d.swipe,
        U = d.touchObject,
        k = d.listWidth,
        Y = d.touchThreshold,
        F = d.verticalSwiping,
        ne = d.listHeight,
        de = d.swipeToSlide,
        xe = d.scrolling,
        Ee = d.onSwipe,
        Ne = d.targetSlide,
        je = d.currentSlide,
        pe = d.infinite;
      if (!j) return (z && J(u), {});
      var Me = F ? ne / Y : k / Y,
        Ze = ve(U, F),
        se = {
          dragging: !1,
          edgeDragged: !1,
          scrolling: !1,
          swiping: !1,
          swiped: !1,
          swipeLeft: null,
          touchObject: {},
        };
      if (xe || !U.swipeLength) return se;
      if (U.swipeLength > Me) {
        (J(u), Ee && Ee(Ze));
        var Ge,
          Ve,
          Pe = pe ? je : Ne;
        switch (Ze) {
          case "left":
          case "up":
            ((Ve = Pe + E(d)),
              (Ge = de ? x(d, Ve) : Ve),
              (se.currentDirection = 0));
            break;
          case "right":
          case "down":
            ((Ve = Pe - E(d)),
              (Ge = de ? x(d, Ve) : Ve),
              (se.currentDirection = 1));
            break;
          default:
            Ge = Pe;
        }
        se.triggerSlideHandler = Ge;
      } else {
        var tt = m(d);
        se.trackStyle = T(w(w({}, d), {}, { left: tt }));
      }
      return se;
    }));
  var Te = (ee.getNavigableIndexes = function (u) {
      for (
        var d = u.infinite ? u.slideCount * 2 : u.slideCount,
          j = u.infinite ? u.slidesToShow * -1 : 0,
          z = u.infinite ? u.slidesToShow * -1 : 0,
          U = [];
        j < d;
      )
        (U.push(j),
          (j = z + u.slidesToScroll),
          (z += Math.min(u.slidesToScroll, u.slidesToShow)));
      return U;
    }),
    x = (ee.checkNavigable = function (u, d) {
      var j = Te(u),
        z = 0;
      if (d > j[j.length - 1]) d = j[j.length - 1];
      else
        for (var U in j) {
          if (d < j[U]) {
            d = z;
            break;
          }
          z = j[U];
        }
      return d;
    }),
    E = (ee.getSlideCount = function (u) {
      var d = u.centerMode ? u.slideWidth * Math.floor(u.slidesToShow / 2) : 0;
      if (u.swipeToSlide) {
        var j,
          z = u.listRef,
          U = (z.querySelectorAll && z.querySelectorAll(".slick-slide")) || [];
        if (
          (Array.from(U).every(function (F) {
            if (u.vertical) {
              if (F.offsetTop + oe(F) / 2 > u.swipeLeft * -1)
                return ((j = F), !1);
            } else if (F.offsetLeft - d + he(F) / 2 > u.swipeLeft * -1)
              return ((j = F), !1);
            return !0;
          }),
          !j)
        )
          return 0;
        var k = u.rtl === !0 ? u.slideCount - u.currentSlide : u.currentSlide,
          Y = Math.abs(j.dataset.index - k) || 1;
        return Y;
      } else return u.slidesToScroll;
    }),
    R = (ee.checkSpecKeys = function (u, d) {
      return d.reduce(function (j, z) {
        return j && u.hasOwnProperty(z);
      }, !0)
        ? null
        : console.error("Keys Missing:", u);
    }),
    W = (ee.getTrackCSS = function (u) {
      R(u, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth",
      ]);
      var d,
        j,
        z = u.slideCount + 2 * u.slidesToShow;
      u.vertical ? (j = z * u.slideHeight) : (d = C(u) * u.slideWidth);
      var U = { opacity: 1, transition: "", WebkitTransition: "" };
      if (u.useTransform) {
        var k = u.vertical
            ? "translate3d(0px, " + u.left + "px, 0px)"
            : "translate3d(" + u.left + "px, 0px, 0px)",
          Y = u.vertical
            ? "translate3d(0px, " + u.left + "px, 0px)"
            : "translate3d(" + u.left + "px, 0px, 0px)",
          F = u.vertical
            ? "translateY(" + u.left + "px)"
            : "translateX(" + u.left + "px)";
        U = w(
          w({}, U),
          {},
          { WebkitTransform: k, transform: Y, msTransform: F },
        );
      } else u.vertical ? (U.top = u.left) : (U.left = u.left);
      return (
        u.fade && (U = { opacity: 1 }),
        d && (U.width = d),
        j && (U.height = j),
        window &&
          !window.addEventListener &&
          window.attachEvent &&
          (u.vertical
            ? (U.marginTop = u.left + "px")
            : (U.marginLeft = u.left + "px")),
        U
      );
    }),
    T = (ee.getTrackAnimateCSS = function (u) {
      R(u, [
        "left",
        "variableWidth",
        "slideCount",
        "slidesToShow",
        "slideWidth",
        "speed",
        "cssEase",
      ]);
      var d = W(u);
      return (
        u.useTransform
          ? ((d.WebkitTransition =
              "-webkit-transform " + u.speed + "ms " + u.cssEase),
            (d.transition = "transform " + u.speed + "ms " + u.cssEase))
          : u.vertical
            ? (d.transition = "top " + u.speed + "ms " + u.cssEase)
            : (d.transition = "left " + u.speed + "ms " + u.cssEase),
        d
      );
    }),
    m = (ee.getTrackLeft = function (u) {
      if (u.unslick) return 0;
      R(u, [
        "slideIndex",
        "trackRef",
        "infinite",
        "centerMode",
        "slideCount",
        "slidesToShow",
        "slidesToScroll",
        "slideWidth",
        "listWidth",
        "variableWidth",
        "slideHeight",
      ]);
      var d = u.slideIndex,
        j = u.trackRef,
        z = u.infinite,
        U = u.centerMode,
        k = u.slideCount,
        Y = u.slidesToShow,
        F = u.slidesToScroll,
        ne = u.slideWidth,
        de = u.listWidth,
        xe = u.variableWidth,
        Ee = u.slideHeight,
        Ne = u.fade,
        je = u.vertical,
        pe = 0,
        Me,
        Ze,
        se = 0;
      if (Ne || u.slideCount === 1) return 0;
      var Ge = 0;
      if (
        (z
          ? ((Ge = -q(u)),
            k % F !== 0 && d + F > k && (Ge = -(d > k ? Y - (d - k) : k % F)),
            U && (Ge += parseInt(Y / 2)))
          : (k % F !== 0 && d + F > k && (Ge = Y - (k % F)),
            U && (Ge = parseInt(Y / 2))),
        (pe = Ge * ne),
        (se = Ge * Ee),
        je ? (Me = d * Ee * -1 + se) : (Me = d * ne * -1 + pe),
        xe === !0)
      ) {
        var Ve,
          Pe = j && j.node;
        if (
          ((Ve = d + q(u)),
          (Ze = Pe && Pe.childNodes[Ve]),
          (Me = Ze ? Ze.offsetLeft * -1 : 0),
          U === !0)
        ) {
          ((Ve = z ? d + q(u) : d), (Ze = Pe && Pe.children[Ve]), (Me = 0));
          for (var tt = 0; tt < Ve; tt++)
            Me -= Pe && Pe.children[tt] && Pe.children[tt].offsetWidth;
          ((Me -= parseInt(u.centerPadding)),
            (Me += Ze && (de - Ze.offsetWidth) / 2));
        }
      }
      return Me;
    }),
    q = (ee.getPreClones = function (u) {
      return u.unslick || !u.infinite
        ? 0
        : u.variableWidth
          ? u.slideCount
          : u.slidesToShow + (u.centerMode ? 1 : 0);
    }),
    X = (ee.getPostClones = function (u) {
      return u.unslick || !u.infinite ? 0 : u.slideCount;
    }),
    C = (ee.getTotalSlides = function (u) {
      return u.slideCount === 1 ? 1 : q(u) + u.slideCount + X(u);
    }),
    L = (ee.siblingDirection = function (u) {
      return u.targetSlide > u.currentSlide
        ? u.targetSlide > u.currentSlide + P(u)
          ? "left"
          : "right"
        : u.targetSlide < u.currentSlide - S(u)
          ? "right"
          : "left";
    }),
    P = (ee.slidesOnRight = function (u) {
      var d = u.slidesToShow,
        j = u.centerMode,
        z = u.rtl,
        U = u.centerPadding;
      if (j) {
        var k = (d - 1) / 2 + 1;
        return (parseInt(U) > 0 && (k += 1), z && d % 2 === 0 && (k += 1), k);
      }
      return z ? 0 : d - 1;
    }),
    S = (ee.slidesOnLeft = function (u) {
      var d = u.slidesToShow,
        j = u.centerMode,
        z = u.rtl,
        U = u.centerPadding;
      if (j) {
        var k = (d - 1) / 2 + 1;
        return (parseInt(U) > 0 && (k += 1), !z && d % 2 === 0 && (k += 1), k);
      }
      return z ? d - 1 : 0;
    });
  ee.canUseDOM = function () {
    return !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    );
  };
  var r = (ee.validSettings = Object.keys(v.default));
  function I(p) {
    return r.reduce(function (u, d) {
      return (p.hasOwnProperty(d) && (u[d] = p[d]), u);
    }, {});
  }
  return ee;
}
var Gn = {},
  lh;
function Nv() {
  if (lh) return Gn;
  ((lh = 1),
    Object.defineProperty(Gn, "__esModule", { value: !0 }),
    (Gn.Track = void 0));
  var f = h(Zt()),
    v = h(hu()),
    g = Qn();
  function h(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function b(T) {
    "@babel/helpers - typeof";
    return (
      (b =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (m) {
              return typeof m;
            }
          : function (m) {
              return m &&
                typeof Symbol == "function" &&
                m.constructor === Symbol &&
                m !== Symbol.prototype
                ? "symbol"
                : typeof m;
            }),
      b(T)
    );
  }
  function w() {
    return (
      (w = Object.assign
        ? Object.assign.bind()
        : function (T) {
            for (var m = 1; m < arguments.length; m++) {
              var q = arguments[m];
              for (var X in q)
                Object.prototype.hasOwnProperty.call(q, X) && (T[X] = q[X]);
            }
            return T;
          }),
      w.apply(this, arguments)
    );
  }
  function B(T, m) {
    if (!(T instanceof m))
      throw new TypeError("Cannot call a class as a function");
  }
  function V(T, m) {
    for (var q = 0; q < m.length; q++) {
      var X = m[q];
      ((X.enumerable = X.enumerable || !1),
        (X.configurable = !0),
        "value" in X && (X.writable = !0),
        Object.defineProperty(T, ye(X.key), X));
    }
  }
  function K(T, m, q) {
    return (
      m && V(T.prototype, m),
      Object.defineProperty(T, "prototype", { writable: !1 }),
      T
    );
  }
  function D(T, m) {
    if (typeof m != "function" && m !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((T.prototype = Object.create(m && m.prototype, {
      constructor: { value: T, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(T, "prototype", { writable: !1 }),
      m && J(T, m));
  }
  function J(T, m) {
    return (
      (J = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (X, C) {
            return ((X.__proto__ = C), X);
          }),
      J(T, m)
    );
  }
  function ae(T) {
    var m = ce();
    return function () {
      var X = $(T),
        C;
      if (m) {
        var L = $(this).constructor;
        C = Reflect.construct(X, arguments, L);
      } else C = X.apply(this, arguments);
      return te(this, C);
    };
  }
  function te(T, m) {
    if (m && (b(m) === "object" || typeof m == "function")) return m;
    if (m !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return me(T);
  }
  function me(T) {
    if (T === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return T;
  }
  function ce() {
    try {
      var T = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (ce = function () {
      return !!T;
    })();
  }
  function $(T) {
    return (
      ($ = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (q) {
            return q.__proto__ || Object.getPrototypeOf(q);
          }),
      $(T)
    );
  }
  function he(T, m) {
    var q = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var X = Object.getOwnPropertySymbols(T);
      (m &&
        (X = X.filter(function (C) {
          return Object.getOwnPropertyDescriptor(T, C).enumerable;
        })),
        q.push.apply(q, X));
    }
    return q;
  }
  function oe(T) {
    for (var m = 1; m < arguments.length; m++) {
      var q = arguments[m] != null ? arguments[m] : {};
      m % 2
        ? he(Object(q), !0).forEach(function (X) {
            ve(T, X, q[X]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(q))
          : he(Object(q)).forEach(function (X) {
              Object.defineProperty(
                T,
                X,
                Object.getOwnPropertyDescriptor(q, X),
              );
            });
    }
    return T;
  }
  function ve(T, m, q) {
    return (
      (m = ye(m)),
      m in T
        ? Object.defineProperty(T, m, {
            value: q,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (T[m] = q),
      T
    );
  }
  function ye(T) {
    var m = Te(T, "string");
    return b(m) == "symbol" ? m : String(m);
  }
  function Te(T, m) {
    if (b(T) != "object" || !T) return T;
    var q = T[Symbol.toPrimitive];
    if (q !== void 0) {
      var X = q.call(T, m);
      if (b(X) != "object") return X;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (m === "string" ? String : Number)(T);
  }
  var x = function (m) {
      var q, X, C, L, P;
      (m.rtl ? (P = m.slideCount - 1 - m.index) : (P = m.index),
        (C = P < 0 || P >= m.slideCount),
        m.centerMode
          ? ((L = Math.floor(m.slidesToShow / 2)),
            (X = (P - m.currentSlide) % m.slideCount === 0),
            P > m.currentSlide - L - 1 && P <= m.currentSlide + L && (q = !0))
          : (q = m.currentSlide <= P && P < m.currentSlide + m.slidesToShow));
      var S;
      m.targetSlide < 0
        ? (S = m.targetSlide + m.slideCount)
        : m.targetSlide >= m.slideCount
          ? (S = m.targetSlide - m.slideCount)
          : (S = m.targetSlide);
      var r = P === S;
      return {
        "slick-slide": !0,
        "slick-active": q,
        "slick-center": X,
        "slick-cloned": C,
        "slick-current": r,
      };
    },
    E = function (m) {
      var q = {};
      return (
        (m.variableWidth === void 0 || m.variableWidth === !1) &&
          (q.width = m.slideWidth),
        m.fade &&
          ((q.position = "relative"),
          m.vertical
            ? (q.top = -m.index * parseInt(m.slideHeight))
            : (q.left = -m.index * parseInt(m.slideWidth)),
          (q.opacity = m.currentSlide === m.index ? 1 : 0),
          (q.zIndex = m.currentSlide === m.index ? 999 : 998),
          m.useCSS &&
            (q.transition =
              "opacity " +
              m.speed +
              "ms " +
              m.cssEase +
              ", visibility " +
              m.speed +
              "ms " +
              m.cssEase)),
        q
      );
    },
    R = function (m, q) {
      return m.key || q;
    },
    W = function (m) {
      var q,
        X = [],
        C = [],
        L = [],
        P = f.default.Children.count(m.children),
        S = (0, g.lazyStartIndex)(m),
        r = (0, g.lazyEndIndex)(m);
      return (
        f.default.Children.forEach(m.children, function (I, p) {
          var u,
            d = {
              message: "children",
              index: p,
              slidesToScroll: m.slidesToScroll,
              currentSlide: m.currentSlide,
            };
          !m.lazyLoad || (m.lazyLoad && m.lazyLoadedList.indexOf(p) >= 0)
            ? (u = I)
            : (u = f.default.createElement("div", null));
          var j = E(oe(oe({}, m), {}, { index: p })),
            z = u.props.className || "",
            U = x(oe(oe({}, m), {}, { index: p }));
          if (
            (X.push(
              f.default.cloneElement(u, {
                key: "original" + R(u, p),
                "data-index": p,
                className: (0, v.default)(U, z),
                tabIndex: "-1",
                "aria-hidden": !U["slick-active"],
                style: oe(oe({ outline: "none" }, u.props.style || {}), j),
                onClick: function (F) {
                  (u.props && u.props.onClick && u.props.onClick(F),
                    m.focusOnSelect && m.focusOnSelect(d));
                },
              }),
            ),
            m.infinite && m.fade === !1)
          ) {
            var k = P - p;
            (k <= (0, g.getPreClones)(m) &&
              ((q = -k),
              q >= S && (u = I),
              (U = x(oe(oe({}, m), {}, { index: q }))),
              C.push(
                f.default.cloneElement(u, {
                  key: "precloned" + R(u, q),
                  "data-index": q,
                  tabIndex: "-1",
                  className: (0, v.default)(U, z),
                  "aria-hidden": !U["slick-active"],
                  style: oe(oe({}, u.props.style || {}), j),
                  onClick: function (F) {
                    (u.props && u.props.onClick && u.props.onClick(F),
                      m.focusOnSelect && m.focusOnSelect(d));
                  },
                }),
              )),
              (q = P + p),
              q < r && (u = I),
              (U = x(oe(oe({}, m), {}, { index: q }))),
              L.push(
                f.default.cloneElement(u, {
                  key: "postcloned" + R(u, q),
                  "data-index": q,
                  tabIndex: "-1",
                  className: (0, v.default)(U, z),
                  "aria-hidden": !U["slick-active"],
                  style: oe(oe({}, u.props.style || {}), j),
                  onClick: function (F) {
                    (u.props && u.props.onClick && u.props.onClick(F),
                      m.focusOnSelect && m.focusOnSelect(d));
                  },
                }),
              ));
          }
        }),
        m.rtl ? C.concat(X, L).reverse() : C.concat(X, L)
      );
    };
  return (
    (Gn.Track = (function (T) {
      D(q, T);
      var m = ae(q);
      function q() {
        var X;
        B(this, q);
        for (var C = arguments.length, L = new Array(C), P = 0; P < C; P++)
          L[P] = arguments[P];
        return (
          (X = m.call.apply(m, [this].concat(L))),
          ve(me(X), "node", null),
          ve(me(X), "handleRef", function (S) {
            X.node = S;
          }),
          X
        );
      }
      return (
        K(q, [
          {
            key: "render",
            value: function () {
              var C = W(this.props),
                L = this.props,
                P = L.onMouseEnter,
                S = L.onMouseOver,
                r = L.onMouseLeave,
                I = { onMouseEnter: P, onMouseOver: S, onMouseLeave: r };
              return f.default.createElement(
                "div",
                w(
                  {
                    ref: this.handleRef,
                    className: "slick-track",
                    style: this.props.trackStyle,
                  },
                  I,
                ),
                C,
              );
            },
          },
        ]),
        q
      );
    })(f.default.PureComponent)),
    Gn
  );
}
var Xn = {},
  ah;
function Mv() {
  if (ah) return Xn;
  ah = 1;
  function f(x) {
    "@babel/helpers - typeof";
    return (
      (f =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (E) {
              return typeof E;
            }
          : function (E) {
              return E &&
                typeof Symbol == "function" &&
                E.constructor === Symbol &&
                E !== Symbol.prototype
                ? "symbol"
                : typeof E;
            }),
      f(x)
    );
  }
  (Object.defineProperty(Xn, "__esModule", { value: !0 }), (Xn.Dots = void 0));
  var v = b(Zt()),
    g = b(hu()),
    h = Qn();
  function b(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function w(x, E) {
    var R = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(x);
      (E &&
        (W = W.filter(function (T) {
          return Object.getOwnPropertyDescriptor(x, T).enumerable;
        })),
        R.push.apply(R, W));
    }
    return R;
  }
  function B(x) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E] != null ? arguments[E] : {};
      E % 2
        ? w(Object(R), !0).forEach(function (W) {
            V(x, W, R[W]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(R))
          : w(Object(R)).forEach(function (W) {
              Object.defineProperty(
                x,
                W,
                Object.getOwnPropertyDescriptor(R, W),
              );
            });
    }
    return x;
  }
  function V(x, E, R) {
    return (
      (E = ae(E)),
      E in x
        ? Object.defineProperty(x, E, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (x[E] = R),
      x
    );
  }
  function K(x, E) {
    if (!(x instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function D(x, E) {
    for (var R = 0; R < E.length; R++) {
      var W = E[R];
      ((W.enumerable = W.enumerable || !1),
        (W.configurable = !0),
        "value" in W && (W.writable = !0),
        Object.defineProperty(x, ae(W.key), W));
    }
  }
  function J(x, E, R) {
    return (
      E && D(x.prototype, E),
      Object.defineProperty(x, "prototype", { writable: !1 }),
      x
    );
  }
  function ae(x) {
    var E = te(x, "string");
    return f(E) == "symbol" ? E : String(E);
  }
  function te(x, E) {
    if (f(x) != "object" || !x) return x;
    var R = x[Symbol.toPrimitive];
    if (R !== void 0) {
      var W = R.call(x, E);
      if (f(W) != "object") return W;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(x);
  }
  function me(x, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((x.prototype = Object.create(E && E.prototype, {
      constructor: { value: x, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(x, "prototype", { writable: !1 }),
      E && ce(x, E));
  }
  function ce(x, E) {
    return (
      (ce = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (W, T) {
            return ((W.__proto__ = T), W);
          }),
      ce(x, E)
    );
  }
  function $(x) {
    var E = ve();
    return function () {
      var W = ye(x),
        T;
      if (E) {
        var m = ye(this).constructor;
        T = Reflect.construct(W, arguments, m);
      } else T = W.apply(this, arguments);
      return he(this, T);
    };
  }
  function he(x, E) {
    if (E && (f(E) === "object" || typeof E == "function")) return E;
    if (E !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return oe(x);
  }
  function oe(x) {
    if (x === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return x;
  }
  function ve() {
    try {
      var x = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (ve = function () {
      return !!x;
    })();
  }
  function ye(x) {
    return (
      (ye = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (R) {
            return R.__proto__ || Object.getPrototypeOf(R);
          }),
      ye(x)
    );
  }
  var Te = function (E) {
    var R;
    return (
      E.infinite
        ? (R = Math.ceil(E.slideCount / E.slidesToScroll))
        : (R =
            Math.ceil((E.slideCount - E.slidesToShow) / E.slidesToScroll) + 1),
      R
    );
  };
  return (
    (Xn.Dots = (function (x) {
      me(R, x);
      var E = $(R);
      function R() {
        return (K(this, R), E.apply(this, arguments));
      }
      return (
        J(R, [
          {
            key: "clickHandler",
            value: function (T, m) {
              (m.preventDefault(), this.props.clickHandler(T));
            },
          },
          {
            key: "render",
            value: function () {
              for (
                var T = this.props,
                  m = T.onMouseEnter,
                  q = T.onMouseOver,
                  X = T.onMouseLeave,
                  C = T.infinite,
                  L = T.slidesToScroll,
                  P = T.slidesToShow,
                  S = T.slideCount,
                  r = T.currentSlide,
                  I = Te({
                    slideCount: S,
                    slidesToScroll: L,
                    slidesToShow: P,
                    infinite: C,
                  }),
                  p = { onMouseEnter: m, onMouseOver: q, onMouseLeave: X },
                  u = [],
                  d = 0;
                d < I;
                d++
              ) {
                var j = (d + 1) * L - 1,
                  z = C ? j : (0, h.clamp)(j, 0, S - 1),
                  U = z - (L - 1),
                  k = C ? U : (0, h.clamp)(U, 0, S - 1),
                  Y = (0, g.default)({
                    "slick-active": C ? r >= k && r <= z : r === k,
                  }),
                  F = {
                    message: "dots",
                    index: d,
                    slidesToScroll: L,
                    currentSlide: r,
                  },
                  ne = this.clickHandler.bind(this, F);
                u = u.concat(
                  v.default.createElement(
                    "li",
                    { key: d, className: Y },
                    v.default.cloneElement(this.props.customPaging(d), {
                      onClick: ne,
                    }),
                  ),
                );
              }
              return v.default.cloneElement(
                this.props.appendDots(u),
                B({ className: this.props.dotsClass }, p),
              );
            },
          },
        ]),
        R
      );
    })(v.default.PureComponent)),
    Xn
  );
}
var Fl = {},
  nh;
function zv() {
  if (nh) return Fl;
  nh = 1;
  function f(x) {
    "@babel/helpers - typeof";
    return (
      (f =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (E) {
              return typeof E;
            }
          : function (E) {
              return E &&
                typeof Symbol == "function" &&
                E.constructor === Symbol &&
                E !== Symbol.prototype
                ? "symbol"
                : typeof E;
            }),
      f(x)
    );
  }
  (Object.defineProperty(Fl, "__esModule", { value: !0 }),
    (Fl.PrevArrow = Fl.NextArrow = void 0));
  var v = b(Zt()),
    g = b(hu()),
    h = Qn();
  function b(x) {
    return x && x.__esModule ? x : { default: x };
  }
  function w() {
    return (
      (w = Object.assign
        ? Object.assign.bind()
        : function (x) {
            for (var E = 1; E < arguments.length; E++) {
              var R = arguments[E];
              for (var W in R)
                Object.prototype.hasOwnProperty.call(R, W) && (x[W] = R[W]);
            }
            return x;
          }),
      w.apply(this, arguments)
    );
  }
  function B(x, E) {
    var R = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var W = Object.getOwnPropertySymbols(x);
      (E &&
        (W = W.filter(function (T) {
          return Object.getOwnPropertyDescriptor(x, T).enumerable;
        })),
        R.push.apply(R, W));
    }
    return R;
  }
  function V(x) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E] != null ? arguments[E] : {};
      E % 2
        ? B(Object(R), !0).forEach(function (W) {
            K(x, W, R[W]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(R))
          : B(Object(R)).forEach(function (W) {
              Object.defineProperty(
                x,
                W,
                Object.getOwnPropertyDescriptor(R, W),
              );
            });
    }
    return x;
  }
  function K(x, E, R) {
    return (
      (E = te(E)),
      E in x
        ? Object.defineProperty(x, E, {
            value: R,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (x[E] = R),
      x
    );
  }
  function D(x, E) {
    if (!(x instanceof E))
      throw new TypeError("Cannot call a class as a function");
  }
  function J(x, E) {
    for (var R = 0; R < E.length; R++) {
      var W = E[R];
      ((W.enumerable = W.enumerable || !1),
        (W.configurable = !0),
        "value" in W && (W.writable = !0),
        Object.defineProperty(x, te(W.key), W));
    }
  }
  function ae(x, E, R) {
    return (
      E && J(x.prototype, E),
      Object.defineProperty(x, "prototype", { writable: !1 }),
      x
    );
  }
  function te(x) {
    var E = me(x, "string");
    return f(E) == "symbol" ? E : String(E);
  }
  function me(x, E) {
    if (f(x) != "object" || !x) return x;
    var R = x[Symbol.toPrimitive];
    if (R !== void 0) {
      var W = R.call(x, E);
      if (f(W) != "object") return W;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(x);
  }
  function ce(x, E) {
    if (typeof E != "function" && E !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((x.prototype = Object.create(E && E.prototype, {
      constructor: { value: x, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(x, "prototype", { writable: !1 }),
      E && $(x, E));
  }
  function $(x, E) {
    return (
      ($ = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (W, T) {
            return ((W.__proto__ = T), W);
          }),
      $(x, E)
    );
  }
  function he(x) {
    var E = ye();
    return function () {
      var W = Te(x),
        T;
      if (E) {
        var m = Te(this).constructor;
        T = Reflect.construct(W, arguments, m);
      } else T = W.apply(this, arguments);
      return oe(this, T);
    };
  }
  function oe(x, E) {
    if (E && (f(E) === "object" || typeof E == "function")) return E;
    if (E !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return ve(x);
  }
  function ve(x) {
    if (x === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return x;
  }
  function ye() {
    try {
      var x = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (ye = function () {
      return !!x;
    })();
  }
  function Te(x) {
    return (
      (Te = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (R) {
            return R.__proto__ || Object.getPrototypeOf(R);
          }),
      Te(x)
    );
  }
  return (
    (Fl.PrevArrow = (function (x) {
      ce(R, x);
      var E = he(R);
      function R() {
        return (D(this, R), E.apply(this, arguments));
      }
      return (
        ae(R, [
          {
            key: "clickHandler",
            value: function (T, m) {
              (m && m.preventDefault(), this.props.clickHandler(T, m));
            },
          },
          {
            key: "render",
            value: function () {
              var T = { "slick-arrow": !0, "slick-prev": !0 },
                m = this.clickHandler.bind(this, { message: "previous" });
              !this.props.infinite &&
                (this.props.currentSlide === 0 ||
                  this.props.slideCount <= this.props.slidesToShow) &&
                ((T["slick-disabled"] = !0), (m = null));
              var q = {
                  key: "0",
                  "data-role": "none",
                  className: (0, g.default)(T),
                  style: { display: "block" },
                  onClick: m,
                },
                X = {
                  currentSlide: this.props.currentSlide,
                  slideCount: this.props.slideCount,
                },
                C;
              return (
                this.props.prevArrow
                  ? (C = v.default.cloneElement(
                      this.props.prevArrow,
                      V(V({}, q), X),
                    ))
                  : (C = v.default.createElement(
                      "button",
                      w({ key: "0", type: "button" }, q),
                      " ",
                      "Previous",
                    )),
                C
              );
            },
          },
        ]),
        R
      );
    })(v.default.PureComponent)),
    (Fl.NextArrow = (function (x) {
      ce(R, x);
      var E = he(R);
      function R() {
        return (D(this, R), E.apply(this, arguments));
      }
      return (
        ae(R, [
          {
            key: "clickHandler",
            value: function (T, m) {
              (m && m.preventDefault(), this.props.clickHandler(T, m));
            },
          },
          {
            key: "render",
            value: function () {
              var T = { "slick-arrow": !0, "slick-next": !0 },
                m = this.clickHandler.bind(this, { message: "next" });
              (0, h.canGoNext)(this.props) ||
                ((T["slick-disabled"] = !0), (m = null));
              var q = {
                  key: "1",
                  "data-role": "none",
                  className: (0, g.default)(T),
                  style: { display: "block" },
                  onClick: m,
                },
                X = {
                  currentSlide: this.props.currentSlide,
                  slideCount: this.props.slideCount,
                },
                C;
              return (
                this.props.nextArrow
                  ? (C = v.default.cloneElement(
                      this.props.nextArrow,
                      V(V({}, q), X),
                    ))
                  : (C = v.default.createElement(
                      "button",
                      w({ key: "1", type: "button" }, q),
                      " ",
                      "Next",
                    )),
                C
              );
            },
          },
        ]),
        R
      );
    })(v.default.PureComponent)),
    Fl
  );
}
var jh = (function () {
    if (typeof Map < "u") return Map;
    function f(v, g) {
      var h = -1;
      return (
        v.some(function (b, w) {
          return b[0] === g ? ((h = w), !0) : !1;
        }),
        h
      );
    }
    return (function () {
      function v() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(v.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (v.prototype.get = function (g) {
          var h = f(this.__entries__, g),
            b = this.__entries__[h];
          return b && b[1];
        }),
        (v.prototype.set = function (g, h) {
          var b = f(this.__entries__, g);
          ~b ? (this.__entries__[b][1] = h) : this.__entries__.push([g, h]);
        }),
        (v.prototype.delete = function (g) {
          var h = this.__entries__,
            b = f(h, g);
          ~b && h.splice(b, 1);
        }),
        (v.prototype.has = function (g) {
          return !!~f(this.__entries__, g);
        }),
        (v.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (v.prototype.forEach = function (g, h) {
          h === void 0 && (h = null);
          for (var b = 0, w = this.__entries__; b < w.length; b++) {
            var B = w[b];
            g.call(h, B[1], B[0]);
          }
        }),
        v
      );
    })();
  })(),
  Vc =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  fu = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
        ? self
        : typeof window < "u" && window.Math === Math
          ? window
          : Function("return this")();
  })(),
  Cv = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(fu)
      : function (f) {
          return setTimeout(function () {
            return f(Date.now());
          }, 1e3 / 60);
        };
  })(),
  Av = 2;
function Dv(f, v) {
  var g = !1,
    h = !1,
    b = 0;
  function w() {
    (g && ((g = !1), f()), h && V());
  }
  function B() {
    Cv(w);
  }
  function V() {
    var K = Date.now();
    if (g) {
      if (K - b < Av) return;
      h = !0;
    } else ((g = !0), (h = !1), setTimeout(B, v));
    b = K;
  }
  return V;
}
var Rv = 20,
  Hv = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  Lv = typeof MutationObserver < "u",
  Uv = (function () {
    function f() {
      ((this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = Dv(this.refresh.bind(this), Rv)));
    }
    return (
      (f.prototype.addObserver = function (v) {
        (~this.observers_.indexOf(v) || this.observers_.push(v),
          this.connected_ || this.connect_());
      }),
      (f.prototype.removeObserver = function (v) {
        var g = this.observers_,
          h = g.indexOf(v);
        (~h && g.splice(h, 1),
          !g.length && this.connected_ && this.disconnect_());
      }),
      (f.prototype.refresh = function () {
        var v = this.updateObservers_();
        v && this.refresh();
      }),
      (f.prototype.updateObservers_ = function () {
        var v = this.observers_.filter(function (g) {
          return (g.gatherActive(), g.hasActive());
        });
        return (
          v.forEach(function (g) {
            return g.broadcastActive();
          }),
          v.length > 0
        );
      }),
      (f.prototype.connect_ = function () {
        !Vc ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          Lv
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (f.prototype.disconnect_ = function () {
        !Vc ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (f.prototype.onTransitionEnd_ = function (v) {
        var g = v.propertyName,
          h = g === void 0 ? "" : g,
          b = Hv.some(function (w) {
            return !!~h.indexOf(w);
          });
        b && this.refresh();
      }),
      (f.getInstance = function () {
        return (this.instance_ || (this.instance_ = new f()), this.instance_);
      }),
      (f.instance_ = null),
      f
    );
  })(),
  Th = function (f, v) {
    for (var g = 0, h = Object.keys(v); g < h.length; g++) {
      var b = h[g];
      Object.defineProperty(f, b, {
        value: v[b],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return f;
  },
  Ya = function (f) {
    var v = f && f.ownerDocument && f.ownerDocument.defaultView;
    return v || fu;
  },
  _h = mu(0, 0, 0, 0);
function ou(f) {
  return parseFloat(f) || 0;
}
function ih(f) {
  for (var v = [], g = 1; g < arguments.length; g++) v[g - 1] = arguments[g];
  return v.reduce(function (h, b) {
    var w = f["border-" + b + "-width"];
    return h + ou(w);
  }, 0);
}
function qv(f) {
  for (
    var v = ["top", "right", "bottom", "left"], g = {}, h = 0, b = v;
    h < b.length;
    h++
  ) {
    var w = b[h],
      B = f["padding-" + w];
    g[w] = ou(B);
  }
  return g;
}
function Bv(f) {
  var v = f.getBBox();
  return mu(0, 0, v.width, v.height);
}
function Yv(f) {
  var v = f.clientWidth,
    g = f.clientHeight;
  if (!v && !g) return _h;
  var h = Ya(f).getComputedStyle(f),
    b = qv(h),
    w = b.left + b.right,
    B = b.top + b.bottom,
    V = ou(h.width),
    K = ou(h.height);
  if (
    (h.boxSizing === "border-box" &&
      (Math.round(V + w) !== v && (V -= ih(h, "left", "right") + w),
      Math.round(K + B) !== g && (K -= ih(h, "top", "bottom") + B)),
    !Xv(f))
  ) {
    var D = Math.round(V + w) - v,
      J = Math.round(K + B) - g;
    (Math.abs(D) !== 1 && (V -= D), Math.abs(J) !== 1 && (K -= J));
  }
  return mu(b.left, b.top, V, K);
}
var Gv = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (f) {
        return f instanceof Ya(f).SVGGraphicsElement;
      }
    : function (f) {
        return f instanceof Ya(f).SVGElement && typeof f.getBBox == "function";
      };
})();
function Xv(f) {
  return f === Ya(f).document.documentElement;
}
function Qv(f) {
  return Vc ? (Gv(f) ? Bv(f) : Yv(f)) : _h;
}
function kv(f) {
  var v = f.x,
    g = f.y,
    h = f.width,
    b = f.height,
    w = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    B = Object.create(w.prototype);
  return (
    Th(B, {
      x: v,
      y: g,
      width: h,
      height: b,
      top: g,
      right: v + h,
      bottom: b + g,
      left: v,
    }),
    B
  );
}
function mu(f, v, g, h) {
  return { x: f, y: v, width: g, height: h };
}
var Zv = (function () {
    function f(v) {
      ((this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = mu(0, 0, 0, 0)),
        (this.target = v));
    }
    return (
      (f.prototype.isActive = function () {
        var v = Qv(this.target);
        return (
          (this.contentRect_ = v),
          v.width !== this.broadcastWidth || v.height !== this.broadcastHeight
        );
      }),
      (f.prototype.broadcastRect = function () {
        var v = this.contentRect_;
        return (
          (this.broadcastWidth = v.width),
          (this.broadcastHeight = v.height),
          v
        );
      }),
      f
    );
  })(),
  Vv = (function () {
    function f(v, g) {
      var h = kv(g);
      Th(this, { target: v, contentRect: h });
    }
    return f;
  })(),
  Kv = (function () {
    function f(v, g, h) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new jh()),
        typeof v != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function.",
        );
      ((this.callback_ = v), (this.controller_ = g), (this.callbackCtx_ = h));
    }
    return (
      (f.prototype.observe = function (v) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(v instanceof Ya(v).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var g = this.observations_;
          g.has(v) ||
            (g.set(v, new Zv(v)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (f.prototype.unobserve = function (v) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(v instanceof Ya(v).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var g = this.observations_;
          g.has(v) &&
            (g.delete(v), g.size || this.controller_.removeObserver(this));
        }
      }),
      (f.prototype.disconnect = function () {
        (this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this));
      }),
      (f.prototype.gatherActive = function () {
        var v = this;
        (this.clearActive(),
          this.observations_.forEach(function (g) {
            g.isActive() && v.activeObservations_.push(g);
          }));
      }),
      (f.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var v = this.callbackCtx_,
            g = this.activeObservations_.map(function (h) {
              return new Vv(h.target, h.broadcastRect());
            });
          (this.callback_.call(v, g, v), this.clearActive());
        }
      }),
      (f.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (f.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      f
    );
  })(),
  Eh = typeof WeakMap < "u" ? new WeakMap() : new jh(),
  Nh = (function () {
    function f(v) {
      if (!(this instanceof f))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var g = Uv.getInstance(),
        h = new Kv(v, g, this);
      Eh.set(this, h);
    }
    return f;
  })();
["observe", "unobserve", "disconnect"].forEach(function (f) {
  Nh.prototype[f] = function () {
    var v;
    return (v = Eh.get(this))[f].apply(v, arguments);
  };
});
var Jv = (function () {
  return typeof fu.ResizeObserver < "u" ? fu.ResizeObserver : Nh;
})();
const Wv = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Jv },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Pv = Wm(Wv);
var uh;
function $v() {
  if (uh) return Yn;
  ((uh = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.InnerSlider = void 0));
  var f = D(Zt()),
    v = D(_v()),
    g = D(Ev()),
    h = D(hu()),
    b = Qn(),
    w = Nv(),
    B = Mv(),
    V = zv(),
    K = D(Pv);
  function D(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function J(C) {
    "@babel/helpers - typeof";
    return (
      (J =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (L) {
              return typeof L;
            }
          : function (L) {
              return L &&
                typeof Symbol == "function" &&
                L.constructor === Symbol &&
                L !== Symbol.prototype
                ? "symbol"
                : typeof L;
            }),
      J(C)
    );
  }
  function ae() {
    return (
      (ae = Object.assign
        ? Object.assign.bind()
        : function (C) {
            for (var L = 1; L < arguments.length; L++) {
              var P = arguments[L];
              for (var S in P)
                Object.prototype.hasOwnProperty.call(P, S) && (C[S] = P[S]);
            }
            return C;
          }),
      ae.apply(this, arguments)
    );
  }
  function te(C, L) {
    if (C == null) return {};
    var P = me(C, L),
      S,
      r;
    if (Object.getOwnPropertySymbols) {
      var I = Object.getOwnPropertySymbols(C);
      for (r = 0; r < I.length; r++)
        ((S = I[r]),
          !(L.indexOf(S) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(C, S) &&
            (P[S] = C[S]));
    }
    return P;
  }
  function me(C, L) {
    if (C == null) return {};
    var P = {},
      S = Object.keys(C),
      r,
      I;
    for (I = 0; I < S.length; I++)
      ((r = S[I]), !(L.indexOf(r) >= 0) && (P[r] = C[r]));
    return P;
  }
  function ce(C, L) {
    var P = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var S = Object.getOwnPropertySymbols(C);
      (L &&
        (S = S.filter(function (r) {
          return Object.getOwnPropertyDescriptor(C, r).enumerable;
        })),
        P.push.apply(P, S));
    }
    return P;
  }
  function $(C) {
    for (var L = 1; L < arguments.length; L++) {
      var P = arguments[L] != null ? arguments[L] : {};
      L % 2
        ? ce(Object(P), !0).forEach(function (S) {
            m(C, S, P[S]);
          })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(P))
          : ce(Object(P)).forEach(function (S) {
              Object.defineProperty(
                C,
                S,
                Object.getOwnPropertyDescriptor(P, S),
              );
            });
    }
    return C;
  }
  function he(C, L) {
    if (!(C instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function oe(C, L) {
    for (var P = 0; P < L.length; P++) {
      var S = L[P];
      ((S.enumerable = S.enumerable || !1),
        (S.configurable = !0),
        "value" in S && (S.writable = !0),
        Object.defineProperty(C, q(S.key), S));
    }
  }
  function ve(C, L, P) {
    return (
      L && oe(C.prototype, L),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      C
    );
  }
  function ye(C, L) {
    if (typeof L != "function" && L !== null)
      throw new TypeError("Super expression must either be null or a function");
    ((C.prototype = Object.create(L && L.prototype, {
      constructor: { value: C, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      L && Te(C, L));
  }
  function Te(C, L) {
    return (
      (Te = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (S, r) {
            return ((S.__proto__ = r), S);
          }),
      Te(C, L)
    );
  }
  function x(C) {
    var L = W();
    return function () {
      var S = T(C),
        r;
      if (L) {
        var I = T(this).constructor;
        r = Reflect.construct(S, arguments, I);
      } else r = S.apply(this, arguments);
      return E(this, r);
    };
  }
  function E(C, L) {
    if (L && (J(L) === "object" || typeof L == "function")) return L;
    if (L !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined",
      );
    return R(C);
  }
  function R(C) {
    if (C === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return C;
  }
  function W() {
    try {
      var C = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      );
    } catch {}
    return (W = function () {
      return !!C;
    })();
  }
  function T(C) {
    return (
      (T = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (P) {
            return P.__proto__ || Object.getPrototypeOf(P);
          }),
      T(C)
    );
  }
  function m(C, L, P) {
    return (
      (L = q(L)),
      L in C
        ? Object.defineProperty(C, L, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (C[L] = P),
      C
    );
  }
  function q(C) {
    var L = X(C, "string");
    return J(L) == "symbol" ? L : String(L);
  }
  function X(C, L) {
    if (J(C) != "object" || !C) return C;
    var P = C[Symbol.toPrimitive];
    if (P !== void 0) {
      var S = P.call(C, L);
      if (J(S) != "object") return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(C);
  }
  return (
    (Yn.InnerSlider = (function (C) {
      ye(P, C);
      var L = x(P);
      function P(S) {
        var r;
        (he(this, P),
          (r = L.call(this, S)),
          m(R(r), "listRefHandler", function (p) {
            return (r.list = p);
          }),
          m(R(r), "trackRefHandler", function (p) {
            return (r.track = p);
          }),
          m(R(r), "adaptHeight", function () {
            if (r.props.adaptiveHeight && r.list) {
              var p = r.list.querySelector(
                '[data-index="'.concat(r.state.currentSlide, '"]'),
              );
              r.list.style.height = (0, b.getHeight)(p) + "px";
            }
          }),
          m(R(r), "componentDidMount", function () {
            if ((r.props.onInit && r.props.onInit(), r.props.lazyLoad)) {
              var p = (0, b.getOnDemandLazySlides)($($({}, r.props), r.state));
              p.length > 0 &&
                (r.setState(function (d) {
                  return { lazyLoadedList: d.lazyLoadedList.concat(p) };
                }),
                r.props.onLazyLoad && r.props.onLazyLoad(p));
            }
            var u = $({ listRef: r.list, trackRef: r.track }, r.props);
            (r.updateState(u, !0, function () {
              (r.adaptHeight(), r.props.autoplay && r.autoPlay("update"));
            }),
              r.props.lazyLoad === "progressive" &&
                (r.lazyLoadTimer = setInterval(r.progressiveLazyLoad, 1e3)),
              (r.ro = new K.default(function () {
                r.state.animating
                  ? (r.onWindowResized(!1),
                    r.callbackTimers.push(
                      setTimeout(function () {
                        return r.onWindowResized();
                      }, r.props.speed),
                    ))
                  : r.onWindowResized();
              })),
              r.ro.observe(r.list),
              document.querySelectorAll &&
                Array.prototype.forEach.call(
                  document.querySelectorAll(".slick-slide"),
                  function (d) {
                    ((d.onfocus = r.props.pauseOnFocus ? r.onSlideFocus : null),
                      (d.onblur = r.props.pauseOnFocus ? r.onSlideBlur : null));
                  },
                ),
              window.addEventListener
                ? window.addEventListener("resize", r.onWindowResized)
                : window.attachEvent("onresize", r.onWindowResized));
          }),
          m(R(r), "componentWillUnmount", function () {
            (r.animationEndCallback && clearTimeout(r.animationEndCallback),
              r.lazyLoadTimer && clearInterval(r.lazyLoadTimer),
              r.callbackTimers.length &&
                (r.callbackTimers.forEach(function (p) {
                  return clearTimeout(p);
                }),
                (r.callbackTimers = [])),
              window.addEventListener
                ? window.removeEventListener("resize", r.onWindowResized)
                : window.detachEvent("onresize", r.onWindowResized),
              r.autoplayTimer && clearInterval(r.autoplayTimer),
              r.ro.disconnect());
          }),
          m(R(r), "componentDidUpdate", function (p) {
            if (
              (r.checkImagesLoad(),
              r.props.onReInit && r.props.onReInit(),
              r.props.lazyLoad)
            ) {
              var u = (0, b.getOnDemandLazySlides)($($({}, r.props), r.state));
              u.length > 0 &&
                (r.setState(function (z) {
                  return { lazyLoadedList: z.lazyLoadedList.concat(u) };
                }),
                r.props.onLazyLoad && r.props.onLazyLoad(u));
            }
            r.adaptHeight();
            var d = $(
                $({ listRef: r.list, trackRef: r.track }, r.props),
                r.state,
              ),
              j = r.didPropsChange(p);
            j &&
              r.updateState(d, j, function () {
                (r.state.currentSlide >=
                  f.default.Children.count(r.props.children) &&
                  r.changeSlide({
                    message: "index",
                    index:
                      f.default.Children.count(r.props.children) -
                      r.props.slidesToShow,
                    currentSlide: r.state.currentSlide,
                  }),
                  r.props.autoplay ? r.autoPlay("update") : r.pause("paused"));
              });
          }),
          m(R(r), "onWindowResized", function (p) {
            (r.debouncedResize && r.debouncedResize.cancel(),
              (r.debouncedResize = (0, g.default)(function () {
                return r.resizeWindow(p);
              }, 50)),
              r.debouncedResize());
          }),
          m(R(r), "resizeWindow", function () {
            var p =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !0,
              u = !!(r.track && r.track.node);
            if (u) {
              var d = $(
                $({ listRef: r.list, trackRef: r.track }, r.props),
                r.state,
              );
              (r.updateState(d, p, function () {
                r.props.autoplay ? r.autoPlay("update") : r.pause("paused");
              }),
                r.setState({ animating: !1 }),
                clearTimeout(r.animationEndCallback),
                delete r.animationEndCallback);
            }
          }),
          m(R(r), "updateState", function (p, u, d) {
            var j = (0, b.initializedState)(p);
            p = $($($({}, p), j), {}, { slideIndex: j.currentSlide });
            var z = (0, b.getTrackLeft)(p);
            p = $($({}, p), {}, { left: z });
            var U = (0, b.getTrackCSS)(p);
            ((u ||
              f.default.Children.count(r.props.children) !==
                f.default.Children.count(p.children)) &&
              (j.trackStyle = U),
              r.setState(j, d));
          }),
          m(R(r), "ssrInit", function () {
            if (r.props.variableWidth) {
              var p = 0,
                u = 0,
                d = [],
                j = (0, b.getPreClones)(
                  $(
                    $($({}, r.props), r.state),
                    {},
                    { slideCount: r.props.children.length },
                  ),
                ),
                z = (0, b.getPostClones)(
                  $(
                    $($({}, r.props), r.state),
                    {},
                    { slideCount: r.props.children.length },
                  ),
                );
              r.props.children.forEach(function (Ze) {
                (d.push(Ze.props.style.width), (p += Ze.props.style.width));
              });
              for (var U = 0; U < j; U++)
                ((u += d[d.length - 1 - U]), (p += d[d.length - 1 - U]));
              for (var k = 0; k < z; k++) p += d[k];
              for (var Y = 0; Y < r.state.currentSlide; Y++) u += d[Y];
              var F = { width: p + "px", left: -u + "px" };
              if (r.props.centerMode) {
                var ne = "".concat(d[r.state.currentSlide], "px");
                F.left = "calc("
                  .concat(F.left, " + (100% - ")
                  .concat(ne, ") / 2 ) ");
              }
              return { trackStyle: F };
            }
            var de = f.default.Children.count(r.props.children),
              xe = $($($({}, r.props), r.state), {}, { slideCount: de }),
              Ee = (0, b.getPreClones)(xe) + (0, b.getPostClones)(xe) + de,
              Ne = (100 / r.props.slidesToShow) * Ee,
              je = 100 / Ee,
              pe =
                (-je * ((0, b.getPreClones)(xe) + r.state.currentSlide) * Ne) /
                100;
            r.props.centerMode && (pe += (100 - (je * Ne) / 100) / 2);
            var Me = { width: Ne + "%", left: pe + "%" };
            return { slideWidth: je + "%", trackStyle: Me };
          }),
          m(R(r), "checkImagesLoad", function () {
            var p =
                (r.list &&
                  r.list.querySelectorAll &&
                  r.list.querySelectorAll(".slick-slide img")) ||
                [],
              u = p.length,
              d = 0;
            Array.prototype.forEach.call(p, function (j) {
              var z = function () {
                return ++d && d >= u && r.onWindowResized();
              };
              if (!j.onclick)
                j.onclick = function () {
                  return j.parentNode.focus();
                };
              else {
                var U = j.onclick;
                j.onclick = function (k) {
                  (U(k), j.parentNode.focus());
                };
              }
              j.onload ||
                (r.props.lazyLoad
                  ? (j.onload = function () {
                      (r.adaptHeight(),
                        r.callbackTimers.push(
                          setTimeout(r.onWindowResized, r.props.speed),
                        ));
                    })
                  : ((j.onload = z),
                    (j.onerror = function () {
                      (z(),
                        r.props.onLazyLoadError && r.props.onLazyLoadError());
                    })));
            });
          }),
          m(R(r), "progressiveLazyLoad", function () {
            for (
              var p = [],
                u = $($({}, r.props), r.state),
                d = r.state.currentSlide;
              d < r.state.slideCount + (0, b.getPostClones)(u);
              d++
            )
              if (r.state.lazyLoadedList.indexOf(d) < 0) {
                p.push(d);
                break;
              }
            for (
              var j = r.state.currentSlide - 1;
              j >= -(0, b.getPreClones)(u);
              j--
            )
              if (r.state.lazyLoadedList.indexOf(j) < 0) {
                p.push(j);
                break;
              }
            p.length > 0
              ? (r.setState(function (z) {
                  return { lazyLoadedList: z.lazyLoadedList.concat(p) };
                }),
                r.props.onLazyLoad && r.props.onLazyLoad(p))
              : r.lazyLoadTimer &&
                (clearInterval(r.lazyLoadTimer), delete r.lazyLoadTimer);
          }),
          m(R(r), "slideHandler", function (p) {
            var u =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              d = r.props,
              j = d.asNavFor,
              z = d.beforeChange,
              U = d.onLazyLoad,
              k = d.speed,
              Y = d.afterChange,
              F = r.state.currentSlide,
              ne = (0, b.slideHandler)(
                $(
                  $($({ index: p }, r.props), r.state),
                  {},
                  { trackRef: r.track, useCSS: r.props.useCSS && !u },
                ),
              ),
              de = ne.state,
              xe = ne.nextState;
            if (de) {
              z && z(F, de.currentSlide);
              var Ee = de.lazyLoadedList.filter(function (Ne) {
                return r.state.lazyLoadedList.indexOf(Ne) < 0;
              });
              (U && Ee.length > 0 && U(Ee),
                !r.props.waitForAnimate &&
                  r.animationEndCallback &&
                  (clearTimeout(r.animationEndCallback),
                  Y && Y(F),
                  delete r.animationEndCallback),
                r.setState(de, function () {
                  (j &&
                    r.asNavForIndex !== p &&
                    ((r.asNavForIndex = p), j.innerSlider.slideHandler(p)),
                    xe &&
                      (r.animationEndCallback = setTimeout(function () {
                        var Ne = xe.animating,
                          je = te(xe, ["animating"]);
                        r.setState(je, function () {
                          (r.callbackTimers.push(
                            setTimeout(function () {
                              return r.setState({ animating: Ne });
                            }, 10),
                          ),
                            Y && Y(de.currentSlide),
                            delete r.animationEndCallback);
                        });
                      }, k)));
                }));
            }
          }),
          m(R(r), "changeSlide", function (p) {
            var u =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              d = $($({}, r.props), r.state),
              j = (0, b.changeSlide)(d, p);
            if (
              !(j !== 0 && !j) &&
              (u === !0 ? r.slideHandler(j, u) : r.slideHandler(j),
              r.props.autoplay && r.autoPlay("update"),
              r.props.focusOnSelect)
            ) {
              var z = r.list.querySelectorAll(".slick-current");
              z[0] && z[0].focus();
            }
          }),
          m(R(r), "clickHandler", function (p) {
            (r.clickable === !1 && (p.stopPropagation(), p.preventDefault()),
              (r.clickable = !0));
          }),
          m(R(r), "keyHandler", function (p) {
            var u = (0, b.keyHandler)(p, r.props.accessibility, r.props.rtl);
            u !== "" && r.changeSlide({ message: u });
          }),
          m(R(r), "selectHandler", function (p) {
            r.changeSlide(p);
          }),
          m(R(r), "disableBodyScroll", function () {
            var p = function (d) {
              ((d = d || window.event),
                d.preventDefault && d.preventDefault(),
                (d.returnValue = !1));
            };
            window.ontouchmove = p;
          }),
          m(R(r), "enableBodyScroll", function () {
            window.ontouchmove = null;
          }),
          m(R(r), "swipeStart", function (p) {
            r.props.verticalSwiping && r.disableBodyScroll();
            var u = (0, b.swipeStart)(p, r.props.swipe, r.props.draggable);
            u !== "" && r.setState(u);
          }),
          m(R(r), "swipeMove", function (p) {
            var u = (0, b.swipeMove)(
              p,
              $(
                $($({}, r.props), r.state),
                {},
                {
                  trackRef: r.track,
                  listRef: r.list,
                  slideIndex: r.state.currentSlide,
                },
              ),
            );
            u && (u.swiping && (r.clickable = !1), r.setState(u));
          }),
          m(R(r), "swipeEnd", function (p) {
            var u = (0, b.swipeEnd)(
              p,
              $(
                $($({}, r.props), r.state),
                {},
                {
                  trackRef: r.track,
                  listRef: r.list,
                  slideIndex: r.state.currentSlide,
                },
              ),
            );
            if (u) {
              var d = u.triggerSlideHandler;
              (delete u.triggerSlideHandler,
                r.setState(u),
                d !== void 0 &&
                  (r.slideHandler(d),
                  r.props.verticalSwiping && r.enableBodyScroll()));
            }
          }),
          m(R(r), "touchEnd", function (p) {
            (r.swipeEnd(p), (r.clickable = !0));
          }),
          m(R(r), "slickPrev", function () {
            r.callbackTimers.push(
              setTimeout(function () {
                return r.changeSlide({ message: "previous" });
              }, 0),
            );
          }),
          m(R(r), "slickNext", function () {
            r.callbackTimers.push(
              setTimeout(function () {
                return r.changeSlide({ message: "next" });
              }, 0),
            );
          }),
          m(R(r), "slickGoTo", function (p) {
            var u =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1;
            if (((p = Number(p)), isNaN(p))) return "";
            r.callbackTimers.push(
              setTimeout(function () {
                return r.changeSlide(
                  {
                    message: "index",
                    index: p,
                    currentSlide: r.state.currentSlide,
                  },
                  u,
                );
              }, 0),
            );
          }),
          m(R(r), "play", function () {
            var p;
            if (r.props.rtl) p = r.state.currentSlide - r.props.slidesToScroll;
            else if ((0, b.canGoNext)($($({}, r.props), r.state)))
              p = r.state.currentSlide + r.props.slidesToScroll;
            else return !1;
            r.slideHandler(p);
          }),
          m(R(r), "autoPlay", function (p) {
            r.autoplayTimer && clearInterval(r.autoplayTimer);
            var u = r.state.autoplaying;
            if (p === "update") {
              if (u === "hovered" || u === "focused" || u === "paused") return;
            } else if (p === "leave") {
              if (u === "paused" || u === "focused") return;
            } else if (p === "blur" && (u === "paused" || u === "hovered"))
              return;
            ((r.autoplayTimer = setInterval(
              r.play,
              r.props.autoplaySpeed + 50,
            )),
              r.setState({ autoplaying: "playing" }));
          }),
          m(R(r), "pause", function (p) {
            r.autoplayTimer &&
              (clearInterval(r.autoplayTimer), (r.autoplayTimer = null));
            var u = r.state.autoplaying;
            p === "paused"
              ? r.setState({ autoplaying: "paused" })
              : p === "focused"
                ? (u === "hovered" || u === "playing") &&
                  r.setState({ autoplaying: "focused" })
                : u === "playing" && r.setState({ autoplaying: "hovered" });
          }),
          m(R(r), "onDotsOver", function () {
            return r.props.autoplay && r.pause("hovered");
          }),
          m(R(r), "onDotsLeave", function () {
            return (
              r.props.autoplay &&
              r.state.autoplaying === "hovered" &&
              r.autoPlay("leave")
            );
          }),
          m(R(r), "onTrackOver", function () {
            return r.props.autoplay && r.pause("hovered");
          }),
          m(R(r), "onTrackLeave", function () {
            return (
              r.props.autoplay &&
              r.state.autoplaying === "hovered" &&
              r.autoPlay("leave")
            );
          }),
          m(R(r), "onSlideFocus", function () {
            return r.props.autoplay && r.pause("focused");
          }),
          m(R(r), "onSlideBlur", function () {
            return (
              r.props.autoplay &&
              r.state.autoplaying === "focused" &&
              r.autoPlay("blur")
            );
          }),
          m(R(r), "render", function () {
            var p = (0, h.default)("slick-slider", r.props.className, {
                "slick-vertical": r.props.vertical,
                "slick-initialized": !0,
              }),
              u = $($({}, r.props), r.state),
              d = (0, b.extractObject)(u, [
                "fade",
                "cssEase",
                "speed",
                "infinite",
                "centerMode",
                "focusOnSelect",
                "currentSlide",
                "lazyLoad",
                "lazyLoadedList",
                "rtl",
                "slideWidth",
                "slideHeight",
                "listHeight",
                "vertical",
                "slidesToShow",
                "slidesToScroll",
                "slideCount",
                "trackStyle",
                "variableWidth",
                "unslick",
                "centerPadding",
                "targetSlide",
                "useCSS",
              ]),
              j = r.props.pauseOnHover;
            d = $(
              $({}, d),
              {},
              {
                onMouseEnter: j ? r.onTrackOver : null,
                onMouseLeave: j ? r.onTrackLeave : null,
                onMouseOver: j ? r.onTrackOver : null,
                focusOnSelect:
                  r.props.focusOnSelect && r.clickable ? r.selectHandler : null,
              },
            );
            var z;
            if (
              r.props.dots === !0 &&
              r.state.slideCount >= r.props.slidesToShow
            ) {
              var U = (0, b.extractObject)(u, [
                  "dotsClass",
                  "slideCount",
                  "slidesToShow",
                  "currentSlide",
                  "slidesToScroll",
                  "clickHandler",
                  "children",
                  "customPaging",
                  "infinite",
                  "appendDots",
                ]),
                k = r.props.pauseOnDotsHover;
              ((U = $(
                $({}, U),
                {},
                {
                  clickHandler: r.changeSlide,
                  onMouseEnter: k ? r.onDotsLeave : null,
                  onMouseOver: k ? r.onDotsOver : null,
                  onMouseLeave: k ? r.onDotsLeave : null,
                },
              )),
                (z = f.default.createElement(B.Dots, U)));
            }
            var Y,
              F,
              ne = (0, b.extractObject)(u, [
                "infinite",
                "centerMode",
                "currentSlide",
                "slideCount",
                "slidesToShow",
                "prevArrow",
                "nextArrow",
              ]);
            ((ne.clickHandler = r.changeSlide),
              r.props.arrows &&
                ((Y = f.default.createElement(V.PrevArrow, ne)),
                (F = f.default.createElement(V.NextArrow, ne))));
            var de = null;
            r.props.vertical && (de = { height: r.state.listHeight });
            var xe = null;
            r.props.vertical === !1
              ? r.props.centerMode === !0 &&
                (xe = { padding: "0px " + r.props.centerPadding })
              : r.props.centerMode === !0 &&
                (xe = { padding: r.props.centerPadding + " 0px" });
            var Ee = $($({}, de), xe),
              Ne = r.props.touchMove,
              je = {
                className: "slick-list",
                style: Ee,
                onClick: r.clickHandler,
                onMouseDown: Ne ? r.swipeStart : null,
                onMouseMove: r.state.dragging && Ne ? r.swipeMove : null,
                onMouseUp: Ne ? r.swipeEnd : null,
                onMouseLeave: r.state.dragging && Ne ? r.swipeEnd : null,
                onTouchStart: Ne ? r.swipeStart : null,
                onTouchMove: r.state.dragging && Ne ? r.swipeMove : null,
                onTouchEnd: Ne ? r.touchEnd : null,
                onTouchCancel: r.state.dragging && Ne ? r.swipeEnd : null,
                onKeyDown: r.props.accessibility ? r.keyHandler : null,
              },
              pe = { className: p, dir: "ltr", style: r.props.style };
            return (
              r.props.unslick &&
                ((je = { className: "slick-list" }), (pe = { className: p })),
              f.default.createElement(
                "div",
                pe,
                r.props.unslick ? "" : Y,
                f.default.createElement(
                  "div",
                  ae({ ref: r.listRefHandler }, je),
                  f.default.createElement(
                    w.Track,
                    ae({ ref: r.trackRefHandler }, d),
                    r.props.children,
                  ),
                ),
                r.props.unslick ? "" : F,
                r.props.unslick ? "" : z,
              )
            );
          }),
          (r.list = null),
          (r.track = null),
          (r.state = $(
            $({}, v.default),
            {},
            {
              currentSlide: r.props.initialSlide,
              targetSlide: r.props.initialSlide ? r.props.initialSlide : 0,
              slideCount: f.default.Children.count(r.props.children),
            },
          )),
          (r.callbackTimers = []),
          (r.clickable = !0),
          (r.debouncedResize = null));
        var I = r.ssrInit();
        return ((r.state = $($({}, r.state), I)), r);
      }
      return (
        ve(P, [
          {
            key: "didPropsChange",
            value: function (r) {
              for (
                var I = !1, p = 0, u = Object.keys(this.props);
                p < u.length;
                p++
              ) {
                var d = u[p];
                if (!r.hasOwnProperty(d)) {
                  I = !0;
                  break;
                }
                if (
                  !(
                    J(r[d]) === "object" ||
                    typeof r[d] == "function" ||
                    isNaN(r[d])
                  ) &&
                  r[d] !== this.props[d]
                ) {
                  I = !0;
                  break;
                }
              }
              return (
                I ||
                f.default.Children.count(this.props.children) !==
                  f.default.Children.count(r.children)
              );
            },
          },
        ]),
        P
      );
    })(f.default.Component)),
    Yn
  );
}
var Bc, rh;
function Fv() {
  if (rh) return Bc;
  rh = 1;
  var f = function (v) {
    return v
      .replace(/[A-Z]/g, function (g) {
        return "-" + g.toLowerCase();
      })
      .toLowerCase();
  };
  return ((Bc = f), Bc);
}
var Yc, ch;
function Iv() {
  if (ch) return Yc;
  ch = 1;
  var f = Fv(),
    v = function (b) {
      var w = /[height|width]$/;
      return w.test(b);
    },
    g = function (b) {
      var w = "",
        B = Object.keys(b);
      return (
        B.forEach(function (V, K) {
          var D = b[V];
          ((V = f(V)),
            v(V) && typeof D == "number" && (D = D + "px"),
            D === !0
              ? (w += V)
              : D === !1
                ? (w += "not " + V)
                : (w += "(" + V + ": " + D + ")"),
            K < B.length - 1 && (w += " and "));
        }),
        w
      );
    },
    h = function (b) {
      var w = "";
      return typeof b == "string"
        ? b
        : b instanceof Array
          ? (b.forEach(function (B, V) {
              ((w += g(B)), V < b.length - 1 && (w += ", "));
            }),
            w)
          : g(b);
    };
  return ((Yc = h), Yc);
}
var Gc, sh;
function e1() {
  if (sh) return Gc;
  sh = 1;
  function f(v) {
    ((this.options = v), !v.deferSetup && this.setup());
  }
  return (
    (f.prototype = {
      constructor: f,
      setup: function () {
        (this.options.setup && this.options.setup(), (this.initialised = !0));
      },
      on: function () {
        (!this.initialised && this.setup(),
          this.options.match && this.options.match());
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (v) {
        return this.options === v || this.options.match === v;
      },
    }),
    (Gc = f),
    Gc
  );
}
var Xc, fh;
function Mh() {
  if (fh) return Xc;
  fh = 1;
  function f(h, b) {
    var w = 0,
      B = h.length,
      V;
    for (w; w < B && ((V = b(h[w], w)), V !== !1); w++);
  }
  function v(h) {
    return Object.prototype.toString.apply(h) === "[object Array]";
  }
  function g(h) {
    return typeof h == "function";
  }
  return ((Xc = { isFunction: g, isArray: v, each: f }), Xc);
}
var Qc, oh;
function t1() {
  if (oh) return Qc;
  oh = 1;
  var f = e1(),
    v = Mh().each;
  function g(h, b) {
    ((this.query = h),
      (this.isUnconditional = b),
      (this.handlers = []),
      (this.mql = window.matchMedia(h)));
    var w = this;
    ((this.listener = function (B) {
      ((w.mql = B.currentTarget || B), w.assess());
    }),
      this.mql.addListener(this.listener));
  }
  return (
    (g.prototype = {
      constuctor: g,
      addHandler: function (h) {
        var b = new f(h);
        (this.handlers.push(b), this.matches() && b.on());
      },
      removeHandler: function (h) {
        var b = this.handlers;
        v(b, function (w, B) {
          if (w.equals(h)) return (w.destroy(), !b.splice(B, 1));
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        (v(this.handlers, function (h) {
          h.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0));
      },
      assess: function () {
        var h = this.matches() ? "on" : "off";
        v(this.handlers, function (b) {
          b[h]();
        });
      },
    }),
    (Qc = g),
    Qc
  );
}
var kc, dh;
function l1() {
  if (dh) return kc;
  dh = 1;
  var f = t1(),
    v = Mh(),
    g = v.each,
    h = v.isFunction,
    b = v.isArray;
  function w() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill",
      );
    ((this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches));
  }
  return (
    (w.prototype = {
      constructor: w,
      register: function (B, V, K) {
        var D = this.queries,
          J = K && this.browserIsIncapable;
        return (
          D[B] || (D[B] = new f(B, J)),
          h(V) && (V = { match: V }),
          b(V) || (V = [V]),
          g(V, function (ae) {
            (h(ae) && (ae = { match: ae }), D[B].addHandler(ae));
          }),
          this
        );
      },
      unregister: function (B, V) {
        var K = this.queries[B];
        return (
          K && (V ? K.removeHandler(V) : (K.clear(), delete this.queries[B])),
          this
        );
      },
    }),
    (kc = w),
    kc
  );
}
var Zc, hh;
function a1() {
  if (hh) return Zc;
  hh = 1;
  var f = l1();
  return ((Zc = new f()), Zc);
}
var mh;
function n1() {
  return (
    mh ||
      ((mh = 1),
      (function (f) {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.default = void 0));
        var v = B(Zt()),
          g = $v(),
          h = B(Iv()),
          b = B(wh()),
          w = Qn();
        function B(T) {
          return T && T.__esModule ? T : { default: T };
        }
        function V(T) {
          "@babel/helpers - typeof";
          return (
            (V =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      typeof Symbol == "function" &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? "symbol"
                      : typeof m;
                  }),
            V(T)
          );
        }
        function K() {
          return (
            (K = Object.assign
              ? Object.assign.bind()
              : function (T) {
                  for (var m = 1; m < arguments.length; m++) {
                    var q = arguments[m];
                    for (var X in q)
                      Object.prototype.hasOwnProperty.call(q, X) &&
                        (T[X] = q[X]);
                  }
                  return T;
                }),
            K.apply(this, arguments)
          );
        }
        function D(T, m) {
          var q = Object.keys(T);
          if (Object.getOwnPropertySymbols) {
            var X = Object.getOwnPropertySymbols(T);
            (m &&
              (X = X.filter(function (C) {
                return Object.getOwnPropertyDescriptor(T, C).enumerable;
              })),
              q.push.apply(q, X));
          }
          return q;
        }
        function J(T) {
          for (var m = 1; m < arguments.length; m++) {
            var q = arguments[m] != null ? arguments[m] : {};
            m % 2
              ? D(Object(q), !0).forEach(function (X) {
                  x(T, X, q[X]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    T,
                    Object.getOwnPropertyDescriptors(q),
                  )
                : D(Object(q)).forEach(function (X) {
                    Object.defineProperty(
                      T,
                      X,
                      Object.getOwnPropertyDescriptor(q, X),
                    );
                  });
          }
          return T;
        }
        function ae(T, m) {
          if (!(T instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        function te(T, m) {
          for (var q = 0; q < m.length; q++) {
            var X = m[q];
            ((X.enumerable = X.enumerable || !1),
              (X.configurable = !0),
              "value" in X && (X.writable = !0),
              Object.defineProperty(T, E(X.key), X));
          }
        }
        function me(T, m, q) {
          return (
            m && te(T.prototype, m),
            Object.defineProperty(T, "prototype", { writable: !1 }),
            T
          );
        }
        function ce(T, m) {
          if (typeof m != "function" && m !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          ((T.prototype = Object.create(m && m.prototype, {
            constructor: { value: T, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(T, "prototype", { writable: !1 }),
            m && $(T, m));
        }
        function $(T, m) {
          return (
            ($ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (X, C) {
                  return ((X.__proto__ = C), X);
                }),
            $(T, m)
          );
        }
        function he(T) {
          var m = ye();
          return function () {
            var X = Te(T),
              C;
            if (m) {
              var L = Te(this).constructor;
              C = Reflect.construct(X, arguments, L);
            } else C = X.apply(this, arguments);
            return oe(this, C);
          };
        }
        function oe(T, m) {
          if (m && (V(m) === "object" || typeof m == "function")) return m;
          if (m !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return ve(T);
        }
        function ve(T) {
          if (T === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return T;
        }
        function ye() {
          try {
            var T = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (ye = function () {
            return !!T;
          })();
        }
        function Te(T) {
          return (
            (Te = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (q) {
                  return q.__proto__ || Object.getPrototypeOf(q);
                }),
            Te(T)
          );
        }
        function x(T, m, q) {
          return (
            (m = E(m)),
            m in T
              ? Object.defineProperty(T, m, {
                  value: q,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (T[m] = q),
            T
          );
        }
        function E(T) {
          var m = R(T, "string");
          return V(m) == "symbol" ? m : String(m);
        }
        function R(T, m) {
          if (V(T) != "object" || !T) return T;
          var q = T[Symbol.toPrimitive];
          if (q !== void 0) {
            var X = q.call(T, m);
            if (V(X) != "object") return X;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (m === "string" ? String : Number)(T);
        }
        var W = (0, w.canUseDOM)() && a1();
        f.default = (function (T) {
          ce(q, T);
          var m = he(q);
          function q(X) {
            var C;
            return (
              ae(this, q),
              (C = m.call(this, X)),
              x(ve(C), "innerSliderRefHandler", function (L) {
                return (C.innerSlider = L);
              }),
              x(ve(C), "slickPrev", function () {
                return C.innerSlider.slickPrev();
              }),
              x(ve(C), "slickNext", function () {
                return C.innerSlider.slickNext();
              }),
              x(ve(C), "slickGoTo", function (L) {
                var P =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !1;
                return C.innerSlider.slickGoTo(L, P);
              }),
              x(ve(C), "slickPause", function () {
                return C.innerSlider.pause("paused");
              }),
              x(ve(C), "slickPlay", function () {
                return C.innerSlider.autoPlay("play");
              }),
              (C.state = { breakpoint: null }),
              (C._responsiveMediaHandlers = []),
              C
            );
          }
          return (
            me(q, [
              {
                key: "media",
                value: function (C, L) {
                  (W.register(C, L),
                    this._responsiveMediaHandlers.push({
                      query: C,
                      handler: L,
                    }));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var C = this;
                  if (this.props.responsive) {
                    var L = this.props.responsive.map(function (S) {
                      return S.breakpoint;
                    });
                    (L.sort(function (S, r) {
                      return S - r;
                    }),
                      L.forEach(function (S, r) {
                        var I;
                        (r === 0
                          ? (I = (0, h.default)({ minWidth: 0, maxWidth: S }))
                          : (I = (0, h.default)({
                              minWidth: L[r - 1] + 1,
                              maxWidth: S,
                            })),
                          (0, w.canUseDOM)() &&
                            C.media(I, function () {
                              C.setState({ breakpoint: S });
                            }));
                      }));
                    var P = (0, h.default)({ minWidth: L.slice(-1)[0] });
                    (0, w.canUseDOM)() &&
                      this.media(P, function () {
                        C.setState({ breakpoint: null });
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._responsiveMediaHandlers.forEach(function (C) {
                    W.unregister(C.query, C.handler);
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var C = this,
                    L,
                    P;
                  (this.state.breakpoint
                    ? ((P = this.props.responsive.filter(function (k) {
                        return k.breakpoint === C.state.breakpoint;
                      })),
                      (L =
                        P[0].settings === "unslick"
                          ? "unslick"
                          : J(J(J({}, b.default), this.props), P[0].settings)))
                    : (L = J(J({}, b.default), this.props)),
                    L.centerMode &&
                      (L.slidesToScroll > 1, (L.slidesToScroll = 1)),
                    L.fade &&
                      (L.slidesToShow > 1,
                      L.slidesToScroll > 1,
                      (L.slidesToShow = 1),
                      (L.slidesToScroll = 1)));
                  var S = v.default.Children.toArray(this.props.children);
                  ((S = S.filter(function (k) {
                    return typeof k == "string" ? !!k.trim() : !!k;
                  })),
                    L.variableWidth &&
                      (L.rows > 1 || L.slidesPerRow > 1) &&
                      (console.warn(
                        "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1",
                      ),
                      (L.variableWidth = !1)));
                  for (
                    var r = [], I = null, p = 0;
                    p < S.length;
                    p += L.rows * L.slidesPerRow
                  ) {
                    for (
                      var u = [], d = p;
                      d < p + L.rows * L.slidesPerRow;
                      d += L.slidesPerRow
                    ) {
                      for (
                        var j = [], z = d;
                        z < d + L.slidesPerRow &&
                        (L.variableWidth &&
                          S[z].props.style &&
                          (I = S[z].props.style.width),
                        !(z >= S.length));
                        z += 1
                      )
                        j.push(
                          v.default.cloneElement(S[z], {
                            key: 100 * p + 10 * d + z,
                            tabIndex: -1,
                            style: {
                              width: "".concat(100 / L.slidesPerRow, "%"),
                              display: "inline-block",
                            },
                          }),
                        );
                      u.push(
                        v.default.createElement("div", { key: 10 * p + d }, j),
                      );
                    }
                    L.variableWidth
                      ? r.push(
                          v.default.createElement(
                            "div",
                            { key: p, style: { width: I } },
                            u,
                          ),
                        )
                      : r.push(v.default.createElement("div", { key: p }, u));
                  }
                  if (L === "unslick") {
                    var U = "regular slider " + (this.props.className || "");
                    return v.default.createElement("div", { className: U }, S);
                  } else
                    r.length <= L.slidesToShow &&
                      !L.infinite &&
                      (L.unslick = !0);
                  return v.default.createElement(
                    g.InnerSlider,
                    K(
                      {
                        style: this.props.style,
                        ref: this.innerSliderRefHandler,
                      },
                      (0, w.filterSettings)(L),
                    ),
                    r,
                  );
                },
              },
            ]),
            q
          );
        })(v.default.Component);
      })(Rc)),
    Rc
  );
}
var vh;
function i1() {
  return (
    vh ||
      ((vh = 1),
      (function (f) {
        (Object.defineProperty(f, "__esModule", { value: !0 }),
          (f.default = void 0));
        var v = g(n1());
        function g(h) {
          return h && h.__esModule ? h : { default: h };
        }
        f.default = v.default;
      })(Dc)),
    Dc
  );
}
var u1 = i1();
const du = bh(u1),
  r1 = [
    {
      name: "Home",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      current: !0,
    },
    {
      name: "Home",
      src: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      current: !1,
    },
    {
      name: "Home",
      src: "https://images.unsplash.com/photo-1649083048269-8bfb755e7b87?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      current: !0,
    },
    {
      name: "Home",
      src: "https://images.unsplash.com/photo-1649083048391-1c9e82472f65?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      current: !0,
    },
  ],
  c1 = () => {
    const f = {
      arrows: !1,
      dots: !0,
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 3e3,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: !0,
    };
    return s.jsx(s.Fragment, {
      children: s.jsx("main", {
        className: "hero-banner lg:pb-16 md:pb-12 pb-8",
        id: "hero",
        children: s.jsxs("div", {
          className: "slider-container relative",
          children: [
            s.jsx(du, {
              ...f,
              children: r1.map((v, g) =>
                s.jsx(
                  "div",
                  {
                    children: s.jsx("div", {
                      className:
                        "h-screen relative before:content-[''] before:absolute before:inset-0 before:bg-black/5",
                      children: s.jsx("img", {
                        src: v.src,
                        alt: v.name,
                        className: "w-full h-full object-cover",
                      }),
                    }),
                  },
                  g,
                ),
              ),
            }),
            s.jsx("div", {
              className: `absolute inset-0 z-30 flex flex-col
                       items-center justify-center text-center px-4
                       lg:items-start lg:justify-center lg:text-left lg:px-20`,
              children: s.jsxs("div", {
                className: "max-w-[800px]",
                children: [
                  s.jsxs("h1", {
                    className: `mb-5 lg:text-5xl md:text-4xl text-3xl font-bold leading-tight text-white uppercase
                           -translate-y-35 md:translate-y-0 `,
                    children: [
                      "Design Beyond ",
                      s.jsx("br", {}),
                      " Live Extraordinary",
                    ],
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm leading-relaxed text-white -translate-y-32 md:translate-y-0",
                    children: "Living | Kitchen | Dinning",
                  }),
                  s.jsx("div", {
                    className: `w-full flex justify-center lg:justify-start
                           -translate-y-28 md:translate-y-0`,
                    children: s.jsx("a", {
                      href: "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                      className:
                        "px-7 py-2 lg:text-lg md:text-base text-sm text-center text-black font-bold bg-[#DBA160] hover:bg-white rounded-lg shadow-xl/25 hover:shadow-xl transition-shadow duration-300",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: "Starting at ₹ 3.4Lacs*",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  ea = ({ type: f, className: v, children: g }) =>
    s.jsx("div", {
      children: s.jsx("h2", {
        className: `lg:text-3xl md:text-2xl text-xl font-bold uppercase ${v}`,
        children: g,
      }),
    }),
  kn = ({ type: f, className: v, children: g }) =>
    s.jsx("div", {
      children: s.jsx("h2", {
        className: `lg:text-2xl md:text-2xl text-xl font-bold ${v}`,
        children: g,
      }),
    }),
  s1 = "/bedroom.JPG",
  f1 = () =>
    s.jsx("section", {
      className: "bedroom-design lg:py-16 md:py-12 py-8",
      id: "bedroom-design",
      children: s.jsx("div", {
        className: "bg-black",
        children: s.jsx("div", {
          className: "container",
          children: s.jsxs("div", {
            className:
              "flex lg:flex-row flex-col items-center justify-between gap-10",
            children: [
              s.jsx("div", {
                className: "lg:w-2/5 md:w-1/2 w-full",
                children: s.jsxs("div", {
                  className:
                    "lg:h-[480px] md:h-[400px] h-[320px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative",
                  children: [
                    s.jsx("span", {
                      className:
                        "absolute top-0 left-0 lg:bottom-5 bottom-2 lg:right-5 right-2 bg-primary rounded-2xl z-0",
                    }),
                    s.jsx("img", {
                      src: s1,
                      className:
                        "w-full h-full object-cover rounded-2xl shadow-2xl relative z-10",
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "lg:w-3/5 md:w-1/2 w-full",
                children: [
                  s.jsx(kn, {
                    className: " text-primary mb-4",
                    children: "That Redefine Comfort and Calm",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Your bedroom is your personal retreat — a space to relax, recharge, and truly be yourself. At Studio6 Interiors, we design bedrooms that blend luxury, functionality, and serenity, tailored to your lifestyle.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "From space-saving wardrobes and smart lighting to soothing color palettes and custom headboards, every detail is thoughtfully designed to create a peaceful and stylish environment.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Whether it’s a master bedroom, guest room, or kids’ space, we bring comfort, elegance, and smart design together — because great sleep begins with great interiors.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  o1 = "/diningroom.JPG",
  d1 = () =>
    s.jsx("section", {
      className: "dining-room lg:py-16 md:py-12 py-8",
      id: "dining-room",
      children: s.jsx("div", {
        className: "bg-black",
        children: s.jsx("div", {
          className: "container",
          children: s.jsxs("div", {
            className:
              "flex lg:flex-row-reverse flex-col items-center justify-between gap-10",
            children: [
              s.jsx("div", {
                className: "lg:w-2/5 md:w-1/2 w-full",
                children: s.jsxs("div", {
                  className:
                    "lg:h-[480px] md:h-[400px] h-[320px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative",
                  children: [
                    s.jsx("span", {
                      className:
                        "absolute top-0 left-0 lg:bottom-5 bottom-2 lg:right-5 right-2 bg-primary rounded-2xl z-0",
                    }),
                    s.jsx("img", {
                      src: o1,
                      className:
                        "w-full h-full object-cover rounded-2xl shadow-2xl relative z-10",
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "lg:w-3/5 md:w-1/2 w-full",
                children: [
                  s.jsx(kn, {
                    className: " text-primary mb-4",
                    children: "Designs That Bring People Together",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "The dining room is more than just a place to eat — it’s where conversations begin and memories are made. At Studio6 Interiors, we design dining spaces that are warm, inviting, and tailored to your lifestyle.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "From elegant dining tables and storage units to mood-setting lighting and wall finishes, every element is chosen to create a stylish and functional setup. Whether it's a compact nook or a grand dining area, we optimize space, flow, and aesthetics.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Host, dine, and unwind in a space that truly brings people together — with Studio6’s custom dining room designs.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  h1 = "/livingroom.JPG",
  m1 = () =>
    s.jsx("section", {
      className: "living-room lg:py-16 md:py-12 py-8",
      id: "living-room",
      children: s.jsx("div", {
        className: "bg-black",
        children: s.jsx("div", {
          className: "container",
          children: s.jsxs("div", {
            className:
              "flex lg:flex-row-reverse flex-col items-center justify-between gap-10",
            children: [
              s.jsx("div", {
                className: "lg:w-2/5 md:w-1/2 w-full",
                children: s.jsxs("div", {
                  className:
                    "lg:h-[480px] md:h-[400px] h-[320px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative",
                  children: [
                    s.jsx("span", {
                      className:
                        "absolute top-0 left-0 lg:bottom-5 bottom-2 lg:right-5 right-2 bg-primary rounded-2xl z-0",
                    }),
                    s.jsx("img", {
                      src: h1,
                      className:
                        "w-full h-full object-cover rounded-2xl shadow-2xl relative z-10",
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "lg:w-3/5 md:w-1/2 w-full",
                children: [
                  s.jsx(kn, {
                    className: " text-primary mb-4",
                    children: "Interiors That Make Every Moment Feel Like Home",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Your living room is where stories are shared, laughter echoes, and first impressions are made. At Studio6 Interiors, we craft living room designs that perfectly balance comfort, elegance, and functionality.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Whether you love minimalist modern, luxe contemporary, or cozy traditional vibes — we bring your style to life with the right furnishings, lighting, wall treatments, and layout planning. Every element is designed to reflect your personality while making the most of your space.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "From TV units and false ceilings to space-saving storage and statement décor, we turn your living room into a space you’ll love coming home to",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  v1 = "/modularkit.JPG",
  y1 = () =>
    s.jsx("section", {
      className: "modular-kitchen lg:py-16 md:py-12 py-8",
      id: "modular-kitchen",
      children: s.jsx("div", {
        className: "bg-black",
        children: s.jsx("div", {
          className: "container",
          children: s.jsxs("div", {
            className:
              "flex lg:flex-row flex-col items-center justify-between gap-10",
            children: [
              s.jsx("div", {
                className: "lg:w-2/5 md:w-1/2 w-full",
                children: s.jsxs("div", {
                  className:
                    "lg:h-[480px] md:h-[400px] h-[320px] lg:pt-5 pt-2 lg:pl-5 pl-2 relative",
                  children: [
                    s.jsx("span", {
                      className:
                        "absolute top-0 left-0 lg:bottom-5 bottom-2 lg:right-5 right-2 bg-primary rounded-2xl z-0",
                    }),
                    s.jsx("img", {
                      src: v1,
                      className:
                        "w-full h-full object-cover rounded-2xl shadow-2xl relative z-10",
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "lg:w-3/5 md:w-1/2 w-full",
                children: [
                  s.jsx(kn, {
                    className: " text-primary mb-4",
                    children: "That Blend Style with Smart Storage",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "At Studio6 Interiors, we design modular kitchens that are not just beautiful, but brilliantly functional. Whether you're looking for a compact kitchen for apartments or a spacious layout for large homes, our custom modular kitchen solutions are crafted to suit your space, style, and budget.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "From L-shaped, U-shaped, parallel kitchens, to island counters, we bring smart layouts, premium materials, and clutter-free storage — all delivered with on-time installation and personalized design support.",
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Transform your cooking space into a statement of comfort, class, and convenience with Studio6 Modular Kitchens.",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  g1 = () =>
    s.jsx(s.Fragment, {
      children: s.jsx("section", {
        className: "our-products lg:py-16 md:py-12 py-8",
        id: "our-products",
        children: s.jsxs("div", {
          className: "container",
          children: [
            s.jsx(y1, {}),
            s.jsx(m1, {}),
            s.jsx(f1, {}),
            s.jsx(d1, {}),
          ],
        }),
      }),
    }),
  // Data for the "How it works" steps carousel
uu = [
    {
      title: "Site Visit",
      desc: "Our experts visit your space to understand your vision, layout, and requirements — the first step to bring your dream interior to life.",
      src: s.jsxs("svg", {
        width: "40",
        height: "41",
        viewBox: "0 0 40 41",
        className: "fill-current",
        children: [
          s.jsx("path", {
            opacity: "0.5",
            d: "M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z",
          }),
          s.jsx("path", {
            d: "M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z",
          }),
        ],
      }),
    },
    {
      title: "Quote Approval",
      desc: "We share a detailed estimate based on your preferences and requirements. Approve it to move forward with clarity and confidence.",
      src: s.jsxs("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        className: "fill-current",
        children: [
          s.jsx("path", {
            opacity: "0.5",
            d: "M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z",
          }),
          s.jsx("path", {
            d: "M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z",
          }),
        ],
      }),
    },
    {
      title: "3D Design & Cutting",
      desc: "Get a visual walkthrough of your space with customized 3D designs. Once approved, we begin precision cutting and preparation.",
      src: s.jsxs("svg", {
        width: "40",
        height: "45",
        viewBox: "0 0 40 45",
        className: "fill-current",
        children: [
          s.jsx("path", {
            opacity: "0.5",
            d: "M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z",
          }),
          s.jsx("path", {
            d: "M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z",
          }),
        ],
      }),
    },
    {
      title: "Site Installation",
      desc: "Our skilled team ensures timely and seamless on-site installation, transforming designs into reality with care and precision.",
      src: s.jsxs("svg", {
        width: "40",
        height: "42",
        viewBox: "0 0 40 42",
        class: "fill-current",
        children: [
          s.jsx("path", {
            opacity: "0.5",
            d: "M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z",
          }),
          s.jsx("path", {
            d: "M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z",
          }),
        ],
      }),
    },
    {
      title: "Final Handover",
      desc: "We do a quality check and hand over your beautifully crafted space — ready for you to move in and enjoy!",
      src: s.jsxs("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        class: "fill-current",
        children: [
          s.jsx("path", {
            opacity: "0.5",
            d: "M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z",
          }),
          s.jsx("path", {
            d: "M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z",
          }),
        ],
      }),
    },
  ],
  p1 = 3e3,
  // Component: "How it works" section
  b1 = () => {
    const f = We.useRef(null),
      v = We.useRef([]),
      [g, h] = We.useState(-1);
    return (
      We.useEffect(() => {
        const b = setInterval(() => {
          h((w) => (w >= uu.length - 1 ? -1 : w + 1));
        }, p1);
        return () => clearInterval(b);
      }, []),
      We.useEffect(() => {
        if (g !== -1 && v.current[g] && f.current) {
          const b = f.current,
            w = v.current[g];
          (b.getBoundingClientRect(), w.getBoundingClientRect());
          const B =
            w.offsetLeft - b.offsetLeft - b.clientWidth / 2 + w.clientWidth / 2;
          b.scrollTo({ left: B, behavior: "smooth" });
        }
      }, [g]),
      s.jsx("section", {
        className: "how-it-works lg:py-16 md:py-12 py-8",
        id: "how-it-works",
        children: s.jsx("div", {
          className: "bg-black",
          children: s.jsxs("div", {
            className: "container relative",
            children: [
              s.jsxs("div", {
                className: "text-center lg:mb-16 md:mb-12 mb-8",
                children: [
                  s.jsx(ea, {
                    className: "text-center text-primary mb-4",
                    children: "How it works",
                  }),
                  s.jsxs("p", {
                    className:
                      "mb-5 md:text-base text-sm text-gray-400 font-light",
                    children: [
                      "Mobile banking differs from mobile payments, which involves the use of ",
                      s.jsx("br", {}),
                      " a mobile device",
                    ],
                  }),
                ],
              }),
              s.jsx("div", {
                className: "relative h-full",
                children: s.jsx("div", {
                  className:
                    "relative h-full flex flex-row items-center justify-between z-10 overflow-x-auto no-scrollbar",
                  ref: f,
                  children: uu.map((b, w) =>
                    s.jsx(
                      "div",
                      {
                        className:
                          "relative w-[270px] md:mb-2 mb-8 xl:h-auto lg:h-[450px] grow-0 shrink-0 basis-[270px] p-4",
                        ref: (B) => (v.current[w] = B),
                        children: s.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            b.src
                              ? s.jsxs("div", {
                                  className: `work-steps relative flex h-[100px] w-[100px] items-center justify-center rounded-full border-2 transition-all duration-300 lg:mb-10 md:mb-8 mb-6 ${w <= g ? "bg-primary text-white border-primary scale-105 shadow-lg" : "bg-primary/30 text-primary border-primary"} ${w !== uu.length - 1 && "before:content-[''] before:absolute before:top-0 before:left-[100%] before:bottom-0 before:right-0 before:w-[140px] before:h-[1px] before:m-auto before:bg-white"}`,
                                  children: [
                                    s.jsx(s.Fragment, { children: b.src }),
                                    w !== uu.length - 1 &&
                                      s.jsx(yv, {
                                        className:
                                          "block absolute text-white right-[-150px]",
                                      }),
                                  ],
                                })
                              : s.jsx("div", {
                                  className:
                                    "w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4",
                                  children: s.jsx("span", {
                                    className: "text-white text-xl",
                                    children: w + 1,
                                  }),
                                }),
                            s.jsxs("div", {
                              className:
                                "flex flex-col md:min-h-[150px] min-h-[120px] items-center",
                              children: [
                                s.jsx("h3", {
                                  className:
                                    "lg:text-lg md:text-base text-sm font-bold mb-4 text-white text-center",
                                  children: b.title,
                                }),
                                s.jsx("p", {
                                  className:
                                    "lg:text-lg md:text-base text-sm text-white font-light text-center",
                                  children: b.desc,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      w,
                    ),
                  ),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  x1 = "/offers3.JPG",
  zh = "/offers2.JPG",
  S1 = "/offers1.JPG",
  // Offer packages (Essential / Eleganza / Premium Plus) data
yh = [
    {
      name: "ESSENTIAL",
      id: "essential",
      type: "ESSENTIAL for 2BHK",
      src: S1,
      oldPrice: "₹3.500.000",
      newPrice: "₹3.49 Lac",
      content: [
        { title: "Living Room", description: ["Premium TV display unit"] },
        {
          title: "Dining Room",
          description: ["Crockery unit with glass Shutters"],
        },
        {
          title: "Master Bedroom",
          description: [
            "Soft Close 1 door wardrobe Dressing unit with Mirror Loft covered with framed & Shutter",
          ],
        },
        {
          title: "Guest Bedroom",
          description: [
            "Soft Close 3door Wardrobe. Loft covered with frame and Shutter",
          ],
        },
        {
          title: "Kitchen",
          description: [
            "Bottom Cabinets, Overhead Cabinets, Accessories - 5NO Chimney-faber",
          ],
        },
      ],
    },
    {
      name: "ELEGANZA",
      id: "eleganza",
      type: "ELEGANZA for 3BHK",
      src: zh,
      oldPrice: "₹3.500.000",
      newPrice: "₹6.29 Lac",
      content: [
        {
          title: "Living Room",
          description: ["Premium TV display unit", "Pooja/prayer unit"],
        },
        {
          title: "Dining Room",
          description: [
            "Crokery unit with glass and Shutters",
            "Customised partition for hall & Dinning",
          ],
        },
        {
          title: "Master Bedroom",
          description: [
            "Soft Close 5 door wardrobe",
            "Dressing unit with Mirror",
            "Custom-made Study table",
            "Loft with head board",
            "Bed Side table (2 Nos)",
          ],
        },
        {
          title: "Kids room",
          description: [
            "Soft Close 3 door wardrobe",
            "Dressing unit with Mirror",
            "Custom-made Study table",
            "Cot with head board",
            "Bed Side table (2 Nos)",
          ],
        },
        {
          title: "Guest Bedroom",
          description: [
            "Soft closed hinged 2 door wardrobe",
            "Dressing unit with mirror"
          ],
        },
        {
          title: "Kitchen",
          description: [
            "Bottom Cabinets",
            "Top Cabinets",
            "Accessories - 5NO",
            "Chimney-faber",
          ],
        },
      ],
    },
    {
      name: "Premium PLUS",
      id: "premium-plus",
      type: "PREMIUM PLUS for 3BHK",
      src: x1,
      oldPrice: "₹3.500.000",
      newPrice: "₹8.69 Lac",
      content: [
        {
          title: "Living Room",
          description: [
            "Premium TV display unit",
            "False ceiling work",
            "Pooja/prayer unit",
            "Hall paneling with premium panels",
          ],
        },
        {
          title: "Dining Room",
          description: [
            "Crokery unit with glass Shutters",
            "Wash unit with projected mirror",
            "Customised living & dinning partition",
          ],
        },
        {
          title: "Master Bedroom",
          description: [
            "5 door Soft Close wardrobe",
            "Loft coverage with frame & Shutter",
            "Loft with storage & headboard",
            "Study table Customized",
            "Bed side table - 2",
            "Dressing unit with Mirror",
          ],
        },
        {
          title: "Kids room",
          description: [
            "3 door Soft Close wardrobe",
            "Loft coverage with frame & Shutter",
            "Loft with storage & headboard",
            "Study table Customized",
            "Dressing unit with Mirror",
            "Bed side table - 2",
          ],
        },
        {
          title: "Guest Bedroom",
          description: [
            "3 door Soft Close wardrobe",
            "Loft coverage with frame & Shutter",
            "Loft with storage & headboard",
            "Bed side table - 2",
          ],
        },
        {
          title: "Kitchen",
          description: [
            "Premium finish acrylic Bottom Cabinets",
            "Premium finish acrylic Top Cabinets",
            "Accessories - 6",
            "Chimney - Faber",
          ],
        },
      ],
    },
  ],
  O1 = () =>
    s.jsxs("svg", {
      width: "129",
      height: "108",
      viewBox: "0 0 129 108",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsx("path", {
          opacity: "0.5",
          d: "M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z",
          fill: "#fac78e",
        }),
        s.jsx("path", {
          opacity: "0.3",
          d: "M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z",
          fill: "#ffd29f",
        }),
        s.jsxs("defs", {
          children: [
            s.jsxs("linearGradient", {
              id: "paint0_linear_70:153",
              x1: "69.6694",
              y1: "29.9033",
              x2: "196.108",
              y2: "83.2919",
              gradientUnits: "userSpaceOnUse",
              children: [
                s.jsx("stop", {
                  "stop-color": "#4A6CF7",
                  "stop-opacity": "0.62",
                }),
                s.jsx("stop", {
                  offset: "1",
                  "stop-color": "#4A6CF7",
                  "stop-opacity": "0",
                }),
              ],
            }),
            s.jsxs("linearGradient", {
              id: "paint1_linear_70:153",
              x1: "165.348",
              y1: "-75.4466",
              x2: "-3.75136",
              y2: "103.645",
              gradientUnits: "userSpaceOnUse",
              children: [
                s.jsx("stop", {
                  "stop-color": "#4A6CF7",
                  "stop-opacity": "0.62",
                }),
                s.jsx("stop", {
                  offset: "1",
                  "stop-color": "#4A6CF7",
                  "stop-opacity": "0",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  gh = () =>
    s.jsx("svg", {
      width: "16",
      height: "13",
      viewBox: "0 0 16 13",
      class: "fill-current",
      children: s.jsx("path", {
        d: "M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z",
      }),
    }),
  // Component: Offer Packages section (pricing cards)
w1 = () => {
    const [f, v] = We.useState(null),
      [g, h] = We.useState(""),
      b = (B) => {
        v((V) => (V === B ? null : B));
      },
      w = (B) => {
        let V = `#${B}`;
        const K = document.querySelector(V);
        if (K) {
          const J = K.getBoundingClientRect().top + window.scrollY - 80;
          (window.scrollTo({ top: J, behavior: "smooth" }), h(B));
        }
      };
    return s.jsx(s.Fragment, {
      children: s.jsx("section", {
        className: "offer-packages lg:py-16 md:py-12 py-8",
        id: "offer-packages",
        children: s.jsx("div", {
          className: "bg-black",
          children: s.jsxs("div", {
            className: "container",
            children: [
              s.jsx("div", {
                className: "text-center lg:mb-16 md:mb-12 mb-8",
                children: s.jsx(ea, {
                  className: "text-center text-primary mb-4 uppercase",
                  children: "Offer Packages",
                }),
              }),
              s.jsx("div", {
                className: "grid md:grid-cols-3 gap-4 lg:mb-16 md:mb-12 mb-8",
                children: yh.map((B, V) =>
                  s.jsx(
                    "div",
                    {
                      children: s.jsxs("div", {
                        className: "bg-white relative",
                        onClick: () => {
                          (console.log(B.id), w(B.id));
                        },
                        children: [
                          s.jsx("div", {
                            className:
                              "relative md:h-[340px] sm:[280px] h-[200px]",
                            children: s.jsx("img", {
                              src: B.src,
                              alt: B.name,
                              className: "w-full h-full object-cover mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg",
                            }),
                          }),
                          s.jsxs("div", {
                            className: "px-6 py-4",
                            children: [
                              s.jsx("h3", {
                                className:
                                  "lg:text-xl md:text-lg text-base font-bold text-black mb-2 uppercase",
                                children: B.name,
                              }),
                              s.jsx("p", {
                                className:
                                  "lg:text-base md:text-sm text-xs text-gray-600 mb-2",
                                children: B.type,
                              }),
                              s.jsx("div", {
                                className: "flex items-center gap-2",
                                children: s.jsx("span", {
                                  className:
                                    "text-[#A36E2A] font-bold lg:text-lg md:text-base text-sm",
                                  children: B.newPrice,
                                }),
                              }),
                              s.jsxs("button", {
                                className:
                                  "flex items-center gap-2 !bg-primary text-black !p-2 lg:!p-4 rounded-md hover:bg-primary-dark transition-colors duration-200 md:text-sm text-xs font-bold mt-4 md:hidden",
                                onClick: () => b(V),
                                children: [
                                  f === V ? "Hide Details" : "View Details",
                                  s.jsx(vv, {
                                    className: "text-black w-3 h-3",
                                  }),
                                ],
                              }),
                              s.jsx("div", {
                                className: `transition-all duration-500 ease-in-out overflow-hidden transform ${f === V ? "max-h-[1000px] opacity-100 scale-100 mt-8 md:mt-12" : "max-h-0 opacity-0 scale-95 mt-0"}`,
                                children: s.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: B.content.map((K, D) =>
                                    s.jsx(
                                      "div",
                                      {
                                        className: "flex items-start gap-2",
                                        children: s.jsxs("div", {
                                          className:
                                            "text-gray-700 flex flex-col",
                                          children: [
                                            s.jsx("div", {
                                              className:
                                                "lg:text-xl md:text-lg text-base font-bold",
                                              children: s.jsxs("div", {
                                                className:
                                                  "flex gap-2 items-center mb-4",
                                                children: [
                                                  s.jsx("span", {
                                                    class:
                                                      "bg-primary/10 text-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md",
                                                    children: s.jsx(gh, {}),
                                                  }),
                                                  K.title,
                                                ],
                                              }),
                                            }),
                                            s.jsx("ul", {
                                              className:
                                                "pl-6 list-disc flex flex-col justify-center gap-2",
                                              children: K.description.map(
                                                (J, ae) =>
                                                  s.jsx(
                                                    "li",
                                                    {
                                                      className:
                                                        "lg:text-xl md:text-lg text-base",
                                                      children: J,
                                                    },
                                                    ae,
                                                  ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      },
                                      D,
                                    ),
                                  ),
                                }),
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-[129px] h-[108px]",
                            children: s.jsx(O1, {}),
                          }),
                        ],
                      }),
                    },
                    V,
                  ),
                ),
              }),
              s.jsx("div", {
                className: "mb-10 md:block hidden",
                children: yh.map((B, V) =>
                  s.jsxs(
                    "div",
                    {
                      className: "lg:mb-16 md:mb-12 mb-8",
                      id: B.id,
                      children: [
                        s.jsxs("div", {
                          className:
                            "relative md:h-[340px] sm:[280px] h-[200px]",
                          children: [
                            s.jsx("img", {
                              src: B.src,
                              alt: B.name,
                              className: "w-full h-full object-cover mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg",
                            }),
                            s.jsxs("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full bg-black/70 p-4 flex flex-col justify-center items-center",
                              children: [
                                s.jsx("h4", {
                                  className:
                                    "lg:text-[30px] md:text-2xl text-xl font-semibold text-white mb-4",
                                  children: B.name,
                                }),
                                s.jsx("p", {
                                  className:
                                    "lg:text-base md:text-sm text-xs text-white mb-4",
                                  children: B.type,
                                }),
                                s.jsx("div", {
                                  className: "flex items-center gap-2",
                                  children: s.jsx("span", {
                                    className:
                                      "text-[#A36E2A] font-bold lg:text-lg md:text-base text-sm",
                                    children: B.newPrice,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "bg-white p-6",
                          children: s.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: B.content.map((K, D) =>
                              s.jsx(
                                "div",
                                {
                                  className: "flex items-start gap-2",
                                  children: s.jsxs("div", {
                                    className: "text-gray-700 flex flex-col",
                                    children: [
                                      s.jsx("div", {
                                        className:
                                          "lg:text-xl md:text-lg text-base font-bold",
                                        children: s.jsxs("div", {
                                          className:
                                            "flex gap-2 items-center mb-4",
                                          children: [
                                            s.jsx("span", {
                                              class:
                                                "bg-primary/10 text-primary mr-2 flex h-[30px] w-[30px] items-center justify-center rounded-md",
                                              children: s.jsx(gh, {}),
                                            }),
                                            K.title,
                                          ],
                                        }),
                                      }),
                                      s.jsx("ul", {
                                        className:
                                          "pl-6 list-disc flex flex-col justify-center gap-2",
                                        children: K.description.map((J, ae) =>
                                          s.jsx(
                                            "li",
                                            {
                                              className:
                                                "lg:text-xl md:text-lg text-base",
                                              children: J,
                                            },
                                            ae,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                },
                                D,
                              ),
                            ),
                          }),
                        }),
                      ],
                    },
                    V,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ch = "/explore3.jpg",
  j1 = "/assets/home_interior_2-DGBYGVpf.JPG",
  T1Image = "/assets/home_interior_3-CICshZ4S.JPG",
  _1 = "/assets/home_interior_4-Cjlz-O2b.JPG",
  Ah = "/study2.jpg",
  ph = [
    {
      name: "SG Rahul",
      role: "⭐⭐⭐",
      content:
        "I’m so happy with my living room transformation by Studio 6! They nailed my modern minimalist style with clean lines, neutral colors, and beautiful statement lighting. The designer paid attention to every detail and kept me involved throughout the process. Highly recommend!",
    },
    {
      name: "vishnu kumar",
      role: "⭐⭐⭐⭐⭐",
      content:
        "The team was professional, creative, and attentive to every detail. From the initial consultation to the final walk-through, the process was seamless and stress-free. The designers listened to my ideas and preferences, offering valuable suggestions and guidance.The quality of workmanship was exceptional, with attention to every detail.",
    },
    {
      name: "Divitha Balu",
      role: "⭐⭐⭐⭐",
      content:
        "Studio6 interiors is a interior design firm that takes the requirements of its clients very seriously. Even if we are in dilemma, they will provide the best options/suggestions from their end as well and leave the final decision to us. The quality of their work is really good along with being affordable. The service they provide after completion is also of great quality.",
    },
    {
      name: "Chitra Gopal",
      role: "⭐⭐⭐⭐⭐",
      content:
        "They are good at cost effective quality work and on time completion. Customer friendly and we are very happy with their work...",
    },
    {
      name: "ChandraMohan G",
      role: "⭐⭐⭐⭐",
      content:
        "Excellent customer service and very professional attitude. Timely delivery and installation was really good. Price is comparably less.highly recommend ❤️",
    },
    {
      name: "Gunasekaran S",
      role: "⭐⭐⭐⭐⭐",
      content:
        "Very good response and the way of approach the clients are really good. Providing a pleasant work from the experienced professionals...",
    },
  ],
  N1 = () => {
    const f = {
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: !0,
        speed: 800,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: !1,
        pauseOnFocus: !1,
        responsive: [
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      },
      v = {
        dots: !1,
        arrows: !1,
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: !0,
        speed: 800,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: !1,
        pauseOnFocus: !1,
        responsive: [
          { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      },
      g = () => {
        const w = [
          "#FF5733",
          "#33FF57",
          "#3357FF",
          "#FF33A8",
          "#FFD733",
          "#8E44AD",
        ];
        return w[Math.floor(Math.random() * w.length)];
      },
      h = [
        "#F87171",
        "#FBBF24",
        "#34D399",
        "#60A5FA",
        "#A78BFA",
        "#F472B6",
        "#FCD34D",
      ],
      b = (w) => h[w % h.length];
    return s.jsxs("section", {
      className: "testimonials lg:py-16 md:py-12 py-8",
      id: "testimonials",
      children: [
        s.jsx("div", {
          className: "container",
          children: s.jsxs("div", {
            className: "text-center mb-10",
            children: [
              s.jsx("h2", {
                className:
                  "font-normal lg:text-2xl md:text-xl text-lg text-center text-primary mb-4",
                children: "HAPPY CUSTOMERS",
              }),
              s.jsx(ea, {
                className: "text-center text-primary mb-4",
                children: "What The People Think About Us",
              }),
            ],
          }),
        }),
        s.jsxs("div", {
          className: "p-4",
          children: [
            s.jsx("div", {
              className: "slider-container my-5 review-slider",
              children: s.jsx(du, {
                ...f,
                children: ph.map((w, B) => {
                  var V;
                  return s.jsx(
                    "div",
                    {
                      className: "relative lg:px-4 md:px-2 px-1",
                      children: s.jsxs("div", {
                        className:
                          "p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 min-h-[200px]",
                        children: [
                          s.jsxs("div", {
                            className:
                              "flex items-center justify-between gap-4",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-start gap-4 relative z-10",
                                children: [
                                  s.jsx("span", {
                                    className:
                                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm",
                                    style: { backgroundColor: b(B) },
                                    children:
                                      (V = w.name) == null
                                        ? void 0
                                        : V.charAt(0).toUpperCase(),
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("h4", {
                                        className:
                                          "md:text-lg text-base font-bold text-black truncate",
                                        children: w.name,
                                      }),
                                      s.jsx("p", {
                                        className: "text-xs text-gray-600",
                                        children: w.role,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              s.jsx(Pd, {
                                style: {
                                  marginRight: "24px",
                                  fontSize: "36px",
                                  opacity: 0.2,
                                  color: g(),
                                },
                                className:
                                  "absolute md:right-0 md:top-0 top-2 right-0 md:mr-6 md:mt-2 z-1",
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            className: "overflow-y-auto flex-1",
                            children: s.jsx("p", {
                              className:
                                "lg:text-base md:text-sm text-xs text-gray-600",
                              children: w.content,
                            }),
                          }),
                        ],
                      }),
                    },
                    `testimonials1-${B}`,
                  );
                }),
              }),
            }),
          ],
        }),
      ],
    });
  },
  M1 = () =>
    s.jsx("section", {
      className: "designs-hero lg:py-16 md:py-12 py-8",
      id: "designs-hero",
      children: s.jsx("div", {
        className: "",
        children: s.jsx("div", {
          className: "container",
          children: s.jsx("div", {
            className: "relative bg-primary rounded-lg lg:h-[500px]",
            children: s.jsxs("div", {
              className:
                "flex flex-col lg:flex-row justify-between items-center h-full",
              children: [
                s.jsx("div", {
                  className:
                    "w-full lg:w-4/6 md:w-5/6 lg:py-10 md:py-8 py-4 lg:px-8 px-4",
                  children: s.jsxs("div", {
                    className: "p-4 lg:p-12 md:p-10 flex-1",
                    children: [
                      s.jsxs(ea, {
                        className: "text-black mb-4",
                        children: [
                          "50+ Beautiful design ",
                          s.jsx("br", {}),
                          " interiors",
                        ],
                      }),
                      s.jsx("div", {
                        className: "flex gap-4 mb-6",
                        children: s.jsx("button", {
                          className:
                            "text-sm md:text-base lg:text-lg font-medium px-2 lg:px-4 py-2 rounded-md bg-[#DBA160] text-white  hover:!bg-white hover:text-black transition-all duration-1000 ",
                          style: { border: "none", outline: "none" },
                          onClick: () =>
                            window.open(
                              "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                              "_blank",
                            ),
                          children: "Book for free consultation →",
                        }),
                      }),
                      s.jsxs("div", {
                        className: "flex gap-8",
                        children: [
                          s.jsx("a", {
                            href: "tel:+91-904 3463200",
                            children: s.jsxs("div", {
                              className: "flex flex-col items-center",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "bg-[#3769a0] p-2 rounded-full shadow-md",
                                  children: s.jsx(bv, {
                                    className: "text-white w-6 h-6",
                                  }),
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-black md:text-sm text-xs mt-1",
                                  children: "Call",
                                }),
                              ],
                            }),
                          }),
                          s.jsx("a", {
                            href: "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                            target: "_blank",
                            children: s.jsxs("div", {
                              className: "flex flex-col items-center",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "bg-[#28a519] p-2 rounded-full shadow-md",
                                  children: s.jsx(Oh, {
                                    className: "text-white w-6 h-6",
                                  }),
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-black md:text-sm text-xs mt-1",
                                  children: "Whatsapp",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s.jsx("div", {
                  className:
                    "w-full lg:w-2/6 md:w-5/6 px-4 mb-6 md:mb-0 h-full",
                  children: s.jsx("div", {
                    className: "lg:w-5/6 h-full",
                    children: s.jsx("div", {
                      className:
                        "w-full h-96 lg:h-full rounded-lg overflow-hidden transform lg:-translate-y-6 md:-translate-y-3 translate-y-8 lg:translate-x-unset md:translate-x-6 translate-x-4 lg:scale-105 md:scale-103 scale-100 shadow-xl",
                      children: s.jsx("img", {
                        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        alt: "logo",
                        className:
                          "h-full w-full object-cover rounded-t-none md:rounded-tl-xl md:rounded-bl-xl",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
function z1(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
        },
        child: [],
      },
    ],
  })(f);
}
function C1(f) {
  return Et({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z",
        },
        child: [],
      },
    ],
  })(f);
}
function ig(f) {
  return Et({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1-26.2 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        },
        child: [],
      },
    ],
  })(f);
}
const A1 = [
    { name: "Home", href: "#hero" },
    { name: "Pricing", href: "#offer-packages" },
    { name: "About", href: "#about-us" },
    { name: "Contact", href: "#designs-hero" },
  ],
  D1 = [
    { icon: hv, href: "https://www.facebook.com/studio6interiors" },
    { icon: ig, href: "https://www.instagram.com/studio6interiors_?igsh=MW5teHI3ZXdwOWIxbg==" },
  ],
  R1 = [
    {
      title: "Email",
      desc: "studio6interiors5292@gmail.com",
      href: "mailto:studio6interiors5292@gmail.com",
    },
    { title: "Phone", desc: "904-346-3200", href: "tel:+91-904 3463200" },
    {
      title: "Address",
      desc: "1/98, STUDIO6 interiors Vadakku sambala thottam, kannampalayam, (opposite DMART -Ravuthur, Coimbatore, Tamil Nadu 641402",
      href: "",
    },
  ],
  H1 = () =>
    s.jsx("div", {
      className:
        "relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-lg",
      children: s.jsx("iframe", {
        title: "Studio6 Interiors Location",
        src: "https://www.google.com/maps?q=STUDIO6+interiors,+Vadakku+sambala+thottam,+Kannampalayam,+Coimbatore,+Tamil+Nadu+641402&output=embed",
        className: "absolute top-0 left-0 w-full h-full border-0",
        loading: "lazy",
        allowFullScreen: !0,
        referrerPolicy: "no-referrer-when-downgrade",
      }),
    }),
  L1 = () =>
    s.jsx("footer", {
      className: "footer lg:pt-16 md:pt-12 pt-8 sm:pb-0 pb-[120px]",
      children: s.jsx("div", {
        className: "container",
        children: s.jsxs("div", {
          className: "bg-gray-800 text-white lg:py-10 lg:px-8 p-4 rounded-3xl",
          children: [
            s.jsx("div", {
              className: "lg:mb-10 mb-6",
              children: s.jsxs("div", {
                className:
                  "flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4",
                children: [
                  s.jsx("div", {
                    className: "lg:w-2/6 px-4",
                    children: s.jsx("img", {
                      src: su,
                      alt: "logo",
                      width: 80,
                      height: 20,
                    }),
                  }),
                  s.jsx("div", {
                    className: "lg:w-3/6 px-4",
                    children: s.jsx("div", {
                      className:
                        "flex lg:flex-row flex-col justify-center gap-4",
                      children: A1.map((f, v) =>
                        s.jsx(
                          "a",
                          {
                            href: f.href,
                            className:
                              "lg:text-base md:text-sm text-xs text-white transition-colors duration-200 !underline",
                            children: f.name,
                          },
                          v,
                        ),
                      ),
                    }),
                  }),
                  s.jsx("div", {
                    className: "lg:w-1/6 px-4",
                    children: s.jsx("div", {
                      className: "flex flex-row gap-4",
                      children: D1.map((f, v) => {
                        const g = f.icon;
                        return s.jsx(
                          "a",
                          {
                            href: f.href,
                            className: "text-white text-2xl",
                            children: s.jsx(g, {}),
                          },
                          v,
                        );
                      }),
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "lg:mb-10 mb-6",
              children: s.jsxs("div", {
                className:
                  "flex lg:flex-row flex-col justify-between lg:items-center items-start gap-4",
                children: [
                  s.jsxs("div", {
                    className: "lg:w-2/6 px-4",
                    children: [
                      s.jsx("h4", {
                        className:
                          "md:text-lg text-base text-primary font-semibold mb-4",
                        children: "Contact us:",
                      }),
                      s.jsx("div", {
                        className: "flex flex-col gap-4 mt-2",
                        children: R1.map((f, v) =>
                          s.jsxs(
                            "div",
                            {
                              className:
                                "text-white  transition-colors duration-200 flex flex-row gap-1",
                              children: [
                                s.jsxs("h5", {
                                  className: "lg:text-base md:text-sm text-xs",
                                  children: [f.title, ":"],
                                }),
                                s.jsx("a", {
                                  href: f.href,
                                  className: f.href ? "hover:text-primary" : "",
                                  children: s.jsx("p", {
                                    className:
                                      "lg:text-base md:text-sm text-xs",
                                    children: f.desc,
                                  }),
                                }),
                              ],
                            },
                            v,
                          ),
                        ),
                      }),
                    ],
                  }),
                  s.jsx("div", {
                    className: "lg:w-2/6 w-full lg:px-4",
                    children: s.jsx(H1, {}),
                  }),
                  s.jsx("div", {
                    className: "lg:w-2/6 lg:px-4",
                    children: s.jsx("div", {
                      className: "bg-dark/20 lg:py-10 py-4 rounded-2xl",
                      children: s.jsx("div", {
                        className:
                          "flex flex-row justify-between items-center px-4 py-2",
                        children: s.jsxs("a", {
                          href: "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                          className:
                            "flex items-center gap-2 w-full h-full ml-4 !bg-primary text-black !p-2 lg:!p-4 rounded-md hover:bg-primary-dark transition-colors duration-200 lg:text-base md:text-sm text-xs font-bold",
                          target: "_blank",
                          children: [
                            s.jsx("div", {
                              className:
                                "bg-[#28a519] p-2 rounded-full shadow-md",
                              children: s.jsx(Oh, {
                                className: "text-white w-6 h-6",
                              }),
                            }),
                            "Book a free consultation",
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("hr", {}),
            s.jsx("div", {
              className: "lg:mt-10 mt-6",
              children: s.jsx("div", {
                className: "px-4",
                children: s.jsxs("div", {
                  className:
                    "flex lg:flex-row flex-col-reverse lg:items-center items-start gap-4",
                  children: [
                    s.jsxs("div", {
                      className: "flex-1",
                      children: [
                        s.jsxs("p", {
                          className: "text-white lg:text-base md:text-sm text-xs",
                          children: [
                            "© ",
                            new Date().getFullYear(),
                            " Studio6 Interiors. All rights reserved.",
                          ],
                        }),
                        s.jsx("a", {
                          href: "#",
                          className:
                            "text-white transition-colors duration-200 !underline lg:text-base md:text-sm text-xs",
                          children: "Privacy Policy",
                        }),
                      ],
                    }),
                    s.jsx("a", {
                      href: "https://codecraftnet.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white transition-colors duration-200 lg:text-base md:text-sm text-xs",
                      children: [
                        "Powered by ",
                        s.jsx("span", {
                          className: "text-yellow-400",
                          children: "Code Craft"
                        })
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  U1 = "/explore1.jpg",
  q1 = [
    { name: "Inner Peace", src: U1, type: "Bedroom" },
    { name: "Personal Space", src: Ah, type: "Office" },
    { name: "Modern", src: Ch, type: "Living room" },
    { name: "Inner Peace", src: zh, type: "Bedroom" },
  ],
  B1 = () => {
    const [f, v] = We.useState(0),
      g = {
        dots: !0,
        arrows: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
        beforeChange: (h, b) => v(b),
      };
    return s.jsx("section", {
      className: "design-slider lg:py-16 md:py-12 py-8",
      id: "design-slider",
      children: s.jsx("div", {
        className: "lg:w-[93%] w-full lg:ml-auto m-auto p-4",
        children: s.jsxs("div", {
          className:
            "flex lg:flex-row flex-col items-center justify-between lg:gap-4 gap-8",
          children: [
            s.jsx("div", {
              className: "lg:w-1/3",
              children: s.jsxs("div", {
                children: [
                  s.jsxs(ea, {
                    className: "text-white mb-4 uppercase",
                    children: [
                      "50+ Beautiful design ",
                      s.jsx("br", {}),
                      " interiors",
                    ],
                  }),
                  s.jsx("p", {
                    className:
                      "mb-5 lg:text-lg md:text-base text-sm text-white",
                    children:
                      "Our designer already made a lot of beautiful prototipe of rooms that inspire you",
                  }),
                  s.jsx("div", {
                    className: "flex pr-16 lg:pr-0",
                    children: s.jsx("a", {
                      href: "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                      className:
                        "block px-7 py-2 lg:text-lg md:text-base text-sm text-center text-black font-bold bg-[#DBA160] hover:opacity-70",
                      children: "Explore More",
                    }),
                  }),
                ],
              }),
            }),
            s.jsx("div", {
              className: "lg:w-2/3 w-full",
              children: s.jsx("div", {
                className: "slider-container",
                children: s.jsx(du, {
                  ...g,
                  children: q1.map((h, b) => {
                    const w = b === f;
                    return s.jsx(
                      "div",
                      {
                        className: "md:px-4",
                        children: s.jsx("div", {
                          className: w
                            ? "lg:h-[550px] h-[320px]"
                            : "lg:h-[500px] h-[320px]",
                          children: s.jsxs("div", {
                            className: "relative h-full overflow-hidden",
                            children: [
                              s.jsx("img", {
                                src: h.src,
                                alt: `designs1-${b}`,
                                className: "h-full object-cover",
                              }),
                              w &&
                                s.jsx("div", {
                                  className: "absolute bottom-5 left-5",
                                  children: s.jsxs("div", {
                                    className: "flex flex-row items-end",
                                    children: [
                                      s.jsx("div", {
                                        className: "bg-white px-8 py-4",
                                        children: s.jsxs("div", {
                                          children: [
                                            s.jsxs("p", {
                                              className:
                                                "text-black lg:text-base md:text-sm text-xs",
                                              children: [b + 1, " — ", h.type],
                                            }),
                                            s.jsx("h3", {
                                              className:
                                                "text-black lg:text-2xl md:text-lg text-base font-bold mb-2",
                                              children: h.name,
                                            }),
                                          ],
                                        }),
                                      }),
                                      s.jsx("span", {
                                        className:
                                          "w-14 h-14 bg-primary flex items-center justify-center text-white lg:text-2xl md:text-lg text-base font-bold",
                                        children: s.jsx(C1, {}),
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        }),
                      },
                      `designs1-${b}`,
                    );
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
    });
  },
  Y1 = "/whatsapp.png",
  G1 = "/telephone.png",
  // Gallery data structure for room categories
  roomGalleryData = [
    {
      id: "living-room",
      name: "Living Room",
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `/design${i + 1}.jpg`,
        alt: `Professional living room interior design ${i + 1} - modern furniture and decor by Studio6 Interiors`,
        title: `Luxury Living Room Interior Design ${i + 1}`
      }))
    },
    {
      id: "bedroom",
      name: "Bedroom",
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `/bedroom${i + 1}.jpg`,
        alt: `Modern bedroom interior design ${i + 1} - comfortable and stylish by Studio6 Interiors`,
        title: `Contemporary Bedroom Design ${i + 1}`
      }))
    },
    {
      id: "kitchen",
      name: "Kitchen",
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `/kitchen${i + 1}.jpg`,
        alt: `Modern kitchen interior design ${i + 1} - functional and elegant by Studio6 Interiors`,
        title: `Professional Kitchen Design ${i + 1}`
      }))
    },
    {
      id: "dining-room",
      name: "Dining Room",
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `/dining${i + 1}.jpg`,
        alt: `Elegant dining room interior design ${i + 1} - sophisticated decor by Studio6 Interiors`,
        title: `Luxury Dining Room Design ${i + 1}`
      }))
    },
    {
      id: "study-room",
      name: "Work Space",
      images: Array.from({ length: 10 }, (_, i) => ({
        src: `/study${i + 1}.jpg`,
        alt: `Professional workspace interior design ${i + 1} - productive and modern by Studio6 Interiors`,
        title: `Modern Office Workspace Design ${i + 1}`
      }))
    }
  ],
  // Component: Room Gallery Section
  T1 = () => {
    const [f, v] = We.useState("living-room"),
      [showAll, setShowAll] = We.useState(false),
      [currentImageIndex, setCurrentImageIndex] = We.useState(0),
      [selectedImage, setSelectedImage] = We.useState(null),
      g = roomGalleryData.find((B) => B.id === f);
    
    const handlePrevImage = () => {
      setCurrentImageIndex((prev) => (prev === 0 ? g.images.length - 1 : prev - 1));
    };
    
    const handleNextImage = () => {
      setCurrentImageIndex((prev) => (prev === g.images.length - 1 ? 0 : prev + 1));
    };
    
    const handleImageClick = (image, index) => {
      setSelectedImage(image);
      setCurrentImageIndex(index);
    };
    
    const closePopup = () => {
      setSelectedImage(null);
    };
    return s.jsx("section", {
      className: "room-gallery lg:py-16 md:py-12 py-8",
      id: "room-gallery",
      children: s.jsx("div", {
        className: "container",
        children: s.jsxs("div", {
          className: "bg-black rounded-lg p-8",
          children: [
            s.jsx("div", {
              className: "text-center lg:mb-16 md:mb-12 mb-8",
              children: s.jsx(ea, {
                className: "text-center text-primary mb-4 uppercase",
                children: "Room Gallery",
              }),
            }),
            s.jsx("div", {
              className: "flex flex-wrap justify-center gap-4 mb-12",
              children: roomGalleryData.map((B) =>
                s.jsx(
                  "button",
                  {
                    onClick: () => v(B.id),
                    className: `lg:px-6 lg:py-3 px-2 py-1 lg:text-base text-xs rounded-lg font-bold transition-all duration-200 ${
                      f === B.id
                        ? "bg-black text-primary border border-primary"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`,
                    children: B.name,
                  },
                  B.id,
                ),
              ),
            }),
            s.jsx("div", {
              className: "mb-16",
              children: s.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  s.jsx("h3", {
                    className: "lg:text-3xl md:text-2xl text-xl font-bold text-primary mb-4",
                    children: g.name,
                  }),
                  s.jsx("p", {
                    className: "lg:text-lg md:text-base text-sm text-gray-400",
                    children: `Explore beautiful ${g.name.toLowerCase()} designs`,
                  }),
                ],
              }),
            }),
            s.jsxs("div", {
              className: "relative mt-12 mb-8",
              children: [
                s.jsx("div", {
                  className: "relative w-full max-w-6xl h-96 overflow-hidden rounded-lg mx-auto",
                  children: s.jsx("div", {
                    className: "flex items-center justify-center h-full",
                    children: g.images.map((B, V) => {
                      const isActive = V === currentImageIndex;
                      const isPrev = V === (currentImageIndex === 0 ? g.images.length - 1 : currentImageIndex - 1);
                      const isNext = V === (currentImageIndex === g.images.length - 1 ? 0 : currentImageIndex + 1);
                      const isFarPrev = V === (currentImageIndex === 0 ? g.images.length - 2 : currentImageIndex === 1 ? g.images.length - 1 : currentImageIndex - 2);
                      const isFarNext = V === (currentImageIndex === g.images.length - 1 ? 1 : currentImageIndex === g.images.length - 2 ? 0 : currentImageIndex + 2);
                      
                      let scale = 0.6;
                      let opacity = 0.3;
                      let blur = 3;
                      let xPosition = 0;
                      let zIndex = 1;
                      
                      if (isActive) {
                        scale = 1;
                        opacity = 1;
                        blur = 0;
                        zIndex = 10;
                        xPosition = 0;
                      } else if (isPrev) {
                        scale = 0.8;
                        opacity = 0.5;
                        blur = 1;
                        zIndex = 5;
                        xPosition = -30;
                      } else if (isNext) {
                        scale = 0.8;
                        opacity = 0.5;
                        blur = 1;
                        zIndex = 5;
                        xPosition = 30;
                      } else if (isFarPrev) {
                        scale = 0.6;
                        opacity = 0.3;
                        blur = 2;
                        zIndex = 2;
                        xPosition = -50;
                      } else if (isFarNext) {
                        scale = 0.6;
                        opacity = 0.3;
                        blur = 2;
                        zIndex = 2;
                        xPosition = 50;
                      }
                      
                      return s.jsx("div", {
                        className: "absolute transition-all duration-500 ease-in-out cursor-pointer",
                        style: {
                          transform: `translateX(${xPosition}%) scale(${scale})`,
                          opacity: opacity,
                          zIndex: zIndex,
                          width: isActive ? '60%' : '40%',
                          height: '100%',
                          left: isActive ? '20%' : isPrev || isFarPrev ? '10%' : isNext || isFarNext ? '50%' : '50%',
                          top: '0'
                        },
                        onClick: () => handleImageClick(B, V),
                        children: s.jsx("img", {
                          src: B.src,
                          alt: B.alt,
                          className: "w-full h-full object-contain rounded-lg shadow-2xl transition-all duration-500 hover:brightness-110",
                          style: {
                            filter: `blur(${blur}px)`
                          }
                        })
                      }, V);
                    })
                  })
                }), 
                s.jsxs("div", {
                  className: "flex items-center justify-center gap-4 mt-4",
                  children: [
                    s.jsx("button", {
                      onClick: handlePrevImage,
                      className: "p-3 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-200 z-10 text-white text-xl font-bold",
                      children: "←"
                    }), 
                    s.jsx("button", {
                      onClick: handleNextImage,
                      className: "p-3 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-200 z-10 text-white text-xl font-bold",
                      children: "→"
                    })
                  ]
                })
              ]
            }),
            selectedImage && s.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",
              onClick: closePopup,
              children: s.jsxs("div", {
                className: "relative max-w-6xl max-h-full",
                onClick: (e) => e.stopPropagation(),
                children: [
                  s.jsx("button", {
                    onClick: closePopup,
                    className: "absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10",
                    children: "\u00d7"
                  }),
                  s.jsx("img", {
                    src: selectedImage.src,
                    alt: selectedImage.alt,
                    className: "max-w-full max-h-full object-contain rounded-lg"
                  })
                ]
              })
            }),
          ],
        }),
      }),
    });
  },
  X1 = () =>
    s.jsx("section", {
      className: "fixed-app",
      children: s.jsx("div", {
        className:
          "fixed h-full top-0 bottom-0 right-0 z-50 flex flex-col justify-center gap-4",
        children: s.jsx("div", {
          className:
            "bg-[#ffffff4d] md:py-6 py-3 px-1 rounded-l-lg shadow-lg backdrop-blur-md",
          children: s.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              s.jsx("a", {
                href: "tel:+91-904 3463200",
                children: s.jsxs("div", {
                  className: "flex flex-col items-center gap-2",
                  children: [
                    s.jsx("img", {
                      src: G1,
                      className: "md:w-10 md:h-10 w-6 h-6",
                    }),
                    s.jsx("div", {
                      className: "md:text-sm text-xs text-white",
                      children: "Call ",
                    }),
                  ],
                }),
              }),
              s.jsx("a", {
                href: "https://api.whatsapp.com/send?phone=9043463200&text=Hi%20studio6interiors!%20I%20need%20more%20info%20about%20your%20products",
                children: s.jsxs("div", {
                  className: "flex flex-col items-center gap-2",
                  children: [
                    s.jsx("img", {
                      src: Y1,
                      className: "md:w-10 md:h-10 w-6 h-6",
                    }),
                    s.jsx("div", {
                      className: "md:text-sm text-xs text-white",
                      children: "Whatsapp",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  Q1 = [
    { end: 7, label: "Years" },
    { end: 200, label: "Projects" },
    { end: 99, label: "Customer Satisfaction" },
    { end: 40, label: "Days Work Completion" },
  ],
  k1 = ({ end: f, label: v, duration: g = 2e3 }) => {
    const [h, b] = We.useState(0),
      [w, B] = We.useState(!1),
      V = We.useRef();
    We.useEffect(() => {
      const D = new IntersectionObserver(
        ([J]) => {
          J.isIntersecting && !w && (K(), B(!0), D.disconnect());
        },
        { threshold: 0.5 },
      );
      return (V.current && D.observe(V.current), () => D.disconnect());
    }, [w]);
    const K = () => {
      let D = 0;
      const J = 50,
        ae = Math.ceil(g / J),
        te = f / ae,
        me = setInterval(() => {
          ((D += te), D >= f ? (clearInterval(me), b(f)) : b(Math.ceil(D)));
        }, J);
    };
    return s.jsxs("div", {
      ref: V,
      className: "flex flex-col items-center p-4",
      children: [
        s.jsxs("span", {
          className: "lg:text-4xl md:text-2xl text-lg font-bold text-white",
          children: [
            h, 
            v === "Customer Satisfaction" ? "%" : typeof f == "number" && "+"
          ],
        }),
        s.jsx("span", {
          className:
            "lg:text-lg md:text-base text-sm text-gray-400 text-center",
          children: v,
        }),
      ],
    });
  },
  Z1 = () =>
    s.jsx("section", {
      className: "about-us lg:py-16 md:py-12 py-8",
      id: "about-us",
      children: s.jsx("div", {
        className: "",
        children: s.jsxs("div", {
          className: "container",
          children: [
            s.jsx(ea, {
              className: "text-center text-primary mb-4",
              children: "About Us",
            }),
            s.jsx("div", {
              className: "lg:my-16 md:my-12 my-8",
              children: s.jsx("div", {
                className: "flex flex-col items-center justify-center",
                children: s.jsxs("div", {
                  className: "lg:w-3/4 md:w-4/5 w-full",
                  children: [
                    s.jsx("p", {
                      className:
                        "mb-5 lg:text-lg md:text-base text-sm text-white text-center",
                      children:
                        "At Studio6 Interiors, our story began with a passion for design and innovation. After gaining hands-on experience at a top interior firm in Bangalore, I launched Studio6 in 2019 with a vision to transform everyday spaces into functional, aesthetic environments. Today, we've completed 250+ residential and commercial projects — each crafted with care, creativity, and commitment.",
                    }),
                    s.jsx(kn, {
                      className: "text-primary mb-4 text-center",
                      children: "What drives us?",
                    }),
                    s.jsx("p", {
                      className:
                        "mb-5 lg:text-lg md:text-base text-sm text-white text-center",
                      children:
                        "The satisfaction on our clients' faces when they see their dream space come to life — on time, on budget, and beyond expectations. Whether it's modular kitchens, home interiors, or office makeovers, Studio6 delivers smart, stylish, and affordable interiors you'll love to live in.",
                    }),
                  ],
                }),
              }),
            }),
            s.jsx("div", {
              className:
                "flex flex-wrap items-center justify-center rounded-xs bg-dark/20 px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px]",
              children: s.jsx("div", {
                className:
                  "grid grid-cols-2 sm:grid-cols-4 lg:gap-8 md:gap-6 gap-4 p-6 ",
                children: Q1.map((f, v) =>
                  s.jsx(k1, { end: f.end, label: f.label }, v),
                ),
              }),
            }),
          ],
        }),
      }),
    });
function V1() {
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(jv, {}),
      s.jsx(c1, {}),
      s.jsx(Z1, {}),
      s.jsx(w1, {}),
      s.jsx(T1, {}),
      s.jsx(B1, {}),
      s.jsx(b1, {}),
      s.jsx(g1, {}),
      s.jsx(N1, {}),
      s.jsx(M1, {}),
      s.jsx(X1, {}),
      s.jsx(L1, {}),
      
    ],
  });
}
// Wait for DOM to be fully loaded before rendering
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      iv.createRoot(rootElement).render(
        s.jsx(We.StrictMode, { children: s.jsx(V1, {}) })
      );
    }
  });
} else {
  // If DOM is already loaded, render immediately
  const rootElement = document.getElementById('root');
  if (rootElement) {
    iv.createRoot(rootElement).render(
      s.jsx(We.StrictMode, { children: s.jsx(V1, {}) })
    );
  }
}