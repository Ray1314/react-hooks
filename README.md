启动项目
### `yarn start`

打包项目
### `yarn build`

# 改项目为四种数据管理

简化stort操作的方法
### 1 stort hooks
## useSelector 获取数据
## useDispatch 修改数据方法

传递的数据比较简单时
### 2 context
## createContext 创建context 并export
## <Context.Provider value={{n, setN}}> 初始化value 中的两个数据为useState 创建
## 引入Context 并 const {n, setN} = useContext(Context)  可直接使用

单页面数据管理
### 3 hooks state
父子组件传地方法

### 4 useReducer
## 父组件 const [reducerState, dispatch] = useReducer(reducer, initialState)
## <Child dispatch={dispatch} /> 传递
## 子组件 props.dispatch()

