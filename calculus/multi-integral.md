# 多元函数积分学

> **考情提示**：多元积分是数一高分区的决定性章节——二重/三重积分计算、格林公式是解答题的固定常客，高斯/斯托克斯公式是区分高分考生的终极考察。本章通常占 1 道选择 + 1 道解答题（共约 14–20 分），是高等数学最后的硬骨头。

## 二重积分

### 二重积分的概念

对平面区域 $D$ 上二元函数 $f(x,y)$ 的二重积分定义为：

$$
\iint_D f(x,y) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^{n} f(\xi_i, \eta_i) \Delta \sigma_i
$$

**几何意义** 🔥：以 $D$ 为底面，$z = f(x,y)$ 为顶面的**曲顶柱体体积**（$f \geq 0$ 时）。

### 直角坐标下的计算

**$X$ 型区域**：$D = \{(x,y) \mid a \leq x \leq b,\ \varphi_1(x) \leq y \leq \varphi_2(x)\}$

$$
\iint_D f(x,y) \, dxdy = \int_a^b \left[\int_{\varphi_1(x)}^{\varphi_2(x)} f(x,y) \, dy \right] dx
$$

**$Y$ 型区域**：$D = \{(x,y) \mid c \leq y \leq d,\ \psi_1(y) \leq x \leq \psi_2(y)\}$

$$
\iint_D f(x,y) \, dxdy = \int_c^d \left[\int_{\psi_1(y)}^{\psi_2(y)} f(x,y) \, dx \right] dy
$$

### 交换积分次序 🔥

当给定积分顺序难以计算时，**画出积分区域草图，调换 $x$ 和 $y$ 的积分次序**：

1. 从给定的积分限描绘区域 $D$
2. 按新的变量顺序重新讨论 $D$ 的表达式
3. 填入新的积分限

> 这是考研频繁出没的高频考点——给一个积分表达式，让你交换先后积分次序并算出结果。

### 极坐标下的计算

当积分区域为圆或圆扇区、或被积函数含 $x^2+y^2$ 时 🔥：

令 $x = r\cos\theta,\ y = r\sin\theta,\ dxdy = r\, dr d\theta$：

