# 一元函数积分学

> **考情提示**：积分学是数一计算量最大的章节——不定积分和定积分计算几乎每年必出现在解答题中（常与微分方程、面积体积结合），反常积分敛散性判别是选择题固定考点。熟练掌握换元法和分部积分法是及格线。

## 不定积分

### 原函数与不定积分

若 $F'(x) = f(x)$，则称 $F(x)$ 为 $f(x)$ 的**一个原函数**。$f(x)$ 的全体原函数互为相差一个常数——即**不定积分**：

$$
\int f(x) \, dx = F(x) + C
$$

**原函数存在定理** 🔥：若 $f(x)$ 在区间 $I$ 上连续，则 $f(x)$ 在 $I$ 上必有原函数。但连续是可积分但不一定初等可积（如 $\int e^{-x^2} dx$ 不能用初等函数表示）。

### 基本积分公式（必背）

$$
\begin{aligned}
\int x^\alpha \, dx &= \frac{x^{\alpha+1}}{\alpha+1} + C \quad (\alpha \neq -1) &
\int \frac{1}{x} \, dx &= \ln|x| + C \\[6pt]
\int e^x \, dx &= e^x + C &
\int a^x \, dx &= \frac{a^x}{\ln a} + C \\[6pt]
\int \sin x \, dx &= -\cos x + C &
\int \cos x \, dx &= \sin x + C \\[6pt]
\int \sec^2 x \, dx &= \tan x + C &
\int \csc^2 x \, dx &= -\cot x + C \\[6pt]
\int \frac{1}{\sqrt{1-x^2}} \, dx &= \arcsin x + C &
\int \frac{1}{1+x^2} \, dx &= \arctan x + C
\end{aligned}
$$

### 第一类换元法（凑微分法）

将被积表达式凑成 $\int f[\varphi(x)] \varphi'(x) \, dx = \int f(u) \, du$ 的形式 🔥：

$$
\int f[\varphi(x)] \varphi'(x) \, dx = F[\varphi(x)] + C, \quad F' = f
$$

核心技巧：**把 $\varphi'(x)dx$ 识别为 $d\varphi(x)$**。

> 常见凑微分套路：$\int x e^{x^2} dx$ → 令 $u=x^2$，$du=2xdx$；$\int \frac{\ln x}{x} dx$ → 令 $u=\ln x$，$du = \frac{1}{x}dx$；$\int \sin x \cos x \, dx$ → 令 $u=\sin x$ 或直接用 $\sin 2x = 2\sin x \cos x$

### 第二类换元法（变量代换法）

设 $x = \varphi(t)$ 严格单调可导且 $\varphi'(t) \neq 0$，则：

$$
\int f(x) \, dx = \int f[\varphi(t)] \, \varphi'(t) \, dt, \quad t = \varphi^{-1}(x)
$$

**三角代换** 🔥（被积表达式含根号时的标准手法）：

| 根式 | 代换 | 理由 |
|------|------|------|
| $\sqrt{a^2 - x^2}$ | $x = a\sin t$ | $1 - \sin^2 t = \cos^2 t$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan t$ | $1 + \tan^2 t = \sec^2 t$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec t$ | $\sec^2 t - 1 = \tan^2 t$ |

> 使用三角代换后回代时画直角三角形是避免符号错的最佳方法——$\sin t = \frac{x}{a}$ 立即标出对边和斜边。

**倒代换** $x = \frac{1}{t}$：适用于分母幂次远高于分子的有理函数。

### 分部积分法

由乘积求导公式反推得 🔥：

$$
\int u \, dv = uv - \int v \, du
$$

**选择 $u$ 的优先级（LIATE 原则）**：

| 优先级 | 函数类型 | 例子 |
|:--:|------|------|
| 最高 | **对数函数** | $\ln x$ |
| ↑ | **反三角函数** | $\arcsin x, \arctan x$ |
| | **代数函数** | $x^n$ |
| | **三角函数** | $\sin x, \cos x$ |
| ↓ | **指数函数** | $e^x$ |

> 口诀：「对数反代三角指，排在前面设为 $u$」。如 $\int x e^x dx$——$x$ 是代数、$e^x$ 是指数，$x$ 排前面所以 $u=x$。

分部积分常见模式：
- $\int x^n e^x dx$：需要 $n$ 次分部积分
- $\int e^x \sin x \, dx$：两次分部积分后移项解方程（循环型）
- $\int \ln x \, dx = x\ln x - x + C$（$u=\ln x,\ dv=dx$）

### 有理函数积分

真分式积分通过分解为部分分式完成 🔥：

分母因式分解后，真分式可分为 $\frac{A}{(x-a)^k}$ 型（一次因子幂）和 $\frac{Bx+C}{(x^2+px+q)^m}$ 型（二次不可约因子幂）。

> 考研切忌在确定待定系数时大量手工解线性方程组——优先用**赋特殊值法**（令 $x$ 等于各因子零点）直接求得系数。

