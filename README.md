# platform_api
This api is for login and registration
Please install the required stack or modules required for program to run.
Please check the urls while testing on postman or other request generator.
localhost:3000/ :--> (HEAD OVER TO POSTMAN) simple message stating head over to postman application to test the api.
localhost:3000/platform/users :-->Get all users
localhost:3000/platform/signup:-->Send(post) Json format data using application/json as header and data according to to stated schema(schema is given in the end).
localhost:3000/platform/login/:_id:-->(Not in fully working condition)Use mongodb cli db.users.find().pretty() to get all user copy the _id paste in postman and get specific user
localhost:3000/platform/changePassword/:_id:-->(As login is not working password doesnt exist)Can be used to update data of the user of specific id.(put)
localhost:3000/platform/deleteUser/:_id:--> Delete a specific user with id.
localhost:3000/platform/products:-->Get products.
localhost:3000/platform/product/create-->Create a product according to scheme stated(post)
localhost:3000/platform/product/:_id:-->get product by id using mongodb*
localhost:3000/platform/changePassword/:_id:-->change product specification*
localhost:3000/platform/deleteprod/:_id:-->Delete a product.
schema for user (please use post request to send new user before using get request)
    index:{
        type:Number
	name:{
		type: String
    email:{
		type: String
    contact:{
		type: String
    prod:{
		type: Number,
    budget:{
		type:Number,
	
    
(not fully working:-->*)


