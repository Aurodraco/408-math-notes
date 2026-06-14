# 多元函数微分学

> **考情提示**：多元微分是数一高等数学的核心章节之一——选择题 1–2 题 + 解答题 1 道（约 13–20 分）。偏导数计算和链式法则是基本功，拉格朗日乘数法解条件极值是必考大题模板。

## 多元函数的基本概念

### 二元函数的极限与连续

**二重极限**：$\lim_{(x,y) \to (x_0,y_0)} f(x,y) = A$ 指 $(x,y)$ 以**任意方式**趋近 $(x_0,y_0)$ 时 $f(x,y)$ 都收敛到同一值 $A$。

> 🔥 **二元重极限不存在的最经典证法**：找到两条不同路径让极限值不同——如沿 $y=kx$ 路径和沿 $y=x^2$ 路径代入计算，若结果依赖于 $k$ 或路径，则重极限不存在。

**连续**：$\lim_{(x,y)\to(x_0,y_0)} f(x,y) = f(x_0,y_0)$。

> 二元函数中**偏导数存在 $\nRightarrow$ 连续**（与一元不同！）。经典反例：$f(x,y) = \frac{xy}{x^2+y^2}$ 在 $(0,0)$ 处偏导存在（都为零）但不连续。

### 偏导数

固定 $y$ 对 $x$ 求导即偏导数：

$$
f_x(x_0,y_0) = \frac{\partial f}{\partial x}\bigg|_{(x_0,y_0)} = \lim_{\Delta x \to 0} \frac{f(x_0+\Delta x,\ y_0) - f(x_0,y_0)}{\Delta x}
$$

**二阶偏导数**：
- $f_{xx} = \frac{\partial^2 f}{\partial x^2}$（对 $x$ 再偏导）
- $f_{xy} = \frac{\partial^2 f}{\partial x \partial y}$（先 $x$ 后 $y$ 的混合偏导）
- $f_{yy} = \frac{\partial^2 f}{\partial y^2}$

> 🔥 **混合偏导次序定理**：若 $f_{xy}$ 和 $f_{yx}$ 在 $(x_0,y_0)$ 处连续，则 $f_{xy} = f_{yx}$——混合偏导与求导次序无关。

## 全微分

### 全微分的定义

若函数增量可表示为：

$$
\Delta z = A\Delta x + B\Delta y + o(\sqrt{\Delta x^2 + \Delta y^2})
$$

则 $f(x,y)$ 在 $(x_0,y_0)$ 处可微，全微分为：

$$
dz = f_x(x_0,y_0) \, dx + f_y(x_0,y_0) \, dy
$$

**可微的条件** 🔥：
- 必要：偏导数存在
- 充分：偏导数连续 $\Rightarrow$ 可微（但不是必要条件）
- **可微 $\Rightarrow$ 连续 $\Rightarrow$ 极限存在**，但反过来不一定

> 考研常见错误：认为偏导数存在就等价于可微——实际可微是比偏导存在更强的条件。

## 复合函数与隐函数求导

### 复合函数链式法则

**多元复合函数求导** 🔥——画出变量依赖树，每层分叉到各条路径用链式法则：

设 $z = f(u,v), u=u(x,y), v=v(x,y)$，则：

$$
\frac{\partial z}{\partial x} = \frac{\partial f}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial x}
$$

全导数情况（$z = f(u,v), u=u(t), v=v(t)$）：

$$
\frac{dz}{dt} = \frac{\partial f}{\partial u} \cdot \frac{du}{dt} + \frac{\partial f}{\partial v} \cdot \frac{dv}{dt}
$$

### 隐函数求导

**一元隐函数**：$F(x,y) = 0$ 确定 $y = y(x)$，则：

$$
\frac{dy}{dx} = -\frac{F_x}{F_y}
$$

**二元隐函数**：$F(x,y,z) = 0$ 确定 $z = z(x,y)$，则：

$$
\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \quad
\frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
$$

