```
title: JSX和TSX的区别
date: 2024-06-13
```



# 3、JSX和TSX的区别



在React项目中，文件扩展名 `.ts` 和 `.tsx` 表示项目使用的是TypeScript，而不是纯JavaScript。以下是`.tsx`文件与`.jsx`文件之间的主要区别：

### JSX 文件

`.jsx` 文件扩展名用于在JavaScript中使用 JSX 语法。这种文件主要用于React组件开发。JSX是一种JavaScript的语法扩展，允许在JavaScript代码中直接编写HTML结构。

**示例：App.jsx**

```
jsx复制代码import React from 'react';

const App = () => {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
```

### TSX 文件

`.tsx` 文件扩展名用于在TypeScript中使用 JSX 语法。TypeScript 是 JavaScript 的超集，增加了类型系统和其他功能，帮助开发者在编译时捕获错误，提高代码质量和可维护性。

**示例：App.tsx**

```
tsx复制代码import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
```

### 主要区别

1. **类型系统**：
   - **JSX**：JavaScript是动态类型语言，缺乏静态类型检查，可能在运行时出现类型错误。
   - **TSX**：TypeScript提供了静态类型检查，可以在编译时捕获类型错误，提升代码的可靠性和可维护性。
2. **类型注释和推断**：
   - **JSX**：不支持类型注释和推断。
   - **TSX**：支持类型注释和推断。例如，`React.FC` 用于注释函数组件的类型，可以显式指定 props 的类型。
3. **开发工具支持**：
   - **JSX**：编辑器和IDE的自动补全和类型检查功能有限。
   - **TSX**：由于TypeScript的类型系统，编辑器和IDE可以提供更好的自动补全、类型检查和重构支持。
4. **编译**：
   - **JSX**：由Babel等工具将JSX转换为标准的JavaScript。
   - **TSX**：由TypeScript编译器（`tsc`）将TypeScript和JSX转换为标准的JavaScript。

### 具体实现中的不同

在项目中，如果你使用 `.tsx` 文件，可以利用TypeScript的强大功能来定义组件的props和state的类型，提高代码的健壮性和可读性。

**示例：带有props的组件**

**使用 JSX（App.jsx）**：

```
jsx复制代码import React from 'react';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Greeting name="World" />
    </div>
  );
};

export default App;
```

**使用 TSX（App.tsx）**：

```
tsx复制代码import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name="World" />
    </div>
  );
};

export default App;
```

在这个示例中，`Greeting` 组件在TSX文件中有明确的 `GreetingProps` 接口定义，确保 `name` prop 是一个字符串。这种类型检查可以帮助捕获错误并提高代码的可读性和可维护性。





