import React  from "react";

<Route

      {...rest}

      render={(props) =>

        isAuthenticated ? (

          <Component {...rest} {...props} />

        ) : (

          <Redirect to="/login" />

        )

      }

    />

    const ProtectedRoute = ({ component: Component, ...rest }) => {

        const {
      
          authState: { isAuthenticated, authLoading },
      
        } = useContext(AuthContext);
      
        if (authLoading) return "Loading...";
      
        return (
      
          <Route
      
            {...rest}
      
            render={(props) =>
      
              isAuthenticated ? (
      
                <Component {...rest} {...props} />
      
              ) : (
      
                <Redirect to="/login" />
      
              )
      
            }
      
          />
      
        );
      
      };