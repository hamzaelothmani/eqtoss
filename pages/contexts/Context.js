import { createContext, useState } from 'react';

const TodosContext = createContext();

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState("hamza");

   
    

    return (
        <TodosContext.Provider
            value={{
                todos,
                setTodos
            }}
        >
            {children}
        </TodosContext.Provider>
    );
};

export { TodosProvider, TodosContext };