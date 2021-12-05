[8:30 PM] Phạm Quốc Ấn
<Route      {...rest}      render={(props) =>        isAuthenticated ? (          <Component {...rest} {...props} />        ) : (          <Redirect to="/login" />        )      }    />

[8:31 PM] Phạm Quốc Ấn
const ProtectedRoute = ({ component: Component, ...rest }) => {  const {    authState: { isAuthenticated, authLoading },  } = useContext(AuthContext);  if (authLoading) return "Loading...";  return (    <Route      {...rest}      render={(props) =>        isAuthenticated ? (          <Component {...rest} {...props} />        ) : (          <Redirect to="/login" />        )      }    />  );};

