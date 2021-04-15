const initialState ={
    invoiceData:{}
      };
      
      const InvoiceReducer = (state=initialState,action) =>{
          console.log('from reducer',action)
          switch(action.type){
              case "UPDATE_INVOICE":
              return {
                  ...state,
                  counter: action.payload
              }
              case "ADD_INVOICE":
              return {
                  ...state,
                  counter: action.payload
              }
              default:
                  return state;
          }
      }
      
      
      export default InvoiceReducer;