## 定积分

### 定积分的定义（黎曼和）

$$
\int_a^b f(x) \, dx = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i) \Delta x_i
$$

其中 $\lambda = \max \Delta x_i$，$\xi_i \in [x_{i-1}, x_i]$。**分割的限度趋于零时部分和的极限**就是定积分值。

> 💀 考研极少直接处理黎曼和定义，但理解其含义有助于判断「可积性」的判断。

**可积的充分条件**：$f(x)$ 在 $[a,b]$ 上连续 $\Rightarrow$ 可积；$f(x)$ 在 $[a,b]$ 上有界且只有有限个间断点 $\Rightarrow$ 可积。

### 牛顿-莱布尼茨公式

若 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上连续的一个原函数，则 🔥：

$$
\int_a^b f(x) \, dx = F(b) - F(a) = \left[F(x)\right]_a^b
$$

> 这是整个积分学的核心——定积分计算**回归**到先找到原函数再代上下限。

### 积分中值定理

若 $f(x)$ 在 $[a,b]$ 上连续，则：

$$
\exists \xi \in [a,b], \quad \int_a^b f(x) \, dx = f(\xi)(b-a)
$$

**推广形式**：若 $g(x)$ 在 $[a,b]$ 上不变号，则：

$$
\exists \xi \in [a,b], \quad \int_a^b f(x)g(x) \, dx = f(\xi) \int_a^b g(x) \, dx
$$

### 变上限积分函数

$$
\Phi(x) = \int_a^x f(t) \, dt
$$

**核心性质** 🔥：
1. 若 $f$ 在 $[a,b]$ 上连续，则 $\Phi(x)$ 在 $[a,b]$ 上**可导**，且 $\Phi'(x) = f(x)$
2. 若上限是函数 $\varphi(x)$，则链式法则：$\frac{d}{dx} \int_a^{\varphi(x)} f(t) \, dt = f[\varphi(x)] \cdot \varphi'(x)$
3. 若上下限都是函数：$\frac{d}{dx} \int_{\psi(x)}^{\varphi(x)} f(t) \, dt = f[\varphi(x)] \varphi'(x) - f[\psi(x)] \psi'(x)$

> 变上限积分提供了所有连续函数的原函数，是连接微分和积分的桥梁，也是证明题的高频考点。

## 定积分的统一换元

定积分做换元时**必须同时变换积分限** 🔥：

$$
x = \varphi(t), \quad \int_a^b f(x) \, dx = \int_{\varphi^{-1}(a)}^{\varphi^{-1}(b)} f[\varphi(t)] \, \varphi'(t) \, dt
$$

> 换元后直接用新变量对应的积分限，无需再回代原变量——这是定积分比不定积分换元法省一步的地方。

## 反常积分

反常积分是定积分的极限推广，分两类：

### 无穷限反常积分

$$
\int_a^{+\infty} f(x) \, dx = \lim_{b \to +\infty} \int_a^b f(x) \, dx
$$

**敛散性判别** 🔥（选择题高频）：

- 若 $\alpha > 1$，$\displaystyle\int_a^{+\infty} \frac{1}{x^\alpha} \, dx$ 收敛；若 $\alpha \leq 1$，发散
- **比较判别法**：若 $|f(x)| \leq g(x)$ 且 $\int g$ 收敛 $\Rightarrow \int f$ 收敛
- **极限比较法**：若 $\lim_{x \to \infty} \frac{f(x)}{g(x)} = c > 0$，则 $\int f$ 和 $\int g$ 同敛散

### 无界函数反常积分（瑕积分）

若 $f(x)$ 在 $x=a$ 附近无界：

$$
\int_a^b f(x) \, dx = \lim_{\varepsilon \to 0^+} \int_{a+\varepsilon}^b f(x) \, dx
$$

> **易错陷阱** 🔥：函数 $\frac{1}{x^p}$ 在 $x=0$ 附近的瑕积分——$p < 1$ 时收敛、$p \geq 1$ 时发散（与无穷限反常积分恰好相反）。选择题常将两种情况混淆出题。

## 常见题型

- **不定积分计算**：综合凑微分+分部积分+三角代换，一口气算到底是最常见大题
- **定积分计算技巧**：首先考虑对称区间奇偶函数简化——$\int_{-a}^a f$ 中若 $f$ 是奇函数则积分直接为零
- **变上限积分求导**：给 $\int$ 表达式求导/求极限——积分上限是复合函数时链式法则不可忘
- **积分中值定理证明**：构造辅助函数 $F(x) = \int_a^x f(t) \, dt$，再用拉格朗日中值定理
- **反常积分敛散性判断**（选择题高频）：直接套 $p$-积分结论或比较判别法
- **面积与旋转体体积**：元素法——面积 $S = \int_a^b |f_1(x) - f_2(x)| \, dx$，绕 $x$ 轴旋转体积 $V = \pi \int_a^b f(x)^2 \, dx$