> 🔥 分析各符号的意义：分子分母的下标分别是定义的函数对所有变量的偏导数。

## 方向导数与梯度

### 方向导数

$f(x,y)$ 沿单位方向 $\mathbf{u} = (\cos\alpha, \cos\beta)$ 的方向导数：

$$
\frac{\partial f}{\partial \mathbf{u}} \bigg|_{(x_0,y_0)} =
f_x(x_0,y_0) \cos\alpha + f_y(x_0,y_0) \cos\beta
$$

> 方向导数定义为 $\lim_{t \to 0^+} \frac{f(x_0 + t\cos\alpha,\ y_0 + t\cos\beta) - f(x_0,y_0)}{t}$。

### 梯度

**梯度**是一个向量，指向函数增长最快的方向 🔥：

$$
\operatorname{grad} f(x_0,y_0) = \nabla f(x_0,y_0) = (f_x(x_0,y_0),\ f_y(x_0,y_0))
$$

**方向导数与梯度的关系**：

$$
\frac{\partial f}{\partial \mathbf{u}} = \nabla f \cdot \mathbf{u} = |\nabla f| \cos\theta
$$

- 沿梯度方向的方向导数最大 $= |\nabla f|$
- 沿负梯度方向的方向导数最小 $= -|\nabla f|$
- 沿与梯度垂直方向的方向导数 $= 0$

## 多元函数的极值

### 无条件极值

**驻点** 🔥：满足 $\nabla f(x_0,y_0) = 0$（$f_x = 0$ 且 $f_y = 0$）的点。

**判别法**（Hessian 矩阵判定）：

记 $A = f_{xx}(x_0,y_0), B = f_{xy}(x_0,y_0), C = f_{yy}(x_0,y_0)$

$$
\Delta = AC - B^2 = \begin{vmatrix} A & B \\ B & C \end{vmatrix}
$$

| 条件 | 结论 |
|------|------|
| $\Delta > 0$ 且 $A > 0$ | 极小值 |
| $\Delta > 0$ 且 $A < 0$ | 极大值 |
| $\Delta < 0$ | 非极值（鞍点） |
| $\Delta = 0$ | 无法判定，需更高阶分析 |

### 条件极值（拉格朗日乘数法）

在约束 $g(x,y) = 0$ 下求 $f(x,y)$ 的极值 🔥 🔥：

**构造拉格朗日函数**：

$$
L(x,y,\lambda) = f(x,y) + \lambda \, g(x,y)
$$

**解得方程组**：

$$
\begin{cases}
L_x = f_x + \lambda g_x = 0 \\
L_y = f_y + \lambda g_y = 0 \\
L_\lambda = g(x,y) = 0
\end{cases}
$$

求解出 $(x,y)$ 及 $\lambda$，代入 $f$ 比较各候选点的值可得最大/最小值。

**推广到多约束**：$L = f + \lambda_1 g_1 + \lambda_2 g_2 + \cdots$，每加一个约束方程就多一个拉格朗日乘子。

> 🔥 考研拉格朗日乘数法是最标准的大题模板——给一个目标函数 + 一个约束条件 → 构造 $L$ → 列三个方程 → 解出驻点 → 代入比较。

## 常见题型

- **偏导数计算**：显函数直接求偏导、隐函数用公式 $-\frac{F_x}{F_z}$ 求偏导——注意求偏导时另一变量视为常数
- **全微分**：$dz = f_x dx + f_y dy$ 考察概念与可微的充分条件
- **方向导数与梯度**（填空题高频）：求某点沿某方向的方向导数——用 $\nabla f \cdot \mathbf{u}$ 一步到位
- **无条件极值判别**：求驻点 → 算 $A,B,C$ → 用 $\Delta = AC-B^2$ 看正负
- **拉格朗日条件极值**（大题核心模板）：构造 $L = f + \lambda g$ → 列偏导方程 → 解出候选 → 代入比较极值
