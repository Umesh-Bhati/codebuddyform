import React, {ReactNode, createContext, useContext, useReducer} from 'react';
import { isValidEmail } from '../utils/formValidation';

type FormState = {
  formData: Record<string, any>;
  errorData: Record<string, any>;
};

type FormAction =
  | {type: 'UPDATE_ERROR'; payload: Record<string, any>}
  | {type: 'UPDATE_FORM'; payload: Record<string, any>};

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
} | null>(null);

const initialState: FormState = {
  formData: {
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
  },
  errorData: {
    email: '',
    password: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    address: '',
  },
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return {
        ...state,
        errorData: {...state.errorData, ...action.payload},
      };
    case 'UPDATE_FORM':
      return {
        ...state,
        formData: {...state.formData, ...action.payload},
      };
    default:
      return state;
  }
};

interface IFormProvider {
  children: ReactNode;
}

const FormProvider: React.FC<IFormProvider> = ({children}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{state, dispatch}}>
      {children}
    </FormContext.Provider>
  );
};

const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};

export {FormProvider, useForm};
