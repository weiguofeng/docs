```
title: 2、react中环境变量env加载问题
date： 2024-06-13
```



# 2、react中环境变量env加载问题



​			react中使用.env来管理环境变量，加载会根据优先级进行加载，如果同样的key最终使用优先级高的配置

### 使用 `.env` 文件管理环境变量

在React项目中，`.env` 文件用于管理环境变量，可以方便地根据不同环境（如开发、测试、生产）配置不同的参数。下面是如何使用 `.env` 文件以及它们的实现原理。

#### 1. 创建 `.env` 文件

在项目根目录创建一个 `.env` 文件，例如：

```
bash复制代码# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here
```

在React项目中，环境变量必须以 `REACT_APP_` 开头，这是Create React App（CRA）的限制。

#### 2. 使用环境变量

在React代码中，可以通过 `process.env` 访问环境变量。例如：

```
javascript复制代码// src/App.js
import React from 'react';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <div className="App">
      <h1>API URL: {apiUrl}</h1>
      <h1>API Key: {apiKey}</h1>
    </div>
  );
}

export default App;
```

#### 3. 加载环境变量

当你运行React项目时，Create React App会自动加载根目录中的 `.env` 文件，并将其中的变量注入到 `process.env` 中。这些变量可以在编译时通过Webpack注入到你的应用中。

#### 4. 环境特定的 `.env` 文件

你可以创建环境特定的 `.env` 文件，例如：

- `.env.development`：仅在开发环境中加载。
- `.env.production`：仅在生产环境中加载。
- `.env.test`：仅在测试环境中加载。

CRA会根据运行时的环境自动加载相应的 `.env` 文件。

### 实现原理

#### 1. Webpack的定义插件

CRA内部使用Webpack，它通过 `DefinePlugin` 插件将环境变量注入到代码中。例如：

```
javascript复制代码new webpack.DefinePlugin({
  'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
  'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY)
});
```

#### 2. 编译时替换

在编译过程中，Webpack会将代码中的 `process.env.REACT_APP_API_URL` 和其他环境变量替换为对应的值。这意味着这些值在构建时就已经固定，而不是在运行时动态加载的。

### 实际应用场景

1. **API请求**： 使用环境变量来配置API的基础URL和API密钥。
2. **构建配置**： 根据环境切换不同的配置，例如不同的分析工具或调试工具的启用。
3. **其他配置**： 管理任何需要根据环境变化的配置项，如日志级别、特性标志等。

### 例子

假设你有一个开发环境和一个生产环境，需要不同的API URL和API Key：

**.env.development**：

```
bash复制代码REACT_APP_API_URL=https://dev-api.example.com
REACT_APP_API_KEY=dev_api_key
```

**.env.production**：

```
bash复制代码REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=prod_api_key
```

**使用环境变量**：

```
javascript复制代码// src/api.js
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchData = async () => {
  const response = await fetch(`${apiUrl}/data`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });
  const data = await response.json();
  return data;
};
```

这样，通过使用 `.env` 文件和环境变量，你可以轻松地管理不同环境下的配置，确保在不同环境中运行时有正确的设置。



### 加载顺序

1. **`.env.local`**
   - 总是会加载，无论是在哪种模式下（开发、生产或测试）。
2. **`.env.[mode].local`**
   - 例如 `.env.development.local`，`.env.production.local`，仅在特定模式下加载。
3. **`.env`**
   - 总是会加载，无论是在哪种模式下（开发、生产或测试）。
4. **`.env.[mode]`**
   - 例如 `.env.development`，`.env.production`，仅在特定模式下加载。

### 使用实例

假设你的项目有以下环境变量文件：

- `.env`
- `.env.development`
- `.env.production`
- `.env.local`
- `.env.development.local`
- `.env.production.local`

当你在开发模式下运行项目时（例如使用 `npm start`），CRA 会按以下顺序加载这些文件：

1. `.env`
2. `.env.development`
3. `.env.local`
4. `.env.development.local`

如果在生产模式下运行项目（例如使用 `npm run build`），CRA 会按以下顺序加载这些文件：

1. `.env`
2. `.env.production`
3. `.env.local`
4. `.env.production.local`

### 文件内容示例

**.env**：

```
env复制代码REACT_APP_API_URL=https://default-api.example.com
REACT_APP_FEATURE_FLAG=true
```

**.env.development**：

```
env
复制代码
REACT_APP_API_URL=https://dev-api.example.com
```

**.env.production**：

```
env
复制代码
REACT_APP_API_URL=https://prod-api.example.com
```

**.env.local**：

```
env
复制代码
REACT_APP_API_KEY=local_api_key
```

**.env.development.local**：

```
env
复制代码
REACT_APP_SECRET_KEY=dev_secret_key
```

**.env.production.local**：

```
env
复制代码
REACT_APP_SECRET_KEY=prod_secret_key
```

在开发模式下，`process.env` 中的变量将会是：

```
javascript复制代码{
  REACT_APP_API_URL: "https://dev-api.example.com",
  REACT_APP_FEATURE_FLAG: "true",
  REACT_APP_API_KEY: "local_api_key",
  REACT_APP_SECRET_KEY: "dev_secret_key"
}
```

在生产模式下，`process.env` 中的变量将会是：

```
javascript复制代码{
  REACT_APP_API_URL: "https://prod-api.example.com",
  REACT_APP_FEATURE_FLAG: "true",
  REACT_APP_API_KEY: "local_api_key",
  REACT_APP_SECRET_KEY: "prod_secret_key"
}
```

### 注意事项

- 环境变量文件中变量名必须以 `REACT_APP_` 开头，CRA 只会注入这些变量。
- `.env.local` 文件通常用于本地开发，且不应被提交到版本控制中，因为它可能包含敏感信息或个人配置。
- 可以通过 `.gitignore` 文件忽略 `.env.local` 文件。

```
gitignore复制代码# .gitignore
.env.local
.env.*.local
```

通过这种方式，你可以灵活地管理不同环境下的配置，并确保在开发、测试和生产环境中使用正确的变量。













