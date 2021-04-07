import React, { useState, createContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home"
import Detail from "./Detail"
import './App.css';
export const Context = createContext(null); // context 全局数据管理
function App() {
  const [n, setN] = useState(0)
    return <BrowserRouter>
    <Context.Provider value={{n, setN}}>
        <React.Suspense fallback={'正在加载中...'}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Switch>
        </React.Suspense>
        </Context.Provider>
    </BrowserRouter>
}

export default App;