$$
\iint_D f(x,y) \, dxdy = \iint_{D'} f(r\cos\theta, r\sin\theta) \, r \, dr d\theta
$$

> 关键两要素：**代换公式中的 $r$**（雅可比因子）不可遗漏；积分限上面对 $\theta$ 和 $r$ 的先后顺序要和区域 $D$ 在极坐标下的范围配合好。

## 三重积分

### 三重积分的计算

三重积分的体积分在直角坐标下表示为 🔥：

$$
\iiint_\Omega f(x,y,z) \, dxdydz
$$

**投影法**（先 $z$ 后 $xy$）：
- 将 $\Omega$ 视为 $xy$ 平面区域 $D_{xy}$ 上界曲面 $z_2(x,y)$ 与下界曲面 $z_1(x,y)$ 之间的柱状区域
- $\iiint_\Omega f \, dxdydz = \iint_{D_{xy}} \left[\int_{z_1(x,y)}^{z_2(x,y)} f \, dz \right] dxdy$

### 柱坐标下的计算

$$
x = r\cos\theta,\ y = r\sin\theta,\ z = z,\quad dxdydz = r\, dr d\theta dz
$$

适用范围：$\Omega$ 在 $xy$ 面上的投影为圆域，或被积函数含 $x^2+y^2$。

### 球坐标下的计算

$$
x = r\sin\varphi \cos\theta,\ y = r\sin\varphi \sin\theta,\ z = r\cos\varphi,\quad
dxdydz = r^2 \sin\varphi \, dr d\varphi d\theta
$$

其中 $r$ 为原点到点的径向距离、$\varphi$ 为与 $z$ 轴正向的夹角、$\theta$ 为 $xy$ 面上的极角。

适用范围：$\Omega$ 为球体或被积函数含 $x^2+y^2+z^2$。

## 曲线积分

### 第一类曲线积分（对弧长）

$$
\int_L f(x,y) \, ds = \lim_{\lambda \to 0} \sum f(\xi_i,\eta_i) \Delta s_i
$$

**几何意义** 🔥：线质量、柱面侧面积。

**计算**（参数化）：将曲线 $L$ 用 $x=x(t),\ y=y(t),\ \alpha \leq t \leq \beta$ 表示，则

$$
ds = \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt
$$

代入原积分即可化为定积分求解。

### 第二类曲线积分（对坐标）

$$
\int_L P(x,y) \, dx + Q(x,y) \, dy
$$

**物理意义** 🔥 🔥：力场沿曲线 $L$ 所做的功。

**直接计算法**：用 $x=x(t),\ y=y(t)$ 代换——$dx = x'(t)dt,\ dy = y'(t)dt$，带入化为常积分。

**格林公式** 🔥 🔥 🔥 🔥：

> 封闭正向曲线 $L$ 围成区域 $D$，则

$$
\oint_L P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dxdy
$$

**曲线积分与路径无关的条件**：在单连通区域 $D$ 内，$\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$ 恒成立 $\iff$ 线与路径无关 $\iff$ $Pdx+Qdy$ 是某函数的全微分。

> 考研中判断路径无关及用格林公式将线积分转化为二重积分是高频大题。

## 曲面积分

### 第一类曲面积分（对面积）

$$
\iint_\Sigma f(x,y,z) \, dS
$$

**计算**：将曲面 $\Sigma$ 投影到 $xy$ 平面，用 $z = z(x,y)$ 代替表示，则

$$
dS = \sqrt{1 + z_x^2 + z_y^2} \, dxdy
$$

> 公式曲面面积元素 $=1$ 时求的是**曲面面积**。

### 第二类曲面积分（对坐标）

对 $y,z$ 坐标方向的流量积分：$\iint_\Sigma P\, dy dz + Q\, dz dx + R\, dx dy$

**高斯公式** 🔥 🔥 🔥 🔥：

> $\Sigma$ 为封闭曲面包围空间体 $\Omega$（取外法向为正），则

$$
\oiint_\Sigma P\,dy dz + Q\,dz dx + R\,dx dy
= \iiint_\Omega \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) dxdydz
$$

**斯托克斯公式** 🔥 🔥：

> 曲面 $\Sigma$ 以空间曲线 $\Gamma$ 为边界，则

$$
\oint_\Gamma P\,dx + Q\,dy + R\,dz
= \iint_\Sigma
\begin{vmatrix}
dy dz & dz dx & dx dy \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$

即线积分沿空间闭曲线转化为曲面上第二类曲面积分的转换。

### 三大公式辨析

| 公式 | 作用 | 条件 | 口诀 |
|------|------|------|------|
| **格林** | 平面闭线积分 → 二重积分 | 曲线封闭正向 | 「闭线转双重」 |
| **高斯** | 闭面积分 → 三重积分 | 曲面封闭外法向 | 「闭面转三重」 |
| **斯托克斯** | 空间闭线积分 → 曲面积分 | 曲线为曲面的边界 | 「空间闭线转曲面」 |

> 格林是斯托克斯在平面上的退化形式——若曲面全部在 $xy$ 面上且方向向上，则斯托克斯退化为格林。

## 常见题型

- **二重积分计算**：直角坐标判定 $X$ 型还是 $Y$ 型 → 画图交换次序 → 极坐标替代（圆域用极坐标最优）
- **三重积分计算**：投影法 + 柱坐标/球坐标选择——球体用球坐标，圆柱体用柱坐标。雅可比因子 $r$ 和 $r^2\sin\varphi$ 绝不可遗漏
- **格林公式的应用**：判定曲线 $L$ 是否封闭——不封闭则**补线段**补成封闭再格林，最后减去补充线段的积分
- **高斯公式的应用**：判定曲面 $\Sigma$ 是否封闭——不封闭则**补充面**（通常补充底面或顶面）变成封闭曲面再高斯，减去补面的贡献
- **曲线积分路径无关性**：验证 $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$ → 沿简单路径积分（如折线路径）
- **斯托克斯公式方向判定** 🔥：右手法则——拇指指向曲面法向时，四指弯曲方向即为边界曲线正向
