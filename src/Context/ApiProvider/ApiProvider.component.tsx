import Snackbar from '@mui/material/Snackbar';

import { Alert } from '@common';
import { ReactChildren } from '@types';

import { useApiProvider, ApiContext } from './ApiProvider.service';

export const ApiProvider: React.FC<ReactChildren> = ({ children }) => {
  const { makeApiCall, handleClose, alert } = useApiProvider();
  return (
    <ApiContext.Provider value={{ makeApiCall, handleClose, alert }}>
      {alert && (
        <Snackbar open={!!alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </Alert>
        </Snackbar>
      )}

      {children}
    </ApiContext.Provider>
  );
};
