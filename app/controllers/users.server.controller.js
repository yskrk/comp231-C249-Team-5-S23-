// Load the module dependencies
const User = require('mongoose').model('User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/config');
const jwtExpirySeconds = 300;
const jwtKey =config.secretKey;

//
// Create a new error handling controller method
const getErrorMessage = function(err) {
	// Define the error message variable
	var message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};
// Create a new user
exports.create = function (req, res, next) {
    // Create a new instance of the 'User' Mongoose model
    var user = new User(req.body); //get data from React form
    console.log("body: " + req.body.username);

    // Use the 'User' instance's 'save' method to save a new user document
    user.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(user);
            
        }
    });
};
//
// Returns all users
exports.list = function (req, res, next) {
    // Use the 'User' instance's 'find' method to retrieve a new user document
    User.find({}, function (err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};
//
//'read' controller method to display a user
exports.read = function(req, res) {
	// Use the 'response' object to send a JSON response
	res.json(req.user);
};
//
// 'userByID' controller method to find a user by its id
exports.userByID = function (req, res, next, id) {
	// Use the 'User' static 'findOne' method to retrieve a specific user
	User.findOne({
        _id: id
	}, (err, user) => {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
			// Set the 'req.user' property
            req.user = user;
            console.log(user);
			// Call the next middleware
			next();
		}
	});
};
//update a user by id
exports.update = function(req, res, next) {
    console.log(req.body);
    User.findByIdAndUpdate(req.user.id, req.body, function (err, user) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.json(user);
    });
};
// delete a user by id
exports.delete = function(req, res, next) {
    User.findByIdAndRemove(req.user.id, req.body, function (err, user) {
      if (err) return next(err);
      res.json(user);
    });
};
//
// authenticates a user
exports.authenticate = function(req, res, next) {
	// Get credentials from request
	console.log(req.body)
	const username = req.body.auth.username;
	const password  = req.body.auth.password;
	console.log(password)
	console.log(username)
	//find the user with given username using static method findOne
	User.findOne({username: username}, (err, user) => {
			if (err) {
				return next(err);
			} else {
			console.log(user)
			//compare passwords	
			if(bcrypt.compareSync(password, user.password)) {
				// Create a new token with the user id in the payload
  				// and which expires 300 seconds after issue
				const token = jwt.sign({ id: user._id, username: user.username }, jwtKey, 
					{algorithm: 'HS256', expiresIn: jwtExpirySeconds });
				console.log('token:', token)
				// set the cookie as the token string, with a similar max age as the token
				// here, the max age is in milliseconds
				res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000,httpOnly: true});
				res.status(200).send({ screen: user.username });
				//
				//res.json({status:"success", message: "user found!!!", data:{user:
				//user, token:token}});
				
				req.user=user;
				//call the next middleware
				next()
			} else {
				res.json({status:"error", message: "Invalid username/password!!!",
				data:null});
			}
			
		}
		
	});
};
//
// protected page uses the JWT token
exports.welcome = (req, res) => {
	// We can obtain the session token from the requests cookies,
	// which come with every request
	const token = req.cookies.token
	console.log(token)
	// if the cookie is not set, return an unauthorized error
	if (!token) {
	  return res.status(401).end()
	}
  
	var payload;
	try {
	  // Parse the JWT string and store the result in `payload`.
	  // Note that we are passing the key in this method as well. This method will throw an error
	  // if the token is invalid (if it has expired according to the expiry time we set on sign in),
	  // or if the signature does not match
	  payload = jwt.verify(token, jwtKey)
	} catch (e) {
	  if (e instanceof jwt.JsonWebTokenError) {
		// if the error thrown is because the JWT is unauthorized, return a 401 error
		return res.status(401).end()
	  }
	  // otherwise, return a bad request error
	  return res.status(400).end()
	}
  
	// Finally, return the welcome message to the user, along with their
	// username given in the token
	// use back-quotes here
	res.send(`${payload.username}`)
 };
 //
 //sign out function in controller
//deletes the token on the client side by clearing the cookie named 'token'
exports.signout = (req, res) => {
	res.clearCookie("token")
	return res.status('200').json({message: "signed out"})
	// Redirect the user back to the main application page
	//res.redirect('/');
}
//check if the user is signed in
exports.isSignedIn = (req, res) => {
	// Obtain the session token from the requests cookies,
	// which come with every request
	const token = req.cookies.token
	console.log(token)
	// if the cookie is not set, return 'auth'
	if (!token) {
	  return res.send({ screen: 'auth' }).end();
	}
	var payload;
	try {
	  // Parse the JWT string and store the result in `payload`.
	  // Note that we are passing the key in this method as well. This method will throw an error
	  // if the token is invalid (if it has expired according to the expiry time we set on sign in),
	  // or if the signature does not match
	  payload = jwt.verify(token, jwtKey)
	} catch (e) {
	  if (e instanceof jwt.JsonWebTokenError) {
		// the JWT is unauthorized, return a 401 error
		return res.status(401).end()
	  }
	  // otherwise, return a bad request error
	  return res.status(400).end()
	}
  
	// Finally, token is ok, return the username given in the token
	res.status(200).send({ screen: payload.username });
}

//isAuthenticated() method to check whether a user is currently authenticated
exports.requiresLogin = function (req, res, next) {
    // Obtain the session token from the requests cookies,
	// which come with every request
	const token = req.cookies.token
	console.log(token)
	// if the cookie is not set, return an unauthorized error
	if (!token) {
	  return res.send({ screen: 'auth' }).end();
	}
	var payload;
	try {
	  // Parse the JWT string and store the result in `payload`.
	  // Note that we are passing the key in this method as well. This method will throw an error
	  // if the token is invalid (if it has expired according to the expiry time we set on sign in),
	  // or if the signature does not match
	  payload = jwt.verify(token, jwtKey)
	  console.log('in requiresLogin - payload:',payload)
	  req.id = payload.id;
	} catch (e) {
	  if (e instanceof jwt.JsonWebTokenError) {
		// if the error thrown is because the JWT is unauthorized, return a 401 error
		return res.status(401).end()
	  }
	  // otherwise, return a bad request error
	  return res.status(400).end()
	}
	// user is authenticated
	//call next function in line
    next();
};