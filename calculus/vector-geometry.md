# 向量代数与空间解析几何

> **考情提示**：本章在数一中分值较小，通常 1 道选择题或填空题（4 分）。重点：数量积/向量积/混合积的计算与几何意义、平面与直线方程的建立。内容少且套路固定——属于高性价比章节。

## 向量代数

### 向量的线性运算

向量 $\mathbf{a} = (a_x, a_y, a_z)$ 的**模**和**方向角余弦**：

$$
|\mathbf{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2}, \quad
\cos\alpha = \frac{a_x}{|\mathbf{a}|}, \quad
\cos\beta = \frac{a_y}{|\mathbf{a}|}, \quad
\cos\gamma = \frac{a_z}{|\mathbf{a}|}
$$

方向余弦满足 $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$。

**加减法**：$\mathbf{a} \pm \mathbf{b} = (a_x \pm b_x, a_y \pm b_y, a_z \pm b_z)$；**数乘**：$\lambda \mathbf{a} = (\lambda a_x, \lambda a_y, \lambda a_z)$。

### 数量积（点积）

$$
\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}| |\mathbf{b}| \cos\theta
                        = a_x b_x + a_y b_y + a_z b_z
$$

**几何意义** 🔥：
- $\mathbf{a} \cdot \mathbf{b} = 0 \iff \mathbf{a} \perp \mathbf{b}$
- $\mathbf{a} \cdot \mathbf{b} > 0 \Rightarrow$ 夹角为锐角（方向大致同向）
- $\mathbf{a} \cdot \mathbf{b} < 0 \Rightarrow$ 夹角为钝角

### 向量积（叉积）

$$
\mathbf{a} \times \mathbf{b} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_x & a_y & a_z \\
b_x & b_y & b_z
\end{vmatrix}
$$

展开得：$\mathbf{a} \times \mathbf{b} = (a_y b_z - a_z b_y,\; a_z b_x - a_x b_z,\; a_x b_y - a_y b_x)$

**几何意义** 🔥：
- $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ = 由 $\mathbf{a}$ 和 $\mathbf{b}$ 张成的**平行四边形面积**
- $\mathbf{a} \times \mathbf{b}$ 的方向垂直于 $\mathbf{a}$ 和 $\mathbf{b}$，且遵循**右手法则**
- $\mathbf{a} \times \mathbf{b} = 0 \iff \mathbf{a} \parallel \mathbf{b}$
- $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$（反对称性）

### 混合积

$$
[\mathbf{a}\ \mathbf{b}\ \mathbf{c}] = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}
$$

以 $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 为坐标的混合积即为以其分量为行（列）的三阶行列式值。

**几何意义** 🔥：$|[\mathbf{a}\ \mathbf{b}\ \mathbf{c}]|$ = 由 $\mathbf{a}, \mathbf{b}, \mathbf{c}$ 张成的**平行六面体体积**。混合积 $=0 \iff$ 三向量**共面**。

## 空间中的平面

### 平面方程的五种形式

| 形式 | 方程 | 使用场景 |
|------|------|------|
| **点法式** 🔥 | $A(x-x_0) + B(y-y_0) + C(z-z_0) = 0$ | 已知平面上一点和法向量 |
| **一般式** | $Ax + By + Cz + D = 0$ | 通式——$(A,B,C)$ 即为法向量 |
| **截距式** | $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$ | 已知三个坐标轴截距 |
| **三点式** | 三点 $M_1,M_2,M_3$ 确定平面 | 用法向量 $\overrightarrow{M_1M_2} \times \overrightarrow{M_1M_3}$ + 点法式 |

### 点到平面的距离

点 $P_0(x_0,y_0,z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离：

$$
d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$

### 两平面的夹角

两平面的法向量的夹角（锐角）即为两平面的夹角 🔥：

$$
\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1| |\mathbf{n}_2|}
$$

> 两平面垂直 $\iff$ 法向量垂直 $\iff \mathbf{n}_1 \cdot \mathbf{n}_2 = 0$；两平面平行 $\iff$ 法向量平行 $\iff \mathbf{n}_1 = \lambda \mathbf{n}_2$。

## 空间中的直线

### 直线方程的标准式

**点向式（对称式）** 🔥：过点 $(x_0,y_0,z_0)$，方向向量 $\mathbf{s}=(m,n,p)$：

$$
\frac{x-x_0}{m} = \frac{y-y_0}{n} = \frac{z-z_0}{p}
$$

**参数式**：$\begin{cases} x = x_0 + mt \\ y = y_0 + nt \\ z = z_0 + pt \end{cases}$（由点向式令比值为 $t$ 得到）

**一般式（交面式）**：直线为两平面 $\begin{cases} A_1x+B_1y+C_1z+D_1=0 \\ A_2x+B_2y+C_2z+D_2=0 \end{cases}$ 的交线。方向向量 = 两平面法向量的叉积：$\mathbf{s} = \mathbf{n}_1 \times \mathbf{n}_2$。

### 点到直线的距离

点 $P$ 到过点 $P_0$ 方向为 $\mathbf{s}$ 的直线的距离：

$$
d = \frac{|\overrightarrow{P_0P} \times \mathbf{s}|}{|\mathbf{s}|}
$$

### 两直线的夹角

直线方向向量的锐角 = 两直线夹角：

$$
\cos\theta = \frac{|\mathbf{s}_1 \cdot \mathbf{s}_2|}{|\mathbf{s}_1| |\mathbf{s}_2|}
$$

## 空间曲面与曲线

### 常见二次曲面

| 曲面 | 标准方程 | 特征 |
|------|------|------|
| **球面** | $x^2+y^2+z^2 = R^2$ | 球心在原点 |
| **椭球面** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ | 三轴半长 $a, b, c$ |
| **椭圆抛物面** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = z$ | 截面为椭圆，开口向上/下 |
| **双曲抛物面** | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = z$ | 马鞍面 |
| **单叶双曲面** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1$ | 中间收缩 |
| **双叶双曲面** | $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1$ | 上下分离 |

### 旋转曲面

曲线 $C: (y=f(x), z=0)$ 绕 $x$ 轴旋转所得曲面方程 🔥：

> 将曲线方程中的不绕轴变量（这里 $y$）替换为 $\pm\sqrt{y^2+z^2}$

即：$f(x, \pm\sqrt{y^2+z^2}) = 0$ 为旋转曲面方程。

### 空间曲线

空间曲线常用两种方式表示：
- **一般式** 🔥：$\begin{cases} F(x,y,z) = 0 \\ G(x,y,z) = 0 \end{cases}$（两曲面的交线）
- **参数式**：$\begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases}$

## 常见题型

- **向量运算**：求数量积/向量积/混合积的值和几何意义——注意区分点积=0 是垂直、叉积=0 是平行
- **平面方程建立**：由三点求平面；由直线和点求平面——核心是**先求法向量再代点法式**
- **直线方程建立**：由两点求直线（方向向量直接相减）；过一点与已知直线垂直——方向向量 = 叉积
- **距离计算**：点到平面的距公式、点到直线的叉积/模公式
- **曲面识别**：给二次方程识别其为哪种标准曲面——先配方写成标准式再对号入座
- **旋转曲面方程**：绕坐标轴旋转的口诀——**不绕轴变量替换为 $\pm\sqrt{\text{另两变量的平方和}}$**
