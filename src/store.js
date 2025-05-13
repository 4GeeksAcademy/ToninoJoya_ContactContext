export const initialStore=()=>{
  return{
    message: null,
    todos: [],
    urlBase : "https://playground.4geeks.com/contact/agendas",
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "SET_CONTACTS":

      return{
        ...store,
        contacts : action.payload 
      }
      
    default:
      throw Error('Unknown action.');
  }    
}
