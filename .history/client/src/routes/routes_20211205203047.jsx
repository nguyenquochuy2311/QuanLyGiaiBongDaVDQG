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