'use strict';

const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.deleteTodo = function(event, context, callback){
	var params = {
		Key : {
			"todoId" : event.todoId
		},
		TableName : process.env.TABLE_NAME
	};

	documentClient.delete(params, function(err, data){
		callback(err, data);
	});
}
